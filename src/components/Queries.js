import { gql } from "@apollo/client";

export const All_Users = gql`
  query {
    users {
      data {
        id
        name
        username
        email
        address {
          street
          suite
          city
          zipcode
        }
        phone
        website
      }
    }
  }
`;
