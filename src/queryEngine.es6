
import omit from 'mout/object/omit'
import isObject from 'mout/lang/isObject'
import isArray from 'mout/lang/isArray'

var queryEngine = {
  run: function (query) {
    console.log(query)

    query.ops.forEach(function (operation, idx) {
      if (queryEngine[operation.name]) {
        queryEngine[operation.name](query, idx, operation.args)
      } else {
        throw new Error('Invalid operation')
      }
    })

    return query.results
  },

  // Query openers
  insert: function (data) {
    if (!isArray(data)) {
      data = [data]
    }

    let indexList = Object.keys(this.indexes)

    data.forEach((record) => {
      if (this.store[record.id]) {
        return
      }

      record = Immutable.fromJS(record)

      let id = record.get('id')

      if (!id) {
        throw new Error('id property is required.')
      }

      this.cache[id] = record
      this.store[id] = record
      indexList.forEach((indexName) => {
        let index = this.indexes[indexName]
        index.insertRecord(record)
      })
    })

    // return
  },

  get: function (query, idx, args) {
    if (idx !== 0) {
      throw new Error('Get must be called first in a query.')
    }

    let record = query.db.store[args[0]]

    if (record) {
      query.results = record
    }
  },

  getAll: function (query, idx, args) {
    if (idx !== 0) {
      throw new Error('GetAll must be called first in a query.')
    }

    console.log(args)

    // let record = query.db.store[args[0]]

    query.results = []
  },

  // Query closers
  update: function (query, idx, args) {
    let results = query.result
    let changes = args[0]

    if (!isArray(results)) {
      results = [results]
    }

    results.forEach(function (record) {
      query.db.store[record.get('id')] = record.mergeDeep(omit(changes, 'id'))
    })
  }
}

export default queryEngine
