import { DownloadButton } from "./buttons";

// TODO: Deconstruct to change icon props. Only render icon if passed in.
export const YouTubeVideo = ({ embedUrl, title = "", hint = "", caption }) => {
  return (
    <Frame
      {...(hint ? { hint } : {})}
      {...(caption
        ? {
            caption: (
              <span style={{ display: "flex", alignItems: "center" }}>
                <Icon icon="microphone" color="grey" />
                <span style={{ marginLeft: 8 }}>{caption}</span>
              </span>
            ),
          }
        : {})}
    >
      <iframe
        className="w-full aspect-video rounded-xl"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Frame>
  );
};

export const YouTubeVideoDownload = ({
  embedUrl,
  title,
  hint,
  caption = "",
}) => {
  console.log("props", embedUrl, title, hint);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 8,
          marginRight: 8,
        }}
      >
        <DownloadButton rightIcon={true} />
      </div>
      <Frame
        {...(hint ? { hint } : {})}
        {...(caption
          ? {
              caption: (
                <span style={{ display: "flex", alignItems: "center" }}>
                  <Icon icon="microphone" color="grey" />
                  <span style={{ marginLeft: 8 }}>{caption}</span>
                </span>
              ),
            }
          : {})}
      >
        <iframe
          className="w-full aspect-video rounded-xl"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Frame>
    </div>
  );
};

// export const YouTubeVideoDownload = ({
//   embedUrl,
//   title,
//   hint,
//   caption,
//   downloadLink,
// }) => {
//   return (
//     <Frame
//       {...(hint ? { hint } : {})}
//       {...(caption
//         ? {
//             caption: <DownloadLink downloadLink={downloadLink} />,
//           }
//         : {})}
//     >
//       <iframe
//         className="w-full aspect-video rounded-xl"
//         src={embedUrl}
//         title={title}
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       />
//     </Frame>
//   )
// }

//Self-hosted video
// ;<video
//   autoPlay
//   playsInline
//   controls
//   className="w-full aspect-video rounded-xl"
//   src="https://www.youtube.com/watch?v=9yLIPZ4iBLw"
// ></video>

// ;<div className="custom-caption">
//   <Icon icon="microphone" /> {title}
// </div>
// <Frame caption={title} hint="hint"></Frame>

export const CardVideo = ({ embedUrl, title }) => {
  console.log("Props:", { embedUrl, title }); // Add this
  return (
    <Card>
      <iframe
        className="w-full aspect-video rounded-xl"
        style={{ aspectRatio: "16/9" }}
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <span className="flex items-center justify-center">
        <Icon icon="microphone" color="grey" />
        <span className="ml-2" color="gray">
          {title}
        </span>
      </span>
    </Card>
  );
};

// Notes: Fetch video information for youtube videos

// Yes, **GitHub Actions is viable**. The workflow would:

// 1. **Trigger on commit/PR** to your code repo
// 2. **Run your script** to fetch YouTube metadata (title, description)
// 3. **Update MDX files** with the fetched data
// 4. **Commit changes** back to the repo (or create a new commit)
// 5. **Mintlify auto-builds** from the updated repo

// The key is that GitHub Actions can modify files and commit them before Mintlify's build process starts. You'd typically have the action commit directly to the branch or create a new commit that triggers Mintlify's deployment.

// **Example flow:**
// - Push code → GitHub Action runs → Script fetches YouTube data → Updates MDX → Commits changes → Mintlify detects new commit → Builds docs

// This is similar to how the [agent automation workflow](https://mintlify.com/docs/guides/automate-agent) works with GitHub Actions.
