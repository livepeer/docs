# Deprecated n8n Workflow Archive

These JSON definitions were copied from `snippets/automations/scripts/n8n/` because the repository now treats them as superseded or non-authoritative. The source files remain in place until a human-approved deletion path is used. Archival in this folder does not prove any external n8n deployment has been disabled.

| Archived file | Replacement | Evidence | Note |
|---|---|---|---|
| `Ghost-to-Mintlify.json` | `.github/workflows/update-ghost-blog-data.yml` | JSON is `active: false`; GitHub Actions workflow writes `snippets/automations/blog/ghostBlogData.jsx`; workflow comments already describe n8n as an alternative path. | Keep only as historical reference until the external n8n instance is confirmed retired. |
| `Forum-To-Mintlify-Latest-Topics.json` | `.github/workflows/update-forum-data.yml` | JSON is `active: false`; GitHub Actions workflow writes `snippets/automations/forum/forumData.jsx`; repo also retains `update-blog-data.yml` as overlapping legacy behavior. | External disablement is unverified; archive avoids presenting this file as current source of truth. |
| `YouTube-To-Mintlify.json` | `.github/workflows/update-youtube-data.yml` | JSON is `active: false`; GitHub Actions workflow writes `snippets/automations/youtube/youtubeData.jsx`. | External disablement is unverified; archive keeps a recoverable copy without implying active ownership. |
