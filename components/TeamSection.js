import React from 'react';
import Row from './Row';
import PersonBox from './PersonBox';

const TeamSection = () => (
  <section id="team" className="bg-gray-light pv3 shadow-inset">
    <Row>
      <h2 className="tc f2 mt0 mb5 red">The people behind</h2>
      <div className="mw9 center">
        <PersonBox imgSrc="/static/terje.jpg">
          <h3>Dr. Terje Eide</h3>
          <p>
            Terje is the founder of Medconsult and the original creator of the UMP. Terje has been
            practicing anaesthesiology and intensive care for the last 30+ years at various
            hospitals.
          </p>
        </PersonBox>
        <PersonBox imgSrc="/static/martine.jpg">
          <h3>Martine Bjørstad</h3>
          <p>
            Martine is practicing law at EY Consulting and has first-hand experience with working at
            hospitals.
          </p>
        </PersonBox>
        <PersonBox imgSrc="/static/edvard.jpg">
          <h3>Edvard Eide</h3>
          <p>
            When not studying medicine in Hungary, Edvard occupy his spare time with conseptulizing,
            designing and prototyping.
          </p>
        </PersonBox>
      </div>
    </Row>
  </section>
);

export default TeamSection;
