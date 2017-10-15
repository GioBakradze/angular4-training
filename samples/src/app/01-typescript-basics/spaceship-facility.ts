import { SpaceshipWorker } from './spaceship-worker';

export class SpaceshipFacility {


    constructor(private taskList: Array<string>, private worker: SpaceshipWorker) {
    }

    completeTasks(): void {
        this.taskList.forEach((task: string) => {
            console.log(this.worker.perform(task));
        });
    }

    setWorker(worker: SpaceshipWorker): void {
        this.worker = worker;
    }

}
