import React, { Component } from 'react';
import moment from 'moment';

import Row from '../../components/Row';
import { getAccounts } from '../../lib/transaction-api';
import { getDailyData } from '../../lib/maps-api';

class PhotosPage extends Component {
  static async getInitialProps({ req }) {
    const accounts = await getAccounts();

    let days;
    const regex = /(access_token\=)([0-9a-z_]*)/gi;
    const parsedRegex = regex.exec(req.url);

    if (parsedRegex instanceof Array && parsedRegex.length > 1) {
      const ACCESS_TOKEN = parsedRegex[2];
      const places = await getDailyData(
        ACCESS_TOKEN,
        '2017-09-16',
        '2017-09-17',
      );
      days = places;
    } else {
      days = null;
    }

    return {
      accounts: accounts || [],
      days,
    };
  }

  render() {
    // if (!this.props.accounts.length || this.props.days) {
    // return <p>Laster...</p>
    // }

    const transactions = this.props.accounts[1].transactions;
    const mergedSegments = [
      ...this.props.days[0].segments,
      ...this.props.days[1].segments,
    ];
    const places = mergedSegments.filter(e => e.type === 'place');

    const arr = transactions.slice(1, transactions.length - 1);

    const computedTransactions = arr.map(transaction => {
      const msg = JSON.parse(transaction['message/KID']);
      return {
        ...transaction,
        timeStamp: msg.timestamp,
        place: msg.message,
        amount: Number(transaction.amount),
      };
    });

    const merged = places.map(place => {
      const transactionsAtPlace = [];
      const start = Number(moment(place.startTime).format('x'));
      const end = Number(moment(place.endTime).format('x'));
      computedTransactions.forEach(transaction => {
        const transactionTime = new Date(transaction.timeStamp).getTime();
        if (transactionTime >= start && transactionTime <= end) {
          transactionsAtPlace.push(transaction);
        }
      });

      return {
        ...place,
        transactions: transactionsAtPlace,
      };
    });

    console.log();

    return (
      <Row>
        <h1>Photos</h1>
        <section>
          <h2>Transaksjoner</h2>
          <ul>
            {merged.map(place => (
              <Place
                name={place.place.name}
                transactions={place.transactions}
              />
            ))}
          </ul>
        </section>
      </Row>
    );
  }
}

const Place = ({ name, transactions = [] }) => {
  let _name;
  console.log(transactions);
  if (!name && transactions.length) {
    console.log('missing name');
    _name = transactions[0].place;
  }
  if (!_name && !name) {
    return null;
  }
  return (
    <div>
      <p>
        <strong>Sted:</strong> {name || _name}
      </p>
      {transactions.length && (
        <ul>
          {transactions.map(
            trans => trans.amount !== 0 && <Dollar amount={trans.amount} />,
          )}
        </ul>
      )}
      <hr />
    </div>
  );
};

const Dollar = ({ amount }) => (
  <div className="dib bg-light-green ba b--light-silver pv2 ph4 mh2">
    <span className="black-50">{amount}</span>
  </div>
);

export default PhotosPage;
