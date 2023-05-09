import React from 'react'
import { React95Provider } from '@react-os/core'
import Routes from './routes'

const App = () => (
  <React95Provider>
    <Routes />
  </React95Provider>
);

export default App;
