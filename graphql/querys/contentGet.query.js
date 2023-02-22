import { gql } from "@apollo/client"

export const QUERY_CONTENT_GET = gql`
  query {
    packages (
        limit: 100
        page: 1
        order_field: "_id"
        order_sort: "asc"
        subdomain: "special"
      ) {
      data {
        slug
        status
        data {
          subdomain
          directory
          file {
            _id
            type
            path
            data {
              title
              credits
              source
            }
          }
          multimedia {
            _id
            type
            path
            data {
              title
              credits
              source
              image_path
              type_video
              embed
            }
          }
        }
        metadata_seo {
          keywords
          seo_title
          seo_description
        }
        metadata {
          key
          value
        }
      }
      total
      per_page
      current_page
      last_page
    }
  }
`
