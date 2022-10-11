import styles from '../styles/Home.module.css'
import Link from 'next/link'
import sobremim from '../styles/Sobremim.module.css'
export default function teste() {
  return (
    <div className={sobremim.tudo}>
      <div className={sobremim.main}>
        <div className={sobremim.main_info}>
            <h2>Olá sou Pedro</h2>
            <b><span className={sobremim.main_position}>Programador Full Stack Junior</span></b>
            <span className={sobremim.main_resumo}>
              Sou formado em Desenvolvimento de Sistemas pelo Coltec – Ufmg , gosto muito de programar e manusear computadores em geral, 
              já estagiei como Programador Backend na Fae - Ufmg na construção de uma aplicação web 
              e tenho muito experiencia com montagem e manutenção de computadores. 
              No momento estou buscando uma oportunidade de entrar no mercado de trabalho e continuar minha carreira como Dev.  
            </span>
        </div>
        <div className={sobremim.main_perfil}>
          <img src='perfil.jpg'></img>
        </div>
      </div>
    </div>
  )
}
