import styles from '../styles/Home.module.css'
import Navibar from '../comps/Navibar'
import Navifooter from '../comps/Navifooter'
import Link from 'next/link'
import Sobremim from '../comps/Sobremim'
import Habilidades_ from '../comps/habilidade_comp'
import Projetos from '../comps/Projeto_comp'

export default function Home() {
  return (
    <div className={styles.body}>
      <Navibar />
      
      <Sobremim />
        
      <Habilidades_ />
      
      <Projetos />
  
      <Navifooter />   
        
    </div>
  )
}
