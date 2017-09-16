import React, { PropTypes } from 'react';
import Row from '../../components/Row';


const putPaymet = async (place, price) => {
  const debitAccountNumber = '14083098820';
  const apiEndpoint = 'https://dnbapistore.com/hackathon/payments/1.0/payment/card';
  const d = new Date();

  const message = {
    message: place,
    timestamp: new Date().toISOString(),
  }
  const res = await fetch(`${apiEndpoint}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer 5ccf3dd5-ad6a-3130-948e-3d9a48e0e0de',
            'content-type': 'application/json',
          },
          body: JSON.stringify({
                "debitAccountNumber": debitAccountNumber,
                "paymentDate": `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`,
                "message": JSON.stringify(message),
                "amount": price,
              })
        });
}

const Payment = props => {
  return (
    <Row>
      <h1>Payment</h1>
      <section>
        <h2>Todo:</h2>
        <form onSubmit={(e) => {e.preventDefault(); putPaymet(e.target.sted.value, e.target.pris.value);}}>
          Sted: <input type="text" name="sted"></input><br></br>
          Pris: <input type="text" name="pris"></input><br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </section>
    </Row>
  );
};

export default Payment;
