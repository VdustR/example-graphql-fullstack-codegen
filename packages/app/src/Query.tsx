import { useLaunchesQuery } from "@gql-test/query";
import objectInspect from "object-inspect";
import { memo } from "react";

export default memo(function Query() {
  const { data, error } = useLaunchesQuery();
  if (error instanceof Error) {
    console.log("message: ", error.message);
  }

  return (
    <div>
      <div>
        {"data: "}
        <ul>
          {data?.launches.map((launch) => (
            <li>
              {launch?.time
                ? new Date(launch.time).toLocaleString()
                : "Invalid Date"}
            </li>
          ))}
        </ul>
      </div>
      <div>error: {objectInspect(error)}</div>
    </div>
  );
});
