define(['jQuery', 'sticky'], function(jQuery, sticky) {
    return ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
        // You can access the scope of the controller from here
        $('#sidebar').stickySidebar();

        $scope.isApp = true;

        $scope.do = function($event) {
            $event.preventDefault()
            var hash = $event.srcElement.hash;
            hash = hash.substr(1);
            $location.hash(hash);

            $anchorScroll();
        };

        $scope.setInstructionType = function($event) {
            console.log("akjsdlfkjslkdfjalskjdf");
            var checkbox = $event.target;
            $scope.isApp = (checkbox.checked ? true : false);
            console.log($scope.isApp);
        }


        $scope.$apply();
    }];
});