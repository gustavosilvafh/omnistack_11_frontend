import React from 'react';
import './styles.css';
import logoImage from '../../assets/img/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';


export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Logo Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Já possuo cadastro
                    </Link>
                </section>

                <form action="">
                    <input placeholder="Nome da Ong"/>
                    <input type="email" placeholder="E-email"/>
                    <input placeholder="WhatsApp"/>
                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width: 80 }}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}