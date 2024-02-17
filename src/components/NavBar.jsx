import React from 'react'
import styles from "./NavBar.modules.css";

function NavBar() {
  return (
    <nav className = {Styles.navbar} > 
        <a className = {styles.title} href="/">Portifolio</a>
        <div  className={styles.menu} >
                <ul  className = {styles.menuItems}>
                <li>
                    <a href="#sobre">Sobre Mim</a>
                </li>
                <li>
                    <a href="#projetos">Projetos</a>
                </li>
                <li>
                    <a href="#contato">Contato</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar