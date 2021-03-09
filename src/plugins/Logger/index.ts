import { App, Plugin } from '@vue/runtime-core';

import log from '@/log';

function component(context: any): string {
  return (context?.$options?.name || 'Unknown').toLocaleUpperCase();
}

export type Options = {
  active?: boolean;
};

export const Logger: Plugin = {
  install(app: App, options: Options = {}): void {
    options = { active: true, ...options };

    app.config.globalProperties.$log = function (...data: any[]): void {
      options.active && log.log(`[${component(this)}]`, ...data);
    };
    app.config.globalProperties.$debug = function (...data: any[]): void {
      options.active && log.debug(`[${component(this)}]`, ...data);
    };
    app.config.globalProperties.$warn = function (...data: any[]): void {
      options.active && log.warn(`[${component(this)}]`, ...data);
    };
    app.config.globalProperties.$error = function (...data: any[]): void {
      options.active && log.error(`[${component(this)}]`, ...data);
    };
    app.config.globalProperties.$info = function (...data: any[]): void {
      options.active && log.info(`[${component(this)}]`, ...data);
    };
    app.config.globalProperties.$trace = function (...data: any[]): void {
      options.active && log.trace(`[${component(this)}]`, ...data);
    };
  },
};

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $log: (...data: any[]) => void;
    $debug: (...data: any[]) => void;
    $warn: (...data: any[]) => void;
    $error: (...data: any[]) => void;
    $info: (...data: any[]) => void;
    $trace: (...data: any[]) => void;
  }
}
