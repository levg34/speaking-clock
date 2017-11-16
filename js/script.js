var app = angular.module('app', [])

app.controller('aCtrl', function($scope,$http) {
	$scope.text = 'écrivez dans la case'
	$scope.loadConfig = function () {
		meSpeak.loadConfig('mespeak/mespeak_config.json')
		meSpeak.loadVoice('mespeak/voices/fr.json')
	}
	$scope.speak = function (text) {
		meSpeak.speak(text, {variant: 'whisperf'})
	}
	$scope.speakSentence = function () {
		$scope.speak($scope.text)
	}
	$scope.loadConfig()
	$scope.speakSentence()
})
