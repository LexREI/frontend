(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    1405: function (e, t, n) {
      var r = n(27),
        o = n(1519);
      'string' == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              if (0 === r)
                o.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                o.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      r(o, i);
      e.exports = o.locals || {};
    },
    1453: function (e, t, n) {
      var r = n(27),
        o = n(1520);
      'string' == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              if (0 === r)
                o.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                o.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      r(o, i);
      e.exports = o.locals || {};
    },
    1517: function (e, t, n) {
      var r = n(27),
        o = n(1518);
      'string' == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              if (0 === r)
                o.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                o.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      r(o, i);
      e.exports = o.locals || {};
    },
    1518: function (e, t, n) {
      (e.exports = n(28)(!1)).push([
        e.i,
        '.messageText{width:100%;font-size:11px;margin-top:4px}',
        '',
      ]);
    },
    1519: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        '.open.FormFieldEditPopupContainer{visibility:visible}.closed.FormFieldEditPopupContainer{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.FormFieldEditPopupContainer{position:absolute;z-index:70;display:flex;justify-content:center;align-items:center}.FormFieldEditPopupContainer:empty{padding:0}.FormFieldEditPopupContainer .buttons{display:flex}.FormFieldEditPopupContainer .Button{margin:4px;width:32px;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FormFieldEditPopupContainer .Button{width:42px;height:42px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .FormFieldEditPopupContainer .Button{width:42px;height:42px}}.FormFieldEditPopupContainer .Button:hover{background:var(--popup-button-hover)}.FormFieldEditPopupContainer .Button .Icon{width:18px;height:18px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FormFieldEditPopupContainer .Button .Icon{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .FormFieldEditPopupContainer .Button .Icon{width:24px;height:24px}}.is-vertical.FormFieldEditPopupContainer .Button.main-menu-button{width:100%;border-radius:0;justify-content:flex-start;padding-left:var(--padding-small);padding-right:var(--padding-small);margin:0 0 var(--padding-tiny) 0}.is-vertical.FormFieldEditPopupContainer .Button.main-menu-button:first-child{margin-top:var(--padding-tiny)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .is-vertical.FormFieldEditPopupContainer .Button.main-menu-button{width:100%;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .is-vertical.FormFieldEditPopupContainer .Button.main-menu-button{width:100%;height:32px}}.is-vertical.FormFieldEditPopupContainer .Button.main-menu-button .Icon{margin-right:10px}.is-vertical.FormFieldEditPopupContainer .Button.main-menu-button span{white-space:nowrap}@-webkit-keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.FormFieldEditPopup{padding:8px 12px 6px}.FormFieldEditPopup .fields-container{margin-bottom:5px}.FormFieldEditPopup .radio-group-label{grid-area:group-message;font-size:10px;width:240px;padding-top:5px}.FormFieldEditPopup .field-input{padding:5px 0;display:grid;grid-template-columns:1fr 2fr;grid-template-areas:"label dropdown" "group-message group-message"}.FormFieldEditPopup .field-input label{padding-top:10px;padding-right:10px;grid-area:label}.FormFieldEditPopup .field-flags-container{display:flex;flex-direction:column}.FormFieldEditPopup .field-flags-title{padding-bottom:5px}.FormFieldEditPopup .form-buttons-container{display:flex;flex-direction:row;justify-content:flex-end;padding-top:5px}.FormFieldEditPopup .ok-form-field-button{display:flex;justify-content:center;align-items:center;background-color:var(--primary-button);border:1px solid var(--primary-button);color:var(--primary-button-text);padding:6px 18px;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:28px;cursor:pointer}.FormFieldEditPopup .ok-form-field-button:hover{background:var(--primary-button-hover);border:1px solid var(--primary-button-hover)}.FormFieldEditPopup .cancel-form-field-button{display:flex;justify-content:center;align-items:center;color:var(--secondary-button-text);padding:6px 18px;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:28px;cursor:pointer}.FormFieldEditPopup .cancel-form-field-button:hover{color:var(--secondary-button-hover);background:transparent}.field-options-container{width:180px}.field-options-container .creatable-list{max-height:200px;overflow:auto}.field-options-container input{width:120px;height:28px}.field-options-container .Button.add-item-button{width:90px;margin-left:0;justify-content:left}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .field-options-container .Button.add-item-button{width:110px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .field-options-container .Button.add-item-button{width:110px}}.form-dimension{padding-top:10px;display:flex;align-items:center}.form-dimension-input{padding-left:5px}.form-dimension-input input::-webkit-inner-spin-button,.form-dimension-input input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.form-dimension-input input[type=number]{-moz-appearance:textfield}.form-dimension-input input{width:55px;height:28px}.FormFieldEditPopupContainer{border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FormFieldEditPopupContainer{width:95%;position:fixed;left:1.25%!important;top:105px!important}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .FormFieldEditPopupContainer{width:95%;position:fixed;left:1.25%!important;top:105px!important}}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1520: function (e, t, n) {
      (e.exports = n(28)(!1)).push([
        e.i,
        '.creatable-list{display:flex;flex-direction:column}.creatable-list-item{display:flex;flex-direction:row;align-items:center}.add-item-button{display:flex;align-items:center;width:78px;cursor:pointer}.icon-handle{cursor:-webkit-grab;cursor:grab}',
        '',
      ]);
    },
    1521: function (e, t, n) {
      var r = n(27),
        o = n(1522);
      'string' == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              if (0 === r)
                o.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                o.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      r(o, i);
      e.exports = o.locals || {};
    },
    1522: function (e, t, n) {
      (e.exports = n(28)(!1)).push([
        e.i,
        '.signature-options-container{padding:5px 0;display:grid;grid-template-columns:.5fr 1fr;grid-template-areas:"label dropdown";align-items:center}.signature-options-container label{grid-area:label}.arrow{width:12px;height:16px;margin-top:2px}',
        '',
      ]);
    },
    1712: function (e, t, n) {
      'use strict';
      n.r(t);
      n(146),
        n(34),
        n(7),
        n(39),
        n(8),
        n(221),
        n(9),
        n(10),
        n(32),
        n(82),
        n(18),
        n(11),
        n(13),
        n(12),
        n(15),
        n(14),
        n(20),
        n(17),
        n(37),
        n(38),
        n(31),
        n(22),
        n(36),
        n(72),
        n(24),
        n(25),
        n(75),
        n(73);
      var r = n(0),
        o = n.n(r),
        i = n(222),
        a = n.n(i),
        l = n(1),
        u = (n(548), n(424), n(106), n(52), n(64), n(19)),
        c = n.n(u),
        d = n(21),
        s = n(362),
        p = n(1711),
        f = n(1213),
        m = n(511),
        b = n(436);
      n(1517);
      function g(e) {
        return (g =
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
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function v(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== g(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || 'default');
                if ('object' !== g(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === g(t) ? t : String(t);
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
      var F = function (e) {
          var t = e.onChange,
            n = e.onInputChange,
            r = e.options,
            i = e.onCreateOption,
            a = e.textPlaceholder,
            l = e.value,
            u = e.isClearable,
            c = e.isValid,
            d = e.messageText,
            p = Object(s.a)().t,
            f = {
              control: function (e, t) {
                return y(
                  y({}, e),
                  {},
                  {
                    backgroundColor: 'var(--component-background)',
                    borderColor: t.selectProps.isValid
                      ? 'hsl(0, 0%, 80%)'
                      : 'hsl(28, 80%, 52%)',
                    boxShadow: t.selectProps.isValid
                      ? null
                      : '0 0 0 2px rgba(230, 126, 34, 0.4)',
                    '&:hover': {
                      borderColor: t.selectProps.isValid
                        ? 'hsl(0, 0%, 70%)'
                        : 'hsl(28, 80%, 52%)',
                    },
                  }
                );
              },
              singleValue: function (e) {
                return y(y({}, e), {}, { color: 'var(--text-color)' });
              },
              menu: function (e) {
                return y(
                  y({}, e),
                  {},
                  {
                    backgroundColor: 'var(--component-background)',
                    color: 'var(--text-color)',
                  }
                );
              },
              option: function (e) {
                return y(
                  y({}, e),
                  {},
                  {
                    backgroundColor: 'var(--component-background)',
                    color: 'var(--text-color)',
                    '&:hover': { backgroundColor: 'var(--popup-button-hover)' },
                  }
                );
              },
              input: function (e) {
                return y(
                  y({}, e),
                  {},
                  {
                    backgroundColor: 'var(--component-background)',
                    color: 'var(--text-color)',
                  }
                );
              },
            };
          return o.a.createElement(
            b.a,
            null,
            o.a.createElement(m.a, {
              isClearable: u,
              onChange: t,
              onInputChange: n,
              options: r,
              onCreateOption: i,
              placeholder: a,
              formatCreateLabel: function (e) {
                return ''.concat(p('action.create'), ' ').concat(e);
              },
              value: l,
              styles: f,
              isValid: c,
            }),
            d
              ? o.a.createElement('div', { className: 'messageText' }, d)
              : void 0
          );
        },
        E = function (e) {
          var t = e.width,
            n = e.height,
            r = e.onWidthChange,
            i = e.onHeightChange,
            a = Object(s.a)().t;
          return o.a.createElement(
            'div',
            { className: 'form-dimension' },
            o.a.createElement(
              'div',
              null,
              a('formField.formFieldPopup.size'),
              ':'
            ),
            o.a.createElement(
              'div',
              { className: 'form-dimension-input' },
              o.a.createElement('input', {
                id: 'form-field-width',
                type: 'number',
                min: 0,
                value: t,
                onChange: function (e) {
                  return r(e.target.value);
                },
              }),
              ' ',
              a('formField.formFieldPopup.width')
            ),
            o.a.createElement(
              'div',
              { className: 'form-dimension-input' },
              o.a.createElement('input', {
                id: 'form-field-height',
                type: 'number',
                min: 0,
                value: n,
                onChange: function (e) {
                  return i(e.target.value);
                },
              }),
              ' ',
              a('formField.formFieldPopup.height')
            )
          );
        },
        O = n(192),
        w = (n(1405), n(139), n(1719)),
        x = n(1720),
        P = n(33);
      n(1453);
      function C(e, t) {
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
              var r,
                o,
                i,
                a,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = i.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return j(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return j(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function j(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var S = function (e) {
        var t = e.option,
          n = e.index,
          i = e.onChange,
          a = e.onDeleteItem,
          l = e.moveListItem,
          u = e.id,
          c = e.addItem,
          s = 'item',
          p = Object(r.useRef)(null),
          f = C(
            Object(w.a)({
              accept: s,
              hover: function (e, t) {
                var r;
                if (p.current) {
                  var o = e.index,
                    i = n;
                  if (o !== i) {
                    var a =
                        null === (r = p.current) || void 0 === r
                          ? void 0
                          : r.getBoundingClientRect(),
                      u = (a.bottom - a.top) / 2,
                      c = t.getClientOffset().y - a.top;
                    (o < i && c < u) ||
                      (o > i && c > u) ||
                      (l(o, i), (e.index = i));
                  }
                }
              },
            }),
            2
          )[1],
          m = C(
            Object(x.a)({
              type: s,
              item: { type: s, id: u, index: n },
              collect: function (e) {
                return { isDragging: e.isDragging() };
              },
            }),
            2
          ),
          b = m[0].isDragging,
          g = m[1],
          h = Object(r.useCallback)(
            function (e) {
              i(e.target.value);
            },
            [i]
          ),
          y = Object(r.useCallback)(
            function (e) {
              'Enter' === e.key && c();
            },
            [c]
          );
        g(f(p));
        var v = b ? 0 : 1;
        return o.a.createElement(
          'div',
          { ref: p, style: { opacity: v }, className: 'creatable-list-item' },
          o.a.createElement(
            'div',
            { className: 'icon-handle' },
            o.a.createElement(P.a, { glyph: 'icon-drag-handle' })
          ),
          o.a.createElement('input', {
            type: 'text',
            onChange: h,
            value: t.displayValue,
            onKeyPress: y,
            autoFocus: !0,
          }),
          o.a.createElement(d.a, {
            title: 'action.delete',
            img: 'icon-delete-line',
            onClick: a,
          })
        );
      };
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
      function k(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                N(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : k(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function N(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== A(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || 'default');
                if ('object' !== A(r)) return r;
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
      function R(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return L(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          D(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function T(e, t) {
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
              var r,
                o,
                i,
                a,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = i.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          D(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function D(e, t) {
        if (e) {
          if ('string' == typeof e) return L(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? L(e, t)
                : void 0
          );
        }
      }
      function L(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var _ = function (e) {
          var t = e.options,
            n = e.onOptionsUpdated,
            i = e.popupRef,
            a = Object(s.a)().t,
            l = t.map(function (e, t) {
              return { id: t, displayValue: e.displayValue, value: e.value };
            }),
            u = T(Object(r.useState)(l), 2),
            c = u[0],
            p = u[1],
            f = T(Object(r.useState)(l.length), 2),
            m = f[0],
            b = f[1],
            g = Object(r.useRef)();
          Object(r.useEffect)(
            function () {
              var e = c.map(function (e) {
                return { value: e.value, displayValue: e.displayValue };
              });
              n(e);
            },
            [c, n]
          );
          var h = Object(r.useCallback)(
              function () {
                var e = m;
                b(m + 1),
                  p([].concat(R(c), [{ id: e, value: '', displayValue: '' }])),
                  F();
              },
              [m, c]
            ),
            y = function (e) {
              return function () {
                var t = c.filter(function (t) {
                  return e !== t.id;
                });
                p(t);
              };
            };
          var v = Object(r.useCallback)(
              function (e, t) {
                var n,
                  r,
                  o,
                  i = c[e],
                  a = c.filter(function (t, n) {
                    return n !== e;
                  }),
                  l = ((n = t), (r = i), (o = a.slice(0)).splice(n, 0, r), o);
                p(l);
              },
              [c]
            ),
            F = function () {
              var e = i.current,
                t = g.current,
                n = e.getBoundingClientRect().bottom,
                r = window.innerHeight - n,
                o = t.scrollHeight > t.clientHeight;
              if (r <= 40 && !o) {
                var a = 40 * t.childElementCount;
                t.style.maxHeight = ''.concat(a, 'px');
              } else r > 40 && (t.style.maxHeight = '200px');
            };
          return o.a.createElement(
            'div',
            null,
            o.a.createElement(
              'div',
              { className: 'creatable-list', ref: g },
              c.map(function (e, t) {
                return o.a.createElement(S, {
                  key: e.id,
                  index: t,
                  id: e.id,
                  option: e,
                  onChange:
                    ((n = e.id),
                    function (e) {
                      var t = c.map(function (t) {
                        return t.id !== n
                          ? t
                          : I(I({}, t), {}, { value: e, displayValue: e });
                      });
                      p(t);
                    }),
                  onDeleteItem: y(e.id),
                  moveListItem: v,
                  addItem: h,
                });
                var n;
              })
            ),
            o.a.createElement(d.a, {
              title: a('action.addOption'),
              className: 'add-item-button',
              label: a('action.addOption'),
              img: 'icon-plus-sign',
              onClick: h,
            })
          );
        },
        H = function (e) {
          var t = e.indicator,
            n = e.indicatorPlaceholder,
            r = Object(s.a)().t;
          return o.a.createElement(
            'div',
            { className: 'form-field-indicator-container' },
            o.a.createElement(
              'span',
              { className: 'field-indicator-title' },
              r('formField.formFieldPopup.fieldIndicator')
            ),
            o.a.createElement(f.a, {
              checked: t.isChecked,
              onChange: function (e) {
                return (
                  (r = e.target.checked),
                  t.value.length < 1 && r && t.onChange(n),
                  void t.toggleIndicator(r)
                );
                var r;
              },
              label: r(t.label),
            }),
            o.a.createElement(
              'div',
              { className: 'field-indicator' },
              o.a.createElement(p.a, {
                type: 'text',
                onChange: function (e) {
                  return t.onChange(e.target.value);
                },
                value: t.value,
                fillWidth: 'false',
                placeholder: n,
                disabled: !t.isChecked,
              })
            )
          );
        };
      function M(e, t) {
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
              var r,
                o,
                i,
                a,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = i.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return U(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return U(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function U(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var B = function (e) {
          var t = e.fields,
            n = e.flags,
            i = e.closeFormFieldEditPopup,
            a = e.isValid,
            l = e.validationMessage,
            u = e.radioButtonGroups,
            m = e.options,
            b = e.onOptionsChange,
            g = e.annotation,
            h = e.selectedRadioGroup,
            y = e.getPageHeight,
            v = e.getPageWidth,
            w = e.redrawAnnotation,
            x = e.indicator,
            P = e.deleteAnnotation,
            C = Object(s.a)().t,
            j = c()({ Popup: !0, FormFieldEditPopup: !0 }),
            S = M(Object(r.useState)(g.Width.toFixed(0)), 2),
            A = S[0],
            k = S[1],
            I = M(Object(r.useState)(g.Height.toFixed(0)), 2),
            N = I[0],
            R = I[1],
            T = M(Object(r.useState)(g.Width.toFixed(0)), 1)[0],
            D = M(Object(r.useState)(g.Height.toFixed(0)), 1)[0],
            L = Object(r.useRef)(null),
            U = M(
              Object(r.useState)('' === h ? null : { value: h, label: h }),
              2
            ),
            B = U[0],
            V = U[1];
          function W(e) {
            return 'text' === e.type
              ? (function (e) {
                  return o.a.createElement(p.a, {
                    type: 'text',
                    onChange: function (t) {
                      return e.onChange(t.target.value);
                    },
                    value: e.value,
                    fillWidth: 'false',
                    messageText: e.required && !a ? C(l) : '',
                    message: e.required && !a ? 'warning' : 'default',
                    autoFocus: e.focus,
                  });
                })(e)
              : 'select' === e.type
                ? (function (e) {
                    var t = u.map(function (e) {
                      return { value: e, label: e };
                    });
                    return o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(F, {
                        textPlaceholder: C(
                          'formField.formFieldPopup.fieldName'
                        ),
                        options: t,
                        onChange: function (t) {
                          return (function (e, t) {
                            null === t
                              ? (e.onChange(''), V(null))
                              : (e.onChange(t.value),
                                V({ value: t.value, label: t.value }));
                          })(e, t);
                        },
                        value: B,
                        isValid: a,
                        messageText: C(l),
                      }),
                      o.a.createElement(
                        'div',
                        { className: 'radio-group-label' },
                        C('formField.formFieldPopup.radioGroups')
                      )
                    );
                  })(e)
                : void 0;
          }
          Object(r.useEffect)(
            function () {
              V('' !== h ? { value: h, label: h } : null);
            },
            [h]
          );
          var Y = C(
            'formField.formFieldPopup.indicatorPlaceHolders.'.concat(
              g.getFormFieldPlaceholderType()
            )
          );
          return o.a.createElement(
            'div',
            { className: j, ref: L },
            o.a.createElement(
              'div',
              { className: 'fields-container' },
              t.map(function (e) {
                return o.a.createElement(
                  'div',
                  { className: 'field-input', key: e.label },
                  o.a.createElement(
                    'label',
                    null,
                    C(e.label),
                    e.required ? '*' : '',
                    ':'
                  ),
                  W(e)
                );
              })
            ),
            m &&
              o.a.createElement(
                'div',
                { className: 'field-options-container' },
                C('formField.formFieldPopup.options'),
                o.a.createElement(_, {
                  options: m,
                  onOptionsUpdated: b,
                  popupRef: L,
                })
              ),
            o.a.createElement(
              'div',
              { className: 'field-flags-container' },
              o.a.createElement(
                'span',
                { className: 'field-flags-title' },
                C('formField.formFieldPopup.flags')
              ),
              n.map(function (e) {
                return o.a.createElement(f.a, {
                  key: e.label,
                  checked: e.isChecked,
                  onChange: function (t) {
                    return e.onChange(t.target.checked);
                  },
                  label: C(e.label),
                });
              })
            ),
            o.a.createElement(E, {
              width: A,
              height: N,
              onWidthChange: function (e) {
                var t = (function (e) {
                  var t = v() - g.X;
                  if (e > t) return t;
                  return e;
                })(e);
                g.setWidth(t), k(t), w(g);
              },
              onHeightChange: function (e) {
                var t = (function (e) {
                  var t = y() - g.Y;
                  if (e > t) return t;
                  return e;
                })(e);
                g.setHeight(t), R(t), w(g);
              },
            }),
            o.a.createElement(O.a, null),
            o.a.createElement(H, { indicator: x, indicatorPlaceholder: Y }),
            o.a.createElement(
              'div',
              { className: 'form-buttons-container' },
              o.a.createElement(d.a, {
                className: 'cancel-form-field-button',
                onClick: function () {
                  if (
                    !a &&
                    '' ===
                      t
                        .find(function (e) {
                          return e.label.includes('fieldName');
                        })
                        .value.trim()
                  )
                    return P(g), void i();
                  (A === T && N === D) || (g.setWidth(T), g.setHeight(D)),
                    w(g),
                    i();
                },
                dataElement: 'formFieldCancel',
                label: C('formField.formFieldPopup.cancel'),
              }),
              o.a.createElement(d.a, {
                className: 'ok-form-field-button',
                onClick: i,
                dataElement: 'formFieldOK',
                label: C('action.ok'),
                disabled: !a,
              })
            )
          );
        },
        V = n(79),
        W = n(406),
        Y = n(57),
        G = n(124);
      n(1521);
      function q(e) {
        return (q =
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
      function Q(e, t) {
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
              var r,
                o,
                i,
                a,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = i.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return z(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return z(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function $(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? $(Object(n), !0).forEach(function (t) {
                J(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : $(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function J(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== q(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || 'default');
                if ('object' !== q(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === q(t) ? t : String(t);
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
      var X = function (e) {
          var t = e.selectProps.menuIsOpen;
          return o.a.createElement(
            V.f.IndicatorsContainer,
            e,
            o.a.createElement(P.a, {
              className: 'arrow',
              glyph: 'icon-chevron-'.concat(t ? 'up' : 'down'),
            })
          );
        },
        Z = function (e) {
          var t,
            n = e.onChangeHandler,
            i = e.initialOption,
            a = Object(s.a)().t,
            l =
              ((t = !1),
              {
                valueContainer: function (e) {
                  return K(K({}, e), {}, { padding: '2px' });
                },
                control: function (e) {
                  return K(
                    K({}, e),
                    {},
                    {
                      backgroundColor: t ? '#21242A' : '#FFFFFF',
                      minHeight: '28px',
                      borderColor: t ? '#485056' : '#CFD4DA',
                      '&:hover': { borderColor: t ? '#485056' : '#CFD4DA' },
                    }
                  );
                },
                container: function (e) {
                  return K(
                    K({}, e),
                    {},
                    {
                      backgroundColor: t ? '#21242A' : '#FFFFFF',
                      height: '29px',
                      borderColor: t ? '#485056' : 'red',
                      '&:hover': { borderColor: t ? '#485056' : '#CFD4DA' },
                    }
                  );
                },
                indicatorsContainer: function (e) {
                  return K(
                    K({}, e),
                    {},
                    { paddingRight: '6px', height: '26px' }
                  );
                },
              }),
            u = [
              {
                value: G.a.FULL_SIGNATURE,
                label: a('formField.types.signature'),
              },
              { value: G.a.INITIALS, label: a('option.type.initials') },
            ],
            c = u.find(function (e) {
              return e.value === i;
            }),
            d = Q(Object(r.useState)(c), 2),
            p = d[0],
            f = d[1];
          return o.a.createElement(
            Y.a,
            {
              className: 'signature-options-container',
              dataElement: 'signatureOptionsDropdown',
            },
            o.a.createElement('label', null, a('formField.type'), ':'),
            o.a.createElement(
              b.a,
              null,
              o.a.createElement(W.b, {
                value: p,
                onChange: function (e) {
                  f(e), n(e);
                },
                styles: l,
                options: u,
                isSearchable: !1,
                isClearable: !1,
                components: { IndicatorsContainer: X },
              })
            )
          );
        };
      function ee(e, t) {
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
              var r,
                o,
                i,
                a,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = i.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return te(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return te(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function te(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var ne = function (e) {
          var t = e.fields,
            n = e.flags,
            i = e.closeFormFieldEditPopup,
            a = e.isValid,
            l = e.validationMessage,
            u = e.annotation,
            m = e.getPageHeight,
            b = e.getPageWidth,
            g = e.redrawAnnotation,
            h = e.onSignatureOptionChange,
            y = e.getSignatureOptionHandler,
            v = e.indicator,
            F = e.deleteAnnotation,
            w = Object(s.a)().t,
            x = c()({ Popup: !0, FormFieldEditPopup: !0 }),
            P = ee(Object(r.useState)(u.Width.toFixed(0)), 2),
            C = P[0],
            j = P[1],
            S = ee(Object(r.useState)(u.Height.toFixed(0)), 2),
            A = S[0],
            k = S[1],
            I = ee(Object(r.useState)(u.Width.toFixed(0)), 1)[0],
            N = ee(Object(r.useState)(u.Height.toFixed(0)), 1)[0],
            R = ee(
              Object(r.useState)(
                w(
                  'formField.formFieldPopup.indicatorPlaceHolders.SignatureFormField.'.concat(
                    y(u)
                  )
                )
              ),
              2
            ),
            T = R[0],
            D = R[1];
          return o.a.createElement(
            'div',
            { className: x },
            o.a.createElement(Z, {
              onChangeHandler: function (e) {
                h(e);
                var t = e.value;
                D(
                  w(
                    'formField.formFieldPopup.indicatorPlaceHolders.SignatureFormField.'.concat(
                      t
                    )
                  )
                );
              },
              initialOption: y(u),
            }),
            o.a.createElement(
              'div',
              { className: 'fields-container' },
              t.map(function (e) {
                return o.a.createElement(
                  'div',
                  { className: 'field-input', key: e.label },
                  o.a.createElement(
                    'label',
                    null,
                    w(e.label),
                    e.required ? '*' : '',
                    ':'
                  ),
                  (function (e) {
                    return o.a.createElement(p.a, {
                      type: 'text',
                      onChange: function (t) {
                        return e.onChange(t.target.value);
                      },
                      value: e.value,
                      fillWidth: 'false',
                      messageText: e.required && !a ? w(l) : '',
                      message: e.required && !a ? 'warning' : 'default',
                      autoFocus: e.focus,
                    });
                  })(e)
                );
              })
            ),
            o.a.createElement(
              'div',
              { className: 'field-flags-container' },
              o.a.createElement(
                'span',
                { className: 'field-flags-title' },
                w('formField.formFieldPopup.flags')
              ),
              n.map(function (e) {
                return o.a.createElement(f.a, {
                  key: e.label,
                  checked: e.isChecked,
                  onChange: function (t) {
                    return e.onChange(t.target.checked);
                  },
                  label: w(e.label),
                });
              })
            ),
            o.a.createElement(E, {
              width: C,
              height: A,
              onWidthChange: function (e) {
                var t = (function (e) {
                  var t = b() - u.X;
                  if (e > t) return t;
                  return e;
                })(e);
                u.setWidth(t), j(t), g(u);
              },
              onHeightChange: function (e) {
                var t = (function (e) {
                  var t = m() - u.Y;
                  if (e > t) return t;
                  return e;
                })(e);
                u.setHeight(t), k(t), g(u);
              },
            }),
            o.a.createElement(O.a, null),
            o.a.createElement(H, { indicator: v, indicatorPlaceholder: T }),
            o.a.createElement(
              'div',
              { className: 'form-buttons-container' },
              o.a.createElement(d.a, {
                className: 'cancel-form-field-button',
                onClick: function () {
                  if (
                    !a &&
                    '' ===
                      t
                        .find(function (e) {
                          return e.label.includes('fieldName');
                        })
                        .value.trim()
                  )
                    return F(u), void i();
                  (C === I && A === N) || (u.setWidth(I), u.setHeight(N)),
                    g(u),
                    i();
                },
                dataElement: 'formFieldCancel',
                label: w('formField.formFieldPopup.cancel'),
              }),
              o.a.createElement(d.a, {
                className: 'ok-form-field-button',
                onClick: i,
                dataElement: 'formFieldOK',
                label: w('action.ok'),
                disabled: !a,
              })
            )
          );
        },
        re = n(6),
        oe = n(2),
        ie = n(3),
        ae = n(147),
        le = n(312),
        ue = n(58),
        ce = n(5),
        de = n(55);
      function se(e) {
        return (se =
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
      function pe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? pe(Object(n), !0).forEach(function (t) {
                me(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : pe(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function me(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== se(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || 'default');
                if ('object' !== se(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === se(t) ? t : String(t);
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
      function be(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return ye(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          he(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ge(e, t) {
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
              var r,
                o,
                i,
                a,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = i.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          he(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function he(e, t) {
        if (e) {
          if ('string' == typeof e) return ye(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? ye(e, t)
                : void 0
          );
        }
      }
      function ye(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ve(e) {
        var t = e.annotation,
          n = l.a.getFormFieldCreationManager(),
          i = n.getFieldLabels(),
          u = ge(Object(r.useState)(''), 2),
          d = u[0],
          s = u[1],
          p = ge(Object(r.useState)(''), 2),
          f = p[0],
          m = p[1],
          b = ge(Object(r.useState)(!1), 2),
          g = b[0],
          h = b[1],
          y = ge(Object(r.useState)(!1), 2),
          v = y[0],
          F = y[1],
          E = ge(Object(r.useState)(!1), 2),
          O = E[0],
          w = E[1],
          x = ge(Object(r.useState)(!1), 2),
          P = x[0],
          C = x[1],
          j = ge(Object(r.useState)(!0), 2),
          S = j[0],
          A = j[1],
          k = ge(Object(r.useState)([]), 2),
          I = k[0],
          N = k[1],
          R = ge(Object(r.useState)({ left: 0, top: 0 }), 2),
          T = R[0],
          D = R[1],
          L = ge(Object(r.useState)(''), 2),
          _ = L[0],
          H = L[1],
          M = ge(Object(r.useState)(!1), 2),
          U = M[0],
          V = M[1],
          W = ge(Object(r.useState)(''), 2),
          G = W[0],
          q = W[1],
          Q = Object(r.useRef)(),
          z = ge(
            Object(re.e)(function (e) {
              return [ie.a.isElementOpen(e, ce.a.FORM_FIELD_EDIT_POPUP)];
            }, re.c),
            1
          )[0],
          $ = Object(re.d)();
        function K() {
          $(oe.a.enableElement(ce.a.ANNOTATION_POPUP, de.b)),
            $(oe.a.closeElement(ce.a.FORM_FIELD_EDIT_POPUP)),
            s(''),
            m(''),
            h(!1),
            F(!1),
            w(!1),
            C(!1),
            A(!0),
            V(!1),
            q('');
        }
        Object(ae.a)(Q, function () {
          '' !== d.trim() && K();
        });
        var J = Object(r.useCallback)(function (e) {
          l.a.deleteAnnotations([e]);
        }, []);
        Object(r.useEffect)(function () {
          var e = function () {
            N(n.getRadioButtonGroups());
          };
          return (
            l.a.addEventListener('formFieldCreationModeStarted', e),
            function () {
              l.a.removeEventListener('formFieldCreationModeStarted', e);
            }
          );
        }, []),
          Object(r.useEffect)(function () {
            var e = l.a
                .getAnnotationsList()
                .filter(function (e) {
                  return (
                    e.isFormFieldPlaceholder() &&
                    'RadioButtonFormField' === e.getFormFieldPlaceholderType()
                  );
                })
                .map(function (e) {
                  return n.getFieldName(e);
                }),
              t = be(new Set(be(e)));
            N(t);
          }, []),
          Object(r.useLayoutEffect)(
            function () {
              if (z && t) {
                Q.current && D(Object(le.c)(t, Q)),
                  s(n.getFieldName(t)),
                  m(n.getFieldValue(t)),
                  h(n.getFieldFlag(t, i.READ_ONLY)),
                  F(n.getFieldFlag(t, i.MULTI_LINE)),
                  w(n.getFieldFlag(t, i.REQUIRED)),
                  C(n.getFieldFlag(t, i.MULTI_SELECT));
                var e = be(
                  new Set([].concat(be(I), be(n.getRadioButtonGroups())))
                );
                N(e);
                var r = !!n.getFieldName(t);
                A(r);
                var o = '';
                r || (o = 'formField.formFieldPopup.invalidField.empty'),
                  H(o),
                  V(n.getShowIndicator(t)),
                  q(n.getIndicatorText(t));
              }
            },
            [z]
          );
        var X = Object(r.useCallback)(
            function (e) {
              var r = n.setFieldName(t, e);
              A(r.isValid), Z(r), s(e);
            },
            [t]
          ),
          Z = function (e) {
            var t = '';
            switch (e.errorType) {
              case 'empty':
                t = 'formField.formFieldPopup.invalidField.empty';
                break;
              case 'duplicate':
                t = 'formField.formFieldPopup.invalidField.duplicate';
            }
            H(t);
          },
          ee = Object(r.useCallback)(
            function (e) {
              m(e), n.setFieldValue(t, e);
            },
            [t]
          ),
          te = Object(r.useCallback)(
            function (e) {
              h(e), n.setFieldFlag(t, i.READ_ONLY, e);
            },
            [t]
          ),
          se = Object(r.useCallback)(
            function (e) {
              F(e), n.setFieldFlag(t, i.MULTI_LINE, e);
            },
            [t]
          ),
          pe = Object(r.useCallback)(
            function (e) {
              w(e), n.setFieldFlag(t, i.REQUIRED, e);
            },
            [t]
          ),
          me = Object(r.useCallback)(
            function (e) {
              C(e), n.setFieldFlag(t, i.MULTI_SELECT, e);
            },
            [t]
          ),
          he = Object(r.useCallback)(
            function (e) {
              n.setFieldOptions(t, e);
            },
            [t]
          ),
          ye = Object(r.useCallback)(
            function (e) {
              V(e), n.setShowIndicator(t, e);
            },
            [t]
          ),
          ve = Object(r.useCallback)(
            function (e) {
              q(e), n.setIndicatorText(t, e);
            },
            [t]
          ),
          Fe = Object(r.useCallback)(function () {
            K();
          }, []),
          Ee = Object(r.useCallback)(
            function () {
              S && -1 === I.indexOf(d) && '' !== d && N([d].concat(be(I))), K();
            },
            [d, I]
          ),
          Oe = Object(r.useCallback)(function (e) {
            l.a.getAnnotationManager().drawAnnotationsFromList([e]);
          }, []),
          we = Object(r.useCallback)(function () {
            return l.a.getPageHeight(l.a.getCurrentPage());
          }, []),
          xe = Object(r.useCallback)(function () {
            return l.a.getPageWidth(l.a.getCurrentPage());
          }, []),
          Pe = Object(r.useCallback)(
            function (e) {
              var r = e.value;
              n.setSignatureOption(t, r);
            },
            [t]
          ),
          Ce = Object(r.useCallback)(function (e) {
            return n.getSignatureOption(e);
          }, []),
          je = {
            NAME: {
              label: 'formField.formFieldPopup.fieldName',
              onChange: X,
              value: d,
              required: !0,
              type: 'text',
              focus: !0,
            },
            VALUE: {
              label: 'formField.formFieldPopup.fieldValue',
              onChange: ee,
              value: f,
              type: 'text',
            },
            RADIO_GROUP: {
              label: 'formField.formFieldPopup.fieldName',
              onChange: X,
              value: d,
              required: !0,
              type: 'select',
            },
          },
          Se = [je.NAME, je.VALUE],
          Ae = [je.NAME],
          ke = [je.RADIO_GROUP],
          Ie = [je.NAME],
          Ne = [je.NAME],
          Re = Object(ue.b)(),
          Te = {
            READ_ONLY: {
              label: 'formField.formFieldPopup.readOnly',
              onChange: te,
              isChecked: g,
            },
            MULTI_LINE: {
              label: 'formField.formFieldPopup.multiLine',
              onChange: se,
              isChecked: v,
            },
            REQUIRED: {
              label: 'formField.formFieldPopup.required',
              onChange: pe,
              isChecked: O,
            },
            MULTI_SELECT: {
              label: 'formField.formFieldPopup.multiSelect',
              onChange: me,
              isChecked: P,
            },
          },
          De = [Te.READ_ONLY, Te.MULTI_LINE, Te.REQUIRED],
          Le = [Te.REQUIRED, Te.READ_ONLY],
          _e = [Te.READ_ONLY, Te.REQUIRED],
          He = [Te.READ_ONLY, Te.REQUIRED],
          Me = [Te.MULTI_SELECT, Te.READ_ONLY, Te.REQUIRED],
          Ue = [Te.READ_ONLY, Te.REQUIRED],
          Be = {
            label: 'formField.formFieldPopup.documentFieldIndicator',
            toggleIndicator: ye,
            isChecked: U,
            onChange: ve,
            value: G,
          },
          Ve = function () {
            var e,
              r = null == t ? void 0 : t.getFormFieldPlaceholderType();
            return 'TextFormField' === r
              ? o.a.createElement(B, {
                  fields: Se,
                  flags: De,
                  closeFormFieldEditPopup: Fe,
                  isValid: S,
                  validationMessage: _,
                  annotation: t,
                  redrawAnnotation: Oe,
                  getPageHeight: we,
                  getPageWidth: xe,
                  indicator: Be,
                  deleteAnnotation: J,
                })
              : 'SignatureFormField' === r
                ? o.a.createElement(ne, {
                    fields: Ae,
                    flags: Le,
                    closeFormFieldEditPopup: Fe,
                    isValid: S,
                    validationMessage: _,
                    annotation: t,
                    redrawAnnotation: Oe,
                    getPageHeight: we,
                    getPageWidth: xe,
                    onSignatureOptionChange: Pe,
                    getSignatureOptionHandler: Ce,
                    indicator: Be,
                    deleteAnnotation: J,
                  })
                : 'CheckBoxFormField' === r
                  ? o.a.createElement(B, {
                      fields: Ae,
                      flags: _e,
                      closeFormFieldEditPopup: Fe,
                      isValid: S,
                      validationMessage: _,
                      annotation: t,
                      redrawAnnotation: Oe,
                      getPageHeight: we,
                      getPageWidth: xe,
                      indicator: Be,
                      deleteAnnotation: J,
                    })
                  : 'RadioButtonFormField' === r
                    ? o.a.createElement(B, {
                        fields: ke,
                        flags: He,
                        closeFormFieldEditPopup: Ee,
                        isValid: S,
                        validationMessage: _,
                        radioButtonGroups: I,
                        annotation: t,
                        selectedRadioGroup: d,
                        redrawAnnotation: Oe,
                        getPageHeight: we,
                        getPageWidth: xe,
                        indicator: Be,
                        deleteAnnotation: J,
                      })
                    : 'ListBoxFormField' === r
                      ? ((e = n.getFieldOptions(t)),
                        o.a.createElement(B, {
                          fields: Ie,
                          flags: Me,
                          options: e,
                          onOptionsChange: he,
                          closeFormFieldEditPopup: Fe,
                          isValid: S,
                          validationMessage: _,
                          annotation: t,
                          redrawAnnotation: Oe,
                          getPageHeight: we,
                          getPageWidth: xe,
                          indicator: Be,
                          deleteAnnotation: J,
                        }))
                      : 'ComboBoxFormField' === r
                        ? (function () {
                            var e = n.getFieldOptions(t);
                            return o.a.createElement(B, {
                              fields: Ne,
                              flags: Ue,
                              options: e,
                              onOptionsChange: he,
                              closeFormFieldEditPopup: Fe,
                              isValid: S,
                              validationMessage: _,
                              annotation: t,
                              redrawAnnotation: Oe,
                              getPageHeight: we,
                              getPageWidth: xe,
                              indicator: Be,
                              deleteAnnotation: J,
                            });
                          })()
                        : null;
          },
          We = function () {
            return o.a.createElement(
              Y.a,
              {
                className: c()({
                  Popup: !0,
                  FormFieldEditPopupContainer: !0,
                  open: z,
                  closed: !z,
                }),
                'data-element': ce.a.FORM_FIELD_EDIT_POPUP,
                style: fe({}, T),
                ref: Q,
              },
              z && Ve()
            );
          };
        return Re
          ? We()
          : o.a.createElement(
              a.a,
              {
                cancel:
                  '.Button, .cell, .sliders-container svg, .creatable-list, .ui__input__input, .form-dimension-input, .ui__choice__input',
              },
              We()
            );
      }
      var Fe = o.a.memo(ve);
      t.default = Fe;
    },
  },
]);
//# sourceMappingURL=23.chunk.js.map
