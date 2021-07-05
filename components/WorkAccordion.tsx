import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import React from 'react';

export type WorkAccordionProps = {
  expanded: string;
  name: string;
  onChange(name: string): (event: React.ChangeEvent<Element>, isExpanded: boolean) => void;
  summary: string[];
};

const WorkAccordion = ({ expanded, name, onChange, summary }: WorkAccordionProps): JSX.Element => {
  return (
    <Accordion expanded={expanded === name} onChange={onChange(name)}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography component="h3" variant="h5">
          {name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ display: 'block' }}>
        {summary.map((s: string, i: number) => {
          return (
            <Typography key={i} variant="body1">
              {s}
            </Typography>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default WorkAccordion;
