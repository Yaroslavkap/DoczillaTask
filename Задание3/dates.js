export function getWeekTimestamps() {
    const now = new Date();
  
    // Определяем день недели (0 - воскресенье, 1 - понедельник и т.д.)
    let dayOfWeek = now.getUTCDay();
  
    // Если день недели воскресенье (dayOfWeek = 0), то устанавливаем его как 7 для удобства расчета
    dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
  
    // Первая миллисекунда текущей недели (понедельник 00:00:00 по UTC)
    const startOfWeek = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - (dayOfWeek - 1), 0, 0, 0, 0));
    const startOfWeekTimestamp = startOfWeek.getTime();
  
    // Последняя миллисекунда текущей недели (воскресенье 23:59:59.999 по UTC)
    const endOfWeek = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + (7 - dayOfWeek), 23, 59, 59, 999));
    const endOfWeekTimestamp = endOfWeek.getTime();
  
    return {
      startOfWeekTimestamp,
      endOfWeekTimestamp
    };
  }

  export function getTodayTimestamps() {
    const now = new Date();
  
    // Первая миллисекунда сегодняшнего дня (00:00:00 по UTC)
    const startOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0));
    const startOfDayTimestamp = startOfDay.getTime();
  
    // Последняя миллисекунда сегодняшнего дня (23:59:59.999 по UTC)
    const endOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 23, 59, 59, 999));
    const endOfDayTimestamp = endOfDay.getTime();
  
    return {
      startOfDayTimestamp,
      endOfDayTimestamp
    };
  }
  

  

  