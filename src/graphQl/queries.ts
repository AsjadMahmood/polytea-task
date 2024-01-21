import { gql } from "@apollo/client";

// Here we will define all our queies

export const PRODUCT_LIST_QUERY = gql`{products {title price}}`;

export const RANDOM_PRODUCTS_QUERY = gql`{randomProducts {title price}}`;
