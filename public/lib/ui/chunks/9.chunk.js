(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    1473: function (t, e, n) {
      'use strict';
      n(24),
        n(7),
        n(9),
        n(8),
        n(10),
        n(51),
        n(132),
        n(32),
        n(39),
        n(18),
        n(11),
        n(13),
        n(12),
        n(15),
        n(14),
        n(20),
        n(17),
        n(22),
        n(67),
        n(68),
        n(69),
        n(70),
        n(41),
        n(44),
        n(25),
        n(46),
        n(66);
      var r = n(0),
        o = n.n(r),
        i = n(362),
        a = n(313),
        c =
          (n(1579),
          function (t) {
            var e,
              n = t.onChange,
              r = t.checked,
              i = t.index,
              c = t.thumbnail,
              u = null;
            c &&
              (c.currentSrc
                ? (e = c.currentSrc)
                : c.url
                  ? (e = c.url)
                  : c.toDataURL && (e = c.toDataURL()),
              (u = o.a.createElement('img', {
                className: 'thumb-card-img',
                alt: 'img_name',
                src: e,
              })));
            return o.a.createElement(
              'div',
              { className: 'thumb-card', onClick: n },
              o.a.createElement(
                'div',
                { className: 'thumb-body' },
                o.a.createElement('div', { className: 'thumb-image' }, u),
                o.a.createElement(a.a, {
                  id: 'custom-checkbox-'.concat(i),
                  name: 'thumb'.concat(i),
                  checked: r,
                })
              ),
              o.a.createElement('div', { className: 'thumb-card-title' }, i + 1)
            );
          });
      function u(t) {
        return (u =
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
      function p() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ p =
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
        function s(t, e, n, o) {
          var i = e && e.prototype instanceof f ? e : f,
            a = Object.create(i.prototype),
            c = new j(o || []);
          return r(a, '_invoke', { value: k(t, n, c) }), a;
        }
        function d(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = s;
        var h = {};
        function f() {}
        function m() {}
        function y() {}
        var v = {};
        l(v, i, function () {
          return this;
        });
        var w = Object.getPrototypeOf,
          b = w && w(w(O([])));
        b && b !== e && n.call(b, i) && (v = b);
        var g = (y.prototype = f.prototype = Object.create(v));
        function x(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function E(t, e) {
          var o;
          r(this, '_invoke', {
            value: function (r, i) {
              function a() {
                return new e(function (o, a) {
                  !(function r(o, i, a, c) {
                    var p = d(t[o], t, i);
                    if ('throw' !== p.type) {
                      var l = p.arg,
                        s = l.value;
                      return s && 'object' == u(s) && n.call(s, '__await')
                        ? e.resolve(s.__await).then(
                            function (t) {
                              r('next', t, a, c);
                            },
                            function (t) {
                              r('throw', t, a, c);
                            }
                          )
                        : e.resolve(s).then(
                            function (t) {
                              (l.value = t), a(l);
                            },
                            function (t) {
                              return r('throw', t, a, c);
                            }
                          );
                    }
                    c(p.arg);
                  })(r, i, o, a);
                });
              }
              return (o = o ? o.then(a, a) : a());
            },
          });
        }
        function k(t, e, n) {
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
                var c = L(a, n);
                if (c) {
                  if (c === h) continue;
                  return c;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              r = 'executing';
              var u = d(t, e, n);
              if ('normal' === u.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), u.arg === h)
                )
                  continue;
                return { value: u.arg, done: n.done };
              }
              'throw' === u.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = u.arg));
            }
          };
        }
        function L(t, e) {
          var n = e.method,
            r = t.iterator[n];
          if (void 0 === r)
            return (
              (e.delegate = null),
              ('throw' === n &&
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                L(t, e),
                'throw' === e.method)) ||
                ('return' !== n &&
                  ((e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              h
            );
          var o = d(r, t.iterator, e.arg);
          if ('throw' === o.type)
            return (
              (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), h
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                h)
              : i
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              h);
        }
        function A(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function S(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function j(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(A, this),
            this.reset(!0);
        }
        function O(t) {
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
          (m.prototype = y),
          r(g, 'constructor', { value: y, configurable: !0 }),
          r(y, 'constructor', { value: m, configurable: !0 }),
          (m.displayName = l(y, c, 'GeneratorFunction')),
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
                ? Object.setPrototypeOf(t, y)
                : ((t.__proto__ = y), l(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(E.prototype),
          l(E.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new E(s(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(g),
          l(g, c, 'Generator'),
          l(g, i, function () {
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
          (t.values = O),
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
                this.tryEntries.forEach(S),
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
                    u = n.call(i, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!u)
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
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), h)
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
                h
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), S(n), h;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    S(n);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: O(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          t
        );
      }
      function l(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function s(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              l(i, r, o, a, c, 'next', t);
            }
            function c(t) {
              l(i, r, o, a, c, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function d(t, e) {
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
                u = !0,
                p = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = i.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (p = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (p) throw o;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return h(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return h(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var f = function (t) {
        var e = t.document,
          n = t.onThumbnailSelected,
          a = t.selectedThumbnails,
          u = t.onfileLoadedHandler,
          l = d(Object(r.useState)([]), 2),
          h = l[0],
          f = l[1],
          m = d(Object(r.useState)(0), 2),
          y = m[0],
          v = m[1],
          w = d(Object(i.a)(), 1)[0];
        if (
          (Object(r.useEffect)(
            function () {
              var t = [];
              function n() {
                return (n = s(
                  p().mark(function n() {
                    var r, o, i, a, c, l;
                    return p().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            (r = []),
                              (o = e.getPageCount()),
                              (i = []),
                              (a = p().mark(function n(o) {
                                var a;
                                return p().wrap(function (n) {
                                  for (;;)
                                    switch ((n.prev = n.next)) {
                                      case 0:
                                        (a = new Promise(function (n) {
                                          var i = e.loadThumbnail(
                                            o,
                                            function (t) {
                                              var e;
                                              (e = t.currentSrc
                                                ? {
                                                    pageNumber: o,
                                                    currentSrc: t.currentSrc,
                                                  }
                                                : {
                                                    pageNumber: o,
                                                    url: t.toDataURL(),
                                                  }),
                                                r.push(e),
                                                v(o),
                                                n();
                                            }
                                          );
                                          t.push(i);
                                        })),
                                          i.push(a);
                                      case 2:
                                      case 'end':
                                        return n.stop();
                                    }
                                }, n);
                              })),
                              (c = 1);
                          case 5:
                            if (!(c <= o)) {
                              n.next = 10;
                              break;
                            }
                            return n.delegateYield(a(c), 't0', 7);
                          case 7:
                            c++, (n.next = 5);
                            break;
                          case 10:
                            return (n.next = 12), Promise.all(i);
                          case 12:
                            (l = [].concat(r).sort(function (t, e) {
                              return t.pageNumber - e.pageNumber;
                            })),
                              f(l),
                              (t.length = 0),
                              u(!1);
                          case 16:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  })
                )).apply(this, arguments);
              }
              return (
                e &&
                  (function () {
                    n.apply(this, arguments);
                  })(),
                function () {
                  t.forEach(function (t) {
                    return e.cancelLoadThumbnail(t);
                  });
                }
              );
            },
            [e]
          ),
          h.length > 0)
        )
          return h.map(function (t, e) {
            var r = e + 1;
            return o.a.createElement(c, {
              key: r,
              onChange: function () {
                return n(r);
              },
              checked: !!a[r],
              index: e,
              thumbnail: t,
            });
          });
        var b = e ? e.getPageCount() : 0,
          g = ''.concat(y, '/').concat(b);
        return o.a.createElement('div', null, w('message.processing'), ' ', g);
      };
      e.a = f;
    },
    1579: function (t, e, n) {
      var r = n(27),
        o = n(1580);
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
    1580: function (t, e, n) {
      (e = t.exports = n(28)(!1)).push([
        t.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.thumb-card{box-sizing:border-box;width:133px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background:#f8f9fa;border-radius:6px;padding:0 24px 2px;position:relative;cursor:pointer}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumb-card{width:142px}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumb-card{width:142px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumb-card{width:97px;padding:0 12px 2px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumb-card{width:97px;padding:0 12px 2px}}@media(max-width:430px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumb-card{width:97px;padding:0 12px 2px}}@container (max-width: 430px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumb-card{width:97px;padding:0 12px 2px}}.thumb-card:hover{background:var(--tools-overlay-button-hover)}.thumb-body{display:flex;align-items:flex-start}.thumb-image{padding-top:12px;padding-right:5px;text-align:center}.thumb-card-img{width:83px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumb-card-img{width:68px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumb-card-img{width:68px}}@media(max-width:430px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumb-card-img{width:68px}}@container (max-width: 430px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumb-card-img{width:68px}}.thumb-card-title{text-align:center;padding-top:8px;padding-bottom:10px}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
  },
]);
//# sourceMappingURL=9.chunk.js.map
