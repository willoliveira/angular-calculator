(function(angular, $) {

	console.log(angular);

	angular
		.module("calc.controller")
		.controller("CalculatorController", CalculatorController);

	CalculatorController.$inject = [];

	function CalculatorController() {
		
	}

})(angular, $);
