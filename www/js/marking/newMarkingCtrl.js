angular.module('app.controllers')

.controller("newMarkingCtrl", function ($ionicHistory, currentUserService, NgMap, $state, $scope, $rootScope, factoryMarking, $ionicPopup, URL) {

  var options = {enableHighAccuracy: true};
  if(angular.isUndefined($rootScope.markings)) {
    $rootScope.markings = [];
  }

  $scope.registerMarking = function (marking) {
    NgMap.getGeoLocation().then(function(map) {
      marking.latitude = map.lat();
      marking.longitude = map.lng();
      marking.author_email = currentUserService.getUserData().email;
      console.log(marking);
      factoryMarking.save(marking, function (result){
        $rootScope.markings.push({
          author_email: marking.author_email,
          name: marking.name,
          fire: marking.fire,
          water: marking.water,
          earth: marking.earth,
          air: marking.air,
          description: marking.description,
          latitude: marking.latitude,
          longitude: marking.longitude
        });
      var alertPopup = $ionicPopup.alert({
        title: 'Incidente cadastrado com sucesso',
        template: 'Obrigado por contribuir!'
      })
      console.log("Success!")
      $ionicHistory.nextViewOptions({
        disableBack: true
      })
      $state.go('tabs.map')
      /* This state must be reset and the back button too */
      }, function (error) {
        var alertPopup = $ionicPopup.alert({
          title: 'Informações insuficientes',
          template: 'Preencha as informações corretamente!'
        })
      });
  }/*,function(error) {
    alert('Unable to get location: ' + error.message);
  }*/, options);
}
});