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
**************************************************************************** The buffer module from node.js, for the browser.

 @author   Feross Aboukhadijeh <http://feross.org>
 @license  MIT
*/
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
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
      : function (t, p, q) {
          if (t == Array.prototype || t == Object.prototype) return t;
          t[p] = q.value;
          return t;
        };
  $jscomp.getGlobal = function (t) {
    t = [
      'object' == typeof globalThis && globalThis,
      t,
      'object' == typeof window && window,
      'object' == typeof self && self,
      'object' == typeof global && global,
    ];
    for (var p = 0; p < t.length; ++p) {
      var q = t[p];
      if (q && q.Math == Math) return q;
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
  var $jscomp$lookupPolyfilledValue = function (t, p, q) {
    if (!q || null != t) {
      q = $jscomp.propertyToPolyfillSymbol[p];
      if (null == q) return t[p];
      q = t[q];
      return void 0 !== q ? q : t[p];
    }
  };
  $jscomp.polyfill = function (t, p, q, n) {
    p &&
      ($jscomp.ISOLATE_POLYFILLS
        ? $jscomp.polyfillIsolated(t, p, q, n)
        : $jscomp.polyfillUnisolated(t, p, q, n));
  };
  $jscomp.polyfillUnisolated = function (t, p, q, n) {
    q = $jscomp.global;
    t = t.split('.');
    for (n = 0; n < t.length - 1; n++) {
      var m = t[n];
      if (!(m in q)) return;
      q = q[m];
    }
    t = t[t.length - 1];
    n = q[t];
    p = p(n);
    p != n &&
      null != p &&
      $jscomp.defineProperty(q, t, {
        configurable: !0,
        writable: !0,
        value: p,
      });
  };
  $jscomp.polyfillIsolated = function (t, p, q, n) {
    var m = t.split('.');
    t = 1 === m.length;
    n = m[0];
    n = !t && n in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var h = 0; h < m.length - 1; h++) {
      var c = m[h];
      if (!(c in n)) return;
      n = n[c];
    }
    m = m[m.length - 1];
    q = $jscomp.IS_SYMBOL_NATIVE && 'es6' === q ? n[m] : null;
    p = p(q);
    null != p &&
      (t
        ? $jscomp.defineProperty($jscomp.polyfills, m, {
            configurable: !0,
            writable: !0,
            value: p,
          })
        : p !== q &&
          (void 0 === $jscomp.propertyToPolyfillSymbol[m] &&
            ((q = (1e9 * Math.random()) >>> 0),
            ($jscomp.propertyToPolyfillSymbol[m] = $jscomp.IS_SYMBOL_NATIVE
              ? $jscomp.global.Symbol(m)
              : $jscomp.POLYFILL_PREFIX + q + '$' + m)),
          $jscomp.defineProperty(n, $jscomp.propertyToPolyfillSymbol[m], {
            configurable: !0,
            writable: !0,
            value: p,
          })));
  };
  $jscomp.polyfill(
    'Number.isFinite',
    function (t) {
      return t
        ? t
        : function (p) {
            return 'number' !== typeof p
              ? !1
              : !isNaN(p) && Infinity !== p && -Infinity !== p;
          };
    },
    'es6',
    'es3'
  );
  $jscomp.polyfill(
    'Number.isInteger',
    function (t) {
      return t
        ? t
        : function (p) {
            return Number.isFinite(p) ? p === Math.floor(p) : !1;
          };
    },
    'es6',
    'es3'
  );
  $jscomp.arrayIteratorImpl = function (t) {
    var p = 0;
    return function () {
      return p < t.length ? { done: !1, value: t[p++] } : { done: !0 };
    };
  };
  $jscomp.arrayIterator = function (t) {
    return { next: $jscomp.arrayIteratorImpl(t) };
  };
  $jscomp.makeIterator = function (t) {
    var p =
      'undefined' != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
    if (p) return p.call(t);
    if ('number' == typeof t.length) return $jscomp.arrayIterator(t);
    throw Error(String(t) + ' is not an iterable or ArrayLike');
  };
  $jscomp.polyfill(
    'Promise',
    function (t) {
      function p() {
        this.batch_ = null;
      }
      function q(c) {
        return c instanceof m
          ? c
          : new m(function (e, k) {
              e(c);
            });
      }
      if (
        t &&
        (!(
          $jscomp.FORCE_POLYFILL_PROMISE ||
          ($jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION &&
            'undefined' === typeof $jscomp.global.PromiseRejectionEvent)
        ) ||
          !$jscomp.global.Promise ||
          -1 === $jscomp.global.Promise.toString().indexOf('[native code]'))
      )
        return t;
      p.prototype.asyncExecute = function (c) {
        if (null == this.batch_) {
          this.batch_ = [];
          var e = this;
          this.asyncExecuteFunction(function () {
            e.executeBatch_();
          });
        }
        this.batch_.push(c);
      };
      var n = $jscomp.global.setTimeout;
      p.prototype.asyncExecuteFunction = function (c) {
        n(c, 0);
      };
      p.prototype.executeBatch_ = function () {
        for (; this.batch_ && this.batch_.length; ) {
          var c = this.batch_;
          this.batch_ = [];
          for (var e = 0; e < c.length; ++e) {
            var k = c[e];
            c[e] = null;
            try {
              k();
            } catch (l) {
              this.asyncThrow_(l);
            }
          }
        }
        this.batch_ = null;
      };
      p.prototype.asyncThrow_ = function (c) {
        this.asyncExecuteFunction(function () {
          throw c;
        });
      };
      var m = function (c) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        this.isRejectionHandled_ = !1;
        var e = this.createResolveAndReject_();
        try {
          c(e.resolve, e.reject);
        } catch (k) {
          e.reject(k);
        }
      };
      m.prototype.createResolveAndReject_ = function () {
        function c(l) {
          return function (u) {
            k || ((k = !0), l.call(e, u));
          };
        }
        var e = this,
          k = !1;
        return { resolve: c(this.resolveTo_), reject: c(this.reject_) };
      };
      m.prototype.resolveTo_ = function (c) {
        if (c === this)
          this.reject_(new TypeError('A Promise cannot resolve to itself'));
        else if (c instanceof m) this.settleSameAsPromise_(c);
        else {
          a: switch (typeof c) {
            case 'object':
              var e = null != c;
              break a;
            case 'function':
              e = !0;
              break a;
            default:
              e = !1;
          }
          e ? this.resolveToNonPromiseObj_(c) : this.fulfill_(c);
        }
      };
      m.prototype.resolveToNonPromiseObj_ = function (c) {
        var e = void 0;
        try {
          e = c.then;
        } catch (k) {
          this.reject_(k);
          return;
        }
        'function' == typeof e
          ? this.settleSameAsThenable_(e, c)
          : this.fulfill_(c);
      };
      m.prototype.reject_ = function (c) {
        this.settle_(2, c);
      };
      m.prototype.fulfill_ = function (c) {
        this.settle_(1, c);
      };
      m.prototype.settle_ = function (c, e) {
        if (0 != this.state_)
          throw Error(
            'Cannot settle(' +
              c +
              ', ' +
              e +
              '): Promise already settled in state' +
              this.state_
          );
        this.state_ = c;
        this.result_ = e;
        2 === this.state_ && this.scheduleUnhandledRejectionCheck_();
        this.executeOnSettledCallbacks_();
      };
      m.prototype.scheduleUnhandledRejectionCheck_ = function () {
        var c = this;
        n(function () {
          if (c.notifyUnhandledRejection_()) {
            var e = $jscomp.global.console;
            'undefined' !== typeof e && e.error(c.result_);
          }
        }, 1);
      };
      m.prototype.notifyUnhandledRejection_ = function () {
        if (this.isRejectionHandled_) return !1;
        var c = $jscomp.global.CustomEvent,
          e = $jscomp.global.Event,
          k = $jscomp.global.dispatchEvent;
        if ('undefined' === typeof k) return !0;
        'function' === typeof c
          ? (c = new c('unhandledrejection', { cancelable: !0 }))
          : 'function' === typeof e
            ? (c = new e('unhandledrejection', { cancelable: !0 }))
            : ((c = $jscomp.global.document.createEvent('CustomEvent')),
              c.initCustomEvent('unhandledrejection', !1, !0, c));
        c.promise = this;
        c.reason = this.result_;
        return k(c);
      };
      m.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
          for (var c = 0; c < this.onSettledCallbacks_.length; ++c)
            h.asyncExecute(this.onSettledCallbacks_[c]);
          this.onSettledCallbacks_ = null;
        }
      };
      var h = new p();
      m.prototype.settleSameAsPromise_ = function (c) {
        var e = this.createResolveAndReject_();
        c.callWhenSettled_(e.resolve, e.reject);
      };
      m.prototype.settleSameAsThenable_ = function (c, e) {
        var k = this.createResolveAndReject_();
        try {
          c.call(e, k.resolve, k.reject);
        } catch (l) {
          k.reject(l);
        }
      };
      m.prototype.then = function (c, e) {
        function k(z, D) {
          return 'function' == typeof z
            ? function (w) {
                try {
                  l(z(w));
                } catch (F) {
                  u(F);
                }
              }
            : D;
        }
        var l,
          u,
          v = new m(function (z, D) {
            l = z;
            u = D;
          });
        this.callWhenSettled_(k(c, l), k(e, u));
        return v;
      };
      m.prototype.catch = function (c) {
        return this.then(void 0, c);
      };
      m.prototype.callWhenSettled_ = function (c, e) {
        function k() {
          switch (l.state_) {
            case 1:
              c(l.result_);
              break;
            case 2:
              e(l.result_);
              break;
            default:
              throw Error('Unexpected state: ' + l.state_);
          }
        }
        var l = this;
        null == this.onSettledCallbacks_
          ? h.asyncExecute(k)
          : this.onSettledCallbacks_.push(k);
        this.isRejectionHandled_ = !0;
      };
      m.resolve = q;
      m.reject = function (c) {
        return new m(function (e, k) {
          k(c);
        });
      };
      m.race = function (c) {
        return new m(function (e, k) {
          for (
            var l = $jscomp.makeIterator(c), u = l.next();
            !u.done;
            u = l.next()
          )
            q(u.value).callWhenSettled_(e, k);
        });
      };
      m.all = function (c) {
        var e = $jscomp.makeIterator(c),
          k = e.next();
        return k.done
          ? q([])
          : new m(function (l, u) {
              function v(w) {
                return function (F) {
                  z[w] = F;
                  D--;
                  0 == D && l(z);
                };
              }
              var z = [],
                D = 0;
              do
                z.push(void 0),
                  D++,
                  q(k.value).callWhenSettled_(v(z.length - 1), u),
                  (k = e.next());
              while (!k.done);
            });
      };
      return m;
    },
    'es6',
    'es3'
  );
  $jscomp.checkStringArgs = function (t, p, q) {
    if (null == t)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          q +
          ' must not be null or undefined'
      );
    if (p instanceof RegExp)
      throw new TypeError(
        'First argument to String.prototype.' +
          q +
          ' must not be a regular expression'
      );
    return t + '';
  };
  $jscomp.polyfill(
    'String.prototype.endsWith',
    function (t) {
      return t
        ? t
        : function (p, q) {
            var n = $jscomp.checkStringArgs(this, p, 'endsWith');
            p += '';
            void 0 === q && (q = n.length);
            q = Math.max(0, Math.min(q | 0, n.length));
            for (var m = p.length; 0 < m && 0 < q; )
              if (n[--q] != p[--m]) return !1;
            return 0 >= m;
          };
    },
    'es6',
    'es3'
  );
  $jscomp.initSymbol = function () {};
  $jscomp.polyfill(
    'Symbol',
    function (t) {
      if (t) return t;
      var p = function (h, c) {
        this.$jscomp$symbol$id_ = h;
        $jscomp.defineProperty(this, 'description', {
          configurable: !0,
          writable: !0,
          value: c,
        });
      };
      p.prototype.toString = function () {
        return this.$jscomp$symbol$id_;
      };
      var q = 'jscomp_symbol_' + ((1e9 * Math.random()) >>> 0) + '_',
        n = 0,
        m = function (h) {
          if (this instanceof m)
            throw new TypeError('Symbol is not a constructor');
          return new p(q + (h || '') + '_' + n++, h);
        };
      return m;
    },
    'es6',
    'es3'
  );
  $jscomp.polyfill(
    'Symbol.iterator',
    function (t) {
      if (t) return t;
      t = Symbol('Symbol.iterator');
      for (
        var p =
            'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
              ' '
            ),
          q = 0;
        q < p.length;
        q++
      ) {
        var n = $jscomp.global[p[q]];
        'function' === typeof n &&
          'function' != typeof n.prototype[t] &&
          $jscomp.defineProperty(n.prototype, t, {
            configurable: !0,
            writable: !0,
            value: function () {
              return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
            },
          });
      }
      return t;
    },
    'es6',
    'es3'
  );
  $jscomp.iteratorPrototype = function (t) {
    t = { next: t };
    t[Symbol.iterator] = function () {
      return this;
    };
    return t;
  };
  $jscomp.checkEs6ConformanceViaProxy = function () {
    try {
      var t = {},
        p = Object.create(
          new $jscomp.global.Proxy(t, {
            get: function (q, n, m) {
              return q == t && 'q' == n && m == p;
            },
          })
        );
      return !0 === p.q;
    } catch (q) {
      return !1;
    }
  };
  $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
  $jscomp.ES6_CONFORMANCE =
    $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS &&
    $jscomp.checkEs6ConformanceViaProxy();
  $jscomp.owns = function (t, p) {
    return Object.prototype.hasOwnProperty.call(t, p);
  };
  $jscomp.MapEntry = function () {};
  $jscomp.underscoreProtoCanBeSet = function () {
    var t = { a: !0 },
      p = {};
    try {
      return (p.__proto__ = t), p.a;
    } catch (q) {}
    return !1;
  };
  $jscomp.setPrototypeOf =
    $jscomp.TRUST_ES6_POLYFILLS && 'function' == typeof Object.setPrototypeOf
      ? Object.setPrototypeOf
      : $jscomp.underscoreProtoCanBeSet()
        ? function (t, p) {
            t.__proto__ = p;
            if (t.__proto__ !== p)
              throw new TypeError(t + ' is not extensible');
            return t;
          }
        : null;
  $jscomp.assign =
    $jscomp.TRUST_ES6_POLYFILLS && 'function' == typeof Object.assign
      ? Object.assign
      : function (t, p) {
          for (var q = 1; q < arguments.length; q++) {
            var n = arguments[q];
            if (n) for (var m in n) $jscomp.owns(n, m) && (t[m] = n[m]);
          }
          return t;
        };
  $jscomp.polyfill(
    'Array.prototype.fill',
    function (t) {
      return t
        ? t
        : function (p, q, n) {
            var m = this.length || 0;
            0 > q && (q = Math.max(0, m + q));
            if (null == n || n > m) n = m;
            n = Number(n);
            0 > n && (n = Math.max(0, m + n));
            for (q = Number(q || 0); q < n; q++) this[q] = p;
            return this;
          };
    },
    'es6',
    'es3'
  );
  $jscomp.typedArrayFill = function (t) {
    return t ? t : Array.prototype.fill;
  };
  $jscomp.polyfill(
    'Int8Array.prototype.fill',
    $jscomp.typedArrayFill,
    'es6',
    'es5'
  );
  $jscomp.polyfill(
    'Uint8Array.prototype.fill',
    $jscomp.typedArrayFill,
    'es6',
    'es5'
  );
  $jscomp.polyfill(
    'Uint8ClampedArray.prototype.fill',
    $jscomp.typedArrayFill,
    'es6',
    'es5'
  );
  $jscomp.polyfill(
    'Int16Array.prototype.fill',
    $jscomp.typedArrayFill,
    'es6',
    'es5'
  );
  $jscomp.polyfill(
    'Uint16Array.prototype.fill',
    $jscomp.typedArrayFill,
    'es6',
    'es5'
  );
  $jscomp.polyfill(
    'Int32Array.prototype.fill',
    $jscomp.typedArrayFill,
    'es6',
    'es5'
  );
  $jscomp.polyfill(
    'Uint32Array.prototype.fill',
    $jscomp.typedArrayFill,
    'es6',
    'es5'
  );
  $jscomp.polyfill(
    'Float32Array.prototype.fill',
    $jscomp.typedArrayFill,
    'es6',
    'es5'
  );
  $jscomp.polyfill(
    'Float64Array.prototype.fill',
    $jscomp.typedArrayFill,
    'es6',
    'es5'
  );
  (function (t) {
    function p(n) {
      if (q[n]) return q[n].exports;
      var m = (q[n] = { i: n, l: !1, exports: {} });
      t[n].call(m.exports, m, m.exports, p);
      m.l = !0;
      return m.exports;
    }
    var q = {};
    p.m = t;
    p.c = q;
    p.d = function (n, m, h) {
      p.o(n, m) || Object.defineProperty(n, m, { enumerable: !0, get: h });
    };
    p.r = function (n) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' });
      Object.defineProperty(n, '__esModule', { value: !0 });
    };
    p.t = function (n, m) {
      m & 1 && (n = p(n));
      if (m & 8 || (m & 4 && 'object' === typeof n && n && n.__esModule))
        return n;
      var h = Object.create(null);
      p.r(h);
      Object.defineProperty(h, 'default', { enumerable: !0, value: n });
      if (m & 2 && 'string' != typeof n)
        for (var c in n)
          p.d(
            h,
            c,
            function (e) {
              return n[e];
            }.bind(null, c)
          );
      return h;
    };
    p.n = function (n) {
      var m =
        n && n.__esModule
          ? function () {
              return n['default'];
            }
          : function () {
              return n;
            };
      p.d(m, 'a', m);
      return m;
    };
    p.o = function (n, m) {
      return Object.prototype.hasOwnProperty.call(n, m);
    };
    p.p = '/core/contentEdit';
    return p((p.s = 11));
  })([
    function (t, p, q) {
      q.d(p, 'b', function () {
        return m;
      });
      var n = q(8),
        m;
      (function (h) {
        h['Set Bold'] = 'Set Bold';
        h['Set Underline'] = 'Set Underline';
        h['Set Strike'] = 'Set Strike';
        h['Set Font'] = 'Set Font';
        h.FontName = 'FontName';
        h['Set Font Size'] = 'Set Font Size';
        h['Set Text Color'] = 'Set Text Color';
        h['Set Italic'] = 'Set Italic';
      })(m || (m = {}));
      t = (function () {
        function h() {}
        h.generateRenderXMLCommand = function (c, e, k, l, u) {
          var v =
            '<Commands>\n\t<Command Name="Render" FileFormat="png">\n\t\t<BBox>\n\t\t\t<Left>' +
            (c.left + '</Left>\n');
          v += '\t\t\t<Top>' + c.top + '</Top>\n';
          v += '\t\t\t<Right>' + c.right + '</Right>\n';
          v += '\t\t\t<Bottom>' + c.bottom + '</Bottom>\n\t\t</BBox>\n';
          v =
            v +
            ('\t\t<Width>' + e + '</Width>\n\t\t<Height>') +
            (k + '</Height>\n\t\t<StartPage>1</StartPage>\n');
          v += '\t\t<EndPage>1</EndPage>\n';
          v += '\t\t<File>' + l + '</File>\n';
          u && (v += '\t\t<ShowInvisibles/>\n');
          v += '\t</Command>\n';
          return (v += '</Commands>');
        };
        h.generateDeleteXMLCommand = function (c, e, k) {
          void 0 === k && (k = 1);
          return (
            '\t<Command Name="Copy Text" OID="' +
            c +
            '" Pos="' +
            e +
            '" GlyphCount="' +
            k +
            '"></Command>\n\t<Command Name="Delete Text" OID="' +
            (c + '" Pos="' + e + '" GlyphCount="' + k + '"></Command>\n')
          );
        };
        h.generateCopyTextCommandBody = function (c, e) {
          void 0 === e && (e = null);
          if (e) {
            var k = e.startIndex;
            return (
              '<Command Name="Copy Text" OID="' +
              c +
              '" Pos="' +
              k +
              '" GlyphCount="' +
              (e.endIndex - k) +
              '"></Command>'
            );
          }
          return '<Command Name="Copy Text" OID="' + c + '"></Command>';
        };
        h.generateInsertUndoCommand = function (c, e, k) {
          var l = Number.isInteger(e) && Number.isInteger(k);
          return (
            '\t<Command Name="Insert Undo" OID="' +
            c +
            '"' +
            (l
              ? ' Pos="' + e + '" GlyphCount="' + k + '"'
              : ' Pos="1" GlyphCount="9999"') +
            '></Command>\n'
          );
        };
        h.generateInsertTextCommand = function (c, e, k, l) {
          k =
            '\t<Command Name="Insert Text" OID="' +
            c +
            '" Pos="' +
            e +
            '">\n\t\t<Text>' +
            (k + '</Text>\n');
          if (l) {
            var u = l.fontSize && '' !== l.fontSize;
            l.fontName &&
              '' !== l.fontName &&
              (k += '\t\t<FontName>' + l.fontName + '</FontName>\n');
            u && (k += '\t\t<FontSize>' + l.fontSize + '</FontSize>\n');
          }
          k += '\t</Command>\n';
          l &&
            ((k +=
              '<Command Name="Set Bold" OID= "' +
              c +
              '" Pos="' +
              e +
              '">' +
              l.bold +
              '</Command>'),
            (k +=
              '<Command Name="Set Italic" OID= "' +
              c +
              '" Pos="' +
              e +
              '">' +
              l.italic +
              '</Command>'),
            (k +=
              '<Command Name="Set Underline" OID= "' +
              c +
              '" Pos="' +
              e +
              '">' +
              l.underline +
              '</Command>'));
          l.fontColor &&
            (k +=
              '<Command Name="Set Text Colour" OID= "' +
              c +
              '" Pos="' +
              e +
              '">\n                    <F>\n                      <RGB>' +
              Object(n.b)(l.fontColor) +
              '</RGB>\n                    </F>\n                  </Command>');
          return k;
        };
        h.generateInsertCharacterCommand = function (c, e, k, l) {
          e = Object(n.a)(e);
          var u = '' + this.generateInsertUndoCommand(c, k, e.length);
          return (u += this.generateInsertTextCommand(c, k, e, l));
        };
        h.generateChangeFontWeightOrDecorationCommand = function (c, e, k, l) {
          var u = l.startIndex,
            v = l.textLength;
          return (
            '<Commands>\n              ' +
            this.generateCopyTextCommandBody(c, l) +
            '\n              <Command Name="' +
            e +
            '" OID="' +
            c +
            '" Pos="' +
            u +
            '" GlyphCount="' +
            v +
            '">' +
            k +
            '</Command>\n            </Commands>'
          );
        };
        h.generateLoadHyperlinkURLCommand = function (c, e) {
          return (
            '<Commands>\n\t<Command Name="Get Hyperlink URL" OID="' +
            c +
            '" Pos="' +
            e.startIndex +
            '" GlyphCount="' +
            e.textLength +
            '" />\n</Commands>'
          );
        };
        h.generateSetFontParagraphCommand = function (c, e, k) {
          var l = k.startIndex,
            u = k.textLength;
          return (
            '<Commands>\n                ' +
            this.generateCopyTextCommandBody(c, k) +
            '\n                <Command Name="Set Font" OID="' +
            c +
            '" Pos="' +
            l +
            '" GlyphCount="' +
            u +
            '">\n                  <FontName>' +
            e +
            '</FontName>\n                </Command>\n              </Commands>'
          );
        };
        h.generateSetFontSizeParagraphCommand = function (c, e, k) {
          var l = k.startIndex,
            u = k.textLength;
          return (
            '<Commands>\n                ' +
            this.generateCopyTextCommandBody(c, k) +
            '\n                <Command Name="Set Font Size" OID="' +
            c +
            '" Pos="' +
            l +
            '" GlyphCount="' +
            u +
            '">\n                  <FontSize>' +
            e +
            '</FontSize>\n                </Command>\n              </Commands>'
          );
        };
        h.generateSavePDFCommand = function (c) {
          return (
            '<Command Name="SavePDF">\n      <File>' +
            c +
            '</File>;\n    </Command>'
          );
        };
        h.generateSetFontContentBoxCommand = function (c, e, k) {
          return (
            '<Commands>\n              ' +
            this.generateCopyTextCommandBody(c) +
            '\n              <Command Name="Set Font" OID="' +
            c +
            '">\n                <FontName>' +
            e +
            '</FontName>\n              </Command>\n              ' +
            this.generateSavePDFCommand(k) +
            '\n            </Commands>'
          );
        };
        h.generateSetFontSizeContentBoxCommand = function (c, e, k) {
          return (
            '<Commands>\n              ' +
            this.generateCopyTextCommandBody(c) +
            '\n              <Command Name="Set Font Size" OID="' +
            c +
            '">\n                <FontSize>' +
            e +
            '</FontSize>\n              </Command>\n              ' +
            this.generateSavePDFCommand(k) +
            '\n            </Commands>'
          );
        };
        h.generateTextAttributesCommand = function (c, e, k, l) {
          var u = l.restrictFontName,
            v = l.restrictFontSize;
          l =
            '<Commands><Command Name="Get Text Attributes" OID="' +
            (c + '" Pos="' + e + '" GlyphCount="' + k + '">');
          u || (l += '<Key Name="FontName" />');
          v || (l += '<Key Name="FontSize" />');
          return (l =
            l +
            '<Key Name="Underline" />\n                <Key Name="Strike" />\n                <Key Name="Bold" />\n                <Key Name="Italic" />\n                <Key Name="Fill RGB" />\n    </Command><Command Name="Get Para Attribs" OID="' +
            (c +
              '" Pos="' +
              e +
              '" GlyphCount="' +
              k +
              '">\n                  <Key Name="TextAlign" />\n                  <Key Name="LeadingMode" />\n                  <Key Name="Leading" />\n    </Command><Command Name="Get Text Align" OID="') +
            (c + '"></Command></Commands>'));
        };
        h.generateTextColorCommand = function (c, e, k) {
          var l = k.startIndex,
            u = k.endIndex - l;
          k =
            '<Commands>\n\t' + (this.generateCopyTextCommandBody(c, k) + '\n');
          k += this.generateInsertUndoCommand(c, l, u);
          k +=
            '\t<Command Name="Set Text Colour" OID="' +
            c +
            '" Pos="' +
            l +
            '" GlyphCount="' +
            u +
            '">\n';
          c = Number(e.R.toFixed(3));
          l = Number(e.G.toFixed(3));
          e = Number(e.B.toFixed(3));
          return (
            k +
            ('\t\t<F>\n\t\t\t<RGB>' +
              c +
              ' ' +
              l +
              ' ' +
              e +
              ' 1.000</RGB>\n\t\t</F>\n\t</Command>\n</Commands>')
          );
        };
        h.generateRenderContentBox = function (c) {
          return (
            '<Commands>\n                      <Command Name="SavePDF">\n                        <File>' +
            c +
            '</File>\n                      </Command>\n                    </Commands>'
          );
        };
        h.generateAlignParagraphXMLCommand = function (c, e, k, l) {
          var u = '<Commands>',
            v = k.startIndex;
          k = k.endIndex;
          u =
            (v || k
              ? u +
                ('\n\t<Command Name="Set Para Attribs" OID="' +
                  c +
                  '" Pos="' +
                  v +
                  '" GlyphCount="' +
                  (k - v) +
                  '">')
              : u + ('<Command Name="Set Para Attribs" OID="' + c + '">')) +
            ('\n\t\t<Key Name="TextAlign" Type="name">' + e + '</Key>');
          return (u = l
            ? u +
              ('\n\t</Command><Command Name="SavePDF"><File>' +
                l +
                '</File></Command>\n</Commands>')
            : u + '\n\t</Command>\n</Commands>');
        };
        h.generateBoldContentBoxXMLCommand = function (c, e) {
          return '<Command Name="Set Bold" OID="' + c + '">' + e + '</Command>';
        };
        h.generateItalicContentBoxXMLCommand = function (c, e) {
          return (
            '<Command Name="Set Italic" OID="' + c + '">' + e + '</Command>'
          );
        };
        h.generateUnderlineContentBoxXMLCommand = function (c, e) {
          return (
            '<Command Name="Set Underline" OID="' + c + '">' + e + '</Command>'
          );
        };
        h.generateStrikeContentBoxXMLCommand = function (c, e) {
          return (
            '<Command Name="Set Strike" OID="' + c + '">' + e + '</Command>'
          );
        };
        h.generateColorContentBoxXMLCommand = function (c, e) {
          c = '<Command Name="Set Text Colour" OID="' + c + '">';
          var k = Number(e.R.toFixed(3)),
            l = Number(e.G.toFixed(3));
          e = Number(e.B.toFixed(3));
          return (
            c +
            ('<F><RGB>' + k + ' ' + l + ' ' + e + ' 1.000</RGB></F></Command>')
          );
        };
        h.generateUpdateContentBoxXMLCommand = function (c, e, k) {
          return (
            '<Commands><Command Name="Copy Text" OID="' +
            c +
            '"></Command><Command Name="Insert Undo" OID="' +
            c +
            '" Pos="" GlyphCount=""></Command>\n    ' +
            e +
            '<Command Name="SavePDF"><File>' +
            k +
            '</File></Command></Commands>'
          );
        };
        h.generateTransformTextBoxXMLCommand = function (c, e, k) {
          return (
            '\n      <Commands>\n        <Command Name="Copy BBox" OID="' +
            c +
            '"></Command>\n          <Command Name="TransformToRect">\n            <OID>' +
            c +
            '</OID>\n            <Rect>\n              <Top>' +
            e.top +
            '</Top>\n              <Left>' +
            e.left +
            '</Left>\n              <Bottom>' +
            e.bottom +
            '</Bottom>\n              <Right>' +
            e.right +
            '</Right>\n            </Rect>\n        </Command>\n        <Command Name="Dump Text Box" OID="' +
            c +
            '"></Command>\n        <Command Name="SavePDF"><File>' +
            k +
            '</File></Command>\n      </Commands>'
          );
        };
        h.generateUpdateImageCommand = function (c, e, k, l) {
          var u =
            '<Commands><Command Name="Copy BBox" OID="' + (c + '"></Command>');
          l &&
            ((u =
              u +
              ('<Command Name="TransformToRect"><OID>' +
                c +
                '</OID><Rect><Top>') +
              (e.top + '</Top><Left>' + e.left + '</Left>')),
            (u +=
              '<Bottom>' +
              e.bottom +
              '</Bottom><Right>' +
              e.right +
              '</Right></Rect></Command>'));
          return (
            u +
            ('<Command Name="SavePDF">\n                  <File>' +
              k +
              '</File>\n                </Command>\n                <Command Name="DumpObjectBBox">\n                  <OID>' +
              c +
              '</OID>\n                </Command>\n              </Commands>')
          );
        };
        h.generateEditXMLCommand = function (c, e, k) {
          for (var l, u = '<Commands>\n', v = 0; v < e.length; v++) {
            l = e[v];
            switch (l.name) {
              case 'Delete':
                u += h.generateDeleteXMLCommand(c, l.index, l.len);
                break;
              case 'Insert':
                u += h.generateInsertCharacterCommand(c, l.data, l.index, k);
            }
            l = l.newindex;
          }
          return { commandStr: u + '</Commands>', newIndex: l };
        };
        h.generateGetWebFontsXMLCommand = function (c) {
          return (
            '<Commands><Command Name="Dump Core Fonts"><WebFontURL>' +
            (c + '</WebFontURL></Command></Commands>')
          );
        };
        h.generateExportPageXMLCommand = function (c, e, k, l, u) {
          c =
            '<Commands><Command Name="LoadPDF"><File>' +
            (c +
              '</File></Command><Command Name="Page BBox"><StartPage>1</StartPage><EndPage>1</EndPage></Command>');
          '' !== u &&
            (c += '<Command Name="AddTableBoxes">' + u + '</Command>');
          c =
            c +
            '<Command Name="Translate Export"><File>' +
            (k + '</File><TransXML>coreTransXML.cfg</TransXML><StartPage>') +
            (e + '</StartPage><EndPage>' + e + '</EndPage></Command>');
          c += '<Command Name="Edit Page">';
          return (c +=
            '<Output>' + l + '</Output><ImagesOnly/></Command></Commands>');
        };
        h.generateInsertHyperlinkCommand = function (c, e, k) {
          return (
            '<Commands>\n      <Command Name="Insert Hyperlink" OID="' +
            c +
            '" Pos="' +
            e.startIndex +
            '" GlyphCount="' +
            e.textLength +
            '">\n        <URL>' +
            k +
            '</URL>\n      </Command>\n    </Commands>'
          );
        };
        h.genCommand = function (c, e, k, l, u) {
          var v = {};
          v.name = c;
          v.index = e;
          v.len = k;
          v.data = l;
          v.newindex = u;
          return v;
        };
        h.generateTextStyleUndoCommandBody = function (c, e, k, l, u) {
          var v = '';
          m[c] &&
            (v +=
              '\t<Command Name="Delete Text" OID="' +
              e +
              '" Pos="' +
              k +
              '" GlyphCount="' +
              l +
              '">\n\t</Command>\n');
          return (v +=
            '\t' + this.generateInsertTextWithDocFontCommand(e, k, u) + '\n');
        };
        h.generateInsertTextWithDocFontCommand = function (c, e, k) {
          c = Number.isInteger(e)
            ? '<Command Name="Insert Text" OID="' + c + '" Pos="' + e + '">'
            : '<Command Name="Insert Text" OID="' + c + '" Pos="0">';
          return (c +=
            '<UseDocFont /><HTML>' +
            k.encodeISXMLCopyTextString() +
            '</HTML></Command>');
        };
        h.generatePasteTextCommand = function (c, e, k) {
          var l = e.startIndex;
          e = e.textLength;
          var u = k.htmlFormat;
          k = k.chars;
          var v = '<Commands>\n';
          e && (v += this.generateDeleteXMLCommand(c, l, e));
          v += '' + this.generateInsertUndoCommand(c, l, k.length);
          v += '\t' + this.generateInsertTextWithDocFontCommand(c, l, u) + '\n';
          return v + '</Commands>';
        };
        h.generateCopyTextCommand = function (c, e) {
          void 0 === e && (e = null);
          return (
            '<Commands>\n      ' +
            this.generateCopyTextCommandBody(c, e) +
            '\n    </Commands>\n    '
          );
        };
        h.generatePlaceImageCommand = function (c, e, k, l) {
          return (
            '<Commands>\n                      <Command Name="Place Image">\n                        <File>' +
            c +
            '</File>\n                        <Scale>' +
            k +
            '</Scale>\n                        <Rect>\n                          <Top>' +
            l.top +
            '</Top>\n                          <Left>' +
            l.left +
            '</Left>\n                          <Bottom>' +
            l.bottom +
            '</Bottom>\n                          <Right>' +
            l.right +
            '</Right>\n                        </Rect>\n                      </Command>\n                      <Command Name="SavePDF">\n                        <File>' +
            e +
            '</File>\n                      </Command>\n                    </Commands>'
          );
        };
        h.generateGetVersionCommand = function () {
          return '<Commands><Command Name="Version"/></Commands>';
        };
        return h;
      })();
      p.a = t;
    },
    function (t, p, q) {
      q.d(p, 'b', function () {
        return m;
      });
      q.d(p, 'a', function () {
        return h;
      });
      var n = q(3),
        m = function (c, e) {
          Object(n.a)('disableLogs') ||
            (e ? console.warn(c + ': ' + e) : console.warn(c));
        },
        h = function (c, e) {};
    },
    function (t, p, q) {
      q.d(p, 'a', function () {
        return O;
      });
      q.d(p, 'b', function () {
        return G;
      });
      q.d(p, 'c', function () {
        return H;
      });
      var n = q(7),
        m = q(1),
        h = q(5),
        c = q(4),
        e = 'undefined' === typeof window ? self : window,
        k = e.importScripts,
        l = !1,
        u = function (x, y) {
          l || (k(e.basePath + 'decode.min.js'), (l = !0));
          x = self.BrotliDecode(Object(c.b)(x));
          return y ? x : Object(c.a)(x);
        },
        v = function (x, y) {
          return Object(n.a)(void 0, void 0, Promise, function () {
            var B;
            return Object(n.b)(this, function (E) {
              switch (E.label) {
                case 0:
                  return l
                    ? [3, 2]
                    : [
                        4,
                        Object(h.a)(
                          self.Core.getWorkerPath() + 'external/decode.min.js',
                          'Failed to download decode.min.js',
                          window
                        ),
                      ];
                case 1:
                  E.sent(), (l = !0), (E.label = 2);
                case 2:
                  return (
                    (B = self.BrotliDecode(Object(c.b)(x))),
                    [2, y ? B : Object(c.a)(B)]
                  );
              }
            });
          });
        };
      (function () {
        function x() {
          this.remainingDataArrays = [];
        }
        x.prototype.processRaw = function (y) {
          return y;
        };
        x.prototype.processBrotli = function (y) {
          this.remainingDataArrays.push(y);
          return null;
        };
        x.prototype.GetNextChunk = function (y) {
          this.decodeFunction ||
            (this.decodeFunction =
              0 === y[0] && 97 === y[1] && 115 === y[2] && 109 === y[3]
                ? this.processRaw
                : this.processBrotli);
          return this.decodeFunction(y);
        };
        x.prototype.End = function () {
          if (this.remainingDataArrays.length) {
            for (var y = this.arrays, B = 0, E = 0; E < y.length; ++E)
              B += y[E].length;
            B = new Uint8Array(B);
            var M = 0;
            for (E = 0; E < y.length; ++E) {
              var P = y[E];
              B.set(P, M);
              M += P.length;
            }
            return u(B, !0);
          }
          return null;
        };
        return x;
      })();
      var z = !1,
        D = function (x) {
          z || (k(e.basePath + 'pako_inflate.min.js'), (z = !0));
          var y = 10;
          if ('string' === typeof x) {
            if (x.charCodeAt(3) & 8) {
              for (; 0 !== x.charCodeAt(y); ++y);
              ++y;
            }
          } else if (x[3] & 8) {
            for (; 0 !== x[y]; ++y);
            ++y;
          }
          x = Object(c.b)(x);
          x = x.subarray(y, x.length - 8);
          return e.pako.inflate(x, { windowBits: -15 });
        },
        w = function (x, y) {
          return y ? x : Object(c.a)(x);
        },
        F = function (x) {
          var y = !x.shouldOutputArray,
            B = new XMLHttpRequest();
          B.open('GET', x.url, x.isAsync);
          var E = y && B.overrideMimeType;
          B.responseType = E ? 'text' : 'arraybuffer';
          E && B.overrideMimeType('text/plain; charset=x-user-defined');
          B.send();
          var M = function () {
            var R = Date.now();
            var K = E ? B.responseText : new Uint8Array(B.response);
            Object(m.a)('worker', 'Result length is ' + K.length);
            K.length < x.compressedMaximum
              ? ((K = x.decompressFunction(K, x.shouldOutputArray)),
                Object(m.b)(
                  'There may be some degradation of performance. Your server has not been configured to serve .gz. and .br. files with the expected Content-Encoding. See https://docs.apryse.com/documentation/web/faq/content-encoding/ for instructions on how to resolve this.'
                ),
                k &&
                  Object(m.a)('worker', 'Decompressed length is ' + K.length))
              : y && (K = Object(c.a)(K));
            k &&
              Object(m.a)(
                'worker',
                x.url + ' Decompression took ' + (Date.now() - R)
              );
            return K;
          };
          if (x.isAsync)
            var P = new Promise(function (R, K) {
              B.onload = function () {
                200 === this.status || 0 === this.status
                  ? R(M())
                  : K('Download Failed ' + x.url);
              };
              B.onerror = function () {
                K('Network error occurred ' + x.url);
              };
            });
          else {
            if (200 === B.status || 0 === B.status) return M();
            throw Error('Failed to load ' + x.url);
          }
          return P;
        },
        O = function (x) {
          var y = x.lastIndexOf('/');
          -1 === y && (y = 0);
          var B = x.slice(y).replace('.', '.br.');
          k ||
            (B.endsWith('.js.mem')
              ? (B = B.replace('.js.mem', '.mem'))
              : B.endsWith('.js') && (B = B.concat('.mem')));
          return x.slice(0, y) + B;
        },
        S = function (x, y) {
          var B = x.lastIndexOf('/');
          -1 === B && (B = 0);
          var E = x.slice(B).replace('.', '.gz.');
          y.url = x.slice(0, B) + E;
          y.decompressFunction = D;
          return F(y);
        },
        N = function (x, y) {
          y.url = O(x);
          y.decompressFunction = k ? u : v;
          return F(y);
        },
        I = function (x, y) {
          x.endsWith('.js.mem')
            ? (x = x.slice(0, -4))
            : x.endsWith('.mem') && (x = x.slice(0, -4) + '.js.mem');
          y.url = x;
          y.decompressFunction = w;
          return F(y);
        },
        A = function (x, y, B, E) {
          return x.catch(function (M) {
            Object(m.b)(M);
            return E(y, B);
          });
        },
        f = function (x, y, B) {
          var E;
          if (B.isAsync) {
            var M = y[0](x, B);
            for (E = 1; E < y.length; ++E) M = A(M, x, B, y[E]);
            return M;
          }
          for (E = 0; E < y.length; ++E)
            try {
              return y[E](x, B);
            } catch (P) {
              Object(m.b)(P.message);
            }
          throw Error('');
        },
        H = function (x, y, B, E) {
          return f(x, [S, N, I], {
            compressedMaximum: y,
            isAsync: B,
            shouldOutputArray: E,
          });
        },
        G = function (x, y, B, E) {
          return f(x, [N, S, I], {
            compressedMaximum: y,
            isAsync: B,
            shouldOutputArray: E,
          });
        };
    },
    function (t, p, q) {
      q.d(p, 'a', function () {
        return h;
      });
      q.d(p, 'b', function () {
        return c;
      });
      var n = {},
        m = {
          flattenedResources: !1,
          CANVAS_CACHE_SIZE: void 0,
          maxPagesBefore: void 0,
          maxPagesAhead: void 0,
          disableLogs: !1,
          wvsQueryParameters: {},
          _trnDebugMode: !1,
          _logFiltersEnabled: null,
        },
        h = function (e) {
          return m[e];
        },
        c = function (e, k) {
          var l;
          m[e] = k;
          null === (l = n[e]) || void 0 === l
            ? void 0
            : l.forEach(function (u) {
                u(k);
              });
        };
    },
    function (t, p, q) {
      q.d(p, 'b', function () {
        return n;
      });
      q.d(p, 'a', function () {
        return m;
      });
      var n = function (h) {
          if ('string' === typeof h) {
            for (
              var c = new Uint8Array(h.length), e = h.length, k = 0;
              k < e;
              k++
            )
              c[k] = h.charCodeAt(k);
            return c;
          }
          return h;
        },
        m = function (h) {
          if ('string' !== typeof h) {
            for (var c = '', e = 0, k = h.length, l; e < k; )
              (l = h.subarray(e, e + 1024)),
                (e += 1024),
                (c += String.fromCharCode.apply(null, l));
            return c;
          }
          return h;
        };
    },
    function (t, p, q) {
      function n(h, c, e) {
        return new Promise(function (k) {
          if (!h) return k();
          var l = e.document.createElement('script');
          l.type = 'text/javascript';
          l.onload = function () {
            k();
          };
          l.onerror = function () {
            c && Object(m.b)(c);
            k();
          };
          l.src = h;
          e.document.getElementsByTagName('head')[0].appendChild(l);
        });
      }
      q.d(p, 'a', function () {
        return n;
      });
      var m = q(1);
    },
    function (t, p, q) {
      function n(e, k, l) {
        function u(D) {
          z = z || Date.now();
          return D
            ? (Object(m.a)('load', 'Try instantiateStreaming'),
              fetch(Object(h.a)(e))
                .then(function (w) {
                  return WebAssembly.instantiateStreaming(w, k);
                })
                .catch(function (w) {
                  Object(m.a)(
                    'load',
                    'instantiateStreaming Failed ' + e + ' message ' + w.message
                  );
                  return u(!1);
                }))
            : Object(h.b)(e, l, !0, !0).then(function (w) {
                v = Date.now();
                Object(m.a)('load', 'Request took ' + (v - z) + ' ms');
                return WebAssembly.instantiate(w, k);
              });
        }
        var v, z;
        return u(!!WebAssembly.instantiateStreaming).then(function (D) {
          Object(m.a)(
            'load',
            'WASM compilation took ' + (Date.now() - (v || z)) + ' ms'
          );
          return D;
        });
      }
      q.d(p, 'a', function () {
        return n;
      });
      var m = q(1),
        h = q(2),
        c = q(5);
      q.d(p, 'b', function () {
        return c.a;
      });
    },
    function (t, p, q) {
      function n(h, c, e, k) {
        function l(u) {
          return u instanceof e
            ? u
            : new e(function (v) {
                v(u);
              });
        }
        return new (e || (e = Promise))(function (u, v) {
          function z(F) {
            try {
              w(k.next(F));
            } catch (O) {
              v(O);
            }
          }
          function D(F) {
            try {
              w(k['throw'](F));
            } catch (O) {
              v(O);
            }
          }
          function w(F) {
            F.done ? u(F.value) : l(F.value).then(z, D);
          }
          w((k = k.apply(h, c || [])).next());
        });
      }
      function m(h, c) {
        function e(w) {
          return function (F) {
            return k([w, F]);
          };
        }
        function k(w) {
          if (u) throw new TypeError('Generator is already executing.');
          for (; l; )
            try {
              if (
                ((u = 1),
                v &&
                  (z =
                    w[0] & 2
                      ? v['return']
                      : w[0]
                        ? v['throw'] || ((z = v['return']) && z.call(v), 0)
                        : v.next) &&
                  !(z = z.call(v, w[1])).done)
              )
                return z;
              if (((v = 0), z)) w = [w[0] & 2, z.value];
              switch (w[0]) {
                case 0:
                case 1:
                  z = w;
                  break;
                case 4:
                  return l.label++, { value: w[1], done: !1 };
                case 5:
                  l.label++;
                  v = w[1];
                  w = [0];
                  continue;
                case 7:
                  w = l.ops.pop();
                  l.trys.pop();
                  continue;
                default:
                  if (
                    !((z = l.trys), (z = 0 < z.length && z[z.length - 1])) &&
                    (6 === w[0] || 2 === w[0])
                  ) {
                    l = 0;
                    continue;
                  }
                  if (3 === w[0] && (!z || (w[1] > z[0] && w[1] < z[3])))
                    l.label = w[1];
                  else if (6 === w[0] && l.label < z[1])
                    (l.label = z[1]), (z = w);
                  else if (z && l.label < z[2]) (l.label = z[2]), l.ops.push(w);
                  else {
                    z[2] && l.ops.pop();
                    l.trys.pop();
                    continue;
                  }
              }
              w = c.call(h, l);
            } catch (F) {
              (w = [6, F]), (v = 0);
            } finally {
              u = z = 0;
            }
          if (w[0] & 5) throw w[1];
          return { value: w[0] ? w[1] : void 0, done: !0 };
        }
        var l = {
            label: 0,
            sent: function () {
              if (z[0] & 1) throw z[1];
              return z[1];
            },
            trys: [],
            ops: [],
          },
          u,
          v,
          z,
          D;
        return (
          (D = { next: e(0), throw: e(1), return: e(2) }),
          'function' === typeof Symbol &&
            (D[Symbol.iterator] = function () {
              return this;
            }),
          D
        );
      }
      q.d(p, 'a', function () {
        return n;
      });
      q.d(p, 'b', function () {
        return m;
      });
    },
    function (t, p, q) {
      function n(h) {
        return h
          .replace(/\u00a0/g, ' ')
          .replace(/\n/g, '&#10;')
          .replace(/\r/g, '&#13;')
          .replace(/\f/g, '&#12;');
      }
      function m(h) {
        var c = h.slice(1);
        h = parseInt(c.substr(0, 2), 16);
        var e = parseInt(c.substr(2, 2), 16);
        c = parseInt(c.substr(4, 2), 16);
        return (
          (h / 255).toFixed(3) +
          ' ' +
          (e / 255).toFixed(3) +
          ' ' +
          (c / 255).toFixed(3) +
          ' 1'
        );
      }
      q.d(p, 'a', function () {
        return n;
      });
      q.d(p, 'b', function () {
        return m;
      });
    },
    function (t, p, q) {
      q.d(p, 'a', function () {
        return e;
      });
      var n = q(2),
        m = q(6),
        h = q(10),
        c = (function () {
          function k(l) {
            var u = this;
            this.promise = l.then(function (v) {
              u.response = v;
              u.status = 200;
            });
          }
          k.prototype.addEventListener = function (l, u) {
            this.promise.then(u);
          };
          return k;
        })(),
        e = function (k, l, u) {
          if (Object(h.a)() && !u) {
            self.Module.instantiateWasm = function (z, D) {
              return Object(m.a)(k + 'Wasm.wasm', z, l['Wasm.wasm']).then(
                function (w) {
                  D(w.instance);
                }
              );
            };
            if (l.disableObjectURLBlobs) {
              importScripts(k + 'Wasm.js');
              return;
            }
            u = Object(n.b)(k + 'Wasm.js.mem', l['Wasm.js.mem'], !1, !1);
          } else {
            if (l.disableObjectURLBlobs) {
              importScripts(
                (self.Module.asmjsPrefix ? self.Module.asmjsPrefix : '') +
                  k +
                  '.js'
              );
              return;
            }
            u = Object(n.b)(
              (self.Module.asmjsPrefix ? self.Module.asmjsPrefix : '') +
                k +
                '.js.mem',
              l['.js.mem'],
              !1
            );
            var v = Object(n.c)(
              (self.Module.memoryInitializerPrefixURL
                ? self.Module.memoryInitializerPrefixURL
                : '') +
                k +
                '.mem',
              l['.mem'],
              !0,
              !0
            );
            self.Module.memoryInitializerRequest = new c(v);
          }
          u = new Blob([u], { type: 'application/javascript' });
          importScripts(URL.createObjectURL(u));
        };
    },
    function (t, p, q) {
      q.d(p, 'a', function () {
        return D;
      });
      var n = 'undefined' === typeof window ? self : window;
      t = (function () {
        var w = navigator.userAgent.toLowerCase();
        return (w =
          /(msie) ([\w.]+)/.exec(w) || /(trident)(?:.*? rv:([\w.]+)|)/.exec(w))
          ? parseInt(w[2], 10)
          : w;
      })();
      var m = (function () {
        var w = n.navigator.userAgent.match(/OPR/),
          F = n.navigator.userAgent.match(/Maxthon/),
          O = n.navigator.userAgent.match(/Edge/);
        return n.navigator.userAgent.match(/Chrome\/(.*?) /) && !w && !F && !O;
      })();
      (function () {
        if (!m) return null;
        var w = n.navigator.userAgent.match(/Chrome\/([0-9]+)\./);
        return w ? parseInt(w[1], 10) : w;
      })();
      var h =
        !!navigator.userAgent.match(/Edge/i) ||
        (navigator.userAgent.match(/Edg\/(.*?)/) &&
          n.navigator.userAgent.match(/Chrome\/(.*?) /));
      (function () {
        if (!h) return null;
        var w = n.navigator.userAgent.match(/Edg\/([0-9]+)\./);
        return w ? parseInt(w[1], 10) : w;
      })();
      p =
        /iPad|iPhone|iPod/.test(n.navigator.platform) ||
        ('MacIntel' === navigator.platform && 1 < navigator.maxTouchPoints) ||
        /iPad|iPhone|iPod/.test(n.navigator.userAgent);
      var c = (function () {
          var w = n.navigator.userAgent.match(
            /.*\/([0-9\.]+)\s(Safari|Mobile).*/i
          );
          return w ? parseFloat(w[1]) : w;
        })(),
        e =
          /^((?!chrome|android).)*safari/i.test(n.navigator.userAgent) ||
          (/^((?!chrome|android).)*$/.test(n.navigator.userAgent) && p),
        k = n.navigator.userAgent.match(/Firefox/);
      (function () {
        if (!k) return null;
        var w = n.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
        return w ? parseInt(w[1], 10) : w;
      })();
      t || /Android|webOS|Touch|IEMobile|Silk/i.test(navigator.userAgent);
      navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
      n.navigator.userAgent.indexOf('Android');
      var l = /Mac OS X 10_13_6.*\(KHTML, like Gecko\)$/.test(
          n.navigator.userAgent
        ),
        u = n.navigator.userAgent.match(/(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i)
          ? 14 <=
            parseInt(
              n.navigator.userAgent.match(
                /(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i
              )[3],
              10
            )
          : !1,
        v = !(!self.WebAssembly || !self.WebAssembly.validate),
        z =
          -1 < n.navigator.userAgent.indexOf('Edge/16') ||
          -1 < n.navigator.userAgent.indexOf('MSAppHost'),
        D = function () {
          return v && !z && !(!u && ((e && 14 > c) || l));
        };
    },
    function (t, p, q) {
      t.exports = q(12);
    },
    function (t, p, q) {
      q.r(p);
      (function (n) {
        function m(A, f, H) {
          var G =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          A = '<InfixServer>'.concat(A, '</InfixServer>');
          null == G && (G = 'importCommand' + H + '.xml');
          FS.writeFile(G, A);
          I.ccall('wasmRunXML', 'number', ['string', 'string'], [G, f]);
          FS.unlink(G);
        }
        function h(A) {
          var f =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : !0,
            H = FS.readFile(A).buffer;
          f && FS.unlink(A);
          H || console.warn('No buffer results found for: '.concat(A));
          return H;
        }
        function c() {
          1 == O ? postMessage({ cmd: 'isReady' }) : setTimeout(c, 300);
        }
        function e(A, f, H, G, x, y, B, E, M) {
          m(y, x, 0, B);
          x = h(x);
          0 == M && (y = null);
          postMessage(
            {
              cmd: 'editText',
              subCmd: f,
              caretStart: H,
              caretEnd: G,
              galleyId: A,
              commandXML: y,
              resultsXML: x,
              pageNumber: E,
            },
            [x]
          );
        }
        function k(A, f, H, G) {
          m(A, H, 0, f);
          f = h(H);
          G || (A = null);
          postMessage({ cmd: 'insertTextBox', commandXML: A, resultsXML: f }, [
            f,
          ]);
        }
        function l(A, f, H, G, x) {
          if (f) {
            H = new Uint8Array(H);
            f = 'inputFile' + A + '.pdf';
            FS.writeFile(f, H);
            G = new Uint8Array(G);
            var y = new TextDecoder('utf-8').decode(G),
              B = 'exported' + A + '.xml';
            H = 'objects' + A + '.xml';
            G = 'results' + A + '.xml';
            y = w.a.generateExportPageXMLCommand(f, 1, B, H, y);
            m(y, G, 1);
            N = A;
            x &&
              ((x = h(f, !1)),
              (f = h(B)),
              (H = h(H)),
              (G = h(G)),
              postMessage(
                {
                  cmd: 'exportFile',
                  pageNumber: A,
                  exportPerformed: !0,
                  pdfBuffer: x,
                  exportXML: f,
                  objectXML: H,
                  resultsXML: G,
                },
                [x, f, G]
              ));
          } else
            postMessage({
              cmd: 'exportFile',
              pageNumber: A,
              exportPerformed: !1,
            });
        }
        function u(A) {
          var f = A.pdfFile,
            H = A.tableData,
            G = A.subCmd,
            x = A.pageNumber,
            y = A.commandXML,
            B = A.objectID,
            E = A.isText,
            M = A.isUpdatingRect,
            P = A.oid,
            R = A.canUndoRedo;
          A = A.outputFName;
          x !== N && l(x, !0, f, H, !1);
          var K = 'results' + x + '.xml';
          f = E ? 'transformTextBox' : 'transformObject';
          m(y, K, x);
          H = h(A);
          K = h(K);
          postMessage(
            {
              cmd: f,
              pageNumber: x,
              pdfBuffer: H,
              resultsXML: K,
              id: B,
              isUpdatingRect: M,
              isText: E,
              commandXML: y,
              subCmd: G,
              canUndoRedo: R,
              oid: P,
              outputFName: A,
            },
            [H, K]
          );
        }
        function v(A, f, H, G, x, y) {
          f != N && l(f, !0, A, G, !1);
          G = 'outputFile' + f + '.pdf';
          A = 'results' + f + '.xml';
          x = w.a.generateUpdateContentBoxXMLCommand(H, x, G);
          m(x, A, f);
          G = h(G);
          A = h(A);
          postMessage(
            {
              cmd: 'updateContentBox',
              pageNumber: f,
              pdfBuffer: G,
              commandXML: x,
              resultsXML: A,
              subCmd: y,
              id: H,
            },
            [G, A]
          );
        }
        var z = q(9),
          D = q(2),
          w = q(0),
          F = 'undefined' === typeof window ? self : window;
        F.Core = F.Core || {};
        var O = !1,
          S = null,
          N = -1,
          I = {
            noInitialRun: !0,
            onRuntimeInitialized: function () {
              O = !0;
            },
            fetchSelf: function () {
              Object(z.a)(
                'InfixServer',
                {
                  'Wasm.wasm': 1e8,
                  'Wasm.js.mem': 1e5,
                  '.js.mem': 5e6,
                  '.mem': 3e6,
                },
                !!navigator.userAgent.match(/Edge/i)
              );
            },
            locateFile: function (A) {
              return A;
            },
            getPreloadedPackage: function (A, f) {
              'InfixServerWasm.br.mem' == A && (A = 'InfixServerWasm.mem');
              return Object(D.b)(''.concat(S || '').concat(A), f, !1, !0)
                .buffer;
            },
          };
        self.Module = I;
        self.basePath = '../external/';
        onmessage = function (A) {
          var f = A.data;
          switch (f.cmd) {
            case 'isReady':
              S = f.resourcePath;
              I.fetchSelf();
              c();
              break;
            case 'initialiseInfixServer':
              I.callMain(['']);
              I.ccall(
                'wasmInitInfixServer',
                'number',
                ['string', 'string', 'string'],
                ['infixcore.cfg', null, 'results.xml']
              );
              var H = h('results.xml');
              postMessage({ cmd: 'initialiseInfixServer', resultsXML: H }, [H]);
              break;
            case 'loadAvailableFonts':
              var G = w.a.generateGetWebFontsXMLCommand(f.webFontURL);
              m(G, 'results0.xml', 0);
              var x = h('results0.xml');
              postMessage({ cmd: 'loadAvailableFonts', resultsXML: x }, [x]);
              break;
            case 'exportFile':
              l(f.pageNumber, f.performExport, f.pdfFile, f.tableData, !0);
              break;
            case 'importText':
              var y = f.pdfFile,
                B = f.pageNumber,
                E = f.webFontURL,
                M = f.galleyId,
                P = f.tableData,
                R = f.isSearchReplace,
                K = f.callbackMapId,
                ha = new Uint8Array(f.importData),
                ia = new TextDecoder('utf-8').decode(ha);
              B != N && l(B, !0, y, P, !1);
              var ba = 'editText' + B + '.xml',
                a = ia.replace(/(\r\n|\n|\r)/gm, '');
              a = a.replace(/\t/g, '');
              FS.writeFile(ba, a);
              var b = 'outputFile' + B + '.pdf',
                d = 'results' + B + '.xml';
              var g =
                '<Commands><Command Name="Translate Import">' +
                '<File>'.concat(
                  ba,
                  '</File><StartPage>1</StartPage><EndPage>LastPage</EndPage>'
                );
              g =
                g +
                '<AutoSubstitute/><Fitting><Shrink><FontSize Min="0.65">true</FontSize><Leading>False</Leading></Shrink><Stretch><FontSize>False</FontSize><Leading>False</Leading></Stretch></Fitting><ResetLetterSpacing/><IgnoreFlightCheck/><MissingFont>Noto Sans Regular</MissingFont><SubstituteAllChars/>' +
                '<WebFontURL>'.concat(E, '</WebFontURL>');
              g =
                g +
                '<TargetLang>en</TargetLang></Command>' +
                '<Command Name="SavePDF"><File>'.concat(b, '</File></Command>');
              g += '<Command Name="DumpObjectBBox"><GID>'.concat(
                M,
                '</GID></Command></Commands>'
              );
              m(g, d, B);
              var r = h(b),
                C = h(d);
              FS.unlink(ba);
              postMessage(
                {
                  cmd: 'importText',
                  pageNumber: B,
                  pdfBuffer: r,
                  resultsXML: C,
                  id: M,
                  isSearchReplace: R,
                  callbackMapId: K,
                },
                [r, C]
              );
              break;
            case 'applyTransformMatrix':
              var J = f.transformMatrix,
                L = f.objectID,
                Q = f.pageNumber,
                V = J.m11,
                ja = J.m12,
                dc = J.m21,
                ec = J.m22,
                fc = J.e,
                gc = J.f,
                hc = "<Commands><Command Name='Transform'><OID>"
                  .concat(L, '</OID><Matrix>')
                  .concat(V, ' ')
                  .concat(ja, ' ')
                  .concat(dc, ' ')
                  .concat(ec, ' ')
                  .concat(fc, ' ')
                  .concat(gc, '</Matrix></Command></Commands>');
              m(hc, 'results' + Q + '.xml', Q);
              postMessage({
                cmd: 'applyTransformMatrix',
                pageNumber: Q,
                id: L,
              });
              break;
            case 'transformObject':
              u(f);
              break;
            case 'deleteObject':
              var W = f.pageNumber,
                na = f.objectID,
                ic = f.isText,
                jc = f.isUndoRedo,
                kc = f.isPageDeleted;
              W != N && l(W, !0, f.pdfFile, f.tableData, !1);
              var xa = 'outputFile' + W + '.pdf',
                ya = 'results' + W + '.xml',
                ca = '<Commands><Command Name="DeleteObject">';
              ca =
                !0 === ic
                  ? ca + '<GID>'.concat(na, '</GID></Command>')
                  : ca + '<OID>'.concat(na, '</OID></Command>');
              ca += '<Command Name="SavePDF"><File>'.concat(xa, '</File>');
              m(ca + '</Command></Commands>', ya, W);
              var za = h(xa),
                Aa = h(ya);
              postMessage(
                {
                  cmd: 'deleteObject',
                  pageNumber: W,
                  pdfBuffer: za,
                  resultsXML: Aa,
                  id: na,
                  isUndoRedo: jc,
                  isPageDeleted: kc,
                },
                [za, Aa]
              );
              break;
            case 'insertTextBox':
              k(f.commandXML, f.commandFile, f.resultsFile, !0);
              break;
            case 'insertNewTextBox':
              var lc = f.pdfFile,
                T = f.pageNumber,
                mc = f.topVal,
                nc = f.leftVal,
                oc = f.bottomVal,
                pc = f.rightVal,
                qc = f.font,
                rc = f.fontSize,
                sc = f.importData,
                tc = f.content,
                uc = f.canUndoRedo,
                vc = new TextEncoder().encode('').buffer;
              T != N && l(T, !0, lc, vc, !1);
              var Ba = 'results' + T + '.xml',
                Ca = 'exported' + T + '.xml',
                Da = 'outputFile' + T + '.pdf';
              var U =
                '<Commands><Command Name="Insert Text Box">' +
                '<Rect><Top>'.concat(mc, '</Top><Left>').concat(nc, '</Left>');
              U += '<Bottom>'
                .concat(oc, '</Bottom><Right>')
                .concat(pc, '</Right></Rect>');
              U += '<Size>'
                .concat(rc, '</Size><FontName>')
                .concat(qc, '</FontName>');
              var Ea = 'editText' + T + '.xml';
              FS.writeFile(Ea, sc);
              U += '<File>'.concat(
                Ea,
                '</File><TransXML>coreTransXML.cfg</TransXML>'
              );
              U += '<ExportFile>'.concat(
                Ca,
                '</ExportFile><TransXML>coreTransXML.cfg</TransXML>'
              );
              U =
                U +
                '<StartPage>1</StartPage><EndPage>LastPage</EndPage><AutoSubstitute/><AutoDeleteParas/><Fitting><Shrink><FontSize Min="0.65">true</FontSize><Leading>False</Leading></Shrink><Stretch><FontSize>False</FontSize><Leading>False</Leading></Stretch></Fitting><ResetLetterSpacing/><IgnoreFlightCheck/><MissingFont>Noto Sans Regular</MissingFont><SubstituteAllChars/><TargetLang>en</TargetLang></Command>' +
                '<Command Name="SavePDF"><File>'.concat(
                  Da,
                  '</File></Command></Commands>'
                );
              m(U, Ba, T);
              var Fa = h(Da),
                Ga = h(Ba),
                Ha = h(Ca);
              postMessage(
                {
                  cmd: 'insertNewTextBox',
                  pageNumber: T,
                  pdfBuffer: Fa,
                  exportXML: Ha,
                  resultsXML: Ga,
                  contentHTML: tc,
                  commandXML: U,
                  canUndoRedo: uc,
                },
                [Fa, Ha, Ga]
              );
              break;
            case 'AlignContentBox':
              var da = f.pageNumber,
                oa = f.galleyId,
                wc = f.alignment,
                xc = f.galleyNumericID;
              da != N && l(da, !0, f.pdfFile, f.tableData, !1);
              var Ia = 'results' + oa + '.xml',
                Ja = 'outputFile' + da + '.pdf',
                Ka = w.a.generateAlignParagraphXMLCommand(oa, wc, {}, Ja);
              m(Ka, Ia, da);
              var La = h(Ia),
                Ma = h(Ja);
              postMessage(
                {
                  cmd: 'editText',
                  subCmd: 'Set Para Attribs',
                  pageNumber: da,
                  pdfBuffer: Ma,
                  resultsXML: La,
                  id: xc,
                  galleyId: oa,
                  commandXML: Ka,
                  commandFile: 'importCommand0.xml',
                },
                [Ma, La]
              );
              break;
            case 'RenderContentBox':
              var X = f.pageNumber,
                yc = f.galleyID;
              X != N && l(X, !0, f.pdfFile, f.tableData, !1);
              var Na = 'outputFile' + X + '.pdf',
                Oa = 'results' + X + '.xml',
                zc = w.a.generateRenderContentBox(Na);
              m(zc, Oa, X);
              var Pa = h(Na),
                Qa = h(Oa);
              postMessage(
                {
                  cmd: 'renderContentBox',
                  pageNumber: X,
                  pdfBuffer: Pa,
                  resultsXML: Qa,
                  id: yc,
                },
                [Pa, Qa]
              );
              break;
            case 'AlignParagraph':
              var ka = f.pageNumber,
                pa = f.galleyId,
                Ac = f.alignment,
                qa = f.selection;
              ka != N && l(ka, !0, f.pdfFile, f.tableData, !1);
              var ra = 'results' + pa + '.xml',
                Ra = w.a.generateAlignParagraphXMLCommand(
                  pa,
                  Ac,
                  qa,
                  'outputFile' + ka + '.pdf'
                );
              m(Ra, ra, ka);
              var Sa = h(ra);
              postMessage(
                {
                  cmd: 'editText',
                  subCmd: 'Set Para Attribs',
                  galleyId: pa,
                  caretStart: qa.startIndex,
                  caretEnd: qa.endIndex,
                  resultsFile: ra,
                  commandXML: Ra,
                  commandFile: 'importCommand0.xml',
                  resultsXML: Sa,
                },
                [Sa]
              );
              break;
            case 'DecorateContentBox':
              switch (f.subCmd) {
                case 'bold':
                  var Bc = f.pdfFile,
                    Cc = f.pageNumber,
                    Ta = f.galleyId,
                    Dc = f.tableData,
                    Ec = w.a.generateBoldContentBoxXMLCommand(Ta, f.toApply);
                  v(Bc, Cc, Ta, Dc, Ec, w.b['Set Bold']);
                  break;
                case 'italic':
                  var Fc = f.pdfFile,
                    Gc = f.pageNumber,
                    Ua = f.galleyId,
                    Hc = f.tableData,
                    Ic = w.a.generateItalicContentBoxXMLCommand(Ua, f.toApply);
                  v(Fc, Gc, Ua, Hc, Ic, w.b['Set Italic']);
                  break;
                case 'underline':
                  var Jc = f.pdfFile,
                    Kc = f.pageNumber,
                    Va = f.galleyId,
                    Lc = f.tableData,
                    Mc = w.a.generateUnderlineContentBoxXMLCommand(
                      Va,
                      f.toApply
                    );
                  v(Jc, Kc, Va, Lc, Mc, w.b['Set Underline']);
                  break;
                case 'strike':
                  var Nc = f.pdfFile,
                    Oc = f.pageNumber,
                    Wa = f.galleyId,
                    Pc = f.tableData,
                    Qc = w.a.generateStrikeContentBoxXMLCommand(Wa, f.toApply);
                  v(Nc, Oc, Wa, Pc, Qc, w.b['Set Strike']);
                  break;
                case 'colorContentBox':
                  var Rc = f.pdfFile,
                    Sc = f.pageNumber,
                    Xa = f.galleyId,
                    Tc = f.tableData,
                    Uc = w.a.generateColorContentBoxXMLCommand(Xa, f.newColor);
                  v(Rc, Sc, Xa, Tc, Uc, w.b['Set Text Color']);
              }
              break;
            case 'insertImage':
              var Vc = f.pdfFile,
                Y = f.pageNumber,
                sa = f.newImage,
                Wc = f.scaleType,
                Xc = f.topVal,
                Yc = f.leftVal,
                Zc = f.bottomVal,
                $c = f.rightVal,
                ad = f.canUndoRedo,
                bd = new TextEncoder().encode('').buffer,
                cd = { top: Xc, left: Yc, bottom: Zc, right: $c };
              Y != N && l(Y, !0, Vc, bd, !1);
              var Ya = 'outputFile' + Y + '.pdf',
                Za = 'results' + Y + '.xml',
                $a = 'imageFile' + String(new Date().getTime());
              FS.writeFile($a, n.from(sa));
              var ab = w.a.generatePlaceImageCommand($a, Ya, Wc, cd);
              m(ab, Za, Y);
              var bb = h(Ya),
                cb = h(Za);
              postMessage(
                {
                  cmd: 'insertImage',
                  pageNumber: Y,
                  pdfBuffer: bb,
                  resultsXML: cb,
                  commandXML: ab,
                  canUndoRedo: ad,
                  newImage: sa,
                },
                [bb, cb, sa]
              );
              break;
            case 'runCommand':
              var dd = f.subCmd,
                db = f.resultsFile;
              m(f.commandXML, db, 0, f.commandFile);
              var eb = h(db);
              postMessage({ cmd: 'runCommand', subCmd: dd, resultsXML: eb }, [
                eb,
              ]);
              break;
            case 'renderGalleyArea':
              var fb = f.resultsFile;
              m(f.commandXML, fb, 0, f.commandFile);
              var gb = h(fb),
                hb = h(f.imageFName);
              postMessage(
                {
                  cmd: 'renderGalleyArea',
                  resultsXML: gb,
                  imageData: hb,
                  galleyId: f.galleyId,
                  width: f.width,
                  height: f.height,
                  xOffset: f.xOffset,
                  yOffset: f.yOffset,
                  caretPos: f.caretPos,
                },
                [gb, hb]
              );
              break;
            case 'renderEditGalley':
              var ib = f.resultsFile;
              m(f.commandXML, ib, 0, f.commandFile);
              var jb = h(ib),
                kb = h(f.imageFName);
              postMessage(
                {
                  cmd: 'renderEditGalley',
                  resultsXML: jb,
                  imageData: kb,
                  galleyId: f.galleyId,
                },
                [jb, kb]
              );
              break;
            case 'renderFullPage':
              var lb = f.resultsFile;
              m(f.commandXML, lb, 0, f.commandFile);
              var mb = h(lb),
                nb = h(f.imageFName);
              postMessage(
                {
                  cmd: 'renderFullPage',
                  resultsXML: mb,
                  imageData: nb,
                  outputWidth: f.width,
                  outputHeight: f.height,
                },
                [mb, nb]
              );
              break;
            case 'textAttributes':
              var ed = f.id,
                fd = f.numChars,
                ob = f.resultsFile;
              m(f.commandXML, ob, 0, f.commandFile);
              var pb = h(ob);
              postMessage(
                { cmd: 'textAttributes', id: ed, numChars: fd, resultsXML: pb },
                [pb]
              );
              break;
            case 'loadSwatchColour':
              var qb = f.resultsFile;
              m(f.commandXML, qb, 0, f.commandFile);
              var rb = h(qb);
              postMessage({ cmd: 'loadSwatchColour', resultsXML: rb }, [rb]);
              break;
            case 'fittingAttributes':
              var sb = f.resultsFile;
              m(f.commandXML, sb, 0, f.commandFile);
              var tb = h(sb);
              postMessage({ cmd: 'fittingAttributes', resultsXML: tb }, [tb]);
              break;
            case 'spacingAttributes':
              var gd = f.numChars,
                ub = f.resultsFile;
              m(f.commandXML, ub, 0, f.commandFile);
              var vb = h(ub);
              postMessage(
                { cmd: 'spacingAttributes', numChars: gd, resultsXML: vb },
                [vb]
              );
              break;
            case 'indentAttributes':
              var hd = f.numChars,
                wb = f.resultsFile;
              m(f.commandXML, wb, 0, f.commandFile);
              var xb = h(wb);
              postMessage(
                { cmd: 'indentAttributes', numChars: hd, resultsXML: xb },
                [xb]
              );
              break;
            case 'editText':
              e(
                f.galleyId,
                f.subCmd,
                f.caretStart,
                f.caretEnd,
                f.resultsFile,
                f.commandXML,
                f.commandFile,
                f.pageNumber,
                !0
              );
              break;
            case 'editObject':
              var id = f.subCmd,
                jd = f.oid,
                yb = f.resultsFile,
                zb = f.commandXML;
              m(zb, yb, 0, f.commandFile);
              var Ab = h(yb);
              postMessage(
                {
                  cmd: 'editObject',
                  subCmd: id,
                  oid: jd,
                  commandXML: zb,
                  resultsXML: Ab,
                },
                [Ab]
              );
              break;
            case 'performUndoRedo':
              switch (f.subCmd) {
                case 'editText':
                  e(
                    f.galleyId,
                    f.cmd,
                    f.caretStart,
                    f.caretEnd,
                    f.resultsFile,
                    f.commandXML,
                    f.commandFile,
                    f.pageNumber,
                    !1
                  );
                  break;
                case 'transformObject':
                  f.subCmd = 'performUndoRedo';
                  u(f);
                  break;
                case 'insertTextBoxRedo':
                  var Bb = f.commandXML,
                    ea = f.pageNumber,
                    Cb = 'results' + ea + '.xml',
                    kd = 'exported' + ea + '.xml',
                    ld = 'outputFile' + ea + '.pdf';
                  m(Bb, Cb, ea);
                  var Db = h(ld),
                    Eb = h(Cb),
                    Fb = h(kd);
                  postMessage(
                    {
                      cmd: 'insertNewTextBox',
                      pageNumber: ea,
                      pdfBuffer: Db,
                      exportXML: Fb,
                      resultsXML: Eb,
                      commandXML: Bb,
                    },
                    [Db, Fb, Eb]
                  );
                  break;
                case 'insertImageRedo':
                  var Gb = f.commandXML,
                    fa = f.pageNumber,
                    Hb = f.newImage,
                    md = 'outputFile' + fa + '.pdf',
                    Ib = 'results' + fa + '.xml',
                    Jb = 'imageFile' + fa + '.jpg';
                  FS.writeFile(Jb, n.from(Hb));
                  m(Gb, Ib, fa);
                  var Kb = h(md),
                    Lb = h(Ib);
                  FS.unlink(Jb);
                  postMessage(
                    {
                      cmd: 'insertImage',
                      pageNumber: fa,
                      pdfBuffer: Kb,
                      resultsXML: Lb,
                      commandXML: Gb,
                      newImage: Hb,
                    },
                    [Kb, Lb]
                  );
              }
              break;
            case 'insertTextBoxUndo':
              insertTextBoxUndo(
                f.galleyId,
                f.resultsFile,
                f.commandXML,
                f.commandFile
              );
              break;
            case 'insertTextBoxRedo':
              k(f.commandXML, f.commandFile, f.resultsFile, !1);
              break;
            case 'copyText':
              var Mb = f.resultsFile;
              m(f.commandXML, Mb, 0, f.commandFile);
              var Nb = h(Mb);
              postMessage({ cmd: 'copyText', resultsXML: Nb }, [Nb]);
              break;
            case 'dumpTextBox':
              var nd = f.galleyId,
                Ob = f.resultsFile;
              m(f.commandXML, Ob, 0, f.commandFile);
              var Pb = h(Ob);
              postMessage(
                { cmd: 'dumpTextBox', galleyId: nd, resultsXML: Pb },
                [Pb]
              );
              break;
            case 'transformTextBox':
              e(
                f.galleyId,
                f.cmd,
                f.caretStart,
                f.caretEnd,
                f.resultsFile,
                f.commandXML,
                f.commandFile,
                f.pageNumber,
                !1
              );
              break;
            case 'savePDF':
              var Qb = f.resultsFile,
                od = f.pdfFileName,
                pd = new Uint8Array(f.pdfFile);
              FS.writeFile(f.pdfFileName, pd);
              m(f.commandXML, Qb, 0, f.commandFile);
              var Rb = h(od),
                Sb = h(Qb);
              postMessage({ cmd: 'savePDF', pdfBuffer: Rb, resultsXML: Sb }, [
                Rb,
                Sb,
              ]);
              break;
            case 'loadPDF':
              var Tb = f.resultsFile,
                qd = new Uint8Array(f.pdfFile);
              FS.writeFile(f.pdfFileName, qd);
              m(f.commandXML, Tb, 0, f.commandFile);
              var Ub = h(Tb);
              postMessage({ cmd: 'loadPDF', resultsXML: Ub }, [Ub]);
              break;
            case 'loadHyperlinkURL':
              var rd = f.id,
                ta = f.resultsFile;
              m(f.commandXML, ta, 0, f.commandFile);
              var Vb = FS.readFile(ta).buffer;
              FS.unlink(ta);
              postMessage({ id: rd, cmd: 'loadHyperlinkURL', resultsXML: Vb }, [
                Vb,
              ]);
              break;
            case 'setTypographyContentBox':
              var Z = f.pageNumber,
                ua = f.galleyId,
                aa = f.value;
              Z != N && l(Z, !0, f.pdfFile, f.tableData, !1);
              var va = 'outputFile' + Z + '.pdf',
                Wb = 'results' + Z + '.xml',
                la = '';
              aa.style
                ? (la = w.a.generateSetFontContentBoxCommand(ua, aa.style, va))
                : aa.size &&
                  (la = w.a.generateSetFontSizeContentBoxCommand(
                    ua,
                    aa.size,
                    va
                  ));
              var wa;
              aa.style
                ? (wa = w.b['Set Font'])
                : aa.size && (wa = w.b['Set Font Size']);
              m(la, Wb, Z);
              var Xb = h(va),
                Yb = h(Wb);
              postMessage(
                {
                  cmd: 'setTypographyContentBox',
                  subCmd: wa,
                  pageNumber: Z,
                  pdfBuffer: Xb,
                  commandXML: la,
                  resultsXML: Yb,
                  id: ua,
                },
                [Xb, Yb]
              );
              break;
            case 'savePDFPage':
              var ma = f.pageNumber,
                Zb = 'outputFile' + ma + '.pdf',
                $b = 'results' + ma + '.xml',
                sd = '<Commands><Command Name="SavePDF"><File>'.concat(
                  Zb,
                  '</File></Command></Commands>'
                );
              m(sd, $b, ma);
              var ac = h(Zb),
                td = h($b);
              postMessage(
                {
                  resultsXML: td,
                  cmd: 'savePDFPage',
                  pageNumber: ma,
                  pdfBuffer: ac,
                },
                [ac]
              );
              break;
            case 'getInfixVersion':
              var bc = w.a.generateGetVersionCommand();
              m(bc, 'results1.xml', 1);
              var cc = h('results1.xml');
              postMessage(
                { cmd: 'getInfixVersion', commandXML: bc, resultsXML: cc },
                [cc]
              );
          }
        };
      }).call(this, q(13).Buffer);
    },
    function (t, p, q) {
      (function (n) {
        function m() {
          try {
            var a = new Uint8Array(1);
            a.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function () {
                return 42;
              },
            };
            return (
              42 === a.foo() &&
              'function' === typeof a.subarray &&
              0 === a.subarray(1, 1).byteLength
            );
          } catch (b) {
            return !1;
          }
        }
        function h(a, b) {
          if ((c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823) < b)
            throw new RangeError('Invalid typed array length');
          c.TYPED_ARRAY_SUPPORT
            ? ((a = new Uint8Array(b)), (a.__proto__ = c.prototype))
            : (null === a && (a = new c(b)), (a.length = b));
          return a;
        }
        function c(a, b, d) {
          if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c))
            return new c(a, b, d);
          if ('number' === typeof a) {
            if ('string' === typeof b)
              throw Error(
                'If encoding is specified then the first argument must be a string'
              );
            return l(this, a);
          }
          return e(this, a, b, d);
        }
        function e(a, b, d, g) {
          if ('number' === typeof b)
            throw new TypeError('"value" argument must not be a number');
          if ('undefined' !== typeof ArrayBuffer && b instanceof ArrayBuffer) {
            b.byteLength;
            if (0 > d || b.byteLength < d)
              throw new RangeError("'offset' is out of bounds");
            if (b.byteLength < d + (g || 0))
              throw new RangeError("'length' is out of bounds");
            b =
              void 0 === d && void 0 === g
                ? new Uint8Array(b)
                : void 0 === g
                  ? new Uint8Array(b, d)
                  : new Uint8Array(b, d, g);
            c.TYPED_ARRAY_SUPPORT
              ? ((a = b), (a.__proto__ = c.prototype))
              : (a = u(a, b));
            return a;
          }
          if ('string' === typeof b) {
            g = a;
            a = d;
            if ('string' !== typeof a || '' === a) a = 'utf8';
            if (!c.isEncoding(a))
              throw new TypeError('"encoding" must be a valid string encoding');
            d = D(b, a) | 0;
            g = h(g, d);
            b = g.write(b, a);
            b !== d && (g = g.slice(0, b));
            return g;
          }
          return v(a, b);
        }
        function k(a) {
          if ('number' !== typeof a)
            throw new TypeError('"size" argument must be a number');
          if (0 > a)
            throw new RangeError('"size" argument must not be negative');
        }
        function l(a, b) {
          k(b);
          a = h(a, 0 > b ? 0 : z(b) | 0);
          if (!c.TYPED_ARRAY_SUPPORT) for (var d = 0; d < b; ++d) a[d] = 0;
          return a;
        }
        function u(a, b) {
          var d = 0 > b.length ? 0 : z(b.length) | 0;
          a = h(a, d);
          for (var g = 0; g < d; g += 1) a[g] = b[g] & 255;
          return a;
        }
        function v(a, b) {
          if (c.isBuffer(b)) {
            var d = z(b.length) | 0;
            a = h(a, d);
            if (0 === a.length) return a;
            b.copy(a, 0, 0, d);
            return a;
          }
          if (b) {
            if (
              ('undefined' !== typeof ArrayBuffer &&
                b.buffer instanceof ArrayBuffer) ||
              'length' in b
            )
              return (
                (d = 'number' !== typeof b.length) ||
                  ((d = b.length), (d = d !== d)),
                d ? h(a, 0) : u(a, b)
              );
            if ('Buffer' === b.type && ha(b.data)) return u(a, b.data);
          }
          throw new TypeError(
            'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
          );
        }
        function z(a) {
          if (a >= (c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823))
            throw new RangeError(
              'Attempt to allocate Buffer larger than maximum size: 0x' +
                (c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823).toString(16) +
                ' bytes'
            );
          return a | 0;
        }
        function D(a, b) {
          if (c.isBuffer(a)) return a.length;
          if (
            'undefined' !== typeof ArrayBuffer &&
            'function' === typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(a) || a instanceof ArrayBuffer)
          )
            return a.byteLength;
          'string' !== typeof a && (a = '' + a);
          var d = a.length;
          if (0 === d) return 0;
          for (var g = !1; ; )
            switch (b) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return d;
              case 'utf8':
              case 'utf-8':
              case void 0:
                return B(a).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return 2 * d;
              case 'hex':
                return d >>> 1;
              case 'base64':
                return M(a).length;
              default:
                if (g) return B(a).length;
                b = ('' + b).toLowerCase();
                g = !0;
            }
        }
        function w(a, b, d) {
          var g = !1;
          if (void 0 === b || 0 > b) b = 0;
          if (b > this.length) return '';
          if (void 0 === d || d > this.length) d = this.length;
          if (0 >= d) return '';
          d >>>= 0;
          b >>>= 0;
          if (d <= b) return '';
          for (a || (a = 'utf8'); ; )
            switch (a) {
              case 'hex':
                a = b;
                b = d;
                d = this.length;
                if (!a || 0 > a) a = 0;
                if (!b || 0 > b || b > d) b = d;
                g = '';
                for (d = a; d < b; ++d)
                  (a = g),
                    (g = this[d]),
                    (g = 16 > g ? '0' + g.toString(16) : g.toString(16)),
                    (g = a + g);
                return g;
              case 'utf8':
              case 'utf-8':
                return N(this, b, d);
              case 'ascii':
                a = '';
                for (d = Math.min(this.length, d); b < d; ++b)
                  a += String.fromCharCode(this[b] & 127);
                return a;
              case 'latin1':
              case 'binary':
                a = '';
                for (d = Math.min(this.length, d); b < d; ++b)
                  a += String.fromCharCode(this[b]);
                return a;
              case 'base64':
                return (
                  (b =
                    0 === b && d === this.length
                      ? R.fromByteArray(this)
                      : R.fromByteArray(this.slice(b, d))),
                  b
                );
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                b = this.slice(b, d);
                d = '';
                for (a = 0; a < b.length; a += 2)
                  d += String.fromCharCode(b[a] + 256 * b[a + 1]);
                return d;
              default:
                if (g) throw new TypeError('Unknown encoding: ' + a);
                a = (a + '').toLowerCase();
                g = !0;
            }
        }
        function F(a, b, d) {
          var g = a[b];
          a[b] = a[d];
          a[d] = g;
        }
        function O(a, b, d, g, r) {
          if (0 === a.length) return -1;
          'string' === typeof d
            ? ((g = d), (d = 0))
            : 2147483647 < d
              ? (d = 2147483647)
              : -2147483648 > d && (d = -2147483648);
          d = +d;
          isNaN(d) && (d = r ? 0 : a.length - 1);
          0 > d && (d = a.length + d);
          if (d >= a.length) {
            if (r) return -1;
            d = a.length - 1;
          } else if (0 > d)
            if (r) d = 0;
            else return -1;
          'string' === typeof b && (b = c.from(b, g));
          if (c.isBuffer(b)) return 0 === b.length ? -1 : S(a, b, d, g, r);
          if ('number' === typeof b)
            return (
              (b &= 255),
              c.TYPED_ARRAY_SUPPORT &&
              'function' === typeof Uint8Array.prototype.indexOf
                ? r
                  ? Uint8Array.prototype.indexOf.call(a, b, d)
                  : Uint8Array.prototype.lastIndexOf.call(a, b, d)
                : S(a, [b], d, g, r)
            );
          throw new TypeError('val must be string, number or Buffer');
        }
        function S(a, b, d, g, r) {
          function C(V, ja) {
            return 1 === J ? V[ja] : V.readUInt16BE(ja * J);
          }
          var J = 1,
            L = a.length,
            Q = b.length;
          if (
            void 0 !== g &&
            ((g = String(g).toLowerCase()),
            'ucs2' === g ||
              'ucs-2' === g ||
              'utf16le' === g ||
              'utf-16le' === g)
          ) {
            if (2 > a.length || 2 > b.length) return -1;
            J = 2;
            L /= 2;
            Q /= 2;
            d /= 2;
          }
          if (r)
            for (g = -1; d < L; d++)
              if (C(a, d) === C(b, -1 === g ? 0 : d - g)) {
                if ((-1 === g && (g = d), d - g + 1 === Q)) return g * J;
              } else -1 !== g && (d -= d - g), (g = -1);
          else
            for (d + Q > L && (d = L - Q); 0 <= d; d--) {
              L = !0;
              for (g = 0; g < Q; g++)
                if (C(a, d + g) !== C(b, g)) {
                  L = !1;
                  break;
                }
              if (L) return d;
            }
          return -1;
        }
        function N(a, b, d) {
          d = Math.min(a.length, d);
          for (var g = []; b < d; ) {
            var r = a[b],
              C = null,
              J = 239 < r ? 4 : 223 < r ? 3 : 191 < r ? 2 : 1;
            if (b + J <= d)
              switch (J) {
                case 1:
                  128 > r && (C = r);
                  break;
                case 2:
                  var L = a[b + 1];
                  128 === (L & 192) &&
                    ((r = ((r & 31) << 6) | (L & 63)), 127 < r && (C = r));
                  break;
                case 3:
                  L = a[b + 1];
                  var Q = a[b + 2];
                  128 === (L & 192) &&
                    128 === (Q & 192) &&
                    ((r = ((r & 15) << 12) | ((L & 63) << 6) | (Q & 63)),
                    2047 < r && (55296 > r || 57343 < r) && (C = r));
                  break;
                case 4:
                  L = a[b + 1];
                  Q = a[b + 2];
                  var V = a[b + 3];
                  128 === (L & 192) &&
                    128 === (Q & 192) &&
                    128 === (V & 192) &&
                    ((r =
                      ((r & 15) << 18) |
                      ((L & 63) << 12) |
                      ((Q & 63) << 6) |
                      (V & 63)),
                    65535 < r && 1114112 > r && (C = r));
              }
            null === C
              ? ((C = 65533), (J = 1))
              : 65535 < C &&
                ((C -= 65536),
                g.push(((C >>> 10) & 1023) | 55296),
                (C = 56320 | (C & 1023)));
            g.push(C);
            b += J;
          }
          a = g.length;
          if (a <= ia) g = String.fromCharCode.apply(String, g);
          else {
            d = '';
            for (b = 0; b < a; )
              d += String.fromCharCode.apply(String, g.slice(b, (b += ia)));
            g = d;
          }
          return g;
        }
        function I(a, b, d) {
          if (0 !== a % 1 || 0 > a) throw new RangeError('offset is not uint');
          if (a + b > d)
            throw new RangeError('Trying to access beyond buffer length');
        }
        function A(a, b, d, g, r, C) {
          if (!c.isBuffer(a))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (b > r || b < C)
            throw new RangeError('"value" argument is out of bounds');
          if (d + g > a.length) throw new RangeError('Index out of range');
        }
        function f(a, b, d, g) {
          0 > b && (b = 65535 + b + 1);
          for (var r = 0, C = Math.min(a.length - d, 2); r < C; ++r)
            a[d + r] =
              (b & (255 << (8 * (g ? r : 1 - r)))) >>> (8 * (g ? r : 1 - r));
        }
        function H(a, b, d, g) {
          0 > b && (b = 4294967295 + b + 1);
          for (var r = 0, C = Math.min(a.length - d, 4); r < C; ++r)
            a[d + r] = (b >>> (8 * (g ? r : 3 - r))) & 255;
        }
        function G(a, b, d, g, r, C) {
          if (d + g > a.length) throw new RangeError('Index out of range');
          if (0 > d) throw new RangeError('Index out of range');
        }
        function x(a, b, d, g, r) {
          r || G(a, b, d, 4, 3.4028234663852886e38, -3.4028234663852886e38);
          K.write(a, b, d, g, 23, 4);
          return d + 4;
        }
        function y(a, b, d, g, r) {
          r || G(a, b, d, 8, 1.7976931348623157e308, -1.7976931348623157e308);
          K.write(a, b, d, g, 52, 8);
          return d + 8;
        }
        function B(a, b) {
          b = b || Infinity;
          for (var d, g = a.length, r = null, C = [], J = 0; J < g; ++J) {
            d = a.charCodeAt(J);
            if (55295 < d && 57344 > d) {
              if (!r) {
                if (56319 < d) {
                  -1 < (b -= 3) && C.push(239, 191, 189);
                  continue;
                } else if (J + 1 === g) {
                  -1 < (b -= 3) && C.push(239, 191, 189);
                  continue;
                }
                r = d;
                continue;
              }
              if (56320 > d) {
                -1 < (b -= 3) && C.push(239, 191, 189);
                r = d;
                continue;
              }
              d = (((r - 55296) << 10) | (d - 56320)) + 65536;
            } else r && -1 < (b -= 3) && C.push(239, 191, 189);
            r = null;
            if (128 > d) {
              if (0 > --b) break;
              C.push(d);
            } else if (2048 > d) {
              if (0 > (b -= 2)) break;
              C.push((d >> 6) | 192, (d & 63) | 128);
            } else if (65536 > d) {
              if (0 > (b -= 3)) break;
              C.push((d >> 12) | 224, ((d >> 6) & 63) | 128, (d & 63) | 128);
            } else if (1114112 > d) {
              if (0 > (b -= 4)) break;
              C.push(
                (d >> 18) | 240,
                ((d >> 12) & 63) | 128,
                ((d >> 6) & 63) | 128,
                (d & 63) | 128
              );
            } else throw Error('Invalid code point');
          }
          return C;
        }
        function E(a) {
          for (var b = [], d = 0; d < a.length; ++d)
            b.push(a.charCodeAt(d) & 255);
          return b;
        }
        function M(a) {
          var b = R,
            d = b.toByteArray;
          a = (a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, '')).replace(ba, '');
          if (2 > a.length) a = '';
          else for (; 0 !== a.length % 4; ) a += '=';
          return d.call(b, a);
        }
        function P(a, b, d, g) {
          for (var r = 0; r < g && !(r + d >= b.length || r >= a.length); ++r)
            b[r + d] = a[r];
          return r;
        }
        var R = q(15),
          K = q(16),
          ha = q(17);
        p.Buffer = c;
        p.SlowBuffer = function (a) {
          +a != a && (a = 0);
          return c.alloc(+a);
        };
        p.INSPECT_MAX_BYTES = 50;
        c.TYPED_ARRAY_SUPPORT =
          void 0 !== n.TYPED_ARRAY_SUPPORT ? n.TYPED_ARRAY_SUPPORT : m();
        p.kMaxLength = c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        c.poolSize = 8192;
        c._augment = function (a) {
          a.__proto__ = c.prototype;
          return a;
        };
        c.from = function (a, b, d) {
          return e(null, a, b, d);
        };
        c.TYPED_ARRAY_SUPPORT &&
          ((c.prototype.__proto__ = Uint8Array.prototype),
          (c.__proto__ = Uint8Array),
          'undefined' !== typeof Symbol &&
            Symbol.species &&
            c[Symbol.species] === c &&
            Object.defineProperty(c, Symbol.species, {
              value: null,
              configurable: !0,
            }));
        c.alloc = function (a, b, d) {
          k(a);
          a =
            0 >= a
              ? h(null, a)
              : void 0 !== b
                ? 'string' === typeof d
                  ? h(null, a).fill(b, d)
                  : h(null, a).fill(b)
                : h(null, a);
          return a;
        };
        c.allocUnsafe = function (a) {
          return l(null, a);
        };
        c.allocUnsafeSlow = function (a) {
          return l(null, a);
        };
        c.isBuffer = function (a) {
          return !(null == a || !a._isBuffer);
        };
        c.compare = function (a, b) {
          if (!c.isBuffer(a) || !c.isBuffer(b))
            throw new TypeError('Arguments must be Buffers');
          if (a === b) return 0;
          for (
            var d = a.length, g = b.length, r = 0, C = Math.min(d, g);
            r < C;
            ++r
          )
            if (a[r] !== b[r]) {
              d = a[r];
              g = b[r];
              break;
            }
          return d < g ? -1 : g < d ? 1 : 0;
        };
        c.isEncoding = function (a) {
          switch (String(a).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0;
            default:
              return !1;
          }
        };
        c.concat = function (a, b) {
          if (!ha(a))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === a.length) return c.alloc(0);
          var d;
          if (void 0 === b) for (d = b = 0; d < a.length; ++d) b += a[d].length;
          b = c.allocUnsafe(b);
          var g = 0;
          for (d = 0; d < a.length; ++d) {
            var r = a[d];
            if (!c.isBuffer(r))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            r.copy(b, g);
            g += r.length;
          }
          return b;
        };
        c.byteLength = D;
        c.prototype._isBuffer = !0;
        c.prototype.swap16 = function () {
          var a = this.length;
          if (0 !== a % 2)
            throw new RangeError('Buffer size must be a multiple of 16-bits');
          for (var b = 0; b < a; b += 2) F(this, b, b + 1);
          return this;
        };
        c.prototype.swap32 = function () {
          var a = this.length;
          if (0 !== a % 4)
            throw new RangeError('Buffer size must be a multiple of 32-bits');
          for (var b = 0; b < a; b += 4)
            F(this, b, b + 3), F(this, b + 1, b + 2);
          return this;
        };
        c.prototype.swap64 = function () {
          var a = this.length;
          if (0 !== a % 8)
            throw new RangeError('Buffer size must be a multiple of 64-bits');
          for (var b = 0; b < a; b += 8)
            F(this, b, b + 7),
              F(this, b + 1, b + 6),
              F(this, b + 2, b + 5),
              F(this, b + 3, b + 4);
          return this;
        };
        c.prototype.toString = function () {
          var a = this.length | 0;
          return 0 === a
            ? ''
            : 0 === arguments.length
              ? N(this, 0, a)
              : w.apply(this, arguments);
        };
        c.prototype.equals = function (a) {
          if (!c.isBuffer(a)) throw new TypeError('Argument must be a Buffer');
          return this === a ? !0 : 0 === c.compare(this, a);
        };
        c.prototype.inspect = function () {
          var a = '',
            b = p.INSPECT_MAX_BYTES;
          0 < this.length &&
            ((a = this.toString('hex', 0, b).match(/.{2}/g).join(' ')),
            this.length > b && (a += ' ... '));
          return '<Buffer ' + a + '>';
        };
        c.prototype.compare = function (a, b, d, g, r) {
          if (!c.isBuffer(a)) throw new TypeError('Argument must be a Buffer');
          void 0 === b && (b = 0);
          void 0 === d && (d = a ? a.length : 0);
          void 0 === g && (g = 0);
          void 0 === r && (r = this.length);
          if (0 > b || d > a.length || 0 > g || r > this.length)
            throw new RangeError('out of range index');
          if (g >= r && b >= d) return 0;
          if (g >= r) return -1;
          if (b >= d) return 1;
          b >>>= 0;
          d >>>= 0;
          g >>>= 0;
          r >>>= 0;
          if (this === a) return 0;
          var C = r - g,
            J = d - b,
            L = Math.min(C, J);
          g = this.slice(g, r);
          a = a.slice(b, d);
          for (b = 0; b < L; ++b)
            if (g[b] !== a[b]) {
              C = g[b];
              J = a[b];
              break;
            }
          return C < J ? -1 : J < C ? 1 : 0;
        };
        c.prototype.includes = function (a, b, d) {
          return -1 !== this.indexOf(a, b, d);
        };
        c.prototype.indexOf = function (a, b, d) {
          return O(this, a, b, d, !0);
        };
        c.prototype.lastIndexOf = function (a, b, d) {
          return O(this, a, b, d, !1);
        };
        c.prototype.write = function (a, b, d, g) {
          if (void 0 === b) (g = 'utf8'), (d = this.length), (b = 0);
          else if (void 0 === d && 'string' === typeof b)
            (g = b), (d = this.length), (b = 0);
          else if (isFinite(b))
            (b |= 0),
              isFinite(d)
                ? ((d |= 0), void 0 === g && (g = 'utf8'))
                : ((g = d), (d = void 0));
          else
            throw Error(
              'Buffer.write(string, encoding, offset[, length]) is no longer supported'
            );
          var r = this.length - b;
          if (void 0 === d || d > r) d = r;
          if ((0 < a.length && (0 > d || 0 > b)) || b > this.length)
            throw new RangeError('Attempt to write outside buffer bounds');
          g || (g = 'utf8');
          for (r = !1; ; )
            switch (g) {
              case 'hex':
                a: {
                  b = Number(b) || 0;
                  g = this.length - b;
                  d ? ((d = Number(d)), d > g && (d = g)) : (d = g);
                  g = a.length;
                  if (0 !== g % 2) throw new TypeError('Invalid hex string');
                  d > g / 2 && (d = g / 2);
                  for (g = 0; g < d; ++g) {
                    r = parseInt(a.substr(2 * g, 2), 16);
                    if (isNaN(r)) {
                      a = g;
                      break a;
                    }
                    this[b + g] = r;
                  }
                  a = g;
                }
                return a;
              case 'utf8':
              case 'utf-8':
                return P(B(a, this.length - b), this, b, d);
              case 'ascii':
                return P(E(a), this, b, d);
              case 'latin1':
              case 'binary':
                return P(E(a), this, b, d);
              case 'base64':
                return P(M(a), this, b, d);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                g = a;
                r = this.length - b;
                for (var C = [], J = 0; J < g.length && !(0 > (r -= 2)); ++J) {
                  var L = g.charCodeAt(J);
                  a = L >> 8;
                  L %= 256;
                  C.push(L);
                  C.push(a);
                }
                return P(C, this, b, d);
              default:
                if (r) throw new TypeError('Unknown encoding: ' + g);
                g = ('' + g).toLowerCase();
                r = !0;
            }
        };
        c.prototype.toJSON = function () {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        };
        var ia = 4096;
        c.prototype.slice = function (a, b) {
          var d = this.length;
          a = ~~a;
          b = void 0 === b ? d : ~~b;
          0 > a ? ((a += d), 0 > a && (a = 0)) : a > d && (a = d);
          0 > b ? ((b += d), 0 > b && (b = 0)) : b > d && (b = d);
          b < a && (b = a);
          if (c.TYPED_ARRAY_SUPPORT)
            (b = this.subarray(a, b)), (b.__proto__ = c.prototype);
          else {
            d = b - a;
            b = new c(d, void 0);
            for (var g = 0; g < d; ++g) b[g] = this[g + a];
          }
          return b;
        };
        c.prototype.readUIntLE = function (a, b, d) {
          a |= 0;
          b |= 0;
          d || I(a, b, this.length);
          d = this[a];
          for (var g = 1, r = 0; ++r < b && (g *= 256); ) d += this[a + r] * g;
          return d;
        };
        c.prototype.readUIntBE = function (a, b, d) {
          a |= 0;
          b |= 0;
          d || I(a, b, this.length);
          d = this[a + --b];
          for (var g = 1; 0 < b && (g *= 256); ) d += this[a + --b] * g;
          return d;
        };
        c.prototype.readUInt8 = function (a, b) {
          b || I(a, 1, this.length);
          return this[a];
        };
        c.prototype.readUInt16LE = function (a, b) {
          b || I(a, 2, this.length);
          return this[a] | (this[a + 1] << 8);
        };
        c.prototype.readUInt16BE = function (a, b) {
          b || I(a, 2, this.length);
          return (this[a] << 8) | this[a + 1];
        };
        c.prototype.readUInt32LE = function (a, b) {
          b || I(a, 4, this.length);
          return (
            (this[a] | (this[a + 1] << 8) | (this[a + 2] << 16)) +
            16777216 * this[a + 3]
          );
        };
        c.prototype.readUInt32BE = function (a, b) {
          b || I(a, 4, this.length);
          return (
            16777216 * this[a] +
            ((this[a + 1] << 16) | (this[a + 2] << 8) | this[a + 3])
          );
        };
        c.prototype.readIntLE = function (a, b, d) {
          a |= 0;
          b |= 0;
          d || I(a, b, this.length);
          d = this[a];
          for (var g = 1, r = 0; ++r < b && (g *= 256); ) d += this[a + r] * g;
          d >= 128 * g && (d -= Math.pow(2, 8 * b));
          return d;
        };
        c.prototype.readIntBE = function (a, b, d) {
          a |= 0;
          b |= 0;
          d || I(a, b, this.length);
          d = b;
          for (var g = 1, r = this[a + --d]; 0 < d && (g *= 256); )
            r += this[a + --d] * g;
          r >= 128 * g && (r -= Math.pow(2, 8 * b));
          return r;
        };
        c.prototype.readInt8 = function (a, b) {
          b || I(a, 1, this.length);
          return this[a] & 128 ? -1 * (255 - this[a] + 1) : this[a];
        };
        c.prototype.readInt16LE = function (a, b) {
          b || I(a, 2, this.length);
          a = this[a] | (this[a + 1] << 8);
          return a & 32768 ? a | 4294901760 : a;
        };
        c.prototype.readInt16BE = function (a, b) {
          b || I(a, 2, this.length);
          a = this[a + 1] | (this[a] << 8);
          return a & 32768 ? a | 4294901760 : a;
        };
        c.prototype.readInt32LE = function (a, b) {
          b || I(a, 4, this.length);
          return (
            this[a] |
            (this[a + 1] << 8) |
            (this[a + 2] << 16) |
            (this[a + 3] << 24)
          );
        };
        c.prototype.readInt32BE = function (a, b) {
          b || I(a, 4, this.length);
          return (
            (this[a] << 24) |
            (this[a + 1] << 16) |
            (this[a + 2] << 8) |
            this[a + 3]
          );
        };
        c.prototype.readFloatLE = function (a, b) {
          b || I(a, 4, this.length);
          return K.read(this, a, !0, 23, 4);
        };
        c.prototype.readFloatBE = function (a, b) {
          b || I(a, 4, this.length);
          return K.read(this, a, !1, 23, 4);
        };
        c.prototype.readDoubleLE = function (a, b) {
          b || I(a, 8, this.length);
          return K.read(this, a, !0, 52, 8);
        };
        c.prototype.readDoubleBE = function (a, b) {
          b || I(a, 8, this.length);
          return K.read(this, a, !1, 52, 8);
        };
        c.prototype.writeUIntLE = function (a, b, d, g) {
          a = +a;
          b |= 0;
          d |= 0;
          g || A(this, a, b, d, Math.pow(2, 8 * d) - 1, 0);
          g = 1;
          var r = 0;
          for (this[b] = a & 255; ++r < d && (g *= 256); )
            this[b + r] = (a / g) & 255;
          return b + d;
        };
        c.prototype.writeUIntBE = function (a, b, d, g) {
          a = +a;
          b |= 0;
          d |= 0;
          g || A(this, a, b, d, Math.pow(2, 8 * d) - 1, 0);
          g = d - 1;
          var r = 1;
          for (this[b + g] = a & 255; 0 <= --g && (r *= 256); )
            this[b + g] = (a / r) & 255;
          return b + d;
        };
        c.prototype.writeUInt8 = function (a, b, d) {
          a = +a;
          b |= 0;
          d || A(this, a, b, 1, 255, 0);
          c.TYPED_ARRAY_SUPPORT || (a = Math.floor(a));
          this[b] = a & 255;
          return b + 1;
        };
        c.prototype.writeUInt16LE = function (a, b, d) {
          a = +a;
          b |= 0;
          d || A(this, a, b, 2, 65535, 0);
          c.TYPED_ARRAY_SUPPORT
            ? ((this[b] = a & 255), (this[b + 1] = a >>> 8))
            : f(this, a, b, !0);
          return b + 2;
        };
        c.prototype.writeUInt16BE = function (a, b, d) {
          a = +a;
          b |= 0;
          d || A(this, a, b, 2, 65535, 0);
          c.TYPED_ARRAY_SUPPORT
            ? ((this[b] = a >>> 8), (this[b + 1] = a & 255))
            : f(this, a, b, !1);
          return b + 2;
        };
        c.prototype.writeUInt32LE = function (a, b, d) {
          a = +a;
          b |= 0;
          d || A(this, a, b, 4, 4294967295, 0);
          c.TYPED_ARRAY_SUPPORT
            ? ((this[b + 3] = a >>> 24),
              (this[b + 2] = a >>> 16),
              (this[b + 1] = a >>> 8),
              (this[b] = a & 255))
            : H(this, a, b, !0);
          return b + 4;
        };
        c.prototype.writeUInt32BE = function (a, b, d) {
          a = +a;
          b |= 0;
          d || A(this, a, b, 4, 4294967295, 0);
          c.TYPED_ARRAY_SUPPORT
            ? ((this[b] = a >>> 24),
              (this[b + 1] = a >>> 16),
              (this[b + 2] = a >>> 8),
              (this[b + 3] = a & 255))
            : H(this, a, b, !1);
          return b + 4;
        };
        c.prototype.writeIntLE = function (a, b, d, g) {
          a = +a;
          b |= 0;
          g || ((g = Math.pow(2, 8 * d - 1)), A(this, a, b, d, g - 1, -g));
          g = 0;
          var r = 1,
            C = 0;
          for (this[b] = a & 255; ++g < d && (r *= 256); )
            0 > a && 0 === C && 0 !== this[b + g - 1] && (C = 1),
              (this[b + g] = (((a / r) >> 0) - C) & 255);
          return b + d;
        };
        c.prototype.writeIntBE = function (a, b, d, g) {
          a = +a;
          b |= 0;
          g || ((g = Math.pow(2, 8 * d - 1)), A(this, a, b, d, g - 1, -g));
          g = d - 1;
          var r = 1,
            C = 0;
          for (this[b + g] = a & 255; 0 <= --g && (r *= 256); )
            0 > a && 0 === C && 0 !== this[b + g + 1] && (C = 1),
              (this[b + g] = (((a / r) >> 0) - C) & 255);
          return b + d;
        };
        c.prototype.writeInt8 = function (a, b, d) {
          a = +a;
          b |= 0;
          d || A(this, a, b, 1, 127, -128);
          c.TYPED_ARRAY_SUPPORT || (a = Math.floor(a));
          0 > a && (a = 255 + a + 1);
          this[b] = a & 255;
          return b + 1;
        };
        c.prototype.writeInt16LE = function (a, b, d) {
          a = +a;
          b |= 0;
          d || A(this, a, b, 2, 32767, -32768);
          c.TYPED_ARRAY_SUPPORT
            ? ((this[b] = a & 255), (this[b + 1] = a >>> 8))
            : f(this, a, b, !0);
          return b + 2;
        };
        c.prototype.writeInt16BE = function (a, b, d) {
          a = +a;
          b |= 0;
          d || A(this, a, b, 2, 32767, -32768);
          c.TYPED_ARRAY_SUPPORT
            ? ((this[b] = a >>> 8), (this[b + 1] = a & 255))
            : f(this, a, b, !1);
          return b + 2;
        };
        c.prototype.writeInt32LE = function (a, b, d) {
          a = +a;
          b |= 0;
          d || A(this, a, b, 4, 2147483647, -2147483648);
          c.TYPED_ARRAY_SUPPORT
            ? ((this[b] = a & 255),
              (this[b + 1] = a >>> 8),
              (this[b + 2] = a >>> 16),
              (this[b + 3] = a >>> 24))
            : H(this, a, b, !0);
          return b + 4;
        };
        c.prototype.writeInt32BE = function (a, b, d) {
          a = +a;
          b |= 0;
          d || A(this, a, b, 4, 2147483647, -2147483648);
          0 > a && (a = 4294967295 + a + 1);
          c.TYPED_ARRAY_SUPPORT
            ? ((this[b] = a >>> 24),
              (this[b + 1] = a >>> 16),
              (this[b + 2] = a >>> 8),
              (this[b + 3] = a & 255))
            : H(this, a, b, !1);
          return b + 4;
        };
        c.prototype.writeFloatLE = function (a, b, d) {
          return x(this, a, b, !0, d);
        };
        c.prototype.writeFloatBE = function (a, b, d) {
          return x(this, a, b, !1, d);
        };
        c.prototype.writeDoubleLE = function (a, b, d) {
          return y(this, a, b, !0, d);
        };
        c.prototype.writeDoubleBE = function (a, b, d) {
          return y(this, a, b, !1, d);
        };
        c.prototype.copy = function (a, b, d, g) {
          d || (d = 0);
          g || 0 === g || (g = this.length);
          b >= a.length && (b = a.length);
          b || (b = 0);
          0 < g && g < d && (g = d);
          if (g === d || 0 === a.length || 0 === this.length) return 0;
          if (0 > b) throw new RangeError('targetStart out of bounds');
          if (0 > d || d >= this.length)
            throw new RangeError('sourceStart out of bounds');
          if (0 > g) throw new RangeError('sourceEnd out of bounds');
          g > this.length && (g = this.length);
          a.length - b < g - d && (g = a.length - b + d);
          var r = g - d;
          if (this === a && d < b && b < g)
            for (g = r - 1; 0 <= g; --g) a[g + b] = this[g + d];
          else if (1e3 > r || !c.TYPED_ARRAY_SUPPORT)
            for (g = 0; g < r; ++g) a[g + b] = this[g + d];
          else Uint8Array.prototype.set.call(a, this.subarray(d, d + r), b);
          return r;
        };
        c.prototype.fill = function (a, b, d, g) {
          if ('string' === typeof a) {
            'string' === typeof b
              ? ((g = b), (b = 0), (d = this.length))
              : 'string' === typeof d && ((g = d), (d = this.length));
            if (1 === a.length) {
              var r = a.charCodeAt(0);
              256 > r && (a = r);
            }
            if (void 0 !== g && 'string' !== typeof g)
              throw new TypeError('encoding must be a string');
            if ('string' === typeof g && !c.isEncoding(g))
              throw new TypeError('Unknown encoding: ' + g);
          } else 'number' === typeof a && (a &= 255);
          if (0 > b || this.length < b || this.length < d)
            throw new RangeError('Out of range index');
          if (d <= b) return this;
          b >>>= 0;
          d = void 0 === d ? this.length : d >>> 0;
          a || (a = 0);
          if ('number' === typeof a) for (g = b; g < d; ++g) this[g] = a;
          else
            for (
              a = c.isBuffer(a) ? a : B(new c(a, g).toString()),
                r = a.length,
                g = 0;
              g < d - b;
              ++g
            )
              this[g + b] = a[g % r];
          return this;
        };
        var ba = /[^+\/0-9A-Za-z-_]/g;
      }).call(this, q(14));
    },
    function (t, p) {
      p = (function () {
        return this;
      })();
      try {
        p = p || new Function('return this')();
      } catch (q) {
        'object' === typeof window && (p = window);
      }
      t.exports = p;
    },
    function (t, p, q) {
      function n(e) {
        var k = e.length;
        if (0 < k % 4)
          throw Error('Invalid string. Length must be a multiple of 4');
        e = e.indexOf('=');
        -1 === e && (e = k);
        return [e, e === k ? 0 : 4 - (e % 4)];
      }
      p.byteLength = function (e) {
        e = n(e);
        var k = e[1];
        return (3 * (e[0] + k)) / 4 - k;
      };
      p.toByteArray = function (e) {
        var k = n(e);
        var l = k[0];
        k = k[1];
        var u = new c((3 * (l + k)) / 4 - k),
          v = 0,
          z = 0 < k ? l - 4 : l,
          D;
        for (D = 0; D < z; D += 4)
          (l =
            (h[e.charCodeAt(D)] << 18) |
            (h[e.charCodeAt(D + 1)] << 12) |
            (h[e.charCodeAt(D + 2)] << 6) |
            h[e.charCodeAt(D + 3)]),
            (u[v++] = (l >> 16) & 255),
            (u[v++] = (l >> 8) & 255),
            (u[v++] = l & 255);
        2 === k &&
          ((l = (h[e.charCodeAt(D)] << 2) | (h[e.charCodeAt(D + 1)] >> 4)),
          (u[v++] = l & 255));
        1 === k &&
          ((l =
            (h[e.charCodeAt(D)] << 10) |
            (h[e.charCodeAt(D + 1)] << 4) |
            (h[e.charCodeAt(D + 2)] >> 2)),
          (u[v++] = (l >> 8) & 255),
          (u[v++] = l & 255));
        return u;
      };
      p.fromByteArray = function (e) {
        for (
          var k = e.length, l = k % 3, u = [], v = 0, z = k - l;
          v < z;
          v += 16383
        ) {
          for (
            var D = u,
              w = D.push,
              F,
              O = e,
              S = v + 16383 > z ? z : v + 16383,
              N = [],
              I = v;
            I < S;
            I += 3
          )
            (F =
              ((O[I] << 16) & 16711680) +
              ((O[I + 1] << 8) & 65280) +
              (O[I + 2] & 255)),
              N.push(
                m[(F >> 18) & 63] +
                  m[(F >> 12) & 63] +
                  m[(F >> 6) & 63] +
                  m[F & 63]
              );
          F = N.join('');
          w.call(D, F);
        }
        1 === l
          ? ((e = e[k - 1]), u.push(m[e >> 2] + m[(e << 4) & 63] + '=='))
          : 2 === l &&
            ((e = (e[k - 2] << 8) + e[k - 1]),
            u.push(m[e >> 10] + m[(e >> 4) & 63] + m[(e << 2) & 63] + '='));
        return u.join('');
      };
      var m = [],
        h = [],
        c = 'undefined' !== typeof Uint8Array ? Uint8Array : Array;
      for (t = 0; 64 > t; ++t)
        (m[t] =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[
            t
          ]),
          (h[
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charCodeAt(
              t
            )
          ] = t);
      h[45] = 62;
      h[95] = 63;
    },
    function (t, p) {
      p.read = function (q, n, m, h, c) {
        var e = 8 * c - h - 1;
        var k = (1 << e) - 1,
          l = k >> 1,
          u = -7;
        c = m ? c - 1 : 0;
        var v = m ? -1 : 1,
          z = q[n + c];
        c += v;
        m = z & ((1 << -u) - 1);
        z >>= -u;
        for (u += e; 0 < u; m = 256 * m + q[n + c], c += v, u -= 8);
        e = m & ((1 << -u) - 1);
        m >>= -u;
        for (u += h; 0 < u; e = 256 * e + q[n + c], c += v, u -= 8);
        if (0 === m) m = 1 - l;
        else {
          if (m === k) return e ? NaN : Infinity * (z ? -1 : 1);
          e += Math.pow(2, h);
          m -= l;
        }
        return (z ? -1 : 1) * e * Math.pow(2, m - h);
      };
      p.write = function (q, n, m, h, c, e) {
        var k,
          l = 8 * e - c - 1,
          u = (1 << l) - 1,
          v = u >> 1,
          z = 23 === c ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        e = h ? 0 : e - 1;
        var D = h ? 1 : -1,
          w = 0 > n || (0 === n && 0 > 1 / n) ? 1 : 0;
        n = Math.abs(n);
        isNaN(n) || Infinity === n
          ? ((n = isNaN(n) ? 1 : 0), (h = u))
          : ((h = Math.floor(Math.log(n) / Math.LN2)),
            1 > n * (k = Math.pow(2, -h)) && (h--, (k *= 2)),
            (n = 1 <= h + v ? n + z / k : n + z * Math.pow(2, 1 - v)),
            2 <= n * k && (h++, (k /= 2)),
            h + v >= u
              ? ((n = 0), (h = u))
              : 1 <= h + v
                ? ((n = (n * k - 1) * Math.pow(2, c)), (h += v))
                : ((n = n * Math.pow(2, v - 1) * Math.pow(2, c)), (h = 0)));
        for (; 8 <= c; q[m + e] = n & 255, e += D, n /= 256, c -= 8);
        h = (h << c) | n;
        for (l += c; 0 < l; q[m + e] = h & 255, e += D, h /= 256, l -= 8);
        q[m + e - D] |= 128 * w;
      };
    },
    function (t, p) {
      var q = {}.toString;
      t.exports =
        Array.isArray ||
        function (n) {
          return '[object Array]' == q.call(n);
        };
    },
  ]);
}).call(this || window);
