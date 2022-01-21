import React, { useState, useEffect } from "react";
import {
	FaEnvelopeOpen,
	FaUser,
	FaCalendarTimes,
	FaMap,
	FaPhone,
	FaLock,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";
const imgDefaul = "https://randomuser.me/api/portraits/men/75.jpg";

const App = () => {
	const [loading, setLoading] = useState(false);
	const [person, setPerson] = useState(null);
	const [value, setValue] = useState("random person");
	const [title, setTitle] = useState("name");

	const getPerson = async () => {
		setLoading(true);

		const response = await fetch(url);
		const data = await response.json();

		//console.log(data);

		const person = data.results[0];
		//console.log(person);

		const { phone, email } = person;
		const { large: image } = person.picture;
		const { password } = person.login;
		const { first, last } = person.name;
		const {
			dob: { age },
		} = person;
		const {
			street: { number, name },
		} = person.location;

		const newPerson = {
			image,
			phone,
			email,
			password,
			age,
			street: `${number}${name}`,
			name: `${first}${last}`,
		};

		setPerson(newPerson);
		setLoading(false);
		setTitle("name");
		setValue(newPerson.name);
	};

	useEffect(() => {
		getPerson();
	}, []);

	return <div>App</div>;
};

export default App;
