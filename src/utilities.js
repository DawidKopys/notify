const getTwoNumberDigit = (number) =>
  number.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

const dayNumberToString = (dayNumber) => {
  const nth = (n) =>
    ['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th';
  const dayNumberString = getTwoNumberDigit(dayNumber);
  return dayNumberString + nth(dayNumber);
};

const monthNumberToString = (monthNumber) => {
  const monthMap = new Map([
    [0, 'January'],
    [1, 'February'],
    [2, 'March'],
    [3, 'April'],
    [4, 'May'],
    [5, 'June'],
    [6, 'July'],
    [7, 'August'],
    [8, 'September'],
    [9, 'October'],
    [10, 'November'],
    [11, 'December'],
  ]);

  return monthMap.get(monthNumber);
};

const timeNumberToString = (timeNumber) => getTwoNumberDigit(timeNumber);

const getCurrentDate = () => {
  const currentDate = new Date();

  const dd = dayNumberToString(currentDate.getDate());
  const mm = monthNumberToString(currentDate.getMonth());
  const yyyy = currentDate.getFullYear();
  const hours = timeNumberToString(currentDate.getHours());
  const minutes = timeNumberToString(currentDate.getMinutes());

  return `${dd} ${mm} ${yyyy} ${hours}:${minutes}`;
};

export default getCurrentDate;
