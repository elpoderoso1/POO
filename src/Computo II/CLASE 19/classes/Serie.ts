import { BaseContent } from "./BaseContent";

export class Serie extends BaseContent {

    constructor(id: number, title: string, duration: number, public season: number, public episodes: number) {
        super(id, title, duration);
    }

    public showDetails(): void {
        console.log(`Serie: ${this.title} temporadas ${this.season} capitulos ${this.episodes}`);
    }
}
