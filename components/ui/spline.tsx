import { Suspense, lazy, forwardRef, useImperativeHandle, useRef } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

export interface SplineSceneRef {
    emitEvent: (eventName: string, target: string) => void
    setVariable: (name: string, value: any) => void
    getVariable: (name: string) => any
    play: () => void
    stop: () => void
    pauseGameControls: () => void
    resumeGameControls: () => void
}

interface SplineSceneProps {
    scene: string
    className?: string
    onLoad?: (splineApp: any) => void
}

export const SplineScene = forwardRef<SplineSceneRef, SplineSceneProps>(
    ({ scene, className, onLoad }, ref) => {
        const splineRef = useRef<any>(null)

        useImperativeHandle(ref, () => ({
            emitEvent: (eventName, target) => 
                splineRef.current?.emitEvent(eventName, target),
            setVariable: (name, value) => 
                splineRef.current?.setVariable(name, value),
            getVariable: (name) => 
                splineRef.current?.getVariable(name),
            play: () => splineRef.current?.play(),
            stop: () => splineRef.current?.stop(),
            pauseGameControls: () => splineRef.current?.pauseGameControls(),
            resumeGameControls: () => splineRef.current?.resumeGameControls(),
        }))

        return (
            <Suspense
                fallback={
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
                    </div>
                }
            >
                <Spline
                    scene={scene}
                    className={className}
                    onLoad={(app) => {
                        splineRef.current = app
                        onLoad?.(app)
                    }}
                />
            </Suspense>
        )
    }
)
