(window.webpackJsonp = window.webpackJsonp || []).push([
  [74],
  {
    1226: function (a, _, n) {
      a.exports = (function (a) {
        'use strict';
        var _ = (function (a) {
            return a && 'object' == typeof a && 'default' in a
              ? a
              : { default: a };
          })(a),
          n = {
            name: 'az',
            weekdays:
              'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split(
                '_'
              ),
            weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
            weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
            months:
              'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split(
                '_'
              ),
            monthsShort:
              'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
            weekStart: 1,
            formats: {
              LT: 'H:mm',
              LTS: 'H:mm:ss',
              L: 'DD.MM.YYYY',
              LL: 'D MMMM YYYY г.',
              LLL: 'D MMMM YYYY г., H:mm',
              LLLL: 'dddd, D MMMM YYYY г., H:mm',
            },
            relativeTime: {
              future: '%s sonra',
              past: '%s əvvəl',
              s: 'bir neçə saniyə',
              m: 'bir dəqiqə',
              mm: '%d dəqiqə',
              h: 'bir saat',
              hh: '%d saat',
              d: 'bir gün',
              dd: '%d gün',
              M: 'bir ay',
              MM: '%d ay',
              y: 'bir il',
              yy: '%d il',
            },
            ordinal: function (a) {
              return a;
            },
          };
        return _.default.locale(n, null, !0), n;
      })(n(111));
    },
  },
]);
//# sourceMappingURL=74.chunk.js.map
