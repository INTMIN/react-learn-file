import { Button } from 'antd';
import * as d3 from 'd3';
import React, { useEffect } from 'react';

const CanvasDiv = () => {
    let rotateX = 0;
    let rotateY = 0;

    const numCurves = 30;
    let curves = [];

    for (let i = 0; i < numCurves; i++) {
        const points = [];
        const radius = 50;
        for (let j = 0; j < 30; j++) {
            const angle = j * ((2 * Math.PI) / 30);
            points.push({
                x: radius * Math.sin(angle) + i * 10,
                y: radius * Math.cos(angle) + i * 10,
                z: j * 5, // 调整 z 增量以分隔点
            });
        }
        curves.push(points);
    }
    console.log('👍👍✌️✌️ ~ CanvasDiv ~ curves:', curves);

    const canvasRef = React.createRef(null);
    // const renderRef = React.createRef();

    const rotate = (points, angleX, angleY) => {
        const sinX = Math.sin(angleX);
        const cosX = Math.cos(angleX);
        const sinY = Math.sin(angleY);
        const cosY = Math.cos(angleY);

        return points.map((p) => {
            const y = p.y * cosX - p.z * sinX;
            const z = p.y * sinX + p.z * cosX;
            const x = p.x * cosY - z * sinY;
            return { x, y, z: z * cosY + p.x * sinY };
        });
    };
    const drawLine = (context, canvas, points, color) => {
        context.beginPath();
        const [startX, startY] = project(points[0].x, points[0].y, points[0].z, canvas);
        context.moveTo(startX, startY);
        points.forEach((point) => {
            const [x, y] = project(point.x, point.y, point.z, canvas);
            context.lineTo(x, y);
        });
        context.strokeStyle = color;
        context.stroke();
    };
    const project = (x, y, z, canvas) => {
        const scale = 500 / (500 + z);
        return [x * scale + canvas.width / 2, -y * scale + canvas.height / 2];
    };

    const render = (canvas) => {
        let nowCanvas;
        if (canvas) {
            nowCanvas = canvas;
        } else {
            nowCanvas = canvasRef.current;
        }
        const context = nowCanvas.getContext('2d');
        context.clearRect(0, 0, nowCanvas.width, nowCanvas.height);
        const colors = d3.schemeCategory10;

        curves.forEach((curve, i) => {
            const rotatedCurve = rotate(curve, rotateX, rotateY);
            drawLine(context, nowCanvas, rotatedCurve, colors[i % colors.length]);
        });
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            render(canvas);
        }
    }, [canvasRef.current]);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;

            canvas.addEventListener('mousedown', (event) => {
                let isDragging = true;
                let lastX = event.clientX;
                let lastY = event.clientY;

                const onMouseMove = (event) => {
                    if (isDragging) {
                        const dx = event.clientX - lastX;
                        const dy = event.clientY - lastY;
                        rotateY += dx * 0.01;
                        rotateX -= dy * 0.01;
                        lastX = event.clientX;
                        lastY = event.clientY;
                        render(canvas);
                    }
                };

                const onMouseUp = () => {
                    isDragging = false;
                    canvas.removeEventListener('mousemove', onMouseMove);
                    canvas.removeEventListener('mouseup', onMouseUp);
                };

                canvas.addEventListener('mousemove', onMouseMove);
                canvas.addEventListener('mouseup', onMouseUp);
            });

            // render(canvasRef.current);
        }
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <canvas id="canvas" ref={canvasRef}></canvas>
            <Button
                style={{ position: 'absolute', top: '50px', left: '100px' }}
                onClick={() => {
                    rotateX = 0;
                    rotateY = 0;
                    render();
                }}
            >
                重置
            </Button>
        </div>
    );
};

export default CanvasDiv;
