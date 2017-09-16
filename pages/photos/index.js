import React, { PropTypes } from 'react';
import Row from '../../components/Row';

const PhotosPage = props => {
  return (
    <Row>
      <h1>Photos</h1>
      <section>
        <h2>Todo:</h2>
        <ul>
          <li>
            Find source of photos (e.g. Flickr, Dropbox, File system, Google
            Photos)
          </li>
          <li>Fetch photos taken within a Date window (yesterday)</li>
          <li>Display photos</li>
          <li>Draw filters on top of photos</li>
        </ul>
      </section>
    </Row>
  );
};

export default PhotosPage;
