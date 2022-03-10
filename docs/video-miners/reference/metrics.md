---
title: Prometheus Metrics
sidebar_position: 7
---

# Prometheus Metrics

Livepeer exposes a number of metrics via the Prometheus exporter. This page documents all metrics that you can scrape via the `/metrics` endpoint when the [monitoring is enabled](/video-miners/how-to-guides/metrics-monitoring).

## Livepeer metrics

### General

| Name                                                     | Description                                                                                                      | Unit | Type      | Tags                                                  |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---- | --------- | ----------------------------------------------------- |
| `livepeer_versions`                                      | Versions used by LivePeer node.                                                                                  | Num  | gauge     | compiler, goos, goversion, livepeerversion, node_type |
| `livepeer_segment_source_appeared_total`                 | SegmentSourceAppeared                                                                                            | tot  | counter   | node_id, node_type, profile, seg_type                 |
| `livepeer_segment_source_emerged_total`                  | SegmentEmerged                                                                                                   | tot  | counter   | node_id, node_type                                    |
| `livepeer_segment_source_emerged_unprocessed_total`      | Raw number of segments emerged from segmenter.                                                                   | tot  | counter   | node_id, node_type                                    |
| `livepeer_segment_source_uploaded_total`                 | SegmentUploaded                                                                                                  | tot  | counter   | node_id, node_type, orchestrator_uri                  |
| `livepeer_segment_source_upload_failed_total`            | SegmentUploadedFailed                                                                                            | tot  | counter   | error_code, node_id, node_type, orchestrator_uri      |
| `livepeer_segment_transcoded_downloaded_total`           | SegmentDownloaded                                                                                                | tot  | counter   | node_id, node_type                                    |
| `livepeer_segment_transcoded_total`                      | SegmentTranscoded                                                                                                | tot  | counter   | node_id, node_type, profiles, trusted, verified       |
| `livepeer_segment_transcoded_unprocessed_total`          | Raw number of segments successfully transcoded.                                                                  | tot  | counter   | node_id, node_type, profiles                          |
| `livepeer_segment_transcode_failed_total`                | SegmentTranscodeFailed                                                                                           | tot  | counter   | error_code, node_id, node_type                        |
| `livepeer_segment_transcoded_appeared_total`             | SegmentTranscodedAppeared                                                                                        | tot  | counter   | node_id, node_type, profile, seg_type                 |
| `livepeer_segment_transcoded_all_appeared_total`         | SegmentTranscodedAllAppeared                                                                                     | tot  | counter   | node_id, node_type, profiles                          |
| `livepeer_broadcast_client_start_failed_total`           | StartBroadcastClientFailed                                                                                       | tot  | counter   | node_id, node_type                                    |
| `livepeer_stream_create_failed_total`                    | StreamCreateFailed                                                                                               | tot  | counter   | node_id, node_type                                    |
| `livepeer_stream_created_total`                          | StreamCreated                                                                                                    | tot  | counter   | node_id, node_type                                    |
| `livepeer_stream_started_total`                          | StreamStarted                                                                                                    | tot  | counter   | node_id, node_type                                    |
| `livepeer_stream_ended_total`                            | StreamEnded                                                                                                      | tot  | counter   | node_id, node_type                                    |
| `livepeer_max_sessions_total`                            | Max Sessions                                                                                                     | tot  | gauge     | node_id, node_type                                    |
| `livepeer_current_sessions_total`                        | Number of streams currently transcoding                                                                          | tot  | gauge     | node_id, node_type                                    |
| `livepeer_discovery_errors_total`                        | Number of discover errors                                                                                        | tot  | counter   | error_code, node_id, node_type, orchestrator_uri      |
| `livepeer_transcode_retried`                             | Number of times segment transcode was retried                                                                    | tot  | counter   | node_id, node_type, try                               |
| `livepeer_transcoders_number`                            | Number of transcoders currently connected to orchestrator                                                        | tot  | gauge     | node_id, node_type                                    |
| `livepeer_transcoders_capacity`                          | Total advertised capacity of transcoders currently connected to orchestrator                                     | tot  | gauge     | node_id, node_type                                    |
| `livepeer_transcoders_load`                              | Total load of transcoders currently connected to orchestrator                                                    | tot  | gauge     | node_id, node_type                                    |
| `livepeer_success_rate`                                  | Number of transcoded segments divided on number of source segments                                               | per  | gauge     | node_id, node_type                                    |
| `livepeer_success_rate_per_stream`                       | Number of transcoded segments divided on number of source segments, per stream                                   | per  | gauge     | node_id, node_type                                    |
| `livepeer_transcode_time_seconds`                        | TranscodeTime, seconds                                                                                           | sec  | histogram | node_id, node_type, profiles, trusted, verified       |
| `livepeer_transcode_latency_seconds`                     | Transcoding latency, from source segment emerged from segmenter till transcoded segment apeeared in manifest     | sec  | histogram | node_id, node_type, profile                           |
| `livepeer_transcode_overall_latency_seconds`             | Transcoding latency, from source segment emerged from segmenter till all transcoded segment apeeared in manifest | sec  | histogram | node_id, node_type, profiles                          |
| `livepeer_upload_time_seconds`                           | UploadTime, seconds                                                                                              | sec  | histogram | node_id, node_type, orchestrator_uri                  |
| `livepeer_download_time_seconds`                         | Download time                                                                                                    | sec  | histogram | node_id, node_type                                    |
| `livepeer_auth_webhook_time_milliseconds`                | Authentication webhook execution time, milliseconds                                                              | ms   | histogram | node_id, node_type                                    |
| `livepeer_source_segment_duration_seconds`               | Source segment's duration                                                                                        | sec  | histogram | node_id, node_type                                    |
| `livepeer_http_client_timeout_1`                         | Number of times HTTP connection was dropped before transcoding complete                                          | tot  | counter   | node_id, node_type                                    |
| `livepeer_http_client_timeout_2`                         | Number of times HTTP connection was dropped before transcoded segments was sent back to client                   | tot  | counter   | node_id, node_type                                    |
| `livepeer_http_client_segment_transcoded_realtime_ratio` | Ratio of source segment duration / transcode time as measured on HTTP client                                     | rat  | histogram | node_id, node_type                                    |
| `livepeer_http_client_segment_transcoded_realtime_3x`    | Number of segment transcoded 3x faster than realtime                                                             | tot  | counter   | node_id, node_type                                    |
| `livepeer_http_client_segment_transcoded_realtime_2x`    | Number of segment transcoded 2x faster than realtime                                                             | tot  | counter   | node_id, node_type                                    |
| `livepeer_http_client_segment_transcoded_realtime_1x`    | Number of segment transcoded 1x faster than realtime                                                             | tot  | counter   | node_id, node_type                                    |
| `livepeer_http_client_segment_transcoded_realtime_half`  | Number of segment transcoded no more than two times slower than realtime                                         | tot  | counter   | node_id, node_type                                    |
| `livepeer_http_client_segment_transcoded_realtime_slow`  | Number of segment transcoded more than two times slower than realtime                                            | tot  | counter   | node_id, node_type                                    |
| `livepeer_transcode_score`                               | Ratio of source segment duration vs. transcode time                                                              | rat  | histogram | node_id, node_type, profiles, trusted, verified       |
| `livepeer_recording_save_latency`                        | How long it takes to save segment to the OS                                                                      | sec  | histogram | node_id, node_type                                    |
| `livepeer_recording_save_errors`                         | Number of errors during save to the recording OS                                                                 | tot  | counter   | node_id, node_type                                    |
| `livepeer_recording_saved_segments`                      | Number of segments saved to the recording OS                                                                     | tot  | counter   | node_id, node_type                                    |
| `livepeer_orchestrator_swaps`                            | Number of orchestrator swaps mid-stream                                                                          | tot  | counter   | node_id, node_type                                    |

### Sending payments

| Name                             | Description                                        | Unit | Type    | Tags               |
| -------------------------------- | -------------------------------------------------- | ---- | ------- | ------------------ |
| `livepeer_ticket_value_sent`     | Ticket value sent                                  | gwei | counter | node_id, node_type |
| `livepeer_tickets_sent`          | Tickets sent                                       | tot  | counter | node_id, node_type |
| `livepeer_payment_create_errors` | Errors when creating payments                      | tot  | counter | node_id, node_type |
| `livepeer_broadcaster_deposit`   | Current remaining deposit for the broadcaster node | gwei | gauge   | node_id, node_type |
| `livepeer_broadcaster_reserve`   | Current remaining reserve for the broadcaster node | gwei | gauge   | node_id, node_type |
| `livepeer_max_transcoding_price` | Maximum price per pixel to pay for transcoding     | wei  | gauge   | node_id, node_type |

### Receiving payments

| Name                                | Description                                        | Unit | Type    | Tags                           |
| ----------------------------------- | -------------------------------------------------- | ---- | ------- | ------------------------------ |
| `livepeer_ticket_value_recv`        | Ticket value received                              | gwei | counter | node_id, node_type             |
| `livepeer_tickets_recv`             | Tickets received                                   | tot  | counter | node_id, node_type             |
| `livepeer_payment_recv_errors`      | Errors when receiving payments                     | tot  | counter | error_code, node_id, node_type |
| `livepeer_winning_tickets_recv`     | Winning tickets received                           | tot  | counter | node_id, node_type             |
| `livepeer_value_redeemed`           | Winning ticket value redeemed                      | gwei | counter | node_id, node_type             |
| `livepeer_ticket_redemption_errors` | Errors when redeeming tickets                      | tot  | counter | node_id, node_type             |
| `livepeer_suggested_gas_price`      | Suggested gas price for winning ticket redemption  | gwei | gauge   | node_id, node_type             |
| `livepeer_min_gas_price`            | Minimum gas price to use for gas price suggestions | gwei | gauge   | node_id, node_type             |
| `livepeer_max_gas_price`            | Maximum gas price to use for gas price suggestions | gwei | gauge   | node_id, node_type             |
| `livepeer_transcoding_price`        | Transcoding price per pixel                        | wei  | gauge   | node_id, node_type             |

### Pixel accounting

| Name                            | Description              | Unit       | Type    | Tags               |
| ------------------------------- | ------------------------ | ---------- | ------- | ------------------ |
| `livepeer_mil_pixels_processed` | Million pixels processed | mil pixels | counter | node_id, node_type |

### Fast verification

| Name                                                        | Description                                                                                                             | Unit | Type    | Tags               |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---- | ------- | ------------------ |
| `livepeer_fast_verification_done`                           | Number of fast verifications done                                                                                       | tot  | counter | node_id, node_type |
| `livepeer_fast_verification_failed`                         | Number of fast verifications failed                                                                                     | tot  | counter | node_id, node_type |
| `livepeer_fast_verification_enabled_current_sessions_total` | Number of currently transcoded streams that have fast verification enabled                                              | tot  | gauge   | node_id, node_type |
| `livepeer_fast_verification_using_current_sessions_total`   | Number of currently transcoded streams that have fast verification enabled and that are using an untrusted orchestrator | tot  | gauge   | node_id, node_type |

## Golang metrics

| Name                               | Description                                                                                 | Type    |
| ---------------------------------- | ------------------------------------------------------------------------------------------- | ------- |
| `go_gc_duration_seconds`           | A summary of the pause duration of garbage collection cycles.                               | summary |
| `go_goroutines`                    | Number of goroutines that currently exist.                                                  | gauge   |
| `go_info`                          | Information about the Go environment.                                                       | gauge   |
| `go_memstats_alloc_bytes`          | Number of bytes allocated and still in use.                                                 | gauge   |
| `go_memstats_alloc_bytes_total`    | Total number of bytes allocated, even if freed.                                             | counter |
| `go_memstats_buck_hash_sys_bytes`  | Number of bytes used by the profiling bucket hash table.                                    | gauge   |
| `go_memstats_frees_total`          | Total number of frees.                                                                      | counter |
| `go_memstats_gc_cpu_fraction`      | The fraction of this program's available CPU time used by the GC since the program started. | gauge   |
| `go_memstats_gc_sys_bytes`         | Number of bytes used for garbage collection system metadata.                                | gauge   |
| `go_memstats_heap_alloc_bytes`     | Number of heap bytes allocated and still in use.                                            | gauge   |
| `go_memstats_heap_idle_bytes`      | Number of heap bytes waiting to be used.                                                    | gauge   |
| `go_memstats_heap_inuse_bytes`     | Number of heap bytes that are in use.                                                       | gauge   |
| `go_memstats_heap_objects`         | Number of allocated objects.                                                                | gauge   |
| `go_memstats_heap_released_bytes`  | Number of heap bytes released to OS.                                                        | gauge   |
| `go_memstats_heap_sys_bytes`       | Number of heap bytes obtained from system.                                                  | gauge   |
| `go_memstats_last_gc_time_seconds` | Number of seconds since 1970 of last garbage collection.                                    | gauge   |
| `go_memstats_lookups_total`        | Total number of pointer lookups.                                                            | counter |
| `go_memstats_mallocs_total`        | Total number of mallocs.                                                                    | counter |
| `go_memstats_mcache_inuse_bytes`   | Number of bytes in use by mcache structures.                                                | gauge   |
| `go_memstats_mcache_sys_bytes`     | Number of bytes used for mcache structures obtained from system.                            | gauge   |
| `go_memstats_mspan_inuse_bytes`    | Number of bytes in use by mspan structures.                                                 | gauge   |
| `go_memstats_mspan_sys_bytes`      | Number of bytes used for mspan structures obtained from system.                             | gauge   |
| `go_memstats_next_gc_bytes`        | Number of heap bytes when next garbage collection will take place.                          | gauge   |
| `go_memstats_other_sys_bytes`      | Number of bytes used for other system allocations.                                          | gauge   |
| `go_memstats_stack_inuse_bytes`    | Number of bytes in use by the stack allocator.                                              | gauge   |
| `go_memstats_stack_sys_bytes`      | Number of bytes obtained from system for stack allocator.                                   | gauge   |
| `go_memstats_sys_bytes`            | Number of bytes obtained from system.                                                       | gauge   |
| `go_threads`                       | Number of OS threads created.                                                               | gauge   |
