
function add_image1(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")


    var myimage = chart.append('image')
    .attr('xlink:href', '/Users/corinnebintz/Desktop/cbintz.github.io/me.jpeg')
    .attr('width', 550)
    .attr('height', 550)
    .attr("x", -30)

    const update_chart = function(){
        console.log("bar chart opacity", opacity);
        chart.transition()
        .duration(800)
        .style("opacity", opacity);
    }

    update_chart.opacity = (new_opacity)=>{
        if (new_opacity !==undefined){
            opacity = new_opacity;
            return update_chart;
        }else{
            return opacity;
        }

    }
    return update_chart;

}

function add_image2(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', '/Users/corinnebintz/Desktop/cbintz.github.io/middlebury.jpeg')
    .attr('width', 500)
    .attr('height', 500)
    .attr("x", 0)

    const update_chart = function(){
        console.log("bar chart opacity", opacity);
        chart.transition()
        .duration(800)
        .style("opacity", opacity);
    }

    update_chart.opacity = (new_opacity)=>{
        if (new_opacity !==undefined){
            opacity = new_opacity;
            return update_chart;
        }else{
            return opacity;
        }

    }
    return update_chart;

}

function add_image3(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', '/Users/corinnebintz/Desktop/cbintz.github.io/escience.jpeg')
    .attr('width', 500)
    .attr('height', 500)
    .attr("x", 0)

    const update_chart = function(){
        console.log("bar chart opacity", opacity);
        chart.transition()
        .duration(800)
        .style("opacity", opacity);
    }

    update_chart.opacity = (new_opacity)=>{
        if (new_opacity !==undefined){
            opacity = new_opacity;
            return update_chart;
        }else{
            return opacity;
        }

    }
    return update_chart;

}

function add_image4(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', '/Users/corinnebintz/Desktop/cbintz.github.io/mystrength-logo.png')
    .attr('width', 500)
    .attr('height', 500)
    .attr("x", 0)

    const update_chart = function(){
        console.log("bar chart opacity", opacity);
        chart.transition()
        .duration(800)
        .style("opacity", opacity);
    }

    update_chart.opacity = (new_opacity)=>{
        if (new_opacity !==undefined){
            opacity = new_opacity;
            return update_chart;
        }else{
            return opacity;
        }

    }
    return update_chart;

}
function add_image5(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', '/Users/corinnebintz/Desktop/cbintz.github.io/middlebury.jpeg')
    .attr('width', 500)
    .attr('height', 500)
    .attr("x", 0)

    const update_chart = function(){
        console.log("bar chart opacity", opacity);
        chart.transition()
        .duration(800)
        .style("opacity", opacity);
    }

    update_chart.opacity = (new_opacity)=>{
        if (new_opacity !==undefined){
            opacity = new_opacity;
            return update_chart;
        }else{
            return opacity;
        }

    }
    return update_chart;

}
function add_image6(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', '/Users/corinnebintz/Desktop/cbintz.github.io/middlebury.jpeg')
    .attr('width', 500)
    .attr('height', 500)
    .attr("x", 0)

    const update_chart = function(){
        console.log("bar chart opacity", opacity);
        chart.transition()
        .duration(800)
        .style("opacity", opacity);
    }

    update_chart.opacity = (new_opacity)=>{
        if (new_opacity !==undefined){
            opacity = new_opacity;
            return update_chart;
        }else{
            return opacity;
        }

    }
    return update_chart;

}





function add_image7(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', '/Users/corinnebintz/Desktop/cbintz.github.io/middlebury.jpeg')
    .attr('width', 500)
    .attr('height', 500)
    .attr("x", 0)

    const update_chart = function(){
        console.log("bar chart opacity", opacity);
        chart.transition()
        .duration(800)
        .style("opacity", opacity);
    }

    update_chart.opacity = (new_opacity)=>{
        if (new_opacity !==undefined){
            opacity = new_opacity;
            return update_chart;
        }else{
            return opacity;
        }

    }
    return update_chart;

}
function add_image8(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', '/Users/corinnebintz/Desktop/cbintz.github.io/girls_inc_pnw.jpg')
    .attr('width', 500)
    .attr('height', 500)
    .attr("x", 0)

    const update_chart = function(){
        console.log("bar chart opacity", opacity);
        chart.transition()
        .duration(800)
        .style("opacity", opacity);
    }

    update_chart.opacity = (new_opacity)=>{
        if (new_opacity !==undefined){
            opacity = new_opacity;
            return update_chart;
        }else{
            return opacity;
        }

    }
    return update_chart;

}
function add_image9(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', '/Users/corinnebintz/Desktop/cbintz.github.io/images.jpeg')
    .attr('width', 500)
    .attr('height', 500)
    .attr("x", 0)

    const update_chart = function(){
        console.log("bar chart opacity", opacity);
        chart.transition()
        .duration(800)
        .style("opacity", opacity);
    }

    update_chart.opacity = (new_opacity)=>{
        if (new_opacity !==undefined){
            opacity = new_opacity;
            return update_chart;
        }else{
            return opacity;
        }

    }
    return update_chart;

}
function add_image10(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', '/Users/corinnebintz/Desktop/cbintz.github.io/gears.jpg')
    .attr('width', 500)
    .attr('height', 500)
    .attr("x", 0)

    const update_chart = function(){
        console.log("bar chart opacity", opacity);
        chart.transition()
        .duration(800)
        .style("opacity", opacity);
    }

    update_chart.opacity = (new_opacity)=>{
        if (new_opacity !==undefined){
            opacity = new_opacity;
            return update_chart;
        }else{
            return opacity;
        }

    }
    return update_chart;

}
function add_image11(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', '/Users/corinnebintz/Desktop/cbintz.github.io/people.jpg')
    .attr('width', 500)
    .attr('height', 500)
    .attr("x", 0)

    const update_chart = function(){
        console.log("bar chart opacity", opacity);
        chart.transition()
        .duration(800)
        .style("opacity", opacity);
    }

    update_chart.opacity = (new_opacity)=>{
        if (new_opacity !==undefined){
            opacity = new_opacity;
            return update_chart;
        }else{
            return opacity;
        }

    }
    return update_chart;

}
function add_image12(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', '/Users/corinnebintz/Desktop/cbintz.github.io/grace_hopper.png')
    .attr('width', 500)
    .attr('height', 500)
    .attr("x", 0)

    const update_chart = function(){
        console.log("bar chart opacity", opacity);
        chart.transition()
        .duration(800)
        .style("opacity", opacity);
    }

    update_chart.opacity = (new_opacity)=>{
        if (new_opacity !==undefined){
            opacity = new_opacity;
            return update_chart;
        }else{
            return opacity;
        }

    }
    return update_chart;

}
function add_image13(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', '/Users/corinnebintz/Desktop/cbintz.github.io/intern.png')
    .attr('width', 500)
    .attr('height', 500)
    .attr("x", 0)

    const update_chart = function(){
        console.log("bar chart opacity", opacity);
        chart.transition()
        .duration(800)
        .style("opacity", opacity);
    }

    update_chart.opacity = (new_opacity)=>{
        if (new_opacity !==undefined){
            opacity = new_opacity;
            return update_chart;
        }else{
            return opacity;
        }

    }
    return update_chart;

}
function add_image14(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', '/Users/corinnebintz/Desktop/cbintz.github.io/smile.jpg')
    .attr('width', 500)
    .attr('height', 500)
    .attr("x", 0)

    const update_chart = function(){
        console.log("bar chart opacity", opacity);
        chart.transition()
        .duration(800)
        .style("opacity", opacity);
    }

    update_chart.opacity = (new_opacity)=>{
        if (new_opacity !==undefined){
            opacity = new_opacity;
            return update_chart;
        }else{
            return opacity;
        }

    }
    return update_chart;

}
function add_image15(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', '/Users/corinnebintz/Desktop/cbintz.github.io/email.png')
    .attr('width', 500)
    .attr('height', 500)
    .attr("x", 0)

    const update_chart = function(){
        console.log("bar chart opacity", opacity);
        chart.transition()
        .duration(800)
        .style("opacity", opacity);
    }

    update_chart.opacity = (new_opacity)=>{
        if (new_opacity !==undefined){
            opacity = new_opacity;
            return update_chart;
        }else{
            return opacity;
        }

    }
    return update_chart;

}
