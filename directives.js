var app = angular.module('my-app', []);

// hello directive 1
app.directive('hello', function() {
  return {
    // transclude: true,
    // don't even need scope
    // scope: {
    //   'hello': '@'
    // },
    template: '<h1>Hello, world!</h1>'
  };
});

// hello directive 2
app.directive('hello2', function() {
  return {
    // scope variables
    scope: {
      'subject': '@'
    },
    template: '<h1>Hello, {{subject}}!</h1>'
  }
});

// hello directive 3
app.directive('hello3', function() {
  return {
    scope: {
      'subject': '@'
    },
    controller: function($scope) {
      if (!$scope.subject) {
        $scope.subject = 'world';
        console.log("Hello from the world!");
      }
      console.log($scope.subject);
    },
    template: '<h1>Hello, {{subject}}!</h1>'
  }
});

// Part 4: Button Directives (Version 1)
app.directive('btButton', function() {
  return {
    // bring in the text
    transclude: true,
    scope: {
      'type': '@'
    },
    controller: function($scope) {
      if (!$scope.type) {
        $scope.type = 'default';
      }
    },
    template: '<button class="btn btn-{{type}}" ng-transclude></button>'
  }
});

// // Part 4: Button Directives (Version 2)
// app.directive('btButton', function() {
//   return {
//     transclude: true,
//     scope: {
//       'type': '@'
//     },
//     controller: function($scope) {
//       $scope.classes = [];
//       if ($scope.type === 'primary') {
//         $scope.classes.push('btn-primary');
//       } else if ($scope.type === 'success')
//         $scope.classes.push('btn-success');
//       else {
//         $scope.classes.push('btn-default');
//       }
//     },
//     template: '<button class="btn" ng-class="classes" ng-transclude></button>'
//   }
// });

// Part 5: Form
app.directive('formGroup', function() {
  return {
    transclude: true,
    scope: {
      type: '@',
      placeholder: '@'
    },
    template: '<div class="form-group"><label>{{placeholder}}</label><input type="{{type}}" class="form-control" placeholder="{{placeholder}}"></div>'
  }
});

// Part 6: Toggle a Button
app.directive('toggleButton', function() {
  return {
    scope: {
      onText: '@',
      offText: '@'
    },
    controller: function($scope) {
      $scope.on = true;
      $scope.update = function() {
        if ($scope.on) {
          $scope.message = 'Turn on';
          $scope.on = false;
        } else {
          $scope.message = 'Turn off';
          $scope.on = true;
        }
      }
      $scope.update();
    },
    template: '<button ng-click="update()">{{message}}</button>'
  }
});

// Part 6A: Toggle a Image
app.directive('toggleButton1', function() {
  return {
    scope: {
      onText: '@',
      offText: '@',
      // 2 way data binding
      on: '='
    },
    controller: function($scope) {
      $scope.on = true;
      $scope.update = function() {
        if ($scope.on) {
          $scope.message = 'Show Pic';
          $scope.on = false;
        } else {
          $scope.message = 'Hide Pic';
          $scope.on = true;
        }
      }
      $scope.update();
    },
    template: '<button ng-click="update()">{{message}}</button>'
  }
});




// Part 6: Toggle a Button
// app.directive('toggleButton', function() {
//   return {
//     transclude: true,
//     scope: {
//       // @ => at marker (1 way binding)
//       onText: '@',
//       offText: '@'
//     },
//     controller: function($scope, $interval) {
//       $scope.on = true;
//       // console.log($scope.onText);
//       // console.log($scope.offText);
//       $scope.update = function() {
//         console.log("inside update");
//         // console.log($scope.onText);
//         // console.log($scope.offText);
//         $scope.on = !$scope.on;
//         if ($scope.on) {
//           $scope.message = 'Turn off';
//         } else {
//           $scope.message = 'Turn on';
//         }
//       }
//       $scope.update();
//     },
//     template: '<button ng-click="update()">{{message}}</button>'
//   }
// });









// app.directive('toggleButton', function() {
//   return {
//     transclude: true,
//     scope: {
//       onText: '@',
//       offText: '@'
//     },
//     controller: function($scope, $interval) {
//       console.log($scope.onText);
//       console.log($scope.offText);
//       function update() {
//         console.log("inside update");
//         // console.log($scope.onText);
//         // console.log($scope.offText);
//         if ($scope.onText === 'Turn off') {
//           $scope.message = $scope.onText;
//         } else {
//           $scope.message = $scope.offText;
//         }
//       }
//       update();
//     },
//     template: '<button>{{message}}</button>'
//   }
// });
