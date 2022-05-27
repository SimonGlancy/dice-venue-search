import dayjs from 'dayjs';

export const formatEventTime = (date: string) => {
  return dayjs(date).format('ddd DD MMM — h A ');
};

export const formatCurfewTime = (date: string) => {
  return dayjs(date).format('h A');
};

export const dateIsInTheFuture = (date: string) => {
  const now = dayjs();
  return dayjs(date).isAfter(now);
};
