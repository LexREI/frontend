(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    1402: function (t, e, n) {
      'use strict';
      n(24), n(7);
      var o = n(1);
      e.a = function (t) {
        var e = {};
        return (
          [
            'FillColor',
            'StrokeColor',
            'TextColor',
            'Opacity',
            'StrokeThickness',
            'FontSize',
            'Precision',
            'Scale',
            'Style',
          ].forEach(function (n) {
            var o = t[n];
            null != o && (e[n] = t[n]);
          }),
          'highlight' !== t.elementName ||
            o.a.isBlendModeSupported(t.BlendMode) ||
            (e.Opacity = null),
          t.isFormFieldPlaceholder() && (e.Opacity = null),
          e
        );
      };
    },
    1403: function (t, e, n) {
      var o = n(27),
        i = n(1404);
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
    1404: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}@-webkit-keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .AnnotationStylePopup{width:100%;margin:0;position:relative;max-width:none;border-radius:4px 4px 0 0;border:0;padding-bottom:24px;box-shadow:none}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .AnnotationStylePopup{width:100%;margin:0;position:relative;max-width:none;border-radius:4px 4px 0 0;border:0;padding-bottom:24px;box-shadow:none}}.AnnotationStylePopup .back-to-menu-container{margin-top:var(--padding-medium);margin-right:var(--padding-medium);margin-left:var(--padding-medium);padding-bottom:var(--padding-small);border-bottom:1px solid var(--border)}.AnnotationStylePopup .Button.back-to-menu-button{margin:0;width:100%;height:32px;border-radius:0;justify-content:flex-start}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .AnnotationStylePopup .Button.back-to-menu-button{width:100%;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .AnnotationStylePopup .Button.back-to-menu-button{width:100%;height:32px}}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1438: function (t, e, n) {
      'use strict';
      n(24),
        n(7),
        n(25),
        n(18),
        n(11),
        n(13),
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
        n(22);
      var o = n(0),
        i = n.n(o),
        a = n(4),
        r = n.n(a),
        l = n(6),
        c = n(174),
        u = n(362),
        s = n(339),
        p = n(246),
        d = n(1),
        f = n(1381),
        m = n(236),
        h = n(35),
        y = n(2),
        b = n(3),
        v = n(5);
      n(1403);
      function w(t) {
        return (w =
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
      function g(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' !== w(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(t, e || 'default');
                if ('object' !== w(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' === w(e) ? e : String(e);
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
      function E(t, e) {
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
                c = !0,
                u = !1;
              try {
                if (((a = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (u = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return A(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return A(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function A(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var x = {
          annotations: r.a.array.isRequired,
          style: r.a.object.isRequired,
          properties: r.a.object.isRequired,
          isRedaction: r.a.bool,
          isFreeText: r.a.bool,
          isEllipse: r.a.bool,
          hasBackToMenu: r.a.bool,
          onBackToMenu: r.a.func,
        },
        O = function (t) {
          var e = t.annotations,
            n = t.style,
            o = t.isRedaction,
            a = t.isFreeText,
            r = t.isEllipse,
            w = t.isMeasure,
            A = t.colorMapKey,
            x = t.showLineStyleOptions,
            O = t.properties,
            P = t.hideSnapModeCheckbox,
            S = t.onResize,
            C = t.hasBackToMenu,
            T = t.onBackToMenu,
            k = E(
              Object(l.e)(function (t) {
                return [
                  b.a.isElementDisabled(t, v.a.ANNOTATION_STYLE_POPUP),
                  b.a.isToolDefaultStyleUpdateFromAnnotationPopupEnabled(t),
                ];
              }),
              2
            ),
            N = k[0],
            j = k[1],
            L = Object(l.d)(),
            _ = E(Object(u.a)(), 1)[0],
            D = function (t, n) {
              var o = d.a.getAnnotationManager();
              e.forEach(function (e) {
                (e[t] = n), o.redrawAnnotation(e);
              });
            },
            F = function (t, n) {
              e.forEach(function (e) {
                d.a.setAnnotationStyles(e, g({}, t, n)),
                  j && Object(m.a)(e.ToolName, t, n),
                  ('FontSize' !== t && 'Font' !== t) ||
                    (function (t) {
                      var e = window.Core.Annotations.FreeTextAnnotation;
                      if (
                        t instanceof e &&
                        t.getAutoSizeType() !== e.AutoSizeTypes.NONE
                      ) {
                        var n = d.a.getDocument(),
                          o = t.PageNumber,
                          i = n.getPageInfo(o),
                          a = n.getPageMatrix(o),
                          r = n.getPageRotation(o);
                        t.fitText(i, a, r);
                      }
                    })(e);
              });
            },
            I = function (t, n) {
              e.forEach(function (e) {
                d.a.setAnnotationStyles(e, g({}, t, n)),
                  j && Object(m.a)(e.ToolName, t, n);
              });
            },
            M = function (t, n) {
              e.forEach(function (e) {
                d.a.updateAnnotationRichTextStyle(e, g({}, t, n));
              });
            },
            B = function (t, n) {
              e.forEach(function (e) {
                var o = '';
                if ('start' === t) e.setStartStyle(n), (o = 'StartLineStyle');
                else if ('end' === t) e.setEndStyle(n), (o = 'EndLineStyle');
                else if ('middle' === t) {
                  var i = n.split(','),
                    a = i.shift();
                  (e.Style = a), (e.Dashes = i), (o = 'StrokeStyle');
                }
                j && Object(m.a)(e.ToolName, o, n),
                  d.a.getAnnotationManager().redrawAnnotation(e);
              }),
                d.a
                  .getAnnotationManager()
                  .trigger('annotationChanged', [e, 'modify', {}]);
            },
            R = function (t) {
              Object(h.l)() &&
                t.target === t.currentTarget &&
                L(y.a.closeElement(v.a.ANNOTATION_POPUP));
            },
            U = Object(f.a)('Popup AnnotationStylePopup', t);
          return N
            ? null
            : i.a.createElement(
                c.a,
                {
                  onResize: function () {
                    S && S();
                  },
                },
                function (t) {
                  var e = t.measureRef;
                  return i.a.createElement(
                    'div',
                    {
                      className: U,
                      'data-element': v.a.ANNOTATION_STYLE_POPUP,
                      onClick: R,
                      ref: e,
                    },
                    C &&
                      i.a.createElement(
                        'div',
                        {
                          className: 'back-to-menu-container',
                          'data-element':
                            v.a.ANNOTATION_STYLE_POPUP_BACK_BUTTON_CONTAINER,
                        },
                        i.a.createElement(p.a, {
                          className: 'back-to-menu-button',
                          dataElement: v.a.ANNOTATION_STYLE_POPUP_BACK_BUTTON,
                          label: _('action.backToMenu'),
                          img: 'icon-chevron-left',
                          onClick: T,
                        })
                      ),
                    i.a.createElement(s.a, {
                      hideSnapModeCheckbox: P,
                      colorMapKey: A,
                      style: n,
                      isFreeText: a,
                      isEllipse: r,
                      isMeasure: w,
                      onStyleChange: I,
                      onSliderChange: D,
                      onPropertyChange: F,
                      disableSeparator: !0,
                      properties: O,
                      onRichTextStyleChange: M,
                      isRedaction: o,
                      showLineStyleOptions: x,
                      onLineStyleChange: B,
                    })
                  );
                }
              );
        };
      O.propTypes = x;
      var P = O;
      e.a = P;
    },
    1452: function (t, e, n) {
      var o = n(27),
        i = n(1516);
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
    1514: function (t, e, n) {
      var o = n(27),
        i = n(1515);
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
    1515: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}@-webkit-keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.CalibrationPopup{display:flex;flex-direction:column;align-items:flex-start;padding:12px;width:220px;height:84px;background:#fff;box-shadow:0 0 3px #868e96;border-radius:4px}.CalibrationPopup .pop-switch{margin-top:12px}.CalibrationPopup .pop-switch.ui__choice--disabled .ui__choice__label{color:#cfd4da}.CalibrationPopup .input-container{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;width:196px;height:32px}.CalibrationPopup .input-container .input-field{width:94px;height:32px}.CalibrationPopup .input-container .input-field.invalid-value{border-color:red}.CalibrationPopup .input-container .input-field .Dropdown__wrapper{width:100%;height:100%}.CalibrationPopup .input-container .input-field .Dropdown__wrapper .Dropdown{height:100%;text-align:left}.CalibrationPopup .input-container .input-field .Dropdown__wrapper .Dropdown__items{width:100%}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1516: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        '.open.AnnotationPopup{visibility:visible}.closed.AnnotationPopup{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.AnnotationPopup{position:absolute;z-index:70;display:flex;justify-content:center;align-items:center}.AnnotationPopup:empty{padding:0}.AnnotationPopup .buttons{display:flex}.AnnotationPopup .Button{margin:4px;width:32px;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .AnnotationPopup .Button{width:42px;height:42px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .AnnotationPopup .Button{width:42px;height:42px}}.AnnotationPopup .Button:hover{background:var(--popup-button-hover)}.AnnotationPopup .Button .Icon{width:18px;height:18px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .AnnotationPopup .Button .Icon{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .AnnotationPopup .Button .Icon{width:24px;height:24px}}.is-vertical.AnnotationPopup .Button.main-menu-button{width:100%;border-radius:0;justify-content:flex-start;padding-left:var(--padding-small);padding-right:var(--padding-small);margin:0 0 var(--padding-tiny) 0}.is-vertical.AnnotationPopup .Button.main-menu-button:first-child{margin-top:var(--padding-tiny)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .is-vertical.AnnotationPopup .Button.main-menu-button{width:100%;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .is-vertical.AnnotationPopup .Button.main-menu-button{width:100%;height:32px}}.is-vertical.AnnotationPopup .Button.main-menu-button .Icon{margin-right:10px}.is-vertical.AnnotationPopup .Button.main-menu-button span{white-space:nowrap}@-webkit-keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.AnnotationPopup{position:fixed;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background)}.AnnotationPopup.is-horizontal .container{display:inherit}.AnnotationPopup.is-vertical{flex-direction:column;align-items:flex-start}.shortCuts3D{position:relative}.shortCuts3D .closeButton{position:absolute;right:4px;padding:2px;cursor:pointer;width:20px;text-align:center}.shortCuts3D .row{padding:4px 0;margin:8px 26px 8px 16px}.shortCuts3D .row span{background:#e7ebee;padding:4px 8px;border-radius:4px}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1721: function (t, e, n) {
      'use strict';
      n.r(e);
      n(52),
        n(64),
        n(106),
        n(7),
        n(36),
        n(24),
        n(25),
        n(18),
        n(11),
        n(13),
        n(12),
        n(8),
        n(9),
        n(10),
        n(15),
        n(14),
        n(20),
        n(17),
        n(51),
        n(22),
        n(67),
        n(68),
        n(69),
        n(70),
        n(41),
        n(44),
        n(46),
        n(66);
      var o = n(0),
        i = n.n(o),
        a = n(6),
        r = n(4),
        l = n.n(r),
        c = n(1),
        u = n(312),
        s = n(1402),
        p = n(341),
        d = n(35),
        f = n(362),
        m = n(179),
        h = n(515),
        y = n(30),
        b = n(147),
        v = n(2),
        w = n(3),
        g = n(5),
        E = n(55),
        A = n(23),
        x = (n(32), n(37), n(38), n(31), n(34), n(72), n(75), n(73), n(222)),
        O = n.n(x),
        P = n(19),
        S = n.n(P),
        C = n(1371),
        T = n(246),
        k = n(1438);
      function N(t) {
        return (N =
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
      function j() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ j =
          function () {
            return t;
          };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = 'function' == typeof Symbol ? Symbol : {},
          a = i.iterator || '@@iterator',
          r = i.asyncIterator || '@@asyncIterator',
          l = i.toStringTag || '@@toStringTag';
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, '');
        } catch (t) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, i) {
          var a = e && e.prototype instanceof d ? e : d,
            r = Object.create(a.prototype),
            l = new P(i || []);
          return o(r, '_invoke', { value: E(t, n, l) }), r;
        }
        function s(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = u;
        var p = {};
        function d() {}
        function f() {}
        function m() {}
        var h = {};
        c(h, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          b = y && y(y(S([])));
        b && b !== e && n.call(b, a) && (h = b);
        var v = (m.prototype = d.prototype = Object.create(h));
        function w(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function g(t, e) {
          var i;
          o(this, '_invoke', {
            value: function (o, a) {
              function r() {
                return new e(function (i, r) {
                  !(function o(i, a, r, l) {
                    var c = s(t[i], t, a);
                    if ('throw' !== c.type) {
                      var u = c.arg,
                        p = u.value;
                      return p && 'object' == N(p) && n.call(p, '__await')
                        ? e.resolve(p.__await).then(
                            function (t) {
                              o('next', t, r, l);
                            },
                            function (t) {
                              o('throw', t, r, l);
                            }
                          )
                        : e.resolve(p).then(
                            function (t) {
                              (u.value = t), r(u);
                            },
                            function (t) {
                              return o('throw', t, r, l);
                            }
                          );
                    }
                    l(c.arg);
                  })(o, a, i, r);
                });
              }
              return (i = i ? i.then(r, r) : r());
            },
          });
        }
        function E(t, e, n) {
          var o = 'suspendedStart';
          return function (i, a) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === i) throw a;
              return C();
            }
            for (n.method = i, n.arg = a; ; ) {
              var r = n.delegate;
              if (r) {
                var l = A(r, n);
                if (l) {
                  if (l === p) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === o) throw ((o = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = 'executing';
              var c = s(t, e, n);
              if ('normal' === c.type) {
                if (
                  ((o = n.done ? 'completed' : 'suspendedYield'), c.arg === p)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              'throw' === c.type &&
                ((o = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
            }
          };
        }
        function A(t, e) {
          var n = e.method,
            o = t.iterator[n];
          if (void 0 === o)
            return (
              (e.delegate = null),
              ('throw' === n &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                A(t, e),
                'throw' === e.method)) ||
                ('return' !== n &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              p
            );
          var i = s(o, t.iterator, e.arg);
          if ('throw' === i.type)
            return (
              (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), p
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                p)
              : a
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              p);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function P(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function S(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function e() {
                  for (; ++o < t.length; )
                    if (n.call(t, o)) return (e.value = t[o]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (i.next = i);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = m),
          o(v, 'constructor', { value: m, configurable: !0 }),
          o(m, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = c(m, l, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === f || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, m)
                : ((t.__proto__ = m), c(t, l, 'GeneratorFunction')),
              (t.prototype = Object.create(v)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(g.prototype),
          c(g.prototype, r, function () {
            return this;
          }),
          (t.AsyncIterator = g),
          (t.async = function (e, n, o, i, a) {
            void 0 === a && (a = Promise);
            var r = new g(u(e, n, o, i), a);
            return t.isGeneratorFunction(n)
              ? r
              : r.next().then(function (t) {
                  return t.done ? t.value : r.next();
                });
          }),
          w(v),
          c(v, l, 'Generator'),
          c(v, a, function () {
            return this;
          }),
          c(v, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var o in e) n.push(o);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var o = n.pop();
                  if (o in e) return (t.value = o), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = S),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !t)
              )
                for (var e in this)
                  't' === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function o(n, o) {
                return (
                  (r.type = 'throw'),
                  (r.arg = t),
                  (e.next = n),
                  o && ((e.method = 'next'), (e.arg = void 0)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  r = a.completion;
                if ('root' === a.tryLoc) return o('end');
                if (a.tryLoc <= this.prev) {
                  var l = n.call(a, 'catchLoc'),
                    c = n.call(a, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o];
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, 'finallyLoc') &&
                  this.prev < i.finallyLoc
                ) {
                  var a = i;
                  break;
                }
              }
              a &&
                ('break' === t || 'continue' === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var r = a ? a.completion : {};
              return (
                (r.type = t),
                (r.arg = e),
                a
                  ? ((this.method = 'next'), (this.next = a.finallyLoc), p)
                  : this.complete(r)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), O(n), p;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var i = o.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: S(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      function L(t, e, n, o, i, a, r) {
        try {
          var l = t[a](r),
            c = l.value;
        } catch (t) {
          return void n(t);
        }
        l.done ? e(c) : Promise.resolve(c).then(o, i);
      }
      var _ = function (t) {
        var e = t.onClick,
          n = t.annotation,
          a = t.onDatePickerShow,
          r = Object(o.useRef)(null),
          l = Object(o.useRef)(null);
        return (
          Object(o.useEffect)(function () {
            var t;
            return (
              (function () {
                var o,
                  i =
                    ((o = j().mark(function o() {
                      return j().wrap(function (o) {
                        for (;;)
                          switch ((o.prev = o.next)) {
                            case 0:
                              return (
                                (o.next = 2),
                                window.Core.createDatePicker({
                                  field: r.current,
                                  onClick: e,
                                  container: l.current,
                                  format: n.getDateFormat(),
                                })
                              );
                            case 2:
                              (t = o.sent), a(!0);
                            case 4:
                            case 'end':
                              return o.stop();
                          }
                      }, o);
                    })),
                    function () {
                      var t = this,
                        e = arguments;
                      return new Promise(function (n, i) {
                        var a = o.apply(t, e);
                        function r(t) {
                          L(a, n, i, r, l, 'next', t);
                        }
                        function l(t) {
                          L(a, n, i, r, l, 'throw', t);
                        }
                        r(void 0);
                      });
                    });
                return function () {
                  return i.apply(this, arguments);
                };
              })()(),
              function () {
                t.destroy(), (t = null), a(!1);
              }
            );
          }, []),
          i.a.createElement(
            'div',
            { 'data-element': 'datePickerContainer' },
            i.a.createElement('div', { ref: r }),
            i.a.createElement('div', { ref: l })
          )
        );
      };
      _.propTypes = {
        onClick: l.a.func.isRequired,
        annotation: l.a.object.isRequired,
        onDatePickerShow: l.a.func.isRequired,
      };
      var D = _,
        F = n(1437),
        I = (n(146), n(183), n(1213)),
        M = n(148),
        B = n(153),
        R = n(370);
      n(1514);
      function U(t, e) {
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
                c = !0,
                u = !1;
              try {
                if (((a = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (u = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return Y(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Y(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var G = window.Core.Scale,
        H = function (t) {
          var e = t.Measure.axis[0].factor;
          switch (t.Scale[1][1]) {
            case 'ft-in':
              return (t.getLineLength() * e) / 12;
            case 'in':
            default:
              return t.getLineLength() * e;
          }
        },
        z = { annotation: l.a.shape({ Scale: l.a.arrayOf(l.a.array) }) },
        K = function (t) {
          var e,
            n,
            r = t.annotation,
            l = U(Object(f.a)(), 1)[0],
            u = Object(a.d)(),
            s = U(
              Object(a.e)(function (t) {
                return [w.a.getMeasurementUnits(t), w.a.getCalibrationInfo(t)];
              }, a.c),
              2
            ),
            p = s[0],
            d = s[1],
            m = d.tempScale,
            h = d.isFractionalUnit,
            y = d.defaultUnit,
            b = U(Object(o.useState)(''), 2),
            g = b[0],
            E = b[1],
            A = Object(o.useRef)(null),
            x =
              (null === (e = new G(m).worldScale) || void 0 === e
                ? void 0
                : e.unit) || 'mm',
            O = h
              ? p.to.filter(function (t) {
                  return R.e.includes(t);
                })
              : p.to,
            P = !R.e.includes(x),
            C = h || 'ft-in' === x ? 'text' : 'number',
            T = S()('input-field', {
              'invalid-value': !(
                m &&
                (null === (n = new G(m).worldScale) || void 0 === n
                  ? void 0
                  : n.value) > 0
              ),
            }),
            k = function (t, e) {
              var n,
                o = H(r),
                i = r.Scale,
                a = o / i[1][0],
                l = [i[0][0] * a, i[0][1]],
                c = 'pt' === (n = e) ? 'pt' : R.m.includes(n) ? 'mm' : 'in',
                s = Object(R.c)(l[0], l[1], c);
              u(
                v.a.updateCalibrationInfo({
                  tempScale: ''
                    .concat(s, ' ')
                    .concat(c, ' = ')
                    .concat(t, ' ')
                    .concat(e),
                  isFractionalUnit: h,
                })
              );
            },
            N = function (t) {
              var e;
              k(
                t,
                null === (e = new G(m).worldScale) || void 0 === e
                  ? void 0
                  : e.unit
              );
            },
            j = function () {
              var t,
                e,
                n =
                  null === (t = new G(m).worldScale) || void 0 === t
                    ? void 0
                    : t.value;
              (e =
                h || 'ft-in' === x
                  ? G.getFormattedValue(n, x, h ? 1 / 64 : 1e-4, !1, !0)
                  : ''.concat(n)),
                E(e || '');
            },
            L = Object(o.useRef)(m);
          return (
            Object(o.useEffect)(
              function () {
                L.current = m;
              },
              [m]
            ),
            Object(o.useEffect)(
              function () {
                if (r) {
                  var t = H(r),
                    e = r.Scale[1][1];
                  y ? k(Object(R.c)(t, e, y), y) : k(t, e);
                }
                var n = function (t, e) {
                  if ('modify' === e && 1 === t.length && t[0] === r) {
                    var n,
                      o = H(r),
                      i = r.Scale[1][1],
                      a =
                        null === (n = new G(L.current).worldScale) ||
                        void 0 === n
                          ? void 0
                          : n.unit;
                    a ? k(Object(R.c)(o, i, a), a) : k(o, i);
                  }
                };
                return (
                  c.a.addEventListener('annotationChanged', n),
                  function () {
                    c.a.removeEventListener('annotationChanged', n),
                      c.a.deleteAnnotations([r]);
                  }
                );
              },
              [r]
            ),
            Object(o.useEffect)(
              function () {
                (null == A ? void 0 : A.current) !== document.activeElement &&
                  j();
              },
              [m, h]
            ),
            i.a.createElement(
              'div',
              {
                className: 'CalibrationPopup',
                'data-element': 'calibrationPopup',
              },
              i.a.createElement(
                'div',
                { className: 'input-container' },
                i.a.createElement('input', {
                  className: T,
                  ref: A,
                  type: C,
                  value: g,
                  min: '0',
                  onChange: function (t) {
                    E(t.target.value);
                    var e = t.target.value.trim();
                    if (h) {
                      if ('in' === x) {
                        if (R.k.test(e)) {
                          var n = Object(R.p)(e);
                          if (n > 0) return void N(n);
                        }
                      } else if ('ft-in' === x && R.g.test(e)) {
                        var o = Object(R.o)(e);
                        if (o > 0) return void N(o);
                      }
                    } else if ('ft-in' === x && R.f.test(e)) {
                      var i = Object(R.n)(e);
                      if (i > 0) return void N(i);
                    } else if (R.d.test(e)) {
                      var a = parseFloat(e) || 0;
                      return void N(a);
                    }
                    N(0);
                  },
                  onBlur: function () {
                    j();
                  },
                  placeholder: h
                    ? R.i[x]
                    : 'ft-in' === x
                      ? R.i['ft-in decimal']
                      : '',
                }),
                i.a.createElement(
                  B.a,
                  { content: 'option.measurement.scaleModal.displayUnits' },
                  i.a.createElement(
                    'div',
                    { className: 'input-field' },
                    i.a.createElement(M.a, {
                      dataElement: 'calibrationUnits',
                      items: O,
                      currentSelectionKey: x,
                      onClickItem: function (t) {
                        var e;
                        k(
                          null === (e = new G(m).worldScale) || void 0 === e
                            ? void 0
                            : e.value,
                          t
                        );
                      },
                    })
                  )
                )
              ),
              i.a.createElement(
                B.a,
                {
                  content: l(
                    'option.measurement.scaleModal.fractionUnitsTooltip'
                  ),
                },
                i.a.createElement(
                  'div',
                  null,
                  i.a.createElement(I.a, {
                    isSwitch: !0,
                    leftLabel: !0,
                    label: l('option.measurement.scaleModal.fractionalUnits'),
                    disabled: P,
                    checked: h,
                    id: 'calibration-popup-fractional-units',
                    className: 'pop-switch',
                    onChange: function () {
                      u(
                        v.a.updateCalibrationInfo({
                          tempScale: m,
                          isFractionalUnit: !h,
                        })
                      );
                    },
                  })
                )
              )
            )
          );
        };
      K.propTypes = z;
      var V = K,
        W = n(61);
      n(1452);
      function q(t) {
        return (q =
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
      function $(t, e) {
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
      function X(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? $(Object(n), !0).forEach(function (e) {
                J(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : $(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
        }
        return t;
      }
      function J(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' !== q(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(t, e || 'default');
                if ('object' !== q(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' === q(e) ? e : String(e);
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
      function Q(t, e) {
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
                c = !0,
                u = !1;
              try {
                if (((a = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (u = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return Z(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Z(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Z(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var tt = {
          isMobile: l.a.bool,
          isIE: l.a.bool,
          isOpen: l.a.bool,
          isRightClickMenu: l.a.bool,
          isNotesPanelOpenOrActive: l.a.bool,
          isRichTextPopupOpen: l.a.bool,
          isLinkModalOpen: l.a.bool,
          isContextMenuPopupOpen: l.a.bool,
          focusedAnnotation: l.a.object,
          popupRef: l.a.any,
          position: l.a.object,
          showViewFileButton: l.a.bool,
          onViewFile: l.a.func,
          showCommentButton: l.a.bool,
          onCommentAnnotation: l.a.func,
          isDateFreeTextCanEdit: l.a.bool,
          isDatePickerOpen: l.a.bool,
          handleDateChange: l.a.func,
          onDatePickerShow: l.a.func,
          isCalibrationPopupOpen: l.a.bool,
          showEditStyleButton: l.a.bool,
          isStylePopupOpen: l.a.bool,
          hideSnapModeCheckbox: l.a.bool,
          openEditStylePopup: l.a.func,
          closeEditStylePopup: l.a.func,
          annotationStyle: l.a.object,
          onResize: l.a.func,
          showContentEditButton: l.a.bool,
          onEditContent: l.a.func,
          openContentEditDeleteWarningModal: l.a.func,
          isAppearanceSignature: l.a.bool,
          onClearAppearanceSignature: l.a.func,
          showRedactionButton: l.a.bool,
          onApplyRedaction: l.a.func,
          showGroupButton: l.a.bool,
          onGroupAnnotations: l.a.func,
          showUngroupButton: l.a.bool,
          onUngroupAnnotations: l.a.func,
          showFormFieldButton: l.a.bool,
          onOpenFormField: l.a.func,
          showDeleteButton: l.a.bool,
          onDeleteAnnotation: l.a.func,
          showLinkButton: l.a.bool,
          hasAssociatedLink: l.a.bool,
          linkAnnotationToURL: l.a.func,
          showFileDownloadButton: l.a.bool,
          downloadFileAttachment: l.a.func,
          showAudioPlayButton: l.a.bool,
          handlePlaySound: l.a.func,
          showCalibrateButton: l.a.bool,
          onOpenCalibration: l.a.func,
        },
        et = function (t) {
          var e,
            n,
            a = t.isMobile,
            r = t.isIE,
            l = t.isOpen,
            c = t.isRightClickMenu,
            u = t.isNotesPanelOpenOrActive,
            s = t.isRichTextPopupOpen,
            p = t.isLinkModalOpen,
            d = t.isContextMenuPopupOpen,
            m = t.focusedAnnotation,
            h = t.popupRef,
            y = t.position,
            b = t.showViewFileButton,
            v = t.onViewFile,
            w = t.showCommentButton,
            E = t.onCommentAnnotation,
            x = t.isDateFreeTextCanEdit,
            P = t.isDatePickerOpen,
            N = t.handleDateChange,
            j = t.onDatePickerShow,
            L = t.isCalibrationPopupOpen,
            _ = t.showEditStyleButton,
            I = t.isStylePopupOpen,
            M = t.hideSnapModeCheckbox,
            B = t.openEditStylePopup,
            R = t.closeEditStylePopup,
            U = t.annotationStyle,
            Y = t.onResize,
            G = t.showContentEditButton,
            H = t.onEditContent,
            z = t.openContentEditDeleteWarningModal,
            K = t.isAppearanceSignature,
            q = t.onClearAppearanceSignature,
            $ = t.showRedactionButton,
            J = t.onApplyRedaction,
            Z = t.showGroupButton,
            tt = t.onGroupAnnotations,
            et = t.showUngroupButton,
            nt = t.onUngroupAnnotations,
            ot = t.showFormFieldButton,
            it = t.onOpenFormField,
            at = t.showDeleteButton,
            rt = t.onDeleteAnnotation,
            lt = t.showLinkButton,
            ct = t.hasAssociatedLink,
            ut = t.linkAnnotationToURL,
            st = t.showFileDownloadButton,
            pt = t.downloadFileAttachment,
            dt = t.showAudioPlayButton,
            ft = t.handlePlaySound,
            mt = t.showCalibrateButton,
            ht = t.onOpenCalibration,
            yt = Q(Object(f.a)(), 1)[0],
            bt = Q(Object(o.useState)(!1), 2),
            vt = bt[0],
            wt = bt[1],
            gt = x ? 'action.changeDate' : 'action.comment',
            Et = x
              ? 'icon-tool-fill-and-sign-calendar'
              : 'icon-header-chat-line',
            At = m instanceof window.Core.Annotations.Model3DAnnotation && !a,
            xt = m instanceof window.Core.Annotations.RectangleAnnotation,
            Ot = m instanceof window.Core.Annotations.EllipseAnnotation,
            Pt = m instanceof window.Core.Annotations.PolygonAnnotation,
            St =
              m instanceof window.Core.Annotations.FreeTextAnnotation &&
              (m.getIntent() ===
                window.Core.Annotations.FreeTextAnnotation.Intent.FreeText ||
                m.getIntent() ===
                  window.Core.Annotations.FreeTextAnnotation.Intent
                    .FreeTextCallout),
            Ct = m instanceof window.Core.Annotations.RedactionAnnotation,
            Tt = Object(W.g)(m),
            kt = !!m.Measure,
            Nt = Object(W.e)(Object(W.i)(m.ToolName)).hasLineEndings,
            jt =
              !window.isApryseWebViewerWebComponent ||
              (null === (e = document.activeElement) || void 0 === e
                ? void 0
                : e.shadowRoot) === Object(A.a)(),
            Lt = 'solid',
            _t =
              null === (n = m.isContentEditPlaceholder) || void 0 === n
                ? void 0
                : n.call(m);
          try {
            Lt =
              'dash' === m.Style
                ? ''.concat(m.Style, ',').concat(m.Dashes)
                : m.Style;
          } catch (t) {
            console.error(t);
          }
          var Dt = {};
          if (
            (Nt &&
              (Dt = {
                StartLineStyle: m.getStartStyle(),
                EndLineStyle: m.getEndStyle(),
                StrokeStyle: Lt,
              }),
            (xt || Ot || Pt) && (Dt = { StrokeStyle: Lt }),
            St)
          ) {
            var Ft,
              It,
              Mt,
              Bt,
              Rt,
              Ut,
              Yt,
              Gt,
              Ht,
              zt,
              Kt,
              Vt = m.getRichTextStyle();
            Dt = {
              Font: m.Font,
              FontSize: m.FontSize,
              TextAlign: m.TextAlign,
              TextVerticalAlign: m.TextVerticalAlign,
              bold:
                null !==
                  (Ft =
                    'bold' ===
                    (null == Vt || null === (It = Vt[0]) || void 0 === It
                      ? void 0
                      : It['font-weight'])) &&
                void 0 !== Ft &&
                Ft,
              italic:
                null !==
                  (Mt =
                    'italic' ===
                    (null == Vt || null === (Bt = Vt[0]) || void 0 === Bt
                      ? void 0
                      : Bt['font-style'])) &&
                void 0 !== Mt &&
                Mt,
              underline:
                (null == Vt ||
                null === (Rt = Vt[0]) ||
                void 0 === Rt ||
                null === (Ut = Rt['text-decoration']) ||
                void 0 === Ut
                  ? void 0
                  : Ut.includes('underline')) ||
                (null == Vt ||
                null === (Yt = Vt[0]) ||
                void 0 === Yt ||
                null === (Gt = Yt['text-decoration']) ||
                void 0 === Gt
                  ? void 0
                  : Gt.includes('word')),
              strikeout:
                null !==
                  (Ht =
                    null == Vt ||
                    null === (zt = Vt[0]) ||
                    void 0 === zt ||
                    null === (Kt = zt['text-decoration']) ||
                    void 0 === Kt
                      ? void 0
                      : Kt.includes('line-through')) &&
                void 0 !== Ht &&
                Ht,
              StrokeStyle: Lt,
            };
          }
          Ct &&
            (Dt = {
              OverlayText: m.OverlayText,
              Font: m.Font,
              FontSize: m.FontSize,
              TextAlign: m.TextAlign,
            });
          var Wt = i.a.createElement(
            'div',
            {
              className: S()({
                Popup: !0,
                AnnotationPopup: !0,
                open: l,
                closed: !l,
                stylePopupOpen: I,
                'is-vertical': c,
                'is-horizontal': !c,
              }),
              ref: h,
              'data-element': g.a.ANNOTATION_POPUP,
              style: X({}, y),
            },
            (function () {
              switch (!0) {
                case I:
                  return i.a.createElement(k.a, {
                    annotations: [m],
                    style: U,
                    isOpen: l,
                    onResize: Y,
                    isFreeText: St,
                    isEllipse: Ot,
                    isRedaction: Ct,
                    isMeasure: kt,
                    colorMapKey: Tt,
                    showLineStyleOptions: Nt,
                    properties: Dt,
                    hideSnapModeCheckbox: M,
                    hasBackToMenu: c,
                    onBackToMenu: R,
                  });
                case P:
                  return i.a.createElement(D, {
                    onClick: N,
                    annotation: m,
                    onDatePickerShow: j,
                  });
                case L:
                  return i.a.createElement(V, { annotation: m });
                case vt &&
                  m instanceof window.Core.Annotations.Model3DAnnotation:
                  return i.a.createElement(
                    'div',
                    { className: 'shortCuts3D' },
                    i.a.createElement(
                      'div',
                      {
                        className: 'closeButton',
                        onClick: function () {
                          return wt(!1);
                        },
                      },
                      'x'
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'row' },
                      yt('action.rotate3D'),
                      ' ',
                      i.a.createElement('span', null, yt('shortcut.rotate3D'))
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'row' },
                      yt('action.zoom'),
                      ' ',
                      i.a.createElement('span', null, yt('shortcut.zoom3D'))
                    )
                  );
                default:
                  return i.a.createElement(
                    C.a,
                    { locked: l && jt && !s && !u && !p && !St && !d },
                    i.a.createElement(
                      'div',
                      { className: 'container' },
                      i.a.createElement(
                        F.a,
                        {
                          dataElement: g.a.ANNOTATION_POPUP,
                          childrenClassName: 'main-menu-button',
                        },
                        b &&
                          i.a.createElement(T.a, {
                            className: 'main-menu-button',
                            dataElement: 'viewFileButton',
                            label: c ? 'action.viewFile' : '',
                            title: c ? '' : 'action.viewFile',
                            img: 'icon-view',
                            onClick: v,
                          }),
                        w &&
                          i.a.createElement(T.a, {
                            className: 'main-menu-button',
                            dataElement: 'annotationCommentButton',
                            label: c ? gt : '',
                            title: c ? '' : gt,
                            img: Et,
                            onClick: E,
                          }),
                        _ &&
                          i.a.createElement(T.a, {
                            className: 'main-menu-button',
                            dataElement: 'annotationStyleEditButton',
                            label: c ? 'action.style' : '',
                            title: c ? '' : 'action.style',
                            img: 'icon-menu-style-line',
                            onClick: B,
                          }),
                        G &&
                          i.a.createElement(T.a, {
                            className: 'main-menu-button',
                            dataElement: 'annotationContentEditButton',
                            label: c ? 'action.edit' : '',
                            title: c ? '' : 'action.edit',
                            img: 'ic_edit_page_24px',
                            onClick: H,
                          }),
                        K &&
                          i.a.createElement(T.a, {
                            className: 'main-menu-button',
                            dataElement: 'annotationClearSignatureButton',
                            label: c ? 'action.clearSignature' : '',
                            title: c ? '' : 'action.clearSignature',
                            img: 'icon-delete-line',
                            onClick: q,
                          }),
                        $ &&
                          i.a.createElement(T.a, {
                            className: 'main-menu-button',
                            dataElement: 'annotationRedactButton',
                            label: c ? 'action.apply' : '',
                            title: c ? '' : 'action.apply',
                            img: 'ic_check_black_24px',
                            onClick: J,
                          }),
                        Z &&
                          i.a.createElement(T.a, {
                            className: 'main-menu-button',
                            dataElement: 'annotationGroupButton',
                            label: c ? 'action.group' : '',
                            title: c ? '' : 'action.group',
                            img: 'group-annotations-icon',
                            onClick: tt,
                          }),
                        et &&
                          i.a.createElement(T.a, {
                            className: 'main-menu-button',
                            dataElement: 'annotationUngroupButton',
                            label: c ? 'action.ungroup' : '',
                            title: c ? '' : 'action.ungroup',
                            img: 'ungroup-annotations-icon',
                            onClick: nt,
                          }),
                        ot &&
                          i.a.createElement(T.a, {
                            className: 'main-menu-button',
                            dataElement: 'formFieldEditButton',
                            label: c ? 'action.formFieldEdit' : '',
                            title: c ? '' : 'action.formFieldEdit',
                            img: 'icon-edit-form-field',
                            onClick: it,
                          }),
                        at &&
                          i.a.createElement(T.a, {
                            className: 'main-menu-button',
                            dataElement: 'annotationDeleteButton',
                            label: c ? 'action.delete' : '',
                            title: c ? '' : 'action.delete',
                            img: 'icon-delete-line',
                            onClick: _t ? z : rt,
                          }),
                        mt &&
                          i.a.createElement(T.a, {
                            className: 'main-menu-button',
                            dataElement: g.a.CALIBRATION_POPUP_BUTTON,
                            label: c ? 'action.calibrate' : '',
                            title: c ? '' : 'action.calibrate',
                            img: 'calibrate',
                            onClick: ht,
                          }),
                        lt &&
                          i.a.createElement(T.a, {
                            className: 'main-menu-button',
                            dataElement: 'linkButton',
                            label: c ? 'tool.Link' : '',
                            title: c ? '' : 'tool.Link',
                            img: ct ? 'icon-tool-unlink' : 'icon-tool-link',
                            onClick: ut,
                          }),
                        st &&
                          i.a.createElement(T.a, {
                            className: 'main-menu-button',
                            dataElement: 'fileAttachmentDownload',
                            label: c ? 'action.fileAttachmentDownload' : '',
                            title: c ? '' : 'action.fileAttachmentDownload',
                            img: 'icon-download',
                            onClick: function () {
                              return pt(m);
                            },
                          }),
                        At &&
                          i.a.createElement(T.a, {
                            className: 'main-menu-button',
                            dataElement: 'shortCutKeysFor3D',
                            label: c ? 'action.viewShortCutKeysFor3D' : '',
                            title: c ? '' : 'action.viewShortCutKeysFor3D',
                            img: 'icon-keyboard',
                            onClick: function () {
                              return wt(!0);
                            },
                          }),
                        dt &&
                          i.a.createElement(T.a, {
                            className: 'main-menu-button',
                            dataElement: 'playSoundButton',
                            label: c ? 'action.playAudio' : '',
                            title: c ? '' : 'action.playAudio',
                            img: 'ic_play_24px',
                            onClick: function () {
                              return ft(m);
                            },
                          })
                      )
                    )
                  );
              }
            })()
          );
          return r || a
            ? Wt
            : i.a.createElement(
                O.a,
                {
                  cancel:
                    '.Button, .cell, .sliders-container svg, select, button, input',
                },
                Wt
              );
        };
      et.propTypes = tt;
      var nt = et;
      function ot(t) {
        return (ot =
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
      function it() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ it =
          function () {
            return t;
          };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = 'function' == typeof Symbol ? Symbol : {},
          a = i.iterator || '@@iterator',
          r = i.asyncIterator || '@@asyncIterator',
          l = i.toStringTag || '@@toStringTag';
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, '');
        } catch (t) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, i) {
          var a = e && e.prototype instanceof d ? e : d,
            r = Object.create(a.prototype),
            l = new P(i || []);
          return o(r, '_invoke', { value: E(t, n, l) }), r;
        }
        function s(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = u;
        var p = {};
        function d() {}
        function f() {}
        function m() {}
        var h = {};
        c(h, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          b = y && y(y(S([])));
        b && b !== e && n.call(b, a) && (h = b);
        var v = (m.prototype = d.prototype = Object.create(h));
        function w(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function g(t, e) {
          var i;
          o(this, '_invoke', {
            value: function (o, a) {
              function r() {
                return new e(function (i, r) {
                  !(function o(i, a, r, l) {
                    var c = s(t[i], t, a);
                    if ('throw' !== c.type) {
                      var u = c.arg,
                        p = u.value;
                      return p && 'object' == ot(p) && n.call(p, '__await')
                        ? e.resolve(p.__await).then(
                            function (t) {
                              o('next', t, r, l);
                            },
                            function (t) {
                              o('throw', t, r, l);
                            }
                          )
                        : e.resolve(p).then(
                            function (t) {
                              (u.value = t), r(u);
                            },
                            function (t) {
                              return o('throw', t, r, l);
                            }
                          );
                    }
                    l(c.arg);
                  })(o, a, i, r);
                });
              }
              return (i = i ? i.then(r, r) : r());
            },
          });
        }
        function E(t, e, n) {
          var o = 'suspendedStart';
          return function (i, a) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === i) throw a;
              return C();
            }
            for (n.method = i, n.arg = a; ; ) {
              var r = n.delegate;
              if (r) {
                var l = A(r, n);
                if (l) {
                  if (l === p) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === o) throw ((o = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = 'executing';
              var c = s(t, e, n);
              if ('normal' === c.type) {
                if (
                  ((o = n.done ? 'completed' : 'suspendedYield'), c.arg === p)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              'throw' === c.type &&
                ((o = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
            }
          };
        }
        function A(t, e) {
          var n = e.method,
            o = t.iterator[n];
          if (void 0 === o)
            return (
              (e.delegate = null),
              ('throw' === n &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                A(t, e),
                'throw' === e.method)) ||
                ('return' !== n &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              p
            );
          var i = s(o, t.iterator, e.arg);
          if ('throw' === i.type)
            return (
              (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), p
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                p)
              : a
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              p);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function P(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function S(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function e() {
                  for (; ++o < t.length; )
                    if (n.call(t, o)) return (e.value = t[o]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (i.next = i);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = m),
          o(v, 'constructor', { value: m, configurable: !0 }),
          o(m, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = c(m, l, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === f || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, m)
                : ((t.__proto__ = m), c(t, l, 'GeneratorFunction')),
              (t.prototype = Object.create(v)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(g.prototype),
          c(g.prototype, r, function () {
            return this;
          }),
          (t.AsyncIterator = g),
          (t.async = function (e, n, o, i, a) {
            void 0 === a && (a = Promise);
            var r = new g(u(e, n, o, i), a);
            return t.isGeneratorFunction(n)
              ? r
              : r.next().then(function (t) {
                  return t.done ? t.value : r.next();
                });
          }),
          w(v),
          c(v, l, 'Generator'),
          c(v, a, function () {
            return this;
          }),
          c(v, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var o in e) n.push(o);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var o = n.pop();
                  if (o in e) return (t.value = o), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = S),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !t)
              )
                for (var e in this)
                  't' === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function o(n, o) {
                return (
                  (r.type = 'throw'),
                  (r.arg = t),
                  (e.next = n),
                  o && ((e.method = 'next'), (e.arg = void 0)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  r = a.completion;
                if ('root' === a.tryLoc) return o('end');
                if (a.tryLoc <= this.prev) {
                  var l = n.call(a, 'catchLoc'),
                    c = n.call(a, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o];
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, 'finallyLoc') &&
                  this.prev < i.finallyLoc
                ) {
                  var a = i;
                  break;
                }
              }
              a &&
                ('break' === t || 'continue' === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var r = a ? a.completion : {};
              return (
                (r.type = t),
                (r.arg = e),
                a
                  ? ((this.method = 'next'), (this.next = a.finallyLoc), p)
                  : this.complete(r)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), O(n), p;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var i = o.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: S(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      function at(t, e, n, o, i, a, r) {
        try {
          var l = t[a](r),
            c = l.value;
        } catch (t) {
          return void n(t);
        }
        l.done ? e(c) : Promise.resolve(c).then(o, i);
      }
      function rt(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (o, i) {
            var a = t.apply(e, n);
            function r(t) {
              at(a, o, i, r, l, 'next', t);
            }
            function l(t) {
              at(a, o, i, r, l, 'throw', t);
            }
            r(void 0);
          });
        };
      }
      function lt(t, e) {
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
                c = !0,
                u = !1;
              try {
                if (((a = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (u = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (u) throw i;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return ct(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ct(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ct(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var ut = window.Core.Tools.ToolNames,
        st = window.Core.Annotations,
        pt = {
          focusedAnnotation: l.a.object,
          selectedMultipleAnnotations: l.a.bool,
          canModify: l.a.bool,
          isStylePopupOpen: l.a.bool,
          setIsStylePopupOpen: l.a.func,
          isDatePickerOpen: l.a.bool,
          setDatePickerOpen: l.a.func,
          isDatePickerMount: l.a.bool,
          setDatePickerMount: l.a.func,
          hasAssociatedLink: l.a.bool,
          includesFormFieldAnnotation: l.a.bool,
          stylePopupRepositionFlag: l.a.bool,
          setStylePopupRepositionFlag: l.a.func,
          closePopup: l.a.func,
        },
        dt = function (t) {
          var e = t.focusedAnnotation,
            n = t.selectedMultipleAnnotations,
            r = t.canModify,
            l = t.isStylePopupOpen,
            x = t.setIsStylePopupOpen,
            O = t.isDatePickerOpen,
            P = t.setDatePickerOpen,
            S = t.isDatePickerMount,
            C = t.setDatePickerMount,
            T = t.hasAssociatedLink,
            k = t.includesFormFieldAnnotation,
            N = t.stylePopupRepositionFlag,
            j = t.setStylePopupRepositionFlag,
            L = t.closePopup,
            _ = lt(
              Object(a.e)(function (t) {
                return [
                  w.a.isElementDisabled(t, g.a.ANNOTATION_POPUP),
                  w.a.isElementOpen(t, g.a.ANNOTATION_POPUP),
                  w.a.isElementOpen(t, g.a.CONTEXT_MENU_POPUP),
                  w.a.isRightClickAnnotationPopupEnabled(t),
                  w.a.isElementDisabled(t, g.a.NOTES_PANEL),
                  w.a.isElementDisabled(t, g.a.ANNOTATION_STYLE_POPUP),
                  w.a.isElementDisabled(t, g.a.INLINE_COMMENT_POPUP),
                  w.a.isElementOpen(t, g.a.NOTES_PANEL),
                  w.a.isElementOpen(t, g.a.LINK_MODAL),
                  w.a.isElementOpen(t, 'richTextPopup'),
                  w.a.getIsMultiTab(t),
                  w.a.getTabManager(t),
                  w.a.getTabs(t),
                  w.a.getNotesInLeftPanel(t),
                  w.a.isElementOpen(t, g.a.LEFT_PANEL),
                  w.a.getActiveLeftPanel(t),
                ];
              }, a.c),
              16
            ),
            D = _[0],
            F = _[1],
            I = _[2],
            M = _[3],
            B = _[4],
            R = _[5],
            U = _[6],
            Y = _[7],
            G = _[8],
            H = _[9],
            z = _[10],
            K = _[11],
            V = _[12],
            W = _[13],
            q = _[14],
            $ = _[15],
            X = lt(Object(f.a)(), 1)[0],
            J = Object(a.d)(),
            Q = lt(Object(o.useState)({ left: 0, top: 0 }), 2),
            Z = Q[0],
            tt = Q[1],
            et = lt(Object(o.useState)(!1), 2),
            ot = et[0],
            at = et[1],
            ct = Object(o.useRef)(),
            pt = !M || c.a.isAnnotationSelected(e),
            dt = c.a.getAnnotationManager(),
            ft = Y || (W && q && 'notesPanel' === $);
          Object(b.a)(
            ct,
            Object(o.useCallback)(
              function (t) {
                var e,
                  n = Object(A.a)().querySelector(
                    '[data-element="'.concat(g.a.NOTES_PANEL, '"]')
                  ),
                  o = null == n ? void 0 : n.contains(t.target),
                  i =
                    null ===
                      (e = Object(A.a)().querySelector('.LinkModal.open')) ||
                    void 0 === e
                      ? void 0
                      : e.contains(t.target),
                  a = Object(m.c)(),
                  r = Object(m.e)(),
                  l = Object(m.d)();
                o ||
                  i ||
                  r ||
                  l ||
                  a ||
                  (M ? L() : J(v.a.closeElement(g.a.ANNOTATION_POPUP)));
              },
              [M]
            )
          );
          Object(o.useLayoutEffect)(
            function () {
              (e || l || S) && ct.current && tt(Object(u.c)(e, ct));
            },
            [e, l, S, r]
          ),
            Object(o.useEffect)(
              function () {
                e && e.ToolName === ut.CALIBRATION_MEASUREMENT && at(!0);
              },
              [e]
            ),
            Object(o.useEffect)(
              function () {
                (F || H) && J(v.a.closeElement(g.a.INLINE_COMMENT_POPUP));
              },
              [F, H]
            );
          var mt = !!Object(y.a)('webviewerServerURL', null)
              ? window.Core.SupportedFileFormats.SERVER
              : window.Core.SupportedFileFormats.CLIENT,
            ht =
              e instanceof st.FileAttachmentAnnotation &&
              z &&
              mt.includes(
                window.Core.mimeTypeToExtension[e.getFileMetadata().mimeType]
              ),
            yt = Object(o.useCallback)(
              rt(
                it().mark(function t() {
                  var n, o;
                  return it().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (K && z) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt(
                            'return',
                            console.warn(
                              "Can't open file in non-multi-tab mode"
                            )
                          );
                        case 2:
                          if (
                            ((n = e.getFileMetadata()),
                            !(o = V.find(function (t) {
                              return t.options.filename === n.filename;
                            })))
                          ) {
                            t.next = 8;
                            break;
                          }
                          return (t.next = 7), K.setActiveTab(o.id, !0);
                        case 7:
                          return t.abrupt('return');
                        case 8:
                          return (t.t0 = K), (t.next = 11), e.getFileData();
                        case 11:
                          return (
                            (t.t1 = t.sent),
                            (t.t2 = {
                              extension:
                                window.Core.mimeTypeToExtension[n.mimeType],
                              filename: n.filename,
                              saveCurrentActiveTabState: !0,
                              setActive: !0,
                            }),
                            (t.next = 15),
                            t.t0.addTab.call(t.t0, t.t1, t.t2)
                          );
                        case 15:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              ),
              [K, e, V, z]
            );
          if (D || !e) return null;
          var bt = c.a.getSelectedAnnotations(),
            vt = bt.length,
            wt = vt > 1,
            gt =
              e instanceof st.FreeTextAnnotation &&
              !!e.getDateFormat() &&
              c.a.canModifyContents(e),
            Et = c.a.getNumberOfGroups(bt),
            At = Et > 1,
            xt = 1 === Et && vt > 1 && pt,
            Ot =
              e instanceof st.SignatureWidgetAnnotation &&
              e.isSignedByAppearance(),
            Pt =
              (!B || !U) &&
              (!wt || (wt && !pt)) &&
              e.ToolName !== ut.CROP &&
              !k &&
              !e.isContentEditPlaceholder() &&
              !e.isUncommittedContentEditPlaceholder() &&
              !Ot,
            St = Object(s.a)(e),
            Ct = Object.keys(St).length > 0,
            Tt = [
              ut.CROP,
              ut.RADIO_FORM_FIELD,
              ut.CHECK_BOX_FIELD,
              ut.VIDEO_REDACTION,
              ut.VIDEO_AND_AUDIO_REDACTION,
              ut.AUDIO_REDACTION,
            ],
            kt =
              r &&
              Ct &&
              !R &&
              (!wt || xt || (wt && !pt)) &&
              !Tt.includes(e.ToolName) &&
              !(e instanceof st.Model3DAnnotation) &&
              !e.isContentEditPlaceholder() &&
              !e.isUncommittedContentEditPlaceholder() &&
              !Ot,
            Nt = e instanceof st.EllipseAnnotation || !c.a.isFullPDFEnabled(),
            jt =
              e.isContentEditPlaceholder() &&
              e.getContentEditType() === window.Core.ContentEdit.Types.TEXT,
            Lt = (function () {
              var t = rt(
                it().mark(function t() {
                  return it().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          dt.trigger('annotationDoubleClicked', e),
                            J(v.a.closeElement(g.a.ANNOTATION_POPUP));
                        case 2:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            _t = c.a.isAnnotationRedactable(e) && !wt && !k,
            Dt = bt.find(function (t) {
              return !t.InReplyTo;
            }),
            Ft = pt && At && !k,
            It = xt,
            Mt = c.a.getFormFieldCreationManager().isInFormFieldCreationMode(),
            Bt = k && Mt,
            Rt = r,
            Ut = function () {
              pt
                ? c.a.deleteAnnotations(c.a.getSelectedAnnotations())
                : c.a.deleteAnnotations([e]),
                L();
            },
            Yt = !(
              [
                ut.CROP,
                ut.SIGNATURE,
                ut.REDACTION,
                ut.REDACTION2,
                ut.REDACTION3,
                ut.REDACTION4,
                ut.STICKY,
                ut.STICKY2,
                ut.STICKY3,
                ut.STICKY4,
              ].includes(e.ToolName) ||
              k ||
              e.isContentEditPlaceholder() ||
              e instanceof st.SoundAnnotation ||
              e.isUncommittedContentEditPlaceholder() ||
              Ot
            ),
            Gt = r && e.Measure && e instanceof st.LineAnnotation,
            Ht = e instanceof st.FileAttachmentAnnotation,
            zt =
              !d.f && !n && e instanceof st.SoundAnnotation && e.hasAudioData();
          return i.a.createElement(nt, {
            isMobile: Object(d.l)(),
            isIE: d.f,
            isOpen: F,
            isRightClickMenu: M,
            isNotesPanelOpenOrActive: ft,
            isRichTextPopupOpen: H,
            isLinkModalOpen: G,
            isContextMenuPopupOpen: I,
            popupRef: ct,
            position: Z,
            focusedAnnotation: e,
            showViewFileButton: ht,
            onViewFile: yt,
            showCommentButton: Pt,
            onCommentAnnotation: function () {
              if (gt) P(!0);
              else {
                J(v.a.closeElement('searchPanel')),
                  J(v.a.closeElement('redactionPanel'));
                var t = c.a.getContentEditManager();
                t.isInContentEditMode() &&
                  (J(v.a.closeElement('textEditingPanel')),
                  t.endContentEditMode()),
                  J(v.a.triggerNoteEditing()),
                  U
                    ? (J(v.a.openElement(g.a.NOTES_PANEL)),
                      J(v.a.closeElement(g.a.ANNOTATION_POPUP)))
                    : (Y || J(v.a.openElement(g.a.INLINE_COMMENT_POPUP)), L());
              }
            },
            isDateFreeTextCanEdit: gt,
            isDatePickerOpen: O,
            handleDateChange: function (t) {
              dt.setNoteContents(e, t), dt.updateAnnotation(e);
            },
            onDatePickerShow: function (t) {
              C(t);
            },
            isCalibrationPopupOpen: ot,
            showEditStyleButton: kt,
            isStylePopupOpen: l,
            hideSnapModeCheckbox: Nt,
            openEditStylePopup: function () {
              return x(!0);
            },
            closeEditStylePopup: function () {
              return x(!1);
            },
            annotationStyle: St,
            onResize: function () {
              j(!N);
            },
            showContentEditButton: jt,
            onEditContent: Lt,
            openContentEditDeleteWarningModal: function () {
              var t = {
                message: X('option.contentEdit.deletionModal.message'),
                title: X('option.contentEdit.deletionModal.title'),
                confirmBtnText: X('action.ok'),
                onConfirm: function () {
                  return Ut();
                },
              };
              J(v.a.showWarningMessage(t));
            },
            isAppearanceSignature: Ot,
            onClearAppearanceSignature: function () {
              e.clearSignature(dt), J(v.a.closeElement(g.a.ANNOTATION_POPUP));
            },
            showRedactionButton: _t,
            onApplyRedaction: function () {
              J(Object(p.a)(e)), J(v.a.closeElement(g.a.ANNOTATION_POPUP));
            },
            showGroupButton: Ft,
            onGroupAnnotations: function () {
              c.a.groupAnnotations(Dt, bt);
            },
            showUngroupButton: It,
            onUngroupAnnotations: function () {
              c.a.ungroupAnnotations(bt);
            },
            showFormFieldButton: Bt,
            onOpenFormField: function () {
              L(),
                J(v.a.disableElement(g.a.ANNOTATION_POPUP, E.b)),
                J(v.a.openElement(g.a.FORM_FIELD_EDIT_POPUP));
            },
            showDeleteButton: Rt,
            onDeleteAnnotation: Ut,
            showLinkButton: Yt,
            hasAssociatedLink: T,
            linkAnnotationToURL: function () {
              T
                ? ((pt ? bt : [e]).forEach(function (t) {
                    Object(h.a)(t).forEach(function (e, n) {
                      dt.ungroupAnnotations([e]),
                        t instanceof st.TextHighlightAnnotation &&
                        0 === t.Opacity &&
                        0 === n
                          ? dt.deleteAnnotations([t, e], null, !0)
                          : dt.deleteAnnotation(e, null, !0);
                    });
                  }),
                  L())
                : J(v.a.openElement(g.a.LINK_MODAL));
            },
            showFileDownloadButton: Ht,
            downloadFileAttachment: function (t) {
              dt.trigger('annotationDoubleClicked', t);
            },
            showAudioPlayButton: zt,
            handlePlaySound: function (t) {
              J(v.a.setActiveSoundAnnotation(t)),
                J(v.a.triggerResetAudioPlaybackPosition(!0)),
                J(v.a.openElement('audioPlaybackPopup'));
            },
            showCalibrateButton: Gt,
            onOpenCalibration: function () {
              J(v.a.closeElement(g.a.ANNOTATION_POPUP)),
                J(v.a.openElement(g.a.CALIBRATION_MODAL));
            },
          });
        };
      dt.propTypes = pt;
      var ft = dt;
      e.default = ft;
    },
  },
]);
//# sourceMappingURL=22.chunk.js.map
