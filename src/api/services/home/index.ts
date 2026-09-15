import { apiClient } from "@/api/axios";

import type { TPlace, TResPlaceCollection } from "./type";

export async function getPlaceCollection(collectionId: string): Promise<TPlace[]> {
  const response = await apiClient.get<TResPlaceCollection>(
    `/home/place-collections/${encodeURIComponent(collectionId)}`,
  );

  return response.data.item;
}
