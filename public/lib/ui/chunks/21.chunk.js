(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    1432: function (e, t, n) {
      var r = n(27),
        a = n(1433);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']]);
      var o = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let r = 0; r < t.length; r++) {
              const a = t[r];
              if (0 === r)
                a.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                a.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      r(a, o);
      e.exports = a.locals || {};
    },
    1433: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ListSeparator{margin-top:16px;margin-bottom:8px;font-family:Lato;font-weight:500;color:var(--list-separator-color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1439: function (e, t, n) {
      'use strict';
      var r = n(0),
        a = n.n(r),
        o = n(4),
        i = n.n(o),
        c = (n(1432), { renderContent: i.a.func, children: i.a.node }),
        l = function (e) {
          var t = e.renderContent ? e.renderContent() : e.children;
          return a.a.createElement('div', { className: 'ListSeparator' }, t);
        };
      l.propTypes = c;
      var s = a.a.memo(l);
      t.a = s;
    },
    1679: function (e, t, n) {
      var r = n(27),
        a = n(1680);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']]);
      var o = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let r = 0; r < t.length; r++) {
              const a = t[r];
              if (0 === r)
                a.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                a.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      r(a, o);
      e.exports = a.locals || {};
    },
    1680: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.SearchResult{background-color:transparent;border:1px solid transparent;display:block;width:calc(100% - 4px);text-align:left;cursor:pointer;border-radius:4px;box-shadow:0 0 3px 0 var(--box-shadow);padding:10px 12px;margin-left:2px;margin-bottom:8px;background:var(--component-background);word-break:break-all}:host(:not([data-tabbing=true])) .SearchResult,html:not([data-tabbing=true]) .SearchResult{outline:none}.SearchResult.selected{border:1px solid var(--focus-border);box-shadow:none}.SearchResult .search-value{background:var(--yellow-1);word-break:break-all}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1697: function (e, t, n) {
      var r = n(27),
        a = n(1698);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']]);
      var o = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let r = 0; r < t.length; r++) {
              const a = t[r];
              if (0 === r)
                a.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                a.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      r(a, o);
      e.exports = a.locals || {};
    },
    1698: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.SearchOverlay{position:static;display:flex;flex-direction:column;padding-right:8px;flex-wrap:nowrap;border:0;border-radius:0;background:transparent;visibility:visible!important;flex-grow:0}.SearchOverlay .input-container{position:relative;box-sizing:border-box;border:1px solid var(--border);border-radius:4px;height:28px;display:flex;align-items:center;justify-content:flex-end;color:var(--text-color);padding:6px 2px 6px 6px;background:var(--component-background)}.SearchOverlay .input-container input{width:100%;padding-right:26px;height:20px;border:none;background:transparent}.SearchOverlay .input-container input::-moz-placeholder{color:var(--placeholder-text)}.SearchOverlay .input-container input:-ms-input-placeholder{color:var(--placeholder-text)}.SearchOverlay .input-container input::placeholder{color:var(--placeholder-text)}.SearchOverlay .input-container .clearSearch-button{padding:0;border:none;background-color:transparent;cursor:pointer;border-radius:4px;display:flex;align-items:center;justify-content:center;position:absolute;width:24px;height:24px}:host(:not([data-tabbing=true])) .SearchOverlay .input-container .clearSearch-button,html:not([data-tabbing=true]) .SearchOverlay .input-container .clearSearch-button{outline:none}.SearchOverlay .input-container .clearSearch-button svg{color:var(--gray-7)}.SearchOverlay .input-container .clearSearch-button:hover{background:var(--blue-1)}.SearchOverlay .divider{height:1px;width:100%;background:var(--divider);margin:10px 0}.SearchOverlay .options{display:flex;flex-wrap:wrap;margin-top:8px}.SearchOverlay .options>span{margin-right:8px}.SearchOverlay .options>span>label{white-space:nowrap}.SearchOverlay .replace-options .replace-buttons{display:flex;flex-direction:row;justify-content:flex-end;padding-top:10px}.SearchOverlay .replace-options .replace-buttons .spinner{margin:0;position:absolute;left:30px}.SearchOverlay .replace-options .replace-buttons .btn-replace{display:flex;justify-content:center;align-items:center;background-color:var(--blue-5);border:1px solid var(--blue-5);color:var(--gray-0);padding:6px 18px;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:28px;cursor:pointer}.SearchOverlay .replace-options .replace-buttons .btn-replace:disabled{opacity:.5}.SearchOverlay .replace-options .replace-buttons .btn-replace-all{display:flex;justify-content:center;align-items:center;color:var(--blue-5);padding:6px 18px;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:28px;cursor:pointer;margin-right:5px}.SearchOverlay .replace-options .replace-buttons .btn-replace-all:disabled{opacity:.5}.SearchOverlay .extra-options{margin-top:5px}.SearchOverlay .extra-options button.Button{display:flex;justify-content:center;align-items:center;color:var(--blue-5);width:auto;cursor:pointer;margin-right:5px;font-weight:500;height:25px}.SearchOverlay .extra-options button.Button .Icon{color:var(--blue-5);width:14px;margin-top:10px;margin-left:6px}.SearchOverlay .footer{display:flex;align-items:center;justify-content:space-between;color:var(--faded-text);margin-bottom:16px}.SearchOverlay .footer .spinner{height:25px!important;width:25px!important;margin:0}.SearchOverlay .footer .buttons{display:flex;flex-direction:row;align-self:flex-end;justify-content:space-evenly;margin-left:auto;width:64px;height:28px}.SearchOverlay .footer .buttons .button{padding:0;border:none;background-color:transparent;width:28px;height:28px;border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer}:host(:not([data-tabbing=true])) .SearchOverlay .footer .buttons .button,html:not([data-tabbing=true]) .SearchOverlay .footer .buttons .button{outline:none}.SearchOverlay .footer .buttons .button svg{color:var(--gray-7)}.SearchOverlay .footer .buttons .button:hover{background-color:var(--blue-1)}.SearchOverlay .footer .buttons .arrow{width:18px;height:18px}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1699: function (e, t, n) {
      var r = n(27),
        a = n(1700);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']]);
      var o = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let r = 0; r < t.length; r++) {
              const a = t[r];
              if (0 === r)
                a.shadowRoot.appendChild(e),
                  (e.onload = function () {
                    n.length > 0 &&
                      n.forEach((t) => {
                        t.innerHTML = e.innerHTML;
                      });
                  });
              else {
                const t = e.cloneNode(!0);
                a.shadowRoot.appendChild(t), n.push(t);
              }
            }
          } else document.head.appendChild(e);
        },
        singleton: !1,
      };
      r(a, o);
      e.exports = a.locals || {};
    },
    1700: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.search-panel-container{z-index:65;flex-direction:column;background-color:var(--panel-background);display:flex;flex-direction:row;position:relative;overflow:hidden}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .search-panel-container{z-index:95}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .search-panel-container{z-index:95}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .search-panel-container{border-left:1px solid var(--side-panel-border)}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .search-panel-container{border-left:1px solid var(--side-panel-border)}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .search-panel-container{position:fixed;top:0;right:0;height:100%;width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .search-panel-container{position:fixed;top:0;right:0;height:100%;width:100%}}.SearchPanel{padding:16px 8px 0 16px;display:flex;flex-direction:column}.SearchPanel .ListSeparator:first-child{margin-top:0}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.SearchPanel .ReactVirtualized__Grid__innerScrollContainer{max-width:1000px!important}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchPanel{width:100%;min-width:100%;padding-top:0}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchPanel .close-container{display:flex;align-items:center;justify-content:flex-end;height:64px;width:100%;padding-right:12px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchPanel .close-container .close-icon-container{padding:0;border:none;background-color:transparent;cursor:pointer}:host(:not([data-tabbing=true])) .App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchPanel .close-container .close-icon-container,html:not([data-tabbing=true]) .App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchPanel .close-container .close-icon-container{outline:none}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SearchPanel .close-container .close-icon-container .close-icon{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SearchPanel{width:100%;min-width:100%;padding-top:0}.App.is-web-component:not(.is-in-desktop-only-mode) .SearchPanel .close-container{display:flex;align-items:center;justify-content:flex-end;height:64px;width:100%;padding-right:12px}.App.is-web-component:not(.is-in-desktop-only-mode) .SearchPanel .close-container .close-icon-container{padding:0;border:none;background-color:transparent;cursor:pointer}:host(:not([data-tabbing=true])) .App.is-web-component:not(.is-in-desktop-only-mode) .SearchPanel .close-container .close-icon-container,html:not([data-tabbing=true]) .App.is-web-component:not(.is-in-desktop-only-mode) .SearchPanel .close-container .close-icon-container{outline:none}.App.is-web-component:not(.is-in-desktop-only-mode) .SearchPanel .close-container .close-icon-container .close-icon{width:24px;height:24px}}.SearchPanel .results{overflow-y:auto;overflow-y:overlay;flex:1}.SearchPanel .results.wild-card-visible{margin-top:110px!important}.SearchPanel .results .ReactVirtualized__List{overflow:overlay!important;padding-right:8px;width:auto!important}.SearchPanel .results .ReactVirtualized__List:focus{outline:none}.SearchPanel .results .ReactVirtualized__List .ReactVirtualized__Grid__innerScrollContainer{max-width:unset!important}.SearchPanel .loader-wrapper{display:flex;padding:10px;justify-content:center}.SearchPanel .info{padding:15px 0}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1717: function (e, t, n) {
      'use strict';
      n.r(t);
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
        n(17),
        n(37),
        n(38),
        n(31),
        n(22),
        n(36),
        n(34),
        n(72),
        n(24),
        n(25),
        n(75),
        n(73);
      var r = n(0),
        a = n.n(r),
        o = n(6),
        i = n(1),
        c = n(2),
        l = n(3),
        s = n(58),
        u = n(4),
        p = n.n(u),
        d = n(362),
        h = (n(32), n(82), n(65), n(53), n(174)),
        f = (n(1679), n(1681)),
        m = n.n(f),
        b = n(1693),
        y = n.n(b),
        v = n(1439),
        g = ['measureRef', 'contentRect'];
      function w() {
        return (w = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function x(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function S(e, t) {
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
              var r,
                a,
                o,
                i,
                c = [],
                l = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return c;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return O(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return O(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var E = {
        currentResultIndex: p.a.number.isRequired,
        searchResults: p.a.arrayOf(p.a.object).isRequired,
        t: p.a.func.isRequired,
        pageLabels: p.a.arrayOf(p.a.any).isRequired,
        isProcessingSearchResults: p.a.bool,
      };
      function R(e) {
        var t = e.currentResultIndex,
          n = e.searchResults,
          r = e.t,
          o = e.pageLabels,
          i = 0 === t ? t : t - 1,
          c = n[t],
          l = n[i],
          s = l === c,
          u = l.pageNum !== c.pageNum;
        if (s || u) {
          var p = ''
            .concat(r('option.shared.page'), ' ')
            .concat(o[c.pageNum - 1]);
          return a.a.createElement(
            'div',
            { role: 'cell' },
            a.a.createElement(v.a, null, p)
          );
        }
        return null;
      }
      R.propTypes = E;
      var A = {
        result: p.a.object.isRequired,
        currentResultIndex: p.a.number.isRequired,
        activeResultIndex: p.a.number.isRequired,
        onSearchResultClick: p.a.func,
        activeDocumentViewerKey: p.a.number,
      };
      function j(e) {
        var t = e.result,
          n = e.currentResultIndex,
          r = e.activeResultIndex,
          o = e.onSearchResultClick,
          i = e.activeDocumentViewerKey,
          c = t.ambientStr,
          l = t.resultStrStart,
          s = t.resultStrEnd,
          u = t.resultStr,
          p = c.slice(0, l),
          d = '' === c ? u : c.slice(l, s),
          h = c.slice(s);
        return a.a.createElement(
          'button',
          {
            role: 'cell',
            className: 'SearchResult '.concat(n === r ? 'selected' : ''),
            onClick: function () {
              o && o(n, t, i);
            },
          },
          p,
          a.a.createElement('span', { className: 'search-value' }, d),
          h
        );
      }
      j.propTypes = A;
      var k = {
        width: p.a.number,
        height: p.a.number,
        activeResultIndex: p.a.number,
        searchStatus: p.a.oneOf([
          'SEARCH_NOT_INITIATED',
          'SEARCH_IN_PROGRESS',
          'SEARCH_DONE',
        ]),
        searchResults: p.a.arrayOf(p.a.object),
        t: p.a.func.isRequired,
        onClickResult: p.a.func,
        pageLabels: p.a.arrayOf(p.a.any),
        activeDocumentViewerKey: p.a.number,
      };
      function P(e) {
        var t = e.height,
          n = e.searchStatus,
          r = e.searchResults,
          o = e.activeResultIndex,
          i = e.t,
          c = e.onClickResult,
          l = e.pageLabels,
          s = e.isProcessingSearchResults,
          u = e.isSearchInProgress,
          p = e.activeDocumentViewerKey,
          d = a.a.useMemo(function () {
            return new b.CellMeasurerCache({
              defaultHeight: 50,
              fixedWidth: !0,
            });
          }, []),
          h = a.a.useRef(null),
          f = S(a.a.useState(0), 2),
          v = f[0],
          g = f[1];
        0 === r.length && d.clearAll(),
          r.length && r.length !== v && (g(r.length), d.clearAll());
        var w = a.a.useCallback(
          function (e) {
            var t = e.index,
              n = e.key,
              s = e.parent,
              u = e.style,
              h = r[t];
            return a.a.createElement(
              y.a,
              { cache: d, columnIndex: 0, key: n, parent: s, rowIndex: t },
              function (e) {
                var n = e.registerChild;
                return a.a.createElement(
                  'div',
                  { role: 'row', ref: n, style: u },
                  a.a.createElement(R, {
                    currentResultIndex: t,
                    searchResults: r,
                    pageLabels: l,
                    t: i,
                  }),
                  a.a.createElement(j, {
                    result: h,
                    currentResultIndex: t,
                    activeResultIndex: o,
                    onSearchResultClick: c,
                    activeDocumentViewerKey: p,
                  })
                );
              }
            );
          },
          [d, r, o, i, l]
        );
        return (
          a.a.useEffect(
            function () {
              var e;
              h &&
                (null === (e = h.current) || void 0 === e || e.scrollToRow(o));
            },
            [o]
          ),
          null == t
            ? null
            : 'SEARCH_DONE' !== n || 0 !== r.length || s
              ? a.a.createElement(m.a, {
                  width: 200,
                  height: t,
                  tabIndex: -1,
                  overscanRowCount: 10,
                  rowCount: r.length,
                  deferredMeasurementCache: d,
                  rowHeight: d.rowHeight,
                  rowRenderer: w,
                  ref: h,
                  scrollToIndex: o - 1,
                })
              : u
                ? null
                : a.a.createElement(
                    'div',
                    { className: 'info' },
                    i('message.noResults')
                  )
        );
      }
      function C(e) {
        var t = e.measureRef,
          n = e.contentRect,
          r = x(e, g),
          o = n.bounds.height;
        return a.a.createElement(
          'div',
          { className: 'results', ref: t },
          a.a.createElement(P, w({ height: o }, r))
        );
      }
      (P.propTypes = k),
        (C.propTypes = {
          contentRect: p.a.object,
          measureRef: p.a.oneOfType([
            p.a.func,
            p.a.shape({ current: p.a.any }),
          ]),
        });
      var I = Object(h.b)('bounds')(C),
        _ =
          (n(546),
          n(127),
          n(84),
          n(51),
          n(67),
          n(68),
          n(69),
          n(70),
          n(41),
          n(44),
          n(46),
          n(66),
          n(1696)),
        N = n.n(_),
        T = n(143),
        D = n.n(T),
        L = n(33),
        V = n(313),
        H = n(300),
        W = n(23),
        M = n(108);
      n(1697);
      function G(e) {
        return (G =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function q() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ q =
          function () {
            return e;
          };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          o = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, '');
        } catch (e) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function s(e, t, n, a) {
          var o = t && t.prototype instanceof d ? t : d,
            i = Object.create(o.prototype),
            c = new R(a || []);
          return r(i, '_invoke', { value: x(e, n, c) }), i;
        }
        function u(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = s;
        var p = {};
        function d() {}
        function h() {}
        function f() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          y = b && b(b(A([])));
        y && y !== t && n.call(y, o) && (m = y);
        var v = (f.prototype = d.prototype = Object.create(m));
        function g(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          var a;
          r(this, '_invoke', {
            value: function (r, o) {
              function i() {
                return new t(function (a, i) {
                  !(function r(a, o, i, c) {
                    var l = u(e[a], e, o);
                    if ('throw' !== l.type) {
                      var s = l.arg,
                        p = s.value;
                      return p && 'object' == G(p) && n.call(p, '__await')
                        ? t.resolve(p.__await).then(
                            function (e) {
                              r('next', e, i, c);
                            },
                            function (e) {
                              r('throw', e, i, c);
                            }
                          )
                        : t.resolve(p).then(
                            function (e) {
                              (s.value = e), i(s);
                            },
                            function (e) {
                              return r('throw', e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(r, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function x(e, t, n) {
          var r = 'suspendedStart';
          return function (a, o) {
            if ('executing' === r)
              throw new Error('Generator is already running');
            if ('completed' === r) {
              if ('throw' === a) throw o;
              return j();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var c = S(i, n);
                if (c) {
                  if (c === p) continue;
                  return c;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              r = 'executing';
              var l = u(e, t, n);
              if ('normal' === l.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), l.arg === p)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              'throw' === l.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = l.arg));
            }
          };
        }
        function S(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                S(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              p
            );
          var a = u(r, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), p
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                p)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              p);
        }
        function O(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function E(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function R(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(O, this),
            this.reset(!0);
        }
        function A(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = f),
          r(v, 'constructor', { value: f, configurable: !0 }),
          r(f, 'constructor', { value: h, configurable: !0 }),
          (h.displayName = l(f, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), l(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(v)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          g(w.prototype),
          l(w.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new w(s(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          g(v),
          l(v, c, 'Generator'),
          l(v, o, function () {
            return this;
          }),
          l(v, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = A),
          (R.prototype = {
            constructor: R,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = 'next'), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ('root' === o.tryLoc) return r('end');
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, 'catchLoc'),
                    l = n.call(o, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), p)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === e.type && t && (this.next = t),
                p
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), E(n), p;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var a = r.arg;
                    E(n);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: A(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          e
        );
      }
      function z(e, t, n, r, a, o, i) {
        try {
          var c = e[o](i),
            l = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function K(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              z(o, r, a, i, c, 'next', e);
            }
            function c(e) {
              z(o, r, a, i, c, 'throw', e);
            }
            i(void 0);
          });
        };
      }
      function B(e, t) {
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
              var r,
                a,
                o,
                i,
                c = [],
                l = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return c;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return F(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return F(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function F(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var U = {
        isPanelOpen: p.a.bool,
        isSearchOverlayDisabled: p.a.bool,
        searchValue: p.a.string,
        searchStatus: p.a.oneOf([
          'SEARCH_NOT_INITIATED',
          'SEARCH_IN_PROGRESS',
          'SEARCH_DONE',
        ]),
        isCaseSensitive: p.a.bool,
        isWholeWord: p.a.bool,
        isWildcard: p.a.bool,
        searchResults: p.a.arrayOf(p.a.object),
        activeResultIndex: p.a.number,
        setSearchValue: p.a.func.isRequired,
        setCaseSensitive: p.a.func.isRequired,
        setSearchStatus: p.a.func.isRequired,
        setWholeWord: p.a.func.isRequired,
        setWildcard: p.a.func.isRequired,
        executeSearch: p.a.func.isRequired,
        selectNextResult: p.a.func,
        selectPreviousResult: p.a.func,
        isProcessingSearchResults: p.a.bool,
        activeDocumentViewerKey: p.a.number,
      };
      function $(e) {
        var t = Object(d.a)().t,
          n = e.isSearchOverlayDisabled,
          s = e.searchResults,
          u = e.activeResultIndex,
          p = e.selectNextResult,
          h = e.selectPreviousResult,
          f = e.isProcessingSearchResults,
          m = e.activeDocumentViewerKey,
          b = e.searchValue,
          y = e.setSearchValue,
          v = e.executeSearch,
          g = e.replaceValue,
          w = e.nextResultValue,
          x = e.setReplaceValue,
          S = e.isCaseSensitive,
          O = e.setCaseSensitive,
          E = e.isWholeWord,
          R = e.setWholeWord,
          A = e.isWildcard,
          j = e.setWildcard,
          k = e.setSearchStatus,
          P = e.isSearchInProgress,
          C = e.setIsSearchInProgress,
          I = e.searchStatus,
          _ = e.isPanelOpen,
          T = B(a.a.useState(!0), 2),
          G = T[0],
          z = T[1],
          F = B(a.a.useState(!0), 2),
          U = F[0],
          $ = F[1],
          Y = B(a.a.useState(!0), 2),
          J = Y[0],
          Q = Y[1],
          X = B(a.a.useState(!1), 2),
          Z = X[0],
          ee = X[1],
          te = B(a.a.useState(!0), 2),
          ne = te[0],
          re = te[1],
          ae = Object(o.e)(function (e) {
            return l.a.isElementDisabled(e, 'searchAndReplace');
          }),
          oe = Object(r.useRef)();
        Object(r.useEffect)(function () {
          try {
            new RegExp('(?<!</?[^>]*|&[^;]*)');
          } catch (e) {
            re(!1);
          }
        }, []),
          Object(r.useEffect)(
            function () {
              oe.current &&
                _ &&
                setTimeout(function () {
                  oe.current.focus();
                }, 300),
                ae &&
                  _ &&
                  console.warn(
                    'Search and Replace is not supported in this browser'
                  );
            },
            [_]
          ),
          Object(r.useEffect)(
            function () {
              b && b.length > 0
                ? v(b, { caseSensitive: S, wholeWord: E, wildcard: A })
                : ue();
            },
            [S, E, A, m]
          ),
          Object(r.useEffect)(function () {
            return (
              i.a.addEventListener('pagesUpdated', ie),
              function () {
                i.a.removeEventListener('pagesUpdated', ie);
              }
            );
          });
        var ie = function () {
            ce(b);
          },
          ce = (function () {
            var e = K(
              q().mark(function e(t) {
                return q().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!(t && t.length > 1)) {
                          e.next = 9;
                          break;
                        }
                        if ((C(!0), k('SEARCH_IN_PROGRESS'), !Object(M.a)())) {
                          e.next = 6;
                          break;
                        }
                        return (
                          (e.next = 6),
                          i.a.getDocument().getOfficeEditor().updateSearchData()
                        );
                      case 6:
                        v(t, { caseSensitive: S, wholeWord: E, wildcard: A }),
                          (e.next = 10);
                        break;
                      case 9:
                        t || ue();
                      case 10:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          le = Object(r.useCallback)(N()(ce, 300), [S, E, A]),
          se = Object(r.useCallback)(D()(ce, 300), [S, E, A]);
        Object(r.useEffect)(
          function () {
            var e,
              t = function () {
                b && b.length > 0 && se(b);
              };
            return (
              null === (e = i.a.getDocument()) ||
                void 0 === e ||
                e.addEventListener('officeDocumentEdited', t),
              function () {
                var e;
                null === (e = i.a.getDocument()) ||
                  void 0 === e ||
                  e.removeEventListener('officeDocumentEdited', t);
              }
            );
          },
          [b]
        );
        function ue() {
          i.a.clearSearchResults(),
            y(''),
            k('SEARCH_NOT_INITIATED'),
            x(''),
            z(!0),
            $(!0);
        }
        var pe = Object(r.useCallback)(function (e) {
            var t = e.target.checked;
            O(t);
          }, []),
          de = Object(r.useCallback)(function (e) {
            var t = e.target.checked;
            R(t);
          }, []),
          he = Object(r.useCallback)(function (e) {
            var t = e.target.checked;
            j(t);
          }, []),
          fe = Object(r.useCallback)(
            function () {
              p && p(s, u);
            },
            [p, s, u]
          ),
          me = Object(r.useCallback)(
            function () {
              h && h(s, u);
            },
            [h, s, u]
          ),
          be = Object(r.useCallback)(
            (function () {
              var e = K(
                q().mark(function e() {
                  return q().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!U || !w) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return');
                        case 2:
                          return (
                            ee(!0),
                            (e.next = 5),
                            Object(
                              W.c
                            )().instance.Core.ContentEdit.searchAndReplaceText({
                              documentViewer: Object(W.c)().instance.Core
                                .documentViewer,
                              searchResults: i.a.getPageSearchResults(),
                              replaceWith: g,
                            })
                          );
                        case 5:
                          ee(!1);
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            [g]
          ),
          ye = function () {
            window.localStorage.setItem('searchMoreOption', !J), Q(!J);
          },
          ve = Object(r.useCallback)(
            (function () {
              var e = K(
                q().mark(function e() {
                  return q().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!G || !w) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return');
                        case 2:
                          return (
                            ee(!0),
                            (e.next = 5),
                            Object(
                              W.c
                            )().instance.Core.ContentEdit.searchAndReplaceText({
                              documentViewer: Object(W.c)().instance.Core
                                .documentViewer,
                              replaceWith: g,
                              searchResults: [i.a.getActiveSearchResult()],
                            })
                          );
                        case 5:
                          ee(!1);
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            [g, w, G]
          ),
          ge = Object(o.d)();
        if (n) return null;
        var we = s ? s.length : 0,
          xe =
            P || 'SEARCH_DONE' !== I || f
              ? a.a.createElement(H.a, null)
              : a.a.createElement(
                  'div',
                  null,
                  we,
                  ' ',
                  t('message.numResultsFound')
                ),
          Se = a.a.createElement(
            'div',
            { className: 'options' },
            a.a.createElement(V.a, {
              dataElement: 'caseSensitiveSearchOption',
              id: 'case-sensitive-option',
              checked: S,
              onChange: pe,
              label: t('option.searchPanel.caseSensitive'),
              tabIndex: _ ? 0 : -1,
            }),
            a.a.createElement(V.a, {
              dataElement: 'wholeWordSearchOption',
              id: 'whole-word-option',
              checked: E,
              onChange: de,
              label: t('option.searchPanel.wholeWordOnly'),
              tabIndex: _ ? 0 : -1,
            }),
            a.a.createElement(V.a, {
              dataElement: 'wildCardSearchOption',
              id: 'wild-card-option',
              checked: A,
              onChange: he,
              label: t('option.searchPanel.wildcard'),
              tabIndex: _ ? 0 : -1,
            })
          );
        return a.a.createElement(
          'div',
          { className: 'SearchOverlay' },
          a.a.createElement(
            'div',
            { className: 'input-container' },
            a.a.createElement('input', {
              ref: oe,
              type: 'text',
              autoComplete: 'off',
              onChange: function (e) {
                y(e.target.value),
                  le(e.target.value),
                  e.target.value && g && (z(!1), $(!1));
              },
              value: b,
              placeholder: t('message.searchDocumentPlaceholder'),
              'aria-label': t('message.searchDocumentPlaceholder'),
              id: 'SearchPanel__input',
              tabIndex: _ ? 0 : -1,
            }),
            void 0 !== b &&
              b.length > 0 &&
              a.a.createElement(
                'button',
                {
                  className: 'clearSearch-button',
                  onClick: ue,
                  'aria-label': t('message.searchDocumentPlaceholder'),
                },
                a.a.createElement(L.a, { glyph: 'icon-close' })
              )
          ),
          ae || !ne
            ? null
            : J
              ? a.a.createElement(
                  'div',
                  { className: 'extra-options' },
                  a.a.createElement(
                    'button',
                    { className: 'Button', onClick: ye },
                    t('option.searchPanel.lessOptions'),
                    ' ',
                    a.a.createElement(L.a, { glyph: 'icon-chevron-up' })
                  )
                )
              : a.a.createElement(
                  'div',
                  { className: 'extra-options' },
                  a.a.createElement(
                    'button',
                    { className: 'Button', onClick: ye },
                    t('option.searchPanel.moreOptions'),
                    ' ',
                    a.a.createElement(L.a, { glyph: 'icon-chevron-down' })
                  )
                ),
          J
            ? a.a.createElement(
                'div',
                null,
                Se,
                ae || !ne
                  ? null
                  : a.a.createElement(
                      'div',
                      {
                        'data-element': 'searchAndReplace',
                        className: 'replace-options',
                      },
                      a.a.createElement(
                        'p',
                        null,
                        t('option.searchPanel.replace')
                      ),
                      a.a.createElement(
                        'div',
                        { className: 'input-container' },
                        a.a.createElement('input', {
                          type: 'text',
                          onChange: function (e) {
                            x(e.target.value),
                              e.target.value && b && (z(!1), $(!1));
                          },
                          value: g,
                        })
                      ),
                      a.a.createElement(
                        'div',
                        { className: 'replace-buttons' },
                        Z
                          ? a.a.createElement(H.a, { width: 25, height: 25 })
                          : null,
                        a.a.createElement(
                          'button',
                          {
                            className: 'Button btn-replace-all',
                            disabled: U,
                            onClick: function () {
                              var e = t('option.searchPanel.replaceText'),
                                n = {
                                  message: t(
                                    'option.searchPanel.confirmMessageReplaceAll'
                                  ),
                                  title: e,
                                  confirmBtnText: t(
                                    'option.searchPanel.confirm'
                                  ),
                                  onConfirm: function () {
                                    be();
                                  },
                                };
                              ge(c.a.showWarningMessage(n));
                            },
                          },
                          t('option.searchPanel.replaceAll')
                        ),
                        a.a.createElement(
                          'button',
                          {
                            className: 'Button btn-replace',
                            disabled: G || !w || !i.a.getActiveSearchResult(),
                            onClick: function () {
                              var e = t('option.searchPanel.replaceText'),
                                n = {
                                  message: t(
                                    'option.searchPanel.confirmMessageReplaceOne'
                                  ),
                                  title: e,
                                  confirmBtnText: t(
                                    'option.searchPanel.confirm'
                                  ),
                                  onConfirm: function () {
                                    ve();
                                  },
                                };
                              ge(c.a.showWarningMessage(n));
                            },
                          },
                          t('option.searchPanel.replace')
                        )
                      )
                    )
              )
            : Se,
          a.a.createElement('div', { className: 'divider' }),
          a.a.createElement(
            'div',
            { className: 'footer' },
            'SEARCH_NOT_INITIATED' === I ? null : xe,
            we > 0 &&
              a.a.createElement(
                'div',
                { className: 'buttons' },
                a.a.createElement(
                  'button',
                  {
                    className: 'button',
                    onClick: me,
                    'aria-label': t('action.prevResult'),
                  },
                  a.a.createElement(L.a, {
                    className: 'arrow',
                    glyph: 'icon-chevron-left',
                  })
                ),
                a.a.createElement(
                  'button',
                  {
                    className: 'button',
                    onClick: fe,
                    'aria-label': t('action.nextResult'),
                  },
                  a.a.createElement(L.a, {
                    className: 'arrow',
                    glyph: 'icon-chevron-right',
                  })
                )
              )
          )
        );
      }
      $.propTypes = U;
      var Y = $,
        J = n(168),
        Q = n(343);
      function X(e) {
        return (X =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function Z() {
        return (Z = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function ee(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function te(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== X(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || 'default');
                if ('object' !== X(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === X(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ne(e, t, n) {
        var r = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? ee(Object(n), !0).forEach(function (t) {
                  te(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : ee(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
          }
          return e;
        })({ regex: !1 }, t);
        if (null != e) {
          var a = Object(J.b)();
          if (a) a(e, r);
          else Object(Q.a)(n)(e, r);
        }
      }
      function re() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 ? arguments[2] : void 0;
        if (e.length > 0) {
          var r = t === e.length - 1 ? 0 : t + 1;
          if ((i.a.setActiveSearchResult(e[r]), n)) {
            var a = r > 0 ? r - 1 : 0;
            n(c.a.setNextResultValue(e[r], a));
          }
        }
      }
      function ae() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 ? arguments[2] : void 0;
        if (e.length > 0) {
          var r = t <= 0 ? e.length - 1 : t - 1;
          i.a.setActiveSearchResult(e[r]), n && n(c.a.setNextResultValue(e[r]));
        }
      }
      var oe = function (e) {
          var t = Object(o.d)(),
            n = Object(o.f)();
          return a.a.createElement(
            Y,
            Z(
              {
                executeSearch: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  ne(e, t, n);
                },
                selectNextResult: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    n = arguments.length > 1 ? arguments[1] : void 0;
                  re(e, n, t);
                },
                selectPreviousResult: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    n = arguments.length > 1 ? arguments[1] : void 0;
                  ae(e, n, t);
                },
              },
              e
            )
          );
        },
        ie = n(5),
        ce = {
          closeElements: c.a.closeElements,
          setSearchValue: c.a.setSearchValue,
          setReplaceValue: c.a.setReplaceValue,
          setCaseSensitive: c.a.setCaseSensitive,
          setWholeWord: c.a.setWholeWord,
          setWildcard: c.a.setWildcard,
        };
      var le = Object(o.b)(function (e) {
          return {
            isSearchOverlayDisabled: l.a.isElementDisabled(
              e,
              ie.a.SEARCH_OVERLAY
            ),
            searchValue: l.a.getSearchValue(e),
            replaceValue: l.a.getReplaceValue(e),
            nextResultValue: l.a.getNextResultValue(e),
            isCaseSensitive: l.a.isCaseSensitive(e),
            isWholeWord: l.a.isWholeWord(e),
            isWildcard: l.a.isWildcard(e),
            isProcessingSearchResults: l.a.isProcessingSearchResults(e),
          };
        }, ce)(function (e) {
          return a.a.createElement(oe, e);
        }),
        se = n(1381),
        ue = n(57);
      n(1699), n(154);
      function pe(e, t) {
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
              var r,
                a,
                o,
                i,
                c = [],
                l = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return c;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return de(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return de(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function de(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var he = function (e) {
        var t = pe(a.a.useState([]), 2),
          n = t[0],
          r = t[1],
          l = pe(a.a.useState(), 2),
          s = l[0],
          u = l[1],
          p = pe(a.a.useState(0), 2),
          d = p[0],
          h = p[1],
          f = pe(a.a.useState('SEARCH_NOT_INITIATED'), 2),
          m = f[0],
          b = f[1],
          y = Object(o.d)(),
          v = i.a.getDocumentViewers().length;
        return (
          a.a.useEffect(function () {
            var t = i.a.getDocumentViewer(e).getPageSearchResults() || [];
            if (t.length > 0) {
              var n = i.a.getActiveSearchResult();
              if (n) {
                var a = t.findIndex(function (e) {
                  return i.a.isSearchResultEqual(e, n);
                });
                r(t), a >= 0 && (u(t[a]), h(a));
              } else r(t), u(t[0]), h(0);
            }
          }, []),
          a.a.useEffect(
            function () {
              var t = i.a.getDocumentViewer(e);
              function n(e) {
                var n = (t.getPageSearchResults() || []).findIndex(
                  function (t) {
                    return i.a.isSearchResultEqual(t, e);
                  }
                );
                n >= 0 && (u(e), h(n));
              }
              function a() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
                r(e), e && 0 === e.length && (u(void 0), h(-1));
              }
              function o(e) {
                if (null == e) b('SEARCH_NOT_INITIATED');
                else if (e) b('SEARCH_IN_PROGRESS');
                else {
                  var n = t.getActiveSearchResult();
                  if (n) {
                    u(n);
                    var r = (t.getPageSearchResults() || []).findIndex(
                      function (e) {
                        return i.a.isSearchResultEqual(e, n);
                      }
                    );
                    h(r), y(c.a.setNextResultValue(n));
                  }
                  b('SEARCH_DONE');
                }
              }
              var l = i.a.getDocumentViewers();
              return (
                l.forEach(function (e) {
                  e.addEventListener('activeSearchResultChanged', n),
                    e.addEventListener('searchResultsChanged', a),
                    e.addEventListener('searchInProgress', o);
                }),
                function () {
                  l.forEach(function (e) {
                    e.removeEventListener('activeSearchResultChanged', n),
                      e.removeEventListener('searchResultsChanged', a),
                      e.removeEventListener('searchInProgress', o);
                  });
                }
              );
            },
            [u, h, b, y, v, e]
          ),
          {
            searchStatus: m,
            searchResults: n,
            activeSearchResult: s,
            activeSearchResultIndex: d,
            setSearchStatus: b,
          }
        );
      };
      function fe(e, t) {
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
              var r,
                a,
                o,
                i,
                c = [],
                l = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return c;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return me(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return me(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function me(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var be = {
        isOpen: p.a.bool,
        isMobile: p.a.bool,
        pageLabels: p.a.array,
        currentWidth: p.a.number,
        closeSearchPanel: p.a.func,
        setActiveResult: p.a.func,
        isInDesktopOnlyMode: p.a.bool,
        isProcessingSearchResults: p.a.bool,
        activeDocumentViewerKey: p.a.number,
      };
      function ye() {}
      function ve(e) {
        var t = e.isOpen,
          n = e.currentWidth,
          r = e.pageLabels,
          o = e.closeSearchPanel,
          i = void 0 === o ? ye : o,
          c = e.setActiveResult,
          l = void 0 === c ? ye : c,
          s = e.setNextResultValue,
          u = void 0 === s ? ye : s,
          p = e.isMobile,
          h = void 0 !== p && p,
          f = e.isInDesktopOnlyMode,
          m = e.isProcessingSearchResults,
          b = e.activeDocumentViewerKey,
          y = Object(d.a)().t,
          v = he(b),
          g = v.searchStatus,
          w = v.searchResults,
          x = v.activeSearchResultIndex,
          S = v.setSearchStatus,
          O = a.a.useCallback(
            function () {
              i && i();
            },
            [i]
          ),
          E = a.a.useCallback(
            function (e, t, n) {
              l(t, n), !f && h && i(), u(t);
            },
            [i, h]
          ),
          R = fe(a.a.useState(!1), 2),
          A = R[0],
          j = R[1],
          k = function () {
            j(!1);
          };
        a.a.useEffect(function () {
          Object(J.a)(k);
        }, []),
          a.a.useEffect(function () {
            return function () {
              Object(J.e)(k);
            };
          }, []);
        var P = Object(se.a)('Panel SearchPanel', { isOpen: t }),
          C =
            !f && h
              ? {}
              : { width: ''.concat(n, 'px'), minWidth: ''.concat(n, 'px') };
        return a.a.createElement(
          ue.a,
          { className: P, dataElement: 'searchPanel', style: C },
          !f &&
            h &&
            a.a.createElement(
              'div',
              { className: 'close-container' },
              a.a.createElement(
                'button',
                { className: 'close-icon-container', onClick: O },
                a.a.createElement(L.a, {
                  glyph: 'ic_close_black_24px',
                  className: 'close-icon',
                })
              )
            ),
          a.a.createElement(le, {
            searchStatus: g,
            setSearchStatus: S,
            searchResults: w,
            activeResultIndex: x,
            isPanelOpen: t,
            isSearchInProgress: A,
            setIsSearchInProgress: j,
            activeDocumentViewerKey: b,
          }),
          a.a.createElement(I, {
            t: y,
            searchStatus: g,
            searchResults: w,
            activeResultIndex: x,
            onClickResult: E,
            pageLabels: r,
            isProcessingSearchResults: m,
            isSearchInProgress: A,
            activeDocumentViewerKey: b,
          })
        );
      }
      ve.propTypes = be;
      var ge = ve;
      function we(e) {
        return (we =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function xe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? xe(Object(n), !0).forEach(function (t) {
                Oe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : xe(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function Oe(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== we(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || 'default');
                if ('object' !== we(r)) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === we(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Ee(e, t) {
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
              var r,
                a,
                o,
                i,
                c = [],
                l = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return c;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return Re(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Re(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Re(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Ae = function (e) {
        var t = Object(s.b)(),
          n = Ee(
            Object(o.e)(function (e) {
              return [
                l.a.isElementOpen(e, ie.a.SEARCH_PANEL),
                l.a.getSearchPanelWidth(e),
                l.a.getPageLabels(e),
                l.a.shouldClearSearchPanelOnClose(e),
                l.a.isInDesktopOnlyMode(e),
                l.a.isProcessingSearchResults(e),
                l.a.getActiveDocumentViewerKey(e),
              ];
            }, o.c),
            7
          ),
          r = n[0],
          u = n[1],
          p = n[2],
          d = n[3],
          h = n[4],
          f = n[5],
          m = n[6],
          b = Object(o.d)(),
          y = a.a.useCallback(
            function () {
              b(c.a.closeElements([ie.a.SEARCH_PANEL]));
            },
            [b]
          ),
          v = a.a.useCallback(
            function () {
              b(c.a.setSearchValue(''));
            },
            [b]
          ),
          g = a.a.useCallback(
            function (e) {
              b(c.a.setNextResultValue(e));
            },
            [b]
          ),
          w = a.a.useCallback(function (e, t) {
            if (t) return i.a.getDocumentViewer(t).setActiveSearchResult(e);
          }, []);
        a.a.useEffect(
          function () {
            (!h && t) || (!r && d && (i.a.clearSearchResults(), v()));
          },
          [t, r, d, h]
        );
        var x = Se(
          Se({}, e),
          {},
          {
            isOpen: r,
            currentWidth: u,
            pageLabels: p,
            closeSearchPanel: y,
            setActiveResult: w,
            setNextResultValue: g,
            isMobile: t,
            isInDesktopOnlyMode: h,
            isProcessingSearchResults: f,
            activeDocumentViewerKey: m,
          }
        );
        return a.a.createElement(ge, x);
      };
      t.default = Ae;
    },
  },
]);
//# sourceMappingURL=21.chunk.js.map
