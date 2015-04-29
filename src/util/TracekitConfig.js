/**
 * Utility for configuring Tracekit
 *
 *    // Configure with a url which will receive error reports
 *    if (TracekitConfig) {
 *        TracekitConfig.setUrl('http://tracekit-dev.sandbox01.jarv.us/api/catch');
 *    }
 *
 *    // errors that occur in try blocks have full stack information
 *    try {
 *        //non_existent_function();
 *    } catch (e) {
 *        //error with stack trace gets normalized and sent to subscriber
 *        TraceKit.report(e);
 *    }
 *
 *    // errors outside of try blocks do not have full stack info
 *    non_existent_function();
 */
Ext.define('Jarvus.util.TracekitConfig', {
    alternateClassName: 'TracekitConfig',
    singleton: true,

    config: {
        url: null,
        appName: null,
        suppressError: true
    },

    constructor: function() {
        var me = this;

        TraceKit.report.subscribe(function(errorReport) {
            Ext.Ajax.request({
                url: me.getUrl(),
                params: {
                    app_name: me.getAppName(),
                    error: JSON.stringify(errorReport)
                },
                success: function(response){
                    // process server response here
                }
            });
            return me.getSuppressError; //suppress error on client
        });
    }
});
