import { Providers } from './providers'
import { Header } from './components'
import '@rainbow-me/rainbowkit/styles.css'
import './globals.css'

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
