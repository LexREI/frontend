(window.webpackJsonp = window.webpackJsonp || []).push([
  [88],
  {
    1240: function (e, t, _) {
      e.exports = (function (e) {
        'use strict';
        var t = (function (e) {
            return e && 'object' == typeof e && 'default' in e
              ? e
              : { default: e };
          })(e),
          _ = {
            name: 'da',
            weekdays:
              'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
            weekdaysShort: 'søn._man._tirs._ons._tors._fre._lør.'.split('_'),
            weekdaysMin: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
            months:
              'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split(
                '_'
              ),
            monthsShort:
              'jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.'.split(
                '_'
              ),
            weekStart: 1,
            ordinal: function (e) {
              return e + '.';
            },
            formats: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D. MMMM YYYY',
              LLL: 'D. MMMM YYYY HH:mm',
              LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm',
            },
            relativeTime: {
              future: 'om %s',
              past: '%s siden',
              s: 'få sekunder',
              m: 'et minut',
              mm: '%d minutter',
              h: 'en time',
              hh: '%d timer',
              d: 'en dag',
              dd: '%d dage',
              M: 'en måned',
              MM: '%d måneder',
              y: 'et år',
              yy: '%d år',
            },
          };
        return t.default.locale(_, null, !0), _;
      })(_(111));
    },
  },
]);
//# sourceMappingURL=88.chunk.js.map
