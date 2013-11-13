
drupal = require("drupal/drupal");
Alloy.Globals.drupal = drupal;


var accountPanel = Alloy.createWidget('drupal_test_panel');
accountPanel.setDrupal(Alloy.Globals.drupal);

var accountSettings = accountPanel.getView();
accountSettings.open();
