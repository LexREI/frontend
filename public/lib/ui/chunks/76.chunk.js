(window.webpackJsonp = window.webpackJsonp || []).push([
  [76],
  {
    1228: function (_, t, e) {
      _.exports = (function (_) {
        'use strict';
        var t = (function (_) {
            return _ && 'object' == typeof _ && 'default' in _
              ? _
              : { default: _ };
          })(_),
          e = {
            name: 'bg',
            weekdays:
              'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split(
                '_'
              ),
            weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
            weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
            months:
              'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split(
                '_'
              ),
            monthsShort:
              'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
            weekStart: 1,
            ordinal: function (_) {
              var t = _ % 100;
              if (t > 10 && t < 20) return _ + '-ти';
              var e = _ % 10;
              return 1 === e
                ? _ + '-ви'
                : 2 === e
                  ? _ + '-ри'
                  : 7 === e || 8 === e
                    ? _ + '-ми'
                    : _ + '-ти';
            },
            formats: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'D.MM.YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY H:mm',
              LLLL: 'dddd, D MMMM YYYY H:mm',
            },
            relativeTime: {
              future: 'след %s',
              past: 'преди %s',
              s: 'няколко секунди',
              m: 'минута',
              mm: '%d минути',
              h: 'час',
              hh: '%d часа',
              d: 'ден',
              dd: '%d дена',
              M: 'месец',
              MM: '%d месеца',
              y: 'година',
              yy: '%d години',
            },
          };
        return t.default.locale(e, null, !0), e;
      })(e(111));
    },
  },
]);
//# sourceMappingURL=76.chunk.js.map
