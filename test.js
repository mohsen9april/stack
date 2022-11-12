const Stack = require('./index')
const logger = require('pino')({name: 'Main', level: 'debug'})

const s = new Stack({level: 'info'})
s.push('behrad')
s.push('jafar')

const item = s.pop()
s.push('Ali')
const item2 = s.pop()
const obj = {
  name: 'behrad',
  age: 46
}
logger.info({item}, 'First pop')
logger.info({item2}, 'Second pop')
logger.info({size: s.size()}, 'Current Size')
