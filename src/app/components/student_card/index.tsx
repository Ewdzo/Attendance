'use client'

import NextImage from "next/image";

export const StudentCard = (props: {
    student: any
}) => {
    console.log(props.student)

    return (
        <div className="flex gap-2 items-center">
            <div >
                <NextImage 
                    width={50}
                    height={50}
                    className="rounded-xl"
                    alt="UFU's Logo"
                    src={"data:image/png;base64, " + props.student.photo}
                />
            </div>
            <div className="flex justify-between gap-2">
                <p>{props.student.attendance} - {props.student.name}</p>
            </div>
        </div>
    )
}