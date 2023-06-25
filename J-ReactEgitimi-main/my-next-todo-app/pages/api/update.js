import dbConnect from "@/lib/dbConnect";
import Todo from '@/Models/todo';

export default async function handle(req,res){
    await dbConnect();

    const todo = req.body;

    await Todo.findByIdAndUpdate(todo._id,todo);
   

    res.json({message: "Güncelleme işlemi başarılı!"})
}