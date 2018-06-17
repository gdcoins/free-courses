function step(n, m) {
	if(n.length == m.length){
		var a = n.split('');
		var b = m.split('');
        var k = n.length;
        var i = 1;
        var temp;
        if(k < 2){
        	return "введенные значения не могут быть конвертированы в массивы"; 
        }
        if(k == 2)
        	return "1";
        else {
	        while(i < k){
	        	a = a.concat(a.splice(0, a.length + i));
	        	temp = a.join('')+'';
	        	if(temp != m)
	        		i++;
	        }
	        return i+'';
		}
	}
	else
		return 'длина массивов отличается';
}
process.stdout.write(step(process.argv[2],process.argv[3])+'');