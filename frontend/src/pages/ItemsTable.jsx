import '../styles/ItemsTable.css'

function ItemsTable({items,setItems}){

  const handleChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        itemName: "",
        qty: 1,
        price:"",
      },
    ]);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const grandTotal = items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

    return(
         <div className="items-container">
            <h3>Items</h3>

      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={item.itemName}
                  onChange={(e) =>
                    handleChange(index, "itemName", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) =>
                    handleChange(index, "qty", Number(e.target.value))
                  }
                />
              </td>

              <td>
                <input
                  type="text"
                  value={item.price}
                  onChange={(e) =>
                    handleChange(index, "price", Number(e.target.value))
                  }
                />
              </td>

              <td>₹{item.qty * item.price}</td>

              <td>
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" onClick={addItem}>
        Add Item
      </button>

      <h3>Grand Total: ₹{grandTotal}</h3>
    </div>
        
    );



}
export default ItemsTable;