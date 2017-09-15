const moment = require('moment')

function getMomentNow() {
	return moment(Date.now()).utcOffset(1)
}

function formatTwoDecimalPlace(value) {
	let beats = Math.floor(value)
	let remainder = Math.round(value % 1 * 100)
	let strRemainder = String(remainder)
	if(remainder == 0) {
		strRemainder = "00"
	} else if(remainder < 10) {
		strRemainder = "0" + remainder
	}
	return String(beats) + "." + strRemainder
}

function get(format="number", subbeats=false) {
	let momentNow = getMomentNow()
	let momentDayStart = getMomentNow()
	momentDayStart.hour(0)
	momentDayStart.minute(0)
	momentDayStart.second(0)
	momentDayStart.milliseconds(0)
	let millisecondsToday = momentNow.diff(momentDayStart)
	let beatTime = Math.floor(millisecondsToday / 86400)
	if(subbeats) {
		beatTime = Math.floor(millisecondsToday / 864) / 100
	}

	if(format === "number") {
		return beatTime
	} else if(format === "string") {
		if(subbeats) {
			return "@" + formatTwoDecimalPlace(beatTime)
		}
		return "@" + beatTime.toString()
	} else {
		return beatTime
	}
}

exports.get = get