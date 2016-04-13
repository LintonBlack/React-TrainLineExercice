var CallingPoints = React.createClass({
	displayName: "CallingPoints",


	render: function () {
		var callingPointsData = this.props.callingPointsData;
		var callingPoints = [];

		for (var key in callingPointsData) {
			callingPoints.push(React.createElement(CallingPoint, { key: key, callingPoint: callingPointsData[key] }));
		}
		return React.createElement(
			"ul",
			{ className: "calling-points" },
			callingPoints
		);
	}
});