// THIS MUST BE IMPORTED IN THE PAGE YOU USE IT IN
// ALT: THE DATA MUST BE IN THE SAME PAGE.
// import {
//   dockerOffChainQuickstart,
//   dockerOnChainQuickstart,
//   linuxOffChainQuickstart,
//   linuxOnChainQuickstart,
//   windowsOffChainQuickstart,
//   windowsOnChainQuickstart,
// } from "/snippets/data/gateways.jsx";
import { GatewayOffChainWarning, GatewayOnChainWarning } from "./callouts.jsx";

export const QuickStartTabs = ({ offchainSteps, onchainSteps }) => {
  return (
    <Tabs>
      <Tab title="Off-Chain Gateway" icon="floppy-disk">
        <GatewayOffChainWarning />
        {offchainSteps}
      </Tab>
      <Tab title="On-Chain Gateway" icon="link">
        <GatewayOnChainWarning />
        {onchainSteps}
      </Tab>
    </Tabs>
  );
};

// THIS INHERITS IMPORTS FROM THE PAGE ITS CALLED IN.
// BUT WILL NOT USE IMPORTS FROM THIS PAGE (WTF MINTLIFY)
export const QuickStartSteps = ({ dataSource }) => {
  //   console.log("dataSource", dataSource);
  //   console.log("dockerOffChainQuickstart", dockerOffChainQuickstart);
  const { installStep, configureStep, runStep, connectStep, testStep } =
    dataSource;
  //   console.log("steps obj", installStep);
  return (
    <Steps titleSize="h3">
      <Step title="Install Gateway Software">{installStep}</Step>
      <Step title="Configure Gateway">{configureStep}</Step>
      <Step title="Run Gateway">{runStep}</Step>
      <Step title="Connect Gateway">{connectStep}</Step>
      <Step title="Test Gateway">{testStep}</Step>
    </Steps>
  );
};

/*
    export const QuickstartSteps = (
        installStep,
        configureStep,
        runStep,
        connectStep,
        testStep
        ) => {
        return (
            <Steps titleSize="h3">
            <Step title="Install Gateway Software">{installStep}</Step>
            <Step title="Configure Gateway">{configureStep}</Step>
            <Step title="Run Gateway">{runStep}</Step>
            <Step title="Connect Gateway">{connectStep}</Step>
            <Step title="Test Gateway">{testStep}</Step>
            </Steps>
        );
        };
*/
