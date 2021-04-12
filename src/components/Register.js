import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Alert, AlertTitle } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles } from "@material-ui/core/styles";

import Nav from "../partials/Nav";
import Footer from "../partials/Footer";
import Badge from "./Badge";
import muiTheme from "../helpers/muiTheme";

import Theme from "../helpers/theme";
import quote from "../api/quotes";

const useStyles = makeStyles(Theme);

const theme = createMuiTheme(muiTheme);

const Register = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState({ status: "", msg: "", key: "" });
  const [showLoader, setShowLoader] = useState(false);

  const handleRequest = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    const { data } = await quote.post(`/register`, { email });
    setShowLoader(false);
    setAlertMsg({ status: data.status, msg: data.msg, key: data.key });
    console.log(data);
    setAlert(true);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Nav />
          <Container style={{ maxWidth: "60vw", minHeight: "100vh" }}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              style={{ marginTop: "40px" }}
            >
              Comic Quotes
            </Typography>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              paragraph
              style={{ marginTop: "20px" }}
            >
              You will need an API Key to use this service, please generate one
              by registering with your email
            </Typography>
            <Container align="center">
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleRequest}
                >
                  Request API Key
                </Button>
              </form>
              {(() => {
                if (showLoader) {
                  return (
                    <CircularProgress
                      color="secondary"
                      style={{ marginLeft: "calc(50% - 10px)" }}
                    />
                  );
                }
              })()}

              {alert ? (
                <React.Fragment>
                  <Alert severity={alertMsg.status} variant="outlined">
                    <AlertTitle>
                      {alertMsg.status === "success" ? "Success" : "Error"}
                    </AlertTitle>
                    {alertMsg.msg}
                  </Alert>
                  {alertMsg.key ? (
                    <Badge
                      name={alertMsg.key}
                      color="green"
                      style={{ marginLeft: "calc(50% - 50px)" }}
                    />
                  ) : (
                    ""
                  )}
                </React.Fragment>
              ) : (
                ""
              )}
            </Container>
          </Container>
          <Footer />
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Register;
