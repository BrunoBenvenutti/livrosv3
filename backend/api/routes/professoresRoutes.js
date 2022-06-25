const controllers = require('../controllers/professoresControllers.js')

server.get('/professores', controllers.professoresGetAll)

server.get('/professores/:codigo', controllers.professoresGetById)

server.get('/professores/ai/:codigo', controllers.professoresAi)

server.delete('/professores/:codigo', controllers.professoresDelete)

server.put('/professores/:codigo', controllers.professoresUpdate)


