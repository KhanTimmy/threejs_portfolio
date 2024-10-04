import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Timmy <span className="waving-hand">👋</span></p>
          <p className="hero_tag text-gray_gradient">Software Developer </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
           
            <PerspectiveCamera makeDefaultposition={[0, 0 ,30]} />
          
              <HackerRoom scale ={0.05} position={[0, 0, 0]} rotation = {[0, -Math.PI / 2, 0]}/>
              <ambientLight intensity={1} />
              <directionalLight position={[10,10,10]}/>
            

        </Canvas>
      </div>
    </section>
  )
}

export default Hero
