import { Outlet } from 'react-router-dom'

import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import { Toaster } from 'sonner'

export function RootLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
      <Toaster richColors />
    </>
  )
}
