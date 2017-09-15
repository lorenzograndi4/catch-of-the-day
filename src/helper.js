export function formatPrice(cents) {
  return ``
}

export function rando(arr) {
  return arr[Math.floor(Math.random()* arr.length)];
}

export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/[^\w\-]+/g, '') // remove non-word chars
}

export function getName() {
  const adjectives = ['adorable', 'elegant', 'fancy', 'glamorous', 'handsome', 'sparkling', 'clumsy', 'mysterious', 'lazy', 'grumpy', 'plain'];
  const nouns = ['people', 'goats', 'tigers', 'dolphins', 'giraffes', 'hyppos', 'buffalos', 'rats', 'seagulls'];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
