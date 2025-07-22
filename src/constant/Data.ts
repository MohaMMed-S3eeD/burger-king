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

export const getCategories = async () => {
    return await prisma.category.findMany();
};

export const getOffers = async () => {
    return await prisma.offer.findMany();
};



