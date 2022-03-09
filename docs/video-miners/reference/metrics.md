---
title: Prometheus Metrics
sidebar_position: 7
---

# Prometheus Metrics

Livepeer exposes a number of metrics via the Prometheus exporter. This page documents all metrics that you can scrape via the `/metrics` endpoint when the [monitoring is enabled](/video-miners/how-to-guides/metrics-monitoring).

## Livepeer metrics

### General

| Name                                                     | Description                                                                                                      | Type |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---- |
| `livepeer_segment_source_appeared_total`                 | SegmentSourceAppeared                                                                                            | tot  |
| `livepeer_segment_source_emerged_total`                  | SegmentEmerged                                                                                                   | tot  |
| `livepeer_segment_source_emerged_unprocessed_total`      | SegmentEmerged, counted by number of transcode profiles                                                          | tot  |
| `livepeer_segment_source_uploaded_total`                 | SegmentUploaded                                                                                                  | tot  |
| `livepeer_segment_source_upload_failed_total`            | SegmentUploadedFailed                                                                                            | tot  |
| `livepeer_segment_transcoded_downloaded_total`           | SegmentDownloaded                                                                                                | tot  |
| `livepeer_segment_transcoded_total`                      | SegmentTranscoded                                                                                                | tot  |
| `livepeer_segment_transcoded_unprocessed_total`          | SegmentTranscodedUnprocessed                                                                                     | tot  |
| `livepeer_segment_transcode_failed_total`                | SegmentTranscodeFailed                                                                                           | tot  |
| `livepeer_segment_transcoded_appeared_total`             | SegmentTranscodedAppeared                                                                                        | tot  |
| `livepeer_segment_transcoded_all_appeared_total`         | SegmentTranscodedAllAppeared                                                                                     | tot  |
| `livepeer_broadcast_client_start_failed_total`           | StartBroadcastClientFailed                                                                                       | tot  |
| `livepeer_stream_create_failed_total`                    | StreamCreateFailed                                                                                               | tot  |
| `livepeer_stream_created_total`                          | StreamCreated                                                                                                    | tot  |
| `livepeer_stream_started_total`                          | StreamStarted                                                                                                    | tot  |
| `livepeer_stream_ended_total`                            | StreamEnded                                                                                                      | tot  |
| `livepeer_max_sessions_total`                            | MaxSessions                                                                                                      | tot  |
| `livepeer_current_sessions_total`                        | Number of currently transcoded streams                                                                           | tot  |
| `livepeer_discovery_errors_total`                        | Number of discover errors                                                                                        | tot  |
| `livepeer_transcode_retried`                             | Number of times segment transcode was retried                                                                    | tot  |
| `livepeer_transcoders_number`                            | Number of transcoders currently connected to orchestrator                                                        | tot  |
| `livepeer_transcoders_capacity`                          | Total advertised capacity of transcoders currently connected to orchestrator                                     | tot  |
| `livepeer_transcoders_load`                              | Total load of transcoders currently connected to orchestrator                                                    | tot  |
| `livepeer_success_rate`                                  | Success rate                                                                                                     | per  |
| `livepeer_success_rate_per_stream`                       | Success rate, per stream                                                                                         | per  |
| `livepeer_transcode_time_seconds`                        | Transcoding time                                                                                                 | sec  |
| `livepeer_transcode_latency_seconds`                     | Transcoding latency, from source segment emerged from segmenter till transcoded segment apeeared in manifest     | sec  |
| `livepeer_transcode_overall_latency_seconds`             | Transcoding latency, from source segment emerged from segmenter till all transcoded segment apeeared in manifest | sec  |
| `livepeer_upload_time_seconds`                           | Upload (to Orchestrator) time                                                                                    | sec  |
| `livepeer_download_time_seconds`                         | Download (from orchestrator) time                                                                                | sec  |
| `livepeer_auth_webhook_time_milliseconds`                | Authentication webhook execution time                                                                            | ms   |
| `livepeer_source_segment_duration_seconds`               | Source segment's duration                                                                                        | sec  |
| `livepeer_http_client_timeout_1`                         | Number of times HTTP connection was dropped before transcoding complete                                          | tot  |
| `livepeer_http_client_timeout_2`                         | Number of times HTTP connection was dropped before transcoded segments was sent back to client                   | tot  |
| `livepeer_http_client_segment_transcoded_realtime_ratio` | Ratio of source segment duration / transcode time as measured on HTTP client                                     | rat  |
| `livepeer_http_client_segment_transcoded_realtime_3x`    | Number of segment transcoded 3x faster than realtime                                                             | tot  |
| `livepeer_http_client_segment_transcoded_realtime_2x`    | Number of segment transcoded 2x faster than realtime                                                             | tot  |
| `livepeer_http_client_segment_transcoded_realtime_1x`    | Number of segment transcoded 1x faster than realtime                                                             | tot  |
| `livepeer_http_client_segment_transcoded_realtime_half`  | Number of segment transcoded no more than two times slower than realtime                                         | tot  |
| `livepeer_http_client_segment_transcoded_realtime_slow`  | Number of segment transcoded more than two times slower than realtime                                            | tot  |
| `livepeer_transcode_score`                               | Ratio of source segment duration vs. transcode time                                                              | rat  |
| `livepeer_recording_save_latency`                        | How long it takes to save segment to the OS                                                                      | sec  |
| `livepeer_recording_save_errors`                         | Number of errors during save to the recording OS                                                                 | tot  |
| `livepeer_recording_saved_segments`                      | Number of segments saved to the recording OS                                                                     | tot  |
| `livepeer_orchestrator_swaps`                            | Number of orchestrator swaps mid-stream                                                                          | tot  |

### Sending payments

| Name                             | Description                                        | Type |
| -------------------------------- | -------------------------------------------------- | ---- |
| `livepeer_ticket_value_sent`     | TicketValueSent                                    | gwei |
| `livepeer_tickets_sent`          | TicketsSent                                        | tot  |
| `livepeer_payment_create_errors` | PaymentCreateError                                 | tot  |
| `livepeer_broadcaster_deposit`   | Current remaining deposit for the broadcaster node | gwei |
| `livepeer_broadcaster_reserve`   | Current remaing reserve for the broadcaster node   | gwei |
| `livepeer_max_transcoding_price` | MaxTranscodingPrice                                | wei  |

### Receiving payments

| Name                                | Description           | Type |
| ----------------------------------- | --------------------- | ---- |
| `livepeer_ticket_value_recv`        | TicketValueRecv       | gwei |
| `livepeer_tickets_recv`             | TicketsRecv           | tot  |
| `livepeer_payment_recv_errors`      | PaymentRecvErr        | tot  |
| `livepeer_winning_tickets_recv`     | WinningTicketsRecv    | tot  |
| `livepeer_value_redeemed`           | ValueRedeemed         | gwei |
| `livepeer_ticket_redemption_errors` | TicketRedemptionError | tot  |
| `livepeer_suggested_gas_price`      | SuggestedGasPrice     | gwei |
| `livepeer_min_gas_price`            | MinGasPrice           | gwei |
| `livepeer_max_gas_price`            | MaxGasPrice           | gwei |
| `livepeer_transcoding_price`        | TranscodingPrice      | wei  |

### Pixel accounting

| Name                            | Description        | Type       |
| ------------------------------- | ------------------ | ---------- |
| `livepeer_mil_pixels_processed` | MilPixelsProcessed | mil pixels |

### Fast verification

| Name                                                        | Description                                                                                                             | Type |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---- |
| `livepeer_fast_verification_done`                           | FastVerificationDone                                                                                                    | tot  |
| `livepeer_fast_verification_failed`                         | FastVerificationFailed                                                                                                  | tot  |
| `livepeer_fast_verification_enabled_current_sessions_total` | Number of currently transcoded streams that have fast verification enabled                                              | tot  |
| `livepeer_fast_verification_using_current_sessions_total`   | Number of currently transcoded streams that have fast verification enabled and that are using an untrusted orchestrator | tot  |

