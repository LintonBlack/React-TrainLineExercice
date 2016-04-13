ReactDOM.render(
      React.createElement(Schedule, null),
      document.getElementById('schedule')
);

var myemitter = new EventEmitter();
	
	myemitter.on('STARTED_THE_APP', function() {
		console.log('started the app');
	})

	myemitter.on('STARTED_THE_APP', function() {
		console.log('started the app #2');
	})

	myemitter.emit('STARTED_THE_APP')
