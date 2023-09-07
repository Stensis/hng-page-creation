document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = new Date().toLocaleDateString('en-US', { weekday: 'long' });
document.querySelector('[data-testid="currentUTCTime"]').textContent = new Date().toUTCString().split(' ')[4];
