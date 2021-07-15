var Application = require("@nativescript/core/application");
var TypeUtils = require("@nativescript/core");

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
};
