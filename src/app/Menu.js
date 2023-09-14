import Image from 'next/image'
import React from 'react'
import { menu } from '@/lib/menu'
import styles from './Menu.module.css'

function Menu() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menuWrapper}>
                {menu.map(operations => (
                    <li key={operations.title} className={styles.menu}>
                        <Image alt={operations.title + ' Icon'} src={'/favicon.ico'} width={50} height={50} />
                        <div className={styles.title}>{operations.title}</div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu