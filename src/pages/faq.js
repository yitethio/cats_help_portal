import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@mui/material';
import { AddCircle, RemoveCircle } from '@mui/icons-material';

const AccordionItem = ({ topic, details, index, expanded, handleAccordionChange }) => {
  return (
    <Grid item xs={6}>
      <Accordion expanded={expanded} onChange={() => handleAccordionChange(index)}>
        <AccordionSummary expandIcon={<AddCircle />} aria-controls={`panel${index}a-content`} id={`panel${index}a-header`}>
          {expanded ? <RemoveCircle /> : <AddCircle />}
          <Typography style={{ marginLeft: '10px' }}>{topic}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{details}</Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

const MultipleAccordions = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const [expanded6, setExpanded6] = useState(false);

  const handleAccordionChange = (index) => {
    switch (index) {
      case 1:
        setExpanded1(!expanded1);
        break;
      case 2:
        setExpanded2(!expanded2);
        break;
      case 3:
        setExpanded3(!expanded3);
        break;
      case 4:
        setExpanded4(!expanded4);
        break;
      case 5:
        setExpanded5(!expanded5);
        break;
      case 6:
        setExpanded6(!expanded6);
        break;
      default:
        break;
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <AccordionItem topic="Accordion 1 Topic" details="Accordion 1 Details" index={1} expanded={expanded1} handleAccordionChange={handleAccordionChange} />
      <AccordionItem topic="Accordion 2 Topic" details="Accordion 2 Details" index={2} expanded={expanded2} handleAccordionChange={handleAccordionChange} />
      <AccordionItem topic="Accordion 3 Topic" details="Accordion 3 Details" index={3} expanded={expanded3} handleAccordionChange={handleAccordionChange} />
      <AccordionItem topic="Accordion 4 Topic" details="Accordion 4 Details" index={4} expanded={expanded4} handleAccordionChange={handleAccordionChange} />
      <AccordionItem topic="Accordion 5 Topic" details="Accordion 5 Details" index={5} expanded={expanded5} handleAccordionChange={handleAccordionChange} />
      <AccordionItem topic="Accordion 6 Topic" details="Accordion 6 Details" index={6} expanded={expanded6} handleAccordionChange={handleAccordionChange} />
    </Grid>
  );
};

export default MultipleAccordions;
