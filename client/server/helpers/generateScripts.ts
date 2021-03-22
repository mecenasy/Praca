import { Bundle } from "../types";

export const generateScripts = ({ assets }: Bundle): string => (
   assets
      .map((asset) => (
         `<script type="module" src="${asset}"></script>`)
      )
      .reverse()
      .join('')
);
