(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    1401: function (e, t, a) {
      var n = a(27),
        r = a(1507);
      'string' == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, '']]);
      var l = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const a = [];
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              if (0 === n)
                r.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    a.length > 0 &&
                      a.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                r.shadowRoot.appendChild(t), a.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      n(r, l);
      e.exports = r.locals || {};
    },
    1507: function (e, t, a) {
      (t = e.exports = a(28)(!1)).push([
        e.i,
        '.ScaleOverlay{position:absolute;z-index:95;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background)}.open.ScaleOverlay{visibility:visible}.closed.ScaleOverlay{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ScaleOverlay{flex-direction:column;font-size:.81rem;padding:.375rem .375rem .375rem 1rem}.ScaleOverlay .divider{width:calc(100% + 1.375rem);height:1px;margin-left:-1rem;background:#cfd4da;margin-top:12px}.ScaleOverlay .scale-overlay-header{position:relative;display:flex;flex-direction:row;justify-content:left;font-weight:400;align-items:center;padding-right:.75rem}.ScaleOverlay .scale-overlay-header .scale-overlay-title{margin-left:.8rem;color:#485056;font-weight:700;line-height:1rem}.ScaleOverlay .scale-overlay-header .add-new-scale{margin-left:1.3rem;min-height:2rem;background-color:transparent;color:#3183c8;font-weight:400;font-size:.8rem;line-height:1rem;border-radius:.3rem;border:1px solid #3183c8;cursor:pointer!important}.ScaleOverlay .scale-overlay-header .scale-overlay-icon{width:1rem;height:1.3rem}.ScaleOverlay .scale-overlay-header .scale-overlay-selector{margin-left:1.3rem;position:relative}.ScaleOverlay .scale-overlay-header .scale-overlay-selector .scale-overlay-selection{height:2rem;min-width:9rem;position:relative;background-color:transparent;border:1px solid var(--border);border-radius:.3rem;line-height:2rem;padding:0 32px 0 .5rem;color:#485056;font-weight:400;font-size:.8rem;text-align:left;text-overflow:ellipsis;white-space:nowrap}.ScaleOverlay .scale-overlay-header .scale-overlay-selector .scale-overlay-arrow{position:absolute;top:50%;right:8px;transform:translateY(-50%);display:flex;justify-content:center;width:16px;height:16px;padding:2px;color:#485056}.ScaleOverlay .scale-overlay-header .scale-overlay-selector ul{margin:0;list-style-type:none;position:absolute;min-width:10rem;left:0;top:0;text-align:left;letter-spacing:0;display:none;border-radius:4px;pointer-events:all;z-index:1000;background-color:#fff;box-shadow:0 0 4px #868e96;padding-left:0}.ScaleOverlay .scale-overlay-header .scale-overlay-selector li{display:block;line-height:2rem;height:2rem;position:relative;font-weight:400;font-size:.8rem;padding-left:.5rem;padding-right:32px;max-width:100%}.ScaleOverlay .scale-overlay-header .scale-overlay-selector li :hover{cursor:pointer}.ScaleOverlay .scale-overlay-header .scale-overlay-selector li:not(:last-child):not(:first-child) .options:hover{background-color:#dee5ed}.ScaleOverlay .scale-overlay-header .scale-overlay-selector li:last-child{padding-top:.5rem;padding-bottom:.5rem;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.ScaleOverlay .scale-overlay-header .scale-overlay-selector li:last-child :hover{cursor:default}.ScaleOverlay .scale-overlay-header .scale-overlay-selector li .option-selected{color:#3183c8}.ScaleOverlay .scale-overlay-header .scale-overlay-selector li .delete{position:absolute;top:50%;right:8px;width:16px;height:16px;transform:translateY(-50%);border:none;background-color:transparent;padding:0;border-radius:2px;display:flex;align-items:center;justify-content:center}.ScaleOverlay .scale-overlay-header .scale-overlay-selector li .delete .Icon{width:11px;height:11px;display:flex}.ScaleOverlay .scale-overlay-header .scale-overlay-selector .delete:hover{background-color:#c7d2dd}.ScaleOverlay .scale-overlay-header .scale-overlay-selector .delete:disabled{background-color:transparent;cursor:not-allowed}.ScaleOverlay .scale-overlay-header .scale-overlay-selector li .add-new-scale{margin-left:0;width:100%}.ScaleOverlay .scale-overlay-header .scale-overlay-selector li .add-new-scale :hover{cursor:pointer}.ScaleOverlay .scale-overlay-header .scale-overlay-selector li .options{border:none;background-color:transparent;padding:0;text-align:left;display:flex;align-items:center;justify-content:space-between;height:100%;z-index:1}.ScaleOverlay .scale-overlay-header .scale-overlay-selector .scale-value{margin-right:1px}.ScaleOverlay .scale-overlay-header .scale-overlay-selector .scale-overlay-list{display:block;pointer-events:all;transform:translateY(0)}.ScaleOverlay .scale-overlay-content{width:192px;min-height:32px;font-weight:400;font-size:13px;line-height:16px;margin-top:16px}.ScaleOverlay .scale-overlay-calibrate{padding-top:20px}.ScaleOverlay .scale-overlay-footer{display:flex;flex-direction:row;justify-content:space-between;width:220px;height:49px;align-items:center}.ScaleOverlay .scale-overlay-footer .calibration-cancel{padding:0;background-color:transparent;color:var(--secondary-button-text);display:flex;align-items:center;justify-content:center;cursor:pointer;border:none;font-size:13px}:host(:not([data-tabbing=true])) .ScaleOverlay .scale-overlay-footer .calibration-cancel,html:not([data-tabbing=true]) .ScaleOverlay .scale-overlay-footer .calibration-cancel{outline:none}.ScaleOverlay .scale-overlay-footer .calibration-cancel:enabled:hover{color:var(--secondary-button-hover)}.ScaleOverlay .scale-overlay-footer .calibration-cancel:disabled{opacity:.5}.ScaleOverlay .scale-overlay-footer .calibration-apply{border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;padding:0 8px;height:32px;width:72px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer}:host(:not([data-tabbing=true])) .ScaleOverlay .scale-overlay-footer .calibration-apply,html:not([data-tabbing=true]) .ScaleOverlay .scale-overlay-footer .calibration-apply{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleOverlay .scale-overlay-footer .calibration-apply{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleOverlay .scale-overlay-footer .calibration-apply{font-size:13px}}.ScaleOverlay .scale-overlay-footer .calibration-apply:enabled:hover{background:var(--primary-button-hover)}.ScaleOverlay .scale-overlay-footer .calibration-apply:disabled{opacity:.5}.ScaleOverlay .MeasurementDetail{word-wrap:break-word;flex-wrap:wrap;font-weight:400;font-size:.81rem;line-height:1rem;margin-bottom:1rem}.ScaleOverlay .MeasurementDetail .header{display:flex;justify-content:left;align-items:center;width:100%;margin-top:.75rem;margin-bottom:.75rem;font-weight:700;font-size:.81rem}.ScaleOverlay .MeasurementDetail .header .icon{width:1.5rem;height:1.5rem;margin-right:.67rem}.ScaleOverlay .MeasurementDetail .scale-input{width:45px}.ScaleOverlay .MeasurementDetail .measurement__detail-container{margin-left:2.17rem}.ScaleOverlay .MeasurementDetail .measurement__detail-container .measurement__detail-item{display:flex;height:1.5rem;align-items:center}.ScaleOverlay .MeasurementDetail .distance_input{display:flex;margin-top:.5rem}.ScaleOverlay .MeasurementDetail .distance_input .distance-show{margin-right:.5rem}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleOverlay .MeasurementDetail .distance_input .distance-show{width:79px;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleOverlay .MeasurementDetail .distance_input .distance-show{width:79px;height:32px}}.ScaleOverlay .MeasurementDetail .angle_input,.ScaleOverlay .MeasurementDetail .measurement__deltas--X,.ScaleOverlay .MeasurementDetail .measurement__deltas--Y{display:flex;margin-top:.5rem}.ScaleOverlay .MeasurementDetail .measurement_list{width:5rem;margin-right:.5rem}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1713: function (e, t, a) {
      'use strict';
      a.r(t);
      a(24),
        a(7),
        a(52),
        a(64),
        a(32),
        a(18),
        a(11),
        a(13),
        a(12),
        a(8),
        a(9),
        a(10),
        a(15),
        a(14),
        a(20),
        a(17);
      var n = a(2),
        r = (a(36), a(221), a(25), a(39), a(0)),
        l = a.n(r),
        o = a(33),
        i = (a(104), a(127), a(98), a(19)),
        c = a.n(i),
        s = a(57),
        u = a(4),
        d = a.n(u),
        m = a(362),
        p = a(6),
        f = a(3),
        y = a(1),
        v = a(147);
      function h(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return S(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          g(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function b(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var a =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != a) {
              var n,
                r,
                l,
                o,
                i = [],
                c = !0,
                s = !1;
              try {
                if (((l = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = l.call(a)).done) &&
                    (i.push(n.value), i.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != a.return &&
                    ((o = a.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          g(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function g(e, t) {
        if (e) {
          if ('string' == typeof e) return S(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === a && e.constructor && (a = e.constructor.name),
            'Map' === a || 'Set' === a
              ? Array.from(e)
              : 'Arguments' === a ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                ? S(e, t)
                : void 0
          );
        }
      }
      function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var O = {
          scales: d.a.arrayOf(d.a.object).isRequired,
          selectedScales: d.a.arrayOf(d.a.string).isRequired,
          onScaleSelected: d.a.func.isRequired,
          onAddingNewScale: d.a.func.isRequired,
        },
        w = window.Core.Scale,
        E = function (e) {
          var t = e.scales,
            a = void 0 === t ? [] : t,
            i = e.selectedScales,
            u = void 0 === i ? [] : i,
            d = e.onScaleSelected,
            g = e.onAddingNewScale,
            S = b(Object(m.a)(), 1)[0],
            O = Object(p.d)(),
            E = Object(p.e)(function (e) {
              return f.a.getIsMultipleScalesMode(e);
            }),
            M = u.length > 1,
            A = function (e) {
              if (e) {
                var t = new w(e),
                  a = (function (e) {
                    var t = y.a.getScales(),
                      a = [],
                      n = new Set();
                    return (
                      t[e.toString()].forEach(function (e) {
                        e instanceof window.Core.Annotations.Annotation &&
                          (n.add(e.PageNumber), a.push(e));
                      }),
                      { measurementsNum: a.length, pages: h(n) }
                    );
                  })(t),
                  r = {
                    message: !!a.pages.length
                      ? l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(
                            'p',
                            null,
                            l.a.createElement(
                              'span',
                              null,
                              S(
                                'option.measurement.deleteScaleModal.scaleIsOn-delete-info'
                              ),
                              l.a.createElement(
                                'b',
                                null,
                                ' '
                                  .concat(
                                    S(
                                      'option.measurement.deleteScaleModal.page-delete-info'
                                    ),
                                    ' '
                                  )
                                  .concat(a.pages.join(', '), ' ')
                              ),
                              S(
                                'option.measurement.deleteScaleModal.appliedTo-delete-info'
                              ),
                              l.a.createElement(
                                'b',
                                null,
                                ' '
                                  .concat(a.measurementsNum, ' ')
                                  .concat(
                                    a.measurementsNum > 1
                                      ? S(
                                          'option.measurement.deleteScaleModal.measurements'
                                        )
                                      : S(
                                          'option.measurement.deleteScaleModal.measurement'
                                        ),
                                    '.'
                                  )
                              )
                            ),
                            l.a.createElement('span', null, ' '),
                            l.a.createElement(
                              'span',
                              null,
                              S(
                                'option.measurement.deleteScaleModal.deletionIs'
                              ),
                              l.a.createElement(
                                'b',
                                null,
                                ' '.concat(
                                  S(
                                    'option.measurement.deleteScaleModal.irreversible'
                                  ),
                                  ' '
                                )
                              ),
                              S(
                                'option.measurement.deleteScaleModal.willDeleteMeasurement'
                              )
                            )
                          ),
                          l.a.createElement(
                            'p',
                            null,
                            S(
                              'option.measurement.deleteScaleModal.confirmDelete'
                            )
                          )
                        )
                      : l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(
                            'p',
                            null,
                            l.a.createElement(
                              'span',
                              null,
                              S(
                                'option.measurement.deleteScaleModal.deletionIs'
                              ),
                              l.a.createElement(
                                'b',
                                null,
                                ' '.concat(
                                  S(
                                    'option.measurement.deleteScaleModal.irreversible'
                                  ),
                                  '. '
                                )
                              ),
                              S(
                                'option.measurement.deleteScaleModal.confirmDelete'
                              )
                            )
                          )
                        ),
                    title: ''
                      .concat(
                        S('option.measurement.deleteScaleModal.deleteScale'),
                        ' '
                      )
                      .concat(t.toString()),
                    confirmBtnText: S('action.confirm'),
                    onConfirm: function () {
                      return y.a.deleteScale(t);
                    },
                  };
                O(n.a.showWarningMessage(r));
              }
            },
            x = function (e) {
              var t = y.a.getScalePrecision(e),
                a = w.getFormattedValue(
                  e.pageScale.value,
                  e.pageScale.unit,
                  t,
                  !1
                ),
                n = w.getFormattedValue(
                  e.worldScale.value,
                  e.worldScale.unit,
                  t,
                  !1
                ),
                r = ''.concat(a, ' = ').concat(n);
              return l.a.createElement(
                'div',
                null,
                l.a.createElement('span', null, r)
              );
            },
            j = S('option.measurement.scaleOverlay.multipleScales');
          if (u.length && !M) {
            var C = new w(u[0]);
            j = x(C);
          }
          var N = b(Object(r.useState)(!1), 2),
            T = N[0],
            _ = N[1],
            k = Object(r.useRef)(null);
          return (
            Object(v.a)(k, function () {
              _(!1);
            }),
            l.a.createElement(
              s.a,
              {
                className: 'scale-overlay-selector',
                dataElement: 'scaleSelector',
                tabIndex: 0,
                onClick: function () {
                  _(function (e) {
                    return !e;
                  });
                },
                ref: k,
              },
              l.a.createElement(
                'button',
                { className: 'scale-overlay-selection' },
                j,
                l.a.createElement(o.a, {
                  className: 'scale-overlay-arrow',
                  glyph: 'icon-chevron-down',
                })
              ),
              T &&
                l.a.createElement(
                  'ul',
                  { className: c()('scale-overlay-list') },
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement('div', null, j),
                    l.a.createElement(o.a, {
                      className: 'scale-overlay-arrow',
                      glyph: 'icon-chevron-up',
                    })
                  ),
                  a.map(function (e) {
                    return l.a.createElement(
                      'li',
                      { key: e.toString() },
                      l.a.createElement(
                        'button',
                        {
                          className: 'delete',
                          onMouseDown: function (t) {
                            t.preventDefault(),
                              t.stopPropagation(),
                              A(e.toString());
                          },
                          disabled: a.length <= 1,
                        },
                        l.a.createElement(o.a, { glyph: 'icon-delete-line' })
                      ),
                      l.a.createElement(
                        'button',
                        {
                          className: c()({
                            options: !0,
                            'option-selected': u.includes(e.toString()),
                          }),
                          onMouseDown: function () {
                            return d(u, e.toString());
                          },
                        },
                        x(e)
                      )
                    );
                  }),
                  E &&
                    l.a.createElement(
                      'li',
                      null,
                      l.a.createElement(
                        'button',
                        { onMouseDown: g, className: 'add-new-scale' },
                        S('option.measurement.scaleOverlay.addNewScale')
                      )
                    )
                )
            )
          );
        };
      E.propTypes = O;
      var M = E;
      function A(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var a =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != a) {
              var n,
                r,
                l,
                o,
                i = [],
                c = !0,
                s = !1;
              try {
                if (((l = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = l.call(a)).done) &&
                    (i.push(n.value), i.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != a.return &&
                    ((o = a.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return x(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === a && e.constructor && (a = e.constructor.name);
            if ('Map' === a || 'Set' === a) return Array.from(e);
            if (
              'Arguments' === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            )
              return x(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function x(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var j = {
          scales: d.a.arrayOf(d.a.object).isRequired,
          selectedScales: d.a.arrayOf(d.a.string).isRequired,
          onScaleSelected: d.a.func.isRequired,
          onAddingNewScale: d.a.func.isRequired,
        },
        C = function (e) {
          var t = e.scales,
            a = e.selectedScales,
            n = e.onScaleSelected,
            r = e.onAddingNewScale,
            i = A(Object(m.a)(), 1)[0];
          return l.a.createElement(
            'div',
            { className: 'scale-overlay-header' },
            l.a.createElement(o.a, {
              glyph: 'ic-calibrate',
              className: 'scale-overlay-icon',
            }),
            l.a.createElement(
              'div',
              { className: 'scale-overlay-title' },
              i('option.measurementOption.scale')
            ),
            t.length
              ? l.a.createElement(M, {
                  scales: t,
                  selectedScales: a,
                  onScaleSelected: n,
                  onAddingNewScale: r,
                })
              : l.a.createElement(
                  'button',
                  {
                    className: 'add-new-scale',
                    onClick: r,
                    'data-element': 'addNewScale',
                  },
                  i('option.measurement.scaleOverlay.addNewScale')
                )
          );
        };
      C.propTypes = j;
      var N = C,
        T = (a(34), a(424), a(61)),
        _ = {
          distanceMeasurement: 'option.measurementOverlay.distanceMeasurement',
          perimeterMeasurement:
            'option.measurementOverlay.perimeterMeasurement',
          areaMeasurement: 'option.measurementOverlay.areaMeasurement',
          rectangularAreaMeasurement:
            'option.measurementOverlay.areaMeasurement',
          cloudyRectangularAreaMeasurement:
            'option.measurementOverlay.areaMeasurement',
          ellipseMeasurement: 'option.measurementOverlay.areaMeasurement',
          arcMeasurement: 'option.measurementOverlay.arcMeasurement',
        },
        k = a(370),
        I = function (e) {
          return 1 === e
            ? 0
            : null == e
              ? void 0
              : e.toString().split('.')[1].length;
        },
        D = a(35),
        L = function (e, t, a) {
          var n;
          if (e && t)
            if (a) {
              var r = Math.sqrt(
                  Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)
                ),
                l = Math.sqrt(Math.pow(t.x - a.x, 2) + Math.pow(t.y - a.y, 2)),
                o = Math.sqrt(Math.pow(a.x - e.x, 2) + Math.pow(a.y - e.y, 2));
              n = Math.acos((l * l + r * r - o * o) / (2 * l * r));
            } else
              (n = Math.atan2(t.y - e.y, t.x - e.x)),
                (n = (n = Math.abs(n)) > Math.PI / 2 ? Math.PI - n : n);
          return n;
        };
      function R(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var a =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != a) {
              var n,
                r,
                l,
                o,
                i = [],
                c = !0,
                s = !1;
              try {
                if (((l = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = l.call(a)).done) &&
                    (i.push(n.value), i.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != a.return &&
                    ((o = a.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return P(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === a && e.constructor && (a = e.constructor.name);
            if ('Map' === a || 'Set' === a) return Array.from(e);
            if (
              'Arguments' === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            )
              return P(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function P(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var F = { 'in"': 'in', "ft'": 'ft' };
      U.propTypes = {
        annotation: d.a.object,
        isOpen: d.a.bool.isRequired,
        selectedTool: d.a.object,
      };
      var q = window.Core.Scale;
      function U(e) {
        var t,
          a = e.annotation,
          n = e.isOpen,
          o = e.selectedTool,
          i = R(Object(m.a)(), 1)[0],
          c = Object(p.e)(function (e) {
            return f.a.isDocumentReadOnly(e);
          }),
          s = null == a ? void 0 : a.Measure.axis[0].factor,
          u =
            (null == a ? void 0 : a.DisplayUnits[0]) ||
            (null == o || null === (t = o.Measure) || void 0 === t
              ? void 0
              : t.unit),
          d = R(
            Object(r.useState)(
              ((null == a ? void 0 : a.getLineLength()) * s || 0).toFixed(2)
            ),
            2
          ),
          v = d[0],
          h = d[1],
          b = R(Object(r.useState)(!1), 2),
          g = b[0],
          S = b[1],
          O = R(Object(r.useState)(!1), 2),
          w = O[0],
          E = O[1];
        Object(r.useEffect)(
          function () {
            if (a) {
              var e = function () {
                h((a.getLineLength() * s).toFixed(2)), W(P());
              };
              return (
                y.a.addEventListener('mouseMove', e),
                function () {
                  y.a.removeEventListener('mouseMove', e);
                }
              );
            }
            W(P());
          },
          [a, P, s, o]
        );
        var M = function (e) {
            h(e.target.value), C(e), A();
          },
          A = function () {
            y.a.getTool('AnnotationCreateDistanceMeasurement').finish();
          },
          x = function () {
            y.a.getAnnotationManager().selectAnnotation(a);
          },
          j = function () {
            y.a.getAnnotationManager().deselectAnnotation(a);
          },
          C = function (e) {
            if (a) {
              var t = Math.abs(e.target.value);
              t < a.Precision && ((t = a.Precision), h(t));
              var n = a.Measure.axis[0].factor;
              N(t / n);
            }
          },
          N = Object(r.useCallback)(
            function (e) {
              if (
                ((n = a.getLineLength()), (r = e), !(Math.abs(n - r) < 0.1))
              ) {
                var t = k();
                a.setLineLength(Math.min(t, e)), _();
              }
              var n, r;
            },
            [a, _, k]
          ),
          T = function (e) {
            var t, a;
            return (
              null != e &&
                null !== (t = e.DisplayUnits) &&
                void 0 !== t &&
                t.length &&
                (a =
                  2 === e.DisplayUnits.length &&
                  "ft'" === e.DisplayUnits[0] &&
                  'in"' === e.DisplayUnits[1]
                    ? 'in'
                    : e.DisplayUnits[0]),
              F[a] || a || F[u] || u
            );
          },
          _ = Object(r.useCallback)(
            function () {
              var e = y.a.getAnnotationManager();
              e.drawAnnotations(a.PageNumber),
                e.trigger('annotationChanged', [[a], 'modify', {}]);
            },
            [a]
          ),
          k = Object(r.useCallback)(
            function () {
              var e,
                t,
                n = y.a.getCurrentPage(),
                r = y.a.getPageWidth(n),
                l = y.a.getPageHeight(n),
                o = a.getAngle() * (180 / Math.PI).toFixed(2),
                i = a.getStartPoint(),
                c = i.x,
                s = i.y;
              (e = Math.abs(o) < 90 ? r : 0), (t = o > 0 ? l : 0);
              var u = Math.abs((e - c) / Math.cos(a.getAngle())),
                d = Math.abs((t - s) / Math.sin(a.getAngle()));
              return Math.min(u, d);
            },
            [a]
          ),
          I = function (e) {
            W(e.target.value),
              (function (e) {
                var t = e.target.value * (Math.PI / 180) * -1,
                  n = a.getLineLength(),
                  r = a.Start,
                  l = Math.cos(t) * n + r.x,
                  o = Math.sin(t) * n + r.y;
                a.setEndPoint(l, o), a.adjustRect(), _();
              })(e),
              A();
          },
          P = Object(r.useCallback)(
            function () {
              if (!a) return 0;
              var e = a.getAngle();
              return (
                ((e = (e *= -1) < 0 ? e + 2 * Math.PI : e) / Math.PI) *
                180
              ).toFixed(2);
            },
            [a]
          ),
          U = R(Object(r.useState)(P()), 2),
          H = U[0],
          W = U[1];
        return (
          Object(r.useEffect)(
            function () {
              n || N(a.getLineLength());
            },
            [a, N, n]
          ),
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'div',
              { className: 'measurement__detail-item' },
              l.a.createElement(
                'div',
                { className: 'measurement_list' },
                i('option.measurementOverlay.distance'),
                ':'
              ),
              a && g
                ? l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement('input', {
                      className: 'scale-input',
                      type: 'number',
                      min: '0',
                      disabled: c,
                      value: v,
                      autoFocus: !D.m,
                      onChange: function (e) {
                        M(e), x();
                      },
                      onBlur: function (e) {
                        C(e), S(!1);
                      },
                      onKeyDown: function (e) {
                        'Enter' === e.key && (M(e), j());
                      },
                    }),
                    u
                  )
                : l.a.createElement(
                    'div',
                    {
                      onClick: function () {
                        return S(!0);
                      },
                      className: 'distance-show',
                    },
                    (null == a ? void 0 : a.getContents()) || 0
                  )
            ),
            l.a.createElement(
              'div',
              { className: 'measurement__detail-item' },
              l.a.createElement(
                'div',
                { className: 'measurement_list' },
                i('option.measurementOverlay.angle'),
                ':'
              ),
              a && w
                ? l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement('input', {
                      className: 'scale-input',
                      type: 'number',
                      min: '0',
                      max: '360',
                      disabled: c,
                      value: H,
                      autoFocus: !D.m,
                      onChange: function (e) {
                        I(e), x();
                      },
                      onBlur: function () {
                        return E(!1);
                      },
                      onKeyDown: function (e) {
                        'Enter' === e.key && (I(e), j());
                      },
                    }),
                    '°'
                  )
                : l.a.createElement(
                    'div',
                    {
                      onClick: function () {
                        return E(!0);
                      },
                      className: 'distance-show',
                    },
                    H,
                    '°'
                  )
            ),
            (function () {
              var e = (a && L(a.Start, a.End)) || 0,
                t = T(a),
                n = q.getFormattedValue(
                  a && Math.abs(v * Math.cos(e)),
                  t,
                  null == a ? void 0 : a.Precision
                ),
                r = q.getFormattedValue(
                  a && Math.abs(v * Math.sin(e)),
                  t,
                  null == a ? void 0 : a.Precision
                );
              return l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(
                  'div',
                  { className: 'measurement__detail-item' },
                  l.a.createElement(
                    'div',
                    { className: 'measurement_list' },
                    'X:'
                  ),
                  l.a.createElement('div', null, n)
                ),
                l.a.createElement(
                  'div',
                  { className: 'measurement__detail-item' },
                  l.a.createElement(
                    'div',
                    { className: 'measurement_list' },
                    'Y:'
                  ),
                  l.a.createElement('div', null, r)
                )
              );
            })()
          )
        );
      }
      var H = U,
        W = function (e) {
          switch (e) {
            case "ft'":
              return 'ft';
            case 'in"':
              return 'in';
            case 'ft-in':
              return 'ft';
            default:
              return e;
          }
        };
      function z(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var a =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != a) {
              var n,
                r,
                l,
                o,
                i = [],
                c = !0,
                s = !1;
              try {
                if (((l = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = l.call(a)).done) &&
                    (i.push(n.value), i.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != a.return &&
                    ((o = a.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return B(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === a && e.constructor && (a = e.constructor.name);
            if ('Map' === a || 'Set' === a) return Array.from(e);
            if (
              'Arguments' === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            )
              return B(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function B(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var G = {
        annotation: function (e, t, a) {
          return e.annotation || e.selectedTool
            ? (e.annotation &&
                d.a.checkPropTypes(
                  {
                    annotation: d.a.shape({
                      Precision: d.a.number,
                      DisplayUnits: d.a.arrayOf(d.a.string),
                      getContents: d.a.func,
                    }),
                  },
                  { annotation: e.annotation },
                  'prop',
                  'EllipseMeasurementOverlay'
                ),
              null)
            : new Error(
                "One of props 'annotation' or 'selectedTool' was not specified in '".concat(
                  a,
                  "'."
                )
              );
        },
        selectedTool: function (e, t, a) {
          return e.annotation || e.selectedTool
            ? (e.selectedTool &&
                d.a.checkPropTypes(
                  {
                    selectedTool: d.a.shape({
                      defaults: d.a.shape({ Precision: d.a.number }),
                      Measure: d.a.shape({ unit: d.a.string }),
                    }),
                  },
                  { selectedTool: e.selectedTool },
                  'prop',
                  'EllipseMeasurementOverlay'
                ),
              null)
            : new Error(
                "One of props 'annotation' or 'selectedTool' was not specified in '".concat(
                  a,
                  "'."
                )
              );
        },
        isOpen: d.a.bool.isRequired,
      };
      function V(e) {
        var t,
          a,
          n = e.annotation,
          o = e.isOpen,
          i = e.selectedTool,
          c = Object(m.a)().t,
          s = Object(p.e)(function (e) {
            return f.a.isDocumentReadOnly(e);
          }),
          u = {
            precision: n
              ? n.Precision
              : null == i || null === (t = i.defaults) || void 0 === t
                ? void 0
                : t.Precision,
            unit: W(
              ((null == n ? void 0 : n.Scale) ||
                (null == i || null === (a = i.defaults) || void 0 === a
                  ? void 0
                  : a.Scale))[1][1]
            ),
            area: (null == n ? void 0 : n.getContents()) || 0,
          },
          d = function () {
            E(v());
          };
        Object(r.useEffect)(
          function () {
            return (
              d(),
              y.a.addEventListener('mouseMove', d),
              function () {
                y.a.removeEventListener('mouseMove', d);
              }
            );
          },
          [n]
        ),
          Object(r.useEffect)(function () {
            var e = function (e, t) {
              if ('deselected' === t) {
                var a = e[0];
                S(a.getWidth(), a);
              }
            };
            return (
              y.a.addEventListener('annotationSelected', e),
              function () {
                y.a.removeEventListener('annotationSelected', e);
              }
            );
          }, []);
        var v = function () {
            if (!n) return 0;
            var e = (n && I(n.Precision)) || 0,
              t = n.Measure.axis[0].factor;
            return ((n.Width / 2).toFixed(e) * t).toFixed(e);
          },
          h = function (e) {
            var t = Math.abs(e.target.value),
              a = 2 * (t / n.Measure.axis[0].factor),
              r = n.getRect(),
              l = { x1: r.x1, y1: r.y1, x2: r.x1 + a, y2: r.y1 + a };
            n.setHeight(a),
              n.setWidth(a),
              n.resize(l),
              E(t),
              b(n),
              y.a.getTool('AnnotationCreateEllipseMeasurement').finish();
          },
          b = function (e) {
            var t = y.a.getAnnotationManager();
            t.redrawAnnotation(e),
              t.trigger('annotationChanged', [[e], 'modify', []]);
          },
          g = Object(r.useCallback)(function (e) {
            var t = y.a.getCurrentPage(),
              a = y.a.getPageWidth(t),
              n = y.a.getPageHeight(t),
              r = a - e.X,
              l = n - e.Y;
            return Math.min(r, l);
          }),
          S = Object(r.useCallback)(
            function (e, t) {
              if (e > g(t)) {
                var a = t.getRect(),
                  n = a.x1,
                  r = a.x2,
                  l = a.y1,
                  o = a.y2,
                  i = t.Width,
                  c = t.Height,
                  s = y.a.getCurrentPage(),
                  u = y.a.getPageWidth(s),
                  d = y.a.getPageHeight(s);
                r > u && ((a.x2 = u), (i = u - n)),
                  o > d && ((a.y2 = d), (c = d - l)),
                  i < u ? t.setWidth(i) : t.setWidth(u),
                  c < d ? t.setHeight(c) : t.setHeight(d),
                  t.resize(a),
                  b(t);
              }
            },
            [g]
          );
        Object(r.useEffect)(
          function () {
            o || S(n.getWidth(), n);
          },
          [n, S, o]
        );
        var O = z(Object(r.useState)(v()), 2),
          w = O[0],
          E = O[1];
        return l.a.createElement(
          'div',
          { className: 'measurement__detail-container' },
          l.a.createElement(
            'div',
            { className: 'measurement__detail-item' },
            l.a.createElement(
              'div',
              { className: 'measurement_list' },
              c('option.shared.precision'),
              ':'
            ),
            k.q[u.precision] || u.precision
          ),
          l.a.createElement(
            'div',
            { className: 'measurement__detail-item' },
            l.a.createElement(
              'div',
              { className: 'measurement_list' },
              c('option.measurementOverlay.area'),
              ':'
            ),
            l.a.createElement('div', { className: 'distance-show' }, u.area)
          ),
          l.a.createElement(
            'div',
            { className: 'measurement__detail-item' },
            l.a.createElement(
              'div',
              { className: 'measurement_list' },
              c('option.measurementOverlay.radius'),
              ':'
            ),
            n
              ? l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement('input', {
                    autoFocus: !D.m,
                    className: 'scale-input',
                    type: 'number',
                    min: '0',
                    disabled: s,
                    value: w,
                    onChange: function (e) {
                      h(e), y.a.getAnnotationManager().selectAnnotation(n);
                    },
                    onBlur: function (e) {
                      return (function (e) {
                        var t = Math.abs(e.target.value),
                          a = n.Measure.axis[0].factor;
                        S(2 * (t / a), n), d();
                      })(e);
                    },
                    onKeyDown: function (e) {
                      'Enter' === e.key &&
                        (h(e),
                        y.a.getAnnotationManager().deselectAnnotation(n));
                    },
                  }),
                  u.unit
                )
              : l.a.createElement('div', null, '0')
          )
        );
      }
      V.propTypes = G;
      var Y = V;
      a(1401);
      function $(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return K(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return K(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === a && e.constructor && (a = e.constructor.name);
            if ('Map' === a || 'Set' === a) return Array.from(e);
            if (
              'Arguments' === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            )
              return K(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function K(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var X = {
          annotation: d.a.object,
          isOpen: d.a.bool.isRequired,
          selectedTool: d.a.object,
        },
        J = function (e) {
          var t,
            a,
            n,
            i,
            c = e.annotation,
            s = e.isOpen,
            u = e.selectedTool,
            d = Object(m.a)().t,
            p = Object(r.useMemo)(function () {
              var e,
                t,
                a,
                n = c ? Object(T.g)(c) : Object(T.i)(u.name);
              return {
                key: n,
                icon: Object(T.e)(n).icon,
                color: c
                  ? c.Color.toHexString()
                  : null == u ||
                      null === (e = u.defaults) ||
                      void 0 === e ||
                      null === (t = e.StrokeColor) ||
                      void 0 === t
                    ? void 0
                    : t.toHexString(),
                contents: c ? c.getContents() : 0,
                precision: c
                  ? c.Precision
                  : null == u || null === (a = u.defaults) || void 0 === a
                    ? void 0
                    : a.Precision,
              };
            });
          return l.a.createElement(
            'div',
            { className: 'MeasurementDetail' },
            ((t = p.key),
            (a = p.icon),
            (n = p.color),
            (i = _[t]),
            l.a.createElement(
              'div',
              { className: 'header' },
              l.a.createElement(o.a, { glyph: a, color: n, className: 'icon' }),
              l.a.createElement('div', null, d(i))
            )),
            (function () {
              var e,
                t,
                a = p.key,
                n = p.precision;
              return 'ellipseMeasurement' === a
                ? l.a.createElement(Y, {
                    annotation: c,
                    selectedTool: u,
                    isOpen: s,
                  })
                : l.a.createElement(
                    'div',
                    { className: 'measurement__detail-container' },
                    l.a.createElement(
                      'div',
                      { className: 'measurement__detail-item' },
                      l.a.createElement(
                        'div',
                        { className: 'measurement_list' },
                        d('option.shared.precision'),
                        ':'
                      ),
                      k.q[n] || n
                    ),
                    'distanceMeasurement' === a &&
                      l.a.createElement(H, {
                        annotation: c,
                        isOpen: s,
                        selectedTool: u,
                      }),
                    [
                      'rectangularAreaMeasurement',
                      'cloudyRectangularAreaMeasurement',
                      'perimeterMeasurement',
                      'areaMeasurement',
                    ].includes(a) &&
                      (function () {
                        var e = p.key,
                          t = p.contents,
                          a = {
                            distanceMeasurement: d(
                              'option.measurementOverlay.distance'
                            ),
                            perimeterMeasurement: d(
                              'option.measurementOverlay.perimeter'
                            ),
                            areaMeasurement: d(
                              'option.measurementOverlay.area'
                            ),
                            rectangularAreaMeasurement: d(
                              'option.measurementOverlay.area'
                            ),
                            cloudyRectangularAreaMeasurement: d(
                              'option.measurementOverlay.area'
                            ),
                          };
                        return l.a.createElement(
                          'div',
                          { className: 'measurement__detail-item' },
                          l.a.createElement(
                            'div',
                            { className: 'measurement_list' },
                            a[e],
                            ':'
                          ),
                          t
                        );
                      })(),
                    'arcMeasurement' === a &&
                      ((t = (null == c ? void 0 : c.Length) || 0),
                      l.a.createElement(
                        'div',
                        { className: 'measurement__detail-item' },
                        l.a.createElement(
                          'div',
                          { className: 'measurement_list' },
                          d('option.measurementOverlay.length')
                        ),
                        ' ',
                        t
                      )),
                    'arcMeasurement' === a &&
                      ((e = (null == c ? void 0 : c.Radius) || 0),
                      l.a.createElement(
                        'div',
                        { className: 'measurement__detail-item' },
                        l.a.createElement(
                          'div',
                          { className: 'measurement_list' },
                          d('option.measurementOverlay.radius')
                        ),
                        ' ',
                        e
                      )),
                    ![
                      'rectangularAreaMeasurement',
                      'distanceMeasurement',
                      'cloudyRectangularAreaMeasurement',
                    ].includes(a) &&
                      (function () {
                        if (!c)
                          return l.a.createElement(
                            'div',
                            { className: 'measurement__detail-item' },
                            l.a.createElement(
                              'div',
                              { className: 'measurement_list' },
                              d('option.measurementOverlay.angle'),
                              ':'
                            ),
                            ' 0°'
                          );
                        var e = p.key,
                          t = function (e) {
                            var t = e.getPath(),
                              a = t.length;
                            return [t[a - 3], t[a - 2], t[a - 1]];
                          },
                          a = {
                            distanceMeasurement: function (e) {
                              return [e.Start, e.End];
                            },
                            perimeterMeasurement: t,
                            areaMeasurement: t,
                            rectangularAreaMeasurement: t,
                            cloudyRectangularAreaMeasurement: t,
                            arcMeasurement: t,
                          }
                            [e](c)
                            .filter(function (e) {
                              return !!e;
                            }),
                          n = L.apply(void 0, $(a));
                        if (n) {
                          var r = I(c.Precision);
                          n = ((n / Math.PI) * 180).toFixed(r);
                        }
                        return (
                          'arcMeasurement' === e && (n = c.Angle.toFixed(2)),
                          void 0 !== n &&
                            l.a.createElement(
                              'div',
                              { className: 'measurement__detail-item' },
                              l.a.createElement(
                                'div',
                                { className: 'measurement_list' },
                                d('option.measurementOverlay.angle'),
                                ':'
                              ),
                              n,
                              '°'
                            )
                        );
                      })()
                  );
            })()
          );
        };
      J.propTypes = X;
      var Q = J;
      function Z(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var a =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != a) {
              var n,
                r,
                l,
                o,
                i = [],
                c = !0,
                s = !1;
              try {
                if (((l = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = l.call(a)).done) &&
                    (i.push(n.value), i.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != a.return &&
                    ((o = a.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return ee(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === a && e.constructor && (a = e.constructor.name);
            if ('Map' === a || 'Set' === a) return Array.from(e);
            if (
              'Arguments' === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            )
              return ee(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ee(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var te = window.Core.Scale,
        ae = {
          tempScale: d.a.string,
          onCancelCalibrationMode: d.a.func,
          onApplyCalibration: d.a.func,
        },
        ne = function (e) {
          var t,
            a = e.tempScale,
            n = e.onCancelCalibrationMode,
            r = e.onApplyCalibration,
            i = Z(Object(m.a)(), 1)[0],
            c = Object(p.e)(function (e) {
              return f.a.isElementOpen(e, 'annotationPopup');
            }),
            s = c && a;
          return l.a.createElement(
            'div',
            { className: 'scale-overlay-calibrate' },
            l.a.createElement(
              'div',
              { className: 'scale-overlay-header' },
              l.a.createElement(o.a, {
                glyph: 'ic-calibrate',
                className: 'scale-overlay-icon',
              }),
              l.a.createElement(
                'div',
                { className: 'scale-overlay-title' },
                i('option.measurement.scaleModal.calibrate')
              )
            ),
            l.a.createElement(
              'div',
              { className: 'scale-overlay-content' },
              i(
                s
                  ? 'option.measurement.scaleOverlay.inputKnowDimension'
                  : 'option.measurement.scaleOverlay.selectTwoPoints'
              )
            ),
            l.a.createElement('div', { className: 'divider' }),
            l.a.createElement(
              'div',
              { className: 'scale-overlay-footer' },
              l.a.createElement(
                'button',
                { className: 'calibration-cancel', onMouseDown: n },
                i('action.cancel')
              ),
              l.a.createElement(
                'button',
                {
                  className: 'calibration-apply',
                  disabled: !(
                    c &&
                    a &&
                    (null === (t = new te(a).worldScale) || void 0 === t
                      ? void 0
                      : t.value) > 0
                  ),
                  'data-element': 'calibrationApply',
                  onMouseDown: r,
                },
                i('action.apply')
              )
            )
          );
        };
      ne.propTypes = ae;
      var re = ne;
      function le(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return ce(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          ie(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function oe(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var a =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != a) {
              var n,
                r,
                l,
                o,
                i = [],
                c = !0,
                s = !1;
              try {
                if (((l = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = l.call(a)).done) &&
                    (i.push(n.value), i.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != a.return &&
                    ((o = a.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          ie(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ie(e, t) {
        if (e) {
          if ('string' == typeof e) return ce(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === a && e.constructor && (a = e.constructor.name),
            'Map' === a || 'Set' === a
              ? Array.from(e)
              : 'Arguments' === a ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                ? ce(e, t)
                : void 0
          );
        }
      }
      function ce(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var se = window.Core.Scale,
        ue = {
          annotations: d.a.arrayOf(d.a.object).isRequired,
          selectedTool: d.a.object,
          updateIsCalibration: d.a.func.isRequired,
          enableOrDisableToolElements: d.a.func.isRequired,
          onScaleSelected: d.a.func.isRequired,
          onCancelCalibrationMode: d.a.func.isRequired,
          onApplyCalibration: d.a.func.isRequired,
          onAddingNewScale: d.a.func.isRequired,
        },
        de = function (e) {
          var t = e.annotations,
            a = e.selectedTool,
            n = e.updateIsCalibration,
            o = e.enableOrDisableToolElements,
            i = e.onScaleSelected,
            c = e.onCancelCalibrationMode,
            s = e.onApplyCalibration,
            u = e.onAddingNewScale,
            d = oe(
              Object(p.e)(function (e) {
                return [f.a.getCalibrationInfo(e), f.a.getActiveToolName(e)];
              }, p.c),
              2
            ),
            m = d[0],
            v = m.isCalibration,
            h = m.tempScale,
            b = m.previousToolName,
            g = void 0 === b ? 'AnnotationCreateDistanceMeasurement' : b,
            S = m.isFractionalUnit,
            O = d[1],
            w = oe(Object(r.useState)(y.a.getScales()), 2),
            E = w[0],
            M = w[1],
            A = !(
              !Object.keys(E).length ||
              (!a && (!t.length || t.length > 1))
            );
          Object(r.useEffect)(function () {
            var e = function (e) {
                M(e);
              },
              t = function () {
                M(y.a.getScales());
              },
              a = function () {
                u();
              };
            return (
              y.a.addEventListener('scaleUpdated', e),
              y.a.addEventListener('createAnnotationWithNoScale', a),
              y.a.addEventListener('annotationsLoaded', t),
              y.a.addEventListener('annotationChanged', t),
              function () {
                y.a.removeEventListener('scaleUpdated', e),
                  y.a.removeEventListener('createAnnotationWithNoScale', a),
                  y.a.removeEventListener('annotationsLoaded', t),
                  y.a.removeEventListener('annotationChanged', t);
              }
            );
          }, []),
            Object(r.useEffect)(
              function () {
                'AnnotationCreateCalibrationMeasurement' === O
                  ? (!v && n(!0), o(!0))
                  : (n(!1), o(!1));
              },
              [O, n, o]
            );
          var x = Object(r.useMemo)(
              function () {
                var e = new Set();
                return (
                  [].concat(le(t), [a]).forEach(function (t) {
                    var a,
                      n =
                        null == t || null === (a = t.Measure) || void 0 === a
                          ? void 0
                          : a.scale;
                    n && !e.has(n) && e.add(n);
                  }),
                  le(e)
                );
              },
              [t, a, E]
            ),
            j = Object.keys(E).map(function (e) {
              return new se(e);
            });
          return v
            ? l.a.createElement(re, {
                tempScale: h,
                onCancelCalibrationMode: function () {
                  return c(g);
                },
                onApplyCalibration: function () {
                  return s(g, h, S);
                },
                previousToolName: g,
              })
            : l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(N, {
                  scales: j,
                  selectedScales: x,
                  onScaleSelected: i,
                  onAddingNewScale: u,
                }),
                A &&
                  l.a.createElement(Q, {
                    annotation: t.length > 1 ? null : t[0] || null,
                    selectedTool: a,
                    isOpen: !0,
                  })
              );
        };
      de.propTypes = ue;
      var me = Object(r.memo)(de),
        pe = a(222),
        fe = a.n(pe),
        ye = a(5);
      function ve(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return ge(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          be(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function he(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var a =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != a) {
              var n,
                r,
                l,
                o,
                i = [],
                c = !0,
                s = !1;
              try {
                if (((l = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = l.call(a)).done) &&
                    (i.push(n.value), i.length !== t);
                    c = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != a.return &&
                    ((o = a.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          be(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function be(e, t) {
        if (e) {
          if ('string' == typeof e) return ge(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === a && e.constructor && (a = e.constructor.name),
            'Map' === a || 'Set' === a
              ? Array.from(e)
              : 'Arguments' === a ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                ? ge(e, t)
                : void 0
          );
        }
      }
      function ge(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var Se = window.Core.Scale,
        Oe = [
          'distanceToolGroupButton',
          'arcMeasurementToolGroupButton',
          'perimeterToolGroupButton',
          'areaToolGroupButton',
          'rectangleAreaToolGroupButton',
          'ellipseAreaToolGroupButton',
          'countToolGroupButton',
          'cloudyRectangleAreaToolGroupButton',
          'arcToolGroupButton',
        ];
      t.default = function (e) {
        var t,
          a,
          o = e.annotations,
          i = e.selectedTool,
          s = Object(p.d)(),
          u = he(Object(m.a)(), 1)[0],
          d = he(
            Object(p.e)(function (e) {
              return [
                f.a.isElementDisabled(e, ye.a.SCALE_OVERLAY_CONTAINER),
                f.a.isElementOpen(e, ye.a.SCALE_OVERLAY_CONTAINER),
              ];
            }),
            2
          ),
          v = d[0],
          h = d[1],
          b = he(Object(r.useState)({ x: 0, y: 0 }), 2),
          g = b[0],
          S = b[1],
          O = he(
            Object(p.e)(function (e) {
              return [
                f.a.getDocumentContainerWidth(e),
                f.a.getDocumentContainerHeight(e),
              ];
            }),
            2
          ),
          w = O[0],
          E = O[1],
          M = Object(r.useRef)(null),
          A = y.a.getViewerElement(),
          x =
            ((t = {
              left: 0.666 * w,
              top: (null == A ? void 0 : A.offsetTop) + 10 || 85,
            }),
            A &&
              null != M &&
              M.current &&
              (t.left = Math.min(
                (null == A ? void 0 : A.offsetLeft) +
                  (null == A ? void 0 : A.offsetWidth) +
                  10 || t.left,
                w - M.current.getBoundingClientRect().width
              )),
            t),
          j = function (e, t) {
            var a = t.x,
              n = t.y;
            S({ x: a, y: n });
          },
          C = Object(r.useCallback)(function (e) {
            s(n.a.updateCalibrationInfo({ isCalibration: e }));
          }, []),
          N = Object(r.useCallback)(function (e) {
            Oe.forEach(function (t) {
              s(n.a.setCustomElementOverrides(t, { disabled: e }));
            });
          }, []),
          T = Object(r.useCallback)(function (e) {
            e &&
              (function (e) {
                s(n.a.setSelectedScale(e));
              })(new Se(e)),
              s(n.a.openElements([ye.a.SCALE_MODAL])),
              s(n.a.setIsAddingNewScale());
          }, []),
          _ = Object(r.useCallback)(
            function (e, t) {
              var a = new Se(t);
              if (1 === e.length && e.includes(t)) T(t);
              else {
                var n = [].concat(ve(o), [i]),
                  r = y.a
                    .getDocumentViewer()
                    .getMeasurementManager()
                    .getOldScalesToDeleteAfterApplying({
                      scale: a,
                      applyTo: n,
                    })[0],
                  l = function () {
                    y.a.createAndApplyScale(a, [].concat(ve(o), [i]));
                  };
                r ? k(r, l) : l();
              }
            },
            [o, i]
          ),
          k = function (e, t) {
            var a = {
              message: l.a.createElement(
                'div',
                null,
                l.a.createElement(
                  'p',
                  null,
                  l.a.createElement(
                    'span',
                    null,
                    u('option.measurement.deleteScaleModal.ifChangeScale'),
                    l.a.createElement('b', null, e),
                    u('option.measurement.deleteScaleModal.notUsedWillDelete')
                  )
                ),
                l.a.createElement(
                  'p',
                  null,
                  l.a.createElement(
                    'span',
                    null,
                    u('option.measurement.deleteScaleModal.ifToContinue')
                  )
                )
              ),
              title: ''
                .concat(
                  u('option.measurement.deleteScaleModal.deleteScale'),
                  ' '
                )
                .concat(e),
              confirmBtnText: u('action.confirm'),
              onConfirm: function () {
                return t();
              },
            };
            s(n.a.showWarningMessage(a));
          },
          I = Object(r.useCallback)(function (e) {
            y.a.setToolMode(e),
              C(!1),
              s(n.a.setIsElementHidden(ye.a.SCALE_MODAL, !1));
          }, []),
          D = Object(r.useCallback)(
            function (e, t, a) {
              s(
                n.a.updateCalibrationInfo({
                  isCalibration: !1,
                  tempScale: t,
                  isFractionalUnit: a,
                })
              ),
                s(n.a.setIsElementHidden(ye.a.SCALE_MODAL, !1)),
                y.a.setToolMode(e),
                y.a.deleteAnnotations([o[0]]);
            },
            [o]
          ),
          L = Object(r.useCallback)(function () {
            T(), s(n.a.setIsAddingNewScale(!0));
          }, []);
        return (
          !v &&
          l.a.createElement(
            fe.a,
            {
              position: g,
              bounds:
                ((a = { top: 0, bottom: E - 85, left: 0 - w, right: w / 3 }),
                x && (a.right = w - x.left - 35),
                a),
              onDrag: j,
              onStop: j,
              cancel: '.scale-overlay-selector, .add-new-scale',
            },
            l.a.createElement(
              'div',
              {
                className: c()({
                  Overlay: !0,
                  ScaleOverlay: !0,
                  open: h,
                  closed: !h,
                }),
                'data-element': ye.a.SCALE_OVERLAY_CONTAINER,
                style: x,
                ref: M,
              },
              l.a.createElement(me, {
                annotations: o,
                selectedTool: i,
                updateIsCalibration: C,
                enableOrDisableToolElements: N,
                onScaleSelected: _,
                onCancelCalibrationMode: I,
                onApplyCalibration: D,
                onAddingNewScale: L,
              })
            )
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=47.chunk.js.map
