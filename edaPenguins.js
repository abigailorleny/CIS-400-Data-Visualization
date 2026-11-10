// URL: https://observablehq.com/d/bc3927d023abb907
// Title: EDA Penguins
// Author: Syracuse University (@syracuse-university10)
// Version: 48
// Runtime version: 1

const m0 = {
  id: "bc3927d023abb907@48",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# EDA Penguins`
)})
    },
    {
      name: "vegaData",
      inputs: ["require"],
      value: (function(require){return(
require("vega-datasets@3")
)})
    },
    {
      name: "penguins",
      inputs: ["vegaData"],
      value: (function(vegaData){return(
vegaData["penguins.json"]()
)})
    },
    {
      inputs: ["vl","penguins"],
      value: (function(vl,penguins){return(
vl.markPoint({size: 1, clip: true})
.data(penguins)
.encode(
  vl.x().fieldQ("Beak Length (mm)"),
  vl.y().fieldQ("Beak Depth (mm)"),
  vl.color().fieldN("Species")
).render()
)})
    },
    {
      inputs: ["vl","penguins"],
      value: (function(vl,penguins){return(
vl.markPoint({size: 1, clip: true})
.data(penguins)
.encode(
  vl.x().fieldQ("Beak Length (mm)"),
  vl.y().fieldQ("Body Mass (g)"),
   vl.color().fieldN("Species")
).render()
)})
    },
    {
      inputs: ["vl","penguins"],
      value: (function(vl,penguins){return(
vl.markPoint({size: 1, clip: true})
.data(penguins)
.encode(
  vl.x().fieldQ("Beak Depth (mm)"),
  vl.y().fieldQ("Body Mass (g)"),
   vl.color().fieldN("Species")
).render()
)})
    },
    {
      inputs: ["vl","penguins"],
      value: (function(vl,penguins){return(
vl.markPoint({size: 1, clip: true})
.data(penguins)
.encode(
  vl.x().fieldQ("Flipper Length (mm)"),
  vl.y().fieldQ("Body Mass (g)"),
  vl.color().fieldN("Species")
).render()
)})
    },
    {
      inputs: ["vl","penguins"],
      value: (function(vl,penguins){return(
vl.markPoint({size: 1, clip: true})
.data(penguins)
.encode(
  vl.x().fieldQ("Flipper Length (mm)"),
  vl.y().fieldQ("Beak Length (mm)"),
  vl.color().fieldN("Species")
).render()
)})
    },
    {
      inputs: ["vl","penguins"],
      value: (function(vl,penguins){return(
vl.markPoint({size: 1, clip: true})
.data(penguins)
.encode(
  vl.x().fieldQ("Flipper Length (mm)"),
  vl.y().fieldQ("Beak Depth (mm)"),
  vl.color().fieldN("Species")
).render()
)})
    },
    {

    }
  ]
};

const notebook = {
  id: "bc3927d023abb907@48",
  modules: [m0]
};

export default notebook;
