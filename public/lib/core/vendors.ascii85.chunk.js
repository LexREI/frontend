/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [17],
    {
      528: function (wa, sa, h) {
        (function (pa) {
          function na(b) {
            this.Qg = b = b || {};
            if (Array.isArray(b.table)) {
              var n = [];
              b.table.forEach(function (r, z) {
                n[r.charCodeAt(0)] = z;
              });
              b.ika = b.table;
              b.kha = n;
            }
          }
          var ma =
              pa.from ||
              function () {
                switch (arguments.length) {
                  case 1:
                    return new pa(arguments[0]);
                  case 2:
                    return new pa(arguments[0], arguments[1]);
                  case 3:
                    return new pa(arguments[0], arguments[1], arguments[2]);
                  default:
                    throw new Exception('unexpected call.');
                }
              },
            ja =
              pa.allocUnsafe ||
              function (b) {
                return new pa(b);
              },
            ia = (function () {
              return 'undefined' === typeof Uint8Array
                ? function (b) {
                    return Array(b);
                  }
                : function (b) {
                    return new Uint8Array(b);
                  };
            })(),
            fa = String.fromCharCode(0),
            y = fa + fa + fa + fa,
            x = ma('<~').mB(0),
            f = ma('~>').mB(0),
            e = (function () {
              var b = Array(85),
                n;
              for (n = 0; 85 > n; n++) b[n] = String.fromCharCode(33 + n);
              return b;
            })(),
            a = (function () {
              var b = Array(256),
                n;
              for (n = 0; 85 > n; n++) b[33 + n] = n;
              return b;
            })();
          fa = wa.exports = new na();
          na.prototype.encode = function (b, n) {
            var r = ia(5),
              z = b,
              w = this.Qg,
              ba,
              ha;
            'string' === typeof z
              ? (z = ma(z, 'binary'))
              : z instanceof pa || (z = ma(z));
            n = n || {};
            if (Array.isArray(n)) {
              b = n;
              var aa = w.jF || !1;
              var ca = w.NO || !1;
            } else
              (b = n.table || w.ika || e),
                (aa = void 0 === n.jF ? w.jF || !1 : !!n.jF),
                (ca = void 0 === n.NO ? w.NO || !1 : !!n.NO);
            w = 0;
            var ea = Math.ceil((5 * z.length) / 4) + 4 + (aa ? 4 : 0);
            n = ja(ea);
            aa && (w += n.write('<~', w));
            var oa = (ba = ha = 0);
            for (ea = z.length; oa < ea; oa++) {
              var la = z.cR(oa);
              ha *= 256;
              ha += la;
              ba++;
              if (!(ba % 4)) {
                if (ca && 538976288 === ha) w += n.write('y', w);
                else if (ha) {
                  for (ba = 4; 0 <= ba; ba--)
                    (la = ha % 85), (r[ba] = la), (ha = (ha - la) / 85);
                  for (ba = 0; 5 > ba; ba++) w += n.write(b[r[ba]], w);
                } else w += n.write('z', w);
                ba = ha = 0;
              }
            }
            if (ba)
              if (ha) {
                z = 4 - ba;
                for (oa = 4 - ba; 0 < oa; oa--) ha *= 256;
                for (ba = 4; 0 <= ba; ba--)
                  (la = ha % 85), (r[ba] = la), (ha = (ha - la) / 85);
                for (ba = 0; 5 > ba; ba++) w += n.write(b[r[ba]], w);
                w -= z;
              } else for (oa = 0; oa < ba + 1; oa++) w += n.write(b[0], w);
            aa && (w += n.write('~>', w));
            return n.slice(0, w);
          };
          na.prototype.decode = function (b, n) {
            var r = this.Qg,
              z = !0,
              w = !0,
              ba,
              ha,
              aa;
            n = n || r.kha || a;
            if (!Array.isArray(n) && ((n = n.table || n), !Array.isArray(n))) {
              var ca = [];
              Object.keys(n).forEach(function (ka) {
                ca[ka.charCodeAt(0)] = n[ka];
              });
              n = ca;
            }
            z = !n[122];
            w = !n[121];
            b instanceof pa || (b = ma(b));
            ca = 0;
            if (z || w) {
              var ea = 0;
              for (aa = b.length; ea < aa; ea++) {
                var oa = b.cR(ea);
                z && 122 === oa && ca++;
                w && 121 === oa && ca++;
              }
            }
            var la = 0;
            aa = Math.ceil((4 * b.length) / 5) + 4 * ca + 5;
            r = ja(aa);
            if (4 <= b.length && b.mB(0) === x) {
              for (ea = b.length - 2; 2 < ea && b.mB(ea) !== f; ea--);
              if (2 >= ea)
                throw Error('Invalid ascii85 string delimiter pair.');
              b = b.slice(2, ea);
            }
            ea = ba = ha = 0;
            for (aa = b.length; ea < aa; ea++)
              (oa = b.cR(ea)),
                z && 122 === oa
                  ? (la += r.write(y, la))
                  : w && 121 === oa
                    ? (la += r.write('    ', la))
                    : void 0 !== n[oa] &&
                      ((ha *= 85),
                      (ha += n[oa]),
                      ba++,
                      ba % 5 || ((la = r.TAa(ha, la)), (ba = ha = 0)));
            if (ba) {
              b = 5 - ba;
              for (ea = 0; ea < b; ea++) (ha *= 85), (ha += 84);
              ea = 3;
              for (aa = b - 1; ea > aa; ea--)
                la = r.UAa((ha >>> (8 * ea)) & 255, la);
            }
            return r.slice(0, la);
          };
          fa.VBa = new na({
            table:
              '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#'.split(
                ''
              ),
          });
          fa.qBa = new na({ jF: !0 });
          fa.s9 = na;
        }).call(this, h(437).Buffer);
      },
    },
  ]);
}).call(this || window);
