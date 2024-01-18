import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Form = () => {

  const msgElement: HTMLInputElement | null = document.getElementById(
    "msg"
  ) as HTMLInputElement;
  const phone: HTMLInputElement | null = document.getElementById(
    "phone"
  ) as HTMLInputElement;
  const name: HTMLInputElement | null = document.getElementById(
    "name"
  ) as HTMLInputElement;
  const mail: HTMLInputElement | null = document.getElementById(
    "mail"
  ) as HTMLInputElement;

  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const form: any = useRef();
  const sendEmail = (e: any) => {
    emailjs
      .sendForm(
        "service_t3dbwlo",
        "template_az0gem7",
        form.current,
        "d45HPl57ZUSR2nUWW"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully");
          mail.value = '';
          name.value = "";
          phone.value = "";
          msgElement.value = "";
        },
        (error) => {
          toast.error("Error!");
        }
      );
  };

  return (
    <form action="method" ref={form} onSubmit={handleSubmit(sendEmail)} className="relative z-50 w-full mt-5 sm:mt-0">
      <div className="mb-5 relative">
        <input
          id="name"
          {...register("name", { required: true })}
          className="outline-none bg-transparent placeholder:text-gray-600 border-b-2 border-b-white border-opacity-50 pb-5 focus:border-opacity-100 duration-500 w-full"
          type="text"
          placeholder="Rose Caldwell"
        />
        {errors.name && (
          <small className=" absolute text-2xl text-red-700">!</small>
        )}
      </div>
      <div className="mb-5 relative">
        <input
          id="mail"
          {...register("mail", { required: true })}
          className="outline-none bg-transparent placeholder:text-gray-600 border-b-2 border-b-white border-opacity-50 pb-5 focus:border-opacity-100 duration-500 w-full"
          type="email"
          placeholder="Email Address"
        />
        {errors.mail && (
          <small className=" absolute text-2xl text-red-700">!</small>
        )}
      </div>
      <div className="mb-5 relative">
        <input
          id="phone"
          {...register("phone", { required: true })}
          className=" outline-none bg-transparent placeholder:text-gray-600 border-b-2 border-b-white border-opacity-50 pb-5 focus:border-opacity-100 duration-500 w-full"
          type="text"
          placeholder="Phone"
        />
        {errors.phone && (
          <small className=" absolute text-2xl text-red-700">!</small>
        )}
      </div>
      <div className="mb-5 relative">
        <input
          id="msg"
          {...register("Msg", { required: true })}
          className="outline-none bg-transparent placeholder:text-gray-600 border-b-2 border-b-white border-opacity-50 pb-5 focus:border-opacity-100 duration-500 w-full"
          type="text"
          placeholder="Your Message"
        />
        {errors.Msg && (
          <small className=" absolute text-2xl text-red-700">!</small>
        )}
      </div>
      <div className="flex justify-end">
        <button className="bg-white px-2 py-1 rounded-md text-sm">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
