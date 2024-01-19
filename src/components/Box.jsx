import { useId, useState } from "react"
function Box({getting,Change,data ,changeVal,isDis,values}){
let id=useId()
return (
<div className="md:min-h-[100px]  md:w-[600px]  w-100% bg-slate-300 border border-black-700 my-3 rounded-3xl p-4 ">
<div className="float-left md:w-[47%] m-2 w-full">
<label htmlFor={id} className="w-full font-bold ">Amount</label>
<input id={id} value={values} type="number" readOnly={isDis} className="bg-blue-100 w-full h-10 rounded-xl p-2 border-2 border-black mb-2" onChange={(e)=>{
 console.log(e.target.value)
getting(e.target.value);
}}/>
</div>
<div className="float-left md:w-[47%] m-2 w-full">
<label htmlFor="Amount" className="w-full font-bold ">Currency Type</label>
<select
  className="bg-blue-100 w-full h-10 rounded-xl border-2 border-black mb-2 text-black"
  value={changeVal}
  onChange={(e) => {
    Change(e.target.value);
  }}
>
  <option disabled value="">
    Select
  </option>
  {data.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ))}
</select>

</div>

</div>
)
}

export default Box