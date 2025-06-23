import { CircleX, FileX } from "lucide-react"
import Link from "next/link"


function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center min-h-[80dvh] p-4">
      <FileX className="size-32 md:size-48 text-stone-700" />
      <h2 className="text-center font-bold text-2xl md:text-3xl my-4 md:my-8 text-stone-700">Maaf, Halaman Tidak Ditemukan</h2>
      <Link href="/" className="bg-stone-700 text-white py-2 md:py-3 px-4 md:px-6 rounded-md hover:opacity-80 font-semibold text-lg md:text-xl" >kembali ke beranda</Link>
    </main>
  )
}

export default NotFound