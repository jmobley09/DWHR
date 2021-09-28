import { withStyles } from "@material-ui/core";
import React from "react";
import Table from "./table";
import TableFilter from "./tableFilter";
import { columns, actions } from "../utils/config/training-table";
import TrainingLookup from "../apis/TrainingLookup";
import { genericStyles } from "../styles/elysium-styles";

const CERT_ADDENDUM = " Cert";
const CERT_ADDENDUM_REPLACEMENT = "";

class Training extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataCopy: []
    };
  }

  async componentDidMount() {
    this.componentMounted = true;
    try {
      const response = await TrainingLookup.get("/");
      if (this.componentMounted) {
        this.setState({ data: response.data.data, dataCopy: response.data.data });
      }
    } catch (err) {
      throw err;
    }
  }

  configureFilterCriteria() {
    return [...new Set(this.state.dataCopy.map(training => training.title.replace(CERT_ADDENDUM, CERT_ADDENDUM_REPLACEMENT)))];
  }

  filterData (isChecked, data) {
    this.setState({ data: isChecked ? this.state.data.filter(training => training.title.replace(CERT_ADDENDUM, CERT_ADDENDUM_REPLACEMENT) === data) : this.state.dataCopy});
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <TableFilter filterCriteria = {this.configureFilterCriteria()} onFilterChanged = {this.filterData.bind(this)}/>
        <Table
          tableTitle="Training"
          data={this.state.data}
          columns={columns}
          actions={actions}
        />
      </div>
    );
  }
}

export default withStyles(genericStyles)(Training);