import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular Crud";

  employees = [
    { name: "Fatz", position: "Manager" },
    { name: "Juan ", position: "Developer" },
    { name: "Pedro", position: "Designer" }
  ];

  model: any = {};

  addEmployee(): void {
    this.employees.push(this.model);
    this.model = {};
    //this.msg = "Se guardo el empleado satisfactoriamente";
  }

  deleteEmployee(): void {}

  editEmployee(): void {}

  updateEmployee(): void {}
}
