module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  return {
    dir: {
      output: "build",
    }
  }
};
