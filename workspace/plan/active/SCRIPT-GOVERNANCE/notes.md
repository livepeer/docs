hmmm
So main findings:

- The scripts are not architectured well - not categorised well (ie not categorised by repo concern - only by script "type") , not performing tasks they should be, not ignoring generated files, not scoping and governance is not even documented properly.

This is creating massive downstream pain on EVERY commit

Seems to me like we need to HOLISTICALLY re-architecture the governance patterns here & streamline it MUCH MUCH better from the ground up.

Whats good now: (add your suggestions)
- The scripts already have repo folder homes & categories (though I think tests should be bundles into tools/scripts. or we should move all scripts to a root folder (and merge tests into this too (unless there is other things in that folder)

Whats not good
- repo folder sprawl & mess

Whats absolutely shit:
- blocking workflows and worse
- creating downstream issues INSTEAD of being the solution to them.
- scripts are a mess: they don't seem to be meeting governance by only having one purpose with orchestrators
- we don't even know what governance looks like.

What I think we need: (suggest, critically analyse)
- HOLISTICALLY re-architecture of the script governance processes, the structure and more
- second level governance (not just script = validator, goes in validators)
- so much more :(

TASKS NOW (REPORT): What I want:  ( output in chat in a list  - critically analyse all asks against best practice engineering)
0. DO NOW - A HANDOFF prompt for the issues identified above that we can fix now and unblock commit pipeline
A Your input on the above
B The governance processes on scripts currently in place ( output in chat in a list )
C Recommendations on WHAT TIERS of governance are needed (ie. categorisation by script type then categorisation by script concern, then low level items like component must have docs. Probably like REPO wide scripts, then targeted scrips lower tier (ask if not sure what I mean - otherwise suggest)
D Suggestions on what 'concerns' should be grouped given this repo architecture ( ie how should we categorise by concern? ) -> this will informa 2nd level governance at the repo folder organisation level. ie
- Content
- Style
- Governance (-> of components, scripts, etc)
- Docs Generator?
- idk -> suggest

NEXT (DO NOT EXECUTE NOW - WE WILL PLAN NEXT) - what i want

1. A full audit on governance processes REPO AND CONCERN WIDE -> THIS IS AN OSS REPO WITH NO OWNERS -> IT WILL BE GOVERNED MOSTLY BY AGENTS -> SO THE FRAMEWORK MUST STOP BEING A BLOCKER AND BE A REMEDIATOR. - aiming to identify clashes, workflow problems, documentation problems, bad practice items, clashes between governance styles for different items, etc.

2. A full audit on scripts with a report (this will be massive so we should batch run this most likely --recommend)
-> Per script scoping:
A. what is its category (script type ie validator), concern (to be defined), purpose (what's its main aim or intended purpose), scope (what files it acts on), trigger (when its activated) & pipeline flow (what it does when, any dependents that rely on outputs & downstream effects of its actions).
B. does it match governance standards for it's concern (where available - flag if none)
C. is its implementation actually a match to its intended purpose?
D. is this script doing more than one job (ie does not match its category)
E. at what governance "tier" is this script acting (need to identify these tiers first)
F. could the script be bundled into a full "concern" orchestrator script or is it already? (probably part of A if already in one)

3. FULLY DEFINED GOVERNANCE
