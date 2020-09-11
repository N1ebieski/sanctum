# api.sanctum.local

Frontend implementation of authentication [by Laravel Sanctum](https://github.com/N1ebieski/api.sanctum.local) in Vue Nuxt.JS application. 

## Important things

.ENV config (my config in .env.example):

1. AUTH_URL must contains domain with root path of backend (there are the default endpoints of Laravel UI authentication)
2. API_URL must contains domain with path to backend api

nuxt.config.js file:

1. 'axios.credentials' must be set true (for authentication cookie of course)
2. axios automatically places XSRF-TOKEN (from X-XSRF-TOKEN cookie) in Header for any request
3. All 'auth.strategies.cookie' endpoints withCredentials must be set true
4. 'auth.strategies.cookie.user' property must be set false

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
