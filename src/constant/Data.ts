import { prisma } from "@/lib/prisma";
import { unstable_cache } from 'next/cache';

export const getProducts = unstable_cache(
    async () => {
        const products = await prisma.product.findMany({
            include: {
                category: true
            }
        });
        return products.map(product => ({
            ...product,
            category: product.category.name
        }));
    },
    ['products'],
    {
        revalidate: 60 * 5, 
        tags: ['products']
    }
);

// إضافة دالة للحصول على منتج واحد فقط
export const getProductById = unstable_cache(
    async (id: number) => {
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
    },
    ['product-by-id'],
    {
        revalidate: 60 * 5, 
        tags: ['products']
    }
);

export const getCategories = unstable_cache(
    async () => {
        return await prisma.category.findMany();
    },
    ['categories'],
    {
        revalidate: 60 * 10, 
        tags: ['categories']
    }
);

export const getOffers = unstable_cache(
    async () => {
        return await prisma.offer.findMany();
    },
    ['offers'],
    {
        revalidate: 60 * 5, 
        tags: ['offers']
    }
);



