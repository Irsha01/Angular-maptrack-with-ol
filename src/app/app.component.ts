import { Component, ViewChild } from '@angular/core';
import { OpenlayerMapService } from './service/ol.service';
import { AuthMapService } from './service/auth-map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public mapService: OpenlayerMapService,

    public olMapService: OpenlayerMapService
  ) {}
  map: any;
  @ViewChild('mapElement', { static: false }) mapElement: any;
  title = 'newproj';
  createMap() {
    setTimeout(() => {
      const myLatlng = {
        lat: 13.0129266666667,
        lng: 80.086635,
      };

      this.map = this.mapService.loadMap(
        this.mapElement.nativeElement,
        { lat: 13.0129266666667, lng: 80.086635 },
        false,
        false
      );

      this.mapService.setCenter(this.map, {
        lat: 13.0129266666667,
        lng: 80.086635,
      });
      this.mapService.clearLayers(this.map, [1, 2]);
      var liveTrackModel = this.getLiveTrackIcon(
        this.color['Running'],
        this.vehicleModel['CAR']
      );
      this.mapService.addMarker(
        this.map,
        myLatlng,
        'livetrack',
        liveTrackModel
      );
    }, 500);
  }

  getLiveTrackIcon = (color, path) => {
    // if (path == undefined || path == null) {
    //   path = this.vehicleModel['CAR'];
    // }
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  width="8.4666mm" height="8.4666mm" version="1.1" viewBox="0 0 846.66 846.66"  xmlns:xlink="http://www.w3.org/1999/xlink"> <path class="fil0" d="' +
      path +
      '" fill="' +
      color +
      '"/> </svg>';
    const src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    return src;
  };
  ngOnInit() {
    this.createMap();
  }

  vehicleModel = {
    CAR: 'M589.12 448.77l0 -23.39 -59.43 0 0 23.39c0.17,41.39 59.43,41.87 59.43,0zm-165.8 -448.77c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm197.38 317.2l0 -82.04c-0.08,-28.59 -22.87,-43.7 -35.82,-45.36l-32.37 -83.55c-6.05,-16 -19.29,-29.6 -44.31,-29.73l-45.61 0 -77.98 0 -46.46 0c-24.9,0.13 -38.13,13.73 -44.31,29.73l-32.37 83.55c-12.83,1.66 -35.58,16.77 -35.54,45.36l0 82.04c0,13.44 10.93,24.37 24.37,24.37l346.03 0c13.45,0 24.37,-10.89 24.37,-24.37zm-328.56 -35.78c-0.05,0 -0.05,0 -0.09,0 -0.04,0 -0.04,0 -0.08,0 -15.1,0 -27.29,-12.59 -27.25,-28.1 -0.08,-15.56 12.06,-28.15 27.09,-28.15 0.08,0 0.16,0 0.24,0 0.09,0 0.16,0 0.25,0 14.98,0 27.13,12.59 27.09,28.15 0.04,15.51 -12.19,28.1 -27.25,28.1zm131.18 -92.39l-0.28 0 -101.3 0c-8.94,0 -14.98,-9.1 -11.49,-17.35l17.06 -40.33c2.56,-6.38 7.51,-16.04 18.32,-16.2l155.02 0c10.64,0.16 13.32,6.13 18.31,16.2l17.06 40.33c3.49,8.25 -2.56,17.35 -11.49,17.35l-101.21 0 0 0zm129.27 94.42c-0.04,0 -0.04,0 -0.08,0 -0.04,0 -0.04,0 -0.08,0 -15.19,0 -27.42,-12.59 -27.5,-28.1 0.08,-15.56 12.23,-28.15 27.38,-28.15 0.08,0 0.16,0 0.24,0 0.08,0 0.16,0 0.24,0 14.87,0 27.01,12.59 27.09,28.15 -0.12,15.51 -12.34,28.1 -27.29,28.1zm-235.92 105.88l0 -23.39 -59.18 0 0 23.39c-0.08,41.87 59.18,41.39 59.18,0z',
  };
  color = {
    Running: '#1eb15d',
  };
}
