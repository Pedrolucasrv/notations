import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login(){
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return(
        <div>
            <div className=" grid grid-cols-12 min-h-[100vh] md:max-h-[100vh]">
                <div className="md:col-span-4 ">
                    <div className="h-[100%] px-5 flex items-center">
                        <div className="w-[100%] ">
                            <div className="flex-col justify-center w-100 border-b-2 pb-3 border-[#727272] border-solid">
                                <h1 className="text-3xl text-center font-semibold">ENTRAR</h1>
                                <p className="text-sm text-center">insira seus dados para continuarmos!</p>
                            </div>
                            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                                <input {...register("firstName")} placeholder="First name" />
                                <input {...register("firstName")} placeholder="First name" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-8 bg-blue">

                </div>
            </div>
        </div>
    );
}