import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
    sirv('static', { dev }),
    cookieParser(),
		sapper.middleware({
      session: req => {
        const token = req.cookies['token']
        const profile = token ? jwt.decode(token) : false
        return { authenticated: !!profile, name: profile.name }
      }
    })
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
