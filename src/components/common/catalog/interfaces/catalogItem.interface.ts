import { ICatalogPhotos } from "./catalogPhotos.interface";

export interface ICatalogItemProps {
  photos?: Array<ICatalogPhotos> | ICatalogPhotos;
  title: string;
  price: number;
  key: number;
}