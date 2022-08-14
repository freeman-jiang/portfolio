import { Asset } from "contentful";

export const extractContentfulAssetUrl = (asset: Asset) => {
  return `https:${asset.fields.file.url}`;
};
