(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    1711: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return l;
      });
      var n = t(77),
        i = t(19),
        s = t.n(i),
        u = t(0),
        r = t.n(u),
        _ = t(1362),
        c = t(1370),
        l = Object(u.forwardRef)(function (e, a) {
          var t = e.message,
            i = void 0 === t ? 'default' : t,
            l = e.messageText,
            p = e.fillWidth,
            o = e.wrapperClassName,
            d = e.padMessageText,
            m = e.className,
            f = e.onFocus,
            w = e.onBlur,
            b = e.rightElement,
            g = e.leftElement,
            v = e.type,
            E = void 0 === v ? 'text' : v,
            N = Object(n.b)(e, [
              'message',
              'messageText',
              'fillWidth',
              'wrapperClassName',
              'padMessageText',
              'className',
              'onFocus',
              'onBlur',
              'rightElement',
              'leftElement',
              'type',
            ]),
            h = Object(_.a)(f, w),
            O = h.focused,
            x = h.handleOnFocus,
            j = h.handleOnBlur,
            T = Object(u.useMemo)(
              function () {
                if (b) return b;
                var e = void 0;
                switch (i) {
                  case 'warning':
                    e = 'Warning';
                    break;
                  case 'error':
                    e = 'Error';
                }
                return e
                  ? r.a.createElement(c.a, {
                      className: 'ui__input__icon',
                      icon: e,
                    })
                  : void 0;
              },
              [i, b]
            ),
            B = s()(
              'ui__base ui__input__wrapper',
              {
                'ui__input__wrapper--fill': p,
                'ui__input__wrapper--pad': d && !l,
              },
              o
            ),
            F = s()('ui__input', 'ui__input--message-' + i, {
              'ui__input--focused': O,
            }),
            k = s()(
              'ui__input__input',
              { 'ui__input__input--disabled': N.disabled },
              m
            );
          return r.a.createElement(
            'div',
            { className: B },
            r.a.createElement(
              'div',
              { className: F },
              g,
              r.a.createElement(
                'input',
                Object(n.a)({}, N, {
                  type: E,
                  onFocus: x,
                  onBlur: j,
                  className: k,
                  ref: a,
                })
              ),
              T
            ),
            l
              ? r.a.createElement(
                  'div',
                  { className: 'ui__input__messageText' },
                  l
                )
              : void 0
          );
        });
    },
  },
]);
//# sourceMappingURL=4.chunk.js.map
