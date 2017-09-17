import React, { Component } from 'react';
import Row from '../../components/Row';
import Link from 'next/link';
import 'isomorphic-fetch';
import AuthorizeMovesButton from './authorizeMovesButton';

import { getTokenFromQuery } from '../../lib/utils';
import { getDailyData } from '../../lib/maps-api';

class MapPage extends Component {
  static async getInitialProps({ req }) {
    const regex = /(access_token\=)([0-9a-z_]*)/gi;
    const parsedRegex = regex.exec(req.url);

    if (parsedRegex instanceof Array && parsedRegex.length > 1) {
      const ACCESS_TOKEN = parsedRegex[2];
      const places = await getDailyData(
        ACCESS_TOKEN,
        '2017-09-16',
        '2017-09-17',
      );
      console.log(places);
      return {
        days: places,
      };
    }
    return { days: [] };
  }

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    // const { places } = this.props;
    const places = null;
    if (!(this.props.days instanceof Array) || !this.props.days.length) {
      return (
        <Row>
          <h2>Moves</h2>
          <p>
            <strong>Status:</strong> Du har ikke lagt til noen Moves-konto
          </p>
          <AuthorizeMovesButton />
        </Row>
      );
    }
    if (this.props.days && this.props.days[0]) {
      const mergedSegments = [
        ...this.props.days[0].segments,
        ...this.props.days[1].segments,
      ];

      return (
        <div>
          {mergedSegments.length && (
            <Row>
              <h2>Moves</h2>
              <p>
                <strong>Status:</strong> Moves-konto lagt til ✅
              </p>
              <SegmentList segments={mergedSegments} />
            </Row>
          )}
        </div>
      );
    }
    return <p>Wops!</p>
  }
}

const SegmentList = ({ segments }) => {
  console.log(segments);
  if (segments instanceof Array) {
    return (
      <div>
        {segments.map((segment, index) => {
          const { place, move } = segment;

          if (segment.type === 'move') {
            return (
              <p key={`${segment.startTime}-${segment.endTime}-${index}`}>
                <em>Transport: I kanskje 5 min. </em>
              </p>
            );
          }

          if (segment.type === 'place') {
            const name = place.name || 'Ukjent sted';
            return (
              <div key={`${segment.startTime}-${segment.endTime}-${index}}`}>
                <p>
                  <strong>Sted: </strong>
                  {name}
                </p>
              </div>
            );
          }
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
