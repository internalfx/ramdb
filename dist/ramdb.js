'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge = require('mout/object/merge');

var _merge2 = _interopRequireDefault(_merge);

var _secondaryIndex = require('./secondaryIndex');

var _secondaryIndex2 = _interopRequireDefault(_secondaryIndex);

var _baseQuery = require('./baseQuery');

var _baseQuery2 = _interopRequireDefault(_baseQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import isArray from 'mout/lang/isArray'
// import Immutable from 'immutable'

var baseDB = {};
// import queryEngine from './queryEngine'

baseDB.q = function () {
  var query = Object.create(_baseQuery2.default);

  query.db = this;
  query.ops = [];
  query.results = null;

  return query;
};

var ramdb = function ramdb() {
  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var db = Object.create(baseDB);

  db.cache = {};
  db.store = {};
  db.indexes = {};
  db.config = (0, _merge2.default)({
    indexes: {}
  }, config);

  Object.keys(db.config.indexes).forEach(function (indexName) {
    db.indexes[indexName] = (0, _secondaryIndex2.default)(db.config.indexes[indexName]);
  });

  return db;
};

exports.default = ramdb;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbWRiLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLElBQUksTUFBTSxHQUFHLEVBQUU7O0FBQUE7QUFFZixNQUFNLENBQUMsQ0FBQyxHQUFHLFlBQVk7QUFDckIsTUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0scUJBQVcsQ0FBQTs7QUFFcEMsT0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUE7QUFDZixPQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQTtBQUNkLE9BQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBOztBQUVwQixTQUFPLEtBQUssQ0FBQTtDQUNiLENBQUE7O0FBRUQsSUFBSSxLQUFLLEdBQUcsU0FBUixLQUFLLEdBQTBCO01BQWIsTUFBTSx5REFBRyxFQUFFOztBQUMvQixNQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBOztBQUU5QixJQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtBQUNiLElBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO0FBQ2IsSUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUE7QUFDZixJQUFFLENBQUMsTUFBTSxHQUFHLHFCQUFNO0FBQ2hCLFdBQU8sRUFBRSxFQUFFO0dBQ1osRUFBRSxNQUFNLENBQUMsQ0FBQTs7QUFFVixRQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsU0FBUyxFQUFFO0FBQzFELE1BQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsOEJBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtHQUNsRSxDQUFDLENBQUE7O0FBRUYsU0FBTyxFQUFFLENBQUE7Q0FDVixDQUFBOztrQkFFYyxLQUFLIiwiZmlsZSI6InJhbWRiLmVzNiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IG1lcmdlIGZyb20gJ21vdXQvb2JqZWN0L21lcmdlJ1xuLy8gaW1wb3J0IGlzQXJyYXkgZnJvbSAnbW91dC9sYW5nL2lzQXJyYXknXG4vLyBpbXBvcnQgSW1tdXRhYmxlIGZyb20gJ2ltbXV0YWJsZSdcbmltcG9ydCBjcmVhdGVJbmRleCBmcm9tICcuL3NlY29uZGFyeUluZGV4J1xuLy8gaW1wb3J0IHF1ZXJ5RW5naW5lIGZyb20gJy4vcXVlcnlFbmdpbmUnXG5pbXBvcnQgYmFzZVF1ZXJ5IGZyb20gJy4vYmFzZVF1ZXJ5J1xuXG52YXIgYmFzZURCID0ge31cblxuYmFzZURCLnEgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBxdWVyeSA9IE9iamVjdC5jcmVhdGUoYmFzZVF1ZXJ5KVxuXG4gIHF1ZXJ5LmRiID0gdGhpc1xuICBxdWVyeS5vcHMgPSBbXVxuICBxdWVyeS5yZXN1bHRzID0gbnVsbFxuXG4gIHJldHVybiBxdWVyeVxufVxuXG52YXIgcmFtZGIgPSBmdW5jdGlvbiAoY29uZmlnID0ge30pIHtcbiAgdmFyIGRiID0gT2JqZWN0LmNyZWF0ZShiYXNlREIpXG5cbiAgZGIuY2FjaGUgPSB7fVxuICBkYi5zdG9yZSA9IHt9XG4gIGRiLmluZGV4ZXMgPSB7fVxuICBkYi5jb25maWcgPSBtZXJnZSh7XG4gICAgaW5kZXhlczoge31cbiAgfSwgY29uZmlnKVxuXG4gIE9iamVjdC5rZXlzKGRiLmNvbmZpZy5pbmRleGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleE5hbWUpIHtcbiAgICBkYi5pbmRleGVzW2luZGV4TmFtZV0gPSBjcmVhdGVJbmRleChkYi5jb25maWcuaW5kZXhlc1tpbmRleE5hbWVdKVxuICB9KVxuXG4gIHJldHVybiBkYlxufVxuXG5leHBvcnQgZGVmYXVsdCByYW1kYlxuIl19