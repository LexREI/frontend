(window.webpackJsonp = window.webpackJsonp || []).push([
  [50],
  {
    1613: function (t, n, e) {
      var o = e(27),
        r = e(1614);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, '']]);
      var i = {
        insert: function (t) {
          const n = document.getElementsByTagName('apryse-webviewer');
          if (n.length > 0) {
            const e = [];
            for (let o = 0; o < n.length; o++) {
              const r = n[o];
              if (0 === o)
                r.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    e.length > 0 &&
                      e.forEach((n) => {
                        n.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const n = t.cloneNode(!0);
                r.shadowRoot.appendChild(n), e.push(n);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      o(r, i);
      t.exports = r.locals || {};
    },
    1614: function (t, n, e) {
      (n = t.exports = e(28)(!1)).push([
        t.i,
        '.open.WarningModal{visibility:visible}.closed.WarningModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.WarningModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.WarningModal .modal-container .wrapper .modal-content{padding:10px}.WarningModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.WarningModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.WarningModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.WarningModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.WarningModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.WarningModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.WarningModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.WarningModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.WarningModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.WarningModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .footer .modal-button{padding:23px 8px}}.WarningModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .swipe-indicator{display:none}}.WarningModal .container{overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .WarningModal .container,.WarningModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .WarningModal .container,.WarningModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .container,.WarningModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .container,.WarningModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.WarningModal{z-index:101}.WarningModal .container{display:flex;width:480px;flex-direction:column;align-items:flex-start;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .container{padding:24px 24px 16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .container{padding:24px 24px 16px}}.WarningModal.connect-to-url-modal{overflow:hidden;word-break:break-all}.WarningModal .header{position:relative;width:100%;padding:6px}.WarningModal .header .header-text{padding:10px;font-size:18px;font-weight:700}.WarningModal .header .Button{position:absolute;top:10px;right:10px}.WarningModal .header .Button .Icon{height:22px;width:22px;color:var(--icon-color)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .header .Button .Icon{height:28px;width:28px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .header .Button .Icon{height:28px;width:28px}}.WarningModal .header .Button:hover{background:var(--view-header-button-hover);border-radius:4px}.WarningModal .body{font-size:14px;padding:16px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .body{padding:16px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .body{padding:16px 8px}}.WarningModal .body .footer{justify-content:flex-start}.WarningModal .footer{padding:0 8px 8px}.WarningModal .footer .ui__choice--center{flex:auto;align-self:center}.WarningModal .divider{height:.5px;width:100%;background:var(--divider)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .divider{display:none}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .divider{display:none}}',
        '',
      ]),
        (n.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1748: function (t, n, e) {
      'use strict';
      e.r(n);
      e(52),
        e(64),
        e(39),
        e(18),
        e(11),
        e(13),
        e(7),
        e(12),
        e(8),
        e(9),
        e(10),
        e(15),
        e(14),
        e(20),
        e(17),
        e(51),
        e(22),
        e(67),
        e(68),
        e(69),
        e(70),
        e(41),
        e(44),
        e(24),
        e(25),
        e(46),
        e(66),
        e(37),
        e(38),
        e(31);
      var o = e(0),
        r = e.n(o),
        i = e(6),
        a = e(42),
        c = e(1),
        d = e(21),
        l = e(313),
        p = e(1381),
        s = e(19),
        u = e.n(s),
        f = e(2),
        h = e(3),
        m = e(5),
        g = e(182);
      e(1613);
      function y(t) {
        return (y =
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
      function v(t, n, e) {
        return (
          (n = (function (t) {
            var n = (function (t, n) {
              if ('object' !== y(t) || null === t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var o = e.call(t, n || 'default');
                if ('object' !== y(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === n ? String : Number)(t);
            })(t, 'string');
            return 'symbol' === y(n) ? n : String(n);
          })(n)) in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function x() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ x =
          function () {
            return t;
          };
        var t = {},
          n = Object.prototype,
          e = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, n, e) {
              t[n] = e.value;
            },
          r = 'function' == typeof Symbol ? Symbol : {},
          i = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          c = r.toStringTag || '@@toStringTag';
        function d(t, n, e) {
          return (
            Object.defineProperty(t, n, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[n]
          );
        }
        try {
          d({}, '');
        } catch (t) {
          d = function (t, n, e) {
            return (t[n] = e);
          };
        }
        function l(t, n, e, r) {
          var i = n && n.prototype instanceof u ? n : u,
            a = Object.create(i.prototype),
            c = new L(r || []);
          return o(a, '_invoke', { value: W(t, e, c) }), a;
        }
        function p(t, n, e) {
          try {
            return { type: 'normal', arg: t.call(n, e) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = l;
        var s = {};
        function u() {}
        function f() {}
        function h() {}
        var m = {};
        d(m, i, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          v = g && g(g(j([])));
        v && v !== n && e.call(v, i) && (m = v);
        var b = (h.prototype = u.prototype = Object.create(m));
        function w(t) {
          ['next', 'throw', 'return'].forEach(function (n) {
            d(t, n, function (t) {
              return this._invoke(n, t);
            });
          });
        }
        function k(t, n) {
          var r;
          o(this, '_invoke', {
            value: function (o, i) {
              function a() {
                return new n(function (r, a) {
                  !(function o(r, i, a, c) {
                    var d = p(t[r], t, i);
                    if ('throw' !== d.type) {
                      var l = d.arg,
                        s = l.value;
                      return s && 'object' == y(s) && e.call(s, '__await')
                        ? n.resolve(s.__await).then(
                            function (t) {
                              o('next', t, a, c);
                            },
                            function (t) {
                              o('throw', t, a, c);
                            }
                          )
                        : n.resolve(s).then(
                            function (t) {
                              (l.value = t), a(l);
                            },
                            function (t) {
                              return o('throw', t, a, c);
                            }
                          );
                    }
                    c(d.arg);
                  })(o, i, r, a);
                });
              }
              return (r = r ? r.then(a, a) : a());
            },
          });
        }
        function W(t, n, e) {
          var o = 'suspendedStart';
          return function (r, i) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === r) throw i;
              return N();
            }
            for (e.method = r, e.arg = i; ; ) {
              var a = e.delegate;
              if (a) {
                var c = E(a, e);
                if (c) {
                  if (c === s) continue;
                  return c;
                }
              }
              if ('next' === e.method) e.sent = e._sent = e.arg;
              else if ('throw' === e.method) {
                if ('suspendedStart' === o) throw ((o = 'completed'), e.arg);
                e.dispatchException(e.arg);
              } else 'return' === e.method && e.abrupt('return', e.arg);
              o = 'executing';
              var d = p(t, n, e);
              if ('normal' === d.type) {
                if (
                  ((o = e.done ? 'completed' : 'suspendedYield'), d.arg === s)
                )
                  continue;
                return { value: d.arg, done: e.done };
              }
              'throw' === d.type &&
                ((o = 'completed'), (e.method = 'throw'), (e.arg = d.arg));
            }
          };
        }
        function E(t, n) {
          var e = n.method,
            o = t.iterator[e];
          if (void 0 === o)
            return (
              (n.delegate = null),
              ('throw' === e &&
                t.iterator.return &&
                ((n.method = 'return'),
                (n.arg = void 0),
                E(t, n),
                'throw' === n.method)) ||
                ('return' !== e &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + e + "' method"
                  )))),
              s
            );
          var r = p(o, t.iterator, n.arg);
          if ('throw' === r.type)
            return (
              (n.method = 'throw'), (n.arg = r.arg), (n.delegate = null), s
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((n[t.resultName] = i.value),
                (n.next = t.nextLoc),
                'return' !== n.method &&
                  ((n.method = 'next'), (n.arg = void 0)),
                (n.delegate = null),
                s)
              : i
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              s);
        }
        function M(t) {
          var n = { tryLoc: t[0] };
          1 in t && (n.catchLoc = t[1]),
            2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
            this.tryEntries.push(n);
        }
        function A(t) {
          var n = t.completion || {};
          (n.type = 'normal'), delete n.arg, (t.completion = n);
        }
        function L(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(M, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var n = t[i];
            if (n) return n.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                r = function n() {
                  for (; ++o < t.length; )
                    if (e.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
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
          o(b, 'constructor', { value: h, configurable: !0 }),
          o(h, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = d(h, c, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var n = 'function' == typeof t && t.constructor;
            return (
              !!n &&
              (n === f || 'GeneratorFunction' === (n.displayName || n.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, h)
                : ((t.__proto__ = h), d(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(b)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(k.prototype),
          d(k.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = k),
          (t.async = function (n, e, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new k(l(n, e, o, r), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(b),
          d(b, c, 'Generator'),
          d(b, i, function () {
            return this;
          }),
          d(b, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var n = Object(t),
              e = [];
            for (var o in n) e.push(o);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var o = e.pop();
                  if (o in n) return (t.value = o), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = j),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(A),
                !t)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    e.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(e, o) {
                return (
                  (a.type = 'throw'),
                  (a.arg = t),
                  (n.next = e),
                  o && ((n.method = 'next'), (n.arg = void 0)),
                  !!o
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  a = i.completion;
                if ('root' === i.tryLoc) return o('end');
                if (i.tryLoc <= this.prev) {
                  var c = e.call(i, 'catchLoc'),
                    d = e.call(i, 'finallyLoc');
                  if (c && d) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!d)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, n) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var r = this.tryEntries[o];
                if (
                  r.tryLoc <= this.prev &&
                  e.call(r, 'finallyLoc') &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
                  break;
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= n &&
                n <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = n),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), s)
                  : this.complete(a)
              );
            },
            complete: function (t, n) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && n && (this.next = n),
                s
              );
            },
            finish: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.finallyLoc === t)
                  return this.complete(e.completion, e.afterLoc), A(e), s;
              }
            },
            catch: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.tryLoc === t) {
                  var o = e.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    A(e);
                  }
                  return r;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, n, e) {
              return (
                (this.delegate = { iterator: j(t), resultName: n, nextLoc: e }),
                'next' === this.method && (this.arg = void 0),
                s
              );
            },
          }),
          t
        );
      }
      function b(t, n, e, o, r, i, a) {
        try {
          var c = t[i](a),
            d = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? n(d) : Promise.resolve(d).then(o, r);
      }
      function w(t) {
        return function () {
          var n = this,
            e = arguments;
          return new Promise(function (o, r) {
            var i = t.apply(n, e);
            function a(t) {
              b(i, o, r, a, c, 'next', t);
            }
            function c(t) {
              b(i, o, r, a, c, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function k(t, n) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, n) {
            var e =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != e) {
              var o,
                r,
                i,
                a,
                c = [],
                d = !0,
                l = !1;
              try {
                if (((i = (e = e.call(t)).next), 0 === n)) {
                  if (Object(e) !== e) return;
                  d = !1;
                } else
                  for (
                    ;
                    !(d = (o = i.call(e)).done) &&
                    (c.push(o.value), c.length !== n);
                    d = !0
                  );
              } catch (t) {
                (l = !0), (r = t);
              } finally {
                try {
                  if (
                    !d &&
                    null != e.return &&
                    ((a = e.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw r;
                }
              }
              return c;
            }
          })(t, n) ||
          (function (t, n) {
            if (!t) return;
            if ('string' == typeof t) return W(t, n);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === e && t.constructor && (e = t.constructor.name);
            if ('Map' === e || 'Set' === e) return Array.from(t);
            if (
              'Arguments' === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return W(t, n);
          })(t, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function W(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var e = 0, o = new Array(n); e < n; e++) o[e] = t[e];
        return o;
      }
      var E = function () {
        var t = r.a.createRef(),
          n = k(
            Object(i.e)(function (t) {
              return [
                h.a.getWarningTitle(t) || '',
                h.a.getWarningMessage(t),
                h.a.getWarningConfirmEvent(t),
                h.a.getWarningConfirmBtnText(t),
                h.a.getWarningSecondaryEvent(t),
                h.a.getWarningSecondaryBtnText(t),
                h.a.getWarningSecondaryBtnClass(t),
                h.a.getWarningCancelEvent(t),
                h.a.isElementDisabled(t, m.a.WARNING_MODAL),
                h.a.isElementOpen(t, m.a.WARNING_MODAL),
                h.a.getShowAskAgainCheckbox(t),
                h.a.getWarningTemplateStrings(t) || {},
                h.a.getWarningModalClass(t) || '',
                h.a.getWarningCloseEvent(t) || '',
              ];
            }, i.c),
            14
          ),
          e = n[0],
          s = n[1],
          y = n[2],
          b = n[3],
          W = n[4],
          E = n[5],
          M = n[6],
          A = n[7],
          L = n[8],
          j = n[9],
          N = n[10],
          O = n[11],
          S = n[12],
          _ = n[13],
          T = k(Object(o.useState)(!1), 2),
          C = T[0],
          I = T[1],
          P = Object(i.d)(),
          B = Object(p.a)('Modal WarningModal '.concat(S), { isOpen: j }),
          D = a.a.t(b, O) || a.a.t('action.ok');
        Object(o.useEffect)(function () {
          return (
            c.a.addEventListener('documentUnloaded', R),
            function () {
              c.a.removeEventListener('documentUnloaded', R);
            }
          );
        }, []),
          Object(o.useEffect)(
            function () {
              j && I(!1);
            },
            [j]
          );
        var G,
          F,
          R = (function () {
            var t = w(
              x().mark(function t() {
                return x().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((t.t0 = A), !t.t0)) {
                          t.next = 4;
                          break;
                        }
                        return (t.next = 4), A();
                      case 4:
                        U();
                      case 5:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
          H = (function () {
            var t = w(
              x().mark(function t() {
                return x().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((t.t0 = y), !t.t0)) {
                          t.next = 4;
                          break;
                        }
                        return (t.next = 4), y();
                      case 4:
                        U();
                      case 5:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
          z = (function () {
            var t = w(
              x().mark(function t() {
                return x().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((t.t0 = W), !t.t0)) {
                          t.next = 4;
                          break;
                        }
                        return (t.next = 4), W();
                      case 4:
                        U();
                      case 5:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
          U = (function () {
            var t = w(
              x().mark(function t() {
                return x().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!j) {
                          t.next = 6;
                          break;
                        }
                        if (((t.t0 = _), !t.t0)) {
                          t.next = 5;
                          break;
                        }
                        return (t.next = 5), _(C);
                      case 5:
                        P(f.a.closeElements(m.a.WARNING_MODAL));
                      case 6:
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
        return L
          ? null
          : r.a.createElement(
              g.a,
              {
                onSwipedUp: R,
                onSwipedDown: R,
                preventDefaultTouchmoveEvent: !0,
              },
              r.a.createElement(
                'div',
                { className: B, onMouseDown: R },
                r.a.createElement(
                  'div',
                  {
                    className: 'container',
                    onMouseDown: function (t) {
                      return t.stopPropagation();
                    },
                  },
                  r.a.createElement('div', { className: 'swipe-indicator' }),
                  r.a.createElement(
                    'div',
                    { className: 'header' },
                    r.a.createElement(
                      'div',
                      { className: 'header-text' },
                      a.a.t(e, O)
                    ),
                    r.a.createElement(d.a, {
                      img: 'icon-close',
                      onClick: R,
                      dataElement: 'closeModalButton',
                      title: 'action.cancel',
                    })
                  ),
                  r.a.createElement('div', { className: 'divider' }),
                  r.a.createElement(
                    'div',
                    { className: 'body' },
                    ((F =
                      'string' == typeof s && a.a.exists(s) ? a.a.t(s, O) : s),
                    null !== (G = F.includes) && void 0 !== G && G.call(F, '\n')
                      ? F.split('\n').map(function (t, n) {
                          return r.a.createElement(
                            r.a.Fragment,
                            { key: n },
                            0 === n
                              ? r.a.createElement(r.a.Fragment, null, t)
                              : r.a.createElement(
                                  r.a.Fragment,
                                  null,
                                  r.a.createElement('br', null),
                                  t
                                )
                          );
                        })
                      : F)
                  ),
                  r.a.createElement('div', { className: 'divider' }),
                  r.a.createElement(
                    'div',
                    { className: 'footer' },
                    N &&
                      r.a.createElement(l.a, {
                        dataElement: 'doNotAskAgainCheckbox',
                        ref: t,
                        id: 'do-not-ask-again-checkbox',
                        name: 'do-not-ask-again-checkbox',
                        label: a.a.t('message.doNotAskAgain'),
                        onChange: function (t) {
                          return I(t.target.checked);
                        },
                        checked: C,
                        center: !0,
                      }),
                    W &&
                      r.a.createElement(d.a, {
                        className: u()(v({ 'modal-button': !0 }, M, M)),
                        dataElement: 'WarningModalClearButton',
                        label: a.a.t(E, O),
                        onClick: z,
                      }),
                    r.a.createElement(d.a, {
                      className: 'confirm modal-button',
                      dataElement: 'WarningModalSignButton',
                      label: D,
                      onClick: H,
                    })
                  )
                )
              )
            );
      };
      n.default = E;
    },
  },
]);
//# sourceMappingURL=50.chunk.js.map
