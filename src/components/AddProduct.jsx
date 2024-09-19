import { useFormik } from 'formik';
import "../style/AddProduct.css";  // Import the CSS file
import axios from 'axios';

const AddProduct = () => {
    const formik = useFormik({
        initialValues: {
            title: "",
            pimage: null,
            discount: "",
            o_price: 0,
            s_price: 0,
            weight: ""
        },
        onSubmit: async (values) => {
            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("pimage", values.pimage);
            formData.append("discount", values.discount);
            formData.append("o_price", parseInt(values.o_price));
            formData.append("s_price", parseInt(values.s_price));
            formData.append("weight", values.weight);

            try {
                await axios.post("http://127.0.0.1:4000/add-product", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                console.log("Product Added");
            } catch (error) {
                console.error("Error adding product", error);
            }
        }
    });

    return (
        <div className="form-container">
            <h1>Add Product</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Product Title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pimage">Product Image</label>
                    <input
                        id="pimage"
                        name="pimage"
                        type="file"
                        onChange={(event) => {
                            formik.setFieldValue("pimage", event.currentTarget.files[0]);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="discount">Discount</label>
                    <input
                        id="discount"
                        name="discount"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.discount}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="o_price">Original Price</label>
                    <input
                        id="o_price"
                        name="o_price"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.o_price}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="s_price">Selling Price</label>
                    <input
                        id="s_price"
                        name="s_price"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.s_price}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="weight">Weight</label>
                    <input
                        id="weight"
                        name="weight"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.weight}
                    />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;
