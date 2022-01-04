import { memo } from "react";
import Mutation from "./Mutation";
import Query from "./Query";

export default memo(function App() {
  return (
    <div>
      <div>
        <h2>{"Query"}</h2>
        <Query />
      </div>
      <div>
        <h2>{"Mutation"}</h2>
        <Mutation />
      </div>
    </div>
  );
});
