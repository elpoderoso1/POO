import { BaseContent } from "./BaseContent";

export class Documentary extends BaseContent {
    public showDetails(): void {
        console.log(`Documental ${this.title} con duracion ${this.duration} minutos`);
    }
}
