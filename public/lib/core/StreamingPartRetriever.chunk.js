/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [11],
    {
      524: function (wa, sa, h) {
        h.r(sa);
        var pa = h(0),
          na = h(1);
        h.n(na);
        var ma = h(3),
          ja = h(176);
        wa = h(49);
        var ia = h(113),
          fa = h(291),
          y = h(83),
          x = h(290);
        h = h(436);
        var f = window,
          e = (function () {
            function n(r, z, w) {
              var ba = -1 === r.indexOf('?') ? '?' : '&';
              switch (z) {
                case y.a.NEVER_CACHE:
                  this.url = r + ba + '_=' + Object(na.uniqueId)();
                  break;
                default:
                  this.url = r;
              }
              this.Yf = w;
              this.request = new XMLHttpRequest();
              this.request.open('GET', this.url, !0);
              this.request.setRequestHeader(
                'X-Requested-With',
                'XMLHttpRequest'
              );
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
            n.prototype.start = function (r, z) {
              var w = this,
                ba = this,
                ha = this.request,
                aa;
              ba.tA = 0;
              r &&
                Object.keys(r).forEach(function (ca) {
                  w.request.setRequestHeader(ca, r[ca]);
                });
              z && (this.request.withCredentials = z);
              this.gI = setInterval(function () {
                var ca = 0 === window.document.URL.indexOf('file:///');
                ca = 200 === ha.status || (ca && 0 === ha.status);
                if (ha.readyState !== x.b.DONE || ca) {
                  try {
                    ha.responseText;
                  } catch (ea) {
                    return;
                  }
                  ba.tA < ha.responseText.length &&
                    (aa = ba.Sta()) &&
                    ba.trigger(n.Events.DATA, [aa]);
                  0 === ha.readyState &&
                    (clearInterval(ba.gI), ba.trigger(n.Events.DONE));
                } else
                  clearInterval(ba.gI),
                    ba.trigger(n.Events.DONE, [
                      'Error received return status ' + ha.status,
                    ]);
              }, 1e3);
              this.request.send(null);
              this.status = x.a.STARTED;
            };
            n.prototype.Sta = function () {
              var r = this.request,
                z = r.responseText;
              if (0 !== z.length)
                if (this.tA === z.length)
                  clearInterval(this.gI), this.trigger(n.Events.DONE);
                else
                  return (
                    (z = Math.min(this.tA + 3e6, z.length)),
                    (r = f.D0(r, this.tA, !0, z)),
                    (this.tA = z),
                    r
                  );
            };
            n.prototype.abort = function () {
              clearInterval(this.gI);
              var r = this;
              this.request.onreadystatechange = function () {
                Object(ma.j)('StreamingRequest aborted');
                r.status = x.a.ABORTED;
                return r.trigger(n.Events.ABORTED);
              };
              this.request.abort();
            };
            n.prototype.finish = function () {
              var r = this;
              this.request.onreadystatechange = function () {
                r.status = x.a.SUCCESS;
                return r.trigger(n.Events.DONE);
              };
              this.request.abort();
            };
            n.Events = { DONE: 'done', DATA: 'data', ABORTED: 'aborted' };
            return n;
          })();
        Object(wa.a)(e);
        var a;
        (function (n) {
          n[(n.LOCAL_HEADER = 0)] = 'LOCAL_HEADER';
          n[(n.FILE = 1)] = 'FILE';
          n[(n.CENTRAL_DIR = 2)] = 'CENTRAL_DIR';
        })(a || (a = {}));
        var b = (function (n) {
          function r() {
            var z = n.call(this) || this;
            z.buffer = '';
            z.state = a.LOCAL_HEADER;
            z.DS = 4;
            z.Mn = null;
            z.Uv = ja.c;
            z.yp = {};
            return z;
          }
          Object(pa.c)(r, n);
          r.prototype.Lta = function (z) {
            var w;
            for (z = this.buffer + z; z.length >= this.Uv; )
              switch (this.state) {
                case a.LOCAL_HEADER:
                  this.Mn = w = this.Wta(z.slice(0, this.Uv));
                  if (w.Ew !== ja.g)
                    throw Error('Wrong signature in local header: ' + w.Ew);
                  z = z.slice(this.Uv);
                  this.state = a.FILE;
                  this.Uv = w.eM + w.Bs + w.az + this.DS;
                  this.trigger(r.Events.HEADER, [w]);
                  break;
                case a.FILE:
                  this.Mn.name = z.slice(0, this.Mn.Bs);
                  this.yp[this.Mn.name] = this.Mn;
                  w = this.Uv - this.DS;
                  var ba = z.slice(this.Mn.Bs + this.Mn.az, w);
                  this.trigger(r.Events.FILE, [this.Mn.name, ba, this.Mn.vM]);
                  z = z.slice(w);
                  if (z.slice(0, this.DS) === ja.h)
                    (this.state = a.LOCAL_HEADER), (this.Uv = ja.c);
                  else return (this.state = a.CENTRAL_DIR), !0;
              }
            this.buffer = z;
            return !1;
          };
          r.Events = { HEADER: 'header', FILE: 'file' };
          return r;
        })(fa.a);
        Object(wa.a)(b);
        wa = (function (n) {
          function r(z, w, ba, ha, aa) {
            ba = n.call(this, z, ba, ha) || this;
            ba.url = z;
            ba.stream = new e(z, w);
            ba.ce = new b();
            ba.J4 = window.createPromiseCapability();
            ba.m5 = {};
            ba.Yf = aa;
            return ba;
          }
          Object(pa.c)(r, n);
          r.prototype.tB = function (z) {
            var w = this;
            this.request([this.sk, this.nm, this.rk]);
            this.stream.addEventListener(e.Events.DATA, function (ba) {
              try {
                if (w.ce.Lta(ba)) return w.stream.finish();
              } catch (ha) {
                throw (w.stream.abort(), w.Lr(ha), z(ha), ha);
              }
            });
            this.stream.addEventListener(e.Events.DONE, function (ba) {
              w.kta = !0;
              w.J4.resolve();
              ba && (w.Lr(ba), z(ba));
            });
            this.ce.addEventListener(
              b.Events.HEADER,
              Object(na.bind)(this.l5, this)
            );
            this.ce.addEventListener(
              b.Events.FILE,
              Object(na.bind)(this.mua, this)
            );
            return this.stream.start(this.Yf, this.withCredentials);
          };
          r.prototype.w0 = function (z) {
            var w = this;
            this.J4.promise.then(function () {
              z(Object.keys(w.ce.yp));
            });
          };
          r.prototype.kq = function () {
            return !0;
          };
          r.prototype.request = function (z) {
            var w = this;
            this.kta &&
              z.forEach(function (ba) {
                w.m5[ba] || w.Xza(ba);
              });
          };
          r.prototype.l5 = function () {};
          r.prototype.abort = function () {
            this.stream && this.stream.abort();
          };
          r.prototype.Xza = function (z) {
            this.trigger(ia.a.Events.PART_READY, [
              { rb: z, error: 'Requested part not found', Cj: !1, Ug: !1 },
            ]);
          };
          r.prototype.mua = function (z, w, ba) {
            this.m5[z] = !0;
            this.trigger(ia.a.Events.PART_READY, [
              { rb: z, data: w, Cj: !1, Ug: !1, error: null, Jd: ba },
            ]);
          };
          return r;
        })(ia.a);
        Object(h.a)(wa);
        Object(h.b)(wa);
        sa['default'] = wa;
      },
    },
  ]);
}).call(this || window);
