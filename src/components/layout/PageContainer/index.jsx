import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.scss'

const SIZES = {
  STANDARD: 'standard',
}

const PageContainer = (props) => {
  const pageContainerClasses = classNames('page-content', {
    'size-standard': props.size === SIZES.STANDARD,
  })

  return (
    <div className="page-content-container">
      <div className={pageContainerClasses}>{props.children}</div>
    </div>
  )
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(Object.values(SIZES)),
}

PageContainer.defaultProps = {
  size: 'standard',
}

export default PageContainer
