export default function handler(req,res){
    if(req.method === "GET"){
        res.json({message: "Api İsteği Çalışıyor!"})
    }else if(req.method === "POST"){
        if(req.body.method === "Add"){

        }

        if(req.body.method === "Update"){
            
        }
    }
    
}
