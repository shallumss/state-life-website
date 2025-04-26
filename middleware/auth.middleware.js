exports.basicAuth = (req, res, next) => {
  const auth = req.headers.authorization || '';
  const [scheme, creds] = auth.split(' ');
  if (scheme !== 'Basic') return res.status(401).send('Unauthorized');
  const [user, pass] = Buffer.from(creds, 'base64').toString().split(':');
  if (user === process.env.BASIC_AUTH_USER && pass === process.env.BASIC_AUTH_PASS) {
    return next();
  }
  res.status(401).send('Unauthorized');
};