const controllers = require('../controllers/diciplinasControllers.js')

server.get('/diciplinas', controllers.diciplinasGetAll)

server.get('/diciplinas/:codigo', controllers.diciplinasGetById)

server.get('/diciplinas/ai/:codigo', controllers.diciplinasAi)

server.delete('/diciplinas/:codigo', controllers.diciplinasDelete)

server.put('/diciplinas/:codigo', controllers.diciplinasUpdate)


