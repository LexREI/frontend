(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    1663: function (t, e, o) {
      var r = o(27),
        n = o(1664);
      'string' == typeof (n = n.__esModule ? n.default : n) &&
        (n = [[t.i, n, '']]);
      var i = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const o = [];
            for (let r = 0; r < e.length; r++) {
              const n = e[r];
              if (0 === r)
                n.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    o.length > 0 &&
                      o.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                n.shadowRoot.appendChild(e), o.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      r(n, i);
      t.exports = n.locals || {};
    },
    1664: function (t, e, o) {
      (t.exports = o(28)(!1)).push([
        t.i,
        '.add-portfolio-item-popup{width:160px;padding:8px 0;box-shadow:0 0 3px #868e96;border-radius:4px;background-color:var(--component-background);pointer-events:auto;position:relative}.add-portfolio-item-popup .add-portfolio-item-popup-item{display:flex;align-items:center;cursor:pointer;padding:4px 8px}.add-portfolio-item-popup .add-portfolio-item-popup-item:first-child{margin-bottom:8px}.add-portfolio-item-popup .add-portfolio-item-popup-item:hover{background-color:var(--popup-button-hover)}.add-portfolio-item-popup .add-portfolio-item-popup-item .Icon{margin-right:8px}',
        '',
      ]);
    },
    1665: function (t, e, o) {
      var r = o(27),
        n = o(1666);
      'string' == typeof (n = n.__esModule ? n.default : n) &&
        (n = [[t.i, n, '']]);
      var i = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const o = [];
            for (let r = 0; r < e.length; r++) {
              const n = e[r];
              if (0 === r)
                n.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    o.length > 0 &&
                      o.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                n.shadowRoot.appendChild(e), o.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      r(n, i);
      t.exports = n.locals || {};
    },
    1666: function (t, e, o) {
      (t.exports = o(28)(!1)).push([
        t.i,
        '.portfolio-items{height:100%;max-height:446px;overflow-y:auto;margin:16px;padding:16px;background-color:var(--faded-component-background);display:flex;flex-wrap:wrap;grid-gap:16px;gap:16px}.portfolio-items .portfolio-item{width:130px;height:182px;padding:12px 24px;background-color:#f8f9fa;border:1px solid #e7edf3;display:flex;flex-direction:column;align-items:center}.portfolio-items .portfolio-item .portfolio-item-preview{width:100%;height:104px;border:1px solid #e7ebee}.portfolio-items .portfolio-item .portfolio-item-preview .preview-container{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.portfolio-items .portfolio-item .portfolio-item-preview .preview-container .Icon{color:#adb5bd}.portfolio-items .portfolio-item .portfolio-item-name{margin:8px 0;height:12px;font-size:10px;max-width:90px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:#485056}.portfolio-items .portfolio-item .Button{width:24px;height:24px}.portfolio-items .portfolio-item .Button .Icon{width:16px;height:16px}',
        '',
      ]);
    },
    1667: function (t, e, o) {
      var r = o(27),
        n = o(1668);
      'string' == typeof (n = n.__esModule ? n.default : n) &&
        (n = [[t.i, n, '']]);
      var i = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const o = [];
            for (let r = 0; r < e.length; r++) {
              const n = e[r];
              if (0 === r)
                n.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    o.length > 0 &&
                      o.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                n.shadowRoot.appendChild(e), o.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      r(n, i);
      t.exports = n.locals || {};
    },
    1668: function (t, e, o) {
      (e = t.exports = o(28)(!1)).push([
        t.i,
        '.open.CreatePortfolioModal{visibility:visible}.closed.CreatePortfolioModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.CreatePortfolioModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.CreatePortfolioModal .modal-container .wrapper .modal-content{padding:10px}.CreatePortfolioModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.CreatePortfolioModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.CreatePortfolioModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.CreatePortfolioModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.CreatePortfolioModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.CreatePortfolioModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.CreatePortfolioModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.CreatePortfolioModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.CreatePortfolioModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.CreatePortfolioModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CreatePortfolioModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CreatePortfolioModal .footer .modal-button{padding:23px 8px}}.CreatePortfolioModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CreatePortfolioModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .CreatePortfolioModal .swipe-indicator{display:none}}.CreatePortfolioModal .container{box-shadow:0 0 3px 0 var(--document-box-shadow);overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .CreatePortfolioModal .container,.CreatePortfolioModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .CreatePortfolioModal .container,.CreatePortfolioModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CreatePortfolioModal .container,.CreatePortfolioModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CreatePortfolioModal .container,.CreatePortfolioModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.CreatePortfolioModal .container .tab-list{width:100%;height:28px;display:flex;border-radius:4px;border:1px solid var(--border);color:var(--text-color)}.CreatePortfolioModal .container .tab-list .tab-options-button{text-align:center;vertical-align:middle;line-height:24px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1;border-radius:0;cursor:pointer}.CreatePortfolioModal .container .tab-list .tab-options-button:first-child{border-bottom-left-radius:4px;border-top-left-radius:4px}.CreatePortfolioModal .container .tab-list .tab-options-button:last-child{border-bottom-right-radius:4px;border-top-right-radius:4px}.CreatePortfolioModal .container .tab-list .tab-options-button:hover{background:var(--popup-button-hover)}.CreatePortfolioModal .container .tab-list .tab-options-button.selected{background:var(--popup-button-active);cursor:default}.CreatePortfolioModal .container .tab-list .tab-options-divider{width:1px;background:var(--divider)}.CreatePortfolioModal .container .tab-panel{width:100%;display:flex;flex-direction:column;align-items:center}.CreatePortfolioModal .container{display:flex;flex-direction:column;justify-content:space-between;width:737px;height:584px;padding:0;border-radius:4px;box-shadow:0 0 3px var(--document-box-shadow);background:var(--component-background)}.CreatePortfolioModal .container .header{display:flex;justify-content:space-between;margin:16px 16px 10px;font-size:16px;font-weight:700;align-items:center;height:24px}.CreatePortfolioModal .container .header .Button{height:24px}.CreatePortfolioModal .container .divider{height:1px;width:100%;background:var(--divider)}.CreatePortfolioModal .container .tab-list{font-size:13px;margin:0 16px 16px;width:calc(100% - 32px)}.CreatePortfolioModal .container .tab-list .tab-options-button{padding:0;border:none;background-color:transparent}:host(:not([data-tabbing=true])) .CreatePortfolioModal .container .tab-list .tab-options-button,html:not([data-tabbing=true]) .CreatePortfolioModal .container .tab-list .tab-options-button{outline:none}.CreatePortfolioModal .container .tab-panels{height:100%;padding:16px}.CreatePortfolioModal .container .tab-panels .tab-panel{height:100%}.CreatePortfolioModal .container .tab-panels .tab-panel .file-picker-body .modal-btn-file{height:36px;display:flex;align-items:center}.CreatePortfolioModal .container .footer{display:flex;padding:16px;align-items:center;justify-content:space-between;width:100%;margin:0}.CreatePortfolioModal .container .footer .Button{border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;padding:0 8px;height:32px;min-width:72px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer}:host(:not([data-tabbing=true])) .CreatePortfolioModal .container .footer .Button,html:not([data-tabbing=true]) .CreatePortfolioModal .container .footer .Button{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CreatePortfolioModal .container .footer .Button{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CreatePortfolioModal .container .footer .Button{font-size:13px}}.CreatePortfolioModal .container .footer .Button:enabled:hover{background:var(--primary-button-hover)}.CreatePortfolioModal .container .footer .Button:disabled{opacity:.5;cursor:not-allowed}.CreatePortfolioModal .container .footer .create-portfolio{border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;padding:0 8px;height:32px;min-width:70px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer}:host(:not([data-tabbing=true])) .CreatePortfolioModal .container .footer .create-portfolio,html:not([data-tabbing=true]) .CreatePortfolioModal .container .footer .create-portfolio{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CreatePortfolioModal .container .footer .create-portfolio{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CreatePortfolioModal .container .footer .create-portfolio{font-size:13px}}.CreatePortfolioModal .container .footer .create-portfolio:enabled:hover{background:var(--primary-button-hover)}.CreatePortfolioModal .container .footer .create-portfolio:disabled{opacity:.5;cursor:not-allowed}.CreatePortfolioModal .container .footer .add-item-option{visibility:hidden;display:flex;align-items:center;margin-left:16px;color:var(--secondary-button-text);position:relative;cursor:pointer}.CreatePortfolioModal .container .footer .add-item-option.show-popup,.CreatePortfolioModal .container .footer .add-item-option.show-popup .add-item-icon,.CreatePortfolioModal .container .footer .add-item-option.show-popup .Button .Icon{color:var(--secondary-button-hover)}.CreatePortfolioModal .container .footer .add-item-option .add-item-icon{color:var(--secondary-button-text)}.CreatePortfolioModal .container .footer .add-item-option .add-item-option-text{margin-left:4px}.CreatePortfolioModal .container .footer .add-item-option .Button{background-color:transparent;padding-left:0;min-width:0;width:50px}.CreatePortfolioModal .container .footer .add-item-option .Button.active,.CreatePortfolioModal .container .footer .add-item-option .Button:hover{background-color:transparent}.CreatePortfolioModal .container .footer .add-item-option .Button .Icon{width:12px;height:12px;color:var(--secondary-button-text)}.CreatePortfolioModal .container .footer .add-item-option .add-item-trigger{width:1px;height:1px;visibility:hidden;position:absolute;left:100px;top:30px}.CreatePortfolioModal.is-editing .container{height:604px;width:786px}.CreatePortfolioModal.is-editing .container .header{margin-bottom:20px}.CreatePortfolioModal.is-editing .container .footer .add-item-option{visibility:visible}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1723: function (t, e, o) {
      'use strict';
      o.r(e);
      o(32),
        o(20),
        o(9),
        o(139),
        o(18),
        o(11),
        o(13),
        o(7),
        o(12),
        o(8),
        o(10),
        o(15),
        o(14),
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
      var r = o(0),
        n = o.n(r),
        i = o(6),
        a = o(362),
        l = o(3),
        c = o(2),
        u = o(19),
        p = o.n(u),
        s = o(5),
        d = o(21),
        f = o(142),
        h = o(530),
        m = o(33),
        v = o(1387),
        y = o(223),
        g = o(147),
        b = o(23);
      o(1663);
      function x(t, e) {
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
              var r,
                n,
                i,
                a,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((i = (o = o.call(t)).next), 0 === e)) {
                  if (Object(o) !== o) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(o)).done) &&
                    (l.push(r.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (u = !0), (n = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != o.return &&
                    ((a = o.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw n;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return w(t, e);
            var o = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === o && t.constructor && (o = t.constructor.name);
            if ('Map' === o || 'Set' === o) return Array.from(t);
            if (
              'Arguments' === o ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
            )
              return w(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function w(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var o = 0, r = new Array(e); o < e; o++) r[o] = t[o];
        return r;
      }
      var E = function (t) {
          var e = t.triggerElementName,
            o = t.onClose,
            i = t.onAddFiles,
            l = t.onAddFolder,
            c = x(Object(a.a)(), 1)[0],
            u = Object(r.useRef)(),
            p = x(
              Object(r.useState)({ left: 'auto', right: 'auto', top: 'auto' }),
              2
            ),
            s = p[0],
            d = p[1];
          return (
            Object(r.useEffect)(function () {
              var t = Object(y.a)(e, u);
              d(t);
            }, []),
            Object(g.a)(u, function (t) {
              var r = Object(b.a)().querySelector(
                '[data-element='.concat(e, ']')
              ).parentElement;
              (null != r && r.contains(t.target)) || o();
            }),
            n.a.createElement(
              v.a,
              { id: 'create-portfolio-add-item-portal', position: s },
              n.a.createElement(
                'div',
                { className: 'add-portfolio-item-popup', ref: u },
                n.a.createElement(
                  'div',
                  {
                    className: 'add-portfolio-item-popup-item',
                    onClick: function () {
                      return i();
                    },
                  },
                  n.a.createElement(m.a, { glyph: 'icon-portfolio-file' }),
                  n.a.createElement('div', null, c('portfolio.addFiles'))
                ),
                n.a.createElement(
                  'div',
                  {
                    className: 'add-portfolio-item-popup-item',
                    onClick: function () {
                      return l();
                    },
                  },
                  n.a.createElement(m.a, { glyph: 'icon-portfolio-folder' }),
                  n.a.createElement('div', null, c('portfolio.addFolder'))
                )
              )
            )
          );
        },
        P = (o(39), o(1));
      function C(t) {
        return (C =
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
      function O() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ O =
          function () {
            return t;
          };
        var t = {},
          e = Object.prototype,
          o = e.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (t, e, o) {
              t[e] = o.value;
            },
          n = 'function' == typeof Symbol ? Symbol : {},
          i = n.iterator || '@@iterator',
          a = n.asyncIterator || '@@asyncIterator',
          l = n.toStringTag || '@@toStringTag';
        function c(t, e, o) {
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
          c({}, '');
        } catch (t) {
          c = function (t, e, o) {
            return (t[e] = o);
          };
        }
        function u(t, e, o, n) {
          var i = e && e.prototype instanceof d ? e : d,
            a = Object.create(i.prototype),
            l = new M(n || []);
          return r(a, '_invoke', { value: w(t, o, l) }), a;
        }
        function p(t, e, o) {
          try {
            return { type: 'normal', arg: t.call(e, o) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = u;
        var s = {};
        function d() {}
        function f() {}
        function h() {}
        var m = {};
        c(m, i, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(k([])));
        y && y !== e && o.call(y, i) && (m = y);
        var g = (h.prototype = d.prototype = Object.create(m));
        function b(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function x(t, e) {
          var n;
          r(this, '_invoke', {
            value: function (r, i) {
              function a() {
                return new e(function (n, a) {
                  !(function r(n, i, a, l) {
                    var c = p(t[n], t, i);
                    if ('throw' !== c.type) {
                      var u = c.arg,
                        s = u.value;
                      return s && 'object' == C(s) && o.call(s, '__await')
                        ? e.resolve(s.__await).then(
                            function (t) {
                              r('next', t, a, l);
                            },
                            function (t) {
                              r('throw', t, a, l);
                            }
                          )
                        : e.resolve(s).then(
                            function (t) {
                              (u.value = t), a(u);
                            },
                            function (t) {
                              return r('throw', t, a, l);
                            }
                          );
                    }
                    l(c.arg);
                  })(r, i, n, a);
                });
              }
              return (n = n ? n.then(a, a) : a());
            },
          });
        }
        function w(t, e, o) {
          var r = 'suspendedStart';
          return function (n, i) {
            if ('executing' === r)
              throw new Error('Generator is already running');
            if ('completed' === r) {
              if ('throw' === n) throw i;
              return j();
            }
            for (o.method = n, o.arg = i; ; ) {
              var a = o.delegate;
              if (a) {
                var l = E(a, o);
                if (l) {
                  if (l === s) continue;
                  return l;
                }
              }
              if ('next' === o.method) o.sent = o._sent = o.arg;
              else if ('throw' === o.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), o.arg);
                o.dispatchException(o.arg);
              } else 'return' === o.method && o.abrupt('return', o.arg);
              r = 'executing';
              var c = p(t, e, o);
              if ('normal' === c.type) {
                if (
                  ((r = o.done ? 'completed' : 'suspendedYield'), c.arg === s)
                )
                  continue;
                return { value: c.arg, done: o.done };
              }
              'throw' === c.type &&
                ((r = 'completed'), (o.method = 'throw'), (o.arg = c.arg));
            }
          };
        }
        function E(t, e) {
          var o = e.method,
            r = t.iterator[o];
          if (void 0 === r)
            return (
              (e.delegate = null),
              ('throw' === o &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                E(t, e),
                'throw' === e.method)) ||
                ('return' !== o &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + o + "' method"
                  )))),
              s
            );
          var n = p(r, t.iterator, e.arg);
          if ('throw' === n.type)
            return (
              (e.method = 'throw'), (e.arg = n.arg), (e.delegate = null), s
            );
          var i = n.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                s)
              : i
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              s);
        }
        function P(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(P, this),
            this.reset(!0);
        }
        function k(t) {
          if (t) {
            var e = t[i];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                n = function e() {
                  for (; ++r < t.length; )
                    if (o.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (n.next = n);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          r(g, 'constructor', { value: h, configurable: !0 }),
          r(h, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = c(h, l, 'GeneratorFunction')),
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
                ? Object.setPrototypeOf(t, h)
                : ((t.__proto__ = h), c(t, l, 'GeneratorFunction')),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(x.prototype),
          c(x.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = x),
          (t.async = function (e, o, r, n, i) {
            void 0 === i && (i = Promise);
            var a = new x(u(e, o, r, n), i);
            return t.isGeneratorFunction(o)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          b(g),
          c(g, l, 'Generator'),
          c(g, i, function () {
            return this;
          }),
          c(g, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = Object(t),
              o = [];
            for (var r in e) o.push(r);
            return (
              o.reverse(),
              function t() {
                for (; o.length; ) {
                  var r = o.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = k),
          (M.prototype = {
            constructor: M,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
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
              function r(o, r) {
                return (
                  (a.type = 'throw'),
                  (a.arg = t),
                  (e.next = o),
                  r && ((e.method = 'next'), (e.arg = void 0)),
                  !!r
                );
              }
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n],
                  a = i.completion;
                if ('root' === i.tryLoc) return r('end');
                if (i.tryLoc <= this.prev) {
                  var l = o.call(i, 'catchLoc'),
                    c = o.call(i, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var n = this.tryEntries[r];
                if (
                  n.tryLoc <= this.prev &&
                  o.call(n, 'finallyLoc') &&
                  this.prev < n.finallyLoc
                ) {
                  var i = n;
                  break;
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), s)
                  : this.complete(a)
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
                s
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (o.finallyLoc === t)
                  return this.complete(o.completion, o.afterLoc), L(o), s;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (o.tryLoc === t) {
                  var r = o.completion;
                  if ('throw' === r.type) {
                    var n = r.arg;
                    L(o);
                  }
                  return n;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, o) {
              return (
                (this.delegate = { iterator: k(t), resultName: e, nextLoc: o }),
                'next' === this.method && (this.arg = void 0),
                s
              );
            },
          }),
          t
        );
      }
      function L(t, e, o, r, n, i, a) {
        try {
          var l = t[i](a),
            c = l.value;
        } catch (t) {
          return void o(t);
        }
        l.done ? e(c) : Promise.resolve(c).then(r, n);
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
              var r,
                n,
                i,
                a,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((i = (o = o.call(t)).next), 0 === e)) {
                  if (Object(o) !== o) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(o)).done) &&
                    (l.push(r.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (u = !0), (n = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != o.return &&
                    ((a = o.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw n;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return k(t, e);
            var o = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === o && t.constructor && (o = t.constructor.name);
            if ('Map' === o || 'Set' === o) return Array.from(t);
            if (
              'Arguments' === o ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
            )
              return k(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function k(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var o = 0, r = new Array(e); o < e; o++) r[o] = t[o];
        return r;
      }
      var j = { loadAsPDF: !0 },
        A = function (t) {
          var e = t.item,
            o = Object(r.useRef)(),
            i = M(Object(r.useState)(!1), 2),
            a = i[0],
            l = i[1];
          return (
            Object(r.useEffect)(function () {
              var t, r;
              return (
                (function () {
                  var n = (function (t) {
                    return function () {
                      var e = this,
                        o = arguments;
                      return new Promise(function (r, n) {
                        var i = t.apply(e, o);
                        function a(t) {
                          L(i, r, n, a, l, 'next', t);
                        }
                        function l(t) {
                          L(i, r, n, a, l, 'throw', t);
                        }
                        a(void 0);
                      });
                    };
                  })(
                    O().mark(function n() {
                      return O().wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (n.prev = 0),
                                  (n.next = 3),
                                  P.a.createDocument(e, j)
                                );
                              case 3:
                                if (((t = n.sent), !(t.getPageCount() < 1))) {
                                  n.next = 8;
                                  break;
                                }
                                return l(!0), n.abrupt('return');
                              case 8:
                                return (
                                  (n.next = 10),
                                  t.loadThumbnail(1, function (t) {
                                    var e,
                                      r = o.current.clientWidth,
                                      n = o.current.clientHeight,
                                      i = t.width,
                                      a = t.height;
                                    if (r < i || n < a) {
                                      var l = Math.min(r / i, n / a);
                                      (t.style.width = ''.concat(i * l, 'px')),
                                        (t.style.height = ''.concat(
                                          a * l,
                                          'px'
                                        ));
                                    }
                                    null === (e = o.current) ||
                                      void 0 === e ||
                                      e.appendChild(t);
                                  })
                                );
                              case 10:
                                (r = n.sent), (n.next = 16);
                                break;
                              case 13:
                                (n.prev = 13), (n.t0 = n.catch(0)), l(!0);
                              case 16:
                              case 'end':
                                return n.stop();
                            }
                        },
                        n,
                        null,
                        [[0, 13]]
                      );
                    })
                  );
                  return function () {
                    return n.apply(this, arguments);
                  };
                })()(),
                function () {
                  r && t.cancelLoadThumbnail(r);
                }
              );
            }, []),
            n.a.createElement(
              'div',
              { className: 'preview-container', ref: o },
              a && n.a.createElement(m.a, { glyph: 'icon-portfolio-file' })
            )
          );
        },
        _ = Object(r.memo)(A),
        S =
          (o(1665),
          function (t) {
            var e = t.items,
              o = t.onDeleteItem;
            return n.a.createElement(
              'div',
              { className: 'portfolio-items' },
              e.map(function (t, e) {
                return n.a.createElement(
                  'div',
                  { className: 'portfolio-item', key: t.name },
                  n.a.createElement(
                    'div',
                    { className: 'portfolio-item-preview' },
                    n.a.createElement(_, { item: t })
                  ),
                  n.a.createElement(
                    'div',
                    { className: 'portfolio-item-name', title: t.name },
                    t.name
                  ),
                  n.a.createElement(d.a, {
                    img: 'ic-delete',
                    onClick: function () {
                      return o(e);
                    },
                    title: 'action.delete',
                  })
                );
              })
            );
          });
      function F(t) {
        return (F =
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
      function N(t, e) {
        var o =
          ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
          t['@@iterator'];
        if (!o) {
          if (
            Array.isArray(t) ||
            (o = (function (t, e) {
              if (!t) return;
              if ('string' == typeof t) return T(t, e);
              var o = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === o && t.constructor && (o = t.constructor.name);
              if ('Map' === o || 'Set' === o) return Array.from(t);
              if (
                'Arguments' === o ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
              )
                return T(t, e);
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            o && (t = o);
            var r = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: n,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var i,
          a = !0,
          l = !1;
        return {
          s: function () {
            o = o.call(t);
          },
          n: function () {
            var t = o.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (l = !0), (i = t);
          },
          f: function () {
            try {
              a || null == o.return || o.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function T(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var o = 0, r = new Array(e); o < e; o++) r[o] = t[o];
        return r;
      }
      function I() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ I =
          function () {
            return t;
          };
        var t = {},
          e = Object.prototype,
          o = e.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (t, e, o) {
              t[e] = o.value;
            },
          n = 'function' == typeof Symbol ? Symbol : {},
          i = n.iterator || '@@iterator',
          a = n.asyncIterator || '@@asyncIterator',
          l = n.toStringTag || '@@toStringTag';
        function c(t, e, o) {
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
          c({}, '');
        } catch (t) {
          c = function (t, e, o) {
            return (t[e] = o);
          };
        }
        function u(t, e, o, n) {
          var i = e && e.prototype instanceof d ? e : d,
            a = Object.create(i.prototype),
            l = new O(n || []);
          return r(a, '_invoke', { value: w(t, o, l) }), a;
        }
        function p(t, e, o) {
          try {
            return { type: 'normal', arg: t.call(e, o) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = u;
        var s = {};
        function d() {}
        function f() {}
        function h() {}
        var m = {};
        c(m, i, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(L([])));
        y && y !== e && o.call(y, i) && (m = y);
        var g = (h.prototype = d.prototype = Object.create(m));
        function b(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function x(t, e) {
          var n;
          r(this, '_invoke', {
            value: function (r, i) {
              function a() {
                return new e(function (n, a) {
                  !(function r(n, i, a, l) {
                    var c = p(t[n], t, i);
                    if ('throw' !== c.type) {
                      var u = c.arg,
                        s = u.value;
                      return s && 'object' == F(s) && o.call(s, '__await')
                        ? e.resolve(s.__await).then(
                            function (t) {
                              r('next', t, a, l);
                            },
                            function (t) {
                              r('throw', t, a, l);
                            }
                          )
                        : e.resolve(s).then(
                            function (t) {
                              (u.value = t), a(u);
                            },
                            function (t) {
                              return r('throw', t, a, l);
                            }
                          );
                    }
                    l(c.arg);
                  })(r, i, n, a);
                });
              }
              return (n = n ? n.then(a, a) : a());
            },
          });
        }
        function w(t, e, o) {
          var r = 'suspendedStart';
          return function (n, i) {
            if ('executing' === r)
              throw new Error('Generator is already running');
            if ('completed' === r) {
              if ('throw' === n) throw i;
              return M();
            }
            for (o.method = n, o.arg = i; ; ) {
              var a = o.delegate;
              if (a) {
                var l = E(a, o);
                if (l) {
                  if (l === s) continue;
                  return l;
                }
              }
              if ('next' === o.method) o.sent = o._sent = o.arg;
              else if ('throw' === o.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), o.arg);
                o.dispatchException(o.arg);
              } else 'return' === o.method && o.abrupt('return', o.arg);
              r = 'executing';
              var c = p(t, e, o);
              if ('normal' === c.type) {
                if (
                  ((r = o.done ? 'completed' : 'suspendedYield'), c.arg === s)
                )
                  continue;
                return { value: c.arg, done: o.done };
              }
              'throw' === c.type &&
                ((r = 'completed'), (o.method = 'throw'), (o.arg = c.arg));
            }
          };
        }
        function E(t, e) {
          var o = e.method,
            r = t.iterator[o];
          if (void 0 === r)
            return (
              (e.delegate = null),
              ('throw' === o &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                E(t, e),
                'throw' === e.method)) ||
                ('return' !== o &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + o + "' method"
                  )))),
              s
            );
          var n = p(r, t.iterator, e.arg);
          if ('throw' === n.type)
            return (
              (e.method = 'throw'), (e.arg = n.arg), (e.delegate = null), s
            );
          var i = n.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                s)
              : i
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              s);
        }
        function P(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function C(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(P, this),
            this.reset(!0);
        }
        function L(t) {
          if (t) {
            var e = t[i];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                n = function e() {
                  for (; ++r < t.length; )
                    if (o.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (n.next = n);
            }
          }
          return { next: M };
        }
        function M() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          r(g, 'constructor', { value: h, configurable: !0 }),
          r(h, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = c(h, l, 'GeneratorFunction')),
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
                ? Object.setPrototypeOf(t, h)
                : ((t.__proto__ = h), c(t, l, 'GeneratorFunction')),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(x.prototype),
          c(x.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = x),
          (t.async = function (e, o, r, n, i) {
            void 0 === i && (i = Promise);
            var a = new x(u(e, o, r, n), i);
            return t.isGeneratorFunction(o)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          b(g),
          c(g, l, 'Generator'),
          c(g, i, function () {
            return this;
          }),
          c(g, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = Object(t),
              o = [];
            for (var r in e) o.push(r);
            return (
              o.reverse(),
              function t() {
                for (; o.length; ) {
                  var r = o.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = L),
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
                this.tryEntries.forEach(C),
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
              function r(o, r) {
                return (
                  (a.type = 'throw'),
                  (a.arg = t),
                  (e.next = o),
                  r && ((e.method = 'next'), (e.arg = void 0)),
                  !!r
                );
              }
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n],
                  a = i.completion;
                if ('root' === i.tryLoc) return r('end');
                if (i.tryLoc <= this.prev) {
                  var l = o.call(i, 'catchLoc'),
                    c = o.call(i, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var n = this.tryEntries[r];
                if (
                  n.tryLoc <= this.prev &&
                  o.call(n, 'finallyLoc') &&
                  this.prev < n.finallyLoc
                ) {
                  var i = n;
                  break;
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), s)
                  : this.complete(a)
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
                s
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (o.finallyLoc === t)
                  return this.complete(o.completion, o.afterLoc), C(o), s;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (o.tryLoc === t) {
                  var r = o.completion;
                  if ('throw' === r.type) {
                    var n = r.arg;
                    C(o);
                  }
                  return n;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, o) {
              return (
                (this.delegate = { iterator: L(t), resultName: e, nextLoc: o }),
                'next' === this.method && (this.arg = void 0),
                s
              );
            },
          }),
          t
        );
      }
      function D(t, e, o, r, n, i, a) {
        try {
          var l = t[i](a),
            c = l.value;
        } catch (t) {
          return void o(t);
        }
        l.done ? e(c) : Promise.resolve(c).then(r, n);
      }
      function R(t) {
        return function () {
          var e = this,
            o = arguments;
          return new Promise(function (r, n) {
            var i = t.apply(e, o);
            function a(t) {
              D(i, r, n, a, l, 'next', t);
            }
            function l(t) {
              D(i, r, n, a, l, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      var G = (function () {
          var t = R(
            I().mark(function t(e, o) {
              var r, n, i, a, l, c;
              return I().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = window.Core.PDFNet),
                        (t.next = 3),
                        e.createIndirectDict()
                      );
                    case 3:
                      return (
                        (n = t.sent).putName('Type', 'Filespec'),
                        n.putString('F', o.name),
                        n.putText('UF', o.name),
                        (t.next = 9),
                        n.putDict('EF')
                      );
                    case 9:
                      return (
                        (i = t.sent),
                        (t.next = 12),
                        r.Filter.createFlateEncode()
                      );
                    case 12:
                      return (
                        (a = t.sent), (t.t0 = e), (t.next = 16), o.arrayBuffer()
                      );
                    case 16:
                      return (
                        (t.t1 = t.sent),
                        (t.t2 = a),
                        (t.next = 20),
                        t.t0.createIndirectStream.call(t.t0, t.t1, t.t2)
                      );
                    case 20:
                      return (
                        (l = t.sent),
                        i.put('F', l),
                        (t.next = 24),
                        r.FileSpec.createFromObj(n)
                      );
                    case 24:
                      return (
                        (c = t.sent),
                        (t.next = 27),
                        e.addFileAttachment(o.name, c)
                      );
                    case 27:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e, o) {
            return t.apply(this, arguments);
          };
        })(),
        B = (function () {
          var t = R(
            I().mark(function t(e) {
              var o, r, n, i, a, l, c;
              return I().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (o = window.Core.PDFNet),
                        (t.t0 = e),
                        (t.next = 4),
                        o.Rect.init(0, 0, 200, 200)
                      );
                    case 4:
                      return (
                        (t.t1 = t.sent),
                        (t.next = 7),
                        t.t0.pageCreate.call(t.t0, t.t1)
                      );
                    case 7:
                      return (
                        (r = t.sent), (t.next = 10), o.ElementBuilder.create()
                      );
                    case 10:
                      return (
                        (n = t.sent), (t.next = 13), o.ElementWriter.create()
                      );
                    case 13:
                      return (
                        (i = t.sent).beginOnPage(r),
                        (t.next = 17),
                        o.Font.create(e, o.Font.StandardType1Font.e_helvetica)
                      );
                    case 17:
                      return (
                        (a = t.sent),
                        (t.t2 = i),
                        (t.next = 21),
                        n.createTextBeginWithFont(a, 12)
                      );
                    case 21:
                      return (
                        (t.t3 = t.sent),
                        t.t2.writeElement.call(t.t2, t.t3),
                        (t.next = 25),
                        n.createNewTextRun('My PDF Portfolio')
                      );
                    case 25:
                      return (
                        (l = t.sent).setTextMatrixEntries(1, 0, 0, 1, 50, 96),
                        (t.next = 29),
                        l.getGState()
                      );
                    case 29:
                      return (
                        (c = t.sent),
                        (t.t4 = c),
                        (t.next = 33),
                        o.ColorSpace.createDeviceRGB()
                      );
                    case 33:
                      return (
                        (t.t5 = t.sent),
                        t.t4.setFillColorSpace.call(t.t4, t.t5),
                        (t.t6 = c),
                        (t.next = 38),
                        o.ColorPt.init(1, 0, 0)
                      );
                    case 38:
                      return (
                        (t.t7 = t.sent),
                        t.t6.setFillColorWithColorPt.call(t.t6, t.t7),
                        i.writeElement(l),
                        (t.t8 = i),
                        (t.next = 44),
                        n.createTextEnd()
                      );
                    case 44:
                      (t.t9 = t.sent),
                        t.t8.writeElement.call(t.t8, t.t9),
                        i.end(),
                        e.pagePushBack(r);
                    case 48:
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
        H = (function () {
          var t = R(
            I().mark(function t(e) {
              var o, r;
              return I().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), e.getRoot();
                    case 2:
                      return (
                        (o = t.sent), (t.next = 5), o.findObj('Collection')
                      );
                    case 5:
                      if ((r = t.sent)) {
                        t.next = 10;
                        break;
                      }
                      return (t.next = 9), o.putDict('Collection');
                    case 9:
                      r = t.sent;
                    case 10:
                      r.putName('View', 'T');
                    case 11:
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
        z = (function () {
          var t = R(
            I().mark(function t(e) {
              var o, r, n, i, a;
              return I().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (o = window.Core.PDFNet), (t.next = 3), o.initialize()
                        );
                      case 3:
                        return (t.next = 5), o.PDFDoc.create();
                      case 5:
                        (r = t.sent), (n = N(e)), (t.prev = 7), n.s();
                      case 9:
                        if ((i = n.n()).done) {
                          t.next = 15;
                          break;
                        }
                        return (a = i.value), (t.next = 13), G(r, a);
                      case 13:
                        t.next = 9;
                        break;
                      case 15:
                        t.next = 20;
                        break;
                      case 17:
                        (t.prev = 17), (t.t0 = t.catch(7)), n.e(t.t0);
                      case 20:
                        return (t.prev = 20), n.f(), t.finish(20);
                      case 23:
                        return (t.next = 25), B(r);
                      case 25:
                        return (t.next = 27), H(r);
                      case 27:
                        return t.abrupt('return', r);
                      case 28:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[7, 17, 20, 23]]
              );
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        U = o(118);
      o(1667);
      function W(t) {
        return (W =
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
      function Y(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return K(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          V(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function $() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ $ =
          function () {
            return t;
          };
        var t = {},
          e = Object.prototype,
          o = e.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (t, e, o) {
              t[e] = o.value;
            },
          n = 'function' == typeof Symbol ? Symbol : {},
          i = n.iterator || '@@iterator',
          a = n.asyncIterator || '@@asyncIterator',
          l = n.toStringTag || '@@toStringTag';
        function c(t, e, o) {
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
          c({}, '');
        } catch (t) {
          c = function (t, e, o) {
            return (t[e] = o);
          };
        }
        function u(t, e, o, n) {
          var i = e && e.prototype instanceof d ? e : d,
            a = Object.create(i.prototype),
            l = new O(n || []);
          return r(a, '_invoke', { value: w(t, o, l) }), a;
        }
        function p(t, e, o) {
          try {
            return { type: 'normal', arg: t.call(e, o) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = u;
        var s = {};
        function d() {}
        function f() {}
        function h() {}
        var m = {};
        c(m, i, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(L([])));
        y && y !== e && o.call(y, i) && (m = y);
        var g = (h.prototype = d.prototype = Object.create(m));
        function b(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function x(t, e) {
          var n;
          r(this, '_invoke', {
            value: function (r, i) {
              function a() {
                return new e(function (n, a) {
                  !(function r(n, i, a, l) {
                    var c = p(t[n], t, i);
                    if ('throw' !== c.type) {
                      var u = c.arg,
                        s = u.value;
                      return s && 'object' == W(s) && o.call(s, '__await')
                        ? e.resolve(s.__await).then(
                            function (t) {
                              r('next', t, a, l);
                            },
                            function (t) {
                              r('throw', t, a, l);
                            }
                          )
                        : e.resolve(s).then(
                            function (t) {
                              (u.value = t), a(u);
                            },
                            function (t) {
                              return r('throw', t, a, l);
                            }
                          );
                    }
                    l(c.arg);
                  })(r, i, n, a);
                });
              }
              return (n = n ? n.then(a, a) : a());
            },
          });
        }
        function w(t, e, o) {
          var r = 'suspendedStart';
          return function (n, i) {
            if ('executing' === r)
              throw new Error('Generator is already running');
            if ('completed' === r) {
              if ('throw' === n) throw i;
              return M();
            }
            for (o.method = n, o.arg = i; ; ) {
              var a = o.delegate;
              if (a) {
                var l = E(a, o);
                if (l) {
                  if (l === s) continue;
                  return l;
                }
              }
              if ('next' === o.method) o.sent = o._sent = o.arg;
              else if ('throw' === o.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), o.arg);
                o.dispatchException(o.arg);
              } else 'return' === o.method && o.abrupt('return', o.arg);
              r = 'executing';
              var c = p(t, e, o);
              if ('normal' === c.type) {
                if (
                  ((r = o.done ? 'completed' : 'suspendedYield'), c.arg === s)
                )
                  continue;
                return { value: c.arg, done: o.done };
              }
              'throw' === c.type &&
                ((r = 'completed'), (o.method = 'throw'), (o.arg = c.arg));
            }
          };
        }
        function E(t, e) {
          var o = e.method,
            r = t.iterator[o];
          if (void 0 === r)
            return (
              (e.delegate = null),
              ('throw' === o &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                E(t, e),
                'throw' === e.method)) ||
                ('return' !== o &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + o + "' method"
                  )))),
              s
            );
          var n = p(r, t.iterator, e.arg);
          if ('throw' === n.type)
            return (
              (e.method = 'throw'), (e.arg = n.arg), (e.delegate = null), s
            );
          var i = n.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                s)
              : i
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              s);
        }
        function P(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function C(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(P, this),
            this.reset(!0);
        }
        function L(t) {
          if (t) {
            var e = t[i];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                n = function e() {
                  for (; ++r < t.length; )
                    if (o.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (n.next = n);
            }
          }
          return { next: M };
        }
        function M() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          r(g, 'constructor', { value: h, configurable: !0 }),
          r(h, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = c(h, l, 'GeneratorFunction')),
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
                ? Object.setPrototypeOf(t, h)
                : ((t.__proto__ = h), c(t, l, 'GeneratorFunction')),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(x.prototype),
          c(x.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = x),
          (t.async = function (e, o, r, n, i) {
            void 0 === i && (i = Promise);
            var a = new x(u(e, o, r, n), i);
            return t.isGeneratorFunction(o)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          b(g),
          c(g, l, 'Generator'),
          c(g, i, function () {
            return this;
          }),
          c(g, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = Object(t),
              o = [];
            for (var r in e) o.push(r);
            return (
              o.reverse(),
              function t() {
                for (; o.length; ) {
                  var r = o.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = L),
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
                this.tryEntries.forEach(C),
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
              function r(o, r) {
                return (
                  (a.type = 'throw'),
                  (a.arg = t),
                  (e.next = o),
                  r && ((e.method = 'next'), (e.arg = void 0)),
                  !!r
                );
              }
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n],
                  a = i.completion;
                if ('root' === i.tryLoc) return r('end');
                if (i.tryLoc <= this.prev) {
                  var l = o.call(i, 'catchLoc'),
                    c = o.call(i, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var n = this.tryEntries[r];
                if (
                  n.tryLoc <= this.prev &&
                  o.call(n, 'finallyLoc') &&
                  this.prev < n.finallyLoc
                ) {
                  var i = n;
                  break;
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), s)
                  : this.complete(a)
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
                s
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (o.finallyLoc === t)
                  return this.complete(o.completion, o.afterLoc), C(o), s;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (o.tryLoc === t) {
                  var r = o.completion;
                  if ('throw' === r.type) {
                    var n = r.arg;
                    C(o);
                  }
                  return n;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, o) {
              return (
                (this.delegate = { iterator: L(t), resultName: e, nextLoc: o }),
                'next' === this.method && (this.arg = void 0),
                s
              );
            },
          }),
          t
        );
      }
      function J(t, e, o, r, n, i, a) {
        try {
          var l = t[i](a),
            c = l.value;
        } catch (t) {
          return void o(t);
        }
        l.done ? e(c) : Promise.resolve(c).then(r, n);
      }
      function q(t, e) {
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
              var r,
                n,
                i,
                a,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((i = (o = o.call(t)).next), 0 === e)) {
                  if (Object(o) !== o) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(o)).done) &&
                    (l.push(r.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (u = !0), (n = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != o.return &&
                    ((a = o.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw n;
                }
              }
              return l;
            }
          })(t, e) ||
          V(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function V(t, e) {
        if (t) {
          if ('string' == typeof t) return K(t, e);
          var o = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === o && t.constructor && (o = t.constructor.name),
            'Map' === o || 'Set' === o
              ? Array.from(t)
              : 'Arguments' === o ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                ? K(t, e)
                : void 0
          );
        }
      }
      function K(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var o = 0, r = new Array(e); o < e; o++) r[o] = t[o];
        return r;
      }
      var Q = function () {
        var t = q(Object(a.a)(), 1)[0],
          e = Object(i.d)(),
          o = q(
            Object(i.e)(function (t) {
              return [
                l.a.isElementDisabled(t, s.a.CREATE_PORTFOLIO_MODAL),
                l.a.isElementOpen(t, s.a.CREATE_PORTFOLIO_MODAL),
              ];
            }),
            2
          ),
          u = o[0],
          v = o[1],
          y = q(Object(r.useState)([]), 2),
          g = y[0],
          b = y[1],
          x = q(Object(r.useState)(!1), 2),
          w = x[0],
          P = x[1],
          C = Object(r.useRef)(null),
          O = function () {
            e(c.a.closeElement(s.a.CREATE_PORTFOLIO_MODAL));
          },
          L = function (t) {
            b(t);
          },
          M = (function () {
            var t,
              o =
                ((t = $().mark(function t() {
                  var o;
                  return $().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), z(g);
                        case 2:
                          (o = t.sent), Object(U.a)(e, o), O();
                        case 5:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })),
                function () {
                  var e = this,
                    o = arguments;
                  return new Promise(function (r, n) {
                    var i = t.apply(e, o);
                    function a(t) {
                      J(i, r, n, a, l, 'next', t);
                    }
                    function l(t) {
                      J(i, r, n, a, l, 'throw', t);
                    }
                    a(void 0);
                  });
                });
            return function () {
              return o.apply(this, arguments);
            };
          })(),
          k = p()({ CreatePortfolioModal: !0, 'is-editing': g.length > 0 }),
          j = p()({ 'add-item-option': !0, 'show-popup': w });
        return u || !v
          ? null
          : n.a.createElement(
              'div',
              {
                className: k,
                'data-element': s.a.CREATE_PORTFOLIO_MODAL,
                onClick: O,
              },
              n.a.createElement(
                'div',
                {
                  className: 'container',
                  onClick: function (t) {
                    return t.stopPropagation();
                  },
                },
                n.a.createElement(
                  'div',
                  { className: 'header' },
                  n.a.createElement(
                    'div',
                    null,
                    t('portfolio.createPDFPortfolio')
                  ),
                  n.a.createElement(d.a, {
                    img: 'icon-close',
                    onClick: O,
                    title: 'action.close',
                  })
                ),
                0 === g.length &&
                  n.a.createElement(
                    f.d,
                    { id: s.a.CREATE_PORTFOLIO_MODAL },
                    n.a.createElement(
                      'div',
                      { className: 'tab-list' },
                      n.a.createElement(
                        f.a,
                        { dataElement: s.a.PORTFOLIO_UPLOAD_FILES_TAB },
                        n.a.createElement(
                          'button',
                          { className: 'tab-options-button' },
                          t('portfolio.uploadFiles')
                        )
                      ),
                      n.a.createElement('div', {
                        className: 'tab-options-divider',
                      }),
                      n.a.createElement(
                        f.a,
                        { dataElement: s.a.PORTFOLIO_UPLOAD_FOLDER_TAB },
                        n.a.createElement(
                          'button',
                          { className: 'tab-options-button' },
                          t('portfolio.uploadFolder')
                        )
                      )
                    ),
                    n.a.createElement('div', { className: 'divider' }),
                    n.a.createElement(
                      'div',
                      { className: 'tab-panels' },
                      n.a.createElement(
                        f.c,
                        { dataElement: 'portfolioUploadFiles' },
                        n.a.createElement(h.a, {
                          onChange: L,
                          onDrop: L,
                          allowMultiple: !0,
                        })
                      ),
                      n.a.createElement(
                        f.c,
                        { dataElement: 'portfolioUploadFolder' },
                        n.a.createElement(n.a.Fragment, null)
                      )
                    )
                  ),
                g.length > 0 &&
                  n.a.createElement(
                    n.a.Fragment,
                    null,
                    n.a.createElement('div', { className: 'divider' }),
                    n.a.createElement(S, {
                      items: g,
                      onDeleteItem: function (t) {
                        g.splice(t, 1), b(Y(g));
                      },
                    })
                  ),
                n.a.createElement('div', { className: 'divider' }),
                n.a.createElement(
                  'div',
                  { className: 'footer' },
                  n.a.createElement(
                    'div',
                    {
                      className: j,
                      onClick: function () {
                        P(!w);
                      },
                    },
                    n.a.createElement(m.a, {
                      glyph: 'icon-portfolio-file',
                      className: 'add-item-icon',
                    }),
                    n.a.createElement(
                      'div',
                      { className: 'add-item-option-text' },
                      ''.concat(t('portfolio.addFiles'), '...')
                    ),
                    n.a.createElement(d.a, {
                      img: 'icon-chevron-'.concat(w ? 'up' : 'down'),
                    }),
                    n.a.createElement('div', {
                      className: 'add-item-trigger',
                      'data-element': s.a.PORTFOLIO_MODAL_ADD_ITEM_TRIGGER,
                    }),
                    w &&
                      n.a.createElement(E, {
                        triggerElementName:
                          s.a.PORTFOLIO_MODAL_ADD_ITEM_TRIGGER,
                        onClose: function () {
                          P(!1);
                        },
                        onAddFiles: function () {
                          var t;
                          null == C ||
                            null === (t = C.current) ||
                            void 0 === t ||
                            t.click();
                        },
                        onAddFolder: function () {},
                      })
                  ),
                  n.a.createElement(
                    'button',
                    {
                      className: 'create-portfolio',
                      disabled: 0 === g.length,
                      onClick: M,
                    },
                    t('action.create')
                  )
                ),
                n.a.createElement('input', {
                  ref: C,
                  multiple: !0,
                  style: { display: 'none' },
                  type: 'file',
                  onChange: function (t) {
                    var e;
                    (e = t.target.files).length > 0 &&
                      b(g.concat(Array.from(e))),
                      (t.target.value = null);
                  },
                })
              )
            );
      };
      e.default = Q;
    },
  },
]);
//# sourceMappingURL=25.chunk.js.map
