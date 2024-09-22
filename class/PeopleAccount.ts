import { DioAccount } from "./DioAccount";
export class PeopleAccount extends DioAccount{
    private doc_id: number

    constructor(name:string, accountNumber:number, doc_id:number){
        super(name, accountNumber);
        this.doc_id = doc_id
    }

    getDocId = ():number=>this.doc_id
    setDocId = (doc_id:number):void=> {this.doc_id = doc_id}
}