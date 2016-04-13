var ScheduleHeader = React.createClass({
  displayName: "ScheduleHeader",


  render: function () {
    console.log(this.props.journeyData);
    return React.createElement(
      "header",
      { className: "journey-plan-header" },
      React.createElement(
        "h2",
        { className: "truncate" },
        React.createElement(
          "span",
          null,
          this.props.journeyData.scheduled,
          " "
        ),
        React.createElement(
          "span",
          null,
          this.props.journeyData.origin
        ),
        React.createElement(
          "span",
          null,
          " To "
        ),
        React.createElement(
          "span",
          null,
          this.props.journeyData.destination,
          " "
        )
      )
    );
  }
});