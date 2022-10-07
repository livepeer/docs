---
title: Selection
---

# Selection

The Livepeer network is an open marketplace where broadcasters are able to
select orchestrators to send work to based on their own preferences. The
algorithm for selecting orchestrators depends on the broadcaster implemention,
but all selection algorithms including the default implementation included in
`livepeer` consider the following factors:

- Economic security
- Latency

## Economic security

The economic security provided by an orchestrator is measured by its total stake
including its own self-delegated stake as well as the stake of its delegators.
The more stake that an orchestrator has, the more economic security it provides
to a broadcaster because the stake can be slashed if the work is performed
incorrectly.

The default broadcaster implementation will bias towards selecting orchestrators
that provide more economic security more often with the probability of an
orchestrator receiving work being proportional to the orchestrator's stake
relative to the rest of the orchestrators on the network. However, just because
an orchestrator receives work does not necessarily mean it will retain work - if
the orchestrator does not meet the requirements of the broadcaster for other
selection factors, the orchestrator can lose the work after being initially
selected.

## Latency

The latency of an orchestrator is the total time for an orchestrator to return
transcoded results to a broadcaster. This includes the time it takes for the
broadcaster to upload a segment to the orchestrator, the time it takes for the
orchestrator to transcode the segment (and in the case of a split orchestrator
and transcoder this includes the network transit time between the orchestrator
and transcoder) and the time it takes for the broadcaster to download the
transcoded results from the orchestrator. The latency of an orchestrator will
depend on its geographic proximity to the broadcaster, its hardware resources
which impact transcoding speed and its bandwidth resources which impact
upload/download speed.

The default broadcaster implementation will assess an orchestrator's latency
after initial selection to determine whether to continue sending work to the
orchestrator. The default requirement is for the transcoded results to be
received within real-time meaning the round trip time needs to be less than or
equal to the duration of segment. If an orchestrator that is initially selected
fails to meet this requirement, it may stop receiving work from the broadcaster
giving other orchestrators an opportunity to win work.

## Additional factors

The selection algorithm in `livepeer` is being improved over time and in the
future, there may be a variety of selection algorithms used in the network.
Additional factors that selection algorithms may consider include:

- Fees earned
- Reputation

