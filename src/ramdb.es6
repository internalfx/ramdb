
import merge from 'mout/object/merge'
import isArray from 'mout/lang/isArray'
import Immutable from 'immutable'
import createIndex from './secondaryIndex'
import queryEngine from './queryEngine'

var BaseQuery = {

  get: function (...args) {
    this.ops.push({
      op: 'get',
      args: args
    })

    return this
  },

  getAll: function (...args) {
    this.ops.push({
      op: 'getAll',
      args: args
    })

    return this
  },

  filter: function (...args) {
    this.ops.push({
      op: 'filter',
      args: args
    })

    return this
  },

  update: function (...args) {
    this.ops.push({
      op: 'update',
      args: args
    })

    return this
  },

  delete: function (...args) {
    this.ops.push({
      op: 'delete',
      args: args
    })

    return this
  },

  run: function () {
    return queryEngine.run(this)
  }

}

var BaseDB = {

  query: function () {
    var query = Object.create(BaseQuery)

    query.db = this
    query.ops = []
    query.result = null

    return query
  },

  insert: function (data) {
    if (!data.id) {
      throw new Error('id property is required.')
    }

    if (this.store[data.id]) {
      return
    }

    if (!isArray(data)) {
      data = [data]
    }

    let indexList = Object.keys(this.indexes)

    data.forEach(function (record) {
      record = Immutable.fromJS(record)
      this.store[data.id] = data
      indexList.forEach(function (indexName) {
        let index = this.indexes[indexName]
        index.insertRecord(data)
      })
    })
  }

}

var ramdb = function (config = {}) {
  var db = Object.create(BaseDB)

  db.store = {}
  db.indexes = {}
  db.config = merge({

  }, config)

  db.indexes['id'] = createIndex(['id'])

  return db
}

export default ramdb
