sap.ui.define([
	"com/ness/employeed/controller/BaseController",
	"sap/ui/core/mvc/Controller"
], function(BaseController, Controller) {
	"use strict";

	return BaseController.extend("com.ness.employeed.controller.Role", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.ness.employeed.view.Role
		 */
			onInit: function() {
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.ness.employeed.view.Role
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.ness.employeed.view.Role
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.ness.employeed.view.Role
		 */
		//	onExit: function() {
		//
		//	}

	});

});