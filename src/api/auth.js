import axios from './baseUrl2';

export function loginProses(payload) {
    return axios.post("/login", payload)
}

export function getDetailArtikel(slug) {
    return axios.get(`/artikel/${slug}`)
}


export function getAllArtikel() {
    return axios.get("/artikel")
}

// export function createArtikel(payload) {
//     return axios.get("/artikel",payload)
// }

export function createArtikel(payload) {
    console.log('payload akan dikirim', payload)

    const formData = new FormData()
    formData.append('judul',payload.judul)
    formData.append('artikel',payload.artikel)
    formData.append('thumbnail',payload.thumbnail)

    return axios.post("/artikel",formData)
}   
export function editArtikel(payload) {
    console.log('payload akan dikirim', payload)

    const formData = new FormData()
    formData.append('judul',payload.judul)
    formData.append('artikel',payload.artikel)
    formData.append('thumbnail',payload.thumbnail)

    return axios.post(`/artikel/edit/${payload?.id}`,formData)
}   


export function detailArtikel(value) {
    return axios.get(`/artikel/${value}`)
}
export function deleteArtikel(id) {
    return axios.post(`/artikel/delete/${id}`)
}

