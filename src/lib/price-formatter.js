export const PriceFormatter = (number) => {
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency", 
    currency: "IDR",
    minimumFractionDigits: 0, // Menghilangkan desimal
    maximumFractionDigits: 0, // Menghilangkan desimal
  }).format(number);
};
