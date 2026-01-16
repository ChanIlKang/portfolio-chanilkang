"use client";

import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

type InteractionMode = "mouse" | "gyro" | "touch" | "none";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<InteractionMode>("none");
  const [showPermissionPrompt, setShowPermissionPrompt] = useState(false);
  const [debugInfo, setDebugInfo] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Input tracking (normalized 0-1)
  const inputX = useMotionValue(0.5);
  const inputY = useMotionValue(0.5);

  // Spring physics config - Heavy metallic feel
  const springConfig = {
    stiffness: 150,
    damping: 30,
    mass: 2,
  };

  // Apply spring physics
  const smoothX = useSpring(inputX, springConfig);
  const smoothY = useSpring(inputY, springConfig);

  // Transform to rotation values (-15deg to 15deg)
  const rotateY = useTransform(smoothX, [0, 1], [-15, 15]);
  const rotateX = useTransform(smoothY, [0, 1], [15, -15]);

  // Sheen/lighting effect
  const sheenX = useTransform(smoothX, [0, 1], ["150%", "-50%"]);
  const sheenY = useTransform(smoothY, [0, 1], ["150%", "-50%"]);

  // Handle device orientation (gyroscope)
  const handleDeviceOrientation = useCallback(
    (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return;

      // gamma: left-right tilt (-90 to 90)
      // beta: front-back tilt (-180 to 180)
      const normalizedX = Math.min(Math.max((e.gamma + 30) / 60, 0), 1);
      const normalizedY = Math.min(Math.max((e.beta - 30) / 60, 0), 1);

      inputX.set(normalizedX);
      inputY.set(normalizedY);
      setDebugInfo(`γ:${e.gamma.toFixed(0)}° β:${e.beta.toFixed(0)}°`);
    },
    [inputX, inputY]
  );

  // Request iOS permission
  const requestPermission = async () => {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      // @ts-expect-error - requestPermission is iOS specific
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      try {
        // @ts-expect-error - requestPermission is iOS specific
        const permission = await DeviceOrientationEvent.requestPermission();
        if (permission === "granted") {
          window.addEventListener("deviceorientation", handleDeviceOrientation);
          setMode("gyro");
          setShowPermissionPrompt(false);
        } else {
          // Permission denied - fallback to touch
          setMode("touch");
          setShowPermissionPrompt(false);
        }
      } catch (error) {
        console.error("Permission error:", error);
        setMode("touch");
        setShowPermissionPrompt(false);
      }
    }
  };

  // Handle mouse movement (desktop)
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      inputX.set(clientX / innerWidth);
      inputY.set(clientY / innerHeight);
    },
    [inputX, inputY]
  );

  // Handle touch movement (mobile fallback)
  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const { innerWidth, innerHeight } = window;
      inputX.set(touch.clientX / innerWidth);
      inputY.set(touch.clientY / innerHeight);
    },
    [inputX, inputY]
  );

  useEffect(() => {
    setMounted(true);

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.matchMedia("(pointer: coarse)").matches;

    const isSecure =
      location.protocol === "https:" || location.hostname === "localhost";

    if (!isMobile) {
      // Desktop - use mouse
      window.addEventListener("mousemove", handleMouseMove);
      setMode("mouse");
    } else if (!isSecure) {
      // Mobile but not HTTPS - use touch only
      setDebugInfo("HTTPS required for gyro");
      window.addEventListener("touchmove", handleTouchMove);
      setMode("touch");
    } else if (
      typeof DeviceOrientationEvent !== "undefined" &&
      // @ts-expect-error - requestPermission is iOS specific
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      // iOS 13+ - need permission
      setShowPermissionPrompt(true);
      // Also add touch as backup
      window.addEventListener("touchmove", handleTouchMove);
    } else if (typeof DeviceOrientationEvent !== "undefined") {
      // Android or older iOS - try gyro directly
      window.addEventListener("deviceorientation", handleDeviceOrientation);
      window.addEventListener("touchmove", handleTouchMove);

      // Check if gyro actually works after a short delay
      setTimeout(() => {
        if (mode === "none") {
          setMode("touch");
          setDebugInfo("Gyro not available");
        }
      }, 1000);

      setMode("gyro");
    } else {
      // No gyro support - touch only
      window.addEventListener("touchmove", handleTouchMove);
      setMode("touch");
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, [handleMouseMove, handleTouchMove, handleDeviceOrientation, mode]);

  return (
    <main
      ref={containerRef}
      className="h-screen w-full bg-black flex items-center justify-center overflow-hidden touch-none"
    >
      {/* Debug Info - temporary */}
      <div className="fixed top-4 left-4 text-white/50 text-xs font-mono z-50">
        Mode: {mode} {debugInfo && `| ${debugInfo}`}
      </div>

      {/* iOS Permission Prompt */}
      <AnimatePresence>
        {showPermissionPrompt && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onClick={requestPermission}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium active:bg-white/30 transition-colors"
          >
            탭하여 기울기 인터랙션 활성화 ✨
          </motion.button>
        )}
      </AnimatePresence>

      {/* Touch hint for touch mode */}
      <AnimatePresence>
        {mode === "touch" && mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs"
          >
            화면을 터치하고 드래그해보세요
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Perspective Container */}
      <div
        className="relative"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "center center",
        }}
      >
        <AnimatePresence>
          {mounted && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                z: -200,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-[70vw] max-w-2xl aspect-square"
            >
              {/* Main Image */}
              <Image
                src="/imgs/dmt-glassmorphism.png"
                alt="Antigravity Hero - CIK Logo"
                fill
                priority
                className="object-contain"
                style={{
                  transform: "translateZ(50px)",
                }}
              />

              {/* Sheen/Lighting overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(
                    circle at 50% 50%,
                    rgba(255, 255, 255, 0.15) 0%,
                    rgba(255, 255, 255, 0.05) 30%,
                    transparent 70%
                  )`,
                  x: sheenX,
                  y: sheenY,
                  transform: "translateZ(60px)",
                }}
              />

              {/* Subtle glow effect underneath */}
              <motion.div
                className="absolute inset-0 -z-10"
                style={{
                  background: `radial-gradient(
                    ellipse at center,
                    rgba(120, 120, 255, 0.1) 0%,
                    transparent 60%
                  )`,
                  transform: "translateZ(-20px) scale(1.5)",
                  filter: "blur(40px)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Ambient background glow */}
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(
            ellipse 80% 50% at 50% 50%,
            rgba(30, 30, 60, 0.4) 0%,
            transparent 50%
          )`,
        }}
      />
    </main>
  );
}
