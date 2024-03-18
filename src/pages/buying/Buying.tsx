import { useContext } from "react";
import Container from "../../components/container/Container";
import { ShopingCartContext } from "../../context/shopingCartContext";
import { useSendOrder } from "../../hooks/useSendOrder";
import { useFormik } from "formik";
import * as Yup from "yup";

// type TMyValues = {
//   email: string;
//   address: string;
// };

function Buying() {
  const { cartItems } = useContext(ShopingCartContext);
  const { mutate: handleOrderMutate } = useSendOrder();

  const formik = useFormik({
    initialValues: { email: "", address: "" },

    onSubmit: (values) => {
      console.log(values);

      handleOrderMutate({
        address: values.address,
        email: values.email,
        items: cartItems,
      });
    },

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .min(10,'The email must be at least 10 characters')
        .max(30)
        .email("The email entered is not valid")
        .required("Email is required"),
      address: Yup.string()
        .min(10, "the address must be at least 10 characters")
        .required("Address is required"),
    }),
  });

  // validate: (values) => {
  //   const errors = {
  //     address: "",
  //     email: "",
  //   };

  //   if (values.address === "") {
  //     errors.address = "Address is required";
  //   } else if (values.address.length < 5) {
  //     errors.address =
  //       "The length of the address must be at least 5 characters";
  //   }

  //   if (values.email === "") {
  //     errors.email = "Email is required";
  //   } else if (
  //     !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/i.test(values.email)
  //   ) {
  //     errors.email = "The email entered is not valid";
  //   }

  //   return errors;
  // },

  return (
    <div className=" mt-16 h-96 flex items-center">
      <Container>
        <form
          onSubmit={formik.handleSubmit}
          className=" flex flex-col gap-10 items-center justify-center"
        >
          <input
            className=" border-none outline-none w-2/4 p-3 rounded-lg text-lg"
            type="email"
            placeholder="Enter your Email..."
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.errors.email && formik.touched.email && (
            <p className=" text-red-400 text-lg">* {formik.errors.email} *</p>
          )}

          <input
            className=" border-none outline-none w-2/4 p-3 rounded-lg text-lg"
            value={formik.values.address}
            placeholder="Enter your current Address..."
            type="text"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.address && formik.touched.address && (
            <p className=" text-red-400 text-lg">* {formik.errors.address} *</p>
          )}
          <div>
            <button
              type="submit"
              className=" mr-4 border-none outline-none px-4 w-32 py-2 bg-green-700 text-white text-xl rounded-lg hover:bg-green-800 hover:scale-95 transition duration-200"
            >
              Order
            </button>
            <button
              className=" border-none outline-none px-4 py-2 w-32 bg-red-600 text-white text-xl rounded-lg hover:bg-red-700 hover:scale-95 transition duration-200"
              type="button"
              onClick={formik.handleReset}
            >
              Clear
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Buying;
