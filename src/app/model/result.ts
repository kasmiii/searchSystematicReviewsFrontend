import { ExternalLinks } from './external-links';

export class Result {

    constructor(
    public document_uri:string,
    public id:string,
    public title:string,
    public journal:string,
    public authors:string[],
    public abstract:string,
    public year:number,
    public classification:string,
    public external_links:ExternalLinks
    ){}
}
