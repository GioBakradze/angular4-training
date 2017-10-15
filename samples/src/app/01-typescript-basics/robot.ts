import { SpaceshipWorker } from './spaceship-worker';

export class Robot implements SpaceshipWorker {


    constructor(private robotId: string) {
    }

    perform(task: string): string {
        return `Robot ${this.robotId} is working on task: ${task}`;
    }

}
