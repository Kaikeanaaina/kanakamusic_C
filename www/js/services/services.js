angular.module('app.songServices', [])

.service('songService', ['$http',function($http){
  var isCordovaApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
  var domain;
  if(!isCordovaApp){
    domain = 'http://localhost:4000';
  }
  if(isCordovaApp){
    domain = '.';
  }

  this.getAllSongs = function(){
    return $http.get(domain + '/songs');
  };

  this.addSong = function(song){
    console.log(222222,song);
    return $http.post(domain + '/songs', song);
  };

}]);

