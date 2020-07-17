import React, { forwardRef } from "react";
import Card from "@material-ui/core/Card";
import { Typography, CardContent } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ user, text }, ref) => {
  const isUser = user === text.user;
  return (
    <div ref={ref} className={`message ${isUser && "message_user_card"}`}>
      <Card
        className={`message__card ${isUser ? "message_user" : "message_guest"}`}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            {`${text.user.substr(0, text.user.indexOf("@")) || "Unknown user"}`}
            :{text.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
