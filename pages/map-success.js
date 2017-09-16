import React, { Component } from 'react';
import Link from 'next/link';
import Row from '../components/Row';
import 'isomorphic-fetch';

const BASE_URL = 'https://api.moves-app.com/api/1.1';

const BEARER_INFO = {
  access_token:
    'tt8D765xg2FBM5J37CBW3GI0p2q26p7qJ937lkRiij02bDr9V9CCWCNBdKpQC7tX',
  token_type: 'bearer',
  expires_in: 15551999,
  refresh_token:
    '0l6R05uTycbv37r_b586MJnxV1i4rYqAsT2Pl3ugV428_tSfBB2vutHFjY1jhBzQ',
  user_id: 20887389852517290,
};

const CLIENT_SECRET =
  '98q8H4O6QBSUf_2WM0zAC0FVU86J4nTwN4YeJtwA7Nmx6L91kk36xX02m4Tw2Nn6';
const CLIENT_ID = 'NcwguutGv1rQb51C6wvKFGesVuQfJ9kl';
const REDIRECT_URI = 'http://localhost:3000/map-success';
const SCOPE = 'location activity';

const requestAccessToken = async authorization_code => {
  // const access_url = `https://api.moves-app.com/oauth/v1/access_token?grant_type=authorization_code&code=${authorization_code}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}`;
  // const res = await fetch(access_url, {
  //   method: 'POST',
  // });
  // const bearer = await res.json();
  // props['bearer'] = bearer;

  const props = {};
  // const bearer = BEARER_INFO;
  const daily_url = `${BASE_URL}/user/places/daily/2017-09-16`;
  props['daily_url'] = daily_url;
  const data = await fetch(daily_url, {
    headers: {
      // Authorization: `Bearer ${bearer.access_token}`,
      Authorization: `Bearer cOQ71YR5Pl6He6xwaFhO4qwH5792kvA90vLGkglejIZfPMMsnDc7fXwSCwXB9HP0`,
    },
  });
  const locationData = await data.json();
  props['locationData'] = locationData[0];
  return props;
};

class MapSuccess extends Component {
  static async getInitialProps({ req }) {
    const regex = /(code\=)([0-9a-z_]*)/gi;
    const AUTH_CODE = regex.exec(req.url)[2];
    const res = await requestAccessToken(AUTH_CODE);
    return {
      locationData: res.locationData,
    };
  }

  render() {
    // const AUTHORIZATION_CODE = props.url.query.code;
    // requestAccessToken(AUTHORIZATION_CODE);
    console.log(this.props.locationData);
    const segments = this.props.locationData.segments;
    const firstPlace = segments[0].place;
    console.log(firstPlace);
    return (
      <Row>
        <h1>Success!</h1>
        <p>Du er hos {firstPlace.name}</p>
      </Row>
    );
  }
}

export default MapSuccess;
