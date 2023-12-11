(function () {
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
  $jscomp.arrayIteratorImpl = function (array) {
    var index = 0;
    return function () {
      return index < array.length
        ? { done: !1, value: array[index++] }
        : { done: !0 };
    };
  };
  $jscomp.arrayIterator = function (array) {
    return { next: $jscomp.arrayIteratorImpl(array) };
  };
  $jscomp.makeIterator = function (iterable) {
    var iteratorFunction =
      'undefined' != typeof Symbol &&
      Symbol.iterator &&
      iterable[Symbol.iterator];
    if (iteratorFunction) return iteratorFunction.call(iterable);
    if ('number' == typeof iterable.length)
      return $jscomp.arrayIterator(iterable);
    throw Error(String(iterable) + ' is not an iterable or ArrayLike');
  };
  $jscomp.ASSUME_ES5 = !1;
  $jscomp.ASSUME_NO_NATIVE_MAP = !1;
  $jscomp.ASSUME_NO_NATIVE_SET = !1;
  $jscomp.SIMPLE_FROUND_POLYFILL = !1;
  $jscomp.ISOLATE_POLYFILLS = !1;
  $jscomp.FORCE_POLYFILL_PROMISE = !1;
  $jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
  $jscomp.getGlobal = function (passedInThis) {
    passedInThis = [
      'object' == typeof globalThis && globalThis,
      passedInThis,
      'object' == typeof window && window,
      'object' == typeof self && self,
      'object' == typeof global && global,
    ];
    for (var i = 0; i < passedInThis.length; ++i) {
      var maybeGlobal = passedInThis[i];
      if (maybeGlobal && maybeGlobal.Math == Math) return maybeGlobal;
    }
    throw Error('Cannot find global object');
  };
  $jscomp.global = $jscomp.getGlobal(this);
  $jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || 'function' == typeof Object.defineProperties
      ? Object.defineProperty
      : function (target, property, descriptor) {
          if (target == Array.prototype || target == Object.prototype)
            return target;
          target[property] = descriptor.value;
          return target;
        };
  $jscomp.IS_SYMBOL_NATIVE =
    'function' === typeof Symbol && 'symbol' === typeof Symbol('x');
  $jscomp.TRUST_ES6_POLYFILLS =
    !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
  $jscomp.polyfills = {};
  $jscomp.propertyToPolyfillSymbol = {};
  $jscomp.POLYFILL_PREFIX = '$jscp$';
  var $jscomp$lookupPolyfilledValue = function (
    target,
    property,
    isOptionalAccess
  ) {
    if (!isOptionalAccess || null != target) {
      isOptionalAccess = $jscomp.propertyToPolyfillSymbol[property];
      if (null == isOptionalAccess) return target[property];
      isOptionalAccess = target[isOptionalAccess];
      return void 0 !== isOptionalAccess ? isOptionalAccess : target[property];
    }
  };
  $jscomp.polyfill = function (target, polyfill, fromLang, toLang) {
    polyfill &&
      ($jscomp.ISOLATE_POLYFILLS
        ? $jscomp.polyfillIsolated(target, polyfill, fromLang, toLang)
        : $jscomp.polyfillUnisolated(target, polyfill, fromLang, toLang));
  };
  $jscomp.polyfillUnisolated = function (target, polyfill, fromLang, toLang) {
    fromLang = $jscomp.global;
    target = target.split('.');
    for (toLang = 0; toLang < target.length - 1; toLang++) {
      var key = target[toLang];
      if (!(key in fromLang)) return;
      fromLang = fromLang[key];
    }
    target = target[target.length - 1];
    toLang = fromLang[target];
    polyfill = polyfill(toLang);
    polyfill != toLang &&
      null != polyfill &&
      $jscomp.defineProperty(fromLang, target, {
        configurable: !0,
        writable: !0,
        value: polyfill,
      });
  };
  $jscomp.polyfillIsolated = function (target, polyfill, fromLang, toLang) {
    var split = target.split('.');
    target = 1 === split.length;
    toLang = split[0];
    toLang =
      !target && toLang in $jscomp.polyfills
        ? $jscomp.polyfills
        : $jscomp.global;
    for (var i = 0; i < split.length - 1; i++) {
      var key = split[i];
      if (!(key in toLang)) return;
      toLang = toLang[key];
    }
    split = split[split.length - 1];
    fromLang =
      $jscomp.IS_SYMBOL_NATIVE && 'es6' === fromLang ? toLang[split] : null;
    polyfill = polyfill(fromLang);
    null != polyfill &&
      (target
        ? $jscomp.defineProperty($jscomp.polyfills, split, {
            configurable: !0,
            writable: !0,
            value: polyfill,
          })
        : polyfill !== fromLang &&
          (void 0 === $jscomp.propertyToPolyfillSymbol[split] &&
            ((fromLang = (1e9 * Math.random()) >>> 0),
            ($jscomp.propertyToPolyfillSymbol[split] = $jscomp.IS_SYMBOL_NATIVE
              ? $jscomp.global.Symbol(split)
              : $jscomp.POLYFILL_PREFIX + fromLang + '$' + split)),
          $jscomp.defineProperty(
            toLang,
            $jscomp.propertyToPolyfillSymbol[split],
            { configurable: !0, writable: !0, value: polyfill }
          )));
  };
  $jscomp.polyfill(
    'Promise',
    function (NativePromise) {
      function AsyncExecutor() {
        this.batch_ = null;
      }
      function resolvingPromise(opt_value) {
        return opt_value instanceof PolyfillPromise
          ? opt_value
          : new PolyfillPromise(function (resolve, reject) {
              resolve(opt_value);
            });
      }
      if (
        NativePromise &&
        (!(
          $jscomp.FORCE_POLYFILL_PROMISE ||
          ($jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION &&
            'undefined' === typeof $jscomp.global.PromiseRejectionEvent)
        ) ||
          !$jscomp.global.Promise ||
          -1 === $jscomp.global.Promise.toString().indexOf('[native code]'))
      )
        return NativePromise;
      AsyncExecutor.prototype.asyncExecute = function (f) {
        if (null == this.batch_) {
          this.batch_ = [];
          var self = this;
          this.asyncExecuteFunction(function () {
            self.executeBatch_();
          });
        }
        this.batch_.push(f);
      };
      var nativeSetTimeout = $jscomp.global.setTimeout;
      AsyncExecutor.prototype.asyncExecuteFunction = function (f) {
        nativeSetTimeout(f, 0);
      };
      AsyncExecutor.prototype.executeBatch_ = function () {
        for (; this.batch_ && this.batch_.length; ) {
          var executingBatch = this.batch_;
          this.batch_ = [];
          for (var i = 0; i < executingBatch.length; ++i) {
            var f = executingBatch[i];
            executingBatch[i] = null;
            try {
              f();
            } catch (error) {
              this.asyncThrow_(error);
            }
          }
        }
        this.batch_ = null;
      };
      AsyncExecutor.prototype.asyncThrow_ = function (exception) {
        this.asyncExecuteFunction(function () {
          throw exception;
        });
      };
      var PolyfillPromise = function (executor) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        this.isRejectionHandled_ = !1;
        var resolveAndReject = this.createResolveAndReject_();
        try {
          executor(resolveAndReject.resolve, resolveAndReject.reject);
        } catch (e) {
          resolveAndReject.reject(e);
        }
      };
      PolyfillPromise.prototype.createResolveAndReject_ = function () {
        function firstCallWins(method) {
          return function (x) {
            alreadyCalled ||
              ((alreadyCalled = !0), method.call(thisPromise, x));
          };
        }
        var thisPromise = this,
          alreadyCalled = !1;
        return {
          resolve: firstCallWins(this.resolveTo_),
          reject: firstCallWins(this.reject_),
        };
      };
      PolyfillPromise.prototype.resolveTo_ = function (value) {
        if (value === this)
          this.reject_(new TypeError('A Promise cannot resolve to itself'));
        else if (value instanceof PolyfillPromise)
          this.settleSameAsPromise_(value);
        else {
          a: switch (typeof value) {
            case 'object':
              var JSCompiler_inline_result = null != value;
              break a;
            case 'function':
              JSCompiler_inline_result = !0;
              break a;
            default:
              JSCompiler_inline_result = !1;
          }
          JSCompiler_inline_result
            ? this.resolveToNonPromiseObj_(value)
            : this.fulfill_(value);
        }
      };
      PolyfillPromise.prototype.resolveToNonPromiseObj_ = function (obj) {
        var thenMethod = void 0;
        try {
          thenMethod = obj.then;
        } catch (error) {
          this.reject_(error);
          return;
        }
        'function' == typeof thenMethod
          ? this.settleSameAsThenable_(thenMethod, obj)
          : this.fulfill_(obj);
      };
      PolyfillPromise.prototype.reject_ = function (reason) {
        this.settle_(2, reason);
      };
      PolyfillPromise.prototype.fulfill_ = function (value) {
        this.settle_(1, value);
      };
      PolyfillPromise.prototype.settle_ = function (
        settledState,
        valueOrReason
      ) {
        if (0 != this.state_)
          throw Error(
            'Cannot settle(' +
              settledState +
              ', ' +
              valueOrReason +
              '): Promise already settled in state' +
              this.state_
          );
        this.state_ = settledState;
        this.result_ = valueOrReason;
        2 === this.state_ && this.scheduleUnhandledRejectionCheck_();
        this.executeOnSettledCallbacks_();
      };
      PolyfillPromise.prototype.scheduleUnhandledRejectionCheck_ = function () {
        var self = this;
        nativeSetTimeout(function () {
          if (self.notifyUnhandledRejection_()) {
            var nativeConsole = $jscomp.global.console;
            'undefined' !== typeof nativeConsole &&
              nativeConsole.error(self.result_);
          }
        }, 1);
      };
      PolyfillPromise.prototype.notifyUnhandledRejection_ = function () {
        if (this.isRejectionHandled_) return !1;
        var NativeCustomEvent = $jscomp.global.CustomEvent,
          NativeEvent = $jscomp.global.Event,
          nativeDispatchEvent = $jscomp.global.dispatchEvent;
        if ('undefined' === typeof nativeDispatchEvent) return !0;
        'function' === typeof NativeCustomEvent
          ? (NativeCustomEvent = new NativeCustomEvent('unhandledrejection', {
              cancelable: !0,
            }))
          : 'function' === typeof NativeEvent
            ? (NativeCustomEvent = new NativeEvent('unhandledrejection', {
                cancelable: !0,
              }))
            : ((NativeCustomEvent =
                $jscomp.global.document.createEvent('CustomEvent')),
              NativeCustomEvent.initCustomEvent(
                'unhandledrejection',
                !1,
                !0,
                NativeCustomEvent
              ));
        NativeCustomEvent.promise = this;
        NativeCustomEvent.reason = this.result_;
        return nativeDispatchEvent(NativeCustomEvent);
      };
      PolyfillPromise.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
          for (var i = 0; i < this.onSettledCallbacks_.length; ++i)
            asyncExecutor.asyncExecute(this.onSettledCallbacks_[i]);
          this.onSettledCallbacks_ = null;
        }
      };
      var asyncExecutor = new AsyncExecutor();
      PolyfillPromise.prototype.settleSameAsPromise_ = function (promise) {
        var methods = this.createResolveAndReject_();
        promise.callWhenSettled_(methods.resolve, methods.reject);
      };
      PolyfillPromise.prototype.settleSameAsThenable_ = function (
        thenMethod,
        thenable
      ) {
        var methods = this.createResolveAndReject_();
        try {
          thenMethod.call(thenable, methods.resolve, methods.reject);
        } catch (error) {
          methods.reject(error);
        }
      };
      PolyfillPromise.prototype.then = function (onFulfilled, onRejected) {
        function createCallback(paramF, defaultF) {
          return 'function' == typeof paramF
            ? function (x) {
                try {
                  resolveChild(paramF(x));
                } catch (error) {
                  rejectChild(error);
                }
              }
            : defaultF;
        }
        var resolveChild,
          rejectChild,
          childPromise = new PolyfillPromise(function (resolve, reject) {
            resolveChild = resolve;
            rejectChild = reject;
          });
        this.callWhenSettled_(
          createCallback(onFulfilled, resolveChild),
          createCallback(onRejected, rejectChild)
        );
        return childPromise;
      };
      PolyfillPromise.prototype.catch = function (onRejected) {
        return this.then(void 0, onRejected);
      };
      PolyfillPromise.prototype.callWhenSettled_ = function (
        onFulfilled,
        onRejected
      ) {
        function callback() {
          switch (thisPromise.state_) {
            case 1:
              onFulfilled(thisPromise.result_);
              break;
            case 2:
              onRejected(thisPromise.result_);
              break;
            default:
              throw Error('Unexpected state: ' + thisPromise.state_);
          }
        }
        var thisPromise = this;
        null == this.onSettledCallbacks_
          ? asyncExecutor.asyncExecute(callback)
          : this.onSettledCallbacks_.push(callback);
        this.isRejectionHandled_ = !0;
      };
      PolyfillPromise.resolve = resolvingPromise;
      PolyfillPromise.reject = function (opt_reason) {
        return new PolyfillPromise(function (resolve, reject) {
          reject(opt_reason);
        });
      };
      PolyfillPromise.race = function (thenablesOrValues) {
        return new PolyfillPromise(function (resolve, reject) {
          for (
            var iterator = $jscomp.makeIterator(thenablesOrValues),
              iterRec = iterator.next();
            !iterRec.done;
            iterRec = iterator.next()
          )
            resolvingPromise(iterRec.value).callWhenSettled_(resolve, reject);
        });
      };
      PolyfillPromise.all = function (thenablesOrValues) {
        var iterator = $jscomp.makeIterator(thenablesOrValues),
          iterRec = iterator.next();
        return iterRec.done
          ? resolvingPromise([])
          : new PolyfillPromise(function (resolveAll, rejectAll) {
              function onFulfilled(i) {
                return function (ithResult) {
                  resultsArray[i] = ithResult;
                  unresolvedCount--;
                  0 == unresolvedCount && resolveAll(resultsArray);
                };
              }
              var resultsArray = [],
                unresolvedCount = 0;
              do
                resultsArray.push(void 0),
                  unresolvedCount++,
                  resolvingPromise(iterRec.value).callWhenSettled_(
                    onFulfilled(resultsArray.length - 1),
                    rejectAll
                  ),
                  (iterRec = iterator.next());
              while (!iterRec.done);
            });
      };
      return PolyfillPromise;
    },
    'es6',
    'es3'
  );
  (function (modules) {
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) return installedModules[moduleId].exports;
      var module = (installedModules[moduleId] = {
        i: moduleId,
        l: !1,
        exports: {},
      });
      modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      module.l = !0;
      return module.exports;
    }
    var installedModules = {};
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function (exports, name, getter) {
      __webpack_require__.o(exports, name) ||
        Object.defineProperty(exports, name, { enumerable: !0, get: getter });
    };
    __webpack_require__.r = function (exports) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      Object.defineProperty(exports, '__esModule', { value: !0 });
    };
    __webpack_require__.t = function (value, mode) {
      mode & 1 && (value = __webpack_require__(value));
      if (
        mode & 8 ||
        (mode & 4 && 'object' === typeof value && value && value.__esModule)
      )
        return value;
      var ns = Object.create(null);
      __webpack_require__.r(ns);
      Object.defineProperty(ns, 'default', { enumerable: !0, value: value });
      if (mode & 2 && 'string' != typeof value)
        for (var key$jscomp$0 in value)
          __webpack_require__.d(
            ns,
            key$jscomp$0,
            function (key) {
              return value[key];
            }.bind(null, key$jscomp$0)
          );
      return ns;
    };
    __webpack_require__.n = function (module) {
      var getter =
        module && module.__esModule
          ? function () {
              return module['default'];
            }
          : function () {
              return module;
            };
      __webpack_require__.d(getter, 'a', getter);
      return getter;
    };
    __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = '/core/pdf/';
    return __webpack_require__((__webpack_require__.s = 0));
  })([
    function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__(1);
    },
    function (module, exports$jscomp$0) {
      (function (exports) {
        function optionsHelpers() {
          return {
            putBool: function (implObj, key, value) {
              if (!1 !== value && !0 !== value)
                throw new TypeError('An boolean value is expected for putBool');
              implObj[key] = value;
            },
            putNumber: function (implObj, key, value) {
              implObj[key] = 0 + value;
            },
            putString: function (implObj, key, value) {
              implObj[key] = '' + value;
            },
            jsColorToNumber: function (jsColor) {
              return (
                4278190080 +
                65536 * Math.floor(jsColor.R) +
                256 * Math.floor(jsColor.G) +
                Math.floor(jsColor.B)
              );
            },
            jsColorFromNumber: function (number) {
              return {
                A: (5.9604644775390625e-8 * number) & 255,
                R: ((number | 0) & 16711680) >>> 16,
                G: ((number | 0) & 65280) >>> 8,
                B: (number | 0) & 255,
              };
            },
          };
        }
        var PDFNet = exports.Core.PDFNet ? exports.Core.PDFNet : {};
        PDFNet.Convert =
          exports.Core.PDFNet && exports.Core.PDFNet.Convert
            ? exports.Core.PDFNet.Convert
            : {};
        PDFNet.Convert.createCADConvertOptions = function () {
          return Promise.resolve(new PDFNet.Convert.CADConvertOptions());
        };
        PDFNet.Convert.CADConvertOptions = function () {
          this.name = 'PDFNet.Convert.CADConvertOptions';
          this.mImpl = {};
          this.mHelpers = optionsHelpers();
        };
        PDFNet.Convert.CADConvertOptions.LayoutSortOrder = {
          e_default_order: 0,
          e_alphabetic_order: 1,
          e_alphanumeric_order: 2,
        };
        PDFNet.Convert.CADConvertOptions.prototype.getAllowThinLines =
          function () {
            return 'Thin-lines' in this.mImpl ? !!this.mImpl['Thin-lines'] : !0;
          };
        PDFNet.Convert.CADConvertOptions.prototype.setAllowThinLines =
          function (value) {
            this.mHelpers.putBool(this.mImpl, 'Thin-lines', value);
            return this;
          };
        PDFNet.Convert.CADConvertOptions.prototype.getAutoRotate = function () {
          return 'Auto-rotate' in this.mImpl ? !!this.mImpl['Auto-rotate'] : !1;
        };
        PDFNet.Convert.CADConvertOptions.prototype.setAutoRotate = function (
          value
        ) {
          this.mHelpers.putBool(this.mImpl, 'Auto-rotate', value);
          return this;
        };
        PDFNet.Convert.CADConvertOptions.prototype.getBackgroundColor =
          function () {
            return 'Background-color' in this.mImpl
              ? this.mHelpers.jsColorFromNumber(this.mImpl['Background-color'])
              : this.mHelpers.jsColorFromNumber(4294967295);
          };
        PDFNet.Convert.CADConvertOptions.prototype.setBackgroundColor =
          function (value) {
            this.mHelpers.putNumber(
              this.mImpl,
              'Background-color',
              this.mHelpers.jsColorToNumber(value)
            );
            return this;
          };
        PDFNet.Convert.CADConvertOptions.prototype.getColorMode = function () {
          return 'ColorMode' in this.mImpl ? this.mImpl.ColorMode : 'Original';
        };
        PDFNet.Convert.CADConvertOptions.prototype.setColorMode = function (
          value
        ) {
          this.mImpl.ColorMode = '' + value;
          return this;
        };
        PDFNet.Convert.CADConvertOptions.prototype.getIncludeModel =
          function () {
            return 'IncludeModel' in this.mImpl
              ? !!this.mImpl.IncludeModel
              : !0;
          };
        PDFNet.Convert.CADConvertOptions.prototype.setIncludeModel = function (
          value
        ) {
          this.mHelpers.putBool(this.mImpl, 'IncludeModel', value);
          return this;
        };
        PDFNet.Convert.CADConvertOptions.prototype.getLayoutSortOrder =
          function () {
            return 'LayoutSortOrder' in this.mImpl
              ? this.mImpl.LayoutSortOrder
              : 0;
          };
        PDFNet.Convert.CADConvertOptions.prototype.setLayoutSortOrder =
          function (value) {
            this.mHelpers.putNumber(this.mImpl, 'LayoutSortOrder', value);
            return this;
          };
        PDFNet.Convert.CADConvertOptions.prototype.getMaxXrefDepth =
          function () {
            return 'XRef-depth' in this.mImpl
              ? 0 | this.mImpl['XRef-depth']
              : 1e3;
          };
        PDFNet.Convert.CADConvertOptions.prototype.setMaxXrefDepth = function (
          value
        ) {
          this.mHelpers.putNumber(this.mImpl, 'XRef-depth', value);
          return this;
        };
        PDFNet.Convert.CADConvertOptions.prototype.getPageHeight = function () {
          return 'Page-height' in this.mImpl ? this.mImpl['Page-height'] : 594;
        };
        PDFNet.Convert.CADConvertOptions.prototype.setPageHeight = function (
          value
        ) {
          this.mHelpers.putNumber(this.mImpl, 'Page-height', value);
          return this;
        };
        PDFNet.Convert.CADConvertOptions.prototype.getPageWidth = function () {
          return 'Page-width' in this.mImpl ? this.mImpl['Page-width'] : 840;
        };
        PDFNet.Convert.CADConvertOptions.prototype.setPageWidth = function (
          value
        ) {
          this.mHelpers.putNumber(this.mImpl, 'Page-width', value);
          return this;
        };
        PDFNet.Convert.CADConvertOptions.prototype.getRasterDPI = function () {
          return 'Raster-dpi' in this.mImpl ? this.mImpl['Raster-dpi'] : 72;
        };
        PDFNet.Convert.CADConvertOptions.prototype.setRasterDPI = function (
          value
        ) {
          this.mHelpers.putNumber(this.mImpl, 'Raster-dpi', value);
          return this;
        };
        PDFNet.Convert.CADConvertOptions.prototype.addSheets = function (
          value
        ) {
          'Sheets' in this.mImpl || (this.mImpl.Sheets = []);
          this.mImpl.Sheets.push('' + value);
          return this;
        };
        PDFNet.Convert.CADConvertOptions.prototype.getUseScaleFromDocument =
          function () {
            return 'UseScaleFromDocument' in this.mImpl
              ? !!this.mImpl.UseScaleFromDocument
              : !1;
          };
        PDFNet.Convert.CADConvertOptions.prototype.setUseScaleFromDocument =
          function (value) {
            this.mHelpers.putBool(this.mImpl, 'UseScaleFromDocument', value);
            return this;
          };
        PDFNet.Convert.CADConvertOptions.prototype.getZoomToExtents =
          function () {
            return 'ZoomToExtents' in this.mImpl
              ? !!this.mImpl.ZoomToExtents
              : !0;
          };
        PDFNet.Convert.CADConvertOptions.prototype.setZoomToExtents = function (
          value
        ) {
          this.mHelpers.putBool(this.mImpl, 'ZoomToExtents', value);
          return this;
        };
        PDFNet.Convert.CADConvertOptions.prototype.getJsonString = function () {
          return JSON.stringify(this.mImpl);
        };
        exports.Core.PDFNet = PDFNet;
      })('undefined' === typeof window ? this : window);
    },
  ]);
}).call(this || window);
