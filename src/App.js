import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "./Person/Person";

class App extends Component {
	textButtom = "showPersons";

	state = {
		persons: [
			{ id: "sas", name: "max", age: 28 },
			{ id: "dasd", name: "Manndahsdj", age: 26 },
			{ id: "adsdasd", name: "si", age: 63 },
		],
		showPersons: false,
	};

	deletePersonHandler = (index) => {
		const persons = [...this.state.persons];
		persons.splice(index, 1);
		this.setState({ persons });
	};

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});

		const persons = [...this.state.persons];
		persons[personIndex].name = event.target.value;
		this.setState({ persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;

		this.setState({ showPersons: !doesShow });
		!doesShow ? (this.textButtom = "hide Persons") : (this.textButtom = "ShowPersons");
	};

	render() {
		let persons = null;
		let btnClasses = "";

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={this.deletePersonHandler.bind(this, index)}
								changed={(event) => this.nameChangeHandler(event, person.id)}
								name={person.name}
								age={person.age}
								key={person.id}></Person>
						);
					})}
				</div>
			);
			btnClasses = classes.Red;
		}

		let AssignedClasses = [];
		if (this.state.persons.length <= 2) {
			AssignedClasses.push(classes.red);
		}
		if (this.state.persons.length <= 1) {
			AssignedClasses.push(classes.bold);
		}

		//* el bonito return :D
		return (
			<div className={classes.App}>
				<h1> im the title</h1>
				<p className={AssignedClasses.join(" ")}>hi, i'm the subTitle </p>
				<button className={btnClasses} onClick={this.togglePersonsHandler}>
					{this.textButtom}
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
