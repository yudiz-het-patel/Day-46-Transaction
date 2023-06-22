const messages = {
  healthCheckPass: { sMessage: 'Pong' },
  healthCheckFail: { sMessage: 'Health check failed!!' },

  userAdded: { sMessage: 'user added successfully!!' },
  userNotAdded: { sMessage: 'user not added, Internal Server Error' },
  duplicateUser: { sMessage: 'This user is already present in database!!' },
  userNotPresent: { sMessage: 'sender or receiver is not present in database!!' },

  transactionFailed: { sMessage: 'Transaction failed!!' },
  transactionDone: { sMessage: 'Transaction done!!' },

  insufficientBalance: { sMessage: 'insufficient balance!!' },

  carFetchingError: { sMessage: 'Error in fetching Cars!!' },
  brandFetchingError: { sMessage: 'Error in fetching Brands!!' },
  sellerFetchingError: { sMessage: 'Error in fetching Sellers!!' },

  successToBuyCar: { sMessage: 'car sell successfully!!' },
  failedToBuyCar: { sMessage: 'failed to buy car!!' },
  sellerNotMatched: { sMessage: "This seller dosen't have this car!!" },

  notFound: { sMessage: 'Data not found, Enter valid URL!!' },
}

module.exports = messages
