import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'

export type WorkAccordionProps = {
  name: string
  summary: string[]
}

const WorkAccordion = ({ name, summary }: WorkAccordionProps): React.JSX.Element => {
  const [expanded, setExpanded] = React.useState<boolean>(false)

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography component="h3" variant="h5">
          {name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ display: 'block' }}>
        {summary.map((s: string, i: number) => (
          <Typography key={i} variant="body1">
            {s}
          </Typography>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

export default WorkAccordion
