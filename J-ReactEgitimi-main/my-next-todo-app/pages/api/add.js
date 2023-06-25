import dbConnect from "@/lib/dbConnect";
import Todo from '@/Models/todo';
export default async function handle(req,res){
    await dbConnect();

    const {work, isCompleted} = req.body;
    let todo = new Todo({
        work: work,
        isCompleted: isCompleted,
        date: new Date()
    });    

    let result = await todo.save();

    res.json({message: "Kayıt başarılı!", id: result._id});
}