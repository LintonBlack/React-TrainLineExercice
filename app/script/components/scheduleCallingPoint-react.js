var CallingPoint = React.createClass({	

	propTypes : {
		callingPoint : React.PropTypes.object.isRequired
	},

	render : function() {
		var callingPoint = this.props.callingPoint;
		var mainClasses = 'calling-point'; 		
			if(callingPoint.passed) {
				mainClasses +=' selected'
			};
			if(callingPoint.origin) {
				mainClasses +=' origin'
			};
			if(callingPoint.destination) {
				mainClasses +=' destination'
			};

		var delayClass = '';
			if(callingPoint.isDelayed) {
				delayClass +='isdelayed'
			};
		
		var sizeBarStyle = {
		  height: callingPoint.currentSize
		};

	return (
		<li className={mainClasses}>
			<div className="calling-point-time">
			    <div>{callingPoint.scheduled}</div> 
			    <div  className={'calling-point-due calling-point-timeline ' + delayClass}>{callingPoint.expected}</div> 
			</div>
			<i className="journey-bar" style={sizeBarStyle}>&nbsp;</i> 
			<div className="calling-point-station-container">           
			    <div className="calling-point-station">{callingPoint.station}</div>
			    <div className="calling-point-due">
			        <ul>
			            <li>
			                <span className={delayClass}>{callingPoint.isDelayed}</span>
			            </li>
			            <li>Platform <span>{callingPoint.platform}</span></li>
			        </ul>
			        
			    </div>
			</div>
		</li>
		);

	}
});

