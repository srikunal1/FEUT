var istanbul = require('istanbul'),
        collector = new istanbul.Collector(),
        reporter = new istanbul.Reporter(),
        sync = false;
        var fs=require('fs');
 
    var x=fs.readFileSync("./out.json");
    var o=JSON.parse(x);
    //console.log(JSON.stringify(o));
    collector.add(o);
 
    reporter.add('text');
    reporter.addAll([ 'lcov', 'clover' ]);
    reporter.write(collector, sync, function () {
        console.log('All reports generated');
    });