
var drupal = require("drupal/lib/drupal");
drupal.setRestPath('<drupal-base-url-with-trailing-slash>', '<services-endpoint>');
Alloy.Globals.drupal = drupal;


var accountPanel = Alloy.createWidget('drupal_test_panel');
accountPanel.setDrupal(Alloy.Globals.drupal);

var accountSettings = accountPanel.getView();
accountSettings.open();
