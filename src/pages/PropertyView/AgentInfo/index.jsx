import React from 'react'
import styled from 'styled-components'
import Card from 'components/core/Card'
import CardContent from 'components/core/Card/Content'
import Button from 'components/core/buttons/CallToAction'
import Typography from 'components/core/Typography'
import { agent_1 } from 'data/agents'

const StickyCard = styled.div`
  position: sticky !important;
  top: 104px !important;
  z-index: 1 !important;
  display: inline-block !important;
  width: 100% !important;
  padding-right: 1px !important;
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`

const Image = styled.img`
  border-radius: 50%;
  border: 4px solid #d6bbd6;
  max-width: 180px;
  max-height: 180px;
  object-fit: cover;
  height: 20vw;
  width: 20vw;
`

const Info = styled.div`
  margin: 4px 0;
`

const InfoContainer = styled.div`
  margin: 16px 0;
`

const ButtonContainer = styled.div`
  margin-top: 16px;
`

const AgentInfo = () => {
  const renderInfo = (info) => {
    return (
      <Info>
        <Typography color="light" font-size="default" weight="500">
          {info}
        </Typography>
      </Info>
    )
  }
  return (
    <StickyCard>
      <Card title="Agent Information">
        <CardContent>
          <ImageContainer>
            <Image src={agent_1.profileImage} alt="gandalf_baby" />
          </ImageContainer>
          <InfoContainer>
            <Info>
              <Typography color="default" weight="600">
                {agent_1.name}
              </Typography>
            </Info>
            {renderInfo(agent_1.phone)}
            {renderInfo(agent_1.email)}
          </InfoContainer>
          <ButtonContainer>
            <Button onClick={() => alert('Yay! Meeting booked.')}>
              Book A Viewing
            </Button>
          </ButtonContainer>
        </CardContent>
      </Card>
    </StickyCard>
  )
}

AgentInfo.propTypes = {}

AgentInfo.defaultProps = {}

export default AgentInfo
