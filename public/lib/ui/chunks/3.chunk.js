(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    1436: function (e, o, t) {
      'use strict';
      var a = t(0),
        n = t.n(a),
        c = t(362),
        m = t(57),
        l = t(21);
      var r = function (e) {
          var o = Object(c.a)().t,
            t = e.moveToTop,
            a = e.moveToBottom;
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              m.a,
              {
                dataElement: 'pageAdditionalControlsHeader',
                className: 'type',
              },
              o('option.thumbnailsControlOverlay.move')
            ),
            n.a.createElement(
              m.a,
              { className: 'row', dataElement: 'moveToTop', onClick: t },
              n.a.createElement(l.a, {
                title: 'action.moveToTop',
                img: 'icon-page-move-up',
                role: 'option',
                onClick: t,
              }),
              n.a.createElement(
                'div',
                { className: 'title' },
                o('action.moveToTop')
              )
            ),
            n.a.createElement(
              m.a,
              { className: 'row', dataElement: 'moveToBottom', onClick: a },
              n.a.createElement(l.a, {
                title: 'action.moveToBottom',
                img: 'icon-page-move-down',
                role: 'option',
                onClick: a,
              }),
              n.a.createElement(
                'div',
                { className: 'title' },
                o('action.moveToBottom')
              )
            )
          );
        },
        i = t(109),
        p = t(6),
        s = t(4),
        v = t.n(s),
        E = t(2),
        T = t(35),
        b = t(5),
        O = { pageIndexes: v.a.arrayOf(v.a.number), warn: v.a.bool };
      function u(e) {
        var o = Object(p.d)(),
          t = e.pageNumbers,
          a = e.warn;
        return n.a.createElement(r, {
          moveToTop: function () {
            a ? !Object(i.k)(t, o) && Object(i.j)(t) : Object(i.j)(t),
              Object(T.l)() &&
                o(E.a.closeElement(b.a.PAGE_MANIPULATION_OVERLAY));
          },
          moveToBottom: function () {
            a ? !Object(i.k)(t, o) && Object(i.i)(t) : Object(i.i)(t),
              Object(T.l)() &&
                o(E.a.closeElement(b.a.PAGE_MANIPULATION_OVERLAY));
          },
        });
      }
      u.propTypes = O;
      var d = u;
      o.a = d;
    },
  },
]);
//# sourceMappingURL=3.chunk.js.map
