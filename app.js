var app = angular.module("app", []);

app.directive("ngRangy", function(){
	  return {
	    restrict: "E",
	    transclude: true,
	    controller:function($scope){
			$scope.loadRangyHighlight = function() {

					highlighter = null;
					cssApplier = null;
					highlightClassName = "Highlight";		
					rangy.init();		
					cssApplier = rangy.createCssClassApplier(highlightClassName, {
						normalize : true
					});		
					highlighter = rangy.createHighlighter(document, "TextRange");
					highlighter.addClassApplier(cssApplier);
		 			//console.log(highlighter);
		    	}; 
		    },
	    scope: {},
	    template: '<div>' +
	      '<button ng-click="toggleHighlight()">HighlightText</button>' +
		  '<div class="Content" ng-transclude contentEditable="true"></div>' +
		  '</div>',
		  
		link: function(scope , element , ctrl){
		   scope.loadRangyHighlight();
		   scope.toggleHighlight = function() {
			cssApplier.toggleSelection();
		  };
		  
		}
};
})
