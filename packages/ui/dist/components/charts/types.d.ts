/**
 * Shared types for chart components
 */
export type ChartSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface ChartDataPoint {
    label: string;
    value: number;
    color?: string;
}
export interface GaugeConfig {
    numSegments: number;
    angleStart: number;
    angleEnd: number;
    angleSpan: number;
    inactiveColor: string;
    activeStartColorRgb: [number, number, number];
    activeEndColorRgb: [number, number, number];
}
export interface CenterTextConfig {
    value: string;
    label: string;
}
export interface LineChartDataset {
    label: string;
    data: number[];
    color?: string;
    fill?: boolean;
    borderDash?: number[];
}
export interface BarChartDataset {
    label: string;
    data: number[];
    color?: string;
}
export interface PieChartDataPoint {
    label: string;
    value: number;
    color?: string;
}
export interface AreaChartDataset {
    label: string;
    data: number[];
    color?: string;
}
export type ExportFormat = 'png' | 'svg';
//# sourceMappingURL=types.d.ts.map