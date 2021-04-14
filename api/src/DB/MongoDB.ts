import mongoose from 'mongoose';

class MongoDB {
   constructor() {
      this.connectToDataBase();
   }

   private connectToDataBase() {
      mongoose.connect(
         `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@${MONGO_DB_SERVER}/${MONGO_DB_DATA}?retryWrites=true&w=majority`,
         {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
         },
      );
   }
}

export default MongoDB;
