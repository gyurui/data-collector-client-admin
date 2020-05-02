import React, { useState, FormEvent, Dispatch } from "react";
import { useDispatch } from "react-redux";
import { ReduxActions } from "../../actions/ReduxActions";
import { OnChangeModel } from "../../models/FormTypes";
import TextInput from "../../common/components/TextInput";
import { login } from "../../actions/AccountActions";
import Button from "@material-ui/core/Button";
import { Box, Container, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: "blue",
    },
    box: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        backgroundColor: "green",
    },
}));

const Login: React.FC = () => {
    const dispatch: Dispatch<ReduxActions> = useDispatch();
    const classes = useStyles();

    const [formState, setFormState] = useState({
        email: { error: "", value: "" },
        password: { error: "", value: "" },
    });

    function hasFormValueChanged(model: OnChangeModel): void {
        setFormState({
            ...formState,
            [model.field]: { error: model.error, value: model.value },
        });
    }

    function submit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        if (isFormInvalid()) {
            return;
        }
        dispatch(login(formState.email.value));
    }

    function isFormInvalid() {
        return formState.email.error || formState.password.error || !formState.email.value || !formState.password.value;
    }

    function getDisabledClass(): string {
        const isError: boolean = isFormInvalid() as boolean;
        return isError ? "disabled" : "";
    }

    return (
        <Container>
            <Box className={classes.root}>
                            <Box className={classes.box}>
                                <TextInput
                                    id="input_email"
                                    field="email"
                                    value={formState.email.value}
                                    onChange={hasFormValueChanged}
                                    required={true}
                                    maxLength={100}
                                    label="Email"
                                    placeholder="Email"
                                />
                            </Box>
                            <Box className={classes.box}>
                                <TextInput
                                    id="input_password"
                                    field="password"
                                    value={formState.password.value}
                                    onChange={hasFormValueChanged}
                                    required={true}
                                    maxLength={100}
                                    type="password"
                                    label="Password"
                                    placeholder="Password"
                                />
                            </Box>
                            <Box className={classes.box}>
                                <Button variant="contained" color="primary" type="submit">
                                    Login
                                </Button>
                            </Box>
            </Box>
        </Container>
    );
};

export default Login;
