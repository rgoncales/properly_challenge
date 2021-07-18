import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  details: {
    display: 'block',
    width: '100%',
    padding: '0',
  },
}))

const AccordionSummary = withStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const CollapsibleContent = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Accordion defaultExpanded={props.defaultExpanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {props.title}
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          {props.content}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

CollapsibleContent.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  content: PropTypes.node,
  defaultExpanded: PropTypes.bool,
}

CollapsibleContent.defaultProps = {
  defaultExpanded: false,
}

export default CollapsibleContent
