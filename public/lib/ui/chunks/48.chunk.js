(window.webpackJsonp = window.webpackJsonp || []).push([
  [48],
  {
    1658: function (t, i, e) {
      var a = e(27),
        n = e(1659);
      'string' == typeof (n = n.__esModule ? n.default : n) &&
        (n = [[t.i, n, '']]);
      var o = {
        insert: function (t) {
          const i = document.getElementsByTagName('apryse-webviewer');
          if (i.length > 0) {
            const e = [];
            for (let a = 0; a < i.length; a++) {
              const n = i[a];
              if (0 === a)
                n.shadowRoot.appendChild(t),
                  (t.onload = function () {
                    e.length > 0 &&
                      e.forEach((i) => {
                        i.innerHTML = t.innerHTML;
                      });
                  });
              else {
                const i = t.cloneNode(!0);
                n.shadowRoot.appendChild(i), e.push(i);
              }
            }
          } else document.head.appendChild(t);
        },
        singleton: !1,
      };
      a(n, o);
      t.exports = n.locals || {};
    },
    1659: function (t, i, e) {
      (i = t.exports = e(28)(!1)).push([
        t.i,
        '.open.SignatureValidationModal{visibility:visible}.closed.SignatureValidationModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.SignatureValidationModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.SignatureValidationModal .modal-container .wrapper .modal-content{padding:10px}.SignatureValidationModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.SignatureValidationModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.SignatureValidationModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.SignatureValidationModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.SignatureValidationModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.SignatureValidationModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.SignatureValidationModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.SignatureValidationModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.SignatureValidationModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.SignatureValidationModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureValidationModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureValidationModal .footer .modal-button{padding:23px 8px}}.SignatureValidationModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureValidationModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureValidationModal .swipe-indicator{display:none}}.SignatureValidationModal .container{background:var(--component-background);overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .SignatureValidationModal .container,.SignatureValidationModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .SignatureValidationModal .container,.SignatureValidationModal .App.is-web-component .container{overflow:auto;max-height:100%}}.SignatureValidationModal .container{display:flex;flex-direction:column;justify-content:space-around;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);min-width:350px;padding:20px;max-width:630px}.SignatureValidationModal .validation-header{position:relative;display:flex;justify-content:left;align-items:center;padding-bottom:20px;font-size:16px}.SignatureValidationModal .validation-header [data-element=signatureValidationModalCloseButton]{position:absolute;right:0}.SignatureValidationModal .validation-header [data-element=signatureValidationModalCloseButton]:hover{background:none}.SignatureValidationModal .summary-box{position:relative;display:flex;border:1px solid #dee2e6;border-radius:5px;padding:16px;font-weight:700}.SignatureValidationModal .summary-box>:not(:first-child){margin-left:8px}.SignatureValidationModal .validation-header-valid{background-color:#8dd88d}.SignatureValidationModal .validation-header-warning{background-color:#e2b719}.SignatureValidationModal .validation-header-error{background-color:#ff7979}.SignatureValidationModal .validation-header-unknown{background-color:#ddd}.SignatureValidationModal .body{margin-top:16px}.SignatureValidationModal div.body>div.section:first-child{margin-top:0}.SignatureValidationModal div.body>div.section{margin:16px;padding-bottom:16px;border-bottom:1px solid var(--gray-4)}.SignatureValidationModal div.body>div.section:last-child{margin-bottom:0}.SignatureValidationModal div.body>div.section>p{font-size:13px;margin:8px 0}.SignatureValidationModal div.body>div.section>p:last-child{margin:0}.SignatureValidationModal .header{font-weight:700}.SignatureValidationModal .modal-footer{display:flex;justify-content:flex-end;margin-top:32px}.SignatureValidationModal .modal-footer .close-modal-button{background:var(--primary-button);border:1px;border-color:var(--primary-button);border-radius:4px;padding:0 16px;height:32px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureValidationModal .modal-footer .close-modal-button{height:40px;width:128px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureValidationModal .modal-footer .close-modal-button{height:40px;width:128px}}.SignatureValidationModal .modal-footer .close-modal-button:hover{background:var(--primary-button-hover)}',
        '',
      ]),
        (i.locals = { LEFT_HEADER_WIDTH: '41px', RIGHT_HEADER_WIDTH: '41px' });
    },
    1750: function (t, i, e) {
      'use strict';
      e.r(i);
      e(18),
        e(11),
        e(13),
        e(7),
        e(12),
        e(8),
        e(9),
        e(10),
        e(15),
        e(14),
        e(20),
        e(17);
      var a = e(0),
        n = e.n(a),
        o = e(6),
        r = e(362),
        d = e(19),
        l = e.n(d),
        s = e(3),
        u = e(5),
        c = e(528),
        g = e(419),
        p = e(147),
        m = e(2);
      e(1658);
      function f(t, i) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, i) {
            var e =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != e) {
              var a,
                n,
                o,
                r,
                d = [],
                l = !0,
                s = !1;
              try {
                if (((o = (e = e.call(t)).next), 0 === i)) {
                  if (Object(e) !== e) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (a = o.call(e)).done) &&
                    (d.push(a.value), d.length !== i);
                    l = !0
                  );
              } catch (t) {
                (s = !0), (n = t);
              } finally {
                try {
                  if (
                    !l &&
                    null != e.return &&
                    ((r = e.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (s) throw n;
                }
              }
              return d;
            }
          })(t, i) ||
          (function (t, i) {
            if (!t) return;
            if ('string' == typeof t) return b(t, i);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === e && t.constructor && (e = t.constructor.name);
            if ('Map' === e || 'Set' === e) return Array.from(t);
            if (
              'Arguments' === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return b(t, i);
          })(t, i) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function b(t, i) {
        (null == i || i > t.length) && (i = t.length);
        for (var e = 0, a = new Array(i); e < i; e++) a[e] = t[e];
        return a;
      }
      var h = function () {
        var t = Object(a.useRef)(),
          i = f(Object(r.a)(), 1)[0],
          e = f(
            Object(o.e)(function (t) {
              var i = t.viewer.validationModalWidgetName;
              return [
                s.a.isElementOpen(t, u.a.SIGNATURE_VALIDATION_MODAL),
                s.a.getVerificationResult(t, i),
              ];
            }, o.c),
            2
          ),
          d = e[0],
          b = e[1],
          h = Object(o.d)(),
          S = function () {
            h(m.a.closeElements([u.a.SIGNATURE_VALIDATION_MODAL]));
          };
        Object(p.a)(t, S),
          Object(a.useEffect)(
            function () {
              d &&
                h(
                  m.a.closeElements([
                    u.a.SIGNATURE_MODAL,
                    u.a.LOADING_MODAL,
                    u.a.PRINT_MODAL,
                    u.a.ERROR_MODAL,
                    u.a.PASSWORD_MODAL,
                  ])
                );
            },
            [h, d]
          );
        var x = b.badgeIcon,
          v = b.verificationStatus,
          y = b.permissionStatus,
          w = b.isCertification,
          M = b.documentPermission,
          V = b.trustVerificationResultString,
          _ = b.timeOfTrustVerificationEnum,
          k = b.trustVerificationTime,
          A = b.digestAlgorithm,
          E = b.digestStatus,
          D = b.documentStatus,
          T = b.trustStatus,
          N = b.signerName,
          O = window.Core.PDFNet,
          I = O.DigestAlgorithm,
          R = O.DigitalSignatureField,
          j = O.VerificationOptions,
          P = O.VerificationResult,
          H = P.ModificationPermissionsStatus,
          L = P.TrustStatus,
          C = P.DigestStatus,
          B = P.DocumentStatus,
          z = j.TimeMode;
        return n.a.createElement(
          'div',
          {
            className: l()({
              Modal: !0,
              SignatureValidationModal: !0,
              open: d,
              closed: !d,
            }),
            'data-element': u.a.SIGNATURE_VALIDATION_MODAL,
          },
          n.a.createElement(
            'div',
            { className: 'container', ref: t },
            (function () {
              var t;
              switch (x) {
                case 'digital_signature_valid':
                  t = i('digitalSignatureModal.valid');
                  break;
                case 'digital_signature_warning':
                  t = i('digitalSignatureModal.unknown');
                  break;
                case 'digital_signature_error':
                  t = i('digitalSignatureModal.invalid');
                  break;
                default:
                  t = i('digitalSignatureModal.unknown');
              }
              var e = i(
                  w
                    ? 'digitalSignatureModal.Certification'
                    : 'digitalSignatureModal.Signature'
                ),
                a = i(
                  w
                    ? 'digitalSignatureModal.certification'
                    : 'digitalSignatureModal.signature'
                );
              return n.a.createElement(
                'div',
                null,
                n.a.createElement(
                  'div',
                  { className: 'validation-header' },
                  i('digitalSignatureModal.title', { type: e })
                ),
                n.a.createElement(
                  'div',
                  { className: 'summary-box' },
                  n.a.createElement(g.a, { badge: x, size: 'medium' }),
                  n.a.createElement(
                    'div',
                    null,
                    i('digitalSignatureModal.summaryBox.summary', {
                      type: a,
                      status: t,
                    }),
                    'digital_signature_valid' === x
                      ? i('digitalSignatureModal.summaryBox.signedBy', {
                          name: N || i('digitalSignatureModal.unknown'),
                          interpolation: { escapeValue: !1 },
                        })
                      : ''
                  )
                )
              );
            })(),
            void 0 === v
              ? n.a.createElement(
                  'div',
                  { className: 'center' },
                  n.a.createElement(c.a, null)
                )
              : n.a.createElement(
                  n.a.Fragment,
                  null,
                  n.a.createElement(
                    'div',
                    { className: 'body' },
                    n.a.createElement(
                      'div',
                      { className: 'section' },
                      n.a.createElement(
                        'p',
                        { className: 'header' },
                        i('digitalSignatureModal.header.documentIntegrity')
                      ),
                      Object(c.c)({
                        isCertification: w,
                        ModificationPermissionsStatus: H,
                        permissionStatus: y,
                        translate: i,
                      }),
                      (function () {
                        if (M) {
                          var t = '',
                            e = w ? 'certifier' : 'signer';
                          switch (M) {
                            case R.DocumentPermissions.e_no_changes_allowed:
                              t += i(
                                'digitalSignatureModal.documentPermission.noChangesAllowed',
                                { editor: e }
                              );
                              break;
                            case R.DocumentPermissions
                              .e_formfilling_signing_allowed:
                              t += i(
                                'digitalSignatureModal.documentPermission.formfillingSigningAllowed',
                                { editor: e }
                              );
                              break;
                            case R.DocumentPermissions
                              .e_annotating_formfilling_signing_allowed:
                              t += i(
                                'digitalSignatureModal.documentPermission.annotatingFormfillingSigningAllowed',
                                { editor: e }
                              );
                              break;
                            case R.DocumentPermissions.e_unrestricted:
                              t += i(
                                'digitalSignatureModal.documentPermission.unrestricted',
                                { editor: e }
                              );
                          }
                          return n.a.createElement('p', null, t);
                        }
                      })()
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'section' },
                      n.a.createElement(
                        'p',
                        { className: 'header' },
                        i('digitalSignatureModal.header.identitiesTrust')
                      ),
                      (function () {
                        var t,
                          e = i(
                            w
                              ? 'digitalSignatureVerification.certifier'
                              : 'digitalSignatureVerification.signer'
                          );
                        switch (T) {
                          case L.e_trust_verified:
                            t = i(
                              'digitalSignatureVerification.trustStatus.trustVerified',
                              { verificationType: e }
                            );
                            break;
                          case L.e_untrusted:
                            t = i(
                              'digitalSignatureVerification.trustStatus.untrusted'
                            );
                            break;
                          case L.e_trust_verification_disabled:
                            t = i(
                              'digitalSignatureVerification.trustStatus.trustVerificationDisabled'
                            );
                            break;
                          case L.e_no_trust_status:
                            t = i(
                              'digitalSignatureVerification.trustStatus.noTrustStatus'
                            );
                        }
                        return n.a.createElement('p', null, t);
                      })(),
                      (function () {
                        if (!V)
                          return n.a.createElement(
                            'p',
                            null,
                            i('digitalSignatureModal.trustVerification.none')
                          );
                        var t = '';
                        switch (_) {
                          case z.e_current:
                            t += i(
                              'digitalSignatureModal.trustVerification.current',
                              { trustVerificationTime: k }
                            );
                            break;
                          case z.e_signing:
                            t += i(
                              'digitalSignatureModal.trustVerification.signing',
                              { trustVerificationTime: k }
                            );
                            break;
                          case z.e_timestamp:
                            t += i(
                              'digitalSignatureModal.trustVerification.timestamp',
                              { trustVerificationTime: k }
                            );
                        }
                        return n.a.createElement('p', null, t);
                      })()
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'section' },
                      n.a.createElement(
                        'p',
                        { className: 'header' },
                        i('digitalSignatureModal.header.generalErrors')
                      ),
                      (function () {
                        var t;
                        switch (D) {
                          case B.e_no_error:
                            t = i(
                              'digitalSignatureVerification.documentStatus.noError'
                            );
                            break;
                          case B.e_corrupt_file:
                            t = i(
                              'digitalSignatureVerification.documentStatus.corruptFile'
                            );
                            break;
                          case B.e_unsigned:
                            t = i(
                              'digitalSignatureVerification.documentStatus.unsigned'
                            );
                            break;
                          case B.e_bad_byteranges:
                            t = i(
                              'digitalSignatureVerification.documentStatus.badByteRanges'
                            );
                            break;
                          case B.e_corrupt_cryptographic_contents:
                            t = i(
                              'digitalSignatureVerification.documentStatus.corruptCryptographicContents'
                            );
                        }
                        return n.a.createElement('p', null, t);
                      })()
                    ),
                    n.a.createElement(
                      'div',
                      { className: 'section' },
                      n.a.createElement(
                        'p',
                        { className: 'header' },
                        i('digitalSignatureModal.header.digestStatus')
                      ),
                      (function () {
                        var t;
                        switch (E) {
                          case C.e_digest_invalid:
                            t = i(
                              'digitalSignatureVerification.digestStatus.digestInvalid'
                            );
                            break;
                          case C.e_digest_verified:
                            t = i(
                              'digitalSignatureVerification.digestStatus.digestVerified'
                            );
                            break;
                          case C.e_digest_verification_disabled:
                            t = i(
                              'digitalSignatureVerification.digestStatus.digestVerificationDisabled'
                            );
                            break;
                          case C.e_weak_digest_algorithm_but_digest_verifiable:
                            t = i(
                              'digitalSignatureVerification.digestStatus.weakDigestAlgorithmButDigestVerifiable'
                            );
                            break;
                          case C.e_no_digest_status:
                            t = i(
                              'digitalSignatureVerification.digestStatus.noDigestStatus'
                            );
                            break;
                          case C.e_unsupported_encoding:
                            t = i(
                              'digitalSignatureVerification.digestStatus.unsupportedEncoding'
                            );
                        }
                        return n.a.createElement('p', null, t);
                      })(),
                      (function () {
                        var t = i(
                          'digitalSignatureModal.digestAlgorithm.preamble'
                        );
                        switch (A) {
                          case I.Type.e_SHA1:
                            t += 'SHA1.';
                            break;
                          case I.Type.e_SHA256:
                            t += 'SHA256.';
                            break;
                          case I.Type.e_SHA384:
                            t += 'SHA384.';
                            break;
                          case I.Type.e_SHA512:
                            t += 'SHA512.';
                            break;
                          case I.Type.e_RIPEMD160:
                            t += 'RIPEMD160.';
                            break;
                          case I.Type.e_unknown_digest_algorithm:
                            t = i(
                              'digitalSignatureModal.digestAlgorithm.unknown'
                            );
                        }
                        return n.a.createElement('p', null, t);
                      })()
                    )
                  ),
                  n.a.createElement(
                    'div',
                    { className: 'modal-footer' },
                    n.a.createElement(
                      'button',
                      { className: 'close-modal-button', onClick: S },
                      'OK'
                    )
                  )
                )
          )
        );
      };
      i.default = h;
    },
  },
]);
//# sourceMappingURL=48.chunk.js.map
