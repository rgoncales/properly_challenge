import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getPropertyById } from 'redux/propertyDetails/action'
import PageContainer from 'components/layout/PageContainer'
import ImageCarousel from 'components/layout/ImageCarousel'
import PropertyDetails from 'pages/PropertyView/Details'
import PropertyPrice from 'pages/PropertyView/Price'
import PropertyDescription from 'pages/PropertyView/Description'
import PropertyAddress from 'pages/PropertyView/Address'
import PropertyAgentInfo from 'pages/PropertyView/AgentInfo'
import { selectPropertyDetails } from 'redux/propertyDetails/selectors'
import { PropertyDetailsType } from 'customTypes'
import WithRightSideBar from 'components/layout/WithRightSideBar'
import useMediaQuery from '@material-ui/core/useMediaQuery'

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
  margin: 32px 0 32px;
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
  useEffect(() => {
    props.getPropertyById({ propertyId: props.match.params.propertyId })
  }, [])

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

  const renderPropertyDetails = () => {
    return (
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
    )
  }
  const isScreenMin700 = useMediaQuery('(min-width:700px)')

  return (
    <PageContainer>
      <ImageContainer>
        <ImageCarousel imageList={props.details.pictures} />
      </ImageContainer>
      <MainContent>
        {isScreenMin700 ? (
          <WithRightSideBar
            main={renderPropertyDetails()}
            sidebar={<PropertyAgentInfo />}
          />
        ) : (
          <>
            {renderPropertyDetails()}
            <PropertyAgentInfo />
          </>
        )}
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

export default connect(mapStateToProps, { getPropertyById })(PropertyView)
