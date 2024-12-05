export abstract class HashingService{

    abstract hash(password:string) : Promise<string>; //condifica
    abstract compare(password:string ,passwordHash:string): Promise<boolean>; //decodifica
};