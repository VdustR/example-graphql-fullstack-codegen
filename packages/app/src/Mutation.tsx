import { useBookTripsMutation } from "@gql-test/query";
import objectInspect from "object-inspect";
import { memo } from "react";

export default memo(function Mutation() {
  const { data, error, mutate } = useBookTripsMutation();
  if (error instanceof Error) {
    console.log("message: ", error.message);
  }

  return (
    <div>
      <button
        onClick={() => {
          mutate({
            launchIds: ["foo", "bar"],
          });
        }}
      >
        click
      </button>
      <div>data: {objectInspect(data?.bookTrips.success)}</div>
      <div>error: {objectInspect(error)}</div>
    </div>
  );
});
