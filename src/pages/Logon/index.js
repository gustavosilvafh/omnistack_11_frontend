import React from 'react';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import herosImg from '../../assets/img/heroes.png';
import logoImage from '../../assets/img/logo.svg'

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Logo Be The Hero"/>

                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua id"/>
                    <button className="button" type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </a>
                </form>
            </section>

            <img src={herosImg} alt="Heroes"/>
        </div>
    );
}