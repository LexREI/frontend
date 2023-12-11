/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [10],
    {
      533: function (wa, sa, h) {
        h.r(sa);
        var pa = h(543),
          na = h(136),
          ma = h(46),
          ja = h(82);
        wa = (function () {
          function ia() {
            this.Ib = this.ef = this.mc = this.Ic = null;
            this.Df = !1;
          }
          ia.prototype.clear = function () {
            Object(ma.b)(this.Ic);
            this.mc = '';
            Object(ma.b)(this.ef);
            Object(ma.b)(this.Ib);
            this.Df = !1;
          };
          ia.prototype.Od = function () {
            this.Ic = [];
            this.ef = [];
            this.Ib = [];
            this.Df = !1;
          };
          ia.prototype.KD = function (fa) {
            for (var y = '', x = 0, f, e, a; x < fa.length; )
              (f = fa.charCodeAt(x)),
                9 === f
                  ? ((y += String.fromCharCode(10)), x++)
                  : 128 > f
                    ? ((y += String.fromCharCode(f)), x++)
                    : 191 < f && 224 > f
                      ? ((e = fa.charCodeAt(x + 1)),
                        (y += String.fromCharCode(((f & 31) << 6) | (e & 63))),
                        (x += 2))
                      : ((e = fa.charCodeAt(x + 1)),
                        (a = fa.charCodeAt(x + 2)),
                        (y += String.fromCharCode(
                          ((f & 15) << 12) | ((e & 63) << 6) | (a & 63)
                        )),
                        (x += 3));
            return y;
          };
          ia.prototype.initData = function (fa) {
            this.Ic = [];
            this.ef = [];
            this.Ib = [];
            this.Df = !1;
            try {
              var y = new ja.a(fa);
              this.mc = '';
              y.Pa();
              if (!y.advance()) return;
              var x = y.current.textContent;
              this.mc = x = this.KD(x);
              Object(ma.b)(this.ef);
              y.advance();
              x = y.current.textContent;
              for (var f = x.split(','), e = Object(na.a)(f); e.On(); ) {
                var a = e.current;
                try {
                  var b = parseInt(a.trim(), 10);
                  this.ef.push(b);
                } catch (aa) {}
              }
              Object(ma.b)(this.Ic);
              y.advance();
              x = y.current.textContent;
              f = x.split(',');
              for (var n = Object(na.a)(f); n.On(); ) {
                a = n.current;
                try {
                  (b = parseFloat(a.trim())), this.Ic.push(b);
                } catch (aa) {}
              }
              Object(ma.b)(this.Ib);
              y.advance();
              x = y.current.textContent;
              f = x.split(',');
              fa = [];
              y = [];
              x = 0;
              for (var r = Object(na.a)(f); r.On(); ) {
                a = r.current;
                switch (a) {
                  case 'Q':
                    x = 1;
                    break;
                  case 'R':
                    x = 2;
                    break;
                  case 'S':
                    x = 3;
                    break;
                  default:
                    x = 0;
                }
                if (x) fa.push(0), y.push(x);
                else
                  try {
                    (b = parseFloat(a.trim())), fa.push(b), y.push(x);
                  } catch (aa) {
                    return;
                  }
              }
              x = 0;
              var z = fa.length;
              e = r = a = f = void 0;
              for (var w = (n = 0), ba = 0; ba < z; ) {
                var ha = y[ba];
                if (0 < ha)
                  (x = ha),
                    ++ba,
                    3 === x && ((n = fa[ba]), (w = fa[ba + 1]), (ba += 2));
                else if (1 === x)
                  for (b = 0; 8 > b; ++b) this.Ib.push(fa[ba++]);
                else
                  2 === x
                    ? ((f = fa[ba++]),
                      (a = fa[ba++]),
                      (r = fa[ba++]),
                      (e = fa[ba++]),
                      this.Ib.push(f),
                      this.Ib.push(a),
                      this.Ib.push(r),
                      this.Ib.push(a),
                      this.Ib.push(r),
                      this.Ib.push(e),
                      this.Ib.push(f),
                      this.Ib.push(e))
                    : 3 === x &&
                      ((f = fa[ba++]),
                      (a = n),
                      (r = fa[ba++]),
                      (e = w),
                      this.Ib.push(f),
                      this.Ib.push(a),
                      this.Ib.push(r),
                      this.Ib.push(a),
                      this.Ib.push(r),
                      this.Ib.push(e),
                      this.Ib.push(f),
                      this.Ib.push(e));
              }
            } catch (aa) {
              return;
            }
            this.mc.length &&
              this.mc.length === this.ef.length &&
              8 * this.mc.length === this.Ib.length &&
              (this.Df = !0);
          };
          ia.prototype.ready = function () {
            return this.Df;
          };
          ia.prototype.xz = function () {
            var fa = new pa.a();
            if (!this.Ic.length)
              return fa.Xh(this.Ic, -1, this.mc, this.Ib, 0), fa;
            fa.Xh(this.Ic, 1, this.mc, this.Ib, 1);
            return fa;
          };
          ia.prototype.Af = function () {
            return this.Ib;
          };
          ia.prototype.getData = function () {
            return {
              m_Struct: this.Ic,
              m_Str: this.mc,
              m_Offsets: this.ef,
              m_Quads: this.Ib,
              m_Ready: this.Df,
            };
          };
          return ia;
        })();
        sa['default'] = wa;
      },
      543: function (wa, sa, h) {
        var pa = h(99),
          na = h(58),
          ma = h(555);
        wa = (function () {
          function ja() {
            this.Ie = 0;
            this.Gb = this.Ka = this.Rf = null;
            this.od = 0;
            this.He = null;
          }
          ja.prototype.Od = function () {
            this.Ie = -1;
            this.od = 0;
            this.He = [];
          };
          ja.prototype.Xh = function (ia, fa, y, x, f) {
            this.Ie = fa;
            this.od = f;
            this.He = [];
            this.Rf = ia;
            this.Ka = y;
            this.Gb = x;
          };
          ja.prototype.Zc = function (ia) {
            return this.Ie === ia.Ie;
          };
          ja.prototype.jl = function () {
            return Math.abs(this.Rf[this.Ie]);
          };
          ja.prototype.Kn = function () {
            return 0 < this.Rf[this.Ie];
          };
          ja.prototype.Qh = function () {
            var ia = this.Kn() ? 6 : 10,
              fa = new ma.a();
            fa.Xh(this.Rf, this.Ie + ia, this.Ie, this.Ka, this.Gb, 1);
            return fa;
          };
          ja.prototype.X0 = function (ia) {
            if (0 > ia || ia >= this.jl())
              return (
                (ia = new ma.a()),
                ia.Xh(this.Rf, -1, -1, this.Ka, this.Gb, 0),
                ia
              );
            var fa = this.Kn() ? 6 : 10,
              y = this.Kn() ? 5 : 11,
              x = new ma.a();
            x.Xh(
              this.Rf,
              this.Ie + fa + y * ia,
              this.Ie,
              this.Ka,
              this.Gb,
              1 + ia
            );
            return x;
          };
          ja.prototype.Ei = function () {
            var ia = this.Ie + parseInt(this.Rf[this.Ie + 1], 10);
            if (ia >= this.Rf.length)
              return (
                (ia = new ja()), ia.Xh(this.Rf, -1, this.Ka, this.Gb, 0), ia
              );
            var fa = new ja();
            fa.Xh(this.Rf, ia, this.Ka, this.Gb, this.od + 1);
            return fa;
          };
          ja.prototype.getBBox = function (ia) {
            if (this.Kn())
              (ia.x1 = this.Rf[this.Ie + 2 + 0]),
                (ia.y1 = this.Rf[this.Ie + 2 + 1]),
                (ia.x2 = this.Rf[this.Ie + 2 + 2]),
                (ia.y2 = this.Rf[this.Ie + 2 + 3]);
            else {
              for (
                var fa = 1.79769e308,
                  y = pa.a.MIN,
                  x = 1.79769e308,
                  f = pa.a.MIN,
                  e = 0;
                4 > e;
                ++e
              ) {
                var a = this.Rf[this.Ie + 2 + 2 * e],
                  b = this.Rf[this.Ie + 2 + 2 * e + 1];
                fa = Math.min(fa, a);
                y = Math.max(y, a);
                x = Math.min(x, b);
                f = Math.max(f, b);
              }
              ia.x1 = fa;
              ia.y1 = x;
              ia.x2 = y;
              ia.y2 = f;
            }
          };
          ja.prototype.aG = function () {
            if (this.He.length) return this.He[0];
            var ia = new na.a(),
              fa = new na.a(),
              y = new ma.a();
            y.Od();
            var x = this.Qh(),
              f = new ma.a();
            f.Od();
            for (var e = this.Qh(); !e.Zc(y); e = e.Th()) f = e;
            y = Array(8);
            e = Array(8);
            x.yf(0, y);
            ia.x = (y[0] + y[2] + y[4] + y[6]) / 4;
            ia.y = (y[1] + y[3] + y[5] + y[7]) / 4;
            f.yf(f.il() - 1, e);
            fa.x = (e[0] + e[2] + e[4] + e[6]) / 4;
            fa.y = (e[1] + e[3] + e[5] + e[7]) / 4;
            0.01 > Math.abs(ia.x - fa.x) &&
              0.01 > Math.abs(ia.y - fa.y) &&
              this.He.push(0);
            ia = Math.atan2(fa.y - ia.y, fa.x - ia.x);
            ia *= 180 / 3.1415926;
            0 > ia && (ia += 360);
            this.He.push(ia);
            return 0;
          };
          return ja;
        })();
        sa.a = wa;
      },
      555: function (wa, sa, h) {
        var pa = h(543),
          na = h(114),
          ma = h(99);
        wa = (function () {
          function ja() {
            this.Cm = this.oe = 0;
            this.Gb = this.Ka = this.Ic = null;
            this.od = 0;
          }
          ja.prototype.Od = function () {
            this.Cm = this.oe = -1;
            this.od = 0;
          };
          ja.prototype.Xh = function (ia, fa, y, x, f, e) {
            this.oe = fa;
            this.Cm = y;
            this.Ic = ia;
            this.Ka = x;
            this.Gb = f;
            this.od = e;
          };
          ja.prototype.Zc = function (ia) {
            return this.oe === ia.oe;
          };
          ja.prototype.il = function () {
            return parseInt(this.Ic[this.oe], 10);
          };
          ja.prototype.Ij = function () {
            return parseInt(this.Ic[this.oe + 2], 10);
          };
          ja.prototype.Wh = function () {
            return parseInt(this.Ic[this.oe + 1], 10);
          };
          ja.prototype.Kn = function () {
            return 0 < this.Ic[this.Cm];
          };
          ja.prototype.Gna = function () {
            return Math.abs(this.Ic[this.Cm]);
          };
          ja.prototype.Th = function () {
            var ia = this.Kn(),
              fa = ia ? 5 : 11;
            if (this.oe >= this.Cm + (ia ? 6 : 10) + (this.Gna() - 1) * fa)
              return (
                (fa = new ja()), fa.Xh(this.Ic, -1, -1, this.Ka, this.Gb, 0), fa
              );
            ia = new ja();
            ia.Xh(
              this.Ic,
              this.oe + fa,
              this.Cm,
              this.Ka,
              this.Gb,
              this.od + 1
            );
            return ia;
          };
          ja.prototype.Tma = function (ia) {
            var fa = this.il();
            return 0 > ia || ia >= fa
              ? -1
              : parseInt(this.Ic[this.oe + 1], 10) + ia;
          };
          ja.prototype.yf = function (ia, fa) {
            ia = this.Tma(ia);
            if (!(0 > ia)) {
              var y = new pa.a();
              y.Xh(this.Ic, this.Cm, this.Ka, this.Gb, 0);
              if (y.Kn()) {
                var x = new na.a();
                y.getBBox(x);
                y = x.y1 < x.y2 ? x.y1 : x.y2;
                x = x.y1 > x.y2 ? x.y1 : x.y2;
                ia *= 8;
                fa[0] = this.Gb[ia];
                fa[1] = y;
                fa[2] = this.Gb[ia + 2];
                fa[3] = fa[1];
                fa[4] = this.Gb[ia + 4];
                fa[5] = x;
                fa[6] = this.Gb[ia + 6];
                fa[7] = fa[5];
              } else for (ia *= 8, y = 0; 8 > y; ++y) fa[y] = this.Gb[ia + y];
            }
          };
          ja.prototype.Ne = function (ia) {
            var fa = new pa.a();
            fa.Xh(this.Ic, this.Cm, this.Ka, this.Gb, 0);
            if (fa.Kn()) {
              var y = this.Ic[this.oe + 3],
                x = this.Ic[this.oe + 4];
              if (y > x) {
                var f = y;
                y = x;
                x = f;
              }
              f = new na.a();
              fa.getBBox(f);
              fa = f.y1 < f.y2 ? f.y1 : f.y2;
              f = f.y1 > f.y2 ? f.y1 : f.y2;
              ia[0] = y;
              ia[1] = fa;
              ia[2] = x;
              ia[3] = fa;
              ia[4] = x;
              ia[5] = f;
              ia[6] = y;
              ia[7] = f;
            } else
              for (y = this.oe + 3, x = 0; 8 > x; ++x) ia[x] = this.Ic[y + x];
          };
          ja.prototype.getBBox = function (ia) {
            var fa = new pa.a();
            fa.Xh(this.Ic, this.Cm, this.Ka, this.Gb, 0);
            if (fa.Kn()) {
              var y = this.Ic[this.oe + 3],
                x = this.Ic[this.oe + 4];
              if (y > x) {
                var f = y;
                y = x;
                x = f;
              }
              f = new na.a();
              fa.getBBox(f);
              fa = f.y1 < f.y2 ? f.y1 : f.y2;
              f = f.y1 > f.y2 ? f.y1 : f.y2;
              ia[0] = y;
              ia[1] = fa;
              ia[2] = x;
              ia[3] = f;
            } else {
              y = 1.79769e308;
              x = ma.a.MIN;
              fa = 1.79769e308;
              f = ma.a.MIN;
              for (var e = this.oe + 3, a = 0; 4 > a; ++a) {
                var b = this.Ic[e + 2 * a],
                  n = this.Ic[e + 2 * a + 1];
                y = Math.min(y, b);
                x = Math.max(x, b);
                fa = Math.min(fa, n);
                f = Math.max(f, n);
              }
              ia[0] = y;
              ia[1] = fa;
              ia[2] = x;
              ia[3] = f;
            }
          };
          return ja;
        })();
        sa.a = wa;
      },
    },
  ]);
}).call(this || window);
