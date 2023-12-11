(function () {
  function S(B) {
    var t = 0;
    return function () {
      return t < B.length ? { done: !1, value: B[t++] } : { done: !0 };
    };
  }
  var T =
    'function' == typeof Object.defineProperties
      ? Object.defineProperty
      : function (B, t, y) {
          if (B == Array.prototype || B == Object.prototype) return B;
          B[t] = y.value;
          return B;
        };
  function V(B) {
    B = [
      'object' == typeof globalThis && globalThis,
      B,
      'object' == typeof window && window,
      'object' == typeof self && self,
      'object' == typeof global && global,
    ];
    for (var t = 0; t < B.length; ++t) {
      var y = B[t];
      if (y && y.Math == Math) return y;
    }
    throw Error('Cannot find global object');
  }
  var W = V(this);
  function X(B, t) {
    if (t)
      a: {
        var y = W;
        B = B.split('.');
        for (var n = 0; n < B.length - 1; n++) {
          var m = B[n];
          if (!(m in y)) break a;
          y = y[m];
        }
        B = B[B.length - 1];
        n = y[B];
        t = t(n);
        t != n &&
          null != t &&
          T(y, B, { configurable: !0, writable: !0, value: t });
      }
  }
  X('Symbol', function (B) {
    function t(z) {
      if (this instanceof t) throw new TypeError('Symbol is not a constructor');
      return new y(n + (z || '') + '_' + m++, z);
    }
    function y(z, u) {
      this.Zc = z;
      T(this, 'description', { configurable: !0, writable: !0, value: u });
    }
    if (B) return B;
    y.prototype.toString = function () {
      return this.Zc;
    };
    var n = 'jscomp_symbol_' + ((1e9 * Math.random()) >>> 0) + '_',
      m = 0;
    return t;
  });
  X('Symbol.iterator', function (B) {
    if (B) return B;
    B = Symbol('Symbol.iterator');
    for (
      var t =
          'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
            ' '
          ),
        y = 0;
      y < t.length;
      y++
    ) {
      var n = W[t[y]];
      'function' === typeof n &&
        'function' != typeof n.prototype[B] &&
        T(n.prototype, B, {
          configurable: !0,
          writable: !0,
          value: function () {
            return Y(S(this));
          },
        });
    }
    return B;
  });
  function Y(B) {
    B = { next: B };
    B[Symbol.iterator] = function () {
      return this;
    };
    return B;
  }
  var Z =
    'function' == typeof Object.assign
      ? Object.assign
      : function (B, t) {
          for (var y = 1; y < arguments.length; y++) {
            var n = arguments[y];
            if (n)
              for (var m in n)
                Object.prototype.hasOwnProperty.call(n, m) && (B[m] = n[m]);
          }
          return B;
        };
  X('Object.assign', function (B) {
    return B || Z;
  });
  X('String.fromCodePoint', function (B) {
    return B
      ? B
      : function (t) {
          for (var y = '', n = 0; n < arguments.length; n++) {
            var m = Number(arguments[n]);
            if (0 > m || 1114111 < m || m !== Math.floor(m))
              throw new RangeError('invalid_code_point ' + m);
            65535 >= m
              ? (y += String.fromCharCode(m))
              : ((m -= 65536),
                (y += String.fromCharCode(((m >>> 10) & 1023) | 55296)),
                (y += String.fromCharCode((m & 1023) | 56320)));
          }
          return y;
        };
  });
  function aa(B, t) {
    B instanceof String && (B += '');
    var y = 0,
      n = !1,
      m = {
        next: function () {
          if (!n && y < B.length) {
            var z = y++;
            return { value: t(z, B[z]), done: !1 };
          }
          n = !0;
          return { done: !0, value: void 0 };
        },
      };
    m[Symbol.iterator] = function () {
      return m;
    };
    return m;
  }
  X('Array.prototype.keys', function (B) {
    return B
      ? B
      : function () {
          return aa(this, function (t) {
            return t;
          });
        };
  });
  (function (B) {
    function t(n) {
      if (y[n]) return y[n].exports;
      var m = (y[n] = { vf: n, pe: !1, exports: {} });
      B[n].call(m.exports, m, m.exports, t);
      m.pe = !0;
      return m.exports;
    }
    var y = {};
    t.c = y;
    t.d = function (n, m, z) {
      t.se(n, m) || Object.defineProperty(n, m, { enumerable: !0, get: z });
    };
    t.r = function (n) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' });
      Object.defineProperty(n, '__esModule', { value: !0 });
    };
    t.t = function (n, m) {
      m & 1 && (n = t(n));
      if (m & 8 || (m & 4 && 'object' === typeof n && n && n.ad)) return n;
      var z = Object.create(null);
      t.r(z);
      Object.defineProperty(z, 'default', { enumerable: !0, value: n });
      if (m & 2 && 'string' != typeof n)
        for (var u in n)
          t.d(
            z,
            u,
            function (E) {
              return n[E];
            }.bind(null, u)
          );
      return z;
    };
    t.n = function (n) {
      var m =
        n && n.ad
          ? function () {
              return n['default'];
            }
          : function () {
              return n;
            };
      t.d(m, 'a', m);
      return m;
    };
    t.se = function (n, m) {
      return Object.prototype.hasOwnProperty.call(n, m);
    };
    t.p = '/core/';
    return t(9);
  })([
    function (B, t, y) {
      function n(z, u) {
        z.splice(u, 1);
      }
      function m(z) {
        return z.length ? z[z.length - 1] : null;
      }
      y.d(t, 'a', function () {
        return m;
      });
      y.d(t, 'b', function () {
        return n;
      });
      y(6);
    },
    function (B, t, y) {
      function n(E, q) {
        var b;
        u[E] = q;
        null === (b = z[E]) || void 0 === b
          ? void 0
          : b.forEach(function (a) {
              a(q);
            });
      }
      function m(E) {
        return u[E];
      }
      y.d(t, 'a', function () {
        return m;
      });
      y.d(t, 'b', function () {
        return n;
      });
      var z = {},
        u = {
          flattenedResources: !1,
          CANVAS_CACHE_SIZE: void 0,
          maxPagesBefore: void 0,
          maxPagesAhead: void 0,
          disableLogs: !1,
          wvsQueryParameters: {},
          _trnDebugMode: !1,
          _logFiltersEnabled: null,
        };
    },
    function (B, t, y) {
      function n(z, u) {
        Object(m.a)('disableLogs') ||
          (u ? console.warn(z + ': ' + u) : console.warn(z));
      }
      y.d(t, 'a', function () {
        return n;
      });
      var m = y(1);
    },
    function (B, t) {
      B =
        'undefined' !== typeof Uint8Array &&
        'undefined' !== typeof Uint16Array &&
        'undefined' !== typeof Int32Array;
      t.assign = function (m) {
        for (var z = Array.prototype.slice.call(arguments, 1); z.length; ) {
          var u = z.shift();
          if (u) {
            if ('object' !== typeof u)
              throw new TypeError(u + 'must be non-object');
            for (var E in u)
              Object.prototype.hasOwnProperty.call(u, E) && (m[E] = u[E]);
          }
        }
        return m;
      };
      t.shrinkBuf = function (m, z) {
        if (m.length === z) return m;
        if (m.subarray) return m.subarray(0, z);
        m.length = z;
        return m;
      };
      var y = {
          arraySet: function (m, z, u, E, q) {
            if (z.subarray && m.subarray) m.set(z.subarray(u, u + E), q);
            else for (var b = 0; b < E; b++) m[q + b] = z[u + b];
          },
          flattenChunks: function (m) {
            var z, u;
            var E = (u = 0);
            for (z = m.length; E < z; E++) u += m[E].length;
            var q = new Uint8Array(u);
            E = u = 0;
            for (z = m.length; E < z; E++) {
              var b = m[E];
              q.set(b, u);
              u += b.length;
            }
            return q;
          },
        },
        n = {
          arraySet: function (m, z, u, E, q) {
            for (var b = 0; b < E; b++) m[q + b] = z[u + b];
          },
          flattenChunks: function (m) {
            return [].concat.apply([], m);
          },
        };
      t.ue = function (m) {
        m
          ? ((t.Buf8 = Uint8Array),
            (t.hb = Uint16Array),
            (t.ib = Int32Array),
            t.assign(t, y))
          : ((t.Buf8 = Array), (t.hb = Array), (t.ib = Array), t.assign(t, n));
      };
      t.ue(B);
    },
    function (B, t) {
      B = (function () {
        function y(n) {
          this.depth = this.index = 0;
          this.N = n;
          this.location = {
            start: 0,
            Lb: 1,
            Mb: 1,
            end: !!n.length,
            empty: !0,
          };
          this.sb = [this.location];
          this.kc = !1;
          '?' === this.N.charAt(1) && this.Uc();
          this.location.empty = !1;
        }
        y.prototype.advance = function () {
          this.Ca = null;
          this.Uc();
          var n = this.location.start;
          ++n;
          this.location.empty = !1;
          if ('/' !== this.N.charAt(n))
            return (
              (this.location.empty =
                '/' === this.N.charAt(this.N.indexOf('>', n) - 1)),
              !0
            );
          this.location.end = !0;
          return !1;
        };
        y.prototype.Xc = function () {
          var n = this.location.start + 1,
            m = this.N.indexOf('>', n);
          this.location.empty && --m;
          n = this.N.substring(n, m);
          this.Ca = {};
          m = n.indexOf(' ');
          if (-1 !== m) {
            this.Sc = n.substring(0, m);
            n = n.slice(m);
            n = n.split('"');
            m = n.length - 1;
            for (var z = 0; z < m; ++z) {
              var u = n[z],
                E = n[++z];
              this.Ca[u.substring(1, u.length - 1)] = E;
            }
          } else this.Sc = n;
        };
        y.prototype.Uc = function () {
          if (this.kc)
            (this.kc = !1),
              (this.location.start = this.N.indexOf(
                '<',
                this.location.start + 1
              ));
          else {
            var n = this.location.Lb;
            if (!this.location.empty)
              for (var m = this.location.Mb; 0 < m; )
                (n = this.N.indexOf('<', n)),
                  '/' === this.N.charAt(++n)
                    ? --m
                    : ((n = this.N.indexOf('>', n)),
                      '/' !== this.N.charAt(n - 1) && ++m);
            this.location.start = this.N.indexOf('<', n);
          }
          this.location.Lb = this.location.start + 1;
          this.location.Mb = 1;
        };
        y.prototype.mark = function () {
          this.N.mark && this.N.mark(this.location.start);
        };
        y.prototype.P = function () {
          (null !== this.Ca && 'undefined' !== typeof this.Ca) || this.Xc();
          return this.Sc;
        };
        y.prototype.K = function () {
          ++this.depth;
          this.location = { start: this.location.start };
          this.sb[this.sb.length] = this.location;
          this.kc = !0;
        };
        y.prototype.J = function () {
          --this.depth;
          this.Ca = null;
          var n = this.location.Lb,
            m = this.location.Mb,
            z = this.location.empty,
            u = this.location.end;
          this.sb.pop();
          this.location = this.sb[this.sb.length - 1];
          this.location.Lb = n;
          this.location.Mb = u ? 0 : z ? m : m + 1;
        };
        y.prototype.W = function () {
          return this.location.empty
            ? !0
            : '/' ===
                this.N.charAt(this.N.indexOf('<', this.location.start + 1) + 1);
        };
        y.prototype.F = function (n) {
          (null !== this.Ca && 'undefined' !== typeof this.Ca) || this.Xc();
          return this.we(this.Ca[n]);
        };
        y.prototype.we = function (n) {
          if (n)
            return n.replace(/&[^;]*;/g, function (m) {
              switch (m.charAt(1)) {
                case 'q':
                  return '"';
                case 'a':
                  return '&';
                case 'l':
                  return '<';
                case 'g':
                  return '>';
                case '#':
                  return 'x' === m.charAt(2)
                    ? String.fromCharCode(
                        parseInt(m.substring(3, m.length - 1), 16)
                      )
                    : String.fromCharCode(
                        parseInt(m.substring(2, m.length - 1), 10)
                      );
              }
              return m;
            });
        };
        return y;
      })();
      t.a = B;
    },
    function (B, t, y) {
      function n(z) {
        return new m(z);
      }
      y.d(t, 'a', function () {
        return n;
      });
      var m = (function () {
        function z(u) {
          this.qc = u;
          this.Fa = -1;
          this.current = null;
        }
        z.prototype.qe = function () {
          this.Fa++;
          this.current = this.qc[this.Fa];
          return this.Fa < this.qc.length;
        };
        z.prototype.reset = function () {
          this.Fa = -1;
          this.current = null;
        };
        return z;
      })();
    },
    function (B, t, y) {
      function n() {
        for (var m = 0, z = 0, u = arguments.length; z < u; z++)
          m += arguments[z].length;
        m = Array(m);
        var E = 0;
        for (z = 0; z < u; z++)
          for (var q = arguments[z], b = 0, a = q.length; b < a; b++, E++)
            m[E] = q[b];
        return m;
      }
      y.d(t, 'a', function () {
        return n;
      });
    },
    function (B, t, y) {
      function n(m) {
        if ('string' !== typeof m) {
          for (var z = '', u = 0, E = m.length, q; u < E; )
            (q = m.subarray(u, u + 1024)),
              (u += 1024),
              (z += String.fromCharCode.apply(null, q));
          return z;
        }
        return m;
      }
      y.d(t, 'a', function () {
        return n;
      });
    },
    function (B, t, y) {
      function n(h) {
        if (!(this instanceof n)) return new n(h);
        var g = (this.options = u.assign(
          { chunkSize: 16384, windowBits: 0, to: '' },
          h || {}
        ));
        g.raw &&
          0 <= g.windowBits &&
          16 > g.windowBits &&
          ((g.windowBits = -g.windowBits),
          0 === g.windowBits && (g.windowBits = -15));
        !(0 <= g.windowBits && 16 > g.windowBits) ||
          (h && h.windowBits) ||
          (g.windowBits += 32);
        15 < g.windowBits &&
          48 > g.windowBits &&
          0 === (g.windowBits & 15) &&
          (g.windowBits |= 15);
        this.err = 0;
        this.msg = '';
        this.ended = !1;
        this.chunks = [];
        this.strm = new a();
        this.strm.avail_out = 0;
        h = z.inflateInit2(this.strm, g.windowBits);
        if (h !== q.Z_OK) throw Error(b[h]);
        this.header = new f();
        z.inflateGetHeader(this.strm, this.header);
        if (
          g.dictionary &&
          ('string' === typeof g.dictionary
            ? (g.dictionary = E.string2buf(g.dictionary))
            : '[object ArrayBuffer]' === d.call(g.dictionary) &&
              (g.dictionary = new Uint8Array(g.dictionary)),
          g.raw &&
            ((h = z.inflateSetDictionary(this.strm, g.dictionary)),
            h !== q.Z_OK))
        )
          throw Error(b[h]);
      }
      function m(h, g) {
        g = new n(g);
        g.push(h, !0);
        if (g.err) throw g.msg || b[g.err];
        return g.result;
      }
      var z = y(13),
        u = y(3),
        E = y(18),
        q = y(19),
        b = y(20),
        a = y(21),
        f = y(22),
        d = Object.prototype.toString;
      n.prototype.push = function (h, g) {
        var l = this.strm,
          p = this.options.chunkSize,
          D = this.options.dictionary,
          k = !1;
        if (this.ended) return !1;
        g = g === ~~g ? g : !0 === g ? q.Z_FINISH : q.Z_NO_FLUSH;
        'string' === typeof h
          ? (l.input = E.binstring2buf(h))
          : '[object ArrayBuffer]' === d.call(h)
            ? (l.input = new Uint8Array(h))
            : (l.input = h);
        l.next_in = 0;
        l.avail_in = l.input.length;
        do {
          0 === l.avail_out &&
            ((l.output = new u.Buf8(p)), (l.next_out = 0), (l.avail_out = p));
          h = z.inflate(l, q.Z_NO_FLUSH);
          h === q.Z_NEED_DICT &&
            D &&
            (h = z.inflateSetDictionary(this.strm, D));
          h === q.Z_BUF_ERROR && !0 === k && ((h = q.Z_OK), (k = !1));
          if (h !== q.Z_STREAM_END && h !== q.Z_OK)
            return this.onEnd(h), (this.ended = !0), !1;
          if (
            l.next_out &&
            (0 === l.avail_out ||
              h === q.Z_STREAM_END ||
              (0 === l.avail_in && (g === q.Z_FINISH || g === q.Z_SYNC_FLUSH)))
          )
            if ('string' === this.options.to) {
              var v = E.utf8border(l.output, l.next_out);
              var G = l.next_out - v;
              var C = E.buf2string(l.output, v);
              l.next_out = G;
              l.avail_out = p - G;
              G && u.arraySet(l.output, l.output, v, G, 0);
              this.onData(C);
            } else this.onData(u.shrinkBuf(l.output, l.next_out));
          0 === l.avail_in && 0 === l.avail_out && (k = !0);
        } while ((0 < l.avail_in || 0 === l.avail_out) && h !== q.Z_STREAM_END);
        h === q.Z_STREAM_END && (g = q.Z_FINISH);
        if (g === q.Z_FINISH)
          return (
            (h = z.inflateEnd(this.strm)),
            this.onEnd(h),
            (this.ended = !0),
            h === q.Z_OK
          );
        g === q.Z_SYNC_FLUSH && (this.onEnd(q.Z_OK), (l.avail_out = 0));
        return !0;
      };
      n.prototype.onData = function (h) {
        this.chunks.push(h);
      };
      n.prototype.onEnd = function (h) {
        h === q.Z_OK &&
          (this.result =
            'string' === this.options.to
              ? this.chunks.join('')
              : u.flattenChunks(this.chunks));
        this.chunks = [];
        this.err = h;
        this.msg = this.strm.msg;
      };
      t.Inflate = n;
      t.inflate = m;
      t.inflateRaw = function (h, g) {
        g = g || {};
        g.raw = !0;
        return m(h, g);
      };
      t.ungzip = m;
    },
    function (B, t, y) {
      B.exports = y(10);
    },
    function (B, t, y) {
      y.r(t);
      y(4);
      y(11);
      y(12);
    },
    function (B, t, y) {
      function n(E) {
        '@babel/helpers - typeof';
        return (
          (n =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (q) {
                  return typeof q;
                }
              : function (q) {
                  return q &&
                    'function' == typeof Symbol &&
                    q.constructor === Symbol &&
                    q !== Symbol.prototype
                    ? 'symbol'
                    : typeof q;
                }),
          n(E)
        );
      }
      var m = y(2),
        z = y(5),
        u = y(0);
      (function (E) {
        function q(a, f) {
          this.A = [];
          this.B = [];
          a && this.M(a, f);
        }
        var b = E.trn || {};
        E.trn = b;
        String.fromCodePoint ||
          (function () {
            function a() {
              var g = [],
                l = -1,
                p = arguments.length;
              if (!p) return '';
              for (var D = ''; ++l < p; ) {
                var k = Number(arguments[l]);
                if (!isFinite(k) || 0 > k || 1114111 < k || h(k) !== k)
                  throw RangeError('Invalid code point: '.concat(k));
                if (65535 >= k) g.push(k);
                else {
                  k -= 65536;
                  var v = (k >> 10) + 55296;
                  k = (k % 1024) + 56320;
                  g.push(v, k);
                }
                if (l + 1 === p || 16384 < g.length)
                  (D += d.apply(void 0, g)), (g.length = 0);
              }
              return D;
            }
            var f = (function () {
                try {
                  var g = {},
                    l = Object.defineProperty;
                  var p = l(g, g, g) && l;
                } catch (D) {}
                return p;
              })(),
              d = String.fromCharCode,
              h = Math.floor;
            f
              ? f(String, 'fromCodePoint', {
                  value: a,
                  configurable: !0,
                  writable: !0,
                })
              : (String.fromCodePoint = a);
          })();
        Array.prototype.Na &&
          Object(m.a)(
            "Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."
          );
        Array.prototype.Na = function (a) {
          if (!a || this.length !== a.length) return !1;
          for (var f = 0, d = this.length; f < d; f++)
            if (this[f] instanceof Array && a[f] instanceof Array) {
              if (!this[f].Na(a[f])) return !1;
            } else if (this[f] !== a[f]) return !1;
          return !0;
        };
        Object.defineProperty(Array.prototype, 'equals', {
          enumerable: !1,
          writable: !0,
        });
        q.prototype = {
          D: function (a) {
            this.A = this.A.concat(a.A);
            this.B = this.B.concat(a.B);
          },
          M: function (a, f) {
            this.A.push(a);
            a = n(f);
            this.B.push('object' === a ? f : 'undefined' === a ? null : [f]);
          },
          Na: function (a) {
            return this.A.Na(a.A) && this.B.Na(a.B);
          },
          save: function () {
            this.A.push(b.g.Hd);
            this.B.push(null);
          },
          restore: function () {
            this.M(b.g.Gd, null);
          },
        };
        b.g = function (a, f, d, h) {
          this.done = !1;
          this.Bc = 2e3;
          this.Ha = {};
          this.Ja = 0;
          this.R = [];
          this.Eb = [];
          this.ga = [];
          this.ga.push({});
          this.i = a;
          this.Dc = this.ub('Width');
          this.Cc = this.ub('Height');
          this.R.push(b.Pa.initial(this.Dc, this.Cc));
          this.da = !1;
          this.Db = d;
          this.Xd =
            -1 < navigator.userAgent.indexOf('Android') &&
            -1 === navigator.userAgent.indexOf('Chrome') &&
            -1 === navigator.userAgent.indexOf('Firefox');
          this.A = [];
          this.B = [];
          this.i.K();
          this.i.advance();
          this.hc = h;
          a = this.i.P();
          b.g.o(a, 'FixedPage.Resources', b.g.m) &&
            (this.i.K(), this.i.advance(), this.Gc(), this.i.J());
          this.Ga = !1;
        };
        b.g.o = function (a, f, d) {
          return a === f ? !0 : a === d + f;
        };
        b.g.Rc = function (a) {
          return b.g.je(a);
        };
        b.g.je = function (a) {
          var f = 3,
            d = Math.abs(a);
          0.5 > d && (f = 5e-4 > d ? (5e-7 > d ? 9 : 7) : 5);
          f = Math.pow(10, f);
          a = Math.round(a * f) / f;
          return a.toString();
        };
        b.g.I = function (a, f) {
          if (!a) throw Error(f);
        };
        b.g.uf = function (a) {
          return new b.g(a, !1).Nd();
        };
        b.g.prototype = {
          Ud: function () {
            return this.Vb();
          },
          Qb: function (a, f, d) {
            var h = this.Md(),
              g = this.i.P();
            if (b.g.o(g, 'Path', b.g.m)) var l = this.Tb();
            else
              b.g.o(g, 'Canvas', b.g.m)
                ? (l = this.Ab())
                : b.g.o(g, 'Glyphs', b.g.m)
                  ? (l = this.Sb())
                  : ((l = null), b.g.I(!1, 'Invalid Element '.concat(g)));
            l.cb(h);
            if (l.oe()) {
              h = this.Ud();
              g = this.kb();
              h.mtx = [g.X, g.Y, g.Z, g.$, g.ca, g.ea];
              if (a) {
                a = { operators: a.A, data: a.B };
                var p = this.i.F('RenderTransform');
                if (null != p) {
                  var D = new b.L();
                  D.ba(p);
                  p = new b.L();
                  p.Wb(g);
                  p.Ea(D);
                  g = p;
                }
                a.mtx = [g.X, g.Y, g.Z, g.$, g.ca, g.ea];
              }
              this.M(b.g.Kd, [
                h,
                { x1: l.u, y1: l.v, x2: l.u + l.H, y2: l.v + l.G },
                f,
                a,
                d,
              ]);
              this.Ec = !0;
            } else this.da = !1;
          },
          Ab: function () {
            var a = new b.ia();
            this.aa();
            var f = this.i.F('RenderTransform');
            if (null != f) {
              var d = new b.L();
              d.ba(f);
              this.T(d);
            }
            f = this.i.F('Clip');
            null != f && (a = this.Aa(f));
            f = null;
            if (!this.i.W()) {
              for (this.i.K(); this.i.advance(); )
                (d = this.i.P()),
                  b.g.o(d, 'Canvas.Clip', b.g.m)
                    ? (b.g.I(
                        !this.i.W(),
                        'Canvas.Clip: Must contain PathGeometry element'
                      ),
                      this.i.K(),
                      this.i.advance() &&
                        ((d = new b.L()),
                        d.ba(this.C('Transform')),
                        this.T(d),
                        a.cb(this.Aa(this.C('Figures'))),
                        (d = d.Ra()),
                        this.T(d)),
                      this.i.J())
                    : b.g.o(d, 'Path', b.g.m)
                      ? null != f
                        ? f.oc(this.Tb())
                        : (f = this.Tb())
                      : b.g.o(d, 'Glyphs', b.g.m)
                        ? null != f
                          ? f.oc(this.Sb())
                          : (f = this.Sb())
                        : b.g.o(d, 'Canvas', b.g.m) &&
                          (null != f ? f.oc(this.Ab()) : (f = this.Ab()));
              this.i.J();
            }
            null != f && a.cb(f);
            this.oa();
            return a;
          },
          ce: function () {
            var a = this.qa('trn:BlendMode', 'source-over');
            a = this.da ? 'source-over' : a;
            var f = this.bc();
            f || (this.save(), this.aa());
            var d = null,
              h = this.i.F('OpacityMask');
            null != h &&
              (Object(m.a)('Uh oh OpacityMask Resource!'), (d = this.Ba(h)));
            h = this.ma('Opacity', 1);
            if (!this.i.W()) {
              for (this.i.K(); this.i.advance(); ) {
                var g = this.i.P();
                if (b.g.o(g, 'Canvas.Resources', b.g.m))
                  this.i.W()
                    ? b.g.I(
                        !1,
                        'Canvas.Resources must contain ResourceDictionary element'
                      )
                    : (this.i.K(), this.i.advance(), this.Gc(), this.i.J());
                else if (b.g.o(g, 'Canvas.Clip', b.g.m))
                  b.g.I(
                    !this.i.W(),
                    'Canvas.Clip: Must contain PathGeometry element'
                  ),
                    this.i.K(),
                    this.i.advance() &&
                      (f || (this.save(), (f = !0), this.aa()),
                      (g = new b.L()),
                      g.ba(this.C('Transform')),
                      this.D(this.T(g)),
                      b.g.I(
                        b.g.o(this.i.P(), 'PathGeometry', b.g.m),
                        'Path.Clip must contain PathGeometry'
                      ),
                      this.Jb(this.C('Figures')),
                      (g = g.Ra()),
                      this.D(this.T(g))),
                    this.i.J();
                else if (b.g.o(g, 'Canvas.OpacityMask', b.g.m))
                  this.da ||
                    (this.i.K(),
                    this.i.advance(),
                    (d = this.Qa(b.g.na, new q(b.g.xb))),
                    this.i.J());
                else if (
                  b.g.o(g, 'Path', b.g.m) ||
                  b.g.o(g, 'Glyphs', b.g.m) ||
                  b.g.o(g, 'Canvas', b.g.m) ||
                  b.g.o(g, 'trn:Glyphs', b.g.m)
                ) {
                  if (null != d || 'source-over' !== a || (1 > h && !this.da)) {
                    this.rb();
                    this.i.J();
                    this.da = !0;
                    this.Qb(d, a, h);
                    return;
                  }
                  this.Ga = !1;
                  break;
                }
              }
              this.Ga && this.i.J();
            }
            this.Ga && this.rb();
            this.da = !1;
          },
          rb: function () {
            this.restore();
            this.oa();
          },
          ub: function (a) {
            a = this.i.F(a);
            b.g.I(
              null != a,
              ''.concat(this.i.P(), ': ').concat(a, ' is not defined')
            );
            return parseFloat(a);
          },
          ma: function (a, f) {
            a = this.i.F(a);
            return null != a ? parseFloat(a) : f;
          },
          C: function (a) {
            a = this.i.F(a);
            b.g.I(
              null != a,
              ''.concat(this.i.P(), ': ').concat(a, ' is not defined')
            );
            return a;
          },
          qa: function (a, f) {
            a = this.i.F(a);
            return null != a ? a : f;
          },
          Tc: function () {
            var a = this.i.F('x:Key');
            b.g.I(
              null != a,
              'Key must be defined for elements in a resource dictionary'
            );
            return a;
          },
          bc: function () {
            0 === this.Ja && this.i.mark();
            var a = !1,
              f = this.ma('Opacity', 1);
            1 > f &&
              !this.da &&
              (a || ((a = !0), this.save(), this.aa()), this.D(this.Oa(f)));
            f = this.i.F('RenderTransform');
            null != f && (a || ((a = !0), this.save(), this.aa()), this.ee(f));
            f = this.i.F('Clip');
            null != f && (a || (this.save(), this.aa()), this.Jb(f), (a = !0));
            return a;
          },
          Jb: function (a) {
            var f = !0;
            a && 'F' === a[0] && (f = !1);
            this.Ic(f ? 'evenodd' : 'nonzero');
            this.Wd(this.Aa(a));
            this.cc(a);
            this.A.push(b.g.hd);
            this.B.push(f ? ['evenodd'] : []);
          },
          be: function (a) {
            var f = [];
            for (a = Object(z.a)(a.split(';')); a.qe(); ) {
              var d = a.current,
                h = new b.Fa();
              d = d.split(',');
              if (1 <= d.length) {
                if (0 < d[0].length) {
                  var g = d[0].split(')');
                  if (2 <= g.length) {
                    var l = g[0].substr(1).split(':');
                    h.ob = parseInt(l[0]);
                    h.Zb = parseInt(l[1]);
                  }
                  h.Gb = parseInt(g[g.length - 1]);
                  h.qb = !0;
                }
                2 <= d.length &&
                  (0 < d[1].length && ((h.Yb = parseFloat(d[1])), (h.$b = !0)),
                  3 <= d.length &&
                    (0 < d[2].length && (h.Hb = parseFloat(d[2])),
                    4 <= d.length &&
                      0 < d[3].length &&
                      (h.Ib = parseFloat(d[3]))));
              }
              f.push(h);
            }
            return f;
          },
          Vd: function () {
            var a = this.C('UnicodeString'),
              f = '',
              d = 0;
            for (
              2 <= a.length &&
              '{' === a.charAt(0) &&
              '}' === a.charAt(1) &&
              (a = a.substr(2));
              d < a.length;

            ) {
              var h = a.charCodeAt(d);
              if (9 == h) (f += String.fromCharCode(10)), d++;
              else if (128 > h) (f += String.fromCharCode(h)), d++;
              else if (191 < h)
                if (224 > h) {
                  var g = a.charCodeAt(d + 1);
                  f += String.fromCharCode(((h & 31) << 6) | (g & 63));
                  d += 2;
                } else if (240 > h) {
                  g = a.charCodeAt(d + 1);
                  var l = a.charCodeAt(d + 2);
                  f += String.fromCharCode(
                    ((h & 15) << 12) | ((g & 63) << 6) | (l & 63)
                  );
                  d += 3;
                } else {
                  g = a.charCodeAt(d + 1);
                  l = a.charCodeAt(d + 2);
                  var p = a.charCodeAt(d + 3);
                  f += String.fromCodePoint(
                    ((h & 7) << 18) |
                      ((g & 63) << 12) |
                      ((l & 63) << 6) |
                      (p & 63)
                  );
                  d += 4;
                }
              else Object(m.a)('Invalid UTF-8 character');
            }
            return f;
          },
          Sb: function () {
            var a = new b.ia(),
              f = this.i.F('Clip');
            null != f && (a = this.Aa(f));
            return a;
          },
          Ub: function (a, f) {
            return this.Xd && 1 === a.length
              ? f === b.g.sc
                ? b.g.qd
                : f === b.g.Rb
                  ? b.g.Rb
                  : b.g.rd
              : f;
          },
          pc: function (a) {
            return 0 === Object.keys(a).length && a.constructor === Object;
          },
          Fc: function (a) {
            var f = this.qa('trn:BlendMode', 'source-over');
            f = this.da ? 'source-over' : f;
            var d = 'source-over' != f && !this.Db,
              h = this.bc();
            this.Db && this.Hc(f);
            var g = this.ub('OriginX'),
              l = this.ub('OriginY'),
              p = this.C('FontUri');
            this.nb[p] = null;
            var D = this.ub('FontRenderingEmSize'),
              k = this.be(this.qa('Indices', ''));
            if (200 > D) {
              var v = D / 200;
              h || (this.aa(), this.save(), (h = !0));
              var G = new b.L();
              G.mb(v, 0, 0, v, g, l);
              D = 200;
              l = 0;
              this.A.push(b.g.zb);
              this.B.push(G.Bb());
            }
            var C = 0;
            g = new q();
            var w = this.Vd(),
              e = 0,
              H = 0,
              L = D / 100,
              M = '';
            G = null;
            var J = this.i.F('Stroke');
            a = J ? b.g.Rb : a ? b.g.sc : b.g.pd;
            g.M(b.g.Id, 0);
            for (var K = {}, F, x = 0; x < k.length; ) {
              var r = k[x],
                Q = w.charCodeAt(C);
              Q = 55296 <= Q && 57344 > Q ? Math.max(2, r.ob) : r.ob;
              if (e !== r.Hb || H !== r.Ib)
                M &&
                  (g.M(this.Ub(F, a), [M, e ? e * L : 0, l - H * L]),
                  g.M(b.g.tc, [M])),
                  (e = r.Hb),
                  (H = r.Ib),
                  (M = '');
              r.qb && (K[M.length] = w.substr(C, r.ob));
              r.$b
                ? (this.pc(K) || g.M(b.g.vc, [K]),
                  (F =
                    M +
                    (r.qb
                      ? String.fromCharCode(r.Gb + 57344)
                      : w.substr(C, Q))),
                  g.M(this.Ub(F, a), [F, e ? e * L : 0, l - H * L]),
                  M && g.M(b.g.tc, [M]),
                  g.M(b.g.ed, [r.Yb * L]),
                  (K = {}),
                  (M = ''))
                : (M += r.qb
                    ? String.fromCharCode(r.Gb + 57344)
                    : w.substr(C, Q));
              x += r.Zb;
              C += Q;
            }
            if (M || C < w.length)
              this.pc(K) || g.M(b.g.vc, [K]),
                (F = M + w.substr(C, w.length - C)),
                g.M(this.Ub(F, a), [F, 0, 0]);
            l = F = null;
            e = this.i.F('Fill');
            C = !1;
            null != e &&
              (this.Cb(e)
                ? (F = this.Ba(e, b.g.na, g))
                : ((C = !0), (F = this.lb(e, b.g.na, g))));
            k = !1;
            null != J &&
              (this.Cb(J)
                ? (G = this.Ba(J, b.g.za, g))
                : ((k = !0), (G = this.lb(J, b.g.za, g))));
            e = this.i.F('OpacityMask');
            null != e &&
              (Object(m.a)('Uh oh OpacityMask Resource!'), (l = this.Ba(e)));
            if (!this.i.W() && !a) {
              for (this.i.K(); this.i.advance(); )
                (a = this.i.P()),
                  b.g.o(a, 'Glyphs.Clip', b.g.m)
                    ? (b.g.I(
                        !this.i.W(),
                        'Canvas.Clip: Must contain PathGeometry element'
                      ),
                      this.i.K(),
                      this.i.advance() &&
                        (h || ((h = !0), this.save(), this.aa()),
                        (a = new b.L()),
                        a.ba(this.C('Transform')),
                        this.A.push(b.g.zb),
                        this.B.push(a.Bb()),
                        b.g.I(
                          b.g.o(this.i.P(), 'PathGeometry', b.g.m),
                          'Path.Clip must contain PathGeometry'
                        ),
                        (J = this.C('Figures')),
                        this.Jb(J),
                        (a = a.Ra()),
                        this.A.push(b.g.zb),
                        this.B.push(a.Bb())),
                      this.i.J())
                    : b.g.o(a, 'Glyphs.Fill', b.g.m)
                      ? (this.i.K(),
                        this.i.advance(),
                        (F = this.Qa(b.g.na, g)),
                        this.i.J())
                      : b.g.o(a, 'Glyphs.OpacityMask', b.g.m) &&
                        !this.da &&
                        (this.i.K(),
                        this.i.advance(),
                        (l = this.Qa(b.g.na, new q(b.g.xb))),
                        this.i.J());
              this.i.J();
            }
            if (null == l || d)
              'otf' === p.substr(p.indexOf('.') + 1)
                ? ((p = p.substr(0, p.length - 4)), (p = parseInt(p.substr(7))))
                : (p = parseInt(p.substr(35, 8), 16)),
                (p = 'f'.concat(this.hc, '-').concat(p)),
                this.Ha[p]
                  ? 10 > this.Ha[p].length &&
                    (this.Ha[p] += w.substr(0, 10 - this.Ha[p].length))
                  : (this.Ha[p] = w.substr(0, 10)),
                this.ge(''.concat(b.g.Rc(D), 'px ').concat(p)),
                null !== F &&
                  (C || ((F = new q(b.g.na, '#000000')), F.D(g)),
                  this.dc(F, g)),
                null != G &&
                  ((D = this.ma('StrokeThickness', 1)),
                  (p = this.i.F('RenderTransform')),
                  (w = new b.L()),
                  null != p && w.ba(p),
                  this.ec(D / (v * w.ab())),
                  this.Jc(this.yc(this.qa('StrokeStartLineCap', 'Flat'))),
                  this.Kc(this.qa('StrokeLineJoin', 'miter').toLowerCase()),
                  this.Lc(this.ma('StrokeMiterLimit', 10)),
                  k || ((G = new q(b.g.za, '#000000')), G.D(g)),
                  this.Mc(G, g));
            h && (this.restore(), this.oa());
            if (null != l || d) (this.da = !0), this.Qb(l, f);
            this.da = !1;
          },
          xc: function () {
            var a = [];
            this.i.K();
            b.g.I(
              this.i.advance(),
              'Gradient brushes must contain GradientStops'
            );
            for (this.i.K(); this.i.advance(); ) {
              var f = this.C('Color'),
                d = this.C('Offset');
              a.push(d);
              a.push(this.wc(f));
            }
            this.i.J();
            this.i.J();
            return a;
          },
          Qd: function (a, f, d) {
            var h = this.i.F('Transform'),
              g = new q();
            g.save();
            this.aa();
            null != h && (d.ba(h), g.D(this.T(d)));
            d = this.ma('Opacity', 1);
            1 > d && g.D(this.Oa(d));
            h = this.C('StartPoint').split(',');
            d = parseFloat(h[0]);
            h = parseFloat(h[1]);
            var l = this.C('EndPoint').split(',');
            d = {
              type: b.g.Ad,
              x0: d,
              y0: h,
              x1: parseFloat(l[0]),
              y1: parseFloat(l[1]),
              stops: this.xc(),
            };
            g.M(a, [d]);
            g.D(f);
            g.restore();
            this.oa();
            return g;
          },
          Sd: function (a, f, d) {
            var h = this.i.F('Transform'),
              g = new q(),
              l = this.C('RadiusX'),
              p = this.C('RadiusY'),
              D = this.C('GradientOrigin'),
              k = this.C('Center');
            g.save();
            this.aa();
            var v = parseFloat(l),
              G = parseFloat(p);
            b.g.I(0 < v && 0 < G, 'Invalid radius value');
            var C = k.split(',');
            k = parseFloat(C[0]);
            C = parseFloat(C[1]);
            var w = D.split(',');
            D = parseFloat(w[0]);
            w = parseFloat(w[1]);
            if (null != h || l !== p)
              null != h && d.ba(h),
                (h = G / v),
                (w /= h),
                (C /= h),
                (p = new b.L()),
                p.mb(1, 0, 0, h, 0, 0),
                d.Ea(p),
                g.D(this.T(d));
            d = this.ma('Opacity', 1);
            1 > d && g.D(this.Oa(d));
            l = {
              type: b.g.Ed,
              x0: D,
              y0: w,
              x1: k,
              y1: C,
              r: l,
              stops: this.xc(),
            };
            g.M(a, [l]);
            g.D(f);
            g.restore();
            this.oa();
            return g;
          },
          he: function () {
            b.g.I(!this.Fb, 'Incorrect custom glyph start');
            this.A.push(b.g.kd);
            this.B.push(null);
            this.Fb = !0;
          },
          Ld: function () {
            b.g.I(this.Fb, 'Incorrect custom glyph end');
            this.A.push(b.g.ld);
            this.B.push(null);
            this.Fb = !1;
          },
          D: q.prototype.D,
          M: q.prototype.M,
          Mc: function (a, f) {
            var d = Object(u.a)(this.R);
            a.Na(d.Za)
              ? f
                ? this.D(f)
                : this.M(b.g.yb, null)
              : (a.A[0] === b.g.za && (d.Za = a), this.D(a));
          },
          dc: function (a, f) {
            var d = Object(u.a)(this.R);
            a.Na(d.Ta)
              ? this.D(f)
              : (a.A[0] === b.g.na && (d.Ta = a), this.D(a));
          },
          Hc: function (a) {
            var f = Object(u.a)(this.R);
            a !== f.pb && ((f.pb = a), this.M(b.g.ud, [a]));
          },
          Oa: function (a) {
            var f = Object(u.a)(this.R);
            f.Ia *= a;
            return new q(b.g.td, [f.Ia]);
          },
          Ic: function (a) {
            var f = Object(u.a)(this.R);
            a !== f.Sa && (f.Sa = a);
          },
          ec: function (a) {
            var f = Object(u.a)(this.R);
            a !== f.Xa &&
              ((f.Xa = a),
              this.A.push(b.g.zd),
              this.B.push([a, this.kb().ab()]));
          },
          Jc: function (a) {
            var f = Object(u.a)(this.R);
            a !== f.Va && ((f.Va = a), this.A.push(b.g.wd), this.B.push([a]));
          },
          Kc: function (a) {
            var f = Object(u.a)(this.R);
            a !== f.Wa && ((f.Wa = a), this.A.push(b.g.xd), this.B.push([a]));
          },
          Lc: function (a) {
            var f = Object(u.a)(this.R);
            a !== f.Ya && ((f.Ya = a), this.A.push(b.g.Bd), this.B.push([a]));
          },
          ge: function (a) {
            var f = Object(u.a)(this.R);
            a !== f.Ua && ((f.Ua = a), this.A.push(b.g.sd), this.B.push([a]));
          },
          T: function (a) {
            Object(u.a)(this.R).va.Ea(a);
            return new q(b.g.zb, a.Bb());
          },
          kb: function () {
            return Object(u.a)(this.R).va;
          },
          Md: function () {
            return Object(u.a)(this.R).ra;
          },
          Wd: function (a) {
            Object(u.a)(this.R).ra.cb(a);
          },
          aa: function (a) {
            a = a ? Object(u.a)(this.R).re() : Object(u.a)(this.R).clone();
            this.R.push(a);
            this.ga.push({});
          },
          oa: function () {
            this.R.pop();
            for (
              var a = Object.keys(this.ga[this.ga.length - 1]), f = 0;
              f < a;
              ++f
            )
              this.M(b.g.od);
            Object(u.b)(this.ga, this.ga.length - 1);
          },
          Od: function (a, f, d) {
            var h = new q(),
              g = this.i.F('Transform');
            h.save();
            this.aa();
            var l = this.C('Viewbox'),
              p = new b.ia();
            p.bb(l);
            l = this.C('Viewport');
            var D = new b.ia();
            D.bb(l);
            if (null != g || p !== D) {
              l = D.H / p.H;
              var k = D.G / p.G,
                v = D.u - p.u * l;
              p = D.v - p.v * k;
              null != g && d.ba(g);
              g = new b.L();
              g.mb(l, 0, 0, k, v, p);
              d.Ea(g);
              h.D(this.T(d));
            }
            d = this.ma('Opacity', 1);
            1 > d && h.D(this.Oa(d));
            d = this.qa('TileMode', 'None');
            g = this.C('ImageSource');
            this.nb[g] = null;
            h.M(a, [
              {
                type: b.g.vd,
                name: 'i'
                  .concat(this.hc, '-')
                  .concat(parseInt(g.split('/')[2])),
                tm: 'None' === d ? 'no-repeat' : 'repeat',
              },
            ]);
            h.D(f);
            h.restore();
            this.oa();
            return h;
          },
          Pd: function () {
            var a = new q(),
              f = this.i.F('Transform');
            a.save();
            this.aa();
            var d = this.C('Viewbox'),
              h = new b.ia();
            h.bb(d);
            d = this.C('Viewport');
            var g = new b.ia();
            g.bb(d);
            if (null != f || h !== g) {
              d = g.H / h.H;
              var l = g.G / h.G,
                p = g.u - h.u * d;
              h = g.v - h.v * l;
              g = new b.L();
              null != f && g.ba(f);
              f = new b.L();
              f.mb(d, 0, 0, l, p, h);
              g.Ea(f);
              a.D(this.T(g));
            }
            f = this.ma('Opacity', 1);
            1 > f && a.D(this.Oa(f));
            this.qa('TileMode', 'None');
            f = this.C('ImageSource');
            this.nb[f] = null;
            f = 'i'.concat(this.hc, '-').concat(parseInt(f.split('/')[2]));
            d = 'false' !== this.qa('trn:smooth', 'true');
            a.M(b.g.nd, [f, this.kb().ab(), d]);
            a.restore();
            this.oa();
            return a;
          },
          ee: function (a) {
            if (null != a) {
              var f = new b.L();
              f.ba(a);
              this.D(this.T(f));
            }
          },
          s: function (a) {
            for (
              var f, d = (f = a.O), h = a.ha, g = h[f];
              ' ' !== g && ',' !== g;

            )
              ++f, (g = h[f]);
            d = h.substring(d, f);
            ++f;
            a.O = f;
            return parseFloat(d);
          },
          Aa: function (a) {
            var f = ' ',
              d = new b.Pb(a),
              h = new b.ia(),
              g = !0;
            h.initData(0, 0, 0, 0);
            if (d.O < d.ha.length) for (; ' ' === d.ha.charAt(d.O); ) d.O++;
            for (; d.O < a.length; ) {
              if (
                ('A' <= d.ha.charAt(d.O) && 'Z' >= d.ha.charAt(d.O)) ||
                ('a' <= d.ha.charAt(d.O) && 'z' >= d.ha.charAt(d.O))
              )
                (f = d.ha.charAt(d.O)), d.O++;
              else
                switch (
                  ('a' > f && ('H' !== f && (d.l = 0), 'V' !== f && (d.j = 0)),
                  f)
                ) {
                  case 'm':
                  case 'M':
                    d.j += this.s(d);
                    d.l += this.s(d);
                    g
                      ? (h.initData(d.j, d.l, d.j, d.l), (g = !1))
                      : h.ja(d.j, d.l);
                    d.U = !1;
                    break;
                  case 'l':
                  case 'L':
                    d.j += this.s(d);
                    d.l += this.s(d);
                    h.ja(d.j, d.l);
                    d.U = !1;
                    break;
                  case 'c':
                  case 'C':
                    var l = this.s(d) + d.j;
                    var p = this.s(d) + d.l;
                    h.ja(l, p);
                    d.U = !0;
                    d.sa = this.s(d) + d.j;
                    d.ta = this.s(d) + d.l;
                    h.ja(d.sa, d.ta);
                    d.j += this.s(d);
                    d.l += this.s(d);
                    h.ja(d.j, d.l);
                    break;
                  case 'q':
                  case 'Q':
                    l = this.s(d) + d.j;
                    p = this.s(d) + d.l;
                    h.ja(l, p);
                    d.j += this.s(d);
                    d.l += this.s(d);
                    h.ja(d.j, d.l);
                    d.U = !1;
                    break;
                  case 's':
                  case 'S':
                    d.U || ((d.sa = d.j), (d.ta = d.l));
                    l = 2 * d.j - d.sa;
                    p = 2 * d.l - d.ta;
                    h.ja(l, p);
                    d.U = !0;
                    d.sa = this.s(d) + d.j;
                    d.ta = this.s(d) + d.l;
                    h.ja(d.sa, d.ta);
                    d.j += this.s(d);
                    d.l += this.s(d);
                    h.ja(d.j, d.l);
                    break;
                  case 'h':
                  case 'H':
                    d.j += this.s(d);
                    h.ja(d.j, d.l);
                    d.U = !1;
                    break;
                  case 'v':
                  case 'V':
                    d.l += this.s(d);
                    h.ja(d.j, d.l);
                    d.U = !1;
                    break;
                  default:
                    this.s(d), (d.U = !1);
                }
              for (; ' ' === a.charAt(d.O); ) ++d.O;
            }
            return h.me(this.kb());
          },
          Tb: function () {
            var a = null;
            this.aa();
            var f = this.i.F('RenderTransform');
            if (null != f) {
              var d = new b.L();
              d.ba(f);
              this.T(d);
            }
            d = this.i.F('Stroke');
            var h = this.ma('StrokeThickness', 1);
            f = this.i.F('Clip');
            null != f && (a = this.Aa(f));
            f = this.i.F('Data');
            if (!this.i.W()) {
              for (this.i.K(); this.i.advance(); ) {
                var g = this.i.P();
                if (b.g.o(g, 'Path.Data', b.g.m) && !this.i.W()) {
                  this.i.K();
                  this.i.advance() &&
                    ((f = new b.L()),
                    f.ba(this.C('Transform')),
                    this.T(f),
                    b.g.I(
                      b.g.o(this.i.P(), 'PathGeometry', b.g.m),
                      'Path.Data must contain PathGeometry'
                    ),
                    (f = this.C('Figures')));
                  this.i.J();
                  break;
                } else
                  b.g.o(g, 'Path.Clip', b.g.m)
                    ? (b.g.I(
                        !this.i.W(),
                        'Path.Clip: Must contain PathGeometry element'
                      ),
                      this.i.K(),
                      this.i.advance() &&
                        ((g = new b.L()),
                        g.ba(this.C('Transform')),
                        this.T(g),
                        (a = this.Aa(this.C('Figures'))),
                        (g = g.Ra()),
                        this.T(g)),
                      this.i.J())
                    : b.g.o(g, 'Path.Stroke', b.g.m) && (d = !0);
              }
              this.i.J();
            }
            null != a ? a.cb(this.Aa(f)) : (a = this.Aa(f));
            this.oa();
            d && a.inflate(h);
            return a;
          },
          Xb: function (a) {
            a.U = !1;
            this.A.push(b.g.yd);
            this.B.push([a.j, a.l]);
          },
          rc: function (a, f, d, h, g) {
            a.U = !0;
            this.A.push(b.g.gd);
            this.B.push([h, g, a.sa, a.ta, a.j, a.l]);
          },
          dd: function () {
            this.A.push(b.g.jd);
            this.B.push(null);
          },
          $d: function (a) {
            a.Yd = a.j;
            a.Zd = a.l;
            this.A.push(b.g.Cd);
            this.B.push([a.j, a.l]);
            a.U = !1;
          },
          de: function (a, f) {
            var d = a.j,
              h = a.l;
            'a' > f && ('H' !== f && (a.l = 0), 'V' !== f && (a.j = 0));
            switch (f) {
              case 'm':
              case 'M':
                a.j += this.s(a);
                a.l += this.s(a);
                this.$d(a);
                break;
              case 'l':
              case 'L':
                a.j += this.s(a);
                a.l += this.s(a);
                this.Xb(a, d, h);
                break;
              case 'c':
              case 'C':
                f = this.s(a) + a.j;
                var g = this.s(a) + a.l;
                a.sa = this.s(a) + a.j;
                a.ta = this.s(a) + a.l;
                a.j += this.s(a);
                a.l += this.s(a);
                this.rc(a, d, h, f, g);
                break;
              case 'q':
              case 'Q':
                f = this.s(a) + a.j;
                g = this.s(a) + a.l;
                a.j += this.s(a);
                a.l += this.s(a);
                this.M(b.g.Dd, [f, g, a.j, a.l]);
                a.U = !1;
                break;
              case 's':
              case 'S':
                a.U || ((a.sa = a.j), (a.ta = a.l));
                f = 2 * a.j - a.sa;
                g = 2 * a.l - a.ta;
                a.U = !0;
                a.sa = this.s(a) + a.j;
                a.ta = this.s(a) + a.l;
                a.j += this.s(a);
                a.l += this.s(a);
                this.rc(a, d, h, f, g);
                break;
              case 'h':
              case 'H':
                a.j += this.s(a);
                this.Xb(a, d, h);
                a.U = !1;
                break;
              case 'v':
              case 'V':
                a.l += this.s(a);
                this.Xb(a, d, h);
                a.U = !1;
                break;
              default:
                this.s(a), (a.U = !1);
            }
          },
          yc: function (a) {
            if ('Flat' === a) return 'butt';
            if ('Square' === a) return 'square';
            if ('Round' === a || 'Triangle' === a) return 'round';
            b.g.I(!1, 'Invalid line cap '.concat(a));
            return '';
          },
          cc: function (a) {
            var f = ' ',
              d = new b.Pb(a),
              h = d.ha.charAt(d.O);
            this.A.push(b.g.fd);
            this.B.push(null);
            if (d.O < d.ha.length)
              for (; ' ' === h; ) d.O++, (h = d.ha.charAt(d.O));
            for (; d.O < a.length; )
              for (
                ('A' <= h && 'Z' >= h) || ('a' <= h && 'z' >= h)
                  ? ((f = h), ('z' !== h && 'Z' !== h) || this.dd(d), d.O++)
                  : this.de(d, f),
                  h = d.ha.charAt(d.O);
                ' ' === h;

              )
                ++d.O, (h = d.ha.charAt(d.O));
          },
          save: q.prototype.save,
          restore: q.prototype.restore,
          fe: function () {
            var a = this.qa('trn:BlendMode', 'source-over');
            a = this.da ? 'source-over' : a;
            var f = 'source-over' != a && !this.Db,
              d = this.i.F('Data'),
              h = !0;
            d && 'F' === d[0] && (h = !1);
            var g = new q(b.g.xb, h ? ['evenodd'] : null),
              l = !1,
              p = this.bc(),
              D = null,
              k = this.i.F('Fill');
            null != k &&
              (D = this.Cb(k) ? this.Ba(k, b.g.na, g) : this.lb(k, b.g.na, g));
            this.Db && this.Hc(a);
            var v = (k = null),
              G = 0,
              C = this.ma('StrokeThickness', 1),
              w = this.i.F('Stroke');
            null != w &&
              (this.ec(C),
              (k = this.Cb(w)
                ? this.Ba(w, b.g.za, new q(b.g.yb))
                : this.lb(w, b.g.za, new q(b.g.yb))));
            w = null;
            var e = this.i.F('OpacityMask');
            null != e &&
              (Object(m.a)('Uh oh OpacityMask Resource!'), (w = this.Ba(e)));
            e = this.yc(this.qa('StrokeStartLineCap', 'Flat'));
            var H = null;
            if (!this.i.W()) {
              for (this.i.K(); this.i.advance(); ) {
                var L = this.i.P();
                b.g.o(L, 'Path.Clip', b.g.m)
                  ? (b.g.I(
                      !this.i.W(),
                      'Path.Clip: Must contain PathGeometry element'
                    ),
                    this.i.K(),
                    this.i.advance() &&
                      (p || ((p = !0), this.save(), this.aa()),
                      (H = new b.L()),
                      H.ba(this.C('Transform')),
                      this.D(this.T(H)),
                      b.g.I(
                        b.g.o(this.i.P(), 'PathGeometry', b.g.m),
                        'Path.Clip must contain PathGeometry'
                      ),
                      (L = this.C('Figures')),
                      this.Jb(L),
                      (H = H.Ra())),
                    this.i.J())
                  : b.g.o(L, 'Path.Data', b.g.m) && !this.i.W()
                    ? (this.i.K(),
                      this.i.advance() &&
                        ((d = new b.L()),
                        d.ba(this.C('Transform')),
                        null != H ? H.Ea(d) : (H = d),
                        this.D(this.T(H)),
                        b.g.I(
                          b.g.o(this.i.P(), 'PathGeometry', b.g.m),
                          'Path.Data must contain PathGeometry'
                        ),
                        (d = this.C('Figures'))),
                      this.i.J())
                    : b.g.o(L, 'Path.Fill', b.g.m)
                      ? (this.i.K(),
                        this.i.advance(),
                        null != w || f || 'ImageBrush' !== this.i.P()
                          ? (D = this.Qa(b.g.na, g))
                          : ((l = !0), this.D(this.Pd())),
                        this.i.J())
                      : b.g.o(L, 'Path.OpacityMask', b.g.m)
                        ? this.da ||
                          (this.i.K(),
                          this.i.advance(),
                          (w = this.Qa(b.g.na, g)),
                          this.i.J())
                        : b.g.o(L, 'Path.Stroke', b.g.m) &&
                          (this.i.K(),
                          this.i.advance(),
                          (k = this.Qa(b.g.za, new q(b.g.yb), C)),
                          this.i.J());
              }
              this.i.J();
            }
            if (null == w && !f && !l) {
              b.g.I(null != d, 'Paths must have Data defined');
              l = this.i.F('StrokeDashArray');
              if (null != l) {
                l = l.split(' ');
                v = Array(l.length);
                G = 'square' === e;
                for (H = 0; H < l.length; ++H)
                  (v[H] = 0 != C ? parseFloat(l[H]) * C : parseFloat(l[H])),
                    G && (!v[H] || 0.001 > v[H]) && (v[H] = 0.001);
                G = this.ma('StrokeDashOffset', 0);
              }
              this.Ic(h ? 'evenodd' : 'nonzero');
              v &&
                null != D &&
                (this.cc(d), null != D && this.dc(D, g), (D = null));
              v &&
                (p || (this.save(), (p = !0), this.aa()),
                this.M(b.g.md, [v, G]));
              this.cc(d);
              null != D && this.dc(D, g);
              null != k &&
                (this.Jc(e),
                this.Kc(this.qa('StrokeLineJoin', 'miter').toLowerCase()),
                this.Lc(this.ma('StrokeMiterLimit', 10)),
                this.Mc(k));
            }
            p && (this.restore(), this.oa());
            if (null != w || f) (this.da = !0), this.Qb(w, a);
            this.da = !1;
          },
          wc: function (a) {
            var f = 1,
              d = [255, 255, 255, 255];
            if ('#' === a.charAt(0)) {
              if (7 === a.length) return a;
              b.g.I(
                9 === a.length,
                'Color '.concat(a, ' is invalid in a XOD file')
              );
              f = a.substr(1, 2);
              var h = a.substr(3, 2);
              var g = a.substr(5, 2);
              a = a.substr(7, 2);
              f = parseInt(f, 16) / 255;
              d[0] = parseInt(h, 16);
              d[1] = parseInt(g, 16);
              d[2] = parseInt(a, 16);
            } else
              's' === a.charAt(0)
                ? ((h = a.split('#')[1].split(',')),
                  3 < h.length
                    ? ((f = parseFloat(h[0])),
                      (g = 255 * parseFloat(h[1])),
                      (d[0] = parseInt(0 > g ? 0 : 255 < g ? 255 : g)),
                      (g = 255 * parseFloat(h[2])),
                      (d[1] = parseInt(0 > g ? 0 : 255 < g ? 255 : g)),
                      (g = 255 * parseFloat(h[3])),
                      (d[2] = parseInt(0 > g ? 0 : 255 < g ? 255 : g)))
                    : ((g = 255 * parseFloat(h[0])),
                      (d[0] = parseInt(0 > g ? 0 : 255 < g ? 255 : g)),
                      (g = 255 * parseFloat(h[1])),
                      (d[1] = parseInt(0 > g ? 0 : 255 < g ? 255 : g)),
                      (g = 255 * parseFloat(h[2])),
                      (d[2] = parseInt(0 > g ? 0 : 255 < g ? 255 : g))))
                : b.g.I(!1, 'Invalid color for a XOD file');
            return 'rgba('
              .concat(d[0], ',')
              .concat(d[1], ',')
              .concat(d[2], ',')
              .concat(b.g.Rc(f), ')');
          },
          Td: function (a, f) {
            return this.lb(this.C('Color'), a, f);
          },
          lb: function (a, f, d) {
            a = new q(f, this.wc(a));
            a.D(d);
            return a;
          },
          Vb: function () {
            var a = this.Ja,
              f = this.A,
              d = this.B;
            this.A = [];
            this.B = [];
            this.Ja = this.i.depth;
            this.aa(!0);
            if (!this.i.W() || !b.g.o(this.i.P(), 'Canvas', b.g.m))
              for (this.Ga = !1; this.ac(); );
            this.oa();
            var h = { operators: this.A, data: this.B };
            this.Ja = a;
            this.A = f;
            this.B = d;
            return h;
          },
          zc: function (a, f, d, h) {
            var g = new q(),
              l = this.C('Viewbox'),
              p = new b.ia();
            p.bb(l);
            l = this.C('Viewport');
            var D = new b.ia();
            D.bb(l);
            var k = this.i.F('Transform');
            g.save();
            this.aa();
            if (!this.i.W()) {
              for (this.i.K(); this.i.advance(); )
                if (((l = this.i.P()), b.g.o(l, 'VisualBrush.Visual', b.g.m))) {
                  this.i.K();
                  b.g.I(
                    this.i.advance(),
                    'VisualBrush.Visual must contain Canvas, Path or Glyphs element'
                  );
                  this.aa(!0);
                  Object(u.a)(this.R).va = new b.L();
                  var v = this.Ab();
                  this.oa();
                  this.i.J();
                }
              this.i.J();
            }
            l = this.qa('TileMode', 'None');
            if (
              'Tile' != l &&
              'undefined' !== typeof v &&
              0 !== v.G &&
              0 !== v.H
            ) {
              var G = D.u - p.u,
                C = D.v - p.v;
              p.cb(v);
              D = p;
              D.u += G;
              D.v += C;
            }
            if (0 === p.H || 0 === p.G)
              return (a = new q(a, 'rgba(0,0,0,0)')), a.D(f), a;
            if (null != k || p !== D)
              (v = D.H / p.H),
                (G = D.G / p.G),
                (C = D.u - p.u * v),
                (D = D.v - p.v * G),
                null != k && d.ba(k),
                (k = new b.L()),
                k.mb(v, 0, 0, G, C, D),
                d.Ea(k),
                g.D(this.T(d));
            D = this.kb().ab();
            k = Math.min(p.H, p.G);
            v = this.ma('Opacity', 1);
            1 > v && g.D(this.Oa(v));
            v = {};
            G = this.i.F('Visual');
            null != G &&
              ((G = this.Ba(G)), (v.operators = { operators: G.A, data: G.B }));
            if (!this.i.W()) {
              for (this.i.K(); this.i.advance(); )
                (G = this.i.P()),
                  b.g.o(G, 'VisualBrush.Visual', b.g.m) &&
                    (this.i.K(),
                    b.g.I(
                      this.i.advance(),
                      'VisualBrush.Visual must contain Canvas, Path or Glyphs element'
                    ),
                    (v.operators = this.Vb()),
                    this.i.J());
              this.i.J();
            }
            v.type = b.g.Jd;
            v.tm = 'None' === l ? 'no-repeat' : 'repeat';
            a === b.g.za && (v.strokeAdjust = h / d.ab());
            if (p.u || p.v) (v.x = p.u), (v.y = p.v);
            v.w = p.H;
            v.h = p.G;
            v.minwh = k;
            v.scale = D;
            g.M(a, [v]);
            g.D(f);
            g.restore();
            this.oa();
            return g;
          },
          Cb: function (a) {
            return '{' === a.charAt(0);
          },
          Ba: function (a) {
            var f = a.indexOf('StaticResource');
            b.g.I(0 < f, 'Invalid resource reference: '.concat(a));
            f += 15;
            a = a.substr(f, a.length - 1 - f);
            f = null;
            for (var d = this.ga.length - 1; 0 <= d; --d)
              if (this.ga[d][a]) {
                f = this.ga[d][a];
                break;
              }
            b.g.I(null != f, 'Dictionary key '.concat(a, ' does not exist.'));
            return new q(b.g.Fd, [a]);
          },
          ac: function () {
            if (this.Ga) {
              if (this.i.depth === this.Ja)
                return b.g.o(this.i.P(), 'Canvas', b.g.m) && this.rb(), !1;
              var a = this.i.advance();
              if (!a) {
                this.i.J();
                if (Object(u.a)(this.Eb) === this.i.depth)
                  return this.Eb.pop(), this.Ld(), !0;
                if (this.i.depth === this.Ja)
                  return b.g.o(this.i.P(), 'Canvas', b.g.m) && this.rb(), !1;
                this.rb();
                return !0;
              }
            }
            this.Ga = !0;
            a = this.i.P();
            b.g.o(a, 'Canvas', b.g.m)
              ? this.ce()
              : b.g.o(a, 'Path', b.g.m)
                ? this.fe()
                : b.g.o(a, 'Glyphs', b.g.m)
                  ? this.Fc(!1)
                  : b.g.o(a, 'trn:Glyphs', b.g.m) &&
                    (this.i.W() || this.Eb.push(this.i.depth),
                    this.Fc(!0),
                    this.i.W() || (this.i.K(), this.he()));
            return !0;
          },
          cd: function () {
            var a = b.g.na,
              f = new q(b.g.xb);
            a = this.zc(a, f, new b.L());
            f = this.Tc();
            this.ga[this.ga.length - 1][f] = a;
            this.M(b.g.uc, [f, a.A, a.B]);
          },
          bd: function (a) {
            a = this.Vb();
            var f = this.Tc();
            this.ga[this.ga.length - 1][f] = a;
            this.M(b.g.uc, [f, a.operators, a.data]);
          },
          Qa: function (a, f, d) {
            var h = new b.L(),
              g = this.i.P();
            if (b.g.o(g, 'VisualBrush', b.g.m)) var l = this.zc(a, f, h, d);
            else
              b.g.o(g, 'ImageBrush', b.g.m)
                ? (l = this.Od(a, f, h))
                : b.g.o(g, 'LinearGradientBrush', b.g.m)
                  ? (l = this.Qd(a, f, h))
                  : b.g.o(g, 'RadialGradientBrush', b.g.m)
                    ? (l = this.Sd(a, f, h))
                    : b.g.o(g, 'SolidColorBrush', b.g.m)
                      ? (l = this.Td(a, f))
                      : b.g.I(!1, 'Invalid Brush Type: '.concat(g)),
                'undefined' !== typeof d &&
                  (this.T(h), this.ec(d / h.ab()), this.T(h.Ra()));
            return l;
          },
          Gc: function () {
            var a = this.i.P();
            if (b.g.o(a, 'ResourceDictionary', b.g.m) && !this.i.W()) {
              for (this.i.K(); this.i.advance(); )
                (a = this.i.P()),
                  b.g.o(a, 'VisualBrush', b.g.m)
                    ? this.cd()
                    : b.g.o(a, 'Canvas', b.g.m)
                      ? this.bd()
                      : b.g.I(!1, 'Resource type is invalid: '.concat(a));
              this.i.J();
            }
          },
          Nd: function () {
            for (var a = ''; !this.done; ) a += this.eb();
            return a;
          },
          eb: function () {
            this.Ec = !1;
            for (
              this.nb = {};
              this.A.length < this.Bc && !this.Ec && this.ac();

            );
            this.ac() || (this.done = !0);
            var a = { operators: this.A, data: this.B };
            this.A = [];
            this.B = [];
            return a;
          },
          ke: function () {
            var a = [],
              f = this.nb,
              d;
            for (d in f) a.push(d.substr(1));
            return a;
          },
          done: !1,
          Ga: !1,
          da: !1,
          Dc: 0,
          Cc: 0,
          Bc: 0,
          Ha: null,
          nb: null,
          Ja: 0,
          ga: null,
          R: null,
          i: null,
          Eb: null,
          Fb: !1,
        };
        b.Fa = function () {
          this.$b = this.qb = !1;
          this.ob = this.Zb = 1;
          this.Yb = this.Hb = this.Ib = this.Gb = 0;
        };
        b.Fa.prototype = {
          qb: !1,
          $b: !1,
          ob: 0,
          Zb: 0,
          Gb: 0,
          Yb: 0,
          Hb: 0,
          Ib: 0,
        };
        b.Pa = function () {};
        b.Pa.initial = function (a, f) {
          var d = new b.Pa();
          d.Za = 'black';
          d.Ta = 'black';
          d.Sa = 'nonzero';
          d.Ia = 1;
          d.pb = 'source-over';
          d.Xa = 1;
          d.Va = 'butt';
          d.Wa = 'miter';
          d.Ya = 10;
          d.Ua = '10px sans-serif';
          d.va = new b.L();
          d.ra = new b.ia();
          d.ra.initData(0, 0, a, f);
          return d;
        };
        b.Pa.prototype = {
          clone: function () {
            var a = new b.Pa();
            a.Za = this.Za;
            a.Ta = this.Ta;
            a.Sa = this.Sa;
            a.Ia = this.Ia;
            a.pb = this.pb;
            a.Xa = this.Xa;
            a.Va = this.Va;
            a.Wa = this.Wa;
            a.Ya = this.Ya;
            a.Ua = this.Ua;
            a.va = new b.L();
            a.va.Wb(this.va);
            a.ra = new b.ia();
            a.ra.initData(this.ra.u, this.ra.v, this.ra.H, this.ra.G);
            return a;
          },
          re: function () {
            var a = new b.Pa();
            a.Za = 'black';
            a.Ta = 'black';
            a.Sa = 'nonzero';
            a.Ia = 1;
            a.pb = 'source-over';
            a.Xa = 1;
            a.Va = 'butt';
            a.Wa = 'miter';
            a.Ya = 10;
            a.Ua = '10px sans-serif';
            a.va = new b.L();
            a.va.Wb(this.va);
            a.ra = new b.ia();
            return a;
          },
          Za: null,
          Ta: null,
          Sa: null,
          Ia: 0,
          Xa: 0,
          Va: null,
          Wa: null,
          Ya: 0,
          Ua: null,
          va: null,
          ra: null,
        };
        b.jb = function (a, f) {
          this.x = a;
          this.y = f;
        };
        b.jb.prototype = { x: 0, y: 0 };
        b.ia = function () {
          this.v = this.u = -1e6;
          this.H = this.G = 2e6;
        };
        b.ia.prototype = {
          initData: function (a, f, d, h) {
            this.u = a;
            this.v = f;
            this.H = d;
            this.G = h;
          },
          oe: function () {
            return 0 < this.H && 0 < this.G;
          },
          bb: function (a) {
            a = a.split(',');
            b.g.I(4 === a.length, 'Rectangles should contain 4 numbers');
            this.u = parseFloat(a[0]);
            this.v = parseFloat(a[1]);
            this.H = parseFloat(a[2]);
            this.G = parseFloat(a[3]);
          },
          me: function (a) {
            if (a.Ac()) return this;
            var f = new b.jb(this.u, this.v),
              d = new b.jb(this.u, this.v + this.G),
              h = new b.jb(this.u + this.H, this.v),
              g = new b.jb(this.u + this.H, this.v + this.G);
            a.Ob(f);
            a.Ob(d);
            a.Ob(h);
            a.Ob(g);
            a = Math.min(f.x, d.x, h.x, g.x);
            var l = Math.min(f.y, d.y, h.y, g.y),
              p = new b.ia();
            p.initData(
              a,
              l,
              Math.max(f.x, d.x, h.x, g.x) - a,
              Math.max(f.y, d.y, h.y, g.y) - l
            );
            return p;
          },
          ja: function (a, f) {
            a < this.u
              ? ((this.H += this.u - a), (this.u = a))
              : a > this.u + this.H && (this.H = a - this.u);
            f < this.v
              ? ((this.G += this.v - f), (this.v = f))
              : f > this.v + this.G && (this.G = f - this.v);
          },
          oc: function (a) {
            this.ja(a.u, a.v);
            this.ja(a.u + a.H, a.v + a.G);
          },
          cb: function (a) {
            var f = this.u;
            var d = this.u + this.H;
            var h = this.v;
            var g = this.v + this.G;
            var l = a.u;
            var p = a.u + a.H;
            var D = a.v;
            a = a.v + a.G;
            d < l || p < f || g < D || a < h
              ? (this.u = this.H = this.v = this.G = 0)
              : ((this.u = f < l ? l : f),
                (this.H = (d < p ? d : p) - this.u),
                (this.v = h < D ? D : h),
                (this.G = (g < a ? g : a) - this.v),
                (this.H && this.G) || (this.u = this.H = this.v = this.G = 0));
          },
          inflate: function (a) {
            this.u -= a;
            this.v -= a;
            this.H += 2 * a;
            this.G += 2 * a;
          },
          u: 0,
          v: 0,
          H: 0,
          G: 0,
        };
        b.L = function () {};
        b.L.prototype = {
          X: 1,
          Y: 0,
          Z: 0,
          $: 1,
          ca: 0,
          ea: 0,
          ba: function (a) {
            var f = [1, 0, 0, 1, 0, 0];
            a = a.split(',');
            for (var d = 0; d < a.length && 6 > d; ++d) f[d] = parseFloat(a[d]);
            this.X = f[0];
            this.Y = f[1];
            this.Z = f[2];
            this.$ = f[3];
            this.ca = f[4];
            this.ea = f[5];
          },
          mb: function (a, f, d, h, g, l) {
            this.X = a;
            this.Y = f;
            this.Z = d;
            this.$ = h;
            this.ca = g;
            this.ea = l;
          },
          Wb: function (a) {
            this.X = a.X;
            this.Y = a.Y;
            this.Z = a.Z;
            this.$ = a.$;
            this.ca = a.ca;
            this.ea = a.ea;
          },
          Ea: function (a) {
            var f = this.X,
              d = this.Y,
              h = this.Z,
              g = this.$;
            this.X = a.X * f + a.Y * h;
            this.Y = a.X * d + a.Y * g;
            this.Z = a.Z * f + a.$ * h;
            this.$ = a.Z * d + a.$ * g;
            this.ca = a.ca * f + a.ea * h + this.ca;
            this.ea = a.ca * d + a.ea * g + this.ea;
          },
          Ra: function () {
            var a = new b.L(),
              f = this.X * this.$ - this.Y * this.Z;
            if (!f) return a;
            a.X = this.$ / f;
            a.Z = -this.Z / f;
            a.ca = (this.Z * this.ea - this.ca * this.$) / f;
            a.Y = -this.Y / f;
            a.$ = this.X / f;
            a.ea = -(this.X * this.ea - this.ca * this.Y) / f;
            return a;
          },
          Ob: function (a) {
            var f = a.x * this.Y + a.y * this.$ + this.ea;
            a.x = a.x * this.X + a.y * this.Z + this.ca;
            a.y = f;
          },
          ab: function () {
            var a = 0.707106781 * this.X + 0.707106781 * this.Y,
              f = 0.707106781 * this.Z + 0.707106781 * this.$;
            return Math.sqrt(a * a + f * f);
          },
          Ac: function () {
            return 1 !== this.X ||
              this.Y ||
              this.Z ||
              1 !== this.$ ||
              this.ca ||
              this.ea
              ? !1
              : !0;
          },
          Bb: function () {
            return this.Rd();
          },
          Rd: function () {
            return this.Ac()
              ? null
              : [this.X, this.Y, this.Z, this.$, this.ca, this.ea];
          },
        };
        b.Pb = function (a) {
          this.ha = a;
          this.j = this.l = this.O = 0;
          this.U = !1;
        };
        b.Pb.prototype = {
          ha: null,
          O: 0,
          j: 0,
          l: 0,
          Yd: 0,
          Zd: 0,
          U: !1,
          sa: 0,
          ta: 0,
        };
        b.ae = function () {};
        b.ae.prototype = {};
        b.g.af =
          'http://schemas.microsoft.com/xps/2005/06/resourcedictionary-key';
        b.g.gf = 'http://schemas.openxps.org/oxps/v1.0/resourcedictionary-key';
        b.g.nf = 'http://schemas.microsoft.com/winfx/2006/xaml';
        b.g.m = 'http://schemas.microsoft.com/xps/2005/06';
        b.g.pf = 'http://schemas.microsoft.com/winfx/2006/xaml/presentation';
        b.g.hf = 'http://schemas.openxps.org/oxps/v1.0';
        b.g.rf = 'http://schemas.microsoft.com/xps/2005/06/documentstructure';
        b.g.ff = 'http://schemas.openxps.org/oxps/v1.0/documentstructure';
        b.g.lf = 'http://schemas.openxmlformats.org/package/2006/relationships';
        b.g.Te = 'http://schemas.openxmlformats.org/package/2006/content-types';
        b.g.bf = 'http://schemas.openxmlformats.org/markup-compatibility/2006';
        b.g.Ue =
          'http://schemas.openxmlformats.org/package/2006/metadata/core-properties';
        b.g.Ve = 'http://purl.org/dc/elements/1.1/';
        b.g.We = 'http://purl.org/dc/terms/';
        b.g.qf = 'http://www.w3.org/XML/1998/namespace';
        b.g.mf = 'clr-namespace:PDFTron.SilverDox.Internal;assembly=SilverDox';
        b.g.sf = 'http://schemas.microsoft.com/xps/2005/06/restricted-font';
        b.g.jf = 'http://schemas.openxps.org/oxps/v1.0/restricted-font';
        b.g.cf = 'application/vnd.ms-package.obfuscated-opentype';
        b.g.kf = 'http://www.pdftron.com/silverdox/2010/09';
        b.g.Hd = 0;
        b.g.Gd = 1;
        b.g.zb = 2;
        b.g.$e = 3;
        b.g.zd = 4;
        b.g.wd = 5;
        b.g.za = 6;
        b.g.na = 7;
        b.g.td = 8;
        b.g.uc = 9;
        b.g.od = 10;
        b.g.ed = 11;
        b.g.Fd = 12;
        b.g.fd = 13;
        b.g.jd = 14;
        b.g.xb = 15;
        b.g.yb = 16;
        b.g.hd = 17;
        b.g.Cd = 18;
        b.g.yd = 19;
        b.g.Dd = 20;
        b.g.gd = 21;
        b.g.sd = 22;
        b.g.pd = 23;
        b.g.tc = 24;
        b.g.Id = 25;
        b.g.Bd = 26;
        b.g.xd = 27;
        b.g.nd = 28;
        b.g.Ze = 29;
        b.g.Ye = 30;
        b.g.rd = 31;
        b.g.kd = 32;
        b.g.ld = 33;
        b.g.ud = 34;
        b.g.vc = 35;
        b.g.Kd = 36;
        b.g.Xe = 37;
        b.g.sc = 38;
        b.g.qd = 39;
        b.g.Rb = 40;
        b.g.md = 41;
        b.g.Jd = 1;
        b.g.Ad = 2;
        b.g.Ed = 3;
        b.g.vd = 4;
        b.g.df =
          'S r t T w c s f a L R P A b z F X C M l q B n x m W i j I Z d D e xw cgb cge g bO tm'.split(
            ' '
          );
        b.g.ef =
          'S r t T w c s f a L R P A b z F X C M l q B n xc m W i j I Z d D e xcw cgb cge g bO tm'.split(
            ' '
          );
      })('undefined' !== typeof window ? window : self);
    },
    function (B, t, y) {
      var n = y(7),
        m = y(4),
        z = y(8);
      y.n(z);
      (function (u) {
        u.trn.g || (u.trn = trn);
        var E = function f(a) {
          this.N = '';
          this.data = a;
          this.Vc = new z.Inflate({
            windowBits: -15,
            chunkSize: f.prototype.chunkSize,
          });
          this.finished = !1;
          this.lc();
          this.start = 0;
        };
        E.prototype = {
          chunkSize: 102400,
          mark: function (a) {
            var f = a - this.start;
            f > E.prototype.chunkSize &&
              ((this.N = this.N.slice(f)), (this.start = a));
          },
          indexOf: function (a, f) {
            f -= this.start;
            do var d = this.N.indexOf(a, f);
            while (-1 === d && this.lc());
            return d + this.start;
          },
          charAt: function (a) {
            a -= this.start;
            a >= this.N.length && this.lc();
            return this.N.charAt(a);
          },
          substring: function (a, f) {
            a -= this.start;
            f -= this.start;
            return this.N.substring(a, f);
          },
          le: function () {
            var a = '';
            this.Vc.onData = function (f) {
              a += Object(n.a)(f);
            };
            this.Vc.push(this.data.slice(0, E.prototype.chunkSize), 2);
            this.data = this.data.slice(E.prototype.chunkSize);
            return a;
          },
          lc: function () {
            var a = this.le();
            return a.length ? ((this.N += a), !0) : !1;
          },
        };
        u.eb = function () {
          if (u.La.done)
            return u.postMessage({ command: 'done' }), (u.La = null), !1;
          var a = u.La.eb();
          u.postMessage({
            command: 'nextChunk',
            resources: u.La.ke(),
            dataString: a,
          });
          return !0;
        };
        var q = (function () {
          var a = navigator.userAgent.toLowerCase();
          return (a =
            /(msie) ([\w.]+)/.exec(a) ||
            /(trident)(?:.*? rv:([\w.]+)|)/.exec(a))
            ? parseInt(a[2], 10)
            : a;
        })();
        u.Oc = function () {
          if (9 === q) for (; u.eb(); );
          else
            setTimeout(function () {
              u.La && u.eb() && u.Oc();
            }, 0);
        };
        u.$c = E;
        u.Nc = !1;
        u.onmessage = function (a) {
          switch (a.data.command) {
            case 'data':
              var f = new m.a(new u.$c(a.data.dataString));
              u.La = new u.trn.g(f, u.Nc, u.ve, a.data.docId);
              u.Pc && u.Oc();
              break;
            case 'nextChunk':
              u.Pc || (u.La && u.eb());
              break;
            case 'cancel':
              u.La = null;
              u.postMessage({ command: 'done' });
              break;
            case 'options':
              u.Nc = a.data.imageScaling;
              u.ve = a.data.specialBlendSupported;
              u.Pc = a.data.continueWithoutPrompt;
              break;
            default:
              throw Error('Unknown message command '.concat(a.data.command));
          }
        };
      })(self);
    },
    function (B, t, y) {
      function n(k) {
        return (
          ((k >>> 24) & 255) +
          ((k >>> 8) & 65280) +
          ((k & 65280) << 8) +
          ((k & 255) << 24)
        );
      }
      function m() {
        this.mode = 0;
        this.Nb = !1;
        this.ua = 0;
        this.jc = !1;
        this.total = this.check = this.Kb = this.flags = 0;
        this.head = null;
        this.ka = this.ya = this.la = this.gb = 0;
        this.window = null;
        this.V = this.offset = this.length = this.S = this.Da = 0;
        this.Ma = this.xa = null;
        this.pa = this.tb = this.fb = this.Yc = this.$a = this.wa = 0;
        this.next = null;
        this.fa = new a.hb(320);
        this.wb = new a.hb(288);
        this.Qc = this.Wc = null;
        this.xe = this.back = this.mc = 0;
      }
      function z(k) {
        if (!k || !k.state) return -2;
        var v = k.state;
        k.nc = k.vb = v.total = 0;
        k.msg = '';
        v.ua && (k.Ka = v.ua & 1);
        v.mode = 1;
        v.Nb = 0;
        v.jc = 0;
        v.Kb = 32768;
        v.head = null;
        v.Da = 0;
        v.S = 0;
        v.xa = v.Wc = new a.ib(852);
        v.Ma = v.Qc = new a.ib(592);
        v.mc = 1;
        v.back = -1;
        return 0;
      }
      function u(k) {
        if (!k || !k.state) return -2;
        var v = k.state;
        v.la = 0;
        v.ya = 0;
        v.ka = 0;
        return z(k);
      }
      function E(k, v) {
        if (!k || !k.state) return -2;
        var G = k.state;
        if (0 > v) {
          var C = 0;
          v = -v;
        } else (C = (v >> 4) + 1), 48 > v && (v &= 15);
        if (v && (8 > v || 15 < v)) return -2;
        null !== G.window && G.gb !== v && (G.window = null);
        G.ua = C;
        G.gb = v;
        return u(k);
      }
      function q(k, v) {
        if (!k) return -2;
        var G = new m();
        k.state = G;
        G.window = null;
        v = E(k, v);
        0 !== v && (k.state = null);
        return v;
      }
      function b(k, v, G, C) {
        var w = k.state;
        null === w.window &&
          ((w.la = 1 << w.gb),
          (w.ka = 0),
          (w.ya = 0),
          (w.window = new a.Buf8(w.la)));
        C >= w.la
          ? (a.arraySet(w.window, v, G - w.la, w.la, 0),
            (w.ka = 0),
            (w.ya = w.la))
          : ((k = w.la - w.ka),
            k > C && (k = C),
            a.arraySet(w.window, v, G - C, k, w.ka),
            (C -= k)
              ? (a.arraySet(w.window, v, G - C, C, 0),
                (w.ka = C),
                (w.ya = w.la))
              : ((w.ka += k),
                w.ka === w.la && (w.ka = 0),
                w.ya < w.la && (w.ya += k)));
        return 0;
      }
      var a = y(3),
        f = y(14),
        d = y(15),
        h = y(16),
        g = y(17),
        l = !0,
        p,
        D;
      t.yf = u;
      t.zf = E;
      t.Af = z;
      t.xf = function (k) {
        return q(k, 15);
      };
      t.inflateInit2 = q;
      t.inflate = function (k, v) {
        var G,
          C = new a.Buf8(4),
          w = [
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ];
        if (!k || !k.state || !k.output || (!k.input && 0 !== k.avail_in))
          return -2;
        var e = k.state;
        12 === e.mode && (e.mode = 13);
        var H = k.next_out;
        var L = k.output;
        var M = k.avail_out;
        var J = k.next_in;
        var K = k.input;
        var F = k.avail_in;
        var x = e.Da;
        var r = e.S;
        var Q = F;
        var O = M;
        var R = 0;
        a: for (;;)
          switch (e.mode) {
            case 1:
              if (0 === e.ua) {
                e.mode = 13;
                break;
              }
              for (; 16 > r; ) {
                if (0 === F) break a;
                F--;
                x += K[J++] << r;
                r += 8;
              }
              if (e.ua & 2 && 35615 === x) {
                e.check = 0;
                C[0] = x & 255;
                C[1] = (x >>> 8) & 255;
                e.check = d(e.check, C, 2, 0);
                r = x = 0;
                e.mode = 2;
                break;
              }
              e.flags = 0;
              e.head && (e.head.done = !1);
              if (!(e.ua & 1) || (((x & 255) << 8) + (x >> 8)) % 31) {
                k.msg = 'incorrect header check';
                e.mode = 30;
                break;
              }
              if (8 !== (x & 15)) {
                k.msg = 'unknown compression method';
                e.mode = 30;
                break;
              }
              x >>>= 4;
              r -= 4;
              var I = (x & 15) + 8;
              if (0 === e.gb) e.gb = I;
              else if (I > e.gb) {
                k.msg = 'invalid window size';
                e.mode = 30;
                break;
              }
              e.Kb = 1 << I;
              k.Ka = e.check = 1;
              e.mode = x & 512 ? 10 : 12;
              r = x = 0;
              break;
            case 2:
              for (; 16 > r; ) {
                if (0 === F) break a;
                F--;
                x += K[J++] << r;
                r += 8;
              }
              e.flags = x;
              if (8 !== (e.flags & 255)) {
                k.msg = 'unknown compression method';
                e.mode = 30;
                break;
              }
              if (e.flags & 57344) {
                k.msg = 'unknown header flags set';
                e.mode = 30;
                break;
              }
              e.head && (e.head.text = (x >> 8) & 1);
              e.flags & 512 &&
                ((C[0] = x & 255),
                (C[1] = (x >>> 8) & 255),
                (e.check = d(e.check, C, 2, 0)));
              r = x = 0;
              e.mode = 3;
            case 3:
              for (; 32 > r; ) {
                if (0 === F) break a;
                F--;
                x += K[J++] << r;
                r += 8;
              }
              e.head && (e.head.time = x);
              e.flags & 512 &&
                ((C[0] = x & 255),
                (C[1] = (x >>> 8) & 255),
                (C[2] = (x >>> 16) & 255),
                (C[3] = (x >>> 24) & 255),
                (e.check = d(e.check, C, 4, 0)));
              r = x = 0;
              e.mode = 4;
            case 4:
              for (; 16 > r; ) {
                if (0 === F) break a;
                F--;
                x += K[J++] << r;
                r += 8;
              }
              e.head && ((e.head.ye = x & 255), (e.head.te = x >> 8));
              e.flags & 512 &&
                ((C[0] = x & 255),
                (C[1] = (x >>> 8) & 255),
                (e.check = d(e.check, C, 2, 0)));
              r = x = 0;
              e.mode = 5;
            case 5:
              if (e.flags & 1024) {
                for (; 16 > r; ) {
                  if (0 === F) break a;
                  F--;
                  x += K[J++] << r;
                  r += 8;
                }
                e.length = x;
                e.head && (e.head.ic = x);
                e.flags & 512 &&
                  ((C[0] = x & 255),
                  (C[1] = (x >>> 8) & 255),
                  (e.check = d(e.check, C, 2, 0)));
                r = x = 0;
              } else e.head && (e.head.V = null);
              e.mode = 6;
            case 6:
              if (e.flags & 1024) {
                var A = e.length;
                A > F && (A = F);
                A &&
                  (e.head &&
                    ((I = e.head.ic - e.length),
                    e.head.V || (e.head.V = Array(e.head.ic)),
                    a.arraySet(e.head.V, K, J, A, I)),
                  e.flags & 512 && (e.check = d(e.check, K, A, J)),
                  (F -= A),
                  (J += A),
                  (e.length -= A));
                if (e.length) break a;
              }
              e.length = 0;
              e.mode = 7;
            case 7:
              if (e.flags & 2048) {
                if (0 === F) break a;
                A = 0;
                do
                  (I = K[J + A++]),
                    e.head &&
                      I &&
                      65536 > e.length &&
                      (e.head.name += String.fromCharCode(I));
                while (I && A < F);
                e.flags & 512 && (e.check = d(e.check, K, A, J));
                F -= A;
                J += A;
                if (I) break a;
              } else e.head && (e.head.name = null);
              e.length = 0;
              e.mode = 8;
            case 8:
              if (e.flags & 4096) {
                if (0 === F) break a;
                A = 0;
                do
                  (I = K[J + A++]),
                    e.head &&
                      I &&
                      65536 > e.length &&
                      (e.head.fc += String.fromCharCode(I));
                while (I && A < F);
                e.flags & 512 && (e.check = d(e.check, K, A, J));
                F -= A;
                J += A;
                if (I) break a;
              } else e.head && (e.head.fc = null);
              e.mode = 9;
            case 9:
              if (e.flags & 512) {
                for (; 16 > r; ) {
                  if (0 === F) break a;
                  F--;
                  x += K[J++] << r;
                  r += 8;
                }
                if (x !== (e.check & 65535)) {
                  k.msg = 'header crc mismatch';
                  e.mode = 30;
                  break;
                }
                r = x = 0;
              }
              e.head && ((e.head.ne = (e.flags >> 9) & 1), (e.head.done = !0));
              k.Ka = e.check = 0;
              e.mode = 12;
              break;
            case 10:
              for (; 32 > r; ) {
                if (0 === F) break a;
                F--;
                x += K[J++] << r;
                r += 8;
              }
              k.Ka = e.check = n(x);
              r = x = 0;
              e.mode = 11;
            case 11:
              if (0 === e.jc)
                return (
                  (k.next_out = H),
                  (k.avail_out = M),
                  (k.next_in = J),
                  (k.avail_in = F),
                  (e.Da = x),
                  (e.S = r),
                  2
                );
              k.Ka = e.check = 1;
              e.mode = 12;
            case 12:
              if (5 === v || 6 === v) break a;
            case 13:
              if (e.Nb) {
                x >>>= r & 7;
                r -= r & 7;
                e.mode = 27;
                break;
              }
              for (; 3 > r; ) {
                if (0 === F) break a;
                F--;
                x += K[J++] << r;
                r += 8;
              }
              e.Nb = x & 1;
              x >>>= 1;
              --r;
              switch (x & 3) {
                case 0:
                  e.mode = 14;
                  break;
                case 1:
                  I = e;
                  if (l) {
                    p = new a.ib(512);
                    D = new a.ib(32);
                    for (A = 0; 144 > A; ) I.fa[A++] = 8;
                    for (; 256 > A; ) I.fa[A++] = 9;
                    for (; 280 > A; ) I.fa[A++] = 7;
                    for (; 288 > A; ) I.fa[A++] = 8;
                    g(1, I.fa, 0, 288, p, 0, I.wb, { S: 9 });
                    for (A = 0; 32 > A; ) I.fa[A++] = 5;
                    g(2, I.fa, 0, 32, D, 0, I.wb, { S: 5 });
                    l = !1;
                  }
                  I.xa = p;
                  I.wa = 9;
                  I.Ma = D;
                  I.$a = 5;
                  e.mode = 20;
                  if (6 === v) {
                    x >>>= 2;
                    r -= 2;
                    break a;
                  }
                  break;
                case 2:
                  e.mode = 17;
                  break;
                case 3:
                  (k.msg = 'invalid block type'), (e.mode = 30);
              }
              x >>>= 2;
              r -= 2;
              break;
            case 14:
              x >>>= r & 7;
              for (r -= r & 7; 32 > r; ) {
                if (0 === F) break a;
                F--;
                x += K[J++] << r;
                r += 8;
              }
              if ((x & 65535) !== ((x >>> 16) ^ 65535)) {
                k.msg = 'invalid stored block lengths';
                e.mode = 30;
                break;
              }
              e.length = x & 65535;
              r = x = 0;
              e.mode = 15;
              if (6 === v) break a;
            case 15:
              e.mode = 16;
            case 16:
              if ((A = e.length)) {
                A > F && (A = F);
                A > M && (A = M);
                if (0 === A) break a;
                a.arraySet(L, K, J, A, H);
                F -= A;
                J += A;
                M -= A;
                H += A;
                e.length -= A;
                break;
              }
              e.mode = 12;
              break;
            case 17:
              for (; 14 > r; ) {
                if (0 === F) break a;
                F--;
                x += K[J++] << r;
                r += 8;
              }
              e.fb = (x & 31) + 257;
              x >>>= 5;
              r -= 5;
              e.tb = (x & 31) + 1;
              x >>>= 5;
              r -= 5;
              e.Yc = (x & 15) + 4;
              x >>>= 4;
              r -= 4;
              if (286 < e.fb || 30 < e.tb) {
                k.msg = 'too many length or distance symbols';
                e.mode = 30;
                break;
              }
              e.pa = 0;
              e.mode = 18;
            case 18:
              for (; e.pa < e.Yc; ) {
                for (; 3 > r; ) {
                  if (0 === F) break a;
                  F--;
                  x += K[J++] << r;
                  r += 8;
                }
                e.fa[w[e.pa++]] = x & 7;
                x >>>= 3;
                r -= 3;
              }
              for (; 19 > e.pa; ) e.fa[w[e.pa++]] = 0;
              e.xa = e.Wc;
              e.wa = 7;
              A = { S: e.wa };
              R = g(0, e.fa, 0, 19, e.xa, 0, e.wb, A);
              e.wa = A.S;
              if (R) {
                k.msg = 'invalid code lengths set';
                e.mode = 30;
                break;
              }
              e.pa = 0;
              e.mode = 19;
            case 19:
              for (; e.pa < e.fb + e.tb; ) {
                for (;;) {
                  var N = e.xa[x & ((1 << e.wa) - 1)];
                  A = N >>> 24;
                  N &= 65535;
                  if (A <= r) break;
                  if (0 === F) break a;
                  F--;
                  x += K[J++] << r;
                  r += 8;
                }
                if (16 > N) (x >>>= A), (r -= A), (e.fa[e.pa++] = N);
                else {
                  if (16 === N) {
                    for (I = A + 2; r < I; ) {
                      if (0 === F) break a;
                      F--;
                      x += K[J++] << r;
                      r += 8;
                    }
                    x >>>= A;
                    r -= A;
                    if (0 === e.pa) {
                      k.msg = 'invalid bit length repeat';
                      e.mode = 30;
                      break;
                    }
                    I = e.fa[e.pa - 1];
                    A = 3 + (x & 3);
                    x >>>= 2;
                    r -= 2;
                  } else if (17 === N) {
                    for (I = A + 3; r < I; ) {
                      if (0 === F) break a;
                      F--;
                      x += K[J++] << r;
                      r += 8;
                    }
                    x >>>= A;
                    r -= A;
                    I = 0;
                    A = 3 + (x & 7);
                    x >>>= 3;
                    r -= 3;
                  } else {
                    for (I = A + 7; r < I; ) {
                      if (0 === F) break a;
                      F--;
                      x += K[J++] << r;
                      r += 8;
                    }
                    x >>>= A;
                    r -= A;
                    I = 0;
                    A = 11 + (x & 127);
                    x >>>= 7;
                    r -= 7;
                  }
                  if (e.pa + A > e.fb + e.tb) {
                    k.msg = 'invalid bit length repeat';
                    e.mode = 30;
                    break;
                  }
                  for (; A--; ) e.fa[e.pa++] = I;
                }
              }
              if (30 === e.mode) break;
              if (0 === e.fa[256]) {
                k.msg = 'invalid code -- missing end-of-block';
                e.mode = 30;
                break;
              }
              e.wa = 9;
              A = { S: e.wa };
              R = g(1, e.fa, 0, e.fb, e.xa, 0, e.wb, A);
              e.wa = A.S;
              if (R) {
                k.msg = 'invalid literal/lengths set';
                e.mode = 30;
                break;
              }
              e.$a = 6;
              e.Ma = e.Qc;
              A = { S: e.$a };
              R = g(2, e.fa, e.fb, e.tb, e.Ma, 0, e.wb, A);
              e.$a = A.S;
              if (R) {
                k.msg = 'invalid distances set';
                e.mode = 30;
                break;
              }
              e.mode = 20;
              if (6 === v) break a;
            case 20:
              e.mode = 21;
            case 21:
              if (6 <= F && 258 <= M) {
                k.next_out = H;
                k.avail_out = M;
                k.next_in = J;
                k.avail_in = F;
                e.Da = x;
                e.S = r;
                h(k, O);
                H = k.next_out;
                L = k.output;
                M = k.avail_out;
                J = k.next_in;
                K = k.input;
                F = k.avail_in;
                x = e.Da;
                r = e.S;
                12 === e.mode && (e.back = -1);
                break;
              }
              for (e.back = 0; ; ) {
                N = e.xa[x & ((1 << e.wa) - 1)];
                A = N >>> 24;
                I = (N >>> 16) & 255;
                N &= 65535;
                if (A <= r) break;
                if (0 === F) break a;
                F--;
                x += K[J++] << r;
                r += 8;
              }
              if (I && 0 === (I & 240)) {
                var P = A;
                var U = I;
                for (G = N; ; ) {
                  N = e.xa[G + ((x & ((1 << (P + U)) - 1)) >> P)];
                  A = N >>> 24;
                  I = (N >>> 16) & 255;
                  N &= 65535;
                  if (P + A <= r) break;
                  if (0 === F) break a;
                  F--;
                  x += K[J++] << r;
                  r += 8;
                }
                x >>>= P;
                r -= P;
                e.back += P;
              }
              x >>>= A;
              r -= A;
              e.back += A;
              e.length = N;
              if (0 === I) {
                e.mode = 26;
                break;
              }
              if (I & 32) {
                e.back = -1;
                e.mode = 12;
                break;
              }
              if (I & 64) {
                k.msg = 'invalid literal/length code';
                e.mode = 30;
                break;
              }
              e.V = I & 15;
              e.mode = 22;
            case 22:
              if (e.V) {
                for (I = e.V; r < I; ) {
                  if (0 === F) break a;
                  F--;
                  x += K[J++] << r;
                  r += 8;
                }
                e.length += x & ((1 << e.V) - 1);
                x >>>= e.V;
                r -= e.V;
                e.back += e.V;
              }
              e.xe = e.length;
              e.mode = 23;
            case 23:
              for (;;) {
                N = e.Ma[x & ((1 << e.$a) - 1)];
                A = N >>> 24;
                I = (N >>> 16) & 255;
                N &= 65535;
                if (A <= r) break;
                if (0 === F) break a;
                F--;
                x += K[J++] << r;
                r += 8;
              }
              if (0 === (I & 240)) {
                P = A;
                U = I;
                for (G = N; ; ) {
                  N = e.Ma[G + ((x & ((1 << (P + U)) - 1)) >> P)];
                  A = N >>> 24;
                  I = (N >>> 16) & 255;
                  N &= 65535;
                  if (P + A <= r) break;
                  if (0 === F) break a;
                  F--;
                  x += K[J++] << r;
                  r += 8;
                }
                x >>>= P;
                r -= P;
                e.back += P;
              }
              x >>>= A;
              r -= A;
              e.back += A;
              if (I & 64) {
                k.msg = 'invalid distance code';
                e.mode = 30;
                break;
              }
              e.offset = N;
              e.V = I & 15;
              e.mode = 24;
            case 24:
              if (e.V) {
                for (I = e.V; r < I; ) {
                  if (0 === F) break a;
                  F--;
                  x += K[J++] << r;
                  r += 8;
                }
                e.offset += x & ((1 << e.V) - 1);
                x >>>= e.V;
                r -= e.V;
                e.back += e.V;
              }
              if (e.offset > e.Kb) {
                k.msg = 'invalid distance too far back';
                e.mode = 30;
                break;
              }
              e.mode = 25;
            case 25:
              if (0 === M) break a;
              A = O - M;
              if (e.offset > A) {
                A = e.offset - A;
                if (A > e.ya && e.mc) {
                  k.msg = 'invalid distance too far back';
                  e.mode = 30;
                  break;
                }
                A > e.ka ? ((A -= e.ka), (I = e.la - A)) : (I = e.ka - A);
                A > e.length && (A = e.length);
                P = e.window;
              } else (P = L), (I = H - e.offset), (A = e.length);
              A > M && (A = M);
              M -= A;
              e.length -= A;
              do L[H++] = P[I++];
              while (--A);
              0 === e.length && (e.mode = 21);
              break;
            case 26:
              if (0 === M) break a;
              L[H++] = e.length;
              M--;
              e.mode = 21;
              break;
            case 27:
              if (e.ua) {
                for (; 32 > r; ) {
                  if (0 === F) break a;
                  F--;
                  x |= K[J++] << r;
                  r += 8;
                }
                O -= M;
                k.vb += O;
                e.total += O;
                O &&
                  (k.Ka = e.check =
                    e.flags
                      ? d(e.check, L, O, H - O)
                      : f(e.check, L, O, H - O));
                O = M;
                if ((e.flags ? x : n(x)) !== e.check) {
                  k.msg = 'incorrect data check';
                  e.mode = 30;
                  break;
                }
                r = x = 0;
              }
              e.mode = 28;
            case 28:
              if (e.ua && e.flags) {
                for (; 32 > r; ) {
                  if (0 === F) break a;
                  F--;
                  x += K[J++] << r;
                  r += 8;
                }
                if (x !== (e.total & 4294967295)) {
                  k.msg = 'incorrect length check';
                  e.mode = 30;
                  break;
                }
                r = x = 0;
              }
              e.mode = 29;
            case 29:
              R = 1;
              break a;
            case 30:
              R = -3;
              break a;
            case 31:
              return -4;
            default:
              return -2;
          }
        k.next_out = H;
        k.avail_out = M;
        k.next_in = J;
        k.avail_in = F;
        e.Da = x;
        e.S = r;
        if (
          (e.la ||
            (O !== k.avail_out && 30 > e.mode && (27 > e.mode || 4 !== v))) &&
          b(k, k.output, k.next_out, O - k.avail_out)
        )
          return (e.mode = 31), -4;
        Q -= k.avail_in;
        O -= k.avail_out;
        k.nc += Q;
        k.vb += O;
        e.total += O;
        e.ua &&
          O &&
          (k.Ka = e.check =
            e.flags
              ? d(e.check, L, O, k.next_out - O)
              : f(e.check, L, O, k.next_out - O));
        k.ie =
          e.S +
          (e.Nb ? 64 : 0) +
          (12 === e.mode ? 128 : 0) +
          (20 === e.mode || 15 === e.mode ? 256 : 0);
        ((0 === Q && 0 === O) || 4 === v) && 0 === R && (R = -5);
        return R;
      };
      t.inflateEnd = function (k) {
        if (!k || !k.state) return -2;
        var v = k.state;
        v.window && (v.window = null);
        k.state = null;
        return 0;
      };
      t.inflateGetHeader = function (k, v) {
        if (!k || !k.state) return -2;
        k = k.state;
        if (0 === (k.ua & 2)) return -2;
        k.head = v;
        v.done = !1;
        return 0;
      };
      t.inflateSetDictionary = function (k, v) {
        var G = v.length;
        if (!k || !k.state) return -2;
        var C = k.state;
        if (0 !== C.ua && 11 !== C.mode) return -2;
        if (11 === C.mode) {
          var w = f(1, v, G, 0);
          if (w !== C.check) return -3;
        }
        if (b(k, v, G, G)) return (C.mode = 31), -4;
        C.jc = 1;
        return 0;
      };
      t.wf = 'pako inflate (from Nodeca project)';
    },
    function (B) {
      B.exports = function (t, y, n, m) {
        var z = (t & 65535) | 0;
        t = ((t >>> 16) & 65535) | 0;
        for (var u; 0 !== n; ) {
          u = 2e3 < n ? 2e3 : n;
          n -= u;
          do (z = (z + y[m++]) | 0), (t = (t + z) | 0);
          while (--u);
          z %= 65521;
          t %= 65521;
        }
        return z | (t << 16) | 0;
      };
    },
    function (B) {
      var t = (function () {
        for (var y, n = [], m = 0; 256 > m; m++) {
          y = m;
          for (var z = 0; 8 > z; z++)
            y = y & 1 ? 3988292384 ^ (y >>> 1) : y >>> 1;
          n[m] = y;
        }
        return n;
      })();
      B.exports = function (y, n, m, z) {
        m = z + m;
        for (y ^= -1; z < m; z++) y = (y >>> 8) ^ t[(y ^ n[z]) & 255];
        return y ^ -1;
      };
    },
    function (B) {
      B.exports = function (t, y) {
        var n = t.state;
        var m = t.next_in;
        var z = t.input;
        var u = m + (t.avail_in - 5);
        var E = t.next_out;
        var q = t.output;
        y = E - (y - t.avail_out);
        var b = E + (t.avail_out - 257);
        var a = n.Kb;
        var f = n.la;
        var d = n.ya;
        var h = n.ka;
        var g = n.window;
        var l = n.Da;
        var p = n.S;
        var D = n.xa;
        var k = n.Ma;
        var v = (1 << n.wa) - 1;
        var G = (1 << n.$a) - 1;
        a: do {
          15 > p &&
            ((l += z[m++] << p), (p += 8), (l += z[m++] << p), (p += 8));
          var C = D[l & v];
          b: for (;;) {
            var w = C >>> 24;
            l >>>= w;
            p -= w;
            w = (C >>> 16) & 255;
            if (0 === w) q[E++] = C & 65535;
            else if (w & 16) {
              var e = C & 65535;
              if ((w &= 15))
                p < w && ((l += z[m++] << p), (p += 8)),
                  (e += l & ((1 << w) - 1)),
                  (l >>>= w),
                  (p -= w);
              15 > p &&
                ((l += z[m++] << p), (p += 8), (l += z[m++] << p), (p += 8));
              C = k[l & G];
              c: for (;;) {
                w = C >>> 24;
                l >>>= w;
                p -= w;
                w = (C >>> 16) & 255;
                if (w & 16) {
                  C &= 65535;
                  w &= 15;
                  p < w &&
                    ((l += z[m++] << p),
                    (p += 8),
                    p < w && ((l += z[m++] << p), (p += 8)));
                  C += l & ((1 << w) - 1);
                  if (C > a) {
                    t.msg = 'invalid distance too far back';
                    n.mode = 30;
                    break a;
                  }
                  l >>>= w;
                  p -= w;
                  w = E - y;
                  if (C > w) {
                    w = C - w;
                    if (w > d && n.mc) {
                      t.msg = 'invalid distance too far back';
                      n.mode = 30;
                      break a;
                    }
                    var H = 0;
                    var L = g;
                    if (0 === h) {
                      if (((H += f - w), w < e)) {
                        e -= w;
                        do q[E++] = g[H++];
                        while (--w);
                        H = E - C;
                        L = q;
                      }
                    } else if (h < w) {
                      if (((H += f + h - w), (w -= h), w < e)) {
                        e -= w;
                        do q[E++] = g[H++];
                        while (--w);
                        H = 0;
                        if (h < e) {
                          w = h;
                          e -= w;
                          do q[E++] = g[H++];
                          while (--w);
                          H = E - C;
                          L = q;
                        }
                      }
                    } else if (((H += h - w), w < e)) {
                      e -= w;
                      do q[E++] = g[H++];
                      while (--w);
                      H = E - C;
                      L = q;
                    }
                    for (; 2 < e; )
                      (q[E++] = L[H++]),
                        (q[E++] = L[H++]),
                        (q[E++] = L[H++]),
                        (e -= 3);
                    e && ((q[E++] = L[H++]), 1 < e && (q[E++] = L[H++]));
                  } else {
                    H = E - C;
                    do
                      (q[E++] = q[H++]),
                        (q[E++] = q[H++]),
                        (q[E++] = q[H++]),
                        (e -= 3);
                    while (2 < e);
                    e && ((q[E++] = q[H++]), 1 < e && (q[E++] = q[H++]));
                  }
                } else if (0 === (w & 64)) {
                  C = k[(C & 65535) + (l & ((1 << w) - 1))];
                  continue c;
                } else {
                  t.msg = 'invalid distance code';
                  n.mode = 30;
                  break a;
                }
                break;
              }
            } else if (0 === (w & 64)) {
              C = D[(C & 65535) + (l & ((1 << w) - 1))];
              continue b;
            } else {
              w & 32
                ? (n.mode = 12)
                : ((t.msg = 'invalid literal/length code'), (n.mode = 30));
              break a;
            }
            break;
          }
        } while (m < u && E < b);
        e = p >> 3;
        m -= e;
        p -= e << 3;
        t.next_in = m;
        t.next_out = E;
        t.avail_in = m < u ? 5 + (u - m) : 5 - (m - u);
        t.avail_out = E < b ? 257 + (b - E) : 257 - (E - b);
        n.Da = l & ((1 << p) - 1);
        n.S = p;
      };
    },
    function (B, t, y) {
      var n = y(3),
        m = [
          3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
          59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
        ],
        z = [
          16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19,
          19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
        ],
        u = [
          1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
          513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
          24577, 0, 0,
        ],
        E = [
          16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23,
          23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
        ];
      B.exports = function (q, b, a, f, d, h, g, l) {
        var p = l.S,
          D,
          k,
          v,
          G,
          C,
          w,
          e = 0,
          H = new n.hb(16);
        var L = new n.hb(16);
        var M,
          J = 0;
        for (D = 0; 15 >= D; D++) H[D] = 0;
        for (k = 0; k < f; k++) H[b[a + k]]++;
        var K = p;
        for (v = 15; 1 <= v && 0 === H[v]; v--);
        K > v && (K = v);
        if (0 === v)
          return (d[h++] = 20971520), (d[h++] = 20971520), (l.S = 1), 0;
        for (p = 1; p < v && 0 === H[p]; p++);
        K < p && (K = p);
        for (D = G = 1; 15 >= D; D++)
          if (((G <<= 1), (G -= H[D]), 0 > G)) return -1;
        if (0 < G && (0 === q || 1 !== v)) return -1;
        L[1] = 0;
        for (D = 1; 15 > D; D++) L[D + 1] = L[D] + H[D];
        for (k = 0; k < f; k++) 0 !== b[a + k] && (g[L[b[a + k]]++] = k);
        if (0 === q) {
          var F = (M = g);
          var x = 19;
        } else
          1 === q
            ? ((F = m), (e -= 257), (M = z), (J -= 257), (x = 256))
            : ((F = u), (M = E), (x = -1));
        k = C = 0;
        D = p;
        var r = h;
        f = K;
        L = 0;
        var Q = -1;
        var O = 1 << K;
        var R = O - 1;
        if ((1 === q && 852 < O) || (2 === q && 592 < O)) return 1;
        for (;;) {
          var I = D - L;
          if (g[k] < x) {
            var A = 0;
            var N = g[k];
          } else
            g[k] > x
              ? ((A = M[J + g[k]]), (N = F[e + g[k]]))
              : ((A = 96), (N = 0));
          G = 1 << (D - L);
          p = w = 1 << f;
          do (w -= G), (d[r + (C >> L) + w] = (I << 24) | (A << 16) | N | 0);
          while (0 !== w);
          for (G = 1 << (D - 1); C & G; ) G >>= 1;
          0 !== G ? ((C &= G - 1), (C += G)) : (C = 0);
          k++;
          if (0 === --H[D]) {
            if (D === v) break;
            D = b[a + g[k]];
          }
          if (D > K && (C & R) !== Q) {
            0 === L && (L = K);
            r += p;
            f = D - L;
            for (G = 1 << f; f + L < v; ) {
              G -= H[f + L];
              if (0 >= G) break;
              f++;
              G <<= 1;
            }
            O += 1 << f;
            if ((1 === q && 852 < O) || (2 === q && 592 < O)) return 1;
            Q = C & R;
            d[Q] = (K << 24) | (f << 16) | (r - h) | 0;
          }
        }
        0 !== C && (d[r + C] = ((D - L) << 24) | 4194304);
        l.S = K;
        return 0;
      };
    },
    function (B, t, y) {
      function n(q, b) {
        if (65534 > b && ((q.subarray && u) || (!q.subarray && z)))
          return String.fromCharCode.apply(null, m.shrinkBuf(q, b));
        for (var a = '', f = 0; f < b; f++) a += String.fromCharCode(q[f]);
        return a;
      }
      var m = y(3),
        z = !0,
        u = !0;
      try {
        new Uint8Array(1);
      } catch (q) {
        u = !1;
      }
      var E = new m.Buf8(256);
      for (B = 0; 256 > B; B++)
        E[B] =
          252 <= B
            ? 6
            : 248 <= B
              ? 5
              : 240 <= B
                ? 4
                : 224 <= B
                  ? 3
                  : 192 <= B
                    ? 2
                    : 1;
      E[254] = E[254] = 1;
      t.string2buf = function (q) {
        var b,
          a,
          f = q.length,
          d = 0;
        for (b = 0; b < f; b++) {
          var h = q.charCodeAt(b);
          if (55296 === (h & 64512) && b + 1 < f) {
            var g = q.charCodeAt(b + 1);
            56320 === (g & 64512) &&
              ((h = 65536 + ((h - 55296) << 10) + (g - 56320)), b++);
          }
          d += 128 > h ? 1 : 2048 > h ? 2 : 65536 > h ? 3 : 4;
        }
        var l = new m.Buf8(d);
        for (b = a = 0; a < d; b++)
          (h = q.charCodeAt(b)),
            55296 === (h & 64512) &&
              b + 1 < f &&
              ((g = q.charCodeAt(b + 1)),
              56320 === (g & 64512) &&
                ((h = 65536 + ((h - 55296) << 10) + (g - 56320)), b++)),
            128 > h
              ? (l[a++] = h)
              : (2048 > h
                  ? (l[a++] = 192 | (h >>> 6))
                  : (65536 > h
                      ? (l[a++] = 224 | (h >>> 12))
                      : ((l[a++] = 240 | (h >>> 18)),
                        (l[a++] = 128 | ((h >>> 12) & 63))),
                    (l[a++] = 128 | ((h >>> 6) & 63))),
                (l[a++] = 128 | (h & 63)));
        return l;
      };
      t.tf = function (q) {
        return n(q, q.length);
      };
      t.binstring2buf = function (q) {
        for (var b = new m.Buf8(q.length), a = 0, f = b.length; a < f; a++)
          b[a] = q.charCodeAt(a);
        return b;
      };
      t.buf2string = function (q, b) {
        var a,
          f = b || q.length,
          d = Array(2 * f);
        for (b = a = 0; b < f; ) {
          var h = q[b++];
          if (128 > h) d[a++] = h;
          else {
            var g = E[h];
            if (4 < g) (d[a++] = 65533), (b += g - 1);
            else {
              for (h &= 2 === g ? 31 : 3 === g ? 15 : 7; 1 < g && b < f; )
                (h = (h << 6) | (q[b++] & 63)), g--;
              1 < g
                ? (d[a++] = 65533)
                : 65536 > h
                  ? (d[a++] = h)
                  : ((h -= 65536),
                    (d[a++] = 55296 | ((h >> 10) & 1023)),
                    (d[a++] = 56320 | (h & 1023)));
            }
          }
        }
        return n(d, a);
      };
      t.utf8border = function (q, b) {
        var a;
        b = b || q.length;
        b > q.length && (b = q.length);
        for (a = b - 1; 0 <= a && 128 === (q[a] & 192); ) a--;
        return 0 > a || 0 === a ? b : a + E[q[a]] > b ? a : b;
      };
    },
    function (B) {
      B.exports = {
        Z_NO_FLUSH: 0,
        Ne: 1,
        Z_SYNC_FLUSH: 2,
        Ke: 3,
        Z_FINISH: 4,
        Ce: 5,
        Re: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        He: -1,
        Pe: -2,
        De: -3,
        Z_BUF_ERROR: -5,
        Me: 0,
        Ae: 1,
        ze: 9,
        Ee: -1,
        Ie: 1,
        Le: 2,
        Oe: 3,
        Je: 4,
        Fe: 0,
        Be: 0,
        Qe: 1,
        Se: 2,
        Ge: 8,
      };
    },
    function (B) {
      B.exports = {
        2: 'need dictionary',
        1: 'stream end',
        0: '',
        '-1': 'file error',
        '-2': 'stream error',
        '-3': 'data error',
        '-4': 'insufficient memory',
        '-5': 'buffer error',
        '-6': 'incompatible version',
      };
    },
    function (B) {
      B.exports = function () {
        this.input = null;
        this.nc = this.avail_in = this.next_in = 0;
        this.output = null;
        this.vb = this.avail_out = this.next_out = 0;
        this.msg = '';
        this.state = null;
        this.ie = 2;
        this.Ka = 0;
      };
    },
    function (B) {
      B.exports = function () {
        this.te = this.ye = this.time = this.text = 0;
        this.V = null;
        this.ic = 0;
        this.fc = this.name = '';
        this.ne = 0;
        this.done = !1;
      };
    },
  ]);
}).call(this || window);
