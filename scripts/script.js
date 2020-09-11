$(document).ready(function () {
	//-----------------------Variables-------------------//
	// GIVEN I am using a daily planner to create a schedule
	// WHEN I open the planner
	// THEN the current day is displayed at the top of the calendar
	var currentDay = moment().format("dddd, MMMM Do");
	$("#currentDay").text(currentDay);

	// WHEN I scroll down
	// THEN I am presented with timeblocks for standard business hours
	currentHour = moment().format("ha"); //This is the format to display hour+am/pm

	//Create array of time blocks and each time block has two properties on it representing the timeblock label and the event.
	var timeBlocks = [
		{
			time: "9am",
			event: "test",
		},
		{
			time: "10am",
			event: "test",
		},
		{
			time: "11am",
			event: "test",
		},
		{
			time: "12pm",
			event: "test",
		},
		{
			time: "1pm",
			event: "test",
		},
		{
			time: "2pm",
			event: "test",
		},
		{
			time: "3pm",
			event: "test",
		},
		{
			time: "4pm",
			event: "test",
		},
		{
			time: "5pm",
			event: "test",
		},
	];

	console.log(timeBlocks);
	//-----------------------DOM Variables-------------------//

	//--------------------Function Definitions----------------//

	//-----------------------Function Calls---------------------//

	//----------------------Event Listeners---------------------//
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
