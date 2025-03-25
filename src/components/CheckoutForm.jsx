import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().matches(/^\d{10,11}$/, "Invalid phone number").required("Phone is required"),
  district: yup.string().required("District is required"),
  post_code: yup.string().matches(/^\d{4,6}$/, "Invalid Post Code").required("Post Code is required"),
  thana: yup.string().required("Thana is required"),
});

export default function CheckoutForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">User Information Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        <div>
          <label className="block font-medium">Name</label>
          <input {...register("name")} className="w-full p-2 border rounded" />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Phone</label>
          <input {...register("phone")} className="w-full p-2 border rounded" />
          <p className="text-red-500 text-sm">{errors.phone?.message}</p>
        </div>

        <div>
          <label className="block font-medium">District</label>
          <input {...register("district")} className="w-full p-2 border rounded" />
          <p className="text-red-500 text-sm">{errors.district?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Post Code</label>
          <input {...register("post_code")} className="w-full p-2 border rounded" />
          <p className="text-red-500 text-sm">{errors.post_code?.message}</p>
        </div>

        <div>
          <label className="block font-medium">Thana</label>
          <input {...register("thana")} className="w-full p-2 border rounded" />
          <p className="text-red-500 text-sm">{errors.thana?.message}</p>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
