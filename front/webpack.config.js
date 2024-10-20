
module.exports = {
    mode:'development',
    entry : "./scripts/index.js",

    output: {
    path: __dirname + "/public",
    filename: "bundle.js"}
}

// module.exports = {
    
//   entry: {
//     index:"./scripts/index.js",
//     films:"./scripts/formulario.js",
//     carousel:"./scripts/renderCarousel.js",
//     navbar:"./scripts/renderNavBar.js"
// },

//   output: {
//     path: __dirname + "/browser",
//     filename: "[name].js",
//   },


// };