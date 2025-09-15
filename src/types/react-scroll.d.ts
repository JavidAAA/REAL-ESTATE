declare module "react-scroll" {
  import * as React from "react";

  interface LinkProps {
    to: string;
    containerId?: string;
    activeClass?: string;
    spy?: boolean;
    smooth?: boolean | string;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    hashSpy?: boolean;
    saveHashHistory?: boolean;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
  }

  export class Link extends React.Component<LinkProps> {}
  export { Link as LinkScroll };

  export function animateScroll(scroll: any): void;
}
