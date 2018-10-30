angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('DocCtrl', function($scope) {})

.controller('FAQCtrl', function($scope) {})
	.controller('menjadiAnggotaCtrl', function($scope) {})
	.controller('pinjamanCtrl', function($scope) {})
	.controller('tabunganCtrl', function($scope) {})

.controller('InfoCtrl', function($scope) {})


.controller("inAppBrowserController", function ($scope) {

	$scope.openKoperasiMadaniWeb = function()
{
 // Open in app browser
 cordova.InAppBrowser.open('http://koperasimadani.co.id','_blank'); 
};

$scope.openKSP = function()
{
 // Open in app browser
 window.open('http://kspmadani.kopdit.id','_blank'); 
};

})




;