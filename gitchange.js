var fs = require('fs');
var exec = require('child_process').exec;

var now = new Date().setDate(16);
var old = new Date().setDate(10);
while (now > old) {
console.log(now > old)
now = now - 86400000 * parseInt(Math.random()*5, 10);
fs.writeFile('./README.md', 'd' + now , (err) => {
    if (err)
        throw err;
    var iosdate = new Date(now);
    exec('git add .', () => {
        console.log('add')
        exec(`git commit -am 'wy' --date="${iosdate}"`, () => {
            console.log('commit')
            exec('git push', () => {
                console.log(iosdate);
                // 最多相隔5天提交一次
            });
        });
    });
})
}