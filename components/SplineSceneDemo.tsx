import React from 'react';
import { SplineScene } from "@/components/ui/spline";

export function SplineSceneDemo() {
    return (
        <div className="w-full h-[500px] md:h-[600px] relative">
            <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
            />
        </div>
    )
}
