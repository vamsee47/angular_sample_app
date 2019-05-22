let myapp= angular.module("Myapp", []);

let mycontroller = function($scope){
   $scope.message= "Hello World";

}

myapp.controller("MyController", mycontroller);

let JSONCOntroller = function($scope){

    let Student = {
        FirstName : "Vamsee",
        LastName : "Gangapatnam",
        Email: "s533908@nwmissouri.edu"
      

    }
    $scope.Student= Student;
}

myapp.controller("Student", Student )