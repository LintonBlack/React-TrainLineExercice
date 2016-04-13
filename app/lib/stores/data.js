var scheduleData = {},
    difTime,
    urlJson = 'data/ldb.json',
    barSize = 63,
    circleSize = 25,
    barMaxSize = barSize + 'px',
    barInBetweenSize = '30px',
    barNoHeight = '0px',
    callingPoints = [],
    journey = {},
    delay = '',
    trainPosition = '',
    arrivedAtDestination = false,
    index = 0,
    distance = 0,
    ScheduleStore = new EventEmitter();

function _ajaxCall(url) {
	return $.ajax({
		url: urlJson,
		async: false,
		dataType: 'json'
	});
}

ScheduleStore.getData = function (url) {
	return _ajaxCall(url).done(function (data) {
		scheduleData = data;
		callingPoints = scheduleData.callingPoints;
		journey = scheduleData.journey;
		ScheduleStore.defineParams();
		return scheduleData;
	});
};

ScheduleStore.defineParams = function () {

	for (key in callingPoints) {
		// Define if we've already passed that calling point			
		callingPoints[key].actual ? callingPoints[key].passed = true : callingPoints[key].passed = false;

		//Define journey-bar size	                       
		callingPoints[key].currentSize = barNoHeight;
		ScheduleStore.setBarSize(callingPoints[key], distance, index);
		callingPoints[key].actual ? distance++ : '';
		index++;

		// set origin			
		callingPoints[key].station === journey.origin ? callingPoints[key].origin = true : callingPoints[key].origin = false;

		// set destination			
		callingPoints[key].station === journey.destination ? callingPoints[key].destination = true : callingPoints[key].destination = false;

		//set delay
		callingPoints[key].isDelayed = ScheduleStore.setDelay(callingPoints[key].scheduled, callingPoints[key].expected);

		//set Train Positioning
		scheduleData['trainPosition'] = ScheduleStore.trainPosition(arrivedAtDestination, distance);
	}
};

//set the right height of the bar bettween the calling points
ScheduleStore.setBarSize = function (point, distance, index) {
	// check if it the origin and the train has already passed the station
	if (point.actual && distance === index) {
		// check if we're at least at the second station
		if (index > 0) {
			callingPoints[index - 1].currentSize = barMaxSize;
		}

		//not at destination
		if (index < callingPoints.length - 1) {
			point.currentSize = barInBetweenSize;
		} else {
			arrivedAtDestination = true;
		}
	}
};

ScheduleStore.setDelay = function (actual, expected) {

	var hd = actual.split(":");
	var hf = expected.split(":");
	hd[0] = eval(parseInt(hd[0]));
	hd[1] = eval(parseInt(hd[1]));
	hd[2] = eval(parseInt(hd[2]));
	hf[0] = eval(parseInt(hf[0]));
	hf[1] = eval(parseInt(hf[1]));
	hf[2] = eval(parseInt(hf[2]));
	if (hf[2] < hd[2]) {
		hf[1] = hf[1] - 1;hf[2] = hf[2] + 60;
	};
	if (hf[1] < hd[1]) {
		hf[0] = hf[0] - 1;hf[1] = hf[1] + 60;
	};
	if (hf[0] < hd[0]) {
		hf[0] = hf[0] + 24;
	};

	difTime = (hf[0] - hd[0]) * 60 + (hf[1] - hd[1]);

	if (difTime === 0) {
		delay = 'On time';
	} else {
		delay = difTime + ' min late';
	};

	return delay;
};

ScheduleStore.trainPosition = function (arrivedAtDestination, distance) {
	//if train arrived at destination
	if (arrivedAtDestination) {
		return distance * barSize + 'px';
	} else {
		return distance * barSize + (distance - 2) * (circleSize / 2) + 'px';
	}
};