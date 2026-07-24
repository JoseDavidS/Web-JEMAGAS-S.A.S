(function () {
    var canvas = document.getElementById('particles-bg');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var particles = [];
    var particleCount = 120;
    var width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createParticle() {
        return {
            x: rand(0, width),
            y: rand(0, height),
            radius: rand(1, 3),
            speedX: rand(-0.4, 0.4),
            speedY: rand(-0.4, 0.4),
            alpha: rand(0.2, 0.8),
            alphaSpeed: rand(0.002, 0.008) * (Math.random() < 0.5 ? -1 : 1)
        };
    }
    function init() {
        particles = [];
        for (var i = 0; i < particleCount; i++) {
            particles.push(createParticle());
        }
    }

    function step(p) {
        p.x += p.speedX;
        p.y += p.speedY;

        // leve deriva aleatoria para que el movimiento no sea una línea recta
        p.speedX += rand(-0.02, 0.02);
        p.speedY += rand(-0.02, 0.02);
        p.speedX = Math.max(-0.6, Math.min(0.6, p.speedX));
        p.speedY = Math.max(-0.6, Math.min(0.6, p.speedY));

        p.alpha += p.alphaSpeed;
        if (p.alpha <= 0.15 || p.alpha >= 0.85) p.alphaSpeed *= -1;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            step(p);
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 206, 0, ' + p.alpha.toFixed(3) + ')';
            ctx.fill();
        }
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    init();
    draw();
})();
