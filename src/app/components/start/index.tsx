'use client'

import { Button, Input, Card, CardHeader, CardBody, Spacer } from "@nextui-org/react"
import NextImage from "next/image";
import ImageIcon from "./image.png";
import { useState } from "react";
import { scanQRInput } from "@/app/helper/qrcode";

export const Start = () => {
    const [data, setData] = useState<File>();

    return (
        <Card className="p-10">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <p className="text-tiny uppercase font-bold">Controle de Frequência - UFU</p>
            </CardHeader>
            <Spacer y={10} />
            <CardBody className="overflow-visible py-2 items-between">
                <div className="items-center flex flex-col">
                    <label htmlFor="file-input" className="p-12 border-8 rounded-lg border-gray-200">
                        <NextImage
                            width={150}
                            height={150}
                            alt="Image Icon"
                            src={ImageIcon}
                            className="opacity-25"
                        />
                    </label>
                    <Input
                        type="file"
                        accept="image/*"
                        onChange={({target}) => { if(target.files) scanQRInput(target.files[0]);}}
                        id="file-input"
                        className="hidden"
                    />
                </div>
                <Spacer y={20} />
                <div className="items-center flex flex-col">
                    <Button>Cadastrar-se</Button>
                </div>
            </CardBody>
        </Card>
    )
}