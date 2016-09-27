function initD() {
	var div = d3.select("div.div_D"),
		svg_grad = div.select("#svg_D_grad"),
		svg_map = div.select("#svg_D_map"),
		width = $(".right_wrap").width(),
		height = $(".right_wrap").height();
	svg_grad.attr("class", "svg_grad");
	svg_map.attr("width", width - options.mapMargin.left)
		.attr("height", height - options.mapMargin.bottom)
		.style("margin-left", options.mapMargin.left + "px")
		.attr("margin-bottom", options.mapMargin.bottom + "px")
		.attr("class", "svg_map");
	div.select("#canvas_D").attr("width", width - options.mapMargin.left)
		.attr("height", height - options.mapMargin.bottom)
		.style("margin-left", options.mapMargin.left + "px")
		.attr("margin-bottom", options.mapMargin.bottom + "px")
	var g_grad = svg_grad.append("g").attr("class", "axis"),
		g_map = svg_map.append("g").attr("class", "map_g");


	/*
	projection & path for C
	*/
	options.D.projection = d3.geoEquirectangular()
		.center([119, 36.3]).scale(5500)
		.translate([width / 2, height / 2]);
	options.D.path = d3.geoPath()
		.projection(options.D.projection);


	var position = [
		options.D.projection.invert([options.mapMargin.left, options.mapMargin.top]),
		options.D.projection.invert([width - options.mapMargin.right, height - options.mapMargin.bottom]),
	];
	options.D.width = width;
	options.D.height = height;
	options.D.yScale = d3.scaleLinear()
		.domain([position[0][1], position[1][1]])
		.range([options.mapMargin.top, height - options.mapMargin.bottom]);
	options.D.xScale = d3.scaleLinear()
		.domain([position[0][0], position[1][0]])
		.range([options.mapMargin.left, width - options.mapMargin.right]);
	options.D.yScaleTemp = d3.scaleLinear()
		.domain([position[0][1], position[1][1]])
		.range([options.mapMargin.top, height - options.mapMargin.bottom]);
	options.D.xScaleTemp = d3.scaleLinear()
		.domain([position[0][0], position[1][0]])
		.range([options.mapMargin.left, width - options.mapMargin.right]);
	options.D.xAxis = d3.axisBottom()
		.scale(options.D.xScale);
	options.D.yAxis = d3.axisLeft()
		.scale(options.D.yScale);

	g_grad.append("g").attr("class", "x-axis axis_x")
		.attr("transform", "translate(" + 0 + "," + (height - options.mapMargin.bottom + 2) + ")")
		.call(options.D.xAxis);
	g_grad.append("g").attr("class", "y-axis axis_y")
		.attr("transform", "translate(" + (options.mapMargin.left - 2) + "," + 0 + ")")
		.call(options.D.yAxis);
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
		.attr("stroke", "#ccc")
		.attr("stroke-width", 0.8)
		.attr("d", options.D.path)
		.on("mouseover", function(d) {

		})
		.on("mouseout", function(d) {

		});
	renderDataD();
	//zoomD(div);

}

function renderDataD() {
	var div = d3.select("div.div_D");

	/*
	warning:date
	*/
	var circleColor = [
			"rgb(0,231,149)", 
			"rgb(130,247,75)", 
			"rgb(214,199,25)", 
			"rgb(255,110,72)",
			 "rgb(228,58,160)","rgb(120,58,175)"
		]
	options.D.colorScale = d3.scaleLinear()
		.domain([0, 100, 200, 300, 400, 500])
		.range( ['rgb(225,217,150)', 'rgb(253,133,91)', 'rgb(219,68,106)', 'rgb(157,42,128)', 'rgb(76,5,123)','rgb(13,9,42)'])
		/*.range([
			"#000097", "#0058FF", "#10FFEE", "#E7FF18", "#FF4800", "#850000"
		]);*/
	var filePath = "./dataset/aqi/" + 24 + "-Dec-2015_more.csv";
	var svg_side = d3.select("#side_D");
	var width = $("div.right_tip").width(),
		height = $("div.right_tip").height();
	svg_side.select("#linearGradient_D").append("stop")
		.attr("offset", "0%")
		.style("stop-color", "rgb(0,231,149)")
	svg_side.select("#linearGradient_D").append("stop")
		.attr("offset", "20%")
		.style("stop-color", "rgb(130,247,75)")
	svg_side.select("#linearGradient_D").append("stop")
		.attr("offset", "40%")
		.style("stop-color", "rgb(214,199,25)")
	svg_side.select("#linearGradient_D").append("stop")
		.attr("offset", "60%")
		.style("stop-color", "rgb(255,110,72)")
	svg_side.select("#linearGradient_D").append("stop")
		.attr("offset", "80%")
		.style("stop-color", "rgb(228,58,160)")
	svg_side.select("#linearGradient_D").append("stop")
		.attr("offset", "100%")
		.style("stop-color", "rgb(120,58,175)")
	var text = ["0", "0.6", "1.2", "1.8", "2.4"," 3.0"]
	var rectH = height * 4 / 5;
	svg_side.selectAll("text")
		.data(text).enter()
		.append("text")
		.attr("x", 20 + width / 3)
		.attr("dy", ".3em")
		.attr("fill", "white")
		.attr("y", function(d, i) {
			return height - (height - rectH) / 2 - (rectH / 5) * i;
		})
		.text(function(d) {
			return d;
		})

	svg_side.selectAll("circle")
		.data(text).enter()
		.append("circle")
		.attr("cx", 7)
		.attr("cy", function(d, i) {
			return height - (height - rectH) / 2 - (rectH / 5) * i;
		})
		.attr("r", function(d, i) {
			return 5 + i * 0.4;
		})
		.attr("fill", function(d, i) {
			return circleColor[i];
		})
	svg_side.append("rect")
		.attr("stroke", "black")
		.attr("stroke-width", 0.5)
		.attr("x", 20)
		.attr("y", (height - rectH) / 2)
		.attr("width", width / 3 - 5)
		.attr("height", rectH)
		.style("fill", "url(#linearGradient_D)");
	drawCompany();
	redrawD();
	timeLine();
	zoomD(div)
}

function redrawD() {
	if(options.bigShow == "aqi"){
		options.D.data = options.dataset.aqi["date_"+options.currentDate];
		console.log("redrawD   AQI");
		var canvas = document.getElementById('canvas_D');
		var width = canvas.width,
			height = canvas.height;
		var context = canvas.getContext("2d");
		context.clearRect(0, 0, width, height);
		context.beginPath();
		d3.select("#svg_D_map").select("g.map_g").selectAll("path")
			.attr("stroke","#ccc")
			.attr("opacity",0.5)
			.attr("fill","none")
			.on("mouseover",null)
			.on("mouseout",null)
		var pos0 = [options.D.xScaleTemp(parseFloat(options.D.data[0].split(",")[0])), options.D.yScaleTemp(parseFloat(options.D.data[0].split(",")[1]))],
			pos1 = [options.D.xScaleTemp(parseFloat(options.D.data[1].split(",")[0])), options.D.yScaleTemp(parseFloat(options.D.data[1].split(",")[1]))];
		var radius = 3 * Math.sqrt((pos0[0] - pos1[0]) * (pos0[0] - pos1[0]) + (pos0[1] - pos1[1]) * (pos0[1] - pos1[1]));
		for (var i = 0; i < options.D.data.length; ++i) {
			var pos = [options.D.xScaleTemp(parseFloat(options.D.data[i].split(",")[0])), options.D.yScaleTemp(parseFloat(options.D.data[i].split(",")[1]))];
			context.beginPath();
			context.fillStyle = options.D.colorScale(parseFloat(options.D.data[i].split(",")[2]));
			context.arc(pos[0], pos[1], radius, 0, 2 * Math.PI);
			context.fill();
		}
		context.closePath();
		d3.select("#company_g").selectAll("circle").style("display","block")
	}else if(options.bigShow == "weather"){
		var div = d3.select("div.div_D");
		var canvas = document.getElementById('canvas_D');
		var width = canvas.width,
			height = canvas.height;
		var context = canvas.getContext("2d");
		context.clearRect(0, 0, width, height);
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
		/*var svg_side = d3.select("#side_A");
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
			.attr("x", 15 + width / 3)
			.attr("dy", ".3em")
			.attr("fill", "white")
			.attr("y", function(d, i) {
				return height - (height - rectH) / 2 - (rectH / 5) * i;
			})
			.text(function(d) {
				return d;
			})
		svg_side.append("rect")
			.attr("stroke", "black")
			.attr("stroke-width", 0.5)
			.attr("x", 15)
			.attr("y", (height - rectH) / 2)
			.attr("width", width / 3 - 5)
			.attr("height", rectH)
			.style("fill", "url(#linearGradient_A)")*/
		var g_map = div.select("#svg_D_map").select("g.map_g");
		g_map.selectAll("path")
			.each(function(d) {
				//console.log(d);
				d3.select(this).attr("stroke","black");
				if(d.properties.detail){
					d.data = options.dataset.weather["date_"+options.currentDate]["id_"+d.properties.detail.split(",")[0]]
					if(d.data){
						d3.select(this).attr("fill", options.A.colorScale(parseFloat(d.data.precipitation)));
					}else{
						d3.select(this).attr("fill","#ccc");
					}
				}else{
					d3.select(this).attr("fill","#ccc");
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
		d3.select("#company_g").selectAll("circle").style("display","block")
	}else if(options.bigShow == "wind"){
		console.log("redrawB");
		d3.select("#svg_D_map").select("g.map_g").selectAll("path")
			.attr("stroke","#ccc")
			.attr("opacity",0.5)
			.attr("fill","none")
			.on("mouseover",null)
			.on("mouseout",null)
		d3.select("#company_g").selectAll("circle").style("display","none");
		options.B.data = options.dataset.wind["date_"+options.currentDate];
		var canvas = document.getElementById('canvas_D');
		var width = canvas.width,
		height = canvas.height;
		var context = canvas.getContext("2d");
		context.clearRect(0, 0, width, height);
		for (var i = 0, len = options.B.data.length; i < len; ++i) {
			var pos = [options.D.xScaleTemp(parseFloat(options.B.data[i].split(",")[0])), options.D.yScaleTemp(parseFloat(options.B.data[i].split(",")[1]))];
			//console.log(pos);
			//var color = options.B.colorScale(parseFloat(options.B.data[i].fengli));
			//console.log(options.B.data[i].fengli);
			//console.log(Math.round(options.B.data[i].fengli));
			context.beginPath();
			context.moveTo(pos[0], pos[1]);
			context.strokeStyle = options.B.colorArray[Math.round(parseFloat(options.B.data[i].split(",")[2]))]
			context.lineWidth = 2;
			context.lineTo(pos[0] + parseFloat(parseFloat(options.B.data[i].split(",")[4])) * 4, pos[1] + parseFloat(parseFloat(options.B.data[i].split(",")[5])) * 4);
			context.stroke();
			context.closePath();
		}
	}
	
}



function zoomD(container) {
	var svg_map = container.select(".svg_map"),
		svg_grad = container.select(".svg_grad");
	var zoom = d3.zoom()
		.scaleExtent([1, 2])
		.translateExtent([
			[-50, -50],
			[options.D.width + 50, options.D.height + 50]
		])
		.on("zoom", zoomed)
		.on("end", function() {
			drawCompany()
			redrawD();
		});
	svg_map.call(zoom);

	function zoomed() {
		svg_map.select("#company_g").remove();
		d3.select("#tip_company").style("display", "none");
		var c = document.getElementById('canvas_D');
		var cw = c.width,
			ch = c.height;
		c.getContext("2d").clearRect(0, 0, cw, ch);
		svg_map.select("g.map_g").attr("transform", d3.event.transform);
		svg_grad.select("g.axis_y").selectAll(".grad_line").remove();
		svg_grad.select("g.axis_x").selectAll(".grad_line").remove();
		options.D.yScaleTemp = d3.event.transform.rescaleY(options.D.yScale);
		options.D.xScaleTemp = d3.event.transform.rescaleX(options.D.xScale);
		svg_grad.select("g.axis_y").call(options.D.yAxis.scale(d3.event.transform.rescaleY(options.D.yScale)))
			.selectAll("g")
			.append("line")
			.attr("class", "grad_line")
			.attr("x1", 0)
			.attr("y1", 0)
			.attr("x2", options.D.width - options.mapMargin.left - options.mapMargin.right)
			.attr("y2", 0);
		svg_grad.select("g.axis_x").call(options.D.xAxis.scale(d3.event.transform.rescaleX(options.D.xScale)))
			.selectAll("g")
			.append("line")
			.attr("class", "grad_line")
			.attr("x1", 0)
			.attr("y1", 0)
			.attr("x2", 0)
			.attr("y2", -(options.D.height - options.mapMargin.top - options.mapMargin.bottom));
	}
}