import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  const products = await Product.find();

  console.log(products);

  return response.status(200).json(products);
}
