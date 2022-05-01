import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'zugl5229',
    dataset: 'production',
    apiVersion: '2022-03-22',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

urlFor.then(function () {
    console.log("Promise Resolved");
});

urlFor.catch(function () {
    console.log("Promise Rejected");
});

export const urlFor = (source) => builder.image(source);