import dbConnect from "@/lib/dbConnect";
import Todo from '@/Models/todo'

export default async function handler(req,res){
    await dbConnect();

    const todo = req.body;

    await Todo.findOneAndDelete(todo);

    res.json({message: `${todo._id} id numaralı kayıt silindi!`});
}