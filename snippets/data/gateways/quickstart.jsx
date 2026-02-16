/**
 * createQuickstart - Helper function to create a quickstart object
 *
 * Usage in MDX:
 *   import { createQuickstart } from '/snippets/data/gateways/quickstart.jsx';
 *
 *   const myQuickstart = createQuickstart({
 *     installStep: <CustomCodeBlock ... />,
 *     configureStep: <CustomCodeBlock ... />,
 *     runStep: <CustomCodeBlock ... />,
 *     connectStep: <CustomCodeBlock ... />,
 *     testStep: <CustomCodeBlock ... />,
 *   });
 *
 *   <QuickStartSteps dataSource={myQuickstart} />
 */
export const createQuickstart = ({
  installStep,
  configureStep,
  runStep,
  connectStep,
  testStep,
}) => ({
  installStep,
  configureStep,
  runStep,
  connectStep,
  testStep,
});

// Example usage - these are commented out as examples
// You should define your quickstarts in your MDX file using createQuickstart()

// const dockerOffChainQuickstart = {
//   installStep: (
//     <>
//       <>
//         Pull the docker image from{" "}
//         <a href="https://hub.docker.com/r/livepeer/go-livepeer">
//           Livepeer Docker Hub{" "}
//         </a>
//       </>
//       <CustomCodeBlock
//         codeString="docker pull livepeer/go-livepeer:master"
//         language="bash"
//         icon="docker"
//         filename="Docker go-livepeer"
//       />
//     </>
//   ),
//   configureStep: (
//     <CustomCodeBlock
//       codeString="nano -p /var/lib/docker/volumes/gateway-lpData/_data/aiModels.json"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   runStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   connectStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   testStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
// };

// const dockerOnChainQuickstart = {
//   installStep: (
//     <CustomCodeBlock
//       codeString="docker pull livepeer/go-livepeer:master"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   configureStep: (
//     <CustomCodeBlock
//       codeString="nano -p /var/lib/docker/volumes/gateway-lpData/_data/aiModels.json"
//       language="bash    "
//       icon="terminal"
//     />
//   ),
//   runStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   connectStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   testStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
// };

// const linuxOffChainQuickstart = {
//   installStep: (
//     <CustomCodeBlock
//       codeString="sudo wget https://github.com/livepeer/go-livepeer/releases/download/{PLACEHOLDER}/livepeer-linux-amd64.tar.gz"
//       placeholderValue={latestVersion}
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   configureStep: (
//     <CustomCodeBlock
//       codeString="nano -p /var/lib/docker/volumes/gateway-lpData/_data/aiModels.json"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   runStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   connectStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   testStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
// };

// const linuxOnChainQuickstart = {
//   installStep: (
//     <CustomCodeBlock
//       codeString="sudo wget https://github.com/livepeer/go-livepeer/releases/download/{PLACEHOLDER}/livepeer-linux-amd64.tar.gz"
//       placeholderValue={latestVersion}
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   configureStep: (
//     <CustomCodeBlock
//       codeString="nano -p /var/lib/docker/volumes/gateway-lpData/_data/aiModels.json"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   runStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   connectStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   testStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
// };

// const windowsOffChainQuickstart = {
//   installStep: (
//     <CustomCodeBlock
//       codeString="https://github.com/livepeer/go-livepeer/releases/download/{PLACEHOLDER}/livepeer-windows-amd64.zip"
//       placeholderValue={latestVersion}
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   configureStep: (
//     <CustomCodeBlock
//       codeString="nano -p /var/lib/docker/volumes/gateway-lpData/_data/aiModels.json"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   runStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   connectStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   testStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
// };

// const windowsOnChainQuickstart = {
//   installStep: (
//     <CustomCodeBlock
//       codeString="https://github.com/livepeer/go-livepeer/releases/download/{PLACEHOLDER}/livepeer-windows-amd64.zip"
//       placeholderValue={latestVersion}
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   configureStep: (
//     <CustomCodeBlock
//       codeString="nano -p /var/lib/docker/volumes/gateway-lpData/_data/aiModels.json"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   runStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   connectStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
//   testStep: (
//     <CustomCodeBlock
//       codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
//       language="bash"
//       icon="terminal"
//     />
//   ),
// };
