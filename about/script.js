//Import SVG through Paper.JS for easy object access
var svgElem=document.getElementsByTagName("svg")[0]

//Get SVG dimensions
var svgSize={width:svgElem.getBBox().width,height:svgElem.getBBox().width}
var svgOffset={x:-svgSize.width/2,y:-svgSize.height/2}

var paperProject=new paper.Project([svgSize.width,svgSize.height])
paperProject.importSVG(svgElem,{import:false})
//Remove unnecessary top level group
var svgGroup=paperProject.layers[0].children[0];
svgGroup.parent.insertChildren(
	svgGroup.index,
	svgGroup.removeChildren()
);
svgGroup.remove();
//Remove clipping mask
paperProject.layers[0].children[0].remove()

let illoElement = new Zdog.Illustration({
  element: '.zdog-canvas',
	  dragRotate: true,
	
});

//var referenced by new zdog objects
var illo = illoElement

var zIndexMultiplier=1


paperProject.layers[0].children.forEach(function(item){
	var zPos=(item.index-item.parent.children.length/2) * zIndexMultiplier
	var itemTypes={
		Path(){
			var pathArray=[]
			for(var seg of item.segments){
				if(seg.index==0){
					pathArray.push({x:seg.point.x,y:seg.point.y})
				}
				else{
					pathArray.push({
							bezier:[
							{
								x:seg.previous.point.x+seg.previous.handleOut.x,
					 			y:seg.previous.point.y+seg.previous.handleOut.y
							},
							{x:seg.point.x+seg.handleIn.x, y:seg.point.y+seg.handleIn.y},
							{x:seg.point.x, y:seg.point.y},
						]})
					if(item.closed && seg.index==item.segments.length-1){
						pathArray.push({
								bezier:[
								{x:seg.point.x+seg.handleOut.x, y:seg.point.y+seg.handleOut.y},
								{x:seg.next.point.x+seg.next.handleIn.x,y:seg.next.point.y+seg.next.handleIn.y},
								{x:seg.next.point.x,y:seg.next.point.y},
							]})						
					}
				}
				console.log(pathArray)
			}
			new Zdog.Shape({
				addTo: illo,
				path: pathArray,
				closed: item.closed,
				stroke: item.strokeWidth,
				fill: item.fillColor!=null,
				color: (item.strokeColor)
								?item.strokeColor.toCSS(true)
								:item.fillColor.toCSS(true),				
				translate: {x:svgOffset.x,y:svgOffset.y,z: zPos }
			})
		},
		Shape(){
			var shapeTypes={
				rectangle(){
					new Zdog.Rect({
						addTo: illo,
						width: item.size.width,
						height: item.size.height,
						translate: {
							x: item.position.x+svgOffset.x, 
							y: item.position.y+svgOffset.y, 
							z: item.index * zIndexMultiplier
						},
						fill: (item.fillColor!=null),						
						stroke: item.strokeWidth,
						color: (item.strokeColor)
											?item.strokeColor.toCSS(true)
											:item.fillColor.toCSS(true),
					})
				},
				ellipse(){
					new Zdog.Ellipse({
						addTo: illo,
						width: item.size.width,
						height: item.size.height,
						translate: {
							x: item.position.x+svgOffset.x, 
							y: item.position.y+svgOffset.y, 
							z: zPos
						},
						fill: (item.fillColor!=null),						
						stroke: item.strokeWidth,
						color: (item.strokeColor)
											?item.strokeColor.toCSS(true)
											:item.fillColor.toCSS(true),
					})
				},				
				circle(){
					new Zdog.Ellipse({
						addTo: illo,
						diameter: item.radius*2,
						translate: { 
							x: item.position.x+svgOffset.x, 
							y: item.position.y+svgOffset.y, 
							z: zPos
						},
						fill: (item.fillColor!=null),
						stroke: item.strokeWidth,
						color: (item.strokeColor)
								?item.strokeColor.toCSS(true)
								:item.fillColor.toCSS(true),						
					})
				},
				default(){
					console.log(`Shape ${item.type} not supported`)
				}
			}
			return (shapeTypes[item.type] || shapeTypes["default"])();
		},
		default(){
			console.log(`${item.className} ${item.type} not supported`)
		}
	}
	return (itemTypes[item.className] || itemTypes["default"])();
})

illo.rotate.x=-Zdog.TAU/16


//rotation
anime({
	duration:10000,
  direction: 'alternate',
	loop: true,
  easing: 'easeInOutCubic',
	targets: illo.rotate,
	y: [-Zdog.TAU/30,Zdog.TAU/30],
  update: function() {
		//update the zdog render graph each frame
		illo.updateRenderGraph();
  }
});