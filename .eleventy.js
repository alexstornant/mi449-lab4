// The export statement makes these settings available to other files in 11ty
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("planet-card", function (color1, color2, name, details, id="none") {
    return `<div class="card-container" id="${id}">
    <div class="circle" style="
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: radial-gradient(circle, ${color1}, ${color2});
    transition: transform .2s;">
    </div>
    <p class="card-name">${name}</p>
    <p class="card-details">${details}</p>
</div>`
  });
};