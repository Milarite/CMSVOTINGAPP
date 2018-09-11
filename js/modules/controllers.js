var app = angular.module('starter.controllers',[]);


app.controller('addCandidateCtrl',function($scope,Web3jsObj){

    const judgment_address = localStorage.getItem("address");
const judgment_privateKey = localStorage.getItem("pkAddress");
Web3jsObj.web3Init(contractsInfo.main,MainAbi,judgment_address,judgment_privateKey);
Web3jsObj.Web3Facotry(rinkebyUrl);
const smartContract = Web3jsObj.Web3SmartContract();

$scope.nationlIdValidation = function(_id)
{

  $scope.userFound=false;
  let user =smartContract.getCandidateAddressByNationalId.call(_id);

  if(user != no_address){

    $scope.userFound = true;
  }

  

}
















        //  web3.eth.sendRawTransaction(raw, function (err, transactionHash) {
    
          











  



    
 
    





    $scope.addCandidate=function(candidateData){

        // create candidate wallet

        Web3jsObj.createBrainWallet(candidateData.candidateId,candidateData.password).then(function(_wallet)
    
    {


               ///// add candidate function

               var data =smartContract.addCandidate.getData(_wallet.address,candidateData.candidateId,candidateData.name,candidateData.dateOfBirth,candidateData.password
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



            });


                    



                });





            })
      
        }

        //})


 //   })
    
    
    








    


     
    
    
       
        




        ///////////////////

  


});

app.controller("login",function(){

    });