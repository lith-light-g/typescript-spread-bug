import * as React from "react";
import { style } from "./classNames";

// classNames modules is not used
export class Component extends React.Component<React.HTMLProps<HTMLDivElement>, {}> {
    constructor(props?: React.HTMLProps<HTMLDivElement>) {
        super(props);
    }
    render(): JSX.Element {
        const props: any = this.props;
        return <div
            {...props}
            className={style}
        >
            <p>Content</p>
        </div>;
    }
}

// classNames module is used
/*export class Component extends React.Component<React.HTMLProps<HTMLDivElement>, {}> {
    constructor(props?: React.HTMLProps<HTMLDivElement>) {
        super(props);
    }
    render(): JSX.Element {
        return <div
            className={style}
        >
            <p>Content</p>
        </div>;
    }
}*/
