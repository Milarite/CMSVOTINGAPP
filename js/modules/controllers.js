var app = angular.module('starter.controllers',[]);


app.controller('addCandidateCtrl',function($scope,Web3jsObj,getRole,$window){



   $scope.current_role =  getRole.getCurrentRole();

   

   if(  localStorage.getItem("role") == undefined ||$scope.current_role == "candidate")
   $window.location.href="/";
   
    const judgment_address = localStorage.getItem("address");
const judgment_privateKey = localStorage.getItem("pkAddress");
Web3jsObj.web3Init(contractsInfo.main,MainAbi,judgment_address,judgment_privateKey);
Web3jsObj.Web3Facotry(rinkebyUrl);
const smartContract = Web3jsObj.Web3SmartContract();

$scope.nationlIdValidation = function(_id)
{


    if(_id)
    {
  $scope.userFound=false;
  let user =smartContract.getCandidateAddressByNationalId.call(_id);

  if(user == true)

  {




 

    $scope.userFound = true;
  



  
  }
}
}
















        //  web3.eth.sendRawTransaction(raw, function (err, transactionHash) {
    
          





    
 
    





    $scope.addCandidate=function(candidateData){

        // create candidate wallet
        $.LoadingOverlay('show');
    



               ///// add candidate function
           
               var data =smartContract.addCandidate.getData(candidateData.candidateId,candidateData.name,candidateData.dateOfBirth,candidateData.password
                ,candidateData.city,candidateData.year,candidateData.phoneNumber,candidateData.campaign); 
            
            
                web3.eth.getTransactionCount(judgment_address,function(err,nonce){
                  
                    var tx =new ethereumjs.Tx({ 
                        data : data,
                        nonce : nonce,
                        gasPrice :web3.toHex(web3.toWei('20', 'gwei')),
                        to : contractsInfo.main,
                        value : 0,
                        gasLimit: 1000000
                        
            
                    });
            
                      tx.sign(ethereumjs.Buffer.Buffer.from(judgment_privateKey.substr(2), 'hex'));
                      var raw = '0x' + tx.serialize().toString('hex');
            
            
                      web3.eth.sendRawTransaction(raw, function (err, transactionHash) {

if(!err)
{
    
    console.log(transactionHash);
    alert("candidate added");
}
console.log(err);
$.LoadingOverlay('hide');



            });


                    



                });





           
      
        }

        //})


 //   })
    
    
    








    


     
    
    
       
        




        ///////////////////

  


});

app.controller("loginCtrl",function($scope,Web3jsObj,$window,FireBaseObj){

    ////
 FireBaseObj.getFireBaseObj("/db").child("admin").orderByChild("ID").equalTo("1").once("value",snapshot => {
    if (!snapshot.exists()){
 FireBaseObj.getFireBaseObj("/db").child("admin").set({
id : 1,
name :"admin",
password:"123456"

 }) ;    
     
    }
  
});;


if(localStorage.getItem("role") !=undefined){

  if(localStorage.getItem("role") =="judgment"){

    $window.location.href="./AddCandidate.html";

  }
  else{
    $window.location.href="./CandidateProfile.html";


  }

  return;
}
    ///
    Web3jsObj.Web3Facotry(rinkebyUrl);
    ///functions
    $scope.addEtherToJudgment = function(_from,_fromPk,_to){
        
        var balance = web3.eth.getBalance(_to);
        balance = web3.toDecimal(balance);
        balance = web3.fromWei(balance, 'ether');
      
        if(balance < 1)
       { 
        web3.eth.getTransactionCount(_from,function(err,transactionCount){

            var tx =new ethereumjs.Tx({ 
           data : '',
           nonce : transactionCount,
           gasPrice :web3.toHex(web3.toWei('20', 'gwei')),
           to : _to,
           value : 2000000000000000000 ,
           gasLimit: 1000000
           

       });

         tx.sign(ethereumjs.Buffer.Buffer.from(_fromPk, 'hex'));
         var raw = '0x' + tx.serialize().toString('hex');
         web3.eth.sendRawTransaction(raw, function(err,result){
            $.LoadingOverlay('hide')
            
            if(!err){
                $window.location.href = "./AddCandidate.html";

           
            }

         });
        
         
    })
  
    }
    else{
        $.LoadingOverlay('hide');
       
        $window.location.href = "./AddCandidate.html";

    }
    localStorage.setItem("role",$scope.role);
}

$scope.check = function(event,_val){
    
    $scope.checked=_val;



    
    
   


     $scope.role=_val;
  
  } 

  

  $scope.validation = function(_idNumber,_pass){

   
    
    Web3jsObj.web3Init(contractsInfo.main,MainAbi,null,null);
    var candidateContractInstance = Web3jsObj.Web3SmartContract();
// this line will get the address from smart contract by candidate national id
    const candidate_address = candidateContractInstance.getCandidateAddressByNationalId.call(_idNumber);
    // this line will call function thats accept address and password as parameter and return true or false based on founded 
    const isAccountValid = candidateContractInstance.CandidateCheckIdAndPassword(candidate_address,_pass);
 if(isAccountValid==true){
   localStorage.setItem("candidate_nationalId",_idNumber);
 }




    return isAccountValid;

    

}
    /// end of functions

    /// event
    $scope.loginEmail = function(loginForm,user){
        
      
        

        //  $rootScope.currentRole = role;
        
        
        // (role.candidate ==true && valdation(user.NationalNumber,user.password))
        
        
        // if(($scope.role=="c" && validation(user.NationalNumber,user.password)==true))
        // {
        
        // }
         if(($scope.role=="judgment" && user.password =="judgjudg"))
        {
            
            $.LoadingOverlay('show');
        
            
            Web3jsObj.createBrainWallet(user.NationalNumber, user.password).then(function(_wallet){
        
        
                    
                localStorage.setItem("address", _wallet.address);
                localStorage.setItem("pkAddress",_wallet.privateKey);
                
        
                $scope.addEtherToJudgment(public_key,private_key,_wallet.address);
        
        
        
                /// add ether to judg if his wallet is empty 
        
        
        
                // end of adding ether to judg
        
        
        
            
                   
        
                    
                });
             
             // console.log(Web3jsObj.Web3Facotry("https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010"));
            //   var webobj=Web3jsObj.Web3Facotry("https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010");
            }
            else if($scope.validation(user.NationalNumber,user.password)==true)  {
                $.LoadingOverlay('show');
                
                $.LoadingOverlay('hide')
                localStorage.setItem("role",$scope.role);
                $window.location.href = "./CandidateProfile.html";

              
                
                
            }
          else {alert ("invalid password")};
          }
$scope.loginAsAdmin=function(_loginForm){


    
}
    });

    app.controller("ViewCandidateCtrl",function($scope,Web3jsObj,getRole)

 { 
    const judgment_address = localStorage.getItem("address");
    const judgment_privateKey = localStorage.getItem("pkAddress");
    Web3jsObj.web3Init(contractsInfo.main,MainAbi,judgment_address,judgment_privateKey);
    Web3jsObj.Web3Facotry(rinkebyUrl);
    
    var smartInstance = Web3jsObj.Web3SmartContract();

     $scope.deleteCandidate=function(_nationalId){
        $.LoadingOverlay('show');
        var data =smartInstance.deleteCandidate.getData(_nationalId); 

        web3.eth.getTransactionCount(judgment_address,function(err,nonce){
                  
            var tx =new ethereumjs.Tx({ 
                data : data,
                nonce : nonce,
                gasPrice :web3.toHex(web3.toWei('20', 'gwei')),
                to : contractsInfo.main,
                value : 0,
                gasLimit: 1000000
                
    
            });
    
              tx.sign(ethereumjs.Buffer.Buffer.from(judgment_privateKey.substr(2), 'hex'));
              var raw = '0x' + tx.serialize().toString('hex');
    
    
              web3.eth.sendRawTransaction(raw, function (err, transactionHash) {

if(!err)
{

console.log(transactionHash);
alert("candidate deleted");
}
console.log(err);
$.LoadingOverlay('hide');



    });


            



        });

     }
     
   $scope.current_role =  getRole.getCurrentRole();
   if(localStorage.getItem("role") == undefined || $scope.current_role == "candidate")
   $window.location.href="/";

   


const numberOfCandidate = smartInstance.getCandidateNationalIDArrayLength.call();
const number = numberOfCandidate.c[0];
var items = [];
for(var i =0 ; i < number ;i++)
{

  var address = smartInstance.getCandidateNationalID.call(i);
  
 
  var name = smartInstance.getCandidateName.call(address);
 // if(name)
  {
  var city = smartInstance.getCandidateCity.call(address);
  
  var numberOfVotes = smartInstance.getCandidateVotesNumber.call(address);
  var _nationalId = smartInstance.getCandidateNational.call(address);

  var candidate = {address:address,nameCandidate : name , City :city, NumberOfVotes : numberOfVotes ,nationalId : _nationalId };

  items.push(candidate);
  }
  //var 

  
}
$scope.candidates = items;

});

app.controller("CandidateProfileCtrl",function($scope,Web3jsObj,getRole,$window){
    
   $scope.current_role =  getRole.getCurrentRole();
   if(localStorage.getItem("role") == undefined || $scope.current_role == "judgment")
   $window.location.href="/";
    const judgment_address = localStorage.getItem("address");
    const judgment_privateKey = localStorage.getItem("pkAddress");
  
  Web3jsObj.web3Init(contractsInfo.main,MainAbi,judgment_address,judgment_privateKey);
  Web3jsObj.Web3Facotry(rinkebyUrl);
  smartInstance=Web3jsObj.Web3SmartContract();
  
  const _idNumber = localStorage.getItem("candidate_nationalId");
  
  const candidate_address = smartInstance.getCandidateAddressByNationalId.call(_idNumber);
  // this line will call function thats accept address and password as parameter and return true or false based on founded 
  const birthOfDate = smartInstance.getCandidatebirthOfDate.call(candidate_address);
  const city = smartInstance.getCandidateCity.call(candidate_address);
  const year = smartInstance.getCandidateYear.call(candidate_address);
  const NumberOfVotes=smartInstance.getCandidateVotesNumber.call(candidate_address);
  const nameCandidate=smartInstance.getCandidateName.call(candidate_address);
  const campaign=smartInstance.getCandidateCampaign.call(candidate_address);
  
  
  $scope.candidateProfile = {
    NationalNumber : _idNumber,
    Address : candidate_address,
    BirthOfDate : birthOfDate,
    City:city,
    Year:year,
    NumberOfVotes:NumberOfVotes,
    nameCandidate:nameCandidate,
    campaign:campaign,
    address : candidate_address
    
    
    };


});
app.controller("settingsCtrl",function($scope,Web3jsObj){
    const judgment_address = localStorage.getItem("address");
    const judgment_privateKey = localStorage.getItem("pkAddress");
  Web3jsObj.web3Init(contractsInfo.main,MainAbi,judgment_address,judgment_privateKey);
  Web3jsObj.Web3Facotry(rinkebyUrl);
  smartInstance=Web3jsObj.Web3SmartContract();
  
  const counts=smartInstance.getVotesCount.call();
  const startdate=smartInstance.getStartDate.call();
  const StartTime=smartInstance.getStartTime.call();
  const Endtime=smartInstance.getEndTime.call();

  $scope.numOfVotes=counts;
  $scope.startDate=startdate;
  $scope.startTime=StartTime;
  $scope.endTime=Endtime;

$scope.UpdateSettings=function(_row)
{
   
   
// var currentCounts = $scope.numOfVotes;
// var currentStartDate = $scope.startDate;
// var currentStartTime = $scope.startTime;
// var currentEndTime = $scope.endTime;
debugger;
    switch(_row){
        case "votesCount":
$scope.updateSettingsValue($scope.numOfVotes,"votesCount");

        break;
        case "startDate":
        $scope.updateSettingsValue($scope.startDate,"startDate");

        break;
        case "startTime":
        $scope.updateSettingsValue($scope.startTime,"startTime");

        break;
        case "endTime":
        $scope.updateSettingsValue($scope.endTime,"endTime");

        break;
    }
    

    

        
    

        
    


    




       
  }

  $scope.updateSettingsValue = function (_newValue,_data){
      
    $.LoadingOverlay('show');
    var data = null;
    switch(_data){
        case "votesCount":
       data =  smartInstance.updateVotesCount.getData(_newValue);
        break;
        case "startDate":
        data =  smartInstance.setStartDate.getData(_newValue);
         break;
         case "startTime":
         data =  smartInstance.setStartTime.getData(_newValue);
          break;
          case "endTime":
          data =  smartInstance.setEndTime.getData(_newValue);
           break;
    } 

    web3.eth.getTransactionCount(judgment_address,function(err,nonce){
              
        var tx =new ethereumjs.Tx({ 
            data : data,
            nonce : nonce,
            gasPrice :web3.toHex(web3.toWei('20', 'gwei')),
            to : contractsInfo.main,
            value : 0,
            gasLimit: 1000000
            

        });

          tx.sign(ethereumjs.Buffer.Buffer.from(judgment_privateKey.substr(2), 'hex'));
          var raw = '0x' + tx.serialize().toString('hex');


          web3.eth.sendRawTransaction(raw, function (err, transactionHash) {

if(!err)
{

console.log(transactionHash);
alert("settings updated");
}
console.log(err);
$.LoadingOverlay('hide');





});


        



    });
}
  

});  
