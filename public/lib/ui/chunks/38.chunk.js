(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    1581: function (t, e, n) {
      var o = n(27),
        a = n(1582);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[t.i, a, '']]);
      var i = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const n = [];
            for (let o = 0; o < e.length; o++) {
              const a = e[o];
              if (0 === o)
                a.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    n.length > 0 &&
                      n.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                a.shadowRoot.appendChild(e), n.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      o(a, i);
      t.exports = a.locals || {};
    },
    1582: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        '.open.FilterAnnotModal{visibility:visible}.closed.FilterAnnotModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.FilterAnnotModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.FilterAnnotModal .modal-container .wrapper .modal-content{padding:10px}.FilterAnnotModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.FilterAnnotModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.FilterAnnotModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.FilterAnnotModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.FilterAnnotModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.FilterAnnotModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.FilterAnnotModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.FilterAnnotModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.FilterAnnotModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.FilterAnnotModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FilterAnnotModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .FilterAnnotModal .footer .modal-button{padding:23px 8px}}.FilterAnnotModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FilterAnnotModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .FilterAnnotModal .swipe-indicator{display:none}}.FilterAnnotModal .container{overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .FilterAnnotModal .container,.FilterAnnotModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .FilterAnnotModal .container,.FilterAnnotModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FilterAnnotModal .container,.FilterAnnotModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .FilterAnnotModal .container,.FilterAnnotModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.FilterAnnotModal .container .filter-modal .body .tab-list{width:100%;height:28px;display:flex;border-radius:4px;border:1px solid var(--border);color:var(--text-color)}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button{text-align:center;vertical-align:middle;line-height:24px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1;border-radius:0;cursor:pointer}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button:first-child{border-bottom-left-radius:4px;border-top-left-radius:4px}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button:last-child{border-bottom-right-radius:4px;border-top-right-radius:4px}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button:hover{background:var(--popup-button-hover)}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button.selected{background:var(--popup-button-active);cursor:default}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-divider{width:1px;background:var(--divider)}.FilterAnnotModal{font-size:.9em}.FilterAnnotModal .container{display:flex;flex-direction:column;align-items:center;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);width:360px}.FilterAnnotModal .container .message{font-size:14px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FilterAnnotModal .container .message{font-size:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .FilterAnnotModal .container .message{font-size:16px}}.FilterAnnotModal .container .filter-modal{display:flex;flex-direction:column;width:100%}.FilterAnnotModal .container .filter-modal .divider{height:1px;width:100%;background:var(--divider)}.FilterAnnotModal .container .filter-modal .header{display:flex;justify-content:space-between;margin:16px;font-size:16px;font-weight:700;align-items:center;height:24px}.FilterAnnotModal .container .filter-modal .header .Button{height:24px}.FilterAnnotModal .container .filter-modal .body{padding:16px}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button{padding:0;border:none;background-color:transparent}:host(:not([data-tabbing=true])) .FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button,html:not([data-tabbing=true]) .FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button{outline:none}.FilterAnnotModal .container .filter-modal .body .filter-options{height:200px;width:100%}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel{height:100%;width:100%;display:flex;flex-direction:column}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .include-replies{display:flex;height:20px;margin-top:12px}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .include-replies label{color:var(--gray-7)}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .three-column-filter{margin-top:20px;overflow-y:scroll;display:grid;grid-gap:5px 16px;grid-template-columns:repeat(3,minmax(0,1fr))}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .color-filters{margin-top:20px;overflow-y:scroll;display:grid;grid-gap:16px;grid-template-columns:repeat(5,minmax(0,1fr))}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .buttons{display:grid;padding:6px 0;grid-template-columns:100px 100px}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .colorSelect{display:flex;flex-direction:row}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .colorSelect .colorCell{width:22px;height:22px;border-radius:10000000px;margin-left:4px}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel label{overflow:hidden}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel label div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.FilterAnnotModal .container .filter-modal .settings-body{display:flex;flex-direction:column;padding:16px;font-size:var(--font-size-default);grid-gap:12px;gap:12px}.FilterAnnotModal .container .filter-modal .settings-body .settings-header{font-weight:var(--font-weight-bold)}.FilterAnnotModal .container .filter-modal .settings-body .settings{display:flex;flex-direction:column;grid-gap:8px;gap:8px}.FilterAnnotModal .container .filter-modal .settings-body .settings .setting{display:flex;flex-direction:row;grid-gap:16px;gap:16px}.FilterAnnotModal .container .filter-modal .footer{display:flex;justify-content:space-between;width:100%;padding:16px;margin-top:0}.FilterAnnotModal .container .filter-modal .footer .Button{display:flex;justify-content:center;align-items:center;color:var(--primary-button-text);padding:6px 18px;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background:var(--primary-button);border-radius:4px;height:32px;cursor:pointer}.FilterAnnotModal .container .filter-modal .footer .Button:hover{background:var(--primary-button-hover)}.FilterAnnotModal .container .filter-modal .footer .Button.disabled{background:var(--gray-6);border-color:var(--gray-6);cursor:not-allowed}.FilterAnnotModal .container .filter-modal .footer .filter-annot-clear{color:var(--secondary-button-text);background:none}.FilterAnnotModal .container .filter-modal .footer .filter-annot-clear:hover{color:var(--secondary-button-hover);background:none}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1745: function (t, e, n) {
      'use strict';
      n.r(e);
      n(39),
        n(65),
        n(131),
        n(32),
        n(34),
        n(7),
        n(52),
        n(64),
        n(24),
        n(25),
        n(8),
        n(221),
        n(9),
        n(10),
        n(82),
        n(132),
        n(18),
        n(11),
        n(13),
        n(12),
        n(15),
        n(14),
        n(20),
        n(17);
      var o = n(0),
        a = n.n(o),
        i = n(19),
        r = n.n(i),
        l = n(6),
        d = n(362),
        c = n(1),
        s = n(2),
        p = n(3),
        u = n(48),
        m = n(182),
        f = n(1371),
        b = n(74),
        g = n(43),
        h = n(61),
        A = n(5),
        x = n(226),
        y = n(244),
        v = n(162),
        w = n(21),
        E = n(142),
        F = n(153);
      n(1581);
      function M(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return T(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          k(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function N(t, e) {
        var n =
          ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
          t['@@iterator'];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = k(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n);
            var o = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return o >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[o++] };
              },
              e: function (t) {
                throw t;
              },
              f: a,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var i,
          r = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (r = t.done), t;
          },
          e: function (t) {
            (l = !0), (i = t);
          },
          f: function () {
            try {
              r || null == n.return || n.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function O(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != n) {
              var o,
                a,
                i,
                r,
                l = [],
                d = !0,
                c = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  d = !1;
                } else
                  for (
                    ;
                    !(d = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    d = !0
                  );
              } catch (t) {
                (c = !0), (a = t);
              } finally {
                try {
                  if (
                    !d &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return l;
            }
          })(t, e) ||
          k(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function k(t, e) {
        if (t) {
          if ('string' == typeof t) return T(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? T(t, e)
                : void 0
          );
        }
      }
      function T(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var S = 'filterAnnotModal',
        j = function () {
          var t = O(
              Object(l.e)(function (t) {
                return [
                  p.a.isElementDisabled(t, A.a.FILTER_MODAL),
                  p.a.isElementOpen(t, A.a.FILTER_MODAL),
                  p.a.getColorMap(t),
                  p.a.getSelectedTab(t, S),
                  p.a.getAnnotationFilters(t),
                  p.a.getIsMeasurementAnnotationFilterEnabled(t),
                ];
              }),
              6
            ),
            e = t[0],
            n = t[1],
            i = t[2],
            k = t[3],
            T = t[4],
            j = t[5],
            L = O(Object(d.a)(), 1)[0],
            _ = Object(l.d)(),
            I = O(Object(o.useState)([]), 2),
            R = I[0],
            D = I[1],
            C = O(Object(o.useState)([]), 2),
            U = C[0],
            B = C[1],
            P = O(Object(o.useState)([]), 2),
            V = P[0],
            z = P[1],
            H = O(Object(o.useState)([]), 2),
            G = H[0],
            W = H[1],
            J = O(Object(o.useState)([]), 2),
            Y = J[0],
            $ = J[1],
            q = O(Object(o.useState)([]), 2),
            K = q[0],
            Q = q[1],
            X = O(Object(o.useState)([]), 2),
            Z = X[0],
            tt = X[1],
            et = O(Object(o.useState)(!0), 2),
            nt = et[0],
            ot = et[1],
            at = O(Object(o.useState)(!1), 2),
            it = at[0],
            rt = at[1],
            lt = O(Object(o.useState)([]), 2),
            dt = lt[0],
            ct = lt[1],
            st = O(Object(o.useState)(0), 2),
            pt = st[0],
            ut = st[1],
            mt = O(Object(o.useState)(!1), 2),
            ft = mt[0],
            bt = mt[1],
            gt = function (t) {
              var e,
                n = Object(h.g)(t);
              return t[
                null === (e = i[n]) || void 0 === e ? void 0 : e.iconColor
              ];
            },
            ht = function (t, e) {
              var n = t.map(function (t) {
                return Object.assign({
                  R: parseInt(''.concat(t[1]).concat(t[2]), 16),
                  G: parseInt(''.concat(t[3]).concat(t[4]), 16),
                  B: parseInt(''.concat(t[5]).concat(t[6]), 16),
                });
              });
              return !!n.filter(function (t) {
                return (
                  Math.abs(e.R - t.R) < 10 &&
                  Math.abs(e.G - t.G) < 10 &&
                  Math.abs(e.B - t.B) < 10
                );
              }).length;
            },
            At = function () {
              var t = function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1,
                  n = !0,
                  o = !0,
                  a = !0,
                  i = !0;
                if (K.length > 0) {
                  var r = t.IT || t.getCustomData('trn-is-count');
                  if (j && r) {
                    var l = Object(h.g)(t);
                    n = K.includes(l);
                  } else n = K.includes(Object(y.a)(t));
                }
                if (
                  Y.length > 0 &&
                  !(o = Y.includes(c.a.getDisplayAuthor(t.Author, e))) &&
                  nt
                ) {
                  var d,
                    s = t.getReplies(),
                    p = N(s);
                  try {
                    for (p.s(); !(d = p.n()).done; ) {
                      var u = d.value;
                      if (Y.includes(c.a.getDisplayAuthor(u.Author, e))) {
                        o = !0;
                        break;
                      }
                    }
                  } catch (t) {
                    p.e(t);
                  } finally {
                    p.f();
                  }
                }
                if (Z.length > 0) {
                  var m = gt(t);
                  a = m ? ht(Z, m) : Z.includes('#485056');
                }
                return (
                  dt.length > 0 &&
                    (i = t.getStatus()
                      ? dt.includes(t.getStatus())
                      : dt.includes('None')),
                  n && o && a && i
                );
              };
              _(s.a.setCustomNoteFilter(t)),
                _(
                  s.a.setAnnotationFilters({
                    isDocumentFilterActive: it,
                    includeReplies: nt,
                    authorFilter: Y,
                    colorFilter: Z,
                    typeFilter: K,
                    statusFilter: dt,
                  })
                );
              var e = [];
              it
                ? c.a.getDocumentViewers().forEach(function (n, o) {
                    return n
                      .getAnnotationManager()
                      .getAnnotationsList()
                      .forEach(function (n) {
                        var a = !t(n, o + 1);
                        a !== n.NoView && ((n.NoView = a), e.push(n));
                      });
                  })
                : c.a.getDocumentViewers().forEach(function (t) {
                    return t
                      .getAnnotationManager()
                      .getAnnotationsList()
                      .forEach(function (t) {
                        !0 === t.NoView && ((t.NoView = !1), e.push(t));
                      });
                  }),
                c.a.getDocumentViewers().forEach(function (t) {
                  return t.getAnnotationManager().drawAnnotationsFromList(e);
                }),
                Object(u.a)(g.a.ANNOTATION_FILTER_CHANGED, {
                  types: K,
                  authors: Y,
                  colors: Z,
                  statuses: dt,
                  checkRepliesForAuthorFilter: nt,
                }),
                yt();
            },
            xt = function () {
              ot(!1), $([]), Q([]), tt([]), ct([]);
              var t = [];
              c.a.getDocumentViewers().forEach(function (e) {
                return e
                  .getAnnotationManager()
                  .getAnnotationsList()
                  .forEach(function (e) {
                    !0 === e.NoView && ((e.NoView = !1), t.push(e));
                  });
              }),
                c.a.getDocumentViewers().forEach(function (e) {
                  return e.getAnnotationManager().drawAnnotationsFromList(t);
                });
            },
            yt = function () {
              _(s.a.closeElement(A.a.FILTER_MODAL)), c.a.setToolMode(b.a);
            };
          Object(o.useEffect)(function () {
            var t = function () {
              xt(), At();
            };
            return (
              c.a.addEventListener('documentUnloaded', t),
              function () {
                c.a.removeEventListener('documentUnloaded', t);
              }
            );
          }, []),
            Object(o.useEffect)(
              function () {
                var t,
                  e = c.a.getDocumentViewers().map(function (t) {
                    return t.getAnnotationManager().getAnnotationsList();
                  }),
                  n = (t = []).concat.apply(t, M(e)).filter(function (t) {
                    return !t.Hidden;
                  }),
                  o = new Set(),
                  a = new Set(),
                  i = new Set(),
                  r = new Set();
                return (
                  n.forEach(function (t) {
                    var e = c.a.getDisplayAuthor(t.Author);
                    if (
                      (e && '' !== e && o.add(e),
                      !(
                        t instanceof window.Core.Annotations.WidgetAnnotation ||
                        (t instanceof
                          window.Core.Annotations.StickyAnnotation &&
                          t.isReply()) ||
                        t instanceof window.Core.Annotations.Link
                      ))
                    ) {
                      var n = t.IT || t.getCustomData('trn-is-count');
                      if (j && n) {
                        var l = Object(h.g)(t);
                        a.add(l);
                      } else a.add(Object(y.a)(t));
                      var d = gt(t);
                      d &&
                        !ht(M(i), d) &&
                        i.add(Object(x.c)(d.R, d.G, d.B, d.A)),
                        t.getStatus() ? r.add(t.getStatus()) : r.add('None');
                    }
                  }),
                  D(M(o)),
                  B(M(a)),
                  z(M(i)),
                  W(M(r)),
                  c.a.addEventListener('documentUnloaded', yt),
                  function () {
                    c.a.removeEventListener('documentUnloaded', yt);
                  }
                );
              },
              [n, j]
            ),
            Object(o.useEffect)(
              function () {
                k !== A.a.ANNOTATION_STATUS_FILTER_PANEL_BUTTON ||
                  ft ||
                  _(
                    s.a.setSelectedTab(
                      S,
                      A.a.ANNOTATION_USER_FILTER_PANEL_BUTTON
                    )
                  );
              },
              [n, k, ft]
            ),
            Object(o.useEffect)(
              function () {
                ut((nt ? 1 : 0) + Y.length + Z.length + K.length + dt.length);
              },
              [nt, Y, Z, K, dt]
            ),
            Object(o.useEffect)(
              function () {
                bt(G.length > 1 || (1 === G.length && 'None' !== G[0]));
              },
              [G]
            ),
            Object(o.useEffect)(
              function () {
                n &&
                  (rt(T.isDocumentFilterActive),
                  ot(T.includeReplies),
                  $(T.authorFilter),
                  tt(T.colorFilter),
                  Q(T.typeFilter),
                  ct(T.statusFilter));
              },
              [n]
            );
          var vt = r()({
            Modal: !0,
            FilterAnnotModal: !0,
            open: n,
            closed: !n,
          });
          return e
            ? null
            : a.a.createElement(
                'div',
                {
                  className: vt,
                  'data-element': A.a.FILTER_MODAL,
                  onMouseDown: yt,
                },
                a.a.createElement(
                  f.a,
                  { locked: n, focusLastOnUnlock: !0 },
                  a.a.createElement(
                    'div',
                    {
                      className: 'container',
                      onMouseDown: function (t) {
                        return t.stopPropagation();
                      },
                    },
                    c.a.getAnnotationsList().length > 0
                      ? a.a.createElement(
                          'div',
                          { className: 'filter-modal' },
                          a.a.createElement(
                            m.a,
                            {
                              onSwipedDown: yt,
                              preventDefaultTouchmoveEvent: !0,
                            },
                            a.a.createElement('div', {
                              className: 'swipe-indicator',
                            }),
                            a.a.createElement(
                              'div',
                              { className: 'header' },
                              a.a.createElement(
                                'div',
                                null,
                                ''
                                  .concat(
                                    L('option.filterAnnotModal.filters'),
                                    ' ('
                                  )
                                  .concat(pt, ')')
                              ),
                              a.a.createElement(w.a, {
                                img: 'icon-close',
                                onClick: yt,
                                title: 'action.close',
                              })
                            )
                          ),
                          a.a.createElement('div', { className: 'divider' }),
                          a.a.createElement(
                            'div',
                            { className: 'body' },
                            a.a.createElement(
                              E.d,
                              { id: S },
                              a.a.createElement(
                                'div',
                                { className: 'tab-list' },
                                a.a.createElement(
                                  E.a,
                                  {
                                    dataElement:
                                      A.a.ANNOTATION_USER_FILTER_PANEL_BUTTON,
                                  },
                                  a.a.createElement(
                                    'button',
                                    { className: 'tab-options-button' },
                                    L('option.filterAnnotModal.user')
                                  )
                                ),
                                a.a.createElement('div', {
                                  className: 'tab-options-divider',
                                }),
                                a.a.createElement(
                                  E.a,
                                  {
                                    dataElement:
                                      A.a.ANNOTATION_COLOR_FILTER_PANEL_BUTTON,
                                  },
                                  a.a.createElement(
                                    'button',
                                    { className: 'tab-options-button' },
                                    L('option.filterAnnotModal.color')
                                  )
                                ),
                                a.a.createElement('div', {
                                  className: 'tab-options-divider',
                                }),
                                a.a.createElement(
                                  E.a,
                                  {
                                    dataElement:
                                      A.a.ANNOTATION_TYPE_FILTER_PANEL_BUTTON,
                                  },
                                  a.a.createElement(
                                    'button',
                                    { className: 'tab-options-button' },
                                    L('option.filterAnnotModal.type')
                                  )
                                ),
                                ft &&
                                  a.a.createElement(
                                    a.a.Fragment,
                                    null,
                                    a.a.createElement('div', {
                                      className: 'tab-options-divider',
                                    }),
                                    a.a.createElement(
                                      E.a,
                                      {
                                        dataElement:
                                          A.a
                                            .ANNOTATION_STATUS_FILTER_PANEL_BUTTON,
                                      },
                                      a.a.createElement(
                                        'button',
                                        { className: 'tab-options-button' },
                                        L('option.filterAnnotModal.status')
                                      )
                                    )
                                  )
                              ),
                              a.a.createElement(
                                'div',
                                { className: 'filter-options' },
                                a.a.createElement(
                                  E.c,
                                  { dataElement: 'annotationUserFilterPanel' },
                                  a.a.createElement(
                                    'div',
                                    {
                                      className:
                                        'user-filters three-column-filter',
                                    },
                                    M(R).map(function (t, e) {
                                      return a.a.createElement(v.a, {
                                        type: 'checkbox',
                                        key: e,
                                        label: a.a.createElement(
                                          F.a,
                                          { content: t },
                                          a.a.createElement('div', null, t)
                                        ),
                                        checked: Y.includes(t),
                                        id: t,
                                        onChange: function (t) {
                                          -1 ===
                                          Y.indexOf(t.target.getAttribute('id'))
                                            ? $(
                                                [].concat(M(Y), [
                                                  t.target.getAttribute('id'),
                                                ])
                                              )
                                            : $(
                                                Y.filter(function (e) {
                                                  return (
                                                    e !==
                                                    t.target.getAttribute('id')
                                                  );
                                                })
                                              );
                                        },
                                      });
                                    })
                                  )
                                ),
                                a.a.createElement(
                                  E.c,
                                  { dataElement: 'annotationColorFilterPanel' },
                                  a.a.createElement(
                                    'div',
                                    { className: 'color-filters' },
                                    M(V).map(function (t, e) {
                                      return a.a.createElement(
                                        'div',
                                        {
                                          className: 'colorSelect',
                                          key: 'color'.concat(e),
                                        },
                                        a.a.createElement(v.a, {
                                          type: 'checkbox',
                                          checked: Z.includes(t),
                                          id: t,
                                          onChange: function (t) {
                                            -1 ===
                                            Z.indexOf(
                                              t.target.getAttribute('id')
                                            )
                                              ? tt(
                                                  [].concat(M(Z), [
                                                    t.target.getAttribute('id'),
                                                  ])
                                                )
                                              : tt(
                                                  Z.filter(function (e) {
                                                    return (
                                                      e !==
                                                      t.target.getAttribute(
                                                        'id'
                                                      )
                                                    );
                                                  })
                                                );
                                          },
                                        }),
                                        a.a.createElement('div', {
                                          className: 'colorCell',
                                          style: { background: Object(x.a)(t) },
                                        })
                                      );
                                    })
                                  )
                                ),
                                a.a.createElement(
                                  E.c,
                                  { dataElement: 'annotationTypeFilterPanel' },
                                  a.a.createElement(
                                    'div',
                                    {
                                      className:
                                        'type-filters three-column-filter',
                                    },
                                    M(U)
                                      .sort(function (t, e) {
                                        return L('annotation.'.concat(t)) <=
                                          L('annotation.'.concat(e))
                                          ? -1
                                          : 1;
                                      })
                                      .map(function (t, e) {
                                        return a.a.createElement(v.a, {
                                          type: 'checkbox',
                                          key: e,
                                          label: a.a.createElement(
                                            F.a,
                                            {
                                              content: L(
                                                'annotation.'.concat(t)
                                              ),
                                            },
                                            a.a.createElement(
                                              'div',
                                              null,
                                              L('annotation.'.concat(t))
                                            )
                                          ),
                                          checked: K.includes(t),
                                          id: t,
                                          onChange: function (t) {
                                            -1 ===
                                            K.indexOf(
                                              t.target.getAttribute('id')
                                            )
                                              ? Q(
                                                  [].concat(M(K), [
                                                    t.target.getAttribute('id'),
                                                  ])
                                                )
                                              : Q(
                                                  K.filter(function (e) {
                                                    return (
                                                      e !==
                                                      t.target.getAttribute(
                                                        'id'
                                                      )
                                                    );
                                                  })
                                                );
                                          },
                                        });
                                      })
                                  )
                                ),
                                ft &&
                                  a.a.createElement(
                                    E.c,
                                    {
                                      dataElement:
                                        'annotationStatusFilterPanel',
                                    },
                                    a.a.createElement(
                                      'div',
                                      {
                                        className:
                                          'status-filters three-column-filter',
                                      },
                                      M(G).map(function (t, e) {
                                        return a.a.createElement(v.a, {
                                          type: 'checkbox',
                                          key: e,
                                          checked: dt.includes(t),
                                          label: L(
                                            'option.state.'.concat(
                                              t.toLocaleLowerCase()
                                            )
                                          ),
                                          id: t,
                                          onChange: function (t) {
                                            -1 ===
                                            dt.indexOf(
                                              t.target.getAttribute('id')
                                            )
                                              ? ct(
                                                  [].concat(M(dt), [
                                                    t.target.getAttribute('id'),
                                                  ])
                                                )
                                              : ct(
                                                  dt.filter(function (e) {
                                                    return (
                                                      e !==
                                                      t.target.getAttribute(
                                                        'id'
                                                      )
                                                    );
                                                  })
                                                );
                                          },
                                        });
                                      })
                                    )
                                  )
                              )
                            )
                          ),
                          a.a.createElement('div', { className: 'divider' }),
                          a.a.createElement(
                            'div',
                            { className: 'settings-body' },
                            a.a.createElement(
                              'div',
                              { className: 'settings-header' },
                              L('option.filterAnnotModal.filterSettings')
                            ),
                            a.a.createElement(
                              'div',
                              { className: 'settings' },
                              a.a.createElement(v.a, {
                                label: L(
                                  'option.filterAnnotModal.includeReplies'
                                ),
                                checked: nt,
                                onChange: function (t) {
                                  return ot(t.target.checked);
                                },
                                id: 'filter-annot-modal-include-replies',
                              }),
                              a.a.createElement(v.a, {
                                label: L(
                                  'option.filterAnnotModal.filterDocument'
                                ),
                                checked: it,
                                onChange: function (t) {
                                  return rt(t.target.checked);
                                },
                                id: 'filter-annot-modal-filter-document',
                              })
                            )
                          ),
                          a.a.createElement('div', { className: 'divider' }),
                          a.a.createElement(
                            'div',
                            { className: 'footer' },
                            a.a.createElement(w.a, {
                              className: 'filter-annot-clear',
                              onClick: xt,
                              label: L('action.clearAll'),
                              disabled: 0 === pt,
                            }),
                            a.a.createElement(w.a, {
                              className: 'filter-annot-apply',
                              onClick: At,
                              label: L('action.apply'),
                            })
                          )
                        )
                      : a.a.createElement(
                          'div',
                          null,
                          a.a.createElement('div', {
                            className: 'swipe-indicator',
                          }),
                          a.a.createElement(
                            'div',
                            { className: 'message' },
                            L('message.noAnnotationsFilter')
                          )
                        )
                  )
                )
              );
        };
      e.default = j;
    },
  },
]);
//# sourceMappingURL=38.chunk.js.map
