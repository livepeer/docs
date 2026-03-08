#!/bin/bash
# @script download-linkedin-video
# @summary Utility script for tools/utility/personal/download-linkedin-video.sh.
# @owner docs
# @scope tools/utility/personal, snippets/assets/media/videos
# @pipeline manual — personal utility, not for shared pipelines
#
# @usage
#   bash tools/utility/personal/download-linkedin-video.sh
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
#   bash tools/utility/personal/download-linkedin-video.sh
#
# @notes
#   Keep script behavior deterministic and update script indexes after changes.

# Download LinkedIn video using yt-dlp
# Usage: ./tools/utility/personal/download-linkedin-video.sh

LINKEDIN_URL="https://www.linkedin.com/feed/update/urn:li:ugcPost:7387171661868933120"
OUTPUT_DIR="snippets/assets/media/videos"
OUTPUT_FILE="livepeer-founders-post.mp4"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Check if yt-dlp is installed
if ! command -v yt-dlp &> /dev/null; then
    echo "yt-dlp is not installed. Installing via brew..."
    brew install yt-dlp
fi

# Download the video
echo "Downloading LinkedIn video..."
yt-dlp "$LINKEDIN_URL" -o "$OUTPUT_DIR/$OUTPUT_FILE"

if [ $? -eq 0 ]; then
    echo "✅ Video downloaded successfully to: $OUTPUT_DIR/$OUTPUT_FILE"
else
    echo "❌ Failed to download video. Try one of these alternatives:"
    echo "1. Use https://www.linkedin-video-downloader.com/"
    echo "2. Use browser DevTools Network tab"
    echo "3. Use a browser extension like Video DownloadHelper"
fi
