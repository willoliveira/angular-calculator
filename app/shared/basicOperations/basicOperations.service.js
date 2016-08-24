(function() {

	angular
		.module("calc.service")
		.factory("BasicOperations", BasicOperations)

	BasicOperations.$inject = [];

	function BasicOperations() {

		var paramReturn = { 
			Sum: Sum,
			Subtract: Subtract,
			Multiply: Multiply,
			Divide: Divide
		}

		function Sum(valueA, valueB) {
			return valueA + valueB;
		}

		function Subtract(valueA, valueB) {
			return valueA - valueB;
		}

		function Multiply(valueA, valueB) {
			return valueA * valueB;
		}

		function Divide(valueA, valueB) {
			if (!valueB)
				return  {
					error: true,
					msg: "it is not possible to divide by zero"
				}
			return valueA / valueB;
		}

		return paramReturn;		
	}

}())