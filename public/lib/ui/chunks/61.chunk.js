(window.webpackJsonp = window.webpackJsonp || []).push([
  [61],
  {
    1740: function (e, t, r) {
      'use strict';
      r.r(t);
      r(18),
        r(11),
        r(13),
        r(7),
        r(12),
        r(8),
        r(9),
        r(10),
        r(15),
        r(14),
        r(20),
        r(17);
      var n = r(0),
        o = r.n(n),
        a = r(2),
        i = r(3),
        u = r(83),
        c = r(6),
        l = r(362),
        f = r(247),
        s = r(418),
        O = r(5);
      function m(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != r) {
              var n,
                o,
                a,
                i,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((a = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = a.call(r)).done) &&
                    (u.push(n.value), u.length !== t);
                    c = !0
                  );
              } catch (e) {
                (l = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((i = r.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return u;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return b(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return b(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var d = function () {
        var e = Object(c.d)(),
          t = m(Object(l.a)(), 1)[0],
          r = m(
            Object(c.e)(function (e) {
              return [i.a.getActiveDocumentViewerKey(e)];
            }),
            1
          )[0];
        return o.a.createElement(
          f.a,
          {
            menu: O.a.ZOOM_OVERLAY,
            trigger: O.a.ZOOM_OVERLAY_BUTTON,
            ariaLabel: t('component.zoomOverlay'),
          },
          o.a.createElement(s.a, {
            zoomList: Object(c.e)(i.a.getZoomList),
            currentZoomLevel: Object(c.e)(i.a.getZoom),
            isReaderMode: Object(c.e)(i.a.isReaderMode),
            isMarqueeZoomActive:
              'MarqueeZoomTool' === Object(c.e)(i.a.getActiveToolName),
            isMarqueeToolButtonDisabled: Object(c.e)(function (e) {
              return i.a.isElementDisabled(e, 'marqueeToolButton');
            }),
            fitToWidth: function () {
              return Object(u.b)(r);
            },
            fitToPage: function () {
              return Object(u.a)(r);
            },
            onClickZoomLevelOption: function (t) {
              Object(u.f)(t), e(a.a.closeElements([O.a.ZOOM_OVERLAY]));
            },
            onClickMarqueeZoom: function () {
              e(a.a.closeElements([O.a.ZOOM_OVERLAY]));
            },
          })
        );
      };
      t.default = d;
    },
  },
]);
//# sourceMappingURL=61.chunk.js.map
