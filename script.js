function calculateDifference() {
  const time1 = document.getElementById('time1').value;
  const time2 = document.getElementById('time2').value;

  const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
  if (!timeRegex.test(time1) || !timeRegex.test(time2)) {
    alert("Please enter valid times in HH:MM format.");
    return;
  }

  const [hours1, minutes1] = time1.split(':').map(Number);
  const [hours2, minutes2] = time2.split(':').map(Number);

  const totalMinutes1 = hours1 * 60 + minutes1;
  const totalMinutes2 = hours2 * 60 + minutes2;

  let difference = Math.abs(totalMinutes2 - totalMinutes1);

  const hours = Math.floor(difference / 60);
  const minutes = difference % 60;

  const resultElement = document.getElementById('result');
  resultElement.textContent = `${hours} hours ${minutes} minutes`;
}