import React from "react";

export default function Card({ data, value, setData }) {
  console.log("data adalah", data);

  const handleDelete = (e) => {
    e.preventDefault()

    let filter = data.filter((item)=>{

      return item.id !== parseFloat(e.target.value);
    })
    console.log(filter)
    setData(()=>{
      return filter; 
  })

    console.log("oke")
  }

  return (
    <React.Fragment>
      <div>
        {data?.map((item) => {
          return (
            <div>
              <p>Username : {item.username}</p>
              <p>Email : {item.email}</p>
              <p>Password : {item.password}</p>
              <p>Confirm Password : {item.confirmPassword}</p>
              <button value={item?.id} onClick={handleDelete}>HAPUS</button>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
 