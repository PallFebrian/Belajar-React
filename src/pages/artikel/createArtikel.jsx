import React from "react";
import Input from "../../module/input";
import Button from "../../module/button";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { createArtikel } from "../../api/auth";

export default function CreateArtikel() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [error, setError] = React.useState({});
  const [payload, setPayload] = React.useState({
    judul: "",
    artikel: "",
    thumbnail: "",
    imagePreview: null,
  });
  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(payload);
    
    try {
      e.preventDefault();
      setIsLoading(true);
      const res = await createArtikel(payload);
      setIsLoading(false);
      alert('berhasil')
      return navigate('/artikel', {replace: true})
    } catch (err) {
      console.log(err);
      setError(err?.response?.data?.errors);
      setIsLoading(false);
      setErrorMessage("Error Error Error");
    }
  };
  //   console.log("error semua", error);
  return (
    <div>
      <h1>Create artikel</h1>
      {/* <p className="text-red-500">
        {errorMessage}
      </p> */}
      <form onSubmit={handleSubmit}>
        {/* <p className="text-red-500">{error?.username?.[0]}</p> */}
        <Input
          value={payload.judul}
          label={"judul"}
          placeholder="judul"
          name={"judul"}
          onChange={handleChange}
        />
        {/* <p className="text-red-500">{error?.artikel?.[0]}</p> */}
        <Input
          value={payload.artikel}
          label={"artikel"}
          placeholder="artikel"
          name={"artikel"}
          onChange={handleChange}
        />
        {/* <p className="text-red-500">{error?.artikel?.[0]}</p> */}
        <Input
          type={"file"}
          value={payload?.file}
          label={"thumbnail"}
          placeholder="thumbnail"
          name={"thumbnail"}
          onChange={(e) => {
            console.log("event", e.target.files[0]);
            let file = e.target.files[0];
            if (file.size > 200000) {
              return alert("ukuran lebih dari 200kb");
            }
            if (
              file.type === "image/jpeg" ||
              file.type === "image/png" ||
              file.type === "application/pdf"
            ) {
              console.log('code here')
              let reader = new FileReader()
              reader.readAsDataURL(file)
              reader.onloadend = () => {
                setPayload((payload)=>{
                  return{
                    ...payload,
                    imagePreview: reader.result,
                    thumbnail:file,
                  }
                })
              }
            } else {
              return alert("file harus image/pdf");
            }
          }}
        />

        <img src={payload.imagePreview} alt={payload.imagePreview} />

        <Button  title={isLoading ? 'Saving Data' : 'Save'} />

        <Button
          title={"back"}
          onClick={() => {
            navigate("/artikel", { replace: true });
          }}
        />
      </form>
    </div>
  );
}
