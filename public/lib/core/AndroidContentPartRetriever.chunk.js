/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [1],
    {
      519: function (wa, sa, h) {
        h.r(sa);
        var pa = h(0),
          na = h(290);
        wa = h(515);
        h = h(436);
        var ma = window,
          ja = (function (ia) {
            function fa(y, x) {
              var f = ia.call(this, y, x) || this;
              f.url = y;
              f.range = x;
              f.request = new XMLHttpRequest();
              f.request.open('GET', f.url, !0);
              ma.Uint8Array && (f.request.responseType = 'arraybuffer');
              f.request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
              f.status = na.a.NOT_STARTED;
              return f;
            }
            Object(pa.c)(fa, ia);
            return fa;
          })(wa.ByteRangeRequest);
        wa = (function (ia) {
          function fa(y, x, f, e) {
            y = ia.call(this, y, x, f, e) || this;
            y.kB = ja;
            return y;
          }
          Object(pa.c)(fa, ia);
          fa.prototype.Iy = function (y, x) {
            return y + '/bytes=' + x.start + ',' + (x.stop ? x.stop : '');
          };
          return fa;
        })(wa['default']);
        Object(h.a)(wa);
        Object(h.b)(wa);
        sa['default'] = wa;
      },
    },
  ]);
}).call(this || window);
