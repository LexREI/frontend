(window.webpackJsonp = window.webpackJsonp || []).push([
  [15, 13],
  {
    1373: function (e, t, n) {
      'use strict';
      var o = n(0),
        r = n.n(o).a.createContext();
      t.a = r;
    },
    1382: function (e, t, n) {
      'use strict';
      n(24), n(7), n(25), n(311), n(366), n(1406);
      t.a = function (e, t) {
        var n = {},
          o = e.getContents().ops,
          r = 0;
        o.forEach(function (e) {
          var t = e.attributes,
            o = e.insert,
            i = {};
          (null == t ? void 0 : t.bold) && (i['font-weight'] = 'bold'),
            (null == t ? void 0 : t.italic) && (i['font-style'] = 'italic'),
            (null == t ? void 0 : t.color) && (i.color = t.color),
            (null == t ? void 0 : t.underline) &&
              (i['text-decoration'] = 'word'),
            (null == t ? void 0 : t.strike) &&
              (i['text-decoration']
                ? (i['text-decoration'] = ''.concat(
                    i['text-decoration'],
                    ' line-through'
                  ))
                : (i['text-decoration'] = 'line-through')),
            (n[r] = i),
            (r += o.length);
        }),
          t.setRichTextStyle(n);
      };
    },
    1383: function (e, t, n) {
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
        d = n(3),
        p =
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
        f = n.n(p),
        h = (n(1462), n(365)),
        m = n(21),
        b = n(362),
        y = n(5),
        g = n(23);
      n(1408), n(1410);
      function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                P(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : v(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function x(e) {
        return (x =
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
      function q(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return E(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return E(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function k() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ k =
          function () {
            return e;
          };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          r = 'function' == typeof Symbol ? Symbol : {},
          i = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          l = r.toStringTag || '@@toStringTag';
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
        function s(e, t, n, r) {
          var i = t && t.prototype instanceof p ? t : p,
            a = Object.create(i.prototype),
            l = new j(r || []);
          return o(a, '_invoke', { value: q(e, n, l) }), a;
        }
        function u(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = s;
        var d = {};
        function p() {}
        function f() {}
        function h() {}
        var m = {};
        c(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          y = b && b(b(A([])));
        y && y !== t && n.call(y, i) && (m = y);
        var g = (h.prototype = p.prototype = Object.create(m));
        function v(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          var r;
          o(this, '_invoke', {
            value: function (o, i) {
              function a() {
                return new t(function (r, a) {
                  !(function o(r, i, a, l) {
                    var c = u(e[r], e, i);
                    if ('throw' !== c.type) {
                      var s = c.arg,
                        d = s.value;
                      return d && 'object' == x(d) && n.call(d, '__await')
                        ? t.resolve(d.__await).then(
                            function (e) {
                              o('next', e, a, l);
                            },
                            function (e) {
                              o('throw', e, a, l);
                            }
                          )
                        : t.resolve(d).then(
                            function (e) {
                              (s.value = e), a(s);
                            },
                            function (e) {
                              return o('throw', e, a, l);
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
        function q(e, t, n) {
          var o = 'suspendedStart';
          return function (r, i) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === r) throw i;
              return N();
            }
            for (n.method = r, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = E(a, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === o) throw ((o = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = 'executing';
              var c = u(e, t, n);
              if ('normal' === c.type) {
                if (
                  ((o = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              'throw' === c.type &&
                ((o = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
            }
          };
        }
        function E(e, t) {
          var n = t.method,
            o = e.iterator[n];
          if (void 0 === o)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                E(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var r = u(o, e.iterator, t.arg);
          if ('throw' === r.type)
            return (
              (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), d
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d);
        }
        function O(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(O, this),
            this.reset(!0);
        }
        function A(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                r = function t() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (t.value = e[o]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (r.next = r);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          o(g, 'constructor', { value: h, configurable: !0 }),
          o(h, 'constructor', { value: f, configurable: !0 }),
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
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new w(s(t, n, o, r), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
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
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var o in t) n.push(o);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var o = n.pop();
                  if (o in t) return (e.value = o), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = A),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
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
              function o(n, o) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  o && ((t.method = 'next'), (t.arg = void 0)),
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
            abrupt: function (e, t) {
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
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
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
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), S(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    S(n);
                  }
                  return r;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: A(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function O(e, t, n, o, r, i, a) {
        try {
          var l = e[i](a),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      function S(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, L(o.key), o);
        }
      }
      function j(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function A(e, t) {
        return (A = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function N(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = C(e);
          if (t) {
            var r = C(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return T(this, n);
        };
      }
      function T(e, t) {
        if (t && ('object' === x(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function C(e) {
        return (C = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function P(e, t, n) {
        return (
          (t = L(t)) in e
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
      function L(e) {
        var t = (function (e, t) {
          if ('object' !== x(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, t || 'default');
            if ('object' !== x(o)) return o;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' === x(t) ? t : String(t);
      }
      var I = [],
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
        M = p.Quill.import('modules/keyboard'),
        R = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && A(e, t);
          })(i, e);
          var t,
            n,
            o,
            r = N(i);
          function i() {
            return j(this, i), r.apply(this, arguments);
          }
          return (
            (t = i),
            n && S(t.prototype, n),
            o && S(t, o),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
          );
        })(M);
      P(
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
        p.Quill.register('modules/keyboard', R, !0);
      var D = {
          mention: {
            allowedChars: /^[A-Za-z\sÅÄÖåäö0-9\-_]*$/,
            mentionDenotationChars: ['@', '#'],
            mentionContainerClass: 'mention__element',
            mentionListClass: 'mention__suggestions__list',
            listItemClass: 'mention__suggestions__item',
            renderItem: function (e) {
              return e.email
                ? '<div> '
                    .concat(e.value, ' <p class="email"> ')
                    .concat(e.email, ' </p> </div>')
                : '<div> '.concat(e.value, ' </div>');
            },
            source: function (e, t) {
              return ((n = k().mark(function n() {
                var o, r;
                return k().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (o = h.a.getMentionLookupCallback()),
                          (n.next = 3),
                          o(I, e)
                        );
                      case 3:
                        (r = n.sent), t(r, e);
                      case 5:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              })),
              function () {
                var e = this,
                  t = arguments;
                return new Promise(function (o, r) {
                  var i = n.apply(e, t);
                  function a(e) {
                    O(i, o, r, a, l, 'next', e);
                  }
                  function l(e) {
                    O(i, o, r, a, l, 'throw', e);
                  }
                  a(void 0);
                });
              })();
              var n;
            },
          },
        },
        H = r.a.forwardRef(function (e, t) {
          var n = e.value,
            o = void 0 === n ? '' : n,
            i = e.onChange,
            a = e.onKeyDown,
            c = e.onBlur,
            s = e.onFocus,
            u = e.userData,
            p = e.isReply,
            h = q(Object(b.a)(), 1)[0],
            v = Object(l.e)(function (e) {
              return d.a.isElementDisabled(
                e,
                y.a.NotesPanel.ADD_REPLY_ATTACHMENT_BUTTON
              );
            });
          I = u;
          if (o) {
            var w = o.split('\n');
            w.length &&
              '' === w[w.length - 1] &&
              (w.pop(),
              (o = w
                .map(function (e) {
                  return '<p>'.concat(e || '<br>', '</p>');
                })
                .join('')));
          }
          return r.a.createElement(
            'div',
            {
              className: 'comment-textarea',
              onBlur: c,
              onFocus: s,
              onClick: function (e) {
                e.preventDefault(), e.stopPropagation();
              },
              onScroll: function (e) {
                e.preventDefault(), e.stopPropagation();
              },
            },
            r.a.createElement(f.a, {
              className: 'comment-textarea ql-container ql-editor',
              style: { overflowY: 'visible' },
              ref: t,
              modules: u && u.length > 0 ? D : {},
              theme: 'snow',
              value: o,
              placeholder: ''.concat(
                h(p ? 'action.reply' : 'action.comment'),
                '...'
              ),
              'aria-label': ''.concat(
                h(p ? 'action.reply' : 'action.comment'),
                '...'
              ),
              onChange: i,
              onKeyDown: a,
              formats: _,
            }),
            p &&
              !v &&
              r.a.createElement(m.a, {
                className: 'add-attachment',
                dataElement: y.a.NotesPanel.ADD_REPLY_ATTACHMENT_BUTTON,
                img: 'ic_fileattachment_24px',
                onClick: function () {
                  var e;
                  null ===
                    (e = Object(g.a)().querySelector(
                      '#reply-attachment-picker'
                    )) ||
                    void 0 === e ||
                    e.click();
                },
              })
          );
        });
      H.displayName = 'CommentTextarea';
      var F = H;
      function z(e) {
        return (z =
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
      function U(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? U(Object(n), !0).forEach(function (t) {
                B(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : U(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function B(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== z(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || 'default');
                if ('object' !== z(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === z(t) ? t : String(t);
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
      function W(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return Y(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Y(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
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
        $ = r.a.forwardRef(function (e, t) {
          var n = W(
              Object(l.e)(function (e) {
                return [
                  d.a.getUserData(e),
                  d.a.isNoteSubmissionWithEnterEnabled(e),
                  d.a.getAutoFocusNoteOnAnnotationSelection(e),
                  d.a.getIsNoteEditing(e),
                ];
              }, l.c),
              4
            ),
            i = n[0],
            a = n[1],
            c = n[2],
            p = n[3],
            f = Object(o.useContext)(u.a),
            m = f.resize,
            b = f.isContentEditable,
            y = f.isSelected,
            g = Object(o.useRef)(),
            v = Object(o.useRef)();
          Object(o.useLayoutEffect)(
            function () {
              var e,
                t,
                n =
                  null === (e = g.current) ||
                  void 0 === e ||
                  null === (t = e.editor) ||
                  void 0 === t
                    ? void 0
                    : t.container.firstElementChild,
                o = (null == n ? void 0 : n.getBoundingClientRect()) || {};
              v.current && v.current !== o.height && m(),
                (v.current = o.height);
            },
            [e.value, m]
          ),
            Object(o.useEffect)(function () {
              p && y && b && c && g && g.current && g.current.focus();
            });
          var w = G(
            G({}, e),
            {},
            {
              ref: function (e) {
                (g.current = e), t(e);
              },
              onChange: s()(function (t, n, o, r) {
                if (g.current) {
                  var i = '';
                  if (
                    ((r && '' === r.getText().trim() && '<p><br></p>' === t) ||
                      (i = t.target ? t.target.value : t),
                    e.onChange(i),
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
              onKeyDown: function (t) {
                if (13 === t.which) {
                  var n = a,
                    o = t.metaKey || t.ctrlKey;
                  (n || o) && e.onSubmit(t);
                }
              },
              userData: i,
            }
          );
          return r.a.createElement(r.a.Fragment, null, r.a.createElement(F, w));
        });
      ($.displayName = 'NoteTextarea'), ($.propTypes = V);
      var K = $;
      t.a = K;
    },
    1385: function (e, t, n) {
      var o = n(27),
        r = n(1414);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1387: function (e, t, n) {
      'use strict';
      var o = n(87),
        r = n(0),
        i = n(23);
      var a = function (e) {
          var t = Object(r.useRef)(null);
          return (
            Object(r.useEffect)(
              function () {
                var n,
                  o,
                  r = document.querySelector('#'.concat(e)),
                  a =
                    r ||
                    (function (e) {
                      var t = document.createElement('div');
                      return t.setAttribute('id', e), t;
                    })(e);
                return (
                  r ||
                    ((n = a),
                    (o = window.isApryseWebViewerWebComponent
                      ? Object(i.a)()
                      : document.body).insertBefore(
                      n,
                      o.lastElementChild.nextElementSibling
                    )),
                  a.appendChild(t.current),
                  function () {
                    t.current.remove(), a.childElementCount || a.remove();
                  }
                );
              },
              [e]
            ),
            t.current || (t.current = document.createElement('div')),
            t.current
          );
        },
        l = function (e) {
          var t = e.id,
            n = e.position,
            r = e.children,
            i = a(t);
          return (
            (i.style.position = 'absolute'),
            (i.style.top = 'auto' === n.top ? n.top : ''.concat(n.top, 'px')),
            (i.style.left =
              'auto' === n.left ? n.left : ''.concat(n.left, 'px')),
            (i.style.right =
              'auto' === n.right ? n.right : ''.concat(n.right, 'px')),
            (i.style.pointerEvents = 'none'),
            (i.style.zIndex = 999),
            Object(o.createPortal)(r, i)
          );
        };
      t.a = l;
    },
    1394: function (e, t, n) {
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
        d = n(4),
        p = n.n(d),
        f = n(23);
      n(1385);
      function h(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return m(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return m(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var b = {
          style: p.a.object,
          triggerElementName: p.a.string.isRequired,
          onClose: p.a.func,
          handleStateChange: p.a.func,
        },
        y = function (e) {
          var t = e.style,
            n = e.triggerElementName,
            d = e.onClose,
            p = void 0 === d ? function () {} : d,
            m = e.handleStateChange,
            b = void 0 === m ? function () {} : m,
            y = h(Object(i.a)(), 1)[0],
            g = h(
              Object(o.useState)({ left: 'auto', right: 'auto', top: 'auto' }),
              2
            ),
            v = g[0],
            w = g[1],
            x = Object(o.useRef)();
          Object(a.a)(x, function (e) {
            Object(f.a)()
              .querySelector('[data-element='.concat(n, ']'))
              .contains(e.target) || p();
          });
          var q = function (e) {
            return function () {
              b(e);
            };
          };
          return (
            Object(o.useEffect)(function () {
              var e = Object(u.a)(n, x);
              w(e);
            }, []),
            r.a.createElement(
              c.a,
              { id: 'note-state-popup-portal', position: v },
              r.a.createElement(
                'div',
                { style: t, className: 'note-state-options', ref: x },
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
      (y.propTypes = b), (t.a = y);
    },
    1395: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      n(32);
      var o = n(42),
        r = n(1);
      function i(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          i = new window.Core.Annotations.StickyAnnotation();
        (i.InReplyTo = e.Id),
          (i.X = e.X),
          (i.Y = e.Y),
          (i.PageNumber = e.PageNumber),
          (i.Subject = 'Sticky Note'),
          (i.Author = r.a.getCurrentUser()),
          (i.State = t),
          (i.StateModel =
            'Marked' === t || 'Unmarked' === t ? 'Marked' : 'Review'),
          (i.Hidden = !0);
        var a = r.a.getDisplayAuthor(i.Author, n),
          l = o.a.t('option.state.'.concat(t.toLowerCase())),
          c = ''
            .concat(l, ' ')
            .concat(o.a.t('option.state.setBy'), ' ')
            .concat(a);
        return i.setContents(c), i;
      }
    },
    1402: function (e, t, n) {
      'use strict';
      n(24), n(7);
      var o = n(1);
      t.a = function (e) {
        var t = {};
        return (
          [
            'FillColor',
            'StrokeColor',
            'TextColor',
            'Opacity',
            'StrokeThickness',
            'FontSize',
            'Precision',
            'Scale',
            'Style',
          ].forEach(function (n) {
            var o = e[n];
            null != o && (t[n] = e[n]);
          }),
          'highlight' !== e.elementName ||
            o.a.isBlendModeSupported(e.BlendMode) ||
            (t.Opacity = null),
          e.isFormFieldPlaceholder() && (t.Opacity = null),
          t
        );
      };
    },
    1403: function (e, t, n) {
      var o = n(27),
        r = n(1404);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1404: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}@-webkit-keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .AnnotationStylePopup{width:100%;margin:0;position:relative;max-width:none;border-radius:4px 4px 0 0;border:0;padding-bottom:24px;box-shadow:none}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .AnnotationStylePopup{width:100%;margin:0;position:relative;max-width:none;border-radius:4px 4px 0 0;border:0;padding-bottom:24px;box-shadow:none}}.AnnotationStylePopup .back-to-menu-container{margin-top:var(--padding-medium);margin-right:var(--padding-medium);margin-left:var(--padding-medium);padding-bottom:var(--padding-small);border-bottom:1px solid var(--border)}.AnnotationStylePopup .Button.back-to-menu-button{margin:0;width:100%;height:32px;border-radius:0;justify-content:flex-start}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .AnnotationStylePopup .Button.back-to-menu-button{width:100%;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .AnnotationStylePopup .Button.back-to-menu-button{width:100%;height:32px}}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1408: function (e, t, n) {
      var o = n(27),
        r = n(1409);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1409: function (e, t, n) {
      (e.exports = n(28)(!1)).push([
        e.i,
        '.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-container .ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;-o-tab-size:4;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor p{margin-top:0;margin-bottom:0}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li:before{content:"\\2022"}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li:before,.ql-editor ul[data-checked=true]>li:before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li:before{content:"\\2611"}.ql-editor ul[data-checked=false]>li:before{content:"\\2610"}.ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) ". "}.ql-editor ol li.ql-indent-1{counter-increment:list-1}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) ". "}.ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2{counter-increment:list-2}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) ". "}.ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3{counter-increment:list-3}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) ". "}.ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4{counter-increment:list-4}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) ". "}.ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5{counter-increment:list-5}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) ". "}.ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-6{counter-increment:list-6}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) ". "}.ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-7{counter-increment:list-7}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) ". "}.ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-8{counter-increment:list-8}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) ". "}.ql-editor ol li.ql-indent-8{counter-reset:list-9}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) ". "}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank:before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow.ql-toolbar:after,.ql-snow .ql-toolbar:after{clear:both;content:"";display:table}.ql-snow.ql-toolbar button,.ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow.ql-toolbar button svg,.ql-snow .ql-toolbar button svg{float:left;height:100%}.ql-snow.ql-toolbar button:active:hover,.ql-snow .ql-toolbar button:active:hover{outline:none}.ql-snow.ql-toolbar input.ql-image[type=file],.ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow .ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow .ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover,.ql-snow .ql-toolbar button:hover{color:#06c}.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media(pointer:coarse){.ql-snow.ql-toolbar button:hover:not(.ql-active),.ql-snow .ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow,.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:"";display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor code,.ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=""]):before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item:before,.ql-snow .ql-picker.ql-header .ql-picker-label:before{content:"Normal"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]:before{content:"Heading 1"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]:before{content:"Heading 2"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]:before{content:"Heading 3"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]:before{content:"Heading 4"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]:before{content:"Heading 5"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]:before{content:"Heading 6"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item:before,.ql-snow .ql-picker.ql-font .ql-picker-label:before{content:"Sans Serif"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before{content:"Serif"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before{content:"Monospace"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item:before,.ql-snow .ql-picker.ql-size .ql-picker-label:before{content:"Normal"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before{content:"Small"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before{content:"Large"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before{content:"Huge"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2)}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label,.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip:before{content:"Visit URL:";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #ccc;content:"Edit";margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove:before{content:"Remove";margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0;content:"Save";padding-right:0}.ql-snow .ql-tooltip[data-mode=link]:before{content:"Enter link:"}.ql-snow .ql-tooltip[data-mode=formula]:before{content:"Enter formula:"}.ql-snow .ql-tooltip[data-mode=video]:before{content:"Enter video:"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}',
        '',
      ]);
    },
    1410: function (e, t, n) {
      var o = n(27),
        r = n(1411);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1411: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.comment-textarea{position:relative}.comment-textarea .ql-toolbar{display:none}.comment-textarea .ql-container{border:none}.comment-textarea .ql-container .ql-editor{width:100%;padding:4px 6px;border:1px solid var(--border);border-radius:4px;color:var(--text-color);resize:none;overflow:hidden;box-sizing:border-box}.comment-textarea .ql-container .ql-editor:focus{outline:none;border:1px solid var(--focus-border)}.comment-textarea .ql-container .ql-editor.ql-blank:before{left:8px;list-style-type:none;font-style:normal;color:var(--placeholder-text)}.comment-textarea .ql-container .ql-editor p{margin:0;word-break:break-word}.comment-textarea .ql-container .ql-editor ul>li:before{content:none!important}.comment-textarea .ql-container.ql-snow{border:none}.comment-textarea .add-attachment{position:absolute;bottom:2px;right:2px;width:24px;height:24px}.comment-textarea .add-attachment:hover{background-color:var(--blue-1)}.comment-textarea .add-attachment .Icon{padding:3px}.ql-editor ul>li:before{content:none!important}.mention__element{width:170px;z-index:9001!important;max-height:200px;overflow-y:auto;overflow-y:overlay;overflow-x:hidden;background-color:var(--component-background);border:1px solid var(--border);border-radius:4px}.mention__suggestions__list{width:100%;font-size:14px;margin-top:0;padding-left:0!important;list-style:none;word-wrap:break-word;border-radius:4px}.mention__suggestions__item{background-color:var(--component-background);white-space:nowrap;padding-left:0;text-overflow:clip;padding:7px 5px 1px!important;margin:0;width:100%;cursor:pointer}.mention__suggestions__item .email{margin-top:2px;font-size:12px;white-space:normal;color:var(--faded-text)}.mention__suggestions__item.selected{background-color:var(--view-header-button-active)!important}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1412: function (e, t, n) {
      var o = n(27),
        r = n(1413);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1413: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.NotePopup{flex-grow:0;justify-content:flex-end;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}.NotePopup,.NotePopup .overflow{display:flex;width:28px;height:28px}.NotePopup .overflow{border-radius:4px;justify-content:center;align-items:center}.NotePopup .overflow .Icon{width:24px;height:24px}.NotePopup .overflow:hover{background:var(--blue-1)}.NotePopup .overflow.active{background:var(--popup-button-active)}.NotePopup .options{display:flex;flex-direction:column;box-shadow:0 0 3px 0 var(--box-shadow);z-index:80;position:absolute;border-radius:4px;background:var(--component-background);top:40px;width:-webkit-max-content;width:-moz-max-content;width:max-content}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.NotePopup .options{right:0}}.NotePopup .options .note-popup-option{padding:0;border:none;background-color:transparent;align-items:flex-start}:host(:not([data-tabbing=true])) .NotePopup .options .note-popup-option,html:not([data-tabbing=true]) .NotePopup .options .note-popup-option{outline:none}.NotePopup .options.options-reply{top:30px}.NotePopup .options .option{display:flex;flex-direction:column;justify-content:center;height:28px;padding-left:8px;padding-right:17px;border-radius:0}.NotePopup .options .option:hover{background-color:var(--popup-button-hover)}.NotePopup .options .option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.NotePopup .options .option:last-child{border-bottom-right-radius:4px}.NotePopup .Button.active{background:var(--popup-button-active)}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1414: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.multi-state-container{position:relative;bottom:52px;pointer-events:auto}.NoteState{border:none;background-color:transparent;flex-grow:0;display:flex;justify-content:flex-end;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 10px 0 15px}:host(:not([data-tabbing=true])) .NoteState,html:not([data-tabbing=true]) .NoteState{outline:none}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.NoteState{padding-left:0;padding-right:5px}}.NoteState .overflow{width:28px;height:28px;border-radius:4px}.NoteState .overflow .Icon{margin:4px;width:20px;height:20px}.NoteState .overflow:hover{background:var(--blue-1)}.NoteState .Button.active,.NoteState .overflow.active{background:var(--popup-button-active)}.note-state-options{padding:0;border:none;background-color:transparent;font-size:inherit;display:flex;flex-direction:column;box-shadow:0 0 3px 0 var(--box-shadow);z-index:80;border-radius:4px;background:var(--component-background);pointer-events:auto}:host(:not([data-tabbing=true])) .note-state-options,html:not([data-tabbing=true]) .note-state-options{outline:none}.note-state-options *{box-sizing:border-box}.note-state-options .note-state-option{display:flex;flex-direction:row;justify-content:flex-start;height:35px;padding:8px;border-radius:0}.note-state-options .note-state-option .Icon{margin-right:5px;width:18px;height:18px}.note-state-options .note-state-option:hover{background-color:var(--popup-button-hover)}.note-state-options .note-state-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.note-state-options .note-state-option:last-child{border-bottom-right-radius:4px}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1415: function (e, t, n) {
      var o = n(27),
        r = n(1416);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1416: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.NoteHeader{padding-right:12px;position:relative;flex:1;color:var(--text-color);display:flex}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.NoteHeader{flex:none}}.NoteHeader .author-and-overflow{display:flex;justify-content:space-between}.NoteHeader .state-and-overflow{display:flex;flex:1;justify-content:flex-end}.NoteHeader .author-and-time{display:flex;flex-direction:column;word-break:break-word}.NoteHeader .author{font-weight:700}.NoteHeader .date-and-num-replies{display:flex}.NoteHeader .date-and-num-replies .num-replies-container{display:flex;flex-grow:1;padding-left:10px}.NoteHeader .date-and-num-replies .num-replies-container .num-reply-icon{height:12px;width:12px}.NoteHeader .date-and-num-replies .num-replies-container .num-replies{opacity:.8;font-size:10px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .NoteHeader .date-and-num-replies .num-replies-container .num-replies{font-size:12px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .NoteHeader .date-and-num-replies .num-replies-container .num-replies{font-size:12px}}.NoteHeader .author-and-date{flex:1;min-width:0;position:relative}.NoteHeader .unread-notification{position:absolute;width:13px;height:13px;right:-2px;top:-2px;border-radius:10000px;border:2px solid var(--component-background);background:#00a5e4}.NoteHeader .type-icon-container{padding-right:13px}.NoteHeader .type-icon{margin:2px;width:24px;height:24px}.NoteHeader .date-and-time{opacity:.8;font-size:10px;color:var(--faded-text)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .NoteHeader .date-and-time{font-size:12px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .NoteHeader .date-and-time{font-size:12px}}.NoteHeader .author-name{font-weight:700}.NoteHeader .isReply{padding-left:0;padding-top:0;font-size:10px}.parent{padding-left:12px;padding-top:12px}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1417: function (e, t, n) {
      var o = n(27),
        r = n(1418);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1418: function (e, t, n) {
      (e.exports = n(28)(!1)).push([
        e.i,
        '.reply-attachment-list{display:flex;flex-direction:column;cursor:default}.reply-attachment-list .reply-attachment{display:flex;flex-direction:column;background-color:var(--gray-1);border-radius:4px;cursor:pointer;overflow:hidden}.reply-attachment-list .reply-attachment:not(:last-child){margin-bottom:8px}.reply-attachment-list .reply-attachment .reply-attachment-preview{width:100%;max-height:80px;display:flex;justify-content:center}.reply-attachment-list .reply-attachment .reply-attachment-preview.dirty{position:relative;margin-bottom:15px}.reply-attachment-list .reply-attachment .reply-attachment-preview img{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.reply-attachment-list .reply-attachment .reply-attachment-preview .reply-attachment-preview-message{font-size:11px;color:var(--error-text-color);position:absolute;bottom:-15px;left:10px}.reply-attachment-list .reply-attachment .reply-attachment-info{display:flex;align-items:center;height:40px;padding:8px}.reply-attachment-list .reply-attachment .reply-attachment-info .reply-attachment-icon{height:24px;min-height:24px;width:24px;min-width:24px}.reply-attachment-list .reply-attachment .reply-attachment-info .reply-file-name{height:16px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-left:8px;margin-right:8px}.reply-attachment-list .reply-attachment .reply-attachment-info .attachment-button{height:24px;min-height:24px;width:24px;min-width:24px}.reply-attachment-list .reply-attachment .reply-attachment-info .attachment-button:hover{background-color:var(--blue-1)}.reply-attachment-list .reply-attachment .reply-attachment-info .attachment-button .Icon{height:16px;width:16px}',
        '',
      ]);
    },
    1419: function (e, t, n) {
      var o = n(27),
        r = n(1420);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1420: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.NoteContent{position:relative;display:flex;flex-direction:column;align-items:left;flex:1;color:var(--text-color);padding-bottom:12px}.NoteContent.isReply{padding-bottom:0}.NoteContent.unread.isReply{background:rgba(0,165,228,.08)}.NoteContent.unread.clicked .author-and-time span{font-weight:400}.NoteContent.unread .author-and-time span{font-weight:700}.NoteContent .container{padding-left:52px;padding-right:12px}.NoteContent .container,.NoteContent .container-reply{margin-top:8px;overflow:hidden;white-space:pre-wrap;word-wrap:break-word;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:text}.NoteContent .edit-content{margin-top:7px;display:flex;flex-direction:column;position:relative;flex:1;padding-left:52px;padding-right:12px;padding-bottom:12px}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.NoteContent .edit-content{flex:none}}.NoteContent .edit-content textarea{width:100%;padding-left:8px;border:1px solid var(--border);border-radius:4px;color:var(--text-color);padding-top:4px;padding-bottom:4px;resize:none;overflow:hidden;box-sizing:border-box}.NoteContent .edit-content textarea:focus{outline:none;border:1px solid var(--focus-border)}.NoteContent .edit-content textarea::-moz-placeholder{color:var(--placeholder-text)}.NoteContent .edit-content textarea:-ms-input-placeholder{color:var(--placeholder-text)}.NoteContent .edit-content textarea::placeholder{color:var(--placeholder-text)}.NoteContent .edit-content .edit-buttons{display:flex;flex-direction:row;justify-content:flex-end;margin-top:4px}.NoteContent .edit-content .edit-buttons>div{margin-right:4px}.NoteContent .edit-content .edit-buttons .save-button{border:none;background-color:transparent;cursor:pointer;flex-shrink:0;background:var(--primary-button);border-radius:4px;height:24px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);padding:0 13px}:host(:not([data-tabbing=true])) .NoteContent .edit-content .edit-buttons .save-button,html:not([data-tabbing=true]) .NoteContent .edit-content .edit-buttons .save-button{outline:none}.NoteContent .edit-content .edit-buttons .save-button:hover{background:var(--primary-button-hover);color:var(--primary-button-text)}.NoteContent .edit-content .edit-buttons .save-button.disabled{background:var(--gray-6);border-color:var(--gray-6);cursor:not-allowed}.NoteContent .edit-content .edit-buttons .cancel-button{border:none;background-color:transparent;color:var(--secondary-button-text);padding:0 10px;height:24px;display:flex;align-items:center;justify-content:center;cursor:pointer;margin-right:2px}:host(:not([data-tabbing=true])) .NoteContent .edit-content .edit-buttons .cancel-button,html:not([data-tabbing=true]) .NoteContent .edit-content .edit-buttons .cancel-button{outline:none}.NoteContent .edit-content .edit-buttons .cancel-button:hover{color:var(--secondary-button-hover)}.NoteContent .reply-content{padding-left:0}.NoteContent .contents{white-space:pre-wrap;color:var(--text-color);margin-right:5px;padding:0;word-break:normal;word-wrap:break-word;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.NoteContent .contents .highlight{background:#fffc95;color:#333}.NoteContent .highlight{background:#fffc95}.NoteContent .selected-text-preview{padding-left:52px;padding-top:8px}.NoteContent .reply-attachment-list{margin-bottom:8px}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1421: function (e, t, n) {
      var o = n(27),
        r = n(1422);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1422: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.reply-area-container{border-top:1px solid var(--divider);display:flex;flex-direction:column}.reply-area-container .reply-attachment-list{margin:12px 12px 0}.reply-area-container .reply-area-with-button{display:flex}.reply-area-container .reply-area-with-button .reply-area{position:relative;flex:1;margin:12px 17px 12px 12px;border-radius:4px;align-items:center}.reply-area-container .reply-area-with-button .reply-area.unread{background:rgba(0,165,228,.08)}.reply-area-container .reply-area-with-button .reply-area .comment-textarea .ql-container .ql-editor.ql-blank{padding:4px}.reply-area-container .reply-area-with-button .reply-area .comment-textarea .ql-container .ql-editor.ql-blank:before{left:4px}.reply-area-container .reply-area-with-button .reply-button-container{display:flex;flex-direction:column;justify-content:flex-end}.reply-area-container .reply-area-with-button .reply-button-container .reply-button{width:28px;height:28px;padding:0;border:none;background-color:transparent;right:10px;bottom:12px}:host(:not([data-tabbing=true])) .reply-area-container .reply-area-with-button .reply-button-container .reply-button,html:not([data-tabbing=true]) .reply-area-container .reply-area-with-button .reply-button-container .reply-button{outline:none}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.reply-area-container .reply-area-with-button .reply-button-container .reply-button{width:80px}}.reply-area-container .reply-area-with-button .reply-button-container .reply-button:hover{background:var(--blue-1)}.reply-area-container .reply-area-with-button .reply-button-container .reply-button.disabled{cursor:not-allowed}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1423: function (e, t, n) {
      var o = n(27),
        r = n(1424);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1424: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}@-webkit-keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@media print{#line-connector-root{opacity:0}}#line-connector-root{position:relative;z-index:69}.horizontalLine{height:2px}.horizontalLine,.verticalLine{background-color:rgba(30,120,235,.5);position:fixed}.verticalLine{width:2px}.arrowHead{position:absolute;top:0;left:0;margin:auto;width:0;height:0;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:7px solid rgba(30,120,235,.5);transform:translateX(-100%) translateY(-50%) translateY(1px)}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1425: function (e, t, n) {
      var o = n(27),
        r = n(1426);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1426: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.Note{padding:0;border:none;background-color:transparent;display:block;text-align:left;border-radius:4px;box-shadow:0 0 3px 0 var(--note-box-shadow);margin-bottom:8px;margin-left:2px;background:var(--component-background);cursor:pointer}:host(:not([data-tabbing=true])) .Note,html:not([data-tabbing=true]) .Note{outline:none}.Note.unread{border:1.2px solid #00a5e4}.Note.expanded{box-shadow:0 4px 16px var(--note-box-shadow-expanded),0 0 4px 0 var(--note-box-shadow)}.Note.is-multi-selected{box-shadow:0 4px 16px rgba(134,142,150,.24),0 0 4px 0 var(--note-box-shadow)}.Note .mark-all-read-button{background:#00a5e4;text-align:center;color:#fff;height:16px;font-size:12px;width:100%;border-radius:0}.Note .divider{height:1px;width:100%;background:var(--divider)}.Note .reply-divider{background:var(--reply-divider);height:1px;width:100%}.Note .replies{margin-left:52px;padding-bottom:12px}.Note .reply{padding-left:12px;padding-bottom:24px;border-left:1px solid var(--reply-divider)}.Note .reply:last-of-type{padding-bottom:0}.Note .group-section{margin-left:52px;padding-bottom:12px;display:flex;flex-direction:column;grid-row-gap:4px;row-gap:4px;padding-right:12px}.Note .text-button{color:var(--secondary-button-text);display:flex}.Note .text-button .Icon{color:var(--secondary-button-text);height:18px;width:18px}.Note .group-child{padding-top:4px;padding-bottom:4px}.Note .group-child:hover{background:var(--view-header-button-hover)}.Note .group-child .NoteContent{padding-bottom:0}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1427: function (e, t, n) {
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
      function l(e) {
        return (l =
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
      function c() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ c =
          function () {
            return e;
          };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          r = 'function' == typeof Symbol ? Symbol : {},
          i = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          s = r.toStringTag || '@@toStringTag';
        function u(e, t, n) {
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
          u({}, '');
        } catch (e) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function d(e, t, n, r) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            l = new j(r || []);
          return o(a, '_invoke', { value: E(e, n, l) }), a;
        }
        function p(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = d;
        var f = {};
        function h() {}
        function m() {}
        function b() {}
        var y = {};
        u(y, i, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          v = g && g(g(A([])));
        v && v !== t && n.call(v, i) && (y = v);
        var w = (b.prototype = h.prototype = Object.create(y));
        function x(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function q(e, t) {
          var r;
          o(this, '_invoke', {
            value: function (o, i) {
              function a() {
                return new t(function (r, a) {
                  !(function o(r, i, a, c) {
                    var s = p(e[r], e, i);
                    if ('throw' !== s.type) {
                      var u = s.arg,
                        d = u.value;
                      return d && 'object' == l(d) && n.call(d, '__await')
                        ? t.resolve(d.__await).then(
                            function (e) {
                              o('next', e, a, c);
                            },
                            function (e) {
                              o('throw', e, a, c);
                            }
                          )
                        : t.resolve(d).then(
                            function (e) {
                              (u.value = e), a(u);
                            },
                            function (e) {
                              return o('throw', e, a, c);
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
        function E(e, t, n) {
          var o = 'suspendedStart';
          return function (r, i) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === r) throw i;
              return N();
            }
            for (n.method = r, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = k(a, n);
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
              var c = p(e, t, n);
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
        function k(e, t) {
          var n = t.method,
            o = e.iterator[n];
          if (void 0 === o)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                k(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var r = p(o, e.iterator, t.arg);
          if ('throw' === r.type)
            return (
              (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), f
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              f);
        }
        function O(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(O, this),
            this.reset(!0);
        }
        function A(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                r = function t() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (t.value = e[o]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (r.next = r);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (m.prototype = b),
          o(w, 'constructor', { value: b, configurable: !0 }),
          o(b, 'constructor', { value: m, configurable: !0 }),
          (m.displayName = u(b, s, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === m || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), u(e, s, 'GeneratorFunction')),
              (e.prototype = Object.create(w)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          x(q.prototype),
          u(q.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = q),
          (e.async = function (t, n, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new q(d(t, n, o, r), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
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
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var o in t) n.push(o);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var o = n.pop();
                  if (o in t) return (e.value = o), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = A),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
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
              function o(n, o) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  o && ((t.method = 'next'), (t.arg = void 0)),
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
            abrupt: function (e, t) {
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
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), f)
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
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), S(n), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    S(n);
                  }
                  return r;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: A(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      function s(e, t, n, o, r, i, a) {
        try {
          var l = e[i](a),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      t.a = function (e) {
        var t = e.annotationId,
          n = e.addAttachments,
          o = Object(i.e)(function (e) {
            return a.a.getReplyAttachmentHandler(e);
          }),
          l = (function () {
            var e,
              r =
                ((e = c().mark(function e(r) {
                  var i, a, l;
                  return c().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(i = r.target.files[0])) {
                            e.next = 9;
                            break;
                          }
                          if (((a = i), !o)) {
                            e.next = 8;
                            break;
                          }
                          return (e.next = 6), o(i);
                        case 6:
                          (l = e.sent),
                            (a = {
                              url: l,
                              name: i.name,
                              size: i.size,
                              type: i.type,
                            });
                        case 8:
                          n(t, [a]);
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (o, r) {
                    var i = e.apply(t, n);
                    function a(e) {
                      s(i, o, r, a, l, 'next', e);
                    }
                    function l(e) {
                      s(i, o, r, a, l, 'throw', e);
                    }
                    a(void 0);
                  });
                });
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
        return r.a.createElement('input', {
          id: 'reply-attachment-picker',
          type: 'file',
          style: { display: 'none' },
          onChange: l,
          onClick: function (e) {
            e.target.value = '';
          },
        });
      };
    },
    1432: function (e, t, n) {
      var o = n(27),
        r = n(1433);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1433: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ListSeparator{margin-top:16px;margin-bottom:8px;font-family:Lato;font-weight:500;color:var(--list-separator-color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1435: function (e, t, n) {
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
        d = n(1373),
        p =
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
        E = n(33);
      n(1412);
      function k(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return O(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return O(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var S = {
        handleEdit: c.a.func,
        handleDelete: c.a.func,
        closePopup: c.a.func,
        openPopup: c.a.func,
        isEditable: c.a.bool,
        isDeletable: c.a.bool,
        isOpen: c.a.bool,
      };
      function j() {}
      function A(e) {
        var t = e.handleEdit,
          n = void 0 === t ? j : t,
          o = e.handleDelete,
          i = void 0 === o ? j : o,
          l = e.closePopup,
          c = void 0 === l ? j : l,
          s = e.openPopup,
          d = void 0 === s ? j : s,
          p = e.isEditable,
          f = e.isDeletable,
          h = e.isOpen,
          m = e.isReply,
          b = k(Object(u.a)(), 1)[0],
          y = r.a.useRef();
        Object(x.a)(y, function () {
          c();
        });
        if (!p && !f) return null;
        var g = a()('overflow note-popup-toggle-trigger', { active: h }),
          v = a()('options note-popup-options', { 'options-reply': m });
        return r.a.createElement(
          q.a,
          { className: 'NotePopup', dataElement: 'notePopup', ref: y },
          r.a.createElement(
            'div',
            {
              className: g,
              onClick: function (e) {
                e.stopPropagation(), h ? c() : d();
              },
            },
            r.a.createElement(E.a, { glyph: 'icon-tools-more' })
          ),
          h &&
            r.a.createElement(
              'div',
              { className: v },
              p &&
                r.a.createElement(
                  q.a,
                  {
                    type: 'button',
                    className: 'option note-popup-option',
                    dataElement: 'notePopupEdit',
                    onClick: function (e) {
                      e.stopPropagation(), c(), n();
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
      A.propTypes = S;
      var N = A,
        T = n(153),
        C = n(3);
      function P() {
        return (P = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      function L(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return M(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          _(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function I(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          _(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _(e, t) {
        if (e) {
          if ('string' == typeof e) return M(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? M(e, t)
                : void 0
          );
        }
      }
      function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var R = function (e) {
          var t = I(
              Object(s.e)(function (e) {
                return [C.a.getActiveDocumentViewerKey(e)];
              }),
              1
            )[0],
            n = e.annotation,
            o = e.setIsEditing,
            i = e.noteIndex,
            a = I(r.a.useState(w.a.canModify(n)), 2),
            l = a[0],
            c = a[1],
            d = I(r.a.useState(w.a.canModifyContents(n)), 2),
            p = d[0],
            f = d[1],
            h = I(r.a.useState(!1), 2),
            m = h[0],
            b = h[1],
            y = I(Object(u.a)(), 1)[0];
          r.a.useEffect(
            function () {
              function e() {
                c(w.a.canModify(n, t)), f(w.a.canModifyContents(n, t));
              }
              return (
                e(),
                w.a.addEventListener(
                  'updateAnnotationPermission',
                  e,
                  void 0,
                  t
                ),
                function () {
                  return w.a.removeEventListener(
                    'updateAnnotationPermission',
                    e,
                    t
                  );
                }
              );
            },
            [n, t]
          );
          var g = {
            handleEdit: r.a.useCallback(
              function () {
                n instanceof window.Core.Annotations.FreeTextAnnotation &&
                w.a.getAnnotationManager(t).isFreeTextEditingEnabled()
                  ? w.a
                      .getAnnotationManager(t)
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
                  t
                );
              },
              [n]
            ),
            isEditable: p,
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
            T.a,
            { content: y('formField.formFieldPopup.options') },
            r.a.createElement('div', null, r.a.createElement(N, P({}, e, g)))
          );
        },
        D = n(1394);
      n(1385);
      function H(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return F(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return F(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function F(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var z = {
        annotation: c.a.object.isRequired,
        openOnInitialLoad: c.a.bool,
        handleStateChange: c.a.func,
      };
      function U(e) {
        var t = e.annotation,
          n = e.openOnInitialLoad,
          i = void 0 !== n && n,
          l = e.handleStateChange,
          c = void 0 === l ? function () {} : l,
          s = H(Object(u.a)(), 1)[0],
          d = H(Object(o.useState)(i), 2),
          p = d[0],
          f = d[1],
          h = Object(o.useRef)(),
          m = t.getStatus(),
          b = 'icon-annotation-status-'.concat(
            '' === m ? 'none' : m.toLowerCase()
          ),
          y = a()('overflow', { active: p }),
          g = 'noteState-'.concat(t.Id);
        return r.a.createElement(
          q.a,
          {
            className: 'NoteState',
            dataElement: g,
            onClick: function (e) {
              e.stopPropagation(), f(!p);
            },
            ref: h,
          },
          r.a.createElement(
            T.a,
            { content: s('option.notesOrder.status') },
            r.a.createElement(
              'div',
              { className: y },
              r.a.createElement(E.a, { glyph: b })
            )
          ),
          p &&
            r.a.createElement(D.a, {
              triggerElementName: g,
              handleStateChange: c,
              onClose: function () {
                f(!1);
              },
            })
        );
      }
      U.propTypes = z;
      var G = U,
        B = n(1395);
      function W() {
        return (W = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      function Y(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return V(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return V(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function V(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var $ = { annotation: c.a.object };
      function K(e) {
        var t = Y(
            Object(s.e)(function (e) {
              return [C.a.getActiveDocumentViewerKey(e)];
            }),
            1
          )[0],
          n = e.annotation,
          o = r.a.useCallback(
            function (e) {
              var o = Object(B.a)(n, e, t);
              n.addReply(o);
              var r = w.a.getAnnotationManager(t);
              r.addAnnotation(o),
                r.trigger('addReply', [o, n, r.getRootAnnotation(n)]);
            },
            [n, t]
          );
        return r.a.createElement(
          'div',
          null,
          r.a.createElement(G, W({ handleStateChange: o }, e))
        );
      }
      K.propTypes = $;
      var J = K;
      function Z(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return X(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return X(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function X(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Q = function (e) {
          var t = e.annotationId,
            n = e.pendingEditTextMap,
            i = e.pendingReplyMap,
            a = e.pendingAttachmentMap,
            l = Object(u.a)().t,
            c = Z(Object(o.useState)(!1), 2),
            s = c[0],
            d = c[1],
            p = Z(Object(o.useState)(!1), 2),
            f = p[0],
            h = p[1],
            m = Z(Object(o.useState)(!1), 2),
            b = m[0],
            y = m[1];
          return (
            Object(o.useEffect)(
              function () {
                var e, o, r;
                d(
                  (null === (e = n[t]) || void 0 === e ? void 0 : e.length) > 0
                ),
                  h(
                    (null === (o = i[t]) || void 0 === o ? void 0 : o.length) >
                      0
                  ),
                  y(
                    (null === (r = a[t]) || void 0 === r ? void 0 : r.length) >
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
                    T.a,
                    { content: l('message.unpostedComment') },
                    r.a.createElement(
                      'div',
                      null,
                      r.a.createElement(E.a, {
                        className: 'type-icon',
                        glyph: 'icon-unposted-comment',
                      })
                    )
                  )
                )
              : null
          );
        },
        ee = function (e) {
          var t = e.annotationId,
            n = Object(s.e)(function (e) {
              return C.a.isElementDisabled(e, 'unpostedCommentIndicator');
            }),
            o = r.a.useContext(d.a),
            i = o.pendingEditTextMap,
            a = o.pendingReplyMap,
            l = o.pendingAttachmentMap;
          return n
            ? null
            : r.a.createElement(Q, {
                annotationId: t,
                pendingEditTextMap: i,
                pendingReplyMap: a,
                pendingAttachmentMap: l,
              });
        },
        te = n(189),
        ne = n(237),
        oe = n(226),
        re = n(166),
        ie = n(205),
        ae = n(162);
      n(1415);
      function le(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return ce(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ce(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ce(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var se = {
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
      function ue(e) {
        var t,
          n,
          o,
          i = e.icon,
          l = e.iconColor,
          c = e.annotation,
          s = e.language,
          d = e.noteDateFormat,
          p = e.isSelected,
          f = e.setIsEditing,
          m = e.notesShowLastUpdatedDate,
          b = e.isReply,
          y = e.isUnread,
          g = e.renderAuthorName,
          v = e.isNoteStateDisabled,
          x = e.isEditing,
          q = e.noteIndex,
          k = e.sortStrategy,
          O = e.activeTheme,
          S = e.isMultiSelected,
          j = e.isMultiSelectMode,
          A = e.handleMultiSelect,
          N = e.isGroupMember,
          T = e.showAnnotationNumbering,
          C = e.timezone,
          P = le(Object(u.a)(), 1)[0],
          L =
            k === re.a.MODIFIED_DATE || (m && k !== re.a.CREATED_DATE)
              ? Object(te.a)(c)
              : c.DateCreated;
        if (C && L) {
          var I = L.toLocaleString('en-US', { timeZone: C });
          o = new Date(I);
        } else o = L;
        var _ = c.getReplies().length,
          M =
            null === (t = c[l]) ||
            void 0 === t ||
            null === (n = t.toHexString) ||
            void 0 === n
              ? void 0
              : n.call(t);
        O === ie.a.DARK && M && Object(oe.b)(M) && (M = '#FFFFFF');
        var D = Object(ne.a)(c.FillColor),
          H = c.getAssociatedNumber(),
          F = '#'.concat(H, ' - '),
          z = a()('author-and-date', { isReply: b }),
          U = a()('NoteHeader', { parent: !b && !N });
        return r.a.createElement(
          'div',
          { className: U },
          !b &&
            r.a.createElement(
              'div',
              { className: 'type-icon-container' },
              y &&
                r.a.createElement('div', { className: 'unread-notification' }),
              r.a.createElement(E.a, {
                className: 'type-icon',
                glyph: i,
                color: M,
                fillColor: D,
              })
            ),
          r.a.createElement(
            'div',
            { className: z },
            r.a.createElement(
              'div',
              { className: 'author-and-overflow' },
              r.a.createElement(
                'div',
                { className: 'author-and-time' },
                r.a.createElement(
                  'div',
                  { className: 'author' },
                  T &&
                    void 0 !== H &&
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
                      ? h()(o).locale(s).format(d)
                      : P('option.notesPanel.noteContent.noDate'),
                    N && ' (Page '.concat(c.PageNumber, ')')
                  ),
                  _ > 0 &&
                    !p &&
                    r.a.createElement(
                      'div',
                      { className: 'num-replies-container' },
                      r.a.createElement(E.a, {
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
                j &&
                  !N &&
                  !b &&
                  r.a.createElement(ae.a, {
                    id: 'note-multi-select-toggle_'.concat(c.Id),
                    checked: S,
                    onClick: function (e) {
                      e.preventDefault(),
                        e.stopPropagation(),
                        w.a.deselectAllAnnotations(),
                        A(!S);
                    },
                  }),
                r.a.createElement(ee, { annotationId: c.Id }),
                !v &&
                  !b &&
                  !j &&
                  !N &&
                  r.a.createElement(J, { annotation: c, isSelected: p }),
                !x &&
                  p &&
                  !j &&
                  !N &&
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
      ue.propTypes = se;
      var de = ue,
        pe = n(434);
      function fe() {
        return (fe = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      function he(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return me(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return me(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function me(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var be = function (e) {
          var t = he(
            Object(s.e)(function (e) {
              return [C.a.getNotesPanelWidth(e)];
            }, s.c),
            1
          )[0];
          return r.a.createElement(pe.a, fe({}, e, { panelWidth: t }));
        },
        ye = (n(368), n(369), n(180)),
        ge = n(21);
      n(248);
      function ve(e) {
        return (ve =
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
      function we() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ we =
          function () {
            return e;
          };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          r = 'function' == typeof Symbol ? Symbol : {},
          i = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          l = r.toStringTag || '@@toStringTag';
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
        function s(e, t, n, r) {
          var i = t && t.prototype instanceof p ? t : p,
            a = Object.create(i.prototype),
            l = new O(r || []);
          return o(a, '_invoke', { value: x(e, n, l) }), a;
        }
        function u(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = s;
        var d = {};
        function p() {}
        function f() {}
        function h() {}
        var m = {};
        c(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          y = b && b(b(S([])));
        y && y !== t && n.call(y, i) && (m = y);
        var g = (h.prototype = p.prototype = Object.create(m));
        function v(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          var r;
          o(this, '_invoke', {
            value: function (o, i) {
              function a() {
                return new t(function (r, a) {
                  !(function o(r, i, a, l) {
                    var c = u(e[r], e, i);
                    if ('throw' !== c.type) {
                      var s = c.arg,
                        d = s.value;
                      return d && 'object' == ve(d) && n.call(d, '__await')
                        ? t.resolve(d.__await).then(
                            function (e) {
                              o('next', e, a, l);
                            },
                            function (e) {
                              o('throw', e, a, l);
                            }
                          )
                        : t.resolve(d).then(
                            function (e) {
                              (s.value = e), a(s);
                            },
                            function (e) {
                              return o('throw', e, a, l);
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
        function x(e, t, n) {
          var o = 'suspendedStart';
          return function (r, i) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === r) throw i;
              return j();
            }
            for (n.method = r, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = q(a, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === o) throw ((o = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = 'executing';
              var c = u(e, t, n);
              if ('normal' === c.type) {
                if (
                  ((o = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              'throw' === c.type &&
                ((o = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
            }
          };
        }
        function q(e, t) {
          var n = t.method,
            o = e.iterator[n];
          if (void 0 === o)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                q(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var r = u(o, e.iterator, t.arg);
          if ('throw' === r.type)
            return (
              (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), d
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function k(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                r = function t() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (t.value = e[o]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (r.next = r);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          o(g, 'constructor', { value: h, configurable: !0 }),
          o(h, 'constructor', { value: f, configurable: !0 }),
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
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new w(s(t, n, o, r), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
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
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var o in t) n.push(o);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var o = n.pop();
                  if (o in t) return (e.value = o), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = S),
          (O.prototype = {
            constructor: O,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
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
              function o(n, o) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  o && ((t.method = 'next'), (t.arg = void 0)),
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
            abrupt: function (e, t) {
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
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
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
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    k(n);
                  }
                  return r;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function xe(e, t, n, o, r, i, a) {
        try {
          var l = e[i](a),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      function qe(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, r) {
            var i = e.apply(t, n);
            function a(e) {
              xe(i, o, r, a, l, 'next', e);
            }
            function l(e) {
              xe(i, o, r, a, l, 'throw', e);
            }
            a(void 0);
          });
        };
      }
      var Ee = 'ic-file-pdf',
        ke = 'ic-file-img',
        Oe = 'ic-file-cad',
        Se = 'ic-file-doc',
        je = 'ic-file-ppt',
        Ae = 'ic-file-xls',
        Ne = 'ic-file-etc',
        Te = window.Core.Annotations.FileAttachmentUtils;
      function Ce(e) {
        return Pe.apply(this, arguments);
      }
      function Pe() {
        return (Pe = qe(
          we().mark(function e(t) {
            return we().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Te.decompressWithFlateDecode(t.content, t.type)
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Le(e) {
        return Ie.apply(this, arguments);
      }
      function Ie() {
        return (Ie = qe(
          we().mark(function e(t) {
            var n,
              o = arguments;
            return we().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = o.length > 1 && void 0 !== o[1] ? o[1] : []),
                      (e.next = 3),
                      t.setAttachments(n)
                    );
                  case 3:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function _e(e) {
        return !(!e.type || !e.type.startsWith('image/'));
      }
      function Me(e) {
        var t;
        if (_e(e)) return ke;
        switch (
          null === (t = e.name) || void 0 === t
            ? void 0
            : t.split('.').pop().toLowerCase()
        ) {
          case 'pdf':
            return Ee;
          case 'cad':
            return Oe;
          case 'doc':
          case 'docx':
            return Se;
          case 'ppt':
          case 'pptx':
            return je;
          case 'xls':
          case 'xlsx':
            return Ae;
          default:
            return Ne;
        }
      }
      var Re = n(1463),
        De = n.n(Re);
      function He(e) {
        return (He =
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
      function Fe() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Fe =
          function () {
            return e;
          };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          r = 'function' == typeof Symbol ? Symbol : {},
          i = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          l = r.toStringTag || '@@toStringTag';
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
        function s(e, t, n, r) {
          var i = t && t.prototype instanceof p ? t : p,
            a = Object.create(i.prototype),
            l = new O(r || []);
          return o(a, '_invoke', { value: x(e, n, l) }), a;
        }
        function u(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = s;
        var d = {};
        function p() {}
        function f() {}
        function h() {}
        var m = {};
        c(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          y = b && b(b(S([])));
        y && y !== t && n.call(y, i) && (m = y);
        var g = (h.prototype = p.prototype = Object.create(m));
        function v(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          var r;
          o(this, '_invoke', {
            value: function (o, i) {
              function a() {
                return new t(function (r, a) {
                  !(function o(r, i, a, l) {
                    var c = u(e[r], e, i);
                    if ('throw' !== c.type) {
                      var s = c.arg,
                        d = s.value;
                      return d && 'object' == He(d) && n.call(d, '__await')
                        ? t.resolve(d.__await).then(
                            function (e) {
                              o('next', e, a, l);
                            },
                            function (e) {
                              o('throw', e, a, l);
                            }
                          )
                        : t.resolve(d).then(
                            function (e) {
                              (s.value = e), a(s);
                            },
                            function (e) {
                              return o('throw', e, a, l);
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
        function x(e, t, n) {
          var o = 'suspendedStart';
          return function (r, i) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === r) throw i;
              return j();
            }
            for (n.method = r, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = q(a, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === o) throw ((o = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = 'executing';
              var c = u(e, t, n);
              if ('normal' === c.type) {
                if (
                  ((o = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              'throw' === c.type &&
                ((o = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
            }
          };
        }
        function q(e, t) {
          var n = t.method,
            o = e.iterator[n];
          if (void 0 === o)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                q(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var r = u(o, e.iterator, t.arg);
          if ('throw' === r.type)
            return (
              (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), d
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function k(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                r = function t() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (t.value = e[o]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (r.next = r);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          o(g, 'constructor', { value: h, configurable: !0 }),
          o(h, 'constructor', { value: f, configurable: !0 }),
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
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new w(s(t, n, o, r), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
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
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var o in t) n.push(o);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var o = n.pop();
                  if (o in t) return (e.value = o), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = S),
          (O.prototype = {
            constructor: O,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
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
              function o(n, o) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  o && ((t.method = 'next'), (t.arg = void 0)),
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
            abrupt: function (e, t) {
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
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
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
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    k(n);
                  }
                  return r;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function ze(e, t, n, o, r, i, a) {
        try {
          var l = e[i](a),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      var Ue = function (e) {
          return new Promise(function (t) {
            if (void 0 === e.size) t(e.toString('utf-8'));
            else {
              var n = new FileReader();
              (n.onload = function () {
                return t(n.result);
              }),
                n.readAsText(e);
            }
          });
        },
        Ge = function (e) {
          return 'image/svg+xml' === e.type;
        },
        Be = (function () {
          var e,
            t =
              ((e = Fe().mark(function e(t) {
                var n, o, r, i;
                return Fe().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), Ue(t);
                      case 2:
                        if ((n = e.sent)) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt('return', { svg: t });
                      case 5:
                        return (
                          (o = []),
                          De.a.addHook('uponSanitizeElement', function (e, t) {
                            var n = t.tagName;
                            t.allowedTags[n] || o.push(n);
                          }),
                          (r = De.a.sanitize(n)),
                          (i = new Blob([r], { type: 'image/svg+xml' })),
                          e.abrupt('return', { svg: i, isDirty: o.length > 0 })
                        );
                      case 10:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })),
              function () {
                var t = this,
                  n = arguments;
                return new Promise(function (o, r) {
                  var i = e.apply(t, n);
                  function a(e) {
                    ze(i, o, r, a, l, 'next', e);
                  }
                  function l(e) {
                    ze(i, o, r, a, l, 'throw', e);
                  }
                  a(void 0);
                });
              });
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      n(1417);
      function We(e) {
        return (We =
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
      function Ye() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Ye =
          function () {
            return e;
          };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          r = 'function' == typeof Symbol ? Symbol : {},
          i = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          l = r.toStringTag || '@@toStringTag';
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
        function s(e, t, n, r) {
          var i = t && t.prototype instanceof p ? t : p,
            a = Object.create(i.prototype),
            l = new O(r || []);
          return o(a, '_invoke', { value: x(e, n, l) }), a;
        }
        function u(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = s;
        var d = {};
        function p() {}
        function f() {}
        function h() {}
        var m = {};
        c(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          y = b && b(b(S([])));
        y && y !== t && n.call(y, i) && (m = y);
        var g = (h.prototype = p.prototype = Object.create(m));
        function v(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          var r;
          o(this, '_invoke', {
            value: function (o, i) {
              function a() {
                return new t(function (r, a) {
                  !(function o(r, i, a, l) {
                    var c = u(e[r], e, i);
                    if ('throw' !== c.type) {
                      var s = c.arg,
                        d = s.value;
                      return d && 'object' == We(d) && n.call(d, '__await')
                        ? t.resolve(d.__await).then(
                            function (e) {
                              o('next', e, a, l);
                            },
                            function (e) {
                              o('throw', e, a, l);
                            }
                          )
                        : t.resolve(d).then(
                            function (e) {
                              (s.value = e), a(s);
                            },
                            function (e) {
                              return o('throw', e, a, l);
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
        function x(e, t, n) {
          var o = 'suspendedStart';
          return function (r, i) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === r) throw i;
              return j();
            }
            for (n.method = r, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = q(a, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === o) throw ((o = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = 'executing';
              var c = u(e, t, n);
              if ('normal' === c.type) {
                if (
                  ((o = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              'throw' === c.type &&
                ((o = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
            }
          };
        }
        function q(e, t) {
          var n = t.method,
            o = e.iterator[n];
          if (void 0 === o)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                q(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var r = u(o, e.iterator, t.arg);
          if ('throw' === r.type)
            return (
              (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), d
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function k(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                r = function t() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (t.value = e[o]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (r.next = r);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          o(g, 'constructor', { value: h, configurable: !0 }),
          o(h, 'constructor', { value: f, configurable: !0 }),
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
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new w(s(t, n, o, r), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
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
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var o in t) n.push(o);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var o = n.pop();
                  if (o in t) return (e.value = o), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = S),
          (O.prototype = {
            constructor: O,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
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
              function o(n, o) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  o && ((t.method = 'next'), (t.arg = void 0)),
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
            abrupt: function (e, t) {
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
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
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
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    k(n);
                  }
                  return r;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function Ve(e, t, n, o, r, i, a) {
        try {
          var l = e[i](a),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      function $e(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, r) {
            var i = e.apply(t, n);
            function a(e) {
              Ve(i, o, r, a, l, 'next', e);
            }
            function l(e) {
              Ve(i, o, r, a, l, 'throw', e);
            }
            a(void 0);
          });
        };
      }
      function Ke(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return Je(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Je(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Je(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Ze = function (e) {
          var t = e.file,
            n = Ke(Object(u.a)(), 1)[0],
            i = Ke(Object(o.useState)(), 2),
            l = i[0],
            c = i[1],
            s = Ke(Object(o.useState)(!1), 2),
            d = s[0],
            p = s[1];
          return (
            Object(o.useEffect)(
              function () {
                (function () {
                  var e = $e(
                    Ye().mark(function e() {
                      var n, o, r, i, a;
                      return Ye().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (p(!1),
                                (n = t),
                                !(o = !(t instanceof File || t.url)))
                              ) {
                                e.next = 7;
                                break;
                              }
                              return (e.next = 6), Ce(t);
                            case 6:
                              n = e.sent;
                            case 7:
                              if (!(t instanceof File || o)) {
                                e.next = 19;
                                break;
                              }
                              if (!Ge(t)) {
                                e.next = 18;
                                break;
                              }
                              return (e.next = 11), Be(n);
                            case 11:
                              (r = e.sent),
                                (i = r.svg),
                                (a = r.isDirty),
                                c(URL.createObjectURL(i)),
                                p(a),
                                (e.next = 19);
                              break;
                            case 18:
                              c(URL.createObjectURL(n));
                            case 19:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              },
              [t]
            ),
            r.a.createElement(
              'div',
              { className: a()({ 'reply-attachment-preview': !0, dirty: d }) },
              r.a.createElement('img', { src: l }),
              d &&
                r.a.createElement(
                  'span',
                  { className: 'reply-attachment-preview-message' },
                  n('message.svgMalicious')
                )
            )
          );
        },
        Xe = function (e) {
          var t = e.files,
            n = e.isEditing,
            o = e.fileDeleted,
            i = Ke(
              Object(s.e)(function (e) {
                return [
                  C.a.getTabManager(e),
                  C.a.isReplyAttachmentPreviewEnabled(e),
                ];
              }),
              2
            ),
            a = i[0],
            l = i[1],
            c = (function () {
              var e = $e(
                Ye().mark(function e(t, n) {
                  var o;
                  return Ye().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((t.preventDefault(), t.stopPropagation(), a)) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt(
                            'return',
                            console.warn(
                              "Can't open attachment in non-multi-tab mode"
                            )
                          );
                        case 4:
                          if (!(n instanceof File)) {
                            e.next = 8;
                            break;
                          }
                          (o = n), (e.next = 15);
                          break;
                        case 8:
                          if (!n.url) {
                            e.next = 12;
                            break;
                          }
                          (o = n.url), (e.next = 15);
                          break;
                        case 12:
                          return (e.next = 14), Ce(n);
                        case 14:
                          o = e.sent;
                        case 15:
                          o &&
                            a.addTab(o, {
                              filename: n.name,
                              setActive: !0,
                              saveCurrentActiveTabState: !0,
                            });
                        case 16:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            u = (function () {
              var e = $e(
                Ye().mark(function e(t, n) {
                  var o;
                  return Ye().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (t.preventDefault(), t.stopPropagation(), !n.url)
                          ) {
                            e.next = 6;
                            break;
                          }
                          (e.t0 = n.url), (e.next = 9);
                          break;
                        case 6:
                          return (e.next = 8), Ce(n);
                        case 8:
                          e.t0 = e.sent;
                        case 9:
                          (o = e.t0), Object(ye.saveAs)(o, n.name);
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            'div',
            { className: 'reply-attachment-list' },
            t.map(function (e, t) {
              return r.a.createElement(
                'div',
                {
                  className: 'reply-attachment',
                  key: t,
                  onClick: function (t) {
                    return c(t, e);
                  },
                },
                l && _e(e) && r.a.createElement(Ze, { file: e }),
                r.a.createElement(
                  'div',
                  { className: 'reply-attachment-info' },
                  r.a.createElement(E.a, {
                    className: 'reply-attachment-icon',
                    glyph: Me(e),
                  }),
                  r.a.createElement(
                    T.a,
                    { content: e.name },
                    r.a.createElement(
                      'div',
                      { className: 'reply-file-name' },
                      e.name
                    )
                  ),
                  n
                    ? r.a.createElement(ge.a, {
                        className: 'attachment-button',
                        img: 'icon-close',
                        onClick: function (t) {
                          return (function (e, t) {
                            e.preventDefault(), e.stopPropagation(), o(t);
                          })(t, e);
                        },
                      })
                    : r.a.createElement(ge.a, {
                        className: 'attachment-button',
                        img: 'icon-download',
                        onClick: function (t) {
                          return u(t, e);
                        },
                      })
                )
              );
            })
          );
        },
        Qe = n(365),
        et = n(1382),
        tt = function (e) {
          var t = {};
          if (
            (e['font-weight'] && (t.bold = !0),
            e['font-style'] && (t.italic = !0),
            e.color && (t.color = e.color),
            e['text-decoration'])
          ) {
            var n = e['text-decoration'].split(' ');
            n.includes('line-through') && (t.strike = !0),
              n.includes('word') && (t.underline = !0);
          }
          return t;
        },
        nt = function (e, t) {
          for (
            var n = e.getRichTextStyle(),
              o = Object.keys(n),
              r = t.getText(),
              i = [],
              a = 0;
            a < o.length;
            a++
          ) {
            var l = n[o[a]],
              c = tt(l);
            if (!isNaN(o[a])) {
              var s = isNaN(o[a + 1]) ? r.length : o[a + 1],
                u = r.slice(o[a], s);
              i.push({ insert: u, attributes: c });
            }
          }
          t.setContents(i), t.setSelection(r.length, 0);
        },
        ot = n(61),
        rt = n(310),
        it = n(2),
        at = n(35),
        lt = n(5);
      n(1419);
      function ct(e) {
        return (ct =
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
      function st() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ st =
          function () {
            return e;
          };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          r = 'function' == typeof Symbol ? Symbol : {},
          i = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          l = r.toStringTag || '@@toStringTag';
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
        function s(e, t, n, r) {
          var i = t && t.prototype instanceof p ? t : p,
            a = Object.create(i.prototype),
            l = new O(r || []);
          return o(a, '_invoke', { value: x(e, n, l) }), a;
        }
        function u(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = s;
        var d = {};
        function p() {}
        function f() {}
        function h() {}
        var m = {};
        c(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          y = b && b(b(S([])));
        y && y !== t && n.call(y, i) && (m = y);
        var g = (h.prototype = p.prototype = Object.create(m));
        function v(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          var r;
          o(this, '_invoke', {
            value: function (o, i) {
              function a() {
                return new t(function (r, a) {
                  !(function o(r, i, a, l) {
                    var c = u(e[r], e, i);
                    if ('throw' !== c.type) {
                      var s = c.arg,
                        d = s.value;
                      return d && 'object' == ct(d) && n.call(d, '__await')
                        ? t.resolve(d.__await).then(
                            function (e) {
                              o('next', e, a, l);
                            },
                            function (e) {
                              o('throw', e, a, l);
                            }
                          )
                        : t.resolve(d).then(
                            function (e) {
                              (s.value = e), a(s);
                            },
                            function (e) {
                              return o('throw', e, a, l);
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
        function x(e, t, n) {
          var o = 'suspendedStart';
          return function (r, i) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === r) throw i;
              return j();
            }
            for (n.method = r, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = q(a, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === o) throw ((o = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = 'executing';
              var c = u(e, t, n);
              if ('normal' === c.type) {
                if (
                  ((o = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              'throw' === c.type &&
                ((o = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
            }
          };
        }
        function q(e, t) {
          var n = t.method,
            o = e.iterator[n];
          if (void 0 === o)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                q(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var r = u(o, e.iterator, t.arg);
          if ('throw' === r.type)
            return (
              (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), d
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function k(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                r = function t() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (t.value = e[o]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (r.next = r);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          o(g, 'constructor', { value: h, configurable: !0 }),
          o(h, 'constructor', { value: f, configurable: !0 }),
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
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new w(s(t, n, o, r), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
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
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var o in t) n.push(o);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var o = n.pop();
                  if (o in t) return (e.value = o), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = S),
          (O.prototype = {
            constructor: O,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
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
              function o(n, o) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  o && ((t.method = 'next'), (t.arg = void 0)),
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
            abrupt: function (e, t) {
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
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
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
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    k(n);
                  }
                  return r;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function ut(e, t, n, o, r, i, a) {
        try {
          var l = e[i](a),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      function dt(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return pt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return pt(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function pt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      h.a.extend(b.a);
      var ft = {
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
        ht = function (e) {
          var t,
            n = e.annotation,
            i = e.isEditing,
            l = e.setIsEditing,
            c = e.noteIndex,
            f = e.isUnread,
            h = e.isNonReplyNoteRead,
            m = e.onReplyClicked,
            b = e.isMultiSelected,
            y = e.isMultiSelectMode,
            v = e.handleMultiSelect,
            x = e.isGroupMember,
            E = dt(
              Object(s.e)(function (e) {
                return [
                  C.a.getNoteDateFormat(e),
                  C.a.getIconColor(e, Object(ot.g)(n)),
                  C.a.isElementDisabled(e, 'notePopupState'),
                  C.a.getCurrentLanguage(e),
                  C.a.notesShowLastUpdatedDate(e),
                  C.a.isNotesPanelTextCollapsingEnabled(e),
                  C.a.isNotesPanelRepliesCollapsingEnabled(e),
                  C.a.getActiveTheme(e),
                  C.a.getTimezone(e),
                ];
              }, s.c),
              9
            ),
            k = E[0],
            O = E[1],
            S = E[2],
            j = E[3],
            A = E[4],
            N = E[5],
            T = E[6],
            P = E[7],
            L = E[8],
            I = Object(o.useContext)(d.a),
            _ = I.isSelected,
            M = I.searchInput,
            R = I.resize,
            D = I.pendingEditTextMap,
            H = I.onTopNoteContentClicked,
            F = I.sortStrategy,
            z = I.showAnnotationNumbering,
            U = I.setPendingEditText,
            G = Object(s.d)(),
            B = dt(Object(u.a)(), 1)[0],
            W = n.isReply(),
            Y = dt(Object(o.useState)([]), 2),
            V = Y[0],
            $ = Y[1];
          Object(o.useEffect)(
            function () {
              $(n.getAttachments());
            },
            [n]
          ),
            Object(o.useEffect)(
              function () {
                var e = function (e, t) {
                  'modify' === t &&
                    e.forEach(function (e) {
                      e.Id === n.Id && $(e.getAttachments());
                    });
                };
                return (
                  w.a.addEventListener('annotationChanged', e),
                  function () {
                    w.a.removeEventListener('annotationChanged', e);
                  }
                );
              },
              [n]
            ),
            Object(rt.a)(
              function () {
                i || G(it.a.finishNoteEditing()), R();
              },
              [i]
            );
          var K,
            J = Object(o.useCallback)(
              function (e) {
                var t = w.a.getDisplayAuthor(e.Author);
                return t ? vt(t, M) : B('option.notesPanel.noteContent.noName');
              },
              [M]
            ),
            Z = Object(o.useCallback)(
              function (e, t, n) {
                var o = [];
                if (
                  (p.a.link(e, {
                    stripPrefix: !1,
                    stripTrailingSlash: !1,
                    replaceFn: function (e) {
                      var t = e.getAnchorHref(),
                        n = e.getAnchorText(),
                        r = e.getOffset();
                      switch (e.getType()) {
                        case 'url':
                        case 'email':
                        case 'phone':
                          o.push({
                            href: t,
                            text: n,
                            start: r,
                            end: r + e.getMatchedText().length,
                          });
                      }
                    },
                  }),
                  !o.length)
                ) {
                  var i = vt(e, M, t);
                  return M || (!(!W && N) && !(W && T))
                    ? i
                    : r.a.createElement(
                        be,
                        {
                          linesToBreak: 3,
                          comment: !0,
                          renderRichText: gt,
                          richTextStyle: t,
                          resize: R,
                          style: n,
                        },
                        e
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
                          vt(e, M, t, l, i)
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
                          vt(e, M, t, i, c)
                        )
                      ),
                      (l = c);
                  }),
                  l < e.length - 1 && a.push(vt(e, M, t, l)),
                  a
                );
              },
              [M]
            ),
            X = Object(ot.e)(Object(ot.g)(n)).icon;
          try {
            K = JSON.parse(n.getCustomData('trn-mention'));
          } catch (e) {
            K = n.getCustomData('trn-mention');
          }
          var Q =
              (null === (t = K) || void 0 === t ? void 0 : t.contents) ||
              n.getContents(),
            ee = n.getContents(),
            ne = n.getRichTextStyle(),
            re = n.TextColor;
          P === ie.a.DARK &&
            (re &&
              Object(oe.b)(re.toHexString()) &&
              (re = new window.Core.Annotations.Color(255, 255, 255, 1)),
            ne &&
              Object.keys(ne).forEach(function (e) {
                ne[e].color &&
                  Object(oe.b)(ne[e].color) &&
                  (ne[e].color = '#FFFFFF');
              }));
          var ae,
            le = void 0 === D[n.Id];
          ae = Q && le ? Q : D[n.Id];
          var ce = function (e) {
              var t;
              null !== (t = window.getSelection()) &&
                void 0 !== t &&
                t.toString() &&
                (null == e || e.stopPropagation());
            },
            se = a()({ NoteContent: !0, isReply: W, unread: f, clicked: h }),
            ue = Object(o.useMemo)(
              function () {
                var e = {};
                return (
                  re && (e.color = re.toHexString()),
                  r.a.createElement(
                    r.a.Fragment,
                    null,
                    i && _
                      ? r.a.createElement(bt, {
                          annotation: n,
                          noteIndex: c,
                          setIsEditing: l,
                          textAreaValue: ae,
                          onTextAreaValueChange: U,
                          pendingText: D[n.Id],
                        })
                      : ee &&
                          r.a.createElement(
                            'div',
                            {
                              className: a()('container', {
                                'reply-content': W,
                              }),
                              onClick: ce,
                            },
                            W &&
                              V.length > 0 &&
                              r.a.createElement(Xe, {
                                files: V,
                                isEditing: !1,
                              }),
                            Z(ee, ne, e)
                          )
                  )
                );
              },
              [n, _, i, l, Q, Z, ae, U, V]
            ),
            pe = n.getCustomData('trn-annot-preview'),
            fe = Object(o.useMemo)(
              function () {
                if ('' === pe) return null;
                var e = vt(pe, M),
                  t = !W && N;
                return g()(e) && t
                  ? r.a.createElement(
                      q.a,
                      {
                        className: 'selected-text-preview',
                        dataElement: 'notesSelectedTextPreview',
                      },
                      r.a.createElement(
                        be,
                        { linesToBreak: 3 },
                        '"'.concat(e, '"')
                      )
                    )
                  : r.a.createElement(
                      'div',
                      {
                        className: 'selected-text-preview',
                        style: { paddingRight: '12px' },
                      },
                      e
                    );
              },
              [pe, M]
            ),
            he = Object(o.useMemo)(
              function () {
                return r.a.createElement(de, {
                  icon: X,
                  iconColor: O,
                  annotation: n,
                  language: j,
                  noteDateFormat: k,
                  isSelected: _,
                  setIsEditing: l,
                  notesShowLastUpdatedDate: A,
                  isReply: W,
                  isUnread: f,
                  renderAuthorName: J,
                  isNoteStateDisabled: S,
                  isEditing: i,
                  noteIndex: c,
                  sortStrategy: F,
                  activeTheme: P,
                  handleMultiSelect: v,
                  isMultiSelected: b,
                  isMultiSelectMode: y,
                  isGroupMember: x,
                  showAnnotationNumbering: z,
                  timezone: L,
                });
              },
              [
                X,
                O,
                n,
                j,
                k,
                _,
                l,
                A,
                W,
                f,
                J,
                w.a.getDisplayAuthor(n.Author),
                S,
                i,
                c,
                Object(te.a)(n),
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
              className: se,
              onClick: function () {
                x || (W ? m(n) : i || H());
              },
            },
            he,
            fe,
            ue
          );
        };
      ht.propTypes = ft;
      var mt = ht,
        bt = function (e) {
          var t = e.annotation,
            n = e.noteIndex,
            i = e.setIsEditing,
            l = e.textAreaValue,
            c = e.onTextAreaValueChange,
            p = e.pendingText,
            f = dt(
              Object(s.e)(function (e) {
                return [
                  C.a.getAutoFocusNoteOnAnnotationSelection(e),
                  C.a.getIsMentionEnabled(e),
                  C.a.isElementDisabled(e, lt.a.INLINE_COMMENT_POPUP),
                  C.a.isElementOpen(e, lt.a.INLINE_COMMENT_POPUP),
                  C.a.isElementOpen(e, lt.a.NOTES_PANEL),
                  C.a.getActiveDocumentViewerKey(e),
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
            q = dt(Object(u.a)(), 1)[0],
            E = Object(o.useRef)(),
            k = t.isReply(),
            O = Object(o.useContext)(d.a),
            S = O.setCurAnnotId,
            j = O.pendingAttachmentMap,
            A = O.deleteAttachment,
            N = O.clearAttachments,
            T = O.addAttachments,
            P = !b && y && Object(at.l)();
          Object(o.useEffect)(
            function () {
              if ((g || y) && E.current) {
                var e = E.current.getEditor();
                t &&
                  t instanceof window.Core.Annotations.FreeTextAnnotation &&
                  e.setText(''),
                  p && Object(et.a)(e, t),
                  setTimeout(function () {
                    if (m) {
                      l = Qe.a.getFormattedTextFromDeltas(e.getContents());
                      var n = Qe.a.extractMentionDataFromStr(l),
                        o = n.plainTextValue;
                      n.ids.length && e.setText(o);
                    }
                    P ||
                      (E &&
                        E.current &&
                        h &&
                        (E.current.focus(), t.getRichTextStyle() && nt(t, e)));
                  }, 100);
                var n = e.getLength() - 1;
                if (P) return;
                setTimeout(function () {
                  e.setSelection(n, n);
                }, 100);
              }
            },
            [g, y, P]
          ),
            Object(o.useEffect)(function () {
              if (k && 0 === _.length) {
                var e = t.getAttachments();
                T(t.Id, e);
              }
            }, []);
          var L = (function () {
              var e,
                o =
                  ((e = st().mark(function e(o) {
                    var r, a, s, u, d;
                    return st().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              o.preventDefault(),
                              (r = E.current.getEditor()),
                              (l = Qe.a.getFormattedTextFromDeltas(
                                r.getContents()
                              )),
                              Object(et.a)(r, t),
                              m
                                ? ((a = Qe.a.extractMentionDataFromStr(l)),
                                  (s = a.plainTextValue),
                                  (u = a.ids),
                                  Qe.a
                                    .extractMentionDataFromAnnot(t)
                                    .mentions.forEach(function (e) {
                                      s.includes(e.value) && u.push(e.id);
                                    }),
                                  t.setCustomData(
                                    'trn-mention',
                                    JSON.stringify({ contents: l, ids: u })
                                  ),
                                  t.setContents(s))
                                : t.setContents(l),
                              (e.next = 7),
                              Le(t, j[t.Id])
                            );
                          case 7:
                            (d =
                              t instanceof
                              window.Core.Annotations.FreeTextAnnotation
                                ? 'textChanged'
                                : 'noteChanged'),
                              w.a
                                .getAnnotationManager(x)
                                .trigger('annotationChanged', [
                                  [t],
                                  'modify',
                                  { source: d },
                                ]),
                              t instanceof
                                window.Core.Annotations.FreeTextAnnotation &&
                                w.a.drawAnnotationsFromList([t]),
                              i(!1, n),
                              '' !== l && c(void 0, t.Id),
                              N(t.Id);
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (o, r) {
                      var i = e.apply(t, n);
                      function a(e) {
                        ut(i, o, r, a, l, 'next', e);
                      }
                      function l(e) {
                        ut(i, o, r, a, l, 'throw', e);
                      }
                      a(void 0);
                    });
                  });
              return function (e) {
                return o.apply(this, arguments);
              };
            })(),
            I = a()('edit-content', { 'reply-content': k }),
            _ = j[t.Id] || [];
          return r.a.createElement(
            'div',
            { className: I },
            k &&
              _.length > 0 &&
              r.a.createElement(Xe, {
                files: _,
                isEditing: !0,
                fileDeleted: function (e) {
                  return A(t.Id, e);
                },
              }),
            r.a.createElement(v.a, {
              ref: function (e) {
                E.current = e;
              },
              value: l,
              onChange: function (e) {
                return c(e, t.Id);
              },
              onSubmit: L,
              isReply: k,
              onBlur: function () {
                S(void 0);
              },
              onFocus: function () {
                S(t.Id);
              },
            }),
            r.a.createElement(
              'div',
              { className: 'edit-buttons' },
              r.a.createElement(
                'button',
                {
                  className: 'cancel-button',
                  onClick: function (e) {
                    e.stopPropagation(), i(!1, n), c(void 0, t.Id), N(t.Id);
                  },
                },
                q('action.cancel')
              ),
              r.a.createElement(
                'button',
                {
                  className: 'save-button'.concat(l ? '' : ' disabled'),
                  disabled: !l,
                  onClick: function (e) {
                    e.stopPropagation(), L(e);
                  },
                },
                q('action.save')
              )
            )
          );
        };
      bt.propTypes = {
        noteIndex: c.a.number.isRequired,
        annotation: c.a.object.isRequired,
        setIsEditing: c.a.func.isRequired,
        textAreaValue: c.a.string,
        onTextAreaValueChange: c.a.func.isRequired,
        pendingText: c.a.string,
      };
      var yt = function (e, t, n) {
          var o = {
            fontWeight: t['font-weight'],
            fontStyle: t['font-style'],
            textDecoration: t['text-decoration'],
            color: t.color,
          };
          return (
            o.textDecoration &&
              (o.textDecoration = o.textDecoration.replace(
                'word',
                'underline'
              )),
            r.a.createElement('span', { style: o, key: n }, e)
          );
        },
        gt = function (e, t, n) {
          if (!t || !e) return e;
          for (
            var o = {},
              r = Object.keys(t)
                .map(Number)
                .sort(function (e, t) {
                  return e - t;
                }),
              i = 0;
            i < r.length;
            i++
          ) {
            var a = r[i] - n;
            if (
              ((o[(a = Math.min(Math.max(a, 0), e.length))] = t[r[i]]),
              a === e.length)
            )
              break;
          }
          for (
            var l = [],
              c = Object.keys(o)
                .map(Number)
                .sort(function (e, t) {
                  return e - t;
                }),
              s = 1;
            s < c.length;
            s++
          )
            l.push(
              yt(
                e.slice(c[s - 1], c[s]),
                o[c[s - 1]],
                'richtext_span_'.concat(s)
              )
            );
          return l;
        },
        vt = function (e, t, n) {
          var o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : e.length,
            a = e.slice(o, i),
            l = a.toLowerCase(),
            c = t.toLowerCase();
          n && ((n[0] = n[0] || {}), (n[e.length] = n[e.length] || {}));
          var s = l.indexOf(c);
          if (!c.trim() || -1 === s) return gt(a, n, o);
          var u = [],
            d = [s],
            p = c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          if (new RegExp('('.concat(p, ')'), 'gi').test(l))
            for (; -1 !== s; )
              -1 !== (s = l.indexOf(c, s + c.length)) && d.push(s);
          return (
            d.forEach(function (e, t) {
              0 === t && 0 !== e && u.push(gt(a.substring(0, e), n, o)),
                u.push(
                  r.a.createElement(
                    'span',
                    {
                      className: 'highlight',
                      key: 'highlight_span_'.concat(t),
                    },
                    gt(a.substring(e, e + c.length), n, o + e)
                  )
                ),
                e + c.length < l.length &&
                  e + c.length !== d[t + 1] &&
                  u.push(
                    gt(a.substring(e + c.length, d[t + 1]), n, o + e + c.length)
                  );
            }),
            u
          );
        },
        wt = mt;
      n(1421);
      function xt(e) {
        return (xt =
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
      function qt() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ qt =
          function () {
            return e;
          };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          r = 'function' == typeof Symbol ? Symbol : {},
          i = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          l = r.toStringTag || '@@toStringTag';
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
        function s(e, t, n, r) {
          var i = t && t.prototype instanceof p ? t : p,
            a = Object.create(i.prototype),
            l = new O(r || []);
          return o(a, '_invoke', { value: x(e, n, l) }), a;
        }
        function u(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = s;
        var d = {};
        function p() {}
        function f() {}
        function h() {}
        var m = {};
        c(m, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          y = b && b(b(S([])));
        y && y !== t && n.call(y, i) && (m = y);
        var g = (h.prototype = p.prototype = Object.create(m));
        function v(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          var r;
          o(this, '_invoke', {
            value: function (o, i) {
              function a() {
                return new t(function (r, a) {
                  !(function o(r, i, a, l) {
                    var c = u(e[r], e, i);
                    if ('throw' !== c.type) {
                      var s = c.arg,
                        d = s.value;
                      return d && 'object' == xt(d) && n.call(d, '__await')
                        ? t.resolve(d.__await).then(
                            function (e) {
                              o('next', e, a, l);
                            },
                            function (e) {
                              o('throw', e, a, l);
                            }
                          )
                        : t.resolve(d).then(
                            function (e) {
                              (s.value = e), a(s);
                            },
                            function (e) {
                              return o('throw', e, a, l);
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
        function x(e, t, n) {
          var o = 'suspendedStart';
          return function (r, i) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === r) throw i;
              return j();
            }
            for (n.method = r, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = q(a, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === o) throw ((o = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = 'executing';
              var c = u(e, t, n);
              if ('normal' === c.type) {
                if (
                  ((o = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              'throw' === c.type &&
                ((o = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
            }
          };
        }
        function q(e, t) {
          var n = t.method,
            o = e.iterator[n];
          if (void 0 === o)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                q(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var r = u(o, e.iterator, t.arg);
          if ('throw' === r.type)
            return (
              (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), d
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function k(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                r = function t() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (t.value = e[o]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (r.next = r);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          o(g, 'constructor', { value: h, configurable: !0 }),
          o(h, 'constructor', { value: f, configurable: !0 }),
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
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new w(s(t, n, o, r), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
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
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var o in t) n.push(o);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var o = n.pop();
                  if (o in t) return (e.value = o), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = S),
          (O.prototype = {
            constructor: O,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
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
              function o(n, o) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  o && ((t.method = 'next'), (t.arg = void 0)),
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
            abrupt: function (e, t) {
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
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
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
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    k(n);
                  }
                  return r;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function Et(e, t, n, o, r, i, a) {
        try {
          var l = e[i](a),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      function kt(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return Ot(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Ot(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Ot(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var St = { annotation: c.a.object.isRequired },
        jt = function (e) {
          var t = e.annotation,
            n = e.isUnread,
            i = e.onPendingReplyChange,
            l = kt(
              Object(s.e)(function (e) {
                var n;
                return [
                  C.a.getAutoFocusNoteOnAnnotationSelection(e),
                  C.a.isDocumentReadOnly(e),
                  C.a.isElementDisabled(e, 'noteReply'),
                  null === (n = C.a.getIsReplyDisabled(e)) || void 0 === n
                    ? void 0
                    : n(t),
                  C.a.getIsMentionEnabled(e),
                  C.a.getIsNoteEditing(e),
                  C.a.isElementDisabled(e, lt.a.INLINE_COMMENT_POPUP),
                  C.a.isElementOpen(e, lt.a.INLINE_COMMENT_POPUP),
                  C.a.getActiveDocumentViewerKey(e),
                ];
              }, s.c),
              9
            ),
            c = l[0],
            u = l[1],
            p = l[2],
            f = l[3],
            h = l[4],
            m = l[5],
            b = l[6],
            y = l[7],
            g = l[8],
            x = Object(o.useContext)(d.a),
            q = x.isContentEditable,
            E = x.isSelected,
            k = x.pendingReplyMap,
            O = x.setPendingReply,
            S = x.isExpandedFromSearch,
            j = x.scrollToSelectedAnnot,
            A = x.setCurAnnotId,
            N = x.pendingAttachmentMap,
            T = x.clearAttachments,
            P = x.deleteAttachment,
            L = kt(Object(o.useState)(!1), 2),
            I = L[0],
            _ = L[1],
            M = Object(s.d)(),
            R = Object(o.useRef)(),
            D = !b && y && Object(at.l)();
          Object(rt.a)(
            function () {
              I || M(it.a.finishNoteEditing());
            },
            [I]
          ),
            Object(o.useEffect)(
              function () {
                D || (m && E && !q && c && R && R.current && R.current.focus());
              },
              [q, m, E, D]
            ),
            Object(o.useEffect)(function () {
              if (
                (!S &&
                  j &&
                  setTimeout(function () {
                    R && R.current && c && R.current.focus();
                  }, 100),
                R && R.current)
              ) {
                if (D) return;
                var e = R.current.getEditor().getLength() - 1;
                setTimeout(function () {
                  R.current && R.current.editor.setSelection(e, e);
                }, 100);
              }
            }, []);
          var H = (function () {
              var e,
                n =
                  ((e = qt().mark(function e(n) {
                    var o, r, i, a, l, c, s, u;
                    return qt().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (n.preventDefault(),
                              n.stopPropagation(),
                              (o = R.current.getEditor()),
                              (r = Qe.a.getFormattedTextFromDeltas(
                                o.getContents()
                              )).trim())
                            ) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt('return');
                          case 6:
                            if (((i = !t.getContents()), !h)) {
                              e.next = 21;
                              break;
                            }
                            if (!i || !q) {
                              e.next = 14;
                              break;
                            }
                            (a = Qe.a.extractMentionDataFromStr(r)),
                              (l = a.plainTextValue),
                              (c = a.ids),
                              t.setCustomData(
                                'trn-mention',
                                JSON.stringify({ contents: r, ids: c })
                              ),
                              w.a.setNoteContents(t, l, g),
                              (e.next = 19);
                            break;
                          case 14:
                            return (
                              (s = Qe.a.createMentionReply(t, r)),
                              Object(et.a)(o, s),
                              (e.next = 18),
                              Le(s, N[t.Id])
                            );
                          case 18:
                            w.a.addAnnotations([s], g);
                          case 19:
                            e.next = 31;
                            break;
                          case 21:
                            if (!i || !q) {
                              e.next = 26;
                              break;
                            }
                            w.a.setNoteContents(t, r, g),
                              Object(et.a)(o, t),
                              (e.next = 31);
                            break;
                          case 26:
                            return (
                              (u = w.a.createAnnotationReply(t, r)),
                              Object(et.a)(o, u),
                              (e.next = 30),
                              Le(u, N[t.Id])
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
                            O('', t.Id), T(t.Id);
                          case 33:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (o, r) {
                      var i = e.apply(t, n);
                      function a(e) {
                        Et(i, o, r, a, l, 'next', e);
                      }
                      function l(e) {
                        Et(i, o, r, a, l, 'throw', e);
                      }
                      a(void 0);
                    });
                  });
              return function (e) {
                return n.apply(this, arguments);
              };
            })(),
            F = u || p || f,
            z = a()({ 'reply-area': !0, unread: n }),
            U = a()({ 'reply-button': !0, disabled: !k[t.Id] }),
            G = N[t.Id] || [];
          return F || !E
            ? null
            : r.a.createElement(
                'form',
                { onSubmit: H, className: 'reply-area-container' },
                G.length > 0 &&
                  r.a.createElement(Xe, {
                    files: G,
                    isEditing: !0,
                    fileDeleted: function (e) {
                      return P(t.Id, e);
                    },
                  }),
                r.a.createElement(
                  'div',
                  { className: 'reply-area-with-button' },
                  r.a.createElement(
                    'div',
                    {
                      className: z,
                      onMouseDown: function (e) {
                        return e.stopPropagation();
                      },
                    },
                    r.a.createElement(v.a, {
                      ref: function (e) {
                        R.current = e;
                      },
                      value: k[t.Id],
                      onChange: function (e) {
                        return (function (e) {
                          O(e, t.Id), i && i();
                        })(e);
                      },
                      onSubmit: H,
                      onBlur: function () {
                        _(!1), A(void 0);
                      },
                      onFocus: function () {
                        _(!0), A(t.Id);
                      },
                      isReply: !0,
                    })
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'reply-button-container' },
                    r.a.createElement(ge.a, {
                      img: 'icon-post-reply',
                      className: U,
                      onClick: H,
                      isSubmitType: !0,
                    })
                  )
                )
              );
        };
      jt.propTypes = St;
      var At = jt;
      function Nt(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return Tt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Tt(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Tt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Ct = {
          groupAnnotations: c.a.array.isRequired,
          isMultiSelectMode: c.a.bool.isRequired,
        },
        Pt = function (e) {
          var t = e.groupAnnotations,
            n = e.isMultiSelectMode,
            i = Nt(Object(u.a)(), 1)[0],
            a = Object(s.d)(),
            l = Nt(Object(o.useState)(!1), 2),
            c = l[0],
            d = l[1],
            p = r.a.createElement(
              'div',
              {
                onClick: function (e) {
                  e.preventDefault(), e.stopPropagation(), d(!0);
                },
                className: 'text-button',
              },
              i('component.noteGroupSection.open'),
              r.a.createElement(E.a, { glyph: 'ic_chevron_down_black_24px' })
            ),
            f = r.a.createElement(
              'div',
              {
                onClick: function (e) {
                  e.preventDefault(), e.stopPropagation(), d(!1);
                },
                className: 'text-button',
              },
              i('component.noteGroupSection.close'),
              r.a.createElement(E.a, { glyph: 'ic_chevron_up_black_24px' })
            );
          return r.a.createElement(
            'div',
            { className: 'group-section' },
            c ? f : p,
            c &&
              t.map(function (e, t) {
                return 0 === t
                  ? null
                  : r.a.createElement(
                      'div',
                      {
                        key: e.Id,
                        className: 'group-child',
                        onClick: function (t) {
                          t.preventDefault(),
                            t.stopPropagation(),
                            w.a.selectAnnotation(e),
                            w.a.jumpToAnnotation(e),
                            a(it.a.openElement('annotationPopup'));
                        },
                      },
                      r.a.createElement(wt, {
                        key: e.Id,
                        annotation: e,
                        isUnread: !1,
                        isGroupMember: !0,
                        isMultiSelectMode: n,
                      })
                    );
              })
          );
        };
      Pt.propTypes = Ct;
      var Lt = Pt,
        It = n(87),
        _t = n(312),
        Mt = (n(1423), n(23));
      function Rt(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return Dt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Dt(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Dt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Ht = function (e) {
          var t = e.children,
            n = Object(Mt.a)().querySelector('#line-connector-root'),
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
            Object(It.createPortal)(t, r)
          );
        },
        Ft = function (e) {
          var t = e.annotation,
            n = e.noteContainerRef,
            i = Rt(
              Object(s.e)(function (e) {
                return [
                  C.a.getNotesPanelWidth(e),
                  C.a.isElementOpen(e, 'annotationNoteConnectorLine'),
                  C.a.isElementOpen(e, 'notesPanel'),
                  C.a.isElementDisabled(e, 'annotationNoteConnectorLine'),
                  C.a.getDocumentContainerWidth(e),
                  C.a.getDocumentContainerHeight(e),
                  C.a.getActiveDocumentViewerKey(e),
                ];
              }, s.c),
              7
            ),
            a = i[0],
            l = i[1],
            c = i[2],
            u = i[3],
            d = i[4],
            p = i[5],
            f = i[6],
            h = Object(s.d)(),
            m = Rt(Object(o.useState)(0), 2),
            b = m[0],
            y = m[1],
            g = Rt(Object(o.useState)(0), 2),
            v = g[0],
            x = g[1],
            q = Rt(Object(o.useState)(0), 2),
            E = q[0],
            k = q[1],
            O = Rt(Object(o.useState)(0), 2),
            S = O[0],
            j = O[1],
            A = Rt(Object(o.useState)(0), 2),
            N = A[0],
            T = A[1],
            P = Rt(Object(o.useState)(0), 2),
            L = P[0],
            I = P[1],
            _ = Object(_t.d)(t, f),
            M = _.bottomRight,
            R = _.topLeft,
            D = Object(o.useCallback)(
              function () {
                return 'Note' === t.Subject ? 4 : 15;
              },
              [t]
            );
          if (
            (Object(o.useEffect)(
              function () {
                var e = w.a.getScrollViewElement(f),
                  o = e.scrollTop,
                  r = e.scrollLeft,
                  i = M.x - R.x,
                  l = M.y - R.y,
                  c = window.isApryseWebViewerWebComponent
                    ? Object(Mt.a)().host.clientWidth
                    : window.innerWidth,
                  s = window.isApryseWebViewerWebComponent
                    ? Object(Mt.a)().host.offsetLeft
                    : 0;
                k(a - 16), x(n.current.getBoundingClientRect().top);
                var u = c + s - a - R.x + 16 + r - i;
                y(0.75 * u);
                var d = t.getNoZoomReferencePoint(),
                  p = t.NoZoom && d.x ? d.x * l : 0;
                j(u - b - D() + p), I(a - 16 + b);
                var m = t.NoZoom && d.y ? d.y * l : 0;
                T(R.y + l / 2 - o - m);
                var g = function () {
                  h(it.a.closeElement('annotationNoteConnectorLine'));
                };
                return (
                  w.a.addEventListener('pageNumberUpdated', g, void 0, f),
                  function () {
                    w.a.removeEventListener('pageNumberUpdated', g, f);
                  }
                );
              },
              [n, a, M, R, d, p, h, f]
            ),
            l && c && !u)
          ) {
            var H = Math.abs(v - N),
              F = v > N ? N + 2 : v;
            return r.a.createElement(
              Ht,
              null,
              r.a.createElement('div', {
                className: 'horizontalLine',
                style: { width: b, right: E, top: v },
              }),
              r.a.createElement('div', {
                className: 'verticalLine',
                style: { height: H, top: F, right: E + b },
              }),
              r.a.createElement(
                'div',
                {
                  className: 'horizontalLine',
                  style: { width: S, right: L, top: N },
                },
                r.a.createElement('div', { className: 'arrowHead' })
              )
            );
          }
          return null;
        };
      n(1425);
      function zt(e) {
        return (zt =
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
      function Ut(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Gt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ut(Object(n), !0).forEach(function (t) {
                Bt(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Ut(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function Bt(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== zt(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || 'default');
                if ('object' !== zt(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === zt(t) ? t : String(t);
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
      function Wt(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return Yt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Yt(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Yt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Vt = {
          annotation: c.a.object.isRequired,
          isMultiSelected: c.a.bool,
          isMultiSelectMode: c.a.bool,
          isInNotesPanel: c.a.bool,
          handleMultiSelect: c.a.func,
        },
        $t = 0,
        Kt = function (e) {
          var t = e.annotation,
            n = e.isMultiSelected,
            i = e.isMultiSelectMode,
            l = e.isInNotesPanel,
            c = e.handleMultiSelect,
            p = Object(o.useContext)(d.a),
            f = p.isSelected,
            h = p.resize,
            m = p.pendingEditTextMap,
            b = p.isContentEditable,
            y = p.isDocumentReadOnly,
            g = p.isExpandedFromSearch,
            v = Object(o.useRef)(),
            x = Object(o.useRef)(),
            q = Wt(Object(o.useState)({}), 2),
            E = q[0],
            k = q[1],
            O = Object(o.useRef)([]),
            S = Object(s.d)(),
            j = Wt(Object(u.a)(), 1)[0],
            A = new Set(),
            N = Wt(
              Object(s.e)(function (e) {
                return [
                  C.a.getNoteTransformFunction(e),
                  C.a.getCustomNoteSelectionFunction(e),
                  C.a.getUnreadAnnotationIdSet(e),
                  C.a.isCommentThreadExpansionEnabled(e),
                  C.a.isRightClickAnnotationPopupEnabled(e),
                  C.a.getActiveDocumentViewerKey(e),
                ];
              }, s.c),
              6
            ),
            T = N[0],
            P = N[1],
            L = N[2],
            I = N[3],
            _ = N[4],
            M = N[5],
            R = t.getReplies().sort(function (e, t) {
              return e.DateCreated - t.DateCreated;
            });
          R.filter(function (e) {
            return L.has(e.Id);
          }).forEach(function (e) {
            return A.add(e.Id);
          }),
            Object(o.useEffect)(
              function () {
                var e = function (e, t) {
                  'delete' === t &&
                    e.forEach(function (e) {
                      L.has(e.Id) &&
                        S(
                          it.a.setAnnotationReadState({
                            isRead: !0,
                            annotationId: e.Id,
                          })
                        );
                    });
                };
                return (
                  w.a.addEventListener('annotationChanged', e, void 0, M),
                  function () {
                    w.a.removeEventListener('annotationChanged', e, M);
                  }
                );
              },
              [L]
            ),
            Object(o.useEffect)(function () {
              var e = x.current,
                t = v.current.getBoundingClientRect().height;
              (x.current = t), e && Math.round(e) !== Math.round(t) && h();
            }),
            Object(o.useEffect)(function () {
              if (T) {
                var e = Object(Mt.a)().getElementsByClassName('NotesPanel')[0];
                O.current.forEach(function (t) {
                  var n = e.querySelector(
                    '[data-webviewer-custom-element='.concat(t, ']')
                  );
                  n && n.parentNode.removeChild(n);
                }),
                  (O.current = []);
                var n = { annotation: t, isSelected: f };
                T(v.current, n, function () {
                  var e,
                    t = (e = document).createElement.apply(e, arguments),
                    n = 'custom-element-'.concat($t);
                  return (
                    $t++,
                    O.current.push(n),
                    t.setAttribute('data-webviewer-custom-element', n),
                    t.addEventListener('mousedown', function (e) {
                      e.stopPropagation();
                    }),
                    t
                  );
                });
              }
            }),
            Object(o.useEffect)(
              function () {
                '' !== m[t.Id] && b && !y && W(!0, 0);
              },
              [y, b, W, t, i]
            ),
            Object(rt.a)(
              function () {
                (!y && b) || W(!1, 0);
              },
              [y, b, W]
            );
          var D = function (e) {
              e && e.stopPropagation(),
                L.has(t.Id) &&
                  S(
                    it.a.setAnnotationReadState({
                      isRead: !0,
                      annotationId: t.Id,
                    })
                  ),
                P && P(t),
                f ||
                  (w.a.deselectAllAnnotations(M),
                  setTimeout(function () {
                    return S(
                      it.a.openElement(lt.a.ANNOTATION_NOTE_CONNECTOR_LINE)
                    );
                  }, 300)),
                l &&
                  (w.a.selectAnnotation(t, M),
                  w.a.jumpToAnnotation(t, M),
                  _ || S(it.a.openElement(lt.a.ANNOTATION_POPUP)));
            },
            H = A.size > 0,
            F = a()({
              Note: !0,
              expanded: f,
              'is-multi-selected': n,
              unread: L.has(t.Id) || H,
            }),
            z = a()({ replies: !0, hidden: !f });
          Object(o.useEffect)(
            function () {
              i ||
                R.forEach(function (e, t) {
                  var n = m[e.Id];
                  '' !== n && void 0 !== n && f && W(!0, 1 + t);
                });
            },
            [f, i]
          ),
            Object(o.useEffect)(
              function () {
                i && W(!1, 0);
              },
              [i]
            );
          var U = !Object.values(E).some(function (e) {
              return e;
            }),
            G = function (e) {
              A.has(e.Id) &&
                (S(
                  it.a.setAnnotationReadState({
                    isRead: !0,
                    annotationId: e.Id,
                  })
                ),
                w.a.getAnnotationManager(M).selectAnnotation(e));
            },
            B = function () {
              if (A.size > 0) {
                var e = R.filter(function (e) {
                  return A.has(e.Id);
                });
                w.a.getAnnotationManager(M).selectAnnotations(e),
                  e.forEach(function (e) {
                    return S(
                      it.a.setAnnotationReadState({
                        isRead: !0,
                        annotationId: e.Id,
                      })
                    );
                  });
              }
            },
            W = Object(o.useCallback)(
              function (e, t) {
                k(function (n) {
                  return Gt(Gt({}, n), {}, Bt({}, t, e));
                });
              },
              [k]
            ),
            Y = w.a.getGroupAnnotations(t, M),
            V = Y.length > 1;
          Y.some(function (e) {
            return e instanceof window.Core.Annotations.CaretAnnotation;
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
              onKeyDown: function (e) {
                !(e.target === e.currentTarget) ||
                  ('Enter' !== e.key && ' ' !== e.key) ||
                  (e.preventDefault(), D());
              },
              id: 'note_'.concat(t.Id),
            },
            r.a.createElement(wt, {
              noteIndex: 0,
              annotation: t,
              setIsEditing: W,
              isEditing: E[0],
              isNonReplyNoteRead: !L.has(t.Id),
              isUnread: L.has(t.Id) || H,
              handleMultiSelect: c,
              isMultiSelected: n,
              isMultiSelectMode: i,
            }),
            (f || g || I) &&
              r.a.createElement(
                r.a.Fragment,
                null,
                R.length > 0 &&
                  r.a.createElement(
                    'div',
                    { className: z },
                    H &&
                      r.a.createElement(ge.a, {
                        dataElement: 'markAllReadButton',
                        className: 'mark-all-read-button',
                        label: j('action.markAllRead'),
                        onClick: B,
                      }),
                    R.map(function (e, t) {
                      return r.a.createElement(
                        'div',
                        {
                          className: 'reply',
                          id: 'note_reply_'.concat(e.Id),
                          key: 'note_reply_'.concat(e.Id),
                        },
                        r.a.createElement(wt, {
                          noteIndex: t + 1,
                          key: e.Id,
                          annotation: e,
                          setIsEditing: W,
                          isEditing: E[t + 1],
                          onReplyClicked: G,
                          isUnread: L.has(e.Id),
                          handleMultiSelect: c,
                          isMultiSelected: n,
                          isMultiSelectMode: i,
                        })
                      );
                    })
                  ),
                V &&
                  r.a.createElement(Lt, {
                    groupAnnotations: Y,
                    isMultiSelectMode: i,
                  }),
                U &&
                  !i &&
                  r.a.createElement(At, {
                    isUnread: $ && L.has($),
                    onPendingReplyChange: B,
                    annotation: t,
                  })
              ),
            f &&
              l &&
              r.a.createElement(Ft, { annotation: t, noteContainerRef: v })
          );
        };
      Kt.propTypes = Vt;
      var Jt = Kt;
      t.a = Jt;
    },
    1438: function (e, t, n) {
      'use strict';
      n(24),
        n(7),
        n(25),
        n(18),
        n(11),
        n(13),
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
        n(22);
      var o = n(0),
        r = n.n(o),
        i = n(4),
        a = n.n(i),
        l = n(6),
        c = n(174),
        s = n(362),
        u = n(339),
        d = n(246),
        p = n(1),
        f = n(1381),
        h = n(236),
        m = n(35),
        b = n(2),
        y = n(3),
        g = n(5);
      n(1403);
      function v(e) {
        return (v =
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
      function w(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== v(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || 'default');
                if ('object' !== v(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === v(t) ? t : String(t);
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
      function x(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return q(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return q(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function q(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var E = {
          annotations: a.a.array.isRequired,
          style: a.a.object.isRequired,
          properties: a.a.object.isRequired,
          isRedaction: a.a.bool,
          isFreeText: a.a.bool,
          isEllipse: a.a.bool,
          hasBackToMenu: a.a.bool,
          onBackToMenu: a.a.func,
        },
        k = function (e) {
          var t = e.annotations,
            n = e.style,
            o = e.isRedaction,
            i = e.isFreeText,
            a = e.isEllipse,
            v = e.isMeasure,
            q = e.colorMapKey,
            E = e.showLineStyleOptions,
            k = e.properties,
            O = e.hideSnapModeCheckbox,
            S = e.onResize,
            j = e.hasBackToMenu,
            A = e.onBackToMenu,
            N = x(
              Object(l.e)(function (e) {
                return [
                  y.a.isElementDisabled(e, g.a.ANNOTATION_STYLE_POPUP),
                  y.a.isToolDefaultStyleUpdateFromAnnotationPopupEnabled(e),
                ];
              }),
              2
            ),
            T = N[0],
            C = N[1],
            P = Object(l.d)(),
            L = x(Object(s.a)(), 1)[0],
            I = function (e, n) {
              var o = p.a.getAnnotationManager();
              t.forEach(function (t) {
                (t[e] = n), o.redrawAnnotation(t);
              });
            },
            _ = function (e, n) {
              t.forEach(function (t) {
                p.a.setAnnotationStyles(t, w({}, e, n)),
                  C && Object(h.a)(t.ToolName, e, n),
                  ('FontSize' !== e && 'Font' !== e) ||
                    (function (e) {
                      var t = window.Core.Annotations.FreeTextAnnotation;
                      if (
                        e instanceof t &&
                        e.getAutoSizeType() !== t.AutoSizeTypes.NONE
                      ) {
                        var n = p.a.getDocument(),
                          o = e.PageNumber,
                          r = n.getPageInfo(o),
                          i = n.getPageMatrix(o),
                          a = n.getPageRotation(o);
                        e.fitText(r, i, a);
                      }
                    })(t);
              });
            },
            M = function (e, n) {
              t.forEach(function (t) {
                p.a.setAnnotationStyles(t, w({}, e, n)),
                  C && Object(h.a)(t.ToolName, e, n);
              });
            },
            R = function (e, n) {
              t.forEach(function (t) {
                p.a.updateAnnotationRichTextStyle(t, w({}, e, n));
              });
            },
            D = function (e, n) {
              t.forEach(function (t) {
                var o = '';
                if ('start' === e) t.setStartStyle(n), (o = 'StartLineStyle');
                else if ('end' === e) t.setEndStyle(n), (o = 'EndLineStyle');
                else if ('middle' === e) {
                  var r = n.split(','),
                    i = r.shift();
                  (t.Style = i), (t.Dashes = r), (o = 'StrokeStyle');
                }
                C && Object(h.a)(t.ToolName, o, n),
                  p.a.getAnnotationManager().redrawAnnotation(t);
              }),
                p.a
                  .getAnnotationManager()
                  .trigger('annotationChanged', [t, 'modify', {}]);
            },
            H = function (e) {
              Object(m.l)() &&
                e.target === e.currentTarget &&
                P(b.a.closeElement(g.a.ANNOTATION_POPUP));
            },
            F = Object(f.a)('Popup AnnotationStylePopup', e);
          return T
            ? null
            : r.a.createElement(
                c.a,
                {
                  onResize: function () {
                    S && S();
                  },
                },
                function (e) {
                  var t = e.measureRef;
                  return r.a.createElement(
                    'div',
                    {
                      className: F,
                      'data-element': g.a.ANNOTATION_STYLE_POPUP,
                      onClick: H,
                      ref: t,
                    },
                    j &&
                      r.a.createElement(
                        'div',
                        {
                          className: 'back-to-menu-container',
                          'data-element':
                            g.a.ANNOTATION_STYLE_POPUP_BACK_BUTTON_CONTAINER,
                        },
                        r.a.createElement(d.a, {
                          className: 'back-to-menu-button',
                          dataElement: g.a.ANNOTATION_STYLE_POPUP_BACK_BUTTON,
                          label: L('action.backToMenu'),
                          img: 'icon-chevron-left',
                          onClick: A,
                        })
                      ),
                    r.a.createElement(u.a, {
                      hideSnapModeCheckbox: O,
                      colorMapKey: q,
                      style: n,
                      isFreeText: i,
                      isEllipse: a,
                      isMeasure: v,
                      onStyleChange: M,
                      onSliderChange: I,
                      onPropertyChange: _,
                      disableSeparator: !0,
                      properties: k,
                      onRichTextStyleChange: R,
                      isRedaction: o,
                      showLineStyleOptions: E,
                      onLineStyleChange: D,
                    })
                  );
                }
              );
        };
      k.propTypes = E;
      var O = k;
      t.a = O;
    },
    1439: function (e, t, n) {
      'use strict';
      var o = n(0),
        r = n.n(o),
        i = n(4),
        a = n.n(i),
        l = (n(1432), { renderContent: a.a.func, children: a.a.node }),
        c = function (e) {
          var t = e.renderContent ? e.renderContent() : e.children;
          return r.a.createElement('div', { className: 'ListSeparator' }, t);
        };
      c.propTypes = l;
      var s = r.a.memo(c);
      t.a = s;
    },
    1669: function (e, t, n) {
      var o = n(27),
        r = n(1670);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1670: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.multi-reply-place-holder{height:100px}.reply-area-multi-container{border-top:1px solid var(--divider);display:flex;flex-direction:column;width:100%;position:absolute;bottom:0;z-index:100;background:var(--panel-background)}.reply-area-multi-container form{width:100%;display:flex}.reply-area-multi-container .reply-area-multi-header{display:flex;flex-direction:row;margin-left:16px;margin-top:28px;position:relative;justify-content:space-between}.reply-area-multi-container .reply-area-multi-header .title{font-size:13px;font-weight:700;display:flex;align-items:center}.reply-area-multi-container .reply-area-multi-header .close-icon-container{display:flex;align-items:center;padding-right:12px;cursor:pointer;position:relative;top:1px}.reply-area-multi-container .reply-area-multi-header .close-icon-container .close-icon{width:22px;height:22px}.reply-area-multi-container .reply-button-container{display:flex;justify-content:flex-end;flex-direction:column}.reply-area-multi-container .reply-button{width:28px;height:28px;padding:0;border:none;background-color:transparent;right:10px;bottom:12px}:host(:not([data-tabbing=true])) .reply-area-multi-container .reply-button,html:not([data-tabbing=true]) .reply-area-multi-container .reply-button{outline:none}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.reply-area-multi-container .reply-button{width:80px}}.reply-area-multi-container .reply-button:hover{background:var(--blue-1)}.reply-area-multi-container .reply-button.disabled{cursor:not-allowed}.reply-area-multi-container .reply-area{position:relative;flex:1;margin:13px 17px 12px 16px;border-radius:4px;align-items:center;background:var(--component-background)}.reply-area-multi-container .reply-area.unread{background:rgba(0,165,228,.08)}.reply-area-multi-container .reply-area .comment-textarea .ql-container .ql-editor.ql-blank{padding:4px}.reply-area-multi-container .reply-area .comment-textarea .ql-container .ql-editor.ql-blank:before{left:4px}.reply-area-multi-container .add-attachment{display:none}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1671: function (e, t, n) {
      var o = n(27),
        r = n(1672);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1672: function (e, t, n) {
      (e.exports = n(28)(!1)).push([
        e.i,
        '.multi-style-container{border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);position:relative;right:20px;bottom:52px;pointer-events:auto}.multi-style-container *{box-sizing:border-box}',
        '',
      ]);
    },
    1673: function (e, t, n) {
      var o = n(27),
        r = n(1674);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1674: function (e, t, n) {
      (e.exports = n(28)(!1)).push([
        e.i,
        '.notes-panel-container .buttons-container{display:flex;grid-column-gap:8px;-moz-column-gap:8px;column-gap:8px;justify-content:space-between}.notes-panel-container .buttons-container .Button{height:28px;width:28px}.notes-panel-container .buttons-container .Button:hover:enabled{background:var(--view-header-button-hover)}.notes-panel-container .buttons-container .Button.active{background:var(--view-header-button-active)}.notes-panel-container .buttons-container .Button.active .Icon{color:var(--view-header-icon-active-fill)}.notes-panel-container .multi-select-footer{background:var(--panel-background);display:flex;border-top:1px solid #cfd4da;margin-top:auto;height:72px;align-items:center;justify-content:center;position:absolute;bottom:0;width:100%;z-index:100}.notes-panel-container .multi-select-footer .close-container{margin-top:auto;right:10px;position:absolute}',
        '',
      ]);
    },
    1675: function (e, t, n) {
      var o = n(27),
        r = n(1676);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1676: function (e, t, n) {
      (e.exports = n(28)(!1)).push([
        e.i,
        '.comments-counter{height:19px;margin-top:24px;margin-bottom:12px;font-size:16px}.comments-counter span{font-weight:700}[data-element=notesPanelHeader]{padding-right:18px}[data-element=notesPanelHeader] .buttons-container{display:flex;grid-column-gap:8px;-moz-column-gap:8px;column-gap:8px;justify-content:space-between}[data-element=notesPanelHeader] .buttons-container .Button{height:28px;width:28px;cursor:pointer}[data-element=notesPanelHeader] .buttons-container .Button:hover:enabled{background:var(--view-header-button-hover)}[data-element=notesPanelHeader] .buttons-container .Button.active{background:var(--view-header-button-active)}[data-element=notesPanelHeader] .buttons-container .Button.active .Icon{color:var(--view-header-icon-active-fill)}[data-element=notesPanelHeader] .sort-row{display:flex;justify-content:space-between;margin-bottom:16px}[data-element=notesPanelHeader] .sort-row .sort-container{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;align-self:flex-end}[data-element=notesPanelHeader] .sort-row .sort-container .label{margin-right:8px}[data-element=notesPanelHeader] .sort-row .sort-container .picked-option{text-align:left}[data-element=notesPanelHeader] .input-container{display:flex;position:relative;flex:1}[data-element=notesPanelHeader] .input-container input{width:100%;border:1px solid var(--border);border-radius:4px;color:var(--text-color);padding:4px 8px 6px}[data-element=notesPanelHeader] .input-container input:focus{outline:none;border:1px solid var(--focus-border)}[data-element=notesPanelHeader] .input-container input::-moz-placeholder{color:var(--placeholder-text)}[data-element=notesPanelHeader] .input-container input:-ms-input-placeholder{color:var(--placeholder-text)}[data-element=notesPanelHeader] .input-container input::placeholder{color:var(--placeholder-text)}[data-element=notesPanelHeader] .input-container .input-button{cursor:pointer;background:var(--primary-button);border-radius:4px;height:100%;width:40px;display:flex;align-items:center;justify-content:center;position:absolute;bottom:0;right:0}[data-element=notesPanelHeader] .input-container .input-button .Icon{width:20px;height:20px}[data-element=notesPanelHeader] .input-container .input-button svg{color:var(--primary-button-text)}[data-element=notesPanelHeader] .input-container .input-button:hover{background:var(--primary-button-hover)}[data-element=notesPanelHeader] .divider{height:1px;width:100%;background:var(--divider);margin:16px 0}',
        '',
      ]);
    },
    1677: function (e, t, n) {
      var o = n(27),
        r = n(1678);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              if (0 === o)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      o(r, i);
      e.exports = r.locals || {};
    },
    1678: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.notes-panel-container{z-index:65;background-color:var(--panel-background);display:flex;flex-direction:row;position:relative;overflow:hidden}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .notes-panel-container{z-index:95}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .notes-panel-container{z-index:95}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .notes-panel-container{border-left:1px solid var(--side-panel-border)}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .notes-panel-container{border-left:1px solid var(--side-panel-border)}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .notes-panel-container{position:fixed;top:0;right:0;height:100%;width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .notes-panel-container{position:fixed;top:0;right:0;height:100%;width:100%}}.notes-panel-container .NotesPanel{padding-left:16px;padding-bottom:0;display:flex;flex-direction:column;position:relative;padding-top:16px}.notes-panel-container .NotesPanel .close-container{display:flex;align-items:center;justify-content:flex-end}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .notes-panel-container .NotesPanel .close-container{height:64px;padding-right:12px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .notes-panel-container .NotesPanel .close-container{height:64px;padding-right:12px}}.notes-panel-container .NotesPanel .close-container .close-icon-container{display:flex;align-items:center;cursor:pointer}.notes-panel-container .NotesPanel .close-container .close-icon-container .close-icon{width:24px;height:24px}.notes-panel-container .NotesPanel .multi-select-place-holder{height:72px}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.notes-panel-container .NotesPanel .reply-area-container .reply-button{width:28px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .notes-panel-container .NotesPanel{width:100%;min-width:100%;padding-top:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .notes-panel-container .NotesPanel{width:100%;min-width:100%;padding-top:0}}.notes-panel-container .NotesPanel .no-annotations{display:flex;flex-direction:column;align-items:center}.notes-panel-container .NotesPanel .no-annotations .msg{text-align:center}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .notes-panel-container .NotesPanel .no-annotations .msg{line-height:15px;width:146px}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .notes-panel-container .NotesPanel .no-annotations .msg{line-height:15px;width:146px}}.notes-panel-container .NotesPanel .no-annotations .empty-icon,.notes-panel-container .NotesPanel .no-annotations .empty-icon svg{width:65px;height:83px}.notes-panel-container .NotesPanel .no-annotations .empty-icon *{fill:var(--gray-5);color:var(--gray-5)}.notes-panel-container .NotesPanel .normal-notes-container,.notes-panel-container .NotesPanel .virtualized-notes-container{margin-top:10px;flex:1;padding-right:18px}.notes-panel-container .NotesPanel .normal-notes-container{overflow:auto;overflow:overlay}.notes-panel-container .NotesPanel .note-wrapper:first-child .ListSeparator{margin-top:0;word-break:break-word}.notes-panel-container .NotesPanel .no-results{display:flex;flex-direction:column;align-items:center;padding-right:18px}.notes-panel-container .NotesPanel .no-results .msg{text-align:center}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .notes-panel-container .NotesPanel .no-results .msg{line-height:15px;width:92px}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .notes-panel-container .NotesPanel .no-results .msg{line-height:15px;width:92px}}.notes-panel-container .NotesPanel .no-results .empty-icon,.notes-panel-container .NotesPanel .no-results .empty-icon svg{width:65px;height:83px}.notes-panel-container .NotesPanel .no-results .empty-icon *{fill:var(--border);color:var(--border)}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1714: function (e, t, n) {
      'use strict';
      n.r(t);
      n(34),
        n(7),
        n(24),
        n(25),
        n(106),
        n(18),
        n(11),
        n(13),
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
        n(72),
        n(75),
        n(73),
        n(65),
        n(53);
      var o = n(0),
        r = n.n(o),
        i = n(1),
        a =
          (n(52),
          n(64),
          n(32),
          n(117),
          n(84),
          n(82),
          n(139),
          n(133),
          n(154),
          n(19)),
        l = n.n(a),
        c = n(6),
        s = n(362),
        u = n(4),
        d = n.n(u),
        p = n(174),
        f = n(527);
      function h(e) {
        return (h =
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
      function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                y(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : m(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function y(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== h(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || 'default');
                if ('object' !== h(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === h(t) ? t : String(t);
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
      function g(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return v(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return v(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var w = {
          notes: d.a.array.isRequired,
          children: d.a.func.isRequired,
          onScroll: d.a.func.isRequired,
          initialScrollTop: d.a.number.isRequired,
          selectedIndex: d.a.number,
          sortStrategy: d.a.string,
        },
        x = new f.b({ defaultHeight: 50, fixedWidth: !0 }),
        q = r.a.forwardRef(function (e, t) {
          var n = e.notes,
            i = e.children,
            a = e.onScroll,
            l = e.initialScrollTop,
            c = e.selectedIndex,
            s = e.sortStrategy,
            u = Object(o.useRef)(),
            d = g(Object(o.useState)(0), 2),
            h = d[0],
            m = d[1],
            y = g(Object(o.useState)({ width: 0, height: 0 }), 2),
            v = y[0],
            w = y[1],
            q = window.innerHeight;
          Object(o.useImperativeHandle)(t, function () {
            return {
              scrollToPosition: function (e) {
                u.current.scrollToPosition(e);
              },
              scrollToRow: function (e) {
                u.current.scrollToRow(e);
              },
            };
          }),
            Object(o.useEffect)(
              function () {
                u.current.scrollToPosition(l);
              },
              [l]
            ),
            Object(o.useEffect)(
              function () {
                var e, t;
                (x.clearAll(),
                null == u ||
                  null === (e = u.current) ||
                  void 0 === e ||
                  e.measureAllRows(),
                -1 !== c) &&
                  (null === (t = u.current) ||
                    void 0 === t ||
                    t.scrollToRow(c));
              },
              [c]
            ),
            Object(o.useEffect)(
              function () {
                var e, t;
                x.clearAll(),
                  null == u ||
                    null === (e = u.current) ||
                    void 0 === e ||
                    e.measureAllRows(),
                  null == u ||
                    null === (t = u.current) ||
                    void 0 === t ||
                    t.forceUpdateGrid();
              },
              [n.length, s]
            ),
            Object(o.useEffect)(function () {
              var e = function () {
                var e = window.innerHeight - q;
                e && (window.innerHeight < q && m(e), (q = window.innerHeight));
              };
              return (
                window.addEventListener('resize', e),
                function () {
                  window.removeEventListener('resize', e);
                }
              );
            });
          var E = function (e) {
              var t = e.scrollTop;
              a(t);
            },
            k = function (e) {
              var t = e.index,
                o = e.key,
                a = e.parent,
                l = e.style,
                c = n[t];
              return r.a.createElement(
                f.a,
                {
                  key: ''.concat(o).concat(c.Id),
                  cache: x,
                  columnIndex: 0,
                  parent: a,
                  rowIndex: t,
                },
                function (e) {
                  var o = e.measure;
                  return r.a.createElement(
                    'div',
                    { style: b(b({}, l), {}, { paddingRight: '12px' }) },
                    i(n, t, function () {
                      !(function (e) {
                        var t;
                        x.clear(e),
                          null === (t = u.current) ||
                            void 0 === t ||
                            t.recomputeRowHeights(e);
                      })(t),
                        o();
                    })
                  );
                }
              );
            };
          return r.a.createElement(
            p.a,
            {
              bounds: !0,
              offset: !0,
              onResize: function (e) {
                var t = e.bounds;
                w(b(b({}, t), {}, { height: t.height + 2 * h })), m(0);
              },
            },
            function (e) {
              var t = e.measureRef;
              return r.a.createElement(
                'div',
                { ref: t, className: 'virtualized-notes-container' },
                r.a.createElement(f.c, {
                  deferredMeasurementCache: x,
                  style: { outline: 'none' },
                  height: v.height - h,
                  width: v.width,
                  overscanRowCount: 10,
                  ref: u,
                  rowCount: n.length,
                  rowHeight: x.rowHeight,
                  rowRenderer: k,
                  onScroll: E,
                })
              );
            }
          );
        });
      (q.displayName = 'VirtualizedList'), (q.propTypes = w);
      var E = q,
        k =
          (n(39),
          {
            notes: d.a.array.isRequired,
            children: d.a.func.isRequired,
            onScroll: d.a.func.isRequired,
            initialScrollTop: d.a.number.isRequired,
          }),
        O = r.a.forwardRef(function (e, t) {
          var n = e.notes,
            i = e.children,
            a = e.onScroll,
            l = e.initialScrollTop,
            c = Object(o.useRef)();
          Object(o.useImperativeHandle)(t, function () {
            return {
              scrollToPosition: function (e) {
                c.current.scrollTop = e;
              },
              scrollToRow: function (e) {
                var t = c.current,
                  n = t.children[e],
                  o = t.getBoundingClientRect(),
                  r = n.getBoundingClientRect();
                (r.top >= o.top && r.top <= o.top + t.clientHeight) ||
                  (t.scrollTop = r.top + t.scrollTop - o.top);
              },
            };
          }),
            Object(o.useEffect)(
              function () {
                c.current.scrollTop = l;
              },
              [l]
            );
          return r.a.createElement(
            'div',
            {
              ref: c,
              className: 'normal-notes-container',
              onScroll: function (e) {
                a(e.target.scrollTop);
              },
              role: 'list',
            },
            n.map(function (e, t) {
              return r.a.createElement(
                r.a.Fragment,
                { key: ''.concat(t, '_').concat(e.Id) },
                i(n, t)
              );
            })
          );
        });
      (O.displayName = 'NormalList'), (O.propTypes = k);
      var S = O,
        j = n(1435),
        A = n(33),
        N = n(1373),
        T = n(1439),
        C = (n(221), n(21)),
        P = (n(146), n(1383)),
        L = n(365),
        I = n(1382),
        _ = n(3);
      n(1669);
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return R(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return R(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function R(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var D = function (e) {
          var t = e.annotations,
            n = e.onSubmit,
            a = e.onClose,
            u = M(
              Object(c.e)(function (e) {
                return [
                  _.a.getIsMentionEnabled(e),
                  _.a.getActiveDocumentViewerKey(e),
                ];
              }, c.c),
              2
            ),
            d = u[0],
            p = u[1],
            f = M(Object(o.useState)(''), 2),
            h = f[0],
            m = f[1],
            b = M(Object(s.a)(), 1)[0],
            y = Object(o.useRef)();
          Object(o.useEffect)(function () {
            y.current.focus();
          }, []);
          var g = l()({ 'reply-area': !0 });
          return r.a.createElement(
            'div',
            { className: 'reply-area-multi-container' },
            r.a.createElement(
              'div',
              { className: 'reply-area-multi-header' },
              r.a.createElement(
                'div',
                { className: 'title' },
                b('action.multiReplyAnnotations', { count: t.length })
              ),
              r.a.createElement(
                'div',
                { className: 'close-icon-container', onClick: a },
                r.a.createElement(A.a, {
                  glyph: 'ic_close_black_24px',
                  className: 'close-icon',
                })
              )
            ),
            r.a.createElement(
              'form',
              {
                onSubmit: function (e) {
                  e.preventDefault();
                  var o = y.current.getEditor(),
                    r = L.a.getFormattedTextFromDeltas(o.getContents());
                  r.trim() &&
                    (t.forEach(function (e) {
                      if (d) {
                        var t = L.a.createMentionReply(e, r);
                        i.a.addAnnotations([t], p), Object(I.a)(o, t);
                      } else {
                        var n = i.a.createAnnotationReply(e, r, p);
                        Object(I.a)(o, n);
                      }
                    }),
                    n());
                },
              },
              r.a.createElement(
                'div',
                {
                  className: g,
                  onMouseDown: function (e) {
                    return e.stopPropagation();
                  },
                },
                r.a.createElement(P.a, {
                  ref: function (e) {
                    y.current = e;
                  },
                  value: h,
                  onChange: function (e) {
                    return (function (e) {
                      m(e);
                    })(e);
                  },
                  isReply: !0,
                })
              ),
              r.a.createElement(
                'div',
                { className: 'reply-button-container' },
                r.a.createElement(C.a, {
                  img: 'icon-post-reply',
                  className: 'reply-button',
                  isSubmitType: !0,
                })
              )
            )
          );
        },
        H = n(223),
        F = n(1387),
        z = n(1438),
        U = n(147),
        G = n(1402),
        B = n(179),
        W = n(2),
        Y = n(61);
      n(1671);
      function V(e) {
        return (V =
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
      function $(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
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
              if ('object' !== V(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || 'default');
                if ('object' !== V(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === V(t) ? t : String(t);
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
      function Z(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return X(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return X(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function X(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Q = function (e) {
          var t = e.annotations,
            n = e.triggerElementName,
            i = e.onClose,
            a = void 0 === i ? function () {} : i,
            l = Object(c.d)(),
            s = Object(o.useRef)(),
            u = Z(Object(o.useState)([]), 2),
            d = u[0],
            p = u[1],
            f = Z(
              Object(o.useState)({ left: 'auto', right: 'auto', top: 'auto' }),
              2
            ),
            h = f[0],
            m = f[1];
          Object(U.a)(s, function (e) {
            var t = document
                .querySelector('[data-element='.concat(n, ']'))
                .contains(e.target),
              o = Object(B.e)(),
              r = Object(B.d)(),
              i = Object(B.c)();
            t || o || r || i || a();
          });
          var b = {};
          t.forEach(function (e) {
            b = K(K({}, b), Object(G.a)(e));
          });
          var y = t.find(function (e) {
              return (
                e instanceof window.Core.Annotations.FreeTextAnnotation &&
                (e.getIntent() ===
                  window.Core.Annotations.FreeTextAnnotation.Intent.FreeText ||
                  e.getIntent() ===
                    window.Core.Annotations.FreeTextAnnotation.Intent
                      .FreeTextCallout)
              );
            }),
            g = {};
          if (y) {
            var v,
              w,
              x,
              q,
              E,
              k,
              O,
              S,
              j,
              A,
              N,
              T = y.getRichTextStyle();
            g = {
              Font: y.Font,
              FontSize: y.FontSize,
              TextAlign: y.TextAlign,
              TextVerticalAlign: y.TextVerticalAlign,
              bold:
                null !==
                  (v =
                    'bold' ===
                    (null == T || null === (w = T[0]) || void 0 === w
                      ? void 0
                      : w['font-weight'])) &&
                void 0 !== v &&
                v,
              italic:
                null !==
                  (x =
                    'italic' ===
                    (null == T || null === (q = T[0]) || void 0 === q
                      ? void 0
                      : q['font-style'])) &&
                void 0 !== x &&
                x,
              underline:
                (null == T ||
                null === (E = T[0]) ||
                void 0 === E ||
                null === (k = E['text-decoration']) ||
                void 0 === k
                  ? void 0
                  : k.includes('underline')) ||
                (null == T ||
                null === (O = T[0]) ||
                void 0 === O ||
                null === (S = O['text-decoration']) ||
                void 0 === S
                  ? void 0
                  : S.includes('word')),
              strikeout:
                null !==
                  (j =
                    null == T ||
                    null === (A = T[0]) ||
                    void 0 === A ||
                    null === (N = A['text-decoration']) ||
                    void 0 === N
                      ? void 0
                      : N.includes('line-through')) &&
                void 0 !== j &&
                j,
            };
          }
          Object(o.useEffect)(
            function () {
              var e = [];
              if (
                (b.TextColor && e.push(Y.b.TEXT_COLOR),
                b.StrokeColor && e.push(Y.b.STROKE_COLOR),
                b.FillColor && e.push(Y.b.FILL_COLOR),
                Object(Y.k)('MultiStyle', e, e[0]))
              ) {
                var t = Object(Y.d)('currentStyleTab', 'iconColor');
                l(W.a.setColorMap(t));
                var n = Object(Y.e)('MultiStyle').styleTabs;
                p(n);
              }
            },
            [t]
          );
          return 0 === d.length
            ? null
            : r.a.createElement(
                F.a,
                { id: 'multi-style-popup-portal', position: h },
                r.a.createElement(
                  'div',
                  { className: 'multi-style-container', ref: s },
                  r.a.createElement(z.a, {
                    annotations: t,
                    style: b,
                    isOpen: !0,
                    onResize: function () {
                      var e = Object(H.a)(n, s);
                      m(e);
                    },
                    isFreeText: !!y,
                    colorMapKey: 'MultiStyle',
                    properties: g,
                    isRedaction: !1,
                    isMeasure: !1,
                    showLineStyleOptions: !1,
                    hideSnapModeCheckbox: !1,
                  })
                )
              );
        },
        ee = n(1394),
        te = n(1395),
        ne = n(5);
      n(1673);
      function oe(e) {
        return (oe =
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
      function re(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? re(Object(n), !0).forEach(function (t) {
                ae(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : re(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function ae(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== oe(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || 'default');
                if ('object' !== oe(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === oe(t) ? t : String(t);
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
      function le(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return ce(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ce(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ce(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var se = {
          showMultiReply: d.a.bool.isRequired,
          setShowMultiReply: d.a.func.isRequired,
          showMultiState: d.a.bool.isRequired,
          setShowMultiState: d.a.func.isRequired,
          showMultiStyle: d.a.bool.isRequired,
          setShowMultiStyle: d.a.func.isRequired,
          setMultiSelectMode: d.a.func.isRequired,
          isMultiSelectedMap: d.a.object.isRequired,
          setIsMultiSelectedMap: d.a.func.isRequired,
          multiSelectedAnnotations: d.a.array.isRequired,
        },
        ue = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            n = new Set();
          return (
            e.forEach(function (e) {
              if (e.isGrouped()) {
                var o = i.a.getAnnotationById(e.InReplyTo, t);
                o && n.add(o);
              } else n.add(e);
            }),
            Array.from(n)
          );
        },
        de = function (e) {
          var t = e.showMultiReply,
            n = e.setShowMultiReply,
            a = e.showMultiState,
            u = e.setShowMultiState,
            d = e.showMultiStyle,
            p = e.setShowMultiStyle,
            f = e.setMultiSelectMode,
            h = e.isMultiSelectedMap,
            m = e.setIsMultiSelectedMap,
            b = e.multiSelectedAnnotations,
            y = le(Object(o.useState)([]), 2),
            g = y[0],
            v = y[1],
            w = Object(c.d)(),
            x = le(Object(s.a)(), 1)[0],
            q = le(
              Object(c.e)(function (e) {
                return [_.a.getActiveDocumentViewerKey(e)];
              }),
              1
            )[0];
          Object(o.useEffect)(
            function () {
              var e = function (e, t) {
                if ('delete' === t) {
                  var n = ie({}, h);
                  e.forEach(function (e) {
                    delete n[e.Id];
                  }),
                    m(n);
                } else if ('modify' === t) {
                  var o = ie({}, h);
                  e.forEach(function (e) {
                    var t = i.a.getGroupAnnotations(e, q);
                    t.some(function (e) {
                      return h[e.Id];
                    }) &&
                      t.forEach(function (e) {
                        o[e.Id] = e;
                      });
                  });
                  var r = Object.keys(h),
                    a = Object.keys(h);
                  r.filter(function (e) {
                    return !a.includes(e);
                  }).length > 0 && m(o);
                }
              };
              return (
                i.a.addEventListener('annotationChanged', e, void 0, q),
                function () {
                  i.a.removeEventListener('annotationChanged', e, q);
                }
              );
            },
            [h, q]
          ),
            Object(o.useEffect)(function () {
              return function () {
                n(!1), m({});
              };
            }, []),
            Object(o.useEffect)(
              function () {
                var e = b.filter(function (e) {
                  return i.a.canModify(e, q);
                });
                v(e);
              },
              [b]
            );
          var E = i.a.getNumberOfGroups(g, q) > 1,
            k =
              !E &&
              (g.length > 2 ||
                (g.length > 0 && i.a.getGroupAnnotations(g[0], q).length > 1));
          return t
            ? r.a.createElement(
                N.a.Provider,
                { value: { resize: function () {} } },
                r.a.createElement(D, {
                  annotations: ue(b, q),
                  onSubmit: function () {
                    return n(!1);
                  },
                  onClose: function () {
                    return n(!1);
                  },
                })
              )
            : r.a.createElement(
                'div',
                { className: 'multi-select-footer' },
                r.a.createElement(
                  'div',
                  { className: 'buttons-container' },
                  r.a.createElement(C.a, {
                    dataElement: ne.a.NOTE_MULTI_REPLY_BUTTON,
                    disabled: 0 === b.length,
                    img: 'icon-header-chat-line',
                    onClick: function () {
                      n(!0);
                    },
                    title: 'action.comment',
                  }),
                  r.a.createElement(C.a, {
                    dataElement: ne.a.NOTE_MULTI_STATE_BUTTON,
                    className: l()({ active: a }),
                    disabled: 0 === g.length,
                    img: 'icon-annotation-status-none',
                    onClick: function () {
                      u(!a);
                    },
                    title: 'option.notesOrder.status',
                  }),
                  a &&
                    r.a.createElement(ee.a, {
                      style: { position: 'relative', bottom: '52px' },
                      triggerElementName: 'multiStateButton',
                      handleStateChange: function (e) {
                        ue(b, q).forEach(function (t) {
                          var n = Object(te.a)(t, e, q);
                          t.addReply(n);
                          var o = i.a.getAnnotationManager(q);
                          o.addAnnotation(n),
                            o.trigger('addReply', [
                              n,
                              t,
                              o.getRootAnnotation(t),
                            ]);
                        }),
                          u(!1);
                      },
                      onClose: function () {
                        u(!1);
                      },
                    }),
                  r.a.createElement(C.a, {
                    dataElement: ne.a.NOTE_MULTI_STYLE_BUTTON,
                    img: 'icon-menu-style-line',
                    disabled: 0 === g.length,
                    onClick: function () {
                      p(!d);
                    },
                    title: 'action.style',
                  }),
                  d &&
                    r.a.createElement(Q, {
                      annotations: g,
                      triggerElementName: 'multiStyleButton',
                      onClose: function () {
                        p(!1);
                      },
                    }),
                  !k &&
                    r.a.createElement(C.a, {
                      dataElement: ne.a.NOTE_MULTI_GROUP_BUTTON,
                      disabled: !E,
                      img: 'group-annotations-icon',
                      onClick: function () {
                        i.a.groupAnnotations(b[0], b, q);
                      },
                      title: 'action.group',
                    }),
                  k &&
                    r.a.createElement(C.a, {
                      dataElement: ne.a.NOTE_MULTI_UNGROUP_BUTTON,
                      img: 'ungroup-annotations-icon',
                      onClick: function () {
                        i.a.ungroupAnnotations(b, q);
                      },
                      title: 'action.ungroup',
                    }),
                  r.a.createElement(C.a, {
                    dataElement: ne.a.NOTE_MULTI_DELETE_BUTTON,
                    disabled: 0 === g.length,
                    img: 'icon-delete-line',
                    onClick: function () {
                      var e = {
                        title: x('warning.multiDeleteAnnotation.title'),
                        message: x('warning.multiDeleteAnnotation.message'),
                        confirmBtnText: x('action.delete'),
                        onConfirm: function () {
                          i.a.deleteAnnotations(g, q);
                        },
                      };
                      w(W.a.showWarningMessage(e));
                    },
                    title: 'action.delete',
                  })
                ),
                r.a.createElement(
                  'div',
                  { className: 'close-container' },
                  r.a.createElement(
                    'div',
                    {
                      className: 'close-icon-container',
                      onClick: function () {
                        f(!1);
                      },
                    },
                    r.a.createElement(A.a, {
                      glyph: 'ic_close_black_24px',
                      className: 'close-icon',
                    })
                  )
                )
              );
        };
      de.propTypes = se;
      var pe = de,
        fe = n(224),
        he = n(178),
        me = n.n(he),
        be = n(148),
        ye = n(57),
        ge = n(43),
        ve = n(166);
      n(1675);
      function we(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return xe(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return xe(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function xe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var qe = function (e) {
          var t = e.notes,
            n = e.disableFilterAnnotation,
            a = e.setSearchInputHandler,
            u = e.isMultiSelectMode,
            d = e.toggleMultiSelectMode,
            p = e.isMultiSelectEnabled,
            f = we(
              Object(c.e)(function (e) {
                return [
                  _.a.getSortStrategy(e),
                  _.a.isElementDisabled(e, 'sortContainer'),
                  _.a.getNotesPanelCustomHeaderOptions(e),
                ];
              }, c.c),
              3
            ),
            h = f[0],
            m = f[1],
            b = f[2],
            y = we(Object(s.a)(), 1)[0],
            g = Object(c.d)(),
            v = we(Object(o.useState)(!1), 2),
            w = v[0],
            x = v[1];
          Object(o.useEffect)(function () {
            var e = function (e) {
              var t = e.detail,
                n = t.types,
                o = t.authors,
                r = t.colors,
                i = t.statuses;
              n.length > 0 || o.length > 0 || r.length > 0 || i.length > 0
                ? x(!0)
                : x(!1);
            };
            return (
              window.addEventListener(ge.a.ANNOTATION_FILTER_CHANGED, e),
              function () {
                window.removeEventListener(ge.a.ANNOTATION_FILTER_CHANGED, e);
              }
            );
          }, []);
          var q = me()(function (e) {
              i.a.deselectAllAnnotations(), a(e);
            }, 500),
            E = r.a.createElement(
              'div',
              { className: 'sort-container', 'data-element': 'sortContainer' },
              r.a.createElement(
                'div',
                { className: 'label' },
                ''.concat(y('message.sortBy'), ':')
              ),
              r.a.createElement(be.a, {
                dataElement: 'notesOrderDropdown',
                disabled: 0 === t.length,
                items: Object.keys(Object(ve.c)()),
                translationPrefix: 'option.notesOrder',
                currentSelectionKey: h,
                onClickItem: function (e) {
                  g(W.a.setNotesPanelSortStrategy(e));
                },
              })
            ),
            k = r.a.createElement(
              ye.a,
              { className: 'header', dataElement: 'notesPanelHeader' },
              r.a.createElement(
                ye.a,
                {
                  className: 'input-container',
                  dataElement: ''.concat(
                    ne.a.NotesPanel.DefaultHeader.INPUT_CONTAINER
                  ),
                },
                r.a.createElement('input', {
                  type: 'text',
                  placeholder: y('message.searchCommentsPlaceholder'),
                  'aria-label': y('message.searchCommentsPlaceholder'),
                  onChange: function (e) {
                    q(e.target.value);
                  },
                  id: 'NotesPanel__input',
                })
              ),
              r.a.createElement(
                ye.a,
                {
                  className: 'comments-counter',
                  dataElement: ''.concat(
                    ne.a.NotesPanel.DefaultHeader.COMMENTS_COUNTER
                  ),
                },
                r.a.createElement(
                  'span',
                  { className: 'main-comment' },
                  y('component.notesPanel')
                ),
                ' ',
                '('.concat(t.length, ')')
              ),
              r.a.createElement(
                ye.a,
                {
                  className: 'sort-row',
                  dataElement: ''.concat(
                    ne.a.NotesPanel.DefaultHeader.SORT_ROW
                  ),
                },
                m
                  ? r.a.createElement('div', { className: 'sort-container' })
                  : E,
                r.a.createElement(
                  'div',
                  { className: 'buttons-container' },
                  p
                    ? r.a.createElement(C.a, {
                        dataElement: ne.a.NOTE_MULTI_SELECT_MODE_BUTTON,
                        className: l()({ active: u }),
                        disabled: 0 === t.length,
                        img: 'icon-annotation-select-multiple',
                        onClick: function () {
                          i.a.deselectAllAnnotations(), d();
                        },
                        title: y('component.multiSelectButton'),
                      })
                    : null,
                  r.a.createElement(C.a, {
                    dataElement: 'filterAnnotationButton',
                    className: l()({ filterAnnotationButton: !0, active: w }),
                    disabled: n,
                    img: 'icon-comments-filter',
                    onClick: function () {
                      return g(W.a.openElement('filterModal'));
                    },
                    title: y('component.filter'),
                  })
                )
              )
            );
          return r.a.createElement(
            r.a.Fragment,
            null,
            b &&
              r.a.createElement(fe.a, {
                render: b.render,
                renderArguments: [t],
              }),
            (!b || !b.overwriteDefaultHeader) && k
          );
        },
        Ee = n(58),
        ke = n(35),
        Oe = n(1427);
      n(1677);
      function Se(e) {
        return (Se =
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
      function je(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? je(Object(n), !0).forEach(function (t) {
                Ne(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : je(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function Ne(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== Se(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || 'default');
                if ('object' !== Se(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === Se(t) ? t : String(t);
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
      function Te(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Le(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          Pe(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Ce(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          Pe(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Pe(e, t) {
        if (e) {
          if ('string' == typeof e) return Le(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Le(e, t)
                : void 0
          );
        }
      }
      function Le(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Ie = function (e) {
        var t = e.currentLeftPanelWidth,
          n = e.notes,
          a = e.selectedNoteIds,
          u = e.setSelectedNoteIds,
          d = e.searchInput,
          p = e.setSearchInput,
          f = e.isMultiSelectMode,
          h = e.setMultiSelectMode,
          m = e.isMultiSelectedMap,
          b = e.setIsMultiSelectedMap,
          y = e.scrollToSelectedAnnot,
          g = e.setScrollToSelectedAnnot,
          v = Ce(
            Object(c.e)(function (e) {
              return [
                _.a.getSortStrategy(e),
                _.a.isElementOpen(e, ne.a.NOTES_PANEL),
                _.a.isElementDisabled(e, ne.a.NOTES_PANEL),
                _.a.getPageLabels(e),
                _.a.getCustomNoteFilter(e),
                _.a.getNotesPanelWidth(e),
                _.a.getNotesInLeftPanel(e),
                _.a.isDocumentReadOnly(e),
                _.a.isAnnotationNumberingEnabled(e),
                _.a.getEnableNotesPanelVirtualizedList(e),
                _.a.isInDesktopOnlyMode(e),
                _.a.getNotesPanelCustomEmptyPanel(e),
                _.a.getIsNotesPanelMultiSelectEnabled(e),
                _.a.getActiveDocumentViewerKey(e),
              ];
            }, c.c),
            14
          ),
          w = v[0],
          x = v[1],
          q = v[2],
          k = v[3],
          O = v[4],
          C = v[5],
          P = v[6],
          L = v[7],
          I = v[8],
          M = v[9],
          R = v[10],
          D = v[11],
          H = v[12],
          F = v[13],
          z = t || C,
          U = Object(c.d)(),
          G = Object(Ee.b)(),
          B = Ce(Object(o.useState)([]), 2),
          Y = B[0],
          V = B[1],
          $ = Ce(Object(o.useState)(!1), 2),
          K = $[0],
          J = $[1],
          Z = Ce(Object(o.useState)(!1), 2),
          X = Z[0],
          Q = Z[1],
          ee = Ce(Object(o.useState)(!1), 2),
          te = ee[0],
          oe = ee[1],
          re = Ce(Object(o.useState)(void 0), 2),
          ie = re[0],
          ae = re[1],
          le = Ce(Object(s.a)(), 1)[0],
          ce = Object(o.useRef)(),
          se = Object(o.useRef)(0),
          ue = M ? (ke.f ? 25 : 100) : 1 / 0;
        Object(o.useEffect)(function () {
          var e = function (e) {
            U(W.a.setAnnotationNumbering(e));
          };
          return (
            i.a.addEventListener('annotationNumberingUpdated', e),
            function () {
              i.a.removeEventListener('annotationNumberingUpdated', e);
            }
          );
        }, []);
        var de = -1,
          he = function (e) {
            e && (se.current = e),
              U(W.a.closeElement('annotationNoteConnectorLine'));
          },
          me = function (e) {
            var t = e.getContents(),
              n = i.a.getDisplayAuthor(e.Author),
              o = e.getCustomData('trn-annot-preview');
            return (
              (null == t
                ? void 0
                : t.toLowerCase().includes(d.toLowerCase())) ||
              (null == n
                ? void 0
                : n.toLowerCase().includes(d.toLowerCase())) ||
              (null == o ? void 0 : o.toLowerCase().includes(d.toLowerCase()))
            );
          },
          be = Object(ve.c)()
            [w].getSortedNotes(n)
            .filter(function (e) {
              var t = !0;
              if ((O && (t = t && O(e)), d)) {
                var n = e.getReplies(),
                  o = [e].concat(Te(n));
                t = t && o.some(me);
              }
              return t;
            });
        Object(o.useEffect)(
          function () {
            Object.keys(a).length &&
              -1 !== de &&
              setTimeout(function () {
                var e;
                null === (e = ce.current) || void 0 === e || e.scrollToRow(de);
              }, 0);
          },
          [a]
        );
        var ye = function (e) {
            return (
              !Object.keys(a).length &&
              d &&
              be
                .filter(function (e) {
                  return e.getReplies().some(me);
                })
                .some(function (t) {
                  return t.Id === e.Id;
                })
            );
          },
          ge = Ce(Object(o.useState)({}), 2),
          we = ge[0],
          xe = ge[1],
          Se = Object(o.useCallback)(
            function (e, t) {
              xe(function (n) {
                return Ae(Ae({}, n), {}, Ne({}, t, e));
              });
            },
            [xe]
          ),
          je = Ce(Object(o.useState)({}), 2),
          Pe = je[0],
          Le = je[1],
          Ie = Object(o.useCallback)(
            function (e, t) {
              Le(function (n) {
                return Ae(Ae({}, n), {}, Ne({}, t, e));
              });
            },
            [Le]
          ),
          _e = Ce(Object(o.useState)({}), 2),
          Me = _e[0],
          Re = _e[1],
          De = function (e, t) {
            Re(function (n) {
              return Ae(
                Ae({}, n),
                {},
                Ne({}, e, [].concat(Te(n[e] || []), Te(t)))
              );
            });
          },
          He = function (e) {
            Re(function (t) {
              return Ae(Ae({}, t), {}, Ne({}, e, []));
            });
          },
          Fe = function (e, t) {
            var n = Me[e];
            if ((null == n ? void 0 : n.length) > 0) {
              var o = n.indexOf(t);
              o > -1 &&
                (n.splice(o, 1),
                Re(function (t) {
                  return Ae(Ae({}, t), {}, Ne({}, e, Te(n)));
                }));
            }
          };
        Object(o.useEffect)(
          function () {
            V(Object.values(m));
          },
          [m]
        );
        var ze = function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : function () {},
              o = null,
              l = Object(ve.c)()[w],
              c = l.shouldRenderSeparator,
              s = l.getSeparatorContent,
              p = 0 === t ? null : e[t - 1],
              h = e[t];
            c &&
              s &&
              (!p || c(p, h)) &&
              (o = r.a.createElement(T.a, {
                renderContent: function () {
                  return s(p, h, { pageLabels: k });
                },
              }));
            var v = function () {
                !f &&
                  a[h.Id] &&
                  (u(function (e) {
                    var t = Ae({}, e);
                    return delete t[h.Id], t;
                  }),
                  i.a.deselectAnnotation(h, F));
              },
              q = {
                searchInput: d,
                resize: n,
                isSelected: a[h.Id],
                isContentEditable:
                  i.a.canModifyContents(h, F) && !h.getContents(),
                pendingEditTextMap: we,
                setPendingEditText: Se,
                pendingReplyMap: Pe,
                setPendingReply: Ie,
                isDocumentReadOnly: L,
                isNotePanelOpen: x || P,
                onTopNoteContentClicked: v,
                isExpandedFromSearch: ye(h),
                scrollToSelectedAnnot: y,
                sortStrategy: w,
                showAnnotationNumbering: I,
                setCurAnnotId: ae,
                pendingAttachmentMap: Me,
                clearAttachments: He,
                deleteAttachment: Fe,
                addAttachments: De,
                documentViewerKey: F,
              };
            return (
              t === de &&
                setTimeout(function () {
                  g(!1), U(W.a.openElement('annotationNoteConnectorLine'));
                }, 0),
              r.a.createElement(
                'div',
                { role: 'listitem', className: 'note-wrapper' },
                o,
                r.a.createElement(
                  N.a.Provider,
                  { value: q },
                  r.a.createElement(j.a, {
                    annotation: h,
                    isMultiSelected: !!m[h.Id],
                    isMultiSelectMode: f,
                    isMultiSelectEnabled: H,
                    isInNotesPanel: !0,
                    handleMultiSelect: function (e) {
                      if (e) {
                        var t = Ae({}, m);
                        i.a.getGroupAnnotations(h, F).forEach(function (e) {
                          t[e.Id] = e;
                        }),
                          b(t);
                      } else {
                        var n = Ae({}, m);
                        i.a.getGroupAnnotations(h, F).forEach(function (e) {
                          delete n[e.Id];
                        }),
                          b(n);
                      }
                    },
                  })
                )
              )
            );
          },
          Ue = r.a.createElement(
            'div',
            { className: 'no-results' },
            r.a.createElement(
              'div',
              null,
              r.a.createElement(A.a, {
                className: 'empty-icon',
                glyph: 'illustration - empty state - outlines',
              })
            ),
            r.a.createElement(
              'div',
              { className: 'msg' },
              le('message.noResults')
            )
          ),
          Ge = D && D.icon ? D.icon : 'illustration - empty state - outlines',
          Be = D && D.message ? D.message : le('message.noAnnotations'),
          We =
            D && D.readOnlyMessage
              ? D.readOnlyMessage
              : le('message.noAnnotationsReadOnly'),
          Ye = (D && !D.hideIcon) || !D,
          Ve = D && D.render,
          $e = r.a.createElement(
            'div',
            { className: 'no-annotations' },
            Ve
              ? r.a.createElement(fe.a, { render: D.render })
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  Ye &&
                    r.a.createElement(
                      'div',
                      null,
                      r.a.createElement(A.a, {
                        className: 'empty-icon',
                        glyph: Ge,
                      })
                    ),
                  r.a.createElement('div', { className: 'msg' }, L ? We : Be)
                )
          ),
          Ke = r.a.createElement('div', {
            className: 'multi-select-place-holder',
          }),
          Je = r.a.createElement('div', {
            className: 'multi-reply-place-holder',
          }),
          Ze = Object.keys(a);
        if (1 === Ze.length)
          de = be.findIndex(function (e) {
            return e.Id === Ze[0];
          });
        else if (Ze.length) {
          var Xe = be.filter(function (e) {
            return a[e.Id];
          });
          Xe.length &&
            (de = be.findIndex(function (e) {
              return e.Id === Xe[0].Id;
            }));
        }
        var Qe = {};
        return (
          (!R && G) ||
            (Qe = { width: ''.concat(z, 'px'), minWidth: ''.concat(z, 'px') }),
          !q && (x || P)
            ? r.a.createElement(
                'div',
                { className: 'notes-panel-container' },
                r.a.createElement(
                  'div',
                  {
                    className: l()({ Panel: !0, NotesPanel: !0 }),
                    style: Qe,
                    'data-element': 'notesPanel',
                    onMouseUp: function () {
                      return i.a.deselectAllAnnotations;
                    },
                  },
                  !R &&
                    G &&
                    !P &&
                    r.a.createElement(
                      'div',
                      { className: 'close-container' },
                      r.a.createElement(
                        'div',
                        {
                          className: 'close-icon-container',
                          onClick: function () {
                            U(W.a.closeElements([ne.a.NOTES_PANEL]));
                          },
                        },
                        r.a.createElement(A.a, {
                          glyph: 'ic_close_black_24px',
                          className: 'close-icon',
                        })
                      )
                    ),
                  r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(qe, {
                      notes: be,
                      disableFilterAnnotation: 0 === n.length,
                      setSearchInputHandler: p,
                      isMultiSelectMode: f,
                      toggleMultiSelectMode: function () {
                        h(!f);
                      },
                      isMultiSelectEnabled: H,
                    }),
                    0 === be.length
                      ? 0 === n.length
                        ? $e
                        : Ue
                      : be.length <= ue
                        ? r.a.createElement(
                            S,
                            {
                              ref: ce,
                              notes: be,
                              onScroll: he,
                              initialScrollTop: se.current,
                            },
                            ze
                          )
                        : r.a.createElement(
                            E,
                            {
                              ref: ce,
                              notes: be,
                              sortStrategy: w,
                              onScroll: he,
                              initialScrollTop: se.current,
                              selectedIndex: de,
                            },
                            ze
                          ),
                    f ? (K ? Je : Ke) : null
                  )
                ),
                f &&
                  r.a.createElement(pe, {
                    showMultiReply: K,
                    setShowMultiReply: J,
                    showMultiState: X,
                    setShowMultiState: Q,
                    showMultiStyle: te,
                    setShowMultiStyle: oe,
                    setMultiSelectMode: h,
                    isMultiSelectedMap: m,
                    setIsMultiSelectedMap: b,
                    multiSelectedAnnotations: Y,
                  }),
                r.a.createElement(Oe.a, {
                  annotationId: ie,
                  addAttachments: De,
                })
              )
            : null
        );
      };
      function _e(e) {
        return (_e =
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
      function Me() {
        return (Me = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      function Re(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function De(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Re(Object(n), !0).forEach(function (t) {
                He(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Re(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function He(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== _e(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || 'default');
                if ('object' !== _e(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === _e(t) ? t : String(t);
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
      function Fe(e, t) {
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
              var o,
                r,
                i,
                a,
                l = [],
                c = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = i.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return ze(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ze(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ze(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Ue = function (e) {
        var t = Fe(
            Object(c.e)(function (e) {
              return [
                _.a.isElementOpen(e, 'notesPanel'),
                _.a.getNotesInLeftPanel(e),
                _.a.getIsNotesPanelMultiSelectEnabled(e),
                _.a.isMultiViewerMode(e),
                _.a.getActiveDocumentViewerKey(e),
              ];
            }, c.c),
            5
          ),
          n = t[0],
          a = t[1],
          l = t[2],
          s = t[3],
          u = t[4],
          d = Fe(Object(o.useState)(''), 2),
          p = d[0],
          f = d[1],
          h = Fe(Object(o.useState)(!1), 2),
          m = h[0],
          b = h[1],
          y = Fe(Object(o.useState)(!1), 2),
          g = y[0],
          v = y[1],
          w = Fe(Object(o.useState)({ 1: [], 2: [] }), 2),
          x = w[0],
          q = w[1],
          E = Object(o.useCallback)(
            function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : u;
              (x[t] = e), q(De({}, x));
            },
            [u, x[1], x[2], q]
          ),
          k = x[u] || x[1],
          O = Fe(Object(o.useState)({ 1: {}, 2: {} }), 2),
          S = O[0],
          j = O[1],
          A = Object(o.useCallback)(
            function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : u;
              (S[t] = e), j(De({}, S));
            },
            [u, S[1], S[2], j]
          ),
          N = S[u] || S[1],
          T = Fe(Object(o.useState)({ 1: {}, 2: {} }), 2),
          C = T[0],
          P = T[1],
          L = Object(o.useCallback)(
            function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : u;
              (C[t] = e), P(De({}, C));
            },
            [u, C[1], C[2], P]
          ),
          I = C[u] || C[1];
        function M(e) {
          var t = e.find(function (e) {
              return e.isGrouped();
            }),
            n = [];
          return (
            t &&
              e.forEach(function (e) {
                (t.InReplyTo !== e.InReplyTo && t.InReplyTo !== e.Id) ||
                  n.push(e);
              }),
            n
          );
        }
        Object(o.useEffect)(
          function () {
            var e = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : u;
                return function () {
                  E([], e), A({}), f('');
                };
              },
              t = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : u;
                return function () {
                  var t = i.a.getSelectedAnnotations(e);
                  M(t).length === t.length && b(!1),
                    E(
                      i.a.getAnnotationsList(e).filter(function (e) {
                        return (
                          e.Listable &&
                          !e.isReply() &&
                          !e.Hidden &&
                          !e.isGrouped() &&
                          e.ToolName !== window.Core.Tools.ToolNames.CROP &&
                          !e.isContentEditPlaceholder()
                        );
                      }),
                      e
                    );
                };
              },
              n = e(1);
            i.a.addEventListener('documentUnloaded', n);
            var o,
              r,
              a = t(1);
            return (
              i.a.addEventListener('annotationChanged', a),
              i.a.addEventListener('annotationHidden', a),
              i.a.addEventListener('updateAnnotationPermission', a),
              a(),
              s &&
                ((o = e(2)),
                i.a.addEventListener('documentUnloaded', o, void 0, 2),
                (r = t(2)),
                i.a.addEventListener('annotationChanged', r, void 0, 2),
                i.a.addEventListener('annotationHidden', r, void 0, 2),
                i.a.addEventListener(
                  'updateAnnotationPermission',
                  r,
                  void 0,
                  2
                ),
                r()),
              function () {
                s &&
                  (i.a.removeEventListener('documentUnloaded', o, 2),
                  i.a.removeEventListener('annotationChanged', r, 2),
                  i.a.removeEventListener('annotationHidden', r, 2),
                  i.a.removeEventListener('updateAnnotationPermission', r, 2)),
                  i.a.removeEventListener('documentUnloaded', e),
                  i.a.removeEventListener('annotationChanged', t),
                  i.a.removeEventListener('annotationHidden', t),
                  i.a.removeEventListener('updateAnnotationPermission', t);
              }
            );
          },
          [s]
        ),
          Object(o.useEffect)(
            function () {
              var e,
                t = function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : u;
                  return function (t, o) {
                    var r = i.a.getSelectedAnnotations(e),
                      c = {};
                    r.forEach(function (e) {
                      c[e.Id] = !0;
                    }),
                      (n || a) && (A(c, e), v(!0));
                    var s = M(r);
                    l &&
                      'selected' === o &&
                      r.length > 1 &&
                      s.length !== r.length &&
                      (b(!0),
                      r.forEach(function (e) {
                        I[e.Id] = e;
                      }),
                      L(De({}, I), e));
                  };
                },
                o = t(1);
              return (
                o(),
                i.a.addEventListener('annotationSelected', o),
                s &&
                  ((e = t(2))(),
                  i.a.addEventListener('annotationSelected', e, void 0, 2)),
                function () {
                  i.a.removeEventListener('annotationSelected', o),
                    s && i.a.removeEventListener('annotationSelected', e, 2);
                }
              );
            },
            [n, a, m, I, l, s]
          );
        var R = {
          notes: k,
          setNotes: E,
          getGroupedAnnots: M,
          selectedNoteIds: N,
          setSelectedNoteIds: A,
          searchInput: p,
          setSearchInput: f,
          isMultiSelectMode: m,
          setMultiSelectMode: b,
          isMultiSelectedMap: I,
          setIsMultiSelectedMap: L,
          scrollToSelectedAnnot: g,
          setScrollToSelectedAnnot: v,
        };
        return r.a.createElement(Ie, Me({}, e, R));
      };
      t.default = Ue;
    },
  },
]);
//# sourceMappingURL=15.chunk.js.map
