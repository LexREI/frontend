(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    1372: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ReactCSS =
          t.loop =
          t.handleActive =
          t.handleHover =
          t.hover =
            void 0);
      var n = c(r(1617)),
        a = c(r(1624)),
        o = c(r(1644)),
        i = c(r(1645)),
        l = c(r(1646)),
        s = c(r(1647));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.hover = i.default),
        (t.handleHover = i.default),
        (t.handleActive = l.default),
        (t.loop = s.default);
      var p = (t.ReactCSS = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          r[i - 1] = arguments[i];
        var l = (0, n.default)(r),
          s = (0, a.default)(e, l);
        return (0, o.default)(s);
      });
      t.default = p;
    },
    1396: function (e, t, r) {
      var n = r(547),
        a = r(552);
      e.exports = function (e, t, r, o) {
        var i = !r;
        r || (r = {});
        for (var l = -1, s = t.length; ++l < s; ) {
          var c = t[l],
            p = o ? o(r[c], e[c], c, r, e) : void 0;
          void 0 === p && (p = e[c]), i ? a(r, c, p) : n(r, c, p);
        }
        return r;
      };
    },
    1429: function (e, t, r) {
      var n = r(1618),
        a = r(1621);
      e.exports = function (e, t) {
        return e && n(e, a(t));
      };
    },
    1430: function (e, t, r) {
      var n = r(1407)(Object.keys, Object);
      e.exports = n;
    },
    1431: function (e, t, r) {
      'use strict';
      var n = r(1650),
        a = 'object' == typeof self && self && self.Object === Object && self,
        o = n.a || a || Function('return this')();
      t.a = o;
    },
    1466: function (e, t, r) {
      var n = r(1407)(Object.getPrototypeOf, Object);
      e.exports = n;
    },
    1467: function (e, t) {
      e.exports = function (e) {
        var t = [];
        if (null != e) for (var r in Object(e)) t.push(r);
        return t;
      };
    },
    1617: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.flattenNames = void 0);
      var n = l(r(337)),
        a = l(r(1429)),
        o = l(r(1622)),
        i = l(r(1623));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = (t.flattenNames = function e() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          r = [];
        return (
          (0, i.default)(t, function (t) {
            Array.isArray(t)
              ? e(t).map(function (e) {
                  return r.push(e);
                })
              : (0, o.default)(t)
                ? (0, a.default)(t, function (e, t) {
                    !0 === e && r.push(t), r.push(t + '-' + e);
                  })
                : (0, n.default)(t) && r.push(t);
          }),
          r
        );
      });
      t.default = s;
    },
    1618: function (e, t, r) {
      var n = r(1619),
        a = r(1430);
      e.exports = function (e, t) {
        return e && n(e, t, a);
      };
    },
    1619: function (e, t, r) {
      var n = r(1620)();
      e.exports = n;
    },
    1620: function (e, t) {
      e.exports = function (e) {
        return function (t, r, n) {
          for (var a = -1, o = Object(t), i = n(t), l = i.length; l--; ) {
            var s = i[e ? l : ++a];
            if (!1 === r(o[s], s, o)) break;
          }
          return t;
        };
      };
    },
    1621: function (e, t) {
      e.exports = function (e) {
        return e;
      };
    },
    1622: function (e, t, r) {
      var n = r(556),
        a = r(1466),
        o = r(549),
        i = Function.prototype,
        l = Object.prototype,
        s = i.toString,
        c = l.hasOwnProperty,
        p = s.call(Object);
      e.exports = function (e) {
        if (!o(e) || '[object Object]' != n(e)) return !1;
        var t = a(e);
        if (null === t) return !0;
        var r = c.call(t, 'constructor') && t.constructor;
        return 'function' == typeof r && r instanceof r && s.call(r) == p;
      };
    },
    1623: function (e, t) {
      e.exports = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, a = Array(n); ++r < n; )
          a[r] = t(e[r], r, e);
        return a;
      };
    },
    1624: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.mergeClasses = void 0);
      var n = i(r(1429)),
        a = i(r(1625)),
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = (t.mergeClasses = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = (e.default && (0, a.default)(e.default)) || {};
        return (
          t.map(function (t) {
            var a = e[t];
            return (
              a &&
                (0, n.default)(a, function (e, t) {
                  r[t] || (r[t] = {}), (r[t] = o({}, r[t], a[t]));
                }),
              t
            );
          }),
          r
        );
      });
      t.default = l;
    },
    1625: function (e, t, r) {
      var n = r(1626);
      e.exports = function (e) {
        return n(e, 5);
      };
    },
    1626: function (e, t, r) {
      var n = r(1457),
        a = r(1627),
        o = r(547),
        i = r(1628),
        l = r(1629),
        s = r(1630),
        c = r(1632),
        p = r(1633),
        u = r(1635),
        f = r(1458),
        h = r(554),
        d = r(1459),
        b = r(1637),
        g = r(1638),
        v = r(1639),
        x = r(427),
        y = r(1460),
        m = r(1642),
        w = r(372),
        E = r(1643),
        C = r(1430),
        k = r(1467),
        S = {};
      (S['[object Arguments]'] =
        S['[object Array]'] =
        S['[object ArrayBuffer]'] =
        S['[object DataView]'] =
        S['[object Boolean]'] =
        S['[object Date]'] =
        S['[object Float32Array]'] =
        S['[object Float64Array]'] =
        S['[object Int8Array]'] =
        S['[object Int16Array]'] =
        S['[object Int32Array]'] =
        S['[object Map]'] =
        S['[object Number]'] =
        S['[object Object]'] =
        S['[object RegExp]'] =
        S['[object Set]'] =
        S['[object String]'] =
        S['[object Symbol]'] =
        S['[object Uint8Array]'] =
        S['[object Uint8ClampedArray]'] =
        S['[object Uint16Array]'] =
        S['[object Uint32Array]'] =
          !0),
        (S['[object Error]'] =
          S['[object Function]'] =
          S['[object WeakMap]'] =
            !1),
        (e.exports = function e(t, r, _, O, j, R) {
          var F,
            A = 1 & r,
            B = 2 & r,
            M = 4 & r;
          if ((_ && (F = j ? _(t, O, j, R) : _(t)), void 0 !== F)) return F;
          if (!w(t)) return t;
          var T = x(t);
          if (T) {
            if (((F = b(t)), !A)) return c(t, F);
          } else {
            var H = d(t),
              P = '[object Function]' == H || '[object GeneratorFunction]' == H;
            if (y(t)) return s(t, A);
            if (
              '[object Object]' == H ||
              '[object Arguments]' == H ||
              (P && !j)
            ) {
              if (((F = B || P ? {} : v(t)), !A))
                return B ? u(t, l(F, t)) : p(t, i(F, t));
            } else {
              if (!S[H]) return j ? t : {};
              F = g(t, H, A);
            }
          }
          R || (R = new n());
          var L = R.get(t);
          if (L) return L;
          R.set(t, F),
            E(t)
              ? t.forEach(function (n) {
                  F.add(e(n, r, _, n, t, R));
                })
              : m(t) &&
                t.forEach(function (n, a) {
                  F.set(a, e(n, r, _, a, t, R));
                });
          var D = T ? void 0 : (M ? (B ? h : f) : B ? k : C)(t);
          return (
            a(D || t, function (n, a) {
              D && (n = t[(a = n)]), o(F, a, e(n, r, _, a, t, R));
            }),
            F
          );
        });
    },
    1627: function (e, t) {
      e.exports = function (e, t) {
        for (
          var r = -1, n = null == e ? 0 : e.length;
          ++r < n && !1 !== t(e[r], r, e);

        );
        return e;
      };
    },
    1628: function (e, t, r) {
      var n = r(1396),
        a = r(1430);
      e.exports = function (e, t) {
        return e && n(t, a(t), e);
      };
    },
    1629: function (e, t, r) {
      var n = r(1396),
        a = r(1467);
      e.exports = function (e, t) {
        return e && n(t, a(t), e);
      };
    },
    1630: function (e, t, r) {
      (function (e) {
        var n = r(555),
          a = t && !t.nodeType && t,
          o = a && 'object' == typeof e && e && !e.nodeType && e,
          i = o && o.exports === a ? n.Buffer : void 0,
          l = i ? i.allocUnsafe : void 0;
        e.exports = function (e, t) {
          if (t) return e.slice();
          var r = e.length,
            n = l ? l(r) : new e.constructor(r);
          return e.copy(n), n;
        };
      }).call(this, r(1631)(e));
    },
    1631: function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    1632: function (e, t) {
      e.exports = function (e, t) {
        var r = -1,
          n = e.length;
        for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
        return t;
      };
    },
    1633: function (e, t, r) {
      var n = r(1396),
        a = r(1634);
      e.exports = function (e, t) {
        return n(e, a(e), t);
      };
    },
    1634: function (e, t) {
      e.exports = function () {
        return [];
      };
    },
    1635: function (e, t, r) {
      var n = r(1396),
        a = r(1636);
      e.exports = function (e, t) {
        return n(e, a(e), t);
      };
    },
    1636: function (e, t) {
      e.exports = function () {
        return [];
      };
    },
    1637: function (e, t) {
      var r = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = e.length,
          n = new e.constructor(t);
        return (
          t &&
            'string' == typeof e[0] &&
            r.call(e, 'index') &&
            ((n.index = e.index), (n.input = e.input)),
          n
        );
      };
    },
    1638: function (e, t) {
      e.exports = function (e) {
        return e;
      };
    },
    1639: function (e, t, r) {
      var n = r(1640),
        a = r(1466),
        o = r(1641);
      e.exports = function (e) {
        return 'function' != typeof e.constructor || o(e) ? {} : n(a(e));
      };
    },
    1640: function (e, t, r) {
      var n = r(372),
        a = Object.create,
        o = (function () {
          function e() {}
          return function (t) {
            if (!n(t)) return {};
            if (a) return a(t);
            e.prototype = t;
            var r = new e();
            return (e.prototype = void 0), r;
          };
        })();
      e.exports = o;
    },
    1641: function (e, t) {
      e.exports = function () {
        return !1;
      };
    },
    1642: function (e, t) {
      e.exports = function () {
        return !1;
      };
    },
    1643: function (e, t) {
      e.exports = function () {
        return !1;
      };
    },
    1644: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.autoprefix = void 0);
      var n,
        a = r(1429),
        o = (n = a) && n.__esModule ? n : { default: n },
        i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
      var l = {
          borderRadius: function (e) {
            return {
              msBorderRadius: e,
              MozBorderRadius: e,
              OBorderRadius: e,
              WebkitBorderRadius: e,
              borderRadius: e,
            };
          },
          boxShadow: function (e) {
            return {
              msBoxShadow: e,
              MozBoxShadow: e,
              OBoxShadow: e,
              WebkitBoxShadow: e,
              boxShadow: e,
            };
          },
          userSelect: function (e) {
            return {
              WebkitTouchCallout: e,
              KhtmlUserSelect: e,
              MozUserSelect: e,
              msUserSelect: e,
              WebkitUserSelect: e,
              userSelect: e,
            };
          },
          flex: function (e) {
            return {
              WebkitBoxFlex: e,
              MozBoxFlex: e,
              WebkitFlex: e,
              msFlex: e,
              flex: e,
            };
          },
          flexBasis: function (e) {
            return { WebkitFlexBasis: e, flexBasis: e };
          },
          justifyContent: function (e) {
            return { WebkitJustifyContent: e, justifyContent: e };
          },
          transition: function (e) {
            return {
              msTransition: e,
              MozTransition: e,
              OTransition: e,
              WebkitTransition: e,
              transition: e,
            };
          },
          transform: function (e) {
            return {
              msTransform: e,
              MozTransform: e,
              OTransform: e,
              WebkitTransform: e,
              transform: e,
            };
          },
          absolute: function (e) {
            var t = e && e.split(' ');
            return {
              position: 'absolute',
              top: t && t[0],
              right: t && t[1],
              bottom: t && t[2],
              left: t && t[3],
            };
          },
          extend: function (e, t) {
            var r = t[e];
            return r || { extend: e };
          },
        },
        s = (t.autoprefix = function (e) {
          var t = {};
          return (
            (0, o.default)(e, function (e, r) {
              var n = {};
              (0, o.default)(e, function (e, t) {
                var r = l[t];
                r ? (n = i({}, n, r(e))) : (n[t] = e);
              }),
                (t[r] = n);
            }),
            t
          );
        });
      t.default = s;
    },
    1645: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.hover = void 0);
      var n,
        a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = r(0),
        i = (n = o) && n.__esModule ? n : { default: n };
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function c(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var p = (t.hover = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : 'span';
        return (function (r) {
          function n() {
            var r, o, c;
            l(this, n);
            for (var p = arguments.length, u = Array(p), f = 0; f < p; f++)
              u[f] = arguments[f];
            return (
              (o = c =
                s(
                  this,
                  (r = n.__proto__ || Object.getPrototypeOf(n)).call.apply(
                    r,
                    [this].concat(u)
                  )
                )),
              (c.state = { hover: !1 }),
              (c.handleMouseOver = function () {
                return c.setState({ hover: !0 });
              }),
              (c.handleMouseOut = function () {
                return c.setState({ hover: !1 });
              }),
              (c.render = function () {
                return i.default.createElement(
                  t,
                  {
                    onMouseOver: c.handleMouseOver,
                    onMouseOut: c.handleMouseOut,
                  },
                  i.default.createElement(e, a({}, c.props, c.state))
                );
              }),
              s(c, o)
            );
          }
          return c(n, r), n;
        })(i.default.Component);
      });
      t.default = p;
    },
    1646: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.active = void 0);
      var n,
        a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = r(0),
        i = (n = o) && n.__esModule ? n : { default: n };
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function c(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var p = (t.active = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : 'span';
        return (function (r) {
          function n() {
            var r, o, c;
            l(this, n);
            for (var p = arguments.length, u = Array(p), f = 0; f < p; f++)
              u[f] = arguments[f];
            return (
              (o = c =
                s(
                  this,
                  (r = n.__proto__ || Object.getPrototypeOf(n)).call.apply(
                    r,
                    [this].concat(u)
                  )
                )),
              (c.state = { active: !1 }),
              (c.handleMouseDown = function () {
                return c.setState({ active: !0 });
              }),
              (c.handleMouseUp = function () {
                return c.setState({ active: !1 });
              }),
              (c.render = function () {
                return i.default.createElement(
                  t,
                  {
                    onMouseDown: c.handleMouseDown,
                    onMouseUp: c.handleMouseUp,
                  },
                  i.default.createElement(e, a({}, c.props, c.state))
                );
              }),
              s(c, o)
            );
          }
          return c(n, r), n;
        })(i.default.Component);
      });
      t.default = p;
    },
    1647: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.default = function (e, t) {
        var r = {},
          n = function (e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            r[e] = t;
          };
        return (
          0 === e && n('first-child'),
          e === t - 1 && n('last-child'),
          (0 === e || e % 2 == 0) && n('even'),
          1 === Math.abs(e % 2) && n('odd'),
          n('nth-child', e),
          r
        );
      };
    },
    1648: function (e, t, r) {
      'use strict';
      (function (e) {
        var n = r(1431),
          a =
            'object' == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          o = a && 'object' == typeof e && e && !e.nodeType && e,
          i = o && o.exports === a ? n.a.Buffer : void 0,
          l = i ? i.allocUnsafe : void 0;
        t.a = function (e, t) {
          if (t) return e.slice();
          var r = e.length,
            n = l ? l(r) : new e.constructor(r);
          return e.copy(n), n;
        };
      }).call(this, r(1649)(e));
    },
    1649: function (e, t) {
      e.exports = function (e) {
        if (!e.webpackPolyfill) {
          var t = Object.create(e);
          t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            Object.defineProperty(t, 'exports', { enumerable: !0 }),
            (t.webpackPolyfill = 1);
        }
        return t;
      };
    },
    1650: function (e, t, r) {
      'use strict';
      (function (e) {
        var r = 'object' == typeof e && e && e.Object === Object && e;
        t.a = r;
      }).call(this, r(122));
    },
    1651: function (e, t, r) {
      var n;
      !(function (a) {
        var o = /^\s+/,
          i = /\s+$/,
          l = 0,
          s = a.round,
          c = a.min,
          p = a.max,
          u = a.random;
        function f(e, t) {
          if (((t = t || {}), (e = e || '') instanceof f)) return e;
          if (!(this instanceof f)) return new f(e, t);
          var r = (function (e) {
            var t = { r: 0, g: 0, b: 0 },
              r = 1,
              n = null,
              l = null,
              s = null,
              u = !1,
              f = !1;
            'string' == typeof e &&
              (e = (function (e) {
                e = e.replace(o, '').replace(i, '').toLowerCase();
                var t,
                  r = !1;
                if (F[e]) (e = F[e]), (r = !0);
                else if ('transparent' == e)
                  return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
                if ((t = W.rgb.exec(e))) return { r: t[1], g: t[2], b: t[3] };
                if ((t = W.rgba.exec(e)))
                  return { r: t[1], g: t[2], b: t[3], a: t[4] };
                if ((t = W.hsl.exec(e))) return { h: t[1], s: t[2], l: t[3] };
                if ((t = W.hsla.exec(e)))
                  return { h: t[1], s: t[2], l: t[3], a: t[4] };
                if ((t = W.hsv.exec(e))) return { h: t[1], s: t[2], v: t[3] };
                if ((t = W.hsva.exec(e)))
                  return { h: t[1], s: t[2], v: t[3], a: t[4] };
                if ((t = W.hex8.exec(e)))
                  return {
                    r: H(t[1]),
                    g: H(t[2]),
                    b: H(t[3]),
                    a: z(t[4]),
                    format: r ? 'name' : 'hex8',
                  };
                if ((t = W.hex6.exec(e)))
                  return {
                    r: H(t[1]),
                    g: H(t[2]),
                    b: H(t[3]),
                    format: r ? 'name' : 'hex',
                  };
                if ((t = W.hex4.exec(e)))
                  return {
                    r: H(t[1] + '' + t[1]),
                    g: H(t[2] + '' + t[2]),
                    b: H(t[3] + '' + t[3]),
                    a: z(t[4] + '' + t[4]),
                    format: r ? 'name' : 'hex8',
                  };
                if ((t = W.hex3.exec(e)))
                  return {
                    r: H(t[1] + '' + t[1]),
                    g: H(t[2] + '' + t[2]),
                    b: H(t[3] + '' + t[3]),
                    format: r ? 'name' : 'hex',
                  };
                return !1;
              })(e));
            'object' == typeof e &&
              (X(e.r) && X(e.g) && X(e.b)
                ? ((h = e.r),
                  (d = e.g),
                  (b = e.b),
                  (t = {
                    r: 255 * M(h, 255),
                    g: 255 * M(d, 255),
                    b: 255 * M(b, 255),
                  }),
                  (u = !0),
                  (f = '%' === String(e.r).substr(-1) ? 'prgb' : 'rgb'))
                : X(e.h) && X(e.s) && X(e.v)
                  ? ((n = L(e.s)),
                    (l = L(e.v)),
                    (t = (function (e, t, r) {
                      (e = 6 * M(e, 360)), (t = M(t, 100)), (r = M(r, 100));
                      var n = a.floor(e),
                        o = e - n,
                        i = r * (1 - t),
                        l = r * (1 - o * t),
                        s = r * (1 - (1 - o) * t),
                        c = n % 6;
                      return {
                        r: 255 * [r, l, i, i, s, r][c],
                        g: 255 * [s, r, r, l, i, i][c],
                        b: 255 * [i, i, s, r, r, l][c],
                      };
                    })(e.h, n, l)),
                    (u = !0),
                    (f = 'hsv'))
                  : X(e.h) &&
                    X(e.s) &&
                    X(e.l) &&
                    ((n = L(e.s)),
                    (s = L(e.l)),
                    (t = (function (e, t, r) {
                      var n, a, o;
                      function i(e, t, r) {
                        return (
                          r < 0 && (r += 1),
                          r > 1 && (r -= 1),
                          r < 1 / 6
                            ? e + 6 * (t - e) * r
                            : r < 0.5
                              ? t
                              : r < 2 / 3
                                ? e + (t - e) * (2 / 3 - r) * 6
                                : e
                        );
                      }
                      if (
                        ((e = M(e, 360)),
                        (t = M(t, 100)),
                        (r = M(r, 100)),
                        0 === t)
                      )
                        n = a = o = r;
                      else {
                        var l = r < 0.5 ? r * (1 + t) : r + t - r * t,
                          s = 2 * r - l;
                        (n = i(s, l, e + 1 / 3)),
                          (a = i(s, l, e)),
                          (o = i(s, l, e - 1 / 3));
                      }
                      return { r: 255 * n, g: 255 * a, b: 255 * o };
                    })(e.h, n, s)),
                    (u = !0),
                    (f = 'hsl')),
              e.hasOwnProperty('a') && (r = e.a));
            var h, d, b;
            return (
              (r = B(r)),
              {
                ok: u,
                format: e.format || f,
                r: c(255, p(t.r, 0)),
                g: c(255, p(t.g, 0)),
                b: c(255, p(t.b, 0)),
                a: r,
              }
            );
          })(e);
          (this._originalInput = e),
            (this._r = r.r),
            (this._g = r.g),
            (this._b = r.b),
            (this._a = r.a),
            (this._roundA = s(100 * this._a) / 100),
            (this._format = t.format || r.format),
            (this._gradientType = t.gradientType),
            this._r < 1 && (this._r = s(this._r)),
            this._g < 1 && (this._g = s(this._g)),
            this._b < 1 && (this._b = s(this._b)),
            (this._ok = r.ok),
            (this._tc_id = l++);
        }
        function h(e, t, r) {
          (e = M(e, 255)), (t = M(t, 255)), (r = M(r, 255));
          var n,
            a,
            o = p(e, t, r),
            i = c(e, t, r),
            l = (o + i) / 2;
          if (o == i) n = a = 0;
          else {
            var s = o - i;
            switch (((a = l > 0.5 ? s / (2 - o - i) : s / (o + i)), o)) {
              case e:
                n = (t - r) / s + (t < r ? 6 : 0);
                break;
              case t:
                n = (r - e) / s + 2;
                break;
              case r:
                n = (e - t) / s + 4;
            }
            n /= 6;
          }
          return { h: n, s: a, l: l };
        }
        function d(e, t, r) {
          (e = M(e, 255)), (t = M(t, 255)), (r = M(r, 255));
          var n,
            a,
            o = p(e, t, r),
            i = c(e, t, r),
            l = o,
            s = o - i;
          if (((a = 0 === o ? 0 : s / o), o == i)) n = 0;
          else {
            switch (o) {
              case e:
                n = (t - r) / s + (t < r ? 6 : 0);
                break;
              case t:
                n = (r - e) / s + 2;
                break;
              case r:
                n = (e - t) / s + 4;
            }
            n /= 6;
          }
          return { h: n, s: a, v: l };
        }
        function b(e, t, r, n) {
          var a = [
            P(s(e).toString(16)),
            P(s(t).toString(16)),
            P(s(r).toString(16)),
          ];
          return n &&
            a[0].charAt(0) == a[0].charAt(1) &&
            a[1].charAt(0) == a[1].charAt(1) &&
            a[2].charAt(0) == a[2].charAt(1)
            ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0)
            : a.join('');
        }
        function g(e, t, r, n) {
          return [
            P(D(n)),
            P(s(e).toString(16)),
            P(s(t).toString(16)),
            P(s(r).toString(16)),
          ].join('');
        }
        function v(e, t) {
          t = 0 === t ? 0 : t || 10;
          var r = f(e).toHsl();
          return (r.s -= t / 100), (r.s = T(r.s)), f(r);
        }
        function x(e, t) {
          t = 0 === t ? 0 : t || 10;
          var r = f(e).toHsl();
          return (r.s += t / 100), (r.s = T(r.s)), f(r);
        }
        function y(e) {
          return f(e).desaturate(100);
        }
        function m(e, t) {
          t = 0 === t ? 0 : t || 10;
          var r = f(e).toHsl();
          return (r.l += t / 100), (r.l = T(r.l)), f(r);
        }
        function w(e, t) {
          t = 0 === t ? 0 : t || 10;
          var r = f(e).toRgb();
          return (
            (r.r = p(0, c(255, r.r - s((-t / 100) * 255)))),
            (r.g = p(0, c(255, r.g - s((-t / 100) * 255)))),
            (r.b = p(0, c(255, r.b - s((-t / 100) * 255)))),
            f(r)
          );
        }
        function E(e, t) {
          t = 0 === t ? 0 : t || 10;
          var r = f(e).toHsl();
          return (r.l -= t / 100), (r.l = T(r.l)), f(r);
        }
        function C(e, t) {
          var r = f(e).toHsl(),
            n = (r.h + t) % 360;
          return (r.h = n < 0 ? 360 + n : n), f(r);
        }
        function k(e) {
          var t = f(e).toHsl();
          return (t.h = (t.h + 180) % 360), f(t);
        }
        function S(e) {
          var t = f(e).toHsl(),
            r = t.h;
          return [
            f(e),
            f({ h: (r + 120) % 360, s: t.s, l: t.l }),
            f({ h: (r + 240) % 360, s: t.s, l: t.l }),
          ];
        }
        function _(e) {
          var t = f(e).toHsl(),
            r = t.h;
          return [
            f(e),
            f({ h: (r + 90) % 360, s: t.s, l: t.l }),
            f({ h: (r + 180) % 360, s: t.s, l: t.l }),
            f({ h: (r + 270) % 360, s: t.s, l: t.l }),
          ];
        }
        function O(e) {
          var t = f(e).toHsl(),
            r = t.h;
          return [
            f(e),
            f({ h: (r + 72) % 360, s: t.s, l: t.l }),
            f({ h: (r + 216) % 360, s: t.s, l: t.l }),
          ];
        }
        function j(e, t, r) {
          (t = t || 6), (r = r || 30);
          var n = f(e).toHsl(),
            a = 360 / r,
            o = [f(e)];
          for (n.h = (n.h - ((a * t) >> 1) + 720) % 360; --t; )
            (n.h = (n.h + a) % 360), o.push(f(n));
          return o;
        }
        function R(e, t) {
          t = t || 6;
          for (
            var r = f(e).toHsv(), n = r.h, a = r.s, o = r.v, i = [], l = 1 / t;
            t--;

          )
            i.push(f({ h: n, s: a, v: o })), (o = (o + l) % 1);
          return i;
        }
        (f.prototype = {
          isDark: function () {
            return this.getBrightness() < 128;
          },
          isLight: function () {
            return !this.isDark();
          },
          isValid: function () {
            return this._ok;
          },
          getOriginalInput: function () {
            return this._originalInput;
          },
          getFormat: function () {
            return this._format;
          },
          getAlpha: function () {
            return this._a;
          },
          getBrightness: function () {
            var e = this.toRgb();
            return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
          },
          getLuminance: function () {
            var e,
              t,
              r,
              n = this.toRgb();
            return (
              (e = n.r / 255),
              (t = n.g / 255),
              (r = n.b / 255),
              0.2126 *
                (e <= 0.03928 ? e / 12.92 : a.pow((e + 0.055) / 1.055, 2.4)) +
                0.7152 *
                  (t <= 0.03928 ? t / 12.92 : a.pow((t + 0.055) / 1.055, 2.4)) +
                0.0722 *
                  (r <= 0.03928 ? r / 12.92 : a.pow((r + 0.055) / 1.055, 2.4))
            );
          },
          setAlpha: function (e) {
            return (
              (this._a = B(e)), (this._roundA = s(100 * this._a) / 100), this
            );
          },
          toHsv: function () {
            var e = d(this._r, this._g, this._b);
            return { h: 360 * e.h, s: e.s, v: e.v, a: this._a };
          },
          toHsvString: function () {
            var e = d(this._r, this._g, this._b),
              t = s(360 * e.h),
              r = s(100 * e.s),
              n = s(100 * e.v);
            return 1 == this._a
              ? 'hsv(' + t + ', ' + r + '%, ' + n + '%)'
              : 'hsva(' + t + ', ' + r + '%, ' + n + '%, ' + this._roundA + ')';
          },
          toHsl: function () {
            var e = h(this._r, this._g, this._b);
            return { h: 360 * e.h, s: e.s, l: e.l, a: this._a };
          },
          toHslString: function () {
            var e = h(this._r, this._g, this._b),
              t = s(360 * e.h),
              r = s(100 * e.s),
              n = s(100 * e.l);
            return 1 == this._a
              ? 'hsl(' + t + ', ' + r + '%, ' + n + '%)'
              : 'hsla(' + t + ', ' + r + '%, ' + n + '%, ' + this._roundA + ')';
          },
          toHex: function (e) {
            return b(this._r, this._g, this._b, e);
          },
          toHexString: function (e) {
            return '#' + this.toHex(e);
          },
          toHex8: function (e) {
            return (function (e, t, r, n, a) {
              var o = [
                P(s(e).toString(16)),
                P(s(t).toString(16)),
                P(s(r).toString(16)),
                P(D(n)),
              ];
              if (
                a &&
                o[0].charAt(0) == o[0].charAt(1) &&
                o[1].charAt(0) == o[1].charAt(1) &&
                o[2].charAt(0) == o[2].charAt(1) &&
                o[3].charAt(0) == o[3].charAt(1)
              )
                return (
                  o[0].charAt(0) +
                  o[1].charAt(0) +
                  o[2].charAt(0) +
                  o[3].charAt(0)
                );
              return o.join('');
            })(this._r, this._g, this._b, this._a, e);
          },
          toHex8String: function (e) {
            return '#' + this.toHex8(e);
          },
          toRgb: function () {
            return { r: s(this._r), g: s(this._g), b: s(this._b), a: this._a };
          },
          toRgbString: function () {
            return 1 == this._a
              ? 'rgb(' +
                  s(this._r) +
                  ', ' +
                  s(this._g) +
                  ', ' +
                  s(this._b) +
                  ')'
              : 'rgba(' +
                  s(this._r) +
                  ', ' +
                  s(this._g) +
                  ', ' +
                  s(this._b) +
                  ', ' +
                  this._roundA +
                  ')';
          },
          toPercentageRgb: function () {
            return {
              r: s(100 * M(this._r, 255)) + '%',
              g: s(100 * M(this._g, 255)) + '%',
              b: s(100 * M(this._b, 255)) + '%',
              a: this._a,
            };
          },
          toPercentageRgbString: function () {
            return 1 == this._a
              ? 'rgb(' +
                  s(100 * M(this._r, 255)) +
                  '%, ' +
                  s(100 * M(this._g, 255)) +
                  '%, ' +
                  s(100 * M(this._b, 255)) +
                  '%)'
              : 'rgba(' +
                  s(100 * M(this._r, 255)) +
                  '%, ' +
                  s(100 * M(this._g, 255)) +
                  '%, ' +
                  s(100 * M(this._b, 255)) +
                  '%, ' +
                  this._roundA +
                  ')';
          },
          toName: function () {
            return 0 === this._a
              ? 'transparent'
              : !(this._a < 1) && (A[b(this._r, this._g, this._b, !0)] || !1);
          },
          toFilter: function (e) {
            var t = '#' + g(this._r, this._g, this._b, this._a),
              r = t,
              n = this._gradientType ? 'GradientType = 1, ' : '';
            if (e) {
              var a = f(e);
              r = '#' + g(a._r, a._g, a._b, a._a);
            }
            return (
              'progid:DXImageTransform.Microsoft.gradient(' +
              n +
              'startColorstr=' +
              t +
              ',endColorstr=' +
              r +
              ')'
            );
          },
          toString: function (e) {
            var t = !!e;
            e = e || this._format;
            var r = !1,
              n = this._a < 1 && this._a >= 0;
            return t ||
              !n ||
              ('hex' !== e &&
                'hex6' !== e &&
                'hex3' !== e &&
                'hex4' !== e &&
                'hex8' !== e &&
                'name' !== e)
              ? ('rgb' === e && (r = this.toRgbString()),
                'prgb' === e && (r = this.toPercentageRgbString()),
                ('hex' !== e && 'hex6' !== e) || (r = this.toHexString()),
                'hex3' === e && (r = this.toHexString(!0)),
                'hex4' === e && (r = this.toHex8String(!0)),
                'hex8' === e && (r = this.toHex8String()),
                'name' === e && (r = this.toName()),
                'hsl' === e && (r = this.toHslString()),
                'hsv' === e && (r = this.toHsvString()),
                r || this.toHexString())
              : 'name' === e && 0 === this._a
                ? this.toName()
                : this.toRgbString();
          },
          clone: function () {
            return f(this.toString());
          },
          _applyModification: function (e, t) {
            var r = e.apply(null, [this].concat([].slice.call(t)));
            return (
              (this._r = r._r),
              (this._g = r._g),
              (this._b = r._b),
              this.setAlpha(r._a),
              this
            );
          },
          lighten: function () {
            return this._applyModification(m, arguments);
          },
          brighten: function () {
            return this._applyModification(w, arguments);
          },
          darken: function () {
            return this._applyModification(E, arguments);
          },
          desaturate: function () {
            return this._applyModification(v, arguments);
          },
          saturate: function () {
            return this._applyModification(x, arguments);
          },
          greyscale: function () {
            return this._applyModification(y, arguments);
          },
          spin: function () {
            return this._applyModification(C, arguments);
          },
          _applyCombination: function (e, t) {
            return e.apply(null, [this].concat([].slice.call(t)));
          },
          analogous: function () {
            return this._applyCombination(j, arguments);
          },
          complement: function () {
            return this._applyCombination(k, arguments);
          },
          monochromatic: function () {
            return this._applyCombination(R, arguments);
          },
          splitcomplement: function () {
            return this._applyCombination(O, arguments);
          },
          triad: function () {
            return this._applyCombination(S, arguments);
          },
          tetrad: function () {
            return this._applyCombination(_, arguments);
          },
        }),
          (f.fromRatio = function (e, t) {
            if ('object' == typeof e) {
              var r = {};
              for (var n in e)
                e.hasOwnProperty(n) && (r[n] = 'a' === n ? e[n] : L(e[n]));
              e = r;
            }
            return f(e, t);
          }),
          (f.equals = function (e, t) {
            return !(!e || !t) && f(e).toRgbString() == f(t).toRgbString();
          }),
          (f.random = function () {
            return f.fromRatio({ r: u(), g: u(), b: u() });
          }),
          (f.mix = function (e, t, r) {
            r = 0 === r ? 0 : r || 50;
            var n = f(e).toRgb(),
              a = f(t).toRgb(),
              o = r / 100;
            return f({
              r: (a.r - n.r) * o + n.r,
              g: (a.g - n.g) * o + n.g,
              b: (a.b - n.b) * o + n.b,
              a: (a.a - n.a) * o + n.a,
            });
          }),
          (f.readability = function (e, t) {
            var r = f(e),
              n = f(t);
            return (
              (a.max(r.getLuminance(), n.getLuminance()) + 0.05) /
              (a.min(r.getLuminance(), n.getLuminance()) + 0.05)
            );
          }),
          (f.isReadable = function (e, t, r) {
            var n,
              a,
              o = f.readability(e, t);
            switch (
              ((a = !1),
              (n = (function (e) {
                var t, r;
                (t = (
                  (e = e || { level: 'AA', size: 'small' }).level || 'AA'
                ).toUpperCase()),
                  (r = (e.size || 'small').toLowerCase()),
                  'AA' !== t && 'AAA' !== t && (t = 'AA');
                'small' !== r && 'large' !== r && (r = 'small');
                return { level: t, size: r };
              })(r)).level + n.size)
            ) {
              case 'AAsmall':
              case 'AAAlarge':
                a = o >= 4.5;
                break;
              case 'AAlarge':
                a = o >= 3;
                break;
              case 'AAAsmall':
                a = o >= 7;
            }
            return a;
          }),
          (f.mostReadable = function (e, t, r) {
            var n,
              a,
              o,
              i,
              l = null,
              s = 0;
            (a = (r = r || {}).includeFallbackColors),
              (o = r.level),
              (i = r.size);
            for (var c = 0; c < t.length; c++)
              (n = f.readability(e, t[c])) > s && ((s = n), (l = f(t[c])));
            return f.isReadable(e, l, { level: o, size: i }) || !a
              ? l
              : ((r.includeFallbackColors = !1),
                f.mostReadable(e, ['#fff', '#000'], r));
          });
        var F = (f.names = {
            aliceblue: 'f0f8ff',
            antiquewhite: 'faebd7',
            aqua: '0ff',
            aquamarine: '7fffd4',
            azure: 'f0ffff',
            beige: 'f5f5dc',
            bisque: 'ffe4c4',
            black: '000',
            blanchedalmond: 'ffebcd',
            blue: '00f',
            blueviolet: '8a2be2',
            brown: 'a52a2a',
            burlywood: 'deb887',
            burntsienna: 'ea7e5d',
            cadetblue: '5f9ea0',
            chartreuse: '7fff00',
            chocolate: 'd2691e',
            coral: 'ff7f50',
            cornflowerblue: '6495ed',
            cornsilk: 'fff8dc',
            crimson: 'dc143c',
            cyan: '0ff',
            darkblue: '00008b',
            darkcyan: '008b8b',
            darkgoldenrod: 'b8860b',
            darkgray: 'a9a9a9',
            darkgreen: '006400',
            darkgrey: 'a9a9a9',
            darkkhaki: 'bdb76b',
            darkmagenta: '8b008b',
            darkolivegreen: '556b2f',
            darkorange: 'ff8c00',
            darkorchid: '9932cc',
            darkred: '8b0000',
            darksalmon: 'e9967a',
            darkseagreen: '8fbc8f',
            darkslateblue: '483d8b',
            darkslategray: '2f4f4f',
            darkslategrey: '2f4f4f',
            darkturquoise: '00ced1',
            darkviolet: '9400d3',
            deeppink: 'ff1493',
            deepskyblue: '00bfff',
            dimgray: '696969',
            dimgrey: '696969',
            dodgerblue: '1e90ff',
            firebrick: 'b22222',
            floralwhite: 'fffaf0',
            forestgreen: '228b22',
            fuchsia: 'f0f',
            gainsboro: 'dcdcdc',
            ghostwhite: 'f8f8ff',
            gold: 'ffd700',
            goldenrod: 'daa520',
            gray: '808080',
            green: '008000',
            greenyellow: 'adff2f',
            grey: '808080',
            honeydew: 'f0fff0',
            hotpink: 'ff69b4',
            indianred: 'cd5c5c',
            indigo: '4b0082',
            ivory: 'fffff0',
            khaki: 'f0e68c',
            lavender: 'e6e6fa',
            lavenderblush: 'fff0f5',
            lawngreen: '7cfc00',
            lemonchiffon: 'fffacd',
            lightblue: 'add8e6',
            lightcoral: 'f08080',
            lightcyan: 'e0ffff',
            lightgoldenrodyellow: 'fafad2',
            lightgray: 'd3d3d3',
            lightgreen: '90ee90',
            lightgrey: 'd3d3d3',
            lightpink: 'ffb6c1',
            lightsalmon: 'ffa07a',
            lightseagreen: '20b2aa',
            lightskyblue: '87cefa',
            lightslategray: '789',
            lightslategrey: '789',
            lightsteelblue: 'b0c4de',
            lightyellow: 'ffffe0',
            lime: '0f0',
            limegreen: '32cd32',
            linen: 'faf0e6',
            magenta: 'f0f',
            maroon: '800000',
            mediumaquamarine: '66cdaa',
            mediumblue: '0000cd',
            mediumorchid: 'ba55d3',
            mediumpurple: '9370db',
            mediumseagreen: '3cb371',
            mediumslateblue: '7b68ee',
            mediumspringgreen: '00fa9a',
            mediumturquoise: '48d1cc',
            mediumvioletred: 'c71585',
            midnightblue: '191970',
            mintcream: 'f5fffa',
            mistyrose: 'ffe4e1',
            moccasin: 'ffe4b5',
            navajowhite: 'ffdead',
            navy: '000080',
            oldlace: 'fdf5e6',
            olive: '808000',
            olivedrab: '6b8e23',
            orange: 'ffa500',
            orangered: 'ff4500',
            orchid: 'da70d6',
            palegoldenrod: 'eee8aa',
            palegreen: '98fb98',
            paleturquoise: 'afeeee',
            palevioletred: 'db7093',
            papayawhip: 'ffefd5',
            peachpuff: 'ffdab9',
            peru: 'cd853f',
            pink: 'ffc0cb',
            plum: 'dda0dd',
            powderblue: 'b0e0e6',
            purple: '800080',
            rebeccapurple: '663399',
            red: 'f00',
            rosybrown: 'bc8f8f',
            royalblue: '4169e1',
            saddlebrown: '8b4513',
            salmon: 'fa8072',
            sandybrown: 'f4a460',
            seagreen: '2e8b57',
            seashell: 'fff5ee',
            sienna: 'a0522d',
            silver: 'c0c0c0',
            skyblue: '87ceeb',
            slateblue: '6a5acd',
            slategray: '708090',
            slategrey: '708090',
            snow: 'fffafa',
            springgreen: '00ff7f',
            steelblue: '4682b4',
            tan: 'd2b48c',
            teal: '008080',
            thistle: 'd8bfd8',
            tomato: 'ff6347',
            turquoise: '40e0d0',
            violet: 'ee82ee',
            wheat: 'f5deb3',
            white: 'fff',
            whitesmoke: 'f5f5f5',
            yellow: 'ff0',
            yellowgreen: '9acd32',
          }),
          A = (f.hexNames = (function (e) {
            var t = {};
            for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
            return t;
          })(F));
        function B(e) {
          return (
            (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
          );
        }
        function M(e, t) {
          (function (e) {
            return (
              'string' == typeof e &&
              -1 != e.indexOf('.') &&
              1 === parseFloat(e)
            );
          })(e) && (e = '100%');
          var r = (function (e) {
            return 'string' == typeof e && -1 != e.indexOf('%');
          })(e);
          return (
            (e = c(t, p(0, parseFloat(e)))),
            r && (e = parseInt(e * t, 10) / 100),
            a.abs(e - t) < 1e-6 ? 1 : (e % t) / parseFloat(t)
          );
        }
        function T(e) {
          return c(1, p(0, e));
        }
        function H(e) {
          return parseInt(e, 16);
        }
        function P(e) {
          return 1 == e.length ? '0' + e : '' + e;
        }
        function L(e) {
          return e <= 1 && (e = 100 * e + '%'), e;
        }
        function D(e) {
          return a.round(255 * parseFloat(e)).toString(16);
        }
        function z(e) {
          return H(e) / 255;
        }
        var N,
          G,
          U,
          W =
            ((G =
              '[\\s|\\(]+(' +
              (N = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)') +
              ')[,|\\s]+(' +
              N +
              ')[,|\\s]+(' +
              N +
              ')\\s*\\)?'),
            (U =
              '[\\s|\\(]+(' +
              N +
              ')[,|\\s]+(' +
              N +
              ')[,|\\s]+(' +
              N +
              ')[,|\\s]+(' +
              N +
              ')\\s*\\)?'),
            {
              CSS_UNIT: new RegExp(N),
              rgb: new RegExp('rgb' + G),
              rgba: new RegExp('rgba' + U),
              hsl: new RegExp('hsl' + G),
              hsla: new RegExp('hsla' + U),
              hsv: new RegExp('hsv' + G),
              hsva: new RegExp('hsva' + U),
              hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
              hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
              hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
              hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            });
        function X(e) {
          return !!W.CSS_UNIT.exec(e);
        }
        e.exports
          ? (e.exports = f)
          : void 0 ===
              (n = function () {
                return f;
              }.call(t, r, t, e)) || (e.exports = n);
      })(Math);
    },
    1652: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n,
        a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = r(0),
        i = (n = o) && n.__esModule ? n : { default: n };
      t.default = function (e) {
        var t = e.fill,
          r = void 0 === t ? 'currentColor' : t,
          n = e.width,
          o = void 0 === n ? 24 : n,
          l = e.height,
          s = void 0 === l ? 24 : l,
          c = e.style,
          p = void 0 === c ? {} : c,
          u = (function (e, t) {
            var r = {};
            for (var n in e)
              t.indexOf(n) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
            return r;
          })(e, ['fill', 'width', 'height', 'style']);
        return i.default.createElement(
          'svg',
          a(
            {
              viewBox: '0 0 24 24',
              style: a({ fill: r, width: o, height: s }, p),
            },
            u
          ),
          i.default.createElement('path', {
            d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z',
          })
        );
      };
    },
    1653: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n,
        a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = r(0),
        i = (n = o) && n.__esModule ? n : { default: n };
      t.default = function (e) {
        var t = e.fill,
          r = void 0 === t ? 'currentColor' : t,
          n = e.width,
          o = void 0 === n ? 24 : n,
          l = e.height,
          s = void 0 === l ? 24 : l,
          c = e.style,
          p = void 0 === c ? {} : c,
          u = (function (e, t) {
            var r = {};
            for (var n in e)
              t.indexOf(n) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
            return r;
          })(e, ['fill', 'width', 'height', 'style']);
        return i.default.createElement(
          'svg',
          a(
            {
              viewBox: '0 0 24 24',
              style: a({ fill: r, width: o, height: s }, p),
            },
            u
          ),
          i.default.createElement('path', {
            d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
          })
        );
      };
    },
    1706: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return fr;
      });
      var n = r(0),
        a = r.n(n),
        o = r(1372),
        i = r.n(o),
        l = function (e, t, r, n, a) {
          var o = a.clientWidth,
            i = a.clientHeight,
            l = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            s = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            c = l - (a.getBoundingClientRect().left + window.pageXOffset),
            p = s - (a.getBoundingClientRect().top + window.pageYOffset);
          if ('vertical' === r) {
            var u = void 0;
            if (
              ((u = p < 0 ? 0 : p > i ? 1 : Math.round((100 * p) / i) / 100),
              t.a !== u)
            )
              return { h: t.h, s: t.s, l: t.l, a: u, source: 'rgb' };
          } else {
            var f = void 0;
            if (
              n !==
              (f = c < 0 ? 0 : c > o ? 1 : Math.round((100 * c) / o) / 100)
            )
              return { h: t.h, s: t.s, l: t.l, a: f, source: 'rgb' };
          }
          return null;
        },
        s = {},
        c = function (e, t, r, n) {
          var a = e + '-' + t + '-' + r + (n ? '-server' : '');
          if (s[a]) return s[a];
          var o = (function (e, t, r, n) {
            if ('undefined' == typeof document && !n) return null;
            var a = n ? new n() : document.createElement('canvas');
            (a.width = 2 * r), (a.height = 2 * r);
            var o = a.getContext('2d');
            return o
              ? ((o.fillStyle = e),
                o.fillRect(0, 0, a.width, a.height),
                (o.fillStyle = t),
                o.fillRect(0, 0, r, r),
                o.translate(r, r),
                o.fillRect(0, 0, r, r),
                a.toDataURL())
              : null;
          })(e, t, r, n);
          return (s[a] = o), o;
        },
        p =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        u = function (e) {
          var t = e.white,
            r = e.grey,
            o = e.size,
            l = e.renderers,
            s = e.borderRadius,
            u = e.boxShadow,
            f = e.children,
            h = i()({
              default: {
                grid: {
                  borderRadius: s,
                  boxShadow: u,
                  absolute: '0px 0px 0px 0px',
                  background: 'url(' + c(t, r, o, l.canvas) + ') center left',
                },
              },
            });
          return Object(n.isValidElement)(f)
            ? a.a.cloneElement(
                f,
                p({}, f.props, { style: p({}, f.props.style, h.grid) })
              )
            : a.a.createElement('div', { style: h.grid });
        };
      u.defaultProps = {
        size: 8,
        white: 'transparent',
        grey: 'rgba(0,0,0,.08)',
        renderers: {},
      };
      var f = u,
        h =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        d = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })();
      function b(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function g(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      var v = (function (e) {
          function t() {
            var e, r, n;
            b(this, t);
            for (var a = arguments.length, o = Array(a), i = 0; i < a; i++)
              o[i] = arguments[i];
            return (
              (r = n =
                g(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(o)
                  )
                )),
              (n.handleChange = function (e) {
                var t = l(
                  e,
                  n.props.hsl,
                  n.props.direction,
                  n.props.a,
                  n.container
                );
                t &&
                  'function' == typeof n.props.onChange &&
                  n.props.onChange(t, e);
              }),
              (n.handleMouseDown = function (e) {
                n.handleChange(e),
                  window.addEventListener('mousemove', n.handleChange),
                  window.addEventListener('mouseup', n.handleMouseUp);
              }),
              (n.handleMouseUp = function () {
                n.unbindEventListeners();
              }),
              (n.unbindEventListeners = function () {
                window.removeEventListener('mousemove', n.handleChange),
                  window.removeEventListener('mouseup', n.handleMouseUp);
              }),
              g(n, r)
            );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            d(t, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.unbindEventListeners();
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.rgb,
                    r = i()(
                      {
                        default: {
                          alpha: {
                            absolute: '0px 0px 0px 0px',
                            borderRadius: this.props.radius,
                          },
                          checkboard: {
                            absolute: '0px 0px 0px 0px',
                            overflow: 'hidden',
                            borderRadius: this.props.radius,
                          },
                          gradient: {
                            absolute: '0px 0px 0px 0px',
                            background:
                              'linear-gradient(to right, rgba(' +
                              t.r +
                              ',' +
                              t.g +
                              ',' +
                              t.b +
                              ', 0) 0%,\n           rgba(' +
                              t.r +
                              ',' +
                              t.g +
                              ',' +
                              t.b +
                              ', 1) 100%)',
                            boxShadow: this.props.shadow,
                            borderRadius: this.props.radius,
                          },
                          container: {
                            position: 'relative',
                            height: '100%',
                            margin: '0 3px',
                          },
                          pointer: {
                            position: 'absolute',
                            left: 100 * t.a + '%',
                          },
                          slider: {
                            width: '4px',
                            borderRadius: '1px',
                            height: '8px',
                            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
                            background: '#fff',
                            marginTop: '1px',
                            transform: 'translateX(-2px)',
                          },
                        },
                        vertical: {
                          gradient: {
                            background:
                              'linear-gradient(to bottom, rgba(' +
                              t.r +
                              ',' +
                              t.g +
                              ',' +
                              t.b +
                              ', 0) 0%,\n           rgba(' +
                              t.r +
                              ',' +
                              t.g +
                              ',' +
                              t.b +
                              ', 1) 100%)',
                          },
                          pointer: { left: 0, top: 100 * t.a + '%' },
                        },
                        overwrite: h({}, this.props.style),
                      },
                      {
                        vertical: 'vertical' === this.props.direction,
                        overwrite: !0,
                      }
                    );
                  return a.a.createElement(
                    'div',
                    { style: r.alpha },
                    a.a.createElement(
                      'div',
                      { style: r.checkboard },
                      a.a.createElement(f, { renderers: this.props.renderers })
                    ),
                    a.a.createElement('div', { style: r.gradient }),
                    a.a.createElement(
                      'div',
                      {
                        style: r.container,
                        ref: function (t) {
                          return (e.container = t);
                        },
                        onMouseDown: this.handleMouseDown,
                        onTouchMove: this.handleChange,
                        onTouchStart: this.handleChange,
                      },
                      a.a.createElement(
                        'div',
                        { style: r.pointer },
                        this.props.pointer
                          ? a.a.createElement(this.props.pointer, this.props)
                          : a.a.createElement('div', { style: r.slider })
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.PureComponent || n.Component),
        x = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })();
      var y = [38, 40],
        m = 1,
        w = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t);
            var r = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ('object' != typeof t && 'function' != typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (
              (r.handleBlur = function () {
                r.state.blurValue &&
                  r.setState({ value: r.state.blurValue, blurValue: null });
              }),
              (r.handleChange = function (e) {
                r.setUpdatedValue(e.target.value, e);
              }),
              (r.handleKeyDown = function (e) {
                var t,
                  n = (function (e) {
                    return Number(String(e).replace(/%/g, ''));
                  })(e.target.value);
                if (!isNaN(n) && ((t = e.keyCode), y.indexOf(t) > -1)) {
                  var a = r.getArrowOffset(),
                    o = 38 === e.keyCode ? n + a : n - a;
                  r.setUpdatedValue(o, e);
                }
              }),
              (r.handleDrag = function (e) {
                if (r.props.dragLabel) {
                  var t = Math.round(r.props.value + e.movementX);
                  t >= 0 &&
                    t <= r.props.dragMax &&
                    r.props.onChange &&
                    r.props.onChange(r.getValueObjectWithLabel(t), e);
                }
              }),
              (r.handleMouseDown = function (e) {
                r.props.dragLabel &&
                  (e.preventDefault(),
                  r.handleDrag(e),
                  window.addEventListener('mousemove', r.handleDrag),
                  window.addEventListener('mouseup', r.handleMouseUp));
              }),
              (r.handleMouseUp = function () {
                r.unbindEventListeners();
              }),
              (r.unbindEventListeners = function () {
                window.removeEventListener('mousemove', r.handleDrag),
                  window.removeEventListener('mouseup', r.handleMouseUp);
              }),
              (r.state = {
                value: String(e.value).toUpperCase(),
                blurValue: String(e.value).toUpperCase(),
              }),
              (r.inputId = 'rc-editable-input-' + m++),
              r
            );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            x(t, [
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  this.props.value === this.state.value ||
                    (e.value === this.props.value &&
                      t.value === this.state.value) ||
                    (this.input === document.activeElement
                      ? this.setState({
                          blurValue: String(this.props.value).toUpperCase(),
                        })
                      : this.setState({
                          value: String(this.props.value).toUpperCase(),
                          blurValue:
                            !this.state.blurValue &&
                            String(this.props.value).toUpperCase(),
                        }));
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.unbindEventListeners();
                },
              },
              {
                key: 'getValueObjectWithLabel',
                value: function (e) {
                  return (function (e, t, r) {
                    return (
                      t in e
                        ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (e[t] = r),
                      e
                    );
                  })({}, this.props.label, e);
                },
              },
              {
                key: 'getArrowOffset',
                value: function () {
                  return this.props.arrowOffset || 1;
                },
              },
              {
                key: 'setUpdatedValue',
                value: function (e, t) {
                  var r = this.props.label
                    ? this.getValueObjectWithLabel(e)
                    : e;
                  this.props.onChange && this.props.onChange(r, t),
                    this.setState({ value: e });
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = i()(
                      {
                        default: { wrap: { position: 'relative' } },
                        'user-override': {
                          wrap:
                            this.props.style && this.props.style.wrap
                              ? this.props.style.wrap
                              : {},
                          input:
                            this.props.style && this.props.style.input
                              ? this.props.style.input
                              : {},
                          label:
                            this.props.style && this.props.style.label
                              ? this.props.style.label
                              : {},
                        },
                        'dragLabel-true': { label: { cursor: 'ew-resize' } },
                      },
                      { 'user-override': !0 },
                      this.props
                    );
                  return a.a.createElement(
                    'div',
                    { style: t.wrap },
                    a.a.createElement('input', {
                      id: this.inputId,
                      style: t.input,
                      ref: function (t) {
                        return (e.input = t);
                      },
                      value: this.state.value,
                      onKeyDown: this.handleKeyDown,
                      onChange: this.handleChange,
                      onBlur: this.handleBlur,
                      placeholder: this.props.placeholder,
                      spellCheck: 'false',
                    }),
                    this.props.label && !this.props.hideLabel
                      ? a.a.createElement(
                          'label',
                          {
                            htmlFor: this.inputId,
                            style: t.label,
                            onMouseDown: this.handleMouseDown,
                          },
                          this.props.label
                        )
                      : null
                  );
                },
              },
            ]),
            t
          );
        })(n.PureComponent || n.Component),
        E = function (e, t, r, n) {
          var a = n.clientWidth,
            o = n.clientHeight,
            i = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            l = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            s = i - (n.getBoundingClientRect().left + window.pageXOffset),
            c = l - (n.getBoundingClientRect().top + window.pageYOffset);
          if ('vertical' === t) {
            var p = void 0;
            if (c < 0) p = 359;
            else if (c > o) p = 0;
            else {
              p = (360 * ((-100 * c) / o + 100)) / 100;
            }
            if (r.h !== p)
              return { h: p, s: r.s, l: r.l, a: r.a, source: 'hsl' };
          } else {
            var u = void 0;
            if (s < 0) u = 0;
            else if (s > a) u = 359;
            else {
              u = (360 * ((100 * s) / a)) / 100;
            }
            if (r.h !== u)
              return { h: u, s: r.s, l: r.l, a: r.a, source: 'hsl' };
          }
          return null;
        },
        C = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })();
      function k(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function S(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      var _ = (function (e) {
          function t() {
            var e, r, n;
            k(this, t);
            for (var a = arguments.length, o = Array(a), i = 0; i < a; i++)
              o[i] = arguments[i];
            return (
              (r = n =
                S(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(o)
                  )
                )),
              (n.handleChange = function (e) {
                var t = E(e, n.props.direction, n.props.hsl, n.container);
                t &&
                  'function' == typeof n.props.onChange &&
                  n.props.onChange(t, e);
              }),
              (n.handleMouseDown = function (e) {
                n.handleChange(e),
                  window.addEventListener('mousemove', n.handleChange),
                  window.addEventListener('mouseup', n.handleMouseUp);
              }),
              (n.handleMouseUp = function () {
                n.unbindEventListeners();
              }),
              S(n, r)
            );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            C(t, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.unbindEventListeners();
                },
              },
              {
                key: 'unbindEventListeners',
                value: function () {
                  window.removeEventListener('mousemove', this.handleChange),
                    window.removeEventListener('mouseup', this.handleMouseUp);
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.direction,
                    r = void 0 === t ? 'horizontal' : t,
                    n = i()(
                      {
                        default: {
                          hue: {
                            absolute: '0px 0px 0px 0px',
                            borderRadius: this.props.radius,
                            boxShadow: this.props.shadow,
                          },
                          container: {
                            padding: '0 2px',
                            position: 'relative',
                            height: '100%',
                            borderRadius: this.props.radius,
                          },
                          pointer: {
                            position: 'absolute',
                            left: (100 * this.props.hsl.h) / 360 + '%',
                          },
                          slider: {
                            marginTop: '1px',
                            width: '4px',
                            borderRadius: '1px',
                            height: '8px',
                            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
                            background: '#fff',
                            transform: 'translateX(-2px)',
                          },
                        },
                        vertical: {
                          pointer: {
                            left: '0px',
                            top: (-100 * this.props.hsl.h) / 360 + 100 + '%',
                          },
                        },
                      },
                      { vertical: 'vertical' === r }
                    );
                  return a.a.createElement(
                    'div',
                    { style: n.hue },
                    a.a.createElement(
                      'div',
                      {
                        className: 'hue-' + r,
                        style: n.container,
                        ref: function (t) {
                          return (e.container = t);
                        },
                        onMouseDown: this.handleMouseDown,
                        onTouchMove: this.handleChange,
                        onTouchStart: this.handleChange,
                      },
                      a.a.createElement(
                        'style',
                        null,
                        '\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          '
                      ),
                      a.a.createElement(
                        'div',
                        { style: n.pointer },
                        this.props.pointer
                          ? a.a.createElement(this.props.pointer, this.props)
                          : a.a.createElement('div', { style: n.slider })
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.PureComponent || n.Component),
        O = r(4),
        j = r.n(O);
      var R = function () {
        (this.__data__ = []), (this.size = 0);
      };
      var F = function (e, t) {
        return e === t || (e != e && t != t);
      };
      var A = function (e, t) {
          for (var r = e.length; r--; ) if (F(e[r][0], t)) return r;
          return -1;
        },
        B = Array.prototype.splice;
      var M = function (e) {
        var t = this.__data__,
          r = A(t, e);
        return (
          !(r < 0) &&
          (r == t.length - 1 ? t.pop() : B.call(t, r, 1), --this.size, !0)
        );
      };
      var T = function (e) {
        var t = this.__data__,
          r = A(t, e);
        return r < 0 ? void 0 : t[r][1];
      };
      var H = function (e) {
        return A(this.__data__, e) > -1;
      };
      var P = function (e, t) {
        var r = this.__data__,
          n = A(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
      };
      function L(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (L.prototype.clear = R),
        (L.prototype.delete = M),
        (L.prototype.get = T),
        (L.prototype.has = H),
        (L.prototype.set = P);
      var D = L;
      var z = function (e, t) {
          return null == e ? void 0 : e[t];
        },
        N = (function () {
          try {
            var e = z(Object, 'defineProperty');
            return e({}, '', {}), e;
          } catch (e) {}
        })();
      var G = function (e, t, r) {
        '__proto__' == t && N
          ? N(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (e[t] = r);
      };
      var U = function (e, t, r) {
        ((void 0 !== r && !F(e[t], r)) || (void 0 === r && !(t in e))) &&
          G(e, t, r);
      };
      var W = (function (e) {
          return function (t, r, n) {
            for (var a = -1, o = Object(t), i = n(t), l = i.length; l--; ) {
              var s = i[e ? l : ++a];
              if (!1 === r(o[s], s, o)) break;
            }
            return t;
          };
        })(),
        X = r(1648),
        I = r(1431),
        V = I.a.Uint8Array;
      var Y = function (e) {
        var t = new e.constructor(e.byteLength);
        return new V(t).set(new V(e)), t;
      };
      var q = function (e, t) {
        var r = t ? Y(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      };
      var K = function (e, t) {
        var r = -1,
          n = e.length;
        for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
        return t;
      };
      var $ = function (e) {
          var t = typeof e;
          return null != e && ('object' == t || 'function' == t);
        },
        J = Object.create,
        Z = (function () {
          function e() {}
          return function (t) {
            if (!$(t)) return {};
            if (J) return J(t);
            e.prototype = t;
            var r = new e();
            return (e.prototype = void 0), r;
          };
        })();
      var Q = (function (e, t) {
        return function (r) {
          return e(t(r));
        };
      })(Object.getPrototypeOf, Object);
      var ee = function () {
        return !1;
      };
      var te = function (e) {
        return 'function' != typeof e.constructor || ee(e) ? {} : Z(Q(e));
      };
      var re = function () {
          return !1;
        },
        ne = Array.isArray,
        ae = Object.prototype.toString;
      var oe = function (e) {
        return ae.call(e);
      };
      var ie = function (e) {
        if (!$(e)) return !1;
        var t = oe(e);
        return (
          '[object Function]' == t ||
          '[object GeneratorFunction]' == t ||
          '[object AsyncFunction]' == t ||
          '[object Proxy]' == t
        );
      };
      var le = function (e) {
        return (
          'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
      var se = function (e) {
        return null != e && le(e.length) && !ie(e);
      };
      var ce = function (e) {
        return null != e && 'object' == typeof e;
      };
      var pe = function (e) {
        return ce(e) && se(e);
      };
      var ue = function () {
          return !1;
        },
        fe = Function.prototype,
        he = Object.prototype,
        de = fe.toString,
        be = he.hasOwnProperty,
        ge = de.call(Object);
      var ve = function (e) {
        if (!ce(e) || '[object Object]' != oe(e)) return !1;
        var t = Q(e);
        if (null === t) return !0;
        var r = be.call(t, 'constructor') && t.constructor;
        return 'function' == typeof r && r instanceof r && de.call(r) == ge;
      };
      var xe = function () {
        return !1;
      };
      var ye = function (e, t) {
          if (
            ('constructor' !== t || 'function' != typeof e[t]) &&
            '__proto__' != t
          )
            return e[t];
        },
        me = Object.prototype.hasOwnProperty;
      var we = function (e, t, r) {
        var n = e[t];
        (me.call(e, t) && F(n, r) && (void 0 !== r || t in e)) || G(e, t, r);
      };
      var Ee = function (e, t, r, n) {
        var a = !r;
        r || (r = {});
        for (var o = -1, i = t.length; ++o < i; ) {
          var l = t[o],
            s = n ? n(r[l], e[l], l, r, e) : void 0;
          void 0 === s && (s = e[l]), a ? G(r, l, s) : we(r, l, s);
        }
        return r;
      };
      var Ce = function (e) {
        var t = [];
        if (null != e) for (var r in Object(e)) t.push(r);
        return t;
      };
      var ke = function (e) {
        return Ee(e, Ce(e));
      };
      var Se = function (e, t, r, n, a, o, i) {
        var l = ye(e, r),
          s = ye(t, r),
          c = i.get(s);
        if (c) U(e, r, c);
        else {
          var p = o ? o(l, s, r + '', e, t, i) : void 0,
            u = void 0 === p;
          if (u) {
            var f = ne(s),
              h = !f && ue(s),
              d = !f && !h && xe(s);
            (p = s),
              f || h || d
                ? ne(l)
                  ? (p = l)
                  : pe(l)
                    ? (p = K(l))
                    : h
                      ? ((u = !1), (p = Object(X.a)(s, !0)))
                      : d
                        ? ((u = !1), (p = q(s, !0)))
                        : (p = [])
                : ve(s) || re(s)
                  ? ((p = l),
                    re(l) ? (p = ke(l)) : ($(l) && !ie(l)) || (p = te(s)))
                  : (u = !1);
          }
          u && (i.set(s, p), a(p, s, n, o, i), i.delete(s)), U(e, r, p);
        }
      };
      var _e = function e(t, r, n, a, o) {
        t !== r &&
          W(
            r,
            function (i, l) {
              if ((o || (o = new D()), $(i))) Se(t, r, l, n, e, a, o);
              else {
                var s = a ? a(ye(t, l), i, l + '', t, r, o) : void 0;
                void 0 === s && (s = i), U(t, l, s);
              }
            },
            Ce
          );
      };
      var Oe = function (e) {
        return e;
      };
      var je = function (e, t, r) {
          switch (r.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, r[0]);
            case 2:
              return e.call(t, r[0], r[1]);
            case 3:
              return e.call(t, r[0], r[1], r[2]);
          }
          return e.apply(t, r);
        },
        Re = Math.max;
      var Fe = function (e, t, r) {
        return (
          (t = Re(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var n = arguments, a = -1, o = Re(n.length - t, 0), i = Array(o);
              ++a < o;

            )
              i[a] = n[t + a];
            a = -1;
            for (var l = Array(t + 1); ++a < t; ) l[a] = n[a];
            return (l[t] = r(i)), je(e, this, l);
          }
        );
      };
      var Ae = function (e) {
        return e;
      };
      var Be = function (e, t) {
        return Ae(Fe(e, t, Oe), e + '');
      };
      var Me = function () {
        return !1;
      };
      var Te = (function (e) {
          return Be(function (t, r) {
            var n = -1,
              a = r.length,
              o = a > 1 ? r[a - 1] : void 0,
              i = a > 2 ? r[2] : void 0;
            for (
              o = e.length > 3 && 'function' == typeof o ? (a--, o) : void 0,
                i && Me(r[0], r[1], i) && ((o = a < 3 ? void 0 : o), (a = 1)),
                t = Object(t);
              ++n < a;

            ) {
              var l = r[n];
              l && e(t, l, n, o);
            }
            return t;
          });
        })(function (e, t, r) {
          _e(e, t, r);
        }),
        He = function (e) {
          var t = e.zDepth,
            r = e.radius,
            n = e.background,
            o = e.children,
            l = e.styles,
            s = void 0 === l ? {} : l,
            c = i()(
              Te(
                {
                  default: {
                    wrap: { position: 'relative', display: 'inline-block' },
                    content: { position: 'relative' },
                    bg: {
                      absolute: '0px 0px 0px 0px',
                      boxShadow:
                        '0 ' + t + 'px ' + 4 * t + 'px rgba(0,0,0,.24)',
                      borderRadius: r,
                      background: n,
                    },
                  },
                  'zDepth-0': { bg: { boxShadow: 'none' } },
                  'zDepth-1': {
                    bg: {
                      boxShadow:
                        '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)',
                    },
                  },
                  'zDepth-2': {
                    bg: {
                      boxShadow:
                        '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)',
                    },
                  },
                  'zDepth-3': {
                    bg: {
                      boxShadow:
                        '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)',
                    },
                  },
                  'zDepth-4': {
                    bg: {
                      boxShadow:
                        '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)',
                    },
                  },
                  'zDepth-5': {
                    bg: {
                      boxShadow:
                        '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)',
                    },
                  },
                  square: { bg: { borderRadius: '0' } },
                  circle: { bg: { borderRadius: '50%' } },
                },
                s
              ),
              { 'zDepth-1': 1 === t }
            );
          return a.a.createElement(
            'div',
            { style: c.wrap },
            a.a.createElement('div', { style: c.bg }),
            a.a.createElement('div', { style: c.content }, o)
          );
        };
      (He.propTypes = {
        background: j.a.string,
        zDepth: j.a.oneOf([0, 1, 2, 3, 4, 5]),
        radius: j.a.number,
        styles: j.a.object,
      }),
        (He.defaultProps = {
          background: '#fff',
          zDepth: 1,
          radius: 2,
          styles: {},
        });
      var Pe = He,
        Le = function () {
          return I.a.Date.now();
        };
      var De = function (e) {
          return e;
        },
        ze = Math.max,
        Ne = Math.min;
      var Ge = function (e, t, r) {
        var n,
          a,
          o,
          i,
          l,
          s,
          c = 0,
          p = !1,
          u = !1,
          f = !0;
        if ('function' != typeof e) throw new TypeError('Expected a function');
        function h(t) {
          var r = n,
            o = a;
          return (n = a = void 0), (c = t), (i = e.apply(o, r));
        }
        function d(e) {
          return (c = e), (l = setTimeout(g, t)), p ? h(e) : i;
        }
        function b(e) {
          var r = e - s;
          return void 0 === s || r >= t || r < 0 || (u && e - c >= o);
        }
        function g() {
          var e = Le();
          if (b(e)) return v(e);
          l = setTimeout(
            g,
            (function (e) {
              var r = t - (e - s);
              return u ? Ne(r, o - (e - c)) : r;
            })(e)
          );
        }
        function v(e) {
          return (l = void 0), f && n ? h(e) : ((n = a = void 0), i);
        }
        function x() {
          var e = Le(),
            r = b(e);
          if (((n = arguments), (a = this), (s = e), r)) {
            if (void 0 === l) return d(s);
            if (u) return clearTimeout(l), (l = setTimeout(g, t)), h(s);
          }
          return void 0 === l && (l = setTimeout(g, t)), i;
        }
        return (
          (t = De(t) || 0),
          $(r) &&
            ((p = !!r.leading),
            (o = (u = 'maxWait' in r) ? ze(De(r.maxWait) || 0, t) : o),
            (f = 'trailing' in r ? !!r.trailing : f)),
          (x.cancel = function () {
            void 0 !== l && clearTimeout(l), (c = 0), (n = s = a = l = void 0);
          }),
          (x.flush = function () {
            return void 0 === l ? i : v(Le());
          }),
          x
        );
      };
      var Ue = function (e, t, r) {
          var n = !0,
            a = !0;
          if ('function' != typeof e)
            throw new TypeError('Expected a function');
          return (
            $(r) &&
              ((n = 'leading' in r ? !!r.leading : n),
              (a = 'trailing' in r ? !!r.trailing : a)),
            Ge(e, t, { leading: n, maxWait: t, trailing: a })
          );
        },
        We = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })();
      var Xe = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var r = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (r.handleChange = function (e) {
              'function' == typeof r.props.onChange &&
                r.throttle(
                  r.props.onChange,
                  (function (e, t, r) {
                    var n = r.getBoundingClientRect(),
                      a = n.width,
                      o = n.height,
                      i =
                        'number' == typeof e.pageX
                          ? e.pageX
                          : e.touches[0].pageX,
                      l =
                        'number' == typeof e.pageY
                          ? e.pageY
                          : e.touches[0].pageY,
                      s =
                        i -
                        (r.getBoundingClientRect().left + window.pageXOffset),
                      c =
                        l -
                        (r.getBoundingClientRect().top + window.pageYOffset);
                    s < 0 ? (s = 0) : s > a && (s = a),
                      c < 0 ? (c = 0) : c > o && (c = o);
                    var p = s / a,
                      u = 1 - c / o;
                    return { h: t.h, s: p, v: u, a: t.a, source: 'hsv' };
                  })(e, r.props.hsl, r.container),
                  e
                );
            }),
            (r.handleMouseDown = function (e) {
              r.handleChange(e);
              var t = r.getContainerRenderWindow();
              t.addEventListener('mousemove', r.handleChange),
                t.addEventListener('mouseup', r.handleMouseUp);
            }),
            (r.handleMouseUp = function () {
              r.unbindEventListeners();
            }),
            (r.throttle = Ue(function (e, t, r) {
              e(t, r);
            }, 50)),
            r
          );
        }
        return (
          (function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          We(t, [
            {
              key: 'componentWillUnmount',
              value: function () {
                this.throttle.cancel(), this.unbindEventListeners();
              },
            },
            {
              key: 'getContainerRenderWindow',
              value: function () {
                for (
                  var e = this.container, t = window;
                  !t.document.contains(e) && t.parent !== t;

                )
                  t = t.parent;
                return t;
              },
            },
            {
              key: 'unbindEventListeners',
              value: function () {
                var e = this.getContainerRenderWindow();
                e.removeEventListener('mousemove', this.handleChange),
                  e.removeEventListener('mouseup', this.handleMouseUp);
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props.style || {},
                  r = t.color,
                  n = t.white,
                  o = t.black,
                  l = t.pointer,
                  s = t.circle,
                  c = i()(
                    {
                      default: {
                        color: {
                          absolute: '0px 0px 0px 0px',
                          background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
                          borderRadius: this.props.radius,
                        },
                        white: {
                          absolute: '0px 0px 0px 0px',
                          borderRadius: this.props.radius,
                        },
                        black: {
                          absolute: '0px 0px 0px 0px',
                          boxShadow: this.props.shadow,
                          borderRadius: this.props.radius,
                        },
                        pointer: {
                          position: 'absolute',
                          top: -100 * this.props.hsv.v + 100 + '%',
                          left: 100 * this.props.hsv.s + '%',
                          cursor: 'default',
                        },
                        circle: {
                          width: '4px',
                          height: '4px',
                          boxShadow:
                            '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)',
                          borderRadius: '50%',
                          cursor: 'hand',
                          transform: 'translate(-2px, -2px)',
                        },
                      },
                      custom: {
                        color: r,
                        white: n,
                        black: o,
                        pointer: l,
                        circle: s,
                      },
                    },
                    { custom: !!this.props.style }
                  );
                return a.a.createElement(
                  'div',
                  {
                    style: c.color,
                    ref: function (t) {
                      return (e.container = t);
                    },
                    onMouseDown: this.handleMouseDown,
                    onTouchMove: this.handleChange,
                    onTouchStart: this.handleChange,
                  },
                  a.a.createElement(
                    'style',
                    null,
                    '\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        '
                  ),
                  a.a.createElement(
                    'div',
                    { style: c.white, className: 'saturation-white' },
                    a.a.createElement('div', {
                      style: c.black,
                      className: 'saturation-black',
                    }),
                    a.a.createElement(
                      'div',
                      { style: c.pointer },
                      this.props.pointer
                        ? a.a.createElement(this.props.pointer, this.props)
                        : a.a.createElement('div', { style: c.circle })
                    )
                  )
                );
              },
            },
          ]),
          t
        );
      })(n.PureComponent || n.Component);
      var Ie = function (e, t) {
          for (
            var r = -1, n = null == e ? 0 : e.length;
            ++r < n && !1 !== t(e[r], r, e);

          );
          return e;
        },
        Ve = r(1651),
        Ye = r.n(Ve),
        qe = function (e) {
          var t = 0,
            r = 0;
          return (
            Ie(['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'], function (n) {
              if (
                e[n] &&
                ((t += 1), isNaN(e[n]) || (r += 1), 's' === n || 'l' === n)
              ) {
                /^\d+%$/.test(e[n]) && (r += 1);
              }
            }),
            t === r && e
          );
        },
        Ke = function (e, t) {
          var r = e.hex ? Ye()(e.hex) : Ye()(e),
            n = r.toHsl(),
            a = r.toHsv(),
            o = r.toRgb(),
            i = r.toHex();
          return (
            0 === n.s && ((n.h = t || 0), (a.h = t || 0)),
            {
              hsl: n,
              hex: '000000' === i && 0 === o.a ? 'transparent' : '#' + i,
              rgb: o,
              hsv: a,
              oldHue: e.h || t || n.h,
              source: e.source,
            }
          );
        },
        $e = function (e) {
          if ('transparent' === e) return !0;
          var t = '#' === String(e).charAt(0) ? 1 : 0;
          return e.length !== 4 + t && e.length < 7 + t && Ye()(e).isValid();
        },
        Je = function (e) {
          if (!e) return '#fff';
          var t = Ke(e);
          return 'transparent' === t.hex
            ? 'rgba(0,0,0,0.4)'
            : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1e3 >= 128
              ? '#000'
              : '#fff';
        },
        Ze = function (e, t) {
          var r = e.replace('°', '');
          return Ye()(t + ' (' + r + ')')._ok;
        },
        Qe =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        et = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })();
      var tt = function (e) {
          var t = (function (t) {
            function r(e) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, r);
              var t = (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ('object' != typeof t && 'function' != typeof t)
                  ? e
                  : t;
              })(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
              return (
                (t.handleChange = function (e, r) {
                  if (qe(e)) {
                    var n = Ke(e, e.h || t.state.oldHue);
                    t.setState(n),
                      t.props.onChangeComplete &&
                        t.debounce(t.props.onChangeComplete, n, r),
                      t.props.onChange && t.props.onChange(n, r);
                  }
                }),
                (t.handleSwatchHover = function (e, r) {
                  if (qe(e)) {
                    var n = Ke(e, e.h || t.state.oldHue);
                    t.props.onSwatchHover && t.props.onSwatchHover(n, r);
                  }
                }),
                (t.state = Qe({}, Ke(e.color, 0))),
                (t.debounce = Ge(function (e, t, r) {
                  e(t, r);
                }, 100)),
                t
              );
            }
            return (
              (function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError(
                    'Super expression must either be null or a function, not ' +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(r, t),
              et(
                r,
                [
                  {
                    key: 'render',
                    value: function () {
                      var t = {};
                      return (
                        this.props.onSwatchHover &&
                          (t.onSwatchHover = this.handleSwatchHover),
                        a.a.createElement(
                          e,
                          Qe(
                            {},
                            this.props,
                            this.state,
                            { onChange: this.handleChange },
                            t
                          )
                        )
                      );
                    },
                  },
                ],
                [
                  {
                    key: 'getDerivedStateFromProps',
                    value: function (e, t) {
                      return Qe({}, Ke(e.color, t.oldHue));
                    },
                  },
                ]
              ),
              r
            );
          })(n.PureComponent || n.Component);
          return (
            (t.propTypes = Qe({}, e.propTypes)),
            (t.defaultProps = Qe({}, e.defaultProps, {
              color: { h: 250, s: 0.5, l: 0.2, a: 1 },
            })),
            t
          );
        },
        rt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        nt = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })();
      function at(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function ot(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function it(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var lt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        st = (function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'span';
          return (function (r) {
            function n() {
              var e, t, r;
              at(this, n);
              for (var a = arguments.length, o = Array(a), i = 0; i < a; i++)
                o[i] = arguments[i];
              return (
                (t = r =
                  ot(
                    this,
                    (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(
                      e,
                      [this].concat(o)
                    )
                  )),
                (r.state = { focus: !1 }),
                (r.handleFocus = function () {
                  return r.setState({ focus: !0 });
                }),
                (r.handleBlur = function () {
                  return r.setState({ focus: !1 });
                }),
                ot(r, t)
              );
            }
            return (
              it(n, r),
              nt(n, [
                {
                  key: 'render',
                  value: function () {
                    return a.a.createElement(
                      t,
                      { onFocus: this.handleFocus, onBlur: this.handleBlur },
                      a.a.createElement(e, rt({}, this.props, this.state))
                    );
                  },
                },
              ]),
              n
            );
          })(a.a.Component);
        })(function (e) {
          var t = e.color,
            r = e.style,
            n = e.onClick,
            o = void 0 === n ? function () {} : n,
            l = e.onHover,
            s = e.title,
            c = void 0 === s ? t : s,
            p = e.children,
            u = e.focus,
            h = e.focusStyle,
            d = void 0 === h ? {} : h,
            b = 'transparent' === t,
            g = i()({
              default: {
                swatch: lt(
                  {
                    background: t,
                    height: '100%',
                    width: '100%',
                    cursor: 'pointer',
                    position: 'relative',
                    outline: 'none',
                  },
                  r,
                  u ? d : {}
                ),
              },
            }),
            v = {};
          return (
            l &&
              (v.onMouseOver = function (e) {
                return l(t, e);
              }),
            a.a.createElement(
              'div',
              lt(
                {
                  style: g.swatch,
                  onClick: function (e) {
                    return o(t, e);
                  },
                  title: c,
                  tabIndex: 0,
                  onKeyDown: function (e) {
                    return 13 === e.keyCode && o(t, e);
                  },
                },
                v
              ),
              p,
              b &&
                a.a.createElement(f, {
                  borderRadius: g.swatch.borderRadius,
                  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                })
            )
          );
        }),
        ct = function (e) {
          var t = e.direction,
            r = i()(
              {
                default: {
                  picker: {
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    transform: 'translate(-9px, -1px)',
                    backgroundColor: 'rgb(248, 248, 248)',
                    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
                  },
                },
                vertical: { picker: { transform: 'translate(-3px, -9px)' } },
              },
              { vertical: 'vertical' === t }
            );
          return a.a.createElement('div', { style: r.picker });
        },
        pt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        ut = function (e) {
          var t = e.rgb,
            r = e.hsl,
            n = e.width,
            o = e.height,
            l = e.onChange,
            s = e.direction,
            c = e.style,
            p = e.renderers,
            u = e.pointer,
            f = e.className,
            h = void 0 === f ? '' : f,
            d = i()({
              default: {
                picker: { position: 'relative', width: n, height: o },
                alpha: { radius: '2px', style: c },
              },
            });
          return a.a.createElement(
            'div',
            { style: d.picker, className: 'alpha-picker ' + h },
            a.a.createElement(
              v,
              pt({}, d.alpha, {
                rgb: t,
                hsl: r,
                pointer: u,
                renderers: p,
                onChange: l,
                direction: s,
              })
            )
          );
        };
      ut.defaultProps = {
        width: '316px',
        height: '16px',
        direction: 'horizontal',
        pointer: ct,
      };
      tt(ut);
      var ft = function (e, t) {
          for (
            var r = -1, n = null == e ? 0 : e.length, a = Array(n);
            ++r < n;

          )
            a[r] = t(e[r], r, e);
          return a;
        },
        ht = function (e) {
          var t = e.colors,
            r = e.onClick,
            n = e.onSwatchHover,
            o = i()({
              default: {
                swatches: { marginRight: '-10px' },
                swatch: {
                  width: '22px',
                  height: '22px',
                  float: 'left',
                  marginRight: '10px',
                  marginBottom: '10px',
                  borderRadius: '4px',
                },
                clear: { clear: 'both' },
              },
            });
          return a.a.createElement(
            'div',
            { style: o.swatches },
            ft(t, function (e) {
              return a.a.createElement(st, {
                key: e,
                color: e,
                style: o.swatch,
                onClick: r,
                onHover: n,
                focusStyle: { boxShadow: '0 0 4px ' + e },
              });
            }),
            a.a.createElement('div', { style: o.clear })
          );
        },
        dt = function (e) {
          var t = e.onChange,
            r = e.onSwatchHover,
            n = e.hex,
            o = e.colors,
            l = e.width,
            s = e.triangle,
            c = e.styles,
            p = void 0 === c ? {} : c,
            u = e.className,
            h = void 0 === u ? '' : u,
            d = 'transparent' === n,
            b = function (e, r) {
              $e(e) && t({ hex: e, source: 'hex' }, r);
            },
            g = i()(
              Te(
                {
                  default: {
                    card: {
                      width: l,
                      background: '#fff',
                      boxShadow: '0 1px rgba(0,0,0,.1)',
                      borderRadius: '6px',
                      position: 'relative',
                    },
                    head: {
                      height: '110px',
                      background: n,
                      borderRadius: '6px 6px 0 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    },
                    body: { padding: '10px' },
                    label: {
                      fontSize: '18px',
                      color: Je(n),
                      position: 'relative',
                    },
                    triangle: {
                      width: '0px',
                      height: '0px',
                      borderStyle: 'solid',
                      borderWidth: '0 10px 10px 10px',
                      borderColor:
                        'transparent transparent ' + n + ' transparent',
                      position: 'absolute',
                      top: '-10px',
                      left: '50%',
                      marginLeft: '-10px',
                    },
                    input: {
                      width: '100%',
                      fontSize: '12px',
                      color: '#666',
                      border: '0px',
                      outline: 'none',
                      height: '22px',
                      boxShadow: 'inset 0 0 0 1px #ddd',
                      borderRadius: '4px',
                      padding: '0 7px',
                      boxSizing: 'border-box',
                    },
                  },
                  'hide-triangle': { triangle: { display: 'none' } },
                },
                p
              ),
              { 'hide-triangle': 'hide' === s }
            );
          return a.a.createElement(
            'div',
            { style: g.card, className: 'block-picker ' + h },
            a.a.createElement('div', { style: g.triangle }),
            a.a.createElement(
              'div',
              { style: g.head },
              d && a.a.createElement(f, { borderRadius: '6px 6px 0 0' }),
              a.a.createElement('div', { style: g.label }, n)
            ),
            a.a.createElement(
              'div',
              { style: g.body },
              a.a.createElement(ht, {
                colors: o,
                onClick: b,
                onSwatchHover: r,
              }),
              a.a.createElement(w, {
                style: { input: g.input },
                value: n,
                onChange: b,
              })
            )
          );
        };
      (dt.propTypes = {
        width: j.a.oneOfType([j.a.string, j.a.number]),
        colors: j.a.arrayOf(j.a.string),
        triangle: j.a.oneOf(['top', 'hide']),
        styles: j.a.object,
      }),
        (dt.defaultProps = {
          width: 170,
          colors: [
            '#D9E3F0',
            '#F47373',
            '#697689',
            '#37D67A',
            '#2CCCE4',
            '#555555',
            '#dce775',
            '#ff8a65',
            '#ba68c8',
          ],
          triangle: 'top',
          styles: {},
        });
      tt(dt);
      var bt = {
          50: '#ffebee',
          100: '#ffcdd2',
          200: '#ef9a9a',
          300: '#e57373',
          400: '#ef5350',
          500: '#f44336',
          600: '#e53935',
          700: '#d32f2f',
          800: '#c62828',
          900: '#b71c1c',
          a100: '#ff8a80',
          a200: '#ff5252',
          a400: '#ff1744',
          a700: '#d50000',
        },
        gt = {
          50: '#fce4ec',
          100: '#f8bbd0',
          200: '#f48fb1',
          300: '#f06292',
          400: '#ec407a',
          500: '#e91e63',
          600: '#d81b60',
          700: '#c2185b',
          800: '#ad1457',
          900: '#880e4f',
          a100: '#ff80ab',
          a200: '#ff4081',
          a400: '#f50057',
          a700: '#c51162',
        },
        vt = {
          50: '#f3e5f5',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#ab47bc',
          500: '#9c27b0',
          600: '#8e24aa',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c',
          a100: '#ea80fc',
          a200: '#e040fb',
          a400: '#d500f9',
          a700: '#aa00ff',
        },
        xt = {
          50: '#ede7f6',
          100: '#d1c4e9',
          200: '#b39ddb',
          300: '#9575cd',
          400: '#7e57c2',
          500: '#673ab7',
          600: '#5e35b1',
          700: '#512da8',
          800: '#4527a0',
          900: '#311b92',
          a100: '#b388ff',
          a200: '#7c4dff',
          a400: '#651fff',
          a700: '#6200ea',
        },
        yt = {
          50: '#e8eaf6',
          100: '#c5cae9',
          200: '#9fa8da',
          300: '#7986cb',
          400: '#5c6bc0',
          500: '#3f51b5',
          600: '#3949ab',
          700: '#303f9f',
          800: '#283593',
          900: '#1a237e',
          a100: '#8c9eff',
          a200: '#536dfe',
          a400: '#3d5afe',
          a700: '#304ffe',
        },
        mt = {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
          a100: '#82b1ff',
          a200: '#448aff',
          a400: '#2979ff',
          a700: '#2962ff',
        },
        wt = {
          50: '#e1f5fe',
          100: '#b3e5fc',
          200: '#81d4fa',
          300: '#4fc3f7',
          400: '#29b6f6',
          500: '#03a9f4',
          600: '#039be5',
          700: '#0288d1',
          800: '#0277bd',
          900: '#01579b',
          a100: '#80d8ff',
          a200: '#40c4ff',
          a400: '#00b0ff',
          a700: '#0091ea',
        },
        Et = {
          50: '#e0f7fa',
          100: '#b2ebf2',
          200: '#80deea',
          300: '#4dd0e1',
          400: '#26c6da',
          500: '#00bcd4',
          600: '#00acc1',
          700: '#0097a7',
          800: '#00838f',
          900: '#006064',
          a100: '#84ffff',
          a200: '#18ffff',
          a400: '#00e5ff',
          a700: '#00b8d4',
        },
        Ct = {
          50: '#e0f2f1',
          100: '#b2dfdb',
          200: '#80cbc4',
          300: '#4db6ac',
          400: '#26a69a',
          500: '#009688',
          600: '#00897b',
          700: '#00796b',
          800: '#00695c',
          900: '#004d40',
          a100: '#a7ffeb',
          a200: '#64ffda',
          a400: '#1de9b6',
          a700: '#00bfa5',
        },
        kt = {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
          a100: '#b9f6ca',
          a200: '#69f0ae',
          a400: '#00e676',
          a700: '#00c853',
        },
        St = {
          50: '#f1f8e9',
          100: '#dcedc8',
          200: '#c5e1a5',
          300: '#aed581',
          400: '#9ccc65',
          500: '#8bc34a',
          600: '#7cb342',
          700: '#689f38',
          800: '#558b2f',
          900: '#33691e',
          a100: '#ccff90',
          a200: '#b2ff59',
          a400: '#76ff03',
          a700: '#64dd17',
        },
        _t = {
          50: '#f9fbe7',
          100: '#f0f4c3',
          200: '#e6ee9c',
          300: '#dce775',
          400: '#d4e157',
          500: '#cddc39',
          600: '#c0ca33',
          700: '#afb42b',
          800: '#9e9d24',
          900: '#827717',
          a100: '#f4ff81',
          a200: '#eeff41',
          a400: '#c6ff00',
          a700: '#aeea00',
        },
        Ot = {
          50: '#fffde7',
          100: '#fff9c4',
          200: '#fff59d',
          300: '#fff176',
          400: '#ffee58',
          500: '#ffeb3b',
          600: '#fdd835',
          700: '#fbc02d',
          800: '#f9a825',
          900: '#f57f17',
          a100: '#ffff8d',
          a200: '#ffff00',
          a400: '#ffea00',
          a700: '#ffd600',
        },
        jt = {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
          a100: '#ffe57f',
          a200: '#ffd740',
          a400: '#ffc400',
          a700: '#ffab00',
        },
        Rt = {
          50: '#fff3e0',
          100: '#ffe0b2',
          200: '#ffcc80',
          300: '#ffb74d',
          400: '#ffa726',
          500: '#ff9800',
          600: '#fb8c00',
          700: '#f57c00',
          800: '#ef6c00',
          900: '#e65100',
          a100: '#ffd180',
          a200: '#ffab40',
          a400: '#ff9100',
          a700: '#ff6d00',
        },
        Ft = {
          50: '#fbe9e7',
          100: '#ffccbc',
          200: '#ffab91',
          300: '#ff8a65',
          400: '#ff7043',
          500: '#ff5722',
          600: '#f4511e',
          700: '#e64a19',
          800: '#d84315',
          900: '#bf360c',
          a100: '#ff9e80',
          a200: '#ff6e40',
          a400: '#ff3d00',
          a700: '#dd2c00',
        },
        At = {
          50: '#efebe9',
          100: '#d7ccc8',
          200: '#bcaaa4',
          300: '#a1887f',
          400: '#8d6e63',
          500: '#795548',
          600: '#6d4c41',
          700: '#5d4037',
          800: '#4e342e',
          900: '#3e2723',
        },
        Bt = {
          50: '#eceff1',
          100: '#cfd8dc',
          200: '#b0bec5',
          300: '#90a4ae',
          400: '#78909c',
          500: '#607d8b',
          600: '#546e7a',
          700: '#455a64',
          800: '#37474f',
          900: '#263238',
        },
        Mt = function (e) {
          var t = e.color,
            r = e.onClick,
            n = e.onSwatchHover,
            o = e.hover,
            l = e.active,
            s = e.circleSize,
            c = e.circleSpacing,
            p = i()(
              {
                default: {
                  swatch: {
                    width: s,
                    height: s,
                    marginRight: c,
                    marginBottom: c,
                    transform: 'scale(1)',
                    transition: '100ms transform ease',
                  },
                  Swatch: {
                    borderRadius: '50%',
                    background: 'transparent',
                    boxShadow: 'inset 0 0 0 ' + (s / 2 + 1) + 'px ' + t,
                    transition: '100ms box-shadow ease',
                  },
                },
                hover: { swatch: { transform: 'scale(1.2)' } },
                active: { Swatch: { boxShadow: 'inset 0 0 0 3px ' + t } },
              },
              { hover: o, active: l }
            );
          return a.a.createElement(
            'div',
            { style: p.swatch },
            a.a.createElement(st, {
              style: p.Swatch,
              color: t,
              onClick: r,
              onHover: n,
              focusStyle: { boxShadow: p.Swatch.boxShadow + ', 0 0 5px ' + t },
            })
          );
        };
      Mt.defaultProps = { circleSize: 28, circleSpacing: 14 };
      var Tt = Object(o.handleHover)(Mt),
        Ht = function (e) {
          var t = e.width,
            r = e.onChange,
            n = e.onSwatchHover,
            o = e.colors,
            l = e.hex,
            s = e.circleSize,
            c = e.styles,
            p = void 0 === c ? {} : c,
            u = e.circleSpacing,
            f = e.className,
            h = void 0 === f ? '' : f,
            d = i()(
              Te(
                {
                  default: {
                    card: {
                      width: t,
                      display: 'flex',
                      flexWrap: 'wrap',
                      marginRight: -u,
                      marginBottom: -u,
                    },
                  },
                },
                p
              )
            ),
            b = function (e, t) {
              return r({ hex: e, source: 'hex' }, t);
            };
          return a.a.createElement(
            'div',
            { style: d.card, className: 'circle-picker ' + h },
            ft(o, function (e) {
              return a.a.createElement(Tt, {
                key: e,
                color: e,
                onClick: b,
                onSwatchHover: n,
                active: l === e.toLowerCase(),
                circleSize: s,
                circleSpacing: u,
              });
            })
          );
        };
      (Ht.propTypes = {
        width: j.a.oneOfType([j.a.string, j.a.number]),
        circleSize: j.a.number,
        circleSpacing: j.a.number,
        styles: j.a.object,
      }),
        (Ht.defaultProps = {
          width: 252,
          circleSize: 28,
          circleSpacing: 14,
          colors: [
            bt[500],
            gt[500],
            vt[500],
            xt[500],
            yt[500],
            mt[500],
            wt[500],
            Et[500],
            Ct[500],
            kt[500],
            St[500],
            _t[500],
            Ot[500],
            jt[500],
            Rt[500],
            Ft[500],
            At[500],
            Bt[500],
          ],
          styles: {},
        });
      tt(Ht);
      var Pt = function (e) {
          return void 0 === e;
        },
        Lt = r(1652),
        Dt = r.n(Lt),
        zt = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })();
      var Nt = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var r = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (r.toggleViews = function () {
              'hex' === r.state.view
                ? r.setState({ view: 'rgb' })
                : 'rgb' === r.state.view
                  ? r.setState({ view: 'hsl' })
                  : 'hsl' === r.state.view &&
                    (1 === r.props.hsl.a
                      ? r.setState({ view: 'hex' })
                      : r.setState({ view: 'rgb' }));
            }),
            (r.handleChange = function (e, t) {
              e.hex
                ? $e(e.hex) &&
                  r.props.onChange({ hex: e.hex, source: 'hex' }, t)
                : e.r || e.g || e.b
                  ? r.props.onChange(
                      {
                        r: e.r || r.props.rgb.r,
                        g: e.g || r.props.rgb.g,
                        b: e.b || r.props.rgb.b,
                        source: 'rgb',
                      },
                      t
                    )
                  : e.a
                    ? (e.a < 0 ? (e.a = 0) : e.a > 1 && (e.a = 1),
                      r.props.onChange(
                        {
                          h: r.props.hsl.h,
                          s: r.props.hsl.s,
                          l: r.props.hsl.l,
                          a: Math.round(100 * e.a) / 100,
                          source: 'rgb',
                        },
                        t
                      ))
                    : (e.h || e.s || e.l) &&
                      ('string' == typeof e.s &&
                        e.s.includes('%') &&
                        (e.s = e.s.replace('%', '')),
                      'string' == typeof e.l &&
                        e.l.includes('%') &&
                        (e.l = e.l.replace('%', '')),
                      1 == e.s ? (e.s = 0.01) : 1 == e.l && (e.l = 0.01),
                      r.props.onChange(
                        {
                          h: e.h || r.props.hsl.h,
                          s: Number(Pt(e.s) ? r.props.hsl.s : e.s),
                          l: Number(Pt(e.l) ? r.props.hsl.l : e.l),
                          source: 'hsl',
                        },
                        t
                      ));
            }),
            (r.showHighlight = function (e) {
              e.currentTarget.style.background = '#eee';
            }),
            (r.hideHighlight = function (e) {
              e.currentTarget.style.background = 'transparent';
            }),
            1 !== e.hsl.a && 'hex' === e.view
              ? (r.state = { view: 'rgb' })
              : (r.state = { view: e.view }),
            r
          );
        }
        return (
          (function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          zt(
            t,
            [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = i()(
                      {
                        default: {
                          wrap: { paddingTop: '16px', display: 'flex' },
                          fields: {
                            flex: '1',
                            display: 'flex',
                            marginLeft: '-6px',
                          },
                          field: { paddingLeft: '6px', width: '100%' },
                          alpha: { paddingLeft: '6px', width: '100%' },
                          toggle: {
                            width: '32px',
                            textAlign: 'right',
                            position: 'relative',
                          },
                          icon: {
                            marginRight: '-4px',
                            marginTop: '12px',
                            cursor: 'pointer',
                            position: 'relative',
                          },
                          iconHighlight: {
                            position: 'absolute',
                            width: '24px',
                            height: '28px',
                            background: '#eee',
                            borderRadius: '4px',
                            top: '10px',
                            left: '12px',
                            display: 'none',
                          },
                          input: {
                            fontSize: '11px',
                            color: '#333',
                            width: '100%',
                            borderRadius: '2px',
                            border: 'none',
                            boxShadow: 'inset 0 0 0 1px #dadada',
                            height: '21px',
                            textAlign: 'center',
                          },
                          label: {
                            textTransform: 'uppercase',
                            fontSize: '11px',
                            lineHeight: '11px',
                            color: '#969696',
                            textAlign: 'center',
                            display: 'block',
                            marginTop: '12px',
                          },
                          svg: {
                            fill: '#333',
                            width: '24px',
                            height: '24px',
                            border: '1px transparent solid',
                            borderRadius: '5px',
                          },
                        },
                        disableAlpha: { alpha: { display: 'none' } },
                      },
                      this.props,
                      this.state
                    ),
                    r = void 0;
                  return (
                    'hex' === this.state.view
                      ? (r = a.a.createElement(
                          'div',
                          { style: t.fields, className: 'flexbox-fix' },
                          a.a.createElement(
                            'div',
                            { style: t.field },
                            a.a.createElement(w, {
                              style: { input: t.input, label: t.label },
                              label: 'hex',
                              value: this.props.hex,
                              onChange: this.handleChange,
                            })
                          )
                        ))
                      : 'rgb' === this.state.view
                        ? (r = a.a.createElement(
                            'div',
                            { style: t.fields, className: 'flexbox-fix' },
                            a.a.createElement(
                              'div',
                              { style: t.field },
                              a.a.createElement(w, {
                                style: { input: t.input, label: t.label },
                                label: 'r',
                                value: this.props.rgb.r,
                                onChange: this.handleChange,
                              })
                            ),
                            a.a.createElement(
                              'div',
                              { style: t.field },
                              a.a.createElement(w, {
                                style: { input: t.input, label: t.label },
                                label: 'g',
                                value: this.props.rgb.g,
                                onChange: this.handleChange,
                              })
                            ),
                            a.a.createElement(
                              'div',
                              { style: t.field },
                              a.a.createElement(w, {
                                style: { input: t.input, label: t.label },
                                label: 'b',
                                value: this.props.rgb.b,
                                onChange: this.handleChange,
                              })
                            ),
                            a.a.createElement(
                              'div',
                              { style: t.alpha },
                              a.a.createElement(w, {
                                style: { input: t.input, label: t.label },
                                label: 'a',
                                value: this.props.rgb.a,
                                arrowOffset: 0.01,
                                onChange: this.handleChange,
                              })
                            )
                          ))
                        : 'hsl' === this.state.view &&
                          (r = a.a.createElement(
                            'div',
                            { style: t.fields, className: 'flexbox-fix' },
                            a.a.createElement(
                              'div',
                              { style: t.field },
                              a.a.createElement(w, {
                                style: { input: t.input, label: t.label },
                                label: 'h',
                                value: Math.round(this.props.hsl.h),
                                onChange: this.handleChange,
                              })
                            ),
                            a.a.createElement(
                              'div',
                              { style: t.field },
                              a.a.createElement(w, {
                                style: { input: t.input, label: t.label },
                                label: 's',
                                value: Math.round(100 * this.props.hsl.s) + '%',
                                onChange: this.handleChange,
                              })
                            ),
                            a.a.createElement(
                              'div',
                              { style: t.field },
                              a.a.createElement(w, {
                                style: { input: t.input, label: t.label },
                                label: 'l',
                                value: Math.round(100 * this.props.hsl.l) + '%',
                                onChange: this.handleChange,
                              })
                            ),
                            a.a.createElement(
                              'div',
                              { style: t.alpha },
                              a.a.createElement(w, {
                                style: { input: t.input, label: t.label },
                                label: 'a',
                                value: this.props.hsl.a,
                                arrowOffset: 0.01,
                                onChange: this.handleChange,
                              })
                            )
                          )),
                    a.a.createElement(
                      'div',
                      { style: t.wrap, className: 'flexbox-fix' },
                      r,
                      a.a.createElement(
                        'div',
                        { style: t.toggle },
                        a.a.createElement(
                          'div',
                          {
                            style: t.icon,
                            onClick: this.toggleViews,
                            ref: function (t) {
                              return (e.icon = t);
                            },
                          },
                          a.a.createElement(Dt.a, {
                            style: t.svg,
                            onMouseOver: this.showHighlight,
                            onMouseEnter: this.showHighlight,
                            onMouseOut: this.hideHighlight,
                          })
                        )
                      )
                    )
                  );
                },
              },
            ],
            [
              {
                key: 'getDerivedStateFromProps',
                value: function (e, t) {
                  return 1 !== e.hsl.a && 'hex' === t.view
                    ? { view: 'rgb' }
                    : null;
                },
              },
            ]
          ),
          t
        );
      })(a.a.Component);
      Nt.defaultProps = { view: 'hex' };
      var Gt = Nt,
        Ut = function () {
          var e = i()({
            default: {
              picker: {
                width: '12px',
                height: '12px',
                borderRadius: '6px',
                transform: 'translate(-6px, -1px)',
                backgroundColor: 'rgb(248, 248, 248)',
                boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
              },
            },
          });
          return a.a.createElement('div', { style: e.picker });
        },
        Wt = function () {
          var e = i()({
            default: {
              picker: {
                width: '12px',
                height: '12px',
                borderRadius: '6px',
                boxShadow: 'inset 0 0 0 1px #fff',
                transform: 'translate(-6px, -6px)',
              },
            },
          });
          return a.a.createElement('div', { style: e.picker });
        },
        Xt = function (e) {
          var t = e.width,
            r = e.onChange,
            n = e.disableAlpha,
            o = e.rgb,
            l = e.hsl,
            s = e.hsv,
            c = e.hex,
            p = e.renderers,
            u = e.styles,
            h = void 0 === u ? {} : u,
            d = e.className,
            b = void 0 === d ? '' : d,
            g = e.defaultView,
            x = i()(
              Te(
                {
                  default: {
                    picker: {
                      width: t,
                      background: '#fff',
                      borderRadius: '2px',
                      boxShadow:
                        '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
                      boxSizing: 'initial',
                      fontFamily: 'Menlo',
                    },
                    saturation: {
                      width: '100%',
                      paddingBottom: '55%',
                      position: 'relative',
                      borderRadius: '2px 2px 0 0',
                      overflow: 'hidden',
                    },
                    Saturation: { radius: '2px 2px 0 0' },
                    body: { padding: '16px 16px 12px' },
                    controls: { display: 'flex' },
                    color: { width: '32px' },
                    swatch: {
                      marginTop: '6px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '8px',
                      position: 'relative',
                      overflow: 'hidden',
                    },
                    active: {
                      absolute: '0px 0px 0px 0px',
                      borderRadius: '8px',
                      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
                      background:
                        'rgba(' +
                        o.r +
                        ', ' +
                        o.g +
                        ', ' +
                        o.b +
                        ', ' +
                        o.a +
                        ')',
                      zIndex: '2',
                    },
                    toggles: { flex: '1' },
                    hue: {
                      height: '10px',
                      position: 'relative',
                      marginBottom: '8px',
                    },
                    Hue: { radius: '2px' },
                    alpha: { height: '10px', position: 'relative' },
                    Alpha: { radius: '2px' },
                  },
                  disableAlpha: {
                    color: { width: '22px' },
                    alpha: { display: 'none' },
                    hue: { marginBottom: '0px' },
                    swatch: { width: '10px', height: '10px', marginTop: '0px' },
                  },
                },
                h
              ),
              { disableAlpha: n }
            );
          return a.a.createElement(
            'div',
            { style: x.picker, className: 'chrome-picker ' + b },
            a.a.createElement(
              'div',
              { style: x.saturation },
              a.a.createElement(Xe, {
                style: x.Saturation,
                hsl: l,
                hsv: s,
                pointer: Wt,
                onChange: r,
              })
            ),
            a.a.createElement(
              'div',
              { style: x.body },
              a.a.createElement(
                'div',
                { style: x.controls, className: 'flexbox-fix' },
                a.a.createElement(
                  'div',
                  { style: x.color },
                  a.a.createElement(
                    'div',
                    { style: x.swatch },
                    a.a.createElement('div', { style: x.active }),
                    a.a.createElement(f, { renderers: p })
                  )
                ),
                a.a.createElement(
                  'div',
                  { style: x.toggles },
                  a.a.createElement(
                    'div',
                    { style: x.hue },
                    a.a.createElement(_, {
                      style: x.Hue,
                      hsl: l,
                      pointer: Ut,
                      onChange: r,
                    })
                  ),
                  a.a.createElement(
                    'div',
                    { style: x.alpha },
                    a.a.createElement(v, {
                      style: x.Alpha,
                      rgb: o,
                      hsl: l,
                      pointer: Ut,
                      renderers: p,
                      onChange: r,
                    })
                  )
                )
              ),
              a.a.createElement(Gt, {
                rgb: o,
                hsl: l,
                hex: c,
                view: g,
                onChange: r,
                disableAlpha: n,
              })
            )
          );
        };
      (Xt.propTypes = {
        width: j.a.oneOfType([j.a.string, j.a.number]),
        disableAlpha: j.a.bool,
        styles: j.a.object,
        defaultView: j.a.oneOf(['hex', 'rgb', 'hsl']),
      }),
        (Xt.defaultProps = { width: 225, disableAlpha: !1, styles: {} });
      tt(Xt);
      var It = function (e) {
          var t = e.color,
            r = e.onClick,
            n = void 0 === r ? function () {} : r,
            o = e.onSwatchHover,
            l = e.active,
            s = i()(
              {
                default: {
                  color: {
                    background: t,
                    width: '15px',
                    height: '15px',
                    float: 'left',
                    marginRight: '5px',
                    marginBottom: '5px',
                    position: 'relative',
                    cursor: 'pointer',
                  },
                  dot: {
                    absolute: '5px 5px 5px 5px',
                    background: Je(t),
                    borderRadius: '50%',
                    opacity: '0',
                  },
                },
                active: { dot: { opacity: '1' } },
                'color-#FFFFFF': {
                  color: { boxShadow: 'inset 0 0 0 1px #ddd' },
                  dot: { background: '#000' },
                },
                transparent: { dot: { background: '#000' } },
              },
              {
                active: l,
                'color-#FFFFFF': '#FFFFFF' === t,
                transparent: 'transparent' === t,
              }
            );
          return a.a.createElement(
            st,
            {
              style: s.color,
              color: t,
              onClick: n,
              onHover: o,
              focusStyle: { boxShadow: '0 0 4px ' + t },
            },
            a.a.createElement('div', { style: s.dot })
          );
        },
        Vt = function (e) {
          var t = e.hex,
            r = e.rgb,
            n = e.onChange,
            o = i()({
              default: {
                fields: {
                  display: 'flex',
                  paddingBottom: '6px',
                  paddingRight: '5px',
                  position: 'relative',
                },
                active: {
                  position: 'absolute',
                  top: '6px',
                  left: '5px',
                  height: '9px',
                  width: '9px',
                  background: t,
                },
                HEXwrap: { flex: '6', position: 'relative' },
                HEXinput: {
                  width: '80%',
                  padding: '0px',
                  paddingLeft: '20%',
                  border: 'none',
                  outline: 'none',
                  background: 'none',
                  fontSize: '12px',
                  color: '#333',
                  height: '16px',
                },
                HEXlabel: { display: 'none' },
                RGBwrap: { flex: '3', position: 'relative' },
                RGBinput: {
                  width: '70%',
                  padding: '0px',
                  paddingLeft: '30%',
                  border: 'none',
                  outline: 'none',
                  background: 'none',
                  fontSize: '12px',
                  color: '#333',
                  height: '16px',
                },
                RGBlabel: {
                  position: 'absolute',
                  top: '3px',
                  left: '0px',
                  lineHeight: '16px',
                  textTransform: 'uppercase',
                  fontSize: '12px',
                  color: '#999',
                },
              },
            }),
            l = function (e, t) {
              e.r || e.g || e.b
                ? n(
                    {
                      r: e.r || r.r,
                      g: e.g || r.g,
                      b: e.b || r.b,
                      source: 'rgb',
                    },
                    t
                  )
                : n({ hex: e.hex, source: 'hex' }, t);
            };
          return a.a.createElement(
            'div',
            { style: o.fields, className: 'flexbox-fix' },
            a.a.createElement('div', { style: o.active }),
            a.a.createElement(w, {
              style: { wrap: o.HEXwrap, input: o.HEXinput, label: o.HEXlabel },
              label: 'hex',
              value: t,
              onChange: l,
            }),
            a.a.createElement(w, {
              style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
              label: 'r',
              value: r.r,
              onChange: l,
            }),
            a.a.createElement(w, {
              style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
              label: 'g',
              value: r.g,
              onChange: l,
            }),
            a.a.createElement(w, {
              style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
              label: 'b',
              value: r.b,
              onChange: l,
            })
          );
        },
        Yt = function (e) {
          var t = e.onChange,
            r = e.onSwatchHover,
            n = e.colors,
            o = e.hex,
            l = e.rgb,
            s = e.styles,
            c = void 0 === s ? {} : s,
            p = e.className,
            u = void 0 === p ? '' : p,
            f = i()(
              Te(
                {
                  default: {
                    Compact: { background: '#f6f6f6', radius: '4px' },
                    compact: {
                      paddingTop: '5px',
                      paddingLeft: '5px',
                      boxSizing: 'initial',
                      width: '240px',
                    },
                    clear: { clear: 'both' },
                  },
                },
                c
              )
            ),
            h = function (e, r) {
              e.hex
                ? $e(e.hex) && t({ hex: e.hex, source: 'hex' }, r)
                : t(e, r);
            };
          return a.a.createElement(
            Pe,
            { style: f.Compact, styles: c },
            a.a.createElement(
              'div',
              { style: f.compact, className: 'compact-picker ' + u },
              a.a.createElement(
                'div',
                null,
                ft(n, function (e) {
                  return a.a.createElement(It, {
                    key: e,
                    color: e,
                    active: e.toLowerCase() === o,
                    onClick: h,
                    onSwatchHover: r,
                  });
                }),
                a.a.createElement('div', { style: f.clear })
              ),
              a.a.createElement(Vt, { hex: o, rgb: l, onChange: h })
            )
          );
        };
      (Yt.propTypes = { colors: j.a.arrayOf(j.a.string), styles: j.a.object }),
        (Yt.defaultProps = {
          colors: [
            '#4D4D4D',
            '#999999',
            '#FFFFFF',
            '#F44E3B',
            '#FE9200',
            '#FCDC00',
            '#DBDF00',
            '#A4DD00',
            '#68CCCA',
            '#73D8FF',
            '#AEA1FF',
            '#FDA1FF',
            '#333333',
            '#808080',
            '#cccccc',
            '#D33115',
            '#E27300',
            '#FCC400',
            '#B0BC00',
            '#68BC00',
            '#16A5A5',
            '#009CE0',
            '#7B64FF',
            '#FA28FF',
            '#000000',
            '#666666',
            '#B3B3B3',
            '#9F0500',
            '#C45100',
            '#FB9E00',
            '#808900',
            '#194D33',
            '#0C797D',
            '#0062B1',
            '#653294',
            '#AB149E',
          ],
          styles: {},
        });
      tt(Yt);
      var qt = Object(o.handleHover)(function (e) {
          var t = e.hover,
            r = e.color,
            n = e.onClick,
            o = e.onSwatchHover,
            l = {
              position: 'relative',
              zIndex: '2',
              outline: '2px solid #fff',
              boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)',
            },
            s = i()(
              {
                default: {
                  swatch: { width: '25px', height: '25px', fontSize: '0' },
                },
                hover: { swatch: l },
              },
              { hover: t }
            );
          return a.a.createElement(
            'div',
            { style: s.swatch },
            a.a.createElement(st, {
              color: r,
              onClick: n,
              onHover: o,
              focusStyle: l,
            })
          );
        }),
        Kt = function (e) {
          var t = e.width,
            r = e.colors,
            n = e.onChange,
            o = e.onSwatchHover,
            l = e.triangle,
            s = e.styles,
            c = void 0 === s ? {} : s,
            p = e.className,
            u = void 0 === p ? '' : p,
            f = i()(
              Te(
                {
                  default: {
                    card: {
                      width: t,
                      background: '#fff',
                      border: '1px solid rgba(0,0,0,0.2)',
                      boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
                      borderRadius: '4px',
                      position: 'relative',
                      padding: '5px',
                      display: 'flex',
                      flexWrap: 'wrap',
                    },
                    triangle: {
                      position: 'absolute',
                      border: '7px solid transparent',
                      borderBottomColor: '#fff',
                    },
                    triangleShadow: {
                      position: 'absolute',
                      border: '8px solid transparent',
                      borderBottomColor: 'rgba(0,0,0,0.15)',
                    },
                  },
                  'hide-triangle': {
                    triangle: { display: 'none' },
                    triangleShadow: { display: 'none' },
                  },
                  'top-left-triangle': {
                    triangle: { top: '-14px', left: '10px' },
                    triangleShadow: { top: '-16px', left: '9px' },
                  },
                  'top-right-triangle': {
                    triangle: { top: '-14px', right: '10px' },
                    triangleShadow: { top: '-16px', right: '9px' },
                  },
                  'bottom-left-triangle': {
                    triangle: {
                      top: '35px',
                      left: '10px',
                      transform: 'rotate(180deg)',
                    },
                    triangleShadow: {
                      top: '37px',
                      left: '9px',
                      transform: 'rotate(180deg)',
                    },
                  },
                  'bottom-right-triangle': {
                    triangle: {
                      top: '35px',
                      right: '10px',
                      transform: 'rotate(180deg)',
                    },
                    triangleShadow: {
                      top: '37px',
                      right: '9px',
                      transform: 'rotate(180deg)',
                    },
                  },
                },
                c
              ),
              {
                'hide-triangle': 'hide' === l,
                'top-left-triangle': 'top-left' === l,
                'top-right-triangle': 'top-right' === l,
                'bottom-left-triangle': 'bottom-left' === l,
                'bottom-right-triangle': 'bottom-right' === l,
              }
            ),
            h = function (e, t) {
              return n({ hex: e, source: 'hex' }, t);
            };
          return a.a.createElement(
            'div',
            { style: f.card, className: 'github-picker ' + u },
            a.a.createElement('div', { style: f.triangleShadow }),
            a.a.createElement('div', { style: f.triangle }),
            ft(r, function (e) {
              return a.a.createElement(qt, {
                color: e,
                key: e,
                onClick: h,
                onSwatchHover: o,
              });
            })
          );
        };
      (Kt.propTypes = {
        width: j.a.oneOfType([j.a.string, j.a.number]),
        colors: j.a.arrayOf(j.a.string),
        triangle: j.a.oneOf([
          'hide',
          'top-left',
          'top-right',
          'bottom-left',
          'bottom-right',
        ]),
        styles: j.a.object,
      }),
        (Kt.defaultProps = {
          width: 200,
          colors: [
            '#B80000',
            '#DB3E00',
            '#FCCB00',
            '#008B02',
            '#006B76',
            '#1273DE',
            '#004DCF',
            '#5300EB',
            '#EB9694',
            '#FAD0C3',
            '#FEF3BD',
            '#C1E1C5',
            '#BEDADC',
            '#C4DEF6',
            '#BED3F3',
            '#D4C4FB',
          ],
          triangle: 'top-left',
          styles: {},
        });
      tt(Kt);
      var $t = function (e) {
          var t = e.direction,
            r = i()(
              {
                default: {
                  picker: {
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    transform: 'translate(-9px, -1px)',
                    backgroundColor: 'rgb(248, 248, 248)',
                    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
                  },
                },
                vertical: { picker: { transform: 'translate(-3px, -9px)' } },
              },
              { vertical: 'vertical' === t }
            );
          return a.a.createElement('div', { style: r.picker });
        },
        Jt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        Zt = function (e) {
          var t = e.width,
            r = e.height,
            n = e.onChange,
            o = e.hsl,
            l = e.direction,
            s = e.pointer,
            c = e.styles,
            p = void 0 === c ? {} : c,
            u = e.className,
            f = void 0 === u ? '' : u,
            h = i()(
              Te(
                {
                  default: {
                    picker: { position: 'relative', width: t, height: r },
                    hue: { radius: '2px' },
                  },
                },
                p
              )
            );
          return a.a.createElement(
            'div',
            { style: h.picker, className: 'hue-picker ' + f },
            a.a.createElement(
              _,
              Jt({}, h.hue, {
                hsl: o,
                pointer: s,
                onChange: function (e) {
                  return n({ a: 1, h: e.h, l: 0.5, s: 1 });
                },
                direction: l,
              })
            )
          );
        };
      (Zt.propTypes = { styles: j.a.object }),
        (Zt.defaultProps = {
          width: '316px',
          height: '16px',
          direction: 'horizontal',
          pointer: $t,
          styles: {},
        });
      tt(Zt),
        tt(function (e) {
          var t = e.onChange,
            r = e.hex,
            n = e.rgb,
            o = e.styles,
            l = void 0 === o ? {} : o,
            s = e.className,
            c = void 0 === s ? '' : s,
            p = i()(
              Te(
                {
                  default: {
                    material: {
                      width: '98px',
                      height: '98px',
                      padding: '16px',
                      fontFamily: 'Roboto',
                    },
                    HEXwrap: { position: 'relative' },
                    HEXinput: {
                      width: '100%',
                      marginTop: '12px',
                      fontSize: '15px',
                      color: '#333',
                      padding: '0px',
                      border: '0px',
                      borderBottom: '2px solid ' + r,
                      outline: 'none',
                      height: '30px',
                    },
                    HEXlabel: {
                      position: 'absolute',
                      top: '0px',
                      left: '0px',
                      fontSize: '11px',
                      color: '#999999',
                      textTransform: 'capitalize',
                    },
                    Hex: { style: {} },
                    RGBwrap: { position: 'relative' },
                    RGBinput: {
                      width: '100%',
                      marginTop: '12px',
                      fontSize: '15px',
                      color: '#333',
                      padding: '0px',
                      border: '0px',
                      borderBottom: '1px solid #eee',
                      outline: 'none',
                      height: '30px',
                    },
                    RGBlabel: {
                      position: 'absolute',
                      top: '0px',
                      left: '0px',
                      fontSize: '11px',
                      color: '#999999',
                      textTransform: 'capitalize',
                    },
                    split: {
                      display: 'flex',
                      marginRight: '-10px',
                      paddingTop: '11px',
                    },
                    third: { flex: '1', paddingRight: '10px' },
                  },
                },
                l
              )
            ),
            u = function (e, r) {
              e.hex
                ? $e(e.hex) && t({ hex: e.hex, source: 'hex' }, r)
                : (e.r || e.g || e.b) &&
                  t(
                    {
                      r: e.r || n.r,
                      g: e.g || n.g,
                      b: e.b || n.b,
                      source: 'rgb',
                    },
                    r
                  );
            };
          return a.a.createElement(
            Pe,
            { styles: l },
            a.a.createElement(
              'div',
              { style: p.material, className: 'material-picker ' + c },
              a.a.createElement(w, {
                style: {
                  wrap: p.HEXwrap,
                  input: p.HEXinput,
                  label: p.HEXlabel,
                },
                label: 'hex',
                value: r,
                onChange: u,
              }),
              a.a.createElement(
                'div',
                { style: p.split, className: 'flexbox-fix' },
                a.a.createElement(
                  'div',
                  { style: p.third },
                  a.a.createElement(w, {
                    style: {
                      wrap: p.RGBwrap,
                      input: p.RGBinput,
                      label: p.RGBlabel,
                    },
                    label: 'r',
                    value: n.r,
                    onChange: u,
                  })
                ),
                a.a.createElement(
                  'div',
                  { style: p.third },
                  a.a.createElement(w, {
                    style: {
                      wrap: p.RGBwrap,
                      input: p.RGBinput,
                      label: p.RGBlabel,
                    },
                    label: 'g',
                    value: n.g,
                    onChange: u,
                  })
                ),
                a.a.createElement(
                  'div',
                  { style: p.third },
                  a.a.createElement(w, {
                    style: {
                      wrap: p.RGBwrap,
                      input: p.RGBinput,
                      label: p.RGBlabel,
                    },
                    label: 'b',
                    value: n.b,
                    onChange: u,
                  })
                )
              )
            )
          );
        });
      var Qt = function (e) {
          var t = e.onChange,
            r = e.rgb,
            n = e.hsv,
            o = e.hex,
            l = i()({
              default: {
                fields: {
                  paddingTop: '5px',
                  paddingBottom: '9px',
                  width: '80px',
                  position: 'relative',
                },
                divider: { height: '5px' },
                RGBwrap: { position: 'relative' },
                RGBinput: {
                  marginLeft: '40%',
                  width: '40%',
                  height: '18px',
                  border: '1px solid #888888',
                  boxShadow:
                    'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
                  marginBottom: '5px',
                  fontSize: '13px',
                  paddingLeft: '3px',
                  marginRight: '10px',
                },
                RGBlabel: {
                  left: '0px',
                  top: '0px',
                  width: '34px',
                  textTransform: 'uppercase',
                  fontSize: '13px',
                  height: '18px',
                  lineHeight: '22px',
                  position: 'absolute',
                },
                HEXwrap: { position: 'relative' },
                HEXinput: {
                  marginLeft: '20%',
                  width: '80%',
                  height: '18px',
                  border: '1px solid #888888',
                  boxShadow:
                    'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
                  marginBottom: '6px',
                  fontSize: '13px',
                  paddingLeft: '3px',
                },
                HEXlabel: {
                  position: 'absolute',
                  top: '0px',
                  left: '0px',
                  width: '14px',
                  textTransform: 'uppercase',
                  fontSize: '13px',
                  height: '18px',
                  lineHeight: '22px',
                },
                fieldSymbols: {
                  position: 'absolute',
                  top: '5px',
                  right: '-7px',
                  fontSize: '13px',
                },
                symbol: {
                  height: '20px',
                  lineHeight: '22px',
                  paddingBottom: '7px',
                },
              },
            }),
            s = function (e, a) {
              e['#']
                ? $e(e['#']) && t({ hex: e['#'], source: 'hex' }, a)
                : e.r || e.g || e.b
                  ? t(
                      {
                        r: e.r || r.r,
                        g: e.g || r.g,
                        b: e.b || r.b,
                        source: 'rgb',
                      },
                      a
                    )
                  : (e.h || e.s || e.v) &&
                    t(
                      {
                        h: e.h || n.h,
                        s: e.s || n.s,
                        v: e.v || n.v,
                        source: 'hsv',
                      },
                      a
                    );
            };
          return a.a.createElement(
            'div',
            { style: l.fields },
            a.a.createElement(w, {
              style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
              label: 'h',
              value: Math.round(n.h),
              onChange: s,
            }),
            a.a.createElement(w, {
              style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
              label: 's',
              value: Math.round(100 * n.s),
              onChange: s,
            }),
            a.a.createElement(w, {
              style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
              label: 'v',
              value: Math.round(100 * n.v),
              onChange: s,
            }),
            a.a.createElement('div', { style: l.divider }),
            a.a.createElement(w, {
              style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
              label: 'r',
              value: r.r,
              onChange: s,
            }),
            a.a.createElement(w, {
              style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
              label: 'g',
              value: r.g,
              onChange: s,
            }),
            a.a.createElement(w, {
              style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
              label: 'b',
              value: r.b,
              onChange: s,
            }),
            a.a.createElement('div', { style: l.divider }),
            a.a.createElement(w, {
              style: { wrap: l.HEXwrap, input: l.HEXinput, label: l.HEXlabel },
              label: '#',
              value: o.replace('#', ''),
              onChange: s,
            }),
            a.a.createElement(
              'div',
              { style: l.fieldSymbols },
              a.a.createElement('div', { style: l.symbol }, '°'),
              a.a.createElement('div', { style: l.symbol }, '%'),
              a.a.createElement('div', { style: l.symbol }, '%')
            )
          );
        },
        er = function (e) {
          var t = e.hsl,
            r = i()(
              {
                default: {
                  picker: {
                    width: '12px',
                    height: '12px',
                    borderRadius: '6px',
                    boxShadow: 'inset 0 0 0 1px #fff',
                    transform: 'translate(-6px, -6px)',
                  },
                },
                'black-outline': {
                  picker: { boxShadow: 'inset 0 0 0 1px #000' },
                },
              },
              { 'black-outline': t.l > 0.5 }
            );
          return a.a.createElement('div', { style: r.picker });
        },
        tr = function () {
          var e = i()({
            default: {
              triangle: {
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '4px 0 4px 6px',
                borderColor: 'transparent transparent transparent #fff',
                position: 'absolute',
                top: '1px',
                left: '1px',
              },
              triangleBorder: {
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '5px 0 5px 8px',
                borderColor: 'transparent transparent transparent #555',
              },
              left: {
                Extend: 'triangleBorder',
                transform: 'translate(-13px, -4px)',
              },
              leftInside: {
                Extend: 'triangle',
                transform: 'translate(-8px, -5px)',
              },
              right: {
                Extend: 'triangleBorder',
                transform: 'translate(20px, -14px) rotate(180deg)',
              },
              rightInside: {
                Extend: 'triangle',
                transform: 'translate(-8px, -5px)',
              },
            },
          });
          return a.a.createElement(
            'div',
            { style: e.pointer },
            a.a.createElement(
              'div',
              { style: e.left },
              a.a.createElement('div', { style: e.leftInside })
            ),
            a.a.createElement(
              'div',
              { style: e.right },
              a.a.createElement('div', { style: e.rightInside })
            )
          );
        },
        rr = function (e) {
          var t = e.onClick,
            r = e.label,
            n = e.children,
            o = e.active,
            l = i()(
              {
                default: {
                  button: {
                    backgroundImage:
                      'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
                    border: '1px solid #878787',
                    borderRadius: '2px',
                    height: '20px',
                    boxShadow: '0 1px 0 0 #EAEAEA',
                    fontSize: '14px',
                    color: '#000',
                    lineHeight: '20px',
                    textAlign: 'center',
                    marginBottom: '10px',
                    cursor: 'pointer',
                  },
                },
                active: { button: { boxShadow: '0 0 0 1px #878787' } },
              },
              { active: o }
            );
          return a.a.createElement(
            'div',
            { style: l.button, onClick: t },
            r || n
          );
        },
        nr = function (e) {
          var t = e.rgb,
            r = e.currentColor,
            n = i()({
              default: {
                swatches: {
                  border: '1px solid #B3B3B3',
                  borderBottom: '1px solid #F0F0F0',
                  marginBottom: '2px',
                  marginTop: '1px',
                },
                new: {
                  height: '34px',
                  background: 'rgb(' + t.r + ',' + t.g + ', ' + t.b + ')',
                  boxShadow:
                    'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000',
                },
                current: {
                  height: '34px',
                  background: r,
                  boxShadow:
                    'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000',
                },
                label: { fontSize: '14px', color: '#000', textAlign: 'center' },
              },
            });
          return a.a.createElement(
            'div',
            null,
            a.a.createElement('div', { style: n.label }, 'new'),
            a.a.createElement(
              'div',
              { style: n.swatches },
              a.a.createElement('div', { style: n.new }),
              a.a.createElement('div', { style: n.current })
            ),
            a.a.createElement('div', { style: n.label }, 'current')
          );
        },
        ar = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })();
      var or = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var r = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (r.state = { currentColor: e.hex }), r;
        }
        return (
          (function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          ar(t, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.styles,
                  r = void 0 === t ? {} : t,
                  n = e.className,
                  o = void 0 === n ? '' : n,
                  l = i()(
                    Te(
                      {
                        default: {
                          picker: {
                            background: '#DCDCDC',
                            borderRadius: '4px',
                            boxShadow:
                              '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
                            boxSizing: 'initial',
                            width: '513px',
                          },
                          head: {
                            backgroundImage:
                              'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
                            borderBottom: '1px solid #B1B1B1',
                            boxShadow:
                              'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
                            height: '23px',
                            lineHeight: '24px',
                            borderRadius: '4px 4px 0 0',
                            fontSize: '13px',
                            color: '#4D4D4D',
                            textAlign: 'center',
                          },
                          body: { padding: '15px 15px 0', display: 'flex' },
                          saturation: {
                            width: '256px',
                            height: '256px',
                            position: 'relative',
                            border: '2px solid #B3B3B3',
                            borderBottom: '2px solid #F0F0F0',
                            overflow: 'hidden',
                          },
                          hue: {
                            position: 'relative',
                            height: '256px',
                            width: '19px',
                            marginLeft: '10px',
                            border: '2px solid #B3B3B3',
                            borderBottom: '2px solid #F0F0F0',
                          },
                          controls: { width: '180px', marginLeft: '10px' },
                          top: { display: 'flex' },
                          previews: { width: '60px' },
                          actions: { flex: '1', marginLeft: '20px' },
                        },
                      },
                      r
                    )
                  );
                return a.a.createElement(
                  'div',
                  { style: l.picker, className: 'photoshop-picker ' + o },
                  a.a.createElement(
                    'div',
                    { style: l.head },
                    this.props.header
                  ),
                  a.a.createElement(
                    'div',
                    { style: l.body, className: 'flexbox-fix' },
                    a.a.createElement(
                      'div',
                      { style: l.saturation },
                      a.a.createElement(Xe, {
                        hsl: this.props.hsl,
                        hsv: this.props.hsv,
                        pointer: er,
                        onChange: this.props.onChange,
                      })
                    ),
                    a.a.createElement(
                      'div',
                      { style: l.hue },
                      a.a.createElement(_, {
                        direction: 'vertical',
                        hsl: this.props.hsl,
                        pointer: tr,
                        onChange: this.props.onChange,
                      })
                    ),
                    a.a.createElement(
                      'div',
                      { style: l.controls },
                      a.a.createElement(
                        'div',
                        { style: l.top, className: 'flexbox-fix' },
                        a.a.createElement(
                          'div',
                          { style: l.previews },
                          a.a.createElement(nr, {
                            rgb: this.props.rgb,
                            currentColor: this.state.currentColor,
                          })
                        ),
                        a.a.createElement(
                          'div',
                          { style: l.actions },
                          a.a.createElement(rr, {
                            label: 'OK',
                            onClick: this.props.onAccept,
                            active: !0,
                          }),
                          a.a.createElement(rr, {
                            label: 'Cancel',
                            onClick: this.props.onCancel,
                          }),
                          a.a.createElement(Qt, {
                            onChange: this.props.onChange,
                            rgb: this.props.rgb,
                            hsv: this.props.hsv,
                            hex: this.props.hex,
                          })
                        )
                      )
                    )
                  )
                );
              },
            },
          ]),
          t
        );
      })(a.a.Component);
      (or.propTypes = { header: j.a.string, styles: j.a.object }),
        (or.defaultProps = { header: 'Color Picker', styles: {} });
      tt(or);
      var ir = function (e) {
          var t = e.onChange,
            r = e.rgb,
            n = e.hsl,
            o = e.hex,
            l = e.disableAlpha,
            s = i()(
              {
                default: {
                  fields: { display: 'flex', paddingTop: '4px' },
                  single: { flex: '1', paddingLeft: '6px' },
                  alpha: { flex: '1', paddingLeft: '6px' },
                  double: { flex: '2' },
                  input: {
                    width: '80%',
                    padding: '4px 10% 3px',
                    border: 'none',
                    boxShadow: 'inset 0 0 0 1px #ccc',
                    fontSize: '11px',
                  },
                  label: {
                    display: 'block',
                    textAlign: 'center',
                    fontSize: '11px',
                    color: '#222',
                    paddingTop: '3px',
                    paddingBottom: '4px',
                    textTransform: 'capitalize',
                  },
                },
                disableAlpha: { alpha: { display: 'none' } },
              },
              { disableAlpha: l }
            ),
            c = function (e, a) {
              e.hex
                ? $e(e.hex) && t({ hex: e.hex, source: 'hex' }, a)
                : e.r || e.g || e.b
                  ? t(
                      {
                        r: e.r || r.r,
                        g: e.g || r.g,
                        b: e.b || r.b,
                        a: r.a,
                        source: 'rgb',
                      },
                      a
                    )
                  : e.a &&
                    (e.a < 0 ? (e.a = 0) : e.a > 100 && (e.a = 100),
                    (e.a /= 100),
                    t({ h: n.h, s: n.s, l: n.l, a: e.a, source: 'rgb' }, a));
            };
          return a.a.createElement(
            'div',
            { style: s.fields, className: 'flexbox-fix' },
            a.a.createElement(
              'div',
              { style: s.double },
              a.a.createElement(w, {
                style: { input: s.input, label: s.label },
                label: 'hex',
                value: o.replace('#', ''),
                onChange: c,
              })
            ),
            a.a.createElement(
              'div',
              { style: s.single },
              a.a.createElement(w, {
                style: { input: s.input, label: s.label },
                label: 'r',
                value: r.r,
                onChange: c,
                dragLabel: 'true',
                dragMax: '255',
              })
            ),
            a.a.createElement(
              'div',
              { style: s.single },
              a.a.createElement(w, {
                style: { input: s.input, label: s.label },
                label: 'g',
                value: r.g,
                onChange: c,
                dragLabel: 'true',
                dragMax: '255',
              })
            ),
            a.a.createElement(
              'div',
              { style: s.single },
              a.a.createElement(w, {
                style: { input: s.input, label: s.label },
                label: 'b',
                value: r.b,
                onChange: c,
                dragLabel: 'true',
                dragMax: '255',
              })
            ),
            a.a.createElement(
              'div',
              { style: s.alpha },
              a.a.createElement(w, {
                style: { input: s.input, label: s.label },
                label: 'a',
                value: Math.round(100 * r.a),
                onChange: c,
                dragLabel: 'true',
                dragMax: '100',
              })
            )
          );
        },
        lr =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        sr = function (e) {
          var t = e.colors,
            r = e.onClick,
            n = void 0 === r ? function () {} : r,
            o = e.onSwatchHover,
            l = i()(
              {
                default: {
                  colors: {
                    margin: '0 -10px',
                    padding: '10px 0 0 10px',
                    borderTop: '1px solid #eee',
                    display: 'flex',
                    flexWrap: 'wrap',
                    position: 'relative',
                  },
                  swatchWrap: {
                    width: '16px',
                    height: '16px',
                    margin: '0 10px 10px 0',
                  },
                  swatch: {
                    borderRadius: '3px',
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
                  },
                },
                'no-presets': { colors: { display: 'none' } },
              },
              { 'no-presets': !t || !t.length }
            ),
            s = function (e, t) {
              n({ hex: e, source: 'hex' }, t);
            };
          return a.a.createElement(
            'div',
            { style: l.colors, className: 'flexbox-fix' },
            t.map(function (e) {
              var t = 'string' == typeof e ? { color: e } : e,
                r = '' + t.color + (t.title || '');
              return a.a.createElement(
                'div',
                { key: r, style: l.swatchWrap },
                a.a.createElement(
                  st,
                  lr({}, t, {
                    style: l.swatch,
                    onClick: s,
                    onHover: o,
                    focusStyle: {
                      boxShadow:
                        'inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ' + t.color,
                    },
                  })
                )
              );
            })
          );
        };
      sr.propTypes = {
        colors: j.a.arrayOf(
          j.a.oneOfType([
            j.a.string,
            j.a.shape({ color: j.a.string, title: j.a.string }),
          ])
        ).isRequired,
      };
      var cr = sr,
        pr =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        ur = function (e) {
          var t = e.width,
            r = e.rgb,
            n = e.hex,
            o = e.hsv,
            l = e.hsl,
            s = e.onChange,
            c = e.onSwatchHover,
            p = e.disableAlpha,
            u = e.presetColors,
            h = e.renderers,
            d = e.styles,
            b = void 0 === d ? {} : d,
            g = e.className,
            x = void 0 === g ? '' : g,
            y = i()(
              Te(
                {
                  default: pr(
                    {
                      picker: {
                        width: t,
                        padding: '10px 10px 0',
                        boxSizing: 'initial',
                        background: '#fff',
                        borderRadius: '4px',
                        boxShadow:
                          '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)',
                      },
                      saturation: {
                        width: '100%',
                        paddingBottom: '75%',
                        position: 'relative',
                        overflow: 'hidden',
                      },
                      Saturation: {
                        radius: '3px',
                        shadow:
                          'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
                      },
                      controls: { display: 'flex' },
                      sliders: { padding: '4px 0', flex: '1' },
                      color: {
                        width: '24px',
                        height: '24px',
                        position: 'relative',
                        marginTop: '4px',
                        marginLeft: '4px',
                        borderRadius: '3px',
                      },
                      activeColor: {
                        absolute: '0px 0px 0px 0px',
                        borderRadius: '2px',
                        background:
                          'rgba(' +
                          r.r +
                          ',' +
                          r.g +
                          ',' +
                          r.b +
                          ',' +
                          r.a +
                          ')',
                        boxShadow:
                          'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
                      },
                      hue: {
                        position: 'relative',
                        height: '10px',
                        overflow: 'hidden',
                      },
                      Hue: {
                        radius: '2px',
                        shadow:
                          'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
                      },
                      alpha: {
                        position: 'relative',
                        height: '10px',
                        marginTop: '4px',
                        overflow: 'hidden',
                      },
                      Alpha: {
                        radius: '2px',
                        shadow:
                          'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
                      },
                    },
                    b
                  ),
                  disableAlpha: {
                    color: { height: '10px' },
                    hue: { height: '10px' },
                    alpha: { display: 'none' },
                  },
                },
                b
              ),
              { disableAlpha: p }
            );
          return a.a.createElement(
            'div',
            { style: y.picker, className: 'sketch-picker ' + x },
            a.a.createElement(
              'div',
              { style: y.saturation },
              a.a.createElement(Xe, {
                style: y.Saturation,
                hsl: l,
                hsv: o,
                onChange: s,
              })
            ),
            a.a.createElement(
              'div',
              { style: y.controls, className: 'flexbox-fix' },
              a.a.createElement(
                'div',
                { style: y.sliders },
                a.a.createElement(
                  'div',
                  { style: y.hue },
                  a.a.createElement(_, { style: y.Hue, hsl: l, onChange: s })
                ),
                a.a.createElement(
                  'div',
                  { style: y.alpha },
                  a.a.createElement(v, {
                    style: y.Alpha,
                    rgb: r,
                    hsl: l,
                    renderers: h,
                    onChange: s,
                  })
                )
              ),
              a.a.createElement(
                'div',
                { style: y.color },
                a.a.createElement(f, null),
                a.a.createElement('div', { style: y.activeColor })
              )
            ),
            a.a.createElement(ir, {
              rgb: r,
              hsl: l,
              hex: n,
              onChange: s,
              disableAlpha: p,
            }),
            a.a.createElement(cr, { colors: u, onClick: s, onSwatchHover: c })
          );
        };
      (ur.propTypes = {
        disableAlpha: j.a.bool,
        width: j.a.oneOfType([j.a.string, j.a.number]),
        styles: j.a.object,
      }),
        (ur.defaultProps = {
          disableAlpha: !1,
          width: 200,
          styles: {},
          presetColors: [
            '#D0021B',
            '#F5A623',
            '#F8E71C',
            '#8B572A',
            '#7ED321',
            '#417505',
            '#BD10E0',
            '#9013FE',
            '#4A90E2',
            '#50E3C2',
            '#B8E986',
            '#000000',
            '#4A4A4A',
            '#9B9B9B',
            '#FFFFFF',
          ],
        });
      var fr = tt(ur),
        hr = function (e) {
          var t = e.hsl,
            r = e.offset,
            n = e.onClick,
            o = void 0 === n ? function () {} : n,
            l = e.active,
            s = e.first,
            c = e.last,
            p = i()(
              {
                default: {
                  swatch: {
                    height: '12px',
                    background: 'hsl(' + t.h + ', 50%, ' + 100 * r + '%)',
                    cursor: 'pointer',
                  },
                },
                first: { swatch: { borderRadius: '2px 0 0 2px' } },
                last: { swatch: { borderRadius: '0 2px 2px 0' } },
                active: {
                  swatch: {
                    transform: 'scaleY(1.8)',
                    borderRadius: '3.6px/2px',
                  },
                },
              },
              { active: l, first: s, last: c }
            );
          return a.a.createElement('div', {
            style: p.swatch,
            onClick: function (e) {
              return o({ h: t.h, s: 0.5, l: r, source: 'hsl' }, e);
            },
          });
        },
        dr = function (e) {
          var t = e.onClick,
            r = e.hsl,
            n = i()({
              default: {
                swatches: { marginTop: '20px' },
                swatch: {
                  boxSizing: 'border-box',
                  width: '20%',
                  paddingRight: '1px',
                  float: 'left',
                },
                clear: { clear: 'both' },
              },
            });
          return a.a.createElement(
            'div',
            { style: n.swatches },
            a.a.createElement(
              'div',
              { style: n.swatch },
              a.a.createElement(hr, {
                hsl: r,
                offset: '.80',
                active: Math.abs(r.l - 0.8) < 0.1 && Math.abs(r.s - 0.5) < 0.1,
                onClick: t,
                first: !0,
              })
            ),
            a.a.createElement(
              'div',
              { style: n.swatch },
              a.a.createElement(hr, {
                hsl: r,
                offset: '.65',
                active: Math.abs(r.l - 0.65) < 0.1 && Math.abs(r.s - 0.5) < 0.1,
                onClick: t,
              })
            ),
            a.a.createElement(
              'div',
              { style: n.swatch },
              a.a.createElement(hr, {
                hsl: r,
                offset: '.50',
                active: Math.abs(r.l - 0.5) < 0.1 && Math.abs(r.s - 0.5) < 0.1,
                onClick: t,
              })
            ),
            a.a.createElement(
              'div',
              { style: n.swatch },
              a.a.createElement(hr, {
                hsl: r,
                offset: '.35',
                active: Math.abs(r.l - 0.35) < 0.1 && Math.abs(r.s - 0.5) < 0.1,
                onClick: t,
              })
            ),
            a.a.createElement(
              'div',
              { style: n.swatch },
              a.a.createElement(hr, {
                hsl: r,
                offset: '.20',
                active: Math.abs(r.l - 0.2) < 0.1 && Math.abs(r.s - 0.5) < 0.1,
                onClick: t,
                last: !0,
              })
            ),
            a.a.createElement('div', { style: n.clear })
          );
        },
        br = function () {
          var e = i()({
            default: {
              picker: {
                width: '14px',
                height: '14px',
                borderRadius: '6px',
                transform: 'translate(-7px, -1px)',
                backgroundColor: 'rgb(248, 248, 248)',
                boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
              },
            },
          });
          return a.a.createElement('div', { style: e.picker });
        },
        gr = function (e) {
          var t = e.hsl,
            r = e.onChange,
            n = e.pointer,
            o = e.styles,
            l = void 0 === o ? {} : o,
            s = e.className,
            c = void 0 === s ? '' : s,
            p = i()(
              Te(
                {
                  default: {
                    hue: { height: '12px', position: 'relative' },
                    Hue: { radius: '2px' },
                  },
                },
                l
              )
            );
          return a.a.createElement(
            'div',
            { style: p.wrap || {}, className: 'slider-picker ' + c },
            a.a.createElement(
              'div',
              { style: p.hue },
              a.a.createElement(_, {
                style: p.Hue,
                hsl: t,
                pointer: n,
                onChange: r,
              })
            ),
            a.a.createElement(
              'div',
              { style: p.swatches },
              a.a.createElement(dr, { hsl: t, onClick: r })
            )
          );
        };
      (gr.propTypes = { styles: j.a.object }),
        (gr.defaultProps = { pointer: br, styles: {} });
      tt(gr);
      var vr = r(1653),
        xr = r.n(vr),
        yr = function (e) {
          var t = e.color,
            r = e.onClick,
            n = void 0 === r ? function () {} : r,
            o = e.onSwatchHover,
            l = e.first,
            s = e.last,
            c = e.active,
            p = i()(
              {
                default: {
                  color: {
                    width: '40px',
                    height: '24px',
                    cursor: 'pointer',
                    background: t,
                    marginBottom: '1px',
                  },
                  check: { color: Je(t), marginLeft: '8px', display: 'none' },
                },
                first: {
                  color: { overflow: 'hidden', borderRadius: '2px 2px 0 0' },
                },
                last: {
                  color: { overflow: 'hidden', borderRadius: '0 0 2px 2px' },
                },
                active: { check: { display: 'block' } },
                'color-#FFFFFF': {
                  color: { boxShadow: 'inset 0 0 0 1px #ddd' },
                  check: { color: '#333' },
                },
                transparent: { check: { color: '#333' } },
              },
              {
                first: l,
                last: s,
                active: c,
                'color-#FFFFFF': '#FFFFFF' === t,
                transparent: 'transparent' === t,
              }
            );
          return a.a.createElement(
            st,
            {
              color: t,
              style: p.color,
              onClick: n,
              onHover: o,
              focusStyle: { boxShadow: '0 0 4px ' + t },
            },
            a.a.createElement(
              'div',
              { style: p.check },
              a.a.createElement(xr.a, null)
            )
          );
        },
        mr = function (e) {
          var t = e.onClick,
            r = e.onSwatchHover,
            n = e.group,
            o = e.active,
            l = i()({
              default: {
                group: {
                  paddingBottom: '10px',
                  width: '40px',
                  float: 'left',
                  marginRight: '10px',
                },
              },
            });
          return a.a.createElement(
            'div',
            { style: l.group },
            ft(n, function (e, i) {
              return a.a.createElement(yr, {
                key: e,
                color: e,
                active: e.toLowerCase() === o,
                first: 0 === i,
                last: i === n.length - 1,
                onClick: t,
                onSwatchHover: r,
              });
            })
          );
        },
        wr = function (e) {
          var t = e.width,
            r = e.height,
            n = e.onChange,
            o = e.onSwatchHover,
            l = e.colors,
            s = e.hex,
            c = e.styles,
            p = void 0 === c ? {} : c,
            u = e.className,
            f = void 0 === u ? '' : u,
            h = i()(
              Te(
                {
                  default: {
                    picker: { width: t, height: r },
                    overflow: { height: r, overflowY: 'scroll' },
                    body: { padding: '16px 0 6px 16px' },
                    clear: { clear: 'both' },
                  },
                },
                p
              )
            ),
            d = function (e, t) {
              return n({ hex: e, source: 'hex' }, t);
            };
          return a.a.createElement(
            'div',
            { style: h.picker, className: 'swatches-picker ' + f },
            a.a.createElement(
              Pe,
              null,
              a.a.createElement(
                'div',
                { style: h.overflow },
                a.a.createElement(
                  'div',
                  { style: h.body },
                  ft(l, function (e) {
                    return a.a.createElement(mr, {
                      key: e.toString(),
                      group: e,
                      active: s,
                      onClick: d,
                      onSwatchHover: o,
                    });
                  }),
                  a.a.createElement('div', { style: h.clear })
                )
              )
            )
          );
        };
      (wr.propTypes = {
        width: j.a.oneOfType([j.a.string, j.a.number]),
        height: j.a.oneOfType([j.a.string, j.a.number]),
        colors: j.a.arrayOf(j.a.arrayOf(j.a.string)),
        styles: j.a.object,
      }),
        (wr.defaultProps = {
          width: 320,
          height: 240,
          colors: [
            [bt[900], bt[700], bt[500], bt[300], bt[100]],
            [gt[900], gt[700], gt[500], gt[300], gt[100]],
            [vt[900], vt[700], vt[500], vt[300], vt[100]],
            [xt[900], xt[700], xt[500], xt[300], xt[100]],
            [yt[900], yt[700], yt[500], yt[300], yt[100]],
            [mt[900], mt[700], mt[500], mt[300], mt[100]],
            [wt[900], wt[700], wt[500], wt[300], wt[100]],
            [Et[900], Et[700], Et[500], Et[300], Et[100]],
            [Ct[900], Ct[700], Ct[500], Ct[300], Ct[100]],
            ['#194D33', kt[700], kt[500], kt[300], kt[100]],
            [St[900], St[700], St[500], St[300], St[100]],
            [_t[900], _t[700], _t[500], _t[300], _t[100]],
            [Ot[900], Ot[700], Ot[500], Ot[300], Ot[100]],
            [jt[900], jt[700], jt[500], jt[300], jt[100]],
            [Rt[900], Rt[700], Rt[500], Rt[300], Rt[100]],
            [Ft[900], Ft[700], Ft[500], Ft[300], Ft[100]],
            [At[900], At[700], At[500], At[300], At[100]],
            [Bt[900], Bt[700], Bt[500], Bt[300], Bt[100]],
            ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF'],
          ],
          styles: {},
        });
      tt(wr);
      var Er = function (e) {
        var t = e.onChange,
          r = e.onSwatchHover,
          n = e.hex,
          o = e.colors,
          l = e.width,
          s = e.triangle,
          c = e.styles,
          p = void 0 === c ? {} : c,
          u = e.className,
          f = void 0 === u ? '' : u,
          h = i()(
            Te(
              {
                default: {
                  card: {
                    width: l,
                    background: '#fff',
                    border: '0 solid rgba(0,0,0,0.25)',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
                    borderRadius: '4px',
                    position: 'relative',
                  },
                  body: { padding: '15px 9px 9px 15px' },
                  label: { fontSize: '18px', color: '#fff' },
                  triangle: {
                    width: '0px',
                    height: '0px',
                    borderStyle: 'solid',
                    borderWidth: '0 9px 10px 9px',
                    borderColor: 'transparent transparent #fff transparent',
                    position: 'absolute',
                  },
                  triangleShadow: {
                    width: '0px',
                    height: '0px',
                    borderStyle: 'solid',
                    borderWidth: '0 9px 10px 9px',
                    borderColor:
                      'transparent transparent rgba(0,0,0,.1) transparent',
                    position: 'absolute',
                  },
                  hash: {
                    background: '#F0F0F0',
                    height: '30px',
                    width: '30px',
                    borderRadius: '4px 0 0 4px',
                    float: 'left',
                    color: '#98A1A4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  input: {
                    width: '100px',
                    fontSize: '14px',
                    color: '#666',
                    border: '0px',
                    outline: 'none',
                    height: '28px',
                    boxShadow: 'inset 0 0 0 1px #F0F0F0',
                    boxSizing: 'content-box',
                    borderRadius: '0 4px 4px 0',
                    float: 'left',
                    paddingLeft: '8px',
                  },
                  swatch: {
                    width: '30px',
                    height: '30px',
                    float: 'left',
                    borderRadius: '4px',
                    margin: '0 6px 6px 0',
                  },
                  clear: { clear: 'both' },
                },
                'hide-triangle': {
                  triangle: { display: 'none' },
                  triangleShadow: { display: 'none' },
                },
                'top-left-triangle': {
                  triangle: { top: '-10px', left: '12px' },
                  triangleShadow: { top: '-11px', left: '12px' },
                },
                'top-right-triangle': {
                  triangle: { top: '-10px', right: '12px' },
                  triangleShadow: { top: '-11px', right: '12px' },
                },
              },
              p
            ),
            {
              'hide-triangle': 'hide' === s,
              'top-left-triangle': 'top-left' === s,
              'top-right-triangle': 'top-right' === s,
            }
          ),
          d = function (e, r) {
            $e(e) && t({ hex: e, source: 'hex' }, r);
          };
        return a.a.createElement(
          'div',
          { style: h.card, className: 'twitter-picker ' + f },
          a.a.createElement('div', { style: h.triangleShadow }),
          a.a.createElement('div', { style: h.triangle }),
          a.a.createElement(
            'div',
            { style: h.body },
            ft(o, function (e, t) {
              return a.a.createElement(st, {
                key: t,
                color: e,
                hex: e,
                style: h.swatch,
                onClick: d,
                onHover: r,
                focusStyle: { boxShadow: '0 0 4px ' + e },
              });
            }),
            a.a.createElement('div', { style: h.hash }, '#'),
            a.a.createElement(w, {
              label: null,
              style: { input: h.input },
              value: n.replace('#', ''),
              onChange: d,
            }),
            a.a.createElement('div', { style: h.clear })
          )
        );
      };
      (Er.propTypes = {
        width: j.a.oneOfType([j.a.string, j.a.number]),
        triangle: j.a.oneOf(['hide', 'top-left', 'top-right']),
        colors: j.a.arrayOf(j.a.string),
        styles: j.a.object,
      }),
        (Er.defaultProps = {
          width: 276,
          colors: [
            '#FF6900',
            '#FCB900',
            '#7BDCB5',
            '#00D084',
            '#8ED1FC',
            '#0693E3',
            '#ABB8C3',
            '#EB144C',
            '#F78DA7',
            '#9900EF',
          ],
          triangle: 'top-left',
          styles: {},
        });
      tt(Er);
      var Cr = function (e) {
        var t = i()({
          default: {
            picker: {
              width: '20px',
              height: '20px',
              borderRadius: '22px',
              border: '2px #fff solid',
              transform: 'translate(-12px, -13px)',
              background:
                'hsl(' +
                Math.round(e.hsl.h) +
                ', ' +
                Math.round(100 * e.hsl.s) +
                '%, ' +
                Math.round(100 * e.hsl.l) +
                '%)',
            },
          },
        });
        return a.a.createElement('div', { style: t.picker });
      };
      (Cr.propTypes = {
        hsl: j.a.shape({
          h: j.a.number,
          s: j.a.number,
          l: j.a.number,
          a: j.a.number,
        }),
      }),
        (Cr.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
      var kr = Cr,
        Sr = function (e) {
          var t = i()({
            default: {
              picker: {
                width: '20px',
                height: '20px',
                borderRadius: '22px',
                transform: 'translate(-10px, -7px)',
                background: 'hsl(' + Math.round(e.hsl.h) + ', 100%, 50%)',
                border: '2px white solid',
              },
            },
          });
          return a.a.createElement('div', { style: t.picker });
        };
      (Sr.propTypes = {
        hsl: j.a.shape({
          h: j.a.number,
          s: j.a.number,
          l: j.a.number,
          a: j.a.number,
        }),
      }),
        (Sr.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
      var _r = Sr,
        Or = function (e) {
          var t = e.onChange,
            r = e.rgb,
            n = e.hsl,
            o = e.hex,
            l = e.hsv,
            s = function (e, r) {
              if (e.hex) $e(e.hex) && t({ hex: e.hex, source: 'hex' }, r);
              else if (e.rgb) {
                var n = e.rgb.split(',');
                Ze(e.rgb, 'rgb') &&
                  t({ r: n[0], g: n[1], b: n[2], a: 1, source: 'rgb' }, r);
              } else if (e.hsv) {
                var a = e.hsv.split(',');
                Ze(e.hsv, 'hsv') &&
                  ((a[2] = a[2].replace('%', '')),
                  (a[1] = a[1].replace('%', '')),
                  (a[0] = a[0].replace('°', '')),
                  1 == a[1] ? (a[1] = 0.01) : 1 == a[2] && (a[2] = 0.01),
                  t(
                    {
                      h: Number(a[0]),
                      s: Number(a[1]),
                      v: Number(a[2]),
                      source: 'hsv',
                    },
                    r
                  ));
              } else if (e.hsl) {
                var o = e.hsl.split(',');
                Ze(e.hsl, 'hsl') &&
                  ((o[2] = o[2].replace('%', '')),
                  (o[1] = o[1].replace('%', '')),
                  (o[0] = o[0].replace('°', '')),
                  1 == f[1] ? (f[1] = 0.01) : 1 == f[2] && (f[2] = 0.01),
                  t(
                    {
                      h: Number(o[0]),
                      s: Number(o[1]),
                      v: Number(o[2]),
                      source: 'hsl',
                    },
                    r
                  ));
              }
            },
            c = i()({
              default: {
                wrap: { display: 'flex', height: '100px', marginTop: '4px' },
                fields: { width: '100%' },
                column: {
                  paddingTop: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                },
                double: { padding: '0px 4.4px', boxSizing: 'border-box' },
                input: {
                  width: '100%',
                  height: '38px',
                  boxSizing: 'border-box',
                  padding: '4px 10% 3px',
                  textAlign: 'center',
                  border: '1px solid #dadce0',
                  fontSize: '11px',
                  textTransform: 'lowercase',
                  borderRadius: '5px',
                  outline: 'none',
                  fontFamily: 'Roboto,Arial,sans-serif',
                },
                input2: {
                  height: '38px',
                  width: '100%',
                  border: '1px solid #dadce0',
                  boxSizing: 'border-box',
                  fontSize: '11px',
                  textTransform: 'lowercase',
                  borderRadius: '5px',
                  outline: 'none',
                  paddingLeft: '10px',
                  fontFamily: 'Roboto,Arial,sans-serif',
                },
                label: {
                  textAlign: 'center',
                  fontSize: '12px',
                  background: '#fff',
                  position: 'absolute',
                  textTransform: 'uppercase',
                  color: '#3c4043',
                  width: '35px',
                  top: '-6px',
                  left: '0',
                  right: '0',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontFamily: 'Roboto,Arial,sans-serif',
                },
                label2: {
                  left: '10px',
                  textAlign: 'center',
                  fontSize: '12px',
                  background: '#fff',
                  position: 'absolute',
                  textTransform: 'uppercase',
                  color: '#3c4043',
                  width: '32px',
                  top: '-6px',
                  fontFamily: 'Roboto,Arial,sans-serif',
                },
                single: { flexGrow: '1', margin: '0px 4.4px' },
              },
            }),
            p = r.r + ', ' + r.g + ', ' + r.b,
            u =
              Math.round(n.h) +
              '°, ' +
              Math.round(100 * n.s) +
              '%, ' +
              Math.round(100 * n.l) +
              '%',
            f =
              Math.round(l.h) +
              '°, ' +
              Math.round(100 * l.s) +
              '%, ' +
              Math.round(100 * l.v) +
              '%';
          return a.a.createElement(
            'div',
            { style: c.wrap, className: 'flexbox-fix' },
            a.a.createElement(
              'div',
              { style: c.fields },
              a.a.createElement(
                'div',
                { style: c.double },
                a.a.createElement(w, {
                  style: { input: c.input, label: c.label },
                  label: 'hex',
                  value: o,
                  onChange: s,
                })
              ),
              a.a.createElement(
                'div',
                { style: c.column },
                a.a.createElement(
                  'div',
                  { style: c.single },
                  a.a.createElement(w, {
                    style: { input: c.input2, label: c.label2 },
                    label: 'rgb',
                    value: p,
                    onChange: s,
                  })
                ),
                a.a.createElement(
                  'div',
                  { style: c.single },
                  a.a.createElement(w, {
                    style: { input: c.input2, label: c.label2 },
                    label: 'hsv',
                    value: f,
                    onChange: s,
                  })
                ),
                a.a.createElement(
                  'div',
                  { style: c.single },
                  a.a.createElement(w, {
                    style: { input: c.input2, label: c.label2 },
                    label: 'hsl',
                    value: u,
                    onChange: s,
                  })
                )
              )
            )
          );
        },
        jr = function (e) {
          var t = e.width,
            r = e.onChange,
            n = e.rgb,
            o = e.hsl,
            l = e.hsv,
            s = e.hex,
            c = e.header,
            p = e.styles,
            u = void 0 === p ? {} : p,
            f = e.className,
            h = void 0 === f ? '' : f,
            d = i()(
              Te(
                {
                  default: {
                    picker: {
                      width: t,
                      background: '#fff',
                      border: '1px solid #dfe1e5',
                      boxSizing: 'initial',
                      display: 'flex',
                      flexWrap: 'wrap',
                      borderRadius: '8px 8px 0px 0px',
                    },
                    head: {
                      height: '57px',
                      width: '100%',
                      paddingTop: '16px',
                      paddingBottom: '16px',
                      paddingLeft: '16px',
                      fontSize: '20px',
                      boxSizing: 'border-box',
                      fontFamily:
                        'Roboto-Regular,HelveticaNeue,Arial,sans-serif',
                    },
                    saturation: {
                      width: '70%',
                      padding: '0px',
                      position: 'relative',
                      overflow: 'hidden',
                    },
                    swatch: {
                      width: '30%',
                      height: '228px',
                      padding: '0px',
                      background:
                        'rgba(' + n.r + ', ' + n.g + ', ' + n.b + ', 1)',
                      position: 'relative',
                      overflow: 'hidden',
                    },
                    body: { margin: 'auto', width: '95%' },
                    controls: {
                      display: 'flex',
                      boxSizing: 'border-box',
                      height: '52px',
                      paddingTop: '22px',
                    },
                    color: { width: '32px' },
                    hue: {
                      height: '8px',
                      position: 'relative',
                      margin: '0px 16px 0px 16px',
                      width: '100%',
                    },
                    Hue: { radius: '2px' },
                  },
                },
                u
              )
            );
          return a.a.createElement(
            'div',
            { style: d.picker, className: 'google-picker ' + h },
            a.a.createElement('div', { style: d.head }, c),
            a.a.createElement('div', { style: d.swatch }),
            a.a.createElement(
              'div',
              { style: d.saturation },
              a.a.createElement(Xe, {
                hsl: o,
                hsv: l,
                pointer: kr,
                onChange: r,
              })
            ),
            a.a.createElement(
              'div',
              { style: d.body },
              a.a.createElement(
                'div',
                { style: d.controls, className: 'flexbox-fix' },
                a.a.createElement(
                  'div',
                  { style: d.hue },
                  a.a.createElement(_, {
                    style: d.Hue,
                    hsl: o,
                    radius: '4px',
                    pointer: _r,
                    onChange: r,
                  })
                )
              ),
              a.a.createElement(Or, {
                rgb: n,
                hsl: o,
                hex: s,
                hsv: l,
                onChange: r,
              })
            )
          );
        };
      (jr.propTypes = {
        width: j.a.oneOfType([j.a.string, j.a.number]),
        styles: j.a.object,
        header: j.a.string,
      }),
        (jr.defaultProps = { width: 652, styles: {}, header: 'Color picker' });
      tt(jr);
    },
  },
]);
//# sourceMappingURL=16.chunk.js.map
