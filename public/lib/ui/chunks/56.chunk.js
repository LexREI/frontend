(window.webpackJsonp = window.webpackJsonp || []).push([
  [56],
  {
    1710: function (e, n, a) {
      'use strict';
      a.r(n);
      a(39);
      var t = a(0),
        r = a.n(t),
        u = a(6),
        c = a(3),
        i = a(247),
        L = a(1436),
        m = a(1475),
        o = a(5);
      n.default = function () {
        var e = Object(u.e)(function (e) {
          return c.a.getSelectedThumbnailPageIndexes(e);
        });
        return r.a.createElement(
          i.a,
          {
            menu: o.a.THUMBNAILS_CONTROL_MANIPULATE_POPUP_SMALL,
            trigger: o.a.THUMBNAILS_CONTROL_MANIPULATE_POPUP_SMALL_TRIGGER,
          },
          r.a.createElement(L.a, {
            pageNumbers: e.map(function (e) {
              return e + 1;
            }),
            warn: !0,
          }),
          r.a.createElement(m.a, {
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
//# sourceMappingURL=56.chunk.js.map
