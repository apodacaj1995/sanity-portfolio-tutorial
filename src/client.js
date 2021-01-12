import sanityClient from '@sanity/client'

export default sanityClient({
    // this tells connects Sanity to react
    projectId: "rxnadaw2",
    // find projectId in sanity.json 
    // OR
    // find on manage.sanity.io
     
    dataset: "production"
})