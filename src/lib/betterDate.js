function betterMonth(month) {
	/*
	 * @param {string} month 
	 *	in the following format MM 
	 *
	 * @return {string} mont
	 *	return it in 3 format words (01->Jan)
	 */
	switch (month) {
		case "01":
			return "Jan";
		case "02":
			return "Feb";
		case "03":
			return "Mar"
		case "04":
			return "Apr"
		case "05":
			return "May"
		case "06":
			return "Jun"
		case "07":
			return "Jul"
		case "08":
			return "Aug"
		case "09":
			return "Sep"
		case "10":
			return "Oct"
		case "11":
			return "Nov"
		case "12":
			return "Dec"
	}
}

export function betterDate(d) {
	/*
	 * @param {string} [d]ate
	 *	in the following format DD/MM/YYYY 
	 *
	 * @return {string}
	 *	in the folloing format DD Jan, YYYY
	 */

	// Splitting the date in 3 parts
	// 1. days
	// 2. months
	// 3. year
	const [day, month, year] = d.split('/')
	return day + " " +  betterMonth(month) + ", '" + year.slice(2,year.length);
}
