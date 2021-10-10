import { AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { ContextProvider } from "../../Context";
import Notifications from "./Notifications";
import Sidebar from "./Sidebar";
import VideoPlayer from "./VideoPlayer";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "2px solid black",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const io = require("socket.io-client");
export default function Menu() {
  useEffect(() => {
    const socket = io("https://warm-wildwood-81069.herokuapp.com");
    const ioL = socket;
    ioL.on("connection", (socket) => {
      socket.emit("me", socket.id);

      socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded");
      });

      socket.on("callUser", ({ userToCall, signalData, from, name }) => {
        ioL.to(userToCall).emit("callUser", { signal: signalData, from, name });
      });

      socket.on("answerCall", (data) => {
        ioL.to(data.to).emit("callAccepted", data.signal);
      });
    });
  });

  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
        <ContextProvider>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">
          Video Chat
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
      </ContextProvider>
    </div>
  );
}
