import { Component } from '@angular/core';
import { OpenaiService } from './services/openai.service';
import { OpenAIResponse } from './models/openaiResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'outlierai';
  OutputData:OpenAIResponse = new OpenAIResponse("\nApp1 -> App2 (Threshold: 500, Actual: 900)\nApp2 -> App3 (Threshold: 200, Actual: 300)\nApp2 -> App4 (Threshold: 100, Actual: 200)\nApp2 -> App5 (Threshold: 100, Actual: 200)\nApp2 -> App6 (Threshold: 100, Actual: 200)");
  prompt = 'Below are the standard request response map for a transaction done in a trading platform, the architecture is based on microservices so there are muiltiple requests going trough differnt servicves. The data contains the call going from app to services and the maximum thresholds for the time that it should take. '+
  'From | To | Time Threshold ' +
  'App1 | App2  | 200ms' +
  'App2 | App3  | 200ms' +
  'App2 | App4  | 200ms' +
  'App2 | App5  | 500ms' +
  'App2 | App6  | 200ms' +
  'App3 | Sp1  | 100ms' +
  'App4 | Sp2  | 300ms' +
  'App5 | Sp3  | 100ms' +
  'App6 | App7  | 200ms' +
  'App6 | App8  | 100ms' +
  'App6 | Sp8  | 500ms'  ;


  constructor(private openaisvc: OpenaiService) {
  }

  Submit(){
    this.openaisvc.callOpenAIAPI(this.prompt).subscribe((x:OpenAIResponse)=> this.OutputData = x);
  }
}
