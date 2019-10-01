const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFudG9ueSBKb25lcyIsImlhdCI6MTUxNjIzOTAyMn0.lRDwwE5SA3Pe6F0DWS7hKJBPxr5UESxkf3VTqPsemaE'

export async function get(req, res, next) {
  const inAnHour = new Date()
  inAnHour.setHours(inAnHour.getHours() + 1)
  res.setHeader('Set-Cookie', `token=${jwt}; HttpOnly; Path=/`)
	res.end()
}