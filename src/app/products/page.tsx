import prisma from "@/db";
import Link from "next/link";

const Products = async () => {
    const products = await prisma.product.findMany()

    console.log(products)
    return (<>
        <h1 className="text-3xl font-bold ">ALL Products are here</h1>
        <ul>
            {products.map((product) => (
                
                <Link className="text-2xl bg-amber-600 gap-6 first-divne:" key={product.id}
                    href={`/products/${product.id}`}>
                    <li>Title:{product.name} </li>
                    {/* <li>price:{product.price} </li>
                    <li>description:{product.description} </li>
                    <li>image:{product.image} </li>
                    <li>category:{product.category} </li>
                    <li>rating:{product.rating}</li> */}
                    {/* stock:{product.stock}
                    brand:{product.brand}
                    color:{product.color}
                    size:{product.size} */}
                    <br />

                </Link>

            ))}
        </ul>
    </>
    )

};

export default Products;