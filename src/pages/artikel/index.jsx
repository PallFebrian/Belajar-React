import React from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Button from "../../module/button";
import { deleteArtikel, getAllArtikel } from "../../api/auth";
import Swal from "sweetalert2";

export default function Artikel() {
  const [listArtikel, setListArtikel] = React.useState([]);
  const [isFetchArtikel, setIsFetchArtikel] = React.useState(false);
  const navigate = useNavigate();
  const getListArtikelHandle = async () => {
    try {
      setIsFetchArtikel(true);
      const response = await getAllArtikel();
      console.log("response =>", response.data);
      setIsFetchArtikel(false);

      console.log("jalan lagi");
      setListArtikel(response.data.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      // setIsFetchArtikel(true);
    }
  };
  console.log(listArtikel);
  React.useEffect(() => {
    getListArtikelHandle();
  }, []);

  return (
    <div>
      <Button
        title={"create srtikel"}
        onClick={() => {
          return navigate("/artikel/create");
        }}
      />
      <table className="table-auto w-full">
        <thead>
          <tr className="text-left border">
            <th>No</th>
            <th>Judul</th>
            <th>Thumbnail</th>
            <th>Artikel</th>
            <th>Penulis</th>
            <th>Dibuat</th>
            <th>Diupdate</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {isFetchArtikel ? (
            <tr>
              <td colSpan={9}>
                <Skeleton
                  count={15}
                  highlightColor="#444"
                  height={40}
                  //   baseColor="red"
                  //    highlightColor="blue" count={1}
                />
              </td>
            </tr>
          ) : (
            listArtikel.map((artikel, index) => {
              return (
                <tr key={index} className="text-left border">
                  <td>{index + 1}</td>
                  <td>{artikel?.judul}</td>
                  <td>
                    <img src="{artikel.thumbnail}" className="w-[200px] h-[200px]" />
                  </td>
                  {/* <td className="-indent -8 truncate break-all">
                                        {artikel?.artikel}
                                    </td> */}
                  <td>{artikel?.user?.name}</td>
                  <td>{artikel.created_at}</td>
                  <td>{artikel.update_at}</td>
                  <td>
                    {" "}
                    <Button
                      onClick={() => {
                        return navigate(`/artikel/edit/${artikel.slug}`);
                      }}
                      color="blue"
                      title={"edit"}
                    />
                    <Button
                      onClick={() => {
                        return navigate(`/artikel/${artikel.slug}/detail`);
                      }}
                      color="yellow"
                      title={"detail"}
                    />
                    <Button
                     onClick={
                        async() => {
                          console.log("delete jalan");
                          const response = await deleteArtikel(artikel.id)
                          console.log(response.data)
                          try {
                            if (response.data.status === "Fail") {
                              const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                  toast.addEventListener('mouseenter', Swal.stopTimer)
                                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                              })
                              
                              Toast.fire({
                                icon: 'error',
                                title: 'Failed to Delete Article'
                              })
                            }
                            else {
                              const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                  toast.addEventListener('mouseenter', Swal.stopTimer)
                                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                              })
                              
                              Toast.fire({
                                icon: 'success',
                                title: 'Deleted'
                              })
                            }
                            getListArtikelHandle()
                          }
                          catch (err){
                            console.log(err);
                          }
                        }
                      }
                      color="red"
                      title={"delete"}
                    />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
