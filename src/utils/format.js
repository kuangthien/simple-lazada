export default function formatNumber(str) {
  return str
    .toString()
    .split(/(?=(?:\d{3})+(?:\.|$))/g)
    .join(".");
}
