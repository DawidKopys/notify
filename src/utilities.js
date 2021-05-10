const dateToString = (dateObj) => {
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

  const dayNumberToString = (dayNumber) => {
    const nth = (n) =>
      ['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th';

    const dayNumberString = dayNumber.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    return dayNumberString + nth(dayNumber);
  };

  const dd = dayNumberToString(dateObj.getDate());
  const mm = monthMap.get(dateObj.getMonth());
  const yyyy = dateObj.getFullYear();

  return `${dd} ${mm} ${yyyy}`;
};

export default dateToString;
