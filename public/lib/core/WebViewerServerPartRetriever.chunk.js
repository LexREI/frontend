/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [13],
    {
      526: function (wa, sa, h) {
        function pa() {
          return !1;
        }
        function na(w, ba, ha) {
          if (!(ba in z)) return !0;
          ba = z[ba];
          for (var aa = 0; aa < ba.length; aa++) {
            var ca = w;
            var ea = ba[aa];
            var oa = ha;
            if (ea.name in ca) {
              var la = '',
                ka = !1;
              ca = ca[ea.name];
              switch (ea.type) {
                case 's':
                  la = 'String';
                  ka = Object(ia.isString)(ca);
                  break;
                case 'a':
                  la = 'Array';
                  ka = Object(ia.isArray)(ca);
                  break;
                case 'n':
                  la = 'Number';
                  ka = Object(ia.isNumber)(ca) && Object(ia.isFinite)(ca);
                  break;
                case 'o':
                  (la = 'Object'),
                    (ka = Object(ia.isObject)(ca) && !Object(ia.isArray)(ca));
              }
              ka ||
                oa.reject(
                  'Expected response field "' + ea.name + '" to have type ' + la
                );
              ea = ka;
            } else
              oa.reject('Response missing field "' + ea.name + '"'), (ea = !1);
            if (!ea) return !1;
          }
          return !0;
        }
        function ma(w) {
          for (
            var ba = 0,
              ha = [
                'locale',
                'excelMaxAllowedCellCount',
                'applyPageBreaksToSheet',
                'excelDefaultCellBorderWidth',
                'displayChangeTracking',
              ];
            ba < ha.length;
            ba++
          ) {
            var aa = ha[ba],
              ca = aa;
            aa = aa.charAt(0).toUpperCase() + aa.slice(1);
            w[ca] &&
              (Object.defineProperty(
                w,
                aa,
                Object.getOwnPropertyDescriptor(w, ca)
              ),
              delete w[ca]);
          }
          return w;
        }
        h.r(sa);
        var ja = h(0),
          ia = h(1);
        h.n(ia);
        var fa = h(3);
        wa = h(49);
        var y = h(28),
          x = h(544),
          f = h(113),
          e = h(436),
          a = h(47),
          b = h(193),
          n = (function () {
            function w() {
              this.request = this.result = null;
              this.state = 0;
              var ba = this;
              ba.promise = new Promise(function (ha, aa) {
                ba.resolve = function () {
                  if (0 === ba.state || 4 === ba.state)
                    (ba.state = 1),
                      (ba.result = arguments[0]),
                      ha.apply(null, arguments);
                };
                ba.reject = function () {
                  if (0 === ba.state || 4 === ba.state)
                    (ba.state = 2), aa.apply(null, arguments);
                };
              });
            }
            w.prototype.Kv = function () {
              return 1 === (this.state & 1);
            };
            w.prototype.pqa = function () {
              return 2 === (this.state & 2);
            };
            w.prototype.Rj = function () {
              return !this.pqa() && !this.Kv();
            };
            w.prototype.Opa = function () {
              return 4 === (this.state & 4);
            };
            w.prototype.WR = function () {
              this.state |= 4;
            };
            return w;
          })(),
          r = (function () {
            function w() {
              this.tv = {};
              this.Zb = [];
            }
            w.prototype.pop = function () {
              var ba = this.Zb.pop();
              this.tv[ba.key] = void 0;
              return ba;
            };
            w.prototype.push = function (ba, ha) {
              ha = { key: ba, data: ha };
              this.Zb.push(ha);
              this.tv[ba] = ha.data;
            };
            w.prototype.contains = function (ba) {
              return !!this.tv[ba];
            };
            w.prototype.get = function (ba) {
              return this.tv[ba];
            };
            w.prototype.set = function (ba, ha) {
              var aa = this;
              this.tv[ba] = ha;
              this.Zb.forEach(function (ca, ea) {
                ca.key === ba && (aa.Zb[ea] = ca);
              });
            };
            w.prototype.remove = function (ba) {
              var ha = this;
              this.tv[ba] = void 0;
              this.Zb.forEach(function (aa, ca) {
                aa.key === ba && ha.Zb.splice(ca, 1);
              });
            };
            w.prototype.length = function () {
              return this.Zb.length;
            };
            return w;
          })(),
          z = {
            pages: [{ name: 'pages', type: 'a' }],
            pdf: [{ name: 'url', type: 's' }],
            docmod: [
              { name: 'url', type: 's' },
              { name: 'rID', type: 's' },
            ],
            health: [],
            tiles: [
              { name: 'z', type: 'n' },
              { name: 'rID', type: 'n' },
              { name: 'tiles', type: 'a' },
              { name: 'size', type: 'n' },
            ],
            cAnnots: [{ name: 'annots', type: 'a' }],
            annots: [
              { name: 'url', type: 's' },
              { name: 'name', type: 's' },
            ],
            image: [
              { name: 'url', type: 's' },
              { name: 'name', type: 's' },
              { name: 'p', type: 'n' },
            ],
            text: [
              { name: 'url', type: 's' },
              { name: 'name', type: 's' },
              { name: 'p', type: 'n' },
            ],
            ApString2Xod: [
              { name: 'url', type: 's' },
              { name: 'rID', type: 's' },
            ],
          };
        h = (function () {
          function w(ba, ha, aa) {
            var ca = this;
            this.ES = this.vZ = !1;
            this.ei =
              this.BJ =
              this.Zw =
              this.hf =
              this.ty =
              this.bq =
              this.sy =
              this.yo =
                null;
            this.Vn = new n();
            this.vr = new n();
            this.ZE = !1;
            this.qg = this.mf = this.nf = this.fg = null;
            this.Mg = [];
            this.KF = [];
            this.cache = {};
            this.timeStamp = 0;
            this.Zh = [];
            this.$j = [];
            this.zN = null;
            this.hZ = !1;
            this.A6 = this.id = null;
            this.WP = this.p1 = pa;
            this.Yi = 0;
            this.UO = !1;
            this.u3 = 1;
            this.Xj = {};
            this.gu = 0;
            this.jw = new r();
            ha.endsWith('/') || (ha += '/');
            aa = aa || {};
            this.vZ = aa.disableWebsockets || !1;
            this.ES = aa.singleServerMode || !1;
            null != aa.customQueryParameters &&
              Object(a.b)('wvsQueryParameters', aa.customQueryParameters);
            ha.endsWith('blackbox/') || (ha += 'blackbox/');
            this.yo = aa.uploadData || null;
            this.Zw = aa.uriData || null;
            this.sy = aa.cacheKey || null;
            if ((this.bq = aa.officeOptions || null)) this.bq = ma(this.bq);
            this.hf = aa.rasterizerOptions || null;
            this.ty = aa.cadOptions || null;
            this.Kf = ha;
            this.$M = ba;
            this.nq(!0);
            this.Bu = new x.a(ha, null, this.Ii()).lla(
              !this.vZ,
              function (ea) {
                ca.hsa(ea);
              },
              function () {
                return null;
              },
              function () {
                ca.ZE = !1;
              },
              function () {
                ca.Hva();
              }
            );
          }
          w.prototype.Aha = function () {
            var ba = this;
            return new Promise(function (ha, aa) {
              var ca = new XMLHttpRequest();
              ca.open('GET', ba.Kf + 'ck');
              ca.withCredentials = ba.Ii();
              ca.onreadystatechange = function () {
                ca.readyState === XMLHttpRequest.DONE &&
                  (200 === ca.status ? ha() : aa());
              };
              ca.send();
            });
          };
          w.prototype.Exa = function (ba) {
            this.p1 = ba || pa;
            this.WP = pa;
          };
          w.prototype.bga = function () {
            this.Z5();
            return this.Bu.Hr(!0);
          };
          w.prototype.Z5 = function () {
            Object(ja.b)(this, void 0, void 0, function () {
              return Object(ja.d)(this, function (ba) {
                switch (ba.label) {
                  case 0:
                    return (
                      (this.vr = new n()),
                      (this.Vn = new n()),
                      (this.ZE = !1),
                      (this.id = null),
                      (this.hZ = !1),
                      [4, this.Aha()]
                    );
                  case 1:
                    return ba.ba(), [2];
                }
              });
            });
          };
          w.prototype.Hva = function () {
            this.p1();
            this.Z5();
            this.fg &&
              (this.fg.Rj()
                ? this.ji(this.fg.request)
                : this.fg.Kv() &&
                  this.WP(this.fg.result.url, 'pdf') &&
                  ((this.fg = null), this.X5()));
            this.qg && this.qg.Rj() && this.ji(this.qg.request);
            this.nf && this.nf.Rj()
              ? this.ji(this.nf.request)
              : this.mf && this.mf.Rj() && this.Y0();
            var ba;
            for (ba = 0; ba < this.Zh.length; ba++)
              this.Zh[ba] &&
                (this.Zh[ba].Rj()
                  ? this.ji(this.Zh[ba].request)
                  : this.Zh[ba].Kv() &&
                    this.WP(this.Zh[ba].result.url, 'image') &&
                    ((this.Zh[ba] = null), this.uI(Object(ia.uniqueId)(), ba)));
            for (ba = 0; ba < this.$j.length; ba++)
              this.$j[ba] &&
                this.$j[ba].Rj() &&
                !this.$j[ba].Opa() &&
                this.ji(this.$j[ba].request);
            for (ba = 0; ba < this.Mg.length; ba++)
              this.Mg[ba] && this.Mg[ba].Rj() && this.ji(this.Mg[ba].request);
          };
          w.prototype.opa = function () {
            return this.ZE
              ? Promise.resolve()
              : ((this.ZE = !0), (this.timeStamp = Date.now()), this.Bu.TG());
          };
          w.prototype.zAa = function () {
            var ba = this,
              ha,
              aa,
              ca,
              ea,
              oa;
            return new Promise(function (la, ka) {
              if (ba.yo)
                (ha = new FormData()),
                  ha.append('file', ba.yo.fileHandle, ba.yo.fileHandle.name),
                  ba.bq && ha.append('officeOptions', JSON.stringify(ba.bq)),
                  ba.hf &&
                    ha.append('rasterizerOptions', JSON.stringify(ba.hf)),
                  ba.ty && ha.append('cadOptions', ba.ty.getJsonString()),
                  ba.sy && ha.append('cacheKey', ba.sy),
                  (aa = ba.yo.loadCallback),
                  (ea = 'upload'),
                  (ca = ba.yo.extension);
              else if (ba.Zw)
                (ha = { uri: ba.Zw.uri, PEa: ba.Zw.shareId }),
                  (ha = Object.keys(ha)
                    .map(function (ta) {
                      return (
                        ta + '=' + (ha[ta] ? encodeURIComponent(ha[ta]) : '')
                      );
                    })
                    .join('&')),
                  (oa = 'application/x-www-form-urlencoded; charset=UTF-8'),
                  (aa = ba.Zw.loadCallback),
                  (ea = 'url'),
                  (ca = ba.Zw.extension);
              else {
                la();
                return;
              }
              var ra = new XMLHttpRequest(),
                qa = Object(y.k)(ba.Kf, 'AuxUpload');
              qa = Object(b.a)(qa, { type: ea, ext: ca });
              ra.open('POST', qa);
              ra.withCredentials = ba.Ii();
              oa && ra.setRequestHeader('Content-Type', oa);
              ra.addEventListener('load', function () {
                if (ra.readyState === ra.DONE && 200 === ra.status) {
                  var ta = JSON.parse(ra.response);
                  ba.$M = ta.uri;
                  aa(ta);
                  la(ta);
                }
              });
              ra.addEventListener('error', function () {
                ka(ra.statusText + ' ' + JSON.stringify(ra));
              });
              ba.yo &&
                null != ba.yo.onProgress &&
                (ra.upload.onprogress = function (ta) {
                  ba.yo.onProgress(ta);
                });
              ra.send(ha);
            });
          };
          w.prototype.uva = function (ba) {
            this.password = ba || null;
            this.Vn.Kv() || ((this.Vn = new n()), this.ji({ t: 'pages' }));
            return this.Vn.promise;
          };
          w.prototype.tB = function (ba) {
            this.zN = ba || null;
            this.Vn.Kv() || this.ji({ t: 'pages' });
            return this.Vn.promise;
          };
          w.prototype.Fy = function (ba) {
            ba = Object.assign(ba, { uri: encodeURIComponent(this.$M) });
            this.zN && (ba.ext = this.zN);
            this.ei && (ba.c = this.ei);
            this.password && (ba.pswd = this.password);
            this.sy && (ba.cacheKey = this.sy);
            this.bq && (ba.officeOptions = this.bq);
            this.hf && (ba.rastOptions = this.hf);
            this.ty && (ba.cadOptions = this.ty.mImpl);
            return ba;
          };
          w.prototype.kwa = function () {
            0 < this.jw.length() &&
              10 >= this.gu &&
              this.lwa(this.jw.pop().data);
          };
          w.prototype.ofa = function (ba) {
            0 < this.jw.length() && this.jw.contains(ba) && this.jw.remove(ba);
          };
          w.prototype.ji = function (ba) {
            ba = this.Fy(ba);
            this.Bu.send(ba);
          };
          w.prototype.v6 = function (ba, ha) {
            10 < this.gu
              ? this.jw.push(ba, ha)
              : (this.gu++, (ba = this.Fy(ha)), this.Bu.send(ba));
          };
          w.prototype.lwa = function (ba) {
            this.gu++;
            ba = this.Fy(ba);
            this.Bu.send(ba);
          };
          w.prototype.Ym = function (ba) {
            return ba;
          };
          w.prototype.o1 = function (ba) {
            this.ES && ba
              ? Object(fa.j)(
                  'Server failed health check. Single server mode ignoring check.'
                )
              : !this.$Ca && ba && 3 >= this.Yi
                ? ((this.UO = !0), this.Bu.Hr())
                : 3 < this.Yi && (this.ES = !0);
          };
          w.prototype.hsa = function (ba) {
            var ha = this,
              aa = ba.data,
              ca = ba.err,
              ea = ba.t;
            switch (ea) {
              case 'upload':
                ca ? this.AAa.reject(ca) : this.AAa.resolve('Success');
                break;
              case 'pages':
                ca
                  ? this.Vn.reject(ca)
                  : na(aa, ea, this.Vn) && this.Vn.resolve(aa);
                break;
              case 'config':
                if (ca) this.vr.reject(ca);
                else if (na(aa, ea, this.vr)) {
                  this.o1(aa.unhealthy);
                  aa.id && (this.id = aa.id);
                  if (aa.auth) {
                    var oa = Object(a.a)('wvsQueryParameters');
                    oa.auth = aa.auth;
                    Object(a.b)('wvsQueryParameters', oa);
                  }
                  aa.serverVersion &&
                    ((this.BJ = aa.serverVersion),
                    Object(fa.h)(
                      '[WebViewer Server] server version: ' + this.BJ
                    ));
                  aa.serverID
                    ? ((this.Yi =
                        aa.serverID === this.A6 && this.UO ? this.Yi + 1 : 0),
                      (this.A6 = aa.serverID))
                    : (this.Yi = 0);
                  this.UO = !1;
                  this.vr.resolve(aa);
                }
                break;
              case 'health':
                ca
                  ? this.vr.reject(ca)
                  : na(aa, ea, this.vr) && this.o1(aa.unhealthy);
                break;
              case 'pdf':
                aa.url = Object(b.a)(this.Kf + '../' + encodeURI(aa.url));
                ca
                  ? this.fg.reject(ca)
                  : na(aa, ea, this.fg) && this.fg.resolve(aa);
                break;
              case 'ApString2Xod':
                aa.url = Object(b.a)(this.Kf + '../data/' + encodeURI(aa.url));
                ca
                  ? this.Xj[aa.rID].reject(ca)
                  : na(aa, ea, this.Xj[aa.rID]) && this.Xj[aa.rID].resolve(aa);
                break;
              case 'docmod':
                aa.url = Object(b.a)(this.Kf + '../' + encodeURI(aa.url));
                ca
                  ? this.Xj[aa.rID].reject(ca)
                  : na(aa, ea, this.fg) && this.Xj[aa.rID].resolve(aa);
                break;
              case 'xod':
                if (ca)
                  this.nf && this.nf.Rj() && this.nf.reject(ca),
                    this.mf && this.mf.Rj() && this.mf.reject(ca);
                else if (aa.notFound)
                  aa.noCreate ||
                    (this.nf && this.nf.Rj() && this.nf.resolve(aa)),
                    this.mf && this.mf.Rj() && this.mf.resolve(aa);
                else {
                  aa.url &&
                    (aa.url = Object(b.a)(this.Kf + '../' + encodeURI(aa.url)));
                  if (!this.mf || this.mf.Kv())
                    (this.mf = new n()),
                      (this.mf.request = { t: 'xod', noCreate: !0 });
                  this.nf ||
                    ((this.nf = new n()), (this.nf.request = { t: 'xod' }));
                  this.mf.resolve(aa);
                  this.nf.resolve(aa);
                }
                break;
              case 'cAnnots':
                oa = this.qg;
                if (ca) oa.reject(ca);
                else if (na(aa, ea, oa)) {
                  oa.WR();
                  var la = [],
                    ka = aa.annots;
                  aa = function (Ja) {
                    var Ia = ka[Ja].s,
                      Da = ka[Ja].e,
                      Oa = ra.Kf + '../' + encodeURI(ka[Ja].xfdf),
                      Ca =
                        'true' === ka[Ja].hasAppearance
                          ? Object(b.a)(Oa + '.xodapp')
                          : null,
                      Ka = Object(ia.range)(Ia, Da + 1);
                    la[Ja] = {
                      range: Ka,
                      promise: new Promise(function (La, Ma) {
                        var Ta = new XMLHttpRequest();
                        Ta.open('GET', Object(b.a)(Oa));
                        Ta.responseType = 'text';
                        Ta.withCredentials = ha.Ii();
                        Ta.addEventListener('load', function () {
                          Ta.readyState === Ta.DONE &&
                            200 === Ta.status &&
                            La({ ot: Ta.response, Lm: Ca, range: Ka });
                        });
                        Ta.addEventListener('error', function () {
                          Ma(Ta.statusText + ' ' + JSON.stringify(Ta));
                        });
                        Ta.send();
                      }),
                    };
                  };
                  var ra = this;
                  for (ca = 0; ca < ka.length; ca++) aa(ca);
                  oa.resolve(la);
                }
                break;
              case 'annots':
                if (ca) this.qg.reject(ca);
                else if (na(aa, ea, this.qg)) {
                  this.qg.WR();
                  var qa = new XMLHttpRequest();
                  oa = this.Kf + '../' + encodeURI(aa.url);
                  var ta = aa.hasAppearance
                    ? Object(b.a)(oa + '.xodapp')
                    : null;
                  qa.open('GET', Object(b.a)(oa));
                  qa.responseType = 'text';
                  qa.withCredentials = this.Ii();
                  qa.addEventListener('load', function () {
                    qa.readyState === qa.DONE &&
                      200 === qa.status &&
                      ha.qg.resolve({ ot: qa.response, Lm: ta });
                  });
                  qa.addEventListener('error', function () {
                    ha.qg.reject(qa.statusText + ' ' + JSON.stringify(qa));
                  });
                  qa.send();
                }
                break;
              case 'image':
                this.gu--;
                var va = this.Zh[aa.p];
                ca
                  ? va.promise.reject(ca)
                  : na(aa, ea, va) &&
                    ((va.result = aa),
                    (va.result.url = Object(b.a)(
                      this.Kf + '../' + encodeURI(va.result.url)
                    )),
                    va.resolve(va.result));
                break;
              case 'tiles':
                this.gu--;
                va = aa.rID;
                oa = this.Mg[va];
                this.Mg[va] = null;
                this.KF.push(va);
                if (ca) oa.reject(ca);
                else if (na(aa, ea, oa)) {
                  for (ca = 0; ca < aa.tiles.length; ca++)
                    aa.tiles[ca] = Object(b.a)(
                      this.Kf + '../' + encodeURI(aa.tiles[ca])
                    );
                  oa.resolve(aa);
                }
                break;
              case 'text':
                va = this.$j[aa.p];
                if (ca) va.reject(ca);
                else if (na(aa, ea, va)) {
                  va.WR();
                  var xa = new XMLHttpRequest();
                  aa = Object(b.a)(this.Kf + '../' + encodeURI(aa.url));
                  xa.open('GET', aa);
                  xa.withCredentials = this.Ii();
                  xa.addEventListener('load', function () {
                    xa.readyState === xa.DONE &&
                      200 === xa.status &&
                      ((va.result = JSON.parse(xa.response)),
                      va.resolve(va.result));
                  });
                  xa.addEventListener('error', function (Ja) {
                    va.reject(xa.statusText + ' ' + JSON.stringify(Ja));
                  });
                  xa.send();
                }
                break;
              case 'progress':
                'loading' === aa.t &&
                  this.trigger(f.a.Events.DOCUMENT_LOADING_PROGRESS, [
                    aa.bytes,
                    aa.total,
                  ]);
            }
            this.kwa();
            !ea &&
              ba.echo &&
              ba &&
              'apstring2xod' === ba.echo.t &&
              (ba = ba.echo.reqID) &&
              (2 <= parseInt(this.BJ, 10)
                ? this.Xj[ba].reject('Message unhandled by server')
                : this.Xj[ba].reject());
          };
          w.prototype.bma = function () {
            return Object(ja.b)(this, void 0, void 0, function () {
              return Object(ja.d)(this, function (ba) {
                switch (ba.label) {
                  case 0:
                    return [4, this.opa()];
                  case 1:
                    return ba.ba(), [2, this.vr.promise];
                }
              });
            });
          };
          w.prototype.Jla = function (ba) {
            for (
              var ha = this,
                aa = new XMLHttpRequest(),
                ca = Object(b.a)(this.Kf + 'aul', { id: this.id }),
                ea = new FormData(),
                oa = {},
                la = 0;
              la < ba.body.length;
              la++
            ) {
              var ka = ba.body[la];
              oa[ka.id] = ka.OL.w + ';' + ka.OL.h;
              ea.append(ka.id, ka.OL.dataString);
            }
            ba = { t: 'apstring2xod', reqID: this.u3++, parts: oa };
            var ra = this.Fy(ba);
            ea.append('msg', JSON.stringify(ra));
            this.Xj[ra.reqID] = new n();
            aa.open('POST', ca);
            aa.withCredentials = this.Ii;
            ca = new Promise(function (qa, ta) {
              aa.onreadystatechange = function () {
                4 === aa.readyState &&
                  (200 === aa.status
                    ? qa()
                    : ta(
                        'An error occurred while sending down appearance strings to the server'
                      ));
              };
            });
            aa.send(ea);
            return ca.then(function () {
              return ha.Xj[ra.reqID].promise;
            });
          };
          w.prototype.ega = function () {
            var ba = this.BJ.split('-')[0].split('.'),
              ha = ['1', '5', '9'];
            if (3 !== ba.length) throw Error('Invalid WVS version length.');
            if (3 !== ha.length) throw Error('Invalid version length.');
            for (var aa = 0; aa < ba.length; ++aa) {
              if (ha.length === aa || ba[aa] > ha[aa]) return -1;
              if (ba[aa] !== ha[aa]) return 1;
            }
            return 0;
          };
          w.prototype.qr = function () {
            return 0 >= this.ega();
          };
          w.prototype.JN = function () {
            this.qg ||
              ((this.qg = new n()),
              this.qr()
                ? (this.qg.request = { t: 'cAnnots' })
                : (this.qg.request = { t: 'annots' }),
              this.ji(this.qg.request));
            return this.qg.promise;
          };
          w.prototype.uI = function (ba, ha) {
            this.Zh[ha] ||
              ((this.Zh[ha] = new n()),
              (this.Zh[ha].request = { t: 'image', p: ha }),
              this.v6(ba, this.Zh[ha].request));
            return this.Zh[ha].promise;
          };
          w.prototype.vva = function (ba) {
            this.$j[ba] ||
              ((this.$j[ba] = new n()),
              (this.$j[ba].request = { t: 'text', p: ba }),
              this.ji(this.$j[ba].request));
            return this.$j[ba].promise;
          };
          w.prototype.wva = function (ba, ha, aa, ca, ea) {
            var oa = this.Mg.length;
            this.KF.length && (oa = this.KF.pop());
            this.Mg[oa] = new n();
            this.Mg[oa].request = {
              t: 'tiles',
              p: ha,
              z: aa,
              r: ca,
              size: ea,
              rID: oa,
            };
            this.v6(ba, this.Mg[oa].request);
            return this.Mg[oa].promise;
          };
          w.prototype.X5 = function () {
            this.fg ||
              ((this.fg = new n()),
              (this.fg.request = { t: 'pdf' }),
              this.hZ
                ? this.fg.resolve({ url: this.$M })
                : this.ji(this.fg.request));
            return this.fg.promise;
          };
          w.prototype.l0 = function (ba) {
            var ha = this,
              aa = new XMLHttpRequest(),
              ca = Object(b.a)(this.Kf + 'aul', { id: this.id }),
              ea = new FormData(),
              oa = {};
            ba.annots && (oa.annots = 'xfdf');
            ba.watermark && (oa.watermark = 'png');
            ba.redactions && (oa.redactions = 'redact');
            oa = { t: 'docmod', reqID: this.u3++, parts: oa };
            ba.print && (oa.print = !0);
            var la = this.Fy(oa);
            ea.append('msg', JSON.stringify(la));
            return Promise.all(
              [ba.annots, ba.watermark, ba.redactions].map(function (ka) {
                return Promise.resolve(ka);
              })
            ).then(function (ka) {
              var ra = ka[0],
                qa = ka[1];
              ka = ka[2];
              ra && ea.append('annots', ra);
              qa && ea.append('watermark', qa);
              ka && ea.append('redactions', ka);
              ha.Xj[la.reqID] = new n();
              aa.open('POST', ca);
              aa.withCredentials = ha.Ii;
              ra = new Promise(function (ta, va) {
                aa.onreadystatechange = function () {
                  4 === aa.readyState &&
                    (200 === aa.status
                      ? ta()
                      : va(
                          'An error occurred while sending down annotation data to the server'
                        ));
                };
              });
              aa.send(ea);
              return ra.then(function () {
                return ha.Xj[la.reqID].promise;
              });
            });
          };
          w.prototype.Y0 = function () {
            this.mf ||
              ((this.mf = new n()),
              (this.mf.request = { t: 'xod', noCreate: !0 }),
              this.ji(this.mf.request));
            return this.mf.promise;
          };
          w.prototype.xva = function () {
            this.nf ||
              ((this.nf = new n()),
              (this.nf.request = { t: 'xod' }),
              this.ji(this.nf.request));
            return this.nf.promise;
          };
          w.prototype.kq = function () {
            return !0;
          };
          w.prototype.request = function () {};
          w.prototype.l5 = function () {};
          w.prototype.abort = function () {
            for (var ba = 0; ba < this.Mg.length; ba++)
              this.Mg[ba] &&
                (this.Mg[ba].resolve(null),
                (this.Mg[ba] = null),
                this.KF.push(ba));
            this.close();
          };
          w.prototype.HI = function (ba) {
            this.ei = this.ei || {};
            this.ei.headers = ba;
          };
          w.prototype.nq = function (ba) {
            this.ei = this.ei || {};
            this.ei.internal = this.ei.internal || {};
            this.ei.internal.withCredentials = ba;
          };
          w.prototype.Ii = function () {
            return this.ei && this.ei.internal
              ? this.ei.internal.withCredentials
              : null;
          };
          w.prototype.getFileData = function () {
            return Promise.reject();
          };
          return w;
        })();
        Object(wa.a)(h);
        Object(e.a)(h);
        Object(e.b)(h);
        sa['default'] = h;
      },
      544: function (wa, sa, h) {
        var pa = h(0),
          na = h(3),
          ma = h(28),
          ja = h(47),
          ia = h(193),
          fa = h(85),
          y = (function () {
            function f(e, a, b, n, r, z) {
              void 0 === b && (b = null);
              void 0 === n && (n = null);
              void 0 === r && (r = null);
              void 0 === z && (z = null);
              this.W2 = !1;
              this.Yi = 0;
              this.$X = this.VAa(e);
              this.url = a ? this.$X + '/' + a : this.$X + '/ws';
              this.OM = b;
              this.PA = n;
              this.Dy = r;
              this.tR = z;
            }
            f.prototype.VAa = function (e) {
              var a = e.indexOf('://'),
                b = 'ws://';
              0 > a ? (a = 0) : (5 === a && (b = 'wss://'), (a += 3));
              var n = e.lastIndexOf('/');
              0 > n && (n = e.length);
              return b + e.slice(a, n);
            };
            f.prototype.send = function (e) {
              this.zq.readyState === WebSocket.CLOSED ||
                this.W2 ||
                this.zq.send(JSON.stringify(e));
            };
            f.prototype.TG = function () {
              return Object(pa.b)(this, void 0, void 0, function () {
                var e,
                  a = this;
                return Object(pa.d)(this, function () {
                  e = Object(ja.a)('wvsQueryParameters');
                  e.bcid = Object(ma.l)(8);
                  Object(ja.b)('wvsQueryParameters', e);
                  return [
                    2,
                    new Promise(function (b, n) {
                      var r = Object(ia.a)(a.url);
                      a.zq = new WebSocket(r);
                      a.zq.onopen = function () {
                        a.PA && a.PA();
                        b();
                      };
                      a.zq.onerror = function (z) {
                        a.W2 = !0;
                        n(z);
                      };
                      a.zq.onclose = function (z) {
                        var w = z.code;
                        return Object(pa.b)(a, void 0, void 0, function () {
                          var ba = this;
                          return Object(pa.d)(this, function (ha) {
                            switch (ha.label) {
                              case 0:
                                return (
                                  this.Dy && this.Dy(),
                                  3e3 === w
                                    ? [3, 3]
                                    : 8 > this.Yi++
                                      ? [
                                          4,
                                          new Promise(function (aa) {
                                            return setTimeout(function () {
                                              return Object(pa.b)(
                                                ba,
                                                void 0,
                                                void 0,
                                                function () {
                                                  return Object(pa.d)(
                                                    this,
                                                    function (ca) {
                                                      switch (ca.label) {
                                                        case 0:
                                                          return (
                                                            this.tR(),
                                                            [4, this.TG()]
                                                          );
                                                        case 1:
                                                          return (
                                                            ca.ba(), aa(), [2]
                                                          );
                                                      }
                                                    }
                                                  );
                                                }
                                              );
                                            }, 3e3);
                                          }),
                                        ]
                                      : [3, 2]
                                );
                              case 1:
                                return ha.ba(), [3, 3];
                              case 2:
                                n(fa.a), (ha.label = 3);
                              case 3:
                                return [2];
                            }
                          });
                        });
                      };
                      a.zq.onmessage = function (z) {
                        z &&
                          z.data &&
                          ((z = JSON.parse(z.data)),
                          z.hb
                            ? a.send({ hb: !0 })
                            : z.end
                              ? close()
                              : a.OM(z));
                      };
                    }),
                  ];
                });
              });
            };
            f.prototype.Hr = function (e) {
              void 0 === e && (e = !1);
              this.Yi = 0;
              e ? this.zq.close(3e3) : this.zq.close();
              return Promise.resolve();
            };
            return f;
          })(),
          x = (function () {
            function f(e, a, b, n, r, z, w) {
              void 0 === n && (n = null);
              void 0 === r && (r = null);
              void 0 === z && (z = null);
              void 0 === w && (w = null);
              this.Yi = this.tI = this.id = 0;
              this.Yz = !1;
              this.request = null;
              e = this.Kta(e);
              this.url = a ? e + '/' + a + 'pf' : e + '/pf';
              this.tJ = b;
              this.OM = n;
              this.PA = r;
              this.Dy = z;
              this.tR = w;
            }
            f.prototype.Kta = function (e) {
              var a = e.lastIndexOf('/');
              0 > a && (a = e.length);
              return e.slice(0, a);
            };
            f.prototype.fha = function (e) {
              e = e.split('\n');
              for (
                e[e.length - 1] && e.pop();
                0 < e.length && 3 > e[e.length - 1].length;

              )
                ']' === e.pop() && (this.id = 0);
              0 < e.length && 3 > e[0].length && e.shift();
              for (var a = 0; a < e.length; ++a)
                e[a].endsWith(',') && (e[a] = e[a].substr(0, e[a].length - 1));
              return e;
            };
            f.prototype.h6 = function () {
              return Object(pa.b)(this, void 0, void 0, function () {
                var e = this;
                return Object(pa.d)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return 8 > this.Yi++
                        ? [
                            4,
                            new Promise(function (b) {
                              return setTimeout(function () {
                                e.tR();
                                e.TG();
                                b();
                              }, 3e3);
                            }),
                          ]
                        : [3, 2];
                    case 1:
                      a.ba(), (a.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            };
            f.prototype.Mta = function (e) {
              Object(pa.b)(this, void 0, void 0, function () {
                var a, b;
                return Object(pa.d)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (a = null), (b = 0), (n.label = 1);
                    case 1:
                      if (!(b < e.length)) return [3, 6];
                      a = JSON.parse(e[b]);
                      if (!a) return [3, 5];
                      if (!a.end) return [3, 2];
                      close();
                      return [3, 5];
                    case 2:
                      if (!a.id || Number(a.id) === this.id) return [3, 4];
                      Object(na.j)('Reconnecting, new server detected');
                      this.Hr();
                      return [4, this.h6()];
                    case 3:
                      return n.ba(), [3, 5];
                    case 4:
                      a.hb && Number(a.id) === this.id
                        ? this.send({ hb: !0 })
                        : this.Yz || this.OM(a),
                        (n.label = 5);
                    case 5:
                      return ++b, [3, 1];
                    case 6:
                      return [2];
                  }
                });
              });
            };
            f.prototype.esa = function (e) {
              Object(pa.b)(this, void 0, void 0, function () {
                var a, b, n;
                return Object(pa.d)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (!(3 <= e.readyState)) return [3, 2];
                      try {
                        a = e.responseText.length;
                      } catch (z) {
                        return Object(na.h)('caught exception'), [2];
                      }
                      if (0 < a)
                        try {
                          (b = this.fha(e.responseText)),
                            0 === this.id &&
                              0 < b.length &&
                              ((n = JSON.parse(b.shift())),
                              (this.id = n.id),
                              (this.Yi = 0)),
                            this.Mta(b);
                        } catch (z) {}
                      return this.Yz ? [3, 2] : [4, this.b_()];
                    case 1:
                      r.ba(), (r.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            };
            f.prototype.b_ = function () {
              return Object(pa.b)(this, void 0, void 0, function () {
                var e = this;
                return Object(pa.d)(this, function () {
                  return [
                    2,
                    new Promise(function (a, b) {
                      function n() {
                        return Object(pa.b)(e, void 0, void 0, function () {
                          return Object(pa.d)(this, function (z) {
                            switch (z.label) {
                              case 0:
                                b(), this.Hr(), (z.label = 1);
                              case 1:
                                return this.Yz && 8 > this.Yi
                                  ? [4, this.h6()]
                                  : [3, 3];
                              case 2:
                                return z.ba(), [3, 1];
                              case 3:
                                return [2];
                            }
                          });
                        });
                      }
                      e.request = new XMLHttpRequest();
                      e.request.withCredentials = e.tJ;
                      var r = Object(ia.a)(
                        e.url,
                        0 !== e.id
                          ? { id: String(e.id), uc: String(e.tI) }
                          : { uc: String(e.tI) }
                      );
                      e.tI++;
                      e.request.open('GET', r, !0);
                      e.request.setRequestHeader('Cache-Control', 'no-cache');
                      e.request.setRequestHeader(
                        'X-Requested-With',
                        'XMLHttpRequest'
                      );
                      e.request.onreadystatechange = function () {
                        e.esa(e.request);
                      };
                      e.request.addEventListener('error', n);
                      e.request.addEventListener('timeout', n);
                      e.request.addEventListener('load', function () {
                        e.PA && e.PA();
                        a();
                      });
                      e.request.send();
                    }),
                  ];
                });
              });
            };
            f.prototype.TG = function () {
              var e = Object(ja.a)('wvsQueryParameters');
              e.bcid = Object(ma.l)(8);
              Object(ja.b)('wvsQueryParameters', e);
              this.tI = this.id = 0;
              this.Yz = !1;
              return this.b_();
            };
            f.prototype.send = function (e) {
              var a = this,
                b = new XMLHttpRequest();
              b.withCredentials = this.tJ;
              var n = Object(ia.a)(this.url, { id: String(this.id) }),
                r = new FormData();
              r.append('data', JSON.stringify(e));
              b.addEventListener('error', function () {
                a.Hr();
              });
              b.open('POST', n);
              b.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
              b.send(r);
            };
            f.prototype.Hr = function () {
              this.id = 0;
              this.Yz = !0;
              this.Dy && this.Dy();
              this.request.abort();
              return Promise.resolve();
            };
            return f;
          })();
        wa = (function () {
          function f(e, a, b) {
            this.HY = e;
            this.target = a;
            this.tJ = b;
          }
          f.prototype.lla = function (e, a, b, n, r) {
            void 0 === e && (e = !0);
            void 0 === a && (a = null);
            void 0 === b && (b = null);
            void 0 === n && (n = null);
            void 0 === r && (r = null);
            return e
              ? new y(this.HY, this.target, a, b, n, r)
              : new x(this.HY, this.target, this.tJ, a, b, n, r);
          };
          return f;
        })();
        sa.a = wa;
      },
    },
  ]);
}).call(this || window);
