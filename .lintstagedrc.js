// The following operations will all run concurrently:
module.exports = {
  // Type check TS files
  "**/*.(ts|tsx)": () => "npx tsc --noEmit",

  // Format TS & JS files with Prettier
  "**/*.(ts|tsx|js|_prettier)": (filenames) =>
    `npx prettier --write ${filenames.join(" ")}`,

  // Format Markdown & JSON files with Prettier
  "**/*.(md|json)": (filenames) =>
    `npx prettier --write ${filenames.join(" ")}`,
};
