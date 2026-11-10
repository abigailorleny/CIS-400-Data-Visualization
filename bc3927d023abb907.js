const _0 = (md) => {
return (
md`# EDA Penguins`
)
};

const _7 = function vegaData(require){return(
require("vega-datasets@3")
)};

const _3 = function penguins(vegaData){return(
vegaData["penguins.json"]()
)};

const _15 = function(vl,penguins){return(
vl.markPoint({size: 1, clip: true})
.data(penguins)
.encode(
  vl.x().fieldQ("Beak Length (mm)"),
  vl.y().fieldQ("Beak Depth (mm)"),
  vl.color().fieldN("Species")
).render()
)};

const _25 = function(vl,penguins){return(
vl.markPoint({size: 1, clip: true})
.data(penguins)
.encode(
  vl.x().fieldQ("Beak Length (mm)"),
  vl.y().fieldQ("Body Mass (g)"),
   vl.color().fieldN("Species")
).render()
)};

const _27 = function(vl,penguins){return(
vl.markPoint({size: 1, clip: true})
.data(penguins)
.encode(
  vl.x().fieldQ("Beak Depth (mm)"),
  vl.y().fieldQ("Body Mass (g)"),
   vl.color().fieldN("Species")
).render()
)};

const _29 = function(vl,penguins){return(
vl.markPoint({size: 1, clip: true})
.data(penguins)
.encode(
  vl.x().fieldQ("Flipper Length (mm)"),
  vl.y().fieldQ("Body Mass (g)"),
  vl.color().fieldN("Species")
).render()
)};

const _31 = function(vl,penguins){return(
vl.markPoint({size: 1, clip: true})
.data(penguins)
.encode(
  vl.x().fieldQ("Flipper Length (mm)"),
  vl.y().fieldQ("Beak Length (mm)"),
  vl.color().fieldN("Species")
).render()
)};

const _33 = function(vl,penguins){return(
vl.markPoint({size: 1, clip: true})
.data(penguins)
.encode(
  vl.x().fieldQ("Flipper Length (mm)"),
  vl.y().fieldQ("Beak Depth (mm)"),
  vl.color().fieldN("Species")
).render()
)};

const _44 = () => {

};

export default function define(runtime) {
  const main = runtime.module();
  const files = [
    {name: "penguins.json", href: "./penguins.json", mimeType: "application/json", lastModified: 1770990465361.075, size: 67119}
  ];
  main.builtin("FileAttachment", runtime.fileAttachments(files));
  main.define("cell 0", ["md"], _0);
  main.define("vegaData", ["require"], _7);
  main.define("penguins", ["vegaData"], _3);
  main.define("cell 15", ["vl","penguins"], _15);
  main.define("cell 25", ["vl","penguins"], _25);
  main.define("cell 27", ["vl","penguins"], _27);
  main.define("cell 29", ["vl","penguins"], _29);
  main.define("cell 31", ["vl","penguins"], _31);
  main.define("cell 33", ["vl","penguins"], _33);
  main.define("cell 44", [], _44);
  return main;
}
