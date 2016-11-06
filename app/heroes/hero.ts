export class Hero{
  id : number;
  name : string;
  age : number;



  constructor(public argId : number,public argName:string){
    this.id = argId;
    this.name = argName;
    this.age = 5;
  }

  setAge(age : number,event){
    event.preventDefault();
    this.age += age;
  };

}
