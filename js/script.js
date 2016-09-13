var dropZone;

function setup(){
	noCanvas();

	dropZone = createDiv('Drop files');
	dropZone.id('drop_zone');

	dropZone.dragOver(highlight);

	dropZone.drop(gotFile, unHighlight);
}

function highlight(){
	dropZone.style('background', '#AAA');
}

function unHighlight(){
	dropZone.style('background', '');
}

function gotFile(file){
	var fileDiv = createDiv(file.name + ' ' + file.type + ' ' + file.subtype + ' ' + file.size + 'bytes');
	fileDiv.class('file');

	if(file.type === 'image'){
		var img = createImg(file.data);
		img.class('thumb');
	} else if (file.type === 'text'){
		var par = createP(file.data);
		par.class('text');
	}
}