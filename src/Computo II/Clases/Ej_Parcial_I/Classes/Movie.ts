import { BaseContent } from "./BaseContent";

export class Movie extends BaseContent {
    public showDetails(): void {
        console.log(`Pelicula: ${this.title} con duracion ${this.duration} minutos`);
    }
}
