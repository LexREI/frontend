/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [14],
    {
      525: function (wa, sa, h) {
        h.r(sa);
        var pa = h(0),
          na = h(290);
        wa = h(515);
        var ma = h(113);
        h = h(436);
        var ja = {},
          ia = (function (fa) {
            function y(x, f) {
              var e = fa.call(this, x, f) || this;
              e.url = x;
              e.range = f;
              e.status = na.a.NOT_STARTED;
              return e;
            }
            Object(pa.c)(y, fa);
            y.prototype.start = function (x) {
              var f = this;
              'undefined' === typeof ja[this.range.start] &&
                ((ja[this.range.start] = {
                  MS: function (e) {
                    var a = atob(e),
                      b,
                      n = a.length;
                    e = new Uint8Array(n);
                    for (b = 0; b < n; ++b) e[b] = a.charCodeAt(b);
                    a = e.length;
                    b = '';
                    for (var r = 0; r < a; )
                      (n = e.subarray(r, r + 1024)),
                        (r += 1024),
                        (b += String.fromCharCode.apply(null, n));
                    f.MS(b, x);
                  },
                  mDa: function () {
                    f.status = na.a.ERROR;
                    x({ code: f.status });
                  },
                }),
                window.external.notify(this.url),
                (this.status = na.a.STARTED));
              f.mG();
            };
            return y;
          })(wa.ByteRangeRequest);
        wa = (function (fa) {
          function y(x, f, e, a) {
            x = fa.call(this, x, e, a) || this;
            x.kB = ia;
            return x;
          }
          Object(pa.c)(y, fa);
          y.prototype.Iy = function (x, f) {
            return x + '?' + f.start + '&' + (f.stop ? f.stop : '');
          };
          return y;
        })(ma.a);
        Object(h.a)(wa);
        Object(h.b)(wa);
        sa['default'] = wa;
      },
    },
  ]);
}).call(this || window);
