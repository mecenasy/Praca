import { Schema, Document, model } from "mongoose";

export interface IMenu extends Document {
   name: string;
   link: string;
   image: string;
}

const menuSchema = new Schema<IMenu>({
   name: String,
   link: String,
   image: String,
});

export default model<IMenu>('menu', menuSchema);
