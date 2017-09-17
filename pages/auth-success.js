import React, { Component } from 'react';
import Link from 'next/link';
import Row from '../components/Row';
import 'isomorphic-fetch';
import AuthorizeMovesButton from './map/authorizeMovesButton';

import { getTokenFromQuery } from '../lib/utils';
import { requestAccessToken } from '../lib/maps-api';

class MapAuthSuccess extends Component {
  static async getInitialProps({ req }) {

    const regex = /(code\=)([0-9a-z_]*)/gi;
    const parsedRegex = regex.exec(req.url);
    let AUTH_CODE;
    if (parsedRegex instanceof Array && parsedRegex.length > 1) {
      AUTH_CODE = parsedRegex[2];
    }

    if (!AUTH_CODE) {
      return {
        bearer: {
          error: 'Klarte ikke parse callback-url',
        },
      };
    }
    const res = await requestAccessToken(AUTH_CODE);
    return {
      locationData: res.locationData,
      bearer: res.bearer,
    };
  }

  constructor() {
    super();
    this.testLocalStorage = this.testLocalStorage.bind(this);
    this.state = {
      bearer: '',
      error: false,
      errorMsg: '',
    };
  }

  componentDidMount() {
    console.log(this.props);
    const bearer = this.props.bearer;
    if (bearer.hasOwnProperty('error')) {
      this.setState({ error: true, errorMsg: bearer.error });
    } else if (bearer) {
      localStorage.setItem('moves_bearer', JSON.stringify({ bearer }));
      this.testLocalStorage();
      this.setState({ error: false, bearer: bearer });
    } else {
      this.setState({ error: true, errorMsg: 'Ukjent feil' });
    }
  }

  testLocalStorage() {
    const bearer = localStorage.getItem('moves_bearer');
    if (bearer) {
      console.log('local storage', JSON.parse(bearer));
    }
  }

  render() {
    // const segments = this.props.locationData.segments;
    // const firstPlace = segments[0].place;
    if (this.state.bearer) {
      return (
        <Row>
          <h1>Jippi!</h1>
          <p>Vi har nå koblet oss på Moves-appen 🏃</p>
          <Link
            href={`hva-skjedde?access_token=${this.state.bearer.access_token}`}
            className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l"
            title="Gå til map"
          >
            <a>Gå tilbake til kart-siden</a>
          </Link>
        </Row>
      );
    }

    if (this.state.error) {
      return (
        <Row>
          <h1>Fillern...</h1>
          <p className="dib mr1">
            Det ser ut som vi hadde litt problemer med å koble på Moves-appen.
            Her har du feilmeldingen:
          </p>
          <pre className="bg-light-red dib">{this.state.errorMsg}</pre>
          <p>Vil du prøve på nytt?</p>
          <AuthorizeMovesButton />
        </Row>
      );
    }
    return (
      <Row>
        <h1>Laster...</h1>
        <p>Vent et øyeblikk mens vi kobler oss sammen med Moves-appen</p>
      </Row>
    );
  }
}

export default MapAuthSuccess;
