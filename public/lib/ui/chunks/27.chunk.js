(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    1701: function (e, t, i) {
      var n = i(27),
        o = i(1702);
      'string' == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, '']]);
      var r = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const i = [];
            for (let n = 0; n < t.length; n++) {
              const o = t[n];
              if (0 === n)
                o.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    i.length > 0 &&
                      i.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                o.shadowRoot.appendChild(t), i.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      n(o, r);
      e.exports = o.locals || {};
    },
    1702: function (e, t, i) {
      (t = e.exports = i(28)(!1)).push([
        e.i,
        '.open.ColorPickerOverlay{visibility:visible}.closed.ColorPickerOverlay{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ColorPickerOverlay{position:absolute;z-index:70;justify-content:center;align-items:center}.ColorPickerOverlay:empty{padding:0}.ColorPickerOverlay .buttons{display:flex}.ColorPickerOverlay .Button{margin:4px;width:32px;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPickerOverlay .Button{width:42px;height:42px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPickerOverlay .Button{width:42px;height:42px}}.ColorPickerOverlay .Button:hover{background:var(--popup-button-hover)}.ColorPickerOverlay .Button .Icon{width:18px;height:18px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPickerOverlay .Button .Icon{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPickerOverlay .Button .Icon{width:24px;height:24px}}.is-vertical.ColorPickerOverlay .Button.main-menu-button{width:100%;border-radius:0;justify-content:flex-start;padding-left:var(--padding-small);padding-right:var(--padding-small);margin:0 0 var(--padding-tiny) 0}.is-vertical.ColorPickerOverlay .Button.main-menu-button:first-child{margin-top:var(--padding-tiny)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .is-vertical.ColorPickerOverlay .Button.main-menu-button{width:100%;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .is-vertical.ColorPickerOverlay .Button.main-menu-button{width:100%;height:32px}}.is-vertical.ColorPickerOverlay .Button.main-menu-button .Icon{margin-right:10px}.is-vertical.ColorPickerOverlay .Button.main-menu-button span{white-space:nowrap}@-webkit-keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.ColorPickerOverlay{border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);display:flex;flex-direction:column;padding:16px}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1703: function (e, t, i) {
      var n = i(27),
        o = i(1704);
      'string' == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, '']]);
      var r = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const i = [];
            for (let n = 0; n < t.length; n++) {
              const o = t[n];
              if (0 === n)
                o.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    i.length > 0 &&
                      i.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                o.shadowRoot.appendChild(t), i.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      n(o, r);
      e.exports = o.locals || {};
    },
    1704: function (e, t, i) {
      (t = e.exports = i(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.MainHeader.OfficeEditorTools{padding:0 8px;align-items:center;flex-direction:row}.MainHeader.OfficeEditorTools .HeaderItems{width:auto}.MainHeader.OfficeEditorTools .HeaderItems .Dropdown{margin-left:8px}.MainHeader.OfficeEditorTools .HeaderItems .Dropdown.small-dropdown{width:80px!important}.MainHeader.OfficeEditorTools .HeaderItems .Dropdown.large-dropdown{width:160px!important}.MainHeader.OfficeEditorTools .HeaderItems .Dropdown .picked-option{text-align:left}.MainHeader.OfficeEditorTools .HeaderItems .line-spacing-dropdown .Dropdown__items{top:40px}.MainHeader.OfficeEditorTools .HeaderItems .action-button-wrapper{display:flex;align-items:center;position:relative}.MainHeader.OfficeEditorTools .HeaderItems .action-button-wrapper .more-tools{position:absolute;top:46px;right:6px;width:auto;padding:0}.MainHeader.OfficeEditorTools .Button .Icon svg{vertical-align:middle}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1730: function (e, t, i) {
      'use strict';
      i.r(t);
      i(311),
        i(366),
        i(52),
        i(64),
        i(128),
        i(7),
        i(133),
        i(104),
        i(127),
        i(15),
        i(24),
        i(25),
        i(36),
        i(131),
        i(84),
        i(18),
        i(11),
        i(13),
        i(12),
        i(8),
        i(9),
        i(10),
        i(14),
        i(20),
        i(17),
        i(37),
        i(38),
        i(31),
        i(22),
        i(34),
        i(72),
        i(75),
        i(73);
      var n = i(0),
        o = i.n(n),
        r = i(6),
        a = i(148),
        l = i(246),
        c = i(137),
        d = i(57),
        s = i(5),
        f = i(2),
        u = i(1),
        p = i(3),
        m = i(87),
        g = i(314),
        y = i(340),
        b = i(147),
        h = i(223),
        E = i(19),
        v = i.n(E),
        w = i(23);
      i(1701);
      function O(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != i) {
              var n,
                o,
                r,
                a,
                l = [],
                c = !0,
                d = !1;
              try {
                if (((r = (i = i.call(e)).next), 0 === t)) {
                  if (Object(i) !== i) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = r.call(i)).done) &&
                    (l.push(n.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (d = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != i.return &&
                    ((a = i.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (d) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return x(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === i && e.constructor && (i = e.constructor.name);
            if ('Map' === i || 'Set' === i) return Array.from(e);
            if (
              'Arguments' === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            )
              return x(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function x(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      var S = function (e) {
          var t = e.color,
            i = e.onStyleChange,
            a = e.portalElementId,
            l = void 0 === a ? 'app' : a,
            c = O(
              Object(n.useState)(function () {
                return { left: '555px', right: 'auto', top: 'auto' };
              }),
              2
            ),
            s = c[0],
            u = c[1],
            E = Object(n.useRef)(null),
            x = O(
              Object(r.e)(function (e) {
                return [p.a.isElementOpen(e, 'colorPickerOverlay')];
              }),
              1
            )[0],
            S = Object(r.d)();
          return (
            Object(b.a)(E, function (e) {
              var t = document.querySelector(
                '[data-element="textColorButton"]'
              );
              (null == t ? void 0 : t.contains(e.target)) ||
                S(f.a.closeElements(['colorPickerOverlay']));
            }),
            Object(n.useLayoutEffect)(
              function () {
                if (x) {
                  var e = function () {
                    var e = Object(h.a)('textColorButton', E);
                    u(e);
                  };
                  return (
                    e(),
                    window.addEventListener('resize', e),
                    function () {
                      return window.removeEventListener('resize', e);
                    }
                  );
                }
              },
              [x]
            ),
            Object(m.createPortal)(
              o.a.createElement(
                d.a,
                {
                  'data-element': 'colorPickerOverlay',
                  className: v()({
                    ColorPickerOverlay: !0,
                    Popup: !0,
                    open: x,
                    closed: !x,
                  }),
                  style: s,
                  ref: E,
                },
                o.a.createElement(g.a, {
                  color: t,
                  property: 'TextColor',
                  onStyleChange: i,
                  useMobileMinMaxWidth: !0,
                }),
                o.a.createElement(y.a, {
                  color: t,
                  onStyleChange: i,
                  enableEdit: !0,
                })
              ),
              Object(w.a)().getElementById(l)
            )
          );
        },
        C = i(226),
        k = i(205),
        j = { Single: 1, 1.15: 1.15, 1.5: 1.5, Double: 2 },
        T = 'left',
        A = 'center',
        P = 'right',
        H = 'both',
        I = 'ordered',
        D = 'unordered',
        N = i(174),
        B = i(35);
      i(433), i(1703);
      function F(e) {
        return (F =
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
      function z(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(Object(i), !0).forEach(function (t) {
                R(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : z(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      function R(e, t, i) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== F(e) || null === e) return e;
              var i = e[Symbol.toPrimitive];
              if (void 0 !== i) {
                var n = i.call(e, t || 'default');
                if ('object' !== F(n)) return n;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === F(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function L(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != i) {
              var n,
                o,
                r,
                a,
                l = [],
                c = !0,
                d = !1;
              try {
                if (((r = (i = i.call(e)).next), 0 === t)) {
                  if (Object(i) !== i) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = r.call(i)).done) &&
                    (l.push(n.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (d = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != i.return &&
                    ((a = i.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (d) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return _(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === i && e.constructor && (i = e.constructor.name);
            if ('Map' === i || 'Set' === i) return Array.from(e);
            if (
              'Arguments' === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            )
              return _(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      var V = {
          'Normal Text': { fontSize: '11pt', color: '#000000' },
          Title: { fontSize: '26pt', color: '#000000' },
          Subtitle: { fontSize: '15pt', color: '#666666' },
          'Heading 1': { fontSize: '20pt', color: '#000000' },
          'Heading 2': { fontSize: '16pt', color: '#000000' },
          'Heading 3': { fontSize: '14pt', color: '#434343' },
          'Heading 4': { fontSize: '12pt', color: '#666666' },
          'Heading 5': { fontSize: '11pt', color: '#666666' },
        },
        U = [
          '8',
          '9',
          '10',
          '11',
          '12',
          '14',
          '18',
          '24',
          '30',
          '36',
          '48',
          '60',
          '72',
        ],
        Y = function () {
          B.o || B.i || u.a.getViewerElement().focus();
        },
        G = function (e) {
          var t = e.cursorProperties,
            i = e.isBold,
            n = e.isItalic,
            r = e.isUnderline;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(l.a, {
              isActive: i,
              onClick: function () {
                u.a.getOfficeEditor().isTextSelected()
                  ? u.a.getOfficeEditor().toggleSelectedTextStyle('bold')
                  : u.a.getOfficeEditor().setCursorStyle({ bold: !t.bold }),
                  Y();
              },
              dataElement: 'office-editor-bold',
              title: 'officeEditor.bold',
              img: 'icon-text-bold',
            }),
            o.a.createElement(l.a, {
              isActive: n,
              onClick: function () {
                u.a.getOfficeEditor().isTextSelected()
                  ? u.a.getOfficeEditor().toggleSelectedTextStyle('italic')
                  : u.a.getOfficeEditor().setCursorStyle({ italic: !t.italic }),
                  Y();
              },
              dataElement: 'office-editor-italic',
              title: 'officeEditor.italic',
              img: 'icon-text-italic',
            }),
            o.a.createElement(l.a, {
              isActive: r,
              onClick: function () {
                u.a.getOfficeEditor().isTextSelected()
                  ? u.a.getOfficeEditor().toggleSelectedTextStyle('underline')
                  : u.a
                      .getOfficeEditor()
                      .setCursorStyle({
                        underline: 'none' === t.underlineStyle,
                      }),
                  Y();
              },
              dataElement: 'office-editor-underline',
              title: 'officeEditor.underline',
              img: 'icon-text-underline',
            })
          );
        },
        W = function (e) {
          var t = e.justification;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(l.a, {
              isActive: t === T,
              dataElement: 'office-editor-left-align',
              title: 'officeEditor.leftAlign',
              img: 'icon-menu-left-align',
              onClick: function () {
                u.a
                  .getOfficeEditor()
                  .updateParagraphStyle({ justification: 'left' }),
                  u.a
                    .getOfficeEditor()
                    .setCursorStyle({ justification: 'left' }),
                  Y(),
                  u.a.getDocumentViewer().clearSelection();
              },
            }),
            o.a.createElement(l.a, {
              isActive: t === A,
              dataElement: 'office-editor-center-align',
              title: 'officeEditor.centerAlign',
              img: 'icon-menu-centre-align',
              onClick: function () {
                u.a
                  .getOfficeEditor()
                  .updateParagraphStyle({ justification: 'center' }),
                  u.a
                    .getOfficeEditor()
                    .setCursorStyle({ justification: 'center' }),
                  Y(),
                  u.a.getDocumentViewer().clearSelection();
              },
            }),
            o.a.createElement(l.a, {
              isActive: t === P,
              dataElement: 'office-editor-right-align',
              title: 'officeEditor.rightAlign',
              img: 'icon-menu-right-align',
              onClick: function () {
                u.a
                  .getOfficeEditor()
                  .updateParagraphStyle({ justification: 'right' }),
                  u.a
                    .getOfficeEditor()
                    .setCursorStyle({ justification: 'right' }),
                  Y(),
                  u.a.getDocumentViewer().clearSelection();
              },
            }),
            o.a.createElement(l.a, {
              isActive: t === H,
              dataElement: 'office-editor-justify',
              title: 'officeEditor.justify',
              img: 'icon-menu-both-align',
              onClick: function () {
                u.a
                  .getOfficeEditor()
                  .updateParagraphStyle({ justification: 'both' }),
                  u.a
                    .getOfficeEditor()
                    .setCursorStyle({ justification: 'both' }),
                  Y(),
                  u.a.getDocumentViewer().clearSelection();
              },
            })
          );
        },
        K = function (e) {
          var t = e.listType;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(l.a, {
              isActive: t === D,
              dataElement: 'office-editor-bullet-list',
              title: 'officeEditor.bulletList',
              img: 'icon-office-editor-bullet-list',
              onClick: function () {
                u.a.getOfficeEditor().toggleListSelection(D), Y();
              },
            }),
            o.a.createElement(l.a, {
              isActive: t === I,
              dataElement: 'office-editor-number-list',
              title: 'officeEditor.numberList',
              img: 'icon-office-number-list',
              onClick: function () {
                u.a.getOfficeEditor().toggleListSelection(I), Y();
              },
            })
          );
        };
      t.default = function () {
        var e = Object(r.d)(),
          t = L(
            Object(r.e)(function (e) {
              return [
                p.a.isElementOpen(e, s.a.OFFICE_EDITOR_TOOLS_HEADER),
                p.a.getOfficeEditorCursorProperties(e),
                p.a.getOfficeEditorSelectionProperties(e),
                p.a.getAvailableFontFaces(e),
                p.a.getActiveTheme(e),
                p.a.getCSSFontValues(e),
              ];
            }, r.c),
            6
          ),
          i = t[0],
          m = t[1],
          g = t[2],
          y = t[3],
          b = t[4],
          h = t[5],
          E = L(Object(n.useState)(0), 2),
          v = E[0],
          w = E[1],
          O = L(Object(n.useState)(0), 2),
          x = O[0],
          T = O[1],
          A = L(Object(n.useState)(6), 2),
          P = A[0],
          H = A[1],
          I = L(Object(n.useState)(!1), 2),
          D = I[0],
          B = I[1];
        Object(n.useEffect)(function () {
          var t,
            i,
            n = function (t) {
              e(f.a.setOfficeEditorCursorProperties(t));
            },
            o = function (t) {
              e(f.a.setOfficeEditorSelectionProperties(t));
            };
          return (
            null === (t = u.a.getDocument()) ||
              void 0 === t ||
              t.addEventListener('cursorPropertiesUpdated', n),
            null === (i = u.a.getDocument()) ||
              void 0 === i ||
              i.addEventListener('selectionPropertiesUpdated', o),
            function () {
              var e, t;
              null === (e = u.a.getDocument()) ||
                void 0 === e ||
                e.removeEventListener('selectionPropertiesUpdated', o),
                null === (t = u.a.getDocument()) ||
                  void 0 === t ||
                  t.removeEventListener('cursorPropertiesUpdated', n);
            }
          );
        }, []),
          Object(n.useEffect)(
            function () {
              m.fontFace &&
                !y.includes(m.fontFace) &&
                e(f.a.addOfficeEditorAvailableFontFace(m.fontFace));
            },
            [y, m]
          ),
          Object(n.useEffect)(
            function () {
              if (0 !== v && 0 !== x) {
                var e = v - 16;
                H(
                  e >= x
                    ? 6
                    : e < x && e >= x - 121 + 77
                      ? 5
                      : e < x - 121 + 77 && e >= x - 121 - 209 + 77 && e >= 858
                        ? 4
                        : 3
                );
              }
            },
            [v, x]
          );
        var F,
          z = u.a.getOfficeEditor().isTextSelected(),
          R = z ? g.bold : m.bold,
          _ = z ? g.italic : m.italic,
          Y = z ? 'single' === g.underlineStyle : 'single' === m.underlineStyle,
          J = z ? g.fontFace : m.fontFace,
          $ = z ? g.pointSize : m.pointSize,
          q = void 0 === $ ? void 0 : $.toString(),
          Q = z ? g.justification : m.justification,
          X = (function (e, t) {
            var i = e / t;
            switch (
              Object.values(j).reduce(function (e, t) {
                var n = Math.abs(e - i),
                  o = Math.abs(t - i);
                return n === o ? (e < t ? e : t) : o < n ? t : e;
              })
            ) {
              case 1:
                return 'Single';
              case 1.15:
                return '1.15';
              case 1.5:
                return '1.5';
              case 2:
                return 'Double';
              default:
                return 'Single';
            }
          })(z ? g.lineHeight : m.lineHeight, m.fontPointSize || 11),
          Z = z ? g.listType : m.listType,
          ee = b === k.a.LIGHT,
          te = (F = m.color)
            ? new window.Core.Annotations.Color(F.r, F.g, F.b, 1)
            : new window.Core.Annotations.Color(0, 0, 0, 1),
          ie = ee
            ? 'rgba(255,255,255,1)' === te.toString()
            : 'rgba(0,0,0,1)' === te.toString(),
          ne = function (e) {
            var t = e.paragraphTextStyle || e,
              i = t.pointSize,
              n = t.color,
              o = 'Normal Text';
            if (!i || !n) return o;
            var r = ''.concat(i, 'pt'),
              a = '#000000';
            return (
              a && (a = Object(C.c)(n.r, n.g, n.b).slice(0, -2)),
              Object.keys(V).forEach(function (e) {
                V[e].fontSize === r && V[e].color === a && (o = e);
              }),
              o
            );
          };
        return i
          ? o.a.createElement(
              d.a,
              {
                dataElement: s.a.OFFICE_EDITOR_TOOLS_HEADER,
                className: 'HeaderToolsContainer',
              },
              o.a.createElement(
                N.a,
                {
                  bounds: !0,
                  onResize: function (e) {
                    var t = e.bounds;
                    w(t.width);
                  },
                },
                function (t) {
                  var i = t.measureRef;
                  return o.a.createElement(
                    'div',
                    { className: 'MainHeader Tools OfficeEditorTools', ref: i },
                    o.a.createElement(
                      N.a,
                      {
                        bounds: !0,
                        onResize: function (e) {
                          var t = e.bounds;
                          0 === x && T(t.width);
                        },
                      },
                      function (t) {
                        var i = t.measureRef;
                        return o.a.createElement(
                          'div',
                          { className: 'HeaderItems', ref: i },
                          o.a.createElement(a.a, {
                            items: Object.keys(V),
                            onOpened: function () {
                              return B(!1);
                            },
                            onClickItem: function (e) {
                              var t = V[e],
                                i = parseInt(t.fontSize, 10),
                                n = new window.Core.Annotations.Color(t.color),
                                o = {
                                  bold: !1,
                                  italic: !1,
                                  underline: !1,
                                  pointSize: i,
                                  color: { r: n.R, g: n.G, b: n.B, a: 255 },
                                };
                              u.a
                                .getOfficeEditor()
                                .updateParagraphStyle({ textStyle: o }),
                                u.a.getOfficeEditor().setCursorStyle(o),
                                setTimeout(function () {
                                  u.a.getViewerElement().focus();
                                }),
                                u.a.getDocumentViewer().clearSelection();
                            },
                            getCustomItemStyle: function (e) {
                              return M(
                                M({}, V[e]),
                                {},
                                {
                                  padding: '20px 10px',
                                  color: 'var(--gray-12)',
                                }
                              );
                            },
                            applyCustomStyleToButton: !1,
                            currentSelectionKey: ne(m),
                            className: 'large-dropdown',
                            dataElement: 'office-editor-text-format',
                          }),
                          o.a.createElement(a.a, {
                            items: y,
                            onOpened: function () {
                              return B(!1);
                            },
                            onClickItem: function (e) {
                              u.a.getOfficeEditor().isTextSelected() &&
                                u.a
                                  .getOfficeEditor()
                                  .updateSelectionStyle({ fontFace: e }),
                                u.a
                                  .getOfficeEditor()
                                  .setCursorStyle({ fontFace: e }),
                                setTimeout(function () {
                                  u.a.getViewerElement().focus();
                                });
                            },
                            getCustomItemStyle: function (e) {
                              return M({}, h[e]);
                            },
                            maxHeight: 500,
                            customDataValidator: function (e) {
                              return y.includes(e);
                            },
                            className: 'large-dropdown',
                            dataElement: 'office-editor-font',
                            currentSelectionKey: J,
                            hasInput: !0,
                          }),
                          o.a.createElement(a.a, {
                            items: U,
                            onOpened: function () {
                              return B(!1);
                            },
                            onClickItem: function (e) {
                              var t = parseInt(e, 10);
                              isNaN(t) && (t = 11),
                                t > 72 && (t = 72),
                                u.a.getOfficeEditor().isTextSelected() &&
                                  u.a
                                    .getOfficeEditor()
                                    .updateSelectionStyle({ pointSize: t }),
                                u.a
                                  .getOfficeEditor()
                                  .setCursorStyle({ pointSize: t }),
                                setTimeout(function () {
                                  u.a.getViewerElement().focus();
                                });
                            },
                            currentSelectionKey: q,
                            className: 'small-dropdown',
                            dataElement: 'office-editor-font-size',
                            hasInput: !0,
                            isSearchEnabled: !1,
                          }),
                          P >= 4 &&
                            o.a.createElement(
                              o.a.Fragment,
                              null,
                              o.a.createElement('div', {
                                className: 'divider',
                              }),
                              o.a.createElement(G, {
                                cursorProperties: m,
                                isBold: R,
                                isItalic: _,
                                isUnderline: Y,
                              })
                            ),
                          o.a.createElement('div', { className: 'divider' }),
                          o.a.createElement(c.a, {
                            onClick: function () {
                              return B(!1);
                            },
                            dataElement: 'textColorButton',
                            title: 'officeEditor.textColor',
                            img: 'icon-office-editor-circle',
                            element: 'colorPickerOverlay',
                            color: te.toString(),
                            iconClassName: ie ? 'icon-border' : '',
                          }),
                          o.a.createElement(S, {
                            onStyleChange: function (t, i) {
                              var n = { r: i.R, g: i.G, b: i.B, a: 255 };
                              u.a.getOfficeEditor().isTextSelected() &&
                                u.a
                                  .getOfficeEditor()
                                  .updateSelectionStyle({ fontColor: n }),
                                u.a
                                  .getOfficeEditor()
                                  .setCursorStyle({ fontColor: n }),
                                e(f.a.closeElements(['colorPickerOverlay'])),
                                u.a.getViewerElement().focus();
                            },
                            color: te,
                          }),
                          P >= 5 &&
                            o.a.createElement(
                              o.a.Fragment,
                              null,
                              o.a.createElement('div', {
                                className: 'divider',
                              }),
                              o.a.createElement(W, { justification: Q })
                            ),
                          o.a.createElement('div', { className: 'divider' }),
                          o.a.createElement(a.a, {
                            items: Object.keys(j),
                            onClickItem: function (e) {
                              var t = j[e] * (m.pointSize || 11);
                              u.a
                                .getOfficeEditor()
                                .updateParagraphStyle({ lineSpacing: t }),
                                u.a.getViewerElement().focus(),
                                u.a.getDocumentViewer().clearSelection();
                            },
                            currentSelectionKey: X,
                            className: 'small-dropdown line-spacing-dropdown',
                            dataElement: 'office-editor-line-spacing',
                            displayButton: function (e) {
                              return o.a.createElement(l.a, {
                                title: 'officeEditor.lineSpacing',
                                img: 'icon-office-editor-line-spacing',
                                isActive: e,
                                onClick: function () {
                                  return B(!1);
                                },
                              });
                            },
                          }),
                          6 === P &&
                            o.a.createElement(
                              o.a.Fragment,
                              null,
                              o.a.createElement('div', {
                                className: 'divider',
                              }),
                              o.a.createElement(K, { listType: Z })
                            ),
                          P < 6 &&
                            o.a.createElement(
                              o.a.Fragment,
                              null,
                              o.a.createElement('div', {
                                className: 'divider',
                              }),
                              o.a.createElement(
                                'div',
                                { className: 'action-button-wrapper' },
                                o.a.createElement(l.a, {
                                  className: 'tool-group-button',
                                  isActive: D,
                                  dataElement: 'office-editor-more-tools',
                                  title: 'action.more',
                                  img: 'icon-tools-more-vertical',
                                  onClick: function () {
                                    return B(!D);
                                  },
                                }),
                                D &&
                                  o.a.createElement(
                                    'div',
                                    {
                                      className:
                                        'more-tools Header Tools OfficeEditorTools',
                                    },
                                    o.a.createElement(
                                      'div',
                                      { className: 'HeaderItems' },
                                      P < 4 &&
                                        o.a.createElement(
                                          o.a.Fragment,
                                          null,
                                          o.a.createElement(G, {
                                            cursorProperties: m,
                                            isBold: R,
                                            isItalic: _,
                                            isUnderline: Y,
                                          }),
                                          o.a.createElement('div', {
                                            className: 'divider',
                                          })
                                        ),
                                      P < 5 &&
                                        o.a.createElement(
                                          o.a.Fragment,
                                          null,
                                          o.a.createElement(W, {
                                            justification: Q,
                                          }),
                                          o.a.createElement('div', {
                                            className: 'divider',
                                          })
                                        ),
                                      P < 6 &&
                                        o.a.createElement(K, { listType: Z })
                                    )
                                  )
                              )
                            )
                        );
                      }
                    )
                  );
                }
              )
            )
          : null;
      };
    },
  },
]);
//# sourceMappingURL=27.chunk.js.map
