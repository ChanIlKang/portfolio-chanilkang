(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/workspace/portfolio-chanilkang/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/portfolio-chanilkang/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/portfolio-chanilkang/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/portfolio-chanilkang/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/portfolio-chanilkang/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/portfolio-chanilkang/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/portfolio-chanilkang/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/portfolio-chanilkang/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/portfolio-chanilkang/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Home() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
    const [showPermissionPrompt, setShowPermissionPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [debugInfo, setDebugInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Input tracking (normalized 0-1)
    const inputX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0.5);
    const inputY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0.5);
    // Spring physics config - Heavy metallic feel
    const springConfig = {
        stiffness: 150,
        damping: 30,
        mass: 2
    };
    // Apply spring physics
    const smoothX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(inputX, springConfig);
    const smoothY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(inputY, springConfig);
    // Transform to rotation values (-15deg to 15deg)
    const rotateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothX, [
        0,
        1
    ], [
        -15,
        15
    ]);
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothY, [
        0,
        1
    ], [
        15,
        -15
    ]);
    // Sheen/lighting effect
    const sheenX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothX, [
        0,
        1
    ], [
        "150%",
        "-50%"
    ]);
    const sheenY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothY, [
        0,
        1
    ], [
        "150%",
        "-50%"
    ]);
    // Handle device orientation (gyroscope)
    const handleDeviceOrientation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleDeviceOrientation]": (e)=>{
            if (e.gamma === null || e.beta === null) return;
            // gamma: left-right tilt (-90 to 90)
            // beta: front-back tilt (-180 to 180)
            const normalizedX = Math.min(Math.max((e.gamma + 30) / 60, 0), 1);
            const normalizedY = Math.min(Math.max((e.beta - 30) / 60, 0), 1);
            inputX.set(normalizedX);
            inputY.set(normalizedY);
            setDebugInfo("γ:".concat(e.gamma.toFixed(0), "° β:").concat(e.beta.toFixed(0), "°"));
        }
    }["Home.useCallback[handleDeviceOrientation]"], [
        inputX,
        inputY
    ]);
    // Request iOS permission
    const requestPermission = async ()=>{
        if (typeof DeviceOrientationEvent !== "undefined" && // @ts-expect-error - requestPermission is iOS specific
        typeof DeviceOrientationEvent.requestPermission === "function") {
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
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleMouseMove]": (e)=>{
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            inputX.set(clientX / innerWidth);
            inputY.set(clientY / innerHeight);
        }
    }["Home.useCallback[handleMouseMove]"], [
        inputX,
        inputY
    ]);
    // Handle touch movement (mobile fallback)
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleTouchMove]": (e)=>{
            if (e.touches.length === 0) return;
            const touch = e.touches[0];
            const { innerWidth, innerHeight } = window;
            inputX.set(touch.clientX / innerWidth);
            inputY.set(touch.clientY / innerHeight);
        }
    }["Home.useCallback[handleTouchMove]"], [
        inputX,
        inputY
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setMounted(true);
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.matchMedia("(pointer: coarse)").matches;
            const isSecure = location.protocol === "https:" || location.hostname === "localhost";
            if (!isMobile) {
                // Desktop - use mouse
                window.addEventListener("mousemove", handleMouseMove);
                setMode("mouse");
            } else if (!isSecure) {
                // Mobile but not HTTPS - use touch only
                setDebugInfo("HTTPS required for gyro");
                window.addEventListener("touchmove", handleTouchMove);
                setMode("touch");
            } else if (typeof DeviceOrientationEvent !== "undefined" && // @ts-expect-error - requestPermission is iOS specific
            typeof DeviceOrientationEvent.requestPermission === "function") {
                // iOS 13+ - need permission
                setShowPermissionPrompt(true);
                // Also add touch as backup
                window.addEventListener("touchmove", handleTouchMove);
            } else if (typeof DeviceOrientationEvent !== "undefined") {
                // Android or older iOS - try gyro directly
                window.addEventListener("deviceorientation", handleDeviceOrientation);
                window.addEventListener("touchmove", handleTouchMove);
                // Check if gyro actually works after a short delay
                setTimeout({
                    "Home.useEffect": ()=>{
                        if (mode === "none") {
                            setMode("touch");
                            setDebugInfo("Gyro not available");
                        }
                    }
                }["Home.useEffect"], 1000);
                setMode("gyro");
            } else {
                // No gyro support - touch only
                window.addEventListener("touchmove", handleTouchMove);
                setMode("touch");
            }
            return ({
                "Home.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("touchmove", handleTouchMove);
                    window.removeEventListener("deviceorientation", handleDeviceOrientation);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        handleMouseMove,
        handleTouchMove,
        handleDeviceOrientation,
        mode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: containerRef,
        className: "h-screen w-full bg-black flex items-center justify-center overflow-hidden touch-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-4 left-4 text-white/50 text-xs font-mono z-50",
                children: [
                    "Mode: ",
                    mode,
                    " ",
                    debugInfo && "| ".concat(debugInfo)
                ]
            }, void 0, true, {
                fileName: "[project]/workspace/portfolio-chanilkang/src/app/page.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showPermissionPrompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -20
                    },
                    onClick: requestPermission,
                    className: "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium active:bg-white/30 transition-colors",
                    children: "탭하여 기울기 인터랙션 활성화 ✨"
                }, void 0, false, {
                    fileName: "[project]/workspace/portfolio-chanilkang/src/app/page.tsx",
                    lineNumber: 181,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/workspace/portfolio-chanilkang/src/app/page.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mode === "touch" && mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        delay: 2
                    },
                    className: "fixed bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs",
                    children: "화면을 터치하고 드래그해보세요"
                }, void 0, false, {
                    fileName: "[project]/workspace/portfolio-chanilkang/src/app/page.tsx",
                    lineNumber: 196,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/workspace/portfolio-chanilkang/src/app/page.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                style: {
                    perspective: "1200px",
                    perspectiveOrigin: "center center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.8,
                            z: -200
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            z: 0
                        },
                        transition: {
                            duration: 1.5,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        style: {
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d"
                        },
                        className: "relative w-[70vw] max-w-2xl aspect-square",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/imgs/dmt-glassmorphism.png",
                                alt: "Antigravity Hero - CIK Logo",
                                fill: true,
                                priority: true,
                                className: "object-contain",
                                style: {
                                    transform: "translateZ(50px)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/workspace/portfolio-chanilkang/src/app/page.tsx",
                                lineNumber: 241,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute inset-0 pointer-events-none",
                                style: {
                                    background: "radial-gradient(\n                    circle at 50% 50%,\n                    rgba(255, 255, 255, 0.15) 0%,\n                    rgba(255, 255, 255, 0.05) 30%,\n                    transparent 70%\n                  )",
                                    x: sheenX,
                                    y: sheenY,
                                    transform: "translateZ(60px)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/workspace/portfolio-chanilkang/src/app/page.tsx",
                                lineNumber: 253,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute inset-0 -z-10",
                                style: {
                                    background: "radial-gradient(\n                    ellipse at center,\n                    rgba(120, 120, 255, 0.1) 0%,\n                    transparent 60%\n                  )",
                                    transform: "translateZ(-20px) scale(1.5)",
                                    filter: "blur(40px)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/workspace/portfolio-chanilkang/src/app/page.tsx",
                                lineNumber: 269,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspace/portfolio-chanilkang/src/app/page.tsx",
                        lineNumber: 218,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/workspace/portfolio-chanilkang/src/app/page.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/workspace/portfolio-chanilkang/src/app/page.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none -z-10",
                style: {
                    background: "radial-gradient(\n            ellipse 80% 50% at 50% 50%,\n            rgba(30, 30, 60, 0.4) 0%,\n            transparent 50%\n          )"
                }
            }, void 0, false, {
                fileName: "[project]/workspace/portfolio-chanilkang/src/app/page.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspace/portfolio-chanilkang/src/app/page.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s(Home, "zKTMBoeaXVPZLwM6kbQjYbN8gps=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$portfolio$2d$chanilkang$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=workspace_portfolio-chanilkang_src_app_page_tsx_aefedb20._.js.map