// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import mongoose from "mongoose"
import Todo from '../../Models/todo';

const connection = {};

async function dbConnect(){
  if(connection.isConnected){
    return;
  }

  const db = await mongoose.connect("mongodb+srv://tsaydam:1@testdb.f7wjvsl.mongodb.net/");

  connection.isConnected = db.connections[0].readyState;

  console.log("MongoDb Connection başarıl!");
}

export default async function handler(req, res) {
  await dbConnect();

  let data = new Todo();
  data.work = "Deneme";
  data.isCompleted = true;

  await data.save();


  const result = await Todo.find();

  res.status(200).json(result)
}
