(window.webpackJsonp = window.webpackJsonp || []).push([
  [53],
  {
    1584: function (n, i, t) {
      t(47)({ target: 'Number', stat: !0 }, { isFinite: t(1585) });
    },
    1585: function (n, i, t) {
      var e = t(40).isFinite;
      n.exports =
        Number.isFinite ||
        function (n) {
          return 'number' == typeof n && e(n);
        };
    },
  },
]);
//# sourceMappingURL=53.chunk.js.map
