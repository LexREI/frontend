(window.webpackJsonp = window.webpackJsonp || []).push([
  [35],
  {
    1525: function (t, e, n) {
      var o = n(27),
        i = n(1526);
      'string' == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[t.i, i, '']]);
      var r = {
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
      o(i, r);
      t.exports = i.locals || {};
    },
    1526: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        '.open.ContextMenuPopup{visibility:visible}.closed.ContextMenuPopup{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ContextMenuPopup{position:absolute;z-index:70;display:flex;justify-content:center;align-items:center}.ContextMenuPopup:empty{padding:0}.ContextMenuPopup .buttons{display:flex}.ContextMenuPopup .Button{margin:4px;width:32px;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ContextMenuPopup .Button{width:42px;height:42px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ContextMenuPopup .Button{width:42px;height:42px}}.ContextMenuPopup .Button:hover{background:var(--popup-button-hover)}.ContextMenuPopup .Button .Icon{width:18px;height:18px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ContextMenuPopup .Button .Icon{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ContextMenuPopup .Button .Icon{width:24px;height:24px}}.is-vertical.ContextMenuPopup .Button.main-menu-button{width:100%;border-radius:0;justify-content:flex-start;padding-left:var(--padding-small);padding-right:var(--padding-small);margin:0 0 var(--padding-tiny) 0}.is-vertical.ContextMenuPopup .Button.main-menu-button:first-child{margin-top:var(--padding-tiny)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .is-vertical.ContextMenuPopup .Button.main-menu-button{width:100%;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .is-vertical.ContextMenuPopup .Button.main-menu-button{width:100%;height:32px}}.is-vertical.ContextMenuPopup .Button.main-menu-button .Icon{margin-right:10px}.is-vertical.ContextMenuPopup .Button.main-menu-button span{white-space:nowrap}@-webkit-keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.ContextMenuPopup{box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);border-radius:4px}.ContextMenuPopup.is-horizontal .container{display:inherit}.ContextMenuPopup.is-vertical{flex-direction:column;align-items:flex-start}.ContextMenuPopup.isOfficeEditor .container{display:block}.ContextMenuPopup.isOfficeEditor .container .office-action-item{width:300px;padding:8px;display:flex;justify-content:space-between;cursor:pointer}.ContextMenuPopup.isOfficeEditor .container .office-action-item:hover{background-color:var(--blue-4)}.ContextMenuPopup.isOfficeEditor .container .office-action-item.disabled{cursor:default;background-color:inherit;color:var(--disabled-text)}.ContextMenuPopup.isOfficeEditor .container .office-action-item .icon-title{display:flex;align-items:center}.ContextMenuPopup.isOfficeEditor .container .office-action-item .icon-title .Icon{margin-right:10px}.ContextMenuPopup.isOfficeEditor .container .office-action-item .shortcut{display:flex;align-items:center}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1742: function (t, e, n) {
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
        n(73),
        n(51),
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
        r = n(19),
        a = n.n(r),
        c = n(222),
        l = n.n(c),
        u = n(6),
        s = n(1371),
        p = n(362),
        f = n(246),
        d = n(1437),
        m = n(33),
        h = n(147),
        y = n(116),
        g = n(2),
        b = n(3),
        v = n(1),
        x = n(35),
        w = n(108),
        E = n(5),
        O = (n(1525), n(23));
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
      function C() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ C =
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
          r = i.iterator || '@@iterator',
          a = i.asyncIterator || '@@asyncIterator',
          c = i.toStringTag || '@@toStringTag';
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
        function u(t, e, n, i) {
          var r = e && e.prototype instanceof f ? e : f,
            a = Object.create(r.prototype),
            c = new j(i || []);
          return o(a, '_invoke', { value: w(t, n, c) }), a;
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
        function f() {}
        function d() {}
        function m() {}
        var h = {};
        l(h, r, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(T([])));
        g && g !== e && n.call(g, r) && (h = g);
        var b = (m.prototype = f.prototype = Object.create(h));
        function v(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function x(t, e) {
          var i;
          o(this, '_invoke', {
            value: function (o, r) {
              function a() {
                return new e(function (i, a) {
                  !(function o(i, r, a, c) {
                    var l = s(t[i], t, r);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        p = u.value;
                      return p && 'object' == P(p) && n.call(p, '__await')
                        ? e.resolve(p.__await).then(
                            function (t) {
                              o('next', t, a, c);
                            },
                            function (t) {
                              o('throw', t, a, c);
                            }
                          )
                        : e.resolve(p).then(
                            function (t) {
                              (u.value = t), a(u);
                            },
                            function (t) {
                              return o('throw', t, a, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(o, r, i, a);
                });
              }
              return (i = i ? i.then(a, a) : a());
            },
          });
        }
        function w(t, e, n) {
          var o = 'suspendedStart';
          return function (i, r) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === i) throw r;
              return N();
            }
            for (n.method = i, n.arg = r; ; ) {
              var a = n.delegate;
              if (a) {
                var c = E(a, n);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === o) throw ((o = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = 'executing';
              var l = s(t, e, n);
              if ('normal' === l.type) {
                if (
                  ((o = n.done ? 'completed' : 'suspendedYield'), l.arg === p)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              'throw' === l.type &&
                ((o = 'completed'), (n.method = 'throw'), (n.arg = l.arg));
            }
          };
        }
        function E(t, e) {
          var n = e.method,
            o = t.iterator[n];
          if (void 0 === o)
            return (
              (e.delegate = null),
              ('throw' === n &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                E(t, e),
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
          var r = i.arg;
          return r
            ? r.done
              ? ((e[t.resultName] = r.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                p)
              : r
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              p);
        }
        function O(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function k(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function j(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(O, this),
            this.reset(!0);
        }
        function T(t) {
          if (t) {
            var e = t[r];
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
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = m),
          o(b, 'constructor', { value: m, configurable: !0 }),
          o(m, 'constructor', { value: d, configurable: !0 }),
          (d.displayName = l(m, c, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === d || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, m)
                : ((t.__proto__ = m), l(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(b)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          v(x.prototype),
          l(x.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = x),
          (t.async = function (e, n, o, i, r) {
            void 0 === r && (r = Promise);
            var a = new x(u(e, n, o, i), r);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          v(b),
          l(b, c, 'Generator'),
          l(b, r, function () {
            return this;
          }),
          l(b, 'toString', function () {
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
          (t.values = T),
          (j.prototype = {
            constructor: j,
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
                  (a.type = 'throw'),
                  (a.arg = t),
                  (e.next = n),
                  o && ((e.method = 'next'), (e.arg = void 0)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var r = this.tryEntries[i],
                  a = r.completion;
                if ('root' === r.tryLoc) return o('end');
                if (r.tryLoc <= this.prev) {
                  var c = n.call(r, 'catchLoc'),
                    l = n.call(r, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < r.catchLoc) return o(r.catchLoc, !0);
                    if (this.prev < r.finallyLoc) return o(r.finallyLoc);
                  } else if (c) {
                    if (this.prev < r.catchLoc) return o(r.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < r.finallyLoc) return o(r.finallyLoc);
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
                  var r = i;
                  break;
                }
              }
              r &&
                ('break' === t || 'continue' === t) &&
                r.tryLoc <= e &&
                e <= r.finallyLoc &&
                (r = null);
              var a = r ? r.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                r
                  ? ((this.method = 'next'), (this.next = r.finallyLoc), p)
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
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), k(n), p;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var i = o.arg;
                    k(n);
                  }
                  return i;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: T(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      function k(t, e, n, o, i, r, a) {
        try {
          var c = t[r](a),
            l = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(l) : Promise.resolve(l).then(o, i);
      }
      function j(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (o, i) {
            var r = t.apply(e, n);
            function a(t) {
              k(r, o, i, a, c, 'next', t);
            }
            function c(t) {
              k(r, o, i, a, c, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function T(t, e) {
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
      function N(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? T(Object(n), !0).forEach(function (e) {
                M(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : T(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
        }
        return t;
      }
      function M(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' !== P(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(t, e || 'default');
                if ('object' !== P(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' === P(e) ? e : String(e);
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
      function _(t, e) {
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
                r,
                a,
                c = [],
                l = !0,
                u = !1;
              try {
                if (((r = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (o = r.call(n)).done) &&
                    (c.push(o.value), c.length !== e);
                    l = !0
                  );
              } catch (t) {
                (u = !0), (i = t);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw i;
                }
              }
              return c;
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
      var S = function (t) {
          var e = t.onClick,
            n = t.img,
            o = t.title,
            r = t.shortcut,
            c = void 0 === r ? '' : r,
            l = t.disabled,
            s = void 0 !== l && l,
            f = _(Object(p.a)(), 1)[0],
            d = Object(u.d)();
          return i.a.createElement(
            'div',
            {
              className: a()('office-action-item', { disabled: s }),
              onClick: function () {
                return !s && e();
              },
              tabIndex: s ? -1 : 0,
              onKeyDown: function (t) {
                'Enter' !== t.key ||
                  s ||
                  (e(), d(g.a.closeElement(E.a.CONTEXT_MENU_POPUP)));
              },
            },
            i.a.createElement(
              'div',
              { className: 'icon-title' },
              i.a.createElement(m.a, { glyph: n, disabled: s }),
              i.a.createElement('div', null, f(o))
            ),
            i.a.createElement('div', { className: 'shortcut' }, c)
          );
        },
        L = function (t) {
          var e = t.clickPosition,
            n = _(
              Object(u.e)(function (t) {
                return [
                  b.a.isElementOpen(t, E.a.CONTEXT_MENU_POPUP),
                  b.a.isElementDisabled(t, E.a.CONTEXT_MENU_POPUP),
                  b.a.isRightClickAnnotationPopupEnabled(t),
                ];
              }, u.c),
              3
            ),
            r = n[0],
            c = n[1],
            p = n[2],
            m = Object(u.d)(),
            P = Object(u.f)(),
            k = _(Object(o.useState)({ left: 0, top: 0 }), 2),
            T = k[0],
            M = k[1],
            A = Object(o.useRef)(),
            L = !!x.m || Object(x.l)();
          if (
            (Object(h.a)(A, function () {
              m(g.a.closeElement(E.a.CONTEXT_MENU_POPUP));
            }),
            Object(o.useEffect)(
              function () {
                r &&
                  m(
                    g.a.closeElements([
                      E.a.ANNOTATION_POPUP,
                      E.a.TEXT_POPUP,
                      E.a.INLINE_COMMENT_POPUP,
                    ])
                  );
              },
              [r]
            ),
            Object(o.useEffect)(
              function () {
                var t = e.left,
                  n = e.top,
                  o = A.current.getBoundingClientRect(),
                  i = o.width,
                  r = o.height,
                  a = Object(O.a)().querySelector('.DocumentContainer');
                if (a) {
                  var c = a.getBoundingClientRect();
                  t < c.left && (t = c.left + 2),
                    t + i > c.right && (t = c.right - i - 2),
                    window.isApryseWebViewerWebComponent && (t -= c.left),
                    n < c.top && (n = c.top + 2),
                    n + r > c.bottom && (n = c.bottom - r - 2),
                    M({ left: t, top: n });
                }
              },
              [e]
            ),
            c)
          )
            return null;
          var B = i.a.createElement(
            'div',
            {
              className: a()('Popup', 'ContextMenuPopup', {
                open: r,
                closed: !r,
                isOfficeEditor: Object(w.a)(),
                'is-vertical': p && !Object(w.a)(),
                'is-horizontal': !p && !Object(w.a)(),
              }),
              ref: A,
              'data-element': E.a.CONTEXT_MENU_POPUP,
              style: N({}, T),
              onClick: function () {
                return m(g.a.closeElement(E.a.CONTEXT_MENU_POPUP));
              },
            },
            i.a.createElement(
              s.a,
              { locked: r },
              i.a.createElement(
                'div',
                { className: 'container' },
                Object(w.a)()
                  ? i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(S, {
                        title: 'action.cut',
                        img: 'icon-cut',
                        onClick: j(
                          C().mark(function t() {
                            return C().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.next = 2),
                                      v.a.getOfficeEditor().copySelectedText()
                                    );
                                  case 2:
                                    v.a.getOfficeEditor().removeSelection();
                                  case 3:
                                  case 'end':
                                    return t.stop();
                                }
                            }, t);
                          })
                        ),
                        shortcut: 'Ctrl+X',
                        disabled: !v.a.getOfficeEditor().isTextSelected(),
                      }),
                      i.a.createElement(S, {
                        title: 'action.copy',
                        img: 'icon-copy',
                        onClick: function () {
                          return v.a.getOfficeEditor().copySelectedText();
                        },
                        shortcut: 'Ctrl+C',
                        disabled: !v.a.getOfficeEditor().isTextSelected(),
                      }),
                      !x.d &&
                        i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(S, {
                            title: 'action.paste',
                            img: 'icon-paste',
                            onClick: function () {
                              return v.a.getOfficeEditor().pasteText();
                            },
                            shortcut: 'Ctrl+V',
                          }),
                          i.a.createElement(S, {
                            title: 'action.pasteWithoutFormatting',
                            img: 'icon-paste-without-formatting',
                            onClick: function () {
                              return v.a.getOfficeEditor().pasteText(!1);
                            },
                            shortcut: 'Ctrl+Shift+V',
                          })
                        ),
                      i.a.createElement(S, {
                        title: 'action.delete',
                        img: 'icon-delete-line',
                        onClick: function () {
                          return v.a.getOfficeEditor().removeSelection();
                        },
                        disabled: !v.a.getOfficeEditor().isTextSelected(),
                      })
                    )
                  : i.a.createElement(
                      d.a,
                      {
                        dataElement: E.a.CONTEXT_MENU_POPUP,
                        childrenClassName: 'main-menu-button',
                      },
                      i.a.createElement(f.a, {
                        className: 'main-menu-button',
                        dataElement: 'panToolButton',
                        label: p ? 'tool.pan' : '',
                        title: p ? '' : 'tool.pan',
                        img: 'icon-header-pan',
                        onClick: function () {
                          return Object(y.a)(P, 'Pan');
                        },
                      }),
                      i.a.createElement(f.a, {
                        className: 'main-menu-button',
                        dataElement: 'stickyToolButton',
                        label: p ? 'annotation.stickyNote' : '',
                        title: p ? '' : 'annotation.stickyNote',
                        img: 'icon-tool-comment-line',
                        onClick: function () {
                          return Object(y.a)(P, 'AnnotationCreateSticky');
                        },
                      }),
                      i.a.createElement(f.a, {
                        className: 'main-menu-button',
                        dataElement: 'highlightToolButton',
                        label: p ? 'annotation.highlight' : '',
                        title: p ? '' : 'annotation.highlight',
                        img: 'icon-tool-highlight',
                        onClick: function () {
                          return Object(y.a)(
                            P,
                            'AnnotationCreateTextHighlight'
                          );
                        },
                      }),
                      i.a.createElement(f.a, {
                        className: 'main-menu-button',
                        dataElement: 'freeHandToolButton',
                        label: p ? 'annotation.freehand' : '',
                        title: p ? '' : 'annotation.freehand',
                        img: 'icon-tool-pen-line',
                        onClick: function () {
                          return Object(y.a)(P, 'AnnotationCreateFreeHand');
                        },
                      }),
                      i.a.createElement(f.a, {
                        className: 'main-menu-button',
                        dataElement: 'freeHandHighlightToolButton',
                        label: p ? 'annotation.freeHandHighlight' : '',
                        title: p ? '' : 'annotation.freeHandHighlight',
                        img: 'icon-tool-pen-highlight',
                        onClick: function () {
                          return Object(y.a)(
                            P,
                            'AnnotationCreateFreeHandHighlight'
                          );
                        },
                      }),
                      i.a.createElement(f.a, {
                        className: 'main-menu-button',
                        dataElement: 'freeTextToolButton',
                        label: p ? 'annotation.freetext' : '',
                        title: p ? '' : 'annotation.freetext',
                        img: 'icon-tool-text-free-text',
                        onClick: function () {
                          return Object(y.a)(P, 'AnnotationCreateFreeText');
                        },
                      }),
                      i.a.createElement(f.a, {
                        className: 'main-menu-button',
                        dataElement: 'markInsertTextToolButton',
                        label: p ? 'annotation.markInsertText' : '',
                        title: p ? '' : 'annotation.markInsertText',
                        img: 'ic-insert text',
                        onClick: function () {
                          return Object(y.a)(
                            P,
                            'AnnotationCreateMarkInsertText'
                          );
                        },
                      }),
                      i.a.createElement(f.a, {
                        className: 'main-menu-button',
                        dataElement: 'markReplaceTextToolButton',
                        label: p ? 'annotation.markReplaceText' : '',
                        title: p ? '' : 'annotation.markReplaceText',
                        img: 'ic-replace text',
                        onClick: function () {
                          return Object(y.a)(
                            P,
                            'AnnotationCreateMarkReplaceText'
                          );
                        },
                      })
                    )
              )
            )
          );
          return x.f || L
            ? B
            : i.a.createElement(
                l.a,
                {
                  cancel:
                    '.Button, .cell, .sliders-container svg, select, button, input',
                },
                B
              );
        },
        B = i.a.memo(L);
      e.default = B;
    },
  },
]);
//# sourceMappingURL=35.chunk.js.map
