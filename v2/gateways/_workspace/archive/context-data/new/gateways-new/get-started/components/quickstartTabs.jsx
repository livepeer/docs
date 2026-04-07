/**
 * Gateway Quickstart Components
 *
 * @description
 * Components for displaying Gateway setup instructions with tabs for off-chain and on-chain options.
 *
 * @note Data must be imported in the page where these components are used.
 * Example imports:
 * import {
 *   dockerOffChainQuickstart,
 *   dockerOnChainQuickstart,
 *   linuxOffChainQuickstart,
 *   linuxOnChainQuickstart,
 *   windowsOffChainQuickstart,
 *   windowsOnChainQuickstart,
 * } from "/snippets/data/gateways.jsx";
 *
 * @author Livepeer Documentation Team
 */

import {
  GatewayOffChainWarning,
  GatewayOnChainWarning,
} from "/v2/gateways/quickstart/components/callouts.jsx";

/**
 * QuickStartTabs - Tabbed interface for Gateway quickstart guides
 *
 * @description
 * Displays two tabs: one for off-chain Gateway setup and one for on-chain Gateway setup.
 * Each tab includes the appropriate warning callout followed by setup steps.
 *
 * @param {React.ReactNode} offchainSteps - Content for the off-chain Gateway tab
 * @param {React.ReactNode} onchainSteps - Content for the on-chain Gateway tab
 *
 * @example
 * <QuickStartTabs
 *   offchainSteps={<QuickStartSteps dataSource={dockerOffChainQuickstart} />}
 *   onchainSteps={<QuickStartSteps dataSource={dockerOnChainQuickstart} />}
 * />
 *
 * @author Livepeer Documentation Team
 */
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

/**
 * QuickStartSteps - Standardized steps for Gateway setup
 *
 * @description
 * Displays a consistent 5-step process for Gateway setup: Install, Configure, Run, Connect, Test.
 * Accepts a data source object with content for each step.
 *
 * @note This component inherits imports from the page it's called in, but will not use
 * imports from this file (Mintlify limitation).
 *
 * @param {Object} dataSource - Object containing step content
 * @param {React.ReactNode} dataSource.installStep - Content for installation step
 * @param {React.ReactNode} dataSource.configureStep - Content for configuration step
 * @param {React.ReactNode} dataSource.runStep - Content for running the Gateway
 * @param {React.ReactNode} dataSource.connectStep - Content for connecting to the Gateway
 * @param {React.ReactNode} dataSource.testStep - Content for testing the Gateway
 *
 * @example
 * const quickstartData = {
 *   installStep: <p>Install instructions...</p>,
 *   configureStep: <p>Configuration steps...</p>,
 *   runStep: <p>How to run...</p>,
 *   connectStep: <p>Connection details...</p>,
 *   testStep: <p>Testing procedures...</p>
 * };
 * <QuickStartSteps dataSource={quickstartData} />
 *
 * @author Livepeer Documentation Team
 */
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
