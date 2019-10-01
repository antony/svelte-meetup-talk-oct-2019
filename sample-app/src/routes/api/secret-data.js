export async function get(req, res, next) {
  const jwt = req.cookies['token']
  if (!jwt) { return res.status(403).end() }
	res.end(JSON.stringify({ secret: 'fish' }))
}