(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    1428: function (e, o, n) {
      var t = n(27),
        a = n(1576);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']]);
      var i = {
        insert: function (e) {
          const o = document.getElementsByTagName('apryse-webviewer');
          if (o.length > 0) {
            const n = [];
            for (let t = 0; t < o.length; t++) {
              const a = o[t];
              if (0 === t)
                a.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((o) => {
                        o.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const o = e.cloneNode(!0);
                a.shadowRoot.appendChild(o), n.push(o);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      t(a, i);
      e.exports = a.locals || {};
    },
    1477: function (e, o, n) {
      'use strict';
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
      var t = n(0),
        a = n.n(t),
        i = n(362),
        l = (n(1574), n(148));
      function d(e, o) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, o) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var t,
                a,
                i,
                l,
                d = [],
                p = !0,
                r = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === o)) {
                  if (Object(n) !== n) return;
                  p = !1;
                } else
                  for (
                    ;
                    !(p = (t = i.call(n)).done) &&
                    (d.push(t.value), d.length !== o);
                    p = !0
                  );
              } catch (e) {
                (r = !0), (a = e);
              } finally {
                try {
                  if (
                    !p &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (r) throw a;
                }
              }
              return d;
            }
          })(e, o) ||
          (function (e, o) {
            if (!e) return;
            if ('string' == typeof e) return p(e, o);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return p(e, o);
          })(e, o) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function p(e, o) {
        (null == o || o > e.length) && (o = e.length);
        for (var n = 0, t = new Array(o); n < o; n++) t[n] = e[n];
        return t;
      }
      var r = function (e) {
        var o = e.defaultValue,
          n = e.onFileSelect,
          p = e.acceptFormats,
          r = e.extension,
          c = e.setExtension,
          s = d(Object(i.a)(), 1)[0],
          m = d(Object(t.useState)(o || ''), 2),
          b = m[0],
          u = m[1];
        return (
          Object(t.useEffect)(function () {
            o || o === b || u('');
          }),
          a.a.createElement(
            'div',
            { className: 'FileInputPanel' },
            a.a.createElement(
              'div',
              { className: 'url-input-header' },
              s('link.url')
            ),
            a.a.createElement(
              'div',
              { className: 'url-input' },
              a.a.createElement('input', {
                type: 'text',
                style: {
                  width: '100%',
                  height: 32,
                  paddingLeft: 8,
                  fontSize: 13,
                  boxSizing: 'border-box',
                },
                value: b,
                onChange: function (e) {
                  u(e.target.value), n(e.target.value);
                },
                placeholder: s('link.urlLink'),
              })
            ),
            c
              ? a.a.createElement(
                  'div',
                  { className: 'extension-dropdown' },
                  a.a.createElement(l.a, {
                    disabled: !b,
                    placeholder: s('tool.select'),
                    onClick: function (e) {
                      return e.stopPropagation();
                    },
                    items: p,
                    onClickItem: c,
                    currentSelectionKey: r,
                  }),
                  a.a.createElement('p', null, s('OpenFile.extension'))
                )
              : null
          )
        );
      };
      o.a = r;
    },
    1574: function (e, o, n) {
      var t = n(27),
        a = n(1575);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']]);
      var i = {
        insert: function (e) {
          const o = document.getElementsByTagName('apryse-webviewer');
          if (o.length > 0) {
            const n = [];
            for (let t = 0; t < o.length; t++) {
              const a = o[t];
              if (0 === t)
                a.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((o) => {
                        o.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const o = e.cloneNode(!0);
                a.shadowRoot.appendChild(o), n.push(o);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      t(a, i);
      e.exports = a.locals || {};
    },
    1575: function (e, o, n) {
      (e.exports = n(28)(!1)).push([
        e.i,
        '.FileInputPanel{display:flex;justify-content:center;height:100%;flex-direction:column;background-color:var(--document-background-color);border-radius:4px}.FileInputPanel .url-input-header{font-size:13px;line-height:16px;padding-left:16px;padding-bottom:9px;font-weight:700}.FileInputPanel .url-input{padding:0 16px}.FileInputPanel ::-moz-placeholder{color:var(--placeholder-text)}.FileInputPanel :-ms-input-placeholder{color:var(--placeholder-text)}.FileInputPanel ::placeholder{color:var(--placeholder-text)}',
        '',
      ]);
    },
    1576: function (e, o, n) {
      (o = e.exports = n(28)(!1)).push([
        e.i,
        '.open.OpenFileModal,.open.PageReplacementModal{visibility:visible}.closed.OpenFileModal,.closed.PageReplacementModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.OpenFileModal,.PageReplacementModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.OpenFileModal .modal-container .wrapper .modal-content,.PageReplacementModal .modal-container .wrapper .modal-content{padding:10px}.OpenFileModal .footer,.PageReplacementModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.OpenFileModal .footer.modal-footer,.PageReplacementModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.OpenFileModal .footer .modal-button,.PageReplacementModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.OpenFileModal .footer .modal-button.cancel,.PageReplacementModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.OpenFileModal .footer .modal-button.cancel:hover,.PageReplacementModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.OpenFileModal .footer .modal-button.confirm,.PageReplacementModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.OpenFileModal .footer .modal-button.confirm:hover,.PageReplacementModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.OpenFileModal .footer .modal-button.confirm.disabled,.PageReplacementModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.OpenFileModal .footer .modal-button.secondary-btn-custom,.PageReplacementModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.OpenFileModal .footer .modal-button.secondary-btn-custom:hover,.PageReplacementModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OpenFileModal .footer .modal-button,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageReplacementModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OpenFileModal .footer .modal-button,.App.is-web-component:not(.is-in-desktop-only-mode) .PageReplacementModal .footer .modal-button{padding:23px 8px}}.OpenFileModal .swipe-indicator,.PageReplacementModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OpenFileModal .swipe-indicator,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageReplacementModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .OpenFileModal .swipe-indicator,.App.is-web-component:not(.is-in-desktop-only-mode) .PageReplacementModal .swipe-indicator{display:none}}.OpenFileModal .container,.PageReplacementModal .container{overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .OpenFileModal .container,.App:not(.is-web-component) .PageReplacementModal .container,.OpenFileModal .App:not(.is-web-component) .container,.PageReplacementModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .OpenFileModal .container,.App.is-web-component .PageReplacementModal .container,.OpenFileModal .App.is-web-component .container,.PageReplacementModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OpenFileModal .container,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageReplacementModal .container,.OpenFileModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container,.PageReplacementModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OpenFileModal .container,.App.is-web-component:not(.is-in-desktop-only-mode) .PageReplacementModal .container,.OpenFileModal .App.is-web-component:not(.is-in-desktop-only-mode) .container,.PageReplacementModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.OpenFileModal .container .tab-list,.PageReplacementModal .container .tab-list{width:100%;height:28px;display:flex;border-radius:4px;border:1px solid var(--border);color:var(--text-color)}.OpenFileModal .container .tab-list .tab-options-button,.PageReplacementModal .container .tab-list .tab-options-button{text-align:center;vertical-align:middle;line-height:24px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1;border-radius:0;cursor:pointer}.OpenFileModal .container .tab-list .tab-options-button:first-child,.PageReplacementModal .container .tab-list .tab-options-button:first-child{border-bottom-left-radius:4px;border-top-left-radius:4px}.OpenFileModal .container .tab-list .tab-options-button:last-child,.PageReplacementModal .container .tab-list .tab-options-button:last-child{border-bottom-right-radius:4px;border-top-right-radius:4px}.OpenFileModal .container .tab-list .tab-options-button:hover,.PageReplacementModal .container .tab-list .tab-options-button:hover{background:var(--popup-button-hover)}.OpenFileModal .container .tab-list .tab-options-button.selected,.PageReplacementModal .container .tab-list .tab-options-button.selected{background:var(--popup-button-active);cursor:default}.OpenFileModal .container .tab-list .tab-options-divider,.PageReplacementModal .container .tab-list .tab-options-divider{width:1px;background:var(--divider)}.OpenFileModal .container .tab-panel,.PageReplacementModal .container .tab-panel{width:100%;display:flex;flex-direction:column;align-items:center}.OpenFileModal .container,.PageReplacementModal .container{box-sizing:border-box;display:flex;flex-direction:column;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);padding:0;background:var(--component-background);overflow-y:visible;width:480px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OpenFileModal .container,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageReplacementModal .container{border-radius:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OpenFileModal .container,.App.is-web-component:not(.is-in-desktop-only-mode) .PageReplacementModal .container{border-radius:0}}@media(max-height:320px){.App:not(.is-web-component) .OpenFileModal .container,.App:not(.is-web-component) .PageReplacementModal .container{display:grid;height:100%;position:fixed;top:0;grid-template-rows:100px auto 70px;justify-content:normal}}@container (max-height: 320px){.App.is-web-component .OpenFileModal .container,.App.is-web-component .PageReplacementModal .container{display:grid;height:100%;position:fixed;top:0;grid-template-rows:100px auto 70px;justify-content:normal}}.OpenFileModal .container .Button,.PageReplacementModal .container .Button{height:100%;justify-content:right}.OpenFileModal .container .Button.close-button,.PageReplacementModal .container .Button.close-button{justify-content:center}.OpenFileModal .container .page-replacement-divider,.PageReplacementModal .container .page-replacement-divider{border-top:1px solid var(--divider);margin:0}.OpenFileModal .container .modal-container .wrapper .header-container,.PageReplacementModal .container .modal-container .wrapper .header-container{border-bottom:0;padding-top:20px;padding-bottom:0}.OpenFileModal .container .tabs-header-container,.PageReplacementModal .container .tabs-header-container{padding:0 16px 16px}.OpenFileModal .container .header,.PageReplacementModal .container .header{margin:0;display:flex;justify-content:space-between;width:100%;font-size:16px;line-height:24px;font-weight:700}.OpenFileModal .container .footer,.PageReplacementModal .container .footer{margin-top:0;padding:16px;justify-content:flex-end}.OpenFileModal .container .footer.isFileSelected,.PageReplacementModal .container .footer.isFileSelected{justify-content:space-between}.OpenFileModal .container .footer .deselect-thumbnails,.PageReplacementModal .container .footer .deselect-thumbnails{border:none;background-color:transparent;color:var(--secondary-button-text);padding:0 8px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer}.OpenFileModal .container .footer .deselect-thumbnails,:host(:not([data-tabbing=true])) .PageReplacementModal .container .footer .deselect-thumbnails,html:not([data-tabbing=true]) .PageReplacementModal .container .footer .deselect-thumbnails{outline:none}.OpenFileModal .container .footer .deselect-thumbnails:hover,.PageReplacementModal .container .footer .deselect-thumbnails:hover{color:var(--secondary-button-hover)}.OpenFileModal .container .footer .deselect-thumbnails.disabled,.PageReplacementModal .container .footer .deselect-thumbnails.disabled{visibility:hidden}.OpenFileModal .container .footer .modal-btn,.PageReplacementModal .container .footer .modal-btn{border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;padding:0 20px;height:32px;width:67px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);font-weight:700;cursor:pointer}.OpenFileModal .container .footer .modal-btn,:host(:not([data-tabbing=true])) .PageReplacementModal .container .footer .modal-btn,html:not([data-tabbing=true]) .PageReplacementModal .container .footer .modal-btn{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OpenFileModal .container .footer .modal-btn,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageReplacementModal .container .footer .modal-btn{height:40px;width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OpenFileModal .container .footer .modal-btn,.App.is-web-component:not(.is-in-desktop-only-mode) .PageReplacementModal .container .footer .modal-btn{height:40px;width:100px}}.OpenFileModal .container .footer .modal-btn:hover,.PageReplacementModal .container .footer .modal-btn:hover{background:var(--primary-button-hover)}.OpenFileModal .container .footer .modal-btn.noFile,.PageReplacementModal .container .footer .modal-btn.noFile{opacity:.5;cursor:not-allowed}.OpenFileModal .container .modal-body,.PageReplacementModal .container .modal-body{height:unset;display:flex;flex-direction:column;font-size:13px}.OpenFileModal .container .modal-body .modal-body-container,.PageReplacementModal .container .modal-body .modal-body-container{width:100%;height:409px;padding:16px 0 16px 16px;border-radius:4px;overflow:auto;background-color:var(--gray-2);display:flex;flex-wrap:wrap;grid-gap:16px;gap:16px}.OpenFileModal .container .modal-body .modal-body-container.isLoading,.PageReplacementModal .container .modal-body .modal-body-container.isLoading{justify-content:center;align-items:center}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .OpenFileModal .container .modal-body .modal-body-container,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageReplacementModal .container .modal-body .modal-body-container{padding:12px 0 12px 12px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .OpenFileModal .container .modal-body .modal-body-container,.App.is-web-component:not(.is-in-desktop-only-mode) .PageReplacementModal .container .modal-body .modal-body-container{padding:12px 0 12px 12px}}.OpenFileModal .container .tab-panel .panel-body,.PageReplacementModal .container .tab-panel .panel-body{width:100%;height:240px;position:relative;padding:16px;font-size:13px;border-radius:4px}.OpenFileModal .container .tab-panel .panel-body.upload,.PageReplacementModal .container .tab-panel .panel-body.upload{background:transparent}.OpenFileModal .container .tab-list,.PageReplacementModal .container .tab-list{margin-top:12px;margin-bottom:1px}.OpenFileModal .container .tab-list .tab-options-button,.PageReplacementModal .container .tab-list .tab-options-button{padding:0;border:none;background-color:transparent}.OpenFileModal .container .tab-list .tab-options-button,:host(:not([data-tabbing=true])) .PageReplacementModal .container .tab-list .tab-options-button,html:not([data-tabbing=true]) .PageReplacementModal .container .tab-list .tab-options-button{outline:none}',
        '',
      ]),
        (o.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
  },
]);
//# sourceMappingURL=8.chunk.js.map
