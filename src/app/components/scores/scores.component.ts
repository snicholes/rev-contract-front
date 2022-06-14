import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Associate } from 'src/app/models/associate';
import { ScoreService } from 'src/app/services/score.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  associate!: Associate;
  scoreSummary!: any;
  chartColors: string[] = ['#ff7014', '#ffcf00', '#5ebce1', '#0741cb', '#099c45', '#dcfe5f', 
  '#ff7014', '#ffcf00', '#5ebce1', '#0741cb', '#099c45', '#dcfe5f',
  '#ff7014', '#ffcf00', '#5ebce1', '#0741cb', '#099c45', '#dcfe5f',
  '#ff7014', '#ffcf00', '#5ebce1', '#0741cb', '#099c45', '#dcfe5f'];

  constructor(private userServ: UserService, private scoreServ: ScoreService) { }

  ngOnInit(): void {
    this.userServ.checkLogin();
    this.associate = this.userServ.getUser()!;
    this.scoreServ.getScoreSummary(this.associate.id).subscribe(
      resp => {
        this.scoreSummary = resp;
        this.initCharts();
      }
    );
  }

  initCharts(): void {
    Chart.defaults.font.family="'apercu-regular','futura-pt-medium',sans-serif";
    Chart.defaults.font.size=16;
    let themeKeys = Object.keys(this.scoreSummary).filter(key=>key!=='Overall'&&!key.includes('Week'));

    const ctx1 = (<HTMLCanvasElement> document.getElementById('rubricScoreChart')).getContext('2d');
    const rubricScoreChart = new Chart(ctx1!, {
      type:'bar',
      data:{
        labels:themeKeys,
        datasets:[{
          label:'Theme',
          data:this.getScoreEntriesByKeys(themeKeys),
          backgroundColor:this.chartColors
        }]
      },
      options:{
        scales:{
          y:{
            beginAtZero:true,
            max:100
          }
        },
        plugins:{
          legend:{
            display:false,
            labels:{
              font:{
                family:"'apercu-regular','futura-pt-medium',sans-serif"
              }
            }
          }
        }
      }
    });

    let weekKeys = Object.keys(this.scoreSummary).filter(key=>key.includes('Week'));
    weekKeys.sort();
    const ctx2 = (<HTMLCanvasElement> document.getElementById('weekScoreChart')).getContext('2d');
    const weekScoreChart = new Chart(ctx2!, {
      type:'line',
      data:{
        labels:weekKeys,
        datasets:[{
          label:'Week',
          data:this.getScoreEntriesByKeys(weekKeys),
          fill:true,
          borderColor:this.chartColors[0],
          backgroundColor:'rgba(255,135,20,.25)',//'rgba(255,207,0,.5)',
          tension:0.1
        }]
      },
      options:{
        scales:{
          y:{
            beginAtZero:true,
            max:100
          }
        },
        plugins:{
          legend:{
            display:false,
            labels:{
              font:{
                family:"'apercu-regular','futura-pt-medium',sans-serif"
              }
            }
          }
        }
      }
    });
  }

  getScoreEntriesByKeys(keys: string[]): any[] {
    let scoreEntries = [];
    for (let key of keys) {
      scoreEntries.push(this.scoreSummary[key]);
    }
    return scoreEntries;
  }
}
