import { useState } from "react"

const Button = ({text,color,size,onClick,disabled}) => {
  return(
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 mr-3 mb-2
        ${size === 'small' ? 'text-sm px-2 py-1' : ''}
        ${size === 'large' ? 'text-lg px-6 py-2' : ''}
        ${size === 'extraLarge' ? 'text-2xl px-7 py-3' : ''}
        ${color === 'primary' ? 'bg-blue-500 hover:bg-blue-600 text-white' : ''}
        ${color === 'secondary' ? 'bg-gray-500 hover:bg-gray-600 text-white' : ''}
        ${color === 'danger' ? 'bg-red-500 hover:bg-red-600 text-white' : ''}
        ${color === 'success' ? 'bg-green-500 hover:bg-green-600 text-white' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed':'cursor-pointer'}`
      }
    >
      { text}
    </button>
  )
}


const BasicProps = () => {
  const [clickCount,setClickCount] = useState(0)
  return (
    <div className="bg-white p-3 rounded-lg">
      <div>
        <h1 className='font-bold text-2xl py-2'>
          Basic Props
        </h1>
        <p className="text-sm pb-3">Different Colors : 4</p>
        <div className="flex-row flex-wrap">
          <Button color={'primary'} text={"Primary button"} onClick={()=>setClickCount(clickCount + 1)}/>
          <Button color={'secondary'} text={"Secondary button"}  onClick={()=>setClickCount(clickCount + 1)}/>
          <Button color={'danger'} text={"Danger button"}  onClick={()=>setClickCount(clickCount + 1)}/>
          <Button color={'success'} text={"Success button"}  onClick={()=>setClickCount(clickCount + 1)}/>
        </div>
         <p className="text-sm mt-3">Different Size : 4</p>
        <div className="flex-row flex-wrap">
          <Button color={'primary'} text={"Primary button"} onClick={()=>setClickCount(clickCount + 1)} size={'small'}/>
          <Button color={'secondary'} text={"Secondary button"}  onClick={()=>setClickCount(clickCount + 1)} size={'large'}/>
          <Button color={'danger'} text={"Danger button"}  onClick={()=>setClickCount(clickCount + 1)} size={'extraLarge'}/>
        </div>
        <p className="text-sm mt-3">Different Size : 4</p>
        <div className="flex-row flex-wrap">
          <Button color={'primary'} text={"Not Disabled"} onClick={()=>setClickCount(clickCount + 1)} size={'small'} />
          <Button color={'primary'} text={"disabled"}  onClick={()=>setClickCount(clickCount + 1)} disabled={true}/>
        </div>
        <p className="font-bold bg-blue-100 p-3 rounded-sm">No of Counts : {clickCount}</p>
      </div>
    </div>
  )
}

export default BasicProps