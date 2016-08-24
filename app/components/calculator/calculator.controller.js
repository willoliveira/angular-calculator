/**
 * Calculator develop in angularJS
 * @author Willian Gomes de Oliveira <willian.goliveira@outlook.com>
 */
(function (angular, $) {

	"use strict";

	angular
		.module("calc.controller")
		.controller("CalculatorController", CalculatorController);

	CalculatorController.$inject = ['BasicOperations'];

	function CalculatorController(BasicOperations) {

		var canClear = false,			
			valueCache,
			operation,

			equalPressed = false,
			canAccumulate = true;

		this.valueCalc = 0;
		//todo: show the history
		this.history = "";
		this.lastOperation = " ";
		
		/**
		 * * * * * * * * * * 
		 * * * * * * * * * * 
		 * PUBLIC METHDOS  *
		 * * * * * * * * * * 
		 * * * * * * * * * *  
		 */
		/**
		 * Calcule
		 * @param {Boolean} keyEqual
		 */
		this.Calcule = function (keyEqual) {
			//if button equal pressed
			if (keyEqual) {
				equalPressed = keyEqual;
				canAccumulate = false;
			}
			//if cached value exist
			if (typeof valueCache == "undefined" && (valueCache != 0)) {
				//does cache of value
				valueCache = this.valueCalc;
				this.valueCalc = 0;
			} else {
				//relize of calcule
				this.valueCalc = BasicOperations[operation](valueCache, this.valueCalc);
				canClear = true;
				valueCache = this.valueCalc;
			}
		}
		/**
		 * InputValue
		 */
		this.InputValue = function() {
			valueCache = this.valueCalc;
		}
		/**
		 * Clear all 
		 */
		this.ClearAll = function () {
			this.history = "";
			this.Clear();
		}
		/**
		 * Clear
		 */
		this.Clear = function () {
			this.valueCalc = 0;
			valueCache = undefined;
		}
		/**
		 * SetOperation
		 * @param {String} op
		 */
		this.SetOperation = function (op) {
			//if a calculation has not been finalized, we have not stored value, so do not calculate
			if (!canClear) {
				this.Calcule(false);
			}
			//if pressed of equal key, can accumulate value
			if (equalPressed) {
				canAccumulate = true;
			}
			operation = op;
		}
		/**
		 * SetNumber
		 * @param {number} num
		 */
		this.SetNumber = function (num) {
			if (canClear) {
				//if equal key was pressed
				if (equalPressed) {
					//if can accumalate values
					if (canAccumulate) {
						equalPressed = false;
						canAccumulate = false;
					} else {
						valueCache = undefined;
					}
				}
				this.valueCalc = 0;
				canClear = false;
			}
			this.valueCalc = parseInt(this.valueCalc.toString() + num);
		}

		/**
		 * * * * * * * * * * 
		 * * * * * * * * * * 
		 * PRIVATE METHDOS *
		 * * * * * * * * * * 
		 * * * * * * * * * *  
		 */
		/**
		 * Return a symbol for operations
		 * @param {number} op
		 */
		function returnSymbol(op) {
			var valueReturn;
			switch (op) {
				case "Sum": 
					valueReturn = "+";
					break;
				case "Divide": 
					valueReturn = "/";
					break;
				case "Multiply": 
					valueReturn = "*";
					break;
				case "Subtract": 
					valueReturn = "-";
					break;
			}
			return valueReturn;
		}

	}

})(angular, $);
