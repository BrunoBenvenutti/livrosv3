import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Geral from './components/Geral/Geral.js';

import Professores from './components/Professores/Professores';
import ProfessoresEditar from './components/Professores/ProfessoresEditar.js';

import Diciplinas from './components/Diciplinas/Diciplinas.js';
import DiciplinasEditar from './components/Diciplinas/DiciplinasEditar.js'

export default function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Geral />} />

            <Route exact path="/professores" element={<Professores />} />
            <Route exact path="/professores/:idProfessor" element={<ProfessoresEditar />} />

            <Route exact path="/diciplinas" element={<Diciplinas />} />
            <Route exact path="/diciplinas/:idDiciplina" element={<DiciplinasEditar />} />
        </Routes>
    );
}

