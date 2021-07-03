module.exports = {
	globDirectory: "public/",
	globPatterns: ["**/*.{png,xml,ico,html,json,txt,svg,PNG,js}"],
	swSrc: "public/sw-base.js",
	swDest: "public/service-worker.js",
	globIgnores: ["../workbox-config.js", "node_modules/**/*"],
  };