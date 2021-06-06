import { O_DIRECT } from "node:constants";
import { MeasureService } from ".";
import { furnaceModel } from "../dao";
import { CreateFurnaceDto, PutFurnaceDto, SensorDto } from "../dto";
import { HttpException } from "../exceptions";
import { CRUD } from "../types/interfaces/crud.interface";
import { Furnace, Measure } from "../types/models";
export interface FurnanceVM {
  id: string;
  name: string;
  sensors: Array<SensorDto>;
}
class FurnaceService implements CRUD<Furnace | string> {
  private dbContext = furnaceModel;
  private measureService: MeasureService;
  constructor() {
    this.measureService = new MeasureService();
  }
  async list(): Promise<Array<Furnace>> {
    const furnaceContext = await this.dbContext.find();
    return furnaceContext as Array<Furnace>;
  }
  async create(resource: CreateFurnaceDto): Promise<Furnace> {
    if (!resource) throw new HttpException(400, "Given resources are empty");
    const createdFurnace = await this.dbContext.create(resource);
    return createdFurnace as Furnace;
  }
  async putById(id: string, resource: PutFurnaceDto): Promise<Furnace> {
    const furnaceContext = await this.dbContext.findById(id);
    if (!resource) throw new HttpException(400, "Given resources are empty");
    if (!furnaceContext) return null;
    Object.assign(furnaceContext, resource);
    await furnaceContext.save();
    return furnaceContext as Furnace;
  }
  async readById(id: string): Promise<Furnace> {
    const furnaceContext = await this.dbContext.findById(id);
    if (!furnaceContext) return null;
    return furnaceContext as Furnace;
  }
  async deleteById(id: string): Promise<string | null> {
    const furnaceContext = await this.dbContext.findById(id);
    if (!furnaceContext) return null;
    await furnaceContext.deleteOne();
    return `Furnace ${furnaceContext.name} has been removed.`;
  }
  async patchById(
    id: string,
    resource: PutFurnaceDto
  ): Promise<Furnace | null> {
    const furnaceContext = await this.dbContext.findById(id);
    if (!resource) throw new HttpException(400, "Given resources are empty");
    if (!furnaceContext) return null;
    if (furnaceContext.name != resource.name && resource.name != null) {
      Object.assign(furnaceContext, { name: resource.name });
      await furnaceContext.save();
    }
    if (furnaceContext.userId != resource.userId && resource.userId != null) {
      Object.assign(furnaceContext, { userId: resource.userId });
      await furnaceContext.save();
    }
    return furnaceContext as Furnace;
  }
  async get(requestedFurnace: CreateFurnaceDto): Promise<Furnace | null> {
    const furnaceContext = await this.dbContext.find({
      userId: requestedFurnace.userId,
      name: requestedFurnace.name,
    });
    if (furnaceContext.length != 1) return null;
    return furnaceContext[0] as Furnace;
  }
  async listByUser(userId: string): Promise<Array<FurnanceVM>> {
    const furnaceContext = await this.dbContext.find({ userId: userId });
    const furnaceObjects = (await furnaceContext.map((el) =>
      el.toJSON()
    )) as Array<Furnace>;
    const furnaceArray = [];
    furnaceObjects.map(async (furnace) => {
      furnaceArray.push(this.measureService.myList(furnace.typ, 50,furnace.name));
      // sensorArray = await this.measureService.myList(furnace.typ, 50);
    
      /*
     furnaceArray.push({
        id: furnace.id,
        name: furnace.name,
        sensors: await sensorArray,
      });
      */
    });
    const data = await Promise.all(furnaceArray)
    return data;
  }
}
export default FurnaceService;

/*
async listByUser(userId: string) {
    const furnaceContext = await this.dbContext.find({ userId: userId });
    const foundFurnances = furnaceContext.map((el) =>
      el.toObject()
    ) as Array<Furnace>;
    const getData = async () =>
      Promise.all(
        foundFurnances.map((f) => this.measureService.listAmount(f.typ, 50))
      );
    let foundMeasure = [];
    const measure = await (
      await getData()
    ).map((el) => {
      foundMeasure.push(el);
    });

    const furnances: Array<FurnanceVM> = [];
    foundMeasure.forEach((me: Array<Measure>) => {
      let id = furnances.length - 1;
      furnances[id].id = me[0].id;
      furnances[id].name = me[0].id;
      furnances[id].sensors = [
        { name: "fuelLevel", status: "0", img: "x", data: [] },
        { name: "temperature", status: "0", img: "x", data: [] },
        { name: "powerSupply", status: "0", img: "x", data: [] },
      ];
      me.map((measure: Measure) => {
        furnances[id].sensors[
          furnances[id].sensors.findIndex((s) => s.name == "fuelLevel")
        ].data.push({
          date: new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            minute: "numeric",
          }).format(measure.createdAt),
          value: measure.fuelLevel,
        } as SensorDataDto);
      });
    });
    
 
    let sensors: Array<SensorDto> = [
      { name: "fuelLevel", status: "0", img: "x", data: [] },
      { name: "temperature", status: "0", img: "x", data: [] },
      { name: "powerSupply", status: "0", img: "x", data: [] },
    ];
    foundMeasure.forEach((measure: Measure) => {
      furnances.push({
        name: measure.furnaceId,
        id: measure.id,
        sensors,
      } as FurnanceVM);
    });
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
      furnances.push({
        name: measure.furnaceId,
        sensors,
        id: measure.furnaceId,
      } as FurnanceVM);
      sensors = [
        { name: "fuelLevel", status: "0", img: "x", data: [] },
        { name: "temperature", status: "0", img: "x", data: [] },
        { name: "powerSupply", status: "0", img: "x", data: [] },
      ];
    });
    let names: string[] = furnances.map((el) => el.name);
    names = names.filter((v, i) => names.indexOf(v) === i);

return furnances;
}
*/
