function drawCompany() {
	console.log(options.company);
	var svg = d3.select("#svg_D_map");
	svg.select("#company_g").remove();
	var g_company = svg.append("g").attr("id", "company_g")
	var colorScale = d3.scaleLinear()
		.domain([0, 0.6, 1.2, 2.0, 2.6, 3])
		.range([
			"rgb(0,231,149)", 
			"rgb(130,247,75)", 
			"rgb(214,199,25)", 
			"rgb(255,110,72)",
			 "rgb(228,58,160)","rgb(120,58,175)"
		]);

	var rScale = d3.scaleLinear()
		.domain([0, 0.5, 1])
		.range([5, 6.4, 7])
	g_company.selectAll("circle.company")
		.data(options.dataset.company).enter()
		.append("circle")
		.attr("cx", function(d) {
			return options.D.xScaleTemp(d.X);
		})
		.attr("cy", function(d) {
			return options.D.yScaleTemp(d.Y);
		})
		.attr("r", function(d) {
			if (options.currentType == "o2") {
				if (!isNaN(d['o' + options.currentDate])) {
					return rScale(d['o' + options.currentDate]) > 5 ? 5 : rScale(d['o' + options.currentDate]);
				} else {
					return 0;
				}
			} else {
				if (!isNaN(d['n' + options.currentDate])) {
					return rScale(d['n' + options.currentDate]) > 5 ? 5 : rScale(d['n' + options.currentDate]);
				} else {
					return 0;
				}
			}
		})
		.attr("fill", function(d) {
			if (options.currentType == "o2") {
				if (!isNaN(d['o' + options.currentDate])) {
					return colorScale(d['o' + options.currentDate]>3?3:d['o' + options.currentDate])
				} else {
					return "#000097";
				}
			} else {
				if (!isNaN(d['n' + options.currentDate])) {
					return colorScale(d['n' + options.currentDate]>3?3:d['n' + options.currentDate])
				} else {
					return "#000097";
				}
			}
		})
		.attr("stroke", "#ccc")
		.on("mouseover", function(d) {
			companyTip(d, d3.event)
		})
		.on("mouseout", function() {
			d3.select("#tip_company")
				.style("display", "none")
		})

}

function companyTip(data, e) {
	//console.log(data);
	var pos = [e.pageX, e.pageY];
	var div = d3.select("#tip_company");
	div.style("left", ((pos[0] + 10) > ($("body").width() - 200) ? ($("body").width() - 200) : (pos[0] + 10)) + "px")
		.style("top", pos[1] + 10 + "px")
		.style("display", "block")
	div.select(".tip_title")
		.text(data.Name_Name);
	div.select(".time")
		.text("2015-12-" + (options.currentDate < 10 ? "0" + options.currentDate : options.currentDate));
	div.select("div.value").select(".name")
		.text(options.currentType == "o2" ? "化学需氧量:" : "氨氮:")
	div.select("div.value").select("span.value")
		.text(options.currentType == "o2" ? data['o' + options.currentDate] : data['n' + options.currentDate])
	div.select("div.jiancedian").select(".jiancedianName")
		.html(function() {
			var str = "";
			data.jiance.split("-").map(function(d) {
				str += d.split("_")[1] + ",";
			})
			return str;
		})
}