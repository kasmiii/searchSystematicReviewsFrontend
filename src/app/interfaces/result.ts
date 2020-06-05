import { Externallinks } from './externallinks';

export interface Result {

    document_uri:string;
    id:string;
    title:string;
    journal:string;
    authors:string[];
    abstract:string;
    year:number;
    classification:string;
    external_links:Externallinks;

}