(window.webpackJsonp = window.webpackJsonp || []).push([
  [39],
  {
    1611: function (o, e, t) {
      var n = t(27),
        i = t(1612);
      'string' == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[o.i, i, '']]);
      var r = {
        insert: function (o) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const t = [];
            for (let n = 0; n < e.length; n++) {
              const i = e[n];
              if (0 === n)
                i.shadowRoot.appendChild(o),
                  (o.onload = function () {
                    t.length > 0 &&
                      t.forEach((e) => {
                        e.innerHTML = o.innerHTML;
                      });
                  });
              else {
                const e = o.cloneNode(!0);
                i.shadowRoot.appendChild(e), t.push(e);
              }
            }
          } else document.head.appendChild(o);
        },
        singleton: !1,
      };
      n(i, r);
      o.exports = i.locals || {};
    },
    1612: function (o, e, t) {
      (e = o.exports = t(28)(!1)).push([
        o.i,
        '.open.LoadingModal{visibility:visible}.closed.LoadingModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.LoadingModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.LoadingModal .modal-container .wrapper .modal-content{padding:10px}.LoadingModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.LoadingModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.LoadingModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.LoadingModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.LoadingModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.LoadingModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.LoadingModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.LoadingModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.LoadingModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.LoadingModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LoadingModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .LoadingModal .footer .modal-button{padding:23px 8px}}.LoadingModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LoadingModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .LoadingModal .swipe-indicator{display:none}}.LoadingModal .container{display:flex;flex-direction:column;align-items:center;padding:10px}.LoadingModal .inner-wrapper{margin:10px;border-top:5px solid var(--border);border:5px solid var(--border);border-top-color:var(--focus-border);border-radius:50%;width:54px;height:54px;-webkit-animation:spin 1.2s ease infinite;animation:spin 1.2s ease infinite}@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1747: function (o, e, t) {
      'use strict';
      t.r(e);
      t(37),
        t(38),
        t(11),
        t(13),
        t(7),
        t(31),
        t(22),
        t(46),
        t(53),
        t(44),
        t(95),
        t(41),
        t(12),
        t(8),
        t(9),
        t(10);
      var n = t(0),
        i = t.n(n),
        r = t(4),
        a = t.n(r),
        d = t(6),
        p = t(1381),
        l = t(2),
        s = t(3),
        c = t(5);
      t(1611);
      function u(o) {
        return (u =
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
      function f(o, e) {
        if (!(o instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      function m(o, e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(o, w(n.key), n);
        }
      }
      function b(o, e) {
        return (b = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (o, e) {
              return (o.__proto__ = e), o;
            })(o, e);
      }
      function y(o) {
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
          } catch (o) {
            return !1;
          }
        })();
        return function () {
          var t,
            n = g(o);
          if (e) {
            var i = g(this).constructor;
            t = Reflect.construct(n, arguments, i);
          } else t = n.apply(this, arguments);
          return h(this, t);
        };
      }
      function h(o, e) {
        if (e && ('object' === u(e) || 'function' == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return (function (o) {
          if (void 0 === o)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return o;
        })(o);
      }
      function g(o) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function w(o) {
        var e = (function (o, e) {
          if ('object' !== u(o) || null === o) return o;
          var t = o[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(o, e || 'default');
            if ('object' !== u(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(o);
        })(o, 'string');
        return 'symbol' === u(e) ? e : String(e);
      }
      var x,
        v,
        L,
        O = (function (o) {
          !(function (o, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (o.prototype = Object.create(e && e.prototype, {
              constructor: { value: o, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(o, 'prototype', { writable: !1 }),
              e && b(o, e);
          })(a, o);
          var e,
            t,
            n,
            r = y(a);
          function a() {
            return f(this, a), r.apply(this, arguments);
          }
          return (
            (e = a),
            (t = [
              {
                key: 'componentDidUpdate',
                value: function (o) {
                  !o.isOpen &&
                    this.props.isOpen &&
                    this.props.closeElements([
                      c.a.SIGNATURE_MODAL,
                      c.a.PRINT_MODAL,
                      c.a.ERROR_MODAL,
                    ]);
                },
              },
              {
                key: 'render',
                value: function () {
                  if (this.props.isDisabled) return null;
                  var o = Object(p.a)('Modal LoadingModal', this.props);
                  return i.a.createElement(
                    'div',
                    { className: o, 'data-element': c.a.LOADING_MODAL },
                    i.a.createElement(
                      'div',
                      { className: 'container' },
                      i.a.createElement('div', { className: 'inner-wrapper' })
                    )
                  );
                },
              },
            ]) && m(e.prototype, t),
            n && m(e, n),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            a
          );
        })(i.a.PureComponent);
      (x = O),
        (v = 'propTypes'),
        (L = {
          isDisabled: a.a.bool,
          isOpen: a.a.bool,
          closeElements: a.a.func.isRequired,
        }),
        (v = w(v)) in x
          ? Object.defineProperty(x, v, {
              value: L,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (x[v] = L);
      var M = { closeElements: l.a.closeElements },
        k = Object(d.b)(function (o) {
          return {
            isDisabled: s.a.isElementDisabled(o, c.a.LOADING_MODAL),
            isOpen: s.a.isElementOpen(o, c.a.LOADING_MODAL),
          };
        }, M)(O);
      e.default = k;
    },
  },
]);
//# sourceMappingURL=39.chunk.js.map
