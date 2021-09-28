import { makeStyles } from '@material-ui/core/styles';

export const defaultFieldColor = "#8DC63F";
const defaultBackgroundColor = "#383432";

export const rootStyles = () => ({
    profileContainer: {
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "75%"
    },
    profileTextField: {
        margin: "30px",
        width: 250
    },
    profileLabel: {
        color: defaultFieldColor
    },
    profileDisabled: {
        color: `${defaultFieldColor} !important`,
        input: `${defaultFieldColor} !important`
    },
    profileOutlinedInput: {
        color: `${defaultFieldColor}`,
        "&$profileFocused $profileNotchedOutline": {
            borderColor: `${defaultFieldColor} !important`,
        }
    },
    profileNotchedOutline: {
        borderWidth: "1px",
        borderColor: `${defaultFieldColor} !important`,
    },
    profileFocused: {
        backgroundColor: defaultBackgroundColor
    },
    rootTableFilter: {
        width: "20%",
        fontSize: "50%",
        paddingRight: "1%",
    },
});

export const tableFilterStyles = makeStyles(() => ({
    rootTableFilter: {
        width: "20%",
        fontSize: "50%",
        paddingRight: "1%",
    },
    tableFilterContainer: {
        backgroundColor: defaultBackgroundColor,
    },
    tableFilterCheckbox: {
        color: `${defaultFieldColor} !important`,
    },
    tableFilterLabel: {
        color: "white",
    },
    tableFilterCheckboxOrdering: {
        display: "flex",
        flexDirection: "column"
    },
}));

export const genericStyles = () => ({
    container: {
        display: "flex",
    }
})