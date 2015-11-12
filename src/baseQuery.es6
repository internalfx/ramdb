
import queryEngine from './queryEngine'

var baseQuery = {
  get: function (...args) {
    this.ops.push({ name: 'get', args: args })
    return this
  },

  getAll: function (...args) {
    this.ops.push({ name: 'getAll', args: args })
    return this
  },

  filter: function (...args) {
    this.ops.push({ name: 'filter', args: args })
    return this
  },

  insert: function (...args) {
    this.ops.push({ name: 'insert', args: args })
    return this
  },

  update: function (...args) {
    this.ops.push({ name: 'update', args: args })
    return this
  },

  delete: function (...args) {
    this.ops.push({ name: 'delete', args: args })
    return this
  },

  run: function () {
    return queryEngine.run(this)
  }
}

export default baseQuery
