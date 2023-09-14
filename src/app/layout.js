import './globals.css'
import { Inter } from 'next/font/google'
import { menu } from '@/lib/menu'
import Image from 'next/image'
import styles from './Layout.module.css'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GaussApp',
  description: 'Your best auto calctulator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className={styles.config}>
          <nav>
            {menu.map(operations => (
              <ul key={operations.title}>
                <li>
                  <Image alt={operations.title + ' Icon'} src={'/favicon.ico'} width={100} height={100}/>
                  <div>{operations.title}</div>
                </li>
              </ul>
            ))}
          </nav>
        </div>
        <div className={styles.results}>
          {children}
        </div>
      </body>
    </html>
  )
}
