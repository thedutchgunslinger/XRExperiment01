AFRAME.registerComponent("thumbstick-logging", {
  init: function () {
    this.el.addEventListener("thumbstickmoved", this.logThumbstick);
  },
  logThumbstick: function (evt) {
    if (evt.detail.y > 0.95) {
      move([0, 1]);
    }
    if (evt.detail.y < -0.95) {
      move([0, -1]);
    }
    if (evt.detail.x < -0.95) {
      move([-1, 0]);
    }
    if (evt.detail.x > 0.95) {
      move([1, 0]);
    }
  },
});
