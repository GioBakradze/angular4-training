import { SpaceshipWorker } from './spaceship-worker';
import { Sortable } from './sortable';

export class Person implements SpaceshipWorker, Sortable {

    name: string;
    age: number;
    private profession: string;
    private performance: number;

    constructor(name: string, age: number, profession: string, performance: number) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.performance = performance;
    }

    getOlder(): void {
        this.age++;
    }

    getProfession(): string {
        return this.profession;
    }

    perform(task: string): string {
        return `Person ${this.name} is performing task: ${task}`;
    }

    numericValue(): number {
        return this.performance;
    }

}
