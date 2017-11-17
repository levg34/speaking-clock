var app = angular.module('app', [])

app.controller('aCtrl', function($scope,$interval,$filter) {
	$scope.every = 5
	$scope.target = '16:30'
	$scope.newTime = function() {
		$scope.time = $filter('date')(new Date(), 'HH:mm')
	}
	$scope.textualTime = function () {
		$scope.newTime()
		return 'Il est '+$scope.time+'.'
	}
	$scope.speak = function (text) {
		VoiceRSS.speech({
			key: '8ecbeaf9be624d42a397627b0791ffba',
			src: text,
			hl: 'fr-fr',
			r: 0, 
			c: 'mp3',
			f: '44khz_16bit_stereo',
			ssml: false
		})
	}
	$scope.speakSentence = function () {
		$scope.speak($scope.textualTime())
	}
	$scope.checkTime = function() {
		var oldTime = $scope.time
		$scope.newTime()
		if (oldTime!==$scope.time) {
			if (false) {
				$scope.speakSentence()
			} else if ($scope.time.split(':')[1]%$scope.every==0) {
				$scope.speakSentence()
			}
		}
	}
	$scope.speakSentence()
	$interval($scope.checkTime,1000)
})
