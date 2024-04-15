import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, IconButton, Box } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';

const AccordionItem = ({ topic, details }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={6}>
      <Accordion expanded={expanded} onChange={handleToggle}>
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <IconButton  edge="start" aria-label="expand">
            <AddCircleOutline />
          </IconButton>
          <Typography>{topic}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{details}</Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

const MultipleAccordions = () => {
  return (
    <Box display="flex" justifyContent="center" mt={4} style={{
      width: "100vw", paddingInline: "10%"
    }}>
      <Grid container spacing={2} >
        <AccordionItem topic="Accordion 1 Topic" details="Accordion 1 Details" />
        <AccordionItem topic="Accordion 2 Topic" details="Accordion 2 Details" />
        <AccordionItem topic="Accordion 3 Topic" details="Accordion 3 Details" />
        <AccordionItem topic="Accordion 4 Topic" details="Accordion 4 Details" />
        <AccordionItem topic="Accordion 5 Topic" details="Accordion 5 Details" />
        <AccordionItem topic="Accordion 6 Topic" details="Accordion 6 Details" />
      </Grid>
    </Box>
  );
};

export default MultipleAccordions;
