'use client'

import { Button, Card, CardHeader, CardBody, Spacer } from "@nextui-org/react"
import NextImage from "next/image";
import ImageIcon from "../../assets/image.svg";
import UFULogo from "../../assets/ufu.png";
import { useState } from "react";
import { scanQRInput } from "@/app/helper/qrcode";

export const Start = () => {
    const [student, setStudent] = useState<any>({ foto: ImageIcon, default: true });

    return (
        <Card className="p-10">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <NextImage 
                    width={50}
                    height={50}
                    alt="UFU's Logo"
                    src={UFULogo}
                />
                <Spacer y={2}/>
                <p className="text-tiny uppercase font-bold">Controle de Frequência</p>
            </CardHeader>
            <Spacer y={5} />
            <CardBody className="overflow-visible py-2 items-between">
                <div className="items-center flex flex-col">
                    <label htmlFor="file-input" className="p-12 border-8 rounded-lg border-gray-200">
                        <NextImage
                            width={150}
                            height={150}
                            alt="Image Icon"
                            src={student.foto}
                            className={student.default ? "opacity-25" : ""}
                        />
                    </label>
                    <Spacer y={5} />
                    { student.error && <p>{student.error}</p> }
                    { student.nome && <p>{student.nome}</p> }
                    <input
                        type="file"
                        accept="image/*"
                        onChange={({ target }) => { if (target.files && target.files[0]) scanQRInput(target.files[0], setStudent) }}
                        id="file-input"
                        className="hidden"
                    />

                </div>
                <div className="items-center flex flex-col">
                    <Spacer y={10} />
                    <Button>Confirmar</Button>
                    <Spacer y={5} />
                    <Button>Cadastrar-se</Button>
                </div>
            </CardBody>
        </Card>
    )
}