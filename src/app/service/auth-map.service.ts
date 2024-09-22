import { Injectable } from '@angular/core';

export interface coordinates {
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root',
})
export abstract class AuthMapService {
  constructor() {}

  map: any;

  abstract loadMap(
    mapRef: any,
    latLng: coordinates,
    cluster: boolean,
    clickEvent: any
  ): any; // Change 'any' to a specific type if known

  abstract addMarker(
    mapData: any,
    latLng: coordinates,
    id: String,
    image: String
  ): void; // Assuming no return value

  abstract addMarkerWithInfoWindow(
    mapData: any,
    latLng: coordinates,
    contentString: object,
    icon: string
  ): void;

  abstract setCenter(map: any, latLng: coordinates): void;

  abstract moveMarker(
    map: any,
    id: String,
    lon: number,
    lat: number,
    image: string,
    content: string,
    lineString: coordinates[]
  ): void;

  abstract createLine(map: any, pathData: any): void;

  abstract fitBounds(map: any, item: any): void;

  abstract clearLayers(map: any, data: any): void;

  abstract createCircle(
    map: any,
    latLng: coordinates,
    range: number,
    type: any
  ): void;

  abstract getRadius(): number; // Assuming it returns a number

  abstract getCircleCenter(): coordinates; // Assuming it returns coordinates

  abstract setCircleRadius(range: number): void;

  abstract updateCircle(latLng: coordinates): void;

  abstract removeMarkersById(map: any, id: string): void;

  abstract addClusteringMarkers(
    map: any,
    latLng: any,
    contentString: any
  ): void;

  abstract clearClusteringMarkers(map: any, data: any): void;

  abstract fitBoundsForCluster(map: any): void;

  abstract circleGeoZone(): string; // Assuming it returns a string
}
