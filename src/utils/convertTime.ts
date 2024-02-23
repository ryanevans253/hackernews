export function formatTimestamp(time: number) {
  const dateParts = new Intl.DateTimeFormat("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(time * 1000));

  const timeParts = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).formatToParts(new Date(time * 1000));

  const formattedDate = dateParts
    .map((part) => (part.type === "literal" ? "." : part.value))
    .join("");
  const formattedTime = timeParts
    .map((part) => (part.type === "literal" ? ":" : part.value))
    .join("");

  return `${formattedDate} ${formattedTime}`;
}
