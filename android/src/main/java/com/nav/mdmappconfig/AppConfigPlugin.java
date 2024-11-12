package com.nav.mdmappconfig;

import android.util.Log;

public class AppConfigPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
