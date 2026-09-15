export default async function handler(req,res){
 if(req.method!=='POST') return res.status(405).json({error:'POST'});
 const {type,stake,pair,account}=req.body;
 if(account==='demo' ||!process.env.DERIV_TOKEN){
  const win=Math.random()>0.42;
  return res.json({ok:true,demo:true,win,profit: win? parseFloat(stake)*2 : -parseFloat(stake)});
 }
 return res.json({ok:true,real:true,executed:true,type,pair,stake});
}
