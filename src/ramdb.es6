
import merge from 'mout/object/merge'
// import isArray from 'mout/lang/isArray'
// import Immutable from 'immutable'
import createIndex from './secondaryIndex'
// import queryEngine from './queryEngine'
import baseQuery from './baseQuery'

var baseDB = {}

baseDB.q = function () {
  var query = Object.create(baseQuery)

  query.db = this
  query.ops = []
  query.results = null

  return query
}

var ramdb = function (config = {}) {
  var db = Object.create(baseDB)

  db.cache = {}
  db.store = {}
  db.indexes = {}
  db.config = merge({
    indexes: {}
  }, config)

  Object.keys(db.config.indexes).forEach(function (indexName) {
    db.indexes[indexName] = createIndex(db.config.indexes[indexName])
  })

  return db
}

export default ramdb
