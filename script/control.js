function clickRadio(r) {
	console.log(r);
	options.currentType = d3.select(r).attr("id");
	console.log(options.currentType);
	drawCompany();
}

function timeLine() {
	var div = d3.select(".right_foot"),
		width = $("div#time_table").width(),
		height = $("div#time_table").height();
	var margin = {
		top: 30,
		right: 20,
		bottom: 30,
		left: 80
	};
	/*div.select("#time_table")
		.style("width", width - margin.left - margin.right + "px")*/
	div.select("#time_table")
		.select("#dateRange")
		.style("width", width-20+ "px")
	d3.select("#timeTick")
		.attr("width", width-20)
	div.select("#time_table")
		.select("#dateInput")
		.style("width", "75px")
	var svgW = width -20;
	var axis = d3.axisBottom()
		.scale(d3.scaleLinear().domain([1, 30]).range([5, svgW - 8]))
		.tickValues([1, 5, 10, 15, 20, 25, 30])
		.tickSizeOuter(0)
	d3.select("#timeTick")
		.append("g").attr("class", "timeAxis")
		.call(axis)
		.selectAll("text")
		.attr("fill", "white")
	//document.getElementById('dateInput').value = "2015-12-" + (options.currentDate < 10 ? "0" + options.currentDate : options.currentDate);
	/*var scale = d3.scaleLinear()
		.domain([1, 30])
		.range([margin.left, width - margin.right])
		.clamp(true)
	var axis = d3.axisTop()
		.scale(scale)
		.tickSizeOuter(0)
		.tickValues([1, 5, 10, 15, 20, 25, 30]);
	var drag = d3.drag()
		.on("start", start)
		.on("drag", draging)
		.on("end", end)
	svg.append("g").attr("class", "time-axis")
		.attr("transform", "translate(" + 0 + "," + margin.top + ")")
		.call(axis)
	svg.append("text")
		.attr("x", scale(options.currentDate))
		.attr("y", margin.top + 55)
		.attr("id", "text_tip")
		.attr("fill", "black")
		.attr("font-weight", "bold")
		.attr("text-anchor", "middle")
		.text("2015-12-" + (options.currentDate < 10 ? "0" + options.currentDate : options.currentDate))
	var slider = svg.append("path")
		.attr("d", "M0,0L-10,30L-50,30L-50,55L50,55L50,30L10,30Z")
		.attr("fill", "#ccc")
		.attr("class", "slider")
		.attr("stroke", "black")
		.attr("opacity", 0.3)
		.attr("transform", "translate(" + scale(options.currentDate) + "," + (margin.top + 5) + ")")
		.call(drag)



	function start() {
		console.log("start");
		console.log(d3.event.x);
	}

	function draging() {
		var posX = Math.round(scale.invert(d3.event.x))
		slider.attr("transform", "translate(" + (scale(posX)) + "," + (margin.top + 5) + ")")
		svg.select("#text_tip")
			.attr("x", scale(posX))
			.text("2015-12-" + (posX < 10 ? "0" + posX : posX))
		svg.select(".slider").attr("fill", "rgb(0,62,222)")
	}

	function end() {
		console.log("end");
		var date = Math.round(scale.invert(d3.event.x));
		console.log(date);
		options.currentDate = date;
		changeDate();

	}*/
}

function changeInput() {
	//var temp = document.getElementById('dateInput').value;
	console.log(temp);
	if (temp.split("-").length != 3) {
		document.getElementById('dateInput').value = "2015-12-" + (options.currentDate < 10 ? "0" + options.currentDate : options.currentDate);
		return;
	}
	if (temp.split("-")[0] != "2015" || temp.split("-")[1] != "12") {
		document.getElementById('dateInput').value = "2015-12-" + (options.currentDate < 10 ? "0" + options.currentDate : options.currentDate);
		return;
	}
	if (!parseInt(temp.split("-")[2])) {
		document.getElementById('dateInput').value = "2015-12-" + (options.currentDate < 10 ? "0" + options.currentDate : options.currentDate);
		return;
	}
	if (temp.split("-")[2] > 30 || temp.split("-")[2] < 1) {
		document.getElementById('dateInput').value = "2015-12-" + (options.currentDate < 10 ? "0" + options.currentDate : options.currentDate);
		return;
	} else {
		document.getElementById('dateRange').value = temp.split("-")[2];
		options.currentDate = temp.split("-")[2];
		changeDate();
	}
}


function changeDate() {
	if(options.end){
		options.currentDate=document.getElementById('dateRange').value ;
	}else{
		document.getElementById('dateRange').value=options.currentDate;
	}
	console.log(options.currentDate);
	//options.currentDate = document.getElementById('dateRange').value;
	//document.getElementById('dateInput').value = "2015-12-" + (options.currentDate < 10 ? "0" + options.currentDate : options.currentDate);
	//console.log(options.currentDate);
	//if (options.dataset[parseInt(options.currentDate)]) {
		redrawA();
		redrawB();
		redrawC();
		redrawD();
		drawCompany();
	/*} else {
		d3.csv("./dataset/wind/" + options.currentDate + "-Dec-2015.csv", function(e, wind) {
			if (e) {
				throw e;
			}
			d3.csv("./dataset/weather/" + options.currentDate + "-Dec-2015.csv", function(e1, weather) {
				if (e1) {
					throw e1;
				}
				d3.csv("./dataset/aqi/" + options.currentDate + "-Dec-2015.csv", function(e2, aqi) {
					if (e2) {
						throw e2;
					}
					var tempFile = {};
					tempFile.aqi = aqi;
					tempFile.wind = wind;
					tempFile.weather = weather;
					options.dataset[parseInt(options.currentDate)] = tempFile;
					redrawA();
					redrawB();
					redrawC();
					redrawD();
					drawCompany();
				})
			})
		})
	}*/
}

function changeTheme() {
	if (options.theme == "dark") {
		options.theme = "light";
		d3.select(".right_title").style("background", "#4a927e");
		d3.select("body").style("background", "white");
		d3.select("#svg_A_grad").select(".axis")
			.select(".axis_x").attr("class", "x-axis_light axis_x");
		d3.select("#svg_A_grad").select(".axis")
			.select(".axis_y").attr("class", "y-axis_light axis_y");
		d3.select("#svg_B_grad").select(".axis")
			.select(".axis_x").attr("class", "x-axis_light axis_x");
		d3.select("#svg_B_grad").select(".axis")
			.select(".axis_y").attr("class", "y-axis_light axis_y");
		d3.select("#svg_C_grad").select(".axis")
			.select(".axis_x").attr("class", "x-axis_light axis_x");
		d3.select("#svg_C_grad").select(".axis")
			.select(".axis_y").attr("class", "y-axis_light axis_y");
		d3.select("#svg_D_grad").select(".axis")
			.select(".axis_y").attr("class", "y-axis_light axis_y");
		d3.select("#svg_D_grad").select(".axis")
			.select(".axis_x").attr("class", "x-axis_light axis_x");
		d3.select("#side_A").selectAll("text")
			.attr("fill", "black")
		d3.select("#side_B").selectAll("text")
			.attr("fill", "black")
		d3.select("#side_C").selectAll("text")
			.attr("fill", "black")
		d3.select("#side_D").selectAll("text")
			.attr("fill", "black")
		d3.selectAll(".right_tip").style("color", "black")
			.style("background", "white")
		d3.select("#timeTick")
			.append("g.timeAxis").attr("class", "timeAxisLight")
		d3.select("#timeTick").selectAll("text").attr("fill", "black")
		d3.select("#theme").style("color", "black")
		d3.selectAll(".left_title").style("color", "black")
	} else {
		options.theme = "dark";
		d3.select(".right_title").style("background", "#2f2e2e");
		d3.selectAll(".left_title").style("color", "white")
		d3.select("body").style("background", "black");
		d3.select("#svg_A_grad").select(".axis")
			.select(".axis_x").attr("class", "x-axis axis_x");
		d3.select("#svg_A_grad").select(".axis")
			.select(".axis_y").attr("class", "y-axis axis_y");
		d3.select("#svg_B_grad").select(".axis")
			.select(".axis_x").attr("class", "x-axis axis_x");
		d3.select("#svg_B_grad").select(".axis")
			.select(".axis_y").attr("class", "y-axis axis_y");
		d3.select("#svg_C_grad").select(".axis")
			.select(".axis_x").attr("class", "x-axis axis_x");
		d3.select("#svg_C_grad").select(".axis")
			.select(".axis_y").attr("class", "y-axis axis_y");
		d3.select("#svg_D_grad").select(".axis")
			.select(".axis_y").attr("class", "y-axis axis_y");
		d3.select("#svg_D_grad").select(".axis")
			.select(".axis_x").attr("class", "x-axis axis_x");
		d3.select("#side_A").selectAll("text")
			.attr("fill", "white")
		d3.select("#side_B").selectAll("text")
			.attr("fill", "white")
		d3.select("#side_C").selectAll("text")
			.attr("fill", "white")
		d3.select("#side_D").selectAll("text")
			.attr("fill", "white")
		d3.selectAll(".right_tip").style("color", "white")
			.style("background", "black")
		d3.select("#timeTick")
			.append("g.timeAxisLight").attr("class", "timeAxis")
		d3.select("#timeTick").selectAll("text").attr("fill", "white")
		d3.select("#theme").style("color", "white")
	}
}


function autoPlay() {
	options.timer = d3.interval(autoChange, 3000);
}

function autoChange() {
	console.log(options.currentDate);
	options.currentDate = (parseInt(options.currentDate) + 1)+"";
	if (parseInt(options.currentDate) > 30 && options.end==false) {
		options.end = true;
		options.timer.stop();
	} else {
		changeDate();
	}
}
function changeBigShow(){
	if(d3.select("input#showBig_B").property("checked")){
		options.bigShow = "wind";
	}else if(d3.select("input#showBig_A").property("checked")){
		options.bigShow = "weather";
	}else if(d3.select("input#showBig_C").property("checked")){
		options.bigShow = "aqi";
	}
	console.log(options.bigShow);
	redrawD();
}