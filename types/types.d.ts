import DataTables, { Context, Api, Dom } from 'datatables.net';
export { default } from 'datatables.net';

declare class FixedHeader {
    /**
     * Defaults
     */
    static defaults: Defaults;
    /** Version */
    static version: string;
    /**
     * Kill off FH and any events
     */
    destroy(): void;
    /**
     * Enable / disable the fixed elements
     *
     * @param enable `true` to enable, `false` to disable
     */
    enable(enable: boolean, update: boolean): void;
    /**
     * Get enabled status
     */
    enabled(): boolean;
    /**
     * Set header offset
     *
     * @param offset value for headerOffset
     */
    headerOffset(offset: number): number;
    /**
     * Set footer offset
     *
     * @param offset value for footerOffset
     */
    footerOffset(offset: number): number;
    /**
     * Recalculate the position of the fixed elements and force them into place
     */
    update(force?: boolean): void;
    private c;
    private dom;
    private s;
    constructor(ctx: Context | Api, config: Options);
    /**
     * FixedHeader constructor - adding the required event listeners and
     * simple initialisation
     */
    private _init;
    /**
     * Clone a fixed item to act as a place holder for the original element
     * which is moved into a clone of the table element, and moved around the
     * document to give the fixed effect.
     *
     * @param item  'header' or 'footer'
     * @param force Force the clone to happen, or allow automatic decision
     *   (reuse existing if available)
     */
    private _clone;
    /**
     * This method sets the sticky position of the header elements to match
     * fixed columns
     *
     * @param el
     * @param sign
     */
    private _stickyPosition;
    /**
     * Reposition the floating elements to take account of horizontal page
     * scroll
     *
     * @param item The `header` or `footer`
     * @param scrollLeft Document scrollLeft
     */
    private _horizontal;
    /**
     * Change from one display mode to another. Each fixed item can be in one
     * of:
     *
     * * `in-place` - In the main DataTable
     * * `in` - Floating over the DataTable
     * * `below` - (Header only) Fixed to the bottom of the table body
     * * `above` - (Footer only) Fixed to the top of the table body
     *
     * @param mode Mode that the item should be shown in
     * @param item 'header' or 'footer'
     * @param forceChange Force a redraw of the mode, even if already in that
     *     mode.
     */
    private _modeChange;
    /**
     * Cache the positional information that is required for the mode
     * calculations that FixedHeader performs.
     */
    private _positions;
    /**
     * Mode calculation - determine what mode the fixed items should be placed
     * into.
     *
     * @param forceChange Force a redraw of the mode, even if already
     *     in that mode.
     */
    private _scroll;
    /**
     * Function to check if scrolling is enabled on the table or not
     *
     * @returns Boolean value indicating if scrolling on the table is enabled or
     * not
     */
    private _scrollEnabled;
    /**
     * Realign columns by using the colgroup tag and checking column widths
     *
     * @param itemDom Header or Footer dom object
     */
    private _widths;
}

declare module 'datatables.net' {
    interface Context {
        _fixedHeader: FixedHeader;
    }
    interface Config {
        fixedHeader?: boolean | Options;
    }
    interface Defaults {
        fixedHeader?: boolean | Options;
    }
    interface Api<T> {
        /**
         * FixedHeader methods container
         *
         * @returns Api for chaining with the additional FixedHeader methods
         */
        fixedHeader: ApiFixedHeaderMethods<T>;
    }
    interface DataTablesStatic {
        /**
         * FixedHeader class
         */
        FixedHeader: typeof FixedHeader;
    }
}
interface Defaults {
    footer: boolean;
    footerOffset: number;
    header: boolean;
    headerOffset: number;
}
interface Options extends Partial<Defaults> {
}
interface ApiFixedHeaderMethods<T> extends Api<T> {
    /**
     * Recalculate the position of the DataTable on the page and adjust the fixed element as appropriate.
     *
     * @returns The DataTables API for chaining
     */
    adjust(): Api<T>;
    /**
     * Disable the fixed elements
     *
     * @returns The DataTables API for chaining
     */
    disable(): Api<T>;
    /**
     * Enable / disable the fixed elements
     *
     * @param enable Flag to indicate if the FixedHeader elements should be enabled or disabled, default true.
     * @returns The DataTables API for chaining
     */
    enable(enable?: boolean): Api<T>;
    /**
     * Simply gets the status of FixedHeader for this table.
     *
     * @returns true if FixedHeader is enabled on this table. false otherwise.
     */
    enabled(): boolean;
    /**
     * Get the fixed footer's offset.
     *
     * @returns The current footer offset
     */
    footerOffset(): number;
    /**
     * Set the fixed footer's offset
     *
     * @param offset The offset to be set
     * @returns DataTables Api for chaining
     */
    footerOffset(offset: number): Api<T>;
    /**
     * Get the fixed header's offset.
     *
     * @returns The current header offset
     */
    headerOffset(): number;
    /**
     * Set the fixed header's offset
     *
     * @param offset The offset to be set
     * @returns The DataTables API for chaining
     */
    headerOffset(offset: number): Api<T>;
}
interface InternalDom {
    floatingHeader: null;
    thead: Dom;
    tbody: Dom;
    tfoot: Dom;
    header: {
        host: Dom | null;
        scrollAdjust: Dom | null;
        floating: Dom | null;
        floatingParent: Dom;
        limiter: Dom | null;
        placeholder: Dom | null;
        rightBlocker: Dom | null;
        leftBlocker: Dom | null;
    };
    footer: {
        host: Dom | null;
        scrollAdjust: Dom | null;
        floating: Dom | null;
        floatingParent: Dom;
        limiter: Dom | null;
        placeholder: Dom | null;
        rightBlocker: Dom | null;
        leftBlocker: Dom | null;
    };
}
interface Settings {
    dt: Api;
    position: {
        theadBottom: number;
        theadTop: number;
        tbodyTop: number;
        tbodyHeight: number;
        tbodyWidth: number;
        tfootTop: number;
        tfootBottom: number;
        width: number;
        left: number;
        tfootHeight: number;
        theadHeight: number;
        windowHeight: number;
        visible: boolean;
    };
    headerMode: string | null;
    headerOffset: number;
    footerMode: string | null;
    footerOffset: number;
    autoWidth: boolean;
    namespace: string;
    scrollLeft: {
        header: number;
        footer: number;
    };
    enable: boolean;
    autoDisable: boolean;
}

export type { Defaults, InternalDom, Options, Settings };
