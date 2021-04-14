declare namespace NodeJS {
   interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT: number;
      MONGO_DB_SERVER: string;
      MONGO_DB_USER: string;
      MONGO_DB_PASSWORD: string;
      MONGO_DB_DATA: string;
      CORS_ORIGIN_PATH: string;
   }
}

declare const DEV: boolean;
declare const PORT: number;
declare const MONGO_DB_SERVER: string;
declare const MONGO_DB_USER: string;
declare const MONGO_DB_PASSWORD: string;
declare const MONGO_DB_DATA: string;
declare const CORS_ORIGIN_PATH: string;
