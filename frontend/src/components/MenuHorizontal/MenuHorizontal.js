import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'

import './MenuHorizontal.css'

function MenuHorizontal() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
      <div className="menuHorizontal">
      
        <button type='button' id="btnProfessor" 
          onClick={()=>navigate('professores')} className='btn btn-primary'> Professores </button>

        <button type='button' id="btnDiciplina" 
          onClick={()=>navigate('diciplinas')} className='btn btn-secondary'> Diciplinas </button>

        <button type='button' id="btnConfig" className='btn btn-info'> Configurações </button>
        
      </div>

  );
}

export default MenuHorizontal;
