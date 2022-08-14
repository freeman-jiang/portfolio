import { createClient } from "contentful";
import { contentfulSpaceId, contentfulCDNToken } from "./config";

export const client = createClient({
  space: contentfulSpaceId,
  accessToken: contentfulCDNToken,
});
