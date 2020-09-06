
function add_image1(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")


    var myimage = chart.append('image')
    .attr('xlink:href', 'me.jpeg')
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
    .attr('xlink:href', 'middlebury.jpeg')
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
    .attr('xlink:href', 'sibmi.png')
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
    .attr('xlink:href', 'aasd.png')
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
    .attr('xlink:href', 'opioid.png')
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
    .attr('xlink:href', 'middlebury.jpeg')
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
    .attr('xlink:href', 'escience.jpeg')
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
    .attr('xlink:href', 'DIS.png')
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
    .attr('xlink:href', 'HRAP.jpg')
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
    .attr('xlink:href', 'mystrength-logo.png')
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
    .attr('xlink:href', 'middlebury.jpeg')
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
    .attr('xlink:href', 'middlebury.jpeg')
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
    .attr('xlink:href', 'middlebury.jpeg')
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
    .attr('xlink:href', 'girls_inc_pnw.jpg')
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
    .attr('xlink:href', 'images.jpeg')
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
function add_image16(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', 'gears.jpg')
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
function add_image17(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', 'people.jpg')
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
function add_image18(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', 'grace_hopper.png')
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
function add_image19(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', 'grad.png')
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
function add_image20(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', 'alpine.jpeg')
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
function add_image21(parent, width, height){
    const margins = {top:10, bottom:50, left:50, right:10};
    const chart_width = width - margins.left - margins.right;
    const chart_height = height - margins.top - margins.bottom;

    let opacity = 1;

    const chart = parent.append("g")
    .attr("id", "image1")
    .style("opacity", 0)


    var myimage = chart.append('image')
    .attr('xlink:href', 'email.png')
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
