import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { tableFilterStyles, defaultFieldColor } from "../styles/elysium-styles";

const CATEGORY_FILTER_CRITERIA = ["Internal", "Annual"];

export default function TableFilter(props) {
  const [state] = React.useState({
    CyberSecurity: false,
    DerivativeClassification: false,
    Internal: false,
    Annual: false,
  });

  const classes = tableFilterStyles();

  const renderFilterCriteria = (filterCriteria, filterData) => {
    return (
      <Accordion className={classes.tableFilterContainer}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: defaultFieldColor }} />}
          aria-controls="table-filter-controls"
          id="table-filter-header"
        >
          <Typography className={classes.tableFilterCheckbox}>
            {filterCriteria}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.tableFilterCheckboxOrdering}>
          {filterData.map(training => {
            return (
              <FormControlLabel
                key={training}
                control={
                  <Checkbox
                    checked={state[training.trim()]}
                    onChange={(event) => props.onFilterChanged(event.target.checked, training)}
                    name={training.replace(" ", "")}
                    classes={{
                      colorSecondary: classes.tableFilterCheckbox,
                      checked: classes.tableFilterCheckbox,
                    }}
                  />
                }
                label={training}
                classes={{ label: classes.tableFilterLabel }}
              />
            )
          })}
        </AccordionDetails>
      </Accordion>
    )
  }

  if (props.filterCriteria.length !== 0) {
    return (
      <div className={classes.rootTableFilter}>
        {renderFilterCriteria("Certification Name", props.filterCriteria)}
        {renderFilterCriteria("Category", CATEGORY_FILTER_CRITERIA)}
      </div>
    );
  }
  else {
    return null;
  }
}