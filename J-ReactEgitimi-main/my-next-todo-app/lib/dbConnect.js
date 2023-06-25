import mongoose from 'mongoose';

const connection = {};
const uri = "mongodb+srv://tsaydam:1@testdb.f7wjvsl.mongodb.net/";

async function dbConnect(){
    if(connection.isConnected) return;

    const db = await mongoose.connect(uri);

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
