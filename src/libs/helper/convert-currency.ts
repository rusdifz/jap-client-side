export function formatCurrency(input: string) {
  const parts = input.split(' ');
  const currency = parts[0];
  const number = parseInt(parts[1], 10);
  const formattedNumber = number.toLocaleString('en-US');
  return `${currency} ${formattedNumber}`;
}
