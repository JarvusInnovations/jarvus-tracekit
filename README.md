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
    
    
