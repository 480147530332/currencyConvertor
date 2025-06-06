// import { useState,useEffect } from "react";

// function useCurrencyInfo(currency){
//     const [data, setdata] = useState({})
// useEffect(()=>{
// fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`)
// .then((res)=>res.json())
// .then((res)=>setdata(res[currency]))
// console.log(data);

// },[currency])
// console.log(data);
// return data

// }

// export default useCurrencyInfo;


import React, { useEffect, useState } from 'react'

function useCurrencyinfo (currency){
 const [data, setdata] = useState({})

 useEffect(()=>{
fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
.then((res)=>res.json())
.then((res)=>setdata(res[currency]))
 },[currency])
 console.log(data);
 return data

}

export default useCurrencyinfo