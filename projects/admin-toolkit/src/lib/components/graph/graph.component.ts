import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import ChartJS from 'chart.js';

@Component({
  selector: 'lib-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, OnChanges {

  @Input() data: any[] = [];
  @Input() hideLegend = false;
  @Input() height: number;

  private chart: ChartJS;

  @ViewChild('graphCanvas') graphCanvas: ElementRef;

  constructor() { }

  getGradientFill(): CanvasGradient {
    const height = this.height || this.graphCanvas.nativeElement.clientHeight;

    const ctx = this.graphCanvas.nativeElement.getContext('2d');
    const gradient: CanvasGradient = ctx.createLinearGradient(0, 0, 0, height);

    gradient.addColorStop(0, '#57B7E0AA');
    gradient.addColorStop(1, 'rgba(87, 183, 224, 0.13)');

    return gradient;
  }

  ngOnInit() {
    if (this.height) {
      this.graphCanvas.nativeElement.style.height = `${this.height}px`;
    }

    this.chart = new ChartJS(this.graphCanvas.nativeElement, {
      type: 'line',
      data: this.parseChartData(),
      options: {
        legend: {
           display: !this.hideLegend
        },
        scales: {
          xAxes: [{
              ticks: {
                fontFamily: 'Poppins',
                callback: () => 'JAN 30, 2018'
              },
              gridLines: {
                display: false,
              }
          }],
          yAxes: [{
              ticks: {
                beginAtZero: true,
                fontFamily: 'Poppins',
                steps: 10,
                stepSize: 1,
                padding: 10
              },
              gridLines: {
                color: '#bbbbbb',
                drawBorder: false,
                drawTicks: false,
                borderDash: [3, 4],
                zeroLineWidth: 1,
                zeroLineBorderDash: [3, 4]
              }
          }]
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  ngOnChanges() {
    this.onGraphDataChange();
  }

  onGraphDataChange() {
    if (this.chart) {
      this.chart.data = this.parseChartData();
      this.chart.update();
    }
  }

  parseChartData() {
    const labels = [];
    const datasets = [];

    this.data.forEach(item => {
      labels.push(item.label);

      datasets[0]
        ? datasets[0].data.push(item.data)
        : datasets[0] = {
            data: [item.data],
            backgroundColor: this.getGradientFill(),
            borderWidth: 1,
            borderColor: '#4AB4E1',
          };
    });

    return { labels, datasets };
  }
}
