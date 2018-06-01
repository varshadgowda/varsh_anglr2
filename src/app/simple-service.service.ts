import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SimpleServiceService {
	// var1:String;
	// var2:String;
	values: any = [];
  
  constructor() { }

  saveToService(values) {
    this.values = values;
    console.log("hii")
    }

	getFromService(values){
		return this.values;
	}
	// getFromServices(){
	// 	return this.var2;
	// }

}
