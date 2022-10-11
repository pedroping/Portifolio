import styles from '../styles/Home.module.css'
import Navibar from '../comps/Navibar'
import Navifooter from '../comps/Navifooter'
import Link from 'next/link'
import Sobremim from '../comps/Sobremim'

export default function Sobremimpage() {
  return (
    <div className={styles.corpo}>
      <Navibar />
      <Sobremim />
      <Navifooter />  
    </div>
  )
}
