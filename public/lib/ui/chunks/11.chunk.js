(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    1475: function (e, t, a) {
      'use strict';
      a(18),
        a(11),
        a(13),
        a(7),
        a(12),
        a(8),
        a(9),
        a(10),
        a(15),
        a(14),
        a(20),
        a(17);
      var n = a(0),
        r = a.n(n),
        l = a(6),
        c = a(3),
        i = a(362),
        o = a(57),
        s = a(21);
      var m = function (e) {
          var t = Object(i.a)().t,
            a = e.deletePages,
            n = e.extractPages,
            l = e.insertPages,
            c = e.replacePages;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              o.a,
              { dataElement: 'pageManipulationHeader', className: 'type' },
              t('action.pageManipulation')
            ),
            r.a.createElement(
              o.a,
              { className: 'row', dataElement: 'insertPage', onClick: l },
              r.a.createElement(s.a, {
                title: 'action.insert',
                img: 'icon-page-insertion-insert',
                role: 'option',
              }),
              r.a.createElement(
                'div',
                { className: 'title' },
                t('action.insert')
              )
            ),
            r.a.createElement(
              o.a,
              { className: 'row', dataElement: 'replacePage', onClick: c },
              r.a.createElement(s.a, {
                title: 'action.replace',
                img: 'icon-page-replacement',
                role: 'option',
              }),
              r.a.createElement(
                'div',
                { className: 'title' },
                t('action.replace')
              )
            ),
            r.a.createElement(
              o.a,
              { className: 'row', dataElement: 'extractPage', onClick: n },
              r.a.createElement(s.a, {
                title: 'action.extract',
                img: 'icon-page-manipulation-extract',
                role: 'option',
              }),
              r.a.createElement(
                'div',
                { className: 'title' },
                t('action.extract')
              )
            ),
            r.a.createElement(
              o.a,
              { dataElement: 'deletePage', className: 'row', onClick: a },
              r.a.createElement(s.a, {
                title: 'action.delete',
                img: 'icon-delete-line',
                role: 'option',
              }),
              r.a.createElement(
                'div',
                { className: 'title' },
                t('action.delete')
              )
            )
          );
        },
        u = a(109),
        p = a(4),
        E = a.n(p),
        b = a(2),
        f = a(35),
        g = a(5);
      function O(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var a =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != a) {
              var n,
                r,
                l,
                c,
                i = [],
                o = !0,
                s = !1;
              try {
                if (((l = (a = a.call(e)).next), 0 === t)) {
                  if (Object(a) !== a) return;
                  o = !1;
                } else
                  for (
                    ;
                    !(o = (n = l.call(a)).done) &&
                    (i.push(n.value), i.length !== t);
                    o = !0
                  );
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  if (
                    !o &&
                    null != a.return &&
                    ((c = a.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return d(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === a && e.constructor && (a = e.constructor.name);
            if ('Map' === a || 'Set' === a) return Array.from(e);
            if (
              'Arguments' === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            )
              return d(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var A = { pageNumbers: E.a.arrayOf(E.a.number), warn: E.a.bool };
      function P(e) {
        var t = Object(l.d)(),
          a = e.pageNumbers,
          n = e.warn,
          i = O(
            Object(l.e)(function (e) {
              return [c.a.pageDeletionConfirmationModalEnabled(e)];
            }),
            1
          )[0],
          o = function () {
            t(b.a.closeElement(g.a.PAGE_MANIPULATION_OVERLAY)),
              t(b.a.openElement('insertPageModal'));
          };
        return r.a.createElement(m, {
          insertPages: function () {
            n ? !Object(u.k)(a, t) && o() : o(),
              Object(f.l)() &&
                t(b.a.closeElement(g.a.PAGE_MANIPULATION_OVERLAY));
          },
          deletePages: function () {
            n
              ? !Object(u.k)(a, t) && Object(u.b)(a, t, i)
              : Object(u.b)(a, t, i),
              Object(f.l)() &&
                t(b.a.closeElement(g.a.PAGE_MANIPULATION_OVERLAY));
          },
          extractPages: function () {
            n ? !Object(u.k)(a, t) && Object(u.e)(a, t) : Object(u.e)(a, t),
              Object(f.l)() &&
                t(b.a.closeElement(g.a.PAGE_MANIPULATION_OVERLAY));
          },
          replacePages: function () {
            n ? !Object(u.k)(a, t) && Object(u.m)(t) : Object(u.m)(t),
              Object(f.l)() &&
                t(b.a.closeElement(g.a.PAGE_MANIPULATION_OVERLAY));
          },
        });
      }
      P.propTypes = A;
      var j = P;
      t.a = j;
    },
  },
]);
//# sourceMappingURL=11.chunk.js.map
