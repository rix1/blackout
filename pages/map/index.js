import React, { Component } from 'react';
import Row from '../../components/Row';
import Link from 'next/link';
import 'isomorphic-fetch';
import AuthorizeMovesButton from './authorizeMovesButton';

class MapPage extends Component {
  static async getInitialProps({ req }) {
    const ACCESS_TOKEN = getTokenFromQuery(req.url, 'access_token');

    if (!ACCESS_TOKEN) {
      return { places: null };
    }

    const places = await getDailyData('2017-09-16', ACCESS_TOKEN);
    return {
      days: places,
    };
  }

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

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
                <strong>Sted: </strong>
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
