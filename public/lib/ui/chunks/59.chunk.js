(window.webpackJsonp = window.webpackJsonp || []).push([
  [59],
  {
    1724: function (e, t, n) {
      'use strict';
      n.r(t);
      n(39),
        n(18),
        n(11),
        n(13),
        n(7),
        n(12),
        n(8),
        n(9),
        n(10),
        n(15),
        n(14),
        n(20),
        n(17);
      var a = n(0),
        r = n.n(a),
        l = n(6),
        i = (n(51), n(106), n(32), n(65), n(53), n(2)),
        o = n(1474),
        u = n(1475),
        c = n(1436),
        m = n(57),
        s = n(21);
      var p = function (e) {
          var t = e.dataElement,
            n = e.pageNumbers,
            a = e.header,
            l = e.operations;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(m.a, { dataElement: t, className: 'type' }, a),
            l.map(function (e) {
              return r.a.createElement(
                m.a,
                {
                  key: e.dataElement,
                  className: 'row',
                  dataElement: e.dataElement,
                  onClick: function () {
                    return e.onClick(n);
                  },
                },
                (function (e) {
                  if (e.img)
                    return r.a.createElement(s.a, {
                      title: e.title,
                      img: e.img,
                      role: 'option',
                    });
                })(e),
                r.a.createElement('div', { className: 'title' }, e.title)
              );
            })
          );
        },
        f = n(1),
        d = n(5);
      function g() {
        return (g = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }).apply(this, arguments);
      }
      function E(e) {
        var t = e.children,
          n = e.pageNumbers,
          a = e.pageManipulationOverlayItems,
          l = r.a.Children.toArray(t);
        return a.map(function (e, t) {
          var a = e.dataElement,
            i = e.type,
            o = l.find(function (e) {
              return e.props.dataElement === a;
            }),
            u = a || ''.concat(i, '-').concat(t);
          return (
            o ||
              ('divider' === i &&
                (o = r.a.createElement('div', { className: 'divider' })),
              'customPageOperation' === i &&
                (o = r.a.createElement(p, g({ key: a, pageNumbers: n }, e)))),
            o ? r.a.cloneElement(o, { key: u }) : null
          );
        });
      }
      var v = function (e) {
          var t = e.pageNumbers,
            n = e.pageManipulationOverlayItems,
            m = Object(l.d)(),
            s = Object(a.useCallback)(
              function () {
                m(i.a.setPageManipulationOverlayAlternativePosition(null)),
                  m(i.a.closeElements([d.a.PAGE_MANIPULATION_OVERLAY]));
              },
              [m]
            );
          return (
            Object(a.useEffect)(function () {
              return (
                f.a.addEventListener('documentLoaded', s),
                function () {
                  f.a.removeEventListener('documentLoaded', s);
                }
              );
            }, []),
            r.a.createElement(
              E,
              { pageNumbers: t, pageManipulationOverlayItems: n },
              r.a.createElement(c.a, {
                pageNumbers: t,
                dataElement: 'pageAdditionalControls',
              }),
              r.a.createElement(o.a, {
                pageNumbers: t,
                dataElement: 'pageRotationControls',
              }),
              r.a.createElement(u.a, {
                pageNumbers: t,
                dataElement: 'pageManipulationControls',
              })
            )
          );
        },
        b = n(247),
        y = n(3);
      function O(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var a,
                r,
                l,
                i,
                o = [],
                u = !0,
                c = !1;
              try {
                if (((l = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (a = l.call(n)).done) &&
                    (o.push(a.value), o.length !== t);
                    u = !0
                  );
              } catch (e) {
                (c = !0), (r = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (c) throw r;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return A(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return A(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function A(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      var N = function () {
        var e = O(
            Object(l.e)(function (e) {
              return [
                y.a.getSelectedThumbnailPageIndexes(e),
                y.a.getCurrentPage(e),
                y.a.getPageManipulationOverlayItems(e),
              ];
            }, l.c),
            3
          ),
          t = e[0],
          n = e[1],
          a = e[2],
          i =
            t.length > 0
              ? t.map(function (e) {
                  return e + 1;
                })
              : [n];
        return r.a.createElement(
          b.a,
          {
            menu: d.a.PAGE_MANIPULATION_OVERLAY,
            trigger: d.a.PAGE_MANIPULATION_OVERLAY_BUTTON,
          },
          r.a.createElement(v, {
            pageNumbers: i,
            pageManipulationOverlayItems: a,
          })
        );
      };
      t.default = N;
    },
  },
]);
//# sourceMappingURL=59.chunk.js.map
