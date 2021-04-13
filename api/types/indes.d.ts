declare namespace NodeJS {
   interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT: number;
   }
}

declare const DEV: boolean;
declare const PORT: number;