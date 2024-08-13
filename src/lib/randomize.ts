export function getRandomRating(): number {
  return Math.floor(Math.random() * 5) + 1 // Rating entre 1 e 5
}

export function getRandomReviews(): number {
  return Math.floor(Math.random() * 1000) // Reviews entre 0 e 999
}
