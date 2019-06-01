import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol,
  MDBCard, MDBCardBody, MDBInput,
  MDBBtn, MDBIcon
} from 'mdbreact';
import AddMoreCurrencies from './AddMoreCurrencies';
import axios from "axios";

export default class Converter extends Component {

  state = {
    amount: 10,

  }

  inputAmount = (e) => {
    this.setState({
      amount : e.target.value
    })
  }

  convertHandler = () => {

  }

  componentDidMount() {
    axios.get("https://api.exchangeratesapi.io/latest?base=USD")
      .then(response => {
        const currencyAr = ["USD"]
        for (const key in response.data.rates) {
          currencyAr.push(key)
        }
        this.setState({ currencies: currencyAr.sort() })
      })
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <div className="header pt-3 peach-gradient">
                <MDBRow className="d-flex justify-content-center">
                  <h3 className="white-text mb-3 pt-3 font-weight-bold">
                    Foreign Exchange Currency App
                  </h3>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">
                <MDBInput
                  label="USD - United States Dollars"
                  group
                  type="text"
                  value={this.state.amount}
                  onChange={this.inputAmount}
                  validate />
                ::: show list :::
                <AddMoreCurrencies />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
