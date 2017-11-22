var app = angular.module('app', [])
var player = new talkify.TtsPlayer()

app.controller('aCtrl', function($scope,$interval,$filter) {
	$scope.every = 5
	$scope.newTime = function() {
		$scope.time = $filter('date')(new Date(), 'HH:mm')
	}
	$scope.textualTime = function () {
		$scope.newTime()
		return 'Il est '+$scope.time+'.'
	}
	$scope.config = function() {
		talkify.config.remoteService.apiKey = '89a07461-ccd4-4c46-a894-b01863a0312c'
	}
	$scope.speak = function (text) {
		player.playText(text)
	}
	$scope.speakSentence = function () {
		$scope.speak($scope.textualTime())
	}
	$scope.checkTime = function() {
		var oldTime = $scope.time
		$scope.newTime()
		if (oldTime!==$scope.time&&$scope.time.split(':')[1]%$scope.every==0) {
			$scope.speakSentence()
		}
	}
	$scope.config()
	$scope.speakSentence()
	$interval($scope.checkTime,1000)
})
