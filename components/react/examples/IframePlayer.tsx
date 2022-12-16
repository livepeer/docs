import React from 'react';

export function IframePlayer() {
  return (
    <iframe
      src="https://lvpr.tv?v=6d7el73r1y12chxr"
      width={'100%'}
      height={530}
      allowFullScreen
      allow="autoplay; encrypted-media; picture-in-picture"
      sandbox="allow-same-origin allow-scripts"
    />
  );
}
