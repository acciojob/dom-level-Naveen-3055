function getLevel(element) {
	if(!element) return -1;
	let depth =0;
	const current = element
	while(current && current !== document.documentElement){
		depth++;
		current = current.parentElement;
	}
	return depth;
}
const element = document.getElementById('level')
alert(`The level of the element is: ${getLevel(element)}`)
