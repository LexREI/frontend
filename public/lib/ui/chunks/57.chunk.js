(window.webpackJsonp = window.webpackJsonp || []).push([
  [57],
  {
    1708: function (e, n, a) {
      'use strict';
      a.r(n);
      a(39);
      var t = a(0),
        r = a.n(t),
        u = a(6),
        c = a(3),
        T = a(247),
        i = a(1474),
        O = a(5);
      n.default = function () {
        var e = Object(u.e)(function (e) {
          return c.a.getSelectedThumbnailPageIndexes(e);
        });
        return r.a.createElement(
          T.a,
          {
            menu: O.a.THUMBNAILS_CONTROL_ROTATE_POPUP,
            trigger: O.a.THUMBNAILS_CONTROL_ROTATE_POPUP_TRIGGER,
          },
          r.a.createElement(i.a, {
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
//# sourceMappingURL=57.chunk.js.map
