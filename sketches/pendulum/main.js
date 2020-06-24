
var p = new Pendulum(200, 200, 10, 10, 30, 30)

function draw(backwards){
    p.draw(backwards || false)
}

$("#submit").click(function() {
    let l1 = parseInt($("#l1").val());
    let l2 = parseInt($("#l2").val());
    let m1 = parseInt($("#m1").val());
    let m2 = parseInt($("#m2").val());
    let a1 = parseInt($("#a1").val());
    let a2 = parseInt($("#a2").val());


    p = new Pendulum(l1, l2, m1, m2, a1, a2)
})
