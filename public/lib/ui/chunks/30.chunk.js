(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    1527: function (e, t, n) {
      var o = n(27),
        i = n(1528);
      'string' == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, '']]);
      var r = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const i = t[o];
              if (0 === o)
                i.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                i.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(i, r);
      e.exports = i.locals || {};
    },
    1528: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.mathSymbolsContainer{display:flex;flex-wrap:wrap;overflow-y:auto;display:grid;grid-template-columns:repeat(7,1fr);margin-bottom:5px}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.mathSymbolsContainer{width:196px}}.mathSymbolsContainer.padding{padding:4px 20px 8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .mathSymbolsContainer{max-width:450px;width:auto}}@media(max-width:640px)and (-ms-high-contrast:active),(max-width:640px)and (-ms-high-contrast:none){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .mathSymbolsContainer{width:308px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .mathSymbolsContainer{max-width:450px;width:auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.App.is-web-component:not(.is-in-desktop-only-mode) .mathSymbolsContainer{width:308px}}}.mathSymbolsContainer .cell-container{padding:0;border:none;background-color:transparent;flex:1 0 14%;cursor:pointer;border-radius:4px;width:28px;height:28px;display:flex;align-items:center;justify-content:center}:host(:not([data-tabbing=true])) .mathSymbolsContainer .cell-container,html:not([data-tabbing=true]) .mathSymbolsContainer .cell-container{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .mathSymbolsContainer .cell-container{width:44px;height:44px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .mathSymbolsContainer .cell-container{width:44px;height:44px}}.mathSymbolsContainer .cell-container:hover{background:var(--popup-button-hover)}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1529: function (e, t, n) {
      var o = n(27),
        i = n(1530);
      'string' == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, '']]);
      var r = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const i = t[o];
              if (0 === o)
                i.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                i.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(i, r);
      e.exports = i.locals || {};
    },
    1530: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        '.open.RichTextPopup{visibility:visible}.closed.RichTextPopup{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.RichTextPopup{position:absolute;z-index:70;display:flex;justify-content:center;align-items:center}.RichTextPopup:empty{padding:0}.RichTextPopup .buttons{display:flex}.RichTextPopup .Button{margin:4px;width:32px;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RichTextPopup .Button{width:42px;height:42px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RichTextPopup .Button{width:42px;height:42px}}.RichTextPopup .Button:hover{background:var(--popup-button-hover)}.RichTextPopup .Button .Icon{width:18px;height:18px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RichTextPopup .Button .Icon{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RichTextPopup .Button .Icon{width:24px;height:24px}}.is-vertical.RichTextPopup .Button.main-menu-button{width:100%;border-radius:0;justify-content:flex-start;padding-left:var(--padding-small);padding-right:var(--padding-small);margin:0 0 var(--padding-tiny) 0}.is-vertical.RichTextPopup .Button.main-menu-button:first-child{margin-top:var(--padding-tiny)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .is-vertical.RichTextPopup .Button.main-menu-button{width:100%;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .is-vertical.RichTextPopup .Button.main-menu-button{width:100%;height:32px}}.is-vertical.RichTextPopup .Button.main-menu-button .Icon{margin-right:10px}.is-vertical.RichTextPopup .Button.main-menu-button span{white-space:nowrap}@-webkit-keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.RichTextPopup{overflow:visible;flex-direction:column;background:var(--component-background);border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);width:220px;padding:6px 12px;align-items:flex-start}.RichTextPopup.legacy{padding:0;width:auto;align-items:center}.RichTextPopup.legacy .ColorPalette.padding{padding:4px 12px 8px}.RichTextPopup.legacy .colorPicker{padding:0 12px 8px}.RichTextPopup .rich-text-format-legacy{display:flex;width:100%;justify-content:center}.RichTextPopup .ColorPalette.padding{padding:0}.RichTextPopup .menu-items{width:100%;padding:6px 4px}.RichTextPopup .collapsible-menu{width:100%;display:flex;cursor:pointer;align-items:center;justify-content:space-between}.RichTextPopup .collapsible-menu .menu-title{padding-left:4px;padding-top:6px;padding-bottom:6px;font-weight:700;font-size:14px}.RichTextPopup .collapsible-menu .Icon{height:18px;width:18px}.RichTextPopup .divider{background-color:var(--divider);width:100%;height:1px;margin:6px 0}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1725: function (e, t, n) {
      'use strict';
      n.r(t);
      n(32),
        n(52),
        n(64),
        n(18),
        n(84),
        n(311),
        n(366),
        n(1406),
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
        r = n(222),
        a = n.n(r),
        l = n(19),
        c = n.n(l),
        p = n(6),
        d = n(178),
        s = n.n(d),
        u = n(529),
        m = n(314),
        h = n(21),
        x = n(192),
        b = n(35),
        f = n(1),
        g = (n(183), n(312)),
        y = n(23),
        w = function (e, t) {
          if (t && t.current) {
            var n = Object(y.a)().querySelector(
                '#pageWidgetContainer'
                  .concat(e.PageNumber, ' [id="freetext-editor-')
                  .concat(e.Id, '"]')
              ),
              o = f.a.getScrollViewElement(),
              i = 2 * parseFloat(e.StrokeThickness) * f.a.getZoom(),
              r = n.getBoundingClientRect(),
              a = {
                topLeft: {
                  x: r.left + o.scrollLeft - i,
                  y: r.top + o.scrollTop - i,
                },
                bottomRight: {
                  x: r.right + o.scrollLeft + i,
                  y: r.bottom + o.scrollTop + i,
                },
              },
              l = t.current.getBoundingClientRect();
            return { left: Object(g.a)(a, l), top: Object(g.b)(a, l) };
          }
        },
        v =
          (n(39),
          n(1527),
          [
            '+',
            '−',
            '×',
            '÷',
            '=',
            '≠',
            '±',
            '¬',
            '<',
            '>',
            '⋜',
            '⋝',
            '°',
            '¹',
            '²',
            '³',
            'ƒ',
            '%',
            '‰',
            '‱',
            '∀',
            '∁',
            '∂',
            '∃',
            '∄',
            '∅',
            '∆',
            '∇',
            '∈',
            '∉',
            '∊',
            '∋',
            '∌',
            '∍',
            '∎',
            '∏',
            '∐',
            '∑',
            '∓',
            '∔',
            '∕',
            '∖',
            '∗',
            '∘',
            '∙',
            '√',
            '∛',
            '∜',
            '∝',
            '∞',
            '∟',
            '∠',
            '∡',
            '∢',
            '∣',
            '∤',
            '∥',
            '∦',
            '∧',
            '∨',
            '∩',
            '∪',
            '∫',
            '∬',
            '∭',
            '∮',
            '∯',
            '∰',
            '∱',
            '∲',
            '∳',
            '∴',
            '∵',
            '∶',
            '∷',
            '∸',
            '∹',
            '∺',
            '∻',
            '∼',
            '∽',
            '∾',
            '∿',
            '≀',
            '≁',
            '≂',
            '≃',
            '≄',
            '≅',
            '≆',
            '≇',
            '≈',
            '≉',
            '≊',
            '≋',
            '≌',
          ]),
        T = function (e) {
          var t = e.onClickHandler,
            n = e.maxHeight;
          return i.a.createElement(
            'div',
            {
              className: 'mathSymbolsContainer padding',
              style: { maxHeight: ''.concat(n, 'px') },
            },
            v.map(function (e, n) {
              return i.a.createElement(
                'button',
                {
                  key: n,
                  className: 'cell-container',
                  onClick: function () {
                    t(e);
                  },
                },
                e
              );
            })
          );
        },
        E = n(340),
        P = n(2),
        S = n(3),
        O = (n(1529), n(5)),
        C = n(42),
        k = n(33),
        R = n(345);
      function A(e) {
        return (A =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function _(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                L(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : _(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function L(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== A(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || 'default');
                if ('object' !== A(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === A(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function N(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var o,
                i,
                r,
                a,
                l = [],
                c = !0,
                p = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (p = !0), (i = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (p) throw i;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return I(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return I(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var B = function (e) {
          var t,
            n = e.annotation,
            r = e.editor,
            l = N(
              Object(p.e)(function (e) {
                return [
                  S.a.isElementDisabled(e, O.a.RICH_TEXT_POPUP),
                  S.a.isElementOpen(e, O.a.RICH_TEXT_POPUP),
                  S.a.isElementDisabled(e, 'colorPalette'),
                  S.a.getCustomColors(e, 'customColors'),
                  S.a.isInDesktopOnlyMode(e),
                  S.a.isElementOpen(e, O.a.STYLE_POPUP_TEXT_STYLE_CONTAINER),
                  S.a.isElementOpen(e, O.a.STYLE_POPUP_COLORS_CONTAINER),
                  S.a.getFonts(e),
                  !S.a.isElementDisabled(e, O.a.LEGACY_RICH_TEXT_POPUP),
                ];
              }, p.c),
              9
            ),
            d = l[0],
            g = l[1],
            y = l[2],
            v = l[3],
            A = l[4],
            _ = l[5],
            I = l[6],
            B = l[7],
            H = l[8],
            D = N(Object(o.useState)(!1), 2),
            Y = D[0],
            U = D[1],
            F = N(Object(o.useState)({ left: 0, top: 0 }), 2),
            M = F[0],
            X = F[1],
            z = N(Object(o.useState)({ x: 0, y: 0 }), 2),
            V = z[0],
            W = z[1],
            G = N(Object(o.useState)({}), 2),
            J = G[0],
            q = G[1],
            K = Object(o.useRef)(null),
            Z = Object(o.useRef)(null),
            $ = Object(o.useRef)(null),
            Q = Object(o.useRef)({}),
            ee = Object(p.d)(),
            te = Object(o.useRef)();
          Object(o.useEffect)(function () {
            return (
              ee(P.a.disableElements([O.a.ANNOTATION_STYLE_POPUP])),
              function () {
                ee(P.a.enableElements([O.a.ANNOTATION_STYLE_POPUP]));
              }
            );
          }, []),
            Object(o.useEffect)(function () {
              var e = function (e) {
                  e && Z.current && q(oe(e));
                },
                t = function () {
                  var e, t;
                  if (
                    null !== (e = $.current) &&
                    void 0 !== e &&
                    e.isAutoSized() &&
                    K.current
                  ) {
                    var n = w($.current, K);
                    X(n);
                  }
                  q(
                    oe(
                      null === (t = Z.current) || void 0 === t
                        ? void 0
                        : t.getSelection()
                    )
                  );
                };
              return (
                f.a.addEventListener('editorSelectionChanged', e),
                f.a.addEventListener('editorTextChanged', t),
                function () {
                  f.a.removeEventListener('editorSelectionChanged', e),
                    f.a.removeEventListener('editorTextChanged', t);
                }
              );
            }, []),
            Object(o.useEffect)(
              function () {
                var e, t, o, i, a, l, c, p, d, s, u, m;
                W({ x: 0, y: 0 }), (Z.current = r), ($.current = n);
                var h = 'solid';
                try {
                  h =
                    'dash' === n.Style
                      ? ''.concat(n.Style, ',').concat(n.Dashes)
                      : n.Style;
                } catch (e) {
                  console.error(e);
                }
                var x = n.getRichTextStyle();
                (Q.current = {
                  Font: n.Font,
                  FontSize: n.FontSize,
                  TextAlign: n.TextAlign,
                  TextVerticalAlign: n.TextVerticalAlign,
                  bold:
                    null !==
                      (e =
                        'bold' ===
                        (null == x || null === (t = x[0]) || void 0 === t
                          ? void 0
                          : t['font-weight'])) &&
                    void 0 !== e &&
                    e,
                  italic:
                    null !==
                      (o =
                        'italic' ===
                        (null == x || null === (i = x[0]) || void 0 === i
                          ? void 0
                          : i['font-style'])) &&
                    void 0 !== o &&
                    o,
                  underline:
                    (null == x ||
                    null === (a = x[0]) ||
                    void 0 === a ||
                    null === (l = a['text-decoration']) ||
                    void 0 === l
                      ? void 0
                      : l.includes('underline')) ||
                    (null == x ||
                    null === (c = x[0]) ||
                    void 0 === c ||
                    null === (p = c['text-decoration']) ||
                    void 0 === p
                      ? void 0
                      : p.includes('word')),
                  strikeout:
                    null !==
                      (d =
                        null == x ||
                        null === (s = x[0]) ||
                        void 0 === s ||
                        null === (u = s['text-decoration']) ||
                        void 0 === u
                          ? void 0
                          : u.includes('line-through')) &&
                    void 0 !== d &&
                    d,
                  StrokeStyle: h,
                }),
                  q(
                    oe(
                      null === (m = Z.current) || void 0 === m
                        ? void 0
                        : m.getSelection()
                    )
                  ),
                  te.current &&
                    (Z.current.setSelection(te.current), (te.current = null));
              },
              [n, r]
            ),
            Object(o.useEffect)(
              function () {
                var e = function () {
                  ee(P.a.closeElements([O.a.RICH_TEXT_POPUP])),
                    (Z.current = null),
                    ($.current = null);
                };
                return (
                  f.a.addEventListener('editorBlur', e),
                  function () {
                    f.a.removeEventListener('editorBlur', e);
                  }
                );
              },
              [ee]
            );
          var ne = function () {
            if (K.current) {
              var e = w(n, K);
              X(e);
            }
          };
          Object(o.useLayoutEffect)(
            function () {
              ne();
            },
            [n]
          ),
            Object(o.useLayoutEffect)(
              function () {
                var e = s()(function () {
                    K.current && ne();
                  }, 100),
                  t = f.a.getDocumentViewer().getScrollViewElement();
                return (
                  null == t || t.addEventListener('scroll', e),
                  function () {
                    return null == t
                      ? void 0
                      : t.removeEventListener('scroll', e);
                  }
                );
              },
              [n, Y]
            );
          var oe = function (e) {
              if (!e) return {};
              var t = Z.current.getFormat(e.index, e.length);
              if ('string' == typeof t.color)
                t.color = new window.Core.Annotations.Color(t.color);
              else if (Array.isArray(t.color)) {
                var n = new window.Core.Annotations.Color(
                  t.color[t.color.length - 1]
                );
                t.color = n;
              } else t.color || (t.color = $.current.TextColor);
              return t;
            },
            ie = function (e) {
              return function () {
                var t = Z.current.getSelection(),
                  n = t.index,
                  o = t.length;
                if (0 === o) {
                  (te.current = { index: n, length: o }), Z.current.selectAll();
                  var i = Z.current.getSelection();
                  (n = i.index), (o = i.length);
                }
                var r = Z.current.getFormat(n, o);
                ae(e, !r[e]);
              };
            },
            re = function (e, t) {
              ae('color', t.toHexString());
            },
            ae = function (e, t) {
              var n;
              null === (n = Z.current) || void 0 === n || n.format(e, t),
                'color' === e && (t = new window.Core.Annotations.Color(t)),
                q(j(j({}, J), {}, L({}, e, t))),
                null !== te.current &&
                  (Z.current.setSelection(te.current, 0), (te.current = null));
            },
            le = function (e, t) {
              var n = t.x,
                o = t.y;
              W({ x: n, y: o });
            },
            ce =
              (L((t = {}), O.a.STYLE_POPUP_TEXT_STYLE_CONTAINER, _),
              L(t, O.a.STYLE_POPUP_COLORS_CONTAINER, I),
              t),
            pe = function (e) {
              ee(ce[e] ? P.a.closeElement(e) : P.a.openElement(e));
            },
            de = function () {
              return pe(O.a.STYLE_POPUP_TEXT_STYLE_CONTAINER);
            },
            se = function () {
              return pe(O.a.STYLE_POPUP_COLORS_CONTAINER);
            };
          return (
            (Q.current.bold = J.bold),
            (Q.current.italic = J.italic),
            (Q.current.underline = J.underline),
            (Q.current.strikeout = J.strike),
            d || (Object(b.l)() && !A)
              ? null
              : i.a.createElement(
                  a.a,
                  {
                    position: V,
                    onDrag: le,
                    onStop: le,
                    enableUserSelectHack: !1,
                    cancel:
                      '.Button, .cell, .mathSymbolsContainer, .Dropdown, .Dropdown__item',
                    onMouseDown: function (e) {
                      'touchstart' !== e.type && e.preventDefault();
                    },
                  },
                  i.a.createElement(
                    'div',
                    {
                      className: c()({
                        Popup: !0,
                        RichTextPopup: !0,
                        open: g,
                        closed: !g,
                        legacy: H,
                      }),
                      ref: K,
                      'data-element': O.a.RICH_TEXT_POPUP,
                      style: j({}, M),
                    },
                    H
                      ? i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            u.a,
                            {
                              className: 'rich-text-format-legacy',
                              dataElement: 'richTextFormats',
                            },
                            i.a.createElement(h.a, {
                              isActive: J.bold,
                              dataElement: 'richTextBoldButton',
                              onClick: ie('bold'),
                              img: 'icon-text-bold',
                              title: 'option.richText.bold',
                            }),
                            i.a.createElement(h.a, {
                              isActive: J.italic,
                              dataElement: 'richTextItalicButton',
                              onClick: ie('italic'),
                              img: 'icon-text-italic',
                              title: 'option.richText.italic',
                            }),
                            i.a.createElement(h.a, {
                              isActive: J.underline,
                              dataElement: 'richTextUnderlineButton',
                              onClick: ie('underline'),
                              img: 'ic_annotation_underline_black_24px',
                              title: 'option.richText.underline',
                            }),
                            i.a.createElement(h.a, {
                              isActive: J.strike,
                              dataElement: 'richTextStrikeButton',
                              onClick: ie('strike'),
                              img: 'ic_annotation_strikeout_black_24px',
                              title: 'option.richText.strikeout',
                            }),
                            i.a.createElement(h.a, {
                              dataElement: 'mathSymbolsButton',
                              onClick: function () {
                                U(!Y);
                              },
                              img: 'ic_thumbnails_grid_black_24px',
                              title: 'option.mathSymbols',
                            })
                          ),
                          i.a.createElement(x.a, { style: { paddingTop: 0 } })
                        )
                      : i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            'div',
                            {
                              className: 'collapsible-menu',
                              onClick: de,
                              onTouchStart: de,
                              role: 'toolbar',
                            },
                            i.a.createElement(
                              'div',
                              { className: 'menu-title' },
                              C.a.t('option.stylePopup.textStyle')
                            ),
                            i.a.createElement(k.a, {
                              glyph: 'icon-chevron-'.concat(_ ? 'up' : 'down'),
                            })
                          ),
                          _ &&
                            i.a.createElement(
                              'div',
                              { className: 'menu-items' },
                              i.a.createElement(R.a, {
                                fonts: B,
                                onPropertyChange: function (e, t) {
                                  var n = Z.current.getSelection(),
                                    o = n.index,
                                    i = n.length,
                                    r = $.current;
                                  (r[e] = t),
                                    Z.current.blur(),
                                    setTimeout(function () {
                                      (te.current = { index: o, length: i }),
                                        f.a
                                          .getAnnotationManager()
                                          .getEditBoxManager()
                                          .focusBox(r);
                                    }, 0);
                                },
                                onRichTextStyleChange: function (e) {
                                  ie(
                                    {
                                      'font-weight': 'bold',
                                      'font-style': 'italic',
                                      underline: 'underline',
                                      'line-through': 'strike',
                                    }[e]
                                  )();
                                },
                                properties: Q.current,
                                stateless: !0,
                              })
                            ),
                          i.a.createElement('div', { className: 'divider' }),
                          !y &&
                            i.a.createElement(
                              'div',
                              {
                                className: 'collapsible-menu',
                                onClick: se,
                                onTouchStart: se,
                                role: 'toolbar',
                              },
                              i.a.createElement(
                                'div',
                                { className: 'menu-title' },
                                C.a.t('option.stylePopup.colors')
                              ),
                              i.a.createElement(k.a, {
                                glyph: 'icon-chevron-'.concat(
                                  I ? 'up' : 'down'
                                ),
                              })
                            )
                        ),
                    !y &&
                      (H || I) &&
                      i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(m.a, {
                          colorMapKey: 'freeText',
                          color: J.color,
                          property: 'TextColor',
                          onStyleChange: re,
                          hasPadding: !0,
                        }),
                        v.length > 0 &&
                          i.a.createElement(E.a, {
                            color: J.color,
                            property: 'TextColor',
                            onStyleChange: re,
                            enableEdit: !1,
                          })
                      ),
                    Y &&
                      i.a.createElement(T, {
                        onClickHandler: function (e) {
                          var t = Z.current.getSelection(),
                            n = t.index,
                            o = t.length;
                          o > 0 && Z.current.deleteText(n, o),
                            Z.current.insertText(n, e),
                            Z.current.setSelection(n + 1);
                        },
                        maxHeight: 150,
                      })
                  )
                )
          );
        },
        H = i.a.memo(B);
      t.default = H;
    },
  },
]);
//# sourceMappingURL=30.chunk.js.map
