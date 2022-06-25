import React from "react";
import { useEffect, useState } from "react";
import api from '../../services/api.js'

import './Diciplinas.css'

function Diciplinas() {
  const [diciplinas, setDiciplinas] = useState([])

  useEffect(() => {
    api.get('diciplinas')
      .then(response => setDiciplinas(response.data));

  }, []
  )

  return (
    <>
    
  
      <legend id='legenda'>Registros de Diciplinas Cadastrados</legend>
      <table border="1" className="table table-responsive">
      
          <thead>
            <tr id="titulo">
              <th id="t_codigo">Cod</th>
              <th id="t_ativo">A/I</th>
              <th id="t_nome">Nome da Diciplina</th>
              <th id="t_area">Área</th>
              <th id="t_aulas">Hora Aula Semanal</th>
              <th id="t_local">Local</th>

              <th id="novo" scope="col"><a href={'/diciplinas/0'} className="btn btn-success btn-block">Nova Diciplina</a> </th>
              <th></th>
            </tr>
          </thead>
        
          <tbody className="tabela">
            {diciplinas.map((item, i) => {
              return (
                <>
                  <tr>
                    <td id="p_codigo">{item.dis_codigo}</td>
                    <td id="p_ativo">{item.dis_ativoinativo}</td>
                    <td id="p_nome">{item.dis_nome}</td>
                    <td id="p_area">{item.dis_area}</td>
                    <td id="p_aulas">{item.dis_aulas}</td>
                    <td id="p_local">{item.dis_local}</td>

                    <td id="editar"> <a className="btn btn-primary btn-block" href={'/diciplinas/'+item.dis_codigo}>Editar</a> </td>
                    <td id="ativar"> <a className="btn btn-danger btn-block">Ativar/Inativar</a> </td>
                  </tr>
                </>
              )
            })}
          </tbody>
          <tfoot>
            <tr id="registros">
              <td>Total de Registros: {diciplinas.length}</td>
            </tr>
          </tfoot>
      

    </table>
  </>

  );

}

export default Diciplinas;

