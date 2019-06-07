var fs = require('fs');
var exec = require('child_process').exec;

var now = new Date().setDate(7);
var old = new Date('2018').setDate(2);

function gitchange() {
    if (now > old) {
        console.log(now > old);
        fs.appendFile('./README.md', 'd' + now , (err) => {
            if (err)
                throw err;
            var iosdate = new Date(now);
            console.log(iosdate);
            exec('git add .', () => {
                console.log('add')
                exec(`git commit -am 'wy' --date="${iosdate}"`, () => {
                    console.log('commit')
                    exec('git push', () => {
                        console.log('push');
                        // 最多相隔5天提交一次
                        now = now - 86400000 * parseInt(Math.random()*5, 10);
                        gitchange();
                    });
                });
            });
        })
    }
}

gitchange();