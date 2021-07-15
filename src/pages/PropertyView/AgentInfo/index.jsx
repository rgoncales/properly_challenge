import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from 'components/core/Card'
import Button from 'components/core/buttons/CallToAction'
import Typography from 'components/core/Typography'

const agent_info = {
  name: 'Gandalf The Grey',
  phone: '(647) 123-4567',
  email: 'mithrandir@iluvatar.me',
  profileImage:
    'https://static.wixstatic.com/media/065e6b_dd1a8624bd5b40c9848aeec671ed811b.png/v1/fit/w_936%2Ch_733%2Cal_c/file.png',
}

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

const AgentInfo = (props) => {
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
        <ImageContainer>
          <Image src={agent_info.profileImage} alt="gandalf_baby" />
        </ImageContainer>
        <InfoContainer>
          <Info>
            <Typography color="default" weight="600">
              {agent_info.name}
            </Typography>
          </Info>
          {renderInfo(agent_info.phone)}
          {renderInfo(agent_info.email)}
        </InfoContainer>
        <ButtonContainer>
          <Button>Book A Viewing</Button>
        </ButtonContainer>
      </Card>
    </StickyCard>
  )
}

AgentInfo.propTypes = {}

AgentInfo.defaultProps = {}

export default AgentInfo
