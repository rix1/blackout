import React, { PropTypes, Component } from 'react';
import Row from '../../components/Row';
import { getAccounts } from '../../lib/transaction-api';

class TransactionsPage extends Component {
  static async getInitialProps() {
    const accounts = await getAccounts();
    return {
      accounts: accounts || [],
    };
  }

  render() {
    console.log(this.props);
    return (
      <Row>
        <h1>Transactions</h1>
        <section>
          <h2>Todo:</h2>
          <ul>
            <li>Research API</li>
            <li>List transactions</li>
            <li>List transactions</li>
          </ul>
          {this.props.accounts.map((account, index) => (
            <div key={index} id={account.accountId}>
              <h3>
                {account.accountNumber}: {account.availableBalance}kr
              </h3>
              <ul>
                {account.transactions.map((transaction, i) => (
                  <li key={i} id={transaction.transactionID}>
                    {transaction['message/KID']}: {transaction.amount}kr
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </Row>
    );
  }
}

export default TransactionsPage;
