import styles from '../styles/Home.module.css'
import h_styles from '../styles/Habilidades.module.css'
import Navibar from '../comps/Navibar'
import Navifooter from '../comps/Navifooter'
import Link from 'next/link'


export default function teste() {
  return (
    <div>
        <div className={styles.corpo}>
            
            <div className={h_styles.container}>
                <a className={h_styles.titulo} >Habilidades:</a>
                <div className={h_styles.caixas}>
                    <div className={h_styles.caixa} date-name="java">
                        <img src='/java.jpg' alt=""></img>
                        <h4>Java</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="php">
                        <img src='/php-logo.png' alt=""></img>
                        <h4>Php</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="python">
                        <img src='/python.png' alt=""></img>
                        <h4>Python</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="html">
                        <img src='/html+css+js.png' alt=""></img>
                        <h4>Html, Css e JavaScript</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="html">
                        <img src='/laravel.png' alt=""></img>
                        <h4>Laravel</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="html">
                        <img src='/vue.png' alt=""></img>
                        <h4>Vue</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="html">
                        <img src='/sql.png' alt=""></img>
                        <h4>Banco de Dados</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="html">
                        <img src='/react.png' alt=""></img>
                        <h4>React</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="html">
                        <img src='/git.png' alt=""></img>
                        <h4>Git</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="html">
                        <img src='/office.png' alt=""></img>
                        <h4>Dominio Pacote Office</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
