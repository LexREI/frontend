!function () {
  var n,
    i,
    a = a || {};
  (a.scope = {}),
    (a.arrayIteratorImpl = function (t) {
      var e = 0;
      return function () {
        return e < t.length ? { done: !1, value: t[e++] } : { done: !0 };
      };
    }),
    (a.arrayIterator = function (t) {
      return { next: a.arrayIteratorImpl(t) };
    }),
    (a.makeIterator = function (t) {
      var e =
        'undefined' != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
      if (e) return e.call(t);
      if ('number' == typeof t.length) return a.arrayIterator(t);
      throw Error(String(t) + ' is not an iterable or ArrayLike');
    }),
    (a.ASSUME_ES5 = !1),
    (a.ASSUME_NO_NATIVE_MAP = !1),
    (a.ASSUME_NO_NATIVE_SET = !1),
    (a.SIMPLE_FROUND_POLYFILL = !1),
    (a.ISOLATE_POLYFILLS = !1),
    (a.FORCE_POLYFILL_PROMISE = !1),
    (a.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1),
    (a.getGlobal = function (t) {
      t = [
        'object' == typeof globalThis && globalThis,
        t,
        'object' == typeof window && window,
        'object' == typeof self && self,
        'object' == typeof global && global,
      ];
      for (var e = 0; e < t.length; ++e) {
        var n = t[e];
        if (n && n.Math == Math) return n;
      }
      throw Error('Cannot find global object');
    }),
    (a.global = a.getGlobal(this)),
    (a.defineProperty =
      a.ASSUME_ES5 || 'function' == typeof Object.defineProperties
        ? Object.defineProperty
        : function (t, e, n) {
            return (
              t != Array.prototype && t != Object.prototype && (t[e] = n.value),
              t
            );
          }),
    (a.IS_SYMBOL_NATIVE =
      'function' == typeof Symbol && 'symbol' == typeof Symbol('x')),
    (a.TRUST_ES6_POLYFILLS = !a.ISOLATE_POLYFILLS || a.IS_SYMBOL_NATIVE),
    (a.polyfills = {}),
    (a.propertyToPolyfillSymbol = {}),
    (a.POLYFILL_PREFIX = '$jscp$');
  function r(t) {
    var e;
    return (
      i[t] ||
      ((e = i[t] = { i: t, l: !1, exports: {} }),
      n[t].call(e.exports, e, e.exports, r),
      (e.l = !0),
      e)
    ).exports;
  }
  (a.polyfill = function (t, e, n, i) {
    e &&
      (a.ISOLATE_POLYFILLS
        ? a.polyfillIsolated(t, e, n, i)
        : a.polyfillUnisolated(t, e, n, i));
  }),
    (a.polyfillUnisolated = function (t, e, n, i) {
      for (n = a.global, t = t.split('.'), i = 0; i < t.length - 1; i++) {
        var r = t[i];
        if (!(r in n)) return;
        n = n[r];
      }
      (e = e((i = n[(t = t[t.length - 1])]))) != i &&
        null != e &&
        a.defineProperty(n, t, { configurable: !0, writable: !0, value: e });
    }),
    (a.polyfillIsolated = function (t, e, n, i) {
      var r = t.split('.');
      (t = 1 === r.length),
        (i = r[0]),
        (i = !t && i in a.polyfills ? a.polyfills : a.global);
      for (var o = 0; o < r.length - 1; o++) {
        var s = r[o];
        if (!(s in i)) return;
        i = i[s];
      }
      (r = r[r.length - 1]),
        null !=
          (e = e((n = a.IS_SYMBOL_NATIVE && 'es6' === n ? i[r] : null))) &&
          (t
            ? a.defineProperty(a.polyfills, r, {
                configurable: !0,
                writable: !0,
                value: e,
              })
            : e !== n &&
              (void 0 === a.propertyToPolyfillSymbol[r] &&
                ((n = (1e9 * Math.random()) >>> 0),
                (a.propertyToPolyfillSymbol[r] = a.IS_SYMBOL_NATIVE
                  ? a.global.Symbol(r)
                  : a.POLYFILL_PREFIX + n + '$' + r)),
              a.defineProperty(i, a.propertyToPolyfillSymbol[r], {
                configurable: !0,
                writable: !0,
                value: e,
              })));
    }),
    a.polyfill(
      'Promise',
      function (t) {
        function e() {
          this.batch_ = null;
        }
        function s(n) {
          return n instanceof u
            ? n
            : new u(function (t, e) {
                t(n);
              });
        }
        if (
          t &&
          (!(
            a.FORCE_POLYFILL_PROMISE ||
            (a.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION &&
              void 0 === a.global.PromiseRejectionEvent)
          ) ||
            !a.global.Promise ||
            -1 === a.global.Promise.toString().indexOf('[native code]'))
        )
          return t;
        e.prototype.asyncExecute = function (t) {
          var e;
          null == this.batch_ &&
            ((this.batch_ = []),
            (e = this).asyncExecuteFunction(function () {
              e.executeBatch_();
            })),
            this.batch_.push(t);
        };
        function u(t) {
          (this.state_ = 0),
            (this.result_ = void 0),
            (this.onSettledCallbacks_ = []),
            (this.isRejectionHandled_ = !1);
          var e = this.createResolveAndReject_();
          try {
            t(e.resolve, e.reject);
          } catch (t) {
            e.reject(t);
          }
        }
        var n = a.global.setTimeout,
          r =
            ((e.prototype.asyncExecuteFunction = function (t) {
              n(t, 0);
            }),
            (e.prototype.executeBatch_ = function () {
              for (; this.batch_ && this.batch_.length; ) {
                var t = this.batch_;
                this.batch_ = [];
                for (var e = 0; e < t.length; ++e) {
                  var n = t[e];
                  t[e] = null;
                  try {
                    n();
                  } catch (t) {
                    this.asyncThrow_(t);
                  }
                }
              }
              this.batch_ = null;
            }),
            (e.prototype.asyncThrow_ = function (t) {
              this.asyncExecuteFunction(function () {
                throw t;
              });
            }),
            (u.prototype.createResolveAndReject_ = function () {
              function t(e) {
                return function (t) {
                  i || ((i = !0), e.call(n, t));
                };
              }
              var n = this,
                i = !1;
              return { resolve: t(this.resolveTo_), reject: t(this.reject_) };
            }),
            (u.prototype.resolveTo_ = function (t) {
              if (t === this)
                this.reject_(
                  new TypeError('A Promise cannot resolve to itself')
                );
              else if (t instanceof u) this.settleSameAsPromise_(t);
              else {
                switch (typeof t) {
                  case 'object':
                    var e = null != t;
                    break;
                  case 'function':
                    e = !0;
                    break;
                  default:
                    e = !1;
                }
                e ? this.resolveToNonPromiseObj_(t) : this.fulfill_(t);
              }
            }),
            (u.prototype.resolveToNonPromiseObj_ = function (t) {
              var e = void 0;
              try {
                e = t.then;
              } catch (t) {
                return void this.reject_(t);
              }
              'function' == typeof e
                ? this.settleSameAsThenable_(e, t)
                : this.fulfill_(t);
            }),
            (u.prototype.reject_ = function (t) {
              this.settle_(2, t);
            }),
            (u.prototype.fulfill_ = function (t) {
              this.settle_(1, t);
            }),
            (u.prototype.settle_ = function (t, e) {
              if (0 != this.state_)
                throw Error(
                  'Cannot settle(' +
                    t +
                    ', ' +
                    e +
                    '): Promise already settled in state' +
                    this.state_
                );
              (this.state_ = t),
                (this.result_ = e),
                2 === this.state_ && this.scheduleUnhandledRejectionCheck_(),
                this.executeOnSettledCallbacks_();
            }),
            (u.prototype.scheduleUnhandledRejectionCheck_ = function () {
              var e = this;
              n(function () {
                var t;
                e.notifyUnhandledRejection_() &&
                  void 0 !== (t = a.global.console) &&
                  t.error(e.result_);
              }, 1);
            }),
            (u.prototype.notifyUnhandledRejection_ = function () {
              var t, e, n;
              return (
                !this.isRejectionHandled_ &&
                ((t = a.global.CustomEvent),
                (e = a.global.Event),
                void 0 === (n = a.global.dispatchEvent) ||
                  ('function' == typeof t
                    ? (t = new t('unhandledrejection', { cancelable: !0 }))
                    : 'function' == typeof e
                      ? (t = new e('unhandledrejection', { cancelable: !0 }))
                      : (t =
                          a.global.document.createEvent(
                            'CustomEvent'
                          )).initCustomEvent('unhandledrejection', !1, !0, t),
                  (t.promise = this),
                  (t.reason = this.result_),
                  n(t)))
              );
            }),
            (u.prototype.executeOnSettledCallbacks_ = function () {
              if (null != this.onSettledCallbacks_) {
                for (var t = 0; t < this.onSettledCallbacks_.length; ++t)
                  r.asyncExecute(this.onSettledCallbacks_[t]);
                this.onSettledCallbacks_ = null;
              }
            }),
            new e());
        return (
          (u.prototype.settleSameAsPromise_ = function (t) {
            var e = this.createResolveAndReject_();
            t.callWhenSettled_(e.resolve, e.reject);
          }),
          (u.prototype.settleSameAsThenable_ = function (t, e) {
            var n = this.createResolveAndReject_();
            try {
              t.call(e, n.resolve, n.reject);
            } catch (t) {
              n.reject(t);
            }
          }),
          (u.prototype.then = function (t, e) {
            function n(e, t) {
              return 'function' == typeof e
                ? function (t) {
                    try {
                      i(e(t));
                    } catch (t) {
                      r(t);
                    }
                  }
                : t;
            }
            var i,
              r,
              o = new u(function (t, e) {
                (i = t), (r = e);
              });
            return this.callWhenSettled_(n(t, i), n(e, r)), o;
          }),
          (u.prototype.catch = function (t) {
            return this.then(void 0, t);
          }),
          (u.prototype.callWhenSettled_ = function (t, e) {
            function n() {
              switch (i.state_) {
                case 1:
                  t(i.result_);
                  break;
                case 2:
                  e(i.result_);
                  break;
                default:
                  throw Error('Unexpected state: ' + i.state_);
              }
            }
            var i = this;
            null == this.onSettledCallbacks_
              ? r.asyncExecute(n)
              : this.onSettledCallbacks_.push(n),
              (this.isRejectionHandled_ = !0);
          }),
          (u.resolve = s),
          (u.reject = function (n) {
            return new u(function (t, e) {
              e(n);
            });
          }),
          (u.race = function (r) {
            return new u(function (t, e) {
              for (
                var n = a.makeIterator(r), i = n.next();
                !i.done;
                i = n.next()
              )
                s(i.value).callWhenSettled_(t, e);
            });
          }),
          (u.all = function (t) {
            var e = a.makeIterator(t),
              o = e.next();
            return o.done
              ? s([])
              : new u(function (n, t) {
                  for (
                    var i = [], r = 0;
                    i.push(void 0),
                      r++,
                      s(o.value).callWhenSettled_(
                        (function t(e) {
                          return function (t) {
                            (i[e] = t), 0 == --r && n(i);
                          };
                        })(i.length - 1),
                        t
                      ),
                      !(o = e.next()).done;

                  );
                });
          }),
          u
        );
      },
      'es6',
      'es3'
    ),
    (a.checkStringArgs = function (t, e, n) {
      if (null == t)
        throw new TypeError(
          "The 'this' value for String.prototype." +
            n +
            ' must not be null or undefined'
        );
      if (e instanceof RegExp)
        throw new TypeError(
          'First argument to String.prototype.' +
            n +
            ' must not be a regular expression'
        );
      return t + '';
    }),
    a.polyfill(
      'String.prototype.startsWith',
      function (t) {
        return (
          t ||
          function (t, e) {
            var n = a.checkStringArgs(this, t, 'startsWith'),
              i = n.length,
              r = (t += '').length;
            e = Math.max(0, Math.min(0 | e, n.length));
            for (var o = 0; o < r && e < i; ) if (n[e++] != t[o++]) return !1;
            return r <= o;
          }
        );
      },
      'es6',
      'es3'
    ),
    a.polyfill(
      'Array.from',
      function (t) {
        return (
          t ||
          function (t, e, n) {
            e =
              null != e
                ? e
                : function (t) {
                    return t;
                  };
            var i = [],
              r =
                'undefined' != typeof Symbol &&
                Symbol.iterator &&
                t[Symbol.iterator];
            if ('function' == typeof r) {
              t = r.call(t);
              for (var o = 0; !(r = t.next()).done; )
                i.push(e.call(n, r.value, o++));
            } else
              for (r = t.length, o = 0; o < r; o++) i.push(e.call(n, t[o], o));
            return i;
          }
        );
      },
      'es6',
      'es3'
    ),
    (n = [
      function (t, e, n) {
        t.exports = n(1);
      },
      function (t, e) {
        function d(t) {
          return (d =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        var c = [],
          o = [],
          s = 0,
          n = 0,
          u = [],
          a = [],
          l = 'undefined' == typeof window ? this : window;
        function i() {
          return {
            putBool: function (t, e, n) {
              if (!1 !== n && !0 !== n)
                throw new TypeError('An boolean value is expected for putBool');
              t[e] = n;
            },
            putNumber: function (t, e, n) {
              t[e] = 0 + n;
            },
            putString: function (t, e, n) {
              t[e] = '' + n;
            },
            jsColorToNumber: function (t) {
              return (
                4278190080 +
                65536 * Math.floor(t.R) +
                256 * Math.floor(t.G) +
                Math.floor(t.B)
              );
            },
            jsColorFromNumber: function (t) {
              return {
                A: (5.960464477539063e-8 * t) & 255,
                R: (16711680 & (0 | t)) >>> 16,
                G: (65280 & (0 | t)) >>> 8,
                B: 255 & (0 | t),
              };
            },
          };
        }
        function r(i) {
          return Promise.resolve().then(function t(e) {
            var n = (e = i.next(e)).value;
            return e.done ? e.value : n.then(t);
          });
        }
        var h = l.Core.PDFNet || {};
        (h.Convert =
          l.Core.PDFNet && l.Core.PDFNet.Convert ? l.Core.PDFNet.Convert : {}),
          (h.Optimizer = {}),
          l.Core && l.Core.enableFullPDF(),
          (l.isArrayBuffer = function (t) {
            return (
              t instanceof ArrayBuffer ||
              (null != t &&
                null != t.constructor &&
                'ArrayBuffer' === t.constructor.name &&
                'number' == typeof t.byteLength)
            );
          }),
          (h.Destroyable = function () {
            if (this.constructor === h.Destroyable)
              throw Error("Can't instantiate abstract class!");
          }),
          (h.Destroyable.prototype.takeOwnership = function () {
            O(this.id);
          }),
          (h.Destroyable.prototype.destroy = function () {
            return (
              this.takeOwnership(),
              h.sendWithPromise(this.name + '.destroy', {
                auto_dealloc_obj: this.id,
              })
            );
          }),
          (h.Action = function (t) {
            (this.name = 'Action'), (this.id = t);
          }),
          (h.ActionParameter = function (t) {
            (this.name = 'ActionParameter'), (this.id = t);
          }),
          (h.ActionParameter.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.Annot = function (t) {
            (this.name = 'Annot'), (this.id = t);
          }),
          (h.AnnotBorderStyle = function (t) {
            (this.name = 'AnnotBorderStyle'), (this.id = t);
          }),
          (h.AnnotBorderStyle.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.AttrObj = function (t) {
            (this.name = 'AttrObj'), (this.id = t);
          }),
          (h.Bookmark = function (t) {
            (this.name = 'Bookmark'), (this.id = t);
          }),
          (h.ByteRange = function (t, e) {
            if (((this.name = 'ByteRange'), !t || void 0 !== e))
              return new h.ByteRange({
                m_offset: (t = void 0 === t ? 0 : t),
                m_size: (e = void 0 === e ? 0 : e),
              });
            W(t, this);
          }),
          (h.CaretAnnot = function (t) {
            (this.name = 'CaretAnnot'), (this.id = t);
          }),
          (h.CheckBoxWidget = function (t) {
            (this.name = 'CheckBoxWidget'), (this.id = t);
          }),
          (h.ChunkRenderer = function (t) {
            (this.name = 'ChunkRenderer'), (this.id = t);
          }),
          (h.CircleAnnot = function (t) {
            (this.name = 'CircleAnnot'), (this.id = t);
          }),
          (h.ClassMap = function (t) {
            (this.name = 'ClassMap'), (this.id = t);
          }),
          (h.ColorPt = function (t) {
            (this.name = 'ColorPt'), (this.id = t);
          }),
          (h.ColorPt.prototype = Object.create(h.Destroyable.prototype)),
          (h.ColorSpace = function (t) {
            (this.name = 'ColorSpace'), (this.id = t);
          }),
          (h.ColorSpace.prototype = Object.create(h.Destroyable.prototype)),
          (h.ComboBoxWidget = function (t) {
            (this.name = 'ComboBoxWidget'), (this.id = t);
          }),
          (h.ContentElement = function (t) {
            (this.name = 'ContentElement'), (this.id = t);
          }),
          (h.ContentItem = function (t, e) {
            if (((this.name = 'ContentItem'), !t || void 0 !== e))
              return new h.ContentItem({
                o: (t = void 0 === t ? '0' : t),
                p: (e = void 0 === e ? '0' : e),
              });
            W(t, this);
          }),
          (h.ContentNode = function (t) {
            (this.name = 'ContentNode'), (this.id = t);
          }),
          (h.ContentReplacer = function (t) {
            (this.name = 'ContentReplacer'), (this.id = t);
          }),
          (h.ContentReplacer.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.ConversionMonitor = function (t) {
            (this.name = 'ConversionMonitor'), (this.id = t);
          }),
          (h.ConversionMonitor.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.Date = function (t, e, n, i, r, o, s, u, a, c) {
            if (((this.name = 'Date'), !t || void 0 !== e))
              return new h.Date({
                year: (t = void 0 === t ? 0 : t),
                month: (e = void 0 === e ? 0 : e),
                day: (n = void 0 === n ? 0 : n),
                hour: (i = void 0 === i ? 0 : i),
                minute: (r = void 0 === r ? 0 : r),
                second: (o = void 0 === o ? 0 : o),
                UT: (s = void 0 === s ? 0 : s),
                UT_hour: (u = void 0 === u ? 0 : u),
                UT_minutes: (a = void 0 === a ? 0 : a),
                mp_obj: (c = void 0 === c ? '0' : c),
              });
            W(t, this);
          }),
          (h.Destination = function (t) {
            (this.name = 'Destination'), (this.id = t);
          }),
          (h.DictIterator = function (t) {
            (this.name = 'DictIterator'), (this.id = t);
          }),
          (h.DictIterator.prototype = Object.create(h.Destroyable.prototype)),
          (h.DigestAlgorithm = function (t) {
            (this.name = 'DigestAlgorithm'), (this.id = t);
          }),
          (h.DigitalSignatureField = function (t) {
            if (((this.name = 'DigitalSignatureField'), 'object' === d(t)))
              W(t, this);
            else if (void 0 !== t)
              return new h.DigitalSignatureField({ mp_field_dict_obj: t });
          }),
          (h.DisallowedChange = function (t) {
            (this.name = 'DisallowedChange'), (this.id = t);
          }),
          (h.DisallowedChange.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.DocSnapshot = function (t) {
            (this.name = 'DocSnapshot'), (this.id = t);
          }),
          (h.DocSnapshot.prototype = Object.create(h.Destroyable.prototype)),
          (h.Element = function (t) {
            (this.name = 'Element'), (this.id = t);
          }),
          (h.ElementBuilder = function (t) {
            (this.name = 'ElementBuilder'), (this.id = t);
          }),
          (h.ElementBuilder.prototype = Object.create(h.Destroyable.prototype)),
          (h.ElementReader = function (t) {
            (this.name = 'ElementReader'), (this.id = t);
          }),
          (h.ElementReader.prototype = Object.create(h.Destroyable.prototype)),
          (h.ElementWriter = function (t) {
            (this.name = 'ElementWriter'), (this.id = t);
          }),
          (h.ElementWriter.prototype = Object.create(h.Destroyable.prototype)),
          (h.EmbeddedTimestampVerificationResult = function (t) {
            (this.name = 'EmbeddedTimestampVerificationResult'), (this.id = t);
          }),
          (h.EmbeddedTimestampVerificationResult.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.FDFDoc = function (t) {
            (this.name = 'FDFDoc'), (this.id = t);
          }),
          (h.FDFDoc.prototype = Object.create(h.Destroyable.prototype)),
          (h.FDFField = function (t, e) {
            if (((this.name = 'FDFField'), !t || void 0 !== e))
              return new h.FDFField({
                mp_leaf_node: (t = void 0 === t ? '0' : t),
                mp_root_array: (e = void 0 === e ? '0' : e),
              });
            W(t, this);
          }),
          (h.Field = function (t, e) {
            if (((this.name = 'Field'), !t || void 0 !== e))
              return new h.Field({
                leaf_node: (t = void 0 === t ? '0' : t),
                builder: (e = void 0 === e ? '0' : e),
              });
            W(t, this);
          }),
          (h.FileAttachmentAnnot = function (t) {
            (this.name = 'FileAttachmentAnnot'), (this.id = t);
          }),
          (h.FileSpec = function (t) {
            (this.name = 'FileSpec'), (this.id = t);
          }),
          (h.Filter = function (t) {
            (this.name = 'Filter'), (this.id = t);
          }),
          (h.Filter.prototype = Object.create(h.Destroyable.prototype)),
          (h.FilterReader = function (t) {
            (this.name = 'FilterReader'), (this.id = t);
          }),
          (h.FilterReader.prototype = Object.create(h.Destroyable.prototype)),
          (h.FilterWriter = function (t) {
            (this.name = 'FilterWriter'), (this.id = t);
          }),
          (h.FilterWriter.prototype = Object.create(h.Destroyable.prototype)),
          (h.Flattener = function (t) {
            (this.name = 'Flattener'), (this.id = t);
          }),
          (h.Flattener.prototype = Object.create(h.Destroyable.prototype)),
          (h.FlowDocument = function (t) {
            (this.name = 'FlowDocument'), (this.id = t);
          }),
          (h.FlowDocument.prototype = Object.create(h.Destroyable.prototype)),
          (h.Font = function (t) {
            (this.name = 'Font'), (this.id = t);
          }),
          (h.Font.prototype = Object.create(h.Destroyable.prototype)),
          (h.FreeTextAnnot = function (t) {
            (this.name = 'FreeTextAnnot'), (this.id = t);
          }),
          (h.Function = function (t) {
            (this.name = 'Function'), (this.id = t);
          }),
          (h.Function.prototype = Object.create(h.Destroyable.prototype)),
          (h.GState = function (t) {
            (this.name = 'GState'), (this.id = t);
          }),
          (h.GeometryCollection = function (t) {
            (this.name = 'GeometryCollection'), (this.id = t);
          }),
          (h.GeometryCollection.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.HighlightAnnot = function (t) {
            (this.name = 'HighlightAnnot'), (this.id = t);
          }),
          (h.Highlights = function (t) {
            (this.name = 'Highlights'), (this.id = t);
          }),
          (h.Highlights.prototype = Object.create(h.Destroyable.prototype)),
          (h.Image = function (t) {
            (this.name = 'Image'), (this.id = t);
          }),
          (h.InkAnnot = function (t) {
            (this.name = 'InkAnnot'), (this.id = t);
          }),
          (h.Iterator = function (t, e) {
            (this.name = 'Iterator'), (this.id = t), (this.type = e);
          }),
          (h.Iterator.prototype = Object.create(h.Destroyable.prototype)),
          (h.KeyStrokeActionResult = function (t) {
            (this.name = 'KeyStrokeActionResult'), (this.id = t);
          }),
          (h.KeyStrokeActionResult.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.KeyStrokeEventData = function (t) {
            (this.name = 'KeyStrokeEventData'), (this.id = t);
          }),
          (h.KeyStrokeEventData.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.LineAnnot = function (t) {
            (this.name = 'LineAnnot'), (this.id = t);
          }),
          (h.LinkAnnot = function (t) {
            (this.name = 'LinkAnnot'), (this.id = t);
          }),
          (h.List = function (t) {
            (this.name = 'List'), (this.id = t);
          }),
          (h.ListBoxWidget = function (t) {
            (this.name = 'ListBoxWidget'), (this.id = t);
          }),
          (h.ListItem = function (t) {
            (this.name = 'ListItem'), (this.id = t);
          }),
          (h.MarkupAnnot = function (t) {
            (this.name = 'MarkupAnnot'), (this.id = t);
          }),
          (h.Matrix2D = function (t, e, n, i, r, o) {
            if (((this.name = 'Matrix2D'), !t || void 0 !== e))
              return new h.Matrix2D({
                m_a: (t = void 0 === t ? 0 : t),
                m_b: (e = void 0 === e ? 0 : e),
                m_c: (n = void 0 === n ? 0 : n),
                m_d: (i = void 0 === i ? 0 : i),
                m_h: (r = void 0 === r ? 0 : r),
                m_v: (o = void 0 === o ? 0 : o),
              });
            W(t, this);
          }),
          (h.MovieAnnot = function (t) {
            (this.name = 'MovieAnnot'), (this.id = t);
          }),
          (h.NameTree = function (t) {
            (this.name = 'NameTree'), (this.id = t);
          }),
          (h.NumberTree = function (t) {
            (this.name = 'NumberTree'), (this.id = t);
          }),
          (h.OCG = function (t) {
            (this.name = 'OCG'), (this.id = t);
          }),
          (h.OCGConfig = function (t) {
            (this.name = 'OCGConfig'), (this.id = t);
          }),
          (h.OCGContext = function (t) {
            (this.name = 'OCGContext'), (this.id = t);
          }),
          (h.OCGContext.prototype = Object.create(h.Destroyable.prototype)),
          (h.OCMD = function (t) {
            (this.name = 'OCMD'), (this.id = t);
          }),
          (h.OCRModule = function (t) {
            (this.name = 'OCRModule'), (this.id = t);
          }),
          (h.Obj = function (t) {
            (this.name = 'Obj'), (this.id = t);
          }),
          (h.ObjSet = function (t) {
            (this.name = 'ObjSet'), (this.id = t);
          }),
          (h.ObjSet.prototype = Object.create(h.Destroyable.prototype)),
          (h.ObjectIdentifier = function (t) {
            (this.name = 'ObjectIdentifier'), (this.id = t);
          }),
          (h.ObjectIdentifier.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.OwnedBitmap = function (t) {
            (this.name = 'OwnedBitmap'), (this.id = t);
          }),
          (h.PDFACompliance = function (t) {
            (this.name = 'PDFACompliance'), (this.id = t);
          }),
          (h.PDFACompliance.prototype = Object.create(h.Destroyable.prototype)),
          (h.PDFDC = function (t) {
            (this.name = 'PDFDC'), (this.id = t);
          }),
          (h.PDFDCEX = function (t) {
            (this.name = 'PDFDCEX'), (this.id = t);
          }),
          (h.PDFDoc = function (t) {
            (this.name = 'PDFDoc'), (this.id = t);
          }),
          (h.PDFDoc.prototype = Object.create(h.Destroyable.prototype)),
          (h.PDFDocInfo = function (t) {
            (this.name = 'PDFDocInfo'), (this.id = t);
          }),
          (h.PDFDocViewPrefs = function (t) {
            (this.name = 'PDFDocViewPrefs'), (this.id = t);
          }),
          (h.PDFDraw = function (t) {
            (this.name = 'PDFDraw'), (this.id = t);
          }),
          (h.PDFDraw.prototype = Object.create(h.Destroyable.prototype)),
          (h.PDFRasterizer = function (t) {
            (this.name = 'PDFRasterizer'), (this.id = t);
          }),
          (h.PDFRasterizer.prototype = Object.create(h.Destroyable.prototype)),
          (h.PDFTronCustomSecurityHandler = function (t) {
            (this.name = 'PDFTronCustomSecurityHandler'), (this.id = t);
          }),
          (h.Page = function (t) {
            (this.name = 'Page'), (this.id = t);
          }),
          (h.PageLabel = function (t, e, n) {
            if (((this.name = 'PageLabel'), !t || void 0 !== e))
              return new h.PageLabel({
                mp_obj: (t = void 0 === t ? '0' : t),
                m_first_page: (e = void 0 === e ? 0 : e),
                m_last_page: (n = void 0 === n ? 0 : n),
              });
            W(t, this);
          }),
          (h.PageSet = function (t) {
            (this.name = 'PageSet'), (this.id = t);
          }),
          (h.PageSet.prototype = Object.create(h.Destroyable.prototype)),
          (h.Paragraph = function (t) {
            (this.name = 'Paragraph'), (this.id = t);
          }),
          (h.PatternColor = function (t) {
            (this.name = 'PatternColor'), (this.id = t);
          }),
          (h.PatternColor.prototype = Object.create(h.Destroyable.prototype)),
          (h.PolyLineAnnot = function (t) {
            (this.name = 'PolyLineAnnot'), (this.id = t);
          }),
          (h.PolygonAnnot = function (t) {
            (this.name = 'PolygonAnnot'), (this.id = t);
          }),
          (h.PopupAnnot = function (t) {
            (this.name = 'PopupAnnot'), (this.id = t);
          }),
          (h.PrinterMode = function (t) {
            (this.name = 'PrinterMode'), (this.id = t);
          }),
          (h.PushButtonWidget = function (t) {
            (this.name = 'PushButtonWidget'), (this.id = t);
          }),
          (h.RadioButtonGroup = function (t) {
            (this.name = 'RadioButtonGroup'), (this.id = t);
          }),
          (h.RadioButtonGroup.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.RadioButtonWidget = function (t) {
            (this.name = 'RadioButtonWidget'), (this.id = t);
          }),
          (h.Rect = function (t, e, n, i, r) {
            if (((this.name = 'Rect'), !t || void 0 !== e))
              return new h.Rect({
                x1: (t = void 0 === t ? 0 : t),
                y1: (e = void 0 === e ? 0 : e),
                x2: (n = void 0 === n ? 0 : n),
                y2: (i = void 0 === i ? 0 : i),
                mp_rect: (r = void 0 === r ? '0' : r),
              });
            W(t, this);
          }),
          (h.Redaction = function (t) {
            (this.name = 'Redaction'), (this.id = t);
          }),
          (h.RedactionAnnot = function (t) {
            (this.name = 'RedactionAnnot'), (this.id = t);
          }),
          (h.Redactor = function (t) {
            (this.name = 'Redactor'), (this.id = t);
          }),
          (h.Reflow = function (t) {
            (this.name = 'Reflow'), (this.id = t);
          }),
          (h.Reflow.prototype = Object.create(h.Destroyable.prototype)),
          (h.ResultSnapshot = function (t) {
            (this.name = 'ResultSnapshot'), (this.id = t);
          }),
          (h.ResultSnapshot.prototype = Object.create(h.Destroyable.prototype)),
          (h.RoleMap = function (t) {
            (this.name = 'RoleMap'), (this.id = t);
          }),
          (h.RubberStampAnnot = function (t) {
            (this.name = 'RubberStampAnnot'), (this.id = t);
          }),
          (h.SDFDoc = function (t) {
            (this.name = 'SDFDoc'), (this.id = t);
          }),
          (h.SElement = function (t, e) {
            if (((this.name = 'SElement'), !t || void 0 !== e))
              return new h.SElement({
                obj: (t = void 0 === t ? '0' : t),
                k: (e = void 0 === e ? '0' : e),
              });
            W(t, this);
          }),
          (h.STree = function (t) {
            (this.name = 'STree'), (this.id = t);
          }),
          (h.ScreenAnnot = function (t) {
            (this.name = 'ScreenAnnot'), (this.id = t);
          }),
          (h.SecurityHandler = function (t) {
            (this.name = 'SecurityHandler'), (this.id = t);
          }),
          (h.SecurityHandler.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.Shading = function (t) {
            (this.name = 'Shading'), (this.id = t);
          }),
          (h.Shading.prototype = Object.create(h.Destroyable.prototype)),
          (h.ShapedText = function (t) {
            (this.name = 'ShapedText'), (this.id = t);
          }),
          (h.ShapedText.prototype = Object.create(h.Destroyable.prototype)),
          (h.SignatureHandler = function (t) {
            (this.name = 'SignatureHandler'), (this.id = t);
          }),
          (h.SignatureWidget = function (t) {
            (this.name = 'SignatureWidget'), (this.id = t);
          }),
          (h.SoundAnnot = function (t) {
            (this.name = 'SoundAnnot'), (this.id = t);
          }),
          (h.SquareAnnot = function (t) {
            (this.name = 'SquareAnnot'), (this.id = t);
          }),
          (h.SquigglyAnnot = function (t) {
            (this.name = 'SquigglyAnnot'), (this.id = t);
          }),
          (h.Stamper = function (t) {
            (this.name = 'Stamper'), (this.id = t);
          }),
          (h.Stamper.prototype = Object.create(h.Destroyable.prototype)),
          (h.StrikeOutAnnot = function (t) {
            (this.name = 'StrikeOutAnnot'), (this.id = t);
          }),
          (h.Table = function (t) {
            (this.name = 'Table'), (this.id = t);
          }),
          (h.TableCell = function (t) {
            (this.name = 'TableCell'), (this.id = t);
          }),
          (h.TableRow = function (t) {
            (this.name = 'TableRow'), (this.id = t);
          }),
          (h.TextAnnot = function (t) {
            (this.name = 'TextAnnot'), (this.id = t);
          }),
          (h.TextExtractor = function (t) {
            (this.name = 'TextExtractor'), (this.id = t);
          }),
          (h.TextExtractor.prototype = Object.create(h.Destroyable.prototype)),
          (h.TextExtractorLine = function (t, e, n, i, r, o) {
            if (((this.name = 'TextExtractorLine'), !t || void 0 !== e))
              return new h.TextExtractorLine({
                line: (t = void 0 === t ? '0' : t),
                uni: (e = void 0 === e ? '0' : e),
                num: (n = void 0 === n ? 0 : n),
                cur_num: (i = void 0 === i ? 0 : i),
                m_direction: (r = void 0 === r ? 0 : r),
                mp_bld: (o = void 0 === o ? '0' : o),
              });
            W(t, this);
          }),
          (h.TextExtractorStyle = function (t) {
            if (((this.name = 'TextExtractorStyle'), 'object' === d(t)))
              W(t, this);
            else if (void 0 !== t)
              return new h.TextExtractorStyle({ mp_imp: t });
          }),
          (h.TextExtractorWord = function (t, e, n, i, r, o) {
            if (((this.name = 'TextExtractorWord'), !t || void 0 !== e))
              return new h.TextExtractorWord({
                line: (t = void 0 === t ? '0' : t),
                word: (e = void 0 === e ? '0' : e),
                uni: (n = void 0 === n ? '0' : n),
                num: (i = void 0 === i ? 0 : i),
                cur_num: (r = void 0 === r ? 0 : r),
                mp_bld: (o = void 0 === o ? '0' : o),
              });
            W(t, this);
          }),
          (h.TextMarkupAnnot = function (t) {
            (this.name = 'TextMarkupAnnot'), (this.id = t);
          }),
          (h.TextRange = function (t) {
            (this.name = 'TextRange'), (this.id = t);
          }),
          (h.TextRun = function (t) {
            (this.name = 'TextRun'), (this.id = t);
          }),
          (h.TextSearch = function (t) {
            (this.name = 'TextSearch'), (this.id = t);
          }),
          (h.TextSearch.prototype = Object.create(h.Destroyable.prototype)),
          (h.TextStyledElement = function (t) {
            (this.name = 'TextStyledElement'), (this.id = t);
          }),
          (h.TextWidget = function (t) {
            (this.name = 'TextWidget'), (this.id = t);
          }),
          (h.TimestampingConfiguration = function (t) {
            (this.name = 'TimestampingConfiguration'), (this.id = t);
          }),
          (h.TimestampingConfiguration.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.TimestampingResult = function (t) {
            (this.name = 'TimestampingResult'), (this.id = t);
          }),
          (h.TimestampingResult.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.TrustVerificationResult = function (t) {
            (this.name = 'TrustVerificationResult'), (this.id = t);
          }),
          (h.TrustVerificationResult.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.UnderlineAnnot = function (t) {
            (this.name = 'UnderlineAnnot'), (this.id = t);
          }),
          (h.UndoManager = function (t) {
            (this.name = 'UndoManager'), (this.id = t);
          }),
          (h.UndoManager.prototype = Object.create(h.Destroyable.prototype)),
          (h.VerificationOptions = function (t) {
            (this.name = 'VerificationOptions'), (this.id = t);
          }),
          (h.VerificationOptions.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.VerificationResult = function (t) {
            (this.name = 'VerificationResult'), (this.id = t);
          }),
          (h.VerificationResult.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.ViewChangeCollection = function (t) {
            (this.name = 'ViewChangeCollection'), (this.id = t);
          }),
          (h.ViewChangeCollection.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.WatermarkAnnot = function (t) {
            (this.name = 'WatermarkAnnot'), (this.id = t);
          }),
          (h.WebFontDownloader = function (t) {
            (this.name = 'WebFontDownloader'), (this.id = t);
          }),
          (h.WidgetAnnot = function (t) {
            (this.name = 'WidgetAnnot'), (this.id = t);
          }),
          (h.X501AttributeTypeAndValue = function (t) {
            (this.name = 'X501AttributeTypeAndValue'), (this.id = t);
          }),
          (h.X501AttributeTypeAndValue.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.X501DistinguishedName = function (t) {
            (this.name = 'X501DistinguishedName'), (this.id = t);
          }),
          (h.X501DistinguishedName.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.X509Certificate = function (t) {
            (this.name = 'X509Certificate'), (this.id = t);
          }),
          (h.X509Certificate.prototype = Object.create(
            h.Destroyable.prototype
          )),
          (h.X509Extension = function (t) {
            (this.name = 'X509Extension'), (this.id = t);
          }),
          (h.X509Extension.prototype = Object.create(h.Destroyable.prototype)),
          (h.PDFDoc.createRefreshOptions = function () {
            return Promise.resolve(new h.PDFDoc.RefreshOptions());
          }),
          (h.PDFDoc.RefreshOptions = function () {
            (this.mImpl = {}), (this.mHelpers = i());
          }),
          (h.PDFDoc.RefreshOptions.prototype.getDrawBackgroundOnly =
            function () {
              return !(
                'DrawBackgroundOnly' in this.mImpl &&
                !this.mImpl.DrawBackgroundOnly
              );
            }),
          (h.PDFDoc.RefreshOptions.prototype.setDrawBackgroundOnly = function (
            t
          ) {
            return (
              this.mHelpers.putBool(this.mImpl, 'DrawBackgroundOnly', t), this
            );
          }),
          (h.PDFDoc.RefreshOptions.prototype.getRefreshExisting = function () {
            return !(
              'RefreshExisting' in this.mImpl && !this.mImpl.RefreshExisting
            );
          }),
          (h.PDFDoc.RefreshOptions.prototype.setRefreshExisting = function (t) {
            return (
              this.mHelpers.putBool(this.mImpl, 'RefreshExisting', t), this
            );
          }),
          (h.PDFDoc.RefreshOptions.prototype.getUseNonStandardRotation =
            function () {
              return (
                'UseNonStandardRotation' in this.mImpl &&
                !!this.mImpl.UseNonStandardRotation
              );
            }),
          (h.PDFDoc.RefreshOptions.prototype.setUseNonStandardRotation =
            function (t) {
              return (
                this.mHelpers.putBool(this.mImpl, 'UseNonStandardRotation', t),
                this
              );
            }),
          (h.PDFDoc.RefreshOptions.prototype.getUseRoundedCorners =
            function () {
              return (
                'UseRoundedCorners' in this.mImpl &&
                !!this.mImpl.UseRoundedCorners
              );
            }),
          (h.PDFDoc.RefreshOptions.prototype.setUseRoundedCorners = function (
            t
          ) {
            return (
              this.mHelpers.putBool(this.mImpl, 'UseRoundedCorners', t), this
            );
          }),
          (h.PDFDoc.RefreshOptions.prototype.getJsonString = function () {
            return JSON.stringify(this.mImpl);
          }),
          (h.createRefreshOptions = h.PDFDoc.createRefreshOptions),
          (h.RefreshOptions = h.PDFDoc.RefreshOptions),
          (h.PDFDoc.createDiffOptions = function () {
            return Promise.resolve(new h.PDFDoc.DiffOptions());
          }),
          (h.PDFDoc.DiffOptions = function () {
            (this.mImpl = {}), (this.mHelpers = i());
          }),
          (h.PDFDoc.DiffOptions.prototype.getAddGroupAnnots = function () {
            return (
              'AddGroupAnnots' in this.mImpl && !!this.mImpl.AddGroupAnnots
            );
          }),
          (h.PDFDoc.DiffOptions.prototype.setAddGroupAnnots = function (t) {
            return this.mHelpers.putBool(this.mImpl, 'AddGroupAnnots', t), this;
          }),
          (h.PDFDoc.DiffOptions.prototype.getBlendMode = function () {
            return 'BlendMode' in this.mImpl ? this.mImpl.BlendMode : 5;
          }),
          (h.PDFDoc.DiffOptions.prototype.setBlendMode = function (t) {
            return this.mHelpers.putNumber(this.mImpl, 'BlendMode', t), this;
          }),
          (h.PDFDoc.DiffOptions.prototype.getColorA = function () {
            return 'ColorA' in this.mImpl
              ? this.mHelpers.jsColorFromNumber(this.mImpl.ColorA)
              : this.mHelpers.jsColorFromNumber(4291559424);
          }),
          (h.PDFDoc.DiffOptions.prototype.setColorA = function (t) {
            return (
              this.mHelpers.putNumber(
                this.mImpl,
                'ColorA',
                this.mHelpers.jsColorToNumber(t)
              ),
              this
            );
          }),
          (h.PDFDoc.DiffOptions.prototype.getColorB = function () {
            return 'ColorB' in this.mImpl
              ? this.mHelpers.jsColorFromNumber(this.mImpl.ColorB)
              : this.mHelpers.jsColorFromNumber(4278242508);
          }),
          (h.PDFDoc.DiffOptions.prototype.setColorB = function (t) {
            return (
              this.mHelpers.putNumber(
                this.mImpl,
                'ColorB',
                this.mHelpers.jsColorToNumber(t)
              ),
              this
            );
          }),
          (h.PDFDoc.DiffOptions.prototype.getLuminosityCompression =
            function () {
              return 'LuminosityCompression' in this.mImpl
                ? this.mImpl.LuminosityCompression
                : 10;
            }),
          (h.PDFDoc.DiffOptions.prototype.setLuminosityCompression = function (
            t
          ) {
            return (
              this.mHelpers.putNumber(this.mImpl, 'LuminosityCompression', t),
              this
            );
          }),
          (h.PDFDoc.DiffOptions.prototype.getJsonString = function () {
            return JSON.stringify(this.mImpl);
          }),
          (h.createDiffOptions = h.PDFDoc.createDiffOptions),
          (h.DiffOptions = h.PDFDoc.DiffOptions),
          (h.PDFDoc.createTextDiffOptions = function () {
            return Promise.resolve(new h.PDFDoc.TextDiffOptions());
          }),
          (h.PDFDoc.TextDiffOptions = function () {
            (this.name = 'PDFNet.PDFDoc.TextDiffOptions'),
              (this.mImpl = {}),
              (this.mHelpers = i());
          }),
          (h.PDFDoc.TextDiffOptions.prototype.getColorA = function () {
            return 'ColorA' in this.mImpl
              ? this.mHelpers.jsColorFromNumber(this.mImpl.ColorA)
              : this.mHelpers.jsColorFromNumber(4293284423);
          }),
          (h.PDFDoc.TextDiffOptions.prototype.setColorA = function (t) {
            return (
              this.mHelpers.putNumber(
                this.mImpl,
                'ColorA',
                this.mHelpers.jsColorToNumber(t)
              ),
              this
            );
          }),
          (h.PDFDoc.TextDiffOptions.prototype.getOpacityA = function () {
            return 'OpacityA' in this.mImpl ? this.mImpl.OpacityA : 0.5;
          }),
          (h.PDFDoc.TextDiffOptions.prototype.setOpacityA = function (t) {
            return this.mHelpers.putNumber(this.mImpl, 'OpacityA', t), this;
          }),
          (h.PDFDoc.TextDiffOptions.prototype.getColorB = function () {
            return 'ColorB' in this.mImpl
              ? this.mHelpers.jsColorFromNumber(this.mImpl.ColorB)
              : this.mHelpers.jsColorFromNumber(4284278322);
          }),
          (h.PDFDoc.TextDiffOptions.prototype.setColorB = function (t) {
            return (
              this.mHelpers.putNumber(
                this.mImpl,
                'ColorB',
                this.mHelpers.jsColorToNumber(t)
              ),
              this
            );
          }),
          (h.PDFDoc.TextDiffOptions.prototype.getCompareUsingZOrder =
            function () {
              return (
                'CompareUsingZOrder' in this.mImpl &&
                !!this.mImpl.CompareUsingZOrder
              );
            }),
          (h.PDFDoc.TextDiffOptions.prototype.setCompareUsingZOrder = function (
            t
          ) {
            return (
              this.mHelpers.putBool(this.mImpl, 'CompareUsingZOrder', t), this
            );
          }),
          (h.PDFDoc.TextDiffOptions.prototype.getOpacityB = function () {
            return 'OpacityB' in this.mImpl ? this.mImpl.OpacityB : 0.5;
          }),
          (h.PDFDoc.TextDiffOptions.prototype.setOpacityB = function (t) {
            return this.mHelpers.putNumber(this.mImpl, 'OpacityB', t), this;
          }),
          (h.PDFDoc.TextDiffOptions.prototype.addZonesForPage = function (
            t,
            e,
            n
          ) {
            if (
              (void 0 === this.mImpl[t] && (this.mImpl[t] = []),
              this.mImpl[t].length < n)
            )
              for (var i = this.mImpl[t].length; i < n; i++)
                this.mImpl[t].push([]);
            (e = e.map(function (t) {
              return [t.x1, t.y1, t.x2, t.y2];
            })),
              (this.mImpl[t][n - 1] = e);
          }),
          (h.PDFDoc.TextDiffOptions.prototype.getExtraMoveColor = function () {
            return 'ExtraMoveColor' in this.mImpl
              ? this.mHelpers.jsColorFromNumber(this.mImpl.ExtraMoveColor)
              : this.mHelpers.jsColorFromNumber(4294898256);
          }),
          (h.PDFDoc.TextDiffOptions.prototype.setExtraMoveColor = function (t) {
            return (
              this.mHelpers.putNumber(
                this.mImpl,
                'ExtraMoveColor',
                this.mHelpers.jsColorToNumber(t)
              ),
              this
            );
          }),
          (h.PDFDoc.TextDiffOptions.prototype.getExtraMoveOpacity =
            function () {
              return 'ExtraMoveOpacity' in this.mImpl
                ? this.mImpl.ExtraMoveOpacity
                : 0.8;
            }),
          (h.PDFDoc.TextDiffOptions.prototype.setExtraMoveOpacity = function (
            t
          ) {
            return (
              this.mHelpers.putNumber(this.mImpl, 'ExtraMoveOpacity', t), this
            );
          }),
          (h.PDFDoc.TextDiffOptions.prototype.getExtraMoveHighlight =
            function () {
              return (
                'ExtraMoveHighlight' in this.mImpl &&
                !!this.mImpl.ExtraMoveHighlight
              );
            }),
          (h.PDFDoc.TextDiffOptions.prototype.setExtraMoveHighlight = function (
            t
          ) {
            return (
              this.mHelpers.putBool(this.mImpl, 'ExtraMoveHighlight', t), this
            );
          }),
          (h.PDFDoc.TextDiffOptions.prototype.getShowPlaceholders =
            function () {
              return (
                'ShowPlaceholders' in this.mImpl &&
                !!this.mImpl.ShowPlaceholders
              );
            }),
          (h.PDFDoc.TextDiffOptions.prototype.setShowPlaceholders = function (
            t
          ) {
            return (
              this.mHelpers.putBool(this.mImpl, 'ShowPlaceholders', t), this
            );
          }),
          (h.PDFDoc.TextDiffOptions.prototype.getCompareStyles = function () {
            return 'CompareStyles' in this.mImpl && !!this.mImpl.CompareStyles;
          }),
          (h.PDFDoc.TextDiffOptions.prototype.setCompareStyles = function (t) {
            return this.mHelpers.putBool(this.mImpl, 'CompareStyles', t), this;
          }),
          (h.PDFDoc.TextDiffOptions.prototype.addIgnoreZonesForPage = function (
            t,
            e
          ) {
            return this.addZonesForPage('IgnoreZones', t, e), this;
          }),
          (h.PDFDoc.TextDiffOptions.prototype.getJsonString = function () {
            return JSON.stringify(this.mImpl);
          }),
          (h.FDFDoc.createXFDFExportOptions = function () {
            return Promise.resolve(new h.FDFDoc.XFDFExportOptions());
          }),
          (h.FDFDoc.XFDFExportOptions = function () {
            (this.name = 'PDFNet.FDFDoc.XFDFExportOptions'),
              (this.mImpl = {}),
              (this.mHelpers = i());
          }),
          (h.FDFDoc.XFDFExportOptions.prototype.getWriteAnnotationAppearance =
            function () {
              return (
                'WriteAnnotationAppearance' in this.mImpl &&
                !!this.mImpl.WriteAnnotationAppearance
              );
            }),
          (h.FDFDoc.XFDFExportOptions.prototype.setWriteAnnotationAppearance =
            function (t) {
              return (
                this.mHelpers.putBool(
                  this.mImpl,
                  'WriteAnnotationAppearance',
                  t
                ),
                this
              );
            }),
          (h.FDFDoc.XFDFExportOptions.prototype.getWriteImagedata =
            function () {
              return !(
                'WriteImagedata' in this.mImpl && !this.mImpl.WriteImagedata
              );
            }),
          (h.FDFDoc.XFDFExportOptions.prototype.setWriteImagedata = function (
            t
          ) {
            return this.mHelpers.putBool(this.mImpl, 'WriteImagedata', t), this;
          }),
          (h.FDFDoc.XFDFExportOptions.prototype.getJsonString = function () {
            return JSON.stringify(this.mImpl);
          }),
          (h.PDFDoc.createSnapToOptions = function () {
            return Promise.resolve(new h.PDFDoc.SnapToOptions());
          }),
          (h.PDFDoc.SnapToOptions = function () {
            (this.name = 'PDFNet.PDFDoc.SnapToOptions'),
              (this.mImpl = {}),
              (this.mHelpers = i());
          }),
          (h.PDFDoc.SnapToOptions.prototype.setShapeLimit = function (t) {
            return this.mHelpers.putNumber(this.mImpl, 'ShapeLimit', t), this;
          }),
          (h.PDFDoc.SnapToOptions.prototype.getJsonString = function () {
            return JSON.stringify(this.mImpl);
          }),
          (h.PDFDoc.createMergeXFDFOptions = function () {
            return Promise.resolve(new h.PDFDoc.MergeXFDFOptions());
          }),
          (h.PDFDoc.MergeXFDFOptions = function () {
            (this.name = 'PDFNet.PDFDoc.MergeXFDFOptions'),
              (this.mImpl = {}),
              (this.mHelpers = i());
          }),
          (h.PDFDoc.MergeXFDFOptions.prototype.getForce = function () {
            return 'Force' in this.mImpl && !!this.mImpl.Force;
          }),
          (h.PDFDoc.MergeXFDFOptions.prototype.setForce = function (t) {
            return this.mHelpers.putBool(this.mImpl, 'Force', t), this;
          }),
          (h.PDFDoc.MergeXFDFOptions.prototype.getJsonString = function () {
            return JSON.stringify(this.mImpl);
          }),
          (h.QuadPoint = function (t, e, n, i, r, o, s, u) {
            if (((this.name = 'QuadPoint'), !t || void 0 !== e))
              return new h.QuadPoint({
                p1x: (t = void 0 === t ? 0 : t),
                p1y: (e = void 0 === e ? 0 : e),
                p2x: (n = void 0 === n ? 0 : n),
                p2y: (i = void 0 === i ? 0 : i),
                p3x: (r = void 0 === r ? 0 : r),
                p3y: (o = void 0 === o ? 0 : o),
                p4x: (s = void 0 === s ? 0 : s),
                p4y: (u = void 0 === u ? 0 : u),
              });
            W(t, this);
          }),
          (h.Point = function (t, e) {
            if (((this.name = 'Point'), !t || void 0 !== e))
              return new h.Point({
                x: (t = void 0 === t ? 0 : t),
                y: (e = void 0 === e ? 0 : e),
              });
            W(t, this);
          }),
          (h.CharData = function (t) {
            if (void 0 === t)
              throw new TypeError(
                'CharData requires an object to construct with.'
              );
            (this.name = 'CharData'), W(t, this);
          }),
          (h.Separation = function (t) {
            if (void 0 === t)
              throw new TypeError(
                'Separation requires an object to construct with.'
              );
            (this.name = 'Separation'), W(t, this);
          }),
          (h.Optimizer.createImageSettings = function () {
            return Promise.resolve(new h.Optimizer.ImageSettings());
          }),
          (h.Optimizer.ImageSettings = function () {
            (this.m_max_pixels = 4294967295),
              (this.m_max_dpi = 225),
              (this.m_resample_dpi = 150),
              (this.m_quality = 5),
              (this.m_compression_mode =
                h.Optimizer.ImageSettings.CompressionMode.e_retain),
              (this.m_downsample_mode =
                h.Optimizer.ImageSettings.DownsampleMode.e_default),
              (this.m_force_changes = this.m_force_recompression = !1);
          }),
          (h.Optimizer.ImageSettings.prototype.setImageDPI = function (t, e) {
            return (this.m_max_dpi = t), (this.m_resample_dpi = e), this;
          }),
          (h.Optimizer.ImageSettings.prototype.setCompressionMode = function (
            t
          ) {
            return (this.m_compression_mode = t), this;
          }),
          (h.Optimizer.ImageSettings.prototype.setDownsampleMode = function (
            t
          ) {
            return (this.m_downsample_mode = t), this;
          }),
          (h.Optimizer.ImageSettings.prototype.setQuality = function (t) {
            return (this.m_quality = t), this;
          }),
          (h.Optimizer.ImageSettings.prototype.forceRecompression = function (
            t
          ) {
            return (this.m_force_recompression = t), this;
          }),
          (h.Optimizer.ImageSettings.prototype.forceChanges = function (t) {
            return (this.m_force_changes = t), this;
          }),
          (h.Optimizer.createMonoImageSettings = function () {
            return Promise.resolve(new h.Optimizer.MonoImageSettings());
          }),
          (h.Optimizer.MonoImageSettings = function () {
            (this.m_max_pixels = 4294967295),
              (this.m_max_dpi = 450),
              (this.m_resample_dpi = 300),
              (this.m_jbig2_threshold = 8.5),
              (this.m_compression_mode =
                h.Optimizer.ImageSettings.CompressionMode.e_retain),
              (this.m_downsample_mode =
                h.Optimizer.ImageSettings.DownsampleMode.e_default),
              (this.m_force_changes = this.m_force_recompression = !1);
          }),
          (h.Optimizer.MonoImageSettings.prototype.setImageDPI = function (
            t,
            e
          ) {
            return (this.m_max_dpi = t), (this.m_resample_dpi = e), this;
          }),
          (h.Optimizer.MonoImageSettings.prototype.setCompressionMode =
            function (t) {
              return (this.m_compression_mode = t), this;
            }),
          (h.Optimizer.MonoImageSettings.prototype.setDownsampleMode =
            function (t) {
              return (this.m_downsample_mode = t), this;
            }),
          (h.Optimizer.MonoImageSettings.prototype.setJBIG2Threshold =
            function (t) {
              return (this.m_jbig2_threshold = quality), this;
            }),
          (h.Optimizer.MonoImageSettings.prototype.forceRecompression =
            function (t) {
              return (this.m_force_recompression = t), this;
            }),
          (h.Optimizer.MonoImageSettings.prototype.forceChanges = function (t) {
            return (this.m_force_changes = t), this;
          }),
          (h.Optimizer.createTextSettings = function () {
            return Promise.resolve(new h.Optimizer.TextSettings());
          }),
          (h.Optimizer.TextSettings = function () {
            this.m_embed_fonts = this.m_subset_fonts = !1;
          }),
          (h.Optimizer.TextSettings.prototype.subsetFonts = function (t) {
            return (this.m_subset_fonts = t), this;
          }),
          (h.Optimizer.TextSettings.prototype.embedFonts = function (t) {
            return (this.m_embed_fonts = t), this;
          }),
          (h.Optimizer.createOptimizerSettings = function () {
            return Promise.resolve(new h.Optimizer.OptimizerSettings());
          }),
          (h.Optimizer.OptimizerSettings = function () {
            (this.color_image_settings = new h.Optimizer.ImageSettings()),
              (this.grayscale_image_settings = new h.Optimizer.ImageSettings()),
              (this.mono_image_settings = new h.Optimizer.MonoImageSettings()),
              (this.text_settings = new h.Optimizer.TextSettings()),
              (this.remove_custom = !0);
          }),
          (h.Optimizer.OptimizerSettings.prototype.setColorImageSettings =
            function (t) {
              return (this.color_image_settings = t), this;
            }),
          (h.Optimizer.OptimizerSettings.prototype.setGrayscaleImageSettings =
            function (t) {
              return (this.grayscale_image_settings = t), this;
            }),
          (h.Optimizer.OptimizerSettings.prototype.setMonoImageSettings =
            function (t) {
              return (this.mono_image_settings = t), this;
            }),
          (h.Optimizer.OptimizerSettings.prototype.setTextSettings = function (
            t
          ) {
            return (this.text_settings = t), this;
          }),
          (h.Optimizer.OptimizerSettings.prototype.removeCustomEntries =
            function (t) {
              return (this.remove_custom = t), this;
            }),
          (h.Optimizer.ImageSettings.CompressionMode = {
            e_retain: 0,
            e_flate: 1,
            e_jpeg: 2,
            e_jpeg2000: 3,
            e_none: 4,
          }),
          (h.Optimizer.ImageSettings.DownsampleMode = {
            e_off: 0,
            e_default: 1,
          }),
          (h.Optimizer.MonoImageSettings.CompressionMode = {
            e_jbig2: 0,
            e_flate: 1,
            e_none: 2,
          }),
          (h.Optimizer.MonoImageSettings.DownsampleMode = {
            e_off: 0,
            e_default: 1,
          }),
          (h.Convert.ConversionOptions = function (t) {
            (this.name = 'PDFNet.Convert.ConversionOptions'),
              t && W(JSON.parse(t), this);
          }),
          (h.Convert.ConversionOptions.prototype.setFileExtension = function (
            t
          ) {
            return (this.FileExtension = t), this;
          }),
          (h.Convert.ConversionOptions.prototype.setEnableExternalMediaDownloads =
            function (t) {
              return (this.EnableExternalMediaDownloads = t), this;
            }),
          (h.Convert.createOfficeToPDFOptions = function (t) {
            return Promise.resolve(new h.Convert.OfficeToPDFOptions(t));
          }),
          (h.Convert.OfficeToPDFOptions = function (t) {
            h.Convert.ConversionOptions.call(this, t);
          }),
          (h.Convert.OfficeToPDFOptions.prototype.setApplyPageBreaksToSheet =
            function (t) {
              return (this.ApplyPageBreaksToSheet = t), this;
            }),
          (h.Convert.OfficeToPDFOptions.prototype.setDisplayChangeTracking =
            function (t) {
              return (this.DisplayChangeTracking = t), this;
            }),
          (h.Convert.OfficeToPDFOptions.prototype.setExcelDefaultCellBorderWidth =
            function (t) {
              return (this.ExcelDefaultCellBorderWidth = t), this;
            }),
          (h.Convert.OfficeToPDFOptions.prototype.setExcelMaxAllowedCellCount =
            function (t) {
              return (this.ExcelMaxAllowedCellCount = t), this;
            }),
          (h.Convert.OfficeToPDFOptions.prototype.setLocale = function (t) {
            return (this.Locale = t), this;
          }),
          (h.Convert.OfficeToPDFOptions.prototype.setTemplateParamsJson =
            function (t) {
              return (this.TemplateParamsJson = t), this;
            }),
          (h.Convert.OverprintPreviewMode = {
            e_op_off: 0,
            e_op_on: 1,
            e_op_pdfx_on: 2,
          }),
          (h.Convert.XPSOutputCommonOptions = function () {
            (this.name = 'PDFNet.Convert.XPSOutputCommonOptions'),
              (this.mImpl = {});
          }),
          (h.Convert.XPSOutputCommonOptions.prototype.setPrintMode = function (
            t
          ) {
            return (this.mImpl.PRINTMODE = t), this;
          }),
          (h.Convert.XPSOutputCommonOptions.prototype.setDPI = function (t) {
            return (this.mImpl.DPI = t), this;
          }),
          (h.Convert.XPSOutputCommonOptions.prototype.setRenderPages =
            function (t) {
              return (this.mImpl.RENDER = t), this;
            }),
          (h.Convert.XPSOutputCommonOptions.prototype.setThickenLines =
            function (t) {
              return (this.mImpl.THICKENLINES = t), this;
            }),
          (h.Convert.XPSOutputCommonOptions.prototype.generateURLLinks =
            function (t) {
              return (this.mImpl.URL_LINKS = t), this;
            }),
          (h.Convert.XPSOutputCommonOptions.prototype.setOverprint = function (
            t
          ) {
            switch (t) {
              case h.Convert.OverprintPreviewMode.e_op_off:
                this.mImpl.OVERPRINT_MODE = 'OFF';
                break;
              case h.Convert.OverprintPreviewMode.e_op_on:
                this.mImpl.OVERPRINT_MODE = 'ON';
                break;
              case h.Convert.OverprintPreviewMode.e_op_pdfx_on:
                this.mImpl.OVERPRINT_MODE = 'PDFX';
            }
            return this;
          }),
          (h.Convert.XPSOutputCommonOptions.prototype.getJsonString =
            function () {
              return JSON.stringify(this.mImpl);
            }),
          (h.Convert.createXPSOutputOptions = function () {
            return Promise.resolve(new h.Convert.XPSOutputOptions());
          }),
          (h.Convert.XPSOutputOptions = function () {
            h.Convert.XPSOutputCommonOptions.call(this),
              (this.name = 'PDFNet.Convert.XPSOutputOptions');
          }),
          (h.Convert.XPSOutputOptions.prototype = Object.create(
            h.Convert.XPSOutputCommonOptions.prototype
          )),
          (h.Convert.XPSOutputOptions.prototype.setOpenXps = function (t) {
            return (this.mImpl.OPENXPS = t), this;
          }),
          (h.Convert.FlattenFlag = {
            e_off: 0,
            e_simple: 1,
            e_fast: 2,
            e_high_quality: 3,
          }),
          (h.Convert.FlattenThresholdFlag = {
            e_very_strict: 0,
            e_strict: 1,
            e_default: 2,
            e_keep_most: 3,
            e_keep_all: 4,
          }),
          (h.Convert.AnnotationOutputFlag = {
            e_internal_xfdf: 0,
            e_external_xfdf: 1,
            e_flatten: 2,
          }),
          (h.Convert.createXODOutputOptions = function () {
            return Promise.resolve(new h.Convert.XODOutputOptions());
          }),
          (h.Convert.XODOutputOptions = function () {
            h.Convert.XPSOutputCommonOptions.call(this),
              (this.name = 'PDFNet.Convert.XODOutputOptions');
          }),
          (h.Convert.XODOutputOptions.prototype = Object.create(
            h.Convert.XPSOutputCommonOptions.prototype
          )),
          (h.Convert.XODOutputOptions.prototype.setExtractUsingZorder =
            function (t) {
              return (this.mImpl.USEZORDER = t), this;
            }),
          (h.Convert.XODOutputOptions.prototype.setOutputThumbnails = function (
            t
          ) {
            return (this.mImpl.NOTHUMBS = t), this;
          }),
          (h.Convert.XODOutputOptions.prototype.setThumbnailSize = function (
            t,
            e
          ) {
            return (
              (this.mImpl.THUMB_SIZE = t),
              (this.mImpl.LARGE_THUMB_SIZE = e || t),
              this
            );
          }),
          (h.Convert.XODOutputOptions.prototype.setElementLimit = function (t) {
            return (this.mImpl.ELEMENTLIMIT = t), this;
          }),
          (h.Convert.XODOutputOptions.prototype.setOpacityMaskWorkaround =
            function (t) {
              return (this.mImpl.MASKRENDER = t), this;
            }),
          (h.Convert.XODOutputOptions.prototype.setMaximumImagePixels =
            function (t) {
              return (this.mImpl.MAX_IMAGE_PIXELS = t), this;
            }),
          (h.Convert.XODOutputOptions.prototype.setFlattenContent = function (
            t
          ) {
            switch (t) {
              case h.Convert.FlattenFlag.e_off:
                this.mImpl.FLATTEN_CONTENT = 'OFF';
                break;
              case h.Convert.FlattenFlag.e_simple:
                this.mImpl.FLATTEN_CONTENT = 'SIMPLE';
                break;
              case h.Convert.FlattenFlag.e_fast:
                this.mImpl.FLATTEN_CONTENT = 'FAST';
                break;
              case h.Convert.FlattenFlag.e_high_quality:
                this.mImpl.FLATTEN_CONTENT = 'HIGH_QUALITY';
            }
            return this;
          }),
          (h.Convert.XODOutputOptions.prototype.setFlattenThreshold = function (
            t
          ) {
            switch (t) {
              case h.Convert.FlattenThresholdFlag.e_very_strict:
                this.mImpl.FLATTEN_THRESHOLD = 'VERY_STRICT';
                break;
              case h.Convert.FlattenThresholdFlag.e_strict:
                this.mImpl.FLATTEN_THRESHOLD = 'STRICT';
                break;
              case h.Convert.FlattenThresholdFlag.e_default:
                this.mImpl.FLATTEN_THRESHOLD = 'DEFAULT';
                break;
              case h.Convert.FlattenThresholdFlag.e_keep_most:
                this.mImpl.FLATTEN_THRESHOLD = 'KEEP_MOST';
                break;
              case h.Convert.FlattenThresholdFlag.e_keep_all:
                this.mImpl.FLATTEN_THRESHOLD = 'KEEP_ALL';
            }
            return this;
          }),
          (h.Convert.XODOutputOptions.prototype.setPreferJPG = function (t) {
            return (this.mImpl.PREFER_JPEG = t), this;
          }),
          (h.Convert.XODOutputOptions.prototype.setJPGQuality = function (t) {
            return (this.mImpl.JPEG_QUALITY = t), this;
          }),
          (h.Convert.XODOutputOptions.prototype.setSilverlightTextWorkaround =
            function (t) {
              return (this.mImpl.REMOVE_ROTATED_TEXT = t), this;
            }),
          (h.Convert.XODOutputOptions.prototype.setAnnotationOutput = function (
            t
          ) {
            switch (t) {
              case h.Convert.AnnotationOutputFlag.e_internal_xfdf:
                this.mImpl.ANNOTATION_OUTPUT = 'INTERNAL';
                break;
              case h.Convert.AnnotationOutputFlag.e_external_xfdf:
                this.mImpl.ANNOTATION_OUTPUT = 'EXTERNAL';
                break;
              case h.Convert.AnnotationOutputFlag.e_flatten:
                this.mImpl.ANNOTATION_OUTPUT = 'FLATTEN';
            }
            return this;
          }),
          (h.Convert.XODOutputOptions.prototype.setExternalParts = function (
            t
          ) {
            return (this.mImpl.EXTERNAL_PARTS = t), this;
          }),
          (h.Convert.XODOutputOptions.prototype.setEncryptPassword = function (
            t
          ) {
            return (this.mImpl.ENCRYPT_PASSWORD = t), this;
          }),
          (h.Convert.XODOutputOptions.prototype.useSilverlightFlashCompatible =
            function (t) {
              return (this.mImpl.COMPATIBLE_XOD = t), this;
            }),
          (h.Convert.createTiffOutputOptions = function () {
            return Promise.resolve(new h.Convert.TiffOutputOptions());
          }),
          (h.Convert.TiffOutputOptions = function () {
            (this.name = 'PDFNet.Convert.TiffOutputOptions'), (this.mImpl = {});
          }),
          (h.Convert.TiffOutputOptions.prototype.setBox = function (t) {
            switch (t) {
              case h.Page.Box.e_media:
                this.mImpl.BOX = 'media';
                break;
              case h.Page.Box.e_crop:
                this.mImpl.BOX = 'crop';
                break;
              case h.Page.Box.e_bleed:
                this.mImpl.BOX = 'bleed';
                break;
              case h.Page.Box.e_trim:
                this.mImpl.BOX = 'trim';
                break;
              case h.Page.Box.e_art:
                this.mImpl.BOX = 'art';
            }
            return this;
          }),
          (h.Convert.TiffOutputOptions.prototype.setRotate = function (t) {
            switch (t) {
              case h.Page.Box.e_0:
                this.mImpl.ROTATE = '0';
                break;
              case h.Page.Box.e_90:
                this.mImpl.ROTATE = '90';
                break;
              case h.Page.Box.e_180:
                this.mImpl.ROTATE = '180';
                break;
              case h.Page.Box.e_270:
                this.mImpl.ROTATE = '270';
            }
            return this;
          }),
          (h.Convert.TiffOutputOptions.prototype.setClip = function (
            t,
            e,
            n,
            i
          ) {
            return (
              (this.mImpl.CLIP_X1 = t),
              (this.mImpl.CLIP_Y1 = e),
              (this.mImpl.CLIP_X2 = n),
              (this.mImpl.CLIP_Y2 = i),
              this
            );
          }),
          (h.Convert.TiffOutputOptions.prototype.setPages = function (t) {
            return (this.mImpl.PAGES = t), this;
          }),
          (h.Convert.TiffOutputOptions.prototype.setOverprint = function (t) {
            switch (t) {
              case h.PDFRasterizer.OverprintPreviewMode.e_op_off:
                this.mImpl.OVERPRINT_MODE = 'OFF';
                break;
              case h.PDFRasterizer.OverprintPreviewMode.e_op_on:
                this.mImpl.OVERPRINT_MODE = 'ON';
                break;
              case h.PDFRasterizer.OverprintPreviewMode.e_op_pdfx_on:
                this.mImpl.OVERPRINT_MODE = 'PDFX';
            }
            return this;
          }),
          (h.Convert.TiffOutputOptions.prototype.setCMYK = function (t) {
            return (this.mImpl.CMYK = t), this;
          }),
          (h.Convert.TiffOutputOptions.prototype.setDither = function (t) {
            return (this.mImpl.DITHER = t), this;
          }),
          (h.Convert.TiffOutputOptions.prototype.setGray = function (t) {
            return (this.mImpl.GRAY = t), this;
          }),
          (h.Convert.TiffOutputOptions.prototype.setMono = function (t) {
            return (this.mImpl.MONO = t), this;
          }),
          (h.Convert.TiffOutputOptions.prototype.setAnnots = function (t) {
            return (this.mImpl.ANNOTS = t), this;
          }),
          (h.Convert.TiffOutputOptions.prototype.setSmooth = function (t) {
            return (this.mImpl.SMOOTH = t), this;
          }),
          (h.Convert.TiffOutputOptions.prototype.setPrintmode = function (t) {
            return (this.mImpl.PRINTMODE = t), this;
          }),
          (h.Convert.TiffOutputOptions.prototype.setTransparentPage = function (
            t
          ) {
            return (this.mImpl.TRANSPARENT_PAGE = t), this;
          }),
          (h.Convert.TiffOutputOptions.prototype.setPalettized = function (t) {
            return (this.mImpl.PALETTIZED = t), this;
          }),
          (h.Convert.TiffOutputOptions.prototype.setDPI = function (t) {
            return (this.mImpl.DPI = t), this;
          }),
          (h.Convert.TiffOutputOptions.prototype.setGamma = function (t) {
            return (this.mImpl.GAMMA = t), this;
          }),
          (h.Convert.TiffOutputOptions.prototype.setHRes = function (t) {
            return (this.mImpl.HRES = t), this;
          }),
          (h.Convert.TiffOutputOptions.prototype.setVRes = function (t) {
            return (this.mImpl.VRES = t), this;
          }),
          (h.Convert.TiffOutputOptions.prototype.getJsonString = function () {
            return JSON.stringify(this.mImpl);
          }),
          (h.Convert.createHTMLOutputOptions = function () {
            return Promise.resolve(new h.Convert.HTMLOutputOptions());
          }),
          (h.Convert.HTMLOutputOptions = function () {
            (this.name = 'PDFNet.Convert.HTMLOutputOptions'), (this.mImpl = {});
          }),
          (h.Convert.HTMLOutputOptions.prototype.setPreferJPG = function (t) {
            return (this.mImpl.PREFER_JPEG = t), this;
          }),
          (h.Convert.HTMLOutputOptions.prototype.setJPGQuality = function (t) {
            return (this.mImpl.JPEG_QUALITY = t), this;
          }),
          (h.Convert.HTMLOutputOptions.prototype.setDPI = function (t) {
            return (this.mImpl.DPI = t), this;
          }),
          (h.Convert.HTMLOutputOptions.prototype.setMaximumImagePixels =
            function (t) {
              return (this.mImpl.MAX_IMAGE_PIXELS = t), this;
            }),
          (h.Convert.HTMLOutputOptions.prototype.setScale = function (t) {
            return (this.mImpl.SCALE = t), this;
          }),
          (h.Convert.HTMLOutputOptions.prototype.setExternalLinks = function (
            t
          ) {
            return (this.mImpl.EXTERNAL_LINKS = t), this;
          }),
          (h.Convert.HTMLOutputOptions.prototype.setInternalLinks = function (
            t
          ) {
            return (this.mImpl.INTERNAL_LINKS = t), this;
          }),
          (h.Convert.HTMLOutputOptions.prototype.setSimplifyText = function (
            t
          ) {
            return (this.mImpl.SIMPLIFY_TEXT = t), this;
          }),
          (h.Convert.HTMLOutputOptions.prototype.getJsonString = function () {
            return JSON.stringify(this.mImpl);
          }),
          (h.Convert.createEPUBOutputOptions = function () {
            return Promise.resolve(new h.Convert.EPUBOutputOptions());
          }),
          (h.Convert.EPUBOutputOptions = function () {
            (this.name = 'PDFNet.Convert.EPUBOutputOptions'), (this.mImpl = {});
          }),
          (h.Convert.EPUBOutputOptions.prototype.setExpanded = function (t) {
            return (this.mImpl.EPUB_EXPANDED = t), this;
          }),
          (h.Convert.EPUBOutputOptions.prototype.setReuseCover = function (t) {
            return (this.mImpl.EPUB_REUSE_COVER = t), this;
          }),
          (h.Convert.createSVGOutputOptions = function () {
            return Promise.resolve(new h.Convert.SVGOutputOptions());
          }),
          (h.Convert.SVGOutputOptions = function () {
            (this.name = 'PDFNet.Convert.SVGOutputOptions'), (this.mImpl = {});
          }),
          (h.Convert.SVGOutputOptions.prototype.setEmbedImages = function (t) {
            return (this.mImpl.EMBEDIMAGES = t), this;
          }),
          (h.Convert.SVGOutputOptions.prototype.setNoFonts = function (t) {
            return (this.mImpl.NOFONTS = t), this;
          }),
          (h.Convert.SVGOutputOptions.prototype.setSvgFonts = function (t) {
            return (this.mImpl.SVGFONTS = t), this;
          }),
          (h.Convert.SVGOutputOptions.prototype.setEmbedFonts = function (t) {
            return (this.mImpl.EMBEDFONTS = t), this;
          }),
          (h.Convert.SVGOutputOptions.prototype.setNoUnicode = function (t) {
            return (this.mImpl.NOUNICODE = t), this;
          }),
          (h.Convert.SVGOutputOptions.prototype.setIndividualCharPlacement =
            function (t) {
              return (this.mImpl.INDIVIDUALCHARPLACEMENT = t), this;
            }),
          (h.Convert.SVGOutputOptions.prototype.setRemoveCharPlacement =
            function (t) {
              return (this.mImpl.REMOVECHARPLACEMENT = t), this;
            }),
          (h.Convert.SVGOutputOptions.prototype.setFlattenContent = function (
            t
          ) {
            switch (t) {
              case h.Convert.FlattenFlag.e_off:
                this.mImpl.FLATTEN_CONTENT = 'OFF';
                break;
              case h.Convert.FlattenFlag.e_simple:
                this.mImpl.FLATTEN_CONTENT = 'SIMPLE';
                break;
              case h.Convert.FlattenFlag.e_fast:
                this.mImpl.FLATTEN_CONTENT = 'FAST';
                break;
              case h.Convert.FlattenFlag.e_high_quality:
                this.mImpl.FLATTEN_CONTENT = 'HIGH_QUALITY';
            }
            return this;
          }),
          (h.Convert.SVGOutputOptions.prototype.setFlattenThreshold = function (
            t
          ) {
            switch (t) {
              case h.Convert.FlattenThresholdFlag.e_very_strict:
                this.mImpl.FLATTEN_THRESHOLD = 'VERY_STRICT';
                break;
              case h.Convert.FlattenThresholdFlag.e_strict:
                this.mImpl.FLATTEN_THRESHOLD = 'STRICT';
                break;
              case h.Convert.FlattenThresholdFlag.e_default:
                this.mImpl.FLATTEN_THRESHOLD = 'DEFAULT';
                break;
              case h.Convert.FlattenThresholdFlag.e_keep_most:
                this.mImpl.FLATTEN_THRESHOLD = 'KEEP_MOST';
                break;
              case h.Convert.FlattenThresholdFlag.e_keep_all:
                this.mImpl.FLATTEN_THRESHOLD = 'KEEP_ALL';
            }
            return this;
          }),
          (h.Convert.SVGOutputOptions.prototype.setFlattenDPI = function (t) {
            return (this.mImpl.DPI = t), this;
          }),
          (h.Convert.SVGOutputOptions.prototype.setFlattenMaximumImagePixels =
            function (t) {
              return (this.mImpl.MAX_IMAGE_PIXELS = t), this;
            }),
          (h.Convert.SVGOutputOptions.prototype.setCompress = function (t) {
            return (this.mImpl.SVGZ = t), this;
          }),
          (h.Convert.SVGOutputOptions.prototype.setOutputThumbnails = function (
            t
          ) {
            return (this.mImpl.NOTHUMBS = t), this;
          }),
          (h.Convert.SVGOutputOptions.prototype.setThumbnailSize = function (
            t
          ) {
            return (this.mImpl.THUMB_SIZE = t), this;
          }),
          (h.Convert.SVGOutputOptions.prototype.setCreateXmlWrapper = function (
            t
          ) {
            return (this.mImpl.NOXMLDOC = t), this;
          }),
          (h.Convert.SVGOutputOptions.prototype.setDtd = function (t) {
            return (this.mImpl.OMITDTD = t), this;
          }),
          (h.Convert.SVGOutputOptions.prototype.setAnnots = function (t) {
            return (this.mImpl.NOANNOTS = t), this;
          }),
          (h.Convert.SVGOutputOptions.prototype.setOverprint = function (t) {
            switch (t) {
              case h.PDFRasterizer.OverprintPreviewMode.e_op_off:
                this.mImpl.OVERPRINT_MODE = 'OFF';
                break;
              case h.PDFRasterizer.OverprintPreviewMode.e_op_on:
                this.mImpl.OVERPRINT_MODE = 'ON';
                break;
              case h.PDFRasterizer.OverprintPreviewMode.e_op_pdfx_on:
                this.mImpl.OVERPRINT_MODE = 'PDFX';
            }
            return this;
          }),
          (h.Convert.SVGOutputOptions.prototype.getJsonString = function () {
            return JSON.stringify(this.mImpl);
          }),
          (h.PDFDoc.createViewerOptimizedOptions = function () {
            return Promise.resolve(new h.PDFDoc.ViewerOptimizedOptions());
          }),
          (h.PDFDoc.ViewerOptimizedOptions = function () {
            (this.name = 'PDFNet.PDFDoc.ViewerOptimizedOptions'),
              (this.mImpl = {});
          }),
          (h.PDFDoc.ViewerOptimizedOptions.prototype.setThumbnailRenderingThreshold =
            function (t) {
              return (this.mImpl.COMPLEXITY_THRESHOLD = t), this;
            }),
          (h.PDFDoc.ViewerOptimizedOptions.prototype.setMinimumInitialThumbnails =
            function (t) {
              return (this.mImpl.MINIMUM_INITIAL_THUMBNAILS = t), this;
            }),
          (h.PDFDoc.ViewerOptimizedOptions.prototype.setThumbnailSize =
            function (t) {
              return (this.mImpl.THUMB_SIZE = t), this;
            }),
          (h.PDFDoc.ViewerOptimizedOptions.prototype.setOverprint = function (
            t
          ) {
            switch (t) {
              case h.PDFRasterizer.OverprintPreviewMode.e_op_off:
                this.mImpl.OVERPRINT_MODE = 'OFF';
                break;
              case h.PDFRasterizer.OverprintPreviewMode.e_op_on:
                this.mImpl.OVERPRINT_MODE = 'ON';
                break;
              case h.PDFRasterizer.OverprintPreviewMode.e_op_pdfx_on:
                this.mImpl.OVERPRINT_MODE = 'PDFX';
            }
            return this;
          }),
          (h.PDFDoc.ViewerOptimizedOptions.prototype.getJsonString =
            function () {
              return JSON.stringify(this.mImpl);
            }),
          (h.MarkupAnnot.prototype = new h.Annot()),
          (h.TextMarkupAnnot.prototype = new h.MarkupAnnot()),
          (h.CaretAnnot.prototype = new h.MarkupAnnot()),
          (h.LineAnnot.prototype = new h.MarkupAnnot()),
          (h.CircleAnnot.prototype = new h.MarkupAnnot()),
          (h.FileAttachmentAnnot.prototype = new h.MarkupAnnot()),
          (h.FreeTextAnnot.prototype = new h.MarkupAnnot()),
          (h.HighlightAnnot.prototype = new h.TextMarkupAnnot()),
          (h.InkAnnot.prototype = new h.MarkupAnnot()),
          (h.LinkAnnot.prototype = new h.Annot()),
          (h.MovieAnnot.prototype = new h.Annot()),
          (h.PolyLineAnnot.prototype = new h.LineAnnot()),
          (h.PolygonAnnot.prototype = new h.PolyLineAnnot()),
          (h.PopupAnnot.prototype = new h.Annot()),
          (h.RedactionAnnot.prototype = new h.MarkupAnnot()),
          (h.RubberStampAnnot.prototype = new h.MarkupAnnot()),
          (h.ScreenAnnot.prototype = new h.Annot()),
          (h.SoundAnnot.prototype = new h.MarkupAnnot()),
          (h.SquareAnnot.prototype = new h.MarkupAnnot()),
          (h.SquigglyAnnot.prototype = new h.TextMarkupAnnot()),
          (h.StrikeOutAnnot.prototype = new h.TextMarkupAnnot()),
          (h.TextAnnot.prototype = new h.MarkupAnnot()),
          (h.UnderlineAnnot.prototype = new h.TextMarkupAnnot()),
          (h.WatermarkAnnot.prototype = new h.Annot()),
          (h.WidgetAnnot.prototype = new h.Annot()),
          (h.SignatureWidget.prototype = new h.WidgetAnnot()),
          (h.ComboBoxWidget.prototype = new h.WidgetAnnot()),
          (h.ListBoxWidget.prototype = new h.WidgetAnnot()),
          (h.TextWidget.prototype = new h.WidgetAnnot()),
          (h.CheckBoxWidget.prototype = new h.WidgetAnnot()),
          (h.RadioButtonWidget.prototype = new h.WidgetAnnot()),
          (h.PushButtonWidget.prototype = new h.WidgetAnnot()),
          (h.ContentNode.prototype = new h.ContentElement()),
          (h.Paragraph.prototype = new h.ContentNode()),
          (h.TextRun.prototype = new h.ContentElement()),
          (h.TextStyledElement.prototype = new h.ContentElement()),
          (h.Table.prototype = new h.ContentNode()),
          (h.TableRow.prototype = new h.ContentNode()),
          (h.TableCell.prototype = new h.ContentNode()),
          (h.PrinterMode.PaperSize = {
            e_custom: 0,
            e_letter: 1,
            e_letter_small: 2,
            e_tabloid: 3,
            e_ledger: 4,
            e_legal: 5,
            e_statement: 6,
            e_executive: 7,
            e_a3: 8,
            e_a4: 9,
            e_a4_mall: 10,
            e_a5: 11,
            e_b4_jis: 12,
            e_b5_jis: 13,
            e_folio: 14,
            e_quarto: 15,
            e_10x14: 16,
            e_11x17: 17,
            e_note: 18,
            e_envelope_9: 19,
            e_envelope_10: 20,
            e_envelope_11: 21,
            e_envelope_12: 22,
            e_envelope_14: 23,
            e_c_size_sheet: 24,
            e_d_size_sheet: 25,
            e_e_size_sheet: 26,
            e_envelope_dl: 27,
            e_envelope_c5: 28,
            e_envelope_c3: 29,
            e_envelope_c4: 30,
            e_envelope_c6: 31,
            e_envelope_c65: 32,
            e_envelope_b4: 33,
            e_envelope_b5: 34,
            e_envelope_b6: 35,
            e_envelope_italy: 36,
            e_envelope_monarch: 37,
            e_6_3_quarters_envelope: 38,
            e_us_std_fanfold: 39,
            e_german_std_fanfold: 40,
            e_german_legal_fanfold: 41,
            e_b4_iso: 42,
            e_japanese_postcard: 43,
            e_9x11: 44,
            e_10x11: 45,
            e_15x11: 46,
            e_envelope_invite: 47,
            e_reserved_48: 48,
            e_reserved_49: 49,
            e_letter_extra: 50,
            e_legal_extra: 51,
            e_tabloid_extra: 52,
            e_a4_extra: 53,
            e_letter_transverse: 54,
            e_a4_transverse: 55,
            e_letter_extra_transverse: 56,
            e_supera_supera_a4: 57,
            e_Superb_Superb_a3: 58,
            e_letter_plus: 59,
            e_a4_plus: 60,
            e_a5_transverse: 61,
            e_b5_jis_transverse: 62,
            e_a3_extra: 63,
            e_a5_extra: 64,
            e_b5_iso_extra: 65,
            e_a2: 66,
            e_a3_transverse: 67,
            e_a3_extra_transverse: 68,
            e_japanese_double_postcard: 69,
            e_a6: 70,
            e_japanese_envelope_kaku_2: 71,
            e_japanese_envelope_kaku_3: 72,
            e_japanese_envelope_chou_3: 73,
            e_japanese_envelope_chou_4: 74,
            e_letter_rotated: 75,
            e_a3_rotated: 76,
            e_a4_rotated: 77,
            e_a5_rotated: 78,
            e_b4_jis_rotated: 79,
            e_b5_jis_rotated: 80,
            e_japanese_postcard_rotated: 81,
            e_double_japanese_postcard_rotated: 82,
            e_a6_rotated: 83,
            e_japanese_envelope_kaku_2_rotated: 84,
            e_japanese_envelope_kaku_3_rotated: 85,
            e_japanese_envelope_chou_3_rotated: 86,
            e_japanese_envelope_chou_4_rotated: 87,
            e_b6_jis: 88,
            e_b6_jis_rotated: 89,
            e_12x11: 90,
            e_japanese_envelope_you_4: 91,
            e_japanese_envelope_you_4_rotated: 92,
            e_PrinterMode_prc_16k: 93,
            e_prc_32k: 94,
            e_prc_32k_big: 95,
            e_prc_envelop_1: 96,
            e_prc_envelop_2: 97,
            e_prc_envelop_3: 98,
            e_prc_envelop_4: 99,
            e_prc_envelop_5: 100,
            e_prc_envelop_6: 101,
            e_prc_envelop_7: 102,
            e_prc_envelop_8: 103,
            e_prc_envelop_9: 104,
            e_prc_envelop_10: 105,
            e_prc_16k_rotated: 106,
            e_prc_32k_rotated: 107,
            e_prc_32k_big__rotated: 108,
            e_prc_envelop_1_rotated: 109,
            e_prc_envelop_2_rotated: 110,
            e_prc_envelop_3_rotated: 111,
            e_prc_envelop_4_rotated: 112,
            e_prc_envelop_5_rotated: 113,
            e_prc_envelop_6_rotated: 114,
            e_prc_envelop_7_rotated: 115,
            e_prc_envelop_8_rotated: 116,
            e_prc_envelop_9_rotated: 117,
            e_prc_envelop_10_rotated: 118,
          }),
          (h.Field.EventType = {
            e_action_trigger_keystroke: 13,
            e_action_trigger_format: 14,
            e_action_trigger_validate: 15,
            e_action_trigger_calculate: 16,
          }),
          (h.Field.Type = {
            e_button: 0,
            e_check: 1,
            e_radio: 2,
            e_text: 3,
            e_choice: 4,
            e_signature: 5,
            e_null: 6,
          }),
          (h.Field.Flag = {
            e_read_only: 0,
            e_required: 1,
            e_no_export: 2,
            e_pushbutton_flag: 3,
            e_radio_flag: 4,
            e_toggle_to_off: 5,
            e_radios_in_unison: 6,
            e_multiline: 7,
            e_password: 8,
            e_file_select: 9,
            e_no_spellcheck: 10,
            e_no_scroll: 11,
            e_comb: 12,
            e_rich_text: 13,
            e_combo: 14,
            e_edit: 15,
            e_sort: 16,
            e_multiselect: 17,
            e_commit_on_sel_change: 18,
          }),
          (h.Field.TextJustification = {
            e_left_justified: 0,
            e_centered: 1,
            e_right_justified: 2,
          }),
          (h.Filter.StdFileOpenMode = {
            e_read_mode: 0,
            e_write_mode: 1,
            e_append_mode: 2,
          }),
          (h.Filter.ReferencePos = { e_begin: 0, e_end: 2, e_cur: 1 }),
          (h.OCGContext.OCDrawMode = { e_VisibleOC: 0, e_AllOC: 1, e_NoOC: 2 }),
          (h.OCMD.VisibilityPolicyType = {
            e_AllOn: 0,
            e_AnyOn: 1,
            e_AnyOff: 2,
            e_AllOff: 3,
          }),
          (h.PDFACompliance.Conformance = {
            e_Level1A: 1,
            e_Level1B: 2,
            e_Level2A: 3,
            e_Level2B: 4,
            e_Level2U: 5,
            e_Level3A: 6,
            e_Level3B: 7,
            e_Level3U: 8,
            e_Level4: 9,
            e_Level4E: 10,
            e_Level4F: 11,
          }),
          (h.PDFACompliance.ErrorCode = {
            e_PDFA0_1_0: 10,
            e_PDFA0_1_1: 11,
            e_PDFA0_1_2: 12,
            e_PDFA0_1_3: 13,
            e_PDFA0_1_4: 14,
            e_PDFA0_1_5: 15,
            e_PDFA1_2_1: 121,
            e_PDFA1_2_2: 122,
            e_PDFA1_3_1: 131,
            e_PDFA1_3_2: 132,
            e_PDFA1_3_3: 133,
            e_PDFA1_3_4: 134,
            e_PDFA1_4_1: 141,
            e_PDFA1_4_2: 142,
            e_PDFA1_6_1: 161,
            e_PDFA1_7_1: 171,
            e_PDFA1_7_2: 172,
            e_PDFA1_7_3: 173,
            e_PDFA1_7_4: 174,
            e_PDFA1_8_1: 181,
            e_PDFA1_8_2: 182,
            e_PDFA1_8_3: 183,
            e_PDFA1_8_4: 184,
            e_PDFA1_8_5: 185,
            e_PDFA1_8_6: 186,
            e_PDFA1_10_1: 1101,
            e_PDFA1_11_1: 1111,
            e_PDFA1_11_2: 1112,
            e_PDFA1_12_1: 1121,
            e_PDFA1_12_2: 1122,
            e_PDFA1_12_3: 1123,
            e_PDFA1_12_4: 1124,
            e_PDFA1_12_5: 1125,
            e_PDFA1_12_6: 1126,
            e_PDFA1_13_1: 1131,
            e_PDFA2_2_1: 221,
            e_PDFA2_3_2: 232,
            e_PDFA2_3_3: 233,
            e_PDFA2_3_3_1: 2331,
            e_PDFA2_3_3_2: 2332,
            e_PDFA2_3_4_1: 2341,
            e_PDFA2_4_1: 241,
            e_PDFA2_4_2: 242,
            e_PDFA2_4_3: 243,
            e_PDFA2_4_4: 244,
            e_PDFA2_5_1: 251,
            e_PDFA2_5_2: 252,
            e_PDFA2_6_1: 261,
            e_PDFA2_7_1: 271,
            e_PDFA2_8_1: 281,
            e_PDFA2_9_1: 291,
            e_PDFA2_10_1: 2101,
            e_PDFA3_2_1: 321,
            e_PDFA3_3_1: 331,
            e_PDFA3_3_2: 332,
            e_PDFA3_3_3_1: 3331,
            e_PDFA3_3_3_2: 3332,
            e_PDFA3_4_1: 341,
            e_PDFA3_5_1: 351,
            e_PDFA3_5_2: 352,
            e_PDFA3_5_3: 353,
            e_PDFA3_5_4: 354,
            e_PDFA3_5_5: 355,
            e_PDFA3_5_6: 356,
            e_PDFA3_6_1: 361,
            e_PDFA3_7_1: 371,
            e_PDFA3_7_2: 372,
            e_PDFA3_7_3: 373,
            e_PDFA4_1: 41,
            e_PDFA4_2: 42,
            e_PDFA4_3: 43,
            e_PDFA4_4: 44,
            e_PDFA4_5: 45,
            e_PDFA4_6: 46,
            e_PDFA5_2_1: 521,
            e_PDFA5_2_2: 522,
            e_PDFA5_2_3: 523,
            e_PDFA5_2_4: 524,
            e_PDFA5_2_5: 525,
            e_PDFA5_2_6: 526,
            e_PDFA5_2_7: 527,
            e_PDFA5_2_8: 528,
            e_PDFA5_2_9: 529,
            e_PDFA5_2_10: 5210,
            e_PDFA5_2_11: 5211,
            e_PDFA5_3_1: 531,
            e_PDFA5_3_2_1: 5321,
            e_PDFA5_3_2_2: 5322,
            e_PDFA5_3_2_3: 5323,
            e_PDFA5_3_2_4: 5324,
            e_PDFA5_3_2_5: 5325,
            e_PDFA5_3_3_1: 5331,
            e_PDFA5_3_3_2: 5332,
            e_PDFA5_3_3_3: 5333,
            e_PDFA5_3_3_4: 5334,
            e_PDFA5_3_4_0: 5340,
            e_PDFA5_3_4_1: 5341,
            e_PDFA5_3_4_2: 5342,
            e_PDFA5_3_4_3: 5343,
            e_PDFA6_1_1: 611,
            e_PDFA6_1_2: 612,
            e_PDFA6_2_1: 621,
            e_PDFA6_2_2: 622,
            e_PDFA6_2_3: 623,
            e_PDFA7_2_1: 721,
            e_PDFA7_2_2: 722,
            e_PDFA7_2_3: 723,
            e_PDFA7_2_4: 724,
            e_PDFA7_2_5: 725,
            e_PDFA7_3_1: 731,
            e_PDFA7_3_2: 732,
            e_PDFA7_3_3: 733,
            e_PDFA7_3_4: 734,
            e_PDFA7_3_5: 735,
            e_PDFA7_3_6: 736,
            e_PDFA7_3_7: 737,
            e_PDFA7_3_8: 738,
            e_PDFA7_3_9: 739,
            e_PDFA7_5_1: 751,
            e_PDFA7_8_1: 781,
            e_PDFA7_8_2: 782,
            e_PDFA7_8_3: 783,
            e_PDFA7_8_4: 784,
            e_PDFA7_8_5: 785,
            e_PDFA7_8_6: 786,
            e_PDFA7_8_7: 787,
            e_PDFA7_8_8: 788,
            e_PDFA7_8_9: 789,
            e_PDFA7_8_10: 7810,
            e_PDFA7_8_11: 7811,
            e_PDFA7_8_12: 7812,
            e_PDFA7_8_13: 7813,
            e_PDFA7_8_14: 7814,
            e_PDFA7_8_15: 7815,
            e_PDFA7_8_16: 7816,
            e_PDFA7_8_17: 7817,
            e_PDFA7_8_18: 7818,
            e_PDFA7_8_19: 7819,
            e_PDFA7_8_20: 7820,
            e_PDFA7_8_21: 7821,
            e_PDFA7_8_22: 7822,
            e_PDFA7_8_23: 7823,
            e_PDFA7_8_24: 7824,
            e_PDFA7_8_25: 7825,
            e_PDFA7_8_26: 7826,
            e_PDFA7_8_27: 7827,
            e_PDFA7_8_28: 7828,
            e_PDFA7_8_29: 7829,
            e_PDFA7_8_30: 7830,
            e_PDFA7_8_31: 7831,
            e_PDFA7_11_1: 7111,
            e_PDFA7_11_2: 7112,
            e_PDFA7_11_3: 7113,
            e_PDFA7_11_4: 7114,
            e_PDFA7_11_5: 7115,
            e_PDFA9_1: 91,
            e_PDFA9_2: 92,
            e_PDFA9_3: 93,
            e_PDFA9_4: 94,
            e_PDFA3_8_1: 381,
            e_PDFA8_2_2: 822,
            e_PDFA8_3_3_1: 8331,
            e_PDFA8_3_3_2: 8332,
            e_PDFA8_3_4_1: 8341,
            e_PDFA1_2_3: 123,
            e_PDFA1_10_2: 1102,
            e_PDFA1_10_3: 1103,
            e_PDFA1_12_10: 11210,
            e_PDFA1_13_5: 1135,
            e_PDFA2_3_10: 2310,
            e_PDFA2_4_2_10: 24220,
            e_PDFA2_4_2_11: 24221,
            e_PDFA2_4_2_12: 24222,
            e_PDFA2_4_2_13: 24223,
            e_PDFA2_5_10: 2510,
            e_PDFA2_5_11: 2511,
            e_PDFA2_5_12: 2512,
            e_PDFA2_8_3_1: 2831,
            e_PDFA2_8_3_2: 2832,
            e_PDFA2_8_3_3: 2833,
            e_PDFA2_8_3_4: 2834,
            e_PDFA2_8_3_5: 2835,
            e_PDFA2_10_20: 21020,
            e_PDFA2_10_21: 21021,
            e_PDFA11_0_0: 11e3,
            e_PDFA6_2_11_8: 62118,
            e_PDFA8_1: 81,
            e_PDFA_3E1: 1,
            e_PDFA_3E2: 2,
            e_PDFA_3E3: 3,
            e_PDFA_4_6_1_3_4: 46134,
            e_PDFA_4_6_1_3_5: 46135,
            e_PDFA_4_6_1_6_1_3: 461613,
            e_PDFA_4_6_7_3_5: 46735,
            e_PDFA_4_6_2_5_3: 46253,
            e_PDFA_4_6_6_3_1: 46631,
            e_PDFA_4_6_1_12_1: 461121,
            e_PDFA_4_6_2_4_2_3: 462423,
            e_PDFA_4_6_2_2_3: 46223,
            e_PDFA_4_6_9_5: 4695,
            e_PDFA_4_6_2_10_6_1: 4621061,
            e_PDFA_4_6_2_10_6_4: 4621064,
            e_PDFA_LAST: 4621065,
          }),
          (h.ContentItem.Type = {
            e_MCR: 0,
            e_MCID: 1,
            e_OBJR: 2,
            e_Unknown: 3,
          }),
          (h.Action.Type = {
            e_GoTo: 0,
            e_GoToR: 1,
            e_GoToE: 2,
            e_Launch: 3,
            e_Thread: 4,
            e_URI: 5,
            e_Sound: 6,
            e_Movie: 7,
            e_Hide: 8,
            e_Named: 9,
            e_SubmitForm: 10,
            e_ResetForm: 11,
            e_ImportData: 12,
            e_JavaScript: 13,
            e_SetOCGState: 14,
            e_Rendition: 15,
            e_Trans: 16,
            e_GoTo3DView: 17,
            e_RichMediaExecute: 18,
            e_Unknown: 19,
          }),
          (h.Action.FormActionFlag = {
            e_exclude: 0,
            e_include_no_value_fields: 1,
            e_export_format: 2,
            e_get_method: 3,
            e_submit_coordinates: 4,
            e_xfdf: 5,
            e_include_append_saves: 6,
            e_include_annotations: 7,
            e_submit_pdf: 8,
            e_canonical_format: 9,
            e_excl_non_user_annots: 10,
            e_excl_F_key: 11,
            e_embed_form: 13,
          }),
          (h.Page.EventType = {
            e_action_trigger_page_open: 11,
            e_action_trigger_page_close: 12,
          }),
          (h.Page.Box = {
            e_media: 0,
            e_crop: 1,
            e_bleed: 2,
            e_trim: 3,
            e_art: 4,
            e_user_crop: 5,
          }),
          (h.Page.Rotate = { e_0: 0, e_90: 1, e_180: 2, e_270: 3 }),
          (h.Annot.EventType = {
            e_action_trigger_activate: 0,
            e_action_trigger_annot_enter: 1,
            e_action_trigger_annot_exit: 2,
            e_action_trigger_annot_down: 3,
            e_action_trigger_annot_up: 4,
            e_action_trigger_annot_focus: 5,
            e_action_trigger_annot_blur: 6,
            e_action_trigger_annot_page_open: 7,
            e_action_trigger_annot_page_close: 8,
            e_action_trigger_annot_page_visible: 9,
            e_action_trigger_annot_page_invisible: 10,
          }),
          (h.Annot.Type = {
            e_Text: 0,
            e_Link: 1,
            e_FreeText: 2,
            e_Line: 3,
            e_Square: 4,
            e_Circle: 5,
            e_Polygon: 6,
            e_Polyline: 7,
            e_Highlight: 8,
            e_Underline: 9,
            e_Squiggly: 10,
            e_StrikeOut: 11,
            e_Stamp: 12,
            e_Caret: 13,
            e_Ink: 14,
            e_Popup: 15,
            e_FileAttachment: 16,
            e_Sound: 17,
            e_Movie: 18,
            e_Widget: 19,
            e_Screen: 20,
            e_PrinterMark: 21,
            e_TrapNet: 22,
            e_Watermark: 23,
            e_3D: 24,
            e_Redact: 25,
            e_Projection: 26,
            e_RichMedia: 27,
            e_Unknown: 28,
          }),
          (h.Annot.Flag = {
            e_invisible: 0,
            e_hidden: 1,
            e_print: 2,
            e_no_zoom: 3,
            e_no_rotate: 4,
            e_no_view: 5,
            e_annot_read_only: 6,
            e_locked: 7,
            e_toggle_no_view: 8,
            e_locked_contents: 9,
          }),
          (h.AnnotBorderStyle.Style = {
            e_solid: 0,
            e_dashed: 1,
            e_beveled: 2,
            e_inset: 3,
            e_underline: 4,
          }),
          (h.Annot.State = { e_normal: 0, e_rollover: 1, e_down: 2 }),
          (h.LineAnnot.EndingStyle = {
            e_Square: 0,
            e_Circle: 1,
            e_Diamond: 2,
            e_OpenArrow: 3,
            e_ClosedArrow: 4,
            e_Butt: 5,
            e_ROpenArrow: 6,
            e_RClosedArrow: 7,
            e_Slash: 8,
            e_None: 9,
            e_Unknown: 10,
          }),
          (h.LineAnnot.IntentType = {
            e_LineArrow: 0,
            e_LineDimension: 1,
            e_null: 2,
          }),
          (h.LineAnnot.CapPos = { e_Inline: 0, e_Top: 1 }),
          (h.FileAttachmentAnnot.Icon = {
            e_Graph: 0,
            e_PushPin: 1,
            e_Paperclip: 2,
            e_Tag: 3,
            e_Unknown: 4,
          }),
          (h.FreeTextAnnot.IntentName = {
            e_FreeText: 0,
            e_FreeTextCallout: 1,
            e_FreeTextTypeWriter: 2,
            e_Unknown: 3,
          }),
          (h.LinkAnnot.HighlightingMode = {
            e_none: 0,
            e_invert: 1,
            e_outline: 2,
            e_push: 3,
          }),
          (h.MarkupAnnot.BorderEffect = { e_None: 0, e_Cloudy: 1 }),
          (h.PolyLineAnnot.IntentType = {
            e_PolygonCloud: 0,
            e_PolyLineDimension: 1,
            e_PolygonDimension: 2,
            e_Unknown: 3,
          }),
          (h.RedactionAnnot.QuadForm = {
            e_LeftJustified: 0,
            e_Centered: 1,
            e_RightJustified: 2,
            e_None: 3,
          }),
          (h.RubberStampAnnot.Icon = {
            e_Approved: 0,
            e_Experimental: 1,
            e_NotApproved: 2,
            e_AsIs: 3,
            e_Expired: 4,
            e_NotForPublicRelease: 5,
            e_Confidential: 6,
            e_Final: 7,
            e_Sold: 8,
            e_Departmental: 9,
            e_ForComment: 10,
            e_TopSecret: 11,
            e_ForPublicRelease: 12,
            e_Draft: 13,
            e_Unknown: 14,
          }),
          (h.ScreenAnnot.ScaleType = { e_Anamorphic: 0, e_Proportional: 1 }),
          (h.ScreenAnnot.ScaleCondition = {
            e_Always: 0,
            e_WhenBigger: 1,
            e_WhenSmaller: 2,
            e_Never: 3,
          }),
          (h.ScreenAnnot.IconCaptionRelation = {
            e_NoIcon: 0,
            e_NoCaption: 1,
            e_CBelowI: 2,
            e_CAboveI: 3,
            e_CRightILeft: 4,
            e_CLeftIRight: 5,
            e_COverlayI: 6,
          }),
          (h.SoundAnnot.Icon = { e_Speaker: 0, e_Mic: 1, e_Unknown: 2 }),
          (h.TextAnnot.Icon = {
            e_Comment: 0,
            e_Key: 1,
            e_Help: 2,
            e_NewParagraph: 3,
            e_Paragraph: 4,
            e_Insert: 5,
            e_Note: 6,
            e_Unknown: 7,
          }),
          (h.WidgetAnnot.HighlightingMode = {
            e_none: 0,
            e_invert: 1,
            e_outline: 2,
            e_push: 3,
            e_toggle: 4,
          }),
          (h.WidgetAnnot.ScaleType = { e_Anamorphic: 0, e_Proportional: 1 }),
          (h.WidgetAnnot.IconCaptionRelation = {
            e_NoIcon: 0,
            e_NoCaption: 1,
            e_CBelowI: 2,
            e_CAboveI: 3,
            e_CRightILeft: 4,
            e_CLeftIRight: 5,
            e_COverlayI: 6,
          }),
          (h.WidgetAnnot.ScaleCondition = {
            e_Always: 0,
            e_WhenBigger: 1,
            e_WhenSmaller: 2,
            e_Never: 3,
          }),
          (h.ColorSpace.Type = {
            e_device_gray: 0,
            e_device_rgb: 1,
            e_device_cmyk: 2,
            e_cal_gray: 3,
            e_cal_rgb: 4,
            e_lab: 5,
            e_icc: 6,
            e_indexed: 7,
            e_pattern: 8,
            e_separation: 9,
            e_device_n: 10,
            e_null: 11,
          }),
          (h.Convert.PrinterMode = {
            e_auto: 0,
            e_interop_only: 1,
            e_printer_only: 2,
            e_prefer_builtin_converter: 3,
          }),
          (h.Destination.FitType = {
            e_XYZ: 0,
            e_Fit: 1,
            e_FitH: 2,
            e_FitV: 3,
            e_FitR: 4,
            e_FitB: 5,
            e_FitBH: 6,
            e_FitBV: 7,
          }),
          (h.GState.Attribute = {
            e_transform: 0,
            e_rendering_intent: 1,
            e_stroke_cs: 2,
            e_stroke_color: 3,
            e_fill_cs: 4,
            e_fill_color: 5,
            e_line_width: 6,
            e_line_cap: 7,
            e_line_join: 8,
            e_flatness: 9,
            e_miter_limit: 10,
            e_dash_pattern: 11,
            e_char_spacing: 12,
            e_word_spacing: 13,
            e_horizontal_scale: 14,
            e_leading: 15,
            e_font: 16,
            e_font_size: 17,
            e_text_render_mode: 18,
            e_text_rise: 19,
            e_text_knockout: 20,
            e_text_pos_offset: 21,
            e_blend_mode: 22,
            e_opacity_fill: 23,
            e_opacity_stroke: 24,
            e_alpha_is_shape: 25,
            e_soft_mask: 26,
            e_smoothnes: 27,
            e_auto_stoke_adjust: 28,
            e_stroke_overprint: 29,
            e_fill_overprint: 30,
            e_overprint_mode: 31,
            e_transfer_funct: 32,
            e_BG_funct: 33,
            e_UCR_funct: 34,
            e_halftone: 35,
            e_null: 36,
          }),
          (h.GState.LineCap = {
            e_butt_cap: 0,
            e_round_cap: 1,
            e_square_cap: 2,
          }),
          (h.GState.LineJoin = {
            e_miter_join: 0,
            e_round_join: 1,
            e_bevel_join: 2,
          }),
          (h.GState.TextRenderingMode = {
            e_fill_text: 0,
            e_stroke_text: 1,
            e_fill_stroke_text: 2,
            e_invisible_text: 3,
            e_fill_clip_text: 4,
            e_stroke_clip_text: 5,
            e_fill_stroke_clip_text: 6,
            e_clip_text: 7,
          }),
          (h.GState.RenderingIntent = {
            e_absolute_colorimetric: 0,
            e_relative_colorimetric: 1,
            e_saturation: 2,
            e_perceptual: 3,
          }),
          (h.GState.BlendMode = {
            e_bl_compatible: 0,
            e_bl_normal: 1,
            e_bl_multiply: 2,
            e_bl_screen: 3,
            e_bl_difference: 4,
            e_bl_darken: 5,
            e_bl_lighten: 6,
            e_bl_color_dodge: 7,
            e_bl_color_burn: 8,
            e_bl_exclusion: 9,
            e_bl_hard_light: 10,
            e_bl_overlay: 11,
            e_bl_soft_light: 12,
            e_bl_luminosity: 13,
            e_bl_hue: 14,
            e_bl_saturation: 15,
            e_bl_color: 16,
          }),
          (h.Element.Type = {
            e_null: 0,
            e_path: 1,
            e_text_begin: 2,
            e_text: 3,
            e_text_new_line: 4,
            e_text_end: 5,
            e_image: 6,
            e_inline_image: 7,
            e_shading: 8,
            e_form: 9,
            e_group_begin: 10,
            e_group_end: 11,
            e_marked_content_begin: 12,
            e_marked_content_end: 13,
            e_marked_content_point: 14,
          }),
          (h.Element.PathSegmentType = {
            e_moveto: 1,
            e_lineto: 2,
            e_cubicto: 3,
            e_conicto: 4,
            e_rect: 5,
            e_closepath: 6,
          }),
          (h.ShapedText.ShapingStatus = {
            e_FullShaping: 0,
            e_PartialShaping: 1,
            e_NoShaping: 2,
          }),
          (h.ShapedText.FailureReason = {
            e_NoFailure: 0,
            e_UnsupportedFontType: 1,
            e_NotIndexEncoded: 2,
            e_FontDataNotFound: 3,
          }),
          (h.ElementWriter.WriteMode = {
            e_underlay: 0,
            e_overlay: 1,
            e_replacement: 2,
          }),
          (h.Flattener.Threshold = {
            e_very_strict: 0,
            e_strict: 1,
            e_default: 2,
            e_keep_most: 3,
            e_keep_all: 4,
          }),
          (h.Flattener.Mode = { e_simple: 0, e_fast: 1 }),
          (h.Font.StandardType1Font = {
            e_times_roman: 0,
            e_times_bold: 1,
            e_times_italic: 2,
            e_times_bold_italic: 3,
            e_helvetica: 4,
            e_helvetica_bold: 5,
            e_helvetica_oblique: 6,
            e_helvetica_bold_oblique: 7,
            e_courier: 8,
            e_courier_bold: 9,
            e_courier_oblique: 10,
            e_courier_bold_oblique: 11,
            e_symbol: 12,
            e_zapf_dingbats: 13,
            e_null: 14,
          }),
          (h.Font.Encoding = { e_IdentityH: 0, e_Indices: 1 }),
          (h.Font.Type = {
            e_Type1: 0,
            e_TrueType: 1,
            e_MMType1: 2,
            e_Type3: 3,
            e_Type0: 4,
            e_CIDType0: 5,
            e_CIDType2: 6,
          }),
          (h.Function.Type = {
            e_sampled: 0,
            e_exponential: 2,
            e_stitching: 3,
            e_postscript: 4,
          }),
          (h.Image.InputFilter = {
            e_none: 0,
            e_jpeg: 1,
            e_jp2: 2,
            e_flate: 3,
            e_g3: 4,
            e_g4: 5,
            e_ascii_hex: 6,
          }),
          (h.PageLabel.Style = {
            e_decimal: 0,
            e_roman_uppercase: 1,
            e_roman_lowercase: 2,
            e_alphabetic_uppercase: 3,
            e_alphabetic_lowercase: 4,
            e_none: 5,
          }),
          (h.PageSet.Filter = { e_all: 0, e_even: 1, e_odd: 2 }),
          (h.PatternColor.Type = {
            e_uncolored_tiling_pattern: 0,
            e_colored_tiling_pattern: 1,
            e_shading: 2,
            e_null: 3,
          }),
          (h.PatternColor.TilingType = {
            e_constant_spacing: 0,
            e_no_distortion: 1,
            e_constant_spacing_fast_fill: 2,
          }),
          (h.GeometryCollection.SnappingMode = {
            e_DefaultSnapMode: 14,
            e_PointOnLine: 1,
            e_LineMidpoint: 2,
            e_LineIntersection: 4,
            e_PathEndpoint: 8,
          }),
          (h.DigestAlgorithm.Type = {
            e_SHA1: 0,
            e_SHA256: 1,
            e_SHA384: 2,
            e_SHA512: 3,
            e_RIPEMD160: 4,
            e_unknown_digest_algorithm: 5,
          }),
          (h.ObjectIdentifier.Predefined = {
            e_commonName: 0,
            e_surname: 1,
            e_countryName: 2,
            e_localityName: 3,
            e_stateOrProvinceName: 4,
            e_streetAddress: 5,
            e_organizationName: 6,
            e_organizationalUnitName: 7,
            e_SHA1: 8,
            e_SHA256: 9,
            e_SHA384: 10,
            e_SHA512: 11,
            e_RIPEMD160: 12,
            e_RSA_encryption_PKCS1: 13,
          }),
          (h.DigitalSignatureField.SubFilterType = {
            e_adbe_x509_rsa_sha1: 0,
            e_adbe_pkcs7_detached: 1,
            e_adbe_pkcs7_sha1: 2,
            e_ETSI_CAdES_detached: 3,
            e_ETSI_RFC3161: 4,
            e_unknown: 5,
            e_absent: 6,
          }),
          (h.DigitalSignatureField.DocumentPermissions = {
            e_no_changes_allowed: 1,
            e_formfilling_signing_allowed: 2,
            e_annotating_formfilling_signing_allowed: 3,
            e_unrestricted: 4,
          }),
          (h.DigitalSignatureField.FieldPermissions = {
            e_lock_all: 0,
            e_include: 1,
            e_exclude: 2,
          }),
          (h.PDFDoc.EventType = {
            e_action_trigger_doc_will_close: 17,
            e_action_trigger_doc_will_save: 18,
            e_action_trigger_doc_did_save: 19,
            e_action_trigger_doc_will_print: 20,
            e_action_trigger_doc_did_print: 21,
          }),
          (h.PDFDoc.InsertFlag = { e_none: 0, e_insert_bookmark: 1 }),
          (h.PDFDoc.ExtractFlag = {
            e_forms_only: 0,
            e_annots_only: 1,
            e_both: 2,
          }),
          (h.PDFDoc.SignaturesVerificationStatus = {
            e_unsigned: 0,
            e_failure: 1,
            e_untrusted: 2,
            e_unsupported: 3,
            e_verified: 4,
          }),
          (h.PDFDocViewPrefs.PageMode = {
            e_UseNone: 0,
            e_UseThumbs: 1,
            e_UseBookmarks: 2,
            e_FullScreen: 3,
            e_UseOC: 4,
            e_UseAttachments: 5,
          }),
          (h.PDFDocViewPrefs.PageLayout = {
            e_Default: 0,
            e_SinglePage: 1,
            e_OneColumn: 2,
            e_TwoColumnLeft: 3,
            e_TwoColumnRight: 4,
            e_TwoPageLeft: 5,
            e_TwoPageRight: 6,
          }),
          (h.PDFDocViewPrefs.ViewerPref = {
            e_HideToolbar: 0,
            e_HideMenubar: 1,
            e_HideWindowUI: 2,
            e_FitWindow: 3,
            e_CenterWindow: 4,
            e_DisplayDocTitle: 5,
          }),
          (h.PDFRasterizer.Type = { e_BuiltIn: 0, e_GDIPlus: 1 }),
          (h.PDFRasterizer.OverprintPreviewMode = {
            e_op_off: 0,
            e_op_on: 1,
            e_op_pdfx_on: 2,
          }),
          (h.PDFRasterizer.ColorPostProcessMode = {
            e_postprocess_none: 0,
            e_postprocess_invert: 1,
            e_postprocess_gradient_map: 2,
            e_postprocess_night_mode: 3,
          }),
          (h.PDFDraw.PixelFormat = {
            e_rgba: 0,
            e_bgra: 1,
            e_rgb: 2,
            e_bgr: 3,
            e_gray: 4,
            e_gray_alpha: 5,
            e_cmyk: 6,
          }),
          (h.CMSType = { e_lcms: 0, e_icm: 1, e_no_cms: 2 }),
          (h.CharacterOrdering = {
            e_Identity: 0,
            e_Japan1: 1,
            e_Japan2: 2,
            e_GB1: 3,
            e_CNS1: 4,
            e_Korea1: 5,
          }),
          (h.LogLevel = {
            e_LogLevel_Off: -1,
            e_LogLevel_Fatal: 5,
            e_LogLevel_Error: 4,
            e_LogLevel_Warning: 3,
            e_LogLevel_Info: 2,
            e_LogLevel_Trace: 1,
            e_LogLevel_Debug: 0,
          }),
          (h.ConnectionErrorHandlingMode = {
            e_continue: 0,
            e_continue_unless_switching_to_demo: 1,
            e_stop: 2,
          }),
          (h.Shading.Type = {
            e_function_shading: 0,
            e_axial_shading: 1,
            e_radial_shading: 2,
            e_free_gouraud_shading: 3,
            e_lattice_gouraud_shading: 4,
            e_coons_shading: 5,
            e_tensor_shading: 6,
            e_null: 7,
          }),
          (h.Stamper.SizeType = {
            e_relative_scale: 1,
            e_absolute_size: 2,
            e_font_size: 3,
          }),
          (h.Stamper.TextAlignment = {
            e_align_left: -1,
            e_align_center: 0,
            e_align_right: 1,
          }),
          (h.Stamper.HorizontalAlignment = {
            e_horizontal_left: -1,
            e_horizontal_center: 0,
            e_horizontal_right: 1,
          }),
          (h.Stamper.VerticalAlignment = {
            e_vertical_bottom: -1,
            e_vertical_center: 0,
            e_vertical_top: 1,
          }),
          (h.TextExtractor.ProcessingFlags = {
            e_no_ligature_exp: 1,
            e_no_dup_remove: 2,
            e_punct_break: 4,
            e_remove_hidden_text: 8,
            e_no_invisible_text: 16,
            e_no_watermarks: 128,
            e_extract_using_zorder: 256,
          }),
          (h.TextExtractor.XMLOutputFlags = {
            e_words_as_elements: 1,
            e_output_bbox: 2,
            e_output_style_info: 4,
          }),
          (h.TextSearch.ResultCode = { e_done: 0, e_page: 1, e_found: 2 }),
          (h.TextSearch.Mode = {
            e_reg_expression: 1,
            e_case_sensitive: 2,
            e_whole_word: 4,
            e_search_up: 8,
            e_page_stop: 16,
            e_highlight: 32,
            e_ambient_string: 64,
          }),
          (h.Obj.Type = {
            e_null: 0,
            e_bool: 1,
            e_number: 2,
            e_name: 3,
            e_string: 4,
            e_dict: 5,
            e_array: 6,
            e_stream: 7,
          }),
          (h.SDFDoc.SaveOptions = {
            e_incremental: 1,
            e_remove_unused: 2,
            e_hex_strings: 4,
            e_omit_xref: 8,
            e_linearized: 16,
            e_compatibility: 32,
          }),
          (h.SecurityHandler.Permission = {
            e_owner: 1,
            e_doc_open: 2,
            e_doc_modify: 3,
            e_print: 4,
            e_print_high: 5,
            e_extract_content: 6,
            e_mod_annot: 7,
            e_fill_forms: 8,
            e_access_support: 9,
            e_assemble_doc: 10,
          }),
          (h.SecurityHandler.AlgorithmType = {
            e_RC4_40: 1,
            e_RC4_128: 2,
            e_AES: 3,
            e_AES_256: 4,
          }),
          (h.VerificationOptions.SecurityLevel = {
            e_compatibility_and_archiving: 0,
            e_maximum: 1,
          }),
          (h.VerificationOptions.TimeMode = {
            e_signing: 0,
            e_timestamp: 1,
            e_current: 2,
          }),
          (h.VerificationOptions.CertificateTrustFlag = {
            e_signing_trust: 1,
            e_certification_trust: 2,
            e_dynamic_content: 4,
            e_javascript: 16,
            e_identity: 32,
            e_trust_anchor: 64,
            e_default_trust: 97,
            e_complete_trust: 119,
          }),
          (h.VerificationResult.DocumentStatus = {
            e_no_error: 0,
            e_corrupt_file: 1,
            e_unsigned: 2,
            e_bad_byteranges: 3,
            e_corrupt_cryptographic_contents: 4,
          }),
          (h.VerificationResult.DigestStatus = {
            e_digest_invalid: 0,
            e_digest_verified: 1,
            e_digest_verification_disabled: 2,
            e_weak_digest_algorithm_but_digest_verifiable: 3,
            e_no_digest_status: 4,
            e_unsupported_encoding: 5,
          }),
          (h.VerificationResult.TrustStatus = {
            e_trust_verified: 0,
            e_untrusted: 1,
            e_trust_verification_disabled: 2,
            e_no_trust_status: 3,
          }),
          (h.VerificationResult.ModificationPermissionsStatus = {
            e_invalidated_by_disallowed_changes: 0,
            e_has_allowed_changes: 1,
            e_unmodified: 2,
            e_permissions_verification_disabled: 3,
            e_no_permissions_status: 4,
          }),
          (h.DisallowedChange.Type = {
            e_form_filled: 0,
            e_digital_signature_signed: 1,
            e_page_template_instantiated: 2,
            e_annotation_created_or_updated_or_deleted: 3,
            e_other: 4,
            e_unknown: 5,
          }),
          (h.Paragraph.TextJustification = {
            e_text_justification_invalid: 0,
            e_text_justify_left: 1,
            e_text_justify_right: 2,
            e_text_justify_center: 3,
          }),
          (h.TableCell.AlignmentVertical = {
            e_alignment_vert_invalid: 0,
            e_alignment_top: 1,
            e_alignment_center: 2,
            e_alignment_bottom: 3,
          }),
          (h.TableCell.AlignmentHorizontal = {
            e_alignment_horz_invalid: 0,
            e_alignment_left: 1,
            e_alignment_middle: 2,
            e_alignment_right: 3,
          }),
          (h.List.NumberFormat = {
            e_none: 0,
            e_decimal: 1,
            e_lower_roman: 2,
            e_upper_roman: 3,
            e_lower_letter: 4,
            e_upper_letter: 5,
            e_ordinal: 6,
            e_ordinal_text: 7,
            e_chinese_counting: 8,
            e_chinese_counting_thousand: 9,
            e_cardinal_text: 10,
            e_decimal_zero: 11,
          }),
          (h.Iterator.prototype.hasNext = function () {
            return h.sendWithPromise('Iterator.hasNext', { itr: this.id });
          }),
          (h.Iterator.prototype.next = function () {
            return h.sendWithPromise('Iterator.next', { itr: this.id });
          }),
          (h.DictIterator.prototype.hasNext = function () {
            return h.sendWithPromise('DictIterator.hasNext', { itr: this.id });
          }),
          (h.DictIterator.prototype.key = function () {
            return h
              .sendWithPromise('DictIterator.key', { itr: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.DictIterator.prototype.value = function () {
            return h
              .sendWithPromise('DictIterator.value', { itr: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.DictIterator.prototype.next = function () {
            return h.sendWithPromise('DictIterator.next', { itr: this.id });
          }),
          (h.Matrix2D.prototype.copy = function () {
            return (
              P('copy', this.yieldFunction),
              h
                .sendWithPromise('Matrix2D.copy', { m: this })
                .then(function (t) {
                  return new h.Matrix2D(t);
                })
            );
          }),
          (h.Matrix2D.prototype.set = function (t, e, n, i, r, o) {
            f(
              arguments.length,
              6,
              'set',
              '(number, number, number, number, number, number)',
              [
                [t, 'number'],
                [e, 'number'],
                [n, 'number'],
                [i, 'number'],
                [r, 'number'],
                [o, 'number'],
              ]
            ),
              P('set', this.yieldFunction);
            var s = this;
            return (
              (this.yieldFunction = 'Matrix2D.set'),
              h
                .sendWithPromise('Matrix2D.set', {
                  matrix: this,
                  a: t,
                  b: e,
                  c: n,
                  d: i,
                  h: r,
                  v: o,
                })
                .then(function (t) {
                  (s.yieldFunction = void 0), W(t, s);
                })
            );
          }),
          (h.Matrix2D.prototype.concat = function (t, e, n, i, r, o) {
            f(
              arguments.length,
              6,
              'concat',
              '(number, number, number, number, number, number)',
              [
                [t, 'number'],
                [e, 'number'],
                [n, 'number'],
                [i, 'number'],
                [r, 'number'],
                [o, 'number'],
              ]
            ),
              P('concat', this.yieldFunction);
            var s = this;
            return (
              (this.yieldFunction = 'Matrix2D.concat'),
              h
                .sendWithPromise('Matrix2D.concat', {
                  matrix: this,
                  a: t,
                  b: e,
                  c: n,
                  d: i,
                  h: r,
                  v: o,
                })
                .then(function (t) {
                  (s.yieldFunction = void 0), W(t, s);
                })
            );
          }),
          (h.Matrix2D.prototype.equals = function (t) {
            return (
              f(arguments.length, 1, 'equals', '(PDFNet.Matrix2D)', [
                [t, 'Structure', h.Matrix2D, 'Matrix2D'],
              ]),
              P('equals', this.yieldFunction),
              F('equals', [[t, 0]]),
              h.sendWithPromise('Matrix2D.equals', { m1: this, m2: t })
            );
          }),
          (h.Matrix2D.prototype.inverse = function () {
            return (
              P('inverse', this.yieldFunction),
              h
                .sendWithPromise('Matrix2D.inverse', { matrix: this })
                .then(function (t) {
                  return new h.Matrix2D(t);
                })
            );
          }),
          (h.Matrix2D.prototype.translate = function (t, e) {
            f(arguments.length, 2, 'translate', '(number, number)', [
              [t, 'number'],
              [e, 'number'],
            ]),
              P('translate', this.yieldFunction);
            var n = this;
            return (
              (this.yieldFunction = 'Matrix2D.translate'),
              h
                .sendWithPromise('Matrix2D.translate', {
                  matrix: this,
                  h: t,
                  v: e,
                })
                .then(function (t) {
                  (n.yieldFunction = void 0), W(t, n);
                })
            );
          }),
          (h.Matrix2D.prototype.preTranslate = function (t, e) {
            f(arguments.length, 2, 'preTranslate', '(number, number)', [
              [t, 'number'],
              [e, 'number'],
            ]),
              P('preTranslate', this.yieldFunction);
            var n = this;
            return (
              (this.yieldFunction = 'Matrix2D.preTranslate'),
              h
                .sendWithPromise('Matrix2D.preTranslate', {
                  matrix: this,
                  h: t,
                  v: e,
                })
                .then(function (t) {
                  (n.yieldFunction = void 0), W(t, n);
                })
            );
          }),
          (h.Matrix2D.prototype.postTranslate = function (t, e) {
            f(arguments.length, 2, 'postTranslate', '(number, number)', [
              [t, 'number'],
              [e, 'number'],
            ]),
              P('postTranslate', this.yieldFunction);
            var n = this;
            return (
              (this.yieldFunction = 'Matrix2D.postTranslate'),
              h
                .sendWithPromise('Matrix2D.postTranslate', {
                  matrix: this,
                  h: t,
                  v: e,
                })
                .then(function (t) {
                  (n.yieldFunction = void 0), W(t, n);
                })
            );
          }),
          (h.Matrix2D.prototype.scale = function (t, e) {
            f(arguments.length, 2, 'scale', '(number, number)', [
              [t, 'number'],
              [e, 'number'],
            ]),
              P('scale', this.yieldFunction);
            var n = this;
            return (
              (this.yieldFunction = 'Matrix2D.scale'),
              h
                .sendWithPromise('Matrix2D.scale', { matrix: this, h: t, v: e })
                .then(function (t) {
                  (n.yieldFunction = void 0), W(t, n);
                })
            );
          }),
          (h.Matrix2D.createZeroMatrix = function () {
            return h
              .sendWithPromise('matrix2DCreateZeroMatrix', {})
              .then(function (t) {
                return new h.Matrix2D(t);
              });
          }),
          (h.Matrix2D.createIdentityMatrix = function () {
            return h
              .sendWithPromise('matrix2DCreateIdentityMatrix', {})
              .then(function (t) {
                return new h.Matrix2D(t);
              });
          }),
          (h.Matrix2D.createRotationMatrix = function (t) {
            return (
              f(arguments.length, 1, 'createRotationMatrix', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('matrix2DCreateRotationMatrix', { angle: t })
                .then(function (t) {
                  return new h.Matrix2D(t);
                })
            );
          }),
          (h.Matrix2D.prototype.multiply = function (t) {
            f(arguments.length, 1, 'multiply', '(PDFNet.Matrix2D)', [
              [t, 'Structure', h.Matrix2D, 'Matrix2D'],
            ]),
              P('multiply', this.yieldFunction),
              F('multiply', [[t, 0]]);
            var e = this;
            return (
              (this.yieldFunction = 'Matrix2D.multiply'),
              h
                .sendWithPromise('Matrix2D.multiply', { matrix: this, m: t })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.Field.create = function (t) {
            return (
              f(arguments.length, 1, 'create', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('fieldCreate', { field_dict: t.id })
                .then(function (t) {
                  return new h.Field(t);
                })
            );
          }),
          (h.Field.prototype.isValid = function () {
            return (
              P('isValid', this.yieldFunction),
              h.sendWithPromise('Field.isValid', { field: this })
            );
          }),
          (h.Field.prototype.getType = function () {
            return (
              P('getType', this.yieldFunction),
              h.sendWithPromise('Field.getType', { field: this })
            );
          }),
          (h.Field.prototype.getValue = function () {
            return (
              P('getValue', this.yieldFunction),
              h
                .sendWithPromise('Field.getValue', { field: this })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Field.prototype.getValueAsString = function () {
            return (
              P('getValueAsString', this.yieldFunction),
              h.sendWithPromise('Field.getValueAsString', { field: this })
            );
          }),
          (h.Field.prototype.getDefaultValueAsString = function () {
            return (
              P('getDefaultValueAsString', this.yieldFunction),
              h.sendWithPromise('Field.getDefaultValueAsString', {
                field: this,
              })
            );
          }),
          (h.Field.prototype.setValueAsString = function (t) {
            f(arguments.length, 1, 'setValueAsString', '(string)', [
              [t, 'string'],
            ]),
              P('setValueAsString', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Field.setValueAsString'),
              h
                .sendWithPromise('Field.setValueAsString', {
                  field: this,
                  value: t,
                })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = D(h.ViewChangeCollection, t.result)),
                    W(t.field, e),
                    t.result
                  );
                })
            );
          }),
          (h.Field.prototype.setValue = function (t) {
            f(arguments.length, 1, 'setValue', '(PDFNet.Obj)', [
              [t, 'Object', h.Obj, 'Obj'],
            ]),
              P('setValue', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Field.setValue'),
              h
                .sendWithPromise('Field.setValue', { field: this, value: t.id })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = D(h.ViewChangeCollection, t.result)),
                    W(t.field, e),
                    t.result
                  );
                })
            );
          }),
          (h.Field.prototype.setValueAsBool = function (t) {
            f(arguments.length, 1, 'setValueAsBool', '(boolean)', [
              [t, 'boolean'],
            ]),
              P('setValueAsBool', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Field.setValueAsBool'),
              h
                .sendWithPromise('Field.setValueAsBool', {
                  field: this,
                  value: t,
                })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = D(h.ViewChangeCollection, t.result)),
                    W(t.field, e),
                    t.result
                  );
                })
            );
          }),
          (h.Field.prototype.getTriggerAction = function (t) {
            return (
              f(arguments.length, 1, 'getTriggerAction', '(number)', [
                [t, 'number'],
              ]),
              P('getTriggerAction', this.yieldFunction),
              h
                .sendWithPromise('Field.getTriggerAction', {
                  field: this,
                  trigger: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Field.prototype.getValueAsBool = function () {
            return (
              P('getValueAsBool', this.yieldFunction),
              h.sendWithPromise('Field.getValueAsBool', { field: this })
            );
          }),
          (h.Field.prototype.refreshAppearance = function () {
            P('refreshAppearance', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Field.refreshAppearance'),
              h
                .sendWithPromise('Field.refreshAppearance', { field: this })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.Field.prototype.eraseAppearance = function () {
            P('eraseAppearance', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Field.eraseAppearance'),
              h
                .sendWithPromise('Field.eraseAppearance', { field: this })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.Field.prototype.getDefaultValue = function () {
            return (
              P('getDefaultValue', this.yieldFunction),
              h
                .sendWithPromise('Field.getDefaultValue', { field: this })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Field.prototype.getName = function () {
            return (
              P('getName', this.yieldFunction),
              h.sendWithPromise('Field.getName', { field: this })
            );
          }),
          (h.Field.prototype.getPartialName = function () {
            return (
              P('getPartialName', this.yieldFunction),
              h.sendWithPromise('Field.getPartialName', { field: this })
            );
          }),
          (h.Field.prototype.rename = function (t) {
            f(arguments.length, 1, 'rename', '(string)', [[t, 'string']]),
              P('rename', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Field.rename'),
              h
                .sendWithPromise('Field.rename', { field: this, field_name: t })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.Field.prototype.isAnnot = function () {
            return (
              P('isAnnot', this.yieldFunction),
              h.sendWithPromise('Field.isAnnot', { field: this })
            );
          }),
          (h.Field.prototype.useSignatureHandler = function (t) {
            f(arguments.length, 1, 'useSignatureHandler', '(number)', [
              [t, 'number'],
            ]),
              P('useSignatureHandler', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Field.useSignatureHandler'),
              h
                .sendWithPromise('Field.useSignatureHandler', {
                  field: this,
                  signature_handler_id: t,
                })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = _(h.Obj, t.result)),
                    W(t.field, e),
                    t.result
                  );
                })
            );
          }),
          (h.Field.prototype.getFlag = function (t) {
            return (
              f(arguments.length, 1, 'getFlag', '(number)', [[t, 'number']]),
              P('getFlag', this.yieldFunction),
              h.sendWithPromise('Field.getFlag', { field: this, flag: t })
            );
          }),
          (h.Field.prototype.setFlag = function (t, e) {
            f(arguments.length, 2, 'setFlag', '(number, boolean)', [
              [t, 'number'],
              [e, 'boolean'],
            ]),
              P('setFlag', this.yieldFunction);
            var n = this;
            return (
              (this.yieldFunction = 'Field.setFlag'),
              h
                .sendWithPromise('Field.setFlag', {
                  field: this,
                  flag: t,
                  value: e,
                })
                .then(function (t) {
                  (n.yieldFunction = void 0), W(t, n);
                })
            );
          }),
          (h.Field.prototype.getJustification = function () {
            P('getJustification', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Field.getJustification'),
              h
                .sendWithPromise('Field.getJustification', { field: this })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.field, e), t.result;
                })
            );
          }),
          (h.Field.prototype.setJustification = function (t) {
            f(arguments.length, 1, 'setJustification', '(number)', [
              [t, 'number'],
            ]),
              P('setJustification', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Field.setJustification'),
              h
                .sendWithPromise('Field.setJustification', {
                  field: this,
                  j: t,
                })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.Field.prototype.setMaxLen = function (t) {
            f(arguments.length, 1, 'setMaxLen', '(number)', [[t, 'number']]),
              P('setMaxLen', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Field.setMaxLen'),
              h
                .sendWithPromise('Field.setMaxLen', { field: this, max_len: t })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.Field.prototype.getMaxLen = function () {
            return (
              P('getMaxLen', this.yieldFunction),
              h.sendWithPromise('Field.getMaxLen', { field: this })
            );
          }),
          (h.Field.prototype.getDefaultAppearance = function () {
            P('getDefaultAppearance', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Field.getDefaultAppearance'),
              h
                .sendWithPromise('Field.getDefaultAppearance', { field: this })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = _(h.GState, t.result)),
                    W(t.field, e),
                    t.result
                  );
                })
            );
          }),
          (h.Field.prototype.getUpdateRect = function () {
            return (
              P('getUpdateRect', this.yieldFunction),
              h
                .sendWithPromise('Field.getUpdateRect', { field: this })
                .then(function (t) {
                  return new h.Rect(t);
                })
            );
          }),
          (h.Field.prototype.flatten = function (t) {
            f(arguments.length, 1, 'flatten', '(PDFNet.Page)', [
              [t, 'Object', h.Page, 'Page'],
            ]),
              P('flatten', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Field.flatten'),
              h
                .sendWithPromise('Field.flatten', { field: this, page: t.id })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.Field.prototype.findInheritedAttribute = function (t) {
            return (
              f(arguments.length, 1, 'findInheritedAttribute', '(string)', [
                [t, 'string'],
              ]),
              P('findInheritedAttribute', this.yieldFunction),
              h
                .sendWithPromise('Field.findInheritedAttribute', {
                  field: this,
                  attrib: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Field.prototype.getSDFObj = function () {
            return (
              P('getSDFObj', this.yieldFunction),
              h
                .sendWithPromise('Field.getSDFObj', { field: this })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Field.prototype.getOptCount = function () {
            return (
              P('getOptCount', this.yieldFunction),
              h.sendWithPromise('Field.getOptCount', { field: this })
            );
          }),
          (h.Field.prototype.getOpt = function (t) {
            return (
              f(arguments.length, 1, 'getOpt', '(number)', [[t, 'number']]),
              P('getOpt', this.yieldFunction),
              h.sendWithPromise('Field.getOpt', { field: this, index: t })
            );
          }),
          (h.Field.prototype.isLockedByDigitalSignature = function () {
            return (
              P('isLockedByDigitalSignature', this.yieldFunction),
              h.sendWithPromise('Field.isLockedByDigitalSignature', {
                field: this,
              })
            );
          }),
          (h.FDFDoc.create = function () {
            return h.sendWithPromise('fdfDocCreate', {}).then(function (t) {
              return D(h.FDFDoc, t);
            });
          }),
          (h.FDFDoc.createFromStream = function (t) {
            return (
              f(arguments.length, 1, 'createFromStream', '(PDFNet.Filter)', [
                [t, 'Object', h.Filter, 'Filter'],
              ]),
              0 != t.id && O(t.id),
              h
                .sendWithPromise('fdfDocCreateFromStream', {
                  no_own_stream: t.id,
                })
                .then(function (t) {
                  return D(h.FDFDoc, t);
                })
            );
          }),
          (h.FDFDoc.createFromMemoryBuffer = function (t) {
            f(
              arguments.length,
              1,
              'createFromMemoryBuffer',
              '(ArrayBuffer|TypedArray)',
              [[t, 'ArrayBuffer']]
            );
            var e = b(t, !1);
            return h
              .sendWithPromise('fdfDocCreateFromMemoryBuffer', { buf: e })
              .then(function (t) {
                return D(h.FDFDoc, t);
              });
          }),
          (h.FDFDoc.prototype.isModified = function () {
            return h.sendWithPromise('FDFDoc.isModified', { doc: this.id });
          }),
          (h.FDFDoc.prototype.saveMemoryBuffer = function () {
            return h
              .sendWithPromise('FDFDoc.saveMemoryBuffer', { doc: this.id })
              .then(function (t) {
                return new Uint8Array(t);
              });
          }),
          (h.FDFDoc.prototype.getTrailer = function () {
            return h
              .sendWithPromise('FDFDoc.getTrailer', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.FDFDoc.prototype.getRoot = function () {
            return h
              .sendWithPromise('FDFDoc.getRoot', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.FDFDoc.prototype.getFDF = function () {
            return h
              .sendWithPromise('FDFDoc.getFDF', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.FDFDoc.prototype.getPDFFileName = function () {
            return h.sendWithPromise('FDFDoc.getPDFFileName', { doc: this.id });
          }),
          (h.FDFDoc.prototype.setPDFFileName = function (t) {
            return (
              f(arguments.length, 1, 'setPDFFileName', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('FDFDoc.setPDFFileName', {
                doc: this.id,
                filepath: t,
              })
            );
          }),
          (h.FDFDoc.prototype.getID = function () {
            return h
              .sendWithPromise('FDFDoc.getID', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.FDFDoc.prototype.setID = function (t) {
            return (
              f(arguments.length, 1, 'setID', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('FDFDoc.setID', { doc: this.id, id: t.id })
            );
          }),
          (h.FDFDoc.prototype.getFieldIteratorBegin = function () {
            return h
              .sendWithPromise('FDFDoc.getFieldIteratorBegin', { doc: this.id })
              .then(function (t) {
                return D(h.Iterator, t, 'FDFField');
              });
          }),
          (h.FDFDoc.prototype.getFieldIterator = function (t) {
            return (
              f(arguments.length, 1, 'getFieldIterator', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('FDFDoc.getFieldIterator', {
                  doc: this.id,
                  field_name: t,
                })
                .then(function (t) {
                  return D(h.Iterator, t, 'FDFField');
                })
            );
          }),
          (h.FDFDoc.prototype.getField = function (t) {
            return (
              f(arguments.length, 1, 'getField', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('FDFDoc.getField', {
                  doc: this.id,
                  field_name: t,
                })
                .then(function (t) {
                  return new h.FDFField(t);
                })
            );
          }),
          (h.FDFDoc.prototype.fieldCreate = function (t, e, n) {
            return (
              void 0 === n && (n = new h.Obj('0')),
              f(
                arguments.length,
                2,
                'fieldCreate',
                '(string, number, PDFNet.Obj)',
                [
                  [t, 'string'],
                  [e, 'number'],
                  [n, 'Object', h.Obj, 'Obj'],
                ]
              ),
              h
                .sendWithPromise('FDFDoc.fieldCreate', {
                  doc: this.id,
                  field_name: t,
                  type: e,
                  field_value: n.id,
                })
                .then(function (t) {
                  return new h.FDFField(t);
                })
            );
          }),
          (h.FDFDoc.prototype.fieldCreateFromString = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'fieldCreateFromString',
                '(string, number, string)',
                [
                  [t, 'string'],
                  [e, 'number'],
                  [n, 'string'],
                ]
              ),
              h
                .sendWithPromise('FDFDoc.fieldCreateFromString', {
                  doc: this.id,
                  field_name: t,
                  type: e,
                  field_value: n,
                })
                .then(function (t) {
                  return new h.FDFField(t);
                })
            );
          }),
          (h.FDFDoc.prototype.getSDFDoc = function () {
            return h
              .sendWithPromise('FDFDoc.getSDFDoc', { doc: this.id })
              .then(function (t) {
                return _(h.SDFDoc, t);
              });
          }),
          (h.FDFDoc.createFromXFDF = function (t) {
            return (
              f(arguments.length, 1, 'createFromXFDF', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('fdfDocCreateFromXFDF', { file_name: t })
                .then(function (t) {
                  return D(h.FDFDoc, t);
                })
            );
          }),
          (h.FDFDoc.prototype.saveAsXFDFWithOptions = function (t, e) {
            return (
              void 0 === e && (e = null),
              f(
                arguments.length,
                1,
                'saveAsXFDFWithOptions',
                '(string, PDFNet.OptionBase)',
                [
                  [t, 'string'],
                  [e, 'OptionBase'],
                ]
              ),
              F('saveAsXFDFWithOptions', [[e, 1]]),
              (e = e ? e.getJsonString() : '{}'),
              h.sendWithPromise('FDFDoc.saveAsXFDFWithOptions', {
                doc: this.id,
                filepath: t,
                opts: e,
              })
            );
          }),
          (h.FDFDoc.prototype.saveAsXFDFAsString = function () {
            return h.sendWithPromise('FDFDoc.saveAsXFDFAsString', {
              doc: this.id,
            });
          }),
          (h.FDFDoc.prototype.saveAsXFDFAsStringWithOptions = function (t) {
            return (
              void 0 === t && (t = null),
              f(
                arguments.length,
                0,
                'saveAsXFDFAsStringWithOptions',
                '(PDFNet.OptionBase)',
                [[t, 'OptionBase']]
              ),
              F('saveAsXFDFAsStringWithOptions', [[t, 0]]),
              (t = t ? t.getJsonString() : '{}'),
              h.sendWithPromise('FDFDoc.saveAsXFDFAsStringWithOptions', {
                doc: this.id,
                opts: t,
              })
            );
          }),
          (h.FDFDoc.prototype.mergeAnnots = function (t, e) {
            return (
              void 0 === e && (e = ''),
              f(arguments.length, 1, 'mergeAnnots', '(string, string)', [
                [t, 'string'],
                [e, 'string'],
              ]),
              h.sendWithPromise('FDFDoc.mergeAnnots', {
                doc: this.id,
                command_file: t,
                permitted_user: e,
              })
            );
          }),
          (h.FDFField.create = function (t, e) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              void 0 === e && (e = new h.Obj('0')),
              f(arguments.length, 0, 'create', '(PDFNet.Obj, PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
                [e, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('fdfFieldCreate', {
                  field_dict: t.id,
                  fdf_dict: e.id,
                })
                .then(function (t) {
                  return new h.FDFField(t);
                })
            );
          }),
          (h.FDFField.prototype.getValue = function () {
            P('getValue', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'FDFField.getValue'),
              h
                .sendWithPromise('FDFField.getValue', { field: this })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = _(h.Obj, t.result)),
                    W(t.field, e),
                    t.result
                  );
                })
            );
          }),
          (h.FDFField.prototype.setValue = function (t) {
            f(arguments.length, 1, 'setValue', '(PDFNet.Obj)', [
              [t, 'Object', h.Obj, 'Obj'],
            ]),
              P('setValue', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'FDFField.setValue'),
              h
                .sendWithPromise('FDFField.setValue', {
                  field: this,
                  value: t.id,
                })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.FDFField.prototype.getName = function () {
            P('getName', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'FDFField.getName'),
              h
                .sendWithPromise('FDFField.getName', { field: this })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.field, e), t.result;
                })
            );
          }),
          (h.FDFField.prototype.getPartialName = function () {
            P('getPartialName', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'FDFField.getPartialName'),
              h
                .sendWithPromise('FDFField.getPartialName', { field: this })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.field, e), t.result;
                })
            );
          }),
          (h.FDFField.prototype.getSDFObj = function () {
            return (
              P('getSDFObj', this.yieldFunction),
              h
                .sendWithPromise('FDFField.getSDFObj', { field: this })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.FDFField.prototype.findAttribute = function (t) {
            return (
              f(arguments.length, 1, 'findAttribute', '(string)', [
                [t, 'string'],
              ]),
              P('findAttribute', this.yieldFunction),
              h
                .sendWithPromise('FDFField.findAttribute', {
                  field: this,
                  attrib: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Filter.prototype.createASCII85Encode = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createASCII85Encode',
                '(number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                ]
              ),
              h
                .sendWithPromise('Filter.createASCII85Encode', {
                  no_own_input_filter: this.id,
                  line_width: t,
                  buf_sz: e,
                })
                .then(function (t) {
                  return D(h.Filter, t);
                })
            );
          }),
          (h.Filter.createMemoryFilter = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createMemoryFilter',
                '(number, boolean)',
                [
                  [t, 'number'],
                  [e, 'boolean'],
                ]
              ),
              h
                .sendWithPromise('filterCreateMemoryFilter', {
                  buf_sz: t,
                  is_input: e,
                })
                .then(function (t) {
                  return D(h.Filter, t);
                })
            );
          }),
          (h.Filter.createImage2RGBFromElement = function (t) {
            return (
              f(
                arguments.length,
                1,
                'createImage2RGBFromElement',
                '(PDFNet.Element)',
                [[t, 'Object', h.Element, 'Element']]
              ),
              h
                .sendWithPromise('filterCreateImage2RGBFromElement', {
                  elem: t.id,
                })
                .then(function (t) {
                  return D(h.Filter, t);
                })
            );
          }),
          (h.Filter.createImage2RGBFromObj = function (t) {
            return (
              f(arguments.length, 1, 'createImage2RGBFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('filterCreateImage2RGBFromObj', { obj: t.id })
                .then(function (t) {
                  return D(h.Filter, t);
                })
            );
          }),
          (h.Filter.createImage2RGB = function (t) {
            return (
              f(arguments.length, 1, 'createImage2RGB', '(PDFNet.Image)', [
                [t, 'Object', h.Image, 'Image'],
              ]),
              h
                .sendWithPromise('filterCreateImage2RGB', { img: t.id })
                .then(function (t) {
                  return D(h.Filter, t);
                })
            );
          }),
          (h.Filter.createImage2RGBAFromElement = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createImage2RGBAFromElement',
                '(PDFNet.Element, boolean)',
                [
                  [t, 'Object', h.Element, 'Element'],
                  [e, 'boolean'],
                ]
              ),
              h
                .sendWithPromise('filterCreateImage2RGBAFromElement', {
                  elem: t.id,
                  premultiply: e,
                })
                .then(function (t) {
                  return D(h.Filter, t);
                })
            );
          }),
          (h.Filter.createImage2RGBAFromObj = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createImage2RGBAFromObj',
                '(PDFNet.Obj, boolean)',
                [
                  [t, 'Object', h.Obj, 'Obj'],
                  [e, 'boolean'],
                ]
              ),
              h
                .sendWithPromise('filterCreateImage2RGBAFromObj', {
                  obj: t.id,
                  premultiply: e,
                })
                .then(function (t) {
                  return D(h.Filter, t);
                })
            );
          }),
          (h.Filter.createImage2RGBA = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createImage2RGBA',
                '(PDFNet.Image, boolean)',
                [
                  [t, 'Object', h.Image, 'Image'],
                  [e, 'boolean'],
                ]
              ),
              h
                .sendWithPromise('filterCreateImage2RGBA', {
                  img: t.id,
                  premultiply: e,
                })
                .then(function (t) {
                  return D(h.Filter, t);
                })
            );
          }),
          (h.Filter.prototype.attachFilter = function (t) {
            return (
              f(arguments.length, 1, 'attachFilter', '(PDFNet.Filter)', [
                [t, 'Object', h.Filter, 'Filter'],
              ]),
              0 != t.id && O(t.id),
              h.sendWithPromise('Filter.attachFilter', {
                filter: this.id,
                no_own_attach_filter: t.id,
              })
            );
          }),
          (h.Filter.prototype.releaseAttachedFilter = function () {
            return h
              .sendWithPromise('Filter.releaseAttachedFilter', {
                filter: this.id,
              })
              .then(function (t) {
                return D(h.Filter, t);
              });
          }),
          (h.Filter.prototype.getAttachedFilter = function () {
            return h
              .sendWithPromise('Filter.getAttachedFilter', { filter: this.id })
              .then(function (t) {
                return _(h.Filter, t);
              });
          }),
          (h.Filter.prototype.getSourceFilter = function () {
            return h
              .sendWithPromise('Filter.getSourceFilter', { filter: this.id })
              .then(function (t) {
                return _(h.Filter, t);
              });
          }),
          (h.Filter.prototype.getName = function () {
            return h.sendWithPromise('Filter.getName', { filter: this.id });
          }),
          (h.Filter.prototype.getDecodeName = function () {
            return h.sendWithPromise('Filter.getDecodeName', {
              filter: this.id,
            });
          }),
          (h.Filter.prototype.begin = function () {
            return h.sendWithPromise('Filter.begin', { filter: this.id });
          }),
          (h.Filter.prototype.size = function () {
            return h.sendWithPromise('Filter.size', { filter: this.id });
          }),
          (h.Filter.prototype.consume = function (t) {
            return (
              f(arguments.length, 1, 'consume', '(number)', [[t, 'number']]),
              h.sendWithPromise('Filter.consume', {
                filter: this.id,
                num_bytes: t,
              })
            );
          }),
          (h.Filter.prototype.count = function () {
            return h.sendWithPromise('Filter.count', { filter: this.id });
          }),
          (h.Filter.prototype.setCount = function (t) {
            return (
              f(arguments.length, 1, 'setCount', '(number)', [[t, 'number']]),
              h.sendWithPromise('Filter.setCount', {
                filter: this.id,
                new_count: t,
              })
            );
          }),
          (h.Filter.prototype.setStreamLength = function (t) {
            return (
              f(arguments.length, 1, 'setStreamLength', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Filter.setStreamLength', {
                filter: this.id,
                bytes: t,
              })
            );
          }),
          (h.Filter.prototype.flush = function () {
            return h.sendWithPromise('Filter.flush', { filter: this.id });
          }),
          (h.Filter.prototype.flushAll = function () {
            return h.sendWithPromise('Filter.flushAll', { filter: this.id });
          }),
          (h.Filter.prototype.isInputFilter = function () {
            return h.sendWithPromise('Filter.isInputFilter', {
              filter: this.id,
            });
          }),
          (h.Filter.prototype.canSeek = function () {
            return h.sendWithPromise('Filter.canSeek', { filter: this.id });
          }),
          (h.Filter.prototype.seek = function (t, e) {
            return (
              f(arguments.length, 2, 'seek', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h.sendWithPromise('Filter.seek', {
                filter: this.id,
                offset: t,
                origin: e,
              })
            );
          }),
          (h.Filter.prototype.tell = function () {
            return h.sendWithPromise('Filter.tell', { filter: this.id });
          }),
          (h.Filter.prototype.truncate = function (t) {
            return (
              f(arguments.length, 1, 'truncate', '(number)', [[t, 'number']]),
              h.sendWithPromise('Filter.truncate', {
                filter: this.id,
                new_size: t,
              })
            );
          }),
          (h.Filter.prototype.createInputIterator = function () {
            return h
              .sendWithPromise('Filter.createInputIterator', {
                filter: this.id,
              })
              .then(function (t) {
                return D(h.Filter, t);
              });
          }),
          (h.Filter.prototype.getFilePath = function () {
            return h.sendWithPromise('Filter.getFilePath', { filter: this.id });
          }),
          (h.Filter.prototype.memoryFilterGetBuffer = function () {
            return h.sendWithPromise('Filter.memoryFilterGetBuffer', {
              filter: this.id,
            });
          }),
          (h.Filter.prototype.memoryFilterSetAsInputFilter = function () {
            return h.sendWithPromise('Filter.memoryFilterSetAsInputFilter', {
              filter: this.id,
            });
          }),
          (h.Filter.prototype.memoryFilterReset = function () {
            return h.sendWithPromise('Filter.memoryFilterReset', {
              filter: this.id,
            });
          }),
          (h.FilterReader.create = function (t) {
            return (
              f(arguments.length, 1, 'create', '(PDFNet.Filter)', [
                [t, 'Object', h.Filter, 'Filter'],
              ]),
              h
                .sendWithPromise('filterReaderCreate', { filter: t.id })
                .then(function (t) {
                  return D(h.FilterReader, t);
                })
            );
          }),
          (h.FilterReader.prototype.attachFilter = function (t) {
            return (
              f(arguments.length, 1, 'attachFilter', '(PDFNet.Filter)', [
                [t, 'Object', h.Filter, 'Filter'],
              ]),
              h.sendWithPromise('FilterReader.attachFilter', {
                reader: this.id,
                filter: t.id,
              })
            );
          }),
          (h.FilterReader.prototype.getAttachedFilter = function () {
            return h
              .sendWithPromise('FilterReader.getAttachedFilter', {
                reader: this.id,
              })
              .then(function (t) {
                return _(h.Filter, t);
              });
          }),
          (h.FilterReader.prototype.seek = function (t, e) {
            return (
              f(arguments.length, 2, 'seek', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h.sendWithPromise('FilterReader.seek', {
                reader: this.id,
                offset: t,
                origin: e,
              })
            );
          }),
          (h.FilterReader.prototype.tell = function () {
            return h.sendWithPromise('FilterReader.tell', { reader: this.id });
          }),
          (h.FilterReader.prototype.count = function () {
            return h.sendWithPromise('FilterReader.count', { reader: this.id });
          }),
          (h.FilterReader.prototype.flush = function () {
            return h.sendWithPromise('FilterReader.flush', { reader: this.id });
          }),
          (h.FilterReader.prototype.flushAll = function () {
            return h.sendWithPromise('FilterReader.flushAll', {
              reader: this.id,
            });
          }),
          (h.FilterReader.prototype.get = function () {
            return h.sendWithPromise('FilterReader.get', { reader: this.id });
          }),
          (h.FilterReader.prototype.peek = function () {
            return h.sendWithPromise('FilterReader.peek', { reader: this.id });
          }),
          (h.FilterWriter.create = function (t) {
            return (
              f(arguments.length, 1, 'create', '(PDFNet.Filter)', [
                [t, 'Object', h.Filter, 'Filter'],
              ]),
              h
                .sendWithPromise('filterWriterCreate', { filter: t.id })
                .then(function (t) {
                  return D(h.FilterWriter, t);
                })
            );
          }),
          (h.FilterWriter.prototype.attachFilter = function (t) {
            return (
              f(arguments.length, 1, 'attachFilter', '(PDFNet.Filter)', [
                [t, 'Object', h.Filter, 'Filter'],
              ]),
              h.sendWithPromise('FilterWriter.attachFilter', {
                writer: this.id,
                filter: t.id,
              })
            );
          }),
          (h.FilterWriter.prototype.getAttachedFilter = function () {
            return h
              .sendWithPromise('FilterWriter.getAttachedFilter', {
                writer: this.id,
              })
              .then(function (t) {
                return _(h.Filter, t);
              });
          }),
          (h.FilterWriter.prototype.seek = function (t, e) {
            return (
              f(arguments.length, 2, 'seek', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h.sendWithPromise('FilterWriter.seek', {
                writer: this.id,
                offset: t,
                origin: e,
              })
            );
          }),
          (h.FilterWriter.prototype.tell = function () {
            return h.sendWithPromise('FilterWriter.tell', { writer: this.id });
          }),
          (h.FilterWriter.prototype.count = function () {
            return h.sendWithPromise('FilterWriter.count', { writer: this.id });
          }),
          (h.FilterWriter.prototype.flush = function () {
            return h.sendWithPromise('FilterWriter.flush', { writer: this.id });
          }),
          (h.FilterWriter.prototype.flushAll = function () {
            return h.sendWithPromise('FilterWriter.flushAll', {
              writer: this.id,
            });
          }),
          (h.FilterWriter.prototype.writeUChar = function (t) {
            return (
              f(arguments.length, 1, 'writeUChar', '(number)', [[t, 'number']]),
              h.sendWithPromise('FilterWriter.writeUChar', {
                writer: this.id,
                ch: t,
              })
            );
          }),
          (h.FilterWriter.prototype.writeInt16 = function (t) {
            return (
              f(arguments.length, 1, 'writeInt16', '(number)', [[t, 'number']]),
              h.sendWithPromise('FilterWriter.writeInt16', {
                writer: this.id,
                num: t,
              })
            );
          }),
          (h.FilterWriter.prototype.writeUInt16 = function (t) {
            return (
              f(arguments.length, 1, 'writeUInt16', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('FilterWriter.writeUInt16', {
                writer: this.id,
                num: t,
              })
            );
          }),
          (h.FilterWriter.prototype.writeInt32 = function (t) {
            return (
              f(arguments.length, 1, 'writeInt32', '(number)', [[t, 'number']]),
              h.sendWithPromise('FilterWriter.writeInt32', {
                writer: this.id,
                num: t,
              })
            );
          }),
          (h.FilterWriter.prototype.writeUInt32 = function (t) {
            return (
              f(arguments.length, 1, 'writeUInt32', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('FilterWriter.writeUInt32', {
                writer: this.id,
                num: t,
              })
            );
          }),
          (h.FilterWriter.prototype.writeInt64 = function (t) {
            return (
              f(arguments.length, 1, 'writeInt64', '(number)', [[t, 'number']]),
              h.sendWithPromise('FilterWriter.writeInt64', {
                writer: this.id,
                num: t,
              })
            );
          }),
          (h.FilterWriter.prototype.writeUInt64 = function (t) {
            return (
              f(arguments.length, 1, 'writeUInt64', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('FilterWriter.writeUInt64', {
                writer: this.id,
                num: t,
              })
            );
          }),
          (h.FilterWriter.prototype.writeString = function (t) {
            return (
              f(arguments.length, 1, 'writeString', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('FilterWriter.writeString', {
                writer: this.id,
                str: t,
              })
            );
          }),
          (h.FilterWriter.prototype.writeFilter = function (t) {
            return (
              f(arguments.length, 1, 'writeFilter', '(PDFNet.FilterReader)', [
                [t, 'Object', h.FilterReader, 'FilterReader'],
              ]),
              h.sendWithPromise('FilterWriter.writeFilter', {
                writer: this.id,
                reader: t.id,
              })
            );
          }),
          (h.FilterWriter.prototype.writeLine = function (t, e) {
            return (
              void 0 === e && (e = 13),
              f(arguments.length, 1, 'writeLine', '(string, number)', [
                [t, 'const char* = 0'],
                [e, 'number'],
              ]),
              h.sendWithPromise('FilterWriter.writeLine', {
                writer: this.id,
                line: t,
                eol: e,
              })
            );
          }),
          (h.FilterWriter.prototype.writeBuffer = function (t) {
            f(arguments.length, 1, 'writeBuffer', '(ArrayBuffer|TypedArray)', [
              [t, 'ArrayBuffer'],
            ]);
            var e = b(t, !1);
            return h.sendWithPromise('FilterWriter.writeBuffer', {
              writer: this.id,
              buf: e,
            });
          }),
          (h.OCG.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.PDFDoc, string)', [
                [t, 'PDFDoc'],
                [e, 'string'],
              ]),
              h
                .sendWithPromise('ocgCreate', { pdfdoc: t.id, name: e })
                .then(function (t) {
                  return _(h.OCG, t);
                })
            );
          }),
          (h.OCG.createFromObj = function (t) {
            return (
              f(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('ocgCreateFromObj', { ocg_dict: t.id })
                .then(function (t) {
                  return _(h.OCG, t);
                })
            );
          }),
          (h.OCG.prototype.copy = function () {
            return h
              .sendWithPromise('OCG.copy', { ocg: this.id })
              .then(function (t) {
                return _(h.OCG, t);
              });
          }),
          (h.OCG.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('OCG.getSDFObj', { ocg: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.OCG.prototype.isValid = function () {
            return h.sendWithPromise('OCG.isValid', { ocg: this.id });
          }),
          (h.OCG.prototype.getName = function () {
            return h.sendWithPromise('OCG.getName', { c: this.id });
          }),
          (h.OCG.prototype.setName = function (t) {
            return (
              f(arguments.length, 1, 'setName', '(string)', [[t, 'string']]),
              h.sendWithPromise('OCG.setName', { c: this.id, value: t })
            );
          }),
          (h.OCG.prototype.getIntent = function () {
            return h
              .sendWithPromise('OCG.getIntent', { c: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.OCG.prototype.setIntent = function (t) {
            return (
              f(arguments.length, 1, 'setIntent', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('OCG.setIntent', { c: this.id, value: t.id })
            );
          }),
          (h.OCG.prototype.hasUsage = function () {
            return h.sendWithPromise('OCG.hasUsage', { c: this.id });
          }),
          (h.OCG.prototype.getUsage = function (t) {
            return (
              f(arguments.length, 1, 'getUsage', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('OCG.getUsage', { c: this.id, key: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.OCG.prototype.getCurrentState = function (t) {
            return (
              f(arguments.length, 1, 'getCurrentState', '(PDFNet.OCGContext)', [
                [t, 'Object', h.OCGContext, 'OCGContext'],
              ]),
              h.sendWithPromise('OCG.getCurrentState', {
                c: this.id,
                ctx: t.id,
              })
            );
          }),
          (h.OCG.prototype.setCurrentState = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setCurrentState',
                '(PDFNet.OCGContext, boolean)',
                [
                  [t, 'Object', h.OCGContext, 'OCGContext'],
                  [e, 'boolean'],
                ]
              ),
              h.sendWithPromise('OCG.setCurrentState', {
                c: this.id,
                ctx: t.id,
                state: e,
              })
            );
          }),
          (h.OCG.prototype.getInitialState = function (t) {
            return (
              f(arguments.length, 1, 'getInitialState', '(PDFNet.OCGConfig)', [
                [t, 'Object', h.OCGConfig, 'OCGConfig'],
              ]),
              h.sendWithPromise('OCG.getInitialState', {
                c: this.id,
                cfg: t.id,
              })
            );
          }),
          (h.OCG.prototype.setInitialState = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setInitialState',
                '(PDFNet.OCGConfig, boolean)',
                [
                  [t, 'Object', h.OCGConfig, 'OCGConfig'],
                  [e, 'boolean'],
                ]
              ),
              h.sendWithPromise('OCG.setInitialState', {
                c: this.id,
                cfg: t.id,
                state: e,
              })
            );
          }),
          (h.OCG.prototype.isLocked = function (t) {
            return (
              f(arguments.length, 1, 'isLocked', '(PDFNet.OCGConfig)', [
                [t, 'Object', h.OCGConfig, 'OCGConfig'],
              ]),
              h.sendWithPromise('OCG.isLocked', { c: this.id, cfg: t.id })
            );
          }),
          (h.OCG.prototype.setLocked = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setLocked',
                '(PDFNet.OCGConfig, boolean)',
                [
                  [t, 'Object', h.OCGConfig, 'OCGConfig'],
                  [e, 'boolean'],
                ]
              ),
              h.sendWithPromise('OCG.setLocked', {
                c: this.id,
                cfg: t.id,
                state: e,
              })
            );
          }),
          (h.OCGConfig.createFromObj = function (t) {
            return (
              f(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('ocgConfigCreateFromObj', { dict: t.id })
                .then(function (t) {
                  return _(h.OCGConfig, t);
                })
            );
          }),
          (h.OCGConfig.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.PDFDoc, boolean)', [
                [t, 'PDFDoc'],
                [e, 'boolean'],
              ]),
              h
                .sendWithPromise('ocgConfigCreate', {
                  pdfdoc: t.id,
                  default_config: e,
                })
                .then(function (t) {
                  return _(h.OCGConfig, t);
                })
            );
          }),
          (h.OCGConfig.prototype.copy = function () {
            return h
              .sendWithPromise('OCGConfig.copy', { c: this.id })
              .then(function (t) {
                return _(h.OCGConfig, t);
              });
          }),
          (h.OCGConfig.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('OCGConfig.getSDFObj', { c: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.OCGConfig.prototype.getOrder = function () {
            return h
              .sendWithPromise('OCGConfig.getOrder', { c: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.OCGConfig.prototype.setOrder = function (t) {
            return (
              f(arguments.length, 1, 'setOrder', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('OCGConfig.setOrder', {
                c: this.id,
                value: t.id,
              })
            );
          }),
          (h.OCGConfig.prototype.getName = function () {
            return h.sendWithPromise('OCGConfig.getName', { c: this.id });
          }),
          (h.OCGConfig.prototype.setName = function (t) {
            return (
              f(arguments.length, 1, 'setName', '(string)', [[t, 'string']]),
              h.sendWithPromise('OCGConfig.setName', { c: this.id, value: t })
            );
          }),
          (h.OCGConfig.prototype.getCreator = function () {
            return h.sendWithPromise('OCGConfig.getCreator', { c: this.id });
          }),
          (h.OCGConfig.prototype.setCreator = function (t) {
            return (
              f(arguments.length, 1, 'setCreator', '(string)', [[t, 'string']]),
              h.sendWithPromise('OCGConfig.setCreator', {
                c: this.id,
                value: t,
              })
            );
          }),
          (h.OCGConfig.prototype.getInitBaseState = function () {
            return h.sendWithPromise('OCGConfig.getInitBaseState', {
              c: this.id,
            });
          }),
          (h.OCGConfig.prototype.setInitBaseState = function (t) {
            return (
              void 0 === t && (t = 'ON'),
              f(arguments.length, 0, 'setInitBaseState', '(string)', [
                [t, 'const char* = 0'],
              ]),
              h.sendWithPromise('OCGConfig.setInitBaseState', {
                c: this.id,
                value: t,
              })
            );
          }),
          (h.OCGConfig.prototype.getInitOnStates = function () {
            return h
              .sendWithPromise('OCGConfig.getInitOnStates', { c: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.OCGConfig.prototype.setInitOnStates = function (t) {
            return (
              f(arguments.length, 1, 'setInitOnStates', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('OCGConfig.setInitOnStates', {
                c: this.id,
                value: t.id,
              })
            );
          }),
          (h.OCGConfig.prototype.getInitOffStates = function () {
            return h
              .sendWithPromise('OCGConfig.getInitOffStates', { c: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.OCGConfig.prototype.setInitOffStates = function (t) {
            return (
              f(arguments.length, 1, 'setInitOffStates', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('OCGConfig.setInitOffStates', {
                c: this.id,
                value: t.id,
              })
            );
          }),
          (h.OCGConfig.prototype.getIntent = function () {
            return h
              .sendWithPromise('OCGConfig.getIntent', { c: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.OCGConfig.prototype.setIntent = function (t) {
            return (
              f(arguments.length, 1, 'setIntent', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('OCGConfig.setIntent', {
                c: this.id,
                value: t.id,
              })
            );
          }),
          (h.OCGConfig.prototype.getLockedOCGs = function () {
            return h
              .sendWithPromise('OCGConfig.getLockedOCGs', { c: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.OCGConfig.prototype.setLockedOCGs = function (t) {
            return (
              f(arguments.length, 1, 'setLockedOCGs', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('OCGConfig.setLockedOCGs', {
                c: this.id,
                value: t.id,
              })
            );
          }),
          (h.OCGContext.createFromConfig = function (t) {
            return (
              f(arguments.length, 1, 'createFromConfig', '(PDFNet.OCGConfig)', [
                [t, 'Object', h.OCGConfig, 'OCGConfig'],
              ]),
              h
                .sendWithPromise('ocgContextCreateFromConfig', { cfg: t.id })
                .then(function (t) {
                  return D(h.OCGContext, t);
                })
            );
          }),
          (h.OCGContext.prototype.copy = function () {
            return h
              .sendWithPromise('OCGContext.copy', { c: this.id })
              .then(function (t) {
                return D(h.OCGContext, t);
              });
          }),
          (h.OCGContext.prototype.getState = function (t) {
            return (
              f(arguments.length, 1, 'getState', '(PDFNet.OCG)', [
                [t, 'Object', h.OCG, 'OCG'],
              ]),
              h.sendWithPromise('OCGContext.getState', {
                c: this.id,
                grp: t.id,
              })
            );
          }),
          (h.OCGContext.prototype.setState = function (t, e) {
            return (
              f(arguments.length, 2, 'setState', '(PDFNet.OCG, boolean)', [
                [t, 'Object', h.OCG, 'OCG'],
                [e, 'boolean'],
              ]),
              h.sendWithPromise('OCGContext.setState', {
                c: this.id,
                grp: t.id,
                state: e,
              })
            );
          }),
          (h.OCGContext.prototype.resetStates = function (t) {
            return (
              f(arguments.length, 1, 'resetStates', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('OCGContext.resetStates', {
                c: this.id,
                all_on: t,
              })
            );
          }),
          (h.OCGContext.prototype.setNonOCDrawing = function (t) {
            return (
              f(arguments.length, 1, 'setNonOCDrawing', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('OCGContext.setNonOCDrawing', {
                c: this.id,
                draw_non_OC: t,
              })
            );
          }),
          (h.OCGContext.prototype.getNonOCDrawing = function () {
            return h.sendWithPromise('OCGContext.getNonOCDrawing', {
              c: this.id,
            });
          }),
          (h.OCGContext.prototype.setOCDrawMode = function (t) {
            return (
              f(arguments.length, 1, 'setOCDrawMode', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('OCGContext.setOCDrawMode', {
                c: this.id,
                oc_draw_mode: t,
              })
            );
          }),
          (h.OCGContext.prototype.getOCMode = function () {
            return h.sendWithPromise('OCGContext.getOCMode', { c: this.id });
          }),
          (h.OCMD.createFromObj = function (t) {
            return (
              f(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('ocmdCreateFromObj', { ocmd_dict: t.id })
                .then(function (t) {
                  return _(h.OCMD, t);
                })
            );
          }),
          (h.OCMD.create = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'create',
                '(PDFNet.PDFDoc, PDFNet.Obj, number)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Object', h.Obj, 'Obj'],
                  [n, 'number'],
                ]
              ),
              h
                .sendWithPromise('ocmdCreate', {
                  pdfdoc: t.id,
                  ocgs: e.id,
                  vis_policy: n,
                })
                .then(function (t) {
                  return _(h.OCMD, t);
                })
            );
          }),
          (h.OCMD.prototype.copy = function () {
            return h
              .sendWithPromise('OCMD.copy', { ocmd: this.id })
              .then(function (t) {
                return _(h.OCMD, t);
              });
          }),
          (h.OCMD.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('OCMD.getSDFObj', { ocmd: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.OCMD.prototype.getOCGs = function () {
            return h
              .sendWithPromise('OCMD.getOCGs', { ocmd: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.OCMD.prototype.getVisibilityExpression = function () {
            return h
              .sendWithPromise('OCMD.getVisibilityExpression', {
                ocmd: this.id,
              })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.OCMD.prototype.isValid = function () {
            return h.sendWithPromise('OCMD.isValid', { ocmd: this.id });
          }),
          (h.OCMD.prototype.isCurrentlyVisible = function (t) {
            return (
              f(
                arguments.length,
                1,
                'isCurrentlyVisible',
                '(PDFNet.OCGContext)',
                [[t, 'Object', h.OCGContext, 'OCGContext']]
              ),
              h.sendWithPromise('OCMD.isCurrentlyVisible', {
                ocmd: this.id,
                ctx: t.id,
              })
            );
          }),
          (h.OCMD.prototype.getVisibilityPolicy = function () {
            return h.sendWithPromise('OCMD.getVisibilityPolicy', {
              ocmd: this.id,
            });
          }),
          (h.OCMD.prototype.setVisibilityPolicy = function (t) {
            return (
              f(arguments.length, 1, 'setVisibilityPolicy', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('OCMD.setVisibilityPolicy', {
                ocmd: this.id,
                vis_policy: t,
              })
            );
          }),
          (h.PDFACompliance.prototype.getErrorCount = function () {
            return h.sendWithPromise('PDFACompliance.getErrorCount', {
              pdfac: this.id,
            });
          }),
          (h.PDFACompliance.prototype.getError = function (t) {
            return (
              f(arguments.length, 1, 'getError', '(number)', [[t, 'number']]),
              h.sendWithPromise('PDFACompliance.getError', {
                pdfac: this.id,
                idx: t,
              })
            );
          }),
          (h.PDFACompliance.prototype.getRefObjCount = function (t) {
            return (
              f(arguments.length, 1, 'getRefObjCount', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFACompliance.getRefObjCount', {
                pdfac: this.id,
                id: t,
              })
            );
          }),
          (h.PDFACompliance.prototype.getRefObj = function (t, e) {
            return (
              f(arguments.length, 2, 'getRefObj', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h.sendWithPromise('PDFACompliance.getRefObj', {
                pdfac: this.id,
                id: t,
                err_idx: e,
              })
            );
          }),
          (h.PDFACompliance.getPDFAErrorMessage = function (t) {
            return (
              f(arguments.length, 1, 'getPDFAErrorMessage', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('pdfaComplianceGetPDFAErrorMessage', { id: t })
            );
          }),
          (h.PDFACompliance.getDeclaredConformance = function (t) {
            return (
              f(
                arguments.length,
                1,
                'getDeclaredConformance',
                '(PDFNet.PDFDoc)',
                [[t, 'PDFDoc']]
              ),
              h.sendWithPromise('pdfaComplianceGetDeclaredConformance', {
                doc: t.id,
              })
            );
          }),
          (h.PDFACompliance.prototype.saveAsFromBuffer = function (t) {
            return (
              void 0 === t && (t = !1),
              f(arguments.length, 0, 'saveAsFromBuffer', '(boolean)', [
                [t, 'boolean'],
              ]),
              h
                .sendWithPromise('PDFACompliance.saveAsFromBuffer', {
                  pdfac: this.id,
                  linearized: t,
                })
                .then(function (t) {
                  return new Uint8Array(t);
                })
            );
          }),
          (h.AttrObj.create = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'create', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('attrObjCreate', { dict: t.id })
                .then(function (t) {
                  return _(h.AttrObj, t);
                })
            );
          }),
          (h.AttrObj.prototype.copy = function () {
            return h
              .sendWithPromise('AttrObj.copy', { a: this.id })
              .then(function (t) {
                return _(h.AttrObj, t);
              });
          }),
          (h.AttrObj.prototype.getOwner = function () {
            return h.sendWithPromise('AttrObj.getOwner', { obj: this.id });
          }),
          (h.AttrObj.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('AttrObj.getSDFObj', { obj: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.ClassMap.create = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'create', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('classMapCreate', { dict: t.id })
                .then(function (t) {
                  return _(h.ClassMap, t);
                })
            );
          }),
          (h.ClassMap.prototype.copy = function () {
            return h
              .sendWithPromise('ClassMap.copy', { p: this.id })
              .then(function (t) {
                return _(h.ClassMap, t);
              });
          }),
          (h.ClassMap.prototype.isValid = function () {
            return h.sendWithPromise('ClassMap.isValid', { map: this.id });
          }),
          (h.ClassMap.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('ClassMap.getSDFObj', { map: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.ContentItem.prototype.copy = function () {
            return (
              P('copy', this.yieldFunction),
              h
                .sendWithPromise('ContentItem.copy', { c: this })
                .then(function (t) {
                  return new h.ContentItem(t);
                })
            );
          }),
          (h.ContentItem.prototype.getType = function () {
            return (
              P('getType', this.yieldFunction),
              h.sendWithPromise('ContentItem.getType', { item: this })
            );
          }),
          (h.ContentItem.prototype.getParent = function () {
            P('getParent', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'ContentItem.getParent'),
              h
                .sendWithPromise('ContentItem.getParent', { item: this })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = new h.SElement(t.result)),
                    W(t.item, e),
                    t.result
                  );
                })
            );
          }),
          (h.ContentItem.prototype.getPage = function () {
            P('getPage', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'ContentItem.getPage'),
              h
                .sendWithPromise('ContentItem.getPage', { item: this })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = _(h.Page, t.result)),
                    W(t.item, e),
                    t.result
                  );
                })
            );
          }),
          (h.ContentItem.prototype.getSDFObj = function () {
            return (
              P('getSDFObj', this.yieldFunction),
              h
                .sendWithPromise('ContentItem.getSDFObj', { item: this })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.ContentItem.prototype.getMCID = function () {
            return (
              P('getMCID', this.yieldFunction),
              h.sendWithPromise('ContentItem.getMCID', { item: this })
            );
          }),
          (h.ContentItem.prototype.getContainingStm = function () {
            return (
              P('getContainingStm', this.yieldFunction),
              h
                .sendWithPromise('ContentItem.getContainingStm', { item: this })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.ContentItem.prototype.getStmOwner = function () {
            return (
              P('getStmOwner', this.yieldFunction),
              h
                .sendWithPromise('ContentItem.getStmOwner', { item: this })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.ContentItem.prototype.getRefObj = function () {
            return (
              P('getRefObj', this.yieldFunction),
              h
                .sendWithPromise('ContentItem.getRefObj', { item: this })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.RoleMap.create = function (t) {
            return (
              f(arguments.length, 1, 'create', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('roleMapCreate', { dict: t.id })
                .then(function (t) {
                  return _(h.RoleMap, t);
                })
            );
          }),
          (h.RoleMap.prototype.copy = function () {
            return h
              .sendWithPromise('RoleMap.copy', { p: this.id })
              .then(function (t) {
                return _(h.RoleMap, t);
              });
          }),
          (h.RoleMap.prototype.isValid = function () {
            return h.sendWithPromise('RoleMap.isValid', { map: this.id });
          }),
          (h.RoleMap.prototype.getDirectMap = function (t) {
            return (
              f(arguments.length, 1, 'getDirectMap', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('RoleMap.getDirectMap', {
                map: this.id,
                type: t,
              })
            );
          }),
          (h.RoleMap.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('RoleMap.getSDFObj', { map: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.SElement.create = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'create', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('sElementCreate', { dict: t.id })
                .then(function (t) {
                  return new h.SElement(t);
                })
            );
          });
        (h.SElement.createFromPDFDoc = function (t, e) {
          return (
            f(
              arguments.length,
              2,
              'createFromPDFDoc',
              '(PDFNet.PDFDoc, string)',
              [
                [t, 'PDFDoc'],
                [e, 'string'],
              ]
            ),
            h
              .sendWithPromise('sElementCreateFromPDFDoc', {
                doc: t.id,
                struct_type: e,
              })
              .then(function (t) {
                return new h.SElement(t);
              })
          );
        }),
          (h.SElement.prototype.insert = function (e, t) {
            f(arguments.length, 2, 'insert', '(PDFNet.SElement, number)', [
              [e, 'Structure', h.SElement, 'SElement'],
              [t, 'number'],
            ]),
              P('insert', this.yieldFunction),
              F('insert', [[e, 0]]);
            var n = this;
            return (
              (this.yieldFunction = 'SElement.insert'),
              (e.yieldFunction = 'SElement.insert'),
              h
                .sendWithPromise('SElement.insert', {
                  e: this,
                  kid: e,
                  insert_before: t,
                })
                .then(function (t) {
                  (n.yieldFunction = void 0),
                    (e.yieldFunction = void 0),
                    W(t.e, n),
                    W(t.kid, e);
                })
            );
          }),
          (h.SElement.prototype.createContentItem = function (t, e, n) {
            void 0 === n && (n = -1),
              f(
                arguments.length,
                2,
                'createContentItem',
                '(PDFNet.PDFDoc, PDFNet.Page, number)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Object', h.Page, 'Page'],
                  [n, 'number'],
                ]
              ),
              P('createContentItem', this.yieldFunction);
            var i = this;
            return (
              (this.yieldFunction = 'SElement.createContentItem'),
              h
                .sendWithPromise('SElement.createContentItem', {
                  e: this,
                  doc: t.id,
                  page: e.id,
                  insert_before: n,
                })
                .then(function (t) {
                  return (i.yieldFunction = void 0), W(t.e, i), t.result;
                })
            );
          }),
          (h.SElement.prototype.isValid = function () {
            return (
              P('isValid', this.yieldFunction),
              h.sendWithPromise('SElement.isValid', { e: this })
            );
          }),
          (h.SElement.prototype.getType = function () {
            return (
              P('getType', this.yieldFunction),
              h.sendWithPromise('SElement.getType', { e: this })
            );
          }),
          (h.SElement.prototype.getNumKids = function () {
            return (
              P('getNumKids', this.yieldFunction),
              h.sendWithPromise('SElement.getNumKids', { e: this })
            );
          }),
          (h.SElement.prototype.isContentItem = function (t) {
            return (
              f(arguments.length, 1, 'isContentItem', '(number)', [
                [t, 'number'],
              ]),
              P('isContentItem', this.yieldFunction),
              h.sendWithPromise('SElement.isContentItem', { e: this, index: t })
            );
          }),
          (h.SElement.prototype.getAsContentItem = function (t) {
            return (
              f(arguments.length, 1, 'getAsContentItem', '(number)', [
                [t, 'number'],
              ]),
              P('getAsContentItem', this.yieldFunction),
              h
                .sendWithPromise('SElement.getAsContentItem', {
                  e: this,
                  index: t,
                })
                .then(function (t) {
                  return new h.ContentItem(t);
                })
            );
          }),
          (h.SElement.prototype.getAsStructElem = function (t) {
            return (
              f(arguments.length, 1, 'getAsStructElem', '(number)', [
                [t, 'number'],
              ]),
              P('getAsStructElem', this.yieldFunction),
              h
                .sendWithPromise('SElement.getAsStructElem', {
                  e: this,
                  index: t,
                })
                .then(function (t) {
                  return new h.SElement(t);
                })
            );
          }),
          (h.SElement.prototype.getParent = function () {
            return (
              P('getParent', this.yieldFunction),
              h
                .sendWithPromise('SElement.getParent', { e: this })
                .then(function (t) {
                  return new h.SElement(t);
                })
            );
          }),
          (h.SElement.prototype.getStructTreeRoot = function () {
            return (
              P('getStructTreeRoot', this.yieldFunction),
              h
                .sendWithPromise('SElement.getStructTreeRoot', { e: this })
                .then(function (t) {
                  return _(h.STree, t);
                })
            );
          }),
          (h.SElement.prototype.hasTitle = function () {
            return (
              P('hasTitle', this.yieldFunction),
              h.sendWithPromise('SElement.hasTitle', { e: this })
            );
          }),
          (h.SElement.prototype.getTitle = function () {
            return (
              P('getTitle', this.yieldFunction),
              h.sendWithPromise('SElement.getTitle', { e: this })
            );
          }),
          (h.SElement.prototype.getID = function () {
            return (
              P('getID', this.yieldFunction),
              h
                .sendWithPromise('SElement.getID', { e: this })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.SElement.prototype.hasActualText = function () {
            return (
              P('hasActualText', this.yieldFunction),
              h.sendWithPromise('SElement.hasActualText', { e: this })
            );
          }),
          (h.SElement.prototype.getActualText = function () {
            return (
              P('getActualText', this.yieldFunction),
              h.sendWithPromise('SElement.getActualText', { e: this })
            );
          }),
          (h.SElement.prototype.hasAlt = function () {
            return (
              P('hasAlt', this.yieldFunction),
              h.sendWithPromise('SElement.hasAlt', { e: this })
            );
          }),
          (h.SElement.prototype.getAlt = function () {
            return (
              P('getAlt', this.yieldFunction),
              h.sendWithPromise('SElement.getAlt', { e: this })
            );
          }),
          (h.SElement.prototype.getSDFObj = function () {
            return (
              P('getSDFObj', this.yieldFunction),
              h
                .sendWithPromise('SElement.getSDFObj', { e: this })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.STree.create = function (t) {
            return (
              f(arguments.length, 1, 'create', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('sTreeCreate', { struct_dict: t.id })
                .then(function (t) {
                  return _(h.STree, t);
                })
            );
          }),
          (h.STree.createFromPDFDoc = function (t) {
            return (
              f(arguments.length, 1, 'createFromPDFDoc', '(PDFNet.PDFDoc)', [
                [t, 'PDFDoc'],
              ]),
              h
                .sendWithPromise('sTreeCreateFromPDFDoc', { doc: t.id })
                .then(function (t) {
                  return _(h.STree, t);
                })
            );
          }),
          (h.STree.prototype.insert = function (e, t) {
            return (
              f(arguments.length, 2, 'insert', '(PDFNet.SElement, number)', [
                [e, 'Structure', h.SElement, 'SElement'],
                [t, 'number'],
              ]),
              F('insert', [[e, 0]]),
              (e.yieldFunction = 'STree.insert'),
              h
                .sendWithPromise('STree.insert', {
                  tree: this.id,
                  kid: e,
                  insert_before: t,
                })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.STree.prototype.copy = function () {
            return h
              .sendWithPromise('STree.copy', { c: this.id })
              .then(function (t) {
                return _(h.STree, t);
              });
          }),
          (h.STree.prototype.isValid = function () {
            return h.sendWithPromise('STree.isValid', { tree: this.id });
          }),
          (h.STree.prototype.getNumKids = function () {
            return h.sendWithPromise('STree.getNumKids', { tree: this.id });
          }),
          (h.STree.prototype.getKid = function (t) {
            return (
              f(arguments.length, 1, 'getKid', '(number)', [[t, 'number']]),
              h
                .sendWithPromise('STree.getKid', { tree: this.id, index: t })
                .then(function (t) {
                  return new h.SElement(t);
                })
            );
          }),
          (h.STree.prototype.getRoleMap = function () {
            return h
              .sendWithPromise('STree.getRoleMap', { tree: this.id })
              .then(function (t) {
                return _(h.RoleMap, t);
              });
          }),
          (h.STree.prototype.getClassMap = function () {
            return h
              .sendWithPromise('STree.getClassMap', { tree: this.id })
              .then(function (t) {
                return _(h.ClassMap, t);
              });
          }),
          (h.STree.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('STree.getSDFObj', { tree: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Action.createGoto = function (t) {
            return (
              f(arguments.length, 1, 'createGoto', '(PDFNet.Destination)', [
                [t, 'Object', h.Destination, 'Destination'],
              ]),
              h
                .sendWithPromise('actionCreateGoto', { dest: t.id })
                .then(function (t) {
                  return _(h.Action, t);
                })
            );
          }),
          (h.Action.createGotoWithKey = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createGotoWithKey',
                '(string, PDFNet.Destination)',
                [
                  [t, 'string'],
                  [e, 'Object', h.Destination, 'Destination'],
                ]
              ),
              h
                .sendWithPromise('actionCreateGotoWithKey', {
                  key: t,
                  dest: e.id,
                })
                .then(function (t) {
                  return _(h.Action, t);
                })
            );
          }),
          (h.Action.createGotoRemote = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createGotoRemote',
                '(PDFNet.FileSpec, number)',
                [
                  [t, 'Object', h.FileSpec, 'FileSpec'],
                  [e, 'number'],
                ]
              ),
              h
                .sendWithPromise('actionCreateGotoRemote', {
                  file: t.id,
                  page_num: e,
                })
                .then(function (t) {
                  return _(h.Action, t);
                })
            );
          }),
          (h.Action.createGotoRemoteSetNewWindow = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'createGotoRemoteSetNewWindow',
                '(PDFNet.FileSpec, number, boolean)',
                [
                  [t, 'Object', h.FileSpec, 'FileSpec'],
                  [e, 'number'],
                  [n, 'boolean'],
                ]
              ),
              h
                .sendWithPromise('actionCreateGotoRemoteSetNewWindow', {
                  file: t.id,
                  page_num: e,
                  new_window: n,
                })
                .then(function (t) {
                  return _(h.Action, t);
                })
            );
          }),
          (h.Action.createURI = function (t, e) {
            return (
              f(arguments.length, 2, 'createURI', '(PDFNet.SDFDoc, string)', [
                [t, 'SDFDoc'],
                [e, 'string'],
              ]),
              h
                .sendWithPromise('actionCreateURI', { sdfdoc: t.id, uri: e })
                .then(function (t) {
                  return _(h.Action, t);
                })
            );
          }),
          (h.Action.createURIWithUString = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createURIWithUString',
                '(PDFNet.SDFDoc, string)',
                [
                  [t, 'SDFDoc'],
                  [e, 'string'],
                ]
              ),
              h
                .sendWithPromise('actionCreateURIWithUString', {
                  sdfdoc: t.id,
                  uri: e,
                })
                .then(function (t) {
                  return _(h.Action, t);
                })
            );
          }),
          (h.Action.createSubmitForm = function (t) {
            return (
              f(arguments.length, 1, 'createSubmitForm', '(PDFNet.FileSpec)', [
                [t, 'Object', h.FileSpec, 'FileSpec'],
              ]),
              h
                .sendWithPromise('actionCreateSubmitForm', { url: t.id })
                .then(function (t) {
                  return _(h.Action, t);
                })
            );
          }),
          (h.Action.createLaunch = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createLaunch',
                '(PDFNet.SDFDoc, string)',
                [
                  [t, 'SDFDoc'],
                  [e, 'string'],
                ]
              ),
              h
                .sendWithPromise('actionCreateLaunch', {
                  sdfdoc: t.id,
                  path: e,
                })
                .then(function (t) {
                  return _(h.Action, t);
                })
            );
          }),
          (h.Action.createHideField = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createHideField',
                '(PDFNet.SDFDoc, Array<string>)',
                [
                  [t, 'SDFDoc'],
                  [e, 'Array'],
                ]
              ),
              h
                .sendWithPromise('actionCreateHideField', {
                  sdfdoc: t.id,
                  field_names_list: e,
                })
                .then(function (t) {
                  return _(h.Action, t);
                })
            );
          }),
          (h.Action.createImportData = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createImportData',
                '(PDFNet.SDFDoc, string)',
                [
                  [t, 'SDFDoc'],
                  [e, 'string'],
                ]
              ),
              h
                .sendWithPromise('actionCreateImportData', {
                  sdfdoc: t.id,
                  path: e,
                })
                .then(function (t) {
                  return _(h.Action, t);
                })
            );
          }),
          (h.Action.createResetForm = function (t) {
            return (
              f(arguments.length, 1, 'createResetForm', '(PDFNet.SDFDoc)', [
                [t, 'SDFDoc'],
              ]),
              h
                .sendWithPromise('actionCreateResetForm', { sdfdoc: t.id })
                .then(function (t) {
                  return _(h.Action, t);
                })
            );
          }),
          (h.Action.createJavaScript = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createJavaScript',
                '(PDFNet.SDFDoc, string)',
                [
                  [t, 'SDFDoc'],
                  [e, 'string'],
                ]
              ),
              h
                .sendWithPromise('actionCreateJavaScript', {
                  sdfdoc: t.id,
                  script: e,
                })
                .then(function (t) {
                  return _(h.Action, t);
                })
            );
          }),
          (h.Action.create = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'create', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('actionCreate', { in_obj: t.id })
                .then(function (t) {
                  return _(h.Action, t);
                })
            );
          }),
          (h.Action.prototype.copy = function () {
            return h
              .sendWithPromise('Action.copy', { in_action: this.id })
              .then(function (t) {
                return _(h.Action, t);
              });
          }),
          (h.Action.prototype.compare = function (t) {
            return (
              f(arguments.length, 1, 'compare', '(PDFNet.Action)', [
                [t, 'Object', h.Action, 'Action'],
              ]),
              h.sendWithPromise('Action.compare', {
                action: this.id,
                in_action: t.id,
              })
            );
          }),
          (h.Action.prototype.isValid = function () {
            return h.sendWithPromise('Action.isValid', { action: this.id });
          }),
          (h.Action.prototype.getXFDF = function () {
            return h.sendWithPromise('Action.getXFDF', { action: this.id });
          }),
          (h.Action.prototype.getType = function () {
            return h.sendWithPromise('Action.getType', { action: this.id });
          }),
          (h.Action.prototype.getDest = function () {
            return h
              .sendWithPromise('Action.getDest', { action: this.id })
              .then(function (t) {
                return _(h.Destination, t);
              });
          }),
          (h.Action.prototype.getNext = function () {
            return h
              .sendWithPromise('Action.getNext', { action: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Action.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('Action.getSDFObj', { action: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Action.prototype.getFormActionFlag = function (t) {
            return (
              f(arguments.length, 1, 'getFormActionFlag', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Action.getFormActionFlag', {
                action: this.id,
                flag: t,
              })
            );
          }),
          (h.Action.prototype.setFormActionFlag = function (t, e) {
            return (
              f(arguments.length, 2, 'setFormActionFlag', '(number, boolean)', [
                [t, 'number'],
                [e, 'boolean'],
              ]),
              h.sendWithPromise('Action.setFormActionFlag', {
                action: this.id,
                flag: t,
                value: e,
              })
            );
          }),
          (h.Action.prototype.needsWriteLock = function () {
            return h.sendWithPromise('Action.needsWriteLock', {
              action: this.id,
            });
          }),
          (h.Action.prototype.execute = function () {
            return h.sendWithPromise('Action.execute', { action: this.id });
          }),
          (h.Action.prototype.executeKeyStrokeAction = function (t) {
            return (
              f(
                arguments.length,
                1,
                'executeKeyStrokeAction',
                '(PDFNet.KeyStrokeEventData)',
                [[t, 'Object', h.KeyStrokeEventData, 'KeyStrokeEventData']]
              ),
              h
                .sendWithPromise('Action.executeKeyStrokeAction', {
                  action: this.id,
                  data: t.id,
                })
                .then(function (t) {
                  return D(h.KeyStrokeActionResult, t);
                })
            );
          }),
          (h.KeyStrokeActionResult.prototype.isValid = function () {
            return h.sendWithPromise('KeyStrokeActionResult.isValid', {
              action_ret: this.id,
            });
          }),
          (h.KeyStrokeActionResult.prototype.getText = function () {
            return h.sendWithPromise('KeyStrokeActionResult.getText', {
              action_ret: this.id,
            });
          }),
          (h.KeyStrokeActionResult.prototype.copy = function () {
            return h
              .sendWithPromise('KeyStrokeActionResult.copy', {
                action_ret: this.id,
              })
              .then(function (t) {
                return D(h.KeyStrokeActionResult, t);
              });
          }),
          (h.KeyStrokeEventData.create = function (t, e, n, i, r) {
            return (
              f(
                arguments.length,
                5,
                'create',
                '(string, string, string, number, number)',
                [
                  [t, 'string'],
                  [e, 'string'],
                  [n, 'string'],
                  [i, 'number'],
                  [r, 'number'],
                ]
              ),
              h
                .sendWithPromise('keyStrokeEventDataCreate', {
                  field_name: t,
                  current: e,
                  change: n,
                  selection_start: i,
                  selection_end: r,
                })
                .then(function (t) {
                  return D(h.KeyStrokeEventData, t);
                })
            );
          }),
          (h.KeyStrokeEventData.prototype.copy = function () {
            return h
              .sendWithPromise('KeyStrokeEventData.copy', { data: this.id })
              .then(function (t) {
                return D(h.KeyStrokeEventData, t);
              });
          }),
          (h.Page.create = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'create', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('pageCreate', { page_dict: t.id })
                .then(function (t) {
                  return _(h.Page, t);
                })
            );
          }),
          (h.Page.prototype.copy = function () {
            return h
              .sendWithPromise('Page.copy', { p: this.id })
              .then(function (t) {
                return _(h.Page, t);
              });
          }),
          (h.Page.prototype.isValid = function () {
            return h.sendWithPromise('Page.isValid', { page: this.id });
          }),
          (h.Page.prototype.getIndex = function () {
            return h.sendWithPromise('Page.getIndex', { page: this.id });
          }),
          (h.Page.prototype.getTriggerAction = function (t) {
            return (
              f(arguments.length, 1, 'getTriggerAction', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('Page.getTriggerAction', {
                  page: this.id,
                  trigger: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Page.prototype.getBox = function (t) {
            return (
              f(arguments.length, 1, 'getBox', '(number)', [[t, 'number']]),
              h
                .sendWithPromise('Page.getBox', { page: this.id, type: t })
                .then(function (t) {
                  return new h.Rect(t);
                })
            );
          }),
          (h.Page.prototype.setBox = function (t, e) {
            return (
              f(arguments.length, 2, 'setBox', '(number, PDFNet.Rect)', [
                [t, 'number'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('setBox', [[e, 1]]),
              h.sendWithPromise('Page.setBox', {
                page: this.id,
                type: t,
                box: e,
              })
            );
          }),
          (h.Page.prototype.getCropBox = function () {
            return h
              .sendWithPromise('Page.getCropBox', { page: this.id })
              .then(function (t) {
                return new h.Rect(t);
              });
          }),
          (h.Page.prototype.setCropBox = function (t) {
            return (
              f(arguments.length, 1, 'setCropBox', '(PDFNet.Rect)', [
                [t, 'Structure', h.Rect, 'Rect'],
              ]),
              F('setCropBox', [[t, 0]]),
              h.sendWithPromise('Page.setCropBox', { page: this.id, box: t })
            );
          }),
          (h.Page.prototype.getMediaBox = function () {
            return h
              .sendWithPromise('Page.getMediaBox', { page: this.id })
              .then(function (t) {
                return new h.Rect(t);
              });
          }),
          (h.Page.prototype.setMediaBox = function (t) {
            return (
              f(arguments.length, 1, 'setMediaBox', '(PDFNet.Rect)', [
                [t, 'Structure', h.Rect, 'Rect'],
              ]),
              F('setMediaBox', [[t, 0]]),
              h.sendWithPromise('Page.setMediaBox', { page: this.id, box: t })
            );
          }),
          (h.Page.prototype.getVisibleContentBox = function () {
            return h
              .sendWithPromise('Page.getVisibleContentBox', { page: this.id })
              .then(function (t) {
                return new h.Rect(t);
              });
          }),
          (h.Page.prototype.getRotation = function () {
            return h.sendWithPromise('Page.getRotation', { page: this.id });
          }),
          (h.Page.prototype.setRotation = function (t) {
            return (
              f(arguments.length, 1, 'setRotation', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Page.setRotation', { page: this.id, angle: t })
            );
          }),
          (h.Page.addRotations = function (t, e) {
            return (
              f(arguments.length, 2, 'addRotations', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h.sendWithPromise('pageAddRotations', { r0: t, r1: e })
            );
          }),
          (h.Page.subtractRotations = function (t, e) {
            return (
              f(arguments.length, 2, 'subtractRotations', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h.sendWithPromise('pageSubtractRotations', { r0: t, r1: e })
            );
          }),
          (h.Page.rotationToDegree = function (t) {
            return (
              f(arguments.length, 1, 'rotationToDegree', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('pageRotationToDegree', { r: t })
            );
          }),
          (h.Page.degreeToRotation = function (t) {
            return (
              f(arguments.length, 1, 'degreeToRotation', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('pageDegreeToRotation', { r: t })
            );
          }),
          (h.Page.prototype.getPageWidth = function (t) {
            return (
              void 0 === t && (t = h.Page.Box.e_crop),
              f(arguments.length, 0, 'getPageWidth', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Page.getPageWidth', {
                page: this.id,
                box_type: t,
              })
            );
          }),
          (h.Page.prototype.getPageHeight = function (t) {
            return (
              void 0 === t && (t = h.Page.Box.e_crop),
              f(arguments.length, 0, 'getPageHeight', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Page.getPageHeight', {
                page: this.id,
                box_type: t,
              })
            );
          }),
          (h.Page.prototype.getDefaultMatrix = function (t, e, n) {
            return (
              void 0 === t && (t = !1),
              void 0 === e && (e = h.Page.Box.e_crop),
              void 0 === n && (n = h.Page.Rotate.e_0),
              f(
                arguments.length,
                0,
                'getDefaultMatrix',
                '(boolean, number, number)',
                [
                  [t, 'boolean'],
                  [e, 'number'],
                  [n, 'number'],
                ]
              ),
              h
                .sendWithPromise('Page.getDefaultMatrix', {
                  page: this.id,
                  flip_y: t,
                  box_type: e,
                  angle: n,
                })
                .then(function (t) {
                  return new h.Matrix2D(t);
                })
            );
          }),
          (h.Page.prototype.getAnnots = function () {
            return h
              .sendWithPromise('Page.getAnnots', { page: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Page.prototype.getNumAnnots = function () {
            return h.sendWithPromise('Page.getNumAnnots', { page: this.id });
          }),
          (h.Page.prototype.getAnnot = function (t) {
            return (
              f(arguments.length, 1, 'getAnnot', '(number)', [[t, 'number']]),
              h
                .sendWithPromise('Page.getAnnot', { page: this.id, index: t })
                .then(function (t) {
                  return _(h.Annot, t);
                })
            );
          }),
          (h.Page.prototype.annotInsert = function (t, e) {
            return (
              f(arguments.length, 2, 'annotInsert', '(number, PDFNet.Annot)', [
                [t, 'number'],
                [e, 'Object', h.Annot, 'Annot'],
              ]),
              h.sendWithPromise('Page.annotInsert', {
                page: this.id,
                pos: t,
                annot: e.id,
              })
            );
          }),
          (h.Page.prototype.annotPushBack = function (t) {
            return (
              f(arguments.length, 1, 'annotPushBack', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h.sendWithPromise('Page.annotPushBack', {
                page: this.id,
                annot: t.id,
              })
            );
          }),
          (h.Page.prototype.annotPushFront = function (t) {
            return (
              f(arguments.length, 1, 'annotPushFront', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h.sendWithPromise('Page.annotPushFront', {
                page: this.id,
                annot: t.id,
              })
            );
          }),
          (h.Page.prototype.annotRemove = function (t) {
            return (
              f(arguments.length, 1, 'annotRemove', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h.sendWithPromise('Page.annotRemove', {
                page: this.id,
                annot: t.id,
              })
            );
          }),
          (h.Page.prototype.annotRemoveByIndex = function (t) {
            return (
              f(arguments.length, 1, 'annotRemoveByIndex', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Page.annotRemoveByIndex', {
                page: this.id,
                index: t,
              })
            );
          }),
          (h.Page.prototype.scale = function (t) {
            return (
              f(arguments.length, 1, 'scale', '(number)', [[t, 'number']]),
              h.sendWithPromise('Page.scale', { page: this.id, scale: t })
            );
          }),
          (h.Page.prototype.flattenField = function (e) {
            return (
              f(arguments.length, 1, 'flattenField', '(PDFNet.Field)', [
                [e, 'Structure', h.Field, 'Field'],
              ]),
              F('flattenField', [[e, 0]]),
              (e.yieldFunction = 'Page.flattenField'),
              h
                .sendWithPromise('Page.flattenField', {
                  page: this.id,
                  field_to_flatten: e,
                })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.Page.prototype.hasTransition = function () {
            return h.sendWithPromise('Page.hasTransition', { page: this.id });
          }),
          (h.Page.prototype.getUserUnitSize = function () {
            return h.sendWithPromise('Page.getUserUnitSize', { page: this.id });
          }),
          (h.Page.prototype.setUserUnitSize = function (t) {
            return (
              f(arguments.length, 1, 'setUserUnitSize', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Page.setUserUnitSize', {
                page: this.id,
                unit_size: t,
              })
            );
          }),
          (h.Page.prototype.getResourceDict = function () {
            return h
              .sendWithPromise('Page.getResourceDict', { page: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Page.prototype.getContents = function () {
            return h
              .sendWithPromise('Page.getContents', { page: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Page.prototype.getThumb = function () {
            return h
              .sendWithPromise('Page.getThumb', { page: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Page.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('Page.getSDFObj', { page: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Page.prototype.findInheritedAttribute = function (t) {
            return (
              f(arguments.length, 1, 'findInheritedAttribute', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('Page.findInheritedAttribute', {
                  page: this.id,
                  attrib: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Annot.create = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'create',
                '(PDFNet.SDFDoc, number, PDFNet.Rect)',
                [
                  [t, 'SDFDoc'],
                  [e, 'number'],
                  [n, 'Structure', h.Rect, 'Rect'],
                ]
              ),
              F('create', [[n, 2]]),
              h
                .sendWithPromise('annotCreate', { doc: t.id, type: e, pos: n })
                .then(function (t) {
                  return _(h.Annot, t);
                })
            );
          }),
          (h.Annot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('annotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.Annot, t);
                })
            );
          }),
          (h.Annot.prototype.copy = function () {
            return h
              .sendWithPromise('Annot.copy', { d: this.id })
              .then(function (t) {
                return _(h.Annot, t);
              });
          }),
          (h.Annot.prototype.compare = function (t) {
            return (
              f(arguments.length, 1, 'compare', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h.sendWithPromise('Annot.compare', { annot: this.id, d: t.id })
            );
          }),
          (h.Annot.prototype.isValid = function () {
            return h.sendWithPromise('Annot.isValid', { annot: this.id });
          }),
          (h.Annot.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('Annot.getSDFObj', { annot: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Annot.prototype.getType = function () {
            return h.sendWithPromise('Annot.getType', { annot: this.id });
          }),
          (h.Annot.prototype.isMarkup = function () {
            return h.sendWithPromise('Annot.isMarkup', { annot: this.id });
          }),
          (h.Annot.prototype.getRect = function () {
            return h
              .sendWithPromise('Annot.getRect', { annot: this.id })
              .then(function (t) {
                return new h.Rect(t);
              });
          }),
          (h.Annot.prototype.getVisibleContentBox = function () {
            return h
              .sendWithPromise('Annot.getVisibleContentBox', { annot: this.id })
              .then(function (t) {
                return new h.Rect(t);
              });
          }),
          (h.Annot.prototype.setRect = function (t) {
            return (
              f(arguments.length, 1, 'setRect', '(PDFNet.Rect)', [
                [t, 'Structure', h.Rect, 'Rect'],
              ]),
              F('setRect', [[t, 0]]),
              h.sendWithPromise('Annot.setRect', { annot: this.id, pos: t })
            );
          }),
          (h.Annot.prototype.resize = function (t) {
            return (
              f(arguments.length, 1, 'resize', '(PDFNet.Rect)', [
                [t, 'Structure', h.Rect, 'Rect'],
              ]),
              F('resize', [[t, 0]]),
              h.sendWithPromise('Annot.resize', { annot: this.id, newrect: t })
            );
          }),
          (h.Annot.prototype.setContents = function (t) {
            return (
              f(arguments.length, 1, 'setContents', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('Annot.setContents', {
                annot: this.id,
                contents: t,
              })
            );
          }),
          (h.Annot.prototype.getContents = function () {
            return h.sendWithPromise('Annot.getContents', { annot: this.id });
          }),
          (h.Annot.prototype.getTriggerAction = function (t) {
            return (
              f(arguments.length, 1, 'getTriggerAction', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('Annot.getTriggerAction', {
                  annot: this.id,
                  trigger: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Annot.prototype.getCustomData = function (t) {
            return (
              f(arguments.length, 1, 'getCustomData', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('Annot.getCustomData', {
                annot: this.id,
                key: t,
              })
            );
          }),
          (h.Annot.prototype.setCustomData = function (t, e) {
            return (
              f(arguments.length, 2, 'setCustomData', '(string, string)', [
                [t, 'string'],
                [e, 'string'],
              ]),
              h.sendWithPromise('Annot.setCustomData', {
                annot: this.id,
                key: t,
                value: e,
              })
            );
          }),
          (h.Annot.prototype.deleteCustomData = function (t) {
            return (
              f(arguments.length, 1, 'deleteCustomData', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('Annot.deleteCustomData', {
                annot: this.id,
                key: t,
              })
            );
          }),
          (h.Annot.prototype.getPage = function () {
            return h
              .sendWithPromise('Annot.getPage', { annot: this.id })
              .then(function (t) {
                return _(h.Page, t);
              });
          }),
          (h.Annot.prototype.setPage = function (t) {
            return (
              f(arguments.length, 1, 'setPage', '(PDFNet.Page)', [
                [t, 'Object', h.Page, 'Page'],
              ]),
              h.sendWithPromise('Annot.setPage', { annot: this.id, page: t.id })
            );
          }),
          (h.Annot.prototype.getUniqueID = function () {
            return h
              .sendWithPromise('Annot.getUniqueID', { annot: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Annot.prototype.setUniqueID = function (t) {
            f(arguments.length, 1, 'setUniqueID', '(ArrayBuffer|TypedArray)', [
              [t, 'ArrayBuffer'],
            ]);
            var e = b(t, !1);
            return h.sendWithPromise('Annot.setUniqueID', {
              annot: this.id,
              id_buf: e,
            });
          }),
          (h.Annot.prototype.getDate = function () {
            return h
              .sendWithPromise('Annot.getDate', { annot: this.id })
              .then(function (t) {
                return new h.Date(t);
              });
          }),
          (h.Annot.prototype.setDate = function (t) {
            return (
              f(arguments.length, 1, 'setDate', '(PDFNet.Date)', [
                [t, 'Structure', h.Date, 'Date'],
              ]),
              F('setDate', [[t, 0]]),
              h.sendWithPromise('Annot.setDate', { annot: this.id, date: t })
            );
          }),
          (h.Annot.prototype.getFlag = function (t) {
            return (
              f(arguments.length, 1, 'getFlag', '(number)', [[t, 'number']]),
              h.sendWithPromise('Annot.getFlag', { annot: this.id, flag: t })
            );
          }),
          (h.Annot.prototype.setFlag = function (t, e) {
            return (
              f(arguments.length, 2, 'setFlag', '(number, boolean)', [
                [t, 'number'],
                [e, 'boolean'],
              ]),
              h.sendWithPromise('Annot.setFlag', {
                annot: this.id,
                flag: t,
                value: e,
              })
            );
          }),
          (h.AnnotBorderStyle.create = function (t, e, n, i) {
            return (
              void 0 === n && (n = 0),
              void 0 === i && (i = 0),
              f(
                arguments.length,
                2,
                'create',
                '(number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                ]
              ),
              h
                .sendWithPromise('annotBorderStyleCreate', {
                  s: t,
                  b_width: e,
                  b_hr: n,
                  b_vr: i,
                })
                .then(function (t) {
                  return D(h.AnnotBorderStyle, t);
                })
            );
          }),
          (h.AnnotBorderStyle.createWithDashPattern = function (t, e, n, i, r) {
            return (
              f(
                arguments.length,
                5,
                'createWithDashPattern',
                '(number, number, number, number, Array<number>)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'Array'],
                ]
              ),
              h
                .sendWithPromise('annotBorderStyleCreateWithDashPattern', {
                  s: t,
                  b_width: e,
                  b_hr: n,
                  b_vr: i,
                  b_dash_list: r,
                })
                .then(function (t) {
                  return D(h.AnnotBorderStyle, t);
                })
            );
          }),
          (h.AnnotBorderStyle.prototype.copy = function () {
            return h
              .sendWithPromise('AnnotBorderStyle.copy', { bs: this.id })
              .then(function (t) {
                return D(h.AnnotBorderStyle, t);
              });
          }),
          (h.AnnotBorderStyle.prototype.getStyle = function () {
            return h.sendWithPromise('AnnotBorderStyle.getStyle', {
              bs: this.id,
            });
          }),
          (h.AnnotBorderStyle.prototype.setStyle = function (t) {
            return (
              f(arguments.length, 1, 'setStyle', '(number)', [[t, 'number']]),
              h.sendWithPromise('AnnotBorderStyle.setStyle', {
                bs: this.id,
                style: t,
              })
            );
          }),
          (h.Annot.prototype.getAppearance = function (t, e) {
            return (
              void 0 === t && (t = h.Annot.State.e_normal),
              void 0 === e && (e = null),
              f(arguments.length, 0, 'getAppearance', '(number, string)', [
                [t, 'number'],
                [e, 'const char* = 0'],
              ]),
              h
                .sendWithPromise('Annot.getAppearance', {
                  annot: this.id,
                  annot_state: t,
                  app_state: e,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Annot.prototype.setAppearance = function (t, e, n) {
            return (
              void 0 === e && (e = h.Annot.State.e_normal),
              void 0 === n && (n = null),
              f(
                arguments.length,
                1,
                'setAppearance',
                '(PDFNet.Obj, number, string)',
                [
                  [t, 'Object', h.Obj, 'Obj'],
                  [e, 'number'],
                  [n, 'const char* = 0'],
                ]
              ),
              h.sendWithPromise('Annot.setAppearance', {
                annot: this.id,
                app_stream: t.id,
                annot_state: e,
                app_state: n,
              })
            );
          }),
          (h.Annot.prototype.removeAppearance = function (t, e) {
            return (
              void 0 === t && (t = h.Annot.State.e_normal),
              void 0 === e && (e = null),
              f(arguments.length, 0, 'removeAppearance', '(number, string)', [
                [t, 'number'],
                [e, 'const char* = 0'],
              ]),
              h.sendWithPromise('Annot.removeAppearance', {
                annot: this.id,
                annot_state: t,
                app_state: e,
              })
            );
          }),
          (h.Annot.prototype.flatten = function (t) {
            return (
              f(arguments.length, 1, 'flatten', '(PDFNet.Page)', [
                [t, 'Object', h.Page, 'Page'],
              ]),
              h.sendWithPromise('Annot.flatten', { annot: this.id, page: t.id })
            );
          }),
          (h.Annot.prototype.getActiveAppearanceState = function () {
            return h.sendWithPromise('Annot.getActiveAppearanceState', {
              annot: this.id,
            });
          }),
          (h.Annot.prototype.setActiveAppearanceState = function (t) {
            return (
              f(arguments.length, 1, 'setActiveAppearanceState', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('Annot.setActiveAppearanceState', {
                annot: this.id,
                astate: t,
              })
            );
          }),
          (h.Annot.prototype.getColor = function () {
            return h
              .sendWithPromise('Annot.getColor', { annot: this.id })
              .then(function (t) {
                return D(h.ColorPt, t);
              });
          }),
          (h.Annot.prototype.getColorAsRGB = function () {
            return h
              .sendWithPromise('Annot.getColorAsRGB', { annot: this.id })
              .then(function (t) {
                return D(h.ColorPt, t);
              });
          }),
          (h.Annot.prototype.getColorAsCMYK = function () {
            return h
              .sendWithPromise('Annot.getColorAsCMYK', { annot: this.id })
              .then(function (t) {
                return D(h.ColorPt, t);
              });
          }),
          (h.Annot.prototype.getColorAsGray = function () {
            return h
              .sendWithPromise('Annot.getColorAsGray', { annot: this.id })
              .then(function (t) {
                return D(h.ColorPt, t);
              });
          }),
          (h.Annot.prototype.getColorCompNum = function () {
            return h.sendWithPromise('Annot.getColorCompNum', {
              annot: this.id,
            });
          }),
          (h.Annot.prototype.setColorDefault = function (t) {
            return (
              f(arguments.length, 1, 'setColorDefault', '(PDFNet.ColorPt)', [
                [t, 'Object', h.ColorPt, 'ColorPt'],
              ]),
              h.sendWithPromise('Annot.setColorDefault', {
                annot: this.id,
                col: t.id,
              })
            );
          }),
          (h.Annot.prototype.setColor = function (t, e) {
            return (
              void 0 === e && (e = 3),
              f(arguments.length, 1, 'setColor', '(PDFNet.ColorPt, number)', [
                [t, 'Object', h.ColorPt, 'ColorPt'],
                [e, 'number'],
              ]),
              h.sendWithPromise('Annot.setColor', {
                annot: this.id,
                col: t.id,
                numcomp: e,
              })
            );
          }),
          (h.Annot.prototype.getStructParent = function () {
            return h.sendWithPromise('Annot.getStructParent', {
              annot: this.id,
            });
          }),
          (h.Annot.prototype.setStructParent = function (t) {
            return (
              f(arguments.length, 1, 'setStructParent', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Annot.setStructParent', {
                annot: this.id,
                parkeyval: t,
              })
            );
          }),
          (h.Annot.prototype.getOptionalContent = function () {
            return h
              .sendWithPromise('Annot.getOptionalContent', { annot: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Annot.prototype.setOptionalContent = function (t) {
            return (
              f(arguments.length, 1, 'setOptionalContent', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('Annot.setOptionalContent', {
                annot: this.id,
                content: t.id,
              })
            );
          }),
          (h.Annot.prototype.refreshAppearance = function () {
            return h.sendWithPromise('Annot.refreshAppearance', {
              annot: this.id,
            });
          }),
          (h.Annot.prototype.refreshAppearanceRefreshOptions = function (t) {
            return (
              void 0 === t && (t = null),
              f(
                arguments.length,
                0,
                'refreshAppearanceRefreshOptions',
                '(PDFNet.OptionBase)',
                [[t, 'OptionBase']]
              ),
              F('refreshAppearanceRefreshOptions', [[t, 0]]),
              (t = t ? t.getJsonString() : '{}'),
              h.sendWithPromise('Annot.refreshAppearanceRefreshOptions', {
                annot: this.id,
                options: t,
              })
            );
          }),
          (h.Annot.prototype.getRotation = function () {
            return h.sendWithPromise('Annot.getRotation', { annot: this.id });
          }),
          (h.Annot.prototype.setRotation = function (t) {
            return (
              f(arguments.length, 1, 'setRotation', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Annot.setRotation', {
                annot: this.id,
                angle: t,
              })
            );
          }),
          (h.AnnotBorderStyle.prototype.getWidth = function () {
            return h.sendWithPromise('AnnotBorderStyle.getWidth', {
              bs: this.id,
            });
          }),
          (h.AnnotBorderStyle.prototype.setWidth = function (t) {
            return (
              f(arguments.length, 1, 'setWidth', '(number)', [[t, 'number']]),
              h.sendWithPromise('AnnotBorderStyle.setWidth', {
                bs: this.id,
                width: t,
              })
            );
          }),
          (h.AnnotBorderStyle.prototype.getHR = function () {
            return h.sendWithPromise('AnnotBorderStyle.getHR', { bs: this.id });
          }),
          (h.AnnotBorderStyle.prototype.setHR = function (t) {
            return (
              f(arguments.length, 1, 'setHR', '(number)', [[t, 'number']]),
              h.sendWithPromise('AnnotBorderStyle.setHR', {
                bs: this.id,
                horizontal_radius: t,
              })
            );
          }),
          (h.AnnotBorderStyle.prototype.getVR = function () {
            return h.sendWithPromise('AnnotBorderStyle.getVR', { bs: this.id });
          }),
          (h.AnnotBorderStyle.prototype.setVR = function (t) {
            return (
              f(arguments.length, 1, 'setVR', '(number)', [[t, 'number']]),
              h.sendWithPromise('AnnotBorderStyle.setVR', {
                bs: this.id,
                vertical_radius: t,
              })
            );
          }),
          (h.AnnotBorderStyle.prototype.getDashPattern = function () {
            return h
              .sendWithPromise('AnnotBorderStyle.getDashPattern', {
                bs: this.id,
              })
              .then(function (t) {
                return new Float64Array(t);
              });
          }),
          (h.Annot.prototype.getBorderStyle = function () {
            return h
              .sendWithPromise('Annot.getBorderStyle', { annot: this.id })
              .then(function (t) {
                return D(h.AnnotBorderStyle, t);
              });
          }),
          (h.Annot.prototype.setBorderStyle = function (t, e) {
            return (
              void 0 === e && (e = !1),
              f(
                arguments.length,
                1,
                'setBorderStyle',
                '(PDFNet.AnnotBorderStyle, boolean)',
                [
                  [t, 'Object', h.AnnotBorderStyle, 'AnnotBorderStyle'],
                  [e, 'boolean'],
                ]
              ),
              h.sendWithPromise('Annot.setBorderStyle', {
                annot: this.id,
                bs: t.id,
                oldStyleOnly: e,
              })
            );
          }),
          (h.Annot.getBorderStyleStyle = function (t) {
            return (
              f(
                arguments.length,
                1,
                'getBorderStyleStyle',
                '(PDFNet.AnnotBorderStyle)',
                [[t, 'Object', h.AnnotBorderStyle, 'AnnotBorderStyle']]
              ),
              h.sendWithPromise('annotGetBorderStyleStyle', { bs: t.id })
            );
          }),
          (h.Annot.setBorderStyleStyle = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setBorderStyleStyle',
                '(PDFNet.AnnotBorderStyle, number)',
                [
                  [t, 'Object', h.AnnotBorderStyle, 'AnnotBorderStyle'],
                  [e, 'number'],
                ]
              ),
              h.sendWithPromise('annotSetBorderStyleStyle', {
                bs: t.id,
                bst: e,
              })
            );
          }),
          (h.AnnotBorderStyle.prototype.compare = function (t) {
            return (
              f(arguments.length, 1, 'compare', '(PDFNet.AnnotBorderStyle)', [
                [t, 'Object', h.AnnotBorderStyle, 'AnnotBorderStyle'],
              ]),
              h.sendWithPromise('AnnotBorderStyle.compare', {
                a: this.id,
                b: t.id,
              })
            );
          }),
          (h.CaretAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('caretAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.CaretAnnot, t);
                })
            );
          }),
          (h.CaretAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('caretAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.CaretAnnot, t);
                })
            );
          }),
          (h.CaretAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('caretAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.CaretAnnot, t);
                })
            );
          }),
          (h.CaretAnnot.prototype.getSymbol = function () {
            return h.sendWithPromise('CaretAnnot.getSymbol', {
              caret: this.id,
            });
          }),
          (h.CaretAnnot.prototype.setSymbol = function (t) {
            return (
              f(arguments.length, 1, 'setSymbol', '(string)', [[t, 'string']]),
              h.sendWithPromise('CaretAnnot.setSymbol', {
                caret: this.id,
                symbol: t,
              })
            );
          }),
          (h.LineAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('lineAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.LineAnnot, t);
                })
            );
          }),
          (h.LineAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('lineAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.LineAnnot, t);
                })
            );
          }),
          (h.LineAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('lineAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.LineAnnot, t);
                })
            );
          }),
          (h.LineAnnot.prototype.getStartPoint = function () {
            return h.sendWithPromise('LineAnnot.getStartPoint', {
              line: this.id,
            });
          }),
          (h.LineAnnot.prototype.setStartPoint = function (t) {
            return (
              f(arguments.length, 1, 'setStartPoint', '(PDFNet.Point)', [
                [t, 'Structure', h.Point, 'Point'],
              ]),
              F('setStartPoint', [[t, 0]]),
              h.sendWithPromise('LineAnnot.setStartPoint', {
                line: this.id,
                sp: t,
              })
            );
          }),
          (h.LineAnnot.prototype.getEndPoint = function () {
            return h.sendWithPromise('LineAnnot.getEndPoint', {
              line: this.id,
            });
          }),
          (h.LineAnnot.prototype.setEndPoint = function (t) {
            return (
              f(arguments.length, 1, 'setEndPoint', '(PDFNet.Point)', [
                [t, 'Structure', h.Point, 'Point'],
              ]),
              F('setEndPoint', [[t, 0]]),
              h.sendWithPromise('LineAnnot.setEndPoint', {
                line: this.id,
                ep: t,
              })
            );
          }),
          (h.LineAnnot.prototype.getStartStyle = function () {
            return h.sendWithPromise('LineAnnot.getStartStyle', {
              line: this.id,
            });
          }),
          (h.LineAnnot.prototype.setStartStyle = function (t) {
            return (
              f(arguments.length, 1, 'setStartStyle', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('LineAnnot.setStartStyle', {
                line: this.id,
                ss: t,
              })
            );
          }),
          (h.LineAnnot.prototype.getEndStyle = function () {
            return h.sendWithPromise('LineAnnot.getEndStyle', {
              line: this.id,
            });
          }),
          (h.LineAnnot.prototype.setEndStyle = function (t) {
            return (
              f(arguments.length, 1, 'setEndStyle', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('LineAnnot.setEndStyle', {
                line: this.id,
                es: t,
              })
            );
          }),
          (h.LineAnnot.prototype.getLeaderLineLength = function () {
            return h.sendWithPromise('LineAnnot.getLeaderLineLength', {
              line: this.id,
            });
          }),
          (h.LineAnnot.prototype.setLeaderLineLength = function (t) {
            return (
              f(arguments.length, 1, 'setLeaderLineLength', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('LineAnnot.setLeaderLineLength', {
                line: this.id,
                length: t,
              })
            );
          }),
          (h.LineAnnot.prototype.getLeaderLineExtensionLength = function () {
            return h.sendWithPromise('LineAnnot.getLeaderLineExtensionLength', {
              line: this.id,
            });
          }),
          (h.LineAnnot.prototype.setLeaderLineExtensionLength = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setLeaderLineExtensionLength',
                '(number)',
                [[t, 'number']]
              ),
              h.sendWithPromise('LineAnnot.setLeaderLineExtensionLength', {
                line: this.id,
                length: t,
              })
            );
          }),
          (h.LineAnnot.prototype.getShowCaption = function () {
            return h.sendWithPromise('LineAnnot.getShowCaption', {
              line: this.id,
            });
          }),
          (h.LineAnnot.prototype.setShowCaption = function (t) {
            return (
              f(arguments.length, 1, 'setShowCaption', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('LineAnnot.setShowCaption', {
                line: this.id,
                showCaption: t,
              })
            );
          }),
          (h.LineAnnot.prototype.getIntentType = function () {
            return h.sendWithPromise('LineAnnot.getIntentType', {
              line: this.id,
            });
          }),
          (h.LineAnnot.prototype.setIntentType = function (t) {
            return (
              f(arguments.length, 1, 'setIntentType', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('LineAnnot.setIntentType', {
                line: this.id,
                it: t,
              })
            );
          }),
          (h.LineAnnot.prototype.getCapPos = function () {
            return h.sendWithPromise('LineAnnot.getCapPos', { line: this.id });
          }),
          (h.LineAnnot.prototype.setCapPos = function (t) {
            return (
              f(arguments.length, 1, 'setCapPos', '(number)', [[t, 'number']]),
              h.sendWithPromise('LineAnnot.setCapPos', { line: this.id, it: t })
            );
          }),
          (h.LineAnnot.prototype.getLeaderLineOffset = function () {
            return h.sendWithPromise('LineAnnot.getLeaderLineOffset', {
              line: this.id,
            });
          }),
          (h.LineAnnot.prototype.setLeaderLineOffset = function (t) {
            return (
              f(arguments.length, 1, 'setLeaderLineOffset', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('LineAnnot.setLeaderLineOffset', {
                line: this.id,
                length: t,
              })
            );
          }),
          (h.LineAnnot.prototype.getTextHOffset = function () {
            return h.sendWithPromise('LineAnnot.getTextHOffset', {
              line: this.id,
            });
          }),
          (h.LineAnnot.prototype.setTextHOffset = function (t) {
            return (
              f(arguments.length, 1, 'setTextHOffset', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('LineAnnot.setTextHOffset', {
                line: this.id,
                offset: t,
              })
            );
          }),
          (h.LineAnnot.prototype.getTextVOffset = function () {
            return h.sendWithPromise('LineAnnot.getTextVOffset', {
              line: this.id,
            });
          }),
          (h.LineAnnot.prototype.setTextVOffset = function (t) {
            return (
              f(arguments.length, 1, 'setTextVOffset', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('LineAnnot.setTextVOffset', {
                line: this.id,
                offset: t,
              })
            );
          }),
          (h.CircleAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('circleAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.CircleAnnot, t);
                })
            );
          }),
          (h.CircleAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('circleAnnotCreateFromAnnot', { circle: t.id })
                .then(function (t) {
                  return _(h.CircleAnnot, t);
                })
            );
          }),
          (h.CircleAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('circleAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.CircleAnnot, t);
                })
            );
          }),
          (h.CircleAnnot.prototype.getInteriorColor = function () {
            return h
              .sendWithPromise('CircleAnnot.getInteriorColor', {
                circle: this.id,
              })
              .then(function (t) {
                return D(h.ColorPt, t);
              });
          }),
          (h.CircleAnnot.prototype.getInteriorColorCompNum = function () {
            return h.sendWithPromise('CircleAnnot.getInteriorColorCompNum', {
              circle: this.id,
            });
          }),
          (h.CircleAnnot.prototype.setInteriorColorDefault = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setInteriorColorDefault',
                '(PDFNet.ColorPt)',
                [[t, 'Object', h.ColorPt, 'ColorPt']]
              ),
              h.sendWithPromise('CircleAnnot.setInteriorColorDefault', {
                circle: this.id,
                col: t.id,
              })
            );
          }),
          (h.CircleAnnot.prototype.setInteriorColor = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setInteriorColor',
                '(PDFNet.ColorPt, number)',
                [
                  [t, 'Object', h.ColorPt, 'ColorPt'],
                  [e, 'number'],
                ]
              ),
              h.sendWithPromise('CircleAnnot.setInteriorColor', {
                circle: this.id,
                col: t.id,
                numcomp: e,
              })
            );
          }),
          (h.CircleAnnot.prototype.getContentRect = function () {
            return h
              .sendWithPromise('CircleAnnot.getContentRect', {
                circle: this.id,
              })
              .then(function (t) {
                return new h.Rect(t);
              });
          }),
          (h.CircleAnnot.prototype.setContentRect = function (t) {
            return (
              f(arguments.length, 1, 'setContentRect', '(PDFNet.Rect)', [
                [t, 'Structure', h.Rect, 'Rect'],
              ]),
              F('setContentRect', [[t, 0]]),
              h.sendWithPromise('CircleAnnot.setContentRect', {
                circle: this.id,
                cr: t,
              })
            );
          }),
          (h.CircleAnnot.prototype.getPadding = function () {
            return h
              .sendWithPromise('CircleAnnot.getPadding', { circle: this.id })
              .then(function (t) {
                return new h.Rect(t);
              });
          }),
          (h.CircleAnnot.prototype.setPadding = function (t) {
            return (
              f(arguments.length, 1, 'setPadding', '(PDFNet.Rect)', [
                [t, 'Structure', h.Rect, 'Rect'],
              ]),
              F('setPadding', [[t, 0]]),
              h.sendWithPromise('CircleAnnot.setPadding', {
                circle: this.id,
                cr: t,
              })
            );
          }),
          (h.FileAttachmentAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('fileAttachmentAnnotCreateFromObj', {
                  d: t.id,
                })
                .then(function (t) {
                  return _(h.FileAttachmentAnnot, t);
                })
            );
          }),
          (h.FileAttachmentAnnot.prototype.export = function (t) {
            return (
              void 0 === t && (t = ''),
              f(arguments.length, 0, 'export', '(string)', [[t, 'string']]),
              h.sendWithPromise('FileAttachmentAnnot.export', {
                fileatt: this.id,
                save_as: t,
              })
            );
          }),
          (h.FileAttachmentAnnot.prototype.createFromAnnot = function () {
            return h
              .sendWithPromise('FileAttachmentAnnot.createFromAnnot', {
                fileatt: this.id,
              })
              .then(function (t) {
                return _(h.Annot, t);
              });
          }),
          (h.FileAttachmentAnnot.createWithFileSpec = function (t, e, n, i) {
            return (
              void 0 === i && (i = h.FileAttachmentAnnot.Icon.e_PushPin),
              f(
                arguments.length,
                3,
                'createWithFileSpec',
                '(PDFNet.SDFDoc, PDFNet.Rect, PDFNet.FileSpec, number)',
                [
                  [t, 'SDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'Object', h.FileSpec, 'FileSpec'],
                  [i, 'number'],
                ]
              ),
              F('createWithFileSpec', [[e, 1]]),
              h
                .sendWithPromise('fileAttachmentAnnotCreateWithFileSpec', {
                  doc: t.id,
                  pos: e,
                  fs: n.id,
                  icon_name: i,
                })
                .then(function (t) {
                  return _(h.FileAttachmentAnnot, t);
                })
            );
          }),
          (h.FileAttachmentAnnot.createDefault = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'createDefault',
                '(PDFNet.SDFDoc, PDFNet.Rect, string)',
                [
                  [t, 'SDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'string'],
                ]
              ),
              F('createDefault', [[e, 1]]),
              h
                .sendWithPromise('fileAttachmentAnnotCreateDefault', {
                  doc: t.id,
                  pos: e,
                  path: n,
                })
                .then(function (t) {
                  return _(h.FileAttachmentAnnot, t);
                })
            );
          }),
          (h.FileAttachmentAnnot.prototype.getFileSpec = function () {
            return h
              .sendWithPromise('FileAttachmentAnnot.getFileSpec', {
                fileatt: this.id,
              })
              .then(function (t) {
                return _(h.FileSpec, t);
              });
          }),
          (h.FileAttachmentAnnot.prototype.setFileSpec = function (t) {
            return (
              f(arguments.length, 1, 'setFileSpec', '(PDFNet.FileSpec)', [
                [t, 'Object', h.FileSpec, 'FileSpec'],
              ]),
              h.sendWithPromise('FileAttachmentAnnot.setFileSpec', {
                fileatt: this.id,
                file: t.id,
              })
            );
          }),
          (h.FileAttachmentAnnot.prototype.getIcon = function () {
            return h.sendWithPromise('FileAttachmentAnnot.getIcon', {
              fileatt: this.id,
            });
          }),
          (h.FileAttachmentAnnot.prototype.setIcon = function (t) {
            return (
              void 0 === t && (t = h.FileAttachmentAnnot.Icon.e_PushPin),
              f(arguments.length, 0, 'setIcon', '(number)', [[t, 'number']]),
              h.sendWithPromise('FileAttachmentAnnot.setIcon', {
                fileatt: this.id,
                type: t,
              })
            );
          }),
          (h.FileAttachmentAnnot.prototype.getIconName = function () {
            return h.sendWithPromise('FileAttachmentAnnot.getIconName', {
              fileatt: this.id,
            });
          }),
          (h.FileAttachmentAnnot.prototype.setIconName = function (t) {
            return (
              f(arguments.length, 1, 'setIconName', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('FileAttachmentAnnot.setIconName', {
                fileatt: this.id,
                iname: t,
              })
            );
          }),
          (h.FreeTextAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('freeTextAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.FreeTextAnnot, t);
                })
            );
          }),
          (h.FreeTextAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('freeTextAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.FreeTextAnnot, t);
                })
            );
          }),
          (h.FreeTextAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('freeTextAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.FreeTextAnnot, t);
                })
            );
          }),
          (h.FreeTextAnnot.prototype.getDefaultAppearance = function () {
            return h.sendWithPromise('FreeTextAnnot.getDefaultAppearance', {
              ft: this.id,
            });
          }),
          (h.FreeTextAnnot.prototype.setDefaultAppearance = function (t) {
            return (
              f(arguments.length, 1, 'setDefaultAppearance', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('FreeTextAnnot.setDefaultAppearance', {
                ft: this.id,
                app_str: t,
              })
            );
          }),
          (h.FreeTextAnnot.prototype.getQuaddingFormat = function () {
            return h.sendWithPromise('FreeTextAnnot.getQuaddingFormat', {
              ft: this.id,
            });
          }),
          (h.FreeTextAnnot.prototype.setQuaddingFormat = function (t) {
            return (
              f(arguments.length, 1, 'setQuaddingFormat', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('FreeTextAnnot.setQuaddingFormat', {
                ft: this.id,
                format: t,
              })
            );
          }),
          (h.FreeTextAnnot.prototype.getCalloutLinePoints = function () {
            return h.sendWithPromise('FreeTextAnnot.getCalloutLinePoints', {
              ft: this.id,
            });
          }),
          (h.FreeTextAnnot.prototype.setCalloutLinePoints = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'setCalloutLinePoints',
                '(PDFNet.Point, PDFNet.Point, PDFNet.Point)',
                [
                  [t, 'Structure', h.Point, 'Point'],
                  [e, 'Structure', h.Point, 'Point'],
                  [n, 'Structure', h.Point, 'Point'],
                ]
              ),
              F('setCalloutLinePoints', [
                [t, 0],
                [e, 1],
                [n, 2],
              ]),
              h.sendWithPromise('FreeTextAnnot.setCalloutLinePoints', {
                ft: this.id,
                p1: t,
                p2: e,
                p3: n,
              })
            );
          }),
          (h.FreeTextAnnot.prototype.setCalloutLinePointsTwo = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setCalloutLinePointsTwo',
                '(PDFNet.Point, PDFNet.Point)',
                [
                  [t, 'Structure', h.Point, 'Point'],
                  [e, 'Structure', h.Point, 'Point'],
                ]
              ),
              F('setCalloutLinePointsTwo', [
                [t, 0],
                [e, 1],
              ]),
              h.sendWithPromise('FreeTextAnnot.setCalloutLinePointsTwo', {
                ft: this.id,
                p1: t,
                p2: e,
              })
            );
          }),
          (h.FreeTextAnnot.prototype.getIntentName = function () {
            return h.sendWithPromise('FreeTextAnnot.getIntentName', {
              ft: this.id,
            });
          }),
          (h.FreeTextAnnot.prototype.setIntentName = function (t) {
            return (
              void 0 === t && (t = h.FreeTextAnnot.IntentName.e_FreeText),
              f(arguments.length, 0, 'setIntentName', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('FreeTextAnnot.setIntentName', {
                ft: this.id,
                mode: t,
              })
            );
          }),
          (h.FreeTextAnnot.prototype.setIntentNameDefault = function () {
            return h.sendWithPromise('FreeTextAnnot.setIntentNameDefault', {
              ft: this.id,
            });
          }),
          (h.FreeTextAnnot.prototype.getEndingStyle = function () {
            return h.sendWithPromise('FreeTextAnnot.getEndingStyle', {
              ft: this.id,
            });
          }),
          (h.FreeTextAnnot.prototype.setEndingStyle = function (t) {
            return (
              f(arguments.length, 1, 'setEndingStyle', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('FreeTextAnnot.setEndingStyle', {
                ft: this.id,
                style: t,
              })
            );
          }),
          (h.FreeTextAnnot.prototype.setEndingStyleName = function (t) {
            return (
              f(arguments.length, 1, 'setEndingStyleName', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('FreeTextAnnot.setEndingStyleName', {
                ft: this.id,
                est: t,
              })
            );
          }),
          (h.FreeTextAnnot.prototype.setTextColor = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setTextColor',
                '(PDFNet.ColorPt, number)',
                [
                  [t, 'Object', h.ColorPt, 'ColorPt'],
                  [e, 'number'],
                ]
              ),
              h.sendWithPromise('FreeTextAnnot.setTextColor', {
                ft: this.id,
                color: t.id,
                col_comp: e,
              })
            );
          }),
          (h.FreeTextAnnot.prototype.getTextColor = function () {
            return h
              .sendWithPromise('FreeTextAnnot.getTextColor', { ft: this.id })
              .then(function (t) {
                return (t.color = D(h.ColorPt, t.color)), t;
              });
          }),
          (h.FreeTextAnnot.prototype.setLineColor = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setLineColor',
                '(PDFNet.ColorPt, number)',
                [
                  [t, 'Object', h.ColorPt, 'ColorPt'],
                  [e, 'number'],
                ]
              ),
              h.sendWithPromise('FreeTextAnnot.setLineColor', {
                ft: this.id,
                color: t.id,
                col_comp: e,
              })
            );
          }),
          (h.FreeTextAnnot.prototype.getLineColor = function () {
            return h
              .sendWithPromise('FreeTextAnnot.getLineColor', { ft: this.id })
              .then(function (t) {
                return (t.color = D(h.ColorPt, t.color)), t;
              });
          }),
          (h.FreeTextAnnot.prototype.setFontName = function (t) {
            return (
              f(arguments.length, 1, 'setFontName', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('FreeTextAnnot.setFontName', {
                ft: this.id,
                fontName: t,
              })
            );
          }),
          (h.FreeTextAnnot.prototype.setFontSize = function (t) {
            return (
              f(arguments.length, 1, 'setFontSize', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('FreeTextAnnot.setFontSize', {
                ft: this.id,
                font_size: t,
              })
            );
          }),
          (h.FreeTextAnnot.prototype.getFontSize = function () {
            return h.sendWithPromise('FreeTextAnnot.getFontSize', {
              ft: this.id,
            });
          }),
          (h.HighlightAnnot.createFromObj = function (t) {
            return (
              f(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('highlightAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.HighlightAnnot, t);
                })
            );
          }),
          (h.HighlightAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('highlightAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.HighlightAnnot, t);
                })
            );
          }),
          (h.HighlightAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('highlightAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.HighlightAnnot, t);
                })
            );
          }),
          (h.InkAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('inkAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.InkAnnot, t);
                })
            );
          }),
          (h.InkAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('inkAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.InkAnnot, t);
                })
            );
          }),
          (h.InkAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('inkAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.InkAnnot, t);
                })
            );
          }),
          (h.InkAnnot.prototype.getPathCount = function () {
            return h.sendWithPromise('InkAnnot.getPathCount', { ink: this.id });
          }),
          (h.InkAnnot.prototype.getPointCount = function (t) {
            return (
              f(arguments.length, 1, 'getPointCount', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('InkAnnot.getPointCount', {
                ink: this.id,
                pathindex: t,
              })
            );
          }),
          (h.InkAnnot.prototype.getPoint = function (t, e) {
            return (
              f(arguments.length, 2, 'getPoint', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h.sendWithPromise('InkAnnot.getPoint', {
                ink: this.id,
                pathindex: t,
                pointindex: e,
              })
            );
          }),
          (h.InkAnnot.prototype.setPoint = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'setPoint',
                '(number, number, PDFNet.Point)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'Structure', h.Point, 'Point'],
                ]
              ),
              F('setPoint', [[n, 2]]),
              h.sendWithPromise('InkAnnot.setPoint', {
                ink: this.id,
                pathindex: t,
                pointindex: e,
                pt: n,
              })
            );
          }),
          (h.InkAnnot.prototype.erase = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'erase',
                '(PDFNet.Point, PDFNet.Point, number)',
                [
                  [t, 'Structure', h.Point, 'Point'],
                  [e, 'Structure', h.Point, 'Point'],
                  [n, 'number'],
                ]
              ),
              F('erase', [
                [t, 0],
                [e, 1],
              ]),
              h.sendWithPromise('InkAnnot.erase', {
                ink: this.id,
                pt1: t,
                pt2: e,
                width: n,
              })
            );
          }),
          (h.InkAnnot.prototype.getHighlightIntent = function () {
            return h.sendWithPromise('InkAnnot.getHighlightIntent', {
              ink: this.id,
            });
          }),
          (h.InkAnnot.prototype.setHighlightIntent = function (t) {
            return (
              f(arguments.length, 1, 'setHighlightIntent', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('InkAnnot.setHighlightIntent', {
                ink: this.id,
                highlight: t,
              })
            );
          }),
          (h.LinkAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('linkAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.LinkAnnot, t);
                })
            );
          }),
          (h.LinkAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('linkAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.LinkAnnot, t);
                })
            );
          }),
          (h.LinkAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('linkAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.LinkAnnot, t);
                })
            );
          }),
          (h.LinkAnnot.prototype.removeAction = function () {
            return h.sendWithPromise('LinkAnnot.removeAction', {
              link: this.id,
            });
          }),
          (h.LinkAnnot.prototype.getAction = function () {
            return h
              .sendWithPromise('LinkAnnot.getAction', { link: this.id })
              .then(function (t) {
                return _(h.Action, t);
              });
          }),
          (h.LinkAnnot.prototype.setAction = function (t) {
            return (
              f(arguments.length, 1, 'setAction', '(PDFNet.Action)', [
                [t, 'Object', h.Action, 'Action'],
              ]),
              h.sendWithPromise('LinkAnnot.setAction', {
                link: this.id,
                action: t.id,
              })
            );
          }),
          (h.LinkAnnot.prototype.getHighlightingMode = function () {
            return h.sendWithPromise('LinkAnnot.getHighlightingMode', {
              link: this.id,
            });
          }),
          (h.LinkAnnot.prototype.setHighlightingMode = function (t) {
            return (
              f(arguments.length, 1, 'setHighlightingMode', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('LinkAnnot.setHighlightingMode', {
                link: this.id,
                value: t,
              })
            );
          }),
          (h.LinkAnnot.prototype.getQuadPointCount = function () {
            return h.sendWithPromise('LinkAnnot.getQuadPointCount', {
              link: this.id,
            });
          }),
          (h.LinkAnnot.prototype.getQuadPoint = function (t) {
            return (
              f(arguments.length, 1, 'getQuadPoint', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('LinkAnnot.getQuadPoint', {
                link: this.id,
                idx: t,
              })
            );
          }),
          (h.LinkAnnot.prototype.setQuadPoint = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setQuadPoint',
                '(number, PDFNet.QuadPoint)',
                [
                  [t, 'number'],
                  [e, 'Structure', h.QuadPoint, 'QuadPoint'],
                ]
              ),
              F('setQuadPoint', [[e, 1]]),
              h.sendWithPromise('LinkAnnot.setQuadPoint', {
                link: this.id,
                idx: t,
                qp: e,
              })
            );
          }),
          (h.getNormalizedUrl = function (t) {
            return (
              f(arguments.length, 1, 'getNormalizedUrl', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('getNormalizedUrl', { url: t })
            );
          }),
          (h.MarkupAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('markupAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.MarkupAnnot, t);
                })
            );
          }),
          (h.MarkupAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('markupAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.MarkupAnnot, t);
                })
            );
          }),
          (h.MarkupAnnot.prototype.getTitle = function () {
            return h.sendWithPromise('MarkupAnnot.getTitle', {
              markup: this.id,
            });
          }),
          (h.MarkupAnnot.prototype.setTitle = function (t) {
            return (
              f(arguments.length, 1, 'setTitle', '(string)', [[t, 'string']]),
              h.sendWithPromise('MarkupAnnot.setTitle', {
                markup: this.id,
                title: t,
              })
            );
          }),
          (h.MarkupAnnot.prototype.setTitleUString = function (t) {
            return (
              f(arguments.length, 1, 'setTitleUString', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('MarkupAnnot.setTitleUString', {
                markup: this.id,
                title: t,
              })
            );
          }),
          (h.MarkupAnnot.prototype.getPopup = function () {
            return h
              .sendWithPromise('MarkupAnnot.getPopup', { markup: this.id })
              .then(function (t) {
                return _(h.Annot, t);
              });
          }),
          (h.MarkupAnnot.prototype.setPopup = function (t) {
            return (
              f(arguments.length, 1, 'setPopup', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h.sendWithPromise('MarkupAnnot.setPopup', {
                markup: this.id,
                ppup: t.id,
              })
            );
          }),
          (h.MarkupAnnot.prototype.getOpacity = function () {
            return h.sendWithPromise('MarkupAnnot.getOpacity', {
              markup: this.id,
            });
          }),
          (h.MarkupAnnot.prototype.setOpacity = function (t) {
            return (
              f(arguments.length, 1, 'setOpacity', '(number)', [[t, 'number']]),
              h.sendWithPromise('MarkupAnnot.setOpacity', {
                markup: this.id,
                op: t,
              })
            );
          }),
          (h.MarkupAnnot.prototype.getSubject = function () {
            return h.sendWithPromise('MarkupAnnot.getSubject', {
              markup: this.id,
            });
          }),
          (h.MarkupAnnot.prototype.setSubject = function (t) {
            return (
              f(arguments.length, 1, 'setSubject', '(string)', [[t, 'string']]),
              h.sendWithPromise('MarkupAnnot.setSubject', {
                markup: this.id,
                contents: t,
              })
            );
          }),
          (h.MarkupAnnot.prototype.getCreationDates = function () {
            return h
              .sendWithPromise('MarkupAnnot.getCreationDates', {
                markup: this.id,
              })
              .then(function (t) {
                return new h.Date(t);
              });
          }),
          (h.MarkupAnnot.prototype.getBorderEffect = function () {
            return h.sendWithPromise('MarkupAnnot.getBorderEffect', {
              markup: this.id,
            });
          }),
          (h.MarkupAnnot.prototype.setBorderEffect = function (t) {
            return (
              void 0 === t && (t = h.MarkupAnnot.BorderEffect.e_None),
              f(arguments.length, 0, 'setBorderEffect', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('MarkupAnnot.setBorderEffect', {
                markup: this.id,
                effect: t,
              })
            );
          }),
          (h.MarkupAnnot.prototype.getBorderEffectIntensity = function () {
            return h.sendWithPromise('MarkupAnnot.getBorderEffectIntensity', {
              markup: this.id,
            });
          }),
          (h.MarkupAnnot.prototype.setBorderEffectIntensity = function (t) {
            return (
              void 0 === t && (t = 0),
              f(arguments.length, 0, 'setBorderEffectIntensity', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('MarkupAnnot.setBorderEffectIntensity', {
                markup: this.id,
                intensity: t,
              })
            );
          }),
          (h.MarkupAnnot.prototype.setCreationDates = function (t) {
            return (
              f(arguments.length, 1, 'setCreationDates', '(PDFNet.Date)', [
                [t, 'Structure', h.Date, 'Date'],
              ]),
              F('setCreationDates', [[t, 0]]),
              h.sendWithPromise('MarkupAnnot.setCreationDates', {
                markup: this.id,
                dt: t,
              })
            );
          }),
          (h.MarkupAnnot.prototype.getInteriorColor = function () {
            return h
              .sendWithPromise('MarkupAnnot.getInteriorColor', {
                markup: this.id,
              })
              .then(function (t) {
                return D(h.ColorPt, t);
              });
          }),
          (h.MarkupAnnot.prototype.getInteriorColorCompNum = function () {
            return h.sendWithPromise('MarkupAnnot.getInteriorColorCompNum', {
              markup: this.id,
            });
          }),
          (h.MarkupAnnot.prototype.setInteriorColorRGB = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setInteriorColorRGB',
                '(PDFNet.ColorPt)',
                [[t, 'Object', h.ColorPt, 'ColorPt']]
              ),
              h.sendWithPromise('MarkupAnnot.setInteriorColorRGB', {
                markup: this.id,
                col: t.id,
              })
            );
          }),
          (h.MarkupAnnot.prototype.setInteriorColor = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setInteriorColor',
                '(PDFNet.ColorPt, number)',
                [
                  [t, 'Object', h.ColorPt, 'ColorPt'],
                  [e, 'number'],
                ]
              ),
              h.sendWithPromise('MarkupAnnot.setInteriorColor', {
                markup: this.id,
                c: t.id,
                CompNum: e,
              })
            );
          }),
          (h.MarkupAnnot.prototype.getContentRect = function () {
            return h
              .sendWithPromise('MarkupAnnot.getContentRect', {
                markup: this.id,
              })
              .then(function (t) {
                return new h.Rect(t);
              });
          }),
          (h.MarkupAnnot.prototype.setContentRect = function (t) {
            return (
              f(arguments.length, 1, 'setContentRect', '(PDFNet.Rect)', [
                [t, 'Structure', h.Rect, 'Rect'],
              ]),
              F('setContentRect', [[t, 0]]),
              h.sendWithPromise('MarkupAnnot.setContentRect', {
                markup: this.id,
                cr: t,
              })
            );
          }),
          (h.MarkupAnnot.prototype.getPadding = function () {
            return h
              .sendWithPromise('MarkupAnnot.getPadding', { markup: this.id })
              .then(function (t) {
                return new h.Rect(t);
              });
          }),
          (h.MarkupAnnot.prototype.setPadding = function (t) {
            return (
              f(arguments.length, 1, 'setPadding', '(PDFNet.Rect)', [
                [t, 'Structure', h.Rect, 'Rect'],
              ]),
              F('setPadding', [[t, 0]]),
              h.sendWithPromise('MarkupAnnot.setPadding', {
                markup: this.id,
                rd: t,
              })
            );
          }),
          (h.MarkupAnnot.prototype.rotateAppearance = function (t) {
            return (
              f(arguments.length, 1, 'rotateAppearance', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('MarkupAnnot.rotateAppearance', {
                markup: this.id,
                angle: t,
              })
            );
          }),
          (h.MovieAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('movieAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.MovieAnnot, t);
                })
            );
          }),
          (h.MovieAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('movieAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.MovieAnnot, t);
                })
            );
          }),
          (h.MovieAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('movieAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.MovieAnnot, t);
                })
            );
          }),
          (h.MovieAnnot.prototype.getTitle = function () {
            return h.sendWithPromise('MovieAnnot.getTitle', { movie: this.id });
          }),
          (h.MovieAnnot.prototype.setTitle = function (t) {
            return (
              f(arguments.length, 1, 'setTitle', '(string)', [[t, 'string']]),
              h.sendWithPromise('MovieAnnot.setTitle', {
                movie: this.id,
                title: t,
              })
            );
          }),
          (h.MovieAnnot.prototype.isToBePlayed = function () {
            return h.sendWithPromise('MovieAnnot.isToBePlayed', {
              movie: this.id,
            });
          }),
          (h.MovieAnnot.prototype.setToBePlayed = function (t) {
            return (
              void 0 === t && (t = !0),
              f(arguments.length, 0, 'setToBePlayed', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('MovieAnnot.setToBePlayed', {
                movie: this.id,
                isplay: t,
              })
            );
          }),
          (h.PolyLineAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('polyLineAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.PolyLineAnnot, t);
                })
            );
          }),
          (h.PolyLineAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('polyLineAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.PolyLineAnnot, t);
                })
            );
          }),
          (h.PolyLineAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('polyLineAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.PolyLineAnnot, t);
                })
            );
          }),
          (h.PolyLineAnnot.prototype.getVertexCount = function () {
            return h.sendWithPromise('PolyLineAnnot.getVertexCount', {
              polyline: this.id,
            });
          }),
          (h.PolyLineAnnot.prototype.getVertex = function (t) {
            return (
              f(arguments.length, 1, 'getVertex', '(number)', [[t, 'number']]),
              h.sendWithPromise('PolyLineAnnot.getVertex', {
                polyline: this.id,
                idx: t,
              })
            );
          }),
          (h.PolyLineAnnot.prototype.setVertex = function (t, e) {
            return (
              f(arguments.length, 2, 'setVertex', '(number, PDFNet.Point)', [
                [t, 'number'],
                [e, 'Structure', h.Point, 'Point'],
              ]),
              F('setVertex', [[e, 1]]),
              h.sendWithPromise('PolyLineAnnot.setVertex', {
                polyline: this.id,
                idx: t,
                pt: e,
              })
            );
          }),
          (h.PolyLineAnnot.prototype.getStartStyle = function () {
            return h.sendWithPromise('PolyLineAnnot.getStartStyle', {
              polyline: this.id,
            });
          }),
          (h.PolyLineAnnot.prototype.setStartStyle = function (t) {
            return (
              f(arguments.length, 1, 'setStartStyle', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PolyLineAnnot.setStartStyle', {
                polyline: this.id,
                style: t,
              })
            );
          }),
          (h.PolyLineAnnot.prototype.getEndStyle = function () {
            return h.sendWithPromise('PolyLineAnnot.getEndStyle', {
              polyline: this.id,
            });
          }),
          (h.PolyLineAnnot.prototype.setEndStyle = function (t) {
            return (
              f(arguments.length, 1, 'setEndStyle', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PolyLineAnnot.setEndStyle', {
                polyline: this.id,
                style: t,
              })
            );
          }),
          (h.PolyLineAnnot.prototype.getIntentName = function () {
            return h.sendWithPromise('PolyLineAnnot.getIntentName', {
              polyline: this.id,
            });
          }),
          (h.PolyLineAnnot.prototype.setIntentName = function (t) {
            return (
              f(arguments.length, 1, 'setIntentName', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PolyLineAnnot.setIntentName', {
                polyline: this.id,
                mode: t,
              })
            );
          }),
          (h.PolygonAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('polygonAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.PolygonAnnot, t);
                })
            );
          }),
          (h.PolygonAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('polygonAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.PolygonAnnot, t);
                })
            );
          }),
          (h.PolygonAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('polygonAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.PolygonAnnot, t);
                })
            );
          }),
          (h.PopupAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('popupAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.PopupAnnot, t);
                })
            );
          }),
          (h.PopupAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('popupAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.PopupAnnot, t);
                })
            );
          }),
          (h.PopupAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('popupAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.PopupAnnot, t);
                })
            );
          }),
          (h.PopupAnnot.prototype.getParent = function () {
            return h
              .sendWithPromise('PopupAnnot.getParent', { popup: this.id })
              .then(function (t) {
                return _(h.Annot, t);
              });
          }),
          (h.PopupAnnot.prototype.setParent = function (t) {
            return (
              f(arguments.length, 1, 'setParent', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h.sendWithPromise('PopupAnnot.setParent', {
                popup: this.id,
                parent: t.id,
              })
            );
          }),
          (h.PopupAnnot.prototype.isOpen = function () {
            return h.sendWithPromise('PopupAnnot.isOpen', { popup: this.id });
          }),
          (h.PopupAnnot.prototype.setOpen = function (t) {
            return (
              f(arguments.length, 1, 'setOpen', '(boolean)', [[t, 'boolean']]),
              h.sendWithPromise('PopupAnnot.setOpen', {
                popup: this.id,
                isopen: t,
              })
            );
          }),
          (h.RedactionAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('redactionAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.RedactionAnnot, t);
                })
            );
          }),
          (h.RedactionAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('redactionAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.RedactionAnnot, t);
                })
            );
          }),
          (h.RedactionAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('redactionAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.RedactionAnnot, t);
                })
            );
          }),
          (h.RedactionAnnot.prototype.getQuadPointCount = function () {
            return h.sendWithPromise('RedactionAnnot.getQuadPointCount', {
              redaction: this.id,
            });
          }),
          (h.RedactionAnnot.prototype.getQuadPoint = function (t) {
            return (
              f(arguments.length, 1, 'getQuadPoint', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('RedactionAnnot.getQuadPoint', {
                redaction: this.id,
                idx: t,
              })
            );
          }),
          (h.RedactionAnnot.prototype.setQuadPoint = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setQuadPoint',
                '(number, PDFNet.QuadPoint)',
                [
                  [t, 'number'],
                  [e, 'Structure', h.QuadPoint, 'QuadPoint'],
                ]
              ),
              F('setQuadPoint', [[e, 1]]),
              h.sendWithPromise('RedactionAnnot.setQuadPoint', {
                redaction: this.id,
                idx: t,
                qp: e,
              })
            );
          }),
          (h.RedactionAnnot.prototype.setAppFormXO = function (t) {
            return (
              f(arguments.length, 1, 'setAppFormXO', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('RedactionAnnot.setAppFormXO', {
                redaction: this.id,
                formxo: t.id,
              })
            );
          }),
          (h.RedactionAnnot.prototype.getOverlayText = function () {
            return h.sendWithPromise('RedactionAnnot.getOverlayText', {
              redaction: this.id,
            });
          }),
          (h.RedactionAnnot.prototype.setOverlayText = function (t) {
            return (
              f(arguments.length, 1, 'setOverlayText', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('RedactionAnnot.setOverlayText', {
                redaction: this.id,
                title: t,
              })
            );
          }),
          (h.RedactionAnnot.prototype.getUseRepeat = function () {
            return h.sendWithPromise('RedactionAnnot.getUseRepeat', {
              redaction: this.id,
            });
          }),
          (h.RedactionAnnot.prototype.setUseRepeat = function (t) {
            return (
              void 0 === t && (t = !1),
              f(arguments.length, 0, 'setUseRepeat', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('RedactionAnnot.setUseRepeat', {
                redaction: this.id,
                userepeat: t,
              })
            );
          }),
          (h.RedactionAnnot.prototype.getOverlayTextAppearance = function () {
            return h.sendWithPromise(
              'RedactionAnnot.getOverlayTextAppearance',
              { redaction: this.id }
            );
          }),
          (h.RedactionAnnot.prototype.setOverlayTextAppearance = function (t) {
            return (
              f(arguments.length, 1, 'setOverlayTextAppearance', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('RedactionAnnot.setOverlayTextAppearance', {
                redaction: this.id,
                app: t,
              })
            );
          }),
          (h.RedactionAnnot.prototype.getQuadForm = function () {
            return h.sendWithPromise('RedactionAnnot.getQuadForm', {
              redaction: this.id,
            });
          }),
          (h.RedactionAnnot.prototype.setQuadForm = function (t) {
            return (
              void 0 === t && (t = h.RedactionAnnot.QuadForm.e_LeftJustified),
              f(arguments.length, 0, 'setQuadForm', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('RedactionAnnot.setQuadForm', {
                redaction: this.id,
                form: t,
              })
            );
          }),
          (h.RedactionAnnot.prototype.getAppFormXO = function () {
            return h
              .sendWithPromise('RedactionAnnot.getAppFormXO', {
                redaction: this.id,
              })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.RubberStampAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('rubberStampAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.RubberStampAnnot, t);
                })
            );
          }),
          (h.RubberStampAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('rubberStampAnnotCreateFromAnnot', {
                  ann: t.id,
                })
                .then(function (t) {
                  return _(h.RubberStampAnnot, t);
                })
            );
          }),
          (h.RubberStampAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('rubberStampAnnotCreate', {
                  doc: t.id,
                  pos: e,
                })
                .then(function (t) {
                  return _(h.RubberStampAnnot, t);
                })
            );
          }),
          (h.RubberStampAnnot.createCustom = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'createCustom',
                '(PDFNet.SDFDoc, PDFNet.Rect, PDFNet.Obj)',
                [
                  [t, 'SDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'Object', h.Obj, 'Obj'],
                ]
              ),
              F('createCustom', [[e, 1]]),
              h
                .sendWithPromise('rubberStampAnnotCreateCustom', {
                  doc: t.id,
                  pos: e,
                  form_xobject: n.id,
                })
                .then(function (t) {
                  return _(h.RubberStampAnnot, t);
                })
            );
          }),
          (h.RubberStampAnnot.prototype.getIcon = function () {
            return h.sendWithPromise('RubberStampAnnot.getIcon', {
              stamp: this.id,
            });
          }),
          (h.RubberStampAnnot.prototype.setIcon = function (t) {
            return (
              void 0 === t && (t = h.RubberStampAnnot.Icon.e_Draft),
              f(arguments.length, 0, 'setIcon', '(number)', [[t, 'number']]),
              h.sendWithPromise('RubberStampAnnot.setIcon', {
                stamp: this.id,
                type: t,
              })
            );
          }),
          (h.RubberStampAnnot.prototype.setIconDefault = function () {
            return h.sendWithPromise('RubberStampAnnot.setIconDefault', {
              stamp: this.id,
            });
          }),
          (h.RubberStampAnnot.prototype.getIconName = function () {
            return h.sendWithPromise('RubberStampAnnot.getIconName', {
              stamp: this.id,
            });
          }),
          (h.RubberStampAnnot.prototype.setIconName = function (t) {
            return (
              f(arguments.length, 1, 'setIconName', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('RubberStampAnnot.setIconName', {
                stamp: this.id,
                iconstring: t,
              })
            );
          }),
          (h.rubberStampAnnotSetOpacity = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'rubberStampAnnotSetOpacity',
                '(PDFNet.Annot, number)',
                [
                  [t, 'Object', h.Annot, 'Annot'],
                  [e, 'number'],
                ]
              ),
              h.sendWithPromise('rubberStampAnnotSetOpacity', {
                stamp: t.id,
                opacity: e,
              })
            );
          }),
          (h.ScreenAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('screenAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.ScreenAnnot, t);
                })
            );
          }),
          (h.ScreenAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('screenAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.ScreenAnnot, t);
                })
            );
          }),
          (h.ScreenAnnot.prototype.getTitle = function () {
            return h.sendWithPromise('ScreenAnnot.getTitle', { s: this.id });
          }),
          (h.ScreenAnnot.prototype.setTitle = function (t) {
            return (
              f(arguments.length, 1, 'setTitle', '(string)', [[t, 'string']]),
              h.sendWithPromise('ScreenAnnot.setTitle', {
                s: this.id,
                title: t,
              })
            );
          }),
          (h.ScreenAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('screenAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.ScreenAnnot, t);
                })
            );
          }),
          (h.ScreenAnnot.prototype.getAction = function () {
            return h
              .sendWithPromise('ScreenAnnot.getAction', { s: this.id })
              .then(function (t) {
                return _(h.Action, t);
              });
          }),
          (h.ScreenAnnot.prototype.setAction = function (t) {
            return (
              f(arguments.length, 1, 'setAction', '(PDFNet.Action)', [
                [t, 'Object', h.Action, 'Action'],
              ]),
              h.sendWithPromise('ScreenAnnot.setAction', {
                s: this.id,
                action: t.id,
              })
            );
          }),
          (h.ScreenAnnot.prototype.getBorderColor = function () {
            return h
              .sendWithPromise('ScreenAnnot.getBorderColor', { s: this.id })
              .then(function (t) {
                return D(h.ColorPt, t);
              });
          }),
          (h.ScreenAnnot.prototype.setBorderColor = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setBorderColor',
                '(PDFNet.ColorPt, number)',
                [
                  [t, 'Object', h.ColorPt, 'ColorPt'],
                  [e, 'number'],
                ]
              ),
              h.sendWithPromise('ScreenAnnot.setBorderColor', {
                s: this.id,
                col: t.id,
                numcomp: e,
              })
            );
          }),
          (h.ScreenAnnot.prototype.getBorderColorCompNum = function () {
            return h.sendWithPromise('ScreenAnnot.getBorderColorCompNum', {
              s: this.id,
            });
          }),
          (h.ScreenAnnot.prototype.getBackgroundColorCompNum = function () {
            return h.sendWithPromise('ScreenAnnot.getBackgroundColorCompNum', {
              s: this.id,
            });
          }),
          (h.ScreenAnnot.prototype.getBackgroundColor = function () {
            return h
              .sendWithPromise('ScreenAnnot.getBackgroundColor', { s: this.id })
              .then(function (t) {
                return D(h.ColorPt, t);
              });
          }),
          (h.ScreenAnnot.prototype.setBackgroundColor = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setBackgroundColor',
                '(PDFNet.ColorPt, number)',
                [
                  [t, 'Object', h.ColorPt, 'ColorPt'],
                  [e, 'number'],
                ]
              ),
              h.sendWithPromise('ScreenAnnot.setBackgroundColor', {
                s: this.id,
                col: t.id,
                numcomp: e,
              })
            );
          }),
          (h.ScreenAnnot.prototype.getStaticCaptionText = function () {
            return h.sendWithPromise('ScreenAnnot.getStaticCaptionText', {
              s: this.id,
            });
          }),
          (h.ScreenAnnot.prototype.setStaticCaptionText = function (t) {
            return (
              f(arguments.length, 1, 'setStaticCaptionText', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('ScreenAnnot.setStaticCaptionText', {
                s: this.id,
                contents: t,
              })
            );
          }),
          (h.ScreenAnnot.prototype.getRolloverCaptionText = function () {
            return h.sendWithPromise('ScreenAnnot.getRolloverCaptionText', {
              s: this.id,
            });
          }),
          (h.ScreenAnnot.prototype.setRolloverCaptionText = function (t) {
            return (
              f(arguments.length, 1, 'setRolloverCaptionText', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('ScreenAnnot.setRolloverCaptionText', {
                s: this.id,
                contents: t,
              })
            );
          }),
          (h.ScreenAnnot.prototype.getMouseDownCaptionText = function () {
            return h.sendWithPromise('ScreenAnnot.getMouseDownCaptionText', {
              s: this.id,
            });
          }),
          (h.ScreenAnnot.prototype.setMouseDownCaptionText = function (t) {
            return (
              f(arguments.length, 1, 'setMouseDownCaptionText', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('ScreenAnnot.setMouseDownCaptionText', {
                s: this.id,
                contents: t,
              })
            );
          }),
          (h.ScreenAnnot.prototype.getStaticIcon = function () {
            return h
              .sendWithPromise('ScreenAnnot.getStaticIcon', { s: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.ScreenAnnot.prototype.setStaticIcon = function (t) {
            return (
              f(arguments.length, 1, 'setStaticIcon', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('ScreenAnnot.setStaticIcon', {
                s: this.id,
                icon: t.id,
              })
            );
          }),
          (h.ScreenAnnot.prototype.getRolloverIcon = function () {
            return h
              .sendWithPromise('ScreenAnnot.getRolloverIcon', { s: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.ScreenAnnot.prototype.setRolloverIcon = function (t) {
            return (
              f(arguments.length, 1, 'setRolloverIcon', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('ScreenAnnot.setRolloverIcon', {
                s: this.id,
                icon: t.id,
              })
            );
          }),
          (h.ScreenAnnot.prototype.getMouseDownIcon = function () {
            return h
              .sendWithPromise('ScreenAnnot.getMouseDownIcon', { s: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.ScreenAnnot.prototype.setMouseDownIcon = function (t) {
            return (
              f(arguments.length, 1, 'setMouseDownIcon', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('ScreenAnnot.setMouseDownIcon', {
                s: this.id,
                icon: t.id,
              })
            );
          }),
          (h.ScreenAnnot.prototype.getScaleType = function () {
            return h.sendWithPromise('ScreenAnnot.getScaleType', {
              s: this.id,
            });
          }),
          (h.ScreenAnnot.prototype.setScaleType = function (t) {
            return (
              f(arguments.length, 1, 'setScaleType', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('ScreenAnnot.setScaleType', {
                s: this.id,
                st: t,
              })
            );
          }),
          (h.ScreenAnnot.prototype.getIconCaptionRelation = function () {
            return h.sendWithPromise('ScreenAnnot.getIconCaptionRelation', {
              s: this.id,
            });
          }),
          (h.ScreenAnnot.prototype.setIconCaptionRelation = function (t) {
            return (
              f(arguments.length, 1, 'setIconCaptionRelation', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('ScreenAnnot.setIconCaptionRelation', {
                s: this.id,
                icr: t,
              })
            );
          }),
          (h.ScreenAnnot.prototype.getScaleCondition = function () {
            return h.sendWithPromise('ScreenAnnot.getScaleCondition', {
              s: this.id,
            });
          }),
          (h.ScreenAnnot.prototype.setScaleCondition = function (t) {
            return (
              f(arguments.length, 1, 'setScaleCondition', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('ScreenAnnot.setScaleCondition', {
                s: this.id,
                sc: t,
              })
            );
          }),
          (h.ScreenAnnot.prototype.getFitFull = function () {
            return h.sendWithPromise('ScreenAnnot.getFitFull', { s: this.id });
          }),
          (h.ScreenAnnot.prototype.setFitFull = function (t) {
            return (
              f(arguments.length, 1, 'setFitFull', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('ScreenAnnot.setFitFull', { s: this.id, ff: t })
            );
          }),
          (h.ScreenAnnot.prototype.getHIconLeftOver = function () {
            return h.sendWithPromise('ScreenAnnot.getHIconLeftOver', {
              s: this.id,
            });
          }),
          (h.ScreenAnnot.prototype.setHIconLeftOver = function (t) {
            return (
              f(arguments.length, 1, 'setHIconLeftOver', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('ScreenAnnot.setHIconLeftOver', {
                s: this.id,
                hl: t,
              })
            );
          }),
          (h.ScreenAnnot.prototype.getVIconLeftOver = function () {
            return h.sendWithPromise('ScreenAnnot.getVIconLeftOver', {
              s: this.id,
            });
          }),
          (h.ScreenAnnot.prototype.setVIconLeftOver = function (t) {
            return (
              f(arguments.length, 1, 'setVIconLeftOver', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('ScreenAnnot.setVIconLeftOver', {
                s: this.id,
                vl: t,
              })
            );
          }),
          (h.SoundAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('soundAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.SoundAnnot, t);
                })
            );
          }),
          (h.SoundAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('soundAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.SoundAnnot, t);
                })
            );
          }),
          (h.SoundAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('soundAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.SoundAnnot, t);
                })
            );
          }),
          (h.SoundAnnot.createWithData = function (t, e, n, i, r, o) {
            return (
              f(
                arguments.length,
                6,
                'createWithData',
                '(PDFNet.SDFDoc, PDFNet.Rect, PDFNet.Filter, number, number, number)',
                [
                  [t, 'SDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'Object', h.Filter, 'Filter'],
                  [i, 'number'],
                  [r, 'number'],
                  [o, 'number'],
                ]
              ),
              F('createWithData', [[e, 1]]),
              0 != n.id && O(n.id),
              h
                .sendWithPromise('soundAnnotCreateWithData', {
                  doc: t.id,
                  pos: e,
                  no_own_stream: n.id,
                  sample_bits: i,
                  sample_freq: r,
                  num_channels: o,
                })
                .then(function (t) {
                  return _(h.SoundAnnot, t);
                })
            );
          }),
          (h.SoundAnnot.createAtPoint = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createAtPoint',
                '(PDFNet.SDFDoc, PDFNet.Point)',
                [
                  [t, 'SDFDoc'],
                  [e, 'Structure', h.Point, 'Point'],
                ]
              ),
              F('createAtPoint', [[e, 1]]),
              h
                .sendWithPromise('soundAnnotCreateAtPoint', {
                  doc: t.id,
                  pos: e,
                })
                .then(function (t) {
                  return _(h.SoundAnnot, t);
                })
            );
          }),
          (h.SoundAnnot.prototype.getSoundStream = function () {
            return h
              .sendWithPromise('SoundAnnot.getSoundStream', { sound: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.SoundAnnot.prototype.setSoundStream = function (t) {
            return (
              f(arguments.length, 1, 'setSoundStream', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('SoundAnnot.setSoundStream', {
                sound: this.id,
                icon: t.id,
              })
            );
          }),
          (h.SoundAnnot.prototype.getIcon = function () {
            return h.sendWithPromise('SoundAnnot.getIcon', { sound: this.id });
          }),
          (h.SoundAnnot.prototype.setIcon = function (t) {
            return (
              void 0 === t && (t = h.SoundAnnot.Icon.e_Speaker),
              f(arguments.length, 0, 'setIcon', '(number)', [[t, 'number']]),
              h.sendWithPromise('SoundAnnot.setIcon', {
                sound: this.id,
                type: t,
              })
            );
          }),
          (h.SoundAnnot.prototype.getIconName = function () {
            return h.sendWithPromise('SoundAnnot.getIconName', {
              sound: this.id,
            });
          }),
          (h.SoundAnnot.prototype.setIconName = function (t) {
            return (
              f(arguments.length, 1, 'setIconName', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('SoundAnnot.setIconName', {
                sound: this.id,
                type: t,
              })
            );
          }),
          (h.SquareAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('squareAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.SquareAnnot, t);
                })
            );
          }),
          (h.SquareAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('squareAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.SquareAnnot, t);
                })
            );
          }),
          (h.SquareAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('squareAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.SquareAnnot, t);
                })
            );
          }),
          (h.SquareAnnot.prototype.getInteriorColor = function () {
            return h
              .sendWithPromise('SquareAnnot.getInteriorColor', {
                square: this.id,
              })
              .then(function (t) {
                return D(h.ColorPt, t);
              });
          }),
          (h.SquareAnnot.prototype.getInteriorColorCompNum = function () {
            return h.sendWithPromise('SquareAnnot.getInteriorColorCompNum', {
              square: this.id,
            });
          }),
          (h.SquareAnnot.prototype.setInteriorColorDefault = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setInteriorColorDefault',
                '(PDFNet.ColorPt)',
                [[t, 'Object', h.ColorPt, 'ColorPt']]
              ),
              h.sendWithPromise('SquareAnnot.setInteriorColorDefault', {
                square: this.id,
                col: t.id,
              })
            );
          }),
          (h.SquareAnnot.prototype.setInteriorColor = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setInteriorColor',
                '(PDFNet.ColorPt, number)',
                [
                  [t, 'Object', h.ColorPt, 'ColorPt'],
                  [e, 'number'],
                ]
              ),
              h.sendWithPromise('SquareAnnot.setInteriorColor', {
                square: this.id,
                col: t.id,
                numcomp: e,
              })
            );
          }),
          (h.SquareAnnot.prototype.getContentRect = function () {
            return h
              .sendWithPromise('SquareAnnot.getContentRect', {
                square: this.id,
              })
              .then(function (t) {
                return new h.Rect(t);
              });
          }),
          (h.SquareAnnot.prototype.setContentRect = function (t) {
            return (
              f(arguments.length, 1, 'setContentRect', '(PDFNet.Rect)', [
                [t, 'Structure', h.Rect, 'Rect'],
              ]),
              F('setContentRect', [[t, 0]]),
              h.sendWithPromise('SquareAnnot.setContentRect', {
                square: this.id,
                cr: t,
              })
            );
          }),
          (h.SquareAnnot.prototype.getPadding = function () {
            return h
              .sendWithPromise('SquareAnnot.getPadding', { square: this.id })
              .then(function (t) {
                return new h.Rect(t);
              });
          }),
          (h.SquareAnnot.prototype.setPadding = function (t) {
            return (
              f(arguments.length, 1, 'setPadding', '(PDFNet.Rect)', [
                [t, 'Structure', h.Rect, 'Rect'],
              ]),
              F('setPadding', [[t, 0]]),
              h.sendWithPromise('SquareAnnot.setPadding', {
                square: this.id,
                cr: t,
              })
            );
          }),
          (h.SquigglyAnnot.createFromObj = function (t) {
            return (
              f(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('squigglyAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.SquigglyAnnot, t);
                })
            );
          }),
          (h.SquigglyAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('squigglyAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.SquigglyAnnot, t);
                })
            );
          }),
          (h.SquigglyAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('squigglyAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.SquigglyAnnot, t);
                })
            );
          }),
          (h.StrikeOutAnnot.createFromObj = function (t) {
            return (
              f(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('strikeOutAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.StrikeOutAnnot, t);
                })
            );
          }),
          (h.StrikeOutAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('strikeOutAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.StrikeOutAnnot, t);
                })
            );
          }),
          (h.StrikeOutAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('strikeOutAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.StrikeOutAnnot, t);
                })
            );
          }),
          (h.TextAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('textAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.TextAnnot, t);
                })
            );
          }),
          (h.TextAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('textAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.TextAnnot, t);
                })
            );
          }),
          (h.TextAnnot.createAtPoint = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createAtPoint',
                '(PDFNet.SDFDoc, PDFNet.Point)',
                [
                  [t, 'SDFDoc'],
                  [e, 'Structure', h.Point, 'Point'],
                ]
              ),
              F('createAtPoint', [[e, 1]]),
              h
                .sendWithPromise('textAnnotCreateAtPoint', {
                  doc: t.id,
                  pos: e,
                })
                .then(function (t) {
                  return _(h.TextAnnot, t);
                })
            );
          }),
          (h.TextAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('textAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.TextAnnot, t);
                })
            );
          }),
          (h.TextAnnot.prototype.isOpen = function () {
            return h.sendWithPromise('TextAnnot.isOpen', { text: this.id });
          }),
          (h.TextAnnot.prototype.setOpen = function (t) {
            return (
              f(arguments.length, 1, 'setOpen', '(boolean)', [[t, 'boolean']]),
              h.sendWithPromise('TextAnnot.setOpen', {
                text: this.id,
                isopen: t,
              })
            );
          }),
          (h.TextAnnot.prototype.getIcon = function () {
            return h.sendWithPromise('TextAnnot.getIcon', { text: this.id });
          }),
          (h.TextAnnot.prototype.setIcon = function (t) {
            return (
              void 0 === t && (t = h.TextAnnot.Icon.e_Note),
              f(arguments.length, 0, 'setIcon', '(number)', [[t, 'number']]),
              h.sendWithPromise('TextAnnot.setIcon', { text: this.id, icon: t })
            );
          }),
          (h.TextAnnot.prototype.setIconDefault = function () {
            return h.sendWithPromise('TextAnnot.setIconDefault', {
              text: this.id,
            });
          }),
          (h.TextAnnot.prototype.getIconName = function () {
            return h.sendWithPromise('TextAnnot.getIconName', {
              text: this.id,
            });
          }),
          (h.TextAnnot.prototype.setIconName = function (t) {
            return (
              f(arguments.length, 1, 'setIconName', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('TextAnnot.setIconName', {
                text: this.id,
                icon: t,
              })
            );
          }),
          (h.TextAnnot.prototype.getState = function () {
            return h.sendWithPromise('TextAnnot.getState', { text: this.id });
          }),
          (h.TextAnnot.prototype.setState = function (t) {
            return (
              void 0 === t && (t = ''),
              f(arguments.length, 0, 'setState', '(string)', [[t, 'string']]),
              h.sendWithPromise('TextAnnot.setState', {
                text: this.id,
                state: t,
              })
            );
          }),
          (h.TextAnnot.prototype.getStateModel = function () {
            return h.sendWithPromise('TextAnnot.getStateModel', {
              text: this.id,
            });
          }),
          (h.TextAnnot.prototype.setStateModel = function (t) {
            return (
              f(arguments.length, 1, 'setStateModel', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('TextAnnot.setStateModel', {
                text: this.id,
                sm: t,
              })
            );
          }),
          (h.TextAnnot.prototype.getAnchorPosition = function (e) {
            return (
              f(arguments.length, 1, 'getAnchorPosition', '(PDFNet.Point)', [
                [e, 'Structure', h.Point, 'Point'],
              ]),
              F('getAnchorPosition', [[e, 0]]),
              (e.yieldFunction = 'TextAnnot.getAnchorPosition'),
              h
                .sendWithPromise('TextAnnot.getAnchorPosition', {
                  text: this.id,
                  anchor: e,
                })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.TextAnnot.prototype.setAnchorPosition = function (t) {
            return (
              f(arguments.length, 1, 'setAnchorPosition', '(PDFNet.Point)', [
                [t, 'Structure', h.Point, 'Point'],
              ]),
              F('setAnchorPosition', [[t, 0]]),
              h.sendWithPromise('TextAnnot.setAnchorPosition', {
                text: this.id,
                anchor: t,
              })
            );
          }),
          (h.UnderlineAnnot.createFromObj = function (t) {
            return (
              f(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('underlineAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.UnderlineAnnot, t);
                })
            );
          }),
          (h.UnderlineAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('underlineAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.UnderlineAnnot, t);
                })
            );
          }),
          (h.UnderlineAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('underlineAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.UnderlineAnnot, t);
                })
            );
          }),
          (h.WatermarkAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('watermarkAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.WatermarkAnnot, t);
                })
            );
          }),
          (h.WatermarkAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('watermarkAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.WatermarkAnnot, t);
                })
            );
          }),
          (h.WatermarkAnnot.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, PDFNet.Rect)', [
                [t, 'SDFDoc'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('watermarkAnnotCreate', { doc: t.id, pos: e })
                .then(function (t) {
                  return _(h.WatermarkAnnot, t);
                })
            );
          }),
          (h.TextMarkupAnnot.createFromObj = function (t) {
            return (
              f(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('textMarkupAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.TextMarkupAnnot, t);
                })
            );
          }),
          (h.TextMarkupAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('textMarkupAnnotCreateFromAnnot', {
                  ann: t.id,
                })
                .then(function (t) {
                  return _(h.TextMarkupAnnot, t);
                })
            );
          }),
          (h.TextMarkupAnnot.prototype.getQuadPointCount = function () {
            return h.sendWithPromise('TextMarkupAnnot.getQuadPointCount', {
              textmarkup: this.id,
            });
          }),
          (h.TextMarkupAnnot.prototype.getQuadPoint = function (t) {
            return (
              f(arguments.length, 1, 'getQuadPoint', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('TextMarkupAnnot.getQuadPoint', {
                textmarkup: this.id,
                idx: t,
              })
            );
          }),
          (h.TextMarkupAnnot.prototype.setQuadPoint = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setQuadPoint',
                '(number, PDFNet.QuadPoint)',
                [
                  [t, 'number'],
                  [e, 'Structure', h.QuadPoint, 'QuadPoint'],
                ]
              ),
              F('setQuadPoint', [[e, 1]]),
              h.sendWithPromise('TextMarkupAnnot.setQuadPoint', {
                textmarkup: this.id,
                idx: t,
                qp: e,
              })
            );
          }),
          (h.WidgetAnnot.create = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'create',
                '(PDFNet.SDFDoc, PDFNet.Rect, PDFNet.Field)',
                [
                  [t, 'SDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'Structure', h.Field, 'Field'],
                ]
              ),
              F('create', [
                [e, 1],
                [n, 2],
              ]),
              (n.yieldFunction = 'WidgetAnnot.create'),
              h
                .sendWithPromise('widgetAnnotCreate', {
                  doc: t.id,
                  pos: e,
                  field: n,
                })
                .then(function (t) {
                  return (
                    (n.yieldFunction = void 0),
                    (t.result = _(h.WidgetAnnot, t.result)),
                    W(t.field, n),
                    t.result
                  );
                })
            );
          }),
          (h.WidgetAnnot.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('widgetAnnotCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.WidgetAnnot, t);
                })
            );
          }),
          (h.WidgetAnnot.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('widgetAnnotCreateFromAnnot', { ann: t.id })
                .then(function (t) {
                  return _(h.WidgetAnnot, t);
                })
            );
          }),
          (h.WidgetAnnot.prototype.getField = function () {
            return h
              .sendWithPromise('WidgetAnnot.getField', { widget: this.id })
              .then(function (t) {
                return new h.Field(t);
              });
          }),
          (h.WidgetAnnot.prototype.getHighlightingMode = function () {
            return h.sendWithPromise('WidgetAnnot.getHighlightingMode', {
              widget: this.id,
            });
          }),
          (h.WidgetAnnot.prototype.setHighlightingMode = function (t) {
            return (
              void 0 === t && (t = h.WidgetAnnot.HighlightingMode.e_invert),
              f(arguments.length, 0, 'setHighlightingMode', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('WidgetAnnot.setHighlightingMode', {
                widget: this.id,
                value: t,
              })
            );
          }),
          (h.WidgetAnnot.prototype.getAction = function () {
            return h
              .sendWithPromise('WidgetAnnot.getAction', { widget: this.id })
              .then(function (t) {
                return _(h.Action, t);
              });
          }),
          (h.WidgetAnnot.prototype.setAction = function (t) {
            return (
              f(arguments.length, 1, 'setAction', '(PDFNet.Action)', [
                [t, 'Object', h.Action, 'Action'],
              ]),
              h.sendWithPromise('WidgetAnnot.setAction', {
                widget: this.id,
                action: t.id,
              })
            );
          }),
          (h.WidgetAnnot.prototype.getBorderColor = function () {
            return h
              .sendWithPromise('WidgetAnnot.getBorderColor', {
                widget: this.id,
              })
              .then(function (t) {
                return D(h.ColorPt, t);
              });
          }),
          (h.WidgetAnnot.prototype.setBorderColor = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setBorderColor',
                '(PDFNet.ColorPt, number)',
                [
                  [t, 'Object', h.ColorPt, 'ColorPt'],
                  [e, 'number'],
                ]
              ),
              h.sendWithPromise('WidgetAnnot.setBorderColor', {
                widget: this.id,
                col: t.id,
                compnum: e,
              })
            );
          }),
          (h.WidgetAnnot.prototype.getBorderColorCompNum = function () {
            return h.sendWithPromise('WidgetAnnot.getBorderColorCompNum', {
              widget: this.id,
            });
          }),
          (h.WidgetAnnot.prototype.getBackgroundColorCompNum = function () {
            return h.sendWithPromise('WidgetAnnot.getBackgroundColorCompNum', {
              widget: this.id,
            });
          }),
          (h.WidgetAnnot.prototype.getBackgroundColor = function () {
            return h
              .sendWithPromise('WidgetAnnot.getBackgroundColor', {
                widget: this.id,
              })
              .then(function (t) {
                return D(h.ColorPt, t);
              });
          }),
          (h.WidgetAnnot.prototype.setBackgroundColor = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setBackgroundColor',
                '(PDFNet.ColorPt, number)',
                [
                  [t, 'Object', h.ColorPt, 'ColorPt'],
                  [e, 'number'],
                ]
              ),
              h.sendWithPromise('WidgetAnnot.setBackgroundColor', {
                widget: this.id,
                col: t.id,
                compnum: e,
              })
            );
          }),
          (h.WidgetAnnot.prototype.getStaticCaptionText = function () {
            return h.sendWithPromise('WidgetAnnot.getStaticCaptionText', {
              widget: this.id,
            });
          }),
          (h.WidgetAnnot.prototype.setStaticCaptionText = function (t) {
            return (
              f(arguments.length, 1, 'setStaticCaptionText', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('WidgetAnnot.setStaticCaptionText', {
                widget: this.id,
                contents: t,
              })
            );
          }),
          (h.WidgetAnnot.prototype.getRolloverCaptionText = function () {
            return h.sendWithPromise('WidgetAnnot.getRolloverCaptionText', {
              widget: this.id,
            });
          }),
          (h.WidgetAnnot.prototype.setRolloverCaptionText = function (t) {
            return (
              f(arguments.length, 1, 'setRolloverCaptionText', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('WidgetAnnot.setRolloverCaptionText', {
                widget: this.id,
                contents: t,
              })
            );
          }),
          (h.WidgetAnnot.prototype.getMouseDownCaptionText = function () {
            return h.sendWithPromise('WidgetAnnot.getMouseDownCaptionText', {
              widget: this.id,
            });
          }),
          (h.WidgetAnnot.prototype.setMouseDownCaptionText = function (t) {
            return (
              f(arguments.length, 1, 'setMouseDownCaptionText', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('WidgetAnnot.setMouseDownCaptionText', {
                widget: this.id,
                contents: t,
              })
            );
          }),
          (h.WidgetAnnot.prototype.getStaticIcon = function () {
            return h
              .sendWithPromise('WidgetAnnot.getStaticIcon', { widget: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.WidgetAnnot.prototype.setStaticIcon = function (t) {
            return (
              f(arguments.length, 1, 'setStaticIcon', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('WidgetAnnot.setStaticIcon', {
                widget: this.id,
                icon: t.id,
              })
            );
          }),
          (h.WidgetAnnot.prototype.getRolloverIcon = function () {
            return h
              .sendWithPromise('WidgetAnnot.getRolloverIcon', {
                widget: this.id,
              })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.WidgetAnnot.prototype.setRolloverIcon = function (t) {
            return (
              f(arguments.length, 1, 'setRolloverIcon', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('WidgetAnnot.setRolloverIcon', {
                widget: this.id,
                icon: t.id,
              })
            );
          }),
          (h.WidgetAnnot.prototype.getMouseDownIcon = function () {
            return h
              .sendWithPromise('WidgetAnnot.getMouseDownIcon', {
                widget: this.id,
              })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.WidgetAnnot.prototype.setMouseDownIcon = function (t) {
            return (
              f(arguments.length, 1, 'setMouseDownIcon', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('WidgetAnnot.setMouseDownIcon', {
                widget: this.id,
                icon: t.id,
              })
            );
          }),
          (h.WidgetAnnot.prototype.getScaleType = function () {
            return h.sendWithPromise('WidgetAnnot.getScaleType', {
              widget: this.id,
            });
          }),
          (h.WidgetAnnot.prototype.setScaleType = function (t) {
            return (
              f(arguments.length, 1, 'setScaleType', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('WidgetAnnot.setScaleType', {
                widget: this.id,
                st: t,
              })
            );
          }),
          (h.WidgetAnnot.prototype.getIconCaptionRelation = function () {
            return h.sendWithPromise('WidgetAnnot.getIconCaptionRelation', {
              widget: this.id,
            });
          }),
          (h.WidgetAnnot.prototype.setIconCaptionRelation = function (t) {
            return (
              f(arguments.length, 1, 'setIconCaptionRelation', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('WidgetAnnot.setIconCaptionRelation', {
                widget: this.id,
                icr: t,
              })
            );
          }),
          (h.WidgetAnnot.prototype.getScaleCondition = function () {
            return h.sendWithPromise('WidgetAnnot.getScaleCondition', {
              widget: this.id,
            });
          }),
          (h.WidgetAnnot.prototype.setScaleCondition = function (t) {
            return (
              f(arguments.length, 1, 'setScaleCondition', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('WidgetAnnot.setScaleCondition', {
                widget: this.id,
                sd: t,
              })
            );
          }),
          (h.WidgetAnnot.prototype.getFitFull = function () {
            return h.sendWithPromise('WidgetAnnot.getFitFull', {
              widget: this.id,
            });
          }),
          (h.WidgetAnnot.prototype.setFitFull = function (t) {
            return (
              f(arguments.length, 1, 'setFitFull', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('WidgetAnnot.setFitFull', {
                widget: this.id,
                ff: t,
              })
            );
          }),
          (h.WidgetAnnot.prototype.getHIconLeftOver = function () {
            return h.sendWithPromise('WidgetAnnot.getHIconLeftOver', {
              widget: this.id,
            });
          }),
          (h.WidgetAnnot.prototype.setHIconLeftOver = function (t) {
            return (
              f(arguments.length, 1, 'setHIconLeftOver', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('WidgetAnnot.setHIconLeftOver', {
                widget: this.id,
                hl: t,
              })
            );
          }),
          (h.WidgetAnnot.prototype.getVIconLeftOver = function () {
            return h.sendWithPromise('WidgetAnnot.getVIconLeftOver', {
              widget: this.id,
            });
          }),
          (h.WidgetAnnot.prototype.setVIconLeftOver = function (t) {
            return (
              f(arguments.length, 1, 'setVIconLeftOver', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('WidgetAnnot.setVIconLeftOver', {
                widget: this.id,
                vl: t,
              })
            );
          }),
          (h.WidgetAnnot.prototype.setFontSize = function (t) {
            return (
              f(arguments.length, 1, 'setFontSize', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('WidgetAnnot.setFontSize', {
                widget: this.id,
                font_size: t,
              })
            );
          }),
          (h.WidgetAnnot.prototype.setTextColor = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setTextColor',
                '(PDFNet.ColorPt, number)',
                [
                  [t, 'Object', h.ColorPt, 'ColorPt'],
                  [e, 'number'],
                ]
              ),
              h.sendWithPromise('WidgetAnnot.setTextColor', {
                widget: this.id,
                color: t.id,
                col_comp: e,
              })
            );
          }),
          (h.WidgetAnnot.prototype.setFont = function (t) {
            return (
              f(arguments.length, 1, 'setFont', '(PDFNet.Font)', [
                [t, 'Object', h.Font, 'Font'],
              ]),
              h.sendWithPromise('WidgetAnnot.setFont', {
                widget: this.id,
                font: t.id,
              })
            );
          }),
          (h.WidgetAnnot.prototype.getFontSize = function () {
            return h.sendWithPromise('WidgetAnnot.getFontSize', {
              widget: this.id,
            });
          }),
          (h.WidgetAnnot.prototype.getTextColor = function () {
            return h
              .sendWithPromise('WidgetAnnot.getTextColor', { widget: this.id })
              .then(function (t) {
                return (t.col = D(h.ColorPt, t.col)), t;
              });
          }),
          (h.WidgetAnnot.prototype.getFont = function () {
            return h
              .sendWithPromise('WidgetAnnot.getFont', { widget: this.id })
              .then(function (t) {
                return D(h.Font, t);
              });
          }),
          (h.SignatureWidget.create = function (t, e, n) {
            return (
              void 0 === n && (n = ''),
              f(
                arguments.length,
                2,
                'create',
                '(PDFNet.PDFDoc, PDFNet.Rect, string)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'string'],
                ]
              ),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('signatureWidgetCreate', {
                  doc: t.id,
                  pos: e,
                  field_name: n,
                })
                .then(function (t) {
                  return _(h.SignatureWidget, t);
                })
            );
          }),
          (h.SignatureWidget.createWithField = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'createWithField',
                '(PDFNet.PDFDoc, PDFNet.Rect, PDFNet.Field)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'Structure', h.Field, 'Field'],
                ]
              ),
              F('createWithField', [
                [e, 1],
                [n, 2],
              ]),
              h
                .sendWithPromise('signatureWidgetCreateWithField', {
                  doc: t.id,
                  pos: e,
                  field: n,
                })
                .then(function (t) {
                  return _(h.SignatureWidget, t);
                })
            );
          }),
          (h.SignatureWidget.createWithDigitalSignatureField = function (
            t,
            e,
            n
          ) {
            return (
              f(
                arguments.length,
                3,
                'createWithDigitalSignatureField',
                '(PDFNet.PDFDoc, PDFNet.Rect, PDFNet.DigitalSignatureField)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [
                    n,
                    'Structure',
                    h.DigitalSignatureField,
                    'DigitalSignatureField',
                  ],
                ]
              ),
              F('createWithDigitalSignatureField', [
                [e, 1],
                [n, 2],
              ]),
              h
                .sendWithPromise(
                  'signatureWidgetCreateWithDigitalSignatureField',
                  { doc: t.id, pos: e, field: n }
                )
                .then(function (t) {
                  return _(h.SignatureWidget, t);
                })
            );
          }),
          (h.SignatureWidget.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('signatureWidgetCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.SignatureWidget, t);
                })
            );
          }),
          (h.SignatureWidget.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('signatureWidgetCreateFromAnnot', {
                  annot: t.id,
                })
                .then(function (t) {
                  return _(h.SignatureWidget, t);
                })
            );
          }),
          (h.SignatureWidget.prototype.createSignatureAppearance = function (
            t
          ) {
            return (
              f(
                arguments.length,
                1,
                'createSignatureAppearance',
                '(PDFNet.Image)',
                [[t, 'Object', h.Image, 'Image']]
              ),
              h.sendWithPromise('SignatureWidget.createSignatureAppearance', {
                self: this.id,
                img: t.id,
              })
            );
          }),
          (h.SignatureWidget.prototype.getDigitalSignatureField = function () {
            return h
              .sendWithPromise('SignatureWidget.getDigitalSignatureField', {
                self: this.id,
              })
              .then(function (t) {
                return new h.DigitalSignatureField(t);
              });
          }),
          (h.ComboBoxWidget.create = function (t, e, n) {
            return (
              void 0 === n && (n = ''),
              f(
                arguments.length,
                2,
                'create',
                '(PDFNet.PDFDoc, PDFNet.Rect, string)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'string'],
                ]
              ),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('comboBoxWidgetCreate', {
                  doc: t.id,
                  pos: e,
                  field_name: n,
                })
                .then(function (t) {
                  return _(h.ComboBoxWidget, t);
                })
            );
          }),
          (h.ComboBoxWidget.createWithField = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'createWithField',
                '(PDFNet.PDFDoc, PDFNet.Rect, PDFNet.Field)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'Structure', h.Field, 'Field'],
                ]
              ),
              F('createWithField', [
                [e, 1],
                [n, 2],
              ]),
              h
                .sendWithPromise('comboBoxWidgetCreateWithField', {
                  doc: t.id,
                  pos: e,
                  field: n,
                })
                .then(function (t) {
                  return _(h.ComboBoxWidget, t);
                })
            );
          }),
          (h.ComboBoxWidget.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('comboBoxWidgetCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.ComboBoxWidget, t);
                })
            );
          }),
          (h.ComboBoxWidget.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('comboBoxWidgetCreateFromAnnot', {
                  annot: t.id,
                })
                .then(function (t) {
                  return _(h.ComboBoxWidget, t);
                })
            );
          }),
          (h.ComboBoxWidget.prototype.addOption = function (t) {
            return (
              f(arguments.length, 1, 'addOption', '(string)', [[t, 'string']]),
              h.sendWithPromise('ComboBoxWidget.addOption', {
                combobox: this.id,
                value: t,
              })
            );
          }),
          (h.ComboBoxWidget.prototype.addOptions = function (t) {
            return (
              f(arguments.length, 1, 'addOptions', '(Array<string>)', [
                [t, 'Array'],
              ]),
              h.sendWithPromise('ComboBoxWidget.addOptions', {
                combobox: this.id,
                opts_list: t,
              })
            );
          }),
          (h.ComboBoxWidget.prototype.setSelectedOption = function (t) {
            return (
              f(arguments.length, 1, 'setSelectedOption', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('ComboBoxWidget.setSelectedOption', {
                combobox: this.id,
                value: t,
              })
            );
          }),
          (h.ComboBoxWidget.prototype.getSelectedOption = function () {
            return h.sendWithPromise('ComboBoxWidget.getSelectedOption', {
              combobox: this.id,
            });
          }),
          (h.ComboBoxWidget.prototype.replaceOptions = function (t) {
            return (
              f(arguments.length, 1, 'replaceOptions', '(Array<string>)', [
                [t, 'Array'],
              ]),
              h.sendWithPromise('ComboBoxWidget.replaceOptions', {
                combobox: this.id,
                new_opts_list: t,
              })
            );
          }),
          (h.ComboBoxWidget.prototype.removeOption = function (t) {
            return (
              f(arguments.length, 1, 'removeOption', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('ComboBoxWidget.removeOption', {
                combobox: this.id,
                value: t,
              })
            );
          }),
          (h.ListBoxWidget.create = function (t, e, n) {
            return (
              void 0 === n && (n = ''),
              f(
                arguments.length,
                2,
                'create',
                '(PDFNet.PDFDoc, PDFNet.Rect, string)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'string'],
                ]
              ),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('listBoxWidgetCreate', {
                  doc: t.id,
                  pos: e,
                  field_name: n,
                })
                .then(function (t) {
                  return _(h.ListBoxWidget, t);
                })
            );
          }),
          (h.ListBoxWidget.createWithField = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'createWithField',
                '(PDFNet.PDFDoc, PDFNet.Rect, PDFNet.Field)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'Structure', h.Field, 'Field'],
                ]
              ),
              F('createWithField', [
                [e, 1],
                [n, 2],
              ]),
              h
                .sendWithPromise('listBoxWidgetCreateWithField', {
                  doc: t.id,
                  pos: e,
                  field: n,
                })
                .then(function (t) {
                  return _(h.ListBoxWidget, t);
                })
            );
          }),
          (h.ListBoxWidget.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('listBoxWidgetCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.ListBoxWidget, t);
                })
            );
          }),
          (h.ListBoxWidget.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('listBoxWidgetCreateFromAnnot', {
                  annot: t.id,
                })
                .then(function (t) {
                  return _(h.ListBoxWidget, t);
                })
            );
          }),
          (h.ListBoxWidget.prototype.addOption = function (t) {
            return (
              f(arguments.length, 1, 'addOption', '(string)', [[t, 'string']]),
              h.sendWithPromise('ListBoxWidget.addOption', {
                listbox: this.id,
                value: t,
              })
            );
          }),
          (h.ListBoxWidget.prototype.addOptions = function (t) {
            return (
              f(arguments.length, 1, 'addOptions', '(Array<string>)', [
                [t, 'Array'],
              ]),
              h.sendWithPromise('ListBoxWidget.addOptions', {
                listbox: this.id,
                opts_list: t,
              })
            );
          }),
          (h.ListBoxWidget.prototype.setSelectedOptions = function (t) {
            return (
              f(arguments.length, 1, 'setSelectedOptions', '(Array<string>)', [
                [t, 'Array'],
              ]),
              h.sendWithPromise('ListBoxWidget.setSelectedOptions', {
                listbox: this.id,
                selected_opts_list: t,
              })
            );
          }),
          (h.ListBoxWidget.prototype.replaceOptions = function (t) {
            return (
              f(arguments.length, 1, 'replaceOptions', '(Array<string>)', [
                [t, 'Array'],
              ]),
              h.sendWithPromise('ListBoxWidget.replaceOptions', {
                listbox: this.id,
                new_opts_list: t,
              })
            );
          }),
          (h.ListBoxWidget.prototype.removeOption = function (t) {
            return (
              f(arguments.length, 1, 'removeOption', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('ListBoxWidget.removeOption', {
                listbox: this.id,
                value: t,
              })
            );
          }),
          (h.TextWidget.create = function (t, e, n) {
            return (
              void 0 === n && (n = ''),
              f(
                arguments.length,
                2,
                'create',
                '(PDFNet.PDFDoc, PDFNet.Rect, string)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'string'],
                ]
              ),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('textWidgetCreate', {
                  doc: t.id,
                  pos: e,
                  field_name: n,
                })
                .then(function (t) {
                  return _(h.TextWidget, t);
                })
            );
          }),
          (h.TextWidget.createWithField = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'createWithField',
                '(PDFNet.PDFDoc, PDFNet.Rect, PDFNet.Field)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'Structure', h.Field, 'Field'],
                ]
              ),
              F('createWithField', [
                [e, 1],
                [n, 2],
              ]),
              h
                .sendWithPromise('textWidgetCreateWithField', {
                  doc: t.id,
                  pos: e,
                  field: n,
                })
                .then(function (t) {
                  return _(h.TextWidget, t);
                })
            );
          }),
          (h.TextWidget.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('textWidgetCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.TextWidget, t);
                })
            );
          }),
          (h.TextWidget.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('textWidgetCreateFromAnnot', { annot: t.id })
                .then(function (t) {
                  return _(h.TextWidget, t);
                })
            );
          }),
          (h.TextWidget.prototype.setText = function (t) {
            return (
              f(arguments.length, 1, 'setText', '(string)', [[t, 'string']]),
              h.sendWithPromise('TextWidget.setText', {
                widget: this.id,
                text: t,
              })
            );
          }),
          (h.TextWidget.prototype.getText = function () {
            return h.sendWithPromise('TextWidget.getText', { widget: this.id });
          }),
          (h.CheckBoxWidget.create = function (t, e, n) {
            return (
              void 0 === n && (n = ''),
              f(
                arguments.length,
                2,
                'create',
                '(PDFNet.PDFDoc, PDFNet.Rect, string)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'string'],
                ]
              ),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('checkBoxWidgetCreate', {
                  doc: t.id,
                  pos: e,
                  field_name: n,
                })
                .then(function (t) {
                  return _(h.CheckBoxWidget, t);
                })
            );
          }),
          (h.CheckBoxWidget.createWithField = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'createWithField',
                '(PDFNet.PDFDoc, PDFNet.Rect, PDFNet.Field)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'Structure', h.Field, 'Field'],
                ]
              ),
              F('createWithField', [
                [e, 1],
                [n, 2],
              ]),
              h
                .sendWithPromise('checkBoxWidgetCreateWithField', {
                  doc: t.id,
                  pos: e,
                  field: n,
                })
                .then(function (t) {
                  return _(h.CheckBoxWidget, t);
                })
            );
          }),
          (h.CheckBoxWidget.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('checkBoxWidgetCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.CheckBoxWidget, t);
                })
            );
          }),
          (h.CheckBoxWidget.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('checkBoxWidgetCreateFromAnnot', {
                  annot: t.id,
                })
                .then(function (t) {
                  return _(h.CheckBoxWidget, t);
                })
            );
          }),
          (h.CheckBoxWidget.prototype.isChecked = function () {
            return h.sendWithPromise('CheckBoxWidget.isChecked', {
              button: this.id,
            });
          }),
          (h.CheckBoxWidget.prototype.setChecked = function (t) {
            return (
              f(arguments.length, 1, 'setChecked', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('CheckBoxWidget.setChecked', {
                button: this.id,
                checked: t,
              })
            );
          }),
          (h.RadioButtonWidget.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('radioButtonWidgetCreateFromObj', { d: t.id })
                .then(function (t) {
                  return _(h.RadioButtonWidget, t);
                })
            );
          }),
          (h.RadioButtonWidget.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('radioButtonWidgetCreateFromAnnot', {
                  annot: t.id,
                })
                .then(function (t) {
                  return _(h.RadioButtonWidget, t);
                })
            );
          }),
          (h.RadioButtonWidget.prototype.isEnabled = function () {
            return h.sendWithPromise('RadioButtonWidget.isEnabled', {
              button: this.id,
            });
          }),
          (h.RadioButtonWidget.prototype.enableButton = function () {
            return h.sendWithPromise('RadioButtonWidget.enableButton', {
              button: this.id,
            });
          }),
          (h.RadioButtonWidget.prototype.getGroup = function () {
            return h
              .sendWithPromise('RadioButtonWidget.getGroup', {
                button: this.id,
              })
              .then(function (t) {
                return D(h.RadioButtonGroup, t);
              });
          }),
          (h.PushButtonWidget.create = function (t, e, n) {
            return (
              void 0 === n && (n = ''),
              f(
                arguments.length,
                2,
                'create',
                '(PDFNet.PDFDoc, PDFNet.Rect, string)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'string'],
                ]
              ),
              F('create', [[e, 1]]),
              h
                .sendWithPromise('pushButtonWidgetCreate', {
                  doc: t.id,
                  pos: e,
                  field_name: n,
                })
                .then(function (t) {
                  return _(h.PushButtonWidget, t);
                })
            );
          }),
          (h.PushButtonWidget.createWithField = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'createWithField',
                '(PDFNet.PDFDoc, PDFNet.Rect, PDFNet.Field)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'Structure', h.Field, 'Field'],
                ]
              ),
              F('createWithField', [
                [e, 1],
                [n, 2],
              ]),
              h
                .sendWithPromise('pushButtonWidgetCreateWithField', {
                  doc: t.id,
                  pos: e,
                  field: n,
                })
                .then(function (t) {
                  return _(h.PushButtonWidget, t);
                })
            );
          }),
          (h.PushButtonWidget.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('pushButtonWidgetCreateFromObj', { obj: t.id })
                .then(function (t) {
                  return _(h.PushButtonWidget, t);
                })
            );
          }),
          (h.PushButtonWidget.createFromAnnot = function (t) {
            return (
              f(arguments.length, 1, 'createFromAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h
                .sendWithPromise('pushButtonWidgetCreateFromAnnot', {
                  annot: t.id,
                })
                .then(function (t) {
                  return _(h.PushButtonWidget, t);
                })
            );
          }),
          (h.Bookmark.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.PDFDoc, string)', [
                [t, 'PDFDoc'],
                [e, 'string'],
              ]),
              h
                .sendWithPromise('bookmarkCreate', {
                  in_doc: t.id,
                  in_title: e,
                })
                .then(function (t) {
                  return _(h.Bookmark, t);
                })
            );
          }),
          (h.Bookmark.createFromObj = function (t) {
            return (
              f(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('bookmarkCreateFromObj', {
                  in_bookmark_dict: t.id,
                })
                .then(function (t) {
                  return _(h.Bookmark, t);
                })
            );
          }),
          (h.Bookmark.prototype.copy = function () {
            return h
              .sendWithPromise('Bookmark.copy', { in_bookmark: this.id })
              .then(function (t) {
                return _(h.Bookmark, t);
              });
          }),
          (h.Bookmark.prototype.compare = function (t) {
            return (
              f(arguments.length, 1, 'compare', '(PDFNet.Bookmark)', [
                [t, 'Object', h.Bookmark, 'Bookmark'],
              ]),
              h.sendWithPromise('Bookmark.compare', {
                bm: this.id,
                in_bookmark: t.id,
              })
            );
          }),
          (h.Bookmark.prototype.isValid = function () {
            return h.sendWithPromise('Bookmark.isValid', { bm: this.id });
          }),
          (h.Bookmark.prototype.hasChildren = function () {
            return h.sendWithPromise('Bookmark.hasChildren', { bm: this.id });
          }),
          (h.Bookmark.prototype.getNext = function () {
            return h
              .sendWithPromise('Bookmark.getNext', { bm: this.id })
              .then(function (t) {
                return _(h.Bookmark, t);
              });
          }),
          (h.Bookmark.prototype.getPrev = function () {
            return h
              .sendWithPromise('Bookmark.getPrev', { bm: this.id })
              .then(function (t) {
                return _(h.Bookmark, t);
              });
          }),
          (h.Bookmark.prototype.getFirstChild = function () {
            return h
              .sendWithPromise('Bookmark.getFirstChild', { bm: this.id })
              .then(function (t) {
                return _(h.Bookmark, t);
              });
          }),
          (h.Bookmark.prototype.getLastChild = function () {
            return h
              .sendWithPromise('Bookmark.getLastChild', { bm: this.id })
              .then(function (t) {
                return _(h.Bookmark, t);
              });
          }),
          (h.Bookmark.prototype.getParent = function () {
            return h
              .sendWithPromise('Bookmark.getParent', { bm: this.id })
              .then(function (t) {
                return _(h.Bookmark, t);
              });
          }),
          (h.Bookmark.prototype.find = function (t) {
            return (
              f(arguments.length, 1, 'find', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('Bookmark.find', { bm: this.id, in_title: t })
                .then(function (t) {
                  return _(h.Bookmark, t);
                })
            );
          }),
          (h.Bookmark.prototype.addNewChild = function (t) {
            return (
              f(arguments.length, 1, 'addNewChild', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('Bookmark.addNewChild', {
                  bm: this.id,
                  in_title: t,
                })
                .then(function (t) {
                  return _(h.Bookmark, t);
                })
            );
          }),
          (h.Bookmark.prototype.addChild = function (t) {
            return (
              f(arguments.length, 1, 'addChild', '(PDFNet.Bookmark)', [
                [t, 'Object', h.Bookmark, 'Bookmark'],
              ]),
              h.sendWithPromise('Bookmark.addChild', {
                bm: this.id,
                in_bookmark: t.id,
              })
            );
          }),
          (h.Bookmark.prototype.addNewNext = function (t) {
            return (
              f(arguments.length, 1, 'addNewNext', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('Bookmark.addNewNext', {
                  bm: this.id,
                  in_title: t,
                })
                .then(function (t) {
                  return _(h.Bookmark, t);
                })
            );
          }),
          (h.Bookmark.prototype.addNext = function (t) {
            return (
              f(arguments.length, 1, 'addNext', '(PDFNet.Bookmark)', [
                [t, 'Object', h.Bookmark, 'Bookmark'],
              ]),
              h.sendWithPromise('Bookmark.addNext', {
                bm: this.id,
                in_bookmark: t.id,
              })
            );
          }),
          (h.Bookmark.prototype.addNewPrev = function (t) {
            return (
              f(arguments.length, 1, 'addNewPrev', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('Bookmark.addNewPrev', {
                  bm: this.id,
                  in_title: t,
                })
                .then(function (t) {
                  return _(h.Bookmark, t);
                })
            );
          }),
          (h.Bookmark.prototype.addPrev = function (t) {
            return (
              f(arguments.length, 1, 'addPrev', '(PDFNet.Bookmark)', [
                [t, 'Object', h.Bookmark, 'Bookmark'],
              ]),
              h.sendWithPromise('Bookmark.addPrev', {
                bm: this.id,
                in_bookmark: t.id,
              })
            );
          }),
          (h.Bookmark.prototype.delete = function () {
            return h.sendWithPromise('Bookmark.delete', { bm: this.id });
          }),
          (h.Bookmark.prototype.unlink = function () {
            return h.sendWithPromise('Bookmark.unlink', { bm: this.id });
          }),
          (h.Bookmark.prototype.getIndent = function () {
            return h.sendWithPromise('Bookmark.getIndent', { bm: this.id });
          }),
          (h.Bookmark.prototype.isOpen = function () {
            return h.sendWithPromise('Bookmark.isOpen', { bm: this.id });
          }),
          (h.Bookmark.prototype.setOpen = function (t) {
            return (
              f(arguments.length, 1, 'setOpen', '(boolean)', [[t, 'boolean']]),
              h.sendWithPromise('Bookmark.setOpen', { bm: this.id, in_open: t })
            );
          }),
          (h.Bookmark.prototype.getOpenCount = function () {
            return h.sendWithPromise('Bookmark.getOpenCount', { bm: this.id });
          }),
          (h.Bookmark.prototype.getTitle = function () {
            return h.sendWithPromise('Bookmark.getTitle', { bm: this.id });
          }),
          (h.Bookmark.prototype.getTitleObj = function () {
            return h
              .sendWithPromise('Bookmark.getTitleObj', { bm: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Bookmark.prototype.setTitle = function (t) {
            return (
              f(arguments.length, 1, 'setTitle', '(string)', [[t, 'string']]),
              h.sendWithPromise('Bookmark.setTitle', { bm: this.id, title: t })
            );
          }),
          (h.Bookmark.prototype.getAction = function () {
            return h
              .sendWithPromise('Bookmark.getAction', { bm: this.id })
              .then(function (t) {
                return _(h.Action, t);
              });
          }),
          (h.Bookmark.prototype.setAction = function (t) {
            return (
              f(arguments.length, 1, 'setAction', '(PDFNet.Action)', [
                [t, 'Object', h.Action, 'Action'],
              ]),
              h.sendWithPromise('Bookmark.setAction', {
                bm: this.id,
                in_action: t.id,
              })
            );
          }),
          (h.Bookmark.prototype.removeAction = function () {
            return h.sendWithPromise('Bookmark.removeAction', { bm: this.id });
          }),
          (h.Bookmark.prototype.getFlags = function () {
            return h.sendWithPromise('Bookmark.getFlags', { bm: this.id });
          }),
          (h.Bookmark.prototype.setFlags = function (t) {
            return (
              f(arguments.length, 1, 'setFlags', '(number)', [[t, 'number']]),
              h.sendWithPromise('Bookmark.setFlags', {
                bm: this.id,
                in_flags: t,
              })
            );
          }),
          (h.Bookmark.prototype.getColor = function () {
            return h.sendWithPromise('Bookmark.getColor', { bm: this.id });
          }),
          (h.Bookmark.prototype.setColor = function (t, e, n) {
            return (
              void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === n && (n = 0),
              f(arguments.length, 0, 'setColor', '(number, number, number)', [
                [t, 'number'],
                [e, 'number'],
                [n, 'number'],
              ]),
              h.sendWithPromise('Bookmark.setColor', {
                bm: this.id,
                in_r: t,
                in_g: e,
                in_b: n,
              })
            );
          }),
          (h.Bookmark.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('Bookmark.getSDFObj', { bm: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.ColorPt.init = function (t, e, n, i) {
            return (
              void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === n && (n = 0),
              void 0 === i && (i = 0),
              f(
                arguments.length,
                0,
                'init',
                '(number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                ]
              ),
              h
                .sendWithPromise('colorPtInit', { x: t, y: e, z: n, w: i })
                .then(function (t) {
                  return D(h.ColorPt, t);
                })
            );
          }),
          (h.ColorPt.prototype.compare = function (t) {
            return (
              f(arguments.length, 1, 'compare', '(PDFNet.ColorPt)', [
                [t, 'Object', h.ColorPt, 'ColorPt'],
              ]),
              h.sendWithPromise('ColorPt.compare', {
                left: this.id,
                right: t.id,
              })
            );
          }),
          (h.ColorPt.prototype.set = function (t, e, n, i) {
            return (
              void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === n && (n = 0),
              void 0 === i && (i = 0),
              f(
                arguments.length,
                0,
                'set',
                '(number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                ]
              ),
              h.sendWithPromise('ColorPt.set', {
                cp: this.id,
                x: t,
                y: e,
                z: n,
                w: i,
              })
            );
          }),
          (h.ColorPt.prototype.setByIndex = function (t, e) {
            return (
              f(arguments.length, 2, 'setByIndex', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h.sendWithPromise('ColorPt.setByIndex', {
                cp: this.id,
                colorant_index: t,
                colorant_value: e,
              })
            );
          }),
          (h.ColorPt.prototype.get = function (t) {
            return (
              f(arguments.length, 1, 'get', '(number)', [[t, 'number']]),
              h.sendWithPromise('ColorPt.get', {
                cp: this.id,
                colorant_index: t,
              })
            );
          }),
          (h.ColorPt.prototype.setColorantNum = function (t) {
            return (
              f(arguments.length, 1, 'setColorantNum', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('ColorPt.setColorantNum', {
                cp: this.id,
                num: t,
              })
            );
          }),
          (h.ColorSpace.createDeviceGray = function () {
            return h
              .sendWithPromise('colorSpaceCreateDeviceGray', {})
              .then(function (t) {
                return D(h.ColorSpace, t);
              });
          }),
          (h.ColorSpace.createDeviceRGB = function () {
            return h
              .sendWithPromise('colorSpaceCreateDeviceRGB', {})
              .then(function (t) {
                return D(h.ColorSpace, t);
              });
          }),
          (h.ColorSpace.createDeviceCMYK = function () {
            return h
              .sendWithPromise('colorSpaceCreateDeviceCMYK', {})
              .then(function (t) {
                return D(h.ColorSpace, t);
              });
          }),
          (h.ColorSpace.createPattern = function () {
            return h
              .sendWithPromise('colorSpaceCreatePattern', {})
              .then(function (t) {
                return D(h.ColorSpace, t);
              });
          }),
          (h.ColorSpace.create = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'create', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('colorSpaceCreate', { color_space: t.id })
                .then(function (t) {
                  return D(h.ColorSpace, t);
                })
            );
          }),
          (h.ColorSpace.createICCFromFilter = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createICCFromFilter',
                '(PDFNet.SDFDoc, PDFNet.Filter)',
                [
                  [t, 'SDFDoc'],
                  [e, 'Object', h.Filter, 'Filter'],
                ]
              ),
              0 != e.id && O(e.id),
              h
                .sendWithPromise('colorSpaceCreateICCFromFilter', {
                  doc: t.id,
                  no_own_filter: e.id,
                })
                .then(function (t) {
                  return D(h.ColorSpace, t);
                })
            );
          }),
          (h.ColorSpace.createICCFromBuffer = function (t, e) {
            f(
              arguments.length,
              2,
              'createICCFromBuffer',
              '(PDFNet.SDFDoc, ArrayBuffer|TypedArray)',
              [
                [t, 'SDFDoc'],
                [e, 'ArrayBuffer'],
              ]
            );
            var n = b(e, !1);
            return h
              .sendWithPromise('colorSpaceCreateICCFromBuffer', {
                doc: t.id,
                buf: n,
              })
              .then(function (t) {
                return D(h.ColorSpace, t);
              });
          }),
          (h.ColorSpace.getComponentNumFromObj = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'getComponentNumFromObj',
                '(number, PDFNet.Obj)',
                [
                  [t, 'number'],
                  [e, 'Object', h.Obj, 'Obj'],
                ]
              ),
              h.sendWithPromise('colorSpaceGetComponentNumFromObj', {
                cs_type: t,
                cs_obj: e.id,
              })
            );
          }),
          (h.ColorSpace.getTypeFromObj = function (t) {
            return (
              f(arguments.length, 1, 'getTypeFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('colorSpaceGetTypeFromObj', { cs_obj: t.id })
            );
          }),
          (h.ColorSpace.prototype.getType = function () {
            return h.sendWithPromise('ColorSpace.getType', { cs: this.id });
          }),
          (h.ColorSpace.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('ColorSpace.getSDFObj', { cs: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.ColorSpace.prototype.getComponentNum = function () {
            return h.sendWithPromise('ColorSpace.getComponentNum', {
              cs: this.id,
            });
          }),
          (h.ColorSpace.prototype.initColor = function () {
            return h
              .sendWithPromise('ColorSpace.initColor', { cs: this.id })
              .then(function (t) {
                return D(h.ColorPt, t);
              });
          }),
          (h.ColorSpace.prototype.initComponentRanges = function (t) {
            return (
              f(arguments.length, 1, 'initComponentRanges', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('ColorSpace.initComponentRanges', {
                cs: this.id,
                num_comps: t,
              })
            );
          }),
          (h.ColorSpace.prototype.convert2Gray = function (t) {
            return (
              f(arguments.length, 1, 'convert2Gray', '(PDFNet.ColorPt)', [
                [t, 'Object', h.ColorPt, 'ColorPt'],
              ]),
              h
                .sendWithPromise('ColorSpace.convert2Gray', {
                  cs: this.id,
                  in_color: t.id,
                })
                .then(function (t) {
                  return D(h.ColorPt, t);
                })
            );
          }),
          (h.ColorSpace.prototype.convert2RGB = function (t) {
            return (
              f(arguments.length, 1, 'convert2RGB', '(PDFNet.ColorPt)', [
                [t, 'Object', h.ColorPt, 'ColorPt'],
              ]),
              h
                .sendWithPromise('ColorSpace.convert2RGB', {
                  cs: this.id,
                  in_color: t.id,
                })
                .then(function (t) {
                  return D(h.ColorPt, t);
                })
            );
          }),
          (h.ColorSpace.prototype.convert2CMYK = function (t) {
            return (
              f(arguments.length, 1, 'convert2CMYK', '(PDFNet.ColorPt)', [
                [t, 'Object', h.ColorPt, 'ColorPt'],
              ]),
              h
                .sendWithPromise('ColorSpace.convert2CMYK', {
                  cs: this.id,
                  in_color: t.id,
                })
                .then(function (t) {
                  return D(h.ColorPt, t);
                })
            );
          }),
          (h.ColorSpace.prototype.getAlternateColorSpace = function () {
            return h
              .sendWithPromise('ColorSpace.getAlternateColorSpace', {
                cs: this.id,
              })
              .then(function (t) {
                return D(h.ColorSpace, t);
              });
          }),
          (h.ColorSpace.prototype.getBaseColorSpace = function () {
            return h
              .sendWithPromise('ColorSpace.getBaseColorSpace', { cs: this.id })
              .then(function (t) {
                return D(h.ColorSpace, t);
              });
          }),
          (h.ColorSpace.prototype.getHighVal = function () {
            return h.sendWithPromise('ColorSpace.getHighVal', { cs: this.id });
          }),
          (h.ColorSpace.prototype.getLookupTable = function () {
            return h.sendWithPromise('ColorSpace.getLookupTable', {
              cs: this.id,
            });
          }),
          (h.ColorSpace.prototype.getBaseColor = function (t) {
            return (
              f(arguments.length, 1, 'getBaseColor', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('ColorSpace.getBaseColor', {
                  cs: this.id,
                  color_idx: t,
                })
                .then(function (t) {
                  return D(h.ColorPt, t);
                })
            );
          }),
          (h.ColorSpace.prototype.getTintFunction = function () {
            return h
              .sendWithPromise('ColorSpace.getTintFunction', { cs: this.id })
              .then(function (t) {
                return D(h.Function, t);
              });
          }),
          (h.ColorSpace.prototype.isAll = function () {
            return h.sendWithPromise('ColorSpace.isAll', { cs: this.id });
          }),
          (h.ColorSpace.prototype.isNone = function () {
            return h.sendWithPromise('ColorSpace.isNone', { cs: this.id });
          }),
          (h.ContentReplacer.create = function () {
            return h
              .sendWithPromise('contentReplacerCreate', {})
              .then(function (t) {
                return D(h.ContentReplacer, t);
              });
          }),
          (h.ContentReplacer.prototype.addImage = function (t, e) {
            return (
              f(arguments.length, 2, 'addImage', '(PDFNet.Rect, PDFNet.Obj)', [
                [t, 'Structure', h.Rect, 'Rect'],
                [e, 'Object', h.Obj, 'Obj'],
              ]),
              F('addImage', [[t, 0]]),
              h.sendWithPromise('ContentReplacer.addImage', {
                cr: this.id,
                target_region: t,
                replacement_image: e.id,
              })
            );
          }),
          (h.ContentReplacer.prototype.addText = function (t, e) {
            return (
              f(arguments.length, 2, 'addText', '(PDFNet.Rect, string)', [
                [t, 'Structure', h.Rect, 'Rect'],
                [e, 'string'],
              ]),
              F('addText', [[t, 0]]),
              h.sendWithPromise('ContentReplacer.addText', {
                cr: this.id,
                target_region: t,
                replacement_text: e,
              })
            );
          }),
          (h.ContentReplacer.prototype.addString = function (t, e) {
            return (
              f(arguments.length, 2, 'addString', '(string, string)', [
                [t, 'string'],
                [e, 'string'],
              ]),
              h.sendWithPromise('ContentReplacer.addString', {
                cr: this.id,
                template_text: t,
                replacement_text: e,
              })
            );
          }),
          (h.ContentReplacer.prototype.setMatchStrings = function (t, e) {
            return (
              f(arguments.length, 2, 'setMatchStrings', '(string, string)', [
                [t, 'string'],
                [e, 'string'],
              ]),
              h.sendWithPromise('ContentReplacer.setMatchStrings', {
                cr: this.id,
                start_str: t,
                end_str: e,
              })
            );
          }),
          (h.ContentReplacer.prototype.process = function (t) {
            return (
              f(arguments.length, 1, 'process', '(PDFNet.Page)', [
                [t, 'Object', h.Page, 'Page'],
              ]),
              h.sendWithPromise('ContentReplacer.process', {
                cr: this.id,
                page: t.id,
              })
            );
          }),
          (h.Reflow.prototype.getHtml = function () {
            return h.sendWithPromise('Reflow.getHtml', { self: this.id });
          }),
          (h.Reflow.prototype.getAnnot = function (t) {
            return (
              f(arguments.length, 1, 'getAnnot', '(string)', [[t, 'string']]),
              h.sendWithPromise('Reflow.getAnnot', { self: this.id, in_id: t })
            );
          }),
          (h.Reflow.prototype.setAnnot = function (t) {
            return (
              f(arguments.length, 1, 'setAnnot', '(string)', [[t, 'string']]),
              h.sendWithPromise('Reflow.setAnnot', {
                self: this.id,
                in_json: t,
              })
            );
          }),
          (h.Reflow.prototype.setIncludeImages = function (t) {
            return (
              f(arguments.length, 1, 'setIncludeImages', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('Reflow.setIncludeImages', {
                self: this.id,
                include: t,
              })
            );
          }),
          (h.Reflow.prototype.setHTMLOutputTextMarkup = function (t) {
            return (
              f(arguments.length, 1, 'setHTMLOutputTextMarkup', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('Reflow.setHTMLOutputTextMarkup', {
                self: this.id,
                include: t,
              })
            );
          }),
          (h.Reflow.prototype.setMessageWhenNoReflowContent = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setMessageWhenNoReflowContent',
                '(string)',
                [[t, 'string']]
              ),
              h.sendWithPromise('Reflow.setMessageWhenNoReflowContent', {
                self: this.id,
                content: t,
              })
            );
          }),
          (h.Reflow.prototype.setMessageWhenReflowFailed = function (t) {
            return (
              f(arguments.length, 1, 'setMessageWhenReflowFailed', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('Reflow.setMessageWhenReflowFailed', {
                self: this.id,
                content: t,
              })
            );
          }),
          (h.Reflow.prototype.setHideBackgroundImages = function (t) {
            return (
              f(arguments.length, 1, 'setHideBackgroundImages', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('Reflow.setHideBackgroundImages', {
                self: this.id,
                hide_background_images: t,
              })
            );
          }),
          (h.Reflow.prototype.setHideImagesUnderText = function (t) {
            return (
              f(arguments.length, 1, 'setHideImagesUnderText', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('Reflow.setHideImagesUnderText', {
                self: this.id,
                hide_images_under_text: t,
              })
            );
          }),
          (h.Reflow.prototype.setHideImagesUnderInvisibleText = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setHideImagesUnderInvisibleText',
                '(boolean)',
                [[t, 'boolean']]
              ),
              h.sendWithPromise('Reflow.setHideImagesUnderInvisibleText', {
                self: this.id,
                hide_images_under_invisible_text: t,
              })
            );
          }),
          (h.Reflow.prototype.setDoNotReflowTextOverImages = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setDoNotReflowTextOverImages',
                '(boolean)',
                [[t, 'boolean']]
              ),
              h.sendWithPromise('Reflow.setDoNotReflowTextOverImages', {
                self: this.id,
                do_not_reflow_text_over_images: t,
              })
            );
          }),
          (h.Reflow.prototype.setFontOverrideName = function (t) {
            return (
              f(arguments.length, 1, 'setFontOverrideName', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('Reflow.setFontOverrideName', {
                self: this.id,
                font_family: t,
              })
            );
          }),
          (h.Reflow.prototype.setCustomStyles = function (t) {
            return (
              f(arguments.length, 1, 'setCustomStyles', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('Reflow.setCustomStyles', {
                self: this.id,
                styles: t,
              })
            );
          }),
          (h.Reflow.prototype.setIncludeBBoxForRecognizedZones = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setIncludeBBoxForRecognizedZones',
                '(boolean)',
                [[t, 'boolean']]
              ),
              h.sendWithPromise('Reflow.setIncludeBBoxForRecognizedZones', {
                self: this.id,
                include: t,
              })
            );
          }),
          (h.Convert.fromXpsMem = function (t, e) {
            f(
              arguments.length,
              2,
              'fromXpsMem',
              '(PDFNet.PDFDoc, ArrayBuffer|TypedArray)',
              [
                [t, 'PDFDoc'],
                [e, 'ArrayBuffer'],
              ]
            );
            var n = b(e, !1);
            return h.sendWithPromise('convertFromXpsMem', {
              in_pdfdoc: t.id,
              buf: n,
            });
          }),
          (h.Convert.createReflow = function (t, e) {
            return (
              f(arguments.length, 2, 'createReflow', '(PDFNet.Page, string)', [
                [t, 'Object', h.Page, 'Page'],
                [e, 'string'],
              ]),
              h
                .sendWithPromise('convertCreateReflow', {
                  in_page: t.id,
                  json_zones: e,
                })
                .then(function (t) {
                  return D(h.Reflow, t);
                })
            );
          }),
          (h.Convert.fromTextWithBuffer = function (t, e, n) {
            return (
              void 0 === n && (n = new h.Obj('0')),
              f(
                arguments.length,
                2,
                'fromTextWithBuffer',
                '(PDFNet.PDFDoc, ArrayBuffer|TypedArray, PDFNet.Obj)',
                [
                  [t, 'PDFDoc'],
                  [e, 'ArrayBuffer'],
                  [n, 'Object', h.Obj, 'Obj'],
                ]
              ),
              (e = b(e, !1)),
              h.sendWithPromise('convertFromTextWithBuffer', {
                in_pdfdoc: t.id,
                in_filename: e,
                options: n.id,
              })
            );
          }),
          (h.Convert.toXpsBuffer = function (e, t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(
                arguments.length,
                1,
                'toXpsBuffer',
                '(PDFNet.PDFDoc, PDFNet.Obj)',
                [
                  [e, 'PDFDoc'],
                  [
                    t,
                    'OptionObject',
                    h.Obj,
                    'Obj',
                    'PDFNet.Convert.XPSOutputOptions',
                  ],
                ]
              ),
              (t = y(t, 'PDFNet.Convert.XPSOutputOptions')).then(function (t) {
                return h
                  .sendWithPromise('convertToXpsBuffer', {
                    in_pdfdoc: e.id,
                    options: t.id,
                  })
                  .then(function (t) {
                    return new Uint8Array(t);
                  });
              })
            );
          }),
          (h.Convert.fileToXpsWithBuffer = function (e, n, t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(
                arguments.length,
                2,
                'fileToXpsWithBuffer',
                '(ArrayBuffer|TypedArray, string, PDFNet.Obj)',
                [
                  [e, 'ArrayBuffer'],
                  [n, 'string'],
                  [
                    t,
                    'OptionObject',
                    h.Obj,
                    'Obj',
                    'PDFNet.Convert.XPSOutputOptions',
                  ],
                ]
              ),
              n.startsWith('.') || (n = '.' + n),
              (e = b(e, !1)),
              (t = y(t, 'PDFNet.Convert.XPSOutputOptions')).then(function (t) {
                return h
                  .sendWithPromise('convertFileToXpsWithBuffer', {
                    in_inputFilename: e,
                    in_inputFilename_extension: n,
                    options: t.id,
                  })
                  .then(function (t) {
                    return new Uint8Array(t);
                  });
              })
            );
          }),
          (h.Convert.fileToXodWithBuffer = function (e, n, t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(
                arguments.length,
                2,
                'fileToXodWithBuffer',
                '(ArrayBuffer|TypedArray, string, PDFNet.Obj)',
                [
                  [e, 'ArrayBuffer'],
                  [n, 'string'],
                  [
                    t,
                    'OptionObject',
                    h.Obj,
                    'Obj',
                    'PDFNet.Convert.XODOutputOptions',
                  ],
                ]
              ),
              n.startsWith('.') || (n = '.' + n),
              (e = b(e, !1)),
              (t = y(t, 'PDFNet.Convert.XODOutputOptions')).then(function (t) {
                return h
                  .sendWithPromise('convertFileToXodWithBuffer', {
                    in_filename: e,
                    in_filename_extension: n,
                    options: t.id,
                  })
                  .then(function (t) {
                    return new Uint8Array(t);
                  });
              })
            );
          }),
          (h.Convert.toXodBuffer = function (e, t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(
                arguments.length,
                1,
                'toXodBuffer',
                '(PDFNet.PDFDoc, PDFNet.Obj)',
                [
                  [e, 'PDFDoc'],
                  [
                    t,
                    'OptionObject',
                    h.Obj,
                    'Obj',
                    'PDFNet.Convert.XODOutputOptions',
                  ],
                ]
              ),
              (t = y(t, 'PDFNet.Convert.XODOutputOptions')).then(function (t) {
                return h
                  .sendWithPromise('convertToXodBuffer', {
                    in_pdfdoc: e.id,
                    options: t.id,
                  })
                  .then(function (t) {
                    return new Uint8Array(t);
                  });
              })
            );
          }),
          (h.ConversionMonitor.prototype.next = function () {
            return h.sendWithPromise('ConversionMonitor.next', {
              conversionMonitor: this.id,
            });
          }),
          (h.ConversionMonitor.prototype.ready = function () {
            return h.sendWithPromise('ConversionMonitor.ready', {
              conversionMonitor: this.id,
            });
          }),
          (h.ConversionMonitor.prototype.progress = function () {
            return h.sendWithPromise('ConversionMonitor.progress', {
              conversionMonitor: this.id,
            });
          }),
          (h.ConversionMonitor.prototype.filter = function () {
            return h
              .sendWithPromise('ConversionMonitor.filter', {
                conversionMonitor: this.id,
              })
              .then(function (t) {
                return D(h.Filter, t);
              });
          }),
          (h.Convert.officeToPdfWithFilter = function (e, n, t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(
                arguments.length,
                2,
                'officeToPdfWithFilter',
                '(PDFNet.PDFDoc, PDFNet.Filter, PDFNet.Obj)',
                [
                  [e, 'PDFDoc'],
                  [n, 'Object', h.Filter, 'Filter'],
                  [
                    t,
                    'OptionObject',
                    h.Obj,
                    'Obj',
                    'PDFNet.Convert.ConversionOptions',
                  ],
                ]
              ),
              0 != n.id && O(n.id),
              (t = y(t, 'PDFNet.Convert.ConversionOptions')).then(function (t) {
                return h.sendWithPromise('convertOfficeToPdfWithFilter', {
                  in_pdfdoc: e.id,
                  no_own_in_stream: n.id,
                  options: t.id,
                });
              })
            );
          }),
          (h.Convert.toPdfWithBuffer = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'toPdfWithBuffer',
                '(PDFNet.PDFDoc, ArrayBuffer|TypedArray, string)',
                [
                  [t, 'PDFDoc'],
                  [e, 'ArrayBuffer'],
                  [n, 'string'],
                ]
              ),
              n.startsWith('.') || (n = '.' + n),
              (e = b(e, !1)),
              h.sendWithPromise('convertToPdfWithBuffer', {
                in_pdfdoc: t.id,
                in_filename: e,
                in_filename_extension: n,
              })
            );
          }),
          (h.Convert.fromTiff = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'fromTiff',
                '(PDFNet.PDFDoc, PDFNet.Filter)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Object', h.Filter, 'Filter'],
                ]
              ),
              h.sendWithPromise('convertFromTiff', {
                in_pdfdoc: t.id,
                in_data: e.id,
              })
            );
          }),
          (h.Convert.pageToHtml = function (t) {
            return (
              f(arguments.length, 1, 'pageToHtml', '(PDFNet.Page)', [
                [t, 'Object', h.Page, 'Page'],
              ]),
              h.sendWithPromise('convertPageToHtml', { page: t.id })
            );
          }),
          (h.Convert.pageToHtmlZoned = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'pageToHtmlZoned',
                '(PDFNet.Page, string)',
                [
                  [t, 'Object', h.Page, 'Page'],
                  [e, 'string'],
                ]
              ),
              h.sendWithPromise('convertPageToHtmlZoned', {
                page: t.id,
                json_zones: e,
              })
            );
          }),
          (h.Convert.fileToTiffWithBuffer = function (e, n, t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(
                arguments.length,
                2,
                'fileToTiffWithBuffer',
                '(ArrayBuffer|TypedArray, string, PDFNet.Obj)',
                [
                  [e, 'ArrayBuffer'],
                  [n, 'string'],
                  [
                    t,
                    'OptionObject',
                    h.Obj,
                    'Obj',
                    'PDFNet.Convert.TiffOutputOptions',
                  ],
                ]
              ),
              n.startsWith('.') || (n = '.' + n),
              (e = b(e, !1)),
              (t = y(t, 'PDFNet.Convert.TiffOutputOptions')).then(function (t) {
                return h
                  .sendWithPromise('convertFileToTiffWithBuffer', {
                    in_filename: e,
                    in_filename_extension: n,
                    options: t.id,
                  })
                  .then(function (t) {
                    return new Uint8Array(t);
                  });
              })
            );
          }),
          (h.Convert.toTiffBuffer = function (e, t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(
                arguments.length,
                1,
                'toTiffBuffer',
                '(PDFNet.PDFDoc, PDFNet.Obj)',
                [
                  [e, 'PDFDoc'],
                  [
                    t,
                    'OptionObject',
                    h.Obj,
                    'Obj',
                    'PDFNet.Convert.TiffOutputOptions',
                  ],
                ]
              ),
              (t = y(t, 'PDFNet.Convert.TiffOutputOptions')).then(function (t) {
                return h
                  .sendWithPromise('convertToTiffBuffer', {
                    in_pdfdoc: e.id,
                    options: t.id,
                  })
                  .then(function (t) {
                    return new Uint8Array(t);
                  });
              })
            );
          }),
          (h.Date.init = function (t, e, n, i, r, o) {
            return (
              f(
                arguments.length,
                6,
                'init',
                '(number, number, number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                  [o, 'number'],
                ]
              ),
              h
                .sendWithPromise('dateInit', {
                  year: t,
                  month: e,
                  day: n,
                  hour: i,
                  minute: r,
                  second: o,
                })
                .then(function (t) {
                  return new h.Date(t);
                })
            );
          }),
          (h.Date.prototype.isValid = function () {
            return (
              P('isValid', this.yieldFunction),
              h.sendWithPromise('Date.isValid', { date: this })
            );
          }),
          (h.Date.prototype.attach = function (t) {
            f(arguments.length, 1, 'attach', '(PDFNet.Obj)', [
              [t, 'Object', h.Obj, 'Obj'],
            ]),
              P('attach', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Date.attach'),
              h
                .sendWithPromise('Date.attach', { date: this, d: t.id })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.Date.prototype.update = function (t) {
            void 0 === t && (t = new h.Obj('__null')),
              f(arguments.length, 0, 'update', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              P('update', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Date.update'),
              h
                .sendWithPromise('Date.update', { date: this, d: t.id })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.date, e), t.result;
                })
            );
          }),
          (h.Date.prototype.setCurrentTime = function () {
            P('setCurrentTime', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Date.setCurrentTime'),
              h
                .sendWithPromise('Date.setCurrentTime', { date: this })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.Destination.createXYZ = function (t, e, n, i) {
            return (
              f(
                arguments.length,
                4,
                'createXYZ',
                '(PDFNet.Page, number, number, number)',
                [
                  [t, 'Object', h.Page, 'Page'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                ]
              ),
              h
                .sendWithPromise('destinationCreateXYZ', {
                  page: t.id,
                  left: e,
                  top: n,
                  zoom: i,
                })
                .then(function (t) {
                  return _(h.Destination, t);
                })
            );
          }),
          (h.Destination.createFit = function (t) {
            return (
              f(arguments.length, 1, 'createFit', '(PDFNet.Page)', [
                [t, 'Object', h.Page, 'Page'],
              ]),
              h
                .sendWithPromise('destinationCreateFit', { page: t.id })
                .then(function (t) {
                  return _(h.Destination, t);
                })
            );
          }),
          (h.Destination.createFitH = function (t, e) {
            return (
              f(arguments.length, 2, 'createFitH', '(PDFNet.Page, number)', [
                [t, 'Object', h.Page, 'Page'],
                [e, 'number'],
              ]),
              h
                .sendWithPromise('destinationCreateFitH', {
                  page: t.id,
                  top: e,
                })
                .then(function (t) {
                  return _(h.Destination, t);
                })
            );
          }),
          (h.Destination.createFitV = function (t, e) {
            return (
              f(arguments.length, 2, 'createFitV', '(PDFNet.Page, number)', [
                [t, 'Object', h.Page, 'Page'],
                [e, 'number'],
              ]),
              h
                .sendWithPromise('destinationCreateFitV', {
                  page: t.id,
                  left: e,
                })
                .then(function (t) {
                  return _(h.Destination, t);
                })
            );
          }),
          (h.Destination.createFitR = function (t, e, n, i, r) {
            return (
              f(
                arguments.length,
                5,
                'createFitR',
                '(PDFNet.Page, number, number, number, number)',
                [
                  [t, 'Object', h.Page, 'Page'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                ]
              ),
              h
                .sendWithPromise('destinationCreateFitR', {
                  page: t.id,
                  left: e,
                  bottom: n,
                  right: i,
                  top: r,
                })
                .then(function (t) {
                  return _(h.Destination, t);
                })
            );
          }),
          (h.Destination.createFitB = function (t) {
            return (
              f(arguments.length, 1, 'createFitB', '(PDFNet.Page)', [
                [t, 'Object', h.Page, 'Page'],
              ]),
              h
                .sendWithPromise('destinationCreateFitB', { page: t.id })
                .then(function (t) {
                  return _(h.Destination, t);
                })
            );
          }),
          (h.Destination.createFitBH = function (t, e) {
            return (
              f(arguments.length, 2, 'createFitBH', '(PDFNet.Page, number)', [
                [t, 'Object', h.Page, 'Page'],
                [e, 'number'],
              ]),
              h
                .sendWithPromise('destinationCreateFitBH', {
                  page: t.id,
                  top: e,
                })
                .then(function (t) {
                  return _(h.Destination, t);
                })
            );
          }),
          (h.Destination.createFitBV = function (t, e) {
            return (
              f(arguments.length, 2, 'createFitBV', '(PDFNet.Page, number)', [
                [t, 'Object', h.Page, 'Page'],
                [e, 'number'],
              ]),
              h
                .sendWithPromise('destinationCreateFitBV', {
                  page: t.id,
                  left: e,
                })
                .then(function (t) {
                  return _(h.Destination, t);
                })
            );
          }),
          (h.Destination.create = function (t) {
            return (
              f(arguments.length, 1, 'create', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('destinationCreate', { dest: t.id })
                .then(function (t) {
                  return _(h.Destination, t);
                })
            );
          }),
          (h.Destination.prototype.copy = function () {
            return h
              .sendWithPromise('Destination.copy', { d: this.id })
              .then(function (t) {
                return _(h.Destination, t);
              });
          }),
          (h.Destination.prototype.isValid = function () {
            return h.sendWithPromise('Destination.isValid', { dest: this.id });
          }),
          (h.Destination.prototype.getFitType = function () {
            return h.sendWithPromise('Destination.getFitType', {
              dest: this.id,
            });
          }),
          (h.Destination.prototype.getPage = function () {
            return h
              .sendWithPromise('Destination.getPage', { dest: this.id })
              .then(function (t) {
                return _(h.Page, t);
              });
          }),
          (h.Destination.prototype.setPage = function (t) {
            return (
              f(arguments.length, 1, 'setPage', '(PDFNet.Page)', [
                [t, 'Object', h.Page, 'Page'],
              ]),
              h.sendWithPromise('Destination.setPage', {
                dest: this.id,
                page: t.id,
              })
            );
          }),
          (h.Destination.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('Destination.getSDFObj', { dest: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Destination.prototype.getExplicitDestObj = function () {
            return h
              .sendWithPromise('Destination.getExplicitDestObj', {
                dest: this.id,
              })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.GState.prototype.getTransform = function () {
            return h
              .sendWithPromise('GState.getTransform', { gs: this.id })
              .then(function (t) {
                return new h.Matrix2D(t);
              });
          }),
          (h.GState.prototype.getStrokeColorSpace = function () {
            return h
              .sendWithPromise('GState.getStrokeColorSpace', { gs: this.id })
              .then(function (t) {
                return D(h.ColorSpace, t);
              });
          }),
          (h.GState.prototype.getFillColorSpace = function () {
            return h
              .sendWithPromise('GState.getFillColorSpace', { gs: this.id })
              .then(function (t) {
                return D(h.ColorSpace, t);
              });
          }),
          (h.GState.prototype.getStrokeColor = function () {
            return h
              .sendWithPromise('GState.getStrokeColor', { gs: this.id })
              .then(function (t) {
                return D(h.ColorPt, t);
              });
          }),
          (h.GState.prototype.getStrokePattern = function () {
            return h
              .sendWithPromise('GState.getStrokePattern', { gs: this.id })
              .then(function (t) {
                return D(h.PatternColor, t);
              });
          }),
          (h.GState.prototype.getFillColor = function () {
            return h
              .sendWithPromise('GState.getFillColor', { gs: this.id })
              .then(function (t) {
                return D(h.ColorPt, t);
              });
          }),
          (h.GState.prototype.getFillPattern = function () {
            return h
              .sendWithPromise('GState.getFillPattern', { gs: this.id })
              .then(function (t) {
                return D(h.PatternColor, t);
              });
          }),
          (h.GState.prototype.getFlatness = function () {
            return h.sendWithPromise('GState.getFlatness', { gs: this.id });
          }),
          (h.GState.prototype.getLineCap = function () {
            return h.sendWithPromise('GState.getLineCap', { gs: this.id });
          }),
          (h.GState.prototype.getLineJoin = function () {
            return h.sendWithPromise('GState.getLineJoin', { gs: this.id });
          }),
          (h.GState.prototype.getLineWidth = function () {
            return h.sendWithPromise('GState.getLineWidth', { gs: this.id });
          }),
          (h.GState.prototype.getMiterLimit = function () {
            return h.sendWithPromise('GState.getMiterLimit', { gs: this.id });
          }),
          (h.GState.prototype.getPhase = function () {
            return h.sendWithPromise('GState.getPhase', { gs: this.id });
          }),
          (h.GState.prototype.getCharSpacing = function () {
            return h.sendWithPromise('GState.getCharSpacing', { gs: this.id });
          }),
          (h.GState.prototype.getWordSpacing = function () {
            return h.sendWithPromise('GState.getWordSpacing', { gs: this.id });
          }),
          (h.GState.prototype.getHorizontalScale = function () {
            return h.sendWithPromise('GState.getHorizontalScale', {
              gs: this.id,
            });
          }),
          (h.GState.prototype.getLeading = function () {
            return h.sendWithPromise('GState.getLeading', { gs: this.id });
          }),
          (h.GState.prototype.getFont = function () {
            return h
              .sendWithPromise('GState.getFont', { gs: this.id })
              .then(function (t) {
                return D(h.Font, t);
              });
          }),
          (h.GState.prototype.getFontSize = function () {
            return h.sendWithPromise('GState.getFontSize', { gs: this.id });
          }),
          (h.GState.prototype.getTextRenderMode = function () {
            return h.sendWithPromise('GState.getTextRenderMode', {
              gs: this.id,
            });
          }),
          (h.GState.prototype.getTextRise = function () {
            return h.sendWithPromise('GState.getTextRise', { gs: this.id });
          }),
          (h.GState.prototype.isTextKnockout = function () {
            return h.sendWithPromise('GState.isTextKnockout', { gs: this.id });
          }),
          (h.GState.prototype.getRenderingIntent = function () {
            return h.sendWithPromise('GState.getRenderingIntent', {
              gs: this.id,
            });
          }),
          (h.GState.getRenderingIntentType = function (t) {
            return (
              f(arguments.length, 1, 'getRenderingIntentType', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('gStateGetRenderingIntentType', { name: t })
            );
          }),
          (h.GState.prototype.getBlendMode = function () {
            return h.sendWithPromise('GState.getBlendMode', { gs: this.id });
          }),
          (h.GState.prototype.getFillOpacity = function () {
            return h.sendWithPromise('GState.getFillOpacity', { gs: this.id });
          }),
          (h.GState.prototype.getStrokeOpacity = function () {
            return h.sendWithPromise('GState.getStrokeOpacity', {
              gs: this.id,
            });
          }),
          (h.GState.prototype.getAISFlag = function () {
            return h.sendWithPromise('GState.getAISFlag', { gs: this.id });
          }),
          (h.GState.prototype.getSoftMask = function () {
            return h
              .sendWithPromise('GState.getSoftMask', { gs: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.GState.prototype.getSoftMaskTransform = function () {
            return h
              .sendWithPromise('GState.getSoftMaskTransform', { gs: this.id })
              .then(function (t) {
                return new h.Matrix2D(t);
              });
          }),
          (h.GState.prototype.getStrokeOverprint = function () {
            return h.sendWithPromise('GState.getStrokeOverprint', {
              gs: this.id,
            });
          }),
          (h.GState.prototype.getFillOverprint = function () {
            return h.sendWithPromise('GState.getFillOverprint', {
              gs: this.id,
            });
          }),
          (h.GState.prototype.getOverprintMode = function () {
            return h.sendWithPromise('GState.getOverprintMode', {
              gs: this.id,
            });
          }),
          (h.GState.prototype.getAutoStrokeAdjust = function () {
            return h.sendWithPromise('GState.getAutoStrokeAdjust', {
              gs: this.id,
            });
          }),
          (h.GState.prototype.getSmoothnessTolerance = function () {
            return h.sendWithPromise('GState.getSmoothnessTolerance', {
              gs: this.id,
            });
          }),
          (h.GState.prototype.getTransferFunct = function () {
            return h
              .sendWithPromise('GState.getTransferFunct', { gs: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.GState.prototype.getBlackGenFunct = function () {
            return h
              .sendWithPromise('GState.getBlackGenFunct', { gs: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.GState.prototype.getUCRFunct = function () {
            return h
              .sendWithPromise('GState.getUCRFunct', { gs: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.GState.prototype.getHalftone = function () {
            return h
              .sendWithPromise('GState.getHalftone', { gs: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.GState.prototype.setTransformMatrix = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setTransformMatrix',
                '(PDFNet.Matrix2D)',
                [[t, 'Structure', h.Matrix2D, 'Matrix2D']]
              ),
              F('setTransformMatrix', [[t, 0]]),
              h.sendWithPromise('GState.setTransformMatrix', {
                gs: this.id,
                mtx: t,
              })
            );
          }),
          (h.GState.prototype.setTransform = function (t, e, n, i, r, o) {
            return (
              f(
                arguments.length,
                6,
                'setTransform',
                '(number, number, number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                  [o, 'number'],
                ]
              ),
              h.sendWithPromise('GState.setTransform', {
                gs: this.id,
                a: t,
                b: e,
                c: n,
                d: i,
                h: r,
                v: o,
              })
            );
          }),
          (h.GState.prototype.concatMatrix = function (t) {
            return (
              f(arguments.length, 1, 'concatMatrix', '(PDFNet.Matrix2D)', [
                [t, 'Structure', h.Matrix2D, 'Matrix2D'],
              ]),
              F('concatMatrix', [[t, 0]]),
              h.sendWithPromise('GState.concatMatrix', { gs: this.id, mtx: t })
            );
          }),
          (h.GState.prototype.concat = function (t, e, n, i, r, o) {
            return (
              f(
                arguments.length,
                6,
                'concat',
                '(number, number, number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                  [o, 'number'],
                ]
              ),
              h.sendWithPromise('GState.concat', {
                gs: this.id,
                a: t,
                b: e,
                c: n,
                d: i,
                h: r,
                v: o,
              })
            );
          }),
          (h.GState.prototype.setStrokeColorSpace = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setStrokeColorSpace',
                '(PDFNet.ColorSpace)',
                [[t, 'Object', h.ColorSpace, 'ColorSpace']]
              ),
              h.sendWithPromise('GState.setStrokeColorSpace', {
                gs: this.id,
                cs: t.id,
              })
            );
          }),
          (h.GState.prototype.setFillColorSpace = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setFillColorSpace',
                '(PDFNet.ColorSpace)',
                [[t, 'Object', h.ColorSpace, 'ColorSpace']]
              ),
              h.sendWithPromise('GState.setFillColorSpace', {
                gs: this.id,
                cs: t.id,
              })
            );
          }),
          (h.GState.prototype.setStrokeColorWithColorPt = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setStrokeColorWithColorPt',
                '(PDFNet.ColorPt)',
                [[t, 'Object', h.ColorPt, 'ColorPt']]
              ),
              h.sendWithPromise('GState.setStrokeColorWithColorPt', {
                gs: this.id,
                c: t.id,
              })
            );
          }),
          (h.GState.prototype.setStrokeColorWithPattern = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setStrokeColorWithPattern',
                '(PDFNet.PatternColor)',
                [[t, 'Object', h.PatternColor, 'PatternColor']]
              ),
              h.sendWithPromise('GState.setStrokeColorWithPattern', {
                gs: this.id,
                pattern: t.id,
              })
            );
          }),
          (h.GState.prototype.setStrokeColor = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setStrokeColor',
                '(PDFNet.PatternColor, PDFNet.ColorPt)',
                [
                  [t, 'Object', h.PatternColor, 'PatternColor'],
                  [e, 'Object', h.ColorPt, 'ColorPt'],
                ]
              ),
              h.sendWithPromise('GState.setStrokeColor', {
                gs: this.id,
                pattern: t.id,
                c: e.id,
              })
            );
          }),
          (h.GState.prototype.setFillColorWithColorPt = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setFillColorWithColorPt',
                '(PDFNet.ColorPt)',
                [[t, 'Object', h.ColorPt, 'ColorPt']]
              ),
              h.sendWithPromise('GState.setFillColorWithColorPt', {
                gs: this.id,
                c: t.id,
              })
            );
          }),
          (h.GState.prototype.setFillColorWithPattern = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setFillColorWithPattern',
                '(PDFNet.PatternColor)',
                [[t, 'Object', h.PatternColor, 'PatternColor']]
              ),
              h.sendWithPromise('GState.setFillColorWithPattern', {
                gs: this.id,
                pattern: t.id,
              })
            );
          }),
          (h.GState.prototype.setFillColor = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setFillColor',
                '(PDFNet.PatternColor, PDFNet.ColorPt)',
                [
                  [t, 'Object', h.PatternColor, 'PatternColor'],
                  [e, 'Object', h.ColorPt, 'ColorPt'],
                ]
              ),
              h.sendWithPromise('GState.setFillColor', {
                gs: this.id,
                pattern: t.id,
                c: e.id,
              })
            );
          }),
          (h.GState.prototype.setFlatness = function (t) {
            return (
              f(arguments.length, 1, 'setFlatness', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('GState.setFlatness', {
                gs: this.id,
                flatness: t,
              })
            );
          }),
          (h.GState.prototype.setLineCap = function (t) {
            return (
              f(arguments.length, 1, 'setLineCap', '(number)', [[t, 'number']]),
              h.sendWithPromise('GState.setLineCap', { gs: this.id, cap: t })
            );
          }),
          (h.GState.prototype.setLineJoin = function (t) {
            return (
              f(arguments.length, 1, 'setLineJoin', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('GState.setLineJoin', { gs: this.id, join: t })
            );
          }),
          (h.GState.prototype.setLineWidth = function (t) {
            return (
              f(arguments.length, 1, 'setLineWidth', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('GState.setLineWidth', {
                gs: this.id,
                width: t,
              })
            );
          }),
          (h.GState.prototype.setMiterLimit = function (t) {
            return (
              f(arguments.length, 1, 'setMiterLimit', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('GState.setMiterLimit', {
                gs: this.id,
                miter_limit: t,
              })
            );
          }),
          (h.GState.prototype.setDashPattern = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setDashPattern',
                '(Array<number>, number)',
                [
                  [t, 'Array'],
                  [e, 'number'],
                ]
              ),
              h.sendWithPromise('GState.setDashPattern', {
                gs: this.id,
                dash_array: t,
                phase: e,
              })
            );
          }),
          (h.GState.prototype.setCharSpacing = function (t) {
            return (
              f(arguments.length, 1, 'setCharSpacing', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('GState.setCharSpacing', {
                gs: this.id,
                char_spacing: t,
              })
            );
          }),
          (h.GState.prototype.setWordSpacing = function (t) {
            return (
              f(arguments.length, 1, 'setWordSpacing', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('GState.setWordSpacing', {
                gs: this.id,
                word_spacing: t,
              })
            );
          }),
          (h.GState.prototype.setHorizontalScale = function (t) {
            return (
              f(arguments.length, 1, 'setHorizontalScale', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('GState.setHorizontalScale', {
                gs: this.id,
                hscale: t,
              })
            );
          }),
          (h.GState.prototype.setLeading = function (t) {
            return (
              f(arguments.length, 1, 'setLeading', '(number)', [[t, 'number']]),
              h.sendWithPromise('GState.setLeading', {
                gs: this.id,
                leading: t,
              })
            );
          }),
          (h.GState.prototype.setFont = function (t, e) {
            return (
              f(arguments.length, 2, 'setFont', '(PDFNet.Font, number)', [
                [t, 'Object', h.Font, 'Font'],
                [e, 'number'],
              ]),
              h.sendWithPromise('GState.setFont', {
                gs: this.id,
                font: t.id,
                font_sz: e,
              })
            );
          }),
          (h.GState.prototype.setTextRenderMode = function (t) {
            return (
              f(arguments.length, 1, 'setTextRenderMode', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('GState.setTextRenderMode', {
                gs: this.id,
                rmode: t,
              })
            );
          }),
          (h.GState.prototype.setTextRise = function (t) {
            return (
              f(arguments.length, 1, 'setTextRise', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('GState.setTextRise', { gs: this.id, rise: t })
            );
          }),
          (h.GState.prototype.setTextKnockout = function (t) {
            return (
              f(arguments.length, 1, 'setTextKnockout', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('GState.setTextKnockout', {
                gs: this.id,
                knockout: t,
              })
            );
          }),
          (h.GState.prototype.setRenderingIntent = function (t) {
            return (
              f(arguments.length, 1, 'setRenderingIntent', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('GState.setRenderingIntent', {
                gs: this.id,
                intent: t,
              })
            );
          }),
          (h.GState.prototype.setBlendMode = function (t) {
            return (
              f(arguments.length, 1, 'setBlendMode', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('GState.setBlendMode', { gs: this.id, BM: t })
            );
          }),
          (h.GState.prototype.setFillOpacity = function (t) {
            return (
              f(arguments.length, 1, 'setFillOpacity', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('GState.setFillOpacity', { gs: this.id, ca: t })
            );
          }),
          (h.GState.prototype.setStrokeOpacity = function (t) {
            return (
              f(arguments.length, 1, 'setStrokeOpacity', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('GState.setStrokeOpacity', {
                gs: this.id,
                ca: t,
              })
            );
          }),
          (h.GState.prototype.setAISFlag = function (t) {
            return (
              f(arguments.length, 1, 'setAISFlag', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('GState.setAISFlag', { gs: this.id, AIS: t })
            );
          }),
          (h.GState.prototype.setSoftMask = function (t) {
            return (
              f(arguments.length, 1, 'setSoftMask', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('GState.setSoftMask', { gs: this.id, SM: t.id })
            );
          }),
          (h.GState.prototype.setStrokeOverprint = function (t) {
            return (
              f(arguments.length, 1, 'setStrokeOverprint', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('GState.setStrokeOverprint', {
                gs: this.id,
                OP: t,
              })
            );
          }),
          (h.GState.prototype.setFillOverprint = function (t) {
            return (
              f(arguments.length, 1, 'setFillOverprint', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('GState.setFillOverprint', {
                gs: this.id,
                op: t,
              })
            );
          }),
          (h.GState.prototype.setOverprintMode = function (t) {
            return (
              f(arguments.length, 1, 'setOverprintMode', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('GState.setOverprintMode', {
                gs: this.id,
                OPM: t,
              })
            );
          }),
          (h.GState.prototype.setAutoStrokeAdjust = function (t) {
            return (
              f(arguments.length, 1, 'setAutoStrokeAdjust', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('GState.setAutoStrokeAdjust', {
                gs: this.id,
                SA: t,
              })
            );
          }),
          (h.GState.prototype.setSmoothnessTolerance = function (t) {
            return (
              f(arguments.length, 1, 'setSmoothnessTolerance', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('GState.setSmoothnessTolerance', {
                gs: this.id,
                SM: t,
              })
            );
          }),
          (h.GState.prototype.setBlackGenFunct = function (t) {
            return (
              f(arguments.length, 1, 'setBlackGenFunct', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('GState.setBlackGenFunct', {
                gs: this.id,
                BG: t.id,
              })
            );
          }),
          (h.GState.prototype.setUCRFunct = function (t) {
            return (
              f(arguments.length, 1, 'setUCRFunct', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('GState.setUCRFunct', {
                gs: this.id,
                UCR: t.id,
              })
            );
          }),
          (h.GState.prototype.setTransferFunct = function (t) {
            return (
              f(arguments.length, 1, 'setTransferFunct', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('GState.setTransferFunct', {
                gs: this.id,
                TR: t.id,
              })
            );
          }),
          (h.GState.prototype.setHalftone = function (t) {
            return (
              f(arguments.length, 1, 'setHalftone', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('GState.setHalftone', { gs: this.id, HT: t.id })
            );
          }),
          (h.Element.prototype.getType = function () {
            return h.sendWithPromise('Element.getType', { e: this.id });
          }),
          (h.Element.prototype.getGState = function () {
            return h
              .sendWithPromise('Element.getGState', { e: this.id })
              .then(function (t) {
                return _(h.GState, t);
              });
          }),
          (h.Element.prototype.getCTM = function () {
            return h
              .sendWithPromise('Element.getCTM', { e: this.id })
              .then(function (t) {
                return new h.Matrix2D(t);
              });
          }),
          (h.Element.prototype.getParentStructElement = function () {
            return h
              .sendWithPromise('Element.getParentStructElement', { e: this.id })
              .then(function (t) {
                return new h.SElement(t);
              });
          }),
          (h.Element.prototype.getStructMCID = function () {
            return h.sendWithPromise('Element.getStructMCID', { e: this.id });
          }),
          (h.Element.prototype.isOCVisible = function () {
            return h.sendWithPromise('Element.isOCVisible', { e: this.id });
          }),
          (h.Element.prototype.isClippingPath = function () {
            return h.sendWithPromise('Element.isClippingPath', { e: this.id });
          }),
          (h.Element.prototype.isStroked = function () {
            return h.sendWithPromise('Element.isStroked', { e: this.id });
          }),
          (h.Element.prototype.isFilled = function () {
            return h.sendWithPromise('Element.isFilled', { e: this.id });
          }),
          (h.Element.prototype.isWindingFill = function () {
            return h.sendWithPromise('Element.isWindingFill', { e: this.id });
          }),
          (h.Element.prototype.isClipWindingFill = function () {
            return h.sendWithPromise('Element.isClipWindingFill', {
              e: this.id,
            });
          }),
          (h.Element.prototype.setPathClip = function (t) {
            return (
              f(arguments.length, 1, 'setPathClip', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('Element.setPathClip', { e: this.id, clip: t })
            );
          }),
          (h.Element.prototype.setPathStroke = function (t) {
            return (
              f(arguments.length, 1, 'setPathStroke', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('Element.setPathStroke', {
                e: this.id,
                stroke: t,
              })
            );
          }),
          (h.Element.prototype.setPathFill = function (t) {
            return (
              f(arguments.length, 1, 'setPathFill', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('Element.setPathFill', { e: this.id, fill: t })
            );
          }),
          (h.Element.prototype.setWindingFill = function (t) {
            return (
              f(arguments.length, 1, 'setWindingFill', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('Element.setWindingFill', {
                e: this.id,
                winding_rule: t,
              })
            );
          }),
          (h.Element.prototype.setClipWindingFill = function (t) {
            return (
              f(arguments.length, 1, 'setClipWindingFill', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('Element.setClipWindingFill', {
                e: this.id,
                winding_rule: t,
              })
            );
          }),
          (h.Element.prototype.setPathTypes = function (t, e) {
            return (
              f(arguments.length, 2, 'setPathTypes', '(string, number)', [
                [t, 'string'],
                [e, 'number'],
              ]),
              h.sendWithPromise('Element.setPathTypes', {
                e: this.id,
                in_seg_types: t,
                count: e,
              })
            );
          }),
          (h.Element.prototype.getXObject = function () {
            return h
              .sendWithPromise('Element.getXObject', { e: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Element.prototype.getImageData = function () {
            return h
              .sendWithPromise('Element.getImageData', { e: this.id })
              .then(function (t) {
                return _(h.Filter, t);
              });
          }),
          (h.Element.prototype.getImageDataSize = function () {
            return h.sendWithPromise('Element.getImageDataSize', {
              e: this.id,
            });
          }),
          (h.Element.prototype.getImageColorSpace = function () {
            return h
              .sendWithPromise('Element.getImageColorSpace', { e: this.id })
              .then(function (t) {
                return D(h.ColorSpace, t);
              });
          }),
          (h.Element.prototype.getImageWidth = function () {
            return h.sendWithPromise('Element.getImageWidth', { e: this.id });
          }),
          (h.Element.prototype.getImageHeight = function () {
            return h.sendWithPromise('Element.getImageHeight', { e: this.id });
          }),
          (h.Element.prototype.getDecodeArray = function () {
            return h
              .sendWithPromise('Element.getDecodeArray', { e: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Element.prototype.getBitsPerComponent = function () {
            return h.sendWithPromise('Element.getBitsPerComponent', {
              e: this.id,
            });
          }),
          (h.Element.prototype.getComponentNum = function () {
            return h.sendWithPromise('Element.getComponentNum', { e: this.id });
          }),
          (h.Element.prototype.isImageMask = function () {
            return h.sendWithPromise('Element.isImageMask', { e: this.id });
          }),
          (h.Element.prototype.isImageInterpolate = function () {
            return h.sendWithPromise('Element.isImageInterpolate', {
              e: this.id,
            });
          }),
          (h.Element.prototype.getMask = function () {
            return h
              .sendWithPromise('Element.getMask', { e: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Element.prototype.getImageRenderingIntent = function () {
            return h.sendWithPromise('Element.getImageRenderingIntent', {
              e: this.id,
            });
          }),
          (h.Element.prototype.getTextString = function () {
            return h.sendWithPromise('Element.getTextString', { e: this.id });
          }),
          (h.Element.prototype.getTextMatrix = function () {
            return h
              .sendWithPromise('Element.getTextMatrix', { e: this.id })
              .then(function (t) {
                return new h.Matrix2D(t);
              });
          }),
          (h.Element.prototype.getCharIterator = function () {
            return h
              .sendWithPromise('Element.getCharIterator', { e: this.id })
              .then(function (t) {
                return D(h.Iterator, t, 'CharData');
              });
          }),
          (h.Element.prototype.getTextLength = function () {
            return h.sendWithPromise('Element.getTextLength', { e: this.id });
          }),
          (h.Element.prototype.getPosAdjustment = function () {
            return h.sendWithPromise('Element.getPosAdjustment', {
              e: this.id,
            });
          }),
          (h.Element.prototype.getNewTextLineOffset = function () {
            return h.sendWithPromise('Element.getNewTextLineOffset', {
              e: this.id,
            });
          }),
          (h.Element.prototype.hasTextMatrix = function () {
            return h.sendWithPromise('Element.hasTextMatrix', { e: this.id });
          }),
          (h.Element.prototype.setTextData = function (t) {
            f(arguments.length, 1, 'setTextData', '(ArrayBuffer|TypedArray)', [
              [t, 'ArrayBuffer'],
            ]);
            var e = b(t, !1);
            return h.sendWithPromise('Element.setTextData', {
              e: this.id,
              buf_text_data: e,
            });
          }),
          (h.Element.prototype.setTextMatrix = function (t) {
            return (
              f(arguments.length, 1, 'setTextMatrix', '(PDFNet.Matrix2D)', [
                [t, 'Structure', h.Matrix2D, 'Matrix2D'],
              ]),
              F('setTextMatrix', [[t, 0]]),
              h.sendWithPromise('Element.setTextMatrix', { e: this.id, mtx: t })
            );
          }),
          (h.Element.prototype.setTextMatrixEntries = function (
            t,
            e,
            n,
            i,
            r,
            o
          ) {
            return (
              f(
                arguments.length,
                6,
                'setTextMatrixEntries',
                '(number, number, number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                  [o, 'number'],
                ]
              ),
              h.sendWithPromise('Element.setTextMatrixEntries', {
                e: this.id,
                a: t,
                b: e,
                c: n,
                d: i,
                h: r,
                v: o,
              })
            );
          }),
          (h.Element.prototype.setPosAdjustment = function (t) {
            return (
              f(arguments.length, 1, 'setPosAdjustment', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Element.setPosAdjustment', {
                e: this.id,
                adjust: t,
              })
            );
          }),
          (h.Element.prototype.updateTextMetrics = function () {
            return h.sendWithPromise('Element.updateTextMetrics', {
              e: this.id,
            });
          }),
          (h.Element.prototype.setNewTextLineOffset = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setNewTextLineOffset',
                '(number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                ]
              ),
              h.sendWithPromise('Element.setNewTextLineOffset', {
                e: this.id,
                dx: t,
                dy: e,
              })
            );
          }),
          (h.Element.prototype.getShading = function () {
            return h
              .sendWithPromise('Element.getShading', { e: this.id })
              .then(function (t) {
                return D(h.Shading, t);
              });
          }),
          (h.Element.prototype.getMCPropertyDict = function () {
            return h
              .sendWithPromise('Element.getMCPropertyDict', { e: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Element.prototype.getMCTag = function () {
            return h
              .sendWithPromise('Element.getMCTag', { e: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.ShapedText.prototype.getScale = function () {
            return h.sendWithPromise('ShapedText.getScale', { self: this.id });
          }),
          (h.ShapedText.prototype.getShapingStatus = function () {
            return h.sendWithPromise('ShapedText.getShapingStatus', {
              self: this.id,
            });
          }),
          (h.ShapedText.prototype.getFailureReason = function () {
            return h.sendWithPromise('ShapedText.getFailureReason', {
              self: this.id,
            });
          }),
          (h.ShapedText.prototype.getText = function () {
            return h.sendWithPromise('ShapedText.getText', { self: this.id });
          }),
          (h.ShapedText.prototype.getNumGlyphs = function () {
            return h.sendWithPromise('ShapedText.getNumGlyphs', {
              self: this.id,
            });
          }),
          (h.ShapedText.prototype.getGlyph = function (t) {
            return (
              f(arguments.length, 1, 'getGlyph', '(number)', [[t, 'number']]),
              h.sendWithPromise('ShapedText.getGlyph', {
                self: this.id,
                index: t,
              })
            );
          }),
          (h.ShapedText.prototype.getGlyphXPos = function (t) {
            return (
              f(arguments.length, 1, 'getGlyphXPos', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('ShapedText.getGlyphXPos', {
                self: this.id,
                index: t,
              })
            );
          }),
          (h.ShapedText.prototype.getGlyphYPos = function (t) {
            return (
              f(arguments.length, 1, 'getGlyphYPos', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('ShapedText.getGlyphYPos', {
                self: this.id,
                index: t,
              })
            );
          }),
          (h.ElementBuilder.create = function () {
            return h
              .sendWithPromise('elementBuilderCreate', {})
              .then(function (t) {
                return D(h.ElementBuilder, t);
              });
          }),
          (h.ElementBuilder.prototype.reset = function (t) {
            return (
              void 0 === t && (t = new h.GState('0')),
              f(arguments.length, 0, 'reset', '(PDFNet.GState)', [
                [t, 'Object', h.GState, 'GState'],
              ]),
              h.sendWithPromise('ElementBuilder.reset', {
                b: this.id,
                gs: t.id,
              })
            );
          }),
          (h.ElementBuilder.prototype.createImage = function (t) {
            return (
              f(arguments.length, 1, 'createImage', '(PDFNet.Image)', [
                [t, 'Object', h.Image, 'Image'],
              ]),
              h
                .sendWithPromise('ElementBuilder.createImage', {
                  b: this.id,
                  img: t.id,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.ElementBuilder.prototype.createImageFromMatrix = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createImageFromMatrix',
                '(PDFNet.Image, PDFNet.Matrix2D)',
                [
                  [t, 'Object', h.Image, 'Image'],
                  [e, 'Structure', h.Matrix2D, 'Matrix2D'],
                ]
              ),
              F('createImageFromMatrix', [[e, 1]]),
              h
                .sendWithPromise('ElementBuilder.createImageFromMatrix', {
                  b: this.id,
                  img: t.id,
                  mtx: e,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.ElementBuilder.prototype.createImageScaled = function (
            t,
            e,
            n,
            i,
            r
          ) {
            return (
              f(
                arguments.length,
                5,
                'createImageScaled',
                '(PDFNet.Image, number, number, number, number)',
                [
                  [t, 'Object', h.Image, 'Image'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                ]
              ),
              h
                .sendWithPromise('ElementBuilder.createImageScaled', {
                  b: this.id,
                  img: t.id,
                  x: e,
                  y: n,
                  hscale: i,
                  vscale: r,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.ElementBuilder.prototype.createGroupBegin = function () {
            return h
              .sendWithPromise('ElementBuilder.createGroupBegin', {
                b: this.id,
              })
              .then(function (t) {
                return _(h.Element, t);
              });
          }),
          (h.ElementBuilder.prototype.createGroupEnd = function () {
            return h
              .sendWithPromise('ElementBuilder.createGroupEnd', { b: this.id })
              .then(function (t) {
                return _(h.Element, t);
              });
          }),
          (h.ElementBuilder.prototype.createShading = function (t) {
            return (
              f(arguments.length, 1, 'createShading', '(PDFNet.Shading)', [
                [t, 'Object', h.Shading, 'Shading'],
              ]),
              h
                .sendWithPromise('ElementBuilder.createShading', {
                  b: this.id,
                  sh: t.id,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.ElementBuilder.prototype.createFormFromStream = function (t) {
            return (
              f(arguments.length, 1, 'createFormFromStream', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('ElementBuilder.createFormFromStream', {
                  b: this.id,
                  form: t.id,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.ElementBuilder.prototype.createFormFromPage = function (t) {
            return (
              f(arguments.length, 1, 'createFormFromPage', '(PDFNet.Page)', [
                [t, 'Object', h.Page, 'Page'],
              ]),
              h
                .sendWithPromise('ElementBuilder.createFormFromPage', {
                  b: this.id,
                  page: t.id,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.ElementBuilder.prototype.createFormFromDoc = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createFormFromDoc',
                '(PDFNet.Page, PDFNet.PDFDoc)',
                [
                  [t, 'Object', h.Page, 'Page'],
                  [e, 'PDFDoc'],
                ]
              ),
              h
                .sendWithPromise('ElementBuilder.createFormFromDoc', {
                  b: this.id,
                  page: t.id,
                  doc: e.id,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          });
        function p(r, o) {
          o = o || {};
          var s = new XMLHttpRequest();
          return new Promise(
            function (e, n) {
              s.open('GET', r, !0),
                (s.responseType = 'arraybuffer'),
                o.withCredentials && (s.withCredentials = o.withCredentials),
                (s.onerror = function () {
                  n(Error('Network error occurred'));
                }),
                (s.onload = function (t) {
                  200 == this.status
                    ? ((t = new Uint8Array(s.response)), e(t))
                    : n(Error('Download Failed'));
                });
              var t = o.customHeaders;
              if (t) for (var i in t) s.setRequestHeader(i, t[i]);
              s.send();
            },
            function () {
              s.abort();
            }
          );
        }
        function m(t) {
          return 0 === t
            ? '1st'
            : 1 === t
              ? '2nd'
              : 2 === t
                ? '3rd'
                : t + 1 + 'th';
        }
        (h.ElementBuilder.prototype.createTextBeginWithFont = function (t, e) {
          return (
            f(
              arguments.length,
              2,
              'createTextBeginWithFont',
              '(PDFNet.Font, number)',
              [
                [t, 'Object', h.Font, 'Font'],
                [e, 'number'],
              ]
            ),
            h
              .sendWithPromise('ElementBuilder.createTextBeginWithFont', {
                b: this.id,
                font: t.id,
                font_sz: e,
              })
              .then(function (t) {
                return _(h.Element, t);
              })
          );
        }),
          (h.ElementBuilder.prototype.createTextBegin = function () {
            return h
              .sendWithPromise('ElementBuilder.createTextBegin', { b: this.id })
              .then(function (t) {
                return _(h.Element, t);
              });
          }),
          (h.ElementBuilder.prototype.createTextEnd = function () {
            return h
              .sendWithPromise('ElementBuilder.createTextEnd', { b: this.id })
              .then(function (t) {
                return _(h.Element, t);
              });
          }),
          (h.ElementBuilder.prototype.createTextRun = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'createTextRun',
                '(string, PDFNet.Font, number)',
                [
                  [t, 'string'],
                  [e, 'Object', h.Font, 'Font'],
                  [n, 'number'],
                ]
              ),
              h
                .sendWithPromise('ElementBuilder.createTextRun', {
                  b: this.id,
                  text_data: t,
                  font: e.id,
                  font_sz: n,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.ElementBuilder.prototype.createTextRunUnsigned = function (
            t,
            e,
            n
          ) {
            return (
              f(
                arguments.length,
                3,
                'createTextRunUnsigned',
                '(string, PDFNet.Font, number)',
                [
                  [t, 'string'],
                  [e, 'Object', h.Font, 'Font'],
                  [n, 'number'],
                ]
              ),
              h
                .sendWithPromise('ElementBuilder.createTextRunUnsigned', {
                  b: this.id,
                  text_data: t,
                  font: e.id,
                  font_sz: n,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.ElementBuilder.prototype.createNewTextRun = function (t) {
            return (
              f(arguments.length, 1, 'createNewTextRun', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('ElementBuilder.createNewTextRun', {
                  b: this.id,
                  text_data: t,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.ElementBuilder.prototype.createNewTextRunUnsigned = function (t) {
            return (
              f(arguments.length, 1, 'createNewTextRunUnsigned', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('ElementBuilder.createNewTextRunUnsigned', {
                  b: this.id,
                  text_data: t,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.ElementBuilder.prototype.createShapedTextRun = function (t) {
            return (
              f(
                arguments.length,
                1,
                'createShapedTextRun',
                '(PDFNet.ShapedText)',
                [[t, 'Object', h.ShapedText, 'ShapedText']]
              ),
              h
                .sendWithPromise('ElementBuilder.createShapedTextRun', {
                  b: this.id,
                  text_data: t.id,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.ElementBuilder.prototype.createTextNewLineWithOffset = function (
            t,
            e
          ) {
            return (
              f(
                arguments.length,
                2,
                'createTextNewLineWithOffset',
                '(number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                ]
              ),
              h
                .sendWithPromise('ElementBuilder.createTextNewLineWithOffset', {
                  b: this.id,
                  dx: t,
                  dy: e,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.ElementBuilder.prototype.createTextNewLine = function () {
            return h
              .sendWithPromise('ElementBuilder.createTextNewLine', {
                b: this.id,
              })
              .then(function (t) {
                return _(h.Element, t);
              });
          }),
          (h.ElementBuilder.prototype.createPath = function (t, e) {
            f(
              arguments.length,
              2,
              'createPath',
              '(Array<number>, ArrayBuffer|TypedArray)',
              [
                [t, 'Array'],
                [e, 'ArrayBuffer'],
              ]
            );
            var n = b(e, !1);
            return h
              .sendWithPromise('ElementBuilder.createPath', {
                b: this.id,
                points_list: t,
                buf_seg_types: n,
              })
              .then(function (t) {
                return _(h.Element, t);
              });
          }),
          (h.ElementBuilder.prototype.createRect = function (t, e, n, i) {
            return (
              f(
                arguments.length,
                4,
                'createRect',
                '(number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                ]
              ),
              h
                .sendWithPromise('ElementBuilder.createRect', {
                  b: this.id,
                  x: t,
                  y: e,
                  width: n,
                  height: i,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.ElementBuilder.prototype.createEllipse = function (t, e, n, i) {
            return (
              f(
                arguments.length,
                4,
                'createEllipse',
                '(number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                ]
              ),
              h
                .sendWithPromise('ElementBuilder.createEllipse', {
                  b: this.id,
                  x: t,
                  y: e,
                  width: n,
                  height: i,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.ElementBuilder.prototype.pathBegin = function () {
            return h.sendWithPromise('ElementBuilder.pathBegin', {
              b: this.id,
            });
          }),
          (h.ElementBuilder.prototype.pathEnd = function () {
            return h
              .sendWithPromise('ElementBuilder.pathEnd', { b: this.id })
              .then(function (t) {
                return _(h.Element, t);
              });
          }),
          (h.ElementBuilder.prototype.rect = function (t, e, n, i) {
            return (
              f(
                arguments.length,
                4,
                'rect',
                '(number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                ]
              ),
              h.sendWithPromise('ElementBuilder.rect', {
                b: this.id,
                x: t,
                y: e,
                width: n,
                height: i,
              })
            );
          }),
          (h.ElementBuilder.prototype.ellipse = function (t, e, n, i) {
            return (
              f(
                arguments.length,
                4,
                'ellipse',
                '(number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                ]
              ),
              h.sendWithPromise('ElementBuilder.ellipse', {
                b: this.id,
                x: t,
                y: e,
                width: n,
                height: i,
              })
            );
          }),
          (h.ElementBuilder.prototype.moveTo = function (t, e) {
            return (
              f(arguments.length, 2, 'moveTo', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h.sendWithPromise('ElementBuilder.moveTo', {
                b: this.id,
                x: t,
                y: e,
              })
            );
          }),
          (h.ElementBuilder.prototype.lineTo = function (t, e) {
            return (
              f(arguments.length, 2, 'lineTo', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h.sendWithPromise('ElementBuilder.lineTo', {
                b: this.id,
                x: t,
                y: e,
              })
            );
          }),
          (h.ElementBuilder.prototype.curveTo = function (t, e, n, i, r, o) {
            return (
              f(
                arguments.length,
                6,
                'curveTo',
                '(number, number, number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                  [o, 'number'],
                ]
              ),
              h.sendWithPromise('ElementBuilder.curveTo', {
                b: this.id,
                cx1: t,
                cy1: e,
                cx2: n,
                cy2: i,
                x2: r,
                y2: o,
              })
            );
          }),
          (h.ElementBuilder.prototype.arcTo = function (t, e, n, i, r, o) {
            return (
              f(
                arguments.length,
                6,
                'arcTo',
                '(number, number, number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                  [o, 'number'],
                ]
              ),
              h.sendWithPromise('ElementBuilder.arcTo', {
                b: this.id,
                x: t,
                y: e,
                width: n,
                height: i,
                start: r,
                extent: o,
              })
            );
          }),
          (h.ElementBuilder.prototype.arcTo2 = function (t, e, n, i, r, o, s) {
            return (
              f(
                arguments.length,
                7,
                'arcTo2',
                '(number, number, number, boolean, boolean, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'boolean'],
                  [r, 'boolean'],
                  [o, 'number'],
                  [s, 'number'],
                ]
              ),
              h.sendWithPromise('ElementBuilder.arcTo2', {
                b: this.id,
                xr: t,
                yr: e,
                rx: n,
                isLargeArc: i,
                sweep: r,
                endX: o,
                endY: s,
              })
            );
          }),
          (h.ElementBuilder.prototype.closePath = function () {
            return h.sendWithPromise('ElementBuilder.closePath', {
              b: this.id,
            });
          }),
          (h.ElementBuilder.prototype.createMarkedContentBeginInlineProperties =
            function (t) {
              return (
                f(
                  arguments.length,
                  1,
                  'createMarkedContentBeginInlineProperties',
                  '(string)',
                  [[t, 'string']]
                ),
                h
                  .sendWithPromise(
                    'ElementBuilder.createMarkedContentBeginInlineProperties',
                    { b: this.id, tag: t }
                  )
                  .then(function (t) {
                    return _(h.Element, t);
                  })
              );
            }),
          (h.ElementBuilder.prototype.createMarkedContentBegin = function (
            t,
            e
          ) {
            return (
              f(
                arguments.length,
                2,
                'createMarkedContentBegin',
                '(string, PDFNet.Obj)',
                [
                  [t, 'string'],
                  [e, 'Object', h.Obj, 'Obj'],
                ]
              ),
              h
                .sendWithPromise('ElementBuilder.createMarkedContentBegin', {
                  b: this.id,
                  tag: t,
                  property_dict: e.id,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.ElementBuilder.prototype.createMarkedContentEnd = function () {
            return h
              .sendWithPromise('ElementBuilder.createMarkedContentEnd', {
                b: this.id,
              })
              .then(function (t) {
                return _(h.Element, t);
              });
          }),
          (h.ElementBuilder.prototype.createMarkedContentPointInlineProperties =
            function (t) {
              return (
                f(
                  arguments.length,
                  1,
                  'createMarkedContentPointInlineProperties',
                  '(string)',
                  [[t, 'string']]
                ),
                h
                  .sendWithPromise(
                    'ElementBuilder.createMarkedContentPointInlineProperties',
                    { b: this.id, tag: t }
                  )
                  .then(function (t) {
                    return _(h.Element, t);
                  })
              );
            }),
          (h.ElementBuilder.prototype.createMarkedContentPoint = function (
            t,
            e
          ) {
            return (
              f(
                arguments.length,
                2,
                'createMarkedContentPoint',
                '(string, PDFNet.Obj)',
                [
                  [t, 'string'],
                  [e, 'Object', h.Obj, 'Obj'],
                ]
              ),
              h
                .sendWithPromise('ElementBuilder.createMarkedContentPoint', {
                  b: this.id,
                  tag: t,
                  property_dict: e.id,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.ElementReader.create = function () {
            return h
              .sendWithPromise('elementReaderCreate', {})
              .then(function (t) {
                return D(h.ElementReader, t);
              });
          }),
          (h.ElementReader.prototype.beginOnPage = function (t, e) {
            return (
              void 0 === e && (e = new h.OCGContext('0')),
              f(
                arguments.length,
                1,
                'beginOnPage',
                '(PDFNet.Page, PDFNet.OCGContext)',
                [
                  [t, 'Object', h.Page, 'Page'],
                  [e, 'Object', h.OCGContext, 'OCGContext'],
                ]
              ),
              h.sendWithPromise('ElementReader.beginOnPage', {
                r: this.id,
                page: t.id,
                ctx: e.id,
              })
            );
          }),
          (h.ElementReader.prototype.begin = function (t, e, n) {
            return (
              void 0 === e && (e = new h.Obj('0')),
              void 0 === n && (n = new h.OCGContext('0')),
              f(
                arguments.length,
                1,
                'begin',
                '(PDFNet.Obj, PDFNet.Obj, PDFNet.OCGContext)',
                [
                  [t, 'Object', h.Obj, 'Obj'],
                  [e, 'Object', h.Obj, 'Obj'],
                  [n, 'Object', h.OCGContext, 'OCGContext'],
                ]
              ),
              h.sendWithPromise('ElementReader.begin', {
                r: this.id,
                content_stream: t.id,
                resource_dict: e.id,
                ctx: n.id,
              })
            );
          }),
          (h.ElementReader.prototype.appendResource = function (t) {
            return (
              f(arguments.length, 1, 'appendResource', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('ElementReader.appendResource', {
                r: this.id,
                res: t.id,
              })
            );
          }),
          (h.ElementReader.prototype.next = function () {
            return h
              .sendWithPromise('ElementReader.next', { r: this.id })
              .then(function (t) {
                return _(h.Element, t);
              });
          }),
          (h.ElementReader.prototype.current = function () {
            return h
              .sendWithPromise('ElementReader.current', { r: this.id })
              .then(function (t) {
                return _(h.Element, t);
              });
          }),
          (h.ElementReader.prototype.formBegin = function () {
            return h.sendWithPromise('ElementReader.formBegin', { r: this.id });
          }),
          (h.ElementReader.prototype.patternBegin = function (t, e) {
            return (
              void 0 === e && (e = !1),
              f(arguments.length, 1, 'patternBegin', '(boolean, boolean)', [
                [t, 'boolean'],
                [e, 'boolean'],
              ]),
              h.sendWithPromise('ElementReader.patternBegin', {
                r: this.id,
                fill_pattern: t,
                reset_ctm_tfm: e,
              })
            );
          }),
          (h.ElementReader.prototype.type3FontBegin = function (e, t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(
                arguments.length,
                1,
                'type3FontBegin',
                '(PDFNet.CharData, PDFNet.Obj)',
                [
                  [e, 'Structure', h.CharData, 'CharData'],
                  [t, 'Object', h.Obj, 'Obj'],
                ]
              ),
              F('type3FontBegin', [[e, 0]]),
              (e.yieldFunction = 'ElementReader.type3FontBegin'),
              h
                .sendWithPromise('ElementReader.type3FontBegin', {
                  r: this.id,
                  char_data: e,
                  resource_dict: t.id,
                })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.ElementReader.prototype.end = function () {
            return h.sendWithPromise('ElementReader.end', { r: this.id });
          }),
          (h.ElementReader.prototype.getChangesIterator = function () {
            return h
              .sendWithPromise('ElementReader.getChangesIterator', {
                r: this.id,
              })
              .then(function (t) {
                return D(h.Iterator, t, 'Int');
              });
          }),
          (h.ElementReader.prototype.isChanged = function (t) {
            return (
              f(arguments.length, 1, 'isChanged', '(number)', [[t, 'number']]),
              h.sendWithPromise('ElementReader.isChanged', {
                r: this.id,
                attrib: t,
              })
            );
          }),
          (h.ElementReader.prototype.clearChangeList = function () {
            return h.sendWithPromise('ElementReader.clearChangeList', {
              r: this.id,
            });
          }),
          (h.ElementReader.prototype.getFont = function (t) {
            return (
              f(arguments.length, 1, 'getFont', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('ElementReader.getFont', {
                  r: this.id,
                  name: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.ElementReader.prototype.getXObject = function (t) {
            return (
              f(arguments.length, 1, 'getXObject', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('ElementReader.getXObject', {
                  r: this.id,
                  name: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.ElementReader.prototype.getShading = function (t) {
            return (
              f(arguments.length, 1, 'getShading', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('ElementReader.getShading', {
                  r: this.id,
                  name: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.ElementReader.prototype.getColorSpace = function (t) {
            return (
              f(arguments.length, 1, 'getColorSpace', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('ElementReader.getColorSpace', {
                  r: this.id,
                  name: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.ElementReader.prototype.getPattern = function (t) {
            return (
              f(arguments.length, 1, 'getPattern', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('ElementReader.getPattern', {
                  r: this.id,
                  name: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.ElementReader.prototype.getExtGState = function (t) {
            return (
              f(arguments.length, 1, 'getExtGState', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('ElementReader.getExtGState', {
                  r: this.id,
                  name: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.ElementWriter.create = function () {
            return h
              .sendWithPromise('elementWriterCreate', {})
              .then(function (t) {
                return D(h.ElementWriter, t);
              });
          }),
          (h.ElementWriter.prototype.beginOnPage = function (t, e, n, i, r) {
            return (
              void 0 === e && (e = h.ElementWriter.WriteMode.e_overlay),
              void 0 === n && (n = !0),
              void 0 === i && (i = !0),
              void 0 === r && (r = new h.Obj('0')),
              f(
                arguments.length,
                1,
                'beginOnPage',
                '(PDFNet.Page, number, boolean, boolean, PDFNet.Obj)',
                [
                  [t, 'Object', h.Page, 'Page'],
                  [e, 'number'],
                  [n, 'boolean'],
                  [i, 'boolean'],
                  [r, 'Object', h.Obj, 'Obj'],
                ]
              ),
              h.sendWithPromise('ElementWriter.beginOnPage', {
                w: this.id,
                page: t.id,
                placement: e,
                page_coord_sys: n,
                compress: i,
                resources: r.id,
              })
            );
          }),
          (h.ElementWriter.prototype.begin = function (t, e) {
            return (
              void 0 === e && (e = !0),
              f(arguments.length, 1, 'begin', '(PDFNet.SDFDoc, boolean)', [
                [t, 'SDFDoc'],
                [e, 'boolean'],
              ]),
              h.sendWithPromise('ElementWriter.begin', {
                w: this.id,
                doc: t.id,
                compress: e,
              })
            );
          }),
          (h.ElementWriter.prototype.beginOnObj = function (t, e, n) {
            return (
              void 0 === e && (e = !0),
              void 0 === n && (n = new h.Obj('0')),
              f(
                arguments.length,
                1,
                'beginOnObj',
                '(PDFNet.Obj, boolean, PDFNet.Obj)',
                [
                  [t, 'Object', h.Obj, 'Obj'],
                  [e, 'boolean'],
                  [n, 'Object', h.Obj, 'Obj'],
                ]
              ),
              h.sendWithPromise('ElementWriter.beginOnObj', {
                w: this.id,
                stream_obj_to_update: t.id,
                compress: e,
                resources: n.id,
              })
            );
          }),
          (h.ElementWriter.prototype.end = function () {
            return h
              .sendWithPromise('ElementWriter.end', { w: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.ElementWriter.prototype.writeElement = function (t) {
            return (
              f(arguments.length, 1, 'writeElement', '(PDFNet.Element)', [
                [t, 'Object', h.Element, 'Element'],
              ]),
              h.sendWithPromise('ElementWriter.writeElement', {
                w: this.id,
                element: t.id,
              })
            );
          }),
          (h.ElementWriter.prototype.writePlacedElement = function (t) {
            return (
              f(arguments.length, 1, 'writePlacedElement', '(PDFNet.Element)', [
                [t, 'Object', h.Element, 'Element'],
              ]),
              h.sendWithPromise('ElementWriter.writePlacedElement', {
                w: this.id,
                element: t.id,
              })
            );
          }),
          (h.ElementWriter.prototype.flush = function () {
            return h.sendWithPromise('ElementWriter.flush', { w: this.id });
          }),
          (h.ElementWriter.prototype.writeBuffer = function (t) {
            f(arguments.length, 1, 'writeBuffer', '(ArrayBuffer|TypedArray)', [
              [t, 'ArrayBuffer'],
            ]);
            var e = b(t, !1);
            return h.sendWithPromise('ElementWriter.writeBuffer', {
              w: this.id,
              data_buf: e,
            });
          }),
          (h.ElementWriter.prototype.writeString = function (t) {
            return (
              f(arguments.length, 1, 'writeString', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('ElementWriter.writeString', {
                w: this.id,
                str: t,
              })
            );
          }),
          (h.ElementWriter.prototype.setDefaultGState = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setDefaultGState',
                '(PDFNet.ElementReader)',
                [[t, 'Object', h.ElementReader, 'ElementReader']]
              ),
              h.sendWithPromise('ElementWriter.setDefaultGState', {
                w: this.id,
                reader: t.id,
              })
            );
          }),
          (h.ElementWriter.prototype.writeGStateChanges = function (t) {
            return (
              f(arguments.length, 1, 'writeGStateChanges', '(PDFNet.Element)', [
                [t, 'Object', h.Element, 'Element'],
              ]),
              h.sendWithPromise('ElementWriter.writeGStateChanges', {
                w: this.id,
                element: t.id,
              })
            );
          }),
          (h.FileSpec.create = function (t, e, n) {
            return (
              void 0 === n && (n = !0),
              f(
                arguments.length,
                2,
                'create',
                '(PDFNet.SDFDoc, string, boolean)',
                [
                  [t, 'SDFDoc'],
                  [e, 'string'],
                  [n, 'boolean'],
                ]
              ),
              h
                .sendWithPromise('fileSpecCreate', {
                  doc: t.id,
                  path: e,
                  embed: n,
                })
                .then(function (t) {
                  return _(h.FileSpec, t);
                })
            );
          }),
          (h.FileSpec.createURL = function (t, e) {
            return (
              f(arguments.length, 2, 'createURL', '(PDFNet.SDFDoc, string)', [
                [t, 'SDFDoc'],
                [e, 'string'],
              ]),
              h
                .sendWithPromise('fileSpecCreateURL', { doc: t.id, url: e })
                .then(function (t) {
                  return _(h.FileSpec, t);
                })
            );
          }),
          (h.FileSpec.createFromObj = function (t) {
            return (
              f(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('fileSpecCreateFromObj', { f: t.id })
                .then(function (t) {
                  return _(h.FileSpec, t);
                })
            );
          }),
          (h.FileSpec.prototype.copy = function () {
            return h
              .sendWithPromise('FileSpec.copy', { d: this.id })
              .then(function (t) {
                return _(h.FileSpec, t);
              });
          }),
          (h.FileSpec.prototype.compare = function (t) {
            return (
              f(arguments.length, 1, 'compare', '(PDFNet.FileSpec)', [
                [t, 'Object', h.FileSpec, 'FileSpec'],
              ]),
              h.sendWithPromise('FileSpec.compare', { fs: this.id, d: t.id })
            );
          }),
          (h.FileSpec.prototype.isValid = function () {
            return h.sendWithPromise('FileSpec.isValid', { fs: this.id });
          }),
          (h.FileSpec.prototype.export = function (t) {
            return (
              void 0 === t && (t = ''),
              f(arguments.length, 0, 'export', '(string)', [[t, 'string']]),
              h.sendWithPromise('FileSpec.export', { fs: this.id, save_as: t })
            );
          }),
          (h.FileSpec.prototype.getFileData = function () {
            return h
              .sendWithPromise('FileSpec.getFileData', { fs: this.id })
              .then(function (t) {
                return _(h.Filter, t);
              });
          }),
          (h.FileSpec.prototype.getFilePath = function () {
            return h.sendWithPromise('FileSpec.getFilePath', { fs: this.id });
          }),
          (h.FileSpec.prototype.setDesc = function (t) {
            return (
              f(arguments.length, 1, 'setDesc', '(string)', [[t, 'string']]),
              h.sendWithPromise('FileSpec.setDesc', { fs: this.id, desc: t })
            );
          }),
          (h.FileSpec.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('FileSpec.getSDFObj', { fs: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Flattener.create = function () {
            return h.sendWithPromise('flattenerCreate', {}).then(function (t) {
              return D(h.Flattener, t);
            });
          }),
          (h.Flattener.prototype.setDPI = function (t) {
            return (
              f(arguments.length, 1, 'setDPI', '(number)', [[t, 'number']]),
              h.sendWithPromise('Flattener.setDPI', {
                flattener: this.id,
                dpi: t,
              })
            );
          }),
          (h.Flattener.prototype.setThreshold = function (t) {
            return (
              f(arguments.length, 1, 'setThreshold', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Flattener.setThreshold', {
                flattener: this.id,
                threshold: t,
              })
            );
          }),
          (h.Flattener.prototype.setMaximumImagePixels = function (t) {
            return (
              f(arguments.length, 1, 'setMaximumImagePixels', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Flattener.setMaximumImagePixels', {
                flattener: this.id,
                max_pixels: t,
              })
            );
          }),
          (h.Flattener.prototype.setPreferJPG = function (t) {
            return (
              f(arguments.length, 1, 'setPreferJPG', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('Flattener.setPreferJPG', {
                flattener: this.id,
                jpg: t,
              })
            );
          }),
          (h.Flattener.prototype.setJPGQuality = function (t) {
            return (
              f(arguments.length, 1, 'setJPGQuality', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Flattener.setJPGQuality', {
                flattener: this.id,
                quality: t,
              })
            );
          }),
          (h.Flattener.prototype.setPathHinting = function (t) {
            return (
              f(arguments.length, 1, 'setPathHinting', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('Flattener.setPathHinting', {
                flattener: this.id,
                hinting: t,
              })
            );
          }),
          (h.Flattener.prototype.process = function (t, e) {
            return (
              f(arguments.length, 2, 'process', '(PDFNet.PDFDoc, number)', [
                [t, 'PDFDoc'],
                [e, 'number'],
              ]),
              h.sendWithPromise('Flattener.process', {
                flattener: this.id,
                doc: t.id,
                mode: e,
              })
            );
          }),
          (h.Flattener.prototype.processPage = function (t, e) {
            return (
              f(arguments.length, 2, 'processPage', '(PDFNet.Page, number)', [
                [t, 'Object', h.Page, 'Page'],
                [e, 'number'],
              ]),
              h.sendWithPromise('Flattener.processPage', {
                flattener: this.id,
                page: t.id,
                mode: e,
              })
            );
          }),
          (h.Font.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('fontCreateFromObj', { font_dict: t.id })
                .then(function (t) {
                  return D(h.Font, t);
                })
            );
          }),
          (h.Font.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, number)', [
                [t, 'SDFDoc'],
                [e, 'number'],
              ]),
              h
                .sendWithPromise('fontCreate', { doc: t.id, type: e })
                .then(function (t) {
                  return D(h.Font, t);
                })
            );
          }),
          (h.Font.createFromFontDescriptor = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'createFromFontDescriptor',
                '(PDFNet.SDFDoc, PDFNet.Font, string)',
                [
                  [t, 'SDFDoc'],
                  [e, 'Object', h.Font, 'Font'],
                  [n, 'string'],
                ]
              ),
              h
                .sendWithPromise('fontCreateFromFontDescriptor', {
                  doc: t.id,
                  from: e.id,
                  char_set: n,
                })
                .then(function (t) {
                  return D(h.Font, t);
                })
            );
          }),
          (h.Font.createFromName = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'createFromName',
                '(PDFNet.SDFDoc, string, string)',
                [
                  [t, 'SDFDoc'],
                  [e, 'string'],
                  [n, 'string'],
                ]
              ),
              h
                .sendWithPromise('fontCreateFromName', {
                  doc: t.id,
                  name: e,
                  char_set: n,
                })
                .then(function (t) {
                  return D(h.Font, t);
                })
            );
          }),
          (h.Font.createAndEmbed = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createAndEmbed',
                '(PDFNet.SDFDoc, number)',
                [
                  [t, 'SDFDoc'],
                  [e, 'number'],
                ]
              ),
              h
                .sendWithPromise('fontCreateAndEmbed', { doc: t.id, type: e })
                .then(function (t) {
                  return D(h.Font, t);
                })
            );
          }),
          (h.Font.createTrueTypeFontWithBuffer = function (t, e, n, i) {
            return (
              void 0 === n && (n = !0),
              void 0 === i && (i = !0),
              f(
                arguments.length,
                2,
                'createTrueTypeFontWithBuffer',
                '(PDFNet.SDFDoc, ArrayBuffer|TypedArray, boolean, boolean)',
                [
                  [t, 'SDFDoc'],
                  [e, 'ArrayBuffer'],
                  [n, 'boolean'],
                  [i, 'boolean'],
                ]
              ),
              (e = b(e, !1)),
              h
                .sendWithPromise('fontCreateTrueTypeFontWithBuffer', {
                  doc: t.id,
                  font_path: e,
                  embed: n,
                  subset: i,
                })
                .then(function (t) {
                  return D(h.Font, t);
                })
            );
          }),
          (h.Font.createCIDTrueTypeFontWithBuffer = function (
            t,
            e,
            n,
            i,
            r,
            o
          ) {
            return (
              void 0 === n && (n = !0),
              void 0 === i && (i = !0),
              void 0 === r && (r = h.Font.Encoding.e_IdentityH),
              void 0 === o && (o = 0),
              f(
                arguments.length,
                2,
                'createCIDTrueTypeFontWithBuffer',
                '(PDFNet.SDFDoc, ArrayBuffer|TypedArray, boolean, boolean, number, number)',
                [
                  [t, 'SDFDoc'],
                  [e, 'ArrayBuffer'],
                  [n, 'boolean'],
                  [i, 'boolean'],
                  [r, 'number'],
                  [o, 'number'],
                ]
              ),
              (e = b(e, !1)),
              h
                .sendWithPromise('fontCreateCIDTrueTypeFontWithBuffer', {
                  doc: t.id,
                  font_path: e,
                  embed: n,
                  subset: i,
                  encoding: r,
                  ttc_font_index: o,
                })
                .then(function (t) {
                  return D(h.Font, t);
                })
            );
          }),
          (h.Font.createType1FontWithBuffer = function (t, e, n) {
            return (
              void 0 === n && (n = !0),
              f(
                arguments.length,
                2,
                'createType1FontWithBuffer',
                '(PDFNet.SDFDoc, ArrayBuffer|TypedArray, boolean)',
                [
                  [t, 'SDFDoc'],
                  [e, 'ArrayBuffer'],
                  [n, 'boolean'],
                ]
              ),
              (e = b(e, !1)),
              h
                .sendWithPromise('fontCreateType1FontWithBuffer', {
                  doc: t.id,
                  font_path: e,
                  embed: n,
                })
                .then(function (t) {
                  return D(h.Font, t);
                })
            );
          }),
          (h.Font.prototype.getType = function () {
            return h.sendWithPromise('Font.getType', { font: this.id });
          }),
          (h.Font.prototype.isSimple = function () {
            return h.sendWithPromise('Font.isSimple', { font: this.id });
          }),
          (h.Font.getTypeFromObj = function (t) {
            return (
              f(arguments.length, 1, 'getTypeFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('fontGetTypeFromObj', { font_dict: t.id })
            );
          }),
          (h.Font.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('Font.getSDFObj', { font: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Font.prototype.getDescriptor = function () {
            return h
              .sendWithPromise('Font.getDescriptor', { font: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Font.prototype.getName = function () {
            return h.sendWithPromise('Font.getName', { font: this.id });
          }),
          (h.Font.prototype.getFamilyName = function () {
            return h.sendWithPromise('Font.getFamilyName', { font: this.id });
          }),
          (h.Font.prototype.isFixedWidth = function () {
            return h.sendWithPromise('Font.isFixedWidth', { font: this.id });
          }),
          (h.Font.prototype.isSerif = function () {
            return h.sendWithPromise('Font.isSerif', { font: this.id });
          }),
          (h.Font.prototype.isSymbolic = function () {
            return h.sendWithPromise('Font.isSymbolic', { font: this.id });
          }),
          (h.Font.prototype.isItalic = function () {
            return h.sendWithPromise('Font.isItalic', { font: this.id });
          }),
          (h.Font.prototype.isAllCap = function () {
            return h.sendWithPromise('Font.isAllCap', { font: this.id });
          }),
          (h.Font.prototype.isForceBold = function () {
            return h.sendWithPromise('Font.isForceBold', { font: this.id });
          }),
          (h.Font.prototype.isHorizontalMode = function () {
            return h.sendWithPromise('Font.isHorizontalMode', {
              font: this.id,
            });
          }),
          (h.Font.prototype.getWidth = function (t) {
            return (
              f(arguments.length, 1, 'getWidth', '(number)', [[t, 'number']]),
              h.sendWithPromise('Font.getWidth', {
                font: this.id,
                char_code: t,
              })
            );
          }),
          (h.Font.prototype.getMaxWidth = function () {
            return h.sendWithPromise('Font.getMaxWidth', { font: this.id });
          }),
          (h.Font.prototype.getMissingWidth = function () {
            return h.sendWithPromise('Font.getMissingWidth', { font: this.id });
          }),
          (h.Font.prototype.getCharCodeIterator = function () {
            return h
              .sendWithPromise('Font.getCharCodeIterator', { font: this.id })
              .then(function (t) {
                return D(h.Iterator, t, 'Int');
              });
          }),
          (h.Font.prototype.getShapedText = function (t) {
            return (
              f(arguments.length, 1, 'getShapedText', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('Font.getShapedText', {
                  font: this.id,
                  text_to_shape: t,
                })
                .then(function (t) {
                  return D(h.ShapedText, t);
                })
            );
          }),
          (h.Font.prototype.getEncoding = function () {
            return h.sendWithPromise('Font.getEncoding', { font: this.id });
          }),
          (h.Font.prototype.isEmbedded = function () {
            return h.sendWithPromise('Font.isEmbedded', { font: this.id });
          }),
          (h.Font.prototype.getEmbeddedFontName = function () {
            return h.sendWithPromise('Font.getEmbeddedFontName', {
              font: this.id,
            });
          }),
          (h.Font.prototype.getEmbeddedFont = function () {
            return h
              .sendWithPromise('Font.getEmbeddedFont', { font: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Font.prototype.getEmbeddedFontBufSize = function () {
            return h.sendWithPromise('Font.getEmbeddedFontBufSize', {
              font: this.id,
            });
          }),
          (h.Font.prototype.getUnitsPerEm = function () {
            return h.sendWithPromise('Font.getUnitsPerEm', { font: this.id });
          }),
          (h.Font.prototype.getBBox = function () {
            return h
              .sendWithPromise('Font.getBBox', { font: this.id })
              .then(function (t) {
                return new h.Rect(t);
              });
          }),
          (h.Font.prototype.getAscent = function () {
            return h.sendWithPromise('Font.getAscent', { font: this.id });
          }),
          (h.Font.prototype.getDescent = function () {
            return h.sendWithPromise('Font.getDescent', { font: this.id });
          }),
          (h.Font.prototype.getStandardType1FontType = function () {
            return h.sendWithPromise('Font.getStandardType1FontType', {
              font: this.id,
            });
          }),
          (h.Font.prototype.isCFF = function () {
            return h.sendWithPromise('Font.isCFF', { font: this.id });
          }),
          (h.Font.prototype.getType3FontMatrix = function () {
            return h
              .sendWithPromise('Font.getType3FontMatrix', { font: this.id })
              .then(function (t) {
                return new h.Matrix2D(t);
              });
          }),
          (h.Font.prototype.getType3GlyphStream = function (t) {
            return (
              f(arguments.length, 1, 'getType3GlyphStream', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('Font.getType3GlyphStream', {
                  font: this.id,
                  char_code: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Font.prototype.getVerticalAdvance = function (t) {
            return (
              f(arguments.length, 1, 'getVerticalAdvance', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Font.getVerticalAdvance', {
                font: this.id,
                char_code: t,
              })
            );
          }),
          (h.Font.prototype.getDescendant = function () {
            return h
              .sendWithPromise('Font.getDescendant', { font: this.id })
              .then(function (t) {
                return D(h.Font, t);
              });
          }),
          (h.Font.prototype.mapToCID = function (t) {
            return (
              f(arguments.length, 1, 'mapToCID', '(number)', [[t, 'number']]),
              h.sendWithPromise('Font.mapToCID', {
                font: this.id,
                char_code: t,
              })
            );
          }),
          (h.Function.create = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'create', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('functionCreate', { funct_dict: t.id })
                .then(function (t) {
                  return D(h.Function, t);
                })
            );
          }),
          (h.Function.prototype.getType = function () {
            return h.sendWithPromise('Function.getType', { f: this.id });
          }),
          (h.Function.prototype.getInputCardinality = function () {
            return h.sendWithPromise('Function.getInputCardinality', {
              f: this.id,
            });
          }),
          (h.Function.prototype.getOutputCardinality = function () {
            return h.sendWithPromise('Function.getOutputCardinality', {
              f: this.id,
            });
          }),
          (h.Function.prototype.eval = function (t, e) {
            return (
              f(arguments.length, 2, 'eval', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h.sendWithPromise('Function.eval', {
                f: this.id,
                inval: t,
                outval: e,
              })
            );
          }),
          (h.Function.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('Function.getSDFObj', { f: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Highlights.create = function () {
            return h.sendWithPromise('highlightsCreate', {}).then(function (t) {
              return D(h.Highlights, t);
            });
          }),
          (h.Highlights.prototype.copyCtor = function () {
            return h
              .sendWithPromise('Highlights.copyCtor', { hlts: this.id })
              .then(function (t) {
                return D(h.Highlights, t);
              });
          }),
          (h.Highlights.prototype.add = function (t) {
            return (
              f(arguments.length, 1, 'add', '(PDFNet.Highlights)', [
                [t, 'Object', h.Highlights, 'Highlights'],
              ]),
              h.sendWithPromise('Highlights.add', {
                hlts2: this.id,
                hlts: t.id,
              })
            );
          }),
          (h.Highlights.prototype.saveToString = function () {
            return h.sendWithPromise('Highlights.saveToString', {
              hlts: this.id,
            });
          }),
          (h.Highlights.prototype.clear = function () {
            return h.sendWithPromise('Highlights.clear', { hlts: this.id });
          }),
          (h.Highlights.prototype.begin = function (t) {
            return (
              f(arguments.length, 1, 'begin', '(PDFNet.PDFDoc)', [
                [t, 'PDFDoc'],
              ]),
              h.sendWithPromise('Highlights.begin', {
                hlts: this.id,
                doc: t.id,
              })
            );
          }),
          (h.Highlights.prototype.hasNext = function () {
            return h.sendWithPromise('Highlights.hasNext', { hlts: this.id });
          }),
          (h.Highlights.prototype.next = function () {
            return h.sendWithPromise('Highlights.next', { hlts: this.id });
          }),
          (h.Highlights.prototype.getCurrentPageNumber = function () {
            return h.sendWithPromise('Highlights.getCurrentPageNumber', {
              hlts: this.id,
            });
          }),
          (h.Highlights.prototype.getCurrentTextRange = function () {
            return h
              .sendWithPromise('Highlights.getCurrentTextRange', {
                hlts: this.id,
              })
              .then(function (t) {
                return _(h.TextRange, t);
              });
          }),
          (h.Image.createFromMemory = function (t, e, n, i, r, o, s) {
            void 0 === s && (s = new h.Obj('0')),
              f(
                arguments.length,
                6,
                'createFromMemory',
                '(PDFNet.SDFDoc, ArrayBuffer|TypedArray, number, number, number, PDFNet.ColorSpace, PDFNet.Obj)',
                [
                  [t, 'SDFDoc'],
                  [e, 'ArrayBuffer'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                  [o, 'Object', h.ColorSpace, 'ColorSpace'],
                  [s, 'Object', h.Obj, 'Obj'],
                ]
              );
            var u = b(e, !1);
            return h
              .sendWithPromise('imageCreateFromMemory', {
                doc: t.id,
                buf: u,
                width: n,
                height: i,
                bpc: r,
                color_space: o.id,
                encoder_hints: s.id,
              })
              .then(function (t) {
                return _(h.Image, t);
              });
          }),
          (h.Image.createFromMemory2 = function (t, e, n) {
            void 0 === n && (n = new h.Obj('0')),
              f(
                arguments.length,
                2,
                'createFromMemory2',
                '(PDFNet.SDFDoc, ArrayBuffer|TypedArray, PDFNet.Obj)',
                [
                  [t, 'SDFDoc'],
                  [e, 'ArrayBuffer'],
                  [n, 'Object', h.Obj, 'Obj'],
                ]
              );
            var i = b(e, !1);
            return h
              .sendWithPromise('imageCreateFromMemory2', {
                doc: t.id,
                buf: i,
                encoder_hints: n.id,
              })
              .then(function (t) {
                return _(h.Image, t);
              });
          }),
          (h.Image.createFromStream = function (t, e, n, i, r, o, s) {
            return (
              void 0 === s && (s = new h.Obj('0')),
              f(
                arguments.length,
                6,
                'createFromStream',
                '(PDFNet.SDFDoc, PDFNet.FilterReader, number, number, number, PDFNet.ColorSpace, PDFNet.Obj)',
                [
                  [t, 'SDFDoc'],
                  [e, 'Object', h.FilterReader, 'FilterReader'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                  [o, 'Object', h.ColorSpace, 'ColorSpace'],
                  [s, 'Object', h.Obj, 'Obj'],
                ]
              ),
              h
                .sendWithPromise('imageCreateFromStream', {
                  doc: t.id,
                  image_data: e.id,
                  width: n,
                  height: i,
                  bpc: r,
                  color_space: o.id,
                  encoder_hints: s.id,
                })
                .then(function (t) {
                  return _(h.Image, t);
                })
            );
          }),
          (h.Image.createFromStream2 = function (t, e, n) {
            return (
              void 0 === n && (n = new h.Obj('0')),
              f(
                arguments.length,
                2,
                'createFromStream2',
                '(PDFNet.SDFDoc, PDFNet.Filter, PDFNet.Obj)',
                [
                  [t, 'SDFDoc'],
                  [e, 'Object', h.Filter, 'Filter'],
                  [n, 'Object', h.Obj, 'Obj'],
                ]
              ),
              0 != e.id && O(e.id),
              h
                .sendWithPromise('imageCreateFromStream2', {
                  doc: t.id,
                  no_own_image_data: e.id,
                  encoder_hints: n.id,
                })
                .then(function (t) {
                  return _(h.Image, t);
                })
            );
          }),
          (h.Image.createImageMask = function (t, e, n, i, r) {
            void 0 === r && (r = new h.Obj('0')),
              f(
                arguments.length,
                4,
                'createImageMask',
                '(PDFNet.SDFDoc, ArrayBuffer|TypedArray, number, number, PDFNet.Obj)',
                [
                  [t, 'SDFDoc'],
                  [e, 'ArrayBuffer'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'Object', h.Obj, 'Obj'],
                ]
              );
            var o = b(e, !1);
            return h
              .sendWithPromise('imageCreateImageMask', {
                doc: t.id,
                buf: o,
                width: n,
                height: i,
                encoder_hints: r.id,
              })
              .then(function (t) {
                return _(h.Image, t);
              });
          }),
          (h.Image.createImageMaskFromStream = function (t, e, n, i, r) {
            return (
              void 0 === r && (r = new h.Obj('0')),
              f(
                arguments.length,
                4,
                'createImageMaskFromStream',
                '(PDFNet.SDFDoc, PDFNet.FilterReader, number, number, PDFNet.Obj)',
                [
                  [t, 'SDFDoc'],
                  [e, 'Object', h.FilterReader, 'FilterReader'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'Object', h.Obj, 'Obj'],
                ]
              ),
              h
                .sendWithPromise('imageCreateImageMaskFromStream', {
                  doc: t.id,
                  image_data: e.id,
                  width: n,
                  height: i,
                  encoder_hints: r.id,
                })
                .then(function (t) {
                  return _(h.Image, t);
                })
            );
          }),
          (h.Image.createSoftMask = function (t, e, n, i, r, o) {
            void 0 === o && (o = new h.Obj('0')),
              f(
                arguments.length,
                5,
                'createSoftMask',
                '(PDFNet.SDFDoc, ArrayBuffer|TypedArray, number, number, number, PDFNet.Obj)',
                [
                  [t, 'SDFDoc'],
                  [e, 'ArrayBuffer'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                  [o, 'Object', h.Obj, 'Obj'],
                ]
              );
            var s = b(e, !1);
            return h
              .sendWithPromise('imageCreateSoftMask', {
                doc: t.id,
                buf: s,
                width: n,
                height: i,
                bpc: r,
                encoder_hints: o.id,
              })
              .then(function (t) {
                return _(h.Image, t);
              });
          }),
          (h.Image.createSoftMaskFromStream = function (t, e, n, i, r, o) {
            return (
              void 0 === o && (o = new h.Obj('0')),
              f(
                arguments.length,
                5,
                'createSoftMaskFromStream',
                '(PDFNet.SDFDoc, PDFNet.FilterReader, number, number, number, PDFNet.Obj)',
                [
                  [t, 'SDFDoc'],
                  [e, 'Object', h.FilterReader, 'FilterReader'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                  [o, 'Object', h.Obj, 'Obj'],
                ]
              ),
              h
                .sendWithPromise('imageCreateSoftMaskFromStream', {
                  doc: t.id,
                  image_data: e.id,
                  width: n,
                  height: i,
                  bpc: r,
                  encoder_hints: o.id,
                })
                .then(function (t) {
                  return _(h.Image, t);
                })
            );
          }),
          (h.Image.createDirectFromMemory = function (t, e, n, i, r, o, s) {
            f(
              arguments.length,
              7,
              'createDirectFromMemory',
              '(PDFNet.SDFDoc, ArrayBuffer|TypedArray, number, number, number, PDFNet.ColorSpace, number)',
              [
                [t, 'SDFDoc'],
                [e, 'ArrayBuffer'],
                [n, 'number'],
                [i, 'number'],
                [r, 'number'],
                [o, 'Object', h.ColorSpace, 'ColorSpace'],
                [s, 'number'],
              ]
            );
            var u = b(e, !1);
            return h
              .sendWithPromise('imageCreateDirectFromMemory', {
                doc: t.id,
                buf: u,
                width: n,
                height: i,
                bpc: r,
                color_space: o.id,
                input_format: s,
              })
              .then(function (t) {
                return _(h.Image, t);
              });
          }),
          (h.Image.createDirectFromStream = function (t, e, n, i, r, o, s) {
            return (
              f(
                arguments.length,
                7,
                'createDirectFromStream',
                '(PDFNet.SDFDoc, PDFNet.FilterReader, number, number, number, PDFNet.ColorSpace, number)',
                [
                  [t, 'SDFDoc'],
                  [e, 'Object', h.FilterReader, 'FilterReader'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                  [o, 'Object', h.ColorSpace, 'ColorSpace'],
                  [s, 'number'],
                ]
              ),
              h
                .sendWithPromise('imageCreateDirectFromStream', {
                  doc: t.id,
                  image_data: e.id,
                  width: n,
                  height: i,
                  bpc: r,
                  color_space: o.id,
                  input_format: s,
                })
                .then(function (t) {
                  return _(h.Image, t);
                })
            );
          }),
          (h.Image.createFromObj = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('imageCreateFromObj', { image_xobject: t.id })
                .then(function (t) {
                  return _(h.Image, t);
                })
            );
          }),
          (h.Image.prototype.copy = function () {
            return h
              .sendWithPromise('Image.copy', { c: this.id })
              .then(function (t) {
                return _(h.Image, t);
              });
          }),
          (h.Image.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('Image.getSDFObj', { img: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Image.prototype.isValid = function () {
            return h.sendWithPromise('Image.isValid', { img: this.id });
          }),
          (h.Image.prototype.getImageData = function () {
            return h
              .sendWithPromise('Image.getImageData', { img: this.id })
              .then(function (t) {
                return _(h.Filter, t);
              });
          }),
          (h.Image.prototype.getImageDataSize = function () {
            return h.sendWithPromise('Image.getImageDataSize', {
              img: this.id,
            });
          }),
          (h.Image.prototype.getImageColorSpace = function () {
            return h
              .sendWithPromise('Image.getImageColorSpace', { img: this.id })
              .then(function (t) {
                return D(h.ColorSpace, t);
              });
          }),
          (h.Image.prototype.getImageWidth = function () {
            return h.sendWithPromise('Image.getImageWidth', { img: this.id });
          }),
          (h.Image.prototype.getImageHeight = function () {
            return h.sendWithPromise('Image.getImageHeight', { img: this.id });
          }),
          (h.Image.prototype.getDecodeArray = function () {
            return h
              .sendWithPromise('Image.getDecodeArray', { img: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Image.prototype.getBitsPerComponent = function () {
            return h.sendWithPromise('Image.getBitsPerComponent', {
              img: this.id,
            });
          }),
          (h.Image.prototype.getComponentNum = function () {
            return h.sendWithPromise('Image.getComponentNum', { img: this.id });
          }),
          (h.Image.prototype.isImageMask = function () {
            return h.sendWithPromise('Image.isImageMask', { img: this.id });
          }),
          (h.Image.prototype.isImageInterpolate = function () {
            return h.sendWithPromise('Image.isImageInterpolate', {
              img: this.id,
            });
          }),
          (h.Image.prototype.getMask = function () {
            return h
              .sendWithPromise('Image.getMask', { img: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Image.prototype.setMask = function (t) {
            return (
              f(arguments.length, 1, 'setMask', '(PDFNet.Image)', [
                [t, 'Object', h.Image, 'Image'],
              ]),
              h.sendWithPromise('Image.setMask', {
                img: this.id,
                image_mask: t.id,
              })
            );
          }),
          (h.Image.prototype.setMaskWithObj = function (t) {
            return (
              f(arguments.length, 1, 'setMaskWithObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('Image.setMaskWithObj', {
                img: this.id,
                mask: t.id,
              })
            );
          }),
          (h.Image.prototype.getSoftMask = function () {
            return h
              .sendWithPromise('Image.getSoftMask', { img: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Image.prototype.setSoftMask = function (t) {
            return (
              f(arguments.length, 1, 'setSoftMask', '(PDFNet.Image)', [
                [t, 'Object', h.Image, 'Image'],
              ]),
              h.sendWithPromise('Image.setSoftMask', {
                img: this.id,
                soft_mask: t.id,
              })
            );
          }),
          (h.Image.prototype.getImageRenderingIntent = function () {
            return h.sendWithPromise('Image.getImageRenderingIntent', {
              img: this.id,
            });
          }),
          (h.Image.prototype.exportFromStream = function (t) {
            return (
              f(
                arguments.length,
                1,
                'exportFromStream',
                '(PDFNet.FilterWriter)',
                [[t, 'Object', h.FilterWriter, 'FilterWriter']]
              ),
              h.sendWithPromise('Image.exportFromStream', {
                img: this.id,
                writer: t.id,
              })
            );
          }),
          (h.Image.prototype.exportAsTiffFromStream = function (t) {
            return (
              f(
                arguments.length,
                1,
                'exportAsTiffFromStream',
                '(PDFNet.FilterWriter)',
                [[t, 'Object', h.FilterWriter, 'FilterWriter']]
              ),
              h.sendWithPromise('Image.exportAsTiffFromStream', {
                img: this.id,
                writer: t.id,
              })
            );
          }),
          (h.Image.prototype.exportAsPngFromStream = function (t) {
            return (
              f(
                arguments.length,
                1,
                'exportAsPngFromStream',
                '(PDFNet.FilterWriter)',
                [[t, 'Object', h.FilterWriter, 'FilterWriter']]
              ),
              h.sendWithPromise('Image.exportAsPngFromStream', {
                img: this.id,
                writer: t.id,
              })
            );
          }),
          (h.PageLabel.create = function (t, e, n, i) {
            return (
              void 0 === n && (n = ''),
              void 0 === i && (i = 1),
              f(
                arguments.length,
                2,
                'create',
                '(PDFNet.SDFDoc, number, string, number)',
                [
                  [t, 'SDFDoc'],
                  [e, 'number'],
                  [n, 'string'],
                  [i, 'number'],
                ]
              ),
              h
                .sendWithPromise('pageLabelCreate', {
                  doc: t.id,
                  style: e,
                  prefix: n,
                  start_at: i,
                })
                .then(function (t) {
                  return new h.PageLabel(t);
                })
            );
          }),
          (h.PageLabel.createFromObj = function (t, e, n) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              void 0 === e && (e = -1),
              void 0 === n && (n = -1),
              f(
                arguments.length,
                0,
                'createFromObj',
                '(PDFNet.Obj, number, number)',
                [
                  [t, 'Object', h.Obj, 'Obj'],
                  [e, 'number'],
                  [n, 'number'],
                ]
              ),
              h
                .sendWithPromise('pageLabelCreateFromObj', {
                  l: t.id,
                  first_page: e,
                  last_page: n,
                })
                .then(function (t) {
                  return new h.PageLabel(t);
                })
            );
          }),
          (h.PageLabel.prototype.compare = function (t) {
            f(arguments.length, 1, 'compare', '(PDFNet.PageLabel)', [
              [t, 'Structure', h.PageLabel, 'PageLabel'],
            ]),
              P('compare', this.yieldFunction),
              F('compare', [[t, 0]]);
            var e = this;
            return (
              (this.yieldFunction = 'PageLabel.compare'),
              h
                .sendWithPromise('PageLabel.compare', { l: this, d: t })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.l, e), t.result;
                })
            );
          }),
          (h.PageLabel.prototype.isValid = function () {
            return (
              P('isValid', this.yieldFunction),
              h.sendWithPromise('PageLabel.isValid', { l: this })
            );
          }),
          (h.PageLabel.prototype.getLabelTitle = function (t) {
            f(arguments.length, 1, 'getLabelTitle', '(number)', [
              [t, 'number'],
            ]),
              P('getLabelTitle', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'PageLabel.getLabelTitle'),
              h
                .sendWithPromise('PageLabel.getLabelTitle', {
                  l: this,
                  page_num: t,
                })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.l, e), t.result;
                })
            );
          }),
          (h.PageLabel.prototype.setStyle = function (t) {
            f(arguments.length, 1, 'setStyle', '(number)', [[t, 'number']]),
              P('setStyle', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'PageLabel.setStyle'),
              h
                .sendWithPromise('PageLabel.setStyle', { l: this, style: t })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.PageLabel.prototype.getStyle = function () {
            return (
              P('getStyle', this.yieldFunction),
              h.sendWithPromise('PageLabel.getStyle', { l: this })
            );
          }),
          (h.PageLabel.prototype.getPrefix = function () {
            return (
              P('getPrefix', this.yieldFunction),
              h.sendWithPromise('PageLabel.getPrefix', { l: this })
            );
          }),
          (h.PageLabel.prototype.setPrefix = function (t) {
            f(arguments.length, 1, 'setPrefix', '(string)', [[t, 'string']]),
              P('setPrefix', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'PageLabel.setPrefix'),
              h
                .sendWithPromise('PageLabel.setPrefix', { l: this, prefix: t })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.PageLabel.prototype.getStart = function () {
            return (
              P('getStart', this.yieldFunction),
              h.sendWithPromise('PageLabel.getStart', { l: this })
            );
          }),
          (h.PageLabel.prototype.setStart = function (t) {
            f(arguments.length, 1, 'setStart', '(number)', [[t, 'number']]),
              P('setStart', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'PageLabel.setStart'),
              h
                .sendWithPromise('PageLabel.setStart', { l: this, start_at: t })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.PageLabel.prototype.getFirstPageNum = function () {
            P('getFirstPageNum', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'PageLabel.getFirstPageNum'),
              h
                .sendWithPromise('PageLabel.getFirstPageNum', { l: this })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.l, e), t.result;
                })
            );
          }),
          (h.PageLabel.prototype.getLastPageNum = function () {
            P('getLastPageNum', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'PageLabel.getLastPageNum'),
              h
                .sendWithPromise('PageLabel.getLastPageNum', { l: this })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.l, e), t.result;
                })
            );
          }),
          (h.PageLabel.prototype.getSDFObj = function () {
            return (
              P('getSDFObj', this.yieldFunction),
              h
                .sendWithPromise('PageLabel.getSDFObj', { l: this })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.PageSet.create = function () {
            return h.sendWithPromise('pageSetCreate', {}).then(function (t) {
              return D(h.PageSet, t);
            });
          }),
          (h.PageSet.createSinglePage = function (t) {
            return (
              f(arguments.length, 1, 'createSinglePage', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('pageSetCreateSinglePage', { one_page: t })
                .then(function (t) {
                  return D(h.PageSet, t);
                })
            );
          }),
          (h.PageSet.createRange = function (t, e) {
            return (
              f(arguments.length, 2, 'createRange', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h
                .sendWithPromise('pageSetCreateRange', {
                  range_start: t,
                  range_end: e,
                })
                .then(function (t) {
                  return D(h.PageSet, t);
                })
            );
          }),
          (h.PageSet.createFilteredRange = function (t, e, n) {
            return (
              void 0 === n && (n = h.PageSet.Filter.e_all),
              f(
                arguments.length,
                2,
                'createFilteredRange',
                '(number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                ]
              ),
              h
                .sendWithPromise('pageSetCreateFilteredRange', {
                  range_start: t,
                  range_end: e,
                  filter: n,
                })
                .then(function (t) {
                  return D(h.PageSet, t);
                })
            );
          }),
          (h.PageSet.prototype.addPage = function (t) {
            return (
              f(arguments.length, 1, 'addPage', '(number)', [[t, 'number']]),
              h.sendWithPromise('PageSet.addPage', {
                page_set: this.id,
                one_page: t,
              })
            );
          }),
          (h.PageSet.prototype.addRange = function (t, e, n) {
            return (
              void 0 === n && (n = h.PageSet.Filter.e_all),
              f(arguments.length, 2, 'addRange', '(number, number, number)', [
                [t, 'number'],
                [e, 'number'],
                [n, 'number'],
              ]),
              h.sendWithPromise('PageSet.addRange', {
                page_set: this.id,
                range_start: t,
                range_end: e,
                filter: n,
              })
            );
          }),
          (h.PatternColor.create = function (t) {
            return (
              f(arguments.length, 1, 'create', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('patternColorCreate', { pattern: t.id })
                .then(function (t) {
                  return D(h.PatternColor, t);
                })
            );
          }),
          (h.PatternColor.getTypeFromObj = function (t) {
            return (
              f(arguments.length, 1, 'getTypeFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('patternColorGetTypeFromObj', { pattern: t.id })
            );
          }),
          (h.PatternColor.prototype.getType = function () {
            return h.sendWithPromise('PatternColor.getType', { pc: this.id });
          }),
          (h.PatternColor.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('PatternColor.getSDFObj', { pc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PatternColor.prototype.getMatrix = function () {
            return h
              .sendWithPromise('PatternColor.getMatrix', { pc: this.id })
              .then(function (t) {
                return new h.Matrix2D(t);
              });
          }),
          (h.PatternColor.prototype.getShading = function () {
            return h
              .sendWithPromise('PatternColor.getShading', { pc: this.id })
              .then(function (t) {
                return D(h.Shading, t);
              });
          }),
          (h.PatternColor.prototype.getTilingType = function () {
            return h.sendWithPromise('PatternColor.getTilingType', {
              pc: this.id,
            });
          }),
          (h.PatternColor.prototype.getBBox = function () {
            return h
              .sendWithPromise('PatternColor.getBBox', { pc: this.id })
              .then(function (t) {
                return new h.Rect(t);
              });
          }),
          (h.PatternColor.prototype.getXStep = function () {
            return h.sendWithPromise('PatternColor.getXStep', { pc: this.id });
          }),
          (h.PatternColor.prototype.getYStep = function () {
            return h.sendWithPromise('PatternColor.getYStep', { pc: this.id });
          }),
          (h.GeometryCollection.prototype.snapToNearest = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'snapToNearest',
                '(number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                ]
              ),
              h.sendWithPromise('GeometryCollection.snapToNearest', {
                self: this.id,
                x: t,
                y: e,
                mode: n,
              })
            );
          }),
          (h.GeometryCollection.prototype.snapToNearestPixel = function (
            t,
            e,
            n,
            i
          ) {
            return (
              f(
                arguments.length,
                4,
                'snapToNearestPixel',
                '(number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                ]
              ),
              h.sendWithPromise('GeometryCollection.snapToNearestPixel', {
                self: this.id,
                x: t,
                y: e,
                dpi: n,
                mode: i,
              })
            );
          }),
          (h.DigestAlgorithm.calculateDigest = function (t, e) {
            f(
              arguments.length,
              2,
              'calculateDigest',
              '(number, ArrayBuffer|TypedArray)',
              [
                [t, 'number'],
                [e, 'ArrayBuffer'],
              ]
            );
            var n = b(e, !1);
            return h
              .sendWithPromise('digestAlgorithmCalculateDigest', {
                in_algorithm: t,
                in_buffer: n,
              })
              .then(function (t) {
                return new Uint8Array(t);
              });
          }),
          (h.ObjectIdentifier.createFromPredefined = function (t) {
            return (
              f(arguments.length, 1, 'createFromPredefined', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('objectIdentifierCreateFromPredefined', {
                  in_oid_enum: t,
                })
                .then(function (t) {
                  return D(h.ObjectIdentifier, t);
                })
            );
          }),
          (h.ObjectIdentifier.createFromIntArray = function (t) {
            return (
              f(arguments.length, 1, 'createFromIntArray', '(Array<number>)', [
                [t, 'Array'],
              ]),
              h
                .sendWithPromise('objectIdentifierCreateFromIntArray', {
                  in_list: t,
                })
                .then(function (t) {
                  return D(h.ObjectIdentifier, t);
                })
            );
          }),
          (h.ObjectIdentifier.createFromDigestAlgorithm = function (t) {
            return (
              f(arguments.length, 1, 'createFromDigestAlgorithm', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('objectIdentifierCreateFromDigestAlgorithm', {
                  in_algorithm: t,
                })
                .then(function (t) {
                  return D(h.ObjectIdentifier, t);
                })
            );
          }),
          (h.ObjectIdentifier.prototype.getRawValue = function () {
            return h.sendWithPromise('ObjectIdentifier.getRawValue', {
              self: this.id,
            });
          }),
          (h.X501DistinguishedName.prototype.hasAttribute = function (t) {
            return (
              f(
                arguments.length,
                1,
                'hasAttribute',
                '(PDFNet.ObjectIdentifier)',
                [[t, 'Object', h.ObjectIdentifier, 'ObjectIdentifier']]
              ),
              h.sendWithPromise('X501DistinguishedName.hasAttribute', {
                self: this.id,
                in_oid: t.id,
              })
            );
          }),
          (h.X501DistinguishedName.prototype.getStringValuesForAttribute =
            function (t) {
              return (
                f(
                  arguments.length,
                  1,
                  'getStringValuesForAttribute',
                  '(PDFNet.ObjectIdentifier)',
                  [[t, 'Object', h.ObjectIdentifier, 'ObjectIdentifier']]
                ),
                h.sendWithPromise(
                  'X501DistinguishedName.getStringValuesForAttribute',
                  { self: this.id, in_oid: t.id }
                )
              );
            }),
          (h.X501DistinguishedName.prototype.getAllAttributesAndValues =
            function () {
              return h
                .sendWithPromise(
                  'X501DistinguishedName.getAllAttributesAndValues',
                  { self: this.id }
                )
                .then(function (t) {
                  for (var e = [], n = 0; n < t.length; ++n) {
                    var i = t[n];
                    if ('0' === i) return null;
                    (i = new h.X501AttributeTypeAndValue(i)),
                      e.push(i),
                      c.push({ name: i.name, id: i.id });
                  }
                  return e;
                });
            }),
          (h.X509Certificate.createFromBuffer = function (t) {
            f(
              arguments.length,
              1,
              'createFromBuffer',
              '(ArrayBuffer|TypedArray)',
              [[t, 'ArrayBuffer']]
            );
            var e = b(t, !1);
            return h
              .sendWithPromise('x509CertificateCreateFromBuffer', {
                in_cert_buf: e,
              })
              .then(function (t) {
                return D(h.X509Certificate, t);
              });
          }),
          (h.X509Certificate.prototype.getIssuerField = function () {
            return h
              .sendWithPromise('X509Certificate.getIssuerField', {
                self: this.id,
              })
              .then(function (t) {
                return D(h.X501DistinguishedName, t);
              });
          }),
          (h.X509Certificate.prototype.getSubjectField = function () {
            return h
              .sendWithPromise('X509Certificate.getSubjectField', {
                self: this.id,
              })
              .then(function (t) {
                return D(h.X501DistinguishedName, t);
              });
          }),
          (h.X509Certificate.prototype.getNotBeforeEpochTime = function () {
            return h.sendWithPromise('X509Certificate.getNotBeforeEpochTime', {
              self: this.id,
            });
          }),
          (h.X509Certificate.prototype.getNotAfterEpochTime = function () {
            return h.sendWithPromise('X509Certificate.getNotAfterEpochTime', {
              self: this.id,
            });
          }),
          (h.X509Certificate.prototype.getRawX509VersionNumber = function () {
            return h.sendWithPromise(
              'X509Certificate.getRawX509VersionNumber',
              { self: this.id }
            );
          }),
          (h.X509Certificate.prototype.toString = function () {
            return h.sendWithPromise('X509Certificate.toString', {
              self: this.id,
            });
          }),
          (h.X509Certificate.prototype.getFingerprint = function (t) {
            return (
              void 0 === t && (t = h.DigestAlgorithm.Type.e_SHA256),
              f(arguments.length, 0, 'getFingerprint', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('X509Certificate.getFingerprint', {
                self: this.id,
                in_digest_algorithm: t,
              })
            );
          }),
          (h.X509Certificate.prototype.getSerialNumber = function () {
            return h
              .sendWithPromise('X509Certificate.getSerialNumber', {
                self: this.id,
              })
              .then(function (t) {
                return new Uint8Array(t);
              });
          }),
          (h.X509Certificate.prototype.getExtensions = function () {
            return h
              .sendWithPromise('X509Certificate.getExtensions', {
                self: this.id,
              })
              .then(function (t) {
                for (var e = [], n = 0; n < t.length; ++n) {
                  var i = t[n];
                  if ('0' === i) return null;
                  (i = new h.X509Extension(i)),
                    e.push(i),
                    c.push({ name: i.name, id: i.id });
                }
                return e;
              });
          }),
          (h.X509Certificate.prototype.getData = function () {
            return h
              .sendWithPromise('X509Certificate.getData', { self: this.id })
              .then(function (t) {
                return new Uint8Array(t);
              });
          }),
          (h.TimestampingConfiguration.createFromURL = function (t) {
            return (
              f(arguments.length, 1, 'createFromURL', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('timestampingConfigurationCreateFromURL', {
                  in_url: t,
                })
                .then(function (t) {
                  return D(h.TimestampingConfiguration, t);
                })
            );
          }),
          (h.TimestampingConfiguration.prototype.setTimestampAuthorityServerURL =
            function (t) {
              return (
                f(
                  arguments.length,
                  1,
                  'setTimestampAuthorityServerURL',
                  '(string)',
                  [[t, 'string']]
                ),
                h.sendWithPromise(
                  'TimestampingConfiguration.setTimestampAuthorityServerURL',
                  { self: this.id, in_url: t }
                )
              );
            }),
          (h.TimestampingConfiguration.prototype.setTimestampAuthorityServerUsername =
            function (t) {
              return (
                f(
                  arguments.length,
                  1,
                  'setTimestampAuthorityServerUsername',
                  '(string)',
                  [[t, 'string']]
                ),
                h.sendWithPromise(
                  'TimestampingConfiguration.setTimestampAuthorityServerUsername',
                  { self: this.id, in_username: t }
                )
              );
            }),
          (h.TimestampingConfiguration.prototype.setTimestampAuthorityServerPassword =
            function (t) {
              return (
                f(
                  arguments.length,
                  1,
                  'setTimestampAuthorityServerPassword',
                  '(string)',
                  [[t, 'string']]
                ),
                h.sendWithPromise(
                  'TimestampingConfiguration.setTimestampAuthorityServerPassword',
                  { self: this.id, in_password: t }
                )
              );
            }),
          (h.TimestampingConfiguration.prototype.setUseNonce = function (t) {
            return (
              f(arguments.length, 1, 'setUseNonce', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('TimestampingConfiguration.setUseNonce', {
                self: this.id,
                in_use_nonce: t,
              })
            );
          }),
          (h.TimestampingConfiguration.prototype.testConfiguration = function (
            t
          ) {
            return (
              f(
                arguments.length,
                1,
                'testConfiguration',
                '(PDFNet.VerificationOptions)',
                [[t, 'Object', h.VerificationOptions, 'VerificationOptions']]
              ),
              h
                .sendWithPromise(
                  'TimestampingConfiguration.testConfiguration',
                  { self: this.id, in_opts: t.id }
                )
                .then(function (t) {
                  return D(h.TimestampingResult, t);
                })
            );
          }),
          (h.DigitalSignatureField.prototype.hasCryptographicSignature =
            function () {
              return (
                P('hasCryptographicSignature', this.yieldFunction),
                h.sendWithPromise(
                  'DigitalSignatureField.hasCryptographicSignature',
                  { self: this }
                )
              );
            }),
          (h.DigitalSignatureField.prototype.getSubFilter = function () {
            return (
              P('getSubFilter', this.yieldFunction),
              h.sendWithPromise('DigitalSignatureField.getSubFilter', {
                self: this,
              })
            );
          }),
          (h.DigitalSignatureField.prototype.getSignatureName = function () {
            return (
              P('getSignatureName', this.yieldFunction),
              h.sendWithPromise('DigitalSignatureField.getSignatureName', {
                self: this,
              })
            );
          }),
          (h.DigitalSignatureField.prototype.getLocation = function () {
            return (
              P('getLocation', this.yieldFunction),
              h.sendWithPromise('DigitalSignatureField.getLocation', {
                self: this,
              })
            );
          }),
          (h.DigitalSignatureField.prototype.getReason = function () {
            return (
              P('getReason', this.yieldFunction),
              h.sendWithPromise('DigitalSignatureField.getReason', {
                self: this,
              })
            );
          }),
          (h.DigitalSignatureField.prototype.getContactInfo = function () {
            return (
              P('getContactInfo', this.yieldFunction),
              h.sendWithPromise('DigitalSignatureField.getContactInfo', {
                self: this,
              })
            );
          }),
          (h.DigitalSignatureField.prototype.getCertCount = function () {
            return (
              P('getCertCount', this.yieldFunction),
              h.sendWithPromise('DigitalSignatureField.getCertCount', {
                self: this,
              })
            );
          }),
          (h.DigitalSignatureField.prototype.hasVisibleAppearance =
            function () {
              return (
                P('hasVisibleAppearance', this.yieldFunction),
                h.sendWithPromise(
                  'DigitalSignatureField.hasVisibleAppearance',
                  { self: this }
                )
              );
            }),
          (h.DigitalSignatureField.prototype.setContactInfo = function (t) {
            f(arguments.length, 1, 'setContactInfo', '(string)', [
              [t, 'string'],
            ]),
              P('setContactInfo', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'DigitalSignatureField.setContactInfo'),
              h
                .sendWithPromise('DigitalSignatureField.setContactInfo', {
                  self: this,
                  in_contact_info: t,
                })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.DigitalSignatureField.prototype.setLocation = function (t) {
            f(arguments.length, 1, 'setLocation', '(string)', [[t, 'string']]),
              P('setLocation', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'DigitalSignatureField.setLocation'),
              h
                .sendWithPromise('DigitalSignatureField.setLocation', {
                  self: this,
                  in_location: t,
                })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.DigitalSignatureField.prototype.setReason = function (t) {
            f(arguments.length, 1, 'setReason', '(string)', [[t, 'string']]),
              P('setReason', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'DigitalSignatureField.setReason'),
              h
                .sendWithPromise('DigitalSignatureField.setReason', {
                  self: this,
                  in_reason: t,
                })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.DigitalSignatureField.prototype.setDocumentPermissions = function (
            t
          ) {
            f(arguments.length, 1, 'setDocumentPermissions', '(number)', [
              [t, 'number'],
            ]),
              P('setDocumentPermissions', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction =
                'DigitalSignatureField.setDocumentPermissions'),
              h
                .sendWithPromise(
                  'DigitalSignatureField.setDocumentPermissions',
                  { self: this, in_perms: t }
                )
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.DigitalSignatureField.prototype.signOnNextSave = function (t, e) {
            f(arguments.length, 2, 'signOnNextSave', '(string, string)', [
              [t, 'string'],
              [e, 'string'],
            ]),
              P('signOnNextSave', this.yieldFunction);
            var n = this;
            return (
              (this.yieldFunction = 'DigitalSignatureField.signOnNextSave'),
              h
                .sendWithPromise('DigitalSignatureField.signOnNextSave', {
                  self: this,
                  in_pkcs12_keyfile_path: t,
                  in_password: e,
                })
                .then(function (t) {
                  (n.yieldFunction = void 0), W(t, n);
                })
            );
          }),
          (h.DigitalSignatureField.prototype.certifyOnNextSave = function (
            t,
            e
          ) {
            f(arguments.length, 2, 'certifyOnNextSave', '(string, string)', [
              [t, 'string'],
              [e, 'string'],
            ]),
              P('certifyOnNextSave', this.yieldFunction);
            var n = this;
            return (
              (this.yieldFunction = 'DigitalSignatureField.certifyOnNextSave'),
              h
                .sendWithPromise('DigitalSignatureField.certifyOnNextSave', {
                  self: this,
                  in_pkcs12_keyfile_path: t,
                  in_password: e,
                })
                .then(function (t) {
                  (n.yieldFunction = void 0), W(t, n);
                })
            );
          }),
          (h.DigitalSignatureField.prototype.isLockedByDigitalSignature =
            function () {
              return (
                P('isLockedByDigitalSignature', this.yieldFunction),
                h.sendWithPromise(
                  'DigitalSignatureField.isLockedByDigitalSignature',
                  { self: this }
                )
              );
            }),
          (h.DigitalSignatureField.prototype.getDocumentPermissions =
            function () {
              return (
                P('getDocumentPermissions', this.yieldFunction),
                h.sendWithPromise(
                  'DigitalSignatureField.getDocumentPermissions',
                  { self: this }
                )
              );
            }),
          (h.DigitalSignatureField.prototype.clearSignature = function () {
            P('clearSignature', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'DigitalSignatureField.clearSignature'),
              h
                .sendWithPromise('DigitalSignatureField.clearSignature', {
                  self: this,
                })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.DigitalSignatureField.createFromField = function (t) {
            return (
              f(arguments.length, 1, 'createFromField', '(PDFNet.Field)', [
                [t, 'Structure', h.Field, 'Field'],
              ]),
              F('createFromField', [[t, 0]]),
              h
                .sendWithPromise('digitalSignatureFieldCreateFromField', {
                  in_field: t,
                })
                .then(function (t) {
                  return new h.DigitalSignatureField(t);
                })
            );
          }),
          (h.DigitalSignatureField.prototype.getSigningTime = function () {
            return (
              P('getSigningTime', this.yieldFunction),
              h
                .sendWithPromise('DigitalSignatureField.getSigningTime', {
                  self: this,
                })
                .then(function (t) {
                  return new h.Date(t);
                })
            );
          }),
          (h.DigitalSignatureField.prototype.getCert = function (t) {
            return (
              f(arguments.length, 1, 'getCert', '(number)', [[t, 'number']]),
              P('getCert', this.yieldFunction),
              h
                .sendWithPromise('DigitalSignatureField.getCert', {
                  self: this,
                  in_index: t,
                })
                .then(function (t) {
                  return new Uint8Array(t);
                })
            );
          }),
          (h.DigitalSignatureField.prototype.setFieldPermissions = function (
            t,
            e
          ) {
            void 0 === e && (e = []),
              f(
                arguments.length,
                1,
                'setFieldPermissions',
                '(number, Array<string>)',
                [
                  [t, 'number'],
                  [e, 'Array'],
                ]
              ),
              P('setFieldPermissions', this.yieldFunction);
            var n = this;
            return (
              (this.yieldFunction =
                'DigitalSignatureField.setFieldPermissions'),
              h
                .sendWithPromise('DigitalSignatureField.setFieldPermissions', {
                  self: this,
                  in_action: t,
                  in_field_names_list: e,
                })
                .then(function (t) {
                  (n.yieldFunction = void 0), W(t, n);
                })
            );
          }),
          (h.DigitalSignatureField.prototype.signOnNextSaveFromBuffer =
            function (t, e) {
              f(
                arguments.length,
                2,
                'signOnNextSaveFromBuffer',
                '(ArrayBuffer|TypedArray, string)',
                [
                  [t, 'ArrayBuffer'],
                  [e, 'string'],
                ]
              ),
                P('signOnNextSaveFromBuffer', this.yieldFunction);
              var n = this,
                i =
                  ((this.yieldFunction =
                    'DigitalSignatureField.signOnNextSaveFromBuffer'),
                  b(t, !1));
              return h
                .sendWithPromise(
                  'DigitalSignatureField.signOnNextSaveFromBuffer',
                  { self: this, in_pkcs12_buffer: i, in_password: e }
                )
                .then(function (t) {
                  (n.yieldFunction = void 0), W(t, n);
                });
            }),
          (h.DigitalSignatureField.prototype.signOnNextSaveWithCustomHandler =
            function (t) {
              f(
                arguments.length,
                1,
                'signOnNextSaveWithCustomHandler',
                '(number)',
                [[t, 'number']]
              ),
                P('signOnNextSaveWithCustomHandler', this.yieldFunction);
              var e = this;
              return (
                (this.yieldFunction =
                  'DigitalSignatureField.signOnNextSaveWithCustomHandler'),
                h
                  .sendWithPromise(
                    'DigitalSignatureField.signOnNextSaveWithCustomHandler',
                    { self: this, in_signature_handler_id: t }
                  )
                  .then(function (t) {
                    (e.yieldFunction = void 0), W(t, e);
                  })
              );
            }),
          (h.DigitalSignatureField.prototype.certifyOnNextSaveFromBuffer =
            function (t, e) {
              f(
                arguments.length,
                2,
                'certifyOnNextSaveFromBuffer',
                '(ArrayBuffer|TypedArray, string)',
                [
                  [t, 'ArrayBuffer'],
                  [e, 'string'],
                ]
              ),
                P('certifyOnNextSaveFromBuffer', this.yieldFunction);
              var n = this,
                i =
                  ((this.yieldFunction =
                    'DigitalSignatureField.certifyOnNextSaveFromBuffer'),
                  b(t, !1));
              return h
                .sendWithPromise(
                  'DigitalSignatureField.certifyOnNextSaveFromBuffer',
                  { self: this, in_pkcs12_buffer: i, in_password: e }
                )
                .then(function (t) {
                  (n.yieldFunction = void 0), W(t, n);
                });
            }),
          (h.DigitalSignatureField.prototype.certifyOnNextSaveWithCustomHandler =
            function (t) {
              f(
                arguments.length,
                1,
                'certifyOnNextSaveWithCustomHandler',
                '(number)',
                [[t, 'number']]
              ),
                P('certifyOnNextSaveWithCustomHandler', this.yieldFunction);
              var e = this;
              return (
                (this.yieldFunction =
                  'DigitalSignatureField.certifyOnNextSaveWithCustomHandler'),
                h
                  .sendWithPromise(
                    'DigitalSignatureField.certifyOnNextSaveWithCustomHandler',
                    { self: this, in_signature_handler_id: t }
                  )
                  .then(function (t) {
                    (e.yieldFunction = void 0), W(t, e);
                  })
              );
            }),
          (h.DigitalSignatureField.prototype.getSDFObj = function () {
            return (
              P('getSDFObj', this.yieldFunction),
              h
                .sendWithPromise('DigitalSignatureField.getSDFObj', {
                  self: this,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.DigitalSignatureField.prototype.getLockedFields = function () {
            return (
              P('getLockedFields', this.yieldFunction),
              h.sendWithPromise('DigitalSignatureField.getLockedFields', {
                self: this,
              })
            );
          }),
          (h.DigitalSignatureField.prototype.verify = function (t) {
            return (
              f(arguments.length, 1, 'verify', '(PDFNet.VerificationOptions)', [
                [t, 'Object', h.VerificationOptions, 'VerificationOptions'],
              ]),
              P('verify', this.yieldFunction),
              h
                .sendWithPromise('DigitalSignatureField.verify', {
                  self: this,
                  in_opts: t.id,
                })
                .then(function (t) {
                  return D(h.VerificationResult, t);
                })
            );
          }),
          (h.DigitalSignatureField.prototype.isCertification = function () {
            return (
              P('isCertification', this.yieldFunction),
              h.sendWithPromise('DigitalSignatureField.isCertification', {
                self: this,
              })
            );
          }),
          (h.DigitalSignatureField.prototype.getSignerCertFromCMS =
            function () {
              return (
                P('getSignerCertFromCMS', this.yieldFunction),
                h
                  .sendWithPromise(
                    'DigitalSignatureField.getSignerCertFromCMS',
                    { self: this }
                  )
                  .then(function (t) {
                    return D(h.X509Certificate, t);
                  })
              );
            }),
          (h.DigitalSignatureField.prototype.getByteRanges = function () {
            return (
              P('getByteRanges', this.yieldFunction),
              h
                .sendWithPromise('DigitalSignatureField.getByteRanges', {
                  self: this,
                })
                .then(function (t) {
                  for (var e = [], n = 0; n < t.length; ++n) {
                    var i = t[n];
                    if ('0' === i) return null;
                    (i = new h.ByteRange(i)), e.push(i);
                  }
                  return e;
                })
            );
          }),
          (h.DigitalSignatureField.prototype.enableLTVOfflineVerification =
            function (t) {
              return (
                f(
                  arguments.length,
                  1,
                  'enableLTVOfflineVerification',
                  '(PDFNet.VerificationResult)',
                  [[t, 'Object', h.VerificationResult, 'VerificationResult']]
                ),
                P('enableLTVOfflineVerification', this.yieldFunction),
                h.sendWithPromise(
                  'DigitalSignatureField.enableLTVOfflineVerification',
                  { self: this, in_verification_result: t.id }
                )
              );
            }),
          (h.DigitalSignatureField.prototype.timestampOnNextSave = function (
            t,
            e
          ) {
            return (
              f(
                arguments.length,
                2,
                'timestampOnNextSave',
                '(PDFNet.TimestampingConfiguration, PDFNet.VerificationOptions)',
                [
                  [
                    t,
                    'Object',
                    h.TimestampingConfiguration,
                    'TimestampingConfiguration',
                  ],
                  [e, 'Object', h.VerificationOptions, 'VerificationOptions'],
                ]
              ),
              P('timestampOnNextSave', this.yieldFunction),
              h.sendWithPromise('DigitalSignatureField.timestampOnNextSave', {
                self: this,
                in_timestamping_config: t.id,
                in_timestamp_response_verification_options: e.id,
              })
            );
          }),
          (h.DigitalSignatureField.prototype.generateContentsWithEmbeddedTimestamp =
            function (t, e) {
              return (
                f(
                  arguments.length,
                  2,
                  'generateContentsWithEmbeddedTimestamp',
                  '(PDFNet.TimestampingConfiguration, PDFNet.VerificationOptions)',
                  [
                    [
                      t,
                      'Object',
                      h.TimestampingConfiguration,
                      'TimestampingConfiguration',
                    ],
                    [e, 'Object', h.VerificationOptions, 'VerificationOptions'],
                  ]
                ),
                P('generateContentsWithEmbeddedTimestamp', this.yieldFunction),
                h
                  .sendWithPromise(
                    'DigitalSignatureField.generateContentsWithEmbeddedTimestamp',
                    {
                      self: this,
                      in_timestamping_config: t.id,
                      in_timestamp_response_verification_options: e.id,
                    }
                  )
                  .then(function (t) {
                    return D(h.TimestampingResult, t);
                  })
              );
            }),
          (h.DigitalSignatureField.prototype.useSubFilter = function (t, e) {
            void 0 === e && (e = !0),
              f(arguments.length, 1, 'useSubFilter', '(number, boolean)', [
                [t, 'number'],
                [e, 'boolean'],
              ]),
              P('useSubFilter', this.yieldFunction);
            var n = this;
            return (
              (this.yieldFunction = 'DigitalSignatureField.useSubFilter'),
              h
                .sendWithPromise('DigitalSignatureField.useSubFilter', {
                  self: this,
                  in_subfilter_type: t,
                  in_make_mandatory: e,
                })
                .then(function (t) {
                  (n.yieldFunction = void 0), W(t, n);
                })
            );
          }),
          (h.DigitalSignatureField.prototype.calculateDigest = function (t) {
            void 0 === t && (t = h.DigestAlgorithm.Type.e_SHA256),
              f(arguments.length, 0, 'calculateDigest', '(number)', [
                [t, 'number'],
              ]),
              P('calculateDigest', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'DigitalSignatureField.calculateDigest'),
              h
                .sendWithPromise('DigitalSignatureField.calculateDigest', {
                  self: this,
                  in_digest_algorithm_type: t,
                })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = new Uint8Array(t.result)),
                    W(t.self, e),
                    t.result
                  );
                })
            );
          }),
          (h.DigitalSignatureField.prototype.setPreferredDigestAlgorithm =
            function (t, e) {
              void 0 === e && (e = !0),
                f(
                  arguments.length,
                  1,
                  'setPreferredDigestAlgorithm',
                  '(number, boolean)',
                  [
                    [t, 'number'],
                    [e, 'boolean'],
                  ]
                ),
                P('setPreferredDigestAlgorithm', this.yieldFunction);
              var n = this;
              return (
                (this.yieldFunction =
                  'DigitalSignatureField.setPreferredDigestAlgorithm'),
                h
                  .sendWithPromise(
                    'DigitalSignatureField.setPreferredDigestAlgorithm',
                    {
                      self: this,
                      in_digest_algorithm_type: t,
                      in_make_mandatory: e,
                    }
                  )
                  .then(function (t) {
                    (n.yieldFunction = void 0), W(t, n);
                  })
              );
            }),
          (h.DigitalSignatureField.prototype.createSigDictForCustomCertification =
            function (t, e, n) {
              f(
                arguments.length,
                3,
                'createSigDictForCustomCertification',
                '(string, number, number)',
                [
                  [t, 'string'],
                  [e, 'number'],
                  [n, 'number'],
                ]
              ),
                P('createSigDictForCustomCertification', this.yieldFunction);
              var i = this;
              return (
                (this.yieldFunction =
                  'DigitalSignatureField.createSigDictForCustomCertification'),
                h
                  .sendWithPromise(
                    'DigitalSignatureField.createSigDictForCustomCertification',
                    {
                      self: this,
                      in_filter_name: t,
                      in_subfilter_type: e,
                      in_contents_size_to_reserve: n,
                    }
                  )
                  .then(function (t) {
                    (i.yieldFunction = void 0), W(t, i);
                  })
              );
            }),
          (h.DigitalSignatureField.prototype.createSigDictForCustomSigning =
            function (t, e, n) {
              f(
                arguments.length,
                3,
                'createSigDictForCustomSigning',
                '(string, number, number)',
                [
                  [t, 'string'],
                  [e, 'number'],
                  [n, 'number'],
                ]
              ),
                P('createSigDictForCustomSigning', this.yieldFunction);
              var i = this;
              return (
                (this.yieldFunction =
                  'DigitalSignatureField.createSigDictForCustomSigning'),
                h
                  .sendWithPromise(
                    'DigitalSignatureField.createSigDictForCustomSigning',
                    {
                      self: this,
                      in_filter_name: t,
                      in_subfilter_type: e,
                      in_contents_size_to_reserve: n,
                    }
                  )
                  .then(function (t) {
                    (i.yieldFunction = void 0), W(t, i);
                  })
              );
            }),
          (h.DigitalSignatureField.prototype.setSigDictTimeOfSigning =
            function (t) {
              f(
                arguments.length,
                1,
                'setSigDictTimeOfSigning',
                '(PDFNet.Date)',
                [[t, 'Structure', h.Date, 'Date']]
              ),
                P('setSigDictTimeOfSigning', this.yieldFunction),
                F('setSigDictTimeOfSigning', [[t, 0]]);
              var e = this;
              return (
                (this.yieldFunction =
                  'DigitalSignatureField.setSigDictTimeOfSigning'),
                h
                  .sendWithPromise(
                    'DigitalSignatureField.setSigDictTimeOfSigning',
                    { self: this, in_date: t }
                  )
                  .then(function (t) {
                    (e.yieldFunction = void 0), W(t, e);
                  })
              );
            }),
          (h.DigitalSignatureField.signDigestBuffer = function (t, e, n, i, r) {
            f(
              arguments.length,
              5,
              'signDigestBuffer',
              '(ArrayBuffer|TypedArray, ArrayBuffer|TypedArray, string, boolean, number)',
              [
                [t, 'ArrayBuffer'],
                [e, 'ArrayBuffer'],
                [n, 'string'],
                [i, 'boolean'],
                [r, 'number'],
              ]
            );
            var o = b(t, !1),
              s = b(e, !1);
            return h
              .sendWithPromise('digitalSignatureFieldSignDigestBuffer', {
                in_digest_buf: o,
                in_pkcs12_buffer: s,
                in_keyfile_password: n,
                in_pades_mode: i,
                in_digest_algorithm_type: r,
              })
              .then(function (t) {
                return new Uint8Array(t);
              });
          }),
          (h.DigitalSignatureField.generateESSSigningCertPAdESAttribute =
            function (t, e) {
              return (
                f(
                  arguments.length,
                  2,
                  'generateESSSigningCertPAdESAttribute',
                  '(PDFNet.X509Certificate, number)',
                  [
                    [t, 'Object', h.X509Certificate, 'X509Certificate'],
                    [e, 'number'],
                  ]
                ),
                h
                  .sendWithPromise(
                    'digitalSignatureFieldGenerateESSSigningCertPAdESAttribute',
                    { in_signer_cert: t.id, in_digest_algorithm_type: e }
                  )
                  .then(function (t) {
                    return new Uint8Array(t);
                  })
              );
            }),
          (h.DigitalSignatureField.generateCMSSignedAttributes = function (
            t,
            e
          ) {
            void 0 === e && (e = new ArrayBuffer(0)),
              f(
                arguments.length,
                1,
                'generateCMSSignedAttributes',
                '(ArrayBuffer|TypedArray, ArrayBuffer|TypedArray)',
                [
                  [t, 'ArrayBuffer'],
                  [e, 'ArrayBuffer'],
                ]
              );
            var n = b(t, !1),
              i = b(e, !1);
            return h
              .sendWithPromise(
                'digitalSignatureFieldGenerateCMSSignedAttributes',
                { in_digest_buf: n, in_custom_signedattributes_buf: i }
              )
              .then(function (t) {
                return new Uint8Array(t);
              });
          }),
          (h.DigitalSignatureField.generateCMSSignature = function (
            t,
            e,
            n,
            i,
            r,
            o
          ) {
            f(
              arguments.length,
              6,
              'generateCMSSignature',
              '(PDFNet.X509Certificate, Array<Core.PDFNet.X509Certificate>, PDFNet.ObjectIdentifier, PDFNet.ObjectIdentifier, ArrayBuffer|TypedArray, ArrayBuffer|TypedArray)',
              [
                [t, 'Object', h.X509Certificate, 'X509Certificate'],
                [e, 'Array'],
                [n, 'Object', h.ObjectIdentifier, 'ObjectIdentifier'],
                [i, 'Object', h.ObjectIdentifier, 'ObjectIdentifier'],
                [r, 'ArrayBuffer'],
                [o, 'ArrayBuffer'],
              ]
            );
            var s = b(r, !1),
              u = b(o, !1);
            return (
              (e = Array.from(e, function (t) {
                return t.id;
              })),
              h
                .sendWithPromise('digitalSignatureFieldGenerateCMSSignature', {
                  in_signer_cert: t.id,
                  in_chain_certs_list: e,
                  in_digest_algorithm_oid: n.id,
                  in_signature_algorithm_oid: i.id,
                  in_signature_value_buf: s,
                  in_signedattributes_buf: u,
                })
                .then(function (t) {
                  return new Uint8Array(t);
                })
            );
          }),
          (h.PDFDoc.prototype.getTriggerAction = function (t) {
            return (
              f(arguments.length, 1, 'getTriggerAction', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('PDFDoc.getTriggerAction', {
                  doc: this.id,
                  trigger: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.PDFDoc.prototype.isXFA = function () {
            return h.sendWithPromise('PDFDoc.isXFA', { doc: this.id });
          }),
          (h.PDFDoc.create = function () {
            return h.sendWithPromise('pdfDocCreate', {}).then(function (t) {
              return D(h.PDFDoc, t);
            });
          }),
          (h.PDFDoc.createFromFilter = function (t) {
            return (
              f(arguments.length, 1, 'createFromFilter', '(PDFNet.Filter)', [
                [t, 'Object', h.Filter, 'Filter'],
              ]),
              0 != t.id && O(t.id),
              h
                .sendWithPromise('pdfDocCreateFromFilter', {
                  no_own_stream: t.id,
                })
                .then(function (t) {
                  return D(h.PDFDoc, t);
                })
            );
          }),
          (h.PDFDoc.createFromBuffer = function (t) {
            f(
              arguments.length,
              1,
              'createFromBuffer',
              '(ArrayBuffer|TypedArray)',
              [[t, 'ArrayBuffer']]
            );
            var e = b(t, !1);
            return h
              .sendWithPromise('pdfDocCreateFromBuffer', { buf: e })
              .then(function (t) {
                return D(h.PDFDoc, t);
              });
          }),
          (h.PDFDoc.createFromLayoutEls = function (t) {
            f(
              arguments.length,
              1,
              'createFromLayoutEls',
              '(ArrayBuffer|TypedArray)',
              [[t, 'ArrayBuffer']]
            );
            var e = b(t, !1);
            return h
              .sendWithPromise('pdfDocCreateFromLayoutEls', { buf: e })
              .then(function (t) {
                return D(h.PDFDoc, t);
              });
          }),
          (h.PDFDoc.prototype.createShallowCopy = function () {
            return h
              .sendWithPromise('PDFDoc.createShallowCopy', { source: this.id })
              .then(function (t) {
                return D(h.PDFDoc, t);
              });
          }),
          (h.PDFDoc.prototype.isEncrypted = function () {
            return h.sendWithPromise('PDFDoc.isEncrypted', { doc: this.id });
          }),
          (h.PDFDoc.prototype.initStdSecurityHandlerUString = function (t) {
            return (
              f(
                arguments.length,
                1,
                'initStdSecurityHandlerUString',
                '(string)',
                [[t, 'string']]
              ),
              h.sendWithPromise('PDFDoc.initStdSecurityHandlerUString', {
                doc: this.id,
                password: t,
              })
            );
          }),
          (h.PDFDoc.prototype.initStdSecurityHandlerBuffer = function (t) {
            f(
              arguments.length,
              1,
              'initStdSecurityHandlerBuffer',
              '(ArrayBuffer|TypedArray)',
              [[t, 'ArrayBuffer']]
            );
            var e = b(t, !1);
            return h.sendWithPromise('PDFDoc.initStdSecurityHandlerBuffer', {
              doc: this.id,
              password_buf: e,
            });
          }),
          (h.PDFDoc.prototype.getSecurityHandler = function () {
            return h
              .sendWithPromise('PDFDoc.getSecurityHandler', { doc: this.id })
              .then(function (t) {
                return _(h.SecurityHandler, t);
              });
          }),
          (h.PDFDoc.prototype.setSecurityHandler = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setSecurityHandler',
                '(PDFNet.SecurityHandler)',
                [[t, 'Object', h.SecurityHandler, 'SecurityHandler']]
              ),
              0 != t.id && O(t.id),
              h.sendWithPromise('PDFDoc.setSecurityHandler', {
                doc: this.id,
                no_own_handler: t.id,
              })
            );
          }),
          (h.PDFDoc.prototype.removeSecurity = function () {
            return h.sendWithPromise('PDFDoc.removeSecurity', { doc: this.id });
          }),
          (h.PDFDoc.prototype.getDocInfo = function () {
            return h
              .sendWithPromise('PDFDoc.getDocInfo', { doc: this.id })
              .then(function (t) {
                return _(h.PDFDocInfo, t);
              });
          }),
          (h.PDFDoc.prototype.getViewPrefs = function () {
            return h
              .sendWithPromise('PDFDoc.getViewPrefs', { doc: this.id })
              .then(function (t) {
                return _(h.PDFDocViewPrefs, t);
              });
          }),
          (h.PDFDoc.prototype.isModified = function () {
            return h.sendWithPromise('PDFDoc.isModified', { doc: this.id });
          }),
          (h.PDFDoc.prototype.hasRepairedXRef = function () {
            return h.sendWithPromise('PDFDoc.hasRepairedXRef', {
              doc: this.id,
            });
          }),
          (h.PDFDoc.prototype.isLinearized = function () {
            return h.sendWithPromise('PDFDoc.isLinearized', { doc: this.id });
          }),
          (h.PDFDoc.prototype.saveMemoryBuffer = function (t) {
            return (
              f(arguments.length, 1, 'saveMemoryBuffer', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('PDFDoc.saveMemoryBuffer', {
                  doc: this.id,
                  flags: t,
                })
                .then(function (t) {
                  return new Uint8Array(t);
                })
            );
          }),
          (h.PDFDoc.prototype.saveStream = function (t, e) {
            return (
              f(arguments.length, 2, 'saveStream', '(PDFNet.Filter, number)', [
                [t, 'Object', h.Filter, 'Filter'],
                [e, 'number'],
              ]),
              h.sendWithPromise('PDFDoc.saveStream', {
                doc: this.id,
                stream: t.id,
                flags: e,
              })
            );
          }),
          (h.PDFDoc.prototype.saveCustomSignatureBuffer = function (t, e) {
            f(
              arguments.length,
              2,
              'saveCustomSignatureBuffer',
              '(ArrayBuffer|TypedArray, PDFNet.DigitalSignatureField)',
              [
                [t, 'ArrayBuffer'],
                [
                  e,
                  'Structure',
                  h.DigitalSignatureField,
                  'DigitalSignatureField',
                ],
              ]
            ),
              F('saveCustomSignatureBuffer', [[e, 1]]);
            var n = b(t, !1);
            return h
              .sendWithPromise('PDFDoc.saveCustomSignatureBuffer', {
                doc: this.id,
                in_signature_buf: n,
                in_field: e,
              })
              .then(function (t) {
                return new Uint8Array(t);
              });
          }),
          (h.PDFDoc.prototype.saveCustomSignatureStream = function (t, e) {
            f(
              arguments.length,
              2,
              'saveCustomSignatureStream',
              '(ArrayBuffer|TypedArray, PDFNet.DigitalSignatureField)',
              [
                [t, 'ArrayBuffer'],
                [
                  e,
                  'Structure',
                  h.DigitalSignatureField,
                  'DigitalSignatureField',
                ],
              ]
            ),
              F('saveCustomSignatureStream', [[e, 1]]);
            var n = b(t, !1);
            return h
              .sendWithPromise('PDFDoc.saveCustomSignatureStream', {
                doc: this.id,
                in_signature_buf: n,
                in_field: e,
              })
              .then(function (t) {
                return D(h.Filter, t);
              });
          }),
          (h.PDFDoc.prototype.getPageIterator = function (t) {
            return (
              void 0 === t && (t = 1),
              f(arguments.length, 0, 'getPageIterator', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('PDFDoc.getPageIterator', {
                  doc: this.id,
                  page_number: t,
                })
                .then(function (t) {
                  return D(h.Iterator, t, 'Page');
                })
            );
          }),
          (h.PDFDoc.prototype.getPage = function (t) {
            return (
              f(arguments.length, 1, 'getPage', '(number)', [[t, 'number']]),
              h
                .sendWithPromise('PDFDoc.getPage', {
                  doc: this.id,
                  page_number: t,
                })
                .then(function (t) {
                  return _(h.Page, t);
                })
            );
          }),
          (h.PDFDoc.prototype.pageRemove = function (t) {
            return (
              f(arguments.length, 1, 'pageRemove', '(PDFNet.Iterator)', [
                [t, 'Object', h.Iterator, 'Iterator'],
              ]),
              h.sendWithPromise('PDFDoc.pageRemove', {
                doc: this.id,
                page_itr: t.id,
              })
            );
          }),
          (h.PDFDoc.prototype.pageInsert = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'pageInsert',
                '(PDFNet.Iterator, PDFNet.Page)',
                [
                  [t, 'Object', h.Iterator, 'Iterator'],
                  [e, 'Object', h.Page, 'Page'],
                ]
              ),
              h.sendWithPromise('PDFDoc.pageInsert', {
                doc: this.id,
                where: t.id,
                page: e.id,
              })
            );
          }),
          (h.PDFDoc.prototype.insertPages = function (t, e, n, i, r) {
            return (
              f(
                arguments.length,
                5,
                'insertPages',
                '(number, PDFNet.PDFDoc, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'PDFDoc'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                ]
              ),
              h.sendWithPromise('PDFDoc.insertPages', {
                dest_doc: this.id,
                insert_before_page_number: t,
                src_doc: e.id,
                start_page: n,
                end_page: i,
                flag: r,
              })
            );
          }),
          (h.PDFDoc.prototype.insertPageSet = function (t, e, n, i) {
            return (
              f(
                arguments.length,
                4,
                'insertPageSet',
                '(number, PDFNet.PDFDoc, PDFNet.PageSet, number)',
                [
                  [t, 'number'],
                  [e, 'PDFDoc'],
                  [n, 'Object', h.PageSet, 'PageSet'],
                  [i, 'number'],
                ]
              ),
              h.sendWithPromise('PDFDoc.insertPageSet', {
                dest_doc: this.id,
                insert_before_page_number: t,
                src_doc: e.id,
                source_page_set: n.id,
                flag: i,
              })
            );
          }),
          (h.PDFDoc.prototype.movePages = function (t, e, n, i, r) {
            return (
              f(
                arguments.length,
                5,
                'movePages',
                '(number, PDFNet.PDFDoc, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'PDFDoc'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                ]
              ),
              h.sendWithPromise('PDFDoc.movePages', {
                dest_doc: this.id,
                move_before_page_number: t,
                src_doc: e.id,
                start_page: n,
                end_page: i,
                flag: r,
              })
            );
          }),
          (h.PDFDoc.prototype.movePageSet = function (t, e, n, i) {
            return (
              f(
                arguments.length,
                4,
                'movePageSet',
                '(number, PDFNet.PDFDoc, PDFNet.PageSet, number)',
                [
                  [t, 'number'],
                  [e, 'PDFDoc'],
                  [n, 'Object', h.PageSet, 'PageSet'],
                  [i, 'number'],
                ]
              ),
              h.sendWithPromise('PDFDoc.movePageSet', {
                dest_doc: this.id,
                move_before_page_number: t,
                src_doc: e.id,
                source_page_set: n.id,
                flag: i,
              })
            );
          }),
          (h.PDFDoc.prototype.pagePushFront = function (t) {
            return (
              f(arguments.length, 1, 'pagePushFront', '(PDFNet.Page)', [
                [t, 'Object', h.Page, 'Page'],
              ]),
              h.sendWithPromise('PDFDoc.pagePushFront', {
                doc: this.id,
                page: t.id,
              })
            );
          }),
          (h.PDFDoc.prototype.pagePushBack = function (t) {
            return (
              f(arguments.length, 1, 'pagePushBack', '(PDFNet.Page)', [
                [t, 'Object', h.Page, 'Page'],
              ]),
              h.sendWithPromise('PDFDoc.pagePushBack', {
                doc: this.id,
                page: t.id,
              })
            );
          }),
          (h.PDFDoc.prototype.pageCreate = function (t) {
            return (
              void 0 === t && (t = new h.Rect(0, 0, 612, 792)),
              f(arguments.length, 0, 'pageCreate', '(PDFNet.Rect)', [
                [t, 'Structure', h.Rect, 'Rect'],
              ]),
              F('pageCreate', [[t, 0]]),
              h
                .sendWithPromise('PDFDoc.pageCreate', {
                  doc: this.id,
                  media_box: t,
                })
                .then(function (t) {
                  return _(h.Page, t);
                })
            );
          }),
          (h.PDFDoc.prototype.appendTextDiffPage = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'appendTextDiffPage',
                '(PDFNet.Page, PDFNet.Page)',
                [
                  [t, 'Object', h.Page, 'Page'],
                  [e, 'Object', h.Page, 'Page'],
                ]
              ),
              h.sendWithPromise('PDFDoc.appendTextDiffPage', {
                doc: this.id,
                page1: t.id,
                page2: e.id,
              })
            );
          }),
          (h.PDFDoc.prototype.appendTextDiffDoc = function (t, e, n) {
            return (
              void 0 === n && (n = null),
              f(
                arguments.length,
                2,
                'appendTextDiffDoc',
                '(PDFNet.PDFDoc, PDFNet.PDFDoc, PDFNet.OptionBase)',
                [
                  [t, 'PDFDoc'],
                  [e, 'PDFDoc'],
                  [n, 'OptionBase'],
                ]
              ),
              F('appendTextDiffDoc', [[n, 2]]),
              (n = n ? n.getJsonString() : '{}'),
              h.sendWithPromise('PDFDoc.appendTextDiffDoc', {
                doc: this.id,
                doc1: t.id,
                doc2: e.id,
                options: n,
              })
            );
          }),
          (h.PDFDoc.highlightTextDiff = function (t, e, n) {
            return (
              void 0 === n && (n = null),
              f(
                arguments.length,
                2,
                'highlightTextDiff',
                '(PDFNet.PDFDoc, PDFNet.PDFDoc, PDFNet.OptionBase)',
                [
                  [t, 'PDFDoc'],
                  [e, 'PDFDoc'],
                  [n, 'OptionBase'],
                ]
              ),
              F('highlightTextDiff', [[n, 2]]),
              (n = n ? n.getJsonString() : '{}'),
              h.sendWithPromise('pdfDocHighlightTextDiff', {
                doc1: t.id,
                doc2: e.id,
                options: n,
              })
            );
          }),
          (h.PDFDoc.prototype.getFirstBookmark = function () {
            return h
              .sendWithPromise('PDFDoc.getFirstBookmark', { doc: this.id })
              .then(function (t) {
                return _(h.Bookmark, t);
              });
          }),
          (h.PDFDoc.prototype.addRootBookmark = function (t) {
            return (
              f(arguments.length, 1, 'addRootBookmark', '(PDFNet.Bookmark)', [
                [t, 'Object', h.Bookmark, 'Bookmark'],
              ]),
              h.sendWithPromise('PDFDoc.addRootBookmark', {
                doc: this.id,
                root_bookmark: t.id,
              })
            );
          }),
          (h.PDFDoc.prototype.getTrailer = function () {
            return h
              .sendWithPromise('PDFDoc.getTrailer', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PDFDoc.prototype.getRoot = function () {
            return h
              .sendWithPromise('PDFDoc.getRoot', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PDFDoc.prototype.jsContextInitialize = function () {
            return h.sendWithPromise('PDFDoc.jsContextInitialize', {
              doc: this.id,
            });
          }),
          (h.PDFDoc.prototype.getPages = function () {
            return h
              .sendWithPromise('PDFDoc.getPages', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PDFDoc.prototype.getPageCount = function () {
            return h.sendWithPromise('PDFDoc.getPageCount', { doc: this.id });
          }),
          (h.PDFDoc.prototype.getDownloadedByteCount = function () {
            return h.sendWithPromise('PDFDoc.getDownloadedByteCount', {
              doc: this.id,
            });
          }),
          (h.PDFDoc.prototype.getTotalRemoteByteCount = function () {
            return h.sendWithPromise('PDFDoc.getTotalRemoteByteCount', {
              doc: this.id,
            });
          }),
          (h.PDFDoc.prototype.getFieldIteratorBegin = function () {
            return h
              .sendWithPromise('PDFDoc.getFieldIteratorBegin', { doc: this.id })
              .then(function (t) {
                return D(h.Iterator, t, 'Field');
              });
          }),
          (h.PDFDoc.prototype.getFieldIterator = function (t) {
            return (
              f(arguments.length, 1, 'getFieldIterator', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('PDFDoc.getFieldIterator', {
                  doc: this.id,
                  field_name: t,
                })
                .then(function (t) {
                  return D(h.Iterator, t, 'Field');
                })
            );
          }),
          (h.PDFDoc.prototype.getField = function (t) {
            return (
              f(arguments.length, 1, 'getField', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('PDFDoc.getField', {
                  doc: this.id,
                  field_name: t,
                })
                .then(function (t) {
                  return new h.Field(t);
                })
            );
          }),
          (h.PDFDoc.prototype.fieldCreate = function (t, e, n, i) {
            return (
              void 0 === n && (n = new h.Obj('0')),
              void 0 === i && (i = new h.Obj('0')),
              f(
                arguments.length,
                2,
                'fieldCreate',
                '(string, number, PDFNet.Obj, PDFNet.Obj)',
                [
                  [t, 'string'],
                  [e, 'number'],
                  [n, 'Object', h.Obj, 'Obj'],
                  [i, 'Object', h.Obj, 'Obj'],
                ]
              ),
              h
                .sendWithPromise('PDFDoc.fieldCreate', {
                  doc: this.id,
                  field_name: t,
                  type: e,
                  field_value: n.id,
                  def_field_value: i.id,
                })
                .then(function (t) {
                  return new h.Field(t);
                })
            );
          }),
          (h.PDFDoc.prototype.fieldCreateFromStrings = function (t, e, n, i) {
            return (
              void 0 === i && (i = ''),
              f(
                arguments.length,
                3,
                'fieldCreateFromStrings',
                '(string, number, string, string)',
                [
                  [t, 'string'],
                  [e, 'number'],
                  [n, 'string'],
                  [i, 'string'],
                ]
              ),
              h
                .sendWithPromise('PDFDoc.fieldCreateFromStrings', {
                  doc: this.id,
                  field_name: t,
                  type: e,
                  field_value: n,
                  def_field_value: i,
                })
                .then(function (t) {
                  return new h.Field(t);
                })
            );
          }),
          (h.PDFDoc.prototype.refreshFieldAppearances = function () {
            return h.sendWithPromise('PDFDoc.refreshFieldAppearances', {
              doc: this.id,
            });
          }),
          (h.PDFDoc.prototype.refreshAnnotAppearances = function (t) {
            return (
              void 0 === t && (t = null),
              f(
                arguments.length,
                0,
                'refreshAnnotAppearances',
                '(PDFNet.OptionBase)',
                [[t, 'OptionBase']]
              ),
              F('refreshAnnotAppearances', [[t, 0]]),
              (t = t ? t.getJsonString() : '{}'),
              h.sendWithPromise('PDFDoc.refreshAnnotAppearances', {
                doc: this.id,
                options: t,
              })
            );
          }),
          (h.PDFDoc.prototype.flattenAnnotations = function (t) {
            return (
              void 0 === t && (t = !1),
              f(arguments.length, 0, 'flattenAnnotations', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFDoc.flattenAnnotations', {
                doc: this.id,
                forms_only: t,
              })
            );
          }),
          (h.PDFDoc.prototype.getAcroForm = function () {
            return h
              .sendWithPromise('PDFDoc.getAcroForm', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PDFDoc.prototype.fdfExtract = function (t) {
            return (
              void 0 === t && (t = h.PDFDoc.ExtractFlag.e_forms_only),
              f(arguments.length, 0, 'fdfExtract', '(number)', [[t, 'number']]),
              h
                .sendWithPromise('PDFDoc.fdfExtract', { doc: this.id, flag: t })
                .then(function (t) {
                  return D(h.FDFDoc, t);
                })
            );
          }),
          (h.PDFDoc.prototype.fdfExtractPageSet = function (t, e) {
            return (
              void 0 === e && (e = h.PDFDoc.ExtractFlag.e_forms_only),
              f(
                arguments.length,
                1,
                'fdfExtractPageSet',
                '(PDFNet.PageSet, number)',
                [
                  [t, 'Object', h.PageSet, 'PageSet'],
                  [e, 'number'],
                ]
              ),
              h
                .sendWithPromise('PDFDoc.fdfExtractPageSet', {
                  doc: this.id,
                  pages_to_extract: t.id,
                  flag: e,
                })
                .then(function (t) {
                  return D(h.FDFDoc, t);
                })
            );
          }),
          (h.PDFDoc.prototype.fdfMerge = function (t) {
            return (
              f(arguments.length, 1, 'fdfMerge', '(PDFNet.FDFDoc)', [
                [t, 'FDFDoc'],
              ]),
              h.sendWithPromise('PDFDoc.fdfMerge', {
                doc: this.id,
                fdf_doc: t.id,
              })
            );
          }),
          (h.PDFDoc.prototype.fdfUpdate = function (t) {
            return (
              f(arguments.length, 1, 'fdfUpdate', '(PDFNet.FDFDoc)', [
                [t, 'FDFDoc'],
              ]),
              h.sendWithPromise('PDFDoc.fdfUpdate', {
                doc: this.id,
                fdf_doc: t.id,
              })
            );
          }),
          (h.PDFDoc.prototype.getOpenAction = function () {
            return h
              .sendWithPromise('PDFDoc.getOpenAction', { doc: this.id })
              .then(function (t) {
                return _(h.Action, t);
              });
          }),
          (h.PDFDoc.prototype.setOpenAction = function (t) {
            return (
              f(arguments.length, 1, 'setOpenAction', '(PDFNet.Action)', [
                [t, 'Object', h.Action, 'Action'],
              ]),
              h.sendWithPromise('PDFDoc.setOpenAction', {
                doc: this.id,
                action: t.id,
              })
            );
          }),
          (h.PDFDoc.prototype.addFileAttachment = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'addFileAttachment',
                '(string, PDFNet.FileSpec)',
                [
                  [t, 'string'],
                  [e, 'Object', h.FileSpec, 'FileSpec'],
                ]
              ),
              h.sendWithPromise('PDFDoc.addFileAttachment', {
                doc: this.id,
                file_key: t,
                embedded_file: e.id,
              })
            );
          }),
          (h.PDFDoc.prototype.getPageLabel = function (t) {
            return (
              f(arguments.length, 1, 'getPageLabel', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('PDFDoc.getPageLabel', {
                  doc: this.id,
                  page_num: t,
                })
                .then(function (t) {
                  return new h.PageLabel(t);
                })
            );
          }),
          (h.PDFDoc.prototype.setPageLabel = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setPageLabel',
                '(number, PDFNet.PageLabel)',
                [
                  [t, 'number'],
                  [e, 'Structure', h.PageLabel, 'PageLabel'],
                ]
              ),
              F('setPageLabel', [[e, 1]]),
              h.sendWithPromise('PDFDoc.setPageLabel', {
                doc: this.id,
                page_num: t,
                label: e,
              })
            );
          }),
          (h.PDFDoc.prototype.removePageLabel = function (t) {
            return (
              f(arguments.length, 1, 'removePageLabel', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFDoc.removePageLabel', {
                doc: this.id,
                page_num: t,
              })
            );
          }),
          (h.PDFDoc.prototype.getStructTree = function () {
            return h
              .sendWithPromise('PDFDoc.getStructTree', { doc: this.id })
              .then(function (t) {
                return _(h.STree, t);
              });
          }),
          (h.PDFDoc.prototype.hasOC = function () {
            return h.sendWithPromise('PDFDoc.hasOC', { doc: this.id });
          }),
          (h.PDFDoc.prototype.getOCGs = function () {
            return h
              .sendWithPromise('PDFDoc.getOCGs', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PDFDoc.prototype.getOCGConfig = function () {
            return h
              .sendWithPromise('PDFDoc.getOCGConfig', { doc: this.id })
              .then(function (t) {
                return _(h.OCGConfig, t);
              });
          }),
          (h.PDFDoc.prototype.createIndirectName = function (t) {
            return (
              f(arguments.length, 1, 'createIndirectName', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('PDFDoc.createIndirectName', {
                  doc: this.id,
                  name: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.PDFDoc.prototype.createIndirectArray = function () {
            return h
              .sendWithPromise('PDFDoc.createIndirectArray', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PDFDoc.prototype.createIndirectBool = function (t) {
            return (
              f(arguments.length, 1, 'createIndirectBool', '(boolean)', [
                [t, 'boolean'],
              ]),
              h
                .sendWithPromise('PDFDoc.createIndirectBool', {
                  doc: this.id,
                  value: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.PDFDoc.prototype.createIndirectDict = function () {
            return h
              .sendWithPromise('PDFDoc.createIndirectDict', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PDFDoc.prototype.createIndirectNull = function () {
            return h
              .sendWithPromise('PDFDoc.createIndirectNull', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PDFDoc.prototype.createIndirectNumber = function (t) {
            return (
              f(arguments.length, 1, 'createIndirectNumber', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('PDFDoc.createIndirectNumber', {
                  doc: this.id,
                  value: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.PDFDoc.prototype.createIndirectString = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'createIndirectString',
                '(number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                ]
              ),
              h
                .sendWithPromise('PDFDoc.createIndirectString', {
                  doc: this.id,
                  value: t,
                  buf_size: e,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.PDFDoc.prototype.createIndirectStringFromUString = function (t) {
            return (
              f(
                arguments.length,
                1,
                'createIndirectStringFromUString',
                '(string)',
                [[t, 'string']]
              ),
              h
                .sendWithPromise('PDFDoc.createIndirectStringFromUString', {
                  doc: this.id,
                  str: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.PDFDoc.prototype.createIndirectStreamFromFilter = function (t, e) {
            return (
              void 0 === e && (e = new h.Filter('0')),
              f(
                arguments.length,
                1,
                'createIndirectStreamFromFilter',
                '(PDFNet.FilterReader, PDFNet.Filter)',
                [
                  [t, 'Object', h.FilterReader, 'FilterReader'],
                  [e, 'Object', h.Filter, 'Filter'],
                ]
              ),
              0 != e.id && O(e.id),
              h
                .sendWithPromise('PDFDoc.createIndirectStreamFromFilter', {
                  doc: this.id,
                  data: t.id,
                  no_own_filter_chain: e.id,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.PDFDoc.prototype.createIndirectStream = function (t, e) {
            f(
              arguments.length,
              2,
              'createIndirectStream',
              '(ArrayBuffer|TypedArray, PDFNet.Filter)',
              [
                [t, 'ArrayBuffer'],
                [e, 'Object', h.Filter, 'Filter'],
              ]
            );
            var n = b(t, !1);
            return (
              0 != e.id && O(e.id),
              h
                .sendWithPromise('PDFDoc.createIndirectStream', {
                  doc: this.id,
                  data_buf: n,
                  no_own_filter_chain: e.id,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.PDFDoc.prototype.getSDFDoc = function () {
            return h
              .sendWithPromise('PDFDoc.getSDFDoc', { doc: this.id })
              .then(function (t) {
                return _(h.SDFDoc, t);
              });
          }),
          (h.PDFDoc.prototype.unlock = function () {
            var t = this;
            return h
              .sendWithPromise('PDFDoc.unlock', { doc: this.id })
              .then(function () {
                S(t);
              });
          }),
          (h.PDFDoc.prototype.unlockRead = function () {
            var t = this;
            return h
              .sendWithPromise('PDFDoc.unlockRead', { doc: this.id })
              .then(function () {
                S(t);
              });
          }),
          (h.PDFDoc.prototype.addHighlights = function (t) {
            return (
              f(arguments.length, 1, 'addHighlights', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('PDFDoc.addHighlights', {
                doc: this.id,
                hilite: t,
              })
            );
          }),
          (h.PDFDoc.prototype.isTagged = function () {
            return h.sendWithPromise('PDFDoc.isTagged', { doc: this.id });
          }),
          (h.PDFDoc.prototype.hasSignatures = function () {
            return h.sendWithPromise('PDFDoc.hasSignatures', { doc: this.id });
          }),
          (h.PDFDoc.prototype.addSignatureHandler = function (t) {
            return (
              f(
                arguments.length,
                1,
                'addSignatureHandler',
                '(PDFNet.SignatureHandler)',
                [[t, 'Object', h.SignatureHandler, 'SignatureHandler']]
              ),
              h.sendWithPromise('PDFDoc.addSignatureHandler', {
                doc: this.id,
                signature_handler: t.id,
              })
            );
          }),
          (h.PDFDoc.prototype.addStdSignatureHandlerFromBuffer = function (
            t,
            e
          ) {
            f(
              arguments.length,
              2,
              'addStdSignatureHandlerFromBuffer',
              '(ArrayBuffer|TypedArray, string)',
              [
                [t, 'ArrayBuffer'],
                [e, 'string'],
              ]
            );
            var n = b(t, !1);
            return h.sendWithPromise(
              'PDFDoc.addStdSignatureHandlerFromBuffer',
              { doc: this.id, pkcs12_buffer: n, pkcs12_pass: e }
            );
          }),
          (h.PDFDoc.prototype.removeSignatureHandler = function (t) {
            return (
              f(arguments.length, 1, 'removeSignatureHandler', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFDoc.removeSignatureHandler', {
                doc: this.id,
                signature_handler_id: t,
              })
            );
          }),
          (h.PDFDoc.prototype.getSignatureHandler = function (t) {
            return (
              f(arguments.length, 1, 'getSignatureHandler', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('PDFDoc.getSignatureHandler', {
                  doc: this.id,
                  signature_handler_id: t,
                })
                .then(function (t) {
                  return _(h.SignatureHandler, t);
                })
            );
          }),
          (h.PDFDoc.prototype.generateThumbnails = function (t) {
            return (
              f(arguments.length, 1, 'generateThumbnails', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFDoc.generateThumbnails', {
                doc: this.id,
                size: t,
              })
            );
          }),
          (h.PDFDoc.prototype.appendVisualDiff = function (t, e, n) {
            return (
              void 0 === n && (n = null),
              f(
                arguments.length,
                2,
                'appendVisualDiff',
                '(PDFNet.Page, PDFNet.Page, PDFNet.OptionBase)',
                [
                  [t, 'Object', h.Page, 'Page'],
                  [e, 'Object', h.Page, 'Page'],
                  [n, 'OptionBase'],
                ]
              ),
              F('appendVisualDiff', [[n, 2]]),
              (n = n ? n.getJsonString() : '{}'),
              h.sendWithPromise('PDFDoc.appendVisualDiff', {
                doc: this.id,
                p1: t.id,
                p2: e.id,
                opts: n,
              })
            );
          }),
          (h.PDFDoc.prototype.getGeometryCollectionForPage = function (t) {
            return (
              f(
                arguments.length,
                1,
                'getGeometryCollectionForPage',
                '(number)',
                [[t, 'number']]
              ),
              h
                .sendWithPromise('PDFDoc.getGeometryCollectionForPage', {
                  in_pdfdoc: this.id,
                  page_num: t,
                })
                .then(function (t) {
                  return D(h.GeometryCollection, t);
                })
            );
          }),
          (h.PDFDoc.prototype.getGeometryCollectionForPageWithOptions =
            function (t, e) {
              return (
                void 0 === e && (e = null),
                f(
                  arguments.length,
                  1,
                  'getGeometryCollectionForPageWithOptions',
                  '(number, PDFNet.OptionBase)',
                  [
                    [t, 'number'],
                    [e, 'OptionBase'],
                  ]
                ),
                F('getGeometryCollectionForPageWithOptions', [[e, 1]]),
                (e = e ? e.getJsonString() : '{}'),
                h
                  .sendWithPromise(
                    'PDFDoc.getGeometryCollectionForPageWithOptions',
                    { in_pdfdoc: this.id, page_num: t, options: e }
                  )
                  .then(function (t) {
                    return D(h.GeometryCollection, t);
                  })
              );
            }),
          (h.PDFDoc.prototype.getUndoManager = function () {
            return h
              .sendWithPromise('PDFDoc.getUndoManager', { doc: this.id })
              .then(function (t) {
                return D(h.UndoManager, t);
              });
          }),
          (h.PDFDoc.prototype.createDigitalSignatureField = function (t) {
            return (
              void 0 === t && (t = ''),
              f(
                arguments.length,
                0,
                'createDigitalSignatureField',
                '(string)',
                [[t, 'string']]
              ),
              h
                .sendWithPromise('PDFDoc.createDigitalSignatureField', {
                  doc: this.id,
                  in_sig_field_name: t,
                })
                .then(function (t) {
                  return new h.DigitalSignatureField(t);
                })
            );
          }),
          (h.PDFDoc.prototype.getDigitalSignatureFieldIteratorBegin =
            function () {
              return h
                .sendWithPromise(
                  'PDFDoc.getDigitalSignatureFieldIteratorBegin',
                  { doc: this.id }
                )
                .then(function (t) {
                  return D(h.Iterator, t, 'DigitalSignatureField');
                });
            }),
          (h.PDFDoc.prototype.getDigitalSignaturePermissions = function () {
            return h.sendWithPromise('PDFDoc.getDigitalSignaturePermissions', {
              doc: this.id,
            });
          }),
          (h.PDFDoc.prototype.saveViewerOptimizedBuffer = function (t) {
            f(
              arguments.length,
              1,
              'saveViewerOptimizedBuffer',
              '(PDFNet.Obj)',
              [
                [
                  t,
                  'OptionObject',
                  h.Obj,
                  'Obj',
                  'PDFNet.PDFDoc.ViewerOptimizedOptions',
                ],
              ]
            ),
              (t = y(t, 'PDFNet.PDFDoc.ViewerOptimizedOptions'));
            var e = this;
            return t.then(function (t) {
              return h
                .sendWithPromise('PDFDoc.saveViewerOptimizedBuffer', {
                  doc: e.id,
                  opts: t.id,
                })
                .then(function (t) {
                  return new Uint8Array(t);
                });
            });
          }),
          (h.PDFDoc.prototype.verifySignedDigitalSignatures = function (t) {
            return (
              f(
                arguments.length,
                1,
                'verifySignedDigitalSignatures',
                '(PDFNet.VerificationOptions)',
                [[t, 'Object', h.VerificationOptions, 'VerificationOptions']]
              ),
              h.sendWithPromise('PDFDoc.verifySignedDigitalSignatures', {
                doc: this.id,
                opts: t.id,
              })
            );
          }),
          (h.convertPageToAnnotAppearance = function (t, e, n, i) {
            return (
              f(
                arguments.length,
                4,
                'convertPageToAnnotAppearance',
                '(PDFNet.PDFDoc, number, number, string)',
                [
                  [t, 'PDFDoc'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'string'],
                ]
              ),
              h.sendWithPromise('convertPageToAnnotAppearance', {
                docWithAppearance: t.id,
                objNum: e,
                annot_state: n,
                appearance_state: i,
              })
            );
          }),
          (h.PDFDoc.prototype.mergeXFDF = function (t, e) {
            return (
              void 0 === e && (e = null),
              f(
                arguments.length,
                1,
                'mergeXFDF',
                '(PDFNet.Filter, PDFNet.OptionBase)',
                [
                  [t, 'Object', h.Filter, 'Filter'],
                  [e, 'OptionBase'],
                ]
              ),
              F('mergeXFDF', [[e, 1]]),
              (e = e ? e.getJsonString() : '{}'),
              h.sendWithPromise('PDFDoc.mergeXFDF', {
                doc: this.id,
                stream: t.id,
                options: e,
              })
            );
          }),
          (h.PDFDoc.prototype.mergeXFDFString = function (t, e) {
            return (
              void 0 === e && (e = null),
              f(
                arguments.length,
                1,
                'mergeXFDFString',
                '(string, PDFNet.OptionBase)',
                [
                  [t, 'string'],
                  [e, 'OptionBase'],
                ]
              ),
              F('mergeXFDFString', [[e, 1]]),
              (e = e ? e.getJsonString() : '{}'),
              h.sendWithPromise('PDFDoc.mergeXFDFString', {
                doc: this.id,
                xfdf: t,
                options: e,
              })
            );
          }),
          (h.PDFDocInfo.prototype.getTitle = function () {
            return h.sendWithPromise('PDFDocInfo.getTitle', { info: this.id });
          }),
          (h.PDFDocInfo.prototype.getTitleObj = function () {
            return h
              .sendWithPromise('PDFDocInfo.getTitleObj', { info: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PDFDocInfo.prototype.setTitle = function (t) {
            return (
              f(arguments.length, 1, 'setTitle', '(string)', [[t, 'string']]),
              h.sendWithPromise('PDFDocInfo.setTitle', {
                info: this.id,
                title: t,
              })
            );
          }),
          (h.PDFDocInfo.prototype.getAuthor = function () {
            return h.sendWithPromise('PDFDocInfo.getAuthor', { info: this.id });
          }),
          (h.PDFDocInfo.prototype.getAuthorObj = function () {
            return h
              .sendWithPromise('PDFDocInfo.getAuthorObj', { info: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PDFDocInfo.prototype.setAuthor = function (t) {
            return (
              f(arguments.length, 1, 'setAuthor', '(string)', [[t, 'string']]),
              h.sendWithPromise('PDFDocInfo.setAuthor', {
                info: this.id,
                author: t,
              })
            );
          }),
          (h.PDFDocInfo.prototype.getSubject = function () {
            return h.sendWithPromise('PDFDocInfo.getSubject', {
              info: this.id,
            });
          }),
          (h.PDFDocInfo.prototype.getSubjectObj = function () {
            return h
              .sendWithPromise('PDFDocInfo.getSubjectObj', { info: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PDFDocInfo.prototype.setSubject = function (t) {
            return (
              f(arguments.length, 1, 'setSubject', '(string)', [[t, 'string']]),
              h.sendWithPromise('PDFDocInfo.setSubject', {
                info: this.id,
                subject: t,
              })
            );
          }),
          (h.PDFDocInfo.prototype.getKeywords = function () {
            return h.sendWithPromise('PDFDocInfo.getKeywords', {
              info: this.id,
            });
          }),
          (h.PDFDocInfo.prototype.getKeywordsObj = function () {
            return h
              .sendWithPromise('PDFDocInfo.getKeywordsObj', { info: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PDFDocInfo.prototype.setKeywords = function (t) {
            return (
              f(arguments.length, 1, 'setKeywords', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('PDFDocInfo.setKeywords', {
                info: this.id,
                keywords: t,
              })
            );
          }),
          (h.PDFDocInfo.prototype.getCreator = function () {
            return h.sendWithPromise('PDFDocInfo.getCreator', {
              info: this.id,
            });
          }),
          (h.PDFDocInfo.prototype.getCreatorObj = function () {
            return h
              .sendWithPromise('PDFDocInfo.getCreatorObj', { info: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PDFDocInfo.prototype.setCreator = function (t) {
            return (
              f(arguments.length, 1, 'setCreator', '(string)', [[t, 'string']]),
              h.sendWithPromise('PDFDocInfo.setCreator', {
                info: this.id,
                creator: t,
              })
            );
          }),
          (h.PDFDocInfo.prototype.getProducer = function () {
            return h.sendWithPromise('PDFDocInfo.getProducer', {
              info: this.id,
            });
          }),
          (h.PDFDocInfo.prototype.getProducerObj = function () {
            return h
              .sendWithPromise('PDFDocInfo.getProducerObj', { info: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PDFDocInfo.prototype.setProducer = function (t) {
            return (
              f(arguments.length, 1, 'setProducer', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('PDFDocInfo.setProducer', {
                info: this.id,
                producer: t,
              })
            );
          }),
          (h.PDFDocInfo.prototype.getCreationDate = function () {
            return h
              .sendWithPromise('PDFDocInfo.getCreationDate', { info: this.id })
              .then(function (t) {
                return new h.Date(t);
              });
          }),
          (h.PDFDocInfo.prototype.setCreationDate = function (t) {
            return (
              f(arguments.length, 1, 'setCreationDate', '(PDFNet.Date)', [
                [t, 'Structure', h.Date, 'Date'],
              ]),
              F('setCreationDate', [[t, 0]]),
              h.sendWithPromise('PDFDocInfo.setCreationDate', {
                info: this.id,
                creation_date: t,
              })
            );
          }),
          (h.PDFDocInfo.prototype.getModDate = function () {
            return h
              .sendWithPromise('PDFDocInfo.getModDate', { info: this.id })
              .then(function (t) {
                return new h.Date(t);
              });
          }),
          (h.PDFDocInfo.prototype.setModDate = function (t) {
            return (
              f(arguments.length, 1, 'setModDate', '(PDFNet.Date)', [
                [t, 'Structure', h.Date, 'Date'],
              ]),
              F('setModDate', [[t, 0]]),
              h.sendWithPromise('PDFDocInfo.setModDate', {
                info: this.id,
                mod_date: t,
              })
            );
          }),
          (h.PDFDocInfo.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('PDFDocInfo.getSDFObj', { info: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PDFDocInfo.create = function (t) {
            return (
              f(arguments.length, 1, 'create', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('pdfDocInfoCreate', { tr: t.id })
                .then(function (t) {
                  return _(h.PDFDocInfo, t);
                })
            );
          }),
          (h.PDFDocInfo.prototype.copy = function () {
            return h
              .sendWithPromise('PDFDocInfo.copy', { info: this.id })
              .then(function (t) {
                return _(h.PDFDocInfo, t);
              });
          }),
          (h.PDFDocViewPrefs.prototype.setInitialPage = function (t) {
            return (
              f(arguments.length, 1, 'setInitialPage', '(PDFNet.Destination)', [
                [t, 'Object', h.Destination, 'Destination'],
              ]),
              h.sendWithPromise('PDFDocViewPrefs.setInitialPage', {
                p: this.id,
                dest: t.id,
              })
            );
          }),
          (h.PDFDocViewPrefs.prototype.setPageMode = function (t) {
            return (
              f(arguments.length, 1, 'setPageMode', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFDocViewPrefs.setPageMode', {
                p: this.id,
                mode: t,
              })
            );
          }),
          (h.PDFDocViewPrefs.prototype.getPageMode = function () {
            return h.sendWithPromise('PDFDocViewPrefs.getPageMode', {
              p: this.id,
            });
          }),
          (h.PDFDocViewPrefs.prototype.setLayoutMode = function (t) {
            return (
              f(arguments.length, 1, 'setLayoutMode', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFDocViewPrefs.setLayoutMode', {
                p: this.id,
                mode: t,
              })
            );
          }),
          (h.PDFDocViewPrefs.prototype.getLayoutMode = function () {
            return h.sendWithPromise('PDFDocViewPrefs.getLayoutMode', {
              p: this.id,
            });
          }),
          (h.PDFDocViewPrefs.prototype.setPref = function (t, e) {
            return (
              f(arguments.length, 2, 'setPref', '(number, boolean)', [
                [t, 'number'],
                [e, 'boolean'],
              ]),
              h.sendWithPromise('PDFDocViewPrefs.setPref', {
                p: this.id,
                pref: t,
                value: e,
              })
            );
          }),
          (h.PDFDocViewPrefs.prototype.getPref = function (t) {
            return (
              f(arguments.length, 1, 'getPref', '(number)', [[t, 'number']]),
              h.sendWithPromise('PDFDocViewPrefs.getPref', {
                p: this.id,
                pref: t,
              })
            );
          }),
          (h.PDFDocViewPrefs.prototype.setNonFullScreenPageMode = function (t) {
            return (
              f(arguments.length, 1, 'setNonFullScreenPageMode', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFDocViewPrefs.setNonFullScreenPageMode', {
                p: this.id,
                mode: t,
              })
            );
          }),
          (h.PDFDocViewPrefs.prototype.getNonFullScreenPageMode = function () {
            return h.sendWithPromise(
              'PDFDocViewPrefs.getNonFullScreenPageMode',
              { p: this.id }
            );
          }),
          (h.PDFDocViewPrefs.prototype.setDirection = function (t) {
            return (
              f(arguments.length, 1, 'setDirection', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFDocViewPrefs.setDirection', {
                p: this.id,
                left_to_right: t,
              })
            );
          }),
          (h.PDFDocViewPrefs.prototype.getDirection = function () {
            return h.sendWithPromise('PDFDocViewPrefs.getDirection', {
              p: this.id,
            });
          }),
          (h.PDFDocViewPrefs.prototype.setViewArea = function (t) {
            return (
              f(arguments.length, 1, 'setViewArea', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFDocViewPrefs.setViewArea', {
                p: this.id,
                box: t,
              })
            );
          }),
          (h.PDFDocViewPrefs.prototype.getViewArea = function () {
            return h.sendWithPromise('PDFDocViewPrefs.getViewArea', {
              p: this.id,
            });
          }),
          (h.PDFDocViewPrefs.prototype.setViewClip = function (t) {
            return (
              f(arguments.length, 1, 'setViewClip', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFDocViewPrefs.setViewClip', {
                p: this.id,
                box: t,
              })
            );
          }),
          (h.PDFDocViewPrefs.prototype.getViewClip = function () {
            return h.sendWithPromise('PDFDocViewPrefs.getViewClip', {
              p: this.id,
            });
          }),
          (h.PDFDocViewPrefs.prototype.setPrintArea = function (t) {
            return (
              f(arguments.length, 1, 'setPrintArea', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFDocViewPrefs.setPrintArea', {
                p: this.id,
                box: t,
              })
            );
          }),
          (h.PDFDocViewPrefs.prototype.getPrintArea = function () {
            return h.sendWithPromise('PDFDocViewPrefs.getPrintArea', {
              p: this.id,
            });
          }),
          (h.PDFDocViewPrefs.prototype.setPrintClip = function (t) {
            return (
              f(arguments.length, 1, 'setPrintClip', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFDocViewPrefs.setPrintClip', {
                p: this.id,
                box: t,
              })
            );
          }),
          (h.PDFDocViewPrefs.prototype.getPrintClip = function () {
            return h.sendWithPromise('PDFDocViewPrefs.getPrintClip', {
              p: this.id,
            });
          }),
          (h.PDFDocViewPrefs.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('PDFDocViewPrefs.getSDFObj', { p: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.PDFDocViewPrefs.create = function (t) {
            return (
              f(arguments.length, 1, 'create', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('pdfDocViewPrefsCreate', { tr: t.id })
                .then(function (t) {
                  return _(h.PDFDocViewPrefs, t);
                })
            );
          }),
          (h.PDFDocViewPrefs.prototype.copy = function () {
            return h
              .sendWithPromise('PDFDocViewPrefs.copy', { prefs: this.id })
              .then(function (t) {
                return _(h.PDFDocViewPrefs, t);
              });
          }),
          (h.PDFRasterizer.create = function (t) {
            return (
              void 0 === t && (t = h.PDFRasterizer.Type.e_BuiltIn),
              f(arguments.length, 0, 'create', '(number)', [[t, 'number']]),
              h
                .sendWithPromise('pdfRasterizerCreate', { type: t })
                .then(function (t) {
                  return D(h.PDFRasterizer, t);
                })
            );
          }),
          (h.PDFRasterizer.prototype.setDrawAnnotations = function (t) {
            return (
              f(arguments.length, 1, 'setDrawAnnotations', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFRasterizer.setDrawAnnotations', {
                r: this.id,
                render_annots: t,
              })
            );
          }),
          (h.PDFRasterizer.prototype.setHighlightFields = function (t) {
            return (
              f(arguments.length, 1, 'setHighlightFields', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFRasterizer.setHighlightFields', {
                r: this.id,
                highlight: t,
              })
            );
          }),
          (h.PDFRasterizer.prototype.setDrawUIElements = function (t) {
            return (
              f(arguments.length, 1, 'setDrawUIElements', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFRasterizer.setDrawUIElements', {
                r: this.id,
                draw_ui_elements: t,
              })
            );
          }),
          (h.PDFRasterizer.prototype.setAntiAliasing = function (t) {
            return (
              f(arguments.length, 1, 'setAntiAliasing', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFRasterizer.setAntiAliasing', {
                r: this.id,
                enable_aa: t,
              })
            );
          }),
          (h.PDFRasterizer.prototype.setPathHinting = function (t) {
            return (
              f(arguments.length, 1, 'setPathHinting', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFRasterizer.setPathHinting', {
                r: this.id,
                enable_hinting: t,
              })
            );
          }),
          (h.PDFRasterizer.prototype.setThinLineAdjustment = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setThinLineAdjustment',
                '(boolean, boolean)',
                [
                  [t, 'boolean'],
                  [e, 'boolean'],
                ]
              ),
              h.sendWithPromise('PDFRasterizer.setThinLineAdjustment', {
                r: this.id,
                grid_fit: t,
                stroke_adjust: e,
              })
            );
          }),
          (h.PDFRasterizer.prototype.setGamma = function (t) {
            return (
              f(arguments.length, 1, 'setGamma', '(number)', [[t, 'number']]),
              h.sendWithPromise('PDFRasterizer.setGamma', {
                r: this.id,
                expgamma: t,
              })
            );
          }),
          (h.PDFRasterizer.prototype.setOCGContext = function (t) {
            return (
              f(arguments.length, 1, 'setOCGContext', '(PDFNet.OCGContext)', [
                [t, 'Object', h.OCGContext, 'OCGContext'],
              ]),
              h.sendWithPromise('PDFRasterizer.setOCGContext', {
                r: this.id,
                ctx: t.id,
              })
            );
          }),
          (h.PDFRasterizer.prototype.setPrintMode = function (t) {
            return (
              f(arguments.length, 1, 'setPrintMode', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFRasterizer.setPrintMode', {
                r: this.id,
                is_printing: t,
              })
            );
          }),
          (h.PDFRasterizer.prototype.setImageSmoothing = function (t, e) {
            return (
              void 0 === t && (t = !0),
              void 0 === e && (e = !1),
              f(
                arguments.length,
                0,
                'setImageSmoothing',
                '(boolean, boolean)',
                [
                  [t, 'boolean'],
                  [e, 'boolean'],
                ]
              ),
              h.sendWithPromise('PDFRasterizer.setImageSmoothing', {
                r: this.id,
                smoothing_enabled: t,
                hq_image_resampling: e,
              })
            );
          }),
          (h.PDFRasterizer.prototype.setOverprint = function (t) {
            return (
              f(arguments.length, 1, 'setOverprint', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFRasterizer.setOverprint', {
                r: this.id,
                op: t,
              })
            );
          }),
          (h.PDFRasterizer.prototype.setCaching = function (t) {
            return (
              void 0 === t && (t = !0),
              f(arguments.length, 0, 'setCaching', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFRasterizer.setCaching', {
                r: this.id,
                enabled: t,
              })
            );
          }),
          (h.PDFDraw.prototype.setOCGContext = function (t) {
            return (
              f(arguments.length, 1, 'setOCGContext', '(PDFNet.OCGContext)', [
                [t, 'Object', h.OCGContext, 'OCGContext'],
              ]),
              h.sendWithPromise('PDFDraw.setOCGContext', {
                r: this.id,
                ctx: t.id,
              })
            );
          }),
          (h.PDFRasterizer.prototype.setAnnotationState = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setAnnotationState',
                '(PDFNet.Annot, number)',
                [
                  [t, 'Object', h.Annot, 'Annot'],
                  [e, 'number'],
                ]
              ),
              h.sendWithPromise('PDFRasterizer.setAnnotationState', {
                r: this.id,
                annot: t.id,
                new_view_state: e,
              })
            );
          }),
          (h.PDFRasterizer.prototype.setRasterizerType = function (t) {
            return (
              f(arguments.length, 1, 'setRasterizerType', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFRasterizer.setRasterizerType', {
                r: this.id,
                type: t,
              })
            );
          }),
          (h.PDFRasterizer.prototype.getRasterizerType = function () {
            return h.sendWithPromise('PDFRasterizer.getRasterizerType', {
              r: this.id,
            });
          }),
          (h.PDFRasterizer.prototype.setColorPostProcessMode = function (t) {
            return (
              f(arguments.length, 1, 'setColorPostProcessMode', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFRasterizer.setColorPostProcessMode', {
                r: this.id,
                mode: t,
              })
            );
          }),
          (h.PDFRasterizer.prototype.getColorPostProcessMode = function () {
            return h.sendWithPromise('PDFRasterizer.getColorPostProcessMode', {
              r: this.id,
            });
          }),
          (h.PDFRasterizer.prototype.enableDisplayListCaching = function (t) {
            return (
              f(arguments.length, 1, 'enableDisplayListCaching', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFRasterizer.enableDisplayListCaching', {
                r: this.id,
                enabled: t,
              })
            );
          }),
          (h.PDFRasterizer.prototype.updateBuffer = function () {
            return h.sendWithPromise('PDFRasterizer.updateBuffer', {
              r: this.id,
            });
          }),
          (h.PDFRasterizer.prototype.rasterizeAnnot = function (t, e, n, i, r) {
            return (
              f(
                arguments.length,
                5,
                'rasterizeAnnot',
                '(PDFNet.Annot, PDFNet.Page, PDFNet.Matrix2D, boolean, boolean)',
                [
                  [t, 'Object', h.Annot, 'Annot'],
                  [e, 'Object', h.Page, 'Page'],
                  [n, 'Structure', h.Matrix2D, 'Matrix2D'],
                  [i, 'boolean'],
                  [r, 'boolean'],
                ]
              ),
              F('rasterizeAnnot', [[n, 2]]),
              h
                .sendWithPromise('PDFRasterizer.rasterizeAnnot', {
                  r: this.id,
                  annot: t.id,
                  page: e.id,
                  device_mtx: n,
                  demult: i,
                  cancel: r,
                })
                .then(function (t) {
                  return _(h.OwnedBitmap, t);
                })
            );
          }),
          (h.PDFRasterizer.prototype.rasterizeSeparations = function (
            t,
            e,
            n,
            i,
            r,
            o
          ) {
            return (
              f(
                arguments.length,
                6,
                'rasterizeSeparations',
                '(PDFNet.Page, number, number, PDFNet.Matrix2D, PDFNet.Rect, boolean)',
                [
                  [t, 'Object', h.Page, 'Page'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'Structure', h.Matrix2D, 'Matrix2D'],
                  [r, 'Structure', h.Rect, 'Rect'],
                  [o, 'boolean'],
                ]
              ),
              F('rasterizeSeparations', [
                [i, 3],
                [r, 4],
              ]),
              h
                .sendWithPromise('PDFRasterizer.rasterizeSeparations', {
                  r: this.id,
                  page: t.id,
                  width: e,
                  height: n,
                  mtx: i,
                  clip: r,
                  cancel: o,
                })
                .then(function (t) {
                  for (var e = [], n = 0; n < t.length; ++n) {
                    var i = t[n];
                    if ('0' === i) return null;
                    (i = new h.Separation(i)), e.push(i);
                  }
                  return e;
                })
            );
          }),
          (h.PDFDraw.create = function (t) {
            return (
              void 0 === t && (t = 92),
              f(arguments.length, 0, 'create', '(number)', [[t, 'number']]),
              h.sendWithPromise('pdfDrawCreate', { dpi: t }).then(function (t) {
                return D(h.PDFDraw, t);
              })
            );
          }),
          (h.PDFDraw.prototype.setRasterizerType = function (t) {
            return (
              f(arguments.length, 1, 'setRasterizerType', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFDraw.setRasterizerType', {
                d: this.id,
                type: t,
              })
            );
          }),
          (h.PDFDraw.prototype.setDPI = function (t) {
            return (
              f(arguments.length, 1, 'setDPI', '(number)', [[t, 'number']]),
              h.sendWithPromise('PDFDraw.setDPI', { d: this.id, dpi: t })
            );
          }),
          (h.PDFDraw.prototype.setImageSize = function (t, e, n) {
            return (
              void 0 === n && (n = !0),
              f(
                arguments.length,
                2,
                'setImageSize',
                '(number, number, boolean)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'boolean'],
                ]
              ),
              h.sendWithPromise('PDFDraw.setImageSize', {
                d: this.id,
                width: t,
                height: e,
                preserve_aspect_ratio: n,
              })
            );
          }),
          (h.PDFDraw.prototype.setPageBox = function (t) {
            return (
              f(arguments.length, 1, 'setPageBox', '(number)', [[t, 'number']]),
              h.sendWithPromise('PDFDraw.setPageBox', { d: this.id, region: t })
            );
          }),
          (h.PDFDraw.prototype.setClipRect = function (t) {
            return (
              f(arguments.length, 1, 'setClipRect', '(PDFNet.Rect)', [
                [t, 'Structure', h.Rect, 'Rect'],
              ]),
              F('setClipRect', [[t, 0]]),
              h.sendWithPromise('PDFDraw.setClipRect', { d: this.id, rect: t })
            );
          }),
          (h.PDFDraw.prototype.setFlipYAxis = function (t) {
            return (
              f(arguments.length, 1, 'setFlipYAxis', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFDraw.setFlipYAxis', {
                d: this.id,
                flip_y: t,
              })
            );
          }),
          (h.PDFDraw.prototype.setRotate = function (t) {
            return (
              f(arguments.length, 1, 'setRotate', '(number)', [[t, 'number']]),
              h.sendWithPromise('PDFDraw.setRotate', { d: this.id, r: t })
            );
          }),
          (h.PDFDraw.prototype.setDrawAnnotations = function (t) {
            return (
              f(arguments.length, 1, 'setDrawAnnotations', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFDraw.setDrawAnnotations', {
                d: this.id,
                render_annots: t,
              })
            );
          }),
          (h.PDFDraw.prototype.setHighlightFields = function (t) {
            return (
              f(arguments.length, 1, 'setHighlightFields', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFDraw.setHighlightFields', {
                d: this.id,
                highlight: t,
              })
            );
          }),
          (h.PDFDraw.prototype.setDrawUIElements = function (t) {
            return (
              f(arguments.length, 1, 'setDrawUIElements', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFDraw.setDrawUIElements', {
                d: this.id,
                draw_ui_elements: t,
              })
            );
          }),
          (h.PDFDraw.prototype.setAntiAliasing = function (t) {
            return (
              f(arguments.length, 1, 'setAntiAliasing', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFDraw.setAntiAliasing', {
                d: this.id,
                enable_aa: t,
              })
            );
          }),
          (h.PDFDraw.prototype.setPathHinting = function (t) {
            return (
              f(arguments.length, 1, 'setPathHinting', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFDraw.setPathHinting', {
                d: this.id,
                enable_hinting: t,
              })
            );
          }),
          (h.PDFDraw.prototype.setThinLineAdjustment = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'setThinLineAdjustment',
                '(boolean, boolean)',
                [
                  [t, 'boolean'],
                  [e, 'boolean'],
                ]
              ),
              h.sendWithPromise('PDFDraw.setThinLineAdjustment', {
                d: this.id,
                grid_fit: t,
                stroke_adjust: e,
              })
            );
          }),
          (h.PDFDraw.prototype.setGamma = function (t) {
            return (
              f(arguments.length, 1, 'setGamma', '(number)', [[t, 'number']]),
              h.sendWithPromise('PDFDraw.setGamma', { d: this.id, exp: t })
            );
          }),
          (h.PDFDraw.prototype.setPrintMode = function (t) {
            return (
              f(arguments.length, 1, 'setPrintMode', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFDraw.setPrintMode', {
                d: this.id,
                is_printing: t,
              })
            );
          }),
          (h.PDFDraw.prototype.setPageTransparent = function (t) {
            return (
              f(arguments.length, 1, 'setPageTransparent', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFDraw.setPageTransparent', {
                d: this.id,
                is_transparent: t,
              })
            );
          }),
          (h.PDFDraw.prototype.setDefaultPageColor = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'setDefaultPageColor',
                '(number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                ]
              ),
              h.sendWithPromise('PDFDraw.setDefaultPageColor', {
                d: this.id,
                r: t,
                g: e,
                b: n,
              })
            );
          }),
          (h.PDFDraw.prototype.setOverprint = function (t) {
            return (
              f(arguments.length, 1, 'setOverprint', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFDraw.setOverprint', { d: this.id, op: t })
            );
          }),
          (h.PDFDraw.prototype.setImageSmoothing = function (t, e) {
            return (
              void 0 === t && (t = !0),
              void 0 === e && (e = !1),
              f(
                arguments.length,
                0,
                'setImageSmoothing',
                '(boolean, boolean)',
                [
                  [t, 'boolean'],
                  [e, 'boolean'],
                ]
              ),
              h.sendWithPromise('PDFDraw.setImageSmoothing', {
                d: this.id,
                smoothing_enabled: t,
                hq_image_resampling: e,
              })
            );
          }),
          (h.PDFDraw.prototype.setCaching = function (t) {
            return (
              void 0 === t && (t = !0),
              f(arguments.length, 0, 'setCaching', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('PDFDraw.setCaching', {
                d: this.id,
                enabled: t,
              })
            );
          }),
          (h.PDFDraw.prototype.setColorPostProcessMode = function (t) {
            return (
              f(arguments.length, 1, 'setColorPostProcessMode', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('PDFDraw.setColorPostProcessMode', {
                d: this.id,
                mode: t,
              })
            );
          }),
          (h.PDFDraw.prototype.getSeparationBitmaps = function (t) {
            return (
              f(arguments.length, 1, 'getSeparationBitmaps', '(PDFNet.Page)', [
                [t, 'Object', h.Page, 'Page'],
              ]),
              h
                .sendWithPromise('PDFDraw.getSeparationBitmaps', {
                  d: this.id,
                  page: t.id,
                })
                .then(function (t) {
                  for (var e = [], n = 0; n < t.length; ++n) {
                    var i = t[n];
                    if ('0' === i) return null;
                    (i = new h.Separation(i)), e.push(i);
                  }
                  return e;
                })
            );
          }),
          (h.enableJavaScript = function (t) {
            return (
              f(arguments.length, 1, 'enableJavaScript', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('pdfNetEnableJavaScript', { enable: t })
            );
          }),
          (h.isJavaScriptEnabled = function () {
            return h.sendWithPromise('pdfNetIsJavaScriptEnabled', {});
          }),
          (h.terminateEx = function (t) {
            return (
              f(arguments.length, 1, 'terminateEx', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('pdfNetTerminateEx', { termination_level: t })
            );
          }),
          (h.setColorManagement = function (t) {
            return (
              void 0 === t && (t = h.CMSType.e_lcms),
              f(arguments.length, 0, 'setColorManagement', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('pdfNetSetColorManagement', { t: t })
            );
          }),
          (h.setDefaultDeviceCMYKProfileFromFilter = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setDefaultDeviceCMYKProfileFromFilter',
                '(PDFNet.Filter)',
                [[t, 'Object', h.Filter, 'Filter']]
              ),
              h.sendWithPromise('pdfNetSetDefaultDeviceCMYKProfileFromFilter', {
                stream: t.id,
              })
            );
          }),
          (h.setDefaultDeviceRGBProfileFromFilter = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setDefaultDeviceRGBProfileFromFilter',
                '(PDFNet.Filter)',
                [[t, 'Object', h.Filter, 'Filter']]
              ),
              h.sendWithPromise('pdfNetSetDefaultDeviceRGBProfileFromFilter', {
                stream: t.id,
              })
            );
          }),
          (h.setDefaultFlateCompressionLevel = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setDefaultFlateCompressionLevel',
                '(number)',
                [[t, 'number']]
              ),
              h.sendWithPromise('pdfNetSetDefaultFlateCompressionLevel', {
                level: t,
              })
            );
          }),
          (h.setViewerCache = function (t, e) {
            return (
              f(arguments.length, 2, 'setViewerCache', '(number, boolean)', [
                [t, 'number'],
                [e, 'boolean'],
              ]),
              h.sendWithPromise('pdfNetSetViewerCache', {
                max_cache_size: t,
                on_disk: e,
              })
            );
          }),
          (h.getVersion = function () {
            return h.sendWithPromise('pdfNetGetVersion', {});
          }),
          (h.setLogLevel = function (t) {
            return (
              void 0 === t && (t = h.LogLevel.e_LogLevel_Fatal),
              f(arguments.length, 0, 'setLogLevel', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('pdfNetSetLogLevel', { level: t })
            );
          }),
          (h.getSystemFontList = function () {
            return h.sendWithPromise('pdfNetGetSystemFontList', {});
          }),
          (h.addPDFTronCustomHandler = function (t) {
            return (
              f(arguments.length, 1, 'addPDFTronCustomHandler', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('pdfNetAddPDFTronCustomHandler', {
                custom_id: t,
              })
            );
          }),
          (h.getVersionString = function () {
            return h.sendWithPromise('pdfNetGetVersionString', {});
          }),
          (h.setConnectionErrorHandlingMode = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setConnectionErrorHandlingMode',
                '(number)',
                [[t, 'number']]
              ),
              h.sendWithPromise('pdfNetSetConnectionErrorHandlingMode', {
                mode: t,
              })
            );
          }),
          (h.Rect.init = function (t, e, n, i) {
            return (
              f(
                arguments.length,
                4,
                'init',
                '(number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                ]
              ),
              h
                .sendWithPromise('rectInit', { x1: t, y1: e, x2: n, y2: i })
                .then(function (t) {
                  return new h.Rect(t);
                })
            );
          }),
          (h.Rect.prototype.attach = function (t) {
            f(arguments.length, 1, 'attach', '(PDFNet.Obj)', [
              [t, 'Object', h.Obj, 'Obj'],
            ]),
              P('attach', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Rect.attach'),
              h
                .sendWithPromise('Rect.attach', { rect: this, obj: t.id })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.Rect.prototype.update = function (t) {
            void 0 === t && (t = new h.Obj('__null')),
              f(arguments.length, 0, 'update', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              P('update', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Rect.update'),
              h
                .sendWithPromise('Rect.update', { rect: this, obj: t.id })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.rect, e), t.result;
                })
            );
          }),
          (h.Rect.prototype.get = function () {
            return (
              P('get', this.yieldFunction),
              h.sendWithPromise('Rect.get', { rect: this })
            );
          }),
          (h.Rect.prototype.set = function (t, e, n, i) {
            f(arguments.length, 4, 'set', '(number, number, number, number)', [
              [t, 'number'],
              [e, 'number'],
              [n, 'number'],
              [i, 'number'],
            ]),
              P('set', this.yieldFunction);
            var r = this;
            return (
              (this.yieldFunction = 'Rect.set'),
              h
                .sendWithPromise('Rect.set', {
                  rect: this,
                  x1: t,
                  y1: e,
                  x2: n,
                  y2: i,
                })
                .then(function (t) {
                  (r.yieldFunction = void 0), W(t, r);
                })
            );
          }),
          (h.Rect.prototype.width = function () {
            return (
              P('width', this.yieldFunction),
              h.sendWithPromise('Rect.width', { rect: this })
            );
          }),
          (h.Rect.prototype.height = function () {
            return (
              P('height', this.yieldFunction),
              h.sendWithPromise('Rect.height', { rect: this })
            );
          }),
          (h.Rect.prototype.contains = function (t, e) {
            return (
              f(arguments.length, 2, 'contains', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              P('contains', this.yieldFunction),
              h.sendWithPromise('Rect.contains', { rect: this, x: t, y: e })
            );
          }),
          (h.Rect.prototype.intersectRect = function (t, e) {
            f(
              arguments.length,
              2,
              'intersectRect',
              '(PDFNet.Rect, PDFNet.Rect)',
              [
                [t, 'Structure', h.Rect, 'Rect'],
                [e, 'Structure', h.Rect, 'Rect'],
              ]
            ),
              P('intersectRect', this.yieldFunction),
              F('intersectRect', [
                [t, 0],
                [e, 1],
              ]);
            var n = this;
            return (
              (this.yieldFunction = 'Rect.intersectRect'),
              h
                .sendWithPromise('Rect.intersectRect', {
                  rect: this,
                  rect1: t,
                  rect2: e,
                })
                .then(function (t) {
                  return (n.yieldFunction = void 0), W(t.rect, n), t.result;
                })
            );
          }),
          (h.Rect.prototype.normalize = function () {
            P('normalize', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Rect.normalize'),
              h
                .sendWithPromise('Rect.normalize', { rect: this })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.Rect.prototype.inflate1 = function (t) {
            f(arguments.length, 1, 'inflate1', '(number)', [[t, 'number']]),
              P('inflate1', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'Rect.inflate1'),
              h
                .sendWithPromise('Rect.inflate1', { rect: this, amount: t })
                .then(function (t) {
                  (e.yieldFunction = void 0), W(t, e);
                })
            );
          }),
          (h.Rect.prototype.inflate2 = function (t, e) {
            f(arguments.length, 2, 'inflate2', '(number, number)', [
              [t, 'number'],
              [e, 'number'],
            ]),
              P('inflate2', this.yieldFunction);
            var n = this;
            return (
              (this.yieldFunction = 'Rect.inflate2'),
              h
                .sendWithPromise('Rect.inflate2', { rect: this, x: t, y: e })
                .then(function (t) {
                  (n.yieldFunction = void 0), W(t, n);
                })
            );
          }),
          (h.Redactor.redactionCreate = function (t, e, n, i) {
            return (
              f(
                arguments.length,
                4,
                'redactionCreate',
                '(number, PDFNet.Rect, boolean, string)',
                [
                  [t, 'number'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'boolean'],
                  [i, 'string'],
                ]
              ),
              F('redactionCreate', [[e, 1]]),
              h
                .sendWithPromise('Redactor.redactionCreate', {
                  page_num: t,
                  bbox: e,
                  negative: n,
                  text: i,
                })
                .then(function (t) {
                  return _(h.Redaction, t);
                })
            );
          }),
          (h.Redactor.redactionDestroy = function (t) {
            return (
              f(arguments.length, 1, 'redactionDestroy', '(PDFNet.Redaction)', [
                [t, 'Object', h.Redaction, 'Redaction'],
              ]),
              h.sendWithPromise('Redactor.redactionDestroy', {
                redaction: t.id,
              })
            );
          }),
          (h.Redactor.redactionCopy = function (t) {
            return (
              f(arguments.length, 1, 'redactionCopy', '(PDFNet.Redaction)', [
                [t, 'Object', h.Redaction, 'Redaction'],
              ]),
              h
                .sendWithPromise('Redactor.redactionCopy', { other: t.id })
                .then(function (t) {
                  return _(h.Redaction, t);
                })
            );
          }),
          (h.Shading.create = function (t) {
            return (
              void 0 === t && (t = new h.Obj('0')),
              f(arguments.length, 0, 'create', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('shadingCreate', { shading_dict: t.id })
                .then(function (t) {
                  return D(h.Shading, t);
                })
            );
          }),
          (h.Shading.getTypeFromObj = function (t) {
            return (
              f(arguments.length, 1, 'getTypeFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('shadingGetTypeFromObj', { shading_dict: t.id })
            );
          }),
          (h.Shading.prototype.getType = function () {
            return h.sendWithPromise('Shading.getType', { s: this.id });
          }),
          (h.Shading.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('Shading.getSDFObj', { s: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Shading.prototype.getBaseColorSpace = function () {
            return h
              .sendWithPromise('Shading.getBaseColorSpace', { s: this.id })
              .then(function (t) {
                return D(h.ColorSpace, t);
              });
          }),
          (h.Shading.prototype.hasBBox = function () {
            return h.sendWithPromise('Shading.hasBBox', { s: this.id });
          }),
          (h.Shading.prototype.getBBox = function () {
            return h
              .sendWithPromise('Shading.getBBox', { s: this.id })
              .then(function (t) {
                return new h.Rect(t);
              });
          }),
          (h.Shading.prototype.hasBackground = function () {
            return h.sendWithPromise('Shading.hasBackground', { s: this.id });
          }),
          (h.Shading.prototype.getBackground = function () {
            return h
              .sendWithPromise('Shading.getBackground', { s: this.id })
              .then(function (t) {
                return D(h.ColorPt, t);
              });
          }),
          (h.Shading.prototype.getAntialias = function () {
            return h.sendWithPromise('Shading.getAntialias', { s: this.id });
          }),
          (h.Shading.prototype.getParamStart = function () {
            return h.sendWithPromise('Shading.getParamStart', { s: this.id });
          }),
          (h.Shading.prototype.getParamEnd = function () {
            return h.sendWithPromise('Shading.getParamEnd', { s: this.id });
          }),
          (h.Shading.prototype.isExtendStart = function () {
            return h.sendWithPromise('Shading.isExtendStart', { s: this.id });
          }),
          (h.Shading.prototype.isExtendEnd = function () {
            return h.sendWithPromise('Shading.isExtendEnd', { s: this.id });
          }),
          (h.Shading.prototype.getColor = function (t) {
            return (
              f(arguments.length, 1, 'getColor', '(number)', [[t, 'number']]),
              h
                .sendWithPromise('Shading.getColor', { s: this.id, t: t })
                .then(function (t) {
                  return D(h.ColorPt, t);
                })
            );
          }),
          (h.Shading.prototype.getCoords = function () {
            return h.sendWithPromise('Shading.getCoords', { s: this.id });
          }),
          (h.Shading.prototype.getCoordsRadial = function () {
            return h.sendWithPromise('Shading.getCoordsRadial', { s: this.id });
          }),
          (h.Shading.prototype.getDomain = function () {
            return h.sendWithPromise('Shading.getDomain', { s: this.id });
          }),
          (h.Shading.prototype.getMatrix = function () {
            return h
              .sendWithPromise('Shading.getMatrix', { s: this.id })
              .then(function (t) {
                return new h.Matrix2D(t);
              });
          }),
          (h.Shading.prototype.getColorForFunction = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'getColorForFunction',
                '(number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                ]
              ),
              h
                .sendWithPromise('Shading.getColorForFunction', {
                  s: this.id,
                  t1: t,
                  t2: e,
                })
                .then(function (t) {
                  return D(h.ColorPt, t);
                })
            );
          }),
          (h.Stamper.create = function (t, e, n) {
            return (
              f(arguments.length, 3, 'create', '(number, number, number)', [
                [t, 'number'],
                [e, 'number'],
                [n, 'number'],
              ]),
              h
                .sendWithPromise('stamperCreate', { size_type: t, a: e, b: n })
                .then(function (t) {
                  return D(h.Stamper, t);
                })
            );
          }),
          (h.Stamper.prototype.stampImage = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'stampImage',
                '(PDFNet.PDFDoc, PDFNet.Image, PDFNet.PageSet)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Object', h.Image, 'Image'],
                  [n, 'Object', h.PageSet, 'PageSet'],
                ]
              ),
              h.sendWithPromise('Stamper.stampImage', {
                stamp: this.id,
                dest_doc: t.id,
                img: e.id,
                dest_pages: n.id,
              })
            );
          }),
          (h.Stamper.prototype.stampPage = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'stampPage',
                '(PDFNet.PDFDoc, PDFNet.Page, PDFNet.PageSet)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Object', h.Page, 'Page'],
                  [n, 'Object', h.PageSet, 'PageSet'],
                ]
              ),
              h.sendWithPromise('Stamper.stampPage', {
                stamp: this.id,
                dest_doc: t.id,
                page: e.id,
                dest_pages: n.id,
              })
            );
          }),
          (h.Stamper.prototype.stampText = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'stampText',
                '(PDFNet.PDFDoc, string, PDFNet.PageSet)',
                [
                  [t, 'PDFDoc'],
                  [e, 'string'],
                  [n, 'Object', h.PageSet, 'PageSet'],
                ]
              ),
              h.sendWithPromise('Stamper.stampText', {
                stamp: this.id,
                dest_doc: t.id,
                txt: e,
                dest_pages: n.id,
              })
            );
          }),
          (h.Stamper.prototype.setFont = function (t) {
            return (
              f(arguments.length, 1, 'setFont', '(PDFNet.Font)', [
                [t, 'Object', h.Font, 'Font'],
              ]),
              h.sendWithPromise('Stamper.setFont', {
                stamp: this.id,
                font: t.id,
              })
            );
          }),
          (h.Stamper.prototype.setFontColor = function (t) {
            return (
              f(arguments.length, 1, 'setFontColor', '(PDFNet.ColorPt)', [
                [t, 'Object', h.ColorPt, 'ColorPt'],
              ]),
              h.sendWithPromise('Stamper.setFontColor', {
                stamp: this.id,
                font_color: t.id,
              })
            );
          }),
          (h.Stamper.prototype.setTextAlignment = function (t) {
            return (
              f(arguments.length, 1, 'setTextAlignment', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Stamper.setTextAlignment', {
                stamp: this.id,
                text_alignment: t,
              })
            );
          }),
          (h.Stamper.prototype.setOpacity = function (t) {
            return (
              f(arguments.length, 1, 'setOpacity', '(number)', [[t, 'number']]),
              h.sendWithPromise('Stamper.setOpacity', {
                stamp: this.id,
                opacity: t,
              })
            );
          }),
          (h.Stamper.prototype.setRotation = function (t) {
            return (
              f(arguments.length, 1, 'setRotation', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Stamper.setRotation', {
                stamp: this.id,
                rotation: t,
              })
            );
          }),
          (h.Stamper.prototype.setAsBackground = function (t) {
            return (
              f(arguments.length, 1, 'setAsBackground', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('Stamper.setAsBackground', {
                stamp: this.id,
                background: t,
              })
            );
          }),
          (h.Stamper.prototype.setAsAnnotation = function (t) {
            return (
              f(arguments.length, 1, 'setAsAnnotation', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('Stamper.setAsAnnotation', {
                stamp: this.id,
                annotation: t,
              })
            );
          }),
          (h.Stamper.prototype.showsOnScreen = function (t) {
            return (
              f(arguments.length, 1, 'showsOnScreen', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('Stamper.showsOnScreen', {
                stamp: this.id,
                on_screen: t,
              })
            );
          }),
          (h.Stamper.prototype.showsOnPrint = function (t) {
            return (
              f(arguments.length, 1, 'showsOnPrint', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('Stamper.showsOnPrint', {
                stamp: this.id,
                on_print: t,
              })
            );
          }),
          (h.Stamper.prototype.setAlignment = function (t, e) {
            return (
              f(arguments.length, 2, 'setAlignment', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h.sendWithPromise('Stamper.setAlignment', {
                stamp: this.id,
                horizontal_alignment: t,
                vertical_alignment: e,
              })
            );
          }),
          (h.Stamper.prototype.setPosition = function (t, e, n) {
            return (
              void 0 === n && (n = !1),
              f(
                arguments.length,
                2,
                'setPosition',
                '(number, number, boolean)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'boolean'],
                ]
              ),
              h.sendWithPromise('Stamper.setPosition', {
                stamp: this.id,
                horizontal_distance: t,
                vertical_distance: e,
                use_percentage: n,
              })
            );
          }),
          (h.Stamper.prototype.setSize = function (t, e, n) {
            return (
              f(arguments.length, 3, 'setSize', '(number, number, number)', [
                [t, 'number'],
                [e, 'number'],
                [n, 'number'],
              ]),
              h.sendWithPromise('Stamper.setSize', {
                stamp: this.id,
                size_type: t,
                a: e,
                b: n,
              })
            );
          }),
          (h.Stamper.deleteStamps = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'deleteStamps',
                '(PDFNet.PDFDoc, PDFNet.PageSet)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Object', h.PageSet, 'PageSet'],
                ]
              ),
              h.sendWithPromise('stamperDeleteStamps', {
                doc: t.id,
                page_set: e.id,
              })
            );
          }),
          (h.Stamper.hasStamps = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'hasStamps',
                '(PDFNet.PDFDoc, PDFNet.PageSet)',
                [
                  [t, 'PDFDoc'],
                  [e, 'Object', h.PageSet, 'PageSet'],
                ]
              ),
              h.sendWithPromise('stamperHasStamps', {
                doc: t.id,
                page_set: e.id,
              })
            );
          }),
          (h.TextExtractor.create = function () {
            return h
              .sendWithPromise('textExtractorCreate', {})
              .then(function (t) {
                return D(h.TextExtractor, t);
              });
          }),
          (h.TextExtractor.prototype.setOCGContext = function (t) {
            return (
              f(arguments.length, 1, 'setOCGContext', '(PDFNet.OCGContext)', [
                [t, 'Object', h.OCGContext, 'OCGContext'],
              ]),
              h.sendWithPromise('TextExtractor.setOCGContext', {
                te: this.id,
                ctx: t.id,
              })
            );
          }),
          (h.TextExtractor.prototype.begin = function (t, e, n) {
            return (
              void 0 === e && (e = null),
              void 0 === n && (n = 0),
              f(
                arguments.length,
                1,
                'begin',
                '(PDFNet.Page, PDFNet.Rect, number)',
                [
                  [t, 'Object', h.Page, 'Page'],
                  [e, 'Structure', h.Rect, 'Rect'],
                  [n, 'number'],
                ]
              ),
              F('begin', [[e, 1]]),
              h.sendWithPromise('TextExtractor.begin', {
                te: this.id,
                page: t.id,
                clip_ptr: e,
                flags: n,
              })
            );
          }),
          (h.TextExtractor.prototype.getWordCount = function () {
            return h.sendWithPromise('TextExtractor.getWordCount', {
              te: this.id,
            });
          }),
          (h.TextExtractor.prototype.setRightToLeftLanguage = function (t) {
            return (
              f(arguments.length, 1, 'setRightToLeftLanguage', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('TextExtractor.setRightToLeftLanguage', {
                te: this.id,
                rtl: t,
              })
            );
          }),
          (h.TextExtractor.prototype.getRightToLeftLanguage = function () {
            return h.sendWithPromise('TextExtractor.getRightToLeftLanguage', {
              te: this.id,
            });
          }),
          (h.TextExtractor.prototype.getAsText = function (t) {
            return (
              void 0 === t && (t = !0),
              f(arguments.length, 0, 'getAsText', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('TextExtractor.getAsText', {
                te: this.id,
                dehyphen: t,
              })
            );
          }),
          (h.TextExtractor.prototype.getTextUnderAnnot = function (t) {
            return (
              f(arguments.length, 1, 'getTextUnderAnnot', '(PDFNet.Annot)', [
                [t, 'Object', h.Annot, 'Annot'],
              ]),
              h.sendWithPromise('TextExtractor.getTextUnderAnnot', {
                te: this.id,
                annot: t.id,
              })
            );
          }),
          (h.TextExtractor.prototype.getAsXML = function (t) {
            return (
              void 0 === t && (t = 0),
              f(arguments.length, 0, 'getAsXML', '(number)', [[t, 'number']]),
              h.sendWithPromise('TextExtractor.getAsXML', {
                te: this.id,
                xml_output_flags: t,
              })
            );
          }),
          (h.TextExtractorStyle.prototype.getFont = function () {
            P('getFont', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorStyle.getFont'),
              h
                .sendWithPromise('TextExtractorStyle.getFont', { tes: this })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = _(h.Obj, t.result)),
                    W(t.tes, e),
                    t.result
                  );
                })
            );
          }),
          (h.TextExtractorStyle.prototype.getFontName = function () {
            P('getFontName', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorStyle.getFontName'),
              h
                .sendWithPromise('TextExtractorStyle.getFontName', {
                  tes: this,
                })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.tes, e), t.result;
                })
            );
          }),
          (h.TextExtractorStyle.prototype.getFontSize = function () {
            P('getFontSize', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorStyle.getFontSize'),
              h
                .sendWithPromise('TextExtractorStyle.getFontSize', {
                  tes: this,
                })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.tes, e), t.result;
                })
            );
          }),
          (h.TextExtractorStyle.prototype.getWeight = function () {
            P('getWeight', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorStyle.getWeight'),
              h
                .sendWithPromise('TextExtractorStyle.getWeight', { tes: this })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.tes, e), t.result;
                })
            );
          }),
          (h.TextExtractorStyle.prototype.isItalic = function () {
            P('isItalic', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorStyle.isItalic'),
              h
                .sendWithPromise('TextExtractorStyle.isItalic', { tes: this })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.tes, e), t.result;
                })
            );
          }),
          (h.TextExtractorStyle.prototype.isSerif = function () {
            P('isSerif', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorStyle.isSerif'),
              h
                .sendWithPromise('TextExtractorStyle.isSerif', { tes: this })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.tes, e), t.result;
                })
            );
          }),
          (h.TextExtractorStyle.prototype.compare = function (t) {
            return (
              f(arguments.length, 1, 'compare', '(PDFNet.TextExtractorStyle)', [
                [t, 'Structure', h.TextExtractorStyle, 'TextExtractorStyle'],
              ]),
              P('compare', this.yieldFunction),
              F('compare', [[t, 0]]),
              h.sendWithPromise('TextExtractorStyle.compare', {
                tes: this,
                s: t,
              })
            );
          }),
          (h.TextExtractorStyle.create = function () {
            return h
              .sendWithPromise('textExtractorStyleCreate', {})
              .then(function (t) {
                return new h.TextExtractorStyle(t);
              });
          }),
          (h.TextExtractorStyle.prototype.copy = function () {
            P('copy', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorStyle.copy'),
              h
                .sendWithPromise('TextExtractorStyle.copy', { s: this })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = new h.TextExtractorStyle(t.result)),
                    W(t.s, e),
                    t.result
                  );
                })
            );
          }),
          (h.TextExtractorWord.prototype.getNumGlyphs = function () {
            P('getNumGlyphs', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorWord.getNumGlyphs'),
              h
                .sendWithPromise('TextExtractorWord.getNumGlyphs', {
                  tew: this,
                })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.tew, e), t.result;
                })
            );
          }),
          (h.TextExtractorWord.prototype.getCharStyle = function (t) {
            f(arguments.length, 1, 'getCharStyle', '(number)', [[t, 'number']]),
              P('getCharStyle', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorWord.getCharStyle'),
              h
                .sendWithPromise('TextExtractorWord.getCharStyle', {
                  tew: this,
                  char_idx: t,
                })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = new h.TextExtractorStyle(t.result)),
                    W(t.tew, e),
                    t.result
                  );
                })
            );
          }),
          (h.TextExtractorWord.prototype.getStyle = function () {
            P('getStyle', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorWord.getStyle'),
              h
                .sendWithPromise('TextExtractorWord.getStyle', { tew: this })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = new h.TextExtractorStyle(t.result)),
                    W(t.tew, e),
                    t.result
                  );
                })
            );
          }),
          (h.TextExtractorWord.prototype.getStringLen = function () {
            P('getStringLen', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorWord.getStringLen'),
              h
                .sendWithPromise('TextExtractorWord.getStringLen', {
                  tew: this,
                })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.tew, e), t.result;
                })
            );
          }),
          (h.TextExtractorWord.prototype.getNextWord = function () {
            P('getNextWord', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorWord.getNextWord'),
              h
                .sendWithPromise('TextExtractorWord.getNextWord', { tew: this })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = new h.TextExtractorWord(t.result)),
                    W(t.tew, e),
                    t.result
                  );
                })
            );
          }),
          (h.TextExtractorWord.prototype.getCurrentNum = function () {
            P('getCurrentNum', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorWord.getCurrentNum'),
              h
                .sendWithPromise('TextExtractorWord.getCurrentNum', {
                  tew: this,
                })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.tew, e), t.result;
                })
            );
          }),
          (h.TextExtractorWord.prototype.compare = function (t) {
            return (
              f(arguments.length, 1, 'compare', '(PDFNet.TextExtractorWord)', [
                [t, 'Structure', h.TextExtractorWord, 'TextExtractorWord'],
              ]),
              P('compare', this.yieldFunction),
              F('compare', [[t, 0]]),
              h.sendWithPromise('TextExtractorWord.compare', {
                tew: this,
                word: t,
              })
            );
          }),
          (h.TextExtractorWord.create = function () {
            return h
              .sendWithPromise('textExtractorWordCreate', {})
              .then(function (t) {
                return new h.TextExtractorWord(t);
              });
          }),
          (h.TextExtractorWord.prototype.isValid = function () {
            P('isValid', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorWord.isValid'),
              h
                .sendWithPromise('TextExtractorWord.isValid', { tew: this })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.tew, e), t.result;
                })
            );
          }),
          (h.TextExtractorLine.prototype.getNumWords = function () {
            P('getNumWords', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorLine.getNumWords'),
              h
                .sendWithPromise('TextExtractorLine.getNumWords', {
                  line: this,
                })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.line, e), t.result;
                })
            );
          }),
          (h.TextExtractorLine.prototype.isSimpleLine = function () {
            P('isSimpleLine', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorLine.isSimpleLine'),
              h
                .sendWithPromise('TextExtractorLine.isSimpleLine', {
                  line: this,
                })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.line, e), t.result;
                })
            );
          }),
          (h.TextExtractorLine.prototype.getFirstWord = function () {
            P('getFirstWord', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorLine.getFirstWord'),
              h
                .sendWithPromise('TextExtractorLine.getFirstWord', {
                  line: this,
                })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = new h.TextExtractorWord(t.result)),
                    W(t.line, e),
                    t.result
                  );
                })
            );
          }),
          (h.TextExtractorLine.prototype.getWord = function (t) {
            f(arguments.length, 1, 'getWord', '(number)', [[t, 'number']]),
              P('getWord', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorLine.getWord'),
              h
                .sendWithPromise('TextExtractorLine.getWord', {
                  line: this,
                  word_idx: t,
                })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = new h.TextExtractorWord(t.result)),
                    W(t.line, e),
                    t.result
                  );
                })
            );
          }),
          (h.TextExtractorLine.prototype.getNextLine = function () {
            P('getNextLine', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorLine.getNextLine'),
              h
                .sendWithPromise('TextExtractorLine.getNextLine', {
                  line: this,
                })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = new h.TextExtractorLine(t.result)),
                    W(t.line, e),
                    t.result
                  );
                })
            );
          }),
          (h.TextExtractorLine.prototype.getCurrentNum = function () {
            P('getCurrentNum', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorLine.getCurrentNum'),
              h
                .sendWithPromise('TextExtractorLine.getCurrentNum', {
                  line: this,
                })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.line, e), t.result;
                })
            );
          }),
          (h.TextExtractorLine.prototype.getStyle = function () {
            P('getStyle', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorLine.getStyle'),
              h
                .sendWithPromise('TextExtractorLine.getStyle', { line: this })
                .then(function (t) {
                  return (
                    (e.yieldFunction = void 0),
                    (t.result = new h.TextExtractorStyle(t.result)),
                    W(t.line, e),
                    t.result
                  );
                })
            );
          }),
          (h.TextExtractorLine.prototype.getParagraphID = function () {
            P('getParagraphID', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorLine.getParagraphID'),
              h
                .sendWithPromise('TextExtractorLine.getParagraphID', {
                  line: this,
                })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.line, e), t.result;
                })
            );
          }),
          (h.TextExtractorLine.prototype.getFlowID = function () {
            P('getFlowID', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorLine.getFlowID'),
              h
                .sendWithPromise('TextExtractorLine.getFlowID', { line: this })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.line, e), t.result;
                })
            );
          }),
          (h.TextExtractorLine.prototype.endsWithHyphen = function () {
            P('endsWithHyphen', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorLine.endsWithHyphen'),
              h
                .sendWithPromise('TextExtractorLine.endsWithHyphen', {
                  line: this,
                })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.line, e), t.result;
                })
            );
          }),
          (h.TextExtractorLine.prototype.compare = function (t) {
            return (
              f(arguments.length, 1, 'compare', '(PDFNet.TextExtractorLine)', [
                [t, 'Structure', h.TextExtractorLine, 'TextExtractorLine'],
              ]),
              P('compare', this.yieldFunction),
              F('compare', [[t, 0]]),
              h.sendWithPromise('TextExtractorLine.compare', {
                line: this,
                line2: t,
              })
            );
          }),
          (h.TextExtractorLine.create = function () {
            return h
              .sendWithPromise('textExtractorLineCreate', {})
              .then(function (t) {
                return new h.TextExtractorLine(t);
              });
          }),
          (h.TextExtractorLine.prototype.isValid = function () {
            P('isValid', this.yieldFunction);
            var e = this;
            return (
              (this.yieldFunction = 'TextExtractorLine.isValid'),
              h
                .sendWithPromise('TextExtractorLine.isValid', { line: this })
                .then(function (t) {
                  return (e.yieldFunction = void 0), W(t.line, e), t.result;
                })
            );
          }),
          (h.TextExtractor.prototype.getNumLines = function () {
            return h.sendWithPromise('TextExtractor.getNumLines', {
              te: this.id,
            });
          }),
          (h.TextExtractor.prototype.getFirstLine = function () {
            return h
              .sendWithPromise('TextExtractor.getFirstLine', { te: this.id })
              .then(function (t) {
                return new h.TextExtractorLine(t);
              });
          }),
          (h.TextExtractor.prototype.getQuads = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'getQuads',
                '(PDFNet.Matrix2D, number, number)',
                [
                  [t, 'Structure', h.Matrix2D, 'Matrix2D'],
                  [e, 'number'],
                  [n, 'number'],
                ]
              ),
              F('getQuads', [[t, 0]]),
              h.sendWithPromise('TextExtractor.getQuads', {
                te: this.id,
                mtx: t,
                quads: e,
                quads_size: n,
              })
            );
          }),
          (h.TextSearch.create = function () {
            return h.sendWithPromise('textSearchCreate', {}).then(function (t) {
              return D(h.TextSearch, t);
            });
          }),
          (h.TextSearch.prototype.begin = function (t, e, n, i, r) {
            return (
              void 0 === i && (i = -1),
              void 0 === r && (r = -1),
              f(
                arguments.length,
                3,
                'begin',
                '(PDFNet.PDFDoc, string, number, number, number)',
                [
                  [t, 'PDFDoc'],
                  [e, 'string'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                ]
              ),
              h.sendWithPromise('TextSearch.begin', {
                ts: this.id,
                doc: t.id,
                pattern: e,
                mode: n,
                start_page: i,
                end_page: r,
              })
            );
          }),
          (h.TextSearch.prototype.setPattern = function (t) {
            return (
              f(arguments.length, 1, 'setPattern', '(string)', [[t, 'string']]),
              h.sendWithPromise('TextSearch.setPattern', {
                ts: this.id,
                pattern: t,
              })
            );
          }),
          (h.TextSearch.prototype.getMode = function () {
            return h.sendWithPromise('TextSearch.getMode', { ts: this.id });
          }),
          (h.TextSearch.prototype.setMode = function (t) {
            return (
              f(arguments.length, 1, 'setMode', '(number)', [[t, 'number']]),
              h.sendWithPromise('TextSearch.setMode', { ts: this.id, mode: t })
            );
          }),
          (h.TextSearch.prototype.setRightToLeftLanguage = function (t) {
            return (
              f(arguments.length, 1, 'setRightToLeftLanguage', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('TextSearch.setRightToLeftLanguage', {
                ts: this.id,
                flag: t,
              })
            );
          }),
          (h.TextSearch.prototype.getCurrentPage = function () {
            return h.sendWithPromise('TextSearch.getCurrentPage', {
              ts: this.id,
            });
          }),
          (h.TextSearch.prototype.setOCGContext = function (t) {
            return (
              f(arguments.length, 1, 'setOCGContext', '(PDFNet.OCGContext)', [
                [t, 'Object', h.OCGContext, 'OCGContext'],
              ]),
              h.sendWithPromise('TextSearch.setOCGContext', {
                te: this.id,
                ctx: t.id,
              })
            );
          }),
          (h.TextSearch.prototype.setAmbientLettersBefore = function (t) {
            return (
              f(arguments.length, 1, 'setAmbientLettersBefore', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('TextSearch.setAmbientLettersBefore', {
                self: this.id,
                ambient_letters_before: t,
              })
            );
          }),
          (h.TextSearch.prototype.setAmbientLettersAfter = function (t) {
            return (
              f(arguments.length, 1, 'setAmbientLettersAfter', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('TextSearch.setAmbientLettersAfter', {
                self: this.id,
                ambient_letters_after: t,
              })
            );
          }),
          (h.TextSearch.prototype.setAmbientWordsBefore = function (t) {
            return (
              f(arguments.length, 1, 'setAmbientWordsBefore', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('TextSearch.setAmbientWordsBefore', {
                self: this.id,
                ambient_words_before: t,
              })
            );
          }),
          (h.TextSearch.prototype.setAmbientWordsAfter = function (t) {
            return (
              f(arguments.length, 1, 'setAmbientWordsAfter', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('TextSearch.setAmbientWordsAfter', {
                self: this.id,
                ambient_words_after: t,
              })
            );
          }),
          (h.NameTree.create = function (t, e) {
            return (
              f(arguments.length, 2, 'create', '(PDFNet.SDFDoc, string)', [
                [t, 'SDFDoc'],
                [e, 'string'],
              ]),
              h
                .sendWithPromise('nameTreeCreate', { doc: t.id, name: e })
                .then(function (t) {
                  return _(h.NameTree, t);
                })
            );
          }),
          (h.NameTree.find = function (t, e) {
            return (
              f(arguments.length, 2, 'find', '(PDFNet.SDFDoc, string)', [
                [t, 'SDFDoc'],
                [e, 'string'],
              ]),
              h
                .sendWithPromise('nameTreeFind', { doc: t.id, name: e })
                .then(function (t) {
                  return _(h.NameTree, t);
                })
            );
          }),
          (h.NameTree.createFromObj = function (t) {
            return (
              f(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('nameTreeCreateFromObj', { name_tree: t.id })
                .then(function (t) {
                  return _(h.NameTree, t);
                })
            );
          }),
          (h.NameTree.prototype.copy = function () {
            return h
              .sendWithPromise('NameTree.copy', { d: this.id })
              .then(function (t) {
                return _(h.NameTree, t);
              });
          }),
          (h.NameTree.prototype.isValid = function () {
            return h.sendWithPromise('NameTree.isValid', { tree: this.id });
          }),
          (h.NameTree.prototype.getIterator = function (t) {
            return (
              f(arguments.length, 1, 'getIterator', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('NameTree.getIterator', {
                  tree: this.id,
                  key: t,
                })
                .then(function (t) {
                  return D(h.DictIterator, t);
                })
            );
          }),
          (h.NameTree.prototype.getValue = function (t) {
            return (
              f(arguments.length, 1, 'getValue', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('NameTree.getValue', { tree: this.id, key: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.NameTree.prototype.getIteratorBegin = function () {
            return h
              .sendWithPromise('NameTree.getIteratorBegin', { tree: this.id })
              .then(function (t) {
                return D(h.DictIterator, t);
              });
          }),
          (h.NameTree.prototype.put = function (t, e) {
            return (
              f(arguments.length, 2, 'put', '(string, PDFNet.Obj)', [
                [t, 'string'],
                [e, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('NameTree.put', {
                tree: this.id,
                key: t,
                value: e.id,
              })
            );
          }),
          (h.NameTree.prototype.eraseKey = function (t) {
            return (
              f(arguments.length, 1, 'eraseKey', '(string)', [[t, 'string']]),
              h.sendWithPromise('NameTree.eraseKey', { tree: this.id, key: t })
            );
          }),
          (h.NameTree.prototype.erase = function (t) {
            return (
              f(arguments.length, 1, 'erase', '(PDFNet.DictIterator)', [
                [t, 'Object', h.DictIterator, 'DictIterator'],
              ]),
              h.sendWithPromise('NameTree.erase', { tree: this.id, pos: t.id })
            );
          }),
          (h.NameTree.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('NameTree.getSDFObj', { tree: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.NumberTree.create = function (t) {
            return (
              f(arguments.length, 1, 'create', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('numberTreeCreate', { number_tree: t.id })
                .then(function (t) {
                  return _(h.NumberTree, t);
                })
            );
          }),
          (h.NumberTree.prototype.copy = function () {
            return h
              .sendWithPromise('NumberTree.copy', { tree: this.id })
              .then(function (t) {
                return _(h.NumberTree, t);
              });
          }),
          (h.NumberTree.prototype.isValid = function () {
            return h.sendWithPromise('NumberTree.isValid', { tree: this.id });
          }),
          (h.NumberTree.prototype.getIterator = function (t) {
            return (
              f(arguments.length, 1, 'getIterator', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('NumberTree.getIterator', {
                  tree: this.id,
                  key: t,
                })
                .then(function (t) {
                  return D(h.DictIterator, t);
                })
            );
          }),
          (h.NumberTree.prototype.getValue = function (t) {
            return (
              f(arguments.length, 1, 'getValue', '(number)', [[t, 'number']]),
              h
                .sendWithPromise('NumberTree.getValue', {
                  tree: this.id,
                  key: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.NumberTree.prototype.getIteratorBegin = function () {
            return h
              .sendWithPromise('NumberTree.getIteratorBegin', { tree: this.id })
              .then(function (t) {
                return D(h.DictIterator, t);
              });
          }),
          (h.NumberTree.prototype.put = function (t, e) {
            return (
              f(arguments.length, 2, 'put', '(number, PDFNet.Obj)', [
                [t, 'number'],
                [e, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('NumberTree.put', {
                tree: this.id,
                key: t,
                value: e.id,
              })
            );
          }),
          (h.NumberTree.prototype.eraseKey = function (t) {
            return (
              f(arguments.length, 1, 'eraseKey', '(number)', [[t, 'number']]),
              h.sendWithPromise('NumberTree.eraseKey', {
                tree: this.id,
                key: t,
              })
            );
          }),
          (h.NumberTree.prototype.erase = function (t) {
            return (
              f(arguments.length, 1, 'erase', '(PDFNet.DictIterator)', [
                [t, 'Object', h.DictIterator, 'DictIterator'],
              ]),
              h.sendWithPromise('NumberTree.erase', {
                tree: this.id,
                pos: t.id,
              })
            );
          }),
          (h.NumberTree.prototype.getSDFObj = function () {
            return h
              .sendWithPromise('NumberTree.getSDFObj', { tree: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Obj.prototype.getType = function () {
            return h.sendWithPromise('Obj.getType', { o: this.id });
          }),
          (h.Obj.prototype.getDoc = function () {
            return h
              .sendWithPromise('Obj.getDoc', { o: this.id })
              .then(function (t) {
                return _(h.SDFDoc, t);
              });
          }),
          (h.Obj.prototype.write = function (t) {
            return (
              f(arguments.length, 1, 'write', '(PDFNet.FilterWriter)', [
                [t, 'Object', h.FilterWriter, 'FilterWriter'],
              ]),
              h.sendWithPromise('Obj.write', { o: this.id, stream: t.id })
            );
          }),
          (h.Obj.prototype.isEqual = function (t) {
            return (
              f(arguments.length, 1, 'isEqual', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('Obj.isEqual', { o: this.id, to: t.id })
            );
          }),
          (h.Obj.prototype.isBool = function () {
            return h.sendWithPromise('Obj.isBool', { o: this.id });
          }),
          (h.Obj.prototype.getBool = function () {
            return h.sendWithPromise('Obj.getBool', { o: this.id });
          }),
          (h.Obj.prototype.setBool = function (t) {
            return (
              f(arguments.length, 1, 'setBool', '(boolean)', [[t, 'boolean']]),
              h.sendWithPromise('Obj.setBool', { o: this.id, b: t })
            );
          }),
          (h.Obj.prototype.isNumber = function () {
            return h.sendWithPromise('Obj.isNumber', { o: this.id });
          }),
          (h.Obj.prototype.getNumber = function () {
            return h.sendWithPromise('Obj.getNumber', { o: this.id });
          }),
          (h.Obj.prototype.setNumber = function (t) {
            return (
              f(arguments.length, 1, 'setNumber', '(number)', [[t, 'number']]),
              h.sendWithPromise('Obj.setNumber', { o: this.id, n: t })
            );
          }),
          (h.Obj.prototype.isNull = function () {
            return h.sendWithPromise('Obj.isNull', { o: this.id });
          }),
          (h.Obj.prototype.isString = function () {
            return h.sendWithPromise('Obj.isString', { o: this.id });
          }),
          (h.Obj.prototype.getBuffer = function () {
            return h.sendWithPromise('Obj.getBuffer', { o: this.id });
          }),
          (h.Obj.prototype.setString = function (t) {
            return (
              f(arguments.length, 1, 'setString', '(string)', [[t, 'string']]),
              h.sendWithPromise('Obj.setString', { o: this.id, value: t })
            );
          }),
          (h.Obj.prototype.setUString = function (t) {
            return (
              f(arguments.length, 1, 'setUString', '(string)', [[t, 'string']]),
              h.sendWithPromise('Obj.setUString', { o: this.id, value: t })
            );
          }),
          (h.Obj.prototype.isName = function () {
            return h.sendWithPromise('Obj.isName', { o: this.id });
          }),
          (h.Obj.prototype.getName = function () {
            return h.sendWithPromise('Obj.getName', { o: this.id });
          }),
          (h.Obj.prototype.setName = function (t) {
            return (
              f(arguments.length, 1, 'setName', '(string)', [[t, 'string']]),
              h.sendWithPromise('Obj.setName', { o: this.id, name: t })
            );
          }),
          (h.Obj.prototype.isIndirect = function () {
            return h.sendWithPromise('Obj.isIndirect', { o: this.id });
          }),
          (h.Obj.prototype.getObjNum = function () {
            return h.sendWithPromise('Obj.getObjNum', { o: this.id });
          }),
          (h.Obj.prototype.getGenNum = function () {
            return h.sendWithPromise('Obj.getGenNum', { o: this.id });
          }),
          (h.Obj.prototype.getOffset = function () {
            return h.sendWithPromise('Obj.getOffset', { o: this.id });
          }),
          (h.Obj.prototype.isFree = function () {
            return h.sendWithPromise('Obj.isFree', { o: this.id });
          }),
          (h.Obj.prototype.setMark = function (t) {
            return (
              f(arguments.length, 1, 'setMark', '(boolean)', [[t, 'boolean']]),
              h.sendWithPromise('Obj.setMark', { o: this.id, mark: t })
            );
          }),
          (h.Obj.prototype.isMarked = function () {
            return h.sendWithPromise('Obj.isMarked', { o: this.id });
          }),
          (h.Obj.prototype.isLoaded = function () {
            return h.sendWithPromise('Obj.isLoaded', { o: this.id });
          }),
          (h.Obj.prototype.isContainer = function () {
            return h.sendWithPromise('Obj.isContainer', { o: this.id });
          }),
          (h.Obj.prototype.size = function () {
            return h.sendWithPromise('Obj.size', { o: this.id });
          }),
          (h.Obj.prototype.getDictIterator = function () {
            return h
              .sendWithPromise('Obj.getDictIterator', { o: this.id })
              .then(function (t) {
                return D(h.DictIterator, t);
              });
          }),
          (h.Obj.prototype.isDict = function () {
            return h.sendWithPromise('Obj.isDict', { o: this.id });
          }),
          (h.Obj.prototype.find = function (t) {
            return (
              f(arguments.length, 1, 'find', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('Obj.find', { o: this.id, key: t })
                .then(function (t) {
                  return D(h.DictIterator, t);
                })
            );
          }),
          (h.Obj.prototype.findObj = function (t) {
            return (
              f(arguments.length, 1, 'findObj', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('Obj.findObj', { o: this.id, key: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.get = function (t) {
            return (
              f(arguments.length, 1, 'get', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('Obj.get', { o: this.id, key: t })
                .then(function (t) {
                  return D(h.DictIterator, t);
                })
            );
          }),
          (h.Obj.prototype.putName = function (t, e) {
            return (
              f(arguments.length, 2, 'putName', '(string, string)', [
                [t, 'string'],
                [e, 'string'],
              ]),
              h
                .sendWithPromise('Obj.putName', { o: this.id, key: t, name: e })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.putArray = function (t) {
            return (
              f(arguments.length, 1, 'putArray', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('Obj.putArray', { o: this.id, key: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.putBool = function (t, e) {
            return (
              f(arguments.length, 2, 'putBool', '(string, boolean)', [
                [t, 'string'],
                [e, 'boolean'],
              ]),
              h
                .sendWithPromise('Obj.putBool', {
                  o: this.id,
                  key: t,
                  value: e,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.putDict = function (t) {
            return (
              f(arguments.length, 1, 'putDict', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('Obj.putDict', { o: this.id, key: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.putNumber = function (t, e) {
            return (
              f(arguments.length, 2, 'putNumber', '(string, number)', [
                [t, 'string'],
                [e, 'number'],
              ]),
              h
                .sendWithPromise('Obj.putNumber', {
                  o: this.id,
                  key: t,
                  value: e,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.putString = function (t, e) {
            return (
              f(arguments.length, 2, 'putString', '(string, string)', [
                [t, 'string'],
                [e, 'string'],
              ]),
              h
                .sendWithPromise('Obj.putString', {
                  o: this.id,
                  key: t,
                  value: e,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.putText = function (t, e) {
            return (
              f(arguments.length, 2, 'putText', '(string, string)', [
                [t, 'string'],
                [e, 'string'],
              ]),
              h
                .sendWithPromise('Obj.putText', { o: this.id, key: t, t: e })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.putNull = function (t) {
            return (
              f(arguments.length, 1, 'putNull', '(string)', [[t, 'string']]),
              h.sendWithPromise('Obj.putNull', { o: this.id, key: t })
            );
          }),
          (h.Obj.prototype.put = function (t, e) {
            return (
              f(arguments.length, 2, 'put', '(string, PDFNet.Obj)', [
                [t, 'string'],
                [e, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('Obj.put', {
                  o: this.id,
                  key: t,
                  input_obj: e.id,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.putRect = function (t, e, n, i, r) {
            return (
              f(
                arguments.length,
                5,
                'putRect',
                '(string, number, number, number, number)',
                [
                  [t, 'string'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                ]
              ),
              h
                .sendWithPromise('Obj.putRect', {
                  o: this.id,
                  key: t,
                  x1: e,
                  y1: n,
                  x2: i,
                  y2: r,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.putMatrix = function (t, e) {
            return (
              f(arguments.length, 2, 'putMatrix', '(string, PDFNet.Matrix2D)', [
                [t, 'string'],
                [e, 'Structure', h.Matrix2D, 'Matrix2D'],
              ]),
              F('putMatrix', [[e, 1]]),
              h
                .sendWithPromise('Obj.putMatrix', {
                  o: this.id,
                  key: t,
                  mtx: e,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.eraseFromKey = function (t) {
            return (
              f(arguments.length, 1, 'eraseFromKey', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('Obj.eraseFromKey', { o: this.id, key: t })
            );
          }),
          (h.Obj.prototype.erase = function (t) {
            return (
              f(arguments.length, 1, 'erase', '(PDFNet.DictIterator)', [
                [t, 'Object', h.DictIterator, 'DictIterator'],
              ]),
              h.sendWithPromise('Obj.erase', { o: this.id, pos: t.id })
            );
          }),
          (h.Obj.prototype.rename = function (t, e) {
            return (
              f(arguments.length, 2, 'rename', '(string, string)', [
                [t, 'string'],
                [e, 'string'],
              ]),
              h.sendWithPromise('Obj.rename', {
                o: this.id,
                old_key: t,
                new_key: e,
              })
            );
          }),
          (h.Obj.prototype.isArray = function () {
            return h.sendWithPromise('Obj.isArray', { o: this.id });
          }),
          (h.Obj.prototype.getAt = function (t) {
            return (
              f(arguments.length, 1, 'getAt', '(number)', [[t, 'number']]),
              h
                .sendWithPromise('Obj.getAt', { o: this.id, index: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.insertName = function (t, e) {
            return (
              f(arguments.length, 2, 'insertName', '(number, string)', [
                [t, 'number'],
                [e, 'string'],
              ]),
              h
                .sendWithPromise('Obj.insertName', {
                  o: this.id,
                  pos: t,
                  name: e,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.insertArray = function (t) {
            return (
              f(arguments.length, 1, 'insertArray', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('Obj.insertArray', { o: this.id, pos: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.insertBool = function (t, e) {
            return (
              f(arguments.length, 2, 'insertBool', '(number, boolean)', [
                [t, 'number'],
                [e, 'boolean'],
              ]),
              h
                .sendWithPromise('Obj.insertBool', {
                  o: this.id,
                  pos: t,
                  value: e,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.insertDict = function (t) {
            return (
              f(arguments.length, 1, 'insertDict', '(number)', [[t, 'number']]),
              h
                .sendWithPromise('Obj.insertDict', { o: this.id, pos: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.insertNumber = function (t, e) {
            return (
              f(arguments.length, 2, 'insertNumber', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h
                .sendWithPromise('Obj.insertNumber', {
                  o: this.id,
                  pos: t,
                  value: e,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.insertString = function (t, e) {
            return (
              f(arguments.length, 2, 'insertString', '(number, string)', [
                [t, 'number'],
                [e, 'string'],
              ]),
              h
                .sendWithPromise('Obj.insertString', {
                  o: this.id,
                  pos: t,
                  value: e,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.insertText = function (t, e) {
            return (
              f(arguments.length, 2, 'insertText', '(number, string)', [
                [t, 'number'],
                [e, 'string'],
              ]),
              h
                .sendWithPromise('Obj.insertText', { o: this.id, pos: t, t: e })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.insertNull = function (t) {
            return (
              f(arguments.length, 1, 'insertNull', '(number)', [[t, 'number']]),
              h
                .sendWithPromise('Obj.insertNull', { o: this.id, pos: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.insert = function (t, e) {
            return (
              f(arguments.length, 2, 'insert', '(number, PDFNet.Obj)', [
                [t, 'number'],
                [e, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('Obj.insert', {
                  o: this.id,
                  pos: t,
                  input_obj: e.id,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.insertRect = function (t, e, n, i, r) {
            return (
              f(
                arguments.length,
                5,
                'insertRect',
                '(number, number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                ]
              ),
              h
                .sendWithPromise('Obj.insertRect', {
                  o: this.id,
                  pos: t,
                  x1: e,
                  y1: n,
                  x2: i,
                  y2: r,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.insertMatrix = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'insertMatrix',
                '(number, PDFNet.Matrix2D)',
                [
                  [t, 'number'],
                  [e, 'Structure', h.Matrix2D, 'Matrix2D'],
                ]
              ),
              F('insertMatrix', [[e, 1]]),
              h
                .sendWithPromise('Obj.insertMatrix', {
                  o: this.id,
                  pos: t,
                  mtx: e,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.pushBackName = function (t) {
            return (
              f(arguments.length, 1, 'pushBackName', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('Obj.pushBackName', { o: this.id, name: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.pushBackArray = function () {
            return h
              .sendWithPromise('Obj.pushBackArray', { o: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Obj.prototype.pushBackBool = function (t) {
            return (
              f(arguments.length, 1, 'pushBackBool', '(boolean)', [
                [t, 'boolean'],
              ]),
              h
                .sendWithPromise('Obj.pushBackBool', { o: this.id, value: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.pushBackDict = function () {
            return h
              .sendWithPromise('Obj.pushBackDict', { o: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Obj.prototype.pushBackNumber = function (t) {
            return (
              f(arguments.length, 1, 'pushBackNumber', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('Obj.pushBackNumber', { o: this.id, value: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.pushBackString = function (t) {
            return (
              f(arguments.length, 1, 'pushBackString', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('Obj.pushBackString', { o: this.id, value: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.pushBackText = function (t) {
            return (
              f(arguments.length, 1, 'pushBackText', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('Obj.pushBackText', { o: this.id, t: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.pushBackNull = function () {
            return h
              .sendWithPromise('Obj.pushBackNull', { o: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.Obj.prototype.pushBack = function (t) {
            return (
              f(arguments.length, 1, 'pushBack', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h
                .sendWithPromise('Obj.pushBack', {
                  o: this.id,
                  input_obj: t.id,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.pushBackRect = function (t, e, n, i) {
            return (
              f(
                arguments.length,
                4,
                'pushBackRect',
                '(number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                ]
              ),
              h
                .sendWithPromise('Obj.pushBackRect', {
                  o: this.id,
                  x1: t,
                  y1: e,
                  x2: n,
                  y2: i,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.pushBackMatrix = function (t) {
            return (
              f(arguments.length, 1, 'pushBackMatrix', '(PDFNet.Matrix2D)', [
                [t, 'Structure', h.Matrix2D, 'Matrix2D'],
              ]),
              F('pushBackMatrix', [[t, 0]]),
              h
                .sendWithPromise('Obj.pushBackMatrix', { o: this.id, mtx: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.Obj.prototype.eraseAt = function (t) {
            return (
              f(arguments.length, 1, 'eraseAt', '(number)', [[t, 'number']]),
              h.sendWithPromise('Obj.eraseAt', { o: this.id, pos: t })
            );
          }),
          (h.Obj.prototype.isStream = function () {
            return h.sendWithPromise('Obj.isStream', { o: this.id });
          }),
          (h.Obj.prototype.getRawStreamLength = function () {
            return h.sendWithPromise('Obj.getRawStreamLength', { o: this.id });
          }),
          (h.Obj.prototype.setStreamData = function (t) {
            f(
              arguments.length,
              1,
              'setStreamData',
              '(ArrayBuffer|TypedArray)',
              [[t, 'ArrayBuffer']]
            );
            var e = b(t, !1);
            return h.sendWithPromise('Obj.setStreamData', {
              obj: this.id,
              data_buf: e,
            });
          }),
          (h.Obj.prototype.setStreamDataWithFilter = function (t, e) {
            f(
              arguments.length,
              2,
              'setStreamDataWithFilter',
              '(ArrayBuffer|TypedArray, PDFNet.Filter)',
              [
                [t, 'ArrayBuffer'],
                [e, 'Object', h.Filter, 'Filter'],
              ]
            );
            var n = b(t, !1);
            return (
              0 != e.id && O(e.id),
              h.sendWithPromise('Obj.setStreamDataWithFilter', {
                obj: this.id,
                data_buf: n,
                no_own_filter_chain: e.id,
              })
            );
          }),
          (h.Obj.prototype.getRawStream = function (t) {
            return (
              f(arguments.length, 1, 'getRawStream', '(boolean)', [
                [t, 'boolean'],
              ]),
              h
                .sendWithPromise('Obj.getRawStream', { o: this.id, decrypt: t })
                .then(function (t) {
                  return _(h.Filter, t);
                })
            );
          }),
          (h.Obj.prototype.getDecodedStream = function () {
            return h
              .sendWithPromise('Obj.getDecodedStream', { o: this.id })
              .then(function (t) {
                return _(h.Filter, t);
              });
          }),
          (h.ObjSet.create = function () {
            return h.sendWithPromise('objSetCreate', {}).then(function (t) {
              return D(h.ObjSet, t);
            });
          }),
          (h.ObjSet.prototype.createName = function (t) {
            return (
              f(arguments.length, 1, 'createName', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('ObjSet.createName', { set: this.id, name: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.ObjSet.prototype.createArray = function () {
            return h
              .sendWithPromise('ObjSet.createArray', { set: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.ObjSet.prototype.createBool = function (t) {
            return (
              f(arguments.length, 1, 'createBool', '(boolean)', [
                [t, 'boolean'],
              ]),
              h
                .sendWithPromise('ObjSet.createBool', {
                  set: this.id,
                  value: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.ObjSet.prototype.createDict = function () {
            return h
              .sendWithPromise('ObjSet.createDict', { set: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.ObjSet.prototype.createNull = function () {
            return h
              .sendWithPromise('ObjSet.createNull', { set: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.ObjSet.prototype.createNumber = function (t) {
            return (
              f(arguments.length, 1, 'createNumber', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('ObjSet.createNumber', {
                  set: this.id,
                  value: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.ObjSet.prototype.createString = function (t) {
            return (
              f(arguments.length, 1, 'createString', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('ObjSet.createString', {
                  set: this.id,
                  value: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.ObjSet.prototype.createFromJson = function (t) {
            return (
              f(arguments.length, 1, 'createFromJson', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('ObjSet.createFromJson', {
                  set: this.id,
                  json: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.SDFDoc.prototype.createShallowCopy = function () {
            return h
              .sendWithPromise('SDFDoc.createShallowCopy', { source: this.id })
              .then(function (t) {
                return _(h.SDFDoc, t);
              });
          }),
          (h.SDFDoc.prototype.releaseFileHandles = function () {
            return h.sendWithPromise('SDFDoc.releaseFileHandles', {
              doc: this.id,
            });
          }),
          (h.SDFDoc.prototype.isEncrypted = function () {
            return h.sendWithPromise('SDFDoc.isEncrypted', { doc: this.id });
          }),
          (h.SDFDoc.prototype.initStdSecurityHandlerUString = function (t) {
            return (
              f(
                arguments.length,
                1,
                'initStdSecurityHandlerUString',
                '(string)',
                [[t, 'string']]
              ),
              h.sendWithPromise('SDFDoc.initStdSecurityHandlerUString', {
                doc: this.id,
                password: t,
              })
            );
          }),
          (h.SDFDoc.prototype.isModified = function () {
            return h.sendWithPromise('SDFDoc.isModified', { doc: this.id });
          }),
          (h.SDFDoc.prototype.hasRepairedXRef = function () {
            return h.sendWithPromise('SDFDoc.hasRepairedXRef', {
              doc: this.id,
            });
          }),
          (h.SDFDoc.prototype.isFullSaveRequired = function () {
            return h.sendWithPromise('SDFDoc.isFullSaveRequired', {
              doc: this.id,
            });
          }),
          (h.SDFDoc.prototype.getTrailer = function () {
            return h
              .sendWithPromise('SDFDoc.getTrailer', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.SDFDoc.prototype.getObj = function (t) {
            return (
              f(arguments.length, 1, 'getObj', '(number)', [[t, 'number']]),
              h
                .sendWithPromise('SDFDoc.getObj', { doc: this.id, obj_num: t })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.SDFDoc.prototype.importObj = function (t, e) {
            return (
              f(arguments.length, 2, 'importObj', '(PDFNet.Obj, boolean)', [
                [t, 'Object', h.Obj, 'Obj'],
                [e, 'boolean'],
              ]),
              h
                .sendWithPromise('SDFDoc.importObj', {
                  doc: this.id,
                  obj: t.id,
                  deep_copy: e,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.SDFDoc.prototype.importObjsWithExcludeList = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'importObjsWithExcludeList',
                '(Array<Core.PDFNet.Obj>, Array<Core.PDFNet.Obj>)',
                [
                  [t, 'Array'],
                  [e, 'Array'],
                ]
              ),
              (t = Array.from(t, function (t) {
                return t.id;
              })),
              (e = Array.from(e, function (t) {
                return t.id;
              })),
              h
                .sendWithPromise('SDFDoc.importObjsWithExcludeList', {
                  doc: this.id,
                  obj_list: t,
                  exclude_list: e,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.SDFDoc.prototype.xRefSize = function () {
            return h.sendWithPromise('SDFDoc.xRefSize', { doc: this.id });
          }),
          (h.SDFDoc.prototype.clearMarks = function () {
            return h.sendWithPromise('SDFDoc.clearMarks', { doc: this.id });
          }),
          (h.SDFDoc.prototype.saveMemory = function (t, e) {
            return (
              f(arguments.length, 2, 'saveMemory', '(number, string)', [
                [t, 'number'],
                [e, 'string'],
              ]),
              h
                .sendWithPromise('SDFDoc.saveMemory', {
                  doc: this.id,
                  flags: t,
                  header: e,
                })
                .then(function (t) {
                  return new Uint8Array(t);
                })
            );
          }),
          (h.SDFDoc.prototype.saveStream = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'saveStream',
                '(PDFNet.Filter, number, string)',
                [
                  [t, 'Object', h.Filter, 'Filter'],
                  [e, 'number'],
                  [n, 'string'],
                ]
              ),
              h.sendWithPromise('SDFDoc.saveStream', {
                doc: this.id,
                stream: t.id,
                flags: e,
                header: n,
              })
            );
          }),
          (h.SDFDoc.prototype.getHeader = function () {
            return h.sendWithPromise('SDFDoc.getHeader', { doc: this.id });
          }),
          (h.SDFDoc.prototype.getSecurityHandler = function () {
            return h
              .sendWithPromise('SDFDoc.getSecurityHandler', { doc: this.id })
              .then(function (t) {
                return _(h.SecurityHandler, t);
              });
          }),
          (h.SDFDoc.prototype.setSecurityHandler = function (t) {
            return (
              f(
                arguments.length,
                1,
                'setSecurityHandler',
                '(PDFNet.SecurityHandler)',
                [[t, 'Object', h.SecurityHandler, 'SecurityHandler']]
              ),
              0 != t.id && O(t.id),
              h.sendWithPromise('SDFDoc.setSecurityHandler', {
                doc: this.id,
                no_own_handler: t.id,
              })
            );
          }),
          (h.SDFDoc.prototype.removeSecurity = function () {
            return h.sendWithPromise('SDFDoc.removeSecurity', { doc: this.id });
          }),
          (h.SDFDoc.prototype.swap = function (t, e) {
            return (
              f(arguments.length, 2, 'swap', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h.sendWithPromise('SDFDoc.swap', {
                doc: this.id,
                obj_num1: t,
                obj_num2: e,
              })
            );
          }),
          (h.SDFDoc.prototype.isLinearized = function () {
            return h.sendWithPromise('SDFDoc.isLinearized', { doc: this.id });
          }),
          (h.SDFDoc.prototype.getLinearizationDict = function () {
            return h
              .sendWithPromise('SDFDoc.getLinearizationDict', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.SDFDoc.prototype.getHintStream = function () {
            return h
              .sendWithPromise('SDFDoc.getHintStream', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.SDFDoc.prototype.enableDiskCaching = function (t) {
            return (
              f(arguments.length, 1, 'enableDiskCaching', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('SDFDoc.enableDiskCaching', {
                doc: this.id,
                use_cache_flag: t,
              })
            );
          }),
          (h.SDFDoc.prototype.lock = function () {
            var t = this;
            return h
              .sendWithPromise('SDFDoc.lock', { doc: this.id })
              .then(function () {
                o.push({ name: 'SDFDoc', id: t.id, unlocktype: 'unlock' });
              });
          }),
          (h.SDFDoc.prototype.unlock = function () {
            var t = this;
            return h
              .sendWithPromise('SDFDoc.unlock', { doc: this.id })
              .then(function () {
                S(t);
              });
          }),
          (h.SDFDoc.prototype.lockRead = function () {
            var t = this;
            return h
              .sendWithPromise('SDFDoc.lockRead', { doc: this.id })
              .then(function () {
                o.push({ name: 'SDFDoc', id: t.id, unlocktype: 'unlockRead' });
              });
          }),
          (h.SDFDoc.prototype.unlockRead = function () {
            var t = this;
            return h
              .sendWithPromise('SDFDoc.unlockRead', { doc: this.id })
              .then(function () {
                S(t);
              });
          }),
          (h.SDFDoc.prototype.tryLock = function () {
            var e = this;
            return h
              .sendWithPromise('SDFDoc.tryLock', { doc: this.id })
              .then(function (t) {
                t && o.push({ name: 'SDFDoc', id: e.id, unlocktype: 'unlock' });
              });
          }),
          (h.SDFDoc.prototype.tryLockRead = function () {
            var e = this;
            return h
              .sendWithPromise('SDFDoc.tryLockRead', { doc: this.id })
              .then(function (t) {
                t &&
                  o.push({
                    name: 'SDFDoc',
                    id: e.id,
                    unlocktype: 'unlockRead',
                  });
              });
          }),
          (h.SDFDoc.prototype.getFileName = function () {
            return h.sendWithPromise('SDFDoc.getFileName', { doc: this.id });
          }),
          (h.SDFDoc.prototype.createIndirectName = function (t) {
            return (
              f(arguments.length, 1, 'createIndirectName', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('SDFDoc.createIndirectName', {
                  doc: this.id,
                  name: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.SDFDoc.prototype.createIndirectArray = function () {
            return h
              .sendWithPromise('SDFDoc.createIndirectArray', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.SDFDoc.prototype.createIndirectBool = function (t) {
            return (
              f(arguments.length, 1, 'createIndirectBool', '(boolean)', [
                [t, 'boolean'],
              ]),
              h
                .sendWithPromise('SDFDoc.createIndirectBool', {
                  doc: this.id,
                  value: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.SDFDoc.prototype.createIndirectDict = function () {
            return h
              .sendWithPromise('SDFDoc.createIndirectDict', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.SDFDoc.prototype.createIndirectNull = function () {
            return h
              .sendWithPromise('SDFDoc.createIndirectNull', { doc: this.id })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.SDFDoc.prototype.createIndirectNumber = function (t) {
            return (
              f(arguments.length, 1, 'createIndirectNumber', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('SDFDoc.createIndirectNumber', {
                  doc: this.id,
                  value: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.SDFDoc.prototype.createIndirectString = function (t) {
            f(
              arguments.length,
              1,
              'createIndirectString',
              '(ArrayBuffer|TypedArray)',
              [[t, 'ArrayBuffer']]
            );
            var e = b(t, !1);
            return h
              .sendWithPromise('SDFDoc.createIndirectString', {
                doc: this.id,
                buf_value: e,
              })
              .then(function (t) {
                return _(h.Obj, t);
              });
          }),
          (h.SDFDoc.prototype.createIndirectStringFromUString = function (t) {
            return (
              f(
                arguments.length,
                1,
                'createIndirectStringFromUString',
                '(string)',
                [[t, 'string']]
              ),
              h
                .sendWithPromise('SDFDoc.createIndirectStringFromUString', {
                  doc: this.id,
                  str: t,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.SDFDoc.prototype.createIndirectStreamFromFilter = function (t, e) {
            return (
              void 0 === e && (e = new h.Filter('0')),
              f(
                arguments.length,
                1,
                'createIndirectStreamFromFilter',
                '(PDFNet.FilterReader, PDFNet.Filter)',
                [
                  [t, 'Object', h.FilterReader, 'FilterReader'],
                  [e, 'Object', h.Filter, 'Filter'],
                ]
              ),
              0 != e.id && O(e.id),
              h
                .sendWithPromise('SDFDoc.createIndirectStreamFromFilter', {
                  doc: this.id,
                  data: t.id,
                  no_own_filter_chain: e.id,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.SDFDoc.prototype.createIndirectStream = function (t, e) {
            f(
              arguments.length,
              2,
              'createIndirectStream',
              '(ArrayBuffer|TypedArray, PDFNet.Filter)',
              [
                [t, 'ArrayBuffer'],
                [e, 'Object', h.Filter, 'Filter'],
              ]
            );
            var n = b(t, !1);
            return (
              0 != e.id && O(e.id),
              h
                .sendWithPromise('SDFDoc.createIndirectStream', {
                  doc: this.id,
                  data_buf: n,
                  no_own_filter_chain: e.id,
                })
                .then(function (t) {
                  return _(h.Obj, t);
                })
            );
          }),
          (h.SecurityHandler.prototype.getPermission = function (t) {
            return (
              f(arguments.length, 1, 'getPermission', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('SecurityHandler.getPermission', {
                sh: this.id,
                p: t,
              })
            );
          }),
          (h.SecurityHandler.prototype.getKeyLength = function () {
            return h.sendWithPromise('SecurityHandler.getKeyLength', {
              sh: this.id,
            });
          }),
          (h.SecurityHandler.prototype.getEncryptionAlgorithmID = function () {
            return h.sendWithPromise(
              'SecurityHandler.getEncryptionAlgorithmID',
              { sh: this.id }
            );
          }),
          (h.SecurityHandler.prototype.getHandlerDocName = function () {
            return h.sendWithPromise('SecurityHandler.getHandlerDocName', {
              sh: this.id,
            });
          }),
          (h.SecurityHandler.prototype.isModified = function () {
            return h.sendWithPromise('SecurityHandler.isModified', {
              sh: this.id,
            });
          }),
          (h.SecurityHandler.prototype.setModified = function (t) {
            return (
              void 0 === t && (t = !0),
              f(arguments.length, 0, 'setModified', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('SecurityHandler.setModified', {
                sh: this.id,
                is_modified: t,
              })
            );
          }),
          (h.SecurityHandler.create = function (t) {
            return (
              f(arguments.length, 1, 'create', '(number)', [[t, 'number']]),
              h
                .sendWithPromise('securityHandlerCreate', { crypt_type: t })
                .then(function (t) {
                  return D(h.SecurityHandler, t);
                })
            );
          }),
          (h.SecurityHandler.createFromEncCode = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'createFromEncCode',
                '(string, number, number)',
                [
                  [t, 'string'],
                  [e, 'number'],
                  [n, 'number'],
                ]
              ),
              h
                .sendWithPromise('securityHandlerCreateFromEncCode', {
                  name: t,
                  key_len: e,
                  enc_code: n,
                })
                .then(function (t) {
                  return D(h.SecurityHandler, t);
                })
            );
          }),
          (h.SecurityHandler.createDefault = function () {
            return h
              .sendWithPromise('securityHandlerCreateDefault', {})
              .then(function (t) {
                return D(h.SecurityHandler, t);
              });
          }),
          (h.SecurityHandler.prototype.setPermission = function (t, e) {
            return (
              f(arguments.length, 2, 'setPermission', '(number, boolean)', [
                [t, 'number'],
                [e, 'boolean'],
              ]),
              h.sendWithPromise('SecurityHandler.setPermission', {
                sh: this.id,
                perm: t,
                value: e,
              })
            );
          }),
          (h.SecurityHandler.prototype.changeRevisionNumber = function (t) {
            return (
              f(arguments.length, 1, 'changeRevisionNumber', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('SecurityHandler.changeRevisionNumber', {
                sh: this.id,
                rev_num: t,
              })
            );
          }),
          (h.SecurityHandler.prototype.setEncryptMetadata = function (t) {
            return (
              f(arguments.length, 1, 'setEncryptMetadata', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('SecurityHandler.setEncryptMetadata', {
                sh: this.id,
                encrypt_metadata: t,
              })
            );
          }),
          (h.SecurityHandler.prototype.getRevisionNumber = function () {
            return h.sendWithPromise('SecurityHandler.getRevisionNumber', {
              sh: this.id,
            });
          }),
          (h.SecurityHandler.prototype.isUserPasswordRequired = function () {
            return h.sendWithPromise('SecurityHandler.isUserPasswordRequired', {
              sh: this.id,
            });
          }),
          (h.SecurityHandler.prototype.isMasterPasswordRequired = function () {
            return h.sendWithPromise(
              'SecurityHandler.isMasterPasswordRequired',
              { sh: this.id }
            );
          }),
          (h.SecurityHandler.prototype.isAES = function () {
            return h.sendWithPromise('SecurityHandler.isAES', { sh: this.id });
          }),
          (h.SecurityHandler.prototype.isAESObj = function (t) {
            return (
              f(arguments.length, 1, 'isAESObj', '(PDFNet.Obj)', [
                [t, 'Object', h.Obj, 'Obj'],
              ]),
              h.sendWithPromise('SecurityHandler.isAESObj', {
                sh: this.id,
                stream: t.id,
              })
            );
          }),
          (h.SecurityHandler.prototype.isRC4 = function () {
            return h.sendWithPromise('SecurityHandler.isRC4', { sh: this.id });
          }),
          (h.SecurityHandler.prototype.changeUserPasswordUString = function (
            t
          ) {
            return (
              f(arguments.length, 1, 'changeUserPasswordUString', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('SecurityHandler.changeUserPasswordUString', {
                sh: this.id,
                password: t,
              })
            );
          }),
          (h.SecurityHandler.prototype.changeUserPasswordBuffer = function (t) {
            f(
              arguments.length,
              1,
              'changeUserPasswordBuffer',
              '(ArrayBuffer|TypedArray)',
              [[t, 'ArrayBuffer']]
            );
            var e = b(t, !1);
            return h.sendWithPromise(
              'SecurityHandler.changeUserPasswordBuffer',
              { sh: this.id, password_buf: e }
            );
          }),
          (h.SecurityHandler.prototype.changeMasterPasswordUString = function (
            t
          ) {
            return (
              f(
                arguments.length,
                1,
                'changeMasterPasswordUString',
                '(string)',
                [[t, 'string']]
              ),
              h.sendWithPromise('SecurityHandler.changeMasterPasswordUString', {
                sh: this.id,
                password: t,
              })
            );
          }),
          (h.SecurityHandler.prototype.changeMasterPasswordBuffer = function (
            t
          ) {
            f(
              arguments.length,
              1,
              'changeMasterPasswordBuffer',
              '(ArrayBuffer|TypedArray)',
              [[t, 'ArrayBuffer']]
            );
            var e = b(t, !1);
            return h.sendWithPromise(
              'SecurityHandler.changeMasterPasswordBuffer',
              { sh: this.id, password_buf: e }
            );
          }),
          (h.SecurityHandler.prototype.initPasswordUString = function (t) {
            return (
              f(arguments.length, 1, 'initPasswordUString', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('SecurityHandler.initPasswordUString', {
                sh: this.id,
                password: t,
              })
            );
          }),
          (h.SecurityHandler.prototype.initPasswordBuffer = function (t) {
            f(
              arguments.length,
              1,
              'initPasswordBuffer',
              '(ArrayBuffer|TypedArray)',
              [[t, 'ArrayBuffer']]
            );
            var e = b(t, !1);
            return h.sendWithPromise('SecurityHandler.initPasswordBuffer', {
              sh: this.id,
              password_buf: e,
            });
          }),
          (h.SignatureHandler.prototype.getName = function () {
            return h.sendWithPromise('SignatureHandler.getName', {
              signature_handler: this.id,
            });
          }),
          (h.SignatureHandler.prototype.reset = function () {
            return h.sendWithPromise('SignatureHandler.reset', {
              signature_handler: this.id,
            });
          }),
          (h.SignatureHandler.prototype.destructor = function () {
            return h.sendWithPromise('SignatureHandler.destructor', {
              signature_handler: this.id,
            });
          }),
          (h.UndoManager.prototype.discardAllSnapshots = function () {
            return h
              .sendWithPromise('UndoManager.discardAllSnapshots', {
                self: this.id,
              })
              .then(function (t) {
                return D(h.DocSnapshot, t);
              });
          }),
          (h.UndoManager.prototype.undo = function () {
            return h
              .sendWithPromise('UndoManager.undo', { self: this.id })
              .then(function (t) {
                return D(h.ResultSnapshot, t);
              });
          }),
          (h.UndoManager.prototype.canUndo = function () {
            return h.sendWithPromise('UndoManager.canUndo', { self: this.id });
          }),
          (h.UndoManager.prototype.getNextUndoSnapshot = function () {
            return h
              .sendWithPromise('UndoManager.getNextUndoSnapshot', {
                self: this.id,
              })
              .then(function (t) {
                return D(h.DocSnapshot, t);
              });
          }),
          (h.UndoManager.prototype.redo = function () {
            return h
              .sendWithPromise('UndoManager.redo', { self: this.id })
              .then(function (t) {
                return D(h.ResultSnapshot, t);
              });
          }),
          (h.UndoManager.prototype.canRedo = function () {
            return h.sendWithPromise('UndoManager.canRedo', { self: this.id });
          }),
          (h.UndoManager.prototype.getNextRedoSnapshot = function () {
            return h
              .sendWithPromise('UndoManager.getNextRedoSnapshot', {
                self: this.id,
              })
              .then(function (t) {
                return D(h.DocSnapshot, t);
              });
          }),
          (h.UndoManager.prototype.takeSnapshot = function () {
            return h
              .sendWithPromise('UndoManager.takeSnapshot', { self: this.id })
              .then(function (t) {
                return D(h.ResultSnapshot, t);
              });
          }),
          (h.ResultSnapshot.prototype.currentState = function () {
            return h
              .sendWithPromise('ResultSnapshot.currentState', { self: this.id })
              .then(function (t) {
                return D(h.DocSnapshot, t);
              });
          }),
          (h.ResultSnapshot.prototype.previousState = function () {
            return h
              .sendWithPromise('ResultSnapshot.previousState', {
                self: this.id,
              })
              .then(function (t) {
                return D(h.DocSnapshot, t);
              });
          }),
          (h.ResultSnapshot.prototype.isOk = function () {
            return h.sendWithPromise('ResultSnapshot.isOk', { self: this.id });
          }),
          (h.ResultSnapshot.prototype.isNullTransition = function () {
            return h.sendWithPromise('ResultSnapshot.isNullTransition', {
              self: this.id,
            });
          }),
          (h.DocSnapshot.prototype.getHash = function () {
            return h.sendWithPromise('DocSnapshot.getHash', { self: this.id });
          }),
          (h.DocSnapshot.prototype.isValid = function () {
            return h.sendWithPromise('DocSnapshot.isValid', { self: this.id });
          }),
          (h.DocSnapshot.prototype.equals = function (t) {
            return (
              f(arguments.length, 1, 'equals', '(PDFNet.DocSnapshot)', [
                [t, 'Object', h.DocSnapshot, 'DocSnapshot'],
              ]),
              h.sendWithPromise('DocSnapshot.equals', {
                self: this.id,
                snapshot: t.id,
              })
            );
          }),
          (h.OCRModule.applyOCRJsonToPDF = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'applyOCRJsonToPDF',
                '(PDFNet.PDFDoc, string)',
                [
                  [t, 'PDFDoc'],
                  [e, 'string'],
                ]
              ),
              h.sendWithPromise('ocrModuleApplyOCRJsonToPDF', {
                dst: t.id,
                json: e,
              })
            );
          }),
          (h.OCRModule.applyOCRXmlToPDF = function (t, e) {
            return (
              f(
                arguments.length,
                2,
                'applyOCRXmlToPDF',
                '(PDFNet.PDFDoc, string)',
                [
                  [t, 'PDFDoc'],
                  [e, 'string'],
                ]
              ),
              h.sendWithPromise('ocrModuleApplyOCRXmlToPDF', {
                dst: t.id,
                xml: e,
              })
            );
          }),
          (h.VerificationOptions.create = function (t) {
            return (
              f(arguments.length, 1, 'create', '(number)', [[t, 'number']]),
              h
                .sendWithPromise('verificationOptionsCreate', { in_level: t })
                .then(function (t) {
                  return D(h.VerificationOptions, t);
                })
            );
          }),
          (h.VerificationOptions.prototype.addTrustedCertificate = function (
            t,
            e
          ) {
            void 0 === e &&
              (e = h.VerificationOptions.CertificateTrustFlag.e_default_trust),
              f(
                arguments.length,
                1,
                'addTrustedCertificate',
                '(ArrayBuffer|TypedArray, number)',
                [
                  [t, 'ArrayBuffer'],
                  [e, 'number'],
                ]
              );
            var n = b(t, !1);
            return h.sendWithPromise(
              'VerificationOptions.addTrustedCertificate',
              { self: this.id, in_certificate_buf: n, in_trust_flags: e }
            );
          }),
          (h.VerificationOptions.prototype.addTrustedCertificates = function (
            t
          ) {
            f(
              arguments.length,
              1,
              'addTrustedCertificates',
              '(ArrayBuffer|TypedArray)',
              [[t, 'ArrayBuffer']]
            );
            var e = b(t, !1);
            return h.sendWithPromise(
              'VerificationOptions.addTrustedCertificates',
              { self: this.id, in_P7C_binary_DER_certificates_file_data_buf: e }
            );
          }),
          (h.VerificationOptions.prototype.loadTrustList = function (t) {
            return (
              f(arguments.length, 1, 'loadTrustList', '(PDFNet.FDFDoc)', [
                [t, 'FDFDoc'],
              ]),
              h.sendWithPromise('VerificationOptions.loadTrustList', {
                self: this.id,
                in_fdf_cert_exchange_data: t.id,
              })
            );
          }),
          (h.VerificationOptions.prototype.enableModificationVerification =
            function (t) {
              return (
                f(
                  arguments.length,
                  1,
                  'enableModificationVerification',
                  '(boolean)',
                  [[t, 'boolean']]
                ),
                h.sendWithPromise(
                  'VerificationOptions.enableModificationVerification',
                  { self: this.id, in_on_or_off: t }
                )
              );
            }),
          (h.VerificationOptions.prototype.enableDigestVerification = function (
            t
          ) {
            return (
              f(arguments.length, 1, 'enableDigestVerification', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise(
                'VerificationOptions.enableDigestVerification',
                { self: this.id, in_on_or_off: t }
              )
            );
          }),
          (h.VerificationOptions.prototype.enableTrustVerification = function (
            t
          ) {
            return (
              f(arguments.length, 1, 'enableTrustVerification', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('VerificationOptions.enableTrustVerification', {
                self: this.id,
                in_on_or_off: t,
              })
            );
          }),
          (h.VerificationOptions.prototype.setRevocationProxyPrefix = function (
            t
          ) {
            return (
              f(arguments.length, 1, 'setRevocationProxyPrefix', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise(
                'VerificationOptions.setRevocationProxyPrefix',
                { self: this.id, in_str: t }
              )
            );
          }),
          (h.VerificationOptions.prototype.setRevocationTimeout = function (t) {
            return (
              f(arguments.length, 1, 'setRevocationTimeout', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('VerificationOptions.setRevocationTimeout', {
                self: this.id,
                in_revocation_timeout_milliseconds: t,
              })
            );
          }),
          (h.VerificationOptions.prototype.enableOnlineCRLRevocationChecking =
            function (t) {
              return (
                f(
                  arguments.length,
                  1,
                  'enableOnlineCRLRevocationChecking',
                  '(boolean)',
                  [[t, 'boolean']]
                ),
                h.sendWithPromise(
                  'VerificationOptions.enableOnlineCRLRevocationChecking',
                  { self: this.id, in_on_or_off: t }
                )
              );
            }),
          (h.VerificationOptions.prototype.enableOnlineOCSPRevocationChecking =
            function (t) {
              return (
                f(
                  arguments.length,
                  1,
                  'enableOnlineOCSPRevocationChecking',
                  '(boolean)',
                  [[t, 'boolean']]
                ),
                h.sendWithPromise(
                  'VerificationOptions.enableOnlineOCSPRevocationChecking',
                  { self: this.id, in_on_or_off: t }
                )
              );
            }),
          (h.VerificationOptions.prototype.enableOnlineRevocationChecking =
            function (t) {
              return (
                f(
                  arguments.length,
                  1,
                  'enableOnlineRevocationChecking',
                  '(boolean)',
                  [[t, 'boolean']]
                ),
                h.sendWithPromise(
                  'VerificationOptions.enableOnlineRevocationChecking',
                  { self: this.id, in_on_or_off: t }
                )
              );
            }),
          (h.VerificationResult.prototype.getDigitalSignatureField =
            function () {
              return h
                .sendWithPromise(
                  'VerificationResult.getDigitalSignatureField',
                  { self: this.id }
                )
                .then(function (t) {
                  return new h.DigitalSignatureField(t);
                });
            }),
          (h.VerificationResult.prototype.getVerificationStatus = function () {
            return h.sendWithPromise(
              'VerificationResult.getVerificationStatus',
              { self: this.id }
            );
          }),
          (h.VerificationResult.prototype.getDocumentStatus = function () {
            return h.sendWithPromise('VerificationResult.getDocumentStatus', {
              self: this.id,
            });
          }),
          (h.VerificationResult.prototype.getDigestStatus = function () {
            return h.sendWithPromise('VerificationResult.getDigestStatus', {
              self: this.id,
            });
          }),
          (h.VerificationResult.prototype.getTrustStatus = function () {
            return h.sendWithPromise('VerificationResult.getTrustStatus', {
              self: this.id,
            });
          }),
          (h.VerificationResult.prototype.getPermissionsStatus = function () {
            return h.sendWithPromise(
              'VerificationResult.getPermissionsStatus',
              { self: this.id }
            );
          });
        (h.VerificationResult.prototype.getTrustVerificationResult =
          function () {
            return h
              .sendWithPromise(
                'VerificationResult.getTrustVerificationResult',
                { self: this.id }
              )
              .then(function (t) {
                return D(h.TrustVerificationResult, t);
              });
          }),
          (h.VerificationResult.prototype.hasTrustVerificationResult =
            function () {
              return h.sendWithPromise(
                'VerificationResult.hasTrustVerificationResult',
                { self: this.id }
              );
            }),
          (h.VerificationResult.prototype.getDisallowedChanges = function () {
            return h
              .sendWithPromise('VerificationResult.getDisallowedChanges', {
                self: this.id,
              })
              .then(function (t) {
                for (var e = [], n = 0; n < t.length; ++n) {
                  var i = t[n];
                  if ('0' === i) return null;
                  (i = new h.DisallowedChange(i)),
                    e.push(i),
                    c.push({ name: i.name, id: i.id });
                }
                return e;
              });
          }),
          (h.VerificationResult.prototype.getDigestAlgorithm = function () {
            return h.sendWithPromise('VerificationResult.getDigestAlgorithm', {
              self: this.id,
            });
          }),
          (h.VerificationResult.prototype.getDocumentStatusAsString =
            function () {
              return h.sendWithPromise(
                'VerificationResult.getDocumentStatusAsString',
                { self: this.id }
              );
            }),
          (h.VerificationResult.prototype.getDigestStatusAsString =
            function () {
              return h.sendWithPromise(
                'VerificationResult.getDigestStatusAsString',
                { self: this.id }
              );
            }),
          (h.VerificationResult.prototype.getTrustStatusAsString = function () {
            return h.sendWithPromise(
              'VerificationResult.getTrustStatusAsString',
              { self: this.id }
            );
          }),
          (h.VerificationResult.prototype.getPermissionsStatusAsString =
            function () {
              return h.sendWithPromise(
                'VerificationResult.getPermissionsStatusAsString',
                { self: this.id }
              );
            }),
          (h.VerificationResult.prototype.getUnsupportedFeatures = function () {
            return h.sendWithPromise(
              'VerificationResult.getUnsupportedFeatures',
              { self: this.id }
            );
          }),
          (h.EmbeddedTimestampVerificationResult.prototype.getVerificationStatus =
            function () {
              return h.sendWithPromise(
                'EmbeddedTimestampVerificationResult.getVerificationStatus',
                { self: this.id }
              );
            }),
          (h.EmbeddedTimestampVerificationResult.prototype.getCMSDigestStatus =
            function () {
              return h.sendWithPromise(
                'EmbeddedTimestampVerificationResult.getCMSDigestStatus',
                { self: this.id }
              );
            }),
          (h.EmbeddedTimestampVerificationResult.prototype.getMessageImprintDigestStatus =
            function () {
              return h.sendWithPromise(
                'EmbeddedTimestampVerificationResult.getMessageImprintDigestStatus',
                { self: this.id }
              );
            }),
          (h.EmbeddedTimestampVerificationResult.prototype.getTrustStatus =
            function () {
              return h.sendWithPromise(
                'EmbeddedTimestampVerificationResult.getTrustStatus',
                { self: this.id }
              );
            }),
          (h.EmbeddedTimestampVerificationResult.prototype.getCMSDigestStatusAsString =
            function () {
              return h.sendWithPromise(
                'EmbeddedTimestampVerificationResult.getCMSDigestStatusAsString',
                { self: this.id }
              );
            }),
          (h.EmbeddedTimestampVerificationResult.prototype.getMessageImprintDigestStatusAsString =
            function () {
              return h.sendWithPromise(
                'EmbeddedTimestampVerificationResult.getMessageImprintDigestStatusAsString',
                { self: this.id }
              );
            }),
          (h.EmbeddedTimestampVerificationResult.prototype.getTrustStatusAsString =
            function () {
              return h.sendWithPromise(
                'EmbeddedTimestampVerificationResult.getTrustStatusAsString',
                { self: this.id }
              );
            }),
          (h.EmbeddedTimestampVerificationResult.prototype.hasTrustVerificationResult =
            function () {
              return h.sendWithPromise(
                'EmbeddedTimestampVerificationResult.hasTrustVerificationResult',
                { self: this.id }
              );
            }),
          (h.EmbeddedTimestampVerificationResult.prototype.getTrustVerificationResult =
            function () {
              return h
                .sendWithPromise(
                  'EmbeddedTimestampVerificationResult.getTrustVerificationResult',
                  { self: this.id }
                )
                .then(function (t) {
                  return D(h.TrustVerificationResult, t);
                });
            }),
          (h.EmbeddedTimestampVerificationResult.prototype.getCMSSignatureDigestAlgorithm =
            function () {
              return h.sendWithPromise(
                'EmbeddedTimestampVerificationResult.getCMSSignatureDigestAlgorithm',
                { self: this.id }
              );
            }),
          (h.EmbeddedTimestampVerificationResult.prototype.getMessageImprintDigestAlgorithm =
            function () {
              return h.sendWithPromise(
                'EmbeddedTimestampVerificationResult.getMessageImprintDigestAlgorithm',
                { self: this.id }
              );
            }),
          (h.EmbeddedTimestampVerificationResult.prototype.getUnsupportedFeatures =
            function () {
              return h.sendWithPromise(
                'EmbeddedTimestampVerificationResult.getUnsupportedFeatures',
                { self: this.id }
              );
            }),
          (h.TrustVerificationResult.prototype.wasSuccessful = function () {
            return h.sendWithPromise('TrustVerificationResult.wasSuccessful', {
              self: this.id,
            });
          }),
          (h.TrustVerificationResult.prototype.getResultString = function () {
            return h.sendWithPromise(
              'TrustVerificationResult.getResultString',
              { self: this.id }
            );
          }),
          (h.TrustVerificationResult.prototype.getTimeOfTrustVerification =
            function () {
              return h.sendWithPromise(
                'TrustVerificationResult.getTimeOfTrustVerification',
                { self: this.id }
              );
            }),
          (h.TrustVerificationResult.prototype.getTimeOfTrustVerificationEnum =
            function () {
              return h.sendWithPromise(
                'TrustVerificationResult.getTimeOfTrustVerificationEnum',
                { self: this.id }
              );
            }),
          (h.TrustVerificationResult.prototype.hasEmbeddedTimestampVerificationResult =
            function () {
              return h.sendWithPromise(
                'TrustVerificationResult.hasEmbeddedTimestampVerificationResult',
                { self: this.id }
              );
            }),
          (h.TrustVerificationResult.prototype.getEmbeddedTimestampVerificationResult =
            function () {
              return h
                .sendWithPromise(
                  'TrustVerificationResult.getEmbeddedTimestampVerificationResult',
                  { self: this.id }
                )
                .then(function (t) {
                  return D(h.EmbeddedTimestampVerificationResult, t);
                });
            }),
          (h.TrustVerificationResult.prototype.getCertPath = function () {
            return h
              .sendWithPromise('TrustVerificationResult.getCertPath', {
                self: this.id,
              })
              .then(function (t) {
                for (var e = [], n = 0; n < t.length; ++n) {
                  var i = t[n];
                  if ('0' === i) return null;
                  (i = new h.X509Certificate(i)),
                    e.push(i),
                    c.push({ name: i.name, id: i.id });
                }
                return e;
              });
          }),
          (h.DisallowedChange.prototype.getObjNum = function () {
            return h.sendWithPromise('DisallowedChange.getObjNum', {
              self: this.id,
            });
          }),
          (h.DisallowedChange.prototype.getType = function () {
            return h.sendWithPromise('DisallowedChange.getType', {
              self: this.id,
            });
          }),
          (h.DisallowedChange.prototype.getTypeAsString = function () {
            return h.sendWithPromise('DisallowedChange.getTypeAsString', {
              self: this.id,
            });
          }),
          (h.X509Extension.prototype.isCritical = function () {
            return h.sendWithPromise('X509Extension.isCritical', {
              self: this.id,
            });
          }),
          (h.X509Extension.prototype.getObjectIdentifier = function () {
            return h
              .sendWithPromise('X509Extension.getObjectIdentifier', {
                self: this.id,
              })
              .then(function (t) {
                return D(h.ObjectIdentifier, t);
              });
          }),
          (h.X509Extension.prototype.toString = function () {
            return h.sendWithPromise('X509Extension.toString', {
              self: this.id,
            });
          }),
          (h.X509Extension.prototype.getData = function () {
            return h
              .sendWithPromise('X509Extension.getData', { self: this.id })
              .then(function (t) {
                return new Uint8Array(t);
              });
          }),
          (h.X501AttributeTypeAndValue.prototype.getAttributeTypeOID =
            function () {
              return h
                .sendWithPromise(
                  'X501AttributeTypeAndValue.getAttributeTypeOID',
                  { self: this.id }
                )
                .then(function (t) {
                  return D(h.ObjectIdentifier, t);
                });
            }),
          (h.X501AttributeTypeAndValue.prototype.getStringValue = function () {
            return h.sendWithPromise(
              'X501AttributeTypeAndValue.getStringValue',
              { self: this.id }
            );
          }),
          (h.ByteRange.prototype.getStartOffset = function () {
            return (
              P('getStartOffset', this.yieldFunction),
              h.sendWithPromise('ByteRange.getStartOffset', { self: this })
            );
          }),
          (h.ByteRange.prototype.getEndOffset = function () {
            return (
              P('getEndOffset', this.yieldFunction),
              h.sendWithPromise('ByteRange.getEndOffset', { self: this })
            );
          }),
          (h.ByteRange.prototype.getSize = function () {
            return (
              P('getSize', this.yieldFunction),
              h.sendWithPromise('ByteRange.getSize', { self: this })
            );
          }),
          (h.TimestampingResult.prototype.getStatus = function () {
            return h.sendWithPromise('TimestampingResult.getStatus', {
              self: this.id,
            });
          }),
          (h.TimestampingResult.prototype.getString = function () {
            return h.sendWithPromise('TimestampingResult.getString', {
              self: this.id,
            });
          }),
          (h.TimestampingResult.prototype.hasResponseVerificationResult =
            function () {
              return h.sendWithPromise(
                'TimestampingResult.hasResponseVerificationResult',
                { self: this.id }
              );
            }),
          (h.TimestampingResult.prototype.getResponseVerificationResult =
            function () {
              return h
                .sendWithPromise(
                  'TimestampingResult.getResponseVerificationResult',
                  { self: this.id }
                )
                .then(function (t) {
                  return D(h.EmbeddedTimestampVerificationResult, t);
                });
            }),
          (h.TimestampingResult.prototype.getData = function () {
            return h
              .sendWithPromise('TimestampingResult.getData', { self: this.id })
              .then(function (t) {
                return new Uint8Array(t);
              });
          }),
          (h.ActionParameter.create = function (t) {
            return (
              f(arguments.length, 1, 'create', '(PDFNet.Action)', [
                [t, 'Object', h.Action, 'Action'],
              ]),
              h
                .sendWithPromise('actionParameterCreate', { action: t.id })
                .then(function (t) {
                  return D(h.ActionParameter, t);
                })
            );
          }),
          (h.Action.prototype.parameterCreateWithField = function (t) {
            return (
              f(
                arguments.length,
                1,
                'parameterCreateWithField',
                '(PDFNet.Field)',
                [[t, 'Structure', h.Field, 'Field']]
              ),
              F('parameterCreateWithField', [[t, 0]]),
              h
                .sendWithPromise('Action.parameterCreateWithField', {
                  action: this.id,
                  field: t,
                })
                .then(function (t) {
                  return D(h.ActionParameter, t);
                })
            );
          }),
          (h.Action.prototype.parameterCreateWithAnnot = function (t) {
            return (
              f(
                arguments.length,
                1,
                'parameterCreateWithAnnot',
                '(PDFNet.Annot)',
                [[t, 'Object', h.Annot, 'Annot']]
              ),
              h
                .sendWithPromise('Action.parameterCreateWithAnnot', {
                  action: this.id,
                  annot: t.id,
                })
                .then(function (t) {
                  return D(h.ActionParameter, t);
                })
            );
          }),
          (h.Action.prototype.parameterCreateWithPage = function (t) {
            return (
              f(
                arguments.length,
                1,
                'parameterCreateWithPage',
                '(PDFNet.Page)',
                [[t, 'Object', h.Page, 'Page']]
              ),
              h
                .sendWithPromise('Action.parameterCreateWithPage', {
                  action: this.id,
                  page: t.id,
                })
                .then(function (t) {
                  return D(h.ActionParameter, t);
                })
            );
          }),
          (h.ActionParameter.prototype.getAction = function () {
            return h
              .sendWithPromise('ActionParameter.getAction', { ap: this.id })
              .then(function (t) {
                return _(h.Action, t);
              });
          }),
          (h.ViewChangeCollection.create = function () {
            return h
              .sendWithPromise('viewChangeCollectionCreate', {})
              .then(function (t) {
                return D(h.ViewChangeCollection, t);
              });
          }),
          (h.RadioButtonGroup.createFromField = function (t) {
            return (
              f(arguments.length, 1, 'createFromField', '(PDFNet.Field)', [
                [t, 'Structure', h.Field, 'Field'],
              ]),
              F('createFromField', [[t, 0]]),
              h
                .sendWithPromise('radioButtonGroupCreateFromField', {
                  field: t,
                })
                .then(function (t) {
                  return D(h.RadioButtonGroup, t);
                })
            );
          }),
          (h.RadioButtonGroup.create = function (t, e) {
            return (
              void 0 === e && (e = ''),
              f(arguments.length, 1, 'create', '(PDFNet.PDFDoc, string)', [
                [t, 'PDFDoc'],
                [e, 'string'],
              ]),
              h
                .sendWithPromise('radioButtonGroupCreate', {
                  doc: t.id,
                  field_name: e,
                })
                .then(function (t) {
                  return D(h.RadioButtonGroup, t);
                })
            );
          }),
          (h.RadioButtonGroup.prototype.copy = function () {
            return h
              .sendWithPromise('RadioButtonGroup.copy', { group: this.id })
              .then(function (t) {
                return D(h.RadioButtonGroup, t);
              });
          }),
          (h.RadioButtonGroup.prototype.add = function (t, e) {
            return (
              void 0 === e && (e = ''),
              f(arguments.length, 1, 'add', '(PDFNet.Rect, string)', [
                [t, 'Structure', h.Rect, 'Rect'],
                [e, 'const char* = 0'],
              ]),
              F('add', [[t, 0]]),
              h
                .sendWithPromise('RadioButtonGroup.add', {
                  group: this.id,
                  pos: t,
                  onstate: e,
                })
                .then(function (t) {
                  return _(h.RadioButtonWidget, t);
                })
            );
          }),
          (h.RadioButtonGroup.prototype.getNumButtons = function () {
            return h.sendWithPromise('RadioButtonGroup.getNumButtons', {
              group: this.id,
            });
          }),
          (h.RadioButtonGroup.prototype.getButton = function (t) {
            return (
              f(arguments.length, 1, 'getButton', '(number)', [[t, 'number']]),
              h
                .sendWithPromise('RadioButtonGroup.getButton', {
                  group: this.id,
                  index: t,
                })
                .then(function (t) {
                  return _(h.RadioButtonWidget, t);
                })
            );
          }),
          (h.RadioButtonGroup.prototype.getField = function () {
            return h
              .sendWithPromise('RadioButtonGroup.getField', { group: this.id })
              .then(function (t) {
                return new h.Field(t);
              });
          }),
          (h.RadioButtonGroup.prototype.addGroupButtonsToPage = function (t) {
            return (
              f(arguments.length, 1, 'addGroupButtonsToPage', '(PDFNet.Page)', [
                [t, 'Object', h.Page, 'Page'],
              ]),
              h.sendWithPromise('RadioButtonGroup.addGroupButtonsToPage', {
                group: this.id,
                page: t.id,
              })
            );
          }),
          (h.PDFTronCustomSecurityHandler.create = function (t) {
            return (
              f(arguments.length, 1, 'create', '(number)', [[t, 'number']]),
              h
                .sendWithPromise('pdfTronCustomSecurityHandlerCreate', {
                  custom_id: t,
                })
                .then(function (t) {
                  return D(h.SecurityHandler, t);
                })
            );
          }),
          (h.WebFontDownloader.isAvailable = function () {
            return h.sendWithPromise('webFontDownloaderIsAvailable', {});
          }),
          (h.WebFontDownloader.enableDownloads = function () {
            return h.sendWithPromise('webFontDownloaderEnableDownloads', {});
          }),
          (h.WebFontDownloader.disableDownloads = function () {
            return h.sendWithPromise('webFontDownloaderDisableDownloads', {});
          }),
          (h.WebFontDownloader.preCacheAsync = function () {
            return h.sendWithPromise('webFontDownloaderPreCacheAsync', {});
          }),
          (h.WebFontDownloader.clearCache = function () {
            return h.sendWithPromise('webFontDownloaderClearCache', {});
          }),
          (h.WebFontDownloader.setCustomWebFontURL = function (t) {
            return (
              f(arguments.length, 1, 'setCustomWebFontURL', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('webFontDownloaderSetCustomWebFontURL', {
                url: t,
              })
            );
          }),
          (h.FlowDocument.create = function () {
            return h
              .sendWithPromise('flowDocumentCreate', {})
              .then(function (t) {
                return D(h.FlowDocument, t);
              });
          }),
          (h.FlowDocument.prototype.setDefaultPageSize = function (t, e) {
            return (
              f(arguments.length, 2, 'setDefaultPageSize', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h.sendWithPromise('FlowDocument.setDefaultPageSize', {
                self: this.id,
                width: t,
                height: e,
              })
            );
          }),
          (h.FlowDocument.prototype.setDefaultMargins = function (t, e, n, i) {
            return (
              f(
                arguments.length,
                4,
                'setDefaultMargins',
                '(number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                ]
              ),
              h.sendWithPromise('FlowDocument.setDefaultMargins', {
                self: this.id,
                left: t,
                top: e,
                right: n,
                bottom: i,
              })
            );
          }),
          (h.FlowDocument.prototype.addParagraph = function () {
            return h
              .sendWithPromise('FlowDocument.addParagraph', { self: this.id })
              .then(function (t) {
                return _(h.Paragraph, t);
              });
          }),
          (h.FlowDocument.prototype.addParagraphWithText = function (t) {
            return (
              f(arguments.length, 1, 'addParagraphWithText', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('FlowDocument.addParagraphWithText', {
                  self: this.id,
                  text: t,
                })
                .then(function (t) {
                  return _(h.Paragraph, t);
                })
            );
          }),
          (h.FlowDocument.prototype.addList = function () {
            return h
              .sendWithPromise('FlowDocument.addList', { self: this.id })
              .then(function (t) {
                return _(h.List, t);
              });
          }),
          (h.FlowDocument.prototype.addTable = function () {
            return h
              .sendWithPromise('FlowDocument.addTable', { self: this.id })
              .then(function (t) {
                return _(h.Table, t);
              });
          }),
          (h.FlowDocument.prototype.getBody = function () {
            return h
              .sendWithPromise('FlowDocument.getBody', { self: this.id })
              .then(function (t) {
                return _(h.ContentNode, t);
              });
          }),
          (h.FlowDocument.prototype.paginateToPDF = function () {
            return h
              .sendWithPromise('FlowDocument.paginateToPDF', { self: this.id })
              .then(function (t) {
                return D(h.PDFDoc, t);
              });
          }),
          (h.ContentElement.prototype.asTextRun = function () {
            return h
              .sendWithPromise('ContentElement.asTextRun', { self: this.id })
              .then(function (t) {
                return _(h.TextRun, t);
              });
          }),
          (h.ContentElement.prototype.asContentNode = function () {
            return h
              .sendWithPromise('ContentElement.asContentNode', {
                self: this.id,
              })
              .then(function (t) {
                return _(h.ContentNode, t);
              });
          }),
          (h.ContentElement.prototype.asParagraph = function () {
            return h
              .sendWithPromise('ContentElement.asParagraph', { self: this.id })
              .then(function (t) {
                return _(h.Paragraph, t);
              });
          }),
          (h.ContentElement.prototype.asTable = function () {
            return h
              .sendWithPromise('ContentElement.asTable', { self: this.id })
              .then(function (t) {
                return _(h.Table, t);
              });
          }),
          (h.ContentElement.prototype.asTableRow = function () {
            return h
              .sendWithPromise('ContentElement.asTableRow', { self: this.id })
              .then(function (t) {
                return _(h.TableRow, t);
              });
          }),
          (h.ContentElement.prototype.asTableCell = function () {
            return h
              .sendWithPromise('ContentElement.asTableCell', { self: this.id })
              .then(function (t) {
                return _(h.TableCell, t);
              });
          }),
          (h.ContentElement.prototype.asList = function () {
            return h
              .sendWithPromise('ContentElement.asList', { self: this.id })
              .then(function (t) {
                return _(h.List, t);
              });
          }),
          (h.ContentElement.prototype.asListItem = function () {
            return h
              .sendWithPromise('ContentElement.asListItem', { self: this.id })
              .then(function (t) {
                return _(h.ListItem, t);
              });
          }),
          (h.ContentElement.prototype.getTextStyledElement = function () {
            return h
              .sendWithPromise('ContentElement.getTextStyledElement', {
                self: this.id,
              })
              .then(function (t) {
                return _(h.TextStyledElement, t);
              });
          }),
          (h.ContentNode.prototype.getContentNodeIterator = function () {
            return h
              .sendWithPromise('ContentNode.getContentNodeIterator', {
                self: this.id,
              })
              .then(function (t) {
                return D(h.Iterator, t, 'ContentElement');
              });
          }),
          (h.Paragraph.prototype.addText = function (t) {
            return (
              f(arguments.length, 1, 'addText', '(string)', [[t, 'string']]),
              h
                .sendWithPromise('Paragraph.addText', {
                  self: this.id,
                  text: t,
                })
                .then(function (t) {
                  return _(h.TextRun, t);
                })
            );
          }),
          (h.Paragraph.prototype.setSpaceBefore = function (t) {
            return (
              f(arguments.length, 1, 'setSpaceBefore', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Paragraph.setSpaceBefore', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.Paragraph.prototype.getSpaceBefore = function () {
            return h.sendWithPromise('Paragraph.getSpaceBefore', {
              self: this.id,
            });
          }),
          (h.Paragraph.prototype.setSpaceAfter = function (t) {
            return (
              f(arguments.length, 1, 'setSpaceAfter', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Paragraph.setSpaceAfter', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.Paragraph.prototype.getSpaceAfter = function () {
            return h.sendWithPromise('Paragraph.getSpaceAfter', {
              self: this.id,
            });
          }),
          (h.Paragraph.prototype.setJustificationMode = function (t) {
            return (
              f(arguments.length, 1, 'setJustificationMode', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Paragraph.setJustificationMode', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.Paragraph.prototype.getJustificationMode = function () {
            return h.sendWithPromise('Paragraph.getJustificationMode', {
              self: this.id,
            });
          }),
          (h.Paragraph.prototype.setStartIndent = function (t) {
            return (
              f(arguments.length, 1, 'setStartIndent', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Paragraph.setStartIndent', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.Paragraph.prototype.getStartIndent = function () {
            return h.sendWithPromise('Paragraph.getStartIndent', {
              self: this.id,
            });
          }),
          (h.Paragraph.prototype.setEndIndent = function (t) {
            return (
              f(arguments.length, 1, 'setEndIndent', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Paragraph.setEndIndent', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.Paragraph.prototype.getEndIndent = function () {
            return h.sendWithPromise('Paragraph.getEndIndent', {
              self: this.id,
            });
          }),
          (h.Paragraph.prototype.setTextIndent = function (t) {
            return (
              f(arguments.length, 1, 'setTextIndent', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Paragraph.setTextIndent', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.Paragraph.prototype.getTextIndent = function () {
            return h.sendWithPromise('Paragraph.getTextIndent', {
              self: this.id,
            });
          }),
          (h.Paragraph.prototype.setBorder = function (t, e, n, i) {
            return (
              f(
                arguments.length,
                4,
                'setBorder',
                '(number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                ]
              ),
              h.sendWithPromise('Paragraph.setBorder', {
                self: this.id,
                thickness: t,
                red: e,
                green: n,
                blue: i,
              })
            );
          }),
          (h.Paragraph.prototype.getBorderThickness = function () {
            return h.sendWithPromise('Paragraph.getBorderThickness', {
              self: this.id,
            });
          }),
          (h.Paragraph.prototype.addTabStop = function (t) {
            return (
              f(arguments.length, 1, 'addTabStop', '(number)', [[t, 'number']]),
              h.sendWithPromise('Paragraph.addTabStop', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.Paragraph.prototype.getNextTabStop = function (t) {
            return (
              f(arguments.length, 1, 'getNextTabStop', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Paragraph.getNextTabStop', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.Paragraph.prototype.setDefaultTabStop = function (t) {
            return (
              f(arguments.length, 1, 'setDefaultTabStop', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Paragraph.setDefaultTabStop', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.Paragraph.prototype.getDefaultTabStop = function () {
            return h.sendWithPromise('Paragraph.getDefaultTabStop', {
              self: this.id,
            });
          }),
          (h.Paragraph.prototype.setSpacesPerTab = function (t) {
            return (
              f(arguments.length, 1, 'setSpacesPerTab', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Paragraph.setSpacesPerTab', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.Paragraph.prototype.getSpacesPerTab = function () {
            return h.sendWithPromise('Paragraph.getSpacesPerTab', {
              self: this.id,
            });
          }),
          (h.Paragraph.prototype.setDisplayRtl = function (t) {
            return (
              f(arguments.length, 1, 'setDisplayRtl', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('Paragraph.setDisplayRtl', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.Paragraph.prototype.isDisplayRtl = function () {
            return h.sendWithPromise('Paragraph.isDisplayRtl', {
              self: this.id,
            });
          }),
          (h.Table.prototype.addTableRow = function () {
            return h
              .sendWithPromise('Table.addTableRow', { self: this.id })
              .then(function (t) {
                return _(h.TableRow, t);
              });
          }),
          (h.Table.prototype.getTableCell = function (t, e) {
            return (
              f(arguments.length, 2, 'getTableCell', '(number, number)', [
                [t, 'number'],
                [e, 'number'],
              ]),
              h
                .sendWithPromise('Table.getTableCell', {
                  self: this.id,
                  column: t,
                  row: e,
                })
                .then(function (t) {
                  return _(h.TableCell, t);
                })
            );
          }),
          (h.Table.prototype.setDefaultColumnWidth = function (t) {
            return (
              f(arguments.length, 1, 'setDefaultColumnWidth', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Table.setDefaultColumnWidth', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.Table.prototype.getDefaultRowHeight = function () {
            return h.sendWithPromise('Table.getDefaultRowHeight', {
              self: this.id,
            });
          }),
          (h.Table.prototype.setDefaultRowHeight = function (t) {
            return (
              f(arguments.length, 1, 'setDefaultRowHeight', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('Table.setDefaultRowHeight', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.Table.prototype.getNumRows = function () {
            return h.sendWithPromise('Table.getNumRows', { self: this.id });
          }),
          (h.Table.prototype.getNumColumns = function () {
            return h.sendWithPromise('Table.getNumColumns', { self: this.id });
          }),
          (h.Table.prototype.setBorder = function (t, e, n, i) {
            return (
              f(
                arguments.length,
                4,
                'setBorder',
                '(number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                ]
              ),
              h.sendWithPromise('Table.setBorder', {
                self: this.id,
                thickness: t,
                red: e,
                green: n,
                blue: i,
              })
            );
          }),
          (h.Table.prototype.getBorderThickness = function () {
            return h.sendWithPromise('Table.getBorderThickness', {
              self: this.id,
            });
          }),
          (h.TableCell.prototype.addParagraph = function () {
            return h
              .sendWithPromise('TableCell.addParagraph', { self: this.id })
              .then(function (t) {
                return _(h.Paragraph, t);
              });
          }),
          (h.TableCell.prototype.addParagraphWithText = function (t) {
            return (
              f(arguments.length, 1, 'addParagraphWithText', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('TableCell.addParagraphWithText', {
                  self: this.id,
                  text: t,
                })
                .then(function (t) {
                  return _(h.Paragraph, t);
                })
            );
          }),
          (h.TableCell.prototype.addTable = function () {
            return h
              .sendWithPromise('TableCell.addTable', { self: this.id })
              .then(function (t) {
                return _(h.Table, t);
              });
          }),
          (h.TableCell.prototype.mergeCellsRight = function (t) {
            return (
              f(arguments.length, 1, 'mergeCellsRight', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('TableCell.mergeCellsRight', {
                  self: this.id,
                  num: t,
                })
                .then(function (t) {
                  return _(h.TableCell, t);
                })
            );
          }),
          (h.TableCell.prototype.mergeCellsDown = function (t) {
            return (
              f(arguments.length, 1, 'mergeCellsDown', '(number)', [
                [t, 'number'],
              ]),
              h
                .sendWithPromise('TableCell.mergeCellsDown', {
                  self: this.id,
                  num: t,
                })
                .then(function (t) {
                  return _(h.TableCell, t);
                })
            );
          }),
          (h.TableCell.prototype.setBackgroundColor = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'setBackgroundColor',
                '(number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                ]
              ),
              h.sendWithPromise('TableCell.setBackgroundColor', {
                self: this.id,
                red: t,
                green: e,
                blue: n,
              })
            );
          }),
          (h.TableCell.prototype.setBorder = function (t, e, n, i) {
            return (
              f(
                arguments.length,
                4,
                'setBorder',
                '(number, number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                ]
              ),
              h.sendWithPromise('TableCell.setBorder', {
                self: this.id,
                thickness: t,
                red: e,
                green: n,
                blue: i,
              })
            );
          }),
          (h.TableCell.prototype.getBorderThickness = function () {
            return h.sendWithPromise('TableCell.getBorderThickness', {
              self: this.id,
            });
          }),
          (h.TableCell.prototype.setVerticalAlignment = function (t) {
            return (
              f(arguments.length, 1, 'setVerticalAlignment', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('TableCell.setVerticalAlignment', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.TableCell.prototype.getVerticalAlignment = function () {
            return h.sendWithPromise('TableCell.getVerticalAlignment', {
              self: this.id,
            });
          }),
          (h.TableCell.prototype.setHorizontalAlignment = function (t) {
            return (
              f(arguments.length, 1, 'setHorizontalAlignment', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('TableCell.setHorizontalAlignment', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.TableCell.prototype.getHorizontalAlignment = function () {
            return h.sendWithPromise('TableCell.getHorizontalAlignment', {
              self: this.id,
            });
          }),
          (h.TableCell.prototype.setHeight = function (t) {
            return (
              f(arguments.length, 1, 'setHeight', '(number)', [[t, 'number']]),
              h.sendWithPromise('TableCell.setHeight', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.TableCell.prototype.getHeight = function () {
            return h.sendWithPromise('TableCell.getHeight', { self: this.id });
          }),
          (h.TableCell.prototype.setWidth = function (t) {
            return (
              f(arguments.length, 1, 'setWidth', '(number)', [[t, 'number']]),
              h.sendWithPromise('TableCell.setWidth', { self: this.id, val: t })
            );
          }),
          (h.TableCell.prototype.getWidth = function () {
            return h.sendWithPromise('TableCell.getWidth', { self: this.id });
          }),
          (h.TableRow.prototype.addTableCell = function () {
            return h
              .sendWithPromise('TableRow.addTableCell', { self: this.id })
              .then(function (t) {
                return _(h.TableCell, t);
              });
          }),
          (h.TableRow.prototype.setRowHeight = function (t) {
            return (
              f(arguments.length, 1, 'setRowHeight', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('TableRow.setRowHeight', {
                self: this.id,
                val: t,
              })
            );
          }),
          (h.TableRow.prototype.getNumColumns = function () {
            return h.sendWithPromise('TableRow.getNumColumns', {
              self: this.id,
            });
          }),
          (h.TextRun.prototype.setText = function (t) {
            return (
              f(arguments.length, 1, 'setText', '(string)', [[t, 'string']]),
              h.sendWithPromise('TextRun.setText', { self: this.id, text: t })
            );
          }),
          (h.TextRun.prototype.getText = function () {
            return h.sendWithPromise('TextRun.getText', { self: this.id });
          }),
          (h.TextStyledElement.prototype.setFontFace = function (t) {
            return (
              f(arguments.length, 1, 'setFontFace', '(string)', [
                [t, 'string'],
              ]),
              h.sendWithPromise('TextStyledElement.setFontFace', {
                impl: this.id,
                font_name: t,
              })
            );
          }),
          (h.TextStyledElement.prototype.getFontFace = function () {
            return h.sendWithPromise('TextStyledElement.getFontFace', {
              impl: this.id,
            });
          }),
          (h.TextStyledElement.prototype.setFontSize = function (t) {
            return (
              f(arguments.length, 1, 'setFontSize', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('TextStyledElement.setFontSize', {
                impl: this.id,
                font_size: t,
              })
            );
          }),
          (h.TextStyledElement.prototype.getFontSize = function () {
            return h.sendWithPromise('TextStyledElement.getFontSize', {
              impl: this.id,
            });
          }),
          (h.TextStyledElement.prototype.setItalic = function (t) {
            return (
              f(arguments.length, 1, 'setItalic', '(boolean)', [
                [t, 'boolean'],
              ]),
              h.sendWithPromise('TextStyledElement.setItalic', {
                impl: this.id,
                val: t,
              })
            );
          }),
          (h.TextStyledElement.prototype.isItalic = function () {
            return h.sendWithPromise('TextStyledElement.isItalic', {
              impl: this.id,
            });
          }),
          (h.TextStyledElement.prototype.setBold = function (t) {
            return (
              f(arguments.length, 1, 'setBold', '(boolean)', [[t, 'boolean']]),
              h.sendWithPromise('TextStyledElement.setBold', {
                impl: this.id,
                val: t,
              })
            );
          }),
          (h.TextStyledElement.prototype.isBold = function () {
            return h.sendWithPromise('TextStyledElement.isBold', {
              impl: this.id,
            });
          }),
          (h.TextStyledElement.prototype.setTextColor = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'setTextColor',
                '(number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                ]
              ),
              h.sendWithPromise('TextStyledElement.setTextColor', {
                impl: this.id,
                red: t,
                green: e,
                blue: n,
              })
            );
          }),
          (h.TextStyledElement.prototype.setBackgroundColor = function (
            t,
            e,
            n
          ) {
            return (
              f(
                arguments.length,
                3,
                'setBackgroundColor',
                '(number, number, number)',
                [
                  [t, 'number'],
                  [e, 'number'],
                  [n, 'number'],
                ]
              ),
              h.sendWithPromise('TextStyledElement.setBackgroundColor', {
                impl: this.id,
                red: t,
                green: e,
                blue: n,
              })
            );
          }),
          (h.List.prototype.asContentElement = function () {
            return h
              .sendWithPromise('List.asContentElement', { self: this.id })
              .then(function (t) {
                return _(h.ContentElement, t);
              });
          }),
          (h.List.prototype.setNumberFormat = function (t, e, n) {
            return (
              f(
                arguments.length,
                3,
                'setNumberFormat',
                '(number, string, boolean)',
                [
                  [t, 'number'],
                  [e, 'string'],
                  [n, 'boolean'],
                ]
              ),
              h.sendWithPromise('List.setNumberFormat', {
                self: this.id,
                format: t,
                suffix: e,
                cascade: n,
              })
            );
          }),
          (h.List.prototype.setStartIndex = function (t) {
            return (
              f(arguments.length, 1, 'setStartIndex', '(number)', [
                [t, 'number'],
              ]),
              h.sendWithPromise('List.setStartIndex', { self: this.id, idx: t })
            );
          }),
          (h.List.prototype.addItem = function () {
            return h
              .sendWithPromise('List.addItem', { self: this.id })
              .then(function (t) {
                return _(h.ListItem, t);
              });
          }),
          (h.List.prototype.getIndentationLevel = function () {
            return h.sendWithPromise('List.getIndentationLevel', {
              self: this.id,
            });
          }),
          (h.List.prototype.getListIdentifier = function () {
            return h.sendWithPromise('List.getListIdentifier', {
              self: this.id,
            });
          }),
          (h.List.prototype.continueList = function () {
            return h.sendWithPromise('List.continueList', { self: this.id });
          }),
          (h.List.prototype.getContentNodeIterator = function () {
            return h
              .sendWithPromise('List.getContentNodeIterator', { self: this.id })
              .then(function (t) {
                return D(h.Iterator, t, 'ContentElement');
              });
          }),
          (h.List.prototype.getTextStyledElement = function () {
            return h
              .sendWithPromise('List.getTextStyledElement', { self: this.id })
              .then(function (t) {
                return _(h.TextStyledElement, t);
              });
          }),
          (h.ListItem.prototype.asContentElement = function () {
            return h
              .sendWithPromise('ListItem.asContentElement', { self: this.id })
              .then(function (t) {
                return _(h.ContentElement, t);
              });
          }),
          (h.ListItem.prototype.addParagraph = function () {
            return h
              .sendWithPromise('ListItem.addParagraph', { self: this.id })
              .then(function (t) {
                return _(h.Paragraph, t);
              });
          }),
          (h.ListItem.prototype.addParagraphWithText = function (t) {
            return (
              f(arguments.length, 1, 'addParagraphWithText', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('ListItem.addParagraphWithText', {
                  self: this.id,
                  text: t,
                })
                .then(function (t) {
                  return _(h.Paragraph, t);
                })
            );
          }),
          (h.ListItem.prototype.addList = function () {
            return h
              .sendWithPromise('ListItem.addList', { self: this.id })
              .then(function (t) {
                return _(h.List, t);
              });
          }),
          (h.ListItem.prototype.getIndentationLevel = function () {
            return h.sendWithPromise('ListItem.getIndentationLevel', {
              self: this.id,
            });
          }),
          (h.ListItem.prototype.getListIdentifier = function () {
            return h.sendWithPromise('ListItem.getListIdentifier', {
              self: this.id,
            });
          }),
          (h.ListItem.prototype.getItemIndex = function () {
            return h.sendWithPromise('ListItem.getItemIndex', {
              self: this.id,
            });
          }),
          (h.ListItem.prototype.getContentNodeIterator = function () {
            return h
              .sendWithPromise('ListItem.getContentNodeIterator', {
                self: this.id,
              })
              .then(function (t) {
                return D(h.Iterator, t, 'ContentElement');
              });
          }),
          (h.ListItem.prototype.getTextStyledElement = function () {
            return h
              .sendWithPromise('ListItem.getTextStyledElement', {
                self: this.id,
              })
              .then(function (t) {
                return _(h.TextStyledElement, t);
              });
          });
        var g,
          f = function (t, e, i, r, n) {
            var o = n.length;
            if (e === o) {
              if (t !== e)
                throw new RangeError(
                  t +
                    " arguments passed into function '" +
                    i +
                    "'. Expected " +
                    e +
                    ' argument. Function Signature: ' +
                    i +
                    r
                );
            } else if (e <= 0) {
              if (o < t)
                throw new RangeError(
                  t +
                    " arguments passed into function '" +
                    i +
                    "'. Expected at most " +
                    o +
                    ' arguments. Function Signature: ' +
                    i +
                    r
                );
            } else if (t < e || o < t)
              throw new RangeError(
                t +
                  " arguments passed into function '" +
                  i +
                  "'. Expected " +
                  e +
                  ' to ' +
                  o +
                  ' arguments. Function Signature: ' +
                  i +
                  r
              );
            function s(t, e, n) {
              throw new TypeError(
                m(t) +
                  " input argument in function '" +
                  i +
                  "' is of type '" +
                  e +
                  "'. Expected type '" +
                  n +
                  "'. Function Signature: " +
                  i +
                  r
              );
            }
            for (
              t = function (t, e, n) {
                'object' === d(t) && t.name ? s(e, t.name, n) : s(e, d(t), n);
              },
                e = 0;
              e < o;
              e++
            ) {
              var u = n[e],
                a = u[0],
                c = u[1];
              if (a instanceof Promise)
                throw new TypeError(
                  m(e) +
                    " input argument in function '" +
                    i +
                    "' is a Promise object. Promises require a 'yield' statement before being accessed."
                );
              if ('OptionBase' === c) {
                if (a)
                  if ('object' === d(a)) {
                    if ('function' != typeof a.getJsonString)
                      throw new TypeError(
                        m(e) +
                          " input argument in function '" +
                          i +
                          "' is an 'oject' which is expected to have the 'getJsonString' function"
                      );
                  } else s(e, a.name, 'object');
              } else
                'Array' === c
                  ? Array.isArray(a) || t(a, e, 'Array')
                  : 'ArrayBuffer' === c
                    ? l.isArrayBuffer(a) ||
                      l.isArrayBuffer(a.buffer) ||
                      t(a, e, 'ArrayBuffer|TypedArray')
                    : 'ArrayAsBuffer' === c
                      ? Array.isArray(a) ||
                        l.isArrayBuffer(a) ||
                        l.isArrayBuffer(a.buffer) ||
                        t(a, e, 'ArrayBuffer|TypedArray')
                      : 'PDFDoc' === c || 'SDFDoc' === c || 'FDFDoc' === c
                        ? a instanceof h.PDFDoc ||
                          a instanceof h.SDFDoc ||
                          a instanceof h.FDFDoc ||
                          t(a, e, 'PDFDoc|SDFDoc|FDFDoc')
                        : 'Structure' === c
                          ? a instanceof u[2] ||
                            !a ||
                            a.name === u[3] ||
                            t(a, e, u[3])
                          : 'OptionObject' === c
                            ? a instanceof u[2] ||
                              ('object' === d(a) && a.name
                                ? a.name !== u[4] && s(e, a.name, u[3])
                                : s(e, d(a), u[3]))
                            : 'Object' === c
                              ? a instanceof u[2] || t(a, e, u[3])
                              : 'const char* = 0' === c
                                ? 'string' != typeof a &&
                                  null !== a &&
                                  s(e, d(a), 'string')
                                : d(a) !== c && s(e, d(a), c);
            }
          },
          P = function (t, e) {
            if (void 0 !== e)
              throw Error(
                'Function ' +
                  e +
                  " recently altered a struct object without yielding. That object is now being accessed by function '" +
                  t +
                  "'. Perhaps a yield statement is required for " +
                  e +
                  '?'
              );
          },
          F = function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n],
                r = i[0];
              if (r && void 0 !== r.yieldFunction)
                throw Error(
                  "Function '" +
                    r.yieldFunction +
                    "' recently altered a struct object without yielding. That object is now being accessed by the " +
                    m(i[1]) +
                    " input argument in function '" +
                    t +
                    "'. Perhaps a yield statement is required for '" +
                    r.yieldFunction +
                    "'?"
                );
            }
          },
          b = function (t, e) {
            var n = t;
            return (
              e && t.constructor === Array && (n = new Float64Array(t)),
              l.isArrayBuffer(n) ||
                ((n = n.buffer),
                t.byteLength < n.byteLength &&
                  (n = n.slice(t.byteOffset, t.byteOffset + t.byteLength))),
              n
            );
          },
          y = function (n, t) {
            return n.name === t
              ? h.ObjSet.create().then(function (t) {
                  var e =
                    'function' == typeof n.getJsonString
                      ? n.getJsonString()
                      : JSON.stringify(n);
                  return t.createFromJson(e);
                })
              : Promise.resolve(n);
          },
          D =
            ((c = []),
            (o = []),
            (s = n = 0),
            (u = []),
            (a = []),
            l.PDFTron &&
              PDFTron.WebViewer &&
              PDFTron.WebViewer.prototype &&
              PDFTron.WebViewer.prototype.version &&
              PDFTron.skipPDFNetWebViewerWarning,
            function (t, e, n) {
              return '0' === e
                ? null
                : ((t = new t(e, n)), c.push({ name: t.name, id: t.id }), t);
            }),
          _ = function (t, e, n) {
            return '0' === e ? null : new t(e, n);
          },
          S = function (t) {
            for (var e = -1, n = o.length - 1; 0 <= n; n--)
              if (o[n].id == t.id) {
                e = n;
                break;
              }
            if (-1 != e)
              for (o.splice(e, 1), n = a.length - 1; 0 <= n && e < a[n]; n--)
                --a[n];
          },
          O = function (t) {
            for (var e = -1, n = c.length - 1; 0 <= n; n--)
              if (c[n].id == t) {
                e = n;
                break;
              }
            if (-1 != e)
              for (c.splice(e, 1), n = u.length - 1; 0 <= n && e < u[n]; n--)
                --u[n];
          },
          W =
            ((h.messageHandler = {
              sendWithPromiseReturnId: function () {
                throw Error(
                  'PDFNet.initialize must be called and finish resolving before any other PDFNetJS function calls.'
                );
              },
            }),
            (h.userPriority = 2),
            (h.sendWithPromise = function (t, e) {
              var n = this.messageHandler,
                i = n.sendWithPromiseReturnId(t, e, this.userPriority);
              return (
                (n.pdfnetCommandChain =
                  0 == n.pdfnetActiveCommands.size
                    ? i.promise
                    : n.pdfnetCommandChain.then(function () {
                        return i.promise;
                      })),
                n.pdfnetActiveCommands.add(i.callbackId),
                n.pdfnetCommandChain
              );
            }),
            function (t, e) {
              for (var n in t) e[n] = t[n];
            }),
          A =
            ((h.runGeneratorWithoutCleanup = function (t, e) {
              return (
                void 0 === e && (e = ''),
                f(
                  arguments.length,
                  1,
                  'runGeneratorWithoutCleanup',
                  '(object, string)',
                  [
                    [t, 'object'],
                    [e, 'string'],
                  ]
                ),
                h.runWithoutCleanup(function () {
                  return r(t);
                }, e)
              );
            }),
            (h.runGeneratorWithCleanup = function (t, e) {
              return (
                void 0 === e && (e = ''),
                f(
                  arguments.length,
                  1,
                  'runGeneratorWithCleanup',
                  '(object, string)',
                  [
                    [t, 'object'],
                    [e, 'string'],
                  ]
                ),
                h.runWithCleanup(function () {
                  return r(t);
                }, e)
              );
            }),
            Promise.resolve()),
          C =
            ((h.displayAllocatedObjects = function () {
              if (0 != c.length) for (var t = 0; t < c.length; t++);
              return c.length;
            }),
            (h.getAllocatedObjectsCount = function () {
              return c.length;
            }),
            (h.startDeallocateStack = function () {
              return (
                (s += 1), u.push(c.length), a.push(o.length), Promise.resolve()
              );
            }),
            (h.endDeallocateStack = function () {
              if (0 === s) return Promise.resolve();
              var t = u.pop(),
                e = a.pop(),
                n = [],
                i = [];
              if (void 0 !== e && 0 !== o.length && o.length !== e)
                for (; o.length > e; ) {
                  var r = o.pop();
                  (r = (r = h.sendWithPromise(r.name + '.' + r.unlocktype, {
                    doc: r.id,
                  })).catch(function (t) {})),
                    n.push(r);
                }
              if (void 0 !== t && 0 !== c.length && c.length !== t)
                for (; c.length > t; )
                  (e = c.pop()),
                    (e = (e = h.sendWithPromise(e.name + '.destroy', {
                      auto_dealloc_obj: e.id,
                    })).catch(function (t) {})),
                    i.push(e);
              return (
                --s,
                Promise.all(n).then(function () {
                  return Promise.all(i);
                })
              );
            }),
            (h.getStackCount = function () {
              return Promise.resolve(s);
            }),
            (h.deallocateAllObjects = function () {
              var t;
              if (0 == c.length)
                return (t = createPromiseCapability()).resolve(), t.promise;
              for (t = [], u = []; o.length; )
                (objToUnlock = o.pop()),
                  (unlockPromise = (unlockPromise = h.sendWithPromise(
                    objToUnlock.name + '.' + objToUnlock.unlocktype,
                    { doc: objToUnlock.id }
                  )).catch(function (t) {})),
                  t.push(unlockPromise);
              for (; c.length; ) {
                var e = c.pop();
                (e = (e = h.sendWithPromise(e.name + '.destroy', {
                  auto_dealloc_obj: e.id,
                })).catch(function (t) {})),
                  t.push(e);
              }
              return Promise.all(t);
            }),
            (h.Redactor.redact = function (t, e, n, i, r) {
              return (
                void 0 === (n = void 0 === n ? {} : n).redaction_overlay &&
                  (n.redaction_overlay = !0),
                void 0 === n.positive_overlay_color
                  ? (n.positive_overlay_color = void 0)
                  : void 0 !== n.positive_overlay_color.id &&
                    (n.positive_overlay_color = n.positive_overlay_color.id),
                void 0 === n.negative_overlay_color
                  ? (n.negative_overlay_color = void 0)
                  : void 0 !== n.negative_overlay_color.id &&
                    (n.negative_overlay_color = n.negative_overlay_color.id),
                void 0 === n.border && (n.border = !0),
                void 0 === n.use_overlay_text && (n.use_overlay_text = !0),
                void 0 === n.font
                  ? (n.font = void 0)
                  : void 0 !== n.font.id && (n.font = n.font.id),
                void 0 === n.min_font_size && (n.min_font_size = 2),
                void 0 === n.max_font_size && (n.max_font_size = 24),
                void 0 === n.text_color
                  ? (n.text_color = void 0)
                  : void 0 !== n.text_color.id &&
                    (n.text_color = n.text_color.id),
                void 0 === n.horiz_text_alignment &&
                  (n.horiz_text_alignment = -1),
                void 0 === n.vert_text_alignment && (n.vert_text_alignment = 1),
                void 0 === n.show_redacted_content_regions &&
                  (n.show_redacted_content_regions = !1),
                void 0 === n.redacted_content_color
                  ? (n.redacted_content_color = void 0)
                  : void 0 !== n.redacted_content_color.id &&
                    (n.redacted_content_color = n.redacted_content_color.id),
                void 0 === i && (i = !0),
                void 0 === r && (r = !0),
                f(
                  arguments.length,
                  2,
                  'redact',
                  '(PDFNet.PDFDoc, Array<Core.PDFNet.Redaction>, object, boolean, boolean)',
                  [
                    [t, 'PDFDoc'],
                    [e, 'Array'],
                    [n, 'object'],
                    [i, 'boolean'],
                    [r, 'boolean'],
                  ]
                ),
                h.sendWithPromise('redactorRedact', {
                  doc: t.id,
                  red_arr: e,
                  appearance: n,
                  ext_neg_mode: i,
                  page_coord_sys: r,
                })
              );
            }),
            (h.Highlights.prototype.getCurrentQuads = function () {
              return h
                .sendWithPromise('Highlights.getCurrentQuads', {
                  hlts: this.id,
                })
                .then(function (t) {
                  t = new Float64Array(t);
                  for (var e, n = [], i = 0; i < t.length; i += 8)
                    (e = h.QuadPoint(
                      t[i + 0],
                      t[i + 1],
                      t[i + 2],
                      t[i + 3],
                      t[i + 4],
                      t[i + 5],
                      t[i + 6],
                      t[i + 7]
                    )),
                      n.push(e);
                  return n;
                });
            }),
            (h.TextSearch.prototype.run = function () {
              if (0 != arguments.length)
                throw new RangeError(
                  arguments.length +
                    " arguments passed into function 'run'. Expected 0 arguments. Function Signature: run()"
                );
              return h
                .sendWithPromise('TextSearch.run', { ts: this.id })
                .then(function (t) {
                  return (
                    (t.highlights = new h.Highlights(t.highlights)),
                    '0' != t.highlights.id &&
                      c.push({ name: t.highlights.name, id: t.highlights.id }),
                    t
                  );
                });
            }),
            (h.Iterator.prototype.current = function () {
              if (0 != arguments.length)
                throw new RangeError(
                  arguments.length +
                    " arguments passed into function 'fillEncryptDict'. Expected 0 argument."
                );
              var e = this,
                t =
                  ((this.yieldFunction = 'Iterator.current'),
                  h.sendWithPromise('Iterator.current', {
                    itr: this.id,
                    type: this.type,
                  }));
              return (
                (e.yieldFunction = void 0),
                (t =
                  'Int' != this.type
                    ? t.then(function (t) {
                        return new h[e.type](t);
                      })
                    : t)
              );
            }),
            (h.PDFDoc.prototype.getFileData = function (t) {
              t({ type: 'id', id: this.id });
            }),
            (h.PDFDoc.prototype.getFile = function (t) {
              return null;
            }),
            (h.PDFDoc.createFromURL = function (t, e) {
              return (
                void 0 === e && (e = {}),
                f(arguments.length, 1, 'createFromURL', '(string, object)', [
                  [t, 'string'],
                  [e, 'object'],
                ]),
                p(t, e).then(function (t) {
                  return h.PDFDoc.createFromBuffer(t);
                })
              );
            }),
            (h.PDFDraw.prototype.exportBuffer = function (t, e, n) {
              return (
                void 0 === e && (e = 'PNG'),
                void 0 === n && (n = new h.Obj('0')),
                f(
                  arguments.length,
                  1,
                  'exportBuffer',
                  '(PDFNet.Page, string, PDFNet.Obj)',
                  [
                    [t, 'Object', h.Page, 'Page'],
                    [e, 'string'],
                    [n, 'Object', h.Obj, 'Obj'],
                  ]
                ),
                h
                  .sendWithPromise('PDFDraw.exportBuffer', {
                    d: this.id,
                    page: t.id,
                    format: e,
                    encoder_params: n.id,
                  })
                  .then(function (t) {
                    return '0' == t ? null : new Uint8Array(t);
                  })
              );
            }),
            (h.PDFDraw.prototype.exportStream =
              h.PDFDraw.prototype.exportBuffer),
            (h.Element.prototype.getTextData = function () {
              if (0 != arguments.length)
                throw new RangeError(
                  arguments.length +
                    " arguments passed into function 'getTextData'. Expected 0 arguments. Function Signature: getTextData()"
                );
              return h.sendWithPromise('Element.getTextData', { e: this.id });
            }),
            (h.Element.prototype.getPathData = function () {
              if (0 != arguments.length)
                throw new RangeError(
                  arguments.length +
                    " arguments passed into function 'getPathData'. Expected 0 arguments. Function Signature: getPathData()"
                );
              return h
                .sendWithPromise('Element.getPathData', { e: this.id })
                .then(function (t) {
                  return (
                    (t.operators = new Uint8Array(t.operators)),
                    (t.points = new Float64Array(t.points)),
                    t
                  );
                });
            }),
            (h.PDFDoc.prototype.convertToXod = function (t) {
              return (
                void 0 === t && (t = new h.Obj('0')),
                f(arguments.length, 0, 'convertToXod', '(PDFNet.Obj)', [
                  [
                    t,
                    'OptionObject',
                    h.Obj,
                    'Obj',
                    'PDFNet.Convert.XODOutputOptions',
                  ],
                ]),
                h
                  .sendWithPromise('PDFDoc.convertToXod', {
                    doc: this.id,
                    optionsObject: t,
                  })
                  .then(function (t) {
                    return '0' == t ? null : new Uint8Array(t);
                  })
              );
            }),
            (h.PDFDoc.prototype.convertToXodStream = function (t) {
              return (
                void 0 === t && (t = new h.Obj('0')),
                f(arguments.length, 0, 'convertToXod', '(PDFNet.Obj)', [
                  [
                    t,
                    'OptionObject',
                    h.Obj,
                    'Obj',
                    'PDFNet.Convert.XODOutputOptions',
                  ],
                ]),
                h
                  .sendWithPromise('PDFDoc.convertToXodStream', {
                    doc: this.id,
                    optionsObject: t,
                  })
                  .then(function (t) {
                    return '0' == t ? null : new h.Filter(t);
                  })
              );
            }),
            (h.FilterReader.prototype.read = function (t) {
              return (
                f(arguments.length, 1, 'read', '(number)', [[t, 'number']]),
                h
                  .sendWithPromise('FilterReader.read', {
                    reader: this.id,
                    buf_size: t,
                  })
                  .then(function (t) {
                    return '0' == t ? null : new Uint8Array(t);
                  })
              );
            }),
            (h.FilterReader.prototype.readAllIntoBuffer = function () {
              if (0 != arguments.length)
                throw new RangeError(
                  arguments.length +
                    " arguments passed into function 'readAllIntoBuffer'. Expected 0 arguments. Function Signature: readAllIntoBuffer()"
                );
              return h
                .sendWithPromise('FilterReader.readAllIntoBuffer', {
                  reader: this.id,
                })
                .then(function (t) {
                  return '0' == t ? null : new Uint8Array(t);
                });
            }),
            (h.bitmapInfo = function (t) {
              W(t, this);
            }),
            (h.PDFDraw.prototype.getBitmap = function (t, e, n) {
              return (
                f(
                  arguments.length,
                  3,
                  'getBitmap',
                  '(PDFNet.Page, number, boolean)',
                  [
                    [t, 'Object', h.Page, 'Page'],
                    [e, 'number'],
                    [n, 'boolean'],
                  ]
                ),
                h
                  .sendWithPromise('PDFDraw.getBitmap', {
                    d: this.id,
                    page: t.id,
                    pix_fmt: e,
                    demult: n,
                  })
                  .then(function (t) {
                    return '0' == t ? null : new h.bitmapInfo(t);
                  })
              );
            }),
            (h.Matrix2D.create = function (t, e, n, i, r, o) {
              null == t && (t = 0),
                null == e && (e = 0),
                null == n && (n = 0),
                null == i && (i = 0),
                null == r && (r = 0),
                null == o && (o = 0),
                f(
                  arguments.length,
                  0,
                  'create',
                  '(number, number, number, number, number, number)',
                  [
                    [t, 'number'],
                    [e, 'number'],
                    [n, 'number'],
                    [i, 'number'],
                    [r, 'number'],
                    [o, 'number'],
                  ]
                );
              var s = createPromiseCapability(),
                u = new h.Matrix2D({
                  m_a: t,
                  m_b: e,
                  m_c: n,
                  m_d: i,
                  m_h: r,
                  m_v: o,
                });
              return s.resolve(u), s.promise;
            }),
            (h.PDFDoc.prototype.getPDFDoc = function () {
              return h
                .sendWithPromise('GetPDFDoc', { doc: this.id })
                .then(function (t) {
                  return '0' == t ? null : new h.PDFDoc(t);
                });
            }),
            (h.TextExtractorLine.prototype.getBBox = function () {
              if (0 != arguments.length)
                throw new RangeError(
                  arguments.length +
                    " arguments passed into function 'getBBox'. Expected 0 arguments. Function Signature: getBBox()"
                );
              P('getBBox', this.yieldFunction);
              var e = this;
              return (
                (this.yieldFunction = 'TextExtractorLine.getBBox'),
                h
                  .sendWithPromise('TextExtractorLine.getBBox', { line: this })
                  .then(function (t) {
                    return (
                      (e.yieldFunction = void 0),
                      new h.Rect(
                        t.result.x1,
                        t.result.y1,
                        t.result.x2,
                        t.result.y2,
                        t.result.mp_rect
                      )
                    );
                  })
              );
            }),
            (h.TextExtractorLine.prototype.getQuad = function () {
              if (0 != arguments.length)
                throw new RangeError(
                  arguments.length +
                    " arguments passed into function 'getQuad'. Expected 0 arguments. Function Signature: getQuad()"
                );
              P('getQuad', this.yieldFunction);
              var e = this;
              return (
                (this.yieldFunction = 'TextExtractorLine.getQuad'),
                h
                  .sendWithPromise('TextExtractorLine.getQuad', { line: this })
                  .then(function (t) {
                    return (
                      (e.yieldFunction = void 0),
                      new h.QuadPoint(
                        t.result.p1x,
                        t.result.p1y,
                        t.result.p2x,
                        t.result.p2y,
                        t.result.p3x,
                        t.result.p3y,
                        t.result.p4x,
                        t.result.p4y
                      )
                    );
                  })
              );
            }),
            (h.TextExtractorWord.prototype.getBBox = function () {
              if (0 != arguments.length)
                throw new RangeError(
                  arguments.length +
                    " arguments passed into function 'getBBox'. Expected 0 arguments. Function Signature: getBBox()"
                );
              P('getBBox', this.yieldFunction);
              var e = this;
              return (
                (this.yieldFunction = 'TextExtractorWord.getBBox'),
                h
                  .sendWithPromise('TextExtractorWord.getBBox', { tew: this })
                  .then(function (t) {
                    return (
                      (e.yieldFunction = void 0),
                      new h.Rect(
                        t.result.x1,
                        t.result.y1,
                        t.result.x2,
                        t.result.y2,
                        t.result.mp_rect
                      )
                    );
                  })
              );
            }),
            (h.TextExtractorWord.prototype.getQuad = function () {
              if (0 != arguments.length)
                throw new RangeError(
                  arguments.length +
                    " arguments passed into function 'getQuad'. Expected 0 arguments. Function Signature: getQuad()"
                );
              P('getQuad', this.yieldFunction);
              var e = this;
              return (
                (this.yieldFunction = 'TextExtractorWord.getQuad'),
                h
                  .sendWithPromise('TextExtractorWord.getQuad', { tew: this })
                  .then(function (t) {
                    return (
                      (e.yieldFunction = void 0),
                      new h.QuadPoint(
                        t.result.p1x,
                        t.result.p1y,
                        t.result.p2x,
                        t.result.p2y,
                        t.result.p3x,
                        t.result.p3y,
                        t.result.p4x,
                        t.result.p4y
                      )
                    );
                  })
              );
            }),
            (h.TextExtractorWord.prototype.getGlyphQuad = function (t) {
              f(arguments.length, 1, 'getGlyphQuad', '(number)', [
                [t, 'number'],
              ]),
                P('getGlyphQuad', this.yieldFunction);
              var e = this;
              return (
                (this.yieldFunction = 'TextExtractorWord.getGlyphQuad'),
                h
                  .sendWithPromise('TextExtractorWord.getGlyphQuad', {
                    tew: this,
                    glyph_idx: t,
                  })
                  .then(function (t) {
                    return (
                      (e.yieldFunction = void 0),
                      new h.QuadPoint(
                        t.result.p1x,
                        t.result.p1y,
                        t.result.p2x,
                        t.result.p2y,
                        t.result.p3x,
                        t.result.p3y,
                        t.result.p4x,
                        t.result.p4y
                      )
                    );
                  })
              );
            }),
            (h.TextExtractorStyle.prototype.getColor = function () {
              if (0 != arguments.length)
                throw new RangeError(
                  arguments.length +
                    " arguments passed into function 'getColor'. Expected 0 arguments. Function Signature: getColor()"
                );
              P('getColor', this.yieldFunction);
              var e = this;
              return (
                (this.yieldFunction = 'TextExtractorStyle.getColor'),
                h
                  .sendWithPromise('TextExtractorStyle.getColor', { tes: this })
                  .then(function (t) {
                    return (
                      (e.yieldFunction = void 0),
                      '0' == t ? null : new h.ColorPt(t)
                    );
                  })
              );
            }),
            (h.TextExtractorWord.prototype.getString = function () {
              if (0 != arguments.length)
                throw new RangeError(
                  arguments.length +
                    " arguments passed into function 'getString'. Expected 0 arguments. Function Signature: getString()"
                );
              P('getString', this.yieldFunction);
              var e = this;
              return (
                (this.yieldFunction = 'TextExtractorWord.getString'),
                h
                  .sendWithPromise('TextExtractorWord.getString', { tew: this })
                  .then(function (t) {
                    return (e.yieldFunction = void 0), t;
                  })
              );
            }),
            (h.TextExtractor.prototype.getHighlights = function (t) {
              return (
                f(arguments.length, 1, 'getHighlights', '(Array<object>)', [
                  [t, 'Array'],
                ]),
                h
                  .sendWithPromise('TextExtractor.getHighlights', {
                    te: this.id,
                    char_ranges: t,
                  })
                  .then(function (t) {
                    return D(h.Highlights, t);
                  })
              );
            }),
            (h.SecurityHandler.prototype.changeUserPasswordNonAscii = function (
              t
            ) {
              return (
                f(
                  arguments.length,
                  1,
                  'changeUserPasswordNonAscii',
                  '(string)',
                  [[t, 'string']]
                ),
                h.sendWithPromise(
                  'SecurityHandler.changeUserPasswordNonAscii',
                  { sh: this.id, password: t, pwd_length: t.length }
                )
              );
            }),
            (h.SecurityHandler.prototype.changeMasterPasswordNonAscii =
              function (t) {
                return (
                  f(
                    arguments.length,
                    1,
                    'changeMasterPasswordNonAscii',
                    '(string)',
                    [[t, 'string']]
                  ),
                  h.sendWithPromise(
                    'SecurityHandler.changeMasterPasswordNonAscii',
                    { sh: this.id, password: t, pwd_length: t.length }
                  )
                );
              }),
            (h.SecurityHandler.prototype.initPassword = function (t) {
              return (
                f(arguments.length, 1, 'initPassword', '(string)', [
                  [t, 'string'],
                ]),
                h.sendWithPromise('SecurityHandler.initPassword', {
                  sh: this.id,
                  password: t,
                })
              );
            }),
            (h.SecurityHandler.prototype.initPasswordNonAscii = function (t) {
              return (
                f(arguments.length, 1, 'initPasswordNonAscii', '(string)', [
                  [t, 'string'],
                ]),
                h.sendWithPromise('SecurityHandler.initPasswordNonAscii', {
                  sh: this.id,
                  password: t,
                  pwd_length: t.length,
                })
              );
            }),
            (h.Element.prototype.getBBox = function () {
              if (0 != arguments.length)
                throw new RangeError(
                  arguments.length +
                    " arguments passed into function 'getBBox'. Expected 0 arguments. Function Signature: getBBox()"
                );
              var e = this;
              return (
                (this.yieldFunction = 'Element.getBBox'),
                h
                  .sendWithPromise('Element.getBBox', { e: this.id })
                  .then(function (t) {
                    return (e.yieldFunction = void 0), new h.Rect(t);
                  })
              );
            }),
            (h.Matrix2D.prototype.mult = function (t, e) {
              return (
                f(arguments.length, 2, 'create', '(number, number)', [
                  [t, 'number'],
                  [e, 'number'],
                ]),
                P('mult', this.yieldFunction),
                h.sendWithPromise('Matrix2D.mult', { matrix: this, x: t, y: e })
              );
            }),
            (h.Obj.prototype.getAsPDFText = function () {
              if (0 != arguments.length)
                throw new RangeError(
                  arguments.length +
                    " arguments passed into function 'getAsPDFText'. Expected 0 arguments. Function Signature: getAsPDFText()"
                );
              return h.sendWithPromise('Obj.getAsPDFText', { o: this.id });
            }),
            (h.PDFDoc.prototype.initSecurityHandler = function (t) {
              if ((void 0 === t && (t = 0), 1 < arguments.length))
                throw new RangeError(
                  arguments.length +
                    " arguments passed into function 'initSecurityHandler'. Expected at most 1 arguments. Function Signature: initSecurityHandler(void*)"
                );
              return h.sendWithPromise('PDFDoc.initSecurityHandler', {
                doc: this.id,
                custom_data: t,
              });
            }),
            (h.PDFDoc.prototype.initStdSecurityHandler =
              h.PDFDoc.prototype.initStdSecurityHandlerUString),
            (h.SDFDoc.prototype.initSecurityHandler = function (t) {
              if ((void 0 === t && (t = 0), 1 < arguments.length))
                throw new RangeError(
                  arguments.length +
                    " arguments passed into function 'initSecurityHandler'. Expected at most 1 arguments. Function Signature: initSecurityHandler(void*)"
                );
              return h.sendWithPromise('SDFDoc.initSecurityHandler', {
                doc: this.id,
                custom_data: t,
              });
            }),
            (h.SDFDoc.prototype.initStdSecurityHandler =
              h.SDFDoc.prototype.initStdSecurityHandlerUString),
            (h.Image.createFromURL = function (e, t, n, i) {
              return (
                void 0 === n && (n = new h.Obj('0')),
                void 0 === i && (i = {}),
                f(
                  arguments.length,
                  2,
                  'createFromURL',
                  '(PDFNet.PDFDoc, string, PDFNet.Obj, object)',
                  [
                    [e, 'PDFDoc'],
                    [t, 'string'],
                    [n, 'Object', h.Obj, 'Obj'],
                    [i, 'object'],
                  ]
                ),
                p(t, i).then(function (t) {
                  return h.Image.createFromMemory2(e, t, n);
                })
              );
            }),
            (h.PDFDoc.prototype.addStdSignatureHandlerFromURL = function (
              t,
              e
            ) {
              f(
                arguments.length,
                2,
                'addStdSignatureHandlerFromURL',
                '(string, string)',
                [
                  [t, 'string'],
                  [e, 'string'],
                ]
              );
              var n = this;
              return p(t).then(function (t) {
                return n.addStdSignatureHandlerFromBufferWithDoc(t, e, n);
              });
            }),
            (h.PDFDoc.prototype.addStdSignatureHandlerFromBufferWithDoc =
              function (t, e, n) {
                return (
                  f(
                    arguments.length,
                    3,
                    'addStdSignatureHandlerFromBufferWithDoc',
                    '(ArrayBuffer|TypedArray, string, PDFNet.PDFDoc)',
                    [
                      [t, 'ArrayBuffer'],
                      [e, 'string'],
                      [n, 'PDFDoc'],
                    ]
                  ),
                  h.sendWithPromise('PDFDoc.addStdSignatureHandlerFromBuffer', {
                    doc: n.id,
                    pkcs12_buffer: t.buffer,
                    pkcs12_pass: e,
                  })
                );
              }),
            (h.Filter.createFromMemory = function (t) {
              f(
                arguments.length,
                1,
                'createFromMemory',
                '(ArrayBuffer|TypedArray)',
                [[t, 'ArrayBuffer']]
              );
              var e = b(t, !1);
              return h
                .sendWithPromise('filterCreateFromMemory', { buf: e })
                .then(function (t) {
                  return '0' == t
                    ? null
                    : ((t = new h.Filter(t)),
                      c.push({ name: t.name, id: t.id }),
                      t);
                });
            }),
            (h.Filter.createURLFilter = function (t, e) {
              return (
                void 0 === e && (e = {}),
                f(arguments.length, 1, 'createURLFilter', '(string, object)', [
                  [t, 'string'],
                  [e, 'object'],
                ]),
                p(t, e).then(function (t) {
                  return h.Filter.createFromMemory(t);
                })
              );
            }),
            (h.Filter.createFlateEncode = function (t, e, n) {
              return (
                void 0 === t && (t = new h.Filter('0')),
                void 0 === e && (e = -1),
                void 0 === n && (n = 256),
                f(
                  arguments.length,
                  0,
                  'createFlateEncode',
                  '(PDFNet.Filter, number, number)',
                  [
                    [t, 'Object', h.Filter, 'Filter'],
                    [e, 'number'],
                    [n, 'number'],
                  ]
                ),
                h
                  .sendWithPromise('Filter.createFlateEncode', {
                    input_filter: t.id,
                    compression_level: e,
                    buf_sz: n,
                  })
                  .then(function (t) {
                    return '0' == t
                      ? null
                      : ((t = new h.Filter(t)),
                        c.push({ name: t.name, id: t.id }),
                        t);
                  })
              );
            }),
            (h.PDFDoc.prototype.importPages = function (t, e) {
              return (
                void 0 === e && (e = !1),
                f(
                  arguments.length,
                  1,
                  'importPages',
                  '(Array<Core.PDFNet.Page>, boolean)',
                  [
                    [t, 'Array'],
                    [e, 'boolean'],
                  ]
                ),
                (t = t.map(function (t) {
                  return t.id;
                })),
                h
                  .sendWithPromise('PDFDoc.importPages', {
                    doc: this.id,
                    page_arr: t,
                    import_bookmarks: e,
                  })
                  .then(function (t) {
                    return t
                      ? t.map(function (t) {
                          return new h.Page(t);
                        })
                      : null;
                  })
              );
            }),
            (h.SDFDoc.prototype.applyCustomQuery = function (t) {
              return (
                f(arguments.length, 1, 'applyCustomQuery', '(object)', [
                  [t, 'object'],
                ]),
                h
                  .sendWithPromise('SDFDoc.applyCustomQuery', {
                    doc: this.id,
                    query: JSON.stringify(t),
                  })
                  .then(function (t) {
                    return JSON.parse(t);
                  })
              );
            }),
            h.PDFDoc.prototype.saveMemoryBuffer),
          j = h.PDFDoc.prototype.saveStream;
        (h.PDFDoc.prototype.saveMemoryBuffer = function (t) {
          var e = this;
          return Promise.resolve(e.documentCompletePromise).then(function () {
            return C.call(e, t);
          });
        }),
          (h.PDFDoc.prototype.saveStream = function (t) {
            var e = this;
            return Promise.resolve(e.documentCompletePromise).then(function () {
              return j.call(e, t);
            });
          }),
          (h.PDFACompliance.createFromUrl = function (e, t, n, i, r, o, s) {
            return (
              void 0 === n && (n = ''),
              void 0 === i && (i = h.PDFACompliance.Conformance.e_Level1B),
              void 0 === r && (r = new Int32Array(0)),
              void 0 === o && (o = 10),
              void 0 === s && (s = !1),
              f(
                arguments.length,
                2,
                'createFromUrl',
                '(boolean, string, string, number, ArrayBuffer|TypedArray, number, boolean)',
                [
                  [e, 'boolean'],
                  [t, 'string'],
                  [n, 'string'],
                  [i, 'number'],
                  [r, 'ArrayBuffer'],
                  [o, 'number'],
                  [s, 'boolean'],
                ]
              ),
              p(t).then(function (t) {
                return h.PDFACompliance.createFromBuffer(e, t, n, i, r, o, s);
              })
            );
          }),
          (h.PDFACompliance.createFromBuffer = function (t, e, n, i, r, o, s) {
            void 0 === n && (n = ''),
              void 0 === i && (i = h.PDFACompliance.Conformance.e_Level1B),
              void 0 === r && (r = new Int32Array(0)),
              void 0 === o && (o = 10),
              void 0 === s && (s = !1),
              f(
                arguments.length,
                2,
                'createFromBuffer',
                '(boolean, ArrayBuffer|TypedArray, string, number, ArrayBuffer|TypedArray, number, boolean)',
                [
                  [t, 'boolean'],
                  [e, 'ArrayBuffer'],
                  [n, 'string'],
                  [i, 'number'],
                  [r, 'ArrayBuffer'],
                  [o, 'number'],
                  [s, 'boolean'],
                ]
              );
            var u = b(e, !1),
              a = b(r, !1);
            return h
              .sendWithPromise('pdfaComplianceCreateFromBuffer', {
                convert: t,
                buf: u,
                password: n,
                conform: i,
                excep: a,
                max_ref_objs: o,
                first_stop: s,
              })
              .then(function (t) {
                return (
                  (t = new h.PDFACompliance(t)),
                  c.push({ name: t.name, id: t.id }),
                  t
                );
              });
          }),
          (h.PDFDoc.prototype.lock = function () {
            if (0 != arguments.length)
              throw new RangeError(
                arguments.length +
                  " arguments passed into function 'lock'. Expected 0 arguments. Function Signature: lock()"
              );
            return (
              o.push({ name: 'PDFDoc', id: this.id, unlocktype: 'unlock' }),
              h.sendWithPromise('PDFDoc.lock', { doc: this.id })
            );
          }),
          (h.PDFDoc.prototype.lockRead = function () {
            if (0 != arguments.length)
              throw new RangeError(
                arguments.length +
                  " arguments passed into function 'lockRead'. Expected 0 arguments. Function Signature: lockRead()"
              );
            return (
              o.push({ name: 'PDFDoc', id: this.id, unlocktype: 'unlockRead' }),
              h.sendWithPromise('PDFDoc.lockRead', { doc: this.id })
            );
          }),
          (h.PDFDoc.prototype.tryLock = function () {
            if (0 != arguments.length)
              throw new RangeError(
                arguments.length +
                  " arguments passed into function 'tryLock'. Expected 0 arguments. Function Signature: tryLock()"
              );
            var e = o.length;
            return (
              o.push({ name: 'PDFDoc', id: this.id, unlocktype: 'unlock' }),
              h
                .sendWithPromise('PDFDoc.tryLock', { doc: this.id })
                .then(function (t) {
                  t || o.splice(e, 1);
                })
            );
          }),
          (h.PDFDoc.prototype.timedLock = function (t) {
            f(arguments.length, 1, 'timedLock', '(number)', [[t, 'number']]);
            var e = o.length;
            return (
              o.push({ name: 'PDFDoc', id: this.id, unlocktype: 'unlock' }),
              h
                .sendWithPromise('PDFDoc.timedLock', {
                  doc: this.id,
                  milliseconds: t,
                })
                .then(function (t) {
                  t || o.splice(e, 1);
                })
            );
          }),
          (h.PDFDoc.prototype.tryLockRead = function () {
            if (0 != arguments.length)
              throw new RangeError(
                arguments.length +
                  " arguments passed into function 'tryLockRead'. Expected 0 arguments. Function Signature: tryLockRead()"
              );
            var e = o.length;
            return (
              o.push({ name: 'PDFDoc', id: this.id, unlocktype: 'unlockRead' }),
              h
                .sendWithPromise('PDFDoc.tryLockRead', { doc: this.id })
                .then(function (t) {
                  t || o.splice(e, 1);
                })
            );
          }),
          (h.PDFDoc.prototype.timedLockRead = function (t) {
            f(arguments.length, 1, 'timedLockRead', '(number)', [
              [t, 'number'],
            ]);
            var e = o.length;
            return (
              o.push({ name: 'PDFDoc', id: this.id, unlocktype: 'unlockRead' }),
              h
                .sendWithPromise('PDFDoc.timedLockRead', {
                  doc: this.id,
                  milliseconds: t,
                })
                .then(function (t) {
                  t || o.splice(e, 1);
                })
            );
          }),
          (h.hasFullApi = !0),
          (h.Optimizer.optimize = function (t, e) {
            return (
              void 0 === e && (e = new h.Optimizer.OptimizerSettings()),
              f(arguments.length, 1, 'optimize', '(PDFNet.PDFDoc, object)', [
                [t, 'PDFDoc'],
                [e, 'object'],
              ]),
              h.sendWithPromise('optimizerOptimize', {
                doc: t.id,
                color_image_settings: e.color_image_settings,
                grayscale_image_settings: e.grayscale_image_settings,
                mono_image_settings: e.mono_image_settings,
                text_settings: e.text_settings,
                remove_custom: e.remove_custom,
              })
            );
          }),
          (h.VerificationOptions.prototype.addTrustedCertificateFromURL =
            function (t, e, n) {
              void 0 === e && (e = {}),
                void 0 === n &&
                  (n =
                    h.VerificationOptions.CertificateTrustFlag.e_default_trust),
                f(
                  arguments.length,
                  1,
                  'addTrustedCertificateFromURL',
                  '(string, object, number)',
                  [
                    [t, 'string'],
                    [e, 'object'],
                    [n, 'number'],
                  ]
                );
              var i = this;
              return p(t, e).then(function (t) {
                return i.addTrustedCertificate(t, n);
              });
            }),
          (h.DigitalSignatureField.prototype.certifyOnNextSaveFromURL =
            function (t, e, n) {
              void 0 === n && (n = {}),
                f(
                  arguments.length,
                  2,
                  'certifyOnNextSaveFromURL',
                  '(string, string, object)',
                  [
                    [t, 'string'],
                    [e, 'string'],
                    [n, 'object'],
                  ]
                );
              var i = this;
              return p(t, n).then(function (t) {
                return i.certifyOnNextSaveFromBuffer(t, e);
              });
            }),
          (h.DigitalSignatureField.prototype.signOnNextSaveFromURL = function (
            t,
            e,
            n
          ) {
            void 0 === n && (n = {}),
              f(
                arguments.length,
                2,
                'signOnNextSaveFromURL',
                '(string, string, object)',
                [
                  [t, 'string'],
                  [e, 'string'],
                  [n, 'object'],
                ]
              );
            var i = this;
            return p(t, n).then(function (t) {
              return i.signOnNextSaveFromBuffer(t, e);
            });
          }),
          (h.PDFRasterizer.prototype.rasterize = function (
            t,
            e,
            n,
            i,
            r,
            o,
            s,
            u,
            a
          ) {
            return (
              void 0 === u && (u = null),
              void 0 === a && (a = null),
              f(
                arguments.length,
                7,
                'rasterize',
                '(PDFNet.Page, number, number, number, number, boolean, PDFNet.Matrix2D, PDFNet.Rect, PDFNet.Rect)',
                [
                  [t, 'Object', h.Page, 'Page'],
                  [e, 'number'],
                  [n, 'number'],
                  [i, 'number'],
                  [r, 'number'],
                  [o, 'boolean'],
                  [s, 'Structure', h.Matrix2D, 'Matrix2D'],
                  [u, 'Structure', h.Rect, 'Rect'],
                  [a, 'Structure', h.Rect, 'Rect'],
                ]
              ),
              F('rasterize', [
                [s, 6],
                [u, 7],
                [a, 8],
              ]),
              h.sendWithPromise('PDFRasterizer.rasterize', {
                r: this.id,
                page: t.id,
                width: e,
                height: n,
                stride: i,
                num_comps: r,
                demult: o,
                device_mtx: s,
                clip: u,
                scrl_clp_regions: a,
              })
            );
          }),
          (h.ElementBuilder.prototype.createUnicodeTextRun = function (t) {
            return (
              f(arguments.length, 1, 'createUnicodeTextRun', '(string)', [
                [t, 'string'],
              ]),
              h
                .sendWithPromise('ElementBuilder.createUnicodeTextRun', {
                  b: this.id,
                  text_data: t,
                })
                .then(function (t) {
                  return _(h.Element, t);
                })
            );
          }),
          (h.DigitalSignatureField.prototype.getCertPathsFromCMS = function () {
            return (
              P('getCertPathsFromCMS', this.yieldFunction),
              h
                .sendWithPromise('DigitalSignatureField.getCertPathsFromCMS', {
                  self: this,
                })
                .then(function (t) {
                  for (var e = [], n = 0; n < t.length; ++n) {
                    for (var i = t[n], r = [], o = 0; o < i.length; ++o) {
                      var s = i[o];
                      if ('0' === s) return null;
                      (s = new h.X509Certificate(s)),
                        r.push(s),
                        c.push({ name: s.name, id: s.id });
                    }
                    e.push(r);
                  }
                  return e;
                })
            );
          }),
          (h.Convert.office2PDF = function (t, e) {
            return Core.officeToPDFBuffer(t, e).then(function (t) {
              h.PDFDoc.createFromBuffer(t).then(function (t) {
                return t.initSecurityHandler(), t;
              });
            });
          }),
          (h.PDFDoc.prototype.requirePage = function (t) {
            if (
              (f(arguments.length, 1, 'requirePage', '(number)', [
                [t, 'number'],
              ]),
              t <= 0)
            )
              throw Error(
                "1st input argument '" +
                  t +
                  "' in function 'requirePage' is invalid. Expected number between 1 and number of pages in the document."
              );
            return h.sendWithPromise('PDFDoc.RequirePage', {
              docId: this.id,
              pageNum: t,
            });
          }),
          (h.beginOperation = function (t) {
            if (
              (void 0 === t
                ? (t = { allowMultipleInstances: !1 })
                : t.allowMultipleInstances,
              0 < n && !t.allowMultipleInstances)
            )
              throw Error(
                "a previous instance of PDFNet.beginOperation() has been called without being terminated by PDFNet.finishOperation(). If this is intentional, pass in an options object with its parameter 'allowMultipleInstances' set to 'true' (ex. optObj={}; optObj.allowMultipleInstances=true; PDFNet.beginOperation(optObj));"
              );
            if (((n += 1), 1 < arguments.length))
              throw new RangeError(
                arguments.length +
                  " arguments passed into function 'beginOperation'. Expected 0 to 1 arguments. Function Signature: beginOperation(optObj = {})"
              );
            return h.sendWithPromise('BeginOperation', {});
          }),
          (h.finishOperation = function () {
            if (0 < n) {
              if ((--n, 0 != arguments.length))
                throw new RangeError(
                  arguments.length +
                    " arguments passed into function 'finishOperation'. Expected 0 arguments. Function Signature: finishOperation()"
                );
              return h.sendWithPromise('FinishOperation', {});
            }
          }),
          (h.runWithCleanup = function (t, e) {
            void 0 === e && (e = ''),
              f(arguments.length, 1, 'runWithCleanup', '(function, string)', [
                [t, 'function'],
                [e, 'string'],
              ]);
            var n,
              i = !1,
              r = !1;
            return (A = A.then(
              function () {},
              function () {}
            )
              .then(function () {
                return h.initialize(e);
              })
              .then(function () {
                return (i = !0), h.beginOperation();
              })
              .then(function () {
                return (r = !0), h.startDeallocateStack(), t();
              })
              .then(function (t) {
                return (n = t), (r = !1), h.endDeallocateStack();
              })
              .then(function () {
                if (((i = !1), h.finishOperation(), 0 < s))
                  throw Error(
                    'Detected not yet deallocated stack. You may have called "PDFNet.startDeallocateStack()" somewhere without calling "PDFNet.endDeallocateStack()" afterwards.'
                  );
                return n;
              })
              .catch(function (t) {
                throw (
                  (r && h.endDeallocateStack(), i && h.finishOperation(), t)
                );
              }));
          }),
          (h.runWithoutCleanup = function (t, e) {
            void 0 === e && (e = ''),
              f(arguments.length, 1, 'runWithCleanup', '(function, string)', [
                [t, 'function'],
                [e, 'string'],
              ]);
            var n = !1;
            return (A = A.then(
              function () {},
              function () {}
            )
              .then(function () {
                return h.initialize(e);
              })
              .then(function () {
                return (n = !0), h.beginOperation();
              })
              .then(function () {
                return t();
              })
              .then(function (t) {
                return (n = !1), h.finishOperation(), t;
              })
              .catch(function (t) {
                throw (n && h.finishOperation(), t);
              }));
          }),
          (h.initialize = function (e, t) {
            var n, i;
            return (
              void 0 === e && (e = ''),
              void 0 === t && (t = ''),
              f(arguments.length, 0, 'initialize', '(string, string)', [
                [e, 'string'],
                [t, 'string'],
              ]),
              g ||
                ((n = { emsWorkerError: function (t, e) {} }),
                (g = createPromiseCapability()),
                (i = function (t) {
                  l.Core.preloadPDFWorker(t, n),
                    l.Core.initPDFWorkerTransports(t, n, e).then(
                      function (t) {
                        (h.messageHandler = t.messageHandler), g.resolve();
                      },
                      function (t) {
                        g.reject(t);
                      }
                    );
                }),
                t && 'auto' !== t
                  ? i(t)
                  : l.Core.getDefaultBackendType().then(i, function (t) {
                      g.reject(t);
                    })),
              g.promise
            );
          }),
          (l.Core.PDFNet = h);
      },
    ]),
    (i = {}),
    (r.m = n),
    (r.c = i),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (r.t = function (e, t) {
      if (
        (1 & t && (e = r(e)),
        8 & t || (4 & t && 'object' == typeof e && e && e.__esModule))
      )
        return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, 'a', e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = '/core/pdf/'),
    r((r.s = 0));
}.call(this || window);
