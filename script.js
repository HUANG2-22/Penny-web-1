document.addEventListener('DOMContentLoaded', () => {
    const collageContainer = document.getElementById('collage-container');
    
    // 获取容器的当前大小，用于计算更精确的移动范围
    // 注意：这里需要考虑容器是 300vw / 300vh 的情况
    const containerWidth = collageContainer.offsetWidth;
    const containerHeight = collageContainer.offsetHeight;

    document.addEventListener('mousemove', (e) => {
        // 视口的宽度和高度
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        // 鼠标在视口中的相对位置 (0 到 1)
        const mouseX = e.clientX / vw;
        const mouseY = e.clientY / vh;

        // 计算容器的移动范围。
        // 例如：如果容器宽 300vw (是 vw 的 3 倍)，那么可移动的范围就是 200vw。
        // 我们希望当鼠标在屏幕左侧时，容器向右移动，显示容器的左侧部分。
        // 当鼠标在屏幕右侧时，容器向左移动，显示容器的右侧部分。
        
        // offsetX = (containerWidth - vw) 是容器超出视口的部分，即可以移动的最大距离
        // (mouseX - 0.5) * 2 将鼠标的 0-1 范围映射到 -1 到 1
        // 乘以 -1 是因为鼠标向右移动时，我们希望容器向左移动 (即 translateX 变为负值)

        const offsetX = (containerWidth - vw) * mouseX * -1;
        const offsetY = (containerHeight - vh) * mouseY * -1;
        
        // 应用平移
        collageContainer.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});
