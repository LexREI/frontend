/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [21],
    {
      534: function (wa, sa, h) {
        h.r(sa);
        var pa = h(0),
          na = h(7),
          ma = h(3);
        wa = h(49);
        var ja = h(28),
          ia = h(13);
        h = (function () {
          function fa() {
            this.init();
          }
          fa.prototype.init = function () {
            this.cga = !1;
            this.Kf = this.Sm = this.connection = null;
            this.ru = {};
            this.ga = this.vJ = null;
          };
          fa.prototype.lAa = function (y) {
            for (var x = this, f = 0; f < y.length; ++f) {
              var e = y[f];
              switch (e.at) {
                case 'create':
                  this.ru[e.author] || (this.ru[e.author] = e.aName);
                  this.gpa(e);
                  break;
                case 'modify':
                  this.ga.Sp(e.xfdf).then(function (a) {
                    x.ga.vb(a[0]);
                  });
                  break;
                case 'delete':
                  this.ga.Sp('<delete><id>' + e.aId + '</id></delete>');
              }
            }
          };
          fa.prototype.gpa = function (y) {
            var x = this;
            this.ga.Sp(y.xfdf).then(function (f) {
              f = f[0];
              f.authorId = y.author;
              x.ga.vb(f);
              x.ga.trigger(na.c.UPDATE_ANNOTATION_PERMISSION, [f]);
            });
          };
          fa.prototype.Doa = function (y, x, f) {
            this.Sm && this.Sm(y, x, f);
          };
          fa.prototype.preloadAnnotations = function (y) {
            this.addEventListener(
              'webViewerServerAnnotationsEnabled',
              this.Doa.bind(this, y, 'add', { imported: !1 }),
              { once: !0 }
            );
          };
          fa.prototype.initiateCollaboration = function (y, x, f) {
            var e = this;
            if (y) {
              e.Kf = x;
              e.ga = f.ma();
              f.addEventListener(na.h.DOCUMENT_UNLOADED, function () {
                e.disableCollaboration();
              });
              e.NAa(y);
              var a = new XMLHttpRequest();
              a.addEventListener('load', function () {
                if (200 === a.status && 0 < a.responseText.length)
                  try {
                    var b = JSON.parse(a.responseText);
                    e.connection = exports.da.yBa(
                      Object(ja.k)(e.Kf, 'blackbox/'),
                      'annot'
                    );
                    e.vJ = b.id;
                    e.ru[b.id] = b.user_name;
                    e.ga.RR(b.id);
                    e.connection.UEa(
                      function (n) {
                        n.t && n.t.startsWith('a_') && n.data && e.lAa(n.data);
                      },
                      function () {
                        e.connection.send({ t: 'a_retrieve', dId: y });
                        e.trigger(
                          fa.Events.WEBVIEWER_SERVER_ANNOTATIONS_ENABLED,
                          [e.ru[b.id], e.vJ]
                        );
                      },
                      function () {
                        e.disableCollaboration();
                      }
                    );
                  } catch (n) {
                    Object(ma.g)(n.message);
                  }
              });
              a.open('GET', Object(ja.k)(this.Kf, 'demo/SessionInfo.jsp'));
              a.withCredentials = !0;
              a.send();
              e.cga = !0;
              e.ga.D6(function (b) {
                return e.ru[b.Author] || b.Author;
              });
            } else Object(ma.g)('Document ID required for collaboration');
          };
          fa.prototype.disableCollaboration = function () {
            this.Sm &&
              (this.ga.removeEventListener(
                ia.a.Events.ANNOTATION_CHANGED,
                this.Sm
              ),
              (this.Sm = null));
            this.connection && this.connection.Hr();
            this.ga && this.ga.RR('Guest');
            this.init();
            this.trigger(fa.Events.WEBVIEWER_SERVER_ANNOTATIONS_DISABLED);
          };
          fa.prototype.NAa = function (y) {
            var x = this;
            this.Sm &&
              this.ga.removeEventListener(
                ia.a.Events.ANNOTATION_CHANGED,
                this.Sm
              );
            this.Sm = function (f, e, a) {
              return Object(pa.b)(this, void 0, void 0, function () {
                var b, n, r, z, w, ba, ha, aa, ca;
                return Object(pa.d)(this, function (ea) {
                  switch (ea.label) {
                    case 0:
                      if (a.imported) return [2];
                      b = { t: 'a_' + e, dId: y, annots: [] };
                      return [4, x.ga.QZ()];
                    case 1:
                      n = ea.ba();
                      'delete' !== e &&
                        ((r = new DOMParser().parseFromString(n, 'text/xml')),
                        (z = new XMLSerializer()));
                      for (w = 0; w < f.length; w++)
                        (ba = f[w]),
                          (aa = ha = void 0),
                          'add' === e
                            ? ((ha = r.querySelector('[name="' + ba.Id + '"]')),
                              (aa = z.serializeToString(ha)),
                              (ca = null),
                              ba.InReplyTo &&
                                (ca =
                                  x.ga.ug(ba.InReplyTo).authorId || 'default'),
                              b.annots.push({
                                at: 'create',
                                aId: ba.Id,
                                author: x.vJ,
                                aName: x.ru[x.vJ],
                                parent: ca,
                                xfdf: '<add>' + aa + '</add>',
                              }))
                            : 'modify' === e
                              ? ((ha = r.querySelector(
                                  '[name="' + ba.Id + '"]'
                                )),
                                (aa = z.serializeToString(ha)),
                                b.annots.push({
                                  at: 'modify',
                                  aId: ba.Id,
                                  xfdf: '<modify>' + aa + '</modify>',
                                }))
                              : 'delete' === e &&
                                b.annots.push({ at: 'delete', aId: ba.Id });
                      0 < b.annots.length && x.connection.send(b);
                      return [2];
                  }
                });
              });
            }.bind(x);
            this.ga.addEventListener(ia.a.Events.ANNOTATION_CHANGED, this.Sm);
          };
          fa.Events = {
            WEBVIEWER_SERVER_ANNOTATIONS_ENABLED:
              'webViewerServerAnnotationsEnabled',
            WEBVIEWER_SERVER_ANNOTATIONS_DISABLED:
              'webViewerServerAnnotationsDisabled',
          };
          return fa;
        })();
        Object(wa.a)(h);
        sa['default'] = h;
      },
    },
  ]);
}).call(this || window);
