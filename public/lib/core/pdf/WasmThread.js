(function () {
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
  $jscomp.arrayIteratorImpl = function (p) {
    var l = 0;
    return function () {
      return l < p.length ? { done: !1, value: p[l++] } : { done: !0 };
    };
  };
  $jscomp.arrayIterator = function (p) {
    return { next: $jscomp.arrayIteratorImpl(p) };
  };
  $jscomp.makeIterator = function (p) {
    var l =
      'undefined' != typeof Symbol && Symbol.iterator && p[Symbol.iterator];
    if (l) return l.call(p);
    if ('number' == typeof p.length) return $jscomp.arrayIterator(p);
    throw Error(String(p) + ' is not an iterable or ArrayLike');
  };
  $jscomp.ASSUME_ES5 = !1;
  $jscomp.ASSUME_NO_NATIVE_MAP = !1;
  $jscomp.ASSUME_NO_NATIVE_SET = !1;
  $jscomp.SIMPLE_FROUND_POLYFILL = !1;
  $jscomp.ISOLATE_POLYFILLS = !1;
  $jscomp.FORCE_POLYFILL_PROMISE = !1;
  $jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
  $jscomp.getGlobal = function (p) {
    p = [
      'object' == typeof globalThis && globalThis,
      p,
      'object' == typeof window && window,
      'object' == typeof self && self,
      'object' == typeof global && global,
    ];
    for (var l = 0; l < p.length; ++l) {
      var q = p[l];
      if (q && q.Math == Math) return q;
    }
    throw Error('Cannot find global object');
  };
  $jscomp.global = $jscomp.getGlobal(this);
  $jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || 'function' == typeof Object.defineProperties
      ? Object.defineProperty
      : function (p, l, q) {
          if (p == Array.prototype || p == Object.prototype) return p;
          p[l] = q.value;
          return p;
        };
  $jscomp.IS_SYMBOL_NATIVE =
    'function' === typeof Symbol && 'symbol' === typeof Symbol('x');
  $jscomp.TRUST_ES6_POLYFILLS =
    !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
  $jscomp.polyfills = {};
  $jscomp.propertyToPolyfillSymbol = {};
  $jscomp.POLYFILL_PREFIX = '$jscp$';
  var $jscomp$lookupPolyfilledValue = function (p, l, q) {
    if (!q || null != p) {
      q = $jscomp.propertyToPolyfillSymbol[l];
      if (null == q) return p[l];
      q = p[q];
      return void 0 !== q ? q : p[l];
    }
  };
  $jscomp.polyfill = function (p, l, q, n) {
    l &&
      ($jscomp.ISOLATE_POLYFILLS
        ? $jscomp.polyfillIsolated(p, l, q, n)
        : $jscomp.polyfillUnisolated(p, l, q, n));
  };
  $jscomp.polyfillUnisolated = function (p, l, q, n) {
    q = $jscomp.global;
    p = p.split('.');
    for (n = 0; n < p.length - 1; n++) {
      var k = p[n];
      if (!(k in q)) return;
      q = q[k];
    }
    p = p[p.length - 1];
    n = q[p];
    l = l(n);
    l != n &&
      null != l &&
      $jscomp.defineProperty(q, p, {
        configurable: !0,
        writable: !0,
        value: l,
      });
  };
  $jscomp.polyfillIsolated = function (p, l, q, n) {
    var k = p.split('.');
    p = 1 === k.length;
    n = k[0];
    n = !p && n in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var r = 0; r < k.length - 1; r++) {
      var g = k[r];
      if (!(g in n)) return;
      n = n[g];
    }
    k = k[k.length - 1];
    q = $jscomp.IS_SYMBOL_NATIVE && 'es6' === q ? n[k] : null;
    l = l(q);
    null != l &&
      (p
        ? $jscomp.defineProperty($jscomp.polyfills, k, {
            configurable: !0,
            writable: !0,
            value: l,
          })
        : l !== q &&
          (void 0 === $jscomp.propertyToPolyfillSymbol[k] &&
            ((q = (1e9 * Math.random()) >>> 0),
            ($jscomp.propertyToPolyfillSymbol[k] = $jscomp.IS_SYMBOL_NATIVE
              ? $jscomp.global.Symbol(k)
              : $jscomp.POLYFILL_PREFIX + q + '$' + k)),
          $jscomp.defineProperty(n, $jscomp.propertyToPolyfillSymbol[k], {
            configurable: !0,
            writable: !0,
            value: l,
          })));
  };
  $jscomp.polyfill(
    'Promise',
    function (p) {
      function l() {
        this.batch_ = null;
      }
      function q(g) {
        return g instanceof k
          ? g
          : new k(function (m, t) {
              m(g);
            });
      }
      if (
        p &&
        (!(
          $jscomp.FORCE_POLYFILL_PROMISE ||
          ($jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION &&
            'undefined' === typeof $jscomp.global.PromiseRejectionEvent)
        ) ||
          !$jscomp.global.Promise ||
          -1 === $jscomp.global.Promise.toString().indexOf('[native code]'))
      )
        return p;
      l.prototype.asyncExecute = function (g) {
        if (null == this.batch_) {
          this.batch_ = [];
          var m = this;
          this.asyncExecuteFunction(function () {
            m.executeBatch_();
          });
        }
        this.batch_.push(g);
      };
      var n = $jscomp.global.setTimeout;
      l.prototype.asyncExecuteFunction = function (g) {
        n(g, 0);
      };
      l.prototype.executeBatch_ = function () {
        for (; this.batch_ && this.batch_.length; ) {
          var g = this.batch_;
          this.batch_ = [];
          for (var m = 0; m < g.length; ++m) {
            var t = g[m];
            g[m] = null;
            try {
              t();
            } catch (v) {
              this.asyncThrow_(v);
            }
          }
        }
        this.batch_ = null;
      };
      l.prototype.asyncThrow_ = function (g) {
        this.asyncExecuteFunction(function () {
          throw g;
        });
      };
      var k = function (g) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        this.isRejectionHandled_ = !1;
        var m = this.createResolveAndReject_();
        try {
          g(m.resolve, m.reject);
        } catch (t) {
          m.reject(t);
        }
      };
      k.prototype.createResolveAndReject_ = function () {
        function g(v) {
          return function (w) {
            t || ((t = !0), v.call(m, w));
          };
        }
        var m = this,
          t = !1;
        return { resolve: g(this.resolveTo_), reject: g(this.reject_) };
      };
      k.prototype.resolveTo_ = function (g) {
        if (g === this)
          this.reject_(new TypeError('A Promise cannot resolve to itself'));
        else if (g instanceof k) this.settleSameAsPromise_(g);
        else {
          a: switch (typeof g) {
            case 'object':
              var m = null != g;
              break a;
            case 'function':
              m = !0;
              break a;
            default:
              m = !1;
          }
          m ? this.resolveToNonPromiseObj_(g) : this.fulfill_(g);
        }
      };
      k.prototype.resolveToNonPromiseObj_ = function (g) {
        var m = void 0;
        try {
          m = g.then;
        } catch (t) {
          this.reject_(t);
          return;
        }
        'function' == typeof m
          ? this.settleSameAsThenable_(m, g)
          : this.fulfill_(g);
      };
      k.prototype.reject_ = function (g) {
        this.settle_(2, g);
      };
      k.prototype.fulfill_ = function (g) {
        this.settle_(1, g);
      };
      k.prototype.settle_ = function (g, m) {
        if (0 != this.state_)
          throw Error(
            'Cannot settle(' +
              g +
              ', ' +
              m +
              '): Promise already settled in state' +
              this.state_
          );
        this.state_ = g;
        this.result_ = m;
        2 === this.state_ && this.scheduleUnhandledRejectionCheck_();
        this.executeOnSettledCallbacks_();
      };
      k.prototype.scheduleUnhandledRejectionCheck_ = function () {
        var g = this;
        n(function () {
          if (g.notifyUnhandledRejection_()) {
            var m = $jscomp.global.console;
            'undefined' !== typeof m && m.error(g.result_);
          }
        }, 1);
      };
      k.prototype.notifyUnhandledRejection_ = function () {
        if (this.isRejectionHandled_) return !1;
        var g = $jscomp.global.CustomEvent,
          m = $jscomp.global.Event,
          t = $jscomp.global.dispatchEvent;
        if ('undefined' === typeof t) return !0;
        'function' === typeof g
          ? (g = new g('unhandledrejection', { cancelable: !0 }))
          : 'function' === typeof m
            ? (g = new m('unhandledrejection', { cancelable: !0 }))
            : ((g = $jscomp.global.document.createEvent('CustomEvent')),
              g.initCustomEvent('unhandledrejection', !1, !0, g));
        g.promise = this;
        g.reason = this.result_;
        return t(g);
      };
      k.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
          for (var g = 0; g < this.onSettledCallbacks_.length; ++g)
            r.asyncExecute(this.onSettledCallbacks_[g]);
          this.onSettledCallbacks_ = null;
        }
      };
      var r = new l();
      k.prototype.settleSameAsPromise_ = function (g) {
        var m = this.createResolveAndReject_();
        g.callWhenSettled_(m.resolve, m.reject);
      };
      k.prototype.settleSameAsThenable_ = function (g, m) {
        var t = this.createResolveAndReject_();
        try {
          g.call(m, t.resolve, t.reject);
        } catch (v) {
          t.reject(v);
        }
      };
      k.prototype.then = function (g, m) {
        function t(y, z) {
          return 'function' == typeof y
            ? function (A) {
                try {
                  v(y(A));
                } catch (C) {
                  w(C);
                }
              }
            : z;
        }
        var v,
          w,
          E = new k(function (y, z) {
            v = y;
            w = z;
          });
        this.callWhenSettled_(t(g, v), t(m, w));
        return E;
      };
      k.prototype.catch = function (g) {
        return this.then(void 0, g);
      };
      k.prototype.callWhenSettled_ = function (g, m) {
        function t() {
          switch (v.state_) {
            case 1:
              g(v.result_);
              break;
            case 2:
              m(v.result_);
              break;
            default:
              throw Error('Unexpected state: ' + v.state_);
          }
        }
        var v = this;
        null == this.onSettledCallbacks_
          ? r.asyncExecute(t)
          : this.onSettledCallbacks_.push(t);
        this.isRejectionHandled_ = !0;
      };
      k.resolve = q;
      k.reject = function (g) {
        return new k(function (m, t) {
          t(g);
        });
      };
      k.race = function (g) {
        return new k(function (m, t) {
          for (
            var v = $jscomp.makeIterator(g), w = v.next();
            !w.done;
            w = v.next()
          )
            q(w.value).callWhenSettled_(m, t);
        });
      };
      k.all = function (g) {
        var m = $jscomp.makeIterator(g),
          t = m.next();
        return t.done
          ? q([])
          : new k(function (v, w) {
              function E(A) {
                return function (C) {
                  y[A] = C;
                  z--;
                  0 == z && v(y);
                };
              }
              var y = [],
                z = 0;
              do
                y.push(void 0),
                  z++,
                  q(t.value).callWhenSettled_(E(y.length - 1), w),
                  (t = m.next());
              while (!t.done);
            });
      };
      return k;
    },
    'es6',
    'es3'
  );
  (function (p) {
    function l(n) {
      if (q[n]) return q[n].exports;
      var k = (q[n] = { i: n, l: !1, exports: {} });
      p[n].call(k.exports, k, k.exports, l);
      k.l = !0;
      return k.exports;
    }
    var q = {};
    l.m = p;
    l.c = q;
    l.d = function (n, k, r) {
      l.o(n, k) || Object.defineProperty(n, k, { enumerable: !0, get: r });
    };
    l.r = function (n) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' });
      Object.defineProperty(n, '__esModule', { value: !0 });
    };
    l.t = function (n, k) {
      k & 1 && (n = l(n));
      if (k & 8 || (k & 4 && 'object' === typeof n && n && n.__esModule))
        return n;
      var r = Object.create(null);
      l.r(r);
      Object.defineProperty(r, 'default', { enumerable: !0, value: n });
      if (k & 2 && 'string' != typeof n)
        for (var g in n)
          l.d(
            r,
            g,
            function (m) {
              return n[m];
            }.bind(null, g)
          );
      return r;
    };
    l.n = function (n) {
      var k =
        n && n.__esModule
          ? function () {
              return n['default'];
            }
          : function () {
              return n;
            };
      l.d(k, 'a', k);
      return k;
    };
    l.o = function (n, k) {
      return Object.prototype.hasOwnProperty.call(n, k);
    };
    l.p = '/core';
    return l((l.s = 1));
  })([
    function (p, l, q) {
      (function (n) {
        q.d(l, 'b', function () {
          return B;
        });
        q.d(l, 'a', function () {
          return K;
        });
        q.d(l, 'c', function () {
          return D;
        });
        q.d(l, 'd', function () {
          return H;
        });
        var k = q(4);
        q.n(k);
        var r = window,
          g = (function () {
            return function (b, c) {
              this.fsQ = this.fs_read_counter = 0;
              this.needCallback = !1;
              this.fs_read_total = b;
              this.fsQ = c;
            };
          })();
        r.AsyncFSHack = { readingAsyncFS: 0, readingCounter: 0, readCalls: {} };
        var m = r.Module,
          t = 0,
          v = {},
          w = function (b) {
            r.AsyncFSHack.readingAsyncFS = 1;
            b in r.AsyncFSHack.readCalls ||
              (r.AsyncFSHack.readCalls[b] = new g(
                r.AsyncFSHack.read_total,
                r.AsyncFSHack.q
              ));
          },
          E = function (b) {
            var c = r.AsyncFSHack.readCalls[b];
            ++c.fs_read_counter;
            c.fs_read_counter >= c.fs_read_total &&
              (c.needCallback
                ? m._finish_do_call_operation(c.fsQ)
                : (r.AsyncFSHack.readingAsyncFS = 0),
              delete r.AsyncFSHack.readCalls[b]);
          },
          y = function (b, c, h, f, d, a) {
            this.lruList = [];
            this.chunkMap = {};
            this.chunkReader = {};
            this.chunkMap[c] = f;
            this.length = c;
            this.cacheDataSize = h;
            this.url = b;
            this.customHeaders = d;
            this.withCredentials = a;
            this.chunkSize = 1048576;
          };
        y.prototype = {
          lruUpdate: function (b) {
            var c = this.lruList.lastIndexOf(b);
            0 <= c && this.lruList.splice(c, 1);
            this.lruList.push(b);
          },
          downloadChunk: function (b, c) {
            var h = !1;
            b in this.chunkReader || ((this.chunkReader[b] = []), (h = !0));
            c && this.chunkReader[b].push(c);
            if (h) {
              c = Math.min(b + this.chunkSize, this.length) - 1;
              var f = new XMLHttpRequest();
              f.open('GET', this.url, !0);
              f.responseType = 'arraybuffer';
              f.setRequestHeader('Range', ['bytes=', b, '-', c].join(''));
              this.withCredentials &&
                (f.withCredentials = this.withCredentials);
              if (this.customHeaders)
                for (var d in this.customHeaders)
                  f.setRequestHeader(d, this.customHeaders[d]);
              f.send();
              var a = this;
              f.onload = function () {
                if (200 === f.status || 206 === f.status) {
                  var e = new Int8Array(f.response);
                  a.writeChunk(e, b);
                } else
                  window.parent.parentWarn('Failed to load data from' + a.url),
                    (e = new Int8Array(0));
                for (var u = a.chunkReader[b], x = 0; x < u.length; x++)
                  u[x](e);
                delete a.chunkReader[b];
              };
            }
          },
          hadChunk: function (b) {
            return b in this.chunkMap;
          },
          hasChunk: function (b) {
            return this.chunkMap[b];
          },
          getCacheData: function () {
            return this.chunkMap[this.length];
          },
          updateCache: function (b) {
            for (var c = 0; c < b.length; c++) {
              var h = b[c];
              this.hadChunk(h) &&
                (this.hasChunk(h) ? this.lruUpdate(h) : this.downloadChunk(h));
            }
          },
          wrapChunkRetrieval: function (b, c, h) {
            this.downloadChunk(b, function (f) {
              h(f, c);
            });
          },
          downloadChunks: function (b, c) {
            for (
              var h = b.length,
                f = Array(h),
                d = 0,
                a = function (u, x) {
                  f[x] = u;
                  ++d;
                  d === h && c(f);
                },
                e = 0;
              e < h;
              ++e
            )
              this.wrapChunkRetrieval(b[e][0], e, a);
          },
          readFromCache: function (b, c, h) {
            var f = [],
              d = 0,
              a = Math.floor(c / this.chunkSize) * this.chunkSize,
              e = c % this.chunkSize;
            c = this.chunkSize - e;
            c = c > h ? h : c;
            this.chunkMap[a]
              ? ((e = this.chunkMap[a].subarray(e, e + c)),
                b.set(e),
                this.lruUpdate(a))
              : this.hadChunk(a)
                ? f.push([a, e, c, d])
                : ((e = new Int8Array(c)), b.set(e));
            for (h -= c; 0 < h; )
              (d += c),
                (a += this.chunkSize),
                (c = this.chunkSize > h ? h : this.chunkSize),
                this.chunkMap[a]
                  ? ((e = this.chunkMap[a].subarray(0, c)),
                    b.set(e, d),
                    this.lruUpdate(a))
                  : this.hadChunk(a)
                    ? f.push([a, 0, c, d])
                    : ((e = new Int8Array(c)), b.set(e, d)),
                (h -= c);
            return f;
          },
          writeChunk: function (b, c, h) {
            h = h || 0;
            var f = this.chunkMap[c],
              d = b.length,
              a = this.lruList.length >= m.chunkMax && !f;
            d !== this.chunkSize || b.buffer.byteLength !== d
              ? (a
                  ? ((f = this.lruList.shift()),
                    (a = this.chunkMap[f]),
                    a.length < this.chunkSize &&
                      (a = new Int8Array(this.chunkSize)),
                    (this.chunkMap[f] = null))
                  : (a = f ? this.chunkMap[c] : new Int8Array(this.chunkSize)),
                a.subarray(h, h + d).set(b),
                (b = a))
              : a && ((f = this.lruList.shift()), (this.chunkMap[f] = null));
            this.lruUpdate(c);
            this.chunkMap[c] = b;
          },
        };
        var z = function (b) {
          this.chunkStorage = b;
          this.position = 0;
          this.length = this.chunkStorage.length;
        };
        z.prototype = {
          read: function (b, c, h, f) {
            var d = f + h <= this.length,
              a = d ? h : this.length - f,
              e = r.AsyncFSHack.readingCounter.toString();
            if (0 < a) {
              w(e);
              var u = b.subarray(c, c + a);
              var x = this.chunkStorage.readFromCache(u, f, a);
              x.length
                ? ((r.AsyncFSHack.readCalls[e].needCallback = !0),
                  this.chunkStorage.downloadChunks(x, function (L) {
                    for (var I = 0; I < L.length; ++I) {
                      var J = x[I],
                        M = L[I].subarray(J[1], J[1] + J[2]);
                      u.set(M, J[3]);
                    }
                    E(e);
                  }))
                : d && E(e);
              f += a;
            } else a = 0;
            if (!d) {
              w(e);
              c += a;
              if ((h -= a)) {
                d = this.chunkStorage.getCacheData();
                h > d.length && (h = d.length);
                var G = f - this.length;
                h -= G;
                b = b.subarray(c, c + h);
                c = d.subarray(G, G + h);
                b.set(c);
              }
              (x && x.length) || E(e);
              f += h;
              a += h;
            }
            this.position = f;
            return a;
          },
          write: function (b, c, h, f) {
            var d = f + h <= this.length,
              a = f + h <= this.length ? h : this.length - f;
            if (0 < a) {
              var e = b.subarray(c, c + a),
                u = f % 1048576;
              this.chunkStorage.writeChunk(e, f - u, u);
              f += a;
            } else a = 0;
            if (!d) {
              e = c + a;
              if ((h -= a))
                (c = this.chunkStorage.getCacheData()),
                  h > c.length && (h = c.length),
                  (d = f - this.length),
                  (h -= d),
                  (e = b.subarray(e, e + h)),
                  c.subarray(d, d + h).set(e);
              f += h;
              a += h;
            }
            this.position = f;
            return a;
          },
          seek: function (b) {
            this.position = b;
          },
          close: function () {
            this.chunkStorage = null;
          },
          getPos: function () {
            return this.position;
          },
          getTotalSize: function () {
            return this.length + this.chunkStorage.cacheDataSize;
          },
        };
        var A = function (b) {
          this.file = b;
          this.filePosition = 0;
          this.fileLength = b.size;
          this.readerPool = [];
        };
        A.prototype = {
          readFromFile: function (b, c, h) {
            var f = this.readerPool.length
              ? this.readerPool.pop()
              : new FileReader();
            var d = this;
            f.onload = function () {
              var a = new Int8Array(f.result);
              d.readerPool.push(f);
              h(a);
            };
            f.readAsArrayBuffer(this.file.slice(c, c + b));
          },
          read: function (b, c, h, f) {
            h = f + h <= this.fileLength ? h : this.fileLength - f;
            if (0 < h) {
              var d = r.AsyncFSHack.readingCounter.toString();
              w(d);
              var a = b.subarray(c, c + h);
              r.AsyncFSHack.readCalls[d].needCallback = !0;
              this.readFromFile(h, f, function (e) {
                a.set(e);
                E(d);
              });
              this.filePosition = f + h;
            }
            return h;
          },
          seek: function (b) {
            this.filePosition = b;
          },
          close: function () {
            this.reader = this.file = null;
          },
          getPos: function () {
            return this.filePosition;
          },
          getTotalSize: function () {
            return this.fileLength;
          },
        };
        var C = {
            open: function (b) {
              var c = b.path.slice(1);
              b.provider = m.docs[c].chunkStorage
                ? new z(m.docs[c].chunkStorage)
                : new A(m.docs[c]);
            },
            close: function (b) {
              b.provider.close();
            },
            read: function (b, c, h, f, d) {
              return b.provider.read(c, h, f, d);
            },
            llseek: function (b, c, h) {
              b = b.provider;
              1 === h
                ? (c += b.getPos())
                : 2 === h && (c = b.getTotalSize() + c);
              if (0 > c) throw new r.FS.ErrnoError(n.ERRNO_CODES.EINVAL);
              b.seek(c);
              return c;
            },
            write: function (b, c, h, f, d) {
              return f ? b.provider.write(c, h, f, d) : 0;
            },
          },
          F = function (b) {
            if (!v[b]) {
              var c = r.FS.makedev(3, 5);
              r.FS.registerDevice(c, C);
              r.FS.mkdev(b, 511, c);
              v[b] = !0;
            }
          },
          B = function (b, c, h, f) {
            var d = 'docdev' + ++t;
            F(d);
            var a = Math.ceil((c + 1048576 - 1) / 1048576 / 8),
              e = new Int8Array(new ArrayBuffer(a));
            b = new y(b, c, a, e, h, f);
            m.docs[d] = { chunkStorage: b };
            return d;
          },
          K = function (b) {
            var c = 'docdev' + ++t;
            F(c);
            m.docs[c] = b;
            return c;
          },
          D = function (b) {
            r.FS.unlink(b);
            m.docs[b] && delete m.docs[b];
          },
          H = function (b) {
            var c = Object.prototype.toString.call(b);
            return (
              'object' === typeof b &&
              null !== b &&
              ('[object File]' === c || '[object Blob]' === c)
            );
          };
      }).call(this, q(3));
    },
    function (p, l, q) {
      p.exports = q(2);
    },
    function (p, l, q) {
      function n(h) {
        '@babel/helpers - typeof';
        return (
          (n =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (f) {
                  return typeof f;
                }
              : function (f) {
                  return f &&
                    'function' == typeof Symbol &&
                    f.constructor === Symbol &&
                    f !== Symbol.prototype
                    ? 'symbol'
                    : typeof f;
                }),
          n(h)
        );
      }
      q.r(l);
      var k = q(0),
        r = window,
        g;
      r.Module.onRuntimeInitialized = function () {
        m = !0;
        v || (D.handleMessage({ action: 'workerLoaded', data: {} }), (v = !0));
        D.sendTestResponse();
        r.PThread.receiveObjectTransfer = function () {
          var h = r.Module.GetNextResponseMessage();
          r.getThreadedWasmWorker().handleMessage(h);
          r.Module.PopNextResponseMessage();
        };
      };
      r.Module.locateFile = function (h) {
        return g + h;
      };
      r.Module.INITIAL_MEMORY = 100663296;
      var m = !1,
        t = !1,
        v = !1,
        w = 1,
        E = function d(f) {
          if ('object' === n(f) && null !== f)
            if ('undefined' !== typeof f.byteLength) {
              var a = 'mainThreadArrayBuffer'.concat(w);
              w++;
              f = new Uint8Array(f);
              r.FS.writeFile(a, f);
              f = { handle: a, isArrayBufferRef: !0 };
            } else for (a in f) f.hasOwnProperty(a) && (f[a] = d(f[a]));
          return f;
        },
        y = function a(d) {
          if ('object' === n(d) && null !== d)
            if (d.isArrayBufferRef) {
              var e = r.FS.readFile(d.handle, { encoding: 'binary' });
              r.FS.unlink(d.handle);
              d = e.buffer;
            } else if (d.constructor === Uint8Array)
              d = new Uint8Array(d).buffer;
            else for (e in d) d.hasOwnProperty(e) && (d[e] = a(d[e]));
          return d;
        },
        z = 0,
        A = {},
        C = {},
        F = {},
        B = {},
        K = function (d) {
          var a = d.action,
            e = d.data,
            u = d.callbackId;
          if ('NewDoc' === a && e)
            (a = e.value),
              'url' === e.type
                ? ((a = Object(k.b)(
                    a.url,
                    a.size,
                    a.customHeaders,
                    a.withCredentials
                  )),
                  (C[u] = a),
                  (e.value.docDevId = a))
                : Object(k.d)(a) &&
                  ((a = Object(k.a)(a)), (C[u] = a), (e.value = a));
          else if (('SaveDoc' !== a && 'SaveDocFromFixedElements' !== a) || !e)
            'GetCanvas' === a && e
              ? ((u = e.docId),
                u in B &&
                  ((a = B[u]),
                  a in r.Module.docs &&
                    ((a = r.Module.docs[a]),
                    'chunkStorage' in a &&
                      ((e = r.Module.GetRequiredChunkOffsetArray(
                        u,
                        e.pageIndex + 1
                      )),
                      e.length && a.chunkStorage.updateCache(e)))))
              : 'DeleteDocument' === a &&
                e &&
                ((e = e.docId), e in B && (F[u] = e));
          else {
            a = e.docId;
            var x = e.finishedWithDocument,
              G = 'docFilePath'.concat(z);
            A[u] = { filePath: G, docId: a, finishedWithDocument: x };
            z++;
            e.filePath = G;
          }
          r.Module.HandleMessage(E(d));
        },
        D;
      r.MainThreadLabel = !0;
      r.getThreadedWasmWorker = function () {
        return D;
      };
      var H = function (d) {
        window.parent.loadThreadedBackend(
          d,
          { 'Wasm.wasm': 1e7, 'Wasm.js': 15e4 },
          window
        );
        this.eventListeners = [];
      };
      H.prototype = {
        addEventListener: function (d, a) {
          if ('message' === d) this.eventListeners.push(a);
          else
            throw Error(
              'event type '.concat(d, ' is not supported by WasmWorker.')
            );
        },
        removeEventListener: function (d, a) {
          'message' === d &&
            (this.eventListeners = this.eventListeners.filter(function (e) {
              return e !== a;
            }));
        },
        sendTestResponse: function () {
          m &&
            t &&
            (this.handleMessage({
              action: 'test',
              data: { supportTypedArray: !0, supportTransfers: !0 },
            }),
            (this.postMessage = K));
        },
        postMessage: function (d) {
          if ('test' === d.action) (t = !0), this.sendTestResponse();
          else throw Error('Need to do handshake first!');
        },
        handleMessage: function (d) {
          var a = d.callbackId,
            e = d.data;
          if (a in C)
            e && e.docId ? (B[e.docId] = C[a]) : Object(k.c)(C[a]), delete C[a];
          else if (a in A) {
            if (!d.hasOwnProperty('error')) {
              var u = A[a].filePath,
                x = r.FS.readFile(u, { encoding: 'binary' });
              e.fileData = x.buffer;
              e = A[a].docId;
              e in B && (Object(k.c)(B[e]), delete B[e]);
              e && !A[a].finishedWithDocument ? (B[e] = u) : r.FS.unlink(u);
            }
            delete A[a];
          } else
            a in F &&
              ((u = F[a]),
              u in B && (Object(k.c)(B[u]), delete B[u]),
              delete F[a]);
          d = y(d);
          window.parent.postMessage(d);
        },
        reset: function () {
          D = null;
          v = t = m = !1;
        },
      };
      var b = (function () {
          var d = {},
            a = new Promise(function (e, u) {
              d.resolve = e;
              d.reject = u;
            });
          d.promise = a;
          return d;
        })(),
        c = function e(a) {
          'object' === n(a.data) &&
            'action' in a.data &&
            'workerLoaded' === a.data.action &&
            (b.resolve(D), D.removeEventListener('message', e));
        };
      window.addEventListener('message', function (a) {
        var e = a.data;
        a.origin === window.location.origin && 'loadWasmWorker' === e.action
          ? ((g = e.workerFolder),
            (D = new H(''.concat(e.wasmSource, 'PDFNetThreaded'))),
            v || D.addEventListener('message', c))
          : D.postMessage(e);
      });
      r.getWasmWorkerPromise = function () {
        return b.promise;
      };
    },
    function (p, l) {
      l = (function () {
        return this;
      })();
      try {
        l = l || new Function('return this')();
      } catch (q) {
        'object' === typeof window && (l = window);
      }
      p.exports = l;
    },
    function (p, l) {
      window.Module = { chunkMax: 100, docs: {} };
    },
  ]);
}).call(this || window);
