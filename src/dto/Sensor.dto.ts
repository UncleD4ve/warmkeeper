import {SensorDataDto} from "./SensorData.dto"
export interface SensorDto {
    name: string;
    status: string;
    img: string;
    data: Array<SensorDataDto>;
  }