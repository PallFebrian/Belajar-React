import React from "react";

export default function Card({ data, value, setData }) {
  console.log("data adalah", data);

  const handleDelete = (e) => {
    e.preventDefault();

    let filter = data.filter((item) => {
      return item.id !== parseFloat(e.target.value);
    });
    console.log(filter);
    setData(() => {
      return filter;
    });

    console.log("oke");
  };

  return (
    <React.Fragment>
      <div>
        {data?.map((item) => {
          return (
            <div className="index">
              <p>Username : {item.nama}</p>
              <p>Email : {item.email}</p>
              <p>Tempat lahir : {item.tempatLahir}</p>
              <p>Tanggal lahir: {item.tanggalLahir}</p>
              <p>jenis kelamin: {item.jenisKelamin}</p>
              <p>Password : {item.password}</p>
              <p>Confirm Password : {item.confirmPassword}</p>
              <button
                className="delete"
                value={item?.id}
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="update"
                value={item?.id}
                // onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
