import React, { PropTypes } from 'react';
import Row from '../../components/Row';

const putPaymet = async (place, price) => {
  const res = await fetch(url, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer 5ccf3dd5-ad6a-3130-948e-3d9a48e0e0de',
          },
          body: {
            data: {
              "debitAccountNumber": "14083098819",
              "paymentDate": "2017-09-15",
              "message": place,
              "amount": price,
            }
          }
        });
        console.log(res);
}

const Payment = props => {
  return (
    <Row>
      <h1>Payment</h1>
      <section>
        <h2>Todo:</h2>
        <form onSubmit={(e) => {e.preventDefault(); res(e.target.sted.value, e.target.pris.value);}}>
          Sted: <input type="text" name="sted"></input><br></br>
          Pris: <input type="text" name="pris"></input><br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </section>
    </Row>
  );
};

export default Payment;
