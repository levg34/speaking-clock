var app = angular.module('app', [])

app.controller('aCtrl', function($scope,$http) {
	$scope.loadConfig = function () {
		meSpeak.loadConfig('mespeak/mespeak_config.json')
		meSpeak.loadVoice('mespeak/voices/fr.json')
	}
	$scope.speak = function (text) {
		meSpeak.speak(text, {variant: 'whisperf'})
	}
	$scope.loadConfig()
})
