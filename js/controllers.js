var app = angular.module('Viasfora', []);
app.config(['$routeProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/texted', {
      templateUrl: 'texted.html',
      controller: TextEdController,
      controllerAs: 'texted'
    });
    $routeProvider.when('/xmled', {
      templateUrl: 'xmled.html',
      controller: XmlEdController,
      controllerAs: 'xmled'
    });
    $routeProvider.when('/config', {
      templateUrl: 'config.html',
      controller: ConfigController,
      controllerAs: 'config'
    });
    $routeProvider.when('/changelog', {
      templateUrl: 'changelog.html',
      controller: ChangeLogController,
      controllerAs: 'changelog'
    });
    $routeProvider.otherwise({
      templateUrl: 'banner.html',
      controller: BannerController,
      controllerAs: 'banner'
    });

    // configure html5 to get links working on jsfiddle
    //$locationProvider.html5Mode(true);
}]);

function VsfController($scope, $location) {
  $scope.getNavClass = function(name) {
    return $scope.selectedNav === name ? 'active' : '';
  }
}

function XmlEdController($scope) {
  $scope.$parent.selectedNav = 'xmled';
}
function TextEdController($scope) {
  $scope.$parent.selectedNav = 'texted';
}
function BannerController($scope) {
  $scope.$parent.selectedNav = 'banner';
}
function ConfigController($scope) {
  $scope.$parent.selectedNav = 'config';
}
function ChangeLogController($scope) {
  $scope.$parent.selectedNav = 'changelog';
}
