(function () {
    var canvas = document.getElementById('particles-bg');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var particles = [];
    var particleCount = 150;
    var maxDistance = 150;
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
            radius: rand(2, 4),
            speedX: rand(-0.4, 0.4),
            speedY: rand(-0.4, 0.4),
            alpha: rand(0.2, 0.8),
            alphaSpeed: rand(0.002, 0.008) * (Math.random() < 0.5 ? -1 : 1),
            linkChance: Math.random()
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

    function drawLinks() {
        for (var i = 0; i < particles.length; i++) {
            var a = particles[i];
            for (var j = i + 1; j < particles.length; j++) {
                var b = particles[j];
                var dx = a.x - b.x;
                var dy = a.y - b.y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist >= maxDistance) continue;

                // selección aleatoria fija por par (no se recalcula cada frame) para que las líneas no titilen
                if ((a.linkChance + b.linkChance) % 1 > 0.5) continue;

                var opacity = (1 - dist / maxDistance) * 0.4;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.strokeStyle = 'rgba(255, 206, 0, ' + opacity.toFixed(3) + ')';
                ctx.lineWidth = 1.8;
                ctx.stroke();
            }
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        for (var i = 0; i < particles.length; i++) {
            step(particles[i]);
        }
        drawLinks();
        for (var k = 0; k < particles.length; k++) {
            var p = particles[k];
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
