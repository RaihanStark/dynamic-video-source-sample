$(document).ready(function () {
  let currentOrientation;

  function getOrientation() {
    var orientation =
      window.innerWidth > window.innerHeight ? "Landscape" : "Portrait";
    return orientation;
  }

  function setDynamicSrc(landscapeSrc, portraitSrc) {
    if (getOrientation() === "Landscape") {
      videojs("my-video").src(landscapeSrc);
    } else {
      videojs("my-video").src(portraitSrc);
    }
  }

  window.onresize = function () {
    if (currentOrientation !== getOrientation()) {
      setDynamicSrc("videos/landscape.mp4", "videos/potrait.mp4");
      video_dom.play();
    }

    currentOrientation = getOrientation();
  };

  //   Init
  let video_dom = videojs("my-video", {
    controls: false,
    preload: "auto",
  });
  setDynamicSrc("videos/landscape.mp4", "videos/potrait.mp4");
  video_dom.play();
});
