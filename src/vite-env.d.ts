/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module "*.svg?component" {
    import type { ComponentType, SVGProps } from "react";
    const component: ComponentType<SVGProps<SVGSVGElement>>;
    export default component;
}