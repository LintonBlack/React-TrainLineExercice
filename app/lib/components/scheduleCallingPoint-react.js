var CallingPoint = React.createClass({
	displayName: 'CallingPoint',


	propTypes: {
		callingPoint: React.PropTypes.object.isRequired
	},

	render: function () {
		var callingPoint = this.props.callingPoint;
		var mainClasses = 'calling-point';
		if (callingPoint.passed) {
			mainClasses += ' selected';
		};
		if (callingPoint.origin) {
			mainClasses += ' origin';
		};
		if (callingPoint.destination) {
			mainClasses += ' destination';
		};

		var delayClass = '';
		if (callingPoint.isDelayed) {
			delayClass += 'isdelayed';
		};

		var sizeBarStyle = {
			height: callingPoint.currentSize
		};

		return React.createElement(
			'li',
			{ className: mainClasses },
			React.createElement(
				'div',
				{ className: 'calling-point-time' },
				React.createElement(
					'div',
					null,
					callingPoint.scheduled
				),
				React.createElement(
					'div',
					{ className: 'calling-point-due calling-point-timeline ' + delayClass },
					callingPoint.expected
				)
			),
			React.createElement(
				'i',
				{ className: 'journey-bar', style: sizeBarStyle },
				' '
			),
			React.createElement(
				'div',
				{ className: 'calling-point-station-container' },
				React.createElement(
					'div',
					{ className: 'calling-point-station' },
					callingPoint.station
				),
				React.createElement(
					'div',
					{ className: 'calling-point-due' },
					React.createElement(
						'ul',
						null,
						React.createElement(
							'li',
							null,
							React.createElement(
								'span',
								{ className: delayClass },
								callingPoint.isDelayed
							)
						),
						React.createElement(
							'li',
							null,
							'Platform ',
							React.createElement(
								'span',
								null,
								callingPoint.platform
							)
						)
					)
				)
			)
		);
	}
});