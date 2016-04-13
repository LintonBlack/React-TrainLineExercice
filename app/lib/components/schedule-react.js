var Schedule = React.createClass({
	displayName: "Schedule",


	getInitialState: function () {

		return {
			journeyData: ScheduleStore.getData().responseJSON
		};
	},

	render: function () {

		return React.createElement(
			"article",
			null,
			React.createElement(ScheduleHeader, { journeyData: this.state.journeyData.journey }),
			React.createElement(ScheduleBottom, { callingPointsData: this.state.journeyData })
		);
	}
});