function NumberedList({ children: items }) {
  return (
    <ul className="numbered-list">
        {items.map((item, i) => 
            <li className="numbered-list__item">
                <div className="number">{ i + 1 }</div>
                <div>
                    { item.props.children }
                </div>
            </li>
        )}
        
    </ul>
  )
}

export default NumberedList