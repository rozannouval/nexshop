const CardsLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 xl:gap-8 my-8">
      {children}
    </div>
  );
};

export default CardsLayout;
