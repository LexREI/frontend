/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [3],
    {
      521: function (wa, sa, h) {
        h.r(sa);
        var pa = h(0),
          na = h(176);
        wa = h(515);
        h = h(436);
        wa = (function (ma) {
          function ja(ia, fa, y, x) {
            return ma.call(this, ia, fa, y, x) || this;
          }
          Object(pa.c)(ja, ma);
          ja.prototype.Z_ = function () {
            return { start: this.UZ - na.a, stop: this.UZ };
          };
          ja.prototype.Qv = function (ia) {
            var fa = this;
            this.Yp(this.url, { start: 0, stop: 1 }, function (y, x, f) {
              if (y) return ia(y);
              y = f.request.getResponseHeader('Content-Range');
              fa.UZ = y.split('/')[1];
              ma.prototype.Qv.call(fa, ia);
            });
          };
          return ja;
        })(wa['default']);
        Object(h.a)(wa);
        Object(h.b)(wa);
        sa['default'] = wa;
      },
    },
  ]);
}).call(this || window);
