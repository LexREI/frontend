(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    1586: function (t, o, n) {
      var e = n(27),
        a = n(1587);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[t.i, a, '']]);
      var i = {
        insert: function (t) {
          const o = document.getElementsByTagName('apryse-webviewer');
          if (o.length > 0) {
            const n = [];
            for (let e = 0; e < o.length; e++) {
              const a = o[e];
              if (0 === e)
                a.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    n.length > 0 &&
                      n.forEach((o) => {
                        o.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const o = t.cloneNode(!0);
                a.shadowRoot.appendChild(o), n.push(o);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      e(a, i);
      t.exports = a.locals || {};
    },
    1587: function (t, o, n) {
      (o = t.exports = n(28)(!1)).push([
        t.i,
        '.open.CalibrationModal{visibility:visible}.closed.CalibrationModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.CalibrationModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.CalibrationModal .modal-container .wrapper .modal-content{padding:10px}.CalibrationModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.CalibrationModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.CalibrationModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.CalibrationModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.CalibrationModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.CalibrationModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.CalibrationModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.CalibrationModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.CalibrationModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.CalibrationModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CalibrationModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CalibrationModal .footer .modal-button{padding:23px 8px}}.CalibrationModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CalibrationModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .CalibrationModal .swipe-indicator{display:none}}.CalibrationModal .container{border-radius:4px;overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .CalibrationModal .container,.CalibrationModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .CalibrationModal .container,.CalibrationModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CalibrationModal .container,.CalibrationModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CalibrationModal .container,.CalibrationModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.CalibrationModal .container{display:flex;flex-direction:column;min-width:400px;box-shadow:0 0 3px 0 var(--document-box-shadow);padding:8px;background:var(--component-background)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CalibrationModal .container{padding:24px 24px 16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CalibrationModal .container{padding:24px 24px 16px}}.CalibrationModal .container .calibration__header{font-size:16px;margin-top:8px;margin-bottom:8px}.CalibrationModal .container .calibration__body{padding-top:8px}.CalibrationModal .container .calibration__body .calibration__input{margin-top:8px;display:flex;flex-direction:row;justify-content:space-between}.CalibrationModal .container .calibration__body input{width:100%;height:30px;font-size:13px;border:1px solid var(--border);border-radius:4px;color:var(--text-color);padding:4px 42px 6px 8px;margin-right:8px}.CalibrationModal .container .calibration__body input:focus{outline:none;border:1px solid var(--focus-border)}.CalibrationModal .container .calibration__body input::-moz-placeholder{color:var(--placeholder-text)}.CalibrationModal .container .calibration__body input:-ms-input-placeholder{color:var(--placeholder-text)}.CalibrationModal .container .calibration__body input::placeholder{color:var(--placeholder-text)}.CalibrationModal .container .calibration__body .error{border:1px solid var(--error-border-color)}.CalibrationModal .container .calibration__body .unitToInput{height:29px;width:45px;border-radius:5px;border:1px solid var(--border);font-size:13px}.CalibrationModal .container .calibration__body .unitToInput:focus{outline:none;border:1px solid var(--focus-border)}.CalibrationModal .container .calibration__body .unitToInput::-moz-placeholder{color:var(--placeholder-text)}.CalibrationModal .container .calibration__body .unitToInput:-ms-input-placeholder{color:var(--placeholder-text)}.CalibrationModal .container .calibration__body .unitToInput::placeholder{color:var(--placeholder-text)}.CalibrationModal .container .calibration__body .errorMeasurement{font-size:13px;margin-top:8px;margin-bottom:8px;color:var(--error-text-color);max-width:400px}.CalibrationModal .container .calibration__footer{display:flex;justify-content:flex-end;margin-top:8px}.CalibrationModal .container .calibration__footer .Button{display:flex;justify-content:center;align-items:center;color:var(--primary-button-text);font-weight:600;padding:6px 18px;margin-top:8px;margin-left:5px;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background:var(--primary-button);border-radius:4px;height:30px;cursor:pointer}.CalibrationModal .container .calibration__footer .Button:hover{background:var(--primary-button-hover)}',
        '',
      ]),
        (o.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1738: function (t, o, n) {
      'use strict';
      n.r(o);
      n(424),
        n(183),
        n(146),
        n(17),
        n(1584),
        n(31),
        n(39),
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
        n(20);
      var e = n(0),
        a = n.n(e),
        i = n(19),
        r = n.n(i),
        l = n(6),
        d = n(362),
        c = n(21),
        p = n(1),
        s = n(61),
        u = n(236);
      function b(t, o) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, o) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != n) {
              var e,
                a,
                i,
                r,
                l = [],
                d = !0,
                c = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === o)) {
                  if (Object(n) !== n) return;
                  d = !1;
                } else
                  for (
                    ;
                    !(d = (e = i.call(n)).done) &&
                    (l.push(e.value), l.length !== o);
                    d = !0
                  );
              } catch (t) {
                (c = !0), (a = t);
              } finally {
                try {
                  if (
                    !d &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return l;
            }
          })(t, o) ||
          (function (t, o) {
            if (!t) return;
            if ('string' == typeof t) return m(t, o);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return m(t, o);
          })(t, o) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function m(t, o) {
        (null == o || o > t.length) && (o = t.length);
        for (var n = 0, e = new Array(o); n < o; n++) e[n] = t[n];
        return e;
      }
      var f = function (t) {
          var o = b(t.split('/'), 2),
            n = o[0],
            e = o[1];
          return Number(n) / Number(e);
        },
        x = n(2),
        h = n(3),
        y = n(182),
        v = n(5);
      n(1586);
      function w(t, o) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, o) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != n) {
              var e,
                a,
                i,
                r,
                l = [],
                d = !0,
                c = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === o)) {
                  if (Object(n) !== n) return;
                  d = !1;
                } else
                  for (
                    ;
                    !(d = (e = i.call(n)).done) &&
                    (l.push(e.value), l.length !== o);
                    d = !0
                  );
              } catch (t) {
                (c = !0), (a = t);
              } finally {
                try {
                  if (
                    !d &&
                    null != n.return &&
                    ((r = n.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return l;
            }
          })(t, o) ||
          (function (t, o) {
            if (!t) return;
            if ('string' == typeof t) return g(t, o);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return g(t, o);
          })(t, o) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function g(t, o) {
        (null == o || o > t.length) && (o = t.length);
        for (var n = 0, e = new Array(o); n < o; n++) e[n] = t[n];
        return e;
      }
      var M = function (t) {
          var o = t.Measure.axis[0].factor;
          switch (t.Scale[1][1]) {
            case 'ft-in':
              return (t.getLineLength() * o) / 12;
            case 'in':
            default:
              return t.getLineLength() * o;
          }
        },
        C = /^\d*(\.\d*)?$/,
        _ = /^\d*(\s\d\/\d*)$/,
        A = /^(\d\/\d*)*$/,
        E = function () {
          var t = w(
              Object(l.e)(function (t) {
                return [
                  h.a.isElementOpen(t, v.a.CALIBRATION_MODAL),
                  h.a.isElementDisabled(t, v.a.CALIBRATION_MODAL),
                  h.a.getMeasurementUnits(t),
                ];
              }, l.c),
              3
            ),
            o = t[0],
            n = t[1],
            i = t[2],
            b = Object(l.d)(),
            m = w(Object(e.useState)(null), 2),
            g = m[0],
            E = m[1],
            k = w(Object(e.useState)(''), 2),
            O = k[0],
            j = k[1],
            S = w(Object(e.useState)(0), 2),
            I = S[0],
            N = S[1],
            T = w(Object(e.useState)(''), 2),
            L = T[0],
            D = T[1],
            z = w(Object(e.useState)(!1), 2),
            F = z[0],
            R = z[1],
            B = w(Object(d.a)(), 1)[0],
            H = Object(e.useRef)(null);
          Object(e.useEffect)(
            function () {
              var t;
              o &&
                (null == H ||
                  null === (t = H.current) ||
                  void 0 === t ||
                  t.focus()),
                $(p.a.getSelectedAnnotations());
            },
            [o]
          ),
            Object(e.useEffect)(function () {
              var t = function (t, o) {
                'selected' === o
                  ? $(t)
                  : 'deselected' === o && (E(null), j(''), D(''), N(0));
              };
              return (
                p.a.addEventListener('annotationSelected', t),
                function () {
                  return p.a.removeEventListener('annotationSelected', t);
                }
              );
            }, []),
            Object(e.useEffect)(
              function () {
                var t = function (t, o) {
                  'modify' === o &&
                    1 === t.length &&
                    t[0] === g &&
                    (j(M(g).toFixed(2)), D(g.Scale[1][1]));
                };
                return (
                  p.a.addEventListener('annotationChanged', t),
                  function () {
                    return p.a.removeEventListener('annotationChanged', t);
                  }
                );
              },
              [g]
            );
          var $ = function (t) {
              if (
                1 === (null == t ? void 0 : t.length) &&
                'distanceMeasurement' === Object(s.g)(t[0])
              ) {
                var o = t[0];
                E(o);
                var n = M(o).toFixed(2);
                j(n), D(o.Scale[1][1]), N(parseFloat(n));
              }
            },
            U = function (t) {
              return (g.Scale = t), J();
            },
            J = function () {
              var t = M(g),
                o = I / t,
                n = g.Scale;
              return [
                [n[0][0], n[0][1]],
                [n[1][0] * o, L],
              ];
            },
            W = function () {
              b(x.a.closeElements([v.a.CALIBRATION_MODAL]));
            };
          return n || !g
            ? null
            : a.a.createElement(
                y.a,
                {
                  onSwipedUp: W,
                  onSwipedDown: W,
                  preventDefaultTouchmoveEvent: !0,
                },
                a.a.createElement(
                  'div',
                  {
                    className: r()({
                      Modal: !0,
                      CalibrationModal: !0,
                      open: o,
                      closed: !o,
                    }),
                    onMouseDown: W,
                  },
                  ' ',
                  a.a.createElement(
                    'div',
                    {
                      className: 'container',
                      onMouseDown: function (t) {
                        return t.stopPropagation();
                      },
                    },
                    a.a.createElement('div', { className: 'swipe-indicator' }),
                    a.a.createElement(
                      'div',
                      { className: 'calibration__header' },
                      B('component.calibration')
                    ),
                    a.a.createElement(
                      'div',
                      { className: 'calibration__body' },
                      a.a.createElement(
                        'div',
                        null,
                        B('message.enterMeasurement')
                      ),
                      a.a.createElement(
                        'div',
                        { className: 'calibration__input' },
                        a.a.createElement('input', {
                          className: F ? 'error' : '',
                          ref: H,
                          type: 'text',
                          value: O,
                          onChange: function (t) {
                            R(!1), j(t.target.value);
                          },
                          onBlur: function (t) {
                            var o = t.target.value.trim();
                            if (('' === o && R(!0), C.test(o)))
                              0 !== parseFloat(o)
                                ? (N(parseFloat(o)), j(o))
                                : R(!0);
                            else if (_.test(o)) {
                              var n = w(o.split(' '), 2),
                                e = n[0],
                                a = n[1];
                              if (Number.isFinite(f(a))) {
                                var i = Number(e) + f(a);
                                N(parseFloat(i)), j(i);
                              } else R(!0);
                            } else if (A.test(o))
                              if (Number.isFinite(f(o))) {
                                var r = f(o);
                                N(parseFloat(r)), j(r);
                              } else R(!0);
                            else R(!0);
                          },
                        }),
                        a.a.createElement(
                          'select',
                          {
                            className: 'unitToInput',
                            value: L,
                            onChange: function (t) {
                              D(t.target.value);
                            },
                          },
                          i.to.map(function (t) {
                            return a.a.createElement(
                              'option',
                              { key: t, value: t },
                              t
                            );
                          })
                        )
                      ),
                      F
                        ? a.a.createElement(
                            'div',
                            { className: 'errorMeasurement' },
                            B('message.errorEnterMeasurement')
                          )
                        : null
                    ),
                    a.a.createElement(
                      'div',
                      { className: 'calibration__footer' },
                      a.a.createElement(c.a, {
                        dataElement: 'passwordSubmitButton',
                        label: B('action.apply'),
                        onClick: function () {
                          var t = J(),
                            o = U(t);
                          p.a.setAnnotationStyles(g, { Scale: o }),
                            Object(u.a)(
                              'AnnotationCreateDistanceMeasurement',
                              'Scale',
                              o
                            ),
                            b(x.a.closeElements([v.a.CALIBRATION_MODAL]));
                        },
                        disabled: F,
                      })
                    )
                  )
                )
              );
        };
      o.default = E;
    },
  },
]);
//# sourceMappingURL=33.chunk.js.map
