const models = require('../models/diciplinasModels.js')

module.exports = {
    diciplinasGetAll,
    diciplinasGetById,
    diciplinasAi,
    diciplinasDelete,
    diciplinasUpdate    
    
}

function diciplinasGetAll(req, res) {
    console.log('Listar Diciplinas { MODEL }')
    models.getAllDiciplinas(function (err, resposta) {
        console.log('Retorno de Diciplinas { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 

}

function diciplinasGetById(req, res) {
    console.log('Consultar Diciplinas { MODEL }')
    const id = req.params.codigo
    models.getByIdDiciplinas(id, function (err, resposta) {
        console.log('Retorno Consulta Diciplinas { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 
}


function diciplinasAi(req, res) {
    const id = req.params.codigo
    let p_ativo = ""
    console.log('Ativar/Inativar Diciplinas { MODEL } ' + id)

    models.getByIdAutores(id, function (err, resposta) {
        console.log('Retorno Consulta Diciplinas A/I { M O D E L }', resposta[0].dis_nome)
        console.log("Registro A/I: "+resposta[0].dis_ativoinativo)
        p_ativo = resposta[0].dis_ativoinativo
        if(err) {
            throw err
        } else {
            if(p_ativo == "A") {
                p_ativo = "I"
            } else {
                p_ativo = "A"
            }
            console.log("Registro A/I: "+p_ativo)
            models.aiDiciplinas(id, p_ativo, function(err, result){
                if(err){
                    throw err
                }else {
                    console.log("Processo A/I realizado com sucesso!")
                }
            })
            res.json(resposta)
        }
    }) 

}

function diciplinasDelete(req, res) {
    const id = req.params.codigo
    console.log('Deletar Diciplinas { MODEL } '+id)
    models.deleteDiciplinas(id, function (err, resposta) {
        console.log('Retorno Delete Diciplinas { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 
}
 
function diciplinasUpdate(req, res) {
    const id = req.params.codigo
    const dados = req.body;
    console.log('Atualização de Diciplinas { MODEL } '+id)
    console.log(dados)

    models.updateDiciplinas(id, dados, function (err, resposta) {
        console.log('Retorno Atualização de Diciplinas { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 
}
