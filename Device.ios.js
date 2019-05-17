var Application = require("application");
var TypeUtils = require("utils/types");

function getAppContext() {
  return Application.ios.delegate;
}
exports.getAppContext = getAppContext;

function getAppView() {
  return Application.ios.rootController;
}
exports.getAppView = getAppView;
function openUri(uri) {
  var u = NSURL.URLWithString(uri);

  if (UIApplication.sharedApplication.canOpenURL(u)) {
    return UIApplication.sharedApplication.openURL(u);
  }

  return false;
}
exports.openUri = openUri;
module.exports = {
  openWifiSettingsOnDevice: function() {
    var uris = ["prefs:root=WIFI", "App-Prefs:root=WIFI"];
    for (var i = 0; i < uris.length; i++) {
      if (openUri(uris[i])) {
        return true;
      }
    }

    return false;
  },
  openBluetoothSettingsOnDevice: function() {
    var uris = [
      "Prefs:root=General&path=Bluetooth",
      "App-prefs:root=General&path=Bluetooth",
      "Prefs:root=Bluetooth",
      "App-prefs:root=Bluetooth",
    ];
    for (var i = 0; i < uris.length; i++) {
      if (openUri(uris[i])) {
        return true;
      }
    }

    return false;
  },
  openGeneralSettingsOnDevice: function() {
    var uris = ["Prefs:root=General", "App-prefs:root=General"];
    for (var i = 0; i < uris.length; i++) {
      if (openUri(uris[i])) {
        return true;
      }
    }

    return false;
  },
};
