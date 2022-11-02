import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

// Local
// mongodb://nodejs:secret@localhost:27017/nodejs?authSource=admin

// Mongo Atlas
// mongodb+srv://user:<password>@cluster-nodejs-dev.ayoax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&ssl=true

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `${process.env.MONGO_CONF}://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.MONGO_BBDD}${process.env.MONGO_ARGS}`,
      {
        useCreateIndex: true,
        useFindAndModify: false,
        serverSelectionTimeoutMS: 5000
      }
    ),
  ],
  controllers: [],
  providers: []
})
export class MongoClientModule { }
