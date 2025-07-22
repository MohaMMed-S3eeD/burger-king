import { prisma } from "@/lib/prisma";

export const getProducts = async () => {
    const products = await prisma.product.findMany({
        include: {
            category: true
        }
    });
    return products.map(product => ({
        ...product,
        category: product.category.name
    }));
};

// إضافة دالة للحصول على منتج واحد فقط
export const getProductById = async (id: number) => {
    const product = await prisma.product.findUnique({
        where: { id },
        include: {
            category: true
        }
    });
    
    if (!product) return null;
    
    return {
        ...product,
        category: product.category.name
    };
};

export const getCategories = async () => {
    return await prisma.category.findMany();
};

export const getOffers = async () => {
    return await prisma.offer.findMany();
};



