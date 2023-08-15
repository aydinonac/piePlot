function draw(score, nQues, category) {
    
    document.getElementById("demo").innerHTML="You scored " + 
    score + "/" + nQues + " in " + "'" + category + "'"
    
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    
    ctx.strokeStyle= '#202';
    ctx.lineWidth = 1;
    var a = 205; b = 180; r=150;  // Centre(a,b) and radius(r) of circle
    var n=60;  // Split circle into 60 mini-sectors
    var s= 2*Math.PI/n  // Angle(radians) for one mini-sector
    var q = n/nQues  // number of mini-sectors per question sector

    for (c=0; c<(q*score); c=c+q) {pie('green')}
    for (c=(q*score); c<n-0.1; c=c+q) {pie('red')}
    
    function pie(col) {
        ctx.fillStyle = col
        ctx.beginPath();
        ctx.moveTo(a, b)
        for (let i=0; i<=q; i=i+s) {
            ctx.lineTo(a+(r*Math.cos((c+i)*s)), b+(r*Math.sin((c+i)*s)));
        }
        ctx.closePath();
        ctx.fill()
        ctx.stroke();
    }
}
draw(3, 11, 'Literature')
