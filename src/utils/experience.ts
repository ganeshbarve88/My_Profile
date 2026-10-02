/**
 * Calculates exact career experience as of today starting from March 2016 (Infosys Technologies)
 */
export function getExactExperience() {
  const startDate = new Date(2016, 2, 1); // March 1, 2016 (month 2 is March)
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  const days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const decimalYears = (years + months / 12).toFixed(1);

  return {
    years,
    months,
    decimalYears,
    displayStat: `${years}y ${months}m`,
    displayDecimalStat: `${decimalYears} Yrs`,
    displayExact: `${years} Yrs ${months} Mos`,
    formattedText: `${years} Years and ${months} Months`,
    tagline: `${years}+ Years Experience`,
  };
}
