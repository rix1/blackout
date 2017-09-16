import React from 'react';
import Link from 'next/link';
import Row from '../components/Row';

const Index = props => {
  return (
    <Row>
      <h1>Blackout APP</h1>
      <section>
        <h2>Development routes:</h2>
        <ul>
          <li>
            <Link
              prefetch
              href="/photos"
              className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l"
              title="Photos"
            >
              Photos
            </Link>
          </li>
          <li>
            <Link
              prefetch
              href="/transactions"
              className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l"
              title="Transactions"
            >
              Transactions
            </Link>
          </li>
          <li>
            <Link
              prefetch
              href="/map"
              className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l"
              title="Map"
            >
              Map
            </Link>
          </li>
        </ul>
      </section>
    </Row>
  );
};

export default Index;
