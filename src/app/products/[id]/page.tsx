import prisma from "@/db";

const ProductDetail = async ({ params }: { params: { id: string } }) => {

    const singleProduct = await prisma.product.findFirst({
        where: { id: Number(params.id) 

        }
    });
    return (
        <div>
            <h1>Single Product Details </h1>
            <div>{singleProduct?.name}</div>
            <div>{singleProduct?.description}</div>
            <div>{singleProduct?.image}</div>
            <div>{singleProduct?.category}</div>
            <div>{singleProduct?.rating}</div>
        </div>
    );
};

export default ProductDetail;