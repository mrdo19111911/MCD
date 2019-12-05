'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeList = undefined;

var _thayboi = require('./api/thayboi/thayboi.router');

var _thayboi2 = _interopRequireDefault(_thayboi);

var _rate = require('./api/user/rate.router');

var _rate2 = _interopRequireDefault(_rate);

var _comment = require('./api/user/comment.router');

var _comment2 = _interopRequireDefault(_comment);

var _reaction = require('./api/user/reaction.router');

var _reaction2 = _interopRequireDefault(_reaction);

var _following = require('./api/user/following.router');

var _following2 = _interopRequireDefault(_following);

var _getall = require('./api/user/getall.router');

var _getall2 = _interopRequireDefault(_getall);

var _route = require('./api/account/route.user');

var _route2 = _interopRequireDefault(_route);

var _image = require('./api/user/image.router');

var _image2 = _interopRequireDefault(_image);

var _filter = require('./api/user/filter.router');

var _filter2 = _interopRequireDefault(_filter);

var _detail = require('./api/user/detail.router');

var _detail2 = _interopRequireDefault(_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routeList = exports.routeList = [
// userRouter,
_thayboi2.default, _rate2.default, _comment2.default, _reaction2.default, _following2.default, _getall2.default, _route2.default, _image2.default, _filter2.default, _detail2.default];