angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state) {
  $scope.goDashboard = function(){
      $state.go('app.dashboard');
  }
})
.controller('BlogCtrl', function($scope, $state, $stateParams,$ionicHistory) {
  // $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
  //     viewData.enableBack = true;
  // });
  $scope.goToBlog = function(){
      $state.go('blogs.latest');
  }
})
.controller('LoginCtrl', function($scope) {

})
.controller('contactsCtrl', function($scope) {

})
.controller('profileCtrl', function($scope) {

})
.controller('editprofileCtrl', function($scope) {

})
.controller('GalleryCtrl', function($scope,$ionicModal) {
  $scope.gallery = {};
  $scope.gallery.photos = ['img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg','img/banner1.jpg']
  $scope.items = [
    {src:'img/anen.JPG'},{src:'img/trinity2k2.jpg'},{src:'img/somethingblue.jpg'},
    {src:'img/imgsun.JPG'},{src:'img/imgrose.JPG'},{src:'img/imgleaf.JPG'},
    {src:'img/bir80a[1].jpg'},{src:'img/kitt16.jpg'},{src:'img/rabbit.JPG'},
    {src:'img/anen.JPG'},{src:'img/trinity2k2.jpg'},{src:'img/somethingblue.jpg'},
    {src:'img/imgsun.JPG'},{src:'img/imgrose.JPG'},{src:'img/imgleaf.JPG'},
    {src:'img/bir80a[1].jpg'},{src:'img/kitt16.jpg'},{src:'img/rabbit.JPG'}
  ];

  $scope.openImageZoom = function(images,index){
    $scope.activeImageSlide = index;
    $ionicModal.fromTemplateUrl('templates/openImage.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
       $scope.galleryModal = modal;
       $scope.previewImages = [];
       $scope.previewImages = images;
       $scope.galleryModal.show();
    });
  }
  $scope.closeGalleryModal = function(){
    $scope.galleryModal.hide();
  }
})

.controller('MessagesCtrl', function($scope) {
  $scope.messagesList = [
    {name:"John Haffer",lastMessage:"Back off, man. I'm a scientist.",time:'10:20 PM',unread:3},
    {name:"Marty McFly",lastMessage:"This is the demo application.",time:'11:25 PM',unread:0},
    {name:"John Haffer",lastMessage:"Back off, man. I'm a scientist.",time:'08:00 AM',unread:5}
  ];
  angular.forEach($scope.messagesList,function(item){
    item.gesture = 'right';
  });
  $scope.swipe = function(opt,index){
    if(opt == "right"){
      $scope.messagesList[index].gesture = 'right';
    }
    else{
      angular.forEach($scope.messagesList,function(item,key){
        item.gesture = 'right';
        if(key == index){
          item.gesture = 'left';
        }
      });
    }
  }
})
.controller('CalenderCtrl', function($scope) {
  $scope.title = "March 13, 2016"
  $scope.options = {
    defaultDate: "2015-08-06",
    minDate: "2015-01-01",
    maxDate: "2015-12-31",
    disabledDates: [
        "2015-06-22",
        "2015-07-27",
        "2015-08-13",
        "2015-08-15"
    ],
    dayNamesLength: 3, // 1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names. Default is 1.
    mondayIsFirstDay: false,//set monday as first day of week. Default is false
    eventClick: function(date) {
      console.log(date);
    },
    dateClick: function(date) {
      console.log(date);
    },
    changeMonth: function(month, year) {
      console.log(month, year);
    },
  };

  $scope.events = [
    {foo: 'bar', date: "2015-08-18"},
    {foo: 'bar', date: "2015-08-20"}
  ];
})
