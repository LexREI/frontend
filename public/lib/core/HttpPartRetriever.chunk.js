/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [0],
    {
      515: function (wa, sa, h) {
        h.r(sa);
        h.d(sa, 'ByteRangeRequest', function () {
          return z;
        });
        var pa = h(0),
          na = h(1);
        h.n(na);
        var ma = h(3),
          ja = h(176);
        wa = h(113);
        var ia = h(291),
          fa = h(87),
          y = h(83),
          x = h(290),
          f = h(193);
        h = h(436);
        var e = [],
          a = [],
          b = window,
          n = (function () {
            return function () {
              this.bo = 1;
            };
          })(),
          r;
        (function (ba) {
          ba[(ba.UNSENT = 0)] = 'UNSENT';
          ba[(ba.DONE = 4)] = 'DONE';
        })(r || (r = {}));
        var z = (function () {
            function ba(ha, aa, ca, ea) {
              var oa = this;
              this.url = ha;
              this.range = aa;
              this.Yf = ca;
              this.withCredentials = ea;
              this.fba = r;
              this.request = new XMLHttpRequest();
              this.request.open('GET', this.url, !0);
              b.Uint8Array && (this.request.responseType = 'arraybuffer');
              ea && (this.request.withCredentials = ea);
              w.DISABLE_RANGE_HEADER ||
                (Object(na.isUndefined)(aa.stop)
                  ? this.request.setRequestHeader('Range', 'bytes=' + aa.start)
                  : this.request.setRequestHeader(
                      'Range',
                      ['bytes=', aa.start, '-', aa.stop - 1].join('')
                    ));
              ca &&
                Object.keys(ca).forEach(function (la) {
                  oa.request.setRequestHeader(la, ca[la]);
                });
              this.request.overrideMimeType
                ? this.request.overrideMimeType(
                    'text/plain; charset=x-user-defined'
                  )
                : this.request.setRequestHeader(
                    'Accept-Charset',
                    'x-user-defined'
                  );
              this.status = x.a.NOT_STARTED;
            }
            ba.prototype.start = function (ha) {
              var aa = this,
                ca = this.request;
              ca.onreadystatechange = function () {
                if (aa.aborted)
                  return (aa.status = x.a.ABORTED), ha({ code: x.a.ABORTED });
                if (this.readyState === aa.fba.DONE) {
                  aa.mG();
                  var ea = 0 === window.document.URL.indexOf('file:///');
                  200 === ca.status ||
                  206 === ca.status ||
                  (ea && 0 === ca.status)
                    ? ((ea = b.D0(this)), aa.MS(ea, ha))
                    : ((aa.status = x.a.ERROR),
                      ha({ code: aa.status, status: aa.status }));
                }
              };
              this.request.send(null);
              this.status = x.a.STARTED;
            };
            ba.prototype.MS = function (ha, aa) {
              this.status = x.a.SUCCESS;
              if (aa) return aa(!1, ha);
            };
            ba.prototype.abort = function () {
              this.mG();
              this.aborted = !0;
              this.request.abort();
            };
            ba.prototype.mG = function () {
              var ha = Object(f.c)(this.url, this.range, a);
              -1 !== ha && a.splice(ha, 1);
              if (0 < e.length) {
                ha = e.shift();
                var aa = new ba(
                  ha.url,
                  ha.range,
                  this.Yf,
                  this.withCredentials
                );
                ha.request = aa;
                a.push(ha);
                aa.start(Object(f.d)(ha));
              }
            };
            ba.prototype.extend = function (ha) {
              var aa = Object.assign({}, this, ha.prototype);
              aa.constructor = ha;
              return aa;
            };
            return ba;
          })(),
          w = (function (ba) {
            function ha(aa, ca, ea, oa, la) {
              ea = ba.call(this, aa, ea, oa) || this;
              ea.fk = {};
              ea.GE = ca;
              ea.url = aa;
              ea.DISABLE_RANGE_HEADER = !1;
              ea.kB = z;
              ea.eU = 3;
              ea.Yf = la || {};
              return ea;
            }
            Object(pa.c)(ha, ba);
            ha.prototype.Iy = function (aa, ca, ea) {
              var oa = -1 === aa.indexOf('?') ? '?' : '&';
              switch (ea) {
                case !1:
                case y.a.NEVER_CACHE:
                  aa = aa + oa + '_=' + Object(na.uniqueId)();
                  break;
                case !0:
                case y.a.CACHE:
                  aa =
                    aa +
                    oa +
                    '_=' +
                    ca.start +
                    ',' +
                    (Object(na.isUndefined)(ca.stop) ? '' : ca.stop);
              }
              return aa;
            };
            ha.prototype.VY = function (aa, ca, ea, oa) {
              void 0 === ea && (ea = {});
              return new this.kB(aa, ca, ea, oa);
            };
            ha.prototype.mka = function (aa, ca, ea, oa, la) {
              for (var ka = 0; ka < e.length; ka++)
                if (
                  Object(na.isEqual)(e[ka].range, ca) &&
                  Object(na.isEqual)(e[ka].url, aa)
                )
                  return e[ka].Kh.push(oa), e[ka].DH++, null;
              for (ka = 0; ka < a.length; ka++)
                if (
                  Object(na.isEqual)(a[ka].range, ca) &&
                  Object(na.isEqual)(a[ka].url, aa)
                )
                  return a[ka].Kh.push(oa), a[ka].DH++, null;
              ea = { url: aa, range: ca, GE: ea, Kh: [oa], DH: 1 };
              if (0 === e.length && a.length < this.eU)
                return (
                  a.push(ea),
                  (ea.request = this.VY(aa, ca, la, this.withCredentials)),
                  ea
                );
              e.push(ea);
              return null;
            };
            ha.prototype.Yp = function (aa, ca, ea) {
              var oa = this.Iy(aa, ca, this.GE);
              (aa = this.mka(oa, ca, this.GE, ea, this.Yf)) &&
                aa.request.start(Object(f.d)(aa));
              return function () {
                var la = Object(f.c)(oa, ca, a);
                if (-1 !== la) {
                  var ka = --a[la].DH;
                  0 === ka && a[la].request && a[la].request.abort();
                } else
                  (la = Object(f.c)(oa, ca, e)),
                    -1 !== la &&
                      ((ka = --e[la].DH), 0 === ka && e.splice(la, 1));
              };
            };
            ha.prototype.Z_ = function () {
              return { start: -ja.a };
            };
            ha.prototype.Foa = function () {
              var aa = -(ja.a + ja.e);
              return { start: aa - ja.d, end: aa };
            };
            ha.prototype.Qv = function (aa) {
              var ca = this;
              this.OE = !0;
              var ea = ja.a;
              this.Yp(this.url, this.Z_(), function (oa, la, ka) {
                function ra() {
                  var qa = ca.ce.X_();
                  ca.Yp(ca.url, qa, function (ta, va) {
                    if (ta)
                      return (
                        Object(ma.j)('Error loading central directory: ' + ta),
                        aa(ta)
                      );
                    va = Object(fa.a)(va);
                    if (va.length !== qa.stop - qa.start)
                      return aa(
                        'Invalid XOD file: Zip central directory data is wrong size! Should be ' +
                          (qa.stop - qa.start) +
                          ' but is ' +
                          va.length
                      );
                    ca.ce.c5(va);
                    ca.pM = !0;
                    ca.OE = !1;
                    return aa(!1);
                  });
                }
                if (oa)
                  return (
                    Object(ma.j)('Error loading end header: ' + oa),
                    aa(oa, la, ka)
                  );
                la = Object(fa.a)(la);
                if (la.length !== ea)
                  return aa(
                    'Invalid XOD file: Zip end header data is wrong size!'
                  );
                try {
                  ca.ce = new ia.a(la);
                } catch (qa) {
                  return aa(qa);
                }
                ca.ce.Cqa
                  ? ca.Yp(ca.url, ca.Foa(), function (qa, ta) {
                      if (qa)
                        return (
                          Object(ma.j)('Error loading zip64 header: ' + qa),
                          aa(qa)
                        );
                      ta = Object(fa.a)(ta);
                      ca.ce.bra(ta);
                      ra();
                    })
                  : ra();
              });
            };
            ha.prototype.w0 = function (aa) {
              aa(Object.keys(this.ce.yp));
            };
            ha.prototype.aR = function (aa, ca) {
              var ea = this;
              if (this.ce.KY(aa)) {
                var oa = this.ce.vz(aa);
                if (oa in this.fk) {
                  var la = this.fi[aa];
                  la.xu = this.fk[oa];
                  la.xu.bo++;
                  la.cancel = la.xu.cancel;
                } else {
                  var ka = this.ce.Jma(aa),
                    ra = this.Yp(this.url, ka, function (ta, va) {
                      ta
                        ? (Object(ma.j)(
                            'Error loading part "' + aa + '": ' + ta
                          ),
                          ea.Yp(ea.url, ka, function (xa, Ja) {
                            if (xa) return ca(xa, aa);
                            ea.g5(Ja, ka, oa, aa, ca);
                          }))
                        : ea.g5(va, ka, oa, aa, ca);
                    }),
                    qa = this.fi[aa];
                  qa &&
                    ((qa.J7 = !0),
                    (qa.cancel = function () {
                      qa.xu.bo--;
                      0 === qa.xu.bo && (ra(), delete ea.fk[oa]);
                    }),
                    (this.fk[oa] = new n(oa)),
                    (qa.xu = this.fk[oa]),
                    (qa.xu.cancel = qa.cancel));
                }
              } else
                delete this.fi[aa],
                  ca(Error('File not found: "' + aa + '"'), aa);
            };
            ha.prototype.g5 = function (aa, ca, ea, oa, la) {
              if (aa.length !== ca.stop - ca.start)
                la(Error('Part data is wrong size!'), oa);
              else {
                do {
                  if (!this.fk[ea]) return;
                  oa = this.fk[ea].bo;
                  for (var ka = ca.Ns.length, ra = 0; ra < ka; ++ra) {
                    var qa = ca.Ns[ra];
                    la(
                      !1,
                      qa.Js,
                      aa['string' === typeof aa ? 'substring' : 'subarray'](
                        qa.start,
                        qa.stop
                      ),
                      this.ce.Q1(qa.Js)
                    );
                    qa.Js in this.fi && delete this.fi[qa.Js];
                  }
                } while (oa !== this.fk[ea].bo);
                delete this.fk[ea];
              }
            };
            ha.DISABLE_RANGE_HEADER = !1;
            ha.eU = 3;
            return ha;
          })(wa.a);
        (function (ba) {
          function ha(aa, ca, ea) {
            var oa = ba.call(this) || this,
              la;
            for (la in aa) oa[la] = aa[la];
            oa.qEa = aa;
            oa.startOffset = ca;
            oa.endOffset = ea;
            oa.VY = function (ka, ra, qa, ta) {
              Object(na.isUndefined)(ra.stop)
                ? ((ra.start += oa.endOffset), (ra.stop = oa.endOffset))
                : ((ra.start += oa.startOffset), (ra.stop += oa.startOffset));
              ka = oa.Iy(oa.url, ra, oa.GE);
              return new aa.kB(ka, ra, qa, ta);
            };
            return oa;
          }
          Object(pa.c)(ha, ba);
          return ha;
        })(w);
        Object(h.a)(w);
        Object(h.b)(w);
        sa['default'] = w;
      },
    },
  ]);
}).call(this || window);
