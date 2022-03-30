/* ! npm.im/video-canvas */
let videoCanvas = (function() {
  "use strict" /* ! npm.im/intervalometer */;
  function t(t, n, e, a) {
    function i(e) {
      (r = n(i, a)), t(e - (d || e)), (d = e);
    }
    let r, d;
    return {
      start: function() {
        r || i(0);
      },
      stop: function() {
        e(r), (r = null), (d = 0);
      }
    };
  }
  function n(n) {
    return t(n, requestAnimationFrame, cancelAnimationFrame);
  }
  function e(t, e) {
    void 0 === e && (e = {});
    let a = e.canvas || document.createElement("canvas"),
      i = a.getContext("2d"),
      r =
        e.drawCall ||
        function() {
          i.drawImage(t, 0, 0, a.width, a.height);
        };
    if (!1 !== e.updateSize) {
      let d = function() {
        (a.width = t.videoWidth), (a.height = t.videoHeight);
      };
      t.addEventListener("loadedmetadata", d), d();
    }
    let o = n(function() {
      return r(i, t);
    });
    return (
      t.addEventListener("playing", o.start),
      t.addEventListener("pause", o.stop),
      t.addEventListener("abort", o.stop),
      t.addEventListener("error", o.stop),
      t.addEventListener("waiting", o.stop),
      t.paused || o.start(),
      a
    );
  }
  return e;
})();
