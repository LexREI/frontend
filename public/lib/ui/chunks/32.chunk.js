(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    1512: function (e, t, n) {
      var r = n(27),
        o = n(1513);
      'string' == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, '']]);
      var i = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              if (0 === r)
                o.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                o.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      r(o, i);
      e.exports = o.locals || {};
    },
    1513: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        '.open.AnnotationContentOverlay{visibility:visible}.closed.AnnotationContentOverlay{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.AnnotationContentOverlay{word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.always-hide{display:none}.AnnotationContentOverlay{position:absolute;z-index:95;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);display:flex;flex-direction:column;max-width:215px;padding:8px}.AnnotationContentOverlay .author{font-weight:700}.AnnotationContentOverlay .contents,.AnnotationContentOverlay .replies{margin-top:5px;white-space:pre-wrap}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1732: function (e, t, n) {
      'use strict';
      n.r(t);
      n(15),
        n(18),
        n(11),
        n(13),
        n(7),
        n(12),
        n(8),
        n(9),
        n(10),
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
      var r = n(0),
        o = n.n(r),
        i = n(6),
        a = n(362),
        l = n(4),
        c = n.n(l),
        u = n(1),
        s = n(3),
        p = n(35),
        d = n(5),
        f = n(224);
      function y(e) {
        return (y =
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
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                h(e, t, n[t]);
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
      function h(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== y(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || 'default');
                if ('object' !== y(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === y(t) ? t : String(t);
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
      function v(e, t) {
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
              var r,
                o,
                i,
                a,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw o;
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
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var w = function (e) {
        var t = e.annotation,
          n = e.overlayPosition,
          r = e.overlayRef,
          i = v(Object(a.a)(), 1)[0],
          l = u.a.getFormFieldCreationManager().getFieldName(t),
          c = t.getFormFieldPlaceholderType();
        return o.a.createElement(
          'div',
          {
            className: 'Overlay AnnotationContentOverlay',
            'data-element': d.a.ANNOTATION_CONTENT_OVERLAY,
            style: b({}, n),
            ref: r,
          },
          o.a.createElement(
            'div',
            null,
            o.a.createElement(
              'span',
              { style: { fontWeight: 'bold' } },
              i('formField.type'),
              ': '
            ),
            i(
              (function (e) {
                switch (e) {
                  case 'TextFormField':
                    return 'formField.types.text';
                  case 'SignatureFormField':
                    return 'formField.types.signature';
                  case 'CheckBoxFormField':
                    return 'formField.types.checkbox';
                  case 'ListBoxFormField':
                    return 'formField.types.listbox';
                  case 'ComboBoxFormField':
                    return 'formField.types.combobox';
                  case 'RadioButtonFormField':
                    return 'formField.types.radio';
                }
              })(c)
            )
          ),
          o.a.createElement(
            'div',
            null,
            o.a.createElement(
              'span',
              { style: { fontWeight: 'bold' } },
              i('formField.formFieldPopup.fieldName'),
              ': '
            ),
            l
          )
        );
      };
      n(1512);
      function g(e) {
        return (g =
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
      function A(e, t) {
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
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                x(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : A(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function x(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== g(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || 'default');
                if ('object' !== g(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === g(t) ? t : String(t);
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
      function E(e, t) {
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
              var r,
                o,
                i,
                a,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return N(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return N(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function N(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var T = { annotation: c.a.object, clientXY: c.a.object },
        S = function (e) {
          var t = e.annotation,
            n = e.clientXY,
            l = E(
              Object(i.e)(function (e) {
                return [
                  s.a.isElementDisabled(e, d.a.ANNOTATION_CONTENT_OVERLAY),
                  s.a.isElementOpen(e, d.a.ANNOTATION_CONTENT_OVERLAY),
                  s.a.getAnnotationContentOverlayHandler(e),
                ];
              }, i.c),
              3
            ),
            c = l[0],
            y = l[1],
            m = l[2],
            b = E(Object(a.a)(), 1)[0],
            h = E(Object(r.useState)({ left: 0, top: 0 }), 2),
            v = h[0],
            O = h[1],
            g = null !== m,
            A = Object(r.useRef)(null),
            x = null == t ? void 0 : t.getContents();
          Object(r.useEffect)(
            function () {
              if (A.current && t) {
                var e = n.clientX,
                  r = n.clientY,
                  o = (function (e, t, n, r) {
                    var o = A.current.getBoundingClientRect();
                    return (
                      n + o.width > window.innerWidth && (n = e - o.width - 20),
                      r + o.height > window.innerHeight &&
                        (r = t - o.height - 20),
                      r <= 0 && (r = 0),
                      { left: n, top: r }
                    );
                  })(e, r, e + 20, r + 20),
                  i = o.left,
                  a = o.top;
                O({ left: i, top: a });
              }
            },
            [t, n]
          );
          var N = null == t ? void 0 : t.getReplies().length,
            T = g && t ? m(t) : null,
            S = Object(r.useCallback)(
              function () {
                return T;
              },
              [T]
            );
          return c || p.m || !t
            ? null
            : g && y && void 0 !== T
              ? T
                ? o.a.createElement(
                    'div',
                    {
                      className: 'Overlay AnnotationContentOverlay',
                      'data-element': d.a.ANNOTATION_CONTENT_OVERLAY,
                      style: j({}, v),
                      ref: A,
                    },
                    o.a.createElement(f.a, { render: S })
                  )
                : null
              : t.isFormFieldPlaceholder() && y
                ? o.a.createElement(w, {
                    annotation: t,
                    overlayPosition: v,
                    overlayRef: A,
                  })
                : x && y
                  ? o.a.createElement(
                      'div',
                      {
                        className: 'Overlay AnnotationContentOverlay',
                        'data-element': d.a.ANNOTATION_CONTENT_OVERLAY,
                        style: j({}, v),
                        ref: A,
                      },
                      o.a.createElement(
                        'div',
                        { className: 'author' },
                        u.a.getDisplayAuthor(t.Author)
                      ),
                      o.a.createElement(
                        'div',
                        { className: 'contents' },
                        x.length > 100 ? ''.concat(x.slice(0, 100), '...') : x
                      ),
                      N > 0 &&
                        o.a.createElement(
                          'div',
                          { className: 'replies' },
                          b('message.annotationReplyCount', { count: N })
                        )
                    )
                  : null;
        };
      S.propTypes = T;
      var F = S;
      t.default = F;
    },
  },
]);
//# sourceMappingURL=32.chunk.js.map
