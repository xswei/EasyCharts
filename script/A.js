function initA() {
	var div = d3.select("div.div_A"),
		svg_grad = div.select("#svg_A_grad"),
		svg_map = div.select("#svg_A_map"),
		width = $(".left_wrap").width(),
		height = $(".left_wrap").height();
	svg_grad.attr("class", "svg_grad");
	svg_map.attr("width", width - options.mapMargin.left)
		.attr("height", height - options.mapMargin.bottom)
		.style("margin-left", options.mapMargin.left + "px")
		.attr("margin-bottom", options.mapMargin.bottom + "px")
		.attr("class", "svg_map")
	var g_grad = svg_grad.append("g").attr("class", "axis"),
		g_map = svg_map.append("g").attr("class", "map_g");


	/*
	projection & path for A
	*/
	options.A.projection = d3.geoEquirectangular()
		.center([119, 36.3]).scale(2300)
		.translate([width / 2, height / 2]);
	options.A.path = d3.geoPath()
		.projection(options.A.projection);


	var position = [
		options.A.projection.invert([options.mapMargin.left, options.mapMargin.top]),
		options.A.projection.invert([width - options.mapMargin.right, height - options.mapMargin.bottom]),
	];
	options.A.width = width;
	options.A.height = height;
	options.A.yScale = d3.scaleLinear()
		.domain([position[0][1], position[1][1]])
		.range([options.mapMargin.top, height - options.mapMargin.bottom]);
	options.A.xScale = d3.scaleLinear()
		.domain([position[0][0], position[1][0]])
		.range([options.mapMargin.left, width - options.mapMargin.right]);

	options.A.xAxis = d3.axisBottom()
		.scale(options.A.xScale);
	options.A.yAxis = d3.axisLeft()
		.scale(options.A.yScale);

	g_grad.append("g").attr("class", "x-axis axis_x")
		.attr("transform", "translate(" + 0 + "," + (height - options.mapMargin.bottom + 2) + ")")
		.call(options.A.xAxis);
	g_grad.append("g").attr("class", "y-axis axis_y")
		.attr("transform", "translate(" + (options.mapMargin.left - 2) + "," + 0 + ")")
		.call(options.A.yAxis);
	g_grad.select("g.axis_y")
		.selectAll("g")
		.append("line")
		.attr("class", "grad_line")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", width - options.mapMargin.left - options.mapMargin.right)
		.attr("y2", 0)
	g_grad.select("g.axis_x")
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
		.attr("fill", "#ccc")
		.attr("stroke", "black")
		.attr("stroke-width", 0.5)
		.attr("d", options.A.path)

	renderDataA();
	zoomA(div);
}

function showWeatherTip(data, e) {
	console.log(data);
	var pos = [e.pageX, e.pageY];
	var div = d3.select("#tip_information");
	div.style("left", pos[0] + 10 + "px")
		.style("top", pos[1] + 10 + "px")
		.style("display", "block")
	div.select(".time")
		.text("2015-12-" + (options.currentDate < 10 ? "0" + options.currentDate : options.currentDate));
	var tip_title = div.select(".tip_title")
		.text(data.properties.detail ? data.properties.detail.split(",")[1] : data.properties.NAME_3);
	var jiangshuiliang = div.select(".jiangshuiliang").select(".value")
		.text((data.data ? data.data.precipitation : "Unknow"))

}

function renderDataA() {
	var div = d3.select("div.div_A");
	var maxPrecipitation=0;
	for(p in options.dataset.weather["date_"+options.currentDate]){
		if(parseFloat(options.dataset.weather["date_"+options.currentDate][p].precipitation)>maxPrecipitation){
			maxPrecipitation = parseFloat(options.dataset.weather["date_"+options.currentDate][p].precipitation);
		}
	}
	console.log(maxPrecipitation);
	options.A.colorScale = d3.scaleLinear()
		.domain([0,maxPrecipitation])
		.range([d3.rgb("#028166"), d3.rgb("#FBFD66")]);
	console.log(options.A.colorScale.domain())
	var svg_side = d3.select("#side_A");
	var width = $("div.left_side").width(),
		height = $("div.left_side").height();
	svg_side.select("#linearGradient_A").append("stop")
		.attr("offset", "0%")
		.style("stop-color", "#028166")
	svg_side.select("#linearGradient_A").append("stop")
		.attr("offset", "100%")
		.style("stop-color", "#FBFD66")
	var text = ["0.000", "", "", '', '', maxPrecipitation.toFixed(3)];
	var rectH = height * 4 / 5;
	svg_side.selectAll("text")
		.data(text).enter()
		.append("text")
		.attr("x", 10 + width / 3)
		.attr("dy", ".3em")
		.attr("fill", "white")
		.attr("y", function(d, i) {
			return height - (height - rectH) / 2 - (rectH / 5) * i;
		})
		.text(function(d) {
			console.log(d);
			return isNaN(parseFloat(d).toFixed(2))?"":parseFloat(d).toFixed(2);
		})
	svg_side.append("rect")
		.attr("stroke", "black")
		.attr("stroke-width", 0.5)
		.attr("x", 10)
		.attr("y", (height - rectH) / 2)
		.attr("width", width / 3 - 5)
		.attr("height", rectH)
		.style("fill", "url(#linearGradient_A)")
	var g_map = div.select("#svg_A_map").select("g.map_g");
	g_map.selectAll("path")
		.each(function(d) {
			//console.log(d);
			if(d.properties.detail){
				d.data = options.dataset.weather["date_"+options.currentDate]["id_"+d.properties.detail.split(",")[0]]
				if(d.data){
					d3.select(this).attr("fill", options.A.colorScale(parseFloat(d.data.precipitation)));
				}
				
			}
			/*if (d.properties.detail) {
				var id = d.properties.detail.split(",")[0];
				for (var i = 0; i < options.dataset[parseInt(options.currentDate)].weather.length; ++i) {
					if (options.dataset[parseInt(options.currentDate)].weather[i].id == id) {
						d.data = options.dataset[parseInt(options.currentDate)].weather[i];
						d3.select(this).attr("fill", options.A.colorScale(parseFloat(d.data.PrecipitationAmount)));
						break;
					}
				}
			}*/
		})
		.on("mouseover", function(d) {
			showWeatherTip(d, d3.event);
		})
		.on("mouseout", function(d) {
			d3.select("#tip_information")
				.style("display", "none")
		})
}

function redrawA() {
	var maxPrecipitation=0;
	for(p in options.dataset.weather["date_"+options.currentDate]){
		if(parseFloat(options.dataset.weather["date_"+options.currentDate][p].precipitation)>maxPrecipitation){
			maxPrecipitation = parseFloat(options.dataset.weather["date_"+options.currentDate][p].precipitation);
		}
	}
	console.log(maxPrecipitation);
	options.A.colorScale = d3.scaleLinear()
		.domain([0,maxPrecipitation])
		.range([d3.rgb("#028166"), d3.rgb("#FBFD66")]);
	var g_map = d3.select("#svg_A_map").select("g.map_g");
	var width = $("div.left_side").width(),
		height = $("div.left_side").height();
	var text = ["0.000", "", "", '', '', maxPrecipitation=="0"?"":maxPrecipitation.toFixed(3)];
	var rectH = height * 4 / 5;
	d3.select("#side_A").selectAll("text").remove();
	d3.select("#side_A").selectAll("text")
		.data(text).enter()
		.append("text")
		.attr("x", 15 + width / 3)
		.attr("dy", ".3em")
		.attr("fill", "white")
		.attr("y", function(d, i) {
			return height - (height - rectH) / 2 - (rectH / 5) * i;
		})
		.text(function(d) {
			return d;
		})
	g_map.selectAll("path")
		.each(function(d) {
			if(d.properties.detail){
				d.data = options.dataset.weather["date_"+options.currentDate]["id_"+d.properties.detail.split(",")[0]]
				if(d.data){
					d3.select(this).attr("fill", options.A.colorScale(parseFloat(d.data.precipitation)));
				}
				
			}
		})
}

function zoomA(container) {
	var svg_map = container.select(".svg_map"),
		svg_grad = container.select(".svg_grad");
	var zoom = d3.zoom()
		.scaleExtent([1, 2])
		.translateExtent([
			[-50, -50],
			[options.A.width + 50, options.A.height + 50]
		])
		.on("zoom", zoomed);
	svg_map.call(zoom);

	function zoomed() {
		svg_map.select("g.map_g").attr("transform", d3.event.transform);
		svg_grad.select("g.axis_x").selectAll(".grad_line").remove();
		svg_grad.select("g.axis_y").selectAll(".grad_line").remove();
		svg_grad.select("g.axis_y").call(options.A.yAxis.scale(d3.event.transform.rescaleY(options.A.yScale)))
			.selectAll("g")
			.append("line")
			.attr("class", "grad_line")
			.attr("x1", 0)
			.attr("y1", 0)
			.attr("x2", options.A.width - options.mapMargin.left - options.mapMargin.right)
			.attr("y2", 0);
		svg_grad.select("g.axis_x").call(options.A.xAxis.scale(d3.event.transform.rescaleX(options.A.xScale)))
			.selectAll("g")
			.append("line")
			.attr("class", "grad_line")
			.attr("x1", 0)
			.attr("y1", 0)
			.attr("x2", 0)
			.attr("y2", -(options.A.height - options.mapMargin.top - options.mapMargin.bottom));
	}
}