const pino = require('pino')

function Stack(options = {}) {
  this.logger = pino({name: 'Stack', level: options.level ?? 'info' })
  this.data = []
}

Stack.prototype.push = function(item) {
  this.logger.debug({item, before: this.data}, 'Pushing new item to stack')
  this.data[this.data.length] = item
  this.logger.debug({item, before: this.data}, 'Pushed new item to stack')
  // this.data.push(item)
}

Stack.prototype.pop = function() {
  if (this.isEmpty()) {
    this.logger.warn('Stack is empty')
    return
  }
  const lastItem = this.data[this.data.length - 1]
  this.data = this.data.splice(0, this.data.length-1)
  this.logger.debug({item: lastItem, after: this.data}, 'Popped last item from stack')
  return lastItem
}

Stack.prototype.size = function() {
  return this.data.length
}

Stack.prototype.isEmpty = function() {
  return this.data.length === 0
}



module.exports = Stack
