import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

import "./styles.css";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Tunde"
          timeAgo="Today at 4:30pm"
          message="I love React"
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Lara"
          timeAgo="Today at 5:30pm"
          message="I'm blessed"
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Bukky"
          timeAgo="Today at 6:30pm"
          message="I'm prosperous"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
