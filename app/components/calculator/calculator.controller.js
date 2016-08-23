(function(angular, $) {

	console.log(angular);

	angular
		.module("calc.controller")
		.controller("CalculatorController", CalculatorController);

	CalculatorController.$inject = [];

	function CalculatorController() {
		
		this.valueCalc = 0;
	}

})(angular, $);
