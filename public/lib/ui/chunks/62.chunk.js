(window.webpackJsonp = window.webpackJsonp || []).push([
  [62],
  {
    1707: function (e, t, n) {
      var r, o;
      self,
        (e.exports =
          ((r = n(0)),
          (o = n(87)),
          (() => {
            var e = {
                926: (e) => {
                  'use strict';
                  e.exports =
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="cls-1" d="M18,6H17V4a2,2,0,0,0-2-2H9A2,2,0,0,0,7,4V6H3V8H5V20a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V8h2V6ZM9,4h6V6H9ZM7,20V8H17V20Zm6-10h2v8H13ZM9,10h2v8H9Z"/></svg>';
                },
                316: (e) => {
                  'use strict';
                  e.exports =
                    '<svg\n  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <path class="cls-1" d="M9,14.5A1.5,1.5,0,1,1,7.5,13,1.5,1.5,0,0,1,9,14.5ZM10.5,6A1.5,1.5,0,1,0,12,7.5,1.5,1.5,0,0,0,10.5,6Zm-3,3A1.5,1.5,0,1,0,9,10.5,1.5,1.5,0,0,0,7.5,9Zm7.2,6.36a2,2,0,0,0-.09,1.92l.2.41A3,3,0,0,1,12.14,22H12a9.74,9.74,0,0,1-2.62-.36A10,10,0,0,1,4.46,5.43,10,10,0,0,1,22,12.14a3,3,0,0,1-3,3,3.09,3.09,0,0,1-1.3-.3l-.41-.2A2,2,0,0,0,14.7,15.36Zm3.44-2.55.42.19A1,1,0,0,0,20,12.11a8,8,0,0,0-6.87-8A7.24,7.24,0,0,0,12,4,8,8,0,0,0,6,6.74a7.92,7.92,0,0,0-1.89,6.39A8.05,8.05,0,0,0,9.9,19.72,8.42,8.42,0,0,0,12,20h.11a1,1,0,0,0,.84-.48,1,1,0,0,0,.05-1l-.2-.42A3.92,3.92,0,0,1,13,14.3,4.05,4.05,0,0,1,18.14,12.81ZM14.5,6A1.5,1.5,0,1,0,16,7.5,1.5,1.5,0,0,0,14.5,6Z"/>\n</svg>\n';
                },
                937: (e, t, n) => {
                  'use strict';
                  n.d(t, { Z: () => i });
                  var r = n(645),
                    o = n.n(r)()(function (e) {
                      return e[1];
                    });
                  o.push([
                    e.id,
                    'div#wv-read-mode {\n   height: 100%;\n   width: inherit;\n}\n\n.reader-mode-spinner-wrapper {\n   position: fixed;\n   left: 0;\n   width: inherit;\n   padding: inherit;\n   background-color: white;\n   background-clip: content-box;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n}\n\n.reader-mode-spinner-wrapper.hidden {\n   display: none;\n}\n\n.reader-mode-spinner {\n   position: absolute;\n   height: 60px;\n   width: 60px;\n   margin: 0px auto;\n   -webkit-animation: rotation .6s infinite linear;\n   -moz-animation: rotation .6s infinite linear;\n   -o-animation: rotation .6s infinite linear;\n   animation: rotation .6s infinite linear;\n   border-left: 6px solid rgba(0, 174, 239, .15);\n   border-right: 6px solid rgba(0, 174, 239, .15);\n   border-bottom: 6px solid rgba(0, 174, 239, .15);\n   border-top: 6px solid rgba(0, 174, 239, .8);\n   border-radius: 100%;\n}\n\n@-webkit-keyframes rotation {\n   from {\n      -webkit-transform: rotate(0deg);\n   }\n\n   to {\n      -webkit-transform: rotate(359deg);\n   }\n}\n\n@-moz-keyframes rotation {\n   from {\n      -moz-transform: rotate(0deg);\n   }\n\n   to {\n      -moz-transform: rotate(359deg);\n   }\n}\n\n@-o-keyframes rotation {\n   from {\n      -o-transform: rotate(0deg);\n   }\n\n   to {\n      -o-transform: rotate(359deg);\n   }\n}\n\n@keyframes rotation {\n   from {\n      transform: rotate(0deg);\n   }\n\n   to {\n      transform: rotate(359deg);\n   }\n}\n',
                    '',
                  ]);
                  const i = o;
                },
                645: (e) => {
                  'use strict';
                  e.exports = function (e) {
                    var t = [];
                    return (
                      (t.toString = function () {
                        return this.map(function (t) {
                          var n = e(t);
                          return t[2]
                            ? '@media '.concat(t[2], ' {').concat(n, '}')
                            : n;
                        }).join('');
                      }),
                      (t.i = function (e, n, r) {
                        'string' == typeof e && (e = [[null, e, '']]);
                        var o = {};
                        if (r)
                          for (var i = 0; i < this.length; i++) {
                            var a = this[i][0];
                            null != a && (o[a] = !0);
                          }
                        for (var l = 0; l < e.length; l++) {
                          var s = [].concat(e[l]);
                          (r && o[s[0]]) ||
                            (n &&
                              (s[2]
                                ? (s[2] = ''.concat(n, ' and ').concat(s[2]))
                                : (s[2] = n)),
                            t.push(s));
                        }
                      }),
                      t
                    );
                  };
                },
                703: (e, t, n) => {
                  'use strict';
                  var r = n(414);
                  function o() {}
                  function i() {}
                  (i.resetWarningCache = o),
                    (e.exports = function () {
                      function e(e, t, n, o, i, a) {
                        if (a !== r) {
                          var l = new Error(
                            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                          );
                          throw ((l.name = 'Invariant Violation'), l);
                        }
                      }
                      function t() {
                        return e;
                      }
                      e.isRequired = e;
                      var n = {
                        array: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: i,
                        resetWarningCache: o,
                      };
                      return (n.PropTypes = n), n;
                    });
                },
                697: (e, t, n) => {
                  e.exports = n(703)();
                },
                414: (e) => {
                  'use strict';
                  e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
                },
                666: (e) => {
                  var t = (function (e) {
                    'use strict';
                    var t,
                      n = Object.prototype,
                      r = n.hasOwnProperty,
                      o = 'function' == typeof Symbol ? Symbol : {},
                      i = o.iterator || '@@iterator',
                      a = o.asyncIterator || '@@asyncIterator',
                      l = o.toStringTag || '@@toStringTag';
                    function s(e, t, n) {
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
                      s({}, '');
                    } catch (e) {
                      s = function (e, t, n) {
                        return (e[t] = n);
                      };
                    }
                    function c(e, t, n, r) {
                      var o = t && t.prototype instanceof v ? t : v,
                        i = Object.create(o.prototype),
                        a = new P(r || []);
                      return (
                        (i._invoke = (function (e, t, n) {
                          var r = d;
                          return function (o, i) {
                            if (r === h)
                              throw new Error('Generator is already running');
                            if (r === p) {
                              if ('throw' === o) throw i;
                              return k();
                            }
                            for (n.method = o, n.arg = i; ; ) {
                              var a = n.delegate;
                              if (a) {
                                var l = O(a, n);
                                if (l) {
                                  if (l === m) continue;
                                  return l;
                                }
                              }
                              if ('next' === n.method) n.sent = n._sent = n.arg;
                              else if ('throw' === n.method) {
                                if (r === d) throw ((r = p), n.arg);
                                n.dispatchException(n.arg);
                              } else
                                'return' === n.method &&
                                  n.abrupt('return', n.arg);
                              r = h;
                              var s = u(e, t, n);
                              if ('normal' === s.type) {
                                if (((r = n.done ? p : f), s.arg === m))
                                  continue;
                                return { value: s.arg, done: n.done };
                              }
                              'throw' === s.type &&
                                ((r = p),
                                (n.method = 'throw'),
                                (n.arg = s.arg));
                            }
                          };
                        })(e, n, a)),
                        i
                      );
                    }
                    function u(e, t, n) {
                      try {
                        return { type: 'normal', arg: e.call(t, n) };
                      } catch (e) {
                        return { type: 'throw', arg: e };
                      }
                    }
                    e.wrap = c;
                    var d = 'suspendedStart',
                      f = 'suspendedYield',
                      h = 'executing',
                      p = 'completed',
                      m = {};
                    function v() {}
                    function g() {}
                    function y() {}
                    var b = {};
                    s(b, i, function () {
                      return this;
                    });
                    var w = Object.getPrototypeOf,
                      _ = w && w(w(z([])));
                    _ && _ !== n && r.call(_, i) && (b = _);
                    var S = (y.prototype = v.prototype = Object.create(b));
                    function x(e) {
                      ['next', 'throw', 'return'].forEach(function (t) {
                        s(e, t, function (e) {
                          return this._invoke(t, e);
                        });
                      });
                    }
                    function C(e, t) {
                      function n(o, i, a, l) {
                        var s = u(e[o], e, i);
                        if ('throw' !== s.type) {
                          var c = s.arg,
                            d = c.value;
                          return d &&
                            'object' == typeof d &&
                            r.call(d, '__await')
                            ? t.resolve(d.__await).then(
                                function (e) {
                                  n('next', e, a, l);
                                },
                                function (e) {
                                  n('throw', e, a, l);
                                }
                              )
                            : t.resolve(d).then(
                                function (e) {
                                  (c.value = e), a(c);
                                },
                                function (e) {
                                  return n('throw', e, a, l);
                                }
                              );
                        }
                        l(s.arg);
                      }
                      var o;
                      this._invoke = function (e, r) {
                        function i() {
                          return new t(function (t, o) {
                            n(e, r, t, o);
                          });
                        }
                        return (o = o ? o.then(i, i) : i());
                      };
                    }
                    function O(e, n) {
                      var r = e.iterator[n.method];
                      if (r === t) {
                        if (((n.delegate = null), 'throw' === n.method)) {
                          if (
                            e.iterator.return &&
                            ((n.method = 'return'),
                            (n.arg = t),
                            O(e, n),
                            'throw' === n.method)
                          )
                            return m;
                          (n.method = 'throw'),
                            (n.arg = new TypeError(
                              "The iterator does not provide a 'throw' method"
                            ));
                        }
                        return m;
                      }
                      var o = u(r, e.iterator, n.arg);
                      if ('throw' === o.type)
                        return (
                          (n.method = 'throw'),
                          (n.arg = o.arg),
                          (n.delegate = null),
                          m
                        );
                      var i = o.arg;
                      return i
                        ? i.done
                          ? ((n[e.resultName] = i.value),
                            (n.next = e.nextLoc),
                            'return' !== n.method &&
                              ((n.method = 'next'), (n.arg = t)),
                            (n.delegate = null),
                            m)
                          : i
                        : ((n.method = 'throw'),
                          (n.arg = new TypeError(
                            'iterator result is not an object'
                          )),
                          (n.delegate = null),
                          m);
                    }
                    function R(e) {
                      var t = { tryLoc: e[0] };
                      1 in e && (t.catchLoc = e[1]),
                        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                        this.tryEntries.push(t);
                    }
                    function T(e) {
                      var t = e.completion || {};
                      (t.type = 'normal'), delete t.arg, (e.completion = t);
                    }
                    function P(e) {
                      (this.tryEntries = [{ tryLoc: 'root' }]),
                        e.forEach(R, this),
                        this.reset(!0);
                    }
                    function z(e) {
                      if (e) {
                        var n = e[i];
                        if (n) return n.call(e);
                        if ('function' == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                          var o = -1,
                            a = function n() {
                              for (; ++o < e.length; )
                                if (r.call(e, o))
                                  return (n.value = e[o]), (n.done = !1), n;
                              return (n.value = t), (n.done = !0), n;
                            };
                          return (a.next = a);
                        }
                      }
                      return { next: k };
                    }
                    function k() {
                      return { value: t, done: !0 };
                    }
                    return (
                      (g.prototype = y),
                      s(S, 'constructor', y),
                      s(y, 'constructor', g),
                      (g.displayName = s(y, l, 'GeneratorFunction')),
                      (e.isGeneratorFunction = function (e) {
                        var t = 'function' == typeof e && e.constructor;
                        return (
                          !!t &&
                          (t === g ||
                            'GeneratorFunction' === (t.displayName || t.name))
                        );
                      }),
                      (e.mark = function (e) {
                        return (
                          Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, y)
                            : ((e.__proto__ = y), s(e, l, 'GeneratorFunction')),
                          (e.prototype = Object.create(S)),
                          e
                        );
                      }),
                      (e.awrap = function (e) {
                        return { __await: e };
                      }),
                      x(C.prototype),
                      s(C.prototype, a, function () {
                        return this;
                      }),
                      (e.AsyncIterator = C),
                      (e.async = function (t, n, r, o, i) {
                        void 0 === i && (i = Promise);
                        var a = new C(c(t, n, r, o), i);
                        return e.isGeneratorFunction(n)
                          ? a
                          : a.next().then(function (e) {
                              return e.done ? e.value : a.next();
                            });
                      }),
                      x(S),
                      s(S, l, 'Generator'),
                      s(S, i, function () {
                        return this;
                      }),
                      s(S, 'toString', function () {
                        return '[object Generator]';
                      }),
                      (e.keys = function (e) {
                        var t = [];
                        for (var n in e) t.push(n);
                        return (
                          t.reverse(),
                          function n() {
                            for (; t.length; ) {
                              var r = t.pop();
                              if (r in e)
                                return (n.value = r), (n.done = !1), n;
                            }
                            return (n.done = !0), n;
                          }
                        );
                      }),
                      (e.values = z),
                      (P.prototype = {
                        constructor: P,
                        reset: function (e) {
                          if (
                            ((this.prev = 0),
                            (this.next = 0),
                            (this.sent = this._sent = t),
                            (this.done = !1),
                            (this.delegate = null),
                            (this.method = 'next'),
                            (this.arg = t),
                            this.tryEntries.forEach(T),
                            !e)
                          )
                            for (var n in this)
                              't' === n.charAt(0) &&
                                r.call(this, n) &&
                                !isNaN(+n.slice(1)) &&
                                (this[n] = t);
                        },
                        stop: function () {
                          this.done = !0;
                          var e = this.tryEntries[0].completion;
                          if ('throw' === e.type) throw e.arg;
                          return this.rval;
                        },
                        dispatchException: function (e) {
                          if (this.done) throw e;
                          var n = this;
                          function o(r, o) {
                            return (
                              (l.type = 'throw'),
                              (l.arg = e),
                              (n.next = r),
                              o && ((n.method = 'next'), (n.arg = t)),
                              !!o
                            );
                          }
                          for (
                            var i = this.tryEntries.length - 1;
                            i >= 0;
                            --i
                          ) {
                            var a = this.tryEntries[i],
                              l = a.completion;
                            if ('root' === a.tryLoc) return o('end');
                            if (a.tryLoc <= this.prev) {
                              var s = r.call(a, 'catchLoc'),
                                c = r.call(a, 'finallyLoc');
                              if (s && c) {
                                if (this.prev < a.catchLoc)
                                  return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                  return o(a.finallyLoc);
                              } else if (s) {
                                if (this.prev < a.catchLoc)
                                  return o(a.catchLoc, !0);
                              } else {
                                if (!c)
                                  throw new Error(
                                    'try statement without catch or finally'
                                  );
                                if (this.prev < a.finallyLoc)
                                  return o(a.finallyLoc);
                              }
                            }
                          }
                        },
                        abrupt: function (e, t) {
                          for (
                            var n = this.tryEntries.length - 1;
                            n >= 0;
                            --n
                          ) {
                            var o = this.tryEntries[n];
                            if (
                              o.tryLoc <= this.prev &&
                              r.call(o, 'finallyLoc') &&
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
                              ? ((this.method = 'next'),
                                (this.next = i.finallyLoc),
                                m)
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
                            m
                          );
                        },
                        finish: function (e) {
                          for (
                            var t = this.tryEntries.length - 1;
                            t >= 0;
                            --t
                          ) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e)
                              return (
                                this.complete(n.completion, n.afterLoc), T(n), m
                              );
                          }
                        },
                        catch: function (e) {
                          for (
                            var t = this.tryEntries.length - 1;
                            t >= 0;
                            --t
                          ) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                              var r = n.completion;
                              if ('throw' === r.type) {
                                var o = r.arg;
                                T(n);
                              }
                              return o;
                            }
                          }
                          throw new Error('illegal catch attempt');
                        },
                        delegateYield: function (e, n, r) {
                          return (
                            (this.delegate = {
                              iterator: z(e),
                              resultName: n,
                              nextLoc: r,
                            }),
                            'next' === this.method && (this.arg = t),
                            m
                          );
                        },
                      }),
                      e
                    );
                  })(e.exports);
                  try {
                    regeneratorRuntime = t;
                  } catch (e) {
                    'object' == typeof globalThis
                      ? (globalThis.regeneratorRuntime = t)
                      : Function('r', 'regeneratorRuntime = r')(t);
                  }
                },
                379: (e, t, n) => {
                  'use strict';
                  var r,
                    o = (function () {
                      var e = {};
                      return function (t) {
                        if (void 0 === e[t]) {
                          var n = document.querySelector(t);
                          if (
                            window.HTMLIFrameElement &&
                            n instanceof window.HTMLIFrameElement
                          )
                            try {
                              n = n.contentDocument.head;
                            } catch (e) {
                              n = null;
                            }
                          e[t] = n;
                        }
                        return e[t];
                      };
                    })(),
                    i = [];
                  function a(e) {
                    for (var t = -1, n = 0; n < i.length; n++)
                      if (i[n].identifier === e) {
                        t = n;
                        break;
                      }
                    return t;
                  }
                  function l(e, t) {
                    for (var n = {}, r = [], o = 0; o < e.length; o++) {
                      var l = e[o],
                        s = t.base ? l[0] + t.base : l[0],
                        c = n[s] || 0,
                        u = ''.concat(s, ' ').concat(c);
                      n[s] = c + 1;
                      var d = a(u),
                        f = { css: l[1], media: l[2], sourceMap: l[3] };
                      -1 !== d
                        ? (i[d].references++, i[d].updater(f))
                        : i.push({
                            identifier: u,
                            updater: m(f, t),
                            references: 1,
                          }),
                        r.push(u);
                    }
                    return r;
                  }
                  function s(e) {
                    var t = document.createElement('style'),
                      r = e.attributes || {};
                    if (void 0 === r.nonce) {
                      var i = n.nc;
                      i && (r.nonce = i);
                    }
                    if (
                      (Object.keys(r).forEach(function (e) {
                        t.setAttribute(e, r[e]);
                      }),
                      'function' == typeof e.insert)
                    )
                      e.insert(t);
                    else {
                      var a = o(e.insert || 'head');
                      if (!a)
                        throw new Error(
                          "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        );
                      a.appendChild(t);
                    }
                    return t;
                  }
                  var c,
                    u =
                      ((c = []),
                      function (e, t) {
                        return (c[e] = t), c.filter(Boolean).join('\n');
                      });
                  function d(e, t, n, r) {
                    var o = n
                      ? ''
                      : r.media
                        ? '@media '.concat(r.media, ' {').concat(r.css, '}')
                        : r.css;
                    if (e.styleSheet) e.styleSheet.cssText = u(t, o);
                    else {
                      var i = document.createTextNode(o),
                        a = e.childNodes;
                      a[t] && e.removeChild(a[t]),
                        a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
                    }
                  }
                  function f(e, t, n) {
                    var r = n.css,
                      o = n.media,
                      i = n.sourceMap;
                    if (
                      (o
                        ? e.setAttribute('media', o)
                        : e.removeAttribute('media'),
                      i &&
                        'undefined' != typeof btoa &&
                        (r +=
                          '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                            btoa(
                              unescape(encodeURIComponent(JSON.stringify(i)))
                            ),
                            ' */'
                          )),
                      e.styleSheet)
                    )
                      e.styleSheet.cssText = r;
                    else {
                      for (; e.firstChild; ) e.removeChild(e.firstChild);
                      e.appendChild(document.createTextNode(r));
                    }
                  }
                  var h = null,
                    p = 0;
                  function m(e, t) {
                    var n, r, o;
                    if (t.singleton) {
                      var i = p++;
                      (n = h || (h = s(t))),
                        (r = d.bind(null, n, i, !1)),
                        (o = d.bind(null, n, i, !0));
                    } else
                      (n = s(t)),
                        (r = f.bind(null, n, t)),
                        (o = function () {
                          !(function (e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e);
                          })(n);
                        });
                    return (
                      r(e),
                      function (t) {
                        if (t) {
                          if (
                            t.css === e.css &&
                            t.media === e.media &&
                            t.sourceMap === e.sourceMap
                          )
                            return;
                          r((e = t));
                        } else o();
                      }
                    );
                  }
                  e.exports = function (e, t) {
                    (t = t || {}).singleton ||
                      'boolean' == typeof t.singleton ||
                      (t.singleton =
                        (void 0 === r &&
                          (r = Boolean(
                            window && document && document.all && !window.atob
                          )),
                        r));
                    var n = l((e = e || []), t);
                    return function (e) {
                      if (
                        ((e = e || []),
                        '[object Array]' === Object.prototype.toString.call(e))
                      ) {
                        for (var r = 0; r < n.length; r++) {
                          var o = a(n[r]);
                          i[o].references--;
                        }
                        for (var s = l(e, t), c = 0; c < n.length; c++) {
                          var u = a(n[c]);
                          0 === i[u].references &&
                            (i[u].updater(), i.splice(u, 1));
                        }
                        n = s;
                      }
                    };
                  };
                },
                662: (e) => {
                  'use strict';
                  e.exports =
                    '.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}';
                },
                421: (e) => {
                  'use strict';
                  e.exports =
                    '.tippy-box[data-theme~=light-border]{background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,8,16,.15);color:#333;box-shadow:0 4px 14px -2px rgba(0,8,16,.08)}.tippy-box[data-theme~=light-border]>.tippy-backdrop{background-color:#fff}.tippy-box[data-theme~=light-border]>.tippy-arrow:after,.tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{content:"";position:absolute;z-index:-1}.tippy-box[data-theme~=light-border]>.tippy-arrow:after{border-color:transparent;border-style:solid}.tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before{border-top-color:#fff}.tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after{border-top-color:rgba(0,8,16,.2);border-width:7px 7px 0;top:17px;left:1px}.tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg{top:16px}.tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after{top:17px}.tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#fff;bottom:16px}.tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after{border-bottom-color:rgba(0,8,16,.2);border-width:0 7px 7px;bottom:17px;left:1px}.tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after{bottom:17px}.tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before{border-left-color:#fff}.tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after{border-left-color:rgba(0,8,16,.2);border-width:7px 0 7px 7px;left:17px;top:1px}.tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg{left:11px}.tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after{left:12px}.tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before{border-right-color:#fff;right:16px}.tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after{border-width:7px 7px 7px 0;right:17px;top:1px;border-right-color:rgba(0,8,16,.2)}.tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg{right:11px}.tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after{right:12px}.tippy-box[data-theme~=light-border]>.tippy-svg-arrow{fill:#fff}.tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);background-size:16px 6px;width:16px;height:6px}';
                },
                773: (e) => {
                  'use strict';
                  e.exports =
                    'body {\n  display: flex;\n  flex-direction: column;\n}\n\nhtml {\n  overflow: hidden;\n}\n';
                },
                370: (e) => {
                  'use strict';
                  e.exports =
                    '.rm-tooltip-content {\n  margin: -5px -9px;\n  display: flex;\n  font-family: sans-serif;\n}\n\n.rm-tooltip-icon {\n  height: 32px;\n  width: 32px;\n  margin: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.rm-tooltip-icon:hover {\n  background-color: #E7EDF3;\n}\n\n.rm-tooltip-icon svg {\n  height: 18px;\n  width: 18px;\n  fill: #868e96;\n  pointer-events: none;\n}\n';
                },
                798: (e) => {
                  'use strict';
                  e.exports = r;
                },
                413: (e) => {
                  'use strict';
                  e.exports = o;
                },
              },
              t = {};
            function n(r) {
              var o = t[r];
              if (void 0 !== o) return o.exports;
              var i = (t[r] = { id: r, exports: {} });
              return e[r](i, i.exports, n), i.exports;
            }
            (n.n = (e) => {
              var t = e && e.__esModule ? () => e.default : () => e;
              return n.d(t, { a: t }), t;
            }),
              (n.d = (e, t) => {
                for (var r in t)
                  n.o(t, r) &&
                    !n.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
              }),
              (n.g = (function () {
                if ('object' == typeof globalThis) return globalThis;
                try {
                  return this || new Function('return this')();
                } catch (e) {
                  if ('object' == typeof window) return window;
                }
              })()),
              (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
              (n.r = (e) => {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                  }),
                  Object.defineProperty(e, '__esModule', { value: !0 });
              });
            var i = {};
            return (
              (() => {
                'use strict';
                n.r(i), n.d(i, { default: () => va }), n(666);
                var e = n(798),
                  t = n.n(e),
                  r = n(413),
                  o = n.n(r);
                function a() {
                  return (a =
                    Object.assign ||
                    function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                            (e[r] = n[r]);
                      }
                      return e;
                    }).apply(this, arguments);
                }
                function l(e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    o = {},
                    i = Object.keys(e);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                  return o;
                }
                function s(e, t) {
                  return (s =
                    Object.setPrototypeOf ||
                    function (e, t) {
                      return (e.__proto__ = t), e;
                    })(e, t);
                }
                var c = n(697),
                  u = n.n(c),
                  d = (function () {
                    if ('undefined' != typeof Map) return Map;
                    function e(e, t) {
                      var n = -1;
                      return (
                        e.some(function (e, r) {
                          return e[0] === t && ((n = r), !0);
                        }),
                        n
                      );
                    }
                    return (function () {
                      function t() {
                        this.__entries__ = [];
                      }
                      return (
                        Object.defineProperty(t.prototype, 'size', {
                          get: function () {
                            return this.__entries__.length;
                          },
                          enumerable: !0,
                          configurable: !0,
                        }),
                        (t.prototype.get = function (t) {
                          var n = e(this.__entries__, t),
                            r = this.__entries__[n];
                          return r && r[1];
                        }),
                        (t.prototype.set = function (t, n) {
                          var r = e(this.__entries__, t);
                          ~r
                            ? (this.__entries__[r][1] = n)
                            : this.__entries__.push([t, n]);
                        }),
                        (t.prototype.delete = function (t) {
                          var n = this.__entries__,
                            r = e(n, t);
                          ~r && n.splice(r, 1);
                        }),
                        (t.prototype.has = function (t) {
                          return !!~e(this.__entries__, t);
                        }),
                        (t.prototype.clear = function () {
                          this.__entries__.splice(0);
                        }),
                        (t.prototype.forEach = function (e, t) {
                          void 0 === t && (t = null);
                          for (
                            var n = 0, r = this.__entries__;
                            n < r.length;
                            n++
                          ) {
                            var o = r[n];
                            e.call(t, o[1], o[0]);
                          }
                        }),
                        t
                      );
                    })();
                  })(),
                  f =
                    'undefined' != typeof window &&
                    'undefined' != typeof document &&
                    window.document === document,
                  h =
                    void 0 !== n.g && n.g.Math === Math
                      ? n.g
                      : 'undefined' != typeof self && self.Math === Math
                        ? self
                        : 'undefined' != typeof window && window.Math === Math
                          ? window
                          : Function('return this')(),
                  p =
                    'function' == typeof requestAnimationFrame
                      ? requestAnimationFrame.bind(h)
                      : function (e) {
                          return setTimeout(function () {
                            return e(Date.now());
                          }, 1e3 / 60);
                        },
                  m = [
                    'top',
                    'right',
                    'bottom',
                    'left',
                    'width',
                    'height',
                    'size',
                    'weight',
                  ],
                  v = 'undefined' != typeof MutationObserver,
                  g = (function () {
                    function e() {
                      (this.connected_ = !1),
                        (this.mutationEventsAdded_ = !1),
                        (this.mutationsObserver_ = null),
                        (this.observers_ = []),
                        (this.onTransitionEnd_ =
                          this.onTransitionEnd_.bind(this)),
                        (this.refresh = (function (e, t) {
                          var n = !1,
                            r = !1,
                            o = 0;
                          function i() {
                            n && ((n = !1), e()), r && l();
                          }
                          function a() {
                            p(i);
                          }
                          function l() {
                            var e = Date.now();
                            if (n) {
                              if (e - o < 2) return;
                              r = !0;
                            } else (n = !0), (r = !1), setTimeout(a, 20);
                            o = e;
                          }
                          return l;
                        })(this.refresh.bind(this)));
                    }
                    return (
                      (e.prototype.addObserver = function (e) {
                        ~this.observers_.indexOf(e) || this.observers_.push(e),
                          this.connected_ || this.connect_();
                      }),
                      (e.prototype.removeObserver = function (e) {
                        var t = this.observers_,
                          n = t.indexOf(e);
                        ~n && t.splice(n, 1),
                          !t.length && this.connected_ && this.disconnect_();
                      }),
                      (e.prototype.refresh = function () {
                        this.updateObservers_() && this.refresh();
                      }),
                      (e.prototype.updateObservers_ = function () {
                        var e = this.observers_.filter(function (e) {
                          return e.gatherActive(), e.hasActive();
                        });
                        return (
                          e.forEach(function (e) {
                            return e.broadcastActive();
                          }),
                          e.length > 0
                        );
                      }),
                      (e.prototype.connect_ = function () {
                        f &&
                          !this.connected_ &&
                          (document.addEventListener(
                            'transitionend',
                            this.onTransitionEnd_
                          ),
                          window.addEventListener('resize', this.refresh),
                          v
                            ? ((this.mutationsObserver_ = new MutationObserver(
                                this.refresh
                              )),
                              this.mutationsObserver_.observe(document, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0,
                              }))
                            : (document.addEventListener(
                                'DOMSubtreeModified',
                                this.refresh
                              ),
                              (this.mutationEventsAdded_ = !0)),
                          (this.connected_ = !0));
                      }),
                      (e.prototype.disconnect_ = function () {
                        f &&
                          this.connected_ &&
                          (document.removeEventListener(
                            'transitionend',
                            this.onTransitionEnd_
                          ),
                          window.removeEventListener('resize', this.refresh),
                          this.mutationsObserver_ &&
                            this.mutationsObserver_.disconnect(),
                          this.mutationEventsAdded_ &&
                            document.removeEventListener(
                              'DOMSubtreeModified',
                              this.refresh
                            ),
                          (this.mutationsObserver_ = null),
                          (this.mutationEventsAdded_ = !1),
                          (this.connected_ = !1));
                      }),
                      (e.prototype.onTransitionEnd_ = function (e) {
                        var t = e.propertyName,
                          n = void 0 === t ? '' : t;
                        m.some(function (e) {
                          return !!~n.indexOf(e);
                        }) && this.refresh();
                      }),
                      (e.getInstance = function () {
                        return (
                          this.instance_ || (this.instance_ = new e()),
                          this.instance_
                        );
                      }),
                      (e.instance_ = null),
                      e
                    );
                  })(),
                  y = function (e, t) {
                    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                      var o = r[n];
                      Object.defineProperty(e, o, {
                        value: t[o],
                        enumerable: !1,
                        writable: !1,
                        configurable: !0,
                      });
                    }
                    return e;
                  },
                  b = function (e) {
                    return (
                      (e && e.ownerDocument && e.ownerDocument.defaultView) || h
                    );
                  },
                  w = O(0, 0, 0, 0);
                function S(e) {
                  return parseFloat(e) || 0;
                }
                function x(e) {
                  for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                  return t.reduce(function (t, n) {
                    return t + S(e['border-' + n + '-width']);
                  }, 0);
                }
                var C =
                  'undefined' != typeof SVGGraphicsElement
                    ? function (e) {
                        return e instanceof b(e).SVGGraphicsElement;
                      }
                    : function (e) {
                        return (
                          e instanceof b(e).SVGElement &&
                          'function' == typeof e.getBBox
                        );
                      };
                function O(e, t, n, r) {
                  return { x: e, y: t, width: n, height: r };
                }
                var R = (function () {
                    function e(e) {
                      (this.broadcastWidth = 0),
                        (this.broadcastHeight = 0),
                        (this.contentRect_ = O(0, 0, 0, 0)),
                        (this.target = e);
                    }
                    return (
                      (e.prototype.isActive = function () {
                        var e = (function (e) {
                          return f
                            ? C(e)
                              ? (function (e) {
                                  var t = e.getBBox();
                                  return O(0, 0, t.width, t.height);
                                })(e)
                              : (function (e) {
                                  var t = e.clientWidth,
                                    n = e.clientHeight;
                                  if (!t && !n) return w;
                                  var r = b(e).getComputedStyle(e),
                                    o = (function (e) {
                                      for (
                                        var t = {},
                                          n = 0,
                                          r = [
                                            'top',
                                            'right',
                                            'bottom',
                                            'left',
                                          ];
                                        n < r.length;
                                        n++
                                      ) {
                                        var o = r[n],
                                          i = e['padding-' + o];
                                        t[o] = S(i);
                                      }
                                      return t;
                                    })(r),
                                    i = o.left + o.right,
                                    a = o.top + o.bottom,
                                    l = S(r.width),
                                    s = S(r.height);
                                  if (
                                    ('border-box' === r.boxSizing &&
                                      (Math.round(l + i) !== t &&
                                        (l -= x(r, 'left', 'right') + i),
                                      Math.round(s + a) !== n &&
                                        (s -= x(r, 'top', 'bottom') + a)),
                                    !(function (e) {
                                      return (
                                        e === b(e).document.documentElement
                                      );
                                    })(e))
                                  ) {
                                    var c = Math.round(l + i) - t,
                                      u = Math.round(s + a) - n;
                                    1 !== Math.abs(c) && (l -= c),
                                      1 !== Math.abs(u) && (s -= u);
                                  }
                                  return O(o.left, o.top, l, s);
                                })(e)
                            : w;
                        })(this.target);
                        return (
                          (this.contentRect_ = e),
                          e.width !== this.broadcastWidth ||
                            e.height !== this.broadcastHeight
                        );
                      }),
                      (e.prototype.broadcastRect = function () {
                        var e = this.contentRect_;
                        return (
                          (this.broadcastWidth = e.width),
                          (this.broadcastHeight = e.height),
                          e
                        );
                      }),
                      e
                    );
                  })(),
                  T = function (e, t) {
                    var n,
                      r,
                      o,
                      i,
                      a,
                      l,
                      s,
                      c =
                        ((r = (n = t).x),
                        (o = n.y),
                        (i = n.width),
                        (a = n.height),
                        (l =
                          'undefined' != typeof DOMRectReadOnly
                            ? DOMRectReadOnly
                            : Object),
                        (s = Object.create(l.prototype)),
                        y(s, {
                          x: r,
                          y: o,
                          width: i,
                          height: a,
                          top: o,
                          right: r + i,
                          bottom: a + o,
                          left: r,
                        }),
                        s);
                    y(this, { target: e, contentRect: c });
                  },
                  P = (function () {
                    function e(e, t, n) {
                      if (
                        ((this.activeObservations_ = []),
                        (this.observations_ = new d()),
                        'function' != typeof e)
                      )
                        throw new TypeError(
                          'The callback provided as parameter 1 is not a function.'
                        );
                      (this.callback_ = e),
                        (this.controller_ = t),
                        (this.callbackCtx_ = n);
                    }
                    return (
                      (e.prototype.observe = function (e) {
                        if (!arguments.length)
                          throw new TypeError(
                            '1 argument required, but only 0 present.'
                          );
                        if (
                          'undefined' != typeof Element &&
                          Element instanceof Object
                        ) {
                          if (!(e instanceof b(e).Element))
                            throw new TypeError(
                              'parameter 1 is not of type "Element".'
                            );
                          var t = this.observations_;
                          t.has(e) ||
                            (t.set(e, new R(e)),
                            this.controller_.addObserver(this),
                            this.controller_.refresh());
                        }
                      }),
                      (e.prototype.unobserve = function (e) {
                        if (!arguments.length)
                          throw new TypeError(
                            '1 argument required, but only 0 present.'
                          );
                        if (
                          'undefined' != typeof Element &&
                          Element instanceof Object
                        ) {
                          if (!(e instanceof b(e).Element))
                            throw new TypeError(
                              'parameter 1 is not of type "Element".'
                            );
                          var t = this.observations_;
                          t.has(e) &&
                            (t.delete(e),
                            t.size || this.controller_.removeObserver(this));
                        }
                      }),
                      (e.prototype.disconnect = function () {
                        this.clearActive(),
                          this.observations_.clear(),
                          this.controller_.removeObserver(this);
                      }),
                      (e.prototype.gatherActive = function () {
                        var e = this;
                        this.clearActive(),
                          this.observations_.forEach(function (t) {
                            t.isActive() && e.activeObservations_.push(t);
                          });
                      }),
                      (e.prototype.broadcastActive = function () {
                        if (this.hasActive()) {
                          var e = this.callbackCtx_,
                            t = this.activeObservations_.map(function (e) {
                              return new T(e.target, e.broadcastRect());
                            });
                          this.callback_.call(e, t, e), this.clearActive();
                        }
                      }),
                      (e.prototype.clearActive = function () {
                        this.activeObservations_.splice(0);
                      }),
                      (e.prototype.hasActive = function () {
                        return this.activeObservations_.length > 0;
                      }),
                      e
                    );
                  })(),
                  z = 'undefined' != typeof WeakMap ? new WeakMap() : new d(),
                  k = function e(t) {
                    if (!(this instanceof e))
                      throw new TypeError('Cannot call a class as a function.');
                    if (!arguments.length)
                      throw new TypeError(
                        '1 argument required, but only 0 present.'
                      );
                    var n = g.getInstance(),
                      r = new P(t, n, this);
                    z.set(this, r);
                  };
                ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
                  k.prototype[e] = function () {
                    var t;
                    return (t = z.get(this))[e].apply(t, arguments);
                  };
                });
                const I = void 0 !== h.ResizeObserver ? h.ResizeObserver : k;
                var E = ['client', 'offset', 'scroll', 'bounds', 'margin'];
                function M(e) {
                  var t = [];
                  return (
                    E.forEach(function (n) {
                      e[n] && t.push(n);
                    }),
                    t
                  );
                }
                function A(e, t) {
                  var n = {};
                  if (
                    (t.indexOf('client') > -1 &&
                      (n.client = {
                        top: e.clientTop,
                        left: e.clientLeft,
                        width: e.clientWidth,
                        height: e.clientHeight,
                      }),
                    t.indexOf('offset') > -1 &&
                      (n.offset = {
                        top: e.offsetTop,
                        left: e.offsetLeft,
                        width: e.offsetWidth,
                        height: e.offsetHeight,
                      }),
                    t.indexOf('scroll') > -1 &&
                      (n.scroll = {
                        top: e.scrollTop,
                        left: e.scrollLeft,
                        width: e.scrollWidth,
                        height: e.scrollHeight,
                      }),
                    t.indexOf('bounds') > -1)
                  ) {
                    var r = e.getBoundingClientRect();
                    n.bounds = {
                      top: r.top,
                      right: r.right,
                      bottom: r.bottom,
                      left: r.left,
                      width: r.width,
                      height: r.height,
                    };
                  }
                  if (t.indexOf('margin') > -1) {
                    var o = getComputedStyle(e);
                    n.margin = {
                      top: o ? parseInt(o.marginTop) : 0,
                      right: o ? parseInt(o.marginRight) : 0,
                      bottom: o ? parseInt(o.marginBottom) : 0,
                      left: o ? parseInt(o.marginLeft) : 0,
                    };
                  }
                  return n;
                }
                function L(e) {
                  return (
                    (e && e.ownerDocument && e.ownerDocument.defaultView) ||
                    window
                  );
                }
                var j = (function (t) {
                  var n, r;
                  return (
                    (r = n =
                      (function (n) {
                        var r, o;
                        function i() {
                          for (
                            var e,
                              t = arguments.length,
                              r = new Array(t),
                              o = 0;
                            o < t;
                            o++
                          )
                            r[o] = arguments[o];
                          return (
                            ((e =
                              n.call.apply(n, [this].concat(r)) || this).state =
                              {
                                contentRect: {
                                  entry: {},
                                  client: {},
                                  offset: {},
                                  scroll: {},
                                  bounds: {},
                                  margin: {},
                                },
                              }),
                            (e._animationFrameID = null),
                            (e._resizeObserver = null),
                            (e._node = null),
                            (e._window = null),
                            (e.measure = function (t) {
                              var n = A(e._node, M(e.props));
                              t && (n.entry = t[0].contentRect),
                                (e._animationFrameID =
                                  e._window.requestAnimationFrame(function () {
                                    null !== e._resizeObserver &&
                                      (e.setState({ contentRect: n }),
                                      'function' == typeof e.props.onResize &&
                                        e.props.onResize(n));
                                  }));
                            }),
                            (e._handleRef = function (t) {
                              null !== e._resizeObserver &&
                                null !== e._node &&
                                e._resizeObserver.unobserve(e._node),
                                (e._node = t),
                                (e._window = L(e._node));
                              var n = e.props.innerRef;
                              n &&
                                ('function' == typeof n
                                  ? n(e._node)
                                  : (n.current = e._node)),
                                null !== e._resizeObserver &&
                                  null !== e._node &&
                                  e._resizeObserver.observe(e._node);
                            }),
                            e
                          );
                        }
                        (o = n),
                          ((r = i).prototype = Object.create(o.prototype)),
                          (r.prototype.constructor = r),
                          s(r, o);
                        var c = i.prototype;
                        return (
                          (c.componentDidMount = function () {
                            (this._resizeObserver =
                              null !== this._window &&
                              this._window.ResizeObserver
                                ? new this._window.ResizeObserver(this.measure)
                                : new I(this.measure)),
                              null !== this._node &&
                                (this._resizeObserver.observe(this._node),
                                'function' == typeof this.props.onResize &&
                                  this.props.onResize(
                                    A(this._node, M(this.props))
                                  ));
                          }),
                          (c.componentWillUnmount = function () {
                            null !== this._window &&
                              this._window.cancelAnimationFrame(
                                this._animationFrameID
                              ),
                              null !== this._resizeObserver &&
                                (this._resizeObserver.disconnect(),
                                (this._resizeObserver = null));
                          }),
                          (c.render = function () {
                            var n = this.props,
                              r =
                                (n.innerRef,
                                n.onResize,
                                l(n, ['innerRef', 'onResize']));
                            return (0, e.createElement)(
                              t,
                              a({}, r, {
                                measureRef: this._handleRef,
                                measure: this.measure,
                                contentRect: this.state.contentRect,
                              })
                            );
                          }),
                          i
                        );
                      })(e.Component)),
                    (n.propTypes = {
                      client: u().bool,
                      offset: u().bool,
                      scroll: u().bool,
                      bounds: u().bool,
                      margin: u().bool,
                      innerRef: u().oneOfType([u().object, u().func]),
                      onResize: u().func,
                    }),
                    r
                  );
                })(function (e) {
                  var t = e.measure,
                    n = e.measureRef,
                    r = e.contentRect;
                  return (0, e.children)({
                    measure: t,
                    measureRef: n,
                    contentRect: r,
                  });
                });
                (j.displayName = 'Measure'), (j.propTypes.children = u().func);
                const H = j;
                var D = 'wv-read-mode',
                  N = 'resize',
                  W = 'pageNumberUpdated',
                  G = 'zoomUpdated',
                  F = 'addAnnotConfigUpdated',
                  U = n(379),
                  B = n.n(U),
                  V = n(937);
                function q(e) {
                  return (q =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
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
                function Z(e, t) {
                  (null == t || t > e.length) && (t = e.length);
                  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                  return r;
                }
                function Y(e, t, n, r, o, i, a) {
                  try {
                    var l = e[i](a),
                      s = l.value;
                  } catch (e) {
                    return void n(e);
                  }
                  l.done ? t(s) : Promise.resolve(s).then(r, o);
                }
                function X(e) {
                  return function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (r, o) {
                      var i = e.apply(t, n);
                      function a(e) {
                        Y(i, r, o, a, l, 'next', e);
                      }
                      function l(e) {
                        Y(i, r, o, a, l, 'throw', e);
                      }
                      a(void 0);
                    });
                  };
                }
                function J(e, t) {
                  return (J = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                        return (e.__proto__ = t), e;
                      })(e, t);
                }
                function K(e, t) {
                  if (t && ('object' === q(t) || 'function' == typeof t))
                    return t;
                  if (void 0 !== t)
                    throw new TypeError(
                      'Derived constructors may only return object or undefined'
                    );
                  return $(e);
                }
                function $(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                }
                function Q(e) {
                  return (Q = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
                }
                function ee(e, t, n) {
                  return (
                    (t = te(t)) in e
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
                function te(e) {
                  var t = (function (e, t) {
                    if ('object' !== q(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var r = n.call(e, 'string');
                      if ('object' !== q(r)) return r;
                      throw new TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return String(e);
                  })(e);
                  return 'symbol' === q(t) ? t : String(t);
                }
                B()(V.Z, { insert: 'head', singleton: !1 }), V.Z.locals;
                var ne = (function (e) {
                  !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                      throw new TypeError(
                        'Super expression must either be null or a function'
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, 'prototype', { writable: !1 }),
                      t && J(e, t);
                  })(c, e);
                  var t,
                    n,
                    r,
                    o,
                    i,
                    a,
                    l,
                    s =
                      ((a = c),
                      (l = (function () {
                        if ('undefined' == typeof Reflect || !Reflect.construct)
                          return !1;
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
                      })()),
                      function () {
                        var e,
                          t = Q(a);
                        if (l) {
                          var n = Q(this).constructor;
                          e = Reflect.construct(t, arguments, n);
                        } else e = t.apply(this, arguments);
                        return K(this, e);
                      });
                  function c(e) {
                    var t;
                    return (
                      (function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            'Cannot call a class as a function'
                          );
                      })(this, c),
                      ee(
                        $((t = s.call(this, e))),
                        'handleLinkClicked',
                        function (e) {
                          if (e.match(/^\d+\-0\.html$/)) {
                            var n = Number(e.split('-')[0]);
                            if (t.pageObjNumMap.has(n)) {
                              var r = t.pageObjNumMap.get(n);
                              t.jumpToPage(r);
                            } else {
                              var o = (function () {
                                var e = X(
                                  regeneratorRuntime.mark(function e() {
                                    var r, o, i;
                                    return regeneratorRuntime.wrap(function (
                                      e
                                    ) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            t.setState({ showSpinner: !0 }),
                                              (r = 0);
                                          case 2:
                                            if (!(r < t.state.pages.length)) {
                                              e.next = 16;
                                              break;
                                            }
                                            if (!t.state.pages[r].loaded) {
                                              e.next = 5;
                                              break;
                                            }
                                            return e.abrupt('continue', 13);
                                          case 5:
                                            return (
                                              (e.next = 7),
                                              t.getPageContent(r, !0)
                                            );
                                          case 7:
                                            if (
                                              ((o = e.sent),
                                              (i = o.objNum),
                                              n !== i)
                                            ) {
                                              e.next = 13;
                                              break;
                                            }
                                            return (
                                              t.jumpToPage(r),
                                              t.setState({ showSpinner: !1 }),
                                              e.abrupt('break', 16)
                                            );
                                          case 13:
                                            r++, (e.next = 2);
                                            break;
                                          case 16:
                                          case 'end':
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function () {
                                  return e.apply(this, arguments);
                                };
                              })();
                              t.runPdfNetTask(o);
                            }
                          } else {
                            var i;
                            null === (i = window) || void 0 === i || i.open(e);
                          }
                        }
                      ),
                      ee($(t), 'getViewerElement', function () {
                        return t.viewerElement;
                      }),
                      ee($(t), 'handleAddAnnotConfigUpdated', function (e) {}),
                      (t.state = {
                        pages: [],
                        zoom: '1',
                        showSpinner: !0,
                        spinnerStyle: {},
                        addAnnotConfig: void 0,
                      }),
                      (t.initialized = !1),
                      (t.doc = void 0),
                      (t.pageObjNumMap = new Map()),
                      (t.preloadPagesNum = 1),
                      t
                    );
                  }
                  return (
                    (t = c),
                    (n = [
                      {
                        key: 'componentDidMount',
                        value: function () {
                          (this.viewerElement = document.getElementById(D)),
                            this.resizeSpinner(),
                            this.props.viewport.addEventListener(
                              W,
                              this.handlePageNumberUpdated
                            ),
                            this.props.viewport.addEventListener(
                              G,
                              this.handleZoomUpdated
                            ),
                            this.props.viewport.addEventListener(
                              F,
                              this.handleAddAnnotConfigUpdated
                            ),
                            this.initialize();
                        },
                      },
                      {
                        key: 'componentWillUnmount',
                        value: function () {
                          this.props.viewport.removeEventListener(
                            W,
                            this.handlePageNumberUpdated
                          ),
                            this.props.viewport.removeEventListener(
                              G,
                              this.handleZoomUpdated
                            ),
                            this.props.viewport.removeEventListener(
                              F,
                              this.handleAddAnnotConfigUpdated
                            );
                        },
                      },
                      {
                        key: 'runPdfNetTask',
                        value: function (e) {
                          var t = this;
                          this.props.pdfNet
                            .initialize(void 0, 'ems')
                            .then(function () {
                              var n = (function () {
                                var t = X(
                                  regeneratorRuntime.mark(function t() {
                                    return regeneratorRuntime.wrap(
                                      function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              return (
                                                (t.prev = 0), (t.next = 3), e()
                                              );
                                            case 3:
                                              t.next = 8;
                                              break;
                                            case 5:
                                              (t.prev = 5),
                                                (t.t0 = t.catch(0)),
                                                console.log(t.t0);
                                            case 8:
                                            case 'end':
                                              return t.stop();
                                          }
                                      },
                                      t,
                                      null,
                                      [[0, 5]]
                                    );
                                  })
                                );
                                return function () {
                                  return t.apply(this, arguments);
                                };
                              })();
                              t.props.pdfNet.runWithoutCleanup(n);
                            });
                        },
                      },
                      {
                        key: 'initialize',
                        value: function () {
                          var e = this,
                            t = (function () {
                              var t = X(
                                regeneratorRuntime.mark(function t() {
                                  var n;
                                  return regeneratorRuntime.wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (t.next = 2), e.props.doc;
                                        case 2:
                                          return (
                                            (e.doc = t.sent),
                                            (t.next = 5),
                                            e.doc.initSecurityHandler()
                                          );
                                        case 5:
                                          return (
                                            (t.next = 7), e.doc.getPageCount()
                                          );
                                        case 7:
                                          if (
                                            ((n = t.sent),
                                            e.props.options.pageCountHandler(n),
                                            0 !== n)
                                          ) {
                                            t.next = 13;
                                            break;
                                          }
                                          e.setState(function (e) {
                                            return {
                                              pages: e.pages.concat({
                                                content:
                                                  'There is no text content in this file.',
                                                loaded: !0,
                                              }),
                                            };
                                          }),
                                            (t.next = 15);
                                          break;
                                        case 13:
                                          return (
                                            (t.next = 15), e.initializePages(n)
                                          );
                                        case 15:
                                          (e.initialized = !0),
                                            e.props.options.pageNum > 1 &&
                                              e.props.options.pageNum <= n &&
                                              e.jumpToPage(
                                                e.props.options.pageNum - 1
                                              ),
                                            e.setState({ showSpinner: !1 });
                                        case 18:
                                        case 'end':
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              );
                              return function () {
                                return t.apply(this, arguments);
                              };
                            })();
                          this.runPdfNetTask(t);
                        },
                      },
                      {
                        key: 'initializePages',
                        value:
                          ((i = X(
                            regeneratorRuntime.mark(function e(t) {
                              var n,
                                r,
                                o = this;
                              return regeneratorRuntime.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (n = regeneratorRuntime.mark(
                                        function e(n) {
                                          var r, i, a;
                                          return regeneratorRuntime.wrap(
                                            function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    if (
                                                      ((r = ''),
                                                      (i = void 0),
                                                      !(n < o.preloadPagesNum))
                                                    ) {
                                                      e.next = 7;
                                                      break;
                                                    }
                                                    return (
                                                      (e.next = 4),
                                                      o.getPageContent(n, !1, t)
                                                    );
                                                  case 4:
                                                    (a = e.sent),
                                                      (r = a.htmlStr),
                                                      (i = a.pdfNetReflow);
                                                  case 7:
                                                    o.setState(function (e) {
                                                      return {
                                                        pages: e.pages.concat({
                                                          content: r,
                                                          loaded:
                                                            n <
                                                            o.preloadPagesNum,
                                                          pdfNetReflow: i,
                                                        }),
                                                      };
                                                    });
                                                  case 8:
                                                  case 'end':
                                                    return e.stop();
                                                }
                                            },
                                            e
                                          );
                                        }
                                      )),
                                        (r = 0);
                                    case 2:
                                      if (!(r < t)) {
                                        e.next = 7;
                                        break;
                                      }
                                      return e.delegateYield(n(r), 't0', 4);
                                    case 4:
                                      r++, (e.next = 2);
                                      break;
                                    case 7:
                                    case 'end':
                                      return e.stop();
                                  }
                              }, e);
                            })
                          )),
                          function (e) {
                            return i.apply(this, arguments);
                          }),
                      },
                      {
                        key: 'getPageContent',
                        value:
                          ((o = X(
                            regeneratorRuntime.mark(function e(t) {
                              var n,
                                r,
                                o,
                                i,
                                a,
                                l = arguments;
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n =
                                            l.length > 1 &&
                                            void 0 !== l[1] &&
                                            l[1]),
                                          l.length > 2 && l[2],
                                          (e.next = 5),
                                          this.doc.getPage(t + 1)
                                        );
                                      case 5:
                                        return (
                                          (r = e.sent),
                                          (e.next = 8),
                                          r.getSDFObj()
                                        );
                                      case 8:
                                        return (
                                          (e.next = 10), e.sent.getObjNum()
                                        );
                                      case 10:
                                        if (
                                          ((o = e.sent),
                                          this.pageObjNumMap.set(o, t),
                                          !this.isReflowSupported())
                                        ) {
                                          e.next = 26;
                                          break;
                                        }
                                        return (
                                          (e.next = 15),
                                          this.props.pdfNet.Convert.createReflow(
                                            r,
                                            ''
                                          )
                                        );
                                      case 15:
                                        if (((a = e.sent), !n)) {
                                          e.next = 20;
                                          break;
                                        }
                                        (e.t0 = ''), (e.next = 23);
                                        break;
                                      case 20:
                                        return (e.next = 22), a.getHtml();
                                      case 22:
                                        e.t0 = e.sent;
                                      case 23:
                                        (i = e.t0), (e.next = 34);
                                        break;
                                      case 26:
                                        if (!n) {
                                          e.next = 30;
                                          break;
                                        }
                                        (e.t1 = ''), (e.next = 33);
                                        break;
                                      case 30:
                                        return (
                                          (e.next = 32),
                                          this.props.pdfNet.Convert.pageToHtml(
                                            r
                                          )
                                        );
                                      case 32:
                                        e.t1 = e.sent;
                                      case 33:
                                        i = e.t1;
                                      case 34:
                                        return e.abrupt('return', {
                                          htmlStr: i,
                                          objNum: o,
                                          pdfNetReflow: a,
                                        });
                                      case 35:
                                      case 'end':
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          )),
                          function (e) {
                            return o.apply(this, arguments);
                          }),
                      },
                      {
                        key: 'loadPageByNum',
                        value:
                          ((r = X(
                            regeneratorRuntime.mark(function e(t) {
                              var n, r, o;
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2), this.getPageContent(t)
                                        );
                                      case 2:
                                        (n = e.sent),
                                          (r = n.htmlStr),
                                          (o = n.pdfNetReflow),
                                          this.setState(function (e) {
                                            var n,
                                              i =
                                                (function (e) {
                                                  if (Array.isArray(e))
                                                    return Z(e);
                                                })((n = e.pages)) ||
                                                (function (e) {
                                                  if (
                                                    ('undefined' !=
                                                      typeof Symbol &&
                                                      null !=
                                                        e[Symbol.iterator]) ||
                                                    null != e['@@iterator']
                                                  )
                                                    return Array.from(e);
                                                })(n) ||
                                                (function (e, t) {
                                                  if (e) {
                                                    if ('string' == typeof e)
                                                      return Z(e, t);
                                                    var n =
                                                      Object.prototype.toString
                                                        .call(e)
                                                        .slice(8, -1);
                                                    return (
                                                      'Object' === n &&
                                                        e.constructor &&
                                                        (n =
                                                          e.constructor.name),
                                                      'Map' === n || 'Set' === n
                                                        ? Array.from(e)
                                                        : 'Arguments' === n ||
                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                              n
                                                            )
                                                          ? Z(e, t)
                                                          : void 0
                                                    );
                                                  }
                                                })(n) ||
                                                (function () {
                                                  throw new TypeError(
                                                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                                  );
                                                })();
                                            return (
                                              (i[t] = {
                                                content: r,
                                                loaded: !0,
                                                pdfNetReflow: o,
                                              }),
                                              { pages: i }
                                            );
                                          });
                                      case 6:
                                      case 'end':
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          )),
                          function (e) {
                            return r.apply(this, arguments);
                          }),
                      },
                      {
                        key: 'resize',
                        value: function () {
                          this.resizeSpinner();
                        },
                      },
                      {
                        key: 'handleZoomUpdated',
                        value: function (e) {
                          var t = this;
                          this.setState(
                            { zoom: e.detail.toString() },
                            function () {
                              t.resize();
                            }
                          );
                        },
                      },
                      {
                        key: 'resizeSpinner',
                        value: function () {
                          this.setState({
                            spinnerStyle: {
                              zIndex: 10,
                              height: this.viewerElement.clientHeight + 'px',
                            },
                          });
                        },
                      },
                      { key: 'jumpToPage', value: function (e) {} },
                      {
                        key: 'handlePageNumberUpdated',
                        value: function (e) {},
                      },
                      {
                        key: 'isReflowSupported',
                        value: function () {
                          return !1;
                        },
                      },
                    ]) &&
                      (function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                          var r = t[n];
                          (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            'value' in r && (r.writable = !0),
                            Object.defineProperty(e, te(r.key), r);
                        }
                      })(t.prototype, n),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    c
                  );
                })(t().PureComponent);
                function re(e) {
                  return 'read-mode-page-'.concat(e);
                }
                function oe() {
                  return navigator.userAgent.indexOf('Safari') > -1;
                }
                function ie(e) {
                  var t;
                  return null == e || null === (t = e.document) || void 0 === t
                    ? void 0
                    : t.getElementsByTagName('html')[0];
                }
                function ae(e) {
                  var t;
                  return null === (t = ie(e)) || void 0 === t
                    ? void 0
                    : t.getElementsByTagName('body')[0];
                }
                function le(e) {
                  var t;
                  return null === (t = ie(e)) || void 0 === t
                    ? void 0
                    : t.getElementsByTagName('head')[0];
                }
                var se = n(926),
                  ce = n(316);
                function ue(e) {
                  var t = e.getBoundingClientRect();
                  return {
                    width: t.width,
                    height: t.height,
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    x: t.left,
                    y: t.top,
                  };
                }
                function de(e) {
                  if (null == e) return window;
                  if ('[object Window]' !== e.toString()) {
                    var t = e.ownerDocument;
                    return (t && t.defaultView) || window;
                  }
                  return e;
                }
                function fe(e) {
                  var t = de(e);
                  return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset,
                  };
                }
                function he(e) {
                  return e instanceof de(e).Element || e instanceof Element;
                }
                function pe(e) {
                  return (
                    e instanceof de(e).HTMLElement || e instanceof HTMLElement
                  );
                }
                function me(e) {
                  return (
                    'undefined' != typeof ShadowRoot &&
                    (e instanceof de(e).ShadowRoot || e instanceof ShadowRoot)
                  );
                }
                function ve(e) {
                  return e ? (e.nodeName || '').toLowerCase() : null;
                }
                function ge(e) {
                  return (
                    (he(e) ? e.ownerDocument : e.document) || window.document
                  ).documentElement;
                }
                function ye(e) {
                  return ue(ge(e)).left + fe(e).scrollLeft;
                }
                function be(e) {
                  return de(e).getComputedStyle(e);
                }
                function we(e) {
                  var t = be(e),
                    n = t.overflow,
                    r = t.overflowX,
                    o = t.overflowY;
                  return /auto|scroll|overlay|hidden/.test(n + o + r);
                }
                function _e(e, t, n) {
                  void 0 === n && (n = !1);
                  var r,
                    o,
                    i = ge(t),
                    a = ue(e),
                    l = pe(t),
                    s = { scrollLeft: 0, scrollTop: 0 },
                    c = { x: 0, y: 0 };
                  return (
                    (l || (!l && !n)) &&
                      (('body' !== ve(t) || we(i)) &&
                        (s =
                          (r = t) !== de(r) && pe(r)
                            ? {
                                scrollLeft: (o = r).scrollLeft,
                                scrollTop: o.scrollTop,
                              }
                            : fe(r)),
                      pe(t)
                        ? (((c = ue(t)).x += t.clientLeft),
                          (c.y += t.clientTop))
                        : i && (c.x = ye(i))),
                    {
                      x: a.left + s.scrollLeft - c.x,
                      y: a.top + s.scrollTop - c.y,
                      width: a.width,
                      height: a.height,
                    }
                  );
                }
                function Se(e) {
                  var t = ue(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                  return (
                    Math.abs(t.width - n) <= 1 && (n = t.width),
                    Math.abs(t.height - r) <= 1 && (r = t.height),
                    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
                  );
                }
                function xe(e) {
                  return 'html' === ve(e)
                    ? e
                    : e.assignedSlot ||
                        e.parentNode ||
                        (me(e) ? e.host : null) ||
                        ge(e);
                }
                function Ce(e, t) {
                  var n;
                  void 0 === t && (t = []);
                  var r = (function e(t) {
                      return ['html', 'body', '#document'].indexOf(ve(t)) >= 0
                        ? t.ownerDocument.body
                        : pe(t) && we(t)
                          ? t
                          : e(xe(t));
                    })(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    i = de(r),
                    a = o
                      ? [i].concat(i.visualViewport || [], we(r) ? r : [])
                      : r,
                    l = t.concat(a);
                  return o ? l : l.concat(Ce(xe(a)));
                }
                function Oe(e) {
                  return ['table', 'td', 'th'].indexOf(ve(e)) >= 0;
                }
                function Re(e) {
                  return pe(e) && 'fixed' !== be(e).position
                    ? e.offsetParent
                    : null;
                }
                function Te(e) {
                  for (
                    var t = de(e), n = Re(e);
                    n && Oe(n) && 'static' === be(n).position;

                  )
                    n = Re(n);
                  return n &&
                    ('html' === ve(n) ||
                      ('body' === ve(n) && 'static' === be(n).position))
                    ? t
                    : n ||
                        (function (e) {
                          var t =
                            -1 !==
                            navigator.userAgent
                              .toLowerCase()
                              .indexOf('firefox');
                          if (
                            -1 !== navigator.userAgent.indexOf('Trident') &&
                            pe(e) &&
                            'fixed' === be(e).position
                          )
                            return null;
                          for (
                            var n = xe(e);
                            pe(n) && ['html', 'body'].indexOf(ve(n)) < 0;

                          ) {
                            var r = be(n);
                            if (
                              'none' !== r.transform ||
                              'none' !== r.perspective ||
                              'paint' === r.contain ||
                              -1 !==
                                ['transform', 'perspective'].indexOf(
                                  r.willChange
                                ) ||
                              (t && 'filter' === r.willChange) ||
                              (t && r.filter && 'none' !== r.filter)
                            )
                              return n;
                            n = n.parentNode;
                          }
                          return null;
                        })(e) ||
                        t;
                }
                var Pe = 'top',
                  ze = 'bottom',
                  ke = 'right',
                  Ie = 'left',
                  Ee = 'auto',
                  Me = [Pe, ze, ke, Ie],
                  Ae = 'start',
                  Le = 'viewport',
                  je = 'popper',
                  He = Me.reduce(function (e, t) {
                    return e.concat([t + '-' + Ae, t + '-end']);
                  }, []),
                  De = [].concat(Me, [Ee]).reduce(function (e, t) {
                    return e.concat([t, t + '-' + Ae, t + '-end']);
                  }, []),
                  Ne = [
                    'beforeRead',
                    'read',
                    'afterRead',
                    'beforeMain',
                    'main',
                    'afterMain',
                    'beforeWrite',
                    'write',
                    'afterWrite',
                  ];
                function We(e) {
                  var t = new Map(),
                    n = new Set(),
                    r = [];
                  return (
                    e.forEach(function (e) {
                      t.set(e.name, e);
                    }),
                    e.forEach(function (e) {
                      n.has(e.name) ||
                        (function e(o) {
                          n.add(o.name),
                            []
                              .concat(
                                o.requires || [],
                                o.requiresIfExists || []
                              )
                              .forEach(function (r) {
                                if (!n.has(r)) {
                                  var o = t.get(r);
                                  o && e(o);
                                }
                              }),
                            r.push(o);
                        })(e);
                    }),
                    r
                  );
                }
                var Ge = {
                  placement: 'bottom',
                  modifiers: [],
                  strategy: 'absolute',
                };
                function Fe() {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return !t.some(function (e) {
                    return !(e && 'function' == typeof e.getBoundingClientRect);
                  });
                }
                var Ue = { passive: !0 };
                const Be = {
                  name: 'eventListeners',
                  enabled: !0,
                  phase: 'write',
                  fn: function () {},
                  effect: function (e) {
                    var t = e.state,
                      n = e.instance,
                      r = e.options,
                      o = r.scroll,
                      i = void 0 === o || o,
                      a = r.resize,
                      l = void 0 === a || a,
                      s = de(t.elements.popper),
                      c = [].concat(
                        t.scrollParents.reference,
                        t.scrollParents.popper
                      );
                    return (
                      i &&
                        c.forEach(function (e) {
                          e.addEventListener('scroll', n.update, Ue);
                        }),
                      l && s.addEventListener('resize', n.update, Ue),
                      function () {
                        i &&
                          c.forEach(function (e) {
                            e.removeEventListener('scroll', n.update, Ue);
                          }),
                          l && s.removeEventListener('resize', n.update, Ue);
                      }
                    );
                  },
                  data: {},
                };
                function Ve(e) {
                  return e.split('-')[0];
                }
                function qe(e) {
                  return e.split('-')[1];
                }
                function Ze(e) {
                  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
                }
                function Ye(e) {
                  var t,
                    n = e.reference,
                    r = e.element,
                    o = e.placement,
                    i = o ? Ve(o) : null,
                    a = o ? qe(o) : null,
                    l = n.x + n.width / 2 - r.width / 2,
                    s = n.y + n.height / 2 - r.height / 2;
                  switch (i) {
                    case Pe:
                      t = { x: l, y: n.y - r.height };
                      break;
                    case ze:
                      t = { x: l, y: n.y + n.height };
                      break;
                    case ke:
                      t = { x: n.x + n.width, y: s };
                      break;
                    case Ie:
                      t = { x: n.x - r.width, y: s };
                      break;
                    default:
                      t = { x: n.x, y: n.y };
                  }
                  var c = i ? Ze(i) : null;
                  if (null != c) {
                    var u = 'y' === c ? 'height' : 'width';
                    switch (a) {
                      case Ae:
                        t[c] = t[c] - (n[u] / 2 - r[u] / 2);
                        break;
                      case 'end':
                        t[c] = t[c] + (n[u] / 2 - r[u] / 2);
                    }
                  }
                  return t;
                }
                const Xe = {
                  name: 'popperOffsets',
                  enabled: !0,
                  phase: 'read',
                  fn: function (e) {
                    var t = e.state,
                      n = e.name;
                    t.modifiersData[n] = Ye({
                      reference: t.rects.reference,
                      element: t.rects.popper,
                      strategy: 'absolute',
                      placement: t.placement,
                    });
                  },
                  data: {},
                };
                var Je = Math.max,
                  Ke = Math.min,
                  $e = Math.round,
                  Qe = {
                    top: 'auto',
                    right: 'auto',
                    bottom: 'auto',
                    left: 'auto',
                  };
                function et(e) {
                  var t,
                    n = e.popper,
                    r = e.popperRect,
                    o = e.placement,
                    i = e.offsets,
                    a = e.position,
                    l = e.gpuAcceleration,
                    s = e.adaptive,
                    c = e.roundOffsets,
                    u =
                      !0 === c
                        ? (function (e) {
                            var t = e.x,
                              n = e.y,
                              r = window.devicePixelRatio || 1;
                            return {
                              x: $e($e(t * r) / r) || 0,
                              y: $e($e(n * r) / r) || 0,
                            };
                          })(i)
                        : 'function' == typeof c
                          ? c(i)
                          : i,
                    d = u.x,
                    f = void 0 === d ? 0 : d,
                    h = u.y,
                    p = void 0 === h ? 0 : h,
                    m = i.hasOwnProperty('x'),
                    v = i.hasOwnProperty('y'),
                    g = Ie,
                    y = Pe,
                    b = window;
                  if (s) {
                    var w = Te(n),
                      _ = 'clientHeight',
                      S = 'clientWidth';
                    w === de(n) &&
                      'static' !== be((w = ge(n))).position &&
                      ((_ = 'scrollHeight'), (S = 'scrollWidth')),
                      (w = w),
                      o === Pe &&
                        ((y = ze), (p -= w[_] - r.height), (p *= l ? 1 : -1)),
                      o === Ie &&
                        ((g = ke), (f -= w[S] - r.width), (f *= l ? 1 : -1));
                  }
                  var x,
                    C = Object.assign({ position: a }, s && Qe);
                  return l
                    ? Object.assign(
                        {},
                        C,
                        (((x = {})[y] = v ? '0' : ''),
                        (x[g] = m ? '0' : ''),
                        (x.transform =
                          (b.devicePixelRatio || 1) < 2
                            ? 'translate(' + f + 'px, ' + p + 'px)'
                            : 'translate3d(' + f + 'px, ' + p + 'px, 0)'),
                        x)
                      )
                    : Object.assign(
                        {},
                        C,
                        (((t = {})[y] = v ? p + 'px' : ''),
                        (t[g] = m ? f + 'px' : ''),
                        (t.transform = ''),
                        t)
                      );
                }
                const tt = {
                  name: 'applyStyles',
                  enabled: !0,
                  phase: 'write',
                  fn: function (e) {
                    var t = e.state;
                    Object.keys(t.elements).forEach(function (e) {
                      var n = t.styles[e] || {},
                        r = t.attributes[e] || {},
                        o = t.elements[e];
                      pe(o) &&
                        ve(o) &&
                        (Object.assign(o.style, n),
                        Object.keys(r).forEach(function (e) {
                          var t = r[e];
                          !1 === t
                            ? o.removeAttribute(e)
                            : o.setAttribute(e, !0 === t ? '' : t);
                        }));
                    });
                  },
                  effect: function (e) {
                    var t = e.state,
                      n = {
                        popper: {
                          position: t.options.strategy,
                          left: '0',
                          top: '0',
                          margin: '0',
                        },
                        arrow: { position: 'absolute' },
                        reference: {},
                      };
                    return (
                      Object.assign(t.elements.popper.style, n.popper),
                      (t.styles = n),
                      t.elements.arrow &&
                        Object.assign(t.elements.arrow.style, n.arrow),
                      function () {
                        Object.keys(t.elements).forEach(function (e) {
                          var r = t.elements[e],
                            o = t.attributes[e] || {},
                            i = Object.keys(
                              t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                            ).reduce(function (e, t) {
                              return (e[t] = ''), e;
                            }, {});
                          pe(r) &&
                            ve(r) &&
                            (Object.assign(r.style, i),
                            Object.keys(o).forEach(function (e) {
                              r.removeAttribute(e);
                            }));
                        });
                      }
                    );
                  },
                  requires: ['computeStyles'],
                };
                var nt = {
                  left: 'right',
                  right: 'left',
                  bottom: 'top',
                  top: 'bottom',
                };
                function rt(e) {
                  return e.replace(/left|right|bottom|top/g, function (e) {
                    return nt[e];
                  });
                }
                var ot = { start: 'end', end: 'start' };
                function it(e) {
                  return e.replace(/start|end/g, function (e) {
                    return ot[e];
                  });
                }
                function at(e, t) {
                  var n = t.getRootNode && t.getRootNode();
                  if (e.contains(t)) return !0;
                  if (n && me(n)) {
                    var r = t;
                    do {
                      if (r && e.isSameNode(r)) return !0;
                      r = r.parentNode || r.host;
                    } while (r);
                  }
                  return !1;
                }
                function lt(e) {
                  return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height,
                  });
                }
                function st(e, t) {
                  return t === Le
                    ? lt(
                        (function (e) {
                          var t = de(e),
                            n = ge(e),
                            r = t.visualViewport,
                            o = n.clientWidth,
                            i = n.clientHeight,
                            a = 0,
                            l = 0;
                          return (
                            r &&
                              ((o = r.width),
                              (i = r.height),
                              /^((?!chrome|android).)*safari/i.test(
                                navigator.userAgent
                              ) || ((a = r.offsetLeft), (l = r.offsetTop))),
                            { width: o, height: i, x: a + ye(e), y: l }
                          );
                        })(e)
                      )
                    : pe(t)
                      ? (function (e) {
                          var t = ue(e);
                          return (
                            (t.top = t.top + e.clientTop),
                            (t.left = t.left + e.clientLeft),
                            (t.bottom = t.top + e.clientHeight),
                            (t.right = t.left + e.clientWidth),
                            (t.width = e.clientWidth),
                            (t.height = e.clientHeight),
                            (t.x = t.left),
                            (t.y = t.top),
                            t
                          );
                        })(t)
                      : lt(
                          (function (e) {
                            var t,
                              n = ge(e),
                              r = fe(e),
                              o =
                                null == (t = e.ownerDocument) ? void 0 : t.body,
                              i = Je(
                                n.scrollWidth,
                                n.clientWidth,
                                o ? o.scrollWidth : 0,
                                o ? o.clientWidth : 0
                              ),
                              a = Je(
                                n.scrollHeight,
                                n.clientHeight,
                                o ? o.scrollHeight : 0,
                                o ? o.clientHeight : 0
                              ),
                              l = -r.scrollLeft + ye(e),
                              s = -r.scrollTop;
                            return (
                              'rtl' === be(o || n).direction &&
                                (l +=
                                  Je(n.clientWidth, o ? o.clientWidth : 0) - i),
                              { width: i, height: a, x: l, y: s }
                            );
                          })(ge(e))
                        );
                }
                function ct(e) {
                  return Object.assign(
                    {},
                    { top: 0, right: 0, bottom: 0, left: 0 },
                    e
                  );
                }
                function ut(e, t) {
                  return t.reduce(function (t, n) {
                    return (t[n] = e), t;
                  }, {});
                }
                function dt(e, t) {
                  void 0 === t && (t = {});
                  var n = t,
                    r = n.placement,
                    o = void 0 === r ? e.placement : r,
                    i = n.boundary,
                    a = void 0 === i ? 'clippingParents' : i,
                    l = n.rootBoundary,
                    s = void 0 === l ? Le : l,
                    c = n.elementContext,
                    u = void 0 === c ? je : c,
                    d = n.altBoundary,
                    f = void 0 !== d && d,
                    h = n.padding,
                    p = void 0 === h ? 0 : h,
                    m = ct('number' != typeof p ? p : ut(p, Me)),
                    v = u === je ? 'reference' : je,
                    g = e.elements.reference,
                    y = e.rects.popper,
                    b = e.elements[f ? v : u],
                    w = (function (e, t, n) {
                      var r =
                          'clippingParents' === t
                            ? (function (e) {
                                var t = Ce(xe(e)),
                                  n =
                                    ['absolute', 'fixed'].indexOf(
                                      be(e).position
                                    ) >= 0 && pe(e)
                                      ? Te(e)
                                      : e;
                                return he(n)
                                  ? t.filter(function (e) {
                                      return (
                                        he(e) && at(e, n) && 'body' !== ve(e)
                                      );
                                    })
                                  : [];
                              })(e)
                            : [].concat(t),
                        o = [].concat(r, [n]),
                        i = o[0],
                        a = o.reduce(
                          function (t, n) {
                            var r = st(e, n);
                            return (
                              (t.top = Je(r.top, t.top)),
                              (t.right = Ke(r.right, t.right)),
                              (t.bottom = Ke(r.bottom, t.bottom)),
                              (t.left = Je(r.left, t.left)),
                              t
                            );
                          },
                          st(e, i)
                        );
                      return (
                        (a.width = a.right - a.left),
                        (a.height = a.bottom - a.top),
                        (a.x = a.left),
                        (a.y = a.top),
                        a
                      );
                    })(
                      he(b) ? b : b.contextElement || ge(e.elements.popper),
                      a,
                      s
                    ),
                    _ = ue(g),
                    S = Ye({
                      reference: _,
                      element: y,
                      strategy: 'absolute',
                      placement: o,
                    }),
                    x = lt(Object.assign({}, y, S)),
                    C = u === je ? x : _,
                    O = {
                      top: w.top - C.top + m.top,
                      bottom: C.bottom - w.bottom + m.bottom,
                      left: w.left - C.left + m.left,
                      right: C.right - w.right + m.right,
                    },
                    R = e.modifiersData.offset;
                  if (u === je && R) {
                    var T = R[o];
                    Object.keys(O).forEach(function (e) {
                      var t = [ke, ze].indexOf(e) >= 0 ? 1 : -1,
                        n = [Pe, ze].indexOf(e) >= 0 ? 'y' : 'x';
                      O[e] += T[n] * t;
                    });
                  }
                  return O;
                }
                function ft(e, t, n) {
                  return Je(e, Ke(t, n));
                }
                function ht(e, t, n) {
                  return (
                    void 0 === n && (n = { x: 0, y: 0 }),
                    {
                      top: e.top - t.height - n.y,
                      right: e.right - t.width + n.x,
                      bottom: e.bottom - t.height + n.y,
                      left: e.left - t.width - n.x,
                    }
                  );
                }
                function pt(e) {
                  return [Pe, ke, ze, Ie].some(function (t) {
                    return e[t] >= 0;
                  });
                }
                var mt = (function (e) {
                    void 0 === e && (e = {});
                    var t = e,
                      n = t.defaultModifiers,
                      r = void 0 === n ? [] : n,
                      o = t.defaultOptions,
                      i = void 0 === o ? Ge : o;
                    return function (e, t, n) {
                      void 0 === n && (n = i);
                      var o,
                        a,
                        l = {
                          placement: 'bottom',
                          orderedModifiers: [],
                          options: Object.assign({}, Ge, i),
                          modifiersData: {},
                          elements: { reference: e, popper: t },
                          attributes: {},
                          styles: {},
                        },
                        s = [],
                        c = !1,
                        u = {
                          state: l,
                          setOptions: function (n) {
                            d(),
                              (l.options = Object.assign({}, i, l.options, n)),
                              (l.scrollParents = {
                                reference: he(e)
                                  ? Ce(e)
                                  : e.contextElement
                                    ? Ce(e.contextElement)
                                    : [],
                                popper: Ce(t),
                              });
                            var o,
                              a,
                              c = (function (e) {
                                var t = We(e);
                                return Ne.reduce(function (e, n) {
                                  return e.concat(
                                    t.filter(function (e) {
                                      return e.phase === n;
                                    })
                                  );
                                }, []);
                              })(
                                ((o = [].concat(r, l.options.modifiers)),
                                (a = o.reduce(function (e, t) {
                                  var n = e[t.name];
                                  return (
                                    (e[t.name] = n
                                      ? Object.assign({}, n, t, {
                                          options: Object.assign(
                                            {},
                                            n.options,
                                            t.options
                                          ),
                                          data: Object.assign(
                                            {},
                                            n.data,
                                            t.data
                                          ),
                                        })
                                      : t),
                                    e
                                  );
                                }, {})),
                                Object.keys(a).map(function (e) {
                                  return a[e];
                                }))
                              );
                            return (
                              (l.orderedModifiers = c.filter(function (e) {
                                return e.enabled;
                              })),
                              l.orderedModifiers.forEach(function (e) {
                                var t = e.name,
                                  n = e.options,
                                  r = void 0 === n ? {} : n,
                                  o = e.effect;
                                if ('function' == typeof o) {
                                  var i = o({
                                    state: l,
                                    name: t,
                                    instance: u,
                                    options: r,
                                  });
                                  s.push(i || function () {});
                                }
                              }),
                              u.update()
                            );
                          },
                          forceUpdate: function () {
                            if (!c) {
                              var e = l.elements,
                                t = e.reference,
                                n = e.popper;
                              if (Fe(t, n)) {
                                (l.rects = {
                                  reference: _e(
                                    t,
                                    Te(n),
                                    'fixed' === l.options.strategy
                                  ),
                                  popper: Se(n),
                                }),
                                  (l.reset = !1),
                                  (l.placement = l.options.placement),
                                  l.orderedModifiers.forEach(function (e) {
                                    return (l.modifiersData[e.name] =
                                      Object.assign({}, e.data));
                                  });
                                for (
                                  var r = 0;
                                  r < l.orderedModifiers.length;
                                  r++
                                )
                                  if (!0 !== l.reset) {
                                    var o = l.orderedModifiers[r],
                                      i = o.fn,
                                      a = o.options,
                                      s = void 0 === a ? {} : a,
                                      d = o.name;
                                    'function' == typeof i &&
                                      (l =
                                        i({
                                          state: l,
                                          options: s,
                                          name: d,
                                          instance: u,
                                        }) || l);
                                  } else (l.reset = !1), (r = -1);
                              }
                            }
                          },
                          update:
                            ((o = function () {
                              return new Promise(function (e) {
                                u.forceUpdate(), e(l);
                              });
                            }),
                            function () {
                              return (
                                a ||
                                  (a = new Promise(function (e) {
                                    Promise.resolve().then(function () {
                                      (a = void 0), e(o());
                                    });
                                  })),
                                a
                              );
                            }),
                          destroy: function () {
                            d(), (c = !0);
                          },
                        };
                      if (!Fe(e, t)) return u;
                      function d() {
                        s.forEach(function (e) {
                          return e();
                        }),
                          (s = []);
                      }
                      return (
                        u.setOptions(n).then(function (e) {
                          !c && n.onFirstUpdate && n.onFirstUpdate(e);
                        }),
                        u
                      );
                    };
                  })({
                    defaultModifiers: [
                      Be,
                      Xe,
                      {
                        name: 'computeStyles',
                        enabled: !0,
                        phase: 'beforeWrite',
                        fn: function (e) {
                          var t = e.state,
                            n = e.options,
                            r = n.gpuAcceleration,
                            o = void 0 === r || r,
                            i = n.adaptive,
                            a = void 0 === i || i,
                            l = n.roundOffsets,
                            s = void 0 === l || l,
                            c = {
                              placement: Ve(t.placement),
                              popper: t.elements.popper,
                              popperRect: t.rects.popper,
                              gpuAcceleration: o,
                            };
                          null != t.modifiersData.popperOffsets &&
                            (t.styles.popper = Object.assign(
                              {},
                              t.styles.popper,
                              et(
                                Object.assign({}, c, {
                                  offsets: t.modifiersData.popperOffsets,
                                  position: t.options.strategy,
                                  adaptive: a,
                                  roundOffsets: s,
                                })
                              )
                            )),
                            null != t.modifiersData.arrow &&
                              (t.styles.arrow = Object.assign(
                                {},
                                t.styles.arrow,
                                et(
                                  Object.assign({}, c, {
                                    offsets: t.modifiersData.arrow,
                                    position: 'absolute',
                                    adaptive: !1,
                                    roundOffsets: s,
                                  })
                                )
                              )),
                            (t.attributes.popper = Object.assign(
                              {},
                              t.attributes.popper,
                              { 'data-popper-placement': t.placement }
                            ));
                        },
                        data: {},
                      },
                      tt,
                      {
                        name: 'offset',
                        enabled: !0,
                        phase: 'main',
                        requires: ['popperOffsets'],
                        fn: function (e) {
                          var t = e.state,
                            n = e.options,
                            r = e.name,
                            o = n.offset,
                            i = void 0 === o ? [0, 0] : o,
                            a = De.reduce(function (e, n) {
                              return (
                                (e[n] = (function (e, t, n) {
                                  var r = Ve(e),
                                    o = [Ie, Pe].indexOf(r) >= 0 ? -1 : 1,
                                    i =
                                      'function' == typeof n
                                        ? n(
                                            Object.assign({}, t, {
                                              placement: e,
                                            })
                                          )
                                        : n,
                                    a = i[0],
                                    l = i[1];
                                  return (
                                    (a = a || 0),
                                    (l = (l || 0) * o),
                                    [Ie, ke].indexOf(r) >= 0
                                      ? { x: l, y: a }
                                      : { x: a, y: l }
                                  );
                                })(n, t.rects, i)),
                                e
                              );
                            }, {}),
                            l = a[t.placement],
                            s = l.x,
                            c = l.y;
                          null != t.modifiersData.popperOffsets &&
                            ((t.modifiersData.popperOffsets.x += s),
                            (t.modifiersData.popperOffsets.y += c)),
                            (t.modifiersData[r] = a);
                        },
                      },
                      {
                        name: 'flip',
                        enabled: !0,
                        phase: 'main',
                        fn: function (e) {
                          var t = e.state,
                            n = e.options,
                            r = e.name;
                          if (!t.modifiersData[r]._skip) {
                            for (
                              var o = n.mainAxis,
                                i = void 0 === o || o,
                                a = n.altAxis,
                                l = void 0 === a || a,
                                s = n.fallbackPlacements,
                                c = n.padding,
                                u = n.boundary,
                                d = n.rootBoundary,
                                f = n.altBoundary,
                                h = n.flipVariations,
                                p = void 0 === h || h,
                                m = n.allowedAutoPlacements,
                                v = t.options.placement,
                                g = Ve(v),
                                y =
                                  s ||
                                  (g !== v && p
                                    ? (function (e) {
                                        if (Ve(e) === Ee) return [];
                                        var t = rt(e);
                                        return [it(e), t, it(t)];
                                      })(v)
                                    : [rt(v)]),
                                b = [v].concat(y).reduce(function (e, n) {
                                  return e.concat(
                                    Ve(n) === Ee
                                      ? (function (e, t) {
                                          void 0 === t && (t = {});
                                          var n = t,
                                            r = n.placement,
                                            o = n.boundary,
                                            i = n.rootBoundary,
                                            a = n.padding,
                                            l = n.flipVariations,
                                            s = n.allowedAutoPlacements,
                                            c = void 0 === s ? De : s,
                                            u = qe(r),
                                            d = u
                                              ? l
                                                ? He
                                                : He.filter(function (e) {
                                                    return qe(e) === u;
                                                  })
                                              : Me,
                                            f = d.filter(function (e) {
                                              return c.indexOf(e) >= 0;
                                            });
                                          0 === f.length && (f = d);
                                          var h = f.reduce(function (t, n) {
                                            return (
                                              (t[n] = dt(e, {
                                                placement: n,
                                                boundary: o,
                                                rootBoundary: i,
                                                padding: a,
                                              })[Ve(n)]),
                                              t
                                            );
                                          }, {});
                                          return Object.keys(h).sort(
                                            function (e, t) {
                                              return h[e] - h[t];
                                            }
                                          );
                                        })(t, {
                                          placement: n,
                                          boundary: u,
                                          rootBoundary: d,
                                          padding: c,
                                          flipVariations: p,
                                          allowedAutoPlacements: m,
                                        })
                                      : n
                                  );
                                }, []),
                                w = t.rects.reference,
                                _ = t.rects.popper,
                                S = new Map(),
                                x = !0,
                                C = b[0],
                                O = 0;
                              O < b.length;
                              O++
                            ) {
                              var R = b[O],
                                T = Ve(R),
                                P = qe(R) === Ae,
                                z = [Pe, ze].indexOf(T) >= 0,
                                k = z ? 'width' : 'height',
                                I = dt(t, {
                                  placement: R,
                                  boundary: u,
                                  rootBoundary: d,
                                  altBoundary: f,
                                  padding: c,
                                }),
                                E = z ? (P ? ke : Ie) : P ? ze : Pe;
                              w[k] > _[k] && (E = rt(E));
                              var M = rt(E),
                                A = [];
                              if (
                                (i && A.push(I[T] <= 0),
                                l && A.push(I[E] <= 0, I[M] <= 0),
                                A.every(function (e) {
                                  return e;
                                }))
                              ) {
                                (C = R), (x = !1);
                                break;
                              }
                              S.set(R, A);
                            }
                            if (x)
                              for (
                                var L = function (e) {
                                    var t = b.find(function (t) {
                                      var n = S.get(t);
                                      if (n)
                                        return n
                                          .slice(0, e)
                                          .every(function (e) {
                                            return e;
                                          });
                                    });
                                    if (t) return (C = t), 'break';
                                  },
                                  j = p ? 3 : 1;
                                j > 0 && 'break' !== L(j);
                                j--
                              );
                            t.placement !== C &&
                              ((t.modifiersData[r]._skip = !0),
                              (t.placement = C),
                              (t.reset = !0));
                          }
                        },
                        requiresIfExists: ['offset'],
                        data: { _skip: !1 },
                      },
                      {
                        name: 'preventOverflow',
                        enabled: !0,
                        phase: 'main',
                        fn: function (e) {
                          var t = e.state,
                            n = e.options,
                            r = e.name,
                            o = n.mainAxis,
                            i = void 0 === o || o,
                            a = n.altAxis,
                            l = void 0 !== a && a,
                            s = n.boundary,
                            c = n.rootBoundary,
                            u = n.altBoundary,
                            d = n.padding,
                            f = n.tether,
                            h = void 0 === f || f,
                            p = n.tetherOffset,
                            m = void 0 === p ? 0 : p,
                            v = dt(t, {
                              boundary: s,
                              rootBoundary: c,
                              padding: d,
                              altBoundary: u,
                            }),
                            g = Ve(t.placement),
                            y = qe(t.placement),
                            b = !y,
                            w = Ze(g),
                            _ = 'x' === w ? 'y' : 'x',
                            S = t.modifiersData.popperOffsets,
                            x = t.rects.reference,
                            C = t.rects.popper,
                            O =
                              'function' == typeof m
                                ? m(
                                    Object.assign({}, t.rects, {
                                      placement: t.placement,
                                    })
                                  )
                                : m,
                            R = { x: 0, y: 0 };
                          if (S) {
                            if (i || l) {
                              var T = 'y' === w ? Pe : Ie,
                                P = 'y' === w ? ze : ke,
                                z = 'y' === w ? 'height' : 'width',
                                k = S[w],
                                I = S[w] + v[T],
                                E = S[w] - v[P],
                                M = h ? -C[z] / 2 : 0,
                                A = y === Ae ? x[z] : C[z],
                                L = y === Ae ? -C[z] : -x[z],
                                j = t.elements.arrow,
                                H = h && j ? Se(j) : { width: 0, height: 0 },
                                D = t.modifiersData['arrow#persistent']
                                  ? t.modifiersData['arrow#persistent'].padding
                                  : { top: 0, right: 0, bottom: 0, left: 0 },
                                N = D[T],
                                W = D[P],
                                G = ft(0, x[z], H[z]),
                                F = b
                                  ? x[z] / 2 - M - G - N - O
                                  : A - G - N - O,
                                U = b
                                  ? -x[z] / 2 + M + G + W + O
                                  : L + G + W + O,
                                B = t.elements.arrow && Te(t.elements.arrow),
                                V = B
                                  ? 'y' === w
                                    ? B.clientTop || 0
                                    : B.clientLeft || 0
                                  : 0,
                                q = t.modifiersData.offset
                                  ? t.modifiersData.offset[t.placement][w]
                                  : 0,
                                Z = S[w] + F - q - V,
                                Y = S[w] + U - q;
                              if (i) {
                                var X = ft(
                                  h ? Ke(I, Z) : I,
                                  k,
                                  h ? Je(E, Y) : E
                                );
                                (S[w] = X), (R[w] = X - k);
                              }
                              if (l) {
                                var J = 'x' === w ? Pe : Ie,
                                  K = 'x' === w ? ze : ke,
                                  $ = S[_],
                                  Q = $ + v[J],
                                  ee = $ - v[K],
                                  te = ft(
                                    h ? Ke(Q, Z) : Q,
                                    $,
                                    h ? Je(ee, Y) : ee
                                  );
                                (S[_] = te), (R[_] = te - $);
                              }
                            }
                            t.modifiersData[r] = R;
                          }
                        },
                        requiresIfExists: ['offset'],
                      },
                      {
                        name: 'arrow',
                        enabled: !0,
                        phase: 'main',
                        fn: function (e) {
                          var t,
                            n = e.state,
                            r = e.name,
                            o = e.options,
                            i = n.elements.arrow,
                            a = n.modifiersData.popperOffsets,
                            l = Ve(n.placement),
                            s = Ze(l),
                            c = [Ie, ke].indexOf(l) >= 0 ? 'height' : 'width';
                          if (i && a) {
                            var u = (function (e, t) {
                                return ct(
                                  'number' !=
                                    typeof (e =
                                      'function' == typeof e
                                        ? e(
                                            Object.assign({}, t.rects, {
                                              placement: t.placement,
                                            })
                                          )
                                        : e)
                                    ? e
                                    : ut(e, Me)
                                );
                              })(o.padding, n),
                              d = Se(i),
                              f = 'y' === s ? Pe : Ie,
                              h = 'y' === s ? ze : ke,
                              p =
                                n.rects.reference[c] +
                                n.rects.reference[s] -
                                a[s] -
                                n.rects.popper[c],
                              m = a[s] - n.rects.reference[s],
                              v = Te(i),
                              g = v
                                ? 'y' === s
                                  ? v.clientHeight || 0
                                  : v.clientWidth || 0
                                : 0,
                              y = p / 2 - m / 2,
                              b = u[f],
                              w = g - d[c] - u[h],
                              _ = g / 2 - d[c] / 2 + y,
                              S = ft(b, _, w),
                              x = s;
                            n.modifiersData[r] =
                              (((t = {})[x] = S), (t.centerOffset = S - _), t);
                          }
                        },
                        effect: function (e) {
                          var t = e.state,
                            n = e.options.element,
                            r = void 0 === n ? '[data-popper-arrow]' : n;
                          null != r &&
                            ('string' != typeof r ||
                              (r = t.elements.popper.querySelector(r))) &&
                            at(t.elements.popper, r) &&
                            (t.elements.arrow = r);
                        },
                        requires: ['popperOffsets'],
                        requiresIfExists: ['preventOverflow'],
                      },
                      {
                        name: 'hide',
                        enabled: !0,
                        phase: 'main',
                        requiresIfExists: ['preventOverflow'],
                        fn: function (e) {
                          var t = e.state,
                            n = e.name,
                            r = t.rects.reference,
                            o = t.rects.popper,
                            i = t.modifiersData.preventOverflow,
                            a = dt(t, { elementContext: 'reference' }),
                            l = dt(t, { altBoundary: !0 }),
                            s = ht(a, r),
                            c = ht(l, o, i),
                            u = pt(s),
                            d = pt(c);
                          (t.modifiersData[n] = {
                            referenceClippingOffsets: s,
                            popperEscapeOffsets: c,
                            isReferenceHidden: u,
                            hasPopperEscaped: d,
                          }),
                            (t.attributes.popper = Object.assign(
                              {},
                              t.attributes.popper,
                              {
                                'data-popper-reference-hidden': u,
                                'data-popper-escaped': d,
                              }
                            ));
                        },
                      },
                    ],
                  }),
                  vt = 'tippy-content',
                  gt = 'tippy-arrow',
                  yt = 'tippy-svg-arrow',
                  bt = { passive: !0, capture: !0 };
                function wt(e, t, n) {
                  if (Array.isArray(e)) {
                    var r = e[t];
                    return null == r ? (Array.isArray(n) ? n[t] : n) : r;
                  }
                  return e;
                }
                function _t(e, t) {
                  var n = {}.toString.call(e);
                  return 0 === n.indexOf('[object') && n.indexOf(t + ']') > -1;
                }
                function St(e, t) {
                  return 'function' == typeof e ? e.apply(void 0, t) : e;
                }
                function xt(e, t) {
                  return 0 === t
                    ? e
                    : function (r) {
                        clearTimeout(n),
                          (n = setTimeout(function () {
                            e(r);
                          }, t));
                      };
                  var n;
                }
                function Ct(e) {
                  return [].concat(e);
                }
                function Ot(e, t) {
                  -1 === e.indexOf(t) && e.push(t);
                }
                function Rt(e) {
                  return [].slice.call(e);
                }
                function Tt() {
                  return document.createElement('div');
                }
                function Pt(e) {
                  return ['Element', 'Fragment'].some(function (t) {
                    return _t(e, t);
                  });
                }
                function zt(e, t) {
                  e.forEach(function (e) {
                    e && (e.style.transitionDuration = t + 'ms');
                  });
                }
                function kt(e, t) {
                  e.forEach(function (e) {
                    e && e.setAttribute('data-state', t);
                  });
                }
                function It(e, t, n) {
                  var r = t + 'EventListener';
                  ['transitionend', 'webkitTransitionEnd'].forEach(
                    function (t) {
                      e[r](t, n);
                    }
                  );
                }
                var Et = { isTouch: !1 },
                  Mt = 0;
                function At() {
                  Et.isTouch ||
                    ((Et.isTouch = !0),
                    window.performance &&
                      document.addEventListener('mousemove', Lt));
                }
                function Lt() {
                  var e = performance.now();
                  e - Mt < 20 &&
                    ((Et.isTouch = !1),
                    document.removeEventListener('mousemove', Lt)),
                    (Mt = e);
                }
                function jt() {
                  var e,
                    t = document.activeElement;
                  if ((e = t) && e._tippy && e._tippy.reference === e) {
                    var n = t._tippy;
                    t.blur && !n.state.isVisible && t.blur();
                  }
                }
                var Ht =
                    'undefined' != typeof window &&
                    'undefined' != typeof document
                      ? navigator.userAgent
                      : '',
                  Dt = /MSIE |Trident\//.test(Ht),
                  Nt = Object.assign(
                    {
                      appendTo: function () {
                        return document.body;
                      },
                      aria: { content: 'auto', expanded: 'auto' },
                      delay: 0,
                      duration: [300, 250],
                      getReferenceClientRect: null,
                      hideOnClick: !0,
                      ignoreAttributes: !1,
                      interactive: !1,
                      interactiveBorder: 2,
                      interactiveDebounce: 0,
                      moveTransition: '',
                      offset: [0, 10],
                      onAfterUpdate: function () {},
                      onBeforeUpdate: function () {},
                      onCreate: function () {},
                      onDestroy: function () {},
                      onHidden: function () {},
                      onHide: function () {},
                      onMount: function () {},
                      onShow: function () {},
                      onShown: function () {},
                      onTrigger: function () {},
                      onUntrigger: function () {},
                      onClickOutside: function () {},
                      placement: 'top',
                      plugins: [],
                      popperOptions: {},
                      render: null,
                      showOnCreate: !1,
                      touch: !0,
                      trigger: 'mouseenter focus',
                      triggerTarget: null,
                    },
                    {
                      animateFill: !1,
                      followCursor: !1,
                      inlinePositioning: !1,
                      sticky: !1,
                    },
                    {},
                    {
                      allowHTML: !1,
                      animation: 'fade',
                      arrow: !0,
                      content: '',
                      inertia: !1,
                      maxWidth: 350,
                      role: 'tooltip',
                      theme: '',
                      zIndex: 9999,
                    }
                  ),
                  Wt = Object.keys(Nt);
                function Gt(e) {
                  var t = (e.plugins || []).reduce(function (t, n) {
                    var r = n.name,
                      o = n.defaultValue;
                    return r && (t[r] = void 0 !== e[r] ? e[r] : o), t;
                  }, {});
                  return Object.assign({}, e, {}, t);
                }
                function Ft(e, t) {
                  var n = Object.assign(
                    {},
                    t,
                    { content: St(t.content, [e]) },
                    t.ignoreAttributes
                      ? {}
                      : (function (e, t) {
                          return (
                            t
                              ? Object.keys(
                                  Gt(Object.assign({}, Nt, { plugins: t }))
                                )
                              : Wt
                          ).reduce(function (t, n) {
                            var r = (
                              e.getAttribute('data-tippy-' + n) || ''
                            ).trim();
                            if (!r) return t;
                            if ('content' === n) t[n] = r;
                            else
                              try {
                                t[n] = JSON.parse(r);
                              } catch (e) {
                                t[n] = r;
                              }
                            return t;
                          }, {});
                        })(e, t.plugins)
                  );
                  return (
                    (n.aria = Object.assign({}, Nt.aria, {}, n.aria)),
                    (n.aria = {
                      expanded:
                        'auto' === n.aria.expanded
                          ? t.interactive
                          : n.aria.expanded,
                      content:
                        'auto' === n.aria.content
                          ? t.interactive
                            ? null
                            : 'describedby'
                          : n.aria.content,
                    }),
                    n
                  );
                }
                function Ut(e, t) {
                  e.innerHTML = t;
                }
                function Bt(e) {
                  var t = Tt();
                  return (
                    !0 === e
                      ? (t.className = gt)
                      : ((t.className = yt),
                        Pt(e) ? t.appendChild(e) : Ut(t, e)),
                    t
                  );
                }
                function Vt(e, t) {
                  Pt(t.content)
                    ? (Ut(e, ''), e.appendChild(t.content))
                    : 'function' != typeof t.content &&
                      (t.allowHTML
                        ? Ut(e, t.content)
                        : (e.textContent = t.content));
                }
                function qt(e) {
                  var t = e.firstElementChild,
                    n = Rt(t.children);
                  return {
                    box: t,
                    content: n.find(function (e) {
                      return e.classList.contains(vt);
                    }),
                    arrow: n.find(function (e) {
                      return (
                        e.classList.contains(gt) || e.classList.contains(yt)
                      );
                    }),
                    backdrop: n.find(function (e) {
                      return e.classList.contains('tippy-backdrop');
                    }),
                  };
                }
                function Zt(e) {
                  var t = Tt(),
                    n = Tt();
                  (n.className = 'tippy-box'),
                    n.setAttribute('data-state', 'hidden'),
                    n.setAttribute('tabindex', '-1');
                  var r = Tt();
                  function o(n, r) {
                    var o = qt(t),
                      i = o.box,
                      a = o.content,
                      l = o.arrow;
                    r.theme
                      ? i.setAttribute('data-theme', r.theme)
                      : i.removeAttribute('data-theme'),
                      'string' == typeof r.animation
                        ? i.setAttribute('data-animation', r.animation)
                        : i.removeAttribute('data-animation'),
                      r.inertia
                        ? i.setAttribute('data-inertia', '')
                        : i.removeAttribute('data-inertia'),
                      (i.style.maxWidth =
                        'number' == typeof r.maxWidth
                          ? r.maxWidth + 'px'
                          : r.maxWidth),
                      r.role
                        ? i.setAttribute('role', r.role)
                        : i.removeAttribute('role'),
                      (n.content === r.content &&
                        n.allowHTML === r.allowHTML) ||
                        Vt(a, e.props),
                      r.arrow
                        ? l
                          ? n.arrow !== r.arrow &&
                            (i.removeChild(l), i.appendChild(Bt(r.arrow)))
                          : i.appendChild(Bt(r.arrow))
                        : l && i.removeChild(l);
                  }
                  return (
                    (r.className = vt),
                    r.setAttribute('data-state', 'hidden'),
                    Vt(r, e.props),
                    t.appendChild(n),
                    n.appendChild(r),
                    o(e.props, e.props),
                    { popper: t, onUpdate: o }
                  );
                }
                Zt.$$tippy = !0;
                var Yt = 1,
                  Xt = [],
                  Jt = [];
                function Kt(e, t) {
                  void 0 === t && (t = {});
                  var n = Nt.plugins.concat(t.plugins || []);
                  document.addEventListener('touchstart', At, bt),
                    window.addEventListener('blur', jt);
                  var r,
                    o = Object.assign({}, t, { plugins: n }),
                    i = ((r = e),
                    Pt(r)
                      ? [r]
                      : (function (e) {
                            return _t(e, 'NodeList');
                          })(r)
                        ? Rt(r)
                        : Array.isArray(r)
                          ? r
                          : Rt(document.querySelectorAll(r))).reduce(function (
                      e,
                      t
                    ) {
                      var n =
                        t &&
                        (function (e, t) {
                          var n,
                            r,
                            o,
                            i,
                            a,
                            l,
                            s,
                            c,
                            u,
                            d = Ft(
                              e,
                              Object.assign(
                                {},
                                Nt,
                                {},
                                Gt(
                                  ((n = t),
                                  Object.keys(n).reduce(function (e, t) {
                                    return void 0 !== n[t] && (e[t] = n[t]), e;
                                  }, {}))
                                )
                              )
                            ),
                            f = !1,
                            h = !1,
                            p = !1,
                            m = !1,
                            v = [],
                            g = xt(Y, d.interactiveDebounce),
                            y = Yt++,
                            b = (u = d.plugins).filter(function (e, t) {
                              return u.indexOf(e) === t;
                            }),
                            w = {
                              id: y,
                              reference: e,
                              popper: Tt(),
                              popperInstance: null,
                              props: d,
                              state: {
                                isEnabled: !0,
                                isVisible: !1,
                                isDestroyed: !1,
                                isMounted: !1,
                                isShown: !1,
                              },
                              plugins: b,
                              clearDelayTimeouts: function () {
                                clearTimeout(r),
                                  clearTimeout(o),
                                  cancelAnimationFrame(i);
                              },
                              setProps: function (t) {
                                if (!w.state.isDestroyed) {
                                  A('onBeforeUpdate', [w, t]), q();
                                  var n = w.props,
                                    r = Ft(
                                      e,
                                      Object.assign({}, w.props, {}, t, {
                                        ignoreAttributes: !0,
                                      })
                                    );
                                  (w.props = r),
                                    V(),
                                    n.interactiveDebounce !==
                                      r.interactiveDebounce &&
                                      (H(), (g = xt(Y, r.interactiveDebounce))),
                                    n.triggerTarget && !r.triggerTarget
                                      ? Ct(n.triggerTarget).forEach(
                                          function (e) {
                                            e.removeAttribute('aria-expanded');
                                          }
                                        )
                                      : r.triggerTarget &&
                                        e.removeAttribute('aria-expanded'),
                                    j(),
                                    M(),
                                    x && x(n, r),
                                    w.popperInstance &&
                                      ($(),
                                      ee().forEach(function (e) {
                                        requestAnimationFrame(
                                          e._tippy.popperInstance.forceUpdate
                                        );
                                      })),
                                    A('onAfterUpdate', [w, t]);
                                }
                              },
                              setContent: function (e) {
                                w.setProps({ content: e });
                              },
                              show: function () {
                                var e = w.state.isVisible,
                                  t = w.state.isDestroyed,
                                  n = !w.state.isEnabled,
                                  r = Et.isTouch && !w.props.touch,
                                  o = wt(w.props.duration, 0, Nt.duration);
                                if (
                                  !(
                                    e ||
                                    t ||
                                    n ||
                                    r ||
                                    z().hasAttribute('disabled') ||
                                    (A('onShow', [w], !1),
                                    !1 === w.props.onShow(w))
                                  )
                                ) {
                                  if (
                                    ((w.state.isVisible = !0),
                                    P() && (S.style.visibility = 'visible'),
                                    M(),
                                    G(),
                                    w.state.isMounted ||
                                      (S.style.transition = 'none'),
                                    P())
                                  ) {
                                    var i = I();
                                    zt([i.box, i.content], 0);
                                  }
                                  var a, l, c;
                                  (s = function () {
                                    var e;
                                    if (w.state.isVisible && !m) {
                                      if (
                                        ((m = !0),
                                        S.offsetHeight,
                                        (S.style.transition =
                                          w.props.moveTransition),
                                        P() && w.props.animation)
                                      ) {
                                        var t = I(),
                                          n = t.box,
                                          r = t.content;
                                        zt([n, r], o), kt([n, r], 'visible');
                                      }
                                      L(),
                                        j(),
                                        Ot(Jt, w),
                                        null == (e = w.popperInstance) ||
                                          e.forceUpdate(),
                                        (w.state.isMounted = !0),
                                        A('onMount', [w]),
                                        w.props.animation &&
                                          P() &&
                                          (function (e, t) {
                                            U(e, function () {
                                              (w.state.isShown = !0),
                                                A('onShown', [w]);
                                            });
                                          })(o);
                                    }
                                  }),
                                    (l = w.props.appendTo),
                                    (c = z()),
                                    (a =
                                      (w.props.interactive &&
                                        l === Nt.appendTo) ||
                                      'parent' === l
                                        ? c.parentNode
                                        : St(l, [c])).contains(S) ||
                                      a.appendChild(S),
                                    $();
                                }
                              },
                              hide: function () {
                                var e = !w.state.isVisible,
                                  t = w.state.isDestroyed,
                                  n = !w.state.isEnabled,
                                  r = wt(w.props.duration, 1, Nt.duration);
                                if (
                                  !(e || t || n) &&
                                  (A('onHide', [w], !1),
                                  !1 !== w.props.onHide(w))
                                ) {
                                  if (
                                    ((w.state.isVisible = !1),
                                    (w.state.isShown = !1),
                                    (m = !1),
                                    (f = !1),
                                    P() && (S.style.visibility = 'hidden'),
                                    H(),
                                    F(),
                                    M(),
                                    P())
                                  ) {
                                    var o = I(),
                                      i = o.box,
                                      a = o.content;
                                    w.props.animation &&
                                      (zt([i, a], r), kt([i, a], 'hidden'));
                                  }
                                  L(),
                                    j(),
                                    w.props.animation
                                      ? P() &&
                                        (function (e, t) {
                                          U(e, function () {
                                            !w.state.isVisible &&
                                              S.parentNode &&
                                              S.parentNode.contains(S) &&
                                              t();
                                          });
                                        })(r, w.unmount)
                                      : w.unmount();
                                }
                              },
                              hideWithInteractivity: function (e) {
                                k().addEventListener('mousemove', g),
                                  Ot(Xt, g),
                                  g(e);
                              },
                              enable: function () {
                                w.state.isEnabled = !0;
                              },
                              disable: function () {
                                w.hide(), (w.state.isEnabled = !1);
                              },
                              unmount: function () {
                                w.state.isVisible && w.hide(),
                                  w.state.isMounted &&
                                    (Q(),
                                    ee().forEach(function (e) {
                                      e._tippy.unmount();
                                    }),
                                    S.parentNode && S.parentNode.removeChild(S),
                                    (Jt = Jt.filter(function (e) {
                                      return e !== w;
                                    })),
                                    (w.state.isMounted = !1),
                                    A('onHidden', [w]));
                              },
                              destroy: function () {
                                w.state.isDestroyed ||
                                  (w.clearDelayTimeouts(),
                                  w.unmount(),
                                  q(),
                                  delete e._tippy,
                                  (w.state.isDestroyed = !0),
                                  A('onDestroy', [w]));
                              },
                            };
                          if (!d.render) return w;
                          var _ = d.render(w),
                            S = _.popper,
                            x = _.onUpdate;
                          S.setAttribute('data-tippy-root', ''),
                            (S.id = 'tippy-' + w.id),
                            (w.popper = S),
                            (e._tippy = w),
                            (S._tippy = w);
                          var C = b.map(function (e) {
                              return e.fn(w);
                            }),
                            O = e.hasAttribute('aria-expanded');
                          return (
                            V(),
                            j(),
                            M(),
                            A('onCreate', [w]),
                            d.showOnCreate && te(),
                            S.addEventListener('mouseenter', function () {
                              w.props.interactive &&
                                w.state.isVisible &&
                                w.clearDelayTimeouts();
                            }),
                            S.addEventListener('mouseleave', function (e) {
                              w.props.interactive &&
                                w.props.trigger.indexOf('mouseenter') >= 0 &&
                                (k().addEventListener('mousemove', g), g(e));
                            }),
                            w
                          );
                          function R() {
                            var e = w.props.touch;
                            return Array.isArray(e) ? e : [e, 0];
                          }
                          function T() {
                            return 'hold' === R()[0];
                          }
                          function P() {
                            var e;
                            return !!(null == (e = w.props.render)
                              ? void 0
                              : e.$$tippy);
                          }
                          function z() {
                            return c || e;
                          }
                          function k() {
                            var e,
                              t,
                              n = z().parentNode;
                            return n &&
                              (null == (t = Ct(n)[0]) ||
                              null == (e = t.ownerDocument)
                                ? void 0
                                : e.body)
                              ? t.ownerDocument
                              : document;
                          }
                          function I() {
                            return qt(S);
                          }
                          function E(e) {
                            return (w.state.isMounted && !w.state.isVisible) ||
                              Et.isTouch ||
                              (a && 'focus' === a.type)
                              ? 0
                              : wt(w.props.delay, e ? 0 : 1, Nt.delay);
                          }
                          function M() {
                            (S.style.pointerEvents =
                              w.props.interactive && w.state.isVisible
                                ? ''
                                : 'none'),
                              (S.style.zIndex = '' + w.props.zIndex);
                          }
                          function A(e, t, n) {
                            var r;
                            void 0 === n && (n = !0),
                              C.forEach(function (n) {
                                n[e] && n[e].apply(void 0, t);
                              }),
                              n && (r = w.props)[e].apply(r, t);
                          }
                          function L() {
                            var t = w.props.aria;
                            if (t.content) {
                              var n = 'aria-' + t.content,
                                r = S.id;
                              Ct(w.props.triggerTarget || e).forEach(
                                function (e) {
                                  var t = e.getAttribute(n);
                                  if (w.state.isVisible)
                                    e.setAttribute(n, t ? t + ' ' + r : r);
                                  else {
                                    var o = t && t.replace(r, '').trim();
                                    o
                                      ? e.setAttribute(n, o)
                                      : e.removeAttribute(n);
                                  }
                                }
                              );
                            }
                          }
                          function j() {
                            !O &&
                              w.props.aria.expanded &&
                              Ct(w.props.triggerTarget || e).forEach(
                                function (e) {
                                  w.props.interactive
                                    ? e.setAttribute(
                                        'aria-expanded',
                                        w.state.isVisible && e === z()
                                          ? 'true'
                                          : 'false'
                                      )
                                    : e.removeAttribute('aria-expanded');
                                }
                              );
                          }
                          function H() {
                            k().removeEventListener('mousemove', g),
                              (Xt = Xt.filter(function (e) {
                                return e !== g;
                              }));
                          }
                          function D(e) {
                            if (
                              !(
                                (Et.isTouch && (p || 'mousedown' === e.type)) ||
                                (w.props.interactive && S.contains(e.target))
                              )
                            ) {
                              if (z().contains(e.target)) {
                                if (Et.isTouch) return;
                                if (
                                  w.state.isVisible &&
                                  w.props.trigger.indexOf('click') >= 0
                                )
                                  return;
                              } else A('onClickOutside', [w, e]);
                              !0 === w.props.hideOnClick &&
                                (w.clearDelayTimeouts(),
                                w.hide(),
                                (h = !0),
                                setTimeout(function () {
                                  h = !1;
                                }),
                                w.state.isMounted || F());
                            }
                          }
                          function N() {
                            p = !0;
                          }
                          function W() {
                            p = !1;
                          }
                          function G() {
                            var e = k();
                            e.addEventListener('mousedown', D, !0),
                              e.addEventListener('touchend', D, bt),
                              e.addEventListener('touchstart', W, bt),
                              e.addEventListener('touchmove', N, bt);
                          }
                          function F() {
                            var e = k();
                            e.removeEventListener('mousedown', D, !0),
                              e.removeEventListener('touchend', D, bt),
                              e.removeEventListener('touchstart', W, bt),
                              e.removeEventListener('touchmove', N, bt);
                          }
                          function U(e, t) {
                            var n = I().box;
                            function r(e) {
                              e.target === n && (It(n, 'remove', r), t());
                            }
                            if (0 === e) return t();
                            It(n, 'remove', l), It(n, 'add', r), (l = r);
                          }
                          function B(t, n, r) {
                            void 0 === r && (r = !1),
                              Ct(w.props.triggerTarget || e).forEach(
                                function (e) {
                                  e.addEventListener(t, n, r),
                                    v.push({
                                      node: e,
                                      eventType: t,
                                      handler: n,
                                      options: r,
                                    });
                                }
                              );
                          }
                          function V() {
                            var e;
                            T() &&
                              (B('touchstart', Z, { passive: !0 }),
                              B('touchend', X, { passive: !0 })),
                              ((e = w.props.trigger),
                              e.split(/\s+/).filter(Boolean)).forEach(
                                function (e) {
                                  if ('manual' !== e)
                                    switch ((B(e, Z), e)) {
                                      case 'mouseenter':
                                        B('mouseleave', X);
                                        break;
                                      case 'focus':
                                        B(Dt ? 'focusout' : 'blur', J);
                                        break;
                                      case 'focusin':
                                        B('focusout', J);
                                    }
                                }
                              );
                          }
                          function q() {
                            v.forEach(function (e) {
                              var t = e.node,
                                n = e.eventType,
                                r = e.handler,
                                o = e.options;
                              t.removeEventListener(n, r, o);
                            }),
                              (v = []);
                          }
                          function Z(e) {
                            var t,
                              n = !1;
                            if (w.state.isEnabled && !K(e) && !h) {
                              var r =
                                'focus' === (null == (t = a) ? void 0 : t.type);
                              (a = e),
                                (c = e.currentTarget),
                                j(),
                                !w.state.isVisible &&
                                  _t(e, 'MouseEvent') &&
                                  Xt.forEach(function (t) {
                                    return t(e);
                                  }),
                                'click' === e.type &&
                                (w.props.trigger.indexOf('mouseenter') < 0 ||
                                  f) &&
                                !1 !== w.props.hideOnClick &&
                                w.state.isVisible
                                  ? (n = !0)
                                  : te(e),
                                'click' === e.type && (f = !n),
                                n && !r && ne(e);
                            }
                          }
                          function Y(e) {
                            var t = e.target,
                              n = z().contains(t) || S.contains(t);
                            ('mousemove' === e.type && n) ||
                              ((function (e, t) {
                                var n = t.clientX,
                                  r = t.clientY;
                                return e.every(function (e) {
                                  var t = e.popperRect,
                                    o = e.popperState,
                                    i = e.props.interactiveBorder,
                                    a = o.placement.split('-')[0],
                                    l = o.modifiersData.offset;
                                  if (!l) return !0;
                                  var s = 'bottom' === a ? l.top.y : 0,
                                    c = 'top' === a ? l.bottom.y : 0,
                                    u = 'right' === a ? l.left.x : 0,
                                    d = 'left' === a ? l.right.x : 0,
                                    f = t.top - r + s > i,
                                    h = r - t.bottom - c > i,
                                    p = t.left - n + u > i,
                                    m = n - t.right - d > i;
                                  return f || h || p || m;
                                });
                              })(
                                ee()
                                  .concat(S)
                                  .map(function (e) {
                                    var t,
                                      n =
                                        null == (t = e._tippy.popperInstance)
                                          ? void 0
                                          : t.state;
                                    return n
                                      ? {
                                          popperRect: e.getBoundingClientRect(),
                                          popperState: n,
                                          props: d,
                                        }
                                      : null;
                                  })
                                  .filter(Boolean),
                                e
                              ) &&
                                (H(), ne(e)));
                          }
                          function X(e) {
                            K(e) ||
                              (w.props.trigger.indexOf('click') >= 0 && f) ||
                              (w.props.interactive
                                ? w.hideWithInteractivity(e)
                                : ne(e));
                          }
                          function J(e) {
                            (w.props.trigger.indexOf('focusin') < 0 &&
                              e.target !== z()) ||
                              (w.props.interactive &&
                                e.relatedTarget &&
                                S.contains(e.relatedTarget)) ||
                              ne(e);
                          }
                          function K(e) {
                            return (
                              !!Et.isTouch &&
                              T() !== e.type.indexOf('touch') >= 0
                            );
                          }
                          function $() {
                            Q();
                            var t = w.props,
                              n = t.popperOptions,
                              r = t.placement,
                              o = t.offset,
                              i = t.getReferenceClientRect,
                              a = t.moveTransition,
                              l = P() ? qt(S).arrow : null,
                              c = i
                                ? {
                                    getBoundingClientRect: i,
                                    contextElement: i.contextElement || z(),
                                  }
                                : e,
                              u = [
                                { name: 'offset', options: { offset: o } },
                                {
                                  name: 'preventOverflow',
                                  options: {
                                    padding: {
                                      top: 2,
                                      bottom: 2,
                                      left: 5,
                                      right: 5,
                                    },
                                  },
                                },
                                { name: 'flip', options: { padding: 5 } },
                                {
                                  name: 'computeStyles',
                                  options: { adaptive: !a },
                                },
                                {
                                  name: '$$tippy',
                                  enabled: !0,
                                  phase: 'beforeWrite',
                                  requires: ['computeStyles'],
                                  fn: function (e) {
                                    var t = e.state;
                                    if (P()) {
                                      var n = I().box;
                                      [
                                        'placement',
                                        'reference-hidden',
                                        'escaped',
                                      ].forEach(function (e) {
                                        'placement' === e
                                          ? n.setAttribute(
                                              'data-placement',
                                              t.placement
                                            )
                                          : t.attributes.popper[
                                                'data-popper-' + e
                                              ]
                                            ? n.setAttribute('data-' + e, '')
                                            : n.removeAttribute('data-' + e);
                                      }),
                                        (t.attributes.popper = {});
                                    }
                                  },
                                },
                              ];
                            P() &&
                              l &&
                              u.push({
                                name: 'arrow',
                                options: { element: l, padding: 3 },
                              }),
                              u.push.apply(
                                u,
                                (null == n ? void 0 : n.modifiers) || []
                              ),
                              (w.popperInstance = mt(
                                c,
                                S,
                                Object.assign({}, n, {
                                  placement: r,
                                  onFirstUpdate: s,
                                  modifiers: u,
                                })
                              ));
                          }
                          function Q() {
                            w.popperInstance &&
                              (w.popperInstance.destroy(),
                              (w.popperInstance = null));
                          }
                          function ee() {
                            return Rt(S.querySelectorAll('[data-tippy-root]'));
                          }
                          function te(e) {
                            w.clearDelayTimeouts(),
                              e && A('onTrigger', [w, e]),
                              G();
                            var t = E(!0),
                              n = R(),
                              o = n[0],
                              i = n[1];
                            Et.isTouch && 'hold' === o && i && (t = i),
                              t
                                ? (r = setTimeout(function () {
                                    w.show();
                                  }, t))
                                : w.show();
                          }
                          function ne(e) {
                            if (
                              (w.clearDelayTimeouts(),
                              A('onUntrigger', [w, e]),
                              w.state.isVisible)
                            ) {
                              if (
                                !(
                                  w.props.trigger.indexOf('mouseenter') >= 0 &&
                                  w.props.trigger.indexOf('click') >= 0 &&
                                  ['mouseleave', 'mousemove'].indexOf(e.type) >=
                                    0 &&
                                  f
                                )
                              ) {
                                var t = E(!1);
                                t
                                  ? (o = setTimeout(function () {
                                      w.state.isVisible && w.hide();
                                    }, t))
                                  : (i = requestAnimationFrame(function () {
                                      w.hide();
                                    }));
                              }
                            } else F();
                          }
                        })(t, o);
                      return n && e.push(n), e;
                    }, []);
                  return Pt(e) ? i[0] : i;
                }
                (Kt.defaultProps = Nt),
                  (Kt.setDefaultProps = function (e) {
                    Object.keys(e).forEach(function (t) {
                      Nt[t] = e[t];
                    });
                  }),
                  (Kt.currentInput = Et),
                  Object.assign({}, tt, {
                    effect: function (e) {
                      var t = e.state,
                        n = {
                          popper: {
                            position: t.options.strategy,
                            left: '0',
                            top: '0',
                            margin: '0',
                          },
                          arrow: { position: 'absolute' },
                          reference: {},
                        };
                      Object.assign(t.elements.popper.style, n.popper),
                        (t.styles = n),
                        t.elements.arrow &&
                          Object.assign(t.elements.arrow.style, n.arrow);
                    },
                  }),
                  Kt.setDefaultProps({ render: Zt });
                const $t = Kt;
                function Qt(e) {
                  return (Qt =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
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
                function en(e, t) {
                  return (en = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                        return (e.__proto__ = t), e;
                      })(e, t);
                }
                function tn(e, t) {
                  if (t && ('object' === Qt(t) || 'function' == typeof t))
                    return t;
                  if (void 0 !== t)
                    throw new TypeError(
                      'Derived constructors may only return object or undefined'
                    );
                  return nn(e);
                }
                function nn(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                }
                function rn(e) {
                  return (rn = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
                }
                function on(e, t, n) {
                  return (
                    (t = an(t)) in e
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
                function an(e) {
                  var t = (function (e, t) {
                    if ('object' !== Qt(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var r = n.call(e, 'string');
                      if ('object' !== Qt(r)) return r;
                      throw new TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return String(e);
                  })(e);
                  return 'symbol' === Qt(t) ? t : String(t);
                }
                var ln = (function (e) {
                    !(function (e, t) {
                      if ('function' != typeof t && null !== t)
                        throw new TypeError(
                          'Super expression must either be null or a function'
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        Object.defineProperty(e, 'prototype', { writable: !1 }),
                        t && en(e, t);
                    })(l, e);
                    var n,
                      r,
                      o,
                      i,
                      a =
                        ((o = l),
                        (i = (function () {
                          if (
                            'undefined' == typeof Reflect ||
                            !Reflect.construct
                          )
                            return !1;
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
                        })()),
                        function () {
                          var e,
                            t = rn(o);
                          if (i) {
                            var n = rn(this).constructor;
                            e = Reflect.construct(t, arguments, n);
                          } else e = t.apply(this, arguments);
                          return tn(this, e);
                        });
                    function l(e) {
                      var n;
                      return (
                        (function (e, t) {
                          if (!(e instanceof t))
                            throw new TypeError(
                              'Cannot call a class as a function'
                            );
                        })(this, l),
                        on(nn((n = a.call(this, e))), 'delete', function (e) {
                          e.preventDefault(), n.props.onDelete();
                        }),
                        on(nn(n), 'editStyle', function (e) {
                          e.preventDefault(), n.props.onEditStyle();
                        }),
                        (n.tooltipContentRef = t().createRef()),
                        (n.editStyleRef = t().createRef()),
                        (n.deleteRef = t().createRef()),
                        n
                      );
                    }
                    return (
                      (n = l),
                      (r = [
                        {
                          key: 'componentDidMount',
                          value: function () {
                            $t(this.editStyleRef.current, {
                              content: 'Style',
                              appendTo: this.tooltipContentRef.current,
                            }),
                              $t(this.deleteRef.current, {
                                content: 'Delete',
                                appendTo: this.tooltipContentRef.current,
                              }),
                              this.editStyleRef.current.addEventListener(
                                'click',
                                this.editStyle
                              ),
                              this.deleteRef.current.addEventListener(
                                'click',
                                this.delete
                              );
                          },
                        },
                        {
                          key: 'componentWillUnmount',
                          value: function () {
                            this.editStyleRef.current.removeEventListener(
                              'click',
                              this.editStyle
                            ),
                              this.deleteRef.current.removeEventListener(
                                'click',
                                this.delete
                              );
                          },
                        },
                        {
                          key: 'render',
                          value: function () {
                            return t().createElement(
                              'div',
                              {
                                className: 'rm-tooltip-content',
                                ref: this.tooltipContentRef,
                              },
                              this.props.showStyleButton &&
                                t().createElement('div', {
                                  className: 'rm-tooltip-icon',
                                  ref: this.editStyleRef,
                                  dangerouslySetInnerHTML: { __html: ce },
                                }),
                              t().createElement('div', {
                                className: 'rm-tooltip-icon',
                                ref: this.deleteRef,
                                dangerouslySetInnerHTML: { __html: se },
                              })
                            );
                          },
                        },
                      ]) &&
                        (function (e, t) {
                          for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            (r.enumerable = r.enumerable || !1),
                              (r.configurable = !0),
                              'value' in r && (r.writable = !0),
                              Object.defineProperty(e, an(r.key), r);
                          }
                        })(n.prototype, r),
                      Object.defineProperty(n, 'prototype', { writable: !1 }),
                      l
                    );
                  })(t().PureComponent),
                  sn = n(662),
                  cn = n(421),
                  un = n(370);
                function dn(e) {
                  return (dn =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
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
                function fn(e, t) {
                  var n =
                    ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator'];
                  if (!n) {
                    if (
                      Array.isArray(e) ||
                      (n = (function (e, t) {
                        if (e) {
                          if ('string' == typeof e) return hn(e, t);
                          var n = Object.prototype.toString
                            .call(e)
                            .slice(8, -1);
                          return (
                            'Object' === n &&
                              e.constructor &&
                              (n = e.constructor.name),
                            'Map' === n || 'Set' === n
                              ? Array.from(e)
                              : 'Arguments' === n ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    n
                                  )
                                ? hn(e, t)
                                : void 0
                          );
                        }
                      })(e)) ||
                      (t && e && 'number' == typeof e.length)
                    ) {
                      n && (e = n);
                      var r = 0,
                        o = function () {};
                      return {
                        s: o,
                        n: function () {
                          return r >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[r++] };
                        },
                        e: function (e) {
                          throw e;
                        },
                        f: o,
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
                      n = n.call(e);
                    },
                    n: function () {
                      var e = n.next();
                      return (a = e.done), e;
                    },
                    e: function (e) {
                      (l = !0), (i = e);
                    },
                    f: function () {
                      try {
                        a || null == n.return || n.return();
                      } finally {
                        if (l) throw i;
                      }
                    },
                  };
                }
                function hn(e, t) {
                  (null == t || t > e.length) && (t = e.length);
                  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                  return r;
                }
                function pn(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                function mn(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? pn(Object(n), !0).forEach(function (t) {
                          yn(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : pn(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                }
                function vn(e, t, n, r, o, i, a) {
                  try {
                    var l = e[i](a),
                      s = l.value;
                  } catch (e) {
                    return void n(e);
                  }
                  l.done ? t(s) : Promise.resolve(s).then(r, o);
                }
                function gn(e) {
                  return function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (r, o) {
                      var i = e.apply(t, n);
                      function a(e) {
                        vn(i, r, o, a, l, 'next', e);
                      }
                      function l(e) {
                        vn(i, r, o, a, l, 'throw', e);
                      }
                      a(void 0);
                    });
                  };
                }
                function yn(e, t, n) {
                  return (
                    (t = bn(t)) in e
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
                function bn(e) {
                  var t = (function (e, t) {
                    if ('object' !== dn(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var r = n.call(e, 'string');
                      if ('object' !== dn(r)) return r;
                      throw new TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return String(e);
                  })(e);
                  return 'symbol' === dn(t) ? t : String(t);
                }
                var wn = {
                    Highlight: 8,
                    Underline: 9,
                    Strikeout: 11,
                    Squiggly: 10,
                  },
                  _n = Object.values(wn),
                  Sn = 'annot-id',
                  xn = 'text-annot',
                  Cn = 'selected-annot',
                  On = 'selected-annot-start',
                  Rn = 'selected-annot-end',
                  Tn = (function () {
                    function e(t, n, r, o) {
                      var i = this;
                      !(function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            'Cannot call a class as a function'
                          );
                      })(this, e),
                        yn(this, 'cleanUpSelectedAnnot', function () {
                          var e =
                            !(
                              arguments.length > 0 && void 0 !== arguments[0]
                            ) || arguments[0];
                          if (i.selectedAnnot) {
                            if (e) {
                              var t =
                                i.annotNodeMap.get(i.selectedAnnot.id) || [];
                              t.forEach(function (e) {
                                var t = e.classList;
                                t.remove(Cn), t.remove(On), t.remove(Rn);
                              });
                            }
                            i.selectedAnnot = void 0;
                          }
                        }),
                        yn(
                          this,
                          'removeSelectedAnnot',
                          gn(
                            regeneratorRuntime.mark(function e() {
                              var t;
                              return regeneratorRuntime.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (i.selectedAnnot) {
                                        e.next = 2;
                                        break;
                                      }
                                      return e.abrupt('return');
                                    case 2:
                                      return (
                                        (t = i.selectedAnnot.id),
                                        (e.next = 5),
                                        i.pdfNetReflow.setAnnot(
                                          JSON.stringify({ id: t })
                                        )
                                      );
                                    case 5:
                                      e.sent === t
                                        ? (i.cleanUpSelectedAnnot(!1),
                                          i.cleanUpTooltip(),
                                          (i.annotNodeMap.get(t) || []).forEach(
                                            An
                                          ),
                                          i.annotNodeMap.set(t, []))
                                        : console.error(
                                            "Calling 'setAnnot()' to remove annotation failed."
                                          );
                                    case 7:
                                    case 'end':
                                      return e.stop();
                                  }
                              }, e);
                            })
                          )
                        ),
                        yn(
                          this,
                          'setSelectedAnnotStyle',
                          (function () {
                            var e = gn(
                              regeneratorRuntime.mark(function e(t) {
                                var n, r, o;
                                return regeneratorRuntime.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((n = t.color),
                                          (r = t.opacity),
                                          i.selectedAnnot)
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return e.abrupt('return');
                                      case 3:
                                        return (
                                          (o = i.selectedAnnot.id),
                                          (e.next = 6),
                                          i.pdfNetReflow.setAnnot(
                                            JSON.stringify({
                                              id: o,
                                              color: n.substring(1),
                                              opacity: r,
                                            })
                                          )
                                        );
                                      case 6:
                                        e.sent === o
                                          ? ((i.selectedAnnot.origAnnot.color =
                                              n),
                                            (i.selectedAnnot.origAnnot.opacity =
                                              r),
                                            (
                                              i.annotNodeMap.get(o) || []
                                            ).forEach(function (e) {
                                              return Nn(e, {
                                                color: n,
                                                opacity: r,
                                              });
                                            }))
                                          : console.error(
                                              "Calling 'setAnnot()' to change annotation style failed."
                                            );
                                      case 8:
                                      case 'end':
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()
                        ),
                        yn(this, 'onEditStyle', function () {
                          i.cleanUpTooltip(),
                            i.editStyleHandler(
                              mn(
                                mn({}, i.selectedAnnot),
                                {},
                                { position: i.getSelectedAnnotPos() }
                              ),
                              i.setSelectedAnnotStyle,
                              i.cleanUpSelectedAnnot
                            );
                        }),
                        (this.pageWindow = t),
                        (this.pdfNetReflow = n),
                        (this.editStyleHandler = r),
                        (this.getViewerElement = o),
                        (this.annotNodeMap = new Map()),
                        (this.addAnnotConfig = {}),
                        (this.selectionStyle = void 0),
                        (this.selectedAnnot = void 0),
                        (this.currentSelectRange = void 0),
                        this.loadAnnotations(),
                        this.enableAddAnnotSupport(),
                        this.setupTooltip();
                    }
                    var n, r, i, a;
                    return (
                      (n = e),
                      (r = [
                        {
                          key: 'loadAnnotations',
                          value:
                            ((a = gn(
                              regeneratorRuntime.mark(function e() {
                                var t, n, r, o, i, a, l, s, c, u, d, f, h, p;
                                return regeneratorRuntime.wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if ((t = ae(this.pageWindow))) {
                                            e.next = 3;
                                            break;
                                          }
                                          return e.abrupt('return');
                                        case 3:
                                          (n = t.getElementsByTagName('p')),
                                            (r = [0]),
                                            (o = fn(n));
                                          try {
                                            for (o.s(); !(i = o.n()).done; )
                                              (a = i.value),
                                                r.push(
                                                  r[r.length - 1] +
                                                    a.textContent.length
                                                );
                                          } catch (e) {
                                            o.e(e);
                                          } finally {
                                            o.f();
                                          }
                                          return (
                                            (e.next = 9),
                                            this.pdfNetReflow.getAnnot('')
                                          );
                                        case 9:
                                          (l = e.sent),
                                            (s = JSON.parse(l)
                                              .map(Ln)
                                              .filter(jn)),
                                            (c = fn(s)),
                                            (e.prev = 13),
                                            c.s();
                                        case 15:
                                          if ((u = c.n()).done) {
                                            e.next = 31;
                                            break;
                                          }
                                          (d = u.value), (f = 0);
                                        case 18:
                                          if (!(f < r.length - 1)) {
                                            e.next = 29;
                                            break;
                                          }
                                          if (!(d.endOffset <= r[f])) {
                                            e.next = 21;
                                            break;
                                          }
                                          return e.abrupt('break', 29);
                                        case 21:
                                          if (!(d.startOffset >= r[f + 1])) {
                                            e.next = 23;
                                            break;
                                          }
                                          return e.abrupt('continue', 26);
                                        case 23:
                                          (h = Math.max(r[f], d.startOffset)),
                                            (p = Math.min(
                                              r[f + 1],
                                              d.endOffset
                                            )),
                                            this.addAnnotToParagraph(
                                              n[f],
                                              mn(
                                                mn({}, d),
                                                {},
                                                {
                                                  startOffset: h - r[f],
                                                  endOffset: p - r[f],
                                                }
                                              )
                                            );
                                        case 26:
                                          f++, (e.next = 18);
                                          break;
                                        case 29:
                                          e.next = 15;
                                          break;
                                        case 31:
                                          e.next = 36;
                                          break;
                                        case 33:
                                          (e.prev = 33),
                                            (e.t0 = e.catch(13)),
                                            c.e(e.t0);
                                        case 36:
                                          return (
                                            (e.prev = 36), c.f(), e.finish(36)
                                          );
                                        case 39:
                                        case 'end':
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this,
                                  [[13, 33, 36, 39]]
                                );
                              })
                            )),
                            function () {
                              return a.apply(this, arguments);
                            }),
                        },
                        {
                          key: 'addAnnotToParagraph',
                          value: function (e, t, n, r) {
                            var o = this,
                              i = n || Pn(e, t.startOffset, !0, 0),
                              a = r || Pn(e, t.endOffset, !1, 0),
                              l = function (e, n) {
                                if (e.offset !== n.offset) {
                                  var r = e.textNode.splitText(e.offset),
                                    i = o.insertAnnotBeforeNode(t, r);
                                  r.splitText(n.offset - e.offset),
                                    zn(r, i, t.type);
                                }
                              };
                            if (i.textNode === a.textNode) l(i, a);
                            else if (
                              i.textNode.parentNode === a.textNode.parentNode
                            )
                              for (
                                var s = i.textNode.splitText(i.offset),
                                  c = this.insertAnnotBeforeNode(t, s),
                                  u = a.textNode.splitText(a.offset),
                                  d = s;
                                d && d != u;

                              ) {
                                var f = d.nextSibling;
                                zn(d, c, t.type), (d = f);
                              }
                            else
                              for (
                                var h = function e(n, r) {
                                    if (!n) return !1;
                                    var i = !1;
                                    if (n === a.textNode)
                                      return (
                                        l(
                                          { textNode: a.textNode, offset: 0 },
                                          a
                                        ),
                                        !0
                                      );
                                    for (
                                      var s,
                                        c = (s = r
                                          ? o.insertAnnotBeforeNode(
                                              t,
                                              n.childNodes[0]
                                            )
                                          : o.insertAnnotBeforeNode(t, n))
                                          .nextSibling;
                                      c;

                                    )
                                      if ('' !== c.textContent) {
                                        if (kn(c, a.textNode)) {
                                          e(c, !0), (i = !0);
                                          break;
                                        }
                                        var u = c.nextSibling;
                                        zn(c, s, t.type), (c = u);
                                      } else c = c.nextSibling;
                                    return (
                                      '' === s.textContent && s.remove(), i
                                    );
                                  },
                                  p = i.textNode.splitText(i.offset);
                                p.previousSibling !== e;

                              ) {
                                for (
                                  var m = p.parentNode;
                                  !m.nextSibling && m !== e;

                                )
                                  m = m.parentNode;
                                var v = m.nextSibling;
                                if (h(p, !1)) break;
                                p = v;
                              }
                          },
                        },
                        {
                          key: 'addAnnotFromRange',
                          value:
                            ((i = gn(
                              regeneratorRuntime.mark(function e(t, n) {
                                var r,
                                  o,
                                  i,
                                  a,
                                  l,
                                  s,
                                  c,
                                  u,
                                  d,
                                  f,
                                  h,
                                  p,
                                  m,
                                  v,
                                  g,
                                  y,
                                  b,
                                  w;
                                return regeneratorRuntime.wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (jn(n)) {
                                            e.next = 3;
                                            break;
                                          }
                                          return (
                                            console.error(
                                              'Invalid annotation.'
                                            ),
                                            e.abrupt('return')
                                          );
                                        case 3:
                                          return (
                                            (r = t.startContainer),
                                            (o = t.startOffset),
                                            (i = t.endContainer),
                                            (a = t.endOffset),
                                            (l = Dn(r, o)),
                                            (s = Dn(i, a)),
                                            (c = mn(
                                              mn({}, n),
                                              {},
                                              {
                                                color: n.color.substring(1),
                                                ranges: [l, s - 1],
                                              }
                                            )),
                                            (e.next = 13),
                                            this.pdfNetReflow.setAnnot(
                                              JSON.stringify(c)
                                            )
                                          );
                                        case 13:
                                          if ((u = e.sent) && '' !== u)
                                            if (
                                              ((d = mn(
                                                mn({}, n),
                                                {},
                                                { id: u }
                                              )),
                                              (f = In(r)),
                                              (h = In(i)),
                                              f === h)
                                            )
                                              this.addAnnotToParagraph(
                                                f,
                                                d,
                                                { textNode: r, offset: o },
                                                { textNode: i, offset: a }
                                              );
                                            else {
                                              for (
                                                p = En(h),
                                                  this.addAnnotToParagraph(
                                                    f,
                                                    d,
                                                    { textNode: r, offset: o },
                                                    {
                                                      textNode: p,
                                                      offset:
                                                        p.textContent.length,
                                                    }
                                                  ),
                                                  m = f.nextSibling;
                                                m !== h;

                                              ) {
                                                if (
                                                  Hn(m) &&
                                                  m.textContent.length > 0
                                                )
                                                  for (
                                                    v = m.firstChild,
                                                      g =
                                                        this.insertAnnotBeforeNode(
                                                          d,
                                                          v
                                                        ),
                                                      y = g.nextSibling;
                                                    y;

                                                  )
                                                    (b = y.nextSibling),
                                                      zn(y, g, d.type),
                                                      (y = b);
                                                m = m.nextSibling;
                                              }
                                              (w = Mn(h)),
                                                this.addAnnotToParagraph(
                                                  m,
                                                  d,
                                                  { textNode: w, offset: 0 },
                                                  { textNode: i, offset: a }
                                                );
                                            }
                                          else
                                            console.error(
                                              "Calling 'setAnnot()' to create annotation failed."
                                            );
                                        case 15:
                                        case 'end':
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this
                                );
                              })
                            )),
                            function (e, t) {
                              return i.apply(this, arguments);
                            }),
                        },
                        {
                          key: 'insertAnnotBeforeNode',
                          value: function (e, t) {
                            var n = this,
                              r = (function (e, t) {
                                var n,
                                  r = document.createElement('span');
                                return e.type === wn.Highlight
                                  ? (Nn(r, e),
                                    r.setAttribute(Sn, e.id),
                                    (r.className = xn),
                                    r)
                                  : ((r.style.color = t),
                                    e.type === wn.Underline
                                      ? (n = document.createElement('u'))
                                      : e.type === wn.Strikeout
                                        ? (n = document.createElement('s'))
                                        : e.type === wn.Squiggly &&
                                          ((n =
                                            document.createElement(
                                              'u'
                                            )).style.textDecorationStyle =
                                            'wavy'),
                                    Nn(n, e),
                                    n.setAttribute(Sn, e.id),
                                    n.appendChild(r),
                                    (n.className = xn),
                                    n);
                              })(
                                e,
                                window.getComputedStyle(t.parentNode).color
                              ),
                              o = e.id;
                            return (
                              this.annotNodeMap.has(o)
                                ? this.annotNodeMap.get(o).push(r)
                                : this.annotNodeMap.set(o, [r]),
                              r.addEventListener('click', function (t) {
                                if ((t.stopPropagation(), n.selectedAnnot)) {
                                  if (n.selectedAnnot.id === o)
                                    return void n.cleanUpSelectedAnnot();
                                  n.cleanUpSelectedAnnot(), n.cleanUpTooltip();
                                }
                                n.selectedAnnot = mn(
                                  mn({}, e),
                                  {},
                                  { target: r, origAnnot: e }
                                );
                                var i = n.annotNodeMap.get(o) || [];
                                i.forEach(function (e, t) {
                                  e.classList.add(Cn),
                                    0 === t && e.classList.add(On),
                                    t === i.length - 1 && e.classList.add(Rn);
                                }),
                                  n.tooltipContent ||
                                    (n.tooltipContent = n.tooltip.firstChild),
                                  (n.tippy = $t(r, {
                                    content: n.tooltipContent,
                                    interactive: !0,
                                    trigger: 'manual',
                                    theme: 'light-border',
                                    arrow: !1,
                                    appendTo: ae(n.pageWindow),
                                    onClickOutside: function () {
                                      n.selectedAnnot &&
                                        (n.cleanUpSelectedAnnot(),
                                        n.cleanUpTooltip());
                                    },
                                  })),
                                  n.tippy.show();
                              }),
                              t.parentNode.insertBefore(r, t),
                              r
                            );
                          },
                        },
                        {
                          key: 'setAddAnnotConfig',
                          value: function (e) {
                            this.pageWindow.getSelection().removeAllRanges(),
                              (this.addAnnotConfig = e),
                              this.setTextSelectionStyle();
                          },
                        },
                        {
                          key: 'isValidAddAnnotConfig',
                          value: function () {
                            return (
                              this.addAnnotConfig && this.addAnnotConfig.type
                            );
                          },
                        },
                        {
                          key: 'enableAddAnnotSupport',
                          value: function () {
                            var e = this,
                              t = le(this.pageWindow);
                            (this.selectionStyle =
                              document.createElement('style')),
                              (this.selectionStyle.type = 'text/css'),
                              t.appendChild(this.selectionStyle),
                              this.setTextSelectionStyle();
                            var n = function (e) {
                                return (
                                  e &&
                                  e.toString() &&
                                  e.rangeCount >= 1 &&
                                  e.getRangeAt(0)
                                );
                              },
                              r = (function () {
                                var t = gn(
                                  regeneratorRuntime.mark(function t(n) {
                                    return regeneratorRuntime.wrap(function (
                                      t
                                    ) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.next = 2),
                                              e.addAnnotFromRange(
                                                n,
                                                e.addAnnotConfig
                                              )
                                            );
                                          case 2:
                                            e.pageWindow
                                              .getSelection()
                                              .removeAllRanges(),
                                              (e.currentSelectRange = void 0);
                                          case 4:
                                          case 'end':
                                            return t.stop();
                                        }
                                    }, t);
                                  })
                                );
                                return function (e) {
                                  return t.apply(this, arguments);
                                };
                              })();
                            this.pageWindow.addEventListener(
                              'mouseup',
                              gn(
                                regeneratorRuntime.mark(function t() {
                                  var o, i;
                                  return regeneratorRuntime.wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          if (!e.isValidAddAnnotConfig()) {
                                            t.next = 6;
                                            break;
                                          }
                                          if (
                                            ((o = e.pageWindow.getSelection()),
                                            !n(o))
                                          ) {
                                            t.next = 6;
                                            break;
                                          }
                                          return (
                                            (i = o.getRangeAt(0)),
                                            (t.next = 6),
                                            r(i)
                                          );
                                        case 6:
                                        case 'end':
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              )
                            ),
                              this.pageWindow.document.addEventListener(
                                'selectionchange',
                                gn(
                                  regeneratorRuntime.mark(function t() {
                                    var o;
                                    return regeneratorRuntime.wrap(function (
                                      t
                                    ) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            if (!e.isValidAddAnnotConfig()) {
                                              t.next = 9;
                                              break;
                                            }
                                            if (
                                              ((o =
                                                e.pageWindow.getSelection()),
                                              !n(o))
                                            ) {
                                              t.next = 6;
                                              break;
                                            }
                                            (e.currentSelectRange =
                                              o.getRangeAt(0)),
                                              (t.next = 9);
                                            break;
                                          case 6:
                                            if (!e.currentSelectRange) {
                                              t.next = 9;
                                              break;
                                            }
                                            return (
                                              (t.next = 9),
                                              r(e.currentSelectRange)
                                            );
                                          case 9:
                                          case 'end':
                                            return t.stop();
                                        }
                                    }, t);
                                  })
                                )
                              );
                          },
                        },
                        {
                          key: 'setTextSelectionStyle',
                          value: function () {
                            var e = '';
                            if (this.isValidAddAnnotConfig()) {
                              var t = '',
                                n = Gn(
                                  this.addAnnotConfig.color,
                                  this.addAnnotConfig.opacity
                                );
                              this.addAnnotConfig.type === wn.Highlight &&
                                (t = 'background-color: '.concat(n, ';')),
                                (e = '::-moz-selection { '
                                  .concat(t, ' } ::selection { ')
                                  .concat(t, ' }'));
                            }
                            this.selectionStyle.innerHTML = e;
                          },
                        },
                        {
                          key: 'setupTooltip',
                          value: function () {
                            this.addSelectedStyle(),
                              this.addTooltipStyle(),
                              this.createTooltipContent();
                          },
                        },
                        {
                          key: 'addSelectedStyle',
                          value: function () {
                            var e = le(this.pageWindow);
                            if (e) {
                              var t = document.createElement('style');
                              t.type = 'text/css';
                              var n = '1px solid #3183C8';
                              (t.innerHTML = '\n      .'
                                .concat(xn, '{cursor:pointer}\n      .')
                                .concat(Cn, '{border-top:')
                                .concat(n, ';border-bottom:')
                                .concat(
                                  n,
                                  ';z-index:10;position:relative;}\n      .'
                                )
                                .concat(On, '{border-left:')
                                .concat(n, ';margin-left:-1px;}\n      .')
                                .concat(Rn, '{border-right:')
                                .concat(n, ';margin-right:-1px;}\n    ')),
                                e.appendChild(t);
                            }
                          },
                        },
                        {
                          key: 'addTooltipStyle',
                          value: function () {
                            var e = le(this.pageWindow);
                            if (e) {
                              var t = document.createElement('style');
                              (t.type = 'text/css'),
                                (t.innerHTML = sn + cn + un),
                                e.appendChild(t);
                            }
                          },
                        },
                        {
                          key: 'createTooltipContent',
                          value: function () {
                            var e = ae(this.pageWindow);
                            e &&
                              ((this.tooltip = document.createElement('div')),
                              (this.tooltip.className = 'rm-tooltip'),
                              (this.tooltip.style.display = 'none'),
                              e.appendChild(this.tooltip),
                              o().render(
                                t().createElement(ln, {
                                  onDelete: this.removeSelectedAnnot,
                                  onEditStyle: this.onEditStyle,
                                  showStyleButton: !!this.editStyleHandler,
                                }),
                                this.tooltip
                              ));
                          },
                        },
                        {
                          key: 'cleanUpTooltip',
                          value: function () {
                            var e;
                            null === (e = this.tippy) ||
                              void 0 === e ||
                              e.destroy(),
                              (this.tippy = void 0);
                          },
                        },
                        {
                          key: 'getSelectedAnnotPos',
                          value: function () {
                            var e = this.getViewerElement(),
                              t = ie(this.pageWindow),
                              n = e.scrollHeight / t.scrollHeight,
                              r =
                                this.selectedAnnot.target.getBoundingClientRect();
                            return {
                              top: r.top * n - e.scrollTop,
                              bottom: r.bottom * n - e.scrollTop,
                              left: r.left * n,
                              right: r.right * n,
                            };
                          },
                        },
                      ]) &&
                        (function (e, t) {
                          for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            (r.enumerable = r.enumerable || !1),
                              (r.configurable = !0),
                              'value' in r && (r.writable = !0),
                              Object.defineProperty(e, bn(r.key), r);
                          }
                        })(n.prototype, r),
                      Object.defineProperty(n, 'prototype', { writable: !1 }),
                      e
                    );
                  })();
                function Pn(e, t, n, r) {
                  var o,
                    i = fn(e.childNodes);
                  try {
                    for (i.s(); !(o = i.n()).done; ) {
                      var a = o.value;
                      if (a.nodeType === Node.TEXT_NODE) {
                        var l = a.textContent.length;
                        if (((r += l), (n && r > t) || (!n && r >= t)))
                          return { textNode: a, offset: t - (r - l) };
                      } else {
                        var s = Pn(a, t, n, r);
                        if (s) return s;
                        r += a.textContent.length;
                      }
                    }
                  } catch (e) {
                    i.e(e);
                  } finally {
                    i.f();
                  }
                }
                function zn(e, t, n) {
                  n === wn.Highlight
                    ? t.appendChild(e)
                    : t.firstChild.appendChild(e);
                }
                function kn(e, t) {
                  if (0 === e.childNodes.length) return e === t;
                  var n,
                    r = fn(e.childNodes);
                  try {
                    for (r.s(); !(n = r.n()).done; )
                      if (kn(n.value, t)) return !0;
                  } catch (e) {
                    r.e(e);
                  } finally {
                    r.f();
                  }
                  return !1;
                }
                function In(e) {
                  return !e || Hn(e) ? e : In(e.parentNode);
                }
                function En(e) {
                  for (
                    var t = e.childNodes || [], n = t.length - 1;
                    n >= 0;
                    n--
                  ) {
                    var r = t[n];
                    if (
                      r.nodeType === Node.TEXT_NODE &&
                      r.textContent.length > 0
                    )
                      return r;
                    var o = En(r);
                    if (o) return o;
                  }
                }
                function Mn(e) {
                  for (var t = e.childNodes || [], n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (
                      r.nodeType === Node.TEXT_NODE &&
                      r.textContent.length > 0
                    )
                      return r;
                    var o = Mn(r);
                    if (o) return o;
                  }
                }
                function An(e) {
                  var t,
                    n = e.nextSibling;
                  t = Wn(e) ? e.childNodes : e.firstChild.childNodes;
                  var r,
                    o = fn((t = Array.from(t)));
                  try {
                    for (o.s(); !(r = o.n()).done; ) {
                      var i = r.value;
                      e.parentNode.insertBefore(i, n);
                    }
                  } catch (e) {
                    o.e(e);
                  } finally {
                    o.f();
                  }
                  e.remove();
                }
                function Ln(e) {
                  return mn(
                    mn({}, e),
                    {},
                    {
                      color: '#'.concat(e.color),
                      startOffset: e.ranges[0],
                      endOffset: e.ranges[e.ranges.length - 1] + 1,
                    }
                  );
                }
                function jn(e) {
                  return _n.includes(e.type);
                }
                function Hn(e) {
                  return 'P' === e.tagName;
                }
                function Dn(e, t) {
                  if (!e) return t;
                  var n = e.parentNode,
                    r = e.previousSibling;
                  return 'BODY' !== n.tagName
                    ? r
                      ? Dn(r, t + r.textContent.length)
                      : Dn(n, t)
                    : r
                      ? Hn(r)
                        ? Dn(r, t + r.textContent.length)
                        : Dn(r, t)
                      : t;
                }
                function Nn(e, t) {
                  var n = Gn(t.color, t.opacity);
                  Wn(e) ? (e.style.backgroundColor = n) : (e.style.color = n);
                }
                function Wn(e) {
                  return 'SPAN' === e.tagName;
                }
                function Gn(e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 1,
                    n = parseInt(e.slice(1, 3), 16),
                    r = parseInt(e.slice(3, 5), 16),
                    o = parseInt(e.slice(5, 7), 16);
                  return 'rgba('
                    .concat(n, ',')
                    .concat(r, ',')
                    .concat(o, ',')
                    .concat(t, ')');
                }
                var Fn = n(773);
                function Un(e) {
                  return (Un =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
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
                function Bn(e, t) {
                  return (Bn = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                        return (e.__proto__ = t), e;
                      })(e, t);
                }
                function Vn(e, t) {
                  if (t && ('object' === Un(t) || 'function' == typeof t))
                    return t;
                  if (void 0 !== t)
                    throw new TypeError(
                      'Derived constructors may only return object or undefined'
                    );
                  return qn(e);
                }
                function qn(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                }
                function Zn(e) {
                  return (Zn = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
                }
                function Yn(e, t, n) {
                  return (
                    (t = Xn(t)) in e
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
                function Xn(e) {
                  var t = (function (e, t) {
                    if ('object' !== Un(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var r = n.call(e, 'string');
                      if ('object' !== Un(r)) return r;
                      throw new TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return String(e);
                  })(e);
                  return 'symbol' === Un(t) ? t : String(t);
                }
                var Jn = (function (e) {
                  !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                      throw new TypeError(
                        'Super expression must either be null or a function'
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, 'prototype', { writable: !1 }),
                      t && Bn(e, t);
                  })(l, e);
                  var n,
                    r,
                    o,
                    i,
                    a =
                      ((o = l),
                      (i = (function () {
                        if ('undefined' == typeof Reflect || !Reflect.construct)
                          return !1;
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
                      })()),
                      function () {
                        var e,
                          t = Zn(o);
                        if (i) {
                          var n = Zn(this).constructor;
                          e = Reflect.construct(t, arguments, n);
                        } else e = t.apply(this, arguments);
                        return Vn(this, e);
                      });
                  function l(e) {
                    var n;
                    return (
                      (function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            'Cannot call a class as a function'
                          );
                      })(this, l),
                      Yn(
                        qn((n = a.call(this, e))),
                        'handleOnLoad',
                        function () {
                          n.props.page.loaded &&
                            (n.addCssStyle(),
                            n.props.page.pdfNetReflow &&
                              ((n.reflow = new Tn(
                                n.getPageWindow(),
                                n.props.page.pdfNetReflow,
                                n.props.editStyleHandler,
                                n.props.getViewerElement
                              )),
                              n.props.addAnnotConfig &&
                                n.reflow.setAddAnnotConfig(
                                  n.props.addAnnotConfig
                                )),
                            n.resetZoom(),
                            n
                              .getPageDoc()
                              .addEventListener('click', n.handleClickEvent),
                            n.initialized ||
                              (n.pageIframe.current.addEventListener(
                                N,
                                n.resetHeight
                              ),
                              (n.initialized = !0)),
                            n
                              .getPageDoc()
                              .addEventListener(
                                'mousedown',
                                n.handleMouseDownEvent
                              ));
                        }
                      ),
                      Yn(qn(n), 'handleClickEvent', function (e) {
                        for (
                          var t = e.target;
                          t &&
                          'P' !== t.tagName &&
                          'BODY' !== t.tagName &&
                          'HTML' !== t.tagName;

                        ) {
                          if ('A' === t.tagName && t.getAttribute('href')) {
                            e.preventDefault(),
                              n.props.clickLinkHandler(t.getAttribute('href'));
                            break;
                          }
                          t = t.parentNode;
                        }
                      }),
                      Yn(qn(n), 'handleMouseDownEvent', function () {
                        var e = new MouseEvent('mousedown', { bubbles: !0 });
                        n.props.getViewerElement().dispatchEvent(e);
                      }),
                      (n.pageIframe = t().createRef()),
                      (n.initialized = !1),
                      (n.style = n.getStyle()),
                      n.bindFunctions(),
                      n
                    );
                  }
                  return (
                    (n = l),
                    (r = [
                      {
                        key: 'componentDidMount',
                        value: function () {
                          this.props.page.loaded && this.loadContent();
                        },
                      },
                      {
                        key: 'componentDidUpdate',
                        value: function (e) {
                          var t;
                          this.props.page.loaded &&
                            (e.page !== this.props.page && this.loadContent(),
                            e.zoom !== this.props.zoom && this.resetZoom(),
                            e.addAnnotConfig !== this.props.addAnnotConfig &&
                              (null === (t = this.reflow) ||
                                void 0 === t ||
                                t.setAddAnnotConfig(
                                  this.props.addAnnotConfig
                                )));
                        },
                      },
                      {
                        key: 'componentWillUnmount',
                        value: function () {
                          var e, t, n, r;
                          null === (e = this.getPageDoc()) ||
                            void 0 === e ||
                            e.removeEventListener(
                              'click',
                              this.handleClickEvent
                            ),
                            null === (t = this.pageIframe) ||
                              void 0 === t ||
                              null === (n = t.current) ||
                              void 0 === n ||
                              n.removeEventListener(N, this.resetHeight),
                            null === (r = this.getPageDoc()) ||
                              void 0 === r ||
                              r.removeEventListener(
                                'mousedown',
                                this.handleMouseDownEvent
                              );
                        },
                      },
                      {
                        key: 'render',
                        value: function () {
                          return t().createElement('iframe', {
                            ref: this.pageIframe,
                            id: re(this.props.index + 1),
                            style: this.style,
                            onLoad: this.handleOnLoad,
                          });
                        },
                      },
                      {
                        key: 'getStyle',
                        value: function () {
                          return {
                            border: 'none',
                            width: '100%',
                            height: '500px',
                            backgroundColor: 'white',
                            display: 'block',
                          };
                        },
                      },
                      {
                        key: 'bindFunctions',
                        value: function () {
                          this.resetHeight = _.throttle(
                            this.resetHeight.bind(this),
                            300,
                            { leading: !1 }
                          );
                        },
                      },
                      {
                        key: 'getPageWindow',
                        value: function () {
                          var e, t;
                          return null === (e = this.pageIframe) ||
                            void 0 === e ||
                            null === (t = e.current) ||
                            void 0 === t
                            ? void 0
                            : t.contentWindow;
                        },
                      },
                      {
                        key: 'getPageDoc',
                        value: function () {
                          var e;
                          return null === (e = this.getPageWindow()) ||
                            void 0 === e
                            ? void 0
                            : e.document;
                        },
                      },
                      {
                        key: 'getPageDocHtml',
                        value: function () {
                          return ie(this.getPageWindow());
                        },
                      },
                      {
                        key: 'loadContent',
                        value: function () {
                          var e = this.getPageDoc();
                          e.open(), e.write(this.props.page.content), e.close();
                        },
                      },
                      {
                        key: 'resetZoom',
                        value: function () {
                          var e = this.getPageDocHtml();
                          if (e) {
                            if (window.chrome || oe())
                              e.style.zoom = this.props.zoom;
                            else {
                              var t = (100 / this.props.zoom).toFixed(2);
                              (e.style.transform = 'scale('.concat(
                                this.props.zoom,
                                ')'
                              )),
                                (e.style.transformOrigin = '0 0'),
                                (e.style.width = ''.concat(t, '%')),
                                (e.style.overflow = 'hidden');
                            }
                            this.resetHeight();
                          }
                        },
                      },
                      {
                        key: 'resetHeight',
                        value: function () {
                          this.getPageDocHtml() &&
                            ((this.pageIframe.current.style.height = '1px'),
                            (this.pageIframe.current.style.height =
                              this.getActualScrollHeight() + 'px'),
                            this.props.load && this.props.load());
                        },
                      },
                      {
                        key: 'getActualScrollHeight',
                        value: function () {
                          return this.getPageDocHtml()
                            ? Math.ceil(
                                this.getPageDocHtml().scrollHeight *
                                  this.props.zoom
                              ) + 1
                            : void 0;
                        },
                      },
                      {
                        key: 'addCssStyle',
                        value: function () {
                          var e = le(this.getPageWindow());
                          if (e) {
                            var t = document.createElement('style');
                            (t.type = 'text/css'),
                              (t.innerHTML = Fn),
                              e.appendChild(t);
                          }
                        },
                      },
                    ]) &&
                      (function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                          var r = t[n];
                          (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            'value' in r && (r.writable = !0),
                            Object.defineProperty(e, Xn(r.key), r);
                        }
                      })(n.prototype, r),
                    Object.defineProperty(n, 'prototype', { writable: !1 }),
                    l
                  );
                })(t().PureComponent);
                function Kn(e) {
                  return (Kn =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
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
                function $n(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                function Qn(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? $n(Object(n), !0).forEach(function (t) {
                          er(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : $n(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                }
                function er(e, t, n) {
                  return (
                    (t = nr(t)) in e
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
                function tr(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                }
                function nr(e) {
                  var t = (function (e, t) {
                    if ('object' !== Kn(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var r = n.call(e, 'string');
                      if ('object' !== Kn(r)) return r;
                      throw new TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return String(e);
                  })(e);
                  return 'symbol' === Kn(t) ? t : String(t);
                }
                function rr() {
                  return (rr =
                    'undefined' != typeof Reflect && Reflect.get
                      ? Reflect.get.bind()
                      : function (e, t, n) {
                          var r = or(e, t);
                          if (r) {
                            var o = Object.getOwnPropertyDescriptor(r, t);
                            return o.get
                              ? o.get.call(arguments.length < 3 ? e : n)
                              : o.value;
                          }
                        }).apply(this, arguments);
                }
                function or(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = lr(e));

                  );
                  return e;
                }
                function ir(e, t) {
                  return (ir = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                        return (e.__proto__ = t), e;
                      })(e, t);
                }
                function ar(e, t) {
                  if (t && ('object' === Kn(t) || 'function' == typeof t))
                    return t;
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
                function lr(e) {
                  return (lr = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
                }
                var sr = (function (e) {
                  !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                      throw new TypeError(
                        'Super expression must either be null or a function'
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, 'prototype', { writable: !1 }),
                      t && ir(e, t);
                  })(a, e);
                  var t,
                    n,
                    r,
                    o,
                    i =
                      ((r = a),
                      (o = (function () {
                        if ('undefined' == typeof Reflect || !Reflect.construct)
                          return !1;
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
                      })()),
                      function () {
                        var e,
                          t = lr(r);
                        if (o) {
                          var n = lr(this).constructor;
                          e = Reflect.construct(t, arguments, n);
                        } else e = t.apply(this, arguments);
                        return ar(this, e);
                      });
                  function a() {
                    return tr(this, a), i.apply(this, arguments);
                  }
                  return (
                    (t = a),
                    (n = [
                      {
                        key: 'getStyle',
                        value: function () {
                          return Qn(
                            Qn(
                              {},
                              rr(lr(a.prototype), 'getStyle', this).call(this)
                            ),
                            {},
                            { minHeight: '100%' }
                          );
                        },
                      },
                      {
                        key: 'loadContent',
                        value: function () {
                          rr(lr(a.prototype), 'loadContent', this).call(this),
                            (this.props.getViewerElement().scrollTop = 0);
                        },
                      },
                      {
                        key: 'resetHeight',
                        value: function () {
                          if (this.getPageDocHtml()) {
                            var e =
                              this.props.getViewerElement().scrollTop /
                              this.pageIframe.current.scrollHeight;
                            (this.pageIframe.current.style.height = '1px'),
                              (this.pageIframe.current.style.height =
                                this.getActualScrollHeight() + 'px'),
                              (this.props.getViewerElement().scrollTop =
                                e * this.pageIframe.current.scrollHeight);
                          }
                        },
                      },
                      {
                        key: 'getActualScrollHeight',
                        value: function () {
                          if (this.getPageDocHtml()) {
                            var e = Math.ceil(
                              this.getPageDocHtml().scrollHeight *
                                this.props.zoom
                            );
                            return e ===
                              this.props.getViewerElement().offsetHeight + 1
                              ? e - 1
                              : e;
                          }
                        },
                      },
                    ]) &&
                      (function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                          var r = t[n];
                          (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            'value' in r && (r.writable = !0),
                            Object.defineProperty(e, nr(r.key), r);
                        }
                      })(t.prototype, n),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    a
                  );
                })(Jn);
                function cr(e) {
                  return (cr =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
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
                function ur(e, t, n, r, o, i, a) {
                  try {
                    var l = e[i](a),
                      s = l.value;
                  } catch (e) {
                    return void n(e);
                  }
                  l.done ? t(s) : Promise.resolve(s).then(r, o);
                }
                function dr(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                function fr(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? dr(Object(n), !0).forEach(function (t) {
                          br(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : dr(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                }
                function hr() {
                  return (hr =
                    'undefined' != typeof Reflect && Reflect.get
                      ? Reflect.get.bind()
                      : function (e, t, n) {
                          var r = pr(e, t);
                          if (r) {
                            var o = Object.getOwnPropertyDescriptor(r, t);
                            return o.get
                              ? o.get.call(arguments.length < 3 ? e : n)
                              : o.value;
                          }
                        }).apply(this, arguments);
                }
                function pr(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = yr(e));

                  );
                  return e;
                }
                function mr(e, t) {
                  return (mr = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                        return (e.__proto__ = t), e;
                      })(e, t);
                }
                function vr(e, t) {
                  if (t && ('object' === cr(t) || 'function' == typeof t))
                    return t;
                  if (void 0 !== t)
                    throw new TypeError(
                      'Derived constructors may only return object or undefined'
                    );
                  return gr(e);
                }
                function gr(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                }
                function yr(e) {
                  return (yr = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
                }
                function br(e, t, n) {
                  return (
                    (t = wr(t)) in e
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
                function wr(e) {
                  var t = (function (e, t) {
                    if ('object' !== cr(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var r = n.call(e, 'string');
                      if ('object' !== cr(r)) return r;
                      throw new TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return String(e);
                  })(e);
                  return 'symbol' === cr(t) ? t : String(t);
                }
                var _r = (function (e) {
                  !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                      throw new TypeError(
                        'Super expression must either be null or a function'
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, 'prototype', { writable: !1 }),
                      t && mr(e, t);
                  })(l, e);
                  var n,
                    r,
                    o,
                    i,
                    a =
                      ((o = l),
                      (i = (function () {
                        if ('undefined' == typeof Reflect || !Reflect.construct)
                          return !1;
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
                      })()),
                      function () {
                        var e,
                          t = yr(o);
                        if (i) {
                          var n = yr(this).constructor;
                          e = Reflect.construct(t, arguments, n);
                        } else e = t.apply(this, arguments);
                        return vr(this, e);
                      });
                  function l(e) {
                    var n;
                    return (
                      (function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            'Cannot call a class as a function'
                          );
                      })(this, l),
                      br(
                        gr((n = a.call(this, e))),
                        'handleAddAnnotConfigUpdated',
                        function (e) {
                          n.setState({ addAnnotConfig: e.detail });
                        }
                      ),
                      (n.state = fr(
                        fr({}, n.state),
                        {},
                        { pageNum: n.props.options.pageNum || 1 }
                      )),
                      (n.pageContent = t().createRef()),
                      (n.handlePageNumberUpdated = _.debounce(
                        n.handlePageNumberUpdated.bind(gr(n)),
                        100
                      )),
                      (n.resize = _.throttle(n.resize.bind(gr(n)), 100)),
                      (n.handleZoomUpdated = _.throttle(
                        n.handleZoomUpdated.bind(gr(n)),
                        100
                      )),
                      n
                    );
                  }
                  return (
                    (n = l),
                    (r = [
                      {
                        key: 'render',
                        value: function () {
                          var e = this,
                            n = this.state.pages[this.state.pageNum - 1];
                          return t().createElement(
                            H,
                            { onResize: this.resize },
                            function (r) {
                              var o = r.measureRef;
                              return t().createElement(
                                'div',
                                {
                                  id: D,
                                  style: { overflowY: 'scroll' },
                                  ref: o,
                                },
                                e.state.showSpinner &&
                                  t().createElement(
                                    'div',
                                    {
                                      className: 'reader-mode-spinner-wrapper',
                                      style: e.state.spinnerStyle,
                                    },
                                    t().createElement('div', {
                                      className: 'reader-mode-spinner',
                                    })
                                  ),
                                e.state.pages.length > 0 &&
                                  n &&
                                  t().createElement(sr, {
                                    ref: e.pageContent,
                                    page: n,
                                    key: e.state.pageNum - 1,
                                    index: e.state.pageNum - 1,
                                    zoom: e.state.zoom,
                                    clickLinkHandler: e.handleLinkClicked,
                                    getViewerElement: e.getViewerElement,
                                    addAnnotConfig: e.state.addAnnotConfig,
                                    editStyleHandler:
                                      e.props.options.editStyleHandler,
                                  })
                              );
                            }
                          );
                        },
                      },
                      {
                        key: 'resize',
                        value: function () {
                          var e, t, n, r;
                          if (this.initialized) {
                            hr(yr(l.prototype), 'resize', this).call(this);
                            var o = new CustomEvent(N);
                            null === (e = this.pageContent) ||
                              void 0 === e ||
                              null === (t = e.current) ||
                              void 0 === t ||
                              null === (n = t.pageIframe) ||
                              void 0 === n ||
                              null === (r = n.current) ||
                              void 0 === r ||
                              r.dispatchEvent(o);
                          }
                        },
                      },
                      {
                        key: 'jumpToPage',
                        value: function (e) {
                          var t = this;
                          if (
                            (e + 1 !== this.state.pageNum &&
                              (this.setState({ pageNum: e + 1 }),
                              this.props.options.pageNumberUpdateHandler(
                                e + 1
                              )),
                            !this.state.pages[e].loaded)
                          ) {
                            var n = (function () {
                              var n = (function (e) {
                                return function () {
                                  var t = this,
                                    n = arguments;
                                  return new Promise(function (r, o) {
                                    var i = e.apply(t, n);
                                    function a(e) {
                                      ur(i, r, o, a, l, 'next', e);
                                    }
                                    function l(e) {
                                      ur(i, r, o, a, l, 'throw', e);
                                    }
                                    a(void 0);
                                  });
                                };
                              })(
                                regeneratorRuntime.mark(function n() {
                                  return regeneratorRuntime.wrap(function (n) {
                                    for (;;)
                                      switch ((n.prev = n.next)) {
                                        case 0:
                                          return (
                                            (n.next = 2), t.loadPageByNum(e)
                                          );
                                        case 2:
                                        case 'end':
                                          return n.stop();
                                      }
                                  }, n);
                                })
                              );
                              return function () {
                                return n.apply(this, arguments);
                              };
                            })();
                            this.runPdfNetTask(n);
                          }
                        },
                      },
                      {
                        key: 'handlePageNumberUpdated',
                        value: function (e) {
                          var t = e.detail;
                          t > this.state.pages.length ||
                            t === this.state.pageNum ||
                            (this.setState({ pageNum: t }),
                            this.jumpToPage(t - 1));
                        },
                      },
                      {
                        key: 'isReflowSupported',
                        value: function () {
                          return !0;
                        },
                      },
                    ]) &&
                      (function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                          var r = t[n];
                          (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            'value' in r && (r.writable = !0),
                            Object.defineProperty(e, wr(r.key), r);
                        }
                      })(n.prototype, r),
                    Object.defineProperty(n, 'prototype', { writable: !1 }),
                    l
                  );
                })(ne);
                function Sr(e) {
                  return (Sr =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
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
                function xr(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                function Cr(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? xr(Object(n), !0).forEach(function (t) {
                          Or(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : xr(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                }
                function Or(e, t, n) {
                  return (
                    (t = Rr(t)) in e
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
                function Rr(e) {
                  var t = (function (e, t) {
                    if ('object' !== Sr(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var r = n.call(e, 'string');
                      if ('object' !== Sr(r)) return r;
                      throw new TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return String(e);
                  })(e);
                  return 'symbol' === Sr(t) ? t : String(t);
                }
                function Tr() {
                  return (Tr =
                    'undefined' != typeof Reflect && Reflect.get
                      ? Reflect.get.bind()
                      : function (e, t, n) {
                          var r = Pr(e, t);
                          if (r) {
                            var o = Object.getOwnPropertyDescriptor(r, t);
                            return o.get
                              ? o.get.call(arguments.length < 3 ? e : n)
                              : o.value;
                          }
                        }).apply(this, arguments);
                }
                function Pr(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Ir(e));

                  );
                  return e;
                }
                function zr(e, t) {
                  return (zr = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                        return (e.__proto__ = t), e;
                      })(e, t);
                }
                function kr(e, t) {
                  if (t && ('object' === Sr(t) || 'function' == typeof t))
                    return t;
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
                function Ir(e) {
                  return (Ir = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
                }
                var Er = (function (e) {
                  !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                      throw new TypeError(
                        'Super expression must either be null or a function'
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, 'prototype', { writable: !1 }),
                      t && zr(e, t);
                  })(a, e);
                  var t,
                    n,
                    r,
                    o,
                    i =
                      ((r = a),
                      (o = (function () {
                        if ('undefined' == typeof Reflect || !Reflect.construct)
                          return !1;
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
                      })()),
                      function () {
                        var e,
                          t = Ir(r);
                        if (o) {
                          var n = Ir(this).constructor;
                          e = Reflect.construct(t, arguments, n);
                        } else e = t.apply(this, arguments);
                        return kr(this, e);
                      });
                  function a(e) {
                    var t;
                    return (
                      (function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            'Cannot call a class as a function'
                          );
                      })(this, a),
                      ((t = i.call(this, e)).isResettingHeight = !1),
                      (t.isResetHeightNeeded = !1),
                      t
                    );
                  }
                  return (
                    (t = a),
                    (n = [
                      {
                        key: 'componentDidMount',
                        value: function () {
                          this.loadContent();
                        },
                      },
                      {
                        key: 'componentDidUpdate',
                        value: function (e) {
                          e.zoom !== this.props.zoom && this.resetZoom();
                        },
                      },
                      {
                        key: 'getStyle',
                        value: function () {
                          return Cr(
                            Cr(
                              {},
                              Tr(Ir(a.prototype), 'getStyle', this).call(this)
                            ),
                            {},
                            { height: '100%' }
                          );
                        },
                      },
                      {
                        key: 'bindFunctions',
                        value: function () {
                          this.resetHeight = this.resetHeight.bind(this);
                        },
                      },
                      {
                        key: 'resetHeight',
                        value: function () {
                          this.isResettingHeight
                            ? this.isResetHeightNeeded ||
                              (this.isResetHeightNeeded = !0)
                            : this._resetHeight();
                        },
                      },
                      {
                        key: '_resetHeight',
                        value: function () {
                          var e = this,
                            t = function () {
                              e.isResetHeightNeeded
                                ? e._resetHeight()
                                : (e.isResettingHeight = !1);
                            };
                          this.isResetHeightNeeded = !1;
                          var n = this.pageIframe.current;
                          if (n) {
                            (this.isResettingHeight = !0),
                              (n.style.height = '1px');
                            var r = function () {
                              var r = e.getActualScrollHeight();
                              r
                                ? ((n.style.height = '100%'),
                                  e.props.onResetHeight(
                                    e.props.index + 1,
                                    r,
                                    e.props.parent,
                                    t
                                  ))
                                : t();
                            };
                            oe() ? setTimeout(r, 500) : r();
                          }
                        },
                      },
                    ]) &&
                      (function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                          var r = t[n];
                          (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            'value' in r && (r.writable = !0),
                            Object.defineProperty(e, Rr(r.key), r);
                        }
                      })(t.prototype, n),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    a
                  );
                })(Jn);
                function Mr(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                }
                function Ar(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      'value' in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                function Lr(e, t, n) {
                  return (
                    t && Ar(e.prototype, t),
                    n && Ar(e, n),
                    Object.defineProperty(e, 'prototype', { writable: !1 }),
                    e
                  );
                }
                function jr(e) {
                  return (jr =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
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
                function Hr(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                }
                function Dr(e, t) {
                  if (t && ('object' === jr(t) || 'function' == typeof t))
                    return t;
                  if (void 0 !== t)
                    throw new TypeError(
                      'Derived constructors may only return object or undefined'
                    );
                  return Hr(e);
                }
                function Nr(e) {
                  return (Nr = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
                }
                function Wr(e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function'
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(e, 'prototype', { writable: !1 }),
                    t && s(e, t);
                }
                function Gr(e, t, n) {
                  return (
                    t in e
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
                function Fr() {
                  var e = this.constructor.getDerivedStateFromProps(
                    this.props,
                    this.state
                  );
                  null != e && this.setState(e);
                }
                function Ur(e) {
                  this.setState(
                    function (t) {
                      var n = this.constructor.getDerivedStateFromProps(e, t);
                      return null != n ? n : null;
                    }.bind(this)
                  );
                }
                function Br(e, t) {
                  try {
                    var n = this.props,
                      r = this.state;
                    (this.props = e),
                      (this.state = t),
                      (this.__reactInternalSnapshotFlag = !0),
                      (this.__reactInternalSnapshot =
                        this.getSnapshotBeforeUpdate(n, r));
                  } finally {
                    (this.props = n), (this.state = r);
                  }
                }
                function Vr(e) {
                  var t = e.prototype;
                  if (!t || !t.isReactComponent)
                    throw new Error('Can only polyfill class components');
                  if (
                    'function' != typeof e.getDerivedStateFromProps &&
                    'function' != typeof t.getSnapshotBeforeUpdate
                  )
                    return e;
                  var n = null,
                    r = null,
                    o = null;
                  if (
                    ('function' == typeof t.componentWillMount
                      ? (n = 'componentWillMount')
                      : 'function' == typeof t.UNSAFE_componentWillMount &&
                        (n = 'UNSAFE_componentWillMount'),
                    'function' == typeof t.componentWillReceiveProps
                      ? (r = 'componentWillReceiveProps')
                      : 'function' ==
                          typeof t.UNSAFE_componentWillReceiveProps &&
                        (r = 'UNSAFE_componentWillReceiveProps'),
                    'function' == typeof t.componentWillUpdate
                      ? (o = 'componentWillUpdate')
                      : 'function' == typeof t.UNSAFE_componentWillUpdate &&
                        (o = 'UNSAFE_componentWillUpdate'),
                    null !== n || null !== r || null !== o)
                  ) {
                    var i = e.displayName || e.name,
                      a =
                        'function' == typeof e.getDerivedStateFromProps
                          ? 'getDerivedStateFromProps()'
                          : 'getSnapshotBeforeUpdate()';
                    throw Error(
                      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
                        i +
                        ' uses ' +
                        a +
                        ' but also contains the following legacy lifecycles:' +
                        (null !== n ? '\n  ' + n : '') +
                        (null !== r ? '\n  ' + r : '') +
                        (null !== o ? '\n  ' + o : '') +
                        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks'
                    );
                  }
                  if (
                    ('function' == typeof e.getDerivedStateFromProps &&
                      ((t.componentWillMount = Fr),
                      (t.componentWillReceiveProps = Ur)),
                    'function' == typeof t.getSnapshotBeforeUpdate)
                  ) {
                    if ('function' != typeof t.componentDidUpdate)
                      throw new Error(
                        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
                      );
                    t.componentWillUpdate = Br;
                    var l = t.componentDidUpdate;
                    t.componentDidUpdate = function (e, t, n) {
                      var r = this.__reactInternalSnapshotFlag
                        ? this.__reactInternalSnapshot
                        : n;
                      l.call(this, e, t, r);
                    };
                  }
                  return e;
                }
                function qr(e) {
                  var t,
                    n,
                    r = '';
                  if ('string' == typeof e || 'number' == typeof e) r += e;
                  else if ('object' == typeof e)
                    if (Array.isArray(e))
                      for (t = 0; t < e.length; t++)
                        e[t] && (n = qr(e[t])) && (r && (r += ' '), (r += n));
                    else for (t in e) e[t] && (r && (r += ' '), (r += t));
                  return r;
                }
                function Zr() {
                  for (var e, t, n = 0, r = ''; n < arguments.length; )
                    (e = arguments[n++]) &&
                      (t = qr(e)) &&
                      (r && (r += ' '), (r += t));
                  return r;
                }
                function Yr(e) {
                  var t = e.cellCount,
                    n = e.cellSize,
                    r = e.computeMetadataCallback,
                    o = e.computeMetadataCallbackProps,
                    i = e.nextCellsCount,
                    a = e.nextCellSize,
                    l = e.nextScrollToIndex,
                    s = e.scrollToIndex,
                    c = e.updateScrollOffsetForScrollToIndex;
                  (t === i &&
                    (('number' != typeof n && 'number' != typeof a) ||
                      n === a)) ||
                    (r(o), s >= 0 && s === l && c());
                }
                function Xr(e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    o = l(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                      (n = i[r]),
                        t.indexOf(n) >= 0 ||
                          (Object.prototype.propertyIsEnumerable.call(e, n) &&
                            (o[n] = e[n]));
                  }
                  return o;
                }
                (Fr.__suppressDeprecationWarning = !0),
                  (Ur.__suppressDeprecationWarning = !0),
                  (Br.__suppressDeprecationWarning = !0);
                var Jr = (function () {
                    function e(t) {
                      var n = t.cellCount,
                        r = t.cellSizeGetter,
                        o = t.estimatedCellSize;
                      Mr(this, e),
                        Gr(this, '_cellSizeAndPositionData', {}),
                        Gr(this, '_lastMeasuredIndex', -1),
                        Gr(this, '_lastBatchedIndex', -1),
                        Gr(this, '_cellCount', void 0),
                        Gr(this, '_cellSizeGetter', void 0),
                        Gr(this, '_estimatedCellSize', void 0),
                        (this._cellSizeGetter = r),
                        (this._cellCount = n),
                        (this._estimatedCellSize = o);
                    }
                    return (
                      Lr(e, [
                        {
                          key: 'areOffsetsAdjusted',
                          value: function () {
                            return !1;
                          },
                        },
                        {
                          key: 'configure',
                          value: function (e) {
                            var t = e.cellCount,
                              n = e.estimatedCellSize,
                              r = e.cellSizeGetter;
                            (this._cellCount = t),
                              (this._estimatedCellSize = n),
                              (this._cellSizeGetter = r);
                          },
                        },
                        {
                          key: 'getCellCount',
                          value: function () {
                            return this._cellCount;
                          },
                        },
                        {
                          key: 'getEstimatedCellSize',
                          value: function () {
                            return this._estimatedCellSize;
                          },
                        },
                        {
                          key: 'getLastMeasuredIndex',
                          value: function () {
                            return this._lastMeasuredIndex;
                          },
                        },
                        {
                          key: 'getOffsetAdjustment',
                          value: function () {
                            return 0;
                          },
                        },
                        {
                          key: 'getSizeAndPositionOfCell',
                          value: function (e) {
                            if (e < 0 || e >= this._cellCount)
                              throw Error(
                                'Requested index '
                                  .concat(e, ' is outside of range 0..')
                                  .concat(this._cellCount)
                              );
                            if (e > this._lastMeasuredIndex)
                              for (
                                var t =
                                    this.getSizeAndPositionOfLastMeasuredCell(),
                                  n = t.offset + t.size,
                                  r = this._lastMeasuredIndex + 1;
                                r <= e;
                                r++
                              ) {
                                var o = this._cellSizeGetter({ index: r });
                                if (void 0 === o || isNaN(o))
                                  throw Error(
                                    'Invalid size returned for cell '
                                      .concat(r, ' of value ')
                                      .concat(o)
                                  );
                                null === o
                                  ? ((this._cellSizeAndPositionData[r] = {
                                      offset: n,
                                      size: 0,
                                    }),
                                    (this._lastBatchedIndex = e))
                                  : ((this._cellSizeAndPositionData[r] = {
                                      offset: n,
                                      size: o,
                                    }),
                                    (n += o),
                                    (this._lastMeasuredIndex = e));
                              }
                            return this._cellSizeAndPositionData[e];
                          },
                        },
                        {
                          key: 'getSizeAndPositionOfLastMeasuredCell',
                          value: function () {
                            return this._lastMeasuredIndex >= 0
                              ? this._cellSizeAndPositionData[
                                  this._lastMeasuredIndex
                                ]
                              : { offset: 0, size: 0 };
                          },
                        },
                        {
                          key: 'getTotalSize',
                          value: function () {
                            var e = this.getSizeAndPositionOfLastMeasuredCell();
                            return (
                              e.offset +
                              e.size +
                              (this._cellCount - this._lastMeasuredIndex - 1) *
                                this._estimatedCellSize
                            );
                          },
                        },
                        {
                          key: 'getUpdatedOffsetForIndex',
                          value: function (e) {
                            var t = e.align,
                              n = void 0 === t ? 'auto' : t,
                              r = e.containerSize,
                              o = e.currentOffset,
                              i = e.targetIndex;
                            if (r <= 0) return 0;
                            var a,
                              l = this.getSizeAndPositionOfCell(i),
                              s = l.offset,
                              c = s - r + l.size;
                            switch (n) {
                              case 'start':
                                a = s;
                                break;
                              case 'end':
                                a = c;
                                break;
                              case 'center':
                                a = s - (r - l.size) / 2;
                                break;
                              default:
                                a = Math.max(c, Math.min(s, o));
                            }
                            var u = this.getTotalSize();
                            return Math.max(0, Math.min(u - r, a));
                          },
                        },
                        {
                          key: 'getVisibleCellRange',
                          value: function (e) {
                            var t = e.containerSize,
                              n = e.offset;
                            if (0 === this.getTotalSize()) return {};
                            var r = n + t,
                              o = this._findNearestCell(n),
                              i = this.getSizeAndPositionOfCell(o);
                            n = i.offset + i.size;
                            for (var a = o; n < r && a < this._cellCount - 1; )
                              a++, (n += this.getSizeAndPositionOfCell(a).size);
                            return { start: o, stop: a };
                          },
                        },
                        {
                          key: 'resetCell',
                          value: function (e) {
                            this._lastMeasuredIndex = Math.min(
                              this._lastMeasuredIndex,
                              e - 1
                            );
                          },
                        },
                        {
                          key: '_binarySearch',
                          value: function (e, t, n) {
                            for (; t <= e; ) {
                              var r = t + Math.floor((e - t) / 2),
                                o = this.getSizeAndPositionOfCell(r).offset;
                              if (o === n) return r;
                              o < n ? (t = r + 1) : o > n && (e = r - 1);
                            }
                            return t > 0 ? t - 1 : 0;
                          },
                        },
                        {
                          key: '_exponentialSearch',
                          value: function (e, t) {
                            for (
                              var n = 1;
                              e < this._cellCount &&
                              this.getSizeAndPositionOfCell(e).offset < t;

                            )
                              (e += n), (n *= 2);
                            return this._binarySearch(
                              Math.min(e, this._cellCount - 1),
                              Math.floor(e / 2),
                              t
                            );
                          },
                        },
                        {
                          key: '_findNearestCell',
                          value: function (e) {
                            if (isNaN(e))
                              throw Error(
                                'Invalid offset '.concat(e, ' specified')
                              );
                            e = Math.max(0, e);
                            var t = this.getSizeAndPositionOfLastMeasuredCell(),
                              n = Math.max(0, this._lastMeasuredIndex);
                            return t.offset >= e
                              ? this._binarySearch(n, 0, e)
                              : this._exponentialSearch(n, e);
                          },
                        },
                      ]),
                      e
                    );
                  })(),
                  Kr = (function () {
                    function e(t) {
                      var n = t.maxScrollSize,
                        r =
                          void 0 === n
                            ? 'undefined' != typeof window && window.chrome
                              ? 16777100
                              : 15e5
                            : n,
                        o = Xr(t, ['maxScrollSize']);
                      Mr(this, e),
                        Gr(this, '_cellSizeAndPositionManager', void 0),
                        Gr(this, '_maxScrollSize', void 0),
                        (this._cellSizeAndPositionManager = new Jr(o)),
                        (this._maxScrollSize = r);
                    }
                    return (
                      Lr(e, [
                        {
                          key: 'areOffsetsAdjusted',
                          value: function () {
                            return (
                              this._cellSizeAndPositionManager.getTotalSize() >
                              this._maxScrollSize
                            );
                          },
                        },
                        {
                          key: 'configure',
                          value: function (e) {
                            this._cellSizeAndPositionManager.configure(e);
                          },
                        },
                        {
                          key: 'getCellCount',
                          value: function () {
                            return this._cellSizeAndPositionManager.getCellCount();
                          },
                        },
                        {
                          key: 'getEstimatedCellSize',
                          value: function () {
                            return this._cellSizeAndPositionManager.getEstimatedCellSize();
                          },
                        },
                        {
                          key: 'getLastMeasuredIndex',
                          value: function () {
                            return this._cellSizeAndPositionManager.getLastMeasuredIndex();
                          },
                        },
                        {
                          key: 'getOffsetAdjustment',
                          value: function (e) {
                            var t = e.containerSize,
                              n = e.offset,
                              r =
                                this._cellSizeAndPositionManager.getTotalSize(),
                              o = this.getTotalSize(),
                              i = this._getOffsetPercentage({
                                containerSize: t,
                                offset: n,
                                totalSize: o,
                              });
                            return Math.round(i * (o - r));
                          },
                        },
                        {
                          key: 'getSizeAndPositionOfCell',
                          value: function (e) {
                            return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(
                              e
                            );
                          },
                        },
                        {
                          key: 'getSizeAndPositionOfLastMeasuredCell',
                          value: function () {
                            return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
                          },
                        },
                        {
                          key: 'getTotalSize',
                          value: function () {
                            return Math.min(
                              this._maxScrollSize,
                              this._cellSizeAndPositionManager.getTotalSize()
                            );
                          },
                        },
                        {
                          key: 'getUpdatedOffsetForIndex',
                          value: function (e) {
                            var t = e.align,
                              n = void 0 === t ? 'auto' : t,
                              r = e.containerSize,
                              o = e.currentOffset,
                              i = e.targetIndex;
                            o = this._safeOffsetToOffset({
                              containerSize: r,
                              offset: o,
                            });
                            var a =
                              this._cellSizeAndPositionManager.getUpdatedOffsetForIndex(
                                {
                                  align: n,
                                  containerSize: r,
                                  currentOffset: o,
                                  targetIndex: i,
                                }
                              );
                            return this._offsetToSafeOffset({
                              containerSize: r,
                              offset: a,
                            });
                          },
                        },
                        {
                          key: 'getVisibleCellRange',
                          value: function (e) {
                            var t = e.containerSize,
                              n = e.offset;
                            return (
                              (n = this._safeOffsetToOffset({
                                containerSize: t,
                                offset: n,
                              })),
                              this._cellSizeAndPositionManager.getVisibleCellRange(
                                { containerSize: t, offset: n }
                              )
                            );
                          },
                        },
                        {
                          key: 'resetCell',
                          value: function (e) {
                            this._cellSizeAndPositionManager.resetCell(e);
                          },
                        },
                        {
                          key: '_getOffsetPercentage',
                          value: function (e) {
                            var t = e.containerSize,
                              n = e.offset,
                              r = e.totalSize;
                            return r <= t ? 0 : n / (r - t);
                          },
                        },
                        {
                          key: '_offsetToSafeOffset',
                          value: function (e) {
                            var t = e.containerSize,
                              n = e.offset,
                              r =
                                this._cellSizeAndPositionManager.getTotalSize(),
                              o = this.getTotalSize();
                            if (r === o) return n;
                            var i = this._getOffsetPercentage({
                              containerSize: t,
                              offset: n,
                              totalSize: r,
                            });
                            return Math.round(i * (o - t));
                          },
                        },
                        {
                          key: '_safeOffsetToOffset',
                          value: function (e) {
                            var t = e.containerSize,
                              n = e.offset,
                              r =
                                this._cellSizeAndPositionManager.getTotalSize(),
                              o = this.getTotalSize();
                            if (r === o) return n;
                            var i = this._getOffsetPercentage({
                              containerSize: t,
                              offset: n,
                              totalSize: o,
                            });
                            return Math.round(i * (r - t));
                          },
                        },
                      ]),
                      e
                    );
                  })();
                function $r() {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t = {};
                  return function (n) {
                    var r = n.callback,
                      o = n.indices,
                      i = Object.keys(o),
                      a =
                        !e ||
                        i.every(function (e) {
                          var t = o[e];
                          return Array.isArray(t) ? t.length > 0 : t >= 0;
                        }),
                      l =
                        i.length !== Object.keys(t).length ||
                        i.some(function (e) {
                          var n = t[e],
                            r = o[e];
                          return Array.isArray(r)
                            ? n.join(',') !== r.join(',')
                            : n !== r;
                        });
                    (t = o), a && l && r(o);
                  };
                }
                function Qr(e) {
                  var t = e.cellSize,
                    n = e.cellSizeAndPositionManager,
                    r = e.previousCellsCount,
                    o = e.previousCellSize,
                    i = e.previousScrollToAlignment,
                    a = e.previousScrollToIndex,
                    l = e.previousSize,
                    s = e.scrollOffset,
                    c = e.scrollToAlignment,
                    u = e.scrollToIndex,
                    d = e.size,
                    f = e.sizeJustIncreasedFromZero,
                    h = e.updateScrollIndexCallback,
                    p = n.getCellCount(),
                    m = u >= 0 && u < p;
                  m &&
                  (d !== l ||
                    f ||
                    !o ||
                    ('number' == typeof t && t !== o) ||
                    c !== i ||
                    u !== a)
                    ? h(u)
                    : !m &&
                      p > 0 &&
                      (d < l || p < r) &&
                      s > n.getTotalSize() - d &&
                      h(p - 1);
                }
                const eo = !(
                  'undefined' == typeof window ||
                  !window.document ||
                  !window.document.createElement
                );
                var to, no;
                function ro(e) {
                  if (((!to && 0 !== to) || e) && eo) {
                    var t = document.createElement('div');
                    (t.style.position = 'absolute'),
                      (t.style.top = '-9999px'),
                      (t.style.width = '50px'),
                      (t.style.height = '50px'),
                      (t.style.overflow = 'scroll'),
                      document.body.appendChild(t),
                      (to = t.offsetWidth - t.clientWidth),
                      document.body.removeChild(t);
                  }
                  return to;
                }
                var oo,
                  io,
                  ao =
                    (no =
                      'undefined' != typeof window
                        ? window
                        : 'undefined' != typeof self
                          ? self
                          : {}).requestAnimationFrame ||
                    no.webkitRequestAnimationFrame ||
                    no.mozRequestAnimationFrame ||
                    no.oRequestAnimationFrame ||
                    no.msRequestAnimationFrame ||
                    function (e) {
                      return no.setTimeout(e, 1e3 / 60);
                    },
                  lo =
                    no.cancelAnimationFrame ||
                    no.webkitCancelAnimationFrame ||
                    no.mozCancelAnimationFrame ||
                    no.oCancelAnimationFrame ||
                    no.msCancelAnimationFrame ||
                    function (e) {
                      no.clearTimeout(e);
                    },
                  so = ao,
                  co = lo,
                  uo = function (e) {
                    return co(e.id);
                  },
                  fo = function (e, t) {
                    var n;
                    Promise.resolve().then(function () {
                      n = Date.now();
                    });
                    var r = {
                      id: so(function o() {
                        Date.now() - n >= t ? e.call() : (r.id = so(o));
                      }),
                    };
                    return r;
                  };
                function ho(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                function po(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? ho(n, !0).forEach(function (t) {
                          Gr(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : ho(n).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                }
                var mo = 'requested',
                  vo =
                    ((io = oo =
                      (function (t) {
                        function n(e) {
                          var t;
                          Mr(this, n),
                            Gr(
                              Hr((t = Dr(this, Nr(n).call(this, e)))),
                              '_onGridRenderedMemoizer',
                              $r()
                            ),
                            Gr(Hr(t), '_onScrollMemoizer', $r(!1)),
                            Gr(Hr(t), '_deferredInvalidateColumnIndex', null),
                            Gr(Hr(t), '_deferredInvalidateRowIndex', null),
                            Gr(Hr(t), '_recomputeScrollLeftFlag', !1),
                            Gr(Hr(t), '_recomputeScrollTopFlag', !1),
                            Gr(Hr(t), '_horizontalScrollBarSize', 0),
                            Gr(Hr(t), '_verticalScrollBarSize', 0),
                            Gr(Hr(t), '_scrollbarPresenceChanged', !1),
                            Gr(Hr(t), '_scrollingContainer', void 0),
                            Gr(Hr(t), '_childrenToDisplay', void 0),
                            Gr(Hr(t), '_columnStartIndex', void 0),
                            Gr(Hr(t), '_columnStopIndex', void 0),
                            Gr(Hr(t), '_rowStartIndex', void 0),
                            Gr(Hr(t), '_rowStopIndex', void 0),
                            Gr(Hr(t), '_renderedColumnStartIndex', 0),
                            Gr(Hr(t), '_renderedColumnStopIndex', 0),
                            Gr(Hr(t), '_renderedRowStartIndex', 0),
                            Gr(Hr(t), '_renderedRowStopIndex', 0),
                            Gr(Hr(t), '_initialScrollTop', void 0),
                            Gr(Hr(t), '_initialScrollLeft', void 0),
                            Gr(Hr(t), '_disablePointerEventsTimeoutId', void 0),
                            Gr(Hr(t), '_styleCache', {}),
                            Gr(Hr(t), '_cellCache', {}),
                            Gr(
                              Hr(t),
                              '_debounceScrollEndedCallback',
                              function () {
                                (t._disablePointerEventsTimeoutId = null),
                                  t.setState({
                                    isScrolling: !1,
                                    needToResetStyleCache: !1,
                                  });
                              }
                            ),
                            Gr(
                              Hr(t),
                              '_invokeOnGridRenderedHelper',
                              function () {
                                var e = t.props.onSectionRendered;
                                t._onGridRenderedMemoizer({
                                  callback: e,
                                  indices: {
                                    columnOverscanStartIndex:
                                      t._columnStartIndex,
                                    columnOverscanStopIndex: t._columnStopIndex,
                                    columnStartIndex:
                                      t._renderedColumnStartIndex,
                                    columnStopIndex: t._renderedColumnStopIndex,
                                    rowOverscanStartIndex: t._rowStartIndex,
                                    rowOverscanStopIndex: t._rowStopIndex,
                                    rowStartIndex: t._renderedRowStartIndex,
                                    rowStopIndex: t._renderedRowStopIndex,
                                  },
                                });
                              }
                            ),
                            Gr(
                              Hr(t),
                              '_setScrollingContainerRef',
                              function (e) {
                                t._scrollingContainer = e;
                              }
                            ),
                            Gr(Hr(t), '_onScroll', function (e) {
                              e.target === t._scrollingContainer &&
                                t.handleScrollEvent(e.target);
                            });
                          var r = new Kr({
                              cellCount: e.columnCount,
                              cellSizeGetter: function (t) {
                                return n._wrapSizeGetter(e.columnWidth)(t);
                              },
                              estimatedCellSize: n._getEstimatedColumnSize(e),
                            }),
                            o = new Kr({
                              cellCount: e.rowCount,
                              cellSizeGetter: function (t) {
                                return n._wrapSizeGetter(e.rowHeight)(t);
                              },
                              estimatedCellSize: n._getEstimatedRowSize(e),
                            });
                          return (
                            (t.state = {
                              instanceProps: {
                                columnSizeAndPositionManager: r,
                                rowSizeAndPositionManager: o,
                                prevColumnWidth: e.columnWidth,
                                prevRowHeight: e.rowHeight,
                                prevColumnCount: e.columnCount,
                                prevRowCount: e.rowCount,
                                prevIsScrolling: !0 === e.isScrolling,
                                prevScrollToColumn: e.scrollToColumn,
                                prevScrollToRow: e.scrollToRow,
                                scrollbarSize: 0,
                                scrollbarSizeMeasured: !1,
                              },
                              isScrolling: !1,
                              scrollDirectionHorizontal: 1,
                              scrollDirectionVertical: 1,
                              scrollLeft: 0,
                              scrollTop: 0,
                              scrollPositionChangeReason: null,
                              needToResetStyleCache: !1,
                            }),
                            e.scrollToRow > 0 &&
                              (t._initialScrollTop = t._getCalculatedScrollTop(
                                e,
                                t.state
                              )),
                            e.scrollToColumn > 0 &&
                              (t._initialScrollLeft =
                                t._getCalculatedScrollLeft(e, t.state)),
                            t
                          );
                        }
                        return (
                          Wr(n, t),
                          Lr(
                            n,
                            [
                              {
                                key: 'getOffsetForCell',
                                value: function () {
                                  var e =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {},
                                    t = e.alignment,
                                    n =
                                      void 0 === t
                                        ? this.props.scrollToAlignment
                                        : t,
                                    r = e.columnIndex,
                                    o =
                                      void 0 === r
                                        ? this.props.scrollToColumn
                                        : r,
                                    i = e.rowIndex,
                                    a =
                                      void 0 === i ? this.props.scrollToRow : i,
                                    l = po({}, this.props, {
                                      scrollToAlignment: n,
                                      scrollToColumn: o,
                                      scrollToRow: a,
                                    });
                                  return {
                                    scrollLeft:
                                      this._getCalculatedScrollLeft(l),
                                    scrollTop: this._getCalculatedScrollTop(l),
                                  };
                                },
                              },
                              {
                                key: 'getTotalRowsHeight',
                                value: function () {
                                  return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
                                },
                              },
                              {
                                key: 'getTotalColumnsWidth',
                                value: function () {
                                  return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
                                },
                              },
                              {
                                key: 'handleScrollEvent',
                                value: function (e) {
                                  var t = e.scrollLeft,
                                    n = void 0 === t ? 0 : t,
                                    r = e.scrollTop,
                                    o = void 0 === r ? 0 : r;
                                  if (!(o < 0)) {
                                    this._debounceScrollEnded();
                                    var i = this.props,
                                      a = i.autoHeight,
                                      l = i.autoWidth,
                                      s = i.height,
                                      c = i.width,
                                      u = this.state.instanceProps,
                                      d = u.scrollbarSize,
                                      f =
                                        u.rowSizeAndPositionManager.getTotalSize(),
                                      h =
                                        u.columnSizeAndPositionManager.getTotalSize(),
                                      p = Math.min(Math.max(0, h - c + d), n),
                                      m = Math.min(Math.max(0, f - s + d), o);
                                    if (
                                      this.state.scrollLeft !== p ||
                                      this.state.scrollTop !== m
                                    ) {
                                      var v = {
                                        isScrolling: !0,
                                        scrollDirectionHorizontal:
                                          p !== this.state.scrollLeft
                                            ? p > this.state.scrollLeft
                                              ? 1
                                              : -1
                                            : this.state
                                                .scrollDirectionHorizontal,
                                        scrollDirectionVertical:
                                          m !== this.state.scrollTop
                                            ? m > this.state.scrollTop
                                              ? 1
                                              : -1
                                            : this.state
                                                .scrollDirectionVertical,
                                        scrollPositionChangeReason: 'observed',
                                      };
                                      a || (v.scrollTop = m),
                                        l || (v.scrollLeft = p),
                                        (v.needToResetStyleCache = !1),
                                        this.setState(v);
                                    }
                                    this._invokeOnScrollMemoizer({
                                      scrollLeft: p,
                                      scrollTop: m,
                                      totalColumnsWidth: h,
                                      totalRowsHeight: f,
                                    });
                                  }
                                },
                              },
                              {
                                key: 'invalidateCellSizeAfterRender',
                                value: function (e) {
                                  var t = e.columnIndex,
                                    n = e.rowIndex;
                                  (this._deferredInvalidateColumnIndex =
                                    'number' ==
                                    typeof this._deferredInvalidateColumnIndex
                                      ? Math.min(
                                          this._deferredInvalidateColumnIndex,
                                          t
                                        )
                                      : t),
                                    (this._deferredInvalidateRowIndex =
                                      'number' ==
                                      typeof this._deferredInvalidateRowIndex
                                        ? Math.min(
                                            this._deferredInvalidateRowIndex,
                                            n
                                          )
                                        : n);
                                },
                              },
                              {
                                key: 'measureAllCells',
                                value: function () {
                                  var e = this.props,
                                    t = e.columnCount,
                                    n = e.rowCount,
                                    r = this.state.instanceProps;
                                  r.columnSizeAndPositionManager.getSizeAndPositionOfCell(
                                    t - 1
                                  ),
                                    r.rowSizeAndPositionManager.getSizeAndPositionOfCell(
                                      n - 1
                                    );
                                },
                              },
                              {
                                key: 'recomputeGridSize',
                                value: function () {
                                  var e =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {},
                                    t = e.columnIndex,
                                    n = void 0 === t ? 0 : t,
                                    r = e.rowIndex,
                                    o = void 0 === r ? 0 : r,
                                    i = this.props,
                                    a = i.scrollToColumn,
                                    l = i.scrollToRow,
                                    s = this.state.instanceProps;
                                  s.columnSizeAndPositionManager.resetCell(n),
                                    s.rowSizeAndPositionManager.resetCell(o),
                                    (this._recomputeScrollLeftFlag =
                                      a >= 0 &&
                                      (1 ===
                                      this.state.scrollDirectionHorizontal
                                        ? n <= a
                                        : n >= a)),
                                    (this._recomputeScrollTopFlag =
                                      l >= 0 &&
                                      (1 === this.state.scrollDirectionVertical
                                        ? o <= l
                                        : o >= l)),
                                    (this._styleCache = {}),
                                    (this._cellCache = {}),
                                    this.forceUpdate();
                                },
                              },
                              {
                                key: 'scrollToCell',
                                value: function (e) {
                                  var t = e.columnIndex,
                                    n = e.rowIndex,
                                    r = this.props.columnCount,
                                    o = this.props;
                                  r > 1 &&
                                    void 0 !== t &&
                                    this._updateScrollLeftForScrollToColumn(
                                      po({}, o, { scrollToColumn: t })
                                    ),
                                    void 0 !== n &&
                                      this._updateScrollTopForScrollToRow(
                                        po({}, o, { scrollToRow: n })
                                      );
                                },
                              },
                              {
                                key: 'componentDidMount',
                                value: function () {
                                  var e = this.props,
                                    t = e.getScrollbarSize,
                                    r = e.height,
                                    o = e.scrollLeft,
                                    i = e.scrollToColumn,
                                    a = e.scrollTop,
                                    l = e.scrollToRow,
                                    s = e.width,
                                    c = this.state.instanceProps;
                                  if (
                                    ((this._initialScrollTop = 0),
                                    (this._initialScrollLeft = 0),
                                    this._handleInvalidatedGridSize(),
                                    c.scrollbarSizeMeasured ||
                                      this.setState(function (e) {
                                        var n = po({}, e, {
                                          needToResetStyleCache: !1,
                                        });
                                        return (
                                          (n.instanceProps.scrollbarSize = t()),
                                          (n.instanceProps.scrollbarSizeMeasured =
                                            !0),
                                          n
                                        );
                                      }),
                                    ('number' == typeof o && o >= 0) ||
                                      ('number' == typeof a && a >= 0))
                                  ) {
                                    var u = n._getScrollToPositionStateUpdate({
                                      prevState: this.state,
                                      scrollLeft: o,
                                      scrollTop: a,
                                    });
                                    u &&
                                      ((u.needToResetStyleCache = !1),
                                      this.setState(u));
                                  }
                                  this._scrollingContainer &&
                                    (this._scrollingContainer.scrollLeft !==
                                      this.state.scrollLeft &&
                                      (this._scrollingContainer.scrollLeft =
                                        this.state.scrollLeft),
                                    this._scrollingContainer.scrollTop !==
                                      this.state.scrollTop &&
                                      (this._scrollingContainer.scrollTop =
                                        this.state.scrollTop));
                                  var d = r > 0 && s > 0;
                                  i >= 0 &&
                                    d &&
                                    this._updateScrollLeftForScrollToColumn(),
                                    l >= 0 &&
                                      d &&
                                      this._updateScrollTopForScrollToRow(),
                                    this._invokeOnGridRenderedHelper(),
                                    this._invokeOnScrollMemoizer({
                                      scrollLeft: o || 0,
                                      scrollTop: a || 0,
                                      totalColumnsWidth:
                                        c.columnSizeAndPositionManager.getTotalSize(),
                                      totalRowsHeight:
                                        c.rowSizeAndPositionManager.getTotalSize(),
                                    }),
                                    this._maybeCallOnScrollbarPresenceChange();
                                },
                              },
                              {
                                key: 'componentDidUpdate',
                                value: function (e, t) {
                                  var n = this,
                                    r = this.props,
                                    o = r.autoHeight,
                                    i = r.autoWidth,
                                    a = r.columnCount,
                                    l = r.height,
                                    s = r.rowCount,
                                    c = r.scrollToAlignment,
                                    u = r.scrollToColumn,
                                    d = r.scrollToRow,
                                    f = r.width,
                                    h = this.state,
                                    p = h.scrollLeft,
                                    m = h.scrollPositionChangeReason,
                                    v = h.scrollTop,
                                    g = h.instanceProps;
                                  this._handleInvalidatedGridSize();
                                  var y =
                                    (a > 0 && 0 === e.columnCount) ||
                                    (s > 0 && 0 === e.rowCount);
                                  m === mo &&
                                    (!i &&
                                      p >= 0 &&
                                      (p !==
                                        this._scrollingContainer.scrollLeft ||
                                        y) &&
                                      (this._scrollingContainer.scrollLeft = p),
                                    !o &&
                                      v >= 0 &&
                                      (v !==
                                        this._scrollingContainer.scrollTop ||
                                        y) &&
                                      (this._scrollingContainer.scrollTop = v));
                                  var b =
                                    (0 === e.width || 0 === e.height) &&
                                    l > 0 &&
                                    f > 0;
                                  if (
                                    (this._recomputeScrollLeftFlag
                                      ? ((this._recomputeScrollLeftFlag = !1),
                                        this._updateScrollLeftForScrollToColumn(
                                          this.props
                                        ))
                                      : Qr({
                                          cellSizeAndPositionManager:
                                            g.columnSizeAndPositionManager,
                                          previousCellsCount: e.columnCount,
                                          previousCellSize: e.columnWidth,
                                          previousScrollToAlignment:
                                            e.scrollToAlignment,
                                          previousScrollToIndex:
                                            e.scrollToColumn,
                                          previousSize: e.width,
                                          scrollOffset: p,
                                          scrollToAlignment: c,
                                          scrollToIndex: u,
                                          size: f,
                                          sizeJustIncreasedFromZero: b,
                                          updateScrollIndexCallback:
                                            function () {
                                              return n._updateScrollLeftForScrollToColumn(
                                                n.props
                                              );
                                            },
                                        }),
                                    this._recomputeScrollTopFlag
                                      ? ((this._recomputeScrollTopFlag = !1),
                                        this._updateScrollTopForScrollToRow(
                                          this.props
                                        ))
                                      : Qr({
                                          cellSizeAndPositionManager:
                                            g.rowSizeAndPositionManager,
                                          previousCellsCount: e.rowCount,
                                          previousCellSize: e.rowHeight,
                                          previousScrollToAlignment:
                                            e.scrollToAlignment,
                                          previousScrollToIndex: e.scrollToRow,
                                          previousSize: e.height,
                                          scrollOffset: v,
                                          scrollToAlignment: c,
                                          scrollToIndex: d,
                                          size: l,
                                          sizeJustIncreasedFromZero: b,
                                          updateScrollIndexCallback:
                                            function () {
                                              return n._updateScrollTopForScrollToRow(
                                                n.props
                                              );
                                            },
                                        }),
                                    this._invokeOnGridRenderedHelper(),
                                    p !== t.scrollLeft || v !== t.scrollTop)
                                  ) {
                                    var w =
                                        g.rowSizeAndPositionManager.getTotalSize(),
                                      _ =
                                        g.columnSizeAndPositionManager.getTotalSize();
                                    this._invokeOnScrollMemoizer({
                                      scrollLeft: p,
                                      scrollTop: v,
                                      totalColumnsWidth: _,
                                      totalRowsHeight: w,
                                    });
                                  }
                                  this._maybeCallOnScrollbarPresenceChange();
                                },
                              },
                              {
                                key: 'componentWillUnmount',
                                value: function () {
                                  this._disablePointerEventsTimeoutId &&
                                    uo(this._disablePointerEventsTimeoutId);
                                },
                              },
                              {
                                key: 'render',
                                value: function () {
                                  var t = this.props,
                                    n = t.autoContainerWidth,
                                    r = t.autoHeight,
                                    o = t.autoWidth,
                                    i = t.className,
                                    l = t.containerProps,
                                    s = t.containerRole,
                                    c = t.containerStyle,
                                    u = t.height,
                                    d = t.id,
                                    f = t.noContentRenderer,
                                    h = t.role,
                                    p = t.style,
                                    m = t.tabIndex,
                                    v = t.width,
                                    g = this.state,
                                    y = g.instanceProps,
                                    b = g.needToResetStyleCache,
                                    w = this._isScrolling(),
                                    _ = {
                                      boxSizing: 'border-box',
                                      direction: 'ltr',
                                      height: r ? 'auto' : u,
                                      position: 'relative',
                                      width: o ? 'auto' : v,
                                      WebkitOverflowScrolling: 'touch',
                                      willChange: 'transform',
                                    };
                                  b && (this._styleCache = {}),
                                    this.state.isScrolling ||
                                      this._resetStyleCache(),
                                    this._calculateChildrenToRender(
                                      this.props,
                                      this.state
                                    );
                                  var S =
                                      y.columnSizeAndPositionManager.getTotalSize(),
                                    x =
                                      y.rowSizeAndPositionManager.getTotalSize(),
                                    C = x > u ? y.scrollbarSize : 0,
                                    O = S > v ? y.scrollbarSize : 0;
                                  (O === this._horizontalScrollBarSize &&
                                    C === this._verticalScrollBarSize) ||
                                    ((this._horizontalScrollBarSize = O),
                                    (this._verticalScrollBarSize = C),
                                    (this._scrollbarPresenceChanged = !0)),
                                    (_.overflowX =
                                      S + C <= v ? 'hidden' : 'auto'),
                                    (_.overflowY =
                                      x + O <= u ? 'hidden' : 'auto');
                                  var R = this._childrenToDisplay,
                                    T = 0 === R.length && u > 0 && v > 0;
                                  return e.createElement(
                                    'div',
                                    a(
                                      { ref: this._setScrollingContainerRef },
                                      l,
                                      {
                                        'aria-label': this.props['aria-label'],
                                        'aria-readonly':
                                          this.props['aria-readonly'],
                                        className: Zr(
                                          'ReactVirtualized__Grid',
                                          i
                                        ),
                                        id: d,
                                        onScroll: this._onScroll,
                                        role: h,
                                        style: po({}, _, {}, p),
                                        tabIndex: m,
                                      }
                                    ),
                                    R.length > 0 &&
                                      e.createElement(
                                        'div',
                                        {
                                          className:
                                            'ReactVirtualized__Grid__innerScrollContainer',
                                          role: s,
                                          style: po(
                                            {
                                              width: n ? 'auto' : S,
                                              height: x,
                                              maxWidth: S,
                                              maxHeight: x,
                                              overflow: 'hidden',
                                              pointerEvents: w ? 'none' : '',
                                              position: 'relative',
                                            },
                                            c
                                          ),
                                        },
                                        R
                                      ),
                                    T && f()
                                  );
                                },
                              },
                              {
                                key: '_calculateChildrenToRender',
                                value: function () {
                                  var e =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : this.props,
                                    t =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : this.state,
                                    n = e.cellRenderer,
                                    r = e.cellRangeRenderer,
                                    o = e.columnCount,
                                    i = e.deferredMeasurementCache,
                                    a = e.height,
                                    l = e.overscanColumnCount,
                                    s = e.overscanIndicesGetter,
                                    c = e.overscanRowCount,
                                    u = e.rowCount,
                                    d = e.width,
                                    f = e.isScrollingOptOut,
                                    h = t.scrollDirectionHorizontal,
                                    p = t.scrollDirectionVertical,
                                    m = t.instanceProps,
                                    v =
                                      this._initialScrollTop > 0
                                        ? this._initialScrollTop
                                        : t.scrollTop,
                                    g =
                                      this._initialScrollLeft > 0
                                        ? this._initialScrollLeft
                                        : t.scrollLeft,
                                    y = this._isScrolling(e, t);
                                  if (
                                    ((this._childrenToDisplay = []),
                                    a > 0 && d > 0)
                                  ) {
                                    var b =
                                        m.columnSizeAndPositionManager.getVisibleCellRange(
                                          { containerSize: d, offset: g }
                                        ),
                                      w =
                                        m.rowSizeAndPositionManager.getVisibleCellRange(
                                          { containerSize: a, offset: v }
                                        ),
                                      _ =
                                        m.columnSizeAndPositionManager.getOffsetAdjustment(
                                          { containerSize: d, offset: g }
                                        ),
                                      S =
                                        m.rowSizeAndPositionManager.getOffsetAdjustment(
                                          { containerSize: a, offset: v }
                                        );
                                    (this._renderedColumnStartIndex = b.start),
                                      (this._renderedColumnStopIndex = b.stop),
                                      (this._renderedRowStartIndex = w.start),
                                      (this._renderedRowStopIndex = w.stop);
                                    var x = s({
                                        direction: 'horizontal',
                                        cellCount: o,
                                        overscanCellsCount: l,
                                        scrollDirection: h,
                                        startIndex:
                                          'number' == typeof b.start
                                            ? b.start
                                            : 0,
                                        stopIndex:
                                          'number' == typeof b.stop
                                            ? b.stop
                                            : -1,
                                      }),
                                      C = s({
                                        direction: 'vertical',
                                        cellCount: u,
                                        overscanCellsCount: c,
                                        scrollDirection: p,
                                        startIndex:
                                          'number' == typeof w.start
                                            ? w.start
                                            : 0,
                                        stopIndex:
                                          'number' == typeof w.stop
                                            ? w.stop
                                            : -1,
                                      }),
                                      O = x.overscanStartIndex,
                                      R = x.overscanStopIndex,
                                      T = C.overscanStartIndex,
                                      P = C.overscanStopIndex;
                                    if (i) {
                                      if (!i.hasFixedHeight())
                                        for (var z = T; z <= P; z++)
                                          if (!i.has(z, 0)) {
                                            (O = 0), (R = o - 1);
                                            break;
                                          }
                                      if (!i.hasFixedWidth())
                                        for (var k = O; k <= R; k++)
                                          if (!i.has(0, k)) {
                                            (T = 0), (P = u - 1);
                                            break;
                                          }
                                    }
                                    (this._childrenToDisplay = r({
                                      cellCache: this._cellCache,
                                      cellRenderer: n,
                                      columnSizeAndPositionManager:
                                        m.columnSizeAndPositionManager,
                                      columnStartIndex: O,
                                      columnStopIndex: R,
                                      deferredMeasurementCache: i,
                                      horizontalOffsetAdjustment: _,
                                      isScrolling: y,
                                      isScrollingOptOut: f,
                                      parent: this,
                                      rowSizeAndPositionManager:
                                        m.rowSizeAndPositionManager,
                                      rowStartIndex: T,
                                      rowStopIndex: P,
                                      scrollLeft: g,
                                      scrollTop: v,
                                      styleCache: this._styleCache,
                                      verticalOffsetAdjustment: S,
                                      visibleColumnIndices: b,
                                      visibleRowIndices: w,
                                    })),
                                      (this._columnStartIndex = O),
                                      (this._columnStopIndex = R),
                                      (this._rowStartIndex = T),
                                      (this._rowStopIndex = P);
                                  }
                                },
                              },
                              {
                                key: '_debounceScrollEnded',
                                value: function () {
                                  var e = this.props.scrollingResetTimeInterval;
                                  this._disablePointerEventsTimeoutId &&
                                    uo(this._disablePointerEventsTimeoutId),
                                    (this._disablePointerEventsTimeoutId = fo(
                                      this._debounceScrollEndedCallback,
                                      e
                                    ));
                                },
                              },
                              {
                                key: '_handleInvalidatedGridSize',
                                value: function () {
                                  if (
                                    'number' ==
                                      typeof this
                                        ._deferredInvalidateColumnIndex &&
                                    'number' ==
                                      typeof this._deferredInvalidateRowIndex
                                  ) {
                                    var e = this._deferredInvalidateColumnIndex,
                                      t = this._deferredInvalidateRowIndex;
                                    (this._deferredInvalidateColumnIndex =
                                      null),
                                      (this._deferredInvalidateRowIndex = null),
                                      this.recomputeGridSize({
                                        columnIndex: e,
                                        rowIndex: t,
                                      });
                                  }
                                },
                              },
                              {
                                key: '_invokeOnScrollMemoizer',
                                value: function (e) {
                                  var t = this,
                                    n = e.scrollLeft,
                                    r = e.scrollTop,
                                    o = e.totalColumnsWidth,
                                    i = e.totalRowsHeight;
                                  this._onScrollMemoizer({
                                    callback: function (e) {
                                      var n = e.scrollLeft,
                                        r = e.scrollTop,
                                        a = t.props,
                                        l = a.height;
                                      (0, a.onScroll)({
                                        clientHeight: l,
                                        clientWidth: a.width,
                                        scrollHeight: i,
                                        scrollLeft: n,
                                        scrollTop: r,
                                        scrollWidth: o,
                                      });
                                    },
                                    indices: { scrollLeft: n, scrollTop: r },
                                  });
                                },
                              },
                              {
                                key: '_isScrolling',
                                value: function () {
                                  var e =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : this.props,
                                    t =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : this.state;
                                  return Object.hasOwnProperty.call(
                                    e,
                                    'isScrolling'
                                  )
                                    ? Boolean(e.isScrolling)
                                    : Boolean(t.isScrolling);
                                },
                              },
                              {
                                key: '_maybeCallOnScrollbarPresenceChange',
                                value: function () {
                                  if (this._scrollbarPresenceChanged) {
                                    var e =
                                      this.props.onScrollbarPresenceChange;
                                    (this._scrollbarPresenceChanged = !1),
                                      e({
                                        horizontal:
                                          this._horizontalScrollBarSize > 0,
                                        size: this.state.instanceProps
                                          .scrollbarSize,
                                        vertical:
                                          this._verticalScrollBarSize > 0,
                                      });
                                  }
                                },
                              },
                              {
                                key: 'scrollToPosition',
                                value: function (e) {
                                  var t = e.scrollLeft,
                                    r = e.scrollTop,
                                    o = n._getScrollToPositionStateUpdate({
                                      prevState: this.state,
                                      scrollLeft: t,
                                      scrollTop: r,
                                    });
                                  o &&
                                    ((o.needToResetStyleCache = !1),
                                    this.setState(o));
                                },
                              },
                              {
                                key: '_getCalculatedScrollLeft',
                                value: function () {
                                  var e =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : this.props,
                                    t =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : this.state;
                                  return n._getCalculatedScrollLeft(e, t);
                                },
                              },
                              {
                                key: '_updateScrollLeftForScrollToColumn',
                                value: function () {
                                  var e =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : this.props,
                                    t =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : this.state,
                                    r =
                                      n._getScrollLeftForScrollToColumnStateUpdate(
                                        e,
                                        t
                                      );
                                  r &&
                                    ((r.needToResetStyleCache = !1),
                                    this.setState(r));
                                },
                              },
                              {
                                key: '_getCalculatedScrollTop',
                                value: function () {
                                  var e =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : this.props,
                                    t =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : this.state;
                                  return n._getCalculatedScrollTop(e, t);
                                },
                              },
                              {
                                key: '_resetStyleCache',
                                value: function () {
                                  var e = this._styleCache,
                                    t = this._cellCache,
                                    n = this.props.isScrollingOptOut;
                                  (this._cellCache = {}),
                                    (this._styleCache = {});
                                  for (
                                    var r = this._rowStartIndex;
                                    r <= this._rowStopIndex;
                                    r++
                                  )
                                    for (
                                      var o = this._columnStartIndex;
                                      o <= this._columnStopIndex;
                                      o++
                                    ) {
                                      var i = ''.concat(r, '-').concat(o);
                                      (this._styleCache[i] = e[i]),
                                        n && (this._cellCache[i] = t[i]);
                                    }
                                },
                              },
                              {
                                key: '_updateScrollTopForScrollToRow',
                                value: function () {
                                  var e =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : this.props,
                                    t =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : this.state,
                                    r =
                                      n._getScrollTopForScrollToRowStateUpdate(
                                        e,
                                        t
                                      );
                                  r &&
                                    ((r.needToResetStyleCache = !1),
                                    this.setState(r));
                                },
                              },
                            ],
                            [
                              {
                                key: 'getDerivedStateFromProps',
                                value: function (e, t) {
                                  var r = {};
                                  (0 === e.columnCount && 0 !== t.scrollLeft) ||
                                  (0 === e.rowCount && 0 !== t.scrollTop)
                                    ? ((r.scrollLeft = 0), (r.scrollTop = 0))
                                    : ((e.scrollLeft !== t.scrollLeft &&
                                        e.scrollToColumn < 0) ||
                                        (e.scrollTop !== t.scrollTop &&
                                          e.scrollToRow < 0)) &&
                                      Object.assign(
                                        r,
                                        n._getScrollToPositionStateUpdate({
                                          prevState: t,
                                          scrollLeft: e.scrollLeft,
                                          scrollTop: e.scrollTop,
                                        })
                                      );
                                  var o,
                                    i,
                                    a = t.instanceProps;
                                  return (
                                    (r.needToResetStyleCache = !1),
                                    (e.columnWidth === a.prevColumnWidth &&
                                      e.rowHeight === a.prevRowHeight) ||
                                      (r.needToResetStyleCache = !0),
                                    a.columnSizeAndPositionManager.configure({
                                      cellCount: e.columnCount,
                                      estimatedCellSize:
                                        n._getEstimatedColumnSize(e),
                                      cellSizeGetter: n._wrapSizeGetter(
                                        e.columnWidth
                                      ),
                                    }),
                                    a.rowSizeAndPositionManager.configure({
                                      cellCount: e.rowCount,
                                      estimatedCellSize:
                                        n._getEstimatedRowSize(e),
                                      cellSizeGetter: n._wrapSizeGetter(
                                        e.rowHeight
                                      ),
                                    }),
                                    (0 !== a.prevColumnCount &&
                                      0 !== a.prevRowCount) ||
                                      ((a.prevColumnCount = 0),
                                      (a.prevRowCount = 0)),
                                    e.autoHeight &&
                                      !1 === e.isScrolling &&
                                      !0 === a.prevIsScrolling &&
                                      Object.assign(r, { isScrolling: !1 }),
                                    Yr({
                                      cellCount: a.prevColumnCount,
                                      cellSize:
                                        'number' == typeof a.prevColumnWidth
                                          ? a.prevColumnWidth
                                          : null,
                                      computeMetadataCallback: function () {
                                        return a.columnSizeAndPositionManager.resetCell(
                                          0
                                        );
                                      },
                                      computeMetadataCallbackProps: e,
                                      nextCellsCount: e.columnCount,
                                      nextCellSize:
                                        'number' == typeof e.columnWidth
                                          ? e.columnWidth
                                          : null,
                                      nextScrollToIndex: e.scrollToColumn,
                                      scrollToIndex: a.prevScrollToColumn,
                                      updateScrollOffsetForScrollToIndex:
                                        function () {
                                          o =
                                            n._getScrollLeftForScrollToColumnStateUpdate(
                                              e,
                                              t
                                            );
                                        },
                                    }),
                                    Yr({
                                      cellCount: a.prevRowCount,
                                      cellSize:
                                        'number' == typeof a.prevRowHeight
                                          ? a.prevRowHeight
                                          : null,
                                      computeMetadataCallback: function () {
                                        return a.rowSizeAndPositionManager.resetCell(
                                          0
                                        );
                                      },
                                      computeMetadataCallbackProps: e,
                                      nextCellsCount: e.rowCount,
                                      nextCellSize:
                                        'number' == typeof e.rowHeight
                                          ? e.rowHeight
                                          : null,
                                      nextScrollToIndex: e.scrollToRow,
                                      scrollToIndex: a.prevScrollToRow,
                                      updateScrollOffsetForScrollToIndex:
                                        function () {
                                          i =
                                            n._getScrollTopForScrollToRowStateUpdate(
                                              e,
                                              t
                                            );
                                        },
                                    }),
                                    (a.prevColumnCount = e.columnCount),
                                    (a.prevColumnWidth = e.columnWidth),
                                    (a.prevIsScrolling = !0 === e.isScrolling),
                                    (a.prevRowCount = e.rowCount),
                                    (a.prevRowHeight = e.rowHeight),
                                    (a.prevScrollToColumn = e.scrollToColumn),
                                    (a.prevScrollToRow = e.scrollToRow),
                                    (a.scrollbarSize = e.getScrollbarSize()),
                                    void 0 === a.scrollbarSize
                                      ? ((a.scrollbarSizeMeasured = !1),
                                        (a.scrollbarSize = 0))
                                      : (a.scrollbarSizeMeasured = !0),
                                    (r.instanceProps = a),
                                    po({}, r, {}, o, {}, i)
                                  );
                                },
                              },
                              {
                                key: '_getEstimatedColumnSize',
                                value: function (e) {
                                  return 'number' == typeof e.columnWidth
                                    ? e.columnWidth
                                    : e.estimatedColumnSize;
                                },
                              },
                              {
                                key: '_getEstimatedRowSize',
                                value: function (e) {
                                  return 'number' == typeof e.rowHeight
                                    ? e.rowHeight
                                    : e.estimatedRowSize;
                                },
                              },
                              {
                                key: '_getScrollToPositionStateUpdate',
                                value: function (e) {
                                  var t = e.prevState,
                                    n = e.scrollLeft,
                                    r = e.scrollTop,
                                    o = { scrollPositionChangeReason: mo };
                                  return (
                                    'number' == typeof n &&
                                      n >= 0 &&
                                      ((o.scrollDirectionHorizontal =
                                        n > t.scrollLeft ? 1 : -1),
                                      (o.scrollLeft = n)),
                                    'number' == typeof r &&
                                      r >= 0 &&
                                      ((o.scrollDirectionVertical =
                                        r > t.scrollTop ? 1 : -1),
                                      (o.scrollTop = r)),
                                    ('number' == typeof n &&
                                      n >= 0 &&
                                      n !== t.scrollLeft) ||
                                    ('number' == typeof r &&
                                      r >= 0 &&
                                      r !== t.scrollTop)
                                      ? o
                                      : {}
                                  );
                                },
                              },
                              {
                                key: '_wrapSizeGetter',
                                value: function (e) {
                                  return 'function' == typeof e
                                    ? e
                                    : function () {
                                        return e;
                                      };
                                },
                              },
                              {
                                key: '_getCalculatedScrollLeft',
                                value: function (e, t) {
                                  var n = e.columnCount,
                                    r = e.height,
                                    o = e.scrollToAlignment,
                                    i = e.scrollToColumn,
                                    a = e.width,
                                    l = t.scrollLeft,
                                    s = t.instanceProps;
                                  if (n > 0) {
                                    var c = n - 1,
                                      u = i < 0 ? c : Math.min(c, i),
                                      d =
                                        s.rowSizeAndPositionManager.getTotalSize(),
                                      f =
                                        s.scrollbarSizeMeasured && d > r
                                          ? s.scrollbarSize
                                          : 0;
                                    return s.columnSizeAndPositionManager.getUpdatedOffsetForIndex(
                                      {
                                        align: o,
                                        containerSize: a - f,
                                        currentOffset: l,
                                        targetIndex: u,
                                      }
                                    );
                                  }
                                  return 0;
                                },
                              },
                              {
                                key: '_getScrollLeftForScrollToColumnStateUpdate',
                                value: function (e, t) {
                                  var r = t.scrollLeft,
                                    o = n._getCalculatedScrollLeft(e, t);
                                  return 'number' == typeof o &&
                                    o >= 0 &&
                                    r !== o
                                    ? n._getScrollToPositionStateUpdate({
                                        prevState: t,
                                        scrollLeft: o,
                                        scrollTop: -1,
                                      })
                                    : {};
                                },
                              },
                              {
                                key: '_getCalculatedScrollTop',
                                value: function (e, t) {
                                  var n = e.height,
                                    r = e.rowCount,
                                    o = e.scrollToAlignment,
                                    i = e.scrollToRow,
                                    a = e.width,
                                    l = t.scrollTop,
                                    s = t.instanceProps;
                                  if (r > 0) {
                                    var c = r - 1,
                                      u = i < 0 ? c : Math.min(c, i),
                                      d =
                                        s.columnSizeAndPositionManager.getTotalSize(),
                                      f =
                                        s.scrollbarSizeMeasured && d > a
                                          ? s.scrollbarSize
                                          : 0;
                                    return s.rowSizeAndPositionManager.getUpdatedOffsetForIndex(
                                      {
                                        align: o,
                                        containerSize: n - f,
                                        currentOffset: l,
                                        targetIndex: u,
                                      }
                                    );
                                  }
                                  return 0;
                                },
                              },
                              {
                                key: '_getScrollTopForScrollToRowStateUpdate',
                                value: function (e, t) {
                                  var r = t.scrollTop,
                                    o = n._getCalculatedScrollTop(e, t);
                                  return 'number' == typeof o &&
                                    o >= 0 &&
                                    r !== o
                                    ? n._getScrollToPositionStateUpdate({
                                        prevState: t,
                                        scrollLeft: -1,
                                        scrollTop: o,
                                      })
                                    : {};
                                },
                              },
                            ]
                          ),
                          n
                        );
                      })(e.PureComponent)),
                    Gr(oo, 'propTypes', null),
                    io);
                Gr(vo, 'defaultProps', {
                  'aria-label': 'grid',
                  'aria-readonly': !0,
                  autoContainerWidth: !1,
                  autoHeight: !1,
                  autoWidth: !1,
                  cellRangeRenderer: function (e) {
                    for (
                      var t = e.cellCache,
                        n = e.cellRenderer,
                        r = e.columnSizeAndPositionManager,
                        o = e.columnStartIndex,
                        i = e.columnStopIndex,
                        a = e.deferredMeasurementCache,
                        l = e.horizontalOffsetAdjustment,
                        s = e.isScrolling,
                        c = e.isScrollingOptOut,
                        u = e.parent,
                        d = e.rowSizeAndPositionManager,
                        f = e.rowStartIndex,
                        h = e.rowStopIndex,
                        p = e.styleCache,
                        m = e.verticalOffsetAdjustment,
                        v = e.visibleColumnIndices,
                        g = e.visibleRowIndices,
                        y = [],
                        b = r.areOffsetsAdjusted() || d.areOffsetsAdjusted(),
                        w = !s && !b,
                        _ = f;
                      _ <= h;
                      _++
                    )
                      for (
                        var S = d.getSizeAndPositionOfCell(_), x = o;
                        x <= i;
                        x++
                      ) {
                        var C = r.getSizeAndPositionOfCell(x),
                          O =
                            x >= v.start &&
                            x <= v.stop &&
                            _ >= g.start &&
                            _ <= g.stop,
                          R = ''.concat(_, '-').concat(x),
                          T = void 0;
                        w && p[R]
                          ? (T = p[R])
                          : a && !a.has(_, x)
                            ? (T = {
                                height: 'auto',
                                left: 0,
                                position: 'absolute',
                                top: 0,
                                width: 'auto',
                              })
                            : ((T = {
                                height: S.size,
                                left: C.offset + l,
                                position: 'absolute',
                                top: S.offset + m,
                                width: C.size,
                              }),
                              (p[R] = T));
                        var P = {
                            columnIndex: x,
                            isScrolling: s,
                            isVisible: O,
                            key: R,
                            parent: u,
                            rowIndex: _,
                            style: T,
                          },
                          z = void 0;
                        (!c && !s) || l || m
                          ? (z = n(P))
                          : (t[R] || (t[R] = n(P)), (z = t[R])),
                          null != z && !1 !== z && y.push(z);
                      }
                    return y;
                  },
                  containerRole: 'rowgroup',
                  containerStyle: {},
                  estimatedColumnSize: 100,
                  estimatedRowSize: 30,
                  getScrollbarSize: ro,
                  noContentRenderer: function () {
                    return null;
                  },
                  onScroll: function () {},
                  onScrollbarPresenceChange: function () {},
                  onSectionRendered: function () {},
                  overscanColumnCount: 0,
                  overscanIndicesGetter: function (e) {
                    var t = e.cellCount,
                      n = e.overscanCellsCount,
                      r = e.scrollDirection,
                      o = e.startIndex,
                      i = e.stopIndex;
                    return 1 === r
                      ? {
                          overscanStartIndex: Math.max(0, o),
                          overscanStopIndex: Math.min(t - 1, i + n),
                        }
                      : {
                          overscanStartIndex: Math.max(0, o - n),
                          overscanStopIndex: Math.min(t - 1, i),
                        };
                  },
                  overscanRowCount: 10,
                  role: 'grid',
                  scrollingResetTimeInterval: 150,
                  scrollToAlignment: 'auto',
                  scrollToColumn: -1,
                  scrollToRow: -1,
                  style: {},
                  tabIndex: 0,
                  isScrollingOptOut: !1,
                }),
                  Vr(vo);
                const go = vo;
                function yo(e) {
                  var t = e.cellCount,
                    n = e.overscanCellsCount,
                    r = e.scrollDirection,
                    o = e.startIndex,
                    i = e.stopIndex;
                  return (
                    (n = Math.max(1, n)),
                    1 === r
                      ? {
                          overscanStartIndex: Math.max(0, o - 1),
                          overscanStopIndex: Math.min(t - 1, i + n),
                        }
                      : {
                          overscanStartIndex: Math.max(0, o - n),
                          overscanStopIndex: Math.min(t - 1, i + 1),
                        }
                  );
                }
                var bo, wo;
                function _o(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                var So,
                  xo,
                  Co =
                    ((wo = bo =
                      (function (t) {
                        function n() {
                          var e, t;
                          Mr(this, n);
                          for (
                            var r = arguments.length, o = new Array(r), i = 0;
                            i < r;
                            i++
                          )
                            o[i] = arguments[i];
                          return (
                            Gr(
                              Hr(
                                (t = Dr(
                                  this,
                                  (e = Nr(n)).call.apply(e, [this].concat(o))
                                ))
                              ),
                              'state',
                              {
                                scrollToColumn: 0,
                                scrollToRow: 0,
                                instanceProps: {
                                  prevScrollToColumn: 0,
                                  prevScrollToRow: 0,
                                },
                              }
                            ),
                            Gr(Hr(t), '_columnStartIndex', 0),
                            Gr(Hr(t), '_columnStopIndex', 0),
                            Gr(Hr(t), '_rowStartIndex', 0),
                            Gr(Hr(t), '_rowStopIndex', 0),
                            Gr(Hr(t), '_onKeyDown', function (e) {
                              var n = t.props,
                                r = n.columnCount,
                                o = n.disabled,
                                i = n.mode,
                                a = n.rowCount;
                              if (!o) {
                                var l = t._getScrollState(),
                                  s = l.scrollToColumn,
                                  c = l.scrollToRow,
                                  u = t._getScrollState(),
                                  d = u.scrollToColumn,
                                  f = u.scrollToRow;
                                switch (e.key) {
                                  case 'ArrowDown':
                                    f =
                                      'cells' === i
                                        ? Math.min(f + 1, a - 1)
                                        : Math.min(t._rowStopIndex + 1, a - 1);
                                    break;
                                  case 'ArrowLeft':
                                    d =
                                      'cells' === i
                                        ? Math.max(d - 1, 0)
                                        : Math.max(t._columnStartIndex - 1, 0);
                                    break;
                                  case 'ArrowRight':
                                    d =
                                      'cells' === i
                                        ? Math.min(d + 1, r - 1)
                                        : Math.min(
                                            t._columnStopIndex + 1,
                                            r - 1
                                          );
                                    break;
                                  case 'ArrowUp':
                                    f =
                                      'cells' === i
                                        ? Math.max(f - 1, 0)
                                        : Math.max(t._rowStartIndex - 1, 0);
                                }
                                (d === s && f === c) ||
                                  (e.preventDefault(),
                                  t._updateScrollState({
                                    scrollToColumn: d,
                                    scrollToRow: f,
                                  }));
                              }
                            }),
                            Gr(Hr(t), '_onSectionRendered', function (e) {
                              var n = e.columnStartIndex,
                                r = e.columnStopIndex,
                                o = e.rowStartIndex,
                                i = e.rowStopIndex;
                              (t._columnStartIndex = n),
                                (t._columnStopIndex = r),
                                (t._rowStartIndex = o),
                                (t._rowStopIndex = i);
                            }),
                            t
                          );
                        }
                        return (
                          Wr(n, t),
                          Lr(
                            n,
                            [
                              {
                                key: 'setScrollIndexes',
                                value: function (e) {
                                  var t = e.scrollToColumn,
                                    n = e.scrollToRow;
                                  this.setState({
                                    scrollToRow: n,
                                    scrollToColumn: t,
                                  });
                                },
                              },
                              {
                                key: 'render',
                                value: function () {
                                  var t = this.props,
                                    n = t.className,
                                    r = t.children,
                                    o = this._getScrollState(),
                                    i = o.scrollToColumn,
                                    a = o.scrollToRow;
                                  return e.createElement(
                                    'div',
                                    {
                                      className: n,
                                      onKeyDown: this._onKeyDown,
                                    },
                                    r({
                                      onSectionRendered:
                                        this._onSectionRendered,
                                      scrollToColumn: i,
                                      scrollToRow: a,
                                    })
                                  );
                                },
                              },
                              {
                                key: '_getScrollState',
                                value: function () {
                                  return this.props.isControlled
                                    ? this.props
                                    : this.state;
                                },
                              },
                              {
                                key: '_updateScrollState',
                                value: function (e) {
                                  var t = e.scrollToColumn,
                                    n = e.scrollToRow,
                                    r = this.props,
                                    o = r.isControlled,
                                    i = r.onScrollToChange;
                                  'function' == typeof i &&
                                    i({ scrollToColumn: t, scrollToRow: n }),
                                    o ||
                                      this.setState({
                                        scrollToColumn: t,
                                        scrollToRow: n,
                                      });
                                },
                              },
                            ],
                            [
                              {
                                key: 'getDerivedStateFromProps',
                                value: function (e, t) {
                                  return e.isControlled
                                    ? {}
                                    : e.scrollToColumn !==
                                          t.instanceProps.prevScrollToColumn ||
                                        e.scrollToRow !==
                                          t.instanceProps.prevScrollToRow
                                      ? (function (e) {
                                          for (
                                            var t = 1;
                                            t < arguments.length;
                                            t++
                                          ) {
                                            var n =
                                              null != arguments[t]
                                                ? arguments[t]
                                                : {};
                                            t % 2
                                              ? _o(n, !0).forEach(function (t) {
                                                  Gr(e, t, n[t]);
                                                })
                                              : Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(
                                                    e,
                                                    Object.getOwnPropertyDescriptors(
                                                      n
                                                    )
                                                  )
                                                : _o(n).forEach(function (t) {
                                                    Object.defineProperty(
                                                      e,
                                                      t,
                                                      Object.getOwnPropertyDescriptor(
                                                        n,
                                                        t
                                                      )
                                                    );
                                                  });
                                          }
                                          return e;
                                        })({}, t, {
                                          scrollToColumn: e.scrollToColumn,
                                          scrollToRow: e.scrollToRow,
                                          instanceProps: {
                                            prevScrollToColumn:
                                              e.scrollToColumn,
                                            prevScrollToRow: e.scrollToRow,
                                          },
                                        })
                                      : {};
                                },
                              },
                            ]
                          ),
                          n
                        );
                      })(e.PureComponent)),
                    Gr(bo, 'propTypes', null),
                    wo);
                function Oo(e, t) {
                  var r,
                    o =
                      void 0 !==
                        (r =
                          void 0 !== t
                            ? t
                            : 'undefined' != typeof window
                              ? window
                              : 'undefined' != typeof self
                                ? self
                                : n.g).document && r.document.attachEvent;
                  if (!o) {
                    var i = (function () {
                        var e =
                          r.requestAnimationFrame ||
                          r.mozRequestAnimationFrame ||
                          r.webkitRequestAnimationFrame ||
                          function (e) {
                            return r.setTimeout(e, 20);
                          };
                        return function (t) {
                          return e(t);
                        };
                      })(),
                      a = (function () {
                        var e =
                          r.cancelAnimationFrame ||
                          r.mozCancelAnimationFrame ||
                          r.webkitCancelAnimationFrame ||
                          r.clearTimeout;
                        return function (t) {
                          return e(t);
                        };
                      })(),
                      l = function (e) {
                        var t = e.__resizeTriggers__,
                          n = t.firstElementChild,
                          r = t.lastElementChild,
                          o = n.firstElementChild;
                        (r.scrollLeft = r.scrollWidth),
                          (r.scrollTop = r.scrollHeight),
                          (o.style.width = n.offsetWidth + 1 + 'px'),
                          (o.style.height = n.offsetHeight + 1 + 'px'),
                          (n.scrollLeft = n.scrollWidth),
                          (n.scrollTop = n.scrollHeight);
                      },
                      s = function (e) {
                        if (
                          !(
                            e.target.className &&
                            'function' == typeof e.target.className.indexOf &&
                            e.target.className.indexOf('contract-trigger') <
                              0 &&
                            e.target.className.indexOf('expand-trigger') < 0
                          )
                        ) {
                          var t = this;
                          l(this),
                            this.__resizeRAF__ && a(this.__resizeRAF__),
                            (this.__resizeRAF__ = i(function () {
                              (function (e) {
                                return (
                                  e.offsetWidth != e.__resizeLast__.width ||
                                  e.offsetHeight != e.__resizeLast__.height
                                );
                              })(t) &&
                                ((t.__resizeLast__.width = t.offsetWidth),
                                (t.__resizeLast__.height = t.offsetHeight),
                                t.__resizeListeners__.forEach(function (n) {
                                  n.call(t, e);
                                }));
                            }));
                        }
                      },
                      c = !1,
                      u = '',
                      d = 'animationstart',
                      f = 'Webkit Moz O ms'.split(' '),
                      h =
                        'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(
                          ' '
                        ),
                      p = r.document.createElement('fakeelement');
                    if (
                      (void 0 !== p.style.animationName && (c = !0), !1 === c)
                    )
                      for (var m = 0; m < f.length; m++)
                        if (void 0 !== p.style[f[m] + 'AnimationName']) {
                          (u = '-' + f[m].toLowerCase() + '-'),
                            (d = h[m]),
                            (c = !0);
                          break;
                        }
                    var v = 'resizeanim',
                      g =
                        '@' +
                        u +
                        'keyframes ' +
                        v +
                        ' { from { opacity: 0; } to { opacity: 0; } } ',
                      y = u + 'animation: 1ms ' + v + '; ';
                  }
                  return {
                    addResizeListener: function (t, n) {
                      if (o) t.attachEvent('onresize', n);
                      else {
                        if (!t.__resizeTriggers__) {
                          var i = t.ownerDocument,
                            a = r.getComputedStyle(t);
                          a &&
                            'static' == a.position &&
                            (t.style.position = 'relative'),
                            (function (t) {
                              if (!t.getElementById('detectElementResize')) {
                                var n =
                                    (g || '') +
                                    '.resize-triggers { ' +
                                    (y || '') +
                                    'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                                  r =
                                    t.head || t.getElementsByTagName('head')[0],
                                  o = t.createElement('style');
                                (o.id = 'detectElementResize'),
                                  (o.type = 'text/css'),
                                  null != e && o.setAttribute('nonce', e),
                                  o.styleSheet
                                    ? (o.styleSheet.cssText = n)
                                    : o.appendChild(t.createTextNode(n)),
                                  r.appendChild(o);
                              }
                            })(i),
                            (t.__resizeLast__ = {}),
                            (t.__resizeListeners__ = []),
                            ((t.__resizeTriggers__ =
                              i.createElement('div')).className =
                              'resize-triggers');
                          var c =
                            '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';
                          if (window.trustedTypes) {
                            var u = trustedTypes.createPolicy(
                              'react-virtualized-auto-sizer',
                              {
                                createHTML: function () {
                                  return c;
                                },
                              }
                            );
                            t.__resizeTriggers__.innerHTML = u.createHTML('');
                          } else t.__resizeTriggers__.innerHTML = c;
                          t.appendChild(t.__resizeTriggers__),
                            l(t),
                            t.addEventListener('scroll', s, !0),
                            d &&
                              ((t.__resizeTriggers__.__animationListener__ =
                                function (e) {
                                  e.animationName == v && l(t);
                                }),
                              t.__resizeTriggers__.addEventListener(
                                d,
                                t.__resizeTriggers__.__animationListener__
                              ));
                        }
                        t.__resizeListeners__.push(n);
                      }
                    },
                    removeResizeListener: function (e, t) {
                      if (o) e.detachEvent('onresize', t);
                      else if (
                        (e.__resizeListeners__.splice(
                          e.__resizeListeners__.indexOf(t),
                          1
                        ),
                        !e.__resizeListeners__.length)
                      ) {
                        e.removeEventListener('scroll', s, !0),
                          e.__resizeTriggers__.__animationListener__ &&
                            (e.__resizeTriggers__.removeEventListener(
                              d,
                              e.__resizeTriggers__.__animationListener__
                            ),
                            (e.__resizeTriggers__.__animationListener__ =
                              null));
                        try {
                          e.__resizeTriggers__ = !e.removeChild(
                            e.__resizeTriggers__
                          );
                        } catch (e) {}
                      }
                    },
                  };
                }
                function Ro(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                function To(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? Ro(n, !0).forEach(function (t) {
                          Gr(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : Ro(n).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                }
                Gr(Co, 'defaultProps', {
                  disabled: !1,
                  isControlled: !1,
                  mode: 'edges',
                  scrollToColumn: 0,
                  scrollToRow: 0,
                }),
                  Vr(Co);
                var Po =
                  ((xo = So =
                    (function (t) {
                      function n() {
                        var e, t;
                        Mr(this, n);
                        for (
                          var r = arguments.length, o = new Array(r), i = 0;
                          i < r;
                          i++
                        )
                          o[i] = arguments[i];
                        return (
                          Gr(
                            Hr(
                              (t = Dr(
                                this,
                                (e = Nr(n)).call.apply(e, [this].concat(o))
                              ))
                            ),
                            'state',
                            {
                              height: t.props.defaultHeight || 0,
                              width: t.props.defaultWidth || 0,
                            }
                          ),
                          Gr(Hr(t), '_parentNode', void 0),
                          Gr(Hr(t), '_autoSizer', void 0),
                          Gr(Hr(t), '_window', void 0),
                          Gr(Hr(t), '_detectElementResize', void 0),
                          Gr(Hr(t), '_onResize', function () {
                            var e = t.props,
                              n = e.disableHeight,
                              r = e.disableWidth,
                              o = e.onResize;
                            if (t._parentNode) {
                              var i = t._parentNode.offsetHeight || 0,
                                a = t._parentNode.offsetWidth || 0,
                                l =
                                  (t._window || window).getComputedStyle(
                                    t._parentNode
                                  ) || {},
                                s = parseInt(l.paddingLeft, 10) || 0,
                                c = parseInt(l.paddingRight, 10) || 0,
                                u = parseInt(l.paddingTop, 10) || 0,
                                d = parseInt(l.paddingBottom, 10) || 0,
                                f = i - u - d,
                                h = a - s - c;
                              ((!n && t.state.height !== f) ||
                                (!r && t.state.width !== h)) &&
                                (t.setState({
                                  height: i - u - d,
                                  width: a - s - c,
                                }),
                                o({ height: i, width: a }));
                            }
                          }),
                          Gr(Hr(t), '_setRef', function (e) {
                            t._autoSizer = e;
                          }),
                          t
                        );
                      }
                      return (
                        Wr(n, t),
                        Lr(n, [
                          {
                            key: 'componentDidMount',
                            value: function () {
                              var e = this.props.nonce;
                              this._autoSizer &&
                                this._autoSizer.parentNode &&
                                this._autoSizer.parentNode.ownerDocument &&
                                this._autoSizer.parentNode.ownerDocument
                                  .defaultView &&
                                this._autoSizer.parentNode instanceof
                                  this._autoSizer.parentNode.ownerDocument
                                    .defaultView.HTMLElement &&
                                ((this._parentNode =
                                  this._autoSizer.parentNode),
                                (this._window =
                                  this._autoSizer.parentNode.ownerDocument.defaultView),
                                (this._detectElementResize = Oo(
                                  e,
                                  this._window
                                )),
                                this._detectElementResize.addResizeListener(
                                  this._parentNode,
                                  this._onResize
                                ),
                                this._onResize());
                            },
                          },
                          {
                            key: 'componentWillUnmount',
                            value: function () {
                              this._detectElementResize &&
                                this._parentNode &&
                                this._detectElementResize.removeResizeListener(
                                  this._parentNode,
                                  this._onResize
                                );
                            },
                          },
                          {
                            key: 'render',
                            value: function () {
                              var t = this.props,
                                n = t.children,
                                r = t.className,
                                o = t.disableHeight,
                                i = t.disableWidth,
                                a = t.style,
                                l = this.state,
                                s = l.height,
                                c = l.width,
                                u = { overflow: 'visible' },
                                d = {};
                              return (
                                o || ((u.height = 0), (d.height = s)),
                                i || ((u.width = 0), (d.width = c)),
                                e.createElement(
                                  'div',
                                  {
                                    className: r,
                                    ref: this._setRef,
                                    style: To({}, u, {}, a),
                                  },
                                  n(d)
                                )
                              );
                            },
                          },
                        ]),
                        n
                      );
                    })(e.Component)),
                  Gr(So, 'propTypes', null),
                  xo);
                Gr(Po, 'defaultProps', {
                  onResize: function () {},
                  disableHeight: !1,
                  disableWidth: !1,
                  style: {},
                });
                var zo,
                  ko,
                  Io =
                    ((ko = zo =
                      (function (e) {
                        function t() {
                          var e, n;
                          Mr(this, t);
                          for (
                            var r = arguments.length, o = new Array(r), i = 0;
                            i < r;
                            i++
                          )
                            o[i] = arguments[i];
                          return (
                            Gr(
                              Hr(
                                (n = Dr(
                                  this,
                                  (e = Nr(t)).call.apply(e, [this].concat(o))
                                ))
                              ),
                              '_child',
                              void 0
                            ),
                            Gr(Hr(n), '_measure', function () {
                              var e = n.props,
                                t = e.cache,
                                r = e.columnIndex,
                                o = void 0 === r ? 0 : r,
                                i = e.parent,
                                a = e.rowIndex,
                                l = void 0 === a ? n.props.index || 0 : a,
                                s = n._getCellMeasurements(),
                                c = s.height,
                                u = s.width;
                              (c === t.getHeight(l, o) &&
                                u === t.getWidth(l, o)) ||
                                (t.set(l, o, u, c),
                                i &&
                                  'function' == typeof i.recomputeGridSize &&
                                  i.recomputeGridSize({
                                    columnIndex: o,
                                    rowIndex: l,
                                  }));
                            }),
                            Gr(Hr(n), '_registerChild', function (e) {
                              !e ||
                                e instanceof Element ||
                                console.warn(
                                  'CellMeasurer registerChild expects to be passed Element or null'
                                ),
                                (n._child = e),
                                e && n._maybeMeasureCell();
                            }),
                            n
                          );
                        }
                        return (
                          Wr(t, e),
                          Lr(t, [
                            {
                              key: 'componentDidMount',
                              value: function () {
                                this._maybeMeasureCell();
                              },
                            },
                            {
                              key: 'componentDidUpdate',
                              value: function () {
                                this._maybeMeasureCell();
                              },
                            },
                            {
                              key: 'render',
                              value: function () {
                                var e = this.props.children;
                                return 'function' == typeof e
                                  ? e({
                                      measure: this._measure,
                                      registerChild: this._registerChild,
                                    })
                                  : e;
                              },
                            },
                            {
                              key: '_getCellMeasurements',
                              value: function () {
                                var e = this.props.cache,
                                  t = this._child || (0, r.findDOMNode)(this);
                                if (
                                  t &&
                                  t.ownerDocument &&
                                  t.ownerDocument.defaultView &&
                                  t instanceof
                                    t.ownerDocument.defaultView.HTMLElement
                                ) {
                                  var n = t.style.width,
                                    o = t.style.height;
                                  e.hasFixedWidth() || (t.style.width = 'auto'),
                                    e.hasFixedHeight() ||
                                      (t.style.height = 'auto');
                                  var i = Math.ceil(t.offsetHeight),
                                    a = Math.ceil(t.offsetWidth);
                                  return (
                                    n && (t.style.width = n),
                                    o && (t.style.height = o),
                                    { height: i, width: a }
                                  );
                                }
                                return { height: 0, width: 0 };
                              },
                            },
                            {
                              key: '_maybeMeasureCell',
                              value: function () {
                                var e = this.props,
                                  t = e.cache,
                                  n = e.columnIndex,
                                  r = void 0 === n ? 0 : n,
                                  o = e.parent,
                                  i = e.rowIndex,
                                  a = void 0 === i ? this.props.index || 0 : i;
                                if (!t.has(a, r)) {
                                  var l = this._getCellMeasurements(),
                                    s = l.height,
                                    c = l.width;
                                  t.set(a, r, c, s),
                                    o &&
                                      'function' ==
                                        typeof o.invalidateCellSizeAfterRender &&
                                      o.invalidateCellSizeAfterRender({
                                        columnIndex: r,
                                        rowIndex: a,
                                      });
                                }
                              },
                            },
                          ]),
                          t
                        );
                      })(e.PureComponent)),
                    Gr(zo, 'propTypes', null),
                    ko);
                Gr(Io, '__internalCellMeasurerFlag', !1);
                var Eo = (function () {
                  function e() {
                    var t = this,
                      n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                    Mr(this, e),
                      Gr(this, '_cellHeightCache', {}),
                      Gr(this, '_cellWidthCache', {}),
                      Gr(this, '_columnWidthCache', {}),
                      Gr(this, '_rowHeightCache', {}),
                      Gr(this, '_defaultHeight', void 0),
                      Gr(this, '_defaultWidth', void 0),
                      Gr(this, '_minHeight', void 0),
                      Gr(this, '_minWidth', void 0),
                      Gr(this, '_keyMapper', void 0),
                      Gr(this, '_hasFixedHeight', void 0),
                      Gr(this, '_hasFixedWidth', void 0),
                      Gr(this, '_columnCount', 0),
                      Gr(this, '_rowCount', 0),
                      Gr(this, 'columnWidth', function (e) {
                        var n = e.index,
                          r = t._keyMapper(0, n);
                        return void 0 !== t._columnWidthCache[r]
                          ? t._columnWidthCache[r]
                          : t._defaultWidth;
                      }),
                      Gr(this, 'rowHeight', function (e) {
                        var n = e.index,
                          r = t._keyMapper(n, 0);
                        return void 0 !== t._rowHeightCache[r]
                          ? t._rowHeightCache[r]
                          : t._defaultHeight;
                      });
                    var r = n.defaultHeight,
                      o = n.defaultWidth,
                      i = n.fixedHeight,
                      a = n.fixedWidth,
                      l = n.keyMapper,
                      s = n.minHeight,
                      c = n.minWidth;
                    (this._hasFixedHeight = !0 === i),
                      (this._hasFixedWidth = !0 === a),
                      (this._minHeight = s || 0),
                      (this._minWidth = c || 0),
                      (this._keyMapper = l || Mo),
                      (this._defaultHeight = Math.max(
                        this._minHeight,
                        'number' == typeof r ? r : 30
                      )),
                      (this._defaultWidth = Math.max(
                        this._minWidth,
                        'number' == typeof o ? o : 100
                      ));
                  }
                  return (
                    Lr(e, [
                      {
                        key: 'clear',
                        value: function (e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0,
                            n = this._keyMapper(e, t);
                          delete this._cellHeightCache[n],
                            delete this._cellWidthCache[n],
                            this._updateCachedColumnAndRowSizes(e, t);
                        },
                      },
                      {
                        key: 'clearAll',
                        value: function () {
                          (this._cellHeightCache = {}),
                            (this._cellWidthCache = {}),
                            (this._columnWidthCache = {}),
                            (this._rowHeightCache = {}),
                            (this._rowCount = 0),
                            (this._columnCount = 0);
                        },
                      },
                      {
                        key: 'hasFixedHeight',
                        value: function () {
                          return this._hasFixedHeight;
                        },
                      },
                      {
                        key: 'hasFixedWidth',
                        value: function () {
                          return this._hasFixedWidth;
                        },
                      },
                      {
                        key: 'getHeight',
                        value: function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0;
                          if (this._hasFixedHeight) return this._defaultHeight;
                          var n = this._keyMapper(e, t);
                          return void 0 !== this._cellHeightCache[n]
                            ? Math.max(
                                this._minHeight,
                                this._cellHeightCache[n]
                              )
                            : this._defaultHeight;
                        },
                      },
                      {
                        key: 'getWidth',
                        value: function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0;
                          if (this._hasFixedWidth) return this._defaultWidth;
                          var n = this._keyMapper(e, t);
                          return void 0 !== this._cellWidthCache[n]
                            ? Math.max(this._minWidth, this._cellWidthCache[n])
                            : this._defaultWidth;
                        },
                      },
                      {
                        key: 'has',
                        value: function (e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0,
                            n = this._keyMapper(e, t);
                          return void 0 !== this._cellHeightCache[n];
                        },
                      },
                      {
                        key: 'set',
                        value: function (e, t, n, r) {
                          var o = this._keyMapper(e, t);
                          t >= this._columnCount && (this._columnCount = t + 1),
                            e >= this._rowCount && (this._rowCount = e + 1),
                            (this._cellHeightCache[o] = r),
                            (this._cellWidthCache[o] = n),
                            this._updateCachedColumnAndRowSizes(e, t);
                        },
                      },
                      {
                        key: '_updateCachedColumnAndRowSizes',
                        value: function (e, t) {
                          if (!this._hasFixedWidth) {
                            for (var n = 0, r = 0; r < this._rowCount; r++)
                              n = Math.max(n, this.getWidth(r, t));
                            var o = this._keyMapper(0, t);
                            this._columnWidthCache[o] = n;
                          }
                          if (!this._hasFixedHeight) {
                            for (var i = 0, a = 0; a < this._columnCount; a++)
                              i = Math.max(i, this.getHeight(e, a));
                            var l = this._keyMapper(e, 0);
                            this._rowHeightCache[l] = i;
                          }
                        },
                      },
                      {
                        key: 'defaultHeight',
                        get: function () {
                          return this._defaultHeight;
                        },
                      },
                      {
                        key: 'defaultWidth',
                        get: function () {
                          return this._defaultWidth;
                        },
                      },
                    ]),
                    e
                  );
                })();
                function Mo(e, t) {
                  return ''.concat(e, '-').concat(t);
                }
                function Ao(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                function Lo(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? Ao(n, !0).forEach(function (t) {
                          Gr(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : Ao(n).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                }
                var jo = 'observed',
                  Ho = 'requested',
                  Do = (function (t) {
                    function n() {
                      var e, t;
                      Mr(this, n);
                      for (
                        var r = arguments.length, o = new Array(r), i = 0;
                        i < r;
                        i++
                      )
                        o[i] = arguments[i];
                      return (
                        Gr(
                          Hr(
                            (t = Dr(
                              this,
                              (e = Nr(n)).call.apply(e, [this].concat(o))
                            ))
                          ),
                          'state',
                          { isScrolling: !1, scrollLeft: 0, scrollTop: 0 }
                        ),
                        Gr(
                          Hr(t),
                          '_calculateSizeAndPositionDataOnNextUpdate',
                          !1
                        ),
                        Gr(Hr(t), '_onSectionRenderedMemoizer', $r()),
                        Gr(Hr(t), '_onScrollMemoizer', $r(!1)),
                        Gr(
                          Hr(t),
                          '_invokeOnSectionRenderedHelper',
                          function () {
                            var e = t.props,
                              n = e.cellLayoutManager,
                              r = e.onSectionRendered;
                            t._onSectionRenderedMemoizer({
                              callback: r,
                              indices: { indices: n.getLastRenderedIndices() },
                            });
                          }
                        ),
                        Gr(Hr(t), '_setScrollingContainerRef', function (e) {
                          t._scrollingContainer = e;
                        }),
                        Gr(
                          Hr(t),
                          '_updateScrollPositionForScrollToCell',
                          function () {
                            var e = t.props,
                              n = e.cellLayoutManager,
                              r = e.height,
                              o = e.scrollToAlignment,
                              i = e.scrollToCell,
                              a = e.width,
                              l = t.state,
                              s = l.scrollLeft,
                              c = l.scrollTop;
                            if (i >= 0) {
                              var u = n.getScrollPositionForCell({
                                align: o,
                                cellIndex: i,
                                height: r,
                                scrollLeft: s,
                                scrollTop: c,
                                width: a,
                              });
                              (u.scrollLeft === s && u.scrollTop === c) ||
                                t._setScrollPosition(u);
                            }
                          }
                        ),
                        Gr(Hr(t), '_onScroll', function (e) {
                          if (e.target === t._scrollingContainer) {
                            t._enablePointerEventsAfterDelay();
                            var n = t.props,
                              r = n.cellLayoutManager,
                              o = n.height,
                              i = n.isScrollingChange,
                              a = n.width,
                              l = t._scrollbarSize,
                              s = r.getTotalSize(),
                              c = s.height,
                              u = s.width,
                              d = Math.max(
                                0,
                                Math.min(u - a + l, e.target.scrollLeft)
                              ),
                              f = Math.max(
                                0,
                                Math.min(c - o + l, e.target.scrollTop)
                              );
                            if (
                              t.state.scrollLeft !== d ||
                              t.state.scrollTop !== f
                            ) {
                              var h = e.cancelable ? jo : Ho;
                              t.state.isScrolling || i(!0),
                                t.setState({
                                  isScrolling: !0,
                                  scrollLeft: d,
                                  scrollPositionChangeReason: h,
                                  scrollTop: f,
                                });
                            }
                            t._invokeOnScrollMemoizer({
                              scrollLeft: d,
                              scrollTop: f,
                              totalWidth: u,
                              totalHeight: c,
                            });
                          }
                        }),
                        (t._scrollbarSize = ro()),
                        void 0 === t._scrollbarSize
                          ? ((t._scrollbarSizeMeasured = !1),
                            (t._scrollbarSize = 0))
                          : (t._scrollbarSizeMeasured = !0),
                        t
                      );
                    }
                    return (
                      Wr(n, t),
                      Lr(
                        n,
                        [
                          {
                            key: 'recomputeCellSizesAndPositions',
                            value: function () {
                              (this._calculateSizeAndPositionDataOnNextUpdate =
                                !0),
                                this.forceUpdate();
                            },
                          },
                          {
                            key: 'componentDidMount',
                            value: function () {
                              var e = this.props,
                                t = e.cellLayoutManager,
                                n = e.scrollLeft,
                                r = e.scrollToCell,
                                o = e.scrollTop;
                              this._scrollbarSizeMeasured ||
                                ((this._scrollbarSize = ro()),
                                (this._scrollbarSizeMeasured = !0),
                                this.setState({})),
                                r >= 0
                                  ? this._updateScrollPositionForScrollToCell()
                                  : (n >= 0 || o >= 0) &&
                                    this._setScrollPosition({
                                      scrollLeft: n,
                                      scrollTop: o,
                                    }),
                                this._invokeOnSectionRenderedHelper();
                              var i = t.getTotalSize(),
                                a = i.height,
                                l = i.width;
                              this._invokeOnScrollMemoizer({
                                scrollLeft: n || 0,
                                scrollTop: o || 0,
                                totalHeight: a,
                                totalWidth: l,
                              });
                            },
                          },
                          {
                            key: 'componentDidUpdate',
                            value: function (e, t) {
                              var n = this.props,
                                r = n.height,
                                o = n.scrollToAlignment,
                                i = n.scrollToCell,
                                a = n.width,
                                l = this.state,
                                s = l.scrollLeft,
                                c = l.scrollPositionChangeReason,
                                u = l.scrollTop;
                              c === Ho &&
                                (s >= 0 &&
                                  s !== t.scrollLeft &&
                                  s !== this._scrollingContainer.scrollLeft &&
                                  (this._scrollingContainer.scrollLeft = s),
                                u >= 0 &&
                                  u !== t.scrollTop &&
                                  u !== this._scrollingContainer.scrollTop &&
                                  (this._scrollingContainer.scrollTop = u)),
                                (r === e.height &&
                                  o === e.scrollToAlignment &&
                                  i === e.scrollToCell &&
                                  a === e.width) ||
                                  this._updateScrollPositionForScrollToCell(),
                                this._invokeOnSectionRenderedHelper();
                            },
                          },
                          {
                            key: 'componentWillUnmount',
                            value: function () {
                              this._disablePointerEventsTimeoutId &&
                                clearTimeout(
                                  this._disablePointerEventsTimeoutId
                                );
                            },
                          },
                          {
                            key: 'render',
                            value: function () {
                              var t = this.props,
                                n = t.autoHeight,
                                r = t.cellCount,
                                o = t.cellLayoutManager,
                                i = t.className,
                                a = t.height,
                                l = t.horizontalOverscanSize,
                                s = t.id,
                                c = t.noContentRenderer,
                                u = t.style,
                                d = t.verticalOverscanSize,
                                f = t.width,
                                h = this.state,
                                p = h.isScrolling,
                                m = h.scrollLeft,
                                v = h.scrollTop;
                              (this._lastRenderedCellCount !== r ||
                                this._lastRenderedCellLayoutManager !== o ||
                                this
                                  ._calculateSizeAndPositionDataOnNextUpdate) &&
                                ((this._lastRenderedCellCount = r),
                                (this._lastRenderedCellLayoutManager = o),
                                (this._calculateSizeAndPositionDataOnNextUpdate =
                                  !1),
                                o.calculateSizeAndPositionData());
                              var g = o.getTotalSize(),
                                y = g.height,
                                b = g.width,
                                w = Math.max(0, m - l),
                                _ = Math.max(0, v - d),
                                S = Math.min(b, m + f + l),
                                x = Math.min(y, v + a + d),
                                C =
                                  a > 0 && f > 0
                                    ? o.cellRenderers({
                                        height: x - _,
                                        isScrolling: p,
                                        width: S - w,
                                        x: w,
                                        y: _,
                                      })
                                    : [],
                                O = {
                                  boxSizing: 'border-box',
                                  direction: 'ltr',
                                  height: n ? 'auto' : a,
                                  position: 'relative',
                                  WebkitOverflowScrolling: 'touch',
                                  width: f,
                                  willChange: 'transform',
                                },
                                R = y > a ? this._scrollbarSize : 0,
                                T = b > f ? this._scrollbarSize : 0;
                              return (
                                (O.overflowX = b + R <= f ? 'hidden' : 'auto'),
                                (O.overflowY = y + T <= a ? 'hidden' : 'auto'),
                                e.createElement(
                                  'div',
                                  {
                                    ref: this._setScrollingContainerRef,
                                    'aria-label': this.props['aria-label'],
                                    className: Zr(
                                      'ReactVirtualized__Collection',
                                      i
                                    ),
                                    id: s,
                                    onScroll: this._onScroll,
                                    role: 'grid',
                                    style: Lo({}, O, {}, u),
                                    tabIndex: 0,
                                  },
                                  r > 0 &&
                                    e.createElement(
                                      'div',
                                      {
                                        className:
                                          'ReactVirtualized__Collection__innerScrollContainer',
                                        style: {
                                          height: y,
                                          maxHeight: y,
                                          maxWidth: b,
                                          overflow: 'hidden',
                                          pointerEvents: p ? 'none' : '',
                                          width: b,
                                        },
                                      },
                                      C
                                    ),
                                  0 === r && c()
                                )
                              );
                            },
                          },
                          {
                            key: '_enablePointerEventsAfterDelay',
                            value: function () {
                              var e = this;
                              this._disablePointerEventsTimeoutId &&
                                clearTimeout(
                                  this._disablePointerEventsTimeoutId
                                ),
                                (this._disablePointerEventsTimeoutId =
                                  setTimeout(function () {
                                    (0, e.props.isScrollingChange)(!1),
                                      (e._disablePointerEventsTimeoutId = null),
                                      e.setState({ isScrolling: !1 });
                                  }, 150));
                            },
                          },
                          {
                            key: '_invokeOnScrollMemoizer',
                            value: function (e) {
                              var t = this,
                                n = e.scrollLeft,
                                r = e.scrollTop,
                                o = e.totalHeight,
                                i = e.totalWidth;
                              this._onScrollMemoizer({
                                callback: function (e) {
                                  var n = e.scrollLeft,
                                    r = e.scrollTop,
                                    a = t.props,
                                    l = a.height;
                                  (0, a.onScroll)({
                                    clientHeight: l,
                                    clientWidth: a.width,
                                    scrollHeight: o,
                                    scrollLeft: n,
                                    scrollTop: r,
                                    scrollWidth: i,
                                  });
                                },
                                indices: { scrollLeft: n, scrollTop: r },
                              });
                            },
                          },
                          {
                            key: '_setScrollPosition',
                            value: function (e) {
                              var t = e.scrollLeft,
                                n = e.scrollTop,
                                r = { scrollPositionChangeReason: Ho };
                              t >= 0 && (r.scrollLeft = t),
                                n >= 0 && (r.scrollTop = n),
                                ((t >= 0 && t !== this.state.scrollLeft) ||
                                  (n >= 0 && n !== this.state.scrollTop)) &&
                                  this.setState(r);
                            },
                          },
                        ],
                        [
                          {
                            key: 'getDerivedStateFromProps',
                            value: function (e, t) {
                              return 0 !== e.cellCount ||
                                (0 === t.scrollLeft && 0 === t.scrollTop)
                                ? e.scrollLeft !== t.scrollLeft ||
                                  e.scrollTop !== t.scrollTop
                                  ? {
                                      scrollLeft:
                                        null != e.scrollLeft
                                          ? e.scrollLeft
                                          : t.scrollLeft,
                                      scrollTop:
                                        null != e.scrollTop
                                          ? e.scrollTop
                                          : t.scrollTop,
                                      scrollPositionChangeReason: Ho,
                                    }
                                  : null
                                : {
                                    scrollLeft: 0,
                                    scrollTop: 0,
                                    scrollPositionChangeReason: Ho,
                                  };
                            },
                          },
                        ]
                      ),
                      n
                    );
                  })(e.PureComponent);
                Gr(Do, 'defaultProps', {
                  'aria-label': 'grid',
                  horizontalOverscanSize: 0,
                  noContentRenderer: function () {
                    return null;
                  },
                  onScroll: function () {
                    return null;
                  },
                  onSectionRendered: function () {
                    return null;
                  },
                  scrollToAlignment: 'auto',
                  scrollToCell: -1,
                  style: {},
                  verticalOverscanSize: 0,
                }),
                  (Do.propTypes = {}),
                  Vr(Do);
                const No = Do;
                var Wo = (function () {
                    function e(t) {
                      var n = t.height,
                        r = t.width,
                        o = t.x,
                        i = t.y;
                      Mr(this, e),
                        (this.height = n),
                        (this.width = r),
                        (this.x = o),
                        (this.y = i),
                        (this._indexMap = {}),
                        (this._indices = []);
                    }
                    return (
                      Lr(e, [
                        {
                          key: 'addCellIndex',
                          value: function (e) {
                            var t = e.index;
                            this._indexMap[t] ||
                              ((this._indexMap[t] = !0), this._indices.push(t));
                          },
                        },
                        {
                          key: 'getCellIndices',
                          value: function () {
                            return this._indices;
                          },
                        },
                        {
                          key: 'toString',
                          value: function () {
                            return ''
                              .concat(this.x, ',')
                              .concat(this.y, ' ')
                              .concat(this.width, 'x')
                              .concat(this.height);
                          },
                        },
                      ]),
                      e
                    );
                  })(),
                  Go = (function () {
                    function e() {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 100;
                      Mr(this, e),
                        (this._sectionSize = t),
                        (this._cellMetadata = []),
                        (this._sections = {});
                    }
                    return (
                      Lr(e, [
                        {
                          key: 'getCellIndices',
                          value: function (e) {
                            var t = e.height,
                              n = e.width,
                              r = e.x,
                              o = e.y,
                              i = {};
                            return (
                              this.getSections({
                                height: t,
                                width: n,
                                x: r,
                                y: o,
                              }).forEach(function (e) {
                                return e.getCellIndices().forEach(function (e) {
                                  i[e] = e;
                                });
                              }),
                              Object.keys(i).map(function (e) {
                                return i[e];
                              })
                            );
                          },
                        },
                        {
                          key: 'getCellMetadata',
                          value: function (e) {
                            var t = e.index;
                            return this._cellMetadata[t];
                          },
                        },
                        {
                          key: 'getSections',
                          value: function (e) {
                            for (
                              var t = e.height,
                                n = e.width,
                                r = e.x,
                                o = e.y,
                                i = Math.floor(r / this._sectionSize),
                                a = Math.floor((r + n - 1) / this._sectionSize),
                                l = Math.floor(o / this._sectionSize),
                                s = Math.floor((o + t - 1) / this._sectionSize),
                                c = [],
                                u = i;
                              u <= a;
                              u++
                            )
                              for (var d = l; d <= s; d++) {
                                var f = ''.concat(u, '.').concat(d);
                                this._sections[f] ||
                                  (this._sections[f] = new Wo({
                                    height: this._sectionSize,
                                    width: this._sectionSize,
                                    x: u * this._sectionSize,
                                    y: d * this._sectionSize,
                                  })),
                                  c.push(this._sections[f]);
                              }
                            return c;
                          },
                        },
                        {
                          key: 'getTotalSectionCount',
                          value: function () {
                            return Object.keys(this._sections).length;
                          },
                        },
                        {
                          key: 'toString',
                          value: function () {
                            var e = this;
                            return Object.keys(this._sections).map(
                              function (t) {
                                return e._sections[t].toString();
                              }
                            );
                          },
                        },
                        {
                          key: 'registerCell',
                          value: function (e) {
                            var t = e.cellMetadatum,
                              n = e.index;
                            (this._cellMetadata[n] = t),
                              this.getSections(t).forEach(function (e) {
                                return e.addCellIndex({ index: n });
                              });
                          },
                        },
                      ]),
                      e
                    );
                  })();
                function Fo(e) {
                  var t = e.align,
                    n = void 0 === t ? 'auto' : t,
                    r = e.cellOffset,
                    o = e.cellSize,
                    i = e.containerSize,
                    a = e.currentOffset,
                    l = r,
                    s = l - i + o;
                  switch (n) {
                    case 'start':
                      return l;
                    case 'end':
                      return s;
                    case 'center':
                      return l - (i - o) / 2;
                    default:
                      return Math.max(s, Math.min(l, a));
                  }
                }
                var Uo = (function (t) {
                  function n(e, t) {
                    var r;
                    return (
                      Mr(this, n),
                      ((r = Dr(this, Nr(n).call(this, e, t)))._cellMetadata =
                        []),
                      (r._lastRenderedCellIndices = []),
                      (r._cellCache = []),
                      (r._isScrollingChange = r._isScrollingChange.bind(Hr(r))),
                      (r._setCollectionViewRef = r._setCollectionViewRef.bind(
                        Hr(r)
                      )),
                      r
                    );
                  }
                  return (
                    Wr(n, t),
                    Lr(n, [
                      {
                        key: 'forceUpdate',
                        value: function () {
                          void 0 !== this._collectionView &&
                            this._collectionView.forceUpdate();
                        },
                      },
                      {
                        key: 'recomputeCellSizesAndPositions',
                        value: function () {
                          (this._cellCache = []),
                            this._collectionView.recomputeCellSizesAndPositions();
                        },
                      },
                      {
                        key: 'render',
                        value: function () {
                          var t = a({}, this.props);
                          return e.createElement(
                            No,
                            a(
                              {
                                cellLayoutManager: this,
                                isScrollingChange: this._isScrollingChange,
                                ref: this._setCollectionViewRef,
                              },
                              t
                            )
                          );
                        },
                      },
                      {
                        key: 'calculateSizeAndPositionData',
                        value: function () {
                          var e = this.props,
                            t = (function (e) {
                              for (
                                var t = e.cellCount,
                                  n = e.cellSizeAndPositionGetter,
                                  r = [],
                                  o = new Go(e.sectionSize),
                                  i = 0,
                                  a = 0,
                                  l = 0;
                                l < t;
                                l++
                              ) {
                                var s = n({ index: l });
                                if (
                                  null == s.height ||
                                  isNaN(s.height) ||
                                  null == s.width ||
                                  isNaN(s.width) ||
                                  null == s.x ||
                                  isNaN(s.x) ||
                                  null == s.y ||
                                  isNaN(s.y)
                                )
                                  throw Error(
                                    'Invalid metadata returned for cell '
                                      .concat(l, ':\n        x:')
                                      .concat(s.x, ', y:')
                                      .concat(s.y, ', width:')
                                      .concat(s.width, ', height:')
                                      .concat(s.height)
                                  );
                                (i = Math.max(i, s.y + s.height)),
                                  (a = Math.max(a, s.x + s.width)),
                                  (r[l] = s),
                                  o.registerCell({
                                    cellMetadatum: s,
                                    index: l,
                                  });
                              }
                              return {
                                cellMetadata: r,
                                height: i,
                                sectionManager: o,
                                width: a,
                              };
                            })({
                              cellCount: e.cellCount,
                              cellSizeAndPositionGetter:
                                e.cellSizeAndPositionGetter,
                              sectionSize: e.sectionSize,
                            });
                          (this._cellMetadata = t.cellMetadata),
                            (this._sectionManager = t.sectionManager),
                            (this._height = t.height),
                            (this._width = t.width);
                        },
                      },
                      {
                        key: 'getLastRenderedIndices',
                        value: function () {
                          return this._lastRenderedCellIndices;
                        },
                      },
                      {
                        key: 'getScrollPositionForCell',
                        value: function (e) {
                          var t = e.align,
                            n = e.cellIndex,
                            r = e.height,
                            o = e.scrollLeft,
                            i = e.scrollTop,
                            a = e.width,
                            l = this.props.cellCount;
                          if (n >= 0 && n < l) {
                            var s = this._cellMetadata[n];
                            (o = Fo({
                              align: t,
                              cellOffset: s.x,
                              cellSize: s.width,
                              containerSize: a,
                              currentOffset: o,
                              targetIndex: n,
                            })),
                              (i = Fo({
                                align: t,
                                cellOffset: s.y,
                                cellSize: s.height,
                                containerSize: r,
                                currentOffset: i,
                                targetIndex: n,
                              }));
                          }
                          return { scrollLeft: o, scrollTop: i };
                        },
                      },
                      {
                        key: 'getTotalSize',
                        value: function () {
                          return { height: this._height, width: this._width };
                        },
                      },
                      {
                        key: 'cellRenderers',
                        value: function (e) {
                          var t = this,
                            n = e.height,
                            r = e.isScrolling,
                            o = e.width,
                            i = e.x,
                            a = e.y,
                            l = this.props,
                            s = l.cellGroupRenderer,
                            c = l.cellRenderer;
                          return (
                            (this._lastRenderedCellIndices =
                              this._sectionManager.getCellIndices({
                                height: n,
                                width: o,
                                x: i,
                                y: a,
                              })),
                            s({
                              cellCache: this._cellCache,
                              cellRenderer: c,
                              cellSizeAndPositionGetter: function (e) {
                                var n = e.index;
                                return t._sectionManager.getCellMetadata({
                                  index: n,
                                });
                              },
                              indices: this._lastRenderedCellIndices,
                              isScrolling: r,
                            })
                          );
                        },
                      },
                      {
                        key: '_isScrollingChange',
                        value: function (e) {
                          e || (this._cellCache = []);
                        },
                      },
                      {
                        key: '_setCollectionViewRef',
                        value: function (e) {
                          this._collectionView = e;
                        },
                      },
                    ]),
                    n
                  );
                })(e.PureComponent);
                function Bo(e, t) {
                  (null == t || t > e.length) && (t = e.length);
                  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                  return r;
                }
                function Vo(e, t) {
                  if (e) {
                    if ('string' == typeof e) return Bo(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      'Object' === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? Bo(e, t)
                          : void 0
                    );
                  }
                }
                Gr(Uo, 'defaultProps', {
                  'aria-label': 'grid',
                  cellGroupRenderer: function (e) {
                    var t = e.cellCache,
                      n = e.cellRenderer,
                      r = e.cellSizeAndPositionGetter,
                      o = e.indices,
                      i = e.isScrolling;
                    return o
                      .map(function (e) {
                        var o = r({ index: e }),
                          a = {
                            index: e,
                            isScrolling: i,
                            key: e,
                            style: {
                              height: o.height,
                              left: o.x,
                              position: 'absolute',
                              top: o.y,
                              width: o.width,
                            },
                          };
                        return i ? (e in t || (t[e] = n(a)), t[e]) : n(a);
                      })
                      .filter(function (e) {
                        return !!e;
                      });
                  },
                }),
                  (Uo.propTypes = {}),
                  ((function (e) {
                    function t(e, n) {
                      var r;
                      return (
                        Mr(this, t),
                        ((r = Dr(this, Nr(t).call(this, e, n)))._registerChild =
                          r._registerChild.bind(Hr(r))),
                        r
                      );
                    }
                    return (
                      Wr(t, e),
                      Lr(t, [
                        {
                          key: 'componentDidUpdate',
                          value: function (e) {
                            var t = this.props,
                              n = t.columnMaxWidth,
                              r = t.columnMinWidth,
                              o = t.columnCount,
                              i = t.width;
                            (n === e.columnMaxWidth &&
                              r === e.columnMinWidth &&
                              o === e.columnCount &&
                              i === e.width) ||
                              (this._registeredChild &&
                                this._registeredChild.recomputeGridSize());
                          },
                        },
                        {
                          key: 'render',
                          value: function () {
                            var e = this.props,
                              t = e.children,
                              n = e.columnMaxWidth,
                              r = e.columnMinWidth,
                              o = e.columnCount,
                              i = e.width,
                              a = r || 1,
                              l = n ? Math.min(n, i) : i,
                              s = i / o;
                            return (
                              (s = Math.max(a, s)),
                              (s = Math.min(l, s)),
                              (s = Math.floor(s)),
                              t({
                                adjustedWidth: Math.min(i, s * o),
                                columnWidth: s,
                                getColumnWidth: function () {
                                  return s;
                                },
                                registerChild: this._registerChild,
                              })
                            );
                          },
                        },
                        {
                          key: '_registerChild',
                          value: function (e) {
                            if (e && 'function' != typeof e.recomputeGridSize)
                              throw Error(
                                'Unexpected child type registered; only Grid/MultiGrid children are supported.'
                              );
                            (this._registeredChild = e),
                              this._registeredChild &&
                                this._registeredChild.recomputeGridSize();
                          },
                        },
                      ]),
                      t
                    );
                  })(e.PureComponent).propTypes = {});
                var qo = (function (e) {
                  function t(e, n) {
                    var r;
                    return (
                      Mr(this, t),
                      ((r = Dr(
                        this,
                        Nr(t).call(this, e, n)
                      ))._loadMoreRowsMemoizer = $r()),
                      (r._onRowsRendered = r._onRowsRendered.bind(Hr(r))),
                      (r._registerChild = r._registerChild.bind(Hr(r))),
                      r
                    );
                  }
                  return (
                    Wr(t, e),
                    Lr(t, [
                      {
                        key: 'resetLoadMoreRowsCache',
                        value: function (e) {
                          (this._loadMoreRowsMemoizer = $r()),
                            e &&
                              this._doStuff(
                                this._lastRenderedStartIndex,
                                this._lastRenderedStopIndex
                              );
                        },
                      },
                      {
                        key: 'render',
                        value: function () {
                          return (0, this.props.children)({
                            onRowsRendered: this._onRowsRendered,
                            registerChild: this._registerChild,
                          });
                        },
                      },
                      {
                        key: '_loadUnloadedRanges',
                        value: function (e) {
                          var t = this,
                            n = this.props.loadMoreRows;
                          e.forEach(function (e) {
                            var r = n(e);
                            r &&
                              r.then(function () {
                                var n;
                                (n = {
                                  lastRenderedStartIndex:
                                    t._lastRenderedStartIndex,
                                  lastRenderedStopIndex:
                                    t._lastRenderedStopIndex,
                                  startIndex: e.startIndex,
                                  stopIndex: e.stopIndex,
                                }).startIndex > n.lastRenderedStopIndex ||
                                  n.stopIndex < n.lastRenderedStartIndex ||
                                  (t._registeredChild &&
                                    (function (e) {
                                      var t =
                                          arguments.length > 1 &&
                                          void 0 !== arguments[1]
                                            ? arguments[1]
                                            : 0,
                                        n =
                                          'function' ==
                                          typeof e.recomputeGridSize
                                            ? e.recomputeGridSize
                                            : e.recomputeRowHeights;
                                      n ? n.call(e, t) : e.forceUpdate();
                                    })(
                                      t._registeredChild,
                                      t._lastRenderedStartIndex
                                    ));
                              });
                          });
                        },
                      },
                      {
                        key: '_onRowsRendered',
                        value: function (e) {
                          var t = e.startIndex,
                            n = e.stopIndex;
                          (this._lastRenderedStartIndex = t),
                            (this._lastRenderedStopIndex = n),
                            this._doStuff(t, n);
                        },
                      },
                      {
                        key: '_doStuff',
                        value: function (e, t) {
                          var n,
                            r,
                            o = this,
                            i = this.props,
                            a = i.isRowLoaded,
                            l = i.minimumBatchSize,
                            s = i.rowCount,
                            c = i.threshold,
                            u = (function (e) {
                              for (
                                var t = e.isRowLoaded,
                                  n = e.minimumBatchSize,
                                  r = e.rowCount,
                                  o = e.stopIndex,
                                  i = [],
                                  a = null,
                                  l = null,
                                  s = e.startIndex;
                                s <= o;
                                s++
                              )
                                t({ index: s })
                                  ? null !== l &&
                                    (i.push({ startIndex: a, stopIndex: l }),
                                    (a = l = null))
                                  : ((l = s), null === a && (a = s));
                              if (null !== l) {
                                for (
                                  var c = Math.min(
                                      Math.max(l, a + n - 1),
                                      r - 1
                                    ),
                                    u = l + 1;
                                  u <= c && !t({ index: u });
                                  u++
                                )
                                  l = u;
                                i.push({ startIndex: a, stopIndex: l });
                              }
                              if (i.length)
                                for (
                                  var d = i[0];
                                  d.stopIndex - d.startIndex + 1 < n &&
                                  d.startIndex > 0;

                                ) {
                                  var f = d.startIndex - 1;
                                  if (t({ index: f })) break;
                                  d.startIndex = f;
                                }
                              return i;
                            })({
                              isRowLoaded: a,
                              minimumBatchSize: l,
                              rowCount: s,
                              startIndex: Math.max(0, e - c),
                              stopIndex: Math.min(s - 1, t + c),
                            }),
                            d = (n = []).concat.apply(
                              n,
                              (function (e) {
                                if (Array.isArray(e)) return Bo(e);
                              })(
                                (r = u.map(function (e) {
                                  return [e.startIndex, e.stopIndex];
                                }))
                              ) ||
                                (function (e) {
                                  if (
                                    ('undefined' != typeof Symbol &&
                                      null != e[Symbol.iterator]) ||
                                    null != e['@@iterator']
                                  )
                                    return Array.from(e);
                                })(r) ||
                                Vo(r) ||
                                (function () {
                                  throw new TypeError(
                                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                  );
                                })()
                            );
                          this._loadMoreRowsMemoizer({
                            callback: function () {
                              o._loadUnloadedRanges(u);
                            },
                            indices: { squashedUnloadedRanges: d },
                          });
                        },
                      },
                      {
                        key: '_registerChild',
                        value: function (e) {
                          this._registeredChild = e;
                        },
                      },
                    ]),
                    t
                  );
                })(e.PureComponent);
                Gr(qo, 'defaultProps', {
                  minimumBatchSize: 10,
                  rowCount: 0,
                  threshold: 15,
                }),
                  (qo.propTypes = {});
                var Zo,
                  Yo,
                  Xo =
                    ((Yo = Zo =
                      (function (t) {
                        function n() {
                          var e, t;
                          Mr(this, n);
                          for (
                            var r = arguments.length, o = new Array(r), i = 0;
                            i < r;
                            i++
                          )
                            o[i] = arguments[i];
                          return (
                            Gr(
                              Hr(
                                (t = Dr(
                                  this,
                                  (e = Nr(n)).call.apply(e, [this].concat(o))
                                ))
                              ),
                              'Grid',
                              void 0
                            ),
                            Gr(Hr(t), '_cellRenderer', function (e) {
                              var n = e.parent,
                                r = e.rowIndex,
                                o = e.style,
                                i = e.isScrolling,
                                a = e.isVisible,
                                l = e.key,
                                s = t.props.rowRenderer,
                                c = Object.getOwnPropertyDescriptor(o, 'width');
                              return (
                                c && c.writable && (o.width = '100%'),
                                s({
                                  index: r,
                                  style: o,
                                  isScrolling: i,
                                  isVisible: a,
                                  key: l,
                                  parent: n,
                                })
                              );
                            }),
                            Gr(Hr(t), '_setRef', function (e) {
                              t.Grid = e;
                            }),
                            Gr(Hr(t), '_onScroll', function (e) {
                              var n = e.clientHeight,
                                r = e.scrollHeight,
                                o = e.scrollTop;
                              (0, t.props.onScroll)({
                                clientHeight: n,
                                scrollHeight: r,
                                scrollTop: o,
                              });
                            }),
                            Gr(Hr(t), '_onSectionRendered', function (e) {
                              var n = e.rowOverscanStartIndex,
                                r = e.rowOverscanStopIndex,
                                o = e.rowStartIndex,
                                i = e.rowStopIndex;
                              (0, t.props.onRowsRendered)({
                                overscanStartIndex: n,
                                overscanStopIndex: r,
                                startIndex: o,
                                stopIndex: i,
                              });
                            }),
                            t
                          );
                        }
                        return (
                          Wr(n, t),
                          Lr(n, [
                            {
                              key: 'forceUpdateGrid',
                              value: function () {
                                this.Grid && this.Grid.forceUpdate();
                              },
                            },
                            {
                              key: 'getOffsetForRow',
                              value: function (e) {
                                var t = e.alignment,
                                  n = e.index;
                                return this.Grid
                                  ? this.Grid.getOffsetForCell({
                                      alignment: t,
                                      rowIndex: n,
                                      columnIndex: 0,
                                    }).scrollTop
                                  : 0;
                              },
                            },
                            {
                              key: 'invalidateCellSizeAfterRender',
                              value: function (e) {
                                var t = e.columnIndex,
                                  n = e.rowIndex;
                                this.Grid &&
                                  this.Grid.invalidateCellSizeAfterRender({
                                    rowIndex: n,
                                    columnIndex: t,
                                  });
                              },
                            },
                            {
                              key: 'measureAllRows',
                              value: function () {
                                this.Grid && this.Grid.measureAllCells();
                              },
                            },
                            {
                              key: 'recomputeGridSize',
                              value: function () {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : {},
                                  t = e.columnIndex,
                                  n = void 0 === t ? 0 : t,
                                  r = e.rowIndex,
                                  o = void 0 === r ? 0 : r;
                                this.Grid &&
                                  this.Grid.recomputeGridSize({
                                    rowIndex: o,
                                    columnIndex: n,
                                  });
                              },
                            },
                            {
                              key: 'recomputeRowHeights',
                              value: function () {
                                var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : 0;
                                this.Grid &&
                                  this.Grid.recomputeGridSize({
                                    rowIndex: e,
                                    columnIndex: 0,
                                  });
                              },
                            },
                            {
                              key: 'scrollToPosition',
                              value: function () {
                                var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : 0;
                                this.Grid &&
                                  this.Grid.scrollToPosition({ scrollTop: e });
                              },
                            },
                            {
                              key: 'scrollToRow',
                              value: function () {
                                var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : 0;
                                this.Grid &&
                                  this.Grid.scrollToCell({
                                    columnIndex: 0,
                                    rowIndex: e,
                                  });
                              },
                            },
                            {
                              key: 'render',
                              value: function () {
                                var t = this.props,
                                  n = t.className,
                                  r = t.noRowsRenderer,
                                  o = t.scrollToIndex,
                                  i = t.width,
                                  l = Zr('ReactVirtualized__List', n);
                                return e.createElement(
                                  go,
                                  a({}, this.props, {
                                    autoContainerWidth: !0,
                                    cellRenderer: this._cellRenderer,
                                    className: l,
                                    columnWidth: i,
                                    columnCount: 1,
                                    noContentRenderer: r,
                                    onScroll: this._onScroll,
                                    onSectionRendered: this._onSectionRendered,
                                    ref: this._setRef,
                                    scrollToRow: o,
                                  })
                                );
                              },
                            },
                          ]),
                          n
                        );
                      })(e.PureComponent)),
                    Gr(Zo, 'propTypes', null),
                    Yo);
                Gr(Xo, 'defaultProps', {
                  autoHeight: !1,
                  estimatedRowSize: 30,
                  onScroll: function () {},
                  noRowsRenderer: function () {
                    return null;
                  },
                  onRowsRendered: function () {},
                  overscanIndicesGetter: yo,
                  overscanRowCount: 10,
                  scrollToAlignment: 'auto',
                  scrollToIndex: -1,
                  style: {},
                });
                const Jo = function (e, t, n, r, o) {
                  return 'function' == typeof n
                    ? (function (e, t, n, r, o) {
                        for (var i = n + 1; t <= n; ) {
                          var a = (t + n) >>> 1;
                          o(e[a], r) >= 0
                            ? ((i = a), (n = a - 1))
                            : (t = a + 1);
                        }
                        return i;
                      })(
                        e,
                        void 0 === r ? 0 : 0 | r,
                        void 0 === o ? e.length - 1 : 0 | o,
                        t,
                        n
                      )
                    : (function (e, t, n, r) {
                        for (var o = n + 1; t <= n; ) {
                          var i = (t + n) >>> 1;
                          e[i] >= r ? ((o = i), (n = i - 1)) : (t = i + 1);
                        }
                        return o;
                      })(
                        e,
                        void 0 === n ? 0 : 0 | n,
                        void 0 === r ? e.length - 1 : 0 | r,
                        t
                      );
                };
                function Ko(e, t, n, r, o) {
                  (this.mid = e),
                    (this.left = t),
                    (this.right = n),
                    (this.leftPoints = r),
                    (this.rightPoints = o),
                    (this.count =
                      (t ? t.count : 0) + (n ? n.count : 0) + r.length);
                }
                var $o = Ko.prototype;
                function Qo(e, t) {
                  (e.mid = t.mid),
                    (e.left = t.left),
                    (e.right = t.right),
                    (e.leftPoints = t.leftPoints),
                    (e.rightPoints = t.rightPoints),
                    (e.count = t.count);
                }
                function ei(e, t) {
                  var n = ci(t);
                  (e.mid = n.mid),
                    (e.left = n.left),
                    (e.right = n.right),
                    (e.leftPoints = n.leftPoints),
                    (e.rightPoints = n.rightPoints),
                    (e.count = n.count);
                }
                function ti(e, t) {
                  var n = e.intervals([]);
                  n.push(t), ei(e, n);
                }
                function ni(e, t) {
                  var n = e.intervals([]),
                    r = n.indexOf(t);
                  return r < 0 ? 0 : (n.splice(r, 1), ei(e, n), 1);
                }
                function ri(e, t, n) {
                  for (var r = 0; r < e.length && e[r][0] <= t; ++r) {
                    var o = n(e[r]);
                    if (o) return o;
                  }
                }
                function oi(e, t, n) {
                  for (var r = e.length - 1; r >= 0 && e[r][1] >= t; --r) {
                    var o = n(e[r]);
                    if (o) return o;
                  }
                }
                function ii(e, t) {
                  for (var n = 0; n < e.length; ++n) {
                    var r = t(e[n]);
                    if (r) return r;
                  }
                }
                function ai(e, t) {
                  return e - t;
                }
                function li(e, t) {
                  return e[0] - t[0] || e[1] - t[1];
                }
                function si(e, t) {
                  return e[1] - t[1] || e[0] - t[0];
                }
                function ci(e) {
                  if (0 === e.length) return null;
                  for (var t = [], n = 0; n < e.length; ++n)
                    t.push(e[n][0], e[n][1]);
                  t.sort(ai);
                  var r = t[t.length >> 1],
                    o = [],
                    i = [],
                    a = [];
                  for (n = 0; n < e.length; ++n) {
                    var l = e[n];
                    l[1] < r ? o.push(l) : r < l[0] ? i.push(l) : a.push(l);
                  }
                  var s = a,
                    c = a.slice();
                  return s.sort(li), c.sort(si), new Ko(r, ci(o), ci(i), s, c);
                }
                function ui(e) {
                  this.root = e;
                }
                ($o.intervals = function (e) {
                  return (
                    e.push.apply(e, this.leftPoints),
                    this.left && this.left.intervals(e),
                    this.right && this.right.intervals(e),
                    e
                  );
                }),
                  ($o.insert = function (e) {
                    var t = this.count - this.leftPoints.length;
                    if (((this.count += 1), e[1] < this.mid))
                      this.left
                        ? 4 * (this.left.count + 1) > 3 * (t + 1)
                          ? ti(this, e)
                          : this.left.insert(e)
                        : (this.left = ci([e]));
                    else if (e[0] > this.mid)
                      this.right
                        ? 4 * (this.right.count + 1) > 3 * (t + 1)
                          ? ti(this, e)
                          : this.right.insert(e)
                        : (this.right = ci([e]));
                    else {
                      var n = Jo(this.leftPoints, e, li),
                        r = Jo(this.rightPoints, e, si);
                      this.leftPoints.splice(n, 0, e),
                        this.rightPoints.splice(r, 0, e);
                    }
                  }),
                  ($o.remove = function (e) {
                    var t = this.count - this.leftPoints;
                    if (e[1] < this.mid)
                      return this.left
                        ? 4 * (this.right ? this.right.count : 0) > 3 * (t - 1)
                          ? ni(this, e)
                          : 2 === (i = this.left.remove(e))
                            ? ((this.left = null), (this.count -= 1), 1)
                            : (1 === i && (this.count -= 1), i)
                        : 0;
                    if (e[0] > this.mid)
                      return this.right
                        ? 4 * (this.left ? this.left.count : 0) > 3 * (t - 1)
                          ? ni(this, e)
                          : 2 === (i = this.right.remove(e))
                            ? ((this.right = null), (this.count -= 1), 1)
                            : (1 === i && (this.count -= 1), i)
                        : 0;
                    if (1 === this.count)
                      return this.leftPoints[0] === e ? 2 : 0;
                    if (
                      1 === this.leftPoints.length &&
                      this.leftPoints[0] === e
                    ) {
                      if (this.left && this.right) {
                        for (var n = this, r = this.left; r.right; )
                          (n = r), (r = r.right);
                        if (n === this) r.right = this.right;
                        else {
                          var o = this.left,
                            i = this.right;
                          (n.count -= r.count),
                            (n.right = r.left),
                            (r.left = o),
                            (r.right = i);
                        }
                        Qo(this, r),
                          (this.count =
                            (this.left ? this.left.count : 0) +
                            (this.right ? this.right.count : 0) +
                            this.leftPoints.length);
                      } else
                        this.left ? Qo(this, this.left) : Qo(this, this.right);
                      return 1;
                    }
                    for (
                      o = Jo(this.leftPoints, e, li);
                      o < this.leftPoints.length &&
                      this.leftPoints[o][0] === e[0];
                      ++o
                    )
                      if (this.leftPoints[o] === e)
                        for (
                          this.count -= 1,
                            this.leftPoints.splice(o, 1),
                            i = Jo(this.rightPoints, e, si);
                          i < this.rightPoints.length &&
                          this.rightPoints[i][1] === e[1];
                          ++i
                        )
                          if (this.rightPoints[i] === e)
                            return this.rightPoints.splice(i, 1), 1;
                    return 0;
                  }),
                  ($o.queryPoint = function (e, t) {
                    return e < this.mid
                      ? this.left && (n = this.left.queryPoint(e, t))
                        ? n
                        : ri(this.leftPoints, e, t)
                      : e > this.mid
                        ? this.right && (n = this.right.queryPoint(e, t))
                          ? n
                          : oi(this.rightPoints, e, t)
                        : ii(this.leftPoints, t);
                    var n;
                  }),
                  ($o.queryInterval = function (e, t, n) {
                    var r;
                    return (e < this.mid &&
                      this.left &&
                      (r = this.left.queryInterval(e, t, n))) ||
                      (t > this.mid &&
                        this.right &&
                        (r = this.right.queryInterval(e, t, n)))
                      ? r
                      : t < this.mid
                        ? ri(this.leftPoints, t, n)
                        : e > this.mid
                          ? oi(this.rightPoints, e, n)
                          : ii(this.leftPoints, n);
                  });
                var di = ui.prototype;
                (di.insert = function (e) {
                  this.root
                    ? this.root.insert(e)
                    : (this.root = new Ko(e[0], null, null, [e], [e]));
                }),
                  (di.remove = function (e) {
                    if (this.root) {
                      var t = this.root.remove(e);
                      return 2 === t && (this.root = null), 0 !== t;
                    }
                    return !1;
                  }),
                  (di.queryPoint = function (e, t) {
                    if (this.root) return this.root.queryPoint(e, t);
                  }),
                  (di.queryInterval = function (e, t, n) {
                    if (e <= t && this.root)
                      return this.root.queryInterval(e, t, n);
                  }),
                  Object.defineProperty(di, 'count', {
                    get: function () {
                      return this.root ? this.root.count : 0;
                    },
                  }),
                  Object.defineProperty(di, 'intervals', {
                    get: function () {
                      return this.root ? this.root.intervals([]) : [];
                    },
                  });
                var fi,
                  hi,
                  pi = (function () {
                    function e() {
                      Mr(this, e),
                        Gr(this, '_columnSizeMap', {}),
                        Gr(this, '_intervalTree', new ui(null)),
                        Gr(this, '_leftMap', {});
                    }
                    return (
                      Lr(e, [
                        {
                          key: 'estimateTotalHeight',
                          value: function (e, t, n) {
                            var r = e - this.count;
                            return (
                              this.tallestColumnSize + Math.ceil(r / t) * n
                            );
                          },
                        },
                        {
                          key: 'range',
                          value: function (e, t, n) {
                            var r = this;
                            this._intervalTree.queryInterval(
                              e,
                              e + t,
                              function (e) {
                                var t,
                                  o =
                                    (function (e) {
                                      if (Array.isArray(e)) return e;
                                    })((t = e)) ||
                                    (function (e, t) {
                                      var n =
                                        null == e
                                          ? null
                                          : ('undefined' != typeof Symbol &&
                                              e[Symbol.iterator]) ||
                                            e['@@iterator'];
                                      if (null != n) {
                                        var r,
                                          o,
                                          i = [],
                                          a = !0,
                                          l = !1;
                                        try {
                                          for (
                                            n = n.call(e);
                                            !(a = (r = n.next()).done) &&
                                            (i.push(r.value), 3 !== i.length);
                                            a = !0
                                          );
                                        } catch (e) {
                                          (l = !0), (o = e);
                                        } finally {
                                          try {
                                            a || null == n.return || n.return();
                                          } finally {
                                            if (l) throw o;
                                          }
                                        }
                                        return i;
                                      }
                                    })(t) ||
                                    Vo(t, 3) ||
                                    (function () {
                                      throw new TypeError(
                                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                      );
                                    })(),
                                  i = o[0],
                                  a = (o[1], o[2]);
                                return n(a, r._leftMap[a], i);
                              }
                            );
                          },
                        },
                        {
                          key: 'setPosition',
                          value: function (e, t, n, r) {
                            this._intervalTree.insert([n, n + r, e]),
                              (this._leftMap[e] = t);
                            var o = this._columnSizeMap,
                              i = o[t];
                            o[t] = void 0 === i ? n + r : Math.max(i, n + r);
                          },
                        },
                        {
                          key: 'count',
                          get: function () {
                            return this._intervalTree.count;
                          },
                        },
                        {
                          key: 'shortestColumnSize',
                          get: function () {
                            var e = this._columnSizeMap,
                              t = 0;
                            for (var n in e) {
                              var r = e[n];
                              t = 0 === t ? r : Math.min(t, r);
                            }
                            return t;
                          },
                        },
                        {
                          key: 'tallestColumnSize',
                          get: function () {
                            var e = this._columnSizeMap,
                              t = 0;
                            for (var n in e) {
                              var r = e[n];
                              t = Math.max(t, r);
                            }
                            return t;
                          },
                        },
                      ]),
                      e
                    );
                  })();
                function mi(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                function vi(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? mi(n, !0).forEach(function (t) {
                          Gr(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : mi(n).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                }
                var gi =
                  ((hi = fi =
                    (function (t) {
                      function n() {
                        var e, t;
                        Mr(this, n);
                        for (
                          var r = arguments.length, o = new Array(r), i = 0;
                          i < r;
                          i++
                        )
                          o[i] = arguments[i];
                        return (
                          Gr(
                            Hr(
                              (t = Dr(
                                this,
                                (e = Nr(n)).call.apply(e, [this].concat(o))
                              ))
                            ),
                            'state',
                            { isScrolling: !1, scrollTop: 0 }
                          ),
                          Gr(Hr(t), '_debounceResetIsScrollingId', void 0),
                          Gr(Hr(t), '_invalidateOnUpdateStartIndex', null),
                          Gr(Hr(t), '_invalidateOnUpdateStopIndex', null),
                          Gr(Hr(t), '_positionCache', new pi()),
                          Gr(Hr(t), '_startIndex', null),
                          Gr(Hr(t), '_startIndexMemoized', null),
                          Gr(Hr(t), '_stopIndex', null),
                          Gr(Hr(t), '_stopIndexMemoized', null),
                          Gr(
                            Hr(t),
                            '_debounceResetIsScrollingCallback',
                            function () {
                              t.setState({ isScrolling: !1 });
                            }
                          ),
                          Gr(Hr(t), '_setScrollingContainerRef', function (e) {
                            t._scrollingContainer = e;
                          }),
                          Gr(Hr(t), '_onScroll', function (e) {
                            var n = t.props.height,
                              r = e.currentTarget.scrollTop,
                              o = Math.min(
                                Math.max(0, t._getEstimatedTotalHeight() - n),
                                r
                              );
                            r === o &&
                              (t._debounceResetIsScrolling(),
                              t.state.scrollTop !== o &&
                                t.setState({ isScrolling: !0, scrollTop: o }));
                          }),
                          t
                        );
                      }
                      return (
                        Wr(n, t),
                        Lr(
                          n,
                          [
                            {
                              key: 'clearCellPositions',
                              value: function () {
                                (this._positionCache = new pi()),
                                  this.forceUpdate();
                              },
                            },
                            {
                              key: 'invalidateCellSizeAfterRender',
                              value: function (e) {
                                var t = e.rowIndex;
                                null === this._invalidateOnUpdateStartIndex
                                  ? ((this._invalidateOnUpdateStartIndex = t),
                                    (this._invalidateOnUpdateStopIndex = t))
                                  : ((this._invalidateOnUpdateStartIndex =
                                      Math.min(
                                        this._invalidateOnUpdateStartIndex,
                                        t
                                      )),
                                    (this._invalidateOnUpdateStopIndex =
                                      Math.max(
                                        this._invalidateOnUpdateStopIndex,
                                        t
                                      )));
                              },
                            },
                            {
                              key: 'recomputeCellPositions',
                              value: function () {
                                var e = this._positionCache.count - 1;
                                (this._positionCache = new pi()),
                                  this._populatePositionCache(0, e),
                                  this.forceUpdate();
                              },
                            },
                            {
                              key: 'componentDidMount',
                              value: function () {
                                this._checkInvalidateOnUpdate(),
                                  this._invokeOnScrollCallback(),
                                  this._invokeOnCellsRenderedCallback();
                              },
                            },
                            {
                              key: 'componentDidUpdate',
                              value: function (e, t) {
                                this._checkInvalidateOnUpdate(),
                                  this._invokeOnScrollCallback(),
                                  this._invokeOnCellsRenderedCallback(),
                                  this.props.scrollTop !== e.scrollTop &&
                                    this._debounceResetIsScrolling();
                              },
                            },
                            {
                              key: 'componentWillUnmount',
                              value: function () {
                                this._debounceResetIsScrollingId &&
                                  uo(this._debounceResetIsScrollingId);
                              },
                            },
                            {
                              key: 'render',
                              value: function () {
                                var t,
                                  n = this,
                                  r = this.props,
                                  o = r.autoHeight,
                                  i = r.cellCount,
                                  a = r.cellMeasurerCache,
                                  l = r.cellRenderer,
                                  s = r.className,
                                  c = r.height,
                                  u = r.id,
                                  d = r.keyMapper,
                                  f = r.overscanByPixels,
                                  h = r.role,
                                  p = r.style,
                                  m = r.tabIndex,
                                  v = r.width,
                                  g = r.rowDirection,
                                  y = this.state,
                                  b = y.isScrolling,
                                  w = y.scrollTop,
                                  _ = [],
                                  S = this._getEstimatedTotalHeight(),
                                  x = this._positionCache.shortestColumnSize,
                                  C = this._positionCache.count,
                                  O = 0;
                                if (
                                  (this._positionCache.range(
                                    Math.max(0, w - f),
                                    c + 2 * f,
                                    function (e, r, o) {
                                      var i;
                                      void 0 === t
                                        ? ((O = e), (t = e))
                                        : ((O = Math.min(O, e)),
                                          (t = Math.max(t, e))),
                                        _.push(
                                          l({
                                            index: e,
                                            isScrolling: b,
                                            key: d(e),
                                            parent: n,
                                            style:
                                              ((i = { height: a.getHeight(e) }),
                                              Gr(
                                                i,
                                                'ltr' === g ? 'left' : 'right',
                                                r
                                              ),
                                              Gr(i, 'position', 'absolute'),
                                              Gr(i, 'top', o),
                                              Gr(i, 'width', a.getWidth(e)),
                                              i),
                                          })
                                        );
                                    }
                                  ),
                                  x < w + c + f && C < i)
                                )
                                  for (
                                    var R = Math.min(
                                        i - C,
                                        Math.ceil(
                                          (((w + c + f - x) / a.defaultHeight) *
                                            v) /
                                            a.defaultWidth
                                        )
                                      ),
                                      T = C;
                                    T < C + R;
                                    T++
                                  )
                                    (t = T),
                                      _.push(
                                        l({
                                          index: T,
                                          isScrolling: b,
                                          key: d(T),
                                          parent: this,
                                          style: { width: a.getWidth(T) },
                                        })
                                      );
                                return (
                                  (this._startIndex = O),
                                  (this._stopIndex = t),
                                  e.createElement(
                                    'div',
                                    {
                                      ref: this._setScrollingContainerRef,
                                      'aria-label': this.props['aria-label'],
                                      className: Zr(
                                        'ReactVirtualized__Masonry',
                                        s
                                      ),
                                      id: u,
                                      onScroll: this._onScroll,
                                      role: h,
                                      style: vi(
                                        {
                                          boxSizing: 'border-box',
                                          direction: 'ltr',
                                          height: o ? 'auto' : c,
                                          overflowX: 'hidden',
                                          overflowY: S < c ? 'hidden' : 'auto',
                                          position: 'relative',
                                          width: v,
                                          WebkitOverflowScrolling: 'touch',
                                          willChange: 'transform',
                                        },
                                        p
                                      ),
                                      tabIndex: m,
                                    },
                                    e.createElement(
                                      'div',
                                      {
                                        className:
                                          'ReactVirtualized__Masonry__innerScrollContainer',
                                        style: {
                                          width: '100%',
                                          height: S,
                                          maxWidth: '100%',
                                          maxHeight: S,
                                          overflow: 'hidden',
                                          pointerEvents: b ? 'none' : '',
                                          position: 'relative',
                                        },
                                      },
                                      _
                                    )
                                  )
                                );
                              },
                            },
                            {
                              key: '_checkInvalidateOnUpdate',
                              value: function () {
                                if (
                                  'number' ==
                                  typeof this._invalidateOnUpdateStartIndex
                                ) {
                                  var e = this._invalidateOnUpdateStartIndex,
                                    t = this._invalidateOnUpdateStopIndex;
                                  (this._invalidateOnUpdateStartIndex = null),
                                    (this._invalidateOnUpdateStopIndex = null),
                                    this._populatePositionCache(e, t),
                                    this.forceUpdate();
                                }
                              },
                            },
                            {
                              key: '_debounceResetIsScrolling',
                              value: function () {
                                var e = this.props.scrollingResetTimeInterval;
                                this._debounceResetIsScrollingId &&
                                  uo(this._debounceResetIsScrollingId),
                                  (this._debounceResetIsScrollingId = fo(
                                    this._debounceResetIsScrollingCallback,
                                    e
                                  ));
                              },
                            },
                            {
                              key: '_getEstimatedTotalHeight',
                              value: function () {
                                var e = this.props,
                                  t = e.cellCount,
                                  n = e.cellMeasurerCache,
                                  r = e.width,
                                  o = Math.max(
                                    1,
                                    Math.floor(r / n.defaultWidth)
                                  );
                                return this._positionCache.estimateTotalHeight(
                                  t,
                                  o,
                                  n.defaultHeight
                                );
                              },
                            },
                            {
                              key: '_invokeOnScrollCallback',
                              value: function () {
                                var e = this.props,
                                  t = e.height,
                                  n = e.onScroll,
                                  r = this.state.scrollTop;
                                this._onScrollMemoized !== r &&
                                  (n({
                                    clientHeight: t,
                                    scrollHeight:
                                      this._getEstimatedTotalHeight(),
                                    scrollTop: r,
                                  }),
                                  (this._onScrollMemoized = r));
                              },
                            },
                            {
                              key: '_invokeOnCellsRenderedCallback',
                              value: function () {
                                (this._startIndexMemoized ===
                                  this._startIndex &&
                                  this._stopIndexMemoized ===
                                    this._stopIndex) ||
                                  ((0, this.props.onCellsRendered)({
                                    startIndex: this._startIndex,
                                    stopIndex: this._stopIndex,
                                  }),
                                  (this._startIndexMemoized = this._startIndex),
                                  (this._stopIndexMemoized = this._stopIndex));
                              },
                            },
                            {
                              key: '_populatePositionCache',
                              value: function (e, t) {
                                for (
                                  var n = this.props,
                                    r = n.cellMeasurerCache,
                                    o = n.cellPositioner,
                                    i = e;
                                  i <= t;
                                  i++
                                ) {
                                  var a = o(i),
                                    l = a.left,
                                    s = a.top;
                                  this._positionCache.setPosition(
                                    i,
                                    l,
                                    s,
                                    r.getHeight(i)
                                  );
                                }
                              },
                            },
                          ],
                          [
                            {
                              key: 'getDerivedStateFromProps',
                              value: function (e, t) {
                                return void 0 !== e.scrollTop &&
                                  t.scrollTop !== e.scrollTop
                                  ? { isScrolling: !0, scrollTop: e.scrollTop }
                                  : null;
                              },
                            },
                          ]
                        ),
                        n
                      );
                    })(e.PureComponent)),
                  Gr(fi, 'propTypes', null),
                  hi);
                function yi() {}
                Gr(gi, 'defaultProps', {
                  autoHeight: !1,
                  keyMapper: function (e) {
                    return e;
                  },
                  onCellsRendered: yi,
                  onScroll: yi,
                  overscanByPixels: 20,
                  role: 'grid',
                  scrollingResetTimeInterval: 150,
                  style: {},
                  tabIndex: 0,
                  rowDirection: 'ltr',
                }),
                  Vr(gi);
                var bi = (function () {
                  function e() {
                    var t = this,
                      n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                    Mr(this, e),
                      Gr(this, '_cellMeasurerCache', void 0),
                      Gr(this, '_columnIndexOffset', void 0),
                      Gr(this, '_rowIndexOffset', void 0),
                      Gr(this, 'columnWidth', function (e) {
                        var n = e.index;
                        t._cellMeasurerCache.columnWidth({
                          index: n + t._columnIndexOffset,
                        });
                      }),
                      Gr(this, 'rowHeight', function (e) {
                        var n = e.index;
                        t._cellMeasurerCache.rowHeight({
                          index: n + t._rowIndexOffset,
                        });
                      });
                    var r = n.cellMeasurerCache,
                      o = n.columnIndexOffset,
                      i = void 0 === o ? 0 : o,
                      a = n.rowIndexOffset,
                      l = void 0 === a ? 0 : a;
                    (this._cellMeasurerCache = r),
                      (this._columnIndexOffset = i),
                      (this._rowIndexOffset = l);
                  }
                  return (
                    Lr(e, [
                      {
                        key: 'clear',
                        value: function (e, t) {
                          this._cellMeasurerCache.clear(
                            e + this._rowIndexOffset,
                            t + this._columnIndexOffset
                          );
                        },
                      },
                      {
                        key: 'clearAll',
                        value: function () {
                          this._cellMeasurerCache.clearAll();
                        },
                      },
                      {
                        key: 'hasFixedHeight',
                        value: function () {
                          return this._cellMeasurerCache.hasFixedHeight();
                        },
                      },
                      {
                        key: 'hasFixedWidth',
                        value: function () {
                          return this._cellMeasurerCache.hasFixedWidth();
                        },
                      },
                      {
                        key: 'getHeight',
                        value: function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0;
                          return this._cellMeasurerCache.getHeight(
                            e + this._rowIndexOffset,
                            t + this._columnIndexOffset
                          );
                        },
                      },
                      {
                        key: 'getWidth',
                        value: function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0;
                          return this._cellMeasurerCache.getWidth(
                            e + this._rowIndexOffset,
                            t + this._columnIndexOffset
                          );
                        },
                      },
                      {
                        key: 'has',
                        value: function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0;
                          return this._cellMeasurerCache.has(
                            e + this._rowIndexOffset,
                            t + this._columnIndexOffset
                          );
                        },
                      },
                      {
                        key: 'set',
                        value: function (e, t, n, r) {
                          this._cellMeasurerCache.set(
                            e + this._rowIndexOffset,
                            t + this._columnIndexOffset,
                            n,
                            r
                          );
                        },
                      },
                      {
                        key: 'defaultHeight',
                        get: function () {
                          return this._cellMeasurerCache.defaultHeight;
                        },
                      },
                      {
                        key: 'defaultWidth',
                        get: function () {
                          return this._cellMeasurerCache.defaultWidth;
                        },
                      },
                    ]),
                    e
                  );
                })();
                function wi(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                function _i(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? wi(n, !0).forEach(function (t) {
                          Gr(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : wi(n).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                }
                var Si = (function (t) {
                  function n(t, r) {
                    var o;
                    Mr(this, n),
                      Gr(Hr((o = Dr(this, Nr(n).call(this, t, r)))), 'state', {
                        scrollLeft: 0,
                        scrollTop: 0,
                        scrollbarSize: 0,
                        showHorizontalScrollbar: !1,
                        showVerticalScrollbar: !1,
                      }),
                      Gr(Hr(o), '_deferredInvalidateColumnIndex', null),
                      Gr(Hr(o), '_deferredInvalidateRowIndex', null),
                      Gr(Hr(o), '_bottomLeftGridRef', function (e) {
                        o._bottomLeftGrid = e;
                      }),
                      Gr(Hr(o), '_bottomRightGridRef', function (e) {
                        o._bottomRightGrid = e;
                      }),
                      Gr(Hr(o), '_cellRendererBottomLeftGrid', function (t) {
                        var n = t.rowIndex,
                          r = Xr(t, ['rowIndex']),
                          i = o.props,
                          a = i.cellRenderer,
                          l = i.fixedRowCount;
                        return n === i.rowCount - l
                          ? e.createElement('div', {
                              key: r.key,
                              style: _i({}, r.style, { height: 20 }),
                            })
                          : a(_i({}, r, { parent: Hr(o), rowIndex: n + l }));
                      }),
                      Gr(Hr(o), '_cellRendererBottomRightGrid', function (e) {
                        var t = e.columnIndex,
                          n = e.rowIndex,
                          r = Xr(e, ['columnIndex', 'rowIndex']),
                          i = o.props,
                          a = i.cellRenderer,
                          l = i.fixedColumnCount,
                          s = i.fixedRowCount;
                        return a(
                          _i({}, r, {
                            columnIndex: t + l,
                            parent: Hr(o),
                            rowIndex: n + s,
                          })
                        );
                      }),
                      Gr(Hr(o), '_cellRendererTopRightGrid', function (t) {
                        var n = t.columnIndex,
                          r = Xr(t, ['columnIndex']),
                          i = o.props,
                          a = i.cellRenderer,
                          l = i.columnCount,
                          s = i.fixedColumnCount;
                        return n === l - s
                          ? e.createElement('div', {
                              key: r.key,
                              style: _i({}, r.style, { width: 20 }),
                            })
                          : a(_i({}, r, { columnIndex: n + s, parent: Hr(o) }));
                      }),
                      Gr(Hr(o), '_columnWidthRightGrid', function (e) {
                        var t = e.index,
                          n = o.props,
                          r = n.columnCount,
                          i = n.fixedColumnCount,
                          a = n.columnWidth,
                          l = o.state,
                          s = l.scrollbarSize;
                        return l.showHorizontalScrollbar && t === r - i
                          ? s
                          : 'function' == typeof a
                            ? a({ index: t + i })
                            : a;
                      }),
                      Gr(Hr(o), '_onScroll', function (e) {
                        var t = e.scrollLeft,
                          n = e.scrollTop;
                        o.setState({ scrollLeft: t, scrollTop: n });
                        var r = o.props.onScroll;
                        r && r(e);
                      }),
                      Gr(Hr(o), '_onScrollbarPresenceChange', function (e) {
                        var t = e.horizontal,
                          n = e.size,
                          r = e.vertical,
                          i = o.state,
                          a = i.showHorizontalScrollbar,
                          l = i.showVerticalScrollbar;
                        if (t !== a || r !== l) {
                          o.setState({
                            scrollbarSize: n,
                            showHorizontalScrollbar: t,
                            showVerticalScrollbar: r,
                          });
                          var s = o.props.onScrollbarPresenceChange;
                          'function' == typeof s &&
                            s({ horizontal: t, size: n, vertical: r });
                        }
                      }),
                      Gr(Hr(o), '_onScrollLeft', function (e) {
                        var t = e.scrollLeft;
                        o._onScroll({
                          scrollLeft: t,
                          scrollTop: o.state.scrollTop,
                        });
                      }),
                      Gr(Hr(o), '_onScrollTop', function (e) {
                        var t = e.scrollTop;
                        o._onScroll({
                          scrollTop: t,
                          scrollLeft: o.state.scrollLeft,
                        });
                      }),
                      Gr(Hr(o), '_rowHeightBottomGrid', function (e) {
                        var t = e.index,
                          n = o.props,
                          r = n.fixedRowCount,
                          i = n.rowCount,
                          a = n.rowHeight,
                          l = o.state,
                          s = l.scrollbarSize;
                        return l.showVerticalScrollbar && t === i - r
                          ? s
                          : 'function' == typeof a
                            ? a({ index: t + r })
                            : a;
                      }),
                      Gr(Hr(o), '_topLeftGridRef', function (e) {
                        o._topLeftGrid = e;
                      }),
                      Gr(Hr(o), '_topRightGridRef', function (e) {
                        o._topRightGrid = e;
                      });
                    var i = t.deferredMeasurementCache,
                      a = t.fixedColumnCount,
                      l = t.fixedRowCount;
                    return (
                      o._maybeCalculateCachedStyles(!0),
                      i &&
                        ((o._deferredMeasurementCacheBottomLeftGrid =
                          l > 0
                            ? new bi({
                                cellMeasurerCache: i,
                                columnIndexOffset: 0,
                                rowIndexOffset: l,
                              })
                            : i),
                        (o._deferredMeasurementCacheBottomRightGrid =
                          a > 0 || l > 0
                            ? new bi({
                                cellMeasurerCache: i,
                                columnIndexOffset: a,
                                rowIndexOffset: l,
                              })
                            : i),
                        (o._deferredMeasurementCacheTopRightGrid =
                          a > 0
                            ? new bi({
                                cellMeasurerCache: i,
                                columnIndexOffset: a,
                                rowIndexOffset: 0,
                              })
                            : i)),
                      o
                    );
                  }
                  return (
                    Wr(n, t),
                    Lr(
                      n,
                      [
                        {
                          key: 'forceUpdateGrids',
                          value: function () {
                            this._bottomLeftGrid &&
                              this._bottomLeftGrid.forceUpdate(),
                              this._bottomRightGrid &&
                                this._bottomRightGrid.forceUpdate(),
                              this._topLeftGrid &&
                                this._topLeftGrid.forceUpdate(),
                              this._topRightGrid &&
                                this._topRightGrid.forceUpdate();
                          },
                        },
                        {
                          key: 'invalidateCellSizeAfterRender',
                          value: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {},
                              t = e.columnIndex,
                              n = void 0 === t ? 0 : t,
                              r = e.rowIndex,
                              o = void 0 === r ? 0 : r;
                            (this._deferredInvalidateColumnIndex =
                              'number' ==
                              typeof this._deferredInvalidateColumnIndex
                                ? Math.min(
                                    this._deferredInvalidateColumnIndex,
                                    n
                                  )
                                : n),
                              (this._deferredInvalidateRowIndex =
                                'number' ==
                                typeof this._deferredInvalidateRowIndex
                                  ? Math.min(
                                      this._deferredInvalidateRowIndex,
                                      o
                                    )
                                  : o);
                          },
                        },
                        {
                          key: 'measureAllCells',
                          value: function () {
                            this._bottomLeftGrid &&
                              this._bottomLeftGrid.measureAllCells(),
                              this._bottomRightGrid &&
                                this._bottomRightGrid.measureAllCells(),
                              this._topLeftGrid &&
                                this._topLeftGrid.measureAllCells(),
                              this._topRightGrid &&
                                this._topRightGrid.measureAllCells();
                          },
                        },
                        {
                          key: 'recomputeGridSize',
                          value: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {},
                              t = e.columnIndex,
                              n = void 0 === t ? 0 : t,
                              r = e.rowIndex,
                              o = void 0 === r ? 0 : r,
                              i = this.props,
                              a = i.fixedColumnCount,
                              l = i.fixedRowCount,
                              s = Math.max(0, n - a),
                              c = Math.max(0, o - l);
                            this._bottomLeftGrid &&
                              this._bottomLeftGrid.recomputeGridSize({
                                columnIndex: n,
                                rowIndex: c,
                              }),
                              this._bottomRightGrid &&
                                this._bottomRightGrid.recomputeGridSize({
                                  columnIndex: s,
                                  rowIndex: c,
                                }),
                              this._topLeftGrid &&
                                this._topLeftGrid.recomputeGridSize({
                                  columnIndex: n,
                                  rowIndex: o,
                                }),
                              this._topRightGrid &&
                                this._topRightGrid.recomputeGridSize({
                                  columnIndex: s,
                                  rowIndex: o,
                                }),
                              (this._leftGridWidth = null),
                              (this._topGridHeight = null),
                              this._maybeCalculateCachedStyles(!0);
                          },
                        },
                        {
                          key: 'componentDidMount',
                          value: function () {
                            var e = this.props,
                              t = e.scrollLeft,
                              n = e.scrollTop;
                            if (t > 0 || n > 0) {
                              var r = {};
                              t > 0 && (r.scrollLeft = t),
                                n > 0 && (r.scrollTop = n),
                                this.setState(r);
                            }
                            this._handleInvalidatedGridSize();
                          },
                        },
                        {
                          key: 'componentDidUpdate',
                          value: function () {
                            this._handleInvalidatedGridSize();
                          },
                        },
                        {
                          key: 'render',
                          value: function () {
                            var t = this.props,
                              n = t.onScroll,
                              r = t.onSectionRendered,
                              o =
                                (t.onScrollbarPresenceChange,
                                t.scrollLeft,
                                t.scrollToColumn),
                              i = (t.scrollTop, t.scrollToRow),
                              a = Xr(t, [
                                'onScroll',
                                'onSectionRendered',
                                'onScrollbarPresenceChange',
                                'scrollLeft',
                                'scrollToColumn',
                                'scrollTop',
                                'scrollToRow',
                              ]);
                            if (
                              (this._prepareForRender(),
                              0 === this.props.width || 0 === this.props.height)
                            )
                              return null;
                            var l = this.state,
                              s = l.scrollLeft,
                              c = l.scrollTop;
                            return e.createElement(
                              'div',
                              { style: this._containerOuterStyle },
                              e.createElement(
                                'div',
                                { style: this._containerTopStyle },
                                this._renderTopLeftGrid(a),
                                this._renderTopRightGrid(
                                  _i({}, a, { onScroll: n, scrollLeft: s })
                                )
                              ),
                              e.createElement(
                                'div',
                                { style: this._containerBottomStyle },
                                this._renderBottomLeftGrid(
                                  _i({}, a, { onScroll: n, scrollTop: c })
                                ),
                                this._renderBottomRightGrid(
                                  _i({}, a, {
                                    onScroll: n,
                                    onSectionRendered: r,
                                    scrollLeft: s,
                                    scrollToColumn: o,
                                    scrollToRow: i,
                                    scrollTop: c,
                                  })
                                )
                              )
                            );
                          },
                        },
                        {
                          key: '_getBottomGridHeight',
                          value: function (e) {
                            return e.height - this._getTopGridHeight(e);
                          },
                        },
                        {
                          key: '_getLeftGridWidth',
                          value: function (e) {
                            var t = e.fixedColumnCount,
                              n = e.columnWidth;
                            if (null == this._leftGridWidth)
                              if ('function' == typeof n) {
                                for (var r = 0, o = 0; o < t; o++)
                                  r += n({ index: o });
                                this._leftGridWidth = r;
                              } else this._leftGridWidth = n * t;
                            return this._leftGridWidth;
                          },
                        },
                        {
                          key: '_getRightGridWidth',
                          value: function (e) {
                            return e.width - this._getLeftGridWidth(e);
                          },
                        },
                        {
                          key: '_getTopGridHeight',
                          value: function (e) {
                            var t = e.fixedRowCount,
                              n = e.rowHeight;
                            if (null == this._topGridHeight)
                              if ('function' == typeof n) {
                                for (var r = 0, o = 0; o < t; o++)
                                  r += n({ index: o });
                                this._topGridHeight = r;
                              } else this._topGridHeight = n * t;
                            return this._topGridHeight;
                          },
                        },
                        {
                          key: '_handleInvalidatedGridSize',
                          value: function () {
                            if (
                              'number' ==
                              typeof this._deferredInvalidateColumnIndex
                            ) {
                              var e = this._deferredInvalidateColumnIndex,
                                t = this._deferredInvalidateRowIndex;
                              (this._deferredInvalidateColumnIndex = null),
                                (this._deferredInvalidateRowIndex = null),
                                this.recomputeGridSize({
                                  columnIndex: e,
                                  rowIndex: t,
                                }),
                                this.forceUpdate();
                            }
                          },
                        },
                        {
                          key: '_maybeCalculateCachedStyles',
                          value: function (e) {
                            var t = this.props,
                              n = t.columnWidth,
                              r = t.enableFixedColumnScroll,
                              o = t.enableFixedRowScroll,
                              i = t.height,
                              a = t.fixedColumnCount,
                              l = t.fixedRowCount,
                              s = t.rowHeight,
                              c = t.style,
                              u = t.styleBottomLeftGrid,
                              d = t.styleBottomRightGrid,
                              f = t.styleTopLeftGrid,
                              h = t.styleTopRightGrid,
                              p = t.width,
                              m =
                                e ||
                                i !== this._lastRenderedHeight ||
                                p !== this._lastRenderedWidth,
                              v =
                                e ||
                                n !== this._lastRenderedColumnWidth ||
                                a !== this._lastRenderedFixedColumnCount,
                              g =
                                e ||
                                l !== this._lastRenderedFixedRowCount ||
                                s !== this._lastRenderedRowHeight;
                            (e || m || c !== this._lastRenderedStyle) &&
                              (this._containerOuterStyle = _i(
                                { height: i, overflow: 'visible', width: p },
                                c
                              )),
                              (e || m || g) &&
                                ((this._containerTopStyle = {
                                  height: this._getTopGridHeight(this.props),
                                  position: 'relative',
                                  width: p,
                                }),
                                (this._containerBottomStyle = {
                                  height:
                                    i - this._getTopGridHeight(this.props),
                                  overflow: 'visible',
                                  position: 'relative',
                                  width: p,
                                })),
                              (e ||
                                u !== this._lastRenderedStyleBottomLeftGrid) &&
                                (this._bottomLeftGridStyle = _i(
                                  {
                                    left: 0,
                                    overflowX: 'hidden',
                                    overflowY: r ? 'auto' : 'hidden',
                                    position: 'absolute',
                                  },
                                  u
                                )),
                              (e ||
                                v ||
                                d !== this._lastRenderedStyleBottomRightGrid) &&
                                (this._bottomRightGridStyle = _i(
                                  {
                                    left: this._getLeftGridWidth(this.props),
                                    position: 'absolute',
                                  },
                                  d
                                )),
                              (e || f !== this._lastRenderedStyleTopLeftGrid) &&
                                (this._topLeftGridStyle = _i(
                                  {
                                    left: 0,
                                    overflowX: 'hidden',
                                    overflowY: 'hidden',
                                    position: 'absolute',
                                    top: 0,
                                  },
                                  f
                                )),
                              (e ||
                                v ||
                                h !== this._lastRenderedStyleTopRightGrid) &&
                                (this._topRightGridStyle = _i(
                                  {
                                    left: this._getLeftGridWidth(this.props),
                                    overflowX: o ? 'auto' : 'hidden',
                                    overflowY: 'hidden',
                                    position: 'absolute',
                                    top: 0,
                                  },
                                  h
                                )),
                              (this._lastRenderedColumnWidth = n),
                              (this._lastRenderedFixedColumnCount = a),
                              (this._lastRenderedFixedRowCount = l),
                              (this._lastRenderedHeight = i),
                              (this._lastRenderedRowHeight = s),
                              (this._lastRenderedStyle = c),
                              (this._lastRenderedStyleBottomLeftGrid = u),
                              (this._lastRenderedStyleBottomRightGrid = d),
                              (this._lastRenderedStyleTopLeftGrid = f),
                              (this._lastRenderedStyleTopRightGrid = h),
                              (this._lastRenderedWidth = p);
                          },
                        },
                        {
                          key: '_prepareForRender',
                          value: function () {
                            (this._lastRenderedColumnWidth ===
                              this.props.columnWidth &&
                              this._lastRenderedFixedColumnCount ===
                                this.props.fixedColumnCount) ||
                              (this._leftGridWidth = null),
                              (this._lastRenderedFixedRowCount ===
                                this.props.fixedRowCount &&
                                this._lastRenderedRowHeight ===
                                  this.props.rowHeight) ||
                                (this._topGridHeight = null),
                              this._maybeCalculateCachedStyles(),
                              (this._lastRenderedColumnWidth =
                                this.props.columnWidth),
                              (this._lastRenderedFixedColumnCount =
                                this.props.fixedColumnCount),
                              (this._lastRenderedFixedRowCount =
                                this.props.fixedRowCount),
                              (this._lastRenderedRowHeight =
                                this.props.rowHeight);
                          },
                        },
                        {
                          key: '_renderBottomLeftGrid',
                          value: function (t) {
                            var n = t.enableFixedColumnScroll,
                              r = t.fixedColumnCount,
                              o = t.fixedRowCount,
                              i = t.rowCount,
                              l = t.hideBottomLeftGridScrollbar,
                              s = this.state.showVerticalScrollbar;
                            if (!r) return null;
                            var c = s ? 1 : 0,
                              u = this._getBottomGridHeight(t),
                              d = this._getLeftGridWidth(t),
                              f = this.state.showVerticalScrollbar
                                ? this.state.scrollbarSize
                                : 0,
                              h = l ? d + f : d,
                              p = e.createElement(
                                go,
                                a({}, t, {
                                  cellRenderer:
                                    this._cellRendererBottomLeftGrid,
                                  className: this.props.classNameBottomLeftGrid,
                                  columnCount: r,
                                  deferredMeasurementCache:
                                    this
                                      ._deferredMeasurementCacheBottomLeftGrid,
                                  height: u,
                                  onScroll: n ? this._onScrollTop : void 0,
                                  ref: this._bottomLeftGridRef,
                                  rowCount: Math.max(0, i - o) + c,
                                  rowHeight: this._rowHeightBottomGrid,
                                  style: this._bottomLeftGridStyle,
                                  tabIndex: null,
                                  width: h,
                                })
                              );
                            return l
                              ? e.createElement(
                                  'div',
                                  {
                                    className: 'BottomLeftGrid_ScrollWrapper',
                                    style: _i({}, this._bottomLeftGridStyle, {
                                      height: u,
                                      width: d,
                                      overflowY: 'hidden',
                                    }),
                                  },
                                  p
                                )
                              : p;
                          },
                        },
                        {
                          key: '_renderBottomRightGrid',
                          value: function (t) {
                            var n = t.columnCount,
                              r = t.fixedColumnCount,
                              o = t.fixedRowCount,
                              i = t.rowCount,
                              l = t.scrollToColumn,
                              s = t.scrollToRow;
                            return e.createElement(
                              go,
                              a({}, t, {
                                cellRenderer: this._cellRendererBottomRightGrid,
                                className: this.props.classNameBottomRightGrid,
                                columnCount: Math.max(0, n - r),
                                columnWidth: this._columnWidthRightGrid,
                                deferredMeasurementCache:
                                  this._deferredMeasurementCacheBottomRightGrid,
                                height: this._getBottomGridHeight(t),
                                onScroll: this._onScroll,
                                onScrollbarPresenceChange:
                                  this._onScrollbarPresenceChange,
                                ref: this._bottomRightGridRef,
                                rowCount: Math.max(0, i - o),
                                rowHeight: this._rowHeightBottomGrid,
                                scrollToColumn: l - r,
                                scrollToRow: s - o,
                                style: this._bottomRightGridStyle,
                                width: this._getRightGridWidth(t),
                              })
                            );
                          },
                        },
                        {
                          key: '_renderTopLeftGrid',
                          value: function (t) {
                            var n = t.fixedColumnCount,
                              r = t.fixedRowCount;
                            return n && r
                              ? e.createElement(
                                  go,
                                  a({}, t, {
                                    className: this.props.classNameTopLeftGrid,
                                    columnCount: n,
                                    height: this._getTopGridHeight(t),
                                    ref: this._topLeftGridRef,
                                    rowCount: r,
                                    style: this._topLeftGridStyle,
                                    tabIndex: null,
                                    width: this._getLeftGridWidth(t),
                                  })
                                )
                              : null;
                          },
                        },
                        {
                          key: '_renderTopRightGrid',
                          value: function (t) {
                            var n = t.columnCount,
                              r = t.enableFixedRowScroll,
                              o = t.fixedColumnCount,
                              i = t.fixedRowCount,
                              l = t.scrollLeft,
                              s = t.hideTopRightGridScrollbar,
                              c = this.state,
                              u = c.showHorizontalScrollbar,
                              d = c.scrollbarSize;
                            if (!i) return null;
                            var f = u ? 1 : 0,
                              h = this._getTopGridHeight(t),
                              p = this._getRightGridWidth(t),
                              m = u ? d : 0,
                              v = h,
                              g = this._topRightGridStyle;
                            s &&
                              ((v = h + m),
                              (g = _i({}, this._topRightGridStyle, {
                                left: 0,
                              })));
                            var y = e.createElement(
                              go,
                              a({}, t, {
                                cellRenderer: this._cellRendererTopRightGrid,
                                className: this.props.classNameTopRightGrid,
                                columnCount: Math.max(0, n - o) + f,
                                columnWidth: this._columnWidthRightGrid,
                                deferredMeasurementCache:
                                  this._deferredMeasurementCacheTopRightGrid,
                                height: v,
                                onScroll: r ? this._onScrollLeft : void 0,
                                ref: this._topRightGridRef,
                                rowCount: i,
                                scrollLeft: l,
                                style: g,
                                tabIndex: null,
                                width: p,
                              })
                            );
                            return s
                              ? e.createElement(
                                  'div',
                                  {
                                    className: 'TopRightGrid_ScrollWrapper',
                                    style: _i({}, this._topRightGridStyle, {
                                      height: h,
                                      width: p,
                                      overflowX: 'hidden',
                                    }),
                                  },
                                  y
                                )
                              : y;
                          },
                        },
                      ],
                      [
                        {
                          key: 'getDerivedStateFromProps',
                          value: function (e, t) {
                            return e.scrollLeft !== t.scrollLeft ||
                              e.scrollTop !== t.scrollTop
                              ? {
                                  scrollLeft:
                                    null != e.scrollLeft && e.scrollLeft >= 0
                                      ? e.scrollLeft
                                      : t.scrollLeft,
                                  scrollTop:
                                    null != e.scrollTop && e.scrollTop >= 0
                                      ? e.scrollTop
                                      : t.scrollTop,
                                }
                              : null;
                          },
                        },
                      ]
                    ),
                    n
                  );
                })(e.PureComponent);
                function xi(t) {
                  var n = t.className,
                    r = t.columns,
                    o = t.style;
                  return e.createElement(
                    'div',
                    { className: n, role: 'row', style: o },
                    r
                  );
                }
                Gr(Si, 'defaultProps', {
                  classNameBottomLeftGrid: '',
                  classNameBottomRightGrid: '',
                  classNameTopLeftGrid: '',
                  classNameTopRightGrid: '',
                  enableFixedColumnScroll: !1,
                  enableFixedRowScroll: !1,
                  fixedColumnCount: 0,
                  fixedRowCount: 0,
                  scrollToColumn: -1,
                  scrollToRow: -1,
                  style: {},
                  styleBottomLeftGrid: {},
                  styleBottomRightGrid: {},
                  styleTopLeftGrid: {},
                  styleTopRightGrid: {},
                  hideTopRightGridScrollbar: !1,
                  hideBottomLeftGridScrollbar: !1,
                }),
                  (Si.propTypes = {}),
                  Vr(Si),
                  ((function (e) {
                    function t(e, n) {
                      var r;
                      return (
                        Mr(this, t),
                        ((r = Dr(this, Nr(t).call(this, e, n))).state = {
                          clientHeight: 0,
                          clientWidth: 0,
                          scrollHeight: 0,
                          scrollLeft: 0,
                          scrollTop: 0,
                          scrollWidth: 0,
                        }),
                        (r._onScroll = r._onScroll.bind(Hr(r))),
                        r
                      );
                    }
                    return (
                      Wr(t, e),
                      Lr(t, [
                        {
                          key: 'render',
                          value: function () {
                            var e = this.props.children,
                              t = this.state,
                              n = t.clientHeight,
                              r = t.clientWidth,
                              o = t.scrollHeight,
                              i = t.scrollLeft,
                              a = t.scrollTop,
                              l = t.scrollWidth;
                            return e({
                              clientHeight: n,
                              clientWidth: r,
                              onScroll: this._onScroll,
                              scrollHeight: o,
                              scrollLeft: i,
                              scrollTop: a,
                              scrollWidth: l,
                            });
                          },
                        },
                        {
                          key: '_onScroll',
                          value: function (e) {
                            var t = e.clientHeight,
                              n = e.clientWidth,
                              r = e.scrollHeight,
                              o = e.scrollLeft,
                              i = e.scrollTop,
                              a = e.scrollWidth;
                            this.setState({
                              clientHeight: t,
                              clientWidth: n,
                              scrollHeight: r,
                              scrollLeft: o,
                              scrollTop: i,
                              scrollWidth: a,
                            });
                          },
                        },
                      ]),
                      t
                    );
                  })(e.PureComponent).propTypes = {}),
                  (xi.propTypes = null);
                const Ci = 'ASC',
                  Oi = 'DESC';
                function Ri(t) {
                  var n = t.sortDirection,
                    r = Zr('ReactVirtualized__Table__sortableHeaderIcon', {
                      'ReactVirtualized__Table__sortableHeaderIcon--ASC':
                        n === Ci,
                      'ReactVirtualized__Table__sortableHeaderIcon--DESC':
                        n === Oi,
                    });
                  return e.createElement(
                    'svg',
                    {
                      className: r,
                      width: 18,
                      height: 18,
                      viewBox: '0 0 24 24',
                    },
                    n === Ci
                      ? e.createElement('path', { d: 'M7 14l5-5 5 5z' })
                      : e.createElement('path', { d: 'M7 10l5 5 5-5z' }),
                    e.createElement('path', {
                      d: 'M0 0h24v24H0z',
                      fill: 'none',
                    })
                  );
                }
                function Ti(t) {
                  var n = t.dataKey,
                    r = t.label,
                    o = t.sortBy,
                    i = t.sortDirection,
                    a = o === n,
                    l = [
                      e.createElement(
                        'span',
                        {
                          className:
                            'ReactVirtualized__Table__headerTruncatedText',
                          key: 'label',
                          title: 'string' == typeof r ? r : null,
                        },
                        r
                      ),
                    ];
                  return (
                    a &&
                      l.push(
                        e.createElement(Ri, {
                          key: 'SortIndicator',
                          sortDirection: i,
                        })
                      ),
                    l
                  );
                }
                function Pi(t) {
                  var n = t.className,
                    r = t.columns,
                    o = t.index,
                    i = t.key,
                    l = t.onRowClick,
                    s = t.onRowDoubleClick,
                    c = t.onRowMouseOut,
                    u = t.onRowMouseOver,
                    d = t.onRowRightClick,
                    f = t.rowData,
                    h = t.style,
                    p = { 'aria-rowindex': o + 1 };
                  return (
                    (l || s || c || u || d) &&
                      ((p['aria-label'] = 'row'),
                      (p.tabIndex = 0),
                      l &&
                        (p.onClick = function (e) {
                          return l({ event: e, index: o, rowData: f });
                        }),
                      s &&
                        (p.onDoubleClick = function (e) {
                          return s({ event: e, index: o, rowData: f });
                        }),
                      c &&
                        (p.onMouseOut = function (e) {
                          return c({ event: e, index: o, rowData: f });
                        }),
                      u &&
                        (p.onMouseOver = function (e) {
                          return u({ event: e, index: o, rowData: f });
                        }),
                      d &&
                        (p.onContextMenu = function (e) {
                          return d({ event: e, index: o, rowData: f });
                        })),
                    e.createElement(
                      'div',
                      a({}, p, { className: n, key: i, role: 'row', style: h }),
                      r
                    )
                  );
                }
                (Ri.propTypes = {}),
                  (Ti.propTypes = null),
                  (Pi.propTypes = null);
                var zi = (function (e) {
                  function t() {
                    return Mr(this, t), Dr(this, Nr(t).apply(this, arguments));
                  }
                  return Wr(t, e), t;
                })(e.Component);
                function ki(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                function Ii(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? ki(n, !0).forEach(function (t) {
                          Gr(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : ki(n).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                }
                Gr(zi, 'defaultProps', {
                  cellDataGetter: function (e) {
                    var t = e.dataKey,
                      n = e.rowData;
                    return 'function' == typeof n.get ? n.get(t) : n[t];
                  },
                  cellRenderer: function (e) {
                    var t = e.cellData;
                    return null == t ? '' : String(t);
                  },
                  defaultSortDirection: Ci,
                  flexGrow: 0,
                  flexShrink: 1,
                  headerRenderer: Ti,
                  style: {},
                }),
                  (zi.propTypes = {});
                var Ei = (function (t) {
                  function n(e) {
                    var t;
                    return (
                      Mr(this, n),
                      ((t = Dr(this, Nr(n).call(this, e))).state = {
                        scrollbarWidth: 0,
                      }),
                      (t._createColumn = t._createColumn.bind(Hr(t))),
                      (t._createRow = t._createRow.bind(Hr(t))),
                      (t._onScroll = t._onScroll.bind(Hr(t))),
                      (t._onSectionRendered = t._onSectionRendered.bind(Hr(t))),
                      (t._setRef = t._setRef.bind(Hr(t))),
                      t
                    );
                  }
                  return (
                    Wr(n, t),
                    Lr(n, [
                      {
                        key: 'forceUpdateGrid',
                        value: function () {
                          this.Grid && this.Grid.forceUpdate();
                        },
                      },
                      {
                        key: 'getOffsetForRow',
                        value: function (e) {
                          var t = e.alignment,
                            n = e.index;
                          return this.Grid
                            ? this.Grid.getOffsetForCell({
                                alignment: t,
                                rowIndex: n,
                              }).scrollTop
                            : 0;
                        },
                      },
                      {
                        key: 'invalidateCellSizeAfterRender',
                        value: function (e) {
                          var t = e.columnIndex,
                            n = e.rowIndex;
                          this.Grid &&
                            this.Grid.invalidateCellSizeAfterRender({
                              rowIndex: n,
                              columnIndex: t,
                            });
                        },
                      },
                      {
                        key: 'measureAllRows',
                        value: function () {
                          this.Grid && this.Grid.measureAllCells();
                        },
                      },
                      {
                        key: 'recomputeGridSize',
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t = e.columnIndex,
                            n = void 0 === t ? 0 : t,
                            r = e.rowIndex,
                            o = void 0 === r ? 0 : r;
                          this.Grid &&
                            this.Grid.recomputeGridSize({
                              rowIndex: o,
                              columnIndex: n,
                            });
                        },
                      },
                      {
                        key: 'recomputeRowHeights',
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0;
                          this.Grid &&
                            this.Grid.recomputeGridSize({ rowIndex: e });
                        },
                      },
                      {
                        key: 'scrollToPosition',
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0;
                          this.Grid &&
                            this.Grid.scrollToPosition({ scrollTop: e });
                        },
                      },
                      {
                        key: 'scrollToRow',
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0;
                          this.Grid &&
                            this.Grid.scrollToCell({
                              columnIndex: 0,
                              rowIndex: e,
                            });
                        },
                      },
                      {
                        key: 'getScrollbarWidth',
                        value: function () {
                          if (this.Grid) {
                            var e = (0, r.findDOMNode)(this.Grid),
                              t = e.clientWidth || 0;
                            return (e.offsetWidth || 0) - t;
                          }
                          return 0;
                        },
                      },
                      {
                        key: 'componentDidMount',
                        value: function () {
                          this._setScrollbarWidth();
                        },
                      },
                      {
                        key: 'componentDidUpdate',
                        value: function () {
                          this._setScrollbarWidth();
                        },
                      },
                      {
                        key: 'render',
                        value: function () {
                          var t = this,
                            n = this.props,
                            r = n.children,
                            o = n.className,
                            i = n.disableHeader,
                            l = n.gridClassName,
                            s = n.gridStyle,
                            c = n.headerHeight,
                            u = n.headerRowRenderer,
                            d = n.height,
                            f = n.id,
                            h = n.noRowsRenderer,
                            p = n.rowClassName,
                            m = n.rowStyle,
                            v = n.scrollToIndex,
                            g = n.style,
                            y = n.width,
                            b = this.state.scrollbarWidth,
                            w = i ? d : d - c,
                            _ = 'function' == typeof p ? p({ index: -1 }) : p,
                            S = 'function' == typeof m ? m({ index: -1 }) : m;
                          return (
                            (this._cachedColumnStyles = []),
                            e.Children.toArray(r).forEach(function (e, n) {
                              var r = t._getFlexStyleForColumn(
                                e,
                                e.props.style
                              );
                              t._cachedColumnStyles[n] = Ii(
                                { overflow: 'hidden' },
                                r
                              );
                            }),
                            e.createElement(
                              'div',
                              {
                                'aria-label': this.props['aria-label'],
                                'aria-labelledby':
                                  this.props['aria-labelledby'],
                                'aria-colcount': e.Children.toArray(r).length,
                                'aria-rowcount': this.props.rowCount,
                                className: Zr('ReactVirtualized__Table', o),
                                id: f,
                                role: 'grid',
                                style: g,
                              },
                              !i &&
                                u({
                                  className: Zr(
                                    'ReactVirtualized__Table__headerRow',
                                    _
                                  ),
                                  columns: this._getHeaderColumns(),
                                  style: Ii(
                                    {
                                      height: c,
                                      overflow: 'hidden',
                                      paddingRight: b,
                                      width: y,
                                    },
                                    S
                                  ),
                                }),
                              e.createElement(
                                go,
                                a({}, this.props, {
                                  'aria-readonly': null,
                                  autoContainerWidth: !0,
                                  className: Zr(
                                    'ReactVirtualized__Table__Grid',
                                    l
                                  ),
                                  cellRenderer: this._createRow,
                                  columnWidth: y,
                                  columnCount: 1,
                                  height: w,
                                  id: void 0,
                                  noContentRenderer: h,
                                  onScroll: this._onScroll,
                                  onSectionRendered: this._onSectionRendered,
                                  ref: this._setRef,
                                  role: 'rowgroup',
                                  scrollbarWidth: b,
                                  scrollToRow: v,
                                  style: Ii({}, s, { overflowX: 'hidden' }),
                                })
                              )
                            )
                          );
                        },
                      },
                      {
                        key: '_createColumn',
                        value: function (t) {
                          var n = t.column,
                            r = t.columnIndex,
                            o = t.isScrolling,
                            i = t.parent,
                            a = t.rowData,
                            l = t.rowIndex,
                            s = this.props.onColumnClick,
                            c = n.props,
                            u = c.cellDataGetter,
                            d = c.cellRenderer,
                            f = c.className,
                            h = c.columnData,
                            p = c.dataKey,
                            m = c.id,
                            v = d({
                              cellData: u({
                                columnData: h,
                                dataKey: p,
                                rowData: a,
                              }),
                              columnData: h,
                              columnIndex: r,
                              dataKey: p,
                              isScrolling: o,
                              parent: i,
                              rowData: a,
                              rowIndex: l,
                            }),
                            g = this._cachedColumnStyles[r],
                            y = 'string' == typeof v ? v : null;
                          return e.createElement(
                            'div',
                            {
                              'aria-colindex': r + 1,
                              'aria-describedby': m,
                              className: Zr(
                                'ReactVirtualized__Table__rowColumn',
                                f
                              ),
                              key: 'Row' + l + '-Col' + r,
                              onClick: function (e) {
                                s && s({ columnData: h, dataKey: p, event: e });
                              },
                              role: 'gridcell',
                              style: g,
                              title: y,
                            },
                            v
                          );
                        },
                      },
                      {
                        key: '_createHeader',
                        value: function (t) {
                          var n,
                            r,
                            o,
                            i,
                            a,
                            l = t.column,
                            s = t.index,
                            c = this.props,
                            u = c.headerClassName,
                            d = c.headerStyle,
                            f = c.onHeaderClick,
                            h = c.sort,
                            p = c.sortBy,
                            m = c.sortDirection,
                            v = l.props,
                            g = v.columnData,
                            y = v.dataKey,
                            b = v.defaultSortDirection,
                            w = v.disableSort,
                            _ = v.headerRenderer,
                            S = v.id,
                            x = v.label,
                            C = !w && h,
                            O = Zr(
                              'ReactVirtualized__Table__headerColumn',
                              u,
                              l.props.headerClassName,
                              {
                                ReactVirtualized__Table__sortableHeaderColumn:
                                  C,
                              }
                            ),
                            R = this._getFlexStyleForColumn(
                              l,
                              Ii({}, d, {}, l.props.headerStyle)
                            ),
                            T = _({
                              columnData: g,
                              dataKey: y,
                              disableSort: w,
                              label: x,
                              sortBy: p,
                              sortDirection: m,
                            });
                          if (C || f) {
                            var P = p !== y ? b : m === Oi ? Ci : Oi,
                              z = function (e) {
                                C &&
                                  h({
                                    defaultSortDirection: b,
                                    event: e,
                                    sortBy: y,
                                    sortDirection: P,
                                  }),
                                  f &&
                                    f({ columnData: g, dataKey: y, event: e });
                              };
                            (a = l.props['aria-label'] || x || y),
                              (i = 'none'),
                              (o = 0),
                              (n = z),
                              (r = function (e) {
                                ('Enter' !== e.key && ' ' !== e.key) || z(e);
                              });
                          }
                          return (
                            p === y &&
                              (i = m === Ci ? 'ascending' : 'descending'),
                            e.createElement(
                              'div',
                              {
                                'aria-label': a,
                                'aria-sort': i,
                                className: O,
                                id: S,
                                key: 'Header-Col' + s,
                                onClick: n,
                                onKeyDown: r,
                                role: 'columnheader',
                                style: R,
                                tabIndex: o,
                              },
                              T
                            )
                          );
                        },
                      },
                      {
                        key: '_createRow',
                        value: function (t) {
                          var n = this,
                            r = t.rowIndex,
                            o = t.isScrolling,
                            i = t.key,
                            a = t.parent,
                            l = t.style,
                            s = this.props,
                            c = s.children,
                            u = s.onRowClick,
                            d = s.onRowDoubleClick,
                            f = s.onRowRightClick,
                            h = s.onRowMouseOver,
                            p = s.onRowMouseOut,
                            m = s.rowClassName,
                            v = s.rowGetter,
                            g = s.rowRenderer,
                            y = s.rowStyle,
                            b = this.state.scrollbarWidth,
                            w = 'function' == typeof m ? m({ index: r }) : m,
                            _ = 'function' == typeof y ? y({ index: r }) : y,
                            S = v({ index: r }),
                            x = e.Children.toArray(c).map(function (e, t) {
                              return n._createColumn({
                                column: e,
                                columnIndex: t,
                                isScrolling: o,
                                parent: a,
                                rowData: S,
                                rowIndex: r,
                                scrollbarWidth: b,
                              });
                            }),
                            C = Zr('ReactVirtualized__Table__row', w),
                            O = Ii(
                              {},
                              l,
                              {
                                height: this._getRowHeight(r),
                                overflow: 'hidden',
                                paddingRight: b,
                              },
                              _
                            );
                          return g({
                            className: C,
                            columns: x,
                            index: r,
                            isScrolling: o,
                            key: i,
                            onRowClick: u,
                            onRowDoubleClick: d,
                            onRowRightClick: f,
                            onRowMouseOver: h,
                            onRowMouseOut: p,
                            rowData: S,
                            style: O,
                          });
                        },
                      },
                      {
                        key: '_getFlexStyleForColumn',
                        value: function (e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            n = ''
                              .concat(e.props.flexGrow, ' ')
                              .concat(e.props.flexShrink, ' ')
                              .concat(e.props.width, 'px'),
                            r = Ii({}, t, {
                              flex: n,
                              msFlex: n,
                              WebkitFlex: n,
                            });
                          return (
                            e.props.maxWidth && (r.maxWidth = e.props.maxWidth),
                            e.props.minWidth && (r.minWidth = e.props.minWidth),
                            r
                          );
                        },
                      },
                      {
                        key: '_getHeaderColumns',
                        value: function () {
                          var t = this,
                            n = this.props,
                            r = n.children;
                          return (
                            n.disableHeader ? [] : e.Children.toArray(r)
                          ).map(function (e, n) {
                            return t._createHeader({ column: e, index: n });
                          });
                        },
                      },
                      {
                        key: '_getRowHeight',
                        value: function (e) {
                          var t = this.props.rowHeight;
                          return 'function' == typeof t ? t({ index: e }) : t;
                        },
                      },
                      {
                        key: '_onScroll',
                        value: function (e) {
                          var t = e.clientHeight,
                            n = e.scrollHeight,
                            r = e.scrollTop;
                          (0, this.props.onScroll)({
                            clientHeight: t,
                            scrollHeight: n,
                            scrollTop: r,
                          });
                        },
                      },
                      {
                        key: '_onSectionRendered',
                        value: function (e) {
                          var t = e.rowOverscanStartIndex,
                            n = e.rowOverscanStopIndex,
                            r = e.rowStartIndex,
                            o = e.rowStopIndex;
                          (0, this.props.onRowsRendered)({
                            overscanStartIndex: t,
                            overscanStopIndex: n,
                            startIndex: r,
                            stopIndex: o,
                          });
                        },
                      },
                      {
                        key: '_setRef',
                        value: function (e) {
                          this.Grid = e;
                        },
                      },
                      {
                        key: '_setScrollbarWidth',
                        value: function () {
                          var e = this.getScrollbarWidth();
                          this.setState({ scrollbarWidth: e });
                        },
                      },
                    ]),
                    n
                  );
                })(e.PureComponent);
                Gr(Ei, 'defaultProps', {
                  disableHeader: !1,
                  estimatedRowSize: 30,
                  headerHeight: 0,
                  headerStyle: {},
                  noRowsRenderer: function () {
                    return null;
                  },
                  onRowsRendered: function () {
                    return null;
                  },
                  onScroll: function () {
                    return null;
                  },
                  overscanIndicesGetter: yo,
                  overscanRowCount: 10,
                  rowRenderer: Pi,
                  headerRowRenderer: xi,
                  rowStyle: {},
                  scrollToAlignment: 'auto',
                  scrollToIndex: -1,
                  style: {},
                }),
                  (Ei.propTypes = {});
                var Mi = [],
                  Ai = null,
                  Li = null;
                function ji() {
                  Li &&
                    ((Li = null),
                    document.body &&
                      null != Ai &&
                      (document.body.style.pointerEvents = Ai),
                    (Ai = null));
                }
                function Hi() {
                  ji(),
                    Mi.forEach(function (e) {
                      return e.__resetIsScrolling();
                    });
                }
                function Di(e) {
                  e.currentTarget === window &&
                    null == Ai &&
                    document.body &&
                    ((Ai = document.body.style.pointerEvents),
                    (document.body.style.pointerEvents = 'none')),
                    (function () {
                      Li && uo(Li);
                      var e = 0;
                      Mi.forEach(function (t) {
                        e = Math.max(e, t.props.scrollingResetTimeInterval);
                      }),
                        (Li = fo(Hi, e));
                    })(),
                    Mi.forEach(function (t) {
                      t.props.scrollElement === e.currentTarget &&
                        t.__handleWindowScrollEvent();
                    });
                }
                function Ni(e, t) {
                  Mi.some(function (e) {
                    return e.props.scrollElement === t;
                  }) || t.addEventListener('scroll', Di),
                    Mi.push(e);
                }
                function Wi(e, t) {
                  (Mi = Mi.filter(function (t) {
                    return t !== e;
                  })).length ||
                    (t.removeEventListener('scroll', Di), Li && (uo(Li), ji()));
                }
                var Gi,
                  Fi,
                  Ui = function (e) {
                    return e === window;
                  },
                  Bi = function (e) {
                    return e.getBoundingClientRect();
                  };
                function Vi(e, t) {
                  if (e) {
                    if (Ui(e)) {
                      var n = window,
                        r = n.innerHeight,
                        o = n.innerWidth;
                      return {
                        height: 'number' == typeof r ? r : 0,
                        width: 'number' == typeof o ? o : 0,
                      };
                    }
                    return Bi(e);
                  }
                  return { height: t.serverHeight, width: t.serverWidth };
                }
                function qi(e, t) {
                  if (Ui(t) && document.documentElement) {
                    var n = document.documentElement,
                      r = Bi(e),
                      o = Bi(n);
                    return { top: r.top - o.top, left: r.left - o.left };
                  }
                  var i = Zi(t),
                    a = Bi(e),
                    l = Bi(t);
                  return {
                    top: a.top + i.top - l.top,
                    left: a.left + i.left - l.left,
                  };
                }
                function Zi(e) {
                  return Ui(e) && document.documentElement
                    ? {
                        top:
                          'scrollY' in window
                            ? window.scrollY
                            : document.documentElement.scrollTop,
                        left:
                          'scrollX' in window
                            ? window.scrollX
                            : document.documentElement.scrollLeft,
                      }
                    : { top: e.scrollTop, left: e.scrollLeft };
                }
                function Yi(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                function Xi(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? Yi(n, !0).forEach(function (t) {
                          Gr(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : Yi(n).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                }
                var Ji = function () {
                    return 'undefined' != typeof window ? window : void 0;
                  },
                  Ki =
                    ((Fi = Gi =
                      (function (e) {
                        function t() {
                          var e, n;
                          Mr(this, t);
                          for (
                            var r = arguments.length, o = new Array(r), i = 0;
                            i < r;
                            i++
                          )
                            o[i] = arguments[i];
                          return (
                            Gr(
                              Hr(
                                (n = Dr(
                                  this,
                                  (e = Nr(t)).call.apply(e, [this].concat(o))
                                ))
                              ),
                              '_window',
                              Ji()
                            ),
                            Gr(Hr(n), '_isMounted', !1),
                            Gr(Hr(n), '_positionFromTop', 0),
                            Gr(Hr(n), '_positionFromLeft', 0),
                            Gr(Hr(n), '_detectElementResize', void 0),
                            Gr(Hr(n), '_child', void 0),
                            Gr(
                              Hr(n),
                              'state',
                              Xi({}, Vi(n.props.scrollElement, n.props), {
                                isScrolling: !1,
                                scrollLeft: 0,
                                scrollTop: 0,
                              })
                            ),
                            Gr(Hr(n), '_registerChild', function (e) {
                              !e ||
                                e instanceof Element ||
                                console.warn(
                                  'WindowScroller registerChild expects to be passed Element or null'
                                ),
                                (n._child = e),
                                n.updatePosition();
                            }),
                            Gr(Hr(n), '_onChildScroll', function (e) {
                              var t = e.scrollTop;
                              if (n.state.scrollTop !== t) {
                                var r = n.props.scrollElement;
                                r &&
                                  ('function' == typeof r.scrollTo
                                    ? r.scrollTo(0, t + n._positionFromTop)
                                    : (r.scrollTop = t + n._positionFromTop));
                              }
                            }),
                            Gr(Hr(n), '_registerResizeListener', function (e) {
                              e === window
                                ? window.addEventListener(
                                    'resize',
                                    n._onResize,
                                    !1
                                  )
                                : n._detectElementResize.addResizeListener(
                                    e,
                                    n._onResize
                                  );
                            }),
                            Gr(
                              Hr(n),
                              '_unregisterResizeListener',
                              function (e) {
                                e === window
                                  ? window.removeEventListener(
                                      'resize',
                                      n._onResize,
                                      !1
                                    )
                                  : e &&
                                    n._detectElementResize.removeResizeListener(
                                      e,
                                      n._onResize
                                    );
                              }
                            ),
                            Gr(Hr(n), '_onResize', function () {
                              n.updatePosition();
                            }),
                            Gr(Hr(n), '__handleWindowScrollEvent', function () {
                              if (n._isMounted) {
                                var e = n.props.onScroll,
                                  t = n.props.scrollElement;
                                if (t) {
                                  var r = Zi(t),
                                    o = Math.max(
                                      0,
                                      r.left - n._positionFromLeft
                                    ),
                                    i = Math.max(0, r.top - n._positionFromTop);
                                  n.setState({
                                    isScrolling: !0,
                                    scrollLeft: o,
                                    scrollTop: i,
                                  }),
                                    e({ scrollLeft: o, scrollTop: i });
                                }
                              }
                            }),
                            Gr(Hr(n), '__resetIsScrolling', function () {
                              n.setState({ isScrolling: !1 });
                            }),
                            n
                          );
                        }
                        return (
                          Wr(t, e),
                          Lr(t, [
                            {
                              key: 'updatePosition',
                              value: function () {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : this.props.scrollElement,
                                  t = this.props.onResize,
                                  n = this.state,
                                  o = n.height,
                                  i = n.width,
                                  a = this._child || r.findDOMNode(this);
                                if (a instanceof Element && e) {
                                  var l = qi(a, e);
                                  (this._positionFromTop = l.top),
                                    (this._positionFromLeft = l.left);
                                }
                                var s = Vi(e, this.props);
                                (o === s.height && i === s.width) ||
                                  (this.setState({
                                    height: s.height,
                                    width: s.width,
                                  }),
                                  t({ height: s.height, width: s.width }));
                              },
                            },
                            {
                              key: 'componentDidMount',
                              value: function () {
                                var e = this.props.scrollElement;
                                (this._detectElementResize = Oo()),
                                  this.updatePosition(e),
                                  e &&
                                    (Ni(this, e),
                                    this._registerResizeListener(e)),
                                  (this._isMounted = !0);
                              },
                            },
                            {
                              key: 'componentDidUpdate',
                              value: function (e, t) {
                                var n = this.props.scrollElement,
                                  r = e.scrollElement;
                                r !== n &&
                                  null != r &&
                                  null != n &&
                                  (this.updatePosition(n),
                                  Wi(this, r),
                                  Ni(this, n),
                                  this._unregisterResizeListener(r),
                                  this._registerResizeListener(n));
                              },
                            },
                            {
                              key: 'componentWillUnmount',
                              value: function () {
                                var e = this.props.scrollElement;
                                e &&
                                  (Wi(this, e),
                                  this._unregisterResizeListener(e)),
                                  (this._isMounted = !1);
                              },
                            },
                            {
                              key: 'render',
                              value: function () {
                                var e = this.props.children,
                                  t = this.state,
                                  n = t.isScrolling,
                                  r = t.scrollTop,
                                  o = t.scrollLeft,
                                  i = t.height,
                                  a = t.width;
                                return e({
                                  onChildScroll: this._onChildScroll,
                                  registerChild: this._registerChild,
                                  height: i,
                                  isScrolling: n,
                                  scrollLeft: o,
                                  scrollTop: r,
                                  width: a,
                                });
                              },
                            },
                          ]),
                          t
                        );
                      })(e.PureComponent)),
                    Gr(Gi, 'propTypes', null),
                    Fi);
                function $i(e) {
                  return ($i =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
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
                function Qi(e, t, n, r, o, i, a) {
                  try {
                    var l = e[i](a),
                      s = l.value;
                  } catch (e) {
                    return void n(e);
                  }
                  l.done ? t(s) : Promise.resolve(s).then(r, o);
                }
                function ea(e) {
                  return function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (r, o) {
                      var i = e.apply(t, n);
                      function a(e) {
                        Qi(i, r, o, a, l, 'next', e);
                      }
                      function l(e) {
                        Qi(i, r, o, a, l, 'throw', e);
                      }
                      a(void 0);
                    });
                  };
                }
                function ta(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                function na(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? ta(Object(n), !0).forEach(function (t) {
                          la(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : ta(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                }
                function ra(e, t) {
                  return (ra = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                        return (e.__proto__ = t), e;
                      })(e, t);
                }
                function oa(e, t) {
                  if (t && ('object' === $i(t) || 'function' == typeof t))
                    return t;
                  if (void 0 !== t)
                    throw new TypeError(
                      'Derived constructors may only return object or undefined'
                    );
                  return ia(e);
                }
                function ia(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                }
                function aa(e) {
                  return (aa = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
                }
                function la(e, t, n) {
                  return (
                    (t = sa(t)) in e
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
                function sa(e) {
                  var t = (function (e, t) {
                    if ('object' !== $i(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var r = n.call(e, 'string');
                      if ('object' !== $i(r)) return r;
                      throw new TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return String(e);
                  })(e);
                  return 'symbol' === $i(t) ? t : String(t);
                }
                Gr(Ki, 'defaultProps', {
                  onResize: function () {},
                  onScroll: function () {},
                  scrollingResetTimeInterval: 150,
                  scrollElement: Ji(),
                  serverHeight: 0,
                  serverWidth: 0,
                });
                var ca = 'reader-mode-list',
                  ua = (function (e) {
                    !(function (e, t) {
                      if ('function' != typeof t && null !== t)
                        throw new TypeError(
                          'Super expression must either be null or a function'
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        Object.defineProperty(e, 'prototype', { writable: !1 }),
                        t && ra(e, t);
                    })(c, e);
                    var n,
                      r,
                      o,
                      i,
                      a,
                      l,
                      s =
                        ((a = c),
                        (l = (function () {
                          if (
                            'undefined' == typeof Reflect ||
                            !Reflect.construct
                          )
                            return !1;
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
                        })()),
                        function () {
                          var e,
                            t = aa(a);
                          if (l) {
                            var n = aa(this).constructor;
                            e = Reflect.construct(t, arguments, n);
                          } else e = t.apply(this, arguments);
                          return oa(this, e);
                        });
                    function c(e) {
                      var n;
                      return (
                        (function (e, t) {
                          if (!(e instanceof t))
                            throw new TypeError(
                              'Cannot call a class as a function'
                            );
                        })(this, c),
                        la(
                          ia((n = s.call(this, e))),
                          'rowRenderer',
                          function (e) {
                            var r = e.key,
                              o = e.index,
                              i = e.style,
                              a = e.parent;
                            return t().createElement(
                              Io,
                              {
                                cache: n.cache,
                                columnIndex: 0,
                                key: r,
                                parent: a,
                                rowIndex: o,
                              },
                              function (e) {
                                var r,
                                  l = e.registerChild;
                                return t().createElement(
                                  'div',
                                  {
                                    ref: l,
                                    style: i,
                                    id: ((r = o + 1), 'rm-page-'.concat(r)),
                                  },
                                  n.state.pages[o].loaded &&
                                    t().createElement(Er, {
                                      page: n.state.pages[o],
                                      index: o,
                                      zoom: n.state.zoom,
                                      clickLinkHandler: n.handleLinkClicked,
                                      parent: a,
                                      onResetHeight: n.onResetHeight,
                                      getViewerElement: n.getViewerElement,
                                    })
                                );
                              }
                            );
                          }
                        ),
                        la(ia(n), 'setListRef', function (e, t) {
                          e && !n.listRef && ((n.listRef = e), t(e));
                        }),
                        la(ia(n), 'onResize', function (e) {
                          var t = e.bounds;
                          n.setState({ dimensions: t }),
                            n.initialized && (n.resizeSpinner(), n.resize());
                        }),
                        la(ia(n), 'isRowLoaded', function (e) {
                          var t = e.index;
                          return (
                            t < n.state.pages.length && n.state.pages[t].loaded
                          );
                        }),
                        la(ia(n), 'loadMoreRows', function (e) {
                          var t = e.startIndex,
                            r = e.stopIndex;
                          return (
                            (n.nextLoadTask = { startIndex: t, stopIndex: r }),
                            n.isLoading ||
                              ((n.loadPromise = n.loadRows()),
                              (n.isLoading = !0)),
                            n.loadPromise
                          );
                        }),
                        la(ia(n), 'onResetHeight', function (e, t, r, o) {
                          if (n.isResettingHeight)
                            setTimeout(function () {
                              n.onResetHeight(e, t, r, o);
                            }, 50);
                          else {
                            n.isResettingHeight = !0;
                            var i = n.cache.getHeight(e - 1, 0);
                            if (t && t !== i) {
                              var a;
                              n.spinnerTimer
                                ? n._stopSpinnerTimer()
                                : n.setState({ showSpinner: !0 });
                              var l = 0,
                                s = document.getElementById(ca);
                              for (
                                a = 0;
                                a < n.state.pages.length && s.scrollTop > 0;
                                a++
                              ) {
                                var c = n.cache.getHeight(a);
                                if (l <= s.scrollTop && l + c >= s.scrollTop) {
                                  a++;
                                  break;
                                }
                                l += c;
                              }
                              var u = -1;
                              0 === a
                                ? (u = 0)
                                : a > e
                                  ? (u = s.scrollTop - i + t)
                                  : a === e &&
                                    (u = l + ((s.scrollTop - l) / i) * t),
                                n.cache.set(
                                  e - 1,
                                  0,
                                  n.cache.getWidth(e - 1, 0),
                                  t
                                ),
                                r &&
                                  'function' == typeof r.recomputeGridSize &&
                                  r.recomputeGridSize({
                                    columnIndex: 0,
                                    rowIndex: e - 1,
                                  }),
                                u >= 0
                                  ? setTimeout(function () {
                                      n.listRef.scrollToPosition(u),
                                        setTimeout(function () {
                                          n._finishResetHeight(o);
                                        }, 50);
                                    }, 50)
                                  : n._finishResetHeight(o);
                            } else n._finishResetHeight(o, !1);
                          }
                        }),
                        (n.state = na(
                          na({}, n.state),
                          {},
                          { dimensions: { width: 0, height: 0 } }
                        )),
                        (n.isLoading = !1),
                        (n.pageNum = 1),
                        (n.nextLoadTask = void 0),
                        (n.loadPromise = void 0),
                        (n.listRef = void 0),
                        (n.cache = new Eo({
                          defaultHeight: 800,
                          fixedWidth: !0,
                        })),
                        (n.isResettingHeight = !1),
                        (n.spinnerTimer = void 0),
                        (n.handlePageNumberUpdated = _.debounce(
                          n.handlePageNumberUpdated.bind(ia(n)),
                          300
                        )),
                        (n.resize = _.throttle(n.resize.bind(ia(n)), 300)),
                        (n.handleZoomUpdated = _.throttle(
                          n.handleZoomUpdated.bind(ia(n)),
                          300
                        )),
                        (n.onScroll = _.throttle(n.onScroll.bind(ia(n)), 300, {
                          leading: !1,
                        })),
                        n
                      );
                    }
                    return (
                      (n = c),
                      (r = [
                        {
                          key: 'render',
                          value: function () {
                            var e = this;
                            return t().createElement(
                              H,
                              { bounds: !0, onResize: this.onResize },
                              function (n) {
                                var r = n.measureRef;
                                return t().createElement(
                                  'div',
                                  {
                                    id: D,
                                    style: { overflow: 'hidden' },
                                    ref: r,
                                  },
                                  t().createElement(
                                    'div',
                                    {
                                      className:
                                        'reader-mode-spinner-wrapper ' +
                                        (e.state.showSpinner ? '' : 'hidden'),
                                      style: e.state.spinnerStyle,
                                    },
                                    t().createElement('div', {
                                      className: 'reader-mode-spinner',
                                    })
                                  ),
                                  e.state.pages.length > 0 &&
                                    t().createElement(
                                      qo,
                                      {
                                        isRowLoaded: e.isRowLoaded,
                                        loadMoreRows: e.loadMoreRows,
                                        rowCount: e.state.pages.length,
                                        threshold: 1,
                                        minimumBatchSize: 1,
                                      },
                                      function (n) {
                                        var r = n.onRowsRendered,
                                          o = n.registerChild;
                                        return t().createElement(Xo, {
                                          onRowsRendered: r,
                                          ref: function (t) {
                                            return e.setListRef(t, o);
                                          },
                                          width: e.state.dimensions.width,
                                          height: e.state.dimensions.height,
                                          rowCount: e.state.pages.length,
                                          rowRenderer: e.rowRenderer,
                                          rowHeight: e.cache.rowHeight,
                                          deferredMeasurementCache: e.cache,
                                          zoom: e.state.zoom,
                                          onScroll: e.onScroll,
                                          id: ca,
                                        });
                                      }
                                    )
                                );
                              }
                            );
                          },
                        },
                        {
                          key: 'initializePages',
                          value:
                            ((i = ea(
                              regeneratorRuntime.mark(function e(t) {
                                var n, r;
                                return regeneratorRuntime.wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          for (n = [], r = 0; r < t; r++)
                                            n.push({ content: '', loaded: !1 }),
                                              this.cache.set(
                                                r,
                                                0,
                                                this.cache.getWidth(r, 0),
                                                800
                                              );
                                          this.setState({ pages: n });
                                        case 3:
                                        case 'end':
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this
                                );
                              })
                            )),
                            function (e) {
                              return i.apply(this, arguments);
                            }),
                        },
                        {
                          key: 'loadRows',
                          value:
                            ((o = ea(
                              regeneratorRuntime.mark(function e() {
                                var t = this;
                                return regeneratorRuntime.wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (this.nextLoadTask) {
                                            e.next = 3;
                                            break;
                                          }
                                          return (
                                            (this.isLoading = !1),
                                            e.abrupt('return')
                                          );
                                        case 3:
                                          return (
                                            (e.next = 5),
                                            new Promise(function (e) {
                                              var n = (function () {
                                                var n = ea(
                                                  regeneratorRuntime.mark(
                                                    function n() {
                                                      var r, o, i, a, l, s;
                                                      return regeneratorRuntime.wrap(
                                                        function (n) {
                                                          for (;;)
                                                            switch (
                                                              (n.prev = n.next)
                                                            ) {
                                                              case 0:
                                                                (r =
                                                                  t.nextLoadTask),
                                                                  (o =
                                                                    r.startIndex),
                                                                  (i =
                                                                    r.stopIndex),
                                                                  (t.nextLoadTask =
                                                                    void 0),
                                                                  (a = o);
                                                              case 3:
                                                                if (!(a <= i)) {
                                                                  n.next = 14;
                                                                  break;
                                                                }
                                                                if (
                                                                  t.state.pages[
                                                                    a
                                                                  ].loaded
                                                                ) {
                                                                  n.next = 11;
                                                                  break;
                                                                }
                                                                return (
                                                                  (n.next = 7),
                                                                  t.getPageContent(
                                                                    a
                                                                  )
                                                                );
                                                              case 7:
                                                                (l = n.sent),
                                                                  (s =
                                                                    l.htmlStr),
                                                                  (t.state.pages[
                                                                    a
                                                                  ].content =
                                                                    s),
                                                                  (t.state.pages[
                                                                    a
                                                                  ].loaded =
                                                                    !0);
                                                              case 11:
                                                                a++,
                                                                  (n.next = 3);
                                                                break;
                                                              case 14:
                                                                e();
                                                              case 15:
                                                              case 'end':
                                                                return n.stop();
                                                            }
                                                        },
                                                        n
                                                      );
                                                    }
                                                  )
                                                );
                                                return function () {
                                                  return n.apply(
                                                    this,
                                                    arguments
                                                  );
                                                };
                                              })();
                                              t.runPdfNetTask(n);
                                            })
                                          );
                                        case 5:
                                          return (e.next = 7), this.loadRows();
                                        case 7:
                                        case 'end':
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this
                                );
                              })
                            )),
                            function () {
                              return o.apply(this, arguments);
                            }),
                        },
                        {
                          key: 'resize',
                          value: function () {
                            this._startSpinnerTimer(),
                              this.state.showSpinner ||
                                this.setState({ showSpinner: !0 });
                            for (var e = 0; e < this.state.pages.length; e++)
                              if (this.state.pages[e].loaded) {
                                var t =
                                  ((r = e), document.getElementById(re(r + 1)));
                                if (t) {
                                  var n = new CustomEvent(N);
                                  t.dispatchEvent(n);
                                }
                              }
                            var r;
                          },
                        },
                        {
                          key: 'jumpToPage',
                          value: function (e) {
                            this.setPageNumber(e + 1);
                            for (var t = 0, n = 0; n < e; n++)
                              t += this.cache.getHeight(n, 0);
                            this.listRef.scrollToPosition(t);
                          },
                        },
                        {
                          key: 'handlePageNumberUpdated',
                          value: function (e) {
                            var t = e.detail;
                            t > this.state.pages.length ||
                              t === this.pageNum ||
                              this.jumpToPage(t - 1);
                          },
                        },
                        {
                          key: 'setPageNumber',
                          value: function (e) {
                            e !== this.pageNum &&
                              ((this.pageNum = e),
                              this.props.options.pageNumberUpdateHandler(e));
                          },
                        },
                        {
                          key: 'onScroll',
                          value: function (e) {
                            var t = e.clientHeight,
                              n = e.scrollHeight,
                              r = e.scrollTop;
                            if (this.state.pages.length > 0) {
                              if (0 === r) return void this.setPageNumber(1);
                              if (n === t + r)
                                return void this.setPageNumber(
                                  this.state.pages.length
                                );
                              for (
                                var o = r + t / 2, i = 0, a = 0;
                                a < this.state.pages.length;
                                a++
                              ) {
                                var l = this.cache.getHeight(a);
                                if (i < o && i + l >= o) {
                                  this.setPageNumber(a + 1);
                                  break;
                                }
                                i += l;
                              }
                            }
                          },
                        },
                        {
                          key: '_finishResetHeight',
                          value: function (e) {
                            var t =
                              !(
                                arguments.length > 1 && void 0 !== arguments[1]
                              ) || arguments[1];
                            t && this._startSpinnerTimer(),
                              e(),
                              (this.isResettingHeight = !1);
                          },
                        },
                        {
                          key: '_startSpinnerTimer',
                          value: function () {
                            var e = this;
                            this._stopSpinnerTimer(),
                              (this.spinnerTimer = setTimeout(function () {
                                (e.spinnerTimer = void 0),
                                  e.setState({ showSpinner: !1 });
                              }, 500));
                          },
                        },
                        {
                          key: '_stopSpinnerTimer',
                          value: function () {
                            this.spinnerTimer &&
                              (clearTimeout(this.spinnerTimer),
                              (this.spinnerTimer = void 0));
                          },
                        },
                      ]) &&
                        (function (e, t) {
                          for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            (r.enumerable = r.enumerable || !1),
                              (r.configurable = !0),
                              'value' in r && (r.writable = !0),
                              Object.defineProperty(e, sa(r.key), r);
                          }
                        })(n.prototype, r),
                      Object.defineProperty(n, 'prototype', { writable: !1 }),
                      c
                    );
                  })(ne);
                function da(e) {
                  return (da =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
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
                function fa(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                function ha(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? fa(Object(n), !0).forEach(function (t) {
                          pa(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : fa(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                }
                function pa(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ('object' !== da(e) || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, 'string');
                          if ('object' !== da(r)) return r;
                          throw new TypeError(
                            '@@toPrimitive must return a primitive value.'
                          );
                        }
                        return String(e);
                      })(e);
                      return 'symbol' === da(t) ? t : String(t);
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
                !(function () {
                  if ('function' == typeof window.CustomEvent) return !1;
                  window.CustomEvent = function (e, t) {
                    t = t || { bubbles: !1, cancelable: !1, detail: null };
                    var n = document.createEvent('CustomEvent');
                    return (
                      n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                    );
                  };
                })();
                var ma = {
                  initialize: function (e) {
                    return {
                      pdfNet: e,
                      viewerElement: void 0,
                      render: function (e, n) {
                        var r =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {},
                          i = ha(
                            {
                              pageNumberUpdateHandler: function (e) {},
                              pageNum: 1,
                              isSinglePageMode: !0,
                              pageCountHandler: function (e) {},
                              editStyleHandler: void 0,
                            },
                            r
                          );
                        (this.viewerElement = n),
                          this.unmount(),
                          i.isSinglePageMode
                            ? o().render(
                                t().createElement(_r, {
                                  doc: e,
                                  pdfNet: this.pdfNet,
                                  viewport: this.viewerElement,
                                  options: i,
                                }),
                                this.viewerElement
                              )
                            : o().render(
                                t().createElement(ua, {
                                  doc: e,
                                  pdfNet: this.pdfNet,
                                  viewport: this.viewerElement,
                                  options: i,
                                }),
                                this.viewerElement
                              );
                      },
                      goToPage: function (e) {
                        var t = new CustomEvent(W, { detail: e });
                        this.viewerElement.dispatchEvent(t);
                      },
                      setZoom: function (e) {
                        var t = new CustomEvent(G, { detail: e });
                        this.viewerElement.dispatchEvent(t);
                      },
                      setAddAnnotConfig: function (e) {
                        var t = new CustomEvent(F, { detail: e });
                        this.viewerElement.dispatchEvent(t);
                      },
                      unmount: function () {
                        this.viewerElement &&
                          o().unmountComponentAtNode(this.viewerElement);
                      },
                    };
                  },
                };
                ma.AnnotationType = wn;
                const va = ma;
                window.WebViewerReadingMode = ma;
              })(),
              i
            );
          })()));
    },
  },
]);
//# sourceMappingURL=62.chunk.js.map
