import React,{useState} from 'react'

import Word from './word.jsx'
export default function Bank(){
    const[accounts,setAccounts]=useState([])
    const [data,setData]=useState({Name:'',accountNum:'',
                                   amountToDeposite:'',amountTowithdraw:'',
                                   amountTotransfer:'',receiver:'',
                                   sender:''})
function handleInput(e){
setData(prev=>({...prev,[e.target.name]:e.target.value}))
}
function createAccount(){
    if(data.Name.trim()===''||data.accountNum.trim()==='' ) return
    setAccounts(prev=>[...prev,{Name:data.Name,number:data.accountNum,
                    balance:0}])
    setData(prev=>({...prev,Name:'',accountNum:''}))
}
function Deposite(user,amount){
const parsedAmount=parseFloat(amount)
if(isNaN(parsedAmount)){alert('please enter valid amount'); return}
setAccounts(prev=>prev.map(acc=>{
    if(acc.number===user){
        return {...acc,balance:acc.balance+parsedAmount}
    }
    else{return acc}
}))
setData(prev=>({...prev,amountToDeposite:''}))}

function Withdraw(user,amount){
    const parsedAmount=parseFloat(amount)
if(isNaN(parsedAmount)){alert('please enter valid amount');return;}
else if(user.balance<parsedAmount){alert('insufficient balance');return;}
setAccounts(prev=>prev.map(acc=>acc===user?
    {...acc,balance:acc.balance-parsedAmount}:acc))
    setData(prev=>({...prev,amountTowithdraw:''}))
}
function transfer(sender,receiv,amount){
    const parsedAmount=parseFloat(amount)
    console.log(sender)
    const receiver=accounts.find(acc=>acc.number===receiv) 
    if(isNaN(parsedAmount)){alert('please enter valid amount');return}
    else if(sender.balance<parsedAmount){
        alert('insuficient balance');return
    }
    else if(!receiver){alert('receiver not exist'); return}
    setAccounts(prev=>prev.map(acc=>{
        if(acc===sender){
            return {...acc,balance:acc.balance-parsedAmount}
        }
        else if(acc===receiver){
            return {...acc,balance:acc.balance+parsedAmount}
        }
        else{return acc}
    }))
    setData(prev=>({...prev,amountTotransfer:'',receiver:''}))
}
    return(
    <section>
<div>
      <h2>Bank App</h2>
      <input type="text" value={data.Name}
            onChange={handleInput} name='Name'
            placeholder='enter name'/>
            <input type="text" value={data.accountNum}
            onChange={handleInput} name='accountNum'
            placeholder='enter account'/>
            <button onClick={createAccount}>Create Account</button>
    </div>
    {accounts.map((acc,index)=><Word key={index}
                             name={acc.Name}
                             user={acc}
                             account={acc.number}
                             balance={acc.balance}
                             deposite={Deposite}
                             receiver={data.receiver}
                            amountToDeposite={data.amountToDeposite}
                            amountTowithdraw={data.amountTowithdraw}
                            amountTotransfer={data.amountTotransfer}
                            handleChange={handleInput}
                            Withdraw={Withdraw}
                            transfer={transfer}/>)}
    </section>)
  
}