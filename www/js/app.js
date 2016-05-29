angular.module('camp-ojibwa', ['ionic', 'starter.controllers','flexcalendar','ion-gallery'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.backButton.text('');
  $ionicConfigProvider.backButton.previousTitleText('');

  $stateProvider
  .state('homePage',{
    url:'/homePage',
    templateUrl:'templates/homePage.html'
  })
  .state('login',{
    url:'/login',
    templateUrl:'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('signUp',{
    url:'/signUp',
    templateUrl:'templates/signUp.html'
  })
  .state('forgetPassword',{
    url:'/forgetPassword',
    templateUrl:'templates/forgetPassword.html'
  })
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard.html',
      }
    }
  })
  .state('gallery', {
    url: "/gallery",
    templateUrl: 'templates/gallery.html',
  })

  .state('gallery.photos', {
      url: "/photos",
      views: {
        'tab-gallery-photos': {
          templateUrl: "templates/photos.html",
          controller: "GalleryCtrl"
        }
      }
    })
  .state('gallery.albums', {
      url: "/albums",
      views: {
        'tab-gallery-albums': {
          templateUrl: "templates/albums.html",
        }
      }
    })
  .state('gallery.videos', {
      url: "/videos",
      views: {
        'tab-gallery-videos': {
          templateUrl: "templates/videos.html",
        }
      }
    })
    .state('blogs', {
      url: "/blogs",
      templateUrl: 'templates/blogs.html',
    })
    .state('blogs.latest', {
        url: "/latest",
        views: {
          'tab-blogs-latest': {
            templateUrl: "templates/blogLatest.html",
            controller:"BlogCtrl"
          }
        }
      })
    .state('blogs.popular', {
        url: "/popular",
        views: {
          'tab-blogs-popular': {
            templateUrl: "templates/blogPopular.html",
            controller:"BlogCtrl"
          }
        }
      })
    .state('blogDetails', {
        url: "/blogDetails",
        templateUrl: "templates/blogDetails.html",
        controller:"BlogCtrl"
      })
    .state('calendar', {
        url: "/calendar",
        templateUrl: "templates/calender.html",
        controller:"CalenderCtrl"
      })
    .state('event-details', {
        url: "/event-details",
        templateUrl: "templates/event-details.html",
        controller:"CalenderCtrl"
      })
      .state('messages', {
        url: '/messages',
        templateUrl: 'templates/messages.html',
        controller:"MessagesCtrl"
      })

	  .state('foodmenu', {
      url: "/foodmenu",
      templateUrl: 'templates/foodmenu.html',
    })
	  .state('foodmenu.todaymenu', {
      url: "/todaymenu",
      views: {
        'tab-food-menu': {
          templateUrl: "templates/todaymenu.html",
        }
      }
    })
	.state('foodmenu.weeklymenu', {
      url: "/weeklymenu",
      views: {
        'tab-food-menu': {
          templateUrl: "templates/weeklymenu.html",
        }
      }
    })
	.state('contacts', {
      url: "/contacts",
      templateUrl: 'templates/contacts.html',
        controller:"contactsCtrl"
    })

	.state('profile', {
      url: "/profile",
      templateUrl: 'templates/profile.html',
        controller:"profileCtrl"
    })
	.state('editprofile', {
      url: "/editprofile",
      templateUrl: 'templates/editprofile.html',
      controller:"editprofileCtrl"
    })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/homePage');
});
