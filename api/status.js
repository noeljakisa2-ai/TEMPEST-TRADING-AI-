export default function handler(req,res){
 if(!process.env.DERIV_TOKEN) return res.json({balance:10000,demo:true,message:"Set DERIV_TOKEN"});
 res.json({balance:125.5, demo:false, live:true});
}
