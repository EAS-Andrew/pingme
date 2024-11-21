"use client";
import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    color: string;
    angle: number;
    oscillationRadius: number;
    oscillationSpeed: number;
    originalX: number;
    originalY: number;
}

export default function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let lastTime = 0;
        const fps = 60;
        const interval = 1000 / fps;

        const updateCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        };

        updateCanvasSize();

        // Color palette with reduced opacity
        const colors = [
            'rgba(59, 130, 246, 0.4)', // Blue
            'rgba(99, 102, 241, 0.4)', // Indigo
            'rgba(139, 92, 246, 0.4)', // Purple
            'rgba(14, 165, 233, 0.4)', // Sky
            'rgba(255, 255, 255, 0.4)' // White
        ];

        const particles: Particle[] = [];
        const particleCount = Math.min(window.innerWidth * 0.15, 120); // Reduced count
        const connectionDistance = 150; // Reduced connection distance
        const mouseRadius = 200; // Slightly reduced mouse influence

        let mouse = {
            x: undefined as number | undefined,
            y: undefined as number | undefined,
            isPressed: false
        };

        // Create particles with subtler properties
        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            particles.push({
                x,
                y,
                originalX: x,
                originalY: y,
                size: Math.random() * 1.5 + 0.5, // Smaller particles
                speedX: Math.random() * 0.3 - 0.15, // Slower movement
                speedY: Math.random() * 0.3 - 0.15,
                opacity: Math.random() * 0.3 + 0.2, // Reduced base opacity
                color: colors[Math.floor(Math.random() * colors.length)],
                angle: Math.random() * Math.PI * 2,
                oscillationRadius: Math.random() * 30 + 30, // Reduced oscillation
                oscillationSpeed: (Math.random() * 0.01 + 0.005) * (Math.random() < 0.5 ? 1 : -1)
            });
        }

        function drawConnections(particle: Particle, index: number) {
            for (let j = index + 1; j < particles.length; j++) {
                const dx = particles[j].x - particle.x;
                const dy = particles[j].y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    const opacity = (1 - distance / connectionDistance) * 0.15; // Reduced connection opacity
                    if (ctx) {
                        ctx.beginPath();
                        // Create gradient for connection lines
                        const gradient = ctx.createLinearGradient(
                            particle.x, particle.y, particles[j].x, particles[j].y
                        );
                        gradient.addColorStop(0, particle.color.replace('0.4', `${opacity}`));
                        gradient.addColorStop(1, particles[j].color.replace('0.4', `${opacity}`));
                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 0.8; // Slightly thicker lines
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate(currentTime: number) {
            const deltaTime = currentTime - lastTime;
            if (deltaTime >= interval && ctx && canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach((particle, index) => {
                    // Oscillating movement pattern
                    if (!mouse.isPressed) {
                        particle.angle += particle.oscillationSpeed;
                        particle.x = particle.originalX + Math.cos(particle.angle) * particle.oscillationRadius * 0.3;
                        particle.y = particle.originalY + Math.sin(particle.angle) * particle.oscillationRadius * 0.3;
                    }

                    // Add base movement
                    particle.x += particle.speedX;
                    particle.y += particle.speedY;

                    // Boundary check with smooth transition
                    if (particle.x > canvas.width) particle.x = 0;
                    if (particle.x < 0) particle.x = canvas.width;
                    if (particle.y > canvas.height) particle.y = 0;
                    if (particle.y < 0) particle.y = canvas.height;

                    // Enhanced mouse interaction
                    if (mouse.x !== undefined && mouse.y !== undefined) {
                        const dx = mouse.x - particle.x;
                        const dy = mouse.y - particle.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < mouseRadius) {
                            const angle = Math.atan2(dy, dx);
                            const force = (mouseRadius - distance) / mouseRadius;
                            const repelForce = mouse.isPressed ? 4 : 2;
                            particle.x -= Math.cos(angle) * force * repelForce;
                            particle.y -= Math.sin(angle) * force * repelForce;
                            particle.opacity = Math.min(1, particle.opacity + 0.1); // Increase opacity near mouse
                        } else {
                            particle.opacity = Math.max(0.4, particle.opacity - 0.02); // Fade out when away from mouse
                        }
                    }

                    // Draw particle with glow effect
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fillStyle = particle.color.replace('0.4', `${particle.opacity}`);
                    ctx.fill();

                    // Add glow effect
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = particle.color;
                    ctx.fill();
                    ctx.shadowBlur = 0;

                    drawConnections(particle, index);
                });

                lastTime = currentTime - (deltaTime % interval);
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        // Enhanced event listeners
        const handleMouseMove = (e: MouseEvent) => {
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseDown = () => {
            mouse.isPressed = true;
        };

        const handleMouseUp = () => {
            mouse.isPressed = false;
        };

        const handleMouseLeave = () => {
            mouse.x = undefined;
            mouse.y = undefined;
            mouse.isPressed = false;
        };

        const handleResize = () => {
            updateCanvasSize();
        };
        window.addEventListener('resize', handleResize);
        if (canvas) {
            canvas.addEventListener('mousemove', handleMouseMove);
            canvas.addEventListener('mousedown', handleMouseDown);
            canvas.addEventListener('mouseup', handleMouseUp);
            canvas.addEventListener('mouseleave', handleMouseLeave);
        }

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            if (canvas) {
                canvas.removeEventListener('mousemove', handleMouseMove);
                canvas.removeEventListener('mousedown', handleMouseDown);
                canvas.removeEventListener('mouseup', handleMouseUp);
                canvas.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-auto opacity-40"
        />
    );
} 