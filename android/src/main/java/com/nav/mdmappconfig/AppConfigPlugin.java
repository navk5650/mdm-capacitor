package com.nav.mdmappconfig;

import android.content.Context;
import android.content.SharedPreferences;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "AppConfigPlugin")
public class AppConfigPlugin extends Plugin {

    @PluginMethod
    public void getValue(PluginCall call) {
        // Retrieve the key parameter from the Capacitor call
        String key = call.getString("key");
        
        if (key == null) {
            // Reject the call if the key is missing
            call.reject("Key must be provided");
            return;
        }

        // Access the shared preferences where Intune configuration values are stored
        Context context = getContext();
        SharedPreferences sharedPreferences = context.getSharedPreferences("com.microsoft.intune", Context.MODE_PRIVATE);

        // Retrieve the value for the provided key
        String value = sharedPreferences.getString(key, null);

        if (value == null) {
            // Reject the call if no value was found for the key
            call.reject("No value found for the given key");
        } else {
            // Resolve the call with the retrieved value
            JSObject result = new JSObject();
            result.put("value", value);
            call.resolve(result);
        }
    }
}
