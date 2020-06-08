import { ExternalLinks } from './external-links';
import { Identifiers } from './identifiers';
import { Content } from './content';

export class RelevantReview {

    constructor(
        public id:string,
        public citation:string,
        public external_links:ExternalLinks,
        public identifiers:Identifiers,
        public content:Content
    ){}
}
