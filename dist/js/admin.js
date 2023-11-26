var global;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/server/admin.js":
/*!*************************************!*\
  !*** ./src/scripts/server/admin.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var file_system = __webpack_require__(/*! fs */ "fs");
var AdminTools = /*#__PURE__*/function () {
  function AdminTools() {
    _classCallCheck(this, AdminTools);
    this.admin_id = 0;
    this.selected_user = 0;
    this.all_users = JSON.parse(file_system.readFileSync('./json/users.json', 'utf8')).users;
    this.news = JSON.parse(file_system.readFileSync('./json/news.json', 'utf-8')).news;
  }
  _createClass(AdminTools, [{
    key: "get_users",
    value: function get_users() {
      return this.all_users;
    }
  }, {
    key: "get_selected_user",
    value: function get_selected_user() {
      return this.selected_user;
    }
  }, {
    key: "get_user_news",
    value: function get_user_news(user_id) {
      var user_idx = this.all_users.map(function (user) {
        return parseInt(user.id);
      }).indexOf(parseInt(user_id));
      var friends_id = this.all_users[user_idx].friends;
      if (!friends_id) {
        return null;
      }
      var user_news = [];
      for (var idx = 0; idx < this.news.length; idx++) {
        var posts = this.news[idx];
        if (friends_id.includes(posts.id)) {
          var friend_idx = this.all_users.map(function (user) {
            return parseInt(user.id);
          }).indexOf(parseInt(posts.id));
          var friend_info = this.all_users[friend_idx];
          user_news.push({
            name: friend_info.name,
            avatar: friend_info.avatar,
            posts: posts.posts
          });
        }
      }
      return user_news;
    }
  }, {
    key: "set_selected_user",
    value: function set_selected_user(user_id) {
      this.selected_user = parseInt(user_id);
    }
  }, {
    key: "change_user_info",
    value: function change_user_info(user_id, user_info) {
      var user_idx = this.all_users.map(function (user) {
        return parseInt(user.id);
      }).indexOf(parseInt(user_id));
      for (var param in user_info) {
        if (user_info[param]) {
          this.all_users[user_idx][param] = user_info[param];
        }
      }
    }
  }]);
  return AdminTools;
}();
module.exports = AdminTools;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/server/admin.js");
/******/ 	global = __webpack_exports__;
/******/ 	
/******/ })()
;