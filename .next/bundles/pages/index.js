
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(65);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(39);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/markbame/knowledgeview/getstreamio-nextjs-ssr-list-aggregate/pages/index.js?entry';

var stream = __webpack_require__(583);

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'Shows',
    value: function Shows(props) {
      var listShows = props.data.results.map(function (res) {
        return _react2.default.createElement('li', { key: res['id'], __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }, _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, 'Actor:'), ' ', res['actor'], ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, 'ID:'), ' ', res['id'], ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, 'Message:'), ' ', res['message'], ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, 'Object:'), ' ', res['object'], ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, 'Time:'), ' ', res['time'], ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }), _react2.default.createElement('b', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, 'Verb:'), ' ', res['verb'], ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }));
      });
      return _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, listShows);
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('div', { className: 'wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Index'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, this.Shows(this.props))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var client, user1, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                client = stream.connect('g5858gfymtgj', 'waqspfbuy2eyn9gvhgbwvz8gj7nz2798xs95eqesmrfkxs9ehm8hy587avkn9kpd');
                user1 = client.feed('KVFlat', 'mark');
                data = {};
                _context.next = 5;
                return new _promise2.default(function (resolve) {
                  user1.get({ limit: 5 }).then(function (results) {
                    console.log(results);
                    data = { results: results };
                    resolve();
                  });
                });

              case 5:
                return _context.abrupt('return', { "data": data.results });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/markbame/knowledgeview/getstreamio-nextjs-ssr-list-aggregate/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/markbame/knowledgeview/getstreamio-nextjs-ssr-list-aggregate/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(86)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(564);


/***/ })

},[592]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzY2OGQzMTYiLCJ3ZWJwYWNrOi8vLy4vYmF0Y2hfb3BlcmF0aW9ucyAoaWdub3JlZCk/NjY4ZDMxNiIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKT82NjhkMzE2Iiwid2VicGFjazovLy9qc29ud2VidG9rZW4gKGlnbm9yZWQpPzY2OGQzMTYiLCJ3ZWJwYWNrOi8vL3FzIChpZ25vcmVkKT82NjhkMzE2Iiwid2VicGFjazovLy91cmwgKGlnbm9yZWQpPzY2OGQzMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xudmFyIHN0cmVhbSA9IHJlcXVpcmUoJ2dldHN0cmVhbScpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIGNvbnN0IGNsaWVudCA9IHN0cmVhbS5jb25uZWN0KCdnNTg1OGdmeW10Z2onLCAnd2Fxc3BmYnV5MmV5bjlndmhnYnd2ejhnajduejI3OTh4czk1ZXFlc21yZmt4czllaG04aHk1ODdhdmtuOWtwZCcpO1xuICAgIHZhciB1c2VyMSA9IGNsaWVudC5mZWVkKCdLVkZsYXQnLCAnbWFyaycpO1xuICAgICB2YXIgZGF0YSA9IHt9XG4gICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgdXNlcjEuZ2V0KHsgbGltaXQ6IDUgfSkudGhlbihmdW5jdGlvbihyZXN1bHRzKSB7XG4gICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKVxuICAgICAgICAgZGF0YSA9IHtyZXN1bHRzfVxuICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgfSk7XG4gICAgIH0pXG4gICAgIHJldHVybiB7XCJkYXRhXCI6ZGF0YS5yZXN1bHRzfVxuICB9XG5cbiAgU2hvd3MocHJvcHMpIHtcbiAgICBjb25zdCBsaXN0U2hvd3MgPSBwcm9wcy5kYXRhLnJlc3VsdHMubWFwKChyZXMpID0+XG4gICAgICA8bGkga2V5PXsgcmVzWydpZCddIH0+XG4gICAgICAgIDxiPkFjdG9yOjwvYj4geyByZXNbJ2FjdG9yJ10gfSA8YnIvPlxuICAgICAgICA8Yj5JRDo8L2I+IHsgcmVzWydpZCddIH0gPGJyLz5cbiAgICAgICAgPGI+TWVzc2FnZTo8L2I+IHsgcmVzWydtZXNzYWdlJ10gfSA8YnIvPlxuICAgICAgICA8Yj5PYmplY3Q6PC9iPiB7IHJlc1snb2JqZWN0J10gfSA8YnIvPlxuICAgICAgICA8Yj5UaW1lOjwvYj4geyByZXNbJ3RpbWUnXSB9IDxici8+XG4gICAgICAgIDxiPlZlcmI6PC9iPiB7IHJlc1sndmVyYiddIH0gPGJyLz5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsPnsgbGlzdFNob3dzIH08L3VsPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkluZGV4PC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPHVsPnsgdGhpcy5TaG93cyh0aGlzLnByb3BzKSB9PC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2JhdGNoX29wZXJhdGlvbnMgKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSA1ODdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiLyogKGlnbm9yZWQpICovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gY3J5cHRvIChpZ25vcmVkKVxuLy8gbW9kdWxlIGlkID0gNTg4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGpzb253ZWJ0b2tlbiAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDU4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBxcyAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDU5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyB1cmwgKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSA1OTFcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFNQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBdENBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU5BO0FBQ0E7O0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        