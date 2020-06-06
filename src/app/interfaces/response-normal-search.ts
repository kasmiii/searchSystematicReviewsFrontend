import { SearchInfo } from './search-info';
import { Result } from './result';

export interface ResponseNormalSearch {

    search_info:SearchInfo;
    results:Array<Result>;
    
}
