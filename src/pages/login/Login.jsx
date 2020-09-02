/* eslint-disable no-unused-expressions */
import React, { useState, useRef, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import green from "@material-ui/core/colors/green";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import { withApollo } from '@apollo/react-hoc';
import Person from "@material-ui/icons/Person";
import { LOGIN, GOOGLE_LOGIN } from './graphql/Mutation';
import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  error: {
    fontSize: "14px",
    color: "red"
  },
  main: {
    width: "auto",

    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: "7px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  textField: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  style: {
    textDecoration: "none",
    color: "white"
  }
});

const Login = (props) => {
  useEffect(() => {
    // googleLogin().then((res) => {
    //   console.log('result ', res);
    // })
    console.log('in useEffect')
    fetch("http://localhost:7001/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    }).then(response => {
      console.log('response', response)
      if (response.status === 200) return response.json();
      throw new Error("failed to authenticate user");
    })
    .then(responseJson => {
      console.log('responseJson', responseJson)
      const { token, user } = responseJson;
      setRes({ token, user });
    })
    .catch(error => {
      console.log('innnn', error)
    });
  }, [])
  const windowRef = useRef(null)
  const [res, setRes] = useState({
    token: '',
    user: '',
  })
  console.log('ressss', res)
  const [dataUser, setDataUser] = useState({
    name: "",
    email: ""
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false
  });
  const [Login, { loading }] = useMutation(LOGIN)
  const [googleLogin, { }] = useMutation(GOOGLE_LOGIN);

  const handlerChange = field => event => {
    setDataUser({ ...dataUser, [field]: event.target.value })
    setTouched( { ...touched, [field]: true })
  };

  const hasTouched = () => {
    let touchCheck = 0;
    Object.keys(touched).forEach(element => {
      if (touched[element] === true) touchCheck += 1;
    });
    if (touchCheck === 2) return true;

    return false;
  };
  const handlerSubmit = async () => {
    const { history } = props;
    Login({ variables: { input: { ...dataUser } }}).then((res) => {
      console.log('res', res)
      const { data: { login: { token }} } = res;
      localStorage.setItem('token', token)
      console.log('setItem', localStorage)
      history.push('/board');
    })
  };

  const handlerGoogleSubmit = async () => {
//     let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
// width=600,height=500,left=500,top=100`;
    const newWindow = window.open('http://localhost:7001/auth/google','_self')
  //   var timer = setInterval(function()
  //     if (newWindow.closed) {
  //         clearInterval(timer);
  //         console.log('in handle')
  //         alert("'Secure Payment' window closed !");
  //     }
  // }, 500);
  };

  const isTouched = () => {
    return !!Object.keys(touched).length;
  };

  const handle = () => {
    console.log('inhandle')
    handlerGoogleSubmit().then(() => {
      console.log('insiaaaddeee hanlde')
    })
    // this.setState({
    //   loading: false,
    //   dataUser: {name: "" ,email: ""},
    //   loader: true,
    // });
  }
  const { classes } = props;
    return (
          <main className={classes.main}>
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                login
              </Typography>
              <form className={classes.form}>
                <TextField
                  id="outlined-name-input"
                  label="Name"
                  className={classes.textField}
                  onChange={handlerChange("name")}
                  type="name"
                  value={dataUser.name}
                  name="name"
                  autoComplete="name"
                  margin="normal"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  className={classes.textField}
                  onChange={handlerChange("email")}
                  type="email"
                  value={dataUser.email}
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    )
                  }}
                />

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                {hasTouched() ? (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={loading}
                    className={classes.submit}
                    onClick={() => handlerSubmit()}
                  >
                    SIGN IN
                    {loading && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    color="secondary"
                    disabled
                  >
                    SIGN IN
                  </Button>
                )}
              </form>
              <Typography component="h5" variant="h6" style={{padding: '2rem'}} >
                OR
              </Typography>
              <Typography component="h1" variant="h4" >
                Login With Google
              </Typography>
              <a href="http://localhost:7001/auth/google">
    Login with Facebook
  </a>
              {/* <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    color="secondary"
                    onClick={() => handle()}
                  >
                    LOGIN
                  </Button> */}
            </Paper>
          </main>
    );
};

  Login.propTypes = {
  classes: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired
};

export default withStyles(styles)(withRouter(withApollo(Login)));
