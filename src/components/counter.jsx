import React, { Component } from "react";

class Counter extends Component {
	state = {
		value: this.props.value,
	};

	handleIncrement() {
		this.setState({ value: this.state.value + 1 });
	}

	render() {
		console.log(this.props);
		return (
			<div>
				{this.props.children}
				<span className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>

				<button
					onClick={() => this.handleIncrement()}
					type="button"
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>

				<button
					onClick={() => this.props.onDelete(this.props.id)}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value: count } = this.state;
		const x = "Zero";
		return count === 0 ? x : count;
	}
}

export default Counter;

// ctrl + d -> multicursor editing
