// The following operations will all run concurrently:
module.exports = {
  // Type check TS files
  "**/*.(ts|tsx)": () => "npx tsc --noEmit",

  // Check TS & JS files with ESLint
  "**/*.(ts|tsx|js|_eslint)": (filenames) =>
    `npx eslint ${filenames.join(" ")}`,

  // Check TS & JS files with Prettier
  "**/*.(ts|tsx|js|_prettier)": (filenames) =>
    `npx prettier --check ${filenames.join(" ")}`,

  // Check Markdown & JSON files with Prettier
  "**/*.(md|json)": (filenames) =>
    `npx prettier --check ${filenames.join(" ")}`,
};
