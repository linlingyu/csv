function toArray(content) {
    var len = content.length,
        isDouble = 0,
        cell = [],
        ret = [],
        charStr;
    for(var i = 0; i < len; i++) {
        charStr = content.charAt(i);
        if (charStr === '"') {
            isDouble = (isDouble + 1) % 2;
        }

        if (charStr === ';' && !isDouble) {
            ret.push(cell.join(''));
            cell = [];
            continue;
        }

        cell.push(charStr);
    }
    ret.push(cell.join(''));
    return ret;
}
//
module.exports = {
    parse: function(content) {
        var table = content.split(/[\r\n]+/g),
            ret = [];
        //
        table.forEach(function(item, index) {
            ret.push(toArray(item));
        });
        return ret;
    }
};
