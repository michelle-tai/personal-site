import '../styles/global.css'
import { useState } from 'react'
import UIContext from '../components/colorContext'

export default function App({ Component, pageProps }) {
  const [colorify, setColorify] = useState(false);
  console.log(colorify);
  return (
    <UIContext.Provider value={{colorify, setColorify}}>
        <Component {...pageProps} />
    </UIContext.Provider>
  )
}

