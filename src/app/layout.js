import './globals.css'
import { Inter } from 'next/font/google'
import styles from './Layout.module.css'
import Menu from './Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GaussApp',
  description: 'Your best auto calctulator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            <Menu />
          </div>
          <main className={styles.contentWrapper}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
