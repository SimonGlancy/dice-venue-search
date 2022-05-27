const formatters: { [key: string]: Intl.NumberFormat } = {};

const priceFormatter = (currency: string) => {
  if (!formatters[currency]) {
    formatters[currency] = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currency,
      currencyDisplay: "narrowSymbol",
    });
  }

  return formatters[currency];
};

export default priceFormatter;

export const formatMoneyInteger = (moneyInteger: number, currency = "GBP") => {
  const moneyAsFloat = moneyInteger / 100;
  const formatter = priceFormatter(currency);
  return formatter.format(moneyAsFloat);
};
