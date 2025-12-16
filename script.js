document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('collage-container');
    
    // 鼠标移动时触发
    document.addEventListener('mousemove', (e) => {
        // 视口的宽度和高度
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        // 鼠标相对于视口中心的位置（-1 到 1 的范围）
        // 例如：鼠标在最左边 e.clientX/vw 接近 0，减去 0.5 后接近 -0.5
        const mouseX = (e.clientX / vw) - 0.5; 
        const mouseY = (e.clientY / vh) - 0.5; 

        // 移动作品容器的幅度。数字越大，移动越剧烈
        const moveRangeX = 300; // X轴最大移动 300 像素
        const moveRangeY = 300; // Y轴最大移动 300 像素

        // 计算容器的平移量。注意：这里需要调整移动方向，以模拟“跟随”或“视差”效果
        // 我们需要反向移动容器，才能让作品在视口中看起来像是被鼠标推着走。
        // 由于你的容器比视口大很多，这里只是微调它在视口中的可见区域。
        
        // 假设我们希望鼠标在屏幕左上角时，看到容器的左上部分
        // 鼠标在最左边（mouseX = -0.5），则 translateX 为 -300 * -0.5 = +150px
        const translateX = mouseX * moveRangeX * -1; // 乘以 -1 实现反向移动
        const translateY = mouseY * moveRangeY * -1; // 乘以 -1 实现反向移动

        // 应用平移
        container.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
});

// 提示：如果你希望作品在鼠标移动时有更强的拖拽感，可以增加 moveRangeX/Y 的数值。
