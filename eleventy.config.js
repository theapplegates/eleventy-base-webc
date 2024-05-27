import pluginWebc from "@11ty/eleventy-plugin-webc";
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
// import eleventyWebcPlugin from "@11ty/eleventy-plugin-webc";
import { eleventyImagePlugin } from "@11ty/eleventy-img";


/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
export default function(eleventyConfig) {
eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
	// which file extensions to process
	extensions: "html",

	// Add any other Image utility options here:

	// optional, output image formats
	formats: ["avif", "webp", "jpeg"],
	// formats: ["auto"],

	// optional, output image widths
	 widths: [320, 570, 880, 1024, 1248],

	// optional, attributes assigned on <img> override these values.
	defaultAttributes: {
		sizes: "90vw",
		loading: "lazy",
		decoding: "async",
	},
});


	eleventyConfig.ignores.add("README.md");

	eleventyConfig.addPlugin(pluginWebc, {
		components: [
			"./_components/**/*.webc",
			"npm:@11ty/is-land/*.webc"
		]
	});

	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

	eleventyConfig.setServerOptions({
		domDiff: false
	});

	return {
		dir: {
			input: "content",          // default: "."
			includes: "../_includes",  // default: "_includes"
			data: "../_data",          // default: "_data"
		},
	}
};
