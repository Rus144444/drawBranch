'use strict';
window.addEventListener('load', () => {
    const canvas = document.getElementById('myCanvas-1');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#e9dedef1';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // прическа 
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "brown";
    ctx.arc(canvas.width / 2, canvas.height / 2, 125, 1.1 * Math.PI, 1.9  * Math.PI, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "brown";
    ctx.arc(canvas.width / 2, canvas.height / 2, 130, 1.2 * Math.PI, 1.8  * Math.PI, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "brown";
    ctx.arc(canvas.width / 2, canvas.height / 2, 135, 1.3 * Math.PI, 1.7  * Math.PI, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "brown";
    ctx.arc(canvas.width / 2, canvas.height / 2, 140, 1.4 * Math.PI, 1.6  * Math.PI, false);
    ctx.stroke();

    // ухо левое
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "brown";
    ctx.arc(canvas.width / 2 - 120, canvas.height / 2, 20, 0.5 * Math.PI, 1.5  * Math.PI, false);
    ctx.stroke();

    // ухо правое
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "brown";
    ctx.arc(canvas.width / 2 + 120, canvas.height / 2, 20, 1.5 * Math.PI, 2.5  * Math.PI, false);
    ctx.stroke();

    // круг, морда 
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "brown";
    ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0.1 * Math.PI, 2.9  * Math.PI, false);
    ctx.stroke();

    // нос
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "brown";
    ctx.arc(canvas.width / 2, canvas.height / 2 + 20, 10, 0.1 * Math.PI, 2.9  * Math.PI, false);
    ctx.stroke();

    // глаза 
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "blue";
    ctx.arc(canvas.width / 2 - 50, canvas.height / 2 - 50, 10, 0.1 * Math.PI, 2.9  * Math.PI, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "blue";
    ctx.arc(canvas.width / 2 + 50, canvas.height / 2 - 50, 10, 0.1 * Math.PI, 2.9  * Math.PI, false);
    ctx.stroke();


    // улыбка
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "red";
    ctx.lineCap = "round";
    ctx.arc(canvas.width / 2, canvas.height / 2, 95, 0.1 * Math.PI, 0.9  * Math.PI, false);
    ctx.stroke();
});

window.addEventListener('load', () => {
    const canvas = document.getElementById('myCanvas-2');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;

    ctx.moveTo(canvas.width, canvas.height);
    ctx.lineTo(0, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;

    ctx.moveTo(canvas.width / 2, canvas.height);
    ctx.lineTo(canvas.width / 2, 0 );
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 2;

    ctx.moveTo(canvas.width, canvas.height / 2);
    ctx.lineTo(0, canvas.height / 2 );
    ctx.stroke();
}); 


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

