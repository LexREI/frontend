/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  /*
 Pikaday

 Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/Pikaday/Pikaday
*/
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [16],
    {
      516: function (wa, sa) {
        !(function (h, pa) {
          if ('object' == typeof sa) {
            try {
              var na = require('moment');
            } catch (ma) {}
            wa.exports = pa(na);
          } else
            'function' == typeof define && define.amd
              ? define(function (ma) {
                  try {
                    na = ma('moment');
                  } catch (ja) {}
                  return pa(na);
                })
              : (h.Pikaday = pa(h.moment));
        })(this, function (h) {
          function pa(oa) {
            var la = this,
              ka = la.config(oa);
            la._onMouseDown = function (ra) {
              if (la._v) {
                var qa = (ra = ra || window.event).target || ra.srcElement;
                if (qa)
                  if (
                    (r(qa, 'is-disabled') ||
                      (!r(qa, 'pika-button') ||
                      r(qa, 'is-empty') ||
                      r(qa.parentNode, 'is-disabled')
                        ? r(qa, 'pika-prev')
                          ? la.prevMonth()
                          : r(qa, 'pika-next')
                            ? la.nextMonth()
                            : r(qa, 'pika-set-today') &&
                              (la.setDate(new Date()), la.hide())
                        : (la.setDate(
                            new Date(
                              qa.getAttribute('data-pika-year'),
                              qa.getAttribute('data-pika-month'),
                              qa.getAttribute('data-pika-day')
                            )
                          ),
                          ka.bound &&
                            ca(function () {
                              la.hide();
                              ka.blurFieldOnSelect &&
                                ka.field &&
                                ka.field.blur();
                            }, 100))),
                    r(qa, 'pika-select'))
                  )
                    la._c = !0;
                  else {
                    if (!ra.preventDefault) return (ra.returnValue = !1), !1;
                    ra.preventDefault();
                  }
              }
            };
            la._onChange = function (ra) {
              var qa = (ra = ra || window.event).target || ra.srcElement;
              qa &&
                (r(qa, 'pika-select-month')
                  ? la.gotoMonth(qa.value)
                  : r(qa, 'pika-select-year') && la.gotoYear(qa.value));
            };
            la._onKeyChange = function (ra) {
              if (((ra = ra || window.event), la.isVisible()))
                switch (ra.keyCode) {
                  case 13:
                  case 27:
                    ka.field && ka.field.blur();
                    break;
                  case 37:
                    la.adjustDate('subtract', 1);
                    break;
                  case 38:
                    la.adjustDate('subtract', 7);
                    break;
                  case 39:
                    la.adjustDate('add', 1);
                    break;
                  case 40:
                    la.adjustDate('add', 7);
                    break;
                  case 8:
                  case 46:
                    la.setDate(null);
                }
            };
            la._parseFieldValue = function () {
              if (ka.parse) return ka.parse(ka.field.value, ka.format);
              if (ba) {
                var ra = h(ka.field.value, ka.format, ka.formatStrict);
                return ra && ra.isValid() ? ra.toDate() : null;
              }
              return new Date(Date.parse(ka.field.value));
            };
            la._onInputChange = function (ra) {
              var qa;
              ra.firedBy !== la &&
                ((qa = la._parseFieldValue()),
                e(qa) && la.setDate(qa),
                la._v || la.show());
            };
            la._onInputFocus = function () {
              la.show();
            };
            la._onInputClick = function () {
              la.show();
            };
            la._onInputBlur = function () {
              var ra = aa.activeElement;
              do if (r(ra, 'pika-single')) return;
              while ((ra = ra.parentNode));
              la._c ||
                (la._b = ca(function () {
                  la.hide();
                }, 50));
              la._c = !1;
            };
            la._onClick = function (ra) {
              var qa = (ra = ra || window.event).target || ra.srcElement;
              if ((ra = qa)) {
                !ha &&
                  r(qa, 'pika-select') &&
                  (qa.onchange ||
                    (qa.setAttribute('onchange', 'return;'),
                    w(qa, 'change', la._onChange)));
                do if (r(ra, 'pika-single') || ra === ka.trigger) return;
                while ((ra = ra.parentNode));
                la._v && qa !== ka.trigger && ra !== ka.trigger && la.hide();
              }
            };
            la.el = aa.createElement('div');
            la.el.className =
              'pika-single' +
              (ka.isRTL ? ' is-rtl' : '') +
              (ka.theme ? ' ' + ka.theme : '');
            w(la.el, 'mousedown', la._onMouseDown, !0);
            w(la.el, 'touchend', la._onMouseDown, !0);
            w(la.el, 'change', la._onChange);
            ka.keyboardInput && w(aa, 'keydown', la._onKeyChange);
            ka.field &&
              (ka.container
                ? ka.container.appendChild(la.el)
                : ka.bound
                  ? aa.body.appendChild(la.el)
                  : ka.field.parentNode.insertBefore(
                      la.el,
                      ka.field.nextSibling
                    ),
              w(ka.field, 'change', la._onInputChange),
              ka.defaultDate ||
                ((ka.defaultDate = la._parseFieldValue()),
                (ka.setDefaultDate = !0)));
            oa = ka.defaultDate;
            e(oa)
              ? ka.setDefaultDate
                ? la.setDate(oa, !0)
                : la.gotoDate(oa)
              : la.gotoDate(new Date());
            ka.bound
              ? (this.hide(),
                (la.el.className += ' is-bound'),
                w(ka.trigger, 'click', la._onInputClick),
                w(ka.trigger, 'focus', la._onInputFocus),
                w(ka.trigger, 'blur', la._onInputBlur))
              : this.show();
          }
          function na(oa, la, ka) {
            return (
              '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' +
              ka +
              '">' +
              (function (ra) {
                var qa,
                  ta = [];
                ra.showWeekNumber && ta.push('<th></th>');
                for (qa = 0; 7 > qa; qa++)
                  ta.push(
                    '<th scope="col"><abbr title="' +
                      ja(ra, qa) +
                      '">' +
                      ja(ra, qa, !0) +
                      '</abbr></th>'
                  );
                return (
                  '<thead><tr>' +
                  (ra.isRTL ? ta.reverse() : ta).join('') +
                  '</tr></thead>'
                );
              })(oa) +
              ('<tbody>' + la.join('') + '</tbody>') +
              (oa.showTodayButton
                ? (function (ra) {
                    var qa = [];
                    return (
                      qa.push(
                        '<td colspan="' +
                          (ra.showWeekNumber ? '8' : '7') +
                          '"><button class="pika-set-today">' +
                          ra.i18n.today +
                          '</button></td>'
                      ),
                      '<tfoot>' +
                        (ra.isRTL ? qa.reverse() : qa).join('') +
                        '</tfoot>'
                    );
                  })(oa)
                : '') +
              '</table>'
            );
          }
          function ma(oa, la, ka, ra, qa, ta) {
            var va,
              xa,
              Ja = oa._o,
              Ia = ka === Ja.minYear,
              Da = ka === Ja.maxYear,
              Oa =
                '<div id="' +
                ta +
                '" class="pika-title" role="heading" aria-live="assertive">',
              Ca = !0,
              Ka = !0;
            var La = [];
            for (ta = 0; 12 > ta; ta++)
              La.push(
                '<option value="' +
                  (ka === qa ? ta - la : 12 + ta - la) +
                  '"' +
                  (ta === ra ? ' selected="selected"' : '') +
                  ((Ia && ta < Ja.minMonth) || (Da && ta > Ja.maxMonth)
                    ? ' disabled="disabled"'
                    : '') +
                  '>' +
                  Ja.i18n.months[ta] +
                  '</option>'
              );
            qa =
              '<div class="pika-label">' +
              Ja.i18n.months[ra] +
              '<select class="pika-select pika-select-month" tabindex="-1">' +
              La.join('') +
              '</select></div>';
            a(Ja.yearRange)
              ? ((ta = Ja.yearRange[0]), (va = Ja.yearRange[1] + 1))
              : ((ta = ka - Ja.yearRange), (va = 1 + ka + Ja.yearRange));
            for (La = []; ta < va && ta <= Ja.maxYear; ta++)
              ta >= Ja.minYear &&
                La.push(
                  '<option value="' +
                    ta +
                    '"' +
                    (ta === ka ? ' selected="selected"' : '') +
                    '>' +
                    ta +
                    '</option>'
                );
            return (
              (xa =
                '<div class="pika-label">' +
                ka +
                Ja.yearSuffix +
                '<select class="pika-select pika-select-year" tabindex="-1">' +
                La.join('') +
                '</select></div>'),
              Ja.showMonthAfterYear ? (Oa += xa + qa) : (Oa += qa + xa),
              Ia && (0 === ra || Ja.minMonth >= ra) && (Ca = !1),
              Da && (11 === ra || Ja.maxMonth <= ra) && (Ka = !1),
              0 === la &&
                (Oa +=
                  '<button class="pika-prev' +
                  (Ca ? '' : ' is-disabled') +
                  '" type="button">' +
                  Ja.i18n.previousMonth +
                  '</button>'),
              la === oa._o.numberOfMonths - 1 &&
                (Oa +=
                  '<button class="pika-next' +
                  (Ka ? '' : ' is-disabled') +
                  '" type="button">' +
                  Ja.i18n.nextMonth +
                  '</button>'),
              Oa + '</div>'
            );
          }
          function ja(oa, la, ka) {
            for (la += oa.firstDay; 7 <= la; ) la -= 7;
            return ka ? oa.i18n.weekdaysShort[la] : oa.i18n.weekdays[la];
          }
          function ia(oa) {
            return (
              0 > oa.month &&
                ((oa.year -= Math.ceil(Math.abs(oa.month) / 12)),
                (oa.month += 12)),
              11 < oa.month &&
                ((oa.year += Math.floor(Math.abs(oa.month) / 12)),
                (oa.month -= 12)),
              oa
            );
          }
          function fa(oa, la, ka) {
            var ra;
            aa.createEvent
              ? ((ra = aa.createEvent('HTMLEvents')).initEvent(la, !0, !1),
                (ra = y(ra, ka)),
                oa.dispatchEvent(ra))
              : aa.createEventObject &&
                ((ra = aa.createEventObject()),
                (ra = y(ra, ka)),
                oa.fireEvent('on' + la, ra));
          }
          function y(oa, la, ka) {
            var ra, qa;
            for (ra in la)
              (qa = void 0 !== oa[ra]) &&
              'object' == typeof la[ra] &&
              null !== la[ra] &&
              void 0 === la[ra].nodeName
                ? e(la[ra])
                  ? ka && (oa[ra] = new Date(la[ra].getTime()))
                  : a(la[ra])
                    ? ka && (oa[ra] = la[ra].slice(0))
                    : (oa[ra] = y({}, la[ra], ka))
                : (!ka && qa) || (oa[ra] = la[ra]);
            return oa;
          }
          function x(oa) {
            e(oa) && oa.setHours(0, 0, 0, 0);
          }
          function f(oa, la) {
            return [
              31,
              (0 == oa % 4 && 0 != oa % 100) || 0 == oa % 400 ? 29 : 28,
              31,
              30,
              31,
              30,
              31,
              31,
              30,
              31,
              30,
              31,
            ][la];
          }
          function e(oa) {
            return (
              /Date/.test(Object.prototype.toString.call(oa)) &&
              !isNaN(oa.getTime())
            );
          }
          function a(oa) {
            return /Array/.test(Object.prototype.toString.call(oa));
          }
          function b(oa, la) {
            var ka;
            oa.className = (ka = (' ' + oa.className + ' ').replace(
              ' ' + la + ' ',
              ' '
            )).trim
              ? ka.trim()
              : ka.replace(/^\s+|\s+$/g, '');
          }
          function n(oa, la) {
            r(oa, la) ||
              (oa.className =
                '' === oa.className ? la : oa.className + ' ' + la);
          }
          function r(oa, la) {
            return -1 !== (' ' + oa.className + ' ').indexOf(' ' + la + ' ');
          }
          function z(oa, la, ka, ra) {
            ha
              ? oa.removeEventListener(la, ka, !!ra)
              : oa.detachEvent('on' + la, ka);
          }
          function w(oa, la, ka, ra) {
            ha
              ? oa.addEventListener(la, ka, !!ra)
              : oa.attachEvent('on' + la, ka);
          }
          var ba = 'function' == typeof h,
            ha = !!window.addEventListener,
            aa = window.document,
            ca = window.setTimeout,
            ea = {
              field: null,
              bound: void 0,
              ariaLabel: 'Use the arrow keys to pick a date',
              position: 'bottom left',
              reposition: !0,
              format: 'YYYY-MM-DD',
              toString: null,
              parse: null,
              defaultDate: null,
              setDefaultDate: !1,
              firstDay: 0,
              firstWeekOfYearMinDays: 4,
              formatStrict: !1,
              minDate: null,
              maxDate: null,
              yearRange: 10,
              showWeekNumber: !1,
              showTodayButton: !1,
              pickWholeWeek: !1,
              minYear: 0,
              maxYear: 9999,
              minMonth: void 0,
              maxMonth: void 0,
              startRange: null,
              endRange: null,
              isRTL: !1,
              yearSuffix: '',
              showMonthAfterYear: !1,
              showDaysInNextAndPreviousMonths: !1,
              enableSelectionDaysInNextAndPreviousMonths: !1,
              numberOfMonths: 1,
              mainCalendar: 'left',
              container: void 0,
              blurFieldOnSelect: !0,
              i18n: {
                previousMonth: 'Previous Month',
                nextMonth: 'Next Month',
                today: 'Today',
                months:
                  'January February March April May June July August September October November December'.split(
                    ' '
                  ),
                weekdays:
                  'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(
                    ' '
                  ),
                weekdaysShort: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
              },
              theme: null,
              events: [],
              onSelect: null,
              onOpen: null,
              onClose: null,
              onDraw: null,
              keyboardInput: !0,
            };
          return (
            (pa.prototype = {
              config: function (oa) {
                this._o || (this._o = y({}, ea, !0));
                oa = y(this._o, oa, !0);
                oa.isRTL = !!oa.isRTL;
                oa.field = oa.field && oa.field.nodeName ? oa.field : null;
                oa.theme =
                  'string' == typeof oa.theme && oa.theme ? oa.theme : null;
                oa.bound = !!(void 0 !== oa.bound
                  ? oa.field && oa.bound
                  : oa.field);
                oa.trigger =
                  oa.trigger && oa.trigger.nodeName ? oa.trigger : oa.field;
                oa.disableWeekends = !!oa.disableWeekends;
                oa.disableDayFn =
                  'function' == typeof oa.disableDayFn ? oa.disableDayFn : null;
                var la = parseInt(oa.numberOfMonths, 10) || 1;
                ((oa.numberOfMonths = 4 < la ? 4 : la),
                e(oa.minDate) || (oa.minDate = !1),
                e(oa.maxDate) || (oa.maxDate = !1),
                oa.minDate &&
                  oa.maxDate &&
                  oa.maxDate < oa.minDate &&
                  (oa.maxDate = oa.minDate = !1),
                oa.minDate && this.setMinDate(oa.minDate),
                oa.maxDate && this.setMaxDate(oa.maxDate),
                a(oa.yearRange))
                  ? ((la = new Date().getFullYear() - 10),
                    (oa.yearRange[0] = parseInt(oa.yearRange[0], 10) || la),
                    (oa.yearRange[1] = parseInt(oa.yearRange[1], 10) || la))
                  : ((oa.yearRange =
                      Math.abs(parseInt(oa.yearRange, 10)) || ea.yearRange),
                    100 < oa.yearRange && (oa.yearRange = 100));
                return oa;
              },
              toString: function (oa) {
                return (
                  (oa = oa || this._o.format),
                  e(this._d)
                    ? this._o.toString
                      ? this._o.toString(this._d, oa)
                      : ba
                        ? h(this._d).format(oa)
                        : this._d.toDateString()
                    : ''
                );
              },
              getMoment: function () {
                return ba ? h(this._d) : null;
              },
              setMoment: function (oa, la) {
                ba && h.isMoment(oa) && this.setDate(oa.toDate(), la);
              },
              getDate: function () {
                return e(this._d) ? new Date(this._d.getTime()) : null;
              },
              setDate: function (oa, la) {
                if (!oa)
                  return (
                    (this._d = null),
                    this._o.field &&
                      ((this._o.field.value = ''),
                      fa(this._o.field, 'change', { firedBy: this })),
                    this.draw()
                  );
                if (
                  ('string' == typeof oa && (oa = new Date(Date.parse(oa))),
                  e(oa))
                ) {
                  var ka = this._o.minDate,
                    ra = this._o.maxDate;
                  e(ka) && oa < ka ? (oa = ka) : e(ra) && oa > ra && (oa = ra);
                  this._d = new Date(oa.getTime());
                  this.gotoDate(this._d);
                  this._o.field &&
                    ((this._o.field.value = this.toString()),
                    fa(this._o.field, 'change', { firedBy: this }));
                  la ||
                    'function' != typeof this._o.onSelect ||
                    this._o.onSelect.call(this, this.getDate());
                }
              },
              clear: function () {
                this.setDate(null);
              },
              gotoDate: function (oa) {
                var la = !0;
                if (e(oa)) {
                  if (this.calendars) {
                    la = new Date(
                      this.calendars[0].year,
                      this.calendars[0].month,
                      1
                    );
                    var ka = new Date(
                        this.calendars[this.calendars.length - 1].year,
                        this.calendars[this.calendars.length - 1].month,
                        1
                      ),
                      ra = oa.getTime();
                    ka.setMonth(ka.getMonth() + 1);
                    ka.setDate(ka.getDate() - 1);
                    la = ra < la.getTime() || ka.getTime() < ra;
                  }
                  la &&
                    ((this.calendars = [
                      { month: oa.getMonth(), year: oa.getFullYear() },
                    ]),
                    'right' === this._o.mainCalendar &&
                      (this.calendars[0].month += 1 - this._o.numberOfMonths));
                  this.adjustCalendars();
                }
              },
              adjustDate: function (oa, la) {
                var ka,
                  ra = this.getDate() || new Date();
                la = 864e5 * parseInt(la);
                'add' === oa
                  ? (ka = new Date(ra.valueOf() + la))
                  : 'subtract' === oa && (ka = new Date(ra.valueOf() - la));
                this.setDate(ka);
              },
              adjustCalendars: function () {
                this.calendars[0] = ia(this.calendars[0]);
                for (var oa = 1; oa < this._o.numberOfMonths; oa++)
                  this.calendars[oa] = ia({
                    month: this.calendars[0].month + oa,
                    year: this.calendars[0].year,
                  });
                this.draw();
              },
              gotoToday: function () {
                this.gotoDate(new Date());
              },
              gotoMonth: function (oa) {
                isNaN(oa) ||
                  ((this.calendars[0].month = parseInt(oa, 10)),
                  this.adjustCalendars());
              },
              nextMonth: function () {
                this.calendars[0].month++;
                this.adjustCalendars();
              },
              prevMonth: function () {
                this.calendars[0].month--;
                this.adjustCalendars();
              },
              gotoYear: function (oa) {
                isNaN(oa) ||
                  ((this.calendars[0].year = parseInt(oa, 10)),
                  this.adjustCalendars());
              },
              setMinDate: function (oa) {
                oa instanceof Date
                  ? (x(oa),
                    (this._o.minDate = oa),
                    (this._o.minYear = oa.getFullYear()),
                    (this._o.minMonth = oa.getMonth()))
                  : ((this._o.minDate = ea.minDate),
                    (this._o.minYear = ea.minYear),
                    (this._o.minMonth = ea.minMonth),
                    (this._o.startRange = ea.startRange));
                this.draw();
              },
              setMaxDate: function (oa) {
                oa instanceof Date
                  ? (x(oa),
                    (this._o.maxDate = oa),
                    (this._o.maxYear = oa.getFullYear()),
                    (this._o.maxMonth = oa.getMonth()))
                  : ((this._o.maxDate = ea.maxDate),
                    (this._o.maxYear = ea.maxYear),
                    (this._o.maxMonth = ea.maxMonth),
                    (this._o.endRange = ea.endRange));
                this.draw();
              },
              setStartRange: function (oa) {
                this._o.startRange = oa;
              },
              setEndRange: function (oa) {
                this._o.endRange = oa;
              },
              draw: function (oa) {
                if (this._v || oa) {
                  var la = this._o;
                  var ka = la.minYear;
                  var ra = la.maxYear,
                    qa = la.minMonth,
                    ta = la.maxMonth;
                  oa = '';
                  this._y <= ka &&
                    ((this._y = ka),
                    !isNaN(qa) && this._m < qa && (this._m = qa));
                  this._y >= ra &&
                    ((this._y = ra),
                    !isNaN(ta) && this._m > ta && (this._m = ta));
                  for (ra = 0; ra < la.numberOfMonths; ra++)
                    (ka =
                      'pika-title-' +
                      Math.random()
                        .toString(36)
                        .replace(/[^a-z]+/g, '')
                        .substr(0, 2)),
                      (oa +=
                        '<div class="pika-lendar">' +
                        ma(
                          this,
                          ra,
                          this.calendars[ra].year,
                          this.calendars[ra].month,
                          this.calendars[0].year,
                          ka
                        ) +
                        this.render(
                          this.calendars[ra].year,
                          this.calendars[ra].month,
                          ka
                        ) +
                        '</div>');
                  this.el.innerHTML = oa;
                  la.bound &&
                    'hidden' !== la.field.type &&
                    ca(function () {
                      la.trigger.focus();
                    }, 1);
                  'function' == typeof this._o.onDraw && this._o.onDraw(this);
                  la.bound && la.field.setAttribute('aria-label', la.ariaLabel);
                }
              },
              adjustPosition: function () {
                var oa, la, ka, ra, qa, ta, va, xa, Ja;
                if (!this._o.container) {
                  if (
                    ((this.el.style.position = 'absolute'),
                    (la = oa = this._o.trigger),
                    (ka = this.el.offsetWidth),
                    (ra = this.el.offsetHeight),
                    (qa = window.innerWidth || aa.documentElement.clientWidth),
                    (ta =
                      window.innerHeight || aa.documentElement.clientHeight),
                    (va =
                      window.pageYOffset ||
                      aa.body.scrollTop ||
                      aa.documentElement.scrollTop),
                    (xa = !0),
                    (Ja = !0),
                    'function' == typeof oa.getBoundingClientRect)
                  ) {
                    var Ia =
                      (la = oa.getBoundingClientRect()).left +
                      window.pageXOffset;
                    var Da = la.bottom + window.pageYOffset;
                  } else
                    for (
                      Ia = la.offsetLeft, Da = la.offsetTop + la.offsetHeight;
                      (la = la.offsetParent);

                    )
                      (Ia += la.offsetLeft), (Da += la.offsetTop);
                  ((this._o.reposition && Ia + ka > qa) ||
                    (-1 < this._o.position.indexOf('right') &&
                      0 < Ia - ka + oa.offsetWidth)) &&
                    ((Ia = Ia - ka + oa.offsetWidth), (xa = !1));
                  ((this._o.reposition && Da + ra > ta + va) ||
                    (-1 < this._o.position.indexOf('top') &&
                      0 < Da - ra - oa.offsetHeight)) &&
                    ((Da = Da - ra - oa.offsetHeight), (Ja = !1));
                  0 > Ia && (Ia = 0);
                  0 > Da && (Da = 0);
                  this.el.style.left = Ia + 'px';
                  this.el.style.top = Da + 'px';
                  n(this.el, xa ? 'left-aligned' : 'right-aligned');
                  n(this.el, Ja ? 'bottom-aligned' : 'top-aligned');
                  b(this.el, xa ? 'right-aligned' : 'left-aligned');
                  b(this.el, Ja ? 'top-aligned' : 'bottom-aligned');
                }
              },
              render: function (oa, la, ka) {
                var ra = this._o,
                  qa = new Date(),
                  ta = f(oa, la),
                  va = new Date(oa, la, 1).getDay(),
                  xa = [],
                  Ja = [];
                x(qa);
                0 < ra.firstDay && 0 > (va -= ra.firstDay) && (va += 7);
                for (
                  var Ia = 0 === la ? 11 : la - 1,
                    Da = 11 === la ? 0 : la + 1,
                    Oa = 0 === la ? oa - 1 : oa,
                    Ca = 11 === la ? oa + 1 : oa,
                    Ka = f(Oa, Ia),
                    La = ta + va,
                    Ma = La;
                  7 < Ma;

                )
                  Ma -= 7;
                La += 7 - Ma;
                for (var Ta = !1, Aa = (Ma = 0); Ma < La; Ma++) {
                  var Ea = new Date(oa, la, Ma - va + 1),
                    Pa = !!e(this._d) && Ea.getTime() === this._d.getTime(),
                    Va = Ea.getTime() === qa.getTime(),
                    Fa = -1 !== ra.events.indexOf(Ea.toDateString()),
                    Qa = Ma < va || Ma >= ta + va,
                    Na = Ma - va + 1,
                    bb = la,
                    Za = oa,
                    cb =
                      ra.startRange && ra.startRange.getTime() === Ea.getTime(),
                    Ya = ra.endRange && ra.endRange.getTime() === Ea.getTime(),
                    Ga =
                      ra.startRange &&
                      ra.endRange &&
                      ra.startRange < Ea &&
                      Ea < ra.endRange;
                  Qa &&
                    (Ma < va
                      ? ((Na = Ka + Na), (bb = Ia), (Za = Oa))
                      : ((Na -= ta), (bb = Da), (Za = Ca)));
                  var Ua = Pa,
                    Xa;
                  !(Xa =
                    (ra.minDate && Ea < ra.minDate) ||
                    (ra.maxDate && Ea > ra.maxDate)) &&
                    (Xa = ra.disableWeekends) &&
                    ((Xa = Ea.getDay()), (Xa = 0 === Xa || 6 === Xa));
                  Qa = {
                    day: Na,
                    month: bb,
                    year: Za,
                    hasEvent: Fa,
                    isSelected: Ua,
                    isToday: Va,
                    isDisabled: Xa || (ra.disableDayFn && ra.disableDayFn(Ea)),
                    isEmpty: Qa,
                    isStartRange: cb,
                    isEndRange: Ya,
                    isInRange: Ga,
                    showDaysInNextAndPreviousMonths:
                      ra.showDaysInNextAndPreviousMonths,
                    enableSelectionDaysInNextAndPreviousMonths:
                      ra.enableSelectionDaysInNextAndPreviousMonths,
                  };
                  ra.pickWholeWeek && Pa && (Ta = !0);
                  Pa = Ja;
                  Ea = Pa.push;
                  a: {
                    cb = Qa;
                    Ya = [];
                    Ga = 'false';
                    if (cb.isEmpty) {
                      if (!cb.showDaysInNextAndPreviousMonths) {
                        Qa = '<td class="is-empty"></td>';
                        break a;
                      }
                      Ya.push('is-outside-current-month');
                      cb.enableSelectionDaysInNextAndPreviousMonths ||
                        Ya.push('is-selection-disabled');
                    }
                    Qa =
                      (cb.isDisabled && Ya.push('is-disabled'),
                      cb.isToday && Ya.push('is-today'),
                      cb.isSelected && (Ya.push('is-selected'), (Ga = 'true')),
                      cb.hasEvent && Ya.push('has-event'),
                      cb.isInRange && Ya.push('is-inrange'),
                      cb.isStartRange && Ya.push('is-startrange'),
                      cb.isEndRange && Ya.push('is-endrange'),
                      '<td data-day="' +
                        cb.day +
                        '" class="' +
                        Ya.join(' ') +
                        '" aria-selected="' +
                        Ga +
                        '"><button class="pika-button pika-day" type="button" data-pika-year="' +
                        cb.year +
                        '" data-pika-month="' +
                        cb.month +
                        '" data-pika-day="' +
                        cb.day +
                        '">' +
                        cb.day +
                        '</button></td>');
                  }
                  Ea.call(Pa, Qa);
                  7 == ++Aa &&
                    (ra.showWeekNumber &&
                      ((Aa = Ja),
                      (Pa = Aa.unshift),
                      (cb = ra.firstWeekOfYearMinDays),
                      (Ea = new Date(oa, la, Ma - va)),
                      ba
                        ? (Ea = h(Ea).isoWeek())
                        : (Ea.setHours(0, 0, 0, 0),
                          (Ya = Ea.getDate()),
                          (Qa = cb - 1),
                          Ea.setDate(Ya + Qa - ((Ea.getDay() + 7 - 1) % 7)),
                          (cb = new Date(Ea.getFullYear(), 0, cb)),
                          (Ea =
                            1 +
                            Math.round(
                              ((Ea.getTime() - cb.getTime()) / 864e5 -
                                Qa +
                                ((cb.getDay() + 7 - 1) % 7)) /
                                7
                            ))),
                      Pa.call(Aa, '<td class="pika-week">' + Ea + '</td>')),
                    (Aa = xa),
                    (Pa = Aa.push),
                    (Ja =
                      '<tr class="pika-row' +
                      (ra.pickWholeWeek ? ' pick-whole-week' : '') +
                      (Ta ? ' is-selected' : '') +
                      '">' +
                      (ra.isRTL ? Ja.reverse() : Ja).join('') +
                      '</tr>'),
                    Pa.call(Aa, Ja),
                    (Ja = []),
                    (Aa = 0),
                    (Ta = !1));
                }
                return na(ra, xa, ka);
              },
              isVisible: function () {
                return this._v;
              },
              show: function () {
                this.isVisible() ||
                  ((this._v = !0),
                  this.draw(),
                  b(this.el, 'is-hidden'),
                  this._o.bound &&
                    (w(aa, 'click', this._onClick), this.adjustPosition()),
                  'function' == typeof this._o.onOpen &&
                    this._o.onOpen.call(this));
              },
              hide: function () {
                var oa = this._v;
                !1 !== oa &&
                  (this._o.bound && z(aa, 'click', this._onClick),
                  this._o.container ||
                    ((this.el.style.position = 'static'),
                    (this.el.style.left = 'auto'),
                    (this.el.style.top = 'auto')),
                  n(this.el, 'is-hidden'),
                  (this._v = !1),
                  void 0 !== oa &&
                    'function' == typeof this._o.onClose &&
                    this._o.onClose.call(this));
              },
              destroy: function () {
                var oa = this._o;
                this.hide();
                z(this.el, 'mousedown', this._onMouseDown, !0);
                z(this.el, 'touchend', this._onMouseDown, !0);
                z(this.el, 'change', this._onChange);
                oa.keyboardInput && z(aa, 'keydown', this._onKeyChange);
                oa.field &&
                  (z(oa.field, 'change', this._onInputChange),
                  oa.bound &&
                    (z(oa.trigger, 'click', this._onInputClick),
                    z(oa.trigger, 'focus', this._onInputFocus),
                    z(oa.trigger, 'blur', this._onInputBlur)));
                this.el.parentNode && this.el.parentNode.removeChild(this.el);
              },
            }),
            pa
          );
        });
      },
    },
  ]);
}).call(this || window);
