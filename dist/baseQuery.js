'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _queryEngine = require('./queryEngine');

var _queryEngine2 = _interopRequireDefault(_queryEngine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseQuery = {
  get: function get() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.ops.push({ name: 'get', args: args });
    return this;
  },

  getAll: function getAll() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    this.ops.push({ name: 'getAll', args: args });
    return this;
  },

  filter: function filter() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    this.ops.push({ name: 'filter', args: args });
    return this;
  },

  insert: function insert() {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    this.ops.push({ name: 'insert', args: args });
    return this;
  },

  update: function update() {
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    this.ops.push({ name: 'update', args: args });
    return this;
  },

  delete: function _delete() {
    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    this.ops.push({ name: 'delete', args: args });
    return this;
  },

  run: function run() {
    return _queryEngine2.default.run(this);
  }
};

exports.default = baseQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2VRdWVyeS5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBR0EsSUFBSSxTQUFTLEdBQUc7QUFDZCxLQUFHLEVBQUUsZUFBbUI7c0NBQU4sSUFBSTtBQUFKLFVBQUk7OztBQUNwQixRQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7QUFDMUMsV0FBTyxJQUFJLENBQUE7R0FDWjs7QUFFRCxRQUFNLEVBQUUsa0JBQW1CO3VDQUFOLElBQUk7QUFBSixVQUFJOzs7QUFDdkIsUUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQzdDLFdBQU8sSUFBSSxDQUFBO0dBQ1o7O0FBRUQsUUFBTSxFQUFFLGtCQUFtQjt1Q0FBTixJQUFJO0FBQUosVUFBSTs7O0FBQ3ZCLFFBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUM3QyxXQUFPLElBQUksQ0FBQTtHQUNaOztBQUVELFFBQU0sRUFBRSxrQkFBbUI7dUNBQU4sSUFBSTtBQUFKLFVBQUk7OztBQUN2QixRQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7QUFDN0MsV0FBTyxJQUFJLENBQUE7R0FDWjs7QUFFRCxRQUFNLEVBQUUsa0JBQW1CO3VDQUFOLElBQUk7QUFBSixVQUFJOzs7QUFDdkIsUUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQzdDLFdBQU8sSUFBSSxDQUFBO0dBQ1o7O0FBRUQsUUFBTSxFQUFFLG1CQUFtQjt1Q0FBTixJQUFJO0FBQUosVUFBSTs7O0FBQ3ZCLFFBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUM3QyxXQUFPLElBQUksQ0FBQTtHQUNaOztBQUVELEtBQUcsRUFBRSxlQUFZO0FBQ2YsV0FBTyxzQkFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7R0FDN0I7Q0FDRixDQUFBOztrQkFFYyxTQUFTIiwiZmlsZSI6ImJhc2VRdWVyeS5lczYiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBxdWVyeUVuZ2luZSBmcm9tICcuL3F1ZXJ5RW5naW5lJ1xuXG52YXIgYmFzZVF1ZXJ5ID0ge1xuICBnZXQ6IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgdGhpcy5vcHMucHVzaCh7IG5hbWU6ICdnZXQnLCBhcmdzOiBhcmdzIH0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcblxuICBnZXRBbGw6IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgdGhpcy5vcHMucHVzaCh7IG5hbWU6ICdnZXRBbGwnLCBhcmdzOiBhcmdzIH0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcblxuICBmaWx0ZXI6IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgdGhpcy5vcHMucHVzaCh7IG5hbWU6ICdmaWx0ZXInLCBhcmdzOiBhcmdzIH0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgdGhpcy5vcHMucHVzaCh7IG5hbWU6ICdpbnNlcnQnLCBhcmdzOiBhcmdzIH0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgdGhpcy5vcHMucHVzaCh7IG5hbWU6ICd1cGRhdGUnLCBhcmdzOiBhcmdzIH0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcblxuICBkZWxldGU6IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgdGhpcy5vcHMucHVzaCh7IG5hbWU6ICdkZWxldGUnLCBhcmdzOiBhcmdzIH0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcblxuICBydW46IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcXVlcnlFbmdpbmUucnVuKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVF1ZXJ5XG4iXX0=