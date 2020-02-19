/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 EmployeeSet in the list
// * All 3 EmployeeSet have at least one roles

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/ness/employeed/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/ness/employeed/test/integration/pages/App",
	"com/ness/employeed/test/integration/pages/Browser",
	"com/ness/employeed/test/integration/pages/Master",
	"com/ness/employeed/test/integration/pages/Detail",
	"com/ness/employeed/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.ness.employeed.view."
	});

	sap.ui.require([
		"com/ness/employeed/test/integration/MasterJourney",
		"com/ness/employeed/test/integration/NavigationJourney",
		"com/ness/employeed/test/integration/NotFoundJourney",
		"com/ness/employeed/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});