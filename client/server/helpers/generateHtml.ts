import { HelmetData } from "react-helmet";
import { generateScripts } from "./generateScripts";
import { Bundle } from "../types";
import { ApplicationState } from "../../src/store/configuration/constants";

export const generateHtml = (
   body: string,
   styles: string,
   metaTags: HelmetData,
   bundlesScripts: Bundle,
   initialState: ApplicationState,
): string => {
   const html = `
      <!DOCTYPE html>
      <html ${metaTags.htmlAttributes.toString()}>
         <head>
            ${metaTags.title.toString()}
            ${metaTags.meta.toString()}
            ${metaTags.link.toString()}
            ${metaTags.script.toString()}
            ${generateScripts(bundlesScripts)}
            ${styles}
            <script>
               window.__INITIAL_STATE__ = window.__INITIAL_STATE__ || {}; window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
            </script>
         </head>
         <body ${metaTags.bodyAttributes.toString()}>
            <div id="app">${body}</div>
         </body>
      </html>
   `;

   return html;
}
