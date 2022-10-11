import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React from 'react'

function teste() {
  return (
    <div>
      <title>Meu Portifólio</title>
      <nav className={styles.navbar}>
            <Link href="/">
            <a className={styles.logo}>Meu Portifólio</a>
            </Link>
            
          <ul className={styles.links}>
            <li>
                <Link href="/sobremim">
                  <a>Sobre mim</a>
                </Link> 
            </li>
            <li>
              <Link href="/habilidades">
                  <a>Habilidades</a>
              </Link>  
            </li>
            <li>
              <Link href="/projetos">
                  <a>Projetos</a>
              </Link>  
            </li>
          </ul>
      </nav>
    </div>  
  )
}

export default teste; 
