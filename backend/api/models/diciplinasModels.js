const conexao = require('../../config/conexao.js')

module.exports = {
    getAllDiciplinas,
    getByIdDiciplinas,
    aiDiciplinas,
    deleteDiciplinas,    
    updateDiciplinas
}

function getAllDiciplinas(callback){
    conexao.query('select * from diciplinas', callback)
}

function getByIdDiciplinas(id, callback){
    conexao.query('select * from diciplinas where dis_codigo = ' + id, callback)
}

function aiDiciplinas(id, ativo, callback){
    console.log("Diciplinas A/I.: "+ativo)

    p_sql = "update diciplinas set dis_ativoinativo = '" + ativo + "' where dis_codigo = '" + id + "'";

    conexao.query(p_sql, function(err, result){
        conexao.query(p_sql, callback)
    })
    console.log("Retornando de A/I { MODEL }")
}

function deleteDiciplinas(id, callback){
    conexao.query('delete from diciplinas where dis_codigo = ' + id, callback)
}

function updateDiciplinas(id, dados, callback){

   
    const p_sql = "update diciplinas set dis_nome = '" + dados.dis_nome + 
        "', dis_ativoinativo = '" + dados.dis_ativoinativo +
        "', dis_apelido = '"      + dados.dis_apelido +
        "', dis_sexo = '"         + dados.dis_sexo +
        "', dis_telefone = '"     + dados.dis_telefone +
        "', dis_email = '"        + dados.dis_email +
        
        "' where dis_codigo = '" + id + "'";

    console.log("Atualizando Diciplinas/Update \n" + p_sql);

    conexao.query(p_sql, callback)

}

