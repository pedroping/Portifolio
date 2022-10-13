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
import Router from 'next/router'
import Image from 'next/image'


function teste() {
  const [showModal, setShowModal] = useState(false);

  const [isMain, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(false);
    }, []);
  function mudar_page() {
    Router.push({
      pathname: '/projetos'
    });
    setShowModal(true)
  }

  return (
    <div>
      <div className={projeto.container}>
      <a className={projeto.titulo}>Projetos</a>
        <div className={projeto.caixas}></div>
          <div className={projeto.caixa}>
              <h4>Estágio</h4>
              <Image src='/projeto_estagio.PNG' width= "500px" height= "300px"></Image>
              <button onClick={() => {mudar_page()}} className={projeto.button1}>
                Dethales
              </button>
              <Modal show={showModal} onClose={() => setShowModal(false)}>
                <Image src='/projeto_estagio.PNG' width= "50px" height= "250px" className={projeto.img}></Image>
                <a className={projeto.texto}>
                  O objetivo do estágio foi construir um portal de acervo para exibição de publicações 
                  e imagens acadêmicas indígenas. Para isso tive que atuar na parte técnica escolha de tecnologias, arquitetura, etc. 
                  e na parte prática: aprimorar o uso de frameworks back-end e front-end, aprender noções de segurança na web e 
                  as desenvolver na prática, criação de cruds 
                  e dashboards e participar vários estágios do desenvolvimento: planejar, programar, testar, revisar, refatoramento
                </a>
                <a href="https://www.portaltingui.com.br" target="_blank" className={projeto.link}>Acesso ao site</a>
              </Modal>
          </div>
          <div className={projeto.caixa}>
              <h4>Discografia</h4>
              <Image src='/discografia.png' width= "500px" height= "300px" alt=""></Image>
              <button onClick={() => {mudar_page()}} className={projeto.button1}>
                Detalhes
              </button>
              <Modal show={showModal} onClose={() => setShowModal(false)}>
                <Image src='/discografia.png' width= "500px" height= "300px" className={projeto.img} alt=""></Image>
                <a>
                <br/><br/>
                  O objetivo do estágio foi construir um portal de acervo para exibição de publicações 
                  e imagens acadêmicas indígenas. Para isso tive que atuar na parte técnica escolha de tecnologias, arquitetura, etc. 
                  e na parte prática: aprimorar o uso de frameworks back-end e front-end, aprender noções de segurança na web e 
                  as desenvolver na prática, criação de cruds 
                  e dashboards e participar vários estágios do desenvolvimento: planejar, programar, testar, revisar, refatoramento.<br/><br/>
                </a>
                <a href="https://github.com/pedroping/Discografia" target="_blank" rel="noreferrer" className={projeto.link}>Acesso ao repositório</a>
              </Modal>
          </div>
      </div>
    </div>
    
  )
}

export default teste;