(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    1568: function (t, e, o) {
      var n = o(27),
        a = o(1569);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[t.i, a, '']]);
      var r = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const o = [];
            for (let n = 0; n < e.length; n++) {
              const a = e[n];
              if (0 === n)
                a.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    o.length > 0 &&
                      o.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                a.shadowRoot.appendChild(e), o.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      n(a, r);
      t.exports = a.locals || {};
    },
    1569: function (t, e, o) {
      (e = t.exports = o(28)(!1)).push([
        t.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.text-customstamp{padding:16px;margin:0;display:flex;flex-direction:column}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp{width:100%;padding:4px 8px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .scroll-container{width:100%;max-height:50%;padding-bottom:0;margin-bottom:0;overflow-y:auto;overflow-x:visible}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp{width:100%;padding:4px 8px}.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .scroll-container{width:100%;max-height:50%;padding-bottom:0;margin-bottom:0;overflow-y:auto;overflow-x:visible}}.text-customstamp-input{outline:none;border-radius:4px;border:1px solid var(--modal-stroke-and-border);box-shadow:none;padding:5px}.text-customstamp .txt-uppercase{text-transform:uppercase}.text-customstamp-container{position:relative;margin-top:10px;flex:1;border:1px solid var(--modal-stroke-and-border);border-radius:4px;overflow:auto}.text-customstamp-container canvas{position:absolute;visibility:hidden;z-index:-1;width:100%;height:100%}.text-customstamp-inner-container{position:absolute;min-width:100%}.text-customstamp .canvas-container{border:1px solid var(--modal-stroke-and-border);box-sizing:border-box;position:relative;overflow:hidden;background-color:var(--signature-draw-background);display:flex;flex-direction:row;justify-content:center;padding:48px 74px;border-radius:4px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .canvas-container{padding:12px .5px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .canvas-container{padding:12px .5px}}.text-customstamp .canvas-container .custom-stamp-canvas{box-sizing:border-box}@media(max-width:430px){.text-customstamp .canvas-container .custom-stamp-canvas{transform:scale(.8)}}.text-customstamp .color-container{margin-top:16px;width:100%}.text-customstamp .color-container .ColorPalette{display:flex;flex-wrap:wrap;width:100%;grid-gap:4px;gap:4px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .color-container .ColorPalette{padding:4px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .color-container .ColorPalette{padding:4px}}.text-customstamp .color-container .ColorPalette .cell-outer{margin-right:16px}.text-customstamp .color-container .ColorPalette .cell-outer.active{margin-left:-4px;margin-right:10px}.text-customstamp .color-container .ColorPalette .cell-container{flex:unset;width:auto;height:auto}.text-customstamp .stamp-input-container{margin-top:16px;padding:0;height:52px}.text-customstamp .stamp-input-container .text-customstamp-input{width:100%;padding:6px}.text-customstamp .stamp-label,.text-customstamp .stamp-sublabel{font-weight:700;margin-bottom:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .stamp-label,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .stamp-sublabel{font-size:13px;height:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .stamp-label,.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .stamp-sublabel{font-size:13px;height:16px}}.text-customstamp .timestamp-container{margin-top:16px;padding:0}.text-customstamp .timestamp-container .timeStamp-choice{height:16px;display:grid;width:100%;grid-template-columns:22.32% 22.32% 22.32% 33.04%;grid-gap:16px}@media(max-width:430px){.text-customstamp .timestamp-container .timeStamp-choice{grid-template-columns:30% 30% 30%;height:100%;font-size:13px}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.text-customstamp .timestamp-container .timeStamp-choice .ui__choice{display:-ms-inline-flexbox;width:33.33%}}.text-customstamp .timestamp-container .timeStamp-choice .ui__choice{margin:0;line-height:1}.text-customstamp .timestamp-container .timeStamp-choice .ui__choice .ui__choice__label{padding-left:4px}.text-customstamp .date-format-container{margin-top:16px;display:flex;flex-wrap:wrap}.text-customstamp .date-format-container .Dropdown__wrapper{width:100%}.text-customstamp .date-format-container .Dropdown__wrapper .Dropdown{width:100%!important;text-align:left}.text-customstamp .date-format-container .Dropdown__wrapper .arrow{flex:unset}.text-customstamp .date-format-container .Dropdown__wrapper .Dropdown__items{z-index:101;bottom:100%;top:auto;left:0;right:auto}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .date-format-container .Dropdown__wrapper .Dropdown__items{max-height:200px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .date-format-container .Dropdown__wrapper .Dropdown__items{max-height:200px}}.text-customstamp .date-format-container .hover-icon{margin-left:2px;position:relative}.text-customstamp .date-format-container .hover-icon .Icon{width:18px;height:18px}.text-customstamp .date-format-container .hover-icon .date-format-description{display:flex;flex-direction:column;text-align:left;visibility:hidden;position:absolute;background-color:#000;border-radius:5px;padding:12px;color:#fff;width:120px;z-index:101;bottom:100%;top:auto;left:0;right:auto}.text-customstamp .date-format-container .hover-icon:hover .Icon{color:var(--blue-6)}.text-customstamp .date-format-container .hover-icon:hover .date-format-description{visibility:visible}.text-customstamp .font-container{margin-top:16px}.text-customstamp .font-container .font-inner-container{display:flex;grid-gap:12px;gap:12px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .font-container .font-inner-container{grid-gap:6px;gap:6px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .font-container .font-inner-container{grid-gap:6px;gap:6px}}.text-customstamp .font-container .stamp-sublabel{font-weight:700;margin-bottom:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .font-container .stamp-sublabel{font-size:13px;height:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .font-container .stamp-sublabel{font-size:13px;height:16px}}.text-customstamp .font-container .Dropdown__wrapper .Dropdown{margin-right:4px;width:216px!important;text-align:left}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .font-container .Dropdown__wrapper .Dropdown{width:200px!important}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .font-container .Dropdown__wrapper .Dropdown{width:200px!important}}.text-customstamp .font-container .Dropdown__wrapper .arrow{flex:unset}.text-customstamp .font-container .Dropdown__wrapper .Dropdown__items{bottom:100%;top:auto;left:0;right:auto}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .text-customstamp .font-container .Dropdown__wrapper .Dropdown__items{bottom:auto;height:200px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .text-customstamp .font-container .Dropdown__wrapper .Dropdown__items{bottom:auto;height:200px}}.text-customstamp .font-container .Button{background:none;width:28px;height:28px;margin:0}.text-customstamp .font-container .Button .Icon{height:26px;width:26px;color:var(--icon-color)}.text-customstamp .font-container .Button:hover{background:var(--popup-button-hover)}.text-customstamp .font-container .Button.active{background:var(--popup-button-active)}.text-customstamp .font-container .Button.active .Icon{color:var(--blue-6)}.text-customstamp .custom-checkbox{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-bottom:5px;margin-top:5px}.text-customstamp .custom-checkbox input{display:none}.text-customstamp .custom-checkbox input+label:before{cursor:pointer;content:"";margin:1px 10px 0 0;display:inline-block;vertical-align:text-top;width:16px;height:16px;border-radius:4px;border:1px solid #979797}.text-customstamp .custom-checkbox input:checked+label:before{background:#00a5e4;border:1px solid transparent}.text-customstamp .custom-checkbox input:checked+label:after{content:"";position:absolute;left:4px;top:9px;background:#fff;width:2px;height:2px;box-shadow:2px 0 0 #fff,4px 0 0 #fff,4px -2px 0 #fff,4px -4px 0 #fff,4px -6px 0 #fff,4px -8px 0 #fff;transform:rotate(45deg)}.text-customstamp .custom-checkbox label{align-items:center}.text-customstamp .empty-stamp-input{color:var(--error-text-color)}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1570: function (t, e, o) {
      var n = o(27),
        a = o(1571);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[t.i, a, '']]);
      var r = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const o = [];
            for (let n = 0; n < e.length; n++) {
              const a = e[n];
              if (0 === n)
                a.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    o.length > 0 &&
                      o.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                a.shadowRoot.appendChild(e), o.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      n(a, r);
      t.exports = a.locals || {};
    },
    1571: function (t, e, o) {
      (e = t.exports = o(28)(!1)).push([
        t.i,
        '.open.CustomStampModal{visibility:visible}.closed.CustomStampModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.CustomStampModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.CustomStampModal .modal-container .wrapper .modal-content{padding:10px}.CustomStampModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.CustomStampModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.CustomStampModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.CustomStampModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.CustomStampModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.CustomStampModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.CustomStampModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.CustomStampModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.CustomStampModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.CustomStampModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CustomStampModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CustomStampModal .footer .modal-button{padding:23px 8px}}.CustomStampModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CustomStampModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .CustomStampModal .swipe-indicator{display:none}}@media(max-height:500px){.App:not(.is-web-component) .CustomStampModal .container,.CustomStampModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .CustomStampModal .container,.CustomStampModal .App.is-web-component .container{overflow:auto;max-height:100%}}.CustomStampModal .container{display:flex;flex-direction:column;width:480px;padding:0;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);overflow-y:auto;max-height:100%}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CustomStampModal .container{width:100%;position:fixed;border-radius:0;left:0;bottom:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CustomStampModal .container{width:100%;position:fixed;border-radius:0;left:0;bottom:0}}.CustomStampModal .container .header{box-shadow:inset 0 -1px 0 var(--modal-stroke-and-border);margin:0;display:flex;align-items:center;width:100%;padding:16px}.CustomStampModal .container .header p{font-size:16px;font-weight:700;width:89.286%;margin:0 16px 0 0}.CustomStampModal .container .header .Button{position:static;height:32px;width:32px;border-radius:4px}.CustomStampModal .container .header .Button:hover{background:var(--popup-button-hover)}.CustomStampModal .container .header .Button.selected{background:var(--popup-button-active);cursor:default}.CustomStampModal .container .footer{display:flex;align-items:center;flex-direction:row-reverse;justify-content:space-between;margin:0;top:460px;padding:16px;box-shadow:inset 0 1px 0 var(--modal-stroke-and-border)}.CustomStampModal .container .footer .stamp-close{border:none;background-color:transparent;color:var(--secondary-button-text);padding:0 8px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer}:host(:not([data-tabbing=true])) .CustomStampModal .container .footer .stamp-close,html:not([data-tabbing=true]) .CustomStampModal .container .footer .stamp-close{outline:none}.CustomStampModal .container .footer .stamp-close:hover{color:var(--secondary-button-hover)}.CustomStampModal .container .footer .stamp-create{border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;height:32px;display:flex;align-items:center;padding:8px 16px;width:72px;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer}:host(:not([data-tabbing=true])) .CustomStampModal .container .footer .stamp-create,html:not([data-tabbing=true]) .CustomStampModal .container .footer .stamp-create{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CustomStampModal .container .footer .stamp-create{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CustomStampModal .container .footer .stamp-create{font-size:13px}}.CustomStampModal .container .footer .stamp-create:hover{background:var(--primary-button-hover)}.CustomStampModal .container .footer .stamp-create-disabled{background:var(--disabled-icon)}.CustomStampModal .container .footer .stamp-create-disabled:hover{background:var(--disabled-icon);cursor:default}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1736: function (t, e, o) {
      'use strict';
      o.r(e);
      o(18),
        o(11),
        o(13),
        o(7),
        o(12),
        o(8),
        o(9),
        o(10),
        o(15),
        o(14),
        o(20),
        o(17),
        o(51),
        o(22),
        o(67),
        o(68),
        o(69),
        o(70),
        o(41),
        o(44),
        o(24),
        o(25),
        o(46),
        o(66);
      var n = o(0),
        a = o.n(n),
        r = o(19),
        i = o.n(r),
        c = o(6),
        s = o(1371),
        p = o(1),
        l = o(2),
        m = o(3),
        d = o(362),
        u =
          (o(32),
          o(311),
          o(366),
          o(34),
          o(221),
          o(39),
          o(37),
          o(38),
          o(31),
          o(36),
          o(72),
          o(75),
          o(73),
          o(162)),
        f = o(148),
        h = o(21),
        x = o(33),
        b = o(492),
        v = o(43),
        w = o(4),
        g = o.n(w),
        y = (o(1568), o(23));
      function S(t) {
        return (S =
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
      function C(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? C(Object(o), !0).forEach(function (e) {
                E(t, e, o[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
              : C(Object(o)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(o, e)
                  );
                });
        }
        return t;
      }
      function E(t, e, o) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' !== S(t) || null === t) return t;
              var o = t[Symbol.toPrimitive];
              if (void 0 !== o) {
                var n = o.call(t, e || 'default');
                if ('object' !== S(n)) return n;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' === S(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = o),
          t
        );
      }
      function M(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var o =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != o) {
              var n,
                a,
                r,
                i,
                c = [],
                s = !0,
                p = !1;
              try {
                if (((r = (o = o.call(t)).next), 0 === e)) {
                  if (Object(o) !== o) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (n = r.call(o)).done) &&
                    (c.push(n.value), c.length !== e);
                    s = !0
                  );
              } catch (t) {
                (p = !0), (a = t);
              } finally {
                try {
                  if (
                    !s &&
                    null != o.return &&
                    ((i = o.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (p) throw a;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return A(t, e);
            var o = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === o && t.constructor && (o = t.constructor.name);
            if ('Map' === o || 'Set' === o) return Array.from(t);
            if (
              'Arguments' === o ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
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
        for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
        return n;
      }
      var O = { date: 'MM/DD/YYYY', time: 'hh:mm A', timeFirst: !1 },
        _ = function (t) {
          var e =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            o =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
          return e
            ? o
              ? t.timeFirst
                ? ''.concat(t.time, ' ').concat(t.date)
                : ''.concat(t.date, ' ').concat(t.time)
              : t.date
                ? t.date
                : ''
            : t.time
              ? t.time
              : '';
        },
        T = {
          state: g.a.object,
          setState: g.a.func,
          setEmptyInput: g.a.func,
          fonts: g.a.array,
          openColorPicker: g.a.func,
          getCustomColorAndRemove: g.a.func,
          openDeleteModal: g.a.func,
          dateTimeFormats: g.a.array,
          stampTool: g.a.object,
          userName: g.a.string,
        },
        j = function (t) {
          var e = t.state,
            o = t.setState,
            r = t.setEmptyInput,
            i = t.fonts,
            c = t.openColorPicker,
            s = t.getCustomColorAndRemove,
            p = t.openDeleteModal,
            l = t.dateTimeFormats,
            m = t.stampTool,
            w = t.userName,
            g = function (t, e, o) {
              var n = '';
              return t && (n += '[$currentUser] '), e && (n += o), n;
            },
            S = l && l[0] ? l[0] : O,
            C = M(Object(n.useState)(_(S)), 2),
            A = C[0],
            T = C[1],
            j = M(Object(n.useState)(!0), 2),
            L = j[0],
            D = j[1],
            N = M(Object(n.useState)(!0), 2),
            I = N[0],
            P = N[1],
            R = M(Object(n.useState)(!0), 2),
            B = R[0],
            H = R[1],
            F = M(Object(n.useState)('Draft'), 2),
            z = F[0],
            U = F[1],
            G = M(Object(d.a)(), 1)[0],
            Y = g(L, I, A),
            W = M(Object(n.useState)(Y), 2),
            V = W[0],
            X = W[1],
            $ = Object(n.useRef)(),
            J = Object(n.useRef)(),
            K = Object(n.useRef)(),
            q = function (t, n) {
              var a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : e,
                r = {
                  canvas: $.current,
                  title: t,
                  subtitle: n,
                  width: 300,
                  height: 100,
                  color: a.color,
                  textColor: a.textColor,
                  canvasParent: J.current,
                  font: a.font,
                  bold: a.bold,
                  italic: a.italic,
                  underline: a.underline,
                  strikeout: a.strikeout,
                },
                i = m.drawCustomStamp(r),
                c = $.current.toDataURL();
              o(
                k(
                  k({}, a),
                  {},
                  {
                    width: i,
                    title: t,
                    subtitle: n,
                    height: r.height,
                    dataURL: c,
                  }
                )
              );
            };
          Object(n.useEffect)(
            function () {
              q(z, V, e);
            },
            [w]
          );
          var Q = function (t) {
              q(z, V, k(k({}, e), {}, E({}, t, !e[t])));
            },
            Z = G('option.customStampModal.stampText'),
            tt = function (t) {
              return t && t.A ? t.toHexString().toLowerCase() : '#000000';
            },
            et = function (t, o) {
              var n = 'text' === o;
              c();
              Object(y.c)().instance.UI.addEventListener(
                v.a.VISIBILITY_CHANGED,
                function t(o) {
                  var a = o.detail,
                    r = a.element,
                    i = a.isVisible;
                  if ('ColorPickerModal' === r && !i) {
                    var c = s();
                    if (c) {
                      var p = tt(c);
                      n ? bt(p) : st(p);
                      var l =
                        window.Core.Tools.RubberStampCreateTool[
                          n ? 'TEXT_COLORS' : 'FILL_COLORS'
                        ];
                      l.push(p),
                        n ? ft(l) : rt(l),
                        (e = k(
                          k({}, e),
                          {},
                          E({}, n ? 'textColor' : 'color', p)
                        )),
                        q(z, V, e);
                    }
                  }
                  Object(y.c)().instance.UI.removeEventListener(
                    v.a.VISIBILITY_CHANGED,
                    t
                  );
                }
              );
            },
            ot = function (t) {
              var e = 'text' === t;
              p(function () {
                var t = e
                  ? ut.filter(function (t) {
                      return t !== wt;
                    })
                  : at.filter(function (t) {
                      return t !== lt;
                    });
                e ? ft(t) : rt(t),
                  e ? gt(null) : mt(null),
                  (window.Core.Tools.RubberStampCreateTool[
                    e ? 'TEXT_COLORS' : 'FILL_COLORS'
                  ] = t);
              });
            },
            nt = M(
              Object(n.useState)(
                window.Core.Tools.RubberStampCreateTool.FILL_COLORS
              ),
              2
            ),
            at = nt[0],
            rt = nt[1],
            it = M(
              Object(n.useState)(
                e.color ||
                  window.Core.Tools.RubberStampCreateTool.FILL_COLORS[0]
              ),
              2
            ),
            ct = it[0],
            st = it[1],
            pt = M(Object(n.useState)(null), 2),
            lt = pt[0],
            mt = pt[1],
            dt = M(
              Object(n.useState)(
                window.Core.Tools.RubberStampCreateTool.TEXT_COLORS
              ),
              2
            ),
            ut = dt[0],
            ft = dt[1],
            ht = M(
              Object(n.useState)(
                window.Core.Tools.RubberStampCreateTool.TEXT_COLORS[0]
              ),
              2
            ),
            xt = ht[0],
            bt = ht[1],
            vt = M(Object(n.useState)(null), 2),
            wt = vt[0],
            gt = vt[1],
            yt = function (t) {
              bt(t), (e = k(k({}, e), {}, { textColor: t })), q(z, V, e);
            },
            St = function (t) {
              st(t), (e = k(k({}, e), {}, { color: t })), q(z, V, e);
            },
            Ct = l || [O],
            kt = Array.from(
              new Set(
                Ct.map(function (t) {
                  return _(t, I, B);
                })
              )
            ).filter(function (t) {
              return '' !== t;
            });
          return a.a.createElement(
            'div',
            { className: 'text-customstamp' },
            a.a.createElement(
              'div',
              { className: 'canvas-container', ref: J },
              a.a.createElement('canvas', {
                className: 'custom-stamp-canvas',
                ref: $,
              })
            ),
            a.a.createElement(
              'div',
              { className: 'scroll-container' },
              a.a.createElement(
                'div',
                { className: 'stamp-input-container' },
                a.a.createElement(
                  'div',
                  { className: 'stamp-label' },
                  ' ',
                  Z,
                  ' '
                ),
                a.a.createElement('input', {
                  className: 'text-customstamp-input',
                  ref: K,
                  type: 'text',
                  'aria-label': Z.substring(0, Z.length - 1),
                  value: z,
                  onChange: function (t) {
                    var e = t.target.value || '';
                    U(e), r(!e), q(e, V);
                  },
                }),
                !z &&
                  a.a.createElement(
                    'div',
                    { className: 'empty-stamp-input' },
                    G('message.emptyCustomStampInput')
                  )
              ),
              a.a.createElement(
                'div',
                { className: 'font-container' },
                a.a.createElement(
                  'div',
                  { className: 'stamp-sublabel' },
                  ' ',
                  G('option.customStampModal.fontStyle'),
                  ' '
                ),
                a.a.createElement(
                  'div',
                  { className: 'font-inner-container' },
                  a.a.createElement(f.a, {
                    items: i,
                    onClickItem: function (t) {
                      q(z, V, k(k({}, e), {}, { font: t }));
                    },
                    currentSelectionKey: e.font || i[0],
                    getCustomItemStyle: function (t) {
                      return { fontFamily: t };
                    },
                  }),
                  a.a.createElement(h.a, {
                    dataElement: 'stampTextBoldButton',
                    onClick: function () {
                      return Q('bold');
                    },
                    img: 'icon-menu-bold',
                    title: 'option.richText.bold',
                    isActive: e.bold,
                  }),
                  a.a.createElement(h.a, {
                    dataElement: 'stampTextItalicButton',
                    onClick: function () {
                      return Q('italic');
                    },
                    img: 'icon-menu-italic',
                    title: 'option.richText.italic',
                    isActive: e.italic,
                  }),
                  a.a.createElement(h.a, {
                    dataElement: 'stampTextUnderlineButton',
                    onClick: function () {
                      return Q('underline');
                    },
                    img: 'icon-menu-text-underline',
                    title: 'option.richText.underline',
                    isActive: e.underline,
                  }),
                  a.a.createElement(h.a, {
                    dataElement: 'stampTextStrikeoutButton',
                    onClick: function () {
                      return Q('strikeout');
                    },
                    img: 'icon-tool-text-manipulation-strikethrough',
                    title: 'option.richText.strikeout',
                    isActive: e.strikeout,
                  })
                )
              ),
              a.a.createElement(
                'div',
                { className: 'color-container' },
                a.a.createElement(
                  'div',
                  { className: 'stamp-sublabel' },
                  G('option.customStampModal.textColor')
                ),
                a.a.createElement(
                  'div',
                  { className: 'colorpalette-container' },
                  a.a.createElement(b.a, {
                    getHexColor: tt,
                    color: xt,
                    setColorToBeDeleted: gt,
                    colorToBeDeleted: wt,
                    customColors: ut,
                    onStyleChange: bt,
                    handleColorOnClick: yt,
                    handleOnClick: yt,
                    openColorPicker: function (t) {
                      return et(0, 'text');
                    },
                    openDeleteModal: function () {
                      return ot('text');
                    },
                    disableTitle: !0,
                    enableEdit: !0,
                    colorsAreHex: !0,
                  })
                )
              ),
              a.a.createElement(
                'div',
                { className: 'color-container' },
                a.a.createElement(
                  'div',
                  { className: 'stamp-sublabel' },
                  G('option.customStampModal.backgroundColor')
                ),
                a.a.createElement(
                  'div',
                  { className: 'colorpalette-container' },
                  a.a.createElement(b.a, {
                    getHexColor: tt,
                    color: ct,
                    setColorToBeDeleted: mt,
                    colorToBeDeleted: lt,
                    customColors: at,
                    onStyleChange: st,
                    handleColorOnClick: St,
                    handleOnClick: St,
                    openColorPicker: function (t) {
                      return et(0, 'fill');
                    },
                    openDeleteModal: function () {
                      return ot('fill');
                    },
                    disableTitle: !0,
                    enableEdit: !0,
                    colorsAreHex: !0,
                  })
                )
              ),
              a.a.createElement(
                'div',
                { className: 'timestamp-container' },
                a.a.createElement(
                  'div',
                  { className: 'stamp-sublabel' },
                  ' ',
                  G('option.customStampModal.timestampText'),
                  ' '
                ),
                a.a.createElement(
                  'div',
                  { className: 'timeStamp-choice' },
                  a.a.createElement(u.a, {
                    id: 'default-username',
                    checked: L,
                    onChange: function () {
                      D(!L);
                      var t = g(!L, I, A);
                      X(t), q(z, t);
                    },
                    label: G('option.customStampModal.Username'),
                  }),
                  a.a.createElement(u.a, {
                    id: 'default-date',
                    checked: I,
                    onChange: function () {
                      P(!I);
                      var t = _(S, !I, B);
                      T(t);
                      var e = g(L, !I || B, t);
                      X(e), q(z, e);
                    },
                    label: G('option.customStampModal.Date'),
                  }),
                  a.a.createElement(u.a, {
                    id: 'default-time',
                    checked: B,
                    onChange: function () {
                      H(!B);
                      var t = _(S, I, !B);
                      T(t);
                      var e = g(L, I || !B, t);
                      X(e), q(z, e);
                    },
                    label: G('option.customStampModal.Time'),
                  })
                )
              ),
              (I || B) &&
                a.a.createElement(
                  'div',
                  { className: 'date-format-container' },
                  a.a.createElement(
                    'div',
                    { className: 'stamp-sublabel' },
                    G('option.customStampModal.dateFormat')
                  ),
                  a.a.createElement(
                    'div',
                    { className: 'hover-icon' },
                    a.a.createElement(x.a, { glyph: 'icon-info' }),
                    a.a.createElement(
                      'div',
                      { className: 'date-format-description' },
                      a.a.createElement(
                        'div',
                        { className: 'date-format-cell' },
                        'M = ',
                        G('option.customStampModal.month')
                      ),
                      a.a.createElement(
                        'div',
                        { className: 'date-format-cell' },
                        'D = ',
                        G('option.customStampModal.day')
                      ),
                      a.a.createElement(
                        'div',
                        { className: 'date-format-cell' },
                        'Y = ',
                        G('option.customStampModal.year')
                      ),
                      a.a.createElement(
                        'div',
                        { className: 'date-format-cell' },
                        'H = ',
                        G('option.customStampModal.hour'),
                        ' (24hr)'
                      ),
                      a.a.createElement(
                        'div',
                        { className: 'date-format-cell' },
                        'h = ',
                        G('option.customStampModal.hour'),
                        ' (12hr)'
                      ),
                      a.a.createElement(
                        'div',
                        { className: 'date-format-cell' },
                        'm = ',
                        G('option.customStampModal.minute')
                      ),
                      a.a.createElement(
                        'div',
                        { className: 'date-format-cell' },
                        's = ',
                        G('option.customStampModal.second')
                      ),
                      a.a.createElement(
                        'div',
                        { className: 'date-format-cell' },
                        'A = AM/PM'
                      )
                    )
                  ),
                  a.a.createElement(f.a, {
                    items: kt,
                    currentSelectionKey: A,
                    onClickItem: function (t) {
                      T(t);
                      var e = g(L, I || B, t);
                      X(e), q(z, e);
                    },
                  })
                )
            )
          );
        };
      j.propTypes = T;
      var L = j,
        D = o(5);
      o(1570);
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
      function I(t, e) {
        var o =
          ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
          t['@@iterator'];
        if (!o) {
          if (
            Array.isArray(t) ||
            (o = F(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            o && (t = o);
            var n = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return n >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[n++] };
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
        var r,
          i = !0,
          c = !1;
        return {
          s: function () {
            o = o.call(t);
          },
          n: function () {
            var t = o.next();
            return (i = t.done), t;
          },
          e: function (t) {
            (c = !0), (r = t);
          },
          f: function () {
            try {
              i || null == o.return || o.return();
            } finally {
              if (c) throw r;
            }
          },
        };
      }
      function P() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ P =
          function () {
            return t;
          };
        var t = {},
          e = Object.prototype,
          o = e.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (t, e, o) {
              t[e] = o.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          r = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function s(t, e, o) {
          return (
            Object.defineProperty(t, e, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          s({}, '');
        } catch (t) {
          s = function (t, e, o) {
            return (t[e] = o);
          };
        }
        function p(t, e, o, a) {
          var r = e && e.prototype instanceof d ? e : d,
            i = Object.create(r.prototype),
            c = new E(a || []);
          return n(i, '_invoke', { value: y(t, o, c) }), i;
        }
        function l(t, e, o) {
          try {
            return { type: 'normal', arg: t.call(e, o) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = p;
        var m = {};
        function d() {}
        function u() {}
        function f() {}
        var h = {};
        s(h, r, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          b = x && x(x(M([])));
        b && b !== e && o.call(b, r) && (h = b);
        var v = (f.prototype = d.prototype = Object.create(h));
        function w(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function g(t, e) {
          var a;
          n(this, '_invoke', {
            value: function (n, r) {
              function i() {
                return new e(function (a, i) {
                  !(function n(a, r, i, c) {
                    var s = l(t[a], t, r);
                    if ('throw' !== s.type) {
                      var p = s.arg,
                        m = p.value;
                      return m && 'object' == N(m) && o.call(m, '__await')
                        ? e.resolve(m.__await).then(
                            function (t) {
                              n('next', t, i, c);
                            },
                            function (t) {
                              n('throw', t, i, c);
                            }
                          )
                        : e.resolve(m).then(
                            function (t) {
                              (p.value = t), i(p);
                            },
                            function (t) {
                              return n('throw', t, i, c);
                            }
                          );
                    }
                    c(s.arg);
                  })(n, r, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function y(t, e, o) {
          var n = 'suspendedStart';
          return function (a, r) {
            if ('executing' === n)
              throw new Error('Generator is already running');
            if ('completed' === n) {
              if ('throw' === a) throw r;
              return A();
            }
            for (o.method = a, o.arg = r; ; ) {
              var i = o.delegate;
              if (i) {
                var c = S(i, o);
                if (c) {
                  if (c === m) continue;
                  return c;
                }
              }
              if ('next' === o.method) o.sent = o._sent = o.arg;
              else if ('throw' === o.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), o.arg);
                o.dispatchException(o.arg);
              } else 'return' === o.method && o.abrupt('return', o.arg);
              n = 'executing';
              var s = l(t, e, o);
              if ('normal' === s.type) {
                if (
                  ((n = o.done ? 'completed' : 'suspendedYield'), s.arg === m)
                )
                  continue;
                return { value: s.arg, done: o.done };
              }
              'throw' === s.type &&
                ((n = 'completed'), (o.method = 'throw'), (o.arg = s.arg));
            }
          };
        }
        function S(t, e) {
          var o = e.method,
            n = t.iterator[o];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ('throw' === o &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                S(t, e),
                'throw' === e.method)) ||
                ('return' !== o &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + o + "' method"
                  )))),
              m
            );
          var a = l(n, t.iterator, e.arg);
          if ('throw' === a.type)
            return (
              (e.method = 'throw'), (e.arg = a.arg), (e.delegate = null), m
            );
          var r = a.arg;
          return r
            ? r.done
              ? ((e[t.resultName] = r.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                m)
              : r
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              m);
        }
        function C(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function k(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function E(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(C, this),
            this.reset(!0);
        }
        function M(t) {
          if (t) {
            var e = t[r];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                a = function e() {
                  for (; ++n < t.length; )
                    if (o.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          return { next: A };
        }
        function A() {
          return { value: void 0, done: !0 };
        }
        return (
          (u.prototype = f),
          n(v, 'constructor', { value: f, configurable: !0 }),
          n(f, 'constructor', { value: u, configurable: !0 }),
          (u.displayName = s(f, c, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === u || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), s(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(v)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(g.prototype),
          s(g.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = g),
          (t.async = function (e, o, n, a, r) {
            void 0 === r && (r = Promise);
            var i = new g(p(e, o, n, a), r);
            return t.isGeneratorFunction(o)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(v),
          s(v, c, 'Generator'),
          s(v, r, function () {
            return this;
          }),
          s(v, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = Object(t),
              o = [];
            for (var n in e) o.push(n);
            return (
              o.reverse(),
              function t() {
                for (; o.length; ) {
                  var n = o.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = M),
          (E.prototype = {
            constructor: E,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !t)
              )
                for (var e in this)
                  't' === e.charAt(0) &&
                    o.call(this, e) &&
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
              function n(o, n) {
                return (
                  (i.type = 'throw'),
                  (i.arg = t),
                  (e.next = o),
                  n && ((e.method = 'next'), (e.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var r = this.tryEntries[a],
                  i = r.completion;
                if ('root' === r.tryLoc) return n('end');
                if (r.tryLoc <= this.prev) {
                  var c = o.call(r, 'catchLoc'),
                    s = o.call(r, 'finallyLoc');
                  if (c && s) {
                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                    if (this.prev < r.finallyLoc) return n(r.finallyLoc);
                  } else if (c) {
                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < r.finallyLoc) return n(r.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  o.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var r = a;
                  break;
                }
              }
              r &&
                ('break' === t || 'continue' === t) &&
                r.tryLoc <= e &&
                e <= r.finallyLoc &&
                (r = null);
              var i = r ? r.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                r
                  ? ((this.method = 'next'), (this.next = r.finallyLoc), m)
                  : this.complete(i)
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
                m
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (o.finallyLoc === t)
                  return this.complete(o.completion, o.afterLoc), k(o), m;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (o.tryLoc === t) {
                  var n = o.completion;
                  if ('throw' === n.type) {
                    var a = n.arg;
                    k(o);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, o) {
              return (
                (this.delegate = { iterator: M(t), resultName: e, nextLoc: o }),
                'next' === this.method && (this.arg = void 0),
                m
              );
            },
          }),
          t
        );
      }
      function R(t, e, o, n, a, r, i) {
        try {
          var c = t[r](i),
            s = c.value;
        } catch (t) {
          return void o(t);
        }
        c.done ? e(s) : Promise.resolve(s).then(n, a);
      }
      function B(t) {
        return function () {
          var e = this,
            o = arguments;
          return new Promise(function (n, a) {
            var r = t.apply(e, o);
            function i(t) {
              R(r, n, a, i, c, 'next', t);
            }
            function c(t) {
              R(r, n, a, i, c, 'throw', t);
            }
            i(void 0);
          });
        };
      }
      function H(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var o =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != o) {
              var n,
                a,
                r,
                i,
                c = [],
                s = !0,
                p = !1;
              try {
                if (((r = (o = o.call(t)).next), 0 === e)) {
                  if (Object(o) !== o) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (n = r.call(o)).done) &&
                    (c.push(n.value), c.length !== e);
                    s = !0
                  );
              } catch (t) {
                (p = !0), (a = t);
              } finally {
                try {
                  if (
                    !s &&
                    null != o.return &&
                    ((i = o.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (p) throw a;
                }
              }
              return c;
            }
          })(t, e) ||
          F(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function F(t, e) {
        if (t) {
          if ('string' == typeof t) return z(t, e);
          var o = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === o && t.constructor && (o = t.constructor.name),
            'Map' === o || 'Set' === o
              ? Array.from(t)
              : 'Arguments' === o ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                ? z(t, e)
                : void 0
          );
        }
      }
      function z(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
        return n;
      }
      var U = window.Core.Tools.RubberStampCreateTool.FILL_COLORS,
        G = function () {
          var t = H(
              Object(n.useState)({ font: 'Helvetica', bold: !0, color: U[0] }),
              2
            ),
            e = t[0],
            o = t[1],
            r = p.a.getToolsFromAllDocumentViewers(
              'AnnotationCreateRubberStamp'
            ),
            u = H(Object(d.a)(), 1)[0],
            f = Object(c.f)(),
            x = H(Object(n.useState)(!1), 2),
            b = x[0],
            v = x[1],
            w = H(
              Object(c.e)(function (t) {
                return [
                  m.a.isElementOpen(t, D.a.CUSTOM_STAMP_MODAL),
                  m.a.getFonts(t),
                  m.a.getDateTimeFormats(t),
                  m.a.getUserName(t),
                ];
              }),
              4
            ),
            g = w[0],
            y = w[1],
            S = w[2],
            C = w[3],
            k = Object(c.d)();
          Object(n.useEffect)(
            function () {
              g && p.a.deselectAllAnnotations();
            },
            [g]
          );
          var E = function () {
              k(l.a.closeElement(D.a.CUSTOM_STAMP_MODAL));
            },
            M = (function () {
              var t = B(
                P().mark(function t(e) {
                  var o, n, a, r;
                  return P().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          (o = u('warning.colorPicker.deleteMessage')),
                            (n = u('warning.colorPicker.deleteTitle')),
                            (a = u('action.ok')),
                            (r = {
                              message: o,
                              title: n,
                              confirmBtnText: a,
                              onConfirm: e,
                            }),
                            k(l.a.showWarningMessage(r));
                        case 5:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            A = i()({ Modal: !0, CustomStampModal: !0, open: g, closed: !g }),
            O = (function () {
              var t = B(
                P().mark(function t() {
                  var o, n, a, i, c, s;
                  return P().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            p.a.setToolMode('AnnotationCreateRubberStamp'),
                              (o = I(r)),
                              (t.prev = 2),
                              o.s();
                          case 4:
                            if ((n = o.n()).done) {
                              t.next = 15;
                              break;
                            }
                            return (
                              (a = n.value).addCustomStamp(e),
                              (t.next = 9),
                              a.createCustomStampAnnotation(e)
                            );
                          case 9:
                            return (
                              (i = t.sent), (t.next = 12), a.setRubberStamp(i)
                            );
                          case 12:
                            a.showPreview();
                          case 13:
                            t.next = 4;
                            break;
                          case 15:
                            t.next = 20;
                            break;
                          case 17:
                            (t.prev = 17), (t.t0 = t.catch(2)), o.e(t.t0);
                          case 20:
                            return (t.prev = 20), o.f(), t.finish(20);
                          case 23:
                            k(l.a.closeElement(D.a.CUSTOM_STAMP_MODAL)),
                              (c = r[0].getStandardStamps().length),
                              (s = r[0].getCustomStamps().length),
                              k(l.a.setSelectedStampIndex(c + s - 1));
                          case 27:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[2, 17, 20, 23]]
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return g
            ? a.a.createElement(
                'div',
                { className: A, 'data-element': D.a.CUSTOM_STAMP_MODAL },
                a.a.createElement(
                  s.a,
                  { locked: g },
                  a.a.createElement(
                    'div',
                    {
                      className: 'container',
                      onMouseDown: function (t) {
                        return t.stopPropagation();
                      },
                    },
                    a.a.createElement(
                      'div',
                      { className: 'header' },
                      a.a.createElement(
                        'p',
                        null,
                        u('option.customStampModal.modalName')
                      ),
                      a.a.createElement(h.a, {
                        dataElement: 'customStampModalCloseButton',
                        title: 'action.close',
                        img: 'ic_close_black_24px',
                        onClick: E,
                      })
                    ),
                    a.a.createElement(L, {
                      openDeleteModal: M,
                      getCustomColorAndRemove: function () {
                        var t = m.a.getCustomColor(f.getState());
                        return k(l.a.setCustomColor(null)), t;
                      },
                      openColorPicker: function () {
                        k(l.a.openElement('ColorPickerModal'));
                      },
                      isModalOpen: g,
                      state: e,
                      setState: o,
                      closeModal: E,
                      setEmptyInput: v,
                      fonts: y,
                      dateTimeFormats: S,
                      stampTool: r[0],
                      userName: C,
                    }),
                    a.a.createElement(
                      'div',
                      { className: 'footer' },
                      a.a.createElement(
                        'div',
                        {
                          className: b
                            ? 'stamp-create stamp-create-disabled'
                            : 'stamp-create',
                          onClick: function () {
                            b || O();
                          },
                        },
                        u('action.create')
                      )
                    )
                  )
                )
              )
            : null;
        };
      e.default = G;
    },
  },
]);
//# sourceMappingURL=26.chunk.js.map
