const before = ["Generic visual direction","Weak, inward-focused headline","No clear next step","Awkward mobile layout","Little reason to trust the business"];
const after = ["Distinctive, credible identity","Clear offer built around the customer","Focused calls to action","Mobile-first experience","Proof and reassurance in the right places"];

export function Comparison() {
  return <section id="transformation" className="editorial-section transformation-section"><div className="shell"><div className="transformation-heading"><h2>From online brochure<br/><em>to focused sales experience.</em></h2><p>A redesign is more than a fresh color palette. It changes how quickly customers understand the offer, trust the business, and decide to act.</p></div><div className="transformation-grid"><div className="transformation-column transformation-before"><span>From</span><ul>{before.map((item,index)=><li key={item}><i>{String(index+1).padStart(2,"0")}</i>{item}</li>)}</ul></div><div className="transformation-column transformation-after"><span>To</span><ul>{after.map((item,index)=><li key={item}><i>{String(index+1).padStart(2,"0")}</i>{item}</li>)}</ul></div></div></div></section>;
}
