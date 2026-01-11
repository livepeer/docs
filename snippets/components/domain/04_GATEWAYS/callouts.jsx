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
        <a href="/gateways/run-a-gateway/requirements/on-chain-setup/fund-gateway">
          <Icon icon="arrow-up-right" color="#2d9a67" /> Fund Your Gateway{" "}
        </a>
      </span>
    </Warning>
  );
};

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

const OrchAddrNote = () => {
  return (
    <Note>
      Replace <Badge color="gray">{"<http://ORCHESTRATOR_IP:PORT>"}</Badge> with
      your locally running orchestrator address <br />
    </Note>
  );
};

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
