import Todo from '@/Models/todo'
import dbConnect from '@/lib/dbConnect';

export default async function handler(req,res){

    await dbConnect();

    let result = await Todo.find().sort({date: -1});

    res.json(result);
}