import styles from '../styles/Home.module.css'
import h_styles from '../styles/Habilidades.module.css'
import Navibar from '../comps/Navibar'
import Navifooter from '../comps/Navifooter'
import Link from 'next/link'
import Image from 'next/image'

export default function teste() {
  return (
    <div>
        <div className={styles.corpo}>
            
            <div className={h_styles.container}>
                <a className={h_styles.titulo} >Habilidades:</a>
                <div className={h_styles.caixas}>
                    <div className={h_styles.caixa} date-name="java">
                        <Image src='/java_image.png' height= "500px" width= "500px"></Image>
                        <h4>Java</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="php">
                        <Image src='/php-logo.png' height= "500px" width= "500px"></Image>
                        <h4>Php</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="python">
                        <Image src='/python.png' height= "500px" width= "500px"></Image>
                        <h4>Python</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="html">
                        <Image src='/html+css+js.png' height= "500px" width= "500px"></Image>
                        <h4>Html, Css e JavaScript</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="html">
                        <Image src='/laravel.png' height= "500px" width= "500px"></Image>
                        <h4>Laravel</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="html">
                        <Image src='/vue.png' height= "500px" width= "500px"></Image>
                        <h4>Vue</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="html">
                        <Image src='/sql.png' height= "500px" width= "500px"></Image>
                        <h4>Banco de Dados</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="html">
                        <Image src='/react.png' height= "500px" width= "500px"></Image>
                        <h4>React</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="html">
                        <Image src='/git.png' height= "500px" width= "500px"></Image>
                        <h4>Git</h4>
                    </div>
                    <div className={h_styles.caixa} date-name="html">
                        <Image src='/office.png' height= "500px" width= "500px"></Image>
                        <h4>Dominio Pacote Office</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
