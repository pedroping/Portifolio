import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function teste() {
  return (
    <div>
        <footer className={styles.footer}>
          <a href="https://github.com/pedroping" target="_blank"><img src="github.png" color="white" width="50" height="50"></img></a>
          <a href="https://criarmeulink.com.br/u/1665492155" target="_blank"><img src="email.png" color="white" width="50" height="40"></img></a>
          <a href="https://api.whatsapp.com/send?phone=553184870632&text=Ol%C3%A1%2C%20tudo%20bem%20%3F%20" target="_blank"><img src="whatsapp.png" color="white" width="50" height="50"></img></a>
          <a href="https://www.linkedin.com/in/pedro-henrique-chaves-669b10222/" target="_blank"><img src="linkedin.png" color="white" width="50" height="50"></img></a>
          <a href="/pdf.pdf" target="_blank"><img src="curriculo.png" color="white" width="50" height="50"></img></a>
        </footer>
    </div>
       
  )
}
