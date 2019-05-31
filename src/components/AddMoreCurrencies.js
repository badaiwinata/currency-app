import React, { Component } from 'react';
import { MDBSelect } from "mdbreact";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default class AddMoreCurrencies extends Component {

	state = {
		options: [
			{
				text: "CAD",
				value: "1"
			},
			{
				text: "IDR",
				value: "2"
			},
			{
				text: "GBP",
				value: "3"
			},
			{
				text: "CHF",
				value: "4"
			},
			{
				text: "SGD",
				value: "5"
			},
			{
				text: "INR",
				value: "5"
			},
			{
				text: "MYR",
				value: "5"
			},
			{
				text: "JPY",
				value: "5"
			},
			{
				text: "KRW",
				value: "5"
			}
		]
	};

	render() {
		return (
			<div>
				<select className="browser-default custom-select" btnColor="info" btn-size="sm">
					<option >Add More Currencies</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>
			</div>
		)
	}
}
