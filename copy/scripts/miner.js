console.log("PATATE2")
var mining_threads = 1
console.log("PATATE1")
function checkWork() {
    console.log("PATATE0")
    if (eth.getBlock("pending").transactions.length > 0) {
        if (eth.mining) return;
        console.log("== Pending transactions! Mining...");
        miner.start(mining_threads);
    } else {
        miner.stop();
        console.log("== No transactions! Mining stopped.");
    }
}


eth.filter("latest").watch(function(err, block) { checkWork(); });
eth.filter("pending").watch(function(err, block) { checkWork(); });

checkWork();