/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [2],
    {
      520: function (wa, sa, h) {
        h.r(sa);
        wa = h(49);
        h = h(436);
        var pa = (function () {
          function na(ma) {
            this.buffer = ma;
            this.fileSize =
              null === ma || void 0 === ma ? void 0 : ma.byteLength;
          }
          na.prototype.getFileData = function (ma) {
            ma(new Uint8Array(this.buffer));
          };
          na.prototype.getFile = function () {
            return Promise.resolve(null);
          };
          return na;
        })();
        Object(wa.a)(pa);
        Object(h.a)(pa);
        Object(h.b)(pa);
        sa['default'] = pa;
      },
    },
  ]);
}).call(this || window);
