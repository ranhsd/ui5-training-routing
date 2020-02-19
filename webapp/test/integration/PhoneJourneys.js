/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/ness/employeed/test/integration/NavigationJourneyPhone",
		"com/ness/employeed/test/integration/NotFoundJourneyPhone",
		"com/ness/employeed/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});