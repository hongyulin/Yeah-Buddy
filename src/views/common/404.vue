<!DOCTYPE html>
<!-- saved from url=(0070)https://dn-shimo-attachment.qbox.me/1tX1Tl5bhR8EoLVg/martrix_demo.html -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>404</title>
	<style type="text/css">
		body{
			background-color: #000;
		}	
		ul {
        	list-style:none; 
        	margin:-110px auto auto -360px;
        	padding:0; 
	    }
      	li {
        	width:20px; 
        	height:20px; 
        	position:absolute; 
        	display: content-box;
        	border:solid 2px black;
      	}
	</style>
</head>
<body>
<div></div>

<script type="text/javascript">
	const divBack = document.getElementsByTagName("div")[0];
	const martrixBack = [
		[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
		[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
		[0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0],
		[0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0],
		[0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0],
		[0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0],
		[1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1],
		[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
		[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
		[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
		[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
	];
	function createDom(attrs){
		var dom = document.createElement(attrs.tagName);
		attrs.style ? dom.setAttribute("style",attrs.style) : void(0);
		return dom
	}
	function getColor(n) {
		let color = 'rgb(' + (Math.random()*245|0) + ',' + (Math.random()*245|0) + ',' + (Math.random()*245|0) + ')';
      switch(n){
      	case 0 :
      		return "transparent";
      		break;
      	case 1 :
      		return color;
      		break;
      }
    }

	function createBlock(dom,attrs,martrix){
		var iLength = martrix.length,
			jLength = martrix[0].length,
			ratio = 20,
			ul = null,
		ul = createDom({tagName: "ul", style: "height:"+iLength*ratio+"px; width:"+jLength*ratio+"px; position:absolute;left:"+attrs.left+"px; top:"+attrs.top+"px"});
		
		for(i in martrix){
			let temp = martrix[i];
			for(let j=0; j<jLength; j++){
				let style = "width:"+ratio+"px; height:"+ratio+"px;left:"+j*ratio+"px; top:"+i*ratio+"px;background:"+getColor(temp[j]);
	          	let li = createDom({tagName: "li", style: style});
	          	ul.appendChild(li);
			}
		}
		dom.appendChild(ul);
	}
	createBlock(divBack,{left: window.innerWidth/2, top: window.innerHeight/3},martrixBack)
</script>
</body></html>