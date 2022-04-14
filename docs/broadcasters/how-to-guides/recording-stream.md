---
title: Recording a stream
sidebar_position: 7
---

# Recording a stream

Livepeer has a built-in feature that allows you to record your stream on s3-like object storage. You can use it with the flag `-recordStore ` on the broadcaster node.

**Please note that this option is not yet exposed when running Aqueduct.** To enable it in Aqueduct, you'll need to add a line to `mist.conf` specifying the `recordStore`. In `mist.conf["config"]["protocols"]`, find the object with `connector: livepeer` and `broadcaster:true`. Then, add a key-value pair `"recordStore": <s3-like url>`.

Here are some examples of value for `recordStore`:

- AWS S3 storage: `s3://<access_key_id>:<secret_access_key>@region/example-bucket`

- Minio over HTTP: `s3+http://<access_key_id>:<secret_access_key>@example.com:9000/example-bucket`

- Minio over HTTPS: `s3+https://<access_key_id>:<secret_access_key>@example.com:9000/example-bucket`

- Filebase: `s3+https://<access_key_id>:<secret_access_key>@s3.filebase.com/us-east-1/example-bucket`

```
Please note for filebase, the region us-east-1 is mandatory
```

In the s3 like urls (s3+http), you can specify a region in the url path. It will be the part before the filename.
So for example if the url path is `path/to/a/region-name/myfile.ts`, the region will be `region-name`.
