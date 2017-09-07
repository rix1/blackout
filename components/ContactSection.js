import React from 'react';
import Row from './Row';
import PersonBox from './PersonBox';

const ContactSection = () => (
  <section id="demo" className="flex-center tc">
    <Row>
      <h2 className="tc m4 f2 red">Want more information?</h2>
      <p className="f3-ns f4">
        Send us an e-mail at{' '}
        <a href="mailto:demo@neoresq.com" className="link underline blue hover-orange">
          demo@neoresq.com
        </a>{' '}
        for a private demo of the <strong>UMP-123</strong>
      </p>
    </Row>
  </section>
);

export default ContactSection;
