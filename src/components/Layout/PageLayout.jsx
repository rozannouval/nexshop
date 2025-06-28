function PageLayout({ children, className }) {
  return (
    <main
      className={`min-h-[35rem] md:min-h-[78dvh] container mx-auto flex flex-col p-4 md:p-8 ${className}`}
    >
      {children}
    </main>
  );
}

export default PageLayout;
