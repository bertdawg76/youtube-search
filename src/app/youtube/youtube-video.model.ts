export class VideoDetail {
    id: string;
    thumbnail: string;
    title: string;
    description: string;
    publishedAt: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.thumbnail = obj && obj.thumbnail || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.publishedAt = obj && obj.publishedAt || null;
    }
}