export default function generateID(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
