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
  async listAmount(id: string, limit: number) {
    const measureContext = await this.dbContext
      .find({ furnaceId: id })
      .sort({ _id: -1 })
      .limit(limit);
    const sensors: Array<SensorDto> = [
      { name: "fuelLevel", status: "0", img: "x", data: [] },
      { name: "temperature", status: "0", img: "x", data: [] },
      { name: "powerSupply", status: "0", img: "x", data: [] },
    ];

    measureContext.forEach((measure: Measure) => {
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
    });

    return sensors;
  }
}
export default MeasureService;
