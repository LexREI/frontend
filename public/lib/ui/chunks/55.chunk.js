(window.webpackJsonp = window.webpackJsonp || []).push([
  [55],
  {
    1709: function (e, n, a) {
      'use strict';
      a.r(n);
      a(39);
      var t = a(0),
        r = a.n(t),
        u = a(6),
        c = a(3),
        i = a(247),
        P = a(1436),
        o = a(5);
      n.default = function () {
        var e = Object(u.e)(function (e) {
          return c.a.getSelectedThumbnailPageIndexes(e);
        });
        return r.a.createElement(
          i.a,
          {
            menu: o.a.THUMBNAILS_CONTROL_MANIPULATE_POPUP,
            trigger: o.a.THUMBNAILS_CONTROL_MANIPULATE_POPUP_TRIGGER,
          },
          r.a.createElement(P.a, {
            pageNumbers: e.map(function (e) {
              return e + 1;
            }),
            warn: !0,
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=55.chunk.js.map
