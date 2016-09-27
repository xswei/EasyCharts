function initB() {
	var div = d3.select("div.div_B"),
		svg_grad = div.select("#svg_B_grad"),
		svg_map = div.select("#svg_B_map"),
		width = $(".left_wrap").width(),
		height = $(".left_wrap").height();
	svg_grad.attr("class", "svg_grad");
	svg_map.attr("width", width - options.mapMargin.left)
		.attr("height", height - options.mapMargin.bottom)
		.style("margin-left", options.mapMargin.left + "px")
		.attr("margin-bottom", options.mapMargin.bottom + "px")
		.attr("class", "svg_map");
	div.select("#canvas_B").attr("width", width - options.mapMargin.left)
		.attr("height", height - options.mapMargin.bottom)
		.style("margin-left", options.mapMargin.left + "px")
		.attr("margin-bottom", options.mapMargin.bottom + "px")
	var g_grad = svg_grad.append("g").attr("class", "axis"),
		g_map = svg_map.append("g").attr("class", "map_g");


	/*
	projection & path for A
	*/
	options.B.projection = d3.geoEquirectangular()
		.center([119, 36.3]).scale(2300)
		.translate([width / 2, height / 2]);
	options.B.path = d3.geoPath()
		.projection(options.B.projection);


	var position = [
		options.B.projection.invert([options.mapMargin.left, options.mapMargin.top]),
		options.B.projection.invert([width - options.mapMargin.right, height - options.mapMargin.bottom]),
	];
	options.B.width = width;
	options.B.height = height;
	options.B.yScale = d3.scaleLinear()
		.domain([position[0][1], position[1][1]])
		.range([options.mapMargin.top, height - options.mapMargin.bottom]);
	options.B.xScale = d3.scaleLinear()
		.domain([position[0][0], position[1][0]])
		.range([options.mapMargin.left, width - options.mapMargin.right]);
	options.B.yScaleTemp = d3.scaleLinear()
		.domain([position[0][1], position[1][1]])
		.range([options.mapMargin.top, height - options.mapMargin.bottom]);
	options.B.xScaleTemp = d3.scaleLinear()
		.domain([position[0][0], position[1][0]])
		.range([options.mapMargin.left, width - options.mapMargin.right]);
	options.B.xAxis = d3.axisBottom()
		.scale(options.B.xScale);
	options.B.yAxis = d3.axisLeft()
		.scale(options.B.yScale);

	g_grad.append("g").attr("class", "x-axis axis_x")
		.attr("transform", "translate(" + 0 + "," + (height - options.mapMargin.bottom + 2) + ")")
		.call(options.B.xAxis);
	g_grad.append("g").attr("class", "y-axis axis_y")
		.attr("transform", "translate(" + (options.mapMargin.left - 2) + "," + 0 + ")")
		.call(options.B.yAxis);
	g_grad.select("g.y-axis")
		.selectAll("g")
		.append("line")
		.attr("class", "grad_line")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", width - options.mapMargin.left - options.mapMargin.right)
		.attr("y2", 0)
	g_grad.select("g.x-axis")
		.selectAll("g")
		.append("line")
		.attr("class", "grad_line")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", 0)
		.attr("y2", -(height - options.mapMargin.top - options.mapMargin.bottom))
	g_map.selectAll("path")
		.data(options.json.features)
		.enter()
		.append("path")
		.attr("fill", "none")
		.attr("stroke", "white")
		.attr("stroke-width", 0.1)
		.attr("opacity",0.5)
		.attr("d", options.B.path)
		.on("mouseover", function(d) {

		})
		.on("mouseout", function(d) {

		});
	renderDataB();
	zoomB(div);
}

function renderDataB() {
	var div = d3.select("div.div_B");

	/*
	warning:date
	*/
	/*options.B.colorScale = d3.scaleLinear()
		.domain([0, 1, 2, 3, 4, 5])
		.range([
			"#000097", "#0058FF", "#10FFEE", "#E7FF18", "#FF4800", "#850000"
		]).interpolate(d3.interpolateHcl);*/
	options.B.colorArray = ["#000097", "#0000F7", "#0058FF", "#00B4FF", "#10FFEE", "#80FF80", "#E7FF18", "#FF9700", "#FF4800", "#F70000", "#850000"];
	var svg_side = d3.select("#side_B");
	var width = $("div.left_side").width(),
		height = $("div.left_side").height();
	svg_side.select("#linearGradient_B").append("stop")
		.attr("offset", "0%")
		.style("stop-color", "#000097")
	svg_side.select("#linearGradient_B").append("stop")
		.attr("offset", "20%")
		.style("stop-color", "#0058FF")
	svg_side.select("#linearGradient_B").append("stop")
		.attr("offset", "40%")
		.style("stop-color", "#10FFEE")
	svg_side.select("#linearGradient_B").append("stop")
		.attr("offset", "60%")
		.style("stop-color", "#E7FF18")
	svg_side.select("#linearGradient_B").append("stop")
		.attr("offset", "80%")
		.style("stop-color", "#FF4800")
	svg_side.select("#linearGradient_B").append("stop")
		.attr("offset", "100%")
		.style("stop-color", "#850000")
	var text = [0, 2, 4, 6, 8, 10];
	var rectH = height * 4 / 5;
	svg_side.selectAll("text")
		.data(text).enter()
		.append("text")
		.attr("x", 10 + width / 3)
		.attr("fill", "white")
		.attr("dy", ".3em")
		.attr("y", function(d, i) {
			return height - (height - rectH) / 2 - (rectH / 5) * i;
		})
		.text(function(d) {
			return d;
		})
	svg_side.append("rect")
		.attr("stroke", "black")
		.attr("stroke-width", 0.5)
		.attr("x", 10)
		.attr("y", (height - rectH) / 2)
		.attr("width", width / 3 - 5)
		.attr("height", rectH)
		.style("fill", "url(#linearGradient_B)")

	redrawB();
}

function redrawB() {
	console.log("redrawB");
	options.B.data = options.dataset.wind["date_"+options.currentDate];
	var canvas = document.getElementById('canvas_B');
	var width = canvas.width,
		height = canvas.height;
	var context = canvas.getContext("2d");
	context.clearRect(0, 0, width, height);

	for (var i = 0, len = options.B.data.length; i < len; ++i) {
		var pos = [options.B.xScaleTemp(parseFloat(options.B.data[i].split(",")[0])), options.B.yScaleTemp(parseFloat(options.B.data[i].split(",")[1]))];
		//console.log(pos);
		//var color = options.B.colorScale(parseFloat(options.B.data[i].fengli));
		//console.log(options.B.data[i].fengli);
		//console.log(Math.round(options.B.data[i].fengli));
		context.beginPath();
		context.moveTo(pos[0], pos[1]);
		context.strokeStyle = options.B.colorArray[Math.round(parseFloat(options.B.data[i].split(",")[2]))]
		context.lineWidth = 1;
		context.lineTo(pos[0] + parseFloat(parseFloat(options.B.data[i].split(",")[4])) * 2, pos[1] + parseFloat(parseFloat(options.B.data[i].split(",")[5])) * 2);
		context.stroke();
		context.closePath();
	}

}



function zoomB(container) {
	var svg_map = container.select(".svg_map"),
		svg_grad = container.select(".svg_grad");
	var zoom = d3.zoom()
		.scaleExtent([1, 2])
		.translateExtent([
			[-50, -50],
			[options.B.width + 50, options.B.height + 50]
		])
		.on("zoom", zoomed)
		.on("end", redrawB);
	svg_map.call(zoom);

	function zoomed() {
		var c = document.getElementById('canvas_B');
		var cw = c.width,
			ch = c.height;
		c.getContext("2d").clearRect(0, 0, cw, ch);
		svg_map.select("g.map_g").attr("transform", d3.event.transform);
		svg_grad.select("g.axis_y").selectAll(".grad_line").remove();
		svg_grad.select("g.axis_x").selectAll(".grad_line").remove();
		options.B.yScaleTemp = d3.event.transform.rescaleY(options.B.yScale);
		options.B.xScaleTemp = d3.event.transform.rescaleX(options.B.xScale);
		svg_grad.select("g.axis_y").call(options.B.yAxis.scale(d3.event.transform.rescaleY(options.B.yScale)))
			.selectAll("g")
			.append("line")
			.attr("class", "grad_line")
			.attr("x1", 0)
			.attr("y1", 0)
			.attr("x2", options.B.width - options.mapMargin.left - options.mapMargin.right)
			.attr("y2", 0);
		svg_grad.select("g.axis_x").call(options.B.xAxis.scale(d3.event.transform.rescaleX(options.B.xScale)))
			.selectAll("g")
			.append("line")
			.attr("class", "grad_line")
			.attr("x1", 0)
			.attr("y1", 0)
			.attr("x2", 0)
			.attr("y2", -(options.B.height - options.mapMargin.top - options.mapMargin.bottom));
	}
}