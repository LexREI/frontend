(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    1373: function (t, e, n) {
      'use strict';
      var o = n(0),
        r = n.n(o).a.createContext();
      e.a = r;
    },
    1382: function (t, e, n) {
      'use strict';
      n(24), n(7), n(25), n(311), n(366), n(1406);
      e.a = function (t, e) {
        var n = {},
          o = t.getContents().ops,
          r = 0;
        o.forEach(function (t) {
          var e = t.attributes,
            o = t.insert,
            i = {};
          (null == e ? void 0 : e.bold) && (i['font-weight'] = 'bold'),
            (null == e ? void 0 : e.italic) && (i['font-style'] = 'italic'),
            (null == e ? void 0 : e.color) && (i.color = e.color),
            (null == e ? void 0 : e.underline) &&
              (i['text-decoration'] = 'word'),
            (null == e ? void 0 : e.strike) &&
              (i['text-decoration']
                ? (i['text-decoration'] = ''.concat(
                    i['text-decoration'],
                    ' line-through'
                  ))
                : (i['text-decoration'] = 'line-through')),
            (n[r] = i),
            (r += o.length);
        }),
          e.setRichTextStyle(n);
      };
    },
    1383: function (t, e, n) {
      'use strict';
      n(146),
        n(84),
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
        n(73);
      var o = n(0),
        r = n.n(o),
        i = n(4),
        a = n.n(i),
        l = n(6),
        c = n(143),
        s = n.n(c),
        u = n(1373),
        p = n(3),
        d =
          (n(32),
          n(98),
          n(39),
          n(46),
          n(53),
          n(44),
          n(95),
          n(41),
          n(51),
          n(67),
          n(68),
          n(69),
          n(70),
          n(66),
          n(1456)),
        f = n.n(d),
        h = (n(1462), n(365)),
        m = n(21),
        b = n(362),
        y = n(5),
        g = n(23);
      n(1408), n(1410);
      function v(t, e) {
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
      function w(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? v(Object(n), !0).forEach(function (e) {
                I(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : v(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
        }
        return t;
      }
      function x(t) {
        return (x =
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
      function q(t, e) {
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return k(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
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
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      function E() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ E =
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
          r = 'function' == typeof Symbol ? Symbol : {},
          i = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          l = r.toStringTag || '@@toStringTag';
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
        function s(t, e, n, r) {
          var i = e && e.prototype instanceof d ? e : d,
            a = Object.create(i.prototype),
            l = new A(r || []);
          return o(a, '_invoke', { value: q(t, n, l) }), a;
        }
        function u(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = s;
        var p = {};
        function d() {}
        function f() {}
        function h() {}
        var m = {};
        c(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          y = b && b(b(N([])));
        y && y !== e && n.call(y, i) && (m = y);
        var g = (h.prototype = d.prototype = Object.create(m));
        function v(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var r;
          o(this, '_invoke', {
            value: function (o, i) {
              function a() {
                return new e(function (r, a) {
                  !(function o(r, i, a, l) {
                    var c = u(t[r], t, i);
                    if ('throw' !== c.type) {
                      var s = c.arg,
                        p = s.value;
                      return p && 'object' == x(p) && n.call(p, '__await')
                        ? e.resolve(p.__await).then(
                            function (t) {
                              o('next', t, a, l);
                            },
                            function (t) {
                              o('throw', t, a, l);
                            }
                          )
                        : e.resolve(p).then(
                            function (t) {
                              (s.value = t), a(s);
                            },
                            function (t) {
                              return o('throw', t, a, l);
                            }
                          );
                    }
                    l(c.arg);
                  })(o, i, r, a);
                });
              }
              return (r = r ? r.then(a, a) : a());
            },
          });
        }
        function q(t, e, n) {
          var o = 'suspendedStart';
          return function (r, i) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === r) throw i;
              return S();
            }
            for (n.method = r, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = k(a, n);
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
              var c = u(t, e, n);
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
        function k(t, e) {
          var n = e.method,
            o = t.iterator[n];
          if (void 0 === o)
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
              p
            );
          var r = u(o, t.iterator, e.arg);
          if ('throw' === r.type)
            return (
              (e.method = 'throw'), (e.arg = r.arg), (e.delegate = null), p
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                p)
              : i
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
        function j(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(O, this),
            this.reset(!0);
        }
        function N(t) {
          if (t) {
            var e = t[i];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                r = function e() {
                  for (; ++o < t.length; )
                    if (n.call(t, o)) return (e.value = t[o]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (r.next = r);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          o(g, 'constructor', { value: h, configurable: !0 }),
          o(h, 'constructor', { value: f, configurable: !0 }),
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
          v(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, n, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new w(s(e, n, o, r), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          v(g),
          c(g, l, 'Generator'),
          c(g, i, function () {
            return this;
          }),
          c(g, 'toString', function () {
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
          (t.values = N),
          (A.prototype = {
            constructor: A,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
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
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  a = i.completion;
                if ('root' === i.tryLoc) return o('end');
                if (i.tryLoc <= this.prev) {
                  var l = n.call(i, 'catchLoc'),
                    c = n.call(i, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var r = this.tryEntries[o];
                if (
                  r.tryLoc <= this.prev &&
                  n.call(r, 'finallyLoc') &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
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
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), p)
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
                  return this.complete(n.completion, n.afterLoc), j(n), p;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    j(n);
                  }
                  return r;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: N(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      function O(t, e, n, o, r, i, a) {
        try {
          var l = t[i](a),
            c = l.value;
        } catch (t) {
          return void n(t);
        }
        l.done ? e(c) : Promise.resolve(c).then(o, r);
      }
      function j(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, L(o.key), o);
        }
      }
      function A(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      function N(t, e) {
        return (N = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function S(t) {
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
            o = P(t);
          if (e) {
            var r = P(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return C(this, n);
        };
      }
      function C(t, e) {
        if (e && ('object' === x(e) || 'function' == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        })(t);
      }
      function P(t) {
        return (P = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function I(t, e, n) {
        return (
          (e = L(e)) in t
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
      function L(t) {
        var e = (function (t, e) {
          if ('object' !== x(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(t, e || 'default');
            if ('object' !== x(o)) return o;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(t, 'string');
        return 'symbol' === x(e) ? e : String(e);
      }
      var T = [],
        _ = [
          'background',
          'bold',
          'color',
          'font',
          'code',
          'italic',
          'link',
          'size',
          'strike',
          'script',
          'underline',
          'blockquote',
          'header',
          'indent',
          'list',
          'align',
          'direction',
          'code-block',
          'formula',
          'mention',
        ],
        M = d.Quill.import('modules/keyboard'),
        R = (function (t) {
          !(function (t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && N(t, e);
          })(i, t);
          var e,
            n,
            o,
            r = S(i);
          function i() {
            return A(this, i), r.apply(this, arguments);
          }
          return (
            (e = i),
            n && j(e.prototype, n),
            o && j(e, o),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            e
          );
        })(M);
      I(
        R,
        'DEFAULTS',
        w(
          w({}, M.DEFAULTS),
          {},
          {
            bindings: w(
              w({}, M.DEFAULTS.bindings),
              {},
              { 'list autofill': void 0 }
            ),
          }
        )
      ),
        d.Quill.register('modules/keyboard', R, !0);
      var D = {
          mention: {
            allowedChars: /^[A-Za-z\sÅÄÖåäö0-9\-_]*$/,
            mentionDenotationChars: ['@', '#'],
            mentionContainerClass: 'mention__element',
            mentionListClass: 'mention__suggestions__list',
            listItemClass: 'mention__suggestions__item',
            renderItem: function (t) {
              return t.email
                ? '<div> '
                    .concat(t.value, ' <p class="email"> ')
                    .concat(t.email, ' </p> </div>')
                : '<div> '.concat(t.value, ' </div>');
            },
            source: function (t, e) {
              return ((n = E().mark(function n() {
                var o, r;
                return E().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (o = h.a.getMentionLookupCallback()),
                          (n.next = 3),
                          o(T, t)
                        );
                      case 3:
                        (r = n.sent), e(r, t);
                      case 5:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              })),
              function () {
                var t = this,
                  e = arguments;
                return new Promise(function (o, r) {
                  var i = n.apply(t, e);
                  function a(t) {
                    O(i, o, r, a, l, 'next', t);
                  }
                  function l(t) {
                    O(i, o, r, a, l, 'throw', t);
                  }
                  a(void 0);
                });
              })();
              var n;
            },
          },
        },
        z = r.a.forwardRef(function (t, e) {
          var n = t.value,
            o = void 0 === n ? '' : n,
            i = t.onChange,
            a = t.onKeyDown,
            c = t.onBlur,
            s = t.onFocus,
            u = t.userData,
            d = t.isReply,
            h = q(Object(b.a)(), 1)[0],
            v = Object(l.e)(function (t) {
              return p.a.isElementDisabled(
                t,
                y.a.NotesPanel.ADD_REPLY_ATTACHMENT_BUTTON
              );
            });
          T = u;
          if (o) {
            var w = o.split('\n');
            w.length &&
              '' === w[w.length - 1] &&
              (w.pop(),
              (o = w
                .map(function (t) {
                  return '<p>'.concat(t || '<br>', '</p>');
                })
                .join('')));
          }
          return r.a.createElement(
            'div',
            {
              className: 'comment-textarea',
              onBlur: c,
              onFocus: s,
              onClick: function (t) {
                t.preventDefault(), t.stopPropagation();
              },
              onScroll: function (t) {
                t.preventDefault(), t.stopPropagation();
              },
            },
            r.a.createElement(f.a, {
              className: 'comment-textarea ql-container ql-editor',
              style: { overflowY: 'visible' },
              ref: e,
              modules: u && u.length > 0 ? D : {},
              theme: 'snow',
              value: o,
              placeholder: ''.concat(
                h(d ? 'action.reply' : 'action.comment'),
                '...'
              ),
              'aria-label': ''.concat(
                h(d ? 'action.reply' : 'action.comment'),
                '...'
              ),
              onChange: i,
              onKeyDown: a,
              formats: _,
            }),
            d &&
              !v &&
              r.a.createElement(m.a, {
                className: 'add-attachment',
                dataElement: y.a.NotesPanel.ADD_REPLY_ATTACHMENT_BUTTON,
                img: 'ic_fileattachment_24px',
                onClick: function () {
                  var t;
                  null ===
                    (t = Object(g.a)().querySelector(
                      '#reply-attachment-picker'
                    )) ||
                    void 0 === t ||
                    t.click();
                },
              })
          );
        });
      z.displayName = 'CommentTextarea';
      var F = z;
      function H(t) {
        return (H =
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
      function G(t, e) {
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
      function U(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? G(Object(n), !0).forEach(function (e) {
                B(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : G(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
        }
        return t;
      }
      function B(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' !== H(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(t, e || 'default');
                if ('object' !== H(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' === H(e) ? e : String(e);
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
      function Y(t, e) {
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return W(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return W(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function W(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var V = {
          value: a.a.string,
          placeholder: a.a.string,
          onChange: a.a.func.isRequired,
          onBlur: a.a.func,
          onFocus: a.a.func,
          onSubmit: a.a.func,
        },
        $ = r.a.forwardRef(function (t, e) {
          var n = Y(
              Object(l.e)(function (t) {
                return [
                  p.a.getUserData(t),
                  p.a.isNoteSubmissionWithEnterEnabled(t),
                  p.a.getAutoFocusNoteOnAnnotationSelection(t),
                  p.a.getIsNoteEditing(t),
                ];
              }, l.c),
              4
            ),
            i = n[0],
            a = n[1],
            c = n[2],
            d = n[3],
            f = Object(o.useContext)(u.a),
            m = f.resize,
            b = f.isContentEditable,
            y = f.isSelected,
            g = Object(o.useRef)(),
            v = Object(o.useRef)();
          Object(o.useLayoutEffect)(
            function () {
              var t,
                e,
                n =
                  null === (t = g.current) ||
                  void 0 === t ||
                  null === (e = t.editor) ||
                  void 0 === e
                    ? void 0
                    : e.container.firstElementChild,
                o = (null == n ? void 0 : n.getBoundingClientRect()) || {};
              v.current && v.current !== o.height && m(),
                (v.current = o.height);
            },
            [t.value, m]
          ),
            Object(o.useEffect)(function () {
              d && y && b && c && g && g.current && g.current.focus();
            });
          var w = U(
            U({}, t),
            {},
            {
              ref: function (t) {
                (g.current = t), e(t);
              },
              onChange: s()(function (e, n, o, r) {
                if (g.current) {
                  var i = '';
                  if (
                    ((r && '' === r.getText().trim() && '<p><br></p>' === e) ||
                      (i = e.target ? e.target.value : e),
                    t.onChange(i),
                    h.a.doesDeltaContainMention(n.ops))
                  ) {
                    var a,
                      l = h.a.getFormattedTextFromDeltas(n.ops),
                      c = h.a.extractMentionDataFromStr(l),
                      s = r.getText().length + c.plainTextValue.length,
                      u =
                        null === (a = g.current) || void 0 === a
                          ? void 0
                          : a.editor;
                    setTimeout(function () {
                      return null == u ? void 0 : u.setSelection(s, s);
                    }, 1);
                  }
                }
              }, 100),
              onKeyDown: function (e) {
                if (13 === e.which) {
                  var n = a,
                    o = e.metaKey || e.ctrlKey;
                  (n || o) && t.onSubmit(e);
                }
              },
              userData: i,
            }
          );
          return r.a.createElement(r.a.Fragment, null, r.a.createElement(F, w));
        });
      ($.displayName = 'NoteTextarea'), ($.propTypes = V);
      var K = $;
      e.a = K;
    },
    1385: function (t, e, n) {
      var o = n(27),
        r = n(1414);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, '']]);
      var i = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const n = [];
            for (let o = 0; o < e.length; o++) {
              const r = e[o];
              if (0 === o)
                r.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    n.length > 0 &&
                      n.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                r.shadowRoot.appendChild(e), n.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      o(r, i);
      t.exports = r.locals || {};
    },
    1394: function (t, e, n) {
      'use strict';
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
        n(17);
      var o = n(0),
        r = n.n(o),
        i = n(362),
        a = n(147),
        l = n(57),
        c = n(1387),
        s = n(33),
        u = n(223),
        p = n(4),
        d = n.n(p),
        f = n(23);
      n(1385);
      function h(t, e) {
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return m(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return m(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function m(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var b = {
          style: d.a.object,
          triggerElementName: d.a.string.isRequired,
          onClose: d.a.func,
          handleStateChange: d.a.func,
        },
        y = function (t) {
          var e = t.style,
            n = t.triggerElementName,
            p = t.onClose,
            d = void 0 === p ? function () {} : p,
            m = t.handleStateChange,
            b = void 0 === m ? function () {} : m,
            y = h(Object(i.a)(), 1)[0],
            g = h(
              Object(o.useState)({ left: 'auto', right: 'auto', top: 'auto' }),
              2
            ),
            v = g[0],
            w = g[1],
            x = Object(o.useRef)();
          Object(a.a)(x, function (t) {
            Object(f.a)()
              .querySelector('[data-element='.concat(n, ']'))
              .contains(t.target) || d();
          });
          var q = function (t) {
            return function () {
              b(t);
            };
          };
          return (
            Object(o.useEffect)(function () {
              var t = Object(u.a)(n, x);
              w(t);
            }, []),
            r.a.createElement(
              c.a,
              { id: 'note-state-popup-portal', position: v },
              r.a.createElement(
                'div',
                { style: e, className: 'note-state-options', ref: x },
                r.a.createElement(
                  l.a,
                  { dataElement: 'notePopupState' },
                  r.a.createElement(
                    l.a,
                    {
                      dataElement: 'notePopupStateAccepted',
                      className: 'note-state-option',
                      onClick: q('Accepted'),
                    },
                    r.a.createElement(s.a, {
                      glyph: 'icon-annotation-status-accepted',
                    }),
                    y('option.state.accepted')
                  ),
                  r.a.createElement(
                    l.a,
                    {
                      dataElement: 'notePopupStateRejected',
                      className: 'note-state-option',
                      onClick: q('Rejected'),
                    },
                    r.a.createElement(s.a, {
                      glyph: 'icon-annotation-status-rejected',
                    }),
                    y('option.state.rejected')
                  ),
                  r.a.createElement(
                    l.a,
                    {
                      dataElement: 'notePopupStateCancelled',
                      className: 'note-state-option',
                      onClick: q('Cancelled'),
                    },
                    r.a.createElement(s.a, {
                      glyph: 'icon-annotation-status-cancelled',
                    }),
                    y('option.state.cancelled')
                  ),
                  r.a.createElement(
                    l.a,
                    {
                      dataElement: 'notePopupStateCompleted',
                      className: 'note-state-option',
                      onClick: q('Completed'),
                    },
                    r.a.createElement(s.a, {
                      glyph: 'icon-annotation-status-completed',
                    }),
                    y('option.state.completed')
                  ),
                  r.a.createElement(
                    l.a,
                    {
                      dataElement: 'notePopupStateNone',
                      className: 'note-state-option',
                      onClick: q('None'),
                    },
                    r.a.createElement(s.a, {
                      glyph: 'icon-annotation-status-none',
                    }),
                    y('option.state.none')
                  ),
                  r.a.createElement(
                    l.a,
                    {
                      dataElement: 'notePopupStateMarked',
                      className: 'note-state-option',
                      onClick: q('Marked'),
                    },
                    r.a.createElement(s.a, {
                      glyph: 'icon-annotation-status-marked',
                    }),
                    y('option.state.marked')
                  ),
                  r.a.createElement(
                    l.a,
                    {
                      dataElement: 'notePopupStateUnmarked',
                      className: 'note-state-option',
                      onClick: q('Unmarked'),
                    },
                    r.a.createElement(s.a, {
                      glyph: 'icon-annotation-status-unmarked',
                    }),
                    y('option.state.unmarked')
                  )
                )
              )
            )
          );
        };
      (y.propTypes = b), (e.a = y);
    },
    1395: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      n(32);
      var o = n(42),
        r = n(1);
      function i(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          i = new window.Core.Annotations.StickyAnnotation();
        (i.InReplyTo = t.Id),
          (i.X = t.X),
          (i.Y = t.Y),
          (i.PageNumber = t.PageNumber),
          (i.Subject = 'Sticky Note'),
          (i.Author = r.a.getCurrentUser()),
          (i.State = e),
          (i.StateModel =
            'Marked' === e || 'Unmarked' === e ? 'Marked' : 'Review'),
          (i.Hidden = !0);
        var a = r.a.getDisplayAuthor(i.Author, n),
          l = o.a.t('option.state.'.concat(e.toLowerCase())),
          c = ''
            .concat(l, ' ')
            .concat(o.a.t('option.state.setBy'), ' ')
            .concat(a);
        return i.setContents(c), i;
      }
    },
    1408: function (t, e, n) {
      var o = n(27),
        r = n(1409);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, '']]);
      var i = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const n = [];
            for (let o = 0; o < e.length; o++) {
              const r = e[o];
              if (0 === o)
                r.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    n.length > 0 &&
                      n.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                r.shadowRoot.appendChild(e), n.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      o(r, i);
      t.exports = r.locals || {};
    },
    1409: function (t, e, n) {
      (t.exports = n(28)(!1)).push([
        t.i,
        '.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-container .ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;-o-tab-size:4;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor p{margin-top:0;margin-bottom:0}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li:before{content:"\\2022"}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li:before,.ql-editor ul[data-checked=true]>li:before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li:before{content:"\\2611"}.ql-editor ul[data-checked=false]>li:before{content:"\\2610"}.ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) ". "}.ql-editor ol li.ql-indent-1{counter-increment:list-1}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) ". "}.ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2{counter-increment:list-2}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) ". "}.ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3{counter-increment:list-3}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) ". "}.ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4{counter-increment:list-4}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) ". "}.ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5{counter-increment:list-5}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) ". "}.ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-6{counter-increment:list-6}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) ". "}.ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-7{counter-increment:list-7}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) ". "}.ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-8{counter-increment:list-8}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) ". "}.ql-editor ol li.ql-indent-8{counter-reset:list-9}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) ". "}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank:before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow.ql-toolbar:after,.ql-snow .ql-toolbar:after{clear:both;content:"";display:table}.ql-snow.ql-toolbar button,.ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow.ql-toolbar button svg,.ql-snow .ql-toolbar button svg{float:left;height:100%}.ql-snow.ql-toolbar button:active:hover,.ql-snow .ql-toolbar button:active:hover{outline:none}.ql-snow.ql-toolbar input.ql-image[type=file],.ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow .ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow .ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover,.ql-snow .ql-toolbar button:hover{color:#06c}.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media(pointer:coarse){.ql-snow.ql-toolbar button:hover:not(.ql-active),.ql-snow .ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow,.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:"";display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor code,.ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=""]):before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item:before,.ql-snow .ql-picker.ql-header .ql-picker-label:before{content:"Normal"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]:before{content:"Heading 1"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]:before{content:"Heading 2"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]:before{content:"Heading 3"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]:before{content:"Heading 4"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]:before{content:"Heading 5"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]:before{content:"Heading 6"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item:before,.ql-snow .ql-picker.ql-font .ql-picker-label:before{content:"Sans Serif"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before{content:"Serif"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before{content:"Monospace"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item:before,.ql-snow .ql-picker.ql-size .ql-picker-label:before{content:"Normal"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before{content:"Small"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before{content:"Large"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before{content:"Huge"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2)}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label,.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip:before{content:"Visit URL:";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #ccc;content:"Edit";margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove:before{content:"Remove";margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0;content:"Save";padding-right:0}.ql-snow .ql-tooltip[data-mode=link]:before{content:"Enter link:"}.ql-snow .ql-tooltip[data-mode=formula]:before{content:"Enter formula:"}.ql-snow .ql-tooltip[data-mode=video]:before{content:"Enter video:"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}',
        '',
      ]);
    },
    1410: function (t, e, n) {
      var o = n(27),
        r = n(1411);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, '']]);
      var i = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const n = [];
            for (let o = 0; o < e.length; o++) {
              const r = e[o];
              if (0 === o)
                r.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    n.length > 0 &&
                      n.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                r.shadowRoot.appendChild(e), n.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      o(r, i);
      t.exports = r.locals || {};
    },
    1411: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.comment-textarea{position:relative}.comment-textarea .ql-toolbar{display:none}.comment-textarea .ql-container{border:none}.comment-textarea .ql-container .ql-editor{width:100%;padding:4px 6px;border:1px solid var(--border);border-radius:4px;color:var(--text-color);resize:none;overflow:hidden;box-sizing:border-box}.comment-textarea .ql-container .ql-editor:focus{outline:none;border:1px solid var(--focus-border)}.comment-textarea .ql-container .ql-editor.ql-blank:before{left:8px;list-style-type:none;font-style:normal;color:var(--placeholder-text)}.comment-textarea .ql-container .ql-editor p{margin:0;word-break:break-word}.comment-textarea .ql-container .ql-editor ul>li:before{content:none!important}.comment-textarea .ql-container.ql-snow{border:none}.comment-textarea .add-attachment{position:absolute;bottom:2px;right:2px;width:24px;height:24px}.comment-textarea .add-attachment:hover{background-color:var(--blue-1)}.comment-textarea .add-attachment .Icon{padding:3px}.ql-editor ul>li:before{content:none!important}.mention__element{width:170px;z-index:9001!important;max-height:200px;overflow-y:auto;overflow-y:overlay;overflow-x:hidden;background-color:var(--component-background);border:1px solid var(--border);border-radius:4px}.mention__suggestions__list{width:100%;font-size:14px;margin-top:0;padding-left:0!important;list-style:none;word-wrap:break-word;border-radius:4px}.mention__suggestions__item{background-color:var(--component-background);white-space:nowrap;padding-left:0;text-overflow:clip;padding:7px 5px 1px!important;margin:0;width:100%;cursor:pointer}.mention__suggestions__item .email{margin-top:2px;font-size:12px;white-space:normal;color:var(--faded-text)}.mention__suggestions__item.selected{background-color:var(--view-header-button-active)!important}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1412: function (t, e, n) {
      var o = n(27),
        r = n(1413);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, '']]);
      var i = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const n = [];
            for (let o = 0; o < e.length; o++) {
              const r = e[o];
              if (0 === o)
                r.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    n.length > 0 &&
                      n.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                r.shadowRoot.appendChild(e), n.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      o(r, i);
      t.exports = r.locals || {};
    },
    1413: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.NotePopup{flex-grow:0;justify-content:flex-end;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}.NotePopup,.NotePopup .overflow{display:flex;width:28px;height:28px}.NotePopup .overflow{border-radius:4px;justify-content:center;align-items:center}.NotePopup .overflow .Icon{width:24px;height:24px}.NotePopup .overflow:hover{background:var(--blue-1)}.NotePopup .overflow.active{background:var(--popup-button-active)}.NotePopup .options{display:flex;flex-direction:column;box-shadow:0 0 3px 0 var(--box-shadow);z-index:80;position:absolute;border-radius:4px;background:var(--component-background);top:40px;width:-webkit-max-content;width:-moz-max-content;width:max-content}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.NotePopup .options{right:0}}.NotePopup .options .note-popup-option{padding:0;border:none;background-color:transparent;align-items:flex-start}:host(:not([data-tabbing=true])) .NotePopup .options .note-popup-option,html:not([data-tabbing=true]) .NotePopup .options .note-popup-option{outline:none}.NotePopup .options.options-reply{top:30px}.NotePopup .options .option{display:flex;flex-direction:column;justify-content:center;height:28px;padding-left:8px;padding-right:17px;border-radius:0}.NotePopup .options .option:hover{background-color:var(--popup-button-hover)}.NotePopup .options .option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.NotePopup .options .option:last-child{border-bottom-right-radius:4px}.NotePopup .Button.active{background:var(--popup-button-active)}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1414: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.multi-state-container{position:relative;bottom:52px;pointer-events:auto}.NoteState{border:none;background-color:transparent;flex-grow:0;display:flex;justify-content:flex-end;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 10px 0 15px}:host(:not([data-tabbing=true])) .NoteState,html:not([data-tabbing=true]) .NoteState{outline:none}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.NoteState{padding-left:0;padding-right:5px}}.NoteState .overflow{width:28px;height:28px;border-radius:4px}.NoteState .overflow .Icon{margin:4px;width:20px;height:20px}.NoteState .overflow:hover{background:var(--blue-1)}.NoteState .Button.active,.NoteState .overflow.active{background:var(--popup-button-active)}.note-state-options{padding:0;border:none;background-color:transparent;font-size:inherit;display:flex;flex-direction:column;box-shadow:0 0 3px 0 var(--box-shadow);z-index:80;border-radius:4px;background:var(--component-background);pointer-events:auto}:host(:not([data-tabbing=true])) .note-state-options,html:not([data-tabbing=true]) .note-state-options{outline:none}.note-state-options *{box-sizing:border-box}.note-state-options .note-state-option{display:flex;flex-direction:row;justify-content:flex-start;height:35px;padding:8px;border-radius:0}.note-state-options .note-state-option .Icon{margin-right:5px;width:18px;height:18px}.note-state-options .note-state-option:hover{background-color:var(--popup-button-hover)}.note-state-options .note-state-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.note-state-options .note-state-option:last-child{border-bottom-right-radius:4px}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1415: function (t, e, n) {
      var o = n(27),
        r = n(1416);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, '']]);
      var i = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const n = [];
            for (let o = 0; o < e.length; o++) {
              const r = e[o];
              if (0 === o)
                r.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    n.length > 0 &&
                      n.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                r.shadowRoot.appendChild(e), n.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      o(r, i);
      t.exports = r.locals || {};
    },
    1416: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.NoteHeader{padding-right:12px;position:relative;flex:1;color:var(--text-color);display:flex}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.NoteHeader{flex:none}}.NoteHeader .author-and-overflow{display:flex;justify-content:space-between}.NoteHeader .state-and-overflow{display:flex;flex:1;justify-content:flex-end}.NoteHeader .author-and-time{display:flex;flex-direction:column;word-break:break-word}.NoteHeader .author{font-weight:700}.NoteHeader .date-and-num-replies{display:flex}.NoteHeader .date-and-num-replies .num-replies-container{display:flex;flex-grow:1;padding-left:10px}.NoteHeader .date-and-num-replies .num-replies-container .num-reply-icon{height:12px;width:12px}.NoteHeader .date-and-num-replies .num-replies-container .num-replies{opacity:.8;font-size:10px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .NoteHeader .date-and-num-replies .num-replies-container .num-replies{font-size:12px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .NoteHeader .date-and-num-replies .num-replies-container .num-replies{font-size:12px}}.NoteHeader .author-and-date{flex:1;min-width:0;position:relative}.NoteHeader .unread-notification{position:absolute;width:13px;height:13px;right:-2px;top:-2px;border-radius:10000px;border:2px solid var(--component-background);background:#00a5e4}.NoteHeader .type-icon-container{padding-right:13px}.NoteHeader .type-icon{margin:2px;width:24px;height:24px}.NoteHeader .date-and-time{opacity:.8;font-size:10px;color:var(--faded-text)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .NoteHeader .date-and-time{font-size:12px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .NoteHeader .date-and-time{font-size:12px}}.NoteHeader .author-name{font-weight:700}.NoteHeader .isReply{padding-left:0;padding-top:0;font-size:10px}.parent{padding-left:12px;padding-top:12px}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1417: function (t, e, n) {
      var o = n(27),
        r = n(1418);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, '']]);
      var i = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const n = [];
            for (let o = 0; o < e.length; o++) {
              const r = e[o];
              if (0 === o)
                r.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    n.length > 0 &&
                      n.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                r.shadowRoot.appendChild(e), n.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      o(r, i);
      t.exports = r.locals || {};
    },
    1418: function (t, e, n) {
      (t.exports = n(28)(!1)).push([
        t.i,
        '.reply-attachment-list{display:flex;flex-direction:column;cursor:default}.reply-attachment-list .reply-attachment{display:flex;flex-direction:column;background-color:var(--gray-1);border-radius:4px;cursor:pointer;overflow:hidden}.reply-attachment-list .reply-attachment:not(:last-child){margin-bottom:8px}.reply-attachment-list .reply-attachment .reply-attachment-preview{width:100%;max-height:80px;display:flex;justify-content:center}.reply-attachment-list .reply-attachment .reply-attachment-preview.dirty{position:relative;margin-bottom:15px}.reply-attachment-list .reply-attachment .reply-attachment-preview img{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.reply-attachment-list .reply-attachment .reply-attachment-preview .reply-attachment-preview-message{font-size:11px;color:var(--error-text-color);position:absolute;bottom:-15px;left:10px}.reply-attachment-list .reply-attachment .reply-attachment-info{display:flex;align-items:center;height:40px;padding:8px}.reply-attachment-list .reply-attachment .reply-attachment-info .reply-attachment-icon{height:24px;min-height:24px;width:24px;min-width:24px}.reply-attachment-list .reply-attachment .reply-attachment-info .reply-file-name{height:16px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-left:8px;margin-right:8px}.reply-attachment-list .reply-attachment .reply-attachment-info .attachment-button{height:24px;min-height:24px;width:24px;min-width:24px}.reply-attachment-list .reply-attachment .reply-attachment-info .attachment-button:hover{background-color:var(--blue-1)}.reply-attachment-list .reply-attachment .reply-attachment-info .attachment-button .Icon{height:16px;width:16px}',
        '',
      ]);
    },
    1419: function (t, e, n) {
      var o = n(27),
        r = n(1420);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, '']]);
      var i = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const n = [];
            for (let o = 0; o < e.length; o++) {
              const r = e[o];
              if (0 === o)
                r.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    n.length > 0 &&
                      n.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                r.shadowRoot.appendChild(e), n.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      o(r, i);
      t.exports = r.locals || {};
    },
    1420: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.NoteContent{position:relative;display:flex;flex-direction:column;align-items:left;flex:1;color:var(--text-color);padding-bottom:12px}.NoteContent.isReply{padding-bottom:0}.NoteContent.unread.isReply{background:rgba(0,165,228,.08)}.NoteContent.unread.clicked .author-and-time span{font-weight:400}.NoteContent.unread .author-and-time span{font-weight:700}.NoteContent .container{padding-left:52px;padding-right:12px}.NoteContent .container,.NoteContent .container-reply{margin-top:8px;overflow:hidden;white-space:pre-wrap;word-wrap:break-word;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:text}.NoteContent .edit-content{margin-top:7px;display:flex;flex-direction:column;position:relative;flex:1;padding-left:52px;padding-right:12px;padding-bottom:12px}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.NoteContent .edit-content{flex:none}}.NoteContent .edit-content textarea{width:100%;padding-left:8px;border:1px solid var(--border);border-radius:4px;color:var(--text-color);padding-top:4px;padding-bottom:4px;resize:none;overflow:hidden;box-sizing:border-box}.NoteContent .edit-content textarea:focus{outline:none;border:1px solid var(--focus-border)}.NoteContent .edit-content textarea::-moz-placeholder{color:var(--placeholder-text)}.NoteContent .edit-content textarea:-ms-input-placeholder{color:var(--placeholder-text)}.NoteContent .edit-content textarea::placeholder{color:var(--placeholder-text)}.NoteContent .edit-content .edit-buttons{display:flex;flex-direction:row;justify-content:flex-end;margin-top:4px}.NoteContent .edit-content .edit-buttons>div{margin-right:4px}.NoteContent .edit-content .edit-buttons .save-button{border:none;background-color:transparent;cursor:pointer;flex-shrink:0;background:var(--primary-button);border-radius:4px;height:24px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);padding:0 13px}:host(:not([data-tabbing=true])) .NoteContent .edit-content .edit-buttons .save-button,html:not([data-tabbing=true]) .NoteContent .edit-content .edit-buttons .save-button{outline:none}.NoteContent .edit-content .edit-buttons .save-button:hover{background:var(--primary-button-hover);color:var(--primary-button-text)}.NoteContent .edit-content .edit-buttons .save-button.disabled{background:var(--gray-6);border-color:var(--gray-6);cursor:not-allowed}.NoteContent .edit-content .edit-buttons .cancel-button{border:none;background-color:transparent;color:var(--secondary-button-text);padding:0 10px;height:24px;display:flex;align-items:center;justify-content:center;cursor:pointer;margin-right:2px}:host(:not([data-tabbing=true])) .NoteContent .edit-content .edit-buttons .cancel-button,html:not([data-tabbing=true]) .NoteContent .edit-content .edit-buttons .cancel-button{outline:none}.NoteContent .edit-content .edit-buttons .cancel-button:hover{color:var(--secondary-button-hover)}.NoteContent .reply-content{padding-left:0}.NoteContent .contents{white-space:pre-wrap;color:var(--text-color);margin-right:5px;padding:0;word-break:normal;word-wrap:break-word;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.NoteContent .contents .highlight{background:#fffc95;color:#333}.NoteContent .highlight{background:#fffc95}.NoteContent .selected-text-preview{padding-left:52px;padding-top:8px}.NoteContent .reply-attachment-list{margin-bottom:8px}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1421: function (t, e, n) {
      var o = n(27),
        r = n(1422);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, '']]);
      var i = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const n = [];
            for (let o = 0; o < e.length; o++) {
              const r = e[o];
              if (0 === o)
                r.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    n.length > 0 &&
                      n.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                r.shadowRoot.appendChild(e), n.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      o(r, i);
      t.exports = r.locals || {};
    },
    1422: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.reply-area-container{border-top:1px solid var(--divider);display:flex;flex-direction:column}.reply-area-container .reply-attachment-list{margin:12px 12px 0}.reply-area-container .reply-area-with-button{display:flex}.reply-area-container .reply-area-with-button .reply-area{position:relative;flex:1;margin:12px 17px 12px 12px;border-radius:4px;align-items:center}.reply-area-container .reply-area-with-button .reply-area.unread{background:rgba(0,165,228,.08)}.reply-area-container .reply-area-with-button .reply-area .comment-textarea .ql-container .ql-editor.ql-blank{padding:4px}.reply-area-container .reply-area-with-button .reply-area .comment-textarea .ql-container .ql-editor.ql-blank:before{left:4px}.reply-area-container .reply-area-with-button .reply-button-container{display:flex;flex-direction:column;justify-content:flex-end}.reply-area-container .reply-area-with-button .reply-button-container .reply-button{width:28px;height:28px;padding:0;border:none;background-color:transparent;right:10px;bottom:12px}:host(:not([data-tabbing=true])) .reply-area-container .reply-area-with-button .reply-button-container .reply-button,html:not([data-tabbing=true]) .reply-area-container .reply-area-with-button .reply-button-container .reply-button{outline:none}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.reply-area-container .reply-area-with-button .reply-button-container .reply-button{width:80px}}.reply-area-container .reply-area-with-button .reply-button-container .reply-button:hover{background:var(--blue-1)}.reply-area-container .reply-area-with-button .reply-button-container .reply-button.disabled{cursor:not-allowed}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1423: function (t, e, n) {
      var o = n(27),
        r = n(1424);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, '']]);
      var i = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const n = [];
            for (let o = 0; o < e.length; o++) {
              const r = e[o];
              if (0 === o)
                r.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    n.length > 0 &&
                      n.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                r.shadowRoot.appendChild(e), n.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      o(r, i);
      t.exports = r.locals || {};
    },
    1424: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}@-webkit-keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@media print{#line-connector-root{opacity:0}}#line-connector-root{position:relative;z-index:69}.horizontalLine{height:2px}.horizontalLine,.verticalLine{background-color:rgba(30,120,235,.5);position:fixed}.verticalLine{width:2px}.arrowHead{position:absolute;top:0;left:0;margin:auto;width:0;height:0;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:7px solid rgba(30,120,235,.5);transform:translateX(-100%) translateY(-50%) translateY(1px)}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1425: function (t, e, n) {
      var o = n(27),
        r = n(1426);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, '']]);
      var i = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const n = [];
            for (let o = 0; o < e.length; o++) {
              const r = e[o];
              if (0 === o)
                r.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    n.length > 0 &&
                      n.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                r.shadowRoot.appendChild(e), n.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      o(r, i);
      t.exports = r.locals || {};
    },
    1426: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.Note{padding:0;border:none;background-color:transparent;display:block;text-align:left;border-radius:4px;box-shadow:0 0 3px 0 var(--note-box-shadow);margin-bottom:8px;margin-left:2px;background:var(--component-background);cursor:pointer}:host(:not([data-tabbing=true])) .Note,html:not([data-tabbing=true]) .Note{outline:none}.Note.unread{border:1.2px solid #00a5e4}.Note.expanded{box-shadow:0 4px 16px var(--note-box-shadow-expanded),0 0 4px 0 var(--note-box-shadow)}.Note.is-multi-selected{box-shadow:0 4px 16px rgba(134,142,150,.24),0 0 4px 0 var(--note-box-shadow)}.Note .mark-all-read-button{background:#00a5e4;text-align:center;color:#fff;height:16px;font-size:12px;width:100%;border-radius:0}.Note .divider{height:1px;width:100%;background:var(--divider)}.Note .reply-divider{background:var(--reply-divider);height:1px;width:100%}.Note .replies{margin-left:52px;padding-bottom:12px}.Note .reply{padding-left:12px;padding-bottom:24px;border-left:1px solid var(--reply-divider)}.Note .reply:last-of-type{padding-bottom:0}.Note .group-section{margin-left:52px;padding-bottom:12px;display:flex;flex-direction:column;grid-row-gap:4px;row-gap:4px;padding-right:12px}.Note .text-button{color:var(--secondary-button-text);display:flex}.Note .text-button .Icon{color:var(--secondary-button-text);height:18px;width:18px}.Note .group-child{padding-top:4px;padding-bottom:4px}.Note .group-child:hover{background:var(--view-header-button-hover)}.Note .group-child .NoteContent{padding-bottom:0}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1427: function (t, e, n) {
      'use strict';
      n(14),
        n(7),
        n(51),
        n(22),
        n(11),
        n(13),
        n(12),
        n(8),
        n(9),
        n(10),
        n(67),
        n(68),
        n(69),
        n(70),
        n(41),
        n(44),
        n(24),
        n(25),
        n(46),
        n(66),
        n(15);
      var o = n(0),
        r = n.n(o),
        i = n(6),
        a = n(3);
      function l(t) {
        return (l =
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
      function c() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ c =
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
          r = 'function' == typeof Symbol ? Symbol : {},
          i = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          s = r.toStringTag || '@@toStringTag';
        function u(t, e, n) {
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
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function p(t, e, n, r) {
          var i = e && e.prototype instanceof h ? e : h,
            a = Object.create(i.prototype),
            l = new A(r || []);
          return o(a, '_invoke', { value: k(t, n, l) }), a;
        }
        function d(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = p;
        var f = {};
        function h() {}
        function m() {}
        function b() {}
        var y = {};
        u(y, i, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          v = g && g(g(N([])));
        v && v !== e && n.call(v, i) && (y = v);
        var w = (b.prototype = h.prototype = Object.create(y));
        function x(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function q(t, e) {
          var r;
          o(this, '_invoke', {
            value: function (o, i) {
              function a() {
                return new e(function (r, a) {
                  !(function o(r, i, a, c) {
                    var s = d(t[r], t, i);
                    if ('throw' !== s.type) {
                      var u = s.arg,
                        p = u.value;
                      return p && 'object' == l(p) && n.call(p, '__await')
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
                    c(s.arg);
                  })(o, i, r, a);
                });
              }
              return (r = r ? r.then(a, a) : a());
            },
          });
        }
        function k(t, e, n) {
          var o = 'suspendedStart';
          return function (r, i) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === r) throw i;
              return S();
            }
            for (n.method = r, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = E(a, n);
                if (l) {
                  if (l === f) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === o) throw ((o = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = 'executing';
              var c = d(t, e, n);
              if ('normal' === c.type) {
                if (
                  ((o = n.done ? 'completed' : 'suspendedYield'), c.arg === f)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              'throw' === c.type &&
                ((o = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
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
              f
            );
          var r = d(o, t.iterator, e.arg);
          if ('throw' === r.type)
            return (
              (e.method = 'throw'), (e.arg = r.arg), (e.delegate = null), f
            );
          var i = r.arg;
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
        function O(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function j(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(O, this),
            this.reset(!0);
        }
        function N(t) {
          if (t) {
            var e = t[i];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                r = function e() {
                  for (; ++o < t.length; )
                    if (n.call(t, o)) return (e.value = t[o]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (r.next = r);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (m.prototype = b),
          o(w, 'constructor', { value: b, configurable: !0 }),
          o(b, 'constructor', { value: m, configurable: !0 }),
          (m.displayName = u(b, s, 'GeneratorFunction')),
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
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), u(t, s, 'GeneratorFunction')),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(q.prototype),
          u(q.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = q),
          (t.async = function (e, n, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new q(p(e, n, o, r), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(w),
          u(w, s, 'Generator'),
          u(w, i, function () {
            return this;
          }),
          u(w, 'toString', function () {
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
          (t.values = N),
          (A.prototype = {
            constructor: A,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
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
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  a = i.completion;
                if ('root' === i.tryLoc) return o('end');
                if (i.tryLoc <= this.prev) {
                  var l = n.call(i, 'catchLoc'),
                    c = n.call(i, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var r = this.tryEntries[o];
                if (
                  r.tryLoc <= this.prev &&
                  n.call(r, 'finallyLoc') &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
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
                  return this.complete(n.completion, n.afterLoc), j(n), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    j(n);
                  }
                  return r;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: N(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      function s(t, e, n, o, r, i, a) {
        try {
          var l = t[i](a),
            c = l.value;
        } catch (t) {
          return void n(t);
        }
        l.done ? e(c) : Promise.resolve(c).then(o, r);
      }
      e.a = function (t) {
        var e = t.annotationId,
          n = t.addAttachments,
          o = Object(i.e)(function (t) {
            return a.a.getReplyAttachmentHandler(t);
          }),
          l = (function () {
            var t,
              r =
                ((t = c().mark(function t(r) {
                  var i, a, l;
                  return c().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!(i = r.target.files[0])) {
                            t.next = 9;
                            break;
                          }
                          if (((a = i), !o)) {
                            t.next = 8;
                            break;
                          }
                          return (t.next = 6), o(i);
                        case 6:
                          (l = t.sent),
                            (a = {
                              url: l,
                              name: i.name,
                              size: i.size,
                              type: i.type,
                            });
                        case 8:
                          n(e, [a]);
                        case 9:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })),
                function () {
                  var e = this,
                    n = arguments;
                  return new Promise(function (o, r) {
                    var i = t.apply(e, n);
                    function a(t) {
                      s(i, o, r, a, l, 'next', t);
                    }
                    function l(t) {
                      s(i, o, r, a, l, 'throw', t);
                    }
                    a(void 0);
                  });
                });
            return function (t) {
              return r.apply(this, arguments);
            };
          })();
        return r.a.createElement('input', {
          id: 'reply-attachment-picker',
          type: 'file',
          style: { display: 'none' },
          onChange: l,
          onClick: function (t) {
            t.target.value = '';
          },
        });
      };
    },
    1435: function (t, e, n) {
      'use strict';
      n(8),
        n(7),
        n(221),
        n(9),
        n(10),
        n(132),
        n(24),
        n(25),
        n(34),
        n(84),
        n(117),
        n(133),
        n(39),
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
        n(75),
        n(73);
      var o = n(0),
        r = n.n(o),
        i = n(19),
        a = n.n(i),
        l = n(4),
        c = n.n(l),
        s = n(6),
        u = n(362),
        p = n(1373),
        d =
          (n(1455),
          n(104),
          n(127),
          n(52),
          n(64),
          n(121),
          n(82),
          n(146),
          n(546),
          n(51),
          n(67),
          n(68),
          n(69),
          n(70),
          n(41),
          n(44),
          n(46),
          n(66),
          n(1472)),
        f = n(111),
        h = n.n(f),
        m = n(432),
        b = n.n(m),
        y = n(337),
        g = n.n(y),
        v = n(1383),
        w = (n(32), n(65), n(53), n(1)),
        x = n(147),
        q = n(57),
        k = n(33);
      n(1412);
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return O(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return O(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function O(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var j = {
        handleEdit: c.a.func,
        handleDelete: c.a.func,
        closePopup: c.a.func,
        openPopup: c.a.func,
        isEditable: c.a.bool,
        isDeletable: c.a.bool,
        isOpen: c.a.bool,
      };
      function A() {}
      function N(t) {
        var e = t.handleEdit,
          n = void 0 === e ? A : e,
          o = t.handleDelete,
          i = void 0 === o ? A : o,
          l = t.closePopup,
          c = void 0 === l ? A : l,
          s = t.openPopup,
          p = void 0 === s ? A : s,
          d = t.isEditable,
          f = t.isDeletable,
          h = t.isOpen,
          m = t.isReply,
          b = E(Object(u.a)(), 1)[0],
          y = r.a.useRef();
        Object(x.a)(y, function () {
          c();
        });
        if (!d && !f) return null;
        var g = a()('overflow note-popup-toggle-trigger', { active: h }),
          v = a()('options note-popup-options', { 'options-reply': m });
        return r.a.createElement(
          q.a,
          { className: 'NotePopup', dataElement: 'notePopup', ref: y },
          r.a.createElement(
            'div',
            {
              className: g,
              onClick: function (t) {
                t.stopPropagation(), h ? c() : p();
              },
            },
            r.a.createElement(k.a, { glyph: 'icon-tools-more' })
          ),
          h &&
            r.a.createElement(
              'div',
              { className: v },
              d &&
                r.a.createElement(
                  q.a,
                  {
                    type: 'button',
                    className: 'option note-popup-option',
                    dataElement: 'notePopupEdit',
                    onClick: function (t) {
                      t.stopPropagation(), c(), n();
                    },
                  },
                  b('action.edit')
                ),
              f &&
                r.a.createElement(
                  q.a,
                  {
                    type: 'button',
                    className: 'option note-popup-option',
                    dataElement: 'notePopupDelete',
                    onClick: function () {
                      c(), i();
                    },
                  },
                  b('action.delete')
                )
            )
        );
      }
      N.propTypes = j;
      var S = N,
        C = n(153),
        P = n(3);
      function I() {
        return (I = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
              }
              return t;
            }).apply(this, arguments);
      }
      function L(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return M(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          _(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function T(t, e) {
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          _(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _(t, e) {
        if (t) {
          if ('string' == typeof t) return M(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? M(t, e)
                : void 0
          );
        }
      }
      function M(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var R = function (t) {
          var e = T(
              Object(s.e)(function (t) {
                return [P.a.getActiveDocumentViewerKey(t)];
              }),
              1
            )[0],
            n = t.annotation,
            o = t.setIsEditing,
            i = t.noteIndex,
            a = T(r.a.useState(w.a.canModify(n)), 2),
            l = a[0],
            c = a[1],
            p = T(r.a.useState(w.a.canModifyContents(n)), 2),
            d = p[0],
            f = p[1],
            h = T(r.a.useState(!1), 2),
            m = h[0],
            b = h[1],
            y = T(Object(u.a)(), 1)[0];
          r.a.useEffect(
            function () {
              function t() {
                c(w.a.canModify(n, e)), f(w.a.canModifyContents(n, e));
              }
              return (
                t(),
                w.a.addEventListener(
                  'updateAnnotationPermission',
                  t,
                  void 0,
                  e
                ),
                function () {
                  return w.a.removeEventListener(
                    'updateAnnotationPermission',
                    t,
                    e
                  );
                }
              );
            },
            [n, e]
          );
          var g = {
            handleEdit: r.a.useCallback(
              function () {
                n instanceof window.Core.Annotations.FreeTextAnnotation &&
                w.a.getAnnotationManager(e).isFreeTextEditingEnabled()
                  ? w.a
                      .getAnnotationManager(e)
                      .trigger('annotationDoubleClicked', n)
                  : o(!0, i);
              },
              [n, o, i]
            ),
            handleDelete: r.a.useCallback(
              function () {
                w.a.deleteAnnotations(
                  [n].concat(L(n.getGroupedChildren())),
                  void 0,
                  e
                );
              },
              [n]
            ),
            isEditable: d,
            isDeletable: l && !(null != n && n.NoDelete),
            isOpen: m,
            closePopup: function () {
              return b(!1);
            },
            openPopup: function () {
              return b(!0);
            },
          };
          return r.a.createElement(
            C.a,
            { content: y('formField.formFieldPopup.options') },
            r.a.createElement('div', null, r.a.createElement(S, I({}, t, g)))
          );
        },
        D = n(1394);
      n(1385);
      function z(t, e) {
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return F(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return F(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function F(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var H = {
        annotation: c.a.object.isRequired,
        openOnInitialLoad: c.a.bool,
        handleStateChange: c.a.func,
      };
      function G(t) {
        var e = t.annotation,
          n = t.openOnInitialLoad,
          i = void 0 !== n && n,
          l = t.handleStateChange,
          c = void 0 === l ? function () {} : l,
          s = z(Object(u.a)(), 1)[0],
          p = z(Object(o.useState)(i), 2),
          d = p[0],
          f = p[1],
          h = Object(o.useRef)(),
          m = e.getStatus(),
          b = 'icon-annotation-status-'.concat(
            '' === m ? 'none' : m.toLowerCase()
          ),
          y = a()('overflow', { active: d }),
          g = 'noteState-'.concat(e.Id);
        return r.a.createElement(
          q.a,
          {
            className: 'NoteState',
            dataElement: g,
            onClick: function (t) {
              t.stopPropagation(), f(!d);
            },
            ref: h,
          },
          r.a.createElement(
            C.a,
            { content: s('option.notesOrder.status') },
            r.a.createElement(
              'div',
              { className: y },
              r.a.createElement(k.a, { glyph: b })
            )
          ),
          d &&
            r.a.createElement(D.a, {
              triggerElementName: g,
              handleStateChange: c,
              onClose: function () {
                f(!1);
              },
            })
        );
      }
      G.propTypes = H;
      var U = G,
        B = n(1395);
      function Y() {
        return (Y = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
              }
              return t;
            }).apply(this, arguments);
      }
      function W(t, e) {
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return V(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return V(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function V(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var $ = { annotation: c.a.object };
      function K(t) {
        var e = W(
            Object(s.e)(function (t) {
              return [P.a.getActiveDocumentViewerKey(t)];
            }),
            1
          )[0],
          n = t.annotation,
          o = r.a.useCallback(
            function (t) {
              var o = Object(B.a)(n, t, e);
              n.addReply(o);
              var r = w.a.getAnnotationManager(e);
              r.addAnnotation(o),
                r.trigger('addReply', [o, n, r.getRootAnnotation(n)]);
            },
            [n, e]
          );
        return r.a.createElement(
          'div',
          null,
          r.a.createElement(U, Y({ handleStateChange: o }, t))
        );
      }
      K.propTypes = $;
      var J = K;
      function Z(t, e) {
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return X(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return X(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function X(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var Q = function (t) {
          var e = t.annotationId,
            n = t.pendingEditTextMap,
            i = t.pendingReplyMap,
            a = t.pendingAttachmentMap,
            l = Object(u.a)().t,
            c = Z(Object(o.useState)(!1), 2),
            s = c[0],
            p = c[1],
            d = Z(Object(o.useState)(!1), 2),
            f = d[0],
            h = d[1],
            m = Z(Object(o.useState)(!1), 2),
            b = m[0],
            y = m[1];
          return (
            Object(o.useEffect)(
              function () {
                var t, o, r;
                p(
                  (null === (t = n[e]) || void 0 === t ? void 0 : t.length) > 0
                ),
                  h(
                    (null === (o = i[e]) || void 0 === o ? void 0 : o.length) >
                      0
                  ),
                  y(
                    (null === (r = a[e]) || void 0 === r ? void 0 : r.length) >
                      0
                  );
              },
              [n, i, a]
            ),
            s || f || b
              ? r.a.createElement(
                  'div',
                  { 'data-element': 'unpostedCommentIndicator' },
                  r.a.createElement(
                    C.a,
                    { content: l('message.unpostedComment') },
                    r.a.createElement(
                      'div',
                      null,
                      r.a.createElement(k.a, {
                        className: 'type-icon',
                        glyph: 'icon-unposted-comment',
                      })
                    )
                  )
                )
              : null
          );
        },
        tt = function (t) {
          var e = t.annotationId,
            n = Object(s.e)(function (t) {
              return P.a.isElementDisabled(t, 'unpostedCommentIndicator');
            }),
            o = r.a.useContext(p.a),
            i = o.pendingEditTextMap,
            a = o.pendingReplyMap,
            l = o.pendingAttachmentMap;
          return n
            ? null
            : r.a.createElement(Q, {
                annotationId: e,
                pendingEditTextMap: i,
                pendingReplyMap: a,
                pendingAttachmentMap: l,
              });
        },
        et = n(189),
        nt = n(237),
        ot = n(226),
        rt = n(166),
        it = n(205),
        at = n(162);
      n(1415);
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
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
      var st = {
        icon: c.a.string,
        iconColor: c.a.string,
        color: c.a.string,
        fillColor: c.a.string,
        annotation: c.a.object,
        language: c.a.string,
        noteDateFormat: c.a.string,
        isSelected: c.a.bool,
        setIsEditing: c.a.func,
        notesShowLastUpdatedDate: c.a.bool,
        isUnread: c.a.bool,
        renderAuthorName: c.a.func,
        isNoteStateDisabled: c.a.bool,
        isEditing: c.a.bool,
        noteIndex: c.a.number,
        sortStrategy: c.a.string,
        activeTheme: c.a.string,
        isMultiSelected: c.a.bool,
        isMultiSelectMode: c.a.bool,
        handleMultiSelect: c.a.func,
        isGroupMember: c.a.bool,
        showAnnotationNumbering: c.a.bool,
      };
      function ut(t) {
        var e,
          n,
          o,
          i = t.icon,
          l = t.iconColor,
          c = t.annotation,
          s = t.language,
          p = t.noteDateFormat,
          d = t.isSelected,
          f = t.setIsEditing,
          m = t.notesShowLastUpdatedDate,
          b = t.isReply,
          y = t.isUnread,
          g = t.renderAuthorName,
          v = t.isNoteStateDisabled,
          x = t.isEditing,
          q = t.noteIndex,
          E = t.sortStrategy,
          O = t.activeTheme,
          j = t.isMultiSelected,
          A = t.isMultiSelectMode,
          N = t.handleMultiSelect,
          S = t.isGroupMember,
          C = t.showAnnotationNumbering,
          P = t.timezone,
          I = lt(Object(u.a)(), 1)[0],
          L =
            E === rt.a.MODIFIED_DATE || (m && E !== rt.a.CREATED_DATE)
              ? Object(et.a)(c)
              : c.DateCreated;
        if (P && L) {
          var T = L.toLocaleString('en-US', { timeZone: P });
          o = new Date(T);
        } else o = L;
        var _ = c.getReplies().length,
          M =
            null === (e = c[l]) ||
            void 0 === e ||
            null === (n = e.toHexString) ||
            void 0 === n
              ? void 0
              : n.call(e);
        O === it.a.DARK && M && Object(ot.b)(M) && (M = '#FFFFFF');
        var D = Object(nt.a)(c.FillColor),
          z = c.getAssociatedNumber(),
          F = '#'.concat(z, ' - '),
          H = a()('author-and-date', { isReply: b }),
          G = a()('NoteHeader', { parent: !b && !S });
        return r.a.createElement(
          'div',
          { className: G },
          !b &&
            r.a.createElement(
              'div',
              { className: 'type-icon-container' },
              y &&
                r.a.createElement('div', { className: 'unread-notification' }),
              r.a.createElement(k.a, {
                className: 'type-icon',
                glyph: i,
                color: M,
                fillColor: D,
              })
            ),
          r.a.createElement(
            'div',
            { className: H },
            r.a.createElement(
              'div',
              { className: 'author-and-overflow' },
              r.a.createElement(
                'div',
                { className: 'author-and-time' },
                r.a.createElement(
                  'div',
                  { className: 'author' },
                  C &&
                    void 0 !== z &&
                    r.a.createElement(
                      'span',
                      { className: 'annotation-number' },
                      F
                    ),
                  g(c)
                ),
                r.a.createElement(
                  'div',
                  { className: 'date-and-num-replies' },
                  r.a.createElement(
                    'div',
                    { className: 'date-and-time' },
                    o
                      ? h()(o).locale(s).format(p)
                      : I('option.notesPanel.noteContent.noDate'),
                    S && ' (Page '.concat(c.PageNumber, ')')
                  ),
                  _ > 0 &&
                    !d &&
                    r.a.createElement(
                      'div',
                      { className: 'num-replies-container' },
                      r.a.createElement(k.a, {
                        className: 'num-reply-icon',
                        glyph: 'icon-chat-bubble',
                      }),
                      r.a.createElement('div', { className: 'num-replies' }, _)
                    )
                )
              ),
              r.a.createElement(
                'div',
                { className: 'state-and-overflow' },
                A &&
                  !S &&
                  !b &&
                  r.a.createElement(at.a, {
                    id: 'note-multi-select-toggle_'.concat(c.Id),
                    checked: j,
                    onClick: function (t) {
                      t.preventDefault(),
                        t.stopPropagation(),
                        w.a.deselectAllAnnotations(),
                        N(!j);
                    },
                  }),
                r.a.createElement(tt, { annotationId: c.Id }),
                !v &&
                  !b &&
                  !A &&
                  !S &&
                  r.a.createElement(J, { annotation: c, isSelected: d }),
                !x &&
                  d &&
                  !A &&
                  !S &&
                  r.a.createElement(R, {
                    noteIndex: q,
                    annotation: c,
                    setIsEditing: f,
                    isReply: b,
                  })
              )
            )
          )
        );
      }
      ut.propTypes = st;
      var pt = ut,
        dt = n(434);
      function ft() {
        return (ft = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
              }
              return t;
            }).apply(this, arguments);
      }
      function ht(t, e) {
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return mt(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return mt(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function mt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var bt = function (t) {
          var e = ht(
            Object(s.e)(function (t) {
              return [P.a.getNotesPanelWidth(t)];
            }, s.c),
            1
          )[0];
          return r.a.createElement(dt.a, ft({}, t, { panelWidth: e }));
        },
        yt = (n(368), n(369), n(180)),
        gt = n(21);
      n(248);
      function vt(t) {
        return (vt =
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
      function wt() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ wt =
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
          r = 'function' == typeof Symbol ? Symbol : {},
          i = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          l = r.toStringTag || '@@toStringTag';
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
        function s(t, e, n, r) {
          var i = e && e.prototype instanceof d ? e : d,
            a = Object.create(i.prototype),
            l = new O(r || []);
          return o(a, '_invoke', { value: x(t, n, l) }), a;
        }
        function u(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = s;
        var p = {};
        function d() {}
        function f() {}
        function h() {}
        var m = {};
        c(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          y = b && b(b(j([])));
        y && y !== e && n.call(y, i) && (m = y);
        var g = (h.prototype = d.prototype = Object.create(m));
        function v(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var r;
          o(this, '_invoke', {
            value: function (o, i) {
              function a() {
                return new e(function (r, a) {
                  !(function o(r, i, a, l) {
                    var c = u(t[r], t, i);
                    if ('throw' !== c.type) {
                      var s = c.arg,
                        p = s.value;
                      return p && 'object' == vt(p) && n.call(p, '__await')
                        ? e.resolve(p.__await).then(
                            function (t) {
                              o('next', t, a, l);
                            },
                            function (t) {
                              o('throw', t, a, l);
                            }
                          )
                        : e.resolve(p).then(
                            function (t) {
                              (s.value = t), a(s);
                            },
                            function (t) {
                              return o('throw', t, a, l);
                            }
                          );
                    }
                    l(c.arg);
                  })(o, i, r, a);
                });
              }
              return (r = r ? r.then(a, a) : a());
            },
          });
        }
        function x(t, e, n) {
          var o = 'suspendedStart';
          return function (r, i) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === r) throw i;
              return A();
            }
            for (n.method = r, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = q(a, n);
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
              var c = u(t, e, n);
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
        function q(t, e) {
          var n = e.method,
            o = t.iterator[n];
          if (void 0 === o)
            return (
              (e.delegate = null),
              ('throw' === n &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                q(t, e),
                'throw' === e.method)) ||
                ('return' !== n &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              p
            );
          var r = u(o, t.iterator, e.arg);
          if ('throw' === r.type)
            return (
              (e.method = 'throw'), (e.arg = r.arg), (e.delegate = null), p
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                p)
              : i
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              p);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function E(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[i];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                r = function e() {
                  for (; ++o < t.length; )
                    if (n.call(t, o)) return (e.value = t[o]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (r.next = r);
            }
          }
          return { next: A };
        }
        function A() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          o(g, 'constructor', { value: h, configurable: !0 }),
          o(h, 'constructor', { value: f, configurable: !0 }),
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
          v(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, n, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new w(s(e, n, o, r), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          v(g),
          c(g, l, 'Generator'),
          c(g, i, function () {
            return this;
          }),
          c(g, 'toString', function () {
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
          (t.values = j),
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
                this.tryEntries.forEach(E),
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
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  a = i.completion;
                if ('root' === i.tryLoc) return o('end');
                if (i.tryLoc <= this.prev) {
                  var l = n.call(i, 'catchLoc'),
                    c = n.call(i, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var r = this.tryEntries[o];
                if (
                  r.tryLoc <= this.prev &&
                  n.call(r, 'finallyLoc') &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
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
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), p)
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
                  return this.complete(n.completion, n.afterLoc), E(n), p;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    E(n);
                  }
                  return r;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      function xt(t, e, n, o, r, i, a) {
        try {
          var l = t[i](a),
            c = l.value;
        } catch (t) {
          return void n(t);
        }
        l.done ? e(c) : Promise.resolve(c).then(o, r);
      }
      function qt(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (o, r) {
            var i = t.apply(e, n);
            function a(t) {
              xt(i, o, r, a, l, 'next', t);
            }
            function l(t) {
              xt(i, o, r, a, l, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      var kt = 'ic-file-pdf',
        Et = 'ic-file-img',
        Ot = 'ic-file-cad',
        jt = 'ic-file-doc',
        At = 'ic-file-ppt',
        Nt = 'ic-file-xls',
        St = 'ic-file-etc',
        Ct = window.Core.Annotations.FileAttachmentUtils;
      function Pt(t) {
        return It.apply(this, arguments);
      }
      function It() {
        return (It = qt(
          wt().mark(function t(e) {
            return wt().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return t.abrupt(
                      'return',
                      Ct.decompressWithFlateDecode(e.content, e.type)
                    );
                  case 1:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function Lt(t) {
        return Tt.apply(this, arguments);
      }
      function Tt() {
        return (Tt = qt(
          wt().mark(function t(e) {
            var n,
              o = arguments;
            return wt().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = o.length > 1 && void 0 !== o[1] ? o[1] : []),
                      (t.next = 3),
                      e.setAttachments(n)
                    );
                  case 3:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function _t(t) {
        return !(!t.type || !t.type.startsWith('image/'));
      }
      function Mt(t) {
        var e;
        if (_t(t)) return Et;
        switch (
          null === (e = t.name) || void 0 === e
            ? void 0
            : e.split('.').pop().toLowerCase()
        ) {
          case 'pdf':
            return kt;
          case 'cad':
            return Ot;
          case 'doc':
          case 'docx':
            return jt;
          case 'ppt':
          case 'pptx':
            return At;
          case 'xls':
          case 'xlsx':
            return Nt;
          default:
            return St;
        }
      }
      var Rt = n(1463),
        Dt = n.n(Rt);
      function zt(t) {
        return (zt =
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
      function Ft() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Ft =
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
          r = 'function' == typeof Symbol ? Symbol : {},
          i = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          l = r.toStringTag || '@@toStringTag';
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
        function s(t, e, n, r) {
          var i = e && e.prototype instanceof d ? e : d,
            a = Object.create(i.prototype),
            l = new O(r || []);
          return o(a, '_invoke', { value: x(t, n, l) }), a;
        }
        function u(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = s;
        var p = {};
        function d() {}
        function f() {}
        function h() {}
        var m = {};
        c(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          y = b && b(b(j([])));
        y && y !== e && n.call(y, i) && (m = y);
        var g = (h.prototype = d.prototype = Object.create(m));
        function v(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var r;
          o(this, '_invoke', {
            value: function (o, i) {
              function a() {
                return new e(function (r, a) {
                  !(function o(r, i, a, l) {
                    var c = u(t[r], t, i);
                    if ('throw' !== c.type) {
                      var s = c.arg,
                        p = s.value;
                      return p && 'object' == zt(p) && n.call(p, '__await')
                        ? e.resolve(p.__await).then(
                            function (t) {
                              o('next', t, a, l);
                            },
                            function (t) {
                              o('throw', t, a, l);
                            }
                          )
                        : e.resolve(p).then(
                            function (t) {
                              (s.value = t), a(s);
                            },
                            function (t) {
                              return o('throw', t, a, l);
                            }
                          );
                    }
                    l(c.arg);
                  })(o, i, r, a);
                });
              }
              return (r = r ? r.then(a, a) : a());
            },
          });
        }
        function x(t, e, n) {
          var o = 'suspendedStart';
          return function (r, i) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === r) throw i;
              return A();
            }
            for (n.method = r, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = q(a, n);
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
              var c = u(t, e, n);
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
        function q(t, e) {
          var n = e.method,
            o = t.iterator[n];
          if (void 0 === o)
            return (
              (e.delegate = null),
              ('throw' === n &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                q(t, e),
                'throw' === e.method)) ||
                ('return' !== n &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              p
            );
          var r = u(o, t.iterator, e.arg);
          if ('throw' === r.type)
            return (
              (e.method = 'throw'), (e.arg = r.arg), (e.delegate = null), p
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                p)
              : i
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              p);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function E(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[i];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                r = function e() {
                  for (; ++o < t.length; )
                    if (n.call(t, o)) return (e.value = t[o]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (r.next = r);
            }
          }
          return { next: A };
        }
        function A() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          o(g, 'constructor', { value: h, configurable: !0 }),
          o(h, 'constructor', { value: f, configurable: !0 }),
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
          v(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, n, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new w(s(e, n, o, r), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          v(g),
          c(g, l, 'Generator'),
          c(g, i, function () {
            return this;
          }),
          c(g, 'toString', function () {
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
          (t.values = j),
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
                this.tryEntries.forEach(E),
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
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  a = i.completion;
                if ('root' === i.tryLoc) return o('end');
                if (i.tryLoc <= this.prev) {
                  var l = n.call(i, 'catchLoc'),
                    c = n.call(i, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var r = this.tryEntries[o];
                if (
                  r.tryLoc <= this.prev &&
                  n.call(r, 'finallyLoc') &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
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
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), p)
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
                  return this.complete(n.completion, n.afterLoc), E(n), p;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    E(n);
                  }
                  return r;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      function Ht(t, e, n, o, r, i, a) {
        try {
          var l = t[i](a),
            c = l.value;
        } catch (t) {
          return void n(t);
        }
        l.done ? e(c) : Promise.resolve(c).then(o, r);
      }
      var Gt = function (t) {
          return new Promise(function (e) {
            if (void 0 === t.size) e(t.toString('utf-8'));
            else {
              var n = new FileReader();
              (n.onload = function () {
                return e(n.result);
              }),
                n.readAsText(t);
            }
          });
        },
        Ut = function (t) {
          return 'image/svg+xml' === t.type;
        },
        Bt = (function () {
          var t,
            e =
              ((t = Ft().mark(function t(e) {
                var n, o, r, i;
                return Ft().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), Gt(e);
                      case 2:
                        if ((n = t.sent)) {
                          t.next = 5;
                          break;
                        }
                        return t.abrupt('return', { svg: e });
                      case 5:
                        return (
                          (o = []),
                          Dt.a.addHook('uponSanitizeElement', function (t, e) {
                            var n = e.tagName;
                            e.allowedTags[n] || o.push(n);
                          }),
                          (r = Dt.a.sanitize(n)),
                          (i = new Blob([r], { type: 'image/svg+xml' })),
                          t.abrupt('return', { svg: i, isDirty: o.length > 0 })
                        );
                      case 10:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })),
              function () {
                var e = this,
                  n = arguments;
                return new Promise(function (o, r) {
                  var i = t.apply(e, n);
                  function a(t) {
                    Ht(i, o, r, a, l, 'next', t);
                  }
                  function l(t) {
                    Ht(i, o, r, a, l, 'throw', t);
                  }
                  a(void 0);
                });
              });
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      n(1417);
      function Yt(t) {
        return (Yt =
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
      function Wt() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Wt =
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
          r = 'function' == typeof Symbol ? Symbol : {},
          i = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          l = r.toStringTag || '@@toStringTag';
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
        function s(t, e, n, r) {
          var i = e && e.prototype instanceof d ? e : d,
            a = Object.create(i.prototype),
            l = new O(r || []);
          return o(a, '_invoke', { value: x(t, n, l) }), a;
        }
        function u(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = s;
        var p = {};
        function d() {}
        function f() {}
        function h() {}
        var m = {};
        c(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          y = b && b(b(j([])));
        y && y !== e && n.call(y, i) && (m = y);
        var g = (h.prototype = d.prototype = Object.create(m));
        function v(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var r;
          o(this, '_invoke', {
            value: function (o, i) {
              function a() {
                return new e(function (r, a) {
                  !(function o(r, i, a, l) {
                    var c = u(t[r], t, i);
                    if ('throw' !== c.type) {
                      var s = c.arg,
                        p = s.value;
                      return p && 'object' == Yt(p) && n.call(p, '__await')
                        ? e.resolve(p.__await).then(
                            function (t) {
                              o('next', t, a, l);
                            },
                            function (t) {
                              o('throw', t, a, l);
                            }
                          )
                        : e.resolve(p).then(
                            function (t) {
                              (s.value = t), a(s);
                            },
                            function (t) {
                              return o('throw', t, a, l);
                            }
                          );
                    }
                    l(c.arg);
                  })(o, i, r, a);
                });
              }
              return (r = r ? r.then(a, a) : a());
            },
          });
        }
        function x(t, e, n) {
          var o = 'suspendedStart';
          return function (r, i) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === r) throw i;
              return A();
            }
            for (n.method = r, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = q(a, n);
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
              var c = u(t, e, n);
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
        function q(t, e) {
          var n = e.method,
            o = t.iterator[n];
          if (void 0 === o)
            return (
              (e.delegate = null),
              ('throw' === n &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                q(t, e),
                'throw' === e.method)) ||
                ('return' !== n &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              p
            );
          var r = u(o, t.iterator, e.arg);
          if ('throw' === r.type)
            return (
              (e.method = 'throw'), (e.arg = r.arg), (e.delegate = null), p
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                p)
              : i
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              p);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function E(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[i];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                r = function e() {
                  for (; ++o < t.length; )
                    if (n.call(t, o)) return (e.value = t[o]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (r.next = r);
            }
          }
          return { next: A };
        }
        function A() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          o(g, 'constructor', { value: h, configurable: !0 }),
          o(h, 'constructor', { value: f, configurable: !0 }),
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
          v(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, n, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new w(s(e, n, o, r), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          v(g),
          c(g, l, 'Generator'),
          c(g, i, function () {
            return this;
          }),
          c(g, 'toString', function () {
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
          (t.values = j),
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
                this.tryEntries.forEach(E),
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
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  a = i.completion;
                if ('root' === i.tryLoc) return o('end');
                if (i.tryLoc <= this.prev) {
                  var l = n.call(i, 'catchLoc'),
                    c = n.call(i, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var r = this.tryEntries[o];
                if (
                  r.tryLoc <= this.prev &&
                  n.call(r, 'finallyLoc') &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
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
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), p)
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
                  return this.complete(n.completion, n.afterLoc), E(n), p;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    E(n);
                  }
                  return r;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      function Vt(t, e, n, o, r, i, a) {
        try {
          var l = t[i](a),
            c = l.value;
        } catch (t) {
          return void n(t);
        }
        l.done ? e(c) : Promise.resolve(c).then(o, r);
      }
      function $t(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (o, r) {
            var i = t.apply(e, n);
            function a(t) {
              Vt(i, o, r, a, l, 'next', t);
            }
            function l(t) {
              Vt(i, o, r, a, l, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function Kt(t, e) {
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return Jt(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Jt(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Jt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var Zt = function (t) {
          var e = t.file,
            n = Kt(Object(u.a)(), 1)[0],
            i = Kt(Object(o.useState)(), 2),
            l = i[0],
            c = i[1],
            s = Kt(Object(o.useState)(!1), 2),
            p = s[0],
            d = s[1];
          return (
            Object(o.useEffect)(
              function () {
                (function () {
                  var t = $t(
                    Wt().mark(function t() {
                      var n, o, r, i, a;
                      return Wt().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                (d(!1),
                                (n = e),
                                !(o = !(e instanceof File || e.url)))
                              ) {
                                t.next = 7;
                                break;
                              }
                              return (t.next = 6), Pt(e);
                            case 6:
                              n = t.sent;
                            case 7:
                              if (!(e instanceof File || o)) {
                                t.next = 19;
                                break;
                              }
                              if (!Ut(e)) {
                                t.next = 18;
                                break;
                              }
                              return (t.next = 11), Bt(n);
                            case 11:
                              (r = t.sent),
                                (i = r.svg),
                                (a = r.isDirty),
                                c(URL.createObjectURL(i)),
                                d(a),
                                (t.next = 19);
                              break;
                            case 18:
                              c(URL.createObjectURL(n));
                            case 19:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })()();
              },
              [e]
            ),
            r.a.createElement(
              'div',
              { className: a()({ 'reply-attachment-preview': !0, dirty: p }) },
              r.a.createElement('img', { src: l }),
              p &&
                r.a.createElement(
                  'span',
                  { className: 'reply-attachment-preview-message' },
                  n('message.svgMalicious')
                )
            )
          );
        },
        Xt = function (t) {
          var e = t.files,
            n = t.isEditing,
            o = t.fileDeleted,
            i = Kt(
              Object(s.e)(function (t) {
                return [
                  P.a.getTabManager(t),
                  P.a.isReplyAttachmentPreviewEnabled(t),
                ];
              }),
              2
            ),
            a = i[0],
            l = i[1],
            c = (function () {
              var t = $t(
                Wt().mark(function t(e, n) {
                  var o;
                  return Wt().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ((e.preventDefault(), e.stopPropagation(), a)) {
                            t.next = 4;
                            break;
                          }
                          return t.abrupt(
                            'return',
                            console.warn(
                              "Can't open attachment in non-multi-tab mode"
                            )
                          );
                        case 4:
                          if (!(n instanceof File)) {
                            t.next = 8;
                            break;
                          }
                          (o = n), (t.next = 15);
                          break;
                        case 8:
                          if (!n.url) {
                            t.next = 12;
                            break;
                          }
                          (o = n.url), (t.next = 15);
                          break;
                        case 12:
                          return (t.next = 14), Pt(n);
                        case 14:
                          o = t.sent;
                        case 15:
                          o &&
                            a.addTab(o, {
                              filename: n.name,
                              setActive: !0,
                              saveCurrentActiveTabState: !0,
                            });
                        case 16:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })(),
            u = (function () {
              var t = $t(
                Wt().mark(function t(e, n) {
                  var o;
                  return Wt().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (e.preventDefault(), e.stopPropagation(), !n.url)
                          ) {
                            t.next = 6;
                            break;
                          }
                          (t.t0 = n.url), (t.next = 9);
                          break;
                        case 6:
                          return (t.next = 8), Pt(n);
                        case 8:
                          t.t0 = t.sent;
                        case 9:
                          (o = t.t0), Object(yt.saveAs)(o, n.name);
                        case 11:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            'div',
            { className: 'reply-attachment-list' },
            e.map(function (t, e) {
              return r.a.createElement(
                'div',
                {
                  className: 'reply-attachment',
                  key: e,
                  onClick: function (e) {
                    return c(e, t);
                  },
                },
                l && _t(t) && r.a.createElement(Zt, { file: t }),
                r.a.createElement(
                  'div',
                  { className: 'reply-attachment-info' },
                  r.a.createElement(k.a, {
                    className: 'reply-attachment-icon',
                    glyph: Mt(t),
                  }),
                  r.a.createElement(
                    C.a,
                    { content: t.name },
                    r.a.createElement(
                      'div',
                      { className: 'reply-file-name' },
                      t.name
                    )
                  ),
                  n
                    ? r.a.createElement(gt.a, {
                        className: 'attachment-button',
                        img: 'icon-close',
                        onClick: function (e) {
                          return (function (t, e) {
                            t.preventDefault(), t.stopPropagation(), o(e);
                          })(e, t);
                        },
                      })
                    : r.a.createElement(gt.a, {
                        className: 'attachment-button',
                        img: 'icon-download',
                        onClick: function (e) {
                          return u(e, t);
                        },
                      })
                )
              );
            })
          );
        },
        Qt = n(365),
        te = n(1382),
        ee = function (t) {
          var e = {};
          if (
            (t['font-weight'] && (e.bold = !0),
            t['font-style'] && (e.italic = !0),
            t.color && (e.color = t.color),
            t['text-decoration'])
          ) {
            var n = t['text-decoration'].split(' ');
            n.includes('line-through') && (e.strike = !0),
              n.includes('word') && (e.underline = !0);
          }
          return e;
        },
        ne = function (t, e) {
          for (
            var n = t.getRichTextStyle(),
              o = Object.keys(n),
              r = e.getText(),
              i = [],
              a = 0;
            a < o.length;
            a++
          ) {
            var l = n[o[a]],
              c = ee(l);
            if (!isNaN(o[a])) {
              var s = isNaN(o[a + 1]) ? r.length : o[a + 1],
                u = r.slice(o[a], s);
              i.push({ insert: u, attributes: c });
            }
          }
          e.setContents(i), e.setSelection(r.length, 0);
        },
        oe = n(61),
        re = n(310),
        ie = n(2),
        ae = n(35),
        le = n(5);
      n(1419);
      function ce(t) {
        return (ce =
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
      function se() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ se =
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
          r = 'function' == typeof Symbol ? Symbol : {},
          i = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          l = r.toStringTag || '@@toStringTag';
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
        function s(t, e, n, r) {
          var i = e && e.prototype instanceof d ? e : d,
            a = Object.create(i.prototype),
            l = new O(r || []);
          return o(a, '_invoke', { value: x(t, n, l) }), a;
        }
        function u(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = s;
        var p = {};
        function d() {}
        function f() {}
        function h() {}
        var m = {};
        c(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          y = b && b(b(j([])));
        y && y !== e && n.call(y, i) && (m = y);
        var g = (h.prototype = d.prototype = Object.create(m));
        function v(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var r;
          o(this, '_invoke', {
            value: function (o, i) {
              function a() {
                return new e(function (r, a) {
                  !(function o(r, i, a, l) {
                    var c = u(t[r], t, i);
                    if ('throw' !== c.type) {
                      var s = c.arg,
                        p = s.value;
                      return p && 'object' == ce(p) && n.call(p, '__await')
                        ? e.resolve(p.__await).then(
                            function (t) {
                              o('next', t, a, l);
                            },
                            function (t) {
                              o('throw', t, a, l);
                            }
                          )
                        : e.resolve(p).then(
                            function (t) {
                              (s.value = t), a(s);
                            },
                            function (t) {
                              return o('throw', t, a, l);
                            }
                          );
                    }
                    l(c.arg);
                  })(o, i, r, a);
                });
              }
              return (r = r ? r.then(a, a) : a());
            },
          });
        }
        function x(t, e, n) {
          var o = 'suspendedStart';
          return function (r, i) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === r) throw i;
              return A();
            }
            for (n.method = r, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = q(a, n);
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
              var c = u(t, e, n);
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
        function q(t, e) {
          var n = e.method,
            o = t.iterator[n];
          if (void 0 === o)
            return (
              (e.delegate = null),
              ('throw' === n &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                q(t, e),
                'throw' === e.method)) ||
                ('return' !== n &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              p
            );
          var r = u(o, t.iterator, e.arg);
          if ('throw' === r.type)
            return (
              (e.method = 'throw'), (e.arg = r.arg), (e.delegate = null), p
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                p)
              : i
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              p);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function E(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[i];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                r = function e() {
                  for (; ++o < t.length; )
                    if (n.call(t, o)) return (e.value = t[o]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (r.next = r);
            }
          }
          return { next: A };
        }
        function A() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          o(g, 'constructor', { value: h, configurable: !0 }),
          o(h, 'constructor', { value: f, configurable: !0 }),
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
          v(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, n, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new w(s(e, n, o, r), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          v(g),
          c(g, l, 'Generator'),
          c(g, i, function () {
            return this;
          }),
          c(g, 'toString', function () {
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
          (t.values = j),
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
                this.tryEntries.forEach(E),
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
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  a = i.completion;
                if ('root' === i.tryLoc) return o('end');
                if (i.tryLoc <= this.prev) {
                  var l = n.call(i, 'catchLoc'),
                    c = n.call(i, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var r = this.tryEntries[o];
                if (
                  r.tryLoc <= this.prev &&
                  n.call(r, 'finallyLoc') &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
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
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), p)
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
                  return this.complete(n.completion, n.afterLoc), E(n), p;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    E(n);
                  }
                  return r;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      function ue(t, e, n, o, r, i, a) {
        try {
          var l = t[i](a),
            c = l.value;
        } catch (t) {
          return void n(t);
        }
        l.done ? e(c) : Promise.resolve(c).then(o, r);
      }
      function pe(t, e) {
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return de(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return de(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function de(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      h.a.extend(b.a);
      var fe = {
          annotation: c.a.object.isRequired,
          isEditing: c.a.bool,
          setIsEditing: c.a.func,
          noteIndex: c.a.number,
          isUnread: c.a.bool,
          isNonReplyNoteRead: c.a.bool,
          onReplyClicked: c.a.func,
          isMultiSelected: c.a.bool,
          isMultiSelectMode: c.a.bool,
          handleMultiSelect: c.a.func,
          isGroupMember: c.a.bool,
        },
        he = function (t) {
          var e,
            n = t.annotation,
            i = t.isEditing,
            l = t.setIsEditing,
            c = t.noteIndex,
            f = t.isUnread,
            h = t.isNonReplyNoteRead,
            m = t.onReplyClicked,
            b = t.isMultiSelected,
            y = t.isMultiSelectMode,
            v = t.handleMultiSelect,
            x = t.isGroupMember,
            k = pe(
              Object(s.e)(function (t) {
                return [
                  P.a.getNoteDateFormat(t),
                  P.a.getIconColor(t, Object(oe.g)(n)),
                  P.a.isElementDisabled(t, 'notePopupState'),
                  P.a.getCurrentLanguage(t),
                  P.a.notesShowLastUpdatedDate(t),
                  P.a.isNotesPanelTextCollapsingEnabled(t),
                  P.a.isNotesPanelRepliesCollapsingEnabled(t),
                  P.a.getActiveTheme(t),
                  P.a.getTimezone(t),
                ];
              }, s.c),
              9
            ),
            E = k[0],
            O = k[1],
            j = k[2],
            A = k[3],
            N = k[4],
            S = k[5],
            C = k[6],
            I = k[7],
            L = k[8],
            T = Object(o.useContext)(p.a),
            _ = T.isSelected,
            M = T.searchInput,
            R = T.resize,
            D = T.pendingEditTextMap,
            z = T.onTopNoteContentClicked,
            F = T.sortStrategy,
            H = T.showAnnotationNumbering,
            G = T.setPendingEditText,
            U = Object(s.d)(),
            B = pe(Object(u.a)(), 1)[0],
            Y = n.isReply(),
            W = pe(Object(o.useState)([]), 2),
            V = W[0],
            $ = W[1];
          Object(o.useEffect)(
            function () {
              $(n.getAttachments());
            },
            [n]
          ),
            Object(o.useEffect)(
              function () {
                var t = function (t, e) {
                  'modify' === e &&
                    t.forEach(function (t) {
                      t.Id === n.Id && $(t.getAttachments());
                    });
                };
                return (
                  w.a.addEventListener('annotationChanged', t),
                  function () {
                    w.a.removeEventListener('annotationChanged', t);
                  }
                );
              },
              [n]
            ),
            Object(re.a)(
              function () {
                i || U(ie.a.finishNoteEditing()), R();
              },
              [i]
            );
          var K,
            J = Object(o.useCallback)(
              function (t) {
                var e = w.a.getDisplayAuthor(t.Author);
                return e ? ve(e, M) : B('option.notesPanel.noteContent.noName');
              },
              [M]
            ),
            Z = Object(o.useCallback)(
              function (t, e, n) {
                var o = [];
                if (
                  (d.a.link(t, {
                    stripPrefix: !1,
                    stripTrailingSlash: !1,
                    replaceFn: function (t) {
                      var e = t.getAnchorHref(),
                        n = t.getAnchorText(),
                        r = t.getOffset();
                      switch (t.getType()) {
                        case 'url':
                        case 'email':
                        case 'phone':
                          o.push({
                            href: e,
                            text: n,
                            start: r,
                            end: r + t.getMatchedText().length,
                          });
                      }
                    },
                  }),
                  !o.length)
                ) {
                  var i = ve(t, M, e);
                  return M || (!(!Y && S) && !(Y && C))
                    ? i
                    : r.a.createElement(
                        bt,
                        {
                          linesToBreak: 3,
                          comment: !0,
                          renderRichText: ge,
                          richTextStyle: e,
                          resize: R,
                          style: n,
                        },
                        t
                      );
                }
                var a = [],
                  l = 0;
                return (
                  o.forEach(function (n, o) {
                    var i = n.start,
                      c = n.end,
                      s = n.href;
                    l < i &&
                      a.push(
                        r.a.createElement(
                          'span',
                          { key: 'span_'.concat(o) },
                          ve(t, M, e, l, i)
                        )
                      ),
                      a.push(
                        r.a.createElement(
                          'a',
                          {
                            href: s,
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            key: 'a_'.concat(o),
                          },
                          ve(t, M, e, i, c)
                        )
                      ),
                      (l = c);
                  }),
                  l < t.length - 1 && a.push(ve(t, M, e, l)),
                  a
                );
              },
              [M]
            ),
            X = Object(oe.e)(Object(oe.g)(n)).icon;
          try {
            K = JSON.parse(n.getCustomData('trn-mention'));
          } catch (t) {
            K = n.getCustomData('trn-mention');
          }
          var Q =
              (null === (e = K) || void 0 === e ? void 0 : e.contents) ||
              n.getContents(),
            tt = n.getContents(),
            nt = n.getRichTextStyle(),
            rt = n.TextColor;
          I === it.a.DARK &&
            (rt &&
              Object(ot.b)(rt.toHexString()) &&
              (rt = new window.Core.Annotations.Color(255, 255, 255, 1)),
            nt &&
              Object.keys(nt).forEach(function (t) {
                nt[t].color &&
                  Object(ot.b)(nt[t].color) &&
                  (nt[t].color = '#FFFFFF');
              }));
          var at,
            lt = void 0 === D[n.Id];
          at = Q && lt ? Q : D[n.Id];
          var ct = function (t) {
              var e;
              null !== (e = window.getSelection()) &&
                void 0 !== e &&
                e.toString() &&
                (null == t || t.stopPropagation());
            },
            st = a()({ NoteContent: !0, isReply: Y, unread: f, clicked: h }),
            ut = Object(o.useMemo)(
              function () {
                var t = {};
                return (
                  rt && (t.color = rt.toHexString()),
                  r.a.createElement(
                    r.a.Fragment,
                    null,
                    i && _
                      ? r.a.createElement(be, {
                          annotation: n,
                          noteIndex: c,
                          setIsEditing: l,
                          textAreaValue: at,
                          onTextAreaValueChange: G,
                          pendingText: D[n.Id],
                        })
                      : tt &&
                          r.a.createElement(
                            'div',
                            {
                              className: a()('container', {
                                'reply-content': Y,
                              }),
                              onClick: ct,
                            },
                            Y &&
                              V.length > 0 &&
                              r.a.createElement(Xt, {
                                files: V,
                                isEditing: !1,
                              }),
                            Z(tt, nt, t)
                          )
                  )
                );
              },
              [n, _, i, l, Q, Z, at, G, V]
            ),
            dt = n.getCustomData('trn-annot-preview'),
            ft = Object(o.useMemo)(
              function () {
                if ('' === dt) return null;
                var t = ve(dt, M),
                  e = !Y && S;
                return g()(t) && e
                  ? r.a.createElement(
                      q.a,
                      {
                        className: 'selected-text-preview',
                        dataElement: 'notesSelectedTextPreview',
                      },
                      r.a.createElement(
                        bt,
                        { linesToBreak: 3 },
                        '"'.concat(t, '"')
                      )
                    )
                  : r.a.createElement(
                      'div',
                      {
                        className: 'selected-text-preview',
                        style: { paddingRight: '12px' },
                      },
                      t
                    );
              },
              [dt, M]
            ),
            ht = Object(o.useMemo)(
              function () {
                return r.a.createElement(pt, {
                  icon: X,
                  iconColor: O,
                  annotation: n,
                  language: A,
                  noteDateFormat: E,
                  isSelected: _,
                  setIsEditing: l,
                  notesShowLastUpdatedDate: N,
                  isReply: Y,
                  isUnread: f,
                  renderAuthorName: J,
                  isNoteStateDisabled: j,
                  isEditing: i,
                  noteIndex: c,
                  sortStrategy: F,
                  activeTheme: I,
                  handleMultiSelect: v,
                  isMultiSelected: b,
                  isMultiSelectMode: y,
                  isGroupMember: x,
                  showAnnotationNumbering: H,
                  timezone: L,
                });
              },
              [
                X,
                O,
                n,
                A,
                E,
                _,
                l,
                N,
                Y,
                f,
                J,
                w.a.getDisplayAuthor(n.Author),
                j,
                i,
                c,
                Object(et.a)(n),
                F,
                v,
                b,
                y,
                x,
                L,
              ]
            );
          return r.a.createElement(
            'div',
            {
              className: st,
              onClick: function () {
                x || (Y ? m(n) : i || z());
              },
            },
            ht,
            ft,
            ut
          );
        };
      he.propTypes = fe;
      var me = he,
        be = function (t) {
          var e = t.annotation,
            n = t.noteIndex,
            i = t.setIsEditing,
            l = t.textAreaValue,
            c = t.onTextAreaValueChange,
            d = t.pendingText,
            f = pe(
              Object(s.e)(function (t) {
                return [
                  P.a.getAutoFocusNoteOnAnnotationSelection(t),
                  P.a.getIsMentionEnabled(t),
                  P.a.isElementDisabled(t, le.a.INLINE_COMMENT_POPUP),
                  P.a.isElementOpen(t, le.a.INLINE_COMMENT_POPUP),
                  P.a.isElementOpen(t, le.a.NOTES_PANEL),
                  P.a.getActiveDocumentViewerKey(t),
                ];
              }),
              6
            ),
            h = f[0],
            m = f[1],
            b = f[2],
            y = f[3],
            g = f[4],
            x = f[5],
            q = pe(Object(u.a)(), 1)[0],
            k = Object(o.useRef)(),
            E = e.isReply(),
            O = Object(o.useContext)(p.a),
            j = O.setCurAnnotId,
            A = O.pendingAttachmentMap,
            N = O.deleteAttachment,
            S = O.clearAttachments,
            C = O.addAttachments,
            I = !b && y && Object(ae.l)();
          Object(o.useEffect)(
            function () {
              if ((g || y) && k.current) {
                var t = k.current.getEditor();
                e &&
                  e instanceof window.Core.Annotations.FreeTextAnnotation &&
                  t.setText(''),
                  d && Object(te.a)(t, e),
                  setTimeout(function () {
                    if (m) {
                      l = Qt.a.getFormattedTextFromDeltas(t.getContents());
                      var n = Qt.a.extractMentionDataFromStr(l),
                        o = n.plainTextValue;
                      n.ids.length && t.setText(o);
                    }
                    I ||
                      (k &&
                        k.current &&
                        h &&
                        (k.current.focus(), e.getRichTextStyle() && ne(e, t)));
                  }, 100);
                var n = t.getLength() - 1;
                if (I) return;
                setTimeout(function () {
                  t.setSelection(n, n);
                }, 100);
              }
            },
            [g, y, I]
          ),
            Object(o.useEffect)(function () {
              if (E && 0 === _.length) {
                var t = e.getAttachments();
                C(e.Id, t);
              }
            }, []);
          var L = (function () {
              var t,
                o =
                  ((t = se().mark(function t(o) {
                    var r, a, s, u, p;
                    return se().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              o.preventDefault(),
                              (r = k.current.getEditor()),
                              (l = Qt.a.getFormattedTextFromDeltas(
                                r.getContents()
                              )),
                              Object(te.a)(r, e),
                              m
                                ? ((a = Qt.a.extractMentionDataFromStr(l)),
                                  (s = a.plainTextValue),
                                  (u = a.ids),
                                  Qt.a
                                    .extractMentionDataFromAnnot(e)
                                    .mentions.forEach(function (t) {
                                      s.includes(t.value) && u.push(t.id);
                                    }),
                                  e.setCustomData(
                                    'trn-mention',
                                    JSON.stringify({ contents: l, ids: u })
                                  ),
                                  e.setContents(s))
                                : e.setContents(l),
                              (t.next = 7),
                              Lt(e, A[e.Id])
                            );
                          case 7:
                            (p =
                              e instanceof
                              window.Core.Annotations.FreeTextAnnotation
                                ? 'textChanged'
                                : 'noteChanged'),
                              w.a
                                .getAnnotationManager(x)
                                .trigger('annotationChanged', [
                                  [e],
                                  'modify',
                                  { source: p },
                                ]),
                              e instanceof
                                window.Core.Annotations.FreeTextAnnotation &&
                                w.a.drawAnnotationsFromList([e]),
                              i(!1, n),
                              '' !== l && c(void 0, e.Id),
                              S(e.Id);
                          case 13:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })),
                  function () {
                    var e = this,
                      n = arguments;
                    return new Promise(function (o, r) {
                      var i = t.apply(e, n);
                      function a(t) {
                        ue(i, o, r, a, l, 'next', t);
                      }
                      function l(t) {
                        ue(i, o, r, a, l, 'throw', t);
                      }
                      a(void 0);
                    });
                  });
              return function (t) {
                return o.apply(this, arguments);
              };
            })(),
            T = a()('edit-content', { 'reply-content': E }),
            _ = A[e.Id] || [];
          return r.a.createElement(
            'div',
            { className: T },
            E &&
              _.length > 0 &&
              r.a.createElement(Xt, {
                files: _,
                isEditing: !0,
                fileDeleted: function (t) {
                  return N(e.Id, t);
                },
              }),
            r.a.createElement(v.a, {
              ref: function (t) {
                k.current = t;
              },
              value: l,
              onChange: function (t) {
                return c(t, e.Id);
              },
              onSubmit: L,
              isReply: E,
              onBlur: function () {
                j(void 0);
              },
              onFocus: function () {
                j(e.Id);
              },
            }),
            r.a.createElement(
              'div',
              { className: 'edit-buttons' },
              r.a.createElement(
                'button',
                {
                  className: 'cancel-button',
                  onClick: function (t) {
                    t.stopPropagation(), i(!1, n), c(void 0, e.Id), S(e.Id);
                  },
                },
                q('action.cancel')
              ),
              r.a.createElement(
                'button',
                {
                  className: 'save-button'.concat(l ? '' : ' disabled'),
                  disabled: !l,
                  onClick: function (t) {
                    t.stopPropagation(), L(t);
                  },
                },
                q('action.save')
              )
            )
          );
        };
      be.propTypes = {
        noteIndex: c.a.number.isRequired,
        annotation: c.a.object.isRequired,
        setIsEditing: c.a.func.isRequired,
        textAreaValue: c.a.string,
        onTextAreaValueChange: c.a.func.isRequired,
        pendingText: c.a.string,
      };
      var ye = function (t, e, n) {
          var o = {
            fontWeight: e['font-weight'],
            fontStyle: e['font-style'],
            textDecoration: e['text-decoration'],
            color: e.color,
          };
          return (
            o.textDecoration &&
              (o.textDecoration = o.textDecoration.replace(
                'word',
                'underline'
              )),
            r.a.createElement('span', { style: o, key: n }, t)
          );
        },
        ge = function (t, e, n) {
          if (!e || !t) return t;
          for (
            var o = {},
              r = Object.keys(e)
                .map(Number)
                .sort(function (t, e) {
                  return t - e;
                }),
              i = 0;
            i < r.length;
            i++
          ) {
            var a = r[i] - n;
            if (
              ((o[(a = Math.min(Math.max(a, 0), t.length))] = e[r[i]]),
              a === t.length)
            )
              break;
          }
          for (
            var l = [],
              c = Object.keys(o)
                .map(Number)
                .sort(function (t, e) {
                  return t - e;
                }),
              s = 1;
            s < c.length;
            s++
          )
            l.push(
              ye(
                t.slice(c[s - 1], c[s]),
                o[c[s - 1]],
                'richtext_span_'.concat(s)
              )
            );
          return l;
        },
        ve = function (t, e, n) {
          var o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : t.length,
            a = t.slice(o, i),
            l = a.toLowerCase(),
            c = e.toLowerCase();
          n && ((n[0] = n[0] || {}), (n[t.length] = n[t.length] || {}));
          var s = l.indexOf(c);
          if (!c.trim() || -1 === s) return ge(a, n, o);
          var u = [],
            p = [s],
            d = c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          if (new RegExp('('.concat(d, ')'), 'gi').test(l))
            for (; -1 !== s; )
              -1 !== (s = l.indexOf(c, s + c.length)) && p.push(s);
          return (
            p.forEach(function (t, e) {
              0 === e && 0 !== t && u.push(ge(a.substring(0, t), n, o)),
                u.push(
                  r.a.createElement(
                    'span',
                    {
                      className: 'highlight',
                      key: 'highlight_span_'.concat(e),
                    },
                    ge(a.substring(t, t + c.length), n, o + t)
                  )
                ),
                t + c.length < l.length &&
                  t + c.length !== p[e + 1] &&
                  u.push(
                    ge(a.substring(t + c.length, p[e + 1]), n, o + t + c.length)
                  );
            }),
            u
          );
        },
        we = me;
      n(1421);
      function xe(t) {
        return (xe =
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
      function qe() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ qe =
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
          r = 'function' == typeof Symbol ? Symbol : {},
          i = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          l = r.toStringTag || '@@toStringTag';
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
        function s(t, e, n, r) {
          var i = e && e.prototype instanceof d ? e : d,
            a = Object.create(i.prototype),
            l = new O(r || []);
          return o(a, '_invoke', { value: x(t, n, l) }), a;
        }
        function u(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = s;
        var p = {};
        function d() {}
        function f() {}
        function h() {}
        var m = {};
        c(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          y = b && b(b(j([])));
        y && y !== e && n.call(y, i) && (m = y);
        var g = (h.prototype = d.prototype = Object.create(m));
        function v(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var r;
          o(this, '_invoke', {
            value: function (o, i) {
              function a() {
                return new e(function (r, a) {
                  !(function o(r, i, a, l) {
                    var c = u(t[r], t, i);
                    if ('throw' !== c.type) {
                      var s = c.arg,
                        p = s.value;
                      return p && 'object' == xe(p) && n.call(p, '__await')
                        ? e.resolve(p.__await).then(
                            function (t) {
                              o('next', t, a, l);
                            },
                            function (t) {
                              o('throw', t, a, l);
                            }
                          )
                        : e.resolve(p).then(
                            function (t) {
                              (s.value = t), a(s);
                            },
                            function (t) {
                              return o('throw', t, a, l);
                            }
                          );
                    }
                    l(c.arg);
                  })(o, i, r, a);
                });
              }
              return (r = r ? r.then(a, a) : a());
            },
          });
        }
        function x(t, e, n) {
          var o = 'suspendedStart';
          return function (r, i) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === r) throw i;
              return A();
            }
            for (n.method = r, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = q(a, n);
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
              var c = u(t, e, n);
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
        function q(t, e) {
          var n = e.method,
            o = t.iterator[n];
          if (void 0 === o)
            return (
              (e.delegate = null),
              ('throw' === n &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                q(t, e),
                'throw' === e.method)) ||
                ('return' !== n &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              p
            );
          var r = u(o, t.iterator, e.arg);
          if ('throw' === r.type)
            return (
              (e.method = 'throw'), (e.arg = r.arg), (e.delegate = null), p
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                p)
              : i
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              p);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function E(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[i];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                r = function e() {
                  for (; ++o < t.length; )
                    if (n.call(t, o)) return (e.value = t[o]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (r.next = r);
            }
          }
          return { next: A };
        }
        function A() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          o(g, 'constructor', { value: h, configurable: !0 }),
          o(h, 'constructor', { value: f, configurable: !0 }),
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
          v(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, n, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new w(s(e, n, o, r), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          v(g),
          c(g, l, 'Generator'),
          c(g, i, function () {
            return this;
          }),
          c(g, 'toString', function () {
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
          (t.values = j),
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
                this.tryEntries.forEach(E),
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
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  a = i.completion;
                if ('root' === i.tryLoc) return o('end');
                if (i.tryLoc <= this.prev) {
                  var l = n.call(i, 'catchLoc'),
                    c = n.call(i, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var r = this.tryEntries[o];
                if (
                  r.tryLoc <= this.prev &&
                  n.call(r, 'finallyLoc') &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
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
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), p)
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
                  return this.complete(n.completion, n.afterLoc), E(n), p;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    E(n);
                  }
                  return r;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      function ke(t, e, n, o, r, i, a) {
        try {
          var l = t[i](a),
            c = l.value;
        } catch (t) {
          return void n(t);
        }
        l.done ? e(c) : Promise.resolve(c).then(o, r);
      }
      function Ee(t, e) {
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return Oe(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Oe(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Oe(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var je = { annotation: c.a.object.isRequired },
        Ae = function (t) {
          var e = t.annotation,
            n = t.isUnread,
            i = t.onPendingReplyChange,
            l = Ee(
              Object(s.e)(function (t) {
                var n;
                return [
                  P.a.getAutoFocusNoteOnAnnotationSelection(t),
                  P.a.isDocumentReadOnly(t),
                  P.a.isElementDisabled(t, 'noteReply'),
                  null === (n = P.a.getIsReplyDisabled(t)) || void 0 === n
                    ? void 0
                    : n(e),
                  P.a.getIsMentionEnabled(t),
                  P.a.getIsNoteEditing(t),
                  P.a.isElementDisabled(t, le.a.INLINE_COMMENT_POPUP),
                  P.a.isElementOpen(t, le.a.INLINE_COMMENT_POPUP),
                  P.a.getActiveDocumentViewerKey(t),
                ];
              }, s.c),
              9
            ),
            c = l[0],
            u = l[1],
            d = l[2],
            f = l[3],
            h = l[4],
            m = l[5],
            b = l[6],
            y = l[7],
            g = l[8],
            x = Object(o.useContext)(p.a),
            q = x.isContentEditable,
            k = x.isSelected,
            E = x.pendingReplyMap,
            O = x.setPendingReply,
            j = x.isExpandedFromSearch,
            A = x.scrollToSelectedAnnot,
            N = x.setCurAnnotId,
            S = x.pendingAttachmentMap,
            C = x.clearAttachments,
            I = x.deleteAttachment,
            L = Ee(Object(o.useState)(!1), 2),
            T = L[0],
            _ = L[1],
            M = Object(s.d)(),
            R = Object(o.useRef)(),
            D = !b && y && Object(ae.l)();
          Object(re.a)(
            function () {
              T || M(ie.a.finishNoteEditing());
            },
            [T]
          ),
            Object(o.useEffect)(
              function () {
                D || (m && k && !q && c && R && R.current && R.current.focus());
              },
              [q, m, k, D]
            ),
            Object(o.useEffect)(function () {
              if (
                (!j &&
                  A &&
                  setTimeout(function () {
                    R && R.current && c && R.current.focus();
                  }, 100),
                R && R.current)
              ) {
                if (D) return;
                var t = R.current.getEditor().getLength() - 1;
                setTimeout(function () {
                  R.current && R.current.editor.setSelection(t, t);
                }, 100);
              }
            }, []);
          var z = (function () {
              var t,
                n =
                  ((t = qe().mark(function t(n) {
                    var o, r, i, a, l, c, s, u;
                    return qe().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              (n.preventDefault(),
                              n.stopPropagation(),
                              (o = R.current.getEditor()),
                              (r = Qt.a.getFormattedTextFromDeltas(
                                o.getContents()
                              )).trim())
                            ) {
                              t.next = 6;
                              break;
                            }
                            return t.abrupt('return');
                          case 6:
                            if (((i = !e.getContents()), !h)) {
                              t.next = 21;
                              break;
                            }
                            if (!i || !q) {
                              t.next = 14;
                              break;
                            }
                            (a = Qt.a.extractMentionDataFromStr(r)),
                              (l = a.plainTextValue),
                              (c = a.ids),
                              e.setCustomData(
                                'trn-mention',
                                JSON.stringify({ contents: r, ids: c })
                              ),
                              w.a.setNoteContents(e, l, g),
                              (t.next = 19);
                            break;
                          case 14:
                            return (
                              (s = Qt.a.createMentionReply(e, r)),
                              Object(te.a)(o, s),
                              (t.next = 18),
                              Lt(s, S[e.Id])
                            );
                          case 18:
                            w.a.addAnnotations([s], g);
                          case 19:
                            t.next = 31;
                            break;
                          case 21:
                            if (!i || !q) {
                              t.next = 26;
                              break;
                            }
                            w.a.setNoteContents(e, r, g),
                              Object(te.a)(o, e),
                              (t.next = 31);
                            break;
                          case 26:
                            return (
                              (u = w.a.createAnnotationReply(e, r)),
                              Object(te.a)(o, u),
                              (t.next = 30),
                              Lt(u, S[e.Id])
                            );
                          case 30:
                            w.a
                              .getAnnotationManager(g)
                              .trigger('annotationChanged', [
                                [u],
                                'modify',
                                {},
                              ]);
                          case 31:
                            O('', e.Id), C(e.Id);
                          case 33:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })),
                  function () {
                    var e = this,
                      n = arguments;
                    return new Promise(function (o, r) {
                      var i = t.apply(e, n);
                      function a(t) {
                        ke(i, o, r, a, l, 'next', t);
                      }
                      function l(t) {
                        ke(i, o, r, a, l, 'throw', t);
                      }
                      a(void 0);
                    });
                  });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            F = u || d || f,
            H = a()({ 'reply-area': !0, unread: n }),
            G = a()({ 'reply-button': !0, disabled: !E[e.Id] }),
            U = S[e.Id] || [];
          return F || !k
            ? null
            : r.a.createElement(
                'form',
                { onSubmit: z, className: 'reply-area-container' },
                U.length > 0 &&
                  r.a.createElement(Xt, {
                    files: U,
                    isEditing: !0,
                    fileDeleted: function (t) {
                      return I(e.Id, t);
                    },
                  }),
                r.a.createElement(
                  'div',
                  { className: 'reply-area-with-button' },
                  r.a.createElement(
                    'div',
                    {
                      className: H,
                      onMouseDown: function (t) {
                        return t.stopPropagation();
                      },
                    },
                    r.a.createElement(v.a, {
                      ref: function (t) {
                        R.current = t;
                      },
                      value: E[e.Id],
                      onChange: function (t) {
                        return (function (t) {
                          O(t, e.Id), i && i();
                        })(t);
                      },
                      onSubmit: z,
                      onBlur: function () {
                        _(!1), N(void 0);
                      },
                      onFocus: function () {
                        _(!0), N(e.Id);
                      },
                      isReply: !0,
                    })
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'reply-button-container' },
                    r.a.createElement(gt.a, {
                      img: 'icon-post-reply',
                      className: G,
                      onClick: z,
                      isSubmitType: !0,
                    })
                  )
                )
              );
        };
      Ae.propTypes = je;
      var Ne = Ae;
      function Se(t, e) {
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return Ce(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Ce(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Ce(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var Pe = {
          groupAnnotations: c.a.array.isRequired,
          isMultiSelectMode: c.a.bool.isRequired,
        },
        Ie = function (t) {
          var e = t.groupAnnotations,
            n = t.isMultiSelectMode,
            i = Se(Object(u.a)(), 1)[0],
            a = Object(s.d)(),
            l = Se(Object(o.useState)(!1), 2),
            c = l[0],
            p = l[1],
            d = r.a.createElement(
              'div',
              {
                onClick: function (t) {
                  t.preventDefault(), t.stopPropagation(), p(!0);
                },
                className: 'text-button',
              },
              i('component.noteGroupSection.open'),
              r.a.createElement(k.a, { glyph: 'ic_chevron_down_black_24px' })
            ),
            f = r.a.createElement(
              'div',
              {
                onClick: function (t) {
                  t.preventDefault(), t.stopPropagation(), p(!1);
                },
                className: 'text-button',
              },
              i('component.noteGroupSection.close'),
              r.a.createElement(k.a, { glyph: 'ic_chevron_up_black_24px' })
            );
          return r.a.createElement(
            'div',
            { className: 'group-section' },
            c ? f : d,
            c &&
              e.map(function (t, e) {
                return 0 === e
                  ? null
                  : r.a.createElement(
                      'div',
                      {
                        key: t.Id,
                        className: 'group-child',
                        onClick: function (e) {
                          e.preventDefault(),
                            e.stopPropagation(),
                            w.a.selectAnnotation(t),
                            w.a.jumpToAnnotation(t),
                            a(ie.a.openElement('annotationPopup'));
                        },
                      },
                      r.a.createElement(we, {
                        key: t.Id,
                        annotation: t,
                        isUnread: !1,
                        isGroupMember: !0,
                        isMultiSelectMode: n,
                      })
                    );
              })
          );
        };
      Ie.propTypes = Pe;
      var Le = Ie,
        Te = n(87),
        _e = n(312),
        Me = (n(1423), n(23));
      function Re(t, e) {
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return De(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return De(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function De(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var ze = function (t) {
          var e = t.children,
            n = Object(Me.a)().querySelector('#line-connector-root'),
            r = document.createElement('div');
          return (
            r.setAttribute('data-element', 'annotationNoteConnectorLine'),
            Object(o.useEffect)(
              function () {
                return (
                  n.appendChild(r),
                  function () {
                    return n.removeChild(r);
                  }
                );
              },
              [r, n]
            ),
            Object(Te.createPortal)(e, r)
          );
        },
        Fe = function (t) {
          var e = t.annotation,
            n = t.noteContainerRef,
            i = Re(
              Object(s.e)(function (t) {
                return [
                  P.a.getNotesPanelWidth(t),
                  P.a.isElementOpen(t, 'annotationNoteConnectorLine'),
                  P.a.isElementOpen(t, 'notesPanel'),
                  P.a.isElementDisabled(t, 'annotationNoteConnectorLine'),
                  P.a.getDocumentContainerWidth(t),
                  P.a.getDocumentContainerHeight(t),
                  P.a.getActiveDocumentViewerKey(t),
                ];
              }, s.c),
              7
            ),
            a = i[0],
            l = i[1],
            c = i[2],
            u = i[3],
            p = i[4],
            d = i[5],
            f = i[6],
            h = Object(s.d)(),
            m = Re(Object(o.useState)(0), 2),
            b = m[0],
            y = m[1],
            g = Re(Object(o.useState)(0), 2),
            v = g[0],
            x = g[1],
            q = Re(Object(o.useState)(0), 2),
            k = q[0],
            E = q[1],
            O = Re(Object(o.useState)(0), 2),
            j = O[0],
            A = O[1],
            N = Re(Object(o.useState)(0), 2),
            S = N[0],
            C = N[1],
            I = Re(Object(o.useState)(0), 2),
            L = I[0],
            T = I[1],
            _ = Object(_e.d)(e, f),
            M = _.bottomRight,
            R = _.topLeft,
            D = Object(o.useCallback)(
              function () {
                return 'Note' === e.Subject ? 4 : 15;
              },
              [e]
            );
          if (
            (Object(o.useEffect)(
              function () {
                var t = w.a.getScrollViewElement(f),
                  o = t.scrollTop,
                  r = t.scrollLeft,
                  i = M.x - R.x,
                  l = M.y - R.y,
                  c = window.isApryseWebViewerWebComponent
                    ? Object(Me.a)().host.clientWidth
                    : window.innerWidth,
                  s = window.isApryseWebViewerWebComponent
                    ? Object(Me.a)().host.offsetLeft
                    : 0;
                E(a - 16), x(n.current.getBoundingClientRect().top);
                var u = c + s - a - R.x + 16 + r - i;
                y(0.75 * u);
                var p = e.getNoZoomReferencePoint(),
                  d = e.NoZoom && p.x ? p.x * l : 0;
                A(u - b - D() + d), T(a - 16 + b);
                var m = e.NoZoom && p.y ? p.y * l : 0;
                C(R.y + l / 2 - o - m);
                var g = function () {
                  h(ie.a.closeElement('annotationNoteConnectorLine'));
                };
                return (
                  w.a.addEventListener('pageNumberUpdated', g, void 0, f),
                  function () {
                    w.a.removeEventListener('pageNumberUpdated', g, f);
                  }
                );
              },
              [n, a, M, R, p, d, h, f]
            ),
            l && c && !u)
          ) {
            var z = Math.abs(v - S),
              F = v > S ? S + 2 : v;
            return r.a.createElement(
              ze,
              null,
              r.a.createElement('div', {
                className: 'horizontalLine',
                style: { width: b, right: k, top: v },
              }),
              r.a.createElement('div', {
                className: 'verticalLine',
                style: { height: z, top: F, right: k + b },
              }),
              r.a.createElement(
                'div',
                {
                  className: 'horizontalLine',
                  style: { width: j, right: L, top: S },
                },
                r.a.createElement('div', { className: 'arrowHead' })
              )
            );
          }
          return null;
        };
      n(1425);
      function He(t) {
        return (He =
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
      function Ge(t, e) {
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
      function Ue(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ge(Object(n), !0).forEach(function (e) {
                Be(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Ge(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
        }
        return t;
      }
      function Be(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' !== He(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(t, e || 'default');
                if ('object' !== He(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' === He(e) ? e : String(e);
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
      function Ye(t, e) {
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return We(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return We(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function We(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var Ve = {
          annotation: c.a.object.isRequired,
          isMultiSelected: c.a.bool,
          isMultiSelectMode: c.a.bool,
          isInNotesPanel: c.a.bool,
          handleMultiSelect: c.a.func,
        },
        $e = 0,
        Ke = function (t) {
          var e = t.annotation,
            n = t.isMultiSelected,
            i = t.isMultiSelectMode,
            l = t.isInNotesPanel,
            c = t.handleMultiSelect,
            d = Object(o.useContext)(p.a),
            f = d.isSelected,
            h = d.resize,
            m = d.pendingEditTextMap,
            b = d.isContentEditable,
            y = d.isDocumentReadOnly,
            g = d.isExpandedFromSearch,
            v = Object(o.useRef)(),
            x = Object(o.useRef)(),
            q = Ye(Object(o.useState)({}), 2),
            k = q[0],
            E = q[1],
            O = Object(o.useRef)([]),
            j = Object(s.d)(),
            A = Ye(Object(u.a)(), 1)[0],
            N = new Set(),
            S = Ye(
              Object(s.e)(function (t) {
                return [
                  P.a.getNoteTransformFunction(t),
                  P.a.getCustomNoteSelectionFunction(t),
                  P.a.getUnreadAnnotationIdSet(t),
                  P.a.isCommentThreadExpansionEnabled(t),
                  P.a.isRightClickAnnotationPopupEnabled(t),
                  P.a.getActiveDocumentViewerKey(t),
                ];
              }, s.c),
              6
            ),
            C = S[0],
            I = S[1],
            L = S[2],
            T = S[3],
            _ = S[4],
            M = S[5],
            R = e.getReplies().sort(function (t, e) {
              return t.DateCreated - e.DateCreated;
            });
          R.filter(function (t) {
            return L.has(t.Id);
          }).forEach(function (t) {
            return N.add(t.Id);
          }),
            Object(o.useEffect)(
              function () {
                var t = function (t, e) {
                  'delete' === e &&
                    t.forEach(function (t) {
                      L.has(t.Id) &&
                        j(
                          ie.a.setAnnotationReadState({
                            isRead: !0,
                            annotationId: t.Id,
                          })
                        );
                    });
                };
                return (
                  w.a.addEventListener('annotationChanged', t, void 0, M),
                  function () {
                    w.a.removeEventListener('annotationChanged', t, M);
                  }
                );
              },
              [L]
            ),
            Object(o.useEffect)(function () {
              var t = x.current,
                e = v.current.getBoundingClientRect().height;
              (x.current = e), t && Math.round(t) !== Math.round(e) && h();
            }),
            Object(o.useEffect)(function () {
              if (C) {
                var t = Object(Me.a)().getElementsByClassName('NotesPanel')[0];
                O.current.forEach(function (e) {
                  var n = t.querySelector(
                    '[data-webviewer-custom-element='.concat(e, ']')
                  );
                  n && n.parentNode.removeChild(n);
                }),
                  (O.current = []);
                var n = { annotation: e, isSelected: f };
                C(v.current, n, function () {
                  var t,
                    e = (t = document).createElement.apply(t, arguments),
                    n = 'custom-element-'.concat($e);
                  return (
                    $e++,
                    O.current.push(n),
                    e.setAttribute('data-webviewer-custom-element', n),
                    e.addEventListener('mousedown', function (t) {
                      t.stopPropagation();
                    }),
                    e
                  );
                });
              }
            }),
            Object(o.useEffect)(
              function () {
                '' !== m[e.Id] && b && !y && Y(!0, 0);
              },
              [y, b, Y, e, i]
            ),
            Object(re.a)(
              function () {
                (!y && b) || Y(!1, 0);
              },
              [y, b, Y]
            );
          var D = function (t) {
              t && t.stopPropagation(),
                L.has(e.Id) &&
                  j(
                    ie.a.setAnnotationReadState({
                      isRead: !0,
                      annotationId: e.Id,
                    })
                  ),
                I && I(e),
                f ||
                  (w.a.deselectAllAnnotations(M),
                  setTimeout(function () {
                    return j(
                      ie.a.openElement(le.a.ANNOTATION_NOTE_CONNECTOR_LINE)
                    );
                  }, 300)),
                l &&
                  (w.a.selectAnnotation(e, M),
                  w.a.jumpToAnnotation(e, M),
                  _ || j(ie.a.openElement(le.a.ANNOTATION_POPUP)));
            },
            z = N.size > 0,
            F = a()({
              Note: !0,
              expanded: f,
              'is-multi-selected': n,
              unread: L.has(e.Id) || z,
            }),
            H = a()({ replies: !0, hidden: !f });
          Object(o.useEffect)(
            function () {
              i ||
                R.forEach(function (t, e) {
                  var n = m[t.Id];
                  '' !== n && void 0 !== n && f && Y(!0, 1 + e);
                });
            },
            [f, i]
          ),
            Object(o.useEffect)(
              function () {
                i && Y(!1, 0);
              },
              [i]
            );
          var G = !Object.values(k).some(function (t) {
              return t;
            }),
            U = function (t) {
              N.has(t.Id) &&
                (j(
                  ie.a.setAnnotationReadState({
                    isRead: !0,
                    annotationId: t.Id,
                  })
                ),
                w.a.getAnnotationManager(M).selectAnnotation(t));
            },
            B = function () {
              if (N.size > 0) {
                var t = R.filter(function (t) {
                  return N.has(t.Id);
                });
                w.a.getAnnotationManager(M).selectAnnotations(t),
                  t.forEach(function (t) {
                    return j(
                      ie.a.setAnnotationReadState({
                        isRead: !0,
                        annotationId: t.Id,
                      })
                    );
                  });
              }
            },
            Y = Object(o.useCallback)(
              function (t, e) {
                E(function (n) {
                  return Ue(Ue({}, n), {}, Be({}, e, t));
                });
              },
              [E]
            ),
            W = w.a.getGroupAnnotations(e, M),
            V = W.length > 1;
          W.some(function (t) {
            return t instanceof window.Core.Annotations.CaretAnnotation;
          }) && ((i = !1), (n = !1));
          var $ = R.length > 0 ? R[R.length - 1].Id : null;
          return r.a.createElement(
            'div',
            {
              role: 'button',
              tabIndex: 0,
              ref: v,
              className: F,
              onClick: D,
              onKeyDown: function (t) {
                !(t.target === t.currentTarget) ||
                  ('Enter' !== t.key && ' ' !== t.key) ||
                  (t.preventDefault(), D());
              },
              id: 'note_'.concat(e.Id),
            },
            r.a.createElement(we, {
              noteIndex: 0,
              annotation: e,
              setIsEditing: Y,
              isEditing: k[0],
              isNonReplyNoteRead: !L.has(e.Id),
              isUnread: L.has(e.Id) || z,
              handleMultiSelect: c,
              isMultiSelected: n,
              isMultiSelectMode: i,
            }),
            (f || g || T) &&
              r.a.createElement(
                r.a.Fragment,
                null,
                R.length > 0 &&
                  r.a.createElement(
                    'div',
                    { className: H },
                    z &&
                      r.a.createElement(gt.a, {
                        dataElement: 'markAllReadButton',
                        className: 'mark-all-read-button',
                        label: A('action.markAllRead'),
                        onClick: B,
                      }),
                    R.map(function (t, e) {
                      return r.a.createElement(
                        'div',
                        {
                          className: 'reply',
                          id: 'note_reply_'.concat(t.Id),
                          key: 'note_reply_'.concat(t.Id),
                        },
                        r.a.createElement(we, {
                          noteIndex: e + 1,
                          key: t.Id,
                          annotation: t,
                          setIsEditing: Y,
                          isEditing: k[e + 1],
                          onReplyClicked: U,
                          isUnread: L.has(t.Id),
                          handleMultiSelect: c,
                          isMultiSelected: n,
                          isMultiSelectMode: i,
                        })
                      );
                    })
                  ),
                V &&
                  r.a.createElement(Le, {
                    groupAnnotations: W,
                    isMultiSelectMode: i,
                  }),
                G &&
                  !i &&
                  r.a.createElement(Ne, {
                    isUnread: $ && L.has($),
                    onPendingReplyChange: B,
                    annotation: e,
                  })
              ),
            f &&
              l &&
              r.a.createElement(Fe, { annotation: e, noteContainerRef: v })
          );
        };
      Ke.propTypes = Ve;
      var Je = Ke;
      e.a = Je;
    },
    1547: function (t, e, n) {
      var o = n(27),
        r = n(1548);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, '']]);
      var i = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const n = [];
            for (let o = 0; o < e.length; o++) {
              const r = e[o];
              if (0 === o)
                r.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    n.length > 0 &&
                      n.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                r.shadowRoot.appendChild(e), n.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      o(r, i);
      t.exports = r.locals || {};
    },
    1548: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        '.open.InlineCommentingPopup{visibility:visible}.closed.InlineCommentingPopup{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.InlineCommentingPopup{position:absolute;z-index:70;display:flex;justify-content:center;align-items:center}.InlineCommentingPopup:empty{padding:0}.InlineCommentingPopup .buttons{display:flex}.InlineCommentingPopup .Button{margin:4px;width:32px;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Button{width:42px;height:42px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Button{width:42px;height:42px}}.InlineCommentingPopup .Button:hover{background:var(--popup-button-hover)}.InlineCommentingPopup .Button .Icon{width:18px;height:18px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Button .Icon{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Button .Icon{width:24px;height:24px}}.is-vertical.InlineCommentingPopup .Button.main-menu-button{width:100%;border-radius:0;justify-content:flex-start;padding-left:var(--padding-small);padding-right:var(--padding-small);margin:0 0 var(--padding-tiny) 0}.is-vertical.InlineCommentingPopup .Button.main-menu-button:first-child{margin-top:var(--padding-tiny)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .is-vertical.InlineCommentingPopup .Button.main-menu-button{width:100%;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .is-vertical.InlineCommentingPopup .Button.main-menu-button{width:100%;height:32px}}.is-vertical.InlineCommentingPopup .Button.main-menu-button .Icon{margin-right:10px}.is-vertical.InlineCommentingPopup .Button.main-menu-button span{white-space:nowrap}@-webkit-keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.InlineCommentingPopup{border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);align-items:flex-start}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup{position:fixed;left:0;bottom:0;z-index:100;flex-direction:column;justify-content:flex-end;width:100%;background:var(--modal-negative-space)}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup{position:fixed;left:0;bottom:0;z-index:100;flex-direction:column;justify-content:flex-end;width:100%;background:var(--modal-negative-space)}}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup{overflow:auto;max-height:calc(100% - 100px)}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup{overflow:auto;max-height:calc(100% - 100px)}}.InlineCommentingPopup .inline-comment-container{display:flex;flex-direction:column}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .inline-comment-container{flex-basis:auto;width:100%;max-height:40%;background:var(--component-background);box-shadow:0 0 3px 0 var(--document-box-shadow);border-radius:4px 4px 0 0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .inline-comment-container{flex-basis:auto;width:100%;max-height:40%;background:var(--component-background);box-shadow:0 0 3px 0 var(--document-box-shadow);border-radius:4px 4px 0 0}}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .inline-comment-container{max-width:260px}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .inline-comment-container{max-width:260px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .inline-comment-container.expanded{flex-grow:1;max-height:90%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .inline-comment-container.expanded{flex-grow:1;max-height:90%}}.InlineCommentingPopup .Note{border-radius:0;background:none;margin:0;cursor:default}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Note{flex-grow:1;display:flex;flex-direction:column;overflow:auto;box-shadow:0 0 3px 0 var(--document-box-shadow)}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Note{flex-grow:1;display:flex;flex-direction:column;overflow:auto;box-shadow:0 0 3px 0 var(--document-box-shadow)}}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Note{box-shadow:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Note{box-shadow:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Note>div:not(:nth-last-child(2)){flex-grow:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Note>div:not(:nth-last-child(2)){flex-grow:0}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Note>div:nth-last-child(2){flex-grow:1}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Note>div:nth-last-child(2){flex-grow:1}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Note>.NoteContent:only-child{flex-grow:1}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Note>.NoteContent:only-child{flex-grow:1}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Note>.NoteContent:only-child .edit-content{flex-grow:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Note>.NoteContent:only-child .edit-content{flex-grow:0}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .NoteHeader{flex-grow:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .NoteHeader{flex-grow:0}}.InlineCommentingPopup .NoteContent .edit-content{margin-top:16px}.InlineCommentingPopup .note-popup-options:not(.options-reply){top:33px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .ql-container,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .ql-editor,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .quill{font-size:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .ql-container,.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .ql-editor,.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .quill{font-size:16px}}.InlineCommentingPopup .inline-comment-header{flex-grow:0;flex-shrink:0;display:flex;flex-direction:row;align-items:center}.InlineCommentingPopup .inline-comment-header-title{flex-grow:1;font-size:16px}.InlineCommentingPopup .Button.add-attachment,.InlineCommentingPopup .Button.reply-button{margin:0}.InlineCommentingPopup .Button.add-attachment .Icon,.InlineCommentingPopup .Button.reply-button .Icon{width:22px;height:22px}.InlineCommentingPopup .Button.add-attachment{width:24px;height:24px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Button.add-attachment{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Button.add-attachment{width:24px;height:24px}}.InlineCommentingPopup .Button.reply-button{width:28px;height:28px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InlineCommentingPopup .Button.reply-button{width:28px;height:28px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InlineCommentingPopup .Button.reply-button{width:28px;height:28px}}.sb-show-main .InlineCommentingPopup .quill.comment-textarea{padding:0}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1733: function (t, e, n) {
      'use strict';
      n.r(e);
      n(32),
        n(82),
        n(139),
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
        n(73);
      var o = n(0),
        r = n.n(o),
        i = n(6),
        a = n(222),
        l = n.n(a),
        c = n(19),
        s = n.n(c),
        u = n(4),
        p = n.n(u),
        d = n(362),
        f = n(1373),
        h = n(1435),
        m = n(1427),
        b = n(21),
        y = n(5);
      n(1547);
      function g(t) {
        return (g =
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
      function v(t, e) {
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
      function w(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? v(Object(n), !0).forEach(function (e) {
                x(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : v(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
        }
        return t;
      }
      function x(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' !== g(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(t, e || 'default');
                if ('object' !== g(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' === g(e) ? e : String(e);
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
      function q(t, e) {
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return k(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
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
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var E = {
          isMobile: p.a.bool,
          isUndraggable: p.a.bool,
          isNotesPanelClosed: p.a.bool,
          popupRef: p.a.any,
          position: p.a.object,
          closeAndReset: p.a.func,
          commentingAnnotation: p.a.object,
          contextValue: p.a.object,
          annotationForAttachment: p.a.string,
          addAttachments: p.a.func,
        },
        O = function (t) {
          var e = t.isMobile,
            n = t.isUndraggable,
            i = t.isNotesPanelClosed,
            a = t.popupRef,
            c = t.position,
            u = t.closeAndReset,
            p = t.commentingAnnotation,
            g = t.contextValue,
            v = t.annotationForAttachment,
            x = t.addAttachments,
            k = q(Object(d.a)(), 1)[0],
            E = q(Object(o.useState)(!1), 2),
            O = E[0],
            j = E[1],
            A = r.a.createElement(
              'div',
              {
                className: s()({
                  Popup: !0,
                  InlineCommentingPopup: !0,
                  open: i,
                }),
                ref: a,
                'data-element': y.a.INLINE_COMMENT_POPUP,
                style: w({}, c),
                onMouseDown: function (t) {
                  e && (t.stopPropagation(), u());
                },
              },
              r.a.createElement(
                'div',
                {
                  className: s()({
                    'inline-comment-container': !0,
                    expanded: O,
                  }),
                  onMouseDown: function (t) {
                    e && t.stopPropagation();
                  },
                },
                e &&
                  r.a.createElement(
                    'div',
                    { className: 'inline-comment-header' },
                    r.a.createElement(b.a, {
                      img: O ? 'icon-chevron-down' : 'icon-chevron-up',
                      className: 'expand-arrow',
                      dataElement: y.a.INLINE_COMMENT_POPUP_EXPAND_BUTTON,
                      onClick: function () {
                        return j(!O);
                      },
                    }),
                    r.a.createElement(
                      'span',
                      { className: 'inline-comment-header-title' },
                      k('action.comment')
                    ),
                    r.a.createElement(b.a, {
                      img: 'icon-close',
                      dataElement: y.a.INLINE_COMMENT_POPUP_CLOSE_BUTTON,
                      onClick: u,
                    })
                  ),
                r.a.createElement(
                  f.a.Provider,
                  { value: g },
                  r.a.createElement(h.a, {
                    annotation: p,
                    isMultiSelected: !1,
                    isMultiSelectMode: !1,
                    handleMultiSelect: function () {},
                  }),
                  r.a.createElement(m.a, { annotationId: v, addAttachments: x })
                )
              )
            );
          return n
            ? A
            : r.a.createElement(
                l.a,
                {
                  cancel:
                    '.Button, .cell, svg, select, button, input, .quill, .note-text-preview',
                },
                A
              );
        };
      O.propTypes = E;
      var j = O,
        A = n(1),
        N = n(312),
        S = n(179),
        C = n(147),
        P = n(2),
        I = n(3),
        L = n(35),
        T = n(23);
      function _(t) {
        return (_ =
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
      function M(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return G(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          H(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function R(t, e) {
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
      function D(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? R(Object(n), !0).forEach(function (e) {
                z(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : R(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
        }
        return t;
      }
      function z(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' !== _(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(t, e || 'default');
                if ('object' !== _(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === e ? String : Number)(t);
            })(t, 'string');
            return 'symbol' === _(e) ? e : String(e);
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
      function F(t, e) {
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
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== e);
                    c = !0
                  );
              } catch (t) {
                (s = !0), (r = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(t, e) ||
          H(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function H(t, e) {
        if (t) {
          if ('string' == typeof t) return G(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? G(t, e)
                : void 0
          );
        }
      }
      function G(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var U = function (t) {
        var e = t.annotation,
          n = t.closeAndReset,
          a = F(
            Object(i.e)(function (t) {
              return [
                I.a.isElementOpen(t, y.a.NOTES_PANEL),
                I.a.getNotesInLeftPanel(t),
                I.a.isElementOpen(t, y.a.LEFT_PANEL),
                I.a.getActiveLeftPanel(t),
                I.a.isAnnotationNumberingEnabled(t),
                I.a.getSortStrategy(t),
                I.a.isDocumentReadOnly(t),
              ];
            }, i.c),
            7
          ),
          l = a[0],
          c = a[1],
          s = a[2],
          u = a[3],
          p = a[4],
          d = a[5],
          f = a[6],
          h = Object(i.d)(),
          m = F(Object(o.useState)({ left: 0, top: 0 }), 2),
          b = m[0],
          g = m[1],
          v = Object(o.useRef)(),
          w = Object(L.l)(),
          x = w || !!L.m || L.f,
          q = l || (c && s && 'notesPanel' === u);
        Object(C.a)(v, function (t) {
          var e = Object(T.a)().querySelector('[data-element="notesPanel"]'),
            n = null == e ? void 0 : e.contains(t.target),
            o = Object(T.a)().querySelector('[data-element="notePopupState"]'),
            r = null == o ? void 0 : o.contains(t.target),
            i = Object(S.c)(),
            a = Object(S.e)(),
            l = Object(S.d)();
          n ||
            r ||
            a ||
            l ||
            i ||
            h(P.a.closeElement(y.a.INLINE_COMMENT_POPUP));
        });
        var k = !q;
        Object(o.useLayoutEffect)(function () {
          k && v.current && !w && g(Object(N.c)(e, v));
        }, []);
        var E = F(Object(o.useState)({}), 2),
          O = E[0],
          _ = E[1],
          R = function (t, e) {
            _(function (n) {
              return D(D({}, n), {}, z({}, t, [].concat(M(n[t] || []), M(e))));
            });
          },
          H = F(Object(o.useState)(void 0), 2),
          G = H[0],
          U = H[1],
          B = F(Object(o.useState)({}), 2),
          Y = B[0],
          W = B[1],
          V = Object(o.useCallback)(
            function (t, e) {
              W(function (n) {
                return D(D({}, n), {}, z({}, e, t));
              });
            },
            [W]
          ),
          $ = F(Object(o.useState)({}), 2),
          K = $[0],
          J = $[1],
          Z = Object(o.useCallback)(
            function (t, e) {
              J(function (n) {
                return D(D({}, n), {}, z({}, e, t));
              });
            },
            [J]
          ),
          X = {
            searchInput: '',
            resize: function () {},
            isSelected: !0,
            isContentEditable: A.a.canModifyContents(e) && !e.getContents(),
            pendingEditTextMap: Y,
            setPendingEditText: V,
            pendingReplyMap: K,
            setPendingReply: Z,
            isDocumentReadOnly: f,
            onTopNoteContentClicked: function () {},
            isExpandedFromSearch: !1,
            scrollToSelectedAnnot: !1,
            sortStrategy: d,
            showAnnotationNumbering: p,
            setCurAnnotId: U,
            pendingAttachmentMap: O,
            addAttachments: R,
            clearAttachments: function (t) {
              _(function (e) {
                return D(D({}, e), {}, z({}, t, []));
              });
            },
            deleteAttachment: function (t, e) {
              var n = O[t];
              if ((null == n ? void 0 : n.length) > 0) {
                var o = n.indexOf(e);
                o > -1 &&
                  (n.splice(o, 1),
                  _(function (e) {
                    return D(D({}, e), {}, z({}, t, M(n)));
                  }));
              }
            },
          };
        return r.a.createElement(j, {
          isMobile: w,
          isUndraggable: x,
          isNotesPanelClosed: k,
          popupRef: v,
          position: b,
          closeAndReset: n,
          commentingAnnotation: e,
          contextValue: X,
          annotationForAttachment: G,
          addAttachments: R,
        });
      };
      e.default = U;
    },
  },
]);
//# sourceMappingURL=17.chunk.js.map
