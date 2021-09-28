import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { rootStyles } from "../styles/elysium-styles";
import { profileData } from "../utils/data/mock-data";
import ManagerList from "./ManagerList";

class Profile extends React.Component {
  state = {
    firstName: profileData.firstName,
    lastName: profileData.lastName,
    titles: profileData.titles,
    clearances: profileData.clearances,
    practiceAreas: profileData.practiceAreas,
    admin: this.props.admin,
  };

  changeEvent = (event) => {
    const name = event.target.id;
    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
  };

  baseTextField = (id, label, value, classes) => {
    return (
      <TextField
          id={id}
          label={label}
          className={classes.profileTextField}
          value={value}
          variant="outlined"
          disabled={!this.state.admin}
          InputLabelProps={{
            classes: {
              root: classes.profileLabel,
              focused: classes.profileFocused,
              disabled: classes.profileDisabled,
            },
          }}
          InputProps={{
            classes: {
              root: classes.profileOutlinedInput,
              focused: classes.profileFocused,
              notchedOutline: classes.profileNotchedOutline,
              disabled: classes.profileDisabled,
            },
          }}
        />
    )
  }

  baseDropDown = (id, label, defaultValue, classes, collection) => {
    return (
      <TextField
          id={id}
          label={label}
          select
          className={classes.profileTextField}
          defaultValue={defaultValue}
          onBlur={this.changeEvent}
          variant="outlined"
          SelectProps={{
            native: true,
            classes: {
              icon: classes.profileLabel,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.profileLabel,
              focused: classes.profileFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.profileOutlinedInput,
              focused: classes.profileFocused,
              notchedOutline: classes.profileNotchedOutline,
            },
          }}
        >
          {collection.map(option => (
            <option
              style={{ backgroundColor: "#1B1B1B" }}
              key={option.value}
              value={option.value}
              onClick={this.changeEvent}
            >
              {option.name}
            </option>
          ))}
        </TextField>
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.profileContainer} noValidate autoComplete="off">
        {this.baseTextField(
          "firstName",
          "First Name",
          this.state.firstName,
          classes
        )}
        {this.baseTextField(
          "lastName",
          "Last Name",
          this.state.lastName,
          classes
        )}
        {this.baseDropDown(
          "practice",
          "Practice Area",
          this.state.practiceAreas[0].name,
          classes,
          this.state.practiceAreas
        )}
        {this.baseDropDown(
          "title",
          "Title",
          this.state.titles[0].name,
          classes,
          this.state.titles
        )}
        <ManagerList admin={this.state.admin}></ManagerList>
        {this.baseDropDown(
          "clearance",
          "Clearance",
          this.state.clearances[0].name,
          classes,
          this.state.clearances
        )}
      </form>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(rootStyles)(Profile);

