(window.webpackJsonp = window.webpackJsonp || []).push([
  [196],
  {
    1348: function (_, t, n) {
      _.exports = (function (_) {
        'use strict';
        var t = (function (_) {
            return _ && 'object' == typeof _ && 'default' in _
              ? _
              : { default: _ };
          })(_),
          n =
            'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split(
              '_'
            ),
          s =
            'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split(
              '_'
            ),
          e = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
        function M(_, t, n) {
          var s, e;
          return 'm' === n
            ? t
              ? 'хвилина'
              : 'хвилину'
            : 'h' === n
              ? t
                ? 'година'
                : 'годину'
              : _ +
                ' ' +
                ((s = +_),
                (e = {
                  ss: t ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
                  mm: t ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
                  hh: t ? 'година_години_годин' : 'годину_години_годин',
                  dd: 'день_дні_днів',
                  MM: 'місяць_місяці_місяців',
                  yy: 'рік_роки_років',
                }[n].split('_')),
                s % 10 == 1 && s % 100 != 11
                  ? e[0]
                  : s % 10 >= 2 &&
                      s % 10 <= 4 &&
                      (s % 100 < 10 || s % 100 >= 20)
                    ? e[1]
                    : e[2]);
        }
        var o = function (_, t) {
          return e.test(t) ? n[_.month()] : s[_.month()];
        };
        (o.s = s), (o.f = n);
        var r = {
          name: 'uk',
          weekdays:
            'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split(
              '_'
            ),
          weekdaysShort: 'ндл_пнд_втр_срд_чтв_птн_сбт'.split('_'),
          weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
          months: o,
          monthsShort:
            'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
          weekStart: 1,
          relativeTime: {
            future: 'за %s',
            past: '%s тому',
            s: 'декілька секунд',
            m: M,
            mm: M,
            h: M,
            hh: M,
            d: 'день',
            dd: M,
            M: 'місяць',
            MM: M,
            y: 'рік',
            yy: M,
          },
          ordinal: function (_) {
            return _;
          },
          formats: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY р.',
            LLL: 'D MMMM YYYY р., HH:mm',
            LLLL: 'dddd, D MMMM YYYY р., HH:mm',
          },
        };
        return t.default.locale(r, null, !0), r;
      })(n(111));
    },
  },
]);
//# sourceMappingURL=196.chunk.js.map
