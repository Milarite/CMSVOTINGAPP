angular.module('starter', [ 'starter.controllers','starter.services']).run(function($rootScope)
{

 let role = localStorage.getItem("role");
 if(role != undefined){
     
     if(role == "candidate"){
         $rootScope.candidate_items = true;
     }
     else{
         $rootScope.judgment_items = true;
     }
 }

 
})