var ScheduleBottom = React.createClass({
	displayName: "ScheduleBottom",


	render: function () {
		var callingPointsData = this.props.callingPointsData.callingPoints;
		var trainPosition = this.props.callingPointsData.trainPosition;

		return React.createElement(
			"div",
			{ id: "calling-point-wrapper" },
			React.createElement(TrainIcon, { trainPosition: trainPosition }),
			React.createElement(CallingPoints, { callingPointsData: callingPointsData })
		);
	}
});