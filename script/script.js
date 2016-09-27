window.onload = init;

function init() {

	window.options = {};
	options.end = false;
	options.currentDate = "1";
	options.currentType = "o2";
	options.A = {};
	options.B = {};
	options.C = {};
	options.D = {};
	options.bigShow = "aqi";
	options.theme = "dark";
	d3.select("#themeDark").property("checked", "true");
	d3.select("body").style("background", "black");
	options.A.projection = d3.geoEquirectangular()
		.center([119, 36.3]);
	options.projection = d3.geoEquirectangular()
		.center([119, 36.3]);
	options.path = d3.geoPath()
		.projection(options.projection);
	options.mapMargin = {
		left: 40,
		right: 5,
		bottom: 20,
		top: 5
	};
	options.dataset = [];

	d3.json("./dataset/dataset.json",function(e,dataset){
		if(e) throw e;
		options.dataset = dataset;
		d3.json("./dataset/json/topo.json", function(e3, json) {
			if (e3) {
				console.log(e3);
				return;
			}
			options.json = topojson.feature(json, json.objects.map);
			initA();
			initB();
			initC();
			initD();
			/*	timeLine();*/
			autoPlay();
		})
})




	/*d3.csv("./dataset/wind/" + options.currentDate + "-Dec-2015.csv", function(e, wind) {
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
				console.log(options.dataset);
				d3.json("./dataset/json/topo.json", function(e3, json) {
					if (e3) {
						console.log(e3);
						return;
					}
					options.json = topojson.feature(json, json.objects.map);

					d3.csv("./dataset/company/company.csv", function(er, company) {
						if (er) {
							console.log(er);
							return;
						}
						options.company = company;
						initA();
						initB();
						initC();
						initD();
					})
				})
			})
		})
	})*/

}



function addZoom(w, h, container, xAxis, yAxis, x, y) {
	container.select("g.axis").append("g").attr("class", "x-axis")
		.attr("transform", "translate(" + 0 + "," + (h - options.mapMargin.bottom) + ")")
		.call(xAxis);
	container.select("g.axis").append("g").attr("class", "y-axis")
		.attr("transform", "translate(" + (options.mapMargin.left) + "," + 0 + ")")
		.call(yAxis);
	var zoom = d3.zoom()
		.scaleExtent([1, 4])
		.translateExtent([
			[-50, -50],
			[w + 50, h + 50]
		])
		.on("zoom", zoomed);
	container.call(zoom);
	container.select("defs").select("rect")
		.attr("x", options.mapMargin.left)
		.attr("y", options.mapMargin.top)
		.attr("width", w - options.mapMargin.right - options.mapMargin.left)
		.attr("height", h - options.mapMargin.bottom - options.mapMargin.top)
	container.select("g.map_g").style("clip-path", "url(#clipRect_A)")

	function zoomed() {
		container.select("g.map_g").attr("transform", d3.event.transform)
			.selectAll("path");
		container.select("g.y-axis").selectAll(".grad_line").remove();
		container.select("g.x-axis").selectAll(".grad_line").remove();
		container.select("g.y-axis").call(yAxis.scale(d3.event.transform.rescaleY(y)))
			.selectAll("g")
			.append("line")
			.attr("class", "grad_line")
			.attr("x1", 0)
			.attr("y1", 0)
			.attr("x2", w - options.mapMargin.left - options.mapMargin.right)
			.attr("y2", 0);
		container.select("g.x-axis").call(xAxis.scale(d3.event.transform.rescaleX(x)))
			.selectAll("g")
			.append("line")
			.attr("class", "grad_line")
			.attr("x1", 0)
			.attr("y1", 0)
			.attr("x2", 0)
			.attr("y2", -(h - options.mapMargin.top - options.mapMargin.bottom));
	}
}