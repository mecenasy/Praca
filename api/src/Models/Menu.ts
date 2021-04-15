import { Schema, Document, model } from "mongoose";

export enum MenuSide {
   Left = 'left',
   Right = 'right',
}
export interface IMenu {
   name: string;
   shortName?: string;
   menuSide: MenuSide;
   position: number;
   hidden?: boolean;
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
   hidden :{
      type: Boolean,
      required: false,
   },
   menuSide: String,
   link: String,
   image: String,
});

export default model<IMenu & Document>('menu', menuSchema);
