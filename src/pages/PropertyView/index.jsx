import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PageContainer from 'components/layout/PageContainer'
import ImageCarousel from 'components/layout/ImageCarousel'
import PropertyDetails from 'pages/PropertyView/Details'
import PropertyPrice from 'pages/PropertyView/Price'
import PropertyDescription from 'pages/PropertyView/Description'
import PropertyAddress from 'pages/PropertyView/Address'
import PropertyAgentInfo from 'pages/PropertyView/AgentInfo'
import { selectPropertyDetails } from 'redux/property/selectors'
import { PropertyDetailsType } from 'customTypes'
import WithRightSideBar from 'components/layout/WithRightSideBar'

const ImageContainer = styled.div`
  width: 100%;
`

const MainContent = styled.div`
  margin-top: 32px;
`

const DetailsContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`

const RelatedPropertiesContainer = styled.div`
  width: 100%;
  background: pink;
`

const DetailsItem = styled.div`
  flex: 1;
`

const DescriptionContainer = styled.div`
  width: 100%;
  margin: 32px 0 48px;
`

const Title = styled.div`
  margin-bottom: 24px;
`

const Section = styled.div`
  padding: 24px 0;
`

const Separator = styled.div`
  border-bottom: 1px solid #ddd;
  width: 100%;
`

const PropertyView = (props) => {
  const renderDetails = () => {
    return (
      <Section>
        <DetailsContainer>
          <DetailsItem>
            <PropertyDetails details={props.details} />
          </DetailsItem>
          <DetailsItem>
            <PropertyPrice details={props.details} />
          </DetailsItem>
        </DetailsContainer>
      </Section>
    )
  }

  const renderDescription = () => {
    return (
      <DescriptionContainer>
        <PropertyDescription details={props.details} />
      </DescriptionContainer>
    )
  }

  return (
    <PageContainer>
      <ImageContainer>
        <ImageCarousel imageList={props.details.pictures} />
      </ImageContainer>
      <MainContent>
        <WithRightSideBar
          main={
            <>
              <Title>
                <PropertyAddress details={props.details} />
              </Title>
              <Separator />
              {renderDetails()}
              <Separator />
              {renderDescription()}
              <RelatedPropertiesContainer />
            </>
          }
          sidebar={<PropertyAgentInfo />}
        />
      </MainContent>
    </PageContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    details: selectPropertyDetails(state),
  }
}

PropertyView.propTypes = {
  details: PropertyDetailsType.isRequired,
}

PropertyView.defaultProps = {}

export default connect(mapStateToProps)(PropertyView)
