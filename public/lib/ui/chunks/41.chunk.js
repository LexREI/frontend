(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    1510: function (t, e, n) {
      var r = n(27),
        o = n(1511);
      'string' == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[t.i, o, '']]);
      var i = {
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
      r(o, i);
      t.exports = o.locals || {};
    },
    1511: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.FlyoutMenu[data-element=menuOverlay] .ActionButton{justify-content:flex-start}.FlyoutMenu[data-element=menuOverlay] .ActionButton .Icon{margin:4px}.FlyoutMenu[data-element=menuOverlay] .ActionButton span{margin:0 4px}.FlyoutMenu[data-element=menuOverlay] .ActionButton.row.disabled:hover{background:none;cursor:default}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1739: function (t, e, n) {
      'use strict';
      n.r(e);
      n(7),
        n(51),
        n(39),
        n(32),
        n(98),
        n(106),
        n(37),
        n(38),
        n(11),
        n(13),
        n(31),
        n(22),
        n(36),
        n(34),
        n(72),
        n(24),
        n(25),
        n(75),
        n(73),
        n(18),
        n(12),
        n(8),
        n(9),
        n(10),
        n(15),
        n(14),
        n(20),
        n(17),
        n(67),
        n(68),
        n(69),
        n(70),
        n(41),
        n(44),
        n(46),
        n(66);
      var r = n(2),
        o = n(246),
        i = n(224),
        a = n(62),
        c = n(1),
        l = n(190),
        u = n(474),
        s = n(435),
        f = n(136),
        p = n(0),
        d = n.n(p),
        h = n(362),
        m = n(6),
        y = n(3),
        v = n(247),
        b = n(5),
        g = n(118),
        w = n(108);
      n(1510);
      function E(t) {
        return (E =
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
          n = e.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
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
        function u(t, e, n, o) {
          var i = e && e.prototype instanceof p ? e : p,
            a = Object.create(i.prototype),
            c = new k(o || []);
          return r(a, '_invoke', { value: x(t, n, c) }), a;
        }
        function s(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = u;
        var f = {};
        function p() {}
        function d() {}
        function h() {}
        var m = {};
        l(m, i, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          v = y && y(y(S([])));
        v && v !== e && n.call(v, i) && (m = v);
        var b = (h.prototype = p.prototype = Object.create(m));
        function g(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var o;
          r(this, '_invoke', {
            value: function (r, i) {
              function a() {
                return new e(function (o, a) {
                  !(function r(o, i, a, c) {
                    var l = s(t[o], t, i);
                    if ('throw' !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && 'object' == E(f) && n.call(f, '__await')
                        ? e.resolve(f.__await).then(
                            function (t) {
                              r('next', t, a, c);
                            },
                            function (t) {
                              r('throw', t, a, c);
                            }
                          )
                        : e.resolve(f).then(
                            function (t) {
                              (u.value = t), a(u);
                            },
                            function (t) {
                              return r('throw', t, a, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(r, i, o, a);
                });
              }
              return (o = o ? o.then(a, a) : a());
            },
          });
        }
        function x(t, e, n) {
          var r = 'suspendedStart';
          return function (o, i) {
            if ('executing' === r)
              throw new Error('Generator is already running');
            if ('completed' === r) {
              if ('throw' === o) throw i;
              return _();
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var c = j(a, n);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              r = 'executing';
              var l = s(t, e, n);
              if ('normal' === l.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              'throw' === l.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = l.arg));
            }
          };
        }
        function j(t, e) {
          var n = e.method,
            r = t.iterator[n];
          if (void 0 === r)
            return (
              (e.delegate = null),
              ('throw' === n &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                j(t, e),
                'throw' === e.method)) ||
                ('return' !== n &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var o = s(r, t.iterator, e.arg);
          if ('throw' === o.type)
            return (
              (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), f
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : i
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              f);
        }
        function L(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function A(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function k(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(L, this),
            this.reset(!0);
        }
        function S(t) {
          if (t) {
            var e = t[i];
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
          return { next: _ };
        }
        function _() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = h),
          r(b, 'constructor', { value: h, configurable: !0 }),
          r(h, 'constructor', { value: d, configurable: !0 }),
          (d.displayName = l(h, c, 'GeneratorFunction')),
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
                ? Object.setPrototypeOf(t, h)
                : ((t.__proto__ = h), l(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(b)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          g(w.prototype),
          l(w.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(u(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          g(b),
          l(b, c, 'Generator'),
          l(b, i, function () {
            return this;
          }),
          l(b, 'toString', function () {
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
          (k.prototype = {
            constructor: k,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(A),
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
                  (a.type = 'throw'),
                  (a.arg = t),
                  (e.next = n),
                  r && ((e.method = 'next'), (e.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ('root' === i.tryLoc) return r('end');
                if (i.tryLoc <= this.prev) {
                  var c = n.call(i, 'catchLoc'),
                    l = n.call(i, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
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
                  var i = o;
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
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), f)
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
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), A(n), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    A(n);
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
                f
              );
            },
          }),
          t
        );
      }
      function x(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            l = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(l) : Promise.resolve(l).then(r, o);
      }
      function j(t, e) {
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
                i,
                a,
                c = [],
                l = !0,
                u = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    l = !0
                  );
              } catch (t) {
                (u = !0), (o = t);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return L(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return L(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function L(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function A(t, e) {
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
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? A(Object(n), !0).forEach(function (e) {
                S(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : A(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
        }
        return t;
      }
      function S(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' !== E(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || 'default');
                if ('object' !== E(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' === E(e) ? e : String(e);
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
      var _ = function (t) {
        var e = t.dataElement,
          n = t.children,
          r = Object(m.e)(function (t) {
            return y.a.getMenuOverlayItems(t, e);
          }, m.c),
          a = d.a.Children.toArray(n);
        return r.map(function (t, e) {
          var n = t.dataElement,
            r = t.type,
            c = t.hidden,
            l = ''.concat(r, '-').concat(n || e),
            u =
              null == c
                ? void 0
                : c
                    .map(function (t) {
                      return 'hide-in-'.concat(t);
                    })
                    .join(' '),
            s = a.find(function (t) {
              return t.props.dataElement === n;
            });
          if (!s) {
            var f = k(k({}, t), {}, { mediaQueryClassName: u });
            switch (r) {
              case 'actionButton':
                s = d.a.createElement(o.a, f);
                break;
              case 'customElement':
                s = d.a.createElement(i.a, f);
            }
          }
          return s ? d.a.cloneElement(s, { key: l }) : null;
        });
      };
      var N = function () {
        var t = Object(m.d)(),
          e = j(Object(h.a)(), 1)[0],
          n = j(Object(p.useState)(), 2),
          i = n[0],
          E = n[1],
          L = Object(m.e)(y.a.isEmbedPrintSupported),
          A = Object(m.e)(y.a.getColorMap),
          k = Object(m.e)(y.a.getSortStrategy),
          S = Object(m.e)(function (t) {
            return y.a.isFullScreen(t);
          }),
          N = Object(m.e)(function (t) {
            return y.a.getTimezone(t);
          }),
          P = Object(p.useCallback)(
            function () {
              return t(r.a.closeElements([b.a.MENU_OVERLAY]));
            },
            [t]
          );
        Object(p.useEffect)(function () {
          var t = function () {
            var t,
              e =
                null === (t = c.a.getDocument()) || void 0 === t
                  ? void 0
                  : t.getType();
            E(e);
          };
          return (
            t(),
            c.a.addEventListener('documentLoaded', t),
            function () {
              c.a.removeEventListener('documentLoaded', t);
            }
          );
        }, []);
        var T = (function () {
          var e,
            n =
              ((e = O().mark(function e() {
                return O().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        P(),
                          Object(g.a)(t, null, {
                            filename: 'Untitled.docx',
                            enableOfficeEditing: !0,
                          });
                      case 2:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })),
              function () {
                var t = this,
                  n = arguments;
                return new Promise(function (r, o) {
                  var i = e.apply(t, n);
                  function a(t) {
                    x(i, r, o, a, c, 'next', t);
                  }
                  function c(t) {
                    x(i, r, o, a, c, 'throw', t);
                  }
                  a(void 0);
                });
              });
          return function () {
            return n.apply(this, arguments);
          };
        })();
        return d.a.createElement(
          v.a,
          {
            menu: b.a.MENU_OVERLAY,
            trigger: b.a.MENU_OVERLAY_BUTTON,
            ariaLabel: e('component.menuOverlay'),
          },
          d.a.createElement(
            _,
            null,
            Object(w.a)() &&
              d.a.createElement(o.a, {
                dataElement: 'newDocumentButton',
                className: 'row',
                img: 'icon-plus-sign',
                label: e('action.newDocument'),
                ariaLabel: e('action.newDocument'),
                role: 'option',
                onClick: T,
              }),
            d.a.createElement(o.a, {
              dataElement: 'filePickerButton',
              className: 'row',
              img: 'icon-header-file-picker-line',
              label: e('action.openFile'),
              ariaLabel: e('action.openFile'),
              role: 'option',
              onClick: u.a,
            }),
            i !== a.a.XOD &&
              !Object(w.a)() &&
              d.a.createElement(o.a, {
                dataElement: 'downloadButton',
                className: 'row',
                img: 'icon-download',
                label: e('action.download'),
                ariaLabel: e('action.download'),
                role: 'option',
                onClick: function () {
                  Object(l.a)(t);
                },
              }),
            Object(w.a)() &&
              d.a.createElement(o.a, {
                dataElement: 'fullscreenButton',
                className: 'row',
                img: S
                  ? 'icon-header-full-screen-exit'
                  : 'icon-header-full-screen',
                label: e(
                  S ? 'action.exitFullscreen' : 'action.enterFullscreen'
                ),
                ariaLabel: e(
                  S ? 'action.exitFullscreen' : 'action.enterFullscreen'
                ),
                role: 'option',
                onClick: s.a,
              }),
            i !== a.a.XOD &&
              d.a.createElement(o.a, {
                dataElement: 'saveAsButton',
                className: 'row',
                img: 'icon-save',
                label: e('saveModal.saveAs'),
                ariaLabel: e('saveModal.saveAs'),
                role: 'option',
                onClick: function () {
                  P(), t(r.a.openElement(b.a.SAVE_MODAL));
                },
              }),
            d.a.createElement(o.a, {
              dataElement: 'printButton',
              className: 'row',
              img: 'icon-header-print-line',
              label: e('action.print'),
              ariaLabel: e('action.print'),
              role: 'option',
              onClick: function () {
                P(),
                  Object(f.c)(t, L, k, A, {
                    isGrayscale: c.a
                      .getDocumentViewer()
                      .isGrayscaleModeEnabled(),
                    timezone: N,
                  });
              },
            })
          ),
          d.a.createElement('div', { className: 'divider' }),
          !1,
          d.a.createElement(o.a, {
            dataElement: 'settingsButton',
            className: 'row',
            img: 'icon-header-settings-line',
            label: e('option.settings.settings'),
            ariaLabel: e('option.settings.settings'),
            role: 'option',
            onClick: function () {
              P(), t(r.a.openElement(b.a.SETTINGS_MODAL));
            },
          })
        );
      };
      e.default = N;
    },
  },
]);
//# sourceMappingURL=41.chunk.js.map
