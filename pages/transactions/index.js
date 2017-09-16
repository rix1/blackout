import React, { PropTypes, Component } from 'react';
import 'isomorphic-fetch'

import Row from '../../components/Row';

class TransactionsPage extends Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const customerId = '19078984062';
    const apiEndpoint = 'https://dnbapistore.com/hackathon/accounts/1.0/account/customer';
    const res = await fetch(`${apiEndpoint}/${customerId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 5ccf3dd5-ad6a-3130-948e-3d9a48e0e0de',
      }
    });

    const json = await res.json();
    console.log(json);
    const accounts = json.accounts || [];

    const fromDate = '01092017';
    const toDate = '16092017';


    await Promise.all(accounts.map(async account => {
      const url = `https://dnbapistore.com/hackathon/accounts/1.0/account?accountNumber=${account.accountNumber}&customerID=${customerId}&dateFrom=${fromDate}&dateTo=${toDate}`;
      console.log(url);

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer 5ccf3dd5-ad6a-3130-948e-3d9a48e0e0de',
        }
      });

      const transactions = await res.json();
      console.log(transactions);
      account.transactions = transactions.transactions;
      return account;
    }))

    return { accounts }
  }

  render() {
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
            {this.props.accounts.map(account => (
              <div id={account.accountId}>
                <h3>
                  {account.accountNumber}: {account.availableBalance}kr
                </h3>
                <ul>
                  {account.transactions.map(transaction => (
                  <li id={transaction.transactionID}>{transaction['message/KID']}: {transaction.transactionType}</li>
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
