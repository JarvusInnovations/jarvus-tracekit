# jarvus-tracekit

A wrapper for Tracekit

## Setup

 - include the jarvus-tracekit package in the "requires" array in your app's app.json
 - require the Jarvus.util.TracekitConfig class in the file where you will be configuring and initializing Tracekit
 
## Configuration

 - example:
```
if (TracekitConfig) {
    TracekitConfig.setUrl('http://tracekit-dev.sandbox01.jarv.us/api/catch');
}
```
## Error reporting

```
// errors that occur in try blocks have full stack information
try {
    //non_existent_function();
} catch (e) {
    //error with stack trace gets normalized and sent to subscriber
    TraceKit.report(e);
}

// errors outside of try blocks do not have full stack info
non_existent_function();
```
    
