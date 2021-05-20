import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public column = [
    {title:'Date',data:'Date'},
    {title:'Open',data:'Open'},
    {title:'High',data:'High'},
    {title:'Low',data:'Low'}
  ]
  public data = [
    {
      "Date": "2020-05-13",
      "Open": 78.037498,
      "High": 78.987503,
      "Low": 75.802498,
      "Close": 76.912498,
      "Adj Close": 76.39772,
      "Volume": 200622400
    },
    {
      "Date": "2020-05-14",
      "Open": 76.127502,
      "High": 77.447502,
      "Low": 75.3825,
      "Close": 77.385002,
      "Adj Close": 76.867065,
      "Volume": 158929200
    },
    {
      "Date": "2020-05-15",
      "Open": 75.087502,
      "High": 76.974998,
      "Low": 75.052498,
      "Close": 76.927498,
      "Adj Close": 76.412621,
      "Volume": 166348400
    },
    {
      "Date": "2020-05-18",
      "Open": 78.292503,
      "High": 79.125,
      "Low": 77.580002,
      "Close": 78.739998,
      "Adj Close": 78.212997,
      "Volume": 135178400
    },
    {
      "Date": "2020-05-19",
      "Open": 78.7575,
      "High": 79.629997,
      "Low": 78.252502,
      "Close": 78.285004,
      "Adj Close": 77.76104,
      "Volume": 101729600
    },
    {
      "Date": "2020-05-20",
      "Open": 79.169998,
      "High": 79.879997,
      "Low": 79.129997,
      "Close": 79.807503,
      "Adj Close": 79.273354,
      "Volume": 111504800
    },
    {
      "Date": "2020-05-21",
      "Open": 79.665001,
      "High": 80.222504,
      "Low": 78.967499,
      "Close": 79.212502,
      "Adj Close": 78.682327,
      "Volume": 102688800
    },
    {
      "Date": "2020-05-22",
      "Open": 78.942497,
      "High": 79.807503,
      "Low": 78.837502,
      "Close": 79.722504,
      "Adj Close": 79.188927,
      "Volume": 81803200
    },
    {
      "Date": "2020-05-26",
      "Open": 80.875,
      "High": 81.059998,
      "Low": 79.125,
      "Close": 79.182503,
      "Adj Close": 78.652542,
      "Volume": 125522000
    },
    {
      "Date": "2020-05-27",
      "Open": 79.035004,
      "High": 79.677498,
      "Low": 78.272499,
      "Close": 79.527496,
      "Adj Close": 78.995224,
      "Volume": 112945200
    },
    {
      "Date": "2020-05-28",
      "Open": 79.192497,
      "High": 80.860001,
      "Low": 78.907501,
      "Close": 79.5625,
      "Adj Close": 79.029984,
      "Volume": 133560800
    },
    {
      "Date": "2020-05-29",
      "Open": 79.8125,
      "High": 80.287498,
      "Low": 79.1175,
      "Close": 79.485001,
      "Adj Close": 78.953018,
      "Volume": 153532400
    },
    {
      "Date": "2020-06-01",
      "Open": 79.4375,
      "High": 80.587502,
      "Low": 79.302498,
      "Close": 80.462502,
      "Adj Close": 79.923965,
      "Volume": 80791200
    },
    {
      "Date": "2020-06-02",
      "Open": 80.1875,
      "High": 80.860001,
      "Low": 79.732498,
      "Close": 80.834999,
      "Adj Close": 80.293968,
      "Volume": 87642800
    },
    {
      "Date": "2020-06-03",
      "Open": 81.165001,
      "High": 81.550003,
      "Low": 80.574997,
      "Close": 81.279999,
      "Adj Close": 80.735992,
      "Volume": 104491200
    },
    {
      "Date": "2020-06-04",
      "Open": 81.097504,
      "High": 81.404999,
      "Low": 80.195,
      "Close": 80.580002,
      "Adj Close": 80.04068,
      "Volume": 87560400
    },
    {
      "Date": "2020-06-05",
      "Open": 80.837502,
      "High": 82.9375,
      "Low": 80.807503,
      "Close": 82.875,
      "Adj Close": 82.320328,
      "Volume": 137250400
    },
    {
      "Date": "2020-06-08",
      "Open": 82.5625,
      "High": 83.400002,
      "Low": 81.830002,
      "Close": 83.364998,
      "Adj Close": 82.807037,
      "Volume": 95654400
    },
    {
      "Date": "2020-06-09",
      "Open": 83.035004,
      "High": 86.402496,
      "Low": 83.002502,
      "Close": 85.997498,
      "Adj Close": 85.421921,
      "Volume": 147712400
    },
    {
      "Date": "2020-06-10",
      "Open": 86.974998,
      "High": 88.692497,
      "Low": 86.522499,
      "Close": 88.209999,
      "Adj Close": 87.619614,
      "Volume": 166651600
    },
    {
      "Date": "2020-06-11",
      "Open": 87.327499,
      "High": 87.764999,
      "Low": 83.870003,
      "Close": 83.974998,
      "Adj Close": 83.412964,
      "Volume": 201662400
    },
    {
      "Date": "2020-06-12",
      "Open": 86.18,
      "High": 86.949997,
      "Low": 83.555,
      "Close": 84.699997,
      "Adj Close": 84.133095,
      "Volume": 200146000
    },
    {
      "Date": "2020-06-15",
      "Open": 83.3125,
      "High": 86.419998,
      "Low": 83.144997,
      "Close": 85.747498,
      "Adj Close": 85.173584,
      "Volume": 138808800
    },
    {
      "Date": "2020-06-16",
      "Open": 87.864998,
      "High": 88.300003,
      "Low": 86.18,
      "Close": 88.019997,
      "Adj Close": 87.430885,
      "Volume": 165428800
    },
    {
      "Date": "2020-06-17",
      "Open": 88.787498,
      "High": 88.849998,
      "Low": 87.772499,
      "Close": 87.897499,
      "Adj Close": 87.309204,
      "Volume": 114406400
    }
  ];
}
