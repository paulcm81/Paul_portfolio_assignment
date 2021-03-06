module.exports = function (eleventyConfig) {
    // Input directory: src
    // Output directory: _site
    eleventyConfig.addPassthroughCopy("src/style.css")
    eleventyConfig.addPassthroughCopy("src/images/")
    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.setTemplateFormats("html,njk");
  
    return {
      dir: {
        input: "src"
      }
    }
  }