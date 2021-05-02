exports.config={
    directConnect:true,
    framework:'jasmine',
    specs:['Smoke.js'],
    capabilities:
    {
        browserName:'chrome'
        
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
      }

}