
const private_key = "50FBEE34A355F70931B95C5C114AED5FB21BAF14971C1CDCC067BA46024C7275";
const public_key = "0x63a9adabb3edc39f552249cc0dc23eeab0df3c72";
var contractsInfo  = {
    main : "0xef013e8d2bf80b97ee7815eb7a5acf29af6ee51f",
    judgment :"0x74b4442fca032dcaa1f8ab01ae02231a4848eee1",
    voters :"0x775be4d305f413c49c01fc97aabc982a10e5bf3f",
    candidate:"0x7f4417ab314659a2fb2e70136c453ac1cb22a845"
    
	}
	
const no_address = "0x0000000000000000000000000000000000000000";
const rinkebyUrl = "https://rinkeby.infura.io/v3/afbac1a223484d84a7784a133d1f2010";
var judgmentAbi =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "judgmentInformationId",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "birthOfDate",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "addJudgmentInformation",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "checkIdAndPassword",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

var MainAbi =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_startTime",
				"type": "string"
			}
		],
		"name": "setStartTime",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "candidateIdNumber",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "birthOfDate",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "year",
				"type": "string"
			},
			{
				"name": "phoneNumber",
				"type": "string"
			},
			{
				"name": "campaign",
				"type": "string"
			}
		],
		"name": "addCandidate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "voterAddress",
				"type": "address"
			}
		],
		"name": "getNationalIDArrayLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_voterAddress",
				"type": "address"
			},
			{
				"name": "_candidateNationalId",
				"type": "string"
			}
		],
		"name": "grantYourVote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getVotesCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "deleteVoterDetail",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getVoterCity",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getEndTime",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getVoterDateOfBirth",
		"outputs": [
			{
<<<<<<< HEAD
				"name": "_endTime",
=======
				"name": "",
>>>>>>> 7b78caba6f8b577e2e0a79f1b7380413867305b4
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
<<<<<<< HEAD
				"name": "_startDate",
=======
				"name": "voterAddress",
				"type": "address"
			},
			{
				"name": "_candidateNationalId",
>>>>>>> 7b78caba6f8b577e2e0a79f1b7380413867305b4
				"type": "string"
			}
		],
		"name": "checkIfVoted",
		"outputs": [
			{
<<<<<<< HEAD
				"name": "_startTime",
=======
				"name": "",
>>>>>>> 7b78caba6f8b577e2e0a79f1b7380413867305b4
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_votesCount",
				"type": "uint256"
			}
		],
		"name": "updateVotesCount",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getNumberOfVotes",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "nationalId",
				"type": "string"
			}
		],
		"name": "getCandidateAddressByNationalId",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_voterAddress",
				"type": "address"
			},
			{
				"name": "_candidateNationalId",
				"type": "string"
			}
		],
		"name": "revokeMyVote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "voterAddress",
				"type": "address"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getVotedCandidatesAddress",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_startDate",
				"type": "string"
			}
		],
		"name": "setStartDate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getVoterYear",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getStartDate",
		"outputs": [
			{
				"name": "",
<<<<<<< HEAD
				"type": "bool"
=======
				"type": "string"
>>>>>>> 7b78caba6f8b577e2e0a79f1b7380413867305b4
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "getCandidatePhonenumber",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "getCandidateVotesNumber",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_candidateNationalId",
				"type": "string"
			}
		],
		"name": "getCandidateNational",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_candidateNationalId",
				"type": "string"
			}
		],
		"name": "getCandidateVoters",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "deleteCandidate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getCandidateNationalID",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_endTime",
				"type": "string"
			}
		],
		"name": "setEndTime",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "getCandidateCampaign",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "candidateIdNumber",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "year",
				"type": "string"
			},
			{
				"name": "phoneNumber",
				"type": "string"
			},
			{
				"name": "campaign",
				"type": "string"
			}
		],
		"name": "addCandidateDetails",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "getCandidateName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "getCandidateYear",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "getCandidateCity",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "_balance",
				"type": "uint256"
			}
		],
		"name": "sendEther",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getVoterName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getStartTime",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_candidateIdNumber",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "CandidateCheckIdAndPassword",
		"outputs": [
			{
				"name": "",
<<<<<<< HEAD
				"type": "string"
=======
				"type": "bool"
>>>>>>> 7b78caba6f8b577e2e0a79f1b7380413867305b4
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "judgmentInformationId",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "birthOfDate",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "addJudgmentInformation",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			},
			{
				"name": "numberOfVotes",
				"type": "uint256"
			}
		],
		"name": "addCandidateTracking",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCandidateNationalIDArrayLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "nationalID",
				"type": "string"
			}
		],
		"name": "checkNationalIDVoter",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "nationalID",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "checkIdAndPasswordVoter",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "nationalID",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "birthOfDate",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "year",
				"type": "string"
			}
		],
		"name": "signUpVoter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "getCandidatebirthOfDate",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
<<<<<<< HEAD
	}
]
var CandidateAbi=[
=======
	},
>>>>>>> 7b78caba6f8b577e2e0a79f1b7380413867305b4
	{
		"inputs": [
			{
				"name": "_candidate",
				"type": "address"
			},
			{
				"name": "_voters",
				"type": "address"
			},
			{
				"name": "_judgment",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]
var CandidateAbi=[
	{
		"constant": true,
		"inputs": [
			{
<<<<<<< HEAD
				"name": "_nationalId",
				"type": "string"
			},
			{
				"name": "password",
=======
				"name": "candidateIdNumber",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "birthOfDate",
>>>>>>> 7b78caba6f8b577e2e0a79f1b7380413867305b4
				"type": "string"
			}
		],
		"name": "checkIdAndPassword",
		"outputs": [
			{
<<<<<<< HEAD
				"name": "",
				"type": "bool"
			}
		],
=======
				"name": "password",
				"type": "string"
			}
		],
		"name": "addCandidate",
		"outputs": [],
>>>>>>> 7b78caba6f8b577e2e0a79f1b7380413867305b4
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
<<<<<<< HEAD
			}
		],
		"name": "getCandidateNationalId",
		"outputs": [
			{
				"name": "",
				"type": "string"
=======
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "checkIdAndPassword",
		"outputs": [
			{
				"name": "",
				"type": "bool"
>>>>>>> 7b78caba6f8b577e2e0a79f1b7380413867305b4
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
<<<<<<< HEAD
				"name": "nationalId",
				"type": "string"
			}
		],
		"name": "getCandidateAddressByNationalId",
=======
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "getCandidateNationalId",
>>>>>>> 7b78caba6f8b577e2e0a79f1b7380413867305b4
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "getCandidatePhonenumber",
		"outputs": [
			{
				"name": "",
<<<<<<< HEAD
				"type": "string"
=======
				"type": "bool"
>>>>>>> 7b78caba6f8b577e2e0a79f1b7380413867305b4
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
<<<<<<< HEAD
		"name": "getCandidateVotesNumber",
=======
		"name": "getCandidatePhonenumber",
>>>>>>> 7b78caba6f8b577e2e0a79f1b7380413867305b4
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
<<<<<<< HEAD
		"name": "deleteCandidate",
		"outputs": [],
=======
		"name": "getCandidateVotesNumber",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
>>>>>>> 7b78caba6f8b577e2e0a79f1b7380413867305b4
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
<<<<<<< HEAD
=======
		"name": "deleteCandidate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
>>>>>>> 7b78caba6f8b577e2e0a79f1b7380413867305b4
		"name": "getNationalID",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "getCandidateCampaign",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "candidateIdNumber",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "year",
				"type": "string"
			},
			{
				"name": "phoneNumber",
				"type": "string"
			},
			{
				"name": "campaign",
				"type": "string"
			}
		],
		"name": "addCandidateDetails",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNationalIDArrayLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "getCandidateName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "getCandidateYear",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "getCandidateCity",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "getCandidatePassword",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			},
			{
				"name": "numberOfVotes",
				"type": "uint256"
			}
		],
		"name": "addCandidateTracking",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "getCandidatebirthOfDate",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

var VoterAbi=[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_startTime",
				"type": "string"
			}
		],
		"name": "setStartTime",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "voterAddress",
				"type": "address"
			},
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "addVoterVotes",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "voterAddress",
				"type": "address"
			}
		],
		"name": "getNationalIDArrayLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "voterAddress",
				"type": "address"
			},
			{
				"name": "_candidateNationalId",
				"type": "string"
			}
		],
		"name": "grantYourVote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getVotesCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "voterIdNumber",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "year",
				"type": "string"
			}
		],
		"name": "addVoterDetails",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "deleteVoterDetail",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getVoterCity",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getEndTime",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getVoterDateOfBirth",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "nationalID",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "checkIdAndPassword",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_votesCount",
				"type": "uint256"
			}
		],
		"name": "updateVotesCount",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getNumberOfVotes",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_voterAddress",
				"type": "address"
			},
			{
				"name": "_nationalId",
				"type": "string"
			}
		],
		"name": "revokeMyVote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "voterAddress",
				"type": "address"
			},
			{
				"name": "idex",
				"type": "uint256"
			}
		],
		"name": "getVotedCandidatesAddress",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_startDate",
				"type": "string"
			}
		],
		"name": "setStartDate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getVoterYear",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getStartDate",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_candidateNationalId",
				"type": "string"
			}
		],
		"name": "getCandidateVoters",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_endTime",
				"type": "string"
			}
		],
		"name": "setEndTime",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getVoterName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getStartTime",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "nationalID",
				"type": "string"
			}
		],
		"name": "checkNationalID",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "voterIdNumber",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "birthOfDate",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "addVoterInfo",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "nationalID",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "birthOfDate",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "year",
				"type": "string"
			}
		],
		"name": "signUpVoter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]