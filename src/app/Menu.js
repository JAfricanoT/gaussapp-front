import Image from 'next/image'
import React from 'react'
import { menu } from '@/lib/menu'
import styles from './Menu.module.css'
import Link from 'next/link'

function Menu() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menuWrapper}>
                {menu.map(operations => (
                    <Link key={operations.title} href={operations.link}>
                        <li className={operations.status ? styles.menu : styles.MenuDisable}>
                            <Image alt={operations.title + ' Icon'} src={operations.icon} width={35} height={35} className={operations.status ? styles.InconEnable : styles.IconDisable}/>
                            <div className={operations.status ? styles.title : styles.TitleDisable}>{operations.title}</div>
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default Menu