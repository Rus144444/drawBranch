'use strict';

window.addEventListener('load', () => {
    const canvas = document.getElementById('myCanvas-1');
    const ctx = canvas.getContext('2d');

    // Фон
    ctx.fillStyle = '#e9dedef1';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 10 лиц
    for (let i = 0; i < 10; i++) {

        let centerX;
        let centerY;

        // 5 лиц в первом ряду
        if (i < 5) {
            centerX = 80 + i * 80;
            centerY = 100;
        }

        // 5 лиц во втором ряду
        else {
            centerX = 80 + (i - 5) * 80;
            centerY = 300;
        }

        faceFunction(ctx, centerX, centerY);
    }
});


function faceFunction(ctx, centerX, centerY) {

    // =====================
    // ПРИЧЕСКА
    // =====================

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'brown';
    ctx.arc(centerX, centerY, 25, 1.1 * Math.PI, 1.9 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'brown';
    ctx.arc(centerX, centerY, 30, 1.2 * Math.PI, 1.8 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'brown';
    ctx.arc(centerX, centerY, 35, 1.3 * Math.PI, 1.7 * Math.PI);
    ctx.stroke();

    // =====================
    // ЛЕВОЕ УХО
    // =====================

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'brown';
    ctx.arc(
        centerX - 25,
        centerY,
        5,
        0.5 * Math.PI,
        1.5 * Math.PI
    );
    ctx.stroke();


    // =====================
    // ПРАВОЕ УХО
    // =====================

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'brown';
    ctx.arc(
        centerX + 25,
        centerY,
        5,
        1.5 * Math.PI,
        2.5 * Math.PI
    );
    ctx.stroke();


    // =====================
    // ЛИЦО
    // =====================

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'brown';

    ctx.arc(
        centerX,
        centerY,
        25,
        0.1 * Math.PI,
        2.9 * Math.PI
    );

    ctx.stroke();


    // =====================
    // НОС
    // =====================

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'brown';

    ctx.arc(
        centerX,
        centerY,
        1,
        0.1 * Math.PI,
        2.9 * Math.PI
    );

    ctx.stroke();


    // =====================
    // ЛЕВЫЙ ГЛАЗ
    // =====================

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'blue';

    ctx.arc(
        centerX - 10,
        centerY - 10,
        1,
        0.1 * Math.PI,
        2.9 * Math.PI
    );

    ctx.stroke();


    // =====================
    // ПРАВЫЙ ГЛАЗ
    // =====================

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'blue';

    ctx.arc(
        centerX + 10,
        centerY - 10,
        1,
        0.1 * Math.PI,
        2.9 * Math.PI
    );

    ctx.stroke();


    // =====================
    // УЛЫБКА
    // =====================

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'red';
    ctx.lineCap = 'round';

    ctx.arc(
        centerX,
        centerY,
        9,
        0.1 * Math.PI,
        0.9 * Math.PI
    );

    ctx.stroke();
}
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
    drawBranch(ctx, canvas.width / 2, canvas.height, 50, 0);
    ctx.fillStyle = '#938bc34b';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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
         ctx.strokeStyle = "#37cb24d1";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(startX - trunkWidth / 4, startY);
        ctx.quadraticCurveTo(startX - trunkWidth / 4, startY - trunkWidth, topLeftX, topLeftY);
        ctx.lineWidth = trunkWidth;
        ctx.strokeStyle = "#35752cd9";
        ctx.lineCap = 'round';
        
        ctx.stroke();

        drawBranch(ctx, topRightX, topRightY, trunkWidth * 0.7, level + 1);
        drawBranch(ctx, topLeftX, topLeftY, trunkWidth * 0.7, level + 1);
    }
}

