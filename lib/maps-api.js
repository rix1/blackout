import {
  BASE_API_URL,
  REDIRECT_URI,
  CLIENT_SECRET,
  CLIENT_ID,
  SCOPE,
} from './constants';

async function requestAccessToken(authorization_code) {
  console.info(
    'INFO: Requesting access token with auth code',
    authorization_code,
  );
  const props = {};

  const access_url = `https://api.moves-app.com/oauth/v1/access_token?grant_type=authorization_code&code=${authorization_code}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}`;
  const res = await fetch(access_url, {
    method: 'POST',
  });
  const bearer = await res.json();
  console.info('INFO bearer received', bearer);
  props['bearer'] = bearer;

  // props['locationData'] = getDailyData('2017-09-16')[0];
  return props;
}

async function getDailyData(access_token, from, to) {
  // const from = '2017-09-16';
  // const to = '2017-09-17';
  // const daily_url = `${BASE_API_URL}/user/places/daily/${dayString}`;

  if (!access_token || !from || !to) {
    console.error('ERROR: getDailyData is missing params');
  }
  const story_url = `${BASE_API_URL}/user/storyline/daily?from=${from}&to=${to}&trackPoints=true`;

  const placesResponse = await fetch(story_url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return await placesResponse.json();
}

export { requestAccessToken, getDailyData };
