export default function Word(props){
   
   
    return(
    <main className="user">
      <div className="user1">
          <div>
            <h4>Name:{props.name}</h4>
            <h4>Account:{props.account}</h4>
            </div>
            <h3>balance:{props.balance}</h3>  
        </div>
        <div>
            <input type="text" placeholder="enter amount to deposite" 
                    value={props.amountToDeposite}
                    onChange={props.handleChange}
                    name='amountToDeposite'/> 
                    <button onClick={()=>props.deposite(props.account,props.amountToDeposite)}>Deposite</button>
        <input type="text" placeholder="enter amount to withdraw" 
        value={props.amountTowithdraw}
        onChange={props.handleChange}
        name='amountTowithdraw'/>
        <button onClick={()=>props.Withdraw(props.user,props.amountTowithdraw)}>WithDraw</button>
        <input type="text" value={props.receiver} 
        onChange={props.handleChange}
        name='receiver'
        placeholder="enter receiver account"
        />
        <input type="text" name="amountTotransfer" 
            value={props.amountTotransfer} 
            onChange={props.handleChange} 
            placeholder="enter amount to trnansfer"/>
        <button onClick={()=>props.transfer(props.user,props.receiver,props.amountTotransfer)}>transfer</button>
        </div>
    </main>
        
    )
}