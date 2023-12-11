/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [4],
    {
      531: function (wa, sa, h) {
        h.r(sa);
        var pa = h(0),
          na = h(553),
          ma = h(554),
          ja;
        (function (ia) {
          ia[(ia.EXTERNAL_XFDF_NOT_REQUESTED = 0)] =
            'EXTERNAL_XFDF_NOT_REQUESTED';
          ia[(ia.EXTERNAL_XFDF_NOT_AVAILABLE = 1)] =
            'EXTERNAL_XFDF_NOT_AVAILABLE';
          ia[(ia.EXTERNAL_XFDF_AVAILABLE = 2)] = 'EXTERNAL_XFDF_AVAILABLE';
        })(ja || (ja = {}));
        wa = (function () {
          function ia(fa) {
            this.aa = fa;
            this.state = ja.EXTERNAL_XFDF_NOT_REQUESTED;
          }
          ia.prototype.yoa = function () {
            var fa = this;
            return function (y, x, f) {
              return Object(pa.b)(fa, void 0, void 0, function () {
                var e,
                  a,
                  b,
                  n,
                  r,
                  z,
                  w,
                  ba = this,
                  ha;
                return Object(pa.d)(this, function (aa) {
                  switch (aa.label) {
                    case 0:
                      if (this.state !== ja.EXTERNAL_XFDF_NOT_REQUESTED)
                        return [3, 2];
                      e = this.aa.getDocument().bv();
                      return [4, this.Cma(e)];
                    case 1:
                      (a = aa.ba()),
                        (b = this.Kga(a)),
                        (this.vN =
                          null !==
                            (ha =
                              null === b || void 0 === b
                                ? void 0
                                : b.parse()) && void 0 !== ha
                            ? ha
                            : null),
                        (this.state =
                          null === this.vN
                            ? ja.EXTERNAL_XFDF_NOT_AVAILABLE
                            : ja.EXTERNAL_XFDF_AVAILABLE),
                        (aa.label = 2);
                    case 2:
                      if (this.state === ja.EXTERNAL_XFDF_NOT_AVAILABLE)
                        return f(y), [2];
                      n = new DOMParser();
                      r = n.parseFromString(y, 'text/xml');
                      x.forEach(function (ca) {
                        ba.merge(r, ba.vN, ca - 1);
                      });
                      z = new XMLSerializer();
                      w = z.serializeToString(r);
                      f(w);
                      return [2];
                  }
                });
              });
            };
          };
          ia.prototype.VR = function (fa) {
            this.Cma = fa;
          };
          ia.prototype.$e = function () {
            this.vN = void 0;
            this.state = ja.EXTERNAL_XFDF_NOT_REQUESTED;
          };
          ia.prototype.Kga = function (fa) {
            return fa
              ? Array.isArray(fa)
                ? new na.a(fa)
                : 'string' !== typeof fa
                  ? null
                  : new DOMParser()
                        .parseFromString(fa, 'text/xml')
                        .querySelector('xfdf > add')
                    ? new na.a(fa)
                    : new ma.a(fa)
              : null;
          };
          ia.prototype.merge = function (fa, y, x) {
            var f = this;
            0 === x && (this.qra(fa, y.lr), this.sra(fa, y.aN));
            var e = y.ea[x];
            e &&
              (this.tra(fa, e.ep),
              this.vra(fa, e.O8, y.bz),
              this.ura(fa, e.page, x),
              this.rra(fa, e.mZ));
            e = this.aa.wb();
            if (x === e - 1) {
              var a = y.bz;
              Object.keys(a).forEach(function (b) {
                a[b].XO || f.d3(fa, b, a[b]);
              });
            }
          };
          ia.prototype.qra = function (fa, y) {
            null !== y &&
              ((fa = this.ly(fa)), this.Ms(fa, 'calculation-order', y));
          };
          ia.prototype.sra = function (fa, y) {
            null !== y &&
              ((fa = this.ly(fa)), this.Ms(fa, 'document-actions', y));
          };
          ia.prototype.tra = function (fa, y) {
            var x = this,
              f = this.ky(fa.querySelector('xfdf'), 'annots');
            Object.keys(y).forEach(function (e) {
              x.Ms(f, '[name="' + e + '"]', y[e]);
            });
          };
          ia.prototype.vra = function (fa, y, x) {
            var f = this;
            if (0 !== y.length) {
              var e = this.ly(fa);
              y.forEach(function (a) {
                var b = a.getAttribute('field'),
                  n = x[b];
                n && (f.d3(fa, b, n), f.Ms(e, 'null', a));
              });
            }
          };
          ia.prototype.d3 = function (fa, y, x) {
            var f = this.ly(fa),
              e = f.querySelector('ffield[name="' + y + '"]');
            null !== x.EF &&
              null === e &&
              this.Ms(f, 'ffield[name="' + y + '"]', x.EF);
            fa = this.ky(fa.querySelector('xfdf'), 'xfdf > fields', 'fields');
            y = y.split('.');
            this.YQ(fa, y, 0, x.value);
            x.XO = !0;
          };
          ia.prototype.ura = function (fa, y, x) {
            null !== y &&
              ((fa = this.ly(fa)),
              (fa = this.ky(fa, 'pages')),
              this.Ms(fa, '[number="' + (x + 1) + '"]', y));
          };
          ia.prototype.rra = function (fa, y) {
            Object.keys(y).forEach(function (x) {
              (x = fa.querySelector('annots [name="' + x + '"]')) &&
                x.parentElement.removeChild(x);
            });
          };
          ia.prototype.YQ = function (fa, y, x, f) {
            if (x === y.length)
              (y = document.createElementNS('', 'value')),
                (y.textContent = f),
                this.Ms(fa, 'value', y);
            else {
              var e = y[x];
              this.ky(fa, '[name="' + e + '"]', 'field').setAttribute(
                'name',
                e
              );
              fa = fa.querySelectorAll('[name="' + e + '"]');
              1 === fa.length
                ? this.YQ(fa[0], y, x + 1, f)
                : ((e = this.Pka(fa)),
                  this.YQ(
                    x === y.length - 1 ? e : this.Hza(fa, e),
                    y,
                    x + 1,
                    f
                  ));
            }
          };
          ia.prototype.Pka = function (fa) {
            for (var y = null, x = 0; x < fa.length; x++) {
              var f = fa[x];
              if (
                0 === f.childElementCount ||
                (1 === f.childElementCount && 'value' === f.children[0].tagName)
              ) {
                y = f;
                break;
              }
            }
            return y;
          };
          ia.prototype.Hza = function (fa, y) {
            for (var x = 0; x < fa.length; x++) if (fa[x] !== y) return fa[x];
            return null;
          };
          ia.prototype.Ms = function (fa, y, x) {
            y = fa.querySelector(y);
            null !== y && fa.removeChild(y);
            fa.appendChild(x);
          };
          ia.prototype.ly = function (fa) {
            var y = fa.querySelector('pdf-info');
            if (null !== y) return y;
            y = this.ky(fa.querySelector('xfdf'), 'pdf-info');
            y.setAttribute('xmlns', 'http://www.pdftron.com/pdfinfo');
            y.setAttribute('version', '2');
            y.setAttribute('import-version', '4');
            return y;
          };
          ia.prototype.ky = function (fa, y, x) {
            var f = fa.querySelector(y);
            if (null !== f) return f;
            f = document.createElementNS('', x || y);
            fa.appendChild(f);
            return f;
          };
          return ia;
        })();
        sa['default'] = wa;
      },
      542: function (wa, sa) {
        wa = (function () {
          function h() {}
          h.prototype.eE = function (pa) {
            var na = { lr: null, aN: null, bz: {}, ea: {} };
            pa = new DOMParser().parseFromString(pa, 'text/xml');
            na.lr = pa.querySelector('pdf-info calculation-order');
            na.aN = pa.querySelector('pdf-info document-actions');
            na.bz = this.Gsa(pa);
            na.ea = this.Tsa(pa);
            return na;
          };
          h.prototype.Gsa = function (pa) {
            var na = pa.querySelector('fields');
            pa = pa.querySelectorAll('pdf-info > ffield');
            if (null === na && null === pa) return {};
            var ma = {};
            this.Fda(ma, na);
            this.Dda(ma, pa);
            return ma;
          };
          h.prototype.Fda = function (pa, na) {
            if (null !== na && na.children) {
              for (var ma = [], ja = 0; ja < na.children.length; ja++) {
                var ia = na.children[ja];
                ma.push({ name: ia.getAttribute('name'), element: ia });
              }
              for (; 0 !== ma.length; )
                for (
                  na = ma.shift(), ja = 0;
                  ja < na.element.children.length;
                  ja++
                )
                  (ia = na.element.children[ja]),
                    'value' === ia.tagName
                      ? (pa[na.name] = {
                          value: ia.textContent,
                          EF: null,
                          XO: !1,
                        })
                      : ia.children &&
                        ma.push({
                          name: na.name + '.' + ia.getAttribute('name'),
                          element: ia,
                        });
            }
          };
          h.prototype.Dda = function (pa, na) {
            na.forEach(function (ma) {
              var ja = ma.getAttribute('name');
              pa[ja]
                ? (pa[ja].EF = ma)
                : (pa[ja] = { value: null, EF: ma, XO: !1 });
            });
          };
          h.prototype.Tsa = function (pa) {
            var na = this,
              ma = {};
            pa.querySelectorAll('pdf-info widget').forEach(function (ja) {
              var ia = parseInt(ja.getAttribute('page'), 10) - 1;
              na.SG(ma, ia);
              ma[ia].O8.push(ja);
            });
            pa.querySelectorAll('pdf-info page').forEach(function (ja) {
              var ia = parseInt(ja.getAttribute('number'), 10) - 1;
              na.SG(ma, ia);
              ma[ia].page = ja;
            });
            this.j0(pa).forEach(function (ja) {
              var ia = parseInt(ja.getAttribute('page'), 10),
                fa = ja.getAttribute('name');
              na.SG(ma, ia);
              ma[ia].ep[fa] = ja;
            });
            this.W_(pa).forEach(function (ja) {
              var ia = parseInt(ja.getAttribute('page'), 10);
              ja = ja.textContent;
              na.SG(ma, ia);
              ma[ia].mZ[ja] = !0;
            });
            return ma;
          };
          h.prototype.SG = function (pa, na) {
            pa[na] || (pa[na] = { ep: {}, mZ: {}, O8: [], page: null });
          };
          return h;
        })();
        sa.a = wa;
      },
      553: function (wa, sa, h) {
        var pa = h(0),
          na = h(1);
        h.n(na);
        wa = (function (ma) {
          function ja(ia) {
            var fa = ma.call(this) || this;
            fa.yka = Array.isArray(ia) ? ia : [ia];
            return fa;
          }
          Object(pa.c)(ja, ma);
          ja.prototype.parse = function () {
            var ia = this,
              fa = { lr: null, aN: null, bz: {}, ea: {} };
            this.yka.forEach(function (y) {
              fa = Object(na.merge)(fa, ia.eE(y));
            });
            return fa;
          };
          ja.prototype.j0 = function (ia) {
            var fa = [];
            ia.querySelectorAll('add > *').forEach(function (y) {
              fa.push(y);
            });
            ia.querySelectorAll('modify > *').forEach(function (y) {
              fa.push(y);
            });
            return fa;
          };
          ja.prototype.W_ = function (ia) {
            return ia.querySelectorAll('delete > *');
          };
          return ja;
        })(h(542).a);
        sa.a = wa;
      },
      554: function (wa, sa, h) {
        var pa = h(0);
        wa = (function (na) {
          function ma(ja) {
            var ia = na.call(this) || this;
            ia.zka = ja;
            return ia;
          }
          Object(pa.c)(ma, na);
          ma.prototype.parse = function () {
            return this.eE(this.zka);
          };
          ma.prototype.j0 = function (ja) {
            return ja.querySelectorAll('annots > *');
          };
          ma.prototype.W_ = function () {
            return [];
          };
          return ma;
        })(h(542).a);
        sa.a = wa;
      },
    },
  ]);
}).call(this || window);
