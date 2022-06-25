import React from "react";
import Cabecalho from '../Cabecalho/Cabecalho.js'
import MenuHorizontal from '../MenuHorizontal/MenuHorizontal.js'

import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import api from "../../services/api";

import './DiciplinasEditar.css'

export default function DiciplinasEditar() {
    const navigate = useNavigate()

    const [codigo, setCodigo] = useState(0)
    const [ativoInativo, setAtivo] = useState('')
    const [nome, setNome] = useState('')
    const [area, setArea] = useState('')
    const [aulas, setAulas] = useState('')
    const [local, setLocal] = useState('')

    const { idDiciplina } = useParams()

    useEffect(() => {
        async function getDiciplinas() {
            console.log('Diciplina: ' + idDiciplina)
            if (idDiciplina == 0) {
                console.log('Inclusão de registro!')
            } else {
                const { data } = await api.get('/diciplinas/' + idDiciplina)
                console.log("Retorno Editar: " + data)

                setCodigo(data[0].dis_codigo)
                setAtivo(data[0].dis_ativoinativo)
                setNome(data[0].dis_nome)
                setArea(data[0].dis_area)
                setAulas(data[0].dis_aulas)
                setLocal(data[0].dis_local)

            }
        }
        getDiciplinas()

    }, [])

    async function handleDiciplinas(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)

        console.log("Dados Form: " + data.dis_nome)

        try {
            if (nome.length === 0) {
                alert('Nome Vazio!')
            } else {
                if (idDiciplina == 0) {
                    await api.post('diciplinas', data)
                } else {
//                    const caminho = ""
                    await api.put('/diciplinas/' + idDiciplina, data)
                }
                navigate('/diciplinas')
            }
        } catch (error) {
            alert('Erro ao gravar...verifique!')
        }
    }

    return (
        <>
        <Cabecalho />
        <MenuHorizontal />
        
        <div>
            <section className="sectionTable">
                <form className="form--autor" onSubmit={handleDiciplinas} >
                    <div className="form-row">

                        <div className="col-md-1 offset-md-1">
                            <label>Código</label>
                            <input type='text'
                                className="form-control"
                                name="dis_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)} readOnly></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label>A/I</label>
                            <input type='text'
                                className="form-control"
                                name="dis_ativoinativo"
                                value={ativoInativo}
                                onChange={e => setAtivo(e.target.value)}></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-10 offset-md-1">
                            <label>Nome da Diciplina</label>
                            <input type='text'
                                className="form-control"
                                name="dis_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)} maxLength='20'></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 offset-md-1">
                            <label>Área</label>
                            <input type='text'
                                className="form-control"
                                name="dis_area"
                                value={area}
                                onChange={e => setArea(e.target.value)}></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label>Horas Aula</label>
                            <input type='text'
                                className="form-control"
                                name="dis_aulas"
                                value={aulas}
                                onChange={e => setAulas(e.target.value)}></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-3 offset-md-1">
                            <label>Local</label>
                            <input type='text'
                                className="form-control"
                                name="dis_local"
                                value={local}
                                onChange={e => setLocal(e.target.value)}></input>
                        </div>
                    </div>

                    <div>
                        <button id='btnSalvar' type="onSubmit" className="btn btn-sucess">Salvar</button>
                        <button type='button' id='btnVoltar' onClick={()=>navigate('/diciplinas')} className='btn btn-secondary'>Voltar</button>
        
                    </div>
                </form>
            </section>
        </div>
        </>        
    )
}
