document.addEventListener('DOMContentLoaded', () => {
    const collageContainer = document.getElementById('collage-container');
    const body = document.body;

    let isDragging = false;
    let startX, startY; // 鼠标按下时的初始坐标
    let currentX, currentY; // 作品容器的当前位置
    let prevX, prevY; // 用于计算速度
    let velocityX = 0, velocityY = 0; // 拖拽速度
    let animationFrameId; // 动画帧ID，用于取消动画

    // 获取容器的初始位置
    // getComputedStyle 可以获取元素的最终计算样式
    const style = window.getComputedStyle(collageContainer);
    const matrix = new DOMMatrixReadOnly(style.transform);
    currentX = matrix.m41; // 获取 translateX 值
    currentY = matrix.m42; // 获取 translateY 值

    // 如果没有 transform 属性，初始值为0
    if (isNaN(currentX)) currentX = 0;
    if (isNaN(currentY)) currentY = 0;


    // === 鼠标事件处理 ===

    body.addEventListener('mousedown', (e) => {
        isDragging = true;
        body.classList.add('is-dragging'); // 添加拖拽时的鼠标样式
        startX = e.clientX;
        startY = e.clientY;
        prevX = e.clientX;
        prevY = e.clientY;
        
        // 停止任何正在进行的惯性动画
        cancelAnimationFrame(animationFrameId); 
    });

    body.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        // 计算鼠标移动的距离
        const dx = e.clientX - prevX;
        const dy = e.clientY - prevY;

        // 更新容器的当前位置
        currentX += dx;
        currentY += dy;

        // 更新容器的 transform 属性
        collageContainer.style.transform = `translate(${currentX}px, ${currentY}px)`;

        // 更新 prevX/Y 用于下一次计算速度
        prevX = e.clientX;
        prevY = e.clientY;

        // 实时计算拖拽速度 (用于惯性效果)
        // 可以根据需要调整乘数，以改变速度敏感度
        velocityX = dx * 2; 
        velocityY = dy * 2;
    });

    body.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        body.classList.remove('is-dragging'); // 移除拖拽时的鼠标样式
        
        // 启动惯性动画
        startInertiaAnimation();
    });

    // 阻止拖拽图片时的默认行为，例如浏览器拖拽图片到新标签页
    collageContainer.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });

    // === 惯性动画逻辑 ===
    function startInertiaAnimation() {
        // 惯性动画循环函数
        function animateInertia() {
            // 摩擦力/减速系数，值越接近1，减速越慢，滑动距离越远
            const friction = 0.95; 
            const minVelocity = 0.5; // 速度低于此值时停止动画

            velocityX *= friction;
            velocityY *= friction;

            currentX += velocityX;
            currentY += velocityY;

            collageContainer.style.transform = `translate(${currentX}px, ${currentY}px)`;

            // 如果速度仍然足够大，继续动画
            if (Math.abs(velocityX) > minVelocity || Math.abs(velocityY) > minVelocity) {
                animationFrameId = requestAnimationFrame(animateInertia);
            } else {
                // 停止动画，避免不必要的计算
                cancelAnimationFrame(animationFrameId);
                velocityX = 0;
                velocityY = 0;
            }
        }
        
        // 只有当有速度时才开始动画
        if (Math.abs(velocityX) > minVelocity || Math.abs(velocityY) > minVelocity) {
            animationFrameId = requestAnimationFrame(animateInertia);
        }
    }
});
