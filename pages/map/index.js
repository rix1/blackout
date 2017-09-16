import React, { PropTypes } from 'react';
import Row from '../../components/Row';

const MapPage = props => {
  return (
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
  );
};

export default MapPage;
