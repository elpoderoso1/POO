import { ContentInterface } from "../interfaces/ContentInterface";

export class PlatformStreaming {
    private contents: ContentInterface[] = [];

    public addContent(content: ContentInterface): void {
        this.contents.push(content);
    }

    public editContent(id: number, newTitle: string, newDuration: number): void {
        const content = this.contents.find(c => c.id === id);

        if (content) {
            content.title = newTitle;
            content.duration = newDuration;
        }
    }

    public getAllContent(): void {
        this.contents.forEach(content => content.showDetails());
    }
}
