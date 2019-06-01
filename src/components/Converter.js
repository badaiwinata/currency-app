import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol,
  MDBCard, MDBCardBody, MDBInput,
  MDBBtn, MDBIcon
} from 'mdbreact';
import axios from "axios";
import Contoh from './contoh'

export default class Converter extends Component {

  state = {
    result: null,
    amount: 10,
    toCurrency: 'GBP',
    currencies: []
  }

  inputAmount = (e) => {
    this.setState({
      amount: e.target.value
    })
  }

  convertHandler = () => {

  }

  componentDidMount() {
    axios.get("https://api.exchangeratesapi.io/latest?base=USD")
      .then(response => {
        const currencyAr = ['USD']
        for (const key in response.data.rates) {
          currencyAr.push(key)
        }
        this.setState({ currencies: currencyAr.sort() })
      })
      .catch(err => {
        console.log("Opps", err.message);
      });
  }

  selectCurrency = (e) => {
    this.setState({
      toCurrency: e.target.value
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

              <MDBCardBody className="mx-4 mt-">
                <MDBInput
                  label="USD - United States Dollars"
                  group
                  type="text"
                  value={this.state.amount}
                  onChange={this.inputAmount}
                  validate />
                <MDBBtn
                  size="sm"
                  type="button"
                  color="orange"
                  rounded
                  onClick={this.convertHandler}
                >
                  <MDBIcon icon="exchange-alt" /> Convert
                </MDBBtn>
                {this.state.result &&
                  <h3>{this.state.result}</h3>
                }

                <div>
                  <select
                    className="browser-default custom-select"
                    value={this.state.toCurrency}
                    onChange={this.selectCurrency}
                  >
                    {this.state.currencies.map(cur => (
                      <option key={cur}>{cur}</option>
                    ))}
                  </select>
                  <MDBBtn
                    size="sm"
                    type="button"
                    color="orange"
                    rounded
                  >
                    <MDBIcon icon="exchange-alt" /> Add
                </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <Contoh/>
      </MDBContainer>
    )
  }
}
