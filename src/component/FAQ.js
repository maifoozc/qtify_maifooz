import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



export default function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ backgroundColor: "#121212", color: "#fff" }}>
      <div style={{ margin: "0 15rem" }}>
        <Typography variant="h3">FAQs</Typography>

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={{ borderColor: "#fff" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#34c94b" }} />}
            aria-controls="panel1bh-content"
            style={{
              backgroundColor: "#121212",
              color: "#fff",
              border: "1px solid #fff",
              borderRadius: "0.5rem",
            }}
          >
            Is Qtify free to use?
          </AccordionSummary>
          <AccordionDetails
            style={{ backgroundColor: "#fff", color: "#121212" }}
          >
            <Typography style={{ textAlign: "left" }}>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#34c94b" }} />}
            aria-controls="panel1bh-content"
            style={{
              backgroundColor: "#121212",
              color: "#fff",
              border: "1px solid #fff",
              borderRadius: "0.5rem",
            }}
          >
            Can i download & listen to songs online?
          </AccordionSummary>
          <AccordionDetails
            className="accordian_typo"
            style={{ backgroundColor: "#fff", color: "#121212" }}
          >
            <Typography style={{ textAlign: "left" }}>Yes</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#34c94b" }} />}
            aria-controls="panel1bh-content"
            style={{
              backgroundColor: "#121212",
              color: "#fff",
              border: "1px solid #fff",
              borderRadius: "0.5rem",
            }}
          >
            Is Qtify free to use?
          </AccordionSummary>
          <AccordionDetails
            style={{ backgroundColor: "#fff", color: "#121212" }}
          >
            <Typography style={{ textAlign: "left" }}>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
