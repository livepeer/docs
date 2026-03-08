# **Remote Signers**

\<aside\> 💡

See the [Weir doc](https://www.notion.so/Livepeer-Weir-25e0a3485687804dbaf6d62dfa424246?pvs=21) for more context surrounding remote signers

[Livepeer: Weir](https://www.notion.so/Livepeer-Weir-25e0a3485687804dbaf6d62dfa424246?pvs=21)

\</aside\>

# **Abstract**

This document describes the background and design points around the remote signer implementations of GitHub [PR\#3791](https://github.com/livepeer/go-livepeer/pull/3791) and [PR\#3822](https://github.com/livepeer/go-livepeer/pull/3822)

Remote signing is a new mode for go-livepeer, alongside the existing modes of the gateway, orchestrator, and redeemer. There are a few goals for remote signers:

* Take on most of the gateway’s blockchain-related responsibilities, avoiding any hard Ethereum dependency for gateways. This will facilitate gateway implementations on other platforms such as Python, browser, mobile, etc.  
* Allow for third-party payment operators (”clearinghouses”) to relieve gateways of crypto custody and account management issues, allowing for separate payment in traditional currencies.  
* Improve the security posture of existing gateway operators by removing the Ethereum key from the hot path of processing untrusted media.

# **Background**

The Livepeer gateway is currently a monolith: it has deep Ethereum integration to handle payments and the other logistics of operating on an blockchain, and a media processing protocol for AI and transcoding workloads.

Currently, writing an implementation of a Livepeer gateway requires deep familiarity with the Livepeer probabilistic micropayments (PM) mechanism. Very few developers actually understand PM in enough detail to implement correctly, which is one reason that go-livepeer is the only extant gateway implementation.

Beyond implementing PM, operating with PM at scale is also a challenge. One recent example: Ethereum price volatility has caused Daydream service reliability issues due to different nodes having a different view of the ETH-USD price. Debugging these types of issues is painful, and is one reason why there are very few gateway operators on the network.

Remote signing allows for separating the gateway’s Ethereum integration from its media responsibilities. This has two main implications:

* Allows for someone other than the media operator to manage payments and crypto logistics, eg a clearinghouse. The media operator could then settle directly with the clearinghouse using a traditional currency, while leaving the underlying PM settlement mechanism intact for orchestrators.  
* Removing Ethereum requirement from the core media processing greatly simplifies gateway implementation, and makes it more likely we will see new forms of the gateway, eg embedded within end-user apps for better latency and control. Developers can integrate with the Livepeer network directly via native gateway SDKs. The network would not have to funnel all its traffic through a few centralized gateway providers; the success of the Livepeer network would no longer need to be tied to the success of those few providers.

### **Signing Hot Keys**

Currently, the gateway must hold the Ethereum payment signing key in the same process that handles untrusted media coming from users. This is a security risk, as an exploit stemming from malicious input could result in the compromise of the payment signing key and lost gateway funds.

Moreover, the design of PM leads gateway providers to share a common key for all gateway instances, which increases the blast radius of any compromise.

Remote signing, by virtue of separating the Ethereum parts from the media parts, avoids this problem.

# **Design: Live AI**

Remote signing will initially be implemented for Live AI (live-video-to-video) only. There are a few reasons for this:

* Live AI is the use case that is seeing the most development and usage right now.  
* Minimizes risk to other workloads, especially transcoding.  
* Live AI will need remote signers sooner rather than later, in order to support direct-to-orchestrator local gateway clients, without going through an intermediate gateway server.

For Live AI, there are two main areas that involve Ethereum and signing:

* [GetOrchestratorInfo RPC requests](https://github.com/livepeer/go-livepeer/pull/3791)  
* [Payments](https://github.com/livepeer/go-livepeer/pull/3822)

With these two functions correctly implemented, the **go-livepeer gateway can operate entirely in off-chain mode** for production Live AI workloads, interacting with on-chain orchestrators. No orchestrator changes are required.

### **Remote Signing Protocol**

```
sequenceDiagram
    participant O as Orchestrator
    participant G as Gateway
    participant S as Signer

    %% Initial session setup
    G->>S: getOrchInfoSig()
    S-->>G: gatewaySig
    G->>O: getOrchInfo(gatewaySig)
    O-->>G: ticketParams₀

    %% First signing call (no prior signer state)
    Note over S: state is null → create fresh signer state
    G->>S: signTicket(state=null, ticketParams₀)
    S-->>G: signedTicket₀, signerState₀

    G->>O: pay(signedTicket₀)
    O-->>G: ticketParams₁

    G->>S: signTicket(signerState₀, ticketParams₁)
    S-->>G: signedTicket₁, signerState₁

    %% Subsequent calls (k = 1..N)
    loop For each k = 1..N
        Note over S: NB: ticketParamsₖ reusable between<br>calls as long as it is valid but not<br>signedTicketₖ or signerStateₖ
        G->>S: signTicket(signerStateₖ₋₁, ticketParamsₖ)
        S-->>G: signedTicketₖ, signerStateₖ

        G->>O: pay(signedTicketₖ)
        O-->>G: ticketParamsₖ₊₁
    end
```

### **Goal: State(lessness)**

A stateless implementation of the remote signer is desirable. This would facilitate the initial roll-out of the signer as a standalone service with zero additional dependencies other than those inherited from the gateway: a filled Ethereum account and Ethereum RPC infrastructure access.

Running multiple signer instances is necessary for redundancy in a production setting, however we do not want to depend on any notion of shared state across multiple signer instances, or persistent state across restarts of a single signer.

Requiring shared state, such as an external database, would increase the complexity of the initial implementation, place a larger burden on infrastructure, and increase overall maintenance due to the additional moving parts. That may be warranted at some point, but not for this initial implementation.

### **Non-Goal: Service Registry**

The service registry is another area where on-chain data is used. However, the service registry is not used for Live AI workloads. For local gateways, orchestrator discovery would need to happen via a separate mechanism, perhaps as a service offered by the clearinghouse.

### **GetOrchestratorInfo RPC**

The GetOrchestratorInfo RPC request from the gateway to the orchestrator to retrieve orchestrator information such as capabilities and capacity reporting. The gateway supplies a signature with this RPC as a form of authentication. However, this is authentication is *extremely* weak: the signature never changes and can be trivially replayed for as long as the gateway’s private key is in use. We can fix this in the future, but in the meantime this has been judged to not be a real risk since this signature is only used to request information.

Because the signature never changes, gateway implementations can retrieve (or generate) the signature once during startup, and cache it for later use. This is the basis of the Remote Signer implementation of the OrchestratorInfo RPC response.

[https://github.com/livepeer/go-livepeer/pull/3791](https://github.com/livepeer/go-livepeer/pull/3791)

### **Payments**

Virtually all of the gateway’s payment handling for Live AI can be encapsulated within the [LivePaymentSender](https://github.com/livepeer/go-livepeer/blob/9f123db998e9603f2cbac20ac5cdd417701889cd/server/live_payment.go#L37-L41) interface. The main question resolves around state management (”bookkeeping”) and where it should live: on the gateway itself, or the signer.

[https://github.com/livepeer/go-livepeer/pull/3822](https://github.com/livepeer/go-livepeer/pull/3822)

**Bookkeeping Payments State**

There is quite a bit of state associated with an ongoing PM session, and certain job types have stateful details around fee calculation and ticket generation. For example, Live AI calculates the fee based on time elapsed since the last payment, using a fixed cost per hour, with payments at regular intervals.

For a variety of reasons, this bookkeeping should live on the signer itself:

* It is easier to update a few signers than many distributed gateways, especially gateways that may be embedded client-side. All gateways using remote signers will be immediately updated as soon as the signer is updated; there is no lag time in waiting for end-users to update.  
* Relieves gateways of an Ethereum dependency for things like ticket generation (sans signing), block and round polling, and various validity checks. Access to on-chain data or oracles such as ETH-USD pricing is another barrier.  
* Relieves gateway implementations of the burden of PM accounting, which is quite complex, and of fee calculations for each job type. This is very easy to get wrong and would be an unnecessary distraction for implementors.

Since the signer is designed to be stateless for now, the easiest way to solve the problem of stateful sessions with a stateless node is to have the calling client send the state along with each signing request, and return the updated state along with the response. If support for an external database is added later, then the requirement to carry through the state can be loosened somewhat for signers that support it.

The client is responsible for retaining the state returned from the last remote call, and sending it back with the next call, where the state will be further updated. Moreover, the orchestrator usually returns updated ticket parameters after each PM submission, so the client should also forward those on to the signer after each payment call, although this is not strictly necessary unless the ticket parameters have expired.

If clients do not send along signer state (eg, for the first signing request of a session) then signer will create a fresh state using the provided orchestrator info. Failure to consistently send valid, updated states may lead to invalid tickets due to repeated nonces if ticket parameters are reused between calls. Likewise, doing each signer call with a fresh, empty state means the client loses the benefit of balance accrual, leading to excessive ticket generation and over-payment of fees.

Since signer state is meant to be passed on from one call to another, high frequency or concurrent ticket signing requests for the same session are likely to produce invalid tickets. However, this is not an intended use-case.

# **Alternative Implementations**

Beyond the surface-level detail of Livepeer probabilistic micropayments (”generate tickets every so often and send them down”) is a significant amount of complexity. If we can leave this complexity out of upcoming gateway implementations, we should. We only really need one remote signer implementation, but we need many gateway implementations in order to have direct integration with the Livepeer network natively on different platforms.

Most alternative approaches to remote signing suffer in that they do not make things much easier for gateways: they might outsource one specific bit (eg, literally just the signing) while leaving the rest of the heavy lifting intact. This only increases the overall complexity of the gateway, by adding a moving part to the mix without removing anything. It is by actually *removing* things, such as bookkeeping or Ethereum, that allows for a wholesale simplification of the gateway’s responsibility.

### **Alternative: PM Deep Dive**

We could dive into the plumbing of PM and carve out an implementation specifically around remote signing, for example the Sender’s [CreateTicketBatch](https://github.com/livepeer/go-livepeer/blob/9f123db998e9603f2cbac20ac5cdd417701889cd/pm/sender.go#L109-L148). This would in theory allow us to transparently support other types of workloads besides Live AI. However, this does not relieve gateway implementations of a heavy Ethereum integration and related bookkeeping. This also opens up the risk of users attempting unsupported configurations, eg using remote signers with transcoding \- which would mean more work to lock down.

### **Alternative: Open Signing Endpoint**

Rather than send tickets to be signed, the signer could expose an endpoint that receives an arbitrary payload, and blindly signs bytes over that payload, whatever it is. This “open signing endpoint” is a dead end for a few reasons:

* Almost unbounded risk if anything goes wrong, up to and including losing all your funds in a single transaction. On the other hand, a more circumscribed endpoint can have more guardrails around it.  
* Does not help with any of the issues around bookkeeping. Specifically: clearinghouses need to know the amount that is being signed over, and alternative gateways shouldn’t have to (re-)implement all the scaffolding around payments.

### **Alternative: Batch AI Workloads**

Batch AI workloads, as far as we still run them, can be ported to use remote signers, as the basic payment mechanism should not differ too much from that of live AI. However, implementing and testing support for remote signing of batch AI workloads is not a goal for this initial implementation. The same goes for other mechanisms such as BYOC.

### **Alternative: Transcoding Workloads**

Transcoding handles payments in a more stringent manner: tickets are signed with the hash of the segment. This necessarily puts ticket signing in the hot path for transcoding, whereas payments are asynchronous in Live AI. Any remote signing for transcoding would increase latency and become another thing to go wrong in an already-complicated code path. Moreover, transcoding workloads are on the decline and much of the transcoding-specific code base is not maintained anymore except to fix critical bugs, and should be considered legacy. There is zero appetite for any risk here, so we should aim to steer clear of transcoding as much as possible.

