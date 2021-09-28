import React from "react";
import PropTypes from "prop-types";
import ManagerLookup from "../apis/ManagerLookup";
import { rootStyles } from "../styles/elysium-styles";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

class ManagerList extends React.Component {
    state = {
        managers: [],      
    }

    async componentDidMount() {
        this.componentMounted = true;
        try {
            const response = await ManagerLookup.get("/");
            if (this.componentMounted) {
                this.setState({ managers: response.data.data.managers });
            }
        } catch (err) {
            throw err;
        }
    }

    componentWillUnmount() {
        this.componentMounted = false;
    }

    handleManagerChange = event => {
        this.setState({...this.state, [event.target.id] : event.target.value });
    }

    render() {
        const { classes } = this.props;
        if (this.state.managers.length !== 0) {
            return (
                <TextField
                    id="manager"
                    label="Manager"
                    select
                    className={classes.profileTextField}
                    defaultValue={this.state.managers[0].name}
                    onBlur={this.handleManagerChange}
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
                    {this.state.managers.map(manager => (
                        <option
                            style={{ backgroundColor: "#1B1B1B" }}
                            key={manager.id}
                            value={manager.name}
                            onClick={this.handleManagerChange}
                        >
                            {manager.name}
                        </option>
                    ))}
                </TextField>
            )
        } else {
            return null;
        }
    }
}

ManagerList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default withStyles(rootStyles)(ManagerList);