var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope, $http , $window) {
        	$scope.text;
        	$scope.displaytext=0;
        	
        	$scope.aboverange=false;
        	
        	$scope.submitText=function(t){
        		var n=parseInt(t);
        		$scope.temp=n;
        		if(n>=0 && n<=100){
        			$scope.displaytext=t;
                	$scope.aboverange=false;
                	$scope.notint=false;
        		}
        		else{
        			$scope.aboverange=true;
        		}
        		
        	}
        	
     
        });