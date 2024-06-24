function updateClock() {
    const clock = document.getElementById('clock');
    if (!clock) return; // Ensure clock element is present

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Clear previous hands
    clock.innerHTML = '';

    // Create hour hand
    const hourHand = document.createElement('div');
    hourHand.style.width = '6px';
    hourHand.style.height = '50px';
    hourHand.style.backgroundColor = '#333';
    hourHand.style.position = 'absolute';
    hourHand.style.top = '50%';
    hourHand.style.left = '50%';
    hourHand.style.transformOrigin = 'bottom';
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hours * 30 + minutes / 2}deg)`;

    // Create minute hand
    const minuteHand = document.createElement('div');
    minuteHand.style.width = '4px';
    minuteHand.style.height = '70px';
    minuteHand.style.backgroundColor = '#666';
    minuteHand.style.position = 'absolute';
    minuteHand.style.top = '50%';
    minuteHand.style.left = '50%';
    minuteHand.style.transformOrigin = 'bottom';
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`;

    // Create second hand
    const secondHand = document.createElement('div');
    secondHand.style.width = '2px';
    secondHand.style.height = '90px';
    secondHand.style.backgroundColor = 'red';
    secondHand.style.position = 'absolute';
    secondHand.style.top = '50%';
    secondHand.style.left = '50%';
    secondHand.style.transformOrigin = 'bottom';
    secondHand.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`;

    // Append hands to clock
    clock.appendChild(hourHand);
    clock.appendChild(minuteHand);
    clock.appendChild(secondHand);
}

setInterval(updateClock, 1000);
updateClock();
