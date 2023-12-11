(window.webpackJsonp = window.webpackJsonp || []).push([
  [136],
  {
    1288: function (_, t, e) {
      _.exports = (function (_) {
        'use strict';
        var t = (function (_) {
            return _ && 'object' == typeof _ && 'default' in _
              ? _
              : { default: _ };
          })(_),
          e = {
            name: 'ka',
            weekdays:
              'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split(
                '_'
              ),
            weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
            weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
            months:
              'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split(
                '_'
              ),
            monthsShort:
              'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
            weekStart: 1,
            formats: {
              LT: 'h:mm A',
              LTS: 'h:mm:ss A',
              L: 'DD/MM/YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY h:mm A',
              LLLL: 'dddd, D MMMM YYYY h:mm A',
            },
            relativeTime: {
              future: '%s შემდეგ',
              past: '%s წინ',
              s: 'წამი',
              m: 'წუთი',
              mm: '%d წუთი',
              h: 'საათი',
              hh: '%d საათის',
              d: 'დღეს',
              dd: '%d დღის განმავლობაში',
              M: 'თვის',
              MM: '%d თვის',
              y: 'წელი',
              yy: '%d წლის',
            },
            ordinal: function (_) {
              return _;
            },
          };
        return t.default.locale(e, null, !0), e;
      })(e(111));
    },
  },
]);
//# sourceMappingURL=136.chunk.js.map
