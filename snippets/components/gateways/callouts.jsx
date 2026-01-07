const GatewayOffChainWarning = () => {
  return (
    <Warning>
      <span style={{ fontSize: "1.0rem" }}>
        You will need to{" "}
        <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
          run your own Orchestrator node
        </span>{" "}
        to test an off-chain Gateway:
      </span>
      <ul>
        <li>
          See{" "}
          <DoubleIconLink
            label="BYOC Guide"
            href="/v2/pages/03_developers/ai-inference-on-livepeer/byoc"
            iconLeft="link"
          />{" "}
          to test a local Gateway without a GPU.
        </li>
        <li>
          See{" "}
          <DoubleIconLink
            label="Orchestrator Guide"
            href="/v1/orchestrators/guides/get-started"
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
        <a href="/v2/pages/04_gateways/run-a-gateway/requirements/on-chain setup/fund-gateway">
          <Icon icon="arrow-up-right" color="#2d9a67" /> Fund Your Gateway{" "}
        </a>
      </span>
    </Warning>
  );
};

const GatewayOnChainNote = () => {
  return (
    <Note>
      <>
        This guide assumes:
        <>- You have ETH on Arbitrum L2 Network (or can get it from a faucet)</>
        <>- You have an Arbitrum RPC URL (or can use a public one)</>
      </>
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

export {
  GatewayOffChainWarning,
  GatewayOnChainWarning,
  GatewayOnChainNote,
  OrchAddrNote,
  TestVideoDownload,
};
