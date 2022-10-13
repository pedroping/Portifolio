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
import Image from 'next/image'
function Sobremimpage() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [isMain, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(false);
    }, []);


  return (
    <div>
      <Navibar/>
      <div className={projeto.container}>
      <a className={projeto.titulo}>Projetos</a>
        <div className={projeto.caixas}></div>
          <div className={projeto.caixa}>
              <h4>Estágio</h4>
              <Image src='/projeto_estagio.PNG' width= "500px" height= "300px" alt=""></Image>
              <button onClick={() => setShowModal(true)} className={projeto.button1}>
                Descrição
              </button>
              <Modal show={showModal} onClose={() => setShowModal(false)}>
                <Image src='/projeto_estagio.PNG' width= "500px" height= "250px" className={projeto.img} alt=""></Image>
                <a>
                <br/><br/>
                  O objetivo do estágio foi construir um portal de acervo para exibição de publicações 
                  e imagens acadêmicas indígenas. Para isso tive que atuar na parte técnica escolha de tecnologias, arquitetura, etc. 
                  e na parte prática: aprimorar o uso de frameworks back-end e front-end, aprender noções de segurança na web e 
                  as desenvolver na prática, criação de cruds 
                  e dashboards e participar vários estágios do desenvolvimento: planejar, programar, testar, revisar, refatoramento.<br/><br/>
                </a>
                <a href="https://www.portaltingui.com.br" target="_blank" rel="noreferrer" className={projeto.link}>Acesso ao site</a>
              </Modal>
          </div>
          
          <div className={projeto.caixa}>
              <h4>Discografia</h4>
              <Image src='/discografia.png' width= "500px" height= "300px" alt=""></Image>
              <button onClick={() => setShowModal2(true)} className={projeto.button1}>
                Descrição
              </button>
              <Modal show={showModal2} onClose={() => setShowModal2(false)}>
                <Image src='/discografia.png' width= "500px" height= "300px" className={projeto.img} alt=""></Image>
                <a>
                <br/><br/>
                  Um projeto simples de uma aplicação web feita em Html, Css e JavaSrcrip, essa aplicação apresenta alguns albuns e uma 
                  barra de pesquisa funcional que pode buscar tanto pelo nome do album quanto pelo nome da banda, toda a plicação é responsiva
                  e pode ser acessada tanto por um celular ou por um computador.
                  <br/><br/>
                </a>
                <a href="https://github.com/pedroping/Discografia" target="_blank" rel="noreferrer" className={projeto.link}>Acesso ao repositório</a>
              </Modal>
          </div>
      </div>
      <Navifooter />
    </div>
  )
}

export default Sobremimpage;
