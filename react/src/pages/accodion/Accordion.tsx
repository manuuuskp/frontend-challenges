import React, { useContext, useState } from "react";
import "./Accordion.css";

const AccordContext = React.createContext({
  open: false,
  onClick: () => {},
});

interface Props {
  children: React.ReactNode;
  isOpen?: boolean;
}

const Accordion = ({ children, isOpen = false }: Props) => {
  const [open, setOpen] = useState(isOpen);
  const handleOnClick = () => {
    setOpen(!open);
  };
  return (
    <AccordContext.Provider value={{ open, onClick: handleOnClick }}>
      <div className="accordion__container">{children}</div>
    </AccordContext.Provider>
  );
};

Accordion.AccordionSummary = ({ children }: Props) => {
  const { onClick } = useContext(AccordContext);
  return (
    <div className="accordion__summary" onClick={onClick}>
      <p>{children}</p>
    </div>
  );
};

Accordion.AccordionDetails = ({ children }: Props) => {
  const { open } = useContext(AccordContext);

  return (
    <div className={`accordion__details ${open ? "open" : "close"}`}>
      <div className="accordion__pcontainer">
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Accordion;
