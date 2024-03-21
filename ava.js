const monthYearDisplay = document.getElementById('month-year');
const calendarGrid = document.getElementById('calendar-grid');
const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function displayCalendar() {
  // Clear previous calendar
  calendarGrid.innerHTML = '';

  // Display month and year
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  monthYearDisplay.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  // Get the first day and total days of the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const totalDaysOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Fill calendar grid with days
  for (let i = 1; i <= totalDaysOfMonth; i++) {
    const calendarCell = document.createElement('div');
    calendarCell.classList.add('calendar-cell');
    calendarCell.textContent = i;
    calendarGrid.appendChild(calendarCell);
  }

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    const emptyCell = document.createElement('div');
    emptyCell.classList.add('calendar-cell');
    calendarGrid.appendChild(emptyCell);
  }
}

function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  displayCalendar();
}

function prevMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  displayCalendar();
}

// Display initial calendar
displayCalendar();