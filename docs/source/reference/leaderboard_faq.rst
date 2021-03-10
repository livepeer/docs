Orchestrator Leaderboard FAQ
============================

The orchestrator leaderboard can be found in the `explorer <https://explorer.livepeer.org/?orchestratorTable=performance>`_.

What is the orchestrator leaderboard?
***************************************

The orchestrator leaderboard displays performance metrics of individual orchestrators on the Livepeer network based on
the results of transcoding tests.

What is the purpose of the leaderboard?
****************************************

The purpose of the leaderboard is to increase visibility of individual orchestrator performance. An assessment of an orchestrator's performance
is difficult using only on-chain data due to limitations on the frequency and types of data that can be measured on-chain. The leaderboard provides
access to off-chain data to complement on-chain data in order to create a more complete view of an orchestrator's performance.

Who is running the transcoding tests for the leaderboard?
**********************************************************

The transcoding tests are currently run by Livepeer Inc. Since the transcoding tests are run using open source software, anyone can run these tests
themselves as well.

What software is used to run the transcoding tests?
*****************************************************

The software used to run these tests consists of:

- A `broadcaster node <https://github.com/livepeer/go-livepeer>`_
- A `stream-tester <https://github.com/livepeer/stream-tester>`_ that sends streams to the broadcaster
- A `monitoring instance <https://github.com/livepeer/docker-livepeer/tree/master/monitoring>`_ that collects metrics from the broadcaster
- An `orch-tester process <https://github.com/livepeer/stream-tester/tree/master/cmd/orch-tester>`_ that automates tests and saves metrics
- A `leaderboard API <https://github.com/livepeer/leaderboard-serverless>`_ that serves aggregated and raw test metrics

What happens during a transcoding test?
*****************************************

A transcoding test involves running a broadcaster node that sends one or many streams to an orchestrator to be transcoded and then recording metrics about the transcoding
performance for the streams. A transcoding test is run for each orchestrator on the network at a regular interval each day from different regions.

At the moment, a transcoding test uses the following configuration:

- 1 30 second source video stream
- 4 output renditions

The transcoding test configuration is subject to change in the future in order to assess other aspects of an orchestrator's performance.

What regions are the transcoding tests run from?
*************************************************

The transcoding tests are currently run from the following regions:

- North America (Chicago)
- Europe (Frankfurt)
- Asia (Singapore)

The tests are run from different regions in order to assess the transcoding performance a user in that region can expect from orchestrators.

The regions that transcoding tests are run from are subject to change in order to asess orchestrator performance from a greater number of regions in the world.

What metrics are displayed in the leaderboard?
************************************************

The leaderboard currently displays the following metrics:

- **Total score**: The average utility of using an orchestrator based on past transcoding tests.
- **Success rate**: The average percentage of source video segments that were successfully transcoded in past transcoding tests.
- **Latency score**: The average utility of an orchestrator's overall transcoding latency in past transcoding tests.

Additional metrics for other aspects of an orchestrator's performance may be added in the future.

How is the success rate in the leaderboard calculated?
********************************************************

The success rate is calculated by counting the number of transcoded results (could contain one or many output renditions) received from an orchestrator and dividing it by the number of source video segments in a stream.
For example, given 100 source video segments in a stream and 60 transcoded results received, the success rate would be 60%.

The number of transcoded results received in a transcoding test is impacted by whether the orchestrator is online during the test and whether the orchestrator can 
keep up with the stream. The latter is also influenced by the broadcaster's implementation. The current broadcaster implementation results in dropped segments (missing transcoded results)
if a) the orchestrator is still transcoding the previous segment when a new segment is ready or b) the orchestrator takes longer than 8 seconds to return the transcoded results
for a segment.

The leaderboard in the explorer displays this metric as a value in the range 0-100%.

How is the latency score in the leaderboard calculated?
*********************************************************

The current formula for the latency score is:

::

    latency_score = 1 - e^{-base_latency_score}
    base_latency_score = avg_segment_duration / avg_round_trip_time

:code:`base_latency_score` measures the average round time for a broadcaster to receive the transcoded results for a segment relative to the average segment duration in a stream. When this value is less than
1.0, the orchestrator is returning transcoded results slower than real-time. When the value is greater than or equal to 1.0, the orchestrator is returning transcoded results
in real-time or faster. 

Since live streaming applications require fast transcoding, the latency score increases as the base latency score increases. However, the rate of increase for the latency score 
also decreases as the base latency score increases which reflects diminishing utility from increases in transcoding speed.

The leaderboard in the explorer scales this metric and displays it as a value in the range 0-10.

How is the total score in the leaderboard calculated?
*******************************************************

The current formula for the total score is:

::

    total_score = success_rate * latency_score

Since the latency score only considers successfully transcoded source segments, it is multiplied by the success rate to take into account the number of source segments
that were actually transcoded by an orchestrator in its total score.

The formula for the total score is subject to change as additional performance metrics are added in the future.

The leaderboard in the explorer scales this metric and displays it as a value in the range 0-10.

As an orchestrator operator, why are my current metrics on the leaderboard all 0?
***********************************************************************************

If your current metrics are 0, check whether the following conditions are met:

- Your service URI is publicly accessible
    - `curl <SERVICE_URI>` from a separate machine and you should see a self-signed certificate message or use a third-party website or tool that checks public accessibility
- Your node's price per pixel is set below the leaderboard's maximum price of 50,000 wei per pixel. 

As an orchestrator operator, how can I improve my metrics on the leaderboard?
*******************************************************************************

In order to improve your metrics, the following factors should be considered:

- The speed of transcoding which depends on compute resources (i.e. type of hardware, amount of hardware, etc.)
- The speed of data upload/download which depends on bandwidth resources

A few things you can explore to improve the speed of transcoding include:

- Evaluate your current transcoding speed by using a :doc:`transcoding benchmarking tool <../guides/benchmark_transcoding>`
- Review the :doc:`hardware_requirements` and consider upgrading your hardware
- If you have access to a `supported GPU <https://github.com/livepeer/wiki/blob/master/GPU-SUPPORT.md>`_:
    - Consider running an :doc:`orchestrator with GPU transcoding <../guides/orchestrator_transcoder_gpu>`
    - Consider running a standalone orchestrator that sends transcoding tasks to standalone GPU transcoders

A few things you can explore to improve the speed of data upload/download:

- Review the :doc:`bandwidth_requirements` and consider upgrading your bandwidth 

How can I view the historical test results for an orchestrator on the leaderboard? 
************************************************************************************

To get an average total score, latency score and success rate over time for an orchestrator since a particular timestamp use:

::

    curl https://leaderboard-serverless.vercel.app/api/aggregated_stats?orchestrator=<ORCHESTRATOR>&since=<TIMESTAMP>&region=<REGION>

- :code:`<ORCHESTRATOR>` the orchestrator's Ethereum address to get the metrics for.
- :code:`<TIMESTAMP>` the timestamp at which to evaluate the query. This defaults to the last 24 hours, to get the aggregated stats for all time you can use `since=1`.
- :code:`<REGION>` the region to get results for, returns all regions by default.

To get each individual test entry for an orchestrator since a particular timestamp use:

:: 

    curl https://leaderboard-serverless.vercel.app/api/raw_stats?orchestrator=<ORCHESTRATOR>&since=<TIMESTAMP>&region=<REGION>

- :code:`<ORCHESTRATOR>` the orchestrator's Ethereum address to get the metrics for (required).
- :code:`<TIMESTAMP>` the timestamp at which to evaluate the query. This defaults to the last 24 hours, to get the aggregated stats for all time you can use `since=1`.
- :code:`<REGION>` the region to get results for, returns all regions by default.
