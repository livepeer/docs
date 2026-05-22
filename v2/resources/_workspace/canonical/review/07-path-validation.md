**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## Persona #1: Cross-Tab Reference Seeker

| Entry point | Path | Exits | Time | Blocked? |
|---|---|---|---|---|
| Glossary lookup from Delegators | S1 -> S2 (found term) | Returns to Delegators | <1 min | No |
| Changelog from Orchestrators | S1 -> S6 (found go-livepeer) | Reviews breaking changes | <3 min | No |
| Verify claim from Developers | S1 -> S3 (located source) | Found authoritative source | <5 min | No |
| Help needed mid-task | S1 -> S8 (FAQ or escalation) | Resolved or escalated | <5 min | No |
| Return visit (bookmark) | S2 or S6 directly | Finds reference fast | <30s | No |

**PASSES.** Primary persona completes journey in <5 minutes.

---

## Persona #2: Protocol Researcher

| Entry point | Path | Blocked? |
|---|---|---|
| Search "Livepeer protocol" | S3 -> S4 -> cross-references | No |
| External blog reference | S3 -> deep read | No |
| Evaluation | S1 -> S3 -> About tab | No |
| Citation building | S3 -> S4 -> metadata | No |

**PASSES.** Researcher navigates to comprehensive sources.

---

## Persona #3: Governance Participant

| Entry point | Path | Blocked? |
|---|---|---|
| Discord "How do I vote?" | S1 -> S5 (voting guide) | No |
| Forum "Proposal status?" | S1 -> S5 (LIP index) | No |
| Treasury question | S1 -> S5 or About/treasury | No |

**PASSES.** Governance references reachable.

---

## Persona #4: New Arrival (anti-persona)

| Entry point | What happens | Blocked? |
|---|---|---|
| Cold landing on portal | S1 routes to Home/About | ROUTES AWAY -- correct |
| Explores glossary | Gets definitions not narrative | Routes to Home -- correct |

**INTENTIONAL.** New arrivals are not the target. S1 routes them out quickly.

---

## Speed validation

- [x] Glossary lookup: <1 minute
- [x] Changelog scan: <3 minutes
- [x] Help escalation: <5 minutes
- [x] Return visitor: <30 seconds

**PASS.**

---

## Currency validation

- [x] Glossary: Updated when terms change (low rate)
- [x] Changelogs: Maintained per component (production responsibility)
- [x] Governance/LIPs: Updated when proposals close
- [x] Primary sources: Version-date stamped, linked to About tab
- [x] Help: FAQ pruned quarterly

**PASS.**

---

## Review questions

1. Is persona #1 really 60%+ of traffic?
2. Do bookmarks dominate repeat visits, or do users re-route through S1?
3. Should Resources have a separate orientation path for new arrivals?
4. Are there too many changelogs? Should some consolidate?
5. Is the LIP index serving persona #3 effectively?
6. Do readers use search or S1 routing?
