/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [6],
    {
      523: function (wa, sa, h) {
        h.r(sa);
        var pa = h(0),
          na = h(290);
        wa = h(515);
        h(28);
        h = h(436);
        var ma = (function (ja) {
          function ia(fa, y) {
            var x = ja.call(this, fa, y) || this;
            x.url = fa;
            x.range = y;
            x.status = na.a.NOT_STARTED;
            return x;
          }
          Object(pa.c)(ia, ja);
          ia.prototype.start = function () {
            var fa = document.createElement('IFRAME');
            fa.setAttribute('src', this.url);
            document.documentElement.appendChild(fa);
            fa.parentNode.removeChild(fa);
            this.status = na.a.STARTED;
            this.mG();
          };
          return ia;
        })(wa.ByteRangeRequest);
        wa = (function (ja) {
          function ia(fa, y, x, f) {
            fa = ja.call(this, fa, y, x, f) || this;
            fa.kB = ma;
            return fa;
          }
          Object(pa.c)(ia, ja);
          ia.prototype.Iy = function (fa, y) {
            return fa + '#' + y.start + '&' + (y.stop ? y.stop : '');
          };
          return ia;
        })(wa['default']);
        Object(h.a)(wa);
        Object(h.b)(wa);
        sa['default'] = wa;
      },
    },
  ]);
}).call(this || window);
