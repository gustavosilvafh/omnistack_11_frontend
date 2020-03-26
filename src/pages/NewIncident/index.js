import React from 'react';
import './styles.css';
import logoImage from '../../assets/img/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';

export default function NewIncident() {
    return(
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Logo Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para Home
                    </Link>
                </section>

                <form action="">
                    <input placeholder="Título do caso"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Valor em reais"/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}