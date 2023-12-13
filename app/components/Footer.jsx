import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer style={{ position: 'relative', bottom: 0 }}  className="border-t-2 w-full h-auto flex-1 shadow-md py-8 px-8">
      <div className="flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; Todos os direitos reservados</span>
        <div>
          {/* Construído <span className="text-primary text-2xl px-1">&#9825;</span>
          by&nbsp;<Link href="/" className="underline underline-offset-2" target="_blank">Código</Link> */}
        </div>
        <Link href="/" target="_blank" className="-offset-2">@ Ricardo Ferreira</Link>
      </div>
    </footer>
  )
}

export default Footer