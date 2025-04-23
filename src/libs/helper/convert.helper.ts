export function snakeToPascalWithSpaces(str: string) {
  return str
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function kebabToPascalWithSpaces(str: string) {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function pascalToKebab(str: any) {
  return str
    .split(' ')
    .map((word: string) => word.toLowerCase())
    .join('-');
}
