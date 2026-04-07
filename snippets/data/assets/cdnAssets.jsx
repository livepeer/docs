import cdnAssetsRegistry from '/snippets/data/assets/cdnAssets.registry.json';

export const docsV2AssetsBranch = cdnAssetsRegistry.branch;
export const docsV2AssetsRawBaseUrl = cdnAssetsRegistry.rawBaseUrl;
export const docsV2AssetsAllowedBranchRoots = cdnAssetsRegistry.allowedBranchRoots;
export const docsV2AssetsAllowedBranchFiles = cdnAssetsRegistry.allowedBranchFiles;
export const docsV2AssetRegistry = cdnAssetsRegistry.assets;

export const docsV2AssetsById = docsV2AssetRegistry.reduce((map, asset) => {
  map[asset.id] = asset;
  return map;
}, {});

export const getDocsV2CdnAsset = (id) => docsV2AssetsById[id] || null;

export const missionControlShrekGif = getDocsV2CdnAsset('home-mission-control-shrek-gif');
export const missionControlShrekGifUrl = missionControlShrekGif?.publicUrl || '';

export const evolutionImage = getDocsV2CdnAsset('home-evolution-image');
export const evolutionImageUrl = evolutionImage?.publicUrl || '';

export const livepeerFoundersVideo = getDocsV2CdnAsset('home-livepeer-founders-video');
export const livepeerFoundersVideoUrl = livepeerFoundersVideo?.publicUrl || '';

export const embodyDemoVideo = getDocsV2CdnAsset('solutions-embody-demo-video');
export const embodyDemoVideoUrl = embodyDemoVideo?.publicUrl || '';

export const gatewaysTestVideoDownload = getDocsV2CdnAsset('gateways-test-video-download');
export const gatewaysTestVideoDownloadUrl = gatewaysTestVideoDownload?.publicUrl || '';
