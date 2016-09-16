/**
 * Some basic default UIComponent settings. These are super basic!
 * Custom or complex options must be setup on the specific component.
 */
export interface UIElementOptions {

    /**
     * HTML element type to create [DEFAULT IS <div>] (e.g. <div>, <span>, <a>, etc)
     * @type {[string]}
     */
    elementType?: string;

    /**
     * Element class [OPTIONAL]
     * @type {[string, any]}
     */
    elemClass?: [string, any];

    /**
     * Element ID
     * @type {[string, any]}
     */
    elemId?: [string, any];

    /**
     * Width delta
     * @type {number}
     */
    wd: number;

    /**
     * Height delta
     * @type {number}
     */
    hd: number;

    /**
     * Background color [OPTIONAL, DEFAULTS TO: rgba(0, 0, 0, 1)]
     * @type {[string]}
     */
    bgCol?: string;

    /**
     * Border type [OPTIONAL, DEFAULTS TO border: none;]
     * @type {[string]}
     */
    border?: string;

    /**
     * Text color [duh]... [OPTIONAL, DEFAULTS TO: color: #000;]
     * @type {[string]}
     */
    textColor?: string;
}


export class UIComponent {

    makeBasicComponent(component: UIElementOptions): HTMLElement {
        return document.createElement(component.elementType)
    }
}
