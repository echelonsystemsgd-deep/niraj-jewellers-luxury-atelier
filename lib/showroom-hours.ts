/**
 * Live London Showroom status calculator
 * 136 Uxbridge Road, Hayes UB4 0JH
 * 
 * Mon: 12:00 - 17:00
 * Tue - Sat: 11:00 - 17:00
 * Sun: Closed (Special bridal appointments & festive Sundays)
 */

export interface ShowroomStatus {
  isOpen: boolean;
  statusBadge: string;
  nextEventText: string;
  isTodayOpen: boolean;
  closingTime?: string;
  openingTime?: string;
}

export function getLondonShowroomStatus(simulatedDate?: Date): ShowroomStatus {
  // Use Intl to get the current time in Europe/London timezone
  const now = simulatedDate || new Date();
  
  const londonTimeStr = now.toLocaleString("en-GB", {
    timeZone: "Europe/London",
    hour12: false,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  // e.g. "Tue, 14:30"
  const [weekdayShort, timeStr] = londonTimeStr.split(", ");
  const [hourStr, minuteStr] = (timeStr || "12:00").split(":");
  const currentMinutes = parseInt(hourStr, 10) * 60 + parseInt(minuteStr, 10);

  // Define hours in minutes
  // Monday: 12:00 (720m) to 17:00 (1020m)
  // Tue - Sat: 11:00 (660m) to 17:00 (1020m)
  // Sun: Closed
  const isMon = weekdayShort === "Mon";
  const isTueToSat = ["Tue", "Wed", "Thu", "Fri", "Sat"].includes(weekdayShort);
  const isSun = weekdayShort === "Sun";

  let openTime = 660; // 11:00 AM
  const closeTime = 1020; // 5:00 PM (17:00)

  if (isMon) {
    openTime = 720; // 12:00 PM
  }

  if (isSun) {
    return {
      isOpen: false,
      isTodayOpen: false,
      statusBadge: "Showroom Closed Today (Sunday)",
      nextEventText: "Reopens Monday at 12:00 PM",
    };
  }

  if (currentMinutes >= openTime && currentMinutes < closeTime) {
    const minutesLeft = closeTime - currentMinutes;
    const hoursLeft = Math.floor(minutesLeft / 60);
    const minsLeftRemainder = minutesLeft % 60;
    
    let countdown = "";
    if (hoursLeft > 0) {
      countdown = `(Closes in ${hoursLeft}h ${minsLeftRemainder}m)`;
    } else {
      countdown = `(Closes in ${minsLeftRemainder}m)`;
    }

    return {
      isOpen: true,
      isTodayOpen: true,
      statusBadge: "Showroom Open Today",
      nextEventText: `Open until 5:00 PM ${countdown}`,
      closingTime: "17:00",
    };
  }

  if (currentMinutes < openTime) {
    const openTimeDisplay = isMon ? "12:00 PM" : "11:00 AM";
    return {
      isOpen: false,
      isTodayOpen: true,
      statusBadge: "Opening Today",
      nextEventText: `Opens at ${openTimeDisplay} London Time`,
      openingTime: openTimeDisplay,
    };
  }

  // After close (currentMinutes >= closeTime)
  if (weekdayShort === "Sat") {
    return {
      isOpen: false,
      isTodayOpen: true,
      statusBadge: "Showroom Closed for the Evening",
      nextEventText: "Reopens Monday at 12:00 PM",
    };
  }

  const nextDay = isMon ? "Tuesday at 11:00 AM" : "Tomorrow at 11:00 AM";
  return {
    isOpen: false,
    isTodayOpen: true,
    statusBadge: "Showroom Closed for the Evening",
    nextEventText: `Reopens ${nextDay}`,
  };
}
