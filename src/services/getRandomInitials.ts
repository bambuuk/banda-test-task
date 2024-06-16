export function getRandomInitials(): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const getRandomLetter = () =>
    alphabet[Math.floor(Math.random() * alphabet.length)];
  return `${getRandomLetter()}${getRandomLetter()}`;
}
