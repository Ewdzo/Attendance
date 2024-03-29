import axios from "axios"


export const registerStudent = async (student: any, fn:any) => {
    const data = await axios.post(process.env.NEXT_PUBLIC_API_URL, {
        name: student.nome,
        matricula: student.matricula,
        attendance: 0
    })
    .then((res) => { return {...res, success: "Cadastrado com Sucesso"}})
    .then((res) => fn(res))
    .catch(e => fn({ error: "Falha no Axios" }) );

    if(!data) {
        fn({ error: "Falha no Axios" });
        return;
    }

    fn(data);
}