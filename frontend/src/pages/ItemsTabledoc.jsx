import "../styles/ItemsTable.css";

function ItemsTabledoc({ items, setItems }) {
  const handleChange = (index, field, value) => {
    const updatedItems = [...items];

    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };

    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        medicineName: "",
        days: "",
        timeOfDay: "",
        instructions: "",
        nonMedicalInstructions: "",
      },
    ]);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="items-container">
      <h3>Medicines</h3>

      <table>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Days</th>
            <th>Time of Day</th>
            <th>Instructions</th>
            {/* <th>Non-Medical Instructions</th> */}
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              {/* Medicine Name */}
              <td>
                <input
                  type="text"
                  placeholder="Medicine name"
                  value={item.medicineName}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "medicineName",
                      e.target.value
                    )
                  }
                />
              </td>

              {/* Days */}
              <td>
                <input
                  type="number"
                  min="1"
                  placeholder="Days"
                  value={item.days}
                  onChange={(e) =>
                    handleChange(index, "days", e.target.value)
                  }
                />
              </td>

              {/* Time of Day */}
              <td>
                <select
                  value={item.timeOfDay}
                  onChange={(e) =>
                    handleChange(index, "timeOfDay", e.target.value)
                  }
                >
                  <option value="">Select</option>
                  <option value="Mn">Mn</option>
                  <option value="An">An</option>
                  <option value="Night">Night</option>
                  <option value="Mn & An">Mn & An</option>
                  <option value="Mn & Night">Mn & Night</option>
                  <option value="An & Night">An & Night</option>
                  <option value="Mn & An & Night">Mn & An & Night</option>

                </select>
              </td>

              {/* Food Instructions */}
              <td>
                <select
                  value={item.instructions}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "instructions",
                      e.target.value
                    )
                  }
                >
                  <option value="">Select</option>
                  <option value="Before Food">Before Food</option>
                  <option value="After Food">After Food</option>
                </select>
              </td>

              {/* Non-Medical Instructions
              <td>
                <input
                  type="text"
                  placeholder="e.g. Drink plenty of water"
                  value={item.nonMedicalInstructions}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "nonMedicalInstructions",
                      e.target.value
                    )
                  }
                />
              </td> */}

              {/* Remove */}
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
        Add Medicine
      </button>
    </div>
  );
}

export default ItemsTabledoc;