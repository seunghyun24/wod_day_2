function adjacentElementsProduct(inputArray) {
	var largest = inputArray[0]  * inputArray[1];

	for (var j= 0; j < inputArray.length-1; j++){
		largest = Math.max(largest, inputArray[j] * inputArray[j+1]);
	}
	return largest;
}
document.write(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); 
document.write("<br/>")
document.write(adjacentElementsProduct([-3, 1, -2, 6, -8])); 
