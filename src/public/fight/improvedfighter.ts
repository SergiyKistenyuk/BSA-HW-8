import Fighter, { IFighter } from './fighter';

export interface IImprovedFighter extends IFighter{    
    doubleHit: (enemy: IFighter, point: number) => void;
}

export default class ImprovedFighter extends Fighter implements IImprovedFighter{
    doubleHit(enemy: IFighter, point: number = 1) {
        super.hit(enemy, point * 2);
    }
}