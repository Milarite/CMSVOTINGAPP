var app = angular.module('starter.controllers',[]);


app.controller('addCandidateCtrl',function($scope,Web3jsObj,getRole,$window){



   $scope.current_role =  getRole.getCurrentRole();

   

   if(  localStorage.getItem("role") == undefined ||$scope.current_role == "candidate")
   $window.location.href="/";
   
const admin_address = localStorage.getItem("adminAddress");
const admin_privateKey = localStorage.getItem("adminPkAddress");


Web3jsObj.web3Init(contractsInfo.main,MainAbi,admin_address,admin_privateKey);
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
            
        web3.eth.getTransactionCount(admin_address,function(err,nonce){
                  
                    var tx =new ethereumjs.Tx({ 
                        data : data,
                        nonce : nonce,
                        gasPrice :web3.toHex(web3.toWei('20', 'gwei')),
                        to : contractsInfo.main,
                        value : 0,
                        gasLimit: 1000000
                        
            
                    });
            
                      tx.sign(ethereumjs.Buffer.Buffer.from(admin_privateKey.substr(2), 'hex'));
                      var raw = '0x' + tx.serialize().toString('hex');
            
            
                      web3.eth.sendRawTransaction(raw, function (err, transactionHash) {

if(!err)
{
    
 
    

    (async function() {
        
        const minedTxReceipt = await awaitTx(web3, transactionHash);
        console.log(transactionHash);
        alert("candidate added");
        $.LoadingOverlay('hide');
      })();
}
console.log(err);




            });


                    



                });





           
      
        }

        //})


 //   })
    
    
    








    


     
    
    
       
        




        ///////////////////

  


});

app.controller("loginCtrl",function($scope,Web3jsObj,$window,FireBaseObj,$firebaseObject){

    ////
    const auth =  FireBaseObj.getFireBaseAuth();
const fireBase = FireBaseObj.getFireBaseObj("/db").child("judgments");

if(localStorage.getItem("role") !=undefined){

  if(localStorage.getItem("role") =="judgment"){

    $window.location.href="./ViewCandidate.html";

  }
  else{
    $window.location.href="./CandidateProfile.html";


  }

  return;
}
    ///
    Web3jsObj.Web3Facotry(rinkebyUrl);

    web3.eth.filter("pending").watch(
        function(error,result){
            if (!error) {
                console.log("pending" + result);
            }
            console.log(error);
        }
      ) 
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
    // this line will call function thats accept address and password as parameter and return true or false based on founded 
    const isAccountValid = candidateContractInstance.CandidateCheckIdAndPassword(_idNumber,_pass);
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

         if($scope.role=="judgment" )
        {
            
           
      auth.signInWithEmailAndPassword(user.NationalNumber,user.password).then((result)=>{
        $.LoadingOverlay('show');
if(result){
    Web3jsObj.createBrainWallet(user.NationalNumber, user.password).then(function(_wallet){
                
                            
        localStorage.setItem("address", _wallet.address);
        localStorage.setItem("pkAddress",_wallet.privateKey);
        

        $scope.addEtherToJudgment(public_key,private_key,_wallet.address);

        $.LoadingOverlay('hide');
        localStorage.setItem("role",$scope.role);
        $window.location.href="./AddCandidate.html"

    });
}
      }).catch((err)=>{
          if(err)
          {
            alert("invalid input values");
          }
      });
            
            

               
                
         

            
            
            // $.LoadingOverlay('show');
        
            
            // Web3jsObj.createBrainWallet(user.NationalNumber, user.password).then(function(_wallet){
        
        
                    
            //     localStorage.setItem("address", _wallet.address);
            //     localStorage.setItem("pkAddress",_wallet.privateKey);
                
        
            //     $scope.addEtherToJudgment(public_key,private_key,_wallet.address);
        
        
        
            //     /// add ether to judg if his wallet is empty 
        
        
        
            //     // end of adding ether to judg
        
        
        
            
                   
        
                    
            //     });
             
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

    });

    app.controller("ViewCandidateCtrl",function($scope,Web3jsObj,getRole,$window)

 { 
    const admin_address = localStorage.getItem("adminAddress");
    const admin_privateKey = localStorage.getItem("adminPkAddress");
    Web3jsObj.web3Init(contractsInfo.main,MainAbi,admin_address,admin_privateKey);
    Web3jsObj.Web3Facotry(rinkebyUrl);
    
    var smartInstance = Web3jsObj.Web3SmartContract();

     $scope.deleteCandidate=function(_nationalId){
         
        $.LoadingOverlay('show');
        var data =smartInstance.deleteCandidate.getData(_nationalId); 
        web3.eth.getTransactionCount(admin_address,function(err,nonce){
        var tx =new ethereumjs.Tx({ 
                data : data,
                nonce : nonce,
                gasPrice :web3.toHex(web3.toWei('20', 'gwei')),
                to : contractsInfo.main,
                value : 0,
                gasLimit: 1000000
                
    
            });
    
              tx.sign(ethereumjs.Buffer.Buffer.from(admin_privateKey.substr(2), 'hex'));
              var raw = '0x' + tx.serialize().toString('hex');
    
    
              web3.eth.sendRawTransaction(raw, function (err, transactionHash) {

if(!err)
{

console.log(transactionHash);
(async function() {
    const minedTxReceipt = await awaitTx(web3, transactionHash);
    alert("candidate deleted");    $.LoadingOverlay('hide');
    location.reload();
  })();
}else{
console.log(err);
$.LoadingOverlay('hide');
}


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
  if(name)
  {
  var city = smartInstance.getCandidateCity.call(address);

  var numberOfVotes = smartInstance.getCandidateVotesNumber.call(address);
  
  var _nationalId = smartInstance.getCandidateNational.call(address);

  var candidate = {address:address,nameCandidate : name , City :city, NumberOfVotes : numberOfVotes ,nationalId : _nationalId };

  items.push(candidate);
  }
}

$scope.candidates = items;

$scope.showVotersTransactions = function(_nationalId){
    


let transactionArray = [];
let transactionRevokedArray = [];



const countOfTransactionsTx = smartInstance.getCandidateTxtHashStatusLength.call(_nationalId);
const parsingCount = JSON.parse(countOfTransactionsTx);


for(var i =0 ; i <parsingCount ; i++){

let txHashStatus = smartInstance.getTxtHashFlag.call(_nationalId.toString(),i);
let txHash = smartInstance.getTxtHash.call(_nationalId.toString(),i);

if(JSON.parse(txHashStatus) == -1)
{
   
    transactionRevokedArray.push({hash:txHash});
}
else{
    transactionArray.push({hash:txHash});
}





}
$scope.ts = transactionArray;
$scope.tsr=transactionRevokedArray;

$("#votersTransaction").modal('show');




}

$scope.showProfile=function(_nationalId){
    $window.location.href="./CandidateProfile.html?nid="+_nationalId;



}

});

app.controller("CandidateProfileCtrl",function($scope,Web3jsObj,getRole,$window,Helper){
    
   $scope.current_role =  getRole.getCurrentRole();
   if(localStorage.getItem("role") == undefined)
   $window.location.href="/";
    const admin_address = localStorage.getItem("adminAddress");
    const admin_privateKey = localStorage.getItem("pkAddress");
  
  Web3jsObj.web3Init(contractsInfo.main,MainAbi,admin_address,admin_privateKey);
  Web3jsObj.Web3Facotry(rinkebyUrl);
  smartInstance=Web3jsObj.Web3SmartContract();
  url_string=document.URL;
  var url = new URL(url_string);
  var Id = url.searchParams.get("nid");
  var _idNumber=null ;
  if(Id!=undefined){
      _idNumber=Id
  }else{
   _idNumber = localStorage.getItem("candidate_nationalId");

  }


  
  // this line will call function thats accept address and password as parameter and return true or false based on founded 
  const birthOfDate = smartInstance.getCandidatebirthOfDate.call(_idNumber);
  const city = smartInstance.getCandidateCity.call(_idNumber);
  const year = smartInstance.getCandidateYear.call(_idNumber);
  const NumberOfVotes=smartInstance.getCandidateVotesNumber.call(_idNumber);
  const nameCandidate=smartInstance.getCandidateName.call(_idNumber);
  const campaign=smartInstance.getCandidateCampaign.call(_idNumber);
  
  $scope.candidateProfile = {
    NationalNumber : _idNumber,
    BirthOfDate : birthOfDate,
    City:city,
    Year:year,
    NumberOfVotes:NumberOfVotes,
    nameCandidate:nameCandidate,
    campaign:campaign,
   
    
    
    };

    $scope.ElectionStatus = function(){
        const counts=smartInstance.getVotesCount.call();
        const startdate=smartInstance.getStartDate.call();
        const period=smartInstance.getPeriod.call();
        const periodSplited = period.split("-");
        const from = periodSplited[0];
        const to = periodSplited[1];
        const fromHoursAsMinutes = parseInt(from.split(":")[0]) * 60;
        return fromHoursAsMinutes;
    }

    

    $scope.showProfileTransactions = function(){
        let transactionArray = [];
        let transactionRevokedArray = [];
        const countOfTransactionsTx = smartInstance.getCandidateTxtHashStatusLength.call(_idNumber);
        const parsingCount = JSON.parse(countOfTransactionsTx);
    
    
    for(var i =0 ; i <parsingCount ; i++){
    
    let txHashStatus = smartInstance.getTxtHashFlag.call(_idNumber.toString(),i);
    let txHash = smartInstance.getTxtHash.call(_idNumber.toString(),i);
    
    
    if(JSON.parse(txHashStatus) == -1)
    {
       
        transactionRevokedArray.push({hash:txHash});
    }
    else{
        transactionArray.push({hash:txHash});
    }
   
    }
   
    $scope.transactionCounted = transactionArray;
    $scope.transactionRevoked = transactionRevokedArray;
    $("#candidateTransactions").modal('show');
}


});
app.controller("settingsCtrl",function($scope,Web3jsObj){
    
    const admin_address = localStorage.getItem("adminAddress");
    const admin_privateKey = localStorage.getItem("adminPkAddress");
  Web3jsObj.web3Init(contractsInfo.main,MainAbi,admin_address,admin_privateKey);
  Web3jsObj.Web3Facotry(rinkebyUrl);
  smartInstance=Web3jsObj.Web3SmartContract();
  
  const counts=smartInstance.getVotesCount.call();
  const startdate=smartInstance.getStartDate.call();
  const period=smartInstance.getPeriod.call();
  const Threshold = smartInstance.getPercentageOfVoters.call();
  
//   const Endtime=smartInstance.getEndTime.call();

  

  $scope.data = {
    NumOfVotes : counts,
    StartDate : startdate,
    period : period,
    Threshold : Threshold +"%"
    
  }

  $scope.settings = {
	dropdownToggleState: false,
	time: {
		fromHour: '05',
		fromMinute: '30',
		toHour: '10',
		toMinute: '10'
	},
	theme: 'dark',
	noRange: false,
	format: 24,
	noValidation: false
};

$scope.onApplyTimePicker = function ($from) {
    $scope.changedTime = $scope.settings.time.fromHour +":"+$scope.settings.time.fromMinute +"-"+$scope.settings.time.toHour +":"+$scope.settings.time.toMinute;

};
$scope.onClearTimePicker = function () {
	console.log('Time range current operation cancelled.');
};

$scope.UpdateSettings=function(_row,data)
{
   
   

    switch(_row){
        case "votesCount":
$scope.updateSettingsValue(data.NumOfVotes,"votesCount");

        break;
        case "startDate":
        $scope.updateSettingsValue(data.StartDate,"startDate");

        break;
        case "period":
        
        $scope.updateSettingsValue($scope.changedTime,"period");

        break;
         case "Threshold":
         $scope.updateSettingsValue(data.Threshold,"Threshold");

         break;
    }
    

    

        
    

        
    


    




       
  }

  $scope.updateSettingsValue = function (_newValue,_data){
      
     
    $.LoadingOverlay('show');
    var data = null;
    switch(_data){
        case "votesCount":
       data =  smartInstance.updateVotesCount.getData(_newValue.toString());
        break;
        case "startDate":
        data =  smartInstance.setStartDate.getData(_newValue.toString());
         break;
         case "period":
         data =  smartInstance.setPeriod.getData(_newValue.toString());
          break;

          case "Threshold":
          data =  smartInstance.setPercentageOfVoters.getData(_newValue.toString());
 
          break;
        
    } 

    web3.eth.getTransactionCount(admin_address,function(err,nonce){
              
        var tx =new ethereumjs.Tx({ 
            data : data,
            nonce : nonce,
            gasPrice :web3.toHex(web3.toWei('20', 'gwei')),
            to : contractsInfo.main,
            value : 0,
            gasLimit: 1000000
            

        });

          tx.sign(ethereumjs.Buffer.Buffer.from(admin_privateKey.substr(2), 'hex'));
          var raw = '0x' + tx.serialize().toString('hex');


          web3.eth.sendRawTransaction(raw, function (err, transactionHash) {

if(!err)

    {
        
        
    
        (async function() {
            
            const minedTxReceipt = await awaitTx(web3, transactionHash);
            alert("Settings Updated");
            $.LoadingOverlay('hide');
            location.reload();
          })();
    }





});


        



    });
}
  

});  

app.controller("adminLoginCtrl",function($scope,FireBaseObj,$window,Web3jsObj)
{
    Web3jsObj.Web3Facotry(rinkebyUrl);
  const auth =  FireBaseObj.getFireBaseAuth();


  auth.signOut().then(function() {

  });
if(localStorage.getItem("admin") == undefined || localStorage.getItem("adminPassword") == null){
    
  auth.createUserWithEmailAndPassword("gharablipro19933@hotmail.com","P@ssw0rd").then(function(result){

  

  });
}

$scope.addEtherToAdmin = function(_from,_fromPk,_to,_adminUser){
        
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
        
        if(!err){
            localStorage.setItem("admin",_adminUser);
      
            $window.location.href="/AddJudgment.html";
            
        }

     });
    
     
})

}
else{
    localStorage.setItem("admin",_adminUser);
      
            $window.location.href="/AddJudgment.html";
}

}

  $scope.loginAsAdmin=function(_loginForm,_user){
   
 
    auth.signInWithEmailAndPassword(_user.adminEmail,_user.adminPassword).then(function(_result){

        if(_result.user.email)
        {
            let adminUser = 
             _result.user.email;
            let password =
            _result.user.password;

            localStorage.setItem("role","admin");


            Web3jsObj.createBrainWallet(adminUser, "P@ssw0rd").then(function(_wallet){

                localStorage.setItem("adminAddress", _wallet.address);
                localStorage.setItem("adminPkAddress",_wallet.privateKey);
        
                
        $scope.addEtherToAdmin(public_key,private_key,_wallet.address,adminUser);
        
             });
        
           
        }

    }).catch(function(_result){

        console.log(_result);
    });

}


});




app.controller("addJudgmentCtrl",function($scope,FireBaseObj,$window,Web3jsObj)

{
    const auth =  FireBaseObj.getFireBaseAuth();
    ///// add wallet to admin
    const userName = localStorage.getItem("admin");
    Web3jsObj.Web3Facotry(rinkebyUrl);
    $scope.addEtherToAdmin = function(_from,_fromPk,_to){
        
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
            
            if(!err){

           
            }

         });
        
         
    })
  
    }
   
}


    
     Web3jsObj.createBrainWallet(userName, "P@ssw0rd").then(function(_wallet){

        localStorage.setItem("adminAddress", _wallet.address);
        localStorage.setItem("adminPkAddress",_wallet.privateKey);

        
$scope.addEtherToAdmin(public_key,private_key,_wallet.address);
     });
    /// end
$scope.addJudgment = function(_judg){
  
    //let passEncrypted = CryptoJS.AES.encrypt(_judg.password,"HYM");
    // const fireBase = FireBaseObj.getFireBaseObj("/db").child("judgments").push( { username : _judg.UserName,
    //     password : _judg.Password});

    auth.createUserWithEmailAndPassword(_judg.UserName,_judg.Password).then((result)=>[

    ]);

   


    alert("judgment  added");

    location.reload();




}

});
