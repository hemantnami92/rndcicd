exports.config={
    directConnect:true,
    framework:'jasmine',
    suites: {
        smoke: 'Smoke.js',
        regression: 'Regression.js'
      },
   // specs:['Smoke.js'],
    capabilities:
    {
        browserName:'chrome'
        
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
      }

}
