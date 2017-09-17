import React, { Component } from 'react';
import Row from '../../components/Row';
import Link from 'next/link';
import 'isomorphic-fetch';
import AuthorizeMovesButton from './authorizeMovesButton';
import { BASE_API_URL } from './constants';

const getDailyData = async (dayString, access_token) => {
  const from = '2017-09-16';
  const to = '2017-09-17';
  const daily_url = `${BASE_API_URL}/user/places/daily/${dayString}`;
  const story_url = `${BASE_API_URL}/user/storyline/daily?from=${from}&to=${to}&trackPoints=true`;

  const placesResponse = await fetch(story_url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return await placesResponse.json();
};

class MapPage extends Component {
  static async getInitialProps({ req }) {
    // const access_token = 'access_token_lol';
    // const temp = new RegExp(`(${queryParam}\=)([0-9a-z_]*)`, 'ig');
    // console.log(temp);

    const regex = /(access_token\=)([0-9a-z_]*)/gi;
    const parsedRegex = regex.exec(req.url);
    if (parsedRegex instanceof Array && parsedRegex.length > 1) {
      const ACCESS_TOKEN = parsedRegex[2];
      const places = await getDailyData('2017-09-16', ACCESS_TOKEN);
      return {
        days: places,
      };
    }

    return { places: null };
  }

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    // const { places } = this.props;
    const places = null;
    console.log(this.props);

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
        {!places && (
          <Row>
            <h2>Moves</h2>
            <p>
              <strong>Status:</strong> Du har ikke lagt til noen Moves-konto
            </p>
            <AuthorizeMovesButton />
          </Row>
        )}

        {places && (
          <Row>
            <h2>Moves</h2>
            <p>
              <strong>Status:</strong> Moves-konto lagt til ✅
            </p>
            <SegmentList places={places[0]} />
          </Row>
        )}
      </div>
    );
  }
}

const SegmentList = ({ places }) => {
  const { segments } = places;

  if (segments instanceof Array) {
    return (
      <div>
        {segments.map(seg => {
          const { place } = seg;
          const name = place.name || 'Ukjent sted';
          return (
            <div>
              <p>
                <strong>Sted:{' '}</strong>
                {name}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div>
      <p>Wops, klarte ikke liste ut stedene du har vært</p>
    </div>
  );
};

export default MapPage;
