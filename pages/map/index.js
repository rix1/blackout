import React, { Component } from 'react';
import Row from '../../components/Row';
import Link from 'next/link';
import 'isomorphic-fetch';

const CLIENT_SECRET =
  '98q8H4O6QBSUf_2WM0zAC0FVU86J4nTwN4YeJtwA7Nmx6L91kk36xX02m4Tw2Nn6';
const CLIENT_ID = 'NcwguutGv1rQb51C6wvKFGesVuQfJ9kl';
const REDIRECT_URI = 'http://localhost:3000/map-success';
const SCOPE = 'location activity';

class MapPage extends Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();
    return { stars: json.stargazers_count };
  }

  render() {
    return (
      <div>
        <Row>
          <div>
            <h1>Map page</h1>
            <section>
              <h2>Todo:</h2>
              <ul>
                <li>Fetch location data</li>
                <li>Display location data points in map container</li>
                <li>Draw route between data points</li>
              </ul>
            </section>
          </div>
        </Row>
        <hr />
        <Row>
          <Link
            href={`https://api.moves-app.com/oauth/v1/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}`}
            className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l"
            title="Moves auth"
          >
            Authorize Moves
          </Link>
        </Row>
      </div>
    );
  }
}

export default MapPage;
