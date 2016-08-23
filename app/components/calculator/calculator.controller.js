(function(angular, $) {

	"use strict";

	angular
		.module("calc.controller")
		.controller("CalculatorController", CalculatorController);

	CalculatorController.$inject = [];

	function CalculatorController() {
		
		var history = [],
			canClear = false,
			valueCache, 
			operation;

		this.valueCalc = 0;
		//todo: show the history
		this.lastHistory = " ";

		this.Calcule = function() {

			if (typeof valueCache == "undefined" && this.valueCalc != 0) {
				 
				 canClear = false;
				 this.valueCalc = 0;
			} else {
				this.valueCalc = this[operation](valueCache);
				//clear valueCache
				canClear = true;
				//valueCache = undefined;
			}
			valueCache = this.valueCalc;
		}

		this.Clear = function() {
			this.lastHistory = " ";
			this.valueCalc = 0;
			valueCache = undefined;
		}

		this.SetOperation = function(op) {
			operation = op;
			this.Calcule();
		}

		this.SetNumber = function(num) {
			this.valueCalc = parseInt(this.valueCalc.toString() + num);
		}

		this.Sum = function(value) {
			return this.valueCalc + value;
		}

		this.Subtract = function(value) {
			return this.valueCalc - value;
		}

		this.Multiply = function(value) {
			return this.valueCalc * value;
		}

		this.Divide = function(value) {
			return value / this.valueCalc;
		}
	}

})(angular, $);
