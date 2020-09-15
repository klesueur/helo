import React from 'react'
/* REMOVED Auth, Dashboard, Form, and Post imports, brought in Routes instead */
import routes from './routes'
import Nav from './Components/Nav/Nav'
import Auth from './Components/Auth/Auth';
import { withRouter } from 'react-router-dom'
// import { connect } from 'react-redux';
import './App.css'

function App(props) {
  return (
    <div className="App">
      {props.isLoggedIn ? <Auth /> : <Nav /> }
      
      {routes}
    </div>
  )
}


// const mapStateToProps = (reduxState) => reduxState

// export default connect(mapStateToProps)(App)
export default withRouter(App)
// export default App