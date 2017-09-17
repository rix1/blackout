function getTokenFromQuery(url, query) {
  console.log(url, query);
  if (!url || !query) {
    console.error('ERROR: getTokenFromQuery is missing params');
  }
  const regex = new RegExp(`(${query}\=)([0-9a-z_]*)`, 'ig');
  const parsedRegex = regex.exec(req.url);
  if (parsedRegex instanceof Array && parsedRegex.length > 1) {
    return parsedRegex[2]; // TOKEN from query
  }
  return '';
}

export { getTokenFromQuery };
