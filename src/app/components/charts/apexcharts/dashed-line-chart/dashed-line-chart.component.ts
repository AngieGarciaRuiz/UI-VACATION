import { Component, ViewChild } from "@angular/core";
import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexStroke,
    ApexMarkers,
    ApexYAxis,
    ApexGrid,
    ApexTitleSubtitle,
    ApexLegend,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    markers: ApexMarkers;
    tooltip: any; // ApexTooltip;
    yaxis: ApexYAxis;
    colors: any;
    grid: ApexGrid;
    legend: ApexLegend;
    title: ApexTitleSubtitle;
};

@Component({
    selector: 'app-dashed-line-chart',
    imports: [NgApexchartsModule],
    templateUrl: './dashed-line-chart.component.html',
    styleUrls: ['./dashed-line-chart.component.scss']
})
export class DashedLineChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Session Duration",
                    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
                },
                {
                    name: "Page Views",
                    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
                },
                {
                    name: "Total Visits",
                    data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
                }
            ],
            chart: {
                height: 350,
                type: "line",
                toolbar: {
                    show: true
                }
            },
            colors: ["#757fef", "#2db6f5", "#ee368c"],
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 5,
                curve: "straight",
                dashArray: [0, 8, 5]
            },
            title: {
                text: "Page Statistics",
                align: "left"
            },
            legend: {
                fontSize: "14px",
                tooltipHoverFormatter: function(val, opts) {
                    return (
                        val +
                        " - <strong>" +
                        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
                        "</strong>"
                    );
                }
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                labels: {
                    trim: false,
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                },
                categories: [
                    "01 Jan",
                    "02 Jan",
                    "03 Jan",
                    "04 Jan",
                    "05 Jan",
                    "06 Jan",
                    "07 Jan",
                    "08 Jan",
                    "09 Jan",
                    "10 Jan",
                    "11 Jan",
                    "12 Jan"
                ]
            },
            tooltip: {
                y: [
                    {
                        title: {
                            formatter: function(val:any) {
                                return val + " (mins)";
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function(val:any) {
                                return val + " per session";
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function(val:any) {
                                return val;
                            }
                        }
                    }
                ]
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                },
                axisBorder: {
                    show: true
                }
            }
        };
    }

}