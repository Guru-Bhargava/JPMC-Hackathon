import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { Navbar } from "react-bootstrap";
import "./Manager.css";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    backgroundColor: "#ffffff",
    borderRadius: theme.spacing(2),
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add shadow to the container
  },
  heading: {
    marginBottom: theme.spacing(3),
    color: "#333333",
    fontWeight: 600,
  },
  card: {
    minHeight: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
    borderRadius: theme.spacing(2),
    cursor: "pointer",
    transition: "transform 0.3s ease",
    overflow: "hidden",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add shadow on card hover
    },
  },
  cardContent: {
    textAlign: "center",
  },
  sname: {
    color: "#000000", // Change the color of sname to black here
  },
  gradientBackground: {
    background: "linear-gradient(to bottom right, #ffffff, #f2f2f2)", // Add gradient background
  },
}));

function Manager() {
  const classes = useStyles();

  const data = [
    { sid: "N787808", seatno: 2002, name: "Prithvi" },
    { sid: "P364808", seatno: 2012, name: "Aditya" },
    { sid: "K928808", seatno: 2082, name: "Anitya" },
    { sid: "V737808", seatno: 2073, name: "Ray" },
    { sid: "M93808", seatno: 2064, name: "Ankitha" },
  ];

  const handleCardClick = (sid) => {
    console.log("Clicked on SID:", sid);
  };

  return (
    <div className={classes.gradientBackground}>
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand style={{ justifyContent: "center" }}>
              Find It
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Jagan</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className={classes.container}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" className={classes.heading}>
            This is Your Team - Jagan
          </Typography>
          <Grid container spacing={3}>
            {data.map((s) => (
              <Grid item xs={12} sm={6} md={4} key={s.sid}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    className={classes.card}
                    onClick={() => handleCardClick(s.sid)}
                  >
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h6" className={classes.sname}>
                        {s.name}
                      </Typography>
                      <Typography variant="body2">SID: {s.sid}</Typography>
                      <Typography variant="body2">
                        Seat Number: {s.seatno}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Manager;
