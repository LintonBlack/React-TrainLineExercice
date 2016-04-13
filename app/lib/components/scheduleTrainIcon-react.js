var TrainIcon = React.createClass({
	displayName: "TrainIcon",


	render: function () {
		var trainPosition = this.props.trainPosition;
		var divStyle = {
			top: trainPosition
		};

		return React.createElement("i", { className: "icon-train-circle", style: divStyle });
	}
});