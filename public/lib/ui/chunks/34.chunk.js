(window.webpackJsonp = window.webpackJsonp || []).push([
  [34],
  {
    1654: function (o, t, e) {
      var n = e(27),
        r = e(1655);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[o.i, r, '']]);
      var i = {
        insert: function (o) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const e = [];
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              if (0 === n)
                r.shadowRoot.appendChild(o),
                  (o.onload = function () {
                    e.length > 0 &&
                      e.forEach((t) => {
                        t.innerHTML = o.innerHTML;
                      });
                  });
              else {
                const t = o.cloneNode(!0);
                r.shadowRoot.appendChild(t), e.push(t);
              }
            }
          } else document.head.appendChild(o);
        },
        singleton: !1,
      };
      n(r, i);
      o.exports = r.locals || {};
    },
    1655: function (o, t, e) {
      (t = o.exports = e(28)(!1)).push([
        o.i,
        '.open.ColorPickerModal{visibility:visible}.closed.ColorPickerModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ColorPickerModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.ColorPickerModal .modal-container .wrapper .modal-content{padding:10px}.ColorPickerModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.ColorPickerModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.ColorPickerModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.ColorPickerModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.ColorPickerModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.ColorPickerModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.ColorPickerModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.ColorPickerModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.ColorPickerModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.ColorPickerModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPickerModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPickerModal .footer .modal-button{padding:23px 8px}}.ColorPickerModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPickerModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPickerModal .swipe-indicator{display:none}}.ColorPickerModal .container{overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .ColorPickerModal .container,.ColorPickerModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .ColorPickerModal .container,.ColorPickerModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPickerModal .container,.ColorPickerModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPickerModal .container,.ColorPickerModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.ColorPickerModal .container{display:flex;flex-direction:column;justify-content:center;align-items:center;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);padding:15px 16px;border-radius:4px;width:250px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPickerModal .container{padding:24px 24px 16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPickerModal .container{padding:24px 24px 16px}}.ColorPickerModal .container .sketch-picker{border-radius:0!important;box-shadow:none!important;width:220px!important;padding:0!important;background:var(--component-background)!important}.ColorPickerModal .container .sketch-picker>div{border-radius:2px!important}.ColorPickerModal .container .sketch-picker .saturation-white>div>div{width:12px!important;height:12px!important;transform:translateX(-6px) translateY(-6px)!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2) span{color:var(--text-color)!important;cursor:default!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2)>div:first-child{border-radius:2px}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2)>div:first-child>div{margin-top:6px;cursor:ew-resize!important;overflow:visible!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2) .hue-horizontal{width:97%;border-radius:2px}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2) .hue-horizontal div div{transform:translateX(-7px) translateY(-3px)!important;height:14px!important;width:14px!important;border-radius:14px!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2)>div:nth-child(2){height:24px!important;border-radius:12px!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2)>div:nth-child(2)>div{border-radius:12px!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(3) input{width:100%!important;text-align:center;border-radius:2px;box-shadow:var(--border) 0 0 0 1px inset!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(3) label{color:var(--text-color)!important}.ColorPickerModal .container .buttons{width:220px;text-align:right;font-size:13px;margin-top:20px;display:flex;justify-content:flex-end}.ColorPickerModal .container .buttons .save-button{background-color:transparent;color:var(--primary-button-text);padding:6px 16px;background:var(--primary-button);border-radius:4px;border:0;height:32px;cursor:pointer}.ColorPickerModal .container .buttons .cancel-button{cursor:pointer;background:none;border:0;color:var(--secondary-button-text);padding:6px 16px;margin-right:4px;height:32px}.ColorPickerModal .container .buttons .cancel-button:hover{color:var(--secondary-button-hover)}.ColorPickerModal .container .buttons .cancel-button:focus{outline:none}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1729: function (o, t, e) {
      'use strict';
      e.r(t);
      e(18),
        e(11),
        e(13),
        e(7),
        e(12),
        e(8),
        e(9),
        e(10),
        e(15),
        e(14),
        e(20),
        e(17),
        e(37),
        e(38),
        e(31),
        e(22),
        e(36),
        e(34),
        e(72),
        e(24),
        e(25),
        e(75),
        e(73);
      var n = e(0),
        r = e.n(n),
        i = e(3),
        a = e(2),
        l = e(6),
        c = (e(82), e(19)),
        d = e.n(c),
        p = e(362),
        s = e(1706),
        u = e(182),
        b = e(5);
      e(1654);
      function m(o, t) {
        return (
          (function (o) {
            if (Array.isArray(o)) return o;
          })(o) ||
          (function (o, t) {
            var e =
              null == o
                ? null
                : ('undefined' != typeof Symbol && o[Symbol.iterator]) ||
                  o['@@iterator'];
            if (null != e) {
              var n,
                r,
                i,
                a,
                l = [],
                c = !0,
                d = !1;
              try {
                if (((i = (e = e.call(o)).next), 0 === t)) {
                  if (Object(e) !== e) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(e)).done) &&
                    (l.push(n.value), l.length !== t);
                    c = !0
                  );
              } catch (o) {
                (d = !0), (r = o);
              } finally {
                try {
                  if (
                    !c &&
                    null != e.return &&
                    ((a = e.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (d) throw r;
                }
              }
              return l;
            }
          })(o, t) ||
          (function (o, t) {
            if (!o) return;
            if ('string' == typeof o) return f(o, t);
            var e = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === e && o.constructor && (e = o.constructor.name);
            if ('Map' === e || 'Set' === e) return Array.from(o);
            if (
              'Arguments' === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return f(o, t);
          })(o, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function f(o, t) {
        (null == t || t > o.length) && (t = o.length);
        for (var e = 0, n = new Array(t); e < t; e++) n[e] = o[e];
        return n;
      }
      var h = function (o) {
        var t = o.isDisabled,
          e = o.isOpen,
          i = o.color,
          a = o.closeModal,
          l = o.handleChangeSave,
          c = o.handleChangeCancel,
          f = m(Object(p.a)(), 1)[0],
          h = m(Object(n.useState)({}), 2),
          x = h[0],
          y = h[1],
          w = d()({ Modal: !0, ColorPickerModal: !0, open: e, closed: !e });
        Object(n.useEffect)(
          function () {
            i && 0 !== i.A
              ? y({ r: i.R, g: i.G, b: i.B, a: 1 })
              : y({ r: 0, g: 0, b: 0, a: 1 });
          },
          [i]
        );
        return t
          ? null
          : r.a.createElement(
              u.a,
              {
                onSwipedUp: a,
                onSwipedDown: a,
                preventDefaultTouchmoveEvent: !0,
              },
              r.a.createElement(
                'div',
                {
                  className: w,
                  'data-element': b.a.COLOR_PICKER_MODAL,
                  onMouseDown: a,
                },
                r.a.createElement(
                  'div',
                  {
                    className: 'container',
                    onMouseDown: function (o) {
                      return o.stopPropagation();
                    },
                  },
                  r.a.createElement('div', { className: 'swipe-indicator' }),
                  r.a.createElement(s.a, {
                    color: x,
                    disableAlpha: !0,
                    onChange: function (o) {
                      y(o.rgb);
                    },
                    presetColors: [],
                  }),
                  r.a.createElement(
                    'div',
                    { className: 'buttons' },
                    r.a.createElement(
                      'button',
                      { className: 'cancel-button', onClick: c },
                      f('action.cancel')
                    ),
                    r.a.createElement(
                      'button',
                      {
                        className: 'save-button',
                        onClick: function () {
                          l(x);
                        },
                      },
                      f('action.ok')
                    )
                  )
                )
              )
            );
      };
      function x(o) {
        return (x =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (o) {
                return typeof o;
              }
            : function (o) {
                return o &&
                  'function' == typeof Symbol &&
                  o.constructor === Symbol &&
                  o !== Symbol.prototype
                  ? 'symbol'
                  : typeof o;
              })(o);
      }
      var y = ['closeColorPicker', 'onColorChange'];
      function w(o, t) {
        var e = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(o);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(o, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function g(o) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(e), !0).forEach(function (t) {
                v(o, t, e[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e))
              : w(Object(e)).forEach(function (t) {
                  Object.defineProperty(
                    o,
                    t,
                    Object.getOwnPropertyDescriptor(e, t)
                  );
                });
        }
        return o;
      }
      function v(o, t, e) {
        return (
          (t = (function (o) {
            var t = (function (o, t) {
              if ('object' !== x(o) || null === o) return o;
              var e = o[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(o, t || 'default');
                if ('object' !== x(n)) return n;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(o);
            })(o, 'string');
            return 'symbol' === x(t) ? t : String(t);
          })(t)) in o
            ? Object.defineProperty(o, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (o[t] = e),
          o
        );
      }
      function k(o, t) {
        if (null == o) return {};
        var e,
          n,
          r = (function (o, t) {
            if (null == o) return {};
            var e,
              n,
              r = {},
              i = Object.keys(o);
            for (n = 0; n < i.length; n++)
              (e = i[n]), t.indexOf(e) >= 0 || (r[e] = o[e]);
            return r;
          })(o, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(o);
          for (n = 0; n < i.length; n++)
            (e = i[n]),
              t.indexOf(e) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(o, e) &&
                  (r[e] = o[e]));
        }
        return r;
      }
      var C = function (o) {
        var t = o.closeColorPicker,
          e = o.onColorChange,
          i = k(o, y),
          a = Object(n.useCallback)(
            function () {
              t();
            },
            [t]
          ),
          l = Object(n.useCallback)(
            function () {
              t();
            },
            [t]
          ),
          c = g(
            g({}, i),
            {},
            {
              closeModal: a,
              handleChangeSave: function (o) {
                e(o), t();
              },
              handleChangeCancel: l,
            }
          );
        return r.a.createElement(h, c);
      };
      function P(o) {
        return (P =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (o) {
                return typeof o;
              }
            : function (o) {
                return o &&
                  'function' == typeof Symbol &&
                  o.constructor === Symbol &&
                  o !== Symbol.prototype
                  ? 'symbol'
                  : typeof o;
              })(o);
      }
      function O(o, t) {
        var e = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(o);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(o, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function M(o) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(e), !0).forEach(function (t) {
                j(o, t, e[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e))
              : O(Object(e)).forEach(function (t) {
                  Object.defineProperty(
                    o,
                    t,
                    Object.getOwnPropertyDescriptor(e, t)
                  );
                });
        }
        return o;
      }
      function j(o, t, e) {
        return (
          (t = (function (o) {
            var t = (function (o, t) {
              if ('object' !== P(o) || null === o) return o;
              var e = o[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(o, t || 'default');
                if ('object' !== P(n)) return n;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(o);
            })(o, 'string');
            return 'symbol' === P(t) ? t : String(t);
          })(t)) in o
            ? Object.defineProperty(o, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (o[t] = e),
          o
        );
      }
      function A(o, t) {
        return (
          (function (o) {
            if (Array.isArray(o)) return o;
          })(o) ||
          (function (o, t) {
            var e =
              null == o
                ? null
                : ('undefined' != typeof Symbol && o[Symbol.iterator]) ||
                  o['@@iterator'];
            if (null != e) {
              var n,
                r,
                i,
                a,
                l = [],
                c = !0,
                d = !1;
              try {
                if (((i = (e = e.call(o)).next), 0 === t)) {
                  if (Object(e) !== e) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(e)).done) &&
                    (l.push(n.value), l.length !== t);
                    c = !0
                  );
              } catch (o) {
                (d = !0), (r = o);
              } finally {
                try {
                  if (
                    !c &&
                    null != e.return &&
                    ((a = e.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (d) throw r;
                }
              }
              return l;
            }
          })(o, t) ||
          (function (o, t) {
            if (!o) return;
            if ('string' == typeof o) return S(o, t);
            var e = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === e && o.constructor && (e = o.constructor.name);
            if ('Map' === e || 'Set' === e) return Array.from(o);
            if (
              'Arguments' === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return S(o, t);
          })(o, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function S(o, t) {
        (null == t || t > o.length) && (t = o.length);
        for (var e = 0, n = new Array(t); e < t; e++) n[e] = o[e];
        return n;
      }
      var E = function (o) {
        var t = Object(l.d)(),
          e = A(
            Object(l.e)(function (o) {
              return [
                i.a.isElementDisabled(o, 'ColorPickerModal'),
                i.a.isElementOpen(o, 'ColorPickerModal'),
                i.a.getCustomColor(o),
              ];
            }),
            3
          ),
          n = e[0],
          c = e[1],
          d = e[2],
          p = M(
            M({}, o),
            {},
            {
              color: d,
              onColorChange: function (o) {
                var e = new window.Core.Annotations.Color(o.r, o.g, o.b, o.a);
                t(a.a.setCustomColor(e));
              },
              isDisabled: n,
              closeColorPicker: function () {
                t(a.a.closeElement('ColorPickerModal'));
              },
              isOpen: c,
            }
          );
        return r.a.createElement(C, p);
      };
      t.default = E;
    },
  },
]);
//# sourceMappingURL=34.chunk.js.map
