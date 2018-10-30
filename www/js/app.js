// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

 


.config(function($stateProvider, $urlRouterProvider) {

  

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.doc', {
    url: '/doc',
    views: {
      'tab-doc': {
        templateUrl: 'templates/tab-doc.html',
        controller: 'DocCtrl'
      }
    }
  })


  .state('tab.faq', {
    url: '/faq',
    views: {
      'tab-faq': {
        templateUrl: 'templates/tab-faq.html',
        controller: 'FAQCtrl'
      }
    }
  })


              .state('menjadiAnggota', {
                url: '/menjadiAnggota',
                views: {
                  'menjadiAnggota': {
                    templateUrl: 'templates/FAQ/menjadiAnggota.html',
                    controller: 'menjadiAnggotaCtrl'
                  }
                }
              })

              .state('pinjaman', {
                url: '/pinjaman',
                views: {
                  'pinjaman': {
                    templateUrl: 'templates/FAQ/pinjaman.html',
                    controller: 'pinjamanCtrl'
                  }
                }
              })

              .state('tabungan', {
                url: '/tabungan',
                views: {
                  'tabungan': {
                    templateUrl: 'templates/FAQ/tabungan.html',
                    controller: 'tabunganCtrl'
                  }
                }
              })



  .state('visimisi', {
    url: '/visimisi',
    views: {
      'visimisi': {
        templateUrl: 'templates/visimisi.html',
        controller: 'VisiMisiCtrl'
      }
    }
  })


  .state('fullpoljak', {
    url: '/fullpoljak',
    views: {
      'fullpoljak': {
        templateUrl: 'templates/fullPoljak.html',
        controller: 'FullPoljakCtrl'
      }
    }
  })

 


.state('tab.info', {
    url: '/info',
    views: {
      'tab-info': {
        templateUrl: 'templates/tab-info.html',
        controller: 'InfoCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');





} );
