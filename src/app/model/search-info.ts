import { Pages } from './pages';

export class SearchInfo {

    constructor(
        public pages:Pages,
        public total_hits:number
    ){}
}
