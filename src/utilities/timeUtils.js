const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getRegularTime = (militaryTime) => {
  const hour = (militaryTime === 0) ? '12' : militaryTime % 12;
  const suffix = (militaryTime >= 12) ? 'pm' : 'am';

  return {
    hour,
    suffix
  };
};

export const convertEpochToUTC = (epoch) => new Date(epoch * 1000);

export const convertEpochtoHour = (epoch) => {
  const utc = convertEpochToUTC(epoch);
  const { hour, suffix } = getRegularTime(utc.getHours());

  return hour + suffix;
};

export const getDayOfWeek = (epoch) => {
  const d = convertEpochToUTC(epoch).getDay();

  return days[d];
};

export const getTime = (epoch) => {
  const utc = convertEpochToUTC(epoch);
  const { hour, suffix } = getRegularTime(utc.getHours());
  const minutes = (utc.getMinutes() < 10) ? `0${utc.getMinutes()}` : utc.getMinutes();

  return `${hour}:${minutes}${suffix}`;
};

export const militaryTime = (epoch) => {
  const utc = convertEpochToUTC(epoch);
  return utc.getHours();
};
