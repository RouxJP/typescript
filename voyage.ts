class SeJour {
    constructor( private _nom:string, private _prix:number){

    }

    get nom (){
        return this._nom
    }

    get prix (){
        return this._prix
    }

    set nom ( nom){
        this._nom = nom
    }

    set prix ( prix){
        this._prix = prix
    }

}

class SejourService {
    private let  sejour:Sejour[] 
}
