
function pixelart(draw,width,cor,pixels,x=0,y=0) {

    console.log("pixels",pixels);
    let qtdeLin = pixels.length
    let qtdeCol = pixels[0].length
    console.log("qtdeLin",qtdeLin);
    console.log("qtdeCol",qtdeCol);

    for(let lin=0; lin < qtdeLin; lin++) {
        for(let col=0; col < qtdeCol; col++) {
            if(pixels[lin][col] == 1) {
                draw.rect().size(width,width).move(x+col*width,y+lin*width).fill(cor)
            }
        }        
    }
}

export { pixelart }