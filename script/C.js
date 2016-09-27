function initC() {
	var div = d3.select("div.div_C"),
		svg_grad = div.select("#svg_C_grad"),
		svg_map = div.select("#svg_C_map"),
		width = $(".left_wrap").width(),
		height = $(".left_wrap").height();
	svg_grad.attr("class", "svg_grad");
	svg_map.attr("width", width - options.mapMargin.left)
		.attr("height", height - options.mapMargin.bottom)
		.style("margin-left", options.mapMargin.left + "px")
		.attr("margin-bottom", options.mapMargin.bottom + "px")
		.attr("class", "svg_map");
	div.select("#canvas_C").attr("width", width - options.mapMargin.left)
		.attr("height", height - options.mapMargin.bottom)
		.style("margin-left", options.mapMargin.left + "px")
		.attr("margin-bottom", options.mapMargin.bottom + "px")
	var g_grad = svg_grad.append("g").attr("class", "axis"),
		g_map = svg_map.append("g").attr("class", "map_g");


	/*
	projection & path for C
	*/
	options.C.projection = d3.geoEquirectangular()
		.center([119, 36.3]).scale(2300)
		.translate([width / 2, height / 2]);
	options.C.path = d3.geoPath()
		.projection(options.C.projection);


	var position = [
		options.C.projection.invert([options.mapMargin.left, options.mapMargin.top]),
		options.C.projection.invert([width - options.mapMargin.right, height - options.mapMargin.bottom]),
	];
	options.C.width = width;
	options.C.height = height;
	options.C.yScale = d3.scaleLinear()
		.domain([position[0][1], position[1][1]])
		.range([options.mapMargin.top, height - options.mapMargin.bottom]);
	options.C.xScale = d3.scaleLinear()
		.domain([position[0][0], position[1][0]])
		.range([options.mapMargin.left, width - options.mapMargin.right]);
	options.C.yScaleTemp = d3.scaleLinear()
		.domain([position[0][1], position[1][1]])
		.range([options.mapMargin.top, height - options.mapMargin.bottom]);
	options.C.xScaleTemp = d3.scaleLinear()
		.domain([position[0][0], position[1][0]])
		.range([options.mapMargin.left, width - options.mapMargin.right]);
	options.C.xAxis = d3.axisBottom()
		.scale(options.C.xScale);
	options.C.yAxis = d3.axisLeft()
		.scale(options.C.yScale);

	g_grad.append("g").attr("class", "x-axis axis_x")
		.attr("transform", "translate(" + 0 + "," + (height - options.mapMargin.bottom + 2) + ")")
		.call(options.C.xAxis);
	g_grad.append("g").attr("class", "y-axis axis_y")
		.attr("transform", "translate(" + (options.mapMargin.left - 2) + "," + 0 + ")")
		.call(options.C.yAxis);
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
		.attr("d", options.C.path)
		.on("mouseover", function(d) {

		})
		.on("mouseout", function(d) {

		});
	renderDataC();
	zoomC(div);
}

function renderDataC() {
	var div = d3.select("div.div_C");

	/*
	warning:date
	*/
	options.C.colorScale = d3.scaleLinear()
		.domain([0, 100, 200, 300, 400, 500])
		.range( ['rgb(225,217,150)', 'rgb(253,133,91)', 'rgb(219,68,106)', 'rgb(157,42,128)', 'rgb(76,5,123)','rgb(13,9,42)'])
		/*.range([
			"#000097", "#0058FF", "#10FFEE", "#E7FF18", "#FF4800", "#850000"
		]);*/
	var svg_side = d3.select("#side_C");
	var width = $("div.left_side").width(),
		height = $("div.left_side").height();
	svg_side.select("#linearGradient_C").append("stop")
		.attr("offset", "0%")
		.style("stop-color", "rgb(225,217,150)")
	svg_side.select("#linearGradient_C").append("stop")
		.attr("offset", "20%")
		.style("stop-color", "rgb(253,133,91)")
	svg_side.select("#linearGradient_C").append("stop")
		.attr("offset", "40%")
		.style("stop-color", "rgb(219,68,106)")
	svg_side.select("#linearGradient_C").append("stop")
		.attr("offset", "60%")
		.style("stop-color", "rgb(157,42,128)")
	svg_side.select("#linearGradient_C").append("stop")
		.attr("offset", "80%")
		.style("stop-color", "rgb(76,5,123)")
	svg_side.select("#linearGradient_C").append("stop")
		.attr("offset", "100%")
		.style("stop-color", "rgb(13,9,42)")
	var text = [0, 100, 200, 300, 400, 500];
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
		.style("fill", "url(#linearGradient_C)")



	redrawC();
}

function redrawC() {
	console.log("redrawC");
	options.C.data = options.dataset.aqi["date_"+options.currentDate];
	var canvas = document.getElementById('canvas_C');
	var width = canvas.width,
		height = canvas.height;
	var context = canvas.getContext("2d");
	context.clearRect(0, 0, width, height);
	context.beginPath();
	var pos0 = [options.C.xScaleTemp(parseFloat(options.C.data[0].split(",")[0])), options.C.yScaleTemp(parseFloat(options.C.data[0].split(",")[1]))],
		pos1 = [options.C.xScaleTemp(parseFloat(options.C.data[1].split(",")[0])), options.C.yScaleTemp(parseFloat(options.C.data[1].split(",")[1]))];
	var radius = 3 * Math.sqrt((pos0[0] - pos1[0]) * (pos0[0] - pos1[0]) + (pos0[1] - pos1[1]) * (pos0[1] - pos1[1]));
	for (var i = 0; i < options.C.data.length; ++i) {
		var pos = [options.C.xScaleTemp(parseFloat(options.C.data[i].split(",")[0])), options.C.yScaleTemp(parseFloat(options.C.data[i].split(",")[1]))];
		context.beginPath();
		context.fillStyle = options.C.colorScale(parseFloat(options.C.data[i].split(",")[2]));
		context.arc(pos[0], pos[1], radius, 0, 2 * Math.PI);
		context.fill();
	}
	context.closePath();
}



function zoomC(container) {
	var svg_map = container.select(".svg_map"),
		svg_grad = container.select(".svg_grad");
	var zoom = d3.zoom()
		.scaleExtent([1, 2])
		.translateExtent([
			[-50, -50],
			[options.C.width + 50, options.C.height + 50]
		])
		.on("zoom", zoomed)
		.on("end", redrawC);
	svg_map.call(zoom);

	function zoomed() {
		var c = document.getElementById('canvas_C');
		var cw = c.width,
			ch = c.height;
		c.getContext("2d").clearRect(0, 0, cw, ch);
		svg_map.select("g.map_g").attr("transform", d3.event.transform);
		svg_grad.select("g.axis_y").selectAll(".grad_line").remove();
		svg_grad.select("g.axis_x").selectAll(".grad_line").remove();
		options.C.yScaleTemp = d3.event.transform.rescaleY(options.C.yScale);
		options.C.xScaleTemp = d3.event.transform.rescaleX(options.C.xScale);
		svg_grad.select("g.axis_y").call(options.C.yAxis.scale(d3.event.transform.rescaleY(options.C.yScale)))
			.selectAll("g")
			.append("line")
			.attr("class", "grad_line")
			.attr("x1", 0)
			.attr("y1", 0)
			.attr("x2", options.C.width - options.mapMargin.left - options.mapMargin.right)
			.attr("y2", 0);
		svg_grad.select("g.axis_x").call(options.C.xAxis.scale(d3.event.transform.rescaleX(options.C.xScale)))
			.selectAll("g")
			.append("line")
			.attr("class", "grad_line")
			.attr("x1", 0)
			.attr("y1", 0)
			.attr("x2", 0)
			.attr("y2", -(options.C.height - options.mapMargin.top - options.mapMargin.bottom));
	}
}