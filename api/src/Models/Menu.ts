import { Schema, Document, model } from "mongoose";

export interface IMenu {
   name: string;
   shortName?: string;
   position: number;
   link: string;
   image: string;
}

const menuSchema = new Schema<IMenu & Document>({
   name: String,
   shortName: {
      type: String,
      required: false,
   },
   position: {
      type: Number,
      unique: true,
      required: true,
   },
   link: String,
   image: String,
});

export default model<IMenu & Document>('menu', menuSchema);
