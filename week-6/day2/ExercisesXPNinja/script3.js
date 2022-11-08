document.onmousemove = animatedCircles;

        function animatedCircles(event) {
            let circle = document.createElement('div');
            circle.setAttribute('class', 'circle');
            document.body.appendChild(circle);

            circle.style.left = event.clientX + 'px';
            circle.style.top = event.clientY + 'px';

            let color = "#" + Math.floor(Math.random()*16777215).toString(16);
            circle.style.borderColor = color;

            circle.style.transition = 'all .3s linear 0s';

            circle.style.left = circle.offsetLeft  + 'px';
            circle.style.top = circle.offsetTop + 'px';
            circle.style.opacity = 0;
        }