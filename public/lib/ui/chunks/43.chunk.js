(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
  {
    1656: function (e, t, n) {
      var r = n(27),
        o = n(1657);
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
    1657: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.OpenFileModal .container{overflow-y:unset;width:600px}.OpenFileModal .image-signature{height:240px!important;width:100%}.OpenFileModal .error{color:red;margin:5px}.OpenFileModal .extension-dropdown{padding:0 16px;display:flex;flex-direction:column}.OpenFileModal .extension-dropdown p{width:100%;font-size:13px;line-height:16px;font-weight:700;order:1}.OpenFileModal .extension-dropdown .Dropdown__wrapper{order:2;width:100%}.OpenFileModal .extension-dropdown .Dropdown__wrapper .Dropdown{width:100%!important}.OpenFileModal .extension-dropdown .Dropdown__wrapper .Dropdown__items{width:100%}.OpenFileModal .extension-dropdown .Dropdown__wrapper .arrow{flex:unset;width:12px;height:16px;margin-top:2px}.OpenFileModal .extension-dropdown .Dropdown__wrapper .Dropdown .picked-option .picked-option-text{flex:none;width:unset}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1749: function (e, t, n) {
      'use strict';
      n.r(t);
      n(82),
        n(17),
        n(14),
        n(8),
        n(7),
        n(9),
        n(10),
        n(368),
        n(369),
        n(146),
        n(315),
        n(128),
        n(18),
        n(11),
        n(13),
        n(12),
        n(15),
        n(20),
        n(51),
        n(22),
        n(67),
        n(68),
        n(69),
        n(70),
        n(41),
        n(44),
        n(24),
        n(25),
        n(46),
        n(66);
      var r = n(0),
        o = n.n(r),
        i = n(6),
        a = n(238),
        l = n(19),
        c = n.n(l),
        u = n(30),
        s = n(21),
        p = n(362),
        d = n(142),
        f = n(1477),
        h = n(430),
        m = n(3),
        v = n(2),
        y = n(5),
        w = n(367);
      n(1428), n(1656);
      function b(e) {
        return (b =
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
      function E() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ E =
          function () {
            return e;
          };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          l = o.toStringTag || '@@toStringTag';
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, '');
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, o) {
          var i = t && t.prototype instanceof d ? t : d,
            a = Object.create(i.prototype),
            l = new M(o || []);
          return r(a, '_invoke', { value: O(e, n, l) }), a;
        }
        function s(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = u;
        var p = {};
        function d() {}
        function f() {}
        function h() {}
        var m = {};
        c(m, i, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(N([])));
        y && y !== t && n.call(y, i) && (m = y);
        var w = (h.prototype = d.prototype = Object.create(m));
        function x(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function g(e, t) {
          var o;
          r(this, '_invoke', {
            value: function (r, i) {
              function a() {
                return new t(function (o, a) {
                  !(function r(o, i, a, l) {
                    var c = s(e[o], e, i);
                    if ('throw' !== c.type) {
                      var u = c.arg,
                        p = u.value;
                      return p && 'object' == b(p) && n.call(p, '__await')
                        ? t.resolve(p.__await).then(
                            function (e) {
                              r('next', e, a, l);
                            },
                            function (e) {
                              r('throw', e, a, l);
                            }
                          )
                        : t.resolve(p).then(
                            function (e) {
                              (u.value = e), a(u);
                            },
                            function (e) {
                              return r('throw', e, a, l);
                            }
                          );
                    }
                    l(c.arg);
                  })(r, i, o, a);
                });
              }
              return (o = o ? o.then(a, a) : a());
            },
          });
        }
        function O(e, t, n) {
          var r = 'suspendedStart';
          return function (o, i) {
            if ('executing' === r)
              throw new Error('Generator is already running');
            if ('completed' === r) {
              if ('throw' === o) throw i;
              return D();
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = L(a, n);
                if (l) {
                  if (l === p) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              r = 'executing';
              var c = s(e, t, n);
              if ('normal' === c.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), c.arg === p)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              'throw' === c.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
            }
          };
        }
        function L(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                L(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              p
            );
          var o = s(r, e.iterator, t.arg);
          if ('throw' === o.type)
            return (
              (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), p
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                p)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              p);
        }
        function _(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function F(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function M(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(_, this),
            this.reset(!0);
        }
        function N(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                o = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: D };
        }
        function D() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          r(w, 'constructor', { value: h, configurable: !0 }),
          r(h, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = c(h, l, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), c(e, l, 'GeneratorFunction')),
              (e.prototype = Object.create(w)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          x(g.prototype),
          c(g.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = g),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new g(u(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          x(w),
          c(w, l, 'Generator'),
          c(w, i, function () {
            return this;
          }),
          c(w, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = N),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(F),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = 'next'), (t.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ('root' === i.tryLoc) return r('end');
                if (i.tryLoc <= this.prev) {
                  var l = n.call(i, 'catchLoc'),
                    c = n.call(i, 'finallyLoc');
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
            abrupt: function (e, t) {
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
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), p)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === e.type && t && (this.next = t),
                p
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), F(n), p;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    F(n);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: N(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          e
        );
      }
      function x(e, t, n, r, o, i, a) {
        try {
          var l = e[i](a),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      function g(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              x(i, r, o, a, l, 'next', e);
            }
            function l(e) {
              x(i, r, o, a, l, 'throw', e);
            }
            a(void 0);
          });
        };
      }
      function O(e, t) {
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
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return L(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return L(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function L(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var _ = { closeElements: v.a.closeElements },
        F = Object(i.b)(function (e) {
          return {
            isDisabled: m.a.isElementDisabled(e, y.a.OPEN_FILE_MODAL),
            isOpen: m.a.isElementOpen(e, y.a.OPEN_FILE_MODAL),
            tabManager: m.a.getTabManager(e),
          };
        }, _)(function (e) {
          var t = e.isDisabled,
            n = e.isOpen,
            i = e.tabManager,
            l = e.closeElements,
            m = Object(p.a)().t,
            v = O(Object(r.useState)(''), 2),
            b = v[0],
            x = v[1],
            L = O(Object(r.useState)('pdf'), 2),
            _ = L[0],
            F = L[1],
            M = O(Object(r.useState)(), 2),
            N = M[0],
            D = M[1],
            S = O(Object(r.useState)(), 2),
            k = S[0],
            A = S[1],
            j = O(
              Object(r.useState)({
                fileError: '',
                urlError: '',
                extensionError: '',
              }),
              2
            ),
            P = j[0],
            T = j[1],
            I = function () {
              l([y.a.OPEN_FILE_MODAL]),
                x(''),
                T({ fileError: '', urlError: '' }),
                D(null),
                F('pdf'),
                A(null);
            };
          Object(r.useEffect)(
            function () {
              n
                ? l([
                    y.a.PRINT_MODAL,
                    y.a.LOADING_MODAL,
                    y.a.PROGRESS_MODAL,
                    y.a.ERROR_MODAL,
                    y.a.MODEL3D_MODAL,
                  ])
                : (x(''),
                  T({ fileError: '', urlError: '' }),
                  D(null),
                  F(null),
                  A(null));
            },
            [n]
          );
          var R = (function () {
              var e = g(
                E().mark(function e(t, n, r, o) {
                  var l;
                  return E().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt(
                            'return',
                            T({ urlError: 'URL or File must be provided' })
                          );
                        case 2:
                          if (n && -1 !== U.indexOf(n)) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt(
                            'return',
                            T({ extensionError: 'Extension must be provided' })
                          );
                        case 4:
                          return (
                            (l = !o || a.a.MAX_FILE_SIZE > o),
                            (e.next = 7),
                            i.addTab(t, {
                              extension: n,
                              filename: r,
                              setActive: !0,
                              saveCurrentActiveTabState: !0,
                              useDB: l,
                            })
                          );
                        case 7:
                          I();
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n, r, o) {
                return e.apply(this, arguments);
              };
            })(),
            C = c()({ Modal: !0, OpenFileModal: !0, open: n, closed: !n }),
            G = /(?:\.([^.?]+))?$/,
            H = (function () {
              var e = g(
                E().mark(function e(t) {
                  var n, r, o, i;
                  return E().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((T(null), t)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt('return');
                        case 3:
                          if (!(t instanceof window.Core.Document)) {
                            e.next = 8;
                            break;
                          }
                          return (e.next = 6), R(t, t.type, t.filename);
                        case 6:
                          e.next = 18;
                          break;
                        case 8:
                          return (
                            (n =
                              window.Core.mimeTypeToExtension[t.type] ||
                              G.exec(t.name)[1] ||
                              null),
                            (r = t.name),
                            (o = t.size),
                            (i = URL.createObjectURL(t)),
                            x(i),
                            D(r),
                            F(n),
                            A(o),
                            (e.next = 18),
                            R(t, n, r, o)
                          );
                        case 18:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            B = (function () {
              var e = g(
                E().mark(function e(t) {
                  var n;
                  return E().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          T(null),
                            x(t.trim()),
                            (n = t
                              .substring(t.lastIndexOf('/') + 1)
                              .split('?')[0]),
                            D(n),
                            F(G.exec(n)[1]),
                            A(null);
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            U = !!Object(u.a)('webviewerServerURL', null)
              ? window.Core.SupportedFileFormats.SERVER
              : window.Core.SupportedFileFormats.CLIENT;
          return (
            (U = U.reduce(function (e, t) {
              return -1 === e.indexOf(t) && e.push(t), e;
            }, [])),
            !t &&
              o.a.createElement(
                'div',
                {
                  className: C,
                  'data-element': y.a.OPEN_FILE_MODAL,
                  onMouseDown: I,
                },
                o.a.createElement(
                  'div',
                  {
                    className: 'container',
                    onMouseDown: function (e) {
                      return e.stopPropagation();
                    },
                  },
                  o.a.createElement(
                    w.a,
                    {
                      title: m('OpenFile.enterUrlOrChooseFile'),
                      closeButtonDataElement: 'openFileModalClose',
                      onCloseClick: I,
                      swipeToClose: !0,
                      closeHandler: I,
                    },
                    o.a.createElement('div', { className: 'swipe-indicator' }),
                    o.a.createElement(
                      d.d,
                      {
                        className: 'open-file-modal-tabs',
                        id: 'openFileModal',
                      },
                      o.a.createElement(
                        'div',
                        { className: 'tabs-header-container' },
                        o.a.createElement(
                          'div',
                          { className: 'tab-list' },
                          o.a.createElement(
                            d.a,
                            { dataElement: 'urlInputPanelButton' },
                            o.a.createElement(
                              'button',
                              { className: 'tab-options-button' },
                              m('link.url')
                            )
                          ),
                          o.a.createElement('div', {
                            className: 'tab-options-divider',
                          }),
                          o.a.createElement(
                            d.a,
                            { dataElement: 'filePickerPanelButton' },
                            o.a.createElement(
                              'button',
                              { className: 'tab-options-button' },
                              m('option.pageReplacementModal.localFile')
                            )
                          )
                        )
                      ),
                      o.a.createElement('div', {
                        className: 'page-replacement-divider',
                      }),
                      o.a.createElement(
                        d.c,
                        { dataElement: 'urlInputPanel' },
                        o.a.createElement(
                          'div',
                          { className: 'panel-body' },
                          o.a.createElement(f.a, {
                            onFileSelect: function (e) {
                              B(e);
                            },
                            acceptFormats: U,
                            extension: _,
                            setExtension: F,
                            defaultValue: b,
                          })
                        )
                      ),
                      o.a.createElement(
                        d.c,
                        { dataElement: 'filePickerPanel' },
                        o.a.createElement(
                          'div',
                          { className: 'panel-body' },
                          o.a.createElement(h.a, {
                            onFileProcessed: function (e) {
                              return H(e);
                            },
                          })
                        )
                      )
                    ),
                    o.a.createElement('div', {
                      className: 'page-replacement-divider',
                    }),
                    o.a.createElement(
                      'div',
                      { className: 'footer' },
                      (null == P ? void 0 : P.urlError) &&
                        o.a.createElement(
                          'p',
                          { className: 'error' },
                          '* ',
                          P.urlError
                        ),
                      (null == P ? void 0 : P.fileError) &&
                        o.a.createElement(
                          'p',
                          { className: 'error' },
                          '* ',
                          P.fileError
                        ),
                      (null == P ? void 0 : P.extensionError) &&
                        o.a.createElement(
                          'p',
                          { className: 'error' },
                          '* ',
                          P.extensionError
                        ),
                      o.a.createElement(s.a, {
                        className: 'modal-btn',
                        dataElement: 'linkSubmitButton',
                        label: m('OpenFile.addTab'),
                        style: { width: 90 },
                        onClick: function () {
                          return R(b, _, N, k);
                        },
                      })
                    )
                  )
                )
              )
          );
        });
      t.default = F;
    },
  },
]);
//# sourceMappingURL=43.chunk.js.map
