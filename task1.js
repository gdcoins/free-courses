var string = process.argv[2];
string = string.replace(/[\кК\рР\нН]/g, '');
process.stdout.write(string);