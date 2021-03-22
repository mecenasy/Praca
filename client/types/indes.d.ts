
declare module '*.jpg' {
   const value: any;
   export default value;
}
declare module '*.jpeg' {
   const value: any;
   export default value;
}
declare module "*.png" {
   const value: any;
   export default value;
}
declare module '*.svg' {
   const value: any;
   export default value;
}
declare namespace NodeJS {
   interface ProcessEnv {
      VARIABLES: string;
      NODE_ENV: 'development' | 'production';
      PORT: number;
   }
}

declare const VARIABLES: string;
declare const SERVER_BUILD: boolean;
declare const DEV: boolean;
