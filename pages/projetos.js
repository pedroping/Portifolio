import styles from '../styles/Home.module.css'
import h_styles from '../styles/Habilidades.module.css'
import Navibar from '../comps/Navibar'
import Navifooter from '../comps/Navifooter'
import Link from 'next/link'
import projeto from '../styles/Projeto.module.css'
import React from 'react'
import Modal from '../comps/Modal'
import { useState, useEffect } from "react";
import  ReactDOM from "react-dom";

function Sobremimpage() {
  const [showModal, setShowModal] = useState(false);

  const [isMain, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(false);
    }, []);


  return (
    <div>
      <Navibar />
      <div className={projeto.container}>
      <a className={projeto.titulo}>Projetos</a>
        <div className={projeto.caixas}></div>
          <div className={projeto.caixa}>
              <h4>Estágio</h4>
              <img src='/projeto_estagio.png' alt=""></img>
              <button onClick={() => setShowModal(true)} className={projeto.button1}>
                Descrição
              </button>
              <Modal show={showModal} onClose={() => setShowModal(false)}>
                <img src='/projeto_estagio.png' className={projeto.img}></img>
                <a>
                  O objetivo do estágio foi construir um portal de acervo para exibição de publicações 
                  e imagens acadêmicas indígenas. Para isso tive que atuar na parte técnica escolha de tecnologias, arquitetura, etc. 
                  e na parte prática: aprimorar o uso de frameworks back-end e front-end, aprender noções de segurança na web e 
                  as desenvolver na prática, criação de cruds 
                  e dashboards e participar vários estágios do desenvolvimento: planejar, programar, testar, revisar, refatoramento,
                </a>
              </Modal>
          </div>
      </div>
      <Navifooter />
    </div>
  )
}

export default Sobremimpage;
