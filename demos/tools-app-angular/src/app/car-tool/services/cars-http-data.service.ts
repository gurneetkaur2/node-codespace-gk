import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseData } from "../../shared/services/base-data";
import { Cars, NewCar } from "../models/cars";

@Injectable({
  providedIn: "root",
})

export class CarsHttpDataService extends BaseData<Cars, NewCar> {

  protected constructor(httpClient: HttpClient){
    super(httpClient, "cars");
  }
}