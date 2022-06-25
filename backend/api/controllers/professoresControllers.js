const models = require('../models/professoresModels.js')

module.exports = {
    professoresGetAll,
    professoresGetById,
    professoresAi,
    professoresDelete,
    professoresUpdate
    
}

function professoresGetAll(req, res) {
    console.log('Listar Professores { MODEL }')
    models.getAllProfessores(function (err, resposta) {
        console.log('Retorno de Professores { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 

}

function professoresGetById(req, res) {
    console.log('Consultar Professores { MODEL }')
    const id = req.params.codigo
    models.getByIdProfessores(id, function (err, resposta) {
        console.log('Retorno Consulta Professores { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 
}

function professoresAi(req, res) {
    const id = req.params.codigo
    let p_ativo = ""
    console.log('Ativar/Inativar Professores { MODEL } ' + id)

    models.getByIdProfessores(id, function (err, resposta) {
        console.log('Retorno Consulta Professores A/I { M O D E L }', resposta[0].pro_nome)
        console.log("Registro A/I: "+resposta[0].pro_ativoinativo)
        p_ativo = resposta[0].pro_ativoinativo
        if(err) {
            throw err
        } else {
            if(p_ativo == "A") {
                p_ativo = "I"
            } else {
                p_ativo = "A"
            }
            console.log("Registro A/I: "+p_ativo)
            models.aiProfessores(id, p_ativo, function(err, result){
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

function professoresDelete(req, res) {
    const id = req.params.codigo
    console.log('Deletar Professores { MODEL } '+id)
    models.deleteProfessores(id, function (err, resposta) {
        console.log('Retorno Delete Professores { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 
}
 
function professoresUpdate(req, res) {
    const id = req.params.codigo
    const dados = req.body;
    console.log('Atualização de Professores { MODEL } '+id)
    console.log(dados)

    models.updateProfessores(id, dados, function (err, resposta) {
        console.log('Retorno Atualização de Professores { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 
}
