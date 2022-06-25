const conexao = require('../../config/conexao.js')

module.exports = {
    getAllProfessores,
    getByIdProfessores,
    aiProfessores,
    deleteProfessores,    
    updateProfessores
}

function getAllProfessores(callback){
    conexao.query('select * from professores', callback)
}

function getByIdProfessores(id, callback){
    conexao.query('select * from professores where pro_codigo = ' + id, callback)
}

function aiProfessores(id, ativo, callback){
    console.log("Professores A/I.: "+ativo)

    p_sql = "update professores set pro_ativoinativo = '" + ativo + "' where pro_codigo = '" + id + "'";

    conexao.query(p_sql, function(err, result){
        conexao.query(p_sql, callback)
    })
    console.log("Retornando de A/I { MODEL }")
}

function deleteProfessores(id, callback){
    conexao.query('delete from professores where pro_codigo = ' + id, callback)
}

function updateProfessores(id, dados, callback){

   
    const p_sql = "update professores set pro_nome = '" + dados.pro_nome + 
        "', pro_ativoinativo = '" + dados.pro_ativoinativo +
        "', pro_apelido = '"      + dados.pro_apelido +
        "', pro_celular = '"         + dados.pro_celular +
        "', pro_cpf = '"     + dados.pro_cpf +
        "', pro_formacao = '"        + dados.pro_formacao +
        "', pro_anonascimento = '" + dados.pro_anonascimento +
        
        "' where pro_codigo = '" + id + "'";

    console.log("Atualizando Professores/Update \n" + p_sql);

    conexao.query(p_sql, callback)

}

