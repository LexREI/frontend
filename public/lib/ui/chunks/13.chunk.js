(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    1387: function (e, t, n) {
      'use strict';
      var r = n(87),
        o = n(0),
        c = n(23);
      var i = function (e) {
          var t = Object(o.useRef)(null);
          return (
            Object(o.useEffect)(
              function () {
                var n,
                  r,
                  o = document.querySelector('#'.concat(e)),
                  i =
                    o ||
                    (function (e) {
                      var t = document.createElement('div');
                      return t.setAttribute('id', e), t;
                    })(e);
                return (
                  o ||
                    ((n = i),
                    (r = window.isApryseWebViewerWebComponent
                      ? Object(c.a)()
                      : document.body).insertBefore(
                      n,
                      r.lastElementChild.nextElementSibling
                    )),
                  i.appendChild(t.current),
                  function () {
                    t.current.remove(), i.childElementCount || i.remove();
                  }
                );
              },
              [e]
            ),
            t.current || (t.current = document.createElement('div')),
            t.current
          );
        },
        u = function (e) {
          var t = e.id,
            n = e.position,
            o = e.children,
            c = i(t);
          return (
            (c.style.position = 'absolute'),
            (c.style.top = 'auto' === n.top ? n.top : ''.concat(n.top, 'px')),
            (c.style.left =
              'auto' === n.left ? n.left : ''.concat(n.left, 'px')),
            (c.style.right =
              'auto' === n.right ? n.right : ''.concat(n.right, 'px')),
            (c.style.pointerEvents = 'none'),
            (c.style.zIndex = 999),
            Object(r.createPortal)(o, c)
          );
        };
      t.a = u;
    },
  },
]);
//# sourceMappingURL=13.chunk.js.map
