import styles from '../styles/Home.module.css'
import h_styles from '../styles/Habilidades.module.css'
import Navibar from '../comps/Navibar'
import Navifooter from '../comps/Navifooter'
import Link from 'next/link'
import teste from '../comps/Navibar'
import Habilidades_ from '../comps/habilidade_comp'

export default function Habilidades() {
  return (
    <body className={h_styles.body}>
       <div>
        <Navibar/>
        <Habilidades_/>
        <Navifooter />
    </div> 
    </body>
    
  )
}
