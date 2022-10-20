import React from "react";
import Input from "../../module/input";
import Button from "../../module/button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { createArtikel, getDetailArtikel, editArtikel } from "../../api/auth";

export default function EditArtikel() {
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

  let { slug } = useParams();

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
      const response = await editArtikel(payload);
      let data = response?.data
      console.log(data)
      if(data?.status === 'fail'){
        return alert (data?.message)
      }
      setIsLoading(false);
      alert("berhasil");
      return navigate("/artikel", { replace: true });
    } catch (err) {
      console.log(err);
      setError(err?.response?.data?.errors);
      setIsLoading(false);
      setErrorMessage("Error Error Error");
    }
  };
  //   console.log("error semua", error);

  const getAllDetailArtikel = async () => {
    try {
      const response = await getDetailArtikel(slug);
      const data = response.data;
      console.log(data);
      setPayload((payload) => {
        return {
          ...payload,
          id: data?.id,
          judul: data?.judul,
          artikel: data?.artikel,
          thumbnail: data?.thumbnail,
          imagePreview: data?.thumbnail,
        };
      });
    } catch (err) {
      console.log("err", err);
    }
  };
  React.useEffect(() => {
    getAllDetailArtikel();
  }, []);

  return (
    <div>
      <h1>Edit artikel</h1>
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
              console.log("code here");
              let reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = () => {
                setPayload((payload) => {
                  return {
                    ...payload,
                    imagePreview: reader.result,
                    thumbnail: file,
                  };
                });
              };
            } else {
              return alert("file harus image/pdf");
            }
          }}
        />

        <img src={payload.imagePreview} alt={payload.imagePreview} />

        <Button title={isLoading ? "Updating" : "Update"} />

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
