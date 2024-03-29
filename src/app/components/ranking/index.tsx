import { Button, Card, CardHeader, CardBody, Spacer } from "@nextui-org/react"
import NextImage from "next/image";
import UFULogo from "../../assets/ufu.png";
import { StudentCard } from "../student_card";
import axios from "axios";

export const Ranking = async () => {
    const data : any = { students: [] };
    data.students = await axios.get((process.env.NEXT_PUBLIC_API_URL + "/student"), {}).then((res) => (res.data.student.students)).then((res) => res).catch(e => e);

    return (
        <Card className="p-6 min-h-screen">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <NextImage 
                    width={50}
                    height={50}
                    alt="UFU's Logo"
                    src={UFULogo}
                />
                <Spacer y={2}/>
                <p className="uppercase font-bold">Ranking de Frequência</p>
            </CardHeader>
            <Spacer y={5} />
            <CardBody className="overflow-visible py-2 items-between gap-4">
                { data.students.length && data.students.map((e: any) => <StudentCard student={e} />)}
            </CardBody>
        </Card>
    )
}