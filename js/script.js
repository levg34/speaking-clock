var app = angular.module('app', [])

app.controller('aCtrl', function($scope,$http) {
	$scope.text = 'écrivez dans la case'
	$scope.loadConfig = function () {
		//
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
		$scope.speak($scope.text)
	}
	$scope.loadConfig()
	$scope.speakSentence()
})
