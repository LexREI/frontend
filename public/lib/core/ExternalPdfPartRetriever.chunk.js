/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [5],
    {
      522: function (wa, sa, h) {
        h.r(sa);
        var pa = h(0);
        wa = h(49);
        var na = h(193),
          ma = h(436),
          ja = h(243),
          ia = window;
        h = (function () {
          function fa(y, x) {
            this.b2 = function (f) {
              f = f.split('.');
              return f[f.length - 1].match(/(jpg|jpeg|png|gif)$/i);
            };
            x = x || {};
            this.url = y;
            this.filename = x.filename || y;
            this.Yf = x.customHeaders;
            this.CAa = !!x.useDownloader;
            this.withCredentials = !!x.withCredentials;
          }
          fa.prototype.HI = function (y) {
            this.Yf = y;
          };
          fa.prototype.getCustomHeaders = function () {
            return this.Yf;
          };
          fa.prototype.getFileData = function (y) {
            var x = this,
              f = this,
              e = new XMLHttpRequest(),
              a = 0 === this.url.indexOf('blob:') ? 'blob' : 'arraybuffer';
            e.open('GET', this.url, !0);
            e.withCredentials = this.withCredentials;
            e.responseType = a;
            this.Yf &&
              Object.keys(this.Yf).forEach(function (n) {
                e.setRequestHeader(n, x.Yf[n]);
              });
            var b = /^https?:/i.test(this.url);
            e.addEventListener(
              'load',
              function (n) {
                return Object(pa.b)(this, void 0, void 0, function () {
                  var r, z, w, ba, ha, aa;
                  return Object(pa.d)(this, function (ca) {
                    switch (ca.label) {
                      case 0:
                        if (200 !== this.status && (b || 0 !== this.status))
                          return [3, 10];
                        f.trigger(fa.Events.DOCUMENT_LOADING_PROGRESS, [
                          n.loaded,
                          n.loaded,
                        ]);
                        if ('blob' !== this.responseType) return [3, 4];
                        r = this.response;
                        return f.b2(f.filename) ? [4, Object(ja.b)(r)] : [3, 2];
                      case 1:
                        return (
                          (z = ca.ba()),
                          (f.fileSize = z.byteLength),
                          y(new Uint8Array(z)),
                          [3, 3]
                        );
                      case 2:
                        (w = new FileReader()),
                          (w.onload = function (ea) {
                            ea = new Uint8Array(ea.target.result);
                            f.fileSize = ea.length;
                            y(ea);
                          }),
                          w.readAsArrayBuffer(r),
                          (ca.label = 3);
                      case 3:
                        return [3, 9];
                      case 4:
                        ca.Te.push([4, 8, , 9]);
                        ba = new Uint8Array(this.response);
                        if (!f.b2(f.filename)) return [3, 6];
                        r = new Blob([ba.buffer]);
                        return [4, Object(ja.b)(r)];
                      case 5:
                        return (
                          (z = ca.ba()),
                          (f.fileSize = z.byteLength),
                          y(new Uint8Array(z)),
                          [3, 7]
                        );
                      case 6:
                        (f.fileSize = ba.length), y(ba), (ca.label = 7);
                      case 7:
                        return [3, 9];
                      case 8:
                        return (
                          ca.ba(),
                          f.trigger(fa.Events.ERROR, [
                            'pdfLoad',
                            'Out of memory',
                          ]),
                          [3, 9]
                        );
                      case 9:
                        return [3, 11];
                      case 10:
                        (ha = n.currentTarget),
                          (aa = Object(na.b)(ha)),
                          f.trigger(fa.Events.ERROR, [
                            'pdfLoad',
                            this.status + ' ' + ha.statusText,
                            aa,
                          ]),
                          (ca.label = 11);
                      case 11:
                        return (f.wC = null), [2];
                    }
                  });
                });
              },
              !1
            );
            e.onprogress = function (n) {
              f.trigger(fa.Events.DOCUMENT_LOADING_PROGRESS, [
                n.loaded,
                0 < n.total ? n.total : 0,
              ]);
            };
            e.addEventListener(
              'error',
              function () {
                f.trigger(fa.Events.ERROR, ['pdfLoad', 'Network failure']);
                f.wC = null;
              },
              !1
            );
            e.send();
            this.wC = e;
          };
          fa.prototype.getFile = function () {
            var y = this;
            return new Promise(function (x) {
              ia.da.isJSWorker && x(y.url);
              if (y.CAa) {
                var f = Object(pa.a)(
                  { url: y.url },
                  y.Yf ? { customHeaders: y.Yf } : {}
                );
                x(f);
              }
              x(null);
            });
          };
          fa.prototype.abort = function () {
            this.wC && (this.wC.abort(), (this.wC = null));
          };
          fa.Events = {
            DOCUMENT_LOADING_PROGRESS: 'documentLoadingProgress',
            ERROR: 'error',
          };
          return fa;
        })();
        Object(wa.a)(h);
        Object(ma.a)(h);
        Object(ma.b)(h);
        sa['default'] = h;
      },
    },
  ]);
}).call(this || window);
