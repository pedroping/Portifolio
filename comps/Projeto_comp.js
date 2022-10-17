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
        <div className={projeto.caixas}>
          <div className={projeto.caixa}>
              <h4>Estágio</h4>
              <Image src='/projeto_estagio.PNG' width= "500px" height= "300px"></Image>
              <button onClick={() => {mudar_page()}} className={projeto.button1}>
                Dethales
              </button>
          </div>
          <div className={projeto.caixa}>
              <h4>Discografia</h4>
              <Image src='/discografia.png' width= "500px" height= "300px" alt=""></Image>
              <button onClick={() => {mudar_page()}} className={projeto.button1}>
                Detalhes
              </button>
          </div>
          <div className={projeto.caixa}>
              <h4>Crud com HTML, CSS e JS</h4>
              <Image src='/crud.png' width= "500px" height= "200px" alt=""></Image>
              <button onClick={() => {mudar_page()}} className={projeto.button1}>
                Detalhes
              </button>
          </div>
          <div className={projeto.caixa}>
              <h4>PokeDex</h4>
              <Image src='/pokedex.png' width= "500px" height= "300px" alt=""></Image>
              <button onClick={() => {mudar_page()}} className={projeto.button1}>
                Detalhes
              </button>
          </div>
        </div> 
      </div>
    </div>
    
  )
}

export default teste;