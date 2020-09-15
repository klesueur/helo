import React from 'react'
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Nav from './Components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Auth />
      <Dashboard />
      <Form />
      <Nav />
    </div>
  )
}

export default App;
