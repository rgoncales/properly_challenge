import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'App.css'
import PropertyViewPage from 'pages/PropertyView'
import styled from 'styled-components'
import NavBar from 'components/NavBar'

const WithNavBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
`

const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <WithNavBar>
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
      <BodyContainer>
        <Switch>
          <Route
            exact
            path="/property/:propertyId"
            component={PropertyViewPage}
          />
        </Switch>
      </BodyContainer>
    </WithNavBar>
  )
}

export default App
