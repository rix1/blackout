import React from 'react';
import InfoBox from './InfoBox';
import Row from './Row';

const Heading = ({children}) => <h2 className="mt0 red">{children}</h2>


const ProductSection = props => (
  <section id="product">
    <Row>
      <InfoBox left>
        <img className="w-100 h-auto br1" src="/static/surgery.jpg" />
      </InfoBox>
      <InfoBox>
        <Heading>Built from experience</Heading>
        <p className="f4">
          After working in intensive care for 30+ years we spent too much time and energy.
          Resuscitation that only yielded minimal or fatal results.
        </p>
      </InfoBox>
    </Row>

    <Row>
      <InfoBox>
        <img className="w-100 h-auto br1" src="/static/drawing-eddie.jpg" />
      </InfoBox>
      <InfoBox left>
        <Heading>Patented solution</Heading>
        <p className="f4">
          After working with intensive care for 30+ years we spent too much time with minimal or bad
          results. This is why we changed this
        </p>
      </InfoBox>
    </Row>

    <Row>
      <InfoBox left>
        <img className="w-100 h-auto br1" src="/static/hopeful-child.jpg" />
      </InfoBox>
      <InfoBox>
        <Heading>Simple. For everyone.</Heading>
        <p className="f4">
          Life saving equipment shouln't be reserved for the priviledged. But to keep the costs
          down, we needed to think different.
        </p>
      </InfoBox>
    </Row>
  </section>
);

export default ProductSection;
