colorBlocks.factory('dataFactory', [function() {
  console.log("data factory running");

//current colors
var colors = ['red', 'blue', 'papayawhip', 'green',];

var newColors = ['orange', 'yellow', 'cyan', 'black', 'navy', 'lightseagreen'];
  // $scope.colors = ['orange', 'yellow', 'cyan', 'black'];

var chooseColor = function (colorOption){
  colors.push(colorOption);
};

return{
  newColors: newColors,
  colors: colors,
  chooseColor: function(colorOption) {
    console.log('public scope working');

  chooseColor(colorOption)
  }
};

}]);
