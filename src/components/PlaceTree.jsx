
export default function PlaceTree({currentPlaceId, allPlaces,parentId,onVisitClick}) {
    const place=allPlaces[currentPlaceId];
    const childPlacesId=place.childIds;
  return (
    <>
        <li>
            {place.title} 
            <button 
                onClick={()=>{
                    onVisitClick(parentId,currentPlaceId)
                }}
            >Visited</button>
            {childPlacesId.length>0 && (
                <ol>
                    {
                        childPlacesId.map((placeId)=>{
                            return(
                                <PlaceTree key={placeId} 
                                currentPlaceId={placeId}
                                allPlaces={allPlaces}
                                parentId={currentPlaceId}
                                onVisitClick={onVisitClick}/>
                            )
                        })
                    }
                </ol>
            )}
        </li>
    </>
  )
}
