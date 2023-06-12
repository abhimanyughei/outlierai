import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from "openai";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, from, interval } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';
import { OpenAIResponse } from '../models/openaiResponse';



@Injectable({
  providedIn: 'root'
})
export class OpenaiService  {

  constructor(private httpClient: HttpClient) { }

  callOpenAIAPI(prompt: string): Observable<OpenAIResponse> {
    const apiKey = ''; // Replace with your OpenAI API key
    const apiUrl = 'https://api.openai.com/v1/completions';

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    });

    const httpOptions = {
      headers: headers,
    };

    try {

      return this.httpClient.post<OpenAIResponse>(apiUrl, {
        prompt,
        model: "text-davinci-003",
        max_tokens: 1000,
        temperature: 0.7,
      }, httpOptions);

    } catch (error) {
      console.error('Failed to call OpenAI API:', error);
      throw error;
    }
  }
}
