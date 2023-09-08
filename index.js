document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
  new Date().toLocaleDateString("en-US", { weekday: "long" });
function updateTime() {
  const date = new Date();
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  document.querySelector(
    '[data-testid="currentUTCTime"]'
  ).textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);
