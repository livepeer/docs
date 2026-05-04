export const embodyDiscordData = [
  {
    id: "1486302945002913792",
    content: "<@&1409161761105383536> The latest version of the Unreal Vtuber is out, and brings two big quality of life changes<a:party_blob:1026524086714765352> :<br /><br /><strong>1:</strong> a <code>vtuber-auto-updater</code> container is added. New container images with the <code>:latest</code> tag will be automatically pulled  and deployed. This removes the need for the orchestrator to redeploy the stack again whenever we publish a new image. <br /><br /><strong>2:</strong> a <code>vtuber-watchdog</code> container is added. Now every time that the game container exits unexpectedly the stack will automatically recover. This resolves the issue described here <<a href=\"https://github.com/its-DeFine/Unreal_Vtuber/issues/54>\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/its-DeFine/Unreal_Vtuber/issues/54></a><br /><br />The first change mainly addresses the update fatigue, from now on you will need to update only in infrequent major version updates, while we can keep updating our core tech in all orchestrator nodes via a simple image pull. The second change resolves a major bug that required manual orchestrator intervention each time the game unexpectedly existed.<br /><br />Let me know if you have any issue while updating, and please update to the latest version so that you can receive the planned workloads, which will start tomorrow 🙏",
    author: "_alisonwonderland",
    timestamp: "2026-03-25T09:57:16.262Z",
    url: "https://discord.com/channels/1066890817425387581/1485293203681706167/1486302945002913792"
  },
  {
    id: "1486302905492439201",
    content: "<@&1409161761105383536> The latest version of Unreal Vtuber is up, you will find it here <<a href=\"https://github.com/its-DeFine/Unreal_Vtuber>\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/its-DeFine/Unreal_Vtuber></a> together with README instructions on how to upgrade from a previous version. <br /><br />This updates allow us to finally use your provided compute both for content creation and for powering our upcoming real time app. We also introduced changes that reduce architectural complexity, increase output quality and make future onboarding easier. This update also marks the end of the private alpha and <strong>the start of the public alpha</strong>, we will wait for two days in case that any bug appears and then announce the public release. The time to take the next step has come, thanks to everyone who supported the network by participating in the closed alpha🙏 ❤️ <a:green_flame:1022958061314392104> <br /><br /><strong>Changelog</strong><br /><br /><code><em>Repository</em></code><br /><ul><li>Game container now forces 1080p/60 fps H.264 output; WebRTC captures retain full quality.</li><li>Signaling image ships the proprietary Pixel Streaming UI baked in-no more host bind mount.</li></ul>-Image containers where updated.<br /><ul><li>Script runner shares the game container's network namespace.</li><li>Legacy recorder service removed from the compose stack.</li><li>README split into new deployment vs. upgrade paths with refreshed firewall whitelists (forwarder treated as the primary client) </li><li>GPU specs/reference notes added.</li><li>Whitelisted Client address changed to a newer one.</li></ul><code>Payments</code><br />Payment payout threshold is now at 0.1 ETH instead of 0.001<br /><br /><strong>Notes</strong><br />A new set of incentives and disincentives will be rolled out within the weekend to make sure that updates are happening in a timely manner.",
    author: "_alisonwonderland",
    timestamp: "2026-03-25T09:57:06.842Z",
    url: "https://discord.com/channels/1066890817425387581/1485293203681706167/1486302905492439201"
  },
  {
    id: "1486302867878051860",
    content: "<@&1409161761105383536> We are going to offer our avatars to encode hackathon participants. The Emnbody team will also enter the hackathon and present you our first commercial app during the hackathon. We expect the orchestrator update to happen tomorrow(BYOC will be added next week due to time constrains). Top ups will be released the same day for everyone. <br /><br />Change Log:<br /><ul><li>a new game container version.</li><li>an updated pixel streaming UI. </li><li>An updated payment processor.</li></ul>",
    author: "_alisonwonderland",
    timestamp: "2026-03-25T09:56:57.874Z",
    url: "https://discord.com/channels/1066890817425387581/1485293203681706167/1486302867878051860"
  },
  {
    id: "1486302785036095488",
    content: "<@&1409161761105383536> <br /><br /><strong>Orchestrator Logic Updates </strong> <br /><br /><ul><li>New update is coming later today along with the next wallet top up, this will require orchestrators to rebuild and restart the containers. We will introduce a Grace period for Orchestrators implementing the updates, orchestrators who do not update within the Grace period will still receive payouts, although those payouts will be reduced. Once you update, the payout amount will immediately come back to it's original value.</li><li><@379220097132396554>  created a PR which allows the unreal engine game to use BYOC streaming<<a href=\"https://github.com/its-DeFine/Unreal_Vtuber/pull/42>.\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/its-DeFine/Unreal_Vtuber/pull/42>.</a> We are working on getting back to BYOC and replacing the payment processor(keeping it only as fallback). This is also dependent on the Livepeer-Go release schedule as there are PRs for fixing the legacy gas costs issue(which rendered our latest BYOC pipeline practically practically not functional) and the introduction of the ability for orchestrators to ignore the ticket's sender reserve.</li></ul><strong>Payment Processor Updates</strong><br /><br />Our payment processor received two PRs which allowed the following:<br /><br /><strong>1.</strong> The ability to create a <strong>Denylist</strong> in the config to prevent abuse. <em>This was done to prevent balance drain from Orchestrators with more than one nodes in the top 100 and will not be enforced in the official release.</em><br /><br /><strong>2.</strong> Now when an address that is not in the admin allowlist calls the <code>orchestrators</code> api endpoint  with <code>curl <a href=\"http://3.141.111.200:8081/api/orchestrators/\" target=\"_blank\" rel=\"noopener noreferrer\">http://3.141.111.200:8081/api/orchestrators/</a></code> it will get redacted fields of sensitive information.<br /><strong>Note:</strong> To maintain transparency you are still able to trigger the call endpoint and view the non redacted data of all participant orchestrators from any ip.",
    author: "_alisonwonderland",
    timestamp: "2026-03-25T09:56:38.123Z",
    url: "https://discord.com/channels/1066890817425387581/1485293203681706167/1486302785036095488"
  },
  {
    id: "1485316137775530244",
    content: "Embody #announcements",
    author: "_alisonwonderland",
    timestamp: "2026-03-22T16:36:03.085Z",
    url: "https://discord.com/channels/1066890817425387581/1485293203681706167/1485316137775530244"
  }
];
