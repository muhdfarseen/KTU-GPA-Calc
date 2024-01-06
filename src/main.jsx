import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
     <MantineProvider defaultColorScheme="dark" theme={{
        fontFamily: 'Montserrat',
        fontFamilyMonospace: 'Montserrat',
        headings: { fontFamily: 'Montserrat'},
      }}>

      <App />
    </MantineProvider>
  </React.StrictMode>,
)
