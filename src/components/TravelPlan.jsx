import { initialTravelPlan } from '../data/places-normalized';

import {useState} from 'react';
import PlaceTree from './PlaceTree';

export default function TravelPlan() {
  const [plan, setPlan]=useState(initialTravelPlan);
  const root=plan[0];
  const planetIds=root.childIds;
    console.log(plan);
 const handleVisited=(parentId,visitedPlaceId)=>{
    const parent=plan[parentId];
    const updateParent={
        ...parent,
        childIds:parent.childIds.filter(id=>id!==visitedPlaceId)
    }
    setPlan({
        ...plan,
        [parentId]:updateParent
    })
 }
  return(
    <>
      <h2>Places To Visit</h2>
        <ol>
            {
                planetIds.map((placeId)=>{
                    return(
                        <PlaceTree 
                        key={placeId} 
                        currentPlaceId={placeId} 
                        allPlaces={plan} 
                        onVisitClick={handleVisited}
                        parentId={root.id}
                        />
                    )
                })
            }
        </ol>
    </>
  )
}
