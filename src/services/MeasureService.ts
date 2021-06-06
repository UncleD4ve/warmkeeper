import { CRUD } from "../types/interfaces/crud.interface";
import { Measure } from "../types/models";
import { HttpException } from "../exceptions";
import { measureModel } from "../dao";
import {
  CreateMeasureDto,
  PutMeasureDto,
  SensorDataDto,
  SensorDto,
} from "../dto";
import { FurnanceVM } from "./FurnaceService";

class MeasureService implements CRUD<Measure | string> {
  private dbContext = measureModel;
  constructor() {}
  async list(): Promise<Array<Measure>> {
    const measureContext = await this.dbContext.find();
    return measureContext as Array<Measure>;
  }
  async create(resource: CreateMeasureDto): Promise<Measure> {
    if (!resource) throw new HttpException(400, "Given resources is empty");
    const createdMeasure = await this.dbContext.create(resource);
    return createdMeasure as Measure;
  }
  async putById(id: string, resource: PutMeasureDto): Promise<Measure> {
    const measureContext = await this.dbContext.findById(id);
    if (!resource) throw new HttpException(400, "Given resources is empty");
    if (!measureContext) return null;
    Object.assign(measureContext, resource);
    await measureContext.save();
    return measureContext as Measure;
  }
  async readById(id: string): Promise<Measure> {
    const measureContext = await this.dbContext.findById(id);
    if (!measureContext) return null;
    return measureContext as Measure;
  }
  async deleteById(id: string): Promise<string | null> {
    const measureContext = await this.dbContext.findById(id);
    if (!measureContext) return null;
    await measureContext.deleteOne();
    return `Measure has been removed.`;
  }
  async patchById(id: string, resource: PutMeasureDto): Promise<Measure> {
    const measureContext = await this.dbContext.findById(id);
    if (!resource) throw new HttpException(400, "Given resources is empty");
    if (!measureContext) return null;
    if (measureContext.furnaceId != resource.furnaceId) {
      Object.assign(measureContext, { furnaceId: resource.furnaceId });
      measureContext.save();
    }
    if (measureContext.fuelLevel != resource.fuelLevel) {
      Object.assign(measureContext, { fuelLevel: resource.fuelLevel });
      measureContext.save();
    }
    if (measureContext.powerSupply != resource.powerSupply) {
      Object.assign(measureContext, { powerSupply: resource.powerSupply });
      measureContext.save();
    }
    if (measureContext.temperature != resource.temperature) {
      Object.assign(measureContext, { temperature: resource.temperature });
      measureContext.save();
    }
    return measureContext as Measure;
  }
  async myList(typ: string, limit: number, name: string) {
    const measureContext = await this.dbContext
      .find({ furnaceId: typ })
      .sort({createdAt:1})
      .limit(limit);
    const measureObjects = (await measureContext.map((el) =>
      el.toJSON()
    )) as Array<Measure>;
    const sensors: Array<SensorDto> = [
      { name: "fuelLevel", status: "0", img: "x", data: [] },
      { name: "temperature", status: "0", img: "x", data: [] },
      { name: "powerSupply", status: "0", img: "x", data: [] },
    ];
    await sensors.map((sensor) => {
      measureObjects.map((measure) => {
        if (sensor.name === "fuelLevel") {
          let temp = new Intl.DateTimeFormat("en-Us", {
            hour: "numeric",
            minute: "numeric",
          }).format(measure.createdAt);
          sensor.data.push({
            date: temp,
            value: measure[sensor.name],
          });
        }
        if (sensor.name === "temperature") {
          let temp = new Intl.DateTimeFormat("en-Us", {
            hour: "numeric",
            minute: "numeric",
          }).format(measure.createdAt);
          sensor.data.push({
            date: temp,
            value: measure[sensor.name],
          });
        }
        if (sensor.name === "powerSupply") {
          let temp = new Intl.DateTimeFormat("en-Us", {
            hour: "numeric",
            minute: "numeric",
          }).format(measure.createdAt);
          sensor.data.push({
            date: temp,
            value: Number(measure[sensor.name]),
          });
        }
      });
    });
    return { id:typ, name, sensors } as FurnanceVM;
  }
}
export default MeasureService;

/*

if(singleType == measureObjects[singleType])
      {
        const newSensor : SensorDto =
        {
          name : singleType,
          status : "0",
          img : "x",
          data : []
        };
        measureObjects.map((measure) => {
          if(singleType === measure[singleType])
          {
            const temp =new Intl.DateTimeFormat("en-Us",{
              hour:"numeric",
              minute:"numeric"
            }).format(measure.createdAt);
            newSensor.data.push({
              date:temp,
              value:measure[singleType]
            })
          }
        })
        sensors.push(newSensor);
      }
    })

*/

/*
listAmount(typ: string, limit: number) {
    const measureContext =  this.dbContext.find({ furnaceId: typ });
    console.log(measureContext);
    return measureContext;
  }
*/

/*
 const foundMeasure = await measureContext.map((el) => el.toObject());
    const sensors: Array<SensorDto> = [
      { name: "fuelLevel", status: "0", img: "x", data: [] },
      { name: "temperature", status: "0", img: "x", data: [] },
      { name: "powerSupply", status: "0", img: "x", data: [] },
    ];

    foundMeasure.forEach((measure: Measure) => {
      sensors[sensors.findIndex((s) => s.name == "fuelLevel")].data.push({
        date: new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "numeric",
        }).format(measure.createdAt),
        value: measure.fuelLevel,
      } as SensorDataDto);
      sensors[sensors.findIndex((s) => s.name == "temperature")].data.push({
        date: new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "numeric",
        }).format(measure.createdAt),
        value: measure.temperature,
      } as SensorDataDto);
      sensors[sensors.findIndex((s) => s.name == "powerSupply")].data.push({
        date: new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "numeric",
        }).format(measure.createdAt),
        value: Number(measure.powerSupply),
      } as SensorDataDto);
    });*/
