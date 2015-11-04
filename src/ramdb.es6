
var BaseQuery = {

  filter: function () {

  },

  run: function () {

  }

}

var BaseDB = {

  query: function () {
    var query = Object.create(BaseQuery)

    query.db = this
    query.ops = []

    return query
  }

}

var ramdb = function (config = {}) {
  var db = Object.create(BaseDB)
  return db
}

export default ramdb
