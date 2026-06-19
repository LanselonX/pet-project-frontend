export function formatTime(date: Date) {
  return new Date(date).toLocaleDateString("ru", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Kyiv",
  });
}
