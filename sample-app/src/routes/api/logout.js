export async function get(req, res, next) {
  const jwt = req.cookies['token']
  res.setHeader('Set-Cookie', `token=${jwt}; HttpOnly; Path=/; Max-Age=0`)
	res.end()
}