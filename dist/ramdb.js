'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge = require('mout/object/merge');

var _merge2 = _interopRequireDefault(_merge);

var _isArray = require('mout/lang/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _secondaryIndex = require('./secondaryIndex');

var _secondaryIndex2 = _interopRequireDefault(_secondaryIndex);

var _queryEngine = require('./queryEngine');

var _queryEngine2 = _interopRequireDefault(_queryEngine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseQuery = {

  getAll: function getAll() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.ops.push({
      op: 'getAll',
      args: args
    });

    return this;
  },

  filter: function filter() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    this.ops.push({
      op: 'filter',
      args: args
    });

    return this;
  },

  update: function update() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    this.ops.push({
      op: 'update',
      args: args
    });

    return this;
  },

  delete: function _delete() {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    this.ops.push({
      op: 'delete',
      args: args
    });

    return this;
  },

  run: function run() {
    return _queryEngine2.default.run(this);
  }

};

var BaseDB = {

  query: function query() {
    var query = Object.create(BaseQuery);

    query.db = this;
    query.ops = [];
    query.result = null;

    return query;
  },

  insert: function insert(data) {
    if (!data.id) {
      throw new Error('id property is required.');
    }

    if (this.store[data.id]) {
      return;
    }

    if (!(0, _isArray2.default)(data)) {
      data = [data];
    }

    var indexList = Object.keys(this.indexes);

    data.forEach(function (record) {
      record = _immutable2.default.fromJS(record);
      this.store[data.id] = data;
      indexList.forEach(function (indexName) {
        var index = this.indexes[indexName];
        index.insertRecord(data);
      });
    });
  }

};

var ramdb = function ramdb() {
  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var db = Object.create(BaseDB);

  db.store = {};
  db.indexes = {};
  db.config = (0, _merge2.default)({}, config);

  db.indexes['id'] = (0, _secondaryIndex2.default)(['id']);

  return db;
};

exports.default = ramdb;
//# sourceMappingURL=data:application/json;base64,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Qy9CLE1BQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7O0FBRTlCLElBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO0FBQ2IsSUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUE7QUFDZixJQUFFLENBQUMsTUFBTSxHQUFHLHFCQUFNLEVBRWpCLEVBQUUsTUFBTSxDQUFDLENBQUE7O0FBRVYsSUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyw4QkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7O0FBRXRDLFNBQU8sRUFBRSxDQUFBO0NBQ1YsQ0FBQTs7a0JBRWMsS0FBSyIsImZpbGUiOiJyYW1kYi5lczYiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBtZXJnZSBmcm9tICdtb3V0L29iamVjdC9tZXJnZSdcbmltcG9ydCBpc0FycmF5IGZyb20gJ21vdXQvbGFuZy9pc0FycmF5J1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tICdpbW11dGFibGUnXG5pbXBvcnQgY3JlYXRlSW5kZXggZnJvbSAnLi9zZWNvbmRhcnlJbmRleCdcbmltcG9ydCBxdWVyeUVuZ2luZSBmcm9tICcuL3F1ZXJ5RW5naW5lJ1xuXG52YXIgQmFzZVF1ZXJ5ID0ge1xuXG4gIGdldEFsbDogZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICB0aGlzLm9wcy5wdXNoKHtcbiAgICAgIG9wOiAnZ2V0QWxsJyxcbiAgICAgIGFyZ3M6IGFyZ3NcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcblxuICBmaWx0ZXI6IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgdGhpcy5vcHMucHVzaCh7XG4gICAgICBvcDogJ2ZpbHRlcicsXG4gICAgICBhcmdzOiBhcmdzXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzXG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIHRoaXMub3BzLnB1c2goe1xuICAgICAgb3A6ICd1cGRhdGUnLFxuICAgICAgYXJnczogYXJnc1xuICAgIH0pXG5cbiAgICByZXR1cm4gdGhpc1xuICB9LFxuXG4gIGRlbGV0ZTogZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICB0aGlzLm9wcy5wdXNoKHtcbiAgICAgIG9wOiAnZGVsZXRlJyxcbiAgICAgIGFyZ3M6IGFyZ3NcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcblxuICBydW46IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcXVlcnlFbmdpbmUucnVuKHRoaXMpXG4gIH1cblxufVxuXG52YXIgQmFzZURCID0ge1xuXG4gIHF1ZXJ5OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHF1ZXJ5ID0gT2JqZWN0LmNyZWF0ZShCYXNlUXVlcnkpXG5cbiAgICBxdWVyeS5kYiA9IHRoaXNcbiAgICBxdWVyeS5vcHMgPSBbXVxuICAgIHF1ZXJ5LnJlc3VsdCA9IG51bGxcblxuICAgIHJldHVybiBxdWVyeVxuICB9LFxuXG4gIGluc2VydDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEuaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaWQgcHJvcGVydHkgaXMgcmVxdWlyZWQuJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdG9yZVtkYXRhLmlkXSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhID0gW2RhdGFdXG4gICAgfVxuXG4gICAgbGV0IGluZGV4TGlzdCA9IE9iamVjdC5rZXlzKHRoaXMuaW5kZXhlcylcblxuICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICByZWNvcmQgPSBJbW11dGFibGUuZnJvbUpTKHJlY29yZClcbiAgICAgIHRoaXMuc3RvcmVbZGF0YS5pZF0gPSBkYXRhXG4gICAgICBpbmRleExpc3QuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXhOYW1lKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuaW5kZXhlc1tpbmRleE5hbWVdXG4gICAgICAgIGluZGV4Lmluc2VydFJlY29yZChkYXRhKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbn1cblxudmFyIHJhbWRiID0gZnVuY3Rpb24gKGNvbmZpZyA9IHt9KSB7XG4gIHZhciBkYiA9IE9iamVjdC5jcmVhdGUoQmFzZURCKVxuXG4gIGRiLnN0b3JlID0ge31cbiAgZGIuaW5kZXhlcyA9IHt9XG4gIGRiLmNvbmZpZyA9IG1lcmdlKHtcblxuICB9LCBjb25maWcpXG5cbiAgZGIuaW5kZXhlc1snaWQnXSA9IGNyZWF0ZUluZGV4KFsnaWQnXSlcblxuICByZXR1cm4gZGJcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmFtZGJcbiJdfQ==