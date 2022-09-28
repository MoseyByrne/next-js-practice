// _app.js file is like the
// main entry point into the app
// in other words every individual page
// will start from this template

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
