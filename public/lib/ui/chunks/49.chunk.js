(window.webpackJsonp = window.webpackJsonp || []).push([
  [49],
  {
    1523: function (t, e, n) {
      var o = n(27),
        i = n(1524);
      'string' == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[t.i, i, '']]);
      var a = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const n = [];
            for (let o = 0; o < e.length; o++) {
              const i = e[o];
              if (0 === o)
                i.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    n.length > 0 &&
                      n.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                i.shadowRoot.appendChild(e), n.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      o(i, a);
      t.exports = i.locals || {};
    },
    1524: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        '.open.TextPopup{visibility:visible}.closed.TextPopup{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.TextPopup{position:absolute;z-index:70;display:flex;justify-content:center;align-items:center}.TextPopup:empty{padding:0}.TextPopup .buttons{display:flex}.TextPopup .Button{margin:4px;width:32px;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .TextPopup .Button{width:42px;height:42px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .TextPopup .Button{width:42px;height:42px}}.TextPopup .Button:hover{background:var(--popup-button-hover)}.TextPopup .Button .Icon{width:18px;height:18px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .TextPopup .Button .Icon{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .TextPopup .Button .Icon{width:24px;height:24px}}.is-vertical.TextPopup .Button.main-menu-button{width:100%;border-radius:0;justify-content:flex-start;padding-left:var(--padding-small);padding-right:var(--padding-small);margin:0 0 var(--padding-tiny) 0}.is-vertical.TextPopup .Button.main-menu-button:first-child{margin-top:var(--padding-tiny)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .is-vertical.TextPopup .Button.main-menu-button{width:100%;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .is-vertical.TextPopup .Button.main-menu-button{width:100%;height:32px}}.is-vertical.TextPopup .Button.main-menu-button .Icon{margin-right:10px}.is-vertical.TextPopup .Button.main-menu-button span{white-space:nowrap}@-webkit-keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.TextPopup{box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);border-radius:4px}.TextPopup.is-horizontal .container{display:inherit}.TextPopup.is-vertical{flex-direction:column;align-items:flex-start}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1741: function (t, e, n) {
      'use strict';
      n.r(e);
      n(18),
        n(11),
        n(13),
        n(7),
        n(12),
        n(8),
        n(9),
        n(10),
        n(15),
        n(14),
        n(20),
        n(17),
        n(37),
        n(38),
        n(31),
        n(22),
        n(36),
        n(34),
        n(72),
        n(24),
        n(25),
        n(75),
        n(73);
      var o = n(0),
        i = n.n(o),
        a = n(6),
        r = n(1361),
        l = n(1371),
        p = n(222),
        c = n.n(p),
        u = n(19),
        s = n.n(u),
        m = n(178),
        d = n.n(m),
        b = n(246),
        f = n(1437),
        h = n(1),
        x = n(312),
        y = n(304),
        g = n(475),
        w = n(147),
        P = n(2),
        T = n(3),
        E = n(35),
        v = n(5);
      n(1523);
      function O(t) {
        return (O =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function k(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function j(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? k(Object(n), !0).forEach(function (e) {
                A(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : k(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
        }
        return t;
      }
      function A(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' !== O(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(t, e || 'default');
                if ('object' !== O(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' === O(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function C(t, e) {
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
                i,
                a,
                r,
                l = [],
                p = !0,
                c = !1;
              try {
                if (((a = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  p = !1;
                } else
                  for (
                    ;
                    !(p = (o = a.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    p = !0
                  );
              } catch (t) {
                (c = !0), (i = t);
              } finally {
                try {
                  if (
                    !p &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (c) throw i;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return _(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var B = i.a.memo(
        Object(r.a)()(function (t) {
          var e = t.t,
            n = t.selectedTextQuads,
            r = C(
              Object(a.e)(function (t) {
                return [
                  T.a.isElementDisabled(t, v.a.TEXT_POPUP),
                  T.a.isElementOpen(t, v.a.TEXT_POPUP),
                  T.a.getPopupItems(t, v.a.TEXT_POPUP),
                  T.a.isRightClickAnnotationPopupEnabled(t),
                ];
              }, a.c),
              4
            ),
            p = r[0],
            u = r[1],
            m = r[2],
            O = r[3],
            k = Object(a.d)(),
            A = C(Object(o.useState)({ left: 0, top: 0 }), 2),
            _ = A[0],
            B = A[1],
            N = Object(o.useRef)();
          Object(w.a)(N, function () {
            k(P.a.closeElement(v.a.TEXT_POPUP));
          });
          var S = function () {
            N.current &&
              m.length > 0 &&
              n &&
              (B(Object(x.f)(n, N)), k(P.a.openElement(v.a.TEXT_POPUP)));
          };
          Object(o.useEffect)(
            function () {
              u &&
                k(
                  P.a.closeElements([
                    v.a.ANNOTATION_POPUP,
                    v.a.CONTEXT_MENU_POPUP,
                    v.a.INLINE_COMMENT_POPUP,
                  ])
                );
            },
            [k, u]
          ),
            Object(o.useEffect)(
              function () {
                S();
              },
              [n]
            );
          var I = Object(o.useCallback)(
            function () {
              return k(P.a.closeElement(v.a.TEXT_POPUP));
            },
            [k]
          );
          if (
            (Object(o.useEffect)(
              function () {
                var t = d()(function () {
                    S();
                  }, 100),
                  e = h.a.getDocumentViewer().getScrollViewElement();
                return (
                  null == e || e.addEventListener('scroll', t),
                  function () {
                    null == e || e.removeEventListener('scroll', t);
                  }
                );
              },
              [n]
            ),
            p)
          )
            return null;
          var U = i.a.createElement(
            'div',
            {
              className: s()({
                Popup: !0,
                TextPopup: !0,
                open: u,
                closed: !u,
                'is-vertical': O,
                'is-horizontal': !O,
              }),
              'data-element': v.a.TEXT_POPUP,
              ref: N,
              style: j({}, _),
              onClick: I,
              role: 'listbox',
              'aria-label': e('component.textPopup'),
            },
            i.a.createElement(
              l.a,
              { locked: u },
              i.a.createElement(
                'div',
                { className: 'container' },
                i.a.createElement(
                  f.a,
                  {
                    dataElement: v.a.TEXT_POPUP,
                    childrenClassName: 'main-menu-button',
                  },
                  i.a.createElement(b.a, {
                    className: 'main-menu-button',
                    dataElement: 'copyTextButton',
                    label: O ? 'action.copy' : '',
                    title: O ? '' : 'action.copy',
                    img: 'ic_copy_black_24px',
                    onClick: function () {
                      return Object(g.a)();
                    },
                    role: 'option',
                  }),
                  i.a.createElement(b.a, {
                    className: 'main-menu-button',
                    dataElement: 'textHighlightToolButton',
                    label: O ? 'annotation.highlight' : '',
                    title: O ? '' : 'annotation.highlight',
                    img: 'icon-tool-highlight',
                    onClick: function () {
                      return Object(y.a)(
                        k,
                        window.Core.Annotations.TextHighlightAnnotation
                      );
                    },
                    role: 'option',
                  }),
                  i.a.createElement(b.a, {
                    className: 'main-menu-button',
                    dataElement: 'textUnderlineToolButton',
                    label: O ? 'annotation.underline' : '',
                    title: O ? '' : 'annotation.underline',
                    img: 'icon-tool-text-manipulation-underline',
                    onClick: function () {
                      return Object(y.a)(
                        k,
                        window.Core.Annotations.TextUnderlineAnnotation
                      );
                    },
                    role: 'option',
                  }),
                  i.a.createElement(b.a, {
                    className: 'main-menu-button',
                    dataElement: 'textSquigglyToolButton',
                    label: O ? 'annotation.squiggly' : '',
                    title: O ? '' : 'annotation.squiggly',
                    img: 'icon-tool-text-manipulation-squiggly',
                    onClick: function () {
                      return Object(y.a)(
                        k,
                        window.Core.Annotations.TextSquigglyAnnotation
                      );
                    },
                    role: 'option',
                  }),
                  i.a.createElement(b.a, {
                    className: 'main-menu-button',
                    label: O ? 'annotation.strikeout' : '',
                    title: O ? '' : 'annotation.strikeout',
                    img: 'icon-tool-text-manipulation-strikethrough',
                    onClick: function () {
                      return Object(y.a)(
                        k,
                        window.Core.Annotations.TextStrikeoutAnnotation
                      );
                    },
                    dataElement: 'textStrikeoutToolButton',
                    role: 'option',
                  }),
                  i.a.createElement(b.a, {
                    className: 'main-menu-button',
                    label: O ? 'tool.Link' : '',
                    title: O ? '' : 'tool.Link',
                    img: 'icon-tool-link',
                    onClick: function () {
                      return k(P.a.openElement(v.a.LINK_MODAL));
                    },
                    dataElement: 'linkButton',
                    role: 'option',
                  }),
                  h.a.isCreateRedactionEnabled() &&
                    i.a.createElement(b.a, {
                      className: 'main-menu-button',
                      dataElement: 'textRedactToolButton',
                      label: O ? 'option.redaction.markForRedaction' : '',
                      title: O ? '' : 'option.redaction.markForRedaction',
                      fillColor: '868E96',
                      img: 'icon-tool-select-area-redaction',
                      onClick: function () {
                        return Object(y.a)(
                          k,
                          window.Core.Annotations.RedactionAnnotation
                        );
                      },
                      role: 'option',
                    })
                )
              )
            )
          );
          return E.f || Object(E.l)()
            ? U
            : i.a.createElement(
                c.a,
                {
                  cancel:
                    '.Button, .cell, .sliders-container svg, select, button, input',
                },
                U
              );
        })
      );
      e.default = B;
    },
  },
]);
//# sourceMappingURL=49.chunk.js.map
