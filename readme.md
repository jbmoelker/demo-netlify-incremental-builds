# Demo Netlify Incremental Builds

**Keep files from previous builds and add new ones.**

## How it works

This demo generates a new JSON file on every build. The name and contents of the file are set to the time of the build (`9:52.json`: `{ "time": "9:52" }`).

Each build only generates a single file. Normally previous files are no longer available on the deployed website after a successful build. But by loading files from the previous builds from cache before the build, we get incremental builds. So older files are still available:

* [https://demo-netlify-incremental-builds.netlify.app/9:48.json](https://demo-netlify-incremental-builds.netlify.app/9:48.json)
* [https://demo-netlify-incremental-builds.netlify.app/9:51.json](https://demo-netlify-incremental-builds.netlify.app/9:51.json)
* [https://demo-netlify-incremental-builds.netlify.app/9:52.json](https://demo-netlify-incremental-builds.netlify.app/9:52.json)

Note: this demo uses the [Netlify Build Plugin for Gatsby](https://github.com/jlengstorf/netlify-plugin-gatsby-cache) to persist generated files / load previous ones from cache. But the plugin has nothing to with Gatsby, nor does this demo :)