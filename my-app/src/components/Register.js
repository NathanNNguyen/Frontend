import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


import { connect } from "react-redux";
import { register } from "../actions/EntryActions/RegisterAction";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
  contButton: {
    margin: 30,
    backgroundColor: "#007CB2",
    color: "#BFECFF",

    "&:hover": {
      backgroundColor: "#BFECFF",
      color: "#007CB2"
    }
  },
  formDiv: {
    marginTop: 20
  },
  linkBut: {
    textDecoration: "none"
  },
  warning: {
    color: "#c62828",
    fontSize: "0.8rem",
    marginTop: -15,
    marginBottom: 10
  }
}));
const Register = props => {
  const classes = useStyles();

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const passwordLength = () => {
    return user.password.length === 0 || user.password.length > 5 ? (
      ""
    ) : (
      <Typography className={classes.warning}>
        Password must be at least 6 characters
      </Typography>
    );
  };

  console.log("checking for user", user);

  const handleSubmit = event => {
    event.preventDefault();
    props.register(user);
    props.history.push("/");
  };

  const handleChanges = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className='box'>
      <AccountBoxIcon fontSize="large" />
      <Typography component="h2" variant="h5">
          Register
        </Typography>
      <div className={classes.formDiv}>

        <TextField
          label="Username"
          required
          value={user.username}
          onChange={handleChanges}
          name="username"

        />
        <br />
        <TextField
          label="Password"
          type="password"
          required
          value={user.password}
          onChange={handleChanges}
          name="password"
        />

        <br />
        {/*
        <TextField label="Name" error helperText="Required" />
        <br />
        <TextField label="Email" type="email" required />
        <br />
        */}

        <div>
          <Link className={classes.linkBut} to="/Dashboard">
            <Button
              className={classes.contButton}
              variant="outlined"
              color="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Register
            </Button>

          </Link>
          <p>
            Already have an account? <Link to="/">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { register }
)(Register);
