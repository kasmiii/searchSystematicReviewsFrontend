export class UserSession {
    static id: string;
  static email: string;
  static password: string;
  static isConnected: boolean;

    
  static makeId(length:number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
    /*constructor(
    public id:string,
    public email:string,
    public password:string,
    public isConnected:boolean){}*/

}
