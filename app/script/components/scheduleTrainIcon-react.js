var TrainIcon = React.createClass({	


	render : function() {
		var trainPosition = this.props.trainPosition;
		var divStyle = {
		  top: trainPosition
		};

	

	return (
		 <i className="icon-train-circle" style={divStyle}></i> 
		);

	}
});

