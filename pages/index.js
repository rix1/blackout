import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import BGImage from '../components/BGImage';
import ProductSection from '../components/ProductSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';

const MainBody = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Redline = () => <div className="w-100 bg-red absolute" style={{ height: '4px' }} />;

export default () => (
  <MainBody>
    <Redline />
    <Navbar />
    <BGImage filePath="/static/bg-jesus.jpg">
      <div className="w-100 h-100 flex-center">
        <div className="tc ph4">
          <h1 className="f-subheadline-l f1-m f2 white ff-lato ts">
            <span className="db f3-ns f4 ttu tracked white o-70 ts-white">We believe:</span>
            All lives are equal
          </h1>
          <p className="ff-lato white f3-ns f4 mw7 center ts">
            – But nature doesn't always agree and some infants need a little extra just to get
            started. Saving those unlucky few shouldn't be reserved to experts with 20-years
            experience with <span className="">neonates and intensive care.</span>
          </p>
          <p className="ff-lato white f3-ns f4 mw7 center ts">
            That's why we designed the <strong>UMP-123</strong>{' '}
          </p>
        </div>
      </div>
    </BGImage>

    <ProductSection />

    <TeamSection />

    <ContactSection />
    <Redline />
  </MainBody>
);
