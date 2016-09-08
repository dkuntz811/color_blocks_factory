colorBlocks.controller('SettingsController', ['$scope', 'dataFactory', function($scope, dataFactory) {
  console.log("settings controller running");

   $scope.dataFactory = dataFactory;
   $scope.newColors = $scope.dataFactory.newColors;
  
   $scope.newShade = function(){
     console.log('new color is', $scope.chosenColor);
     $scope.dataFactory.chooseColor($scope.chosenColor);
     $scope.chosenColor = '';
   };





}]);
