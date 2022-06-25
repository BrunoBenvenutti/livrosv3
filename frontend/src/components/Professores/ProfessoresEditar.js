import React from "react";
import Cabecalho from '../Cabecalho/Cabecalho.js'
import MenuHorizontal from '../MenuHorizontal/MenuHorizontal.js'

import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import api from "../../services/api";

import './ProfessoresEditar.css'

export default function ProfessoresEditar() {
    const navigate = useNavigate()

    const [codigo, setCodigo] = useState(0)
    const [nome, setNome] = useState('')
    const [apelido, setApelido] = useState('')
    const [celular, setCelular] = useState('')
    const [ativoInativo, setAtivo] = useState('')
    const [cpf, setCpf] = useState('')
    const [formacao, setFormacao] = useState('')
    const [anonascimento, setAnonascimento] = useState('')

    const { idProfessor } = useParams()

    useEffect(() => {
        async function getProfessores() {
            console.log('Professor: ' + idProfessor)
            if (idProfessor == 0) {
                console.log('Inclusão de registro!')
            } else {
                const { data } = await api.get('/professores/' + idProfessor)
                console.log("Retorno Editar: " + data)

                setCodigo(data[0].pro_codigo)
                setNome(data[0].pro_nome)
                setAtivo(data[0].pro_ativoinativo)
                setApelido(data[0].pro_apelido)
                setCelular(data[0].pro_celular)
                setCpf(data[0].pro_cpf)
                setFormacao(data[0].pro_formacao)
                setAnonascimento(data[0].pro_anonascimento)

            }
        }
        getProfessores()

    }, [])

    async function handleProfessores(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)

        console.log("Dados Form: " + data.pro_nome)

        try {
            if (nome.length === 0) {
                alert('Nome Vazio!')
            } else {
                if (idProfessor == 0) {
                    await api.post('professores', data)
                } else {
                    await api.put('/professores/' + idProfessor, data)
                }
                navigate('/professores')
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
                <form className="form--autor" onSubmit={handleProfessores} >
                    <div className="form-row">

                        <div className="col-md-1 offset-md-1">
                            <label>Código</label>
                            <input type='text'
                                className="form-control"
                                name="pro_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)} readOnly></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-10 offset-md-1">
                            <label>Nome do Professor</label>
                            <input type='text'
                                className="form-control"
                                name="pro_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)} maxLength='30'></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label>A/I</label>
                            <input type='text'
                                className="form-control"
                                name="pro_ativoinativo"
                                value={ativoInativo}
                                onChange={e => setAtivo(e.target.value)}></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 offset-md-1">
                            <label>Apelido do Professor</label>
                            <input type='text'
                                className="form-control"
                                name="pro_apelido"
                                value={apelido}
                                onChange={e => setApelido(e.target.value)}maxLength='10'></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-3 offset-md-1">
                            <label>Celular</label>
                            <input type='text'
                                className="form-control"
                                name="pro_celular"
                                value={celular}
                                onChange={e => setCelular(e.target.value)} maxLength='15'></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-5 offset-md-1">
                            <label>CPF do Professor</label>
                            <input type='text'
                                className="form-control"
                                name="pro_cpf"
                                value={cpf}
                                onChange={e => setCpf(e.target.value)} maxLength='15'></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-10 offset-md-1">
                            <label>Formação</label>
                            <input type='text'
                                className="form-control"
                                name="pro_formacao"
                                value={formacao}
                                onChange={e => setFormacao(e.target.value)} maxLength='20'></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-10 offset-md-1">
                            <label>Ano de Nascimento</label>
                            <input type='number'
                                className="form-control"
                                name="pro_anonascimento"
                                value={anonascimento}
                                onChange={e => setAnonascimento(e.target.value)}></input>
                        </div>
                    </div>

                    <div>
                        <button id='btnSalvar' type="onSubmit" className="btn btn-sucess btn-block">Salvar</button>
                        <button type='button' id='btnVoltar' onClick={()=>navigate('/professores')} className='btn btn-secondary'>Voltar</button>
        
                    </div>
                </form>
            </section>
        </div>
        </>        
    )
}
