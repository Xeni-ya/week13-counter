const dateBirthday = document.getElementById('dateBirthday');
const error = document.getElementById('errorMassege');
const result = document.querySelector('.result');

let calculateDays = () => {
    const dateBirthdayStr = dateBirthday.value;
    const dateBirthdayTimestamp = Date.parse(dateBirthdayStr);
    const currentTimestamp = Date.now();

    if (dateBirthdayTimestamp < currentTimestamp) {
        result.textContent = 'Дата прошла!';
        return;
    }

    const timeDifference = dateBirthdayTimestamp - currentTimestamp;
    const days =Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    result.textContent = `До дня рождения осталось: ${days}`;
}

dateBirthday.addEventListener('input', () => {
    if (dateBirthday.value) {
        error.style.display = 'none';
    } else {
        error.style.display = 'block';
    }
});