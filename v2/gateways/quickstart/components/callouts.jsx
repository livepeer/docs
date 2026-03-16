/**
 * GatewayOffChainWarning - Warning callout for off-chain Gateway setup
 *
 * @description
 * Displays a warning message informing users they need to run their own Orchestrator
 * node to test an off-chain (local) Gateway. Includes links to relevant guides.
 *
 * @example
 * <GatewayOffChainWarning />
 *
 * @author Livepeer Documentation Team
 */
const GatewayOffChainWarning = () => {
  return (
    <Warning>
      <span style={{ fontSize: "1.0rem" }}>
        You will need to{" "}
        <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
          run your own Orchestrator node
        </span>{" "}
        to test an off-chain (local) Gateway:
      </span>
      <ul>
        <li>
          See{" "}
          <DoubleIconLink
            label="BYOC Guide"
            href="/developers/ai-inference-on-livepeer/byoc"
            iconLeft="link"
          />{" "}
          to test a local Gateway without a GPU.
        </li>
        <li>
          See{" "}
          <DoubleIconLink
            label="Orchestrator Guide"
            href="/orchestrators/guides/get-started"
            iconLeft="link"
          />{" "}
          to setup and run an Orchestrator.
        </li>
      </ul>
    </Warning>
  );
};

/**
 * GatewayOnChainWarning - Warning callout for on-chain Gateway setup
 *
 * @description
 * Displays a warning message about funding requirements for running an on-chain Gateway.
 * Includes a link to the funding guide.
 *
 * @example
 * <GatewayOnChainWarning />
 *
 * @author Livepeer Documentation Team
 */
const GatewayOnChainWarning = () => {
  return (
    <Warning>
      <span style={{ fontSize: "1.0rem" }}>
        You will need to{" "}
        <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
          fund an Ethereum wallet
        </span>{" "}
        account on Arbitrum One to run an on-chain Gateway.
        <br /> <br /> See{" "}
        <a href="/gateways/setup/requirements/on-chain%20setup/fund-gateway">
          <Icon icon="arrow-up-right" color="var(--accent)" />{" "}
          Fund Your Gateway{" "}
        </a>
      </span>
    </Warning>
  );
};

/**
 * GatewayOnChainTTestnetNote - Note about Arbitrum Testnet limitations
 *
 * @description
 * Informs users about the current limitations of using Arbitrum Testnet for Gateways.
 * Includes links to community discussions.
 *
 * @example
 * <GatewayOnChainTTestnetNote />
 *
 * @author Livepeer Documentation Team
 */
const GatewayOnChainTTestnetNote = () => {
  return (
    <Note>
      While Livepeer contracts are deployed to the Arbitrum Testnet, there is
      currently no freely available Orchestrator services on this chain.
      <br />
      <strong>
        If you would like to use the Aribtum Testnet for your Gateway, you will
        need to run your own Orchestrator node.
      </strong>
      <br />
      There are conversations underway to enable this in the future. Follow &
      contribute to the discussion on:
      <span>
        <Icon icon="arrow-up-right"></Icon>{" "}
        <a href="https://discord.gg/livepeer">Discord</a>
      </span>
      <span>
        <Icon icon="arrow-up-right"></Icon>{" "}
        <a href="https://forum.livepeer.org">Forum</a>
      </span>
    </Note>
  );
};

/**
 * OrchAddrNote - Note about replacing orchestrator address placeholder
 *
 * @description
 * Displays a note reminding users to replace the orchestrator IP:PORT placeholder
 * with their actual orchestrator address.
 *
 * @example
 * <OrchAddrNote />
 *
 * @author Livepeer Documentation Team
 */
const OrchAddrNote = () => {
  return (
    <Note>
      Replace <Badge color="gray">{"<http://ORCHESTRATOR_IP:PORT>"}</Badge> with
      your locally running orchestrator address <br />
    </Note>
  );
};

/**
 * TestVideoDownload - Note about test video file requirement
 *
 * @description
 * Displays a note informing users they need a test video file.
 * Accepts children for additional instructions.
 *
 * @param {React.ReactNode} children - Additional content or instructions
 *
 * @example
 * <TestVideoDownload>
 *   Download a sample video from <a href="/samples">here</a>
 * </TestVideoDownload>
 *
 * @author Livepeer Documentation Team
 */
const TestVideoDownload = ({ children }) => {
  return (
    <Note>
      <div style={{ marginBottom: "1rem" }}>
        You need a video file called <code>test-video.mp4</code> on your
        machine!{" "}
      </div>
      <span>{children}</span>
    </Note>
  );
};

/**
 * FfmpegWarning - Critical warning about FFmpeg installation
 *
 * @description
 * Displays a danger alert warning users not to install FFmpeg with sudo.
 * Explains that Livepeer uses a custom FFmpeg build.
 *
 * @example
 * <FfmpegWarning />
 *
 * @author Livepeer Documentation Team
 */
const FfmpegWarning = () => {
  return (
    <Danger>
      <div style={{ fontSize: "1.0rem" }}>
        IMPORTANT! Do not install with sudo! <br />
        Livepeer uses a <strong> custom build of FFmpeg </strong>that must be
        installed in a specific location.
      </div>
    </Danger>
  );
};

export {
  GatewayOffChainWarning,
  GatewayOnChainWarning,
  GatewayOnChainTTestnetNote,
  OrchAddrNote,
  TestVideoDownload,
  FfmpegWarning,
};
