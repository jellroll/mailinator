var fs = require('file-system');

var insertSQL;

fs.writeFile('mailinator_inserts.sql', '', function(err) {})

for (i=1; i <= 200; i++) {
    
    insertSQL = "insert into MFTA_USER ( FIRST_NAME, LAST_NAME, EMAIL) VALUES ('Holly" + i + "', 'Wood" + i + "','hwood-test" + i + "@mailinator.com');\n"
    
    fs.appendFile('mailinator_inserts.sql', insertSQL, function(err) {})
}

