/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [12],
    {
      527: function (wa, sa, h) {
        h.r(sa);
        var pa = h(0),
          na = h(1);
        h.n(na);
        wa = h(113);
        h = h(436);
        wa = (function (ma) {
          function ja(ia, fa, y) {
            fa = ma.call(this, ia, fa, y) || this;
            fa.db = ia;
            return fa;
          }
          Object(pa.c)(ja, ma);
          ja.prototype.request = function (ia) {
            var fa = this;
            Object(na.each)(ia, function (y) {
              fa.db.get(y, function (x, f, e) {
                return x
                  ? fa.trigger('partReady.partRetriever', { rb: y, error: x })
                  : fa.trigger('partReady.partRetriever', {
                      rb: y,
                      data: f,
                      Cj: !1,
                      Ug: !1,
                      error: null,
                      Jd: e,
                    });
              });
            });
          };
          ja.prototype.Qv = function (ia) {
            ia();
          };
          return ja;
        })(wa.a);
        Object(h.a)(wa);
        Object(h.b)(wa);
        sa['default'] = wa;
      },
    },
  ]);
}).call(this || window);
