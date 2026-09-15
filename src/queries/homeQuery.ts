import { useQuery } from "@tanstack/react-query";

import { getPlaceCollection } from "@/api/services/home";

const homeQuery = {
  useGetPlacesByCollectionId: (collectionId: string) => {
    return useQuery({
      queryKey: ["home", "place-collection", collectionId],
      queryFn: () => getPlaceCollection(collectionId),
      enabled: Boolean(collectionId),
    });
  },
};

export default homeQuery;
