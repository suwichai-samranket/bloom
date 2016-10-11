angular.module('Blooming')

.controller('scanController', function($scope,$state,$stateParams,$http,GlobalService){

  $scope.txtCloneCode = $stateParams.clonecode;

  $http(
    {
      url: GlobalService.hostname+'ws_clonecode.php',
      method:'POST',
      data:{
        'var_clonecode':$scope.txtCloneCode,
      }
    }
  ).then(function(response){
    // console.log(response.data.results);
    $scope.myDataArray = response.data.results
  },function(error){
    console.log(error);
  })
  // $scope.txtMobile = $stateParams.mobile;


  $scope.btnBack = function(){
    console.log('Back press...');
    $state.go('list')
  }

  $scope.btnCall = function(){
    console.log('btn Call...');
    var confirmPopup = $ionicPopup.confirm({
     title: 'Call',
     template: $stateParams.mobile
   });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('OK');
     } else {
       console.log('Cancle');
     }
   });
  }
})
