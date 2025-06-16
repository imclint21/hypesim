import nextMdx from "@next/mdx";

const withMdx = nextMdx({
	extension: /\.mdx?$/,
	options: {/* otherOptions… */}
})

/** @type {import("next").NextConfig} */
const nextConfig = withMdx({
	reactStrictMode: true,
	pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
	async rewrites () {
		return [
			{
				source: "/privacy-policy",
				destination: "/privacy",
			},
			{
				source: "/terms-of-service",
				destination: "/terms",
			},
			{
				source: "/share",
				destination: "/",
			}
		];
	},
});

export default nextConfig;
