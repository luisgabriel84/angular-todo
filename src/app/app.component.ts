import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular Crud";
  msg = '';
  hideUpdate: Boolean= true;

  employees = [
    { name: "Fatz",email:'fatz@gmail.com' ,position: "Manager" },
    { name: "Juan ",email:'juan@gmail.com', position: "Developer" },
    { name: "Pedro",email:'pedro@gmail.com', position: "Designer" }
  ];

  model: any = {};
  model2: any = {};

  addEmployee(): void {
    this.employees.push(this.model);
    this.model = {};
    this.msg = "Se guardo el empleado satisfactoriamente";
  }

  deleteEmployee(i): void {
    var answer = confirm("Estas seguro de querer eliminar?");
    if(answer){
      this.employees.splice(i,1);
      this.msg = "Empleado eliminado";
    }
  }

  myValue;
  editEmployee(i): void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.email = this.employees[i].email;
    this.model2.position = this.employees[i].position;
    this.myValue = i;
  }

  updateEmployee(): void {

    let i = this.myValue;
    for(let j =0; j< this.employees.length; j++){
      if(j == i){
        this.employees[j] = this.model2;
        this.model2={};
        this.msg = "Empleado actualizado";
        this.hideUpdate= true;
      }
    }
  }

  closeAlert():void{
    this.msg ="";
  }
}
