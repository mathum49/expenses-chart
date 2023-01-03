//chart data
const data = [
        {
          day: "mon",
          amount: 17.45
        },
        {
          day: "tue",
          amount: 34.91
        },
        {
          day: "wed",
          amount: 52.36
        },
        // {
        //   "day": "thu",
        //   "amount": 31.07
        // },
        // {
        //   "day": "fri",
        //   "amount": 23.39
        // },
        // {
        //   "day": "sat",
        //   "amount": 43.28
        // },
        // {
        //   "day": "sun",
        //   "amount": 25.48
        // }
      ];

const width = 800;
const height = 400;
const margin = { top: 50, bottom: 50, left: 50, right:50};

const svg = d3.select('#d3-chart')
      .append('svg')
      .attr('width', width - margin.left - margin.right)
      .attr('height', height - margin.top - margin.bottom)
      .attr("viewBox", [0, 0, width, height]);

const x = d3.scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, width - margin.right])
      .padding (0,1)

const y = d3.scaleLinear()
      .domain([0, 100])
      .range([height - margin.bottom, margin.top]);

svg
    .append('g')
    .attr('fill', 'royalblue')
    .selectAll('rect')
    .data(data.sort((a, b) => d3.descending(a.amount, b.amount)))
    .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.amount))
      .attr('title', (d) => d.amount)
      .attr("class", "rect")
      .attr("height", d => y(0) - y(d.amount))
      .attr("width", x.bandwidth());


svg.node();
