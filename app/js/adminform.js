function initializeFirebase() {
    var config = {
        apiKey: "AIzaSyBkpMprscaor1-pR8n8MkAJxM4AXlt0ZAs",
        authDomain: "comp3111-group-project.firebaseapp.com",
        databaseURL: "https://comp3111-group-project.firebaseio.com",
        storageBucket: "comp3111-group-project.appspot.com",
        messagingSenderId: "857402819132"
    };
    firebase.initializeApp(config);
}

var app = angular.module("Events", ["firebase"]);

app.controller("EventsCtrl", function ($scope, $firebaseArray) {
    initializeFirebase();

    $scope.newEvent = {
        name: "",
        organizer: "",
        course: "",
        //deadline: "",
        numOfTeam: 0,
        numOfMem: 0,
        //privacy: 0,
        description: ""
    }

    var ref = firebase.database().ref("Events");
    $scope.event = $firebaseObject(ref);

    $scope.addEvent = function () {
        $scope.event.$add($scope.newEvent);
    }

});

$('.form_date').datetimepicker({
    // language: '',
    weekStart: 1,
    todayBtn: 1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0
});
