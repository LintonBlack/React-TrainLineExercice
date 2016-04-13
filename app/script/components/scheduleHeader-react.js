var ScheduleHeader = React.createClass({	

	render : function() {
		console.log(this.props.journeyData)
	return (
			<header className="journey-plan-header">
                <h2 className="truncate">
                 <span>{this.props.journeyData.scheduled} </span>
                 <span>{this.props.journeyData.origin}</span>
                 <span> To </span>
                 <span>{this.props.journeyData.destination} </span>                
                 </h2>
            </header>
		);

	}
})
