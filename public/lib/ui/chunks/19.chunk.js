(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    1588: function (t, e, o) {
      var n = o(27),
        i = o(1589);
      'string' == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[t.i, i, '']]);
      var a = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const o = [];
            for (let n = 0; n < e.length; n++) {
              const i = e[n];
              if (0 === n)
                i.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    o.length > 0 &&
                      o.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                i.shadowRoot.appendChild(e), o.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      n(i, a);
      t.exports = i.locals || {};
    },
    1589: function (t, e, o) {
      (t.exports = o(28)(!1)).push([
        t.i,
        '.language-dropdown .Dropdown__items{left:0;width:336px}.theme-options{width:336px;height:160px;display:flex;justify-content:space-between}.theme-options .theme-option{width:160px;height:160px;display:flex;flex-direction:column}.theme-options .theme-option .Icon{width:160px;height:120px}.theme-options .theme-option .Icon.light-mode-icon{color:#fff}.theme-options .theme-option .Icon.dark-mode-icon{color:#000}.theme-options .theme-option .Icon svg{border:1px solid;border-color:var(--border);border-top-left-radius:4px;border-top-right-radius:4px}.theme-options .theme-option .theme-choice{height:100%;border:1px solid;border-color:var(--border);border-top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px;display:flex;padding-left:12px}.theme-options .theme-option.active-theme .Icon svg,.theme-options .theme-option.active-theme .theme-choice{border-color:var(--focus-border)}',
        '',
      ]);
    },
    1590: function (t, e, o) {
      var n = o(27),
        i = o(1591);
      'string' == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[t.i, i, '']]);
      var a = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const o = [];
            for (let n = 0; n < e.length; n++) {
              const i = e[n];
              if (0 === n)
                i.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    o.length > 0 &&
                      o.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                i.shadowRoot.appendChild(e), o.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      n(i, a);
      t.exports = i.locals || {};
    },
    1591: function (t, e, o) {
      (e = t.exports = o(28)(!1)).push([
        t.i,
        '.open.EditKeyboardShortcutModal.Modal{visibility:visible}.closed.EditKeyboardShortcutModal.Modal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.EditKeyboardShortcutModal.Modal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.EditKeyboardShortcutModal.Modal .modal-container .wrapper .modal-content{padding:10px}.EditKeyboardShortcutModal.Modal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.EditKeyboardShortcutModal.Modal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.EditKeyboardShortcutModal.Modal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.EditKeyboardShortcutModal.Modal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.EditKeyboardShortcutModal.Modal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.EditKeyboardShortcutModal.Modal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.EditKeyboardShortcutModal.Modal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.EditKeyboardShortcutModal.Modal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.EditKeyboardShortcutModal.Modal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.EditKeyboardShortcutModal.Modal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .EditKeyboardShortcutModal.Modal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .EditKeyboardShortcutModal.Modal .footer .modal-button{padding:23px 8px}}.EditKeyboardShortcutModal.Modal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .EditKeyboardShortcutModal.Modal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .EditKeyboardShortcutModal.Modal .swipe-indicator{display:none}}.EditKeyboardShortcutModal.Modal .container{border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .EditKeyboardShortcutModal.Modal .container,.EditKeyboardShortcutModal.Modal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .EditKeyboardShortcutModal.Modal .container,.EditKeyboardShortcutModal.Modal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .EditKeyboardShortcutModal.Modal .container,.EditKeyboardShortcutModal.Modal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .EditKeyboardShortcutModal.Modal .container,.EditKeyboardShortcutModal.Modal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.EditKeyboardShortcutModal.Modal .container{display:flex;flex-direction:column;width:480px;height:320px}.EditKeyboardShortcutModal.Modal .container .header{display:flex;flex-direction:row;justify-content:space-between;padding:16px;font-size:16px;font-weight:700;align-items:center}.EditKeyboardShortcutModal.Modal .container .body{height:100%;display:flex;flex-direction:column;padding:16px;position:relative}.EditKeyboardShortcutModal.Modal .container .body .press-key-note{font-weight:700}.EditKeyboardShortcutModal.Modal .container .body .keyboard-shortcut{margin-top:16px;height:100%;color:#868e96;display:flex;align-items:center;justify-content:center}.EditKeyboardShortcutModal.Modal .container .body .keyboard-shortcut span:not(:last-child){margin-right:8px}.EditKeyboardShortcutModal.Modal .container .body .conflict-warning{position:absolute;bottom:50px;font-size:10px;color:#cf0101;width:calc(100% - 32px);display:flex;justify-content:center}.EditKeyboardShortcutModal.Modal .container .divider{height:1px;width:100%;background:var(--divider)}.EditKeyboardShortcutModal.Modal .container .footer{padding:16px;margin-top:0}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1592: function (t, e, o) {
      var n = o(27),
        i = o(1593);
      'string' == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[t.i, i, '']]);
      var a = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const o = [];
            for (let n = 0; n < e.length; n++) {
              const i = e[n];
              if (0 === n)
                i.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    o.length > 0 &&
                      o.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                i.shadowRoot.appendChild(e), o.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      n(i, a);
      t.exports = i.locals || {};
    },
    1593: function (t, e, o) {
      (e = t.exports = o(28)(!1)).push([
        t.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.shortcut-table-header{border:1px solid var(--border);border-bottom:0;padding:12px 16px;display:flex;font-weight:700;position:relative}.shortcut-table-header .shortcut-table-header-command{width:220px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .shortcut-table-header .shortcut-table-header-command{width:180px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .shortcut-table-header .shortcut-table-header-command{width:180px}}.shortcut-table-header .shortcut-table-header-action{position:absolute;right:16px}.shortcut-table-content{border:1px solid var(--border);padding:0 16px;display:flex;flex-direction:column}.shortcut-table-content .shortcut-table-item{display:flex;align-items:center;height:40px;position:relative}.shortcut-table-content .shortcut-table-item .shortcut-table-item-command{color:#868e96;width:220px}.shortcut-table-content .shortcut-table-item .shortcut-table-item-command span:not(:last-child){margin-right:8px}.shortcut-table-content .shortcut-table-item .shortcut-table-item-description{width:380px}.shortcut-table-content .shortcut-table-item button{position:absolute;right:0;height:20px;width:20px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .shortcut-table-content .shortcut-table-item .shortcut-table-item-command{width:180px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .shortcut-table-content .shortcut-table-item .shortcut-table-item-description{width:340px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .shortcut-table-content .shortcut-table-item .shortcut-table-item-command{width:180px}.App.is-web-component:not(.is-in-desktop-only-mode) .shortcut-table-content .shortcut-table-item .shortcut-table-item-description{width:340px}}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1597: function (t, e, o) {
      var n = o(27),
        i = o(1598);
      'string' == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[t.i, i, '']]);
      var a = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const o = [];
            for (let n = 0; n < e.length; n++) {
              const i = e[n];
              if (0 === n)
                i.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    o.length > 0 &&
                      o.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                i.shadowRoot.appendChild(e), o.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      n(i, a);
      t.exports = i.locals || {};
    },
    1598: function (t, e, o) {
      (t.exports = o(28)(!1)).push([
        t.i,
        '.setting-item{border:1px solid var(--border);padding:16px;display:flex;align-items:flex-start;justify-content:space-between}.setting-item:not(:last-child){border-bottom:0}.setting-item .setting-item-info{display:flex;flex-direction:column;margin-right:18px}.setting-item .setting-item-info .setting-item-label{font-weight:700;margin-bottom:10px}',
        '',
      ]);
    },
    1599: function (t, e, o) {
      var n = o(27),
        i = o(1600);
      'string' == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[t.i, i, '']]);
      var a = {
        insert: function (t) {
          const e = document.getElementsByTagName('apryse-webviewer');
          if (e.length > 0) {
            const o = [];
            for (let n = 0; n < e.length; n++) {
              const i = e[n];
              if (0 === n)
                i.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    o.length > 0 &&
                      o.forEach((e) => {
                        e.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const e = t.cloneNode(!0);
                i.shadowRoot.appendChild(e), o.push(e);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      n(i, a);
      t.exports = i.locals || {};
    },
    1600: function (t, e, o) {
      (e = t.exports = o(28)(!1)).push([
        t.i,
        '.open.SettingsModal{visibility:visible}.closed.SettingsModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.SettingsModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.SettingsModal .modal-container .wrapper .modal-content{padding:10px}.SettingsModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.SettingsModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.SettingsModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.SettingsModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.SettingsModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.SettingsModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.SettingsModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.SettingsModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.SettingsModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.SettingsModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .footer .modal-button{padding:23px 8px}}.SettingsModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .swipe-indicator{display:none}}.SettingsModal .container{border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .SettingsModal .container,.SettingsModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .SettingsModal .container,.SettingsModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container,.SettingsModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container,.SettingsModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.SettingsModal .container{display:flex;flex-direction:column;width:888px;height:445px}.SettingsModal .container .header{display:flex;flex-direction:column;padding:16px;font-size:16px;font-weight:700;align-items:center}.SettingsModal .container .header .title{display:flex;justify-content:space-between;align-items:center;width:100%;height:32px;margin-bottom:8px}.SettingsModal .container .header input{width:100%;height:32px;padding:8px}.SettingsModal .container .body{height:100%;display:flex;flex-direction:row;overflow-y:hidden}.SettingsModal .container .body .settings-tabs-container{width:168px;background-color:var(--panel-background);flex-shrink:0}.SettingsModal .container .body .settings-tabs-container .settings-tabs .settings-tab{height:32px;margin-top:4px;display:flex;align-items:center;padding:8px;color:var(--gray-8);cursor:pointer}.SettingsModal .container .body .settings-tabs-container .settings-tabs .settings-tab:hover{background-color:var(--blue-1)}.SettingsModal .container .body .settings-tabs-container .settings-tabs .settings-tab.selected{background-color:var(--blue-2)!important;border-right:2px solid var(--blue-5);color:var(--blue-6);cursor:default}.SettingsModal .container .body .settings-content{padding:16px;overflow-y:scroll;width:100%}.SettingsModal .container .body .settings-content .setting-section{margin-bottom:16px}.SettingsModal .container .body .settings-content .setting-section .setting-label{font-weight:700;margin-bottom:8px}.SettingsModal .container .divider{height:1px;width:100%;background:var(--divider)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container{height:100%}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container .body{flex-direction:column}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container .body .settings-tabs-container{width:100%;position:fixed}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container .body .settings-tabs-container .settings-tabs{display:flex}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container .body .settings-tabs-container .settings-tabs .settings-tab{flex:1;height:32px;margin-top:0;justify-content:center;white-space:nowrap;min-width:0}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container .body .settings-tabs-container .settings-tabs .settings-tab.selected{border-right:0;border-bottom:2px solid var(--blue-5)}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container .body .settings-content{margin-top:32px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SettingsModal .container .body .settings-content.KeyboardShortcutTab{overflow-x:scroll;width:640px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container{height:100%}.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container .body{flex-direction:column}.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container .body .settings-tabs-container{width:100%;position:fixed}.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container .body .settings-tabs-container .settings-tabs{display:flex}.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container .body .settings-tabs-container .settings-tabs .settings-tab{flex:1;height:32px;margin-top:0;justify-content:center;white-space:nowrap;min-width:0}.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container .body .settings-tabs-container .settings-tabs .settings-tab.selected{border-right:0;border-bottom:2px solid var(--blue-5)}.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container .body .settings-content{margin-top:32px}.App.is-web-component:not(.is-in-desktop-only-mode) .SettingsModal .container .body .settings-content.KeyboardShortcutTab{overflow-x:scroll;width:640px}}',
        '',
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1722: function (t, e, o) {
      'use strict';
      o.r(e);
      o(39),
        o(18),
        o(11),
        o(13),
        o(7),
        o(12),
        o(8),
        o(9),
        o(10),
        o(15),
        o(14),
        o(20),
        o(17);
      var n = o(0),
        i = o.n(n),
        a = o(6),
        r = o(362),
        s = o(3),
        l = o(19),
        d = o.n(l),
        c = o(2),
        p = o(5),
        m = o(21),
        u = o(57),
        h = o(1371),
        b = o(182),
        g = o(35),
        f = o(344),
        y = o(205),
        x = o(240),
        w = o(148),
        E = o(33),
        S = o(162),
        v = (o(146), o(117), o(52), o(64), Object(n.createContext)()),
        T = function (t) {
          var e = t.children,
            o = t.keywords,
            a = void 0 === o ? [] : o,
            r = Object(n.useContext)(v).trim();
          return !r ||
            a.some(function (t) {
              return t.toLowerCase().includes(r.toLowerCase());
            })
            ? i.a.createElement(i.a.Fragment, null, e)
            : null;
        };
      o(1588);
      function M(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var o =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != o) {
              var n,
                i,
                a,
                r,
                s = [],
                l = !0,
                d = !1;
              try {
                if (((a = (o = o.call(t)).next), 0 === e)) {
                  if (Object(o) !== o) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = a.call(o)).done) &&
                    (s.push(n.value), s.length !== e);
                    l = !0
                  );
              } catch (t) {
                (d = !0), (i = t);
              } finally {
                try {
                  if (
                    !l &&
                    null != o.return &&
                    ((r = o.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (d) throw i;
                }
              }
              return s;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return A(t, e);
            var o = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === o && t.constructor && (o = t.constructor.name);
            if ('Map' === o || 'Set' === o) return Array.from(t);
            if (
              'Arguments' === o ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
            )
              return A(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function A(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
        return n;
      }
      var N = function () {
          var t = M(
              Object(a.e)(function (t) {
                return [s.a.getCurrentLanguage(t), s.a.getActiveTheme(t)];
              }),
              2
            ),
            e = t[0],
            o = t[1],
            n = M(Object(r.a)(), 1)[0],
            l = Object(a.d)(),
            d = Object(a.f)(),
            m = o === y.a.LIGHT,
            h = function (t) {
              l(c.a.setActiveTheme(t));
            };
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              T,
              { keywords: [n('option.settings.language')] },
              i.a.createElement(
                u.a,
                {
                  className: 'setting-section',
                  dataElement: p.a.SETTINGS_LANGUAGE_SECTION,
                },
                i.a.createElement(
                  'div',
                  { className: 'setting-label' },
                  n('option.settings.language')
                ),
                i.a.createElement(w.a, {
                  dataElement: p.a.SETTINGS_LANGUAGE_DROPDOWN,
                  items: f.a,
                  currentSelectionKey: e,
                  getKey: function (t) {
                    return t[0];
                  },
                  getDisplayValue: function (t) {
                    return t[1];
                  },
                  onClickItem: function (t) {
                    t !== e && Object(x.a)(d)(t);
                  },
                  maxHeight: 200,
                  width: 336,
                  getCustomItemStyle: function () {
                    return { textAlign: 'left', width: '326px' };
                  },
                  className: 'language-dropdown',
                })
              )
            ),
            i.a.createElement(
              T,
              {
                keywords: [
                  n('option.settings.theme'),
                  n('option.settings.lightMode'),
                  n('option.settings.darkMode'),
                ],
              },
              !g.f &&
                i.a.createElement(
                  u.a,
                  {
                    className: 'setting-section',
                    dataElement: p.a.SETTINGS_THEME_SECTION,
                  },
                  i.a.createElement(
                    'div',
                    { className: 'setting-label' },
                    n('option.settings.theme')
                  ),
                  i.a.createElement(
                    'div',
                    { className: 'theme-options' },
                    i.a.createElement(
                      'div',
                      {
                        className: 'theme-option '.concat(
                          m ? 'active-theme' : ''
                        ),
                      },
                      i.a.createElement(E.a, {
                        glyph: 'icon-light-mode-option',
                        className: 'light-mode-icon',
                      }),
                      i.a.createElement(
                        'div',
                        { className: 'theme-choice' },
                        i.a.createElement(S.a, {
                          radio: !0,
                          checked: m,
                          onChange: function () {
                            return h(y.a.LIGHT);
                          },
                          label: n('option.settings.lightMode'),
                          name: 'theme_choice',
                        })
                      )
                    ),
                    i.a.createElement(
                      'div',
                      {
                        className: 'theme-option '.concat(
                          m ? '' : 'active-theme'
                        ),
                      },
                      i.a.createElement(E.a, {
                        glyph: 'icon-dark-mode-option',
                        className: 'dark-mode-icon',
                      }),
                      i.a.createElement(
                        'div',
                        { className: 'theme-choice' },
                        i.a.createElement(S.a, {
                          radio: !0,
                          checked: !m,
                          onChange: function () {
                            return h(y.a.DARK);
                          },
                          label: n('option.settings.darkMode'),
                          name: 'theme_choice',
                        })
                      )
                    )
                  )
                )
            )
          );
        },
        k = (o(431), o(50)),
        C = (o(98), o(171));
      o(1590);
      function O(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var o =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != o) {
              var n,
                i,
                a,
                r,
                s = [],
                l = !0,
                d = !1;
              try {
                if (((a = (o = o.call(t)).next), 0 === e)) {
                  if (Object(o) !== o) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = a.call(o)).done) &&
                    (s.push(n.value), s.length !== e);
                    l = !0
                  );
              } catch (t) {
                (d = !0), (i = t);
              } finally {
                try {
                  if (
                    !l &&
                    null != o.return &&
                    ((r = o.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (d) throw i;
                }
              }
              return s;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return _(t, e);
            var o = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === o && t.constructor && (o = t.constructor.name);
            if ('Map' === o || 'Set' === o) return Array.from(t);
            if (
              'Arguments' === o ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
            )
              return _(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
        return n;
      }
      var I = function (t) {
        var e = t.currentShortcut,
          o = t.finishEditing,
          l = t.getCommandStrings,
          d = O(Object(r.a)(), 1)[0],
          c = Object(a.e)(s.a.getShortcutKeyMap),
          p = O(Object(n.useState)(''), 2),
          u = p[0],
          h = p[1];
        Object(n.useEffect)(
          function () {
            h(c[e]);
          },
          [e, c]
        ),
          Object(n.useEffect)(function () {
            var t = function (t) {
              t.preventDefault();
              var e = C.a.getPressedKeyCodes(),
                o = C.a.getPressedKeyString(),
                n = e.map(function (t, e) {
                  switch (t) {
                    case 16:
                      return 'shift';
                    case 17:
                      return 'ctrl';
                    case 18:
                      return 'alt';
                    case 91:
                      return 'command';
                    default:
                      return o[e];
                  }
                });
              h(n.join('+').toLowerCase());
            };
            return (
              Object(C.a)('*', 'editShortcut', t),
              C.a.setScope('editShortcut'),
              function () {
                C.a.unbind('*', 'editShortcut', t), C.a.setScope(k.e);
              }
            );
          }, []);
        var b = k.d.hasConflict(e, u);
        return i.a.createElement(
          'div',
          { className: 'Modal EditKeyboardShortcutModal open' },
          i.a.createElement(
            'div',
            {
              className: 'container',
              onClick: function (t) {
                return t.stopPropagation();
              },
            },
            i.a.createElement(
              'div',
              { className: 'header' },
              i.a.createElement(
                'div',
                null,
                d('option.settings.editKeyboardShorcut')
              ),
              i.a.createElement(m.a, {
                img: 'icon-close',
                onClick: o,
                title: 'action.close',
              })
            ),
            i.a.createElement('div', { className: 'divider' }),
            i.a.createElement(
              'div',
              { className: 'body' },
              i.a.createElement(
                'div',
                { className: 'press-key-note' },
                d('option.settings.pressKeyToSet')
              ),
              i.a.createElement(
                'div',
                { className: 'keyboard-shortcut' },
                l(u).map(function (t, e) {
                  return i.a.createElement('span', { key: e }, t);
                })
              ),
              b &&
                i.a.createElement(
                  'div',
                  { className: 'conflict-warning' },
                  d('option.settings.shortcutAlreadyExists')
                )
            ),
            i.a.createElement('div', { className: 'divider' }),
            i.a.createElement(
              'div',
              { className: 'footer' },
              i.a.createElement(m.a, {
                className: 'modal-button confirm',
                label: d('option.settings.setShorcut'),
                disabled: b,
                onClick: function () {
                  C.a.setScope(k.e), k.d.setShortcutKey(e, u), o();
                },
              })
            )
          )
        );
      };
      o(1592);
      function D(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var o =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != o) {
              var n,
                i,
                a,
                r,
                s = [],
                l = !0,
                d = !1;
              try {
                if (((a = (o = o.call(t)).next), 0 === e)) {
                  if (Object(o) !== o) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = a.call(o)).done) &&
                    (s.push(n.value), s.length !== e);
                    l = !0
                  );
              } catch (t) {
                (d = !0), (i = t);
              } finally {
                try {
                  if (
                    !l &&
                    null != o.return &&
                    ((r = o.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (d) throw i;
                }
              }
              return s;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return j(t, e);
            var o = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === o && t.constructor && (o = t.constructor.name);
            if ('Map' === o || 'Set' === o) return Array.from(t);
            if (
              'Arguments' === o ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
            )
              return j(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function j(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
        return n;
      }
      var K = [
          [k.c.ROTATE_CLOCKWISE, 'option.settings.rotateDocumentClockwise'],
          [
            k.c.ROTATE_COUNTER_CLOCKWISE,
            'option.settings.rotateDocumentCounterclockwise',
          ],
          [k.c.COPY, 'option.settings.copyText'],
          [k.c.PASTE, 'option.settings.pasteText'],
          [k.c.UNDO, 'option.settings.undoChange'],
          [k.c.REDO, 'option.settings.redoChange'],
          [k.c.OPEN_FILE, 'option.settings.openFile'],
          [k.c.SEARCH, 'option.settings.openSearch'],
          [k.c.ZOOM_IN, 'option.settings.zoomIn'],
          [k.c.ZOOM_OUT, 'option.settings.zoomOut'],
          [k.c.FIT_SCREEN_WIDTH, 'option.settings.fitScreenWidth'],
          [k.c.PRINT, 'option.settings.print'],
          [k.c.BOOKMARK, 'option.settings.bookmarkOpenPanel'],
          [k.c.PREVIOUS_PAGE, 'option.settings.goToPreviousPage'],
          [k.c.NEXT_PAGE, 'option.settings.goToNextPage'],
          [k.c.UP, 'option.settings.goToPreviousPageArrowUp'],
          [k.c.DOWN, 'option.settings.goToNextPageArrowDown'],
          [k.c.SWITCH_PAN, 'option.settings.holdSwitchPan'],
          [k.c.SELECT, 'option.settings.selectAnnotationEdit'],
          [k.c.PAN, 'option.settings.selectPan'],
          [k.c.ARROW, 'option.settings.selectCreateArrowTool'],
          [k.c.CALLOUT, 'option.settings.selectCreateCalloutTool'],
          [k.c.ERASER, 'option.settings.selectEraserTool'],
          [k.c.FREEHAND, 'option.settings.selectCreateFreeHandTool'],
          [k.c.IMAGE, 'option.settings.selectCreateStampTool'],
          [k.c.LINE, 'option.settings.selectCreateLineTool'],
          [k.c.STICKY_NOTE, 'option.settings.selectCreateStickyTool'],
          [k.c.ELLIPSE, 'option.settings.selectCreateEllipseTool'],
          [k.c.RECTANGLE, 'option.settings.selectCreateRectangleTool'],
          [k.c.RUBBER_STAMP, 'option.settings.selectCreateRubberStampTool'],
          [k.c.FREETEXT, 'option.settings.selectCreateFreeTextTool'],
          [k.c.SIGNATURE, 'option.settings.openSignatureModal'],
          [k.c.SQUIGGLY, 'option.settings.selectCreateTextSquigglyTool'],
          [k.c.HIGHLIGHT, 'option.settings.selectCreateTextHighlightTool'],
          [k.c.STRIKEOUT, 'option.settings.selectCreateTextStrikeoutTool'],
          [k.c.UNDERLINE, 'option.settings.selectCreateTextUnderlineTool'],
        ],
        R = function () {
          var t = D(Object(r.a)(), 1)[0],
            e = Object(a.d)(),
            o = Object(a.e)(s.a.getShortcutKeyMap),
            l = D(Object(n.useState)(void 0), 2),
            d = l[0],
            u = l[1],
            h = function (t) {
              if ((t = t.toUpperCase()).includes(', COMMAND')) {
                var e = t.split(', ');
                t = g.k ? e[1] : e[0];
              }
              return t.split(/(\+)/g);
            };
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              'div',
              { className: 'shortcut-table-header' },
              i.a.createElement(
                'div',
                { className: 'shortcut-table-header-command' },
                t('option.settings.command')
              ),
              i.a.createElement(
                'div',
                { className: 'shortcut-table-header-description' },
                t('option.settings.description')
              ),
              i.a.createElement(
                'div',
                { className: 'shortcut-table-header-action' },
                t('option.settings.action')
              )
            ),
            i.a.createElement(
              'div',
              { className: 'shortcut-table-content' },
              K.map(function (n) {
                var a = D(n, 2),
                  r = a[0],
                  s = a[1];
                return i.a.createElement(
                  T,
                  { key: r, keywords: [t(s)] },
                  i.a.createElement(
                    'div',
                    { className: 'shortcut-table-item' },
                    i.a.createElement(
                      'div',
                      { className: 'shortcut-table-item-command' },
                      h(o[r]).map(function (t, e) {
                        return i.a.createElement('span', { key: e }, t);
                      })
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'shortcut-table-item-description' },
                      t(s)
                    ),
                    i.a.createElement(m.a, {
                      img: 'icon-edit-form-field',
                      title: t('action.edit'),
                      onClick: function () {
                        return (
                          (t = r),
                          e(c.a.setIsElementHidden(p.a.SETTINGS_MODAL, !0)),
                          void u(t)
                        );
                        var t;
                      },
                    })
                  )
                );
              })
            ),
            d &&
              i.a.createElement(I, {
                currentShortcut: d,
                finishEditing: function () {
                  u(void 0), e(c.a.setIsElementHidden(p.a.SETTINGS_MODAL, !1));
                },
                getCommandStrings: h,
              })
          );
        },
        P = (o(1594), o(1596), o(113));
      o(1597);
      function G(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var o =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != o) {
              var n,
                i,
                a,
                r,
                s = [],
                l = !0,
                d = !1;
              try {
                if (((a = (o = o.call(t)).next), 0 === e)) {
                  if (Object(o) !== o) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = a.call(o)).done) &&
                    (s.push(n.value), s.length !== e);
                    l = !0
                  );
              } catch (t) {
                (d = !0), (i = t);
              } finally {
                try {
                  if (
                    !l &&
                    null != o.return &&
                    ((r = o.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (d) throw i;
                }
              }
              return s;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return L(t, e);
            var o = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === o && t.constructor && (o = t.constructor.name);
            if ('Map' === o || 'Set' === o) return Array.from(t);
            if (
              'Arguments' === o ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
            )
              return L(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function L(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
        return n;
      }
      var U = function (t, e, o, n) {
          return { label: t, description: e, isChecked: o, onToggled: n };
        },
        H = function () {
          var t = G(
              Object(a.e)(function (t) {
                return [
                  s.a.shouldFadePageNavigationComponent(t),
                  s.a.isNoteSubmissionWithEnterEnabled(t),
                  s.a.isCommentThreadExpansionEnabled(t),
                  s.a.isNotesPanelRepliesCollapsingEnabled(t),
                  s.a.isNotesPanelTextCollapsingEnabled(t),
                  s.a.shouldClearSearchPanelOnClose(t),
                  s.a.pageDeletionConfirmationModalEnabled(t),
                  s.a.isThumbnailSelectingPages(t),
                  s.a.getCustomSettings(t),
                  s.a.isToolDefaultStyleUpdateFromAnnotationPopupEnabled(t),
                ];
              }),
              10
            ),
            e = t[0],
            o = t[1],
            l = t[2],
            d = t[3],
            p = t[4],
            m = t[5],
            u = t[6],
            h = t[7],
            b = t[8],
            g = t[9],
            f = G(Object(r.a)(), 1)[0],
            y = Object(a.d)(),
            x = G(Object(n.useState)(), 2)[1],
            w = Object(n.useCallback)(function () {
              return x({});
            }, []),
            E = [
              U(
                f('option.settings.disableFadePageNavigationComponent'),
                f('option.settings.disableFadePageNavigationComponentDesc'),
                !e,
                function (t) {
                  y(
                    t
                      ? c.a.disableFadePageNavigationComponent()
                      : c.a.enableFadePageNavigationComponent()
                  );
                }
              ),
              U(
                f('option.settings.disableNativeScrolling'),
                f('option.settings.disableNativeScrollingDesc'),
                !P.a.useNativeScroll,
                function (t) {
                  P.a.useNativeScroll = !t;
                }
              ),
            ],
            v = [
              U(
                f(
                  'option.settings.disableToolDefaultStyleUpdateFromAnnotationPopup'
                ),
                f(
                  'option.settings.disableToolDefaultStyleUpdateFromAnnotationPopupDesc'
                ),
                !g,
                function (t) {
                  return y(
                    c.a.setToolDefaultStyleUpdateFromAnnotationPopupEnabled(!t)
                  );
                }
              ),
            ],
            M = [
              U(
                f('option.settings.disableNoteSubmissionWithEnter'),
                f('option.settings.disableNoteSubmissionWithEnterDesc'),
                !o,
                function (t) {
                  return y(c.a.setNoteSubmissionEnabledWithEnter(!t));
                }
              ),
              U(
                f('option.settings.disableAutoExpandCommentThread'),
                f('option.settings.disableAutoExpandCommentThreadDesc'),
                !l,
                function (t) {
                  return y(c.a.setCommentThreadExpansion(!t));
                }
              ),
              U(
                f('option.settings.disableReplyCollapse'),
                f('option.settings.disableReplyCollapseDesc'),
                !d,
                function (t) {
                  return y(c.a.setNotesPanelRepliesCollapsing(!t));
                }
              ),
              U(
                f('option.settings.disableTextCollapse'),
                f('option.settings.disableTextCollapseDesc'),
                !p,
                function (t) {
                  return y(c.a.setNotesPanelTextCollapsing(!t));
                }
              ),
            ],
            A = [
              U(
                f('option.settings.disableClearSearchOnPanelClose'),
                f('option.settings.disableClearSearchOnPanelCloseDesc'),
                !m,
                function (t) {
                  return y(c.a.setClearSearchOnPanelClose(!t));
                }
              ),
            ],
            N = [
              U(
                f('option.settings.disablePageDeletionConfirmationModal'),
                f('option.settings.disablePageDeletionConfirmationModalDesc'),
                !u,
                function (t) {
                  y(
                    t
                      ? c.a.disablePageDeletionConfirmationModal()
                      : c.a.enablePageDeletionConfirmationModal()
                  );
                }
              ),
              U(
                f('option.settings.disableMultiselect'),
                f('option.settings.disableMultiselectDesc'),
                !h,
                function (t) {
                  return y(c.a.setThumbnailSelectingPages(!t));
                }
              ),
            ],
            k = [
              [f('option.settings.viewing'), E],
              [f('option.settings.annotations'), v],
              [f('option.settings.notesPanel'), M],
              [f('option.settings.search'), A],
              [f('option.settings.pageManipulation'), N],
              [f('option.settings.miscellaneous'), b],
            ],
            C = function (t, e) {
              return [
                t,
                e
                  .map(function (t) {
                    return [t.label, t.description];
                  })
                  .flat(),
              ].flat();
            };
          return i.a.createElement(
            i.a.Fragment,
            null,
            k.map(function (t) {
              var e = G(t, 2),
                o = e[0],
                n = e[1];
              return n.length < 1
                ? null
                : i.a.createElement(
                    T,
                    { key: o, keywords: C(o, n) },
                    i.a.createElement(
                      'div',
                      { className: 'setting-section' },
                      i.a.createElement(
                        'div',
                        { className: 'setting-label' },
                        o
                      ),
                      n.map(function (t) {
                        return i.a.createElement(
                          T,
                          {
                            key: t.label,
                            keywords: [o, t.label, t.description],
                          },
                          i.a.createElement(
                            'div',
                            { className: 'setting-item' },
                            i.a.createElement(
                              'div',
                              { className: 'setting-item-info' },
                              i.a.createElement(
                                'div',
                                { className: 'setting-item-label' },
                                t.label
                              ),
                              i.a.createElement('div', null, t.description)
                            ),
                            i.a.createElement(S.a, {
                              isSwitch: !0,
                              checked:
                                'function' == typeof t.isChecked
                                  ? t.isChecked()
                                  : t.isChecked,
                              onChange: function (e) {
                                t.onToggled(e.target.checked), w();
                              },
                            })
                          )
                        );
                      })
                    )
                  );
            })
          );
        };
      o(1599);
      function B(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var o =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != o) {
              var n,
                i,
                a,
                r,
                s = [],
                l = !0,
                d = !1;
              try {
                if (((a = (o = o.call(t)).next), 0 === e)) {
                  if (Object(o) !== o) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = a.call(o)).done) &&
                    (s.push(n.value), s.length !== e);
                    l = !0
                  );
              } catch (t) {
                (d = !0), (i = t);
              } finally {
                try {
                  if (
                    !l &&
                    null != o.return &&
                    ((r = o.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (d) throw i;
                }
              }
              return s;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return F(t, e);
            var o = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === o && t.constructor && (o = t.constructor.name);
            if ('Map' === o || 'Set' === o) return Array.from(t);
            if (
              'Arguments' === o ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
            )
              return F(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function F(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
        return n;
      }
      var W = p.a.SETTINGS_MODAL,
        z = function () {
          var t = B(
              Object(a.e)(function (t) {
                return [
                  s.a.isElementDisabled(t, p.a.SETTINGS_MODAL),
                  s.a.isElementHidden(t, p.a.SETTINGS_MODAL),
                  s.a.getSelectedTab(t, W),
                  s.a.isElementDisabled(t, p.a.SETTINGS_GENERAL_BUTTON),
                  s.a.isElementDisabled(t, p.a.SETTINGS_KEYBOARD_BUTTON),
                  s.a.isElementDisabled(t, p.a.SETTINGS_ADVANCED_BUTTON),
                ];
              }),
              6
            ),
            e = t[0],
            o = t[1],
            l = t[2],
            g = t[3],
            f = t[4],
            y = t[5],
            x = B(Object(r.a)(), 1)[0],
            w = Object(a.d)(),
            E = B(Object(n.useState)(''), 2),
            S = E[0],
            T = E[1],
            M = [
              [p.a.SETTINGS_GENERAL_BUTTON, x('option.settings.general')],
              [
                p.a.SETTINGS_KEYBOARD_BUTTON,
                x('option.settings.keyboardShortcut'),
              ],
              [
                p.a.SETTINGS_ADVANCED_BUTTON,
                x('option.settings.advancedSetting'),
              ],
            ];
          Object(n.useEffect)(
            function () {
              if (
                (l === p.a.SETTINGS_GENERAL_BUTTON && g) ||
                (l === p.a.SETTINGS_KEYBOARD_BUTTON && f) ||
                (l === p.a.SETTINGS_ADVANCED_BUTTON && y)
              ) {
                var t = '';
                g
                  ? f
                    ? y || (t = p.a.SETTINGS_ADVANCED_BUTTON)
                    : (t = p.a.SETTINGS_KEYBOARD_BUTTON)
                  : (t = p.a.SETTINGS_GENERAL_BUTTON),
                  w(c.a.setSelectedTab(W, t));
              }
            },
            [g, f, y]
          );
          var A = d()('Modal', 'SettingsModal', { open: !o, closed: o }),
            k = function () {
              w(c.a.closeElement(p.a.SETTINGS_MODAL));
            };
          return e
            ? null
            : i.a.createElement(
                v.Provider,
                { value: S },
                i.a.createElement(
                  h.a,
                  { locked: !o },
                  i.a.createElement(
                    'div',
                    {
                      className: A,
                      'data-element': p.a.SettingsModal,
                      onClick: k,
                    },
                    i.a.createElement(
                      'div',
                      {
                        className: 'container',
                        onClick: function (t) {
                          return t.stopPropagation();
                        },
                      },
                      i.a.createElement(
                        b.a,
                        {
                          onSwipedUp: k,
                          onSwipedDown: k,
                          preventDefaultTouchmoveEvent: !0,
                        },
                        i.a.createElement('div', {
                          className: 'swipe-indicator',
                        }),
                        i.a.createElement(
                          'div',
                          { className: 'header' },
                          i.a.createElement(
                            'div',
                            { className: 'title' },
                            i.a.createElement(
                              'div',
                              null,
                              x('option.settings.settings')
                            ),
                            i.a.createElement(m.a, {
                              img: 'icon-close',
                              onClick: k,
                              title: 'action.close',
                            })
                          ),
                          i.a.createElement('input', {
                            placeholder: x('option.settings.searchSettings'),
                            value: S,
                            onChange: function (t) {
                              return T(t.target.value);
                            },
                          })
                        )
                      ),
                      i.a.createElement('div', { className: 'divider' }),
                      i.a.createElement(
                        'div',
                        { className: 'body' },
                        i.a.createElement(
                          'div',
                          { className: 'settings-tabs-container' },
                          i.a.createElement(
                            'div',
                            { className: 'settings-tabs' },
                            M.map(function (t) {
                              var e = B(t, 2),
                                o = e[0],
                                n = e[1],
                                a = d()('settings-tab', { selected: o === l });
                              return i.a.createElement(
                                u.a,
                                {
                                  className: a,
                                  dataElement: o,
                                  onClick: function () {
                                    return (function (t) {
                                      t !== l && w(c.a.setSelectedTab(W, t));
                                    })(o);
                                  },
                                  key: o,
                                },
                                n
                              );
                            })
                          )
                        ),
                        i.a.createElement(
                          'div',
                          {
                            className: d()('settings-content', {
                              KeyboardShortcutTab:
                                l === p.a.SETTINGS_KEYBOARD_BUTTON,
                            }),
                          },
                          l === p.a.SETTINGS_GENERAL_BUTTON &&
                            i.a.createElement(N, null),
                          l === p.a.SETTINGS_KEYBOARD_BUTTON &&
                            i.a.createElement(R, null),
                          l === p.a.SETTINGS_ADVANCED_BUTTON &&
                            i.a.createElement(H, null)
                        )
                      )
                    )
                  )
                )
              );
        };
      e.default = z;
    },
  },
]);
//# sourceMappingURL=19.chunk.js.map
