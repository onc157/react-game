export const getInitialData = (fieldSize: number): (number | null)[][] => {
  return Array(fieldSize)
    .fill(null)
    .map(() => Array(fieldSize).fill(null))
}
