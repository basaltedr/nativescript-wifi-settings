import * as application from "@nativescript/core"

function getAppContext() {
  var ctx = application.android.context;

  if (ctx==null) {
    ctx = java.lang.Class.forName("android.app.AppGlobals")
      .getMethod("getInitialApplication", null)
      .invoke(null, null);
  }

  if (ctx==null) {
    ctx = java.lang.Class.forName("android.app.ActivityThread")
      .getMethod("currentApplication", null)
      .invoke(null, null);
  }

  if (ctx!==null) {
    ctx = ctx.getApplicationContext();
  } else {
    ctx = undefined;
  }

  return ctx;
}
module.exports = {
  openWifiSettingsOnDevice: function() {
    var ctx = getAppContext();
    if (ctx==null) {
      return false;
    }

    var intent = new android.content.Intent(
      android.provider.Settings.ACTION_WIFI_SETTINGS,
    );
    intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);

    ctx.startActivity(intent);
    return true;
  },
};
