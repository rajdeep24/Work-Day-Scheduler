$(document).ready(function () {
	//-----------------------Variables-------------------//
	// GIVEN I am using a daily planner to create a schedule
	// WHEN I open the planner
	// THEN the current day is displayed at the top of the calendar
	var currentDay = moment().format("dddd, MMMM Do");
	$("#currentDay").text(currentDay);

	// WHEN I scroll downs
	// THEN I am presented with timeblocks for standard business hours
	currentHour = moment().hour(); //This is the format to display hour+am/pm

	$(".saveBtn").on("click", function (event) {
		var time = $(this).data("time");
		var value = $("#time-" + time).val();
		localStorage.setItem(time, value);
	});

	for (var i = 9; i < 18; i++) {
		$("#time-" + i).val(localStorage.getItem(i));

		if (currentHour > i) {
			$("#time-" + i).addClass("past");
		} else if (currentHour < i) {
			$("#time-" + i).addClass("future");
		} else {
			$("#time-" + i).addClass("present");
		}
	}
});
// ## User Story

// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

// ## Acceptance Criteria

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
