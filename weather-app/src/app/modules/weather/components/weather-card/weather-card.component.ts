import { weatherDatas } from 'src/app/models/inrefaces/WeatherDatas';
import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTarpDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {
  // Dados da previsão do tempo recebidos pelo componente pai
  @Input() weatherDatasInput!: weatherDatas;

  minTemperaturaIcon = faTemperatureLow;
  maxTemperaturaIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
