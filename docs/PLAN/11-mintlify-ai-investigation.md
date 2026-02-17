# Task 11: Mintlify AI assistant investigation

## Agent instructions (parallel execution)

| Item | Value |
|------|--------|
| **Branch** | `docs-plan/11-mintlify-ai-investigation` |
| **First step** | Create the branch: `git checkout -b docs-plan/11-mintlify-ai-investigation` (run from docs-v2-preview — main branch in this fork) |
| **Report path** | `docs/PLAN/reports/11-mintlify-ai-investigation-report.md` (create on completion) |
| **PR target** | `docs-v2-preview` (main branch in this fork) |

Before starting: run the first step (create branch), then perform the task.  
On completion: write report (work + testing + follow-ups), then open PR.

---

## Objective

Investigate and document: (1) Whether the Mintlify AI assistant can use additional RAG content beyond the published docs; (2) Whether it can create issues in the repo (or link to an external issue form).

## Scope

- Mintlify dashboard and docs: Assistant, Knowledge base, Search sites, API/webhooks; GitHub app capabilities

## Deliverables

- Short report (in docs/PLAN or docs/) with findings, links to Mintlify docs, and recommendations (e.g. Search sites for extra RAG; workaround for issue creation if not native)

## References

- Mintlify Assistant/Agent docs; Search sites for additional sources; GitHub integration (CI/previews, not issues per search)

---

## Deep dive: Custom pipeline from Mintlify AI (n8n, GitHub issues)

**Short answer:** Mintlify does **not** provide outbound webhooks or event callbacks for the AI assistant. You cannot configure “on message” or “on response” to fire to n8n or GitHub from the **hosted docs site**. You can still build a custom pipeline in two ways: (1) **poll** conversation/analytics via the API and pipe to n8n/GitHub on a schedule, or (2) **embed** the assistant in your own app and proxy chat through your backend, which can then send to n8n or create GitHub issues in real time.

### What Mintlify does *not* offer

- **No outbound webhooks** for assistant events (e.g. “user sent message”, “assistant responded”, “question unanswered”). The API reference and docs do not document webhooks or outbound events for the assistant.
- **Deflection email** is only a static address shown to the user when the assistant can’t answer; it does not trigger a webhook or server-side notification.
- **Hosted docs site**: If the assistant runs only on the default Mintlify-hosted docs (e.g. `docs.livepeer.org`), you have no place to inject code, so there is no built-in “send to n8n” or “create GitHub issue” hook.

References: [Assistant](https://www.mintlify.com/docs/ai/assistant), [API reference](https://www.mintlify.com/docs/api-reference), [Trigger update](https://www.mintlify.com/docs/api/update/trigger) (for deploys, not assistant events).

### Option 1: Poll Analytics API → n8n → GitHub (scheduled pipeline)

Mintlify’s **Analytics API** exposes assistant conversation history and (where available) user feedback. You can:

1. Call **Get assistant conversations** (and, if needed, **Get user feedback**) on a schedule (e.g. cron in n8n or GitHub Actions).
2. In n8n: use a **Schedule** or **Cron** trigger → **HTTP Request** to Mintlify (with API key) → filter/transform (e.g. “unanswered”, low feedback, or all new threads) → **GitHub** node to create issues and/or **Webhook** or other nodes to send payloads elsewhere.

This is **not real-time**: it’s a batch/sync pipeline. Good for “create GitHub issues from recent or unanswered assistant conversations” or “export to our own analytics”.

- Analytics / conversations: [Analytics](https://www.mintlify.com/docs/optimize/analytics), [Get assistant conversations](https://www.mintlify.com/docs/api-reference) (Analytics section), [Get user feedback](https://www.mintlify.com/docs/api/analytics/feedback).

### Option 2: Embed assistant + backend proxy (real-time pipeline)

If you **embed** the Mintlify assistant in your own application (e.g. Next.js):

1. You use **Vercel AI SDK** `useChat` (or similar) and point it at **your** API route instead of directly at `api.mintlify.com`.
2. Your API route: (a) forwards the request to Mintlify’s assistant message endpoint (`POST .../assistant/{domain}/message`), (b) optionally forwards the same payload (or a subset) to an **n8n webhook** or (c) calls **GitHub API** to create an issue (e.g. when the user asks to “create an issue” or when you detect “unanswered” from the response).

That gives you a **real-time** custom pipeline: every message (or chosen subset) can trigger n8n or a GitHub issue from your backend.

- Embed: [Tutorial: Build an in-app documentation assistant](https://www.mintlify.com/docs/guides/assistant-embed), [Assistant message API](https://mintlify.com/docs/api-reference/chat/create-assistant-message).  
- n8n: use a **Webhook** trigger; your backend `POST`s to that webhook. For GitHub: n8n **GitHub** node to create issues (e.g. [Webhook and GitHub](https://n8n.io/integrations/webhook/and/github/)).

### Recommendation

- **Hosted Mintlify docs only:** Use **Option 1** (scheduled Analytics API + n8n) if you want to create GitHub issues or send assistant data to n8n. Document the exact Analytics endpoints and filters (e.g. date range, “no citation”) in the report so n8n workflows can be defined.
- **If you add an in-app assistant:** Use **Option 2** (embed + proxy) so every (or selected) conversation can be sent to n8n or turned into a GitHub issue in real time.
- In the final report, add a subsection “Custom pipeline (n8n / GitHub issues)” that summarizes the above and links to Mintlify Analytics API, embed guide, and n8n/GitHub patterns.

---

## Deep dive: Custom questions, menu options, and “form in the bot” (e.g. add a new project → GitHub/Sheets)

**Short answer:** You can add **custom default questions** (suggested prompts) in the Mintlify assistant, but they are **only clickable starters** for doc Q&A. Mintlify does **not** provide a menu of options that trigger workflows, or a way to run a multi-step “form” inside the bot and send structured answers to GitHub, Google Sheets, or n8n. To get “ask all the questions in the bot and send answers to GitHub/Sheets,” you need a **separate form or your own conversational flow** (e.g. in an embed or a linked form), not the built-in assistant as the form engine.

### What Mintlify *does* offer: default questions

- In **Assistant Configurations** you can add **default questions** (suggested prompts).[^assistant]
- These appear as clickable suggestions (e.g. “How do I get started?”, “What is Livepeer?”) so users can quickly ask common doc questions.
- They are **not**:
  - A fixed menu of workflow options (e.g. “Add project”, “Report bug”).
  - A multi-step form that collects structured fields (name, description, etc.).
  - Triggers that call your backend, n8n, GitHub, or Google Sheets.

So you can add custom questions like “I want to add a new project” as a **suggestion**, but the assistant will only answer from the docs (or say it can’t help). It will not run a workflow or collect and submit structured answers by itself.

Ref: [Assistant](https://www.mintlify.com/docs/ai/assistant), [Assistant Configurations](https://dashboard.mintlify.com/products/assistant/settings).

### What Mintlify does *not* offer: workflow menu or form-in-the-bot

- **No custom tools/actions:** The assistant’s “tool calling” is internal (search docs, cite sources, code examples). You cannot register custom actions (e.g. “create GitHub issue”, “add row to Google Sheets”, “start n8n workflow”).[^api]
- **No outbound webhooks:** As in the pipeline section above, the hosted assistant does not POST to your URLs when someone asks or answers something.
- **No structured form engine:** The assistant is a free-form RAG chat. It does not have a built-in “ask question 1, then 2, then 3, then submit to X” form mode or a fixed menu that triggers different workflows.

So you **cannot** natively “ask all the questions in the Mintlify bot and send those answers to GitHub/Google Sheets” using only the hosted assistant.

Ref: [Assistant message API](https://mintlify.com/docs/api-reference/chat/create-assistant-message), [API reference](https://www.mintlify.com/docs/api-reference).

### Workarounds: how to get “questions → send to GitHub/Sheets”

**Option A: Link from a default question to an external form (recommended for hosted docs)**  
- Add a default question like “I want to add a new project” or “Submit a project for the showcase.”  
- In your docs (or a single doc page), write a short section that explains the process and **links to an external form** (e.g. Typeform, Google Form, or your own form that POSTs to n8n).  
- Optionally, in the same doc, add a **pre-filled link** to create a GitHub issue (e.g. GitHub “new issue” URL with a template and query params).  
- The assistant will then often cite that doc when users click the default question; users follow the link and fill the form. The form (or n8n behind it) sends data to GitHub/Sheets.  
- **Limitation:** The “questions” are not asked inside the bot; the bot points users to a form.

**Option B: Embed + your own “form” or conversational flow**  
- Embed the Mintlify assistant in your own app (for doc Q&A) and **separately** build your “add a new project” flow in the same app: either (1) a **multi-step form** (your UI) that submits to an API that writes to GitHub/Sheets/n8n, or (2) a **custom chat or wizard** (your backend asks the questions, collects answers, then calls GitHub/Sheets/n8n).  
- The Mintlify assistant is used for doc help; the “menu” (e.g. “Add project”) and the question flow are your code. You can present a menu that triggers your form or your wizard, and only that flow sends data to GitHub/Sheets.

**Option C: Parse conversation from Analytics (batch, not a true form)**  
- Use the **Analytics API** (e.g. Get assistant conversations) to pull conversations. You could try to identify threads where the user said they want to “add a project” and parse the following messages for project name, description, etc., then have n8n write to GitHub/Sheets.  
- This is **batch, best-effort, and fragile** (LLM answers are not structured), so it’s not a reliable replacement for a real form. Only consider for analytics or loose triage, not as the primary “form in the bot.”

### Recommendation

- **Hosted Mintlify docs only:** Use **Option A**: custom default questions that guide users (e.g. “Add a new project”), and a doc page that links to an **external form** or **GitHub issue template**; the form or issue template is what sends data to n8n/Google Sheets/GitHub.
- **If you embed the assistant:** Use **Option B**: keep the assistant for doc Q&A and implement a clear menu + your own form or wizard that collects the answers and sends them to GitHub/Sheets/n8n.
- In the final report, add a subsection on “Custom questions and workflow menu” that states: default questions are suggested prompts only; workflow triggers and “form in the bot” require an external form or your own embedded flow.

---

## If you want full control of the pipeline

Mintlify’s assistant is a closed box: RAG over your docs, no webhooks, no custom tools, no “run my workflow.” To **own the pipeline** (your questions → your logic → n8n / GitHub / Sheets), you have to own the entry point.

| Approach | What you control | Tradeoff |
|----------|------------------|----------|
| **Your app + your chat/form** | Full control. You build the UI (form or conversational wizard), your backend asks questions, collects answers, and POSTs to n8n / GitHub / Sheets. | Mintlify is doc hosting only. No “AI assistant” in the pipeline unless you build or plug in your own (e.g. your LLM + RAG, or a separate doc-search API). |
| **Your app + Mintlify embed behind your proxy** | You see every message and can duplicate to n8n/GitHub. You still can’t make Mintlify ask *your* questions or run *your* workflow; you only observe and forward. | Partial: real-time pipe out, but no custom menu/form inside the assistant. |
| **Hosted Mintlify docs only** | None. You get suggested prompts and deflection email. No pipeline. | Easiest ops, zero pipeline control. |

**Bottom line:** For full pipeline control (custom questions, menu, “add a project” → GitHub/Sheets), use **your own form or your own chat** that posts to your backend → n8n/GitHub/Sheets. Use Mintlify for docs and maybe “search docs” via API, not as the workflow engine. If the product roadmap doesn’t include webhooks or custom tools, that’s the only way to own it.

**Build your own assistant:** If you need full control (custom questions, workflow triggers, piping to n8n/GitHub/Sheets), you’re better off building your own assistant than relying on Mintlify’s. Use Mintlify for **docs hosting and content**; implement your own chat (e.g. your LLM + RAG over the same docs via Mintlify Search API or your own index, or a simple form/wizard) so you own the pipeline end to end.

---

## Hijack their UI, link to your pipeline

**Goal:** Keep the *look* of the Mintlify assistant on the docs (floating button, chat panel) but send every request through **your backend** so you get the same doc Q&A **plus** controlled output (n8n, GitHub, Sheets, logging).

**Idea:** Hide Mintlify’s assistant in the UI, inject your own widget that looks the same but calls your API. Your backend proxies to Mintlify’s assistant API and returns the same response to the user; in parallel you do whatever you want with the messages (webhook, DB, issue creation).

### Confirmation: this is possible

| Requirement | Evidence |
|-------------|----------|
| **Hide their assistant** | Mintlify [Custom scripts](https://mintlify.com/docs/customize/custom-scripts) documents identifiers: `AssistantEntry: assistant-entry`, `AssistantEntryMobile: assistant-entry-mobile`, `ChatAssistantSheet: chat-assistant-sheet`. You can target these in `style.css` or custom CSS. Hiding with `display: none` is standard and supported. |
| **Inject your widget** | Same docs: custom JS is “the equivalent of adding a `<script>` tag … into every page.” Any `.js` file in your content directory runs on every page. You can use that JS to create and append an external script (e.g. your widget bundle) or an iframe pointing at your app. External script injection is documented in Mintlify examples (e.g. loading third-party scripts via `document.createElement('script'); script.src = '...'`). |
| **Proxy to Mintlify API** | The [Assistant message API](https://mintlify.com/docs/api-reference/chat/create-assistant-message) is a normal REST endpoint. You call it with an assistant API key (Bearer). There is no “client-only” restriction; a backend can forward the same request body and stream the response. |
| **Your pipeline output** | Your backend is your code. After (or while) proxying, you POST to n8n, GitHub, Sheets, or your DB. No Mintlify dependency. |

**Verdict:** Yes, it is possible. Hide their entry with documented CSS, inject your chat via custom JS (external script or iframe), point the widget at your proxy, and have your proxy call Mintlify and add your own outputs.

### One API that hijacks on certain input

Because the Mintlify assistant is a normal REST API, your proxy doesn’t have to blindly forward everything. You can use **one** backend route that branches on the user’s message:

- **If input matches your rules** (e.g. “add a project”, “submit for showcase”, or a keyword/phrase): run your pipeline (n8n webhook, create GitHub issue, append to Sheets), then either (a) still call Mintlify and return their reply, or (b) return a custom reply (“I’ve submitted that” / “Here’s the form”) and skip the Mintlify call for that turn.
- **Else:** forward the request to Mintlify and return their response as usual.

So you don’t need “an additional” API — you have a single proxy that **conditionally hijacks** on certain input and adds your output. The only reason to replace the UI (hide theirs, show yours) is so the **client** calls your API instead of `api.mintlify.com`. Once the client hits you, that one route does the rest: hijack when it matters, otherwise pass through.

### Parallel ghost API

You can also think of it as a **parallel ghost API**: one request hits your proxy, and you run two paths at once:

1. **User path** — Forward to Mintlify, stream/return the response to the client. User sees the normal assistant behavior.
2. **Ghost path** — In parallel (or right after), send a copy of the request (and when done, the response) to your pipeline: n8n webhook, log/DB, GitHub issue, Sheets. No impact on the user-facing reply.

The ghost never blocks or changes what the user gets; it just gets a copy so you control the output. Optionally you only run the ghost path when the input matches certain conditions (so the ghost “wakes up” on “add a project”, etc.).

### 1. Hide their assistant, show yours

**Can I inject chat?** Yes. Mintlify lets you run custom JavaScript on every page (any `.js` file in your content directory). In that script you can inject your chat in two ways:

- **Script tag:** `document.createElement('script'); script.src = 'https://your-host.com/chat-widget.js'; document.body.appendChild(script);` — your bundle mounts a floating chat UI that talks to your API.
- **Iframe:** Create an iframe pointing at a route like `https://your-host.com/embed/chat`; your app serves the chat UI there. Same result: chat appears on the docs page and calls your backend.

So you’re not limited to a separate “Chat” link — you can inject your chat directly into the docs. Hide Mintlify’s `.assistant-entry` so only yours shows.

- Mintlify exposes [custom scripts and CSS](https://mintlify.com/docs/customize/custom-scripts). You can hide their chat entry points:
  - `.assistant-entry` (desktop)
  - `.assistant-entry-mobile` (mobile)
  - Optionally `.chat-assistant-sheet` if you only want to hide the panel.
- In your repo’s `style.css` (or dashboard custom CSS), add:
  ```css
  .assistant-entry, .assistant-entry-mobile { display: none; }
  ```
- Then inject **your** widget via custom script: a floating button + panel that matches their position/style. That widget’s `api` target is **your** backend URL, not `api.mintlify.com`.

### 2. Your backend = proxy + your pipeline

- Your backend exposes a route that **accepts the same request shape** as Mintlify’s assistant message API (e.g. `messages`, `threadId`, `fp`, `retrievalPageSize`).
- On each request:
  1. **Forward** the request to `POST https://api.mintlify.com/discovery/v1/assistant/{domain}/message` with your Mintlify assistant API key.
  2. **Stream or return** the response back to your widget so the user sees the same answer experience.
  3. **In parallel or after:** send a copy of the request/response to your pipeline — e.g. POST to n8n webhook, append to a log/DB, create a GitHub issue when you detect “unanswered” or a certain intent. You control this output; Mintlify never sees it.

So: **same functions** (doc Q&A via their model) **plus** your own outputs. The user still gets “Mintlify-style” answers; you get every message and reply in your system.

### 3. Your widget (clone their UX)

- Build a small chat UI that mimics theirs: floating button, slide-out panel, message list, input, streaming text. Use the same [embed pattern](https://www.mintlify.com/docs/guides/assistant-embed) (e.g. Vercel AI SDK `useChat`) but with `api` set to **your** proxy URL, e.g. `https://your-backend.com/api/mintlify-proxy`.
- Host this UI somewhere you can load from the docs (same domain or CORS-friendly). Inject it via Mintlify custom script, e.g. a script tag that loads your bundle and mounts the widget, or an iframe to a route like `https://assistant.yoursite.com/embed`.
- Styling: match their bubble, colors, and layout so most users don’t notice the swap.

### 4. Caveats

- **Keys:** Your proxy must hold the Mintlify assistant API key (server-side). The widget only talks to your backend; the backend talks to Mintlify. Never expose the Mintlify key in the client.
- **Streaming:** If Mintlify’s API returns a stream, your backend must stream through to the client so the UX stays responsive. Your “side” pipeline (n8n, etc.) can run on the full message/response once the turn is done.
- **Custom scripts limits:** Confirm in Mintlify’s docs that custom scripts allow loading an external script or iframe; some doc platforms restrict that. If they lock it down, you fall back to a prominent link from the docs to “Chat” that opens your app (same proxy idea, different entry point).

### 5. Summary

| Step | What you do |
|------|----------------|
| Hide theirs | CSS: `.assistant-entry, .assistant-entry-mobile { display: none; }` |
| Inject yours | Custom script: load your widget (or iframe) that looks like their assistant. |
| Widget → you | Widget `api` = your backend (e.g. `/api/mintlify-proxy`). |
| You → Mintlify | Backend forwards request to Mintlify assistant API, returns response to widget. |
| Your output | Backend also POSTs to n8n / GitHub / Sheets / DB per your rules. |

Result: their UI slot, your pipeline. Same doc Q&A, plus any output you want.

### Concrete example: Showcase page, “Want to add your own project?”

**Setup:** User is on the **showcase** docs page. They have the assistant open (the chat bubble / panel).

**What you want:** When they’re on that page (maybe after they click something, or as soon as the chat opens), show a message like “Want to add your own project?” then ask a bunch of questions (project name, description, link, etc.) and **capture their answers** and send them to n8n / GitHub / Sheets.

**With the normal Mintlify assistant:** **No.** You cannot do this. The Mintlify widget is a closed client that only talks to `api.mintlify.com`. You cannot:
- Inject a message into their chat (e.g. “Want to add your own project?”).
- Make their assistant ask *your* questions in sequence.
- Capture the user’s replies and send them to your pipeline.

So if the user has the **stock** Mintlify assistant open on the showcase page, you cannot send that text, run your question flow, or capture input.

**With your injected chat (hide theirs, inject yours):** **Yes.** You control the UI and the backend. Then you can do exactly this:

1. **Page-aware widget**  
   Your chat script knows the current page (e.g. from `window.location.pathname` or a data attribute on the showcase page). When the user opens the chat on `/showcase` (or similar), your widget can show an initial message: *“Want to add your own project?”* with a button or “Yes” as a quick reply.

2. **User says yes or clicks**  
   Your widget sends that to **your** backend. Your backend doesn’t call Mintlify for this flow; it runs your own “add project” flow.

3. **Your backend asks questions and captures input**  
   Either:
   - **Conversational:** Backend replies with “What’s the project name?” → user types → you store it and ask “Description?” → … → “Link?” → then “Thanks, submitted.” and POST the collected object to n8n webhook (or GitHub issue, Sheets).
   - **Form:** Backend sends a message that renders a small form in your chat (project name, description, link); user fills and submits; your backend receives one payload and POSTs to n8n/GitHub/Sheets.

4. **Doc Q&A still works**  
   For any other message (e.g. “How do I use the API?”), your backend forwards to Mintlify and returns their answer. So the same chat does both: “add project” (your flow, your capture) and normal doc Q&A (Mintlify).

**Summary:** To send “Want to add your own project?” and then ask questions and capture input, you must use **your injected chat**, not the normal Mintlify assistant. On the showcase page your chat can show that prompt (optionally when they click something on the page), run your question flow, and send the answers to your pipeline.

### Keep Mintlify AI + add a button that triggers your form (same chat)

You want: **normal Mintlify assistant** (doc Q&A) most of the time, but when the user **presses a button** (e.g. “Add your project” on the showcase page), **hijack the chat** and run your own form-fill workflow, then return to normal.

**Yes, you can.** Use your **injected chat** (hide Mintlify’s, show yours). Your chat does two things:

1. **Default mode — Mintlify doc Q&A**  
   Messages go to your proxy → your backend forwards to Mintlify → user gets the same AI assistant answers. No change in behavior.

2. **Form mode — when user presses the button**  
   The button on the page tells your chat to switch mode. For example:
   - The showcase page has a CTA: “Add your project”. In the MDX you add `onClick` (or a link) that calls into your widget, e.g. `window.LivepeerChat?.startAddProject()` or `postMessage` to your iframe.
   - Your chat widget receives that, switches to “form mode”: shows your questions one by one (or a form), collects project name, description, link, etc., sends each (or the final payload) to your backend, which POSTs to n8n / GitHub / Sheets.
   - When the form is done, your chat switches back to default mode — next message is again proxied to Mintlify (doc Q&A).

So the same chat is “the assistant” most of the time and “your form” when the user opts in via the button. You’re not replacing the AI assistant; you’re **adding** a mode that your UI and backend control. Mintlify’s API is still used for every normal turn; your form flow never touches Mintlify.

**Implementation detail:** Your widget (script or iframe) exposes a way for the page to trigger form mode, e.g. a global like `window.LivepeerChat = { startAddProject: () => { ... } }` or the page posts a message to the iframe. The MDX for the showcase page includes the button and that call. No Mintlify config change needed beyond hiding their assistant and injecting yours.

### Can I use their assistant widget with my scripts? (No)

**Short answer: no.** You can’t use the **stock** Mintlify assistant widget and have your scripts make it ask your questions or capture input. Their widget is a closed client: it only talks to `api.mintlify.com`. It does **not** expose:

- A way to **inject messages** into the conversation (e.g. “What’s your project name?”) from your page or script.
- A way to **read** the user’s messages and send them to your backend (n8n, GitHub, Sheets).
- Hooks or events for “user sent a message” / “assistant replied” that you could use to drive your own flow.

So you cannot: “User clicks my button → Mintlify chat opens → my script makes their chat ask my questions → my script captures replies.” Their UI is not scriptable in that way. To run your own form-fill workflow in the same chat slot, you have to **replace** their widget with yours (hide theirs, inject yours). Your widget can look like theirs and still use Mintlify for normal doc Q&A via your proxy; the form flow is your UI + your backend.

### Flow summary (button → your form in the same chat)

1. User presses a button or link on the MDX Mintlify page (e.g. “Add your project” on the showcase page).
2. **Your** assistant chat opens. (You hid Mintlify’s and injected yours, so the bubble/panel is yours — it just looks like theirs.)
3. Your script takes over: the chat asks **your** questions (e.g. project name, description, link), one by one or as a form.
4. The user’s input is saved (in your widget state and/or sent to your backend as they go).
5. Your script sends that input somewhere (n8n webhook, GitHub issue, Google Sheets, etc.) — either at the end or as each answer is given.

So: same UI slot as “the assistant”, but when they hit the button you’re running your own form-fill workflow and piping the data wherever you want. The “Mintlify assistant” they see is your injected chat; for normal doc Q&A your backend proxies to Mintlify, and for this flow your backend runs your form and capture logic.

---

## How to build your own assistant (concrete approach)

**Goal:** Own the pipeline (custom questions, menu, “add a project” → collect answers → n8n / GitHub / Google Sheets) while keeping Mintlify for docs hosting.

### 1. Where the assistant lives

- **Option A (simplest):** A separate app, e.g. `assistant.livepeer.org` or `docs.livepeer.org/chat`, linked from the Mintlify docs (nav link or CTA). You host the chat UI and backend yourself; no dependency on Mintlify’s layout.
- **Option B:** A floating chat widget on the same domain. If your docs are on a custom domain and you can add [custom scripts](https://mintlify.com/docs/customize/custom-scripts) or a React component in MDX, you could load your widget in a key page (e.g. “Get started”). Script loads your app’s chat bundle; chat talks to your backend. Validate that Mintlify’s script injection allows this (CORS, CSP).

Recommendation: start with **Option A** so you don’t depend on Mintlify’s script/customization limits.

### 2. Architecture (high level)

```
[User] → [Your chat UI] → [Your backend API]
                ↓                    ↓
         (menu: “Ask docs” |   (route: /api/chat or /api/action)
          “Add a project”)              ↓
                                    ┌───┴───┐
                                    │ RAG?   │ → Mintlify Search API (or your index)
                                    │ Form?  │ → collect fields → n8n webhook / GitHub / Sheets
                                    └────────┘
```

- **Your backend** decides intent (e.g. “ask about docs” vs “add a project”). For “ask docs” it calls Mintlify Search API for context and your LLM for the reply. For “add a project” it runs your own flow (see below).
- **Mintlify** = docs site + **Search API** for RAG. You do not use Mintlify’s assistant.

### 3. RAG (doc Q&A)

- Use **Mintlify Search API**: `POST https://api.mintlify.com/discovery/v1/search/{domain}` with query, optional filters (version, language). Use assistant API key (`mint_dsc_...`). [Search documentation](https://www.mintlify.com/docs/api/assistant/search).
- Your backend: (1) receives user message, (2) calls Search API, (3) passes results as context to your LLM (OpenAI, Anthropic, etc.), (4) streams or returns the reply. You own prompts and tool use.

### 4. “Add a project” (or any workflow with answers → GitHub/Sheets)

Two patterns:

- **Structured form (recommended):** In your chat UI, when the user picks “Add a project”, show a **form** (your React/Vue/etc.): project name, description, link, etc. On submit, your backend POSTs to an **n8n webhook** (or calls GitHub API / Google Sheets API). n8n can then create the issue, append the row, notify Slack, etc. No parsing of free text.
- **Conversational wizard:** Your backend drives a state machine (e.g. “ask name” → “ask description” → “ask link” → “confirm” → submit). Each turn: backend sends the next question; user reply is stored in session; at “confirm” you send the collected payload to n8n/GitHub/Sheets. You still own the schema and the pipeline.

In both cases the **answers** are structured and sent by **your backend** to your chosen endpoints. No reliance on Mintlify.

### 5. Minimal stack (example)

- **Frontend:** Next.js (or any SPA) with a chat UI: menu or quick actions (“Ask docs”, “Add a project”). For “Ask docs”, call your backend; for “Add a project”, open your form or wizard.
- **Backend:** Next.js API routes (or separate service). Routes: e.g. `POST /api/chat` (RAG: Mintlify Search + LLM), `POST /api/project` (form submit → n8n webhook or GitHub/Sheets).
- **RAG:** Mintlify Search API for doc context; your LLM for answers.
- **Pipeline:** n8n webhook receives JSON (e.g. `{ "projectName", "description", "link" }`); n8n workflow creates GitHub issue and/or appends to Google Sheets.

### 6. Summary

| Piece | Use |
|-------|-----|
| Mintlify | Docs hosting + **Search API** for doc context only. |
| Your app | Chat UI + menu (e.g. “Ask docs” / “Add a project”). |
| Your backend | Intent routing, RAG (Search API + LLM), form/wizard logic, POST to n8n/GitHub/Sheets. |
| n8n / GitHub / Sheets | Receivers of structured payloads from your backend. |

You get full control of the pipeline: custom questions, menu options, and sending answers wherever you want.
