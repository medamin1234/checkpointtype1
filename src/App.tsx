

//DEFINE INTERFACE
interface Vehicle {
  make:string;
  model:string;
  year:number;
  start:()=>void;
}
//IMPLEM CLASS
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
   this.make=make
   this.model=model
   this.year=year
  }
  start =(): void=>{
console.log("Car engine started")
  } 
}

const App = ()=> {
//Create instance 
const mycar = new Car("Audi","e-tron gt",2021)
console.log(mycar)

//Run engine func


  return (
  <></>
  );
}

export default App;
