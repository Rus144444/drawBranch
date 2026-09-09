'use strict';

window.addEventListener('load', () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    console.log('Canvas initialized:', canvas);
    console.log('2D Context initialized:', ctx);
    drawBranch(ctx, canvas.width / 2, canvas.height, 50, 0);

}); 

function drawBranch(ctx, startX, startY, trunkWidth, level) {
    if (level < 12) {
        const changeX = 100 / (level + 1);
        const changeY = 200 / (level + 1);

        const topRightX = startX + Math.random() * changeX; 
        const topRightY = startY - Math.random() * changeY;

        const topLeftX = startX - Math.random() * changeX;
        const topLeftY = startY - Math.random() * changeY;

        ctx.beginPath();
        ctx.moveTo(startX - trunkWidth / 4, startY);
        ctx.quadraticCurveTo(startX - trunkWidth / 4, startY - trunkWidth, topRightX, topRightY);
        ctx.lineWidth = trunkWidth;
        ctx.lineCap = 'round';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(startX - trunkWidth / 4, startY);
        ctx.quadraticCurveTo(startX - trunkWidth / 4, startY - trunkWidth, topLeftX, topLeftY);
        ctx.lineWidth = trunkWidth;
        ctx.lineCap = 'round';
        ctx.stroke();
        drawBranch(ctx, topRightX, topRightY, trunkWidth * 0.7, level + 1);
        drawBranch(ctx, topLeftX, topLeftY, trunkWidth * 0.7, level + 1);
    }
}

