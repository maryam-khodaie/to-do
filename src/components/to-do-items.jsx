function TodoItems({items,onRemove }){
    return(
        <div className="items" >
            {
                items.map((item, i) => (
                    <div className="item" key={i}>
                        <span>{item}</span>
                        <button className="remove-btn" onClick={()=>onRemove(item)}>Remove</button>

                    </div>
                ))
            }
            
           
        </div>
    )
}

export default TodoItems