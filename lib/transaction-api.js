import 'isomorphic-fetch';

async function getAccounts() {
  const customerId = '12345678910';
  const apiEndpoint =
    'https://dnbapistore.com/hackathon/accounts/1.0/account/customer';
  const res = await fetch(`${apiEndpoint}/${customerId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer 5ccf3dd5-ad6a-3130-948e-3d9a48e0e0de',
    },
  });

  const json = await res.json();
  console.log(json);
  const accounts = json.accounts || [];

  const fromDate = '01092017';
  const toDate = '17092017';

  await Promise.all(
    accounts.map(async account => {
      const url = `https://dnbapistore.com/hackathon/accounts/1.0/account?accountNumber=${account.accountNumber}&customerID=${customerId}&dateFrom=${fromDate}&dateTo=${toDate}`;
      console.log(url);

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer 5ccf3dd5-ad6a-3130-948e-3d9a48e0e0de',
        },
      });

      const transactions = await res.json();
      console.log(transactions);
      account.transactions = transactions.transactions || [];
      return account;
    }),
  );

  return accounts;
}

export { getAccounts };
