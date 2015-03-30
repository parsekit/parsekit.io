
'use strict';

var React = require('react'),
	Router = require('react-router');

var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');


module.exports = React.createClass({
	mixins: [Router.State],
	render: function() {
		var name = this.getRoutes().reverse()[0].name;
		return (
		<div className="main">
			<TransitionGroup component="div" transitionName="example">
				<Router.RouteHandler key={name}/>
			</TransitionGroup>
		</div>
		);
	}
});
