(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    1603: function (e, t, n) {
      var o = n(27),
        a = n(1604);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']]);
      var r = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const a = t[o];
              if (0 === o)
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
      o(a, r);
      e.exports = a.locals || {};
    },
    1604: function (e, t, n) {
      (e.exports = n(28)(!1)).push([
        e.i,
        '.dimension-input-container{display:flex;align-items:center;border:1px solid var(--border);background:var(--component-background);color:var(--text-color);border-radius:4px;width:100%;max-width:80px;min-width:64px;height:28px;padding:1px 2px}.dimension-input-container input::-webkit-inner-spin-button,.dimension-input-container input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.dimension-input-container input[type=number]{-moz-appearance:textfield}.dimension-input-container input,.dimension-input-container input:focus{border:0}.dimension-input{border:0;border-radius:0;padding:0;margin-right:0;margin-left:4px;min-width:1ch}.dimension-unit{color:var(--text-color);font-size:13px}',
        '',
      ]);
    },
    1605: function (e, t, n) {
      var o = n(27),
        a = n(1606);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']]);
      var r = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const a = t[o];
              if (0 === o)
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
      o(a, r);
      e.exports = a.locals || {};
    },
    1606: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.insert-blank-page-panel{width:100%}.insert-blank-page-panel .dimension-input-container{min-width:100%;margin:0;height:32px}.insert-blank-page-panel .subheader{font-size:13px;font-weight:700;padding-top:8px;padding-bottom:8px}.insert-blank-page-panel .panel-container .section{display:flex;padding-top:8px;padding-bottom:8px;grid-gap:16px;gap:16px}.insert-blank-page-panel .panel-container .section .input-container{display:flex;flex-direction:column}.insert-blank-page-panel .panel-container .section .input-container p{margin:0;padding-bottom:8px;font-size:13px}.insert-blank-page-panel .panel-container .section .input-container .page-number-input{width:100%;height:32px;margin:0}.insert-blank-page-panel .panel-container .section .input-container .customSelector{margin-left:0;height:28px}.insert-blank-page-panel .panel-container .section .input-container .customSelector .customSelector__selectedItem{width:100%;border-radius:4px}.insert-blank-page-panel .panel-container .section .input-container .customSelector .Icon{width:13px;height:13px}.insert-blank-page-panel .panel-container .section .input-container .customSelector ul{width:100%}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-blank-page-panel .panel-container .section .input-container .customSelector ul{top:auto;bottom:calc(100% + 4px)}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-blank-page-panel .panel-container .section .input-container .customSelector ul{top:auto;bottom:calc(100% + 4px)}}.insert-blank-page-panel .panel-container .section .input-container .customSelector li:first-child{color:var(--faded-text);font-size:13px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-blank-page-panel .panel-container .section .input-container .customSelector li:first-child{display:none}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-blank-page-panel .panel-container .section .input-container .customSelector li:first-child{display:none}}.insert-blank-page-panel .panel-container .section .input-container .customSelector li .optionSelected{color:var(--text-color);background:var(--popup-button-active)}.insert-blank-page-panel .panel-container .section .input-container select{height:28px;width:100%}.insert-blank-page-panel .panel-container .section .input-container .Dropdown{height:32px;min-width:150px;width:100%!important}.insert-blank-page-panel .panel-container .section .input-container .Dropdown .arrow{flex:0 1 auto}.insert-blank-page-panel .panel-container .section .input-container .Dropdown .picked-option .picked-option-text{width:150px;text-align:left}.insert-blank-page-panel .panel-container .section .input-container .Dropdown__items{top:-52px;z-index:80;width:100%}.insert-blank-page-panel .panel-container .section .input-container .input-sub-text{margin-top:8px;padding-bottom:0;color:var(--faded-text)}.insert-blank-page-panel .panel-container .section .input-container .page-number-error{margin-top:8px;font-size:13px;color:var(--color-message-error)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-blank-page-panel .panel-container .section .ui__choice__label,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-blank-page-panel .panel-container .section button,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-blank-page-panel .panel-container .section input{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-blank-page-panel .panel-container .section .ui__choice__label,.App.is-web-component:not(.is-in-desktop-only-mode) .insert-blank-page-panel .panel-container .section button,.App.is-web-component:not(.is-in-desktop-only-mode) .insert-blank-page-panel .panel-container .section input{font-size:13px}}.insert-blank-page-panel .panel-container .section>*{flex:1}.incrementNumberInput{border:1px solid var(--border);border-radius:4px;display:flex;height:32px}.incrementNumberInput input[type=number]::-webkit-inner-spin-button,.incrementNumberInput input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.incrementNumberInput input[type=number]{-moz-appearance:textfield}.incrementNumberInput .ui__input{border:0;height:100%}.incrementNumberInput .ui__input .ui__input__input{width:100%;height:100%;padding:6px;line-height:normal}.incrementNumberInput .ui__input--message-default.ui__input--focused{outline:none;box-shadow:none}.incrementNumberInput .increment-buttons{display:flex;flex-direction:column;grid-gap:2px;gap:2px;justify-content:center;padding:2px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .incrementNumberInput .increment-buttons{display:none}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .incrementNumberInput .increment-buttons{display:none}}.incrementNumberInput .increment-buttons .increment-arrow-button{border:0;border-radius:2px;height:10px;width:20px;display:flex;justify-content:center;align-items:center;line-height:10px;padding:0}.incrementNumberInput .increment-buttons .increment-arrow-button .Icon{height:10px;width:10px}.incrementNumberInput .increment-buttons .increment-arrow-button:active{box-shadow:0 0 1px 0 var(--document-box-shadow)}.incrementNumberInput[focus-within]{border:1px solid var(--focus-border)}.incrementNumberInput:focus-within{border:1px solid var(--focus-border)}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1607: function (e, t, n) {
      var o = n(27),
        a = n(1608);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']]);
      var r = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const a = t[o];
              if (0 === o)
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
      o(a, r);
      e.exports = a.locals || {};
    },
    1608: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.insert-uploaded-page-panel{overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .insert-uploaded-page-panel{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .insert-uploaded-page-panel{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.insert-uploaded-page-panel{box-sizing:border-box;display:flex;flex-direction:column;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);width:791px;background:var(--component-background)}.insert-uploaded-page-panel .header{display:flex;justify-content:space-between;width:100%;font-size:16px;line-height:24px;color:var(--gray-9);font-weight:700;box-shadow:inset 0 -1px 0 var(--divider);padding:20px 16px}.insert-uploaded-page-panel .header .left-header{display:flex;align-items:center;grid-gap:4px;gap:4px}.insert-uploaded-page-panel .header .Button:hover{background:var(--view-header-button-hover);border-radius:4px}.insert-uploaded-page-panel .insert-page-divider{border-top:1px solid var(--divider);margin:18px -16px 16px;width:inherit}.insert-uploaded-page-panel .insert-blank-page-controls{padding-bottom:16px;display:flex;grid-gap:48px;gap:48px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .insert-blank-page-controls{flex-direction:column;grid-gap:20px;gap:20px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .insert-blank-page-controls input,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .insert-blank-page-controls label{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .insert-blank-page-controls{flex-direction:column;grid-gap:20px;gap:20px}.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .insert-blank-page-controls input,.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .insert-blank-page-controls label{font-size:13px}}.insert-uploaded-page-panel .insert-blank-page-controls .insert-page-titles{font-size:13px;font-weight:700;color:var(--gray-8)}.insert-uploaded-page-panel .insert-blank-page-controls .insert-page-location-options{display:flex;flex-direction:column}.insert-uploaded-page-panel .insert-blank-page-controls .insert-page-location-options .insert-page-options{display:flex;flex-direction:row;align-items:baseline;grid-gap:20px;gap:20px;padding-top:11px}.insert-uploaded-page-panel .insert-blank-page-controls .insert-page-location{display:flex;flex-direction:column}.insert-uploaded-page-panel .insert-blank-page-controls .insert-page-location .insert-page-input{display:flex;padding-top:8px;grid-gap:8px;gap:8px;align-items:baseline;font-size:13px;font-weight:400;-webkit-font-smoothing:auto}.insert-uploaded-page-panel .insert-blank-page-controls .insert-page-location .page-number-error{color:var(--color-message-error)}.insert-uploaded-page-panel .modal-body{height:unset;display:flex;flex-direction:column;box-shadow:inset 0 -1px 0 var(--divider);padding:16px}.insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container{height:409px;width:100%;padding:16px 0 16px 16px;border-radius:4px;overflow:auto;background-color:var(--gray-2);display:flex;flex-wrap:wrap;grid-gap:16px;gap:16px}.insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container.isLoading{display:flex;justify-content:center;align-items:center}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container{padding:12px 0 12px 12px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container{padding:12px 0 12px 12px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container .thumb-card{width:101px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container .thumb-card{width:101px}}@media(max-width:430px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container .thumb-card{width:101px}}@container (max-width: 430px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .modal-body .modal-body-thumbnail-container .thumb-card{width:101px}}.insert-uploaded-page-panel .insert-page-footer{display:flex;padding:16px;justify-content:flex-end}.insert-uploaded-page-panel .insert-page-footer.isFileSelected{justify-content:space-between}.insert-uploaded-page-panel .insert-page-footer .deselect-thumbnails{border:none;background-color:transparent;color:var(--secondary-button-text);padding:8px 16px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer}:host(:not([data-tabbing=true])) .insert-uploaded-page-panel .insert-page-footer .deselect-thumbnails,html:not([data-tabbing=true]) .insert-uploaded-page-panel .insert-page-footer .deselect-thumbnails{outline:none}.insert-uploaded-page-panel .insert-page-footer .deselect-thumbnails:hover{color:var(--secondary-button-hover)}.insert-uploaded-page-panel .insert-page-footer .deselect-thumbnails.disabled{visibility:hidden}.insert-uploaded-page-panel .insert-page-footer .modal-btn{border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;padding:8px 16px;height:32px;width:100px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);font-weight:400;cursor:pointer}:host(:not([data-tabbing=true])) .insert-uploaded-page-panel .insert-page-footer .modal-btn,html:not([data-tabbing=true]) .insert-uploaded-page-panel .insert-page-footer .modal-btn{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .insert-page-footer .modal-btn{height:40px;width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .insert-page-footer .modal-btn{height:40px;width:100px}}.insert-uploaded-page-panel .insert-page-footer .modal-btn:hover{background:var(--primary-button-hover)}.insert-uploaded-page-panel .insert-page-footer .modal-btn.disabled{opacity:.5;cursor:not-allowed}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .insert-uploaded-page-panel .insert-page-footer button{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .insert-uploaded-page-panel .insert-page-footer button{font-size:13px}}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1609: function (e, t, n) {
      var o = n(27),
        a = n(1610);
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']]);
      var r = {
        insert: function (e) {
          const t = document.getElementsByTagName('apryse-webviewer');
          if (t.length > 0) {
            const n = [];
            for (let o = 0; o < t.length; o++) {
              const a = t[o];
              if (0 === o)
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
      o(a, r);
      e.exports = a.locals || {};
    },
    1610: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        '.open.InsertPageModal{visibility:visible}.closed.InsertPageModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.InsertPageModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.InsertPageModal .modal-container .wrapper .modal-content{padding:10px}.InsertPageModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.InsertPageModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.InsertPageModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.InsertPageModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.InsertPageModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.InsertPageModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.InsertPageModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.InsertPageModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.InsertPageModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.InsertPageModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InsertPageModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InsertPageModal .footer .modal-button{padding:23px 8px}}.InsertPageModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InsertPageModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .InsertPageModal .swipe-indicator{display:none}}.InsertPageModal .container{box-shadow:0 0 3px 0 var(--document-box-shadow);overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .InsertPageModal .container,.InsertPageModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .InsertPageModal .container,.InsertPageModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InsertPageModal .container,.InsertPageModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InsertPageModal .container,.InsertPageModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.InsertPageModal .container .tab-list{width:100%;height:28px;display:flex;border-radius:4px;border:1px solid var(--border);color:var(--text-color)}.InsertPageModal .container .tab-list .tab-options-button{text-align:center;vertical-align:middle;line-height:24px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1;border-radius:0;cursor:pointer}.InsertPageModal .container .tab-list .tab-options-button:first-child{border-bottom-left-radius:4px;border-top-left-radius:4px}.InsertPageModal .container .tab-list .tab-options-button:last-child{border-bottom-right-radius:4px;border-top-right-radius:4px}.InsertPageModal .container .tab-list .tab-options-button:hover{background:var(--popup-button-hover)}.InsertPageModal .container .tab-list .tab-options-button.selected{background:var(--popup-button-active);cursor:default}.InsertPageModal .container .tab-list .tab-options-divider{width:1px;background:var(--divider)}.InsertPageModal .container .tab-panel{width:100%;display:flex;flex-direction:column;align-items:center}.InsertPageModal .container{display:flex;flex-direction:column;justify-content:space-between;width:480px;padding:0;border-radius:4px;box-shadow:0 0 3px var(--document-box-shadow);background:var(--component-background);overflow-y:visible}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InsertPageModal .container{border-radius:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InsertPageModal .container{border-radius:0}}@media(max-height:320px){.App:not(.is-web-component) .InsertPageModal .container{display:grid;height:100%;position:fixed;top:0;grid-template-rows:100px auto 70px;justify-content:normal}}@container (max-height: 320px){.App.is-web-component .InsertPageModal .container{display:grid;height:100%;position:fixed;top:0;grid-template-rows:100px auto 70px;justify-content:normal}}.InsertPageModal .container .header-container{box-shadow:inset 0 -1px 0 var(--modal-stroke-and-border);padding:20px 16px 16px}.InsertPageModal .container .header{margin:0;display:flex;align-items:center;width:100%;height:24px}.InsertPageModal .container .header p{font-size:16px;font-weight:700;width:89.286%;margin:0 16px 0 0}.InsertPageModal .container .header .insertPageModalCloseButton{position:static;height:32px;width:32px}.InsertPageModal .container .header .insertPageModalCloseButton:hover{background:var(--view-header-button-hover);border-radius:4px}.InsertPageModal .container .header .insertPageModalCloseButton.selected{background:var(--view-header-button-active);cursor:default}.InsertPageModal .container .tab-panel{overflow-y:visible}.InsertPageModal .container .tab-panel .panel-container{padding:16px}.InsertPageModal .container .tab-panel .panel-body{width:100%;height:240px;position:relative;padding:16px}.InsertPageModal .container .tab-list{font-size:14px;margin-top:12px}.InsertPageModal .container .tab-list .tab-options-button{padding:0;border:none;background-color:transparent}:host(:not([data-tabbing=true])) .InsertPageModal .container .tab-list .tab-options-button,html:not([data-tabbing=true]) .InsertPageModal .container .tab-list .tab-options-button{outline:none}.InsertPageModal .container .footer{display:flex;padding:16px;align-items:center;justify-content:flex-end;width:100%;box-shadow:inset 0 1px 0 var(--modal-stroke-and-border);margin:0}.InsertPageModal .container .footer .insertPageModalConfirmButton{border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;padding:0 8px;height:32px;width:92px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer}:host(:not([data-tabbing=true])) .InsertPageModal .container .footer .insertPageModalConfirmButton,html:not([data-tabbing=true]) .InsertPageModal .container .footer .insertPageModalConfirmButton{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .InsertPageModal .container .footer .insertPageModalConfirmButton{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .InsertPageModal .container .footer .insertPageModalConfirmButton{font-size:13px}}.InsertPageModal .container .footer .insertPageModalConfirmButton:enabled:hover{background:var(--primary-button-hover)}.InsertPageModal .container .footer .insertPageModalConfirmButton.disabled{cursor:not-allowed}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1716: function (e, t, n) {
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
        n(17);
      var o = n(0),
        a = n.n(o),
        r =
          (n(39),
          n(51),
          n(22),
          n(67),
          n(68),
          n(69),
          n(70),
          n(41),
          n(44),
          n(24),
          n(25),
          n(46),
          n(66),
          n(6)),
        i = n(2),
        l = n(3),
        p = n(362),
        s = n(5),
        c = n(142),
        d = n(21),
        u = n(1371),
        m = n(182),
        b = n(1),
        g = n(109),
        f = (n(36), n(557), n(32), n(1213)),
        h = n(371),
        y = n(420),
        x = (n(131), n(37), n(38), n(31), n(1711)),
        w = n(33),
        v = n(19),
        P = n.n(v);
      function E(e) {
        return (E =
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
      function k(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== E(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || 'default');
                if ('object' !== E(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === E(t) ? t : String(t);
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
      function I(e, t) {
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
              var o,
                a,
                r,
                i,
                l = [],
                p = !0,
                s = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  p = !1;
                } else
                  for (
                    ;
                    !(p = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    p = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !p &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return l;
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
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var N = function (e) {
          var t = e.className,
            n = e.min,
            r = e.onChange,
            i = e.value,
            l = e.fillWidth,
            p = I(Object(o.useState)(i), 2),
            s = p[0],
            c = p[1];
          return a.a.createElement(
            'div',
            { className: P()(k({ incrementNumberInput: !0 }, t, !!t)) },
            a.a.createElement(x.a, {
              type: 'number',
              min: n,
              onChange: function (e) {
                r(parseInt(e.target.value)), c(parseInt(e.target.value));
              },
              value: s,
              fillWidth: l,
            }),
            a.a.createElement(
              'div',
              { className: 'increment-buttons' },
              a.a.createElement(
                'button',
                {
                  className: 'increment-arrow-button',
                  onClick: function () {
                    r(s + 1), c(s + 1);
                  },
                },
                a.a.createElement(w.a, {
                  className: 'up-arrow',
                  glyph: 'icon-chevron-up',
                })
              ),
              a.a.createElement(
                'button',
                {
                  className: 'increment-arrow-button',
                  onClick: function () {
                    r(s - 1), c(s - 1);
                  },
                },
                a.a.createElement(w.a, {
                  className: 'down-arrow',
                  glyph: 'icon-chevron-down',
                })
              )
            )
          );
        },
        M = (n(104), n(127), n(52), n(64), n(35));
      n(1603);
      function S(e) {
        return (S =
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
      function j(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== S(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || 'default');
                if ('object' !== S(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === S(t) ? t : String(t);
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
              var o,
                a,
                r,
                i,
                l = [],
                p = !0,
                s = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  p = !1;
                } else
                  for (
                    ;
                    !(p = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    p = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !p &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return _(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var C = function (e) {
        var t = e.className,
          n = e.label,
          r = e.initialValue,
          i = e.onChange,
          l = e.unit,
          p = e.maxLength,
          s = void 0 === p ? 10 : p,
          c = e.disabled,
          d = O(Object(o.useState)(r), 2),
          u = d[0],
          m = d[1];
        return a.a.createElement(
          'div',
          { className: P()(j({ dimensionInput: !0 }, t, !!t)) },
          a.a.createElement(
            'label',
            { className: 'dimension-input-label' },
            n,
            a.a.createElement(
              'div',
              { className: 'dimension-input-container' },
              a.a.createElement('input', {
                className: 'dimension-input',
                type: 'number',
                min: '0',
                step: 0.01,
                onChange: function (e) {
                  m(e.target.value), i(e.target.value);
                },
                disabled: c,
                style: {
                  width: ''.concat(
                    (function (e) {
                      var t = e.toString().length,
                        n = 0.3;
                      if (M.g) {
                        (t *= 1.25), (s *= 1.25), (n *= 1.25);
                      }
                      return (
                        e.toString().includes('.') ? (t -= n) : (t += n),
                        t > s ? s : t
                      );
                    })(u),
                    'ch'
                  ),
                },
                value: u,
              }),
              a.a.createElement(
                'span',
                { className: 'dimension-unit' },
                u > 0 && l
              )
            )
          )
        );
      };
      n(1605);
      function L(e, t) {
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
              var o,
                a,
                r,
                i,
                l = [],
                p = !0,
                s = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  p = !1;
                } else
                  for (
                    ;
                    !(p = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    p = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !p &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return T(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return T(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var D = function (e) {
          var t = e.insertNewPageBelow,
            n = e.insertNewPageIndexes,
            i = e.numberOfBlankPagesToInsert,
            s = e.setInsertNewPageBelow,
            c = e.setInsertNewPageIndexes,
            d = e.setNumberOfBlankPagesToInsert,
            u = e.setInsertPageHeight,
            m = e.setInsertPageWidth,
            b = e.loadedDocumentPageCount,
            g = L(
              Object(r.e)(function (e) {
                return [l.a.getPresetNewPageDimensions(e)];
              }),
              1
            )[0],
            x = L(Object(p.a)(), 1)[0],
            w = Object.keys(g),
            v = 'above',
            P = 'below',
            E = {
              'Inches (in)': '"',
              'Centimeters (cm)': 'cm',
              'Millimeters (mm)': 'mm',
            },
            k = { '"': 1, cm: 2.54, mm: 25.4, pt: 72 },
            I = L(Object(o.useState)(w[0]), 2),
            A = I[0],
            M = I[1],
            S = L(Object(o.useState)(!1), 2),
            j = S[0],
            O = S[1],
            _ = L(Object(o.useState)(Object.getOwnPropertyNames(E)[0]), 2),
            T = _[0],
            D = _[1],
            B = L(Object(o.useState)(g[w[0]].width), 2),
            R = B[0],
            H = B[1],
            z = L(Object(o.useState)(g[w[0]].height), 2),
            F = z[0],
            G = z[1],
            W = L(Object(o.useState)(''), 2),
            U = W[0],
            $ = W[1];
          Object(o.useEffect)(function () {
            m(72 * g[A].width), u(72 * g[A].height);
          }, []);
          return a.a.createElement(
            'div',
            { className: 'insert-blank-page-panel' },
            a.a.createElement(
              'div',
              { className: 'panel-container' },
              a.a.createElement(
                'div',
                { className: 'subheader' },
                x('insertPageModal.pagePlacements.header')
              ),
              a.a.createElement(
                'div',
                { className: 'section' },
                a.a.createElement(f.a, {
                  label: x('insertPageModal.pagePlacements.'.concat(v)),
                  name: 'PAGE_PLACEMENT',
                  onChange: function () {
                    s(!1);
                  },
                  checked: !t,
                  radio: !0,
                }),
                a.a.createElement(f.a, {
                  label: x('insertPageModal.pagePlacements.'.concat(P)),
                  name: 'PAGE_PLACEMENT',
                  onChange: function () {
                    s(!0);
                  },
                  checked: t,
                  radio: !0,
                })
              ),
              a.a.createElement(
                'div',
                { className: 'subheader' },
                x('insertPageModal.pageLocations.header')
              ),
              a.a.createElement(
                'div',
                { className: 'section' },
                a.a.createElement(
                  'div',
                  { className: 'input-container' },
                  a.a.createElement(
                    'p',
                    null,
                    x('insertPageModal.pageLocations.specify')
                  ),
                  a.a.createElement(h.a, {
                    selectedPageNumbers: n,
                    pageCount: b,
                    onBlurHandler: function (e) {
                      $(null), c(e);
                    },
                    onError: function (e) {
                      e &&
                        $(
                          ''.concat(x('message.errorPageNumber'), ' ').concat(b)
                        );
                    },
                  }),
                  a.a.createElement(
                    'p',
                    { className: 'input-sub-text' },
                    x('insertPageModal.pageLocations.total'),
                    ' ',
                    b,
                    ' ',
                    x('insertPageModal.pageLocations.pages')
                  ),
                  U &&
                    a.a.createElement(
                      'div',
                      { className: 'page-number-error' },
                      U
                    )
                ),
                a.a.createElement(
                  'div',
                  { className: 'input-container' },
                  a.a.createElement(
                    'p',
                    null,
                    x('insertPageModal.pageLocations.amount')
                  ),
                  a.a.createElement(N, {
                    type: 'number',
                    min: '1',
                    onChange: function (e) {
                      d(e);
                    },
                    value: i,
                    fillWidth: !0,
                  })
                )
              ),
              a.a.createElement(
                'div',
                { className: 'subheader' },
                x('insertPageModal.pageDimensions.header')
              ),
              a.a.createElement(
                'div',
                { className: 'section' },
                a.a.createElement(
                  'div',
                  { className: 'input-container' },
                  a.a.createElement(
                    'p',
                    null,
                    x('insertPageModal.pageDimensions.subHeader')
                  ),
                  a.a.createElement(y.a, {
                    className: 'presetSelector',
                    selectedItem: A,
                    onItemSelected: function (e) {
                      'Custom' === e
                        ? (O(!0), m(R * (72 / k[E[T]])), u(F * (72 / k[E[T]])))
                        : (m(72 * g[e].width), u(72 * g[e].height), O(!1)),
                        M(e);
                    },
                    items: [].concat(w, ['Custom']),
                  })
                ),
                a.a.createElement(
                  'div',
                  {
                    className: 'input-container',
                    style: { visibility: j ? 'visible' : 'hidden' },
                  },
                  a.a.createElement(
                    'p',
                    null,
                    x('insertPageModal.pageDimensions.units')
                  ),
                  a.a.createElement(y.a, {
                    className: 'unitSelector',
                    selectedItem: T,
                    onItemSelected: function (e) {
                      D(e), m(R * (72 / k[E[e]])), u(F * (72 / k[E[e]]));
                    },
                    items: Object.keys(E),
                  })
                )
              ),
              a.a.createElement(
                'div',
                {
                  className: 'section',
                  style: { display: j ? 'flex' : 'none' },
                },
                a.a.createElement(
                  'div',
                  { className: 'input-container' },
                  a.a.createElement(
                    'p',
                    null,
                    x('formField.formFieldPopup.width')
                  ),
                  a.a.createElement(C, {
                    className: 'customWidthInput',
                    initialValue: R,
                    onChange: function (e) {
                      H(e), m(e * (72 / k[E[T]]));
                    },
                    unit: E[T],
                  })
                ),
                a.a.createElement(
                  'div',
                  { className: 'input-container' },
                  a.a.createElement(
                    'p',
                    null,
                    x('formField.formFieldPopup.height')
                  ),
                  a.a.createElement(C, {
                    className: 'customHeightInput',
                    initialValue: F,
                    onChange: function (e) {
                      G(e), u(e * (72 / k[E[T]]));
                    },
                    unit: E[T],
                  })
                )
              )
            )
          );
        },
        B =
          (n(65), n(53), n(128), n(34), n(72), n(75), n(73), n(1607), n(1473));
      function R(e) {
        return (R =
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
      function H(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function z(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== R(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || 'default');
                if ('object' !== R(o)) return o;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === R(t) ? t : String(t);
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
      function F(e, t) {
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
              var o,
                a,
                r,
                i,
                l = [],
                p = !0,
                s = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  p = !1;
                } else
                  for (
                    ;
                    !(p = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    p = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !p &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return G(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return G(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function G(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var W = a.a.forwardRef(function (e, t) {
        var n = e.sourceDocument,
          r = e.closeModal,
          i = e.clearLoadedFile,
          l = e.insertPages,
          s = e.loadedDocumentPageCount,
          c = e.closeModalWarning,
          u = e.insertNewPageIndexes,
          m = void 0 === u ? [1] : u,
          b = F(Object(p.a)(), 1)[0],
          g = F(Object(o.useState)({}), 2),
          y = g[0],
          x = g[1],
          w = F(Object(o.useState)(!0), 2),
          v = w[0],
          E = w[1],
          k = F(Object(o.useState)([m[0]]), 2),
          I = k[0],
          A = k[1],
          N = F(Object(o.useState)(!0), 2),
          M = N[0],
          S = N[1],
          j = F(Object(o.useState)(''), 2),
          O = j[0],
          _ = j[1];
        Object(o.useEffect)(
          function () {
            for (var e = n.getPageCount(), t = {}, o = 1; o <= e; o++)
              t[o] = !0;
            x(t);
          },
          [n]
        );
        var C = function () {
            return Object.keys(y).reduce(function (e, t) {
              return y[t] && e.push(parseInt(t)), e;
            }, []);
          },
          L = function () {
            S(!M);
          };
        return a.a.createElement(
          'div',
          {
            className: 'insert-uploaded-page-panel',
            onMouseDown: function (e) {
              return e.stopPropagation();
            },
            ref: t,
          },
          a.a.createElement('div', { className: 'swipe-indicator' }),
          a.a.createElement(
            'div',
            { className: 'header' },
            a.a.createElement(
              'div',
              { className: 'left-header' },
              a.a.createElement(d.a, {
                img: 'icon-arrow-back',
                onClick: i,
                dataElement: 'insertFromFileBackButton',
                title: b('action.back'),
              }),
              b('insertPageModal.selectPages'),
              ' ',
              '('.concat(v ? 0 : C().length, ')')
            ),
            a.a.createElement(d.a, {
              className: 'insertPageModalCloseButton',
              img: 'icon-close',
              onClick: function () {
                c();
              },
              title: 'action.cancel',
            })
          ),
          a.a.createElement(
            'div',
            { className: 'modal-body' },
            a.a.createElement(
              'div',
              { className: 'insert-blank-page-controls' },
              a.a.createElement(
                'div',
                { className: 'insert-page-location-options' },
                a.a.createElement(
                  'span',
                  { className: 'insert-page-titles ' },
                  b('insertPageModal.pagePlacements.header')
                ),
                a.a.createElement(
                  'div',
                  { className: 'insert-page-options' },
                  a.a.createElement(f.a, {
                    label: b('insertPageModal.pagePlacements.above'),
                    radio: !0,
                    name: 'insertPagePosition',
                    checked: M,
                    onChange: L,
                  }),
                  a.a.createElement(f.a, {
                    label: b('insertPageModal.pagePlacements.below'),
                    radio: !0,
                    name: 'insertPagePosition',
                    checked: !M,
                    onChange: L,
                  })
                )
              ),
              a.a.createElement(
                'div',
                { className: 'insert-page-location' },
                a.a.createElement(
                  'span',
                  { className: 'insert-page-titles ' },
                  b('insertPageModal.pageLocations.specifyLocation')
                ),
                a.a.createElement(
                  'div',
                  { className: 'insert-page-input' },
                  b('insertPageModal.page'),
                  ':',
                  a.a.createElement(h.a, {
                    selectedPageNumbers: I,
                    onBlurHandler: function (e) {
                      _(null);
                      var t = e[0] ? [e[0]] : [];
                      A(t);
                    },
                    pageCount: s,
                    onError: function (e) {
                      e &&
                        _(
                          ''.concat(b('message.errorPageNumber'), ' ').concat(s)
                        );
                    },
                  }),
                  O &&
                    a.a.createElement(
                      'div',
                      { className: 'page-number-error' },
                      O
                    )
                )
              )
            ),
            a.a.createElement(
              'div',
              {
                className: P()('modal-body-thumbnail-container', {
                  isLoading: v,
                }),
              },
              a.a.createElement(B.a, {
                document: n,
                onThumbnailSelected: function (e) {
                  void 0 === y[e] ? (y[e] = !0) : (y[e] = !y[e]),
                    x(
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? H(Object(n), !0).forEach(function (t) {
                                z(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(n)
                                )
                              : H(Object(n)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(n, t)
                                  );
                                });
                        }
                        return e;
                      })({}, y)
                    );
                },
                selectedThumbnails: y,
                onfileLoadedHandler: E,
              })
            )
          ),
          a.a.createElement(
            'div',
            { className: P()('insert-page-footer', { isFileSelected: !v }) },
            a.a.createElement(
              'button',
              {
                className: P()('deselect-thumbnails', { disabled: v }),
                onClick: function () {
                  x({});
                },
                disabled: v,
              },
              b('action.deselectAll')
            ),
            a.a.createElement(d.a, {
              className: 'modal-btn',
              onClick: function () {
                var e = I[0];
                if (e) {
                  var t = M ? e : ++e;
                  t > s && (t = null), l(n, C(), t);
                }
                r();
              },
              label: b('insertPageModal.button'),
              disabled: 0 === C().length || v || 0 === I.length,
            })
          )
        );
      });
      W.displayName = W;
      var U = W;
      function $() {
        return ($ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      var V = a.a.forwardRef(function (e, t) {
        var n = Object(r.d)(),
          o = e.closeModal;
        return a.a.createElement(
          U,
          $({}, e, {
            insertPages: g.h,
            closeModalWarning: function () {
              return Object(g.c)(o, n);
            },
            ref: t,
          })
        );
      });
      V.displayName = 'InsertUploadedPagePanelContainer';
      var J = V,
        K = n(430);
      n(1609);
      function Y(e) {
        return (Y =
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
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          r = a.iterator || '@@iterator',
          i = a.asyncIterator || '@@asyncIterator',
          l = a.toStringTag || '@@toStringTag';
        function p(e, t, n) {
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
          p({}, '');
        } catch (e) {
          p = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function s(e, t, n, a) {
          var r = t && t.prototype instanceof u ? t : u,
            i = Object.create(r.prototype),
            l = new I(a || []);
          return o(i, '_invoke', { value: v(e, n, l) }), i;
        }
        function c(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = s;
        var d = {};
        function u() {}
        function m() {}
        function b() {}
        var g = {};
        p(g, r, function () {
          return this;
        });
        var f = Object.getPrototypeOf,
          h = f && f(f(A([])));
        h && h !== t && n.call(h, r) && (g = h);
        var y = (b.prototype = u.prototype = Object.create(g));
        function x(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            p(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          var a;
          o(this, '_invoke', {
            value: function (o, r) {
              function i() {
                return new t(function (a, i) {
                  !(function o(a, r, i, l) {
                    var p = c(e[a], e, r);
                    if ('throw' !== p.type) {
                      var s = p.arg,
                        d = s.value;
                      return d && 'object' == Y(d) && n.call(d, '__await')
                        ? t.resolve(d.__await).then(
                            function (e) {
                              o('next', e, i, l);
                            },
                            function (e) {
                              o('throw', e, i, l);
                            }
                          )
                        : t.resolve(d).then(
                            function (e) {
                              (s.value = e), i(s);
                            },
                            function (e) {
                              return o('throw', e, i, l);
                            }
                          );
                    }
                    l(p.arg);
                  })(o, r, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function v(e, t, n) {
          var o = 'suspendedStart';
          return function (a, r) {
            if ('executing' === o)
              throw new Error('Generator is already running');
            if ('completed' === o) {
              if ('throw' === a) throw r;
              return N();
            }
            for (n.method = a, n.arg = r; ; ) {
              var i = n.delegate;
              if (i) {
                var l = P(i, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === o) throw ((o = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = 'executing';
              var p = c(e, t, n);
              if ('normal' === p.type) {
                if (
                  ((o = n.done ? 'completed' : 'suspendedYield'), p.arg === d)
                )
                  continue;
                return { value: p.arg, done: n.done };
              }
              'throw' === p.type &&
                ((o = 'completed'), (n.method = 'throw'), (n.arg = p.arg));
            }
          };
        }
        function P(e, t) {
          var n = t.method,
            o = e.iterator[n];
          if (void 0 === o)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                P(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = c(o, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), d
            );
          var r = a.arg;
          return r
            ? r.done
              ? ((t[e.resultName] = r.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : r
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function k(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function I(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function A(e) {
          if (e) {
            var t = e[r];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function t() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (t.value = e[o]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (m.prototype = b),
          o(y, 'constructor', { value: b, configurable: !0 }),
          o(b, 'constructor', { value: m, configurable: !0 }),
          (m.displayName = p(b, l, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === m || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), p(e, l, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          x(w.prototype),
          p(w.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, o, a, r) {
            void 0 === r && (r = Promise);
            var i = new w(s(t, n, o, a), r);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          x(y),
          p(y, l, 'Generator'),
          p(y, r, function () {
            return this;
          }),
          p(y, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var o in t) n.push(o);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var o = n.pop();
                  if (o in t) return (e.value = o), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = A),
          (I.prototype = {
            constructor: I,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
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
              function o(n, o) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (t.next = n),
                  o && ((t.method = 'next'), (t.arg = void 0)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var r = this.tryEntries[a],
                  i = r.completion;
                if ('root' === r.tryLoc) return o('end');
                if (r.tryLoc <= this.prev) {
                  var l = n.call(r, 'catchLoc'),
                    p = n.call(r, 'finallyLoc');
                  if (l && p) {
                    if (this.prev < r.catchLoc) return o(r.catchLoc, !0);
                    if (this.prev < r.finallyLoc) return o(r.finallyLoc);
                  } else if (l) {
                    if (this.prev < r.catchLoc) return o(r.catchLoc, !0);
                  } else {
                    if (!p)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < r.finallyLoc) return o(r.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, 'finallyLoc') &&
                  this.prev < a.finallyLoc
                ) {
                  var r = a;
                  break;
                }
              }
              r &&
                ('break' === e || 'continue' === e) &&
                r.tryLoc <= t &&
                t <= r.finallyLoc &&
                (r = null);
              var i = r ? r.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                r
                  ? ((this.method = 'next'), (this.next = r.finallyLoc), d)
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
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var a = o.arg;
                    k(n);
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
                d
              );
            },
          }),
          e
        );
      }
      function Q(e, t, n, o, a, r, i) {
        try {
          var l = e[r](i),
            p = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(p) : Promise.resolve(p).then(o, a);
      }
      function X(e, t) {
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
              var o,
                a,
                r,
                i,
                l = [],
                p = !0,
                s = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  p = !1;
                } else
                  for (
                    ;
                    !(p = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    p = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !p &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return Z(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Z(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var ee = { loadAsPDF: !0, l: window.sampleL },
        te = function (e) {
          var t = e.loadedDocumentPageCount,
            n = X(
              Object(r.e)(function (e) {
                return [
                  l.a.getSelectedThumbnailPageIndexes(e),
                  l.a.getCurrentPage(e),
                  l.a.getSelectedTab(e, s.a.INSERT_PAGE_MODAL),
                ];
              }),
              3
            ),
            f = n[0],
            h = n[1],
            y = n[2],
            x = X(Object(o.useState)(null), 2),
            w = x[0],
            v = x[1],
            P = X(Object(o.useState)(!1), 2),
            E = P[0],
            k = P[1],
            I = X(Object(o.useState)([]), 2),
            A = I[0],
            N = I[1],
            M = X(Object(o.useState)(1), 2),
            S = M[0],
            j = M[1],
            O = X(Object(o.useState)(0), 2),
            _ = O[0],
            C = O[1],
            L = X(Object(o.useState)(0), 2),
            T = L[0],
            B = L[1];
          Object(o.useEffect)(
            function () {
              var e =
                f.length > 0
                  ? f.map(function (e) {
                      return e + 1;
                    })
                  : [h];
              N(e);
            },
            [f]
          );
          var R,
            H,
            z = Object(r.d)(),
            F = X(Object(p.a)(), 1)[0],
            G = function () {
              z(i.a.closeElement(s.a.INSERT_PAGE_MODAL));
            },
            W = function () {
              if (E)
                for (
                  var e = function (e) {
                      Object(g.g)(
                        A.map(function (t, n) {
                          return t + (n + 1) * e;
                        }),
                        T,
                        _
                      );
                    },
                    t = 0;
                  t < S;
                  ++t
                )
                  e(t);
              else
                for (
                  var n = function (e) {
                      Object(g.f)(
                        A.map(function (t, n) {
                          return t + (n + 1) * e;
                        }),
                        T,
                        _
                      );
                    },
                    o = 0;
                  o < S;
                  ++o
                )
                  n(o);
              G();
            },
            U = (function () {
              var e,
                t =
                  ((e = q().mark(function e(t) {
                    var n;
                    return q().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!(t instanceof instance.Core.Document)) {
                                e.next = 4;
                                break;
                              }
                              (n = t), (e.next = 13);
                              break;
                            case 4:
                              return (
                                (e.prev = 4),
                                (e.next = 7),
                                b.a.createDocument(t, ee)
                              );
                            case 7:
                              (n = e.sent), (e.next = 13);
                              break;
                            case 10:
                              (e.prev = 10),
                                (e.t0 = e.catch(4)),
                                console.error('File type not supported');
                            case 13:
                              v(n);
                            case 14:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[4, 10]]
                    );
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (o, a) {
                      var r = e.apply(t, n);
                      function i(e) {
                        Q(r, o, a, i, l, 'next', e);
                      }
                      function l(e) {
                        Q(r, o, a, i, l, 'throw', e);
                      }
                      i(void 0);
                    });
                  });
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            $ = function () {
              v(null);
            };
          return a.a.createElement(
            m.a,
            {
              onSwipedUp: G,
              onSwipedDown: G,
              preventDefaultTouchmoveEvent: !0,
            },
            a.a.createElement(
              'div',
              {
                className: 'Modal open InsertPageModal',
                'data-element': s.a.INSERT_PAGE_MODAL,
                onMouseDown: w
                  ? function () {
                      Object(g.c)(G, z);
                    }
                  : G,
              },
              a.a.createElement(
                u.a,
                { locked: !0 },
                w
                  ? a.a.createElement(J, {
                      sourceDocument: w,
                      closeModal: G,
                      clearLoadedFile: $,
                      loadedDocumentPageCount: t,
                      insertNewPageIndexes: A,
                    })
                  : ((R = y === s.a.INSERT_FROM_FILE_TAB),
                    (H = {
                      insertNewPageBelow: E,
                      insertNewPageIndexes: A,
                      numberOfBlankPagesToInsert: S,
                      setInsertNewPageBelow: k,
                      setInsertNewPageIndexes: N,
                      setNumberOfBlankPagesToInsert: j,
                      setInsertPageHeight: C,
                      setInsertPageWidth: B,
                      loadedDocumentPageCount: t,
                    }),
                    a.a.createElement(
                      'div',
                      {
                        className: 'container tabs',
                        onClick: function (e) {
                          return e.stopPropagation();
                        },
                        onMouseDown: function (e) {
                          return e.stopPropagation();
                        },
                      },
                      a.a.createElement('div', {
                        className: 'swipe-indicator',
                      }),
                      a.a.createElement(
                        c.d,
                        {
                          className: 'insert-page-tabs',
                          id: s.a.INSERT_PAGE_MODAL,
                        },
                        a.a.createElement(
                          'div',
                          { className: 'header-container' },
                          a.a.createElement(
                            'div',
                            { className: 'header' },
                            a.a.createElement(
                              'p',
                              null,
                              F('insertPageModal.title')
                            ),
                            a.a.createElement(d.a, {
                              className: 'insertPageModalCloseButton',
                              img: 'icon-close',
                              onClick: G,
                              title: 'action.close',
                            })
                          ),
                          a.a.createElement(
                            'div',
                            { className: 'tab-list' },
                            a.a.createElement(
                              c.a,
                              { dataElement: s.a.INSERT_BLANK_PAGE_TAB },
                              a.a.createElement(
                                'button',
                                { className: 'tab-options-button' },
                                F('insertPageModal.tabs.blank')
                              )
                            ),
                            a.a.createElement('div', {
                              className: 'tab-options-divider',
                            }),
                            a.a.createElement(
                              c.a,
                              { dataElement: s.a.INSERT_FROM_FILE_TAB },
                              a.a.createElement(
                                'button',
                                { className: 'tab-options-button' },
                                F('insertPageModal.tabs.upload')
                              )
                            )
                          )
                        ),
                        a.a.createElement('div', { className: 'divider' }),
                        a.a.createElement(
                          c.c,
                          { dataElement: s.a.INSERT_BLANK_PAGE_PANEL },
                          a.a.createElement(D, H)
                        ),
                        a.a.createElement(
                          c.c,
                          { dataElement: s.a.INSERT_FROM_FILE_PANEL },
                          a.a.createElement(
                            'div',
                            { className: 'panel-body' },
                            a.a.createElement(K.a, { onFileProcessed: U })
                          )
                        )
                      ),
                      a.a.createElement('div', { className: 'divider' }),
                      a.a.createElement(
                        'div',
                        { className: 'footer' },
                        a.a.createElement(d.a, {
                          className: 'insertPageModalConfirmButton',
                          label: 'insertPageModal.button',
                          onClick: W,
                          disabled: T <= 0 || _ <= 0 || R || 0 === A.length,
                        })
                      )
                    ))
              )
            )
          );
        };
      function ne(e, t) {
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
              var o,
                a,
                r,
                i,
                l = [],
                p = !0,
                s = !1;
              try {
                if (((r = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  p = !1;
                } else
                  for (
                    ;
                    !(p = (o = r.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    p = !0
                  );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  if (
                    !p &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return oe(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return oe(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function oe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var ae = function () {
        var e = ne(
            Object(r.e)(function (e) {
              return [
                l.a.isElementDisabled(e, s.a.INSERT_PAGE_MODAL),
                l.a.isElementOpen(e, s.a.INSERT_PAGE_MODAL),
              ];
            }),
            2
          ),
          t = e[0],
          n = e[1];
        if (!t && n) {
          var o = b.a.getTotalPages();
          return a.a.createElement(te, { loadedDocumentPageCount: o });
        }
        return null;
      };
      t.default = ae;
    },
  },
]);
//# sourceMappingURL=24.chunk.js.map
