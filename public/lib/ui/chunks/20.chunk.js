(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    1550: function (e, t, n) {
      var r = n(27),
        a = n(1551);
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
    1551: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ink-signature{width:100%;height:100%;padding:16px}.ink-signature-canvas-container{display:flex;flex-direction:column;background:var(--signature-draw-background);border-radius:4px;border:1px solid var(--modal-stroke-and-border);padding:8px;height:200px}.ink-signature-canvas-container.full-signature{flex:1.5 0 0}.ink-signature-canvas-container.initials{flex:1 0 0}.ink-signature .ink-signature-canvas{height:144px;border-bottom:1px solid var(--modal-stroke-and-border)}@media(max-height:500px){.App:not(.is-web-component) .ink-signature .ink-signature-canvas{height:116px}}@container (max-height: 500px){.App.is-web-component .ink-signature .ink-signature-canvas{height:116px}}@media(max-height:320px){.App:not(.is-web-component) .ink-signature .ink-signature-canvas{height:86px}}@container (max-height: 320px){.App.is-web-component .ink-signature .ink-signature-canvas{height:86px}}.ink-signature-canvas{z-index:1;width:inherit;height:inherit;cursor:crosshair}.ink-signature-footer{display:flex;flex-direction:row;border-top:1px solid var(--modal-stroke-and-border);padding-top:7px}.ink-signature-sign-here{color:var(--faded-text);height:48px;text-align:center;font-size:10px;flex:2 0 0}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.ink-signature-sign-here{left:44.5%}}.ink-signature .canvas-colorpalette-container{padding:0;box-sizing:border-box;display:flex;flex-direction:column}.ink-signature .colorpalette-clear-container{display:flex;height:44px;justify-content:space-between}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1552: function (e, t, n) {
      var r = n(27),
        a = n(1553);
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
    1553: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.text-signature{width:100%;height:100%;padding:16px}.text-signature canvas{display:none}.text-signature-input{outline:none;width:100%;background:transparent;border:none;border-bottom:1px solid var(--modal-stroke-and-border);border-radius:0;text-align:center;height:85px}@media(max-height:500px){.App:not(.is-web-component) .text-signature-input{font-size:42px!important;height:50px}}@container (max-height: 500px){.App.is-web-component .text-signature-input{font-size:42px!important;height:50px}}@media(max-height:320px){.App:not(.is-web-component) .text-signature-input{font-size:34px!important}}@container (max-height: 320px){.App.is-web-component .text-signature-input{font-size:34px!important}}.text-signature-input:focus{border:none;border-bottom:1px solid var(--modal-stroke-and-border)}.text-signature-inner-container{position:absolute;height:100%;min-width:100%}.text-signature-text{display:flex;align-items:center;background:var(--signature-draw-background);white-space:nowrap;border-radius:4px;padding:0 8px;margin-top:10px;overflow-y:auto;flex-grow:1;visibility:hidden;position:fixed}.text-signature-text:hover{cursor:pointer}.text-signature-text .text-container{margin:auto;padding:0 20px}.text-signature label{margin-top:60px;width:100%}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1554: function (e, t, n) {
      var r = n(27),
        a = n(1555);
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
    1555: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.image-signature{width:100%;height:100%;padding:16px}@media(max-height:500px){.App:not(.is-web-component) .image-signature{height:192px}}@container (max-height: 500px){.App.is-web-component .image-signature{height:192px}}@media(max-height:320px){.App:not(.is-web-component) .image-signature{height:162px}}@container (max-height: 320px){.App.is-web-component .image-signature{height:162px}}.image-signature .image-signature-modal-overlay{position:absolute;width:100%;height:480px;background:transparent;z-index:9999;left:0;top:-100px}.image-signature-image-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.image-signature-image-container img{max-height:100%;max-width:100%;width:auto;height:auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.image-signature-image-container img{flex-grow:1;flex-basis:0}}.image-signature-image-container .Button{position:absolute;bottom:0;right:0}.image-signature .mobile{background:var(--signature-draw-background);border:1px solid var(--modal-stroke-and-border)}.image-signature-upload-container{position:relative;border-radius:4px;border:1px dashed var(--modal-stroke-and-border);display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.image-signature-upload-container.dragging{background:var(--image-signature-drop-background);border:1px dashed var(--image-signature-drop-border)}.image-signature-dnd,.image-signature-separator{color:var(--faded-text)}.image-signature-upload input[type=file]{display:none}.image-signature-upload .pick-image-button{font-weight:700;height:24px;border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);display:flex;align-items:center;padding:0 11px;cursor:pointer}.image-signature-upload .pick-image-button:hover{border:1px solid var(--primary-button-hover);color:var(--primary-button-hover)}.image-signature-separator{margin:10px}.image-signature-error{position:absolute;color:red;bottom:0;right:0;margin:0 5px 5px 0}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1556: function (e, t, n) {
      var r = n(27),
        a = n(1557);
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
    1557: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.SavedSignatures{width:100%;height:276px;padding:16px;overflow-y:auto;display:flex;grid-gap:16px;gap:16px;flex-direction:column}@media(max-height:500px){.App:not(.is-web-component) .SavedSignatures{height:192px}}@container (max-height: 500px){.App.is-web-component .SavedSignatures{height:192px}}@media(max-height:320px){.App:not(.is-web-component) .SavedSignatures{height:162px}}@container (max-height: 320px){.App.is-web-component .SavedSignatures{height:162px}}.SavedSignatures .signature-row{display:flex;flex-direction:column;justify-content:center;height:25%;width:100%}.SavedSignatures .signature-row .inputContainer{width:100%;display:grid;grid-gap:8px;gap:8px;align-items:center;grid-template-columns:20px 1fr}.SavedSignatures .signature-row .inputContainer input{width:16px;height:16px}.SavedSignatures .signature-row .inputContainer .contentContainer{padding-bottom:4px;margin-bottom:4px;border-bottom:1px solid var(--gray-5);display:grid;align-items:center;grid-template-columns:1fr 1fr 1fr}.SavedSignatures .signature-row .inputContainer .contentContainer .icon-button{justify-self:end}.SavedSignatures .signature-row .inputContainer .contentContainer .radioButton{border-radius:100px;border:1px solid var(--blue-5);width:16px;height:16px;border-spacing:2px}.SavedSignatures .signature-row .inputContainer .contentContainer .radioButton.selected{background-color:var(--blue-5)}.SavedSignatures .signature-row .inputContainer .contentContainer .imgContainer{width:162px;height:26px}.SavedSignatures .signature-row .inputContainer .contentContainer .imgContainer img{max-width:100%;max-height:100%}.SavedSignatures .signature-row .labelContainer{display:grid;grid-template-columns:1fr 2fr;padding-left:28px;color:var(--gray-7)}.SavedSignatures .signature-row.no-initials .contentContainer{grid-template-columns:1fr 2fr}.SavedSignatures .emptyListContainer{height:100%;display:flex;align-items:center;justify-content:center;text-align:center}.SavedSignatures.empty{grid-template-rows:1fr}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1558: function (e, t, n) {
      var r = n(27),
        a = n(1559);
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
    1559: function (e, t, n) {
      (t = e.exports = n(28)(!1)).push([
        e.i,
        '.open.SignatureModal{visibility:visible}.closed.SignatureModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.SignatureModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.SignatureModal .modal-container .wrapper .modal-content{padding:10px}.SignatureModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.SignatureModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.SignatureModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.SignatureModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.SignatureModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.SignatureModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.SignatureModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.SignatureModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.SignatureModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.SignatureModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureModal .footer .modal-button{padding:23px 8px}}.SignatureModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureModal .swipe-indicator{display:none}}.SignatureModal .container{box-shadow:0 0 3px 0 var(--document-box-shadow);overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .SignatureModal .container,.SignatureModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .SignatureModal .container,.SignatureModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureModal .container,.SignatureModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureModal .container,.SignatureModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.SignatureModal .container .tab-list{width:100%;height:28px;display:flex;border-radius:4px;border:1px solid var(--border);color:var(--text-color)}.SignatureModal .container .tab-list .tab-options-button{text-align:center;vertical-align:middle;line-height:24px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1;border-radius:0;cursor:pointer}.SignatureModal .container .tab-list .tab-options-button:first-child{border-bottom-left-radius:4px;border-top-left-radius:4px}.SignatureModal .container .tab-list .tab-options-button:last-child{border-bottom-right-radius:4px;border-top-right-radius:4px}.SignatureModal .container .tab-list .tab-options-button:hover{background:var(--popup-button-hover)}.SignatureModal .container .tab-list .tab-options-button.selected{background:var(--popup-button-active);cursor:default}.SignatureModal .container .tab-list .tab-options-divider{width:1px;background:var(--divider)}.SignatureModal .container .tab-panel{width:100%;display:flex;flex-direction:column;align-items:center}.SignatureModal .container{display:flex;flex-direction:column;justify-content:space-between;width:480px;padding:0;border-radius:4px;box-shadow:0 0 3px var(--document-box-shadow);background:var(--component-background)}.SignatureModal .container.include-initials{width:664px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureModal .container{border-radius:0;height:440px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureModal .container{border-radius:0;height:440px}}@media(max-height:320px){.App:not(.is-web-component) .SignatureModal .container{display:grid;height:100%;position:fixed;top:0;grid-template-rows:100px auto 70px;justify-content:normal}}@container (max-height: 320px){.App.is-web-component .SignatureModal .container{display:grid;height:100%;position:fixed;top:0;grid-template-rows:100px auto 70px;justify-content:normal}}.SignatureModal .container .header-container{box-shadow:inset 0 -1px 0 var(--modal-stroke-and-border);padding:20px 16px 16px}.SignatureModal .container .header{margin:0;display:flex;align-items:center;width:100%;height:24px}.SignatureModal .container .header p{font-size:16px;font-weight:700;width:89.286%;margin:0 16px 0 0}.SignatureModal .container .header .signatureModalCloseButton{position:static;height:32px;width:32px}.SignatureModal .container .header .signatureModalCloseButton:hover{background:var(--view-header-button-hover);border-radius:4px}.SignatureModal .container .header .signatureModalCloseButton.selected{background:var(--view-header-button-active);cursor:default}.SignatureModal .container .StylePopup{border-radius:0;box-shadow:none}.SignatureModal .container .tab-panel{overflow-y:auto}.SignatureModal .container .tab-list{font-size:14px;margin-top:12px}.SignatureModal .container .tab-list .tab-options-button{padding:0;border:none;background-color:transparent}:host(:not([data-tabbing=true])) .SignatureModal .container .tab-list .tab-options-button,html:not([data-tabbing=true]) .SignatureModal .container .tab-list .tab-options-button{outline:none}.SignatureModal .container .signature-style-options{width:90%;display:flex}.SignatureModal .container .signature-style-options .ColorPalette{margin:8px;grid-template-columns:repeat(3,1fr);width:100px}.SignatureModal .container .signature-style-options .ColorPalette :not(:last-child){margin-right:8px}.SignatureModal .container .signature-style-options .ColorPalette .cell-container{width:28px;height:28px}@media(max-height:320px){.App:not(.is-web-component) .SignatureModal .container .signature-style-options .ColorPalette .cell-container{width:22px;height:22px}}@container (max-height: 320px){.App.is-web-component .SignatureModal .container .signature-style-options .ColorPalette .cell-container{width:22px;height:22px}}.SignatureModal .container .signature-style-options .ColorPalette .cell-container .cell-outer .cell{width:16px;height:16px}@media(max-height:320px){.App:not(.is-web-component) .SignatureModal .container .signature-style-options .ColorPalette .cell-container .cell-outer .cell{width:14px;height:14px}}@container (max-height: 320px){.App.is-web-component .SignatureModal .container .signature-style-options .ColorPalette .cell-container .cell-outer .cell{width:14px;height:14px}}.SignatureModal .container .signature-style-options .ColorPalette .cell-container .cell-outer.active{width:28px;height:28px}@media(max-height:320px){.App:not(.is-web-component) .SignatureModal .container .signature-style-options .ColorPalette .cell-container .cell-outer.active{width:22px;height:22px}}@container (max-height: 320px){.App.is-web-component .SignatureModal .container .signature-style-options .ColorPalette .cell-container .cell-outer.active{width:22px;height:22px}}.SignatureModal .container .signature-clear{background-color:transparent;color:var(--secondary-button-text);padding:0 16px;display:flex;align-items:center;justify-content:center;cursor:pointer;border:none;height:28px;width:63px;margin:auto 8px;font-size:13px}:host(:not([data-tabbing=true])) .SignatureModal .container .signature-clear,html:not([data-tabbing=true]) .SignatureModal .container .signature-clear{outline:none}.SignatureModal .container .signature-clear:enabled:hover{color:var(--secondary-button-hover)}.SignatureModal .container .signature-clear:disabled{opacity:.5}.SignatureModal .container .footer{display:flex;padding:16px;align-items:center;justify-content:flex-end;width:100%;box-shadow:inset 0 1px 0 var(--modal-stroke-and-border);margin:0}.SignatureModal .container .footer .signature-create{border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;padding:0 8px;height:32px;width:72px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer}:host(:not([data-tabbing=true])) .SignatureModal .container .footer .signature-create,html:not([data-tabbing=true]) .SignatureModal .container .footer .signature-create{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureModal .container .footer .signature-create{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureModal .container .footer .signature-create{font-size:13px}}.SignatureModal .container .footer .signature-create:enabled:hover{background:var(--primary-button-hover)}.SignatureModal .container .footer .signature-create:disabled{opacity:.5}.SignatureModal .colorpalette-clear-container{display:flex;height:44px;box-sizing:border-box;justify-content:space-between;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.SignatureModal .colorpalette-clear-container .signature-style-options{width:90%;display:flex}.SignatureModal .colorpalette-clear-container .signature-style-options .divider{display:inline-block;border-left:1px solid var(--modal-stroke-and-border);margin:auto 8px auto 16px;height:16px}.SignatureModal .colorpalette-clear-container .signature-style-options .placeholder-dropdown{width:160px;height:31px;margin:auto 0}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper{width:160px;height:31px;position:absolute;margin:6px 0 auto}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper .Dropdown{width:100%!important;height:100%;text-align:left}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper .picked-option-text{margin-right:-18px;padding-left:2px;font-size:15px}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper .arrow{flex:unset}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper .Dropdown__items{bottom:auto;top:100%;width:100%;left:0;right:auto}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper .Dropdown__items button:nth-child(n){font-size:15px}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper .Dropdown__items button:nth-child(2){font-size:13px}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper .Dropdown__items button:nth-child(4){font-size:18px}.SignatureModal .colorpalette-clear-container .signature-style-options .Dropdown__wrapper .Dropdown__item{display:block;padding-right:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;text-align:left}.SignatureModal .footer-signature-clear{padding:0;background-color:transparent;color:var(--secondary-button-text);display:flex;flex:0 0 0;align-items:baseline;justify-content:center;cursor:pointer;border:none;height:28px;width:63px;font-size:13px}:host(:not([data-tabbing=true])) .SignatureModal .footer-signature-clear,html:not([data-tabbing=true]) .SignatureModal .footer-signature-clear{outline:none}.SignatureModal .footer-signature-clear:enabled:hover{color:var(--secondary-button-hover)}.SignatureModal .footer-signature-clear:disabled{opacity:.5}.SignatureModal .signature-input{background:var(--signature-draw-background);border:1px solid var(--modal-stroke-and-border);display:flex;flex-direction:column;grid-gap:8px;gap:8px;align-items:center;justify-content:center;padding:8px;width:100%;height:200px;border-radius:4px}.SignatureModal .signature-input.full-signature{flex:1.5 0 0}.SignatureModal .signature-input.initials{flex:1 0 0}@media(max-height:500px){.App:not(.is-web-component) .SignatureModal .signature-input{height:116px}}@container (max-height: 500px){.App.is-web-component .SignatureModal .signature-input{height:116px}}@media(max-height:320px){.App:not(.is-web-component) .SignatureModal .signature-input{height:86px}}@container (max-height: 320px){.App.is-web-component .SignatureModal .signature-input{height:86px}}.SignatureModal .signature-input.image{height:244px}.SignatureModal .signature-input-footer{display:flex;flex-direction:row;width:100%}.SignatureModal .signature-input .signature-prompt{font-size:10px;color:var(--faded-text);flex:3 0 0;text-align:center}.SignatureModal .signature-and-initials-container{display:flex;flex-direction:row;grid-gap:8px;gap:8px}',
        '',
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1715: function (e, t, n) {
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
        n(66);
      var r = n(0),
        a = n.n(r),
        o = n(19),
        i = n.n(o),
        l = n(6),
        c = n(362),
        u = n(1371),
        s = n(142),
        d = n(174),
        p = n(4),
        f = n.n(p),
        h = n(236),
        g = n(182),
        m = n(314),
        v = n(148),
        y = n(124),
        b = n(1);
      n(1550);
      function x(e) {
        return (x =
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
      function w() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ w =
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
          l = a.toStringTag || '@@toStringTag';
        function c(e, t, n) {
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
          c({}, '');
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            i = Object.create(o.prototype),
            l = new O(a || []);
          return r(i, '_invoke', { value: E(e, n, l) }), i;
        }
        function s(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = u;
        var d = {};
        function p() {}
        function f() {}
        function h() {}
        var g = {};
        c(g, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(j([])));
        v && v !== t && n.call(v, o) && (g = v);
        var y = (h.prototype = p.prototype = Object.create(g));
        function b(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function S(e, t) {
          var a;
          r(this, '_invoke', {
            value: function (r, o) {
              function i() {
                return new t(function (a, i) {
                  !(function r(a, o, i, l) {
                    var c = s(e[a], e, o);
                    if ('throw' !== c.type) {
                      var u = c.arg,
                        d = u.value;
                      return d && 'object' == x(d) && n.call(d, '__await')
                        ? t.resolve(d.__await).then(
                            function (e) {
                              r('next', e, i, l);
                            },
                            function (e) {
                              r('throw', e, i, l);
                            }
                          )
                        : t.resolve(d).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return r('throw', e, i, l);
                            }
                          );
                    }
                    l(c.arg);
                  })(r, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function E(e, t, n) {
          var r = 'suspendedStart';
          return function (a, o) {
            if ('executing' === r)
              throw new Error('Generator is already running');
            if ('completed' === r) {
              if ('throw' === a) throw o;
              return L();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var l = k(i, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              r = 'executing';
              var c = s(e, t, n);
              if ('normal' === c.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              'throw' === c.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
            }
          };
        }
        function k(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                k(e, t),
                'throw' === t.method)) ||
                ('return' !== n &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = s(r, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), d
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              d);
        }
        function A(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function M(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(A, this),
            this.reset(!0);
        }
        function j(e) {
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
          return { next: L };
        }
        function L() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          r(y, 'constructor', { value: h, configurable: !0 }),
          r(h, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = c(h, l, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), c(e, l, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(S.prototype),
          c(S.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new S(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(y),
          c(y, l, 'Generator'),
          c(y, o, function () {
            return this;
          }),
          c(y, 'toString', function () {
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
          (e.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(M),
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
                  var l = n.call(o, 'catchLoc'),
                    c = n.call(o, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!c)
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
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), d)
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
                  return this.complete(n.completion, n.afterLoc), M(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var a = r.arg;
                    M(n);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: j(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function S(e, t) {
        var n =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = M(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var o,
          i = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (l = !0), (o = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function E(e, t, n, r, a, o, i) {
        try {
          var l = e[o](i),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(r, a);
      }
      function k(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              E(o, r, a, i, l, 'next', e);
            }
            function l(e) {
              E(o, r, a, i, l, 'throw', e);
            }
            i(void 0);
          });
        };
      }
      function A(e, t) {
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
                l = [],
                c = !0,
                u = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (a = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          M(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function M(e, t) {
        if (e) {
          if ('string' == typeof e) return O(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? O(e, t)
                : void 0
          );
        }
      }
      function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var j = {
          isModalOpen: f.a.bool,
          isTabPanelSelected: f.a.bool,
          disableCreateButton: f.a.func,
          enableCreateButton: f.a.func,
          isInitialsModeEnabled: f.a.bool,
        },
        L = function (e) {
          var t,
            n = e.isModalOpen,
            o = e.isTabPanelSelected,
            i = e.disableCreateButton,
            l = e.enableCreateButton,
            u = e.isInitialsModeEnabled,
            s = void 0 !== u && u,
            p = Object(r.useRef)(),
            f = Object(r.useRef)(),
            x = Object(r.useRef)(),
            E = Object(r.useRef)(),
            M = A(Object(c.a)(), 1)[0],
            O = A(Object(r.useState)({}), 2),
            j = O[0],
            L = O[1],
            C = A(Object(r.useState)(!1), 2),
            N = C[0],
            _ = C[1],
            I = A(Object(r.useState)(!1), 2),
            T = I[0],
            D = I[1],
            P =
              ((t = A(Object(r.useState)(!1), 2)[1]),
              function () {
                return t(function (e) {
                  return !e;
                });
              });
          Object(r.useEffect)(function () {
            var e = b.a.getTool('AnnotationCreateSignature'),
              t = p.current;
            e.setSignatureCanvas(t);
            var n = window.Core.getCanvasMultiplier();
            t.getContext('2d').scale(n, n);
            var r = f.current;
            e.setInitialsCanvas(r), r.getContext('2d').scale(n, n);
          }, []),
            Object(r.useEffect)(
              function () {
                n && (R(), F());
              },
              [n]
            ),
            Object(r.useEffect)(
              function () {
                function e() {
                  return (e = k(
                    w().mark(function e() {
                      var t, r, a, i;
                      return w().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!n || !o) {
                                  e.next = 21;
                                  break;
                                }
                                (t = b.a.getToolsFromAllDocumentViewers(
                                  'AnnotationCreateSignature'
                                )),
                                  (r = S(t)),
                                  (e.prev = 3),
                                  r.s();
                              case 5:
                                if ((a = r.n()).done) {
                                  e.next = 13;
                                  break;
                                }
                                return (
                                  (i = a.value).setSignature(x.current),
                                  i.setInitials(E.current),
                                  (e.next = 11),
                                  i.resizeCanvas(y.a.FULL_SIGNATURE)
                                );
                              case 11:
                                e.next = 5;
                                break;
                              case 13:
                                e.next = 18;
                                break;
                              case 15:
                                (e.prev = 15), (e.t0 = e.catch(3)), r.e(e.t0);
                              case 18:
                                return (e.prev = 18), r.f(), e.finish(18);
                              case 21:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[3, 15, 18, 21]]
                      );
                    })
                  )).apply(this, arguments);
                }
                function t() {
                  return (t = k(
                    w().mark(function e() {
                      var t, r, a, i;
                      return w().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!(n && o && s)) {
                                  e.next = 20;
                                  break;
                                }
                                (t = b.a.getToolsFromAllDocumentViewers(
                                  'AnnotationCreateSignature'
                                )),
                                  (r = S(t)),
                                  (e.prev = 3),
                                  r.s();
                              case 5:
                                if ((a = r.n()).done) {
                                  e.next = 12;
                                  break;
                                }
                                return (
                                  (i = a.value).setInitials(E.current),
                                  (e.next = 10),
                                  i.resizeCanvas(y.a.INITIALS)
                                );
                              case 10:
                                e.next = 5;
                                break;
                              case 12:
                                e.next = 17;
                                break;
                              case 14:
                                (e.prev = 14), (e.t0 = e.catch(3)), r.e(e.t0);
                              case 17:
                                return (e.prev = 17), r.f(), e.finish(17);
                              case 20:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[3, 14, 17, 20]]
                      );
                    })
                  )).apply(this, arguments);
                }
                !(function () {
                  e.apply(this, arguments);
                })(),
                  (function () {
                    t.apply(this, arguments);
                  })(),
                  s
                    ? x.current && E.current
                      ? l()
                      : i()
                    : x.current
                      ? l()
                      : i();
              },
              [o, n, s]
            ),
            Object(r.useEffect)(
              function () {
                function e() {
                  return (e = k(
                    w().mark(function e() {
                      var t;
                      return w().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!j.height || !j.width) {
                                e.next = 7;
                                break;
                              }
                              return (
                                (t = b.a.getTool('AnnotationCreateSignature')),
                                (e.next = 4),
                                t.resizeCanvas()
                              );
                            case 4:
                              if (!s) {
                                e.next = 7;
                                break;
                              }
                              return (e.next = 7), t.resizeCanvas(y.a.INITIALS);
                            case 7:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )).apply(this, arguments);
                }
                !(function () {
                  e.apply(this, arguments);
                })();
              },
              [j, s]
            ),
            Object(r.useEffect)(
              function () {
                !N || (s && !T) ? i() : l();
              },
              [T, N, s]
            );
          var R = Object(r.useCallback)(function () {
              b.a.getTool('AnnotationCreateSignature').clearSignatureCanvas(),
                (x.current = null),
                _(!1);
            }, []),
            F = Object(r.useCallback)(function () {
              b.a.getTool('AnnotationCreateSignature').clearInitialsCanvas(),
                (E.current = null),
                D(!1);
            }, []),
            G = (function () {
              var e = k(
                w().mark(function e() {
                  var t;
                  return w().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = b.a.getTool('AnnotationCreateSignature')),
                            (e.next = 3),
                            t.isEmptySignature()
                          );
                        case 3:
                          if (e.sent) {
                            e.next = 6;
                            break;
                          }
                          (x.current = z(
                            t.getFullSignatureAnnotation().getPaths()
                          )),
                            _(!0);
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
            B = (function () {
              var e = k(
                w().mark(function e() {
                  var t;
                  return w().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (t = b.a.getTool('AnnotationCreateSignature')),
                            t.getInitialsAnnotation() &&
                              ((E.current = z(
                                t.getInitialsAnnotation().getPaths()
                              )),
                              D(!0));
                        case 3:
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
            z = function (e) {
              for (var t = [], n = 0; n < e.length; ++n)
                for (var r = 0; r < e[n].length; ++r)
                  t[n] || (t[n] = []),
                    (t[n][r] = new window.Core.Math.Point(
                      e[n][r].x,
                      e[n][r].y
                    ));
              return t;
            },
            H = b.a.getTool('AnnotationCreateSignature').defaults,
            U = s ? {} : { display: 'none' };
          return a.a.createElement(
            d.a,
            {
              bounds: !0,
              onResize: function (e) {
                var t = e.bounds;
                return L(t);
              },
            },
            function (e) {
              var t = e.measureRef;
              return a.a.createElement(
                'div',
                { className: 'ink-signature', ref: t },
                a.a.createElement(
                  g.a,
                  {
                    onSwiping: function (e) {
                      return e.event.stopPropagation();
                    },
                    className: 'canvas-colorpalette-container',
                  },
                  a.a.createElement(
                    'div',
                    { className: 'signature-and-initials-container' },
                    a.a.createElement(
                      'div',
                      { className: 'signature-input full-signature' },
                      a.a.createElement('canvas', {
                        className: 'ink-signature-canvas',
                        onMouseUp: G,
                        onTouchEnd: G,
                        onMouseLeave: G,
                        ref: p,
                      }),
                      a.a.createElement(
                        'div',
                        { className: 'signature-input-footer' },
                        a.a.createElement(
                          'div',
                          { className: 'signature-prompt' },
                          M('option.signatureModal.drawSignature')
                        ),
                        a.a.createElement(
                          'button',
                          {
                            className: 'footer-signature-clear',
                            onClick: R,
                            disabled: !N,
                          },
                          M('action.clear')
                        )
                      )
                    ),
                    a.a.createElement(
                      'div',
                      { className: 'signature-input initials', style: U },
                      a.a.createElement('canvas', {
                        className: 'ink-signature-canvas',
                        onMouseUp: B,
                        onTouchEnd: B,
                        onMouseLeave: B,
                        ref: f,
                      }),
                      a.a.createElement(
                        'div',
                        { className: 'signature-input-footer' },
                        a.a.createElement(
                          'div',
                          { className: 'signature-prompt' },
                          M('option.signatureModal.drawInitial')
                        ),
                        a.a.createElement(
                          'button',
                          {
                            className: 'footer-signature-clear',
                            onClick: F,
                            disabled: !T,
                          },
                          M('action.clear')
                        )
                      )
                    )
                  ),
                  a.a.createElement(
                    'div',
                    { className: 'colorpalette-clear-container' },
                    a.a.createElement(
                      'div',
                      { className: 'signature-style-options' },
                      a.a.createElement(v.a, {
                        disabled: !0,
                        placeholder: 'Text Styles',
                      }),
                      a.a.createElement('div', {
                        className: 'placeholder-dropdown',
                      }),
                      a.a.createElement('div', { className: 'divider' }),
                      a.a.createElement(m.a, {
                        color: H.StrokeColor,
                        property: 'StrokeColor',
                        onStyleChange: function (e, t) {
                          return (function (e, t) {
                            Object(h.a)('AnnotationCreateSignature', e, t);
                            var n = b.a.getTool('AnnotationCreateSignature');
                            n.getFullSignatureAnnotation() &&
                              ((n.getFullSignatureAnnotation().StrokeColor = t),
                              n.resizeCanvas(y.a.FULL_SIGNATURE)),
                              n.getInitialsAnnotation() &&
                                ((n.getInitialsAnnotation().StrokeColor = t),
                                n.resizeCanvas(y.a.INITIALS)),
                              P();
                          })(e, t);
                        },
                        overridePalette2: ['#000000', '#4E7DE9', '#E44234'],
                      })
                    )
                  )
                )
              );
            }
          );
        };
      L.propTypes = j;
      var C = L,
        N = (n(98), n(39), n(32), n(52), n(64), n(146), n(121), n(35));
      n(132);
      var _ = function (e) {
          var t,
            n,
            r,
            a = e.getContext('2d'),
            o = e.width,
            i = e.height,
            l = { x: [], y: [] },
            c = a.getImageData(0, 0, e.width, e.height);
          for (n = 0; n < i; n++)
            for (t = 0; t < o; t++)
              (r = 4 * (n * o + t)),
                c.data[r + 3] > 0 && (l.x.push(t), l.y.push(n));
          l.x.sort(function (e, t) {
            return e - t;
          }),
            l.y.sort(function (e, t) {
              return e - t;
            });
          var u = l.x.length - 1;
          (o = 1 + l.x[u] - l.x[0]), (i = 1 + l.y[u] - l.y[0]);
          var s = a.getImageData(l.x[0], l.y[0], o, i);
          return (
            (e.width = o),
            (e.height = i),
            a.putImageData(s, 0, 0),
            e.toDataURL()
          );
        },
        I = n(3),
        T = (n(1552), n(23));
      function D(e, t) {
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
                l = [],
                c = !0,
                u = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (a = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return P(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return P(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function P(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var R = {
          isModalOpen: f.a.bool,
          isTabPanelSelected: f.a.bool,
          disableCreateButton: f.a.func,
          enableCreateButton: f.a.func,
          isInitialsModeEnabled: f.a.bool,
        },
        F = window.Core.getCanvasMultiplier(),
        G = function (e) {
          return null == e
            ? void 0
            : e
                .split(' ')
                .map(function (e) {
                  return e[0];
                })
                .join('')
                .toUpperCase();
        },
        B = function (e, t, n) {
          var r = ''.concat(t, 'px ').concat(n),
            a = document.createElement('span');
          (a.id = 'textSpan'),
            (a.style.display = 'inline-block'),
            (a.style.visibility = 'hidden'),
            (a.style.font = r);
          var o = Object(T.a)();
          window.isApryseWebViewerWebComponent
            ? o.appendChild(a)
            : o.getElementsByTagName('body')[0].appendChild(a),
            (a.textContent = e);
          var i = a.getBoundingClientRect().width;
          return a.remove(), i;
        },
        z = function (e, t) {
          for (var n, r = 0, a = 48; r <= a; ) {
            (n = Math.floor((r + a) / 2)),
              B(e, n, t) > 350 ? (a = n - 1) : (r = n + 1);
          }
          return n;
        },
        H = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            r = t.current.getBoundingClientRect(),
            a = r.width,
            o = r.height;
          (a += 100),
            (o += 100),
            (e.style.width = ''.concat(a, 'px')),
            (e.style.height = ''.concat(o, 'px')),
            (e.width = a * Math.max(n, F)),
            (e.height = o * Math.max(n, F));
        },
        U = function (e) {
          var t = e.canvas,
            n = e.text,
            r = e.selectedFontFamily,
            a = e.fontColor,
            o = e.overrideMultiplier,
            i = void 0 === o ? 0 : o,
            l = t.getContext('2d'),
            c = z(n, r);
          (l.fillStyle = a),
            (l.textAlign = 'center'),
            (l.textBaseline = 'middle'),
            (l.font = ''.concat(c * Math.max(i, F), 'px ').concat(r));
        },
        W = function (e, t) {
          var n = e.getContext('2d'),
            r = e.width,
            a = e.height;
          n.clearRect(0, 0, r, a), n.fillText(t, r / 2, a / 2);
        },
        V = function (e) {
          var t,
            n = e.isModalOpen,
            o = e.isTabPanelSelected,
            u = e.disableCreateButton,
            s = e.enableCreateButton,
            d = e.isInitialsModeEnabled,
            p = void 0 !== d && d,
            f = Object(l.e)(function (e) {
              return I.a.getSignatureFonts(e);
            }),
            h = Object(l.e)(function (e) {
              return I.a.getTextSignatureQuality(e);
            }),
            g = D(Object(r.useState)(''), 2),
            y = g[0],
            x = g[1],
            w = D(Object(r.useState)(''), 2),
            S = w[0],
            E = w[1],
            k = D(Object(r.useState)(!0), 2),
            A = k[0],
            M = k[1],
            O = D(
              Object(r.useState)(new window.Core.Annotations.Color('#000000')),
              2
            ),
            j = O[0],
            L = O[1],
            C = D(Object(r.useState)(48), 2),
            T = C[0],
            P = C[1],
            R = Object(r.useRef)(),
            F = Object(r.useRef)(),
            B = Object(r.useRef)(),
            V = Object(r.useRef)(),
            Y = Object(r.useRef)(),
            $ = D(Object(c.a)(), 1)[0],
            K = D(Object(r.useState)(f[0]), 2),
            J = K[0],
            Q = K[1],
            Z =
              ((t = D(Object(r.useState)(!1), 2)[1]),
              function () {
                return t(function (e) {
                  return !e;
                });
              });
          Object(r.useEffect)(
            function () {
              f.includes(J) || Q(f[0]);
            },
            [J, f]
          ),
            Object(r.useEffect)(
              function () {
                var e = B.current;
                o &&
                  (H(e, Y),
                  U({
                    canvas: e,
                    text: S,
                    selectedFontFamily: J,
                    fontColor: j,
                  }),
                  W(e, S),
                  n && X());
              },
              [o, S, f, j, J]
            ),
            Object(r.useEffect)(
              function () {
                var e = F.current;
                o &&
                  (H(e, V, h),
                  U({
                    canvas: e,
                    text: y,
                    selectedFontFamily: J,
                    fontColor: j,
                    overrideMultiplier: h,
                  }),
                  W(e, y),
                  n && q());
              },
              [o, y, f, j, J]
            ),
            Object(r.useEffect)(
              function () {
                if ((L(j), n && o)) {
                  var e = b.a.getDisplayAuthor(b.a.getCurrentUser());
                  x(e), E(G(e)), q();
                }
              },
              [n, o]
            ),
            Object(r.useEffect)(
              function () {
                var e;
                o &&
                  (null === (e = R.current) || void 0 === e || e.focus(),
                  N.i
                    ? R.current.setSelectionRange(0, 9999)
                    : R.current.select());
              },
              [o]
            ),
            Object(r.useEffect)(
              function () {
                var e = function () {
                  if (A) {
                    var e = b.a.getDisplayAuthor(b.a.getCurrentUser());
                    x(e), E(G(e)), s();
                  }
                };
                return (
                  b.a.addEventListener('updateAnnotationPermission', e),
                  function () {
                    b.a.removeEventListener('updateAnnotationPermission', e);
                  }
                );
              },
              [A]
            );
          var q = function () {
              var e = b.a.getToolsFromAllDocumentViewers(
                  'AnnotationCreateSignature'
                ),
                t = F.current;
              if ((y || '').trim()) {
                var n = _(t);
                e.forEach(function (e) {
                  return e.setSignature(n);
                }),
                  s();
              } else
                e.forEach(function (e) {
                  return e.setSignature(null);
                }),
                  u();
            },
            X = function () {
              var e = b.a.getToolsFromAllDocumentViewers(
                  'AnnotationCreateSignature'
                ),
                t = B.current;
              if ((S || '').trim()) {
                var n = _(t);
                e.forEach(function (e) {
                  return e.setInitials(n);
                }),
                  s();
              } else
                e.forEach(function (e) {
                  return e.setInitials(null);
                }),
                  u();
            },
            ee = function (e) {
              Q(e);
              var t = z(y, e);
              P(t);
            },
            te = !(n && o),
            ne = p ? {} : { display: 'none' };
          return a.a.createElement(
            'div',
            { className: 'text-signature' },
            a.a.createElement(
              'div',
              { className: 'signature-and-initials-container' },
              a.a.createElement(
                'div',
                { className: 'signature-input full-signature' },
                a.a.createElement(
                  'label',
                  null,
                  a.a.createElement('input', {
                    className: 'text-signature-input',
                    ref: R,
                    type: 'text',
                    value: y,
                    onChange: function (e) {
                      M(!1);
                      var t = e.target.value.replace(/^\s+/g, '');
                      q(), x(t), E(G(t));
                      var n = z(t, J);
                      P(n);
                    },
                    style: {
                      fontFamily: J || f,
                      fontSize: T,
                      color: j.toHexString(),
                    },
                    disabled: te,
                  })
                ),
                a.a.createElement(
                  'div',
                  { className: 'signature-input-footer' },
                  a.a.createElement(
                    'div',
                    { className: 'signature-prompt' },
                    $('option.signatureModal.typeSignature')
                  ),
                  a.a.createElement(
                    'button',
                    {
                      className: 'footer-signature-clear',
                      onClick: function () {
                        x(''), R.current.focus();
                      },
                      disabled: te || 0 === y.length,
                    },
                    $('action.clear')
                  )
                )
              ),
              a.a.createElement(
                'div',
                { className: 'signature-input initials', style: ne },
                a.a.createElement(
                  'label',
                  null,
                  a.a.createElement('input', {
                    className: 'text-signature-input',
                    type: 'text',
                    value: S,
                    onChange: function (e) {
                      M(!1);
                      var t = e.target.value.replace(/^\s+/g, '');
                      q(), E(t);
                    },
                    style: {
                      fontFamily: J || f,
                      fontSize: T,
                      color: j.toHexString(),
                    },
                    disabled: te,
                  })
                ),
                a.a.createElement(
                  'div',
                  { className: 'signature-input-footer' },
                  a.a.createElement(
                    'div',
                    { className: 'signature-prompt' },
                    $('option.signatureModal.typeInitial')
                  ),
                  a.a.createElement(
                    'button',
                    {
                      className: 'footer-signature-clear',
                      onClick: function () {
                        return E('');
                      },
                      disabled: te || 0 === S.length,
                    },
                    $('action.clear')
                  )
                )
              )
            ),
            a.a.createElement(
              'div',
              {
                className: i()({ 'text-signature-text': !0 }),
                style: { fontFamily: J, fontSize: 72, color: j.toHexString() },
              },
              a.a.createElement(
                'div',
                { className: 'text-container', ref: V },
                y
              ),
              a.a.createElement(
                'div',
                { className: 'text-container', ref: Y },
                S
              )
            ),
            a.a.createElement('canvas', { ref: F }),
            a.a.createElement('canvas', { ref: B }),
            a.a.createElement(
              'div',
              { className: 'colorpalette-clear-container' },
              a.a.createElement(
                'div',
                { className: 'signature-style-options' },
                '' !== y || ((!p || '' !== S) && p)
                  ? a.a.createElement(v.a, {
                      items: f.map(function (e) {
                        return {
                          font: e,
                          value: ''.concat(y, ' ').concat(p ? S : ''),
                        };
                      }),
                      getCustomItemStyle: function (e) {
                        return { fontFamily: e.font };
                      },
                      getKey: function (e) {
                        return e.font;
                      },
                      getDisplayValue: function (e) {
                        return e.value || e.font;
                      },
                      onClickItem: ee,
                      currentSelectionKey: J || f[0],
                      maxHeight: Object(N.l)() ? 80 : null,
                      dataElement: 'text-signature-font-dropdown',
                    })
                  : a.a.createElement(v.a, {
                      disabled: !0,
                      placeholder: $('option.signatureModal.fontStyle'),
                    }),
                a.a.createElement('div', { className: 'placeholder-dropdown' }),
                a.a.createElement('div', { className: 'divider' }),
                a.a.createElement(m.a, {
                  color: j,
                  property: 'fontColor',
                  onStyleChange: function (e, t) {
                    return (function (e, t) {
                      L(t), Z();
                    })(0, t);
                  },
                  overridePalette2: ['#000000', '#4E7DE9', '#E44234'],
                })
              )
            )
          );
        };
      V.propTypes = R;
      var Y = V,
        $ = (n(117), n(82), n(42));
      n(1554);
      function K(e) {
        return (K =
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
      function J() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ J =
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
          l = a.toStringTag || '@@toStringTag';
        function c(e, t, n) {
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
          c({}, '');
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            i = Object.create(o.prototype),
            l = new A(a || []);
          return r(i, '_invoke', { value: w(e, n, l) }), i;
        }
        function s(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = u;
        var d = {};
        function p() {}
        function f() {}
        function h() {}
        var g = {};
        c(g, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(M([])));
        v && v !== t && n.call(v, o) && (g = v);
        var y = (h.prototype = p.prototype = Object.create(g));
        function b(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          var a;
          r(this, '_invoke', {
            value: function (r, o) {
              function i() {
                return new t(function (a, i) {
                  !(function r(a, o, i, l) {
                    var c = s(e[a], e, o);
                    if ('throw' !== c.type) {
                      var u = c.arg,
                        d = u.value;
                      return d && 'object' == K(d) && n.call(d, '__await')
                        ? t.resolve(d.__await).then(
                            function (e) {
                              r('next', e, i, l);
                            },
                            function (e) {
                              r('throw', e, i, l);
                            }
                          )
                        : t.resolve(d).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return r('throw', e, i, l);
                            }
                          );
                    }
                    l(c.arg);
                  })(r, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, n) {
          var r = 'suspendedStart';
          return function (a, o) {
            if ('executing' === r)
              throw new Error('Generator is already running');
            if ('completed' === r) {
              if ('throw' === a) throw o;
              return O();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var l = S(i, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              r = 'executing';
              var c = s(e, t, n);
              if ('normal' === c.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              'throw' === c.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
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
              d
            );
          var a = s(r, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), d
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : o
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
        function A(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function M(e) {
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
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          r(y, 'constructor', { value: h, configurable: !0 }),
          r(h, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = c(h, l, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), c(e, l, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(x.prototype),
          c(x.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new x(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(y),
          c(y, l, 'Generator'),
          c(y, o, function () {
            return this;
          }),
          c(y, 'toString', function () {
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
          (e.values = M),
          (A.prototype = {
            constructor: A,
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
                  var l = n.call(o, 'catchLoc'),
                    c = n.call(o, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!c)
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
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), d)
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
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var a = r.arg;
                    k(n);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: M(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function Q(e, t, n, r, a, o, i) {
        try {
          var l = e[o](i),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(r, a);
      }
      function Z(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              Q(o, r, a, i, l, 'next', e);
            }
            function l(e) {
              Q(o, r, a, i, l, 'throw', e);
            }
            i(void 0);
          });
        };
      }
      function q(e, t) {
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
                l = [],
                c = !0,
                u = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (a = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return X(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return X(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function X(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var ee = {
          isModalOpen: f.a.bool,
          isTabPanelSelected: f.a.bool,
          disableCreateButton: f.a.func,
          enableCreateButton: f.a.func,
          isInitialsModeEnabled: f.a.bool,
        },
        te = 'fullSignature',
        ne = 'initials',
        re = ['png', 'jpg', 'jpeg'],
        ae = null;
      function oe(e) {
        return new Promise(function (t, n) {
          var r = new FileReader();
          (r.onload = function (r) {
            var a = r.target.result;
            re.some(function (e) {
              return -1 !== a.indexOf('image/'.concat(e));
            })
              ? t({ imageSource: a, fileSize: e.size })
              : n(
                  $.a.t('message.imageSignatureAcceptedFileTypes', {
                    acceptedFileTypes: re.join(', '),
                  })
                );
          }),
            r.readAsDataURL(e);
        });
      }
      var ie = function (e) {
        var t = e.isModalOpen,
          n = e.isTabPanelSelected,
          o = e.disableCreateButton,
          l = e.enableCreateButton,
          u = e.isInitialsModeEnabled,
          s = void 0 !== u && u,
          d = q(Object(r.useState)(null), 2),
          p = d[0],
          f = d[1],
          h = q(Object(r.useState)(null), 2),
          g = h[0],
          m = h[1],
          v = q(Object(r.useState)(null), 2),
          y = v[0],
          x = v[1],
          w = q(Object(r.useState)(null), 2),
          S = w[0],
          E = w[1],
          k = q(Object(r.useState)(''), 2),
          A = k[0],
          M = k[1],
          O = q(Object(r.useState)(null), 2),
          j = O[0],
          L = O[1],
          C = q(Object(r.useState)(null), 2),
          _ = C[0],
          I = C[1],
          T = Object(r.useRef)(),
          D = Object(r.useRef)(),
          P = q(Object(c.a)(), 1)[0];
        Object(r.useEffect)(
          function () {
            var e = b.a.getToolsFromAllDocumentViewers(
              'AnnotationCreateSignature'
            );
            (ae = e[0].ACCEPTED_FILE_SIZE),
              t
                ? t &&
                  n &&
                  (e.forEach(function (e) {
                    return e.setSignature(p, g);
                  }),
                  e.forEach(function (e) {
                    return e.setInitials(y, S);
                  }),
                  !p || (s && !y) ? o() : l())
                : (f(null), x(null), E(null), E(null));
          },
          [p, y, n, t, S, g, s]
        );
        var R = function (e) {
            W(e.target.files[0]);
          },
          F = function (e) {
            Y(e.target.files[0]);
          },
          G = Object(r.useCallback)(function (e, t) {
            e.preventDefault(), M(t);
          }, []),
          B = Object(r.useCallback)(function (e) {
            e.preventDefault();
          }, []),
          z = Object(r.useCallback)(function (e) {
            e.preventDefault(),
              e.target.parentNode.contains(e.relatedTarget) || M(null);
          }, []),
          H = Object(r.useCallback)(function (e) {
            e.preventDefault(), M(null);
          }, []),
          U = function (e) {
            e.preventDefault(), M(null);
            var t = e.dataTransfer.files;
            t.length && W(t[0]);
          },
          W = (function () {
            var e = Z(
              J().mark(function e(t) {
                var n, r, a;
                return J().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), oe(t);
                        case 3:
                          (n = e.sent),
                            (r = n.imageSource),
                            (a = n.fileSize),
                            L(''),
                            f(r),
                            m(a),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10), (e.t0 = e.catch(0)), L(e.t0);
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          V = function (e) {
            e.preventDefault(), M(null);
            var t = e.dataTransfer.files;
            t.length && Y(t[0]);
          },
          Y = (function () {
            var e = Z(
              J().mark(function e(t) {
                var n, r, a;
                return J().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), oe(t);
                        case 3:
                          (n = e.sent),
                            (r = n.imageSource),
                            (a = n.fileSize),
                            I(''),
                            x(r),
                            E(a),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10), (e.t0 = e.catch(0)), I(e.t0);
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          $ = Object(r.useCallback)(
            function (e) {
              G(e, te);
            },
            [G]
          ),
          K = Object(r.useCallback)(
            function (e) {
              z(e, te);
            },
            [z]
          ),
          Q = Object(r.useCallback)(
            function (e) {
              G(e, ne);
            },
            [G]
          ),
          X = Object(r.useCallback)(
            function (e) {
              z(e, ne);
            },
            [z]
          ),
          ee = function () {
            return Object(N.l)()
              ? a.a.createElement(
                  'div',
                  { className: 'image-signature-separator' },
                  P('option.signatureModal.selectImage')
                )
              : a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(
                    'div',
                    { className: 'image-signature-dnd' },
                    P('option.signatureModal.dragAndDrop')
                  ),
                  a.a.createElement(
                    'div',
                    { className: 'image-signature-separator' },
                    P('option.signatureModal.or')
                  )
                );
          },
          ie = 'number' == typeof ae && ae > 0,
          le = !ie || g < ae,
          ce = !ie || S < ae,
          ue = i()('image-signature-upload-container', {
            mobile: Object(N.l)(),
            dragging: A === te,
          }),
          se = i()('image-signature-upload-container', {
            mobile: Object(N.l)(),
            dragging: A === ne,
          }),
          de = s ? {} : { display: 'none' };
        return a.a.createElement(
          'div',
          { className: 'image-signature' },
          a.a.createElement(
            'div',
            { className: 'signature-and-initials-container' },
            a.a.createElement(
              'div',
              { className: 'signature-input image full-signature' },
              p && le
                ? a.a.createElement('img', {
                    src: p,
                    style: { maxWidth: '100%', maxHeight: '100%' },
                  })
                : a.a.createElement(
                    'div',
                    {
                      className: ue,
                      onDragEnter: $,
                      onDragLeave: K,
                      onDragOver: B,
                      onDrop: U,
                      onDragExit: H,
                    },
                    ee(),
                    a.a.createElement(
                      'div',
                      { className: 'image-signature-upload' },
                      a.a.createElement('input', {
                        ref: T,
                        id: 'upload',
                        type: 'file',
                        accept: re
                          .map(function (e) {
                            return '.'.concat(e);
                          })
                          .join(','),
                        onChange: R,
                        disabled: !(t && n),
                      }),
                      a.a.createElement(
                        'div',
                        {
                          onClick: function () {
                            return T.current.click();
                          },
                          className: 'pick-image-button',
                        },
                        P('option.signatureModal.pickImage')
                      )
                    ),
                    j &&
                      a.a.createElement(
                        'div',
                        { className: 'image-signature-error' },
                        j
                      )
                  )
            ),
            a.a.createElement(
              'div',
              { className: 'signature-input image initials', style: de },
              y && ce
                ? a.a.createElement('img', {
                    src: y,
                    style: { maxWidth: '100%', maxHeight: '100%' },
                  })
                : a.a.createElement(
                    'div',
                    {
                      className: se,
                      onDragEnter: Q,
                      onDragLeave: X,
                      onDragOver: B,
                      onDrop: V,
                      onDragExit: H,
                    },
                    ee(),
                    a.a.createElement(
                      'div',
                      { className: 'image-signature-upload' },
                      a.a.createElement('input', {
                        ref: D,
                        id: 'upload',
                        type: 'file',
                        accept: re
                          .map(function (e) {
                            return '.'.concat(e);
                          })
                          .join(','),
                        onChange: F,
                        disabled: !(t && n),
                      }),
                      a.a.createElement(
                        'div',
                        {
                          onClick: function () {
                            return D.current.click();
                          },
                          className: 'pick-image-button',
                        },
                        P('option.signatureModal.pickInitialsFile')
                      )
                    ),
                    _ &&
                      a.a.createElement(
                        'div',
                        { className: 'image-signature-error' },
                        _
                      )
                  )
            )
          )
        );
      };
      ie.propTypes = ee;
      var le = ie,
        ce = n(21),
        ue = n(2),
        se = (n(1556), n(74)),
        de = n(33);
      function pe(e) {
        return (pe =
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
      function fe() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ fe =
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
          l = a.toStringTag || '@@toStringTag';
        function c(e, t, n) {
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
          c({}, '');
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            i = Object.create(o.prototype),
            l = new A(a || []);
          return r(i, '_invoke', { value: w(e, n, l) }), i;
        }
        function s(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = u;
        var d = {};
        function p() {}
        function f() {}
        function h() {}
        var g = {};
        c(g, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(M([])));
        v && v !== t && n.call(v, o) && (g = v);
        var y = (h.prototype = p.prototype = Object.create(g));
        function b(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          var a;
          r(this, '_invoke', {
            value: function (r, o) {
              function i() {
                return new t(function (a, i) {
                  !(function r(a, o, i, l) {
                    var c = s(e[a], e, o);
                    if ('throw' !== c.type) {
                      var u = c.arg,
                        d = u.value;
                      return d && 'object' == pe(d) && n.call(d, '__await')
                        ? t.resolve(d.__await).then(
                            function (e) {
                              r('next', e, i, l);
                            },
                            function (e) {
                              r('throw', e, i, l);
                            }
                          )
                        : t.resolve(d).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return r('throw', e, i, l);
                            }
                          );
                    }
                    l(c.arg);
                  })(r, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, n) {
          var r = 'suspendedStart';
          return function (a, o) {
            if ('executing' === r)
              throw new Error('Generator is already running');
            if ('completed' === r) {
              if ('throw' === a) throw o;
              return O();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var l = S(i, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              r = 'executing';
              var c = s(e, t, n);
              if ('normal' === c.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              'throw' === c.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
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
              d
            );
          var a = s(r, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), d
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : o
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
        function A(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function M(e) {
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
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          r(y, 'constructor', { value: h, configurable: !0 }),
          r(h, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = c(h, l, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), c(e, l, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(x.prototype),
          c(x.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new x(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(y),
          c(y, l, 'Generator'),
          c(y, o, function () {
            return this;
          }),
          c(y, 'toString', function () {
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
          (e.values = M),
          (A.prototype = {
            constructor: A,
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
                  var l = n.call(o, 'catchLoc'),
                    c = n.call(o, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!c)
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
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), d)
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
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var a = r.arg;
                    k(n);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: M(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function he(e, t) {
        var n =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = ve(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var o,
          i = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (l = !0), (o = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function ge(e, t, n, r, a, o, i) {
        try {
          var l = e[o](i),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(r, a);
      }
      function me(e, t) {
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
                l = [],
                c = !0,
                u = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (a = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          ve(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ve(e, t) {
        if (e) {
          if ('string' == typeof e) return ye(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? ye(e, t)
                : void 0
          );
        }
      }
      function ye(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var be = function (e) {
          var t = e.selectedIndex,
            n = e.setSelectedIndex,
            r = Object(l.d)(),
            o = Object(c.a)().t,
            u = me(
              Object(l.e)(function (e) {
                return [
                  I.a.getDisplayedSignatures(e),
                  I.a.getSelectedDisplayedSignatureIndex(e),
                  I.a.isElementDisabled(e, 'defaultSignatureDeleteButton'),
                  I.a.getSavedInitials(e),
                  I.a.getSelectedDisplayedInitialsIndex(e),
                  I.a.getSignatureMode(e),
                  I.a.getInitialsOffset(e),
                ];
              }),
              7
            ),
            s = u[0],
            d = u[1],
            p = u[2],
            f = u[3],
            h = u[4],
            g = u[5],
            m = u[6],
            v = b.a.getToolsFromAllDocumentViewers('AnnotationCreateSignature'),
            x = (function () {
              var e,
                t =
                  ((e = fe().mark(function e(t) {
                    var n, a, o, i, l, c, u;
                    return fe().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = g === y.a.FULL_SIGNATURE),
                              (o = (a = t - m) < 0))
                            )
                              r(ue.a.setInitialsOffset(m - 1));
                            else if (
                              (v[0].deleteSavedInitials(a), h === a && !o)
                            ) {
                              r(ue.a.setSelectedDisplayedInitialsIndex(0)),
                                (i = he(v));
                              try {
                                for (i.s(); !(l = i.n()).done; )
                                  l.value.hidePreview();
                              } catch (e) {
                                i.e(e);
                              } finally {
                                i.f();
                              }
                              b.a.setToolMode(se.a);
                            }
                            if ((v[0].deleteSavedSignature(t), d === t)) {
                              r(ue.a.setSelectedDisplayedSignatureIndex(0)),
                                (c = he(v));
                              try {
                                for (c.s(); !(u = c.n()).done; )
                                  u.value.hidePreview();
                              } catch (e) {
                                c.e(e);
                              } finally {
                                c.f();
                              }
                              b.a.setToolMode(se.a);
                            } else
                              (n ? t < d : a < h) &&
                                r(
                                  ue.a.setSelectedDisplayedSignatureIndex(d - 1)
                                );
                          case 7:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (r, a) {
                      var o = e.apply(t, n);
                      function i(e) {
                        ge(o, r, a, i, l, 'next', e);
                      }
                      function l(e) {
                        ge(o, r, a, i, l, 'throw', e);
                      }
                      i(void 0);
                    });
                  });
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            w = new Array(m).concat(f);
          return a.a.createElement(
            'div',
            {
              className: i()('SavedSignatures', { empty: !s || s.length < 1 }),
            },
            s.length
              ? s.map(function (e, r) {
                  return a.a.createElement(
                    'div',
                    {
                      key: r,
                      className: i()('signature-row', {
                        active: t === r,
                        'no-initials': !(null != w && w[r]),
                      }),
                      onClick: function () {
                        return n(r);
                      },
                    },
                    a.a.createElement(
                      'div',
                      { className: 'inputContainer' },
                      a.a.createElement('input', {
                        type: 'radio',
                        onChange: function () {
                          return n(r);
                        },
                        checked: r === t,
                      }),
                      a.a.createElement(
                        'div',
                        { className: 'contentContainer' },
                        a.a.createElement(
                          'div',
                          { className: 'imgContainer' },
                          a.a.createElement('img', {
                            alt: o('option.toolsOverlay.signatureAltText'),
                            src: s[r].imgSrc,
                          })
                        ),
                        (null == w ? void 0 : w[r]) &&
                          a.a.createElement(
                            'div',
                            { className: 'imgContainer' },
                            a.a.createElement('img', {
                              alt: o('option.toolsOverlay.signatureAltText'),
                              src: w[r].imgSrc,
                            })
                          ),
                        !p &&
                          a.a.createElement(
                            'button',
                            {
                              className: 'icon-button',
                              'data-element': 'defaultSignatureDeleteButton',
                              onClick: function () {
                                return x(r);
                              },
                            },
                            a.a.createElement(de.a, {
                              glyph: 'icon-delete-line',
                            })
                          )
                      )
                    ),
                    a.a.createElement(
                      'div',
                      { className: 'labelContainer' },
                      a.a.createElement(
                        'div',
                        { className: 'signatureLabel' },
                        o('option.type.signature')
                      ),
                      (null == w ? void 0 : w[r]) &&
                        a.a.createElement(
                          'div',
                          { className: 'intialsLabel' },
                          o('option.type.initials')
                        )
                    )
                  );
                })
              : a.a.createElement(
                  'div',
                  { className: 'emptyListContainer' },
                  o('option.signatureModal.noSignatures')
                )
          );
        },
        xe = n(5),
        we = n(310);
      n(1558);
      function Se(e) {
        return (Se =
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
      function Ee() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Ee =
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
          l = a.toStringTag || '@@toStringTag';
        function c(e, t, n) {
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
          c({}, '');
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            i = Object.create(o.prototype),
            l = new A(a || []);
          return r(i, '_invoke', { value: w(e, n, l) }), i;
        }
        function s(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = u;
        var d = {};
        function p() {}
        function f() {}
        function h() {}
        var g = {};
        c(g, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(M([])));
        v && v !== t && n.call(v, o) && (g = v);
        var y = (h.prototype = p.prototype = Object.create(g));
        function b(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          var a;
          r(this, '_invoke', {
            value: function (r, o) {
              function i() {
                return new t(function (a, i) {
                  !(function r(a, o, i, l) {
                    var c = s(e[a], e, o);
                    if ('throw' !== c.type) {
                      var u = c.arg,
                        d = u.value;
                      return d && 'object' == Se(d) && n.call(d, '__await')
                        ? t.resolve(d.__await).then(
                            function (e) {
                              r('next', e, i, l);
                            },
                            function (e) {
                              r('throw', e, i, l);
                            }
                          )
                        : t.resolve(d).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return r('throw', e, i, l);
                            }
                          );
                    }
                    l(c.arg);
                  })(r, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, n) {
          var r = 'suspendedStart';
          return function (a, o) {
            if ('executing' === r)
              throw new Error('Generator is already running');
            if ('completed' === r) {
              if ('throw' === a) throw o;
              return O();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var l = S(i, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              r = 'executing';
              var c = s(e, t, n);
              if ('normal' === c.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), c.arg === d)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              'throw' === c.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg));
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
              d
            );
          var a = s(r, e.iterator, t.arg);
          if ('throw' === a.type)
            return (
              (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), d
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : o
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
        function A(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function M(e) {
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
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          r(y, 'constructor', { value: h, configurable: !0 }),
          r(h, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = c(h, l, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), c(e, l, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(x.prototype),
          c(x.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new x(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(y),
          c(y, l, 'Generator'),
          c(y, o, function () {
            return this;
          }),
          c(y, 'toString', function () {
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
          (e.values = M),
          (A.prototype = {
            constructor: A,
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
                  var l = n.call(o, 'catchLoc'),
                    c = n.call(o, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!c)
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
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), d)
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
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var a = r.arg;
                    k(n);
                  }
                  return a;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: M(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function ke(e, t, n, r, a, o, i) {
        try {
          var l = e[o](i),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(r, a);
      }
      function Ae(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              ke(o, r, a, i, l, 'next', e);
            }
            function l(e) {
              ke(o, r, a, i, l, 'throw', e);
            }
            i(void 0);
          });
        };
      }
      function Me(e, t) {
        var n =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = je(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var o,
          i = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (l = !0), (o = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function Oe(e, t) {
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
                l = [],
                c = !0,
                u = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (a = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          je(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function je(e, t) {
        if (e) {
          if ('string' == typeof e) return Le(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Le(e, t)
                : void 0
          );
        }
      }
      function Le(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Ce = function () {
        var e = Oe(
            Object(l.e)(function (e) {
              return [
                I.a.isElementDisabled(e, xe.a.SIGNATURE_MODAL),
                I.a.isElementOpen(e, xe.a.SIGNATURE_MODAL),
                I.a.getActiveToolName(e),
                I.a.getSignatureMode(e),
                I.a.getActiveDocumentViewerKey(e),
                I.a.getIsInitialsModeEnabled(e),
                I.a.isElementDisabled(e, xe.a.SAVED_SIGNATURES_TAB),
                I.a.getSelectedTab(e, xe.a.SIGNATURE_MODAL),
                I.a.getDisplayedSignatures(e),
                I.a.getSavedInitials(e),
              ];
            }),
            10
          ),
          t = e[0],
          n = e[1],
          o = e[2],
          d = e[3],
          p = e[4],
          f = e[5],
          h = e[6],
          m = e[7],
          v = e[8],
          x = e[9],
          w = b.a.getToolsFromAllDocumentViewers('AnnotationCreateSignature'),
          S = Oe(Object(r.useState)(!0), 2),
          E = S[0],
          k = S[1],
          A = Oe(Object(r.useState)(0), 2),
          M = A[0],
          O = A[1],
          j = Object(l.d)(),
          L = Oe(Object(c.a)(), 1)[0];
        Object(we.a)(
          function () {
            'AnnotationCreateSignature' !== o &&
              j(
                ue.a.closeElements([
                  xe.a.SIGNATURE_MODAL,
                  xe.a.SIGNATURE_OVERLAY,
                ])
              );
          },
          [j, o]
        ),
          Object(r.useEffect)(
            function () {
              n &&
                j(
                  ue.a.closeElements([
                    xe.a.PRINT_MODAL,
                    xe.a.LOADING_MODAL,
                    xe.a.PROGRESS_MODAL,
                    xe.a.ERROR_MODAL,
                  ])
                );
            },
            [j, n]
          );
        var N = function () {
            var e,
              t = Me(w);
            try {
              for (t.s(); !(e = t.n()).done; ) {
                var n = e.value;
                n.clearLocation(), n.setSignature(null);
              }
            } catch (e) {
              t.e(e);
            } finally {
              t.f();
            }
            j(ue.a.closeElement(xe.a.SIGNATURE_MODAL));
          },
          _ = (function () {
            var e = Ae(
              Ee().mark(function e() {
                return Ee().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        T(), f && D();
                      case 2:
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
          T = (function () {
            var e = Ae(
              Ee().mark(function e() {
                var t, n, r, a, o;
                return Ee().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          w[0].saveSignatures(
                            w[0].getFullSignatureAnnotation()
                          ),
                            (t = 1);
                        case 2:
                          if (!(t < w.length)) {
                            e.next = 8;
                            break;
                          }
                          return (
                            (e.next = 5),
                            w[t].setSignature(w[0].getFullSignatureAnnotation())
                          );
                        case 5:
                          t++, (e.next = 2);
                          break;
                        case 8:
                          return (
                            (n = w[p - 1]), (e.next = 11), n.isEmptySignature()
                          );
                        case 11:
                          if (e.sent) {
                            e.next = 37;
                            break;
                          }
                          if (
                            (b.a.setToolMode('AnnotationCreateSignature'),
                            d !== y.a.FULL_SIGNATURE)
                          ) {
                            e.next = 37;
                            break;
                          }
                          if (!n.hasLocation()) {
                            e.next = 19;
                            break;
                          }
                          return (e.next = 17), n.addSignature();
                        case 17:
                          e.next = 36;
                          break;
                        case 19:
                          (r = Me(w)), (e.prev = 20), r.s();
                        case 22:
                          if ((a = r.n()).done) {
                            e.next = 28;
                            break;
                          }
                          return (o = a.value), (e.next = 26), o.showPreview();
                        case 26:
                          e.next = 22;
                          break;
                        case 28:
                          e.next = 33;
                          break;
                        case 30:
                          (e.prev = 30), (e.t0 = e.catch(20)), r.e(e.t0);
                        case 33:
                          return (e.prev = 33), r.f(), e.finish(33);
                        case 36:
                          j(ue.a.closeElement(xe.a.SIGNATURE_MODAL));
                        case 37:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[20, 30, 33, 36]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          D = (function () {
            var e = Ae(
              Ee().mark(function e() {
                var t, n, r, a, o;
                return Ee().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          w[0].saveInitials(w[0].getInitialsAnnotation()),
                            (t = 1);
                        case 2:
                          if (!(t < w.length)) {
                            e.next = 8;
                            break;
                          }
                          return (
                            (e.next = 5),
                            w[t].saveInitials(w[0].getInitialsAnnotation())
                          );
                        case 5:
                          t++, (e.next = 2);
                          break;
                        case 8:
                          return (
                            (n = w[p - 1]),
                            (e.next = 11),
                            n.isEmptyInitialsSignature()
                          );
                        case 11:
                          if (e.sent) {
                            e.next = 38;
                            break;
                          }
                          if (
                            (b.a.setToolMode('AnnotationCreateSignature'),
                            d !== y.a.INITIALS)
                          ) {
                            e.next = 36;
                            break;
                          }
                          if (!n.hasLocation()) {
                            e.next = 19;
                            break;
                          }
                          return (e.next = 17), n.addInitials();
                        case 17:
                          e.next = 36;
                          break;
                        case 19:
                          (r = Me(w)), (e.prev = 20), r.s();
                        case 22:
                          if ((a = r.n()).done) {
                            e.next = 28;
                            break;
                          }
                          return (
                            (o = a.value),
                            (e.next = 26),
                            o.showInitialsPreview()
                          );
                        case 26:
                          e.next = 22;
                          break;
                        case 28:
                          e.next = 33;
                          break;
                        case 30:
                          (e.prev = 30), (e.t0 = e.catch(20)), r.e(e.t0);
                        case 33:
                          return (e.prev = 33), r.f(), e.finish(33);
                        case 36:
                          j(ue.a.closeElement(xe.a.SIGNATURE_MODAL)),
                            j(ue.a.setSignatureMode(y.a.FULL_SIGNATURE));
                        case 38:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[20, 30, 33, 36]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          P = (function () {
            var e = Ae(
              Ee().mark(function e(t) {
                var n, r, a, o, i, l;
                return Ee().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = d === y.a.FULL_SIGNATURE),
                            j(
                              ue.a[
                                n
                                  ? 'setSelectedDisplayedSignatureIndex'
                                  : 'setSelectedDisplayedInitialsIndex'
                              ](t)
                            ),
                            (r = n ? v[t] : x[t]),
                            (a = r.annotation),
                            b.a.setToolMode('AnnotationCreateSignature'),
                            (o = Me(w)),
                            (e.prev = 5),
                            o.s();
                        case 7:
                          if ((i = o.n()).done) {
                            e.next = 20;
                            break;
                          }
                          return (
                            (l = i.value),
                            (e.next = 11),
                            l[n ? 'setSignature' : 'setInitials'](a)
                          );
                        case 11:
                          if (!l.hasLocation()) {
                            e.next = 16;
                            break;
                          }
                          return (
                            (e.next = 14),
                            l[n ? 'addSignature' : 'addInitials']()
                          );
                        case 14:
                          e.next = 18;
                          break;
                        case 16:
                          return (
                            (e.next = 18),
                            l[n ? 'showPreview' : 'showInitialsPreview']()
                          );
                        case 18:
                          e.next = 7;
                          break;
                        case 20:
                          e.next = 25;
                          break;
                        case 22:
                          (e.prev = 22), (e.t0 = e.catch(5)), o.e(e.t0);
                        case 25:
                          return (e.prev = 25), o.f(), e.finish(25);
                        case 28:
                          j(ue.a.closeElement(xe.a.SIGNATURE_MODAL));
                        case 29:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[5, 22, 25, 28]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          R = Object(r.useCallback)(
            function () {
              k(!0);
            },
            [E]
          ),
          F = Object(r.useCallback)(
            function () {
              k(!1);
            },
            [E]
          ),
          G = i()({ Modal: !0, SignatureModal: !0, open: n, closed: !n }),
          B = 'savedSignaturePanelButton' === m;
        return t
          ? null
          : a.a.createElement(
              g.a,
              {
                onSwipedUp: N,
                onSwipedDown: N,
                preventDefaultTouchmoveEvent: !0,
              },
              a.a.createElement(
                u.a,
                { locked: n },
                a.a.createElement(
                  'div',
                  { className: G, 'data-element': xe.a.SIGNATURE_MODAL },
                  a.a.createElement(
                    'div',
                    {
                      className: i()('container', { 'include-initials': f }),
                      onMouseDown: function (e) {
                        return e.stopPropagation();
                      },
                    },
                    a.a.createElement('div', { className: 'swipe-indicator' }),
                    a.a.createElement(
                      s.d,
                      { id: 'signatureModal' },
                      a.a.createElement(
                        'div',
                        { className: 'header-container' },
                        a.a.createElement(
                          'div',
                          { className: 'header' },
                          a.a.createElement(
                            'p',
                            null,
                            L('option.signatureModal.modalName')
                          ),
                          a.a.createElement(ce.a, {
                            className: 'signatureModalCloseButton',
                            dataElement: 'signatureModalCloseButton',
                            title: 'action.close',
                            img: 'ic_close_black_24px',
                            onClick: N,
                          })
                        ),
                        a.a.createElement(
                          'div',
                          { className: 'tab-list' },
                          !h &&
                            a.a.createElement(
                              s.a,
                              { dataElement: 'savedSignaturePanelButton' },
                              a.a.createElement(
                                'button',
                                { className: 'tab-options-button' },
                                L('option.type.saved')
                              )
                            ),
                          a.a.createElement('div', {
                            className: 'tab-options-divider',
                          }),
                          a.a.createElement(
                            s.a,
                            { dataElement: 'inkSignaturePanelButton' },
                            a.a.createElement(
                              'button',
                              { className: 'tab-options-button' },
                              L('action.draw')
                            )
                          ),
                          a.a.createElement('div', {
                            className: 'tab-options-divider',
                          }),
                          a.a.createElement(
                            s.a,
                            { dataElement: 'textSignaturePanelButton' },
                            a.a.createElement(
                              'button',
                              { className: 'tab-options-button' },
                              L('action.type')
                            )
                          ),
                          a.a.createElement('div', {
                            className: 'tab-options-divider',
                          }),
                          a.a.createElement(
                            s.a,
                            { dataElement: 'imageSignaturePanelButton' },
                            a.a.createElement(
                              'button',
                              { className: 'tab-options-button' },
                              L('action.upload')
                            )
                          )
                        )
                      ),
                      !h &&
                        a.a.createElement(
                          s.c,
                          { dataElement: 'savedSignaturePanel' },
                          a.a.createElement(be, {
                            selectedIndex: M,
                            setSelectedIndex: O,
                          })
                        ),
                      a.a.createElement(
                        s.c,
                        { dataElement: 'inkSignaturePanel' },
                        a.a.createElement(C, {
                          isModalOpen: n,
                          enableCreateButton: F,
                          disableCreateButton: R,
                          isInitialsModeEnabled: f,
                        })
                      ),
                      a.a.createElement(
                        s.c,
                        { dataElement: 'textSignaturePanel' },
                        a.a.createElement(Y, {
                          isModalOpen: n,
                          enableCreateButton: F,
                          disableCreateButton: R,
                          isInitialsModeEnabled: f,
                        })
                      ),
                      a.a.createElement(
                        s.c,
                        { dataElement: 'imageSignaturePanel' },
                        a.a.createElement(le, {
                          isModalOpen: n,
                          enableCreateButton: F,
                          disableCreateButton: R,
                          isInitialsModeEnabled: f,
                        })
                      ),
                      a.a.createElement(
                        'div',
                        { className: 'footer' },
                        a.a.createElement(
                          'button',
                          {
                            className: 'signature-create',
                            onClick: B
                              ? function () {
                                  return P(M);
                                }
                              : _,
                            disabled: B ? !B || !v.length || !n : !n || E,
                          },
                          L(B ? 'action.apply' : 'action.create')
                        )
                      )
                    )
                  )
                )
              )
            );
      };
      t.default = Ce;
    },
  },
]);
//# sourceMappingURL=20.chunk.js.map
