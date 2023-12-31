/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [9],
    {
      529: function (wa, sa, h) {
        function pa(ca) {
          ca.Pa();
          ca.advance();
          var ea = ca.current.textContent;
          ca.pb();
          return ea;
        }
        function na(ca) {
          var ea = [];
          for (ca.Pa(); ca.advance(); ) {
            var oa = ca.Ua();
            'field' === oa
              ? ea.push(String(ca.ha('name')))
              : Object(b.j)('unrecognised field list element: ' + oa);
          }
          ca.pb();
          return ea;
        }
        function ma(ca, ea) {
          return ea ? 'false' !== ca : 'true' === ca;
        }
        function ja(ca, ea) {
          var oa = ca.Ua();
          switch (oa) {
            case 'javascript':
              return { name: 'JavaScript', javascript: ca.current.textContent };
            case 'uri':
              return { name: 'URI', uri: ca.ha('uri') };
            case 'goto':
              oa = null;
              ca.Pa();
              if (ca.advance()) {
                var la = ca.ha('fit');
                oa = { page: ca.ha('page'), fit: la };
                if ('0' === oa.page)
                  Object(b.j)('null page encountered in dest');
                else
                  switch (((ea = ea(Number(oa.page))), la)) {
                    case 'Fit':
                    case 'FitB':
                      break;
                    case 'FitH':
                    case 'FitBH':
                      oa.top = ea.va({ x: 0, y: ca.ha('top') || 0 }).y;
                      break;
                    case 'FitV':
                    case 'FitBV':
                      oa.left = ea.va({ x: ca.ha('left') || 0, y: 0 }).x;
                      break;
                    case 'FitR':
                      la = ea.va({
                        x: ca.ha('left') || 0,
                        y: ca.ha('top') || 0,
                      });
                      ea = ea.va({
                        x: ca.ha('right') || 0,
                        y: ca.ha('bottom') || 0,
                      });
                      ea = new z.d(la.x, la.y, ea.x, ea.y);
                      oa.top = ea.y1;
                      oa.left = ea.x1;
                      oa.bottom = ea.y2;
                      oa.right = ea.x2;
                      break;
                    case 'XYZ':
                      la = ea.va({
                        x: ca.ha('left') || 0,
                        y: ca.ha('top') || 0,
                      });
                      oa.top = la.y;
                      oa.left = la.x;
                      oa.zoom = ca.ha('zoom') || 0;
                      break;
                    default:
                      Object(b.j)('unknown dest fit: ' + la);
                  }
                oa = { name: 'GoTo', dest: oa };
              } else Object(b.j)('missing dest in GoTo action');
              ca.pb();
              return oa;
            case 'submit-form':
              oa = {
                name: 'SubmitForm',
                url: ca.ha('url'),
                format: ca.ha('format'),
                method: ca.ha('method') || 'POST',
                exclude: ma(ca.ha('exclude'), !1),
              };
              ea = ca.ha('flags');
              oa.flags = ea ? ea.split(' ') : [];
              for (ca.Pa(); ca.advance(); )
                switch (((ea = ca.Ua()), ea)) {
                  case 'fields':
                    oa.fields = na(ca);
                    break;
                  default:
                    Object(b.j)('unrecognised submit-form child: ' + ea);
                }
              ca.pb();
              return oa;
            case 'reset-form':
              oa = { name: 'ResetForm', exclude: ma(ca.ha('exclude'), !1) };
              for (ca.Pa(); ca.advance(); )
                switch (((ea = ca.Ua()), ea)) {
                  case 'fields':
                    oa.fields = na(ca);
                    break;
                  default:
                    Object(b.j)('unrecognised reset-form child: ' + ea);
                }
              ca.pb();
              return oa;
            case 'hide':
              oa = { name: 'Hide', hide: ma(ca.ha('hide'), !0) };
              for (ca.Pa(); ca.advance(); )
                switch (((ea = ca.Ua()), ea)) {
                  case 'fields':
                    oa.fields = na(ca);
                    break;
                  default:
                    Object(b.j)('unrecognised hide child: ' + ea);
                }
              ca.pb();
              return oa;
            case 'named':
              return { name: 'Named', action: ca.ha('name') };
            default:
              Object(b.j)('Encountered unexpected action type: ' + oa);
          }
          return null;
        }
        function ia(ca, ea, oa) {
          var la = {};
          for (ca.Pa(); ca.advance(); ) {
            var ka = ca.Ua();
            switch (ka) {
              case 'action':
                ka = ca.ha('trigger');
                if (ea ? -1 !== ea.indexOf(ka) : 1) {
                  la[ka] = [];
                  for (ca.Pa(); ca.advance(); ) {
                    var ra = ja(ca, oa);
                    Object(n.isNull)(ra) || la[ka].push(ra);
                  }
                  ca.pb();
                } else
                  Object(b.j)('encountered unexpected trigger on field: ' + ka);
                break;
              default:
                Object(b.j)('encountered unknown action child: ' + ka);
            }
          }
          ca.pb();
          return la;
        }
        function fa(ca) {
          return new w.a(
            ca.ha('r') || 0,
            ca.ha('g') || 0,
            ca.ha('b') || 0,
            ca.ha('a') || 1
          );
        }
        function y(ca, ea) {
          var oa = ca.ha('name'),
            la = ca.ha('type') || 'Type1',
            ka = ca.ha('size'),
            ra = ea.va({ x: 0, y: 0 });
          ka = ea.va({ x: Number(ka), y: 0 });
          ea = ra.x - ka.x;
          ra = ra.y - ka.y;
          oa = {
            name: oa,
            type: la,
            size: Math.sqrt(ea * ea + ra * ra) || 0,
            strokeColor: [0, 0, 0],
            fillColor: [0, 0, 0],
          };
          for (ca.Pa(); ca.advance(); )
            switch (((la = ca.Ua()), la)) {
              case 'stroke-color':
                oa.strokeColor = fa(ca);
                break;
              case 'fill-color':
                oa.fillColor = fa(ca);
                break;
              default:
                Object(b.j)('unrecognised font child: ' + la);
            }
          ca.pb();
          return oa;
        }
        function x(ca) {
          var ea = [];
          for (ca.Pa(); ca.advance(); ) {
            var oa = ca.Ua();
            switch (oa) {
              case 'option':
                oa = ea;
                var la = oa.push;
                var ka = ca;
                ka = {
                  value: ka.ha('value'),
                  displayValue: ka.ha('display-value') || void 0,
                };
                la.call(oa, ka);
                break;
              default:
                Object(b.j)('unrecognised options child: ' + oa);
            }
          }
          ca.pb();
          return ea;
        }
        function f(ca, ea) {
          var oa = ca.ha('name'),
            la = {
              type: ca.ha('type'),
              quadding: ca.ha('quadding') || 'Left-justified',
              maxLen: ca.ha('max-len') || -1,
            },
            ka = ca.ha('flags');
          Object(n.isString)(ka) && (la.flags = ka.split(' '));
          for (ca.Pa(); ca.advance(); )
            switch (((ka = ca.Ua()), ka)) {
              case 'actions':
                la.actions = ia(ca, ['C', 'F', 'K', 'V'], function () {
                  return ea;
                });
                break;
              case 'default-value':
                la.defaultValue = pa(ca);
                break;
              case 'font':
                la.font = y(ca, ea);
                break;
              case 'options':
                la.options = x(ca);
                break;
              default:
                Object(b.j)('unknown field child: ' + ka);
            }
          ca.pb();
          return new window.da.Annotations.ia.ua(oa, la);
        }
        function e(ca, ea) {
          switch (ca.type) {
            case 'Tx':
              try {
                if (Object(ha.c)(ca.actions))
                  return new r.a.DatePickerWidgetAnnotation(ca, ea);
              } catch (oa) {
                Object(b.j)(oa);
              }
              return new r.a.TextWidgetAnnotation(ca, ea);
            case 'Ch':
              return ca.flags.get(aa.WidgetFlags.COMBO)
                ? new r.a.ChoiceWidgetAnnotation(ca, ea)
                : new r.a.ListWidgetAnnotation(ca, ea);
            case 'Btn':
              return ca.flags.get(aa.WidgetFlags.PUSH_BUTTON)
                ? new r.a.PushButtonWidgetAnnotation(ca, ea)
                : ca.flags.get(aa.WidgetFlags.RADIO)
                  ? new r.a.RadioButtonWidgetAnnotation(ca, ea)
                  : new r.a.CheckButtonWidgetAnnotation(ca, ea);
            case 'Sig':
              return new r.a.SignatureWidgetAnnotation(ca, ea);
            default:
              Object(b.j)('Unrecognised field type: ' + ca.type);
          }
          return null;
        }
        function a(ca, ea, oa, la) {
          var ka = [],
            ra = {};
          ca.Pa();
          var qa = [],
            ta = {},
            va = [];
          Object(ba.a)(
            function () {
              if (ca.advance()) {
                var xa = ca.Ua();
                switch (xa) {
                  case 'calculation-order':
                    qa = 'calculation-order' === ca.Ua() ? na(ca) : [];
                    break;
                  case 'document-actions':
                    ta = ia(ca, ['Init', 'Open'], ea);
                    break;
                  case 'pages':
                    xa = [];
                    for (ca.Pa(); ca.advance(); ) {
                      var Ja = ca.Ua();
                      switch (Ja) {
                        case 'page':
                          Ja = xa;
                          var Ia = Ja.push,
                            Da = ca,
                            Oa = ea,
                            Ca = { number: Da.ha('number') };
                          for (Da.Pa(); Da.advance(); ) {
                            var Ka = Da.Ua();
                            switch (Ka) {
                              case 'actions':
                                Ca.actions = ia(Da, ['O', 'C'], Oa);
                                break;
                              default:
                                Object(b.j)('unrecognised page child: ' + Ka);
                            }
                          }
                          Da.pb();
                          Ia.call(Ja, Ca);
                          break;
                        default:
                          Object(b.j)('unrecognised page child: ' + Ja);
                      }
                    }
                    ca.pb();
                    va = xa;
                    break;
                  case 'field':
                    Ja = f(ca, ea(1));
                    ra[Ja.name] = Ja;
                    break;
                  case 'widget':
                    xa = {
                      border: { style: 'Solid', width: 1 },
                      backgroundColor: [],
                      fieldName: ca.ha('field'),
                      page: ca.ha('page'),
                      index: ca.ha('index') || 0,
                      rotation: ca.ha('rotation') || 0,
                      flags: [],
                      isImporting: !0,
                    };
                    (Ja = ca.ha('appearance')) && (xa.appearance = Ja);
                    (Ja = ca.ha('flags')) && (xa.flags = Ja.split(' '));
                    for (ca.Pa(); ca.advance(); )
                      switch (((Ja = ca.Ua()), Ja)) {
                        case 'rect':
                          Ia = ca;
                          Da = ea(Number(xa.page));
                          Ja = Da.va({
                            x: Ia.ha('x1') || 0,
                            y: Ia.ha('y1') || 0,
                          });
                          Ia = Da.va({
                            x: Ia.ha('x2') || 0,
                            y: Ia.ha('y2') || 0,
                          });
                          Ja = new z.d(Ja.x, Ja.y, Ia.x, Ia.y);
                          Ja.normalize();
                          xa.rect = {
                            x1: Ja.x1,
                            y1: Ja.y1,
                            x2: Ja.x2,
                            y2: Ja.y2,
                          };
                          break;
                        case 'border':
                          Ja = ca;
                          Ia = {
                            style: Ja.ha('style') || 'Solid',
                            width: Ja.ha('width') || 1,
                            color: [0, 0, 0],
                          };
                          for (Ja.Pa(); Ja.advance(); )
                            switch (((Da = Ja.Ua()), Da)) {
                              case 'color':
                                Ia.color = fa(Ja);
                                break;
                              default:
                                Object(b.j)('unrecognised border child: ' + Da);
                            }
                          Ja.pb();
                          xa.border = Ia;
                          break;
                        case 'background-color':
                          xa.backgroundColor = fa(ca);
                          break;
                        case 'actions':
                          xa.actions = ia(
                            ca,
                            'E X D U Fo Bl PO PC PV PI'.split(' '),
                            ea
                          );
                          break;
                        case 'appearances':
                          Ja = ca;
                          Ia = Object(ha.b)(xa, 'appearances');
                          for (Ja.Pa(); Ja.advance(); )
                            if (((Da = Ja.Ua()), 'appearance' === Da)) {
                              Da = Ja.ha('name');
                              Oa = Object(ha.b)(Ia, Da);
                              Da = Ja;
                              for (Da.Pa(); Da.advance(); )
                                switch (((Ca = Da.Ua()), Ca)) {
                                  case 'Normal':
                                    Object(ha.b)(Oa, 'Normal').data =
                                      Da.current.textContent;
                                    break;
                                  default:
                                    Object(b.j)(
                                      'unexpected appearance state: ',
                                      Ca
                                    );
                                }
                              Da.pb();
                            } else
                              Object(b.j)(
                                'unexpected appearances child: ' + Da
                              );
                          Ja.pb();
                          break;
                        case 'extra':
                          Ja = ca;
                          Ia = ea;
                          Da = {};
                          for (Ja.Pa(); Ja.advance(); )
                            switch (((Oa = Ja.Ua()), Oa)) {
                              case 'font':
                                Da.font = y(Ja, Ia(1));
                                break;
                              default:
                                Object(b.j)('unrecognised extra child: ' + Oa);
                            }
                          Ja.pb();
                          Ja = Da;
                          Ja.font && (xa.font = Ja.font);
                          break;
                        case 'captions':
                          Ia = ca;
                          Ja = {};
                          (Da = Ia.ha('Normal')) && (Ja.Normal = Da);
                          (Da = Ia.ha('Rollover')) && (Ja.Rollover = Da);
                          (Ia = Ia.ha('Down')) && (Ja.Down = Ia);
                          xa.captions = Ja;
                          break;
                        default:
                          Object(b.j)('unrecognised widget child: ' + Ja);
                      }
                    ca.pb();
                    (Ja = ra[xa.fieldName])
                      ? ((xa = e(Ja, xa)), ka.push(xa))
                      : Object(b.j)(
                          'ignoring widget with no corresponding field data: ' +
                            xa.fieldName
                        );
                    break;
                  default:
                    Object(b.j)(
                      'Unknown element encountered in PDFInfo: ' + xa
                    );
                }
                return !0;
              }
              return !1;
            },
            function () {
              ca.pb();
              oa({
                calculationOrder: qa,
                widgets: ka,
                fields: ra,
                documentActions: ta,
                pages: va,
                custom: [],
              });
            },
            la
          );
        }
        h.r(sa);
        h.d(sa, 'parse', function () {
          return a;
        });
        var b = h(3),
          n = h(1);
        h.n(n);
        var r = h(138),
          z = h(4),
          w = h(8),
          ba = h(23),
          ha = h(121),
          aa = h(17);
      },
    },
  ]);
}).call(this || window);
