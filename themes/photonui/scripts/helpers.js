var fs = require('hexo-fs');

hexo.extend.helper.register("getFileContent", function(fileName) {
    var result = fs.readFileSync("source/" + fileName);
    result = result.replace(/&/g, "&amp;");
    result = result.replace(/</g, "&lt;");
    result = result.replace(/>/g, "&gt;");
    return result;
});

hexo.extend.helper.register("getFileContentRaw", function(fileName) {
    return fs.readFileSync("source/" + fileName);
});

hexo.extend.helper.register("fileExists", function(fileName) {
    return fs.existsSync("source/" + fileName);
});
