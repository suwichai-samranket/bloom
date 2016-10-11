angular.module('Blooming')

.controller('listController', function($scope,$state,$http,$stateParams,GlobalService){

  $http.get(GlobalService.hostname+'getplace.php').then(function(response){
    // console.log(response.data.results);
    $scope.myDataArray = response.data.results
  },function(error){
    console.log(error);
  })


  // $scope.placehttp://www.canebreeding.com
  //      [
  //          {nameplace:"ทุ่งก้างย่าง",id:"02"},
  //          {nameplace:"ทุ่งเสือโทน",id:"01"},
  //          {nameplace:"กำแพงแสน",id:"03"},
  //          {nameplace:"ท่าม่วง",id:"04"}
  //      ];

  $scope.btnDetail = function (data){
    // console.log(data);
    // console.log('List controller start');
    $state.go('detail',{user_id:$stateParams.user_id,place_id:data.place_id,name:data.name
    })
  }

  $scope.btnBack = function(){
    console.log('Back press...');
    $state.go('flowinglist',{user_id:$stateParams.user_id},{reload: true})
  }

})
