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
  $jscomp.checkStringArgs = function (thisArg, arg, func) {
    if (null == thisArg)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          func +
          ' must not be null or undefined'
      );
    if (arg instanceof RegExp)
      throw new TypeError(
        'First argument to String.prototype.' +
          func +
          ' must not be a regular expression'
      );
    return thisArg + '';
  };
  $jscomp.polyfill(
    'String.prototype.startsWith',
    function (orig) {
      return orig
        ? orig
        : function (searchString, opt_position) {
            var string = $jscomp.checkStringArgs(
              this,
              searchString,
              'startsWith'
            );
            searchString += '';
            var strLen = string.length,
              searchLen = searchString.length;
            opt_position = Math.max(
              0,
              Math.min(opt_position | 0, string.length)
            );
            for (var j = 0; j < searchLen && opt_position < strLen; )
              if (string[opt_position++] != searchString[j++]) return !1;
            return j >= searchLen;
          };
    },
    'es6',
    'es3'
  );
  $jscomp.polyfill(
    'Array.from',
    function (orig) {
      return orig
        ? orig
        : function (arrayLike, opt_mapFn, opt_thisArg) {
            opt_mapFn =
              null != opt_mapFn
                ? opt_mapFn
                : function (x) {
                    return x;
                  };
            var result = [],
              iteratorFunction =
                'undefined' != typeof Symbol &&
                Symbol.iterator &&
                arrayLike[Symbol.iterator];
            if ('function' == typeof iteratorFunction) {
              arrayLike = iteratorFunction.call(arrayLike);
              for (var k = 0; !(iteratorFunction = arrayLike.next()).done; )
                result.push(
                  opt_mapFn.call(opt_thisArg, iteratorFunction.value, k++)
                );
            } else
              for (
                iteratorFunction = arrayLike.length, k = 0;
                k < iteratorFunction;
                k++
              )
                result.push(opt_mapFn.call(opt_thisArg, arrayLike[k], k));
            return result;
          };
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
      function _typeof(obj$jscomp$0) {
        '@babel/helpers - typeof';
        return (
          (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    'function' == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                }),
          _typeof(obj$jscomp$0)
        );
      }
      var createdObjects = [],
        lockedObjects = [],
        stackCallCounter = 0,
        beginOperationCounter = 0,
        deallocStackCounter = [],
        unlockStackCounter = [];
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
        function finishGenerator(iterator) {
          function iterate(val) {
            val = iterator.next(val);
            var promise = val.value;
            return val.done ? val.value : promise.then(iterate);
          }
          return Promise.resolve().then(iterate);
        }
        var PDFNet = exports.Core.PDFNet ? exports.Core.PDFNet : {};
        PDFNet.Convert =
          exports.Core.PDFNet && exports.Core.PDFNet.Convert
            ? exports.Core.PDFNet.Convert
            : {};
        PDFNet.Optimizer = {};
        exports.Core && exports.Core.enableFullPDF();
        exports.isArrayBuffer = function (obj) {
          return (
            obj instanceof ArrayBuffer ||
            (null != obj &&
              null != obj.constructor &&
              'ArrayBuffer' === obj.constructor.name &&
              'number' === typeof obj.byteLength)
          );
        };
        PDFNet.Destroyable = function () {
          if (this.constructor === PDFNet.Destroyable)
            throw Error("Can't instantiate abstract class!");
        };
        PDFNet.Destroyable.prototype.takeOwnership = function () {
          avoidCleanup(this.id);
        };
        PDFNet.Destroyable.prototype.destroy = function () {
          this.takeOwnership();
          return PDFNet.sendWithPromise(this.name + '.destroy', {
            auto_dealloc_obj: this.id,
          });
        };
        PDFNet.Action = function (id) {
          this.name = 'Action';
          this.id = id;
        };
        PDFNet.ActionParameter = function (id) {
          this.name = 'ActionParameter';
          this.id = id;
        };
        PDFNet.ActionParameter.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.Annot = function (id) {
          this.name = 'Annot';
          this.id = id;
        };
        PDFNet.AnnotBorderStyle = function (id) {
          this.name = 'AnnotBorderStyle';
          this.id = id;
        };
        PDFNet.AnnotBorderStyle.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.AttrObj = function (id) {
          this.name = 'AttrObj';
          this.id = id;
        };
        PDFNet.Bookmark = function (id) {
          this.name = 'Bookmark';
          this.id = id;
        };
        PDFNet.ByteRange = function (m_offset, m_size) {
          this.name = 'ByteRange';
          if (m_offset && 'undefined' === typeof m_size)
            copyFunc(m_offset, this);
          else
            return (
              'undefined' === typeof m_offset && (m_offset = 0),
              'undefined' === typeof m_size && (m_size = 0),
              new PDFNet.ByteRange({ m_offset: m_offset, m_size: m_size })
            );
        };
        PDFNet.CaretAnnot = function (id) {
          this.name = 'CaretAnnot';
          this.id = id;
        };
        PDFNet.CheckBoxWidget = function (id) {
          this.name = 'CheckBoxWidget';
          this.id = id;
        };
        PDFNet.ChunkRenderer = function (id) {
          this.name = 'ChunkRenderer';
          this.id = id;
        };
        PDFNet.CircleAnnot = function (id) {
          this.name = 'CircleAnnot';
          this.id = id;
        };
        PDFNet.ClassMap = function (id) {
          this.name = 'ClassMap';
          this.id = id;
        };
        PDFNet.ColorPt = function (id) {
          this.name = 'ColorPt';
          this.id = id;
        };
        PDFNet.ColorPt.prototype = Object.create(PDFNet.Destroyable.prototype);
        PDFNet.ColorSpace = function (id) {
          this.name = 'ColorSpace';
          this.id = id;
        };
        PDFNet.ColorSpace.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.ComboBoxWidget = function (id) {
          this.name = 'ComboBoxWidget';
          this.id = id;
        };
        PDFNet.ContentElement = function (id) {
          this.name = 'ContentElement';
          this.id = id;
        };
        PDFNet.ContentItem = function (o, p) {
          this.name = 'ContentItem';
          if (o && 'undefined' === typeof p) copyFunc(o, this);
          else
            return (
              'undefined' === typeof o && (o = '0'),
              'undefined' === typeof p && (p = '0'),
              new PDFNet.ContentItem({ o: o, p: p })
            );
        };
        PDFNet.ContentNode = function (id) {
          this.name = 'ContentNode';
          this.id = id;
        };
        PDFNet.ContentReplacer = function (id) {
          this.name = 'ContentReplacer';
          this.id = id;
        };
        PDFNet.ContentReplacer.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.ConversionMonitor = function (id) {
          this.name = 'ConversionMonitor';
          this.id = id;
        };
        PDFNet.ConversionMonitor.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.Date = function (
          year,
          month,
          day,
          hour,
          minute,
          second,
          UT,
          UT_hour,
          UT_minutes,
          mp_obj
        ) {
          this.name = 'Date';
          if (year && 'undefined' === typeof month) copyFunc(year, this);
          else
            return (
              'undefined' === typeof year && (year = 0),
              'undefined' === typeof month && (month = 0),
              'undefined' === typeof day && (day = 0),
              'undefined' === typeof hour && (hour = 0),
              'undefined' === typeof minute && (minute = 0),
              'undefined' === typeof second && (second = 0),
              'undefined' === typeof UT && (UT = 0),
              'undefined' === typeof UT_hour && (UT_hour = 0),
              'undefined' === typeof UT_minutes && (UT_minutes = 0),
              'undefined' === typeof mp_obj && (mp_obj = '0'),
              new PDFNet.Date({
                year: year,
                month: month,
                day: day,
                hour: hour,
                minute: minute,
                second: second,
                UT: UT,
                UT_hour: UT_hour,
                UT_minutes: UT_minutes,
                mp_obj: mp_obj,
              })
            );
        };
        PDFNet.Destination = function (id) {
          this.name = 'Destination';
          this.id = id;
        };
        PDFNet.DictIterator = function (id) {
          this.name = 'DictIterator';
          this.id = id;
        };
        PDFNet.DictIterator.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.DigestAlgorithm = function (id) {
          this.name = 'DigestAlgorithm';
          this.id = id;
        };
        PDFNet.DigitalSignatureField = function (mp_field_dict_obj) {
          this.name = 'DigitalSignatureField';
          if ('object' === _typeof(mp_field_dict_obj))
            copyFunc(mp_field_dict_obj, this);
          else if ('undefined' !== typeof mp_field_dict_obj)
            return new PDFNet.DigitalSignatureField({
              mp_field_dict_obj: mp_field_dict_obj,
            });
        };
        PDFNet.DisallowedChange = function (id) {
          this.name = 'DisallowedChange';
          this.id = id;
        };
        PDFNet.DisallowedChange.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.DocSnapshot = function (id) {
          this.name = 'DocSnapshot';
          this.id = id;
        };
        PDFNet.DocSnapshot.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.Element = function (id) {
          this.name = 'Element';
          this.id = id;
        };
        PDFNet.ElementBuilder = function (id) {
          this.name = 'ElementBuilder';
          this.id = id;
        };
        PDFNet.ElementBuilder.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.ElementReader = function (id) {
          this.name = 'ElementReader';
          this.id = id;
        };
        PDFNet.ElementReader.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.ElementWriter = function (id) {
          this.name = 'ElementWriter';
          this.id = id;
        };
        PDFNet.ElementWriter.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.EmbeddedTimestampVerificationResult = function (id) {
          this.name = 'EmbeddedTimestampVerificationResult';
          this.id = id;
        };
        PDFNet.EmbeddedTimestampVerificationResult.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.FDFDoc = function (id) {
          this.name = 'FDFDoc';
          this.id = id;
        };
        PDFNet.FDFDoc.prototype = Object.create(PDFNet.Destroyable.prototype);
        PDFNet.FDFField = function (mp_leaf_node, mp_root_array) {
          this.name = 'FDFField';
          if (mp_leaf_node && 'undefined' === typeof mp_root_array)
            copyFunc(mp_leaf_node, this);
          else
            return (
              'undefined' === typeof mp_leaf_node && (mp_leaf_node = '0'),
              'undefined' === typeof mp_root_array && (mp_root_array = '0'),
              new PDFNet.FDFField({
                mp_leaf_node: mp_leaf_node,
                mp_root_array: mp_root_array,
              })
            );
        };
        PDFNet.Field = function (leaf_node, builder) {
          this.name = 'Field';
          if (leaf_node && 'undefined' === typeof builder)
            copyFunc(leaf_node, this);
          else
            return (
              'undefined' === typeof leaf_node && (leaf_node = '0'),
              'undefined' === typeof builder && (builder = '0'),
              new PDFNet.Field({ leaf_node: leaf_node, builder: builder })
            );
        };
        PDFNet.FileAttachmentAnnot = function (id) {
          this.name = 'FileAttachmentAnnot';
          this.id = id;
        };
        PDFNet.FileSpec = function (id) {
          this.name = 'FileSpec';
          this.id = id;
        };
        PDFNet.Filter = function (id) {
          this.name = 'Filter';
          this.id = id;
        };
        PDFNet.Filter.prototype = Object.create(PDFNet.Destroyable.prototype);
        PDFNet.FilterReader = function (id) {
          this.name = 'FilterReader';
          this.id = id;
        };
        PDFNet.FilterReader.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.FilterWriter = function (id) {
          this.name = 'FilterWriter';
          this.id = id;
        };
        PDFNet.FilterWriter.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.Flattener = function (id) {
          this.name = 'Flattener';
          this.id = id;
        };
        PDFNet.Flattener.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.FlowDocument = function (id) {
          this.name = 'FlowDocument';
          this.id = id;
        };
        PDFNet.FlowDocument.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.Font = function (id) {
          this.name = 'Font';
          this.id = id;
        };
        PDFNet.Font.prototype = Object.create(PDFNet.Destroyable.prototype);
        PDFNet.FreeTextAnnot = function (id) {
          this.name = 'FreeTextAnnot';
          this.id = id;
        };
        PDFNet.Function = function (id) {
          this.name = 'Function';
          this.id = id;
        };
        PDFNet.Function.prototype = Object.create(PDFNet.Destroyable.prototype);
        PDFNet.GState = function (id) {
          this.name = 'GState';
          this.id = id;
        };
        PDFNet.GeometryCollection = function (id) {
          this.name = 'GeometryCollection';
          this.id = id;
        };
        PDFNet.GeometryCollection.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.HighlightAnnot = function (id) {
          this.name = 'HighlightAnnot';
          this.id = id;
        };
        PDFNet.Highlights = function (id) {
          this.name = 'Highlights';
          this.id = id;
        };
        PDFNet.Highlights.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.Image = function (id) {
          this.name = 'Image';
          this.id = id;
        };
        PDFNet.InkAnnot = function (id) {
          this.name = 'InkAnnot';
          this.id = id;
        };
        PDFNet.Iterator = function (id, type) {
          this.name = 'Iterator';
          this.id = id;
          this.type = type;
        };
        PDFNet.Iterator.prototype = Object.create(PDFNet.Destroyable.prototype);
        PDFNet.KeyStrokeActionResult = function (id) {
          this.name = 'KeyStrokeActionResult';
          this.id = id;
        };
        PDFNet.KeyStrokeActionResult.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.KeyStrokeEventData = function (id) {
          this.name = 'KeyStrokeEventData';
          this.id = id;
        };
        PDFNet.KeyStrokeEventData.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.LineAnnot = function (id) {
          this.name = 'LineAnnot';
          this.id = id;
        };
        PDFNet.LinkAnnot = function (id) {
          this.name = 'LinkAnnot';
          this.id = id;
        };
        PDFNet.List = function (id) {
          this.name = 'List';
          this.id = id;
        };
        PDFNet.ListBoxWidget = function (id) {
          this.name = 'ListBoxWidget';
          this.id = id;
        };
        PDFNet.ListItem = function (id) {
          this.name = 'ListItem';
          this.id = id;
        };
        PDFNet.MarkupAnnot = function (id) {
          this.name = 'MarkupAnnot';
          this.id = id;
        };
        PDFNet.Matrix2D = function (m_a, m_b, m_c, m_d, m_h, m_v) {
          this.name = 'Matrix2D';
          if (m_a && 'undefined' === typeof m_b) copyFunc(m_a, this);
          else
            return (
              'undefined' === typeof m_a && (m_a = 0),
              'undefined' === typeof m_b && (m_b = 0),
              'undefined' === typeof m_c && (m_c = 0),
              'undefined' === typeof m_d && (m_d = 0),
              'undefined' === typeof m_h && (m_h = 0),
              'undefined' === typeof m_v && (m_v = 0),
              new PDFNet.Matrix2D({
                m_a: m_a,
                m_b: m_b,
                m_c: m_c,
                m_d: m_d,
                m_h: m_h,
                m_v: m_v,
              })
            );
        };
        PDFNet.MovieAnnot = function (id) {
          this.name = 'MovieAnnot';
          this.id = id;
        };
        PDFNet.NameTree = function (id) {
          this.name = 'NameTree';
          this.id = id;
        };
        PDFNet.NumberTree = function (id) {
          this.name = 'NumberTree';
          this.id = id;
        };
        PDFNet.OCG = function (id) {
          this.name = 'OCG';
          this.id = id;
        };
        PDFNet.OCGConfig = function (id) {
          this.name = 'OCGConfig';
          this.id = id;
        };
        PDFNet.OCGContext = function (id) {
          this.name = 'OCGContext';
          this.id = id;
        };
        PDFNet.OCGContext.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.OCMD = function (id) {
          this.name = 'OCMD';
          this.id = id;
        };
        PDFNet.OCRModule = function (id) {
          this.name = 'OCRModule';
          this.id = id;
        };
        PDFNet.Obj = function (id) {
          this.name = 'Obj';
          this.id = id;
        };
        PDFNet.ObjSet = function (id) {
          this.name = 'ObjSet';
          this.id = id;
        };
        PDFNet.ObjSet.prototype = Object.create(PDFNet.Destroyable.prototype);
        PDFNet.ObjectIdentifier = function (id) {
          this.name = 'ObjectIdentifier';
          this.id = id;
        };
        PDFNet.ObjectIdentifier.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.OwnedBitmap = function (id) {
          this.name = 'OwnedBitmap';
          this.id = id;
        };
        PDFNet.PDFACompliance = function (id) {
          this.name = 'PDFACompliance';
          this.id = id;
        };
        PDFNet.PDFACompliance.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.PDFDC = function (id) {
          this.name = 'PDFDC';
          this.id = id;
        };
        PDFNet.PDFDCEX = function (id) {
          this.name = 'PDFDCEX';
          this.id = id;
        };
        PDFNet.PDFDoc = function (id) {
          this.name = 'PDFDoc';
          this.id = id;
        };
        PDFNet.PDFDoc.prototype = Object.create(PDFNet.Destroyable.prototype);
        PDFNet.PDFDocInfo = function (id) {
          this.name = 'PDFDocInfo';
          this.id = id;
        };
        PDFNet.PDFDocViewPrefs = function (id) {
          this.name = 'PDFDocViewPrefs';
          this.id = id;
        };
        PDFNet.PDFDraw = function (id) {
          this.name = 'PDFDraw';
          this.id = id;
        };
        PDFNet.PDFDraw.prototype = Object.create(PDFNet.Destroyable.prototype);
        PDFNet.PDFRasterizer = function (id) {
          this.name = 'PDFRasterizer';
          this.id = id;
        };
        PDFNet.PDFRasterizer.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.PDFTronCustomSecurityHandler = function (id) {
          this.name = 'PDFTronCustomSecurityHandler';
          this.id = id;
        };
        PDFNet.Page = function (id) {
          this.name = 'Page';
          this.id = id;
        };
        PDFNet.PageLabel = function (mp_obj, m_first_page, m_last_page) {
          this.name = 'PageLabel';
          if (mp_obj && 'undefined' === typeof m_first_page)
            copyFunc(mp_obj, this);
          else
            return (
              'undefined' === typeof mp_obj && (mp_obj = '0'),
              'undefined' === typeof m_first_page && (m_first_page = 0),
              'undefined' === typeof m_last_page && (m_last_page = 0),
              new PDFNet.PageLabel({
                mp_obj: mp_obj,
                m_first_page: m_first_page,
                m_last_page: m_last_page,
              })
            );
        };
        PDFNet.PageSet = function (id) {
          this.name = 'PageSet';
          this.id = id;
        };
        PDFNet.PageSet.prototype = Object.create(PDFNet.Destroyable.prototype);
        PDFNet.Paragraph = function (id) {
          this.name = 'Paragraph';
          this.id = id;
        };
        PDFNet.PatternColor = function (id) {
          this.name = 'PatternColor';
          this.id = id;
        };
        PDFNet.PatternColor.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.PolyLineAnnot = function (id) {
          this.name = 'PolyLineAnnot';
          this.id = id;
        };
        PDFNet.PolygonAnnot = function (id) {
          this.name = 'PolygonAnnot';
          this.id = id;
        };
        PDFNet.PopupAnnot = function (id) {
          this.name = 'PopupAnnot';
          this.id = id;
        };
        PDFNet.PrinterMode = function (id) {
          this.name = 'PrinterMode';
          this.id = id;
        };
        PDFNet.PushButtonWidget = function (id) {
          this.name = 'PushButtonWidget';
          this.id = id;
        };
        PDFNet.RadioButtonGroup = function (id) {
          this.name = 'RadioButtonGroup';
          this.id = id;
        };
        PDFNet.RadioButtonGroup.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.RadioButtonWidget = function (id) {
          this.name = 'RadioButtonWidget';
          this.id = id;
        };
        PDFNet.Rect = function (x1, y1, x2, y2, mp_rect) {
          this.name = 'Rect';
          if (x1 && 'undefined' === typeof y1) copyFunc(x1, this);
          else
            return (
              'undefined' === typeof x1 && (x1 = 0),
              'undefined' === typeof y1 && (y1 = 0),
              'undefined' === typeof x2 && (x2 = 0),
              'undefined' === typeof y2 && (y2 = 0),
              'undefined' === typeof mp_rect && (mp_rect = '0'),
              new PDFNet.Rect({
                x1: x1,
                y1: y1,
                x2: x2,
                y2: y2,
                mp_rect: mp_rect,
              })
            );
        };
        PDFNet.Redaction = function (id) {
          this.name = 'Redaction';
          this.id = id;
        };
        PDFNet.RedactionAnnot = function (id) {
          this.name = 'RedactionAnnot';
          this.id = id;
        };
        PDFNet.Redactor = function (id) {
          this.name = 'Redactor';
          this.id = id;
        };
        PDFNet.Reflow = function (id) {
          this.name = 'Reflow';
          this.id = id;
        };
        PDFNet.Reflow.prototype = Object.create(PDFNet.Destroyable.prototype);
        PDFNet.ResultSnapshot = function (id) {
          this.name = 'ResultSnapshot';
          this.id = id;
        };
        PDFNet.ResultSnapshot.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.RoleMap = function (id) {
          this.name = 'RoleMap';
          this.id = id;
        };
        PDFNet.RubberStampAnnot = function (id) {
          this.name = 'RubberStampAnnot';
          this.id = id;
        };
        PDFNet.SDFDoc = function (id) {
          this.name = 'SDFDoc';
          this.id = id;
        };
        PDFNet.SElement = function (obj, k) {
          this.name = 'SElement';
          if (obj && 'undefined' === typeof k) copyFunc(obj, this);
          else
            return (
              'undefined' === typeof obj && (obj = '0'),
              'undefined' === typeof k && (k = '0'),
              new PDFNet.SElement({ obj: obj, k: k })
            );
        };
        PDFNet.STree = function (id) {
          this.name = 'STree';
          this.id = id;
        };
        PDFNet.ScreenAnnot = function (id) {
          this.name = 'ScreenAnnot';
          this.id = id;
        };
        PDFNet.SecurityHandler = function (id) {
          this.name = 'SecurityHandler';
          this.id = id;
        };
        PDFNet.SecurityHandler.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.Shading = function (id) {
          this.name = 'Shading';
          this.id = id;
        };
        PDFNet.Shading.prototype = Object.create(PDFNet.Destroyable.prototype);
        PDFNet.ShapedText = function (id) {
          this.name = 'ShapedText';
          this.id = id;
        };
        PDFNet.ShapedText.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.SignatureHandler = function (id) {
          this.name = 'SignatureHandler';
          this.id = id;
        };
        PDFNet.SignatureWidget = function (id) {
          this.name = 'SignatureWidget';
          this.id = id;
        };
        PDFNet.SoundAnnot = function (id) {
          this.name = 'SoundAnnot';
          this.id = id;
        };
        PDFNet.SquareAnnot = function (id) {
          this.name = 'SquareAnnot';
          this.id = id;
        };
        PDFNet.SquigglyAnnot = function (id) {
          this.name = 'SquigglyAnnot';
          this.id = id;
        };
        PDFNet.Stamper = function (id) {
          this.name = 'Stamper';
          this.id = id;
        };
        PDFNet.Stamper.prototype = Object.create(PDFNet.Destroyable.prototype);
        PDFNet.StrikeOutAnnot = function (id) {
          this.name = 'StrikeOutAnnot';
          this.id = id;
        };
        PDFNet.Table = function (id) {
          this.name = 'Table';
          this.id = id;
        };
        PDFNet.TableCell = function (id) {
          this.name = 'TableCell';
          this.id = id;
        };
        PDFNet.TableRow = function (id) {
          this.name = 'TableRow';
          this.id = id;
        };
        PDFNet.TextAnnot = function (id) {
          this.name = 'TextAnnot';
          this.id = id;
        };
        PDFNet.TextExtractor = function (id) {
          this.name = 'TextExtractor';
          this.id = id;
        };
        PDFNet.TextExtractor.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.TextExtractorLine = function (
          line,
          uni,
          num,
          cur_num,
          m_direction,
          mp_bld
        ) {
          this.name = 'TextExtractorLine';
          if (line && 'undefined' === typeof uni) copyFunc(line, this);
          else
            return (
              'undefined' === typeof line && (line = '0'),
              'undefined' === typeof uni && (uni = '0'),
              'undefined' === typeof num && (num = 0),
              'undefined' === typeof cur_num && (cur_num = 0),
              'undefined' === typeof m_direction && (m_direction = 0),
              'undefined' === typeof mp_bld && (mp_bld = '0'),
              new PDFNet.TextExtractorLine({
                line: line,
                uni: uni,
                num: num,
                cur_num: cur_num,
                m_direction: m_direction,
                mp_bld: mp_bld,
              })
            );
        };
        PDFNet.TextExtractorStyle = function (mp_imp) {
          this.name = 'TextExtractorStyle';
          if ('object' === _typeof(mp_imp)) copyFunc(mp_imp, this);
          else if ('undefined' !== typeof mp_imp)
            return new PDFNet.TextExtractorStyle({ mp_imp: mp_imp });
        };
        PDFNet.TextExtractorWord = function (
          line,
          word,
          uni,
          num,
          cur_num,
          mp_bld
        ) {
          this.name = 'TextExtractorWord';
          if (line && 'undefined' === typeof word) copyFunc(line, this);
          else
            return (
              'undefined' === typeof line && (line = '0'),
              'undefined' === typeof word && (word = '0'),
              'undefined' === typeof uni && (uni = '0'),
              'undefined' === typeof num && (num = 0),
              'undefined' === typeof cur_num && (cur_num = 0),
              'undefined' === typeof mp_bld && (mp_bld = '0'),
              new PDFNet.TextExtractorWord({
                line: line,
                word: word,
                uni: uni,
                num: num,
                cur_num: cur_num,
                mp_bld: mp_bld,
              })
            );
        };
        PDFNet.TextMarkupAnnot = function (id) {
          this.name = 'TextMarkupAnnot';
          this.id = id;
        };
        PDFNet.TextRange = function (id) {
          this.name = 'TextRange';
          this.id = id;
        };
        PDFNet.TextRun = function (id) {
          this.name = 'TextRun';
          this.id = id;
        };
        PDFNet.TextSearch = function (id) {
          this.name = 'TextSearch';
          this.id = id;
        };
        PDFNet.TextSearch.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.TextStyledElement = function (id) {
          this.name = 'TextStyledElement';
          this.id = id;
        };
        PDFNet.TextWidget = function (id) {
          this.name = 'TextWidget';
          this.id = id;
        };
        PDFNet.TimestampingConfiguration = function (id) {
          this.name = 'TimestampingConfiguration';
          this.id = id;
        };
        PDFNet.TimestampingConfiguration.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.TimestampingResult = function (id) {
          this.name = 'TimestampingResult';
          this.id = id;
        };
        PDFNet.TimestampingResult.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.TrustVerificationResult = function (id) {
          this.name = 'TrustVerificationResult';
          this.id = id;
        };
        PDFNet.TrustVerificationResult.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.UnderlineAnnot = function (id) {
          this.name = 'UnderlineAnnot';
          this.id = id;
        };
        PDFNet.UndoManager = function (id) {
          this.name = 'UndoManager';
          this.id = id;
        };
        PDFNet.UndoManager.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.VerificationOptions = function (id) {
          this.name = 'VerificationOptions';
          this.id = id;
        };
        PDFNet.VerificationOptions.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.VerificationResult = function (id) {
          this.name = 'VerificationResult';
          this.id = id;
        };
        PDFNet.VerificationResult.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.ViewChangeCollection = function (id) {
          this.name = 'ViewChangeCollection';
          this.id = id;
        };
        PDFNet.ViewChangeCollection.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.WatermarkAnnot = function (id) {
          this.name = 'WatermarkAnnot';
          this.id = id;
        };
        PDFNet.WebFontDownloader = function (id) {
          this.name = 'WebFontDownloader';
          this.id = id;
        };
        PDFNet.WidgetAnnot = function (id) {
          this.name = 'WidgetAnnot';
          this.id = id;
        };
        PDFNet.X501AttributeTypeAndValue = function (id) {
          this.name = 'X501AttributeTypeAndValue';
          this.id = id;
        };
        PDFNet.X501AttributeTypeAndValue.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.X501DistinguishedName = function (id) {
          this.name = 'X501DistinguishedName';
          this.id = id;
        };
        PDFNet.X501DistinguishedName.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.X509Certificate = function (id) {
          this.name = 'X509Certificate';
          this.id = id;
        };
        PDFNet.X509Certificate.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.X509Extension = function (id) {
          this.name = 'X509Extension';
          this.id = id;
        };
        PDFNet.X509Extension.prototype = Object.create(
          PDFNet.Destroyable.prototype
        );
        PDFNet.PDFDoc.createRefreshOptions = function () {
          return Promise.resolve(new PDFNet.PDFDoc.RefreshOptions());
        };
        PDFNet.PDFDoc.RefreshOptions = function () {
          this.mImpl = {};
          this.mHelpers = optionsHelpers();
        };
        PDFNet.PDFDoc.RefreshOptions.prototype.getDrawBackgroundOnly =
          function () {
            return 'DrawBackgroundOnly' in this.mImpl
              ? !!this.mImpl.DrawBackgroundOnly
              : !0;
          };
        PDFNet.PDFDoc.RefreshOptions.prototype.setDrawBackgroundOnly =
          function (value) {
            this.mHelpers.putBool(this.mImpl, 'DrawBackgroundOnly', value);
            return this;
          };
        PDFNet.PDFDoc.RefreshOptions.prototype.getRefreshExisting =
          function () {
            return 'RefreshExisting' in this.mImpl
              ? !!this.mImpl.RefreshExisting
              : !0;
          };
        PDFNet.PDFDoc.RefreshOptions.prototype.setRefreshExisting = function (
          value
        ) {
          this.mHelpers.putBool(this.mImpl, 'RefreshExisting', value);
          return this;
        };
        PDFNet.PDFDoc.RefreshOptions.prototype.getUseNonStandardRotation =
          function () {
            return 'UseNonStandardRotation' in this.mImpl
              ? !!this.mImpl.UseNonStandardRotation
              : !1;
          };
        PDFNet.PDFDoc.RefreshOptions.prototype.setUseNonStandardRotation =
          function (value) {
            this.mHelpers.putBool(this.mImpl, 'UseNonStandardRotation', value);
            return this;
          };
        PDFNet.PDFDoc.RefreshOptions.prototype.getUseRoundedCorners =
          function () {
            return 'UseRoundedCorners' in this.mImpl
              ? !!this.mImpl.UseRoundedCorners
              : !1;
          };
        PDFNet.PDFDoc.RefreshOptions.prototype.setUseRoundedCorners = function (
          value
        ) {
          this.mHelpers.putBool(this.mImpl, 'UseRoundedCorners', value);
          return this;
        };
        PDFNet.PDFDoc.RefreshOptions.prototype.getJsonString = function () {
          return JSON.stringify(this.mImpl);
        };
        PDFNet.createRefreshOptions = PDFNet.PDFDoc.createRefreshOptions;
        PDFNet.RefreshOptions = PDFNet.PDFDoc.RefreshOptions;
        PDFNet.PDFDoc.createDiffOptions = function () {
          return Promise.resolve(new PDFNet.PDFDoc.DiffOptions());
        };
        PDFNet.PDFDoc.DiffOptions = function () {
          this.mImpl = {};
          this.mHelpers = optionsHelpers();
        };
        PDFNet.PDFDoc.DiffOptions.prototype.getAddGroupAnnots = function () {
          return 'AddGroupAnnots' in this.mImpl
            ? !!this.mImpl.AddGroupAnnots
            : !1;
        };
        PDFNet.PDFDoc.DiffOptions.prototype.setAddGroupAnnots = function (
          value
        ) {
          this.mHelpers.putBool(this.mImpl, 'AddGroupAnnots', value);
          return this;
        };
        PDFNet.PDFDoc.DiffOptions.prototype.getBlendMode = function () {
          return 'BlendMode' in this.mImpl ? this.mImpl.BlendMode : 5;
        };
        PDFNet.PDFDoc.DiffOptions.prototype.setBlendMode = function (value) {
          this.mHelpers.putNumber(this.mImpl, 'BlendMode', value);
          return this;
        };
        PDFNet.PDFDoc.DiffOptions.prototype.getColorA = function () {
          return 'ColorA' in this.mImpl
            ? this.mHelpers.jsColorFromNumber(this.mImpl.ColorA)
            : this.mHelpers.jsColorFromNumber(4291559424);
        };
        PDFNet.PDFDoc.DiffOptions.prototype.setColorA = function (value) {
          this.mHelpers.putNumber(
            this.mImpl,
            'ColorA',
            this.mHelpers.jsColorToNumber(value)
          );
          return this;
        };
        PDFNet.PDFDoc.DiffOptions.prototype.getColorB = function () {
          return 'ColorB' in this.mImpl
            ? this.mHelpers.jsColorFromNumber(this.mImpl.ColorB)
            : this.mHelpers.jsColorFromNumber(4278242508);
        };
        PDFNet.PDFDoc.DiffOptions.prototype.setColorB = function (value) {
          this.mHelpers.putNumber(
            this.mImpl,
            'ColorB',
            this.mHelpers.jsColorToNumber(value)
          );
          return this;
        };
        PDFNet.PDFDoc.DiffOptions.prototype.getLuminosityCompression =
          function () {
            return 'LuminosityCompression' in this.mImpl
              ? this.mImpl.LuminosityCompression
              : 10;
          };
        PDFNet.PDFDoc.DiffOptions.prototype.setLuminosityCompression =
          function (value) {
            this.mHelpers.putNumber(this.mImpl, 'LuminosityCompression', value);
            return this;
          };
        PDFNet.PDFDoc.DiffOptions.prototype.getJsonString = function () {
          return JSON.stringify(this.mImpl);
        };
        PDFNet.createDiffOptions = PDFNet.PDFDoc.createDiffOptions;
        PDFNet.DiffOptions = PDFNet.PDFDoc.DiffOptions;
        PDFNet.PDFDoc.createTextDiffOptions = function () {
          return Promise.resolve(new PDFNet.PDFDoc.TextDiffOptions());
        };
        PDFNet.PDFDoc.TextDiffOptions = function () {
          this.name = 'PDFNet.PDFDoc.TextDiffOptions';
          this.mImpl = {};
          this.mHelpers = optionsHelpers();
        };
        PDFNet.PDFDoc.TextDiffOptions.prototype.getColorA = function () {
          return 'ColorA' in this.mImpl
            ? this.mHelpers.jsColorFromNumber(this.mImpl.ColorA)
            : this.mHelpers.jsColorFromNumber(4293284423);
        };
        PDFNet.PDFDoc.TextDiffOptions.prototype.setColorA = function (color) {
          this.mHelpers.putNumber(
            this.mImpl,
            'ColorA',
            this.mHelpers.jsColorToNumber(color)
          );
          return this;
        };
        PDFNet.PDFDoc.TextDiffOptions.prototype.getOpacityA = function () {
          return 'OpacityA' in this.mImpl ? this.mImpl.OpacityA : 0.5;
        };
        PDFNet.PDFDoc.TextDiffOptions.prototype.setOpacityA = function (
          opacity
        ) {
          this.mHelpers.putNumber(this.mImpl, 'OpacityA', opacity);
          return this;
        };
        PDFNet.PDFDoc.TextDiffOptions.prototype.getColorB = function () {
          return 'ColorB' in this.mImpl
            ? this.mHelpers.jsColorFromNumber(this.mImpl.ColorB)
            : this.mHelpers.jsColorFromNumber(4284278322);
        };
        PDFNet.PDFDoc.TextDiffOptions.prototype.setColorB = function (color) {
          this.mHelpers.putNumber(
            this.mImpl,
            'ColorB',
            this.mHelpers.jsColorToNumber(color)
          );
          return this;
        };
        PDFNet.PDFDoc.TextDiffOptions.prototype.getCompareUsingZOrder =
          function () {
            return 'CompareUsingZOrder' in this.mImpl
              ? !!this.mImpl.CompareUsingZOrder
              : !1;
          };
        PDFNet.PDFDoc.TextDiffOptions.prototype.setCompareUsingZOrder =
          function (value) {
            this.mHelpers.putBool(this.mImpl, 'CompareUsingZOrder', value);
            return this;
          };
        PDFNet.PDFDoc.TextDiffOptions.prototype.getOpacityB = function () {
          return 'OpacityB' in this.mImpl ? this.mImpl.OpacityB : 0.5;
        };
        PDFNet.PDFDoc.TextDiffOptions.prototype.setOpacityB = function (
          opacity
        ) {
          this.mHelpers.putNumber(this.mImpl, 'OpacityB', opacity);
          return this;
        };
        PDFNet.PDFDoc.TextDiffOptions.prototype.addZonesForPage = function (
          zones,
          regions,
          page_num
        ) {
          'undefined' === typeof this.mImpl[zones] && (this.mImpl[zones] = []);
          if (this.mImpl[zones].length < page_num)
            for (var i = this.mImpl[zones].length; i < page_num; i++)
              this.mImpl[zones].push([]);
          regions = regions.map(function (rect) {
            return [rect.x1, rect.y1, rect.x2, rect.y2];
          });
          this.mImpl[zones][page_num - 1] = regions;
        };
        PDFNet.PDFDoc.TextDiffOptions.prototype.getExtraMoveColor =
          function () {
            return 'ExtraMoveColor' in this.mImpl
              ? this.mHelpers.jsColorFromNumber(this.mImpl.ExtraMoveColor)
              : this.mHelpers.jsColorFromNumber(4294898256);
          };
        PDFNet.PDFDoc.TextDiffOptions.prototype.setExtraMoveColor = function (
          color
        ) {
          this.mHelpers.putNumber(
            this.mImpl,
            'ExtraMoveColor',
            this.mHelpers.jsColorToNumber(color)
          );
          return this;
        };
        PDFNet.PDFDoc.TextDiffOptions.prototype.getExtraMoveOpacity =
          function () {
            return 'ExtraMoveOpacity' in this.mImpl
              ? this.mImpl.ExtraMoveOpacity
              : 0.8;
          };
        PDFNet.PDFDoc.TextDiffOptions.prototype.setExtraMoveOpacity = function (
          opacity
        ) {
          this.mHelpers.putNumber(this.mImpl, 'ExtraMoveOpacity', opacity);
          return this;
        };
        PDFNet.PDFDoc.TextDiffOptions.prototype.getExtraMoveHighlight =
          function () {
            return 'ExtraMoveHighlight' in this.mImpl
              ? !!this.mImpl.ExtraMoveHighlight
              : !1;
          };
        PDFNet.PDFDoc.TextDiffOptions.prototype.setExtraMoveHighlight =
          function (value) {
            this.mHelpers.putBool(this.mImpl, 'ExtraMoveHighlight', value);
            return this;
          };
        PDFNet.PDFDoc.TextDiffOptions.prototype.getShowPlaceholders =
          function () {
            return 'ShowPlaceholders' in this.mImpl
              ? !!this.mImpl.ShowPlaceholders
              : !1;
          };
        PDFNet.PDFDoc.TextDiffOptions.prototype.setShowPlaceholders = function (
          value
        ) {
          this.mHelpers.putBool(this.mImpl, 'ShowPlaceholders', value);
          return this;
        };
        PDFNet.PDFDoc.TextDiffOptions.prototype.getCompareStyles = function () {
          return 'CompareStyles' in this.mImpl
            ? !!this.mImpl.CompareStyles
            : !1;
        };
        PDFNet.PDFDoc.TextDiffOptions.prototype.setCompareStyles = function (
          value
        ) {
          this.mHelpers.putBool(this.mImpl, 'CompareStyles', value);
          return this;
        };
        PDFNet.PDFDoc.TextDiffOptions.prototype.addIgnoreZonesForPage =
          function (regions, page_num) {
            this.addZonesForPage('IgnoreZones', regions, page_num);
            return this;
          };
        PDFNet.PDFDoc.TextDiffOptions.prototype.getJsonString = function () {
          return JSON.stringify(this.mImpl);
        };
        PDFNet.FDFDoc.createXFDFExportOptions = function () {
          return Promise.resolve(new PDFNet.FDFDoc.XFDFExportOptions());
        };
        PDFNet.FDFDoc.XFDFExportOptions = function () {
          this.name = 'PDFNet.FDFDoc.XFDFExportOptions';
          this.mImpl = {};
          this.mHelpers = optionsHelpers();
        };
        PDFNet.FDFDoc.XFDFExportOptions.prototype.getWriteAnnotationAppearance =
          function () {
            return 'WriteAnnotationAppearance' in this.mImpl
              ? !!this.mImpl.WriteAnnotationAppearance
              : !1;
          };
        PDFNet.FDFDoc.XFDFExportOptions.prototype.setWriteAnnotationAppearance =
          function (value) {
            this.mHelpers.putBool(
              this.mImpl,
              'WriteAnnotationAppearance',
              value
            );
            return this;
          };
        PDFNet.FDFDoc.XFDFExportOptions.prototype.getWriteImagedata =
          function () {
            return 'WriteImagedata' in this.mImpl
              ? !!this.mImpl.WriteImagedata
              : !0;
          };
        PDFNet.FDFDoc.XFDFExportOptions.prototype.setWriteImagedata = function (
          value
        ) {
          this.mHelpers.putBool(this.mImpl, 'WriteImagedata', value);
          return this;
        };
        PDFNet.FDFDoc.XFDFExportOptions.prototype.getJsonString = function () {
          return JSON.stringify(this.mImpl);
        };
        PDFNet.PDFDoc.createSnapToOptions = function () {
          return Promise.resolve(new PDFNet.PDFDoc.SnapToOptions());
        };
        PDFNet.PDFDoc.SnapToOptions = function () {
          this.name = 'PDFNet.PDFDoc.SnapToOptions';
          this.mImpl = {};
          this.mHelpers = optionsHelpers();
        };
        PDFNet.PDFDoc.SnapToOptions.prototype.setShapeLimit = function (value) {
          this.mHelpers.putNumber(this.mImpl, 'ShapeLimit', value);
          return this;
        };
        PDFNet.PDFDoc.SnapToOptions.prototype.getJsonString = function () {
          return JSON.stringify(this.mImpl);
        };
        PDFNet.PDFDoc.createMergeXFDFOptions = function () {
          return Promise.resolve(new PDFNet.PDFDoc.MergeXFDFOptions());
        };
        PDFNet.PDFDoc.MergeXFDFOptions = function () {
          this.name = 'PDFNet.PDFDoc.MergeXFDFOptions';
          this.mImpl = {};
          this.mHelpers = optionsHelpers();
        };
        PDFNet.PDFDoc.MergeXFDFOptions.prototype.getForce = function () {
          return 'Force' in this.mImpl ? !!this.mImpl.Force : !1;
        };
        PDFNet.PDFDoc.MergeXFDFOptions.prototype.setForce = function (value) {
          this.mHelpers.putBool(this.mImpl, 'Force', value);
          return this;
        };
        PDFNet.PDFDoc.MergeXFDFOptions.prototype.getJsonString = function () {
          return JSON.stringify(this.mImpl);
        };
        PDFNet.QuadPoint = function (p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
          this.name = 'QuadPoint';
          if (p1x && 'undefined' === typeof p1y) copyFunc(p1x, this);
          else
            return (
              'undefined' === typeof p1x && (p1x = 0),
              'undefined' === typeof p1y && (p1y = 0),
              'undefined' === typeof p2x && (p2x = 0),
              'undefined' === typeof p2y && (p2y = 0),
              'undefined' === typeof p3x && (p3x = 0),
              'undefined' === typeof p3y && (p3y = 0),
              'undefined' === typeof p4x && (p4x = 0),
              'undefined' === typeof p4y && (p4y = 0),
              new PDFNet.QuadPoint({
                p1x: p1x,
                p1y: p1y,
                p2x: p2x,
                p2y: p2y,
                p3x: p3x,
                p3y: p3y,
                p4x: p4x,
                p4y: p4y,
              })
            );
        };
        PDFNet.Point = function (x, y) {
          this.name = 'Point';
          if (x && 'undefined' === typeof y) copyFunc(x, this);
          else
            return (
              'undefined' === typeof x && (x = 0),
              'undefined' === typeof y && (y = 0),
              new PDFNet.Point({ x: x, y: y })
            );
        };
        PDFNet.CharData = function (charData) {
          if ('undefined' === typeof charData)
            throw new TypeError(
              'CharData requires an object to construct with.'
            );
          this.name = 'CharData';
          copyFunc(charData, this);
        };
        PDFNet.Separation = function (separation) {
          if ('undefined' === typeof separation)
            throw new TypeError(
              'Separation requires an object to construct with.'
            );
          this.name = 'Separation';
          copyFunc(separation, this);
        };
        PDFNet.Optimizer.createImageSettings = function () {
          return Promise.resolve(new PDFNet.Optimizer.ImageSettings());
        };
        PDFNet.Optimizer.ImageSettings = function () {
          this.m_max_pixels = 4294967295;
          this.m_max_dpi = 225;
          this.m_resample_dpi = 150;
          this.m_quality = 5;
          this.m_compression_mode =
            PDFNet.Optimizer.ImageSettings.CompressionMode.e_retain;
          this.m_downsample_mode =
            PDFNet.Optimizer.ImageSettings.DownsampleMode.e_default;
          this.m_force_changes = this.m_force_recompression = !1;
        };
        PDFNet.Optimizer.ImageSettings.prototype.setImageDPI = function (
          maximum,
          resampling
        ) {
          this.m_max_dpi = maximum;
          this.m_resample_dpi = resampling;
          return this;
        };
        PDFNet.Optimizer.ImageSettings.prototype.setCompressionMode = function (
          mode
        ) {
          this.m_compression_mode = mode;
          return this;
        };
        PDFNet.Optimizer.ImageSettings.prototype.setDownsampleMode = function (
          mode
        ) {
          this.m_downsample_mode = mode;
          return this;
        };
        PDFNet.Optimizer.ImageSettings.prototype.setQuality = function (
          quality
        ) {
          this.m_quality = quality;
          return this;
        };
        PDFNet.Optimizer.ImageSettings.prototype.forceRecompression = function (
          force
        ) {
          this.m_force_recompression = force;
          return this;
        };
        PDFNet.Optimizer.ImageSettings.prototype.forceChanges = function (
          force
        ) {
          this.m_force_changes = force;
          return this;
        };
        PDFNet.Optimizer.createMonoImageSettings = function () {
          return Promise.resolve(new PDFNet.Optimizer.MonoImageSettings());
        };
        PDFNet.Optimizer.MonoImageSettings = function () {
          this.m_max_pixels = 4294967295;
          this.m_max_dpi = 450;
          this.m_resample_dpi = 300;
          this.m_jbig2_threshold = 8.5;
          this.m_compression_mode =
            PDFNet.Optimizer.ImageSettings.CompressionMode.e_retain;
          this.m_downsample_mode =
            PDFNet.Optimizer.ImageSettings.DownsampleMode.e_default;
          this.m_force_changes = this.m_force_recompression = !1;
        };
        PDFNet.Optimizer.MonoImageSettings.prototype.setImageDPI = function (
          maximum,
          resampling
        ) {
          this.m_max_dpi = maximum;
          this.m_resample_dpi = resampling;
          return this;
        };
        PDFNet.Optimizer.MonoImageSettings.prototype.setCompressionMode =
          function (mode) {
            this.m_compression_mode = mode;
            return this;
          };
        PDFNet.Optimizer.MonoImageSettings.prototype.setDownsampleMode =
          function (mode) {
            this.m_downsample_mode = mode;
            return this;
          };
        PDFNet.Optimizer.MonoImageSettings.prototype.setJBIG2Threshold =
          function (jbig2_threshold) {
            this.m_jbig2_threshold = quality;
            return this;
          };
        PDFNet.Optimizer.MonoImageSettings.prototype.forceRecompression =
          function (force) {
            this.m_force_recompression = force;
            return this;
          };
        PDFNet.Optimizer.MonoImageSettings.prototype.forceChanges = function (
          force
        ) {
          this.m_force_changes = force;
          return this;
        };
        PDFNet.Optimizer.createTextSettings = function () {
          return Promise.resolve(new PDFNet.Optimizer.TextSettings());
        };
        PDFNet.Optimizer.TextSettings = function () {
          this.m_embed_fonts = this.m_subset_fonts = !1;
        };
        PDFNet.Optimizer.TextSettings.prototype.subsetFonts = function (
          subset
        ) {
          this.m_subset_fonts = subset;
          return this;
        };
        PDFNet.Optimizer.TextSettings.prototype.embedFonts = function (embed) {
          this.m_embed_fonts = embed;
          return this;
        };
        PDFNet.Optimizer.createOptimizerSettings = function () {
          return Promise.resolve(new PDFNet.Optimizer.OptimizerSettings());
        };
        PDFNet.Optimizer.OptimizerSettings = function () {
          this.color_image_settings = new PDFNet.Optimizer.ImageSettings();
          this.grayscale_image_settings = new PDFNet.Optimizer.ImageSettings();
          this.mono_image_settings = new PDFNet.Optimizer.MonoImageSettings();
          this.text_settings = new PDFNet.Optimizer.TextSettings();
          this.remove_custom = !0;
        };
        PDFNet.Optimizer.OptimizerSettings.prototype.setColorImageSettings =
          function (settings) {
            this.color_image_settings = settings;
            return this;
          };
        PDFNet.Optimizer.OptimizerSettings.prototype.setGrayscaleImageSettings =
          function (settings) {
            this.grayscale_image_settings = settings;
            return this;
          };
        PDFNet.Optimizer.OptimizerSettings.prototype.setMonoImageSettings =
          function (settings) {
            this.mono_image_settings = settings;
            return this;
          };
        PDFNet.Optimizer.OptimizerSettings.prototype.setTextSettings =
          function (settings) {
            this.text_settings = settings;
            return this;
          };
        PDFNet.Optimizer.OptimizerSettings.prototype.removeCustomEntries =
          function (should_remove) {
            this.remove_custom = should_remove;
            return this;
          };
        PDFNet.Optimizer.ImageSettings.CompressionMode = {
          e_retain: 0,
          e_flate: 1,
          e_jpeg: 2,
          e_jpeg2000: 3,
          e_none: 4,
        };
        PDFNet.Optimizer.ImageSettings.DownsampleMode = {
          e_off: 0,
          e_default: 1,
        };
        PDFNet.Optimizer.MonoImageSettings.CompressionMode = {
          e_jbig2: 0,
          e_flate: 1,
          e_none: 2,
        };
        PDFNet.Optimizer.MonoImageSettings.DownsampleMode = {
          e_off: 0,
          e_default: 1,
        };
        PDFNet.Convert.ConversionOptions = function (json) {
          this.name = 'PDFNet.Convert.ConversionOptions';
          json && copyFunc(JSON.parse(json), this);
        };
        PDFNet.Convert.ConversionOptions.prototype.setFileExtension = function (
          value
        ) {
          this.FileExtension = value;
          return this;
        };
        PDFNet.Convert.ConversionOptions.prototype.setEnableExternalMediaDownloads =
          function (value) {
            this.EnableExternalMediaDownloads = value;
            return this;
          };
        PDFNet.Convert.createOfficeToPDFOptions = function (json) {
          return Promise.resolve(new PDFNet.Convert.OfficeToPDFOptions(json));
        };
        PDFNet.Convert.OfficeToPDFOptions = function (json) {
          PDFNet.Convert.ConversionOptions.call(this, json);
        };
        PDFNet.Convert.OfficeToPDFOptions.prototype.setApplyPageBreaksToSheet =
          function (value) {
            this.ApplyPageBreaksToSheet = value;
            return this;
          };
        PDFNet.Convert.OfficeToPDFOptions.prototype.setDisplayChangeTracking =
          function (value) {
            this.DisplayChangeTracking = value;
            return this;
          };
        PDFNet.Convert.OfficeToPDFOptions.prototype.setExcelDefaultCellBorderWidth =
          function (width) {
            this.ExcelDefaultCellBorderWidth = width;
            return this;
          };
        PDFNet.Convert.OfficeToPDFOptions.prototype.setExcelMaxAllowedCellCount =
          function (value) {
            this.ExcelMaxAllowedCellCount = value;
            return this;
          };
        PDFNet.Convert.OfficeToPDFOptions.prototype.setLocale = function (
          value
        ) {
          this.Locale = value;
          return this;
        };
        PDFNet.Convert.OfficeToPDFOptions.prototype.setTemplateParamsJson =
          function (value) {
            this.TemplateParamsJson = value;
            return this;
          };
        PDFNet.Convert.OverprintPreviewMode = {
          e_op_off: 0,
          e_op_on: 1,
          e_op_pdfx_on: 2,
        };
        PDFNet.Convert.XPSOutputCommonOptions = function () {
          this.name = 'PDFNet.Convert.XPSOutputCommonOptions';
          this.mImpl = {};
        };
        PDFNet.Convert.XPSOutputCommonOptions.prototype.setPrintMode =
          function (print_mode) {
            this.mImpl.PRINTMODE = print_mode;
            return this;
          };
        PDFNet.Convert.XPSOutputCommonOptions.prototype.setDPI = function (
          dpi
        ) {
          this.mImpl.DPI = dpi;
          return this;
        };
        PDFNet.Convert.XPSOutputCommonOptions.prototype.setRenderPages =
          function (render) {
            this.mImpl.RENDER = render;
            return this;
          };
        PDFNet.Convert.XPSOutputCommonOptions.prototype.setThickenLines =
          function (thicken) {
            this.mImpl.THICKENLINES = thicken;
            return this;
          };
        PDFNet.Convert.XPSOutputCommonOptions.prototype.generateURLLinks =
          function (generate) {
            this.mImpl.URL_LINKS = generate;
            return this;
          };
        PDFNet.Convert.XPSOutputCommonOptions.prototype.setOverprint =
          function (mode) {
            switch (mode) {
              case PDFNet.Convert.OverprintPreviewMode.e_op_off:
                this.mImpl.OVERPRINT_MODE = 'OFF';
                break;
              case PDFNet.Convert.OverprintPreviewMode.e_op_on:
                this.mImpl.OVERPRINT_MODE = 'ON';
                break;
              case PDFNet.Convert.OverprintPreviewMode.e_op_pdfx_on:
                this.mImpl.OVERPRINT_MODE = 'PDFX';
                break;
              default:
                console.log(
                  'unrecognized PDFNet.Convert.OverprintPreviewMode type: ' +
                    mode
                );
            }
            return this;
          };
        PDFNet.Convert.XPSOutputCommonOptions.prototype.getJsonString =
          function () {
            return JSON.stringify(this.mImpl);
          };
        PDFNet.Convert.createXPSOutputOptions = function () {
          return Promise.resolve(new PDFNet.Convert.XPSOutputOptions());
        };
        PDFNet.Convert.XPSOutputOptions = function () {
          PDFNet.Convert.XPSOutputCommonOptions.call(this);
          this.name = 'PDFNet.Convert.XPSOutputOptions';
        };
        PDFNet.Convert.XPSOutputOptions.prototype = Object.create(
          PDFNet.Convert.XPSOutputCommonOptions.prototype
        );
        PDFNet.Convert.XPSOutputOptions.prototype.setOpenXps = function (
          openxps
        ) {
          this.mImpl.OPENXPS = openxps;
          return this;
        };
        PDFNet.Convert.FlattenFlag = {
          e_off: 0,
          e_simple: 1,
          e_fast: 2,
          e_high_quality: 3,
        };
        PDFNet.Convert.FlattenThresholdFlag = {
          e_very_strict: 0,
          e_strict: 1,
          e_default: 2,
          e_keep_most: 3,
          e_keep_all: 4,
        };
        PDFNet.Convert.AnnotationOutputFlag = {
          e_internal_xfdf: 0,
          e_external_xfdf: 1,
          e_flatten: 2,
        };
        PDFNet.Convert.createXODOutputOptions = function () {
          return Promise.resolve(new PDFNet.Convert.XODOutputOptions());
        };
        PDFNet.Convert.XODOutputOptions = function () {
          PDFNet.Convert.XPSOutputCommonOptions.call(this);
          this.name = 'PDFNet.Convert.XODOutputOptions';
        };
        PDFNet.Convert.XODOutputOptions.prototype = Object.create(
          PDFNet.Convert.XPSOutputCommonOptions.prototype
        );
        PDFNet.Convert.XODOutputOptions.prototype.setExtractUsingZorder =
          function (use_zorder) {
            this.mImpl.USEZORDER = use_zorder;
            return this;
          };
        PDFNet.Convert.XODOutputOptions.prototype.setOutputThumbnails =
          function (include_thumbs) {
            this.mImpl.NOTHUMBS = include_thumbs;
            return this;
          };
        PDFNet.Convert.XODOutputOptions.prototype.setThumbnailSize = function (
          regular_size,
          large_size
        ) {
          this.mImpl.THUMB_SIZE = regular_size;
          this.mImpl.LARGE_THUMB_SIZE = large_size ? large_size : regular_size;
          return this;
        };
        PDFNet.Convert.XODOutputOptions.prototype.setElementLimit = function (
          element_limit
        ) {
          this.mImpl.ELEMENTLIMIT = element_limit;
          return this;
        };
        PDFNet.Convert.XODOutputOptions.prototype.setOpacityMaskWorkaround =
          function (opacity_render) {
            this.mImpl.MASKRENDER = opacity_render;
            return this;
          };
        PDFNet.Convert.XODOutputOptions.prototype.setMaximumImagePixels =
          function (max_pixels) {
            this.mImpl.MAX_IMAGE_PIXELS = max_pixels;
            return this;
          };
        PDFNet.Convert.XODOutputOptions.prototype.setFlattenContent = function (
          flatten
        ) {
          switch (flatten) {
            case PDFNet.Convert.FlattenFlag.e_off:
              this.mImpl.FLATTEN_CONTENT = 'OFF';
              break;
            case PDFNet.Convert.FlattenFlag.e_simple:
              this.mImpl.FLATTEN_CONTENT = 'SIMPLE';
              break;
            case PDFNet.Convert.FlattenFlag.e_fast:
              this.mImpl.FLATTEN_CONTENT = 'FAST';
              break;
            case PDFNet.Convert.FlattenFlag.e_high_quality:
              this.mImpl.FLATTEN_CONTENT = 'HIGH_QUALITY';
              break;
            default:
              console.log(
                'unrecognized PDFNet.Convert.FlattenFlag type: ' + flatten
              );
          }
          return this;
        };
        PDFNet.Convert.XODOutputOptions.prototype.setFlattenThreshold =
          function (threshold) {
            switch (threshold) {
              case PDFNet.Convert.FlattenThresholdFlag.e_very_strict:
                this.mImpl.FLATTEN_THRESHOLD = 'VERY_STRICT';
                break;
              case PDFNet.Convert.FlattenThresholdFlag.e_strict:
                this.mImpl.FLATTEN_THRESHOLD = 'STRICT';
                break;
              case PDFNet.Convert.FlattenThresholdFlag.e_default:
                this.mImpl.FLATTEN_THRESHOLD = 'DEFAULT';
                break;
              case PDFNet.Convert.FlattenThresholdFlag.e_keep_most:
                this.mImpl.FLATTEN_THRESHOLD = 'KEEP_MOST';
                break;
              case PDFNet.Convert.FlattenThresholdFlag.e_keep_all:
                this.mImpl.FLATTEN_THRESHOLD = 'KEEP_ALL';
                break;
              default:
                console.log(
                  'unrecognized PDFNet.Convert.FlattenThresholdFlag type: ' +
                    threshold
                );
            }
            return this;
          };
        PDFNet.Convert.XODOutputOptions.prototype.setPreferJPG = function (
          prefer_jpg
        ) {
          this.mImpl.PREFER_JPEG = prefer_jpg;
          return this;
        };
        PDFNet.Convert.XODOutputOptions.prototype.setJPGQuality = function (
          quality
        ) {
          this.mImpl.JPEG_QUALITY = quality;
          return this;
        };
        PDFNet.Convert.XODOutputOptions.prototype.setSilverlightTextWorkaround =
          function (workaround) {
            this.mImpl.REMOVE_ROTATED_TEXT = workaround;
            return this;
          };
        PDFNet.Convert.XODOutputOptions.prototype.setAnnotationOutput =
          function (annot_output) {
            switch (annot_output) {
              case PDFNet.Convert.AnnotationOutputFlag.e_internal_xfdf:
                this.mImpl.ANNOTATION_OUTPUT = 'INTERNAL';
                break;
              case PDFNet.Convert.AnnotationOutputFlag.e_external_xfdf:
                this.mImpl.ANNOTATION_OUTPUT = 'EXTERNAL';
                break;
              case PDFNet.Convert.AnnotationOutputFlag.e_flatten:
                this.mImpl.ANNOTATION_OUTPUT = 'FLATTEN';
                break;
              default:
                console.log(
                  'unrecognized PDFNet.Convert.AnnotationOutputFlag type: ' +
                    annot_output
                );
            }
            return this;
          };
        PDFNet.Convert.XODOutputOptions.prototype.setExternalParts = function (
          generate
        ) {
          this.mImpl.EXTERNAL_PARTS = generate;
          return this;
        };
        PDFNet.Convert.XODOutputOptions.prototype.setEncryptPassword =
          function (pass) {
            this.mImpl.ENCRYPT_PASSWORD = pass;
            return this;
          };
        PDFNet.Convert.XODOutputOptions.prototype.useSilverlightFlashCompatible =
          function (compatible) {
            this.mImpl.COMPATIBLE_XOD = compatible;
            return this;
          };
        PDFNet.Convert.createTiffOutputOptions = function () {
          return Promise.resolve(new PDFNet.Convert.TiffOutputOptions());
        };
        PDFNet.Convert.TiffOutputOptions = function () {
          this.name = 'PDFNet.Convert.TiffOutputOptions';
          this.mImpl = {};
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setBox = function (type) {
          switch (type) {
            case PDFNet.Page.Box.e_media:
              this.mImpl.BOX = 'media';
              break;
            case PDFNet.Page.Box.e_crop:
              this.mImpl.BOX = 'crop';
              break;
            case PDFNet.Page.Box.e_bleed:
              this.mImpl.BOX = 'bleed';
              break;
            case PDFNet.Page.Box.e_trim:
              this.mImpl.BOX = 'trim';
              break;
            case PDFNet.Page.Box.e_art:
              this.mImpl.BOX = 'art';
              break;
            default:
              console.log('unrecognized PDFNet.Page.Box type: ' + type);
          }
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setRotate = function (
          rotation
        ) {
          switch (rotation) {
            case PDFNet.Page.Box.e_0:
              this.mImpl.ROTATE = '0';
              break;
            case PDFNet.Page.Box.e_90:
              this.mImpl.ROTATE = '90';
              break;
            case PDFNet.Page.Box.e_180:
              this.mImpl.ROTATE = '180';
              break;
            case PDFNet.Page.Box.e_270:
              this.mImpl.ROTATE = '270';
              break;
            default:
              console.log('unrecognized PDFNet.Page.Rotate type: ' + rotation);
          }
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setClip = function (
          x1,
          y1,
          x2,
          y2
        ) {
          this.mImpl.CLIP_X1 = x1;
          this.mImpl.CLIP_Y1 = y1;
          this.mImpl.CLIP_X2 = x2;
          this.mImpl.CLIP_Y2 = y2;
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setPages = function (
          page_desc
        ) {
          this.mImpl.PAGES = page_desc;
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setOverprint = function (
          mode
        ) {
          switch (mode) {
            case PDFNet.PDFRasterizer.OverprintPreviewMode.e_op_off:
              this.mImpl.OVERPRINT_MODE = 'OFF';
              break;
            case PDFNet.PDFRasterizer.OverprintPreviewMode.e_op_on:
              this.mImpl.OVERPRINT_MODE = 'ON';
              break;
            case PDFNet.PDFRasterizer.OverprintPreviewMode.e_op_pdfx_on:
              this.mImpl.OVERPRINT_MODE = 'PDFX';
              break;
            default:
              console.log(
                'unrecognized PDFNet.PDFRasterizer.OverprintPreviewMode type: ' +
                  mode
              );
          }
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setCMYK = function (enable) {
          this.mImpl.CMYK = enable;
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setDither = function (
          enable
        ) {
          this.mImpl.DITHER = enable;
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setGray = function (enable) {
          this.mImpl.GRAY = enable;
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setMono = function (enable) {
          this.mImpl.MONO = enable;
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setAnnots = function (
          enable
        ) {
          this.mImpl.ANNOTS = enable;
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setSmooth = function (
          enable
        ) {
          this.mImpl.SMOOTH = enable;
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setPrintmode = function (
          enable
        ) {
          this.mImpl.PRINTMODE = enable;
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setTransparentPage =
          function (enable) {
            this.mImpl.TRANSPARENT_PAGE = enable;
            return this;
          };
        PDFNet.Convert.TiffOutputOptions.prototype.setPalettized = function (
          enable
        ) {
          this.mImpl.PALETTIZED = enable;
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setDPI = function (dpi) {
          this.mImpl.DPI = dpi;
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setGamma = function (gamma) {
          this.mImpl.GAMMA = gamma;
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setHRes = function (hres) {
          this.mImpl.HRES = hres;
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.setVRes = function (vres) {
          this.mImpl.VRES = vres;
          return this;
        };
        PDFNet.Convert.TiffOutputOptions.prototype.getJsonString = function () {
          return JSON.stringify(this.mImpl);
        };
        PDFNet.Convert.createHTMLOutputOptions = function () {
          return Promise.resolve(new PDFNet.Convert.HTMLOutputOptions());
        };
        PDFNet.Convert.HTMLOutputOptions = function () {
          this.name = 'PDFNet.Convert.HTMLOutputOptions';
          this.mImpl = {};
        };
        PDFNet.Convert.HTMLOutputOptions.prototype.setPreferJPG = function (
          prefer_jpg
        ) {
          this.mImpl.PREFER_JPEG = prefer_jpg;
          return this;
        };
        PDFNet.Convert.HTMLOutputOptions.prototype.setJPGQuality = function (
          quality
        ) {
          this.mImpl.JPEG_QUALITY = quality;
          return this;
        };
        PDFNet.Convert.HTMLOutputOptions.prototype.setDPI = function (dpi) {
          this.mImpl.DPI = dpi;
          return this;
        };
        PDFNet.Convert.HTMLOutputOptions.prototype.setMaximumImagePixels =
          function (max_pixels) {
            this.mImpl.MAX_IMAGE_PIXELS = max_pixels;
            return this;
          };
        PDFNet.Convert.HTMLOutputOptions.prototype.setScale = function (scale) {
          this.mImpl.SCALE = scale;
          return this;
        };
        PDFNet.Convert.HTMLOutputOptions.prototype.setExternalLinks = function (
          enable
        ) {
          this.mImpl.EXTERNAL_LINKS = enable;
          return this;
        };
        PDFNet.Convert.HTMLOutputOptions.prototype.setInternalLinks = function (
          enable
        ) {
          this.mImpl.INTERNAL_LINKS = enable;
          return this;
        };
        PDFNet.Convert.HTMLOutputOptions.prototype.setSimplifyText = function (
          enable
        ) {
          this.mImpl.SIMPLIFY_TEXT = enable;
          return this;
        };
        PDFNet.Convert.HTMLOutputOptions.prototype.getJsonString = function () {
          return JSON.stringify(this.mImpl);
        };
        PDFNet.Convert.createEPUBOutputOptions = function () {
          return Promise.resolve(new PDFNet.Convert.EPUBOutputOptions());
        };
        PDFNet.Convert.EPUBOutputOptions = function () {
          this.name = 'PDFNet.Convert.EPUBOutputOptions';
          this.mImpl = {};
        };
        PDFNet.Convert.EPUBOutputOptions.prototype.setExpanded = function (
          expanded
        ) {
          this.mImpl.EPUB_EXPANDED = expanded;
          return this;
        };
        PDFNet.Convert.EPUBOutputOptions.prototype.setReuseCover = function (
          reuse
        ) {
          this.mImpl.EPUB_REUSE_COVER = reuse;
          return this;
        };
        PDFNet.Convert.createSVGOutputOptions = function () {
          return Promise.resolve(new PDFNet.Convert.SVGOutputOptions());
        };
        PDFNet.Convert.SVGOutputOptions = function () {
          this.name = 'PDFNet.Convert.SVGOutputOptions';
          this.mImpl = {};
        };
        PDFNet.Convert.SVGOutputOptions.prototype.setEmbedImages = function (
          embed_images
        ) {
          this.mImpl.EMBEDIMAGES = embed_images;
          return this;
        };
        PDFNet.Convert.SVGOutputOptions.prototype.setNoFonts = function (
          no_fonts
        ) {
          this.mImpl.NOFONTS = no_fonts;
          return this;
        };
        PDFNet.Convert.SVGOutputOptions.prototype.setSvgFonts = function (
          svg_fonts
        ) {
          this.mImpl.SVGFONTS = svg_fonts;
          return this;
        };
        PDFNet.Convert.SVGOutputOptions.prototype.setEmbedFonts = function (
          embed_fonts
        ) {
          this.mImpl.EMBEDFONTS = embed_fonts;
          return this;
        };
        PDFNet.Convert.SVGOutputOptions.prototype.setNoUnicode = function (
          no_unicode
        ) {
          this.mImpl.NOUNICODE = no_unicode;
          return this;
        };
        PDFNet.Convert.SVGOutputOptions.prototype.setIndividualCharPlacement =
          function (individual_char_placement) {
            this.mImpl.INDIVIDUALCHARPLACEMENT = individual_char_placement;
            return this;
          };
        PDFNet.Convert.SVGOutputOptions.prototype.setRemoveCharPlacement =
          function (remove_char_placement) {
            this.mImpl.REMOVECHARPLACEMENT = remove_char_placement;
            return this;
          };
        PDFNet.Convert.SVGOutputOptions.prototype.setFlattenContent = function (
          flatten
        ) {
          switch (flatten) {
            case PDFNet.Convert.FlattenFlag.e_off:
              this.mImpl.FLATTEN_CONTENT = 'OFF';
              break;
            case PDFNet.Convert.FlattenFlag.e_simple:
              this.mImpl.FLATTEN_CONTENT = 'SIMPLE';
              break;
            case PDFNet.Convert.FlattenFlag.e_fast:
              this.mImpl.FLATTEN_CONTENT = 'FAST';
              break;
            case PDFNet.Convert.FlattenFlag.e_high_quality:
              this.mImpl.FLATTEN_CONTENT = 'HIGH_QUALITY';
              break;
            default:
              console.log(
                'unrecognized PDFNet.Convert.FlattenFlag type: ' + flatten
              );
          }
          return this;
        };
        PDFNet.Convert.SVGOutputOptions.prototype.setFlattenThreshold =
          function (threshold) {
            switch (threshold) {
              case PDFNet.Convert.FlattenThresholdFlag.e_very_strict:
                this.mImpl.FLATTEN_THRESHOLD = 'VERY_STRICT';
                break;
              case PDFNet.Convert.FlattenThresholdFlag.e_strict:
                this.mImpl.FLATTEN_THRESHOLD = 'STRICT';
                break;
              case PDFNet.Convert.FlattenThresholdFlag.e_default:
                this.mImpl.FLATTEN_THRESHOLD = 'DEFAULT';
                break;
              case PDFNet.Convert.FlattenThresholdFlag.e_keep_most:
                this.mImpl.FLATTEN_THRESHOLD = 'KEEP_MOST';
                break;
              case PDFNet.Convert.FlattenThresholdFlag.e_keep_all:
                this.mImpl.FLATTEN_THRESHOLD = 'KEEP_ALL';
                break;
              default:
                console.log(
                  'unrecognized PDFNet.Convert.FlattenThresholdFlag type: ' +
                    threshold
                );
            }
            return this;
          };
        PDFNet.Convert.SVGOutputOptions.prototype.setFlattenDPI = function (
          dpi
        ) {
          this.mImpl.DPI = dpi;
          return this;
        };
        PDFNet.Convert.SVGOutputOptions.prototype.setFlattenMaximumImagePixels =
          function (max_pixels) {
            this.mImpl.MAX_IMAGE_PIXELS = max_pixels;
            return this;
          };
        PDFNet.Convert.SVGOutputOptions.prototype.setCompress = function (
          svgz
        ) {
          this.mImpl.SVGZ = svgz;
          return this;
        };
        PDFNet.Convert.SVGOutputOptions.prototype.setOutputThumbnails =
          function (include_thumbs) {
            this.mImpl.NOTHUMBS = include_thumbs;
            return this;
          };
        PDFNet.Convert.SVGOutputOptions.prototype.setThumbnailSize = function (
          size
        ) {
          this.mImpl.THUMB_SIZE = size;
          return this;
        };
        PDFNet.Convert.SVGOutputOptions.prototype.setCreateXmlWrapper =
          function (xml) {
            this.mImpl.NOXMLDOC = xml;
            return this;
          };
        PDFNet.Convert.SVGOutputOptions.prototype.setDtd = function (dtd) {
          this.mImpl.OMITDTD = dtd;
          return this;
        };
        PDFNet.Convert.SVGOutputOptions.prototype.setAnnots = function (
          annots
        ) {
          this.mImpl.NOANNOTS = annots;
          return this;
        };
        PDFNet.Convert.SVGOutputOptions.prototype.setOverprint = function (op) {
          switch (op) {
            case PDFNet.PDFRasterizer.OverprintPreviewMode.e_op_off:
              this.mImpl.OVERPRINT_MODE = 'OFF';
              break;
            case PDFNet.PDFRasterizer.OverprintPreviewMode.e_op_on:
              this.mImpl.OVERPRINT_MODE = 'ON';
              break;
            case PDFNet.PDFRasterizer.OverprintPreviewMode.e_op_pdfx_on:
              this.mImpl.OVERPRINT_MODE = 'PDFX';
              break;
            default:
              console.log(
                'unrecognized PDFNet.PDFRasterizer.OverprintPreviewMode type: ' +
                  op
              );
          }
          return this;
        };
        PDFNet.Convert.SVGOutputOptions.prototype.getJsonString = function () {
          return JSON.stringify(this.mImpl);
        };
        PDFNet.PDFDoc.createViewerOptimizedOptions = function () {
          return Promise.resolve(new PDFNet.PDFDoc.ViewerOptimizedOptions());
        };
        PDFNet.PDFDoc.ViewerOptimizedOptions = function () {
          this.name = 'PDFNet.PDFDoc.ViewerOptimizedOptions';
          this.mImpl = {};
        };
        PDFNet.PDFDoc.ViewerOptimizedOptions.prototype.setThumbnailRenderingThreshold =
          function (threshold) {
            this.mImpl.COMPLEXITY_THRESHOLD = threshold;
            return this;
          };
        PDFNet.PDFDoc.ViewerOptimizedOptions.prototype.setMinimumInitialThumbnails =
          function (initial_thumbs) {
            this.mImpl.MINIMUM_INITIAL_THUMBNAILS = initial_thumbs;
            return this;
          };
        PDFNet.PDFDoc.ViewerOptimizedOptions.prototype.setThumbnailSize =
          function (size) {
            this.mImpl.THUMB_SIZE = size;
            return this;
          };
        PDFNet.PDFDoc.ViewerOptimizedOptions.prototype.setOverprint = function (
          mode
        ) {
          switch (mode) {
            case PDFNet.PDFRasterizer.OverprintPreviewMode.e_op_off:
              this.mImpl.OVERPRINT_MODE = 'OFF';
              break;
            case PDFNet.PDFRasterizer.OverprintPreviewMode.e_op_on:
              this.mImpl.OVERPRINT_MODE = 'ON';
              break;
            case PDFNet.PDFRasterizer.OverprintPreviewMode.e_op_pdfx_on:
              this.mImpl.OVERPRINT_MODE = 'PDFX';
              break;
            default:
              console.log(
                'unrecognized PDFNet.PDFRasterizer.OverprintPreviewMode type: ' +
                  mode
              );
          }
          return this;
        };
        PDFNet.PDFDoc.ViewerOptimizedOptions.prototype.getJsonString =
          function () {
            return JSON.stringify(this.mImpl);
          };
        PDFNet.MarkupAnnot.prototype = new PDFNet.Annot();
        PDFNet.TextMarkupAnnot.prototype = new PDFNet.MarkupAnnot();
        PDFNet.CaretAnnot.prototype = new PDFNet.MarkupAnnot();
        PDFNet.LineAnnot.prototype = new PDFNet.MarkupAnnot();
        PDFNet.CircleAnnot.prototype = new PDFNet.MarkupAnnot();
        PDFNet.FileAttachmentAnnot.prototype = new PDFNet.MarkupAnnot();
        PDFNet.FreeTextAnnot.prototype = new PDFNet.MarkupAnnot();
        PDFNet.HighlightAnnot.prototype = new PDFNet.TextMarkupAnnot();
        PDFNet.InkAnnot.prototype = new PDFNet.MarkupAnnot();
        PDFNet.LinkAnnot.prototype = new PDFNet.Annot();
        PDFNet.MovieAnnot.prototype = new PDFNet.Annot();
        PDFNet.PolyLineAnnot.prototype = new PDFNet.LineAnnot();
        PDFNet.PolygonAnnot.prototype = new PDFNet.PolyLineAnnot();
        PDFNet.PopupAnnot.prototype = new PDFNet.Annot();
        PDFNet.RedactionAnnot.prototype = new PDFNet.MarkupAnnot();
        PDFNet.RubberStampAnnot.prototype = new PDFNet.MarkupAnnot();
        PDFNet.ScreenAnnot.prototype = new PDFNet.Annot();
        PDFNet.SoundAnnot.prototype = new PDFNet.MarkupAnnot();
        PDFNet.SquareAnnot.prototype = new PDFNet.MarkupAnnot();
        PDFNet.SquigglyAnnot.prototype = new PDFNet.TextMarkupAnnot();
        PDFNet.StrikeOutAnnot.prototype = new PDFNet.TextMarkupAnnot();
        PDFNet.TextAnnot.prototype = new PDFNet.MarkupAnnot();
        PDFNet.UnderlineAnnot.prototype = new PDFNet.TextMarkupAnnot();
        PDFNet.WatermarkAnnot.prototype = new PDFNet.Annot();
        PDFNet.WidgetAnnot.prototype = new PDFNet.Annot();
        PDFNet.SignatureWidget.prototype = new PDFNet.WidgetAnnot();
        PDFNet.ComboBoxWidget.prototype = new PDFNet.WidgetAnnot();
        PDFNet.ListBoxWidget.prototype = new PDFNet.WidgetAnnot();
        PDFNet.TextWidget.prototype = new PDFNet.WidgetAnnot();
        PDFNet.CheckBoxWidget.prototype = new PDFNet.WidgetAnnot();
        PDFNet.RadioButtonWidget.prototype = new PDFNet.WidgetAnnot();
        PDFNet.PushButtonWidget.prototype = new PDFNet.WidgetAnnot();
        PDFNet.ContentNode.prototype = new PDFNet.ContentElement();
        PDFNet.Paragraph.prototype = new PDFNet.ContentNode();
        PDFNet.TextRun.prototype = new PDFNet.ContentElement();
        PDFNet.TextStyledElement.prototype = new PDFNet.ContentElement();
        PDFNet.Table.prototype = new PDFNet.ContentNode();
        PDFNet.TableRow.prototype = new PDFNet.ContentNode();
        PDFNet.TableCell.prototype = new PDFNet.ContentNode();
        PDFNet.PrinterMode.PaperSize = {
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
        };
        PDFNet.Field.EventType = {
          e_action_trigger_keystroke: 13,
          e_action_trigger_format: 14,
          e_action_trigger_validate: 15,
          e_action_trigger_calculate: 16,
        };
        PDFNet.Field.Type = {
          e_button: 0,
          e_check: 1,
          e_radio: 2,
          e_text: 3,
          e_choice: 4,
          e_signature: 5,
          e_null: 6,
        };
        PDFNet.Field.Flag = {
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
        };
        PDFNet.Field.TextJustification = {
          e_left_justified: 0,
          e_centered: 1,
          e_right_justified: 2,
        };
        PDFNet.Filter.StdFileOpenMode = {
          e_read_mode: 0,
          e_write_mode: 1,
          e_append_mode: 2,
        };
        PDFNet.Filter.ReferencePos = { e_begin: 0, e_end: 2, e_cur: 1 };
        PDFNet.OCGContext.OCDrawMode = {
          e_VisibleOC: 0,
          e_AllOC: 1,
          e_NoOC: 2,
        };
        PDFNet.OCMD.VisibilityPolicyType = {
          e_AllOn: 0,
          e_AnyOn: 1,
          e_AnyOff: 2,
          e_AllOff: 3,
        };
        PDFNet.PDFACompliance.Conformance = {
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
        };
        PDFNet.PDFACompliance.ErrorCode = {
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
        };
        PDFNet.ContentItem.Type = {
          e_MCR: 0,
          e_MCID: 1,
          e_OBJR: 2,
          e_Unknown: 3,
        };
        PDFNet.Action.Type = {
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
        };
        PDFNet.Action.FormActionFlag = {
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
        };
        PDFNet.Page.EventType = {
          e_action_trigger_page_open: 11,
          e_action_trigger_page_close: 12,
        };
        PDFNet.Page.Box = {
          e_media: 0,
          e_crop: 1,
          e_bleed: 2,
          e_trim: 3,
          e_art: 4,
          e_user_crop: 5,
        };
        PDFNet.Page.Rotate = { e_0: 0, e_90: 1, e_180: 2, e_270: 3 };
        PDFNet.Annot.EventType = {
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
        };
        PDFNet.Annot.Type = {
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
        };
        PDFNet.Annot.Flag = {
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
        };
        PDFNet.AnnotBorderStyle.Style = {
          e_solid: 0,
          e_dashed: 1,
          e_beveled: 2,
          e_inset: 3,
          e_underline: 4,
        };
        PDFNet.Annot.State = { e_normal: 0, e_rollover: 1, e_down: 2 };
        PDFNet.LineAnnot.EndingStyle = {
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
        };
        PDFNet.LineAnnot.IntentType = {
          e_LineArrow: 0,
          e_LineDimension: 1,
          e_null: 2,
        };
        PDFNet.LineAnnot.CapPos = { e_Inline: 0, e_Top: 1 };
        PDFNet.FileAttachmentAnnot.Icon = {
          e_Graph: 0,
          e_PushPin: 1,
          e_Paperclip: 2,
          e_Tag: 3,
          e_Unknown: 4,
        };
        PDFNet.FreeTextAnnot.IntentName = {
          e_FreeText: 0,
          e_FreeTextCallout: 1,
          e_FreeTextTypeWriter: 2,
          e_Unknown: 3,
        };
        PDFNet.LinkAnnot.HighlightingMode = {
          e_none: 0,
          e_invert: 1,
          e_outline: 2,
          e_push: 3,
        };
        PDFNet.MarkupAnnot.BorderEffect = { e_None: 0, e_Cloudy: 1 };
        PDFNet.PolyLineAnnot.IntentType = {
          e_PolygonCloud: 0,
          e_PolyLineDimension: 1,
          e_PolygonDimension: 2,
          e_Unknown: 3,
        };
        PDFNet.RedactionAnnot.QuadForm = {
          e_LeftJustified: 0,
          e_Centered: 1,
          e_RightJustified: 2,
          e_None: 3,
        };
        PDFNet.RubberStampAnnot.Icon = {
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
        };
        PDFNet.ScreenAnnot.ScaleType = { e_Anamorphic: 0, e_Proportional: 1 };
        PDFNet.ScreenAnnot.ScaleCondition = {
          e_Always: 0,
          e_WhenBigger: 1,
          e_WhenSmaller: 2,
          e_Never: 3,
        };
        PDFNet.ScreenAnnot.IconCaptionRelation = {
          e_NoIcon: 0,
          e_NoCaption: 1,
          e_CBelowI: 2,
          e_CAboveI: 3,
          e_CRightILeft: 4,
          e_CLeftIRight: 5,
          e_COverlayI: 6,
        };
        PDFNet.SoundAnnot.Icon = { e_Speaker: 0, e_Mic: 1, e_Unknown: 2 };
        PDFNet.TextAnnot.Icon = {
          e_Comment: 0,
          e_Key: 1,
          e_Help: 2,
          e_NewParagraph: 3,
          e_Paragraph: 4,
          e_Insert: 5,
          e_Note: 6,
          e_Unknown: 7,
        };
        PDFNet.WidgetAnnot.HighlightingMode = {
          e_none: 0,
          e_invert: 1,
          e_outline: 2,
          e_push: 3,
          e_toggle: 4,
        };
        PDFNet.WidgetAnnot.ScaleType = { e_Anamorphic: 0, e_Proportional: 1 };
        PDFNet.WidgetAnnot.IconCaptionRelation = {
          e_NoIcon: 0,
          e_NoCaption: 1,
          e_CBelowI: 2,
          e_CAboveI: 3,
          e_CRightILeft: 4,
          e_CLeftIRight: 5,
          e_COverlayI: 6,
        };
        PDFNet.WidgetAnnot.ScaleCondition = {
          e_Always: 0,
          e_WhenBigger: 1,
          e_WhenSmaller: 2,
          e_Never: 3,
        };
        PDFNet.ColorSpace.Type = {
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
        };
        PDFNet.Convert.PrinterMode = {
          e_auto: 0,
          e_interop_only: 1,
          e_printer_only: 2,
          e_prefer_builtin_converter: 3,
        };
        PDFNet.Destination.FitType = {
          e_XYZ: 0,
          e_Fit: 1,
          e_FitH: 2,
          e_FitV: 3,
          e_FitR: 4,
          e_FitB: 5,
          e_FitBH: 6,
          e_FitBV: 7,
        };
        PDFNet.GState.Attribute = {
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
        };
        PDFNet.GState.LineCap = {
          e_butt_cap: 0,
          e_round_cap: 1,
          e_square_cap: 2,
        };
        PDFNet.GState.LineJoin = {
          e_miter_join: 0,
          e_round_join: 1,
          e_bevel_join: 2,
        };
        PDFNet.GState.TextRenderingMode = {
          e_fill_text: 0,
          e_stroke_text: 1,
          e_fill_stroke_text: 2,
          e_invisible_text: 3,
          e_fill_clip_text: 4,
          e_stroke_clip_text: 5,
          e_fill_stroke_clip_text: 6,
          e_clip_text: 7,
        };
        PDFNet.GState.RenderingIntent = {
          e_absolute_colorimetric: 0,
          e_relative_colorimetric: 1,
          e_saturation: 2,
          e_perceptual: 3,
        };
        PDFNet.GState.BlendMode = {
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
        };
        PDFNet.Element.Type = {
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
        };
        PDFNet.Element.PathSegmentType = {
          e_moveto: 1,
          e_lineto: 2,
          e_cubicto: 3,
          e_conicto: 4,
          e_rect: 5,
          e_closepath: 6,
        };
        PDFNet.ShapedText.ShapingStatus = {
          e_FullShaping: 0,
          e_PartialShaping: 1,
          e_NoShaping: 2,
        };
        PDFNet.ShapedText.FailureReason = {
          e_NoFailure: 0,
          e_UnsupportedFontType: 1,
          e_NotIndexEncoded: 2,
          e_FontDataNotFound: 3,
        };
        PDFNet.ElementWriter.WriteMode = {
          e_underlay: 0,
          e_overlay: 1,
          e_replacement: 2,
        };
        PDFNet.Flattener.Threshold = {
          e_very_strict: 0,
          e_strict: 1,
          e_default: 2,
          e_keep_most: 3,
          e_keep_all: 4,
        };
        PDFNet.Flattener.Mode = { e_simple: 0, e_fast: 1 };
        PDFNet.Font.StandardType1Font = {
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
        };
        PDFNet.Font.Encoding = { e_IdentityH: 0, e_Indices: 1 };
        PDFNet.Font.Type = {
          e_Type1: 0,
          e_TrueType: 1,
          e_MMType1: 2,
          e_Type3: 3,
          e_Type0: 4,
          e_CIDType0: 5,
          e_CIDType2: 6,
        };
        PDFNet.Function.Type = {
          e_sampled: 0,
          e_exponential: 2,
          e_stitching: 3,
          e_postscript: 4,
        };
        PDFNet.Image.InputFilter = {
          e_none: 0,
          e_jpeg: 1,
          e_jp2: 2,
          e_flate: 3,
          e_g3: 4,
          e_g4: 5,
          e_ascii_hex: 6,
        };
        PDFNet.PageLabel.Style = {
          e_decimal: 0,
          e_roman_uppercase: 1,
          e_roman_lowercase: 2,
          e_alphabetic_uppercase: 3,
          e_alphabetic_lowercase: 4,
          e_none: 5,
        };
        PDFNet.PageSet.Filter = { e_all: 0, e_even: 1, e_odd: 2 };
        PDFNet.PatternColor.Type = {
          e_uncolored_tiling_pattern: 0,
          e_colored_tiling_pattern: 1,
          e_shading: 2,
          e_null: 3,
        };
        PDFNet.PatternColor.TilingType = {
          e_constant_spacing: 0,
          e_no_distortion: 1,
          e_constant_spacing_fast_fill: 2,
        };
        PDFNet.GeometryCollection.SnappingMode = {
          e_DefaultSnapMode: 14,
          e_PointOnLine: 1,
          e_LineMidpoint: 2,
          e_LineIntersection: 4,
          e_PathEndpoint: 8,
        };
        PDFNet.DigestAlgorithm.Type = {
          e_SHA1: 0,
          e_SHA256: 1,
          e_SHA384: 2,
          e_SHA512: 3,
          e_RIPEMD160: 4,
          e_unknown_digest_algorithm: 5,
        };
        PDFNet.ObjectIdentifier.Predefined = {
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
        };
        PDFNet.DigitalSignatureField.SubFilterType = {
          e_adbe_x509_rsa_sha1: 0,
          e_adbe_pkcs7_detached: 1,
          e_adbe_pkcs7_sha1: 2,
          e_ETSI_CAdES_detached: 3,
          e_ETSI_RFC3161: 4,
          e_unknown: 5,
          e_absent: 6,
        };
        PDFNet.DigitalSignatureField.DocumentPermissions = {
          e_no_changes_allowed: 1,
          e_formfilling_signing_allowed: 2,
          e_annotating_formfilling_signing_allowed: 3,
          e_unrestricted: 4,
        };
        PDFNet.DigitalSignatureField.FieldPermissions = {
          e_lock_all: 0,
          e_include: 1,
          e_exclude: 2,
        };
        PDFNet.PDFDoc.EventType = {
          e_action_trigger_doc_will_close: 17,
          e_action_trigger_doc_will_save: 18,
          e_action_trigger_doc_did_save: 19,
          e_action_trigger_doc_will_print: 20,
          e_action_trigger_doc_did_print: 21,
        };
        PDFNet.PDFDoc.InsertFlag = { e_none: 0, e_insert_bookmark: 1 };
        PDFNet.PDFDoc.ExtractFlag = {
          e_forms_only: 0,
          e_annots_only: 1,
          e_both: 2,
        };
        PDFNet.PDFDoc.SignaturesVerificationStatus = {
          e_unsigned: 0,
          e_failure: 1,
          e_untrusted: 2,
          e_unsupported: 3,
          e_verified: 4,
        };
        PDFNet.PDFDocViewPrefs.PageMode = {
          e_UseNone: 0,
          e_UseThumbs: 1,
          e_UseBookmarks: 2,
          e_FullScreen: 3,
          e_UseOC: 4,
          e_UseAttachments: 5,
        };
        PDFNet.PDFDocViewPrefs.PageLayout = {
          e_Default: 0,
          e_SinglePage: 1,
          e_OneColumn: 2,
          e_TwoColumnLeft: 3,
          e_TwoColumnRight: 4,
          e_TwoPageLeft: 5,
          e_TwoPageRight: 6,
        };
        PDFNet.PDFDocViewPrefs.ViewerPref = {
          e_HideToolbar: 0,
          e_HideMenubar: 1,
          e_HideWindowUI: 2,
          e_FitWindow: 3,
          e_CenterWindow: 4,
          e_DisplayDocTitle: 5,
        };
        PDFNet.PDFRasterizer.Type = { e_BuiltIn: 0, e_GDIPlus: 1 };
        PDFNet.PDFRasterizer.OverprintPreviewMode = {
          e_op_off: 0,
          e_op_on: 1,
          e_op_pdfx_on: 2,
        };
        PDFNet.PDFRasterizer.ColorPostProcessMode = {
          e_postprocess_none: 0,
          e_postprocess_invert: 1,
          e_postprocess_gradient_map: 2,
          e_postprocess_night_mode: 3,
        };
        PDFNet.PDFDraw.PixelFormat = {
          e_rgba: 0,
          e_bgra: 1,
          e_rgb: 2,
          e_bgr: 3,
          e_gray: 4,
          e_gray_alpha: 5,
          e_cmyk: 6,
        };
        PDFNet.CMSType = { e_lcms: 0, e_icm: 1, e_no_cms: 2 };
        PDFNet.CharacterOrdering = {
          e_Identity: 0,
          e_Japan1: 1,
          e_Japan2: 2,
          e_GB1: 3,
          e_CNS1: 4,
          e_Korea1: 5,
        };
        PDFNet.LogLevel = {
          e_LogLevel_Off: -1,
          e_LogLevel_Fatal: 5,
          e_LogLevel_Error: 4,
          e_LogLevel_Warning: 3,
          e_LogLevel_Info: 2,
          e_LogLevel_Trace: 1,
          e_LogLevel_Debug: 0,
        };
        PDFNet.ConnectionErrorHandlingMode = {
          e_continue: 0,
          e_continue_unless_switching_to_demo: 1,
          e_stop: 2,
        };
        PDFNet.Shading.Type = {
          e_function_shading: 0,
          e_axial_shading: 1,
          e_radial_shading: 2,
          e_free_gouraud_shading: 3,
          e_lattice_gouraud_shading: 4,
          e_coons_shading: 5,
          e_tensor_shading: 6,
          e_null: 7,
        };
        PDFNet.Stamper.SizeType = {
          e_relative_scale: 1,
          e_absolute_size: 2,
          e_font_size: 3,
        };
        PDFNet.Stamper.TextAlignment = {
          e_align_left: -1,
          e_align_center: 0,
          e_align_right: 1,
        };
        PDFNet.Stamper.HorizontalAlignment = {
          e_horizontal_left: -1,
          e_horizontal_center: 0,
          e_horizontal_right: 1,
        };
        PDFNet.Stamper.VerticalAlignment = {
          e_vertical_bottom: -1,
          e_vertical_center: 0,
          e_vertical_top: 1,
        };
        PDFNet.TextExtractor.ProcessingFlags = {
          e_no_ligature_exp: 1,
          e_no_dup_remove: 2,
          e_punct_break: 4,
          e_remove_hidden_text: 8,
          e_no_invisible_text: 16,
          e_no_watermarks: 128,
          e_extract_using_zorder: 256,
        };
        PDFNet.TextExtractor.XMLOutputFlags = {
          e_words_as_elements: 1,
          e_output_bbox: 2,
          e_output_style_info: 4,
        };
        PDFNet.TextSearch.ResultCode = { e_done: 0, e_page: 1, e_found: 2 };
        PDFNet.TextSearch.Mode = {
          e_reg_expression: 1,
          e_case_sensitive: 2,
          e_whole_word: 4,
          e_search_up: 8,
          e_page_stop: 16,
          e_highlight: 32,
          e_ambient_string: 64,
        };
        PDFNet.Obj.Type = {
          e_null: 0,
          e_bool: 1,
          e_number: 2,
          e_name: 3,
          e_string: 4,
          e_dict: 5,
          e_array: 6,
          e_stream: 7,
        };
        PDFNet.SDFDoc.SaveOptions = {
          e_incremental: 1,
          e_remove_unused: 2,
          e_hex_strings: 4,
          e_omit_xref: 8,
          e_linearized: 16,
          e_compatibility: 32,
        };
        PDFNet.SecurityHandler.Permission = {
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
        };
        PDFNet.SecurityHandler.AlgorithmType = {
          e_RC4_40: 1,
          e_RC4_128: 2,
          e_AES: 3,
          e_AES_256: 4,
        };
        PDFNet.VerificationOptions.SecurityLevel = {
          e_compatibility_and_archiving: 0,
          e_maximum: 1,
        };
        PDFNet.VerificationOptions.TimeMode = {
          e_signing: 0,
          e_timestamp: 1,
          e_current: 2,
        };
        PDFNet.VerificationOptions.CertificateTrustFlag = {
          e_signing_trust: 1,
          e_certification_trust: 2,
          e_dynamic_content: 4,
          e_javascript: 16,
          e_identity: 32,
          e_trust_anchor: 64,
          e_default_trust: 97,
          e_complete_trust: 119,
        };
        PDFNet.VerificationResult.DocumentStatus = {
          e_no_error: 0,
          e_corrupt_file: 1,
          e_unsigned: 2,
          e_bad_byteranges: 3,
          e_corrupt_cryptographic_contents: 4,
        };
        PDFNet.VerificationResult.DigestStatus = {
          e_digest_invalid: 0,
          e_digest_verified: 1,
          e_digest_verification_disabled: 2,
          e_weak_digest_algorithm_but_digest_verifiable: 3,
          e_no_digest_status: 4,
          e_unsupported_encoding: 5,
        };
        PDFNet.VerificationResult.TrustStatus = {
          e_trust_verified: 0,
          e_untrusted: 1,
          e_trust_verification_disabled: 2,
          e_no_trust_status: 3,
        };
        PDFNet.VerificationResult.ModificationPermissionsStatus = {
          e_invalidated_by_disallowed_changes: 0,
          e_has_allowed_changes: 1,
          e_unmodified: 2,
          e_permissions_verification_disabled: 3,
          e_no_permissions_status: 4,
        };
        PDFNet.DisallowedChange.Type = {
          e_form_filled: 0,
          e_digital_signature_signed: 1,
          e_page_template_instantiated: 2,
          e_annotation_created_or_updated_or_deleted: 3,
          e_other: 4,
          e_unknown: 5,
        };
        PDFNet.Paragraph.TextJustification = {
          e_text_justification_invalid: 0,
          e_text_justify_left: 1,
          e_text_justify_right: 2,
          e_text_justify_center: 3,
        };
        PDFNet.TableCell.AlignmentVertical = {
          e_alignment_vert_invalid: 0,
          e_alignment_top: 1,
          e_alignment_center: 2,
          e_alignment_bottom: 3,
        };
        PDFNet.TableCell.AlignmentHorizontal = {
          e_alignment_horz_invalid: 0,
          e_alignment_left: 1,
          e_alignment_middle: 2,
          e_alignment_right: 3,
        };
        PDFNet.List.NumberFormat = {
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
        };
        PDFNet.Iterator.prototype.hasNext = function () {
          return PDFNet.sendWithPromise('Iterator.hasNext', { itr: this.id });
        };
        PDFNet.Iterator.prototype.next = function () {
          return PDFNet.sendWithPromise('Iterator.next', { itr: this.id });
        };
        PDFNet.DictIterator.prototype.hasNext = function () {
          return PDFNet.sendWithPromise('DictIterator.hasNext', {
            itr: this.id,
          });
        };
        PDFNet.DictIterator.prototype.key = function () {
          return PDFNet.sendWithPromise('DictIterator.key', {
            itr: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.DictIterator.prototype.value = function () {
          return PDFNet.sendWithPromise('DictIterator.value', {
            itr: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.DictIterator.prototype.next = function () {
          return PDFNet.sendWithPromise('DictIterator.next', { itr: this.id });
        };
        PDFNet.Matrix2D.prototype.copy = function () {
          checkThisYieldFunction('copy', this.yieldFunction);
          return PDFNet.sendWithPromise('Matrix2D.copy', { m: this }).then(
            function (id) {
              return new PDFNet.Matrix2D(id);
            }
          );
        };
        PDFNet.Matrix2D.prototype.set = function (a, b, c, d, h, v) {
          checkArguments(
            arguments.length,
            6,
            'set',
            '(number, number, number, number, number, number)',
            [
              [a, 'number'],
              [b, 'number'],
              [c, 'number'],
              [d, 'number'],
              [h, 'number'],
              [v, 'number'],
            ]
          );
          checkThisYieldFunction('set', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Matrix2D.set';
          return PDFNet.sendWithPromise('Matrix2D.set', {
            matrix: this,
            a: a,
            b: b,
            c: c,
            d: d,
            h: h,
            v: v,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Matrix2D.prototype.concat = function (a, b, c, d, h, v) {
          checkArguments(
            arguments.length,
            6,
            'concat',
            '(number, number, number, number, number, number)',
            [
              [a, 'number'],
              [b, 'number'],
              [c, 'number'],
              [d, 'number'],
              [h, 'number'],
              [v, 'number'],
            ]
          );
          checkThisYieldFunction('concat', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Matrix2D.concat';
          return PDFNet.sendWithPromise('Matrix2D.concat', {
            matrix: this,
            a: a,
            b: b,
            c: c,
            d: d,
            h: h,
            v: v,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Matrix2D.prototype.equals = function (m2) {
          checkArguments(arguments.length, 1, 'equals', '(PDFNet.Matrix2D)', [
            [m2, 'Structure', PDFNet.Matrix2D, 'Matrix2D'],
          ]);
          checkThisYieldFunction('equals', this.yieldFunction);
          checkParamsYieldFunction('equals', [[m2, 0]]);
          return PDFNet.sendWithPromise('Matrix2D.equals', {
            m1: this,
            m2: m2,
          });
        };
        PDFNet.Matrix2D.prototype.inverse = function () {
          checkThisYieldFunction('inverse', this.yieldFunction);
          return PDFNet.sendWithPromise('Matrix2D.inverse', {
            matrix: this,
          }).then(function (id) {
            return new PDFNet.Matrix2D(id);
          });
        };
        PDFNet.Matrix2D.prototype.translate = function (h, v) {
          checkArguments(arguments.length, 2, 'translate', '(number, number)', [
            [h, 'number'],
            [v, 'number'],
          ]);
          checkThisYieldFunction('translate', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Matrix2D.translate';
          return PDFNet.sendWithPromise('Matrix2D.translate', {
            matrix: this,
            h: h,
            v: v,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Matrix2D.prototype.preTranslate = function (h, v) {
          checkArguments(
            arguments.length,
            2,
            'preTranslate',
            '(number, number)',
            [
              [h, 'number'],
              [v, 'number'],
            ]
          );
          checkThisYieldFunction('preTranslate', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Matrix2D.preTranslate';
          return PDFNet.sendWithPromise('Matrix2D.preTranslate', {
            matrix: this,
            h: h,
            v: v,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Matrix2D.prototype.postTranslate = function (h, v) {
          checkArguments(
            arguments.length,
            2,
            'postTranslate',
            '(number, number)',
            [
              [h, 'number'],
              [v, 'number'],
            ]
          );
          checkThisYieldFunction('postTranslate', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Matrix2D.postTranslate';
          return PDFNet.sendWithPromise('Matrix2D.postTranslate', {
            matrix: this,
            h: h,
            v: v,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Matrix2D.prototype.scale = function (h, v) {
          checkArguments(arguments.length, 2, 'scale', '(number, number)', [
            [h, 'number'],
            [v, 'number'],
          ]);
          checkThisYieldFunction('scale', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Matrix2D.scale';
          return PDFNet.sendWithPromise('Matrix2D.scale', {
            matrix: this,
            h: h,
            v: v,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Matrix2D.createZeroMatrix = function () {
          return PDFNet.sendWithPromise('matrix2DCreateZeroMatrix', {}).then(
            function (id) {
              return new PDFNet.Matrix2D(id);
            }
          );
        };
        PDFNet.Matrix2D.createIdentityMatrix = function () {
          return PDFNet.sendWithPromise(
            'matrix2DCreateIdentityMatrix',
            {}
          ).then(function (id) {
            return new PDFNet.Matrix2D(id);
          });
        };
        PDFNet.Matrix2D.createRotationMatrix = function (angle) {
          checkArguments(
            arguments.length,
            1,
            'createRotationMatrix',
            '(number)',
            [[angle, 'number']]
          );
          return PDFNet.sendWithPromise('matrix2DCreateRotationMatrix', {
            angle: angle,
          }).then(function (id) {
            return new PDFNet.Matrix2D(id);
          });
        };
        PDFNet.Matrix2D.prototype.multiply = function (m) {
          checkArguments(arguments.length, 1, 'multiply', '(PDFNet.Matrix2D)', [
            [m, 'Structure', PDFNet.Matrix2D, 'Matrix2D'],
          ]);
          checkThisYieldFunction('multiply', this.yieldFunction);
          checkParamsYieldFunction('multiply', [[m, 0]]);
          var me = this;
          this.yieldFunction = 'Matrix2D.multiply';
          return PDFNet.sendWithPromise('Matrix2D.multiply', {
            matrix: this,
            m: m,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Field.create = function (field_dict) {
          checkArguments(arguments.length, 1, 'create', '(PDFNet.Obj)', [
            [field_dict, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('fieldCreate', {
            field_dict: field_dict.id,
          }).then(function (id) {
            return new PDFNet.Field(id);
          });
        };
        PDFNet.Field.prototype.isValid = function () {
          checkThisYieldFunction('isValid', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.isValid', { field: this });
        };
        PDFNet.Field.prototype.getType = function () {
          checkThisYieldFunction('getType', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.getType', { field: this });
        };
        PDFNet.Field.prototype.getValue = function () {
          checkThisYieldFunction('getValue', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.getValue', { field: this }).then(
            function (id) {
              return createPDFNetObj(PDFNet.Obj, id);
            }
          );
        };
        PDFNet.Field.prototype.getValueAsString = function () {
          checkThisYieldFunction('getValueAsString', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.getValueAsString', {
            field: this,
          });
        };
        PDFNet.Field.prototype.getDefaultValueAsString = function () {
          checkThisYieldFunction('getDefaultValueAsString', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.getDefaultValueAsString', {
            field: this,
          });
        };
        PDFNet.Field.prototype.setValueAsString = function (value) {
          checkArguments(arguments.length, 1, 'setValueAsString', '(string)', [
            [value, 'string'],
          ]);
          checkThisYieldFunction('setValueAsString', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Field.setValueAsString';
          return PDFNet.sendWithPromise('Field.setValueAsString', {
            field: this,
            value: value,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = createDestroyableObj(
              PDFNet.ViewChangeCollection,
              id.result
            );
            copyFunc(id.field, me);
            return id.result;
          });
        };
        PDFNet.Field.prototype.setValue = function (value) {
          checkArguments(arguments.length, 1, 'setValue', '(PDFNet.Obj)', [
            [value, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          checkThisYieldFunction('setValue', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Field.setValue';
          return PDFNet.sendWithPromise('Field.setValue', {
            field: this,
            value: value.id,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = createDestroyableObj(
              PDFNet.ViewChangeCollection,
              id.result
            );
            copyFunc(id.field, me);
            return id.result;
          });
        };
        PDFNet.Field.prototype.setValueAsBool = function (value) {
          checkArguments(arguments.length, 1, 'setValueAsBool', '(boolean)', [
            [value, 'boolean'],
          ]);
          checkThisYieldFunction('setValueAsBool', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Field.setValueAsBool';
          return PDFNet.sendWithPromise('Field.setValueAsBool', {
            field: this,
            value: value,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = createDestroyableObj(
              PDFNet.ViewChangeCollection,
              id.result
            );
            copyFunc(id.field, me);
            return id.result;
          });
        };
        PDFNet.Field.prototype.getTriggerAction = function (trigger) {
          checkArguments(arguments.length, 1, 'getTriggerAction', '(number)', [
            [trigger, 'number'],
          ]);
          checkThisYieldFunction('getTriggerAction', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.getTriggerAction', {
            field: this,
            trigger: trigger,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Field.prototype.getValueAsBool = function () {
          checkThisYieldFunction('getValueAsBool', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.getValueAsBool', {
            field: this,
          });
        };
        PDFNet.Field.prototype.refreshAppearance = function () {
          checkThisYieldFunction('refreshAppearance', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Field.refreshAppearance';
          return PDFNet.sendWithPromise('Field.refreshAppearance', {
            field: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Field.prototype.eraseAppearance = function () {
          checkThisYieldFunction('eraseAppearance', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Field.eraseAppearance';
          return PDFNet.sendWithPromise('Field.eraseAppearance', {
            field: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Field.prototype.getDefaultValue = function () {
          checkThisYieldFunction('getDefaultValue', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.getDefaultValue', {
            field: this,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Field.prototype.getName = function () {
          checkThisYieldFunction('getName', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.getName', { field: this });
        };
        PDFNet.Field.prototype.getPartialName = function () {
          checkThisYieldFunction('getPartialName', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.getPartialName', {
            field: this,
          });
        };
        PDFNet.Field.prototype.rename = function (field_name) {
          checkArguments(arguments.length, 1, 'rename', '(string)', [
            [field_name, 'string'],
          ]);
          checkThisYieldFunction('rename', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Field.rename';
          return PDFNet.sendWithPromise('Field.rename', {
            field: this,
            field_name: field_name,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Field.prototype.isAnnot = function () {
          checkThisYieldFunction('isAnnot', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.isAnnot', { field: this });
        };
        PDFNet.Field.prototype.useSignatureHandler = function (
          signature_handler_id
        ) {
          checkArguments(
            arguments.length,
            1,
            'useSignatureHandler',
            '(number)',
            [[signature_handler_id, 'number']]
          );
          checkThisYieldFunction('useSignatureHandler', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Field.useSignatureHandler';
          return PDFNet.sendWithPromise('Field.useSignatureHandler', {
            field: this,
            signature_handler_id: signature_handler_id,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = createPDFNetObj(PDFNet.Obj, id.result);
            copyFunc(id.field, me);
            return id.result;
          });
        };
        PDFNet.Field.prototype.getFlag = function (flag) {
          checkArguments(arguments.length, 1, 'getFlag', '(number)', [
            [flag, 'number'],
          ]);
          checkThisYieldFunction('getFlag', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.getFlag', {
            field: this,
            flag: flag,
          });
        };
        PDFNet.Field.prototype.setFlag = function (flag, value) {
          checkArguments(arguments.length, 2, 'setFlag', '(number, boolean)', [
            [flag, 'number'],
            [value, 'boolean'],
          ]);
          checkThisYieldFunction('setFlag', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Field.setFlag';
          return PDFNet.sendWithPromise('Field.setFlag', {
            field: this,
            flag: flag,
            value: value,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Field.prototype.getJustification = function () {
          checkThisYieldFunction('getJustification', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Field.getJustification';
          return PDFNet.sendWithPromise('Field.getJustification', {
            field: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.field, me);
            return id.result;
          });
        };
        PDFNet.Field.prototype.setJustification = function (j) {
          checkArguments(arguments.length, 1, 'setJustification', '(number)', [
            [j, 'number'],
          ]);
          checkThisYieldFunction('setJustification', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Field.setJustification';
          return PDFNet.sendWithPromise('Field.setJustification', {
            field: this,
            j: j,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Field.prototype.setMaxLen = function (max_len) {
          checkArguments(arguments.length, 1, 'setMaxLen', '(number)', [
            [max_len, 'number'],
          ]);
          checkThisYieldFunction('setMaxLen', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Field.setMaxLen';
          return PDFNet.sendWithPromise('Field.setMaxLen', {
            field: this,
            max_len: max_len,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Field.prototype.getMaxLen = function () {
          checkThisYieldFunction('getMaxLen', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.getMaxLen', { field: this });
        };
        PDFNet.Field.prototype.getDefaultAppearance = function () {
          checkThisYieldFunction('getDefaultAppearance', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Field.getDefaultAppearance';
          return PDFNet.sendWithPromise('Field.getDefaultAppearance', {
            field: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = createPDFNetObj(PDFNet.GState, id.result);
            copyFunc(id.field, me);
            return id.result;
          });
        };
        PDFNet.Field.prototype.getUpdateRect = function () {
          checkThisYieldFunction('getUpdateRect', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.getUpdateRect', {
            field: this,
          }).then(function (id) {
            return new PDFNet.Rect(id);
          });
        };
        PDFNet.Field.prototype.flatten = function (page) {
          checkArguments(arguments.length, 1, 'flatten', '(PDFNet.Page)', [
            [page, 'Object', PDFNet.Page, 'Page'],
          ]);
          checkThisYieldFunction('flatten', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Field.flatten';
          return PDFNet.sendWithPromise('Field.flatten', {
            field: this,
            page: page.id,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Field.prototype.findInheritedAttribute = function (attrib) {
          checkArguments(
            arguments.length,
            1,
            'findInheritedAttribute',
            '(string)',
            [[attrib, 'string']]
          );
          checkThisYieldFunction('findInheritedAttribute', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.findInheritedAttribute', {
            field: this,
            attrib: attrib,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Field.prototype.getSDFObj = function () {
          checkThisYieldFunction('getSDFObj', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.getSDFObj', {
            field: this,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Field.prototype.getOptCount = function () {
          checkThisYieldFunction('getOptCount', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.getOptCount', { field: this });
        };
        PDFNet.Field.prototype.getOpt = function (index) {
          checkArguments(arguments.length, 1, 'getOpt', '(number)', [
            [index, 'number'],
          ]);
          checkThisYieldFunction('getOpt', this.yieldFunction);
          return PDFNet.sendWithPromise('Field.getOpt', {
            field: this,
            index: index,
          });
        };
        PDFNet.Field.prototype.isLockedByDigitalSignature = function () {
          checkThisYieldFunction(
            'isLockedByDigitalSignature',
            this.yieldFunction
          );
          return PDFNet.sendWithPromise('Field.isLockedByDigitalSignature', {
            field: this,
          });
        };
        PDFNet.FDFDoc.create = function () {
          return PDFNet.sendWithPromise('fdfDocCreate', {}).then(function (id) {
            return createDestroyableObj(PDFNet.FDFDoc, id);
          });
        };
        PDFNet.FDFDoc.createFromStream = function (stream) {
          checkArguments(
            arguments.length,
            1,
            'createFromStream',
            '(PDFNet.Filter)',
            [[stream, 'Object', PDFNet.Filter, 'Filter']]
          );
          0 != stream.id && avoidCleanup(stream.id);
          return PDFNet.sendWithPromise('fdfDocCreateFromStream', {
            no_own_stream: stream.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.FDFDoc, id);
          });
        };
        PDFNet.FDFDoc.createFromMemoryBuffer = function (buf) {
          checkArguments(
            arguments.length,
            1,
            'createFromMemoryBuffer',
            '(ArrayBuffer|TypedArray)',
            [[buf, 'ArrayBuffer']]
          );
          var bufArrayBuffer = getArrayBuffer(buf, !1);
          return PDFNet.sendWithPromise('fdfDocCreateFromMemoryBuffer', {
            buf: bufArrayBuffer,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.FDFDoc, id);
          });
        };
        PDFNet.FDFDoc.prototype.isModified = function () {
          return PDFNet.sendWithPromise('FDFDoc.isModified', { doc: this.id });
        };
        PDFNet.FDFDoc.prototype.saveMemoryBuffer = function () {
          return PDFNet.sendWithPromise('FDFDoc.saveMemoryBuffer', {
            doc: this.id,
          }).then(function (id) {
            return new Uint8Array(id);
          });
        };
        PDFNet.FDFDoc.prototype.getTrailer = function () {
          return PDFNet.sendWithPromise('FDFDoc.getTrailer', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.FDFDoc.prototype.getRoot = function () {
          return PDFNet.sendWithPromise('FDFDoc.getRoot', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.FDFDoc.prototype.getFDF = function () {
          return PDFNet.sendWithPromise('FDFDoc.getFDF', { doc: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.Obj, id);
            }
          );
        };
        PDFNet.FDFDoc.prototype.getPDFFileName = function () {
          return PDFNet.sendWithPromise('FDFDoc.getPDFFileName', {
            doc: this.id,
          });
        };
        PDFNet.FDFDoc.prototype.setPDFFileName = function (filepath) {
          checkArguments(arguments.length, 1, 'setPDFFileName', '(string)', [
            [filepath, 'string'],
          ]);
          return PDFNet.sendWithPromise('FDFDoc.setPDFFileName', {
            doc: this.id,
            filepath: filepath,
          });
        };
        PDFNet.FDFDoc.prototype.getID = function () {
          return PDFNet.sendWithPromise('FDFDoc.getID', { doc: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.Obj, id);
            }
          );
        };
        PDFNet.FDFDoc.prototype.setID = function (id) {
          checkArguments(arguments.length, 1, 'setID', '(PDFNet.Obj)', [
            [id, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('FDFDoc.setID', {
            doc: this.id,
            id: id.id,
          });
        };
        PDFNet.FDFDoc.prototype.getFieldIteratorBegin = function () {
          return PDFNet.sendWithPromise('FDFDoc.getFieldIteratorBegin', {
            doc: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Iterator, id, 'FDFField');
          });
        };
        PDFNet.FDFDoc.prototype.getFieldIterator = function (field_name) {
          checkArguments(arguments.length, 1, 'getFieldIterator', '(string)', [
            [field_name, 'string'],
          ]);
          return PDFNet.sendWithPromise('FDFDoc.getFieldIterator', {
            doc: this.id,
            field_name: field_name,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Iterator, id, 'FDFField');
          });
        };
        PDFNet.FDFDoc.prototype.getField = function (field_name) {
          checkArguments(arguments.length, 1, 'getField', '(string)', [
            [field_name, 'string'],
          ]);
          return PDFNet.sendWithPromise('FDFDoc.getField', {
            doc: this.id,
            field_name: field_name,
          }).then(function (id) {
            return new PDFNet.FDFField(id);
          });
        };
        PDFNet.FDFDoc.prototype.fieldCreate = function (
          field_name,
          type,
          field_value
        ) {
          'undefined' === typeof field_value &&
            (field_value = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            2,
            'fieldCreate',
            '(string, number, PDFNet.Obj)',
            [
              [field_name, 'string'],
              [type, 'number'],
              [field_value, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          return PDFNet.sendWithPromise('FDFDoc.fieldCreate', {
            doc: this.id,
            field_name: field_name,
            type: type,
            field_value: field_value.id,
          }).then(function (id) {
            return new PDFNet.FDFField(id);
          });
        };
        PDFNet.FDFDoc.prototype.fieldCreateFromString = function (
          field_name,
          type,
          field_value
        ) {
          checkArguments(
            arguments.length,
            3,
            'fieldCreateFromString',
            '(string, number, string)',
            [
              [field_name, 'string'],
              [type, 'number'],
              [field_value, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('FDFDoc.fieldCreateFromString', {
            doc: this.id,
            field_name: field_name,
            type: type,
            field_value: field_value,
          }).then(function (id) {
            return new PDFNet.FDFField(id);
          });
        };
        PDFNet.FDFDoc.prototype.getSDFDoc = function () {
          return PDFNet.sendWithPromise('FDFDoc.getSDFDoc', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SDFDoc, id);
          });
        };
        PDFNet.FDFDoc.createFromXFDF = function (file_name) {
          checkArguments(arguments.length, 1, 'createFromXFDF', '(string)', [
            [file_name, 'string'],
          ]);
          return PDFNet.sendWithPromise('fdfDocCreateFromXFDF', {
            file_name: file_name,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.FDFDoc, id);
          });
        };
        PDFNet.FDFDoc.prototype.saveAsXFDFWithOptions = function (
          filepath,
          opts
        ) {
          'undefined' === typeof opts && (opts = null);
          checkArguments(
            arguments.length,
            1,
            'saveAsXFDFWithOptions',
            '(string, PDFNet.OptionBase)',
            [
              [filepath, 'string'],
              [opts, 'OptionBase'],
            ]
          );
          checkParamsYieldFunction('saveAsXFDFWithOptions', [[opts, 1]]);
          opts = opts ? opts.getJsonString() : '{}';
          return PDFNet.sendWithPromise('FDFDoc.saveAsXFDFWithOptions', {
            doc: this.id,
            filepath: filepath,
            opts: opts,
          });
        };
        PDFNet.FDFDoc.prototype.saveAsXFDFAsString = function () {
          return PDFNet.sendWithPromise('FDFDoc.saveAsXFDFAsString', {
            doc: this.id,
          });
        };
        PDFNet.FDFDoc.prototype.saveAsXFDFAsStringWithOptions = function (
          opts
        ) {
          'undefined' === typeof opts && (opts = null);
          checkArguments(
            arguments.length,
            0,
            'saveAsXFDFAsStringWithOptions',
            '(PDFNet.OptionBase)',
            [[opts, 'OptionBase']]
          );
          checkParamsYieldFunction('saveAsXFDFAsStringWithOptions', [
            [opts, 0],
          ]);
          opts = opts ? opts.getJsonString() : '{}';
          return PDFNet.sendWithPromise(
            'FDFDoc.saveAsXFDFAsStringWithOptions',
            { doc: this.id, opts: opts }
          );
        };
        PDFNet.FDFDoc.prototype.mergeAnnots = function (
          command_file,
          permitted_user
        ) {
          'undefined' === typeof permitted_user && (permitted_user = '');
          checkArguments(
            arguments.length,
            1,
            'mergeAnnots',
            '(string, string)',
            [
              [command_file, 'string'],
              [permitted_user, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('FDFDoc.mergeAnnots', {
            doc: this.id,
            command_file: command_file,
            permitted_user: permitted_user,
          });
        };
        PDFNet.FDFField.create = function (field_dict, fdf_dict) {
          'undefined' === typeof field_dict &&
            (field_dict = new PDFNet.Obj('0'));
          'undefined' === typeof fdf_dict && (fdf_dict = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            0,
            'create',
            '(PDFNet.Obj, PDFNet.Obj)',
            [
              [field_dict, 'Object', PDFNet.Obj, 'Obj'],
              [fdf_dict, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          return PDFNet.sendWithPromise('fdfFieldCreate', {
            field_dict: field_dict.id,
            fdf_dict: fdf_dict.id,
          }).then(function (id) {
            return new PDFNet.FDFField(id);
          });
        };
        PDFNet.FDFField.prototype.getValue = function () {
          checkThisYieldFunction('getValue', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'FDFField.getValue';
          return PDFNet.sendWithPromise('FDFField.getValue', {
            field: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = createPDFNetObj(PDFNet.Obj, id.result);
            copyFunc(id.field, me);
            return id.result;
          });
        };
        PDFNet.FDFField.prototype.setValue = function (value) {
          checkArguments(arguments.length, 1, 'setValue', '(PDFNet.Obj)', [
            [value, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          checkThisYieldFunction('setValue', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'FDFField.setValue';
          return PDFNet.sendWithPromise('FDFField.setValue', {
            field: this,
            value: value.id,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.FDFField.prototype.getName = function () {
          checkThisYieldFunction('getName', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'FDFField.getName';
          return PDFNet.sendWithPromise('FDFField.getName', {
            field: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.field, me);
            return id.result;
          });
        };
        PDFNet.FDFField.prototype.getPartialName = function () {
          checkThisYieldFunction('getPartialName', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'FDFField.getPartialName';
          return PDFNet.sendWithPromise('FDFField.getPartialName', {
            field: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.field, me);
            return id.result;
          });
        };
        PDFNet.FDFField.prototype.getSDFObj = function () {
          checkThisYieldFunction('getSDFObj', this.yieldFunction);
          return PDFNet.sendWithPromise('FDFField.getSDFObj', {
            field: this,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.FDFField.prototype.findAttribute = function (attrib) {
          checkArguments(arguments.length, 1, 'findAttribute', '(string)', [
            [attrib, 'string'],
          ]);
          checkThisYieldFunction('findAttribute', this.yieldFunction);
          return PDFNet.sendWithPromise('FDFField.findAttribute', {
            field: this,
            attrib: attrib,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Filter.prototype.createASCII85Encode = function (
          line_width,
          buf_sz
        ) {
          checkArguments(
            arguments.length,
            2,
            'createASCII85Encode',
            '(number, number)',
            [
              [line_width, 'number'],
              [buf_sz, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Filter.createASCII85Encode', {
            no_own_input_filter: this.id,
            line_width: line_width,
            buf_sz: buf_sz,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Filter, id);
          });
        };
        PDFNet.Filter.createMemoryFilter = function (buf_sz, is_input) {
          checkArguments(
            arguments.length,
            2,
            'createMemoryFilter',
            '(number, boolean)',
            [
              [buf_sz, 'number'],
              [is_input, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('filterCreateMemoryFilter', {
            buf_sz: buf_sz,
            is_input: is_input,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Filter, id);
          });
        };
        PDFNet.Filter.createImage2RGBFromElement = function (elem) {
          checkArguments(
            arguments.length,
            1,
            'createImage2RGBFromElement',
            '(PDFNet.Element)',
            [[elem, 'Object', PDFNet.Element, 'Element']]
          );
          return PDFNet.sendWithPromise('filterCreateImage2RGBFromElement', {
            elem: elem.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Filter, id);
          });
        };
        PDFNet.Filter.createImage2RGBFromObj = function (obj) {
          checkArguments(
            arguments.length,
            1,
            'createImage2RGBFromObj',
            '(PDFNet.Obj)',
            [[obj, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('filterCreateImage2RGBFromObj', {
            obj: obj.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Filter, id);
          });
        };
        PDFNet.Filter.createImage2RGB = function (img) {
          checkArguments(
            arguments.length,
            1,
            'createImage2RGB',
            '(PDFNet.Image)',
            [[img, 'Object', PDFNet.Image, 'Image']]
          );
          return PDFNet.sendWithPromise('filterCreateImage2RGB', {
            img: img.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Filter, id);
          });
        };
        PDFNet.Filter.createImage2RGBAFromElement = function (
          elem,
          premultiply
        ) {
          checkArguments(
            arguments.length,
            2,
            'createImage2RGBAFromElement',
            '(PDFNet.Element, boolean)',
            [
              [elem, 'Object', PDFNet.Element, 'Element'],
              [premultiply, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('filterCreateImage2RGBAFromElement', {
            elem: elem.id,
            premultiply: premultiply,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Filter, id);
          });
        };
        PDFNet.Filter.createImage2RGBAFromObj = function (obj, premultiply) {
          checkArguments(
            arguments.length,
            2,
            'createImage2RGBAFromObj',
            '(PDFNet.Obj, boolean)',
            [
              [obj, 'Object', PDFNet.Obj, 'Obj'],
              [premultiply, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('filterCreateImage2RGBAFromObj', {
            obj: obj.id,
            premultiply: premultiply,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Filter, id);
          });
        };
        PDFNet.Filter.createImage2RGBA = function (img, premultiply) {
          checkArguments(
            arguments.length,
            2,
            'createImage2RGBA',
            '(PDFNet.Image, boolean)',
            [
              [img, 'Object', PDFNet.Image, 'Image'],
              [premultiply, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('filterCreateImage2RGBA', {
            img: img.id,
            premultiply: premultiply,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Filter, id);
          });
        };
        PDFNet.Filter.prototype.attachFilter = function (attach_filter) {
          checkArguments(
            arguments.length,
            1,
            'attachFilter',
            '(PDFNet.Filter)',
            [[attach_filter, 'Object', PDFNet.Filter, 'Filter']]
          );
          0 != attach_filter.id && avoidCleanup(attach_filter.id);
          return PDFNet.sendWithPromise('Filter.attachFilter', {
            filter: this.id,
            no_own_attach_filter: attach_filter.id,
          });
        };
        PDFNet.Filter.prototype.releaseAttachedFilter = function () {
          return PDFNet.sendWithPromise('Filter.releaseAttachedFilter', {
            filter: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Filter, id);
          });
        };
        PDFNet.Filter.prototype.getAttachedFilter = function () {
          return PDFNet.sendWithPromise('Filter.getAttachedFilter', {
            filter: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Filter, id);
          });
        };
        PDFNet.Filter.prototype.getSourceFilter = function () {
          return PDFNet.sendWithPromise('Filter.getSourceFilter', {
            filter: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Filter, id);
          });
        };
        PDFNet.Filter.prototype.getName = function () {
          return PDFNet.sendWithPromise('Filter.getName', { filter: this.id });
        };
        PDFNet.Filter.prototype.getDecodeName = function () {
          return PDFNet.sendWithPromise('Filter.getDecodeName', {
            filter: this.id,
          });
        };
        PDFNet.Filter.prototype.begin = function () {
          return PDFNet.sendWithPromise('Filter.begin', { filter: this.id });
        };
        PDFNet.Filter.prototype.size = function () {
          return PDFNet.sendWithPromise('Filter.size', { filter: this.id });
        };
        PDFNet.Filter.prototype.consume = function (num_bytes) {
          checkArguments(arguments.length, 1, 'consume', '(number)', [
            [num_bytes, 'number'],
          ]);
          return PDFNet.sendWithPromise('Filter.consume', {
            filter: this.id,
            num_bytes: num_bytes,
          });
        };
        PDFNet.Filter.prototype.count = function () {
          return PDFNet.sendWithPromise('Filter.count', { filter: this.id });
        };
        PDFNet.Filter.prototype.setCount = function (new_count) {
          checkArguments(arguments.length, 1, 'setCount', '(number)', [
            [new_count, 'number'],
          ]);
          return PDFNet.sendWithPromise('Filter.setCount', {
            filter: this.id,
            new_count: new_count,
          });
        };
        PDFNet.Filter.prototype.setStreamLength = function (bytes) {
          checkArguments(arguments.length, 1, 'setStreamLength', '(number)', [
            [bytes, 'number'],
          ]);
          return PDFNet.sendWithPromise('Filter.setStreamLength', {
            filter: this.id,
            bytes: bytes,
          });
        };
        PDFNet.Filter.prototype.flush = function () {
          return PDFNet.sendWithPromise('Filter.flush', { filter: this.id });
        };
        PDFNet.Filter.prototype.flushAll = function () {
          return PDFNet.sendWithPromise('Filter.flushAll', { filter: this.id });
        };
        PDFNet.Filter.prototype.isInputFilter = function () {
          return PDFNet.sendWithPromise('Filter.isInputFilter', {
            filter: this.id,
          });
        };
        PDFNet.Filter.prototype.canSeek = function () {
          return PDFNet.sendWithPromise('Filter.canSeek', { filter: this.id });
        };
        PDFNet.Filter.prototype.seek = function (offset, origin) {
          checkArguments(arguments.length, 2, 'seek', '(number, number)', [
            [offset, 'number'],
            [origin, 'number'],
          ]);
          return PDFNet.sendWithPromise('Filter.seek', {
            filter: this.id,
            offset: offset,
            origin: origin,
          });
        };
        PDFNet.Filter.prototype.tell = function () {
          return PDFNet.sendWithPromise('Filter.tell', { filter: this.id });
        };
        PDFNet.Filter.prototype.truncate = function (new_size) {
          checkArguments(arguments.length, 1, 'truncate', '(number)', [
            [new_size, 'number'],
          ]);
          return PDFNet.sendWithPromise('Filter.truncate', {
            filter: this.id,
            new_size: new_size,
          });
        };
        PDFNet.Filter.prototype.createInputIterator = function () {
          return PDFNet.sendWithPromise('Filter.createInputIterator', {
            filter: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Filter, id);
          });
        };
        PDFNet.Filter.prototype.getFilePath = function () {
          return PDFNet.sendWithPromise('Filter.getFilePath', {
            filter: this.id,
          });
        };
        PDFNet.Filter.prototype.memoryFilterGetBuffer = function () {
          return PDFNet.sendWithPromise('Filter.memoryFilterGetBuffer', {
            filter: this.id,
          });
        };
        PDFNet.Filter.prototype.memoryFilterSetAsInputFilter = function () {
          return PDFNet.sendWithPromise('Filter.memoryFilterSetAsInputFilter', {
            filter: this.id,
          });
        };
        PDFNet.Filter.prototype.memoryFilterReset = function () {
          return PDFNet.sendWithPromise('Filter.memoryFilterReset', {
            filter: this.id,
          });
        };
        PDFNet.FilterReader.create = function (filter) {
          checkArguments(arguments.length, 1, 'create', '(PDFNet.Filter)', [
            [filter, 'Object', PDFNet.Filter, 'Filter'],
          ]);
          return PDFNet.sendWithPromise('filterReaderCreate', {
            filter: filter.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.FilterReader, id);
          });
        };
        PDFNet.FilterReader.prototype.attachFilter = function (filter) {
          checkArguments(
            arguments.length,
            1,
            'attachFilter',
            '(PDFNet.Filter)',
            [[filter, 'Object', PDFNet.Filter, 'Filter']]
          );
          return PDFNet.sendWithPromise('FilterReader.attachFilter', {
            reader: this.id,
            filter: filter.id,
          });
        };
        PDFNet.FilterReader.prototype.getAttachedFilter = function () {
          return PDFNet.sendWithPromise('FilterReader.getAttachedFilter', {
            reader: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Filter, id);
          });
        };
        PDFNet.FilterReader.prototype.seek = function (offset, origin) {
          checkArguments(arguments.length, 2, 'seek', '(number, number)', [
            [offset, 'number'],
            [origin, 'number'],
          ]);
          return PDFNet.sendWithPromise('FilterReader.seek', {
            reader: this.id,
            offset: offset,
            origin: origin,
          });
        };
        PDFNet.FilterReader.prototype.tell = function () {
          return PDFNet.sendWithPromise('FilterReader.tell', {
            reader: this.id,
          });
        };
        PDFNet.FilterReader.prototype.count = function () {
          return PDFNet.sendWithPromise('FilterReader.count', {
            reader: this.id,
          });
        };
        PDFNet.FilterReader.prototype.flush = function () {
          return PDFNet.sendWithPromise('FilterReader.flush', {
            reader: this.id,
          });
        };
        PDFNet.FilterReader.prototype.flushAll = function () {
          return PDFNet.sendWithPromise('FilterReader.flushAll', {
            reader: this.id,
          });
        };
        PDFNet.FilterReader.prototype.get = function () {
          return PDFNet.sendWithPromise('FilterReader.get', {
            reader: this.id,
          });
        };
        PDFNet.FilterReader.prototype.peek = function () {
          return PDFNet.sendWithPromise('FilterReader.peek', {
            reader: this.id,
          });
        };
        PDFNet.FilterWriter.create = function (filter) {
          checkArguments(arguments.length, 1, 'create', '(PDFNet.Filter)', [
            [filter, 'Object', PDFNet.Filter, 'Filter'],
          ]);
          return PDFNet.sendWithPromise('filterWriterCreate', {
            filter: filter.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.FilterWriter, id);
          });
        };
        PDFNet.FilterWriter.prototype.attachFilter = function (filter) {
          checkArguments(
            arguments.length,
            1,
            'attachFilter',
            '(PDFNet.Filter)',
            [[filter, 'Object', PDFNet.Filter, 'Filter']]
          );
          return PDFNet.sendWithPromise('FilterWriter.attachFilter', {
            writer: this.id,
            filter: filter.id,
          });
        };
        PDFNet.FilterWriter.prototype.getAttachedFilter = function () {
          return PDFNet.sendWithPromise('FilterWriter.getAttachedFilter', {
            writer: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Filter, id);
          });
        };
        PDFNet.FilterWriter.prototype.seek = function (offset, origin) {
          checkArguments(arguments.length, 2, 'seek', '(number, number)', [
            [offset, 'number'],
            [origin, 'number'],
          ]);
          return PDFNet.sendWithPromise('FilterWriter.seek', {
            writer: this.id,
            offset: offset,
            origin: origin,
          });
        };
        PDFNet.FilterWriter.prototype.tell = function () {
          return PDFNet.sendWithPromise('FilterWriter.tell', {
            writer: this.id,
          });
        };
        PDFNet.FilterWriter.prototype.count = function () {
          return PDFNet.sendWithPromise('FilterWriter.count', {
            writer: this.id,
          });
        };
        PDFNet.FilterWriter.prototype.flush = function () {
          return PDFNet.sendWithPromise('FilterWriter.flush', {
            writer: this.id,
          });
        };
        PDFNet.FilterWriter.prototype.flushAll = function () {
          return PDFNet.sendWithPromise('FilterWriter.flushAll', {
            writer: this.id,
          });
        };
        PDFNet.FilterWriter.prototype.writeUChar = function (ch) {
          checkArguments(arguments.length, 1, 'writeUChar', '(number)', [
            [ch, 'number'],
          ]);
          return PDFNet.sendWithPromise('FilterWriter.writeUChar', {
            writer: this.id,
            ch: ch,
          });
        };
        PDFNet.FilterWriter.prototype.writeInt16 = function (num) {
          checkArguments(arguments.length, 1, 'writeInt16', '(number)', [
            [num, 'number'],
          ]);
          return PDFNet.sendWithPromise('FilterWriter.writeInt16', {
            writer: this.id,
            num: num,
          });
        };
        PDFNet.FilterWriter.prototype.writeUInt16 = function (num) {
          checkArguments(arguments.length, 1, 'writeUInt16', '(number)', [
            [num, 'number'],
          ]);
          return PDFNet.sendWithPromise('FilterWriter.writeUInt16', {
            writer: this.id,
            num: num,
          });
        };
        PDFNet.FilterWriter.prototype.writeInt32 = function (num) {
          checkArguments(arguments.length, 1, 'writeInt32', '(number)', [
            [num, 'number'],
          ]);
          return PDFNet.sendWithPromise('FilterWriter.writeInt32', {
            writer: this.id,
            num: num,
          });
        };
        PDFNet.FilterWriter.prototype.writeUInt32 = function (num) {
          checkArguments(arguments.length, 1, 'writeUInt32', '(number)', [
            [num, 'number'],
          ]);
          return PDFNet.sendWithPromise('FilterWriter.writeUInt32', {
            writer: this.id,
            num: num,
          });
        };
        PDFNet.FilterWriter.prototype.writeInt64 = function (num) {
          checkArguments(arguments.length, 1, 'writeInt64', '(number)', [
            [num, 'number'],
          ]);
          return PDFNet.sendWithPromise('FilterWriter.writeInt64', {
            writer: this.id,
            num: num,
          });
        };
        PDFNet.FilterWriter.prototype.writeUInt64 = function (num) {
          checkArguments(arguments.length, 1, 'writeUInt64', '(number)', [
            [num, 'number'],
          ]);
          return PDFNet.sendWithPromise('FilterWriter.writeUInt64', {
            writer: this.id,
            num: num,
          });
        };
        PDFNet.FilterWriter.prototype.writeString = function (str) {
          checkArguments(arguments.length, 1, 'writeString', '(string)', [
            [str, 'string'],
          ]);
          return PDFNet.sendWithPromise('FilterWriter.writeString', {
            writer: this.id,
            str: str,
          });
        };
        PDFNet.FilterWriter.prototype.writeFilter = function (reader) {
          checkArguments(
            arguments.length,
            1,
            'writeFilter',
            '(PDFNet.FilterReader)',
            [[reader, 'Object', PDFNet.FilterReader, 'FilterReader']]
          );
          return PDFNet.sendWithPromise('FilterWriter.writeFilter', {
            writer: this.id,
            reader: reader.id,
          });
        };
        PDFNet.FilterWriter.prototype.writeLine = function (line, eol) {
          'undefined' === typeof eol && (eol = 13);
          checkArguments(arguments.length, 1, 'writeLine', '(string, number)', [
            [line, 'const char* = 0'],
            [eol, 'number'],
          ]);
          return PDFNet.sendWithPromise('FilterWriter.writeLine', {
            writer: this.id,
            line: line,
            eol: eol,
          });
        };
        PDFNet.FilterWriter.prototype.writeBuffer = function (buf) {
          checkArguments(
            arguments.length,
            1,
            'writeBuffer',
            '(ArrayBuffer|TypedArray)',
            [[buf, 'ArrayBuffer']]
          );
          var bufArrayBuffer = getArrayBuffer(buf, !1);
          return PDFNet.sendWithPromise('FilterWriter.writeBuffer', {
            writer: this.id,
            buf: bufArrayBuffer,
          });
        };
        PDFNet.OCG.create = function (pdfdoc, name) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.PDFDoc, string)',
            [
              [pdfdoc, 'PDFDoc'],
              [name, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('ocgCreate', {
            pdfdoc: pdfdoc.id,
            name: name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.OCG, id);
          });
        };
        PDFNet.OCG.createFromObj = function (ocg_dict) {
          checkArguments(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
            [ocg_dict, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('ocgCreateFromObj', {
            ocg_dict: ocg_dict.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.OCG, id);
          });
        };
        PDFNet.OCG.prototype.copy = function () {
          return PDFNet.sendWithPromise('OCG.copy', { ocg: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.OCG, id);
            }
          );
        };
        PDFNet.OCG.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('OCG.getSDFObj', { ocg: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.Obj, id);
            }
          );
        };
        PDFNet.OCG.prototype.isValid = function () {
          return PDFNet.sendWithPromise('OCG.isValid', { ocg: this.id });
        };
        PDFNet.OCG.prototype.getName = function () {
          return PDFNet.sendWithPromise('OCG.getName', { c: this.id });
        };
        PDFNet.OCG.prototype.setName = function (value) {
          checkArguments(arguments.length, 1, 'setName', '(string)', [
            [value, 'string'],
          ]);
          return PDFNet.sendWithPromise('OCG.setName', {
            c: this.id,
            value: value,
          });
        };
        PDFNet.OCG.prototype.getIntent = function () {
          return PDFNet.sendWithPromise('OCG.getIntent', { c: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.Obj, id);
            }
          );
        };
        PDFNet.OCG.prototype.setIntent = function (value) {
          checkArguments(arguments.length, 1, 'setIntent', '(PDFNet.Obj)', [
            [value, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('OCG.setIntent', {
            c: this.id,
            value: value.id,
          });
        };
        PDFNet.OCG.prototype.hasUsage = function () {
          return PDFNet.sendWithPromise('OCG.hasUsage', { c: this.id });
        };
        PDFNet.OCG.prototype.getUsage = function (key) {
          checkArguments(arguments.length, 1, 'getUsage', '(string)', [
            [key, 'string'],
          ]);
          return PDFNet.sendWithPromise('OCG.getUsage', {
            c: this.id,
            key: key,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.OCG.prototype.getCurrentState = function (ctx) {
          checkArguments(
            arguments.length,
            1,
            'getCurrentState',
            '(PDFNet.OCGContext)',
            [[ctx, 'Object', PDFNet.OCGContext, 'OCGContext']]
          );
          return PDFNet.sendWithPromise('OCG.getCurrentState', {
            c: this.id,
            ctx: ctx.id,
          });
        };
        PDFNet.OCG.prototype.setCurrentState = function (ctx, state) {
          checkArguments(
            arguments.length,
            2,
            'setCurrentState',
            '(PDFNet.OCGContext, boolean)',
            [
              [ctx, 'Object', PDFNet.OCGContext, 'OCGContext'],
              [state, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('OCG.setCurrentState', {
            c: this.id,
            ctx: ctx.id,
            state: state,
          });
        };
        PDFNet.OCG.prototype.getInitialState = function (cfg) {
          checkArguments(
            arguments.length,
            1,
            'getInitialState',
            '(PDFNet.OCGConfig)',
            [[cfg, 'Object', PDFNet.OCGConfig, 'OCGConfig']]
          );
          return PDFNet.sendWithPromise('OCG.getInitialState', {
            c: this.id,
            cfg: cfg.id,
          });
        };
        PDFNet.OCG.prototype.setInitialState = function (cfg, state) {
          checkArguments(
            arguments.length,
            2,
            'setInitialState',
            '(PDFNet.OCGConfig, boolean)',
            [
              [cfg, 'Object', PDFNet.OCGConfig, 'OCGConfig'],
              [state, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('OCG.setInitialState', {
            c: this.id,
            cfg: cfg.id,
            state: state,
          });
        };
        PDFNet.OCG.prototype.isLocked = function (cfg) {
          checkArguments(
            arguments.length,
            1,
            'isLocked',
            '(PDFNet.OCGConfig)',
            [[cfg, 'Object', PDFNet.OCGConfig, 'OCGConfig']]
          );
          return PDFNet.sendWithPromise('OCG.isLocked', {
            c: this.id,
            cfg: cfg.id,
          });
        };
        PDFNet.OCG.prototype.setLocked = function (cfg, state) {
          checkArguments(
            arguments.length,
            2,
            'setLocked',
            '(PDFNet.OCGConfig, boolean)',
            [
              [cfg, 'Object', PDFNet.OCGConfig, 'OCGConfig'],
              [state, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('OCG.setLocked', {
            c: this.id,
            cfg: cfg.id,
            state: state,
          });
        };
        PDFNet.OCGConfig.createFromObj = function (dict) {
          checkArguments(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
            [dict, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('ocgConfigCreateFromObj', {
            dict: dict.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.OCGConfig, id);
          });
        };
        PDFNet.OCGConfig.create = function (pdfdoc, default_config) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.PDFDoc, boolean)',
            [
              [pdfdoc, 'PDFDoc'],
              [default_config, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('ocgConfigCreate', {
            pdfdoc: pdfdoc.id,
            default_config: default_config,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.OCGConfig, id);
          });
        };
        PDFNet.OCGConfig.prototype.copy = function () {
          return PDFNet.sendWithPromise('OCGConfig.copy', { c: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.OCGConfig, id);
            }
          );
        };
        PDFNet.OCGConfig.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('OCGConfig.getSDFObj', {
            c: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.OCGConfig.prototype.getOrder = function () {
          return PDFNet.sendWithPromise('OCGConfig.getOrder', {
            c: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.OCGConfig.prototype.setOrder = function (value) {
          checkArguments(arguments.length, 1, 'setOrder', '(PDFNet.Obj)', [
            [value, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('OCGConfig.setOrder', {
            c: this.id,
            value: value.id,
          });
        };
        PDFNet.OCGConfig.prototype.getName = function () {
          return PDFNet.sendWithPromise('OCGConfig.getName', { c: this.id });
        };
        PDFNet.OCGConfig.prototype.setName = function (value) {
          checkArguments(arguments.length, 1, 'setName', '(string)', [
            [value, 'string'],
          ]);
          return PDFNet.sendWithPromise('OCGConfig.setName', {
            c: this.id,
            value: value,
          });
        };
        PDFNet.OCGConfig.prototype.getCreator = function () {
          return PDFNet.sendWithPromise('OCGConfig.getCreator', { c: this.id });
        };
        PDFNet.OCGConfig.prototype.setCreator = function (value) {
          checkArguments(arguments.length, 1, 'setCreator', '(string)', [
            [value, 'string'],
          ]);
          return PDFNet.sendWithPromise('OCGConfig.setCreator', {
            c: this.id,
            value: value,
          });
        };
        PDFNet.OCGConfig.prototype.getInitBaseState = function () {
          return PDFNet.sendWithPromise('OCGConfig.getInitBaseState', {
            c: this.id,
          });
        };
        PDFNet.OCGConfig.prototype.setInitBaseState = function (value) {
          'undefined' === typeof value && (value = 'ON');
          checkArguments(arguments.length, 0, 'setInitBaseState', '(string)', [
            [value, 'const char* = 0'],
          ]);
          return PDFNet.sendWithPromise('OCGConfig.setInitBaseState', {
            c: this.id,
            value: value,
          });
        };
        PDFNet.OCGConfig.prototype.getInitOnStates = function () {
          return PDFNet.sendWithPromise('OCGConfig.getInitOnStates', {
            c: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.OCGConfig.prototype.setInitOnStates = function (value) {
          checkArguments(
            arguments.length,
            1,
            'setInitOnStates',
            '(PDFNet.Obj)',
            [[value, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('OCGConfig.setInitOnStates', {
            c: this.id,
            value: value.id,
          });
        };
        PDFNet.OCGConfig.prototype.getInitOffStates = function () {
          return PDFNet.sendWithPromise('OCGConfig.getInitOffStates', {
            c: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.OCGConfig.prototype.setInitOffStates = function (value) {
          checkArguments(
            arguments.length,
            1,
            'setInitOffStates',
            '(PDFNet.Obj)',
            [[value, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('OCGConfig.setInitOffStates', {
            c: this.id,
            value: value.id,
          });
        };
        PDFNet.OCGConfig.prototype.getIntent = function () {
          return PDFNet.sendWithPromise('OCGConfig.getIntent', {
            c: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.OCGConfig.prototype.setIntent = function (value) {
          checkArguments(arguments.length, 1, 'setIntent', '(PDFNet.Obj)', [
            [value, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('OCGConfig.setIntent', {
            c: this.id,
            value: value.id,
          });
        };
        PDFNet.OCGConfig.prototype.getLockedOCGs = function () {
          return PDFNet.sendWithPromise('OCGConfig.getLockedOCGs', {
            c: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.OCGConfig.prototype.setLockedOCGs = function (value) {
          checkArguments(arguments.length, 1, 'setLockedOCGs', '(PDFNet.Obj)', [
            [value, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('OCGConfig.setLockedOCGs', {
            c: this.id,
            value: value.id,
          });
        };
        PDFNet.OCGContext.createFromConfig = function (cfg) {
          checkArguments(
            arguments.length,
            1,
            'createFromConfig',
            '(PDFNet.OCGConfig)',
            [[cfg, 'Object', PDFNet.OCGConfig, 'OCGConfig']]
          );
          return PDFNet.sendWithPromise('ocgContextCreateFromConfig', {
            cfg: cfg.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.OCGContext, id);
          });
        };
        PDFNet.OCGContext.prototype.copy = function () {
          return PDFNet.sendWithPromise('OCGContext.copy', { c: this.id }).then(
            function (id) {
              return createDestroyableObj(PDFNet.OCGContext, id);
            }
          );
        };
        PDFNet.OCGContext.prototype.getState = function (grp) {
          checkArguments(arguments.length, 1, 'getState', '(PDFNet.OCG)', [
            [grp, 'Object', PDFNet.OCG, 'OCG'],
          ]);
          return PDFNet.sendWithPromise('OCGContext.getState', {
            c: this.id,
            grp: grp.id,
          });
        };
        PDFNet.OCGContext.prototype.setState = function (grp, state) {
          checkArguments(
            arguments.length,
            2,
            'setState',
            '(PDFNet.OCG, boolean)',
            [
              [grp, 'Object', PDFNet.OCG, 'OCG'],
              [state, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('OCGContext.setState', {
            c: this.id,
            grp: grp.id,
            state: state,
          });
        };
        PDFNet.OCGContext.prototype.resetStates = function (all_on) {
          checkArguments(arguments.length, 1, 'resetStates', '(boolean)', [
            [all_on, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('OCGContext.resetStates', {
            c: this.id,
            all_on: all_on,
          });
        };
        PDFNet.OCGContext.prototype.setNonOCDrawing = function (draw_non_OC) {
          checkArguments(arguments.length, 1, 'setNonOCDrawing', '(boolean)', [
            [draw_non_OC, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('OCGContext.setNonOCDrawing', {
            c: this.id,
            draw_non_OC: draw_non_OC,
          });
        };
        PDFNet.OCGContext.prototype.getNonOCDrawing = function () {
          return PDFNet.sendWithPromise('OCGContext.getNonOCDrawing', {
            c: this.id,
          });
        };
        PDFNet.OCGContext.prototype.setOCDrawMode = function (oc_draw_mode) {
          checkArguments(arguments.length, 1, 'setOCDrawMode', '(number)', [
            [oc_draw_mode, 'number'],
          ]);
          return PDFNet.sendWithPromise('OCGContext.setOCDrawMode', {
            c: this.id,
            oc_draw_mode: oc_draw_mode,
          });
        };
        PDFNet.OCGContext.prototype.getOCMode = function () {
          return PDFNet.sendWithPromise('OCGContext.getOCMode', { c: this.id });
        };
        PDFNet.OCMD.createFromObj = function (ocmd_dict) {
          checkArguments(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
            [ocmd_dict, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('ocmdCreateFromObj', {
            ocmd_dict: ocmd_dict.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.OCMD, id);
          });
        };
        PDFNet.OCMD.create = function (pdfdoc, ocgs, vis_policy) {
          checkArguments(
            arguments.length,
            3,
            'create',
            '(PDFNet.PDFDoc, PDFNet.Obj, number)',
            [
              [pdfdoc, 'PDFDoc'],
              [ocgs, 'Object', PDFNet.Obj, 'Obj'],
              [vis_policy, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('ocmdCreate', {
            pdfdoc: pdfdoc.id,
            ocgs: ocgs.id,
            vis_policy: vis_policy,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.OCMD, id);
          });
        };
        PDFNet.OCMD.prototype.copy = function () {
          return PDFNet.sendWithPromise('OCMD.copy', { ocmd: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.OCMD, id);
            }
          );
        };
        PDFNet.OCMD.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('OCMD.getSDFObj', {
            ocmd: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.OCMD.prototype.getOCGs = function () {
          return PDFNet.sendWithPromise('OCMD.getOCGs', { ocmd: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.Obj, id);
            }
          );
        };
        PDFNet.OCMD.prototype.getVisibilityExpression = function () {
          return PDFNet.sendWithPromise('OCMD.getVisibilityExpression', {
            ocmd: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.OCMD.prototype.isValid = function () {
          return PDFNet.sendWithPromise('OCMD.isValid', { ocmd: this.id });
        };
        PDFNet.OCMD.prototype.isCurrentlyVisible = function (ctx) {
          checkArguments(
            arguments.length,
            1,
            'isCurrentlyVisible',
            '(PDFNet.OCGContext)',
            [[ctx, 'Object', PDFNet.OCGContext, 'OCGContext']]
          );
          return PDFNet.sendWithPromise('OCMD.isCurrentlyVisible', {
            ocmd: this.id,
            ctx: ctx.id,
          });
        };
        PDFNet.OCMD.prototype.getVisibilityPolicy = function () {
          return PDFNet.sendWithPromise('OCMD.getVisibilityPolicy', {
            ocmd: this.id,
          });
        };
        PDFNet.OCMD.prototype.setVisibilityPolicy = function (vis_policy) {
          checkArguments(
            arguments.length,
            1,
            'setVisibilityPolicy',
            '(number)',
            [[vis_policy, 'number']]
          );
          return PDFNet.sendWithPromise('OCMD.setVisibilityPolicy', {
            ocmd: this.id,
            vis_policy: vis_policy,
          });
        };
        PDFNet.PDFACompliance.prototype.getErrorCount = function () {
          return PDFNet.sendWithPromise('PDFACompliance.getErrorCount', {
            pdfac: this.id,
          });
        };
        PDFNet.PDFACompliance.prototype.getError = function (idx) {
          checkArguments(arguments.length, 1, 'getError', '(number)', [
            [idx, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFACompliance.getError', {
            pdfac: this.id,
            idx: idx,
          });
        };
        PDFNet.PDFACompliance.prototype.getRefObjCount = function (id) {
          checkArguments(arguments.length, 1, 'getRefObjCount', '(number)', [
            [id, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFACompliance.getRefObjCount', {
            pdfac: this.id,
            id: id,
          });
        };
        PDFNet.PDFACompliance.prototype.getRefObj = function (id, err_idx) {
          checkArguments(arguments.length, 2, 'getRefObj', '(number, number)', [
            [id, 'number'],
            [err_idx, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFACompliance.getRefObj', {
            pdfac: this.id,
            id: id,
            err_idx: err_idx,
          });
        };
        PDFNet.PDFACompliance.getPDFAErrorMessage = function (id) {
          checkArguments(
            arguments.length,
            1,
            'getPDFAErrorMessage',
            '(number)',
            [[id, 'number']]
          );
          return PDFNet.sendWithPromise('pdfaComplianceGetPDFAErrorMessage', {
            id: id,
          });
        };
        PDFNet.PDFACompliance.getDeclaredConformance = function (doc) {
          checkArguments(
            arguments.length,
            1,
            'getDeclaredConformance',
            '(PDFNet.PDFDoc)',
            [[doc, 'PDFDoc']]
          );
          return PDFNet.sendWithPromise(
            'pdfaComplianceGetDeclaredConformance',
            { doc: doc.id }
          );
        };
        PDFNet.PDFACompliance.prototype.saveAsFromBuffer = function (
          linearized
        ) {
          'undefined' === typeof linearized && (linearized = !1);
          checkArguments(arguments.length, 0, 'saveAsFromBuffer', '(boolean)', [
            [linearized, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('PDFACompliance.saveAsFromBuffer', {
            pdfac: this.id,
            linearized: linearized,
          }).then(function (id) {
            return new Uint8Array(id);
          });
        };
        PDFNet.AttrObj.create = function (dict) {
          'undefined' === typeof dict && (dict = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'create', '(PDFNet.Obj)', [
            [dict, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('attrObjCreate', {
            dict: dict.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.AttrObj, id);
          });
        };
        PDFNet.AttrObj.prototype.copy = function () {
          return PDFNet.sendWithPromise('AttrObj.copy', { a: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.AttrObj, id);
            }
          );
        };
        PDFNet.AttrObj.prototype.getOwner = function () {
          return PDFNet.sendWithPromise('AttrObj.getOwner', { obj: this.id });
        };
        PDFNet.AttrObj.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('AttrObj.getSDFObj', {
            obj: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ClassMap.create = function (dict) {
          'undefined' === typeof dict && (dict = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'create', '(PDFNet.Obj)', [
            [dict, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('classMapCreate', {
            dict: dict.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ClassMap, id);
          });
        };
        PDFNet.ClassMap.prototype.copy = function () {
          return PDFNet.sendWithPromise('ClassMap.copy', { p: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.ClassMap, id);
            }
          );
        };
        PDFNet.ClassMap.prototype.isValid = function () {
          return PDFNet.sendWithPromise('ClassMap.isValid', { map: this.id });
        };
        PDFNet.ClassMap.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('ClassMap.getSDFObj', {
            map: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ContentItem.prototype.copy = function () {
          checkThisYieldFunction('copy', this.yieldFunction);
          return PDFNet.sendWithPromise('ContentItem.copy', { c: this }).then(
            function (id) {
              return new PDFNet.ContentItem(id);
            }
          );
        };
        PDFNet.ContentItem.prototype.getType = function () {
          checkThisYieldFunction('getType', this.yieldFunction);
          return PDFNet.sendWithPromise('ContentItem.getType', { item: this });
        };
        PDFNet.ContentItem.prototype.getParent = function () {
          checkThisYieldFunction('getParent', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'ContentItem.getParent';
          return PDFNet.sendWithPromise('ContentItem.getParent', {
            item: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = new PDFNet.SElement(id.result);
            copyFunc(id.item, me);
            return id.result;
          });
        };
        PDFNet.ContentItem.prototype.getPage = function () {
          checkThisYieldFunction('getPage', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'ContentItem.getPage';
          return PDFNet.sendWithPromise('ContentItem.getPage', {
            item: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = createPDFNetObj(PDFNet.Page, id.result);
            copyFunc(id.item, me);
            return id.result;
          });
        };
        PDFNet.ContentItem.prototype.getSDFObj = function () {
          checkThisYieldFunction('getSDFObj', this.yieldFunction);
          return PDFNet.sendWithPromise('ContentItem.getSDFObj', {
            item: this,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ContentItem.prototype.getMCID = function () {
          checkThisYieldFunction('getMCID', this.yieldFunction);
          return PDFNet.sendWithPromise('ContentItem.getMCID', { item: this });
        };
        PDFNet.ContentItem.prototype.getContainingStm = function () {
          checkThisYieldFunction('getContainingStm', this.yieldFunction);
          return PDFNet.sendWithPromise('ContentItem.getContainingStm', {
            item: this,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ContentItem.prototype.getStmOwner = function () {
          checkThisYieldFunction('getStmOwner', this.yieldFunction);
          return PDFNet.sendWithPromise('ContentItem.getStmOwner', {
            item: this,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ContentItem.prototype.getRefObj = function () {
          checkThisYieldFunction('getRefObj', this.yieldFunction);
          return PDFNet.sendWithPromise('ContentItem.getRefObj', {
            item: this,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.RoleMap.create = function (dict) {
          checkArguments(arguments.length, 1, 'create', '(PDFNet.Obj)', [
            [dict, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('roleMapCreate', {
            dict: dict.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.RoleMap, id);
          });
        };
        PDFNet.RoleMap.prototype.copy = function () {
          return PDFNet.sendWithPromise('RoleMap.copy', { p: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.RoleMap, id);
            }
          );
        };
        PDFNet.RoleMap.prototype.isValid = function () {
          return PDFNet.sendWithPromise('RoleMap.isValid', { map: this.id });
        };
        PDFNet.RoleMap.prototype.getDirectMap = function (type) {
          checkArguments(arguments.length, 1, 'getDirectMap', '(string)', [
            [type, 'string'],
          ]);
          return PDFNet.sendWithPromise('RoleMap.getDirectMap', {
            map: this.id,
            type: type,
          });
        };
        PDFNet.RoleMap.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('RoleMap.getSDFObj', {
            map: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SElement.create = function (dict) {
          'undefined' === typeof dict && (dict = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'create', '(PDFNet.Obj)', [
            [dict, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('sElementCreate', {
            dict: dict.id,
          }).then(function (id) {
            return new PDFNet.SElement(id);
          });
        };
        PDFNet.SElement.createFromPDFDoc = function (doc, struct_type) {
          checkArguments(
            arguments.length,
            2,
            'createFromPDFDoc',
            '(PDFNet.PDFDoc, string)',
            [
              [doc, 'PDFDoc'],
              [struct_type, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('sElementCreateFromPDFDoc', {
            doc: doc.id,
            struct_type: struct_type,
          }).then(function (id) {
            return new PDFNet.SElement(id);
          });
        };
        PDFNet.SElement.prototype.insert = function (kid, insert_before) {
          checkArguments(
            arguments.length,
            2,
            'insert',
            '(PDFNet.SElement, number)',
            [
              [kid, 'Structure', PDFNet.SElement, 'SElement'],
              [insert_before, 'number'],
            ]
          );
          checkThisYieldFunction('insert', this.yieldFunction);
          checkParamsYieldFunction('insert', [[kid, 0]]);
          var me = this;
          this.yieldFunction = 'SElement.insert';
          kid.yieldFunction = 'SElement.insert';
          return PDFNet.sendWithPromise('SElement.insert', {
            e: this,
            kid: kid,
            insert_before: insert_before,
          }).then(function (id) {
            me.yieldFunction = void 0;
            kid.yieldFunction = void 0;
            copyFunc(id.e, me);
            copyFunc(id.kid, kid);
          });
        };
        PDFNet.SElement.prototype.createContentItem = function (
          doc,
          page,
          insert_before
        ) {
          'undefined' === typeof insert_before && (insert_before = -1);
          checkArguments(
            arguments.length,
            2,
            'createContentItem',
            '(PDFNet.PDFDoc, PDFNet.Page, number)',
            [
              [doc, 'PDFDoc'],
              [page, 'Object', PDFNet.Page, 'Page'],
              [insert_before, 'number'],
            ]
          );
          checkThisYieldFunction('createContentItem', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'SElement.createContentItem';
          return PDFNet.sendWithPromise('SElement.createContentItem', {
            e: this,
            doc: doc.id,
            page: page.id,
            insert_before: insert_before,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.e, me);
            return id.result;
          });
        };
        PDFNet.SElement.prototype.isValid = function () {
          checkThisYieldFunction('isValid', this.yieldFunction);
          return PDFNet.sendWithPromise('SElement.isValid', { e: this });
        };
        PDFNet.SElement.prototype.getType = function () {
          checkThisYieldFunction('getType', this.yieldFunction);
          return PDFNet.sendWithPromise('SElement.getType', { e: this });
        };
        PDFNet.SElement.prototype.getNumKids = function () {
          checkThisYieldFunction('getNumKids', this.yieldFunction);
          return PDFNet.sendWithPromise('SElement.getNumKids', { e: this });
        };
        PDFNet.SElement.prototype.isContentItem = function (index) {
          checkArguments(arguments.length, 1, 'isContentItem', '(number)', [
            [index, 'number'],
          ]);
          checkThisYieldFunction('isContentItem', this.yieldFunction);
          return PDFNet.sendWithPromise('SElement.isContentItem', {
            e: this,
            index: index,
          });
        };
        PDFNet.SElement.prototype.getAsContentItem = function (index) {
          checkArguments(arguments.length, 1, 'getAsContentItem', '(number)', [
            [index, 'number'],
          ]);
          checkThisYieldFunction('getAsContentItem', this.yieldFunction);
          return PDFNet.sendWithPromise('SElement.getAsContentItem', {
            e: this,
            index: index,
          }).then(function (id) {
            return new PDFNet.ContentItem(id);
          });
        };
        PDFNet.SElement.prototype.getAsStructElem = function (index) {
          checkArguments(arguments.length, 1, 'getAsStructElem', '(number)', [
            [index, 'number'],
          ]);
          checkThisYieldFunction('getAsStructElem', this.yieldFunction);
          return PDFNet.sendWithPromise('SElement.getAsStructElem', {
            e: this,
            index: index,
          }).then(function (id) {
            return new PDFNet.SElement(id);
          });
        };
        PDFNet.SElement.prototype.getParent = function () {
          checkThisYieldFunction('getParent', this.yieldFunction);
          return PDFNet.sendWithPromise('SElement.getParent', { e: this }).then(
            function (id) {
              return new PDFNet.SElement(id);
            }
          );
        };
        PDFNet.SElement.prototype.getStructTreeRoot = function () {
          checkThisYieldFunction('getStructTreeRoot', this.yieldFunction);
          return PDFNet.sendWithPromise('SElement.getStructTreeRoot', {
            e: this,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.STree, id);
          });
        };
        PDFNet.SElement.prototype.hasTitle = function () {
          checkThisYieldFunction('hasTitle', this.yieldFunction);
          return PDFNet.sendWithPromise('SElement.hasTitle', { e: this });
        };
        PDFNet.SElement.prototype.getTitle = function () {
          checkThisYieldFunction('getTitle', this.yieldFunction);
          return PDFNet.sendWithPromise('SElement.getTitle', { e: this });
        };
        PDFNet.SElement.prototype.getID = function () {
          checkThisYieldFunction('getID', this.yieldFunction);
          return PDFNet.sendWithPromise('SElement.getID', { e: this }).then(
            function (id) {
              return createPDFNetObj(PDFNet.Obj, id);
            }
          );
        };
        PDFNet.SElement.prototype.hasActualText = function () {
          checkThisYieldFunction('hasActualText', this.yieldFunction);
          return PDFNet.sendWithPromise('SElement.hasActualText', { e: this });
        };
        PDFNet.SElement.prototype.getActualText = function () {
          checkThisYieldFunction('getActualText', this.yieldFunction);
          return PDFNet.sendWithPromise('SElement.getActualText', { e: this });
        };
        PDFNet.SElement.prototype.hasAlt = function () {
          checkThisYieldFunction('hasAlt', this.yieldFunction);
          return PDFNet.sendWithPromise('SElement.hasAlt', { e: this });
        };
        PDFNet.SElement.prototype.getAlt = function () {
          checkThisYieldFunction('getAlt', this.yieldFunction);
          return PDFNet.sendWithPromise('SElement.getAlt', { e: this });
        };
        PDFNet.SElement.prototype.getSDFObj = function () {
          checkThisYieldFunction('getSDFObj', this.yieldFunction);
          return PDFNet.sendWithPromise('SElement.getSDFObj', { e: this }).then(
            function (id) {
              return createPDFNetObj(PDFNet.Obj, id);
            }
          );
        };
        PDFNet.STree.create = function (struct_dict) {
          checkArguments(arguments.length, 1, 'create', '(PDFNet.Obj)', [
            [struct_dict, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('sTreeCreate', {
            struct_dict: struct_dict.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.STree, id);
          });
        };
        PDFNet.STree.createFromPDFDoc = function (doc) {
          checkArguments(
            arguments.length,
            1,
            'createFromPDFDoc',
            '(PDFNet.PDFDoc)',
            [[doc, 'PDFDoc']]
          );
          return PDFNet.sendWithPromise('sTreeCreateFromPDFDoc', {
            doc: doc.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.STree, id);
          });
        };
        PDFNet.STree.prototype.insert = function (kid, insert_before) {
          checkArguments(
            arguments.length,
            2,
            'insert',
            '(PDFNet.SElement, number)',
            [
              [kid, 'Structure', PDFNet.SElement, 'SElement'],
              [insert_before, 'number'],
            ]
          );
          checkParamsYieldFunction('insert', [[kid, 0]]);
          kid.yieldFunction = 'STree.insert';
          return PDFNet.sendWithPromise('STree.insert', {
            tree: this.id,
            kid: kid,
            insert_before: insert_before,
          }).then(function (id) {
            kid.yieldFunction = void 0;
            copyFunc(id, kid);
          });
        };
        PDFNet.STree.prototype.copy = function () {
          return PDFNet.sendWithPromise('STree.copy', { c: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.STree, id);
            }
          );
        };
        PDFNet.STree.prototype.isValid = function () {
          return PDFNet.sendWithPromise('STree.isValid', { tree: this.id });
        };
        PDFNet.STree.prototype.getNumKids = function () {
          return PDFNet.sendWithPromise('STree.getNumKids', { tree: this.id });
        };
        PDFNet.STree.prototype.getKid = function (index) {
          checkArguments(arguments.length, 1, 'getKid', '(number)', [
            [index, 'number'],
          ]);
          return PDFNet.sendWithPromise('STree.getKid', {
            tree: this.id,
            index: index,
          }).then(function (id) {
            return new PDFNet.SElement(id);
          });
        };
        PDFNet.STree.prototype.getRoleMap = function () {
          return PDFNet.sendWithPromise('STree.getRoleMap', {
            tree: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.RoleMap, id);
          });
        };
        PDFNet.STree.prototype.getClassMap = function () {
          return PDFNet.sendWithPromise('STree.getClassMap', {
            tree: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ClassMap, id);
          });
        };
        PDFNet.STree.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('STree.getSDFObj', {
            tree: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Action.createGoto = function (dest) {
          checkArguments(
            arguments.length,
            1,
            'createGoto',
            '(PDFNet.Destination)',
            [[dest, 'Object', PDFNet.Destination, 'Destination']]
          );
          return PDFNet.sendWithPromise('actionCreateGoto', {
            dest: dest.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.Action.createGotoWithKey = function (key, dest) {
          checkArguments(
            arguments.length,
            2,
            'createGotoWithKey',
            '(string, PDFNet.Destination)',
            [
              [key, 'string'],
              [dest, 'Object', PDFNet.Destination, 'Destination'],
            ]
          );
          return PDFNet.sendWithPromise('actionCreateGotoWithKey', {
            key: key,
            dest: dest.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.Action.createGotoRemote = function (file, page_num) {
          checkArguments(
            arguments.length,
            2,
            'createGotoRemote',
            '(PDFNet.FileSpec, number)',
            [
              [file, 'Object', PDFNet.FileSpec, 'FileSpec'],
              [page_num, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('actionCreateGotoRemote', {
            file: file.id,
            page_num: page_num,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.Action.createGotoRemoteSetNewWindow = function (
          file,
          page_num,
          new_window
        ) {
          checkArguments(
            arguments.length,
            3,
            'createGotoRemoteSetNewWindow',
            '(PDFNet.FileSpec, number, boolean)',
            [
              [file, 'Object', PDFNet.FileSpec, 'FileSpec'],
              [page_num, 'number'],
              [new_window, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('actionCreateGotoRemoteSetNewWindow', {
            file: file.id,
            page_num: page_num,
            new_window: new_window,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.Action.createURI = function (sdfdoc, uri) {
          checkArguments(
            arguments.length,
            2,
            'createURI',
            '(PDFNet.SDFDoc, string)',
            [
              [sdfdoc, 'SDFDoc'],
              [uri, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('actionCreateURI', {
            sdfdoc: sdfdoc.id,
            uri: uri,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.Action.createURIWithUString = function (sdfdoc, uri) {
          checkArguments(
            arguments.length,
            2,
            'createURIWithUString',
            '(PDFNet.SDFDoc, string)',
            [
              [sdfdoc, 'SDFDoc'],
              [uri, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('actionCreateURIWithUString', {
            sdfdoc: sdfdoc.id,
            uri: uri,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.Action.createSubmitForm = function (url) {
          checkArguments(
            arguments.length,
            1,
            'createSubmitForm',
            '(PDFNet.FileSpec)',
            [[url, 'Object', PDFNet.FileSpec, 'FileSpec']]
          );
          return PDFNet.sendWithPromise('actionCreateSubmitForm', {
            url: url.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.Action.createLaunch = function (sdfdoc, path) {
          checkArguments(
            arguments.length,
            2,
            'createLaunch',
            '(PDFNet.SDFDoc, string)',
            [
              [sdfdoc, 'SDFDoc'],
              [path, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('actionCreateLaunch', {
            sdfdoc: sdfdoc.id,
            path: path,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.Action.createHideField = function (sdfdoc, field_names_list) {
          checkArguments(
            arguments.length,
            2,
            'createHideField',
            '(PDFNet.SDFDoc, Array<string>)',
            [
              [sdfdoc, 'SDFDoc'],
              [field_names_list, 'Array'],
            ]
          );
          return PDFNet.sendWithPromise('actionCreateHideField', {
            sdfdoc: sdfdoc.id,
            field_names_list: field_names_list,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.Action.createImportData = function (sdfdoc, path) {
          checkArguments(
            arguments.length,
            2,
            'createImportData',
            '(PDFNet.SDFDoc, string)',
            [
              [sdfdoc, 'SDFDoc'],
              [path, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('actionCreateImportData', {
            sdfdoc: sdfdoc.id,
            path: path,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.Action.createResetForm = function (sdfdoc) {
          checkArguments(
            arguments.length,
            1,
            'createResetForm',
            '(PDFNet.SDFDoc)',
            [[sdfdoc, 'SDFDoc']]
          );
          return PDFNet.sendWithPromise('actionCreateResetForm', {
            sdfdoc: sdfdoc.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.Action.createJavaScript = function (sdfdoc, script) {
          checkArguments(
            arguments.length,
            2,
            'createJavaScript',
            '(PDFNet.SDFDoc, string)',
            [
              [sdfdoc, 'SDFDoc'],
              [script, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('actionCreateJavaScript', {
            sdfdoc: sdfdoc.id,
            script: script,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.Action.create = function (in_obj) {
          'undefined' === typeof in_obj && (in_obj = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'create', '(PDFNet.Obj)', [
            [in_obj, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('actionCreate', {
            in_obj: in_obj.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.Action.prototype.copy = function () {
          return PDFNet.sendWithPromise('Action.copy', {
            in_action: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.Action.prototype.compare = function (in_action) {
          checkArguments(arguments.length, 1, 'compare', '(PDFNet.Action)', [
            [in_action, 'Object', PDFNet.Action, 'Action'],
          ]);
          return PDFNet.sendWithPromise('Action.compare', {
            action: this.id,
            in_action: in_action.id,
          });
        };
        PDFNet.Action.prototype.isValid = function () {
          return PDFNet.sendWithPromise('Action.isValid', { action: this.id });
        };
        PDFNet.Action.prototype.getXFDF = function () {
          return PDFNet.sendWithPromise('Action.getXFDF', { action: this.id });
        };
        PDFNet.Action.prototype.getType = function () {
          return PDFNet.sendWithPromise('Action.getType', { action: this.id });
        };
        PDFNet.Action.prototype.getDest = function () {
          return PDFNet.sendWithPromise('Action.getDest', {
            action: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Destination, id);
          });
        };
        PDFNet.Action.prototype.getNext = function () {
          return PDFNet.sendWithPromise('Action.getNext', {
            action: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Action.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('Action.getSDFObj', {
            action: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Action.prototype.getFormActionFlag = function (flag) {
          checkArguments(arguments.length, 1, 'getFormActionFlag', '(number)', [
            [flag, 'number'],
          ]);
          return PDFNet.sendWithPromise('Action.getFormActionFlag', {
            action: this.id,
            flag: flag,
          });
        };
        PDFNet.Action.prototype.setFormActionFlag = function (flag, value) {
          checkArguments(
            arguments.length,
            2,
            'setFormActionFlag',
            '(number, boolean)',
            [
              [flag, 'number'],
              [value, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('Action.setFormActionFlag', {
            action: this.id,
            flag: flag,
            value: value,
          });
        };
        PDFNet.Action.prototype.needsWriteLock = function () {
          return PDFNet.sendWithPromise('Action.needsWriteLock', {
            action: this.id,
          });
        };
        PDFNet.Action.prototype.execute = function () {
          return PDFNet.sendWithPromise('Action.execute', { action: this.id });
        };
        PDFNet.Action.prototype.executeKeyStrokeAction = function (data) {
          checkArguments(
            arguments.length,
            1,
            'executeKeyStrokeAction',
            '(PDFNet.KeyStrokeEventData)',
            [[data, 'Object', PDFNet.KeyStrokeEventData, 'KeyStrokeEventData']]
          );
          return PDFNet.sendWithPromise('Action.executeKeyStrokeAction', {
            action: this.id,
            data: data.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.KeyStrokeActionResult, id);
          });
        };
        PDFNet.KeyStrokeActionResult.prototype.isValid = function () {
          return PDFNet.sendWithPromise('KeyStrokeActionResult.isValid', {
            action_ret: this.id,
          });
        };
        PDFNet.KeyStrokeActionResult.prototype.getText = function () {
          return PDFNet.sendWithPromise('KeyStrokeActionResult.getText', {
            action_ret: this.id,
          });
        };
        PDFNet.KeyStrokeActionResult.prototype.copy = function () {
          return PDFNet.sendWithPromise('KeyStrokeActionResult.copy', {
            action_ret: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.KeyStrokeActionResult, id);
          });
        };
        PDFNet.KeyStrokeEventData.create = function (
          field_name,
          current,
          change,
          selection_start,
          selection_end
        ) {
          checkArguments(
            arguments.length,
            5,
            'create',
            '(string, string, string, number, number)',
            [
              [field_name, 'string'],
              [current, 'string'],
              [change, 'string'],
              [selection_start, 'number'],
              [selection_end, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('keyStrokeEventDataCreate', {
            field_name: field_name,
            current: current,
            change: change,
            selection_start: selection_start,
            selection_end: selection_end,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.KeyStrokeEventData, id);
          });
        };
        PDFNet.KeyStrokeEventData.prototype.copy = function () {
          return PDFNet.sendWithPromise('KeyStrokeEventData.copy', {
            data: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.KeyStrokeEventData, id);
          });
        };
        PDFNet.Page.create = function (page_dict) {
          'undefined' === typeof page_dict && (page_dict = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'create', '(PDFNet.Obj)', [
            [page_dict, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('pageCreate', {
            page_dict: page_dict.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Page, id);
          });
        };
        PDFNet.Page.prototype.copy = function () {
          return PDFNet.sendWithPromise('Page.copy', { p: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.Page, id);
            }
          );
        };
        PDFNet.Page.prototype.isValid = function () {
          return PDFNet.sendWithPromise('Page.isValid', { page: this.id });
        };
        PDFNet.Page.prototype.getIndex = function () {
          return PDFNet.sendWithPromise('Page.getIndex', { page: this.id });
        };
        PDFNet.Page.prototype.getTriggerAction = function (trigger) {
          checkArguments(arguments.length, 1, 'getTriggerAction', '(number)', [
            [trigger, 'number'],
          ]);
          return PDFNet.sendWithPromise('Page.getTriggerAction', {
            page: this.id,
            trigger: trigger,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Page.prototype.getBox = function (type) {
          checkArguments(arguments.length, 1, 'getBox', '(number)', [
            [type, 'number'],
          ]);
          return PDFNet.sendWithPromise('Page.getBox', {
            page: this.id,
            type: type,
          }).then(function (id) {
            return new PDFNet.Rect(id);
          });
        };
        PDFNet.Page.prototype.setBox = function (type, box) {
          checkArguments(
            arguments.length,
            2,
            'setBox',
            '(number, PDFNet.Rect)',
            [
              [type, 'number'],
              [box, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('setBox', [[box, 1]]);
          return PDFNet.sendWithPromise('Page.setBox', {
            page: this.id,
            type: type,
            box: box,
          });
        };
        PDFNet.Page.prototype.getCropBox = function () {
          return PDFNet.sendWithPromise('Page.getCropBox', {
            page: this.id,
          }).then(function (id) {
            return new PDFNet.Rect(id);
          });
        };
        PDFNet.Page.prototype.setCropBox = function (box) {
          checkArguments(arguments.length, 1, 'setCropBox', '(PDFNet.Rect)', [
            [box, 'Structure', PDFNet.Rect, 'Rect'],
          ]);
          checkParamsYieldFunction('setCropBox', [[box, 0]]);
          return PDFNet.sendWithPromise('Page.setCropBox', {
            page: this.id,
            box: box,
          });
        };
        PDFNet.Page.prototype.getMediaBox = function () {
          return PDFNet.sendWithPromise('Page.getMediaBox', {
            page: this.id,
          }).then(function (id) {
            return new PDFNet.Rect(id);
          });
        };
        PDFNet.Page.prototype.setMediaBox = function (box) {
          checkArguments(arguments.length, 1, 'setMediaBox', '(PDFNet.Rect)', [
            [box, 'Structure', PDFNet.Rect, 'Rect'],
          ]);
          checkParamsYieldFunction('setMediaBox', [[box, 0]]);
          return PDFNet.sendWithPromise('Page.setMediaBox', {
            page: this.id,
            box: box,
          });
        };
        PDFNet.Page.prototype.getVisibleContentBox = function () {
          return PDFNet.sendWithPromise('Page.getVisibleContentBox', {
            page: this.id,
          }).then(function (id) {
            return new PDFNet.Rect(id);
          });
        };
        PDFNet.Page.prototype.getRotation = function () {
          return PDFNet.sendWithPromise('Page.getRotation', { page: this.id });
        };
        PDFNet.Page.prototype.setRotation = function (angle) {
          checkArguments(arguments.length, 1, 'setRotation', '(number)', [
            [angle, 'number'],
          ]);
          return PDFNet.sendWithPromise('Page.setRotation', {
            page: this.id,
            angle: angle,
          });
        };
        PDFNet.Page.addRotations = function (r0, r1) {
          checkArguments(
            arguments.length,
            2,
            'addRotations',
            '(number, number)',
            [
              [r0, 'number'],
              [r1, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('pageAddRotations', { r0: r0, r1: r1 });
        };
        PDFNet.Page.subtractRotations = function (r0, r1) {
          checkArguments(
            arguments.length,
            2,
            'subtractRotations',
            '(number, number)',
            [
              [r0, 'number'],
              [r1, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('pageSubtractRotations', {
            r0: r0,
            r1: r1,
          });
        };
        PDFNet.Page.rotationToDegree = function (r) {
          checkArguments(arguments.length, 1, 'rotationToDegree', '(number)', [
            [r, 'number'],
          ]);
          return PDFNet.sendWithPromise('pageRotationToDegree', { r: r });
        };
        PDFNet.Page.degreeToRotation = function (r) {
          checkArguments(arguments.length, 1, 'degreeToRotation', '(number)', [
            [r, 'number'],
          ]);
          return PDFNet.sendWithPromise('pageDegreeToRotation', { r: r });
        };
        PDFNet.Page.prototype.getPageWidth = function (box_type) {
          'undefined' === typeof box_type &&
            (box_type = PDFNet.Page.Box.e_crop);
          checkArguments(arguments.length, 0, 'getPageWidth', '(number)', [
            [box_type, 'number'],
          ]);
          return PDFNet.sendWithPromise('Page.getPageWidth', {
            page: this.id,
            box_type: box_type,
          });
        };
        PDFNet.Page.prototype.getPageHeight = function (box_type) {
          'undefined' === typeof box_type &&
            (box_type = PDFNet.Page.Box.e_crop);
          checkArguments(arguments.length, 0, 'getPageHeight', '(number)', [
            [box_type, 'number'],
          ]);
          return PDFNet.sendWithPromise('Page.getPageHeight', {
            page: this.id,
            box_type: box_type,
          });
        };
        PDFNet.Page.prototype.getDefaultMatrix = function (
          flip_y,
          box_type,
          angle
        ) {
          'undefined' === typeof flip_y && (flip_y = !1);
          'undefined' === typeof box_type &&
            (box_type = PDFNet.Page.Box.e_crop);
          'undefined' === typeof angle && (angle = PDFNet.Page.Rotate.e_0);
          checkArguments(
            arguments.length,
            0,
            'getDefaultMatrix',
            '(boolean, number, number)',
            [
              [flip_y, 'boolean'],
              [box_type, 'number'],
              [angle, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Page.getDefaultMatrix', {
            page: this.id,
            flip_y: flip_y,
            box_type: box_type,
            angle: angle,
          }).then(function (id) {
            return new PDFNet.Matrix2D(id);
          });
        };
        PDFNet.Page.prototype.getAnnots = function () {
          return PDFNet.sendWithPromise('Page.getAnnots', {
            page: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Page.prototype.getNumAnnots = function () {
          return PDFNet.sendWithPromise('Page.getNumAnnots', { page: this.id });
        };
        PDFNet.Page.prototype.getAnnot = function (index) {
          checkArguments(arguments.length, 1, 'getAnnot', '(number)', [
            [index, 'number'],
          ]);
          return PDFNet.sendWithPromise('Page.getAnnot', {
            page: this.id,
            index: index,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Annot, id);
          });
        };
        PDFNet.Page.prototype.annotInsert = function (pos, annot) {
          checkArguments(
            arguments.length,
            2,
            'annotInsert',
            '(number, PDFNet.Annot)',
            [
              [pos, 'number'],
              [annot, 'Object', PDFNet.Annot, 'Annot'],
            ]
          );
          return PDFNet.sendWithPromise('Page.annotInsert', {
            page: this.id,
            pos: pos,
            annot: annot.id,
          });
        };
        PDFNet.Page.prototype.annotPushBack = function (annot) {
          checkArguments(
            arguments.length,
            1,
            'annotPushBack',
            '(PDFNet.Annot)',
            [[annot, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('Page.annotPushBack', {
            page: this.id,
            annot: annot.id,
          });
        };
        PDFNet.Page.prototype.annotPushFront = function (annot) {
          checkArguments(
            arguments.length,
            1,
            'annotPushFront',
            '(PDFNet.Annot)',
            [[annot, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('Page.annotPushFront', {
            page: this.id,
            annot: annot.id,
          });
        };
        PDFNet.Page.prototype.annotRemove = function (annot) {
          checkArguments(arguments.length, 1, 'annotRemove', '(PDFNet.Annot)', [
            [annot, 'Object', PDFNet.Annot, 'Annot'],
          ]);
          return PDFNet.sendWithPromise('Page.annotRemove', {
            page: this.id,
            annot: annot.id,
          });
        };
        PDFNet.Page.prototype.annotRemoveByIndex = function (index) {
          checkArguments(
            arguments.length,
            1,
            'annotRemoveByIndex',
            '(number)',
            [[index, 'number']]
          );
          return PDFNet.sendWithPromise('Page.annotRemoveByIndex', {
            page: this.id,
            index: index,
          });
        };
        PDFNet.Page.prototype.scale = function (scale) {
          checkArguments(arguments.length, 1, 'scale', '(number)', [
            [scale, 'number'],
          ]);
          return PDFNet.sendWithPromise('Page.scale', {
            page: this.id,
            scale: scale,
          });
        };
        PDFNet.Page.prototype.flattenField = function (field_to_flatten) {
          checkArguments(
            arguments.length,
            1,
            'flattenField',
            '(PDFNet.Field)',
            [[field_to_flatten, 'Structure', PDFNet.Field, 'Field']]
          );
          checkParamsYieldFunction('flattenField', [[field_to_flatten, 0]]);
          field_to_flatten.yieldFunction = 'Page.flattenField';
          return PDFNet.sendWithPromise('Page.flattenField', {
            page: this.id,
            field_to_flatten: field_to_flatten,
          }).then(function (id) {
            field_to_flatten.yieldFunction = void 0;
            copyFunc(id, field_to_flatten);
          });
        };
        PDFNet.Page.prototype.hasTransition = function () {
          return PDFNet.sendWithPromise('Page.hasTransition', {
            page: this.id,
          });
        };
        PDFNet.Page.prototype.getUserUnitSize = function () {
          return PDFNet.sendWithPromise('Page.getUserUnitSize', {
            page: this.id,
          });
        };
        PDFNet.Page.prototype.setUserUnitSize = function (unit_size) {
          checkArguments(arguments.length, 1, 'setUserUnitSize', '(number)', [
            [unit_size, 'number'],
          ]);
          return PDFNet.sendWithPromise('Page.setUserUnitSize', {
            page: this.id,
            unit_size: unit_size,
          });
        };
        PDFNet.Page.prototype.getResourceDict = function () {
          return PDFNet.sendWithPromise('Page.getResourceDict', {
            page: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Page.prototype.getContents = function () {
          return PDFNet.sendWithPromise('Page.getContents', {
            page: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Page.prototype.getThumb = function () {
          return PDFNet.sendWithPromise('Page.getThumb', {
            page: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Page.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('Page.getSDFObj', {
            page: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Page.prototype.findInheritedAttribute = function (attrib) {
          checkArguments(
            arguments.length,
            1,
            'findInheritedAttribute',
            '(string)',
            [[attrib, 'string']]
          );
          return PDFNet.sendWithPromise('Page.findInheritedAttribute', {
            page: this.id,
            attrib: attrib,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Annot.create = function (doc, type, pos) {
          checkArguments(
            arguments.length,
            3,
            'create',
            '(PDFNet.SDFDoc, number, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [type, 'number'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 2]]);
          return PDFNet.sendWithPromise('annotCreate', {
            doc: doc.id,
            type: type,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Annot, id);
          });
        };
        PDFNet.Annot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('annotCreateFromObj', { d: d.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.Annot, id);
            }
          );
        };
        PDFNet.Annot.prototype.copy = function () {
          return PDFNet.sendWithPromise('Annot.copy', { d: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.Annot, id);
            }
          );
        };
        PDFNet.Annot.prototype.compare = function (d) {
          checkArguments(arguments.length, 1, 'compare', '(PDFNet.Annot)', [
            [d, 'Object', PDFNet.Annot, 'Annot'],
          ]);
          return PDFNet.sendWithPromise('Annot.compare', {
            annot: this.id,
            d: d.id,
          });
        };
        PDFNet.Annot.prototype.isValid = function () {
          return PDFNet.sendWithPromise('Annot.isValid', { annot: this.id });
        };
        PDFNet.Annot.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('Annot.getSDFObj', {
            annot: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Annot.prototype.getType = function () {
          return PDFNet.sendWithPromise('Annot.getType', { annot: this.id });
        };
        PDFNet.Annot.prototype.isMarkup = function () {
          return PDFNet.sendWithPromise('Annot.isMarkup', { annot: this.id });
        };
        PDFNet.Annot.prototype.getRect = function () {
          return PDFNet.sendWithPromise('Annot.getRect', {
            annot: this.id,
          }).then(function (id) {
            return new PDFNet.Rect(id);
          });
        };
        PDFNet.Annot.prototype.getVisibleContentBox = function () {
          return PDFNet.sendWithPromise('Annot.getVisibleContentBox', {
            annot: this.id,
          }).then(function (id) {
            return new PDFNet.Rect(id);
          });
        };
        PDFNet.Annot.prototype.setRect = function (pos) {
          checkArguments(arguments.length, 1, 'setRect', '(PDFNet.Rect)', [
            [pos, 'Structure', PDFNet.Rect, 'Rect'],
          ]);
          checkParamsYieldFunction('setRect', [[pos, 0]]);
          return PDFNet.sendWithPromise('Annot.setRect', {
            annot: this.id,
            pos: pos,
          });
        };
        PDFNet.Annot.prototype.resize = function (newrect) {
          checkArguments(arguments.length, 1, 'resize', '(PDFNet.Rect)', [
            [newrect, 'Structure', PDFNet.Rect, 'Rect'],
          ]);
          checkParamsYieldFunction('resize', [[newrect, 0]]);
          return PDFNet.sendWithPromise('Annot.resize', {
            annot: this.id,
            newrect: newrect,
          });
        };
        PDFNet.Annot.prototype.setContents = function (contents) {
          checkArguments(arguments.length, 1, 'setContents', '(string)', [
            [contents, 'string'],
          ]);
          return PDFNet.sendWithPromise('Annot.setContents', {
            annot: this.id,
            contents: contents,
          });
        };
        PDFNet.Annot.prototype.getContents = function () {
          return PDFNet.sendWithPromise('Annot.getContents', {
            annot: this.id,
          });
        };
        PDFNet.Annot.prototype.getTriggerAction = function (trigger) {
          checkArguments(arguments.length, 1, 'getTriggerAction', '(number)', [
            [trigger, 'number'],
          ]);
          return PDFNet.sendWithPromise('Annot.getTriggerAction', {
            annot: this.id,
            trigger: trigger,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Annot.prototype.getCustomData = function (key) {
          checkArguments(arguments.length, 1, 'getCustomData', '(string)', [
            [key, 'string'],
          ]);
          return PDFNet.sendWithPromise('Annot.getCustomData', {
            annot: this.id,
            key: key,
          });
        };
        PDFNet.Annot.prototype.setCustomData = function (key, value) {
          checkArguments(
            arguments.length,
            2,
            'setCustomData',
            '(string, string)',
            [
              [key, 'string'],
              [value, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('Annot.setCustomData', {
            annot: this.id,
            key: key,
            value: value,
          });
        };
        PDFNet.Annot.prototype.deleteCustomData = function (key) {
          checkArguments(arguments.length, 1, 'deleteCustomData', '(string)', [
            [key, 'string'],
          ]);
          return PDFNet.sendWithPromise('Annot.deleteCustomData', {
            annot: this.id,
            key: key,
          });
        };
        PDFNet.Annot.prototype.getPage = function () {
          return PDFNet.sendWithPromise('Annot.getPage', {
            annot: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Page, id);
          });
        };
        PDFNet.Annot.prototype.setPage = function (page) {
          checkArguments(arguments.length, 1, 'setPage', '(PDFNet.Page)', [
            [page, 'Object', PDFNet.Page, 'Page'],
          ]);
          return PDFNet.sendWithPromise('Annot.setPage', {
            annot: this.id,
            page: page.id,
          });
        };
        PDFNet.Annot.prototype.getUniqueID = function () {
          return PDFNet.sendWithPromise('Annot.getUniqueID', {
            annot: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Annot.prototype.setUniqueID = function (id) {
          checkArguments(
            arguments.length,
            1,
            'setUniqueID',
            '(ArrayBuffer|TypedArray)',
            [[id, 'ArrayBuffer']]
          );
          var idArrayBuffer = getArrayBuffer(id, !1);
          return PDFNet.sendWithPromise('Annot.setUniqueID', {
            annot: this.id,
            id_buf: idArrayBuffer,
          });
        };
        PDFNet.Annot.prototype.getDate = function () {
          return PDFNet.sendWithPromise('Annot.getDate', {
            annot: this.id,
          }).then(function (id) {
            return new PDFNet.Date(id);
          });
        };
        PDFNet.Annot.prototype.setDate = function (date) {
          checkArguments(arguments.length, 1, 'setDate', '(PDFNet.Date)', [
            [date, 'Structure', PDFNet.Date, 'Date'],
          ]);
          checkParamsYieldFunction('setDate', [[date, 0]]);
          return PDFNet.sendWithPromise('Annot.setDate', {
            annot: this.id,
            date: date,
          });
        };
        PDFNet.Annot.prototype.getFlag = function (flag) {
          checkArguments(arguments.length, 1, 'getFlag', '(number)', [
            [flag, 'number'],
          ]);
          return PDFNet.sendWithPromise('Annot.getFlag', {
            annot: this.id,
            flag: flag,
          });
        };
        PDFNet.Annot.prototype.setFlag = function (flag, value) {
          checkArguments(arguments.length, 2, 'setFlag', '(number, boolean)', [
            [flag, 'number'],
            [value, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Annot.setFlag', {
            annot: this.id,
            flag: flag,
            value: value,
          });
        };
        PDFNet.AnnotBorderStyle.create = function (s, b_width, b_hr, b_vr) {
          'undefined' === typeof b_hr && (b_hr = 0);
          'undefined' === typeof b_vr && (b_vr = 0);
          checkArguments(
            arguments.length,
            2,
            'create',
            '(number, number, number, number)',
            [
              [s, 'number'],
              [b_width, 'number'],
              [b_hr, 'number'],
              [b_vr, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('annotBorderStyleCreate', {
            s: s,
            b_width: b_width,
            b_hr: b_hr,
            b_vr: b_vr,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.AnnotBorderStyle, id);
          });
        };
        PDFNet.AnnotBorderStyle.createWithDashPattern = function (
          s,
          b_width,
          b_hr,
          b_vr,
          b_dash
        ) {
          checkArguments(
            arguments.length,
            5,
            'createWithDashPattern',
            '(number, number, number, number, Array<number>)',
            [
              [s, 'number'],
              [b_width, 'number'],
              [b_hr, 'number'],
              [b_vr, 'number'],
              [b_dash, 'Array'],
            ]
          );
          return PDFNet.sendWithPromise(
            'annotBorderStyleCreateWithDashPattern',
            {
              s: s,
              b_width: b_width,
              b_hr: b_hr,
              b_vr: b_vr,
              b_dash_list: b_dash,
            }
          ).then(function (id) {
            return createDestroyableObj(PDFNet.AnnotBorderStyle, id);
          });
        };
        PDFNet.AnnotBorderStyle.prototype.copy = function () {
          return PDFNet.sendWithPromise('AnnotBorderStyle.copy', {
            bs: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.AnnotBorderStyle, id);
          });
        };
        PDFNet.AnnotBorderStyle.prototype.getStyle = function () {
          return PDFNet.sendWithPromise('AnnotBorderStyle.getStyle', {
            bs: this.id,
          });
        };
        PDFNet.AnnotBorderStyle.prototype.setStyle = function (style) {
          checkArguments(arguments.length, 1, 'setStyle', '(number)', [
            [style, 'number'],
          ]);
          return PDFNet.sendWithPromise('AnnotBorderStyle.setStyle', {
            bs: this.id,
            style: style,
          });
        };
        PDFNet.Annot.prototype.getAppearance = function (
          annot_state,
          app_state
        ) {
          'undefined' === typeof annot_state &&
            (annot_state = PDFNet.Annot.State.e_normal);
          'undefined' === typeof app_state && (app_state = null);
          checkArguments(
            arguments.length,
            0,
            'getAppearance',
            '(number, string)',
            [
              [annot_state, 'number'],
              [app_state, 'const char* = 0'],
            ]
          );
          return PDFNet.sendWithPromise('Annot.getAppearance', {
            annot: this.id,
            annot_state: annot_state,
            app_state: app_state,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Annot.prototype.setAppearance = function (
          app_stream,
          annot_state,
          app_state
        ) {
          'undefined' === typeof annot_state &&
            (annot_state = PDFNet.Annot.State.e_normal);
          'undefined' === typeof app_state && (app_state = null);
          checkArguments(
            arguments.length,
            1,
            'setAppearance',
            '(PDFNet.Obj, number, string)',
            [
              [app_stream, 'Object', PDFNet.Obj, 'Obj'],
              [annot_state, 'number'],
              [app_state, 'const char* = 0'],
            ]
          );
          return PDFNet.sendWithPromise('Annot.setAppearance', {
            annot: this.id,
            app_stream: app_stream.id,
            annot_state: annot_state,
            app_state: app_state,
          });
        };
        PDFNet.Annot.prototype.removeAppearance = function (
          annot_state,
          app_state
        ) {
          'undefined' === typeof annot_state &&
            (annot_state = PDFNet.Annot.State.e_normal);
          'undefined' === typeof app_state && (app_state = null);
          checkArguments(
            arguments.length,
            0,
            'removeAppearance',
            '(number, string)',
            [
              [annot_state, 'number'],
              [app_state, 'const char* = 0'],
            ]
          );
          return PDFNet.sendWithPromise('Annot.removeAppearance', {
            annot: this.id,
            annot_state: annot_state,
            app_state: app_state,
          });
        };
        PDFNet.Annot.prototype.flatten = function (page) {
          checkArguments(arguments.length, 1, 'flatten', '(PDFNet.Page)', [
            [page, 'Object', PDFNet.Page, 'Page'],
          ]);
          return PDFNet.sendWithPromise('Annot.flatten', {
            annot: this.id,
            page: page.id,
          });
        };
        PDFNet.Annot.prototype.getActiveAppearanceState = function () {
          return PDFNet.sendWithPromise('Annot.getActiveAppearanceState', {
            annot: this.id,
          });
        };
        PDFNet.Annot.prototype.setActiveAppearanceState = function (astate) {
          checkArguments(
            arguments.length,
            1,
            'setActiveAppearanceState',
            '(string)',
            [[astate, 'string']]
          );
          return PDFNet.sendWithPromise('Annot.setActiveAppearanceState', {
            annot: this.id,
            astate: astate,
          });
        };
        PDFNet.Annot.prototype.getColor = function () {
          return PDFNet.sendWithPromise('Annot.getColor', {
            annot: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.Annot.prototype.getColorAsRGB = function () {
          return PDFNet.sendWithPromise('Annot.getColorAsRGB', {
            annot: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.Annot.prototype.getColorAsCMYK = function () {
          return PDFNet.sendWithPromise('Annot.getColorAsCMYK', {
            annot: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.Annot.prototype.getColorAsGray = function () {
          return PDFNet.sendWithPromise('Annot.getColorAsGray', {
            annot: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.Annot.prototype.getColorCompNum = function () {
          return PDFNet.sendWithPromise('Annot.getColorCompNum', {
            annot: this.id,
          });
        };
        PDFNet.Annot.prototype.setColorDefault = function (col) {
          checkArguments(
            arguments.length,
            1,
            'setColorDefault',
            '(PDFNet.ColorPt)',
            [[col, 'Object', PDFNet.ColorPt, 'ColorPt']]
          );
          return PDFNet.sendWithPromise('Annot.setColorDefault', {
            annot: this.id,
            col: col.id,
          });
        };
        PDFNet.Annot.prototype.setColor = function (col, numcomp) {
          'undefined' === typeof numcomp && (numcomp = 3);
          checkArguments(
            arguments.length,
            1,
            'setColor',
            '(PDFNet.ColorPt, number)',
            [
              [col, 'Object', PDFNet.ColorPt, 'ColorPt'],
              [numcomp, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Annot.setColor', {
            annot: this.id,
            col: col.id,
            numcomp: numcomp,
          });
        };
        PDFNet.Annot.prototype.getStructParent = function () {
          return PDFNet.sendWithPromise('Annot.getStructParent', {
            annot: this.id,
          });
        };
        PDFNet.Annot.prototype.setStructParent = function (parkeyval) {
          checkArguments(arguments.length, 1, 'setStructParent', '(number)', [
            [parkeyval, 'number'],
          ]);
          return PDFNet.sendWithPromise('Annot.setStructParent', {
            annot: this.id,
            parkeyval: parkeyval,
          });
        };
        PDFNet.Annot.prototype.getOptionalContent = function () {
          return PDFNet.sendWithPromise('Annot.getOptionalContent', {
            annot: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Annot.prototype.setOptionalContent = function (content) {
          checkArguments(
            arguments.length,
            1,
            'setOptionalContent',
            '(PDFNet.Obj)',
            [[content, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('Annot.setOptionalContent', {
            annot: this.id,
            content: content.id,
          });
        };
        PDFNet.Annot.prototype.refreshAppearance = function () {
          return PDFNet.sendWithPromise('Annot.refreshAppearance', {
            annot: this.id,
          });
        };
        PDFNet.Annot.prototype.refreshAppearanceRefreshOptions = function (
          options
        ) {
          'undefined' === typeof options && (options = null);
          checkArguments(
            arguments.length,
            0,
            'refreshAppearanceRefreshOptions',
            '(PDFNet.OptionBase)',
            [[options, 'OptionBase']]
          );
          checkParamsYieldFunction('refreshAppearanceRefreshOptions', [
            [options, 0],
          ]);
          options = options ? options.getJsonString() : '{}';
          return PDFNet.sendWithPromise(
            'Annot.refreshAppearanceRefreshOptions',
            { annot: this.id, options: options }
          );
        };
        PDFNet.Annot.prototype.getRotation = function () {
          return PDFNet.sendWithPromise('Annot.getRotation', {
            annot: this.id,
          });
        };
        PDFNet.Annot.prototype.setRotation = function (angle) {
          checkArguments(arguments.length, 1, 'setRotation', '(number)', [
            [angle, 'number'],
          ]);
          return PDFNet.sendWithPromise('Annot.setRotation', {
            annot: this.id,
            angle: angle,
          });
        };
        PDFNet.AnnotBorderStyle.prototype.getWidth = function () {
          return PDFNet.sendWithPromise('AnnotBorderStyle.getWidth', {
            bs: this.id,
          });
        };
        PDFNet.AnnotBorderStyle.prototype.setWidth = function (width) {
          checkArguments(arguments.length, 1, 'setWidth', '(number)', [
            [width, 'number'],
          ]);
          return PDFNet.sendWithPromise('AnnotBorderStyle.setWidth', {
            bs: this.id,
            width: width,
          });
        };
        PDFNet.AnnotBorderStyle.prototype.getHR = function () {
          return PDFNet.sendWithPromise('AnnotBorderStyle.getHR', {
            bs: this.id,
          });
        };
        PDFNet.AnnotBorderStyle.prototype.setHR = function (horizontal_radius) {
          checkArguments(arguments.length, 1, 'setHR', '(number)', [
            [horizontal_radius, 'number'],
          ]);
          return PDFNet.sendWithPromise('AnnotBorderStyle.setHR', {
            bs: this.id,
            horizontal_radius: horizontal_radius,
          });
        };
        PDFNet.AnnotBorderStyle.prototype.getVR = function () {
          return PDFNet.sendWithPromise('AnnotBorderStyle.getVR', {
            bs: this.id,
          });
        };
        PDFNet.AnnotBorderStyle.prototype.setVR = function (vertical_radius) {
          checkArguments(arguments.length, 1, 'setVR', '(number)', [
            [vertical_radius, 'number'],
          ]);
          return PDFNet.sendWithPromise('AnnotBorderStyle.setVR', {
            bs: this.id,
            vertical_radius: vertical_radius,
          });
        };
        PDFNet.AnnotBorderStyle.prototype.getDashPattern = function () {
          return PDFNet.sendWithPromise('AnnotBorderStyle.getDashPattern', {
            bs: this.id,
          }).then(function (id) {
            return new Float64Array(id);
          });
        };
        PDFNet.Annot.prototype.getBorderStyle = function () {
          return PDFNet.sendWithPromise('Annot.getBorderStyle', {
            annot: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.AnnotBorderStyle, id);
          });
        };
        PDFNet.Annot.prototype.setBorderStyle = function (bs, oldStyleOnly) {
          'undefined' === typeof oldStyleOnly && (oldStyleOnly = !1);
          checkArguments(
            arguments.length,
            1,
            'setBorderStyle',
            '(PDFNet.AnnotBorderStyle, boolean)',
            [
              [bs, 'Object', PDFNet.AnnotBorderStyle, 'AnnotBorderStyle'],
              [oldStyleOnly, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('Annot.setBorderStyle', {
            annot: this.id,
            bs: bs.id,
            oldStyleOnly: oldStyleOnly,
          });
        };
        PDFNet.Annot.getBorderStyleStyle = function (bs) {
          checkArguments(
            arguments.length,
            1,
            'getBorderStyleStyle',
            '(PDFNet.AnnotBorderStyle)',
            [[bs, 'Object', PDFNet.AnnotBorderStyle, 'AnnotBorderStyle']]
          );
          return PDFNet.sendWithPromise('annotGetBorderStyleStyle', {
            bs: bs.id,
          });
        };
        PDFNet.Annot.setBorderStyleStyle = function (bs, bst) {
          checkArguments(
            arguments.length,
            2,
            'setBorderStyleStyle',
            '(PDFNet.AnnotBorderStyle, number)',
            [
              [bs, 'Object', PDFNet.AnnotBorderStyle, 'AnnotBorderStyle'],
              [bst, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('annotSetBorderStyleStyle', {
            bs: bs.id,
            bst: bst,
          });
        };
        PDFNet.AnnotBorderStyle.prototype.compare = function (b) {
          checkArguments(
            arguments.length,
            1,
            'compare',
            '(PDFNet.AnnotBorderStyle)',
            [[b, 'Object', PDFNet.AnnotBorderStyle, 'AnnotBorderStyle']]
          );
          return PDFNet.sendWithPromise('AnnotBorderStyle.compare', {
            a: this.id,
            b: b.id,
          });
        };
        PDFNet.CaretAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('caretAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.CaretAnnot, id);
          });
        };
        PDFNet.CaretAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('caretAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.CaretAnnot, id);
          });
        };
        PDFNet.CaretAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('caretAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.CaretAnnot, id);
          });
        };
        PDFNet.CaretAnnot.prototype.getSymbol = function () {
          return PDFNet.sendWithPromise('CaretAnnot.getSymbol', {
            caret: this.id,
          });
        };
        PDFNet.CaretAnnot.prototype.setSymbol = function (symbol) {
          checkArguments(arguments.length, 1, 'setSymbol', '(string)', [
            [symbol, 'string'],
          ]);
          return PDFNet.sendWithPromise('CaretAnnot.setSymbol', {
            caret: this.id,
            symbol: symbol,
          });
        };
        PDFNet.LineAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('lineAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.LineAnnot, id);
          });
        };
        PDFNet.LineAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('lineAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.LineAnnot, id);
          });
        };
        PDFNet.LineAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('lineAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.LineAnnot, id);
          });
        };
        PDFNet.LineAnnot.prototype.getStartPoint = function () {
          return PDFNet.sendWithPromise('LineAnnot.getStartPoint', {
            line: this.id,
          });
        };
        PDFNet.LineAnnot.prototype.setStartPoint = function (sp) {
          checkArguments(
            arguments.length,
            1,
            'setStartPoint',
            '(PDFNet.Point)',
            [[sp, 'Structure', PDFNet.Point, 'Point']]
          );
          checkParamsYieldFunction('setStartPoint', [[sp, 0]]);
          return PDFNet.sendWithPromise('LineAnnot.setStartPoint', {
            line: this.id,
            sp: sp,
          });
        };
        PDFNet.LineAnnot.prototype.getEndPoint = function () {
          return PDFNet.sendWithPromise('LineAnnot.getEndPoint', {
            line: this.id,
          });
        };
        PDFNet.LineAnnot.prototype.setEndPoint = function (ep) {
          checkArguments(arguments.length, 1, 'setEndPoint', '(PDFNet.Point)', [
            [ep, 'Structure', PDFNet.Point, 'Point'],
          ]);
          checkParamsYieldFunction('setEndPoint', [[ep, 0]]);
          return PDFNet.sendWithPromise('LineAnnot.setEndPoint', {
            line: this.id,
            ep: ep,
          });
        };
        PDFNet.LineAnnot.prototype.getStartStyle = function () {
          return PDFNet.sendWithPromise('LineAnnot.getStartStyle', {
            line: this.id,
          });
        };
        PDFNet.LineAnnot.prototype.setStartStyle = function (ss) {
          checkArguments(arguments.length, 1, 'setStartStyle', '(number)', [
            [ss, 'number'],
          ]);
          return PDFNet.sendWithPromise('LineAnnot.setStartStyle', {
            line: this.id,
            ss: ss,
          });
        };
        PDFNet.LineAnnot.prototype.getEndStyle = function () {
          return PDFNet.sendWithPromise('LineAnnot.getEndStyle', {
            line: this.id,
          });
        };
        PDFNet.LineAnnot.prototype.setEndStyle = function (es) {
          checkArguments(arguments.length, 1, 'setEndStyle', '(number)', [
            [es, 'number'],
          ]);
          return PDFNet.sendWithPromise('LineAnnot.setEndStyle', {
            line: this.id,
            es: es,
          });
        };
        PDFNet.LineAnnot.prototype.getLeaderLineLength = function () {
          return PDFNet.sendWithPromise('LineAnnot.getLeaderLineLength', {
            line: this.id,
          });
        };
        PDFNet.LineAnnot.prototype.setLeaderLineLength = function (length) {
          checkArguments(
            arguments.length,
            1,
            'setLeaderLineLength',
            '(number)',
            [[length, 'number']]
          );
          return PDFNet.sendWithPromise('LineAnnot.setLeaderLineLength', {
            line: this.id,
            length: length,
          });
        };
        PDFNet.LineAnnot.prototype.getLeaderLineExtensionLength = function () {
          return PDFNet.sendWithPromise(
            'LineAnnot.getLeaderLineExtensionLength',
            { line: this.id }
          );
        };
        PDFNet.LineAnnot.prototype.setLeaderLineExtensionLength = function (
          length
        ) {
          checkArguments(
            arguments.length,
            1,
            'setLeaderLineExtensionLength',
            '(number)',
            [[length, 'number']]
          );
          return PDFNet.sendWithPromise(
            'LineAnnot.setLeaderLineExtensionLength',
            { line: this.id, length: length }
          );
        };
        PDFNet.LineAnnot.prototype.getShowCaption = function () {
          return PDFNet.sendWithPromise('LineAnnot.getShowCaption', {
            line: this.id,
          });
        };
        PDFNet.LineAnnot.prototype.setShowCaption = function (showCaption) {
          checkArguments(arguments.length, 1, 'setShowCaption', '(boolean)', [
            [showCaption, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('LineAnnot.setShowCaption', {
            line: this.id,
            showCaption: showCaption,
          });
        };
        PDFNet.LineAnnot.prototype.getIntentType = function () {
          return PDFNet.sendWithPromise('LineAnnot.getIntentType', {
            line: this.id,
          });
        };
        PDFNet.LineAnnot.prototype.setIntentType = function (it) {
          checkArguments(arguments.length, 1, 'setIntentType', '(number)', [
            [it, 'number'],
          ]);
          return PDFNet.sendWithPromise('LineAnnot.setIntentType', {
            line: this.id,
            it: it,
          });
        };
        PDFNet.LineAnnot.prototype.getCapPos = function () {
          return PDFNet.sendWithPromise('LineAnnot.getCapPos', {
            line: this.id,
          });
        };
        PDFNet.LineAnnot.prototype.setCapPos = function (it) {
          checkArguments(arguments.length, 1, 'setCapPos', '(number)', [
            [it, 'number'],
          ]);
          return PDFNet.sendWithPromise('LineAnnot.setCapPos', {
            line: this.id,
            it: it,
          });
        };
        PDFNet.LineAnnot.prototype.getLeaderLineOffset = function () {
          return PDFNet.sendWithPromise('LineAnnot.getLeaderLineOffset', {
            line: this.id,
          });
        };
        PDFNet.LineAnnot.prototype.setLeaderLineOffset = function (length) {
          checkArguments(
            arguments.length,
            1,
            'setLeaderLineOffset',
            '(number)',
            [[length, 'number']]
          );
          return PDFNet.sendWithPromise('LineAnnot.setLeaderLineOffset', {
            line: this.id,
            length: length,
          });
        };
        PDFNet.LineAnnot.prototype.getTextHOffset = function () {
          return PDFNet.sendWithPromise('LineAnnot.getTextHOffset', {
            line: this.id,
          });
        };
        PDFNet.LineAnnot.prototype.setTextHOffset = function (offset) {
          checkArguments(arguments.length, 1, 'setTextHOffset', '(number)', [
            [offset, 'number'],
          ]);
          return PDFNet.sendWithPromise('LineAnnot.setTextHOffset', {
            line: this.id,
            offset: offset,
          });
        };
        PDFNet.LineAnnot.prototype.getTextVOffset = function () {
          return PDFNet.sendWithPromise('LineAnnot.getTextVOffset', {
            line: this.id,
          });
        };
        PDFNet.LineAnnot.prototype.setTextVOffset = function (offset) {
          checkArguments(arguments.length, 1, 'setTextVOffset', '(number)', [
            [offset, 'number'],
          ]);
          return PDFNet.sendWithPromise('LineAnnot.setTextVOffset', {
            line: this.id,
            offset: offset,
          });
        };
        PDFNet.CircleAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('circleAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.CircleAnnot, id);
          });
        };
        PDFNet.CircleAnnot.createFromAnnot = function (circle) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[circle, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('circleAnnotCreateFromAnnot', {
            circle: circle.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.CircleAnnot, id);
          });
        };
        PDFNet.CircleAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('circleAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.CircleAnnot, id);
          });
        };
        PDFNet.CircleAnnot.prototype.getInteriorColor = function () {
          return PDFNet.sendWithPromise('CircleAnnot.getInteriorColor', {
            circle: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.CircleAnnot.prototype.getInteriorColorCompNum = function () {
          return PDFNet.sendWithPromise('CircleAnnot.getInteriorColorCompNum', {
            circle: this.id,
          });
        };
        PDFNet.CircleAnnot.prototype.setInteriorColorDefault = function (col) {
          checkArguments(
            arguments.length,
            1,
            'setInteriorColorDefault',
            '(PDFNet.ColorPt)',
            [[col, 'Object', PDFNet.ColorPt, 'ColorPt']]
          );
          return PDFNet.sendWithPromise('CircleAnnot.setInteriorColorDefault', {
            circle: this.id,
            col: col.id,
          });
        };
        PDFNet.CircleAnnot.prototype.setInteriorColor = function (
          col,
          numcomp
        ) {
          checkArguments(
            arguments.length,
            2,
            'setInteriorColor',
            '(PDFNet.ColorPt, number)',
            [
              [col, 'Object', PDFNet.ColorPt, 'ColorPt'],
              [numcomp, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('CircleAnnot.setInteriorColor', {
            circle: this.id,
            col: col.id,
            numcomp: numcomp,
          });
        };
        PDFNet.CircleAnnot.prototype.getContentRect = function () {
          return PDFNet.sendWithPromise('CircleAnnot.getContentRect', {
            circle: this.id,
          }).then(function (id) {
            return new PDFNet.Rect(id);
          });
        };
        PDFNet.CircleAnnot.prototype.setContentRect = function (cr) {
          checkArguments(
            arguments.length,
            1,
            'setContentRect',
            '(PDFNet.Rect)',
            [[cr, 'Structure', PDFNet.Rect, 'Rect']]
          );
          checkParamsYieldFunction('setContentRect', [[cr, 0]]);
          return PDFNet.sendWithPromise('CircleAnnot.setContentRect', {
            circle: this.id,
            cr: cr,
          });
        };
        PDFNet.CircleAnnot.prototype.getPadding = function () {
          return PDFNet.sendWithPromise('CircleAnnot.getPadding', {
            circle: this.id,
          }).then(function (id) {
            return new PDFNet.Rect(id);
          });
        };
        PDFNet.CircleAnnot.prototype.setPadding = function (cr) {
          checkArguments(arguments.length, 1, 'setPadding', '(PDFNet.Rect)', [
            [cr, 'Structure', PDFNet.Rect, 'Rect'],
          ]);
          checkParamsYieldFunction('setPadding', [[cr, 0]]);
          return PDFNet.sendWithPromise('CircleAnnot.setPadding', {
            circle: this.id,
            cr: cr,
          });
        };
        PDFNet.FileAttachmentAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('fileAttachmentAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.FileAttachmentAnnot, id);
          });
        };
        PDFNet.FileAttachmentAnnot.prototype['export'] = function (save_as) {
          'undefined' === typeof save_as && (save_as = '');
          checkArguments(arguments.length, 0, 'export', '(string)', [
            [save_as, 'string'],
          ]);
          return PDFNet.sendWithPromise('FileAttachmentAnnot.export', {
            fileatt: this.id,
            save_as: save_as,
          });
        };
        PDFNet.FileAttachmentAnnot.prototype.createFromAnnot = function () {
          return PDFNet.sendWithPromise('FileAttachmentAnnot.createFromAnnot', {
            fileatt: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Annot, id);
          });
        };
        PDFNet.FileAttachmentAnnot.createWithFileSpec = function (
          doc,
          pos,
          fs,
          icon_name
        ) {
          'undefined' === typeof icon_name &&
            (icon_name = PDFNet.FileAttachmentAnnot.Icon.e_PushPin);
          checkArguments(
            arguments.length,
            3,
            'createWithFileSpec',
            '(PDFNet.SDFDoc, PDFNet.Rect, PDFNet.FileSpec, number)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [fs, 'Object', PDFNet.FileSpec, 'FileSpec'],
              [icon_name, 'number'],
            ]
          );
          checkParamsYieldFunction('createWithFileSpec', [[pos, 1]]);
          return PDFNet.sendWithPromise(
            'fileAttachmentAnnotCreateWithFileSpec',
            { doc: doc.id, pos: pos, fs: fs.id, icon_name: icon_name }
          ).then(function (id) {
            return createPDFNetObj(PDFNet.FileAttachmentAnnot, id);
          });
        };
        PDFNet.FileAttachmentAnnot.createDefault = function (doc, pos, path) {
          checkArguments(
            arguments.length,
            3,
            'createDefault',
            '(PDFNet.SDFDoc, PDFNet.Rect, string)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [path, 'string'],
            ]
          );
          checkParamsYieldFunction('createDefault', [[pos, 1]]);
          return PDFNet.sendWithPromise('fileAttachmentAnnotCreateDefault', {
            doc: doc.id,
            pos: pos,
            path: path,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.FileAttachmentAnnot, id);
          });
        };
        PDFNet.FileAttachmentAnnot.prototype.getFileSpec = function () {
          return PDFNet.sendWithPromise('FileAttachmentAnnot.getFileSpec', {
            fileatt: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.FileSpec, id);
          });
        };
        PDFNet.FileAttachmentAnnot.prototype.setFileSpec = function (file) {
          checkArguments(
            arguments.length,
            1,
            'setFileSpec',
            '(PDFNet.FileSpec)',
            [[file, 'Object', PDFNet.FileSpec, 'FileSpec']]
          );
          return PDFNet.sendWithPromise('FileAttachmentAnnot.setFileSpec', {
            fileatt: this.id,
            file: file.id,
          });
        };
        PDFNet.FileAttachmentAnnot.prototype.getIcon = function () {
          return PDFNet.sendWithPromise('FileAttachmentAnnot.getIcon', {
            fileatt: this.id,
          });
        };
        PDFNet.FileAttachmentAnnot.prototype.setIcon = function (type) {
          'undefined' === typeof type &&
            (type = PDFNet.FileAttachmentAnnot.Icon.e_PushPin);
          checkArguments(arguments.length, 0, 'setIcon', '(number)', [
            [type, 'number'],
          ]);
          return PDFNet.sendWithPromise('FileAttachmentAnnot.setIcon', {
            fileatt: this.id,
            type: type,
          });
        };
        PDFNet.FileAttachmentAnnot.prototype.getIconName = function () {
          return PDFNet.sendWithPromise('FileAttachmentAnnot.getIconName', {
            fileatt: this.id,
          });
        };
        PDFNet.FileAttachmentAnnot.prototype.setIconName = function (iname) {
          checkArguments(arguments.length, 1, 'setIconName', '(string)', [
            [iname, 'string'],
          ]);
          return PDFNet.sendWithPromise('FileAttachmentAnnot.setIconName', {
            fileatt: this.id,
            iname: iname,
          });
        };
        PDFNet.FreeTextAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('freeTextAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.FreeTextAnnot, id);
          });
        };
        PDFNet.FreeTextAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('freeTextAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.FreeTextAnnot, id);
          });
        };
        PDFNet.FreeTextAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('freeTextAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.FreeTextAnnot, id);
          });
        };
        PDFNet.FreeTextAnnot.prototype.getDefaultAppearance = function () {
          return PDFNet.sendWithPromise('FreeTextAnnot.getDefaultAppearance', {
            ft: this.id,
          });
        };
        PDFNet.FreeTextAnnot.prototype.setDefaultAppearance = function (
          app_str
        ) {
          checkArguments(
            arguments.length,
            1,
            'setDefaultAppearance',
            '(string)',
            [[app_str, 'string']]
          );
          return PDFNet.sendWithPromise('FreeTextAnnot.setDefaultAppearance', {
            ft: this.id,
            app_str: app_str,
          });
        };
        PDFNet.FreeTextAnnot.prototype.getQuaddingFormat = function () {
          return PDFNet.sendWithPromise('FreeTextAnnot.getQuaddingFormat', {
            ft: this.id,
          });
        };
        PDFNet.FreeTextAnnot.prototype.setQuaddingFormat = function (format) {
          checkArguments(arguments.length, 1, 'setQuaddingFormat', '(number)', [
            [format, 'number'],
          ]);
          return PDFNet.sendWithPromise('FreeTextAnnot.setQuaddingFormat', {
            ft: this.id,
            format: format,
          });
        };
        PDFNet.FreeTextAnnot.prototype.getCalloutLinePoints = function () {
          return PDFNet.sendWithPromise('FreeTextAnnot.getCalloutLinePoints', {
            ft: this.id,
          });
        };
        PDFNet.FreeTextAnnot.prototype.setCalloutLinePoints = function (
          p1,
          p2,
          p3
        ) {
          checkArguments(
            arguments.length,
            3,
            'setCalloutLinePoints',
            '(PDFNet.Point, PDFNet.Point, PDFNet.Point)',
            [
              [p1, 'Structure', PDFNet.Point, 'Point'],
              [p2, 'Structure', PDFNet.Point, 'Point'],
              [p3, 'Structure', PDFNet.Point, 'Point'],
            ]
          );
          checkParamsYieldFunction('setCalloutLinePoints', [
            [p1, 0],
            [p2, 1],
            [p3, 2],
          ]);
          return PDFNet.sendWithPromise('FreeTextAnnot.setCalloutLinePoints', {
            ft: this.id,
            p1: p1,
            p2: p2,
            p3: p3,
          });
        };
        PDFNet.FreeTextAnnot.prototype.setCalloutLinePointsTwo = function (
          p1,
          p2
        ) {
          checkArguments(
            arguments.length,
            2,
            'setCalloutLinePointsTwo',
            '(PDFNet.Point, PDFNet.Point)',
            [
              [p1, 'Structure', PDFNet.Point, 'Point'],
              [p2, 'Structure', PDFNet.Point, 'Point'],
            ]
          );
          checkParamsYieldFunction('setCalloutLinePointsTwo', [
            [p1, 0],
            [p2, 1],
          ]);
          return PDFNet.sendWithPromise(
            'FreeTextAnnot.setCalloutLinePointsTwo',
            { ft: this.id, p1: p1, p2: p2 }
          );
        };
        PDFNet.FreeTextAnnot.prototype.getIntentName = function () {
          return PDFNet.sendWithPromise('FreeTextAnnot.getIntentName', {
            ft: this.id,
          });
        };
        PDFNet.FreeTextAnnot.prototype.setIntentName = function (mode) {
          'undefined' === typeof mode &&
            (mode = PDFNet.FreeTextAnnot.IntentName.e_FreeText);
          checkArguments(arguments.length, 0, 'setIntentName', '(number)', [
            [mode, 'number'],
          ]);
          return PDFNet.sendWithPromise('FreeTextAnnot.setIntentName', {
            ft: this.id,
            mode: mode,
          });
        };
        PDFNet.FreeTextAnnot.prototype.setIntentNameDefault = function () {
          return PDFNet.sendWithPromise('FreeTextAnnot.setIntentNameDefault', {
            ft: this.id,
          });
        };
        PDFNet.FreeTextAnnot.prototype.getEndingStyle = function () {
          return PDFNet.sendWithPromise('FreeTextAnnot.getEndingStyle', {
            ft: this.id,
          });
        };
        PDFNet.FreeTextAnnot.prototype.setEndingStyle = function (style) {
          checkArguments(arguments.length, 1, 'setEndingStyle', '(number)', [
            [style, 'number'],
          ]);
          return PDFNet.sendWithPromise('FreeTextAnnot.setEndingStyle', {
            ft: this.id,
            style: style,
          });
        };
        PDFNet.FreeTextAnnot.prototype.setEndingStyleName = function (est) {
          checkArguments(
            arguments.length,
            1,
            'setEndingStyleName',
            '(string)',
            [[est, 'string']]
          );
          return PDFNet.sendWithPromise('FreeTextAnnot.setEndingStyleName', {
            ft: this.id,
            est: est,
          });
        };
        PDFNet.FreeTextAnnot.prototype.setTextColor = function (
          color,
          col_comp
        ) {
          checkArguments(
            arguments.length,
            2,
            'setTextColor',
            '(PDFNet.ColorPt, number)',
            [
              [color, 'Object', PDFNet.ColorPt, 'ColorPt'],
              [col_comp, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('FreeTextAnnot.setTextColor', {
            ft: this.id,
            color: color.id,
            col_comp: col_comp,
          });
        };
        PDFNet.FreeTextAnnot.prototype.getTextColor = function () {
          return PDFNet.sendWithPromise('FreeTextAnnot.getTextColor', {
            ft: this.id,
          }).then(function (id) {
            id.color = createDestroyableObj(PDFNet.ColorPt, id.color);
            return id;
          });
        };
        PDFNet.FreeTextAnnot.prototype.setLineColor = function (
          color,
          col_comp
        ) {
          checkArguments(
            arguments.length,
            2,
            'setLineColor',
            '(PDFNet.ColorPt, number)',
            [
              [color, 'Object', PDFNet.ColorPt, 'ColorPt'],
              [col_comp, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('FreeTextAnnot.setLineColor', {
            ft: this.id,
            color: color.id,
            col_comp: col_comp,
          });
        };
        PDFNet.FreeTextAnnot.prototype.getLineColor = function () {
          return PDFNet.sendWithPromise('FreeTextAnnot.getLineColor', {
            ft: this.id,
          }).then(function (id) {
            id.color = createDestroyableObj(PDFNet.ColorPt, id.color);
            return id;
          });
        };
        PDFNet.FreeTextAnnot.prototype.setFontName = function (fontName) {
          checkArguments(arguments.length, 1, 'setFontName', '(string)', [
            [fontName, 'string'],
          ]);
          return PDFNet.sendWithPromise('FreeTextAnnot.setFontName', {
            ft: this.id,
            fontName: fontName,
          });
        };
        PDFNet.FreeTextAnnot.prototype.setFontSize = function (font_size) {
          checkArguments(arguments.length, 1, 'setFontSize', '(number)', [
            [font_size, 'number'],
          ]);
          return PDFNet.sendWithPromise('FreeTextAnnot.setFontSize', {
            ft: this.id,
            font_size: font_size,
          });
        };
        PDFNet.FreeTextAnnot.prototype.getFontSize = function () {
          return PDFNet.sendWithPromise('FreeTextAnnot.getFontSize', {
            ft: this.id,
          });
        };
        PDFNet.HighlightAnnot.createFromObj = function (d) {
          checkArguments(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('highlightAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.HighlightAnnot, id);
          });
        };
        PDFNet.HighlightAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('highlightAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.HighlightAnnot, id);
          });
        };
        PDFNet.HighlightAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('highlightAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.HighlightAnnot, id);
          });
        };
        PDFNet.InkAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('inkAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.InkAnnot, id);
          });
        };
        PDFNet.InkAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('inkAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.InkAnnot, id);
          });
        };
        PDFNet.InkAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('inkAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.InkAnnot, id);
          });
        };
        PDFNet.InkAnnot.prototype.getPathCount = function () {
          return PDFNet.sendWithPromise('InkAnnot.getPathCount', {
            ink: this.id,
          });
        };
        PDFNet.InkAnnot.prototype.getPointCount = function (pathindex) {
          checkArguments(arguments.length, 1, 'getPointCount', '(number)', [
            [pathindex, 'number'],
          ]);
          return PDFNet.sendWithPromise('InkAnnot.getPointCount', {
            ink: this.id,
            pathindex: pathindex,
          });
        };
        PDFNet.InkAnnot.prototype.getPoint = function (pathindex, pointindex) {
          checkArguments(arguments.length, 2, 'getPoint', '(number, number)', [
            [pathindex, 'number'],
            [pointindex, 'number'],
          ]);
          return PDFNet.sendWithPromise('InkAnnot.getPoint', {
            ink: this.id,
            pathindex: pathindex,
            pointindex: pointindex,
          });
        };
        PDFNet.InkAnnot.prototype.setPoint = function (
          pathindex,
          pointindex,
          pt
        ) {
          checkArguments(
            arguments.length,
            3,
            'setPoint',
            '(number, number, PDFNet.Point)',
            [
              [pathindex, 'number'],
              [pointindex, 'number'],
              [pt, 'Structure', PDFNet.Point, 'Point'],
            ]
          );
          checkParamsYieldFunction('setPoint', [[pt, 2]]);
          return PDFNet.sendWithPromise('InkAnnot.setPoint', {
            ink: this.id,
            pathindex: pathindex,
            pointindex: pointindex,
            pt: pt,
          });
        };
        PDFNet.InkAnnot.prototype.erase = function (pt1, pt2, width) {
          checkArguments(
            arguments.length,
            3,
            'erase',
            '(PDFNet.Point, PDFNet.Point, number)',
            [
              [pt1, 'Structure', PDFNet.Point, 'Point'],
              [pt2, 'Structure', PDFNet.Point, 'Point'],
              [width, 'number'],
            ]
          );
          checkParamsYieldFunction('erase', [
            [pt1, 0],
            [pt2, 1],
          ]);
          return PDFNet.sendWithPromise('InkAnnot.erase', {
            ink: this.id,
            pt1: pt1,
            pt2: pt2,
            width: width,
          });
        };
        PDFNet.InkAnnot.prototype.getHighlightIntent = function () {
          return PDFNet.sendWithPromise('InkAnnot.getHighlightIntent', {
            ink: this.id,
          });
        };
        PDFNet.InkAnnot.prototype.setHighlightIntent = function (highlight) {
          checkArguments(
            arguments.length,
            1,
            'setHighlightIntent',
            '(boolean)',
            [[highlight, 'boolean']]
          );
          return PDFNet.sendWithPromise('InkAnnot.setHighlightIntent', {
            ink: this.id,
            highlight: highlight,
          });
        };
        PDFNet.LinkAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('linkAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.LinkAnnot, id);
          });
        };
        PDFNet.LinkAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('linkAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.LinkAnnot, id);
          });
        };
        PDFNet.LinkAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('linkAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.LinkAnnot, id);
          });
        };
        PDFNet.LinkAnnot.prototype.removeAction = function () {
          return PDFNet.sendWithPromise('LinkAnnot.removeAction', {
            link: this.id,
          });
        };
        PDFNet.LinkAnnot.prototype.getAction = function () {
          return PDFNet.sendWithPromise('LinkAnnot.getAction', {
            link: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.LinkAnnot.prototype.setAction = function (action) {
          checkArguments(arguments.length, 1, 'setAction', '(PDFNet.Action)', [
            [action, 'Object', PDFNet.Action, 'Action'],
          ]);
          return PDFNet.sendWithPromise('LinkAnnot.setAction', {
            link: this.id,
            action: action.id,
          });
        };
        PDFNet.LinkAnnot.prototype.getHighlightingMode = function () {
          return PDFNet.sendWithPromise('LinkAnnot.getHighlightingMode', {
            link: this.id,
          });
        };
        PDFNet.LinkAnnot.prototype.setHighlightingMode = function (value) {
          checkArguments(
            arguments.length,
            1,
            'setHighlightingMode',
            '(number)',
            [[value, 'number']]
          );
          return PDFNet.sendWithPromise('LinkAnnot.setHighlightingMode', {
            link: this.id,
            value: value,
          });
        };
        PDFNet.LinkAnnot.prototype.getQuadPointCount = function () {
          return PDFNet.sendWithPromise('LinkAnnot.getQuadPointCount', {
            link: this.id,
          });
        };
        PDFNet.LinkAnnot.prototype.getQuadPoint = function (idx) {
          checkArguments(arguments.length, 1, 'getQuadPoint', '(number)', [
            [idx, 'number'],
          ]);
          return PDFNet.sendWithPromise('LinkAnnot.getQuadPoint', {
            link: this.id,
            idx: idx,
          });
        };
        PDFNet.LinkAnnot.prototype.setQuadPoint = function (idx, qp) {
          checkArguments(
            arguments.length,
            2,
            'setQuadPoint',
            '(number, PDFNet.QuadPoint)',
            [
              [idx, 'number'],
              [qp, 'Structure', PDFNet.QuadPoint, 'QuadPoint'],
            ]
          );
          checkParamsYieldFunction('setQuadPoint', [[qp, 1]]);
          return PDFNet.sendWithPromise('LinkAnnot.setQuadPoint', {
            link: this.id,
            idx: idx,
            qp: qp,
          });
        };
        PDFNet.getNormalizedUrl = function (url) {
          checkArguments(arguments.length, 1, 'getNormalizedUrl', '(string)', [
            [url, 'string'],
          ]);
          return PDFNet.sendWithPromise('getNormalizedUrl', { url: url });
        };
        PDFNet.MarkupAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('markupAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.MarkupAnnot, id);
          });
        };
        PDFNet.MarkupAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('markupAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.MarkupAnnot, id);
          });
        };
        PDFNet.MarkupAnnot.prototype.getTitle = function () {
          return PDFNet.sendWithPromise('MarkupAnnot.getTitle', {
            markup: this.id,
          });
        };
        PDFNet.MarkupAnnot.prototype.setTitle = function (title) {
          checkArguments(arguments.length, 1, 'setTitle', '(string)', [
            [title, 'string'],
          ]);
          return PDFNet.sendWithPromise('MarkupAnnot.setTitle', {
            markup: this.id,
            title: title,
          });
        };
        PDFNet.MarkupAnnot.prototype.setTitleUString = function (title) {
          checkArguments(arguments.length, 1, 'setTitleUString', '(string)', [
            [title, 'string'],
          ]);
          return PDFNet.sendWithPromise('MarkupAnnot.setTitleUString', {
            markup: this.id,
            title: title,
          });
        };
        PDFNet.MarkupAnnot.prototype.getPopup = function () {
          return PDFNet.sendWithPromise('MarkupAnnot.getPopup', {
            markup: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Annot, id);
          });
        };
        PDFNet.MarkupAnnot.prototype.setPopup = function (ppup) {
          checkArguments(arguments.length, 1, 'setPopup', '(PDFNet.Annot)', [
            [ppup, 'Object', PDFNet.Annot, 'Annot'],
          ]);
          return PDFNet.sendWithPromise('MarkupAnnot.setPopup', {
            markup: this.id,
            ppup: ppup.id,
          });
        };
        PDFNet.MarkupAnnot.prototype.getOpacity = function () {
          return PDFNet.sendWithPromise('MarkupAnnot.getOpacity', {
            markup: this.id,
          });
        };
        PDFNet.MarkupAnnot.prototype.setOpacity = function (op) {
          checkArguments(arguments.length, 1, 'setOpacity', '(number)', [
            [op, 'number'],
          ]);
          return PDFNet.sendWithPromise('MarkupAnnot.setOpacity', {
            markup: this.id,
            op: op,
          });
        };
        PDFNet.MarkupAnnot.prototype.getSubject = function () {
          return PDFNet.sendWithPromise('MarkupAnnot.getSubject', {
            markup: this.id,
          });
        };
        PDFNet.MarkupAnnot.prototype.setSubject = function (contents) {
          checkArguments(arguments.length, 1, 'setSubject', '(string)', [
            [contents, 'string'],
          ]);
          return PDFNet.sendWithPromise('MarkupAnnot.setSubject', {
            markup: this.id,
            contents: contents,
          });
        };
        PDFNet.MarkupAnnot.prototype.getCreationDates = function () {
          return PDFNet.sendWithPromise('MarkupAnnot.getCreationDates', {
            markup: this.id,
          }).then(function (id) {
            return new PDFNet.Date(id);
          });
        };
        PDFNet.MarkupAnnot.prototype.getBorderEffect = function () {
          return PDFNet.sendWithPromise('MarkupAnnot.getBorderEffect', {
            markup: this.id,
          });
        };
        PDFNet.MarkupAnnot.prototype.setBorderEffect = function (effect) {
          'undefined' === typeof effect &&
            (effect = PDFNet.MarkupAnnot.BorderEffect.e_None);
          checkArguments(arguments.length, 0, 'setBorderEffect', '(number)', [
            [effect, 'number'],
          ]);
          return PDFNet.sendWithPromise('MarkupAnnot.setBorderEffect', {
            markup: this.id,
            effect: effect,
          });
        };
        PDFNet.MarkupAnnot.prototype.getBorderEffectIntensity = function () {
          return PDFNet.sendWithPromise(
            'MarkupAnnot.getBorderEffectIntensity',
            { markup: this.id }
          );
        };
        PDFNet.MarkupAnnot.prototype.setBorderEffectIntensity = function (
          intensity
        ) {
          'undefined' === typeof intensity && (intensity = 0);
          checkArguments(
            arguments.length,
            0,
            'setBorderEffectIntensity',
            '(number)',
            [[intensity, 'number']]
          );
          return PDFNet.sendWithPromise(
            'MarkupAnnot.setBorderEffectIntensity',
            { markup: this.id, intensity: intensity }
          );
        };
        PDFNet.MarkupAnnot.prototype.setCreationDates = function (dt) {
          checkArguments(
            arguments.length,
            1,
            'setCreationDates',
            '(PDFNet.Date)',
            [[dt, 'Structure', PDFNet.Date, 'Date']]
          );
          checkParamsYieldFunction('setCreationDates', [[dt, 0]]);
          return PDFNet.sendWithPromise('MarkupAnnot.setCreationDates', {
            markup: this.id,
            dt: dt,
          });
        };
        PDFNet.MarkupAnnot.prototype.getInteriorColor = function () {
          return PDFNet.sendWithPromise('MarkupAnnot.getInteriorColor', {
            markup: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.MarkupAnnot.prototype.getInteriorColorCompNum = function () {
          return PDFNet.sendWithPromise('MarkupAnnot.getInteriorColorCompNum', {
            markup: this.id,
          });
        };
        PDFNet.MarkupAnnot.prototype.setInteriorColorRGB = function (col) {
          checkArguments(
            arguments.length,
            1,
            'setInteriorColorRGB',
            '(PDFNet.ColorPt)',
            [[col, 'Object', PDFNet.ColorPt, 'ColorPt']]
          );
          return PDFNet.sendWithPromise('MarkupAnnot.setInteriorColorRGB', {
            markup: this.id,
            col: col.id,
          });
        };
        PDFNet.MarkupAnnot.prototype.setInteriorColor = function (c, CompNum) {
          checkArguments(
            arguments.length,
            2,
            'setInteriorColor',
            '(PDFNet.ColorPt, number)',
            [
              [c, 'Object', PDFNet.ColorPt, 'ColorPt'],
              [CompNum, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('MarkupAnnot.setInteriorColor', {
            markup: this.id,
            c: c.id,
            CompNum: CompNum,
          });
        };
        PDFNet.MarkupAnnot.prototype.getContentRect = function () {
          return PDFNet.sendWithPromise('MarkupAnnot.getContentRect', {
            markup: this.id,
          }).then(function (id) {
            return new PDFNet.Rect(id);
          });
        };
        PDFNet.MarkupAnnot.prototype.setContentRect = function (cr) {
          checkArguments(
            arguments.length,
            1,
            'setContentRect',
            '(PDFNet.Rect)',
            [[cr, 'Structure', PDFNet.Rect, 'Rect']]
          );
          checkParamsYieldFunction('setContentRect', [[cr, 0]]);
          return PDFNet.sendWithPromise('MarkupAnnot.setContentRect', {
            markup: this.id,
            cr: cr,
          });
        };
        PDFNet.MarkupAnnot.prototype.getPadding = function () {
          return PDFNet.sendWithPromise('MarkupAnnot.getPadding', {
            markup: this.id,
          }).then(function (id) {
            return new PDFNet.Rect(id);
          });
        };
        PDFNet.MarkupAnnot.prototype.setPadding = function (rd) {
          checkArguments(arguments.length, 1, 'setPadding', '(PDFNet.Rect)', [
            [rd, 'Structure', PDFNet.Rect, 'Rect'],
          ]);
          checkParamsYieldFunction('setPadding', [[rd, 0]]);
          return PDFNet.sendWithPromise('MarkupAnnot.setPadding', {
            markup: this.id,
            rd: rd,
          });
        };
        PDFNet.MarkupAnnot.prototype.rotateAppearance = function (angle) {
          checkArguments(arguments.length, 1, 'rotateAppearance', '(number)', [
            [angle, 'number'],
          ]);
          return PDFNet.sendWithPromise('MarkupAnnot.rotateAppearance', {
            markup: this.id,
            angle: angle,
          });
        };
        PDFNet.MovieAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('movieAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.MovieAnnot, id);
          });
        };
        PDFNet.MovieAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('movieAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.MovieAnnot, id);
          });
        };
        PDFNet.MovieAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('movieAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.MovieAnnot, id);
          });
        };
        PDFNet.MovieAnnot.prototype.getTitle = function () {
          return PDFNet.sendWithPromise('MovieAnnot.getTitle', {
            movie: this.id,
          });
        };
        PDFNet.MovieAnnot.prototype.setTitle = function (title) {
          checkArguments(arguments.length, 1, 'setTitle', '(string)', [
            [title, 'string'],
          ]);
          return PDFNet.sendWithPromise('MovieAnnot.setTitle', {
            movie: this.id,
            title: title,
          });
        };
        PDFNet.MovieAnnot.prototype.isToBePlayed = function () {
          return PDFNet.sendWithPromise('MovieAnnot.isToBePlayed', {
            movie: this.id,
          });
        };
        PDFNet.MovieAnnot.prototype.setToBePlayed = function (isplay) {
          'undefined' === typeof isplay && (isplay = !0);
          checkArguments(arguments.length, 0, 'setToBePlayed', '(boolean)', [
            [isplay, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('MovieAnnot.setToBePlayed', {
            movie: this.id,
            isplay: isplay,
          });
        };
        PDFNet.PolyLineAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('polyLineAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PolyLineAnnot, id);
          });
        };
        PDFNet.PolyLineAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('polyLineAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PolyLineAnnot, id);
          });
        };
        PDFNet.PolyLineAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('polyLineAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PolyLineAnnot, id);
          });
        };
        PDFNet.PolyLineAnnot.prototype.getVertexCount = function () {
          return PDFNet.sendWithPromise('PolyLineAnnot.getVertexCount', {
            polyline: this.id,
          });
        };
        PDFNet.PolyLineAnnot.prototype.getVertex = function (idx) {
          checkArguments(arguments.length, 1, 'getVertex', '(number)', [
            [idx, 'number'],
          ]);
          return PDFNet.sendWithPromise('PolyLineAnnot.getVertex', {
            polyline: this.id,
            idx: idx,
          });
        };
        PDFNet.PolyLineAnnot.prototype.setVertex = function (idx, pt) {
          checkArguments(
            arguments.length,
            2,
            'setVertex',
            '(number, PDFNet.Point)',
            [
              [idx, 'number'],
              [pt, 'Structure', PDFNet.Point, 'Point'],
            ]
          );
          checkParamsYieldFunction('setVertex', [[pt, 1]]);
          return PDFNet.sendWithPromise('PolyLineAnnot.setVertex', {
            polyline: this.id,
            idx: idx,
            pt: pt,
          });
        };
        PDFNet.PolyLineAnnot.prototype.getStartStyle = function () {
          return PDFNet.sendWithPromise('PolyLineAnnot.getStartStyle', {
            polyline: this.id,
          });
        };
        PDFNet.PolyLineAnnot.prototype.setStartStyle = function (style) {
          checkArguments(arguments.length, 1, 'setStartStyle', '(number)', [
            [style, 'number'],
          ]);
          return PDFNet.sendWithPromise('PolyLineAnnot.setStartStyle', {
            polyline: this.id,
            style: style,
          });
        };
        PDFNet.PolyLineAnnot.prototype.getEndStyle = function () {
          return PDFNet.sendWithPromise('PolyLineAnnot.getEndStyle', {
            polyline: this.id,
          });
        };
        PDFNet.PolyLineAnnot.prototype.setEndStyle = function (style) {
          checkArguments(arguments.length, 1, 'setEndStyle', '(number)', [
            [style, 'number'],
          ]);
          return PDFNet.sendWithPromise('PolyLineAnnot.setEndStyle', {
            polyline: this.id,
            style: style,
          });
        };
        PDFNet.PolyLineAnnot.prototype.getIntentName = function () {
          return PDFNet.sendWithPromise('PolyLineAnnot.getIntentName', {
            polyline: this.id,
          });
        };
        PDFNet.PolyLineAnnot.prototype.setIntentName = function (mode) {
          checkArguments(arguments.length, 1, 'setIntentName', '(number)', [
            [mode, 'number'],
          ]);
          return PDFNet.sendWithPromise('PolyLineAnnot.setIntentName', {
            polyline: this.id,
            mode: mode,
          });
        };
        PDFNet.PolygonAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('polygonAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PolygonAnnot, id);
          });
        };
        PDFNet.PolygonAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('polygonAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PolygonAnnot, id);
          });
        };
        PDFNet.PolygonAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('polygonAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PolygonAnnot, id);
          });
        };
        PDFNet.PopupAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('popupAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PopupAnnot, id);
          });
        };
        PDFNet.PopupAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('popupAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PopupAnnot, id);
          });
        };
        PDFNet.PopupAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('popupAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PopupAnnot, id);
          });
        };
        PDFNet.PopupAnnot.prototype.getParent = function () {
          return PDFNet.sendWithPromise('PopupAnnot.getParent', {
            popup: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Annot, id);
          });
        };
        PDFNet.PopupAnnot.prototype.setParent = function (parent) {
          checkArguments(arguments.length, 1, 'setParent', '(PDFNet.Annot)', [
            [parent, 'Object', PDFNet.Annot, 'Annot'],
          ]);
          return PDFNet.sendWithPromise('PopupAnnot.setParent', {
            popup: this.id,
            parent: parent.id,
          });
        };
        PDFNet.PopupAnnot.prototype.isOpen = function () {
          return PDFNet.sendWithPromise('PopupAnnot.isOpen', {
            popup: this.id,
          });
        };
        PDFNet.PopupAnnot.prototype.setOpen = function (isopen) {
          checkArguments(arguments.length, 1, 'setOpen', '(boolean)', [
            [isopen, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('PopupAnnot.setOpen', {
            popup: this.id,
            isopen: isopen,
          });
        };
        PDFNet.RedactionAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('redactionAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.RedactionAnnot, id);
          });
        };
        PDFNet.RedactionAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('redactionAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.RedactionAnnot, id);
          });
        };
        PDFNet.RedactionAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('redactionAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.RedactionAnnot, id);
          });
        };
        PDFNet.RedactionAnnot.prototype.getQuadPointCount = function () {
          return PDFNet.sendWithPromise('RedactionAnnot.getQuadPointCount', {
            redaction: this.id,
          });
        };
        PDFNet.RedactionAnnot.prototype.getQuadPoint = function (idx) {
          checkArguments(arguments.length, 1, 'getQuadPoint', '(number)', [
            [idx, 'number'],
          ]);
          return PDFNet.sendWithPromise('RedactionAnnot.getQuadPoint', {
            redaction: this.id,
            idx: idx,
          });
        };
        PDFNet.RedactionAnnot.prototype.setQuadPoint = function (idx, qp) {
          checkArguments(
            arguments.length,
            2,
            'setQuadPoint',
            '(number, PDFNet.QuadPoint)',
            [
              [idx, 'number'],
              [qp, 'Structure', PDFNet.QuadPoint, 'QuadPoint'],
            ]
          );
          checkParamsYieldFunction('setQuadPoint', [[qp, 1]]);
          return PDFNet.sendWithPromise('RedactionAnnot.setQuadPoint', {
            redaction: this.id,
            idx: idx,
            qp: qp,
          });
        };
        PDFNet.RedactionAnnot.prototype.setAppFormXO = function (formxo) {
          checkArguments(arguments.length, 1, 'setAppFormXO', '(PDFNet.Obj)', [
            [formxo, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('RedactionAnnot.setAppFormXO', {
            redaction: this.id,
            formxo: formxo.id,
          });
        };
        PDFNet.RedactionAnnot.prototype.getOverlayText = function () {
          return PDFNet.sendWithPromise('RedactionAnnot.getOverlayText', {
            redaction: this.id,
          });
        };
        PDFNet.RedactionAnnot.prototype.setOverlayText = function (title) {
          checkArguments(arguments.length, 1, 'setOverlayText', '(string)', [
            [title, 'string'],
          ]);
          return PDFNet.sendWithPromise('RedactionAnnot.setOverlayText', {
            redaction: this.id,
            title: title,
          });
        };
        PDFNet.RedactionAnnot.prototype.getUseRepeat = function () {
          return PDFNet.sendWithPromise('RedactionAnnot.getUseRepeat', {
            redaction: this.id,
          });
        };
        PDFNet.RedactionAnnot.prototype.setUseRepeat = function (userepeat) {
          'undefined' === typeof userepeat && (userepeat = !1);
          checkArguments(arguments.length, 0, 'setUseRepeat', '(boolean)', [
            [userepeat, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('RedactionAnnot.setUseRepeat', {
            redaction: this.id,
            userepeat: userepeat,
          });
        };
        PDFNet.RedactionAnnot.prototype.getOverlayTextAppearance = function () {
          return PDFNet.sendWithPromise(
            'RedactionAnnot.getOverlayTextAppearance',
            { redaction: this.id }
          );
        };
        PDFNet.RedactionAnnot.prototype.setOverlayTextAppearance = function (
          app
        ) {
          checkArguments(
            arguments.length,
            1,
            'setOverlayTextAppearance',
            '(string)',
            [[app, 'string']]
          );
          return PDFNet.sendWithPromise(
            'RedactionAnnot.setOverlayTextAppearance',
            { redaction: this.id, app: app }
          );
        };
        PDFNet.RedactionAnnot.prototype.getQuadForm = function () {
          return PDFNet.sendWithPromise('RedactionAnnot.getQuadForm', {
            redaction: this.id,
          });
        };
        PDFNet.RedactionAnnot.prototype.setQuadForm = function (form) {
          'undefined' === typeof form &&
            (form = PDFNet.RedactionAnnot.QuadForm.e_LeftJustified);
          checkArguments(arguments.length, 0, 'setQuadForm', '(number)', [
            [form, 'number'],
          ]);
          return PDFNet.sendWithPromise('RedactionAnnot.setQuadForm', {
            redaction: this.id,
            form: form,
          });
        };
        PDFNet.RedactionAnnot.prototype.getAppFormXO = function () {
          return PDFNet.sendWithPromise('RedactionAnnot.getAppFormXO', {
            redaction: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.RubberStampAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('rubberStampAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.RubberStampAnnot, id);
          });
        };
        PDFNet.RubberStampAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('rubberStampAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.RubberStampAnnot, id);
          });
        };
        PDFNet.RubberStampAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('rubberStampAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.RubberStampAnnot, id);
          });
        };
        PDFNet.RubberStampAnnot.createCustom = function (
          doc,
          pos,
          form_xobject
        ) {
          checkArguments(
            arguments.length,
            3,
            'createCustom',
            '(PDFNet.SDFDoc, PDFNet.Rect, PDFNet.Obj)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [form_xobject, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          checkParamsYieldFunction('createCustom', [[pos, 1]]);
          return PDFNet.sendWithPromise('rubberStampAnnotCreateCustom', {
            doc: doc.id,
            pos: pos,
            form_xobject: form_xobject.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.RubberStampAnnot, id);
          });
        };
        PDFNet.RubberStampAnnot.prototype.getIcon = function () {
          return PDFNet.sendWithPromise('RubberStampAnnot.getIcon', {
            stamp: this.id,
          });
        };
        PDFNet.RubberStampAnnot.prototype.setIcon = function (type) {
          'undefined' === typeof type &&
            (type = PDFNet.RubberStampAnnot.Icon.e_Draft);
          checkArguments(arguments.length, 0, 'setIcon', '(number)', [
            [type, 'number'],
          ]);
          return PDFNet.sendWithPromise('RubberStampAnnot.setIcon', {
            stamp: this.id,
            type: type,
          });
        };
        PDFNet.RubberStampAnnot.prototype.setIconDefault = function () {
          return PDFNet.sendWithPromise('RubberStampAnnot.setIconDefault', {
            stamp: this.id,
          });
        };
        PDFNet.RubberStampAnnot.prototype.getIconName = function () {
          return PDFNet.sendWithPromise('RubberStampAnnot.getIconName', {
            stamp: this.id,
          });
        };
        PDFNet.RubberStampAnnot.prototype.setIconName = function (iconstring) {
          checkArguments(arguments.length, 1, 'setIconName', '(string)', [
            [iconstring, 'string'],
          ]);
          return PDFNet.sendWithPromise('RubberStampAnnot.setIconName', {
            stamp: this.id,
            iconstring: iconstring,
          });
        };
        PDFNet.rubberStampAnnotSetOpacity = function (stamp, opacity) {
          checkArguments(
            arguments.length,
            2,
            'rubberStampAnnotSetOpacity',
            '(PDFNet.Annot, number)',
            [
              [stamp, 'Object', PDFNet.Annot, 'Annot'],
              [opacity, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('rubberStampAnnotSetOpacity', {
            stamp: stamp.id,
            opacity: opacity,
          });
        };
        PDFNet.ScreenAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('screenAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ScreenAnnot, id);
          });
        };
        PDFNet.ScreenAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('screenAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ScreenAnnot, id);
          });
        };
        PDFNet.ScreenAnnot.prototype.getTitle = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getTitle', { s: this.id });
        };
        PDFNet.ScreenAnnot.prototype.setTitle = function (title) {
          checkArguments(arguments.length, 1, 'setTitle', '(string)', [
            [title, 'string'],
          ]);
          return PDFNet.sendWithPromise('ScreenAnnot.setTitle', {
            s: this.id,
            title: title,
          });
        };
        PDFNet.ScreenAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('screenAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ScreenAnnot, id);
          });
        };
        PDFNet.ScreenAnnot.prototype.getAction = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getAction', {
            s: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.ScreenAnnot.prototype.setAction = function (action) {
          checkArguments(arguments.length, 1, 'setAction', '(PDFNet.Action)', [
            [action, 'Object', PDFNet.Action, 'Action'],
          ]);
          return PDFNet.sendWithPromise('ScreenAnnot.setAction', {
            s: this.id,
            action: action.id,
          });
        };
        PDFNet.ScreenAnnot.prototype.getBorderColor = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getBorderColor', {
            s: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.ScreenAnnot.prototype.setBorderColor = function (col, numcomp) {
          checkArguments(
            arguments.length,
            2,
            'setBorderColor',
            '(PDFNet.ColorPt, number)',
            [
              [col, 'Object', PDFNet.ColorPt, 'ColorPt'],
              [numcomp, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('ScreenAnnot.setBorderColor', {
            s: this.id,
            col: col.id,
            numcomp: numcomp,
          });
        };
        PDFNet.ScreenAnnot.prototype.getBorderColorCompNum = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getBorderColorCompNum', {
            s: this.id,
          });
        };
        PDFNet.ScreenAnnot.prototype.getBackgroundColorCompNum = function () {
          return PDFNet.sendWithPromise(
            'ScreenAnnot.getBackgroundColorCompNum',
            { s: this.id }
          );
        };
        PDFNet.ScreenAnnot.prototype.getBackgroundColor = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getBackgroundColor', {
            s: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.ScreenAnnot.prototype.setBackgroundColor = function (
          col,
          numcomp
        ) {
          checkArguments(
            arguments.length,
            2,
            'setBackgroundColor',
            '(PDFNet.ColorPt, number)',
            [
              [col, 'Object', PDFNet.ColorPt, 'ColorPt'],
              [numcomp, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('ScreenAnnot.setBackgroundColor', {
            s: this.id,
            col: col.id,
            numcomp: numcomp,
          });
        };
        PDFNet.ScreenAnnot.prototype.getStaticCaptionText = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getStaticCaptionText', {
            s: this.id,
          });
        };
        PDFNet.ScreenAnnot.prototype.setStaticCaptionText = function (
          contents
        ) {
          checkArguments(
            arguments.length,
            1,
            'setStaticCaptionText',
            '(string)',
            [[contents, 'string']]
          );
          return PDFNet.sendWithPromise('ScreenAnnot.setStaticCaptionText', {
            s: this.id,
            contents: contents,
          });
        };
        PDFNet.ScreenAnnot.prototype.getRolloverCaptionText = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getRolloverCaptionText', {
            s: this.id,
          });
        };
        PDFNet.ScreenAnnot.prototype.setRolloverCaptionText = function (
          contents
        ) {
          checkArguments(
            arguments.length,
            1,
            'setRolloverCaptionText',
            '(string)',
            [[contents, 'string']]
          );
          return PDFNet.sendWithPromise('ScreenAnnot.setRolloverCaptionText', {
            s: this.id,
            contents: contents,
          });
        };
        PDFNet.ScreenAnnot.prototype.getMouseDownCaptionText = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getMouseDownCaptionText', {
            s: this.id,
          });
        };
        PDFNet.ScreenAnnot.prototype.setMouseDownCaptionText = function (
          contents
        ) {
          checkArguments(
            arguments.length,
            1,
            'setMouseDownCaptionText',
            '(string)',
            [[contents, 'string']]
          );
          return PDFNet.sendWithPromise('ScreenAnnot.setMouseDownCaptionText', {
            s: this.id,
            contents: contents,
          });
        };
        PDFNet.ScreenAnnot.prototype.getStaticIcon = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getStaticIcon', {
            s: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ScreenAnnot.prototype.setStaticIcon = function (icon) {
          checkArguments(arguments.length, 1, 'setStaticIcon', '(PDFNet.Obj)', [
            [icon, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('ScreenAnnot.setStaticIcon', {
            s: this.id,
            icon: icon.id,
          });
        };
        PDFNet.ScreenAnnot.prototype.getRolloverIcon = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getRolloverIcon', {
            s: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ScreenAnnot.prototype.setRolloverIcon = function (icon) {
          checkArguments(
            arguments.length,
            1,
            'setRolloverIcon',
            '(PDFNet.Obj)',
            [[icon, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('ScreenAnnot.setRolloverIcon', {
            s: this.id,
            icon: icon.id,
          });
        };
        PDFNet.ScreenAnnot.prototype.getMouseDownIcon = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getMouseDownIcon', {
            s: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ScreenAnnot.prototype.setMouseDownIcon = function (icon) {
          checkArguments(
            arguments.length,
            1,
            'setMouseDownIcon',
            '(PDFNet.Obj)',
            [[icon, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('ScreenAnnot.setMouseDownIcon', {
            s: this.id,
            icon: icon.id,
          });
        };
        PDFNet.ScreenAnnot.prototype.getScaleType = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getScaleType', {
            s: this.id,
          });
        };
        PDFNet.ScreenAnnot.prototype.setScaleType = function (st) {
          checkArguments(arguments.length, 1, 'setScaleType', '(number)', [
            [st, 'number'],
          ]);
          return PDFNet.sendWithPromise('ScreenAnnot.setScaleType', {
            s: this.id,
            st: st,
          });
        };
        PDFNet.ScreenAnnot.prototype.getIconCaptionRelation = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getIconCaptionRelation', {
            s: this.id,
          });
        };
        PDFNet.ScreenAnnot.prototype.setIconCaptionRelation = function (icr) {
          checkArguments(
            arguments.length,
            1,
            'setIconCaptionRelation',
            '(number)',
            [[icr, 'number']]
          );
          return PDFNet.sendWithPromise('ScreenAnnot.setIconCaptionRelation', {
            s: this.id,
            icr: icr,
          });
        };
        PDFNet.ScreenAnnot.prototype.getScaleCondition = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getScaleCondition', {
            s: this.id,
          });
        };
        PDFNet.ScreenAnnot.prototype.setScaleCondition = function (sc) {
          checkArguments(arguments.length, 1, 'setScaleCondition', '(number)', [
            [sc, 'number'],
          ]);
          return PDFNet.sendWithPromise('ScreenAnnot.setScaleCondition', {
            s: this.id,
            sc: sc,
          });
        };
        PDFNet.ScreenAnnot.prototype.getFitFull = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getFitFull', {
            s: this.id,
          });
        };
        PDFNet.ScreenAnnot.prototype.setFitFull = function (ff) {
          checkArguments(arguments.length, 1, 'setFitFull', '(boolean)', [
            [ff, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('ScreenAnnot.setFitFull', {
            s: this.id,
            ff: ff,
          });
        };
        PDFNet.ScreenAnnot.prototype.getHIconLeftOver = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getHIconLeftOver', {
            s: this.id,
          });
        };
        PDFNet.ScreenAnnot.prototype.setHIconLeftOver = function (hl) {
          checkArguments(arguments.length, 1, 'setHIconLeftOver', '(number)', [
            [hl, 'number'],
          ]);
          return PDFNet.sendWithPromise('ScreenAnnot.setHIconLeftOver', {
            s: this.id,
            hl: hl,
          });
        };
        PDFNet.ScreenAnnot.prototype.getVIconLeftOver = function () {
          return PDFNet.sendWithPromise('ScreenAnnot.getVIconLeftOver', {
            s: this.id,
          });
        };
        PDFNet.ScreenAnnot.prototype.setVIconLeftOver = function (vl) {
          checkArguments(arguments.length, 1, 'setVIconLeftOver', '(number)', [
            [vl, 'number'],
          ]);
          return PDFNet.sendWithPromise('ScreenAnnot.setVIconLeftOver', {
            s: this.id,
            vl: vl,
          });
        };
        PDFNet.SoundAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('soundAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SoundAnnot, id);
          });
        };
        PDFNet.SoundAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('soundAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SoundAnnot, id);
          });
        };
        PDFNet.SoundAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('soundAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SoundAnnot, id);
          });
        };
        PDFNet.SoundAnnot.createWithData = function (
          doc,
          pos,
          stream,
          sample_bits,
          sample_freq,
          num_channels
        ) {
          checkArguments(
            arguments.length,
            6,
            'createWithData',
            '(PDFNet.SDFDoc, PDFNet.Rect, PDFNet.Filter, number, number, number)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [stream, 'Object', PDFNet.Filter, 'Filter'],
              [sample_bits, 'number'],
              [sample_freq, 'number'],
              [num_channels, 'number'],
            ]
          );
          checkParamsYieldFunction('createWithData', [[pos, 1]]);
          0 != stream.id && avoidCleanup(stream.id);
          return PDFNet.sendWithPromise('soundAnnotCreateWithData', {
            doc: doc.id,
            pos: pos,
            no_own_stream: stream.id,
            sample_bits: sample_bits,
            sample_freq: sample_freq,
            num_channels: num_channels,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SoundAnnot, id);
          });
        };
        PDFNet.SoundAnnot.createAtPoint = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'createAtPoint',
            '(PDFNet.SDFDoc, PDFNet.Point)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Point, 'Point'],
            ]
          );
          checkParamsYieldFunction('createAtPoint', [[pos, 1]]);
          return PDFNet.sendWithPromise('soundAnnotCreateAtPoint', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SoundAnnot, id);
          });
        };
        PDFNet.SoundAnnot.prototype.getSoundStream = function () {
          return PDFNet.sendWithPromise('SoundAnnot.getSoundStream', {
            sound: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SoundAnnot.prototype.setSoundStream = function (icon) {
          checkArguments(
            arguments.length,
            1,
            'setSoundStream',
            '(PDFNet.Obj)',
            [[icon, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('SoundAnnot.setSoundStream', {
            sound: this.id,
            icon: icon.id,
          });
        };
        PDFNet.SoundAnnot.prototype.getIcon = function () {
          return PDFNet.sendWithPromise('SoundAnnot.getIcon', {
            sound: this.id,
          });
        };
        PDFNet.SoundAnnot.prototype.setIcon = function (type) {
          'undefined' === typeof type &&
            (type = PDFNet.SoundAnnot.Icon.e_Speaker);
          checkArguments(arguments.length, 0, 'setIcon', '(number)', [
            [type, 'number'],
          ]);
          return PDFNet.sendWithPromise('SoundAnnot.setIcon', {
            sound: this.id,
            type: type,
          });
        };
        PDFNet.SoundAnnot.prototype.getIconName = function () {
          return PDFNet.sendWithPromise('SoundAnnot.getIconName', {
            sound: this.id,
          });
        };
        PDFNet.SoundAnnot.prototype.setIconName = function (type) {
          checkArguments(arguments.length, 1, 'setIconName', '(string)', [
            [type, 'string'],
          ]);
          return PDFNet.sendWithPromise('SoundAnnot.setIconName', {
            sound: this.id,
            type: type,
          });
        };
        PDFNet.SquareAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('squareAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SquareAnnot, id);
          });
        };
        PDFNet.SquareAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('squareAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SquareAnnot, id);
          });
        };
        PDFNet.SquareAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('squareAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SquareAnnot, id);
          });
        };
        PDFNet.SquareAnnot.prototype.getInteriorColor = function () {
          return PDFNet.sendWithPromise('SquareAnnot.getInteriorColor', {
            square: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.SquareAnnot.prototype.getInteriorColorCompNum = function () {
          return PDFNet.sendWithPromise('SquareAnnot.getInteriorColorCompNum', {
            square: this.id,
          });
        };
        PDFNet.SquareAnnot.prototype.setInteriorColorDefault = function (col) {
          checkArguments(
            arguments.length,
            1,
            'setInteriorColorDefault',
            '(PDFNet.ColorPt)',
            [[col, 'Object', PDFNet.ColorPt, 'ColorPt']]
          );
          return PDFNet.sendWithPromise('SquareAnnot.setInteriorColorDefault', {
            square: this.id,
            col: col.id,
          });
        };
        PDFNet.SquareAnnot.prototype.setInteriorColor = function (
          col,
          numcomp
        ) {
          checkArguments(
            arguments.length,
            2,
            'setInteriorColor',
            '(PDFNet.ColorPt, number)',
            [
              [col, 'Object', PDFNet.ColorPt, 'ColorPt'],
              [numcomp, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('SquareAnnot.setInteriorColor', {
            square: this.id,
            col: col.id,
            numcomp: numcomp,
          });
        };
        PDFNet.SquareAnnot.prototype.getContentRect = function () {
          return PDFNet.sendWithPromise('SquareAnnot.getContentRect', {
            square: this.id,
          }).then(function (id) {
            return new PDFNet.Rect(id);
          });
        };
        PDFNet.SquareAnnot.prototype.setContentRect = function (cr) {
          checkArguments(
            arguments.length,
            1,
            'setContentRect',
            '(PDFNet.Rect)',
            [[cr, 'Structure', PDFNet.Rect, 'Rect']]
          );
          checkParamsYieldFunction('setContentRect', [[cr, 0]]);
          return PDFNet.sendWithPromise('SquareAnnot.setContentRect', {
            square: this.id,
            cr: cr,
          });
        };
        PDFNet.SquareAnnot.prototype.getPadding = function () {
          return PDFNet.sendWithPromise('SquareAnnot.getPadding', {
            square: this.id,
          }).then(function (id) {
            return new PDFNet.Rect(id);
          });
        };
        PDFNet.SquareAnnot.prototype.setPadding = function (cr) {
          checkArguments(arguments.length, 1, 'setPadding', '(PDFNet.Rect)', [
            [cr, 'Structure', PDFNet.Rect, 'Rect'],
          ]);
          checkParamsYieldFunction('setPadding', [[cr, 0]]);
          return PDFNet.sendWithPromise('SquareAnnot.setPadding', {
            square: this.id,
            cr: cr,
          });
        };
        PDFNet.SquigglyAnnot.createFromObj = function (d) {
          checkArguments(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('squigglyAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SquigglyAnnot, id);
          });
        };
        PDFNet.SquigglyAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('squigglyAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SquigglyAnnot, id);
          });
        };
        PDFNet.SquigglyAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('squigglyAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SquigglyAnnot, id);
          });
        };
        PDFNet.StrikeOutAnnot.createFromObj = function (d) {
          checkArguments(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('strikeOutAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.StrikeOutAnnot, id);
          });
        };
        PDFNet.StrikeOutAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('strikeOutAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.StrikeOutAnnot, id);
          });
        };
        PDFNet.StrikeOutAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('strikeOutAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.StrikeOutAnnot, id);
          });
        };
        PDFNet.TextAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('textAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TextAnnot, id);
          });
        };
        PDFNet.TextAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('textAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TextAnnot, id);
          });
        };
        PDFNet.TextAnnot.createAtPoint = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'createAtPoint',
            '(PDFNet.SDFDoc, PDFNet.Point)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Point, 'Point'],
            ]
          );
          checkParamsYieldFunction('createAtPoint', [[pos, 1]]);
          return PDFNet.sendWithPromise('textAnnotCreateAtPoint', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TextAnnot, id);
          });
        };
        PDFNet.TextAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('textAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TextAnnot, id);
          });
        };
        PDFNet.TextAnnot.prototype.isOpen = function () {
          return PDFNet.sendWithPromise('TextAnnot.isOpen', { text: this.id });
        };
        PDFNet.TextAnnot.prototype.setOpen = function (isopen) {
          checkArguments(arguments.length, 1, 'setOpen', '(boolean)', [
            [isopen, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('TextAnnot.setOpen', {
            text: this.id,
            isopen: isopen,
          });
        };
        PDFNet.TextAnnot.prototype.getIcon = function () {
          return PDFNet.sendWithPromise('TextAnnot.getIcon', { text: this.id });
        };
        PDFNet.TextAnnot.prototype.setIcon = function (icon) {
          'undefined' === typeof icon && (icon = PDFNet.TextAnnot.Icon.e_Note);
          checkArguments(arguments.length, 0, 'setIcon', '(number)', [
            [icon, 'number'],
          ]);
          return PDFNet.sendWithPromise('TextAnnot.setIcon', {
            text: this.id,
            icon: icon,
          });
        };
        PDFNet.TextAnnot.prototype.setIconDefault = function () {
          return PDFNet.sendWithPromise('TextAnnot.setIconDefault', {
            text: this.id,
          });
        };
        PDFNet.TextAnnot.prototype.getIconName = function () {
          return PDFNet.sendWithPromise('TextAnnot.getIconName', {
            text: this.id,
          });
        };
        PDFNet.TextAnnot.prototype.setIconName = function (icon) {
          checkArguments(arguments.length, 1, 'setIconName', '(string)', [
            [icon, 'string'],
          ]);
          return PDFNet.sendWithPromise('TextAnnot.setIconName', {
            text: this.id,
            icon: icon,
          });
        };
        PDFNet.TextAnnot.prototype.getState = function () {
          return PDFNet.sendWithPromise('TextAnnot.getState', {
            text: this.id,
          });
        };
        PDFNet.TextAnnot.prototype.setState = function (state) {
          'undefined' === typeof state && (state = '');
          checkArguments(arguments.length, 0, 'setState', '(string)', [
            [state, 'string'],
          ]);
          return PDFNet.sendWithPromise('TextAnnot.setState', {
            text: this.id,
            state: state,
          });
        };
        PDFNet.TextAnnot.prototype.getStateModel = function () {
          return PDFNet.sendWithPromise('TextAnnot.getStateModel', {
            text: this.id,
          });
        };
        PDFNet.TextAnnot.prototype.setStateModel = function (sm) {
          checkArguments(arguments.length, 1, 'setStateModel', '(string)', [
            [sm, 'string'],
          ]);
          return PDFNet.sendWithPromise('TextAnnot.setStateModel', {
            text: this.id,
            sm: sm,
          });
        };
        PDFNet.TextAnnot.prototype.getAnchorPosition = function (anchor) {
          checkArguments(
            arguments.length,
            1,
            'getAnchorPosition',
            '(PDFNet.Point)',
            [[anchor, 'Structure', PDFNet.Point, 'Point']]
          );
          checkParamsYieldFunction('getAnchorPosition', [[anchor, 0]]);
          anchor.yieldFunction = 'TextAnnot.getAnchorPosition';
          return PDFNet.sendWithPromise('TextAnnot.getAnchorPosition', {
            text: this.id,
            anchor: anchor,
          }).then(function (id) {
            anchor.yieldFunction = void 0;
            copyFunc(id, anchor);
          });
        };
        PDFNet.TextAnnot.prototype.setAnchorPosition = function (anchor) {
          checkArguments(
            arguments.length,
            1,
            'setAnchorPosition',
            '(PDFNet.Point)',
            [[anchor, 'Structure', PDFNet.Point, 'Point']]
          );
          checkParamsYieldFunction('setAnchorPosition', [[anchor, 0]]);
          return PDFNet.sendWithPromise('TextAnnot.setAnchorPosition', {
            text: this.id,
            anchor: anchor,
          });
        };
        PDFNet.UnderlineAnnot.createFromObj = function (d) {
          checkArguments(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('underlineAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.UnderlineAnnot, id);
          });
        };
        PDFNet.UnderlineAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('underlineAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.UnderlineAnnot, id);
          });
        };
        PDFNet.UnderlineAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('underlineAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.UnderlineAnnot, id);
          });
        };
        PDFNet.WatermarkAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('watermarkAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.WatermarkAnnot, id);
          });
        };
        PDFNet.WatermarkAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('watermarkAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.WatermarkAnnot, id);
          });
        };
        PDFNet.WatermarkAnnot.create = function (doc, pos) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('watermarkAnnotCreate', {
            doc: doc.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.WatermarkAnnot, id);
          });
        };
        PDFNet.TextMarkupAnnot.createFromObj = function (d) {
          checkArguments(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('textMarkupAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TextMarkupAnnot, id);
          });
        };
        PDFNet.TextMarkupAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('textMarkupAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TextMarkupAnnot, id);
          });
        };
        PDFNet.TextMarkupAnnot.prototype.getQuadPointCount = function () {
          return PDFNet.sendWithPromise('TextMarkupAnnot.getQuadPointCount', {
            textmarkup: this.id,
          });
        };
        PDFNet.TextMarkupAnnot.prototype.getQuadPoint = function (idx) {
          checkArguments(arguments.length, 1, 'getQuadPoint', '(number)', [
            [idx, 'number'],
          ]);
          return PDFNet.sendWithPromise('TextMarkupAnnot.getQuadPoint', {
            textmarkup: this.id,
            idx: idx,
          });
        };
        PDFNet.TextMarkupAnnot.prototype.setQuadPoint = function (idx, qp) {
          checkArguments(
            arguments.length,
            2,
            'setQuadPoint',
            '(number, PDFNet.QuadPoint)',
            [
              [idx, 'number'],
              [qp, 'Structure', PDFNet.QuadPoint, 'QuadPoint'],
            ]
          );
          checkParamsYieldFunction('setQuadPoint', [[qp, 1]]);
          return PDFNet.sendWithPromise('TextMarkupAnnot.setQuadPoint', {
            textmarkup: this.id,
            idx: idx,
            qp: qp,
          });
        };
        PDFNet.WidgetAnnot.create = function (doc, pos, field) {
          checkArguments(
            arguments.length,
            3,
            'create',
            '(PDFNet.SDFDoc, PDFNet.Rect, PDFNet.Field)',
            [
              [doc, 'SDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [field, 'Structure', PDFNet.Field, 'Field'],
            ]
          );
          checkParamsYieldFunction('create', [
            [pos, 1],
            [field, 2],
          ]);
          field.yieldFunction = 'WidgetAnnot.create';
          return PDFNet.sendWithPromise('widgetAnnotCreate', {
            doc: doc.id,
            pos: pos,
            field: field,
          }).then(function (id) {
            field.yieldFunction = void 0;
            id.result = createPDFNetObj(PDFNet.WidgetAnnot, id.result);
            copyFunc(id.field, field);
            return id.result;
          });
        };
        PDFNet.WidgetAnnot.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('widgetAnnotCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.WidgetAnnot, id);
          });
        };
        PDFNet.WidgetAnnot.createFromAnnot = function (ann) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[ann, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('widgetAnnotCreateFromAnnot', {
            ann: ann.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.WidgetAnnot, id);
          });
        };
        PDFNet.WidgetAnnot.prototype.getField = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getField', {
            widget: this.id,
          }).then(function (id) {
            return new PDFNet.Field(id);
          });
        };
        PDFNet.WidgetAnnot.prototype.getHighlightingMode = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getHighlightingMode', {
            widget: this.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.setHighlightingMode = function (value) {
          'undefined' === typeof value &&
            (value = PDFNet.WidgetAnnot.HighlightingMode.e_invert);
          checkArguments(
            arguments.length,
            0,
            'setHighlightingMode',
            '(number)',
            [[value, 'number']]
          );
          return PDFNet.sendWithPromise('WidgetAnnot.setHighlightingMode', {
            widget: this.id,
            value: value,
          });
        };
        PDFNet.WidgetAnnot.prototype.getAction = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getAction', {
            widget: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.WidgetAnnot.prototype.setAction = function (action) {
          checkArguments(arguments.length, 1, 'setAction', '(PDFNet.Action)', [
            [action, 'Object', PDFNet.Action, 'Action'],
          ]);
          return PDFNet.sendWithPromise('WidgetAnnot.setAction', {
            widget: this.id,
            action: action.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.getBorderColor = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getBorderColor', {
            widget: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.WidgetAnnot.prototype.setBorderColor = function (col, compnum) {
          checkArguments(
            arguments.length,
            2,
            'setBorderColor',
            '(PDFNet.ColorPt, number)',
            [
              [col, 'Object', PDFNet.ColorPt, 'ColorPt'],
              [compnum, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('WidgetAnnot.setBorderColor', {
            widget: this.id,
            col: col.id,
            compnum: compnum,
          });
        };
        PDFNet.WidgetAnnot.prototype.getBorderColorCompNum = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getBorderColorCompNum', {
            widget: this.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.getBackgroundColorCompNum = function () {
          return PDFNet.sendWithPromise(
            'WidgetAnnot.getBackgroundColorCompNum',
            { widget: this.id }
          );
        };
        PDFNet.WidgetAnnot.prototype.getBackgroundColor = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getBackgroundColor', {
            widget: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.WidgetAnnot.prototype.setBackgroundColor = function (
          col,
          compnum
        ) {
          checkArguments(
            arguments.length,
            2,
            'setBackgroundColor',
            '(PDFNet.ColorPt, number)',
            [
              [col, 'Object', PDFNet.ColorPt, 'ColorPt'],
              [compnum, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('WidgetAnnot.setBackgroundColor', {
            widget: this.id,
            col: col.id,
            compnum: compnum,
          });
        };
        PDFNet.WidgetAnnot.prototype.getStaticCaptionText = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getStaticCaptionText', {
            widget: this.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.setStaticCaptionText = function (
          contents
        ) {
          checkArguments(
            arguments.length,
            1,
            'setStaticCaptionText',
            '(string)',
            [[contents, 'string']]
          );
          return PDFNet.sendWithPromise('WidgetAnnot.setStaticCaptionText', {
            widget: this.id,
            contents: contents,
          });
        };
        PDFNet.WidgetAnnot.prototype.getRolloverCaptionText = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getRolloverCaptionText', {
            widget: this.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.setRolloverCaptionText = function (
          contents
        ) {
          checkArguments(
            arguments.length,
            1,
            'setRolloverCaptionText',
            '(string)',
            [[contents, 'string']]
          );
          return PDFNet.sendWithPromise('WidgetAnnot.setRolloverCaptionText', {
            widget: this.id,
            contents: contents,
          });
        };
        PDFNet.WidgetAnnot.prototype.getMouseDownCaptionText = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getMouseDownCaptionText', {
            widget: this.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.setMouseDownCaptionText = function (
          contents
        ) {
          checkArguments(
            arguments.length,
            1,
            'setMouseDownCaptionText',
            '(string)',
            [[contents, 'string']]
          );
          return PDFNet.sendWithPromise('WidgetAnnot.setMouseDownCaptionText', {
            widget: this.id,
            contents: contents,
          });
        };
        PDFNet.WidgetAnnot.prototype.getStaticIcon = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getStaticIcon', {
            widget: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.WidgetAnnot.prototype.setStaticIcon = function (icon) {
          checkArguments(arguments.length, 1, 'setStaticIcon', '(PDFNet.Obj)', [
            [icon, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('WidgetAnnot.setStaticIcon', {
            widget: this.id,
            icon: icon.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.getRolloverIcon = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getRolloverIcon', {
            widget: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.WidgetAnnot.prototype.setRolloverIcon = function (icon) {
          checkArguments(
            arguments.length,
            1,
            'setRolloverIcon',
            '(PDFNet.Obj)',
            [[icon, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('WidgetAnnot.setRolloverIcon', {
            widget: this.id,
            icon: icon.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.getMouseDownIcon = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getMouseDownIcon', {
            widget: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.WidgetAnnot.prototype.setMouseDownIcon = function (icon) {
          checkArguments(
            arguments.length,
            1,
            'setMouseDownIcon',
            '(PDFNet.Obj)',
            [[icon, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('WidgetAnnot.setMouseDownIcon', {
            widget: this.id,
            icon: icon.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.getScaleType = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getScaleType', {
            widget: this.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.setScaleType = function (st) {
          checkArguments(arguments.length, 1, 'setScaleType', '(number)', [
            [st, 'number'],
          ]);
          return PDFNet.sendWithPromise('WidgetAnnot.setScaleType', {
            widget: this.id,
            st: st,
          });
        };
        PDFNet.WidgetAnnot.prototype.getIconCaptionRelation = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getIconCaptionRelation', {
            widget: this.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.setIconCaptionRelation = function (icr) {
          checkArguments(
            arguments.length,
            1,
            'setIconCaptionRelation',
            '(number)',
            [[icr, 'number']]
          );
          return PDFNet.sendWithPromise('WidgetAnnot.setIconCaptionRelation', {
            widget: this.id,
            icr: icr,
          });
        };
        PDFNet.WidgetAnnot.prototype.getScaleCondition = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getScaleCondition', {
            widget: this.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.setScaleCondition = function (sd) {
          checkArguments(arguments.length, 1, 'setScaleCondition', '(number)', [
            [sd, 'number'],
          ]);
          return PDFNet.sendWithPromise('WidgetAnnot.setScaleCondition', {
            widget: this.id,
            sd: sd,
          });
        };
        PDFNet.WidgetAnnot.prototype.getFitFull = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getFitFull', {
            widget: this.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.setFitFull = function (ff) {
          checkArguments(arguments.length, 1, 'setFitFull', '(boolean)', [
            [ff, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('WidgetAnnot.setFitFull', {
            widget: this.id,
            ff: ff,
          });
        };
        PDFNet.WidgetAnnot.prototype.getHIconLeftOver = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getHIconLeftOver', {
            widget: this.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.setHIconLeftOver = function (hl) {
          checkArguments(arguments.length, 1, 'setHIconLeftOver', '(number)', [
            [hl, 'number'],
          ]);
          return PDFNet.sendWithPromise('WidgetAnnot.setHIconLeftOver', {
            widget: this.id,
            hl: hl,
          });
        };
        PDFNet.WidgetAnnot.prototype.getVIconLeftOver = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getVIconLeftOver', {
            widget: this.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.setVIconLeftOver = function (vl) {
          checkArguments(arguments.length, 1, 'setVIconLeftOver', '(number)', [
            [vl, 'number'],
          ]);
          return PDFNet.sendWithPromise('WidgetAnnot.setVIconLeftOver', {
            widget: this.id,
            vl: vl,
          });
        };
        PDFNet.WidgetAnnot.prototype.setFontSize = function (font_size) {
          checkArguments(arguments.length, 1, 'setFontSize', '(number)', [
            [font_size, 'number'],
          ]);
          return PDFNet.sendWithPromise('WidgetAnnot.setFontSize', {
            widget: this.id,
            font_size: font_size,
          });
        };
        PDFNet.WidgetAnnot.prototype.setTextColor = function (color, col_comp) {
          checkArguments(
            arguments.length,
            2,
            'setTextColor',
            '(PDFNet.ColorPt, number)',
            [
              [color, 'Object', PDFNet.ColorPt, 'ColorPt'],
              [col_comp, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('WidgetAnnot.setTextColor', {
            widget: this.id,
            color: color.id,
            col_comp: col_comp,
          });
        };
        PDFNet.WidgetAnnot.prototype.setFont = function (font) {
          checkArguments(arguments.length, 1, 'setFont', '(PDFNet.Font)', [
            [font, 'Object', PDFNet.Font, 'Font'],
          ]);
          return PDFNet.sendWithPromise('WidgetAnnot.setFont', {
            widget: this.id,
            font: font.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.getFontSize = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getFontSize', {
            widget: this.id,
          });
        };
        PDFNet.WidgetAnnot.prototype.getTextColor = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getTextColor', {
            widget: this.id,
          }).then(function (id) {
            id.col = createDestroyableObj(PDFNet.ColorPt, id.col);
            return id;
          });
        };
        PDFNet.WidgetAnnot.prototype.getFont = function () {
          return PDFNet.sendWithPromise('WidgetAnnot.getFont', {
            widget: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Font, id);
          });
        };
        PDFNet.SignatureWidget.create = function (doc, pos, field_name) {
          'undefined' === typeof field_name && (field_name = '');
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.PDFDoc, PDFNet.Rect, string)',
            [
              [doc, 'PDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [field_name, 'string'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('signatureWidgetCreate', {
            doc: doc.id,
            pos: pos,
            field_name: field_name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SignatureWidget, id);
          });
        };
        PDFNet.SignatureWidget.createWithField = function (doc, pos, field) {
          checkArguments(
            arguments.length,
            3,
            'createWithField',
            '(PDFNet.PDFDoc, PDFNet.Rect, PDFNet.Field)',
            [
              [doc, 'PDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [field, 'Structure', PDFNet.Field, 'Field'],
            ]
          );
          checkParamsYieldFunction('createWithField', [
            [pos, 1],
            [field, 2],
          ]);
          return PDFNet.sendWithPromise('signatureWidgetCreateWithField', {
            doc: doc.id,
            pos: pos,
            field: field,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SignatureWidget, id);
          });
        };
        PDFNet.SignatureWidget.createWithDigitalSignatureField = function (
          doc,
          pos,
          field
        ) {
          checkArguments(
            arguments.length,
            3,
            'createWithDigitalSignatureField',
            '(PDFNet.PDFDoc, PDFNet.Rect, PDFNet.DigitalSignatureField)',
            [
              [doc, 'PDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [
                field,
                'Structure',
                PDFNet.DigitalSignatureField,
                'DigitalSignatureField',
              ],
            ]
          );
          checkParamsYieldFunction('createWithDigitalSignatureField', [
            [pos, 1],
            [field, 2],
          ]);
          return PDFNet.sendWithPromise(
            'signatureWidgetCreateWithDigitalSignatureField',
            { doc: doc.id, pos: pos, field: field }
          ).then(function (id) {
            return createPDFNetObj(PDFNet.SignatureWidget, id);
          });
        };
        PDFNet.SignatureWidget.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('signatureWidgetCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SignatureWidget, id);
          });
        };
        PDFNet.SignatureWidget.createFromAnnot = function (annot) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[annot, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('signatureWidgetCreateFromAnnot', {
            annot: annot.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SignatureWidget, id);
          });
        };
        PDFNet.SignatureWidget.prototype.createSignatureAppearance = function (
          img
        ) {
          checkArguments(
            arguments.length,
            1,
            'createSignatureAppearance',
            '(PDFNet.Image)',
            [[img, 'Object', PDFNet.Image, 'Image']]
          );
          return PDFNet.sendWithPromise(
            'SignatureWidget.createSignatureAppearance',
            { self: this.id, img: img.id }
          );
        };
        PDFNet.SignatureWidget.prototype.getDigitalSignatureField =
          function () {
            return PDFNet.sendWithPromise(
              'SignatureWidget.getDigitalSignatureField',
              { self: this.id }
            ).then(function (id) {
              return new PDFNet.DigitalSignatureField(id);
            });
          };
        PDFNet.ComboBoxWidget.create = function (doc, pos, field_name) {
          'undefined' === typeof field_name && (field_name = '');
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.PDFDoc, PDFNet.Rect, string)',
            [
              [doc, 'PDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [field_name, 'string'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('comboBoxWidgetCreate', {
            doc: doc.id,
            pos: pos,
            field_name: field_name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ComboBoxWidget, id);
          });
        };
        PDFNet.ComboBoxWidget.createWithField = function (doc, pos, field) {
          checkArguments(
            arguments.length,
            3,
            'createWithField',
            '(PDFNet.PDFDoc, PDFNet.Rect, PDFNet.Field)',
            [
              [doc, 'PDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [field, 'Structure', PDFNet.Field, 'Field'],
            ]
          );
          checkParamsYieldFunction('createWithField', [
            [pos, 1],
            [field, 2],
          ]);
          return PDFNet.sendWithPromise('comboBoxWidgetCreateWithField', {
            doc: doc.id,
            pos: pos,
            field: field,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ComboBoxWidget, id);
          });
        };
        PDFNet.ComboBoxWidget.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('comboBoxWidgetCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ComboBoxWidget, id);
          });
        };
        PDFNet.ComboBoxWidget.createFromAnnot = function (annot) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[annot, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('comboBoxWidgetCreateFromAnnot', {
            annot: annot.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ComboBoxWidget, id);
          });
        };
        PDFNet.ComboBoxWidget.prototype.addOption = function (value) {
          checkArguments(arguments.length, 1, 'addOption', '(string)', [
            [value, 'string'],
          ]);
          return PDFNet.sendWithPromise('ComboBoxWidget.addOption', {
            combobox: this.id,
            value: value,
          });
        };
        PDFNet.ComboBoxWidget.prototype.addOptions = function (opts) {
          checkArguments(arguments.length, 1, 'addOptions', '(Array<string>)', [
            [opts, 'Array'],
          ]);
          return PDFNet.sendWithPromise('ComboBoxWidget.addOptions', {
            combobox: this.id,
            opts_list: opts,
          });
        };
        PDFNet.ComboBoxWidget.prototype.setSelectedOption = function (value) {
          checkArguments(arguments.length, 1, 'setSelectedOption', '(string)', [
            [value, 'string'],
          ]);
          return PDFNet.sendWithPromise('ComboBoxWidget.setSelectedOption', {
            combobox: this.id,
            value: value,
          });
        };
        PDFNet.ComboBoxWidget.prototype.getSelectedOption = function () {
          return PDFNet.sendWithPromise('ComboBoxWidget.getSelectedOption', {
            combobox: this.id,
          });
        };
        PDFNet.ComboBoxWidget.prototype.replaceOptions = function (new_opts) {
          checkArguments(
            arguments.length,
            1,
            'replaceOptions',
            '(Array<string>)',
            [[new_opts, 'Array']]
          );
          return PDFNet.sendWithPromise('ComboBoxWidget.replaceOptions', {
            combobox: this.id,
            new_opts_list: new_opts,
          });
        };
        PDFNet.ComboBoxWidget.prototype.removeOption = function (value) {
          checkArguments(arguments.length, 1, 'removeOption', '(string)', [
            [value, 'string'],
          ]);
          return PDFNet.sendWithPromise('ComboBoxWidget.removeOption', {
            combobox: this.id,
            value: value,
          });
        };
        PDFNet.ListBoxWidget.create = function (doc, pos, field_name) {
          'undefined' === typeof field_name && (field_name = '');
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.PDFDoc, PDFNet.Rect, string)',
            [
              [doc, 'PDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [field_name, 'string'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('listBoxWidgetCreate', {
            doc: doc.id,
            pos: pos,
            field_name: field_name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ListBoxWidget, id);
          });
        };
        PDFNet.ListBoxWidget.createWithField = function (doc, pos, field) {
          checkArguments(
            arguments.length,
            3,
            'createWithField',
            '(PDFNet.PDFDoc, PDFNet.Rect, PDFNet.Field)',
            [
              [doc, 'PDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [field, 'Structure', PDFNet.Field, 'Field'],
            ]
          );
          checkParamsYieldFunction('createWithField', [
            [pos, 1],
            [field, 2],
          ]);
          return PDFNet.sendWithPromise('listBoxWidgetCreateWithField', {
            doc: doc.id,
            pos: pos,
            field: field,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ListBoxWidget, id);
          });
        };
        PDFNet.ListBoxWidget.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('listBoxWidgetCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ListBoxWidget, id);
          });
        };
        PDFNet.ListBoxWidget.createFromAnnot = function (annot) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[annot, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('listBoxWidgetCreateFromAnnot', {
            annot: annot.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ListBoxWidget, id);
          });
        };
        PDFNet.ListBoxWidget.prototype.addOption = function (value) {
          checkArguments(arguments.length, 1, 'addOption', '(string)', [
            [value, 'string'],
          ]);
          return PDFNet.sendWithPromise('ListBoxWidget.addOption', {
            listbox: this.id,
            value: value,
          });
        };
        PDFNet.ListBoxWidget.prototype.addOptions = function (opts) {
          checkArguments(arguments.length, 1, 'addOptions', '(Array<string>)', [
            [opts, 'Array'],
          ]);
          return PDFNet.sendWithPromise('ListBoxWidget.addOptions', {
            listbox: this.id,
            opts_list: opts,
          });
        };
        PDFNet.ListBoxWidget.prototype.setSelectedOptions = function (
          selected_opts
        ) {
          checkArguments(
            arguments.length,
            1,
            'setSelectedOptions',
            '(Array<string>)',
            [[selected_opts, 'Array']]
          );
          return PDFNet.sendWithPromise('ListBoxWidget.setSelectedOptions', {
            listbox: this.id,
            selected_opts_list: selected_opts,
          });
        };
        PDFNet.ListBoxWidget.prototype.replaceOptions = function (new_opts) {
          checkArguments(
            arguments.length,
            1,
            'replaceOptions',
            '(Array<string>)',
            [[new_opts, 'Array']]
          );
          return PDFNet.sendWithPromise('ListBoxWidget.replaceOptions', {
            listbox: this.id,
            new_opts_list: new_opts,
          });
        };
        PDFNet.ListBoxWidget.prototype.removeOption = function (value) {
          checkArguments(arguments.length, 1, 'removeOption', '(string)', [
            [value, 'string'],
          ]);
          return PDFNet.sendWithPromise('ListBoxWidget.removeOption', {
            listbox: this.id,
            value: value,
          });
        };
        PDFNet.TextWidget.create = function (doc, pos, field_name) {
          'undefined' === typeof field_name && (field_name = '');
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.PDFDoc, PDFNet.Rect, string)',
            [
              [doc, 'PDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [field_name, 'string'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('textWidgetCreate', {
            doc: doc.id,
            pos: pos,
            field_name: field_name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TextWidget, id);
          });
        };
        PDFNet.TextWidget.createWithField = function (doc, pos, field) {
          checkArguments(
            arguments.length,
            3,
            'createWithField',
            '(PDFNet.PDFDoc, PDFNet.Rect, PDFNet.Field)',
            [
              [doc, 'PDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [field, 'Structure', PDFNet.Field, 'Field'],
            ]
          );
          checkParamsYieldFunction('createWithField', [
            [pos, 1],
            [field, 2],
          ]);
          return PDFNet.sendWithPromise('textWidgetCreateWithField', {
            doc: doc.id,
            pos: pos,
            field: field,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TextWidget, id);
          });
        };
        PDFNet.TextWidget.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('textWidgetCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TextWidget, id);
          });
        };
        PDFNet.TextWidget.createFromAnnot = function (annot) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[annot, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('textWidgetCreateFromAnnot', {
            annot: annot.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TextWidget, id);
          });
        };
        PDFNet.TextWidget.prototype.setText = function (text) {
          checkArguments(arguments.length, 1, 'setText', '(string)', [
            [text, 'string'],
          ]);
          return PDFNet.sendWithPromise('TextWidget.setText', {
            widget: this.id,
            text: text,
          });
        };
        PDFNet.TextWidget.prototype.getText = function () {
          return PDFNet.sendWithPromise('TextWidget.getText', {
            widget: this.id,
          });
        };
        PDFNet.CheckBoxWidget.create = function (doc, pos, field_name) {
          'undefined' === typeof field_name && (field_name = '');
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.PDFDoc, PDFNet.Rect, string)',
            [
              [doc, 'PDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [field_name, 'string'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('checkBoxWidgetCreate', {
            doc: doc.id,
            pos: pos,
            field_name: field_name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.CheckBoxWidget, id);
          });
        };
        PDFNet.CheckBoxWidget.createWithField = function (doc, pos, field) {
          checkArguments(
            arguments.length,
            3,
            'createWithField',
            '(PDFNet.PDFDoc, PDFNet.Rect, PDFNet.Field)',
            [
              [doc, 'PDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [field, 'Structure', PDFNet.Field, 'Field'],
            ]
          );
          checkParamsYieldFunction('createWithField', [
            [pos, 1],
            [field, 2],
          ]);
          return PDFNet.sendWithPromise('checkBoxWidgetCreateWithField', {
            doc: doc.id,
            pos: pos,
            field: field,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.CheckBoxWidget, id);
          });
        };
        PDFNet.CheckBoxWidget.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('checkBoxWidgetCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.CheckBoxWidget, id);
          });
        };
        PDFNet.CheckBoxWidget.createFromAnnot = function (annot) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[annot, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('checkBoxWidgetCreateFromAnnot', {
            annot: annot.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.CheckBoxWidget, id);
          });
        };
        PDFNet.CheckBoxWidget.prototype.isChecked = function () {
          return PDFNet.sendWithPromise('CheckBoxWidget.isChecked', {
            button: this.id,
          });
        };
        PDFNet.CheckBoxWidget.prototype.setChecked = function (checked) {
          checkArguments(arguments.length, 1, 'setChecked', '(boolean)', [
            [checked, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('CheckBoxWidget.setChecked', {
            button: this.id,
            checked: checked,
          });
        };
        PDFNet.RadioButtonWidget.createFromObj = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('radioButtonWidgetCreateFromObj', {
            d: d.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.RadioButtonWidget, id);
          });
        };
        PDFNet.RadioButtonWidget.createFromAnnot = function (annot) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[annot, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('radioButtonWidgetCreateFromAnnot', {
            annot: annot.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.RadioButtonWidget, id);
          });
        };
        PDFNet.RadioButtonWidget.prototype.isEnabled = function () {
          return PDFNet.sendWithPromise('RadioButtonWidget.isEnabled', {
            button: this.id,
          });
        };
        PDFNet.RadioButtonWidget.prototype.enableButton = function () {
          return PDFNet.sendWithPromise('RadioButtonWidget.enableButton', {
            button: this.id,
          });
        };
        PDFNet.RadioButtonWidget.prototype.getGroup = function () {
          return PDFNet.sendWithPromise('RadioButtonWidget.getGroup', {
            button: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.RadioButtonGroup, id);
          });
        };
        PDFNet.PushButtonWidget.create = function (doc, pos, field_name) {
          'undefined' === typeof field_name && (field_name = '');
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.PDFDoc, PDFNet.Rect, string)',
            [
              [doc, 'PDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [field_name, 'string'],
            ]
          );
          checkParamsYieldFunction('create', [[pos, 1]]);
          return PDFNet.sendWithPromise('pushButtonWidgetCreate', {
            doc: doc.id,
            pos: pos,
            field_name: field_name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PushButtonWidget, id);
          });
        };
        PDFNet.PushButtonWidget.createWithField = function (doc, pos, field) {
          checkArguments(
            arguments.length,
            3,
            'createWithField',
            '(PDFNet.PDFDoc, PDFNet.Rect, PDFNet.Field)',
            [
              [doc, 'PDFDoc'],
              [pos, 'Structure', PDFNet.Rect, 'Rect'],
              [field, 'Structure', PDFNet.Field, 'Field'],
            ]
          );
          checkParamsYieldFunction('createWithField', [
            [pos, 1],
            [field, 2],
          ]);
          return PDFNet.sendWithPromise('pushButtonWidgetCreateWithField', {
            doc: doc.id,
            pos: pos,
            field: field,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PushButtonWidget, id);
          });
        };
        PDFNet.PushButtonWidget.createFromObj = function (obj) {
          'undefined' === typeof obj && (obj = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [obj, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('pushButtonWidgetCreateFromObj', {
            obj: obj.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PushButtonWidget, id);
          });
        };
        PDFNet.PushButtonWidget.createFromAnnot = function (annot) {
          checkArguments(
            arguments.length,
            1,
            'createFromAnnot',
            '(PDFNet.Annot)',
            [[annot, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('pushButtonWidgetCreateFromAnnot', {
            annot: annot.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PushButtonWidget, id);
          });
        };
        PDFNet.Bookmark.create = function (in_doc, in_title) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.PDFDoc, string)',
            [
              [in_doc, 'PDFDoc'],
              [in_title, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('bookmarkCreate', {
            in_doc: in_doc.id,
            in_title: in_title,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Bookmark, id);
          });
        };
        PDFNet.Bookmark.createFromObj = function (in_bookmark_dict) {
          checkArguments(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
            [in_bookmark_dict, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('bookmarkCreateFromObj', {
            in_bookmark_dict: in_bookmark_dict.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Bookmark, id);
          });
        };
        PDFNet.Bookmark.prototype.copy = function () {
          return PDFNet.sendWithPromise('Bookmark.copy', {
            in_bookmark: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Bookmark, id);
          });
        };
        PDFNet.Bookmark.prototype.compare = function (in_bookmark) {
          checkArguments(arguments.length, 1, 'compare', '(PDFNet.Bookmark)', [
            [in_bookmark, 'Object', PDFNet.Bookmark, 'Bookmark'],
          ]);
          return PDFNet.sendWithPromise('Bookmark.compare', {
            bm: this.id,
            in_bookmark: in_bookmark.id,
          });
        };
        PDFNet.Bookmark.prototype.isValid = function () {
          return PDFNet.sendWithPromise('Bookmark.isValid', { bm: this.id });
        };
        PDFNet.Bookmark.prototype.hasChildren = function () {
          return PDFNet.sendWithPromise('Bookmark.hasChildren', {
            bm: this.id,
          });
        };
        PDFNet.Bookmark.prototype.getNext = function () {
          return PDFNet.sendWithPromise('Bookmark.getNext', {
            bm: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Bookmark, id);
          });
        };
        PDFNet.Bookmark.prototype.getPrev = function () {
          return PDFNet.sendWithPromise('Bookmark.getPrev', {
            bm: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Bookmark, id);
          });
        };
        PDFNet.Bookmark.prototype.getFirstChild = function () {
          return PDFNet.sendWithPromise('Bookmark.getFirstChild', {
            bm: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Bookmark, id);
          });
        };
        PDFNet.Bookmark.prototype.getLastChild = function () {
          return PDFNet.sendWithPromise('Bookmark.getLastChild', {
            bm: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Bookmark, id);
          });
        };
        PDFNet.Bookmark.prototype.getParent = function () {
          return PDFNet.sendWithPromise('Bookmark.getParent', {
            bm: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Bookmark, id);
          });
        };
        PDFNet.Bookmark.prototype.find = function (in_title) {
          checkArguments(arguments.length, 1, 'find', '(string)', [
            [in_title, 'string'],
          ]);
          return PDFNet.sendWithPromise('Bookmark.find', {
            bm: this.id,
            in_title: in_title,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Bookmark, id);
          });
        };
        PDFNet.Bookmark.prototype.addNewChild = function (in_title) {
          checkArguments(arguments.length, 1, 'addNewChild', '(string)', [
            [in_title, 'string'],
          ]);
          return PDFNet.sendWithPromise('Bookmark.addNewChild', {
            bm: this.id,
            in_title: in_title,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Bookmark, id);
          });
        };
        PDFNet.Bookmark.prototype.addChild = function (in_bookmark) {
          checkArguments(arguments.length, 1, 'addChild', '(PDFNet.Bookmark)', [
            [in_bookmark, 'Object', PDFNet.Bookmark, 'Bookmark'],
          ]);
          return PDFNet.sendWithPromise('Bookmark.addChild', {
            bm: this.id,
            in_bookmark: in_bookmark.id,
          });
        };
        PDFNet.Bookmark.prototype.addNewNext = function (in_title) {
          checkArguments(arguments.length, 1, 'addNewNext', '(string)', [
            [in_title, 'string'],
          ]);
          return PDFNet.sendWithPromise('Bookmark.addNewNext', {
            bm: this.id,
            in_title: in_title,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Bookmark, id);
          });
        };
        PDFNet.Bookmark.prototype.addNext = function (in_bookmark) {
          checkArguments(arguments.length, 1, 'addNext', '(PDFNet.Bookmark)', [
            [in_bookmark, 'Object', PDFNet.Bookmark, 'Bookmark'],
          ]);
          return PDFNet.sendWithPromise('Bookmark.addNext', {
            bm: this.id,
            in_bookmark: in_bookmark.id,
          });
        };
        PDFNet.Bookmark.prototype.addNewPrev = function (in_title) {
          checkArguments(arguments.length, 1, 'addNewPrev', '(string)', [
            [in_title, 'string'],
          ]);
          return PDFNet.sendWithPromise('Bookmark.addNewPrev', {
            bm: this.id,
            in_title: in_title,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Bookmark, id);
          });
        };
        PDFNet.Bookmark.prototype.addPrev = function (in_bookmark) {
          checkArguments(arguments.length, 1, 'addPrev', '(PDFNet.Bookmark)', [
            [in_bookmark, 'Object', PDFNet.Bookmark, 'Bookmark'],
          ]);
          return PDFNet.sendWithPromise('Bookmark.addPrev', {
            bm: this.id,
            in_bookmark: in_bookmark.id,
          });
        };
        PDFNet.Bookmark.prototype['delete'] = function () {
          return PDFNet.sendWithPromise('Bookmark.delete', { bm: this.id });
        };
        PDFNet.Bookmark.prototype.unlink = function () {
          return PDFNet.sendWithPromise('Bookmark.unlink', { bm: this.id });
        };
        PDFNet.Bookmark.prototype.getIndent = function () {
          return PDFNet.sendWithPromise('Bookmark.getIndent', { bm: this.id });
        };
        PDFNet.Bookmark.prototype.isOpen = function () {
          return PDFNet.sendWithPromise('Bookmark.isOpen', { bm: this.id });
        };
        PDFNet.Bookmark.prototype.setOpen = function (in_open) {
          checkArguments(arguments.length, 1, 'setOpen', '(boolean)', [
            [in_open, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Bookmark.setOpen', {
            bm: this.id,
            in_open: in_open,
          });
        };
        PDFNet.Bookmark.prototype.getOpenCount = function () {
          return PDFNet.sendWithPromise('Bookmark.getOpenCount', {
            bm: this.id,
          });
        };
        PDFNet.Bookmark.prototype.getTitle = function () {
          return PDFNet.sendWithPromise('Bookmark.getTitle', { bm: this.id });
        };
        PDFNet.Bookmark.prototype.getTitleObj = function () {
          return PDFNet.sendWithPromise('Bookmark.getTitleObj', {
            bm: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Bookmark.prototype.setTitle = function (title) {
          checkArguments(arguments.length, 1, 'setTitle', '(string)', [
            [title, 'string'],
          ]);
          return PDFNet.sendWithPromise('Bookmark.setTitle', {
            bm: this.id,
            title: title,
          });
        };
        PDFNet.Bookmark.prototype.getAction = function () {
          return PDFNet.sendWithPromise('Bookmark.getAction', {
            bm: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.Bookmark.prototype.setAction = function (in_action) {
          checkArguments(arguments.length, 1, 'setAction', '(PDFNet.Action)', [
            [in_action, 'Object', PDFNet.Action, 'Action'],
          ]);
          return PDFNet.sendWithPromise('Bookmark.setAction', {
            bm: this.id,
            in_action: in_action.id,
          });
        };
        PDFNet.Bookmark.prototype.removeAction = function () {
          return PDFNet.sendWithPromise('Bookmark.removeAction', {
            bm: this.id,
          });
        };
        PDFNet.Bookmark.prototype.getFlags = function () {
          return PDFNet.sendWithPromise('Bookmark.getFlags', { bm: this.id });
        };
        PDFNet.Bookmark.prototype.setFlags = function (in_flags) {
          checkArguments(arguments.length, 1, 'setFlags', '(number)', [
            [in_flags, 'number'],
          ]);
          return PDFNet.sendWithPromise('Bookmark.setFlags', {
            bm: this.id,
            in_flags: in_flags,
          });
        };
        PDFNet.Bookmark.prototype.getColor = function () {
          return PDFNet.sendWithPromise('Bookmark.getColor', { bm: this.id });
        };
        PDFNet.Bookmark.prototype.setColor = function (in_r, in_g, in_b) {
          'undefined' === typeof in_r && (in_r = 0);
          'undefined' === typeof in_g && (in_g = 0);
          'undefined' === typeof in_b && (in_b = 0);
          checkArguments(
            arguments.length,
            0,
            'setColor',
            '(number, number, number)',
            [
              [in_r, 'number'],
              [in_g, 'number'],
              [in_b, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Bookmark.setColor', {
            bm: this.id,
            in_r: in_r,
            in_g: in_g,
            in_b: in_b,
          });
        };
        PDFNet.Bookmark.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('Bookmark.getSDFObj', {
            bm: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ColorPt.init = function (x, y, z, w) {
          'undefined' === typeof x && (x = 0);
          'undefined' === typeof y && (y = 0);
          'undefined' === typeof z && (z = 0);
          'undefined' === typeof w && (w = 0);
          checkArguments(
            arguments.length,
            0,
            'init',
            '(number, number, number, number)',
            [
              [x, 'number'],
              [y, 'number'],
              [z, 'number'],
              [w, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('colorPtInit', {
            x: x,
            y: y,
            z: z,
            w: w,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.ColorPt.prototype.compare = function (right) {
          checkArguments(arguments.length, 1, 'compare', '(PDFNet.ColorPt)', [
            [right, 'Object', PDFNet.ColorPt, 'ColorPt'],
          ]);
          return PDFNet.sendWithPromise('ColorPt.compare', {
            left: this.id,
            right: right.id,
          });
        };
        PDFNet.ColorPt.prototype.set = function (x, y, z, w) {
          'undefined' === typeof x && (x = 0);
          'undefined' === typeof y && (y = 0);
          'undefined' === typeof z && (z = 0);
          'undefined' === typeof w && (w = 0);
          checkArguments(
            arguments.length,
            0,
            'set',
            '(number, number, number, number)',
            [
              [x, 'number'],
              [y, 'number'],
              [z, 'number'],
              [w, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('ColorPt.set', {
            cp: this.id,
            x: x,
            y: y,
            z: z,
            w: w,
          });
        };
        PDFNet.ColorPt.prototype.setByIndex = function (
          colorant_index,
          colorant_value
        ) {
          checkArguments(
            arguments.length,
            2,
            'setByIndex',
            '(number, number)',
            [
              [colorant_index, 'number'],
              [colorant_value, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('ColorPt.setByIndex', {
            cp: this.id,
            colorant_index: colorant_index,
            colorant_value: colorant_value,
          });
        };
        PDFNet.ColorPt.prototype.get = function (colorant_index) {
          checkArguments(arguments.length, 1, 'get', '(number)', [
            [colorant_index, 'number'],
          ]);
          return PDFNet.sendWithPromise('ColorPt.get', {
            cp: this.id,
            colorant_index: colorant_index,
          });
        };
        PDFNet.ColorPt.prototype.setColorantNum = function (num) {
          checkArguments(arguments.length, 1, 'setColorantNum', '(number)', [
            [num, 'number'],
          ]);
          return PDFNet.sendWithPromise('ColorPt.setColorantNum', {
            cp: this.id,
            num: num,
          });
        };
        PDFNet.ColorSpace.createDeviceGray = function () {
          return PDFNet.sendWithPromise('colorSpaceCreateDeviceGray', {}).then(
            function (id) {
              return createDestroyableObj(PDFNet.ColorSpace, id);
            }
          );
        };
        PDFNet.ColorSpace.createDeviceRGB = function () {
          return PDFNet.sendWithPromise('colorSpaceCreateDeviceRGB', {}).then(
            function (id) {
              return createDestroyableObj(PDFNet.ColorSpace, id);
            }
          );
        };
        PDFNet.ColorSpace.createDeviceCMYK = function () {
          return PDFNet.sendWithPromise('colorSpaceCreateDeviceCMYK', {}).then(
            function (id) {
              return createDestroyableObj(PDFNet.ColorSpace, id);
            }
          );
        };
        PDFNet.ColorSpace.createPattern = function () {
          return PDFNet.sendWithPromise('colorSpaceCreatePattern', {}).then(
            function (id) {
              return createDestroyableObj(PDFNet.ColorSpace, id);
            }
          );
        };
        PDFNet.ColorSpace.create = function (color_space) {
          'undefined' === typeof color_space &&
            (color_space = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'create', '(PDFNet.Obj)', [
            [color_space, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('colorSpaceCreate', {
            color_space: color_space.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorSpace, id);
          });
        };
        PDFNet.ColorSpace.createICCFromFilter = function (doc, filter) {
          checkArguments(
            arguments.length,
            2,
            'createICCFromFilter',
            '(PDFNet.SDFDoc, PDFNet.Filter)',
            [
              [doc, 'SDFDoc'],
              [filter, 'Object', PDFNet.Filter, 'Filter'],
            ]
          );
          0 != filter.id && avoidCleanup(filter.id);
          return PDFNet.sendWithPromise('colorSpaceCreateICCFromFilter', {
            doc: doc.id,
            no_own_filter: filter.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorSpace, id);
          });
        };
        PDFNet.ColorSpace.createICCFromBuffer = function (doc, buf) {
          checkArguments(
            arguments.length,
            2,
            'createICCFromBuffer',
            '(PDFNet.SDFDoc, ArrayBuffer|TypedArray)',
            [
              [doc, 'SDFDoc'],
              [buf, 'ArrayBuffer'],
            ]
          );
          var bufArrayBuffer = getArrayBuffer(buf, !1);
          return PDFNet.sendWithPromise('colorSpaceCreateICCFromBuffer', {
            doc: doc.id,
            buf: bufArrayBuffer,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorSpace, id);
          });
        };
        PDFNet.ColorSpace.getComponentNumFromObj = function (cs_type, cs_obj) {
          checkArguments(
            arguments.length,
            2,
            'getComponentNumFromObj',
            '(number, PDFNet.Obj)',
            [
              [cs_type, 'number'],
              [cs_obj, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          return PDFNet.sendWithPromise('colorSpaceGetComponentNumFromObj', {
            cs_type: cs_type,
            cs_obj: cs_obj.id,
          });
        };
        PDFNet.ColorSpace.getTypeFromObj = function (cs_obj) {
          checkArguments(
            arguments.length,
            1,
            'getTypeFromObj',
            '(PDFNet.Obj)',
            [[cs_obj, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('colorSpaceGetTypeFromObj', {
            cs_obj: cs_obj.id,
          });
        };
        PDFNet.ColorSpace.prototype.getType = function () {
          return PDFNet.sendWithPromise('ColorSpace.getType', { cs: this.id });
        };
        PDFNet.ColorSpace.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('ColorSpace.getSDFObj', {
            cs: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ColorSpace.prototype.getComponentNum = function () {
          return PDFNet.sendWithPromise('ColorSpace.getComponentNum', {
            cs: this.id,
          });
        };
        PDFNet.ColorSpace.prototype.initColor = function () {
          return PDFNet.sendWithPromise('ColorSpace.initColor', {
            cs: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.ColorSpace.prototype.initComponentRanges = function (num_comps) {
          checkArguments(
            arguments.length,
            1,
            'initComponentRanges',
            '(number)',
            [[num_comps, 'number']]
          );
          return PDFNet.sendWithPromise('ColorSpace.initComponentRanges', {
            cs: this.id,
            num_comps: num_comps,
          });
        };
        PDFNet.ColorSpace.prototype.convert2Gray = function (in_color) {
          checkArguments(
            arguments.length,
            1,
            'convert2Gray',
            '(PDFNet.ColorPt)',
            [[in_color, 'Object', PDFNet.ColorPt, 'ColorPt']]
          );
          return PDFNet.sendWithPromise('ColorSpace.convert2Gray', {
            cs: this.id,
            in_color: in_color.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.ColorSpace.prototype.convert2RGB = function (in_color) {
          checkArguments(
            arguments.length,
            1,
            'convert2RGB',
            '(PDFNet.ColorPt)',
            [[in_color, 'Object', PDFNet.ColorPt, 'ColorPt']]
          );
          return PDFNet.sendWithPromise('ColorSpace.convert2RGB', {
            cs: this.id,
            in_color: in_color.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.ColorSpace.prototype.convert2CMYK = function (in_color) {
          checkArguments(
            arguments.length,
            1,
            'convert2CMYK',
            '(PDFNet.ColorPt)',
            [[in_color, 'Object', PDFNet.ColorPt, 'ColorPt']]
          );
          return PDFNet.sendWithPromise('ColorSpace.convert2CMYK', {
            cs: this.id,
            in_color: in_color.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.ColorSpace.prototype.getAlternateColorSpace = function () {
          return PDFNet.sendWithPromise('ColorSpace.getAlternateColorSpace', {
            cs: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorSpace, id);
          });
        };
        PDFNet.ColorSpace.prototype.getBaseColorSpace = function () {
          return PDFNet.sendWithPromise('ColorSpace.getBaseColorSpace', {
            cs: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorSpace, id);
          });
        };
        PDFNet.ColorSpace.prototype.getHighVal = function () {
          return PDFNet.sendWithPromise('ColorSpace.getHighVal', {
            cs: this.id,
          });
        };
        PDFNet.ColorSpace.prototype.getLookupTable = function () {
          return PDFNet.sendWithPromise('ColorSpace.getLookupTable', {
            cs: this.id,
          });
        };
        PDFNet.ColorSpace.prototype.getBaseColor = function (color_idx) {
          checkArguments(arguments.length, 1, 'getBaseColor', '(number)', [
            [color_idx, 'number'],
          ]);
          return PDFNet.sendWithPromise('ColorSpace.getBaseColor', {
            cs: this.id,
            color_idx: color_idx,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.ColorSpace.prototype.getTintFunction = function () {
          return PDFNet.sendWithPromise('ColorSpace.getTintFunction', {
            cs: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Function, id);
          });
        };
        PDFNet.ColorSpace.prototype.isAll = function () {
          return PDFNet.sendWithPromise('ColorSpace.isAll', { cs: this.id });
        };
        PDFNet.ColorSpace.prototype.isNone = function () {
          return PDFNet.sendWithPromise('ColorSpace.isNone', { cs: this.id });
        };
        PDFNet.ContentReplacer.create = function () {
          return PDFNet.sendWithPromise('contentReplacerCreate', {}).then(
            function (id) {
              return createDestroyableObj(PDFNet.ContentReplacer, id);
            }
          );
        };
        PDFNet.ContentReplacer.prototype.addImage = function (
          target_region,
          replacement_image
        ) {
          checkArguments(
            arguments.length,
            2,
            'addImage',
            '(PDFNet.Rect, PDFNet.Obj)',
            [
              [target_region, 'Structure', PDFNet.Rect, 'Rect'],
              [replacement_image, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          checkParamsYieldFunction('addImage', [[target_region, 0]]);
          return PDFNet.sendWithPromise('ContentReplacer.addImage', {
            cr: this.id,
            target_region: target_region,
            replacement_image: replacement_image.id,
          });
        };
        PDFNet.ContentReplacer.prototype.addText = function (
          target_region,
          replacement_text
        ) {
          checkArguments(
            arguments.length,
            2,
            'addText',
            '(PDFNet.Rect, string)',
            [
              [target_region, 'Structure', PDFNet.Rect, 'Rect'],
              [replacement_text, 'string'],
            ]
          );
          checkParamsYieldFunction('addText', [[target_region, 0]]);
          return PDFNet.sendWithPromise('ContentReplacer.addText', {
            cr: this.id,
            target_region: target_region,
            replacement_text: replacement_text,
          });
        };
        PDFNet.ContentReplacer.prototype.addString = function (
          template_text,
          replacement_text
        ) {
          checkArguments(arguments.length, 2, 'addString', '(string, string)', [
            [template_text, 'string'],
            [replacement_text, 'string'],
          ]);
          return PDFNet.sendWithPromise('ContentReplacer.addString', {
            cr: this.id,
            template_text: template_text,
            replacement_text: replacement_text,
          });
        };
        PDFNet.ContentReplacer.prototype.setMatchStrings = function (
          start_str,
          end_str
        ) {
          checkArguments(
            arguments.length,
            2,
            'setMatchStrings',
            '(string, string)',
            [
              [start_str, 'string'],
              [end_str, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('ContentReplacer.setMatchStrings', {
            cr: this.id,
            start_str: start_str,
            end_str: end_str,
          });
        };
        PDFNet.ContentReplacer.prototype.process = function (page) {
          checkArguments(arguments.length, 1, 'process', '(PDFNet.Page)', [
            [page, 'Object', PDFNet.Page, 'Page'],
          ]);
          return PDFNet.sendWithPromise('ContentReplacer.process', {
            cr: this.id,
            page: page.id,
          });
        };
        PDFNet.Reflow.prototype.getHtml = function () {
          return PDFNet.sendWithPromise('Reflow.getHtml', { self: this.id });
        };
        PDFNet.Reflow.prototype.getAnnot = function (in_id) {
          checkArguments(arguments.length, 1, 'getAnnot', '(string)', [
            [in_id, 'string'],
          ]);
          return PDFNet.sendWithPromise('Reflow.getAnnot', {
            self: this.id,
            in_id: in_id,
          });
        };
        PDFNet.Reflow.prototype.setAnnot = function (in_json) {
          checkArguments(arguments.length, 1, 'setAnnot', '(string)', [
            [in_json, 'string'],
          ]);
          return PDFNet.sendWithPromise('Reflow.setAnnot', {
            self: this.id,
            in_json: in_json,
          });
        };
        PDFNet.Reflow.prototype.setIncludeImages = function (include) {
          checkArguments(arguments.length, 1, 'setIncludeImages', '(boolean)', [
            [include, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Reflow.setIncludeImages', {
            self: this.id,
            include: include,
          });
        };
        PDFNet.Reflow.prototype.setHTMLOutputTextMarkup = function (include) {
          checkArguments(
            arguments.length,
            1,
            'setHTMLOutputTextMarkup',
            '(boolean)',
            [[include, 'boolean']]
          );
          return PDFNet.sendWithPromise('Reflow.setHTMLOutputTextMarkup', {
            self: this.id,
            include: include,
          });
        };
        PDFNet.Reflow.prototype.setMessageWhenNoReflowContent = function (
          content
        ) {
          checkArguments(
            arguments.length,
            1,
            'setMessageWhenNoReflowContent',
            '(string)',
            [[content, 'string']]
          );
          return PDFNet.sendWithPromise(
            'Reflow.setMessageWhenNoReflowContent',
            { self: this.id, content: content }
          );
        };
        PDFNet.Reflow.prototype.setMessageWhenReflowFailed = function (
          content
        ) {
          checkArguments(
            arguments.length,
            1,
            'setMessageWhenReflowFailed',
            '(string)',
            [[content, 'string']]
          );
          return PDFNet.sendWithPromise('Reflow.setMessageWhenReflowFailed', {
            self: this.id,
            content: content,
          });
        };
        PDFNet.Reflow.prototype.setHideBackgroundImages = function (
          hide_background_images
        ) {
          checkArguments(
            arguments.length,
            1,
            'setHideBackgroundImages',
            '(boolean)',
            [[hide_background_images, 'boolean']]
          );
          return PDFNet.sendWithPromise('Reflow.setHideBackgroundImages', {
            self: this.id,
            hide_background_images: hide_background_images,
          });
        };
        PDFNet.Reflow.prototype.setHideImagesUnderText = function (
          hide_images_under_text
        ) {
          checkArguments(
            arguments.length,
            1,
            'setHideImagesUnderText',
            '(boolean)',
            [[hide_images_under_text, 'boolean']]
          );
          return PDFNet.sendWithPromise('Reflow.setHideImagesUnderText', {
            self: this.id,
            hide_images_under_text: hide_images_under_text,
          });
        };
        PDFNet.Reflow.prototype.setHideImagesUnderInvisibleText = function (
          hide_images_under_invisible_text
        ) {
          checkArguments(
            arguments.length,
            1,
            'setHideImagesUnderInvisibleText',
            '(boolean)',
            [[hide_images_under_invisible_text, 'boolean']]
          );
          return PDFNet.sendWithPromise(
            'Reflow.setHideImagesUnderInvisibleText',
            {
              self: this.id,
              hide_images_under_invisible_text:
                hide_images_under_invisible_text,
            }
          );
        };
        PDFNet.Reflow.prototype.setDoNotReflowTextOverImages = function (
          do_not_reflow_text_over_images
        ) {
          checkArguments(
            arguments.length,
            1,
            'setDoNotReflowTextOverImages',
            '(boolean)',
            [[do_not_reflow_text_over_images, 'boolean']]
          );
          return PDFNet.sendWithPromise('Reflow.setDoNotReflowTextOverImages', {
            self: this.id,
            do_not_reflow_text_over_images: do_not_reflow_text_over_images,
          });
        };
        PDFNet.Reflow.prototype.setFontOverrideName = function (font_family) {
          checkArguments(
            arguments.length,
            1,
            'setFontOverrideName',
            '(string)',
            [[font_family, 'string']]
          );
          return PDFNet.sendWithPromise('Reflow.setFontOverrideName', {
            self: this.id,
            font_family: font_family,
          });
        };
        PDFNet.Reflow.prototype.setCustomStyles = function (styles) {
          checkArguments(arguments.length, 1, 'setCustomStyles', '(string)', [
            [styles, 'string'],
          ]);
          return PDFNet.sendWithPromise('Reflow.setCustomStyles', {
            self: this.id,
            styles: styles,
          });
        };
        PDFNet.Reflow.prototype.setIncludeBBoxForRecognizedZones = function (
          include
        ) {
          checkArguments(
            arguments.length,
            1,
            'setIncludeBBoxForRecognizedZones',
            '(boolean)',
            [[include, 'boolean']]
          );
          return PDFNet.sendWithPromise(
            'Reflow.setIncludeBBoxForRecognizedZones',
            { self: this.id, include: include }
          );
        };
        PDFNet.Convert.fromXpsMem = function (in_pdfdoc, buf) {
          checkArguments(
            arguments.length,
            2,
            'fromXpsMem',
            '(PDFNet.PDFDoc, ArrayBuffer|TypedArray)',
            [
              [in_pdfdoc, 'PDFDoc'],
              [buf, 'ArrayBuffer'],
            ]
          );
          var bufArrayBuffer = getArrayBuffer(buf, !1);
          return PDFNet.sendWithPromise('convertFromXpsMem', {
            in_pdfdoc: in_pdfdoc.id,
            buf: bufArrayBuffer,
          });
        };
        PDFNet.Convert.createReflow = function (in_page, json_zones) {
          checkArguments(
            arguments.length,
            2,
            'createReflow',
            '(PDFNet.Page, string)',
            [
              [in_page, 'Object', PDFNet.Page, 'Page'],
              [json_zones, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('convertCreateReflow', {
            in_page: in_page.id,
            json_zones: json_zones,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Reflow, id);
          });
        };
        PDFNet.Convert.fromTextWithBuffer = function (
          in_pdfdoc,
          fileData,
          options
        ) {
          'undefined' === typeof options && (options = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            2,
            'fromTextWithBuffer',
            '(PDFNet.PDFDoc, ArrayBuffer|TypedArray, PDFNet.Obj)',
            [
              [in_pdfdoc, 'PDFDoc'],
              [fileData, 'ArrayBuffer'],
              [options, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          fileData = getArrayBuffer(fileData, !1);
          return PDFNet.sendWithPromise('convertFromTextWithBuffer', {
            in_pdfdoc: in_pdfdoc.id,
            in_filename: fileData,
            options: options.id,
          });
        };
        PDFNet.Convert.toXpsBuffer = function (in_pdfdoc, options$jscomp$0) {
          'undefined' === typeof options$jscomp$0 &&
            (options$jscomp$0 = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            1,
            'toXpsBuffer',
            '(PDFNet.PDFDoc, PDFNet.Obj)',
            [
              [in_pdfdoc, 'PDFDoc'],
              [
                options$jscomp$0,
                'OptionObject',
                PDFNet.Obj,
                'Obj',
                'PDFNet.Convert.XPSOutputOptions',
              ],
            ]
          );
          options$jscomp$0 = getOptsObjPromise(
            options$jscomp$0,
            'PDFNet.Convert.XPSOutputOptions'
          );
          return options$jscomp$0.then(function (options) {
            return PDFNet.sendWithPromise('convertToXpsBuffer', {
              in_pdfdoc: in_pdfdoc.id,
              options: options.id,
            }).then(function (id) {
              return new Uint8Array(id);
            });
          });
        };
        PDFNet.Convert.fileToXpsWithBuffer = function (
          fileData,
          fileType,
          options$jscomp$0
        ) {
          'undefined' === typeof options$jscomp$0 &&
            (options$jscomp$0 = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            2,
            'fileToXpsWithBuffer',
            '(ArrayBuffer|TypedArray, string, PDFNet.Obj)',
            [
              [fileData, 'ArrayBuffer'],
              [fileType, 'string'],
              [
                options$jscomp$0,
                'OptionObject',
                PDFNet.Obj,
                'Obj',
                'PDFNet.Convert.XPSOutputOptions',
              ],
            ]
          );
          fileType.startsWith('.') || (fileType = '.' + fileType);
          fileData = getArrayBuffer(fileData, !1);
          options$jscomp$0 = getOptsObjPromise(
            options$jscomp$0,
            'PDFNet.Convert.XPSOutputOptions'
          );
          return options$jscomp$0.then(function (options) {
            return PDFNet.sendWithPromise('convertFileToXpsWithBuffer', {
              in_inputFilename: fileData,
              in_inputFilename_extension: fileType,
              options: options.id,
            }).then(function (id) {
              return new Uint8Array(id);
            });
          });
        };
        PDFNet.Convert.fileToXodWithBuffer = function (
          fileData,
          fileType,
          options$jscomp$0
        ) {
          'undefined' === typeof options$jscomp$0 &&
            (options$jscomp$0 = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            2,
            'fileToXodWithBuffer',
            '(ArrayBuffer|TypedArray, string, PDFNet.Obj)',
            [
              [fileData, 'ArrayBuffer'],
              [fileType, 'string'],
              [
                options$jscomp$0,
                'OptionObject',
                PDFNet.Obj,
                'Obj',
                'PDFNet.Convert.XODOutputOptions',
              ],
            ]
          );
          fileType.startsWith('.') || (fileType = '.' + fileType);
          fileData = getArrayBuffer(fileData, !1);
          options$jscomp$0 = getOptsObjPromise(
            options$jscomp$0,
            'PDFNet.Convert.XODOutputOptions'
          );
          return options$jscomp$0.then(function (options) {
            return PDFNet.sendWithPromise('convertFileToXodWithBuffer', {
              in_filename: fileData,
              in_filename_extension: fileType,
              options: options.id,
            }).then(function (id) {
              return new Uint8Array(id);
            });
          });
        };
        PDFNet.Convert.toXodBuffer = function (in_pdfdoc, options$jscomp$0) {
          'undefined' === typeof options$jscomp$0 &&
            (options$jscomp$0 = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            1,
            'toXodBuffer',
            '(PDFNet.PDFDoc, PDFNet.Obj)',
            [
              [in_pdfdoc, 'PDFDoc'],
              [
                options$jscomp$0,
                'OptionObject',
                PDFNet.Obj,
                'Obj',
                'PDFNet.Convert.XODOutputOptions',
              ],
            ]
          );
          options$jscomp$0 = getOptsObjPromise(
            options$jscomp$0,
            'PDFNet.Convert.XODOutputOptions'
          );
          return options$jscomp$0.then(function (options) {
            return PDFNet.sendWithPromise('convertToXodBuffer', {
              in_pdfdoc: in_pdfdoc.id,
              options: options.id,
            }).then(function (id) {
              return new Uint8Array(id);
            });
          });
        };
        PDFNet.ConversionMonitor.prototype.next = function () {
          return PDFNet.sendWithPromise('ConversionMonitor.next', {
            conversionMonitor: this.id,
          });
        };
        PDFNet.ConversionMonitor.prototype.ready = function () {
          return PDFNet.sendWithPromise('ConversionMonitor.ready', {
            conversionMonitor: this.id,
          });
        };
        PDFNet.ConversionMonitor.prototype.progress = function () {
          return PDFNet.sendWithPromise('ConversionMonitor.progress', {
            conversionMonitor: this.id,
          });
        };
        PDFNet.ConversionMonitor.prototype.filter = function () {
          return PDFNet.sendWithPromise('ConversionMonitor.filter', {
            conversionMonitor: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Filter, id);
          });
        };
        PDFNet.Convert.officeToPdfWithFilter = function (
          in_pdfdoc,
          in_stream,
          options$jscomp$0
        ) {
          'undefined' === typeof options$jscomp$0 &&
            (options$jscomp$0 = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            2,
            'officeToPdfWithFilter',
            '(PDFNet.PDFDoc, PDFNet.Filter, PDFNet.Obj)',
            [
              [in_pdfdoc, 'PDFDoc'],
              [in_stream, 'Object', PDFNet.Filter, 'Filter'],
              [
                options$jscomp$0,
                'OptionObject',
                PDFNet.Obj,
                'Obj',
                'PDFNet.Convert.ConversionOptions',
              ],
            ]
          );
          0 != in_stream.id && avoidCleanup(in_stream.id);
          options$jscomp$0 = getOptsObjPromise(
            options$jscomp$0,
            'PDFNet.Convert.ConversionOptions'
          );
          return options$jscomp$0.then(function (options) {
            return PDFNet.sendWithPromise('convertOfficeToPdfWithFilter', {
              in_pdfdoc: in_pdfdoc.id,
              no_own_in_stream: in_stream.id,
              options: options.id,
            });
          });
        };
        PDFNet.Convert.toPdfWithBuffer = function (
          in_pdfdoc,
          fileData,
          fileType
        ) {
          checkArguments(
            arguments.length,
            3,
            'toPdfWithBuffer',
            '(PDFNet.PDFDoc, ArrayBuffer|TypedArray, string)',
            [
              [in_pdfdoc, 'PDFDoc'],
              [fileData, 'ArrayBuffer'],
              [fileType, 'string'],
            ]
          );
          fileType.startsWith('.') || (fileType = '.' + fileType);
          fileData = getArrayBuffer(fileData, !1);
          return PDFNet.sendWithPromise('convertToPdfWithBuffer', {
            in_pdfdoc: in_pdfdoc.id,
            in_filename: fileData,
            in_filename_extension: fileType,
          });
        };
        PDFNet.Convert.fromTiff = function (in_pdfdoc, in_data) {
          checkArguments(
            arguments.length,
            2,
            'fromTiff',
            '(PDFNet.PDFDoc, PDFNet.Filter)',
            [
              [in_pdfdoc, 'PDFDoc'],
              [in_data, 'Object', PDFNet.Filter, 'Filter'],
            ]
          );
          return PDFNet.sendWithPromise('convertFromTiff', {
            in_pdfdoc: in_pdfdoc.id,
            in_data: in_data.id,
          });
        };
        PDFNet.Convert.pageToHtml = function (page) {
          checkArguments(arguments.length, 1, 'pageToHtml', '(PDFNet.Page)', [
            [page, 'Object', PDFNet.Page, 'Page'],
          ]);
          return PDFNet.sendWithPromise('convertPageToHtml', { page: page.id });
        };
        PDFNet.Convert.pageToHtmlZoned = function (page, json_zones) {
          checkArguments(
            arguments.length,
            2,
            'pageToHtmlZoned',
            '(PDFNet.Page, string)',
            [
              [page, 'Object', PDFNet.Page, 'Page'],
              [json_zones, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('convertPageToHtmlZoned', {
            page: page.id,
            json_zones: json_zones,
          });
        };
        PDFNet.Convert.fileToTiffWithBuffer = function (
          fileData,
          fileType,
          options$jscomp$0
        ) {
          'undefined' === typeof options$jscomp$0 &&
            (options$jscomp$0 = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            2,
            'fileToTiffWithBuffer',
            '(ArrayBuffer|TypedArray, string, PDFNet.Obj)',
            [
              [fileData, 'ArrayBuffer'],
              [fileType, 'string'],
              [
                options$jscomp$0,
                'OptionObject',
                PDFNet.Obj,
                'Obj',
                'PDFNet.Convert.TiffOutputOptions',
              ],
            ]
          );
          fileType.startsWith('.') || (fileType = '.' + fileType);
          fileData = getArrayBuffer(fileData, !1);
          options$jscomp$0 = getOptsObjPromise(
            options$jscomp$0,
            'PDFNet.Convert.TiffOutputOptions'
          );
          return options$jscomp$0.then(function (options) {
            return PDFNet.sendWithPromise('convertFileToTiffWithBuffer', {
              in_filename: fileData,
              in_filename_extension: fileType,
              options: options.id,
            }).then(function (id) {
              return new Uint8Array(id);
            });
          });
        };
        PDFNet.Convert.toTiffBuffer = function (in_pdfdoc, options$jscomp$0) {
          'undefined' === typeof options$jscomp$0 &&
            (options$jscomp$0 = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            1,
            'toTiffBuffer',
            '(PDFNet.PDFDoc, PDFNet.Obj)',
            [
              [in_pdfdoc, 'PDFDoc'],
              [
                options$jscomp$0,
                'OptionObject',
                PDFNet.Obj,
                'Obj',
                'PDFNet.Convert.TiffOutputOptions',
              ],
            ]
          );
          options$jscomp$0 = getOptsObjPromise(
            options$jscomp$0,
            'PDFNet.Convert.TiffOutputOptions'
          );
          return options$jscomp$0.then(function (options) {
            return PDFNet.sendWithPromise('convertToTiffBuffer', {
              in_pdfdoc: in_pdfdoc.id,
              options: options.id,
            }).then(function (id) {
              return new Uint8Array(id);
            });
          });
        };
        PDFNet.Date.init = function (year, month, day, hour, minute, second) {
          checkArguments(
            arguments.length,
            6,
            'init',
            '(number, number, number, number, number, number)',
            [
              [year, 'number'],
              [month, 'number'],
              [day, 'number'],
              [hour, 'number'],
              [minute, 'number'],
              [second, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('dateInit', {
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            second: second,
          }).then(function (id) {
            return new PDFNet.Date(id);
          });
        };
        PDFNet.Date.prototype.isValid = function () {
          checkThisYieldFunction('isValid', this.yieldFunction);
          return PDFNet.sendWithPromise('Date.isValid', { date: this });
        };
        PDFNet.Date.prototype.attach = function (d) {
          checkArguments(arguments.length, 1, 'attach', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          checkThisYieldFunction('attach', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Date.attach';
          return PDFNet.sendWithPromise('Date.attach', {
            date: this,
            d: d.id,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Date.prototype.update = function (d) {
          'undefined' === typeof d && (d = new PDFNet.Obj('__null'));
          checkArguments(arguments.length, 0, 'update', '(PDFNet.Obj)', [
            [d, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          checkThisYieldFunction('update', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Date.update';
          return PDFNet.sendWithPromise('Date.update', {
            date: this,
            d: d.id,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.date, me);
            return id.result;
          });
        };
        PDFNet.Date.prototype.setCurrentTime = function () {
          checkThisYieldFunction('setCurrentTime', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Date.setCurrentTime';
          return PDFNet.sendWithPromise('Date.setCurrentTime', {
            date: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Destination.createXYZ = function (page, left, top, zoom) {
          checkArguments(
            arguments.length,
            4,
            'createXYZ',
            '(PDFNet.Page, number, number, number)',
            [
              [page, 'Object', PDFNet.Page, 'Page'],
              [left, 'number'],
              [top, 'number'],
              [zoom, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('destinationCreateXYZ', {
            page: page.id,
            left: left,
            top: top,
            zoom: zoom,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Destination, id);
          });
        };
        PDFNet.Destination.createFit = function (page) {
          checkArguments(arguments.length, 1, 'createFit', '(PDFNet.Page)', [
            [page, 'Object', PDFNet.Page, 'Page'],
          ]);
          return PDFNet.sendWithPromise('destinationCreateFit', {
            page: page.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Destination, id);
          });
        };
        PDFNet.Destination.createFitH = function (page, top) {
          checkArguments(
            arguments.length,
            2,
            'createFitH',
            '(PDFNet.Page, number)',
            [
              [page, 'Object', PDFNet.Page, 'Page'],
              [top, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('destinationCreateFitH', {
            page: page.id,
            top: top,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Destination, id);
          });
        };
        PDFNet.Destination.createFitV = function (page, left) {
          checkArguments(
            arguments.length,
            2,
            'createFitV',
            '(PDFNet.Page, number)',
            [
              [page, 'Object', PDFNet.Page, 'Page'],
              [left, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('destinationCreateFitV', {
            page: page.id,
            left: left,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Destination, id);
          });
        };
        PDFNet.Destination.createFitR = function (
          page,
          left,
          bottom,
          right,
          top
        ) {
          checkArguments(
            arguments.length,
            5,
            'createFitR',
            '(PDFNet.Page, number, number, number, number)',
            [
              [page, 'Object', PDFNet.Page, 'Page'],
              [left, 'number'],
              [bottom, 'number'],
              [right, 'number'],
              [top, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('destinationCreateFitR', {
            page: page.id,
            left: left,
            bottom: bottom,
            right: right,
            top: top,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Destination, id);
          });
        };
        PDFNet.Destination.createFitB = function (page) {
          checkArguments(arguments.length, 1, 'createFitB', '(PDFNet.Page)', [
            [page, 'Object', PDFNet.Page, 'Page'],
          ]);
          return PDFNet.sendWithPromise('destinationCreateFitB', {
            page: page.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Destination, id);
          });
        };
        PDFNet.Destination.createFitBH = function (page, top) {
          checkArguments(
            arguments.length,
            2,
            'createFitBH',
            '(PDFNet.Page, number)',
            [
              [page, 'Object', PDFNet.Page, 'Page'],
              [top, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('destinationCreateFitBH', {
            page: page.id,
            top: top,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Destination, id);
          });
        };
        PDFNet.Destination.createFitBV = function (page, left) {
          checkArguments(
            arguments.length,
            2,
            'createFitBV',
            '(PDFNet.Page, number)',
            [
              [page, 'Object', PDFNet.Page, 'Page'],
              [left, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('destinationCreateFitBV', {
            page: page.id,
            left: left,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Destination, id);
          });
        };
        PDFNet.Destination.create = function (dest) {
          checkArguments(arguments.length, 1, 'create', '(PDFNet.Obj)', [
            [dest, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('destinationCreate', {
            dest: dest.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Destination, id);
          });
        };
        PDFNet.Destination.prototype.copy = function () {
          return PDFNet.sendWithPromise('Destination.copy', {
            d: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Destination, id);
          });
        };
        PDFNet.Destination.prototype.isValid = function () {
          return PDFNet.sendWithPromise('Destination.isValid', {
            dest: this.id,
          });
        };
        PDFNet.Destination.prototype.getFitType = function () {
          return PDFNet.sendWithPromise('Destination.getFitType', {
            dest: this.id,
          });
        };
        PDFNet.Destination.prototype.getPage = function () {
          return PDFNet.sendWithPromise('Destination.getPage', {
            dest: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Page, id);
          });
        };
        PDFNet.Destination.prototype.setPage = function (page) {
          checkArguments(arguments.length, 1, 'setPage', '(PDFNet.Page)', [
            [page, 'Object', PDFNet.Page, 'Page'],
          ]);
          return PDFNet.sendWithPromise('Destination.setPage', {
            dest: this.id,
            page: page.id,
          });
        };
        PDFNet.Destination.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('Destination.getSDFObj', {
            dest: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Destination.prototype.getExplicitDestObj = function () {
          return PDFNet.sendWithPromise('Destination.getExplicitDestObj', {
            dest: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.GState.prototype.getTransform = function () {
          return PDFNet.sendWithPromise('GState.getTransform', {
            gs: this.id,
          }).then(function (id) {
            return new PDFNet.Matrix2D(id);
          });
        };
        PDFNet.GState.prototype.getStrokeColorSpace = function () {
          return PDFNet.sendWithPromise('GState.getStrokeColorSpace', {
            gs: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorSpace, id);
          });
        };
        PDFNet.GState.prototype.getFillColorSpace = function () {
          return PDFNet.sendWithPromise('GState.getFillColorSpace', {
            gs: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorSpace, id);
          });
        };
        PDFNet.GState.prototype.getStrokeColor = function () {
          return PDFNet.sendWithPromise('GState.getStrokeColor', {
            gs: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.GState.prototype.getStrokePattern = function () {
          return PDFNet.sendWithPromise('GState.getStrokePattern', {
            gs: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.PatternColor, id);
          });
        };
        PDFNet.GState.prototype.getFillColor = function () {
          return PDFNet.sendWithPromise('GState.getFillColor', {
            gs: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.GState.prototype.getFillPattern = function () {
          return PDFNet.sendWithPromise('GState.getFillPattern', {
            gs: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.PatternColor, id);
          });
        };
        PDFNet.GState.prototype.getFlatness = function () {
          return PDFNet.sendWithPromise('GState.getFlatness', { gs: this.id });
        };
        PDFNet.GState.prototype.getLineCap = function () {
          return PDFNet.sendWithPromise('GState.getLineCap', { gs: this.id });
        };
        PDFNet.GState.prototype.getLineJoin = function () {
          return PDFNet.sendWithPromise('GState.getLineJoin', { gs: this.id });
        };
        PDFNet.GState.prototype.getLineWidth = function () {
          return PDFNet.sendWithPromise('GState.getLineWidth', { gs: this.id });
        };
        PDFNet.GState.prototype.getMiterLimit = function () {
          return PDFNet.sendWithPromise('GState.getMiterLimit', {
            gs: this.id,
          });
        };
        PDFNet.GState.prototype.getPhase = function () {
          return PDFNet.sendWithPromise('GState.getPhase', { gs: this.id });
        };
        PDFNet.GState.prototype.getCharSpacing = function () {
          return PDFNet.sendWithPromise('GState.getCharSpacing', {
            gs: this.id,
          });
        };
        PDFNet.GState.prototype.getWordSpacing = function () {
          return PDFNet.sendWithPromise('GState.getWordSpacing', {
            gs: this.id,
          });
        };
        PDFNet.GState.prototype.getHorizontalScale = function () {
          return PDFNet.sendWithPromise('GState.getHorizontalScale', {
            gs: this.id,
          });
        };
        PDFNet.GState.prototype.getLeading = function () {
          return PDFNet.sendWithPromise('GState.getLeading', { gs: this.id });
        };
        PDFNet.GState.prototype.getFont = function () {
          return PDFNet.sendWithPromise('GState.getFont', { gs: this.id }).then(
            function (id) {
              return createDestroyableObj(PDFNet.Font, id);
            }
          );
        };
        PDFNet.GState.prototype.getFontSize = function () {
          return PDFNet.sendWithPromise('GState.getFontSize', { gs: this.id });
        };
        PDFNet.GState.prototype.getTextRenderMode = function () {
          return PDFNet.sendWithPromise('GState.getTextRenderMode', {
            gs: this.id,
          });
        };
        PDFNet.GState.prototype.getTextRise = function () {
          return PDFNet.sendWithPromise('GState.getTextRise', { gs: this.id });
        };
        PDFNet.GState.prototype.isTextKnockout = function () {
          return PDFNet.sendWithPromise('GState.isTextKnockout', {
            gs: this.id,
          });
        };
        PDFNet.GState.prototype.getRenderingIntent = function () {
          return PDFNet.sendWithPromise('GState.getRenderingIntent', {
            gs: this.id,
          });
        };
        PDFNet.GState.getRenderingIntentType = function (name) {
          checkArguments(
            arguments.length,
            1,
            'getRenderingIntentType',
            '(string)',
            [[name, 'string']]
          );
          return PDFNet.sendWithPromise('gStateGetRenderingIntentType', {
            name: name,
          });
        };
        PDFNet.GState.prototype.getBlendMode = function () {
          return PDFNet.sendWithPromise('GState.getBlendMode', { gs: this.id });
        };
        PDFNet.GState.prototype.getFillOpacity = function () {
          return PDFNet.sendWithPromise('GState.getFillOpacity', {
            gs: this.id,
          });
        };
        PDFNet.GState.prototype.getStrokeOpacity = function () {
          return PDFNet.sendWithPromise('GState.getStrokeOpacity', {
            gs: this.id,
          });
        };
        PDFNet.GState.prototype.getAISFlag = function () {
          return PDFNet.sendWithPromise('GState.getAISFlag', { gs: this.id });
        };
        PDFNet.GState.prototype.getSoftMask = function () {
          return PDFNet.sendWithPromise('GState.getSoftMask', {
            gs: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.GState.prototype.getSoftMaskTransform = function () {
          return PDFNet.sendWithPromise('GState.getSoftMaskTransform', {
            gs: this.id,
          }).then(function (id) {
            return new PDFNet.Matrix2D(id);
          });
        };
        PDFNet.GState.prototype.getStrokeOverprint = function () {
          return PDFNet.sendWithPromise('GState.getStrokeOverprint', {
            gs: this.id,
          });
        };
        PDFNet.GState.prototype.getFillOverprint = function () {
          return PDFNet.sendWithPromise('GState.getFillOverprint', {
            gs: this.id,
          });
        };
        PDFNet.GState.prototype.getOverprintMode = function () {
          return PDFNet.sendWithPromise('GState.getOverprintMode', {
            gs: this.id,
          });
        };
        PDFNet.GState.prototype.getAutoStrokeAdjust = function () {
          return PDFNet.sendWithPromise('GState.getAutoStrokeAdjust', {
            gs: this.id,
          });
        };
        PDFNet.GState.prototype.getSmoothnessTolerance = function () {
          return PDFNet.sendWithPromise('GState.getSmoothnessTolerance', {
            gs: this.id,
          });
        };
        PDFNet.GState.prototype.getTransferFunct = function () {
          return PDFNet.sendWithPromise('GState.getTransferFunct', {
            gs: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.GState.prototype.getBlackGenFunct = function () {
          return PDFNet.sendWithPromise('GState.getBlackGenFunct', {
            gs: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.GState.prototype.getUCRFunct = function () {
          return PDFNet.sendWithPromise('GState.getUCRFunct', {
            gs: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.GState.prototype.getHalftone = function () {
          return PDFNet.sendWithPromise('GState.getHalftone', {
            gs: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.GState.prototype.setTransformMatrix = function (mtx) {
          checkArguments(
            arguments.length,
            1,
            'setTransformMatrix',
            '(PDFNet.Matrix2D)',
            [[mtx, 'Structure', PDFNet.Matrix2D, 'Matrix2D']]
          );
          checkParamsYieldFunction('setTransformMatrix', [[mtx, 0]]);
          return PDFNet.sendWithPromise('GState.setTransformMatrix', {
            gs: this.id,
            mtx: mtx,
          });
        };
        PDFNet.GState.prototype.setTransform = function (a, b, c, d, h, v) {
          checkArguments(
            arguments.length,
            6,
            'setTransform',
            '(number, number, number, number, number, number)',
            [
              [a, 'number'],
              [b, 'number'],
              [c, 'number'],
              [d, 'number'],
              [h, 'number'],
              [v, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('GState.setTransform', {
            gs: this.id,
            a: a,
            b: b,
            c: c,
            d: d,
            h: h,
            v: v,
          });
        };
        PDFNet.GState.prototype.concatMatrix = function (mtx) {
          checkArguments(
            arguments.length,
            1,
            'concatMatrix',
            '(PDFNet.Matrix2D)',
            [[mtx, 'Structure', PDFNet.Matrix2D, 'Matrix2D']]
          );
          checkParamsYieldFunction('concatMatrix', [[mtx, 0]]);
          return PDFNet.sendWithPromise('GState.concatMatrix', {
            gs: this.id,
            mtx: mtx,
          });
        };
        PDFNet.GState.prototype.concat = function (a, b, c, d, h, v) {
          checkArguments(
            arguments.length,
            6,
            'concat',
            '(number, number, number, number, number, number)',
            [
              [a, 'number'],
              [b, 'number'],
              [c, 'number'],
              [d, 'number'],
              [h, 'number'],
              [v, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('GState.concat', {
            gs: this.id,
            a: a,
            b: b,
            c: c,
            d: d,
            h: h,
            v: v,
          });
        };
        PDFNet.GState.prototype.setStrokeColorSpace = function (cs) {
          checkArguments(
            arguments.length,
            1,
            'setStrokeColorSpace',
            '(PDFNet.ColorSpace)',
            [[cs, 'Object', PDFNet.ColorSpace, 'ColorSpace']]
          );
          return PDFNet.sendWithPromise('GState.setStrokeColorSpace', {
            gs: this.id,
            cs: cs.id,
          });
        };
        PDFNet.GState.prototype.setFillColorSpace = function (cs) {
          checkArguments(
            arguments.length,
            1,
            'setFillColorSpace',
            '(PDFNet.ColorSpace)',
            [[cs, 'Object', PDFNet.ColorSpace, 'ColorSpace']]
          );
          return PDFNet.sendWithPromise('GState.setFillColorSpace', {
            gs: this.id,
            cs: cs.id,
          });
        };
        PDFNet.GState.prototype.setStrokeColorWithColorPt = function (c) {
          checkArguments(
            arguments.length,
            1,
            'setStrokeColorWithColorPt',
            '(PDFNet.ColorPt)',
            [[c, 'Object', PDFNet.ColorPt, 'ColorPt']]
          );
          return PDFNet.sendWithPromise('GState.setStrokeColorWithColorPt', {
            gs: this.id,
            c: c.id,
          });
        };
        PDFNet.GState.prototype.setStrokeColorWithPattern = function (pattern) {
          checkArguments(
            arguments.length,
            1,
            'setStrokeColorWithPattern',
            '(PDFNet.PatternColor)',
            [[pattern, 'Object', PDFNet.PatternColor, 'PatternColor']]
          );
          return PDFNet.sendWithPromise('GState.setStrokeColorWithPattern', {
            gs: this.id,
            pattern: pattern.id,
          });
        };
        PDFNet.GState.prototype.setStrokeColor = function (pattern, c) {
          checkArguments(
            arguments.length,
            2,
            'setStrokeColor',
            '(PDFNet.PatternColor, PDFNet.ColorPt)',
            [
              [pattern, 'Object', PDFNet.PatternColor, 'PatternColor'],
              [c, 'Object', PDFNet.ColorPt, 'ColorPt'],
            ]
          );
          return PDFNet.sendWithPromise('GState.setStrokeColor', {
            gs: this.id,
            pattern: pattern.id,
            c: c.id,
          });
        };
        PDFNet.GState.prototype.setFillColorWithColorPt = function (c) {
          checkArguments(
            arguments.length,
            1,
            'setFillColorWithColorPt',
            '(PDFNet.ColorPt)',
            [[c, 'Object', PDFNet.ColorPt, 'ColorPt']]
          );
          return PDFNet.sendWithPromise('GState.setFillColorWithColorPt', {
            gs: this.id,
            c: c.id,
          });
        };
        PDFNet.GState.prototype.setFillColorWithPattern = function (pattern) {
          checkArguments(
            arguments.length,
            1,
            'setFillColorWithPattern',
            '(PDFNet.PatternColor)',
            [[pattern, 'Object', PDFNet.PatternColor, 'PatternColor']]
          );
          return PDFNet.sendWithPromise('GState.setFillColorWithPattern', {
            gs: this.id,
            pattern: pattern.id,
          });
        };
        PDFNet.GState.prototype.setFillColor = function (pattern, c) {
          checkArguments(
            arguments.length,
            2,
            'setFillColor',
            '(PDFNet.PatternColor, PDFNet.ColorPt)',
            [
              [pattern, 'Object', PDFNet.PatternColor, 'PatternColor'],
              [c, 'Object', PDFNet.ColorPt, 'ColorPt'],
            ]
          );
          return PDFNet.sendWithPromise('GState.setFillColor', {
            gs: this.id,
            pattern: pattern.id,
            c: c.id,
          });
        };
        PDFNet.GState.prototype.setFlatness = function (flatness) {
          checkArguments(arguments.length, 1, 'setFlatness', '(number)', [
            [flatness, 'number'],
          ]);
          return PDFNet.sendWithPromise('GState.setFlatness', {
            gs: this.id,
            flatness: flatness,
          });
        };
        PDFNet.GState.prototype.setLineCap = function (cap) {
          checkArguments(arguments.length, 1, 'setLineCap', '(number)', [
            [cap, 'number'],
          ]);
          return PDFNet.sendWithPromise('GState.setLineCap', {
            gs: this.id,
            cap: cap,
          });
        };
        PDFNet.GState.prototype.setLineJoin = function (join) {
          checkArguments(arguments.length, 1, 'setLineJoin', '(number)', [
            [join, 'number'],
          ]);
          return PDFNet.sendWithPromise('GState.setLineJoin', {
            gs: this.id,
            join: join,
          });
        };
        PDFNet.GState.prototype.setLineWidth = function (width) {
          checkArguments(arguments.length, 1, 'setLineWidth', '(number)', [
            [width, 'number'],
          ]);
          return PDFNet.sendWithPromise('GState.setLineWidth', {
            gs: this.id,
            width: width,
          });
        };
        PDFNet.GState.prototype.setMiterLimit = function (miter_limit) {
          checkArguments(arguments.length, 1, 'setMiterLimit', '(number)', [
            [miter_limit, 'number'],
          ]);
          return PDFNet.sendWithPromise('GState.setMiterLimit', {
            gs: this.id,
            miter_limit: miter_limit,
          });
        };
        PDFNet.GState.prototype.setDashPattern = function (dash_array, phase) {
          checkArguments(
            arguments.length,
            2,
            'setDashPattern',
            '(Array<number>, number)',
            [
              [dash_array, 'Array'],
              [phase, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('GState.setDashPattern', {
            gs: this.id,
            dash_array: dash_array,
            phase: phase,
          });
        };
        PDFNet.GState.prototype.setCharSpacing = function (char_spacing) {
          checkArguments(arguments.length, 1, 'setCharSpacing', '(number)', [
            [char_spacing, 'number'],
          ]);
          return PDFNet.sendWithPromise('GState.setCharSpacing', {
            gs: this.id,
            char_spacing: char_spacing,
          });
        };
        PDFNet.GState.prototype.setWordSpacing = function (word_spacing) {
          checkArguments(arguments.length, 1, 'setWordSpacing', '(number)', [
            [word_spacing, 'number'],
          ]);
          return PDFNet.sendWithPromise('GState.setWordSpacing', {
            gs: this.id,
            word_spacing: word_spacing,
          });
        };
        PDFNet.GState.prototype.setHorizontalScale = function (hscale) {
          checkArguments(
            arguments.length,
            1,
            'setHorizontalScale',
            '(number)',
            [[hscale, 'number']]
          );
          return PDFNet.sendWithPromise('GState.setHorizontalScale', {
            gs: this.id,
            hscale: hscale,
          });
        };
        PDFNet.GState.prototype.setLeading = function (leading) {
          checkArguments(arguments.length, 1, 'setLeading', '(number)', [
            [leading, 'number'],
          ]);
          return PDFNet.sendWithPromise('GState.setLeading', {
            gs: this.id,
            leading: leading,
          });
        };
        PDFNet.GState.prototype.setFont = function (font, font_sz) {
          checkArguments(
            arguments.length,
            2,
            'setFont',
            '(PDFNet.Font, number)',
            [
              [font, 'Object', PDFNet.Font, 'Font'],
              [font_sz, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('GState.setFont', {
            gs: this.id,
            font: font.id,
            font_sz: font_sz,
          });
        };
        PDFNet.GState.prototype.setTextRenderMode = function (rmode) {
          checkArguments(arguments.length, 1, 'setTextRenderMode', '(number)', [
            [rmode, 'number'],
          ]);
          return PDFNet.sendWithPromise('GState.setTextRenderMode', {
            gs: this.id,
            rmode: rmode,
          });
        };
        PDFNet.GState.prototype.setTextRise = function (rise) {
          checkArguments(arguments.length, 1, 'setTextRise', '(number)', [
            [rise, 'number'],
          ]);
          return PDFNet.sendWithPromise('GState.setTextRise', {
            gs: this.id,
            rise: rise,
          });
        };
        PDFNet.GState.prototype.setTextKnockout = function (knockout) {
          checkArguments(arguments.length, 1, 'setTextKnockout', '(boolean)', [
            [knockout, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('GState.setTextKnockout', {
            gs: this.id,
            knockout: knockout,
          });
        };
        PDFNet.GState.prototype.setRenderingIntent = function (intent) {
          checkArguments(
            arguments.length,
            1,
            'setRenderingIntent',
            '(number)',
            [[intent, 'number']]
          );
          return PDFNet.sendWithPromise('GState.setRenderingIntent', {
            gs: this.id,
            intent: intent,
          });
        };
        PDFNet.GState.prototype.setBlendMode = function (BM) {
          checkArguments(arguments.length, 1, 'setBlendMode', '(number)', [
            [BM, 'number'],
          ]);
          return PDFNet.sendWithPromise('GState.setBlendMode', {
            gs: this.id,
            BM: BM,
          });
        };
        PDFNet.GState.prototype.setFillOpacity = function (ca) {
          checkArguments(arguments.length, 1, 'setFillOpacity', '(number)', [
            [ca, 'number'],
          ]);
          return PDFNet.sendWithPromise('GState.setFillOpacity', {
            gs: this.id,
            ca: ca,
          });
        };
        PDFNet.GState.prototype.setStrokeOpacity = function (ca) {
          checkArguments(arguments.length, 1, 'setStrokeOpacity', '(number)', [
            [ca, 'number'],
          ]);
          return PDFNet.sendWithPromise('GState.setStrokeOpacity', {
            gs: this.id,
            ca: ca,
          });
        };
        PDFNet.GState.prototype.setAISFlag = function (AIS) {
          checkArguments(arguments.length, 1, 'setAISFlag', '(boolean)', [
            [AIS, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('GState.setAISFlag', {
            gs: this.id,
            AIS: AIS,
          });
        };
        PDFNet.GState.prototype.setSoftMask = function (SM) {
          checkArguments(arguments.length, 1, 'setSoftMask', '(PDFNet.Obj)', [
            [SM, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('GState.setSoftMask', {
            gs: this.id,
            SM: SM.id,
          });
        };
        PDFNet.GState.prototype.setStrokeOverprint = function (OP) {
          checkArguments(
            arguments.length,
            1,
            'setStrokeOverprint',
            '(boolean)',
            [[OP, 'boolean']]
          );
          return PDFNet.sendWithPromise('GState.setStrokeOverprint', {
            gs: this.id,
            OP: OP,
          });
        };
        PDFNet.GState.prototype.setFillOverprint = function (op) {
          checkArguments(arguments.length, 1, 'setFillOverprint', '(boolean)', [
            [op, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('GState.setFillOverprint', {
            gs: this.id,
            op: op,
          });
        };
        PDFNet.GState.prototype.setOverprintMode = function (OPM) {
          checkArguments(arguments.length, 1, 'setOverprintMode', '(number)', [
            [OPM, 'number'],
          ]);
          return PDFNet.sendWithPromise('GState.setOverprintMode', {
            gs: this.id,
            OPM: OPM,
          });
        };
        PDFNet.GState.prototype.setAutoStrokeAdjust = function (SA) {
          checkArguments(
            arguments.length,
            1,
            'setAutoStrokeAdjust',
            '(boolean)',
            [[SA, 'boolean']]
          );
          return PDFNet.sendWithPromise('GState.setAutoStrokeAdjust', {
            gs: this.id,
            SA: SA,
          });
        };
        PDFNet.GState.prototype.setSmoothnessTolerance = function (SM) {
          checkArguments(
            arguments.length,
            1,
            'setSmoothnessTolerance',
            '(number)',
            [[SM, 'number']]
          );
          return PDFNet.sendWithPromise('GState.setSmoothnessTolerance', {
            gs: this.id,
            SM: SM,
          });
        };
        PDFNet.GState.prototype.setBlackGenFunct = function (BG) {
          checkArguments(
            arguments.length,
            1,
            'setBlackGenFunct',
            '(PDFNet.Obj)',
            [[BG, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('GState.setBlackGenFunct', {
            gs: this.id,
            BG: BG.id,
          });
        };
        PDFNet.GState.prototype.setUCRFunct = function (UCR) {
          checkArguments(arguments.length, 1, 'setUCRFunct', '(PDFNet.Obj)', [
            [UCR, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('GState.setUCRFunct', {
            gs: this.id,
            UCR: UCR.id,
          });
        };
        PDFNet.GState.prototype.setTransferFunct = function (TR) {
          checkArguments(
            arguments.length,
            1,
            'setTransferFunct',
            '(PDFNet.Obj)',
            [[TR, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('GState.setTransferFunct', {
            gs: this.id,
            TR: TR.id,
          });
        };
        PDFNet.GState.prototype.setHalftone = function (HT) {
          checkArguments(arguments.length, 1, 'setHalftone', '(PDFNet.Obj)', [
            [HT, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('GState.setHalftone', {
            gs: this.id,
            HT: HT.id,
          });
        };
        PDFNet.Element.prototype.getType = function () {
          return PDFNet.sendWithPromise('Element.getType', { e: this.id });
        };
        PDFNet.Element.prototype.getGState = function () {
          return PDFNet.sendWithPromise('Element.getGState', {
            e: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.GState, id);
          });
        };
        PDFNet.Element.prototype.getCTM = function () {
          return PDFNet.sendWithPromise('Element.getCTM', { e: this.id }).then(
            function (id) {
              return new PDFNet.Matrix2D(id);
            }
          );
        };
        PDFNet.Element.prototype.getParentStructElement = function () {
          return PDFNet.sendWithPromise('Element.getParentStructElement', {
            e: this.id,
          }).then(function (id) {
            return new PDFNet.SElement(id);
          });
        };
        PDFNet.Element.prototype.getStructMCID = function () {
          return PDFNet.sendWithPromise('Element.getStructMCID', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.isOCVisible = function () {
          return PDFNet.sendWithPromise('Element.isOCVisible', { e: this.id });
        };
        PDFNet.Element.prototype.isClippingPath = function () {
          return PDFNet.sendWithPromise('Element.isClippingPath', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.isStroked = function () {
          return PDFNet.sendWithPromise('Element.isStroked', { e: this.id });
        };
        PDFNet.Element.prototype.isFilled = function () {
          return PDFNet.sendWithPromise('Element.isFilled', { e: this.id });
        };
        PDFNet.Element.prototype.isWindingFill = function () {
          return PDFNet.sendWithPromise('Element.isWindingFill', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.isClipWindingFill = function () {
          return PDFNet.sendWithPromise('Element.isClipWindingFill', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.setPathClip = function (clip) {
          checkArguments(arguments.length, 1, 'setPathClip', '(boolean)', [
            [clip, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Element.setPathClip', {
            e: this.id,
            clip: clip,
          });
        };
        PDFNet.Element.prototype.setPathStroke = function (stroke) {
          checkArguments(arguments.length, 1, 'setPathStroke', '(boolean)', [
            [stroke, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Element.setPathStroke', {
            e: this.id,
            stroke: stroke,
          });
        };
        PDFNet.Element.prototype.setPathFill = function (fill) {
          checkArguments(arguments.length, 1, 'setPathFill', '(boolean)', [
            [fill, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Element.setPathFill', {
            e: this.id,
            fill: fill,
          });
        };
        PDFNet.Element.prototype.setWindingFill = function (winding_rule) {
          checkArguments(arguments.length, 1, 'setWindingFill', '(boolean)', [
            [winding_rule, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Element.setWindingFill', {
            e: this.id,
            winding_rule: winding_rule,
          });
        };
        PDFNet.Element.prototype.setClipWindingFill = function (winding_rule) {
          checkArguments(
            arguments.length,
            1,
            'setClipWindingFill',
            '(boolean)',
            [[winding_rule, 'boolean']]
          );
          return PDFNet.sendWithPromise('Element.setClipWindingFill', {
            e: this.id,
            winding_rule: winding_rule,
          });
        };
        PDFNet.Element.prototype.setPathTypes = function (in_seg_types, count) {
          checkArguments(
            arguments.length,
            2,
            'setPathTypes',
            '(string, number)',
            [
              [in_seg_types, 'string'],
              [count, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Element.setPathTypes', {
            e: this.id,
            in_seg_types: in_seg_types,
            count: count,
          });
        };
        PDFNet.Element.prototype.getXObject = function () {
          return PDFNet.sendWithPromise('Element.getXObject', {
            e: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Element.prototype.getImageData = function () {
          return PDFNet.sendWithPromise('Element.getImageData', {
            e: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Filter, id);
          });
        };
        PDFNet.Element.prototype.getImageDataSize = function () {
          return PDFNet.sendWithPromise('Element.getImageDataSize', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.getImageColorSpace = function () {
          return PDFNet.sendWithPromise('Element.getImageColorSpace', {
            e: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorSpace, id);
          });
        };
        PDFNet.Element.prototype.getImageWidth = function () {
          return PDFNet.sendWithPromise('Element.getImageWidth', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.getImageHeight = function () {
          return PDFNet.sendWithPromise('Element.getImageHeight', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.getDecodeArray = function () {
          return PDFNet.sendWithPromise('Element.getDecodeArray', {
            e: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Element.prototype.getBitsPerComponent = function () {
          return PDFNet.sendWithPromise('Element.getBitsPerComponent', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.getComponentNum = function () {
          return PDFNet.sendWithPromise('Element.getComponentNum', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.isImageMask = function () {
          return PDFNet.sendWithPromise('Element.isImageMask', { e: this.id });
        };
        PDFNet.Element.prototype.isImageInterpolate = function () {
          return PDFNet.sendWithPromise('Element.isImageInterpolate', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.getMask = function () {
          return PDFNet.sendWithPromise('Element.getMask', { e: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.Obj, id);
            }
          );
        };
        PDFNet.Element.prototype.getImageRenderingIntent = function () {
          return PDFNet.sendWithPromise('Element.getImageRenderingIntent', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.getTextString = function () {
          return PDFNet.sendWithPromise('Element.getTextString', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.getTextMatrix = function () {
          return PDFNet.sendWithPromise('Element.getTextMatrix', {
            e: this.id,
          }).then(function (id) {
            return new PDFNet.Matrix2D(id);
          });
        };
        PDFNet.Element.prototype.getCharIterator = function () {
          return PDFNet.sendWithPromise('Element.getCharIterator', {
            e: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Iterator, id, 'CharData');
          });
        };
        PDFNet.Element.prototype.getTextLength = function () {
          return PDFNet.sendWithPromise('Element.getTextLength', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.getPosAdjustment = function () {
          return PDFNet.sendWithPromise('Element.getPosAdjustment', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.getNewTextLineOffset = function () {
          return PDFNet.sendWithPromise('Element.getNewTextLineOffset', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.hasTextMatrix = function () {
          return PDFNet.sendWithPromise('Element.hasTextMatrix', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.setTextData = function (buf_text_data) {
          checkArguments(
            arguments.length,
            1,
            'setTextData',
            '(ArrayBuffer|TypedArray)',
            [[buf_text_data, 'ArrayBuffer']]
          );
          var buf_text_dataArrayBuffer = getArrayBuffer(buf_text_data, !1);
          return PDFNet.sendWithPromise('Element.setTextData', {
            e: this.id,
            buf_text_data: buf_text_dataArrayBuffer,
          });
        };
        PDFNet.Element.prototype.setTextMatrix = function (mtx) {
          checkArguments(
            arguments.length,
            1,
            'setTextMatrix',
            '(PDFNet.Matrix2D)',
            [[mtx, 'Structure', PDFNet.Matrix2D, 'Matrix2D']]
          );
          checkParamsYieldFunction('setTextMatrix', [[mtx, 0]]);
          return PDFNet.sendWithPromise('Element.setTextMatrix', {
            e: this.id,
            mtx: mtx,
          });
        };
        PDFNet.Element.prototype.setTextMatrixEntries = function (
          a,
          b,
          c,
          d,
          h,
          v
        ) {
          checkArguments(
            arguments.length,
            6,
            'setTextMatrixEntries',
            '(number, number, number, number, number, number)',
            [
              [a, 'number'],
              [b, 'number'],
              [c, 'number'],
              [d, 'number'],
              [h, 'number'],
              [v, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Element.setTextMatrixEntries', {
            e: this.id,
            a: a,
            b: b,
            c: c,
            d: d,
            h: h,
            v: v,
          });
        };
        PDFNet.Element.prototype.setPosAdjustment = function (adjust) {
          checkArguments(arguments.length, 1, 'setPosAdjustment', '(number)', [
            [adjust, 'number'],
          ]);
          return PDFNet.sendWithPromise('Element.setPosAdjustment', {
            e: this.id,
            adjust: adjust,
          });
        };
        PDFNet.Element.prototype.updateTextMetrics = function () {
          return PDFNet.sendWithPromise('Element.updateTextMetrics', {
            e: this.id,
          });
        };
        PDFNet.Element.prototype.setNewTextLineOffset = function (dx, dy) {
          checkArguments(
            arguments.length,
            2,
            'setNewTextLineOffset',
            '(number, number)',
            [
              [dx, 'number'],
              [dy, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Element.setNewTextLineOffset', {
            e: this.id,
            dx: dx,
            dy: dy,
          });
        };
        PDFNet.Element.prototype.getShading = function () {
          return PDFNet.sendWithPromise('Element.getShading', {
            e: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Shading, id);
          });
        };
        PDFNet.Element.prototype.getMCPropertyDict = function () {
          return PDFNet.sendWithPromise('Element.getMCPropertyDict', {
            e: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Element.prototype.getMCTag = function () {
          return PDFNet.sendWithPromise('Element.getMCTag', {
            e: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ShapedText.prototype.getScale = function () {
          return PDFNet.sendWithPromise('ShapedText.getScale', {
            self: this.id,
          });
        };
        PDFNet.ShapedText.prototype.getShapingStatus = function () {
          return PDFNet.sendWithPromise('ShapedText.getShapingStatus', {
            self: this.id,
          });
        };
        PDFNet.ShapedText.prototype.getFailureReason = function () {
          return PDFNet.sendWithPromise('ShapedText.getFailureReason', {
            self: this.id,
          });
        };
        PDFNet.ShapedText.prototype.getText = function () {
          return PDFNet.sendWithPromise('ShapedText.getText', {
            self: this.id,
          });
        };
        PDFNet.ShapedText.prototype.getNumGlyphs = function () {
          return PDFNet.sendWithPromise('ShapedText.getNumGlyphs', {
            self: this.id,
          });
        };
        PDFNet.ShapedText.prototype.getGlyph = function (index) {
          checkArguments(arguments.length, 1, 'getGlyph', '(number)', [
            [index, 'number'],
          ]);
          return PDFNet.sendWithPromise('ShapedText.getGlyph', {
            self: this.id,
            index: index,
          });
        };
        PDFNet.ShapedText.prototype.getGlyphXPos = function (index) {
          checkArguments(arguments.length, 1, 'getGlyphXPos', '(number)', [
            [index, 'number'],
          ]);
          return PDFNet.sendWithPromise('ShapedText.getGlyphXPos', {
            self: this.id,
            index: index,
          });
        };
        PDFNet.ShapedText.prototype.getGlyphYPos = function (index) {
          checkArguments(arguments.length, 1, 'getGlyphYPos', '(number)', [
            [index, 'number'],
          ]);
          return PDFNet.sendWithPromise('ShapedText.getGlyphYPos', {
            self: this.id,
            index: index,
          });
        };
        PDFNet.ElementBuilder.create = function () {
          return PDFNet.sendWithPromise('elementBuilderCreate', {}).then(
            function (id) {
              return createDestroyableObj(PDFNet.ElementBuilder, id);
            }
          );
        };
        PDFNet.ElementBuilder.prototype.reset = function (gs) {
          'undefined' === typeof gs && (gs = new PDFNet.GState('0'));
          checkArguments(arguments.length, 0, 'reset', '(PDFNet.GState)', [
            [gs, 'Object', PDFNet.GState, 'GState'],
          ]);
          return PDFNet.sendWithPromise('ElementBuilder.reset', {
            b: this.id,
            gs: gs.id,
          });
        };
        PDFNet.ElementBuilder.prototype.createImage = function (img) {
          checkArguments(arguments.length, 1, 'createImage', '(PDFNet.Image)', [
            [img, 'Object', PDFNet.Image, 'Image'],
          ]);
          return PDFNet.sendWithPromise('ElementBuilder.createImage', {
            b: this.id,
            img: img.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createImageFromMatrix = function (
          img,
          mtx
        ) {
          checkArguments(
            arguments.length,
            2,
            'createImageFromMatrix',
            '(PDFNet.Image, PDFNet.Matrix2D)',
            [
              [img, 'Object', PDFNet.Image, 'Image'],
              [mtx, 'Structure', PDFNet.Matrix2D, 'Matrix2D'],
            ]
          );
          checkParamsYieldFunction('createImageFromMatrix', [[mtx, 1]]);
          return PDFNet.sendWithPromise(
            'ElementBuilder.createImageFromMatrix',
            { b: this.id, img: img.id, mtx: mtx }
          ).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createImageScaled = function (
          img,
          x,
          y,
          hscale,
          vscale
        ) {
          checkArguments(
            arguments.length,
            5,
            'createImageScaled',
            '(PDFNet.Image, number, number, number, number)',
            [
              [img, 'Object', PDFNet.Image, 'Image'],
              [x, 'number'],
              [y, 'number'],
              [hscale, 'number'],
              [vscale, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('ElementBuilder.createImageScaled', {
            b: this.id,
            img: img.id,
            x: x,
            y: y,
            hscale: hscale,
            vscale: vscale,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createGroupBegin = function () {
          return PDFNet.sendWithPromise('ElementBuilder.createGroupBegin', {
            b: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createGroupEnd = function () {
          return PDFNet.sendWithPromise('ElementBuilder.createGroupEnd', {
            b: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createShading = function (sh) {
          checkArguments(
            arguments.length,
            1,
            'createShading',
            '(PDFNet.Shading)',
            [[sh, 'Object', PDFNet.Shading, 'Shading']]
          );
          return PDFNet.sendWithPromise('ElementBuilder.createShading', {
            b: this.id,
            sh: sh.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createFormFromStream = function (form) {
          checkArguments(
            arguments.length,
            1,
            'createFormFromStream',
            '(PDFNet.Obj)',
            [[form, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('ElementBuilder.createFormFromStream', {
            b: this.id,
            form: form.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createFormFromPage = function (page) {
          checkArguments(
            arguments.length,
            1,
            'createFormFromPage',
            '(PDFNet.Page)',
            [[page, 'Object', PDFNet.Page, 'Page']]
          );
          return PDFNet.sendWithPromise('ElementBuilder.createFormFromPage', {
            b: this.id,
            page: page.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createFormFromDoc = function (
          page,
          doc
        ) {
          checkArguments(
            arguments.length,
            2,
            'createFormFromDoc',
            '(PDFNet.Page, PDFNet.PDFDoc)',
            [
              [page, 'Object', PDFNet.Page, 'Page'],
              [doc, 'PDFDoc'],
            ]
          );
          return PDFNet.sendWithPromise('ElementBuilder.createFormFromDoc', {
            b: this.id,
            page: page.id,
            doc: doc.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createTextBeginWithFont = function (
          font,
          font_sz
        ) {
          checkArguments(
            arguments.length,
            2,
            'createTextBeginWithFont',
            '(PDFNet.Font, number)',
            [
              [font, 'Object', PDFNet.Font, 'Font'],
              [font_sz, 'number'],
            ]
          );
          return PDFNet.sendWithPromise(
            'ElementBuilder.createTextBeginWithFont',
            { b: this.id, font: font.id, font_sz: font_sz }
          ).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createTextBegin = function () {
          return PDFNet.sendWithPromise('ElementBuilder.createTextBegin', {
            b: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createTextEnd = function () {
          return PDFNet.sendWithPromise('ElementBuilder.createTextEnd', {
            b: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createTextRun = function (
          text_data,
          font,
          font_sz
        ) {
          checkArguments(
            arguments.length,
            3,
            'createTextRun',
            '(string, PDFNet.Font, number)',
            [
              [text_data, 'string'],
              [font, 'Object', PDFNet.Font, 'Font'],
              [font_sz, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('ElementBuilder.createTextRun', {
            b: this.id,
            text_data: text_data,
            font: font.id,
            font_sz: font_sz,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createTextRunUnsigned = function (
          text_data,
          font,
          font_sz
        ) {
          checkArguments(
            arguments.length,
            3,
            'createTextRunUnsigned',
            '(string, PDFNet.Font, number)',
            [
              [text_data, 'string'],
              [font, 'Object', PDFNet.Font, 'Font'],
              [font_sz, 'number'],
            ]
          );
          return PDFNet.sendWithPromise(
            'ElementBuilder.createTextRunUnsigned',
            {
              b: this.id,
              text_data: text_data,
              font: font.id,
              font_sz: font_sz,
            }
          ).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createNewTextRun = function (
          text_data
        ) {
          checkArguments(arguments.length, 1, 'createNewTextRun', '(string)', [
            [text_data, 'string'],
          ]);
          return PDFNet.sendWithPromise('ElementBuilder.createNewTextRun', {
            b: this.id,
            text_data: text_data,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createNewTextRunUnsigned = function (
          text_data
        ) {
          checkArguments(
            arguments.length,
            1,
            'createNewTextRunUnsigned',
            '(string)',
            [[text_data, 'string']]
          );
          return PDFNet.sendWithPromise(
            'ElementBuilder.createNewTextRunUnsigned',
            { b: this.id, text_data: text_data }
          ).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createShapedTextRun = function (
          text_data
        ) {
          checkArguments(
            arguments.length,
            1,
            'createShapedTextRun',
            '(PDFNet.ShapedText)',
            [[text_data, 'Object', PDFNet.ShapedText, 'ShapedText']]
          );
          return PDFNet.sendWithPromise('ElementBuilder.createShapedTextRun', {
            b: this.id,
            text_data: text_data.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createTextNewLineWithOffset = function (
          dx,
          dy
        ) {
          checkArguments(
            arguments.length,
            2,
            'createTextNewLineWithOffset',
            '(number, number)',
            [
              [dx, 'number'],
              [dy, 'number'],
            ]
          );
          return PDFNet.sendWithPromise(
            'ElementBuilder.createTextNewLineWithOffset',
            { b: this.id, dx: dx, dy: dy }
          ).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createTextNewLine = function () {
          return PDFNet.sendWithPromise('ElementBuilder.createTextNewLine', {
            b: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createPath = function (
          points,
          buf_seg_types
        ) {
          checkArguments(
            arguments.length,
            2,
            'createPath',
            '(Array<number>, ArrayBuffer|TypedArray)',
            [
              [points, 'Array'],
              [buf_seg_types, 'ArrayBuffer'],
            ]
          );
          var buf_seg_typesArrayBuffer = getArrayBuffer(buf_seg_types, !1);
          return PDFNet.sendWithPromise('ElementBuilder.createPath', {
            b: this.id,
            points_list: points,
            buf_seg_types: buf_seg_typesArrayBuffer,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createRect = function (
          x,
          y,
          width,
          height
        ) {
          checkArguments(
            arguments.length,
            4,
            'createRect',
            '(number, number, number, number)',
            [
              [x, 'number'],
              [y, 'number'],
              [width, 'number'],
              [height, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('ElementBuilder.createRect', {
            b: this.id,
            x: x,
            y: y,
            width: width,
            height: height,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createEllipse = function (
          x,
          y,
          width,
          height
        ) {
          checkArguments(
            arguments.length,
            4,
            'createEllipse',
            '(number, number, number, number)',
            [
              [x, 'number'],
              [y, 'number'],
              [width, 'number'],
              [height, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('ElementBuilder.createEllipse', {
            b: this.id,
            x: x,
            y: y,
            width: width,
            height: height,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.pathBegin = function () {
          return PDFNet.sendWithPromise('ElementBuilder.pathBegin', {
            b: this.id,
          });
        };
        PDFNet.ElementBuilder.prototype.pathEnd = function () {
          return PDFNet.sendWithPromise('ElementBuilder.pathEnd', {
            b: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.rect = function (x, y, width, height) {
          checkArguments(
            arguments.length,
            4,
            'rect',
            '(number, number, number, number)',
            [
              [x, 'number'],
              [y, 'number'],
              [width, 'number'],
              [height, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('ElementBuilder.rect', {
            b: this.id,
            x: x,
            y: y,
            width: width,
            height: height,
          });
        };
        PDFNet.ElementBuilder.prototype.ellipse = function (
          x,
          y,
          width,
          height
        ) {
          checkArguments(
            arguments.length,
            4,
            'ellipse',
            '(number, number, number, number)',
            [
              [x, 'number'],
              [y, 'number'],
              [width, 'number'],
              [height, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('ElementBuilder.ellipse', {
            b: this.id,
            x: x,
            y: y,
            width: width,
            height: height,
          });
        };
        PDFNet.ElementBuilder.prototype.moveTo = function (x, y) {
          checkArguments(arguments.length, 2, 'moveTo', '(number, number)', [
            [x, 'number'],
            [y, 'number'],
          ]);
          return PDFNet.sendWithPromise('ElementBuilder.moveTo', {
            b: this.id,
            x: x,
            y: y,
          });
        };
        PDFNet.ElementBuilder.prototype.lineTo = function (x, y) {
          checkArguments(arguments.length, 2, 'lineTo', '(number, number)', [
            [x, 'number'],
            [y, 'number'],
          ]);
          return PDFNet.sendWithPromise('ElementBuilder.lineTo', {
            b: this.id,
            x: x,
            y: y,
          });
        };
        PDFNet.ElementBuilder.prototype.curveTo = function (
          cx1,
          cy1,
          cx2,
          cy2,
          x2,
          y2
        ) {
          checkArguments(
            arguments.length,
            6,
            'curveTo',
            '(number, number, number, number, number, number)',
            [
              [cx1, 'number'],
              [cy1, 'number'],
              [cx2, 'number'],
              [cy2, 'number'],
              [x2, 'number'],
              [y2, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('ElementBuilder.curveTo', {
            b: this.id,
            cx1: cx1,
            cy1: cy1,
            cx2: cx2,
            cy2: cy2,
            x2: x2,
            y2: y2,
          });
        };
        PDFNet.ElementBuilder.prototype.arcTo = function (
          x,
          y,
          width,
          height,
          start,
          extent
        ) {
          checkArguments(
            arguments.length,
            6,
            'arcTo',
            '(number, number, number, number, number, number)',
            [
              [x, 'number'],
              [y, 'number'],
              [width, 'number'],
              [height, 'number'],
              [start, 'number'],
              [extent, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('ElementBuilder.arcTo', {
            b: this.id,
            x: x,
            y: y,
            width: width,
            height: height,
            start: start,
            extent: extent,
          });
        };
        PDFNet.ElementBuilder.prototype.arcTo2 = function (
          xr,
          yr,
          rx,
          isLargeArc,
          sweep,
          endX,
          endY
        ) {
          checkArguments(
            arguments.length,
            7,
            'arcTo2',
            '(number, number, number, boolean, boolean, number, number)',
            [
              [xr, 'number'],
              [yr, 'number'],
              [rx, 'number'],
              [isLargeArc, 'boolean'],
              [sweep, 'boolean'],
              [endX, 'number'],
              [endY, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('ElementBuilder.arcTo2', {
            b: this.id,
            xr: xr,
            yr: yr,
            rx: rx,
            isLargeArc: isLargeArc,
            sweep: sweep,
            endX: endX,
            endY: endY,
          });
        };
        PDFNet.ElementBuilder.prototype.closePath = function () {
          return PDFNet.sendWithPromise('ElementBuilder.closePath', {
            b: this.id,
          });
        };
        PDFNet.ElementBuilder.prototype.createMarkedContentBeginInlineProperties =
          function (tag) {
            checkArguments(
              arguments.length,
              1,
              'createMarkedContentBeginInlineProperties',
              '(string)',
              [[tag, 'string']]
            );
            return PDFNet.sendWithPromise(
              'ElementBuilder.createMarkedContentBeginInlineProperties',
              { b: this.id, tag: tag }
            ).then(function (id) {
              return createPDFNetObj(PDFNet.Element, id);
            });
          };
        PDFNet.ElementBuilder.prototype.createMarkedContentBegin = function (
          tag,
          property_dict
        ) {
          checkArguments(
            arguments.length,
            2,
            'createMarkedContentBegin',
            '(string, PDFNet.Obj)',
            [
              [tag, 'string'],
              [property_dict, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          return PDFNet.sendWithPromise(
            'ElementBuilder.createMarkedContentBegin',
            { b: this.id, tag: tag, property_dict: property_dict.id }
          ).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createMarkedContentEnd = function () {
          return PDFNet.sendWithPromise(
            'ElementBuilder.createMarkedContentEnd',
            { b: this.id }
          ).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementBuilder.prototype.createMarkedContentPointInlineProperties =
          function (tag) {
            checkArguments(
              arguments.length,
              1,
              'createMarkedContentPointInlineProperties',
              '(string)',
              [[tag, 'string']]
            );
            return PDFNet.sendWithPromise(
              'ElementBuilder.createMarkedContentPointInlineProperties',
              { b: this.id, tag: tag }
            ).then(function (id) {
              return createPDFNetObj(PDFNet.Element, id);
            });
          };
        PDFNet.ElementBuilder.prototype.createMarkedContentPoint = function (
          tag,
          property_dict
        ) {
          checkArguments(
            arguments.length,
            2,
            'createMarkedContentPoint',
            '(string, PDFNet.Obj)',
            [
              [tag, 'string'],
              [property_dict, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          return PDFNet.sendWithPromise(
            'ElementBuilder.createMarkedContentPoint',
            { b: this.id, tag: tag, property_dict: property_dict.id }
          ).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementReader.create = function () {
          return PDFNet.sendWithPromise('elementReaderCreate', {}).then(
            function (id) {
              return createDestroyableObj(PDFNet.ElementReader, id);
            }
          );
        };
        PDFNet.ElementReader.prototype.beginOnPage = function (page, ctx) {
          'undefined' === typeof ctx && (ctx = new PDFNet.OCGContext('0'));
          checkArguments(
            arguments.length,
            1,
            'beginOnPage',
            '(PDFNet.Page, PDFNet.OCGContext)',
            [
              [page, 'Object', PDFNet.Page, 'Page'],
              [ctx, 'Object', PDFNet.OCGContext, 'OCGContext'],
            ]
          );
          return PDFNet.sendWithPromise('ElementReader.beginOnPage', {
            r: this.id,
            page: page.id,
            ctx: ctx.id,
          });
        };
        PDFNet.ElementReader.prototype.begin = function (
          content_stream,
          resource_dict,
          ctx
        ) {
          'undefined' === typeof resource_dict &&
            (resource_dict = new PDFNet.Obj('0'));
          'undefined' === typeof ctx && (ctx = new PDFNet.OCGContext('0'));
          checkArguments(
            arguments.length,
            1,
            'begin',
            '(PDFNet.Obj, PDFNet.Obj, PDFNet.OCGContext)',
            [
              [content_stream, 'Object', PDFNet.Obj, 'Obj'],
              [resource_dict, 'Object', PDFNet.Obj, 'Obj'],
              [ctx, 'Object', PDFNet.OCGContext, 'OCGContext'],
            ]
          );
          return PDFNet.sendWithPromise('ElementReader.begin', {
            r: this.id,
            content_stream: content_stream.id,
            resource_dict: resource_dict.id,
            ctx: ctx.id,
          });
        };
        PDFNet.ElementReader.prototype.appendResource = function (res) {
          checkArguments(
            arguments.length,
            1,
            'appendResource',
            '(PDFNet.Obj)',
            [[res, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('ElementReader.appendResource', {
            r: this.id,
            res: res.id,
          });
        };
        PDFNet.ElementReader.prototype.next = function () {
          return PDFNet.sendWithPromise('ElementReader.next', {
            r: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementReader.prototype.current = function () {
          return PDFNet.sendWithPromise('ElementReader.current', {
            r: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.ElementReader.prototype.formBegin = function () {
          return PDFNet.sendWithPromise('ElementReader.formBegin', {
            r: this.id,
          });
        };
        PDFNet.ElementReader.prototype.patternBegin = function (
          fill_pattern,
          reset_ctm_tfm
        ) {
          'undefined' === typeof reset_ctm_tfm && (reset_ctm_tfm = !1);
          checkArguments(
            arguments.length,
            1,
            'patternBegin',
            '(boolean, boolean)',
            [
              [fill_pattern, 'boolean'],
              [reset_ctm_tfm, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('ElementReader.patternBegin', {
            r: this.id,
            fill_pattern: fill_pattern,
            reset_ctm_tfm: reset_ctm_tfm,
          });
        };
        PDFNet.ElementReader.prototype.type3FontBegin = function (
          char_data,
          resource_dict
        ) {
          'undefined' === typeof resource_dict &&
            (resource_dict = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            1,
            'type3FontBegin',
            '(PDFNet.CharData, PDFNet.Obj)',
            [
              [char_data, 'Structure', PDFNet.CharData, 'CharData'],
              [resource_dict, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          checkParamsYieldFunction('type3FontBegin', [[char_data, 0]]);
          char_data.yieldFunction = 'ElementReader.type3FontBegin';
          return PDFNet.sendWithPromise('ElementReader.type3FontBegin', {
            r: this.id,
            char_data: char_data,
            resource_dict: resource_dict.id,
          }).then(function (id) {
            char_data.yieldFunction = void 0;
            copyFunc(id, char_data);
          });
        };
        PDFNet.ElementReader.prototype.end = function () {
          return PDFNet.sendWithPromise('ElementReader.end', { r: this.id });
        };
        PDFNet.ElementReader.prototype.getChangesIterator = function () {
          return PDFNet.sendWithPromise('ElementReader.getChangesIterator', {
            r: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Iterator, id, 'Int');
          });
        };
        PDFNet.ElementReader.prototype.isChanged = function (attrib) {
          checkArguments(arguments.length, 1, 'isChanged', '(number)', [
            [attrib, 'number'],
          ]);
          return PDFNet.sendWithPromise('ElementReader.isChanged', {
            r: this.id,
            attrib: attrib,
          });
        };
        PDFNet.ElementReader.prototype.clearChangeList = function () {
          return PDFNet.sendWithPromise('ElementReader.clearChangeList', {
            r: this.id,
          });
        };
        PDFNet.ElementReader.prototype.getFont = function (name) {
          checkArguments(arguments.length, 1, 'getFont', '(string)', [
            [name, 'string'],
          ]);
          return PDFNet.sendWithPromise('ElementReader.getFont', {
            r: this.id,
            name: name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ElementReader.prototype.getXObject = function (name) {
          checkArguments(arguments.length, 1, 'getXObject', '(string)', [
            [name, 'string'],
          ]);
          return PDFNet.sendWithPromise('ElementReader.getXObject', {
            r: this.id,
            name: name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ElementReader.prototype.getShading = function (name) {
          checkArguments(arguments.length, 1, 'getShading', '(string)', [
            [name, 'string'],
          ]);
          return PDFNet.sendWithPromise('ElementReader.getShading', {
            r: this.id,
            name: name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ElementReader.prototype.getColorSpace = function (name) {
          checkArguments(arguments.length, 1, 'getColorSpace', '(string)', [
            [name, 'string'],
          ]);
          return PDFNet.sendWithPromise('ElementReader.getColorSpace', {
            r: this.id,
            name: name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ElementReader.prototype.getPattern = function (name) {
          checkArguments(arguments.length, 1, 'getPattern', '(string)', [
            [name, 'string'],
          ]);
          return PDFNet.sendWithPromise('ElementReader.getPattern', {
            r: this.id,
            name: name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ElementReader.prototype.getExtGState = function (name) {
          checkArguments(arguments.length, 1, 'getExtGState', '(string)', [
            [name, 'string'],
          ]);
          return PDFNet.sendWithPromise('ElementReader.getExtGState', {
            r: this.id,
            name: name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ElementWriter.create = function () {
          return PDFNet.sendWithPromise('elementWriterCreate', {}).then(
            function (id) {
              return createDestroyableObj(PDFNet.ElementWriter, id);
            }
          );
        };
        PDFNet.ElementWriter.prototype.beginOnPage = function (
          page,
          placement,
          page_coord_sys,
          compress,
          resources
        ) {
          'undefined' === typeof placement &&
            (placement = PDFNet.ElementWriter.WriteMode.e_overlay);
          'undefined' === typeof page_coord_sys && (page_coord_sys = !0);
          'undefined' === typeof compress && (compress = !0);
          'undefined' === typeof resources && (resources = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            1,
            'beginOnPage',
            '(PDFNet.Page, number, boolean, boolean, PDFNet.Obj)',
            [
              [page, 'Object', PDFNet.Page, 'Page'],
              [placement, 'number'],
              [page_coord_sys, 'boolean'],
              [compress, 'boolean'],
              [resources, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          return PDFNet.sendWithPromise('ElementWriter.beginOnPage', {
            w: this.id,
            page: page.id,
            placement: placement,
            page_coord_sys: page_coord_sys,
            compress: compress,
            resources: resources.id,
          });
        };
        PDFNet.ElementWriter.prototype.begin = function (doc, compress) {
          'undefined' === typeof compress && (compress = !0);
          checkArguments(
            arguments.length,
            1,
            'begin',
            '(PDFNet.SDFDoc, boolean)',
            [
              [doc, 'SDFDoc'],
              [compress, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('ElementWriter.begin', {
            w: this.id,
            doc: doc.id,
            compress: compress,
          });
        };
        PDFNet.ElementWriter.prototype.beginOnObj = function (
          stream_obj_to_update,
          compress,
          resources
        ) {
          'undefined' === typeof compress && (compress = !0);
          'undefined' === typeof resources && (resources = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            1,
            'beginOnObj',
            '(PDFNet.Obj, boolean, PDFNet.Obj)',
            [
              [stream_obj_to_update, 'Object', PDFNet.Obj, 'Obj'],
              [compress, 'boolean'],
              [resources, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          return PDFNet.sendWithPromise('ElementWriter.beginOnObj', {
            w: this.id,
            stream_obj_to_update: stream_obj_to_update.id,
            compress: compress,
            resources: resources.id,
          });
        };
        PDFNet.ElementWriter.prototype.end = function () {
          return PDFNet.sendWithPromise('ElementWriter.end', {
            w: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ElementWriter.prototype.writeElement = function (element) {
          checkArguments(
            arguments.length,
            1,
            'writeElement',
            '(PDFNet.Element)',
            [[element, 'Object', PDFNet.Element, 'Element']]
          );
          return PDFNet.sendWithPromise('ElementWriter.writeElement', {
            w: this.id,
            element: element.id,
          });
        };
        PDFNet.ElementWriter.prototype.writePlacedElement = function (element) {
          checkArguments(
            arguments.length,
            1,
            'writePlacedElement',
            '(PDFNet.Element)',
            [[element, 'Object', PDFNet.Element, 'Element']]
          );
          return PDFNet.sendWithPromise('ElementWriter.writePlacedElement', {
            w: this.id,
            element: element.id,
          });
        };
        PDFNet.ElementWriter.prototype.flush = function () {
          return PDFNet.sendWithPromise('ElementWriter.flush', { w: this.id });
        };
        PDFNet.ElementWriter.prototype.writeBuffer = function (data_buf) {
          checkArguments(
            arguments.length,
            1,
            'writeBuffer',
            '(ArrayBuffer|TypedArray)',
            [[data_buf, 'ArrayBuffer']]
          );
          var data_bufArrayBuffer = getArrayBuffer(data_buf, !1);
          return PDFNet.sendWithPromise('ElementWriter.writeBuffer', {
            w: this.id,
            data_buf: data_bufArrayBuffer,
          });
        };
        PDFNet.ElementWriter.prototype.writeString = function (str) {
          checkArguments(arguments.length, 1, 'writeString', '(string)', [
            [str, 'string'],
          ]);
          return PDFNet.sendWithPromise('ElementWriter.writeString', {
            w: this.id,
            str: str,
          });
        };
        PDFNet.ElementWriter.prototype.setDefaultGState = function (reader) {
          checkArguments(
            arguments.length,
            1,
            'setDefaultGState',
            '(PDFNet.ElementReader)',
            [[reader, 'Object', PDFNet.ElementReader, 'ElementReader']]
          );
          return PDFNet.sendWithPromise('ElementWriter.setDefaultGState', {
            w: this.id,
            reader: reader.id,
          });
        };
        PDFNet.ElementWriter.prototype.writeGStateChanges = function (element) {
          checkArguments(
            arguments.length,
            1,
            'writeGStateChanges',
            '(PDFNet.Element)',
            [[element, 'Object', PDFNet.Element, 'Element']]
          );
          return PDFNet.sendWithPromise('ElementWriter.writeGStateChanges', {
            w: this.id,
            element: element.id,
          });
        };
        PDFNet.FileSpec.create = function (doc, path, embed) {
          'undefined' === typeof embed && (embed = !0);
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, string, boolean)',
            [
              [doc, 'SDFDoc'],
              [path, 'string'],
              [embed, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('fileSpecCreate', {
            doc: doc.id,
            path: path,
            embed: embed,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.FileSpec, id);
          });
        };
        PDFNet.FileSpec.createURL = function (doc, url) {
          checkArguments(
            arguments.length,
            2,
            'createURL',
            '(PDFNet.SDFDoc, string)',
            [
              [doc, 'SDFDoc'],
              [url, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('fileSpecCreateURL', {
            doc: doc.id,
            url: url,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.FileSpec, id);
          });
        };
        PDFNet.FileSpec.createFromObj = function (f) {
          checkArguments(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
            [f, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('fileSpecCreateFromObj', {
            f: f.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.FileSpec, id);
          });
        };
        PDFNet.FileSpec.prototype.copy = function () {
          return PDFNet.sendWithPromise('FileSpec.copy', { d: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.FileSpec, id);
            }
          );
        };
        PDFNet.FileSpec.prototype.compare = function (d) {
          checkArguments(arguments.length, 1, 'compare', '(PDFNet.FileSpec)', [
            [d, 'Object', PDFNet.FileSpec, 'FileSpec'],
          ]);
          return PDFNet.sendWithPromise('FileSpec.compare', {
            fs: this.id,
            d: d.id,
          });
        };
        PDFNet.FileSpec.prototype.isValid = function () {
          return PDFNet.sendWithPromise('FileSpec.isValid', { fs: this.id });
        };
        PDFNet.FileSpec.prototype['export'] = function (save_as) {
          'undefined' === typeof save_as && (save_as = '');
          checkArguments(arguments.length, 0, 'export', '(string)', [
            [save_as, 'string'],
          ]);
          return PDFNet.sendWithPromise('FileSpec.export', {
            fs: this.id,
            save_as: save_as,
          });
        };
        PDFNet.FileSpec.prototype.getFileData = function () {
          return PDFNet.sendWithPromise('FileSpec.getFileData', {
            fs: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Filter, id);
          });
        };
        PDFNet.FileSpec.prototype.getFilePath = function () {
          return PDFNet.sendWithPromise('FileSpec.getFilePath', {
            fs: this.id,
          });
        };
        PDFNet.FileSpec.prototype.setDesc = function (desc) {
          checkArguments(arguments.length, 1, 'setDesc', '(string)', [
            [desc, 'string'],
          ]);
          return PDFNet.sendWithPromise('FileSpec.setDesc', {
            fs: this.id,
            desc: desc,
          });
        };
        PDFNet.FileSpec.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('FileSpec.getSDFObj', {
            fs: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Flattener.create = function () {
          return PDFNet.sendWithPromise('flattenerCreate', {}).then(
            function (id) {
              return createDestroyableObj(PDFNet.Flattener, id);
            }
          );
        };
        PDFNet.Flattener.prototype.setDPI = function (dpi) {
          checkArguments(arguments.length, 1, 'setDPI', '(number)', [
            [dpi, 'number'],
          ]);
          return PDFNet.sendWithPromise('Flattener.setDPI', {
            flattener: this.id,
            dpi: dpi,
          });
        };
        PDFNet.Flattener.prototype.setThreshold = function (threshold) {
          checkArguments(arguments.length, 1, 'setThreshold', '(number)', [
            [threshold, 'number'],
          ]);
          return PDFNet.sendWithPromise('Flattener.setThreshold', {
            flattener: this.id,
            threshold: threshold,
          });
        };
        PDFNet.Flattener.prototype.setMaximumImagePixels = function (
          max_pixels
        ) {
          checkArguments(
            arguments.length,
            1,
            'setMaximumImagePixels',
            '(number)',
            [[max_pixels, 'number']]
          );
          return PDFNet.sendWithPromise('Flattener.setMaximumImagePixels', {
            flattener: this.id,
            max_pixels: max_pixels,
          });
        };
        PDFNet.Flattener.prototype.setPreferJPG = function (jpg) {
          checkArguments(arguments.length, 1, 'setPreferJPG', '(boolean)', [
            [jpg, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Flattener.setPreferJPG', {
            flattener: this.id,
            jpg: jpg,
          });
        };
        PDFNet.Flattener.prototype.setJPGQuality = function (quality) {
          checkArguments(arguments.length, 1, 'setJPGQuality', '(number)', [
            [quality, 'number'],
          ]);
          return PDFNet.sendWithPromise('Flattener.setJPGQuality', {
            flattener: this.id,
            quality: quality,
          });
        };
        PDFNet.Flattener.prototype.setPathHinting = function (hinting) {
          checkArguments(arguments.length, 1, 'setPathHinting', '(boolean)', [
            [hinting, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Flattener.setPathHinting', {
            flattener: this.id,
            hinting: hinting,
          });
        };
        PDFNet.Flattener.prototype.process = function (doc, mode) {
          checkArguments(
            arguments.length,
            2,
            'process',
            '(PDFNet.PDFDoc, number)',
            [
              [doc, 'PDFDoc'],
              [mode, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Flattener.process', {
            flattener: this.id,
            doc: doc.id,
            mode: mode,
          });
        };
        PDFNet.Flattener.prototype.processPage = function (page, mode) {
          checkArguments(
            arguments.length,
            2,
            'processPage',
            '(PDFNet.Page, number)',
            [
              [page, 'Object', PDFNet.Page, 'Page'],
              [mode, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Flattener.processPage', {
            flattener: this.id,
            page: page.id,
            mode: mode,
          });
        };
        PDFNet.Font.createFromObj = function (font_dict) {
          'undefined' === typeof font_dict && (font_dict = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [font_dict, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('fontCreateFromObj', {
            font_dict: font_dict.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Font, id);
          });
        };
        PDFNet.Font.create = function (doc, type) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, number)',
            [
              [doc, 'SDFDoc'],
              [type, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('fontCreate', {
            doc: doc.id,
            type: type,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Font, id);
          });
        };
        PDFNet.Font.createFromFontDescriptor = function (doc, from, char_set) {
          checkArguments(
            arguments.length,
            3,
            'createFromFontDescriptor',
            '(PDFNet.SDFDoc, PDFNet.Font, string)',
            [
              [doc, 'SDFDoc'],
              [from, 'Object', PDFNet.Font, 'Font'],
              [char_set, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('fontCreateFromFontDescriptor', {
            doc: doc.id,
            from: from.id,
            char_set: char_set,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Font, id);
          });
        };
        PDFNet.Font.createFromName = function (doc, name, char_set) {
          checkArguments(
            arguments.length,
            3,
            'createFromName',
            '(PDFNet.SDFDoc, string, string)',
            [
              [doc, 'SDFDoc'],
              [name, 'string'],
              [char_set, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('fontCreateFromName', {
            doc: doc.id,
            name: name,
            char_set: char_set,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Font, id);
          });
        };
        PDFNet.Font.createAndEmbed = function (doc, type) {
          checkArguments(
            arguments.length,
            2,
            'createAndEmbed',
            '(PDFNet.SDFDoc, number)',
            [
              [doc, 'SDFDoc'],
              [type, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('fontCreateAndEmbed', {
            doc: doc.id,
            type: type,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Font, id);
          });
        };
        PDFNet.Font.createTrueTypeFontWithBuffer = function (
          doc,
          font_buffer,
          embed,
          subset
        ) {
          'undefined' === typeof embed && (embed = !0);
          'undefined' === typeof subset && (subset = !0);
          checkArguments(
            arguments.length,
            2,
            'createTrueTypeFontWithBuffer',
            '(PDFNet.SDFDoc, ArrayBuffer|TypedArray, boolean, boolean)',
            [
              [doc, 'SDFDoc'],
              [font_buffer, 'ArrayBuffer'],
              [embed, 'boolean'],
              [subset, 'boolean'],
            ]
          );
          font_buffer = getArrayBuffer(font_buffer, !1);
          return PDFNet.sendWithPromise('fontCreateTrueTypeFontWithBuffer', {
            doc: doc.id,
            font_path: font_buffer,
            embed: embed,
            subset: subset,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Font, id);
          });
        };
        PDFNet.Font.createCIDTrueTypeFontWithBuffer = function (
          doc,
          font_buffer,
          embed,
          subset,
          encoding,
          ttc_font_index
        ) {
          'undefined' === typeof embed && (embed = !0);
          'undefined' === typeof subset && (subset = !0);
          'undefined' === typeof encoding &&
            (encoding = PDFNet.Font.Encoding.e_IdentityH);
          'undefined' === typeof ttc_font_index && (ttc_font_index = 0);
          checkArguments(
            arguments.length,
            2,
            'createCIDTrueTypeFontWithBuffer',
            '(PDFNet.SDFDoc, ArrayBuffer|TypedArray, boolean, boolean, number, number)',
            [
              [doc, 'SDFDoc'],
              [font_buffer, 'ArrayBuffer'],
              [embed, 'boolean'],
              [subset, 'boolean'],
              [encoding, 'number'],
              [ttc_font_index, 'number'],
            ]
          );
          font_buffer = getArrayBuffer(font_buffer, !1);
          return PDFNet.sendWithPromise('fontCreateCIDTrueTypeFontWithBuffer', {
            doc: doc.id,
            font_path: font_buffer,
            embed: embed,
            subset: subset,
            encoding: encoding,
            ttc_font_index: ttc_font_index,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Font, id);
          });
        };
        PDFNet.Font.createType1FontWithBuffer = function (
          doc,
          font_buffer,
          embed
        ) {
          'undefined' === typeof embed && (embed = !0);
          checkArguments(
            arguments.length,
            2,
            'createType1FontWithBuffer',
            '(PDFNet.SDFDoc, ArrayBuffer|TypedArray, boolean)',
            [
              [doc, 'SDFDoc'],
              [font_buffer, 'ArrayBuffer'],
              [embed, 'boolean'],
            ]
          );
          font_buffer = getArrayBuffer(font_buffer, !1);
          return PDFNet.sendWithPromise('fontCreateType1FontWithBuffer', {
            doc: doc.id,
            font_path: font_buffer,
            embed: embed,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Font, id);
          });
        };
        PDFNet.Font.prototype.getType = function () {
          return PDFNet.sendWithPromise('Font.getType', { font: this.id });
        };
        PDFNet.Font.prototype.isSimple = function () {
          return PDFNet.sendWithPromise('Font.isSimple', { font: this.id });
        };
        PDFNet.Font.getTypeFromObj = function (font_dict) {
          checkArguments(
            arguments.length,
            1,
            'getTypeFromObj',
            '(PDFNet.Obj)',
            [[font_dict, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('fontGetTypeFromObj', {
            font_dict: font_dict.id,
          });
        };
        PDFNet.Font.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('Font.getSDFObj', {
            font: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Font.prototype.getDescriptor = function () {
          return PDFNet.sendWithPromise('Font.getDescriptor', {
            font: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Font.prototype.getName = function () {
          return PDFNet.sendWithPromise('Font.getName', { font: this.id });
        };
        PDFNet.Font.prototype.getFamilyName = function () {
          return PDFNet.sendWithPromise('Font.getFamilyName', {
            font: this.id,
          });
        };
        PDFNet.Font.prototype.isFixedWidth = function () {
          return PDFNet.sendWithPromise('Font.isFixedWidth', { font: this.id });
        };
        PDFNet.Font.prototype.isSerif = function () {
          return PDFNet.sendWithPromise('Font.isSerif', { font: this.id });
        };
        PDFNet.Font.prototype.isSymbolic = function () {
          return PDFNet.sendWithPromise('Font.isSymbolic', { font: this.id });
        };
        PDFNet.Font.prototype.isItalic = function () {
          return PDFNet.sendWithPromise('Font.isItalic', { font: this.id });
        };
        PDFNet.Font.prototype.isAllCap = function () {
          return PDFNet.sendWithPromise('Font.isAllCap', { font: this.id });
        };
        PDFNet.Font.prototype.isForceBold = function () {
          return PDFNet.sendWithPromise('Font.isForceBold', { font: this.id });
        };
        PDFNet.Font.prototype.isHorizontalMode = function () {
          return PDFNet.sendWithPromise('Font.isHorizontalMode', {
            font: this.id,
          });
        };
        PDFNet.Font.prototype.getWidth = function (char_code) {
          checkArguments(arguments.length, 1, 'getWidth', '(number)', [
            [char_code, 'number'],
          ]);
          return PDFNet.sendWithPromise('Font.getWidth', {
            font: this.id,
            char_code: char_code,
          });
        };
        PDFNet.Font.prototype.getMaxWidth = function () {
          return PDFNet.sendWithPromise('Font.getMaxWidth', { font: this.id });
        };
        PDFNet.Font.prototype.getMissingWidth = function () {
          return PDFNet.sendWithPromise('Font.getMissingWidth', {
            font: this.id,
          });
        };
        PDFNet.Font.prototype.getCharCodeIterator = function () {
          return PDFNet.sendWithPromise('Font.getCharCodeIterator', {
            font: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Iterator, id, 'Int');
          });
        };
        PDFNet.Font.prototype.getShapedText = function (text_to_shape) {
          checkArguments(arguments.length, 1, 'getShapedText', '(string)', [
            [text_to_shape, 'string'],
          ]);
          return PDFNet.sendWithPromise('Font.getShapedText', {
            font: this.id,
            text_to_shape: text_to_shape,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ShapedText, id);
          });
        };
        PDFNet.Font.prototype.getEncoding = function () {
          return PDFNet.sendWithPromise('Font.getEncoding', { font: this.id });
        };
        PDFNet.Font.prototype.isEmbedded = function () {
          return PDFNet.sendWithPromise('Font.isEmbedded', { font: this.id });
        };
        PDFNet.Font.prototype.getEmbeddedFontName = function () {
          return PDFNet.sendWithPromise('Font.getEmbeddedFontName', {
            font: this.id,
          });
        };
        PDFNet.Font.prototype.getEmbeddedFont = function () {
          return PDFNet.sendWithPromise('Font.getEmbeddedFont', {
            font: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Font.prototype.getEmbeddedFontBufSize = function () {
          return PDFNet.sendWithPromise('Font.getEmbeddedFontBufSize', {
            font: this.id,
          });
        };
        PDFNet.Font.prototype.getUnitsPerEm = function () {
          return PDFNet.sendWithPromise('Font.getUnitsPerEm', {
            font: this.id,
          });
        };
        PDFNet.Font.prototype.getBBox = function () {
          return PDFNet.sendWithPromise('Font.getBBox', { font: this.id }).then(
            function (id) {
              return new PDFNet.Rect(id);
            }
          );
        };
        PDFNet.Font.prototype.getAscent = function () {
          return PDFNet.sendWithPromise('Font.getAscent', { font: this.id });
        };
        PDFNet.Font.prototype.getDescent = function () {
          return PDFNet.sendWithPromise('Font.getDescent', { font: this.id });
        };
        PDFNet.Font.prototype.getStandardType1FontType = function () {
          return PDFNet.sendWithPromise('Font.getStandardType1FontType', {
            font: this.id,
          });
        };
        PDFNet.Font.prototype.isCFF = function () {
          return PDFNet.sendWithPromise('Font.isCFF', { font: this.id });
        };
        PDFNet.Font.prototype.getType3FontMatrix = function () {
          return PDFNet.sendWithPromise('Font.getType3FontMatrix', {
            font: this.id,
          }).then(function (id) {
            return new PDFNet.Matrix2D(id);
          });
        };
        PDFNet.Font.prototype.getType3GlyphStream = function (char_code) {
          checkArguments(
            arguments.length,
            1,
            'getType3GlyphStream',
            '(number)',
            [[char_code, 'number']]
          );
          return PDFNet.sendWithPromise('Font.getType3GlyphStream', {
            font: this.id,
            char_code: char_code,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Font.prototype.getVerticalAdvance = function (char_code) {
          checkArguments(
            arguments.length,
            1,
            'getVerticalAdvance',
            '(number)',
            [[char_code, 'number']]
          );
          return PDFNet.sendWithPromise('Font.getVerticalAdvance', {
            font: this.id,
            char_code: char_code,
          });
        };
        PDFNet.Font.prototype.getDescendant = function () {
          return PDFNet.sendWithPromise('Font.getDescendant', {
            font: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Font, id);
          });
        };
        PDFNet.Font.prototype.mapToCID = function (char_code) {
          checkArguments(arguments.length, 1, 'mapToCID', '(number)', [
            [char_code, 'number'],
          ]);
          return PDFNet.sendWithPromise('Font.mapToCID', {
            font: this.id,
            char_code: char_code,
          });
        };
        PDFNet.Function.create = function (funct_dict) {
          'undefined' === typeof funct_dict &&
            (funct_dict = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'create', '(PDFNet.Obj)', [
            [funct_dict, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('functionCreate', {
            funct_dict: funct_dict.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Function, id);
          });
        };
        PDFNet.Function.prototype.getType = function () {
          return PDFNet.sendWithPromise('Function.getType', { f: this.id });
        };
        PDFNet.Function.prototype.getInputCardinality = function () {
          return PDFNet.sendWithPromise('Function.getInputCardinality', {
            f: this.id,
          });
        };
        PDFNet.Function.prototype.getOutputCardinality = function () {
          return PDFNet.sendWithPromise('Function.getOutputCardinality', {
            f: this.id,
          });
        };
        PDFNet.Function.prototype.eval = function (inval, outval) {
          checkArguments(arguments.length, 2, 'eval', '(number, number)', [
            [inval, 'number'],
            [outval, 'number'],
          ]);
          return PDFNet.sendWithPromise('Function.eval', {
            f: this.id,
            inval: inval,
            outval: outval,
          });
        };
        PDFNet.Function.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('Function.getSDFObj', {
            f: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Highlights.create = function () {
          return PDFNet.sendWithPromise('highlightsCreate', {}).then(
            function (id) {
              return createDestroyableObj(PDFNet.Highlights, id);
            }
          );
        };
        PDFNet.Highlights.prototype.copyCtor = function () {
          return PDFNet.sendWithPromise('Highlights.copyCtor', {
            hlts: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Highlights, id);
          });
        };
        PDFNet.Highlights.prototype.add = function (hlts) {
          checkArguments(arguments.length, 1, 'add', '(PDFNet.Highlights)', [
            [hlts, 'Object', PDFNet.Highlights, 'Highlights'],
          ]);
          return PDFNet.sendWithPromise('Highlights.add', {
            hlts2: this.id,
            hlts: hlts.id,
          });
        };
        PDFNet.Highlights.prototype.saveToString = function () {
          return PDFNet.sendWithPromise('Highlights.saveToString', {
            hlts: this.id,
          });
        };
        PDFNet.Highlights.prototype.clear = function () {
          return PDFNet.sendWithPromise('Highlights.clear', { hlts: this.id });
        };
        PDFNet.Highlights.prototype.begin = function (doc) {
          checkArguments(arguments.length, 1, 'begin', '(PDFNet.PDFDoc)', [
            [doc, 'PDFDoc'],
          ]);
          return PDFNet.sendWithPromise('Highlights.begin', {
            hlts: this.id,
            doc: doc.id,
          });
        };
        PDFNet.Highlights.prototype.hasNext = function () {
          return PDFNet.sendWithPromise('Highlights.hasNext', {
            hlts: this.id,
          });
        };
        PDFNet.Highlights.prototype.next = function () {
          return PDFNet.sendWithPromise('Highlights.next', { hlts: this.id });
        };
        PDFNet.Highlights.prototype.getCurrentPageNumber = function () {
          return PDFNet.sendWithPromise('Highlights.getCurrentPageNumber', {
            hlts: this.id,
          });
        };
        PDFNet.Highlights.prototype.getCurrentTextRange = function () {
          return PDFNet.sendWithPromise('Highlights.getCurrentTextRange', {
            hlts: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TextRange, id);
          });
        };
        PDFNet.Image.createFromMemory = function (
          doc,
          buf,
          width,
          height,
          bpc,
          color_space,
          encoder_hints
        ) {
          'undefined' === typeof encoder_hints &&
            (encoder_hints = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            6,
            'createFromMemory',
            '(PDFNet.SDFDoc, ArrayBuffer|TypedArray, number, number, number, PDFNet.ColorSpace, PDFNet.Obj)',
            [
              [doc, 'SDFDoc'],
              [buf, 'ArrayBuffer'],
              [width, 'number'],
              [height, 'number'],
              [bpc, 'number'],
              [color_space, 'Object', PDFNet.ColorSpace, 'ColorSpace'],
              [encoder_hints, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          var bufArrayBuffer = getArrayBuffer(buf, !1);
          return PDFNet.sendWithPromise('imageCreateFromMemory', {
            doc: doc.id,
            buf: bufArrayBuffer,
            width: width,
            height: height,
            bpc: bpc,
            color_space: color_space.id,
            encoder_hints: encoder_hints.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Image, id);
          });
        };
        PDFNet.Image.createFromMemory2 = function (doc, buf, encoder_hints) {
          'undefined' === typeof encoder_hints &&
            (encoder_hints = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            2,
            'createFromMemory2',
            '(PDFNet.SDFDoc, ArrayBuffer|TypedArray, PDFNet.Obj)',
            [
              [doc, 'SDFDoc'],
              [buf, 'ArrayBuffer'],
              [encoder_hints, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          var bufArrayBuffer = getArrayBuffer(buf, !1);
          return PDFNet.sendWithPromise('imageCreateFromMemory2', {
            doc: doc.id,
            buf: bufArrayBuffer,
            encoder_hints: encoder_hints.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Image, id);
          });
        };
        PDFNet.Image.createFromStream = function (
          doc,
          image_data,
          width,
          height,
          bpc,
          color_space,
          encoder_hints
        ) {
          'undefined' === typeof encoder_hints &&
            (encoder_hints = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            6,
            'createFromStream',
            '(PDFNet.SDFDoc, PDFNet.FilterReader, number, number, number, PDFNet.ColorSpace, PDFNet.Obj)',
            [
              [doc, 'SDFDoc'],
              [image_data, 'Object', PDFNet.FilterReader, 'FilterReader'],
              [width, 'number'],
              [height, 'number'],
              [bpc, 'number'],
              [color_space, 'Object', PDFNet.ColorSpace, 'ColorSpace'],
              [encoder_hints, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          return PDFNet.sendWithPromise('imageCreateFromStream', {
            doc: doc.id,
            image_data: image_data.id,
            width: width,
            height: height,
            bpc: bpc,
            color_space: color_space.id,
            encoder_hints: encoder_hints.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Image, id);
          });
        };
        PDFNet.Image.createFromStream2 = function (
          doc,
          image_data,
          encoder_hints
        ) {
          'undefined' === typeof encoder_hints &&
            (encoder_hints = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            2,
            'createFromStream2',
            '(PDFNet.SDFDoc, PDFNet.Filter, PDFNet.Obj)',
            [
              [doc, 'SDFDoc'],
              [image_data, 'Object', PDFNet.Filter, 'Filter'],
              [encoder_hints, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          0 != image_data.id && avoidCleanup(image_data.id);
          return PDFNet.sendWithPromise('imageCreateFromStream2', {
            doc: doc.id,
            no_own_image_data: image_data.id,
            encoder_hints: encoder_hints.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Image, id);
          });
        };
        PDFNet.Image.createImageMask = function (
          doc,
          buf,
          width,
          height,
          encoder_hints
        ) {
          'undefined' === typeof encoder_hints &&
            (encoder_hints = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            4,
            'createImageMask',
            '(PDFNet.SDFDoc, ArrayBuffer|TypedArray, number, number, PDFNet.Obj)',
            [
              [doc, 'SDFDoc'],
              [buf, 'ArrayBuffer'],
              [width, 'number'],
              [height, 'number'],
              [encoder_hints, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          var bufArrayBuffer = getArrayBuffer(buf, !1);
          return PDFNet.sendWithPromise('imageCreateImageMask', {
            doc: doc.id,
            buf: bufArrayBuffer,
            width: width,
            height: height,
            encoder_hints: encoder_hints.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Image, id);
          });
        };
        PDFNet.Image.createImageMaskFromStream = function (
          doc,
          image_data,
          width,
          height,
          encoder_hints
        ) {
          'undefined' === typeof encoder_hints &&
            (encoder_hints = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            4,
            'createImageMaskFromStream',
            '(PDFNet.SDFDoc, PDFNet.FilterReader, number, number, PDFNet.Obj)',
            [
              [doc, 'SDFDoc'],
              [image_data, 'Object', PDFNet.FilterReader, 'FilterReader'],
              [width, 'number'],
              [height, 'number'],
              [encoder_hints, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          return PDFNet.sendWithPromise('imageCreateImageMaskFromStream', {
            doc: doc.id,
            image_data: image_data.id,
            width: width,
            height: height,
            encoder_hints: encoder_hints.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Image, id);
          });
        };
        PDFNet.Image.createSoftMask = function (
          doc,
          buf,
          width,
          height,
          bpc,
          encoder_hints
        ) {
          'undefined' === typeof encoder_hints &&
            (encoder_hints = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            5,
            'createSoftMask',
            '(PDFNet.SDFDoc, ArrayBuffer|TypedArray, number, number, number, PDFNet.Obj)',
            [
              [doc, 'SDFDoc'],
              [buf, 'ArrayBuffer'],
              [width, 'number'],
              [height, 'number'],
              [bpc, 'number'],
              [encoder_hints, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          var bufArrayBuffer = getArrayBuffer(buf, !1);
          return PDFNet.sendWithPromise('imageCreateSoftMask', {
            doc: doc.id,
            buf: bufArrayBuffer,
            width: width,
            height: height,
            bpc: bpc,
            encoder_hints: encoder_hints.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Image, id);
          });
        };
        PDFNet.Image.createSoftMaskFromStream = function (
          doc,
          image_data,
          width,
          height,
          bpc,
          encoder_hints
        ) {
          'undefined' === typeof encoder_hints &&
            (encoder_hints = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            5,
            'createSoftMaskFromStream',
            '(PDFNet.SDFDoc, PDFNet.FilterReader, number, number, number, PDFNet.Obj)',
            [
              [doc, 'SDFDoc'],
              [image_data, 'Object', PDFNet.FilterReader, 'FilterReader'],
              [width, 'number'],
              [height, 'number'],
              [bpc, 'number'],
              [encoder_hints, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          return PDFNet.sendWithPromise('imageCreateSoftMaskFromStream', {
            doc: doc.id,
            image_data: image_data.id,
            width: width,
            height: height,
            bpc: bpc,
            encoder_hints: encoder_hints.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Image, id);
          });
        };
        PDFNet.Image.createDirectFromMemory = function (
          doc,
          buf,
          width,
          height,
          bpc,
          color_space,
          input_format
        ) {
          checkArguments(
            arguments.length,
            7,
            'createDirectFromMemory',
            '(PDFNet.SDFDoc, ArrayBuffer|TypedArray, number, number, number, PDFNet.ColorSpace, number)',
            [
              [doc, 'SDFDoc'],
              [buf, 'ArrayBuffer'],
              [width, 'number'],
              [height, 'number'],
              [bpc, 'number'],
              [color_space, 'Object', PDFNet.ColorSpace, 'ColorSpace'],
              [input_format, 'number'],
            ]
          );
          var bufArrayBuffer = getArrayBuffer(buf, !1);
          return PDFNet.sendWithPromise('imageCreateDirectFromMemory', {
            doc: doc.id,
            buf: bufArrayBuffer,
            width: width,
            height: height,
            bpc: bpc,
            color_space: color_space.id,
            input_format: input_format,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Image, id);
          });
        };
        PDFNet.Image.createDirectFromStream = function (
          doc,
          image_data,
          width,
          height,
          bpc,
          color_space,
          input_format
        ) {
          checkArguments(
            arguments.length,
            7,
            'createDirectFromStream',
            '(PDFNet.SDFDoc, PDFNet.FilterReader, number, number, number, PDFNet.ColorSpace, number)',
            [
              [doc, 'SDFDoc'],
              [image_data, 'Object', PDFNet.FilterReader, 'FilterReader'],
              [width, 'number'],
              [height, 'number'],
              [bpc, 'number'],
              [color_space, 'Object', PDFNet.ColorSpace, 'ColorSpace'],
              [input_format, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('imageCreateDirectFromStream', {
            doc: doc.id,
            image_data: image_data.id,
            width: width,
            height: height,
            bpc: bpc,
            color_space: color_space.id,
            input_format: input_format,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Image, id);
          });
        };
        PDFNet.Image.createFromObj = function (image_xobject) {
          'undefined' === typeof image_xobject &&
            (image_xobject = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'createFromObj', '(PDFNet.Obj)', [
            [image_xobject, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('imageCreateFromObj', {
            image_xobject: image_xobject.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Image, id);
          });
        };
        PDFNet.Image.prototype.copy = function () {
          return PDFNet.sendWithPromise('Image.copy', { c: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.Image, id);
            }
          );
        };
        PDFNet.Image.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('Image.getSDFObj', {
            img: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Image.prototype.isValid = function () {
          return PDFNet.sendWithPromise('Image.isValid', { img: this.id });
        };
        PDFNet.Image.prototype.getImageData = function () {
          return PDFNet.sendWithPromise('Image.getImageData', {
            img: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Filter, id);
          });
        };
        PDFNet.Image.prototype.getImageDataSize = function () {
          return PDFNet.sendWithPromise('Image.getImageDataSize', {
            img: this.id,
          });
        };
        PDFNet.Image.prototype.getImageColorSpace = function () {
          return PDFNet.sendWithPromise('Image.getImageColorSpace', {
            img: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorSpace, id);
          });
        };
        PDFNet.Image.prototype.getImageWidth = function () {
          return PDFNet.sendWithPromise('Image.getImageWidth', {
            img: this.id,
          });
        };
        PDFNet.Image.prototype.getImageHeight = function () {
          return PDFNet.sendWithPromise('Image.getImageHeight', {
            img: this.id,
          });
        };
        PDFNet.Image.prototype.getDecodeArray = function () {
          return PDFNet.sendWithPromise('Image.getDecodeArray', {
            img: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Image.prototype.getBitsPerComponent = function () {
          return PDFNet.sendWithPromise('Image.getBitsPerComponent', {
            img: this.id,
          });
        };
        PDFNet.Image.prototype.getComponentNum = function () {
          return PDFNet.sendWithPromise('Image.getComponentNum', {
            img: this.id,
          });
        };
        PDFNet.Image.prototype.isImageMask = function () {
          return PDFNet.sendWithPromise('Image.isImageMask', { img: this.id });
        };
        PDFNet.Image.prototype.isImageInterpolate = function () {
          return PDFNet.sendWithPromise('Image.isImageInterpolate', {
            img: this.id,
          });
        };
        PDFNet.Image.prototype.getMask = function () {
          return PDFNet.sendWithPromise('Image.getMask', { img: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.Obj, id);
            }
          );
        };
        PDFNet.Image.prototype.setMask = function (image_mask) {
          checkArguments(arguments.length, 1, 'setMask', '(PDFNet.Image)', [
            [image_mask, 'Object', PDFNet.Image, 'Image'],
          ]);
          return PDFNet.sendWithPromise('Image.setMask', {
            img: this.id,
            image_mask: image_mask.id,
          });
        };
        PDFNet.Image.prototype.setMaskWithObj = function (mask) {
          checkArguments(
            arguments.length,
            1,
            'setMaskWithObj',
            '(PDFNet.Obj)',
            [[mask, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('Image.setMaskWithObj', {
            img: this.id,
            mask: mask.id,
          });
        };
        PDFNet.Image.prototype.getSoftMask = function () {
          return PDFNet.sendWithPromise('Image.getSoftMask', {
            img: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Image.prototype.setSoftMask = function (soft_mask) {
          checkArguments(arguments.length, 1, 'setSoftMask', '(PDFNet.Image)', [
            [soft_mask, 'Object', PDFNet.Image, 'Image'],
          ]);
          return PDFNet.sendWithPromise('Image.setSoftMask', {
            img: this.id,
            soft_mask: soft_mask.id,
          });
        };
        PDFNet.Image.prototype.getImageRenderingIntent = function () {
          return PDFNet.sendWithPromise('Image.getImageRenderingIntent', {
            img: this.id,
          });
        };
        PDFNet.Image.prototype.exportFromStream = function (writer) {
          checkArguments(
            arguments.length,
            1,
            'exportFromStream',
            '(PDFNet.FilterWriter)',
            [[writer, 'Object', PDFNet.FilterWriter, 'FilterWriter']]
          );
          return PDFNet.sendWithPromise('Image.exportFromStream', {
            img: this.id,
            writer: writer.id,
          });
        };
        PDFNet.Image.prototype.exportAsTiffFromStream = function (writer) {
          checkArguments(
            arguments.length,
            1,
            'exportAsTiffFromStream',
            '(PDFNet.FilterWriter)',
            [[writer, 'Object', PDFNet.FilterWriter, 'FilterWriter']]
          );
          return PDFNet.sendWithPromise('Image.exportAsTiffFromStream', {
            img: this.id,
            writer: writer.id,
          });
        };
        PDFNet.Image.prototype.exportAsPngFromStream = function (writer) {
          checkArguments(
            arguments.length,
            1,
            'exportAsPngFromStream',
            '(PDFNet.FilterWriter)',
            [[writer, 'Object', PDFNet.FilterWriter, 'FilterWriter']]
          );
          return PDFNet.sendWithPromise('Image.exportAsPngFromStream', {
            img: this.id,
            writer: writer.id,
          });
        };
        PDFNet.PageLabel.create = function (doc, style, prefix, start_at) {
          'undefined' === typeof prefix && (prefix = '');
          'undefined' === typeof start_at && (start_at = 1);
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, number, string, number)',
            [
              [doc, 'SDFDoc'],
              [style, 'number'],
              [prefix, 'string'],
              [start_at, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('pageLabelCreate', {
            doc: doc.id,
            style: style,
            prefix: prefix,
            start_at: start_at,
          }).then(function (id) {
            return new PDFNet.PageLabel(id);
          });
        };
        PDFNet.PageLabel.createFromObj = function (l, first_page, last_page) {
          'undefined' === typeof l && (l = new PDFNet.Obj('0'));
          'undefined' === typeof first_page && (first_page = -1);
          'undefined' === typeof last_page && (last_page = -1);
          checkArguments(
            arguments.length,
            0,
            'createFromObj',
            '(PDFNet.Obj, number, number)',
            [
              [l, 'Object', PDFNet.Obj, 'Obj'],
              [first_page, 'number'],
              [last_page, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('pageLabelCreateFromObj', {
            l: l.id,
            first_page: first_page,
            last_page: last_page,
          }).then(function (id) {
            return new PDFNet.PageLabel(id);
          });
        };
        PDFNet.PageLabel.prototype.compare = function (d) {
          checkArguments(arguments.length, 1, 'compare', '(PDFNet.PageLabel)', [
            [d, 'Structure', PDFNet.PageLabel, 'PageLabel'],
          ]);
          checkThisYieldFunction('compare', this.yieldFunction);
          checkParamsYieldFunction('compare', [[d, 0]]);
          var me = this;
          this.yieldFunction = 'PageLabel.compare';
          return PDFNet.sendWithPromise('PageLabel.compare', {
            l: this,
            d: d,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.l, me);
            return id.result;
          });
        };
        PDFNet.PageLabel.prototype.isValid = function () {
          checkThisYieldFunction('isValid', this.yieldFunction);
          return PDFNet.sendWithPromise('PageLabel.isValid', { l: this });
        };
        PDFNet.PageLabel.prototype.getLabelTitle = function (page_num) {
          checkArguments(arguments.length, 1, 'getLabelTitle', '(number)', [
            [page_num, 'number'],
          ]);
          checkThisYieldFunction('getLabelTitle', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'PageLabel.getLabelTitle';
          return PDFNet.sendWithPromise('PageLabel.getLabelTitle', {
            l: this,
            page_num: page_num,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.l, me);
            return id.result;
          });
        };
        PDFNet.PageLabel.prototype.setStyle = function (style) {
          checkArguments(arguments.length, 1, 'setStyle', '(number)', [
            [style, 'number'],
          ]);
          checkThisYieldFunction('setStyle', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'PageLabel.setStyle';
          return PDFNet.sendWithPromise('PageLabel.setStyle', {
            l: this,
            style: style,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.PageLabel.prototype.getStyle = function () {
          checkThisYieldFunction('getStyle', this.yieldFunction);
          return PDFNet.sendWithPromise('PageLabel.getStyle', { l: this });
        };
        PDFNet.PageLabel.prototype.getPrefix = function () {
          checkThisYieldFunction('getPrefix', this.yieldFunction);
          return PDFNet.sendWithPromise('PageLabel.getPrefix', { l: this });
        };
        PDFNet.PageLabel.prototype.setPrefix = function (prefix) {
          checkArguments(arguments.length, 1, 'setPrefix', '(string)', [
            [prefix, 'string'],
          ]);
          checkThisYieldFunction('setPrefix', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'PageLabel.setPrefix';
          return PDFNet.sendWithPromise('PageLabel.setPrefix', {
            l: this,
            prefix: prefix,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.PageLabel.prototype.getStart = function () {
          checkThisYieldFunction('getStart', this.yieldFunction);
          return PDFNet.sendWithPromise('PageLabel.getStart', { l: this });
        };
        PDFNet.PageLabel.prototype.setStart = function (start_at) {
          checkArguments(arguments.length, 1, 'setStart', '(number)', [
            [start_at, 'number'],
          ]);
          checkThisYieldFunction('setStart', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'PageLabel.setStart';
          return PDFNet.sendWithPromise('PageLabel.setStart', {
            l: this,
            start_at: start_at,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.PageLabel.prototype.getFirstPageNum = function () {
          checkThisYieldFunction('getFirstPageNum', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'PageLabel.getFirstPageNum';
          return PDFNet.sendWithPromise('PageLabel.getFirstPageNum', {
            l: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.l, me);
            return id.result;
          });
        };
        PDFNet.PageLabel.prototype.getLastPageNum = function () {
          checkThisYieldFunction('getLastPageNum', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'PageLabel.getLastPageNum';
          return PDFNet.sendWithPromise('PageLabel.getLastPageNum', {
            l: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.l, me);
            return id.result;
          });
        };
        PDFNet.PageLabel.prototype.getSDFObj = function () {
          checkThisYieldFunction('getSDFObj', this.yieldFunction);
          return PDFNet.sendWithPromise('PageLabel.getSDFObj', {
            l: this,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PageSet.create = function () {
          return PDFNet.sendWithPromise('pageSetCreate', {}).then(
            function (id) {
              return createDestroyableObj(PDFNet.PageSet, id);
            }
          );
        };
        PDFNet.PageSet.createSinglePage = function (one_page) {
          checkArguments(arguments.length, 1, 'createSinglePage', '(number)', [
            [one_page, 'number'],
          ]);
          return PDFNet.sendWithPromise('pageSetCreateSinglePage', {
            one_page: one_page,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.PageSet, id);
          });
        };
        PDFNet.PageSet.createRange = function (range_start, range_end) {
          checkArguments(
            arguments.length,
            2,
            'createRange',
            '(number, number)',
            [
              [range_start, 'number'],
              [range_end, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('pageSetCreateRange', {
            range_start: range_start,
            range_end: range_end,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.PageSet, id);
          });
        };
        PDFNet.PageSet.createFilteredRange = function (
          range_start,
          range_end,
          filter
        ) {
          'undefined' === typeof filter &&
            (filter = PDFNet.PageSet.Filter.e_all);
          checkArguments(
            arguments.length,
            2,
            'createFilteredRange',
            '(number, number, number)',
            [
              [range_start, 'number'],
              [range_end, 'number'],
              [filter, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('pageSetCreateFilteredRange', {
            range_start: range_start,
            range_end: range_end,
            filter: filter,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.PageSet, id);
          });
        };
        PDFNet.PageSet.prototype.addPage = function (one_page) {
          checkArguments(arguments.length, 1, 'addPage', '(number)', [
            [one_page, 'number'],
          ]);
          return PDFNet.sendWithPromise('PageSet.addPage', {
            page_set: this.id,
            one_page: one_page,
          });
        };
        PDFNet.PageSet.prototype.addRange = function (
          range_start,
          range_end,
          filter
        ) {
          'undefined' === typeof filter &&
            (filter = PDFNet.PageSet.Filter.e_all);
          checkArguments(
            arguments.length,
            2,
            'addRange',
            '(number, number, number)',
            [
              [range_start, 'number'],
              [range_end, 'number'],
              [filter, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('PageSet.addRange', {
            page_set: this.id,
            range_start: range_start,
            range_end: range_end,
            filter: filter,
          });
        };
        PDFNet.PatternColor.create = function (pattern) {
          checkArguments(arguments.length, 1, 'create', '(PDFNet.Obj)', [
            [pattern, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('patternColorCreate', {
            pattern: pattern.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.PatternColor, id);
          });
        };
        PDFNet.PatternColor.getTypeFromObj = function (pattern) {
          checkArguments(
            arguments.length,
            1,
            'getTypeFromObj',
            '(PDFNet.Obj)',
            [[pattern, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('patternColorGetTypeFromObj', {
            pattern: pattern.id,
          });
        };
        PDFNet.PatternColor.prototype.getType = function () {
          return PDFNet.sendWithPromise('PatternColor.getType', {
            pc: this.id,
          });
        };
        PDFNet.PatternColor.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('PatternColor.getSDFObj', {
            pc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PatternColor.prototype.getMatrix = function () {
          return PDFNet.sendWithPromise('PatternColor.getMatrix', {
            pc: this.id,
          }).then(function (id) {
            return new PDFNet.Matrix2D(id);
          });
        };
        PDFNet.PatternColor.prototype.getShading = function () {
          return PDFNet.sendWithPromise('PatternColor.getShading', {
            pc: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Shading, id);
          });
        };
        PDFNet.PatternColor.prototype.getTilingType = function () {
          return PDFNet.sendWithPromise('PatternColor.getTilingType', {
            pc: this.id,
          });
        };
        PDFNet.PatternColor.prototype.getBBox = function () {
          return PDFNet.sendWithPromise('PatternColor.getBBox', {
            pc: this.id,
          }).then(function (id) {
            return new PDFNet.Rect(id);
          });
        };
        PDFNet.PatternColor.prototype.getXStep = function () {
          return PDFNet.sendWithPromise('PatternColor.getXStep', {
            pc: this.id,
          });
        };
        PDFNet.PatternColor.prototype.getYStep = function () {
          return PDFNet.sendWithPromise('PatternColor.getYStep', {
            pc: this.id,
          });
        };
        PDFNet.GeometryCollection.prototype.snapToNearest = function (
          x,
          y,
          mode
        ) {
          checkArguments(
            arguments.length,
            3,
            'snapToNearest',
            '(number, number, number)',
            [
              [x, 'number'],
              [y, 'number'],
              [mode, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('GeometryCollection.snapToNearest', {
            self: this.id,
            x: x,
            y: y,
            mode: mode,
          });
        };
        PDFNet.GeometryCollection.prototype.snapToNearestPixel = function (
          x,
          y,
          dpi,
          mode
        ) {
          checkArguments(
            arguments.length,
            4,
            'snapToNearestPixel',
            '(number, number, number, number)',
            [
              [x, 'number'],
              [y, 'number'],
              [dpi, 'number'],
              [mode, 'number'],
            ]
          );
          return PDFNet.sendWithPromise(
            'GeometryCollection.snapToNearestPixel',
            { self: this.id, x: x, y: y, dpi: dpi, mode: mode }
          );
        };
        PDFNet.DigestAlgorithm.calculateDigest = function (
          in_algorithm,
          in_buffer
        ) {
          checkArguments(
            arguments.length,
            2,
            'calculateDigest',
            '(number, ArrayBuffer|TypedArray)',
            [
              [in_algorithm, 'number'],
              [in_buffer, 'ArrayBuffer'],
            ]
          );
          var in_bufferArrayBuffer = getArrayBuffer(in_buffer, !1);
          return PDFNet.sendWithPromise('digestAlgorithmCalculateDigest', {
            in_algorithm: in_algorithm,
            in_buffer: in_bufferArrayBuffer,
          }).then(function (id) {
            return new Uint8Array(id);
          });
        };
        PDFNet.ObjectIdentifier.createFromPredefined = function (in_oid_enum) {
          checkArguments(
            arguments.length,
            1,
            'createFromPredefined',
            '(number)',
            [[in_oid_enum, 'number']]
          );
          return PDFNet.sendWithPromise(
            'objectIdentifierCreateFromPredefined',
            { in_oid_enum: in_oid_enum }
          ).then(function (id) {
            return createDestroyableObj(PDFNet.ObjectIdentifier, id);
          });
        };
        PDFNet.ObjectIdentifier.createFromIntArray = function (in_list) {
          checkArguments(
            arguments.length,
            1,
            'createFromIntArray',
            '(Array<number>)',
            [[in_list, 'Array']]
          );
          return PDFNet.sendWithPromise('objectIdentifierCreateFromIntArray', {
            in_list: in_list,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ObjectIdentifier, id);
          });
        };
        PDFNet.ObjectIdentifier.createFromDigestAlgorithm = function (
          in_algorithm
        ) {
          checkArguments(
            arguments.length,
            1,
            'createFromDigestAlgorithm',
            '(number)',
            [[in_algorithm, 'number']]
          );
          return PDFNet.sendWithPromise(
            'objectIdentifierCreateFromDigestAlgorithm',
            { in_algorithm: in_algorithm }
          ).then(function (id) {
            return createDestroyableObj(PDFNet.ObjectIdentifier, id);
          });
        };
        PDFNet.ObjectIdentifier.prototype.getRawValue = function () {
          return PDFNet.sendWithPromise('ObjectIdentifier.getRawValue', {
            self: this.id,
          });
        };
        PDFNet.X501DistinguishedName.prototype.hasAttribute = function (
          in_oid
        ) {
          checkArguments(
            arguments.length,
            1,
            'hasAttribute',
            '(PDFNet.ObjectIdentifier)',
            [[in_oid, 'Object', PDFNet.ObjectIdentifier, 'ObjectIdentifier']]
          );
          return PDFNet.sendWithPromise('X501DistinguishedName.hasAttribute', {
            self: this.id,
            in_oid: in_oid.id,
          });
        };
        PDFNet.X501DistinguishedName.prototype.getStringValuesForAttribute =
          function (in_oid) {
            checkArguments(
              arguments.length,
              1,
              'getStringValuesForAttribute',
              '(PDFNet.ObjectIdentifier)',
              [[in_oid, 'Object', PDFNet.ObjectIdentifier, 'ObjectIdentifier']]
            );
            return PDFNet.sendWithPromise(
              'X501DistinguishedName.getStringValuesForAttribute',
              { self: this.id, in_oid: in_oid.id }
            );
          };
        PDFNet.X501DistinguishedName.prototype.getAllAttributesAndValues =
          function () {
            return PDFNet.sendWithPromise(
              'X501DistinguishedName.getAllAttributesAndValues',
              { self: this.id }
            ).then(function (idArray) {
              for (var retArray = [], i = 0; i < idArray.length; ++i) {
                var id = idArray[i];
                if ('0' === id) return null;
                id = new PDFNet.X501AttributeTypeAndValue(id);
                retArray.push(id);
                createdObjects.push({ name: id.name, id: id.id });
              }
              return retArray;
            });
          };
        PDFNet.X509Certificate.createFromBuffer = function (in_cert_buf) {
          checkArguments(
            arguments.length,
            1,
            'createFromBuffer',
            '(ArrayBuffer|TypedArray)',
            [[in_cert_buf, 'ArrayBuffer']]
          );
          var in_cert_bufArrayBuffer = getArrayBuffer(in_cert_buf, !1);
          return PDFNet.sendWithPromise('x509CertificateCreateFromBuffer', {
            in_cert_buf: in_cert_bufArrayBuffer,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.X509Certificate, id);
          });
        };
        PDFNet.X509Certificate.prototype.getIssuerField = function () {
          return PDFNet.sendWithPromise('X509Certificate.getIssuerField', {
            self: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.X501DistinguishedName, id);
          });
        };
        PDFNet.X509Certificate.prototype.getSubjectField = function () {
          return PDFNet.sendWithPromise('X509Certificate.getSubjectField', {
            self: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.X501DistinguishedName, id);
          });
        };
        PDFNet.X509Certificate.prototype.getNotBeforeEpochTime = function () {
          return PDFNet.sendWithPromise(
            'X509Certificate.getNotBeforeEpochTime',
            { self: this.id }
          );
        };
        PDFNet.X509Certificate.prototype.getNotAfterEpochTime = function () {
          return PDFNet.sendWithPromise(
            'X509Certificate.getNotAfterEpochTime',
            { self: this.id }
          );
        };
        PDFNet.X509Certificate.prototype.getRawX509VersionNumber = function () {
          return PDFNet.sendWithPromise(
            'X509Certificate.getRawX509VersionNumber',
            { self: this.id }
          );
        };
        PDFNet.X509Certificate.prototype.toString = function () {
          return PDFNet.sendWithPromise('X509Certificate.toString', {
            self: this.id,
          });
        };
        PDFNet.X509Certificate.prototype.getFingerprint = function (
          in_digest_algorithm
        ) {
          'undefined' === typeof in_digest_algorithm &&
            (in_digest_algorithm = PDFNet.DigestAlgorithm.Type.e_SHA256);
          checkArguments(arguments.length, 0, 'getFingerprint', '(number)', [
            [in_digest_algorithm, 'number'],
          ]);
          return PDFNet.sendWithPromise('X509Certificate.getFingerprint', {
            self: this.id,
            in_digest_algorithm: in_digest_algorithm,
          });
        };
        PDFNet.X509Certificate.prototype.getSerialNumber = function () {
          return PDFNet.sendWithPromise('X509Certificate.getSerialNumber', {
            self: this.id,
          }).then(function (id) {
            return new Uint8Array(id);
          });
        };
        PDFNet.X509Certificate.prototype.getExtensions = function () {
          return PDFNet.sendWithPromise('X509Certificate.getExtensions', {
            self: this.id,
          }).then(function (idArray) {
            for (var retArray = [], i = 0; i < idArray.length; ++i) {
              var id = idArray[i];
              if ('0' === id) return null;
              id = new PDFNet.X509Extension(id);
              retArray.push(id);
              createdObjects.push({ name: id.name, id: id.id });
            }
            return retArray;
          });
        };
        PDFNet.X509Certificate.prototype.getData = function () {
          return PDFNet.sendWithPromise('X509Certificate.getData', {
            self: this.id,
          }).then(function (id) {
            return new Uint8Array(id);
          });
        };
        PDFNet.TimestampingConfiguration.createFromURL = function (in_url) {
          checkArguments(arguments.length, 1, 'createFromURL', '(string)', [
            [in_url, 'string'],
          ]);
          return PDFNet.sendWithPromise(
            'timestampingConfigurationCreateFromURL',
            { in_url: in_url }
          ).then(function (id) {
            return createDestroyableObj(PDFNet.TimestampingConfiguration, id);
          });
        };
        PDFNet.TimestampingConfiguration.prototype.setTimestampAuthorityServerURL =
          function (in_url) {
            checkArguments(
              arguments.length,
              1,
              'setTimestampAuthorityServerURL',
              '(string)',
              [[in_url, 'string']]
            );
            return PDFNet.sendWithPromise(
              'TimestampingConfiguration.setTimestampAuthorityServerURL',
              { self: this.id, in_url: in_url }
            );
          };
        PDFNet.TimestampingConfiguration.prototype.setTimestampAuthorityServerUsername =
          function (in_username) {
            checkArguments(
              arguments.length,
              1,
              'setTimestampAuthorityServerUsername',
              '(string)',
              [[in_username, 'string']]
            );
            return PDFNet.sendWithPromise(
              'TimestampingConfiguration.setTimestampAuthorityServerUsername',
              { self: this.id, in_username: in_username }
            );
          };
        PDFNet.TimestampingConfiguration.prototype.setTimestampAuthorityServerPassword =
          function (in_password) {
            checkArguments(
              arguments.length,
              1,
              'setTimestampAuthorityServerPassword',
              '(string)',
              [[in_password, 'string']]
            );
            return PDFNet.sendWithPromise(
              'TimestampingConfiguration.setTimestampAuthorityServerPassword',
              { self: this.id, in_password: in_password }
            );
          };
        PDFNet.TimestampingConfiguration.prototype.setUseNonce = function (
          in_use_nonce
        ) {
          checkArguments(arguments.length, 1, 'setUseNonce', '(boolean)', [
            [in_use_nonce, 'boolean'],
          ]);
          return PDFNet.sendWithPromise(
            'TimestampingConfiguration.setUseNonce',
            { self: this.id, in_use_nonce: in_use_nonce }
          );
        };
        PDFNet.TimestampingConfiguration.prototype.testConfiguration =
          function (in_opts) {
            checkArguments(
              arguments.length,
              1,
              'testConfiguration',
              '(PDFNet.VerificationOptions)',
              [
                [
                  in_opts,
                  'Object',
                  PDFNet.VerificationOptions,
                  'VerificationOptions',
                ],
              ]
            );
            return PDFNet.sendWithPromise(
              'TimestampingConfiguration.testConfiguration',
              { self: this.id, in_opts: in_opts.id }
            ).then(function (id) {
              return createDestroyableObj(PDFNet.TimestampingResult, id);
            });
          };
        PDFNet.DigitalSignatureField.prototype.hasCryptographicSignature =
          function () {
            checkThisYieldFunction(
              'hasCryptographicSignature',
              this.yieldFunction
            );
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.hasCryptographicSignature',
              { self: this }
            );
          };
        PDFNet.DigitalSignatureField.prototype.getSubFilter = function () {
          checkThisYieldFunction('getSubFilter', this.yieldFunction);
          return PDFNet.sendWithPromise('DigitalSignatureField.getSubFilter', {
            self: this,
          });
        };
        PDFNet.DigitalSignatureField.prototype.getSignatureName = function () {
          checkThisYieldFunction('getSignatureName', this.yieldFunction);
          return PDFNet.sendWithPromise(
            'DigitalSignatureField.getSignatureName',
            { self: this }
          );
        };
        PDFNet.DigitalSignatureField.prototype.getLocation = function () {
          checkThisYieldFunction('getLocation', this.yieldFunction);
          return PDFNet.sendWithPromise('DigitalSignatureField.getLocation', {
            self: this,
          });
        };
        PDFNet.DigitalSignatureField.prototype.getReason = function () {
          checkThisYieldFunction('getReason', this.yieldFunction);
          return PDFNet.sendWithPromise('DigitalSignatureField.getReason', {
            self: this,
          });
        };
        PDFNet.DigitalSignatureField.prototype.getContactInfo = function () {
          checkThisYieldFunction('getContactInfo', this.yieldFunction);
          return PDFNet.sendWithPromise(
            'DigitalSignatureField.getContactInfo',
            { self: this }
          );
        };
        PDFNet.DigitalSignatureField.prototype.getCertCount = function () {
          checkThisYieldFunction('getCertCount', this.yieldFunction);
          return PDFNet.sendWithPromise('DigitalSignatureField.getCertCount', {
            self: this,
          });
        };
        PDFNet.DigitalSignatureField.prototype.hasVisibleAppearance =
          function () {
            checkThisYieldFunction('hasVisibleAppearance', this.yieldFunction);
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.hasVisibleAppearance',
              { self: this }
            );
          };
        PDFNet.DigitalSignatureField.prototype.setContactInfo = function (
          in_contact_info
        ) {
          checkArguments(arguments.length, 1, 'setContactInfo', '(string)', [
            [in_contact_info, 'string'],
          ]);
          checkThisYieldFunction('setContactInfo', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'DigitalSignatureField.setContactInfo';
          return PDFNet.sendWithPromise(
            'DigitalSignatureField.setContactInfo',
            { self: this, in_contact_info: in_contact_info }
          ).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.DigitalSignatureField.prototype.setLocation = function (
          in_location
        ) {
          checkArguments(arguments.length, 1, 'setLocation', '(string)', [
            [in_location, 'string'],
          ]);
          checkThisYieldFunction('setLocation', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'DigitalSignatureField.setLocation';
          return PDFNet.sendWithPromise('DigitalSignatureField.setLocation', {
            self: this,
            in_location: in_location,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.DigitalSignatureField.prototype.setReason = function (
          in_reason
        ) {
          checkArguments(arguments.length, 1, 'setReason', '(string)', [
            [in_reason, 'string'],
          ]);
          checkThisYieldFunction('setReason', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'DigitalSignatureField.setReason';
          return PDFNet.sendWithPromise('DigitalSignatureField.setReason', {
            self: this,
            in_reason: in_reason,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.DigitalSignatureField.prototype.setDocumentPermissions =
          function (in_perms) {
            checkArguments(
              arguments.length,
              1,
              'setDocumentPermissions',
              '(number)',
              [[in_perms, 'number']]
            );
            checkThisYieldFunction(
              'setDocumentPermissions',
              this.yieldFunction
            );
            var me = this;
            this.yieldFunction = 'DigitalSignatureField.setDocumentPermissions';
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.setDocumentPermissions',
              { self: this, in_perms: in_perms }
            ).then(function (id) {
              me.yieldFunction = void 0;
              copyFunc(id, me);
            });
          };
        PDFNet.DigitalSignatureField.prototype.signOnNextSave = function (
          in_pkcs12_keyfile_path,
          in_password
        ) {
          checkArguments(
            arguments.length,
            2,
            'signOnNextSave',
            '(string, string)',
            [
              [in_pkcs12_keyfile_path, 'string'],
              [in_password, 'string'],
            ]
          );
          checkThisYieldFunction('signOnNextSave', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'DigitalSignatureField.signOnNextSave';
          return PDFNet.sendWithPromise(
            'DigitalSignatureField.signOnNextSave',
            {
              self: this,
              in_pkcs12_keyfile_path: in_pkcs12_keyfile_path,
              in_password: in_password,
            }
          ).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.DigitalSignatureField.prototype.certifyOnNextSave = function (
          in_pkcs12_keyfile_path,
          in_password
        ) {
          checkArguments(
            arguments.length,
            2,
            'certifyOnNextSave',
            '(string, string)',
            [
              [in_pkcs12_keyfile_path, 'string'],
              [in_password, 'string'],
            ]
          );
          checkThisYieldFunction('certifyOnNextSave', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'DigitalSignatureField.certifyOnNextSave';
          return PDFNet.sendWithPromise(
            'DigitalSignatureField.certifyOnNextSave',
            {
              self: this,
              in_pkcs12_keyfile_path: in_pkcs12_keyfile_path,
              in_password: in_password,
            }
          ).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.DigitalSignatureField.prototype.isLockedByDigitalSignature =
          function () {
            checkThisYieldFunction(
              'isLockedByDigitalSignature',
              this.yieldFunction
            );
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.isLockedByDigitalSignature',
              { self: this }
            );
          };
        PDFNet.DigitalSignatureField.prototype.getDocumentPermissions =
          function () {
            checkThisYieldFunction(
              'getDocumentPermissions',
              this.yieldFunction
            );
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.getDocumentPermissions',
              { self: this }
            );
          };
        PDFNet.DigitalSignatureField.prototype.clearSignature = function () {
          checkThisYieldFunction('clearSignature', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'DigitalSignatureField.clearSignature';
          return PDFNet.sendWithPromise(
            'DigitalSignatureField.clearSignature',
            { self: this }
          ).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.DigitalSignatureField.createFromField = function (in_field) {
          checkArguments(
            arguments.length,
            1,
            'createFromField',
            '(PDFNet.Field)',
            [[in_field, 'Structure', PDFNet.Field, 'Field']]
          );
          checkParamsYieldFunction('createFromField', [[in_field, 0]]);
          return PDFNet.sendWithPromise(
            'digitalSignatureFieldCreateFromField',
            { in_field: in_field }
          ).then(function (id) {
            return new PDFNet.DigitalSignatureField(id);
          });
        };
        PDFNet.DigitalSignatureField.prototype.getSigningTime = function () {
          checkThisYieldFunction('getSigningTime', this.yieldFunction);
          return PDFNet.sendWithPromise(
            'DigitalSignatureField.getSigningTime',
            { self: this }
          ).then(function (id) {
            return new PDFNet.Date(id);
          });
        };
        PDFNet.DigitalSignatureField.prototype.getCert = function (in_index) {
          checkArguments(arguments.length, 1, 'getCert', '(number)', [
            [in_index, 'number'],
          ]);
          checkThisYieldFunction('getCert', this.yieldFunction);
          return PDFNet.sendWithPromise('DigitalSignatureField.getCert', {
            self: this,
            in_index: in_index,
          }).then(function (id) {
            return new Uint8Array(id);
          });
        };
        PDFNet.DigitalSignatureField.prototype.setFieldPermissions = function (
          in_action,
          in_field_names_list
        ) {
          'undefined' === typeof in_field_names_list &&
            (in_field_names_list = []);
          checkArguments(
            arguments.length,
            1,
            'setFieldPermissions',
            '(number, Array<string>)',
            [
              [in_action, 'number'],
              [in_field_names_list, 'Array'],
            ]
          );
          checkThisYieldFunction('setFieldPermissions', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'DigitalSignatureField.setFieldPermissions';
          return PDFNet.sendWithPromise(
            'DigitalSignatureField.setFieldPermissions',
            {
              self: this,
              in_action: in_action,
              in_field_names_list: in_field_names_list,
            }
          ).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.DigitalSignatureField.prototype.signOnNextSaveFromBuffer =
          function (in_pkcs12_buffer, in_password) {
            checkArguments(
              arguments.length,
              2,
              'signOnNextSaveFromBuffer',
              '(ArrayBuffer|TypedArray, string)',
              [
                [in_pkcs12_buffer, 'ArrayBuffer'],
                [in_password, 'string'],
              ]
            );
            checkThisYieldFunction(
              'signOnNextSaveFromBuffer',
              this.yieldFunction
            );
            var me = this;
            this.yieldFunction =
              'DigitalSignatureField.signOnNextSaveFromBuffer';
            var in_pkcs12_bufferArrayBuffer = getArrayBuffer(
              in_pkcs12_buffer,
              !1
            );
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.signOnNextSaveFromBuffer',
              {
                self: this,
                in_pkcs12_buffer: in_pkcs12_bufferArrayBuffer,
                in_password: in_password,
              }
            ).then(function (id) {
              me.yieldFunction = void 0;
              copyFunc(id, me);
            });
          };
        PDFNet.DigitalSignatureField.prototype.signOnNextSaveWithCustomHandler =
          function (in_signature_handler_id) {
            checkArguments(
              arguments.length,
              1,
              'signOnNextSaveWithCustomHandler',
              '(number)',
              [[in_signature_handler_id, 'number']]
            );
            checkThisYieldFunction(
              'signOnNextSaveWithCustomHandler',
              this.yieldFunction
            );
            var me = this;
            this.yieldFunction =
              'DigitalSignatureField.signOnNextSaveWithCustomHandler';
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.signOnNextSaveWithCustomHandler',
              { self: this, in_signature_handler_id: in_signature_handler_id }
            ).then(function (id) {
              me.yieldFunction = void 0;
              copyFunc(id, me);
            });
          };
        PDFNet.DigitalSignatureField.prototype.certifyOnNextSaveFromBuffer =
          function (in_pkcs12_buffer, in_password) {
            checkArguments(
              arguments.length,
              2,
              'certifyOnNextSaveFromBuffer',
              '(ArrayBuffer|TypedArray, string)',
              [
                [in_pkcs12_buffer, 'ArrayBuffer'],
                [in_password, 'string'],
              ]
            );
            checkThisYieldFunction(
              'certifyOnNextSaveFromBuffer',
              this.yieldFunction
            );
            var me = this;
            this.yieldFunction =
              'DigitalSignatureField.certifyOnNextSaveFromBuffer';
            var in_pkcs12_bufferArrayBuffer = getArrayBuffer(
              in_pkcs12_buffer,
              !1
            );
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.certifyOnNextSaveFromBuffer',
              {
                self: this,
                in_pkcs12_buffer: in_pkcs12_bufferArrayBuffer,
                in_password: in_password,
              }
            ).then(function (id) {
              me.yieldFunction = void 0;
              copyFunc(id, me);
            });
          };
        PDFNet.DigitalSignatureField.prototype.certifyOnNextSaveWithCustomHandler =
          function (in_signature_handler_id) {
            checkArguments(
              arguments.length,
              1,
              'certifyOnNextSaveWithCustomHandler',
              '(number)',
              [[in_signature_handler_id, 'number']]
            );
            checkThisYieldFunction(
              'certifyOnNextSaveWithCustomHandler',
              this.yieldFunction
            );
            var me = this;
            this.yieldFunction =
              'DigitalSignatureField.certifyOnNextSaveWithCustomHandler';
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.certifyOnNextSaveWithCustomHandler',
              { self: this, in_signature_handler_id: in_signature_handler_id }
            ).then(function (id) {
              me.yieldFunction = void 0;
              copyFunc(id, me);
            });
          };
        PDFNet.DigitalSignatureField.prototype.getSDFObj = function () {
          checkThisYieldFunction('getSDFObj', this.yieldFunction);
          return PDFNet.sendWithPromise('DigitalSignatureField.getSDFObj', {
            self: this,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.DigitalSignatureField.prototype.getLockedFields = function () {
          checkThisYieldFunction('getLockedFields', this.yieldFunction);
          return PDFNet.sendWithPromise(
            'DigitalSignatureField.getLockedFields',
            { self: this }
          );
        };
        PDFNet.DigitalSignatureField.prototype.verify = function (in_opts) {
          checkArguments(
            arguments.length,
            1,
            'verify',
            '(PDFNet.VerificationOptions)',
            [
              [
                in_opts,
                'Object',
                PDFNet.VerificationOptions,
                'VerificationOptions',
              ],
            ]
          );
          checkThisYieldFunction('verify', this.yieldFunction);
          return PDFNet.sendWithPromise('DigitalSignatureField.verify', {
            self: this,
            in_opts: in_opts.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.VerificationResult, id);
          });
        };
        PDFNet.DigitalSignatureField.prototype.isCertification = function () {
          checkThisYieldFunction('isCertification', this.yieldFunction);
          return PDFNet.sendWithPromise(
            'DigitalSignatureField.isCertification',
            { self: this }
          );
        };
        PDFNet.DigitalSignatureField.prototype.getSignerCertFromCMS =
          function () {
            checkThisYieldFunction('getSignerCertFromCMS', this.yieldFunction);
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.getSignerCertFromCMS',
              { self: this }
            ).then(function (id) {
              return createDestroyableObj(PDFNet.X509Certificate, id);
            });
          };
        PDFNet.DigitalSignatureField.prototype.getByteRanges = function () {
          checkThisYieldFunction('getByteRanges', this.yieldFunction);
          return PDFNet.sendWithPromise('DigitalSignatureField.getByteRanges', {
            self: this,
          }).then(function (idArray) {
            for (var retArray = [], i = 0; i < idArray.length; ++i) {
              var id = idArray[i];
              if ('0' === id) return null;
              id = new PDFNet.ByteRange(id);
              retArray.push(id);
            }
            return retArray;
          });
        };
        PDFNet.DigitalSignatureField.prototype.enableLTVOfflineVerification =
          function (in_verification_result) {
            checkArguments(
              arguments.length,
              1,
              'enableLTVOfflineVerification',
              '(PDFNet.VerificationResult)',
              [
                [
                  in_verification_result,
                  'Object',
                  PDFNet.VerificationResult,
                  'VerificationResult',
                ],
              ]
            );
            checkThisYieldFunction(
              'enableLTVOfflineVerification',
              this.yieldFunction
            );
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.enableLTVOfflineVerification',
              { self: this, in_verification_result: in_verification_result.id }
            );
          };
        PDFNet.DigitalSignatureField.prototype.timestampOnNextSave = function (
          in_timestamping_config,
          in_timestamp_response_verification_options
        ) {
          checkArguments(
            arguments.length,
            2,
            'timestampOnNextSave',
            '(PDFNet.TimestampingConfiguration, PDFNet.VerificationOptions)',
            [
              [
                in_timestamping_config,
                'Object',
                PDFNet.TimestampingConfiguration,
                'TimestampingConfiguration',
              ],
              [
                in_timestamp_response_verification_options,
                'Object',
                PDFNet.VerificationOptions,
                'VerificationOptions',
              ],
            ]
          );
          checkThisYieldFunction('timestampOnNextSave', this.yieldFunction);
          return PDFNet.sendWithPromise(
            'DigitalSignatureField.timestampOnNextSave',
            {
              self: this,
              in_timestamping_config: in_timestamping_config.id,
              in_timestamp_response_verification_options:
                in_timestamp_response_verification_options.id,
            }
          );
        };
        PDFNet.DigitalSignatureField.prototype.generateContentsWithEmbeddedTimestamp =
          function (
            in_timestamping_config,
            in_timestamp_response_verification_options
          ) {
            checkArguments(
              arguments.length,
              2,
              'generateContentsWithEmbeddedTimestamp',
              '(PDFNet.TimestampingConfiguration, PDFNet.VerificationOptions)',
              [
                [
                  in_timestamping_config,
                  'Object',
                  PDFNet.TimestampingConfiguration,
                  'TimestampingConfiguration',
                ],
                [
                  in_timestamp_response_verification_options,
                  'Object',
                  PDFNet.VerificationOptions,
                  'VerificationOptions',
                ],
              ]
            );
            checkThisYieldFunction(
              'generateContentsWithEmbeddedTimestamp',
              this.yieldFunction
            );
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.generateContentsWithEmbeddedTimestamp',
              {
                self: this,
                in_timestamping_config: in_timestamping_config.id,
                in_timestamp_response_verification_options:
                  in_timestamp_response_verification_options.id,
              }
            ).then(function (id) {
              return createDestroyableObj(PDFNet.TimestampingResult, id);
            });
          };
        PDFNet.DigitalSignatureField.prototype.useSubFilter = function (
          in_subfilter_type,
          in_make_mandatory
        ) {
          'undefined' === typeof in_make_mandatory && (in_make_mandatory = !0);
          checkArguments(
            arguments.length,
            1,
            'useSubFilter',
            '(number, boolean)',
            [
              [in_subfilter_type, 'number'],
              [in_make_mandatory, 'boolean'],
            ]
          );
          checkThisYieldFunction('useSubFilter', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'DigitalSignatureField.useSubFilter';
          return PDFNet.sendWithPromise('DigitalSignatureField.useSubFilter', {
            self: this,
            in_subfilter_type: in_subfilter_type,
            in_make_mandatory: in_make_mandatory,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.DigitalSignatureField.prototype.calculateDigest = function (
          in_digest_algorithm_type
        ) {
          'undefined' === typeof in_digest_algorithm_type &&
            (in_digest_algorithm_type = PDFNet.DigestAlgorithm.Type.e_SHA256);
          checkArguments(arguments.length, 0, 'calculateDigest', '(number)', [
            [in_digest_algorithm_type, 'number'],
          ]);
          checkThisYieldFunction('calculateDigest', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'DigitalSignatureField.calculateDigest';
          return PDFNet.sendWithPromise(
            'DigitalSignatureField.calculateDigest',
            { self: this, in_digest_algorithm_type: in_digest_algorithm_type }
          ).then(function (id) {
            me.yieldFunction = void 0;
            id.result = new Uint8Array(id.result);
            copyFunc(id.self, me);
            return id.result;
          });
        };
        PDFNet.DigitalSignatureField.prototype.setPreferredDigestAlgorithm =
          function (in_digest_algorithm_type, in_make_mandatory) {
            'undefined' === typeof in_make_mandatory &&
              (in_make_mandatory = !0);
            checkArguments(
              arguments.length,
              1,
              'setPreferredDigestAlgorithm',
              '(number, boolean)',
              [
                [in_digest_algorithm_type, 'number'],
                [in_make_mandatory, 'boolean'],
              ]
            );
            checkThisYieldFunction(
              'setPreferredDigestAlgorithm',
              this.yieldFunction
            );
            var me = this;
            this.yieldFunction =
              'DigitalSignatureField.setPreferredDigestAlgorithm';
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.setPreferredDigestAlgorithm',
              {
                self: this,
                in_digest_algorithm_type: in_digest_algorithm_type,
                in_make_mandatory: in_make_mandatory,
              }
            ).then(function (id) {
              me.yieldFunction = void 0;
              copyFunc(id, me);
            });
          };
        PDFNet.DigitalSignatureField.prototype.createSigDictForCustomCertification =
          function (
            in_filter_name,
            in_subfilter_type,
            in_contents_size_to_reserve
          ) {
            checkArguments(
              arguments.length,
              3,
              'createSigDictForCustomCertification',
              '(string, number, number)',
              [
                [in_filter_name, 'string'],
                [in_subfilter_type, 'number'],
                [in_contents_size_to_reserve, 'number'],
              ]
            );
            checkThisYieldFunction(
              'createSigDictForCustomCertification',
              this.yieldFunction
            );
            var me = this;
            this.yieldFunction =
              'DigitalSignatureField.createSigDictForCustomCertification';
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.createSigDictForCustomCertification',
              {
                self: this,
                in_filter_name: in_filter_name,
                in_subfilter_type: in_subfilter_type,
                in_contents_size_to_reserve: in_contents_size_to_reserve,
              }
            ).then(function (id) {
              me.yieldFunction = void 0;
              copyFunc(id, me);
            });
          };
        PDFNet.DigitalSignatureField.prototype.createSigDictForCustomSigning =
          function (
            in_filter_name,
            in_subfilter_type,
            in_contents_size_to_reserve
          ) {
            checkArguments(
              arguments.length,
              3,
              'createSigDictForCustomSigning',
              '(string, number, number)',
              [
                [in_filter_name, 'string'],
                [in_subfilter_type, 'number'],
                [in_contents_size_to_reserve, 'number'],
              ]
            );
            checkThisYieldFunction(
              'createSigDictForCustomSigning',
              this.yieldFunction
            );
            var me = this;
            this.yieldFunction =
              'DigitalSignatureField.createSigDictForCustomSigning';
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.createSigDictForCustomSigning',
              {
                self: this,
                in_filter_name: in_filter_name,
                in_subfilter_type: in_subfilter_type,
                in_contents_size_to_reserve: in_contents_size_to_reserve,
              }
            ).then(function (id) {
              me.yieldFunction = void 0;
              copyFunc(id, me);
            });
          };
        PDFNet.DigitalSignatureField.prototype.setSigDictTimeOfSigning =
          function (in_date) {
            checkArguments(
              arguments.length,
              1,
              'setSigDictTimeOfSigning',
              '(PDFNet.Date)',
              [[in_date, 'Structure', PDFNet.Date, 'Date']]
            );
            checkThisYieldFunction(
              'setSigDictTimeOfSigning',
              this.yieldFunction
            );
            checkParamsYieldFunction('setSigDictTimeOfSigning', [[in_date, 0]]);
            var me = this;
            this.yieldFunction =
              'DigitalSignatureField.setSigDictTimeOfSigning';
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.setSigDictTimeOfSigning',
              { self: this, in_date: in_date }
            ).then(function (id) {
              me.yieldFunction = void 0;
              copyFunc(id, me);
            });
          };
        PDFNet.DigitalSignatureField.signDigestBuffer = function (
          in_digest,
          in_pkcs12_buffer,
          in_keyfile_password,
          in_pades_mode,
          in_digest_algorithm_type
        ) {
          checkArguments(
            arguments.length,
            5,
            'signDigestBuffer',
            '(ArrayBuffer|TypedArray, ArrayBuffer|TypedArray, string, boolean, number)',
            [
              [in_digest, 'ArrayBuffer'],
              [in_pkcs12_buffer, 'ArrayBuffer'],
              [in_keyfile_password, 'string'],
              [in_pades_mode, 'boolean'],
              [in_digest_algorithm_type, 'number'],
            ]
          );
          var in_digestArrayBuffer = getArrayBuffer(in_digest, !1),
            in_pkcs12_bufferArrayBuffer = getArrayBuffer(in_pkcs12_buffer, !1);
          return PDFNet.sendWithPromise(
            'digitalSignatureFieldSignDigestBuffer',
            {
              in_digest_buf: in_digestArrayBuffer,
              in_pkcs12_buffer: in_pkcs12_bufferArrayBuffer,
              in_keyfile_password: in_keyfile_password,
              in_pades_mode: in_pades_mode,
              in_digest_algorithm_type: in_digest_algorithm_type,
            }
          ).then(function (id) {
            return new Uint8Array(id);
          });
        };
        PDFNet.DigitalSignatureField.generateESSSigningCertPAdESAttribute =
          function (in_signer_cert, in_digest_algorithm_type) {
            checkArguments(
              arguments.length,
              2,
              'generateESSSigningCertPAdESAttribute',
              '(PDFNet.X509Certificate, number)',
              [
                [
                  in_signer_cert,
                  'Object',
                  PDFNet.X509Certificate,
                  'X509Certificate',
                ],
                [in_digest_algorithm_type, 'number'],
              ]
            );
            return PDFNet.sendWithPromise(
              'digitalSignatureFieldGenerateESSSigningCertPAdESAttribute',
              {
                in_signer_cert: in_signer_cert.id,
                in_digest_algorithm_type: in_digest_algorithm_type,
              }
            ).then(function (id) {
              return new Uint8Array(id);
            });
          };
        PDFNet.DigitalSignatureField.generateCMSSignedAttributes = function (
          in_digest_buf,
          in_custom_signedattributes_buf
        ) {
          'undefined' === typeof in_custom_signedattributes_buf &&
            (in_custom_signedattributes_buf = new ArrayBuffer(0));
          checkArguments(
            arguments.length,
            1,
            'generateCMSSignedAttributes',
            '(ArrayBuffer|TypedArray, ArrayBuffer|TypedArray)',
            [
              [in_digest_buf, 'ArrayBuffer'],
              [in_custom_signedattributes_buf, 'ArrayBuffer'],
            ]
          );
          var in_digest_bufArrayBuffer = getArrayBuffer(in_digest_buf, !1),
            in_custom_signedattributes_bufArrayBuffer = getArrayBuffer(
              in_custom_signedattributes_buf,
              !1
            );
          return PDFNet.sendWithPromise(
            'digitalSignatureFieldGenerateCMSSignedAttributes',
            {
              in_digest_buf: in_digest_bufArrayBuffer,
              in_custom_signedattributes_buf:
                in_custom_signedattributes_bufArrayBuffer,
            }
          ).then(function (id) {
            return new Uint8Array(id);
          });
        };
        PDFNet.DigitalSignatureField.generateCMSSignature = function (
          in_signer_cert,
          in_chain_certs_list,
          in_digest_algorithm_oid,
          in_signature_algorithm_oid,
          in_signature_value_buf,
          in_signedattributes_buf
        ) {
          checkArguments(
            arguments.length,
            6,
            'generateCMSSignature',
            '(PDFNet.X509Certificate, Array<Core.PDFNet.X509Certificate>, PDFNet.ObjectIdentifier, PDFNet.ObjectIdentifier, ArrayBuffer|TypedArray, ArrayBuffer|TypedArray)',
            [
              [
                in_signer_cert,
                'Object',
                PDFNet.X509Certificate,
                'X509Certificate',
              ],
              [in_chain_certs_list, 'Array'],
              [
                in_digest_algorithm_oid,
                'Object',
                PDFNet.ObjectIdentifier,
                'ObjectIdentifier',
              ],
              [
                in_signature_algorithm_oid,
                'Object',
                PDFNet.ObjectIdentifier,
                'ObjectIdentifier',
              ],
              [in_signature_value_buf, 'ArrayBuffer'],
              [in_signedattributes_buf, 'ArrayBuffer'],
            ]
          );
          var in_signature_value_bufArrayBuffer = getArrayBuffer(
              in_signature_value_buf,
              !1
            ),
            in_signedattributes_bufArrayBuffer = getArrayBuffer(
              in_signedattributes_buf,
              !1
            );
          in_chain_certs_list = Array.from(in_chain_certs_list, function (x) {
            return x.id;
          });
          return PDFNet.sendWithPromise(
            'digitalSignatureFieldGenerateCMSSignature',
            {
              in_signer_cert: in_signer_cert.id,
              in_chain_certs_list: in_chain_certs_list,
              in_digest_algorithm_oid: in_digest_algorithm_oid.id,
              in_signature_algorithm_oid: in_signature_algorithm_oid.id,
              in_signature_value_buf: in_signature_value_bufArrayBuffer,
              in_signedattributes_buf: in_signedattributes_bufArrayBuffer,
            }
          ).then(function (id) {
            return new Uint8Array(id);
          });
        };
        PDFNet.PDFDoc.prototype.getTriggerAction = function (trigger) {
          checkArguments(arguments.length, 1, 'getTriggerAction', '(number)', [
            [trigger, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDoc.getTriggerAction', {
            doc: this.id,
            trigger: trigger,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDoc.prototype.isXFA = function () {
          return PDFNet.sendWithPromise('PDFDoc.isXFA', { doc: this.id });
        };
        PDFNet.PDFDoc.create = function () {
          return PDFNet.sendWithPromise('pdfDocCreate', {}).then(function (id) {
            return createDestroyableObj(PDFNet.PDFDoc, id);
          });
        };
        PDFNet.PDFDoc.createFromFilter = function (stream) {
          checkArguments(
            arguments.length,
            1,
            'createFromFilter',
            '(PDFNet.Filter)',
            [[stream, 'Object', PDFNet.Filter, 'Filter']]
          );
          0 != stream.id && avoidCleanup(stream.id);
          return PDFNet.sendWithPromise('pdfDocCreateFromFilter', {
            no_own_stream: stream.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.PDFDoc, id);
          });
        };
        PDFNet.PDFDoc.createFromBuffer = function (buf) {
          checkArguments(
            arguments.length,
            1,
            'createFromBuffer',
            '(ArrayBuffer|TypedArray)',
            [[buf, 'ArrayBuffer']]
          );
          var bufArrayBuffer = getArrayBuffer(buf, !1);
          return PDFNet.sendWithPromise('pdfDocCreateFromBuffer', {
            buf: bufArrayBuffer,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.PDFDoc, id);
          });
        };
        PDFNet.PDFDoc.createFromLayoutEls = function (buf) {
          checkArguments(
            arguments.length,
            1,
            'createFromLayoutEls',
            '(ArrayBuffer|TypedArray)',
            [[buf, 'ArrayBuffer']]
          );
          var bufArrayBuffer = getArrayBuffer(buf, !1);
          return PDFNet.sendWithPromise('pdfDocCreateFromLayoutEls', {
            buf: bufArrayBuffer,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.PDFDoc, id);
          });
        };
        PDFNet.PDFDoc.prototype.createShallowCopy = function () {
          return PDFNet.sendWithPromise('PDFDoc.createShallowCopy', {
            source: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.PDFDoc, id);
          });
        };
        PDFNet.PDFDoc.prototype.isEncrypted = function () {
          return PDFNet.sendWithPromise('PDFDoc.isEncrypted', { doc: this.id });
        };
        PDFNet.PDFDoc.prototype.initStdSecurityHandlerUString = function (
          password
        ) {
          checkArguments(
            arguments.length,
            1,
            'initStdSecurityHandlerUString',
            '(string)',
            [[password, 'string']]
          );
          return PDFNet.sendWithPromise(
            'PDFDoc.initStdSecurityHandlerUString',
            { doc: this.id, password: password }
          );
        };
        PDFNet.PDFDoc.prototype.initStdSecurityHandlerBuffer = function (
          password_buf
        ) {
          checkArguments(
            arguments.length,
            1,
            'initStdSecurityHandlerBuffer',
            '(ArrayBuffer|TypedArray)',
            [[password_buf, 'ArrayBuffer']]
          );
          var password_bufArrayBuffer = getArrayBuffer(password_buf, !1);
          return PDFNet.sendWithPromise('PDFDoc.initStdSecurityHandlerBuffer', {
            doc: this.id,
            password_buf: password_bufArrayBuffer,
          });
        };
        PDFNet.PDFDoc.prototype.getSecurityHandler = function () {
          return PDFNet.sendWithPromise('PDFDoc.getSecurityHandler', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SecurityHandler, id);
          });
        };
        PDFNet.PDFDoc.prototype.setSecurityHandler = function (handler) {
          checkArguments(
            arguments.length,
            1,
            'setSecurityHandler',
            '(PDFNet.SecurityHandler)',
            [[handler, 'Object', PDFNet.SecurityHandler, 'SecurityHandler']]
          );
          0 != handler.id && avoidCleanup(handler.id);
          return PDFNet.sendWithPromise('PDFDoc.setSecurityHandler', {
            doc: this.id,
            no_own_handler: handler.id,
          });
        };
        PDFNet.PDFDoc.prototype.removeSecurity = function () {
          return PDFNet.sendWithPromise('PDFDoc.removeSecurity', {
            doc: this.id,
          });
        };
        PDFNet.PDFDoc.prototype.getDocInfo = function () {
          return PDFNet.sendWithPromise('PDFDoc.getDocInfo', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PDFDocInfo, id);
          });
        };
        PDFNet.PDFDoc.prototype.getViewPrefs = function () {
          return PDFNet.sendWithPromise('PDFDoc.getViewPrefs', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PDFDocViewPrefs, id);
          });
        };
        PDFNet.PDFDoc.prototype.isModified = function () {
          return PDFNet.sendWithPromise('PDFDoc.isModified', { doc: this.id });
        };
        PDFNet.PDFDoc.prototype.hasRepairedXRef = function () {
          return PDFNet.sendWithPromise('PDFDoc.hasRepairedXRef', {
            doc: this.id,
          });
        };
        PDFNet.PDFDoc.prototype.isLinearized = function () {
          return PDFNet.sendWithPromise('PDFDoc.isLinearized', {
            doc: this.id,
          });
        };
        PDFNet.PDFDoc.prototype.saveMemoryBuffer = function (flags) {
          checkArguments(arguments.length, 1, 'saveMemoryBuffer', '(number)', [
            [flags, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDoc.saveMemoryBuffer', {
            doc: this.id,
            flags: flags,
          }).then(function (id) {
            return new Uint8Array(id);
          });
        };
        PDFNet.PDFDoc.prototype.saveStream = function (stream, flags) {
          checkArguments(
            arguments.length,
            2,
            'saveStream',
            '(PDFNet.Filter, number)',
            [
              [stream, 'Object', PDFNet.Filter, 'Filter'],
              [flags, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDoc.saveStream', {
            doc: this.id,
            stream: stream.id,
            flags: flags,
          });
        };
        PDFNet.PDFDoc.prototype.saveCustomSignatureBuffer = function (
          in_signature,
          in_field
        ) {
          checkArguments(
            arguments.length,
            2,
            'saveCustomSignatureBuffer',
            '(ArrayBuffer|TypedArray, PDFNet.DigitalSignatureField)',
            [
              [in_signature, 'ArrayBuffer'],
              [
                in_field,
                'Structure',
                PDFNet.DigitalSignatureField,
                'DigitalSignatureField',
              ],
            ]
          );
          checkParamsYieldFunction('saveCustomSignatureBuffer', [
            [in_field, 1],
          ]);
          var in_signatureArrayBuffer = getArrayBuffer(in_signature, !1);
          return PDFNet.sendWithPromise('PDFDoc.saveCustomSignatureBuffer', {
            doc: this.id,
            in_signature_buf: in_signatureArrayBuffer,
            in_field: in_field,
          }).then(function (id) {
            return new Uint8Array(id);
          });
        };
        PDFNet.PDFDoc.prototype.saveCustomSignatureStream = function (
          in_signature,
          in_field
        ) {
          checkArguments(
            arguments.length,
            2,
            'saveCustomSignatureStream',
            '(ArrayBuffer|TypedArray, PDFNet.DigitalSignatureField)',
            [
              [in_signature, 'ArrayBuffer'],
              [
                in_field,
                'Structure',
                PDFNet.DigitalSignatureField,
                'DigitalSignatureField',
              ],
            ]
          );
          checkParamsYieldFunction('saveCustomSignatureStream', [
            [in_field, 1],
          ]);
          var in_signatureArrayBuffer = getArrayBuffer(in_signature, !1);
          return PDFNet.sendWithPromise('PDFDoc.saveCustomSignatureStream', {
            doc: this.id,
            in_signature_buf: in_signatureArrayBuffer,
            in_field: in_field,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Filter, id);
          });
        };
        PDFNet.PDFDoc.prototype.getPageIterator = function (page_number) {
          'undefined' === typeof page_number && (page_number = 1);
          checkArguments(arguments.length, 0, 'getPageIterator', '(number)', [
            [page_number, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDoc.getPageIterator', {
            doc: this.id,
            page_number: page_number,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Iterator, id, 'Page');
          });
        };
        PDFNet.PDFDoc.prototype.getPage = function (page_number) {
          checkArguments(arguments.length, 1, 'getPage', '(number)', [
            [page_number, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDoc.getPage', {
            doc: this.id,
            page_number: page_number,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Page, id);
          });
        };
        PDFNet.PDFDoc.prototype.pageRemove = function (page_itr) {
          checkArguments(
            arguments.length,
            1,
            'pageRemove',
            '(PDFNet.Iterator)',
            [[page_itr, 'Object', PDFNet.Iterator, 'Iterator']]
          );
          return PDFNet.sendWithPromise('PDFDoc.pageRemove', {
            doc: this.id,
            page_itr: page_itr.id,
          });
        };
        PDFNet.PDFDoc.prototype.pageInsert = function (where, page) {
          checkArguments(
            arguments.length,
            2,
            'pageInsert',
            '(PDFNet.Iterator, PDFNet.Page)',
            [
              [where, 'Object', PDFNet.Iterator, 'Iterator'],
              [page, 'Object', PDFNet.Page, 'Page'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDoc.pageInsert', {
            doc: this.id,
            where: where.id,
            page: page.id,
          });
        };
        PDFNet.PDFDoc.prototype.insertPages = function (
          insert_before_page_number,
          src_doc,
          start_page,
          end_page,
          flag
        ) {
          checkArguments(
            arguments.length,
            5,
            'insertPages',
            '(number, PDFNet.PDFDoc, number, number, number)',
            [
              [insert_before_page_number, 'number'],
              [src_doc, 'PDFDoc'],
              [start_page, 'number'],
              [end_page, 'number'],
              [flag, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDoc.insertPages', {
            dest_doc: this.id,
            insert_before_page_number: insert_before_page_number,
            src_doc: src_doc.id,
            start_page: start_page,
            end_page: end_page,
            flag: flag,
          });
        };
        PDFNet.PDFDoc.prototype.insertPageSet = function (
          insert_before_page_number,
          src_doc,
          source_page_set,
          flag
        ) {
          checkArguments(
            arguments.length,
            4,
            'insertPageSet',
            '(number, PDFNet.PDFDoc, PDFNet.PageSet, number)',
            [
              [insert_before_page_number, 'number'],
              [src_doc, 'PDFDoc'],
              [source_page_set, 'Object', PDFNet.PageSet, 'PageSet'],
              [flag, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDoc.insertPageSet', {
            dest_doc: this.id,
            insert_before_page_number: insert_before_page_number,
            src_doc: src_doc.id,
            source_page_set: source_page_set.id,
            flag: flag,
          });
        };
        PDFNet.PDFDoc.prototype.movePages = function (
          move_before_page_number,
          src_doc,
          start_page,
          end_page,
          flag
        ) {
          checkArguments(
            arguments.length,
            5,
            'movePages',
            '(number, PDFNet.PDFDoc, number, number, number)',
            [
              [move_before_page_number, 'number'],
              [src_doc, 'PDFDoc'],
              [start_page, 'number'],
              [end_page, 'number'],
              [flag, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDoc.movePages', {
            dest_doc: this.id,
            move_before_page_number: move_before_page_number,
            src_doc: src_doc.id,
            start_page: start_page,
            end_page: end_page,
            flag: flag,
          });
        };
        PDFNet.PDFDoc.prototype.movePageSet = function (
          move_before_page_number,
          src_doc,
          source_page_set,
          flag
        ) {
          checkArguments(
            arguments.length,
            4,
            'movePageSet',
            '(number, PDFNet.PDFDoc, PDFNet.PageSet, number)',
            [
              [move_before_page_number, 'number'],
              [src_doc, 'PDFDoc'],
              [source_page_set, 'Object', PDFNet.PageSet, 'PageSet'],
              [flag, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDoc.movePageSet', {
            dest_doc: this.id,
            move_before_page_number: move_before_page_number,
            src_doc: src_doc.id,
            source_page_set: source_page_set.id,
            flag: flag,
          });
        };
        PDFNet.PDFDoc.prototype.pagePushFront = function (page) {
          checkArguments(
            arguments.length,
            1,
            'pagePushFront',
            '(PDFNet.Page)',
            [[page, 'Object', PDFNet.Page, 'Page']]
          );
          return PDFNet.sendWithPromise('PDFDoc.pagePushFront', {
            doc: this.id,
            page: page.id,
          });
        };
        PDFNet.PDFDoc.prototype.pagePushBack = function (page) {
          checkArguments(arguments.length, 1, 'pagePushBack', '(PDFNet.Page)', [
            [page, 'Object', PDFNet.Page, 'Page'],
          ]);
          return PDFNet.sendWithPromise('PDFDoc.pagePushBack', {
            doc: this.id,
            page: page.id,
          });
        };
        PDFNet.PDFDoc.prototype.pageCreate = function (media_box) {
          'undefined' === typeof media_box &&
            (media_box = new PDFNet.Rect(0, 0, 612, 792));
          checkArguments(arguments.length, 0, 'pageCreate', '(PDFNet.Rect)', [
            [media_box, 'Structure', PDFNet.Rect, 'Rect'],
          ]);
          checkParamsYieldFunction('pageCreate', [[media_box, 0]]);
          return PDFNet.sendWithPromise('PDFDoc.pageCreate', {
            doc: this.id,
            media_box: media_box,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Page, id);
          });
        };
        PDFNet.PDFDoc.prototype.appendTextDiffPage = function (page1, page2) {
          checkArguments(
            arguments.length,
            2,
            'appendTextDiffPage',
            '(PDFNet.Page, PDFNet.Page)',
            [
              [page1, 'Object', PDFNet.Page, 'Page'],
              [page2, 'Object', PDFNet.Page, 'Page'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDoc.appendTextDiffPage', {
            doc: this.id,
            page1: page1.id,
            page2: page2.id,
          });
        };
        PDFNet.PDFDoc.prototype.appendTextDiffDoc = function (
          doc1,
          doc2,
          options
        ) {
          'undefined' === typeof options && (options = null);
          checkArguments(
            arguments.length,
            2,
            'appendTextDiffDoc',
            '(PDFNet.PDFDoc, PDFNet.PDFDoc, PDFNet.OptionBase)',
            [
              [doc1, 'PDFDoc'],
              [doc2, 'PDFDoc'],
              [options, 'OptionBase'],
            ]
          );
          checkParamsYieldFunction('appendTextDiffDoc', [[options, 2]]);
          options = options ? options.getJsonString() : '{}';
          return PDFNet.sendWithPromise('PDFDoc.appendTextDiffDoc', {
            doc: this.id,
            doc1: doc1.id,
            doc2: doc2.id,
            options: options,
          });
        };
        PDFNet.PDFDoc.highlightTextDiff = function (doc1, doc2, options) {
          'undefined' === typeof options && (options = null);
          checkArguments(
            arguments.length,
            2,
            'highlightTextDiff',
            '(PDFNet.PDFDoc, PDFNet.PDFDoc, PDFNet.OptionBase)',
            [
              [doc1, 'PDFDoc'],
              [doc2, 'PDFDoc'],
              [options, 'OptionBase'],
            ]
          );
          checkParamsYieldFunction('highlightTextDiff', [[options, 2]]);
          options = options ? options.getJsonString() : '{}';
          return PDFNet.sendWithPromise('pdfDocHighlightTextDiff', {
            doc1: doc1.id,
            doc2: doc2.id,
            options: options,
          });
        };
        PDFNet.PDFDoc.prototype.getFirstBookmark = function () {
          return PDFNet.sendWithPromise('PDFDoc.getFirstBookmark', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Bookmark, id);
          });
        };
        PDFNet.PDFDoc.prototype.addRootBookmark = function (root_bookmark) {
          checkArguments(
            arguments.length,
            1,
            'addRootBookmark',
            '(PDFNet.Bookmark)',
            [[root_bookmark, 'Object', PDFNet.Bookmark, 'Bookmark']]
          );
          return PDFNet.sendWithPromise('PDFDoc.addRootBookmark', {
            doc: this.id,
            root_bookmark: root_bookmark.id,
          });
        };
        PDFNet.PDFDoc.prototype.getTrailer = function () {
          return PDFNet.sendWithPromise('PDFDoc.getTrailer', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDoc.prototype.getRoot = function () {
          return PDFNet.sendWithPromise('PDFDoc.getRoot', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDoc.prototype.jsContextInitialize = function () {
          return PDFNet.sendWithPromise('PDFDoc.jsContextInitialize', {
            doc: this.id,
          });
        };
        PDFNet.PDFDoc.prototype.getPages = function () {
          return PDFNet.sendWithPromise('PDFDoc.getPages', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDoc.prototype.getPageCount = function () {
          return PDFNet.sendWithPromise('PDFDoc.getPageCount', {
            doc: this.id,
          });
        };
        PDFNet.PDFDoc.prototype.getDownloadedByteCount = function () {
          return PDFNet.sendWithPromise('PDFDoc.getDownloadedByteCount', {
            doc: this.id,
          });
        };
        PDFNet.PDFDoc.prototype.getTotalRemoteByteCount = function () {
          return PDFNet.sendWithPromise('PDFDoc.getTotalRemoteByteCount', {
            doc: this.id,
          });
        };
        PDFNet.PDFDoc.prototype.getFieldIteratorBegin = function () {
          return PDFNet.sendWithPromise('PDFDoc.getFieldIteratorBegin', {
            doc: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Iterator, id, 'Field');
          });
        };
        PDFNet.PDFDoc.prototype.getFieldIterator = function (field_name) {
          checkArguments(arguments.length, 1, 'getFieldIterator', '(string)', [
            [field_name, 'string'],
          ]);
          return PDFNet.sendWithPromise('PDFDoc.getFieldIterator', {
            doc: this.id,
            field_name: field_name,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Iterator, id, 'Field');
          });
        };
        PDFNet.PDFDoc.prototype.getField = function (field_name) {
          checkArguments(arguments.length, 1, 'getField', '(string)', [
            [field_name, 'string'],
          ]);
          return PDFNet.sendWithPromise('PDFDoc.getField', {
            doc: this.id,
            field_name: field_name,
          }).then(function (id) {
            return new PDFNet.Field(id);
          });
        };
        PDFNet.PDFDoc.prototype.fieldCreate = function (
          field_name,
          type,
          field_value,
          def_field_value
        ) {
          'undefined' === typeof field_value &&
            (field_value = new PDFNet.Obj('0'));
          'undefined' === typeof def_field_value &&
            (def_field_value = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            2,
            'fieldCreate',
            '(string, number, PDFNet.Obj, PDFNet.Obj)',
            [
              [field_name, 'string'],
              [type, 'number'],
              [field_value, 'Object', PDFNet.Obj, 'Obj'],
              [def_field_value, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDoc.fieldCreate', {
            doc: this.id,
            field_name: field_name,
            type: type,
            field_value: field_value.id,
            def_field_value: def_field_value.id,
          }).then(function (id) {
            return new PDFNet.Field(id);
          });
        };
        PDFNet.PDFDoc.prototype.fieldCreateFromStrings = function (
          field_name,
          type,
          field_value,
          def_field_value
        ) {
          'undefined' === typeof def_field_value && (def_field_value = '');
          checkArguments(
            arguments.length,
            3,
            'fieldCreateFromStrings',
            '(string, number, string, string)',
            [
              [field_name, 'string'],
              [type, 'number'],
              [field_value, 'string'],
              [def_field_value, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDoc.fieldCreateFromStrings', {
            doc: this.id,
            field_name: field_name,
            type: type,
            field_value: field_value,
            def_field_value: def_field_value,
          }).then(function (id) {
            return new PDFNet.Field(id);
          });
        };
        PDFNet.PDFDoc.prototype.refreshFieldAppearances = function () {
          return PDFNet.sendWithPromise('PDFDoc.refreshFieldAppearances', {
            doc: this.id,
          });
        };
        PDFNet.PDFDoc.prototype.refreshAnnotAppearances = function (options) {
          'undefined' === typeof options && (options = null);
          checkArguments(
            arguments.length,
            0,
            'refreshAnnotAppearances',
            '(PDFNet.OptionBase)',
            [[options, 'OptionBase']]
          );
          checkParamsYieldFunction('refreshAnnotAppearances', [[options, 0]]);
          options = options ? options.getJsonString() : '{}';
          return PDFNet.sendWithPromise('PDFDoc.refreshAnnotAppearances', {
            doc: this.id,
            options: options,
          });
        };
        PDFNet.PDFDoc.prototype.flattenAnnotations = function (forms_only) {
          'undefined' === typeof forms_only && (forms_only = !1);
          checkArguments(
            arguments.length,
            0,
            'flattenAnnotations',
            '(boolean)',
            [[forms_only, 'boolean']]
          );
          return PDFNet.sendWithPromise('PDFDoc.flattenAnnotations', {
            doc: this.id,
            forms_only: forms_only,
          });
        };
        PDFNet.PDFDoc.prototype.getAcroForm = function () {
          return PDFNet.sendWithPromise('PDFDoc.getAcroForm', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDoc.prototype.fdfExtract = function (flag) {
          'undefined' === typeof flag &&
            (flag = PDFNet.PDFDoc.ExtractFlag.e_forms_only);
          checkArguments(arguments.length, 0, 'fdfExtract', '(number)', [
            [flag, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDoc.fdfExtract', {
            doc: this.id,
            flag: flag,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.FDFDoc, id);
          });
        };
        PDFNet.PDFDoc.prototype.fdfExtractPageSet = function (
          pages_to_extract,
          flag
        ) {
          'undefined' === typeof flag &&
            (flag = PDFNet.PDFDoc.ExtractFlag.e_forms_only);
          checkArguments(
            arguments.length,
            1,
            'fdfExtractPageSet',
            '(PDFNet.PageSet, number)',
            [
              [pages_to_extract, 'Object', PDFNet.PageSet, 'PageSet'],
              [flag, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDoc.fdfExtractPageSet', {
            doc: this.id,
            pages_to_extract: pages_to_extract.id,
            flag: flag,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.FDFDoc, id);
          });
        };
        PDFNet.PDFDoc.prototype.fdfMerge = function (fdf_doc) {
          checkArguments(arguments.length, 1, 'fdfMerge', '(PDFNet.FDFDoc)', [
            [fdf_doc, 'FDFDoc'],
          ]);
          return PDFNet.sendWithPromise('PDFDoc.fdfMerge', {
            doc: this.id,
            fdf_doc: fdf_doc.id,
          });
        };
        PDFNet.PDFDoc.prototype.fdfUpdate = function (fdf_doc) {
          checkArguments(arguments.length, 1, 'fdfUpdate', '(PDFNet.FDFDoc)', [
            [fdf_doc, 'FDFDoc'],
          ]);
          return PDFNet.sendWithPromise('PDFDoc.fdfUpdate', {
            doc: this.id,
            fdf_doc: fdf_doc.id,
          });
        };
        PDFNet.PDFDoc.prototype.getOpenAction = function () {
          return PDFNet.sendWithPromise('PDFDoc.getOpenAction', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.PDFDoc.prototype.setOpenAction = function (action) {
          checkArguments(
            arguments.length,
            1,
            'setOpenAction',
            '(PDFNet.Action)',
            [[action, 'Object', PDFNet.Action, 'Action']]
          );
          return PDFNet.sendWithPromise('PDFDoc.setOpenAction', {
            doc: this.id,
            action: action.id,
          });
        };
        PDFNet.PDFDoc.prototype.addFileAttachment = function (
          file_key,
          embedded_file
        ) {
          checkArguments(
            arguments.length,
            2,
            'addFileAttachment',
            '(string, PDFNet.FileSpec)',
            [
              [file_key, 'string'],
              [embedded_file, 'Object', PDFNet.FileSpec, 'FileSpec'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDoc.addFileAttachment', {
            doc: this.id,
            file_key: file_key,
            embedded_file: embedded_file.id,
          });
        };
        PDFNet.PDFDoc.prototype.getPageLabel = function (page_num) {
          checkArguments(arguments.length, 1, 'getPageLabel', '(number)', [
            [page_num, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDoc.getPageLabel', {
            doc: this.id,
            page_num: page_num,
          }).then(function (id) {
            return new PDFNet.PageLabel(id);
          });
        };
        PDFNet.PDFDoc.prototype.setPageLabel = function (page_num, label) {
          checkArguments(
            arguments.length,
            2,
            'setPageLabel',
            '(number, PDFNet.PageLabel)',
            [
              [page_num, 'number'],
              [label, 'Structure', PDFNet.PageLabel, 'PageLabel'],
            ]
          );
          checkParamsYieldFunction('setPageLabel', [[label, 1]]);
          return PDFNet.sendWithPromise('PDFDoc.setPageLabel', {
            doc: this.id,
            page_num: page_num,
            label: label,
          });
        };
        PDFNet.PDFDoc.prototype.removePageLabel = function (page_num) {
          checkArguments(arguments.length, 1, 'removePageLabel', '(number)', [
            [page_num, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDoc.removePageLabel', {
            doc: this.id,
            page_num: page_num,
          });
        };
        PDFNet.PDFDoc.prototype.getStructTree = function () {
          return PDFNet.sendWithPromise('PDFDoc.getStructTree', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.STree, id);
          });
        };
        PDFNet.PDFDoc.prototype.hasOC = function () {
          return PDFNet.sendWithPromise('PDFDoc.hasOC', { doc: this.id });
        };
        PDFNet.PDFDoc.prototype.getOCGs = function () {
          return PDFNet.sendWithPromise('PDFDoc.getOCGs', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDoc.prototype.getOCGConfig = function () {
          return PDFNet.sendWithPromise('PDFDoc.getOCGConfig', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.OCGConfig, id);
          });
        };
        PDFNet.PDFDoc.prototype.createIndirectName = function (name) {
          checkArguments(
            arguments.length,
            1,
            'createIndirectName',
            '(string)',
            [[name, 'string']]
          );
          return PDFNet.sendWithPromise('PDFDoc.createIndirectName', {
            doc: this.id,
            name: name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDoc.prototype.createIndirectArray = function () {
          return PDFNet.sendWithPromise('PDFDoc.createIndirectArray', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDoc.prototype.createIndirectBool = function (value) {
          checkArguments(
            arguments.length,
            1,
            'createIndirectBool',
            '(boolean)',
            [[value, 'boolean']]
          );
          return PDFNet.sendWithPromise('PDFDoc.createIndirectBool', {
            doc: this.id,
            value: value,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDoc.prototype.createIndirectDict = function () {
          return PDFNet.sendWithPromise('PDFDoc.createIndirectDict', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDoc.prototype.createIndirectNull = function () {
          return PDFNet.sendWithPromise('PDFDoc.createIndirectNull', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDoc.prototype.createIndirectNumber = function (value) {
          checkArguments(
            arguments.length,
            1,
            'createIndirectNumber',
            '(number)',
            [[value, 'number']]
          );
          return PDFNet.sendWithPromise('PDFDoc.createIndirectNumber', {
            doc: this.id,
            value: value,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDoc.prototype.createIndirectString = function (
          value,
          buf_size
        ) {
          checkArguments(
            arguments.length,
            2,
            'createIndirectString',
            '(number, number)',
            [
              [value, 'number'],
              [buf_size, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDoc.createIndirectString', {
            doc: this.id,
            value: value,
            buf_size: buf_size,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDoc.prototype.createIndirectStringFromUString = function (
          str
        ) {
          checkArguments(
            arguments.length,
            1,
            'createIndirectStringFromUString',
            '(string)',
            [[str, 'string']]
          );
          return PDFNet.sendWithPromise(
            'PDFDoc.createIndirectStringFromUString',
            { doc: this.id, str: str }
          ).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDoc.prototype.createIndirectStreamFromFilter = function (
          data,
          filter_chain
        ) {
          'undefined' === typeof filter_chain &&
            (filter_chain = new PDFNet.Filter('0'));
          checkArguments(
            arguments.length,
            1,
            'createIndirectStreamFromFilter',
            '(PDFNet.FilterReader, PDFNet.Filter)',
            [
              [data, 'Object', PDFNet.FilterReader, 'FilterReader'],
              [filter_chain, 'Object', PDFNet.Filter, 'Filter'],
            ]
          );
          0 != filter_chain.id && avoidCleanup(filter_chain.id);
          return PDFNet.sendWithPromise(
            'PDFDoc.createIndirectStreamFromFilter',
            {
              doc: this.id,
              data: data.id,
              no_own_filter_chain: filter_chain.id,
            }
          ).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDoc.prototype.createIndirectStream = function (
          data,
          filter_chain
        ) {
          checkArguments(
            arguments.length,
            2,
            'createIndirectStream',
            '(ArrayBuffer|TypedArray, PDFNet.Filter)',
            [
              [data, 'ArrayBuffer'],
              [filter_chain, 'Object', PDFNet.Filter, 'Filter'],
            ]
          );
          var dataArrayBuffer = getArrayBuffer(data, !1);
          0 != filter_chain.id && avoidCleanup(filter_chain.id);
          return PDFNet.sendWithPromise('PDFDoc.createIndirectStream', {
            doc: this.id,
            data_buf: dataArrayBuffer,
            no_own_filter_chain: filter_chain.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDoc.prototype.getSDFDoc = function () {
          return PDFNet.sendWithPromise('PDFDoc.getSDFDoc', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SDFDoc, id);
          });
        };
        PDFNet.PDFDoc.prototype.unlock = function () {
          var me = this;
          return PDFNet.sendWithPromise('PDFDoc.unlock', { doc: this.id }).then(
            function () {
              unregisterLockedObject(me);
            }
          );
        };
        PDFNet.PDFDoc.prototype.unlockRead = function () {
          var me = this;
          return PDFNet.sendWithPromise('PDFDoc.unlockRead', {
            doc: this.id,
          }).then(function () {
            unregisterLockedObject(me);
          });
        };
        PDFNet.PDFDoc.prototype.addHighlights = function (hilite) {
          checkArguments(arguments.length, 1, 'addHighlights', '(string)', [
            [hilite, 'string'],
          ]);
          return PDFNet.sendWithPromise('PDFDoc.addHighlights', {
            doc: this.id,
            hilite: hilite,
          });
        };
        PDFNet.PDFDoc.prototype.isTagged = function () {
          return PDFNet.sendWithPromise('PDFDoc.isTagged', { doc: this.id });
        };
        PDFNet.PDFDoc.prototype.hasSignatures = function () {
          return PDFNet.sendWithPromise('PDFDoc.hasSignatures', {
            doc: this.id,
          });
        };
        PDFNet.PDFDoc.prototype.addSignatureHandler = function (
          signature_handler
        ) {
          checkArguments(
            arguments.length,
            1,
            'addSignatureHandler',
            '(PDFNet.SignatureHandler)',
            [
              [
                signature_handler,
                'Object',
                PDFNet.SignatureHandler,
                'SignatureHandler',
              ],
            ]
          );
          return PDFNet.sendWithPromise('PDFDoc.addSignatureHandler', {
            doc: this.id,
            signature_handler: signature_handler.id,
          });
        };
        PDFNet.PDFDoc.prototype.addStdSignatureHandlerFromBuffer = function (
          pkcs12_buffer,
          pkcs12_pass
        ) {
          checkArguments(
            arguments.length,
            2,
            'addStdSignatureHandlerFromBuffer',
            '(ArrayBuffer|TypedArray, string)',
            [
              [pkcs12_buffer, 'ArrayBuffer'],
              [pkcs12_pass, 'string'],
            ]
          );
          var pkcs12_bufferArrayBuffer = getArrayBuffer(pkcs12_buffer, !1);
          return PDFNet.sendWithPromise(
            'PDFDoc.addStdSignatureHandlerFromBuffer',
            {
              doc: this.id,
              pkcs12_buffer: pkcs12_bufferArrayBuffer,
              pkcs12_pass: pkcs12_pass,
            }
          );
        };
        PDFNet.PDFDoc.prototype.removeSignatureHandler = function (
          signature_handler_id
        ) {
          checkArguments(
            arguments.length,
            1,
            'removeSignatureHandler',
            '(number)',
            [[signature_handler_id, 'number']]
          );
          return PDFNet.sendWithPromise('PDFDoc.removeSignatureHandler', {
            doc: this.id,
            signature_handler_id: signature_handler_id,
          });
        };
        PDFNet.PDFDoc.prototype.getSignatureHandler = function (
          signature_handler_id
        ) {
          checkArguments(
            arguments.length,
            1,
            'getSignatureHandler',
            '(number)',
            [[signature_handler_id, 'number']]
          );
          return PDFNet.sendWithPromise('PDFDoc.getSignatureHandler', {
            doc: this.id,
            signature_handler_id: signature_handler_id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SignatureHandler, id);
          });
        };
        PDFNet.PDFDoc.prototype.generateThumbnails = function (size) {
          checkArguments(
            arguments.length,
            1,
            'generateThumbnails',
            '(number)',
            [[size, 'number']]
          );
          return PDFNet.sendWithPromise('PDFDoc.generateThumbnails', {
            doc: this.id,
            size: size,
          });
        };
        PDFNet.PDFDoc.prototype.appendVisualDiff = function (p1, p2, opts) {
          'undefined' === typeof opts && (opts = null);
          checkArguments(
            arguments.length,
            2,
            'appendVisualDiff',
            '(PDFNet.Page, PDFNet.Page, PDFNet.OptionBase)',
            [
              [p1, 'Object', PDFNet.Page, 'Page'],
              [p2, 'Object', PDFNet.Page, 'Page'],
              [opts, 'OptionBase'],
            ]
          );
          checkParamsYieldFunction('appendVisualDiff', [[opts, 2]]);
          opts = opts ? opts.getJsonString() : '{}';
          return PDFNet.sendWithPromise('PDFDoc.appendVisualDiff', {
            doc: this.id,
            p1: p1.id,
            p2: p2.id,
            opts: opts,
          });
        };
        PDFNet.PDFDoc.prototype.getGeometryCollectionForPage = function (
          page_num
        ) {
          checkArguments(
            arguments.length,
            1,
            'getGeometryCollectionForPage',
            '(number)',
            [[page_num, 'number']]
          );
          return PDFNet.sendWithPromise('PDFDoc.getGeometryCollectionForPage', {
            in_pdfdoc: this.id,
            page_num: page_num,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.GeometryCollection, id);
          });
        };
        PDFNet.PDFDoc.prototype.getGeometryCollectionForPageWithOptions =
          function (page_num, options) {
            'undefined' === typeof options && (options = null);
            checkArguments(
              arguments.length,
              1,
              'getGeometryCollectionForPageWithOptions',
              '(number, PDFNet.OptionBase)',
              [
                [page_num, 'number'],
                [options, 'OptionBase'],
              ]
            );
            checkParamsYieldFunction(
              'getGeometryCollectionForPageWithOptions',
              [[options, 1]]
            );
            options = options ? options.getJsonString() : '{}';
            return PDFNet.sendWithPromise(
              'PDFDoc.getGeometryCollectionForPageWithOptions',
              { in_pdfdoc: this.id, page_num: page_num, options: options }
            ).then(function (id) {
              return createDestroyableObj(PDFNet.GeometryCollection, id);
            });
          };
        PDFNet.PDFDoc.prototype.getUndoManager = function () {
          return PDFNet.sendWithPromise('PDFDoc.getUndoManager', {
            doc: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.UndoManager, id);
          });
        };
        PDFNet.PDFDoc.prototype.createDigitalSignatureField = function (
          in_sig_field_name
        ) {
          'undefined' === typeof in_sig_field_name && (in_sig_field_name = '');
          checkArguments(
            arguments.length,
            0,
            'createDigitalSignatureField',
            '(string)',
            [[in_sig_field_name, 'string']]
          );
          return PDFNet.sendWithPromise('PDFDoc.createDigitalSignatureField', {
            doc: this.id,
            in_sig_field_name: in_sig_field_name,
          }).then(function (id) {
            return new PDFNet.DigitalSignatureField(id);
          });
        };
        PDFNet.PDFDoc.prototype.getDigitalSignatureFieldIteratorBegin =
          function () {
            return PDFNet.sendWithPromise(
              'PDFDoc.getDigitalSignatureFieldIteratorBegin',
              { doc: this.id }
            ).then(function (id) {
              return createDestroyableObj(
                PDFNet.Iterator,
                id,
                'DigitalSignatureField'
              );
            });
          };
        PDFNet.PDFDoc.prototype.getDigitalSignaturePermissions = function () {
          return PDFNet.sendWithPromise(
            'PDFDoc.getDigitalSignaturePermissions',
            { doc: this.id }
          );
        };
        PDFNet.PDFDoc.prototype.saveViewerOptimizedBuffer = function (
          opts$jscomp$0
        ) {
          checkArguments(
            arguments.length,
            1,
            'saveViewerOptimizedBuffer',
            '(PDFNet.Obj)',
            [
              [
                opts$jscomp$0,
                'OptionObject',
                PDFNet.Obj,
                'Obj',
                'PDFNet.PDFDoc.ViewerOptimizedOptions',
              ],
            ]
          );
          opts$jscomp$0 = getOptsObjPromise(
            opts$jscomp$0,
            'PDFNet.PDFDoc.ViewerOptimizedOptions'
          );
          var me = this;
          return opts$jscomp$0.then(function (opts) {
            return PDFNet.sendWithPromise('PDFDoc.saveViewerOptimizedBuffer', {
              doc: me.id,
              opts: opts.id,
            }).then(function (id) {
              return new Uint8Array(id);
            });
          });
        };
        PDFNet.PDFDoc.prototype.verifySignedDigitalSignatures = function (
          opts
        ) {
          checkArguments(
            arguments.length,
            1,
            'verifySignedDigitalSignatures',
            '(PDFNet.VerificationOptions)',
            [
              [
                opts,
                'Object',
                PDFNet.VerificationOptions,
                'VerificationOptions',
              ],
            ]
          );
          return PDFNet.sendWithPromise(
            'PDFDoc.verifySignedDigitalSignatures',
            { doc: this.id, opts: opts.id }
          );
        };
        PDFNet.convertPageToAnnotAppearance = function (
          docWithAppearance,
          objNum,
          annot_state,
          appearance_state
        ) {
          checkArguments(
            arguments.length,
            4,
            'convertPageToAnnotAppearance',
            '(PDFNet.PDFDoc, number, number, string)',
            [
              [docWithAppearance, 'PDFDoc'],
              [objNum, 'number'],
              [annot_state, 'number'],
              [appearance_state, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('convertPageToAnnotAppearance', {
            docWithAppearance: docWithAppearance.id,
            objNum: objNum,
            annot_state: annot_state,
            appearance_state: appearance_state,
          });
        };
        PDFNet.PDFDoc.prototype.mergeXFDF = function (stream, options) {
          'undefined' === typeof options && (options = null);
          checkArguments(
            arguments.length,
            1,
            'mergeXFDF',
            '(PDFNet.Filter, PDFNet.OptionBase)',
            [
              [stream, 'Object', PDFNet.Filter, 'Filter'],
              [options, 'OptionBase'],
            ]
          );
          checkParamsYieldFunction('mergeXFDF', [[options, 1]]);
          options = options ? options.getJsonString() : '{}';
          return PDFNet.sendWithPromise('PDFDoc.mergeXFDF', {
            doc: this.id,
            stream: stream.id,
            options: options,
          });
        };
        PDFNet.PDFDoc.prototype.mergeXFDFString = function (xfdf, options) {
          'undefined' === typeof options && (options = null);
          checkArguments(
            arguments.length,
            1,
            'mergeXFDFString',
            '(string, PDFNet.OptionBase)',
            [
              [xfdf, 'string'],
              [options, 'OptionBase'],
            ]
          );
          checkParamsYieldFunction('mergeXFDFString', [[options, 1]]);
          options = options ? options.getJsonString() : '{}';
          return PDFNet.sendWithPromise('PDFDoc.mergeXFDFString', {
            doc: this.id,
            xfdf: xfdf,
            options: options,
          });
        };
        PDFNet.PDFDocInfo.prototype.getTitle = function () {
          return PDFNet.sendWithPromise('PDFDocInfo.getTitle', {
            info: this.id,
          });
        };
        PDFNet.PDFDocInfo.prototype.getTitleObj = function () {
          return PDFNet.sendWithPromise('PDFDocInfo.getTitleObj', {
            info: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDocInfo.prototype.setTitle = function (title) {
          checkArguments(arguments.length, 1, 'setTitle', '(string)', [
            [title, 'string'],
          ]);
          return PDFNet.sendWithPromise('PDFDocInfo.setTitle', {
            info: this.id,
            title: title,
          });
        };
        PDFNet.PDFDocInfo.prototype.getAuthor = function () {
          return PDFNet.sendWithPromise('PDFDocInfo.getAuthor', {
            info: this.id,
          });
        };
        PDFNet.PDFDocInfo.prototype.getAuthorObj = function () {
          return PDFNet.sendWithPromise('PDFDocInfo.getAuthorObj', {
            info: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDocInfo.prototype.setAuthor = function (author) {
          checkArguments(arguments.length, 1, 'setAuthor', '(string)', [
            [author, 'string'],
          ]);
          return PDFNet.sendWithPromise('PDFDocInfo.setAuthor', {
            info: this.id,
            author: author,
          });
        };
        PDFNet.PDFDocInfo.prototype.getSubject = function () {
          return PDFNet.sendWithPromise('PDFDocInfo.getSubject', {
            info: this.id,
          });
        };
        PDFNet.PDFDocInfo.prototype.getSubjectObj = function () {
          return PDFNet.sendWithPromise('PDFDocInfo.getSubjectObj', {
            info: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDocInfo.prototype.setSubject = function (subject) {
          checkArguments(arguments.length, 1, 'setSubject', '(string)', [
            [subject, 'string'],
          ]);
          return PDFNet.sendWithPromise('PDFDocInfo.setSubject', {
            info: this.id,
            subject: subject,
          });
        };
        PDFNet.PDFDocInfo.prototype.getKeywords = function () {
          return PDFNet.sendWithPromise('PDFDocInfo.getKeywords', {
            info: this.id,
          });
        };
        PDFNet.PDFDocInfo.prototype.getKeywordsObj = function () {
          return PDFNet.sendWithPromise('PDFDocInfo.getKeywordsObj', {
            info: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDocInfo.prototype.setKeywords = function (keywords) {
          checkArguments(arguments.length, 1, 'setKeywords', '(string)', [
            [keywords, 'string'],
          ]);
          return PDFNet.sendWithPromise('PDFDocInfo.setKeywords', {
            info: this.id,
            keywords: keywords,
          });
        };
        PDFNet.PDFDocInfo.prototype.getCreator = function () {
          return PDFNet.sendWithPromise('PDFDocInfo.getCreator', {
            info: this.id,
          });
        };
        PDFNet.PDFDocInfo.prototype.getCreatorObj = function () {
          return PDFNet.sendWithPromise('PDFDocInfo.getCreatorObj', {
            info: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDocInfo.prototype.setCreator = function (creator) {
          checkArguments(arguments.length, 1, 'setCreator', '(string)', [
            [creator, 'string'],
          ]);
          return PDFNet.sendWithPromise('PDFDocInfo.setCreator', {
            info: this.id,
            creator: creator,
          });
        };
        PDFNet.PDFDocInfo.prototype.getProducer = function () {
          return PDFNet.sendWithPromise('PDFDocInfo.getProducer', {
            info: this.id,
          });
        };
        PDFNet.PDFDocInfo.prototype.getProducerObj = function () {
          return PDFNet.sendWithPromise('PDFDocInfo.getProducerObj', {
            info: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDocInfo.prototype.setProducer = function (producer) {
          checkArguments(arguments.length, 1, 'setProducer', '(string)', [
            [producer, 'string'],
          ]);
          return PDFNet.sendWithPromise('PDFDocInfo.setProducer', {
            info: this.id,
            producer: producer,
          });
        };
        PDFNet.PDFDocInfo.prototype.getCreationDate = function () {
          return PDFNet.sendWithPromise('PDFDocInfo.getCreationDate', {
            info: this.id,
          }).then(function (id) {
            return new PDFNet.Date(id);
          });
        };
        PDFNet.PDFDocInfo.prototype.setCreationDate = function (creation_date) {
          checkArguments(
            arguments.length,
            1,
            'setCreationDate',
            '(PDFNet.Date)',
            [[creation_date, 'Structure', PDFNet.Date, 'Date']]
          );
          checkParamsYieldFunction('setCreationDate', [[creation_date, 0]]);
          return PDFNet.sendWithPromise('PDFDocInfo.setCreationDate', {
            info: this.id,
            creation_date: creation_date,
          });
        };
        PDFNet.PDFDocInfo.prototype.getModDate = function () {
          return PDFNet.sendWithPromise('PDFDocInfo.getModDate', {
            info: this.id,
          }).then(function (id) {
            return new PDFNet.Date(id);
          });
        };
        PDFNet.PDFDocInfo.prototype.setModDate = function (mod_date) {
          checkArguments(arguments.length, 1, 'setModDate', '(PDFNet.Date)', [
            [mod_date, 'Structure', PDFNet.Date, 'Date'],
          ]);
          checkParamsYieldFunction('setModDate', [[mod_date, 0]]);
          return PDFNet.sendWithPromise('PDFDocInfo.setModDate', {
            info: this.id,
            mod_date: mod_date,
          });
        };
        PDFNet.PDFDocInfo.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('PDFDocInfo.getSDFObj', {
            info: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDocInfo.create = function (tr) {
          checkArguments(arguments.length, 1, 'create', '(PDFNet.Obj)', [
            [tr, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('pdfDocInfoCreate', { tr: tr.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.PDFDocInfo, id);
            }
          );
        };
        PDFNet.PDFDocInfo.prototype.copy = function () {
          return PDFNet.sendWithPromise('PDFDocInfo.copy', {
            info: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PDFDocInfo, id);
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.setInitialPage = function (dest) {
          checkArguments(
            arguments.length,
            1,
            'setInitialPage',
            '(PDFNet.Destination)',
            [[dest, 'Object', PDFNet.Destination, 'Destination']]
          );
          return PDFNet.sendWithPromise('PDFDocViewPrefs.setInitialPage', {
            p: this.id,
            dest: dest.id,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.setPageMode = function (mode) {
          checkArguments(arguments.length, 1, 'setPageMode', '(number)', [
            [mode, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDocViewPrefs.setPageMode', {
            p: this.id,
            mode: mode,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.getPageMode = function () {
          return PDFNet.sendWithPromise('PDFDocViewPrefs.getPageMode', {
            p: this.id,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.setLayoutMode = function (mode) {
          checkArguments(arguments.length, 1, 'setLayoutMode', '(number)', [
            [mode, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDocViewPrefs.setLayoutMode', {
            p: this.id,
            mode: mode,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.getLayoutMode = function () {
          return PDFNet.sendWithPromise('PDFDocViewPrefs.getLayoutMode', {
            p: this.id,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.setPref = function (pref, value) {
          checkArguments(arguments.length, 2, 'setPref', '(number, boolean)', [
            [pref, 'number'],
            [value, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('PDFDocViewPrefs.setPref', {
            p: this.id,
            pref: pref,
            value: value,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.getPref = function (pref) {
          checkArguments(arguments.length, 1, 'getPref', '(number)', [
            [pref, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDocViewPrefs.getPref', {
            p: this.id,
            pref: pref,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.setNonFullScreenPageMode = function (
          mode
        ) {
          checkArguments(
            arguments.length,
            1,
            'setNonFullScreenPageMode',
            '(number)',
            [[mode, 'number']]
          );
          return PDFNet.sendWithPromise(
            'PDFDocViewPrefs.setNonFullScreenPageMode',
            { p: this.id, mode: mode }
          );
        };
        PDFNet.PDFDocViewPrefs.prototype.getNonFullScreenPageMode =
          function () {
            return PDFNet.sendWithPromise(
              'PDFDocViewPrefs.getNonFullScreenPageMode',
              { p: this.id }
            );
          };
        PDFNet.PDFDocViewPrefs.prototype.setDirection = function (
          left_to_right
        ) {
          checkArguments(arguments.length, 1, 'setDirection', '(boolean)', [
            [left_to_right, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('PDFDocViewPrefs.setDirection', {
            p: this.id,
            left_to_right: left_to_right,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.getDirection = function () {
          return PDFNet.sendWithPromise('PDFDocViewPrefs.getDirection', {
            p: this.id,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.setViewArea = function (box) {
          checkArguments(arguments.length, 1, 'setViewArea', '(number)', [
            [box, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDocViewPrefs.setViewArea', {
            p: this.id,
            box: box,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.getViewArea = function () {
          return PDFNet.sendWithPromise('PDFDocViewPrefs.getViewArea', {
            p: this.id,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.setViewClip = function (box) {
          checkArguments(arguments.length, 1, 'setViewClip', '(number)', [
            [box, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDocViewPrefs.setViewClip', {
            p: this.id,
            box: box,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.getViewClip = function () {
          return PDFNet.sendWithPromise('PDFDocViewPrefs.getViewClip', {
            p: this.id,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.setPrintArea = function (box) {
          checkArguments(arguments.length, 1, 'setPrintArea', '(number)', [
            [box, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDocViewPrefs.setPrintArea', {
            p: this.id,
            box: box,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.getPrintArea = function () {
          return PDFNet.sendWithPromise('PDFDocViewPrefs.getPrintArea', {
            p: this.id,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.setPrintClip = function (box) {
          checkArguments(arguments.length, 1, 'setPrintClip', '(number)', [
            [box, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDocViewPrefs.setPrintClip', {
            p: this.id,
            box: box,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.getPrintClip = function () {
          return PDFNet.sendWithPromise('PDFDocViewPrefs.getPrintClip', {
            p: this.id,
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('PDFDocViewPrefs.getSDFObj', {
            p: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.PDFDocViewPrefs.create = function (tr) {
          checkArguments(arguments.length, 1, 'create', '(PDFNet.Obj)', [
            [tr, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('pdfDocViewPrefsCreate', {
            tr: tr.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PDFDocViewPrefs, id);
          });
        };
        PDFNet.PDFDocViewPrefs.prototype.copy = function () {
          return PDFNet.sendWithPromise('PDFDocViewPrefs.copy', {
            prefs: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.PDFDocViewPrefs, id);
          });
        };
        PDFNet.PDFRasterizer.create = function (type) {
          'undefined' === typeof type &&
            (type = PDFNet.PDFRasterizer.Type.e_BuiltIn);
          checkArguments(arguments.length, 0, 'create', '(number)', [
            [type, 'number'],
          ]);
          return PDFNet.sendWithPromise('pdfRasterizerCreate', {
            type: type,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.PDFRasterizer, id);
          });
        };
        PDFNet.PDFRasterizer.prototype.setDrawAnnotations = function (
          render_annots
        ) {
          checkArguments(
            arguments.length,
            1,
            'setDrawAnnotations',
            '(boolean)',
            [[render_annots, 'boolean']]
          );
          return PDFNet.sendWithPromise('PDFRasterizer.setDrawAnnotations', {
            r: this.id,
            render_annots: render_annots,
          });
        };
        PDFNet.PDFRasterizer.prototype.setHighlightFields = function (
          highlight
        ) {
          checkArguments(
            arguments.length,
            1,
            'setHighlightFields',
            '(boolean)',
            [[highlight, 'boolean']]
          );
          return PDFNet.sendWithPromise('PDFRasterizer.setHighlightFields', {
            r: this.id,
            highlight: highlight,
          });
        };
        PDFNet.PDFRasterizer.prototype.setDrawUIElements = function (
          draw_ui_elements
        ) {
          checkArguments(
            arguments.length,
            1,
            'setDrawUIElements',
            '(boolean)',
            [[draw_ui_elements, 'boolean']]
          );
          return PDFNet.sendWithPromise('PDFRasterizer.setDrawUIElements', {
            r: this.id,
            draw_ui_elements: draw_ui_elements,
          });
        };
        PDFNet.PDFRasterizer.prototype.setAntiAliasing = function (enable_aa) {
          checkArguments(arguments.length, 1, 'setAntiAliasing', '(boolean)', [
            [enable_aa, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('PDFRasterizer.setAntiAliasing', {
            r: this.id,
            enable_aa: enable_aa,
          });
        };
        PDFNet.PDFRasterizer.prototype.setPathHinting = function (
          enable_hinting
        ) {
          checkArguments(arguments.length, 1, 'setPathHinting', '(boolean)', [
            [enable_hinting, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('PDFRasterizer.setPathHinting', {
            r: this.id,
            enable_hinting: enable_hinting,
          });
        };
        PDFNet.PDFRasterizer.prototype.setThinLineAdjustment = function (
          grid_fit,
          stroke_adjust
        ) {
          checkArguments(
            arguments.length,
            2,
            'setThinLineAdjustment',
            '(boolean, boolean)',
            [
              [grid_fit, 'boolean'],
              [stroke_adjust, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('PDFRasterizer.setThinLineAdjustment', {
            r: this.id,
            grid_fit: grid_fit,
            stroke_adjust: stroke_adjust,
          });
        };
        PDFNet.PDFRasterizer.prototype.setGamma = function (expgamma) {
          checkArguments(arguments.length, 1, 'setGamma', '(number)', [
            [expgamma, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFRasterizer.setGamma', {
            r: this.id,
            expgamma: expgamma,
          });
        };
        PDFNet.PDFRasterizer.prototype.setOCGContext = function (ctx) {
          checkArguments(
            arguments.length,
            1,
            'setOCGContext',
            '(PDFNet.OCGContext)',
            [[ctx, 'Object', PDFNet.OCGContext, 'OCGContext']]
          );
          return PDFNet.sendWithPromise('PDFRasterizer.setOCGContext', {
            r: this.id,
            ctx: ctx.id,
          });
        };
        PDFNet.PDFRasterizer.prototype.setPrintMode = function (is_printing) {
          checkArguments(arguments.length, 1, 'setPrintMode', '(boolean)', [
            [is_printing, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('PDFRasterizer.setPrintMode', {
            r: this.id,
            is_printing: is_printing,
          });
        };
        PDFNet.PDFRasterizer.prototype.setImageSmoothing = function (
          smoothing_enabled,
          hq_image_resampling
        ) {
          'undefined' === typeof smoothing_enabled && (smoothing_enabled = !0);
          'undefined' === typeof hq_image_resampling &&
            (hq_image_resampling = !1);
          checkArguments(
            arguments.length,
            0,
            'setImageSmoothing',
            '(boolean, boolean)',
            [
              [smoothing_enabled, 'boolean'],
              [hq_image_resampling, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('PDFRasterizer.setImageSmoothing', {
            r: this.id,
            smoothing_enabled: smoothing_enabled,
            hq_image_resampling: hq_image_resampling,
          });
        };
        PDFNet.PDFRasterizer.prototype.setOverprint = function (op) {
          checkArguments(arguments.length, 1, 'setOverprint', '(number)', [
            [op, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFRasterizer.setOverprint', {
            r: this.id,
            op: op,
          });
        };
        PDFNet.PDFRasterizer.prototype.setCaching = function (enabled) {
          'undefined' === typeof enabled && (enabled = !0);
          checkArguments(arguments.length, 0, 'setCaching', '(boolean)', [
            [enabled, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('PDFRasterizer.setCaching', {
            r: this.id,
            enabled: enabled,
          });
        };
        PDFNet.PDFDraw.prototype.setOCGContext = function (ctx) {
          checkArguments(
            arguments.length,
            1,
            'setOCGContext',
            '(PDFNet.OCGContext)',
            [[ctx, 'Object', PDFNet.OCGContext, 'OCGContext']]
          );
          return PDFNet.sendWithPromise('PDFDraw.setOCGContext', {
            r: this.id,
            ctx: ctx.id,
          });
        };
        PDFNet.PDFRasterizer.prototype.setAnnotationState = function (
          annot,
          new_view_state
        ) {
          checkArguments(
            arguments.length,
            2,
            'setAnnotationState',
            '(PDFNet.Annot, number)',
            [
              [annot, 'Object', PDFNet.Annot, 'Annot'],
              [new_view_state, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('PDFRasterizer.setAnnotationState', {
            r: this.id,
            annot: annot.id,
            new_view_state: new_view_state,
          });
        };
        PDFNet.PDFRasterizer.prototype.setRasterizerType = function (type) {
          checkArguments(arguments.length, 1, 'setRasterizerType', '(number)', [
            [type, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFRasterizer.setRasterizerType', {
            r: this.id,
            type: type,
          });
        };
        PDFNet.PDFRasterizer.prototype.getRasterizerType = function () {
          return PDFNet.sendWithPromise('PDFRasterizer.getRasterizerType', {
            r: this.id,
          });
        };
        PDFNet.PDFRasterizer.prototype.setColorPostProcessMode = function (
          mode
        ) {
          checkArguments(
            arguments.length,
            1,
            'setColorPostProcessMode',
            '(number)',
            [[mode, 'number']]
          );
          return PDFNet.sendWithPromise(
            'PDFRasterizer.setColorPostProcessMode',
            { r: this.id, mode: mode }
          );
        };
        PDFNet.PDFRasterizer.prototype.getColorPostProcessMode = function () {
          return PDFNet.sendWithPromise(
            'PDFRasterizer.getColorPostProcessMode',
            { r: this.id }
          );
        };
        PDFNet.PDFRasterizer.prototype.enableDisplayListCaching = function (
          enabled
        ) {
          checkArguments(
            arguments.length,
            1,
            'enableDisplayListCaching',
            '(boolean)',
            [[enabled, 'boolean']]
          );
          return PDFNet.sendWithPromise(
            'PDFRasterizer.enableDisplayListCaching',
            { r: this.id, enabled: enabled }
          );
        };
        PDFNet.PDFRasterizer.prototype.updateBuffer = function () {
          return PDFNet.sendWithPromise('PDFRasterizer.updateBuffer', {
            r: this.id,
          });
        };
        PDFNet.PDFRasterizer.prototype.rasterizeAnnot = function (
          annot,
          page,
          device_mtx,
          demult,
          cancel
        ) {
          checkArguments(
            arguments.length,
            5,
            'rasterizeAnnot',
            '(PDFNet.Annot, PDFNet.Page, PDFNet.Matrix2D, boolean, boolean)',
            [
              [annot, 'Object', PDFNet.Annot, 'Annot'],
              [page, 'Object', PDFNet.Page, 'Page'],
              [device_mtx, 'Structure', PDFNet.Matrix2D, 'Matrix2D'],
              [demult, 'boolean'],
              [cancel, 'boolean'],
            ]
          );
          checkParamsYieldFunction('rasterizeAnnot', [[device_mtx, 2]]);
          return PDFNet.sendWithPromise('PDFRasterizer.rasterizeAnnot', {
            r: this.id,
            annot: annot.id,
            page: page.id,
            device_mtx: device_mtx,
            demult: demult,
            cancel: cancel,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.OwnedBitmap, id);
          });
        };
        PDFNet.PDFRasterizer.prototype.rasterizeSeparations = function (
          page,
          width,
          height,
          mtx,
          clip,
          cancel
        ) {
          checkArguments(
            arguments.length,
            6,
            'rasterizeSeparations',
            '(PDFNet.Page, number, number, PDFNet.Matrix2D, PDFNet.Rect, boolean)',
            [
              [page, 'Object', PDFNet.Page, 'Page'],
              [width, 'number'],
              [height, 'number'],
              [mtx, 'Structure', PDFNet.Matrix2D, 'Matrix2D'],
              [clip, 'Structure', PDFNet.Rect, 'Rect'],
              [cancel, 'boolean'],
            ]
          );
          checkParamsYieldFunction('rasterizeSeparations', [
            [mtx, 3],
            [clip, 4],
          ]);
          return PDFNet.sendWithPromise('PDFRasterizer.rasterizeSeparations', {
            r: this.id,
            page: page.id,
            width: width,
            height: height,
            mtx: mtx,
            clip: clip,
            cancel: cancel,
          }).then(function (idArray) {
            for (var retArray = [], i = 0; i < idArray.length; ++i) {
              var id = idArray[i];
              if ('0' === id) return null;
              id = new PDFNet.Separation(id);
              retArray.push(id);
            }
            return retArray;
          });
        };
        PDFNet.PDFDraw.create = function (dpi) {
          'undefined' === typeof dpi && (dpi = 92);
          checkArguments(arguments.length, 0, 'create', '(number)', [
            [dpi, 'number'],
          ]);
          return PDFNet.sendWithPromise('pdfDrawCreate', { dpi: dpi }).then(
            function (id) {
              return createDestroyableObj(PDFNet.PDFDraw, id);
            }
          );
        };
        PDFNet.PDFDraw.prototype.setRasterizerType = function (type) {
          checkArguments(arguments.length, 1, 'setRasterizerType', '(number)', [
            [type, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDraw.setRasterizerType', {
            d: this.id,
            type: type,
          });
        };
        PDFNet.PDFDraw.prototype.setDPI = function (dpi) {
          checkArguments(arguments.length, 1, 'setDPI', '(number)', [
            [dpi, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDraw.setDPI', {
            d: this.id,
            dpi: dpi,
          });
        };
        PDFNet.PDFDraw.prototype.setImageSize = function (
          width,
          height,
          preserve_aspect_ratio
        ) {
          'undefined' === typeof preserve_aspect_ratio &&
            (preserve_aspect_ratio = !0);
          checkArguments(
            arguments.length,
            2,
            'setImageSize',
            '(number, number, boolean)',
            [
              [width, 'number'],
              [height, 'number'],
              [preserve_aspect_ratio, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDraw.setImageSize', {
            d: this.id,
            width: width,
            height: height,
            preserve_aspect_ratio: preserve_aspect_ratio,
          });
        };
        PDFNet.PDFDraw.prototype.setPageBox = function (region) {
          checkArguments(arguments.length, 1, 'setPageBox', '(number)', [
            [region, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDraw.setPageBox', {
            d: this.id,
            region: region,
          });
        };
        PDFNet.PDFDraw.prototype.setClipRect = function (rect) {
          checkArguments(arguments.length, 1, 'setClipRect', '(PDFNet.Rect)', [
            [rect, 'Structure', PDFNet.Rect, 'Rect'],
          ]);
          checkParamsYieldFunction('setClipRect', [[rect, 0]]);
          return PDFNet.sendWithPromise('PDFDraw.setClipRect', {
            d: this.id,
            rect: rect,
          });
        };
        PDFNet.PDFDraw.prototype.setFlipYAxis = function (flip_y) {
          checkArguments(arguments.length, 1, 'setFlipYAxis', '(boolean)', [
            [flip_y, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('PDFDraw.setFlipYAxis', {
            d: this.id,
            flip_y: flip_y,
          });
        };
        PDFNet.PDFDraw.prototype.setRotate = function (r) {
          checkArguments(arguments.length, 1, 'setRotate', '(number)', [
            [r, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDraw.setRotate', {
            d: this.id,
            r: r,
          });
        };
        PDFNet.PDFDraw.prototype.setDrawAnnotations = function (render_annots) {
          checkArguments(
            arguments.length,
            1,
            'setDrawAnnotations',
            '(boolean)',
            [[render_annots, 'boolean']]
          );
          return PDFNet.sendWithPromise('PDFDraw.setDrawAnnotations', {
            d: this.id,
            render_annots: render_annots,
          });
        };
        PDFNet.PDFDraw.prototype.setHighlightFields = function (highlight) {
          checkArguments(
            arguments.length,
            1,
            'setHighlightFields',
            '(boolean)',
            [[highlight, 'boolean']]
          );
          return PDFNet.sendWithPromise('PDFDraw.setHighlightFields', {
            d: this.id,
            highlight: highlight,
          });
        };
        PDFNet.PDFDraw.prototype.setDrawUIElements = function (
          draw_ui_elements
        ) {
          checkArguments(
            arguments.length,
            1,
            'setDrawUIElements',
            '(boolean)',
            [[draw_ui_elements, 'boolean']]
          );
          return PDFNet.sendWithPromise('PDFDraw.setDrawUIElements', {
            d: this.id,
            draw_ui_elements: draw_ui_elements,
          });
        };
        PDFNet.PDFDraw.prototype.setAntiAliasing = function (enable_aa) {
          checkArguments(arguments.length, 1, 'setAntiAliasing', '(boolean)', [
            [enable_aa, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('PDFDraw.setAntiAliasing', {
            d: this.id,
            enable_aa: enable_aa,
          });
        };
        PDFNet.PDFDraw.prototype.setPathHinting = function (enable_hinting) {
          checkArguments(arguments.length, 1, 'setPathHinting', '(boolean)', [
            [enable_hinting, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('PDFDraw.setPathHinting', {
            d: this.id,
            enable_hinting: enable_hinting,
          });
        };
        PDFNet.PDFDraw.prototype.setThinLineAdjustment = function (
          grid_fit,
          stroke_adjust
        ) {
          checkArguments(
            arguments.length,
            2,
            'setThinLineAdjustment',
            '(boolean, boolean)',
            [
              [grid_fit, 'boolean'],
              [stroke_adjust, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDraw.setThinLineAdjustment', {
            d: this.id,
            grid_fit: grid_fit,
            stroke_adjust: stroke_adjust,
          });
        };
        PDFNet.PDFDraw.prototype.setGamma = function (exp) {
          checkArguments(arguments.length, 1, 'setGamma', '(number)', [
            [exp, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDraw.setGamma', {
            d: this.id,
            exp: exp,
          });
        };
        PDFNet.PDFDraw.prototype.setPrintMode = function (is_printing) {
          checkArguments(arguments.length, 1, 'setPrintMode', '(boolean)', [
            [is_printing, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('PDFDraw.setPrintMode', {
            d: this.id,
            is_printing: is_printing,
          });
        };
        PDFNet.PDFDraw.prototype.setPageTransparent = function (
          is_transparent
        ) {
          checkArguments(
            arguments.length,
            1,
            'setPageTransparent',
            '(boolean)',
            [[is_transparent, 'boolean']]
          );
          return PDFNet.sendWithPromise('PDFDraw.setPageTransparent', {
            d: this.id,
            is_transparent: is_transparent,
          });
        };
        PDFNet.PDFDraw.prototype.setDefaultPageColor = function (r, g, b) {
          checkArguments(
            arguments.length,
            3,
            'setDefaultPageColor',
            '(number, number, number)',
            [
              [r, 'number'],
              [g, 'number'],
              [b, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDraw.setDefaultPageColor', {
            d: this.id,
            r: r,
            g: g,
            b: b,
          });
        };
        PDFNet.PDFDraw.prototype.setOverprint = function (op) {
          checkArguments(arguments.length, 1, 'setOverprint', '(number)', [
            [op, 'number'],
          ]);
          return PDFNet.sendWithPromise('PDFDraw.setOverprint', {
            d: this.id,
            op: op,
          });
        };
        PDFNet.PDFDraw.prototype.setImageSmoothing = function (
          smoothing_enabled,
          hq_image_resampling
        ) {
          'undefined' === typeof smoothing_enabled && (smoothing_enabled = !0);
          'undefined' === typeof hq_image_resampling &&
            (hq_image_resampling = !1);
          checkArguments(
            arguments.length,
            0,
            'setImageSmoothing',
            '(boolean, boolean)',
            [
              [smoothing_enabled, 'boolean'],
              [hq_image_resampling, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDraw.setImageSmoothing', {
            d: this.id,
            smoothing_enabled: smoothing_enabled,
            hq_image_resampling: hq_image_resampling,
          });
        };
        PDFNet.PDFDraw.prototype.setCaching = function (enabled) {
          'undefined' === typeof enabled && (enabled = !0);
          checkArguments(arguments.length, 0, 'setCaching', '(boolean)', [
            [enabled, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('PDFDraw.setCaching', {
            d: this.id,
            enabled: enabled,
          });
        };
        PDFNet.PDFDraw.prototype.setColorPostProcessMode = function (mode) {
          checkArguments(
            arguments.length,
            1,
            'setColorPostProcessMode',
            '(number)',
            [[mode, 'number']]
          );
          return PDFNet.sendWithPromise('PDFDraw.setColorPostProcessMode', {
            d: this.id,
            mode: mode,
          });
        };
        PDFNet.PDFDraw.prototype.getSeparationBitmaps = function (page) {
          checkArguments(
            arguments.length,
            1,
            'getSeparationBitmaps',
            '(PDFNet.Page)',
            [[page, 'Object', PDFNet.Page, 'Page']]
          );
          return PDFNet.sendWithPromise('PDFDraw.getSeparationBitmaps', {
            d: this.id,
            page: page.id,
          }).then(function (idArray) {
            for (var retArray = [], i = 0; i < idArray.length; ++i) {
              var id = idArray[i];
              if ('0' === id) return null;
              id = new PDFNet.Separation(id);
              retArray.push(id);
            }
            return retArray;
          });
        };
        PDFNet.enableJavaScript = function (enable) {
          checkArguments(arguments.length, 1, 'enableJavaScript', '(boolean)', [
            [enable, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('pdfNetEnableJavaScript', {
            enable: enable,
          });
        };
        PDFNet.isJavaScriptEnabled = function () {
          return PDFNet.sendWithPromise('pdfNetIsJavaScriptEnabled', {});
        };
        PDFNet.terminateEx = function (termination_level) {
          checkArguments(arguments.length, 1, 'terminateEx', '(number)', [
            [termination_level, 'number'],
          ]);
          return PDFNet.sendWithPromise('pdfNetTerminateEx', {
            termination_level: termination_level,
          });
        };
        PDFNet.setColorManagement = function (t) {
          'undefined' === typeof t && (t = PDFNet.CMSType.e_lcms);
          checkArguments(
            arguments.length,
            0,
            'setColorManagement',
            '(number)',
            [[t, 'number']]
          );
          return PDFNet.sendWithPromise('pdfNetSetColorManagement', { t: t });
        };
        PDFNet.setDefaultDeviceCMYKProfileFromFilter = function (stream) {
          checkArguments(
            arguments.length,
            1,
            'setDefaultDeviceCMYKProfileFromFilter',
            '(PDFNet.Filter)',
            [[stream, 'Object', PDFNet.Filter, 'Filter']]
          );
          return PDFNet.sendWithPromise(
            'pdfNetSetDefaultDeviceCMYKProfileFromFilter',
            { stream: stream.id }
          );
        };
        PDFNet.setDefaultDeviceRGBProfileFromFilter = function (stream) {
          checkArguments(
            arguments.length,
            1,
            'setDefaultDeviceRGBProfileFromFilter',
            '(PDFNet.Filter)',
            [[stream, 'Object', PDFNet.Filter, 'Filter']]
          );
          return PDFNet.sendWithPromise(
            'pdfNetSetDefaultDeviceRGBProfileFromFilter',
            { stream: stream.id }
          );
        };
        PDFNet.setDefaultFlateCompressionLevel = function (level) {
          checkArguments(
            arguments.length,
            1,
            'setDefaultFlateCompressionLevel',
            '(number)',
            [[level, 'number']]
          );
          return PDFNet.sendWithPromise(
            'pdfNetSetDefaultFlateCompressionLevel',
            { level: level }
          );
        };
        PDFNet.setViewerCache = function (max_cache_size, on_disk) {
          checkArguments(
            arguments.length,
            2,
            'setViewerCache',
            '(number, boolean)',
            [
              [max_cache_size, 'number'],
              [on_disk, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('pdfNetSetViewerCache', {
            max_cache_size: max_cache_size,
            on_disk: on_disk,
          });
        };
        PDFNet.getVersion = function () {
          return PDFNet.sendWithPromise('pdfNetGetVersion', {});
        };
        PDFNet.setLogLevel = function (level) {
          'undefined' === typeof level &&
            (level = PDFNet.LogLevel.e_LogLevel_Fatal);
          checkArguments(arguments.length, 0, 'setLogLevel', '(number)', [
            [level, 'number'],
          ]);
          return PDFNet.sendWithPromise('pdfNetSetLogLevel', { level: level });
        };
        PDFNet.getSystemFontList = function () {
          return PDFNet.sendWithPromise('pdfNetGetSystemFontList', {});
        };
        PDFNet.addPDFTronCustomHandler = function (custom_id) {
          checkArguments(
            arguments.length,
            1,
            'addPDFTronCustomHandler',
            '(number)',
            [[custom_id, 'number']]
          );
          return PDFNet.sendWithPromise('pdfNetAddPDFTronCustomHandler', {
            custom_id: custom_id,
          });
        };
        PDFNet.getVersionString = function () {
          return PDFNet.sendWithPromise('pdfNetGetVersionString', {});
        };
        PDFNet.setConnectionErrorHandlingMode = function (mode) {
          checkArguments(
            arguments.length,
            1,
            'setConnectionErrorHandlingMode',
            '(number)',
            [[mode, 'number']]
          );
          return PDFNet.sendWithPromise(
            'pdfNetSetConnectionErrorHandlingMode',
            { mode: mode }
          );
        };
        PDFNet.Rect.init = function (x1, y1, x2, y2) {
          checkArguments(
            arguments.length,
            4,
            'init',
            '(number, number, number, number)',
            [
              [x1, 'number'],
              [y1, 'number'],
              [x2, 'number'],
              [y2, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('rectInit', {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
          }).then(function (id) {
            return new PDFNet.Rect(id);
          });
        };
        PDFNet.Rect.prototype.attach = function (obj) {
          checkArguments(arguments.length, 1, 'attach', '(PDFNet.Obj)', [
            [obj, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          checkThisYieldFunction('attach', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Rect.attach';
          return PDFNet.sendWithPromise('Rect.attach', {
            rect: this,
            obj: obj.id,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Rect.prototype.update = function (obj) {
          'undefined' === typeof obj && (obj = new PDFNet.Obj('__null'));
          checkArguments(arguments.length, 0, 'update', '(PDFNet.Obj)', [
            [obj, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          checkThisYieldFunction('update', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Rect.update';
          return PDFNet.sendWithPromise('Rect.update', {
            rect: this,
            obj: obj.id,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.rect, me);
            return id.result;
          });
        };
        PDFNet.Rect.prototype.get = function () {
          checkThisYieldFunction('get', this.yieldFunction);
          return PDFNet.sendWithPromise('Rect.get', { rect: this });
        };
        PDFNet.Rect.prototype.set = function (x1, y1, x2, y2) {
          checkArguments(
            arguments.length,
            4,
            'set',
            '(number, number, number, number)',
            [
              [x1, 'number'],
              [y1, 'number'],
              [x2, 'number'],
              [y2, 'number'],
            ]
          );
          checkThisYieldFunction('set', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Rect.set';
          return PDFNet.sendWithPromise('Rect.set', {
            rect: this,
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Rect.prototype.width = function () {
          checkThisYieldFunction('width', this.yieldFunction);
          return PDFNet.sendWithPromise('Rect.width', { rect: this });
        };
        PDFNet.Rect.prototype.height = function () {
          checkThisYieldFunction('height', this.yieldFunction);
          return PDFNet.sendWithPromise('Rect.height', { rect: this });
        };
        PDFNet.Rect.prototype.contains = function (x, y) {
          checkArguments(arguments.length, 2, 'contains', '(number, number)', [
            [x, 'number'],
            [y, 'number'],
          ]);
          checkThisYieldFunction('contains', this.yieldFunction);
          return PDFNet.sendWithPromise('Rect.contains', {
            rect: this,
            x: x,
            y: y,
          });
        };
        PDFNet.Rect.prototype.intersectRect = function (rect1, rect2) {
          checkArguments(
            arguments.length,
            2,
            'intersectRect',
            '(PDFNet.Rect, PDFNet.Rect)',
            [
              [rect1, 'Structure', PDFNet.Rect, 'Rect'],
              [rect2, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkThisYieldFunction('intersectRect', this.yieldFunction);
          checkParamsYieldFunction('intersectRect', [
            [rect1, 0],
            [rect2, 1],
          ]);
          var me = this;
          this.yieldFunction = 'Rect.intersectRect';
          return PDFNet.sendWithPromise('Rect.intersectRect', {
            rect: this,
            rect1: rect1,
            rect2: rect2,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.rect, me);
            return id.result;
          });
        };
        PDFNet.Rect.prototype.normalize = function () {
          checkThisYieldFunction('normalize', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Rect.normalize';
          return PDFNet.sendWithPromise('Rect.normalize', { rect: this }).then(
            function (id) {
              me.yieldFunction = void 0;
              copyFunc(id, me);
            }
          );
        };
        PDFNet.Rect.prototype.inflate1 = function (amount) {
          checkArguments(arguments.length, 1, 'inflate1', '(number)', [
            [amount, 'number'],
          ]);
          checkThisYieldFunction('inflate1', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Rect.inflate1';
          return PDFNet.sendWithPromise('Rect.inflate1', {
            rect: this,
            amount: amount,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Rect.prototype.inflate2 = function (x, y) {
          checkArguments(arguments.length, 2, 'inflate2', '(number, number)', [
            [x, 'number'],
            [y, 'number'],
          ]);
          checkThisYieldFunction('inflate2', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'Rect.inflate2';
          return PDFNet.sendWithPromise('Rect.inflate2', {
            rect: this,
            x: x,
            y: y,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id, me);
          });
        };
        PDFNet.Redactor.redactionCreate = function (
          page_num,
          bbox,
          negative,
          text
        ) {
          checkArguments(
            arguments.length,
            4,
            'redactionCreate',
            '(number, PDFNet.Rect, boolean, string)',
            [
              [page_num, 'number'],
              [bbox, 'Structure', PDFNet.Rect, 'Rect'],
              [negative, 'boolean'],
              [text, 'string'],
            ]
          );
          checkParamsYieldFunction('redactionCreate', [[bbox, 1]]);
          return PDFNet.sendWithPromise('Redactor.redactionCreate', {
            page_num: page_num,
            bbox: bbox,
            negative: negative,
            text: text,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Redaction, id);
          });
        };
        PDFNet.Redactor.redactionDestroy = function (redaction) {
          checkArguments(
            arguments.length,
            1,
            'redactionDestroy',
            '(PDFNet.Redaction)',
            [[redaction, 'Object', PDFNet.Redaction, 'Redaction']]
          );
          return PDFNet.sendWithPromise('Redactor.redactionDestroy', {
            redaction: redaction.id,
          });
        };
        PDFNet.Redactor.redactionCopy = function (other) {
          checkArguments(
            arguments.length,
            1,
            'redactionCopy',
            '(PDFNet.Redaction)',
            [[other, 'Object', PDFNet.Redaction, 'Redaction']]
          );
          return PDFNet.sendWithPromise('Redactor.redactionCopy', {
            other: other.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Redaction, id);
          });
        };
        PDFNet.Shading.create = function (shading_dict) {
          'undefined' === typeof shading_dict &&
            (shading_dict = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'create', '(PDFNet.Obj)', [
            [shading_dict, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('shadingCreate', {
            shading_dict: shading_dict.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Shading, id);
          });
        };
        PDFNet.Shading.getTypeFromObj = function (shading_dict) {
          checkArguments(
            arguments.length,
            1,
            'getTypeFromObj',
            '(PDFNet.Obj)',
            [[shading_dict, 'Object', PDFNet.Obj, 'Obj']]
          );
          return PDFNet.sendWithPromise('shadingGetTypeFromObj', {
            shading_dict: shading_dict.id,
          });
        };
        PDFNet.Shading.prototype.getType = function () {
          return PDFNet.sendWithPromise('Shading.getType', { s: this.id });
        };
        PDFNet.Shading.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('Shading.getSDFObj', {
            s: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Shading.prototype.getBaseColorSpace = function () {
          return PDFNet.sendWithPromise('Shading.getBaseColorSpace', {
            s: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorSpace, id);
          });
        };
        PDFNet.Shading.prototype.hasBBox = function () {
          return PDFNet.sendWithPromise('Shading.hasBBox', { s: this.id });
        };
        PDFNet.Shading.prototype.getBBox = function () {
          return PDFNet.sendWithPromise('Shading.getBBox', { s: this.id }).then(
            function (id) {
              return new PDFNet.Rect(id);
            }
          );
        };
        PDFNet.Shading.prototype.hasBackground = function () {
          return PDFNet.sendWithPromise('Shading.hasBackground', {
            s: this.id,
          });
        };
        PDFNet.Shading.prototype.getBackground = function () {
          return PDFNet.sendWithPromise('Shading.getBackground', {
            s: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.Shading.prototype.getAntialias = function () {
          return PDFNet.sendWithPromise('Shading.getAntialias', { s: this.id });
        };
        PDFNet.Shading.prototype.getParamStart = function () {
          return PDFNet.sendWithPromise('Shading.getParamStart', {
            s: this.id,
          });
        };
        PDFNet.Shading.prototype.getParamEnd = function () {
          return PDFNet.sendWithPromise('Shading.getParamEnd', { s: this.id });
        };
        PDFNet.Shading.prototype.isExtendStart = function () {
          return PDFNet.sendWithPromise('Shading.isExtendStart', {
            s: this.id,
          });
        };
        PDFNet.Shading.prototype.isExtendEnd = function () {
          return PDFNet.sendWithPromise('Shading.isExtendEnd', { s: this.id });
        };
        PDFNet.Shading.prototype.getColor = function (t) {
          checkArguments(arguments.length, 1, 'getColor', '(number)', [
            [t, 'number'],
          ]);
          return PDFNet.sendWithPromise('Shading.getColor', {
            s: this.id,
            t: t,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.Shading.prototype.getCoords = function () {
          return PDFNet.sendWithPromise('Shading.getCoords', { s: this.id });
        };
        PDFNet.Shading.prototype.getCoordsRadial = function () {
          return PDFNet.sendWithPromise('Shading.getCoordsRadial', {
            s: this.id,
          });
        };
        PDFNet.Shading.prototype.getDomain = function () {
          return PDFNet.sendWithPromise('Shading.getDomain', { s: this.id });
        };
        PDFNet.Shading.prototype.getMatrix = function () {
          return PDFNet.sendWithPromise('Shading.getMatrix', {
            s: this.id,
          }).then(function (id) {
            return new PDFNet.Matrix2D(id);
          });
        };
        PDFNet.Shading.prototype.getColorForFunction = function (t1, t2) {
          checkArguments(
            arguments.length,
            2,
            'getColorForFunction',
            '(number, number)',
            [
              [t1, 'number'],
              [t2, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Shading.getColorForFunction', {
            s: this.id,
            t1: t1,
            t2: t2,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ColorPt, id);
          });
        };
        PDFNet.Stamper.create = function (size_type, a, b) {
          checkArguments(
            arguments.length,
            3,
            'create',
            '(number, number, number)',
            [
              [size_type, 'number'],
              [a, 'number'],
              [b, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('stamperCreate', {
            size_type: size_type,
            a: a,
            b: b,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Stamper, id);
          });
        };
        PDFNet.Stamper.prototype.stampImage = function (
          dest_doc,
          img,
          dest_pages
        ) {
          checkArguments(
            arguments.length,
            3,
            'stampImage',
            '(PDFNet.PDFDoc, PDFNet.Image, PDFNet.PageSet)',
            [
              [dest_doc, 'PDFDoc'],
              [img, 'Object', PDFNet.Image, 'Image'],
              [dest_pages, 'Object', PDFNet.PageSet, 'PageSet'],
            ]
          );
          return PDFNet.sendWithPromise('Stamper.stampImage', {
            stamp: this.id,
            dest_doc: dest_doc.id,
            img: img.id,
            dest_pages: dest_pages.id,
          });
        };
        PDFNet.Stamper.prototype.stampPage = function (
          dest_doc,
          page,
          dest_pages
        ) {
          checkArguments(
            arguments.length,
            3,
            'stampPage',
            '(PDFNet.PDFDoc, PDFNet.Page, PDFNet.PageSet)',
            [
              [dest_doc, 'PDFDoc'],
              [page, 'Object', PDFNet.Page, 'Page'],
              [dest_pages, 'Object', PDFNet.PageSet, 'PageSet'],
            ]
          );
          return PDFNet.sendWithPromise('Stamper.stampPage', {
            stamp: this.id,
            dest_doc: dest_doc.id,
            page: page.id,
            dest_pages: dest_pages.id,
          });
        };
        PDFNet.Stamper.prototype.stampText = function (
          dest_doc,
          txt,
          dest_pages
        ) {
          checkArguments(
            arguments.length,
            3,
            'stampText',
            '(PDFNet.PDFDoc, string, PDFNet.PageSet)',
            [
              [dest_doc, 'PDFDoc'],
              [txt, 'string'],
              [dest_pages, 'Object', PDFNet.PageSet, 'PageSet'],
            ]
          );
          return PDFNet.sendWithPromise('Stamper.stampText', {
            stamp: this.id,
            dest_doc: dest_doc.id,
            txt: txt,
            dest_pages: dest_pages.id,
          });
        };
        PDFNet.Stamper.prototype.setFont = function (font) {
          checkArguments(arguments.length, 1, 'setFont', '(PDFNet.Font)', [
            [font, 'Object', PDFNet.Font, 'Font'],
          ]);
          return PDFNet.sendWithPromise('Stamper.setFont', {
            stamp: this.id,
            font: font.id,
          });
        };
        PDFNet.Stamper.prototype.setFontColor = function (font_color) {
          checkArguments(
            arguments.length,
            1,
            'setFontColor',
            '(PDFNet.ColorPt)',
            [[font_color, 'Object', PDFNet.ColorPt, 'ColorPt']]
          );
          return PDFNet.sendWithPromise('Stamper.setFontColor', {
            stamp: this.id,
            font_color: font_color.id,
          });
        };
        PDFNet.Stamper.prototype.setTextAlignment = function (text_alignment) {
          checkArguments(arguments.length, 1, 'setTextAlignment', '(number)', [
            [text_alignment, 'number'],
          ]);
          return PDFNet.sendWithPromise('Stamper.setTextAlignment', {
            stamp: this.id,
            text_alignment: text_alignment,
          });
        };
        PDFNet.Stamper.prototype.setOpacity = function (opacity) {
          checkArguments(arguments.length, 1, 'setOpacity', '(number)', [
            [opacity, 'number'],
          ]);
          return PDFNet.sendWithPromise('Stamper.setOpacity', {
            stamp: this.id,
            opacity: opacity,
          });
        };
        PDFNet.Stamper.prototype.setRotation = function (rotation) {
          checkArguments(arguments.length, 1, 'setRotation', '(number)', [
            [rotation, 'number'],
          ]);
          return PDFNet.sendWithPromise('Stamper.setRotation', {
            stamp: this.id,
            rotation: rotation,
          });
        };
        PDFNet.Stamper.prototype.setAsBackground = function (background) {
          checkArguments(arguments.length, 1, 'setAsBackground', '(boolean)', [
            [background, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Stamper.setAsBackground', {
            stamp: this.id,
            background: background,
          });
        };
        PDFNet.Stamper.prototype.setAsAnnotation = function (annotation) {
          checkArguments(arguments.length, 1, 'setAsAnnotation', '(boolean)', [
            [annotation, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Stamper.setAsAnnotation', {
            stamp: this.id,
            annotation: annotation,
          });
        };
        PDFNet.Stamper.prototype.showsOnScreen = function (on_screen) {
          checkArguments(arguments.length, 1, 'showsOnScreen', '(boolean)', [
            [on_screen, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Stamper.showsOnScreen', {
            stamp: this.id,
            on_screen: on_screen,
          });
        };
        PDFNet.Stamper.prototype.showsOnPrint = function (on_print) {
          checkArguments(arguments.length, 1, 'showsOnPrint', '(boolean)', [
            [on_print, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Stamper.showsOnPrint', {
            stamp: this.id,
            on_print: on_print,
          });
        };
        PDFNet.Stamper.prototype.setAlignment = function (
          horizontal_alignment,
          vertical_alignment
        ) {
          checkArguments(
            arguments.length,
            2,
            'setAlignment',
            '(number, number)',
            [
              [horizontal_alignment, 'number'],
              [vertical_alignment, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Stamper.setAlignment', {
            stamp: this.id,
            horizontal_alignment: horizontal_alignment,
            vertical_alignment: vertical_alignment,
          });
        };
        PDFNet.Stamper.prototype.setPosition = function (
          horizontal_distance,
          vertical_distance,
          use_percentage
        ) {
          'undefined' === typeof use_percentage && (use_percentage = !1);
          checkArguments(
            arguments.length,
            2,
            'setPosition',
            '(number, number, boolean)',
            [
              [horizontal_distance, 'number'],
              [vertical_distance, 'number'],
              [use_percentage, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('Stamper.setPosition', {
            stamp: this.id,
            horizontal_distance: horizontal_distance,
            vertical_distance: vertical_distance,
            use_percentage: use_percentage,
          });
        };
        PDFNet.Stamper.prototype.setSize = function (size_type, a, b) {
          checkArguments(
            arguments.length,
            3,
            'setSize',
            '(number, number, number)',
            [
              [size_type, 'number'],
              [a, 'number'],
              [b, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Stamper.setSize', {
            stamp: this.id,
            size_type: size_type,
            a: a,
            b: b,
          });
        };
        PDFNet.Stamper.deleteStamps = function (doc, page_set) {
          checkArguments(
            arguments.length,
            2,
            'deleteStamps',
            '(PDFNet.PDFDoc, PDFNet.PageSet)',
            [
              [doc, 'PDFDoc'],
              [page_set, 'Object', PDFNet.PageSet, 'PageSet'],
            ]
          );
          return PDFNet.sendWithPromise('stamperDeleteStamps', {
            doc: doc.id,
            page_set: page_set.id,
          });
        };
        PDFNet.Stamper.hasStamps = function (doc, page_set) {
          checkArguments(
            arguments.length,
            2,
            'hasStamps',
            '(PDFNet.PDFDoc, PDFNet.PageSet)',
            [
              [doc, 'PDFDoc'],
              [page_set, 'Object', PDFNet.PageSet, 'PageSet'],
            ]
          );
          return PDFNet.sendWithPromise('stamperHasStamps', {
            doc: doc.id,
            page_set: page_set.id,
          });
        };
        PDFNet.TextExtractor.create = function () {
          return PDFNet.sendWithPromise('textExtractorCreate', {}).then(
            function (id) {
              return createDestroyableObj(PDFNet.TextExtractor, id);
            }
          );
        };
        PDFNet.TextExtractor.prototype.setOCGContext = function (ctx) {
          checkArguments(
            arguments.length,
            1,
            'setOCGContext',
            '(PDFNet.OCGContext)',
            [[ctx, 'Object', PDFNet.OCGContext, 'OCGContext']]
          );
          return PDFNet.sendWithPromise('TextExtractor.setOCGContext', {
            te: this.id,
            ctx: ctx.id,
          });
        };
        PDFNet.TextExtractor.prototype.begin = function (
          page,
          clip_ptr,
          flags
        ) {
          'undefined' === typeof clip_ptr && (clip_ptr = null);
          'undefined' === typeof flags && (flags = 0);
          checkArguments(
            arguments.length,
            1,
            'begin',
            '(PDFNet.Page, PDFNet.Rect, number)',
            [
              [page, 'Object', PDFNet.Page, 'Page'],
              [clip_ptr, 'Structure', PDFNet.Rect, 'Rect'],
              [flags, 'number'],
            ]
          );
          checkParamsYieldFunction('begin', [[clip_ptr, 1]]);
          return PDFNet.sendWithPromise('TextExtractor.begin', {
            te: this.id,
            page: page.id,
            clip_ptr: clip_ptr,
            flags: flags,
          });
        };
        PDFNet.TextExtractor.prototype.getWordCount = function () {
          return PDFNet.sendWithPromise('TextExtractor.getWordCount', {
            te: this.id,
          });
        };
        PDFNet.TextExtractor.prototype.setRightToLeftLanguage = function (rtl) {
          checkArguments(
            arguments.length,
            1,
            'setRightToLeftLanguage',
            '(boolean)',
            [[rtl, 'boolean']]
          );
          return PDFNet.sendWithPromise(
            'TextExtractor.setRightToLeftLanguage',
            { te: this.id, rtl: rtl }
          );
        };
        PDFNet.TextExtractor.prototype.getRightToLeftLanguage = function () {
          return PDFNet.sendWithPromise(
            'TextExtractor.getRightToLeftLanguage',
            { te: this.id }
          );
        };
        PDFNet.TextExtractor.prototype.getAsText = function (dehyphen) {
          'undefined' === typeof dehyphen && (dehyphen = !0);
          checkArguments(arguments.length, 0, 'getAsText', '(boolean)', [
            [dehyphen, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('TextExtractor.getAsText', {
            te: this.id,
            dehyphen: dehyphen,
          });
        };
        PDFNet.TextExtractor.prototype.getTextUnderAnnot = function (annot) {
          checkArguments(
            arguments.length,
            1,
            'getTextUnderAnnot',
            '(PDFNet.Annot)',
            [[annot, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('TextExtractor.getTextUnderAnnot', {
            te: this.id,
            annot: annot.id,
          });
        };
        PDFNet.TextExtractor.prototype.getAsXML = function (xml_output_flags) {
          'undefined' === typeof xml_output_flags && (xml_output_flags = 0);
          checkArguments(arguments.length, 0, 'getAsXML', '(number)', [
            [xml_output_flags, 'number'],
          ]);
          return PDFNet.sendWithPromise('TextExtractor.getAsXML', {
            te: this.id,
            xml_output_flags: xml_output_flags,
          });
        };
        PDFNet.TextExtractorStyle.prototype.getFont = function () {
          checkThisYieldFunction('getFont', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorStyle.getFont';
          return PDFNet.sendWithPromise('TextExtractorStyle.getFont', {
            tes: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = createPDFNetObj(PDFNet.Obj, id.result);
            copyFunc(id.tes, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorStyle.prototype.getFontName = function () {
          checkThisYieldFunction('getFontName', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorStyle.getFontName';
          return PDFNet.sendWithPromise('TextExtractorStyle.getFontName', {
            tes: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.tes, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorStyle.prototype.getFontSize = function () {
          checkThisYieldFunction('getFontSize', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorStyle.getFontSize';
          return PDFNet.sendWithPromise('TextExtractorStyle.getFontSize', {
            tes: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.tes, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorStyle.prototype.getWeight = function () {
          checkThisYieldFunction('getWeight', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorStyle.getWeight';
          return PDFNet.sendWithPromise('TextExtractorStyle.getWeight', {
            tes: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.tes, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorStyle.prototype.isItalic = function () {
          checkThisYieldFunction('isItalic', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorStyle.isItalic';
          return PDFNet.sendWithPromise('TextExtractorStyle.isItalic', {
            tes: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.tes, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorStyle.prototype.isSerif = function () {
          checkThisYieldFunction('isSerif', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorStyle.isSerif';
          return PDFNet.sendWithPromise('TextExtractorStyle.isSerif', {
            tes: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.tes, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorStyle.prototype.compare = function (s) {
          checkArguments(
            arguments.length,
            1,
            'compare',
            '(PDFNet.TextExtractorStyle)',
            [[s, 'Structure', PDFNet.TextExtractorStyle, 'TextExtractorStyle']]
          );
          checkThisYieldFunction('compare', this.yieldFunction);
          checkParamsYieldFunction('compare', [[s, 0]]);
          return PDFNet.sendWithPromise('TextExtractorStyle.compare', {
            tes: this,
            s: s,
          });
        };
        PDFNet.TextExtractorStyle.create = function () {
          return PDFNet.sendWithPromise('textExtractorStyleCreate', {}).then(
            function (id) {
              return new PDFNet.TextExtractorStyle(id);
            }
          );
        };
        PDFNet.TextExtractorStyle.prototype.copy = function () {
          checkThisYieldFunction('copy', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorStyle.copy';
          return PDFNet.sendWithPromise('TextExtractorStyle.copy', {
            s: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = new PDFNet.TextExtractorStyle(id.result);
            copyFunc(id.s, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorWord.prototype.getNumGlyphs = function () {
          checkThisYieldFunction('getNumGlyphs', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorWord.getNumGlyphs';
          return PDFNet.sendWithPromise('TextExtractorWord.getNumGlyphs', {
            tew: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.tew, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorWord.prototype.getCharStyle = function (char_idx) {
          checkArguments(arguments.length, 1, 'getCharStyle', '(number)', [
            [char_idx, 'number'],
          ]);
          checkThisYieldFunction('getCharStyle', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorWord.getCharStyle';
          return PDFNet.sendWithPromise('TextExtractorWord.getCharStyle', {
            tew: this,
            char_idx: char_idx,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = new PDFNet.TextExtractorStyle(id.result);
            copyFunc(id.tew, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorWord.prototype.getStyle = function () {
          checkThisYieldFunction('getStyle', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorWord.getStyle';
          return PDFNet.sendWithPromise('TextExtractorWord.getStyle', {
            tew: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = new PDFNet.TextExtractorStyle(id.result);
            copyFunc(id.tew, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorWord.prototype.getStringLen = function () {
          checkThisYieldFunction('getStringLen', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorWord.getStringLen';
          return PDFNet.sendWithPromise('TextExtractorWord.getStringLen', {
            tew: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.tew, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorWord.prototype.getNextWord = function () {
          checkThisYieldFunction('getNextWord', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorWord.getNextWord';
          return PDFNet.sendWithPromise('TextExtractorWord.getNextWord', {
            tew: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = new PDFNet.TextExtractorWord(id.result);
            copyFunc(id.tew, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorWord.prototype.getCurrentNum = function () {
          checkThisYieldFunction('getCurrentNum', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorWord.getCurrentNum';
          return PDFNet.sendWithPromise('TextExtractorWord.getCurrentNum', {
            tew: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.tew, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorWord.prototype.compare = function (word) {
          checkArguments(
            arguments.length,
            1,
            'compare',
            '(PDFNet.TextExtractorWord)',
            [[word, 'Structure', PDFNet.TextExtractorWord, 'TextExtractorWord']]
          );
          checkThisYieldFunction('compare', this.yieldFunction);
          checkParamsYieldFunction('compare', [[word, 0]]);
          return PDFNet.sendWithPromise('TextExtractorWord.compare', {
            tew: this,
            word: word,
          });
        };
        PDFNet.TextExtractorWord.create = function () {
          return PDFNet.sendWithPromise('textExtractorWordCreate', {}).then(
            function (id) {
              return new PDFNet.TextExtractorWord(id);
            }
          );
        };
        PDFNet.TextExtractorWord.prototype.isValid = function () {
          checkThisYieldFunction('isValid', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorWord.isValid';
          return PDFNet.sendWithPromise('TextExtractorWord.isValid', {
            tew: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.tew, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorLine.prototype.getNumWords = function () {
          checkThisYieldFunction('getNumWords', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorLine.getNumWords';
          return PDFNet.sendWithPromise('TextExtractorLine.getNumWords', {
            line: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.line, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorLine.prototype.isSimpleLine = function () {
          checkThisYieldFunction('isSimpleLine', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorLine.isSimpleLine';
          return PDFNet.sendWithPromise('TextExtractorLine.isSimpleLine', {
            line: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.line, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorLine.prototype.getFirstWord = function () {
          checkThisYieldFunction('getFirstWord', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorLine.getFirstWord';
          return PDFNet.sendWithPromise('TextExtractorLine.getFirstWord', {
            line: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = new PDFNet.TextExtractorWord(id.result);
            copyFunc(id.line, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorLine.prototype.getWord = function (word_idx) {
          checkArguments(arguments.length, 1, 'getWord', '(number)', [
            [word_idx, 'number'],
          ]);
          checkThisYieldFunction('getWord', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorLine.getWord';
          return PDFNet.sendWithPromise('TextExtractorLine.getWord', {
            line: this,
            word_idx: word_idx,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = new PDFNet.TextExtractorWord(id.result);
            copyFunc(id.line, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorLine.prototype.getNextLine = function () {
          checkThisYieldFunction('getNextLine', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorLine.getNextLine';
          return PDFNet.sendWithPromise('TextExtractorLine.getNextLine', {
            line: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = new PDFNet.TextExtractorLine(id.result);
            copyFunc(id.line, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorLine.prototype.getCurrentNum = function () {
          checkThisYieldFunction('getCurrentNum', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorLine.getCurrentNum';
          return PDFNet.sendWithPromise('TextExtractorLine.getCurrentNum', {
            line: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.line, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorLine.prototype.getStyle = function () {
          checkThisYieldFunction('getStyle', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorLine.getStyle';
          return PDFNet.sendWithPromise('TextExtractorLine.getStyle', {
            line: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            id.result = new PDFNet.TextExtractorStyle(id.result);
            copyFunc(id.line, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorLine.prototype.getParagraphID = function () {
          checkThisYieldFunction('getParagraphID', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorLine.getParagraphID';
          return PDFNet.sendWithPromise('TextExtractorLine.getParagraphID', {
            line: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.line, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorLine.prototype.getFlowID = function () {
          checkThisYieldFunction('getFlowID', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorLine.getFlowID';
          return PDFNet.sendWithPromise('TextExtractorLine.getFlowID', {
            line: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.line, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorLine.prototype.endsWithHyphen = function () {
          checkThisYieldFunction('endsWithHyphen', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorLine.endsWithHyphen';
          return PDFNet.sendWithPromise('TextExtractorLine.endsWithHyphen', {
            line: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.line, me);
            return id.result;
          });
        };
        PDFNet.TextExtractorLine.prototype.compare = function (line2) {
          checkArguments(
            arguments.length,
            1,
            'compare',
            '(PDFNet.TextExtractorLine)',
            [
              [
                line2,
                'Structure',
                PDFNet.TextExtractorLine,
                'TextExtractorLine',
              ],
            ]
          );
          checkThisYieldFunction('compare', this.yieldFunction);
          checkParamsYieldFunction('compare', [[line2, 0]]);
          return PDFNet.sendWithPromise('TextExtractorLine.compare', {
            line: this,
            line2: line2,
          });
        };
        PDFNet.TextExtractorLine.create = function () {
          return PDFNet.sendWithPromise('textExtractorLineCreate', {}).then(
            function (id) {
              return new PDFNet.TextExtractorLine(id);
            }
          );
        };
        PDFNet.TextExtractorLine.prototype.isValid = function () {
          checkThisYieldFunction('isValid', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorLine.isValid';
          return PDFNet.sendWithPromise('TextExtractorLine.isValid', {
            line: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            copyFunc(id.line, me);
            return id.result;
          });
        };
        PDFNet.TextExtractor.prototype.getNumLines = function () {
          return PDFNet.sendWithPromise('TextExtractor.getNumLines', {
            te: this.id,
          });
        };
        PDFNet.TextExtractor.prototype.getFirstLine = function () {
          return PDFNet.sendWithPromise('TextExtractor.getFirstLine', {
            te: this.id,
          }).then(function (id) {
            return new PDFNet.TextExtractorLine(id);
          });
        };
        PDFNet.TextExtractor.prototype.getQuads = function (
          mtx,
          quads,
          quads_size
        ) {
          checkArguments(
            arguments.length,
            3,
            'getQuads',
            '(PDFNet.Matrix2D, number, number)',
            [
              [mtx, 'Structure', PDFNet.Matrix2D, 'Matrix2D'],
              [quads, 'number'],
              [quads_size, 'number'],
            ]
          );
          checkParamsYieldFunction('getQuads', [[mtx, 0]]);
          return PDFNet.sendWithPromise('TextExtractor.getQuads', {
            te: this.id,
            mtx: mtx,
            quads: quads,
            quads_size: quads_size,
          });
        };
        PDFNet.TextSearch.create = function () {
          return PDFNet.sendWithPromise('textSearchCreate', {}).then(
            function (id) {
              return createDestroyableObj(PDFNet.TextSearch, id);
            }
          );
        };
        PDFNet.TextSearch.prototype.begin = function (
          doc,
          pattern,
          mode,
          start_page,
          end_page
        ) {
          'undefined' === typeof start_page && (start_page = -1);
          'undefined' === typeof end_page && (end_page = -1);
          checkArguments(
            arguments.length,
            3,
            'begin',
            '(PDFNet.PDFDoc, string, number, number, number)',
            [
              [doc, 'PDFDoc'],
              [pattern, 'string'],
              [mode, 'number'],
              [start_page, 'number'],
              [end_page, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('TextSearch.begin', {
            ts: this.id,
            doc: doc.id,
            pattern: pattern,
            mode: mode,
            start_page: start_page,
            end_page: end_page,
          });
        };
        PDFNet.TextSearch.prototype.setPattern = function (pattern) {
          checkArguments(arguments.length, 1, 'setPattern', '(string)', [
            [pattern, 'string'],
          ]);
          return PDFNet.sendWithPromise('TextSearch.setPattern', {
            ts: this.id,
            pattern: pattern,
          });
        };
        PDFNet.TextSearch.prototype.getMode = function () {
          return PDFNet.sendWithPromise('TextSearch.getMode', { ts: this.id });
        };
        PDFNet.TextSearch.prototype.setMode = function (mode) {
          checkArguments(arguments.length, 1, 'setMode', '(number)', [
            [mode, 'number'],
          ]);
          return PDFNet.sendWithPromise('TextSearch.setMode', {
            ts: this.id,
            mode: mode,
          });
        };
        PDFNet.TextSearch.prototype.setRightToLeftLanguage = function (flag) {
          checkArguments(
            arguments.length,
            1,
            'setRightToLeftLanguage',
            '(boolean)',
            [[flag, 'boolean']]
          );
          return PDFNet.sendWithPromise('TextSearch.setRightToLeftLanguage', {
            ts: this.id,
            flag: flag,
          });
        };
        PDFNet.TextSearch.prototype.getCurrentPage = function () {
          return PDFNet.sendWithPromise('TextSearch.getCurrentPage', {
            ts: this.id,
          });
        };
        PDFNet.TextSearch.prototype.setOCGContext = function (ctx) {
          checkArguments(
            arguments.length,
            1,
            'setOCGContext',
            '(PDFNet.OCGContext)',
            [[ctx, 'Object', PDFNet.OCGContext, 'OCGContext']]
          );
          return PDFNet.sendWithPromise('TextSearch.setOCGContext', {
            te: this.id,
            ctx: ctx.id,
          });
        };
        PDFNet.TextSearch.prototype.setAmbientLettersBefore = function (
          ambient_letters_before
        ) {
          checkArguments(
            arguments.length,
            1,
            'setAmbientLettersBefore',
            '(number)',
            [[ambient_letters_before, 'number']]
          );
          return PDFNet.sendWithPromise('TextSearch.setAmbientLettersBefore', {
            self: this.id,
            ambient_letters_before: ambient_letters_before,
          });
        };
        PDFNet.TextSearch.prototype.setAmbientLettersAfter = function (
          ambient_letters_after
        ) {
          checkArguments(
            arguments.length,
            1,
            'setAmbientLettersAfter',
            '(number)',
            [[ambient_letters_after, 'number']]
          );
          return PDFNet.sendWithPromise('TextSearch.setAmbientLettersAfter', {
            self: this.id,
            ambient_letters_after: ambient_letters_after,
          });
        };
        PDFNet.TextSearch.prototype.setAmbientWordsBefore = function (
          ambient_words_before
        ) {
          checkArguments(
            arguments.length,
            1,
            'setAmbientWordsBefore',
            '(number)',
            [[ambient_words_before, 'number']]
          );
          return PDFNet.sendWithPromise('TextSearch.setAmbientWordsBefore', {
            self: this.id,
            ambient_words_before: ambient_words_before,
          });
        };
        PDFNet.TextSearch.prototype.setAmbientWordsAfter = function (
          ambient_words_after
        ) {
          checkArguments(
            arguments.length,
            1,
            'setAmbientWordsAfter',
            '(number)',
            [[ambient_words_after, 'number']]
          );
          return PDFNet.sendWithPromise('TextSearch.setAmbientWordsAfter', {
            self: this.id,
            ambient_words_after: ambient_words_after,
          });
        };
        PDFNet.NameTree.create = function (doc, name) {
          checkArguments(
            arguments.length,
            2,
            'create',
            '(PDFNet.SDFDoc, string)',
            [
              [doc, 'SDFDoc'],
              [name, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('nameTreeCreate', {
            doc: doc.id,
            name: name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.NameTree, id);
          });
        };
        PDFNet.NameTree.find = function (doc, name) {
          checkArguments(
            arguments.length,
            2,
            'find',
            '(PDFNet.SDFDoc, string)',
            [
              [doc, 'SDFDoc'],
              [name, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('nameTreeFind', {
            doc: doc.id,
            name: name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.NameTree, id);
          });
        };
        PDFNet.NameTree.createFromObj = function (name_tree) {
          checkArguments(arguments.length, 1, 'createFromObj', '(PDFNet.Obj)', [
            [name_tree, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('nameTreeCreateFromObj', {
            name_tree: name_tree.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.NameTree, id);
          });
        };
        PDFNet.NameTree.prototype.copy = function () {
          return PDFNet.sendWithPromise('NameTree.copy', { d: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.NameTree, id);
            }
          );
        };
        PDFNet.NameTree.prototype.isValid = function () {
          return PDFNet.sendWithPromise('NameTree.isValid', { tree: this.id });
        };
        PDFNet.NameTree.prototype.getIterator = function (key) {
          checkArguments(arguments.length, 1, 'getIterator', '(string)', [
            [key, 'string'],
          ]);
          return PDFNet.sendWithPromise('NameTree.getIterator', {
            tree: this.id,
            key: key,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.DictIterator, id);
          });
        };
        PDFNet.NameTree.prototype.getValue = function (key) {
          checkArguments(arguments.length, 1, 'getValue', '(string)', [
            [key, 'string'],
          ]);
          return PDFNet.sendWithPromise('NameTree.getValue', {
            tree: this.id,
            key: key,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.NameTree.prototype.getIteratorBegin = function () {
          return PDFNet.sendWithPromise('NameTree.getIteratorBegin', {
            tree: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.DictIterator, id);
          });
        };
        PDFNet.NameTree.prototype.put = function (key, value) {
          checkArguments(arguments.length, 2, 'put', '(string, PDFNet.Obj)', [
            [key, 'string'],
            [value, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('NameTree.put', {
            tree: this.id,
            key: key,
            value: value.id,
          });
        };
        PDFNet.NameTree.prototype.eraseKey = function (key) {
          checkArguments(arguments.length, 1, 'eraseKey', '(string)', [
            [key, 'string'],
          ]);
          return PDFNet.sendWithPromise('NameTree.eraseKey', {
            tree: this.id,
            key: key,
          });
        };
        PDFNet.NameTree.prototype.erase = function (pos) {
          checkArguments(
            arguments.length,
            1,
            'erase',
            '(PDFNet.DictIterator)',
            [[pos, 'Object', PDFNet.DictIterator, 'DictIterator']]
          );
          return PDFNet.sendWithPromise('NameTree.erase', {
            tree: this.id,
            pos: pos.id,
          });
        };
        PDFNet.NameTree.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('NameTree.getSDFObj', {
            tree: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.NumberTree.create = function (number_tree) {
          checkArguments(arguments.length, 1, 'create', '(PDFNet.Obj)', [
            [number_tree, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('numberTreeCreate', {
            number_tree: number_tree.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.NumberTree, id);
          });
        };
        PDFNet.NumberTree.prototype.copy = function () {
          return PDFNet.sendWithPromise('NumberTree.copy', {
            tree: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.NumberTree, id);
          });
        };
        PDFNet.NumberTree.prototype.isValid = function () {
          return PDFNet.sendWithPromise('NumberTree.isValid', {
            tree: this.id,
          });
        };
        PDFNet.NumberTree.prototype.getIterator = function (key) {
          checkArguments(arguments.length, 1, 'getIterator', '(number)', [
            [key, 'number'],
          ]);
          return PDFNet.sendWithPromise('NumberTree.getIterator', {
            tree: this.id,
            key: key,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.DictIterator, id);
          });
        };
        PDFNet.NumberTree.prototype.getValue = function (key) {
          checkArguments(arguments.length, 1, 'getValue', '(number)', [
            [key, 'number'],
          ]);
          return PDFNet.sendWithPromise('NumberTree.getValue', {
            tree: this.id,
            key: key,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.NumberTree.prototype.getIteratorBegin = function () {
          return PDFNet.sendWithPromise('NumberTree.getIteratorBegin', {
            tree: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.DictIterator, id);
          });
        };
        PDFNet.NumberTree.prototype.put = function (key, value) {
          checkArguments(arguments.length, 2, 'put', '(number, PDFNet.Obj)', [
            [key, 'number'],
            [value, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('NumberTree.put', {
            tree: this.id,
            key: key,
            value: value.id,
          });
        };
        PDFNet.NumberTree.prototype.eraseKey = function (key) {
          checkArguments(arguments.length, 1, 'eraseKey', '(number)', [
            [key, 'number'],
          ]);
          return PDFNet.sendWithPromise('NumberTree.eraseKey', {
            tree: this.id,
            key: key,
          });
        };
        PDFNet.NumberTree.prototype.erase = function (pos) {
          checkArguments(
            arguments.length,
            1,
            'erase',
            '(PDFNet.DictIterator)',
            [[pos, 'Object', PDFNet.DictIterator, 'DictIterator']]
          );
          return PDFNet.sendWithPromise('NumberTree.erase', {
            tree: this.id,
            pos: pos.id,
          });
        };
        PDFNet.NumberTree.prototype.getSDFObj = function () {
          return PDFNet.sendWithPromise('NumberTree.getSDFObj', {
            tree: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.getType = function () {
          return PDFNet.sendWithPromise('Obj.getType', { o: this.id });
        };
        PDFNet.Obj.prototype.getDoc = function () {
          return PDFNet.sendWithPromise('Obj.getDoc', { o: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.SDFDoc, id);
            }
          );
        };
        PDFNet.Obj.prototype.write = function (stream) {
          checkArguments(
            arguments.length,
            1,
            'write',
            '(PDFNet.FilterWriter)',
            [[stream, 'Object', PDFNet.FilterWriter, 'FilterWriter']]
          );
          return PDFNet.sendWithPromise('Obj.write', {
            o: this.id,
            stream: stream.id,
          });
        };
        PDFNet.Obj.prototype.isEqual = function (to) {
          checkArguments(arguments.length, 1, 'isEqual', '(PDFNet.Obj)', [
            [to, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('Obj.isEqual', {
            o: this.id,
            to: to.id,
          });
        };
        PDFNet.Obj.prototype.isBool = function () {
          return PDFNet.sendWithPromise('Obj.isBool', { o: this.id });
        };
        PDFNet.Obj.prototype.getBool = function () {
          return PDFNet.sendWithPromise('Obj.getBool', { o: this.id });
        };
        PDFNet.Obj.prototype.setBool = function (b) {
          checkArguments(arguments.length, 1, 'setBool', '(boolean)', [
            [b, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Obj.setBool', { o: this.id, b: b });
        };
        PDFNet.Obj.prototype.isNumber = function () {
          return PDFNet.sendWithPromise('Obj.isNumber', { o: this.id });
        };
        PDFNet.Obj.prototype.getNumber = function () {
          return PDFNet.sendWithPromise('Obj.getNumber', { o: this.id });
        };
        PDFNet.Obj.prototype.setNumber = function (n) {
          checkArguments(arguments.length, 1, 'setNumber', '(number)', [
            [n, 'number'],
          ]);
          return PDFNet.sendWithPromise('Obj.setNumber', { o: this.id, n: n });
        };
        PDFNet.Obj.prototype.isNull = function () {
          return PDFNet.sendWithPromise('Obj.isNull', { o: this.id });
        };
        PDFNet.Obj.prototype.isString = function () {
          return PDFNet.sendWithPromise('Obj.isString', { o: this.id });
        };
        PDFNet.Obj.prototype.getBuffer = function () {
          return PDFNet.sendWithPromise('Obj.getBuffer', { o: this.id });
        };
        PDFNet.Obj.prototype.setString = function (value) {
          checkArguments(arguments.length, 1, 'setString', '(string)', [
            [value, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.setString', {
            o: this.id,
            value: value,
          });
        };
        PDFNet.Obj.prototype.setUString = function (value) {
          checkArguments(arguments.length, 1, 'setUString', '(string)', [
            [value, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.setUString', {
            o: this.id,
            value: value,
          });
        };
        PDFNet.Obj.prototype.isName = function () {
          return PDFNet.sendWithPromise('Obj.isName', { o: this.id });
        };
        PDFNet.Obj.prototype.getName = function () {
          return PDFNet.sendWithPromise('Obj.getName', { o: this.id });
        };
        PDFNet.Obj.prototype.setName = function (name) {
          checkArguments(arguments.length, 1, 'setName', '(string)', [
            [name, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.setName', {
            o: this.id,
            name: name,
          });
        };
        PDFNet.Obj.prototype.isIndirect = function () {
          return PDFNet.sendWithPromise('Obj.isIndirect', { o: this.id });
        };
        PDFNet.Obj.prototype.getObjNum = function () {
          return PDFNet.sendWithPromise('Obj.getObjNum', { o: this.id });
        };
        PDFNet.Obj.prototype.getGenNum = function () {
          return PDFNet.sendWithPromise('Obj.getGenNum', { o: this.id });
        };
        PDFNet.Obj.prototype.getOffset = function () {
          return PDFNet.sendWithPromise('Obj.getOffset', { o: this.id });
        };
        PDFNet.Obj.prototype.isFree = function () {
          return PDFNet.sendWithPromise('Obj.isFree', { o: this.id });
        };
        PDFNet.Obj.prototype.setMark = function (mark) {
          checkArguments(arguments.length, 1, 'setMark', '(boolean)', [
            [mark, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Obj.setMark', {
            o: this.id,
            mark: mark,
          });
        };
        PDFNet.Obj.prototype.isMarked = function () {
          return PDFNet.sendWithPromise('Obj.isMarked', { o: this.id });
        };
        PDFNet.Obj.prototype.isLoaded = function () {
          return PDFNet.sendWithPromise('Obj.isLoaded', { o: this.id });
        };
        PDFNet.Obj.prototype.isContainer = function () {
          return PDFNet.sendWithPromise('Obj.isContainer', { o: this.id });
        };
        PDFNet.Obj.prototype.size = function () {
          return PDFNet.sendWithPromise('Obj.size', { o: this.id });
        };
        PDFNet.Obj.prototype.getDictIterator = function () {
          return PDFNet.sendWithPromise('Obj.getDictIterator', {
            o: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.DictIterator, id);
          });
        };
        PDFNet.Obj.prototype.isDict = function () {
          return PDFNet.sendWithPromise('Obj.isDict', { o: this.id });
        };
        PDFNet.Obj.prototype.find = function (key) {
          checkArguments(arguments.length, 1, 'find', '(string)', [
            [key, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.find', {
            o: this.id,
            key: key,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.DictIterator, id);
          });
        };
        PDFNet.Obj.prototype.findObj = function (key) {
          checkArguments(arguments.length, 1, 'findObj', '(string)', [
            [key, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.findObj', {
            o: this.id,
            key: key,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.get = function (key) {
          checkArguments(arguments.length, 1, 'get', '(string)', [
            [key, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.get', {
            o: this.id,
            key: key,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.DictIterator, id);
          });
        };
        PDFNet.Obj.prototype.putName = function (key, name) {
          checkArguments(arguments.length, 2, 'putName', '(string, string)', [
            [key, 'string'],
            [name, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.putName', {
            o: this.id,
            key: key,
            name: name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.putArray = function (key) {
          checkArguments(arguments.length, 1, 'putArray', '(string)', [
            [key, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.putArray', {
            o: this.id,
            key: key,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.putBool = function (key, value) {
          checkArguments(arguments.length, 2, 'putBool', '(string, boolean)', [
            [key, 'string'],
            [value, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Obj.putBool', {
            o: this.id,
            key: key,
            value: value,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.putDict = function (key) {
          checkArguments(arguments.length, 1, 'putDict', '(string)', [
            [key, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.putDict', {
            o: this.id,
            key: key,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.putNumber = function (key, value) {
          checkArguments(arguments.length, 2, 'putNumber', '(string, number)', [
            [key, 'string'],
            [value, 'number'],
          ]);
          return PDFNet.sendWithPromise('Obj.putNumber', {
            o: this.id,
            key: key,
            value: value,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.putString = function (key, value) {
          checkArguments(arguments.length, 2, 'putString', '(string, string)', [
            [key, 'string'],
            [value, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.putString', {
            o: this.id,
            key: key,
            value: value,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.putText = function (key, t) {
          checkArguments(arguments.length, 2, 'putText', '(string, string)', [
            [key, 'string'],
            [t, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.putText', {
            o: this.id,
            key: key,
            t: t,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.putNull = function (key) {
          checkArguments(arguments.length, 1, 'putNull', '(string)', [
            [key, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.putNull', {
            o: this.id,
            key: key,
          });
        };
        PDFNet.Obj.prototype.put = function (key, input_obj) {
          checkArguments(arguments.length, 2, 'put', '(string, PDFNet.Obj)', [
            [key, 'string'],
            [input_obj, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('Obj.put', {
            o: this.id,
            key: key,
            input_obj: input_obj.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.putRect = function (key, x1, y1, x2, y2) {
          checkArguments(
            arguments.length,
            5,
            'putRect',
            '(string, number, number, number, number)',
            [
              [key, 'string'],
              [x1, 'number'],
              [y1, 'number'],
              [x2, 'number'],
              [y2, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Obj.putRect', {
            o: this.id,
            key: key,
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.putMatrix = function (key, mtx) {
          checkArguments(
            arguments.length,
            2,
            'putMatrix',
            '(string, PDFNet.Matrix2D)',
            [
              [key, 'string'],
              [mtx, 'Structure', PDFNet.Matrix2D, 'Matrix2D'],
            ]
          );
          checkParamsYieldFunction('putMatrix', [[mtx, 1]]);
          return PDFNet.sendWithPromise('Obj.putMatrix', {
            o: this.id,
            key: key,
            mtx: mtx,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.eraseFromKey = function (key) {
          checkArguments(arguments.length, 1, 'eraseFromKey', '(string)', [
            [key, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.eraseFromKey', {
            o: this.id,
            key: key,
          });
        };
        PDFNet.Obj.prototype.erase = function (pos) {
          checkArguments(
            arguments.length,
            1,
            'erase',
            '(PDFNet.DictIterator)',
            [[pos, 'Object', PDFNet.DictIterator, 'DictIterator']]
          );
          return PDFNet.sendWithPromise('Obj.erase', {
            o: this.id,
            pos: pos.id,
          });
        };
        PDFNet.Obj.prototype.rename = function (old_key, new_key) {
          checkArguments(arguments.length, 2, 'rename', '(string, string)', [
            [old_key, 'string'],
            [new_key, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.rename', {
            o: this.id,
            old_key: old_key,
            new_key: new_key,
          });
        };
        PDFNet.Obj.prototype.isArray = function () {
          return PDFNet.sendWithPromise('Obj.isArray', { o: this.id });
        };
        PDFNet.Obj.prototype.getAt = function (index) {
          checkArguments(arguments.length, 1, 'getAt', '(number)', [
            [index, 'number'],
          ]);
          return PDFNet.sendWithPromise('Obj.getAt', {
            o: this.id,
            index: index,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.insertName = function (pos, name) {
          checkArguments(
            arguments.length,
            2,
            'insertName',
            '(number, string)',
            [
              [pos, 'number'],
              [name, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('Obj.insertName', {
            o: this.id,
            pos: pos,
            name: name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.insertArray = function (pos) {
          checkArguments(arguments.length, 1, 'insertArray', '(number)', [
            [pos, 'number'],
          ]);
          return PDFNet.sendWithPromise('Obj.insertArray', {
            o: this.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.insertBool = function (pos, value) {
          checkArguments(
            arguments.length,
            2,
            'insertBool',
            '(number, boolean)',
            [
              [pos, 'number'],
              [value, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('Obj.insertBool', {
            o: this.id,
            pos: pos,
            value: value,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.insertDict = function (pos) {
          checkArguments(arguments.length, 1, 'insertDict', '(number)', [
            [pos, 'number'],
          ]);
          return PDFNet.sendWithPromise('Obj.insertDict', {
            o: this.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.insertNumber = function (pos, value) {
          checkArguments(
            arguments.length,
            2,
            'insertNumber',
            '(number, number)',
            [
              [pos, 'number'],
              [value, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Obj.insertNumber', {
            o: this.id,
            pos: pos,
            value: value,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.insertString = function (pos, value) {
          checkArguments(
            arguments.length,
            2,
            'insertString',
            '(number, string)',
            [
              [pos, 'number'],
              [value, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('Obj.insertString', {
            o: this.id,
            pos: pos,
            value: value,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.insertText = function (pos, t) {
          checkArguments(
            arguments.length,
            2,
            'insertText',
            '(number, string)',
            [
              [pos, 'number'],
              [t, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('Obj.insertText', {
            o: this.id,
            pos: pos,
            t: t,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.insertNull = function (pos) {
          checkArguments(arguments.length, 1, 'insertNull', '(number)', [
            [pos, 'number'],
          ]);
          return PDFNet.sendWithPromise('Obj.insertNull', {
            o: this.id,
            pos: pos,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.insert = function (pos, input_obj) {
          checkArguments(
            arguments.length,
            2,
            'insert',
            '(number, PDFNet.Obj)',
            [
              [pos, 'number'],
              [input_obj, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          return PDFNet.sendWithPromise('Obj.insert', {
            o: this.id,
            pos: pos,
            input_obj: input_obj.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.insertRect = function (pos, x1, y1, x2, y2) {
          checkArguments(
            arguments.length,
            5,
            'insertRect',
            '(number, number, number, number, number)',
            [
              [pos, 'number'],
              [x1, 'number'],
              [y1, 'number'],
              [x2, 'number'],
              [y2, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Obj.insertRect', {
            o: this.id,
            pos: pos,
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.insertMatrix = function (pos, mtx) {
          checkArguments(
            arguments.length,
            2,
            'insertMatrix',
            '(number, PDFNet.Matrix2D)',
            [
              [pos, 'number'],
              [mtx, 'Structure', PDFNet.Matrix2D, 'Matrix2D'],
            ]
          );
          checkParamsYieldFunction('insertMatrix', [[mtx, 1]]);
          return PDFNet.sendWithPromise('Obj.insertMatrix', {
            o: this.id,
            pos: pos,
            mtx: mtx,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.pushBackName = function (name) {
          checkArguments(arguments.length, 1, 'pushBackName', '(string)', [
            [name, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.pushBackName', {
            o: this.id,
            name: name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.pushBackArray = function () {
          return PDFNet.sendWithPromise('Obj.pushBackArray', {
            o: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.pushBackBool = function (value) {
          checkArguments(arguments.length, 1, 'pushBackBool', '(boolean)', [
            [value, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Obj.pushBackBool', {
            o: this.id,
            value: value,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.pushBackDict = function () {
          return PDFNet.sendWithPromise('Obj.pushBackDict', {
            o: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.pushBackNumber = function (value) {
          checkArguments(arguments.length, 1, 'pushBackNumber', '(number)', [
            [value, 'number'],
          ]);
          return PDFNet.sendWithPromise('Obj.pushBackNumber', {
            o: this.id,
            value: value,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.pushBackString = function (value) {
          checkArguments(arguments.length, 1, 'pushBackString', '(string)', [
            [value, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.pushBackString', {
            o: this.id,
            value: value,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.pushBackText = function (t) {
          checkArguments(arguments.length, 1, 'pushBackText', '(string)', [
            [t, 'string'],
          ]);
          return PDFNet.sendWithPromise('Obj.pushBackText', {
            o: this.id,
            t: t,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.pushBackNull = function () {
          return PDFNet.sendWithPromise('Obj.pushBackNull', {
            o: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.pushBack = function (input_obj) {
          checkArguments(arguments.length, 1, 'pushBack', '(PDFNet.Obj)', [
            [input_obj, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('Obj.pushBack', {
            o: this.id,
            input_obj: input_obj.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.pushBackRect = function (x1, y1, x2, y2) {
          checkArguments(
            arguments.length,
            4,
            'pushBackRect',
            '(number, number, number, number)',
            [
              [x1, 'number'],
              [y1, 'number'],
              [x2, 'number'],
              [y2, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Obj.pushBackRect', {
            o: this.id,
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.pushBackMatrix = function (mtx) {
          checkArguments(
            arguments.length,
            1,
            'pushBackMatrix',
            '(PDFNet.Matrix2D)',
            [[mtx, 'Structure', PDFNet.Matrix2D, 'Matrix2D']]
          );
          checkParamsYieldFunction('pushBackMatrix', [[mtx, 0]]);
          return PDFNet.sendWithPromise('Obj.pushBackMatrix', {
            o: this.id,
            mtx: mtx,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.Obj.prototype.eraseAt = function (pos) {
          checkArguments(arguments.length, 1, 'eraseAt', '(number)', [
            [pos, 'number'],
          ]);
          return PDFNet.sendWithPromise('Obj.eraseAt', {
            o: this.id,
            pos: pos,
          });
        };
        PDFNet.Obj.prototype.isStream = function () {
          return PDFNet.sendWithPromise('Obj.isStream', { o: this.id });
        };
        PDFNet.Obj.prototype.getRawStreamLength = function () {
          return PDFNet.sendWithPromise('Obj.getRawStreamLength', {
            o: this.id,
          });
        };
        PDFNet.Obj.prototype.setStreamData = function (data_buf) {
          checkArguments(
            arguments.length,
            1,
            'setStreamData',
            '(ArrayBuffer|TypedArray)',
            [[data_buf, 'ArrayBuffer']]
          );
          var data_bufArrayBuffer = getArrayBuffer(data_buf, !1);
          return PDFNet.sendWithPromise('Obj.setStreamData', {
            obj: this.id,
            data_buf: data_bufArrayBuffer,
          });
        };
        PDFNet.Obj.prototype.setStreamDataWithFilter = function (
          data_buf,
          filter_chain
        ) {
          checkArguments(
            arguments.length,
            2,
            'setStreamDataWithFilter',
            '(ArrayBuffer|TypedArray, PDFNet.Filter)',
            [
              [data_buf, 'ArrayBuffer'],
              [filter_chain, 'Object', PDFNet.Filter, 'Filter'],
            ]
          );
          var data_bufArrayBuffer = getArrayBuffer(data_buf, !1);
          0 != filter_chain.id && avoidCleanup(filter_chain.id);
          return PDFNet.sendWithPromise('Obj.setStreamDataWithFilter', {
            obj: this.id,
            data_buf: data_bufArrayBuffer,
            no_own_filter_chain: filter_chain.id,
          });
        };
        PDFNet.Obj.prototype.getRawStream = function (decrypt) {
          checkArguments(arguments.length, 1, 'getRawStream', '(boolean)', [
            [decrypt, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Obj.getRawStream', {
            o: this.id,
            decrypt: decrypt,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Filter, id);
          });
        };
        PDFNet.Obj.prototype.getDecodedStream = function () {
          return PDFNet.sendWithPromise('Obj.getDecodedStream', {
            o: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Filter, id);
          });
        };
        PDFNet.ObjSet.create = function () {
          return PDFNet.sendWithPromise('objSetCreate', {}).then(function (id) {
            return createDestroyableObj(PDFNet.ObjSet, id);
          });
        };
        PDFNet.ObjSet.prototype.createName = function (name) {
          checkArguments(arguments.length, 1, 'createName', '(string)', [
            [name, 'string'],
          ]);
          return PDFNet.sendWithPromise('ObjSet.createName', {
            set: this.id,
            name: name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ObjSet.prototype.createArray = function () {
          return PDFNet.sendWithPromise('ObjSet.createArray', {
            set: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ObjSet.prototype.createBool = function (value) {
          checkArguments(arguments.length, 1, 'createBool', '(boolean)', [
            [value, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('ObjSet.createBool', {
            set: this.id,
            value: value,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ObjSet.prototype.createDict = function () {
          return PDFNet.sendWithPromise('ObjSet.createDict', {
            set: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ObjSet.prototype.createNull = function () {
          return PDFNet.sendWithPromise('ObjSet.createNull', {
            set: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ObjSet.prototype.createNumber = function (value) {
          checkArguments(arguments.length, 1, 'createNumber', '(number)', [
            [value, 'number'],
          ]);
          return PDFNet.sendWithPromise('ObjSet.createNumber', {
            set: this.id,
            value: value,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ObjSet.prototype.createString = function (value) {
          checkArguments(arguments.length, 1, 'createString', '(string)', [
            [value, 'string'],
          ]);
          return PDFNet.sendWithPromise('ObjSet.createString', {
            set: this.id,
            value: value,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.ObjSet.prototype.createFromJson = function (json) {
          checkArguments(arguments.length, 1, 'createFromJson', '(string)', [
            [json, 'string'],
          ]);
          return PDFNet.sendWithPromise('ObjSet.createFromJson', {
            set: this.id,
            json: json,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SDFDoc.prototype.createShallowCopy = function () {
          return PDFNet.sendWithPromise('SDFDoc.createShallowCopy', {
            source: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SDFDoc, id);
          });
        };
        PDFNet.SDFDoc.prototype.releaseFileHandles = function () {
          return PDFNet.sendWithPromise('SDFDoc.releaseFileHandles', {
            doc: this.id,
          });
        };
        PDFNet.SDFDoc.prototype.isEncrypted = function () {
          return PDFNet.sendWithPromise('SDFDoc.isEncrypted', { doc: this.id });
        };
        PDFNet.SDFDoc.prototype.initStdSecurityHandlerUString = function (
          password
        ) {
          checkArguments(
            arguments.length,
            1,
            'initStdSecurityHandlerUString',
            '(string)',
            [[password, 'string']]
          );
          return PDFNet.sendWithPromise(
            'SDFDoc.initStdSecurityHandlerUString',
            { doc: this.id, password: password }
          );
        };
        PDFNet.SDFDoc.prototype.isModified = function () {
          return PDFNet.sendWithPromise('SDFDoc.isModified', { doc: this.id });
        };
        PDFNet.SDFDoc.prototype.hasRepairedXRef = function () {
          return PDFNet.sendWithPromise('SDFDoc.hasRepairedXRef', {
            doc: this.id,
          });
        };
        PDFNet.SDFDoc.prototype.isFullSaveRequired = function () {
          return PDFNet.sendWithPromise('SDFDoc.isFullSaveRequired', {
            doc: this.id,
          });
        };
        PDFNet.SDFDoc.prototype.getTrailer = function () {
          return PDFNet.sendWithPromise('SDFDoc.getTrailer', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SDFDoc.prototype.getObj = function (obj_num) {
          checkArguments(arguments.length, 1, 'getObj', '(number)', [
            [obj_num, 'number'],
          ]);
          return PDFNet.sendWithPromise('SDFDoc.getObj', {
            doc: this.id,
            obj_num: obj_num,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SDFDoc.prototype.importObj = function (obj, deep_copy) {
          checkArguments(
            arguments.length,
            2,
            'importObj',
            '(PDFNet.Obj, boolean)',
            [
              [obj, 'Object', PDFNet.Obj, 'Obj'],
              [deep_copy, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('SDFDoc.importObj', {
            doc: this.id,
            obj: obj.id,
            deep_copy: deep_copy,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SDFDoc.prototype.importObjsWithExcludeList = function (
          obj_list,
          exclude_list
        ) {
          checkArguments(
            arguments.length,
            2,
            'importObjsWithExcludeList',
            '(Array<Core.PDFNet.Obj>, Array<Core.PDFNet.Obj>)',
            [
              [obj_list, 'Array'],
              [exclude_list, 'Array'],
            ]
          );
          obj_list = Array.from(obj_list, function (x) {
            return x.id;
          });
          exclude_list = Array.from(exclude_list, function (x) {
            return x.id;
          });
          return PDFNet.sendWithPromise('SDFDoc.importObjsWithExcludeList', {
            doc: this.id,
            obj_list: obj_list,
            exclude_list: exclude_list,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SDFDoc.prototype.xRefSize = function () {
          return PDFNet.sendWithPromise('SDFDoc.xRefSize', { doc: this.id });
        };
        PDFNet.SDFDoc.prototype.clearMarks = function () {
          return PDFNet.sendWithPromise('SDFDoc.clearMarks', { doc: this.id });
        };
        PDFNet.SDFDoc.prototype.saveMemory = function (flags, header) {
          checkArguments(
            arguments.length,
            2,
            'saveMemory',
            '(number, string)',
            [
              [flags, 'number'],
              [header, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('SDFDoc.saveMemory', {
            doc: this.id,
            flags: flags,
            header: header,
          }).then(function (id) {
            return new Uint8Array(id);
          });
        };
        PDFNet.SDFDoc.prototype.saveStream = function (stream, flags, header) {
          checkArguments(
            arguments.length,
            3,
            'saveStream',
            '(PDFNet.Filter, number, string)',
            [
              [stream, 'Object', PDFNet.Filter, 'Filter'],
              [flags, 'number'],
              [header, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('SDFDoc.saveStream', {
            doc: this.id,
            stream: stream.id,
            flags: flags,
            header: header,
          });
        };
        PDFNet.SDFDoc.prototype.getHeader = function () {
          return PDFNet.sendWithPromise('SDFDoc.getHeader', { doc: this.id });
        };
        PDFNet.SDFDoc.prototype.getSecurityHandler = function () {
          return PDFNet.sendWithPromise('SDFDoc.getSecurityHandler', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.SecurityHandler, id);
          });
        };
        PDFNet.SDFDoc.prototype.setSecurityHandler = function (handler) {
          checkArguments(
            arguments.length,
            1,
            'setSecurityHandler',
            '(PDFNet.SecurityHandler)',
            [[handler, 'Object', PDFNet.SecurityHandler, 'SecurityHandler']]
          );
          0 != handler.id && avoidCleanup(handler.id);
          return PDFNet.sendWithPromise('SDFDoc.setSecurityHandler', {
            doc: this.id,
            no_own_handler: handler.id,
          });
        };
        PDFNet.SDFDoc.prototype.removeSecurity = function () {
          return PDFNet.sendWithPromise('SDFDoc.removeSecurity', {
            doc: this.id,
          });
        };
        PDFNet.SDFDoc.prototype.swap = function (obj_num1, obj_num2) {
          checkArguments(arguments.length, 2, 'swap', '(number, number)', [
            [obj_num1, 'number'],
            [obj_num2, 'number'],
          ]);
          return PDFNet.sendWithPromise('SDFDoc.swap', {
            doc: this.id,
            obj_num1: obj_num1,
            obj_num2: obj_num2,
          });
        };
        PDFNet.SDFDoc.prototype.isLinearized = function () {
          return PDFNet.sendWithPromise('SDFDoc.isLinearized', {
            doc: this.id,
          });
        };
        PDFNet.SDFDoc.prototype.getLinearizationDict = function () {
          return PDFNet.sendWithPromise('SDFDoc.getLinearizationDict', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SDFDoc.prototype.getHintStream = function () {
          return PDFNet.sendWithPromise('SDFDoc.getHintStream', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SDFDoc.prototype.enableDiskCaching = function (use_cache_flag) {
          checkArguments(
            arguments.length,
            1,
            'enableDiskCaching',
            '(boolean)',
            [[use_cache_flag, 'boolean']]
          );
          return PDFNet.sendWithPromise('SDFDoc.enableDiskCaching', {
            doc: this.id,
            use_cache_flag: use_cache_flag,
          });
        };
        PDFNet.SDFDoc.prototype.lock = function () {
          var me = this;
          return PDFNet.sendWithPromise('SDFDoc.lock', { doc: this.id }).then(
            function () {
              lockedObjects.push({
                name: 'SDFDoc',
                id: me.id,
                unlocktype: 'unlock',
              });
            }
          );
        };
        PDFNet.SDFDoc.prototype.unlock = function () {
          var me = this;
          return PDFNet.sendWithPromise('SDFDoc.unlock', { doc: this.id }).then(
            function () {
              unregisterLockedObject(me);
            }
          );
        };
        PDFNet.SDFDoc.prototype.lockRead = function () {
          var me = this;
          return PDFNet.sendWithPromise('SDFDoc.lockRead', {
            doc: this.id,
          }).then(function () {
            lockedObjects.push({
              name: 'SDFDoc',
              id: me.id,
              unlocktype: 'unlockRead',
            });
          });
        };
        PDFNet.SDFDoc.prototype.unlockRead = function () {
          var me = this;
          return PDFNet.sendWithPromise('SDFDoc.unlockRead', {
            doc: this.id,
          }).then(function () {
            unregisterLockedObject(me);
          });
        };
        PDFNet.SDFDoc.prototype.tryLock = function () {
          var me = this;
          return PDFNet.sendWithPromise('SDFDoc.tryLock', {
            doc: this.id,
          }).then(function (success) {
            success &&
              lockedObjects.push({
                name: 'SDFDoc',
                id: me.id,
                unlocktype: 'unlock',
              });
          });
        };
        PDFNet.SDFDoc.prototype.tryLockRead = function () {
          var me = this;
          return PDFNet.sendWithPromise('SDFDoc.tryLockRead', {
            doc: this.id,
          }).then(function (success) {
            success &&
              lockedObjects.push({
                name: 'SDFDoc',
                id: me.id,
                unlocktype: 'unlockRead',
              });
          });
        };
        PDFNet.SDFDoc.prototype.getFileName = function () {
          return PDFNet.sendWithPromise('SDFDoc.getFileName', { doc: this.id });
        };
        PDFNet.SDFDoc.prototype.createIndirectName = function (name) {
          checkArguments(
            arguments.length,
            1,
            'createIndirectName',
            '(string)',
            [[name, 'string']]
          );
          return PDFNet.sendWithPromise('SDFDoc.createIndirectName', {
            doc: this.id,
            name: name,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SDFDoc.prototype.createIndirectArray = function () {
          return PDFNet.sendWithPromise('SDFDoc.createIndirectArray', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SDFDoc.prototype.createIndirectBool = function (value) {
          checkArguments(
            arguments.length,
            1,
            'createIndirectBool',
            '(boolean)',
            [[value, 'boolean']]
          );
          return PDFNet.sendWithPromise('SDFDoc.createIndirectBool', {
            doc: this.id,
            value: value,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SDFDoc.prototype.createIndirectDict = function () {
          return PDFNet.sendWithPromise('SDFDoc.createIndirectDict', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SDFDoc.prototype.createIndirectNull = function () {
          return PDFNet.sendWithPromise('SDFDoc.createIndirectNull', {
            doc: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SDFDoc.prototype.createIndirectNumber = function (value) {
          checkArguments(
            arguments.length,
            1,
            'createIndirectNumber',
            '(number)',
            [[value, 'number']]
          );
          return PDFNet.sendWithPromise('SDFDoc.createIndirectNumber', {
            doc: this.id,
            value: value,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SDFDoc.prototype.createIndirectString = function (buf_value) {
          checkArguments(
            arguments.length,
            1,
            'createIndirectString',
            '(ArrayBuffer|TypedArray)',
            [[buf_value, 'ArrayBuffer']]
          );
          var buf_valueArrayBuffer = getArrayBuffer(buf_value, !1);
          return PDFNet.sendWithPromise('SDFDoc.createIndirectString', {
            doc: this.id,
            buf_value: buf_valueArrayBuffer,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SDFDoc.prototype.createIndirectStringFromUString = function (
          str
        ) {
          checkArguments(
            arguments.length,
            1,
            'createIndirectStringFromUString',
            '(string)',
            [[str, 'string']]
          );
          return PDFNet.sendWithPromise(
            'SDFDoc.createIndirectStringFromUString',
            { doc: this.id, str: str }
          ).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SDFDoc.prototype.createIndirectStreamFromFilter = function (
          data,
          filter_chain
        ) {
          'undefined' === typeof filter_chain &&
            (filter_chain = new PDFNet.Filter('0'));
          checkArguments(
            arguments.length,
            1,
            'createIndirectStreamFromFilter',
            '(PDFNet.FilterReader, PDFNet.Filter)',
            [
              [data, 'Object', PDFNet.FilterReader, 'FilterReader'],
              [filter_chain, 'Object', PDFNet.Filter, 'Filter'],
            ]
          );
          0 != filter_chain.id && avoidCleanup(filter_chain.id);
          return PDFNet.sendWithPromise(
            'SDFDoc.createIndirectStreamFromFilter',
            {
              doc: this.id,
              data: data.id,
              no_own_filter_chain: filter_chain.id,
            }
          ).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SDFDoc.prototype.createIndirectStream = function (
          data_buf,
          filter_chain
        ) {
          checkArguments(
            arguments.length,
            2,
            'createIndirectStream',
            '(ArrayBuffer|TypedArray, PDFNet.Filter)',
            [
              [data_buf, 'ArrayBuffer'],
              [filter_chain, 'Object', PDFNet.Filter, 'Filter'],
            ]
          );
          var data_bufArrayBuffer = getArrayBuffer(data_buf, !1);
          0 != filter_chain.id && avoidCleanup(filter_chain.id);
          return PDFNet.sendWithPromise('SDFDoc.createIndirectStream', {
            doc: this.id,
            data_buf: data_bufArrayBuffer,
            no_own_filter_chain: filter_chain.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Obj, id);
          });
        };
        PDFNet.SecurityHandler.prototype.getPermission = function (p) {
          checkArguments(arguments.length, 1, 'getPermission', '(number)', [
            [p, 'number'],
          ]);
          return PDFNet.sendWithPromise('SecurityHandler.getPermission', {
            sh: this.id,
            p: p,
          });
        };
        PDFNet.SecurityHandler.prototype.getKeyLength = function () {
          return PDFNet.sendWithPromise('SecurityHandler.getKeyLength', {
            sh: this.id,
          });
        };
        PDFNet.SecurityHandler.prototype.getEncryptionAlgorithmID =
          function () {
            return PDFNet.sendWithPromise(
              'SecurityHandler.getEncryptionAlgorithmID',
              { sh: this.id }
            );
          };
        PDFNet.SecurityHandler.prototype.getHandlerDocName = function () {
          return PDFNet.sendWithPromise('SecurityHandler.getHandlerDocName', {
            sh: this.id,
          });
        };
        PDFNet.SecurityHandler.prototype.isModified = function () {
          return PDFNet.sendWithPromise('SecurityHandler.isModified', {
            sh: this.id,
          });
        };
        PDFNet.SecurityHandler.prototype.setModified = function (is_modified) {
          'undefined' === typeof is_modified && (is_modified = !0);
          checkArguments(arguments.length, 0, 'setModified', '(boolean)', [
            [is_modified, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('SecurityHandler.setModified', {
            sh: this.id,
            is_modified: is_modified,
          });
        };
        PDFNet.SecurityHandler.create = function (crypt_type) {
          checkArguments(arguments.length, 1, 'create', '(number)', [
            [crypt_type, 'number'],
          ]);
          return PDFNet.sendWithPromise('securityHandlerCreate', {
            crypt_type: crypt_type,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.SecurityHandler, id);
          });
        };
        PDFNet.SecurityHandler.createFromEncCode = function (
          name,
          key_len,
          enc_code
        ) {
          checkArguments(
            arguments.length,
            3,
            'createFromEncCode',
            '(string, number, number)',
            [
              [name, 'string'],
              [key_len, 'number'],
              [enc_code, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('securityHandlerCreateFromEncCode', {
            name: name,
            key_len: key_len,
            enc_code: enc_code,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.SecurityHandler, id);
          });
        };
        PDFNet.SecurityHandler.createDefault = function () {
          return PDFNet.sendWithPromise(
            'securityHandlerCreateDefault',
            {}
          ).then(function (id) {
            return createDestroyableObj(PDFNet.SecurityHandler, id);
          });
        };
        PDFNet.SecurityHandler.prototype.setPermission = function (
          perm,
          value
        ) {
          checkArguments(
            arguments.length,
            2,
            'setPermission',
            '(number, boolean)',
            [
              [perm, 'number'],
              [value, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('SecurityHandler.setPermission', {
            sh: this.id,
            perm: perm,
            value: value,
          });
        };
        PDFNet.SecurityHandler.prototype.changeRevisionNumber = function (
          rev_num
        ) {
          checkArguments(
            arguments.length,
            1,
            'changeRevisionNumber',
            '(number)',
            [[rev_num, 'number']]
          );
          return PDFNet.sendWithPromise(
            'SecurityHandler.changeRevisionNumber',
            { sh: this.id, rev_num: rev_num }
          );
        };
        PDFNet.SecurityHandler.prototype.setEncryptMetadata = function (
          encrypt_metadata
        ) {
          checkArguments(
            arguments.length,
            1,
            'setEncryptMetadata',
            '(boolean)',
            [[encrypt_metadata, 'boolean']]
          );
          return PDFNet.sendWithPromise('SecurityHandler.setEncryptMetadata', {
            sh: this.id,
            encrypt_metadata: encrypt_metadata,
          });
        };
        PDFNet.SecurityHandler.prototype.getRevisionNumber = function () {
          return PDFNet.sendWithPromise('SecurityHandler.getRevisionNumber', {
            sh: this.id,
          });
        };
        PDFNet.SecurityHandler.prototype.isUserPasswordRequired = function () {
          return PDFNet.sendWithPromise(
            'SecurityHandler.isUserPasswordRequired',
            { sh: this.id }
          );
        };
        PDFNet.SecurityHandler.prototype.isMasterPasswordRequired =
          function () {
            return PDFNet.sendWithPromise(
              'SecurityHandler.isMasterPasswordRequired',
              { sh: this.id }
            );
          };
        PDFNet.SecurityHandler.prototype.isAES = function () {
          return PDFNet.sendWithPromise('SecurityHandler.isAES', {
            sh: this.id,
          });
        };
        PDFNet.SecurityHandler.prototype.isAESObj = function (stream) {
          checkArguments(arguments.length, 1, 'isAESObj', '(PDFNet.Obj)', [
            [stream, 'Object', PDFNet.Obj, 'Obj'],
          ]);
          return PDFNet.sendWithPromise('SecurityHandler.isAESObj', {
            sh: this.id,
            stream: stream.id,
          });
        };
        PDFNet.SecurityHandler.prototype.isRC4 = function () {
          return PDFNet.sendWithPromise('SecurityHandler.isRC4', {
            sh: this.id,
          });
        };
        PDFNet.SecurityHandler.prototype.changeUserPasswordUString = function (
          password
        ) {
          checkArguments(
            arguments.length,
            1,
            'changeUserPasswordUString',
            '(string)',
            [[password, 'string']]
          );
          return PDFNet.sendWithPromise(
            'SecurityHandler.changeUserPasswordUString',
            { sh: this.id, password: password }
          );
        };
        PDFNet.SecurityHandler.prototype.changeUserPasswordBuffer = function (
          password_buf
        ) {
          checkArguments(
            arguments.length,
            1,
            'changeUserPasswordBuffer',
            '(ArrayBuffer|TypedArray)',
            [[password_buf, 'ArrayBuffer']]
          );
          var password_bufArrayBuffer = getArrayBuffer(password_buf, !1);
          return PDFNet.sendWithPromise(
            'SecurityHandler.changeUserPasswordBuffer',
            { sh: this.id, password_buf: password_bufArrayBuffer }
          );
        };
        PDFNet.SecurityHandler.prototype.changeMasterPasswordUString =
          function (password) {
            checkArguments(
              arguments.length,
              1,
              'changeMasterPasswordUString',
              '(string)',
              [[password, 'string']]
            );
            return PDFNet.sendWithPromise(
              'SecurityHandler.changeMasterPasswordUString',
              { sh: this.id, password: password }
            );
          };
        PDFNet.SecurityHandler.prototype.changeMasterPasswordBuffer = function (
          password_buf
        ) {
          checkArguments(
            arguments.length,
            1,
            'changeMasterPasswordBuffer',
            '(ArrayBuffer|TypedArray)',
            [[password_buf, 'ArrayBuffer']]
          );
          var password_bufArrayBuffer = getArrayBuffer(password_buf, !1);
          return PDFNet.sendWithPromise(
            'SecurityHandler.changeMasterPasswordBuffer',
            { sh: this.id, password_buf: password_bufArrayBuffer }
          );
        };
        PDFNet.SecurityHandler.prototype.initPasswordUString = function (
          password
        ) {
          checkArguments(
            arguments.length,
            1,
            'initPasswordUString',
            '(string)',
            [[password, 'string']]
          );
          return PDFNet.sendWithPromise('SecurityHandler.initPasswordUString', {
            sh: this.id,
            password: password,
          });
        };
        PDFNet.SecurityHandler.prototype.initPasswordBuffer = function (
          password_buf
        ) {
          checkArguments(
            arguments.length,
            1,
            'initPasswordBuffer',
            '(ArrayBuffer|TypedArray)',
            [[password_buf, 'ArrayBuffer']]
          );
          var password_bufArrayBuffer = getArrayBuffer(password_buf, !1);
          return PDFNet.sendWithPromise('SecurityHandler.initPasswordBuffer', {
            sh: this.id,
            password_buf: password_bufArrayBuffer,
          });
        };
        PDFNet.SignatureHandler.prototype.getName = function () {
          return PDFNet.sendWithPromise('SignatureHandler.getName', {
            signature_handler: this.id,
          });
        };
        PDFNet.SignatureHandler.prototype.reset = function () {
          return PDFNet.sendWithPromise('SignatureHandler.reset', {
            signature_handler: this.id,
          });
        };
        PDFNet.SignatureHandler.prototype.destructor = function () {
          return PDFNet.sendWithPromise('SignatureHandler.destructor', {
            signature_handler: this.id,
          });
        };
        PDFNet.UndoManager.prototype.discardAllSnapshots = function () {
          return PDFNet.sendWithPromise('UndoManager.discardAllSnapshots', {
            self: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.DocSnapshot, id);
          });
        };
        PDFNet.UndoManager.prototype.undo = function () {
          return PDFNet.sendWithPromise('UndoManager.undo', {
            self: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ResultSnapshot, id);
          });
        };
        PDFNet.UndoManager.prototype.canUndo = function () {
          return PDFNet.sendWithPromise('UndoManager.canUndo', {
            self: this.id,
          });
        };
        PDFNet.UndoManager.prototype.getNextUndoSnapshot = function () {
          return PDFNet.sendWithPromise('UndoManager.getNextUndoSnapshot', {
            self: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.DocSnapshot, id);
          });
        };
        PDFNet.UndoManager.prototype.redo = function () {
          return PDFNet.sendWithPromise('UndoManager.redo', {
            self: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ResultSnapshot, id);
          });
        };
        PDFNet.UndoManager.prototype.canRedo = function () {
          return PDFNet.sendWithPromise('UndoManager.canRedo', {
            self: this.id,
          });
        };
        PDFNet.UndoManager.prototype.getNextRedoSnapshot = function () {
          return PDFNet.sendWithPromise('UndoManager.getNextRedoSnapshot', {
            self: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.DocSnapshot, id);
          });
        };
        PDFNet.UndoManager.prototype.takeSnapshot = function () {
          return PDFNet.sendWithPromise('UndoManager.takeSnapshot', {
            self: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ResultSnapshot, id);
          });
        };
        PDFNet.ResultSnapshot.prototype.currentState = function () {
          return PDFNet.sendWithPromise('ResultSnapshot.currentState', {
            self: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.DocSnapshot, id);
          });
        };
        PDFNet.ResultSnapshot.prototype.previousState = function () {
          return PDFNet.sendWithPromise('ResultSnapshot.previousState', {
            self: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.DocSnapshot, id);
          });
        };
        PDFNet.ResultSnapshot.prototype.isOk = function () {
          return PDFNet.sendWithPromise('ResultSnapshot.isOk', {
            self: this.id,
          });
        };
        PDFNet.ResultSnapshot.prototype.isNullTransition = function () {
          return PDFNet.sendWithPromise('ResultSnapshot.isNullTransition', {
            self: this.id,
          });
        };
        PDFNet.DocSnapshot.prototype.getHash = function () {
          return PDFNet.sendWithPromise('DocSnapshot.getHash', {
            self: this.id,
          });
        };
        PDFNet.DocSnapshot.prototype.isValid = function () {
          return PDFNet.sendWithPromise('DocSnapshot.isValid', {
            self: this.id,
          });
        };
        PDFNet.DocSnapshot.prototype.equals = function (snapshot) {
          checkArguments(
            arguments.length,
            1,
            'equals',
            '(PDFNet.DocSnapshot)',
            [[snapshot, 'Object', PDFNet.DocSnapshot, 'DocSnapshot']]
          );
          return PDFNet.sendWithPromise('DocSnapshot.equals', {
            self: this.id,
            snapshot: snapshot.id,
          });
        };
        PDFNet.OCRModule.applyOCRJsonToPDF = function (dst, json) {
          checkArguments(
            arguments.length,
            2,
            'applyOCRJsonToPDF',
            '(PDFNet.PDFDoc, string)',
            [
              [dst, 'PDFDoc'],
              [json, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('ocrModuleApplyOCRJsonToPDF', {
            dst: dst.id,
            json: json,
          });
        };
        PDFNet.OCRModule.applyOCRXmlToPDF = function (dst, xml) {
          checkArguments(
            arguments.length,
            2,
            'applyOCRXmlToPDF',
            '(PDFNet.PDFDoc, string)',
            [
              [dst, 'PDFDoc'],
              [xml, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('ocrModuleApplyOCRXmlToPDF', {
            dst: dst.id,
            xml: xml,
          });
        };
        PDFNet.VerificationOptions.create = function (in_level) {
          checkArguments(arguments.length, 1, 'create', '(number)', [
            [in_level, 'number'],
          ]);
          return PDFNet.sendWithPromise('verificationOptionsCreate', {
            in_level: in_level,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.VerificationOptions, id);
          });
        };
        PDFNet.VerificationOptions.prototype.addTrustedCertificate = function (
          in_certificate_buf,
          in_trust_flags
        ) {
          'undefined' === typeof in_trust_flags &&
            (in_trust_flags =
              PDFNet.VerificationOptions.CertificateTrustFlag.e_default_trust);
          checkArguments(
            arguments.length,
            1,
            'addTrustedCertificate',
            '(ArrayBuffer|TypedArray, number)',
            [
              [in_certificate_buf, 'ArrayBuffer'],
              [in_trust_flags, 'number'],
            ]
          );
          var in_certificate_bufArrayBuffer = getArrayBuffer(
            in_certificate_buf,
            !1
          );
          return PDFNet.sendWithPromise(
            'VerificationOptions.addTrustedCertificate',
            {
              self: this.id,
              in_certificate_buf: in_certificate_bufArrayBuffer,
              in_trust_flags: in_trust_flags,
            }
          );
        };
        PDFNet.VerificationOptions.prototype.addTrustedCertificates = function (
          in_P7C_binary_DER_certificates_file_data
        ) {
          checkArguments(
            arguments.length,
            1,
            'addTrustedCertificates',
            '(ArrayBuffer|TypedArray)',
            [[in_P7C_binary_DER_certificates_file_data, 'ArrayBuffer']]
          );
          var in_P7C_binary_DER_certificates_file_dataArrayBuffer =
            getArrayBuffer(in_P7C_binary_DER_certificates_file_data, !1);
          return PDFNet.sendWithPromise(
            'VerificationOptions.addTrustedCertificates',
            {
              self: this.id,
              in_P7C_binary_DER_certificates_file_data_buf:
                in_P7C_binary_DER_certificates_file_dataArrayBuffer,
            }
          );
        };
        PDFNet.VerificationOptions.prototype.loadTrustList = function (
          in_fdf_cert_exchange_data
        ) {
          checkArguments(
            arguments.length,
            1,
            'loadTrustList',
            '(PDFNet.FDFDoc)',
            [[in_fdf_cert_exchange_data, 'FDFDoc']]
          );
          return PDFNet.sendWithPromise('VerificationOptions.loadTrustList', {
            self: this.id,
            in_fdf_cert_exchange_data: in_fdf_cert_exchange_data.id,
          });
        };
        PDFNet.VerificationOptions.prototype.enableModificationVerification =
          function (in_on_or_off) {
            checkArguments(
              arguments.length,
              1,
              'enableModificationVerification',
              '(boolean)',
              [[in_on_or_off, 'boolean']]
            );
            return PDFNet.sendWithPromise(
              'VerificationOptions.enableModificationVerification',
              { self: this.id, in_on_or_off: in_on_or_off }
            );
          };
        PDFNet.VerificationOptions.prototype.enableDigestVerification =
          function (in_on_or_off) {
            checkArguments(
              arguments.length,
              1,
              'enableDigestVerification',
              '(boolean)',
              [[in_on_or_off, 'boolean']]
            );
            return PDFNet.sendWithPromise(
              'VerificationOptions.enableDigestVerification',
              { self: this.id, in_on_or_off: in_on_or_off }
            );
          };
        PDFNet.VerificationOptions.prototype.enableTrustVerification =
          function (in_on_or_off) {
            checkArguments(
              arguments.length,
              1,
              'enableTrustVerification',
              '(boolean)',
              [[in_on_or_off, 'boolean']]
            );
            return PDFNet.sendWithPromise(
              'VerificationOptions.enableTrustVerification',
              { self: this.id, in_on_or_off: in_on_or_off }
            );
          };
        PDFNet.VerificationOptions.prototype.setRevocationProxyPrefix =
          function (in_str) {
            checkArguments(
              arguments.length,
              1,
              'setRevocationProxyPrefix',
              '(string)',
              [[in_str, 'string']]
            );
            return PDFNet.sendWithPromise(
              'VerificationOptions.setRevocationProxyPrefix',
              { self: this.id, in_str: in_str }
            );
          };
        PDFNet.VerificationOptions.prototype.setRevocationTimeout = function (
          in_revocation_timeout_milliseconds
        ) {
          checkArguments(
            arguments.length,
            1,
            'setRevocationTimeout',
            '(number)',
            [[in_revocation_timeout_milliseconds, 'number']]
          );
          return PDFNet.sendWithPromise(
            'VerificationOptions.setRevocationTimeout',
            {
              self: this.id,
              in_revocation_timeout_milliseconds:
                in_revocation_timeout_milliseconds,
            }
          );
        };
        PDFNet.VerificationOptions.prototype.enableOnlineCRLRevocationChecking =
          function (in_on_or_off) {
            checkArguments(
              arguments.length,
              1,
              'enableOnlineCRLRevocationChecking',
              '(boolean)',
              [[in_on_or_off, 'boolean']]
            );
            return PDFNet.sendWithPromise(
              'VerificationOptions.enableOnlineCRLRevocationChecking',
              { self: this.id, in_on_or_off: in_on_or_off }
            );
          };
        PDFNet.VerificationOptions.prototype.enableOnlineOCSPRevocationChecking =
          function (in_on_or_off) {
            checkArguments(
              arguments.length,
              1,
              'enableOnlineOCSPRevocationChecking',
              '(boolean)',
              [[in_on_or_off, 'boolean']]
            );
            return PDFNet.sendWithPromise(
              'VerificationOptions.enableOnlineOCSPRevocationChecking',
              { self: this.id, in_on_or_off: in_on_or_off }
            );
          };
        PDFNet.VerificationOptions.prototype.enableOnlineRevocationChecking =
          function (in_on_or_off) {
            checkArguments(
              arguments.length,
              1,
              'enableOnlineRevocationChecking',
              '(boolean)',
              [[in_on_or_off, 'boolean']]
            );
            return PDFNet.sendWithPromise(
              'VerificationOptions.enableOnlineRevocationChecking',
              { self: this.id, in_on_or_off: in_on_or_off }
            );
          };
        PDFNet.VerificationResult.prototype.getDigitalSignatureField =
          function () {
            return PDFNet.sendWithPromise(
              'VerificationResult.getDigitalSignatureField',
              { self: this.id }
            ).then(function (id) {
              return new PDFNet.DigitalSignatureField(id);
            });
          };
        PDFNet.VerificationResult.prototype.getVerificationStatus =
          function () {
            return PDFNet.sendWithPromise(
              'VerificationResult.getVerificationStatus',
              { self: this.id }
            );
          };
        PDFNet.VerificationResult.prototype.getDocumentStatus = function () {
          return PDFNet.sendWithPromise(
            'VerificationResult.getDocumentStatus',
            { self: this.id }
          );
        };
        PDFNet.VerificationResult.prototype.getDigestStatus = function () {
          return PDFNet.sendWithPromise('VerificationResult.getDigestStatus', {
            self: this.id,
          });
        };
        PDFNet.VerificationResult.prototype.getTrustStatus = function () {
          return PDFNet.sendWithPromise('VerificationResult.getTrustStatus', {
            self: this.id,
          });
        };
        PDFNet.VerificationResult.prototype.getPermissionsStatus = function () {
          return PDFNet.sendWithPromise(
            'VerificationResult.getPermissionsStatus',
            { self: this.id }
          );
        };
        PDFNet.VerificationResult.prototype.getTrustVerificationResult =
          function () {
            return PDFNet.sendWithPromise(
              'VerificationResult.getTrustVerificationResult',
              { self: this.id }
            ).then(function (id) {
              return createDestroyableObj(PDFNet.TrustVerificationResult, id);
            });
          };
        PDFNet.VerificationResult.prototype.hasTrustVerificationResult =
          function () {
            return PDFNet.sendWithPromise(
              'VerificationResult.hasTrustVerificationResult',
              { self: this.id }
            );
          };
        PDFNet.VerificationResult.prototype.getDisallowedChanges = function () {
          return PDFNet.sendWithPromise(
            'VerificationResult.getDisallowedChanges',
            { self: this.id }
          ).then(function (idArray) {
            for (var retArray = [], i = 0; i < idArray.length; ++i) {
              var id = idArray[i];
              if ('0' === id) return null;
              id = new PDFNet.DisallowedChange(id);
              retArray.push(id);
              createdObjects.push({ name: id.name, id: id.id });
            }
            return retArray;
          });
        };
        PDFNet.VerificationResult.prototype.getDigestAlgorithm = function () {
          return PDFNet.sendWithPromise(
            'VerificationResult.getDigestAlgorithm',
            { self: this.id }
          );
        };
        PDFNet.VerificationResult.prototype.getDocumentStatusAsString =
          function () {
            return PDFNet.sendWithPromise(
              'VerificationResult.getDocumentStatusAsString',
              { self: this.id }
            );
          };
        PDFNet.VerificationResult.prototype.getDigestStatusAsString =
          function () {
            return PDFNet.sendWithPromise(
              'VerificationResult.getDigestStatusAsString',
              { self: this.id }
            );
          };
        PDFNet.VerificationResult.prototype.getTrustStatusAsString =
          function () {
            return PDFNet.sendWithPromise(
              'VerificationResult.getTrustStatusAsString',
              { self: this.id }
            );
          };
        PDFNet.VerificationResult.prototype.getPermissionsStatusAsString =
          function () {
            return PDFNet.sendWithPromise(
              'VerificationResult.getPermissionsStatusAsString',
              { self: this.id }
            );
          };
        PDFNet.VerificationResult.prototype.getUnsupportedFeatures =
          function () {
            return PDFNet.sendWithPromise(
              'VerificationResult.getUnsupportedFeatures',
              { self: this.id }
            );
          };
        PDFNet.EmbeddedTimestampVerificationResult.prototype.getVerificationStatus =
          function () {
            return PDFNet.sendWithPromise(
              'EmbeddedTimestampVerificationResult.getVerificationStatus',
              { self: this.id }
            );
          };
        PDFNet.EmbeddedTimestampVerificationResult.prototype.getCMSDigestStatus =
          function () {
            return PDFNet.sendWithPromise(
              'EmbeddedTimestampVerificationResult.getCMSDigestStatus',
              { self: this.id }
            );
          };
        PDFNet.EmbeddedTimestampVerificationResult.prototype.getMessageImprintDigestStatus =
          function () {
            return PDFNet.sendWithPromise(
              'EmbeddedTimestampVerificationResult.getMessageImprintDigestStatus',
              { self: this.id }
            );
          };
        PDFNet.EmbeddedTimestampVerificationResult.prototype.getTrustStatus =
          function () {
            return PDFNet.sendWithPromise(
              'EmbeddedTimestampVerificationResult.getTrustStatus',
              { self: this.id }
            );
          };
        PDFNet.EmbeddedTimestampVerificationResult.prototype.getCMSDigestStatusAsString =
          function () {
            return PDFNet.sendWithPromise(
              'EmbeddedTimestampVerificationResult.getCMSDigestStatusAsString',
              { self: this.id }
            );
          };
        PDFNet.EmbeddedTimestampVerificationResult.prototype.getMessageImprintDigestStatusAsString =
          function () {
            return PDFNet.sendWithPromise(
              'EmbeddedTimestampVerificationResult.getMessageImprintDigestStatusAsString',
              { self: this.id }
            );
          };
        PDFNet.EmbeddedTimestampVerificationResult.prototype.getTrustStatusAsString =
          function () {
            return PDFNet.sendWithPromise(
              'EmbeddedTimestampVerificationResult.getTrustStatusAsString',
              { self: this.id }
            );
          };
        PDFNet.EmbeddedTimestampVerificationResult.prototype.hasTrustVerificationResult =
          function () {
            return PDFNet.sendWithPromise(
              'EmbeddedTimestampVerificationResult.hasTrustVerificationResult',
              { self: this.id }
            );
          };
        PDFNet.EmbeddedTimestampVerificationResult.prototype.getTrustVerificationResult =
          function () {
            return PDFNet.sendWithPromise(
              'EmbeddedTimestampVerificationResult.getTrustVerificationResult',
              { self: this.id }
            ).then(function (id) {
              return createDestroyableObj(PDFNet.TrustVerificationResult, id);
            });
          };
        PDFNet.EmbeddedTimestampVerificationResult.prototype.getCMSSignatureDigestAlgorithm =
          function () {
            return PDFNet.sendWithPromise(
              'EmbeddedTimestampVerificationResult.getCMSSignatureDigestAlgorithm',
              { self: this.id }
            );
          };
        PDFNet.EmbeddedTimestampVerificationResult.prototype.getMessageImprintDigestAlgorithm =
          function () {
            return PDFNet.sendWithPromise(
              'EmbeddedTimestampVerificationResult.getMessageImprintDigestAlgorithm',
              { self: this.id }
            );
          };
        PDFNet.EmbeddedTimestampVerificationResult.prototype.getUnsupportedFeatures =
          function () {
            return PDFNet.sendWithPromise(
              'EmbeddedTimestampVerificationResult.getUnsupportedFeatures',
              { self: this.id }
            );
          };
        PDFNet.TrustVerificationResult.prototype.wasSuccessful = function () {
          return PDFNet.sendWithPromise(
            'TrustVerificationResult.wasSuccessful',
            { self: this.id }
          );
        };
        PDFNet.TrustVerificationResult.prototype.getResultString = function () {
          return PDFNet.sendWithPromise(
            'TrustVerificationResult.getResultString',
            { self: this.id }
          );
        };
        PDFNet.TrustVerificationResult.prototype.getTimeOfTrustVerification =
          function () {
            return PDFNet.sendWithPromise(
              'TrustVerificationResult.getTimeOfTrustVerification',
              { self: this.id }
            );
          };
        PDFNet.TrustVerificationResult.prototype.getTimeOfTrustVerificationEnum =
          function () {
            return PDFNet.sendWithPromise(
              'TrustVerificationResult.getTimeOfTrustVerificationEnum',
              { self: this.id }
            );
          };
        PDFNet.TrustVerificationResult.prototype.hasEmbeddedTimestampVerificationResult =
          function () {
            return PDFNet.sendWithPromise(
              'TrustVerificationResult.hasEmbeddedTimestampVerificationResult',
              { self: this.id }
            );
          };
        PDFNet.TrustVerificationResult.prototype.getEmbeddedTimestampVerificationResult =
          function () {
            return PDFNet.sendWithPromise(
              'TrustVerificationResult.getEmbeddedTimestampVerificationResult',
              { self: this.id }
            ).then(function (id) {
              return createDestroyableObj(
                PDFNet.EmbeddedTimestampVerificationResult,
                id
              );
            });
          };
        PDFNet.TrustVerificationResult.prototype.getCertPath = function () {
          return PDFNet.sendWithPromise('TrustVerificationResult.getCertPath', {
            self: this.id,
          }).then(function (idArray) {
            for (var retArray = [], i = 0; i < idArray.length; ++i) {
              var id = idArray[i];
              if ('0' === id) return null;
              id = new PDFNet.X509Certificate(id);
              retArray.push(id);
              createdObjects.push({ name: id.name, id: id.id });
            }
            return retArray;
          });
        };
        PDFNet.DisallowedChange.prototype.getObjNum = function () {
          return PDFNet.sendWithPromise('DisallowedChange.getObjNum', {
            self: this.id,
          });
        };
        PDFNet.DisallowedChange.prototype.getType = function () {
          return PDFNet.sendWithPromise('DisallowedChange.getType', {
            self: this.id,
          });
        };
        PDFNet.DisallowedChange.prototype.getTypeAsString = function () {
          return PDFNet.sendWithPromise('DisallowedChange.getTypeAsString', {
            self: this.id,
          });
        };
        PDFNet.X509Extension.prototype.isCritical = function () {
          return PDFNet.sendWithPromise('X509Extension.isCritical', {
            self: this.id,
          });
        };
        PDFNet.X509Extension.prototype.getObjectIdentifier = function () {
          return PDFNet.sendWithPromise('X509Extension.getObjectIdentifier', {
            self: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ObjectIdentifier, id);
          });
        };
        PDFNet.X509Extension.prototype.toString = function () {
          return PDFNet.sendWithPromise('X509Extension.toString', {
            self: this.id,
          });
        };
        PDFNet.X509Extension.prototype.getData = function () {
          return PDFNet.sendWithPromise('X509Extension.getData', {
            self: this.id,
          }).then(function (id) {
            return new Uint8Array(id);
          });
        };
        PDFNet.X501AttributeTypeAndValue.prototype.getAttributeTypeOID =
          function () {
            return PDFNet.sendWithPromise(
              'X501AttributeTypeAndValue.getAttributeTypeOID',
              { self: this.id }
            ).then(function (id) {
              return createDestroyableObj(PDFNet.ObjectIdentifier, id);
            });
          };
        PDFNet.X501AttributeTypeAndValue.prototype.getStringValue =
          function () {
            return PDFNet.sendWithPromise(
              'X501AttributeTypeAndValue.getStringValue',
              { self: this.id }
            );
          };
        PDFNet.ByteRange.prototype.getStartOffset = function () {
          checkThisYieldFunction('getStartOffset', this.yieldFunction);
          return PDFNet.sendWithPromise('ByteRange.getStartOffset', {
            self: this,
          });
        };
        PDFNet.ByteRange.prototype.getEndOffset = function () {
          checkThisYieldFunction('getEndOffset', this.yieldFunction);
          return PDFNet.sendWithPromise('ByteRange.getEndOffset', {
            self: this,
          });
        };
        PDFNet.ByteRange.prototype.getSize = function () {
          checkThisYieldFunction('getSize', this.yieldFunction);
          return PDFNet.sendWithPromise('ByteRange.getSize', { self: this });
        };
        PDFNet.TimestampingResult.prototype.getStatus = function () {
          return PDFNet.sendWithPromise('TimestampingResult.getStatus', {
            self: this.id,
          });
        };
        PDFNet.TimestampingResult.prototype.getString = function () {
          return PDFNet.sendWithPromise('TimestampingResult.getString', {
            self: this.id,
          });
        };
        PDFNet.TimestampingResult.prototype.hasResponseVerificationResult =
          function () {
            return PDFNet.sendWithPromise(
              'TimestampingResult.hasResponseVerificationResult',
              { self: this.id }
            );
          };
        PDFNet.TimestampingResult.prototype.getResponseVerificationResult =
          function () {
            return PDFNet.sendWithPromise(
              'TimestampingResult.getResponseVerificationResult',
              { self: this.id }
            ).then(function (id) {
              return createDestroyableObj(
                PDFNet.EmbeddedTimestampVerificationResult,
                id
              );
            });
          };
        PDFNet.TimestampingResult.prototype.getData = function () {
          return PDFNet.sendWithPromise('TimestampingResult.getData', {
            self: this.id,
          }).then(function (id) {
            return new Uint8Array(id);
          });
        };
        PDFNet.ActionParameter.create = function (action) {
          checkArguments(arguments.length, 1, 'create', '(PDFNet.Action)', [
            [action, 'Object', PDFNet.Action, 'Action'],
          ]);
          return PDFNet.sendWithPromise('actionParameterCreate', {
            action: action.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ActionParameter, id);
          });
        };
        PDFNet.Action.prototype.parameterCreateWithField = function (field) {
          checkArguments(
            arguments.length,
            1,
            'parameterCreateWithField',
            '(PDFNet.Field)',
            [[field, 'Structure', PDFNet.Field, 'Field']]
          );
          checkParamsYieldFunction('parameterCreateWithField', [[field, 0]]);
          return PDFNet.sendWithPromise('Action.parameterCreateWithField', {
            action: this.id,
            field: field,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ActionParameter, id);
          });
        };
        PDFNet.Action.prototype.parameterCreateWithAnnot = function (annot) {
          checkArguments(
            arguments.length,
            1,
            'parameterCreateWithAnnot',
            '(PDFNet.Annot)',
            [[annot, 'Object', PDFNet.Annot, 'Annot']]
          );
          return PDFNet.sendWithPromise('Action.parameterCreateWithAnnot', {
            action: this.id,
            annot: annot.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ActionParameter, id);
          });
        };
        PDFNet.Action.prototype.parameterCreateWithPage = function (page) {
          checkArguments(
            arguments.length,
            1,
            'parameterCreateWithPage',
            '(PDFNet.Page)',
            [[page, 'Object', PDFNet.Page, 'Page']]
          );
          return PDFNet.sendWithPromise('Action.parameterCreateWithPage', {
            action: this.id,
            page: page.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.ActionParameter, id);
          });
        };
        PDFNet.ActionParameter.prototype.getAction = function () {
          return PDFNet.sendWithPromise('ActionParameter.getAction', {
            ap: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Action, id);
          });
        };
        PDFNet.ViewChangeCollection.create = function () {
          return PDFNet.sendWithPromise('viewChangeCollectionCreate', {}).then(
            function (id) {
              return createDestroyableObj(PDFNet.ViewChangeCollection, id);
            }
          );
        };
        PDFNet.RadioButtonGroup.createFromField = function (field) {
          checkArguments(
            arguments.length,
            1,
            'createFromField',
            '(PDFNet.Field)',
            [[field, 'Structure', PDFNet.Field, 'Field']]
          );
          checkParamsYieldFunction('createFromField', [[field, 0]]);
          return PDFNet.sendWithPromise('radioButtonGroupCreateFromField', {
            field: field,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.RadioButtonGroup, id);
          });
        };
        PDFNet.RadioButtonGroup.create = function (doc, field_name) {
          'undefined' === typeof field_name && (field_name = '');
          checkArguments(
            arguments.length,
            1,
            'create',
            '(PDFNet.PDFDoc, string)',
            [
              [doc, 'PDFDoc'],
              [field_name, 'string'],
            ]
          );
          return PDFNet.sendWithPromise('radioButtonGroupCreate', {
            doc: doc.id,
            field_name: field_name,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.RadioButtonGroup, id);
          });
        };
        PDFNet.RadioButtonGroup.prototype.copy = function () {
          return PDFNet.sendWithPromise('RadioButtonGroup.copy', {
            group: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.RadioButtonGroup, id);
          });
        };
        PDFNet.RadioButtonGroup.prototype.add = function (pos, onstate) {
          'undefined' === typeof onstate && (onstate = '');
          checkArguments(arguments.length, 1, 'add', '(PDFNet.Rect, string)', [
            [pos, 'Structure', PDFNet.Rect, 'Rect'],
            [onstate, 'const char* = 0'],
          ]);
          checkParamsYieldFunction('add', [[pos, 0]]);
          return PDFNet.sendWithPromise('RadioButtonGroup.add', {
            group: this.id,
            pos: pos,
            onstate: onstate,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.RadioButtonWidget, id);
          });
        };
        PDFNet.RadioButtonGroup.prototype.getNumButtons = function () {
          return PDFNet.sendWithPromise('RadioButtonGroup.getNumButtons', {
            group: this.id,
          });
        };
        PDFNet.RadioButtonGroup.prototype.getButton = function (index) {
          checkArguments(arguments.length, 1, 'getButton', '(number)', [
            [index, 'number'],
          ]);
          return PDFNet.sendWithPromise('RadioButtonGroup.getButton', {
            group: this.id,
            index: index,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.RadioButtonWidget, id);
          });
        };
        PDFNet.RadioButtonGroup.prototype.getField = function () {
          return PDFNet.sendWithPromise('RadioButtonGroup.getField', {
            group: this.id,
          }).then(function (id) {
            return new PDFNet.Field(id);
          });
        };
        PDFNet.RadioButtonGroup.prototype.addGroupButtonsToPage = function (
          page
        ) {
          checkArguments(
            arguments.length,
            1,
            'addGroupButtonsToPage',
            '(PDFNet.Page)',
            [[page, 'Object', PDFNet.Page, 'Page']]
          );
          return PDFNet.sendWithPromise(
            'RadioButtonGroup.addGroupButtonsToPage',
            { group: this.id, page: page.id }
          );
        };
        PDFNet.PDFTronCustomSecurityHandler.create = function (custom_id) {
          checkArguments(arguments.length, 1, 'create', '(number)', [
            [custom_id, 'number'],
          ]);
          return PDFNet.sendWithPromise('pdfTronCustomSecurityHandlerCreate', {
            custom_id: custom_id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.SecurityHandler, id);
          });
        };
        PDFNet.WebFontDownloader.isAvailable = function () {
          return PDFNet.sendWithPromise('webFontDownloaderIsAvailable', {});
        };
        PDFNet.WebFontDownloader.enableDownloads = function () {
          return PDFNet.sendWithPromise('webFontDownloaderEnableDownloads', {});
        };
        PDFNet.WebFontDownloader.disableDownloads = function () {
          return PDFNet.sendWithPromise(
            'webFontDownloaderDisableDownloads',
            {}
          );
        };
        PDFNet.WebFontDownloader.preCacheAsync = function () {
          return PDFNet.sendWithPromise('webFontDownloaderPreCacheAsync', {});
        };
        PDFNet.WebFontDownloader.clearCache = function () {
          return PDFNet.sendWithPromise('webFontDownloaderClearCache', {});
        };
        PDFNet.WebFontDownloader.setCustomWebFontURL = function (url) {
          checkArguments(
            arguments.length,
            1,
            'setCustomWebFontURL',
            '(string)',
            [[url, 'string']]
          );
          return PDFNet.sendWithPromise(
            'webFontDownloaderSetCustomWebFontURL',
            { url: url }
          );
        };
        PDFNet.FlowDocument.create = function () {
          return PDFNet.sendWithPromise('flowDocumentCreate', {}).then(
            function (id) {
              return createDestroyableObj(PDFNet.FlowDocument, id);
            }
          );
        };
        PDFNet.FlowDocument.prototype.setDefaultPageSize = function (
          width,
          height
        ) {
          checkArguments(
            arguments.length,
            2,
            'setDefaultPageSize',
            '(number, number)',
            [
              [width, 'number'],
              [height, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('FlowDocument.setDefaultPageSize', {
            self: this.id,
            width: width,
            height: height,
          });
        };
        PDFNet.FlowDocument.prototype.setDefaultMargins = function (
          left,
          top,
          right,
          bottom
        ) {
          checkArguments(
            arguments.length,
            4,
            'setDefaultMargins',
            '(number, number, number, number)',
            [
              [left, 'number'],
              [top, 'number'],
              [right, 'number'],
              [bottom, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('FlowDocument.setDefaultMargins', {
            self: this.id,
            left: left,
            top: top,
            right: right,
            bottom: bottom,
          });
        };
        PDFNet.FlowDocument.prototype.addParagraph = function () {
          return PDFNet.sendWithPromise('FlowDocument.addParagraph', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Paragraph, id);
          });
        };
        PDFNet.FlowDocument.prototype.addParagraphWithText = function (text) {
          checkArguments(
            arguments.length,
            1,
            'addParagraphWithText',
            '(string)',
            [[text, 'string']]
          );
          return PDFNet.sendWithPromise('FlowDocument.addParagraphWithText', {
            self: this.id,
            text: text,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Paragraph, id);
          });
        };
        PDFNet.FlowDocument.prototype.addList = function () {
          return PDFNet.sendWithPromise('FlowDocument.addList', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.List, id);
          });
        };
        PDFNet.FlowDocument.prototype.addTable = function () {
          return PDFNet.sendWithPromise('FlowDocument.addTable', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Table, id);
          });
        };
        PDFNet.FlowDocument.prototype.getBody = function () {
          return PDFNet.sendWithPromise('FlowDocument.getBody', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ContentNode, id);
          });
        };
        PDFNet.FlowDocument.prototype.paginateToPDF = function () {
          return PDFNet.sendWithPromise('FlowDocument.paginateToPDF', {
            self: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.PDFDoc, id);
          });
        };
        PDFNet.ContentElement.prototype.asTextRun = function () {
          return PDFNet.sendWithPromise('ContentElement.asTextRun', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TextRun, id);
          });
        };
        PDFNet.ContentElement.prototype.asContentNode = function () {
          return PDFNet.sendWithPromise('ContentElement.asContentNode', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ContentNode, id);
          });
        };
        PDFNet.ContentElement.prototype.asParagraph = function () {
          return PDFNet.sendWithPromise('ContentElement.asParagraph', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Paragraph, id);
          });
        };
        PDFNet.ContentElement.prototype.asTable = function () {
          return PDFNet.sendWithPromise('ContentElement.asTable', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Table, id);
          });
        };
        PDFNet.ContentElement.prototype.asTableRow = function () {
          return PDFNet.sendWithPromise('ContentElement.asTableRow', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TableRow, id);
          });
        };
        PDFNet.ContentElement.prototype.asTableCell = function () {
          return PDFNet.sendWithPromise('ContentElement.asTableCell', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TableCell, id);
          });
        };
        PDFNet.ContentElement.prototype.asList = function () {
          return PDFNet.sendWithPromise('ContentElement.asList', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.List, id);
          });
        };
        PDFNet.ContentElement.prototype.asListItem = function () {
          return PDFNet.sendWithPromise('ContentElement.asListItem', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ListItem, id);
          });
        };
        PDFNet.ContentElement.prototype.getTextStyledElement = function () {
          return PDFNet.sendWithPromise('ContentElement.getTextStyledElement', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TextStyledElement, id);
          });
        };
        PDFNet.ContentNode.prototype.getContentNodeIterator = function () {
          return PDFNet.sendWithPromise('ContentNode.getContentNodeIterator', {
            self: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Iterator, id, 'ContentElement');
          });
        };
        PDFNet.Paragraph.prototype.addText = function (text) {
          checkArguments(arguments.length, 1, 'addText', '(string)', [
            [text, 'string'],
          ]);
          return PDFNet.sendWithPromise('Paragraph.addText', {
            self: this.id,
            text: text,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TextRun, id);
          });
        };
        PDFNet.Paragraph.prototype.setSpaceBefore = function (val) {
          checkArguments(arguments.length, 1, 'setSpaceBefore', '(number)', [
            [val, 'number'],
          ]);
          return PDFNet.sendWithPromise('Paragraph.setSpaceBefore', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.Paragraph.prototype.getSpaceBefore = function () {
          return PDFNet.sendWithPromise('Paragraph.getSpaceBefore', {
            self: this.id,
          });
        };
        PDFNet.Paragraph.prototype.setSpaceAfter = function (val) {
          checkArguments(arguments.length, 1, 'setSpaceAfter', '(number)', [
            [val, 'number'],
          ]);
          return PDFNet.sendWithPromise('Paragraph.setSpaceAfter', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.Paragraph.prototype.getSpaceAfter = function () {
          return PDFNet.sendWithPromise('Paragraph.getSpaceAfter', {
            self: this.id,
          });
        };
        PDFNet.Paragraph.prototype.setJustificationMode = function (val) {
          checkArguments(
            arguments.length,
            1,
            'setJustificationMode',
            '(number)',
            [[val, 'number']]
          );
          return PDFNet.sendWithPromise('Paragraph.setJustificationMode', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.Paragraph.prototype.getJustificationMode = function () {
          return PDFNet.sendWithPromise('Paragraph.getJustificationMode', {
            self: this.id,
          });
        };
        PDFNet.Paragraph.prototype.setStartIndent = function (val) {
          checkArguments(arguments.length, 1, 'setStartIndent', '(number)', [
            [val, 'number'],
          ]);
          return PDFNet.sendWithPromise('Paragraph.setStartIndent', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.Paragraph.prototype.getStartIndent = function () {
          return PDFNet.sendWithPromise('Paragraph.getStartIndent', {
            self: this.id,
          });
        };
        PDFNet.Paragraph.prototype.setEndIndent = function (val) {
          checkArguments(arguments.length, 1, 'setEndIndent', '(number)', [
            [val, 'number'],
          ]);
          return PDFNet.sendWithPromise('Paragraph.setEndIndent', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.Paragraph.prototype.getEndIndent = function () {
          return PDFNet.sendWithPromise('Paragraph.getEndIndent', {
            self: this.id,
          });
        };
        PDFNet.Paragraph.prototype.setTextIndent = function (val) {
          checkArguments(arguments.length, 1, 'setTextIndent', '(number)', [
            [val, 'number'],
          ]);
          return PDFNet.sendWithPromise('Paragraph.setTextIndent', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.Paragraph.prototype.getTextIndent = function () {
          return PDFNet.sendWithPromise('Paragraph.getTextIndent', {
            self: this.id,
          });
        };
        PDFNet.Paragraph.prototype.setBorder = function (
          thickness,
          red,
          green,
          blue
        ) {
          checkArguments(
            arguments.length,
            4,
            'setBorder',
            '(number, number, number, number)',
            [
              [thickness, 'number'],
              [red, 'number'],
              [green, 'number'],
              [blue, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Paragraph.setBorder', {
            self: this.id,
            thickness: thickness,
            red: red,
            green: green,
            blue: blue,
          });
        };
        PDFNet.Paragraph.prototype.getBorderThickness = function () {
          return PDFNet.sendWithPromise('Paragraph.getBorderThickness', {
            self: this.id,
          });
        };
        PDFNet.Paragraph.prototype.addTabStop = function (val) {
          checkArguments(arguments.length, 1, 'addTabStop', '(number)', [
            [val, 'number'],
          ]);
          return PDFNet.sendWithPromise('Paragraph.addTabStop', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.Paragraph.prototype.getNextTabStop = function (val) {
          checkArguments(arguments.length, 1, 'getNextTabStop', '(number)', [
            [val, 'number'],
          ]);
          return PDFNet.sendWithPromise('Paragraph.getNextTabStop', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.Paragraph.prototype.setDefaultTabStop = function (val) {
          checkArguments(arguments.length, 1, 'setDefaultTabStop', '(number)', [
            [val, 'number'],
          ]);
          return PDFNet.sendWithPromise('Paragraph.setDefaultTabStop', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.Paragraph.prototype.getDefaultTabStop = function () {
          return PDFNet.sendWithPromise('Paragraph.getDefaultTabStop', {
            self: this.id,
          });
        };
        PDFNet.Paragraph.prototype.setSpacesPerTab = function (val) {
          checkArguments(arguments.length, 1, 'setSpacesPerTab', '(number)', [
            [val, 'number'],
          ]);
          return PDFNet.sendWithPromise('Paragraph.setSpacesPerTab', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.Paragraph.prototype.getSpacesPerTab = function () {
          return PDFNet.sendWithPromise('Paragraph.getSpacesPerTab', {
            self: this.id,
          });
        };
        PDFNet.Paragraph.prototype.setDisplayRtl = function (val) {
          checkArguments(arguments.length, 1, 'setDisplayRtl', '(boolean)', [
            [val, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('Paragraph.setDisplayRtl', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.Paragraph.prototype.isDisplayRtl = function () {
          return PDFNet.sendWithPromise('Paragraph.isDisplayRtl', {
            self: this.id,
          });
        };
        PDFNet.Table.prototype.addTableRow = function () {
          return PDFNet.sendWithPromise('Table.addTableRow', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TableRow, id);
          });
        };
        PDFNet.Table.prototype.getTableCell = function (column, row) {
          checkArguments(
            arguments.length,
            2,
            'getTableCell',
            '(number, number)',
            [
              [column, 'number'],
              [row, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Table.getTableCell', {
            self: this.id,
            column: column,
            row: row,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TableCell, id);
          });
        };
        PDFNet.Table.prototype.setDefaultColumnWidth = function (val) {
          checkArguments(
            arguments.length,
            1,
            'setDefaultColumnWidth',
            '(number)',
            [[val, 'number']]
          );
          return PDFNet.sendWithPromise('Table.setDefaultColumnWidth', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.Table.prototype.getDefaultRowHeight = function () {
          return PDFNet.sendWithPromise('Table.getDefaultRowHeight', {
            self: this.id,
          });
        };
        PDFNet.Table.prototype.setDefaultRowHeight = function (val) {
          checkArguments(
            arguments.length,
            1,
            'setDefaultRowHeight',
            '(number)',
            [[val, 'number']]
          );
          return PDFNet.sendWithPromise('Table.setDefaultRowHeight', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.Table.prototype.getNumRows = function () {
          return PDFNet.sendWithPromise('Table.getNumRows', { self: this.id });
        };
        PDFNet.Table.prototype.getNumColumns = function () {
          return PDFNet.sendWithPromise('Table.getNumColumns', {
            self: this.id,
          });
        };
        PDFNet.Table.prototype.setBorder = function (
          thickness,
          red,
          green,
          blue
        ) {
          checkArguments(
            arguments.length,
            4,
            'setBorder',
            '(number, number, number, number)',
            [
              [thickness, 'number'],
              [red, 'number'],
              [green, 'number'],
              [blue, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Table.setBorder', {
            self: this.id,
            thickness: thickness,
            red: red,
            green: green,
            blue: blue,
          });
        };
        PDFNet.Table.prototype.getBorderThickness = function () {
          return PDFNet.sendWithPromise('Table.getBorderThickness', {
            self: this.id,
          });
        };
        PDFNet.TableCell.prototype.addParagraph = function () {
          return PDFNet.sendWithPromise('TableCell.addParagraph', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Paragraph, id);
          });
        };
        PDFNet.TableCell.prototype.addParagraphWithText = function (text) {
          checkArguments(
            arguments.length,
            1,
            'addParagraphWithText',
            '(string)',
            [[text, 'string']]
          );
          return PDFNet.sendWithPromise('TableCell.addParagraphWithText', {
            self: this.id,
            text: text,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Paragraph, id);
          });
        };
        PDFNet.TableCell.prototype.addTable = function () {
          return PDFNet.sendWithPromise('TableCell.addTable', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Table, id);
          });
        };
        PDFNet.TableCell.prototype.mergeCellsRight = function (num) {
          checkArguments(arguments.length, 1, 'mergeCellsRight', '(number)', [
            [num, 'number'],
          ]);
          return PDFNet.sendWithPromise('TableCell.mergeCellsRight', {
            self: this.id,
            num: num,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TableCell, id);
          });
        };
        PDFNet.TableCell.prototype.mergeCellsDown = function (num) {
          checkArguments(arguments.length, 1, 'mergeCellsDown', '(number)', [
            [num, 'number'],
          ]);
          return PDFNet.sendWithPromise('TableCell.mergeCellsDown', {
            self: this.id,
            num: num,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TableCell, id);
          });
        };
        PDFNet.TableCell.prototype.setBackgroundColor = function (
          red,
          green,
          blue
        ) {
          checkArguments(
            arguments.length,
            3,
            'setBackgroundColor',
            '(number, number, number)',
            [
              [red, 'number'],
              [green, 'number'],
              [blue, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('TableCell.setBackgroundColor', {
            self: this.id,
            red: red,
            green: green,
            blue: blue,
          });
        };
        PDFNet.TableCell.prototype.setBorder = function (
          thickness,
          red,
          green,
          blue
        ) {
          checkArguments(
            arguments.length,
            4,
            'setBorder',
            '(number, number, number, number)',
            [
              [thickness, 'number'],
              [red, 'number'],
              [green, 'number'],
              [blue, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('TableCell.setBorder', {
            self: this.id,
            thickness: thickness,
            red: red,
            green: green,
            blue: blue,
          });
        };
        PDFNet.TableCell.prototype.getBorderThickness = function () {
          return PDFNet.sendWithPromise('TableCell.getBorderThickness', {
            self: this.id,
          });
        };
        PDFNet.TableCell.prototype.setVerticalAlignment = function (val) {
          checkArguments(
            arguments.length,
            1,
            'setVerticalAlignment',
            '(number)',
            [[val, 'number']]
          );
          return PDFNet.sendWithPromise('TableCell.setVerticalAlignment', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.TableCell.prototype.getVerticalAlignment = function () {
          return PDFNet.sendWithPromise('TableCell.getVerticalAlignment', {
            self: this.id,
          });
        };
        PDFNet.TableCell.prototype.setHorizontalAlignment = function (val) {
          checkArguments(
            arguments.length,
            1,
            'setHorizontalAlignment',
            '(number)',
            [[val, 'number']]
          );
          return PDFNet.sendWithPromise('TableCell.setHorizontalAlignment', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.TableCell.prototype.getHorizontalAlignment = function () {
          return PDFNet.sendWithPromise('TableCell.getHorizontalAlignment', {
            self: this.id,
          });
        };
        PDFNet.TableCell.prototype.setHeight = function (val) {
          checkArguments(arguments.length, 1, 'setHeight', '(number)', [
            [val, 'number'],
          ]);
          return PDFNet.sendWithPromise('TableCell.setHeight', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.TableCell.prototype.getHeight = function () {
          return PDFNet.sendWithPromise('TableCell.getHeight', {
            self: this.id,
          });
        };
        PDFNet.TableCell.prototype.setWidth = function (val) {
          checkArguments(arguments.length, 1, 'setWidth', '(number)', [
            [val, 'number'],
          ]);
          return PDFNet.sendWithPromise('TableCell.setWidth', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.TableCell.prototype.getWidth = function () {
          return PDFNet.sendWithPromise('TableCell.getWidth', {
            self: this.id,
          });
        };
        PDFNet.TableRow.prototype.addTableCell = function () {
          return PDFNet.sendWithPromise('TableRow.addTableCell', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TableCell, id);
          });
        };
        PDFNet.TableRow.prototype.setRowHeight = function (val) {
          checkArguments(arguments.length, 1, 'setRowHeight', '(number)', [
            [val, 'number'],
          ]);
          return PDFNet.sendWithPromise('TableRow.setRowHeight', {
            self: this.id,
            val: val,
          });
        };
        PDFNet.TableRow.prototype.getNumColumns = function () {
          return PDFNet.sendWithPromise('TableRow.getNumColumns', {
            self: this.id,
          });
        };
        PDFNet.TextRun.prototype.setText = function (text) {
          checkArguments(arguments.length, 1, 'setText', '(string)', [
            [text, 'string'],
          ]);
          return PDFNet.sendWithPromise('TextRun.setText', {
            self: this.id,
            text: text,
          });
        };
        PDFNet.TextRun.prototype.getText = function () {
          return PDFNet.sendWithPromise('TextRun.getText', { self: this.id });
        };
        PDFNet.TextStyledElement.prototype.setFontFace = function (font_name) {
          checkArguments(arguments.length, 1, 'setFontFace', '(string)', [
            [font_name, 'string'],
          ]);
          return PDFNet.sendWithPromise('TextStyledElement.setFontFace', {
            impl: this.id,
            font_name: font_name,
          });
        };
        PDFNet.TextStyledElement.prototype.getFontFace = function () {
          return PDFNet.sendWithPromise('TextStyledElement.getFontFace', {
            impl: this.id,
          });
        };
        PDFNet.TextStyledElement.prototype.setFontSize = function (font_size) {
          checkArguments(arguments.length, 1, 'setFontSize', '(number)', [
            [font_size, 'number'],
          ]);
          return PDFNet.sendWithPromise('TextStyledElement.setFontSize', {
            impl: this.id,
            font_size: font_size,
          });
        };
        PDFNet.TextStyledElement.prototype.getFontSize = function () {
          return PDFNet.sendWithPromise('TextStyledElement.getFontSize', {
            impl: this.id,
          });
        };
        PDFNet.TextStyledElement.prototype.setItalic = function (val) {
          checkArguments(arguments.length, 1, 'setItalic', '(boolean)', [
            [val, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('TextStyledElement.setItalic', {
            impl: this.id,
            val: val,
          });
        };
        PDFNet.TextStyledElement.prototype.isItalic = function () {
          return PDFNet.sendWithPromise('TextStyledElement.isItalic', {
            impl: this.id,
          });
        };
        PDFNet.TextStyledElement.prototype.setBold = function (val) {
          checkArguments(arguments.length, 1, 'setBold', '(boolean)', [
            [val, 'boolean'],
          ]);
          return PDFNet.sendWithPromise('TextStyledElement.setBold', {
            impl: this.id,
            val: val,
          });
        };
        PDFNet.TextStyledElement.prototype.isBold = function () {
          return PDFNet.sendWithPromise('TextStyledElement.isBold', {
            impl: this.id,
          });
        };
        PDFNet.TextStyledElement.prototype.setTextColor = function (
          red,
          green,
          blue
        ) {
          checkArguments(
            arguments.length,
            3,
            'setTextColor',
            '(number, number, number)',
            [
              [red, 'number'],
              [green, 'number'],
              [blue, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('TextStyledElement.setTextColor', {
            impl: this.id,
            red: red,
            green: green,
            blue: blue,
          });
        };
        PDFNet.TextStyledElement.prototype.setBackgroundColor = function (
          red,
          green,
          blue
        ) {
          checkArguments(
            arguments.length,
            3,
            'setBackgroundColor',
            '(number, number, number)',
            [
              [red, 'number'],
              [green, 'number'],
              [blue, 'number'],
            ]
          );
          return PDFNet.sendWithPromise(
            'TextStyledElement.setBackgroundColor',
            { impl: this.id, red: red, green: green, blue: blue }
          );
        };
        PDFNet.List.prototype.asContentElement = function () {
          return PDFNet.sendWithPromise('List.asContentElement', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ContentElement, id);
          });
        };
        PDFNet.List.prototype.setNumberFormat = function (
          format,
          suffix,
          cascade
        ) {
          checkArguments(
            arguments.length,
            3,
            'setNumberFormat',
            '(number, string, boolean)',
            [
              [format, 'number'],
              [suffix, 'string'],
              [cascade, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('List.setNumberFormat', {
            self: this.id,
            format: format,
            suffix: suffix,
            cascade: cascade,
          });
        };
        PDFNet.List.prototype.setStartIndex = function (idx) {
          checkArguments(arguments.length, 1, 'setStartIndex', '(number)', [
            [idx, 'number'],
          ]);
          return PDFNet.sendWithPromise('List.setStartIndex', {
            self: this.id,
            idx: idx,
          });
        };
        PDFNet.List.prototype.addItem = function () {
          return PDFNet.sendWithPromise('List.addItem', { self: this.id }).then(
            function (id) {
              return createPDFNetObj(PDFNet.ListItem, id);
            }
          );
        };
        PDFNet.List.prototype.getIndentationLevel = function () {
          return PDFNet.sendWithPromise('List.getIndentationLevel', {
            self: this.id,
          });
        };
        PDFNet.List.prototype.getListIdentifier = function () {
          return PDFNet.sendWithPromise('List.getListIdentifier', {
            self: this.id,
          });
        };
        PDFNet.List.prototype.continueList = function () {
          return PDFNet.sendWithPromise('List.continueList', { self: this.id });
        };
        PDFNet.List.prototype.getContentNodeIterator = function () {
          return PDFNet.sendWithPromise('List.getContentNodeIterator', {
            self: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Iterator, id, 'ContentElement');
          });
        };
        PDFNet.List.prototype.getTextStyledElement = function () {
          return PDFNet.sendWithPromise('List.getTextStyledElement', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TextStyledElement, id);
          });
        };
        PDFNet.ListItem.prototype.asContentElement = function () {
          return PDFNet.sendWithPromise('ListItem.asContentElement', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.ContentElement, id);
          });
        };
        PDFNet.ListItem.prototype.addParagraph = function () {
          return PDFNet.sendWithPromise('ListItem.addParagraph', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Paragraph, id);
          });
        };
        PDFNet.ListItem.prototype.addParagraphWithText = function (text) {
          checkArguments(
            arguments.length,
            1,
            'addParagraphWithText',
            '(string)',
            [[text, 'string']]
          );
          return PDFNet.sendWithPromise('ListItem.addParagraphWithText', {
            self: this.id,
            text: text,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Paragraph, id);
          });
        };
        PDFNet.ListItem.prototype.addList = function () {
          return PDFNet.sendWithPromise('ListItem.addList', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.List, id);
          });
        };
        PDFNet.ListItem.prototype.getIndentationLevel = function () {
          return PDFNet.sendWithPromise('ListItem.getIndentationLevel', {
            self: this.id,
          });
        };
        PDFNet.ListItem.prototype.getListIdentifier = function () {
          return PDFNet.sendWithPromise('ListItem.getListIdentifier', {
            self: this.id,
          });
        };
        PDFNet.ListItem.prototype.getItemIndex = function () {
          return PDFNet.sendWithPromise('ListItem.getItemIndex', {
            self: this.id,
          });
        };
        PDFNet.ListItem.prototype.getContentNodeIterator = function () {
          return PDFNet.sendWithPromise('ListItem.getContentNodeIterator', {
            self: this.id,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Iterator, id, 'ContentElement');
          });
        };
        PDFNet.ListItem.prototype.getTextStyledElement = function () {
          return PDFNet.sendWithPromise('ListItem.getTextStyledElement', {
            self: this.id,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.TextStyledElement, id);
          });
        };
        var getUrlAsBuffer = function (jsUrl, options) {
            options = options || {};
            var xhr = new XMLHttpRequest();
            return new Promise(
              function (resolve, reject) {
                xhr.open('GET', jsUrl, !0);
                xhr.responseType = 'arraybuffer';
                options.withCredentials &&
                  (xhr.withCredentials = options.withCredentials);
                xhr.onerror = function () {
                  reject(Error('Network error occurred'));
                };
                xhr.onload = function (evt) {
                  200 == this.status
                    ? ((evt = new Uint8Array(xhr.response)), resolve(evt))
                    : reject(Error('Download Failed'));
                };
                var customHeaders = options.customHeaders;
                if (customHeaders)
                  for (var header in customHeaders)
                    xhr.setRequestHeader(header, customHeaders[header]);
                xhr.send();
              },
              function () {
                xhr.abort();
              }
            );
          },
          positionString = function (num) {
            return 0 === num
              ? '1st'
              : 1 === num
                ? '2nd'
                : 2 === num
                  ? '3rd'
                  : num + 1 + 'th';
          },
          checkArguments = function (
            inputArgNum,
            minNum,
            funcName,
            funcParams,
            argInfoList
          ) {
            var maxNum = argInfoList.length;
            if (minNum === maxNum) {
              if (inputArgNum !== minNum)
                throw new RangeError(
                  inputArgNum +
                    " arguments passed into function '" +
                    funcName +
                    "'. Expected " +
                    minNum +
                    ' argument. Function Signature: ' +
                    funcName +
                    funcParams
                );
            } else if (0 >= minNum) {
              if (inputArgNum > maxNum)
                throw new RangeError(
                  inputArgNum +
                    " arguments passed into function '" +
                    funcName +
                    "'. Expected at most " +
                    maxNum +
                    ' arguments. Function Signature: ' +
                    funcName +
                    funcParams
                );
            } else if (inputArgNum < minNum || inputArgNum > maxNum)
              throw new RangeError(
                inputArgNum +
                  " arguments passed into function '" +
                  funcName +
                  "'. Expected " +
                  minNum +
                  ' to ' +
                  maxNum +
                  ' arguments. Function Signature: ' +
                  funcName +
                  funcParams
              );
            var throwParaTypeError = function (argPos, argType, expectedType) {
              throw new TypeError(
                positionString(argPos) +
                  " input argument in function '" +
                  funcName +
                  "' is of type '" +
                  argType +
                  "'. Expected type '" +
                  expectedType +
                  "'. Function Signature: " +
                  funcName +
                  funcParams
              );
            };
            inputArgNum = function (arg, argPos, expectedType) {
              'object' === _typeof(arg) && arg.name
                ? throwParaTypeError(argPos, arg.name, expectedType)
                : throwParaTypeError(argPos, _typeof(arg), expectedType);
            };
            for (minNum = 0; minNum < maxNum; minNum++) {
              var argInfo = argInfoList[minNum],
                arg$jscomp$0 = argInfo[0],
                argType = argInfo[1];
              if (arg$jscomp$0 instanceof Promise)
                throw new TypeError(
                  positionString(minNum) +
                    " input argument in function '" +
                    funcName +
                    "' is a Promise object. Promises require a 'yield' statement before being accessed."
                );
              if ('OptionBase' === argType) {
                if (arg$jscomp$0)
                  if ('object' === _typeof(arg$jscomp$0)) {
                    if ('function' !== typeof arg$jscomp$0.getJsonString)
                      throw new TypeError(
                        positionString(minNum) +
                          " input argument in function '" +
                          funcName +
                          "' is an 'oject' which is expected to have the 'getJsonString' function"
                      );
                  } else
                    throwParaTypeError(minNum, arg$jscomp$0.name, 'object');
              } else
                'Array' === argType
                  ? Array.isArray(arg$jscomp$0) ||
                    inputArgNum(arg$jscomp$0, minNum, 'Array')
                  : 'ArrayBuffer' === argType
                    ? exports.isArrayBuffer(arg$jscomp$0) ||
                      exports.isArrayBuffer(arg$jscomp$0.buffer) ||
                      inputArgNum(
                        arg$jscomp$0,
                        minNum,
                        'ArrayBuffer|TypedArray'
                      )
                    : 'ArrayAsBuffer' === argType
                      ? Array.isArray(arg$jscomp$0) ||
                        exports.isArrayBuffer(arg$jscomp$0) ||
                        exports.isArrayBuffer(arg$jscomp$0.buffer) ||
                        inputArgNum(
                          arg$jscomp$0,
                          minNum,
                          'ArrayBuffer|TypedArray'
                        )
                      : 'PDFDoc' === argType ||
                          'SDFDoc' === argType ||
                          'FDFDoc' === argType
                        ? arg$jscomp$0 instanceof PDFNet.PDFDoc ||
                          arg$jscomp$0 instanceof PDFNet.SDFDoc ||
                          arg$jscomp$0 instanceof PDFNet.FDFDoc ||
                          inputArgNum(
                            arg$jscomp$0,
                            minNum,
                            'PDFDoc|SDFDoc|FDFDoc'
                          )
                        : 'Structure' === argType
                          ? arg$jscomp$0 instanceof argInfo[2] ||
                            !arg$jscomp$0 ||
                            arg$jscomp$0.name === argInfo[3] ||
                            inputArgNum(arg$jscomp$0, minNum, argInfo[3])
                          : 'OptionObject' === argType
                            ? arg$jscomp$0 instanceof argInfo[2] ||
                              ('object' === _typeof(arg$jscomp$0) &&
                              arg$jscomp$0.name
                                ? arg$jscomp$0.name !== argInfo[4] &&
                                  throwParaTypeError(
                                    minNum,
                                    arg$jscomp$0.name,
                                    argInfo[3]
                                  )
                                : throwParaTypeError(
                                    minNum,
                                    _typeof(arg$jscomp$0),
                                    argInfo[3]
                                  ))
                            : 'Object' === argType
                              ? arg$jscomp$0 instanceof argInfo[2] ||
                                inputArgNum(arg$jscomp$0, minNum, argInfo[3])
                              : 'const char* = 0' === argType
                                ? 'string' !== typeof arg$jscomp$0 &&
                                  null !== arg$jscomp$0 &&
                                  throwParaTypeError(
                                    minNum,
                                    _typeof(arg$jscomp$0),
                                    'string'
                                  )
                                : _typeof(arg$jscomp$0) !== argType &&
                                  throwParaTypeError(
                                    minNum,
                                    _typeof(arg$jscomp$0),
                                    argType
                                  );
            }
          },
          checkThisYieldFunction = function (funcName, yieldFunc) {
            if ('undefined' !== typeof yieldFunc)
              throw Error(
                'Function ' +
                  yieldFunc +
                  " recently altered a struct object without yielding. That object is now being accessed by function '" +
                  funcName +
                  "'. Perhaps a yield statement is required for " +
                  yieldFunc +
                  '?'
              );
          },
          checkParamsYieldFunction = function (funcName, argInfoList) {
            for (var i = 0; i < argInfoList.length; i++) {
              var argInfo = argInfoList[i],
                arg = argInfo[0];
              if (arg && 'undefined' !== typeof arg.yieldFunction)
                throw Error(
                  "Function '" +
                    arg.yieldFunction +
                    "' recently altered a struct object without yielding. That object is now being accessed by the " +
                    positionString(argInfo[1]) +
                    " input argument in function '" +
                    funcName +
                    "'. Perhaps a yield statement is required for '" +
                    arg.yieldFunction +
                    "'?"
                );
            }
          },
          getArrayBuffer = function (buffer, arrayAsBuffer) {
            var bufferArrayBuffer = buffer;
            arrayAsBuffer &&
              buffer.constructor === Array &&
              (bufferArrayBuffer = new Float64Array(buffer));
            exports.isArrayBuffer(bufferArrayBuffer) ||
              ((bufferArrayBuffer = bufferArrayBuffer.buffer),
              buffer.byteLength < bufferArrayBuffer.byteLength &&
                (bufferArrayBuffer = bufferArrayBuffer.slice(
                  buffer.byteOffset,
                  buffer.byteOffset + buffer.byteLength
                )));
            return bufferArrayBuffer;
          },
          getOptsObjPromise = function (options, optionClassName) {
            return options.name === optionClassName
              ? PDFNet.ObjSet.create().then(function (set) {
                  var optsJsonStr =
                    'function' === typeof options.getJsonString
                      ? options.getJsonString()
                      : JSON.stringify(options);
                  return set.createFromJson(optsJsonStr);
                })
              : Promise.resolve(options);
          };
        createdObjects = [];
        lockedObjects = [];
        stackCallCounter = beginOperationCounter = 0;
        deallocStackCounter = [];
        unlockStackCounter = [];
        var finishedInitializeCapability;
        exports.PDFTron &&
          PDFTron.WebViewer &&
          PDFTron.WebViewer.prototype &&
          PDFTron.WebViewer.prototype.version &&
          !PDFTron.skipPDFNetWebViewerWarning &&
          console.warn(
            'PDFNet.js and WebViewer.js have been included in the same context. See pdftron.com/kb_same_context for an explanation of why this could be an error in your application.'
          );
        var createDestroyableObj = function (constructor, id, type) {
            if ('0' === id) return null;
            constructor = new constructor(id, type);
            createdObjects.push({ name: constructor.name, id: constructor.id });
            return constructor;
          },
          createPDFNetObj = function (constructor, id, type) {
            return '0' === id ? null : new constructor(id, type);
          },
          unregisterLockedObject = function (obj) {
            for (var objIndex = -1, i = lockedObjects.length - 1; 0 <= i; i--)
              if (lockedObjects[i].id == obj.id) {
                objIndex = i;
                break;
              }
            if (-1 != objIndex)
              for (
                lockedObjects.splice(objIndex, 1),
                  i = unlockStackCounter.length - 1;
                0 <= i;
                i--
              )
                if (objIndex < unlockStackCounter[i]) --unlockStackCounter[i];
                else break;
            else
              console.log(
                '[WARNING], the object to be unlocked was not found in the unlock list. Unlocking may cause errors.'
              );
          },
          avoidCleanup = function (id) {
            for (var objIndex = -1, i = createdObjects.length - 1; 0 <= i; i--)
              if (createdObjects[i].id == id) {
                objIndex = i;
                break;
              }
            if (-1 != objIndex)
              for (
                createdObjects.splice(objIndex, 1),
                  i = deallocStackCounter.length - 1;
                0 <= i;
                i--
              )
                if (objIndex < deallocStackCounter[i]) --deallocStackCounter[i];
                else break;
            else
              console.log(
                '[WARNING], the object was not found in the deallocation list. Deallocating may cause errors.'
              );
          };
        PDFNet.messageHandler = {
          sendWithPromiseReturnId: function () {
            throw Error(
              'PDFNet.initialize must be called and finish resolving before any other PDFNetJS function calls.'
            );
          },
        };
        PDFNet.userPriority = 2;
        PDFNet.sendWithPromise = function (actionName, data) {
          var messageHandler = this.messageHandler,
            promiseAndId = messageHandler.sendWithPromiseReturnId(
              actionName,
              data,
              this.userPriority
            );
          messageHandler.pdfnetCommandChain =
            0 == messageHandler.pdfnetActiveCommands.size
              ? promiseAndId.promise
              : messageHandler.pdfnetCommandChain.then(function () {
                  return promiseAndId.promise;
                });
          messageHandler.pdfnetActiveCommands.add(promiseAndId.callbackId);
          return messageHandler.pdfnetCommandChain;
        };
        var copyFunc = function (obj, me) {
          for (var attr in obj) me[attr] = obj[attr];
        };
        PDFNet.runGeneratorWithoutCleanup = function (generator, license_key) {
          'undefined' === typeof license_key && (license_key = '');
          checkArguments(
            arguments.length,
            1,
            'runGeneratorWithoutCleanup',
            '(object, string)',
            [
              [generator, 'object'],
              [license_key, 'string'],
            ]
          );
          return PDFNet.runWithoutCleanup(function () {
            return finishGenerator(generator);
          }, license_key);
        };
        PDFNet.runGeneratorWithCleanup = function (generator, license_key) {
          'undefined' === typeof license_key && (license_key = '');
          checkArguments(
            arguments.length,
            1,
            'runGeneratorWithCleanup',
            '(object, string)',
            [
              [generator, 'object'],
              [license_key, 'string'],
            ]
          );
          return PDFNet.runWithCleanup(function () {
            return finishGenerator(generator);
          }, license_key);
        };
        var previousRunPromise = Promise.resolve();
        PDFNet.displayAllocatedObjects = function () {
          console.log('List of created but not yet deallocated objects:');
          if (0 == createdObjects.length)
            console.log('~~None~~ (nothing to deallocate)');
          else
            for (var i = 0; i < createdObjects.length; i++)
              console.log(createdObjects[i]);
          return createdObjects.length;
        };
        PDFNet.getAllocatedObjectsCount = function () {
          return createdObjects.length;
        };
        PDFNet.startDeallocateStack = function () {
          stackCallCounter += 1;
          deallocStackCounter.push(createdObjects.length);
          unlockStackCounter.push(lockedObjects.length);
          return Promise.resolve();
        };
        PDFNet.endDeallocateStack = function () {
          if (0 === stackCallCounter)
            return (
              console.log(
                'Warning, no startDeallocateStack() instances remain.'
              ),
              Promise.resolve()
            );
          var deallocStackPos = deallocStackCounter.pop(),
            unlockStackPos = unlockStackCounter.pop(),
            promiseList = [],
            promiseListDestroy = [];
          if (
            'undefined' !== typeof unlockStackPos &&
            0 !== lockedObjects.length &&
            lockedObjects.length !== unlockStackPos
          )
            for (; lockedObjects.length > unlockStackPos; ) {
              var objToUnlock = lockedObjects.pop();
              objToUnlock = PDFNet.sendWithPromise(
                objToUnlock.name + '.' + objToUnlock.unlocktype,
                { doc: objToUnlock.id }
              );
              objToUnlock = objToUnlock['catch'](function (e) {
                console.log(e);
              });
              promiseList.push(objToUnlock);
            }
          if (
            'undefined' !== typeof deallocStackPos &&
            0 !== createdObjects.length &&
            createdObjects.length !== deallocStackPos
          )
            for (; createdObjects.length > deallocStackPos; )
              (unlockStackPos = createdObjects.pop()),
                (unlockStackPos = PDFNet.sendWithPromise(
                  unlockStackPos.name + '.destroy',
                  { auto_dealloc_obj: unlockStackPos.id }
                )),
                (unlockStackPos = unlockStackPos['catch'](function (e) {
                  console.log(e);
                })),
                promiseListDestroy.push(unlockStackPos);
          --stackCallCounter;
          return Promise.all(promiseList).then(function () {
            return Promise.all(promiseListDestroy);
          });
        };
        PDFNet.getStackCount = function () {
          return Promise.resolve(stackCallCounter);
        };
        PDFNet.deallocateAllObjects = function () {
          if (0 == createdObjects.length) {
            console.log('~~None~~ (nothing to deallocate)');
            var capability = createPromiseCapability();
            capability.resolve();
            return capability.promise;
          }
          capability = [];
          for (deallocStackCounter = []; lockedObjects.length; )
            (objToUnlock = lockedObjects.pop()),
              (unlockPromise = PDFNet.sendWithPromise(
                objToUnlock.name + '.' + objToUnlock.unlocktype,
                { doc: objToUnlock.id }
              )),
              (unlockPromise = unlockPromise['catch'](function (e) {
                console.log(e);
              })),
              capability.push(unlockPromise);
          for (; createdObjects.length; ) {
            var objToDealloc = createdObjects.pop();
            objToDealloc = PDFNet.sendWithPromise(
              objToDealloc.name + '.destroy',
              { auto_dealloc_obj: objToDealloc.id }
            );
            objToDealloc = objToDealloc['catch'](function (e) {
              console.log(e);
            });
            capability.push(objToDealloc);
          }
          return Promise.all(capability);
        };
        PDFNet.Redactor.redact = function (
          doc,
          red_arr,
          appearance,
          ext_neg_mode,
          page_coord_sys
        ) {
          'undefined' === typeof appearance && (appearance = {});
          'undefined' === typeof appearance.redaction_overlay &&
            (appearance.redaction_overlay = !0);
          'undefined' === typeof appearance.positive_overlay_color
            ? (appearance.positive_overlay_color = void 0)
            : 'undefined' !== typeof appearance.positive_overlay_color.id &&
              (appearance.positive_overlay_color =
                appearance.positive_overlay_color.id);
          'undefined' === typeof appearance.negative_overlay_color
            ? (appearance.negative_overlay_color = void 0)
            : 'undefined' !== typeof appearance.negative_overlay_color.id &&
              (appearance.negative_overlay_color =
                appearance.negative_overlay_color.id);
          'undefined' === typeof appearance.border && (appearance.border = !0);
          'undefined' === typeof appearance.use_overlay_text &&
            (appearance.use_overlay_text = !0);
          'undefined' === typeof appearance.font
            ? (appearance.font = void 0)
            : 'undefined' !== typeof appearance.font.id &&
              (appearance.font = appearance.font.id);
          'undefined' === typeof appearance.min_font_size &&
            (appearance.min_font_size = 2);
          'undefined' === typeof appearance.max_font_size &&
            (appearance.max_font_size = 24);
          'undefined' === typeof appearance.text_color
            ? (appearance.text_color = void 0)
            : 'undefined' !== typeof appearance.text_color.id &&
              (appearance.text_color = appearance.text_color.id);
          'undefined' === typeof appearance.horiz_text_alignment &&
            (appearance.horiz_text_alignment = -1);
          'undefined' === typeof appearance.vert_text_alignment &&
            (appearance.vert_text_alignment = 1);
          'undefined' === typeof appearance.show_redacted_content_regions &&
            (appearance.show_redacted_content_regions = !1);
          'undefined' === typeof appearance.redacted_content_color
            ? (appearance.redacted_content_color = void 0)
            : 'undefined' !== typeof appearance.redacted_content_color.id &&
              (appearance.redacted_content_color =
                appearance.redacted_content_color.id);
          'undefined' === typeof ext_neg_mode && (ext_neg_mode = !0);
          'undefined' === typeof page_coord_sys && (page_coord_sys = !0);
          checkArguments(
            arguments.length,
            2,
            'redact',
            '(PDFNet.PDFDoc, Array<Core.PDFNet.Redaction>, object, boolean, boolean)',
            [
              [doc, 'PDFDoc'],
              [red_arr, 'Array'],
              [appearance, 'object'],
              [ext_neg_mode, 'boolean'],
              [page_coord_sys, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('redactorRedact', {
            doc: doc.id,
            red_arr: red_arr,
            appearance: appearance,
            ext_neg_mode: ext_neg_mode,
            page_coord_sys: page_coord_sys,
          });
        };
        PDFNet.Highlights.prototype.getCurrentQuads = function () {
          return PDFNet.sendWithPromise('Highlights.getCurrentQuads', {
            hlts: this.id,
          }).then(function (id) {
            id = new Float64Array(id);
            for (var retArray = [], currQuad, i = 0; i < id.length; i += 8)
              (currQuad = PDFNet.QuadPoint(
                id[i + 0],
                id[i + 1],
                id[i + 2],
                id[i + 3],
                id[i + 4],
                id[i + 5],
                id[i + 6],
                id[i + 7]
              )),
                retArray.push(currQuad);
            return retArray;
          });
        };
        PDFNet.TextSearch.prototype.run = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'run'. Expected 0 arguments. Function Signature: run()"
            );
          return PDFNet.sendWithPromise('TextSearch.run', { ts: this.id }).then(
            function (searchObj) {
              searchObj.highlights = new PDFNet.Highlights(
                searchObj.highlights
              );
              if ('0' == searchObj.highlights.id) return searchObj;
              createdObjects.push({
                name: searchObj.highlights.name,
                id: searchObj.highlights.id,
              });
              return searchObj;
            }
          );
        };
        PDFNet.Iterator.prototype.current = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'fillEncryptDict'. Expected 0 argument."
            );
          var me = this;
          this.yieldFunction = 'Iterator.current';
          var promise = PDFNet.sendWithPromise('Iterator.current', {
            itr: this.id,
            type: this.type,
          });
          me.yieldFunction = void 0;
          'Int' != this.type &&
            (promise = promise.then(function (id) {
              return new PDFNet[me.type](id);
            }));
          return promise;
        };
        PDFNet.PDFDoc.prototype.getFileData = function (callback) {
          callback({ type: 'id', id: this.id });
        };
        PDFNet.PDFDoc.prototype.getFile = function (callback) {
          return null;
        };
        PDFNet.PDFDoc.createFromURL = function (url, options) {
          'undefined' === typeof options && (options = {});
          checkArguments(
            arguments.length,
            1,
            'createFromURL',
            '(string, object)',
            [
              [url, 'string'],
              [options, 'object'],
            ]
          );
          return getUrlAsBuffer(url, options).then(function (data) {
            return PDFNet.PDFDoc.createFromBuffer(data);
          });
        };
        PDFNet.PDFDraw.prototype.exportBuffer = function (
          page,
          format,
          encoder_params
        ) {
          'undefined' == typeof format && (format = 'PNG');
          'undefined' == typeof encoder_params &&
            (encoder_params = new PDFNet.Obj('0'));
          checkArguments(
            arguments.length,
            1,
            'exportBuffer',
            '(PDFNet.Page, string, PDFNet.Obj)',
            [
              [page, 'Object', PDFNet.Page, 'Page'],
              [format, 'string'],
              [encoder_params, 'Object', PDFNet.Obj, 'Obj'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDraw.exportBuffer', {
            d: this.id,
            page: page.id,
            format: format,
            encoder_params: encoder_params.id,
          }).then(function (id) {
            return '0' == id ? null : new Uint8Array(id);
          });
        };
        PDFNet.PDFDraw.prototype.exportStream =
          PDFNet.PDFDraw.prototype.exportBuffer;
        PDFNet.Element.prototype.getTextData = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'getTextData'. Expected 0 arguments. Function Signature: getTextData()"
            );
          return PDFNet.sendWithPromise('Element.getTextData', { e: this.id });
        };
        PDFNet.Element.prototype.getPathData = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'getPathData'. Expected 0 arguments. Function Signature: getPathData()"
            );
          return PDFNet.sendWithPromise('Element.getPathData', {
            e: this.id,
          }).then(function (id) {
            id.operators = new Uint8Array(id.operators);
            id.points = new Float64Array(id.points);
            return id;
          });
        };
        PDFNet.PDFDoc.prototype.convertToXod = function (options) {
          'undefined' === typeof options && (options = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'convertToXod', '(PDFNet.Obj)', [
            [
              options,
              'OptionObject',
              PDFNet.Obj,
              'Obj',
              'PDFNet.Convert.XODOutputOptions',
            ],
          ]);
          return PDFNet.sendWithPromise('PDFDoc.convertToXod', {
            doc: this.id,
            optionsObject: options,
          }).then(function (id) {
            return '0' == id ? null : new Uint8Array(id);
          });
        };
        PDFNet.PDFDoc.prototype.convertToXodStream = function (options) {
          'undefined' === typeof options && (options = new PDFNet.Obj('0'));
          checkArguments(arguments.length, 0, 'convertToXod', '(PDFNet.Obj)', [
            [
              options,
              'OptionObject',
              PDFNet.Obj,
              'Obj',
              'PDFNet.Convert.XODOutputOptions',
            ],
          ]);
          return PDFNet.sendWithPromise('PDFDoc.convertToXodStream', {
            doc: this.id,
            optionsObject: options,
          }).then(function (id) {
            return '0' == id ? null : new PDFNet.Filter(id);
          });
        };
        PDFNet.FilterReader.prototype.read = function (buf_size) {
          checkArguments(arguments.length, 1, 'read', '(number)', [
            [buf_size, 'number'],
          ]);
          return PDFNet.sendWithPromise('FilterReader.read', {
            reader: this.id,
            buf_size: buf_size,
          }).then(function (id) {
            return '0' == id ? null : new Uint8Array(id);
          });
        };
        PDFNet.FilterReader.prototype.readAllIntoBuffer = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'readAllIntoBuffer'. Expected 0 arguments. Function Signature: readAllIntoBuffer()"
            );
          return PDFNet.sendWithPromise('FilterReader.readAllIntoBuffer', {
            reader: this.id,
          }).then(function (id) {
            return '0' == id ? null : new Uint8Array(id);
          });
        };
        PDFNet.bitmapInfo = function (id) {
          copyFunc(id, this);
        };
        PDFNet.PDFDraw.prototype.getBitmap = function (page, pix_fmt, demult) {
          checkArguments(
            arguments.length,
            3,
            'getBitmap',
            '(PDFNet.Page, number, boolean)',
            [
              [page, 'Object', PDFNet.Page, 'Page'],
              [pix_fmt, 'number'],
              [demult, 'boolean'],
            ]
          );
          return PDFNet.sendWithPromise('PDFDraw.getBitmap', {
            d: this.id,
            page: page.id,
            pix_fmt: pix_fmt,
            demult: demult,
          }).then(function (id) {
            return '0' == id ? null : new PDFNet.bitmapInfo(id);
          });
        };
        PDFNet.Matrix2D.create = function (a, b, c, d, h, v) {
          void 0 == a && (a = 0);
          void 0 == b && (b = 0);
          void 0 == c && (c = 0);
          void 0 == d && (d = 0);
          void 0 == h && (h = 0);
          void 0 == v && (v = 0);
          checkArguments(
            arguments.length,
            0,
            'create',
            '(number, number, number, number, number, number)',
            [
              [a, 'number'],
              [b, 'number'],
              [c, 'number'],
              [d, 'number'],
              [h, 'number'],
              [v, 'number'],
            ]
          );
          var capability = createPromiseCapability(),
            matrix = new PDFNet.Matrix2D({
              m_a: a,
              m_b: b,
              m_c: c,
              m_d: d,
              m_h: h,
              m_v: v,
            });
          capability.resolve(matrix);
          return capability.promise;
        };
        PDFNet.PDFDoc.prototype.getPDFDoc = function () {
          return PDFNet.sendWithPromise('GetPDFDoc', { doc: this.id }).then(
            function (id) {
              return '0' == id ? null : new PDFNet.PDFDoc(id);
            }
          );
        };
        PDFNet.TextExtractorLine.prototype.getBBox = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'getBBox'. Expected 0 arguments. Function Signature: getBBox()"
            );
          checkThisYieldFunction('getBBox', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorLine.getBBox';
          return PDFNet.sendWithPromise('TextExtractorLine.getBBox', {
            line: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            return new PDFNet.Rect(
              id.result.x1,
              id.result.y1,
              id.result.x2,
              id.result.y2,
              id.result.mp_rect
            );
          });
        };
        PDFNet.TextExtractorLine.prototype.getQuad = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'getQuad'. Expected 0 arguments. Function Signature: getQuad()"
            );
          checkThisYieldFunction('getQuad', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorLine.getQuad';
          return PDFNet.sendWithPromise('TextExtractorLine.getQuad', {
            line: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            return new PDFNet.QuadPoint(
              id.result.p1x,
              id.result.p1y,
              id.result.p2x,
              id.result.p2y,
              id.result.p3x,
              id.result.p3y,
              id.result.p4x,
              id.result.p4y
            );
          });
        };
        PDFNet.TextExtractorWord.prototype.getBBox = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'getBBox'. Expected 0 arguments. Function Signature: getBBox()"
            );
          checkThisYieldFunction('getBBox', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorWord.getBBox';
          return PDFNet.sendWithPromise('TextExtractorWord.getBBox', {
            tew: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            return new PDFNet.Rect(
              id.result.x1,
              id.result.y1,
              id.result.x2,
              id.result.y2,
              id.result.mp_rect
            );
          });
        };
        PDFNet.TextExtractorWord.prototype.getQuad = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'getQuad'. Expected 0 arguments. Function Signature: getQuad()"
            );
          checkThisYieldFunction('getQuad', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorWord.getQuad';
          return PDFNet.sendWithPromise('TextExtractorWord.getQuad', {
            tew: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            return new PDFNet.QuadPoint(
              id.result.p1x,
              id.result.p1y,
              id.result.p2x,
              id.result.p2y,
              id.result.p3x,
              id.result.p3y,
              id.result.p4x,
              id.result.p4y
            );
          });
        };
        PDFNet.TextExtractorWord.prototype.getGlyphQuad = function (glyph_idx) {
          checkArguments(arguments.length, 1, 'getGlyphQuad', '(number)', [
            [glyph_idx, 'number'],
          ]);
          checkThisYieldFunction('getGlyphQuad', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorWord.getGlyphQuad';
          return PDFNet.sendWithPromise('TextExtractorWord.getGlyphQuad', {
            tew: this,
            glyph_idx: glyph_idx,
          }).then(function (id) {
            me.yieldFunction = void 0;
            return new PDFNet.QuadPoint(
              id.result.p1x,
              id.result.p1y,
              id.result.p2x,
              id.result.p2y,
              id.result.p3x,
              id.result.p3y,
              id.result.p4x,
              id.result.p4y
            );
          });
        };
        PDFNet.TextExtractorStyle.prototype.getColor = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'getColor'. Expected 0 arguments. Function Signature: getColor()"
            );
          checkThisYieldFunction('getColor', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorStyle.getColor';
          return PDFNet.sendWithPromise('TextExtractorStyle.getColor', {
            tes: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            return '0' == id ? null : new PDFNet.ColorPt(id);
          });
        };
        PDFNet.TextExtractorWord.prototype.getString = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'getString'. Expected 0 arguments. Function Signature: getString()"
            );
          checkThisYieldFunction('getString', this.yieldFunction);
          var me = this;
          this.yieldFunction = 'TextExtractorWord.getString';
          return PDFNet.sendWithPromise('TextExtractorWord.getString', {
            tew: this,
          }).then(function (id) {
            me.yieldFunction = void 0;
            return id;
          });
        };
        PDFNet.TextExtractor.prototype.getHighlights = function (char_ranges) {
          checkArguments(
            arguments.length,
            1,
            'getHighlights',
            '(Array<object>)',
            [[char_ranges, 'Array']]
          );
          return PDFNet.sendWithPromise('TextExtractor.getHighlights', {
            te: this.id,
            char_ranges: char_ranges,
          }).then(function (id) {
            return createDestroyableObj(PDFNet.Highlights, id);
          });
        };
        PDFNet.SecurityHandler.prototype.changeUserPasswordNonAscii = function (
          password
        ) {
          checkArguments(
            arguments.length,
            1,
            'changeUserPasswordNonAscii',
            '(string)',
            [[password, 'string']]
          );
          return PDFNet.sendWithPromise(
            'SecurityHandler.changeUserPasswordNonAscii',
            { sh: this.id, password: password, pwd_length: password.length }
          );
        };
        PDFNet.SecurityHandler.prototype.changeMasterPasswordNonAscii =
          function (password) {
            checkArguments(
              arguments.length,
              1,
              'changeMasterPasswordNonAscii',
              '(string)',
              [[password, 'string']]
            );
            return PDFNet.sendWithPromise(
              'SecurityHandler.changeMasterPasswordNonAscii',
              { sh: this.id, password: password, pwd_length: password.length }
            );
          };
        PDFNet.SecurityHandler.prototype.initPassword = function (password) {
          checkArguments(arguments.length, 1, 'initPassword', '(string)', [
            [password, 'string'],
          ]);
          return PDFNet.sendWithPromise('SecurityHandler.initPassword', {
            sh: this.id,
            password: password,
          });
        };
        PDFNet.SecurityHandler.prototype.initPasswordNonAscii = function (
          password
        ) {
          checkArguments(
            arguments.length,
            1,
            'initPasswordNonAscii',
            '(string)',
            [[password, 'string']]
          );
          return PDFNet.sendWithPromise(
            'SecurityHandler.initPasswordNonAscii',
            { sh: this.id, password: password, pwd_length: password.length }
          );
        };
        PDFNet.Element.prototype.getBBox = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'getBBox'. Expected 0 arguments. Function Signature: getBBox()"
            );
          var me = this;
          this.yieldFunction = 'Element.getBBox';
          return PDFNet.sendWithPromise('Element.getBBox', { e: this.id }).then(
            function (id) {
              me.yieldFunction = void 0;
              return new PDFNet.Rect(id);
            }
          );
        };
        PDFNet.Matrix2D.prototype.mult = function (x, y) {
          checkArguments(arguments.length, 2, 'create', '(number, number)', [
            [x, 'number'],
            [y, 'number'],
          ]);
          checkThisYieldFunction('mult', this.yieldFunction);
          return PDFNet.sendWithPromise('Matrix2D.mult', {
            matrix: this,
            x: x,
            y: y,
          });
        };
        PDFNet.Obj.prototype.getAsPDFText = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'getAsPDFText'. Expected 0 arguments. Function Signature: getAsPDFText()"
            );
          return PDFNet.sendWithPromise('Obj.getAsPDFText', { o: this.id });
        };
        PDFNet.PDFDoc.prototype.initSecurityHandler = function (custom_data) {
          'undefined' === typeof custom_data && (custom_data = 0);
          if (1 < arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'initSecurityHandler'. Expected at most 1 arguments. Function Signature: initSecurityHandler(void*)"
            );
          return PDFNet.sendWithPromise('PDFDoc.initSecurityHandler', {
            doc: this.id,
            custom_data: custom_data,
          });
        };
        PDFNet.PDFDoc.prototype.initStdSecurityHandler =
          PDFNet.PDFDoc.prototype.initStdSecurityHandlerUString;
        PDFNet.SDFDoc.prototype.initSecurityHandler = function (custom_data) {
          'undefined' === typeof custom_data && (custom_data = 0);
          if (1 < arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'initSecurityHandler'. Expected at most 1 arguments. Function Signature: initSecurityHandler(void*)"
            );
          return PDFNet.sendWithPromise('SDFDoc.initSecurityHandler', {
            doc: this.id,
            custom_data: custom_data,
          });
        };
        PDFNet.SDFDoc.prototype.initStdSecurityHandler =
          PDFNet.SDFDoc.prototype.initStdSecurityHandlerUString;
        PDFNet.Image.createFromURL = function (
          doc,
          url,
          encoder_hints,
          options
        ) {
          'undefined' === typeof encoder_hints &&
            (encoder_hints = new PDFNet.Obj('0'));
          'undefined' === typeof options && (options = {});
          checkArguments(
            arguments.length,
            2,
            'createFromURL',
            '(PDFNet.PDFDoc, string, PDFNet.Obj, object)',
            [
              [doc, 'PDFDoc'],
              [url, 'string'],
              [encoder_hints, 'Object', PDFNet.Obj, 'Obj'],
              [options, 'object'],
            ]
          );
          return getUrlAsBuffer(url, options).then(function (data) {
            return PDFNet.Image.createFromMemory2(doc, data, encoder_hints);
          });
        };
        PDFNet.PDFDoc.prototype.addStdSignatureHandlerFromURL = function (
          pkcs12_file,
          pkcs12_pass
        ) {
          checkArguments(
            arguments.length,
            2,
            'addStdSignatureHandlerFromURL',
            '(string, string)',
            [
              [pkcs12_file, 'string'],
              [pkcs12_pass, 'string'],
            ]
          );
          var me = this;
          return getUrlAsBuffer(pkcs12_file).then(function (pkcs12_buffer) {
            return me.addStdSignatureHandlerFromBufferWithDoc(
              pkcs12_buffer,
              pkcs12_pass,
              me
            );
          });
        };
        PDFNet.PDFDoc.prototype.addStdSignatureHandlerFromBufferWithDoc =
          function (pkcs12_buffer, pkcs12_pass, doc) {
            checkArguments(
              arguments.length,
              3,
              'addStdSignatureHandlerFromBufferWithDoc',
              '(ArrayBuffer|TypedArray, string, PDFNet.PDFDoc)',
              [
                [pkcs12_buffer, 'ArrayBuffer'],
                [pkcs12_pass, 'string'],
                [doc, 'PDFDoc'],
              ]
            );
            return PDFNet.sendWithPromise(
              'PDFDoc.addStdSignatureHandlerFromBuffer',
              {
                doc: doc.id,
                pkcs12_buffer: pkcs12_buffer.buffer,
                pkcs12_pass: pkcs12_pass,
              }
            );
          };
        PDFNet.Filter.createFromMemory = function (buf) {
          checkArguments(
            arguments.length,
            1,
            'createFromMemory',
            '(ArrayBuffer|TypedArray)',
            [[buf, 'ArrayBuffer']]
          );
          var bufArrayBuffer = getArrayBuffer(buf, !1);
          return PDFNet.sendWithPromise('filterCreateFromMemory', {
            buf: bufArrayBuffer,
          }).then(function (id) {
            if ('0' == id) return null;
            id = new PDFNet.Filter(id);
            createdObjects.push({ name: id.name, id: id.id });
            return id;
          });
        };
        PDFNet.Filter.createURLFilter = function (url, options) {
          'undefined' === typeof options && (options = {});
          checkArguments(
            arguments.length,
            1,
            'createURLFilter',
            '(string, object)',
            [
              [url, 'string'],
              [options, 'object'],
            ]
          );
          return getUrlAsBuffer(url, options).then(function (data) {
            return PDFNet.Filter.createFromMemory(data);
          });
        };
        PDFNet.Filter.createFlateEncode = function (
          input_filter,
          compression_level,
          buf_sz
        ) {
          'undefined' === typeof input_filter &&
            (input_filter = new PDFNet.Filter('0'));
          'undefined' === typeof compression_level && (compression_level = -1);
          'undefined' === typeof buf_sz && (buf_sz = 256);
          checkArguments(
            arguments.length,
            0,
            'createFlateEncode',
            '(PDFNet.Filter, number, number)',
            [
              [input_filter, 'Object', PDFNet.Filter, 'Filter'],
              [compression_level, 'number'],
              [buf_sz, 'number'],
            ]
          );
          return PDFNet.sendWithPromise('Filter.createFlateEncode', {
            input_filter: input_filter.id,
            compression_level: compression_level,
            buf_sz: buf_sz,
          }).then(function (id) {
            if ('0' == id) return null;
            id = new PDFNet.Filter(id);
            createdObjects.push({ name: id.name, id: id.id });
            return id;
          });
        };
        PDFNet.PDFDoc.prototype.importPages = function (
          page_arr,
          import_bookmarks
        ) {
          'undefined' === typeof import_bookmarks && (import_bookmarks = !1);
          checkArguments(
            arguments.length,
            1,
            'importPages',
            '(Array<Core.PDFNet.Page>, boolean)',
            [
              [page_arr, 'Array'],
              [import_bookmarks, 'boolean'],
            ]
          );
          page_arr = page_arr.map(function (p) {
            return p.id;
          });
          return PDFNet.sendWithPromise('PDFDoc.importPages', {
            doc: this.id,
            page_arr: page_arr,
            import_bookmarks: import_bookmarks,
          }).then(function (idArray) {
            return idArray
              ? idArray.map(function (id) {
                  return new PDFNet.Page(id);
                })
              : null;
          });
        };
        PDFNet.SDFDoc.prototype.applyCustomQuery = function (query) {
          checkArguments(arguments.length, 1, 'applyCustomQuery', '(object)', [
            [query, 'object'],
          ]);
          return PDFNet.sendWithPromise('SDFDoc.applyCustomQuery', {
            doc: this.id,
            query: JSON.stringify(query),
          }).then(function (result_str) {
            return JSON.parse(result_str);
          });
        };
        var origSaveMemoryBuffer = PDFNet.PDFDoc.prototype.saveMemoryBuffer,
          origSaveStream = PDFNet.PDFDoc.prototype.saveStream;
        PDFNet.PDFDoc.prototype.saveMemoryBuffer = function (flags) {
          var me = this;
          return Promise.resolve(me.documentCompletePromise).then(function () {
            return origSaveMemoryBuffer.call(me, flags);
          });
        };
        PDFNet.PDFDoc.prototype.saveStream = function (flags) {
          var me = this;
          return Promise.resolve(me.documentCompletePromise).then(function () {
            return origSaveStream.call(me, flags);
          });
        };
        PDFNet.PDFACompliance.createFromUrl = function (
          convert,
          url,
          pwd,
          conform,
          excep,
          max_ref_objs,
          first_stop
        ) {
          'undefined' === typeof pwd && (pwd = '');
          'undefined' === typeof conform &&
            (conform = PDFNet.PDFACompliance.Conformance.e_Level1B);
          'undefined' === typeof excep && (excep = new Int32Array(0));
          'undefined' === typeof max_ref_objs && (max_ref_objs = 10);
          'undefined' === typeof first_stop && (first_stop = !1);
          checkArguments(
            arguments.length,
            2,
            'createFromUrl',
            '(boolean, string, string, number, ArrayBuffer|TypedArray, number, boolean)',
            [
              [convert, 'boolean'],
              [url, 'string'],
              [pwd, 'string'],
              [conform, 'number'],
              [excep, 'ArrayBuffer'],
              [max_ref_objs, 'number'],
              [first_stop, 'boolean'],
            ]
          );
          return getUrlAsBuffer(url).then(function (buf) {
            return PDFNet.PDFACompliance.createFromBuffer(
              convert,
              buf,
              pwd,
              conform,
              excep,
              max_ref_objs,
              first_stop
            );
          });
        };
        PDFNet.PDFACompliance.createFromBuffer = function (
          convert,
          buf,
          pwd,
          conform,
          excep,
          max_ref_objs,
          first_stop
        ) {
          'undefined' === typeof pwd && (pwd = '');
          'undefined' === typeof conform &&
            (conform = PDFNet.PDFACompliance.Conformance.e_Level1B);
          'undefined' === typeof excep && (excep = new Int32Array(0));
          'undefined' === typeof max_ref_objs && (max_ref_objs = 10);
          'undefined' === typeof first_stop && (first_stop = !1);
          checkArguments(
            arguments.length,
            2,
            'createFromBuffer',
            '(boolean, ArrayBuffer|TypedArray, string, number, ArrayBuffer|TypedArray, number, boolean)',
            [
              [convert, 'boolean'],
              [buf, 'ArrayBuffer'],
              [pwd, 'string'],
              [conform, 'number'],
              [excep, 'ArrayBuffer'],
              [max_ref_objs, 'number'],
              [first_stop, 'boolean'],
            ]
          );
          var bufArrayBuffer = getArrayBuffer(buf, !1),
            excepArrayBuffer = getArrayBuffer(excep, !1);
          return PDFNet.sendWithPromise('pdfaComplianceCreateFromBuffer', {
            convert: convert,
            buf: bufArrayBuffer,
            password: pwd,
            conform: conform,
            excep: excepArrayBuffer,
            max_ref_objs: max_ref_objs,
            first_stop: first_stop,
          }).then(function (id) {
            id = new PDFNet.PDFACompliance(id);
            createdObjects.push({ name: id.name, id: id.id });
            return id;
          });
        };
        PDFNet.PDFDoc.prototype.lock = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'lock'. Expected 0 arguments. Function Signature: lock()"
            );
          lockedObjects.push({
            name: 'PDFDoc',
            id: this.id,
            unlocktype: 'unlock',
          });
          return PDFNet.sendWithPromise('PDFDoc.lock', { doc: this.id });
        };
        PDFNet.PDFDoc.prototype.lockRead = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'lockRead'. Expected 0 arguments. Function Signature: lockRead()"
            );
          lockedObjects.push({
            name: 'PDFDoc',
            id: this.id,
            unlocktype: 'unlockRead',
          });
          return PDFNet.sendWithPromise('PDFDoc.lockRead', { doc: this.id });
        };
        PDFNet.PDFDoc.prototype.tryLock = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'tryLock'. Expected 0 arguments. Function Signature: tryLock()"
            );
          var index = lockedObjects.length;
          lockedObjects.push({
            name: 'PDFDoc',
            id: this.id,
            unlocktype: 'unlock',
          });
          return PDFNet.sendWithPromise('PDFDoc.tryLock', {
            doc: this.id,
          }).then(function (success) {
            success || lockedObjects.splice(index, 1);
          });
        };
        PDFNet.PDFDoc.prototype.timedLock = function (milliseconds) {
          checkArguments(arguments.length, 1, 'timedLock', '(number)', [
            [milliseconds, 'number'],
          ]);
          var index = lockedObjects.length;
          lockedObjects.push({
            name: 'PDFDoc',
            id: this.id,
            unlocktype: 'unlock',
          });
          return PDFNet.sendWithPromise('PDFDoc.timedLock', {
            doc: this.id,
            milliseconds: milliseconds,
          }).then(function (success) {
            success || lockedObjects.splice(index, 1);
          });
        };
        PDFNet.PDFDoc.prototype.tryLockRead = function () {
          if (0 != arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'tryLockRead'. Expected 0 arguments. Function Signature: tryLockRead()"
            );
          var index = lockedObjects.length;
          lockedObjects.push({
            name: 'PDFDoc',
            id: this.id,
            unlocktype: 'unlockRead',
          });
          return PDFNet.sendWithPromise('PDFDoc.tryLockRead', {
            doc: this.id,
          }).then(function (success) {
            success || lockedObjects.splice(index, 1);
          });
        };
        PDFNet.PDFDoc.prototype.timedLockRead = function (milliseconds) {
          checkArguments(arguments.length, 1, 'timedLockRead', '(number)', [
            [milliseconds, 'number'],
          ]);
          var index = lockedObjects.length;
          lockedObjects.push({
            name: 'PDFDoc',
            id: this.id,
            unlocktype: 'unlockRead',
          });
          return PDFNet.sendWithPromise('PDFDoc.timedLockRead', {
            doc: this.id,
            milliseconds: milliseconds,
          }).then(function (success) {
            success || lockedObjects.splice(index, 1);
          });
        };
        PDFNet.hasFullApi = !0;
        PDFNet.Optimizer.optimize = function (doc, optimizerSettings) {
          'undefined' === typeof optimizerSettings &&
            (optimizerSettings = new PDFNet.Optimizer.OptimizerSettings());
          checkArguments(
            arguments.length,
            1,
            'optimize',
            '(PDFNet.PDFDoc, object)',
            [
              [doc, 'PDFDoc'],
              [optimizerSettings, 'object'],
            ]
          );
          return PDFNet.sendWithPromise('optimizerOptimize', {
            doc: doc.id,
            color_image_settings: optimizerSettings.color_image_settings,
            grayscale_image_settings:
              optimizerSettings.grayscale_image_settings,
            mono_image_settings: optimizerSettings.mono_image_settings,
            text_settings: optimizerSettings.text_settings,
            remove_custom: optimizerSettings.remove_custom,
          });
        };
        PDFNet.VerificationOptions.prototype.addTrustedCertificateFromURL =
          function (url, options, trust_flags) {
            'undefined' === typeof options && (options = {});
            'undefined' === typeof trust_flags &&
              (trust_flags =
                PDFNet.VerificationOptions.CertificateTrustFlag
                  .e_default_trust);
            checkArguments(
              arguments.length,
              1,
              'addTrustedCertificateFromURL',
              '(string, object, number)',
              [
                [url, 'string'],
                [options, 'object'],
                [trust_flags, 'number'],
              ]
            );
            var me = this;
            return getUrlAsBuffer(url, options).then(function (data) {
              return me.addTrustedCertificate(data, trust_flags);
            });
          };
        PDFNet.DigitalSignatureField.prototype.certifyOnNextSaveFromURL =
          function (url, in_password, options) {
            'undefined' === typeof options && (options = {});
            checkArguments(
              arguments.length,
              2,
              'certifyOnNextSaveFromURL',
              '(string, string, object)',
              [
                [url, 'string'],
                [in_password, 'string'],
                [options, 'object'],
              ]
            );
            var me = this;
            return getUrlAsBuffer(url, options).then(function (data) {
              return me.certifyOnNextSaveFromBuffer(data, in_password);
            });
          };
        PDFNet.DigitalSignatureField.prototype.signOnNextSaveFromURL =
          function (url, in_password, options) {
            'undefined' === typeof options && (options = {});
            checkArguments(
              arguments.length,
              2,
              'signOnNextSaveFromURL',
              '(string, string, object)',
              [
                [url, 'string'],
                [in_password, 'string'],
                [options, 'object'],
              ]
            );
            var me = this;
            return getUrlAsBuffer(url, options).then(function (data) {
              return me.signOnNextSaveFromBuffer(data, in_password);
            });
          };
        PDFNet.PDFRasterizer.prototype.rasterize = function (
          page,
          width,
          height,
          stride,
          num_comps,
          demult,
          device_mtx,
          clip,
          scrl_clp_regions
        ) {
          'undefined' === typeof clip && (clip = null);
          'undefined' === typeof scrl_clp_regions && (scrl_clp_regions = null);
          checkArguments(
            arguments.length,
            7,
            'rasterize',
            '(PDFNet.Page, number, number, number, number, boolean, PDFNet.Matrix2D, PDFNet.Rect, PDFNet.Rect)',
            [
              [page, 'Object', PDFNet.Page, 'Page'],
              [width, 'number'],
              [height, 'number'],
              [stride, 'number'],
              [num_comps, 'number'],
              [demult, 'boolean'],
              [device_mtx, 'Structure', PDFNet.Matrix2D, 'Matrix2D'],
              [clip, 'Structure', PDFNet.Rect, 'Rect'],
              [scrl_clp_regions, 'Structure', PDFNet.Rect, 'Rect'],
            ]
          );
          checkParamsYieldFunction('rasterize', [
            [device_mtx, 6],
            [clip, 7],
            [scrl_clp_regions, 8],
          ]);
          return PDFNet.sendWithPromise('PDFRasterizer.rasterize', {
            r: this.id,
            page: page.id,
            width: width,
            height: height,
            stride: stride,
            num_comps: num_comps,
            demult: demult,
            device_mtx: device_mtx,
            clip: clip,
            scrl_clp_regions: scrl_clp_regions,
          });
        };
        PDFNet.ElementBuilder.prototype.createUnicodeTextRun = function (
          text_data
        ) {
          checkArguments(
            arguments.length,
            1,
            'createUnicodeTextRun',
            '(string)',
            [[text_data, 'string']]
          );
          return PDFNet.sendWithPromise('ElementBuilder.createUnicodeTextRun', {
            b: this.id,
            text_data: text_data,
          }).then(function (id) {
            return createPDFNetObj(PDFNet.Element, id);
          });
        };
        PDFNet.DigitalSignatureField.prototype.getCertPathsFromCMS =
          function () {
            checkThisYieldFunction('getCertPathsFromCMS', this.yieldFunction);
            return PDFNet.sendWithPromise(
              'DigitalSignatureField.getCertPathsFromCMS',
              { self: this }
            ).then(function (arrArray) {
              for (var retArray = [], i = 0; i < arrArray.length; ++i) {
                for (
                  var idArray = arrArray[i], objArray = [], j = 0;
                  j < idArray.length;
                  ++j
                ) {
                  var id = idArray[j];
                  if ('0' === id) return null;
                  id = new PDFNet.X509Certificate(id);
                  objArray.push(id);
                  createdObjects.push({ name: id.name, id: id.id });
                }
                retArray.push(objArray);
              }
              return retArray;
            });
          };
        PDFNet.Convert.office2PDF = function (input, options) {
          return Core.officeToPDFBuffer(input, options).then(function (buffer) {
            PDFNet.PDFDoc.createFromBuffer(buffer).then(function (doc) {
              doc.initSecurityHandler();
              return doc;
            });
          });
        };
        PDFNet.PDFDoc.prototype.requirePage = function (page_number) {
          checkArguments(arguments.length, 1, 'requirePage', '(number)', [
            [page_number, 'number'],
          ]);
          if (0 >= page_number)
            throw Error(
              "1st input argument '" +
                page_number +
                "' in function 'requirePage' is invalid. Expected number between 1 and number of pages in the document."
            );
          return PDFNet.sendWithPromise('PDFDoc.RequirePage', {
            docId: this.id,
            pageNum: page_number,
          });
        };
        PDFNet.beginOperation = function (optionsObj) {
          'undefined' === typeof optionsObj
            ? (optionsObj = { allowMultipleInstances: !1 })
            : 'undefined' === typeof optionsObj.allowMultipleInstances &&
              console.log(
                "Warning: passing in options object without value 'allowMultipleInstances'"
              );
          if (0 < beginOperationCounter && !optionsObj.allowMultipleInstances)
            throw Error(
              "a previous instance of PDFNet.beginOperation() has been called without being terminated by PDFNet.finishOperation(). If this is intentional, pass in an options object with its parameter 'allowMultipleInstances' set to 'true' (ex. optObj={}; optObj.allowMultipleInstances=true; PDFNet.beginOperation(optObj));"
            );
          beginOperationCounter += 1;
          if (1 < arguments.length)
            throw new RangeError(
              arguments.length +
                " arguments passed into function 'beginOperation'. Expected 0 to 1 arguments. Function Signature: beginOperation(optObj = {})"
            );
          return PDFNet.sendWithPromise('BeginOperation', {});
        };
        PDFNet.finishOperation = function () {
          if (0 < beginOperationCounter) {
            --beginOperationCounter;
            if (0 != arguments.length)
              throw new RangeError(
                arguments.length +
                  " arguments passed into function 'finishOperation'. Expected 0 arguments. Function Signature: finishOperation()"
              );
            return PDFNet.sendWithPromise('FinishOperation', {});
          }
        };
        PDFNet.runWithCleanup = function (callback, license_key) {
          'undefined' === typeof license_key && (license_key = '');
          checkArguments(
            arguments.length,
            1,
            'runWithCleanup',
            '(function, string)',
            [
              [callback, 'function'],
              [license_key, 'string'],
            ]
          );
          var result,
            shouldFinishOperation = !1,
            shouldDeallocateStack = !1;
          return (previousRunPromise = previousRunPromise
            .then(
              function () {},
              function () {}
            )
            .then(function () {
              return PDFNet.initialize(license_key);
            })
            .then(function () {
              shouldFinishOperation = !0;
              return PDFNet.beginOperation();
            })
            .then(function () {
              shouldDeallocateStack = !0;
              PDFNet.startDeallocateStack();
              return callback();
            })
            .then(function (val) {
              result = val;
              shouldDeallocateStack = !1;
              return PDFNet.endDeallocateStack();
            })
            .then(function () {
              shouldFinishOperation = !1;
              PDFNet.finishOperation();
              if (0 < stackCallCounter)
                throw Error(
                  'Detected not yet deallocated stack. You may have called "PDFNet.startDeallocateStack()" somewhere without calling "PDFNet.endDeallocateStack()" afterwards.'
                );
              return result;
            })
            ['catch'](function (e) {
              shouldDeallocateStack && PDFNet.endDeallocateStack();
              shouldFinishOperation && PDFNet.finishOperation();
              throw e;
            }));
        };
        PDFNet.runWithoutCleanup = function (callback, license_key) {
          'undefined' === typeof license_key && (license_key = '');
          checkArguments(
            arguments.length,
            1,
            'runWithCleanup',
            '(function, string)',
            [
              [callback, 'function'],
              [license_key, 'string'],
            ]
          );
          var shouldFinishOperation = !1;
          return (previousRunPromise = previousRunPromise
            .then(
              function () {},
              function () {}
            )
            .then(function () {
              return PDFNet.initialize(license_key);
            })
            .then(function () {
              shouldFinishOperation = !0;
              return PDFNet.beginOperation();
            })
            .then(function () {
              return callback();
            })
            .then(function (result) {
              shouldFinishOperation = !1;
              PDFNet.finishOperation();
              return result;
            })
            ['catch'](function (e) {
              shouldFinishOperation && PDFNet.finishOperation();
              throw e;
            }));
        };
        PDFNet.initialize = function (licenseKey, pdfBackendType) {
          'undefined' === typeof licenseKey && (licenseKey = '');
          'undefined' === typeof pdfBackendType && (pdfBackendType = '');
          checkArguments(
            arguments.length,
            0,
            'initialize',
            '(string, string)',
            [
              [licenseKey, 'string'],
              [pdfBackendType, 'string'],
            ]
          );
          if (!finishedInitializeCapability) {
            var workerHandlers = {
              emsWorkerError: function (msg, genericMsg) {
                console.log('EmsWorkerError: ' + msg + ', ' + genericMsg);
              },
            };
            finishedInitializeCapability = createPromiseCapability();
            var finishInit = function (pdfBackendType) {
              exports.Core.preloadPDFWorker(pdfBackendType, workerHandlers);
              exports.Core.initPDFWorkerTransports(
                pdfBackendType,
                workerHandlers,
                licenseKey
              ).then(
                function (transport) {
                  PDFNet.messageHandler = transport.messageHandler;
                  finishedInitializeCapability.resolve();
                },
                function (e) {
                  finishedInitializeCapability.reject(e);
                }
              );
            };
            pdfBackendType && 'auto' !== pdfBackendType
              ? finishInit(pdfBackendType)
              : exports.Core.getDefaultBackendType().then(
                  finishInit,
                  function (e) {
                    finishedInitializeCapability.reject(e);
                  }
                );
          }
          return finishedInitializeCapability.promise;
        };
        exports.Core.PDFNet = PDFNet;
      })('undefined' === typeof window ? this : window);
    },
  ]);
}).call(this || window);
