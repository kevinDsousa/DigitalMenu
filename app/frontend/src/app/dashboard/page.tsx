'use client'

import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()
  function handleLogout() {
    router.push('/');
  }

  return (
    <main className='bg-restaurant w-full h-screen'>
      <nav className="bg-slate-950 flex flex-col h-screen w-80 justify-start p-5 pt-5">
        <ul>
            <li>Pedidos</li>
            <li>Mesas</li>
            <li>Produtos</li>
            <li>Administrativo</li>
        </ul>
        <button onClick={handleLogout} className='bg-red-700 rounded'>Logout</button>
      </nav>
    </main>
  )
}
