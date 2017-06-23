'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/markbame/knowledgeview/getstreamio-nextjs-ssr-list-aggregate/pages/index.js?entry';

var stream = require('getstream');

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