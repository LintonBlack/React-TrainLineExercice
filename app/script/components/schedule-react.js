var Schedule = React.createClass({

	getInitialState: function() {

		return {			
		    journeyData : ScheduleStore.getData().responseJSON
		}
	},

	render : function() {
	
		return (
			<article>
				<ScheduleHeader journeyData={ this.state.journeyData.journey } />
				<ScheduleBottom callingPointsData={ this.state.journeyData } />				
			</article>
			);
	}
})