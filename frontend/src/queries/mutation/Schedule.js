import { gql } from "@apollo/client";

const SCHEDULE_MUTATION = gql`
    mutation scheUsrs(
        $id:ID!
        $usrID:[String!]
    ){
    updateSchedule(id:$id, data:{schedule_users:$usrID,}) {
        data {
        attributes {
            schedule_users {
            data {
                id
                attributes {
                email
                }
            }
            }
        }
        }
    } 
    }
`;

export default SCHEDULE_MUTATION