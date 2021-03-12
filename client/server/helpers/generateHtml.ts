import { HelmetData } from "react-helmet";
import { generateScripts } from "./generateScripts";
import { Bundle } from "../types";

export const generateHtml = (
   body: string,
   styles: string,
   metaTags: HelmetData,
   bundlesScripts: Bundle
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
         </head>
         <body ${metaTags.bodyAttributes.toString()}>
            <div id="app">${body}</div>
         </body>
      </html>
   `;

   return html;
}
