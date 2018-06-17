function nod(n, m) {
	if(m > 0) { 
		var k = n%m;
		return nod(m, k); 
	} 
	else { 
		return n;  
	}
}
console.log(nod(process.argv[2],process.argv[3]));