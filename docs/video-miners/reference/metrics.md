---
title: Prometheus Metrics
sidebar_position: 7
---

# Prometheus Metrics

Livepeer exposes a number of metrics via the Prometheus exporter. This page documents all metrics that you can scrape via the `/metrics` endpoint when the [monitoring is enabled](/video-miners/how-to-guides/metrics-monitoring).

## Livepeer metrics

### General

| Name                                                     | Description                                                                                                      |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `livepeer_versions`                                      | Versions used by LivePeer node.                                                                                  |
| `livepeer_segment_source_appeared_total`                 | SegmentSourceAppeared                                                                                            |
| `livepeer_segment_source_emerged_total`                  | SegmentEmerged                                                                                                   |
| `livepeer_segment_source_emerged_unprocessed_total`      | Raw number of segments emerged from segmenter.                                                                   |
| `livepeer_segment_source_uploaded_total`                 | SegmentUploaded                                                                                                  |
| `livepeer_segment_source_upload_failed_total`            | SegmentUploadedFailed                                                                                            |
| `livepeer_segment_transcoded_downloaded_total`           | SegmentDownloaded                                                                                                |
| `livepeer_segment_transcoded_total`                      | SegmentTranscoded                                                                                                |
| `livepeer_segment_transcoded_unprocessed_total`          | Raw number of segments successfully transcoded.                                                                  |
| `livepeer_segment_transcode_failed_total`                | SegmentTranscodeFailed                                                                                           |
| `livepeer_segment_transcoded_appeared_total`             | SegmentTranscodedAppeared                                                                                        |
| `livepeer_segment_transcoded_all_appeared_total`         | SegmentTranscodedAllAppeared                                                                                     |
| `livepeer_broadcast_client_start_failed_total`           | StartBroadcastClientFailed                                                                                       |
| `livepeer_stream_create_failed_total`                    | StreamCreateFailed                                                                                               |
| `livepeer_stream_created_total`                          | StreamCreated                                                                                                    |
| `livepeer_stream_started_total`                          | StreamStarted                                                                                                    |
| `livepeer_stream_ended_total`                            | StreamEnded                                                                                                      |
| `livepeer_max_sessions_total`                            | Max Sessions                                                                                                     |
| `livepeer_current_sessions_total`                        | Number of streams currently transcoding                                                                          |
| `livepeer_discovery_errors_total`                        | Number of discover errors                                                                                        |
| `livepeer_transcode_retried`                             | Number of times segment transcode was retried                                                                    |
| `livepeer_transcoders_number`                            | Number of transcoders currently connected to orchestrator                                                        |
| `livepeer_transcoders_capacity`                          | Total advertised capacity of transcoders currently connected to orchestrator                                     |
| `livepeer_transcoders_load`                              | Total load of transcoders currently connected to orchestrator                                                    |
| `livepeer_success_rate`                                  | Number of transcoded segments divided on number of source segments                                               |
| `livepeer_success_rate_per_stream`                       | Number of transcoded segments divided on number of source segments, per stream                                   |
| `livepeer_transcode_time_seconds`                        | TranscodeTime, seconds                                                                                           |
| `livepeer_transcode_latency_seconds`                     | Transcoding latency, from source segment emerged from segmenter till transcoded segment apeeared in manifest     |
| `livepeer_transcode_overall_latency_seconds`             | Transcoding latency, from source segment emerged from segmenter till all transcoded segment apeeared in manifest |
| `livepeer_upload_time_seconds`                           | UploadTime, seconds                                                                                              |
| `livepeer_download_time_seconds`                         | Download time                                                                                                    |
| `livepeer_auth_webhook_time_milliseconds`                | Authentication webhook execution time, milliseconds                                                              |
| `livepeer_source_segment_duration_seconds`               | Source segment's duration                                                                                        |
| `livepeer_http_client_timeout_1`                         | Number of times HTTP connection was dropped before transcoding complete                                          |
| `livepeer_http_client_timeout_2`                         | Number of times HTTP connection was dropped before transcoded segments was sent back to client                   |
| `livepeer_http_client_segment_transcoded_realtime_ratio` | Ratio of source segment duration / transcode time as measured on HTTP client                                     |
| `livepeer_http_client_segment_transcoded_realtime_3x`    | Number of segment transcoded 3x faster than realtime                                                             |
| `livepeer_http_client_segment_transcoded_realtime_2x`    | Number of segment transcoded 2x faster than realtime                                                             |
| `livepeer_http_client_segment_transcoded_realtime_1x`    | Number of segment transcoded 1x faster than realtime                                                             |
| `livepeer_http_client_segment_transcoded_realtime_half`  | Number of segment transcoded no more than two times slower than realtime                                         |
| `livepeer_http_client_segment_transcoded_realtime_slow`  | Number of segment transcoded more than two times slower than realtime                                            |
| `livepeer_transcode_score`                               | Ratio of source segment duration vs. transcode time                                                              |
| `livepeer_recording_save_latency`                        | How long it takes to save segment to the OS                                                                      |
| `livepeer_recording_save_errors`                         | Number of errors during save to the recording OS                                                                 |
| `livepeer_recording_saved_segments`                      | Number of segments saved to the recording OS                                                                     |
| `livepeer_orchestrator_swaps`                            | Number of orchestrator swaps mid-stream                                                                          |

### Sending payments

| Name                             | Description                                        |
| -------------------------------- | -------------------------------------------------- |
| `livepeer_ticket_value_sent`     | Ticket value sent                                  |
| `livepeer_tickets_sent`          | Tickets sent                                       |
| `livepeer_payment_create_errors` | Errors when creating payments                      |
| `livepeer_broadcaster_deposit`   | Current remaining deposit for the broadcaster node |
| `livepeer_broadcaster_reserve`   | Current remaining reserve for the broadcaster node |
| `livepeer_max_transcoding_price` | Maximum price per pixel to pay for transcoding     |

### Receiving payments

| Name                                | Description                                        |
| ----------------------------------- | -------------------------------------------------- |
| `livepeer_ticket_value_recv`        | Ticket value received                              |
| `livepeer_tickets_recv`             | Tickets received                                   |
| `livepeer_payment_recv_errors`      | Errors when receiving payments                     |
| `livepeer_winning_tickets_recv`     | Winning tickets received                           |
| `livepeer_value_redeemed`           | Winning ticket value redeemed                      |
| `livepeer_ticket_redemption_errors` | Errors when redeeming tickets                      |
| `livepeer_suggested_gas_price`      | Suggested gas price for winning ticket redemption  |
| `livepeer_min_gas_price`            | Minimum gas price to use for gas price suggestions |
| `livepeer_max_gas_price`            | Maximum gas price to use for gas price suggestions |
| `livepeer_transcoding_price`        | Transcoding price per pixel                        |

### Pixel accounting

| Name                            | Description              |
| ------------------------------- | ------------------------ |
| `livepeer_mil_pixels_processed` | Million pixels processed |

### Fast verification

| Name                                                        | Description                                                                                                             |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `livepeer_fast_verification_done`                           | Number of fast verifications done                                                                                       |
| `livepeer_fast_verification_failed`                         | Number of fast verifications failed                                                                                     |
| `livepeer_fast_verification_enabled_current_sessions_total` | Number of currently transcoded streams that have fast verification enabled                                              |
| `livepeer_fast_verification_using_current_sessions_total`   | Number of currently transcoded streams that have fast verification enabled and that are using an untrusted orchestrator |
