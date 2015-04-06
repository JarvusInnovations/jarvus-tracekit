/**
 * Utility for configuring Tracekit
 */
Ext.define('Jarvus.util.TracekitConfig', {
    alternateClassName: 'TracekitConfig',
    singleton: true,

    config: {
        url: null
    },

    constructor: function() {
        var me = this;
        console.log('singleton constructor');
        console.log(this.report);
        console.log(this.getUrl());
        //TraceKit.report.subscribe(this.report);
        TraceKit.report.subscribe(function(errorReport) {
            console.log(errorReport);
            Ext.Ajax.request({
                url: me.getUrl(),
            //    url: 'http://jarvus.dev.local/tracekit/tracekit-server/catch.php',
                params: {
                    error: JSON.stringify(errorReport)
                },
                success: function(response){
                    var text = response.responseText;
                    // process server response here
                }
            });
        });
    },

    report: function(errorReport) {

        if (this.getUrl()===null) {
            console.warn('Jarvus.util.Tracekit: You must set a URL');
        }

        //send via ajax to server, or use console.error in development
        //to get you started see: https://gist.github.com/4491219
        Ext.Ajax.request({
        //    url: this.getUrl(),
            url: 'http://jarvus.dev.local/tracekit/tracekit-server/catch.php',
            params: {
                error: JSON.stringify(errorReport)
            },
            success: function(response){
                var text = response.responseText;
                // process server response here
            }
        });
    }
});
