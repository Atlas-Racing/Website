"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, Html, OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const modelPath = "/models/carGLTF.glb";

function CarModel() {
  const { scene } = useGLTF(modelPath);

  return <primitive object={scene} />;
}

function ModelStatus() {
  const { active, errors, progress } = useProgress();

  if (errors.length > 0) {
    return (
      <p className="text-sm text-red-300" role="alert">
        The model could not be loaded from {modelPath}. Check that the file is in
        public/models and refresh the page.
      </p>
    );
  }

  if (active) {
    return (
      <p className="text-sm text-white/60" aria-live="polite">
        Loading model: {Math.round(progress)}%
      </p>
    );
  }

  return null;
}

export default function ModelTestPage() {
  const [isRotating, setIsRotating] = useState(true);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
      className="container mx-auto min-h-[80vh] px-4 py-12 xl:py-16"
    >
      <header className="mb-8 text-center">
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-accent">
          Interactive CAD Preview
        </p>
        <h1 className="h1 mb-4">
          Model <span className="text-accent">Viewer</span>
        </h1>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
          Drag to rotate the model, scroll to zoom, and use the control below to
          pause or resume the slow automatic rotation.
        </p>
      </header>

      <section
        aria-label="Interactive car model"
        className="overflow-hidden rounded-2xl border border-accent/40 bg-white/[0.03] shadow-2xl"
      >
        <div className="flex min-h-16 flex-wrap items-center justify-between gap-4 border-b border-white/10 px-4 py-3 md:px-6">
          <ModelStatus />
          <button
            type="button"
            aria-pressed={isRotating}
            onClick={() => setIsRotating((rotating) => !rotating)}
            className="rounded-lg border border-accent/60 bg-accent px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {isRotating ? "Pause rotation" : "Resume rotation"}
          </button>
        </div>

        <div className="h-[55vh] min-h-[360px] max-h-[760px] w-full">
          <Canvas
            camera={{ position: [8, 6, 10], fov: 40 }}
            dpr={[1, 1.5]}
            fallback={
              <div className="flex h-full items-center justify-center text-white/70">
                WebGL is not available in this browser.
              </div>
            }
          >
            <color attach="background" args={["#1b2a39"]} />
            <ambientLight intensity={1.5} />
            <directionalLight position={[8, 10, 7]} intensity={2.2} />
            <directionalLight position={[-8, 4, -6]} intensity={1} />

            <Suspense
              fallback={
                <Html center>
                  <p className="whitespace-nowrap rounded-lg bg-primary/90 px-4 py-2 text-sm text-white">
                    Loading 3D model...
                  </p>
                </Html>
              }
            >
              <Bounds fit clip observe margin={1.2}>
                <CarModel />
              </Bounds>
            </Suspense>

            <OrbitControls
              makeDefault
              autoRotate={isRotating}
              autoRotateSpeed={0.35}
              enableDamping
              dampingFactor={0.08}
            />
          </Canvas>
        </div>
      </section>
    </motion.main>
  );
}
