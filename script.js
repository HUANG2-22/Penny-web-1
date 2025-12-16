{\rtf1\ansi\ansicpg936\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset134 PingFangSC-Regular;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    const container = document.getElementById('collage-container');\
    \
    // 
\f1 \'ca\'f3\'b1\'ea\'d2\'c6\'b6\'af\'ca\'b1\'b4\'a5\'b7\'a2
\f0 \
    document.addEventListener('mousemove', (e) => \{\
        // 
\f1 \'ca\'d3\'bf\'da\'b5\'c4\'bf\'ed\'b6\'c8\'ba\'cd\'b8\'df\'b6\'c8
\f0 \
        const vw = window.innerWidth;\
        const vh = window.innerHeight;\
\
        // 
\f1 \'ca\'f3\'b1\'ea\'cf\'e0\'b6\'d4\'d3\'da\'ca\'d3\'bf\'da\'d6\'d0\'d0\'c4\'b5\'c4\'ce\'bb\'d6\'c3\'a3\'a8
\f0 -1 
\f1 \'b5\'bd
\f0  1 
\f1 \'b5\'c4\'b7\'b6\'ce\'a7\'a3\'a9
\f0 \
        // 
\f1 \'c0\'fd\'c8\'e7\'a3\'ba\'ca\'f3\'b1\'ea\'d4\'da\'d7\'ee\'d7\'f3\'b1\'df
\f0  e.clientX/vw 
\f1 \'bd\'d3\'bd\'fc
\f0  0
\f1 \'a3\'ac\'bc\'f5\'c8\'a5
\f0  0.5 
\f1 \'ba\'f3\'bd\'d3\'bd\'fc
\f0  -0.5\
        const mouseX = (e.clientX / vw) - 0.5; \
        const mouseY = (e.clientY / vh) - 0.5; \
\
        // 
\f1 \'d2\'c6\'b6\'af\'d7\'f7\'c6\'b7\'c8\'dd\'c6\'f7\'b5\'c4\'b7\'f9\'b6\'c8\'a1\'a3\'ca\'fd\'d7\'d6\'d4\'bd\'b4\'f3\'a3\'ac\'d2\'c6\'b6\'af\'d4\'bd\'be\'e7\'c1\'d2
\f0 \
        const moveRangeX = 300; // X
\f1 \'d6\'e1\'d7\'ee\'b4\'f3\'d2\'c6\'b6\'af
\f0  300 
\f1 \'cf\'f1\'cb\'d8
\f0 \
        const moveRangeY = 300; // Y
\f1 \'d6\'e1\'d7\'ee\'b4\'f3\'d2\'c6\'b6\'af
\f0  300 
\f1 \'cf\'f1\'cb\'d8
\f0 \
\
        // 
\f1 \'bc\'c6\'cb\'e3\'c8\'dd\'c6\'f7\'b5\'c4\'c6\'bd\'d2\'c6\'c1\'bf\'a1\'a3\'d7\'a2\'d2\'e2\'a3\'ba\'d5\'e2\'c0\'ef\'d0\'e8\'d2\'aa\'b5\'f7\'d5\'fb\'d2\'c6\'b6\'af\'b7\'bd\'cf\'f2\'a3\'ac\'d2\'d4\'c4\'a3\'c4\'e2
\f0 \'93
\f1 \'b8\'fa\'cb\'e6
\f0 \'94
\f1 \'bb\'f2
\f0 \'93
\f1 \'ca\'d3\'b2\'ee
\f0 \'94
\f1 \'d0\'a7\'b9\'fb
\f0 \
        // 
\f1 \'ce\'d2\'c3\'c7\'d0\'e8\'d2\'aa\'b7\'b4\'cf\'f2\'d2\'c6\'b6\'af\'c8\'dd\'c6\'f7\'a3\'ac\'b2\'c5\'c4\'dc\'c8\'c3\'d7\'f7\'c6\'b7\'d4\'da\'ca\'d3\'bf\'da\'d6\'d0\'bf\'b4\'c6\'f0\'c0\'b4\'cf\'f1\'ca\'c7\'b1\'bb\'ca\'f3\'b1\'ea\'cd\'c6\'d7\'c5\'d7\'df\'a1\'a3
\f0 \
        // 
\f1 \'d3\'c9\'d3\'da\'c4\'e3\'b5\'c4\'c8\'dd\'c6\'f7\'b1\'c8\'ca\'d3\'bf\'da\'b4\'f3\'ba\'dc\'b6\'e0\'a3\'ac\'d5\'e2\'c0\'ef\'d6\'bb\'ca\'c7\'ce\'a2\'b5\'f7\'cb\'fc\'d4\'da\'ca\'d3\'bf\'da\'d6\'d0\'b5\'c4\'bf\'c9\'bc\'fb\'c7\'f8\'d3\'f2\'a1\'a3
\f0 \
        \
        // 
\f1 \'bc\'d9\'c9\'e8\'ce\'d2\'c3\'c7\'cf\'a3\'cd\'fb\'ca\'f3\'b1\'ea\'d4\'da\'c6\'c1\'c4\'bb\'d7\'f3\'c9\'cf\'bd\'c7\'ca\'b1\'a3\'ac\'bf\'b4\'b5\'bd\'c8\'dd\'c6\'f7\'b5\'c4\'d7\'f3\'c9\'cf\'b2\'bf\'b7\'d6
\f0 \
        // 
\f1 \'ca\'f3\'b1\'ea\'d4\'da\'d7\'ee\'d7\'f3\'b1\'df\'a3\'a8
\f0 mouseX = -0.5
\f1 \'a3\'a9\'a3\'ac\'d4\'f2
\f0  translateX 
\f1 \'ce\'aa
\f0  -300 * -0.5 = +150px\
        const translateX = mouseX * moveRangeX * -1; // 
\f1 \'b3\'cb\'d2\'d4
\f0  -1 
\f1 \'ca\'b5\'cf\'d6\'b7\'b4\'cf\'f2\'d2\'c6\'b6\'af
\f0 \
        const translateY = mouseY * moveRangeY * -1; // 
\f1 \'b3\'cb\'d2\'d4
\f0  -1 
\f1 \'ca\'b5\'cf\'d6\'b7\'b4\'cf\'f2\'d2\'c6\'b6\'af
\f0 \
\
        // 
\f1 \'d3\'a6\'d3\'c3\'c6\'bd\'d2\'c6
\f0 \
        container.style.transform = `translate($\{translateX\}px, $\{translateY\}px)`;\
    \});\
\});\
\
// 
\f1 \'cc\'e1\'ca\'be\'a3\'ba\'c8\'e7\'b9\'fb\'c4\'e3\'cf\'a3\'cd\'fb\'d7\'f7\'c6\'b7\'d4\'da\'ca\'f3\'b1\'ea\'d2\'c6\'b6\'af\'ca\'b1\'d3\'d0\'b8\'fc\'c7\'bf\'b5\'c4\'cd\'cf\'d7\'a7\'b8\'d0\'a3\'ac\'bf\'c9\'d2\'d4\'d4\'f6\'bc\'d3
\f0  moveRangeX/Y 
\f1 \'b5\'c4\'ca\'fd\'d6\'b5\'a1\'a3}