$(document).ready(function () {
	"use strict";
	/*========== Countdown start ================*/
	$('.infy_timer').each(function (index, ele) {
		// console.log("ele, index", {ele, index})
		// var ele = $(this);
		var date = $(ele).data('date');
	// countdown
	let timer = setInterval(function () {

		var endTime = new Date(date);
		// console.log(endTime);
		endTime = (Date.parse(endTime) / 1000);

		var now = new Date();
		now = (Date.parse(now) / 1000);

		var timeLeft = endTime - now;

		// math
		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }


		// display
		$(ele).html(
			"<div class=\"date-box\"> \
		<div class=\"numbers\">" + days + "</div><div class=\"text\">day</div></div> \
		<div class=\"date-box\"> \
		<div class=\"numbers\">" + hours + "</div><div class=\"text\">hr</div></div> \
		<div class=\"date-box\"> \
		<div class=\"numbers\">" + minutes + "</div><div class=\"text\">min</div></div> \
		<div class=\"date-box\"> \
		<div class=\"numbers\">" + seconds + "</div><div class=\"text\">sec</div></div>"
		);

	}, 100);

	var d = new Date();
	var curr_date = d.getDate();
	var curr_month = d.getMonth() + 1;
	var curr_year = d.getFullYear();
});
	/*========== Countdown end ================*/
});