import React from 'react'
/* REMOVED Auth, Dashboard, Form, and Post imports, brought in Routes instead */
import routes from './routes'
import Nav from './Components/Nav/Nav'
import { withRouter } from 'react-router-dom'
// import { connect } from 'react-redux';
import './App.css'

function App(props) {
  return (
    <div className="App">
      {props.location.pathname === '/' ? null : <Nav /> }
      
      {routes}
    </div>
  )
}


// const mapStateToProps = (reduxState) => reduxState

// export default connect(mapStateToProps)(App)
export default withRouter(App)
// export default App