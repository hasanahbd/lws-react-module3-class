import { initialTravelPlan } from "../data/places-normalized";

import { useState } from "react";
import PlaceTree from "./PlaceTree";

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;
  console.log(plan);
  const handleVisited = (parentId, visitedPlaceId) => { // parentId is the id of the parent of the visited place, visitedPlaceId is the id of the visited place
    const parent = plan[parentId]; // get the parent object
    const updateParent = { // create a new parent object
      ...parent, //
      childIds: parent.childIds.filter((id) => id !== visitedPlaceId), // remove visited place from childIds
    };
    
    setPlan({
      ...plan, // copy the plan object
      [parentId]: updateParent, // update the parent object
    });
  };
  return (
    <>
      <h2>Places To Visit</h2>
      <ol>
        {planetIds.map((placeId) => {
          return (
            <PlaceTree
              key={placeId}
              currentPlaceId={placeId}
              allPlaces={plan}
              onVisitClick={handleVisited}
              parentId={root.id}
            />
          );
        })}
      </ol>
    </>
  );
}
