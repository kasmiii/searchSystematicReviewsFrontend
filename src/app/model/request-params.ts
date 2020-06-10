export class RequestParams {

    constructor(
        public keyword:string,
        public min_year:number,
        public max_year:number,
        public exclude_cochrane:string
    ){}
}
