import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import {NotFoundComponent} from "./not-found/not-found.component";
import {provideServerRouting, RenderMode } from '@angular/ssr';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting([
      {
        path: '',
        renderMode: RenderMode.Server
      },
      {
        path: '**',
        renderMode: RenderMode.Server
      }
    ])
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
