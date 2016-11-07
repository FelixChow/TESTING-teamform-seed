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

var app = angular.module("adminform", ["firebase"]);

app.controller("AdminFormCtrl", function ($scope, $firebaseObject) {
    initializeFirebase();
    var ref = firebase.database().ref();
    $scope.event = $firebaseObject(ref);

}


function ($scope, $firebaseArray) {
        var ref = firebase.database().ref().child("event");

        $scope.event = $firebaseArray(ref);

        $scope.addEvent = function () {
            $scope.event.$add({
                name: $scope.eventName,
                organizer: $scope.eventOrganizer,
                course: $scope.TargetCourse,
                deadline: $scope.RegDeadline,
                numOfTeam: $scope.TeamLimit,
                numOfMem: $scope.MemberLimit,
                privacy: $scope.EventPrivacy,
                description: $scope.EventDescription
            });
        };
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
