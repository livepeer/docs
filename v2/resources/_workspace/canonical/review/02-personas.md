**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## 4 personas, ranked by priority

### #1 -- Cross-Tab Reference Seeker (arriving from role tab)

- **Entry**: Navigation from Orchestrators/Gateways/Developers/Delegators/About tabs (sidebar link, internal reference, CTA)
- **Arrives with**: Specific question (glossary term, command name, API detail, changelog date), mid-task in origin tab
- **Wants to leave with**: One precise reference, then returns to origin tab
- **Dwell expectation**: <2 minutes (glossary), <5 minutes (changelog scan)
- **Score**: Volume 3 (happens for ~60% of visitors encountering unknown terms), Depth 1 (lookup only), Impact 3 (enables task completion in origin tab) = **7/9**

### #2 -- Protocol Researcher (external entry via search)

- **Entry**: Search ("Livepeer protocol specification"), external link, blog reference, Discord pointer
- **Arrives with**: Academic or technical evaluation intent, wants comprehensive understanding
- **Wants to leave with**: Authoritative primary sources (whitepaper, spec, core-mechanisms), linked references, confidence in source authority
- **Dwell expectation**: 10-30+ minutes (deep read, source evaluation, citation gathering)
- **Score**: Volume 2, Depth 3, Impact 3 = **8/9**

### #3 -- Governance and Treasury Participant (forum/community arrival)

- **Entry**: Forum discussion, governance workstream, Foundation announcement
- **Arrives with**: Specific governance question (How do I vote? What's the proposal process? Where's treasury data?)
- **Wants to leave with**: LIP index, governance timeline, treasury data, proposal history, participation process
- **Dwell expectation**: 5-10 minutes (scanning governance reference pages)
- **Score**: Volume 2, Depth 2, Impact 3 = **7/9**

### #4 -- New Arrival Doing Orientation (cold entry, exploring)

- **Entry**: First visit, homepage link, random search landing
- **Arrives with**: No specific question, exploring "what is Livepeer?"
- **Wants to leave with**: Conceptual overview, routing to role tabs
- **Dwell expectation**: 3-7 minutes (bounces to role tabs or Home)
- **Score**: Volume 2, Depth 0, Impact 2 = **4/9**
- **Note**: ANTI-PERSONA. Resources is NOT the right first stop. S1 must route them to Home/About quickly.

---

## Key design decisions

- **Primary persona**: Cross-Tab Reference Seeker -- drives section structure. Optimise for SPEED.
- **Self-identification**: "Someone with a question" -- not by role. Disambiguate by question TYPE not persona.
- **Return visitor**: Cross-Tab Reference Seeker returns repeatedly. Structure must support fast repeat lookups via bookmarks and predictable URLs.

---

## Review questions

1. Is Cross-Tab Reference Seeker the right primary? Or should Protocol Researcher be higher?
2. Is Governance Participant real or niche?
3. Is Persona #4 (New Arrival) truly anti-persona, or should we design for them?
4. Are there missing personas?
5. Should we optimise for speed (persona #1) or depth (persona #2)?
