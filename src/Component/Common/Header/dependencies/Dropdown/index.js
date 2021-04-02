const DropDown =  (props) =>{
    const Items =  props.dropdownItems
    return (
        Items ?
            <div className="dropdown">
                <ul>
                    {Items.map((item) => {
                        return <li><a href={item.url}><span>{item.name}</span> </a></li>
                    })}
                </ul>
            </div> : null 
    )
}

export default  DropDown;