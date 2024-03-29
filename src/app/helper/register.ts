import axios from "axios"


export const registerStudent = async (student: any, fn:any) => {
    await axios.post((process.env.NEXT_PUBLIC_API_URL + "/student"), {
        data: {
            name: student.nome,
            matricula: student.matricula,
            photo: student.foto,
            attendance: 0
        }
    })
    .then((res) => { return {...res, success: "Cadastrado com Sucesso"}})
    .then((res) => fn(res))
    .catch(e => {
        fn(e.response.data)
    });
}