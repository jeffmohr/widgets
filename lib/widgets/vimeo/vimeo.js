//
// The vimeo widget allows you to easily embed videos.
//
// ```
// [[vimeo/:id]]
// ```
//
// Options:
//
// ```
// aspect     desired aspect ratio [hd], sd
// ```
//
// Examples:
//
// ```
// Include video with id 1234 at 16x9 with autoplay
// [[vimeo/1234?aspect=16x9&autoplay=1]]
// ```
//
function render(id, options) {
  return this.template("fixed-iframe", {
    src: "//player.vimeo.com/video/" + id + "?title=0&byline=0&portrait=0",
    aspect: options.aspect
  });
}

module.exports = function(widgets) {
  widgets.add("vimeo/:id", render, {aspect: "hd"});
};
