(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    1474: function (e, t, a) {
      'use strict';
      var o = a(0),
        n = a.n(o),
        c = a(362),
        r = a(57),
        l = a(21);
      var i = function (e) {
          var t = Object(c.a)().t,
            a = e.rotateClockwise,
            o = e.rotateCounterClockwise;
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              r.a,
              { dataElement: 'pageRotationHeader', className: 'type' },
              t('action.rotate')
            ),
            n.a.createElement(
              r.a,
              {
                dataElement: 'rotatePageClockwise',
                className: 'row',
                onClick: a,
              },
              n.a.createElement(l.a, {
                title: 'action.rotateClockwise',
                img: 'icon-header-page-manipulation-page-rotation-clockwise-line',
                role: 'option',
              }),
              n.a.createElement(
                'div',
                { className: 'title' },
                t('action.rotateClockwise')
              )
            ),
            n.a.createElement(
              r.a,
              {
                dataElement: 'rotatePageCounterClockwise',
                className: 'row',
                onClick: o,
              },
              n.a.createElement(l.a, {
                title: 'action.rotateCounterClockwise',
                img: 'icon-header-page-manipulation-page-rotation-counterclockwise-line',
                role: 'option',
              }),
              n.a.createElement(
                'div',
                { className: 'title' },
                t('action.rotateCounterClockwise')
              )
            )
          );
        },
        s = a(109),
        m = a(6),
        p = a(4),
        w = a.n(p),
        u = a(2),
        k = a(35),
        E = a(5),
        C = { pageNumbers: w.a.arrayOf(w.a.number), warn: w.a.bool };
      function b(e) {
        var t = Object(m.d)(),
          a = e.pageNumbers,
          o = e.warn;
        return n.a.createElement(i, {
          rotateCounterClockwise: function () {
            o ? !Object(s.k)(a, t) && Object(s.p)(a) : Object(s.p)(a),
              Object(k.l)() &&
                t(u.a.closeElement(E.a.PAGE_MANIPULATION_OVERLAY));
          },
          rotateClockwise: function () {
            o ? !Object(s.k)(a, t) && Object(s.o)(a) : Object(s.o)(a),
              Object(k.l)() &&
                t(u.a.closeElement(E.a.PAGE_MANIPULATION_OVERLAY));
          },
        });
      }
      b.propTypes = C;
      var O = b;
      t.a = O;
    },
  },
]);
//# sourceMappingURL=12.chunk.js.map
