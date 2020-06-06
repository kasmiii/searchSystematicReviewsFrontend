import { SearchInfo } from './search-info';
import { Result } from './result';

export class ResponseNormalSearch {


    constructor(
        public search_info:SearchInfo,
        public results:Result[]
    ){}
    
}
