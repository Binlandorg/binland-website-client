import react from "@vitejs/plugin-react"
import { FontaineTransform } from "fontaine"
import { defineConfig } from "vite"
import checker from "vite-plugin-checker"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		checker({
			typescript: true,
		}),
		react(),
		ViteImageOptimizer({
			test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
			exclude: undefined,
			include: undefined,
			includePublic: true,
			logStats: true,
			ansiColors: true,
			svg: {
				multipass: true,
				plugins: [
					{
						name: "preset-default",
						params: {
							overrides: {
								cleanupNumericValues: false,
								removeViewBox: false, // https://github.com/svg/svgo/issues/1128
							},
						},
					},
					"sortAttrs",
					{
						name: "addAttributesToSVGElement",
						params: {
							attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
						},
					},
				],
			},
			png: {
				quality: 100,
			},
			jpeg: {
				quality: 100,
			},
			jpg: {
				quality: 100,
			},
			tiff: {
				quality: 100,
			},
			gif: {},
			webp: {
				lossless: true,
			},
			avif: {
				lossless: true,
			},
			cache: false,
			cacheLocation: undefined,
		}),
		FontaineTransform.vite({
			fallbacks: [
				"BlinkMacSystemFont",
				"Segoe UI",
				"Helvetica Neue",
				"Arial",
				"Noto Sans",
			],
			resolvePath: (id) => `file:///path/to/public/dir${id}`,
			sourcemap: true,
		}),
	],
})
