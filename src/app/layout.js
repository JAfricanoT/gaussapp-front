import './globals.css'
import { Inter } from 'next/font/google'
import styles from './Layout.module.css'
import Menu from './menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GaussApp',
  description: 'Your best auto calctulator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className={styles.wrapper}>
          <div className={styles.config}>
            <Menu/>
          </div>
          <div className={styles.result}>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
