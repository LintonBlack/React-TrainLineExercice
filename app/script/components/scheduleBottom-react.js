var ScheduleBottom = React.createClass({	

	render : function() {
		var callingPointsData = this.props.callingPointsData.callingPoints;
		var trainPosition = this.props.callingPointsData.trainPosition;

	return (
		<div id="calling-point-wrapper">
			<TrainIcon trainPosition={ trainPosition} />
			<CallingPoints callingPointsData={ callingPointsData} />
		</div>
		);

	}
});



