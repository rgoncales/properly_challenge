import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'App.css'
import PropertyViewPage from 'pages/PropertyView'

function App() {
  return (
    <Switch>
      <Route exact path="/property/:propertyId" component={PropertyViewPage} />
    </Switch>
  )
}

export default App
