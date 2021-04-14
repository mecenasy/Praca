import { Schema, Document, model } from "mongoose";

export interface IMenu {
   name: string;
   shortName?: string;
   link: string;
   image: string;
}

const menuSchema = new Schema<IMenu & Document>({
   name: String,
   shortName: {
      type: String,
      required: false,
   },
   link: String,
   image: String,
});

export default model<IMenu & Document>('menu', menuSchema);
