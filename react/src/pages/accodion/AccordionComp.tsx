import React from "react";
import Accordion from "./Accordion";

const AccordionComp = () => {
  return (
    <Accordion>
      <Accordion.AccordionSummary>
        What is this for ?
      </Accordion.AccordionSummary>
      <Accordion.AccordionDetails>
        This is for the purpose of Sleeping
      </Accordion.AccordionDetails>
    </Accordion>
  );
};

export default AccordionComp;
