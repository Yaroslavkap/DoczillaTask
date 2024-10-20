export function getWeekTimestamps() {
    const now = new Date()
    let dayOfWeek = now.getUTCDay()
    dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek

    const startOfWeek = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - (dayOfWeek - 1), 0, 0, 0, 0))
    const startOfWeekTimestamp = startOfWeek.getTime()
  
    const endOfWeek = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + (7 - dayOfWeek), 23, 59, 59, 999))
    const endOfWeekTimestamp = endOfWeek.getTime()
  
    return {
      startOfWeekTimestamp,
      endOfWeekTimestamp
    }
  }

  export function getTodayTimestamps() {
    const now = new Date()
  
    const startOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0))
    const startOfDayTimestamp = startOfDay.getTime()
  
    const endOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 23, 59, 59, 999))
    const endOfDayTimestamp = endOfDay.getTime()
  
    return {
      startOfDayTimestamp,
      endOfDayTimestamp
    };
  }
  

  

  