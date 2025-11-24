/**
 * Center text plugin for Chart.js donut charts
 */
import type { Plugin } from 'chart.js';
export interface CenterTextPluginOptions {
    value: string;
    label: string;
    valueColor?: string;
    labelColor?: string;
    valueFontSize?: string;
    labelFontSize?: string;
}
/**
 * Creates a Chart.js plugin that draws text in the center of a donut chart
 */
export declare const createCenterTextPlugin: (options: CenterTextPluginOptions) => Plugin;
//# sourceMappingURL=centerTextPlugin.d.ts.map