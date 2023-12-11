/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [19],
    {
      532: function (wa) {
        (function () {
          wa.exports = {
            La: function () {
              function sa(b, n) {
                this.scrollLeft = b;
                this.scrollTop = n;
              }
              function h(b) {
                if (
                  null === b ||
                  'object' !== typeof b ||
                  void 0 === b.behavior ||
                  'auto' === b.behavior ||
                  'instant' === b.behavior
                )
                  return !0;
                if ('object' === typeof b && 'smooth' === b.behavior) return !1;
                throw new TypeError(
                  'behavior member of ScrollOptions ' +
                    b.behavior +
                    ' is not a valid value for enumeration ScrollBehavior.'
                );
              }
              function pa(b, n) {
                if ('Y' === n) return b.clientHeight + a < b.scrollHeight;
                if ('X' === n) return b.clientWidth + a < b.scrollWidth;
              }
              function na(b, n) {
                b = fa.getComputedStyle(b, null)['overflow' + n];
                return 'auto' === b || 'scroll' === b;
              }
              function ma(b) {
                var n = pa(b, 'Y') && na(b, 'Y');
                b = pa(b, 'X') && na(b, 'X');
                return n || b;
              }
              function ja(b) {
                var n = (e() - b.startTime) / 468;
                var r = 0.5 * (1 - Math.cos(Math.PI * (1 < n ? 1 : n)));
                n = b.VB + (b.x - b.VB) * r;
                r = b.WB + (b.y - b.WB) * r;
                b.method.call(b.CI, n, r);
                (n === b.x && r === b.y) ||
                  fa.requestAnimationFrame(ja.bind(fa, b));
              }
              function ia(b, n, r) {
                var z = e();
                if (b === y.body) {
                  var w = fa;
                  var ba = fa.scrollX || fa.pageXOffset;
                  b = fa.scrollY || fa.pageYOffset;
                  var ha = f.scroll;
                } else
                  (w = b), (ba = b.scrollLeft), (b = b.scrollTop), (ha = sa);
                ja({
                  CI: w,
                  method: ha,
                  startTime: z,
                  VB: ba,
                  WB: b,
                  x: n,
                  y: r,
                });
              }
              var fa = window,
                y = document;
              if (
                !('scrollBehavior' in y.documentElement.style && !0 !== fa.ZBa)
              ) {
                var x = fa.HTMLElement || fa.Element,
                  f = {
                    scroll: fa.scroll || fa.scrollTo,
                    scrollBy: fa.scrollBy,
                    IZ: x.prototype.scroll || sa,
                    scrollIntoView: x.prototype.scrollIntoView,
                  },
                  e =
                    fa.performance && fa.performance.now
                      ? fa.performance.now.bind(fa.performance)
                      : Date.now,
                  a = RegExp('MSIE |Trident/|Edge/').test(
                    fa.navigator.userAgent
                  )
                    ? 1
                    : 0;
                fa.scroll = fa.scrollTo = function (b, n) {
                  void 0 !== b &&
                    (!0 === h(b)
                      ? f.scroll.call(
                          fa,
                          void 0 !== b.left
                            ? b.left
                            : 'object' !== typeof b
                              ? b
                              : fa.scrollX || fa.pageXOffset,
                          void 0 !== b.top
                            ? b.top
                            : void 0 !== n
                              ? n
                              : fa.scrollY || fa.pageYOffset
                        )
                      : ia.call(
                          fa,
                          y.body,
                          void 0 !== b.left
                            ? ~~b.left
                            : fa.scrollX || fa.pageXOffset,
                          void 0 !== b.top
                            ? ~~b.top
                            : fa.scrollY || fa.pageYOffset
                        ));
                };
                fa.scrollBy = function (b, n) {
                  void 0 !== b &&
                    (h(b)
                      ? f.scrollBy.call(
                          fa,
                          void 0 !== b.left
                            ? b.left
                            : 'object' !== typeof b
                              ? b
                              : 0,
                          void 0 !== b.top ? b.top : void 0 !== n ? n : 0
                        )
                      : ia.call(
                          fa,
                          y.body,
                          ~~b.left + (fa.scrollX || fa.pageXOffset),
                          ~~b.top + (fa.scrollY || fa.pageYOffset)
                        ));
                };
                x.prototype.scroll = x.prototype.scrollTo = function (b, n) {
                  if (void 0 !== b)
                    if (!0 === h(b)) {
                      if ('number' === typeof b && void 0 === n)
                        throw new SyntaxError('Value could not be converted');
                      f.IZ.call(
                        this,
                        void 0 !== b.left
                          ? ~~b.left
                          : 'object' !== typeof b
                            ? ~~b
                            : this.scrollLeft,
                        void 0 !== b.top
                          ? ~~b.top
                          : void 0 !== n
                            ? ~~n
                            : this.scrollTop
                      );
                    } else
                      (n = b.left),
                        (b = b.top),
                        ia.call(
                          this,
                          this,
                          'undefined' === typeof n ? this.scrollLeft : ~~n,
                          'undefined' === typeof b ? this.scrollTop : ~~b
                        );
                };
                x.prototype.scrollBy = function (b, n) {
                  void 0 !== b &&
                    (!0 === h(b)
                      ? f.IZ.call(
                          this,
                          void 0 !== b.left
                            ? ~~b.left + this.scrollLeft
                            : ~~b + this.scrollLeft,
                          void 0 !== b.top
                            ? ~~b.top + this.scrollTop
                            : ~~n + this.scrollTop
                        )
                      : this.scroll({
                          left: ~~b.left + this.scrollLeft,
                          top: ~~b.top + this.scrollTop,
                          behavior: b.behavior,
                        }));
                };
                x.prototype.scrollIntoView = function (b) {
                  if (!0 === h(b))
                    f.scrollIntoView.call(this, void 0 === b ? !0 : b);
                  else {
                    for (b = this; b !== y.body && !1 === ma(b); )
                      b = b.parentNode || b.host;
                    var n = b.getBoundingClientRect(),
                      r = this.getBoundingClientRect();
                    b !== y.body
                      ? (ia.call(
                          this,
                          b,
                          b.scrollLeft + r.left - n.left,
                          b.scrollTop + r.top - n.top
                        ),
                        'fixed' !== fa.getComputedStyle(b).position &&
                          fa.scrollBy({
                            left: n.left,
                            top: n.top,
                            behavior: 'smooth',
                          }))
                      : fa.scrollBy({
                          left: r.left,
                          top: r.top,
                          behavior: 'smooth',
                        });
                  }
                };
              }
            },
          };
        })();
      },
    },
  ]);
}).call(this || window);
