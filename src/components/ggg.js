import React, {useState} from "react";

const t = (e) => {

}

const Ggg = (props) =>{
    const [name,changeName] = useState('Asher')
    // changeName('Saqlain')
    // t('asher')
    //t('saqlain')
    console.log(props,'props in side ggg')
    return(
        <div>
            <h1>
            {name + ' ' + props.address + ' ' + props.papa}
            </h1>
            <button onClick={()=>{ changeName('Saqlain')}}>
                Change
            </button>
            <button onClick={()=>{changeName('Asher')}}>
                wapis change
            </button>
            <br/>
            <br/>
            <input type="text"
            onChange={(e)=>{changeName(e.target.value)}} />

        </div>
    )
}
export default Ggg;