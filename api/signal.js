// V109 HYBRID - Stores signal for Phone -> PC Exness bridge
let lastSignal = { action: "WAIT", symbol: "XAUUSD", lot: 0.01, time: 0, broker: "deriv", source: "phone" };
export default function handler(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  if(req.method==='OPTIONS') return res.status(200).end();
  if(req.method==='POST'){
    lastSignal = { action: req.body.action||"WAIT", symbol: req.body.symbol||"XAUUSD", lot: parseFloat(req.body.lot||0.01), time: Date.now(), broker: req.body.broker||"deriv", source: req.body.source||"phone" };
    console.log("SIGNAL:",lastSignal);
    return res.json({ok:true, stored:lastSignal});
  }
  res.json(lastSignal);
}
