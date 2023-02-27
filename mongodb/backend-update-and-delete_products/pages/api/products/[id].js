import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";
import { useRouter } from "next/router";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
  if (request.method === "PUT") {
    const productToUpdate = await Product.findByIdAndUpdate(id, {
      $set: request.body,
    });
    return response
      .status(200)
      .json({ status: "Product successfully updated." });
  }
  if (request.method === "DELETE") {
    const product = await Product.findByIdAndDelete(id);
    return response
      .status(200)
      .json({ status: "Product successfully deleted." });
  }
}
