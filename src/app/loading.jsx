function Loading() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[35rem] md:min-h-[78dvh] gap-2 p-4 text-center">
      <div className="mt-4 relative mb-16 bg-gray-400">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 md:w-32 h-24 md:h-32 border-6 md:border-8 border-dashed rounded-full animate-spin border-stone-800"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 md:w-16 h-12 md:h-16 border-4 md:border-8 border-dashed animate-spin border-stone-800"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 md:w-16 h-12 md:h-16 border-4 md:border-8 border-dashed rounded-full animate-spin border-stone-800"></div>
      </div>
      <h2 className="text-stone-900 text-xl md:text-3xl font-semibold mt-4">
        Mohon tunggu sebentar...
      </h2>
      <p className="text-stone-600 md:text-lg">
        Sedang proses pengambilan data, pastikan jaringan kalian di kondisi yang baik.
      </p>
    </main>
  );
}

export default Loading;
