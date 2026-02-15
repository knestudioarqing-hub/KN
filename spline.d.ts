declare module '@splinetool/react-spline' {
    import { ComponentType } from 'react';

    export interface SplineProps {
        scene: string;
        className?: string;
        onLoad?: (splineApp: any) => void;
        onMouseDown?: (e: any) => void;
        onMouseUp?: (e: any) => void;
        onMouseMove?: (e: any) => void;
        onWheel?: (e: any) => void;
        onKeyDown?: (e: any) => void;
        onKeyUp?: (e: any) => void;
    }

    const Spline: ComponentType<SplineProps>;
    export default Spline;
}

declare module '@splinetool/runtime' {
    export class Application {
        constructor(canvas: HTMLCanvasElement);
        load(url: string): Promise<void>;
        dispose(): void;
    }
}
