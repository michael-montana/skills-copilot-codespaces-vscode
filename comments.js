// Create web server
var app = angular.module('app', []);
app.directive('skills', skills);
app.directive('skillsMember', skillsMember);

app.controller('MainCtrl', function($scope) {
    $scope.members = [
        {
            name: 'John Doe',
            position: 'Front-end Developer',
            bio: 'John is a front-end developer with 10 years experience.',
            skills: ['HTML', 'CSS', 'JavaScript']
        },
        {
            name: 'Jane Doe',
            position: 'Back-end Developer',
            bio: 'Jane is a back-end developer with 10 years experience.',
            skills: ['Ruby', 'Python', 'Java']
        }
    ];
});