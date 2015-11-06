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

  get: function get() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.ops.push({
      op: 'get',
      args: args
    });

    return this;
  },

  getAll: function getAll() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    this.ops.push({
      op: 'getAll',
      args: args
    });

    return this;
  },

  filter: function filter() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    this.ops.push({
      op: 'filter',
      args: args
    });

    return this;
  },

  update: function update() {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    this.ops.push({
      op: 'update',
      args: args
    });

    return this;
  },

  delete: function _delete() {
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
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
//# sourceMappingURL=data:application/json;base64,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QVMsQ0FBQyxDQUFBO0FBQ25DLGFBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7T0FDekIsQ0FBQyxDQUFBO0tBQ0gsQ0FBQyxDQUFBO0dBQ0g7O0NBRUYsQ0FBQTs7QUFFRCxJQUFJLEtBQUssR0FBRyxTQUFSLEtBQUssR0FBMEI7TUFBYixNQUFNLHlEQUFHLEVBQUU7O0FBQy9CLE1BQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7O0FBRTlCLElBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO0FBQ2IsSUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUE7QUFDZixJQUFFLENBQUMsTUFBTSxHQUFHLHFCQUFNLEVBRWpCLEVBQUUsTUFBTSxDQUFDLENBQUE7O0FBRVYsSUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyw4QkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7O0FBRXRDLFNBQU8sRUFBRSxDQUFBO0NBQ1YsQ0FBQTs7a0JBRWMsS0FBSyIsImZpbGUiOiJyYW1kYi5lczYiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBtZXJnZSBmcm9tICdtb3V0L29iamVjdC9tZXJnZSdcbmltcG9ydCBpc0FycmF5IGZyb20gJ21vdXQvbGFuZy9pc0FycmF5J1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tICdpbW11dGFibGUnXG5pbXBvcnQgY3JlYXRlSW5kZXggZnJvbSAnLi9zZWNvbmRhcnlJbmRleCdcbmltcG9ydCBxdWVyeUVuZ2luZSBmcm9tICcuL3F1ZXJ5RW5naW5lJ1xuXG52YXIgQmFzZVF1ZXJ5ID0ge1xuXG4gIGdldDogZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICB0aGlzLm9wcy5wdXNoKHtcbiAgICAgIG9wOiAnZ2V0JyxcbiAgICAgIGFyZ3M6IGFyZ3NcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcblxuICBnZXRBbGw6IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgdGhpcy5vcHMucHVzaCh7XG4gICAgICBvcDogJ2dldEFsbCcsXG4gICAgICBhcmdzOiBhcmdzXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzXG4gIH0sXG5cbiAgZmlsdGVyOiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIHRoaXMub3BzLnB1c2goe1xuICAgICAgb3A6ICdmaWx0ZXInLFxuICAgICAgYXJnczogYXJnc1xuICAgIH0pXG5cbiAgICByZXR1cm4gdGhpc1xuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICB0aGlzLm9wcy5wdXNoKHtcbiAgICAgIG9wOiAndXBkYXRlJyxcbiAgICAgIGFyZ3M6IGFyZ3NcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcblxuICBkZWxldGU6IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgdGhpcy5vcHMucHVzaCh7XG4gICAgICBvcDogJ2RlbGV0ZScsXG4gICAgICBhcmdzOiBhcmdzXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzXG4gIH0sXG5cbiAgcnVuOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHF1ZXJ5RW5naW5lLnJ1bih0aGlzKVxuICB9XG5cbn1cblxudmFyIEJhc2VEQiA9IHtcblxuICBxdWVyeTogZnVuY3Rpb24gKCkge1xuICAgIHZhciBxdWVyeSA9IE9iamVjdC5jcmVhdGUoQmFzZVF1ZXJ5KVxuXG4gICAgcXVlcnkuZGIgPSB0aGlzXG4gICAgcXVlcnkub3BzID0gW11cbiAgICBxdWVyeS5yZXN1bHQgPSBudWxsXG5cbiAgICByZXR1cm4gcXVlcnlcbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgaWYgKCFkYXRhLmlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lkIHByb3BlcnR5IGlzIHJlcXVpcmVkLicpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RvcmVbZGF0YS5pZF0pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNBcnJheShkYXRhKSkge1xuICAgICAgZGF0YSA9IFtkYXRhXVxuICAgIH1cblxuICAgIGxldCBpbmRleExpc3QgPSBPYmplY3Qua2V5cyh0aGlzLmluZGV4ZXMpXG5cbiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgcmVjb3JkID0gSW1tdXRhYmxlLmZyb21KUyhyZWNvcmQpXG4gICAgICB0aGlzLnN0b3JlW2RhdGEuaWRdID0gZGF0YVxuICAgICAgaW5kZXhMaXN0LmZvckVhY2goZnVuY3Rpb24gKGluZGV4TmFtZSkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmluZGV4ZXNbaW5kZXhOYW1lXVxuICAgICAgICBpbmRleC5pbnNlcnRSZWNvcmQoZGF0YSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG59XG5cbnZhciByYW1kYiA9IGZ1bmN0aW9uIChjb25maWcgPSB7fSkge1xuICB2YXIgZGIgPSBPYmplY3QuY3JlYXRlKEJhc2VEQilcblxuICBkYi5zdG9yZSA9IHt9XG4gIGRiLmluZGV4ZXMgPSB7fVxuICBkYi5jb25maWcgPSBtZXJnZSh7XG5cbiAgfSwgY29uZmlnKVxuXG4gIGRiLmluZGV4ZXNbJ2lkJ10gPSBjcmVhdGVJbmRleChbJ2lkJ10pXG5cbiAgcmV0dXJuIGRiXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJhbWRiXG4iXX0=