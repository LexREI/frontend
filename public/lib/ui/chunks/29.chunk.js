(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    1562: function (t, e, n) {
      var r = n(27),
        o = n(1563);
      'string' == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[t.i, o, '']]);
      var a = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const n = [];
            for (let r = 0; r < e.length; r++) {
              const o = e[r];
              if (0 === r)
                o.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    n.length > 0 &&
                      n.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                o.shadowRoot.appendChild(e), n.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      r(o, a);
      t.exports = o.locals || {};
    },
    1563: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        '.Watermark{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.Watermark .modal-container .wrapper .modal-content{padding:10px}.Watermark .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.Watermark .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.Watermark .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.Watermark .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.Watermark .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.Watermark .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.Watermark .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.Watermark .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.Watermark .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.Watermark .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .footer .modal-button{padding:23px 8px}}.Watermark .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .swipe-indicator{display:none}}.open.Watermark{visibility:visible}.closed.Watermark{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}@-webkit-keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.Watermark{z-index:110}.Watermark .StylePopup{position:absolute;margin-top:60px;background:var(--preset-background);display:flex;flex-direction:column;justify-content:center;border-radius:0 0 4px 4px;box-shadow:0 0 3px 0 var(--box-shadow);align-items:center}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.Watermark .StylePopup{margin-top:0}}.Watermark .StylePopup .ColorPalette{padding:10px}.Watermark .style-container{display:flex}.Watermark .style-container .Button{margin-right:8px}.Watermark .style-container .Button:hover{background:var(--popup-button-hover)}.Watermark .style-container .Button.active{background:var(--popup-button-active)}.Watermark .form-content-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:16px;width:100%}.Watermark .form-content-container form{width:auto}@media(min-width:315px)and (max-width:480px){.Watermark .form-content-container form{width:auto}}.Watermark .watermark-settings{display:flex;flex-direction:column;width:330px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .watermark-settings{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .watermark-settings{width:100%}}.Watermark .watermark-settings .form-field{display:flex;flex-direction:column;margin:16px 0 16px 16px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .watermark-settings .form-field{margin-left:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .watermark-settings .form-field{margin-left:0}}.Watermark .watermark-settings .form-field label{margin-bottom:8px;font-weight:700}.Watermark .watermark-settings .form-field input,.Watermark .watermark-settings .form-field select{height:30px}.Watermark .watermark-settings .form-field.opacity-slider{display:flex}.Watermark .watermark-settings .form-field.opacity-slider .slider-property{font-weight:700}.Watermark .watermark-settings .form-field.opacity-slider .slider-svg-container{margin:0;height:30px}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.Watermark .watermark-settings .form-field.opacity-slider{align-items:stretch}}.Watermark .watermark-settings .colorSelect{width:18px;height:18px;margin:7px 8px 7px 7px;border-radius:10000000px}.Watermark .canvas-container{display:flex;justify-content:center;align-items:center;width:500px;height:420px;background-color:var(--gray-5);border:1px solid var(--gray-5)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .Watermark .canvas-container{display:none}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .Watermark .canvas-container{display:none}}.Watermark .canvas-container canvas{border:1px solid var(--border)!important;width:325px!important}.Watermark .divider{height:1px;width:100%;background:var(--divider)}.Watermark .divider.separator{margin-top:16px}.Watermark .button-container{display:flex;justify-content:space-between;align-items:baseline;width:100%;padding:16px}.Watermark .button-container .button{display:flex;justify-content:center;align-items:center;padding:6px 18px;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;border:0;height:32px;cursor:pointer;font-size:13px}.Watermark .button-container .button.ok{color:var(--primary-button-text);background:var(--primary-button)}.Watermark .button-container .button.ok:hover{background:var(--primary-button-hover)}.Watermark .button-container .button.cancel{color:var(--secondary-button-text);background:none}.Watermark .button-container .button.cancel:hover{color:var(--secondary-button-hover)}.Watermark .button-container .reset-settings{background-color:transparent;cursor:pointer;background:none;border:0;width:100%;color:var(--secondary-button-text);display:flex;font-size:13px;padding:6px 18px}:host(:not([data-tabbing=true])) .Watermark .button-container .reset-settings,html:not([data-tabbing=true]) .Watermark .button-container .reset-settings{outline:none}.Watermark .button-container .reset-settings:hover{color:var(--secondary-button-hover)}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1564: function (t, e, n) {
      var r = n(27),
        o = n(1565);
      'string' == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[t.i, o, '']]);
      var a = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const n = [];
            for (let r = 0; r < e.length; r++) {
              const o = e[r];
              if (0 === r)
                o.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    n.length > 0 &&
                      n.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                o.shadowRoot.appendChild(e), n.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      r(o, a);
      t.exports = o.locals || {};
    },
    1565: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        '.open.PrintModal{visibility:visible}.closed.PrintModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.PrintModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.PrintModal .modal-container .wrapper .modal-content{padding:10px}.PrintModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.PrintModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.PrintModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.PrintModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.PrintModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.PrintModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.PrintModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.PrintModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.PrintModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.PrintModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PrintModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PrintModal .footer .modal-button{padding:23px 8px}}.PrintModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PrintModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .PrintModal .swipe-indicator{display:none}}.PrintModal .modal-container{width:480px}.PrintModal .modal-container .settings{display:flex;flex-direction:column;width:100%;padding:24px}.PrintModal .modal-container .settings .ui__choice{margin:10px 4px 4px 0}.PrintModal .modal-container .divider{height:1px;width:100%;background:var(--divider)}.PrintModal .modal-container .section{padding-bottom:16px}.PrintModal .modal-container .section.watermark-section{padding-bottom:0}.PrintModal .modal-container .section .section-label{font-weight:700}.PrintModal .modal-container .section .printQualitySelectLabel{display:grid;padding:4px 0}.PrintModal .modal-container .section .printQualitySelectLabel .printQualitySelect{width:216px;height:30px;margin-top:5px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PrintModal .modal-container .section .printQualitySelectLabel .printQualitySelect{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PrintModal .modal-container .section .printQualitySelectLabel .printQualitySelect{width:100%}}.PrintModal .modal-container label{padding:2px 0 2px 4px}.PrintModal .modal-container input[type=text]{width:100%;height:30px;border:1px solid var(--border);border-radius:4px;color:var(--text-color);padding:4px 42px 6px 8px;margin-top:6px}.PrintModal .modal-container input[type=text]:focus{outline:none;border:1px solid var(--focus-border)}.PrintModal .modal-container input[type=text]::-moz-placeholder{color:var(--placeholder-text)}.PrintModal .modal-container input[type=text]:-ms-input-placeholder{color:var(--placeholder-text)}.PrintModal .modal-container input[type=text]::placeholder{color:var(--placeholder-text)}.PrintModal .modal-container .total{display:flex;flex-direction:row;padding-top:4px;color:var(--text-color)}.PrintModal .modal-container .background{width:100%;height:10px;transform:translateY(-50%);fill:#e2f3fe}.PrintModal .modal-container .progress{height:10px;transform:translateY(-50%);fill:#077bc5}.PrintModal .modal-container .buttons{display:flex;flex-direction:row;justify-content:flex-end;width:100%;padding:20px}.PrintModal .modal-container .buttons .button{background-color:transparent;display:flex;justify-content:center;align-items:center;color:var(--primary-button-text);padding:6px 18px;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background:var(--primary-button);border-radius:4px;border:0;height:32px;cursor:pointer;font-size:13px}:host(:not([data-tabbing=true])) .PrintModal .modal-container .buttons .button,html:not([data-tabbing=true]) .PrintModal .modal-container .buttons .button{outline:none}.PrintModal .modal-container .buttons .button:hover{background:var(--primary-button-hover)}.PrintModal .modal-container .buttons .button:disabled{opacity:.5;cursor:auto}.PrintModal .modal-container .specify-pages-choice{margin-bottom:18px}.PrintModal .modal-container .specify-pages-choice input{width:195px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PrintModal .modal-container .specify-pages-choice input{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PrintModal .modal-container .specify-pages-choice input{width:100%}}.PrintModal .modal-container .specify-pages-choice label{display:grid}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PrintModal .modal-container .specify-pages-choice label{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PrintModal .modal-container .specify-pages-choice label{width:100%}}.PrintModal .modal-container .specify-pages-choice.ui__choice--checked{align-items:baseline}.PrintModal .modal-container .apply-watermark{border:none;background-color:transparent;cursor:pointer;margin-top:10px;background:none;border:1px solid var(--secondary-button-text);border-radius:4px;color:var(--secondary-button-text);padding:6px 16px;height:32px;display:flex;align-items:center;justify-content:center;font-size:13px}:host(:not([data-tabbing=true])) .PrintModal .modal-container .apply-watermark,html:not([data-tabbing=true]) .PrintModal .modal-container .apply-watermark{outline:none}.PrintModal .modal-container .apply-watermark:hover{color:var(--secondary-button-hover)}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1726: function (t, e, n) {
      'use strict';
      n.r(e);
      n(36),
        n(17),
        n(121),
        n(24),
        n(7),
        n(25),
        n(8),
        n(51),
        n(9),
        n(10),
        n(31),
        n(32),
        n(18),
        n(11),
        n(13),
        n(12),
        n(15),
        n(14),
        n(20),
        n(22),
        n(67),
        n(68),
        n(69),
        n(70),
        n(41),
        n(44),
        n(46),
        n(66);
      var r,
        o,
        a = n(0),
        i = n.n(a),
        c = n(2),
        l = n(3),
        s = n(1),
        d = n(299),
        u = n(1381),
        p = n(136),
        m = n(516),
        f =
          (n(53),
          n(95),
          n(34),
          n(72),
          n(75),
          n(73),
          n(104),
          n(127),
          n(65),
          n(106),
          n(39),
          n(37),
          n(38),
          n(314)),
        h = n(532),
        y = n(198),
        b = n(4),
        g = n.n(b),
        v = n(1361),
        w = n(21),
        x = [
          'Arial',
          'Times New Roman',
          'Tahoma ',
          'Trebuchet MS',
          'Courier',
          'Verdana',
          'Georgia',
          'Palatino',
          'Comic Sans MS',
          'Arial Black',
          'Impact',
        ],
        k = (n(1562), n(367)),
        E = n(57);
      function P(t) {
        return (P =
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
      function O(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function S(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? O(Object(n), !0).forEach(function (e) {
                R(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : O(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
        }
        return t;
      }
      function C() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ C =
          function () {
            return t;
          };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          i = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function l(t, e, n) {
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
          l({}, '');
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, o) {
          var a = e && e.prototype instanceof p ? e : p,
            i = Object.create(a.prototype),
            c = new S(o || []);
          return r(i, '_invoke', { value: x(t, n, c) }), i;
        }
        function d(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = s;
        var u = {};
        function p() {}
        function m() {}
        function f() {}
        var h = {};
        l(h, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          b = y && y(y(j([])));
        b && b !== e && n.call(b, a) && (h = b);
        var g = (f.prototype = p.prototype = Object.create(h));
        function v(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var o;
          r(this, '_invoke', {
            value: function (r, a) {
              function i() {
                return new e(function (o, i) {
                  !(function r(o, a, i, c) {
                    var l = d(t[o], t, a);
                    if ('throw' !== l.type) {
                      var s = l.arg,
                        u = s.value;
                      return u && 'object' == P(u) && n.call(u, '__await')
                        ? e.resolve(u.__await).then(
                            function (t) {
                              r('next', t, i, c);
                            },
                            function (t) {
                              r('throw', t, i, c);
                            }
                          )
                        : e.resolve(u).then(
                            function (t) {
                              (s.value = t), i(s);
                            },
                            function (t) {
                              return r('throw', t, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(r, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function x(t, e, n) {
          var r = 'suspendedStart';
          return function (o, a) {
            if ('executing' === r)
              throw new Error('Generator is already running');
            if ('completed' === r) {
              if ('throw' === o) throw a;
              return L();
            }
            for (n.method = o, n.arg = a; ; ) {
              var i = n.delegate;
              if (i) {
                var c = k(i, n);
                if (c) {
                  if (c === u) continue;
                  return c;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              r = 'executing';
              var l = d(t, e, n);
              if ('normal' === l.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), l.arg === u)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              'throw' === l.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = l.arg));
            }
          };
        }
        function k(t, e) {
          var n = e.method,
            r = t.iterator[n];
          if (void 0 === r)
            return (
              (e.delegate = null),
              ('throw' === n &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                k(t, e),
                'throw' === e.method)) ||
                ('return' !== n &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              u
            );
          var o = d(r, t.iterator, e.arg);
          if ('throw' === o.type)
            return (
              (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), u
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                u)
              : a
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              u);
        }
        function E(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function S(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(E, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: L };
        }
        function L() {
          return { value: void 0, done: !0 };
        }
        return (
          (m.prototype = f),
          r(g, 'constructor', { value: f, configurable: !0 }),
          r(f, 'constructor', { value: m, configurable: !0 }),
          (m.displayName = l(f, c, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === m || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), l(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          v(w.prototype),
          l(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, n, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(s(e, n, r, o), a);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          v(g),
          l(g, c, 'Generator'),
          l(g, a, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = j),
          (S.prototype = {
            constructor: S,
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
              function r(n, r) {
                return (
                  (i.type = 'throw'),
                  (i.arg = t),
                  (e.next = n),
                  r && ((e.method = 'next'), (e.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ('root' === a.tryLoc) return r('end');
                if (a.tryLoc <= this.prev) {
                  var c = n.call(a, 'catchLoc'),
                    l = n.call(a, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ('break' === t || 'continue' === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = 'next'), (this.next = a.finallyLoc), u)
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
                u
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), O(n), u;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    O(n);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          t
        );
      }
      function j(t, e, n, r, o, a, i) {
        try {
          var c = t[a](i),
            l = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(l) : Promise.resolve(l).then(r, o);
      }
      function L(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = t.apply(e, n);
            function i(t) {
              j(a, r, o, i, c, 'next', t);
            }
            function c(t) {
              j(a, r, o, i, c, 'throw', t);
            }
            i(void 0);
          });
        };
      }
      function W(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, I(r.key), r);
        }
      }
      function M(t, e) {
        return (M = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function T(t) {
        var e = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = A(t);
          if (e) {
            var o = A(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return N(this, n);
        };
      }
      function N(t, e) {
        if (e && ('object' === P(e) || 'function' == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return _(t);
      }
      function _(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function A(t) {
        return (A = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function R(t, e, n) {
        return (
          (e = I(e)) in t
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
      function I(t) {
        var e = (function (t, e) {
          if ('object' !== P(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || 'default');
            if ('object' !== P(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' === P(e) ? e : String(e);
      }
      var D = [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
        F = {
          CENTER: 'center',
          TOP_LEFT: 'topLeft',
          TOP_RIGHT: 'topRight',
          TOP_CENTER: 'topCenter',
          BOT_LEFT: 'bottomLeft',
          BOT_RIGHT: 'bottomRight',
          BOT_CENTER: 'bottomCenter',
        },
        G = 'fontSize',
        B = 'text',
        V = 'color',
        z = 'opacity',
        H = 'font',
        Y = 'isBolded',
        Q = 'isItalic',
        U = 'isUnderlined',
        q =
          (R((r = {}), 'location', F.CENTER),
          R(r, G, 48),
          R(r, B, ''),
          R(r, V, new window.Core.Annotations.Color(228, 66, 52)),
          R(r, z, 100),
          R(r, H, x[0]),
          R(r, Y, !1),
          R(r, Q, !1),
          R(r, U, !1),
          r),
        J =
          (R((o = {}), F.CENTER, 'diagonal'),
          R(o, F.TOP_LEFT, 'headerLeft'),
          R(o, F.TOP_RIGHT, 'headerRight'),
          R(o, F.TOP_CENTER, 'headerCenter'),
          R(o, F.BOT_LEFT, 'footerLeft'),
          R(o, F.BOT_RIGHT, 'footerRight'),
          R(o, F.BOT_CENTER, 'footerCenter'),
          o),
        K = (function (t) {
          !(function (t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && M(t, e);
          })(a, t);
          var e,
            n,
            r,
            o = T(a);
          function a(t) {
            var e;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, a),
              R(
                _((e = o.call(this, t))),
                'handleWatermarkOnVisibilityChanged',
                function () {
                  e.props.isVisible
                    ? e.setState(
                        { locationSettings: e.state.previousLocationSettings },
                        L(
                          C().mark(function t() {
                            return C().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (t.next = 2), s.a.getWatermark();
                                  case 2:
                                    (e.preExistingWatermark = t.sent),
                                      e.addWatermarks();
                                  case 4:
                                  case 'end':
                                    return t.stop();
                                }
                            }, t);
                          })
                        )
                      )
                    : (e.removeWatermarkCreatedByModal(),
                      s.a.setWatermark(e.preExistingWatermark));
                }
              ),
              R(_(e), 'addWatermarks', function () {
                var t = e.createWatermarks();
                s.a.setWatermark(t);
                var n = s.a.getPageHeight(e.props.pageIndexToView + 1),
                  r = 300 / s.a.getPageWidth(e.props.pageIndexToView + 1),
                  o = 300 / n,
                  a = Math.min(o, r);
                s.a.getDocument().loadCanvas({
                  pageNumber: e.props.pageIndexToView + 1,
                  zoom: a,
                  drawComplete: function (t) {
                    var n = e.canvasContainerRef.current.childNodes;
                    n &&
                      n.length > 0 &&
                      e.canvasContainerRef.current.removeChild(n[0]),
                      (t.style.border = '1px solid black'),
                      (t.style.height =
                        e.canvasContainerRef.current.style.height),
                      e.canvasContainerRef.current.appendChild(t);
                  },
                });
              }),
              R(_(e), 'constructWatermarkOption', function (t) {
                var e = [];
                return (
                  t.isBolded && e.push(s.a.getFontStyles().BOLD),
                  t.isItalic && e.push(s.a.getFontStyles().ITALIC),
                  t.isUnderlined && e.push(s.a.getFontStyles().UNDERLINE),
                  {
                    fontSize: t.fontSize,
                    fontFamily: t.font,
                    color: t.color.toString(),
                    opacity: t.opacity,
                    text: t.text,
                    fontStyles: e,
                  }
                );
              }),
              R(_(e), 'createWatermarks', function () {
                var t = {};
                return (
                  Object.keys(F).forEach(function (n) {
                    var r = e.constructWatermarkOption(
                      e.state.locationSettings[n]
                    );
                    t[J[F[n]]] = r;
                  }),
                  t
                );
              }),
              R(_(e), 'removeWatermarkCreatedByModal', function () {
                s.a.setWatermark({});
              }),
              R(_(e), 'closeModal', function () {
                e.props.modalClosed();
              }),
              R(_(e), 'handleInputChange', function (t, n) {
                var r = S({}, e.state.locationSettings),
                  o = e.getCurrentSelectedLocation();
                (r[o] = S(S({}, r[o]), {}, R({}, t, n))),
                  e.setState({ locationSettings: r }, function () {
                    e.addWatermarks();
                  });
              }),
              R(_(e), 'resetForm', function (t) {
                t.preventDefault();
                var n = e.initializeLocationSettings();
                e.setState({ locationSettings: n }, function () {
                  return e.addWatermarks();
                });
              }),
              R(_(e), 'onOkPressed', function () {
                e.setState(
                  { previousLocationSettings: e.state.locationSettings },
                  function () {
                    e.props.modalClosed();
                    var t = e.createWatermarks();
                    e.props.formSubmitted(t);
                  }
                );
              }),
              R(_(e), 'getCirclePosn', function (t, e) {
                return e * t + y.a;
              }),
              R(_(e), 'setColorPaletteVisibility', function (t) {
                e.setState({ isColorPaletteVisible: t });
              }),
              R(_(e), 'onLocationChanged', function (t) {
                var n = S({}, e.state.locationSettings);
                Object.keys(n).forEach(function (e) {
                  var r = n[e];
                  (r = S(S({}, r), {}, { isSelected: t === e })), (n[e] = r);
                }),
                  e.setState({ locationSettings: n }, function () {
                    e.addWatermarks();
                  });
              }),
              R(_(e), 'initializeLocationSettings', function () {
                var t = {};
                return (
                  Object.keys(F).forEach(function (e) {
                    var n = S(
                      S(
                        {},
                        Object.assign(
                          {},
                          ((function (t) {
                            if (null == t)
                              throw new TypeError('Cannot destructure ' + t);
                          })(q),
                          q)
                        )
                      ),
                      {},
                      { isSelected: F[e] === q.location }
                    );
                    t[e] = n;
                  }),
                  t
                );
              }),
              R(_(e), 'getKeyByValue', function (t, e) {
                return Object.keys(t).find(function (n) {
                  return t[n] === e;
                });
              }),
              R(_(e), 'getCurrentSelectedLocation', function () {
                return Object.keys(e.state.locationSettings).find(function (t) {
                  return e.state.locationSettings[t].isSelected;
                });
              }),
              R(_(e), 'onColorChanged', function (t) {
                var n = e.getCurrentSelectedLocation(),
                  r = e.state.locationSettings[n];
                r[V] = new window.Core.Annotations.Color(t.R, t.G, t.B);
                var o = S({}, e.state.locationSettings);
                r[B] ||
                  Object.keys(F).forEach(function (e) {
                    var n = o[e];
                    n[B] ||
                      (n[V] = new window.Core.Annotations.Color(t.R, t.G, t.B));
                  }),
                  e.setState({ locationSettings: o }, function () {
                    e.addWatermarks();
                  });
              });
            var n = e.initializeLocationSettings();
            return (
              (e.preExistingWatermark = void 0),
              (e.state = {
                isColorPaletteVisible: !1,
                locationSettings: n,
                previousLocationSettings: n,
                lockFocus: !1,
              }),
              (e.canvasContainerRef = i.a.createRef()),
              e
            );
          }
          return (
            (e = a),
            (n = [
              {
                key: 'componentDidUpdate',
                value: function (t) {
                  var e = this;
                  s.a.addEventListener('documentLoaded', this.closeModal),
                    this.props.isVisible !== t.isVisible &&
                      (this.props.isVisible
                        ? this.setState({ lockFocus: !0 })
                        : this.setState({ lockFocus: !1 }),
                      this.setState({ isColorPaletteVisible: !1 }, function () {
                        return e.handleWatermarkOnVisibilityChanged();
                      }));
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this;
                  if (!this.props.isVisible) return null;
                  var e = this.props.t,
                    n = this.getCurrentSelectedLocation(),
                    r = this.state.locationSettings[n];
                  return i.a.createElement(
                    E.a,
                    {
                      className: 'Modal Watermark',
                      id: 'watermarkModal',
                      'data-element': 'watermarkModal',
                    },
                    i.a.createElement(
                      k.a,
                      {
                        isOpen: this.state.lockFocus,
                        title: 'option.watermark.addWatermark',
                        closeButtonDataElement: 'watermarkModalCloseButton',
                        onCloseClick: this.closeModal,
                        swipeToClose: !0,
                        closeHandler: this.closeModal,
                      },
                      i.a.createElement('div', {
                        className: 'swipe-indicator',
                      }),
                      i.a.createElement(
                        'div',
                        { className: 'form-content-container' },
                        i.a.createElement('div', {
                          className: 'canvas-container',
                          ref: this.canvasContainerRef,
                        }),
                        i.a.createElement(
                          'div',
                          { className: 'watermark-settings' },
                          i.a.createElement(
                            'form',
                            {
                              id: 'form',
                              onSubmit: function (t) {
                                return t.preventDefault();
                              },
                            },
                            i.a.createElement(
                              'div',
                              { className: 'form-field' },
                              i.a.createElement(
                                'label',
                                { htmlFor: 'location' },
                                e('option.watermark.location')
                              ),
                              i.a.createElement(
                                'select',
                                {
                                  id: 'location',
                                  onChange: function (e) {
                                    t.onLocationChanged(e.target.value);
                                  },
                                },
                                Object.keys(F).map(function (t) {
                                  return i.a.createElement(
                                    'option',
                                    { key: t, value: t },
                                    e(
                                      'option.watermark.locations.'.concat(F[t])
                                    )
                                  );
                                })
                              ),
                              i.a.createElement('div', {
                                className: 'separator divider',
                              })
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'form-field' },
                              i.a.createElement(
                                'label',
                                { htmlFor: 'textInput' },
                                e('option.watermark.text')
                              ),
                              i.a.createElement('input', {
                                className: 'text-input',
                                id: 'textInput',
                                value: r[B],
                                onChange: function (e) {
                                  return t.handleInputChange(B, e.target.value);
                                },
                                type: 'text',
                              })
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'form-field' },
                              i.a.createElement(
                                'label',
                                { htmlFor: 'fonts' },
                                e('option.watermark.font')
                              ),
                              i.a.createElement(
                                'select',
                                {
                                  id: 'fonts',
                                  value: r[H],
                                  onChange: function (e) {
                                    return t.handleInputChange(
                                      H,
                                      e.target.value
                                    );
                                  },
                                },
                                x.map(function (t) {
                                  return i.a.createElement(
                                    'option',
                                    { key: t },
                                    t
                                  );
                                })
                              )
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'form-field' },
                              i.a.createElement(
                                'label',
                                { htmlFor: 'fontSize' },
                                e('option.watermark.size')
                              ),
                              i.a.createElement(
                                'select',
                                {
                                  id: 'fontSize',
                                  value: r[G],
                                  onChange: function (e) {
                                    return t.handleInputChange(
                                      G,
                                      +e.target.value
                                    );
                                  },
                                },
                                D.map(function (t) {
                                  return i.a.createElement(
                                    'option',
                                    { key: t },
                                    t
                                  );
                                })
                              )
                            ),
                            i.a.createElement(
                              'div',
                              {
                                className: 'form-field opacity-slider',
                                id: 'opacitySlider',
                              },
                              i.a.createElement(h.a, {
                                property: 'opacity',
                                displayProperty: 'opacity',
                                value: r[z] / 100,
                                getDisplayValue: function (t) {
                                  return ''.concat(Math.round(100 * t), '%');
                                },
                                getCirclePosition: this.getCirclePosn,
                                convertRelativeCirclePositionToValue: function (
                                  t
                                ) {
                                  return t;
                                },
                                onSliderChange: function () {},
                                onStyleChange: function (e, n) {
                                  return t.handleInputChange(
                                    z,
                                    Math.round(100 * n)
                                  );
                                },
                              })
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'form-field' },
                              i.a.createElement(
                                'label',
                                null,
                                e('option.watermark.style')
                              ),
                              i.a.createElement(
                                'div',
                                { className: 'style-container' },
                                i.a.createElement(w.a, {
                                  id: 'currentColorCell',
                                  className: 'colorSelect',
                                  ariaLabel: 'colorSelectButton',
                                  style: {
                                    backgroundColor: r[V].toHexString(),
                                  },
                                  onClick: function () {
                                    return t.setColorPaletteVisibility(
                                      !t.state.isColorPaletteVisible
                                    );
                                  },
                                }),
                                i.a.createElement(
                                  'div',
                                  { className: 'style-container' },
                                  i.a.createElement(w.a, {
                                    dataElement: 'boldText',
                                    img: 'icon-text-bold',
                                    isActive: r[Y],
                                    onClick: function () {
                                      return t.handleInputChange(Y, !r[Y]);
                                    },
                                  }),
                                  i.a.createElement(w.a, {
                                    dataElement: 'italicizeText',
                                    img: 'icon-text-italic',
                                    isActive: r[Q],
                                    onClick: function () {
                                      return t.handleInputChange(Q, !r[Q]);
                                    },
                                  }),
                                  i.a.createElement(w.a, {
                                    dataElement: 'underlineText',
                                    img: 'icon-text-underline',
                                    isActive: r[U],
                                    onClick: function () {
                                      return t.handleInputChange(U, !r[U]);
                                    },
                                  })
                                )
                              ),
                              this.state.isColorPaletteVisible &&
                                i.a.createElement(
                                  'div',
                                  {
                                    className: 'Popup StylePopup',
                                    id: 'stylePopup',
                                    onClick: function () {
                                      return t.setColorPaletteVisibility(!1);
                                    },
                                  },
                                  i.a.createElement(f.a, {
                                    color: r[V],
                                    property: 'TextColor',
                                    onStyleChange: function (e, n) {
                                      t.onColorChanged(n),
                                        t.setColorPaletteVisibility(!1);
                                    },
                                  })
                                )
                            )
                          )
                        )
                      ),
                      i.a.createElement('div', { className: 'divider' }),
                      i.a.createElement(
                        'div',
                        { className: 'button-container' },
                        i.a.createElement(
                          'button',
                          {
                            className: 'reset-settings',
                            id: 'reset',
                            onClick: this.resetForm,
                          },
                          e('option.watermark.resetAllSettings')
                        ),
                        i.a.createElement(
                          'button',
                          {
                            className: 'ok button',
                            id: 'submit',
                            onClick: this.onOkPressed,
                          },
                          e('action.add')
                        )
                      )
                    )
                  );
                },
              },
            ]) && W(e.prototype, n),
            r && W(e, r),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            a
          );
        })(i.a.PureComponent);
      R(K, 'propTypes', {
        isVisible: g.a.bool,
        pageIndexToView: g.a.number,
        modalClosed: g.a.func,
        formSubmitted: g.a.func,
        t: g.a.func.isRequired,
      });
      var $ = Object(v.a)()(K),
        X = n(313),
        Z = n(6),
        tt = n(362),
        et = n(5),
        nt = n(23);
      n(1564);
      function rt(t) {
        return (rt =
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
      function ot() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ ot =
          function () {
            return t;
          };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          i = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function l(t, e, n) {
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
          l({}, '');
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, o) {
          var a = e && e.prototype instanceof p ? e : p,
            i = Object.create(a.prototype),
            c = new O(o || []);
          return r(i, '_invoke', { value: x(t, n, c) }), i;
        }
        function d(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = s;
        var u = {};
        function p() {}
        function m() {}
        function f() {}
        var h = {};
        l(h, a, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          b = y && y(y(S([])));
        b && b !== e && n.call(b, a) && (h = b);
        var g = (f.prototype = p.prototype = Object.create(h));
        function v(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var o;
          r(this, '_invoke', {
            value: function (r, a) {
              function i() {
                return new e(function (o, i) {
                  !(function r(o, a, i, c) {
                    var l = d(t[o], t, a);
                    if ('throw' !== l.type) {
                      var s = l.arg,
                        u = s.value;
                      return u && 'object' == rt(u) && n.call(u, '__await')
                        ? e.resolve(u.__await).then(
                            function (t) {
                              r('next', t, i, c);
                            },
                            function (t) {
                              r('throw', t, i, c);
                            }
                          )
                        : e.resolve(u).then(
                            function (t) {
                              (s.value = t), i(s);
                            },
                            function (t) {
                              return r('throw', t, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(r, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function x(t, e, n) {
          var r = 'suspendedStart';
          return function (o, a) {
            if ('executing' === r)
              throw new Error('Generator is already running');
            if ('completed' === r) {
              if ('throw' === o) throw a;
              return C();
            }
            for (n.method = o, n.arg = a; ; ) {
              var i = n.delegate;
              if (i) {
                var c = k(i, n);
                if (c) {
                  if (c === u) continue;
                  return c;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              r = 'executing';
              var l = d(t, e, n);
              if ('normal' === l.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), l.arg === u)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              'throw' === l.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = l.arg));
            }
          };
        }
        function k(t, e) {
          var n = e.method,
            r = t.iterator[n];
          if (void 0 === r)
            return (
              (e.delegate = null),
              ('throw' === n &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                k(t, e),
                'throw' === e.method)) ||
                ('return' !== n &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              u
            );
          var o = d(r, t.iterator, e.arg);
          if ('throw' === o.type)
            return (
              (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), u
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                u)
              : a
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              u);
        }
        function E(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function P(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(E, this),
            this.reset(!0);
        }
        function S(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (m.prototype = f),
          r(g, 'constructor', { value: f, configurable: !0 }),
          r(f, 'constructor', { value: m, configurable: !0 }),
          (m.displayName = l(f, c, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === m || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), l(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          v(w.prototype),
          l(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, n, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(s(e, n, r, o), a);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          v(g),
          l(g, c, 'Generator'),
          l(g, a, function () {
            return this;
          }),
          l(g, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = S),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(P),
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
              function r(n, r) {
                return (
                  (i.type = 'throw'),
                  (i.arg = t),
                  (e.next = n),
                  r && ((e.method = 'next'), (e.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ('root' === a.tryLoc) return r('end');
                if (a.tryLoc <= this.prev) {
                  var c = n.call(a, 'catchLoc'),
                    l = n.call(a, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ('break' === t || 'continue' === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = 'next'), (this.next = a.finallyLoc), u)
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
                u
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), P(n), u;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    P(n);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: S(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          t
        );
      }
      function at(t, e, n, r, o, a, i) {
        try {
          var c = t[a](i),
            l = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(l) : Promise.resolve(l).then(r, o);
      }
      function it(t, e) {
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
              var r,
                o,
                a,
                i,
                c = [],
                l = !0,
                s = !1;
              try {
                if (((a = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = a.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    l = !0
                  );
              } catch (t) {
                (s = !0), (o = t);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return c;
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
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var lt = function () {
        var t = it(
            Object(Z.e)(function (t) {
              return [
                l.a.isElementDisabled(t, et.a.PRINT_MODAL),
                l.a.isElementOpen(t, et.a.PRINT_MODAL),
                l.a.isElementDisabled(t, 'applyWatermark'),
                l.a.getCurrentPage(t),
                l.a.getPrintQuality(t),
                l.a.getDefaultPrintOptions(t),
                l.a.getPageLabels(t),
                l.a.getSortStrategy(t),
                l.a.getColorMap(t),
                l.a.getDisplayMode(t),
                l.a.getPrintedNoteDateFormat(t),
                l.a.getCurrentLanguage(t),
                l.a.getWatermarkModalOptions(t),
                l.a.getTimezone(t),
              ];
            }, Z.c),
            14
          ),
          e = t[0],
          n = t[1],
          r = t[2],
          o = t[3],
          f = t[4],
          h = t[5],
          y = t[6],
          b = t[7],
          g = t[8],
          v = t[9],
          w = t[10],
          x = t[11],
          E = t[12],
          P = t[13],
          O = Object(Z.d)(),
          S = it(Object(tt.a)(), 1)[0],
          C = Object(a.useRef)(),
          j = Object(a.useRef)(),
          L = Object(a.useRef)(),
          W = Object(a.useRef)(),
          M = Object(a.useRef)(),
          T = Object(a.useRef)(),
          N = Object(a.useRef)(),
          _ = it(Object(a.useState)(!1), 2),
          A = _[0],
          R = _[1],
          I = it(Object(a.useState)(-1), 2),
          D = I[0],
          F = I[1],
          G = it(Object(a.useState)([]), 2),
          B = G[0],
          V = G[1],
          z = it(Object(a.useState)(!1), 2),
          H = z[0],
          Y = z[1],
          Q = it(Object(a.useState)(!0), 2),
          U = Q[0],
          q = Q[1],
          J = it(Object(a.useState)(!1), 2),
          K = J[0],
          rt = J[1],
          ct = it(Object(a.useState)(!1), 2),
          lt = ct[0],
          st = ct[1],
          dt = it(Object(a.useState)(!1), 2),
          ut = dt[0],
          pt = dt[1];
        Object(a.useEffect)(
          function () {
            var t, e, n;
            h &&
              (q(null !== (t = h.includeAnnotations) && void 0 !== t ? t : U),
              rt(null !== (e = h.includeComments) && void 0 !== e ? e : K),
              st(
                null !== (n = h.maintainPageOrientation) && void 0 !== n
                  ? n
                  : lt
              ));
          },
          [h]
        ),
          Object(a.useEffect)(function () {
            var t = function () {
              var t = Object(nt.a)().getElementById('print-handler');
              t &&
                (1 === t.children.length
                  ? t.parentElement.setAttribute('style', 'height: 99%;')
                  : t.parentElement.setAttribute('style', 'height: 100%;'));
            };
            return (
              window.addEventListener('beforeprint', t),
              function () {
                window.removeEventListener('beforeprint', t);
              }
            );
          }, []);
        var mt = D >= 0,
          ft = Object(u.a)('Modal PrintModal', { isOpen: n }),
          ht = i.a.createElement(
            i.a.Fragment,
            null,
            S('option.print.specifyPages'),
            i.a.createElement('input', {
              ref: W,
              hidden: !L.current || (L.current && !L.current.checked),
              type: 'text',
              placeholder: S('message.customPrintPlaceholder'),
              'aria-label': S('message.customPrintPlaceholder'),
              onChange: yt,
              disabled: mt,
            })
          );
        Object(a.useEffect)(function () {
          return (
            yt(),
            O(
              c.a.closeElements([
                et.a.SIGNATURE_MODAL,
                et.a.LOADING_MODAL,
                et.a.PROGRESS_MODAL,
                et.a.ERROR_MODAL,
              ])
            ),
            s.a.getWatermark().then(function (t) {
              R(null == t || 0 === Object.keys(t).length), (N.current = t);
            }),
            function () {
              s.a.setWatermark(N.current), Y(!1);
            }
          );
        }, []);
        var yt = function () {
            var t = [];
            if (C.current.checked)
              for (var e = 1; e <= s.a.getTotalPages(); e++) t.push(e);
            else if (j.current.checked) {
              var n = s.a.getTotalPages();
              switch (v) {
                case m.a.FacingCover:
                case m.a.FacingCoverContinuous:
                  1 === o || (o === n && n % 2 == 0)
                    ? t.push(o)
                    : (t = o % 2 ? [o - 1, o] : [o, o + 1]);
                  break;
                case m.a.FacingContinuous:
                case m.a.Facing:
                  o === n && n % 2 == 1
                    ? t.push(o)
                    : (t = o % 2 ? [o, o + 1] : [o - 1, o]);
                  break;
                default:
                  t.push(o);
              }
            } else if (L.current.checked) {
              var r = W.current.value.replace(/\s+/g, '');
              t = Object(d.a)(r, y);
            } else T.current.checked && (t = [o]);
            V(t);
          },
          bt = function (t) {
            var e;
            if ((t.preventDefault(), !(B.length < 1))) {
              F(0), A ? s.a.setWatermark(E) : s.a.setWatermark(N.current);
              var n = Object(p.b)(
                B,
                K,
                U,
                lt,
                f,
                b,
                g,
                w,
                void 0,
                null === (e = T.current) || void 0 === e ? void 0 : e.checked,
                x,
                !1,
                ut,
                P
              );
              n.forEach(
                (function () {
                  var t,
                    e =
                      ((t = ot().mark(function t(e) {
                        return ot().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), e;
                              case 2:
                                F(D < B.length && (-1 !== D ? D + 1 : D));
                              case 3:
                              case 'end':
                                return t.stop();
                            }
                        }, t);
                      })),
                      function () {
                        var e = this,
                          n = arguments;
                        return new Promise(function (r, o) {
                          var a = t.apply(e, n);
                          function i(t) {
                            at(a, r, o, i, c, 'next', t);
                          }
                          function c(t) {
                            at(a, r, o, i, c, 'throw', t);
                          }
                          i(void 0);
                        });
                      });
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
                Promise.all(n)
                  .then(function (t) {
                    Object(p.d)(t), gt();
                  })
                  .catch(function (t) {
                    console.error(t), F(-1);
                  });
            }
          },
          gt = function () {
            F(-1), O(c.a.closeElement(et.a.PRINT_MODAL));
          },
          vt = function (t) {
            Y(t);
          };
        return e
          ? null
          : i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement($, {
                isVisible: !(!n || !H),
                pageIndexToView: o - 1,
                modalClosed: vt,
                formSubmitted: function (t) {
                  return O(c.a.setWatermarkModalOptions(t));
                },
              }),
              i.a.createElement(
                'div',
                { className: ft, 'data-element': et.a.PRINT_MODAL },
                i.a.createElement(
                  k.a,
                  {
                    isOpen: n && !H,
                    title: 'option.print.printSettings',
                    containerOnClick: function (t) {
                      return t.stopPropagation();
                    },
                    onCloseClick: gt,
                    closeButtonDataElement: 'printModalCloseButton',
                    swipeToClose: !0,
                    closeHandler: gt,
                  },
                  i.a.createElement('div', { className: 'swipe-indicator' }),
                  i.a.createElement(
                    'div',
                    { className: 'settings' },
                    i.a.createElement(
                      'div',
                      { className: 'section' },
                      i.a.createElement(
                        'div',
                        { className: 'section-label' },
                        ''.concat(S('option.print.pages'), ':')
                      ),
                      i.a.createElement(
                        'form',
                        {
                          className: 'settings-form',
                          onChange: yt,
                          onSubmit: bt,
                        },
                        i.a.createElement(X.a, {
                          dataElement: 'allPagesPrintOption',
                          ref: C,
                          id: 'all-pages',
                          name: 'pages',
                          radio: !0,
                          label: S('option.print.all'),
                          defaultChecked: !0,
                          disabled: mt,
                          center: !0,
                        }),
                        i.a.createElement(X.a, {
                          dataElement: 'currentPagePrintOption',
                          ref: j,
                          id: 'current-page',
                          name: 'pages',
                          radio: !0,
                          label: S('option.print.current'),
                          disabled: mt,
                          center: !0,
                        }),
                        i.a.createElement(X.a, {
                          dataElement: 'currentViewPrintOption',
                          ref: T,
                          id: 'current-view',
                          name: 'pages',
                          radio: !0,
                          label: S('option.print.view'),
                          disabled: mt,
                          center: !0,
                        }),
                        i.a.createElement(X.a, {
                          dataElement: 'customPagesPrintOption',
                          ref: L,
                          id: 'custom-pages',
                          name: 'pages',
                          className: 'specify-pages-choice',
                          radio: !0,
                          label: ht,
                          disabled: mt,
                          center: !0,
                        }),
                        i.a.createElement(X.a, {
                          dataElement: 'commentsPrintOption',
                          ref: M,
                          id: 'include-comments',
                          name: 'comments',
                          label: S('option.print.includeComments'),
                          onChange: function () {
                            return rt(function (t) {
                              return !t;
                            });
                          },
                          disabled: mt,
                          checked: K,
                          center: !0,
                        }),
                        i.a.createElement(X.a, {
                          dataElement: 'annotationsPrintOption',
                          id: 'include-annotations',
                          name: 'annotations',
                          label: S('option.print.includeAnnotations'),
                          disabled: mt,
                          onChange: function () {
                            return q(function (t) {
                              return !t;
                            });
                          },
                          checked: U,
                          center: !0,
                        }),
                        i.a.createElement(X.a, {
                          dataElement: 'grayscalePrintOption',
                          id: 'print-grayscale',
                          name: 'grayscale',
                          label: S('option.print.printGrayscale'),
                          disabled: mt,
                          onChange: function () {
                            return pt(function (t) {
                              return !t;
                            });
                          },
                          checked: ut,
                          center: !0,
                        })
                      )
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'section' },
                      i.a.createElement(
                        'div',
                        { className: 'section-label' },
                        ''.concat(S('option.print.pageQuality'), ':')
                      ),
                      i.a.createElement(
                        'label',
                        { className: 'printQualitySelectLabel' },
                        i.a.createElement(
                          'select',
                          {
                            className: 'printQualitySelect',
                            onChange: function (t) {
                              return O(
                                c.a.setPrintQuality(Number(t.target.value))
                              );
                            },
                            value: f,
                          },
                          i.a.createElement(
                            'option',
                            { value: '2' },
                            ''.concat(S('option.print.qualityHigh'))
                          ),
                          i.a.createElement(
                            'option',
                            { value: '1' },
                            ''.concat(S('option.print.qualityNormal'))
                          )
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'total' },
                        mt
                          ? i.a.createElement(
                              'div',
                              null,
                              ''
                                .concat(S('message.processing'), ' ')
                                .concat(D, '/')
                                .concat(B.length)
                            )
                          : i.a.createElement(
                              'div',
                              null,
                              S('message.printTotalPageCount', {
                                count: B.length,
                              })
                            )
                      )
                    ),
                    !r &&
                      i.a.createElement(
                        'div',
                        { className: 'section watermark-section' },
                        i.a.createElement(
                          'div',
                          { className: 'section-label' },
                          S('option.watermark.title')
                        ),
                        i.a.createElement(
                          'button',
                          {
                            'data-element': 'applyWatermark',
                            className: 'apply-watermark',
                            disabled: mt,
                            onClick: function () {
                              mt || vt(!0);
                            },
                          },
                          S('option.watermark.addNew')
                        )
                      )
                  ),
                  i.a.createElement('div', { className: 'divider' }),
                  i.a.createElement(
                    'div',
                    { className: 'buttons' },
                    i.a.createElement(
                      'button',
                      {
                        className: 'button',
                        onClick: bt,
                        disabled: mt || B.length < 1,
                      },
                      S('action.print')
                    )
                  )
                )
              )
            );
      };
      e.default = lt;
    },
  },
]);
//# sourceMappingURL=29.chunk.js.map
