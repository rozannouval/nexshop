'use client'

import { CircleX, RefreshCw } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const LoadError = () => {
  const router = useRouter()
  return (
    <main className="container mx-auto p-4 md:p-8 min-h-[35rem] md:min-h-[75dvh] flex flex-col justify-center items-center gap-3 text-center">
        <CircleX className="size-28 md:size-36" />
        <h4 className="font-medium text-xl md:text-2xl">
          Terjadi kesalahan saat memuat data
        </h4>
        <p className="font-medium text-base md:text-lg text-stone-500">
          Kami tidak dapat menampilkan produk saat ini. Silakan coba kembali beberapa saat lagi.
        </p>
        <button
          onClick={() => router.refresh()}
          className="py-2 px-4 bg-stone-800 text-white font-medium rounded-md cursor-pointer hover:opacity-80 transition flex items-center gap-2 text-sm"
        >
          <RefreshCw className='size-4 md:size-6' /> Muat Ulang Halaman 
        </button>
      </main>
  )
}

export default LoadError