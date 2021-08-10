// configure MDX: https://mdxjs.com/getting-started/next
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});

module.exports = {
  reactStrictMode: true,
};
