/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [7],
    {
      517: function (wa, sa, h) {
        h.r(sa);
        var pa = h(0),
          na = h(3),
          ma = h(176);
        wa = h(113);
        var ja = h(291);
        h = h(436);
        var ia = window;
        wa = (function (fa) {
          function y(x, f, e) {
            f = fa.call(this, x, f, e) || this;
            if (x.name && 'xod' !== x.name.toLowerCase().split('.').pop())
              throw Error('Not an XOD file');
            if (!ia.FileReader || !ia.File || !ia.Blob)
              throw Error('File API is not supported in this browser');
            f.file = x;
            f.SE = [];
            f.IM = 0;
            return f;
          }
          Object(pa.c)(y, fa);
          y.prototype.YP = function (x, f, e) {
            var a = this,
              b = new FileReader();
            b.onloadend = function (n) {
              if (0 < a.SE.length) {
                var r = a.SE.shift();
                r.lua.readAsBinaryString(r.file);
              } else a.IM--;
              if (b.error) {
                n = b.error;
                if (n.code === n.ABORT_ERR) {
                  Object(na.j)(
                    'Request for chunk ' +
                      f.start +
                      '-' +
                      f.stop +
                      ' was aborted'
                  );
                  return;
                }
                return e(n);
              }
              if ((n = b.content || n.target.result)) return e(!1, n);
              Object(na.j)('No data was returned from FileReader.');
            };
            f &&
              (x = (x.slice || x.webkitSlice || x.mozSlice || x.nDa).call(
                x,
                f.start,
                f.stop
              ));
            0 === a.SE.length && 50 > a.IM
              ? (b.readAsBinaryString(x), a.IM++)
              : a.SE.push({ lua: b, file: x });
            return function () {
              b.abort();
            };
          };
          y.prototype.Qv = function (x) {
            var f = this;
            f.OE = !0;
            var e = ma.a;
            f.YP(f.file, { start: -e, stop: f.file.size }, function (a, b) {
              if (a)
                return Object(na.j)('Error loading end header: %s ' + a), x(a);
              if (b.length !== e)
                throw Error('Zip end header data is wrong size!');
              f.ce = new ja.a(b);
              var n = f.ce.X_();
              f.YP(f.file, n, function (r, z) {
                if (r)
                  return (
                    Object(na.j)('Error loading central directory: %s ' + r),
                    x(r)
                  );
                if (z.length !== n.stop - n.start)
                  throw Error('Zip central directory data is wrong size!');
                f.ce.c5(z);
                f.pM = !0;
                f.OE = !1;
                return x(!1);
              });
            });
          };
          y.prototype.aR = function (x, f) {
            var e = this,
              a = e.fi[x];
            if (e.ce.KY(x)) {
              var b = e.ce.wz(x),
                n = e.YP(e.file, b, function (r, z) {
                  delete e.fi[x];
                  if (r)
                    return (
                      Object(na.j)(
                        'Error loading part "%s": %s, ' + x + ', ' + r
                      ),
                      f(r)
                    );
                  if (z.length !== b.stop - b.start)
                    throw Error('Part data is wrong size!');
                  f(!1, x, z, e.ce.Q1(x));
                });
              a.J7 = !0;
              a.cancel = n;
            } else f(Error('File not found: "' + x + '"'), x);
          };
          return y;
        })(wa.a);
        Object(h.a)(wa);
        Object(h.b)(wa);
        sa['default'] = wa;
      },
    },
  ]);
}).call(this || window);
