(function () {
  /*
 *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
*****************************************************************************/
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
  $jscomp.arrayIteratorImpl = function (f) {
    var b = 0;
    return function () {
      return b < f.length ? { done: !1, value: f[b++] } : { done: !0 };
    };
  };
  $jscomp.arrayIterator = function (f) {
    return { next: $jscomp.arrayIteratorImpl(f) };
  };
  $jscomp.ASSUME_ES5 = !1;
  $jscomp.ASSUME_NO_NATIVE_MAP = !1;
  $jscomp.ASSUME_NO_NATIVE_SET = !1;
  $jscomp.SIMPLE_FROUND_POLYFILL = !1;
  $jscomp.ISOLATE_POLYFILLS = !1;
  $jscomp.FORCE_POLYFILL_PROMISE = !1;
  $jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
  $jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || 'function' == typeof Object.defineProperties
      ? Object.defineProperty
      : function (f, b, d) {
          if (f == Array.prototype || f == Object.prototype) return f;
          f[b] = d.value;
          return f;
        };
  $jscomp.getGlobal = function (f) {
    f = [
      'object' == typeof globalThis && globalThis,
      f,
      'object' == typeof window && window,
      'object' == typeof self && self,
      'object' == typeof global && global,
    ];
    for (var b = 0; b < f.length; ++b) {
      var d = f[b];
      if (d && d.Math == Math) return d;
    }
    throw Error('Cannot find global object');
  };
  $jscomp.global = $jscomp.getGlobal(this);
  $jscomp.IS_SYMBOL_NATIVE =
    'function' === typeof Symbol && 'symbol' === typeof Symbol('x');
  $jscomp.TRUST_ES6_POLYFILLS =
    !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
  $jscomp.polyfills = {};
  $jscomp.propertyToPolyfillSymbol = {};
  $jscomp.POLYFILL_PREFIX = '$jscp$';
  var $jscomp$lookupPolyfilledValue = function (f, b, d) {
    if (!d || null != f) {
      d = $jscomp.propertyToPolyfillSymbol[b];
      if (null == d) return f[b];
      d = f[d];
      return void 0 !== d ? d : f[b];
    }
  };
  $jscomp.polyfill = function (f, b, d, c) {
    b &&
      ($jscomp.ISOLATE_POLYFILLS
        ? $jscomp.polyfillIsolated(f, b, d, c)
        : $jscomp.polyfillUnisolated(f, b, d, c));
  };
  $jscomp.polyfillUnisolated = function (f, b, d, c) {
    d = $jscomp.global;
    f = f.split('.');
    for (c = 0; c < f.length - 1; c++) {
      var e = f[c];
      if (!(e in d)) return;
      d = d[e];
    }
    f = f[f.length - 1];
    c = d[f];
    b = b(c);
    b != c &&
      null != b &&
      $jscomp.defineProperty(d, f, {
        configurable: !0,
        writable: !0,
        value: b,
      });
  };
  $jscomp.polyfillIsolated = function (f, b, d, c) {
    var e = f.split('.');
    f = 1 === e.length;
    c = e[0];
    c = !f && c in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var k = 0; k < e.length - 1; k++) {
      var a = e[k];
      if (!(a in c)) return;
      c = c[a];
    }
    e = e[e.length - 1];
    d = $jscomp.IS_SYMBOL_NATIVE && 'es6' === d ? c[e] : null;
    b = b(d);
    null != b &&
      (f
        ? $jscomp.defineProperty($jscomp.polyfills, e, {
            configurable: !0,
            writable: !0,
            value: b,
          })
        : b !== d &&
          (void 0 === $jscomp.propertyToPolyfillSymbol[e] &&
            ((d = (1e9 * Math.random()) >>> 0),
            ($jscomp.propertyToPolyfillSymbol[e] = $jscomp.IS_SYMBOL_NATIVE
              ? $jscomp.global.Symbol(e)
              : $jscomp.POLYFILL_PREFIX + d + '$' + e)),
          $jscomp.defineProperty(c, $jscomp.propertyToPolyfillSymbol[e], {
            configurable: !0,
            writable: !0,
            value: b,
          })));
  };
  $jscomp.initSymbol = function () {};
  $jscomp.polyfill(
    'Symbol',
    function (f) {
      if (f) return f;
      var b = function (k, a) {
        this.$jscomp$symbol$id_ = k;
        $jscomp.defineProperty(this, 'description', {
          configurable: !0,
          writable: !0,
          value: a,
        });
      };
      b.prototype.toString = function () {
        return this.$jscomp$symbol$id_;
      };
      var d = 'jscomp_symbol_' + ((1e9 * Math.random()) >>> 0) + '_',
        c = 0,
        e = function (k) {
          if (this instanceof e)
            throw new TypeError('Symbol is not a constructor');
          return new b(d + (k || '') + '_' + c++, k);
        };
      return e;
    },
    'es6',
    'es3'
  );
  $jscomp.polyfill(
    'Symbol.iterator',
    function (f) {
      if (f) return f;
      f = Symbol('Symbol.iterator');
      for (
        var b =
            'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
              ' '
            ),
          d = 0;
        d < b.length;
        d++
      ) {
        var c = $jscomp.global[b[d]];
        'function' === typeof c &&
          'function' != typeof c.prototype[f] &&
          $jscomp.defineProperty(c.prototype, f, {
            configurable: !0,
            writable: !0,
            value: function () {
              return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
            },
          });
      }
      return f;
    },
    'es6',
    'es3'
  );
  $jscomp.iteratorPrototype = function (f) {
    f = { next: f };
    f[Symbol.iterator] = function () {
      return this;
    };
    return f;
  };
  $jscomp.checkEs6ConformanceViaProxy = function () {
    try {
      var f = {},
        b = Object.create(
          new $jscomp.global.Proxy(f, {
            get: function (d, c, e) {
              return d == f && 'q' == c && e == b;
            },
          })
        );
      return !0 === b.q;
    } catch (d) {
      return !1;
    }
  };
  $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
  $jscomp.ES6_CONFORMANCE =
    $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS &&
    $jscomp.checkEs6ConformanceViaProxy();
  $jscomp.makeIterator = function (f) {
    var b =
      'undefined' != typeof Symbol && Symbol.iterator && f[Symbol.iterator];
    if (b) return b.call(f);
    if ('number' == typeof f.length) return $jscomp.arrayIterator(f);
    throw Error(String(f) + ' is not an iterable or ArrayLike');
  };
  $jscomp.owns = function (f, b) {
    return Object.prototype.hasOwnProperty.call(f, b);
  };
  $jscomp.MapEntry = function () {};
  $jscomp.polyfill(
    'Promise',
    function (f) {
      function b() {
        this.batch_ = null;
      }
      function d(a) {
        return a instanceof e
          ? a
          : new e(function (g, h) {
              g(a);
            });
      }
      if (
        f &&
        (!(
          $jscomp.FORCE_POLYFILL_PROMISE ||
          ($jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION &&
            'undefined' === typeof $jscomp.global.PromiseRejectionEvent)
        ) ||
          !$jscomp.global.Promise ||
          -1 === $jscomp.global.Promise.toString().indexOf('[native code]'))
      )
        return f;
      b.prototype.asyncExecute = function (a) {
        if (null == this.batch_) {
          this.batch_ = [];
          var g = this;
          this.asyncExecuteFunction(function () {
            g.executeBatch_();
          });
        }
        this.batch_.push(a);
      };
      var c = $jscomp.global.setTimeout;
      b.prototype.asyncExecuteFunction = function (a) {
        c(a, 0);
      };
      b.prototype.executeBatch_ = function () {
        for (; this.batch_ && this.batch_.length; ) {
          var a = this.batch_;
          this.batch_ = [];
          for (var g = 0; g < a.length; ++g) {
            var h = a[g];
            a[g] = null;
            try {
              h();
            } catch (l) {
              this.asyncThrow_(l);
            }
          }
        }
        this.batch_ = null;
      };
      b.prototype.asyncThrow_ = function (a) {
        this.asyncExecuteFunction(function () {
          throw a;
        });
      };
      var e = function (a) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        this.isRejectionHandled_ = !1;
        var g = this.createResolveAndReject_();
        try {
          a(g.resolve, g.reject);
        } catch (h) {
          g.reject(h);
        }
      };
      e.prototype.createResolveAndReject_ = function () {
        function a(l) {
          return function (r) {
            h || ((h = !0), l.call(g, r));
          };
        }
        var g = this,
          h = !1;
        return { resolve: a(this.resolveTo_), reject: a(this.reject_) };
      };
      e.prototype.resolveTo_ = function (a) {
        if (a === this)
          this.reject_(new TypeError('A Promise cannot resolve to itself'));
        else if (a instanceof e) this.settleSameAsPromise_(a);
        else {
          a: switch (typeof a) {
            case 'object':
              var g = null != a;
              break a;
            case 'function':
              g = !0;
              break a;
            default:
              g = !1;
          }
          g ? this.resolveToNonPromiseObj_(a) : this.fulfill_(a);
        }
      };
      e.prototype.resolveToNonPromiseObj_ = function (a) {
        var g = void 0;
        try {
          g = a.then;
        } catch (h) {
          this.reject_(h);
          return;
        }
        'function' == typeof g
          ? this.settleSameAsThenable_(g, a)
          : this.fulfill_(a);
      };
      e.prototype.reject_ = function (a) {
        this.settle_(2, a);
      };
      e.prototype.fulfill_ = function (a) {
        this.settle_(1, a);
      };
      e.prototype.settle_ = function (a, g) {
        if (0 != this.state_)
          throw Error(
            'Cannot settle(' +
              a +
              ', ' +
              g +
              '): Promise already settled in state' +
              this.state_
          );
        this.state_ = a;
        this.result_ = g;
        2 === this.state_ && this.scheduleUnhandledRejectionCheck_();
        this.executeOnSettledCallbacks_();
      };
      e.prototype.scheduleUnhandledRejectionCheck_ = function () {
        var a = this;
        c(function () {
          if (a.notifyUnhandledRejection_()) {
            var g = $jscomp.global.console;
            'undefined' !== typeof g && g.error(a.result_);
          }
        }, 1);
      };
      e.prototype.notifyUnhandledRejection_ = function () {
        if (this.isRejectionHandled_) return !1;
        var a = $jscomp.global.CustomEvent,
          g = $jscomp.global.Event,
          h = $jscomp.global.dispatchEvent;
        if ('undefined' === typeof h) return !0;
        'function' === typeof a
          ? (a = new a('unhandledrejection', { cancelable: !0 }))
          : 'function' === typeof g
            ? (a = new g('unhandledrejection', { cancelable: !0 }))
            : ((a = $jscomp.global.document.createEvent('CustomEvent')),
              a.initCustomEvent('unhandledrejection', !1, !0, a));
        a.promise = this;
        a.reason = this.result_;
        return h(a);
      };
      e.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
          for (var a = 0; a < this.onSettledCallbacks_.length; ++a)
            k.asyncExecute(this.onSettledCallbacks_[a]);
          this.onSettledCallbacks_ = null;
        }
      };
      var k = new b();
      e.prototype.settleSameAsPromise_ = function (a) {
        var g = this.createResolveAndReject_();
        a.callWhenSettled_(g.resolve, g.reject);
      };
      e.prototype.settleSameAsThenable_ = function (a, g) {
        var h = this.createResolveAndReject_();
        try {
          a.call(g, h.resolve, h.reject);
        } catch (l) {
          h.reject(l);
        }
      };
      e.prototype.then = function (a, g) {
        function h(q, w) {
          return 'function' == typeof q
            ? function (m) {
                try {
                  l(q(m));
                } catch (x) {
                  r(x);
                }
              }
            : w;
        }
        var l,
          r,
          u = new e(function (q, w) {
            l = q;
            r = w;
          });
        this.callWhenSettled_(h(a, l), h(g, r));
        return u;
      };
      e.prototype.catch = function (a) {
        return this.then(void 0, a);
      };
      e.prototype.callWhenSettled_ = function (a, g) {
        function h() {
          switch (l.state_) {
            case 1:
              a(l.result_);
              break;
            case 2:
              g(l.result_);
              break;
            default:
              throw Error('Unexpected state: ' + l.state_);
          }
        }
        var l = this;
        null == this.onSettledCallbacks_
          ? k.asyncExecute(h)
          : this.onSettledCallbacks_.push(h);
        this.isRejectionHandled_ = !0;
      };
      e.resolve = d;
      e.reject = function (a) {
        return new e(function (g, h) {
          h(a);
        });
      };
      e.race = function (a) {
        return new e(function (g, h) {
          for (
            var l = $jscomp.makeIterator(a), r = l.next();
            !r.done;
            r = l.next()
          )
            d(r.value).callWhenSettled_(g, h);
        });
      };
      e.all = function (a) {
        var g = $jscomp.makeIterator(a),
          h = g.next();
        return h.done
          ? d([])
          : new e(function (l, r) {
              function u(m) {
                return function (x) {
                  q[m] = x;
                  w--;
                  0 == w && l(q);
                };
              }
              var q = [],
                w = 0;
              do
                q.push(void 0),
                  w++,
                  d(h.value).callWhenSettled_(u(q.length - 1), r),
                  (h = g.next());
              while (!h.done);
            });
      };
      return e;
    },
    'es6',
    'es3'
  );
  $jscomp.checkStringArgs = function (f, b, d) {
    if (null == f)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          d +
          ' must not be null or undefined'
      );
    if (b instanceof RegExp)
      throw new TypeError(
        'First argument to String.prototype.' +
          d +
          ' must not be a regular expression'
      );
    return f + '';
  };
  $jscomp.polyfill(
    'String.prototype.endsWith',
    function (f) {
      return f
        ? f
        : function (b, d) {
            var c = $jscomp.checkStringArgs(this, b, 'endsWith');
            b += '';
            void 0 === d && (d = c.length);
            d = Math.max(0, Math.min(d | 0, c.length));
            for (var e = b.length; 0 < e && 0 < d; )
              if (c[--d] != b[--e]) return !1;
            return 0 >= e;
          };
    },
    'es6',
    'es3'
  );
  $jscomp.underscoreProtoCanBeSet = function () {
    var f = { a: !0 },
      b = {};
    try {
      return (b.__proto__ = f), b.a;
    } catch (d) {}
    return !1;
  };
  $jscomp.setPrototypeOf =
    $jscomp.TRUST_ES6_POLYFILLS && 'function' == typeof Object.setPrototypeOf
      ? Object.setPrototypeOf
      : $jscomp.underscoreProtoCanBeSet()
        ? function (f, b) {
            f.__proto__ = b;
            if (f.__proto__ !== b)
              throw new TypeError(f + ' is not extensible');
            return f;
          }
        : null;
  $jscomp.assign =
    $jscomp.TRUST_ES6_POLYFILLS && 'function' == typeof Object.assign
      ? Object.assign
      : function (f, b) {
          for (var d = 1; d < arguments.length; d++) {
            var c = arguments[d];
            if (c) for (var e in c) $jscomp.owns(c, e) && (f[e] = c[e]);
          }
          return f;
        };
  $jscomp.polyfill(
    'Array.from',
    function (f) {
      return f
        ? f
        : function (b, d, c) {
            d =
              null != d
                ? d
                : function (g) {
                    return g;
                  };
            var e = [],
              k =
                'undefined' != typeof Symbol &&
                Symbol.iterator &&
                b[Symbol.iterator];
            if ('function' == typeof k) {
              b = k.call(b);
              for (var a = 0; !(k = b.next()).done; )
                e.push(d.call(c, k.value, a++));
            } else
              for (k = b.length, a = 0; a < k; a++) e.push(d.call(c, b[a], a));
            return e;
          };
    },
    'es6',
    'es3'
  );
  (function (f) {
    function b(c) {
      if (d[c]) return d[c].exports;
      var e = (d[c] = { i: c, l: !1, exports: {} });
      f[c].call(e.exports, e, e.exports, b);
      e.l = !0;
      return e.exports;
    }
    var d = {};
    b.m = f;
    b.c = d;
    b.d = function (c, e, k) {
      b.o(c, e) || Object.defineProperty(c, e, { enumerable: !0, get: k });
    };
    b.r = function (c) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(c, Symbol.toStringTag, { value: 'Module' });
      Object.defineProperty(c, '__esModule', { value: !0 });
    };
    b.t = function (c, e) {
      e & 1 && (c = b(c));
      if (e & 8 || (e & 4 && 'object' === typeof c && c && c.__esModule))
        return c;
      var k = Object.create(null);
      b.r(k);
      Object.defineProperty(k, 'default', { enumerable: !0, value: c });
      if (e & 2 && 'string' != typeof c)
        for (var a in c)
          b.d(
            k,
            a,
            function (g) {
              return c[g];
            }.bind(null, a)
          );
      return k;
    };
    b.n = function (c) {
      var e =
        c && c.__esModule
          ? function () {
              return c['default'];
            }
          : function () {
              return c;
            };
      b.d(e, 'a', e);
      return e;
    };
    b.o = function (c, e) {
      return Object.prototype.hasOwnProperty.call(c, e);
    };
    b.p = '/core/officeEditor';
    return b((b.s = 9));
  })([
    function (f, b, d) {
      d.d(b, 'b', function () {
        return e;
      });
      d.d(b, 'a', function () {
        return k;
      });
      var c = d(1),
        e = function (a, g) {
          Object(c.a)('disableLogs') ||
            (g ? console.warn(a + ': ' + g) : console.warn(a));
        },
        k = function (a, g) {};
    },
    function (f, b, d) {
      d.d(b, 'a', function () {
        return k;
      });
      d.d(b, 'b', function () {
        return a;
      });
      var c = {},
        e = {
          flattenedResources: !1,
          CANVAS_CACHE_SIZE: void 0,
          maxPagesBefore: void 0,
          maxPagesAhead: void 0,
          disableLogs: !1,
          wvsQueryParameters: {},
          _trnDebugMode: !1,
          _logFiltersEnabled: null,
        },
        k = function (g) {
          return e[g];
        },
        a = function (g, h) {
          var l;
          e[g] = h;
          null === (l = c[g]) || void 0 === l
            ? void 0
            : l.forEach(function (r) {
                r(h);
              });
        };
    },
    function (f, b, d) {
      d.d(b, 'a', function () {
        return A;
      });
      d.d(b, 'b', function () {
        return H;
      });
      d.d(b, 'c', function () {
        return I;
      });
      var c = d(6),
        e = d(0),
        k = d(4),
        a = d(3),
        g = 'undefined' === typeof window ? self : window,
        h = g.importScripts,
        l = !1,
        r = function (n, p) {
          l || (h(g.basePath + 'decode.min.js'), (l = !0));
          n = self.BrotliDecode(Object(a.b)(n));
          return p ? n : Object(a.a)(n);
        },
        u = function (n, p) {
          return Object(c.a)(void 0, void 0, Promise, function () {
            var t;
            return Object(c.b)(this, function (v) {
              switch (v.label) {
                case 0:
                  return l
                    ? [3, 2]
                    : [
                        4,
                        Object(k.a)(
                          self.Core.getWorkerPath() + 'external/decode.min.js',
                          'Failed to download decode.min.js',
                          window
                        ),
                      ];
                case 1:
                  v.sent(), (l = !0), (v.label = 2);
                case 2:
                  return (
                    (t = self.BrotliDecode(Object(a.b)(n))),
                    [2, p ? t : Object(a.a)(t)]
                  );
              }
            });
          });
        };
      (function () {
        function n() {
          this.remainingDataArrays = [];
        }
        n.prototype.processRaw = function (p) {
          return p;
        };
        n.prototype.processBrotli = function (p) {
          this.remainingDataArrays.push(p);
          return null;
        };
        n.prototype.GetNextChunk = function (p) {
          this.decodeFunction ||
            (this.decodeFunction =
              0 === p[0] && 97 === p[1] && 115 === p[2] && 109 === p[3]
                ? this.processRaw
                : this.processBrotli);
          return this.decodeFunction(p);
        };
        n.prototype.End = function () {
          if (this.remainingDataArrays.length) {
            for (var p = this.arrays, t = 0, v = 0; v < p.length; ++v)
              t += p[v].length;
            t = new Uint8Array(t);
            var y = 0;
            for (v = 0; v < p.length; ++v) {
              var B = p[v];
              t.set(B, y);
              y += B.length;
            }
            return r(t, !0);
          }
          return null;
        };
        return n;
      })();
      var q = !1,
        w = function (n) {
          q || (h(g.basePath + 'pako_inflate.min.js'), (q = !0));
          var p = 10;
          if ('string' === typeof n) {
            if (n.charCodeAt(3) & 8) {
              for (; 0 !== n.charCodeAt(p); ++p);
              ++p;
            }
          } else if (n[3] & 8) {
            for (; 0 !== n[p]; ++p);
            ++p;
          }
          n = Object(a.b)(n);
          n = n.subarray(p, n.length - 8);
          return g.pako.inflate(n, { windowBits: -15 });
        },
        m = function (n, p) {
          return p ? n : Object(a.a)(n);
        },
        x = function (n) {
          var p = !n.shouldOutputArray,
            t = new XMLHttpRequest();
          t.open('GET', n.url, n.isAsync);
          var v = p && t.overrideMimeType;
          t.responseType = v ? 'text' : 'arraybuffer';
          v && t.overrideMimeType('text/plain; charset=x-user-defined');
          t.send();
          var y = function () {
            var C = Date.now();
            var z = v ? t.responseText : new Uint8Array(t.response);
            Object(e.a)('worker', 'Result length is ' + z.length);
            z.length < n.compressedMaximum
              ? ((z = n.decompressFunction(z, n.shouldOutputArray)),
                Object(e.b)(
                  'There may be some degradation of performance. Your server has not been configured to serve .gz. and .br. files with the expected Content-Encoding. See https://docs.apryse.com/documentation/web/faq/content-encoding/ for instructions on how to resolve this.'
                ),
                h &&
                  Object(e.a)('worker', 'Decompressed length is ' + z.length))
              : p && (z = Object(a.a)(z));
            h &&
              Object(e.a)(
                'worker',
                n.url + ' Decompression took ' + (Date.now() - C)
              );
            return z;
          };
          if (n.isAsync)
            var B = new Promise(function (C, z) {
              t.onload = function () {
                200 === this.status || 0 === this.status
                  ? C(y())
                  : z('Download Failed ' + n.url);
              };
              t.onerror = function () {
                z('Network error occurred ' + n.url);
              };
            });
          else {
            if (200 === t.status || 0 === t.status) return y();
            throw Error('Failed to load ' + n.url);
          }
          return B;
        },
        A = function (n) {
          var p = n.lastIndexOf('/');
          -1 === p && (p = 0);
          var t = n.slice(p).replace('.', '.br.');
          h ||
            (t.endsWith('.js.mem')
              ? (t = t.replace('.js.mem', '.mem'))
              : t.endsWith('.js') && (t = t.concat('.mem')));
          return n.slice(0, p) + t;
        },
        D = function (n, p) {
          var t = n.lastIndexOf('/');
          -1 === t && (t = 0);
          var v = n.slice(t).replace('.', '.gz.');
          p.url = n.slice(0, t) + v;
          p.decompressFunction = w;
          return x(p);
        },
        E = function (n, p) {
          p.url = A(n);
          p.decompressFunction = h ? r : u;
          return x(p);
        },
        F = function (n, p) {
          n.endsWith('.js.mem')
            ? (n = n.slice(0, -4))
            : n.endsWith('.mem') && (n = n.slice(0, -4) + '.js.mem');
          p.url = n;
          p.decompressFunction = m;
          return x(p);
        },
        J = function (n, p, t, v) {
          return n.catch(function (y) {
            Object(e.b)(y);
            return v(p, t);
          });
        },
        G = function (n, p, t) {
          var v;
          if (t.isAsync) {
            var y = p[0](n, t);
            for (v = 1; v < p.length; ++v) y = J(y, n, t, p[v]);
            return y;
          }
          for (v = 0; v < p.length; ++v)
            try {
              return p[v](n, t);
            } catch (B) {
              Object(e.b)(B.message);
            }
          throw Error('');
        },
        I = function (n, p, t, v) {
          return G(n, [D, E, F], {
            compressedMaximum: p,
            isAsync: t,
            shouldOutputArray: v,
          });
        },
        H = function (n, p, t, v) {
          return G(n, [E, D, F], {
            compressedMaximum: p,
            isAsync: t,
            shouldOutputArray: v,
          });
        };
    },
    function (f, b, d) {
      d.d(b, 'b', function () {
        return c;
      });
      d.d(b, 'a', function () {
        return e;
      });
      var c = function (k) {
          if ('string' === typeof k) {
            for (
              var a = new Uint8Array(k.length), g = k.length, h = 0;
              h < g;
              h++
            )
              a[h] = k.charCodeAt(h);
            return a;
          }
          return k;
        },
        e = function (k) {
          if ('string' !== typeof k) {
            for (var a = '', g = 0, h = k.length, l; g < h; )
              (l = k.subarray(g, g + 1024)),
                (g += 1024),
                (a += String.fromCharCode.apply(null, l));
            return a;
          }
          return k;
        };
    },
    function (f, b, d) {
      function c(k, a, g) {
        return new Promise(function (h) {
          if (!k) return h();
          var l = g.document.createElement('script');
          l.type = 'text/javascript';
          l.onload = function () {
            h();
          };
          l.onerror = function () {
            a && Object(e.b)(a);
            h();
          };
          l.src = k;
          g.document.getElementsByTagName('head')[0].appendChild(l);
        });
      }
      d.d(b, 'a', function () {
        return c;
      });
      var e = d(0);
    },
    function (f, b, d) {
      function c(g, h, l) {
        function r(w) {
          q = q || Date.now();
          return w
            ? (Object(e.a)('load', 'Try instantiateStreaming'),
              fetch(Object(k.a)(g))
                .then(function (m) {
                  return WebAssembly.instantiateStreaming(m, h);
                })
                .catch(function (m) {
                  Object(e.a)(
                    'load',
                    'instantiateStreaming Failed ' + g + ' message ' + m.message
                  );
                  return r(!1);
                }))
            : Object(k.b)(g, l, !0, !0).then(function (m) {
                u = Date.now();
                Object(e.a)('load', 'Request took ' + (u - q) + ' ms');
                return WebAssembly.instantiate(m, h);
              });
        }
        var u, q;
        return r(!!WebAssembly.instantiateStreaming).then(function (w) {
          Object(e.a)(
            'load',
            'WASM compilation took ' + (Date.now() - (u || q)) + ' ms'
          );
          return w;
        });
      }
      d.d(b, 'a', function () {
        return c;
      });
      var e = d(0),
        k = d(2),
        a = d(4);
      d.d(b, 'b', function () {
        return a.a;
      });
    },
    function (f, b, d) {
      function c(k, a, g, h) {
        function l(r) {
          return r instanceof g
            ? r
            : new g(function (u) {
                u(r);
              });
        }
        return new (g || (g = Promise))(function (r, u) {
          function q(x) {
            try {
              m(h.next(x));
            } catch (A) {
              u(A);
            }
          }
          function w(x) {
            try {
              m(h['throw'](x));
            } catch (A) {
              u(A);
            }
          }
          function m(x) {
            x.done ? r(x.value) : l(x.value).then(q, w);
          }
          m((h = h.apply(k, a || [])).next());
        });
      }
      function e(k, a) {
        function g(m) {
          return function (x) {
            return h([m, x]);
          };
        }
        function h(m) {
          if (r) throw new TypeError('Generator is already executing.');
          for (; l; )
            try {
              if (
                ((r = 1),
                u &&
                  (q =
                    m[0] & 2
                      ? u['return']
                      : m[0]
                        ? u['throw'] || ((q = u['return']) && q.call(u), 0)
                        : u.next) &&
                  !(q = q.call(u, m[1])).done)
              )
                return q;
              if (((u = 0), q)) m = [m[0] & 2, q.value];
              switch (m[0]) {
                case 0:
                case 1:
                  q = m;
                  break;
                case 4:
                  return l.label++, { value: m[1], done: !1 };
                case 5:
                  l.label++;
                  u = m[1];
                  m = [0];
                  continue;
                case 7:
                  m = l.ops.pop();
                  l.trys.pop();
                  continue;
                default:
                  if (
                    !((q = l.trys), (q = 0 < q.length && q[q.length - 1])) &&
                    (6 === m[0] || 2 === m[0])
                  ) {
                    l = 0;
                    continue;
                  }
                  if (3 === m[0] && (!q || (m[1] > q[0] && m[1] < q[3])))
                    l.label = m[1];
                  else if (6 === m[0] && l.label < q[1])
                    (l.label = q[1]), (q = m);
                  else if (q && l.label < q[2]) (l.label = q[2]), l.ops.push(m);
                  else {
                    q[2] && l.ops.pop();
                    l.trys.pop();
                    continue;
                  }
              }
              m = a.call(k, l);
            } catch (x) {
              (m = [6, x]), (u = 0);
            } finally {
              r = q = 0;
            }
          if (m[0] & 5) throw m[1];
          return { value: m[0] ? m[1] : void 0, done: !0 };
        }
        var l = {
            label: 0,
            sent: function () {
              if (q[0] & 1) throw q[1];
              return q[1];
            },
            trys: [],
            ops: [],
          },
          r,
          u,
          q,
          w;
        return (
          (w = { next: g(0), throw: g(1), return: g(2) }),
          'function' === typeof Symbol &&
            (w[Symbol.iterator] = function () {
              return this;
            }),
          w
        );
      }
      d.d(b, 'a', function () {
        return c;
      });
      d.d(b, 'b', function () {
        return e;
      });
    },
    function (f, b, d) {
      d.d(b, 'a', function () {
        return g;
      });
      var c = d(2),
        e = d(5),
        k = d(8),
        a = (function () {
          function h(l) {
            var r = this;
            this.promise = l.then(function (u) {
              r.response = u;
              r.status = 200;
            });
          }
          h.prototype.addEventListener = function (l, r) {
            this.promise.then(r);
          };
          return h;
        })(),
        g = function (h, l, r) {
          if (Object(k.a)() && !r) {
            self.Module.instantiateWasm = function (q, w) {
              return Object(e.a)(h + 'Wasm.wasm', q, l['Wasm.wasm']).then(
                function (m) {
                  w(m.instance);
                }
              );
            };
            if (l.disableObjectURLBlobs) {
              importScripts(h + 'Wasm.js');
              return;
            }
            r = Object(c.b)(h + 'Wasm.js.mem', l['Wasm.js.mem'], !1, !1);
          } else {
            if (l.disableObjectURLBlobs) {
              importScripts(
                (self.Module.asmjsPrefix ? self.Module.asmjsPrefix : '') +
                  h +
                  '.js'
              );
              return;
            }
            r = Object(c.b)(
              (self.Module.asmjsPrefix ? self.Module.asmjsPrefix : '') +
                h +
                '.js.mem',
              l['.js.mem'],
              !1
            );
            var u = Object(c.c)(
              (self.Module.memoryInitializerPrefixURL
                ? self.Module.memoryInitializerPrefixURL
                : '') +
                h +
                '.mem',
              l['.mem'],
              !0,
              !0
            );
            self.Module.memoryInitializerRequest = new a(u);
          }
          r = new Blob([r], { type: 'application/javascript' });
          importScripts(URL.createObjectURL(r));
        };
    },
    function (f, b, d) {
      d.d(b, 'a', function () {
        return w;
      });
      var c = 'undefined' === typeof window ? self : window;
      f = (function () {
        var m = navigator.userAgent.toLowerCase();
        return (m =
          /(msie) ([\w.]+)/.exec(m) || /(trident)(?:.*? rv:([\w.]+)|)/.exec(m))
          ? parseInt(m[2], 10)
          : m;
      })();
      var e = (function () {
        var m = c.navigator.userAgent.match(/OPR/),
          x = c.navigator.userAgent.match(/Maxthon/),
          A = c.navigator.userAgent.match(/Edge/);
        return c.navigator.userAgent.match(/Chrome\/(.*?) /) && !m && !x && !A;
      })();
      (function () {
        if (!e) return null;
        var m = c.navigator.userAgent.match(/Chrome\/([0-9]+)\./);
        return m ? parseInt(m[1], 10) : m;
      })();
      var k =
        !!navigator.userAgent.match(/Edge/i) ||
        (navigator.userAgent.match(/Edg\/(.*?)/) &&
          c.navigator.userAgent.match(/Chrome\/(.*?) /));
      (function () {
        if (!k) return null;
        var m = c.navigator.userAgent.match(/Edg\/([0-9]+)\./);
        return m ? parseInt(m[1], 10) : m;
      })();
      b =
        /iPad|iPhone|iPod/.test(c.navigator.platform) ||
        ('MacIntel' === navigator.platform && 1 < navigator.maxTouchPoints) ||
        /iPad|iPhone|iPod/.test(c.navigator.userAgent);
      var a = (function () {
          var m = c.navigator.userAgent.match(
            /.*\/([0-9\.]+)\s(Safari|Mobile).*/i
          );
          return m ? parseFloat(m[1]) : m;
        })(),
        g =
          /^((?!chrome|android).)*safari/i.test(c.navigator.userAgent) ||
          (/^((?!chrome|android).)*$/.test(c.navigator.userAgent) && b),
        h = c.navigator.userAgent.match(/Firefox/);
      (function () {
        if (!h) return null;
        var m = c.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
        return m ? parseInt(m[1], 10) : m;
      })();
      f || /Android|webOS|Touch|IEMobile|Silk/i.test(navigator.userAgent);
      navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
      c.navigator.userAgent.indexOf('Android');
      var l = /Mac OS X 10_13_6.*\(KHTML, like Gecko\)$/.test(
          c.navigator.userAgent
        ),
        r = c.navigator.userAgent.match(/(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i)
          ? 14 <=
            parseInt(
              c.navigator.userAgent.match(
                /(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i
              )[3],
              10
            )
          : !1,
        u = !(!self.WebAssembly || !self.WebAssembly.validate),
        q =
          -1 < c.navigator.userAgent.indexOf('Edge/16') ||
          -1 < c.navigator.userAgent.indexOf('MSAppHost'),
        w = function () {
          return u && !q && !(!r && ((g && 14 > a) || l));
        };
    },
    function (f, b, d) {
      f.exports = d(10);
    },
    function (f, b, d) {
      function c(k, a) {
        if (null == a || a > k.length) a = k.length;
        for (var g = 0, h = Array(a); g < a; g++) h[g] = k[g];
        return h;
      }
      d.r(b);
      f = d(7);
      var e = {};
      location.search
        .slice(1)
        .split('&')
        .forEach(function (k) {
          k = k.split('=');
          var a;
          var g = Array.isArray(k) ? k : void 0;
          if (!g)
            a: {
              var h =
                null == k
                  ? null
                  : ('undefined' != typeof Symbol && k[Symbol.iterator]) ||
                    k['@@iterator'];
              if (null != h) {
                var l,
                  r,
                  u = [],
                  q = !0,
                  w = !1;
                try {
                  for (
                    l = (h = h.call(k)).next;
                    !(q = (a = l.call(h)).done) &&
                    (u.push(a.value), 2 !== u.length);
                    q = !0
                  );
                } catch (x) {
                  w = !0;
                  var m = x;
                } finally {
                  try {
                    if (
                      !q &&
                      null != h['return'] &&
                      ((r = h['return']()), Object(r) !== r)
                    ) {
                      g = void 0;
                      break a;
                    }
                  } finally {
                    if (w) throw m;
                  }
                }
                g = u;
              } else g = void 0;
            }
          if (!(a = g))
            a: {
              if (k) {
                if ('string' === typeof k) {
                  a = c(k, 2);
                  break a;
                }
                a = Object.prototype.toString.call(k).slice(8, -1);
                'Object' === a && k.constructor && (a = k.constructor.name);
                if ('Map' === a || 'Set' === a) {
                  a = Array.from(k);
                  break a;
                }
                if (
                  'Arguments' === a ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                ) {
                  a = c(k, 2);
                  break a;
                }
              }
              a = void 0;
            }
          if (!(k = a))
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          e[k[0]] = k[1];
        });
      self.Module = {};
      self.basePath = e.externalPath;
      Object(f.a)(
        'OfficeEditorWorker',
        { 'Wasm.wasm': 1e8, 'Wasm.js.mem': 1e5, '.js.mem': 5e6, '.mem': 3e6 },
        !!navigator.userAgent.match(/Edge/i)
      );
    },
  ]);
}).call(this || window);
