import { RenderMode, provideServerRendering, withRoutes } from '@angular/ssr';
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
import {NotFoundComponent} from "./not-found/not-found.component";

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes([
      {
        path: '',
        renderMode: RenderMode.Server
      },
      {
        path: '**',
        renderMode: RenderMode.Server
      }
    ]))]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
