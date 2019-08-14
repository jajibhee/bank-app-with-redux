import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import Button from "./component/Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { accountActions } from "./actions/accountActions";

class App extends Component {
state = {
      username: 'Jaji'
    };
  
  componentDidMount() {
    this.props.actions.getBalances();
  }

  handleIncrement = e => {
    this.props.actions.increaseBalance(
      this.props.account.amount,
      e.target.dataset.amount
    );
  };

  handleDecrement = e => {
    this.props.actions.reduceBalance(
      this.props.account.amount,
      e.target.dataset.amount
    );
  };

  render() {
    const { username } = this.state;
    const { amount: totalAmount } = this.props.account;

    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>
        <Button
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    account: state.account
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
