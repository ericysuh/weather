const convertHour = (h) => {
  const newHour = (h > 12) ? Math.ceil(h % 12) : h;
  const amOrPm = (h >= 12) ? 'PM' : 'AM';
  if (h === 0) return '12AM';
  return `${newHour}${amOrPm}`;
};

const convertEpochToUTC = (epoch) => new Date(epoch * 1000);

export const convertEpochToHour = (epoch) => {
  const hour = convertEpochToUTC(epoch).getHours();

  return convertHour(hour);
};

export const convertEpochToDate = (epoch) => {
  const date = convertEpochToUTC(epoch).getDate();

  return date;
};

export const convertEpochToDay = (epoch) => {
  const weekday = new Array(7);
  weekday[0] = 'Sun';
  weekday[1] = 'Mon';
  weekday[2] = 'Tue';
  weekday[3] = 'Wed';
  weekday[4] = 'Thu';
  weekday[5] = 'Fri';
  weekday[6] = 'Sat';
  return weekday[convertEpochToUTC(epoch).getDay()];
};
