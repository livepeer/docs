#!/bin/bash
# @script download-linkedin-with-cookies
# @summary Utility script for tools/utility/personal/download-linkedin-with-cookies.sh.
# @owner docs
# @scope tools/utility/personal, snippets/assets/media/videos
# @pipeline manual — personal utility, not for shared pipelines
#
# @usage
#   bash tools/utility/personal/download-linkedin-with-cookies.sh
#
# @inputs
#   No required CLI flags; optional flags are documented inline.
#
# @outputs
#   - Console output and/or file updates based on script purpose.
#
# @exit-codes
#   0 = success
#   1 = runtime or validation failure
#
# @examples
#   bash tools/utility/personal/download-linkedin-with-cookies.sh
#
# @notes
#   Keep script behavior deterministic and update script indexes after changes.

# Download LinkedIn video using yt-dlp with browser cookies
# This uses your logged-in session to download the video

LINKEDIN_URL="https://www.linkedin.com/posts/livepeer_livepeer-mission-to-represent-open-video-activity-7287171661868933120-Uo-7"
OUTPUT_DIR="snippets/assets/media/videos"
OUTPUT_FILE="livepeer-founders-post.mp4"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "Downloading LinkedIn video using browser cookies..."
echo "This will use your logged-in LinkedIn session from Chrome/Firefox/Safari"
echo ""

# Try with different browsers (yt-dlp will auto-detect)
yt-dlp \
  --cookies-from-browser chrome \
  "$LINKEDIN_URL" \
  -o "$OUTPUT_DIR/$OUTPUT_FILE" \
  --no-warnings

if [ $? -ne 0 ]; then
    echo ""
    echo "Chrome cookies failed. Trying Firefox..."
    yt-dlp \
      --cookies-from-browser firefox \
      "$LINKEDIN_URL" \
      -o "$OUTPUT_DIR/$OUTPUT_FILE" \
      --no-warnings
fi

if [ $? -ne 0 ]; then
    echo ""
    echo "Firefox cookies failed. Trying Safari..."
    yt-dlp \
      --cookies-from-browser safari \
      "$LINKEDIN_URL" \
      -o "$OUTPUT_DIR/$OUTPUT_FILE" \
      --no-warnings
fi

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Video downloaded successfully to: $OUTPUT_DIR/$OUTPUT_FILE"
else
    echo ""
    echo "❌ All methods failed. Please try manual download:"
    echo "1. Screen record the video (Cmd+Shift+5 on Mac)"
    echo "2. Use a browser extension like Video DownloadHelper"
    echo "3. Use an online downloader (may not work for private posts)"
fi
