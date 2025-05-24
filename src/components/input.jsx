import React,{useId} from 'react'

function InputBox ({
lable,
amount,
onAmountChnage,
onCurrencyChange,
currencyOption = [],
selectCurrency ="usd",
amountDisable =false,
currencyDSisable = false,

classname=""

}){
    const  amountInputId = useId()
    return(
<div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
<div className='w-1/2'>
<label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>{lable}
</label>
<input 
id={amountInputId}
className='outline-none w-full bg-transparent py-1.5'
placeholder='Amount'
disabled = {amountDisable}
value={amount}
onChange={(e)=> onAmountChnage && onAmountChnage(e.target.value)}
type="number" />
</div>
<div className='w-1/2 flex flex-wrap justify-end text-right'> 
<p className='text-black/40 mb-3 w-full'>Currency Type</p>
<select 

className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
value={selectCurrency}
onChange={(e)=>onCurrencyChange && onCurrencyChange (e.target.value)}
disabled={currencyDSisable}
>
    {currencyOption.map((currency)=>(
    <option key={currency}   value={currency}>
        {currency   }
    </option>
    ))}



</select>
</div>
</div>
    );

}
export default InputBox