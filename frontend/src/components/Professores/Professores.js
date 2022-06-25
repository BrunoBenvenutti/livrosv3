import React from "react";
import { useEffect, useState } from "react";
import api from '../../services/api.js'

import './Professores.css'

function Professores() {
  const [professores, setProfessores] = useState([])

  useEffect(() => {
    api.get('professores')
      .then(response => setProfessores(response.data));

  }, []
  )

  return (
    <>
    
  
      <legend id='legenda'>Registros de Professores Cadastrados</legend>
      <table border="1" className="table table-responsive">
      
          <thead>
            <tr id="titulo">
              <th id="t_codigo">Cod</th>
              <th id="t_ativo">A/I</th>
              <th id="t_nome">Nome do Professor</th>
              <th id="t_apelido">Apelido</th>
              <th id="t_celular">Celular</th>
              <th id="t_cpf">CPF</th>
              <th id="t_formacao">Formação</th>
              <th id="t_anonascimento">Ano de Nascimento</th>

              <th id="novo" scope="col"><a href={'/professores/0'} className="btn btn-success btn-block">Novo Professor</a> </th>
              <th></th>
            </tr>
          </thead>
        
          <tbody className="tabela">
            {professores.map((item, i) => {
              return (
                <>
                  <tr>
                    <td id="p_codigo">{item.pro_codigo}</td>
                    <td id="p_ativo">{item.pro_ativoinativo}</td>
                    <td id="p_nome">{item.pro_nome}</td>
                    <td id="p_apelido">{item.pro_apelido}</td>
                    <td id="p_celular">{item.pro_celular}</td>
                    <td id="p_cpf">{item.pro_cpf}</td>
                    <td id="p_formacao">{item.pro_formacao}</td>
                    <td id="p_anonascimento">{item.pro_anonascimento}</td>

                    <td id="editar"> <a className="btn btn-primary btn-block" href={'/professores/'+item.pro_codigo}>Editar</a> </td>
                    <td id="ativar"> <a className="btn btn-danger btn-block">Ativar/Inativar</a> </td>
                  </tr>
                </>
              )
            })}
          </tbody>
          <tfoot>
            <tr id="registros">
              <td>Total de Registros: {professores.length}</td>
            </tr>
          </tfoot>
      

    </table>
  </>

  );

}

export default Professores;

