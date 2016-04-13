var CallingPoints = React.createClass({	

	render : function() {
		var callingPointsData = this.props.callingPointsData;
		var callingPoints=[];

		for(var key in callingPointsData) {
			callingPoints.push(<CallingPoint key={key} callingPoint={callingPointsData[key]}/>)
		}
	return (
			<ul className="calling-points">
				{callingPoints}
			</ul>
		);

	}
});

