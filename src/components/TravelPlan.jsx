import { initialTravelPlan } from "../data/places-normalized";
import { useImmer } from "use-immer";
import PlaceTree from "./PlaceTree";

export default function TravelPlan() {
  const [plan, updatePlan] = useImmer(initialTravelPlan);
  console.log(plan);
  const root = plan[0];
  const planetIds = root.childIds;
  function deletePlaces(draft, placeId) {
    // draft is the plan, placeId is the id of the place to be deleted
    const place = draft[placeId];
    place.childIds.forEach((childId) => {
      deletePlaces(draft, childId);
    });
    delete draft[placeId]; // delete the place from the plan
  }
  const handleVisited = (parentId, visitedPlaceId) => {
    // parentId is the id of the parent of the visited place, visitedPlaceId is the id of the visited place
    updatePlan((draft) => {
      // draft is the plan, it is nature of useImmer
      const parentPlace = draft[parentId]; // parentPlace is the parent of the visited place
      parentPlace.childIds = parentPlace.childIds.filter(
        (id) => id !== visitedPlaceId
      ); // remove the visited place from the childIds of the parent of the visited place
      deletePlaces(draft, visitedPlaceId);
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
