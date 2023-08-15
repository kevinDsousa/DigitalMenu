'use client'

import { useRouter } from 'next/navigation'
import { FormEvent } from 'react';

export default function RecoverPassword() {

  const router = useRouter()
  function handleLogin(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    router.push('//')
    
  }
  
  function handleRecover(): void {
    router.push('//');
  }
  return (
    <main className='bg-restaurant w-full h-screen'>
      <section className='bg-slate-900 bg-opacity-80 w-1/2 h-screen flex flex-col items-center justify-center'>
        <h2 className='text-center text-2xl font-mono font-bold mb-5'>Recuperar Senha</h2>
        <form className="flex flex-col gap-3" onSubmit={handleLogin}>
          <input className="rounded bg-slate-100 w-full h-10 outline-none pl-5 text-slate-700" type="text" name="" id="" placeholder='Email' />
          <div className='flex flex-col gap-2'>
            <button className="text-sm hover:text-green-500" type='button' onClick={handleRecover}>Voltar</button>
            <button className="bg-green-600 rounded w-full h-8 hover:bg-opacity-50" type='submit'>Enviar</button></div>
        </form>
      </section>
    </main>
  )
}