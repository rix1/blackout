import React from 'react';
import Link from 'next/link';

// const CLIENT_SECRET =
//   '98q8H4O6QBSUf_2WM0zAC0FVU86J4nTwN4YeJtwA7Nmx6L91kk36xX02m4Tw2Nn6';
const CLIENT_ID = 'NcwguutGv1rQb51C6wvKFGesVuQfJ9kl';
const REDIRECT_URI = 'http://localhost:3000/map/auth-success';
const AUTH_URL = 'https://api.moves-app.com/oauth/v1';
const SCOPE = 'location activity';

const AuthorizeMovesButton = props => {
  return (
    <Link
      href={`${AUTH_URL}/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}`}
      className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l"
      title="Moves auth"
    >
      <a>Legg til Moves-konto</a>
    </Link>
  );
};

export default AuthorizeMovesButton;
