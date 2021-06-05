import { MeasureService } from ".";
import { furnaceModel } from "../dao";
import { CreateFurnaceDto, PutFurnaceDto, SensorDto } from "../dto";
import { HttpException } from "../exceptions";
import { CRUD } from "../types/interfaces/crud.interface";
import { Furnace } from "../types/models";
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
  async listByUser(id: string): Promise<Array<FurnanceVM>> {
    const furnaceContext = (await this.dbContext.find({
      userId: id,
    })) as Array<Furnace>;
    const furnances: Array<FurnanceVM> = [];

    furnaceContext.filter(async (furnance) => {
      const sensors = await this.measureService.listAmount(furnance.id, 50);
      const newFurnance: FurnanceVM = {
        id: furnance.id,
        name: furnance.name,
        sensors,
      };
      furnances.push(newFurnance)
    });
    return furnances as Array<FurnanceVM>;
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
    if (furnaceContext.typ != resource.typ && resource.typ != null) {
      Object.assign(furnaceContext, { typ: resource.typ });
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
}
export default FurnaceService;
